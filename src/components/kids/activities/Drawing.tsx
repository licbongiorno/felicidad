'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { KidActivity } from '@/domain/kids';
import type { FinishPayload } from '../ActivityRunner';
import { Mascot } from '../Mascot';
import { useKid } from '../KidShell';
import { kidButton } from '../ui';

type DrawingActivity = Extract<KidActivity, { kind: 'dibujar' }>;

/** Colores del lápiz (fijos: el papel es siempre claro, también en modo oscuro). */
const COLORS = [
  { id: 'negro', label: 'Negro', hex: '#2B2B33' },
  { id: 'rojo', label: 'Rojo', hex: '#E5484D' },
  { id: 'naranja', label: 'Naranja', hex: '#F2853A' },
  { id: 'amarillo', label: 'Amarillo', hex: '#F5C531' },
  { id: 'verde', label: 'Verde', hex: '#3FA764' },
  { id: 'celeste', label: 'Celeste', hex: '#3E9BE0' },
  { id: 'violeta', label: 'Violeta', hex: '#8B5CF6' },
  { id: 'rosa', label: 'Rosa', hex: '#EC6FA9' },
  { id: 'marron', label: 'Marrón', hex: '#9A6A44' },
];
const SIZES = [
  { id: 'fino', label: 'Fino', px: 4 },
  { id: 'medio', label: 'Medio', px: 10 },
  { id: 'grueso', label: 'Grueso', px: 22 },
];
const PAPER = '#FFFDF7';

interface Stroke {
  color: string;
  size: number;
  points: [number, number][];
}

/**
 * Dibujar con el dedo o el mouse. El dibujo no se guarda en la app (ni en la nube):
 * sólo se puede descargar al dispositivo con «Guardar dibujo».
 */
export function Drawing({ activity, onFinish }: { activity: DrawingActivity; onFinish: (p: FinishPayload) => void }) {
  const { narration } = useKid();
  const canvas = useRef<HTMLCanvasElement>(null);
  const strokes = useRef<Stroke[]>([]);
  const current = useRef<Stroke | null>(null);
  const [color, setColor] = useState(COLORS[1].hex);
  const [size, setSize] = useState(SIZES[1].px);
  const [eraser, setEraser] = useState(false);
  const [count, setCount] = useState(0);
  const [prompt, setPrompt] = useState(0);
  const [finished, setFinished] = useState(false);

  /** Coordenadas en una hoja lógica de 1000 de ancho, así el dibujo se adapta al tamaño. */
  const redraw = useCallback(() => {
    const c = canvas.current;
    const ctx = c?.getContext('2d');
    if (!c || !ctx) return;
    const scale = c.width / 1000;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = PAPER;
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    for (const s of [...strokes.current, ...(current.current ? [current.current] : [])]) {
      ctx.strokeStyle = s.color;
      ctx.fillStyle = s.color;
      ctx.lineWidth = s.size * scale;
      const [x0, y0] = s.points[0];
      if (s.points.length === 1) {
        ctx.beginPath();
        ctx.arc(x0 * scale, y0 * scale, (s.size * scale) / 2, 0, Math.PI * 2);
        ctx.fill();
        continue;
      }
      ctx.beginPath();
      ctx.moveTo(x0 * scale, y0 * scale);
      for (const [x, y] of s.points.slice(1)) ctx.lineTo(x * scale, y * scale);
      ctx.stroke();
    }
  }, []);

  useEffect(() => {
    const c = canvas.current;
    if (!c) return;
    const fit = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = c.clientWidth;
      c.width = Math.round(w * dpr);
      c.height = Math.round(w * 0.75 * dpr);
      redraw();
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(c);
    return () => ro.disconnect();
  }, [redraw]);

  const point = (e: React.PointerEvent<HTMLCanvasElement>): [number, number] => {
    const r = e.currentTarget.getBoundingClientRect();
    const k = 1000 / r.width;
    return [Math.round((e.clientX - r.left) * k), Math.round((e.clientY - r.top) * k)];
  };

  const down = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    current.current = { color: eraser ? PAPER : color, size: eraser ? size * 2 : size, points: [point(e)] };
    redraw();
  };
  const move = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!current.current) return;
    current.current.points.push(point(e));
    redraw();
  };
  const up = () => {
    if (!current.current) return;
    strokes.current.push(current.current);
    current.current = null;
    setCount(strokes.current.length);
    redraw();
  };

  const undo = () => {
    strokes.current.pop();
    setCount(strokes.current.length);
    redraw();
  };
  const clear = () => {
    strokes.current = [];
    setCount(0);
    redraw();
  };
  const download = () => {
    const url = canvas.current?.toDataURL('image/png');
    if (!url) return;
    const a = document.createElement('a');
    a.href = url;
    a.download = `${activity.id}.png`;
    a.click();
  };

  const nextPrompt = () => {
    const n = (prompt + 1) % activity.prompts.length;
    setPrompt(n);
    narration.say(activity.prompts[n]);
  };

  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center gap-4">
        <Mascot mood="feliz" size={88} />
        <p className="max-w-md text-left text-xl font-bold leading-snug">{activity.intro}</p>
      </div>

      <button type="button" onClick={nextPrompt} className="mt-4 rounded-full bg-kid-tint-sun px-5 py-2 text-lg font-bold ring-2 ring-kid-paint-sun" aria-live="polite">
        {activity.prompts[prompt]} <span className="text-base text-kid-soft">· otra idea</span>
      </button>

      <canvas
        ref={canvas}
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
        onPointerCancel={up}
        onPointerLeave={up}
        className="mt-4 aspect-[4/3] w-full max-w-2xl cursor-crosshair touch-none rounded-3xl shadow-[0_4px_0_rgb(0_0_0/0.06)] ring-2 ring-kid-line"
        role="img"
        aria-label={count ? `Tu dibujo, con ${count} ${count === 1 ? 'trazo' : 'trazos'}` : 'Hoja en blanco para dibujar'}
      />

      <div className="mt-4 flex w-full max-w-2xl flex-wrap items-center justify-center gap-2" role="group" aria-label="Colores">
        {COLORS.map((c) => (
          <button
            key={c.id}
            type="button"
            aria-label={c.label}
            aria-pressed={!eraser && color === c.hex}
            onClick={() => {
              setColor(c.hex);
              setEraser(false);
            }}
            className={`h-11 w-11 rounded-full ring-offset-2 ring-offset-kid-surface transition-transform ${!eraser && color === c.hex ? 'scale-110 ring-4 ring-kid-ink' : 'ring-2 ring-kid-line'}`}
            style={{ backgroundColor: c.hex }}
          />
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
        <div className="flex gap-2" role="group" aria-label="Grosor">
          {SIZES.map((s) => (
            <button
              key={s.id}
              type="button"
              aria-label={s.label}
              aria-pressed={size === s.px}
              onClick={() => setSize(s.px)}
              className={`flex h-11 w-11 items-center justify-center rounded-2xl ring-2 ${size === s.px ? 'bg-kid-tint-sky ring-kid-paint-sky' : 'bg-kid-surface ring-kid-line'}`}
            >
              <span className="rounded-full bg-kid-ink" style={{ width: Math.max(4, s.px * 0.9), height: Math.max(4, s.px * 0.9) }} />
            </button>
          ))}
        </div>
        <button type="button" aria-pressed={eraser} onClick={() => setEraser((x) => !x)} className={kidButton(eraser ? 'primary' : 'soft')}>
          Goma
        </button>
        <button type="button" onClick={undo} disabled={!count} className={kidButton('soft')}>
          Deshacer
        </button>
        <button type="button" onClick={clear} disabled={!count} className={kidButton('ghost')}>
          Borrar todo
        </button>
      </div>

      {!finished ? (
        <button
          type="button"
          disabled={!count}
          onClick={() => {
            setFinished(true);
            narration.say(activity.question);
          }}
          className={kidButton('primary', 'mt-6 min-w-44')}
        >
          ¡Terminé!
        </button>
      ) : (
        <div className="mt-6 w-full max-w-xl rounded-3xl bg-kid-surface p-5 ring-2 ring-kid-line">
          <p className="text-xl font-extrabold">{activity.question}</p>
          <p className="mt-2 text-base text-kid-soft">Cuéntaselo a tu adulto. Puedes seguir agregando cosas al dibujo.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <button type="button" onClick={download} className={kidButton('soft')}>
              Guardar dibujo
            </button>
            <button type="button" onClick={() => onFinish({})} className={kidButton('primary')}>
              Listo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
