'use client';

import { AnimatePresence, m, type TargetAndTransition } from 'motion/react';
import { useEffect, useState, type ReactNode } from 'react';

/** Ritmo 4 s inhalación / 6 s exhalación ≈ 6 respiraciones/min (Zaccaro et al., 2018). */
const INHALE_S = 4;
const EXHALE_S = 6;
const R = 94;
const CIRCUMFERENCE = 2 * Math.PI * R;

interface Props {
  breathing: boolean;
  running: boolean;
  paused: boolean;
  /** Avance del paso actual, 0–1: se dibuja como anillo. */
  progress: number;
  onTap: () => void;
  label: string;
  children: ReactNode;
}

/**
 * Orbe central de la práctica.
 * - En pasos de respiración: se expande 4 s y se contrae 6 s, con la indicación escrita.
 * - En otros pasos: flota casi imperceptiblemente (presencia sin demanda).
 * - El anillo exterior muestra el avance del paso; tocar el orbe pausa o reanuda.
 */
export function BreathingOrb({ breathing, running, paused, progress, onTap, label, children }: Props) {
  const [phase, setPhase] = useState<'in' | 'out'>('in');
  const guiding = breathing && running;

  useEffect(() => {
    if (!guiding) return;
    let current: 'in' | 'out' = 'in';
    let timeout: number;
    setPhase('in');
    const loop = () => {
      timeout = window.setTimeout(() => {
        current = current === 'in' ? 'out' : 'in';
        setPhase(current);
        loop();
      }, (current === 'in' ? INHALE_S : EXHALE_S) * 1000);
    };
    loop();
    return () => window.clearTimeout(timeout);
  }, [guiding]);

  const core: TargetAndTransition = guiding
    ? { scale: phase === 'in' ? 1 : 0.66, transition: { duration: phase === 'in' ? INHALE_S : EXHALE_S, ease: 'easeInOut' } }
    : running
      ? { scale: [0.84, 0.89, 0.84], transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' } }
      : { scale: paused ? 0.8 : 0.82, transition: { duration: 1.2, ease: 'easeInOut' } };

  const halo: TargetAndTransition = guiding
    ? {
        scale: phase === 'in' ? 1.12 : 0.7,
        opacity: phase === 'in' ? 0.85 : 0.35,
        transition: { duration: phase === 'in' ? INHALE_S : EXHALE_S, ease: 'easeInOut' },
      }
    : { scale: 0.9, opacity: running ? 0.5 : 0.3, transition: { duration: 1.2 } };

  return (
    <m.button
      type="button"
      onClick={onTap}
      whileTap={{ scale: 0.97 }}
      aria-label={label}
      className="relative mb-10 flex h-60 w-60 items-center justify-center rounded-full focus-visible:ring-offset-4"
    >
      <m.div aria-hidden animate={halo} className="absolute inset-4 rounded-full bg-sage-200 blur-2xl" />

      <svg viewBox="0 0 200 200" className="absolute inset-0 -rotate-90" aria-hidden>
        <circle cx="100" cy="100" r={R} fill="none" strokeWidth="1.25" className="stroke-stone-200" />
        <m.circle
          cx="100"
          cy="100"
          r={R}
          fill="none"
          strokeWidth="1.75"
          strokeLinecap="round"
          className="stroke-sage-500"
          strokeDasharray={CIRCUMFERENCE}
          initial={false}
          animate={{ strokeDashoffset: CIRCUMFERENCE * (1 - progress) }}
          transition={{ duration: 0.3, ease: 'linear' }}
        />
      </svg>

      <m.div
        aria-hidden
        animate={core}
        className="absolute inset-7 rounded-full bg-gradient-to-br from-white via-sage-50 to-sage-200 shadow-[inset_0_-8px_24px_rgba(93,115,86,0.18),0_12px_40px_-16px_rgba(93,115,86,0.45)]"
      />

      <div className="relative flex flex-col items-center">
        {children}
        <div className="mt-1 h-5">
          <AnimatePresence mode="wait">
            {guiding ? (
              <m.span
                key={phase}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.5 }}
                className="text-xs uppercase tracking-[0.25em] text-sage-700"
              >
                {phase === 'in' ? 'Inhala' : 'Exhala'}
              </m.span>
            ) : paused ? (
              <m.span key="pause" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-xs uppercase tracking-[0.25em] text-stone-500">
                En pausa
              </m.span>
            ) : !running ? (
              <m.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-xs uppercase tracking-[0.25em] text-stone-500">
                Toca para comenzar
              </m.span>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </m.button>
  );
}
