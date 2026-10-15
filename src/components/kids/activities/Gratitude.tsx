'use client';

import { m } from 'motion/react';
import { useMemo, useState } from 'react';
import { GRATITUDE_THINGS, isTeen, KID_NOTE_MAX, type KidActivity } from '@/domain/kids';
import type { FinishPayload } from '../ActivityRunner';
import { Mascot } from '../Mascot';
import { useKid } from '../KidShell';
import { kidButton } from '../ui';

type GratitudeActivity = Extract<KidActivity, { kind: 'gratitud' }>;

/**
 * Frasco de las cosas buenas: elegir qué cosa buena pasó hoy (con dibujos) y, desde los
 * 7 años, contarla con palabras. El frasco se llena con una estrella por cada día guardado.
 */
export function Gratitude({ activity, onFinish }: { activity: GratitudeActivity; onFinish: (p: FinishPayload) => void }) {
  const { kid, logs, narration } = useKid();
  const [picked, setPicked] = useState<string[]>([]);
  const [text, setText] = useState('');
  const canWrite = kid.band !== '4-6';
  const stars = useMemo(() => logs.filter((l) => l.activityId === activity.id).length, [logs, activity.id]);

  const toggle = (id: string, label: string) => {
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
    narration.say(label);
  };

  const note = [GRATITUDE_THINGS.filter((g) => picked.includes(g.id)).map((g) => g.label).join(', '), text.trim()].filter(Boolean).join(': ');

  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center gap-4">
        <Mascot mood="feliz" size={100} />
        <Jar stars={stars} />
      </div>
      <p className="mt-3 max-w-xl text-2xl font-bold leading-snug">{activity.intro}</p>
      <p className="mt-4 text-xl font-extrabold">¿Qué cosa buena pasó hoy?</p>
      <div className="mt-3 grid w-full max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4" role="group" aria-label="Cosas buenas">
        {GRATITUDE_THINGS.map((g) => (
          <button
            key={g.id}
            type="button"
            aria-pressed={picked.includes(g.id)}
            onClick={() => toggle(g.id, g.label)}
            className={`flex min-h-24 flex-col items-center justify-center gap-1.5 rounded-3xl p-3 text-lg font-bold ring-2 transition-colors ${
              picked.includes(g.id) ? 'bg-kid-tint-leaf ring-kid-paint-leaf' : 'bg-kid-surface ring-kid-line hover:ring-kid-primary/50'
            }`}
          >
            <ThingIcon id={g.id} />
            {g.label}
          </button>
        ))}
      </div>
      {canWrite && (
        <label className="mt-5 block w-full max-w-xl text-left">
          <span className="text-lg font-bold">Cuéntalo con tus palabras (si quieres)</span>
          <textarea
            rows={2}
            value={text}
            maxLength={KID_NOTE_MAX - 40}
            onChange={(e) => setText(e.target.value)}
            placeholder="Hoy jugué con…"
            className="mt-2 w-full rounded-2xl border-2 border-kid-line bg-kid-surface px-4 py-3 text-lg text-kid-ink placeholder:text-kid-soft focus:border-kid-primary focus:outline-none"
          />
        </label>
      )}
      <p className="mt-3 max-w-xl text-base text-kid-soft">
        {isTeen(kid.band) ? 'Tu adulto no ve en la app lo que escribes aquí, pero queda guardado en su cuenta.' : 'Lo que guardes lo puede ver tu adulto.'}
      </p>
      <button type="button" disabled={!note} onClick={() => onFinish({ note: note.slice(0, KID_NOTE_MAX) })} className={kidButton('primary', 'mt-5 min-w-44')}>
        Guardar en el frasco
      </button>
    </div>
  );
}

function Jar({ stars }: { stars: number }) {
  const shown = Math.min(stars, 14);
  return (
    <svg viewBox="0 0 90 110" className="h-28 w-24" role="img" aria-label={`El frasco tiene ${stars} ${stars === 1 ? 'estrella' : 'estrellas'}`}>
      <rect x="22" y="6" width="46" height="12" rx="4" className="fill-kid-paint-orange" />
      <path d="M18 22 H72 C80 30 82 40 82 52 V92 C82 100 76 104 68 104 H22 C14 104 8 100 8 92 V52 C8 40 10 30 18 22Z" className="fill-kid-tint-sky stroke-kid-paint-sky" strokeWidth="3" />
      {Array.from({ length: shown }, (_, i) => {
        const x = 20 + ((i * 17) % 50);
        const y = 94 - Math.floor(i / 3) * 12 - (i % 2) * 4;
        return (
          <m.path
            key={i}
            d="M0 -6 L1.8 -1.8 L6 0 L1.8 1.8 L0 6 L-1.8 1.8 L-6 0 L-1.8 -1.8Z"
            className="fill-kid-paint-sun"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            transform={`translate(${x} ${y})`}
          />
        );
      })}
      <path d="M20 34 C16 44 16 58 17 70" className="stroke-kid-surface" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.6" />
    </svg>
  );
}

function ThingIcon({ id }: { id: string }) {
  const s = { fill: 'none', strokeWidth: 2.4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, className: 'stroke-kid-ink' };
  const icons: Record<string, React.ReactNode> = {
    familia: (
      <>
        <circle cx="12" cy="10" r="3.5" {...s} />
        <circle cx="25" cy="10" r="3.5" {...s} />
        <circle cx="18.5" cy="19" r="2.8" {...s} />
        <path d="M5 30 c0 -6 3 -10 7 -10 M32 30 c0 -6 -3 -10 -7 -10 M13 30 c0 -3 2.5 -5 5.5 -5 s5.5 2 5.5 5" {...s} />
      </>
    ),
    amigos: (
      <>
        <circle cx="12" cy="11" r="4" {...s} />
        <circle cx="25" cy="11" r="4" {...s} />
        <path d="M4 30 c0 -6 3.5 -10 8 -10 s8 4 8 10 M17 30 c0 -6 3.5 -10 8 -10 s8 4 8 10" {...s} />
      </>
    ),
    mascota: <path d="M10 14 l2 -7 l5 5 h4 l5 -5 l2 7 c3 4 3 9 0 12 c-3 4 -15 4 -18 0 c-3 -3 -3 -8 0 -12Z M15 18 h0.1 M23 18 h0.1 M17 23 q2 2 4 0" {...s} />,
    jugar: (
      <>
        <circle cx="18.5" cy="18.5" r="12" {...s} />
        <path d="M7 15 q11.5 6 23 0 M10 26 q8.5 -8 17 0 M18.5 6.5 v24" {...s} />
      </>
    ),
    comida: <path d="M9 18 h20 a10 10 0 0 1 -20 0Z M14 12 q2 -4 0 -6 M19 12 q2 -4 0 -6 M24 12 q2 -4 0 -6" {...s} />,
    naturaleza: <path d="M18 31 v-10 M18 21 c-8 0 -11 -6 -11 -13 c7 0 11 4 11 13Z M18 21 c7 0 10 -5 10 -11 c-6 0 -10 4 -10 11Z" {...s} />,
    escuela: <path d="M5 14 l13.5 -7 l13.5 7 l-13.5 7Z M10 17 v7 c0 3 4 5 8.5 5 s8.5 -2 8.5 -5 v-7 M32 14 v8" {...s} />,
    yo: <path d="M18.5 5 l3.8 8 l8.7 1 l-6.4 6 l1.7 8.6 l-7.8 -4.4 l-7.8 4.4 l1.7 -8.6 l-6.4 -6 l8.7 -1Z" {...s} />,
  };
  return (
    <svg viewBox="0 0 37 37" className="h-10 w-10" aria-hidden>
      {icons[id]}
    </svg>
  );
}
