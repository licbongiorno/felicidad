'use client';

import { AnimatePresence, m } from 'motion/react';
import { useEffect, useState } from 'react';
import type { KidStep } from '@/domain/kids';
import { playChime } from '@/lib/chime';
import { Mascot } from '../Mascot';
import { useKid } from '../KidShell';
import { kidButton } from '../ui';

/**
 * Actividad guiada paso a paso: la mascota cambia de expresión, la voz lee cada paso y las
 * preguntas de opción múltiple responden con una explicación (nunca con «mal»).
 */
export function Steps({ steps, onFinish, finishLabel = '¡Terminé!' }: { steps: KidStep[]; onFinish: () => void; finishLabel?: string }) {
  const { narration } = useKid();
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const step = steps[i];
  const last = i === steps.length - 1;
  const needsChoice = !!step.choice && picked === null;

  useEffect(() => {
    setPicked(null);
    narration.say(step.choice ? `${step.text} ${step.choice.question}` : step.text);
    if (step.sound) playChime(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i]);

  return (
    <div>
      <div className="flex justify-center gap-1.5" aria-label={`Paso ${i + 1} de ${steps.length}`} role="img">
        {steps.map((_, k) => (
          <span key={k} className={`h-2.5 rounded-full transition-all duration-500 ${k <= i ? 'w-7 bg-kid-primary' : 'w-2.5 bg-kid-line'}`} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <m.section
          key={i}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.35 }}
          className="mt-5 flex flex-col items-center text-center"
          aria-live="polite"
        >
          <Mascot mood={step.mood ?? 'feliz'} size={128} />
          <p className="mt-3 max-w-xl text-2xl font-bold leading-snug sm:text-3xl">{step.text}</p>
          {step.seconds && !step.choice && <TimeRing seconds={step.seconds} key={`ring-${i}`} />}
          {step.sound && (
            <button type="button" onClick={() => playChime(1)} className={kidButton('soft', 'mt-4')}>
              Sonar otra vez
            </button>
          )}
          {step.choice && (
            <div className="mt-5 w-full max-w-xl">
              <p className="text-xl font-extrabold">{step.choice.question}</p>
              <div className="mt-3 grid gap-2.5" role="radiogroup" aria-label={step.choice.question}>
                {step.choice.options.map((o, k) => (
                  <button
                    key={o.label}
                    type="button"
                    role="radio"
                    aria-checked={picked === k}
                    onClick={() => {
                      setPicked(k);
                      narration.say(o.reply);
                    }}
                    className={`min-h-14 rounded-2xl px-5 py-3 text-left text-lg font-bold ring-2 transition-colors ${
                      picked === k ? 'bg-kid-primary text-kid-onprimary ring-kid-primary' : 'bg-kid-surface ring-kid-line hover:ring-kid-primary/50'
                    }`}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
              {picked !== null && (
                <m.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-2xl bg-kid-tint-sun px-5 py-4 text-left text-lg font-bold">
                  {step.choice.options[picked].reply}
                </m.p>
              )}
            </div>
          )}
        </m.section>
      </AnimatePresence>
      <div className="mt-8 flex justify-center gap-3">
        {i > 0 && (
          <button type="button" onClick={() => setI(i - 1)} className={kidButton('ghost')}>
            Atrás
          </button>
        )}
        <button type="button" disabled={needsChoice} onClick={() => (last ? onFinish() : setI(i + 1))} className={kidButton('primary', 'min-w-40')}>
          {last ? finishLabel : 'Siguiente'}
        </button>
      </div>
    </div>
  );
}

/** Círculo que se llena con el tiempo sugerido del paso. No es una cuenta regresiva: no apura. */
function TimeRing({ seconds }: { seconds: number }) {
  const r = 22;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 52 52" className="mt-4 h-14 w-14" aria-hidden>
      <circle cx="26" cy="26" r={r} className="fill-none stroke-kid-line" strokeWidth="5" />
      <m.circle
        cx="26"
        cy="26"
        r={r}
        className="fill-none stroke-kid-paint-mint"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: seconds, ease: 'linear' }}
        transform="rotate(-90 26 26)"
      />
    </svg>
  );
}
