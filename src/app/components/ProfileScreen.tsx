import { useState, useEffect } from 'react';
import {
  Pencil, Phone, AlertCircle, Upload, FileText,
  X, Save, Loader2, Plus, Trash2, Activity,
} from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '../contexts/AuthContext';
import { api } from '../lib/api';
import type { Patient } from '../contexts/AuthContext';

const C = { border: '#e2e8f0', text: '#0f172a', sub: '#64748b', muted: '#94a3b8', teal: '#0d9488', green: '#10b981' };
type Tab = 'personal' | 'medical' | 'vitals' | 'allergies' | 'documents' | 'emergency';

// ── Tiny shared components ────────────────────────────────────────────────────
function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <p className="font-sans font-bold text-[10px] text-muted-foreground uppercase tracking-wider">{label}</p>
      <div className="px-3.5 py-3 rounded-xl border border-border bg-muted/20">
        <p className={`font-sans font-semibold text-sm ${value ? 'text-foreground' : 'text-muted-foreground/60'}`}>
          {value || '—'}
        </p>
      </div>
    </div>
  );
}

function Avatar({ name, size = 96 }: { name: string; size?: number }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  const colors = ['#0d9488', '#10b981', '#6366f1', '#f59e0b', '#ef4444', '#ec4899'];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  const color = colors[Math.abs(hash) % colors.length];
  return (
    <div className="flex items-center justify-center rounded-full flex-shrink-0 border-4 border-card shadow-lg"
      style={{ backgroundColor: color, width: size, height: size }}>
      <span className="text-white font-outfit font-bold" style={{ fontSize: size * 0.27 }}>{initials}</span>
    </div>
  );
}

// ── Edit Profile Modal ────────────────────────────────────────────────────────
function EditProfileModal({ patient, onClose, onSave }: { patient: Patient; onClose: () => void; onSave: (p: Patient) => void }) {
  const [form, setForm] = useState({
    name: patient.name ?? '',
    age: String(patient.age ?? ''),
    sex: patient.sex ?? 'Male',
    blood_type: patient.blood_type ?? 'Unknown',
    weight: patient.weight ?? '',
    address: patient.address ?? '',
    emergency_contact_name: patient.emergency_contact_name ?? '',
    emergency_contact_phone: patient.emergency_contact_phone ?? '',
    emergency_contact_rel: patient.emergency_contact_rel ?? 'Daughter',
    conditions: [...(patient.conditions ?? [])],
    allergies: [...(patient.allergies ?? [])],
  });
  const [newCondition, setNewCondition] = useState('');
  const [newAllergy, setNewAllergy] = useState('');
  const [saving, setSaving] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }));

  const addItem = (field: 'conditions' | 'allergies', val: string, clear: () => void) => {
    if (!val.trim()) return;
    setForm(p => ({ ...p, [field]: [...p[field], val.trim()] }));
    clear();
  };

  const removeItem = (field: 'conditions' | 'allergies', idx: number) =>
    setForm(p => ({ ...p, [field]: p[field].filter((_, i) => i !== idx) }));

  const handleSave = async () => {
    if (!form.name.trim()) { toast.error('Patient name is required'); return; }
    setSaving(true);
    try {
      const { patient: updated } = await api.updatePatient(patient.id, {
        ...form,
        age: parseInt(form.age) || 0,
      });
      onSave(updated as Patient);
      toast.success('Profile updated successfully');
      onClose();
    } catch (e: any) {
      toast.error(e.message);
    } finally {
      setSaving(false);
    }
  };

  const inputCls = "w-full px-3 py-2.5 rounded-lg border text-sm outline-none bg-background text-foreground border-border focus:border-emerald-500 transition-colors";
  const inputSty = {};

  const BLOOD_TYPES = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'Unknown'];
  const RELS = ['Daughter', 'Son', 'Spouse', 'Parent', 'Sibling', 'Friend', 'Caregiver', 'Doctor'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card text-card-foreground rounded-2xl shadow-2xl flex flex-col border border-border" style={{ width: 640, maxHeight: '90vh' }}>
        {/* Header */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-border flex-shrink-0">
          <h2 className="font-outfit font-bold text-xl text-foreground">Edit Patient Profile</h2>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-muted transition-colors"><X size={20} className="text-muted-foreground" /></button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 px-7 py-6 flex flex-col gap-6">

          {/* Basic info */}
          <section>
            <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 12, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 14 }}>Basic Information</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <p className="text-xs font-bold mb-1.5" style={{ color: C.sub }}>Full Name *</p>
                <input value={form.name} onChange={set('name')} placeholder="Full name" className={inputCls} style={inputSty} />
              </div>
              <div>
                <p className="text-xs font-bold mb-1.5" style={{ color: C.sub }}>Age</p>
                <input type="number" min="0" max="120" value={form.age} onChange={set('age')} placeholder="Age" className={inputCls} style={inputSty} />
              </div>
              <div>
                <p className="text-xs font-bold mb-1.5" style={{ color: C.sub }}>Sex</p>
                <select value={form.sex} onChange={set('sex')} className={inputCls} style={inputSty}>
                  <option>Male</option><option>Female</option><option>Other</option>
                </select>
              </div>
              <div>
                <p className="text-xs font-bold mb-1.5" style={{ color: C.sub }}>Blood Type</p>
                <select value={form.blood_type} onChange={set('blood_type')} className={inputCls} style={inputSty}>
                  {BLOOD_TYPES.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <p className="text-xs font-bold mb-1.5" style={{ color: C.sub }}>Weight (kg)</p>
                <input value={form.weight} onChange={set('weight')} placeholder="e.g. 72" className={inputCls} style={inputSty} />
              </div>
              <div className="col-span-2">
                <p className="text-xs font-bold mb-1.5" style={{ color: C.sub }}>Home Address</p>
                <input value={form.address} onChange={set('address')} placeholder="Home address" className={inputCls} style={inputSty} />
              </div>
            </div>
          </section>

          {/* Conditions */}
          <section>
            <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 12, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 14 }}>Medical Conditions</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {form.conditions.map((c, i) => (
                <span key={i} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-sm border"
                  style={{ backgroundColor: '#fee2e2', borderColor: '#fca5a5', color: '#991b1b' }}>
                  {c}
                  <button onClick={() => removeItem('conditions', i)}><X size={12} /></button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input value={newCondition} onChange={e => setNewCondition(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && addItem('conditions', newCondition, () => setNewCondition(''))}
                placeholder="Type a condition and press Enter or +"
                className={inputCls} style={{ ...inputSty, flex: 1 }} />
              <button onClick={() => addItem('conditions', newCondition, () => setNewCondition(''))}
                className="px-3 py-2 rounded-lg border hover:bg-slate-50 transition-colors" style={{ borderColor: C.border }}>
                <Plus size={16} color={C.teal} />
              </button>
            </div>
          </section>

          {/* Allergies */}
          <section>
            <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 12, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 14 }}>Known Allergies</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {form.allergies.map((a, i) => (
                <span key={i} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-sm border"
                  style={{ backgroundColor: '#fef3c7', borderColor: '#fde68a', color: '#92400e' }}>
                  {a}
                  <button onClick={() => removeItem('allergies', i)}><X size={12} /></button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input value={newAllergy} onChange={e => setNewAllergy(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && addItem('allergies', newAllergy, () => setNewAllergy(''))}
                placeholder="Type an allergy and press Enter or +"
                className={inputCls} style={{ ...inputSty, flex: 1 }} />
              <button onClick={() => addItem('allergies', newAllergy, () => setNewAllergy(''))}
                className="px-3 py-2 rounded-lg border hover:bg-slate-50 transition-colors" style={{ borderColor: C.border }}>
                <Plus size={16} color={C.teal} />
              </button>
            </div>
          </section>

          {/* Emergency contact */}
          <section>
            <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 12, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 14 }}>Emergency Contact</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <p className="text-xs font-bold mb-1.5" style={{ color: C.sub }}>Contact Name</p>
                <input value={form.emergency_contact_name} onChange={set('emergency_contact_name')} placeholder="Full name" className={inputCls} style={inputSty} />
              </div>
              <div>
                <p className="text-xs font-bold mb-1.5" style={{ color: C.sub }}>Phone Number</p>
                <input value={form.emergency_contact_phone} onChange={set('emergency_contact_phone')} placeholder="+1 (555) 000-0000" className={inputCls} style={inputSty} />
              </div>
              <div>
                <p className="text-xs font-bold mb-1.5" style={{ color: C.sub }}>Relationship</p>
                <select value={form.emergency_contact_rel} onChange={set('emergency_contact_rel')} className={inputCls} style={inputSty}>
                  {RELS.map(r => <option key={r}>{r}</option>)}
                </select>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="flex gap-3 px-7 py-5 border-t flex-shrink-0" style={{ borderColor: C.border }}>
          <button onClick={onClose} className="flex-1 py-3 rounded-xl border text-sm font-medium hover:bg-slate-50 transition-colors"
            style={{ borderColor: C.border, color: C.sub }}>Cancel</button>
          <button onClick={handleSave} disabled={saving}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60 transition-opacity"
            style={{ backgroundColor: C.teal }}>
            {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
            {saving ? 'Saving…' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Tab components — all receive the real patient object ──────────────────────
function PersonalTab({ patient }: { patient: Patient }) {
  const [firstName, ...rest] = (patient.name ?? '').split(' ');
  const lastName = rest.join(' ');
  return (
    <div className="flex flex-col gap-6">
      <h3 style={{ fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: 20, color: C.text }}>Personal Details</h3>
      <div className="grid grid-cols-2 gap-5">
        <Field label="First Name" value={firstName} />
        <Field label="Last Name" value={lastName} />
        <Field label="Age" value={patient.age ? `${patient.age} years old` : ''} />
        <Field label="Sex" value={patient.sex ?? ''} />
        <Field label="Blood Type" value={patient.blood_type ?? ''} />
        <Field label="Weight" value={patient.weight ? `${patient.weight} kg` : ''} />
      </div>
      <Field label="Home Address" value={patient.address ?? ''} />
    </div>
  );
}

function MedicalTab({ patient }: { patient: Patient }) {
  const conditions = patient.conditions ?? [];
  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-sans font-semibold text-lg text-foreground">Medical Conditions</h3>
      {conditions.length === 0 ? (
        <div className="flex flex-col items-center gap-2 py-10 rounded-xl border border-dashed border-border bg-muted/10">
          <p className="font-sans text-sm text-muted-foreground">No conditions recorded.</p>
          <p className="font-sans text-xs text-muted-foreground/60">Click Edit Profile to add conditions.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {conditions.map((c, i) => (
            <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl border border-border bg-muted/20">
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#ef4444' }} />
              <p className="font-sans font-medium text-sm text-foreground">{c}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function VitalsTab() {
  return (
    <div className="flex flex-col gap-6">
      <h3 style={{ fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: 20, color: C.text }}>Vital Signs</h3>
      <div className="flex flex-col items-center gap-4 py-14 rounded-xl border border-dashed" style={{ borderColor: C.border }}>
        <div className="flex items-center justify-center rounded-full" style={{ backgroundColor: '#f0fdfa', width: 56, height: 56 }}>
          <Activity size={24} color={C.teal} />
        </div>
        <div className="text-center">
          <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 16, color: C.text }}>No vitals recorded yet</p>
          <p style={{ fontFamily: "'Figtree',sans-serif", fontSize: 13, color: C.sub, marginTop: 4 }}>
            Use the <strong>New Entry → Record Vitals</strong> button on the home screen<br />to log blood pressure, heart rate, and temperature.
          </p>
        </div>
      </div>
    </div>
  );
}

function AllergiesTab({ patient }: { patient: Patient }) {
  const allergies = patient.allergies ?? [];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <AlertCircle size={20} color="#ef4444" />
        <h3 style={{ fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: 20, color: C.text }}>Known Allergies</h3>
      </div>

      {allergies.length > 0 && (
        <div className="p-3 rounded-lg border" style={{ backgroundColor: '#fee2e2', borderColor: '#ef4444' }}>
          <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: 13, color: '#991b1b' }}>
            ⚠ Always verify allergies before administering any medication or substance.
          </p>
        </div>
      )}

      {allergies.length === 0 ? (
        <div className="flex flex-col items-center gap-2 py-10 rounded-xl border border-dashed" style={{ borderColor: C.border }}>
          <p style={{ fontFamily: "'Figtree',sans-serif", fontSize: 14, color: C.muted }}>No allergies recorded.</p>
          <p style={{ fontFamily: "'Figtree',sans-serif", fontSize: 13, color: C.muted }}>Click Edit Profile to add known allergies.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {allergies.map((a, i) => (
            <div key={i} className="p-4 rounded-lg border" style={{ borderColor: C.border }}>
              <div className="flex items-center justify-between">
                <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: 15, color: C.text }}>{a}</p>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: '#fef3c7', color: '#92400e' }}>Recorded</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function DocumentsTab({ patientId }: { patientId: string }) {
  const [docs, setDocs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    api.getDocuments(patientId)
      .then(r => setDocs(r.documents ?? []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [patientId]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const { upload_url, path } = await api.getUploadUrl(patientId, file.name);
      await fetch(upload_url, { method: 'PUT', body: file, headers: { 'Content-Type': file.type } });
      const { document } = await api.createDocument({
        patient_id: patientId,
        title: file.name,
        type: file.type,
        storage_path: path,
        size_bytes: file.size,
      });
      setDocs(p => [document, ...p]);
      toast.success(`${file.name} uploaded successfully`);
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  const formatSize = (bytes: number) => {
    if (!bytes) return '';
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 style={{ fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: 20, color: C.text }}>Documents</h3>
        <label className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm hover:bg-slate-50 transition-colors cursor-pointer ${uploading ? 'opacity-60 pointer-events-none' : ''}`}
          style={{ borderColor: C.border, color: C.teal }}>
          {uploading ? <Loader2 size={15} className="animate-spin" /> : <Upload size={15} />}
          {uploading ? 'Uploading…' : 'Upload'}
          <input type="file" className="hidden" onChange={handleUpload} accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" />
        </label>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-10"><Loader2 size={22} color={C.muted} className="animate-spin" /></div>
      ) : docs.length === 0 ? (
        <div className="flex flex-col items-center gap-3 py-14 rounded-xl border border-dashed" style={{ borderColor: C.border }}>
          <div className="flex items-center justify-center rounded-full" style={{ backgroundColor: '#f0fdfa', width: 52, height: 52 }}>
            <FileText size={22} color={C.teal} />
          </div>
          <div className="text-center">
            <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 15, color: C.text }}>No documents uploaded</p>
            <p style={{ fontFamily: "'Figtree',sans-serif", fontSize: 13, color: C.sub, marginTop: 4 }}>Upload prescriptions, lab reports, or insurance cards.</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {docs.map((doc, i) => (
            <a key={i} href={doc.url ?? '#'} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border hover:bg-slate-50 cursor-pointer transition-colors"
              style={{ borderColor: C.border }}>
              <div className="flex items-center justify-center rounded-lg flex-shrink-0" style={{ backgroundColor: '#f0fdfa', width: 40, height: 40 }}>
                <FileText size={18} color={C.teal} />
              </div>
              <div className="flex-1 min-w-0">
                <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 14, color: C.text }} className="truncate">{doc.title}</p>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: C.muted }}>
                  {formatSize(doc.size_bytes)}
                  {doc.size_bytes && doc.created_at ? ' · ' : ''}
                  {doc.created_at ? new Date(doc.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : ''}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function EmergencyContactsTab({ patient }: { patient: Patient }) {
  const hasContact = patient.emergency_contact_name;
  const initials = (patient.emergency_contact_name ?? '').split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div className="flex flex-col gap-4">
      <h3 style={{ fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: 20, color: C.text }}>Emergency Contacts</h3>

      {!hasContact ? (
        <div className="flex flex-col items-center gap-2 py-10 rounded-xl border border-dashed" style={{ borderColor: C.border }}>
          <p style={{ fontFamily: "'Figtree',sans-serif", fontSize: 14, color: C.muted }}>No emergency contact recorded.</p>
          <p style={{ fontFamily: "'Figtree',sans-serif", fontSize: 13, color: C.muted }}>Click Edit Profile to add one.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {/* Primary emergency contact from patient record */}
          <div className="flex items-center justify-between p-4 rounded-lg border" style={{ borderColor: C.border }}>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full" style={{ backgroundColor: C.teal, width: 44, height: 44 }}>
                <span style={{ color: 'white', fontSize: 13, fontWeight: 700 }}>{initials}</span>
              </div>
              <div>
                <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: 14, color: C.text }}>{patient.emergency_contact_name}</p>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: C.sub }}>
                  {patient.emergency_contact_rel} · {patient.emergency_contact_phone}
                </p>
              </div>
            </div>
            <a href={`tel:${(patient.emergency_contact_phone ?? '').replace(/\D/g, '')}`}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              style={{ backgroundColor: C.green, color: 'white' }}>
              <Phone size={14} /> Call
            </a>
          </div>

          <div className="p-3 rounded-lg" style={{ backgroundColor: '#fff7ed', border: '1px solid #fdba74' }}>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: '#92400e' }}>
              ⚠ In an emergency, call this contact immediately. Their number also appears on the Emergency Card.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Tab list ──────────────────────────────────────────────────────────────────
const TABS: { id: Tab; label: string }[] = [
  { id: 'personal',  label: 'Personal Info' },
  { id: 'medical',   label: 'Medical Conditions' },
  { id: 'vitals',    label: 'Vital Signs' },
  { id: 'allergies', label: 'Allergies' },
  { id: 'documents', label: 'Documents' },
  { id: 'emergency', label: 'Emergency Contacts' },
];

// ── Main screen ───────────────────────────────────────────────────────────────
export function ProfileScreen() {
  const { patient, setPatient } = useAuth();
  const [tab, setTab] = useState<Tab>('personal');
  const [showEdit, setShowEdit] = useState(false);

  if (!patient) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 size={32} color={C.muted} className="animate-spin" />
      </div>
    );
  }

  const tabContent: Record<Tab, React.ReactNode> = {
    personal:  <PersonalTab patient={patient} />,
    medical:   <MedicalTab patient={patient} />,
    vitals:    <VitalsTab />,
    allergies: <AllergiesTab patient={patient} />,
    documents: <DocumentsTab patientId={patient.id} />,
    emergency: <EmergencyContactsTab patient={patient} />,
  };

  // Quick overview values derived from real data
  const bmi = patient.weight
    ? (parseFloat(String(patient.weight)) / Math.pow(1.70, 2)).toFixed(1)
    : null;

  return (
    <div className="p-10 flex flex-col gap-8 min-h-full bg-background text-foreground transition-colors duration-200">

      {/* Edit modal */}
      {showEdit && (
        <EditProfileModal
          patient={patient}
          onClose={() => setShowEdit(false)}
          onSave={(updated) => setPatient(updated)}
        />
      )}

      {/* ── Profile header ── */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 text-center sm:text-left">
        <Avatar name={patient.name} size={112} />
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2 justify-center sm:justify-start">
            <h1 className="font-sans font-bold text-2xl md:text-3xl text-foreground">{patient.name}</h1>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 self-center sm:self-auto">
              Active Patient
            </span>
          </div>
          <div className="flex items-center gap-6 flex-wrap text-sm text-muted-foreground justify-center sm:justify-start">
            {patient.age && (
              <span>
                Age {patient.age} · {patient.sex}
              </span>
            )}
            {patient.blood_type && patient.blood_type !== 'Unknown' && (
              <span className="flex items-center gap-1.5">
                🩸 Blood Type: <strong className="text-red-500">{patient.blood_type}</strong>
              </span>
            )}
            {(patient.conditions ?? []).length > 0 && (
              <span>
                {patient.conditions!.length} condition{patient.conditions!.length !== 1 ? 's' : ''} recorded
              </span>
            )}
          </div>
        </div>
        {/* ── Edit Profile button ── */}
        <button
          onClick={() => setShowEdit(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-500/40 hover:bg-emerald-500/10 text-emerald-500 transition-all text-sm font-semibold w-full sm:w-auto justify-center"
        >
          <Pencil size={15} /> Edit Profile
        </button>
      </div>

      {/* ── Tabs ── */}
      <div className="flex border-b border-border overflow-x-auto scrollbar-none">
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`px-5 py-3 text-sm font-semibold transition-all whitespace-nowrap border-b-2 -mb-[2px] ${
              tab === t.id 
                ? 'text-teal-600 dark:text-teal-400 border-teal-600 dark:border-teal-400' 
                : 'text-muted-foreground border-transparent hover:text-foreground'
            }`}>
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-card text-card-foreground rounded-2xl border border-border p-8 min-w-0 shadow-sm">
          {tabContent[tab]}
        </div>

        {/* ── Sidebar ── */}
        <div className="flex flex-col gap-5 w-full lg:w-[280px] lg:flex-shrink-0">

          {/* Quick overview from real data */}
          <div className="bg-card text-card-foreground rounded-2xl border border-border p-5 shadow-sm">
            <p className="font-outfit font-semibold text-base text-foreground mb-4">Quick Overview</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { l: 'Blood Type', v: patient.blood_type && patient.blood_type !== 'Unknown' ? patient.blood_type : '—', c: '#ef4444' },
                { l: 'Age', v: patient.age ? String(patient.age) : '—', c: '#0d9488' },
                { l: 'Weight', v: patient.weight ? `${patient.weight} kg` : '—', c: '#f59e0b' },
                { l: 'BMI', v: bmi ?? '—', c: '#10b981' },
              ].map(s => (
                <div key={s.l} className="p-3 rounded-xl bg-muted/20 border border-border/10">
                  <p className="font-sans text-[11px] text-muted-foreground mb-1">{s.l}</p>
                  <p className="font-sans font-bold text-xl" style={{ color: s.c }}>{s.v}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Conditions summary */}
          {(patient.conditions ?? []).length > 0 && (
            <div className="bg-card text-card-foreground rounded-2xl border border-border p-5 shadow-sm">
              <p className="font-outfit font-semibold text-base text-foreground mb-3">Conditions</p>
              <div className="flex flex-col gap-2">
                {patient.conditions!.map((c, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-muted/20">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#ef4444' }} />
                    <p className="font-sans text-sm text-foreground">{c}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Allergies summary */}
          {(patient.allergies ?? []).length > 0 && (
            <div className="bg-card text-card-foreground rounded-2xl border border-border p-5 shadow-sm">
              <p className="font-outfit font-semibold text-base text-foreground mb-3">⚠ Allergies</p>
              <div className="flex flex-wrap gap-2">
                {patient.allergies!.map((a, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-500">{a}</span>
                ))}
              </div>
            </div>
          )}

          {/* Emergency contact quick-call */}
          {patient.emergency_contact_name && (
            <div className="bg-card text-card-foreground rounded-2xl border border-border p-5 shadow-sm">
              <p className="font-outfit font-semibold text-base text-foreground mb-3">Emergency Contact</p>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center rounded-full flex-shrink-0 bg-teal-500 text-white w-9 h-9 font-bold text-xs shadow-inner">
                  {patient.emergency_contact_name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <p className="font-sans font-semibold text-sm text-foreground">{patient.emergency_contact_name}</p>
                  <p className="font-sans text-xs text-muted-foreground">{patient.emergency_contact_rel}</p>
                </div>
              </div>
              <a href={`tel:${(patient.emergency_contact_phone ?? '').replace(/\D/g, '')}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold bg-red-500 hover:bg-red-600 text-white transition-colors">
                <Phone size={14} /> Call Now
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
