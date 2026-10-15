'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/providers/AuthProvider';
import { AppNav } from '@/components/layout/AppNav';
import { SyncNotice } from '@/components/layout/SyncNotice';
import { ConsentGate } from '@/components/layout/ConsentGate';
import { VerifyEmailNotice } from '@/components/layout/VerifyEmailNotice';
import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { SearchLauncher } from '@/components/search/SearchLauncher';
import { useActiveKidId } from '@/lib/kids/kidMode';
import { MilestoneCelebration } from '@/components/growth/Milestones';

/**
 * Área privada. La protección aquí es de UX; la seguridad real la imponen las reglas
 * de Firestore (sin auth no se lee ni escribe nada).
 * Orden: sesión → perfil cargado → consentimiento vigente → app.
 */
export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  const { user, profile, loading, hasConsent } = useAuth();
  const router = useRouter();
  // En modo chico, el área de adultos no está disponible: se sale con el código del adulto.
  const kidMode = !!useActiveKidId();

  useEffect(() => {
    if (!loading && !user) router.replace('/login');
    else if (kidMode) router.replace('/chicos');
  }, [user, loading, kidMode, router]);

  if (loading || !user || profile === undefined || kidMode) {
    return <LoadingScreen />;
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
      <MilestoneCelebration />
      <main id="contenido" tabIndex={-1} className="mx-auto outline-none max-w-5xl px-5 pb-32 pt-10 sm:px-6 sm:pt-12 xl:pb-16 print:max-w-none print:p-0">{children}</main>
    </>
  );
}
