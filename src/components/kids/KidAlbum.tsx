'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { useMemo } from 'react';
import { activitiesFor, gardenStage, KID_SKILLS, stickersOf } from '@/domain/kids';
import { fadeUp, stagger } from '@/lib/motion';
import { Mascot } from './Mascot';
import { Sticker } from './KidArt';
import { useKid } from './KidShell';

/**
 * Mi jardín: crece con cada actividad (nunca se marchita ni se pierde) y el álbum guarda un
 * sticker por actividad. Sin rachas ni comparaciones: sólo lo que ya cultivó.
 */
export function KidAlbum() {
  const { kid, logs } = useKid();
  const stickers = useMemo(() => stickersOf(logs), [logs]);
  const activities = useMemo(() => activitiesFor(kid.band), [kid.band]);
  const stage = gardenStage(logs.length);

  return (
    <m.div variants={stagger(0.06)} initial="hidden" animate="show">
      <m.h1 variants={fadeUp} className="text-3xl font-extrabold sm:text-4xl">
        Mi jardín
      </m.h1>
      <m.section variants={fadeUp} className="mt-4 overflow-hidden rounded-[2rem] ring-2 ring-kid-line">
        <GardenScene stage={stage.index} flowers={stickers.size} />
        <div className="flex flex-wrap items-center justify-between gap-3 bg-kid-surface px-5 py-4">
          <p className="text-xl font-extrabold">
            Tu jardín es {stage.label.toLowerCase()}.
          </p>
          <p className="text-base text-kid-soft">
            {logs.length} {logs.length === 1 ? 'actividad' : 'actividades'}
            {stage.next ? ` · ${stage.next.min - logs.length} más para que crezca` : ' · ¡llegó a lo más alto!'}
          </p>
        </div>
      </m.section>

      <m.section variants={fadeUp} className="mt-8" aria-labelledby="album">
        <h2 id="album" className="text-2xl font-extrabold">
          Mis stickers
        </h2>
        <p className="text-base text-kid-soft">
          {stickers.size} de {activities.length}. Cada actividad nueva te da uno.
        </p>
        {KID_SKILLS.map((s) => {
          const items = activities.filter((a) => a.skill === s.id);
          if (!items.length) return null;
          return (
            <div key={s.id} className="mt-5">
              <h3 className="text-lg font-extrabold">{s.label}</h3>
              <ul className="mt-2 grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-6">
                {items.map((a) => {
                  const earned = stickers.has(a.id);
                  return (
                    <li key={a.id}>
                      <Link href={`/chicos/${a.id}`} className="flex flex-col items-center gap-1 rounded-2xl p-2 text-center text-sm font-bold hover:bg-kid-surface">
                        <Sticker skill={a.skill} earned={earned} size={72} />
                        <span className={earned ? '' : 'text-kid-soft'}>{earned ? a.title : `Por descubrir: ${a.title}`}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </m.section>
    </m.div>
  );
}

/** Escena del jardín: semilla → brote → plantita → flores → árbol → árbol con frutos. */
function GardenScene({ stage, flowers }: { stage: number; flowers: number }) {
  const petals = ['fill-kid-paint-pink', 'fill-kid-paint-sun', 'fill-kid-paint-lavender', 'fill-kid-paint-coral'];
  const spots = Array.from({ length: Math.min(flowers, 14) }, (_, i) => ({ x: 30 + ((i * 53) % 340), y: 196 + ((i * 7) % 3) * 8, c: petals[i % petals.length] }));
  return (
    <svg viewBox="0 0 400 240" className="block w-full bg-kid-tint-sky" role="img" aria-label="Tu jardín">
      <m.circle cx="340" cy="52" r="26" className="fill-kid-paint-sun" animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 5, repeat: Infinity }} style={{ originX: '340px', originY: '52px' }} />
      <m.g animate={{ x: [0, 18, 0] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}>
        <path d="M60 60 a12 12 0 0 1 22 -6 a10 10 0 0 1 18 4 a9 9 0 0 1 0 18 h-38 a8 8 0 0 1 -2 -16Z" className="fill-kid-surface" opacity="0.9" />
      </m.g>
      <path d="M0 190 C90 160 180 168 260 182 S360 196 400 186 V240 H0Z" className="fill-kid-paint-leaf" opacity="0.55" />
      <path d="M0 206 C100 190 220 196 400 204 V240 H0Z" className="fill-kid-paint-leaf" />
      {spots.map((s, i) => (
        <m.g key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 + i * 0.05, type: 'spring', stiffness: 200, damping: 14 }} style={{ originX: `${s.x}px`, originY: `${s.y}px` }}>
          <path d={`M${s.x} ${s.y} v12`} className="stroke-kid-paint-mint" strokeWidth="2.5" />
          {[0, 1, 2, 3, 4].map((k) => {
            const a = (k * 2 * Math.PI) / 5;
            return <circle key={k} cx={s.x + Math.cos(a) * 4.5} cy={s.y + Math.sin(a) * 4.5} r="3.6" className={s.c} />;
          })}
          <circle cx={s.x} cy={s.y} r="2.4" className="fill-kid-paint-sun" />
        </m.g>
      ))}
      <Plant stage={stage} />
      {stage >= 3 && (
        <m.g animate={{ x: [0, 40, 10, 0], y: [0, -20, -6, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}>
          <path d="M120 110 c-8 -10 -14 -2 -8 4 c-6 6 2 12 8 2 c6 10 14 4 8 -2 c6 -6 0 -14 -8 -4Z" className="fill-kid-paint-lavender" />
        </m.g>
      )}
      <g transform="translate(286 150)">
        <Mascot size={64} />
      </g>
    </svg>
  );
}

function Plant({ stage }: { stage: number }) {
  const grow = { initial: { scale: 0.4, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { type: 'spring' as const, stiffness: 120, damping: 14 }, style: { originX: '200px', originY: '206px' } };
  if (stage === 0) return <ellipse cx="200" cy="204" rx="9" ry="6" className="fill-kid-paint-orange" />;
  if (stage <= 2) {
    const h = stage === 1 ? 26 : 50;
    return (
      <m.g {...grow}>
        <path d={`M200 206 V${206 - h}`} className="stroke-kid-paint-leaf" strokeWidth="5" strokeLinecap="round" />
        <path d={`M200 ${210 - h} c-14 -14 -28 -8 -28 0 c10 8 22 6 28 0Z`} className="fill-kid-paint-mint" />
        <path d={`M200 ${214 - h} c14 -16 30 -10 30 -2 c-10 10 -24 8 -30 2Z`} className="fill-kid-paint-leaf" />
        {stage === 2 && <path d="M200 186 c-12 -6 -20 0 -20 4 c8 4 16 2 20 -4Z" className="fill-kid-paint-mint" />}
      </m.g>
    );
  }
  if (stage === 3)
    return (
      <m.g {...grow}>
        <path d="M200 206 V130" className="stroke-kid-paint-leaf" strokeWidth="6" strokeLinecap="round" />
        <path d="M200 180 c-18 -12 -32 -4 -30 4 c12 6 24 4 30 -4Z M200 160 c18 -12 32 -4 30 4 c-12 6 -24 4 -30 -4Z" className="fill-kid-paint-mint" />
        {[0, 1, 2, 3, 4, 5].map((k) => {
          const a = (k * Math.PI) / 3;
          return <circle key={k} cx={200 + Math.cos(a) * 14} cy={122 + Math.sin(a) * 14} r="11" className="fill-kid-paint-pink" />;
        })}
        <circle cx="200" cy="122" r="10" className="fill-kid-paint-sun" />
      </m.g>
    );
  return (
    <m.g {...grow}>
      <path d="M192 206 C194 170 196 150 196 120 H204 C204 150 206 170 208 206Z" className="fill-kid-paint-orange" opacity="0.8" />
      <circle cx="200" cy="96" r="52" className="fill-kid-paint-leaf" />
      <circle cx="166" cy="114" r="30" className="fill-kid-paint-mint" />
      <circle cx="234" cy="112" r="30" className="fill-kid-paint-mint" />
      {stage >= 5 &&
        [
          [180, 84],
          [214, 74],
          [226, 108],
          [170, 120],
          [200, 112],
        ].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="7" className="fill-kid-paint-coral" />)}
    </m.g>
  );
}
