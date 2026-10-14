'use client';

import Link from 'next/link';
import { AnimatePresence, m } from 'motion/react';
import { useMemo, useRef, useState } from 'react';
import { DURATION_OPTIONS, FREE_TIMER_ID, freeTimerSteps, INTERVAL_OPTIONS } from '@/domain/freeTimer';
import { useProgressStore } from '@/store/useProgressStore';
import { fadeUp, gentleSpring, phaseVariants, stagger } from '@/lib/motion';
import { haptic } from '@/lib/haptics';
import { Button, buttonStyles } from '@/components/ui/Button';
import { GuidedSequence } from '@/components/practice/GuidedSequence';
import { CountUp, DrawnCheck } from '@/components/motion/Reveal';

type Phase = 'setup' | 'practice' | 'done';

const MIN_PRACTICE_SEC = 60;

/** Meditación sin guía: duración libre y campanas de intervalo. Cuenta como práctica atencional. */
export function FreeTimer() {
  const logSession = useProgressStore((s) => s.logSession);
  const [phase, setPhase] = useState<Phase>('setup');
  const [minutes, setMinutes] = useState<number>(10);
  const [interval, setIntervalMin] = useState<number | null>(5);
  const [practicedSec, setPracticedSec] = useState(0);
  const startedAt = useRef(new Date());
  const steps = useMemo(() => freeTimerSteps(minutes, interval), [minutes, interval]);

  function finish(sec: number) {
    setPracticedSec(sec);
    logSession({
      practiceId: FREE_TIMER_ID,
      family: 'attentional',
      skills: ['attention'],
      source: 'gym',
      startedAt: startedAt.current,
      durationSec: sec,
      completed: sec >= MIN_PRACTICE_SEC,
      moodPre: null,
      moodPost: null,
    });
    haptic('success');
    setPhase('done');
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <m.div key={phase} custom={1} variants={phaseVariants} initial="enter" animate="center" exit="exit">
        {phase === 'setup' ? (
          <m.section variants={stagger(0.06)} initial="hidden" animate="show" className="mx-auto max-w-xl">
            <m.div variants={fadeUp}>
              <Link href="/gimnasio" className="group inline-flex items-center gap-1.5 text-sm text-stone-500 transition-colors hover:text-stone-700">
                <span className="transition-transform duration-300 group-hover:-translate-x-0.5">←</span> Habilidades
              </Link>
            </m.div>
            <m.h1 variants={fadeUp} className="mt-8 font-serif text-4xl text-stone-800 sm:text-5xl">
              Temporizador libre
            </m.h1>
            <m.p variants={fadeUp} className="mt-3 leading-relaxed text-stone-600">
              Para cuando ya conoces la práctica y prefieres el silencio. Elige cuánto tiempo y cada cuánto quieres una
              campana suave que te recuerde volver.
            </m.p>

            <m.div variants={fadeUp} className="mt-10 space-y-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
              <Choice
                label="Duración"
                id="duration"
                options={DURATION_OPTIONS.map((min) => ({ value: min, label: `${min} min` }))}
                value={minutes}
                onChange={(v) => setMinutes(v as number)}
              />
              <Choice
                label="Campana de intervalo"
                id="interval"
                options={INTERVAL_OPTIONS.filter((i) => i === null || i < minutes).map((i) => ({ value: i, label: i === null ? 'Sin intervalos' : `Cada ${i} min` }))}
                value={interval !== null && interval >= minutes ? null : interval}
                onChange={(v) => setIntervalMin(v as number | null)}
              />
            </m.div>

            <m.div variants={fadeUp} className="mt-8 flex justify-end">
              <Button
                onClick={() => {
                  startedAt.current = new Date();
                  setPhase('practice');
                }}
              >
                Preparado
              </Button>
            </m.div>
          </m.section>
        ) : phase === 'practice' ? (
          <div className="pt-4">
            <p className="mb-8 text-center font-serif text-lg text-stone-600">Temporizador libre · {minutes} min</p>
            <GuidedSequence steps={steps} onComplete={finish} onCancel={() => setPhase('setup')} silent />
          </div>
        ) : (
          <m.section variants={stagger(0.12, 0.1)} initial="hidden" animate="show" className="mx-auto max-w-xl text-center">
            <m.div variants={fadeUp} className="flex justify-center">
              <DrawnCheck className="h-10 w-10" />
            </m.div>
            <m.p variants={fadeUp} className="mt-4 text-xs uppercase tracking-[0.2em] text-stone-500">
              Práctica registrada
            </m.p>
            <m.h2 variants={fadeUp} className="mt-3 font-serif text-5xl text-stone-800">
              <CountUp value={Math.max(1, Math.round(practicedSec / 60))} /> <span className="text-3xl text-stone-500">min</span>
            </m.h2>
            <m.div variants={fadeUp} className="mt-10 flex justify-center gap-3">
              <Link href="/dashboard" className={buttonStyles('secondary')}>
                Ver panel
              </Link>
              <Button variant="ghost" onClick={() => setPhase('setup')}>
                Otra sesión
              </Button>
            </m.div>
          </m.section>
        )}
      </m.div>
    </AnimatePresence>
  );
}

function Choice<T extends number | null>({
  label,
  id,
  options,
  value,
  onChange,
}: {
  label: string;
  id: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm text-stone-600">{label}</legend>
      <div role="radiogroup" aria-label={label} className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = o.value === value;
          return (
            <button
              key={String(o.value)}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(o.value)}
              className={`relative rounded-full px-4 py-2 text-sm ring-1 ring-inset transition-colors ${
                active ? 'text-white ring-sage-700' : 'text-stone-700 ring-stone-200 hover:ring-stone-300'
              }`}
            >
              {active && <m.span layoutId={`choice-${id}`} transition={gentleSpring} className="absolute inset-0 rounded-full bg-sage-700" />}
              <span className="relative tabular-nums">{o.label}</span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
