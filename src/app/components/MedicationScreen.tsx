import { useState, useEffect } from 'react';
import { Search, Plus, Pill, Bell, ChevronLeft, ChevronRight, X, Loader2, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '../contexts/AuthContext';
import { api } from '../lib/api';
import { careChannel } from '../lib/careChannel';

const C = { border: '#e2e8f0', text: '#0f172a', sub: '#64748b', muted: '#94a3b8', teal: '#0d9488', green: '#10b981' };

type MedStatus = 'active' | 'completed' | 'discontinued';
interface Med { id: string; patient_id: string; name: string; dosage: string; frequency: string; prescriber: string; status: MedStatus; times: string[]; taken_today?: boolean | null; }

const STATUS_STYLE = {
  active:       { className: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/20', label: 'ACTIVE' },
  completed:    { className: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/20', label: 'COMPLETED' },
  discontinued: { className: 'bg-red-500/15 text-red-600 dark:text-red-400 border-red-500/20', label: 'STOPPED' },
};

const WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const DATES = [15, 16, 17, 18, 19, 20, 21];
const TODAY_IDX = 2;

function AddMedModal({ patientId, onClose, onAdd }: { patientId: string; onClose: () => void; onAdd: (m: Med) => void }) {
  const [f, setF] = useState({ name: '', dosage: '', frequency: '1x Daily', prescriber: '', time: '08:00 AM' });
  const [saving, setSaving] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.name || !f.dosage) return;
    setSaving(true);
    try {
      const { medication } = await api.createMedication({
        patient_id: patientId, name: f.name, dosage: f.dosage, frequency: f.frequency,
        prescriber: f.prescriber || 'Unknown', status: 'active' as MedStatus,
        times: [f.time], taken_today: null,
      });
      onAdd(medication);
      toast.success(`${f.name} added to medication list`);
      onClose();
    } catch (e: any) {
      toast.error(e.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card text-card-foreground rounded-2xl p-8 shadow-2xl border border-border" style={{ width: 460 }}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-outfit font-bold text-xl text-foreground">Add Medication</h2>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded text-muted-foreground"><X size={20} /></button>
        </div>
        <form onSubmit={submit} className="flex flex-col gap-4">
          {[{ l: 'Medication Name *', k: 'name', p: 'e.g. Metformin' }, { l: 'Dosage *', k: 'dosage', p: 'e.g. 500mg' }, { l: 'Prescribing Doctor', k: 'prescriber', p: 'e.g. Dr. Aris' }].map(({ l, k, p }) => (
            <div key={k}>
              <p className="text-xs font-bold mb-1.5 text-muted-foreground">{l}</p>
              <input required={l.includes('*')} placeholder={p} value={f[k as keyof typeof f]}
                onChange={e => setF(prev => ({ ...prev, [k]: e.target.value }))}
                className="w-full px-3 py-3 rounded-lg border text-sm outline-none bg-background text-foreground border-border focus:border-emerald-500 transition-colors" />
            </div>
          ))}
          <div className="grid grid-cols-2 gap-4">
            {[{ l: 'Frequency', k: 'frequency', opts: ['1x Daily', '2x Daily', '3x Daily', 'Nightly', 'Weekly'] }, { l: 'Time', k: 'time', opts: ['06:00 AM', '08:00 AM', '12:00 PM', '12:30 PM', '06:00 PM', '08:00 PM'] }].map(({ l, k, opts }) => (
              <div key={k}>
                <p className="text-xs font-bold mb-1.5 text-muted-foreground">{l}</p>
                <select value={f[k as keyof typeof f]} onChange={e => setF(prev => ({ ...prev, [k]: e.target.value }))}
                  className="w-full px-3 py-3 rounded-lg border text-sm outline-none bg-background text-foreground border-border focus:border-emerald-500 transition-colors">
                  {opts.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-2">
            <button type="button" onClick={onClose} className="flex-1 py-3 rounded-xl border border-border text-sm font-semibold text-muted-foreground hover:bg-muted transition-colors">Cancel</button>
            <button type="submit" disabled={saving} className="flex-1 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-500 hover:opacity-90 disabled:opacity-60 transition-opacity">
              {saving ? 'Saving…' : 'Add Medication'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function MedicationScreen() {
  const { patient } = useAuth();
  const [meds, setMeds] = useState<Med[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [reminders, setReminders] = useState({ morning: true, afternoon: true, evening: false });

  const patientId = patient?.id ?? '';

  useEffect(() => {
    if (!patientId) return;
    api.getMedications(patientId)
      .then(r => setMeds(r.medications ?? []))
      .catch(e => toast.error(e.message))
      .finally(() => setLoading(false));
  }, [patientId]);

  // Realtime sync
  useEffect(() => {
    if (!patientId) return;
    return careChannel.subscribe(patientId, () => {
      api.getMedications(patientId).then(r => setMeds(r.medications ?? [])).catch(() => {});
    });
  }, [patientId]);

  const handleDelete = async (med: Med) => {
    try {
      await api.deleteMedication(med.id, patientId);
      setMeds(p => p.filter(m => m.id !== med.id));
      toast.success(`${med.name} removed`);
    } catch (e: any) { toast.error(e.message); }
  };

  const handleStatusChange = async (med: Med, status: MedStatus) => {
    try {
      await api.updateMedication(med.id, { patient_id: patientId, status });
      setMeds(p => p.map(m => m.id === med.id ? { ...m, status } : m));
    } catch (e: any) { toast.error(e.message); }
  };

  const filtered = meds.filter(m => m.name.toLowerCase().includes(search.toLowerCase()));

  const scheduleToday = meds.filter(m => m.status === 'active').flatMap(m =>
    (m.times ?? []).map(t => ({ time: t, med: m.name, color: '#f0fdfa' }))
  ).slice(0, 5);

  return (
    <div className="p-10 flex flex-col gap-8 min-h-full bg-background text-foreground transition-colors duration-200">
      {showModal && <AddMedModal patientId={patientId} onClose={() => setShowModal(false)} onAdd={m => setMeds(p => [m as Med, ...p])} />}

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="font-sans font-bold text-2xl md:text-3xl text-foreground">Medication Management</h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-2 bg-card border border-border px-3 h-10 rounded-xl w-full sm:w-[280px]">
            <Search size={16} className="text-muted-foreground" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search medications…"
              className="flex-1 outline-none text-sm bg-transparent text-foreground placeholder:text-muted-foreground" />
          </div>
          <button onClick={() => setShowModal(true)} className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-emerald-500 hover:opacity-90 transition-opacity whitespace-nowrap">
            <Plus size={16} /> Add Medication
          </button>
        </div>
      </div>

      {/* Medication list - Desktop/Tablet layout */}
      <div className="hidden md:block bg-card text-card-foreground rounded-2xl border border-border overflow-hidden shadow-sm">
        <div className="grid px-6 py-4 border-b border-border bg-muted/20" style={{ gridTemplateColumns: '1fr 100px 130px 150px 120px 40px' }}>
          {['MEDICATION NAME', 'DOSAGE', 'FREQUENCY', 'PRESCRIBER', 'STATUS', ''].map(h => (
            <p key={h} className="font-sans font-bold text-xs text-muted-foreground">{h}</p>
          ))}
        </div>
        {loading ? (
          <div className="flex items-center justify-center py-12"><Loader2 size={24} className="animate-spin text-muted-foreground" /></div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-2 py-12">
            <p className="font-sans text-sm text-muted-foreground">No medications found.</p>
            <button onClick={() => setShowModal(true)} className="text-sm font-medium text-teal-500 hover:underline">Add first medication →</button>
          </div>
        ) : (
          filtered.map((med, i) => {
            const s = STATUS_STYLE[med.status] ?? STATUS_STYLE.active;
            return (
              <div key={med.id} className="grid items-center px-6 py-5 hover:bg-muted/10 transition-colors border-b border-border last:border-b-0 bg-card"
                style={{ gridTemplateColumns: '1fr 100px 130px 150px 120px 40px' }}>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center rounded-lg bg-teal-500/15 text-teal-500 w-8 h-8">
                    <Pill size={14} />
                  </div>
                  <span className="font-sans font-semibold text-sm text-foreground">{med.name}</span>
                </div>
                <span className="font-sans text-sm text-foreground">{med.dosage}</span>
                <span className="font-sans text-sm text-foreground">{med.frequency}</span>
                <span className="font-sans text-sm text-foreground">{med.prescriber}</span>
                <div>
                  <select value={med.status} onChange={e => handleStatusChange(med, e.target.value as MedStatus)}
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold border cursor-pointer outline-none ${s.className}`}>
                    <option value="active">ACTIVE</option>
                    <option value="completed">COMPLETED</option>
                    <option value="discontinued">STOPPED</option>
                  </select>
                </div>
                <button onClick={() => handleDelete(med)} className="p-1.5 rounded hover:bg-red-500/10 text-muted-foreground hover:text-red-500 transition-colors">
                  <Trash2 size={14} />
                </button>
              </div>
            );
          })
        )}
      </div>

      {/* Medication list - Mobile layout */}
      <div className="block md:hidden flex flex-col gap-4">
        {loading ? (
          <div className="flex items-center justify-center py-12 bg-card rounded-2xl border border-border"><Loader2 size={24} className="animate-spin text-muted-foreground" /></div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-2 py-12 bg-card rounded-2xl border border-border">
            <p className="font-sans text-sm text-muted-foreground">No medications found.</p>
            <button onClick={() => setShowModal(true)} className="text-sm font-medium text-teal-500 hover:underline">Add first medication →</button>
          </div>
        ) : (
          filtered.map(med => {
            const s = STATUS_STYLE[med.status] ?? STATUS_STYLE.active;
            return (
              <div key={med.id} className="bg-card text-card-foreground border border-border p-5 rounded-2xl shadow-sm flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center rounded-lg bg-teal-500/15 text-teal-500 w-8 h-8">
                      <Pill size={14} />
                    </div>
                    <span className="font-sans font-bold text-sm text-foreground">{med.name}</span>
                  </div>
                  <button onClick={() => handleDelete(med)} className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted-foreground hover:text-red-500 transition-colors">
                    <Trash2 size={14} />
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-xs border-t border-border/40 pt-3">
                  <div>
                    <p className="text-muted-foreground font-semibold uppercase tracking-wider text-[10px]">Dosage</p>
                    <p className="text-foreground font-medium mt-0.5">{med.dosage}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground font-semibold uppercase tracking-wider text-[10px]">Frequency</p>
                    <p className="text-foreground font-medium mt-0.5">{med.frequency}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground font-semibold uppercase tracking-wider text-[10px]">Prescriber</p>
                    <p className="text-foreground font-medium mt-0.5">{med.prescriber}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground font-semibold uppercase tracking-wider text-[10px]">Status</p>
                    <div className="mt-1">
                      <select value={med.status} onChange={e => handleStatusChange(med, e.target.value as MedStatus)}
                        className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border cursor-pointer outline-none ${s.className}`}>
                        <option value="active">ACTIVE</option>
                        <option value="completed">COMPLETED</option>
                        <option value="discontinued">STOPPED</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Schedule + Reminders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card text-card-foreground rounded-2xl border border-border p-6 shadow-sm flex flex-col gap-6 overflow-hidden">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h2 className="font-outfit font-semibold text-lg text-foreground">Weekly Schedule</h2>
            <div className="flex items-center gap-2">
              <button className="p-1.5 hover:bg-muted rounded text-muted-foreground"><ChevronLeft size={18} /></button>
              <span className="font-sans font-bold text-sm text-foreground whitespace-nowrap">Jun 15 – Jun 21</span>
              <button className="p-1.5 hover:bg-muted rounded text-muted-foreground"><ChevronRight size={18} /></button>
            </div>
          </div>
          
          <div className="overflow-x-auto pb-2 scrollbar-none">
            <div className="grid gap-2 min-w-[600px]" style={{ gridTemplateColumns: 'repeat(7, 1fr)' }}>
              {WEEK.map((day, idx) => (
                <div key={day} className="flex flex-col gap-3 items-center">
                  <p className={`text-xs font-bold ${idx === TODAY_IDX ? 'text-teal-500' : 'text-muted-foreground'}`}>{day}</p>
                  <div className="flex items-center justify-center rounded-full w-8 h-8" style={{ backgroundColor: idx === TODAY_IDX ? '#0d9488' : 'transparent' }}>
                    <p className={`text-sm font-semibold ${idx === TODAY_IDX ? 'text-white' : 'text-foreground'}`}>{DATES[idx]}</p>
                  </div>
                  <div className="w-full rounded-xl p-1.5 flex flex-col gap-1.5 bg-muted/20 border border-border/10 min-h-[120px]">
                    {idx === TODAY_IDX && scheduleToday.map((e, j) => (
                      <div key={j} className="rounded-lg p-1.5 bg-teal-500/15 border border-teal-500/20 text-teal-600 dark:text-teal-400">
                        <p className="font-sans font-bold text-[9px] leading-tight">{e.time}</p>
                        <p className="font-sans text-[10px] leading-tight text-foreground truncate mt-0.5">{e.med}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 bg-card text-card-foreground rounded-2xl border border-border p-6 flex flex-col gap-5 shadow-sm">
          <h2 className="font-outfit font-semibold text-lg text-foreground">Reminders</h2>
          <div className="flex flex-col gap-4">
            {([{ k: 'morning' as const, label: 'Morning Meds', time: '08:00 AM' }, { k: 'afternoon' as const, label: 'Afternoon Meds', time: '01:00 PM' }, { k: 'evening' as const, label: 'Evening Meds', time: '08:00 PM' }]).map(({ k, label, time }) => (
              <div key={k} className="flex items-center justify-between">
                <div>
                  <p className="font-sans font-semibold text-sm text-foreground">{label}</p>
                  <p className="font-sans text-xs text-muted-foreground mt-0.5">{time}</p>
                </div>
                <button onClick={() => setReminders(p => ({ ...p, [k]: !p[k] }))}
                  className="flex items-center rounded-full transition-all duration-200"
                  style={{ backgroundColor: reminders[k] ? '#0d9488' : 'var(--border)', width: 40, height: 22, padding: 3, justifyContent: reminders[k] ? 'flex-end' : 'flex-start' }}>
                  <div className="rounded-lg bg-white" style={{ width: 16, height: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }} />
                </button>
              </div>
            ))}
          </div>
          <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border text-sm font-semibold text-teal-600 dark:text-teal-400 bg-card hover:bg-muted transition-colors">
            <Bell size={16} /> Configure Alerts
          </button>
          <div className="pt-4 border-t border-border">
            <p className="font-sans font-semibold text-sm text-foreground mb-3">Summary</p>
            {[
              { l: 'Active medications', v: String(meds.filter(m => m.status === 'active').length), c: '#0d9488' },
              { l: 'Taken today', v: String(meds.filter(m => m.taken_today === true).length), c: '#10b981' },
              { l: 'Missed today', v: String(meds.filter(m => m.taken_today === false).length), c: '#f59e0b' },
            ].map((s, i) => (
              <div key={i} className="flex items-center justify-between py-2.5 border-b border-border last:border-0">
                <p className="font-sans text-xs text-muted-foreground">{s.l}</p>
                <p className="font-sans font-bold text-sm" style={{ color: s.c }}>{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
