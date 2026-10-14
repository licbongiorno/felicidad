'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { useEffect, useMemo } from 'react';
import { challengeOfWeek, challengeProgress } from '@/domain/growth';
import { useProgressStore } from '@/store/useProgressStore';
import { useUiStore } from '@/store/useUiStore';
import { EASE_OUT } from '@/lib/motion';
import { buttonStyles } from '@/components/ui/Button';

/**
 * Desafío semanal: opcional, se puede ocultar y no se «pierde». Si la semana termina sin
 * completarlo, simplemente llega otro: no queda registro de lo que no se hizo.
 */
export function WeeklyChallenge({ className = '' }: { className?: string }) {
  const sessions = useProgressStore((s) => s.sessions);
  const journal = useProgressStore((s) => s.journal);
  const { challenge: visible, setPref, hydrate, hydrated } = useUiStore();
  useEffect(() => hydrate(), [hydrate]);

  const challenge = useMemo(() => challengeOfWeek(), []);
  const progress = useMemo(() => challengeProgress(challenge, sessions, journal), [challenge, sessions, journal]);

  if (!hydrated) return null;
  if (!visible) {
    return (
      <button type="button" onClick={() => setPref('challenge', true)} className={`text-left text-sm text-stone-500 underline decoration-stone-300 underline-offset-2 hover:text-stone-700 ${className}`}>
        Mostrar el desafío de la semana
      </button>
    );
  }

  return (
    <section className={`rounded-2xl border border-stone-200/80 bg-white p-6 shadow-soft ${className}`} aria-label="Desafío de la semana">
      <div className="flex items-start justify-between gap-4">
        <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Desafío de la semana · opcional</p>
        <button type="button" onClick={() => setPref('challenge', false)} className="text-xs text-stone-500 hover:text-stone-700" aria-label="Ocultar el desafío de la semana">
          Ocultar
        </button>
      </div>
      <h3 className="mt-3 font-serif text-2xl text-stone-800">{challenge.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-stone-600">{challenge.why}</p>

      <div className="mt-5 flex items-center gap-1.5" role="progressbar" aria-valuemin={0} aria-valuemax={progress.target} aria-valuenow={progress.done} aria-label="Progreso del desafío">
        {Array.from({ length: progress.target }, (_, i) => (
          <span key={i} className="relative h-2 flex-1 overflow-hidden rounded-full bg-stone-100">
            {i < progress.done && (
              <m.span
                className="absolute inset-0 rounded-full bg-sage-500"
                style={{ originX: 0 }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: EASE_OUT }}
              />
            )}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm tabular-nums text-stone-600">
          {progress.complete ? 'Completado esta semana. Lo que practicaste ya es tuyo.' : `${progress.done} de ${progress.target}`}
        </p>
        {!progress.complete && (
          <Link href={challenge.href} className={buttonStyles('secondary')}>
            {challenge.cta} →
          </Link>
        )}
      </div>
      <p className="mt-4 text-xs leading-relaxed text-stone-500">Si esta semana no se da, no pasa nada: el lunes llega otro.</p>
    </section>
  );
}
