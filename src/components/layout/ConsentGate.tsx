'use client';

import { m } from 'motion/react';
import { useState } from 'react';
import { useAuth } from '@/providers/AuthProvider';
import { SAFETY_DISCLAIMER } from '@/config/safety';
import { fadeUp, stagger } from '@/lib/motion';
import { Button } from '@/components/ui/Button';
import { LogoMark } from '@/components/ui/icons';

const POINTS = [
  'Guardamos tus prácticas, registros de ánimo, antídotos, diario y evaluaciones para mostrarte tu progreso.',
  'Tus datos son privados. Un/a profesional sólo puede leerlos si tú aceptas expresamente un vínculo con él/ella, y puedes revocarlo cuando quieras.',
  'Puedes descargar todos tus datos o borrar tu cuenta en cualquier momento desde Ajustes.',
  'Esta app no monitoriza crisis en tiempo real. Si estás en riesgo, contacta con emergencias o con tu profesional.',
];

/**
 * Consentimiento informado obligatorio. Se muestra si el perfil no tiene la versión
 * vigente aceptada: cubre la primera entrada con Google desde "Iniciar sesión" y
 * cualquier actualización futura del texto (cambiar CONSENT_VERSION obliga a reaceptar).
 */
export function ConsentGate() {
  const { user, profile, signOut } = useAuth();
  const [checked, setChecked] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const renewing = Boolean(profile?.consentVersion);

  async function accept() {
    if (!user) return;
    setBusy(true);
    setError(null);
    try {
      const { acceptConsent } = await import('@/lib/firebase/repositories');
      await acceptConsent(user);
    } catch {
      setError('No pudimos registrar tu consentimiento. Revisa tu conexión e inténtalo de nuevo.');
      setBusy(false);
    }
  }

  return (
    <m.main variants={stagger(0.07, 0.1)} initial="hidden" animate="show" className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-6 py-16">
      <m.div variants={fadeUp}>
        <LogoMark className="h-9 w-9" />
      </m.div>
      <m.h1 variants={fadeUp} className="mt-8 font-serif text-4xl text-stone-800">
        {renewing ? 'Hemos actualizado el consentimiento' : 'Antes de empezar'}
      </m.h1>
      <m.p variants={fadeUp} className="mt-3 leading-relaxed text-stone-600">
        Queremos que sepas exactamente qué hacemos con lo que registras aquí.
      </m.p>
      <m.ul variants={fadeUp} className="mt-8 space-y-4">
        {POINTS.map((p) => (
          <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-stone-700">
            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-sage-600" aria-hidden />
            {p}
          </li>
        ))}
      </m.ul>
      <m.p variants={fadeUp} className="mt-6 text-sm leading-relaxed text-stone-500">
        {SAFETY_DISCLAIMER}
      </m.p>
      <m.label variants={fadeUp} className="mt-8 flex cursor-pointer items-start gap-3 rounded-2xl border border-stone-200 bg-white p-4 text-sm text-stone-700">
        <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} className="mt-0.5 h-4 w-4 accent-sage-700" />
        He leído y acepto el tratamiento de mis datos en estos términos.
      </m.label>
      {error && (
        <p role="alert" className="mt-4 text-sm text-stone-700">
          {error}
        </p>
      )}
      <m.div variants={fadeUp} className="mt-8 flex items-center justify-between">
        <Button variant="ghost" onClick={signOut}>
          Salir
        </Button>
        <Button disabled={!checked || busy} onClick={accept}>
          Aceptar y continuar
        </Button>
      </m.div>
    </m.main>
  );
}
