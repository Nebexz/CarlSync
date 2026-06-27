import { useState } from 'react';
import { Heart, Mail, Lock, User, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const C = { green: '#10b981', teal: '#0d9488', dark: '#1e2533', border: '#e2e8f0', text: '#0f172a', sub: '#64748b', muted: '#94a3b8' };

export function AuthScreen() {
  const { signIn, signUp } = useAuth();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (mode === 'signin') {
        await signIn(form.email, form.password);
      } else {
        if (!form.name.trim()) { setError('Please enter your name.'); setLoading(false); return; }
        await signUp(form.name, form.email, form.password);
      }
    } catch (err: any) {
      const msg = err?.message || '';
      console.error('Auth error detail:', err);
      if (msg.includes('Invalid login credentials') || msg.includes('Email not confirmed') || msg.includes('user_not_found') || msg.includes('invalid_credentials')) {
        setError('Invalid email or password.');
      } else if (msg.includes('already registered') || msg.includes('User already exists')) {
        setError('An account with this email already exists.');
      } else if (msg.includes('Password should be')) {
        setError('Password must be at least 8 characters long.');
      } else {
        setError('Authentication failed. Please check your credentials and try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const inputBase = "w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 font-sans";

  return (
    <div className="flex h-screen bg-background text-foreground transition-colors duration-200">

      {/* ── Left brand panel ── */}
      <div className="hidden lg:flex flex-col justify-between p-14 flex-shrink-0 bg-slate-900 text-slate-100 w-[480px]">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-xl bg-emerald-500 w-10 h-10">
            <Heart size={20} className="text-white fill-white" />
          </div>
          <span className="font-sans font-bold text-xl text-white">CareSync</span>
        </div>

        {/* Tagline */}
        <div>
          <h2 className="font-outfit font-bold text-4xl text-white leading-tight mb-4">
            Helping families<br />care together.
          </h2>
          <p className="font-sans text-base text-slate-400 leading-relaxed mb-10">
            One place for medications, appointments, tasks, and family coordination — so no one carries the weight alone.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-col gap-4">
            {[
              { icon: '💊', label: 'Medication tracking with dose reminders' },
              { icon: '👨‍👩‍👧', label: 'Real-time family collaboration' },
              { icon: '🚨', label: 'Instant emergency card access' },
              { icon: '📋', label: 'Shared task management' },
            ].map(f => (
              <div key={f.label} className="flex items-center gap-3">
                <span className="text-lg">{f.icon}</span>
                <span className="font-sans text-sm text-slate-300">{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <p className="font-sans text-xs text-slate-500">
          Designed for families navigating caregiving together.
        </p>
      </div>

      {/* ── Right form panel ── */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background overflow-y-auto">
        <div className="w-full max-w-[420px]">

          {/* Mobile logo */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="flex items-center justify-center rounded-lg bg-emerald-500 w-8 h-8">
              <Heart size={16} className="text-white fill-white" />
            </div>
            <span className="font-sans font-bold text-lg text-foreground">CareSync</span>
          </div>

          <div className="mb-8">
            <h1 className="font-outfit font-bold text-2xl md:text-3xl text-foreground mb-1">
              {mode === 'signin' ? 'Welcome back' : 'Create your account'}
            </h1>
            <p className="font-sans text-sm text-muted-foreground">
              {mode === 'signin'
                ? 'Sign in to manage your care circle.'
                : "Set up your family's care hub in minutes."}
            </p>
          </div>

          {/* Mode toggle */}
          <div className="flex rounded-xl p-1 mb-8 bg-muted">
            {(['signin', 'signup'] as const).map(m => {
              const active = mode === m;
              return (
                <button key={m} onClick={() => { setMode(m); setError(''); }}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all font-sans ${
                    active
                      ? 'bg-card text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}>
                  {m === 'signin' ? 'Sign In' : 'Sign Up'}
                </button>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name (signup only) */}
            {mode === 'signup' && (
              <div className="relative">
                <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                <input required type="text" placeholder="Your full name"
                  value={form.name} onChange={set('name')}
                  className={inputBase} />
              </div>
            )}

            {/* Email */}
            <div className="relative">
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              <input required type="email" placeholder="Email address"
                value={form.email} onChange={set('email')}
                className={inputBase} />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              <input required type={showPass ? 'text' : 'password'} placeholder="Password (8+ characters)"
                minLength={8} value={form.password} onChange={set('password')}
                className={`${inputBase} pr-12`} />
              <button type="button" onClick={() => setShowPass(p => !p)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-start gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                <AlertCircle size={15} className="text-red-500 flex-shrink-0 mt-0.5" />
                <p className="font-sans text-xs text-red-600 dark:text-red-400">{error}</p>
              </div>
            )}

            {/* Submit */}
            <button type="submit" disabled={loading}
              className="w-full py-3.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60 mt-1 bg-emerald-600 font-sans">
              {loading
                ? (mode === 'signin' ? 'Signing in…' : 'Creating account…')
                : (mode === 'signin' ? 'Sign In' : 'Create Account')}
            </button>
          </form>

          {mode === 'signin' && (
            <p className="text-center mt-6 font-sans text-xs text-muted-foreground">
              Don't have an account?{' '}
              <button onClick={() => { setMode('signup'); setError(''); }}
                className="text-teal-600 dark:text-teal-400 font-semibold hover:underline">
                Sign up free
              </button>
            </p>
          )}

          <p className="text-center mt-8 font-sans text-[11px] text-muted-foreground/60 leading-relaxed">
            CareSync is a care coordination tool. Do not store highly sensitive personal health information you would not share with family.
          </p>

          <div className="text-center mt-4">
            <button type="button" onClick={() => setShowPrivacy(true)}
              className="text-xs text-muted-foreground/70 hover:text-emerald-500 hover:underline transition-colors font-sans">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>

      {/* ── Privacy Policy Modal ── */}
      {showPrivacy && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="relative bg-card text-foreground rounded-2xl max-w-lg w-full max-h-[80vh] overflow-hidden flex flex-col p-6 shadow-2xl border border-border">
            <h2 className="font-outfit font-bold text-xl mb-4 text-emerald-500">Privacy Policy</h2>
            
            <div className="font-sans text-xs text-muted-foreground space-y-4 leading-relaxed overflow-y-auto pr-2 flex-1">
              <p><strong>Last Updated: June 2026</strong></p>
              <p>At CareSync, we believe in radical transparency. We are committed to protecting the privacy of your family's care circle data.</p>
              
              <h3 className="font-semibold text-foreground mt-2">1. Data Storage and Location</h3>
              <p>Your user profile and patient care circle details are stored securely using Supabase database infrastructure. Data is encrypted at rest and in transit using SSL/TLS protocols.</p>

              <h3 className="font-semibold text-foreground mt-2">2. What We Collect</h3>
              <p>We only collect the data you explicitly provide: names, emails (for secure auth), care circle member listings, medications, and care log timeline events. We do not track location or read device storage.</p>

              <h3 className="font-semibold text-foreground mt-2">3. Data Sharing & Security</h3>
              <p><strong>We never sell, lease, or distribute your family's data to third parties.</strong> Access to a patient's care circle is strictly restricted via 6-character secure codes and Supabase Row Level Security (RLS) policies. Only users with the active invite code can join a circle.</p>

              <h3 className="font-semibold text-foreground mt-2">4. Your Control</h3>
              <p>You can leave a care circle or delete your account completely at any time from the settings screen. Deleting your account deletes all care logs associated with it.</p>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button onClick={() => setShowPrivacy(false)}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-sm font-semibold rounded-xl transition-colors">
                Close Policy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
