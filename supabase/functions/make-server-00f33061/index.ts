import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js@2";
import * as kv from "./kv_store.tsx";

const app = new Hono();
app.use("*", logger(console.log));
app.use("/*", cors({
  origin: (origin) => {
    // Allow localhost for dev, and .pages.dev / specific prod domains
    if (!origin || origin.startsWith("http://localhost:") || origin.endsWith(".pages.dev") || origin.includes("caresync")) {
      return origin || "http://localhost:5173";
    }
    return "https://carlsync.pages.dev"; // fallback
  },
  allowHeaders: ["Content-Type", "Authorization"],
  allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  exposeHeaders: ["Content-Length"],
  maxAge: 600,
}));

// ── Security Middleware ───────────────────────────────────────────────────────
const rateLimitStore = new Map<string, { count: number, resetAt: number }>();

function rateLimiter(limit: number, windowMs: number) {
  return async (c: any, next: any) => {
    const ip = c.req.header("cf-connecting-ip") || c.req.header("x-forwarded-for") || "unknown";
    const key = `${ip}:${c.req.path}`;
    const now = Date.now();
    let record = rateLimitStore.get(key);
    
    // Clean up occasionally to prevent memory leaks in the map (simplistic approach)
    if (Math.random() < 0.01) {
      for (const [k, v] of rateLimitStore.entries()) {
        if (v.resetAt < now) rateLimitStore.delete(k);
      }
    }
    
    if (!record || record.resetAt < now) {
      record = { count: 1, resetAt: now + windowMs };
      rateLimitStore.set(key, record);
      return next();
    }
    
    if (record.count >= limit) {
      console.warn(`Rate limit exceeded for ${key}`);
      return c.json({ error: "Too many requests. Please try again later." }, 429);
    }
    
    record.count++;
    return next();
  };
}

// 100 requests per minute general limit
app.use("*", rateLimiter(100, 60000));
// 5 requests per minute for auth/invites
app.use(`${P}/signup`, rateLimiter(5, 60000));
app.use(`${P}/invite`, rateLimiter(5, 60000));
app.use(`${P}/invite/join`, rateLimiter(5, 60000));

function sanitize(str: any, maxLen = 1000): string | null {
  if (typeof str !== 'string' || !str.trim() || str.length > maxLen) return null;
  return str.trim();
}


const P = "/make-server-00f33061";
const BUCKET = "make-00f33061-documents";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

// ── Storage bucket (idempotent) ───────────────────────────────────────────────
(async () => {
  const { data: buckets } = await supabase.storage.listBuckets();
  if (!buckets?.some(b => b.name === BUCKET)) {
    await supabase.storage.createBucket(BUCKET, { public: false });
    console.log("Created storage bucket:", BUCKET);
  }
})();

// ── Helpers ───────────────────────────────────────────────────────────────────
function uid() { return crypto.randomUUID(); }
function now() { return new Date().toISOString(); }

async function getUser(c: any) {
  const token = c.req.header("Authorization")?.split(" ")[1];
  if (!token) return null;
  const { data: { user } } = await supabase.auth.getUser(token);
  return user ?? null;
}

async function addTimeline(patientId: string, type: string, description: string, userId: string, actorName: string) {
  const event = { id: uid(), patient_id: patientId, type, description, actor_name: actorName, created_by: userId, created_at: now() };
  const events: any[] = (await kv.get(`timeline:patient:${patientId}`)) ?? [];
  events.unshift(event);
  await kv.set(`timeline:patient:${patientId}`, events.slice(0, 100));
  return event;
}

// ── Health ────────────────────────────────────────────────────────────────────
app.get(`${P}/health`, c => c.json({ status: "ok" }));

// ── Auth ──────────────────────────────────────────────────────────────────────
app.post(`${P}/signup`, async (c) => {
  try {
    const body = await c.req.json();
    const name = sanitize(body.name, 100);
    const email = sanitize(body.email, 255);
    const password = body.password; // let supabase validate password length
    if (!name || !email || typeof password !== 'string' || password.length < 6) {
      return c.json({ error: "Invalid input data" }, 400);
    }
    const { data, error } = await supabase.auth.admin.createUser({
      email, password,
      user_metadata: { name },
      email_confirm: true,
    });
    if (error) {
      console.error("Signup Supabase error:", error);
      return c.json({ error: "Signup failed. Please try again." }, 400);
    }
    return c.json({ user: data.user });
  } catch (e) {
    console.error("Signup error error:", e);
    return c.json({ error: "Signup error failed. Please try again later." }, 500);
  }
});

app.get(`${P}/me`, async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  return c.json({ user });
});

// ── Patients ──────────────────────────────────────────────────────────────────
app.get(`${P}/patients`, async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);

  const ids: string[] = (await kv.get(`patients:user:${user.id}`)) ?? [];
  if (!ids.length) return c.json({ patients: [] });
  const patients = (await kv.mget(ids.map(id => `patient:${id}`))).filter(Boolean);
  return c.json({ patients });
});

app.post(`${P}/patients`, async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  try {
    const body = await c.req.json();
    const name = sanitize(body.name, 100);
    if (!name) return c.json({ error: "Invalid patient name" }, 400);
    body.name = name; // use sanitized
    const id = uid();
    const patient = { id, ...body, created_by: user.id, created_at: now() };
    await kv.set(`patient:${id}`, patient);

    const ids: string[] = (await kv.get(`patients:user:${user.id}`)) ?? [];
    ids.push(id);
    await kv.set(`patients:user:${user.id}`, ids);

    await addTimeline(id, "note", `Patient profile created for ${body.name}`, user.id, user.user_metadata?.name ?? "Caregiver");
    return c.json({ patient });
  } catch (e) {
    console.error("Create patient error error:", e);
    return c.json({ error: "Create patient error failed. Please try again later." }, 500);
  }
});

app.patch(`${P}/patients/:id`, async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  const id = c.req.param("id");
  const updates = await c.req.json();
  const patient = await kv.get(`patient:${id}`);
  if (!patient) return c.json({ error: "Patient not found" }, 404);
  const updated = { ...patient, ...updates, updated_at: now() };
  await kv.set(`patient:${id}`, updated);
  return c.json({ patient: updated });
});

// ── Medications ───────────────────────────────────────────────────────────────
app.get(`${P}/patients/:id/medications`, async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  const meds: any[] = (await kv.get(`medications:patient:${c.req.param("id")}`)) ?? [];
  return c.json({ medications: meds });
});

app.post(`${P}/medications`, async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  try {
    const body = await c.req.json();
    const { patient_id } = body;
    const name = sanitize(body.name, 100);
    const dosage = sanitize(body.dosage, 100);
    if (!name || !patient_id) return c.json({ error: "Invalid medication data" }, 400);
    body.name = name;
    if (dosage) body.dosage = dosage;
    const med = { id: uid(), ...body, created_by: user.id, created_at: now() };
    const meds: any[] = (await kv.get(`medications:patient:${patient_id}`)) ?? [];
    meds.push(med);
    await kv.set(`medications:patient:${patient_id}`, meds);
    await addTimeline(patient_id, "medication", `${user.user_metadata?.name ?? "Caregiver"} added ${body.name} ${body.dosage}`, user.id, user.user_metadata?.name ?? "Caregiver");
    return c.json({ medication: med });
  } catch (e) {
    console.error("Create medication error error:", e);
    return c.json({ error: "Create medication error failed. Please try again later." }, 500);
  }
});

app.patch(`${P}/medications/:id`, async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  try {
    const medId = c.req.param("id");
    const updates = await c.req.json();
    const { patient_id } = updates;
    const meds: any[] = (await kv.get(`medications:patient:${patient_id}`)) ?? [];
    const idx = meds.findIndex(m => m.id === medId);
    if (idx === -1) return c.json({ error: "Medication not found" }, 404);
    const prev = meds[idx];
    meds[idx] = { ...prev, ...updates, updated_at: now() };
    await kv.set(`medications:patient:${patient_id}`, meds);

    // Create timeline event for taken/missed
    if (updates.taken_today !== undefined) {
      const action = updates.taken_today ? "marked as taken ✓" : "marked as missed ✗";
      await addTimeline(patient_id, "medication", `${user.user_metadata?.name ?? "Caregiver"} ${action} ${prev.name} ${prev.dosage}`, user.id, user.user_metadata?.name ?? "Caregiver");
    }
    return c.json({ medication: meds[idx] });
  } catch (e) {
    console.error("Update medication error error:", e);
    return c.json({ error: "Update medication error failed. Please try again later." }, 500);
  }
});

app.delete(`${P}/medications/:id`, async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  const medId = c.req.param("id");
  const patientId = c.req.query("patient_id");
  if (!patientId) return c.json({ error: "patient_id required" }, 400);
  const meds: any[] = (await kv.get(`medications:patient:${patientId}`)) ?? [];
  await kv.set(`medications:patient:${patientId}`, meds.filter(m => m.id !== medId));
  return c.json({ success: true });
});

// ── Tasks ─────────────────────────────────────────────────────────────────────
app.get(`${P}/patients/:id/tasks`, async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  const tasks: any[] = (await kv.get(`tasks:patient:${c.req.param("id")}`)) ?? [];
  return c.json({ tasks });
});

app.post(`${P}/tasks`, async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  try {
    const body = await c.req.json();
    const { patient_id } = body;
    const title = sanitize(body.title, 200);
    if (!title || !patient_id) return c.json({ error: "Invalid task data" }, 400);
    body.title = title;
    const task = { id: uid(), ...body, created_by: user.id, created_at: now() };
    const tasks: any[] = (await kv.get(`tasks:patient:${patient_id}`)) ?? [];
    tasks.push(task);
    await kv.set(`tasks:patient:${patient_id}`, tasks);
    await addTimeline(patient_id, "task", `${user.user_metadata?.name ?? "Caregiver"} created task "${body.title}"`, user.id, user.user_metadata?.name ?? "Caregiver");
    return c.json({ task });
  } catch (e) {
    console.error("Create task error error:", e);
    return c.json({ error: "Create task error failed. Please try again later." }, 500);
  }
});

app.patch(`${P}/tasks/:id`, async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  try {
    const taskId = c.req.param("id");
    const updates = await c.req.json();
    const { patient_id } = updates;
    const tasks: any[] = (await kv.get(`tasks:patient:${patient_id}`)) ?? [];
    const idx = tasks.findIndex(t => t.id === taskId);
    if (idx === -1) return c.json({ error: "Task not found" }, 404);
    const prev = tasks[idx];
    tasks[idx] = { ...prev, ...updates, updated_at: now() };
    await kv.set(`tasks:patient:${patient_id}`, tasks);

    if (updates.status && updates.status !== prev.status) {
      const verb = updates.status === "completed" ? "completed ✓" : "started";
      await addTimeline(patient_id, "task", `${user.user_metadata?.name ?? "Caregiver"} ${verb} "${prev.title}"`, user.id, user.user_metadata?.name ?? "Caregiver");
    }
    return c.json({ task: tasks[idx] });
  } catch (e) {
    console.error("Update task error error:", e);
    return c.json({ error: "Update task error failed. Please try again later." }, 500);
  }
});

// ── Timeline ──────────────────────────────────────────────────────────────────
app.get(`${P}/patients/:id/timeline`, async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  const events: any[] = (await kv.get(`timeline:patient:${c.req.param("id")}`)) ?? [];
  return c.json({ events });
});

app.post(`${P}/timeline`, async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  try {
    const { patient_id, type, description } = await c.req.json();
    const event = await addTimeline(patient_id, type, description, user.id, user.user_metadata?.name ?? "Caregiver");
    return c.json({ event });
  } catch (e) {
    console.error("Create timeline error error:", e);
    return c.json({ error: "Create timeline error failed. Please try again later." }, 500);
  }
});

// ── Invites ───────────────────────────────────────────────────────────────────
app.post(`${P}/invite`, async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  try {
    const { patient_id } = await c.req.json();
    if (!sanitize(patient_id, 100)) return c.json({ error: "Invalid patient ID" }, 400);
    
    // Generate a random 6-character code (A-Z, 0-9)
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    // Store in KV
    await kv.set(`invite:code:${code}`, {
      patient_id,
      created_by: user.id,
      created_at: now()
    });
    
    return c.json({ code });
  } catch (e) {
    console.error("Create invite error error:", e);
    return c.json({ error: "Create invite error failed. Please try again later." }, 500);
  }
});

app.post(`${P}/invite/join`, async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  try {
    const { code, patient_id: directPatientId } = await c.req.json();
    let targetPatientId = directPatientId;
    
    if (code) {
      // Lookup invite code
      const invite = await kv.get(`invite:code:${code.toUpperCase()}`);
      if (!invite) return c.json({ error: "Invalid or expired invite code" }, 400);
      targetPatientId = invite.patient_id;
    }
    
    if (!targetPatientId) {
      return c.json({ error: "Invalid request" }, 400);
    }
    
    // Fetch patient to verify it exists
    const patient = await kv.get(`patient:${targetPatientId}`);
    if (!patient) return c.json({ error: "Patient not found" }, 404);
    
    // Add to user's patient list if not already there
    const ids: string[] = (await kv.get(`patients:user:${user.id}`)) ?? [];
    if (!ids.includes(targetPatientId)) {
      ids.push(targetPatientId);
      await kv.set(`patients:user:${user.id}`, ids);
      
      // Create a timeline event
      await addTimeline(
        targetPatientId, 
        "note", 
        `${user.user_metadata?.name ?? "Family member"} joined the care circle`, 
        user.id, 
        user.user_metadata?.name ?? "Caregiver"
      );
    }
    
    return c.json({ patient });
  } catch (e) {
    console.error("Join care circle error error:", e);
    return c.json({ error: "Join care circle error failed. Please try again later." }, 500);
  }
});


// ── Appointments ──────────────────────────────────────────────────────────────
app.get(`${P}/patients/:id/appointments`, async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  const appts: any[] = (await kv.get(`appointments:patient:${c.req.param("id")}`)) ?? [];
  return c.json({ appointments: appts });
});

app.post(`${P}/appointments`, async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  try {
    const body = await c.req.json();
    const { patient_id } = body;
    const appt = { id: uid(), ...body, created_by: user.id, created_at: now() };
    const appts: any[] = (await kv.get(`appointments:patient:${patient_id}`)) ?? [];
    appts.push(appt);
    await kv.set(`appointments:patient:${patient_id}`, appts);
    await addTimeline(patient_id, "appointment", `${user.user_metadata?.name ?? "Caregiver"} scheduled "${body.title}"`, user.id, user.user_metadata?.name ?? "Caregiver");
    return c.json({ appointment: appt });
  } catch (e) {
    console.error("Create appointment error error:", e);
    return c.json({ error: "Create appointment error failed. Please try again later." }, 500);
  }
});

// ── Documents ─────────────────────────────────────────────────────────────────
app.get(`${P}/patients/:id/documents`, async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  const docs: any[] = (await kv.get(`documents:patient:${c.req.param("id")}`)) ?? [];
  const withUrls = await Promise.all(docs.map(async (doc) => {
    if (!doc.storage_path) return doc;
    const { data } = await supabase.storage.from(BUCKET).createSignedUrl(doc.storage_path, 3600);
    return { ...doc, url: data?.signedUrl };
  }));
  return c.json({ documents: withUrls });
});

app.post(`${P}/documents/upload-url`, async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  try {
    const { filename, patient_id } = await c.req.json();
    const path = `${patient_id}/${uid()}-${filename}`;
    const { data, error } = await supabase.storage.from(BUCKET).createSignedUploadUrl(path);
    if (error) return c.json({ error: error.message }, 500);
    return c.json({ upload_url: data.signedUrl, path });
  } catch (e) {
    console.error("Upload URL error error:", e);
    return c.json({ error: "Upload URL error failed. Please try again later." }, 500);
  }
});

app.post(`${P}/documents`, async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  try {
    const body = await c.req.json();
    const { patient_id } = body;
    const doc = { id: uid(), ...body, uploaded_by: user.id, created_at: now() };
    const docs: any[] = (await kv.get(`documents:patient:${patient_id}`)) ?? [];
    docs.unshift(doc);
    await kv.set(`documents:patient:${patient_id}`, docs);
    await addTimeline(patient_id, "note", `${user.user_metadata?.name ?? "Caregiver"} uploaded "${body.title}"`, user.id, user.user_metadata?.name ?? "Caregiver");
    return c.json({ document: doc });
  } catch (e) {
    console.error("Create document error error:", e);
    return c.json({ error: "Create document error failed. Please try again later." }, 500);
  }
});

// ── Wellbeing ─────────────────────────────────────────────────────────────────
app.post(`${P}/wellbeing`, async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  try {
    const body = await c.req.json();
    const mood = sanitize(body.mood, 50);
    const note = sanitize(body.note, 1000);
    const patient_id = sanitize(body.patient_id, 100);
    if (!mood) return c.json({ error: "Mood is required" }, 400);
    const entry = { id: uid(), mood, note, created_at: now() };
    const logs: any[] = (await kv.get(`wellbeing:user:${user.id}`)) ?? [];
    logs.unshift(entry);
    await kv.set(`wellbeing:user:${user.id}`, logs.slice(0, 30));
    if (patient_id) {
      await addTimeline(patient_id, "wellbeing", `${user.user_metadata?.name ?? "Caregiver"} checked in feeling "${mood}"`, user.id, user.user_metadata?.name ?? "Caregiver");
    }
    return c.json({ entry });
  } catch (e) {
    console.error("Wellbeing log error error:", e);
    return c.json({ error: "Wellbeing log error failed. Please try again later." }, 500);
  }
});

// ── Delete account ────────────────────────────────────────────────────────────
app.delete(`${P}/user`, async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  try {
    const { error } = await supabase.auth.admin.deleteUser(user.id);
    if (error) return c.json({ error: `Delete error: ${error.message}` }, 400);
    // Clean up KV data for this user's patients
    const ids: string[] = (await kv.get(`patients:user:${user.id}`)) ?? [];
    if (ids.length) await kv.mdel(ids.map(id => `patient:${id}`));
    await kv.del(`patients:user:${user.id}`);
    await kv.del(`wellbeing:user:${user.id}`);
    return c.json({ success: true });
  } catch (e) {
    console.error("Delete account error error:", e);
    return c.json({ error: "Delete account error failed. Please try again later." }, 500);
  }
});

Deno.serve(app.fetch);
