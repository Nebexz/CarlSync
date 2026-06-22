import { useState, useEffect } from 'react';
import { Phone, Printer, Share2, AlertTriangle, ShieldAlert, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { api } from '../lib/api';
import { jsPDF } from 'jspdf';
import { toast } from 'sonner';

const C = { border: '#e2e8f0', text: '#0f172a', sub: '#64748b', muted: '#94a3b8', teal: '#0d9488', green: '#10b981' };

export function EmergencyScreen() {
  const { patient, patientLoading } = useAuth();
  const [meds, setMeds] = useState<any[]>([]);
  const [medsLoading, setMedsLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(false);
  const [cachedTime, setCachedTime] = useState<string | null>(null);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    if (!patient?.id) return;
    setMedsLoading(true);
    api.getMedications(patient.id)
      .then(r => {
        const medsList = r.medications ?? [];
        setMeds(medsList);
        setIsOffline(false);
        setCachedTime(null);
        localStorage.setItem(`caresync:meds:${patient.id}`, JSON.stringify({
          meds: medsList,
          timestamp: Date.now()
        }));
      })
      .catch(err => {
        console.error('Error fetching medications for emergency card:', err);
        const cached = localStorage.getItem(`caresync:meds:${patient.id}`);
        if (cached) {
          try {
            const parsed = JSON.parse(cached);
            setMeds(parsed.meds ?? []);
            setIsOffline(true);
            if (parsed.timestamp) {
              const diffMs = Date.now() - parsed.timestamp;
              const mins = Math.floor(diffMs / 60000);
              if (mins < 1) setCachedTime('just now');
              else if (mins < 60) setCachedTime(`${mins}m ago`);
              else {
                const hrs = Math.floor(mins / 60);
                if (hrs < 24) setCachedTime(`${hrs}h ago`);
                else setCachedTime(new Date(parsed.timestamp).toLocaleDateString());
              }
            }
          } catch (e) {
            console.error('Failed to parse cached meds:', e);
          }
        } else {
          setIsOffline(true);
        }
      })
      .finally(() => setMedsLoading(false));
  }, [patient?.id]);

  if (patientLoading) {
    return (
      <div className="flex items-center justify-center p-20" style={{ minHeight: '100%' }}>
        <Loader2 size={32} color={C.teal} className="animate-spin" />
      </div>
    );
  }

  if (!patient) {
    return (
      <div className="p-10 flex flex-col items-center justify-center min-h-full bg-background text-foreground transition-colors duration-200">
        <div className="flex flex-col items-center gap-4 text-center max-w-md bg-card p-8 rounded-2xl border border-border shadow-sm">
          <AlertTriangle size={40} className="text-amber-500" />
          <h2 className="font-outfit font-bold text-xl text-foreground">No Patient Profile</h2>
          <p className="font-sans text-sm text-muted-foreground">
            Please select or create a patient profile first to view emergency medical information.
          </p>
        </div>
      </div>
    );
  }

  // Dynamic Contacts list
  const primaryContact = {
    name: patient.emergency_contact_name || 'Linda Chen',
    rel: `${patient.emergency_contact_rel || 'Daughter'} (Primary)`,
    phone: patient.emergency_contact_phone || '+1 (555) 998-1212',
    initials: (patient.emergency_contact_name || 'Linda Chen').split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase(),
    color: '#0d9488',
  };

  const contactsToRender = [primaryContact];

  // Fallbacks if primary contact isn't the static ones
  if (primaryContact.name !== 'Michael Chen') {
    contactsToRender.push({ name: 'Michael Chen', rel: 'Son', phone: '+1 (555) 887-3421', initials: 'MC', color: '#6366f1' });
  }
  if (primaryContact.name !== 'Dr. Marcus Aris' && primaryContact.name !== 'Marcus Aris') {
    contactsToRender.push({ name: 'Dr. Marcus Aris', rel: 'Primary Care Physician', phone: '+1 (555) 441-0099', initials: 'DA', color: '#f59e0b' });
  }

  const handleDownloadPDF = async () => {
    if (!patient) return;
    setDownloading(true);
    try {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      // A4 dimensions: 210mm x 297mm

      // Top red banner
      doc.setFillColor(239, 68, 68); // Red
      doc.rect(10, 10, 190, 15, 'F');

      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.text('EMERGENCY MEDICAL INFORMATION', 15, 20);

      // Patient header name
      doc.setTextColor(15, 23, 42); // Dark slate
      doc.setFontSize(20);
      doc.setFont('helvetica', 'bold');
      doc.text(patient.name, 15, 38);

      // Primary identifiers
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(100, 116, 139); // Slate-500
      doc.text('AGE', 15, 47);
      doc.text('SEX', 45, 47);
      doc.text('WEIGHT', 75, 47);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(15, 23, 42);
      doc.text(patient.age ? `${patient.age} Years` : '—', 15, 52);
      doc.text(patient.sex || '—', 45, 52);
      doc.text(patient.weight ? `${patient.weight} kg` : '—', 75, 52);

      // Blood Type Box
      doc.setFillColor(254, 242, 242); // light red
      doc.setDrawColor(239, 68, 68); // red border
      doc.rect(135, 30, 60, 24, 'FD');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(239, 68, 68);
      doc.text('BLOOD TYPE', 140, 36);

      doc.setFontSize(24);
      doc.text(patient.blood_type || '—', 140, 48);

      // Horizontal separator
      doc.setDrawColor(226, 232, 240); // slate-200
      doc.line(10, 60, 200, 60);

      // Columns for listings
      let yCol1 = 70;
      let yCol2 = 70;

      // Section title drawing function
      const drawSectionTitle = (title: string, color: [number, number, number], x: number, y: number) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(color[0], color[1], color[2]);
        doc.text(title, x, y);
        return y + 6;
      };

      // Col 1: Medical Conditions
      yCol1 = drawSectionTitle('MEDICAL CONDITIONS', [239, 68, 68], 15, yCol1);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(15, 23, 42);
      if (patient.conditions && patient.conditions.length > 0) {
        patient.conditions.forEach((c: string) => {
          const lines = doc.splitTextToSize(`• ${c}`, 80);
          lines.forEach((l: string) => {
            doc.text(l, 15, yCol1);
            yCol1 += 5;
          });
        });
      } else {
        doc.text('None reported', 15, yCol1);
        yCol1 += 5;
      }

      // Col 1: Allergies
      yCol1 += 5;
      yCol1 = drawSectionTitle('ALLERGIES', [245, 158, 11], 15, yCol1);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(15, 23, 42);
      if (patient.allergies && patient.allergies.length > 0) {
        patient.allergies.forEach((a: string) => {
          const lines = doc.splitTextToSize(`• ${a}`, 80);
          lines.forEach((l: string) => {
            doc.text(l, 15, yCol1);
            yCol1 += 5;
          });
        });
      } else {
        doc.text('No known allergies', 15, yCol1);
        yCol1 += 5;
      }

      // Col 2: Medications
      yCol2 = drawSectionTitle('CURRENT MEDICATIONS', [13, 148, 136], 110, yCol2);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(15, 23, 42);
      const activeMeds = meds.filter(m => m.status === 'active');
      if (activeMeds.length > 0) {
        activeMeds.forEach((m: any) => {
          const label = `${m.name}${m.dosage ? ` (${m.dosage})` : ''}`;
          const lines = doc.splitTextToSize(`• ${label}`, 80);
          lines.forEach((l: string) => {
            doc.text(l, 110, yCol2);
            yCol2 += 5;
          });
        });
      } else {
        doc.text('No active medications', 110, yCol2);
        yCol2 += 5;
      }

      // Emergency Contacts section
      let yContacts = Math.max(yCol1, yCol2) + 10;
      doc.setDrawColor(226, 232, 240);
      doc.line(10, yContacts - 5, 200, yContacts - 5);

      yContacts = drawSectionTitle('EMERGENCY CONTACTS', [15, 23, 42], 15, yContacts);

      let xContact = 15;
      contactsToRender.forEach((c) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(15, 23, 42);
        doc.text(c.name, xContact, yContacts);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(100, 116, 139);
        doc.text(c.rel, xContact, yContacts + 4.5);

        doc.setTextColor(239, 68, 68);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.text(c.phone, xContact, yContacts + 9);

        xContact += 62;
      });

      yContacts += 16;

      // Footer info box
      doc.setDrawColor(226, 232, 240);
      doc.line(10, yContacts, 200, yContacts);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(100, 116, 139);
      doc.text('Primary Care Physician: Dr. Marcus Aris (+1 (555) 441-0099)', 15, yContacts + 5);
      doc.text('Insurance: Blue Shield Healthcare (Plan #BS-8822)', 15, yContacts + 9);
      doc.text(`Home Address: ${patient.address || '42 Garden St, Brookline, MA 02445'}`, 15, yContacts + 13);

      doc.setFont('helvetica', 'italic');
      doc.setFontSize(7.5);
      doc.text('Generated via CareSync. Please keep this medical card handy.', 15, yContacts + 19);

      doc.save(`${patient.name.replace(/\s+/g, '_')}_Emergency_Card.pdf`);
      toast.success('Emergency card PDF downloaded!');
    } catch (e: any) {
      console.error(e);
      toast.error('Failed to generate PDF');
    } finally {
      setDownloading(false);
    }
  };

  const handleShare = async () => {
    if (!patient) return;
    const activeMeds = meds.filter(m => m.status === 'active').map(m => `• ${m.name} ${m.dosage ? `(${m.dosage})` : ''}`).join('\n') || 'None reported';
    const contacts = contactsToRender.map(c => `• ${c.name} (${c.rel}): ${c.phone}`).join('\n');
    const conditionsList = patient.conditions?.map((c: string) => `• ${c}`).join('\n') || 'None reported';
    const allergiesList = patient.allergies?.map((a: string) => `• ${a}`).join('\n') || 'No known allergies';

    const shareText = `CareSync Emergency Medical Card
Patient Name: ${patient.name}
Age: ${patient.age || '—'} | Sex: ${patient.sex || '—'} | Blood Type: ${patient.blood_type || '—'}
Weight: ${patient.weight ? `${patient.weight} kg` : '—'}

Medical Conditions:
${conditionsList}

Allergies:
${allergiesList}

Current Medications:
${activeMeds}

Emergency Contacts:
${contacts}

Primary Care Physician: Dr. Marcus Aris (+1 (555) 441-0099)
Insurance: Blue Shield Healthcare (Plan #BS-8822)`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${patient.name} - Emergency Medical Info`,
          text: shareText,
        });
        toast.success('Shared successfully');
        return;
      } catch (e) {
        console.log('Navigator share failed/cancelled:', e);
      }
    }

    try {
      await navigator.clipboard.writeText(shareText);
      toast.success('Emergency card text copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy text to clipboard');
    }
  };

  return (
    <div className="p-10 flex flex-col gap-6 min-h-full bg-background text-foreground transition-colors duration-200">

      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-xl bg-red-100 dark:bg-red-950/40 w-11 h-11 flex-shrink-0">
            <ShieldAlert size={22} className="text-red-600 dark:text-red-500" />
          </div>
          <div>
            <h1 className="font-outfit font-bold text-2xl md:text-3xl text-red-600 dark:text-red-500">
              Emergency Information
            </h1>
            <p className="font-sans text-sm text-muted-foreground mt-1">
              Share this card with first responders immediately
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors text-sm font-semibold font-sans"
            disabled={downloading}
            onClick={handleDownloadPDF}>
            {downloading ? <Loader2 size={16} className="animate-spin" /> : <Printer size={16} />}
            {downloading ? 'Downloading...' : 'Print Card'}
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors text-sm font-semibold font-sans"
            onClick={handleShare}>
            <Share2 size={16} /> Share
          </button>
        </div>
      </div>


      {/* ── Emergency Card ── */}
      <div className="rounded-2xl border-2 overflow-hidden"
        style={{ borderColor: '#ef4444', boxShadow: '0 4px 24px rgba(239,68,68,0.12)' }}>

        {/* Card header strip */}
        <div className="flex items-center gap-4 px-8 py-5"
          style={{ backgroundColor: '#ef4444' }}>
          <AlertTriangle size={22} color="white" fill="rgba(255,255,255,0.3)" />
          <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: 18, color: 'white', letterSpacing: '0.05em' }}>
            EMERGENCY MEDICAL INFORMATION
          </span>
        </div>

        {/* Offline cache warning banner */}
        {isOffline && (
          <div className="flex items-center gap-2 px-8 py-3 bg-amber-50 border-b border-amber-100 text-amber-800 text-sm font-semibold">
            <AlertTriangle size={16} className="text-amber-500 flex-shrink-0" />
            <span>Viewing cached offline copy {cachedTime ? `(saved ${cachedTime})` : ''}. Reconnect to sync latest changes.</span>
          </div>
        )}

        <div className="bg-card text-card-foreground p-8">
          {/* Patient identity */}
          <div className="flex items-center gap-6 pb-6 mb-6 border-b border-border">
            <div className="rounded-full flex-shrink-0 border-4 flex items-center justify-center shadow-sm w-24 h-24 border-red-100 dark:border-red-950/50 bg-red-500">
              <span className="text-white font-bold text-3xl font-outfit">
                {patient.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
              </span>
            </div>
            <div className="flex-1">
              <h2 className="font-sans font-bold text-2xl md:text-3xl text-foreground">{patient.name}</h2>
              <div className="flex items-center gap-6 mt-2">
                {[
                  { label: 'Age', value: patient.age ? `${patient.age} Years` : '—' },
                  { label: 'Sex', value: patient.sex || '—' },
                  { label: 'Weight', value: patient.weight ? `${patient.weight} kg` : '—' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="font-sans font-medium text-[11px] text-muted-foreground uppercase">{label}</p>
                    <p className="font-sans font-semibold text-sm text-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Blood type — LARGE and prominent */}
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 px-6 py-4 border-red-500 bg-red-5/50 dark:bg-red-950/20">
              <span className="font-sans text-[11px] font-bold text-red-500 uppercase tracking-wider">Blood Type</span>
              <span className="font-outfit font-bold text-4xl text-red-600 dark:text-red-500 leading-tight">{patient.blood_type || '—'}</span>
            </div>
          </div>

          {/* Three columns: conditions, allergies, medications */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 mb-6 border-b border-border">

            {/* Conditions */}
            <div>
              <p className="text-xs font-bold mb-3 uppercase tracking-wide text-red-500">Medical Conditions</p>
              <div className="flex flex-col gap-2">
                {patient.conditions && patient.conditions.length > 0 ? (
                  patient.conditions.map((c, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-red-500" />
                      <p className="font-sans font-medium text-sm text-foreground">{c}</p>
                    </div>
                  ))
                ) : (
                  <p className="font-sans text-sm text-muted-foreground">None reported</p>
                )}
              </div>
            </div>

            {/* Allergies */}
            <div>
              <p className="text-xs font-bold mb-3 uppercase tracking-wide text-amber-500">⚠ Allergies</p>
              <div className="flex flex-col gap-2">
                {patient.allergies && patient.allergies.length > 0 ? (
                  patient.allergies.map((a, i) => {
                    const parts = a.split(/[–:-]/);
                    const name = parts[0]?.trim() ?? a;
                    const note = parts[1]?.trim();
                    return (
                      <div key={i} className="rounded-lg px-3 py-1.5 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50">
                        <p className="font-sans font-bold text-sm text-amber-800 dark:text-amber-400">{name}</p>
                        {note && <p className="font-sans text-xs text-amber-700 dark:text-amber-500">{note}</p>}
                      </div>
                    );
                  })
                ) : (
                  <p className="font-sans text-sm text-muted-foreground">No known allergies</p>
                )}
              </div>
            </div>

            {/* Current medications */}
            <div>
              <p className="text-xs font-bold mb-3 uppercase tracking-wide text-teal-600 dark:text-teal-400">Current Medications</p>
              <div className="flex flex-col gap-2">
                {medsLoading ? (
                  <div className="flex items-center gap-2 py-2">
                    <Loader2 size={16} className="animate-spin text-teal-600" />
                    <span className="text-xs text-slate-400">Loading meds...</span>
                  </div>
                ) : meds && meds.filter(m => m.status === 'active').length > 0 ? (
                  meds.filter(m => m.status === 'active').map((m, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-teal-600 dark:bg-teal-400" />
                      <p className="font-sans text-sm text-foreground">
                        {m.name} {m.dosage ? `· ${m.dosage}` : ''}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="font-sans text-sm text-muted-foreground">No active medications</p>
                )}
              </div>
            </div>
          </div>

          {/* Emergency contacts */}
          <div>
            <p className="text-xs font-bold mb-4 uppercase tracking-wide text-foreground">Emergency Contacts — Call Immediately</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contactsToRender.map((ct, i) => (
                <div key={i} className="rounded-xl border border-border p-4 bg-muted/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center rounded-full flex-shrink-0 w-10 h-10"
                      style={{ backgroundColor: ct.color }}>
                      <span className="text-white text-sm font-bold">{ct.initials}</span>
                    </div>
                    <div>
                      <p className="font-sans font-bold text-sm text-foreground truncate max-w-[130px]">{ct.name}</p>
                      <p className="font-sans text-xs text-muted-foreground truncate max-w-[130px]">{ct.rel}</p>
                    </div>
                  </div>
                  <a href={`tel:${ct.phone.replace(/\D/g, '')}`}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90 bg-red-500 text-white font-sans">
                    <Phone size={15} />
                    {ct.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          { label: 'Primary Care Physician', value: 'Dr. Marcus Aris', sub: '+1 (555) 441-0099', cardClass: 'bg-teal-50/50 dark:bg-teal-950/20 border-teal-200 dark:border-teal-900/50' },
          { label: 'Insurance', value: 'Blue Shield Healthcare', sub: 'Plan #BS-8822', cardClass: 'bg-blue-50/50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900/50' },
          { label: 'Home Address', value: patient.address || '42 Garden St, Brookline, MA 02445', sub: patient.address ? 'Registered Address' : 'Brookline, MA 02445', cardClass: 'bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/50' },
        ].map((info, i) => (
          <div key={i} className={`rounded-xl p-4 border ${info.cardClass}`}>
            <p className="font-sans text-[10px] font-bold text-muted-foreground uppercase mb-1">{info.label}</p>
            <p className="font-sans font-bold text-sm text-foreground truncate">{info.value}</p>
            <p className="font-sans text-xs text-muted-foreground truncate">{info.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
