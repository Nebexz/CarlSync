import { projectId, publicAnonKey } from '/utils/supabase/info';
import { supabase } from './supabase';

const BASE = `https://${projectId}.supabase.co/functions/v1/make-server-00f33061`;

async function req<T = any>(method: string, path: string, body?: unknown): Promise<T> {
  const { data: { session } } = await supabase.auth.getSession();
  const token = session?.access_token ?? publicAnonKey;

  let res: Response;
  try {
    res = await fetch(`${BASE}${path}`, {
      method,
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new Error(
      'Cannot reach the server. Please deploy the CareSync Edge Function from the Make settings page, then try again.'
    );
  }

  const data = await res.json().catch(() => ({ error: res.statusText }));
  if (!res.ok) throw new Error(data.error ?? `Server error (${res.status})`);
  return data;
}

export const api = {
  // Auth
  signup: (name: string, email: string, password: string) =>
    req('POST', '/signup', { name, email, password }),

  // Patients
  getPatients: () => req<{ patients: any[] }>('GET', '/patients'),
  createPatient: (data: any) => req<{ patient: any }>('POST', '/patients', data),
  updatePatient: (id: string, data: any) => req<{ patient: any }>('PATCH', `/patients/${id}`, data),

  // Medications
  getMedications: (patientId: string) =>
    req<{ medications: any[] }>('GET', `/patients/${patientId}/medications`),
  createMedication: (data: any) => req<{ medication: any }>('POST', '/medications', data),
  updateMedication: (id: string, data: any) =>
    req<{ medication: any }>('PATCH', `/medications/${id}`, data),
  deleteMedication: (id: string, patientId: string) =>
    req('DELETE', `/medications/${id}?patient_id=${patientId}`),

  // Tasks
  getTasks: (patientId: string) =>
    req<{ tasks: any[] }>('GET', `/patients/${patientId}/tasks`),
  createTask: (data: any) => req<{ task: any }>('POST', '/tasks', data),
  updateTask: (id: string, data: any) => req<{ task: any }>('PATCH', `/tasks/${id}`, data),

  // Timeline
  getTimeline: (patientId: string) =>
    req<{ events: any[] }>('GET', `/patients/${patientId}/timeline`),
  addTimelineEvent: (patientId: string, type: string, description: string) =>
    req('POST', '/timeline', { patient_id: patientId, type, description }),

  // Appointments
  getAppointments: (patientId: string) =>
    req<{ appointments: any[] }>('GET', `/patients/${patientId}/appointments`),
  createAppointment: (data: any) => req<{ appointment: any }>('POST', '/appointments', data),

  // Documents
  getDocuments: (patientId: string) =>
    req<{ documents: any[] }>('GET', `/patients/${patientId}/documents`),
  getUploadUrl: (patientId: string, filename: string) =>
    req<{ upload_url: string; path: string }>('POST', '/documents/upload-url', { patient_id: patientId, filename }),
  createDocument: (data: any) => req<{ document: any }>('POST', '/documents', data),

  // Wellbeing
  logWellbeing: (mood: string, patientId: string, note?: string) =>
    req('POST', '/wellbeing', { mood, note, patient_id: patientId }),

  // Account
  deleteAccount: () => req('DELETE', '/user'),

  // Invites
  createInvite: (patientId: string) =>
    req<{ code: string }>('POST', '/invite', { patient_id: patientId }),
  joinCareCircle: (code?: string, patientId?: string) =>
    req<{ patient: any }>('POST', '/invite/join', { code, patient_id: patientId }),
};
