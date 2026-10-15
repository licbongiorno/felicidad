'use client';

import Link from 'next/link';
import { AnimatePresence, m } from 'motion/react';
import { useEffect } from 'react';
import { MILESTONES, MILESTONE_BY_ID, nextMilestone, type Milestone } from '@/domain/daily';
import { useMilestones } from '@/hooks/useMilestones';
import { useUiStore } from '@/store/useUiStore';
import { haptic } from '@/lib/haptics';
import { gentleSpring } from '@/lib/motion';

/** Dibujo de cada hito: trazos simples, en los colores de la app. */
export function MilestoneBadge({ icon, reached = true, size = 48 }: { icon: Milestone['icon']; reached?: boolean; size?: number }) {
  const s = { fill: 'none', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const paths: Record<Milestone['icon'], React.ReactNode> = {
    semilla: <path d="M24 33c-5 0-8-4-8-9 0-6 5-10 8-12 3 2 8 6 8 12 0 5-3 9-8 9zM24 33v-9" {...s} />,
    hoja: <path d="M14 33c0-12 8-19 20-19 0 12-7 19-20 19zM14 33l11-11" {...s} />,
    pluma: <path d="M33 14c-9 0-17 8-17 18l-2 3M16 32c8 0 15-5 17-18M20 27h7" {...s} />,
    sol: (
      <>
        <circle cx="24" cy="24" r="6" {...s} />
        <path d="M24 11v3M24 34v3M11 24h3M34 24h3M15 15l2 2M31 31l2 2M15 33l2-2M31 17l2-2" {...s} />
      </>
    ),
    arcoiris: <path d="M12 31a12 12 0 0 1 24 0M16 31a8 8 0 0 1 16 0M20 31a4 4 0 0 1 8 0" {...s} />,
    puente: <path d="M11 30h26M14 30v-4a10 10 0 0 1 20 0v4M19 30v-4M24 30v-6M29 30v-4" {...s} />,
    estrella: <path d="M24 12l3.5 7.5 8 1-6 5.5 1.6 8-7.1-4-7.1 4 1.6-8-6-5.5 8-1z" {...s} />,
    arbol: <path d="M24 36V24M24 24c-6 0-9-4-9-8a9 9 0 0 1 18 0c0 4-3 8-9 8zM20 36h8" {...s} />,
    corazon: <path d="M24 34s-10-6-10-13a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7-10 13-10 13z" {...s} />,
    montana: <path d="M10 34l9-15 5 7 4-5 10 13zM19 19l2.5 4" {...s} />,
  };
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      aria-hidden
      className={`shrink-0 rounded-full ${reached ? 'bg-sage-100 stroke-sage-700' : 'bg-stone-100 stroke-stone-400'}`}
    >
      {paths[icon]}
    </svg>
  );
}

/** Celebración breve al alcanzar un hito. Se monta una vez en el área privada. */
export function MilestoneCelebration() {
  const { fresh, dismiss } = useMilestones();
  const immersive = useUiStore((s) => s.immersive);
  const current = !immersive && fresh.length > 0 ? MILESTONE_BY_ID[fresh[0]] : null;

  useEffect(() => {
    if (current) haptic('success');
  }, [current]);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-24 z-40 flex justify-center px-4 xl:bottom-8" aria-live="polite">
      <AnimatePresence>
        {current && (
          <m.div
            key={current.id}
            role="status"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={gentleSpring}
            className="pointer-events-auto flex w-full max-w-md items-center gap-4 rounded-2xl border border-sage-200 bg-white p-4 shadow-lift"
          >
            <m.span initial={{ rotate: -12, scale: 0.6 }} animate={{ rotate: 0, scale: 1 }} transition={{ ...gentleSpring, delay: 0.1 }}>
              <MilestoneBadge icon={current.icon} size={52} />
            </m.span>
            <div className="min-w-0 flex-1">
              <p className="text-xs uppercase tracking-[0.2em] text-sage-700">Nuevo hito</p>
              <p className="font-serif text-xl text-stone-800">{current.title}</p>
              <p className="text-sm leading-snug text-stone-600">{current.body}</p>
              <Link href="/crecimiento#hitos" onClick={() => dismiss(current.id)} className="mt-1 inline-block text-sm text-sage-700 underline decoration-sage-300 underline-offset-2">
                Ver mis hitos
              </Link>
            </div>
            <button
              type="button"
              onClick={() => dismiss(current.id)}
              aria-label="Cerrar"
              className="flex h-9 w-9 shrink-0 items-center justify-center self-start rounded-full text-stone-500 hover:bg-stone-100 hover:text-stone-700"
            >
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <path d="M4 4l8 8M12 4l-8 8" />
              </svg>
            </button>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Lista de hitos para Tu jardín: lo alcanzado y lo próximo, sin bloquear nada. */
export function MilestoneList({ className = '' }: { className?: string }) {
  const { reached } = useMilestones();
  const next = nextMilestone(reached);
  return (
    <section id="hitos" aria-labelledby="hitos-titulo" className={`scroll-mt-24 ${className}`}>
      <h2 id="hitos-titulo" className="font-serif text-3xl text-stone-800">
        Tus hitos
      </h2>
      <p className="mt-2 text-sm text-stone-600">
        {reached.length} de {MILESTONES.length}. Reconocen la práctica, no los resultados, y nunca se pierden.
        {next && ` Lo próximo: ${next.title.toLowerCase()}.`}
      </p>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {MILESTONES.map((ms) => {
          const ok = reached.includes(ms.id);
          return (
            <li key={ms.id} className={`flex items-center gap-3 rounded-2xl border p-4 ${ok ? 'border-sage-200 bg-white shadow-soft' : 'border-dashed border-stone-200'}`}>
              <MilestoneBadge icon={ms.icon} reached={ok} size={44} />
              <div className="min-w-0">
                <p className={`font-medium ${ok ? 'text-stone-800' : 'text-stone-600'}`}>
                  {ms.title}
                  <span className="sr-only">{ok ? ' (alcanzado)' : ' (por alcanzar)'}</span>
                </p>
                <p className="text-sm leading-snug text-stone-600">{ms.body}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
