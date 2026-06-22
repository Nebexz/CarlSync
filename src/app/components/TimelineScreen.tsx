import { useState, useEffect } from 'react';
import { Pill, CheckSquare, Calendar, Activity, FileText, MessageSquare, Heart, Loader2, Send } from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '../contexts/AuthContext';
import { api } from '../lib/api';
import { careChannel } from '../lib/careChannel';

const C = { border: '#e2e8f0', text: '#0f172a', sub: '#64748b', muted: '#94a3b8', teal: '#0d9488', green: '#10b981' };

type EvType = 'medication' | 'task' | 'appointment' | 'vitals' | 'note' | 'wellbeing';

interface TEvent { id: string; type: EvType; description: string; time?: string; actor_name: string; created_at: string; }

const TYPE_CFG: Record<string, { icon: React.ReactNode; badgeClass: string; iconClass: string }> = {
  medication:  { icon: <Pill size={14} />,         badgeClass: 'bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400 border border-teal-200 dark:border-teal-900/50', iconClass: 'bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400' },
  task:        { icon: <CheckSquare size={14} />,   badgeClass: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/50', iconClass: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400' },
  appointment: { icon: <Calendar size={14} />,      badgeClass: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200 dark:border-amber-900/50', iconClass: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400' },
  vitals:      { icon: <Activity size={14} />,      badgeClass: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900/50', iconClass: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400' },
  note:        { icon: <FileText size={14} />,      badgeClass: 'bg-slate-50 text-slate-600 dark:bg-slate-800/40 dark:text-slate-400 border border-slate-200 dark:border-slate-800/50', iconClass: 'bg-slate-50 text-slate-600 dark:bg-slate-800/40 dark:text-slate-400' },
  wellbeing:   { icon: <Heart size={14} />,         badgeClass: 'bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400 border border-pink-200 dark:border-pink-900/50', iconClass: 'bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400' },
};

function relativeTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return 'Just now';
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function initials(name: string): string {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
}

function colorForActor(name: string): string {
  const colors = [C.green, '#6366f1', '#f59e0b', '#ec4899', C.teal, '#ef4444'];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
}

export function TimelineScreen() {
  const { patient, user } = useAuth();
  const [events, setEvents] = useState<TEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState('');
  const [posting, setPosting] = useState(false);
  const [filterType, setFilterType] = useState<string>('all');
  const [realtimeLabel, setRealtimeLabel] = useState('');

  const patientId = patient?.id ?? '';
  const userName = user?.user_metadata?.name ?? 'Caregiver';

  const load = () =>
    api.getTimeline(patientId).then(r => setEvents(r.events ?? [])).catch(() => {});

  useEffect(() => {
    if (!patientId) return;
    load().finally(() => setLoading(false));
  }, [patientId]);

  // Realtime — subscribe and show live notification label
  useEffect(() => {
    if (!patientId) return;
    return careChannel.subscribe(patientId, (payload) => {
      load();
      const msg = payload.payload?.msg;
      if (msg) {
        setRealtimeLabel(msg);
        toast.success(msg, { icon: '👨‍👩‍👧', duration: 4000 });
        setTimeout(() => setRealtimeLabel(''), 5000);
      }
    });
  }, [patientId]);

  const postNote = async () => {
    if (!note.trim()) return;
    setPosting(true);
    try {
      await api.addTimelineEvent(patientId, 'note', `${userName}: ${note.trim()}`);
      setNote('');
      careChannel.broadcast(patientId, { msg: `${userName.split(' ')[0]} posted a family update` });
      load();
      toast.success('Update shared with family');
    } catch (e: any) { toast.error(e.message); } finally { setPosting(false); }
  };

  const FILTER_TYPES = ['all', 'medication', 'task', 'vitals', 'appointment', 'note', 'wellbeing'];
  const shown = filterType === 'all' ? events : events.filter(e => e.type === filterType);

  // Group by day
  function dayLabel(iso: string): string {
    const d = new Date(iso);
    const today = new Date();
    const yesterday = new Date(today); yesterday.setDate(today.getDate() - 1);
    if (d.toDateString() === today.toDateString()) return 'Today';
    if (d.toDateString() === yesterday.toDateString()) return 'Yesterday';
    return d.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
  }

  const groups: { date: string; evs: TEvent[] }[] = [];
  shown.forEach(ev => {
    const label = dayLabel(ev.created_at);
    const g = groups.find(g => g.date === label);
    if (g) g.evs.push(ev);
    else groups.push({ date: label, evs: [ev] });
  });

  return (
    <div className="p-10 flex flex-col gap-8 min-h-full bg-background text-foreground transition-colors duration-200">

      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-outfit font-bold text-2xl md:text-3xl text-foreground">Family Timeline</h1>
          <p className="font-sans text-sm text-muted-foreground mt-1">
            All care activity for {patient?.name ?? '…'}, shared with family
            {realtimeLabel && <span className="ml-3 text-xs font-semibold text-emerald-500">🟢 {realtimeLabel}</span>}
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {FILTER_TYPES.map(f => {
            const active = filterType === f;
            return (
              <button key={f} onClick={() => setFilterType(f)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors capitalize font-sans font-medium border ${
                  active
                    ? 'bg-teal-600 text-white border-teal-600'
                    : 'bg-card text-muted-foreground border-border hover:bg-muted hover:text-foreground'
                }`}>
                {f === 'all' ? 'All' : f}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Feed */}
        <div className="lg:col-span-3 flex flex-col gap-8">
          {loading ? (
            <div className="flex items-center justify-center py-20"><Loader2 size={32} className="animate-spin text-muted-foreground" /></div>
          ) : groups.length === 0 ? (
            <div className="flex flex-col items-center gap-2 py-20 text-center">
              <p className="font-sans text-base text-muted-foreground">No activity yet.</p>
              <p className="font-sans text-sm text-muted-foreground">Start logging medications and tasks to see updates here.</p>
            </div>
          ) : (
            groups.map(({ date, evs }) => (
              <div key={date}>
                {/* Date separator */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px flex-1 bg-border" />
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold font-sans border ${
                    date === 'Today'
                      ? 'bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-900/50'
                      : 'bg-card text-muted-foreground border-border'
                  }`}>
                    {date}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <div className="flex flex-col gap-4">
                  {evs.map((ev, i) => {
                    const tc = TYPE_CFG[ev.type] ?? TYPE_CFG.note;
                    const actorColor = colorForActor(ev.actor_name);
                    return (
                      <div key={ev.id} className="flex gap-4">
                        <div className="flex flex-col items-center pt-0.5">
                          <div className={`flex items-center justify-center rounded-full flex-shrink-0 w-9 h-9 ${tc.iconClass}`}>
                            {tc.icon}
                          </div>
                          {i < evs.length - 1 && <div className="flex-1 w-px mt-2 mb-2 bg-border min-h-[16px]" />}
                        </div>
                        <div className="flex-1 bg-card rounded-xl border border-border p-4 hover:shadow-sm transition-shadow mb-1">
                          <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                            <div className="flex items-center gap-2">
                              <div className="flex items-center justify-center rounded-full flex-shrink-0 w-7 h-7"
                                style={{ backgroundColor: actorColor }}>
                                <span className="text-white text-[10px] font-bold">{initials(ev.actor_name)}</span>
                              </div>
                              <span className="font-sans font-semibold text-sm text-foreground">{ev.actor_name}</span>
                              <span className="font-sans text-xs text-muted-foreground">{relativeTime(ev.created_at)}</span>
                            </div>
                            <span className={`px-2 py-0.5 rounded text-xs font-medium capitalize font-sans ${tc.badgeClass}`}>
                              {ev.type}
                            </span>
                          </div>
                          <p className="font-sans text-sm text-foreground leading-relaxed">{ev.description}</p>
                          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
                            <MessageSquare size={12} className="text-muted-foreground" />
                            <span className="font-sans text-xs text-muted-foreground">Add a comment…</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 flex flex-col gap-5">
          {/* Realtime indicator */}
          <div className="bg-card text-card-foreground rounded-2xl border border-border p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full animate-pulse bg-emerald-500" />
              <p className="font-sans font-semibold text-sm text-foreground">Live Family Sync</p>
            </div>
            <p className="font-sans text-xs text-muted-foreground leading-relaxed">
              All family members see updates instantly. When Sarah marks a medication, James sees it in real time.
            </p>
          </div>

          {/* Summary */}
          <div className="bg-card text-card-foreground rounded-2xl border border-border p-5 shadow-sm">
            <p className="font-outfit font-semibold text-base text-foreground mb-4">Activity Summary</p>
            {(['medication', 'task', 'vitals', 'note', 'appointment'] as const).map((type) => {
              const count = events.filter(e => e.type === type).length;
              const tc = TYPE_CFG[type];
              return (
                <div key={type} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div className="flex items-center gap-2">
                    <span className={
                      type === 'medication' ? 'text-teal-600 dark:text-teal-400' :
                      type === 'task' ? 'text-emerald-600 dark:text-emerald-400' :
                      type === 'appointment' ? 'text-amber-600 dark:text-amber-400' :
                      type === 'vitals' ? 'text-indigo-600 dark:text-indigo-400' :
                      'text-slate-600 dark:text-slate-400'
                    }>{tc.icon}</span>
                    <p className="font-sans text-xs text-muted-foreground capitalize">{type}s</p>
                  </div>
                  <p className={`font-sans font-bold text-sm ${
                    type === 'medication' ? 'text-teal-600 dark:text-teal-400' :
                    type === 'task' ? 'text-emerald-600 dark:text-emerald-400' :
                    type === 'appointment' ? 'text-amber-600 dark:text-amber-400' :
                    type === 'vitals' ? 'text-indigo-600 dark:text-indigo-400' :
                    'text-slate-600 dark:text-slate-400'
                  }`}>{count}</p>
                </div>
              );
            })}
          </div>

          {/* Post family update */}
          <div className="bg-card text-card-foreground rounded-2xl border border-border p-5 shadow-sm">
            <p className="font-outfit font-semibold text-sm text-foreground mb-3">Post Family Update</p>
            <textarea
              value={note}
              onChange={e => setNote(e.target.value)}
              placeholder={`Share a note about ${patient?.name?.split(' ')[0] ?? 'the patient'} with the family…`}
              rows={3}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm outline-none resize-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors font-sans"
            />
            <button
              onClick={postNote}
              disabled={posting || !note.trim()}
              className="mt-3 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-white bg-teal-600 hover:opacity-90 disabled:opacity-60 transition-opacity font-sans"
            >
              {posting ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
              {posting ? 'Sharing…' : 'Share with Family'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
