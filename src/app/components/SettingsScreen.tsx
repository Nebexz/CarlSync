import { useState, useEffect } from 'react';
import {
  Bell, Shield, Globe, Trash2, ChevronRight, UserPlus,
  Pencil, Lock, LogOut, Check, X, Copy, Loader2,
  Heart, AlertTriangle, Eye, EyeOff,
} from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { api } from '../lib/api';

const C = { border: '#e2e8f0', text: '#0f172a', sub: '#64748b', muted: '#94a3b8', teal: '#0d9488', green: '#10b981' };

// ── Persistence helpers ───────────────────────────────────────────────────────
const NOTIF_KEY = 'caresync:notifications';
const PREFS_KEY  = 'caresync:preferences';

function readLS<T>(key: string, fallback: T): T {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; }
}
function writeLS(key: string, val: unknown) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
}

// ── Sub-components ────────────────────────────────────────────────────────────
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card text-card-foreground rounded-2xl border border-border p-6 shadow-sm">
      <h3 className="font-outfit font-bold text-lg text-foreground mb-5">{title}</h3>
      {children}
    </div>
  );
}

function Row({ label, desc, right, danger = false }: { label: string; desc?: string; right: React.ReactNode; danger?: boolean }) {
  return (
    <div className="flex items-center justify-between py-3.5 border-b border-border last:border-0">
      <div className="flex-1 pr-4">
        <p className={`font-sans font-medium text-sm ${danger ? 'text-red-500' : 'text-foreground'}`}>{label}</p>
        {desc && <p className="font-sans text-xs text-muted-foreground mt-0.5">{desc}</p>}
      </div>
      {right}
    </div>
  );
}

function Toggle({ on, onChange }: { on: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!on)}
      type="button"
      className={`flex items-center rounded-full transition-colors duration-200 flex-shrink-0 w-11 h-6 p-0.5 ${
        on ? 'bg-teal-600 justify-end' : 'bg-slate-300 dark:bg-slate-700 justify-start'
      }`}
    >
      <div className="rounded-full bg-white w-5 h-5 shadow-sm" />
    </button>
  );
}

function Avatar({ name, size = 52, color }: { name: string; size?: number; color?: string }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  const colors = [C.green, C.teal, '#6366f1', '#f59e0b', '#ef4444', '#ec4899'];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  const bg = color ?? colors[Math.abs(hash) % colors.length];
  return (
    <div className="flex-shrink-0 flex items-center justify-center rounded-full"
      style={{ backgroundColor: bg, width: size, height: size }}>
      <span className="text-white font-bold" style={{ fontSize: size * 0.32 }}>{initials}</span>
    </div>
  );
}

// ── Edit Name Modal ───────────────────────────────────────────────────────────
function EditNameModal({ currentName, onClose, onSaved }: { currentName: string; onClose: () => void; onSaved: (name: string) => void }) {
  const [name, setName] = useState(currentName);
  const [saving, setSaving] = useState(false);

  const save = async () => {
    if (!name.trim()) return;
    setSaving(true);
    try {
      const { error } = await supabase.auth.updateUser({ data: { name: name.trim() } });
      if (error) throw error;
      onSaved(name.trim());
      toast.success('Display name updated');
      onClose();
    } catch (e: any) { toast.error(e.message); } finally { setSaving(false); }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card text-card-foreground rounded-2xl p-7 shadow-2xl border border-border w-[420px]">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-outfit font-bold text-xl text-foreground">Edit Display Name</h3>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded text-muted-foreground"><X size={18} /></button>
        </div>
        <p className="text-xs font-bold mb-1.5 text-muted-foreground">Your Name</p>
        <input autoFocus value={name} onChange={e => setName(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && save()}
          className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors font-sans mb-5" />
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 py-2.5 rounded-xl border border-border text-sm font-semibold text-muted-foreground hover:bg-muted transition-colors bg-card">Cancel</button>
          <button onClick={save} disabled={saving || !name.trim()}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white bg-teal-600 hover:opacity-90 disabled:opacity-60 transition-opacity">
            {saving ? 'Saving…' : 'Save Name'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Change Password Modal ─────────────────────────────────────────────────────
function ChangePasswordModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ password: '', confirm: '' });
  const [show, setShow] = useState(false);
  const [saving, setSaving] = useState(false);
  const strong = form.password.length >= 8;
  const match = form.password === form.confirm;

  const save = async () => {
    if (!strong || !match) return;
    setSaving(true);
    try {
      const { error } = await supabase.auth.updateUser({ password: form.password });
      if (error) throw error;
      toast.success('Password updated successfully');
      onClose();
    } catch (e: any) { toast.error(e.message); } finally { setSaving(false); }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card text-card-foreground rounded-2xl p-7 shadow-2xl border border-border w-[420px]">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-outfit font-bold text-xl text-foreground">Change Password</h3>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded text-muted-foreground"><X size={18} /></button>
        </div>
        <div className="flex flex-col gap-4">
          {(['password', 'confirm'] as const).map(k => (
            <div key={k}>
              <p className="text-xs font-bold mb-1.5 text-muted-foreground">
                {k === 'password' ? 'New Password (8+ characters)' : 'Confirm New Password'}
              </p>
              <div className="relative">
                <input type={show ? 'text' : 'password'} value={form[k]}
                  onChange={e => setForm(p => ({ ...p, [k]: e.target.value }))}
                  className={`w-full px-3 py-2.5 rounded-lg border bg-background text-foreground text-sm outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors font-sans pr-10 ${
                    k === 'confirm' && form.confirm && !match ? 'border-red-500' : 'border-border'
                  }`} />
                {k === 'password' && (
                  <button type="button" onClick={() => setShow(s => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    {show ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                )}
              </div>
            </div>
          ))}
          {form.password.length > 0 && (
            <div className="flex items-center gap-2">
              <div className={`w-full h-1.5 rounded-full ${strong ? 'bg-emerald-500' : 'bg-amber-500'}`} />
              <span className={`text-[11px] font-bold ${strong ? 'text-emerald-500' : 'text-amber-500'} whitespace-nowrap`}>
                {strong ? 'Strong' : 'Too short'}
              </span>
            </div>
          )}
          {form.confirm.length > 0 && !match && (
            <p className="text-xs text-red-500">Passwords don't match.</p>
          )}
        </div>
        <div className="flex gap-3 mt-5">
          <button onClick={onClose} className="flex-1 py-2.5 rounded-xl border border-border text-sm font-semibold text-muted-foreground hover:bg-muted transition-colors bg-card">Cancel</button>
          <button onClick={save} disabled={saving || !strong || !match}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white bg-teal-600 hover:opacity-90 disabled:opacity-60 transition-opacity">
            {saving ? 'Updating…' : 'Update Password'}
          </button>
        </div>
      </div>
    </div>
  );
}
// ── Invite Modal ──────────────────────────────────────────────────────────────
function InviteModal({ patientId, patientName, onClose }: { patientId: string; patientName: string; onClose: () => void }) {
  const [copied, setCopied] = useState(false);
  const [loadingCode, setLoadingCode] = useState(true);
  const [inviteCode, setInviteCode] = useState('');

  useEffect(() => {
    api.createInvite(patientId)
      .then(res => {
        if (res.code) {
          setInviteCode(res.code);
        }
      })
      .catch(err => {
        console.error('Failed to generate secure code, using fallback:', err);
        // Fallback to legacy base64 format on failure
        setInviteCode(btoa(patientId).replace(/=/g, ''));
      })
      .finally(() => {
        setLoadingCode(false);
      });
  }, [patientId]);

  const inviteMsg = `Hi! I'm using CareSync to coordinate care for ${patientName}. Join our care circle with this code: ${inviteCode}`;

  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      toast.success(`${label} copied to clipboard`);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-card text-card-foreground rounded-2xl p-6 shadow-2xl border border-border w-full max-w-[460px] animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-outfit font-bold text-lg text-foreground">Invite Family Member</h3>
          <button onClick={onClose} className="p-1.5 hover:bg-muted rounded-lg text-muted-foreground transition-colors cursor-pointer"><X size={16} /></button>
        </div>

        <div className="p-4 rounded-xl mb-5 bg-teal-500/10 dark:bg-teal-950/20 border border-teal-500/20 dark:border-teal-900/50">
          <p className="font-sans text-xs text-teal-700 dark:text-teal-400 leading-relaxed">
            Share this 6-character code with a family member. They can join the care circle for <strong>{patientName}</strong> on their onboarding screen.
          </p>
        </div>

        <div className="mb-5">
          <p className="text-[10px] font-bold mb-2 tracking-wider text-muted-foreground uppercase">Invite Code</p>
          <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-muted/20">
            <span className="flex-1 font-mono text-lg font-bold tracking-widest text-center text-foreground">
              {loadingCode ? 'GENERATING...' : inviteCode}
            </span>
            <button
              onClick={() => copy(inviteCode, 'Code')}
              disabled={loadingCode}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-colors text-white cursor-pointer disabled:cursor-not-allowed ${
                copied ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-teal-600 hover:bg-teal-700'
              }`}
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>

        <div className="mb-5">
          <p className="text-[10px] font-bold mb-2 tracking-wider text-muted-foreground uppercase">Share Message</p>
          <div className="w-full px-3.5 py-3 rounded-xl border border-border bg-background text-muted-foreground text-xs leading-relaxed font-sans select-all min-h-[72px] flex items-center">
            {inviteMsg}
          </div>
          <button
            onClick={() => copy(inviteMsg, 'Message')}
            disabled={loadingCode}
            className="mt-2 w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-border text-xs font-semibold text-muted-foreground hover:bg-muted bg-card transition-colors cursor-pointer"
          >
            <Copy size={13} /> Copy Full Message
          </button>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors cursor-pointer"
        >
          Done
        </button>
      </div>
    </div>
  );
}

// ── Delete Account Modal ──────────────────────────────────────────────────────
function DeleteAccountModal({ onClose, onConfirm }: { onClose: () => void; onConfirm: () => Promise<void> }) {
  const [confirm, setConfirm] = useState('');
  const [deleting, setDeleting] = useState(false);
  const ready = confirm === 'DELETE';

  const handle = async () => {
    if (!ready) return;
    setDeleting(true);
    try { await onConfirm(); } finally { setDeleting(false); }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card text-card-foreground rounded-2xl p-7 shadow-2xl border border-border w-[440px]">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex items-center justify-center rounded-full bg-red-100 dark:bg-red-950/40 w-11 h-11">
            <AlertTriangle size={20} className="text-red-600 dark:text-red-500" />
          </div>
          <h3 className="font-outfit font-bold text-xl text-foreground">Delete Account</h3>
        </div>

        <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
          This will permanently delete your account and all associated data — patient records, medications, tasks, and timeline history. <strong>This cannot be undone.</strong>
        </p>

        <div className="p-3 rounded-lg mb-5 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50">
          <p className="font-sans text-xs text-red-800 dark:text-red-400">
            Type <strong>DELETE</strong> below to confirm.
          </p>
        </div>

        <input value={confirm} onChange={e => setConfirm(e.target.value.toUpperCase())}
          placeholder="Type DELETE to confirm"
          className={`w-full px-3 py-3 rounded-lg border bg-background text-foreground text-sm outline-none mb-5 font-mono ${
            ready ? 'border-red-500' : 'border-border'
          }`} />

        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 py-2.5 rounded-xl border border-border text-sm font-semibold text-muted-foreground hover:bg-muted bg-card transition-colors">Cancel</button>
          <button onClick={handle} disabled={!ready || deleting}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white bg-red-500 hover:bg-red-600 disabled:opacity-40 transition-colors">
            {deleting ? 'Deleting…' : 'Delete Forever'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
type NotifState = { medication: boolean; appointment: boolean; task: boolean; timeline: boolean; wellbeing: boolean };
type PrefState  = { language: string; timezone: string };

const DEFAULT_NOTIFS: NotifState = { medication: true, appointment: true, task: false, timeline: true, wellbeing: true };
const DEFAULT_PREFS:  PrefState  = { language: 'English', timezone: 'EST (UTC-5)' };

export function SettingsScreen() {
  const { user, patient, signOut, refreshPatient } = useAuth();

  const [notifs, setNotifs] = useState<NotifState>(() => ({ ...DEFAULT_NOTIFS, ...readLS(NOTIF_KEY, {}) }));
  const [prefs,  setPrefs]  = useState<PrefState> (() => ({ ...DEFAULT_PREFS,  ...readLS(PREFS_KEY,  {}) }));

  const [modal, setModal] = useState<'name' | 'password' | 'invite' | 'delete' | null>(null);
  const [displayName, setDisplayName] = useState(user?.user_metadata?.name ?? user?.email ?? '');

  // Persist notification prefs on every change
  const updateNotif = (key: keyof NotifState) => {
    setNotifs(p => {
      const next = { ...p, [key]: !p[key] };
      writeLS(NOTIF_KEY, next);
      toast.success(`${key.charAt(0).toUpperCase() + key.slice(1)} reminders ${next[key] ? 'enabled' : 'disabled'}`);
      return next;
    });
  };

  const updatePref = (key: keyof PrefState, value: string) => {
    setPrefs(p => {
      const next = { ...p, [key]: value };
      writeLS(PREFS_KEY, next);
      return next;
    });
  };

  const handleDeleteAccount = async () => {
    try {
      await api.deleteAccount();
      await signOut();
      toast.success('Account deleted.');
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const email = user?.email ?? '';
  const name  = displayName || email.split('@')[0];
  const initials = name.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase();

  // Colors for avatar
  const avatarColors = [C.green, C.teal, '#6366f1', '#f59e0b'];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  const avatarColor = avatarColors[Math.abs(hash) % avatarColors.length];

  return (
    <div className="p-10 flex flex-col gap-8 min-h-full bg-background text-foreground transition-colors duration-200">

      {/* Modals */}
      {modal === 'name'     && <EditNameModal currentName={displayName} onClose={() => setModal(null)} onSaved={setDisplayName} />}
      {modal === 'password' && <ChangePasswordModal onClose={() => setModal(null)} />}
      {modal === 'invite'   && patient && <InviteModal patientId={patient.id} patientName={patient.name} onClose={() => setModal(null)} />}
      {modal === 'delete'   && <DeleteAccountModal onClose={() => setModal(null)} onConfirm={handleDeleteAccount} />}

      {/* Header */}
      <div>
        <h1 className="font-outfit font-bold text-2xl md:text-3xl text-foreground">Settings</h1>
        <p className="font-sans text-sm text-muted-foreground mt-1">Manage your CareSync account and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

        {/* ── Left column ── */}
        <div className="lg:col-span-3 flex flex-col gap-6">

          {/* My Profile */}
          <Section title="👤 My Profile">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
              <div className="flex items-center justify-center rounded-full flex-shrink-0 w-15 h-15"
                style={{ backgroundColor: avatarColor }}>
                <span className="text-white text-lg font-bold">{initials}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-sans font-bold text-base text-foreground">{name}</p>
                <p className="font-sans text-xs text-muted-foreground mt-0.5">{email}</p>
                {patient && (
                  <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-900/50 font-sans">
                    Admin · Caring for {patient.name}
                  </span>
                )}
              </div>
            </div>

            <Row label="Display Name" desc={`Currently: ${displayName || 'Not set'}`}
              right={
                <button onClick={() => setModal('name')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs font-semibold text-teal-600 dark:text-teal-400 bg-card hover:bg-muted transition-colors font-sans">
                  <Pencil size={12} /> Edit
                </button>
              } />

            <Row label="Email Address" desc="Sign-in email — contact support to change"
              right={<span className="font-sans text-xs text-muted-foreground">{email}</span>} />

            <Row label="Password" desc="Use a strong, unique password"
              right={
                <button onClick={() => setModal('password')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs font-semibold text-teal-600 dark:text-teal-400 bg-card hover:bg-muted transition-colors font-sans">
                  <Lock size={12} /> Change
                </button>
              } />
          </Section>

          {/* Notifications */}
          <Section title="🔔 Notifications">
            <p className="font-sans text-xs text-muted-foreground mb-4 leading-relaxed">
              Preferences are saved to this device. Reminders appear as in-app toasts — browser push notifications coming soon.
            </p>
            {([
              { key: 'medication'  as const, label: 'Medication Reminders',     desc: 'Alert when a dose time approaches' },
              { key: 'appointment' as const, label: 'Appointment Reminders',    desc: '24 h and 1 h before each appointment' },
              { key: 'task'        as const, label: 'Task Notifications',        desc: 'When a task is assigned or overdue' },
              { key: 'timeline'    as const, label: 'Family Timeline Updates',   desc: 'When a family member posts an update' },
              { key: 'wellbeing'   as const, label: 'Daily Wellbeing Check-in',  desc: 'Morning reminder to log your mood' },
            ]).map(({ key, label, desc }) => (
              <Row key={key} label={label} desc={desc}
                right={<Toggle on={notifs[key]} onChange={() => updateNotif(key)} />} />
            ))}
          </Section>

          {/* Preferences */}
          <Section title="⚙️ Preferences">
            <Row label="Language"
              right={
                <select value={prefs.language} onChange={e => updatePref('language', e.target.value)}
                  className="px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors font-sans">
                  {['English', 'Spanish', 'French', 'Mandarin', 'Arabic', 'Portuguese'].map(l => <option key={l} className="bg-card text-foreground">{l}</option>)}
                </select>
              } />
            <Row label="Time Zone"
              right={
                <select value={prefs.timezone} onChange={e => updatePref('timezone', e.target.value)}
                  className="px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors font-sans">
                  {['EST (UTC-5)', 'CST (UTC-6)', 'MST (UTC-7)', 'PST (UTC-8)', 'GMT (UTC+0)', 'CET (UTC+1)', 'EAT (UTC+3)', 'IST (UTC+5:30)'].map(z => <option key={z} className="bg-card text-foreground">{z}</option>)}
                </select>
              } />
            <Row label="Data Encryption" desc="All medical data encrypted at rest via Supabase"
              right={
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <Shield size={11} /> Active
                </span>
              } />
          </Section>
        </div>

        {/* ── Right column ── */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* Patient Overview */}
          {patient && (
            <div className="bg-card text-card-foreground rounded-2xl border border-border p-5 shadow-sm">
              <p className="font-outfit font-semibold text-base text-foreground mb-4">
                Caring For
              </p>
              <div className="flex items-center gap-3 mb-4">
                <Avatar name={patient.name} size={44} />
                <div>
                  <p className="font-sans font-bold text-sm text-foreground">{patient.name}</p>
                  <p className="font-sans text-xs text-muted-foreground">
                    Age {patient.age} · {patient.sex} · Blood {patient.blood_type ?? '—'}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { l: 'Conditions', v: String((patient.conditions ?? []).length), c: 'text-red-500' },
                  { l: 'Allergies',  v: String((patient.allergies  ?? []).length), c: 'text-amber-500' },
                ].map(s => (
                  <div key={s.l} className="p-2.5 rounded-lg text-center bg-muted/20 border border-border">
                    <p className={`font-sans font-bold text-lg ${s.c}`}>{s.v}</p>
                    <p className="font-sans text-[10px] text-muted-foreground uppercase">{s.l}</p>
                  </div>
                ))}
              </div>
              {patient.emergency_contact_name && (
                <div className="mt-3 p-3 rounded-xl border border-border bg-muted/10">
                  <p className="font-sans text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-1">Emergency Contact</p>
                  <p className="font-sans font-semibold text-xs text-foreground">{patient.emergency_contact_name}</p>
                  <p className="font-sans text-xs text-muted-foreground">{patient.emergency_contact_phone}</p>
                </div>
              )}
            </div>
          )}

          {/* Family & Access */}
          <Section title="👨‍👩‍👧 Family & Access">
            <div className="flex items-center gap-3 mb-4">
              <Avatar name={name} size={36} color={avatarColor} />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-sans font-semibold text-xs text-foreground">{name}</p>
                  <span className="font-sans text-[10px] text-muted-foreground">(you)</span>
                </div>
                <p className="font-sans text-[11px] text-muted-foreground mt-0.5">Admin · Full access</p>
              </div>
            </div>

            <div className="p-3 rounded-xl mb-4 bg-muted/20 border border-border">
              <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                Share an invite code with family members so they can join the care circle and collaborate in real time.
              </p>
            </div>

            <button onClick={() => setModal('invite')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90 bg-teal-600 text-white font-sans"
            >
              <UserPlus size={15} /> Invite a Family Member
            </button>
          </Section>

          {/* Danger zone */}
          <div className="bg-card text-card-foreground rounded-2xl border border-border p-5 shadow-sm">
            <p className="font-outfit font-semibold text-base text-foreground mb-4">Account</p>
            <div className="flex flex-col gap-3">
              <button onClick={() => signOut()}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border text-sm font-semibold text-muted-foreground bg-card hover:bg-muted transition-colors font-sans"
              >
                <LogOut size={15} /> Sign Out
              </button>
              <button onClick={() => setModal('delete')}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-red-500/30 text-red-500 bg-card hover:bg-red-500/10 transition-colors text-sm font-semibold font-sans"
              >
                <Trash2 size={14} /> Delete Account
              </button>
            </div>
          </div>

          {/* About */}
          <div className="bg-card text-card-foreground rounded-2xl border border-border p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center justify-center rounded-lg bg-emerald-500 w-7 h-7">
                <Heart size={14} className="text-white fill-white" />
              </div>
              <p className="font-outfit font-semibold text-sm text-foreground">CareSync</p>
            </div>
            <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-3">
              Helping families care together.<br />
              <span className="text-[10px] text-muted-foreground/60">Version 1.0.0 MVP</span>
            </p>
            {['Privacy Policy', 'Terms of Service', 'Contact Support'].map(l => (
              <button key={l}
                className="flex items-center justify-between w-full py-2 text-xs text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400 transition-colors border-t border-border first:border-t-0 font-sans"
              >
                {l} <ChevronRight size={14} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
