'use client';

import { m } from 'motion/react';
import { useEffect, useState } from 'react';
import type { KidActivity } from '@/domain/kids';
import type { FinishPayload } from '../ActivityRunner';
import { Mascot } from '../Mascot';
import { useKid } from '../KidShell';
import { kidButton } from '../ui';

type LadderActivity = Extract<KidActivity, { kind: 'escalera' }>;

/**
 * Escalera de valentía: escalones del más fácil (abajo) al más difícil (arriba), con la meta en
 * la cima. El chico elige el próximo escalón que quiere probar; el adulto lo ve en el registro.
 */
export function Ladder({ activity, onFinish }: { activity: LadderActivity; onFinish: (p: FinishPayload) => void }) {
  const { narration } = useKid();
  const [picked, setPicked] = useState<number | null>(null);

  useEffect(() => {
    narration.say(activity.intro);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center text-center">
      <Mascot mood="valiente" size={110} />
      <p className="mt-2 max-w-xl text-2xl font-bold leading-snug">{activity.intro}</p>
      <p className="mt-4 rounded-full bg-kid-tint-sun px-5 py-2 text-lg font-extrabold ring-2 ring-kid-line">Meta: {activity.goal}</p>
      <div className="mt-3 flex w-full max-w-md flex-col-reverse gap-2" role="radiogroup" aria-label="Elige tu próximo escalón">
        {activity.rungs.map((r, i) => (
          <button
            key={r}
            type="button"
            role="radio"
            aria-checked={picked === i}
            onClick={() => {
              setPicked(i);
              narration.say(r);
            }}
            style={{ marginInline: `${(activity.rungs.length - 1 - i) * 0.5}rem` }}
            className={`min-h-14 rounded-2xl px-5 py-3 text-left text-lg font-bold ring-2 transition-colors ${
              picked === i ? 'bg-kid-primary text-kid-onprimary ring-kid-primary' : 'bg-kid-surface ring-kid-line hover:ring-kid-primary/50'
            }`}
          >
            <span className={picked === i ? '' : 'text-kid-soft'}>Escalón {i + 1}.</span> {r}
          </button>
        ))}
      </div>
      {picked !== null && (
        <m.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 max-w-md text-lg text-kid-soft" aria-live="polite">
          Pruébalo con tu adulto. Si cuesta mucho, baja un escalón: también cuenta.
        </m.p>
      )}
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <button type="button" disabled={picked === null} onClick={() => picked !== null && onFinish({ note: `Escalón elegido: ${activity.rungs[picked]}` })} className={kidButton('soft')}>
          Lo voy a probar
        </button>
        <button type="button" disabled={picked === null} onClick={() => picked !== null && onFinish({ note: `Escalón hecho: ${activity.rungs[picked]}` })} className={kidButton('primary')}>
          ¡Ya lo hice!
        </button>
      </div>
    </div>
  );
}
