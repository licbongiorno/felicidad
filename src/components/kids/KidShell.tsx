'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { m } from 'motion/react';
import { useAuth } from '@/providers/AuthProvider';
import { useActiveKid } from '@/hooks/useKids';
import { exitKidMode, hasPin } from '@/lib/kids/kidMode';
import { KID_RESOURCES } from '@/config/safety';
import type { KidActivityLog, KidProfile } from '@/domain/kids';
import { Sheet } from '@/components/ui/Sheet';
import { Mascot } from './Mascot';
import { AvatarIcon } from './KidArt';
import { AskPin } from './PinPad';
import { useNarration } from './useNarration';

interface KidContext {
  kid: KidProfile;
  logs: KidActivityLog[];
  narration: ReturnType<typeof useNarration>;
  log: (a: { activityId: string; feeling?: KidActivityLog['feeling']; intensity?: KidActivityLog['intensity']; note?: string | null }) => void;
}

const Ctx = createContext<KidContext | null>(null);

export function useKid(): KidContext {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useKid debe usarse dentro de <KidShell>');
  return ctx;
}

/**
 * Marco del modo chico: sesión del adulto → consentimiento → chico activo.
 * Sin navegación de adultos; para salir hace falta el código del adulto.
 */
export function KidShell({ children }: { children: ReactNode }) {
  const { user, profile, loading, hasConsent } = useAuth();
  const router = useRouter();
  const { kid, logs, activeId, status, logActivity } = useActiveKid();
  const narration = useNarration(kid);

  const ready = !loading && !!user && profile !== undefined;
  const missingKid = activeId === null || (status === 'ready' && !kid);

  useEffect(() => {
    if (!loading && !user) router.replace('/login');
    else if (ready && (!hasConsent || missingKid)) {
      if (missingKid && activeId) exitKidMode(); // el perfil ya no existe
      router.replace('/familia');
    }
  }, [loading, user, ready, hasConsent, missingKid, activeId, router]);

  if (!ready || !kid || !hasConsent) {
    return (
      <div className="kid-theme flex min-h-screen items-center justify-center bg-kid-bg" aria-label="Cargando">
        <Mascot size={96} />
      </div>
    );
  }

  const ctx: KidContext = {
    kid,
    logs,
    narration,
    log: (a) => logActivity({ kidId: kid.id, ...a }),
  };

  return (
    <Ctx.Provider value={ctx}>
      <div className="kid-theme min-h-screen bg-kid-bg font-kid text-kid-ink">
        <a href="#contenido" className="sr-only z-50 rounded-full bg-kid-primary px-4 py-2 text-kid-onprimary focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Saltar al contenido
        </a>
        <KidHeader kid={kid} narration={narration} />
        <main id="contenido" tabIndex={-1} className="mx-auto max-w-4xl px-4 pb-24 pt-4 outline-none sm:px-6">
          {children}
        </main>
      </div>
    </Ctx.Provider>
  );
}

function KidHeader({ kid, narration }: { kid: KidProfile; narration: ReturnType<typeof useNarration> }) {
  const router = useRouter();
  const [exitOpen, setExitOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b-2 border-kid-line bg-kid-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center gap-2 px-4 py-2.5 sm:px-6">
        <Link href="/chicos" className="flex min-w-0 items-center gap-2.5 rounded-full pr-3" aria-label={`Inicio de ${kid.name}`}>
          <AvatarIcon avatar={kid.avatar} size={44} />
          <span className="truncate text-xl font-extrabold">{kid.name}</span>
        </Link>
        <div className="ml-auto flex items-center gap-1.5">
          {narration.supported && (
            <button
              type="button"
              onClick={narration.toggle}
              aria-pressed={narration.on}
              aria-label="Voz narrada"
              className="flex h-12 items-center gap-1.5 rounded-full px-3 text-base font-bold hover:bg-kid-surface"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M4 9v6h4l5 4V5L8 9H4z" />
                {narration.on ? <path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" /> : <path d="M17 9l5 6M22 9l-5 6" />}
              </svg>
              <span className="hidden sm:inline">Voz</span>
            </button>
          )}
          <KidHelpButton />
          <button type="button" onClick={() => setExitOpen(true)} className="flex h-12 items-center rounded-full px-3 text-base font-bold text-kid-soft hover:bg-kid-surface" aria-haspopup="dialog">
            Salir
          </button>
        </div>
      </div>
      <Sheet open={exitOpen} onClose={() => setExitOpen(false)} title="Salir del modo chico">
        <div className="pb-6">
          {hasPin() ? (
            <AskPin
              onOk={() => {
                exitKidMode();
                setExitOpen(false);
                router.replace('/familia');
              }}
            />
          ) : (
            <p className="text-sm text-stone-600">No hay código guardado en este dispositivo.</p>
          )}
        </div>
      </Sheet>
    </header>
  );
}

/** «Ayuda» para chicos: buscar a un adulto de confianza y, si no hay, líneas gratuitas. */
export function KidHelpButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="flex h-12 items-center gap-1.5 rounded-full bg-kid-surface px-4 text-base font-bold ring-2 ring-kid-line hover:ring-kid-primary/50"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 20.5s-7.5-4.4-7.5-9.7A4 4 0 0 1 12 8.6a4 4 0 0 1 7.5 2.2c0 5.3-7.5 9.7-7.5 9.7z" />
        </svg>
        Ayuda
      </button>
      <Sheet open={open} onClose={() => setOpen(false)} title="¿Necesitas ayuda?">
        <div className="pb-4">
          <div className="flex items-start gap-3">
            <m.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
              <svg viewBox="0 0 48 48" className="h-14 w-14 shrink-0" aria-hidden>
                <circle cx="24" cy="24" r="22" className="fill-sage-100" />
                <path d="M24 34 C14 28 13 21 17.5 18 C20.5 16 23 17.5 24 20 C25 17.5 27.5 16 30.5 18 C35 21 34 28 24 34Z" className="fill-sage-600" />
              </svg>
            </m.div>
            <div>
              <p className="text-lg font-medium leading-snug text-stone-800">Si te sientes muy mal o alguien te hace daño, cuéntaselo ahora a un adulto de confianza.</p>
              <p className="mt-2 text-base text-stone-600">Puede ser tu mamá, tu papá, quien te cuida, tu maestra o tu maestro.</p>
            </div>
          </div>
          <p className="mt-5 text-sm font-medium text-stone-700">Si no hay un adulto cerca, puedes llamar gratis:</p>
          <ul className="mt-2 divide-y divide-stone-100">
            {KID_RESOURCES.map((r) => (
              <li key={r.label} className="flex items-center justify-between gap-4 py-3">
                <span className="min-w-0">
                  <span className="block text-base font-medium text-stone-800">{r.label}</span>
                  {r.detail && <span className="mt-0.5 block text-sm text-stone-600">{r.detail}</span>}
                </span>
                <a href={r.href} aria-label={`Llamar a ${r.label}: ${r.contact}`} className="shrink-0 rounded-full bg-sage-700 px-4 py-2 text-lg font-medium tabular-nums text-stone-50 hover:bg-sage-800">
                  {r.contact}
                </a>
              </li>
            ))}
          </ul>
          <button type="button" onClick={() => setOpen(false)} className="mt-4 w-full rounded-full border border-stone-300 bg-white px-5 py-3 text-base font-medium text-stone-700 hover:bg-stone-50">
            Volver
          </button>
        </div>
      </Sheet>
    </>
  );
}
