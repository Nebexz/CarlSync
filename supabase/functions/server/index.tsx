import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js@2";
import * as kv from "./kv_store.tsx";

const app = new Hono();
app.use("*", logger(console.log));
app.use("/*", cors({
  origin: "*",
  allowHeaders: ["Content-Type", "Authorization"],
  allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  exposeHeaders: ["Content-Length"],
  maxAge: 600,
}));

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

const P = "/make-server-00f33061";
const BUCKET = "make-00f33061-documents";

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
    const { name, email, password } = await c.req.json();
    const { data, error } = await supabase.auth.admin.createUser({
      email, password,
      user_metadata: { name },
      email_confirm: true,
    });
    if (error) return c.json({ error: `Signup error: ${error.message}` }, 400);
    return c.json({ user: data.user });
  } catch (e) {
    return c.json({ error: `Signup error: ${e}` }, 500);
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
    const id = uid();
    const patient = { id, ...body, created_by: user.id, created_at: now() };
    await kv.set(`patient:${id}`, patient);

    const ids: string[] = (await kv.get(`patients:user:${user.id}`)) ?? [];
    ids.push(id);
    await kv.set(`patients:user:${user.id}`, ids);

    await addTimeline(id, "note", `Patient profile created for ${body.name}`, user.id, user.user_metadata?.name ?? "Caregiver");
    return c.json({ patient });
  } catch (e) {
    return c.json({ error: `Create patient error: ${e}` }, 500);
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
    const med = { id: uid(), ...body, created_by: user.id, created_at: now() };
    const meds: any[] = (await kv.get(`medications:patient:${patient_id}`)) ?? [];
    meds.push(med);
    await kv.set(`medications:patient:${patient_id}`, meds);
    await addTimeline(patient_id, "medication", `${user.user_metadata?.name ?? "Caregiver"} added ${body.name} ${body.dosage}`, user.id, user.user_metadata?.name ?? "Caregiver");
    return c.json({ medication: med });
  } catch (e) {
    return c.json({ error: `Create medication error: ${e}` }, 500);
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
    return c.json({ error: `Update medication error: ${e}` }, 500);
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
    const task = { id: uid(), ...body, created_by: user.id, created_at: now() };
    const tasks: any[] = (await kv.get(`tasks:patient:${patient_id}`)) ?? [];
    tasks.push(task);
    await kv.set(`tasks:patient:${patient_id}`, tasks);
    await addTimeline(patient_id, "task", `${user.user_metadata?.name ?? "Caregiver"} created task "${body.title}"`, user.id, user.user_metadata?.name ?? "Caregiver");
    return c.json({ task });
  } catch (e) {
    return c.json({ error: `Create task error: ${e}` }, 500);
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
    return c.json({ error: `Update task error: ${e}` }, 500);
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
    return c.json({ error: `Create timeline error: ${e}` }, 500);
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
    return c.json({ error: `Create appointment error: ${e}` }, 500);
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
    return c.json({ error: `Upload URL error: ${e}` }, 500);
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
    return c.json({ error: `Create document error: ${e}` }, 500);
  }
});

// ── Wellbeing ─────────────────────────────────────────────────────────────────
app.post(`${P}/wellbeing`, async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  try {
    const { mood, note, patient_id } = await c.req.json();
    const entry = { id: uid(), mood, note, created_at: now() };
    const logs: any[] = (await kv.get(`wellbeing:user:${user.id}`)) ?? [];
    logs.unshift(entry);
    await kv.set(`wellbeing:user:${user.id}`, logs.slice(0, 30));
    if (patient_id) {
      await addTimeline(patient_id, "wellbeing", `${user.user_metadata?.name ?? "Caregiver"} checked in feeling "${mood}"`, user.id, user.user_metadata?.name ?? "Caregiver");
    }
    return c.json({ entry });
  } catch (e) {
    return c.json({ error: `Wellbeing log error: ${e}` }, 500);
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
    return c.json({ error: `Delete account error: ${e}` }, 500);
  }
});

Deno.serve(app.fetch);
