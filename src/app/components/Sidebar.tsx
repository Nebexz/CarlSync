import { Home, User, Pill, CheckSquare, Calendar, Activity, AlertTriangle, Settings, Heart, LogOut, Sun, Moon, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import type { Screen } from '../App';

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
  const { user, patient, signOut } = useAuth();
  const displayName = user?.user_metadata?.name ?? user?.email ?? 'Caregiver';
  const initials = displayName.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase();
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
        {/* Patient name indicator */}
        {patient && (
          <div className="mx-1 px-2.5 py-1.5 rounded-lg bg-sidebar-accent/50 border border-sidebar-border/20">
            <p className="text-[9px] text-sidebar-foreground/50 font-bold uppercase tracking-wider">Caring for</p>
            <p className="text-xs font-bold text-foreground truncate mt-0.5">{patient.name}</p>
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
    </div>
  );
}

