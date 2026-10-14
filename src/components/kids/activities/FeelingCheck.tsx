'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { useState } from 'react';
import { FEELING_BY_ID, INTENSITY_LABEL, KID_FEELINGS, suggestionsFor, type KidActivity, type KidFeelingId, type KidIntensity } from '@/domain/kids';
import type { FinishPayload } from '../ActivityRunner';
import { Mascot } from '../Mascot';
import { FeelingFace, SKILL_PAINT, Sticker } from '../KidArt';
import { useKid } from '../KidShell';
import { kidButton } from '../ui';

type CheckActivity = Extract<KidActivity, { kind: 'emocion' }>;

/**
 * «¿Cómo me siento?»: elegir una cara, medirla en el termómetro y recibir validación y
 * actividades que ayudan. Si una emoción difícil está al máximo, invita a buscar a su adulto.
 */
export function FeelingCheck({ activity, onFinish }: { activity: CheckActivity; onFinish: (p: FinishPayload) => void }) {
  const { kid, narration } = useKid();
  const [feeling, setFeeling] = useState<KidFeelingId | null>(null);
  const [intensity, setIntensity] = useState<KidIntensity | null>(null);
  const [saved, setSaved] = useState(false);

  if (!feeling) {
    return (
      <div>
        <p className="text-center text-2xl font-bold leading-snug">{activity.intro}</p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4" role="group" aria-label="¿Cómo te sientes?">
          {KID_FEELINGS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => {
                setFeeling(f.id);
                narration.say(`${f.label}. ¿Cuánto?`);
              }}
              className="flex flex-col items-center gap-2 rounded-3xl bg-kid-surface p-4 text-xl font-extrabold ring-2 ring-kid-line transition-transform hover:ring-kid-primary/50 active:scale-95"
            >
              <FeelingFace feeling={f.id} size={76} />
              {f.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  const f = FEELING_BY_ID[feeling];

  if (!intensity) {
    return (
      <div className="flex flex-col items-center text-center">
        <FeelingFace feeling={feeling} size={96} />
        <p className="mt-3 text-2xl font-extrabold">¿Cuánta {f.label.toLowerCase()} sientes?</p>
        <div className="mt-5 flex items-end gap-4" role="group" aria-label={`¿Cuánta ${f.label.toLowerCase()} sientes?`}>
          {([1, 2, 3] as KidIntensity[]).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => {
                setIntensity(n);
                narration.say(f.validation);
              }}
              className="flex flex-col items-center gap-2 rounded-3xl bg-kid-surface px-4 pb-3 pt-4 text-lg font-bold ring-2 ring-kid-line hover:ring-kid-primary/50"
            >
              <Thermometer level={n} />
              {INTENSITY_LABEL[n]}
            </button>
          ))}
        </div>
        <button type="button" onClick={() => setFeeling(null)} className={kidButton('ghost', 'mt-6')}>
          Elegir otra cara
        </button>
      </div>
    );
  }

  const strong = f.hard && intensity === 3;
  const ideas = suggestionsFor(feeling, kid.band);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center gap-3">
        <Mascot mood={f.hard ? 'calma' : 'feliz'} size={110} />
        <FeelingFace feeling={feeling} size={72} />
      </div>
      <p className="mt-3 max-w-xl text-2xl font-bold leading-snug">{f.validation}</p>
      {strong && (
        <m.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 max-w-xl rounded-3xl bg-kid-tint-sky px-6 py-4 text-xl font-bold leading-snug">
          Gracias por contarlo. Es un muy buen momento para buscar a tu adulto y contarle cómo te sientes.
        </m.p>
      )}
      {ideas.length > 0 && (
        <section className="mt-6 w-full max-w-2xl" aria-labelledby="ideas">
          <h2 id="ideas" className="text-xl font-extrabold">
            Esto te puede ayudar
          </h2>
          <ul className="mt-3 grid gap-3 sm:grid-cols-3">
            {ideas.map((a) => (
              <li key={a.id}>
                <Link
                  href={`/chicos/${a.id}`}
                  onClick={() => !saved && onFinishSilently()}
                  className={`flex h-full flex-col items-center gap-2 rounded-3xl p-4 text-lg font-extrabold ${SKILL_PAINT[a.skill].tint}`}
                >
                  <Sticker skill={a.skill} earned size={48} />
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      <button
        type="button"
        onClick={() => {
          setSaved(true);
          onFinish({ feeling, intensity });
        }}
        className={kidButton('primary', 'mt-7 min-w-44')}
      >
        Listo
      </button>
    </div>
  );

  // Si va directo a una actividad sugerida, el registro de la emoción igual se guarda.
  function onFinishSilently() {
    setSaved(true);
    onFinish({ feeling, intensity });
  }
}

function Thermometer({ level }: { level: KidIntensity }) {
  const h = [18, 40, 62][level - 1];
  const fill = ['fill-kid-paint-mint', 'fill-kid-paint-sun', 'fill-kid-paint-coral'][level - 1];
  return (
    <svg viewBox="0 0 40 100" className="h-24 w-10" aria-hidden>
      <rect x="13" y="6" width="14" height="72" rx="7" className="fill-kid-bg stroke-kid-line" strokeWidth="2" />
      <rect x="16" y={74 - h} width="8" height={h + 4} rx="4" className={fill} />
      <circle cx="20" cy="84" r="11" className={fill} />
    </svg>
  );
}
