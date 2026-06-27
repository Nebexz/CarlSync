import { useState } from 'react';
import { Home, User, Pill, CheckSquare, Calendar, Activity, AlertTriangle, Settings, Heart, LogOut, Sun, Moon, X, ChevronDown, Plus, Link as LinkIcon, Trash2, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import type { Screen } from '../App';
import { supabase } from '../lib/supabase';
import { api } from '../lib/api';
import { toast } from 'sonner';
import type { Patient } from '../contexts/AuthContext';

const NAV_ITEMS: { id: Screen; label: string; icon: React.ReactNode }[] = [
  { id: 'home',      label: 'Home',            icon: <Home size={18} /> },
  { id: 'profile',   label: 'Patient Profile',  icon: <User size={18} /> },
  { id: 'medication',label: 'Medication',        icon: <Pill size={18} /> },
  { id: 'tasks',     label: 'Tasks',             icon: <CheckSquare size={18} /> },
  { id: 'calendar',  label: 'Calendar',          icon: <Calendar size={18} /> },
  { id: 'timeline',  label: 'Timeline',          icon: <Activity size={18} /> },
  { id: 'emergency', label: 'Emergency',         icon: <AlertTriangle size={18} /> },
  { id: 'settings',  label: 'Settings',          icon: <Settings size={18} /> },
];

interface Props {
  activeScreen: Screen;
  onNavigate: (s: Screen) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onClose?: () => void;
}

export function Sidebar({ activeScreen, onNavigate, theme, onToggleTheme, onClose }: Props) {
  const { user, patient, patients, signOut, switchPatient, leavePatient, setPatient } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [inviteCode, setInviteCode] = useState('');
  const [joining, setJoining] = useState(false);
  const [joinError, setJoinError] = useState('');

  const displayName = user?.user_metadata?.name ?? user?.email ?? 'Caregiver';
  const initials = displayName.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase();

  const handleJoinCircle = async () => {
    setJoinError('');
    const code = inviteCode.trim();
    if (!code || !user) {
      setJoinError('Invite code is required');
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
      setJoinModalOpen(false);
      setInviteCode('');
      toast.success(`Successfully joined care circle for ${resolvedPatient.name}!`);
    } catch (e: any) {
      setJoinError(e.message || 'Failed to join care circle');
    } finally {
      setJoining(false);
    }
  };

  return (
    <div className="flex flex-col h-full px-3.5 py-6 gap-6 flex-shrink-0 bg-sidebar text-sidebar-foreground border-r border-sidebar-border w-60 transition-colors duration-200">
      {/* Logo */}
      <div className="flex items-center justify-between pl-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-lg bg-emerald-500 shadow-md shadow-emerald-500/20" style={{ width: 32, height: 32 }}>
            <Heart size={16} color="white" fill="white" />
          </div>
          <span className="font-outfit font-bold text-xl tracking-tight text-foreground">
            CareSync
          </span>
        </div>
        {onClose && (
          <button onClick={onClose} className="lg:hidden p-1.5 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground/60 hover:text-sidebar-foreground transition-colors" aria-label="Close menu">
            <X size={18} />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-0.5">
        {NAV_ITEMS.map(({ id, label, icon }) => {
          const active = activeScreen === id;
          return (
            <button key={id} onClick={() => { onNavigate(id); onClose?.(); }}
              className={`flex items-center gap-2.5 h-9 px-2.5 rounded-lg w-full text-left transition-all duration-200 ${
                active 
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground font-semibold shadow-sm' 
                  : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/40 hover:text-sidebar-foreground'
              }`}>
              <span className={`flex-shrink-0 flex items-center transition-transform duration-200 ${active ? 'scale-105 text-emerald-500' : ''}`}>
                {icon}
              </span>
              <span className="text-sm font-medium">{label}</span>
            </button>
          );
        })}
      </nav>

      {/* User footer */}
      <div className="mt-auto flex flex-col gap-3">
        {/* Patient name indicator & Switcher */}
        {patient && (
          <div className="relative mx-1">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-sidebar-accent/50 border border-sidebar-border/20 text-left hover:bg-sidebar-accent/80 transition-colors cursor-pointer group"
            >
              <div className="min-w-0 flex-1">
                <p className="text-[9px] text-sidebar-foreground/50 font-bold uppercase tracking-wider">Caring for</p>
                <p className="text-xs font-bold text-foreground truncate mt-0.5">{patient.name}</p>
              </div>
              <ChevronDown size={14} className={`text-sidebar-foreground/50 group-hover:text-sidebar-foreground transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
            </button>

            {showDropdown && (
              <>
                {/* Backdrop to close dropdown */}
                <div className="fixed inset-0 z-30" onClick={() => setShowDropdown(false)} />
                
                {/* Dropdown Menu */}
                <div className="absolute left-0 right-0 bottom-full mb-2 z-40 bg-card text-card-foreground border border-border rounded-xl shadow-xl overflow-hidden py-1 animate-in fade-in slide-in-from-bottom-2 duration-150">
                  <div className="px-3 py-1.5 border-b border-border bg-muted/20">
                    <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Switch Patient</p>
                  </div>
                  
                  <div className="max-h-48 overflow-y-auto">
                    {patients.map(p => {
                      const active = p.id === patient.id;
                      return (
                        <div key={p.id} className="flex items-center justify-between group/item px-2 py-1">
                          <button
                            onClick={() => {
                              switchPatient(p.id);
                              setShowDropdown(false);
                            }}
                            className={`flex-1 flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium transition-colors text-left cursor-pointer ${
                              active 
                                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold' 
                                : 'hover:bg-muted text-foreground'
                            }`}
                          >
                            <span className="truncate">{p.name}</span>
                            {active && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 ml-2" />}
                          </button>
                          
                          <button
                            onClick={async () => {
                              if (confirm(`Are you sure you want to remove and leave the care circle for ${p.name}?`)) {
                                await leavePatient(p.id);
                                setShowDropdown(false);
                              }
                            }}
                            title={`Leave ${p.name}'s care circle`}
                            className="p-1.5 rounded text-muted-foreground hover:bg-red-500/10 hover:text-red-500 transition-colors opacity-0 group-hover/item:opacity-100 cursor-pointer"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  <div className="border-t border-border mt-1 pt-1">
                    <button
                      onClick={() => {
                        setPatient(null as any);
                        setShowDropdown(false);
                      }}
                      className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors text-left cursor-pointer"
                    >
                      <Plus size={13} className="text-emerald-500" />
                      <span>Create New Patient</span>
                    </button>
                    <button
                      onClick={() => {
                        setJoinModalOpen(true);
                        setShowDropdown(false);
                      }}
                      className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors text-left cursor-pointer"
                    >
                      <LinkIcon size={13} className="text-emerald-500" />
                      <span>Join Care Circle</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        <div className="flex items-center gap-2 px-1 py-1.5 border-t border-sidebar-border/20 pt-3">
          <div className="flex-shrink-0 flex items-center justify-center rounded-full bg-emerald-500 text-white w-8 h-8 font-bold text-xs shadow-inner shadow-black/10">
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-foreground truncate">{displayName}</p>
            <p className="text-[10px] text-sidebar-foreground/50">Caregiver</p>
          </div>
          <button onClick={onToggleTheme} title={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
            className="flex-shrink-0 p-1 rounded-md hover:bg-sidebar-accent text-sidebar-foreground/60 hover:text-sidebar-foreground transition-colors mr-0.5">
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button onClick={() => signOut()} title="Sign out"
            className="flex-shrink-0 p-1 rounded-md hover:bg-sidebar-accent text-sidebar-foreground/60 hover:text-sidebar-foreground transition-colors">
            <LogOut size={14} />
          </button>
        </div>
      </div>

      {/* Join Care Circle Modal */}
      {joinModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-card text-card-foreground rounded-2xl p-6 shadow-2xl border border-border w-full max-w-[420px] animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-outfit font-bold text-lg text-foreground">Join Care Circle</h3>
              <button onClick={() => setJoinModalOpen(false)} className="p-1.5 hover:bg-muted rounded-lg text-muted-foreground transition-colors cursor-pointer"><X size={16} /></button>
            </div>
            
            <div className="mb-4">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Enter the 6-character code (e.g. <strong>H3K9XP</strong>) or legacy code shared by a family member to join their patient's circle.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-[10px] font-bold mb-1.5 tracking-wider text-muted-foreground uppercase">Invite Code</p>
              <input
                value={inviteCode}
                onChange={e => setInviteCode(e.target.value)}
                placeholder="Enter code"
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-sans text-center font-mono tracking-widest"
              />
            </div>

            {joinError && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-600 dark:text-red-400">
                {joinError}
              </div>
            )}

            <div className="flex items-center gap-3">
              <button
                onClick={() => setJoinModalOpen(false)}
                className="flex-1 py-2.5 rounded-xl border border-border text-sm font-semibold text-muted-foreground hover:bg-muted transition-colors bg-card cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleJoinCircle}
                disabled={joining || !inviteCode.trim()}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                {joining && <Loader2 size={14} className="animate-spin" />}
                {joining ? 'Joining...' : 'Join Circle'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
