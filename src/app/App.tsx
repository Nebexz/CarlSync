import { useEffect, useState } from 'react';
import { Toaster } from 'sonner';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { AuthScreen } from './components/auth/AuthScreen';
import { CreatePatientScreen } from './components/auth/CreatePatientScreen';
import { Sidebar } from './components/Sidebar';
import { HomeScreen } from './components/HomeScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { MedicationScreen } from './components/MedicationScreen';
import { TasksScreen } from './components/TasksScreen';
import { CalendarScreen } from './components/CalendarScreen';
import { TimelineScreen } from './components/TimelineScreen';
import { EmergencyScreen } from './components/EmergencyScreen';
import { SettingsScreen } from './components/SettingsScreen';
import { Heart, Menu, X } from 'lucide-react';

export type Screen =
  | 'home' | 'profile' | 'medication' | 'tasks'
  | 'calendar' | 'timeline' | 'emergency' | 'settings';

function LoadingScreen() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4" style={{ backgroundColor: '#fafafa' }}>
      <div className="flex items-center justify-center rounded-2xl animate-pulse" style={{ backgroundColor: '#10b981', width: 56, height: 56 }}>
        <Heart size={24} color="white" fill="white" />
      </div>
      <p style={{ fontFamily: "'Figtree',sans-serif", fontSize: 15, color: '#64748b' }}>Loading CareSync…</p>
    </div>
  );
}

function AppShell() {
  const { user, patient, authLoading, patientLoading } = useAuth();
  const [active, setActive] = useState<Screen>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('caresync:theme') as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('caresync:theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  if (authLoading || (user && patientLoading)) return <LoadingScreen />;
  if (!user) return <AuthScreen />;
  if (!patient) return <CreatePatientScreen />;

  const screen = {
    home: <HomeScreen onNavigate={setActive} />,
    profile: <ProfileScreen />,
    medication: <MedicationScreen />,
    tasks: <TasksScreen />,
    calendar: <CalendarScreen />,
    timeline: <TimelineScreen />,
    emergency: <EmergencyScreen />,
    settings: <SettingsScreen />,
  }[active];

  const handleNavigate = (target: Screen) => {
    setActive(target);
    setIsSidebarOpen(false);
  };

  const patientInitials = patient?.name?.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase() ?? 'PT';

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden bg-background text-foreground transition-colors duration-200" style={{ fontFamily: "'Inter',sans-serif" }}>
      {/* Mobile Header */}
      <header className="flex lg:hidden items-center justify-between h-14 px-4 bg-card text-card-foreground border-b border-border z-30 flex-shrink-0">
        <div className="flex items-center gap-3">
          <button onClick={() => setIsSidebarOpen(true)} className="p-1.5 rounded-lg hover:bg-muted text-foreground transition-colors" aria-label="Open menu">
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center rounded-md bg-emerald-500 w-6 h-6 shadow-sm">
              <Heart size={12} color="white" fill="white" />
            </div>
            <span className="font-outfit font-bold text-lg tracking-tight">CareSync</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold capitalize px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">{active}</span>
          <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shadow-inner">
            {patientInitials}
          </div>
        </div>
      </header>

      {/* Sidebar Drawer backdrop for mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden transition-opacity" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* Sidebar Drawer container */}
      <div className={`fixed inset-y-0 left-0 z-50 transform lg:static lg:translate-x-0 transition-transform duration-300 ease-in-out flex-shrink-0 h-full ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <Sidebar activeScreen={active} onNavigate={handleNavigate} theme={theme} onToggleTheme={toggleTheme} onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto min-w-0 bg-background text-foreground relative">{screen}</main>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppShell />
      <Toaster position="top-right" richColors closeButton />
    </AuthProvider>
  );
}

