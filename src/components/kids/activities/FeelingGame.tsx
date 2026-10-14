'use client';

import { AnimatePresence, m } from 'motion/react';
import { useEffect, useState } from 'react';
import { FEELING_BY_ID, type KidActivity, type KidFeelingId } from '@/domain/kids';
import { Mascot } from '../Mascot';
import { FeelingFace } from '../KidArt';
import { useKid } from '../KidShell';
import { kidButton } from '../ui';

type GameActivity = Extract<KidActivity, { kind: 'juego' }>;

/**
 * «Adivina la emoción»: una situación y tres caras. Sin puntaje ni errores: si la respuesta
 * no coincide, la mascota cuenta qué siente el personaje y que otras emociones también pueden estar.
 */
export function FeelingGame({ activity, onFinish }: { activity: GameActivity; onFinish: () => void }) {
  const { narration } = useKid();
  const [i, setI] = useState(-1);
  const [picked, setPicked] = useState<KidFeelingId | null>(null);
  const round = activity.rounds[i];

  useEffect(() => {
    setPicked(null);
    narration.say(i < 0 ? activity.intro : `${round.situation} ¿Qué siente?`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i]);

  if (i < 0) {
    return (
      <div className="flex flex-col items-center text-center">
        <Mascot mood="feliz" size={128} />
        <p className="mt-3 max-w-xl text-2xl font-bold leading-snug">{activity.intro}</p>
        <button type="button" onClick={() => setI(0)} className={kidButton('primary', 'mt-6 min-w-44')}>
          ¡A jugar!
        </button>
      </div>
    );
  }

  const answer = FEELING_BY_ID[round.answer];
  const right = picked === round.answer;
  const reply = picked
    ? right
      ? `¡Sí! Siente ${answer.label.toLowerCase()}.`
      : `Puede ser. Yo creo que siente ${answer.label.toLowerCase()}. A veces sentimos varias cosas a la vez.`
    : null;

  return (
    <div className="flex flex-col items-center text-center">
      <p className="text-lg font-bold text-kid-soft">
        Ronda {i + 1} de {activity.rounds.length}
      </p>
      <AnimatePresence mode="wait">
        <m.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="w-full">
          <p className="mx-auto mt-2 max-w-xl rounded-3xl bg-kid-surface px-6 py-5 text-2xl font-bold leading-snug ring-2 ring-kid-line">{round.situation}</p>
          <p className="mt-5 text-xl font-extrabold">¿Qué siente?</p>
          <div className="mt-3 flex flex-wrap justify-center gap-3" role="radiogroup" aria-label="¿Qué siente?">
            {round.options.map((f) => (
              <button
                key={f}
                type="button"
                role="radio"
                aria-checked={picked === f}
                disabled={!!picked}
                onClick={() => {
                  setPicked(f);
                  const ok = f === round.answer;
                  narration.say(ok ? `¡Sí! Siente ${answer.label.toLowerCase()}.` : `Yo creo que siente ${answer.label.toLowerCase()}.`);
                }}
                className={`flex w-28 flex-col items-center gap-1 rounded-3xl p-3 text-lg font-bold ring-2 transition-all disabled:cursor-default ${
                  picked && f === round.answer ? 'bg-kid-tint-mint ring-kid-paint-mint' : picked === f ? 'bg-kid-tint-sun ring-kid-line' : 'bg-kid-surface ring-kid-line hover:ring-kid-primary/50'
                }`}
              >
                <FeelingFace feeling={f} size={64} />
                {FEELING_BY_ID[f].label}
              </button>
            ))}
          </div>
        </m.div>
      </AnimatePresence>
      {reply && (
        <m.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-5 flex items-center gap-3 text-left" aria-live="polite">
          <Mascot mood={right ? 'orgullo' : 'piensa'} motion={right ? 'cheer' : 'idle'} size={72} />
          <p className="max-w-md text-xl font-bold">{reply}</p>
        </m.div>
      )}
      <button
        type="button"
        disabled={!picked}
        onClick={() => (i === activity.rounds.length - 1 ? onFinish() : setI(i + 1))}
        className={kidButton('primary', 'mt-6 min-w-40')}
      >
        {i === activity.rounds.length - 1 ? '¡Terminé!' : 'Siguiente'}
      </button>
    </div>
  );
}
