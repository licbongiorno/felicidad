'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, m } from 'motion/react';
import {
  browserPopupRedirectResolver,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { appCheckReady, getFirebaseAuth } from '@/lib/firebase/client';
import { ensureUserProfile } from '@/lib/firebase/repositories';
import { useAuth } from '@/providers/AuthProvider';
import { MIN_AGE, SAFETY_DISCLAIMER } from '@/config/safety';
import { Button } from '@/components/ui/Button';
import { LogoMark } from '@/components/ui/icons';
import { collapse, EASE_OUT } from '@/lib/motion';

type Mode = 'signin' | 'signup';

export default function LoginPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [mode, setMode] = useState<Mode>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    if (user) router.replace('/dashboard');
  }, [user, router]);

  async function run(action: () => Promise<void>) {
    setError(null);
    setBusy(true);
    try {
      await action();
      router.replace('/dashboard');
    } catch {
      setError(mode === 'signin' ? 'No pudimos iniciar sesión con esos datos.' : 'No pudimos crear la cuenta.');
    } finally {
      setBusy(false);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    run(async () => {
      const auth = getFirebaseAuth();
      const cred =
        mode === 'signin'
          ? await signInWithEmailAndPassword(auth, email, password)
          : await createUserWithEmailAndPassword(auth, email, password);
      await appCheckReady();
      await ensureUserProfile(cred.user, consent);
      if (mode === 'signup') await sendEmailVerification(cred.user).catch(() => undefined);
    });
  }

  function onGoogle() {
    run(async () => {
      const cred = await signInWithPopup(getFirebaseAuth(), new GoogleAuthProvider(), browserPopupRedirectResolver);
      await appCheckReady();
      await ensureUserProfile(cred.user, consent);
    });
  }

  const needsConsent = mode === 'signup' && !consent;

  async function resetPassword() {
    setError(null);
    if (!email) return setError('Escribe tu correo arriba y vuelve a pulsar.');
    // Mismo mensaje exista o no la cuenta: no revelar qué correos están registrados.
    await sendPasswordResetEmail(getFirebaseAuth(), email).catch(() => undefined);
    setNotice('Si existe una cuenta con ese correo, te enviamos un enlace para restablecer la contraseña.');
  }

  return (
    <m.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE_OUT }}
      className="mx-auto flex min-h-screen max-w-sm flex-col justify-center px-6 py-16"
    >
      <LogoMark className="mb-8 h-8 w-8" />
      <AnimatePresence mode="wait" initial={false}>
        <m.h1
          key={mode}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="font-serif text-4xl text-stone-800"
        >
          {mode === 'signin' ? 'Iniciar sesión' : 'Crear cuenta'}
        </m.h1>
      </AnimatePresence>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <input
          type="email"
          required
          autoComplete="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm transition-[border-color,box-shadow] duration-200 placeholder:text-stone-500 focus:border-sage-400 focus:shadow-soft focus:outline-none"
        />
        <input
          type="password"
          required
          minLength={8}
          autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm transition-[border-color,box-shadow] duration-200 placeholder:text-stone-500 focus:border-sage-400 focus:shadow-soft focus:outline-none"
        />

        <AnimatePresence initial={false}>
        {mode === 'signup' && (
          <m.div key="consent" variants={collapse} initial="hidden" animate="show" exit="exit" className="overflow-hidden">
          <label className="flex items-start gap-3 pt-1 text-xs leading-relaxed text-stone-600">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 accent-sage-700"
            />
            <span>
              Tengo {MIN_AGE} años o más y acepto el tratamiento de mis registros de práctica y estado de ánimo con
              fines de seguimiento personal y, si lo autorizo expresamente, clínico. {SAFETY_DISCLAIMER}
            </span>
          </label>
          </m.div>
        )}
        </AnimatePresence>

        {error && <p role="alert" className="text-sm text-stone-700">{error}</p>}
        {notice && <p role="status" className="text-sm text-sage-700">{notice}</p>}

        {mode === 'signin' && (
          <button type="button" onClick={resetPassword} className="text-sm text-stone-600 underline-offset-2 hover:text-stone-800 hover:underline">
            ¿Olvidaste tu contraseña?
          </button>
        )}

        <Button type="submit" disabled={busy || needsConsent} className="w-full">
          {mode === 'signin' ? 'Entrar' : 'Crear cuenta'}
        </Button>
      </form>

      <Button variant="secondary" disabled={busy || needsConsent} onClick={onGoogle} className="mt-3 w-full">
        Continuar con Google
      </Button>

      <button
        type="button"
        onClick={() => setMode((m) => (m === 'signin' ? 'signup' : 'signin'))}
        className="mt-8 text-sm text-stone-600 hover:text-stone-800"
      >
        {mode === 'signin' ? '¿No tienes cuenta? Crear una' : '¿Ya tienes cuenta? Iniciar sesión'}
      </button>
    </m.main>
  );
}
