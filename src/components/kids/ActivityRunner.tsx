'use client';

import Link from 'next/link';
import { AnimatePresence, m } from 'motion/react';
import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { KID_ACTIVITY_BY_ID, pathProgress, pathsFor, stickersOf, type KidActivity, type KidActivityLog } from '@/domain/kids';
import { isPublished } from '@/domain/governance';
import { playChime } from '@/lib/chime';
import { Mascot } from './Mascot';
import { Sticker } from './KidArt';
import { useKid } from './KidShell';
import { kidButton } from './ui';
import { Breathing } from './activities/Breathing';
import { Steps } from './activities/Steps';
import { FeelingGame } from './activities/FeelingGame';
import { FeelingCheck } from './activities/FeelingCheck';
import { Gratitude } from './activities/Gratitude';
import { Mission } from './activities/Mission';
import { Drawing } from './activities/Drawing';

export interface FinishPayload {
  feeling?: KidActivityLog['feeling'];
  intensity?: KidActivityLog['intensity'];
  note?: string | null;
}

/** Ejecuta una actividad y, al terminar, la registra y entrega el sticker. */
export function ActivityRunner({ activityId }: { activityId: string }) {
  const activity = KID_ACTIVITY_BY_ID[activityId];
  const { kid, logs, log } = useKid();
  const [done, setDone] = useState<{ newSticker: boolean } | null>(null);
  const [round, setRound] = useState(0);
  const hadSticker = useMemo(() => logs.some((l) => l.activityId === activityId), [logs, activityId]);
  const logged = useRef(false);

  if (!activity.bands.includes(kid.band) || !isPublished('infantil', activity.id)) {
    return (
      <Frame activity={activity}>
        <p className="mt-6 text-xl">Esta actividad no está disponible para ti todavía. ¡Hay muchas más en el inicio!</p>
      </Frame>
    );
  }

  const finish = (payload: FinishPayload = {}) => {
    if (!logged.current) {
      logged.current = true;
      log({ activityId, ...payload });
    }
    setDone({ newSticker: !hadSticker });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const again = () => {
    logged.current = false;
    setDone(null);
    setRound((r) => r + 1);
  };

  return (
    <Frame activity={activity}>
      <AnimatePresence mode="wait">
        {done ? (
          <Celebration key="done" activity={activity} newSticker={done.newSticker} onAgain={again} />
        ) : (
          <m.div key={`run-${round}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            <Body activity={activity} onFinish={finish} />
          </m.div>
        )}
      </AnimatePresence>
    </Frame>
  );
}

function Body({ activity, onFinish }: { activity: KidActivity; onFinish: (p?: FinishPayload) => void }) {
  switch (activity.kind) {
    case 'respirar':
      return <Breathing activity={activity} onFinish={onFinish} />;
    case 'pasos':
      return <Steps steps={activity.steps} onFinish={() => onFinish()} />;
    case 'juego':
      return <FeelingGame activity={activity} onFinish={() => onFinish()} />;
    case 'emocion':
      return <FeelingCheck activity={activity} onFinish={onFinish} />;
    case 'gratitud':
      return <Gratitude activity={activity} onFinish={onFinish} />;
    case 'mision':
      return <Mission activity={activity} onFinish={onFinish} />;
    case 'dibujar':
      return <Drawing activity={activity} onFinish={onFinish} />;
  }
}

function Frame({ activity, children }: { activity: KidActivity; children: ReactNode }) {
  return (
    <article>
      <Link href="/chicos" className="inline-flex h-12 items-center gap-2 rounded-full pr-4 text-lg font-bold text-kid-soft hover:text-kid-ink">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M15 5l-7 7 7 7" />
        </svg>
        Volver
      </Link>
      <h1 className="mt-1 text-3xl font-extrabold leading-tight sm:text-4xl">{activity.title}</h1>
      <div className="mt-4">{children}</div>
      <AdultNote activity={activity} />
    </article>
  );
}

/** Nota para el adulto: cómo acompañar, de dónde viene y precauciones. */
function AdultNote({ activity }: { activity: KidActivity }) {
  return (
    <details className="mt-10 rounded-3xl bg-kid-surface p-5 ring-2 ring-kid-line">
      <summary className="cursor-pointer text-lg font-bold">Para el adulto</summary>
      <div className="mt-3 space-y-3 font-sans text-base leading-relaxed">
        {activity.caution && (
          <p>
            <strong>Antes de empezar:</strong> {activity.caution}
          </p>
        )}
        <p>
          <strong>Cómo acompañar:</strong> {activity.forAdult}
        </p>
        <p className="text-kid-soft">
          <strong className="text-kid-ink">De dónde viene:</strong> {activity.evidence}
        </p>
      </div>
    </details>
  );
}

function Celebration({ activity, newSticker, onAgain }: { activity: KidActivity; newSticker: boolean; onAgain: () => void }) {
  const { narration } = useKid();
  const text = newSticker ? '¡Lo hiciste! Ganaste un sticker nuevo.' : '¡Lo hiciste muy bien!';
  useEffect(() => {
    narration.say(text);
    playChime(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <m.section initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="relative overflow-hidden rounded-[2rem] bg-kid-surface p-6 text-center ring-2 ring-kid-line sm:p-10" aria-live="polite">
      <Sparkles />
      <div className="relative flex flex-col items-center">
        <Mascot mood="orgullo" motion="cheer" size={140} />
        <h2 className="mt-2 text-3xl font-extrabold">{text}</h2>
        {newSticker && (
          <m.div initial={{ scale: 0, rotate: -30 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 220, damping: 12, delay: 0.3 }} className="mt-4">
            <Sticker skill={activity.skill} earned size={104} />
            <span className="sr-only">Sticker de {activity.title}</span>
          </m.div>
        )}
        <p className="mt-3 max-w-md text-lg text-kid-soft">Tu jardín creció un poquito.</p>
        <NextInPath activity={activity} />
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/chicos" className={kidButton('primary')}>
            Volver al inicio
          </Link>
          <button type="button" onClick={onAgain} className={kidButton('soft')}>
            Otra vez
          </button>
          <Link href="/chicos/album" className={kidButton('ghost')}>
            Ver mi jardín
          </Link>
        </div>
      </div>
    </m.section>
  );
}

/** Si la actividad es parte de un camino, propone la siguiente. */
function NextInPath({ activity }: { activity: KidActivity }) {
  const { kid, logs } = useKid();
  const suggestion = useMemo(() => {
    const done = stickersOf(logs);
    done.add(activity.id);
    for (const p of pathsFor(kid.band)) {
      if (!p.activities.includes(activity.id)) continue;
      const { next, completed, total } = pathProgress(p, done);
      if (next) return { path: p, next, completed, total };
    }
    return null;
  }, [logs, activity.id, kid.band]);
  if (!suggestion) return null;
  return (
    <Link
      href={`/chicos/${suggestion.next.id}`}
      className="mt-5 block w-full max-w-md rounded-3xl bg-kid-tint-sky px-5 py-4 text-left ring-2 ring-kid-line transition-transform active:scale-[0.98]"
    >
      <span className="block text-sm font-bold text-kid-soft">
        Tu camino «{suggestion.path.title}» · {suggestion.completed} de {suggestion.total}
      </span>
      <span className="mt-0.5 block text-lg font-extrabold">Siguiente: {suggestion.next.title} →</span>
    </Link>
  );
}

/** Estrellitas suaves que suben (decorativas). */
function Sparkles() {
  const items = [
    { x: '12%', d: 0, c: 'fill-kid-paint-sun' },
    { x: '28%', d: 0.4, c: 'fill-kid-paint-pink' },
    { x: '50%', d: 0.2, c: 'fill-kid-paint-sky' },
    { x: '70%', d: 0.6, c: 'fill-kid-paint-mint' },
    { x: '86%', d: 0.3, c: 'fill-kid-paint-lavender' },
  ];
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {items.map((s, i) => (
        <m.svg
          key={i}
          viewBox="0 0 20 20"
          className="absolute h-6 w-6"
          style={{ left: s.x, bottom: '-10%' }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -320, opacity: [0, 1, 1, 0], rotate: 120 }}
          transition={{ duration: 2.6, delay: s.d, ease: 'easeOut' }}
        >
          <path d="M10 1 L12.4 7.6 L19 10 L12.4 12.4 L10 19 L7.6 12.4 L1 10 L7.6 7.6Z" className={s.c} />
        </m.svg>
      ))}
    </div>
  );
}
