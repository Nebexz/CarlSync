import { useState, useRef, useEffect } from 'react';
import { AlertTriangle, Plus, Pill, Clock, ChevronRight, Activity, FileText, CheckSquare, Calendar, HeartHandshake, X, Stethoscope, StickyNote, ClipboardList, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '../contexts/AuthContext';
import { api } from '../lib/api';
import { careChannel } from '../lib/careChannel';
import type { Screen } from '../App';

const C = { green: '#10b981', teal: '#0d9488', dark: '#1c2b3a', bg: '#fafafa', border: '#e2e8f0', text: '#0f172a', sub: '#64748b', muted: '#94a3b8' };

function Card({ children, className = '', style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`bg-card text-card-foreground rounded-2xl border border-border shadow-sm transition-all duration-200 ${className}`}
      style={style}>
      {children}
    </div>
  );
}

// ── New Entry dropdown ────────────────────────────────────────────────────────
type EntryType = 'medication' | 'vitals' | 'note' | 'task' | 'appointment';

const ENTRY_TYPES = [
  { id: 'medication' as EntryType,   icon: <Pill size={16} />,         label: 'Log Medication',       desc: 'Mark a dose as taken or missed',    color: '#0d9488' },
  { id: 'vitals' as EntryType,       icon: <Stethoscope size={16} />,  label: 'Record Vitals',        desc: 'Blood pressure, heart rate, temp',  color: '#6366f1' },
  { id: 'note' as EntryType,         icon: <StickyNote size={16} />,   label: 'Add Note',             desc: 'Doctor instructions or observations',color: '#f59e0b' },
  { id: 'task' as EntryType,         icon: <ClipboardList size={16} />,label: 'Create Task',          desc: 'Assign a care task to the team',    color: '#10b981' },
  { id: 'appointment' as EntryType,  icon: <Calendar size={16} />,     label: 'Schedule Appointment', desc: 'Add a doctor visit or lab test',    color: '#ef4444' },
];

const TEAM = ['Sarah Chen', 'James Chen', 'Emily Chen'];
const inputCls = "w-full px-3 py-2.5 rounded-lg border text-sm outline-none bg-background text-foreground border-border focus:border-emerald-500 transition-colors";
const inputSty = {};

function EntryForm({ type, patientId, onDone }: { type: EntryType; patientId: string; onDone: (msg: string) => void }) {
  const [saving, setSaving] = useState(false);

  const save = async (description: string, timelineType: string) => {
    setSaving(true);
    try {
      await api.addTimelineEvent(patientId, timelineType, description);
      onDone(description);
    } catch (e: any) {
      toast.error(e.message);
    } finally {
      setSaving(false);
    }
  };

  if (type === 'medication') {
    const [med, setMed] = useState('Metformin 500mg');
    const [status, setStatus] = useState<'taken' | 'missed'>('taken');
    return (
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-xs font-bold mb-1.5" style={{ color: C.sub }}>Medication</p>
          <select value={med} onChange={e => setMed(e.target.value)} className={inputCls} style={inputSty}>
            {['Metformin 500mg', 'Lisinopril 10mg', 'Atorvastatin 20mg', 'Aspirin 81mg'].map(m => <option key={m}>{m}</option>)}
          </select>
        </div>
        <div className="flex gap-2">
          {(['taken', 'missed'] as const).map(s => (
            <button key={s} onClick={() => setStatus(s)} className="flex-1 py-2 rounded-lg text-sm font-semibold border transition-colors"
              style={{ backgroundColor: status === s ? (s === 'taken' ? '#dcfce7' : '#fee2e2') : 'white', color: status === s ? (s === 'taken' ? '#166534' : '#991b1b') : C.sub, borderColor: status === s ? (s === 'taken' ? '#166534' : '#ef4444') : C.border }}>
              {s === 'taken' ? '✓ Taken' : '✗ Missed'}
            </button>
          ))}
        </div>
        <button onClick={() => save(`Logged ${med} as ${status}`, 'medication')} disabled={saving}
          className="w-full py-2.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60"
          style={{ backgroundColor: C.teal }}>
          {saving ? 'Saving…' : 'Log Entry'}
        </button>
      </div>
    );
  }

  if (type === 'vitals') {
    const [bp, setBp] = useState(''); const [hr, setHr] = useState(''); const [temp, setTemp] = useState('');
    return (
      <div className="flex flex-col gap-3">
        {[{ l: 'Blood Pressure (mmHg)', v: bp, set: setBp, p: 'e.g. 132/84' }, { l: 'Heart Rate (bpm)', v: hr, set: setHr, p: 'e.g. 72' }, { l: 'Temperature (°F)', v: temp, set: setTemp, p: 'e.g. 98.4' }].map(({ l, v, set, p }) => (
          <div key={l}><p className="text-xs font-bold mb-1.5 text-muted-foreground">{l}</p>
            <input value={v} onChange={e => set(e.target.value)} onFocus={e => e.target.select()} placeholder={p} className={inputCls} style={inputSty} /></div>
        ))}
        <button onClick={() => save(`Vitals recorded — BP: ${bp || '—'}, HR: ${hr || '—'} bpm, Temp: ${temp || '—'}°F`, 'vitals')} disabled={saving}
          className="w-full py-2.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60" style={{ backgroundColor: '#6366f1' }}>
          {saving ? 'Saving…' : 'Save Vitals'}
        </button>
      </div>
    );
  }

  if (type === 'note') {
    const [note, setNote] = useState('');
    return (
      <div className="flex flex-col gap-3">
        <div><p className="text-xs font-bold mb-1.5" style={{ color: C.sub }}>Note</p>
          <textarea value={note} onChange={e => setNote(e.target.value)} rows={4} placeholder="Write a care note, doctor instruction, or observation…"
            className={`${inputCls} resize-none`} style={inputSty} /></div>
        <button onClick={() => save(note || 'Added a note', 'note')} disabled={saving}
          className="w-full py-2.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60" style={{ backgroundColor: '#f59e0b' }}>
          {saving ? 'Saving…' : 'Save Note'}
        </button>
      </div>
    );
  }

  if (type === 'task') {
    const [title, setTitle] = useState(''); const [assignee, setAssignee] = useState(TEAM[0]); const [priority, setPriority] = useState('medium');
    const handleCreate = async () => {
      if (!title.trim()) return;
      setSaving(true);
      try {
        await api.createTask({ patient_id: patientId, title, description: '', priority, status: 'pending', assigned_to: assignee, due_date: '' });
        onDone(`Task "${title}" assigned to ${assignee}`);
      } catch (e: any) { toast.error(e.message); } finally { setSaving(false); }
    };
    return (
      <div className="flex flex-col gap-3">
        <div><p className="text-xs font-bold mb-1.5" style={{ color: C.sub }}>Task</p>
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Pick up prescription" className={inputCls} style={inputSty} /></div>
        <div className="grid grid-cols-2 gap-2">
          <div><p className="text-xs font-bold mb-1.5" style={{ color: C.sub }}>Assign To</p>
            <select value={assignee} onChange={e => setAssignee(e.target.value)} className={inputCls} style={inputSty}>{TEAM.map(t => <option key={t}>{t}</option>)}</select></div>
          <div><p className="text-xs font-bold mb-1.5" style={{ color: C.sub }}>Priority</p>
            <select value={priority} onChange={e => setPriority(e.target.value)} className={inputCls} style={inputSty}><option value="high">High</option><option value="medium">Medium</option><option value="low">Low</option></select></div>
        </div>
        <button onClick={handleCreate} disabled={saving || !title.trim()}
          className="w-full py-2.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60" style={{ backgroundColor: C.green }}>
          {saving ? 'Creating…' : 'Create Task'}
        </button>
      </div>
    );
  }

  // appointment
  const [apptTitle, setApptTitle] = useState(''); const [doctor, setDoctor] = useState(''); const [date, setDate] = useState(''); const [time, setTime] = useState('');
  const handleAppt = async () => {
    setSaving(true);
    try {
      await api.createAppointment({ patient_id: patientId, title: apptTitle || 'Appointment', doctor_name: doctor, location: '', date, time, notes: '' });
      onDone(`Appointment "${apptTitle}" scheduled for ${date}`);
    } catch (e: any) { toast.error(e.message); } finally { setSaving(false); }
  };
  return (
    <div className="flex flex-col gap-3">
      {[{ l: 'Title', v: apptTitle, set: setApptTitle, p: 'e.g. Cardiology Follow-up' }, { l: 'Doctor', v: doctor, set: setDoctor, p: 'e.g. Dr. Martinez' }, { l: 'Date', v: date, set: setDate, p: 'e.g. Jun 25' }, { l: 'Time', v: time, set: setTime, p: 'e.g. 2:00 PM' }].map(({ l, v, set, p }) => (
        <div key={l}><p className="text-xs font-bold mb-1.5" style={{ color: C.sub }}>{l}</p>
          <input value={v} onChange={e => set(e.target.value)} placeholder={p} className={inputCls} style={inputSty} /></div>
      ))}
      <button onClick={handleAppt} disabled={saving}
        className="w-full py-2.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60" style={{ backgroundColor: '#ef4444' }}>
        {saving ? 'Scheduling…' : 'Schedule'}
      </button>
    </div>
  );
}

function NewEntryButton({ patientId }: { patientId: string }) {
  const [open, setOpen] = useState(false);
  const [activeType, setActiveType] = useState<EntryType | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) handleClose(); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const handleClose = () => { setOpen(false); setActiveType(null); setSuccessMsg(null); };
  const handleDone = (msg: string) => {
    setSuccessMsg(msg);
    // Broadcast realtime update to family
    careChannel.broadcast(patientId, { msg });
    setTimeout(handleClose, 2000);
  };

  const active = ENTRY_TYPES.find(e => e.id === activeType);

  return (
    <div ref={ref} className="relative">
      <button onClick={() => { setOpen(o => !o); setActiveType(null); setSuccessMsg(null); }}
        className="flex items-center gap-2 px-5 h-10 rounded-xl hover:opacity-90 transition-opacity bg-emerald-500 text-white font-sans font-semibold text-sm shadow-sm">
        <Plus size={15} />
        <span>New Entry</span>
      </button>

      {open && (
        <div className="absolute right-0 top-12 bg-card text-card-foreground rounded-2xl border border-border shadow-2xl z-50 overflow-hidden"
          style={{ width: 340 }}>
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <div className="flex items-center gap-2">
              {activeType && (
                <button onClick={() => setActiveType(null)} className="p-1 rounded hover:bg-muted mr-1 text-muted-foreground">←</button>
              )}
              <span className="font-outfit font-bold text-base text-foreground">
                {activeType ? active?.label : 'New Entry'}
              </span>
            </div>
            <button onClick={handleClose} className="p-1 rounded-lg hover:bg-muted text-muted-foreground"><X size={16} /></button>
          </div>

          <div className="p-5">
            {successMsg ? (
              <div className="flex flex-col items-center gap-3 py-4 text-center">
                <div className="flex items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 w-12 h-12">
                  <span style={{ fontSize: 24 }}>✓</span>
                </div>
                <p className="font-outfit font-bold text-base text-foreground">Entry Saved</p>
                <p className="font-sans text-sm text-muted-foreground">{successMsg}</p>
              </div>
            ) : activeType ? (
              <EntryForm type={activeType} patientId={patientId} onDone={handleDone} />
            ) : (
              <div className="flex flex-col gap-2">
                <p className="font-sans text-sm text-muted-foreground mb-1">What would you like to log?</p>
                {ENTRY_TYPES.map(entry => (
                  <button key={entry.id} onClick={() => setActiveType(entry.id)}
                    className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card hover:bg-emerald-500/10 hover:border-emerald-500 transition-all text-left">
                    <div className="flex items-center justify-center rounded-lg flex-shrink-0 w-9 h-9"
                      style={{ backgroundColor: `${entry.color}18`, color: entry.color }}>{entry.icon}</div>
                    <div className="flex-1">
                      <p className="font-sans font-semibold text-sm text-foreground">{entry.label}</p>
                      <p className="font-sans text-xs text-muted-foreground">{entry.desc}</p>
                    </div>
                    <ChevronRight size={14} className="text-muted-foreground/70" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Wellbeing options ─────────────────────────────────────────────────────────
const WELLBEING = [{ e: '😊', label: 'Good' }, { e: '😴', label: 'Tired' }, { e: '😰', label: 'Exhausted' }, { e: '😩', label: 'Overburdened' }];

export function HomeScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const { user, patient } = useAuth();
  const [medications, setMedications] = useState<any[]>([]);
  const [tasks, setTasks] = useState<any[]>([]);
  const [timeline, setTimeline] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [checkedIn, setCheckedIn] = useState(false);

  const patientId = patient?.id ?? '';
  const userName = user?.user_metadata?.name?.split(' ')[0] ?? 'there';

  // Load data
  useEffect(() => {
    if (!patientId) return;
    Promise.all([
      api.getMedications(patientId).then(r => setMedications(r.medications ?? [])).catch(() => {}),
      api.getTasks(patientId).then(r => setTasks(r.tasks ?? [])).catch(() => {}),
      api.getTimeline(patientId).then(r => setTimeline(r.events ?? [])).catch(() => {}),
    ]).finally(() => setLoading(false));
  }, [patientId]);

  // Realtime subscription — see live family updates
  useEffect(() => {
    if (!patientId) return;
    return careChannel.subscribe(patientId, (payload) => {
      api.getTimeline(patientId).then(r => setTimeline(r.events ?? [])).catch(() => {});
      api.getMedications(patientId).then(r => setMedications(r.medications ?? [])).catch(() => {});
      if (payload.payload?.msg) {
        toast.success(`Family update: ${payload.payload.msg}`, { icon: '👨‍👩‍👧' });
      }
    });
  }, [patientId]);

  // Mark medication taken/missed
  const handleDose = async (med: any, taken: boolean) => {
    try {
      await api.updateMedication(med.id, { patient_id: patientId, taken_today: taken });
      setMedications(p => p.map(m => m.id === med.id ? { ...m, taken_today: taken } : m));
      // Refresh timeline
      api.getTimeline(patientId).then(r => setTimeline(r.events ?? [])).catch(() => {});
      // Broadcast to family
      careChannel.broadcast(patientId, { msg: `${userName} marked ${med.name} as ${taken ? 'taken ✓' : 'missed'}` });
    } catch (e: any) { toast.error(e.message); }
  };

  const handleWellbeing = async (mood: string) => {
    setCheckedIn(true);
    try {
      await api.logWellbeing(mood, patientId);
      api.getTimeline(patientId).then(r => setTimeline(r.events ?? [])).catch(() => {});
    } catch (e) { /* non-critical */ }
  };

  // Today's doses — active medications only
  const todayDoses = medications.filter(m => m.status === 'active');
  const taken = todayDoses.filter(m => m.taken_today === true).length;
  const total = todayDoses.length;

  // KPIs
  const pendingTasks = tasks.filter(t => t.status !== 'completed').length;
  const highPriority = tasks.filter(t => t.priority === 'high' && t.status !== 'completed').length;

  // Recent timeline (last 4)
  const recentActivity = timeline.slice(0, 4);

  const typeIcon: Record<string, React.ReactNode> = {
    medication: <Pill size={14} />, vitals: <Activity size={14} />, note: <FileText size={14} />,
    task: <CheckSquare size={14} />, appointment: <Calendar size={14} />, wellbeing: <HeartHandshake size={14} />,
  };

  const getHour = () => {
    const h = new Date().getHours();
    return h < 12 ? 'morning' : h < 17 ? 'afternoon' : 'evening';
  };

  return (
    <div className="p-10 flex flex-col gap-8 min-h-full bg-background text-foreground transition-colors duration-200">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-outfit font-bold text-2xl md:text-3xl text-foreground">
            Good {getHour()}, {userName}
          </h1>
          <p className="font-sans text-sm text-muted-foreground mt-1">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <button onClick={() => onNavigate('emergency')}
            className="flex items-center gap-2 px-5 h-10 rounded-xl border border-red-500/40 hover:bg-red-500/10 text-red-500 font-sans font-semibold text-sm transition-all duration-200">
            <AlertTriangle size={15} />
            <span>Emergency Card</span>
          </button>
          <NewEntryButton patientId={patientId} />
        </div>
      </div>

      {/* Patient summary */}
      <div className="bg-card text-card-foreground rounded-2xl border border-border p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center rounded-full flex-shrink-0 bg-emerald-500 text-white font-sans font-semibold text-xl w-16 h-16 shadow-inner shadow-black/10">
              {patient?.name?.split(' ').map((n: string) => n[0]).join('').slice(0, 2) ?? 'RC'}
            </div>
            <div>
              <p className="font-sans font-semibold text-lg text-foreground">{patient?.name ?? 'Loading…'}</p>
              <div className="flex items-center gap-3 mt-1">
                {patient?.age && <span className="font-sans text-sm text-muted-foreground">Age: {patient.age}</span>}
                {patient?.blood_type && patient.blood_type !== 'Unknown' && (
                  <span className="font-sans text-sm text-muted-foreground">Blood: <strong className="text-red-500">{patient.blood_type}</strong></span>
                )}
              </div>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap md:justify-end">
            {(patient?.conditions ?? []).slice(0, 3).map((c: string) => (
              <span key={c} className="px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground font-sans uppercase">
                {c.toUpperCase()}
              </span>
            ))}
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500 text-white font-sans uppercase">
              STABLE
            </span>
          </div>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          { dot: '#ef4444', label: 'Pending Tasks', val: loading ? '…' : String(pendingTasks), sub: `${highPriority} high priority`, to: 'tasks' as Screen },
          { dot: '#10b981', label: "Today's Meds", val: loading ? '…' : `${taken}/${total}`, sub: taken === total && total > 0 ? 'All taken ✓' : 'doses taken', to: 'medication' as Screen },
          { dot: '#f59e0b', label: 'Timeline Events', val: loading ? '…' : String(timeline.length), sub: 'activity logs', to: 'timeline' as Screen },
        ].map(({ dot, label, val, sub, to }) => (
          <button key={label} onClick={() => onNavigate(to)} className="text-left w-full group focus:outline-none">
            <div className="bg-card text-card-foreground rounded-2xl border border-border p-5 flex flex-col gap-2 group-hover:-translate-y-1 group-hover:shadow-md group-hover:border-emerald-500/50 transition-all duration-300 ease-out h-[130px] shadow-sm">
              <div className="flex items-center gap-1.5">
                <div className="rounded-full w-2 h-2" style={{ backgroundColor: dot }} />
                <span className="font-sans font-medium text-xs text-muted-foreground">{label}</span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-sans font-bold text-2xl text-foreground">{val}</span>
                <span className="font-sans font-semibold text-[11px] text-muted-foreground/60">{sub}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Today's medications */}
      <div className="bg-card text-card-foreground rounded-2xl border border-border overflow-hidden shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-card flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Pill size={18} className="text-teal-500" />
            <span className="font-outfit font-semibold text-lg text-foreground">Today's Medications</span>
            {!loading && (
              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ml-2 ${taken === total && total > 0 ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'}`}>
                {total === 0 ? 'Add medications' : `${taken}/${total} taken`}
              </span>
            )}
          </div>
          <button onClick={() => onNavigate('medication')} className="flex items-center gap-1 text-sm font-sans font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-500 transition-colors">
            View All <ChevronRight size={14} />
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-10 bg-card">
            <Loader2 size={24} className="animate-spin text-muted-foreground" />
          </div>
        ) : todayDoses.length === 0 ? (
          <div className="flex flex-col items-center gap-2 py-10 bg-card">
            <p className="font-sans text-sm text-muted-foreground">No active medications yet.</p>
            <button onClick={() => onNavigate('medication')} className="text-sm font-medium text-teal-500 hover:underline">Add medications →</button>
          </div>
        ) : (
          todayDoses.slice(0, 4).map((med, i) => (
            <div key={med.id} className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors bg-card gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-xl bg-teal-500/10 text-teal-500 w-10 h-10 flex-shrink-0">
                  <Pill size={18} />
                </div>
                <div>
                  <p className="font-sans font-semibold text-sm text-foreground">
                    {med.name} <span className="font-normal text-muted-foreground ml-1.5">{med.dosage}</span>
                  </p>
                  {med.times?.[0] && (
                    <div className="flex items-center gap-1 mt-0.5">
                      <Clock size={11} className="text-muted-foreground/60" />
                      <span className="font-sans text-xs text-muted-foreground/60">{med.times[0]}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                {med.taken_today === true ? (
                  <span className="px-4 py-2 rounded-xl text-sm font-semibold bg-emerald-500/10 text-emerald-500">✓ Taken</span>
                ) : med.taken_today === false ? (
                  <span className="px-4 py-2 rounded-xl text-sm font-semibold bg-red-500/10 text-red-500">✗ Missed</span>
                ) : (
                  <>
                    <button onClick={() => handleDose(med, true)} className="px-4 py-2 rounded-xl text-sm font-semibold bg-emerald-500 text-white hover:opacity-90 transition-opacity">Mark Taken</button>
                    <button onClick={() => handleDose(med, false)} className="px-4 py-2 rounded-xl text-sm font-medium border border-border text-muted-foreground hover:bg-muted hover:text-foreground transition-all">Skip</button>
                  </>
                )}
              </div>
            </div>
          ))
        )}

        {total > 0 && (
          <div className="px-6 pb-4 bg-card">
            <div className="h-1.5 rounded-full bg-border">
              <div className="h-1.5 rounded-full bg-emerald-500 transition-all duration-500"
                style={{ width: `${total > 0 ? (taken / total) * 100 : 0}%` }} />
            </div>
          </div>
        )}
      </div>

      {/* Content split */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Activity feed */}
        <div className="lg:col-span-3 bg-card text-card-foreground rounded-2xl border border-border flex flex-col shadow-sm">
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <span className="font-outfit font-semibold text-lg text-foreground">Recent Activity</span>
            <button onClick={() => onNavigate('timeline')} className="px-4 h-9 rounded-xl border border-border text-xs font-semibold text-foreground hover:bg-muted transition-colors">View All</button>
          </div>
          {loading ? (
            <div className="flex items-center justify-center py-10"><Loader2 size={20} className="animate-spin text-muted-foreground" /></div>
          ) : recentActivity.length === 0 ? (
            <div className="flex items-center justify-center py-10">
              <p className="font-sans text-sm text-muted-foreground">No activity yet. Start logging care!</p>
            </div>
          ) : (
            recentActivity.map((ev, i) => (
              <div key={ev.id} className="flex items-center gap-4 px-6 py-3 border-b border-border last:border-b-0 hover:bg-muted/20 transition-colors">
                <div className="flex-shrink-0 flex items-center justify-center rounded-full bg-muted text-muted-foreground w-8 h-8">
                  {typeIcon[ev.type] ?? <Activity size={14} />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sans font-semibold text-sm text-foreground truncate">{ev.description}</p>
                  <p className="font-sans text-xs text-muted-foreground">{ev.actor_name}</p>
                </div>
                <span className="font-sans text-xs text-muted-foreground/60 flex-shrink-0">
                  {new Date(ev.created_at).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                </span>
              </div>
            ))
          )}
        </div>

        {/* Right column */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          {/* Quick nav */}
          <div className="bg-card text-card-foreground rounded-2xl border border-border p-5 shadow-sm">
            <p className="font-outfit font-semibold text-base text-foreground mb-3">Quick Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Medications', icon: <Pill size={16} />, to: 'medication' as Screen, color: '#0d9488' },
                { label: 'Tasks', icon: <CheckSquare size={16} />, to: 'tasks' as Screen, color: '#10b981' },
                { label: 'Calendar', icon: <Calendar size={16} />, to: 'calendar' as Screen, color: '#6366f1' },
                { label: 'Emergency', icon: <AlertTriangle size={16} />, to: 'emergency' as Screen, color: '#ef4444' },
              ].map(({ label, icon, to, color }) => (
                <button key={label} onClick={() => onNavigate(to)}
                  className="flex items-center gap-2.5 p-3 rounded-xl border border-border hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all duration-200 text-left bg-card text-card-foreground shadow-sm hover:shadow">
                  <span style={{ color }}>{icon}</span>
                  <span className="font-sans font-semibold text-xs text-foreground">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Wellbeing check-in */}
          <div className="rounded-2xl p-5 border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 text-card-foreground">
            {checkedIn ? (
              <div className="text-center py-3">
                <p style={{ fontSize: 28 }}>🌿</p>
                <p className="font-outfit font-bold text-sm text-foreground mt-1.5">Thank you, {userName}</p>
                <p className="font-sans text-xs text-muted-foreground mt-0.5">You're doing a wonderful job. Remember to rest too.</p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-2">
                  <HeartHandshake size={18} className="text-emerald-500" />
                  <span className="font-outfit font-bold text-sm text-foreground">How are you feeling today?</span>
                </div>
                <p className="font-sans text-xs text-muted-foreground mb-3">Your wellbeing matters too, {userName}.</p>
                <div className="grid grid-cols-2 gap-2">
                  {WELLBEING.map(w => (
                    <button key={w.label} onClick={() => handleWellbeing(w.label)}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card border border-border hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all text-left shadow-sm">
                      <span style={{ fontSize: 16 }}>{w.e}</span>
                      <span className="font-sans font-semibold text-xs text-foreground">{w.label}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
