import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Clock, MapPin, User, Plus, X, Loader2, Trash2, FileText } from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '../contexts/AuthContext';
import { api } from '../lib/api';
import { careChannel } from '../lib/careChannel';

const C = { border: '#e2e8f0', text: '#0f172a', sub: '#64748b', muted: '#94a3b8', teal: '#0d9488', green: '#10b981' };

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const APPT_TYPES = ['General', 'Cardiology', 'Lab Work', 'Diabetes', 'Follow-up', 'Physical Therapy', 'Dental', 'Other'];
const TYPE_COLORS: Record<string, string> = {
  'Cardiology':       '#ef4444',
  'Lab Work':         '#f59e0b',
  'Diabetes':         '#8b5cf6',
  'Follow-up':        '#0d9488',
  'General':          '#10b981',
  'Physical Therapy': '#6366f1',
  'Dental':           '#ec4899',
  'Other':            '#94a3b8',
};

function colorFor(type: string) {
  return TYPE_COLORS[type] ?? '#94a3b8';
}

// Parse "2026-06-17" → { year, month (0-based), day }
function parseDate(iso: string): { year: number; month: number; day: number } {
  const [y, m, d] = iso.split('-').map(Number);
  return { year: y, month: m - 1, day: d };
}

function formatDateLabel(iso: string): string {
  const { year, month, day } = parseDate(iso);
  return `${MONTHS[month].slice(0, 3)} ${day}, ${year}`;
}

function isUpcoming(iso: string): boolean {
  const { year, month, day } = parseDate(iso);
  const appt = new Date(year, month, day);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return appt >= today;
}

function isToday(iso: string): boolean {
  const today = new Date();
  const { year, month, day } = parseDate(iso);
  return year === today.getFullYear() && month === today.getMonth() && day === today.getDate();
}

// ── Add Appointment Modal ─────────────────────────────────────────────────────
interface AddModalProps {
  patientId: string;
  prefillDate?: string; // "2026-06-17"
  onClose: () => void;
  onAdded: (appt: any) => void;
}

function AddModal({ patientId, prefillDate, onClose, onAdded }: AddModalProps) {
  const [form, setForm] = useState({
    title: '',
    doctor_name: '',
    location: '',
    date: prefillDate ?? new Date().toISOString().slice(0, 10),
    time: '',
    type: 'General',
    notes: '',
  });
  const [saving, setSaving] = useState(false);

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(p => ({ ...p, [k]: e.target.value }));

  const handleSave = async () => {
    if (!form.title.trim()) { toast.error('Title is required'); return; }
    if (!form.date) { toast.error('Date is required'); return; }
    setSaving(true);
    try {
      const { appointment } = await api.createAppointment({
        patient_id: patientId,
        ...form,
        color: colorFor(form.type),
      });
      onAdded(appointment);
      toast.success(`"${form.title}" scheduled`);
      onClose();
    } catch (e: any) {
      toast.error(e.message);
    } finally {
      setSaving(false);
    }
  };

  const inputCls = "w-full px-3 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors";
  const inputSty = { fontFamily: "'Inter',sans-serif" };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card text-card-foreground rounded-2xl shadow-2xl flex flex-col border border-border" style={{ width: 520, maxHeight: '90vh' }}>
        <div className="flex items-center justify-between px-7 py-5 border-b border-border flex-shrink-0">
          <h2 className="font-outfit font-bold text-xl text-foreground">Add Appointment</h2>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-muted transition-colors">
            <X size={20} className="text-muted-foreground" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-7 py-6 flex flex-col gap-4">
          <div>
            <p className="text-xs font-bold mb-1.5 text-muted-foreground">Title *</p>
            <input value={form.title} onChange={set('title')} placeholder="e.g. Cardiology Follow-up"
              className={inputCls} style={inputSty} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-bold mb-1.5 text-muted-foreground">Date *</p>
              <input type="date" value={form.date} onChange={set('date')} className={inputCls} style={inputSty} />
            </div>
            <div>
              <p className="text-xs font-bold mb-1.5 text-muted-foreground">Time</p>
              <input type="time" value={form.time} onChange={set('time')} className={inputCls} style={inputSty} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-bold mb-1.5 text-muted-foreground">Type</p>
              <select value={form.type} onChange={set('type')} className={inputCls} style={inputSty}>
                {APPT_TYPES.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <p className="text-xs font-bold mb-1.5 text-muted-foreground">Doctor / Specialist</p>
              <input value={form.doctor_name} onChange={set('doctor_name')} placeholder="e.g. Dr. Martinez"
                className={inputCls} style={inputSty} />
            </div>
          </div>

          <div>
            <p className="text-xs font-bold mb-1.5 text-muted-foreground">Location</p>
            <input value={form.location} onChange={set('location')} placeholder="e.g. General Hospital, Suite 204"
              className={inputCls} style={inputSty} />
          </div>

          <div>
            <p className="text-xs font-bold mb-1.5 text-muted-foreground">Notes / Instructions</p>
            <textarea value={form.notes} onChange={set('notes')} rows={3}
              placeholder="e.g. Fast from midnight. Bring insurance card."
              className={`${inputCls} resize-none`} style={inputSty} />
          </div>

          {/* Preview pill */}
          <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-muted/20">
            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: colorFor(form.type) }} />
            <p className="font-sans font-semibold text-sm text-foreground">
              {form.title || 'Appointment title'} — {form.date ? formatDateLabel(form.date) : 'pick a date'}
              {form.time ? ` at ${formatTime(form.time)}` : ''}
            </p>
          </div>
        </div>

        <div className="flex gap-3 px-7 py-5 border-t border-border flex-shrink-0">
          <button onClick={onClose} className="flex-1 py-3 rounded-xl border border-border text-sm font-semibold text-muted-foreground hover:bg-muted transition-colors">Cancel</button>
          <button onClick={handleSave} disabled={saving}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-500 hover:opacity-90 disabled:opacity-60 transition-opacity">
            {saving ? <Loader2 size={15} className="animate-spin" /> : <Plus size={15} />}
            {saving ? 'Saving…' : 'Schedule Appointment'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Appointment detail card ───────────────────────────────────────────────────
function ApptCard({ appt, onDelete }: { appt: any; onDelete: (id: string) => void }) {
  const [deleting, setDeleting] = useState(false);
  const color = appt.color ?? colorFor(appt.type ?? 'General');
  const past = !isUpcoming(appt.date);

  const handleDelete = async () => {
    if (!confirm(`Remove "${appt.title}"?`)) return;
    setDeleting(true);
    try {
      // Use timeline event to record deletion
      await api.addTimelineEvent(appt.patient_id, 'appointment', `Appointment "${appt.title}" was removed`);
      onDelete(appt.id);
      toast.success('Appointment removed');
    } catch (e: any) {
      toast.error(e.message);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className={`rounded-xl border border-border bg-card text-card-foreground overflow-hidden transition-all duration-200 hover:shadow ${past ? 'opacity-60' : ''}`}>
      <div className="flex">
        <div className="w-1.5 flex-shrink-0" style={{ backgroundColor: color }} />
        <div className="p-4 flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <p className="font-sans font-bold text-sm text-foreground">{appt.title}</p>
              <span className="inline-block mt-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold"
                style={{ backgroundColor: `${color}18`, color }}>
                {appt.type ?? 'General'}
              </span>
            </div>
            {past && (
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-muted text-muted-foreground flex-shrink-0">Past</span>
            )}
            {isToday(appt.date) && (
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-500/10 text-red-500 flex-shrink-0">Today</span>
            )}
          </div>

          <div className="flex flex-col gap-1.5 mt-2">
            <span className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock size={12} />
              <span>
                {formatDateLabel(appt.date)}{appt.time ? ` · ${formatTime(appt.time)}` : ''}
              </span>
            </span>
            {appt.doctor_name && (
              <span className="flex items-center gap-2 text-xs text-muted-foreground">
                <User size={12} />
                <span>{appt.doctor_name}</span>
              </span>
            )}
            {appt.location && (
              <span className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin size={12} />
                <span>{appt.location}</span>
              </span>
            )}
          </div>

          {appt.notes && (
            <div className="mt-3 p-2.5 rounded-xl flex items-start gap-2 bg-muted/20 border border-border/10">
              <FileText size={12} className="text-muted-foreground/60 flex-shrink-0 mt-0.5" />
              <p className="font-sans text-xs text-muted-foreground leading-relaxed">{appt.notes}</p>
            </div>
          )}
        </div>

        <div className="flex items-start p-3">
          <button onClick={handleDelete} disabled={deleting}
            className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted-foreground hover:text-red-500 transition-colors disabled:opacity-40">
            {deleting ? <Loader2 size={14} className="animate-spin" /> : <Trash2 size={14} />}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function formatTime(t: string): string {
  if (!t) return '';
  // Convert "14:00" → "2:00 PM"
  if (t.includes(':') && !t.includes('M')) {
    const [h, m] = t.split(':').map(Number);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const hour = h % 12 || 12;
    return `${hour}:${String(m).padStart(2, '0')} ${ampm}`;
  }
  return t;
}

// ── Main Screen ───────────────────────────────────────────────────────────────
export function CalendarScreen() {
  const { patient } = useAuth();
  const today = new Date();

  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState<number | null>(today.getDate());
  const [showModal, setShowModal] = useState(false);

  const patientId = patient?.id ?? '';

  // ── Fetch appointments ────────────────────────────────────────────────────
  const load = useCallback(async () => {
    if (!patientId) return;
    try {
      const { appointments: data } = await api.getAppointments(patientId);
      setAppointments(data ?? []);
    } catch (e: any) {
      toast.error(e.message);
    }
  }, [patientId]);

  useEffect(() => {
    load().finally(() => setLoading(false));
  }, [load]);

  // ── Realtime subscription ─────────────────────────────────────────────────
  useEffect(() => {
    if (!patientId) return;
    return careChannel.subscribe(patientId, () => load());
  }, [patientId, load]);

  // ── Delete locally + broadcast ─────────────────────────────────────────────
  const handleDelete = (id: string) => {
    setAppointments(p => p.filter(a => a.id !== id));
    careChannel.broadcast(patientId);
  };

  // ── Add locally + broadcast ────────────────────────────────────────────────
  const handleAdded = (appt: any) => {
    setAppointments(p => [...p, appt]);
    // Jump calendar to the new appointment's month
    const { year: y, month: m, day: d } = parseDate(appt.date);
    setYear(y); setMonth(m); setSelectedDay(d);
    careChannel.broadcast(patientId);
  };

  // ── Calendar helpers ───────────────────────────────────────────────────────
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Days in current view that have appointments
  const apptDaySet = new Set(
    appointments
      .filter(a => {
        const p = parseDate(a.date);
        return p.year === year && p.month === month;
      })
      .map(a => parseDate(a.date).day)
  );

  // Appointments for selected day
  const selectedAppts = selectedDay
    ? appointments.filter(a => {
        const p = parseDate(a.date);
        return p.year === year && p.month === month && p.day === selectedDay;
      })
    : [];

  // Upcoming appointments (today or future), sorted
  const upcoming = appointments
    .filter(a => isUpcoming(a.date))
    .sort((a, b) => a.date.localeCompare(b.date));

  const prevMonth = () => { if (month === 0) { setMonth(11); setYear(y => y - 1); } else setMonth(m => m - 1); };
  const nextMonth = () => { if (month === 11) { setMonth(0); setYear(y => y + 1); } else setMonth(m => m + 1); };
  const goToday = () => { setMonth(today.getMonth()); setYear(today.getFullYear()); setSelectedDay(today.getDate()); };

  const isCurrentDay = (day: number) =>
    day === today.getDate() && month === today.getMonth() && year === today.getFullYear();

  // Date string for prefilling modal ("2026-06-25")
  const prefillDate = selectedDay
    ? `${year}-${String(month + 1).padStart(2, '0')}-${String(selectedDay).padStart(2, '0')}`
    : undefined;

  return (
    <div className="p-10 flex flex-col gap-8 min-h-full bg-background text-foreground transition-colors duration-200">
      {showModal && (
        <AddModal
          patientId={patientId}
          prefillDate={prefillDate}
          onClose={() => setShowModal(false)}
          onAdded={handleAdded}
        />
      )}

      {/* ── Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-sans font-bold text-2xl md:text-3xl text-foreground">Calendar</h1>
          <p className="font-sans text-sm text-muted-foreground mt-1">
            {loading ? 'Loading…' : `${upcoming.length} upcoming appointment${upcoming.length !== 1 ? 's' : ''} for ${patient?.name ?? '…'}`}
          </p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <button onClick={goToday}
            className="px-4 py-2.5 rounded-xl border border-border text-sm font-semibold text-muted-foreground hover:bg-muted transition-colors bg-card">
            Today
          </button>
          <button onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-emerald-500 hover:opacity-90 transition-opacity whitespace-nowrap">
            <Plus size={16} /> Add Appointment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

        {/* ── Calendar grid ── */}
        <div className="lg:col-span-3 bg-card text-card-foreground rounded-2xl border border-border p-6 shadow-sm">
          {/* Month nav */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-outfit font-bold text-xl text-foreground">
              {MONTHS[month]} {year}
            </h2>
            <div className="flex gap-2">
              <button onClick={prevMonth} className="p-2 rounded-xl border border-border hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                <ChevronLeft size={18} />
              </button>
              <button onClick={nextMonth} className="p-2 rounded-xl border border-border hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 mb-2">
            {DAYS.map(d => (
              <div key={d} className="text-center py-1">
                <span className="font-sans font-bold text-xs text-muted-foreground">{d}</span>
              </div>
            ))}
          </div>

          {/* Days grid */}
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 size={28} className="animate-spin text-muted-foreground" />
            </div>
          ) : (
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDay }).map((_, i) => <div key={`e${i}`} />)}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const sel = selectedDay === day;
                const cur = isCurrentDay(day);
                const hasAppt = apptDaySet.has(day);

                return (
                  <button key={day}
                    onClick={() => setSelectedDay(sel ? null : day)}
                    className={`flex flex-col items-center py-2 rounded-xl transition-all hover:bg-muted ${
                      sel ? 'bg-teal-600 text-white font-bold' : cur ? 'bg-secondary text-teal-600 dark:text-teal-400 font-bold' : 'text-foreground'
                    }`}>
                    <span className="font-sans text-sm">
                      {day}
                    </span>
                    {hasAppt && (
                      <div className={`w-1.5 h-1.5 rounded-full mt-0.5 animate-pulse ${
                        sel ? 'bg-white/80' : 'bg-red-500'
                      }`} />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* Type legend */}
          <div className="flex items-center gap-3 mt-5 pt-5 border-t border-border flex-wrap">
            {APPT_TYPES.filter(t => t !== 'Other').map(t => (
              <div key={t} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colorFor(t) }} />
                <span className="font-sans text-xs text-muted-foreground">{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right panel ── */}
        <div className="lg:col-span-2 flex flex-col gap-5">

          {/* Selected day details */}
          {selectedDay && (
            <div className="bg-card text-card-foreground rounded-2xl border border-border p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <p className="font-outfit font-semibold text-base text-foreground">
                  {MONTHS[month]} {selectedDay}{isCurrentDay(selectedDay) ? ' — Today' : ''}
                </p>
                <button
                  onClick={() => setShowModal(true)}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-emerald-500 hover:opacity-90 transition-opacity">
                  <Plus size={12} /> Add
                </button>
              </div>

              {selectedAppts.length === 0 ? (
                <div className="flex flex-col items-center gap-2 py-6">
                  <p className="font-sans text-xs text-muted-foreground">No appointments on this day.</p>
                  <button onClick={() => setShowModal(true)}
                    className="text-xs font-semibold text-teal-500 hover:underline">
                    + Schedule one
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {selectedAppts.map(a => (
                    <ApptCard key={a.id} appt={a} onDelete={handleDelete} />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Upcoming list */}
          <div className="bg-card text-card-foreground rounded-2xl border border-border p-5 flex-1 overflow-hidden shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <p className="font-outfit font-semibold text-base text-foreground">Upcoming</p>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-500/10 text-teal-600 dark:text-teal-400">
                {upcoming.length}
              </span>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 size={20} className="animate-spin text-muted-foreground" />
              </div>
            ) : upcoming.length === 0 ? (
              <div className="flex flex-col items-center gap-3 py-10">
                <p className="font-sans text-sm text-muted-foreground">No upcoming appointments.</p>
                <button onClick={() => setShowModal(true)}
                  className="text-sm font-semibold text-teal-500 hover:underline">
                  Schedule the first one →
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3 overflow-y-auto" style={{ maxHeight: 400 }}>
                {upcoming.map(a => {
                  const color = a.color ?? colorFor(a.type ?? 'General');
                  const { year: ay, month: am, day: ad } = parseDate(a.date);
                  return (
                    <button key={a.id}
                      onClick={() => { setYear(ay); setMonth(am); setSelectedDay(ad); }}
                      className="w-full rounded-xl border border-border bg-card overflow-hidden text-left hover:shadow transition-shadow">
                      <div className="flex">
                        <div className="w-1.5 flex-shrink-0" style={{ backgroundColor: color }} />
                        <div className="px-3 py-3 flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <p className="font-sans font-semibold text-sm text-foreground truncate">
                              {a.title}
                            </p>
                            {isToday(a.date) && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-500/10 text-red-500 flex-shrink-0">Today</span>
                            )}
                          </div>
                          <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                            <span className="font-sans text-xs text-muted-foreground">
                              {formatDateLabel(a.date)}
                            </span>
                            {a.time && (
                              <span className="flex items-center gap-1 text-xs text-muted-foreground/60">
                                <Clock size={10} />
                                <span>{formatTime(a.time)}</span>
                              </span>
                            )}
                          </div>
                          {a.doctor_name && (
                            <p className="font-sans text-xs text-muted-foreground mt-1">
                              {a.doctor_name}
                            </p>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
