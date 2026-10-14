'use client';

import { useState } from 'react';
import type { KidActivity } from '@/domain/kids';
import type { FinishPayload } from '../ActivityRunner';
import { Mascot } from '../Mascot';
import { useKid } from '../KidShell';
import { kidButton } from '../ui';
import { Steps } from './Steps';

type MissionActivity = Extract<KidActivity, { kind: 'mision' }>;

/** Misión con el adulto: explicación breve y elegir una misión para hoy (o marcarla hecha). */
export function Mission({ activity, onFinish }: { activity: MissionActivity; onFinish: (p: FinishPayload) => void }) {
  const { narration } = useKid();
  const [stage, setStage] = useState<'intro' | 'pick'>('intro');
  const [picked, setPicked] = useState<string | null>(null);

  if (stage === 'intro') return <Steps steps={[{ text: activity.intro, mood: 'valiente' }, ...activity.steps]} onFinish={() => setStage('pick')} finishLabel="Elegir mi misión" />;

  return (
    <div className="flex flex-col items-center text-center">
      <Mascot mood="valiente" size={110} />
      <p className="mt-2 text-2xl font-extrabold">Elige tu misión</p>
      <div className="mt-4 grid w-full max-w-xl gap-2.5" role="radiogroup" aria-label="Elige tu misión">
        {activity.missions.map((mission) => (
          <button
            key={mission}
            type="button"
            role="radio"
            aria-checked={picked === mission}
            onClick={() => {
              setPicked(mission);
              narration.say(mission);
            }}
            className={`min-h-14 rounded-2xl px-5 py-3 text-left text-lg font-bold ring-2 transition-colors ${
              picked === mission ? 'bg-kid-primary text-kid-onprimary ring-kid-primary' : 'bg-kid-surface ring-kid-line hover:ring-kid-primary/50'
            }`}
          >
            {mission}
          </button>
        ))}
      </div>
      <p className="mt-4 max-w-xl text-base text-kid-soft">Hazla con tu adulto. ¡El miedo se achica cada vez que lo intentas!</p>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <button type="button" disabled={!picked} onClick={() => onFinish({ note: `Elegida: ${picked}` })} className={kidButton('soft')}>
          La voy a hacer
        </button>
        <button type="button" disabled={!picked} onClick={() => onFinish({ note: `Hecha: ${picked}` })} className={kidButton('primary')}>
          ¡Ya la hice!
        </button>
      </div>
    </div>
  );
}
