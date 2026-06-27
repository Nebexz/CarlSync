import { useState, useEffect } from 'react';
import { Heart, ChevronRight, AlertCircle, RefreshCw, Loader2 } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { api } from '../../lib/api';
import { supabase } from '../../lib/supabase';
import type { Patient } from '../../contexts/AuthContext';
import { toast } from 'sonner';

const C = { green: '#10b981', teal: '#0d9488', dark: '#1e2533', border: '#e2e8f0', text: '#0f172a', sub: '#64748b', muted: '#94a3b8' };

const BLOOD_TYPES = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'Unknown'];
const COMMON_CONDITIONS = ['Hypertension', 'Type 2 Diabetes', 'Heart Disease', 'Asthma', 'COPD', 'Arthritis', 'Dementia', "Parkinson's", 'Cancer', 'Kidney Disease', 'Stroke'];
const COMMON_ALLERGIES = ['Penicillin', 'Sulfa Drugs', 'Aspirin', 'NSAIDs', 'Shellfish', 'Peanuts', 'Latex', 'Contrast Dye'];

const inputCls = "w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-sans";
const inputSty = (C: any) => ({});

function Step({ n, total, label }: { n: number; total: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 mb-8">
      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} className={`h-1.5 w-12 rounded-full transition-all ${
            i < n ? 'bg-emerald-500' : 'bg-slate-200 dark:bg-slate-800'
          }`} />
        ))}
      </div>
      <p className="font-sans text-xs text-muted-foreground">Step {n} of {total} · {label}</p>
    </div>
  );
}

function ToggleChip({ label, selected, onToggle }: { label: string; selected: boolean; onToggle: () => void }) {
  return (
    <button type="button" onClick={onToggle}
      className={`px-3 py-1.5 rounded-full text-sm border transition-all font-sans font-medium ${
        selected
          ? 'bg-teal-50 dark:bg-teal-950/30 border-teal-500 text-teal-600 dark:text-teal-400 font-semibold'
          : 'bg-card border-border text-muted-foreground hover:bg-muted hover:text-foreground'
      }`}>
      {selected ? '✓ ' : ''}{label}
    </button>
  );
}

export function CreatePatientScreen() {
  const { user, setPatient } = useAuth();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [mode, setMode] = useState<'create' | 'join'>('create');
  const [inviteCode, setInviteCode] = useState('');
  const [joining, setJoining] = useState(false);

  const [form, setForm] = useState({
    name: '', age: '', sex: 'Male', blood_type: 'Unknown', weight: '', address: '',
    conditions: [] as string[], allergies: [] as string[],
    emergency_contact_name: '', emergency_contact_phone: '', emergency_contact_rel: 'Daughter',
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }));

  const toggle = (field: 'conditions' | 'allergies', val: string) => {
    setForm(p => ({
      ...p,
      [field]: p[field].includes(val) ? p[field].filter(x => x !== val) : [...p[field], val],
    }));
  };

  const handleFinish = async () => {
    setError('');
    setLoading(true);
    try {
      const { patient } = await api.createPatient({
        ...form,
        age: parseInt(form.age) || 0,
      });
      setPatient(patient as Patient);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleJoinCircle = async () => {
    setError('');
    const code = inviteCode.trim();
    if (!code || !user) {
      setError('Invite code is required');
      return;
    }
    setJoining(true);
    try {
      let targetPatientId = '';
      
      // 1. Resolve code to patientId
      if (code.length === 6) {
        // Query the kv_store table directly using client-side supabase client
        const { data, error: queryErr } = await supabase
          .from("kv_store_00f33061")
          .select("value")
          .eq("key", `invite:code:${code.toUpperCase()}`)
          .maybeSingle();
          
        if (queryErr) throw queryErr;
        if (!data?.value?.patient_id) {
          throw new Error('Invalid or expired 6-digit invite code.');
        }
        targetPatientId = data.value.patient_id;
      } else {
        // Legacy Base64 code
        try {
          targetPatientId = atob(code);
        } catch {
          throw new Error('Invalid invite code format. Make sure it is either a 6-character code or a valid legacy code.');
        }
      }

      if (!targetPatientId) {
        throw new Error('Could not resolve patient ID.');
      }

      // 2. Fetch the patient profile to verify it exists
      const { data: patientData, error: patientErr } = await supabase
        .from("kv_store_00f33061")
        .select("value")
        .eq("key", `patient:${targetPatientId}`)
        .maybeSingle();

      if (patientErr) throw patientErr;
      if (!patientData?.value) {
        throw new Error('Patient profile not found. The invite code might be invalid.');
      }
      
      const resolvedPatient = patientData.value;

      // 3. Link patient to current user: update the user's patients list
      const patientsKey = `patients:user:${user.id}`;
      const { data: userPatientsData, error: userPatientsErr } = await supabase
        .from("kv_store_00f33061")
        .select("value")
        .eq("key", patientsKey)
        .maybeSingle();
        
      if (userPatientsErr) throw userPatientsErr;
      
      let ids: string[] = userPatientsData?.value ?? [];
      if (!ids.includes(targetPatientId)) {
        ids.push(targetPatientId);
        
        // Save back to database KV store
        const { error: upsertErr } = await supabase
          .from("kv_store_00f33061")
          .upsert({
            key: patientsKey,
            value: ids
          });
          
        if (upsertErr) throw upsertErr;

        // Post a timeline event via standard API (since api.addTimelineEvent is working backend route)
        try {
          await api.addTimelineEvent(
            targetPatientId, 
            "note", 
            `${user.user_metadata?.name ?? "Family member"} joined the care circle`
          );
        } catch (timelineErr) {
          console.error("Failed to post join event on timeline:", timelineErr);
        }
      }

      // 4. Update the AuthContext state so the dashboard loads
      setPatient(resolvedPatient as Patient);
      toast.success(`Successfully joined care circle for ${resolvedPatient.name}!`);
    } catch (e: any) {
      setError(e.message || 'Failed to join care circle');
    } finally {
      setJoining(false);
    }
  };

  const userName = user?.user_metadata?.name?.split(' ')[0] ?? 'there';

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background text-foreground transition-colors duration-200">
      <div className="w-full bg-card text-card-foreground rounded-3xl shadow-xl overflow-hidden border border-border max-w-[600px]">

        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-border bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-950/30 dark:to-teal-950/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center rounded-xl bg-emerald-500 w-10 h-10">
              <Heart size={20} className="text-white fill-white" />
            </div>
            <span className="font-sans font-bold text-lg text-foreground">CareSync</span>
          </div>
          <h1 className="font-outfit font-bold text-2xl md:text-3xl text-foreground mb-1">
            Welcome, {userName}! 👋
          </h1>
          <p className="font-sans text-sm text-muted-foreground">
            Let's set up a profile for the person you're caring for. This takes about 2 minutes.
          </p>
        </div>

        <div className="px-8 py-8">
          {/* Mode Selector Tabs */}
          <div className="flex border-b border-border mb-6">
            <button
              onClick={() => { setMode('create'); setError(''); }}
              className={`flex-1 py-3 text-sm font-semibold border-b-2 transition-colors font-sans ${
                mode === 'create'
                  ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              Create New Profile
            </button>
            <button
              onClick={() => { setMode('join'); setError(''); }}
              className={`flex-1 py-3 text-sm font-semibold border-b-2 transition-colors font-sans ${
                mode === 'join'
                  ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              Join Existing Circle
            </button>
          </div>

          {mode === 'join' ? (
            /* ── Join mode ── */
            <div className="flex flex-col gap-5">
              <div className="p-4 rounded-xl border border-teal-200 dark:border-teal-900/50 bg-teal-50/50 dark:bg-teal-950/10 text-teal-800 dark:text-teal-400 font-sans">
                <p className="text-sm leading-relaxed">
                  Enter the invite code shared by a family member to join their care circle and collaborate.
                </p>
              </div>
              <div>
                <p className="text-xs font-bold mb-1.5 text-muted-foreground">Invite Code</p>
                <input
                  value={inviteCode}
                  onChange={e => setInviteCode(e.target.value)}
                  placeholder="Enter 6-character code (e.g. H3K9XP) or legacy code"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm outline-none font-mono tracking-widest text-center focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all font-sans"
                />
              </div>
              {error && (
                <div className="flex items-start gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                  <AlertCircle size={15} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="font-sans text-xs text-red-600 dark:text-red-400">{error}</p>
                </div>
              )}
              <button
                onClick={handleJoinCircle}
                disabled={joining || !inviteCode.trim()}
                className="w-full py-3.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:opacity-90 disabled:opacity-60 transition-opacity font-sans flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
              >
                {joining && <Loader2 size={16} className="animate-spin" />}
                {joining ? 'Joining Circle...' : 'Join Care Circle →'}
              </button>
            </div>
          ) : (
            /* ── Create mode ── */
            <>
              <Step n={step} total={3} label={step === 1 ? 'Basic Info' : step === 2 ? 'Health Details' : 'Emergency Contact'} />

              {/* ── Step 1: Basic info ── */}
              {step === 1 && (
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-xs font-bold mb-1.5" style={{ color: C.sub }}>Patient's Full Name *</p>
                    <input required value={form.name} onChange={set('name')} placeholder="e.g. Robert Chen"
                      className={inputCls} style={inputSty(C)} />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs font-bold mb-1.5" style={{ color: C.sub }}>Age *</p>
                      <input required type="number" min="0" max="120" value={form.age} onChange={set('age')} placeholder="72"
                        className={inputCls} style={inputSty(C)} />
                    </div>
                    <div>
                      <p className="text-xs font-bold mb-1.5" style={{ color: C.sub }}>Sex</p>
                      <select value={form.sex} onChange={set('sex')} className={inputCls} style={inputSty(C)}>
                        <option>Male</option><option>Female</option><option>Other</option>
                      </select>
                    </div>
                    <div>
                      <p className="text-xs font-bold mb-1.5" style={{ color: C.sub }}>Blood Type</p>
                      <select value={form.blood_type} onChange={set('blood_type')} className={inputCls} style={inputSty(C)}>
                        {BLOOD_TYPES.map(t => <option key={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-bold mb-1.5" style={{ color: C.sub }}>Weight (kg)</p>
                      <input type="number" value={form.weight} onChange={set('weight')} placeholder="e.g. 78"
                        className={inputCls} style={inputSty(C)} />
                    </div>
                    <div>
                      <p className="text-xs font-bold mb-1.5" style={{ color: C.sub }}>Address</p>
                      <input value={form.address} onChange={set('address')} placeholder="Home address"
                        className={inputCls} style={inputSty(C)} />
                    </div>
                  </div>
                </div>
              )}

              {/* ── Step 2: Health details ── */}
              {step === 2 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-sm font-semibold mb-3" style={{ color: C.text }}>Medical Conditions <span style={{ fontWeight: 400, color: C.muted }}>(select all that apply)</span></p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {COMMON_CONDITIONS.map(c => (
                        <ToggleChip key={c} label={c} selected={form.conditions.includes(c)} onToggle={() => toggle('conditions', c)} />
                      ))}
                    </div>
                    <input value={form.conditions.filter(c => !COMMON_CONDITIONS.includes(c)).join(', ')}
                      onChange={e => {
                        const custom = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                        setForm(p => ({ ...p, conditions: [...COMMON_CONDITIONS.filter(c => p.conditions.includes(c)), ...custom] }));
                      }}
                      placeholder="Other conditions (comma-separated)"
                      className={inputCls} style={inputSty(C)} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-3" style={{ color: C.text }}>Known Allergies <span style={{ fontWeight: 400, color: C.muted }}>(select all that apply)</span></p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {COMMON_ALLERGIES.map(a => (
                        <ToggleChip key={a} label={a} selected={form.allergies.includes(a)} onToggle={() => toggle('allergies', a)} />
                      ))}
                    </div>
                    <input value={form.allergies.filter(a => !COMMON_ALLERGIES.includes(a)).join(', ')}
                      onChange={e => {
                        const custom = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                        setForm(p => ({ ...p, allergies: [...COMMON_ALLERGIES.filter(a => p.allergies.includes(a)), ...custom] }));
                      }}
                      placeholder="Other allergies (comma-separated)"
                      className={inputCls} style={inputSty(C)} />
                  </div>
                </div>
              )}

              {/* ── Step 3: Emergency contact ── */}
              {step === 3 && (
                <div className="flex flex-col gap-4">
                  <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-800 dark:text-amber-300">
                    <p className="font-sans font-semibold text-xs">
                      ⚠ This contact will appear on the emergency card and be called in a crisis.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold mb-1.5" style={{ color: C.sub }}>Contact Name *</p>
                    <input required value={form.emergency_contact_name} onChange={set('emergency_contact_name')} placeholder="e.g. Linda Chen"
                      className={inputCls} style={inputSty(C)} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-bold mb-1.5" style={{ color: C.sub }}>Phone Number *</p>
                      <input required value={form.emergency_contact_phone} onChange={set('emergency_contact_phone')} placeholder="+1 (555) 000-0000"
                        className={inputCls} style={inputSty(C)} />
                    </div>
                    <div>
                      <p className="text-xs font-bold mb-1.5" style={{ color: C.sub }}>Relationship</p>
                      <select value={form.emergency_contact_rel} onChange={set('emergency_contact_rel')} className={inputCls} style={inputSty(C)}>
                        {['Daughter', 'Son', 'Spouse', 'Parent', 'Sibling', 'Friend', 'Caregiver', 'Doctor'].map(r => <option key={r}>{r}</option>)}
                      </select>
                    </div>
                  </div>

                  {error && (
                    <div className="flex items-start gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                      <AlertCircle size={15} className="text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="font-sans text-xs text-red-600 dark:text-red-400">{error}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center gap-3 mt-8 font-sans">
                {step > 1 && (
                  <button onClick={() => setStep(s => s - 1)}
                    className="flex-1 py-3 rounded-xl border border-border bg-card text-muted-foreground hover:bg-muted text-sm font-semibold transition-colors font-sans"
                  >
                    Back
                  </button>
                )}
                {step < 3 ? (
                  <button onClick={() => { if (step === 1 && !form.name.trim()) { setError('Patient name is required.'); return; } setError(''); setStep(s => s + 1); }}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:opacity-90 transition-opacity font-sans"
                  >
                    Continue <ChevronRight size={16} />
                  </button>
                ) : (
                  <button onClick={handleFinish} disabled={loading || !form.emergency_contact_name || !form.emergency_contact_phone}
                    className="flex-1 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:opacity-90 disabled:opacity-60 transition-opacity font-sans"
                  >
                    {loading ? 'Creating profile…' : 'Get Started →'}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
