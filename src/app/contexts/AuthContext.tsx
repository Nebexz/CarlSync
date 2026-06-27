import { createContext, useContext, useEffect, useState } from 'react';
import type { User, Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import { api } from '../lib/api';
import { toast } from 'sonner';

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
  patients: Patient[];
  authLoading: boolean;
  patientLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  setPatient: (p: Patient) => void;
  refreshPatient: () => Promise<void>;
  switchPatient: (patientId: string) => void;
  leavePatient: (patientId: string) => Promise<void>;
}

const AuthContext = createContext<Ctx>({} as Ctx);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [patient, setPatient] = useState<Patient | null>(null);
  const [patients, setPatients] = useState<Patient[]>([]);
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
      setPatients([]);
    }
  }, [user?.id]);

  async function loadPatient() {
    setPatientLoading(true);
    try {
      const { patients: fetchedPatients } = await api.getPatients();
      setPatients(fetchedPatients);
      
      const cachedId = localStorage.getItem(`caresync:active_patient_id:${user?.id}`);
      const activePatient = fetchedPatients.find(p => p.id === cachedId) ?? fetchedPatients[0] ?? null;
      
      setPatient(activePatient);
      if (activePatient && user?.id) {
        localStorage.setItem(`caresync:active_patient_id:${user.id}`, activePatient.id);
      }
    } catch (e) {
      console.log('Load patient error, checking cache:', e);
      if (user?.id) {
        const cached = localStorage.getItem(`caresync:patient:${user.id}`);
        if (cached) {
          try {
            const parsed = JSON.parse(cached);
            setPatient(parsed.patient ?? null);
            if (parsed.patient) setPatients([parsed.patient]);
          } catch (err) {
            console.error('Error parsing cached patient:', err);
          }
        }
      }
    } finally {
      setPatientLoading(false);
    }
  }

  function switchPatient(patientId: string) {
    const target = patients.find(p => p.id === patientId);
    if (target && user) {
      setPatient(target);
      localStorage.setItem(`caresync:active_patient_id:${user.id}`, target.id);
      toast.success(`Switched active profile to ${target.name}`);
    }
  }

  async function leavePatient(patientId: string) {
    if (!user) return;
    try {
      const patientsKey = `patients:user:${user.id}`;
      const { data, error } = await supabase
        .from("kv_store_00f33061")
        .select("value")
        .eq("key", patientsKey)
        .maybeSingle();

      if (error) throw error;
      
      let ids: string[] = data?.value ?? [];
      ids = ids.filter(id => id !== patientId);
      
      const { error: upsertErr } = await supabase
        .from("kv_store_00f33061")
        .upsert({ key: patientsKey, value: ids });
        
      if (upsertErr) throw upsertErr;
      
      toast.success("Successfully removed patient circle");
      await loadPatient();
    } catch (e: any) {
      console.error("Error leaving patient circle:", e);
      toast.error(e.message || "Failed to remove patient circle");
    }
  }

  async function signIn(email: string, password: string) {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw new Error(error.message);
  }

  async function signUp(name: string, email: string, password: string) {
    await api.signup(name, email, password);
    await signIn(email, password);
  }

  async function signOut() {
    await supabase.auth.signOut();
    setPatient(null);
    setPatients([]);
  }

  return (
    <AuthContext.Provider value={{
      user, session, patient, patients, authLoading, patientLoading,
      signIn, signUp, signOut,
      setPatient,
      refreshPatient: loadPatient,
      switchPatient,
      leavePatient,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() { return useContext(AuthContext); }
