'use client';

import { m } from 'motion/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { KidActivity } from '@/domain/kids';
import { Mascot } from '../Mascot';
import { useKid } from '../KidShell';
import { kidButton } from '../ui';

type BreathActivity = Extract<KidActivity, { kind: 'respirar' }>;
type Phase = 'in' | 'hold' | 'out' | 'rest';

/**
 * Respiración guiada con un dibujo que se mueve al ritmo: globo, flor y vela, estrella,
 * cuadrado u ola. La consigna se lee (y se dice con voz) en cada fase. Con movimiento
 * reducido el dibujo queda quieto y la consigna sigue cambiando.
 */
export function Breathing({ activity, onFinish }: { activity: BreathActivity; onFinish: () => void }) {
  const { narration } = useKid();
  const [running, setRunning] = useState(false);
  const [cycle, setCycle] = useState(0);
  const [phase, setPhase] = useState<Phase>('in');
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const order = useMemo(
    () =>
      (['in', 'hold', 'out', 'rest'] as Phase[]).filter((p) => (p === 'hold' ? activity.hold > 0 : p === 'rest' ? activity.rest > 0 : true)),
    [activity],
  );
  const secs: Record<Phase, number> = { in: activity.inhale, hold: activity.hold, out: activity.exhale, rest: activity.rest };
  const cue: Record<Phase, string> = { in: activity.cueIn, hold: activity.cueHold ?? 'Guarda el aire', out: activity.cueOut, rest: 'Descansa' };

  useEffect(() => {
    if (!running) return;
    if (phase !== 'rest') narration.say(cue[phase]);
    timer.current = setTimeout(() => {
      const idx = order.indexOf(phase);
      if (idx < order.length - 1) return setPhase(order[idx + 1]);
      if (cycle + 1 >= activity.cycles) {
        setRunning(false);
        return onFinish();
      }
      setCycle(cycle + 1);
      setPhase(order[0]);
    }, secs[phase] * 1000);
    return () => clearTimeout(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running, phase, cycle]);

  if (!running) {
    return (
      <div className="flex flex-col items-center text-center">
        <Mascot mood="calma" size={128} />
        <p className="mt-3 max-w-xl text-2xl font-bold leading-snug">{activity.intro}</p>
        <p className="mt-2 text-lg text-kid-soft">
          {activity.cycles} respiraciones · Si te mareas, respira normal.
        </p>
        <button
          type="button"
          onClick={() => {
            narration.say(activity.intro);
            setCycle(0);
            setPhase(order[0]);
            setTimeout(() => setRunning(true), narration.on ? 2500 : 300);
          }}
          className={kidButton('primary', 'mt-6 min-w-44')}
        >
          Empezar
        </button>
      </div>
    );
  }

  const progress = { phase, seconds: secs[phase], cycle, cycles: activity.cycles };

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative flex h-72 w-full max-w-md items-center justify-center sm:h-80">
        {activity.shape === 'globo' && <Balloon {...progress} />}
        {activity.shape === 'flor' && <FlowerCandle {...progress} />}
        {activity.shape === 'estrella' && <StarTrace {...progress} />}
        {activity.shape === 'cuadrado' && <SquareTrace {...progress} />}
        {activity.shape === 'ola' && <Wave {...progress} />}
      </div>
      <p className="text-3xl font-extrabold" aria-live="assertive">
        {cue[phase]}
      </p>
      <div className="mt-4 flex gap-2" role="img" aria-label={`Respiración ${cycle + 1} de ${activity.cycles}`}>
        {Array.from({ length: activity.cycles }, (_, k) => (
          <span key={k} className={`h-3 w-3 rounded-full ${k < cycle ? 'bg-kid-paint-mint' : k === cycle ? 'bg-kid-primary' : 'bg-kid-line'}`} />
        ))}
      </div>
      <button
        type="button"
        onClick={() => {
          clearTimeout(timer.current);
          setRunning(false);
        }}
        className={kidButton('ghost', 'mt-6')}
      >
        Pausar
      </button>
    </div>
  );
}

interface P {
  phase: Phase;
  seconds: number;
  cycle: number;
  cycles: number;
}

const ease = 'easeInOut' as const;

function Balloon({ phase, seconds }: P) {
  const big = phase === 'in' || phase === 'hold';
  return (
    <svg viewBox="0 0 200 260" className="h-full" aria-hidden>
      <m.g animate={{ scale: big ? 1 : 0.62 }} transition={{ duration: seconds, ease }} style={{ originX: '100px', originY: '150px' }}>
        <ellipse cx="100" cy="100" rx="70" ry="82" className="fill-kid-paint-sky" />
        <ellipse cx="74" cy="66" rx="14" ry="22" className="fill-kid-surface" opacity="0.45" />
        <path d="M92 180 L100 192 L108 180Z" className="fill-kid-paint-sky" />
      </m.g>
      <path d="M100 192 C92 210 110 226 100 256" className="stroke-kid-soft" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function FlowerCandle({ phase, seconds }: P) {
  const inhaling = phase === 'in';
  return (
    <svg viewBox="0 0 300 220" className="h-full w-full" aria-hidden>
      {/* flor */}
      <m.g animate={{ scale: inhaling ? 1.12 : 1, opacity: inhaling ? 1 : 0.55 }} transition={{ duration: seconds, ease }} style={{ originX: '80px', originY: '110px' }}>
        <path d="M80 120 V200" className="stroke-kid-paint-leaf" strokeWidth="6" strokeLinecap="round" />
        <path d="M80 170 C60 160 54 146 56 140 C68 142 78 152 80 170Z" className="fill-kid-paint-leaf" />
        {Array.from({ length: 6 }, (_, i) => {
          const a = (i * Math.PI) / 3;
          return <circle key={i} cx={80 + Math.cos(a) * 24} cy={95 + Math.sin(a) * 24} r="18" className="fill-kid-paint-pink" />;
        })}
        <circle cx="80" cy="95" r="15" className="fill-kid-paint-sun" />
      </m.g>
      {/* vela */}
      <m.g animate={{ opacity: inhaling ? 0.55 : 1 }} transition={{ duration: 0.6 }}>
        <rect x="200" y="110" width="36" height="90" rx="8" className="fill-kid-paint-lavender" />
        <path d="M218 110 V98" className="stroke-kid-ink" strokeWidth="3" strokeLinecap="round" />
        <m.path
          d="M218 96 C206 82 212 66 218 56 C224 66 230 82 218 96Z"
          className="fill-kid-paint-orange"
          animate={phase === 'out' ? { skewX: [-4, -18, -10, -20, -6], scaleY: [1, 0.8, 0.9, 0.75, 0.95] } : { skewX: 0, scaleY: 1 }}
          transition={{ duration: seconds, ease }}
          style={{ originX: '218px', originY: '96px' }}
        />
        <path d="M218 92 C213 85 215 78 218 73 C221 78 223 85 218 92Z" className="fill-kid-paint-sun" />
      </m.g>
    </svg>
  );
}

const STAR = (() => {
  const pts: { x: number; y: number }[] = [];
  for (let i = 0; i < 10; i++) {
    const a = -Math.PI / 2 + (i * Math.PI) / 5 - Math.PI / 5;
    const r = i % 2 === 0 ? 42 : 100;
    pts.push({ x: 120 + Math.cos(a) * r, y: 125 + Math.sin(a) * r });
  }
  return pts;
})();

function StarTrace({ phase, seconds, cycle }: P) {
  // Cada respiración recorre una punta: sube al tomar aire y baja al soltarlo.
  const k = cycle % 5;
  const from = STAR[k * 2];
  const tip = STAR[k * 2 + 1];
  const to = STAR[(k * 2 + 2) % 10];
  const target = phase === 'in' ? tip : to;
  const start = phase === 'in' ? from : tip;
  return (
    <svg viewBox="0 0 240 240" className="h-full" aria-hidden>
      <path d={`M${STAR.map((p) => `${p.x} ${p.y}`).join(' L')}Z`} className="fill-kid-tint-sun stroke-kid-paint-sun" strokeWidth="6" strokeLinejoin="round" />
      <m.circle
        key={`${cycle}-${phase}`}
        r="13"
        className="fill-kid-primary"
        initial={{ cx: start.x, cy: start.y }}
        animate={{ cx: target.x, cy: target.y }}
        transition={{ duration: seconds, ease }}
      />
    </svg>
  );
}

const SQUARE = [
  { x: 40, y: 200 },
  { x: 40, y: 40 },
  { x: 200, y: 40 },
  { x: 200, y: 200 },
];

function SquareTrace({ phase, seconds }: P) {
  const side = { in: 0, hold: 1, out: 2, rest: 3 }[phase];
  const start = SQUARE[side];
  const end = SQUARE[(side + 1) % 4];
  return (
    <svg viewBox="0 0 240 240" className="h-full" aria-hidden>
      <rect x="40" y="40" width="160" height="160" rx="10" className="fill-kid-tint-lavender stroke-kid-paint-lavender" strokeWidth="6" />
      <m.circle key={phase} r="13" className="fill-kid-primary" initial={{ cx: start.x, cy: start.y }} animate={{ cx: end.x, cy: end.y }} transition={{ duration: seconds, ease: 'linear' }} />
    </svg>
  );
}

function Wave({ phase, seconds }: P) {
  const up = phase === 'in';
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" aria-hidden>
      <m.g animate={{ y: up ? -40 : 30 }} transition={{ duration: seconds, ease }}>
        <path d="M0 150 C40 120 80 120 120 150 S200 180 240 150 S300 120 320 140 V260 H0Z" className="fill-kid-paint-sky" />
        <path d="M0 175 C40 150 80 150 120 175 S200 200 240 175 S300 150 320 165 V260 H0Z" className="fill-kid-tint-sky" opacity="0.7" />
        {/* barquito */}
        <path d="M140 132 H190 L180 148 H150Z" className="fill-kid-paint-coral" />
        <path d="M165 132 V100 L188 126 H165" className="fill-kid-surface" />
      </m.g>
    </svg>
  );
}
