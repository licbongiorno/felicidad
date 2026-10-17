'use client';

import { m } from 'motion/react';
import { useEffect, useState } from 'react';
import { FEELING_BY_ID, levelIntensity, type KidActivity } from '@/domain/kids';
import type { FinishPayload } from '../ActivityRunner';
import { Mascot } from '../Mascot';
import { useKid } from '../KidShell';
import { kidButton } from '../ui';

type ThermometerActivity = Extract<KidActivity, { kind: 'termometro' }>;

/** Del nivel 1 (tranquilo) al 5 (a punto de explotar): pinta el termómetro de abajo hacia arriba. */
const COLORS = ['bg-kid-paint-mint', 'bg-kid-paint-sky', 'bg-kid-paint-sun', 'bg-kid-paint-orange', 'bg-kid-paint-coral'];

/**
 * Termómetro de una emoción: el chico marca qué tan fuerte la siente y la mascota propone qué
 * hacer en ese nivel. No hay niveles buenos ni malos: todos se aceptan.
 */
export function Thermometer({ activity, onFinish }: { activity: ThermometerActivity; onFinish: (p: FinishPayload) => void }) {
  const { narration } = useKid();
  const [level, setLevel] = useState<number | null>(null);
  const feeling = FEELING_BY_ID[activity.feeling];

  useEffect(() => {
    narration.say(activity.intro);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pick = (i: number) => {
    setLevel(i);
    narration.say(`${activity.levels[i].label}. ${activity.levels[i].tip}`);
  };

  return (
    <div className="flex flex-col items-center text-center">
      <Mascot mood={level === null ? 'piensa' : level >= 3 ? 'calma' : 'feliz'} size={110} />
      <p className="mt-2 max-w-xl text-2xl font-bold leading-snug">{activity.intro}</p>
      <div className="mt-5 flex w-full max-w-md flex-col-reverse gap-2" role="radiogroup" aria-label={`¿Qué tan fuerte es ${feeling.label.toLowerCase()}?`}>
        {activity.levels.map((l, i) => {
          const filled = level !== null && i <= level;
          return (
            <button
              key={l.label}
              type="button"
              role="radio"
              aria-checked={level === i}
              onClick={() => pick(i)}
              className={`flex min-h-14 items-center gap-3 rounded-2xl px-4 py-2 text-left text-lg font-bold ring-2 transition-colors ${
                level === i ? 'ring-kid-primary' : 'ring-kid-line hover:ring-kid-primary/50'
              } bg-kid-surface`}
            >
              <span className={`h-8 w-8 shrink-0 rounded-full ring-2 ring-kid-line transition-colors ${filled ? COLORS[i] : 'bg-kid-bg'}`} aria-hidden />
              <span>
                <span className="text-kid-soft">{i + 1}.</span> {l.label}
              </span>
            </button>
          );
        })}
      </div>
      {level !== null && (
        <m.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-5 max-w-md rounded-3xl bg-kid-tint-sky px-5 py-4 text-left ring-2 ring-kid-line" aria-live="polite">
          <p className="text-xl font-bold">{activity.levels[level].tip}</p>
        </m.div>
      )}
      <button
        type="button"
        disabled={level === null}
        onClick={() => level !== null && onFinish({ feeling: activity.feeling, intensity: levelIntensity(level + 1) })}
        className={kidButton('primary', 'mt-6 min-w-40')}
      >
        ¡Listo!
      </button>
    </div>
  );
}
