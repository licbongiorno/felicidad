'use client';

import { sendEmailVerification } from 'firebase/auth';
import { useState } from 'react';
import { useAuth } from '@/providers/AuthProvider';

/** Aviso discreto para cuentas de correo/contraseña sin verificar (Google ya verifica). */
export function VerifyEmailNotice() {
  const { user } = useAuth();
  const [state, setState] = useState<'idle' | 'sent' | 'error'>('idle');
  const isPassword = user?.providerData?.some((p) => p.providerId === 'password');
  if (!user || user.emailVerified || !isPassword) return null;

  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-6 print:hidden">
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700">
        <span>Verifica tu correo para proteger tu cuenta y poder recuperarla.</span>
        {state === 'sent' ? (
          <span className="text-sage-700">Enviado. Revisa tu bandeja de entrada.</span>
        ) : (
          <button
            type="button"
            onClick={() =>
              sendEmailVerification(user)
                .then(() => setState('sent'))
                .catch(() => setState('error'))
            }
            className="rounded-full px-3 py-1 font-medium text-sage-700 transition-colors hover:bg-sage-50"
          >
            {state === 'error' ? 'Reintentar envío' : 'Enviar enlace'}
          </button>
        )}
      </div>
    </div>
  );
}
