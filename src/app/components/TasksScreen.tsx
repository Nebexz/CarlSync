import { useState, useEffect } from 'react';
import { Plus, Filter, X, Clock, AlertCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '../contexts/AuthContext';
import { api } from '../lib/api';
import { careChannel } from '../lib/careChannel';

const C = { border: '#e2e8f0', text: '#0f172a', sub: '#64748b', muted: '#94a3b8', teal: '#0d9488', green: '#10b981' };

type Priority = 'high' | 'medium' | 'low';
type Status = 'pending' | 'in-progress' | 'completed';
interface Task { id: string; patient_id: string; title: string; description: string; priority: Priority; status: Status; assigned_to: string; due_date: string; created_at?: string; }

const PRI = { 
  high:   { className: 'bg-red-500/15 text-red-600 dark:text-red-400', label: 'High' }, 
  medium: { className: 'bg-amber-500/15 text-amber-600 dark:text-amber-400', label: 'Medium' }, 
  low:    { className: 'bg-sky-500/15 text-sky-600 dark:text-sky-400', label: 'Low' } 
};
const COLS: { id: Status; label: string; dot: string; tagClassName: string }[] = [
  { id: 'pending', label: 'Pending', dot: '#ef4444', tagClassName: 'bg-red-500/15 text-red-500' },
  { id: 'in-progress', label: 'In Progress', dot: '#f59e0b', tagClassName: 'bg-amber-500/15 text-amber-500' },
  { id: 'completed', label: 'Completed', dot: '#10b981', tagClassName: 'bg-emerald-500/15 text-emerald-500' },
];
const TEAM = [{ n: 'Sarah Chen', i: 'SC', c: '#10b981' }, { n: 'James Chen', i: 'JC', c: '#6366f1' }, { n: 'Emily Chen', i: 'EC', c: '#f59e0b' }];

function getAssigneeStyle(name: string) {
  return TEAM.find(t => t.n === name) ?? { i: name.slice(0, 2).toUpperCase(), c: C.teal };
}

function AddModal({ patientId, onClose, onAdd }: { patientId: string; onClose: () => void; onAdd: (t: Task) => void }) {
  const [f, setF] = useState({ title: '', description: '', priority: 'medium' as Priority, assigned_to: TEAM[0].n, due_date: '' });
  const [saving, setSaving] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.title) return;
    setSaving(true);
    try {
      const { task } = await api.createTask({ patient_id: patientId, ...f, status: 'pending' as Status });
      onAdd(task as Task);
      toast.success(`Task "${f.title}" created`);
      onClose();
    } catch (e: any) { toast.error(e.message); } finally { setSaving(false); }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card text-card-foreground rounded-2xl p-8 shadow-2xl border border-border" style={{ width: 460 }}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-outfit font-bold text-xl text-foreground">Add New Task</h2>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded text-muted-foreground"><X size={20} /></button>
        </div>
        <form onSubmit={submit} className="flex flex-col gap-4">
          <div>
            <p className="text-xs font-bold mb-1.5 text-muted-foreground">Task Title *</p>
            <input required placeholder="e.g. Pick up prescription" value={f.title}
              onChange={e => setF(p => ({ ...p, title: e.target.value }))}
              className="w-full px-3 py-3 rounded-lg border text-sm outline-none bg-background text-foreground border-border focus:border-emerald-500 transition-colors" />
          </div>
          <div>
            <p className="text-xs font-bold mb-1.5 text-muted-foreground">Description</p>
            <textarea value={f.description} onChange={e => setF(p => ({ ...p, description: e.target.value }))} rows={2} placeholder="Add details…"
              className="w-full px-3 py-3 rounded-lg border text-sm outline-none resize-none bg-background text-foreground border-border focus:border-emerald-500 transition-colors" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-bold mb-1.5 text-muted-foreground">Priority</p>
              <select value={f.priority} onChange={e => setF(p => ({ ...p, priority: e.target.value as Priority }))}
                className="w-full px-3 py-3 rounded-lg border text-sm outline-none bg-background text-foreground border-border focus:border-emerald-500 transition-colors">
                <option value="high">High</option><option value="medium">Medium</option><option value="low">Low</option>
              </select>
            </div>
            <div>
              <p className="text-xs font-bold mb-1.5 text-muted-foreground">Assign To</p>
              <select value={f.assigned_to} onChange={e => setF(p => ({ ...p, assigned_to: e.target.value }))}
                className="w-full px-3 py-3 rounded-lg border text-sm outline-none bg-background text-foreground border-border focus:border-emerald-500 transition-colors">
                {TEAM.map(t => <option key={t.n}>{t.n}</option>)}
              </select>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold mb-1.5 text-muted-foreground">Due Date</p>
            <input placeholder="e.g. Jun 20" value={f.due_date} onChange={e => setF(p => ({ ...p, due_date: e.target.value }))}
              className="w-full px-3 py-3 rounded-lg border text-sm outline-none bg-background text-foreground border-border focus:border-emerald-500 transition-colors" />
          </div>
          <div className="flex gap-3 mt-2">
            <button type="button" onClick={onClose} className="flex-1 py-3 rounded-xl border border-border text-sm font-semibold text-muted-foreground hover:bg-muted transition-colors">Cancel</button>
            <button type="submit" disabled={saving} className="flex-1 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-500 hover:opacity-90 disabled:opacity-60 transition-opacity">
              {saving ? 'Creating…' : 'Create Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function TasksScreen() {
  const { patient, user } = useAuth();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState<Priority | 'all'>('all');

  const patientId = patient?.id ?? '';

  useEffect(() => {
    if (!patientId) return;
    api.getTasks(patientId)
      .then(r => setTasks(r.tasks ?? []))
      .catch(e => toast.error(e.message))
      .finally(() => setLoading(false));
  }, [patientId]);

  // Realtime
  useEffect(() => {
    if (!patientId) return;
    return careChannel.subscribe(patientId, () => {
      api.getTasks(patientId).then(r => setTasks(r.tasks ?? [])).catch(() => {});
    });
  }, [patientId]);

  const advance = async (task: Task) => {
    const next: Status = task.status === 'pending' ? 'in-progress' : 'completed';
    try {
      await api.updateTask(task.id, { patient_id: patientId, status: next });
      setTasks(p => p.map(t => t.id === task.id ? { ...t, status: next } : t));
      // Broadcast so family sees live update
      careChannel.broadcast(patientId);
      if (next === 'completed') toast.success(`"${task.title}" completed ✓`);
    } catch (e: any) { toast.error(e.message); }
  };
  const shown = filter === 'all' ? tasks : tasks.filter(t => t.priority === filter);

  return (
    <div className="p-10 flex flex-col gap-8 min-h-full bg-background text-foreground transition-colors duration-200">
      {showModal && <AddModal patientId={patientId} onClose={() => setShowModal(false)} onAdd={t => setTasks(p => [...p, t])} />}

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-sans font-bold text-2xl md:text-3xl text-foreground">Task Manager</h1>
          <p className="font-sans text-sm text-muted-foreground mt-1">
            {tasks.filter(t => t.status !== 'completed').length} remaining · {tasks.filter(t => t.status === 'completed').length} completed
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-1.5 bg-card border border-border rounded-xl px-2 py-1 shadow-sm overflow-x-auto w-full sm:w-auto justify-between sm:justify-start">
            <Filter size={13} className="text-muted-foreground mr-1 flex-shrink-0" />
            {(['all', 'high', 'medium', 'low'] as const).map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all duration-150 whitespace-nowrap ${
                  filter === f 
                    ? 'bg-teal-500 text-white shadow-sm' 
                    : 'text-muted-foreground hover:bg-muted'
                }`}>
                {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
          <button onClick={() => setShowModal(true)} className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-emerald-500 hover:opacity-90 transition-opacity whitespace-nowrap w-full sm:w-auto">
            <Plus size={16} /> Add Task
          </button>
        </div>
      </div>

      {/* Team strip */}
      <div className="flex items-center flex-wrap gap-4 p-4 bg-card text-card-foreground rounded-2xl border border-border shadow-sm">
        <span className="font-sans font-bold text-xs text-muted-foreground uppercase tracking-wider">Care team:</span>
        <div className="flex items-center gap-4 flex-wrap">
          {TEAM.map(m => (
            <div key={m.n} className="flex items-center gap-2">
              <div className="flex items-center justify-center rounded-full text-white w-8 h-8 font-bold text-xs shadow-inner shadow-black/10" style={{ backgroundColor: m.c }}>
                <span>{m.i}</span>
              </div>
              <span className="font-sans font-semibold text-sm text-foreground">{m.n.split(' ')[0]}</span>
            </div>
          ))}
        </div>
        <span className="font-sans text-xs text-muted-foreground/60 sm:ml-auto flex items-center gap-1.5 w-full sm:w-auto mt-2 sm:mt-0">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live sync active
        </span>
      </div>

      {/* Kanban */}
      {loading ? (
        <div className="flex items-center justify-center py-20 bg-background"><Loader2 size={32} className="animate-spin text-muted-foreground" /></div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {COLS.map(col => {
            const colTasks = shown.filter(t => t.status === col.id);
            return (
              <div key={col.id} className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: col.dot }} />
                  <span className="font-outfit font-bold text-sm text-foreground">{col.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${col.tagClassName}`}>{colTasks.length}</span>
                </div>
                <div className="flex flex-col gap-3">
                  {colTasks.map(task => {
                    const p = PRI[task.priority];
                    const assignee = getAssigneeStyle(task.assigned_to);
                    return (
                      <div key={task.id} className="bg-card text-card-foreground rounded-xl border border-border p-4 flex flex-col gap-3 shadow-sm hover:shadow-md hover:border-emerald-500/20 transition-all duration-200">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className={`inline-block px-2.5 py-0.5 rounded-lg text-[10px] font-bold mb-2 border border-border/10 ${p.className}`}>{p.label}</span>
                            <p className="font-sans font-semibold text-sm text-foreground leading-snug">{task.title}</p>
                          </div>
                          {task.priority === 'high' && task.status !== 'completed' && <AlertCircle size={15} className="text-red-500 flex-shrink-0 mt-0.5" />}
                        </div>
                        {task.description && <p className="font-sans text-xs text-muted-foreground leading-relaxed">{task.description}</p>}
                        <div className="flex items-center justify-between pt-3 border-t border-border/60">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center justify-center rounded-full text-white w-6 h-6 font-bold text-[10px]" style={{ backgroundColor: assignee.c }}>
                              <span>{assignee.i}</span>
                            </div>
                            <span className="font-sans text-xs text-muted-foreground">{task.assigned_to?.split(' ')[0]}</span>
                          </div>
                          {task.due_date && (
                            <div className="flex items-center gap-1 text-muted-foreground/60">
                              <Clock size={11} />
                              <span className="font-sans text-xs">{task.due_date}</span>
                            </div>
                          )}
                        </div>
                        {task.status !== 'completed' ? (
                          <button onClick={() => advance(task)} 
                            className={`w-full py-2 rounded-xl text-sm font-semibold transition-colors ${
                              task.status === 'pending' 
                                ? 'bg-teal-500/10 hover:bg-teal-500 hover:text-white text-teal-600 dark:text-teal-400' 
                                : 'bg-emerald-500/10 hover:bg-emerald-500 hover:text-white text-emerald-600 dark:text-emerald-400'
                            }`}>
                            {task.status === 'pending' ? 'Start Task' : 'Mark Complete'}
                          </button>
                        ) : (
                          <div className="w-full py-2 rounded-xl text-sm font-bold text-center bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/10">✓ Completed</div>
                        )}
                      </div>
                    );
                  })}
                  {colTasks.length === 0 && (
                    <div className="rounded-xl border-2 border-dashed border-border flex items-center justify-center py-10 bg-muted/5">
                      <p className="font-sans text-xs text-muted-foreground">No tasks here</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
