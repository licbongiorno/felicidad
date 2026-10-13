'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { m } from 'motion/react';
import { useAuth } from '@/providers/AuthProvider';
import { AppNav } from '@/components/layout/AppNav';
import { SyncNotice } from '@/components/layout/SyncNotice';
import { ConsentGate } from '@/components/layout/ConsentGate';
import { VerifyEmailNotice } from '@/components/layout/VerifyEmailNotice';
import { LogoMark } from '@/components/ui/icons';
import { SearchLauncher } from '@/components/search/SearchLauncher';

/**
 * Área privada. La protección aquí es de UX; la seguridad real la imponen las reglas
 * de Firestore (sin auth no se lee ni escribe nada).
 * Orden: sesión → perfil cargado → consentimiento vigente → app.
 */
export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  const { user, profile, loading, hasConsent } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.replace('/login');
  }, [user, loading, router]);

  if (loading || !user || profile === undefined) {
    return (
      <div className="flex min-h-screen items-center justify-center" aria-label="Cargando">
        <m.div animate={{ scale: [0.9, 1, 0.9], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}>
          <LogoMark className="h-10 w-10" />
        </m.div>
      </div>
    );
  }

  if (!hasConsent) return <ConsentGate />;

  return (
    <>
      <a
        href="#contenido"
        className="sr-only z-50 rounded-full bg-sage-700 px-4 py-2 text-sm text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Saltar al contenido
      </a>
      <AppNav />
      <SearchLauncher />
      <VerifyEmailNotice />
      <SyncNotice />
      <main id="contenido" tabIndex={-1} className="mx-auto outline-none max-w-5xl px-5 pb-32 pt-10 sm:px-6 sm:pt-12 xl:pb-16 print:max-w-none print:p-0">{children}</main>
    </>
  );
}
