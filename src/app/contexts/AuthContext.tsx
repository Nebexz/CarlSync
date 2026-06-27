import { createContext, useContext, useEffect, useState } from 'react';
import type { User, Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import { api } from '../lib/api';

export interface Patient {
  id: string;
  name: string;
  age: number;
  sex: string;
  blood_type: string;
  weight: string;
  conditions: string[];
  allergies: string[];
  address: string;
  emergency_contact_name: string;
  emergency_contact_phone: string;
  emergency_contact_rel: string;
  created_by: string;
  created_at: string;
  timeline_comments?: Record<string, any[]>;
}


interface Ctx {
  user: User | null;
  session: Session | null;
  patient: Patient | null;
  authLoading: boolean;
  patientLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  setPatient: (p: Patient) => void;
  refreshPatient: () => Promise<void>;
}

const AuthContext = createContext<Ctx>({} as Ctx);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [patient, setPatient] = useState<Patient | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [patientLoading, setPatientLoading] = useState(false);

  // Initialize auth state
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setAuthLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Load patient whenever user changes
  useEffect(() => {
    if (user) {
      loadPatient();
    } else {
      setPatient(null);
    }
  }, [user?.id]);

  async function loadPatient() {
    setPatientLoading(true);
    try {
      const { patients } = await api.getPatients();
      const activePatient = patients[0] ?? null;
      setPatient(activePatient);
      if (activePatient && user?.id) {
        localStorage.setItem(`caresync:patient:${user.id}`, JSON.stringify({
          patient: activePatient,
          timestamp: Date.now()
        }));
      }
    } catch (e) {
      console.log('Load patient error, checking cache:', e);
      if (user?.id) {
        const cached = localStorage.getItem(`caresync:patient:${user.id}`);
        if (cached) {
          try {
            const parsed = JSON.parse(cached);
            setPatient(parsed.patient ?? null);
          } catch (err) {
            console.error('Error parsing cached patient:', err);
          }
        }
      }
    } finally {
      setPatientLoading(false);
    }
  }

  async function signIn(email: string, password: string) {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw new Error(error.message);
  }

  async function signUp(name: string, email: string, password: string) {
    // Route signup through the backend Edge Function to bypass client-side Supabase
    // email rate limits and automatically confirm the user's email.
    await api.signup(name, email, password);

    // Automatically sign in the user after successful account creation.
    await signIn(email, password);
  }

  async function signOut() {
    await supabase.auth.signOut();
    setPatient(null);
  }

  return (
    <AuthContext.Provider value={{
      user, session, patient, authLoading, patientLoading,
      signIn, signUp, signOut,
      setPatient,
      refreshPatient: loadPatient,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() { return useContext(AuthContext); }
