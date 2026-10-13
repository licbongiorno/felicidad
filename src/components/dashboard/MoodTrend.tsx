'use client';

import { AnimatePresence, m, useReducedMotion } from 'motion/react';
import { useEffect, useMemo, useRef, useState, type PointerEvent } from 'react';
import { EASE_OUT } from '@/lib/motion';

/**
 * Color de la línea desde el tema (--chart-line): un paso propio y validado para cada modo
 * (banda de luminosidad, croma ≥ 0.10 y contraste ≥ 3:1 contra su superficie).
 */
const LINE = 'rgb(var(--chart-line))';
const H = 180;
const PAD = { top: 12, right: 12, bottom: 24, left: 28 };
const DAY = new Intl.DateTimeFormat('es', { weekday: 'short', day: 'numeric', month: 'short' });
const SHORT = new Intl.DateTimeFormat('es', { day: 'numeric', month: 'short' });

interface Point {
  key: string;
  mood: number | null;
}

/**
 * Tendencia del ánimo (0–10) en 28 días. Serie única: el título la nombra, sin leyenda.
 * Los días sin registro cortan la línea (no se interpolan datos que no existen).
 * Interacción: cursor/dedo → línea guía + tooltip; alternativa en tabla.
 */
export function MoodTrend({ series }: { series: Point[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(600);
  const [hover, setHover] = useState<number | null>(null);
  const [asTable, setAsTable] = useState(false);
  // Con "reducir movimiento" la línea se dibuja completa desde el inicio (pathLength animado quedaba en 0).
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setWidth(Math.max(280, e.contentRect.width)));
    ro.observe(el);
    return () => ro.disconnect();
    // El contenedor se remonta al alternar tabla/gráfico o al llegar los primeros datos.
  }, [asTable, series]);

  const innerW = width - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;
  const x = (i: number) => PAD.left + (series.length <= 1 ? innerW / 2 : (i / (series.length - 1)) * innerW);
  const y = (v: number) => PAD.top + innerH - (v / 10) * innerH;

  // Segmentos continuos: la línea se corta en días sin registro.
  const segments = useMemo(() => {
    const out: string[] = [];
    let d = '';
    series.forEach((p, i) => {
      if (p.mood === null) {
        if (d) out.push(d);
        d = '';
        return;
      }
      d += `${d ? 'L' : 'M'}${x(i).toFixed(1)},${y(p.mood).toFixed(1)}`;
    });
    if (d) out.push(d);
    return out;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [series, width]);

  const points = series.map((p, i) => ({ ...p, i })).filter((p) => p.mood !== null) as { key: string; mood: number; i: number }[];
  const count = points.length;

  function onMove(e: PointerEvent<SVGRectElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const rel = (e.clientX - rect.left) / rect.width;
    setHover(Math.max(0, Math.min(series.length - 1, Math.round(rel * (series.length - 1)))));
  }

  const hovered = hover !== null ? series[hover] : null;

  if (count === 0) {
    return (
      <p className="rounded-xl border border-dashed border-stone-200 px-4 py-8 text-center text-sm text-stone-600">
        Cuando registres tu ánimo, aquí verás su evolución.
      </p>
    );
  }

  return (
    <div>
      <div className="mb-3 flex justify-end print:hidden">
        <button
          type="button"
          onClick={() => setAsTable((t) => !t)}
          className="rounded-full px-3 py-1 text-xs text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-800"
        >
          {asTable ? 'Ver gráfico' : 'Ver como tabla'}
        </button>
      </div>

      {asTable ? (
        <div className="max-h-64 overflow-y-auto rounded-xl border border-stone-200">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-stone-50 text-left text-xs text-stone-600">
              <tr>
                <th className="px-4 py-2 font-normal">Día</th>
                <th className="px-4 py-2 text-right font-normal">Ánimo (0–10)</th>
              </tr>
            </thead>
            <tbody>
              {[...points].reverse().map((p) => (
                <tr key={p.key} className="border-t border-stone-100">
                  <td className="px-4 py-2 first-letter:uppercase text-stone-600">{DAY.format(new Date(`${p.key}T12:00:00`))}</td>
                  <td className="px-4 py-2 text-right tabular-nums text-stone-800">{p.mood}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div ref={wrapRef} className="relative">
          <svg viewBox={`0 0 ${width} ${H}`} role="img" aria-label={`Ánimo diario en los últimos ${series.length} días, ${count} registros.`} className="block h-auto w-full overflow-visible">
            {/* Rejilla recesiva */}
            {[0, 5, 10].map((v) => (
              <g key={v}>
                <line x1={PAD.left} x2={width - PAD.right} y1={y(v)} y2={y(v)} className="stroke-stone-100" strokeWidth={1} />
                <text x={PAD.left - 8} y={y(v)} dy="0.32em" textAnchor="end" className="fill-stone-500 text-[10px] tabular-nums">
                  {v}
                </text>
              </g>
            ))}
            <text x={PAD.left} y={H - 4} className="fill-stone-500 text-[10px]">
              {SHORT.format(new Date(`${series[0].key}T12:00:00`))}
            </text>
            <text x={width - PAD.right} y={H - 4} textAnchor="end" className="fill-stone-500 text-[10px]">
              hoy
            </text>

            {/* Línea guía */}
            {hover !== null && <line x1={x(hover)} x2={x(hover)} y1={PAD.top} y2={PAD.top + innerH} className="stroke-stone-300" strokeWidth={1} />}

            {segments.map((d, i) => (
              <m.path
                key={`${i}-${width}`}
                d={d}
                fill="none"
                stroke={LINE}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={reduce ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: EASE_OUT, delay: 0.2 }}
              />
            ))}

            {/* Marcadores de 8 px con anillo de superficie de 2 px */}
            {points.map((p) => (
              <m.circle
                key={p.key}
                cx={x(p.i)}
                cy={y(p.mood)}
                r={hover === p.i ? 5.5 : 4}
                fill={LINE}
                stroke="rgb(var(--white))"
                strokeWidth={2}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + p.i * 0.02 }}
              />
            ))}

            {/* Zona de captura mayor que las marcas */}
            <rect
              x={PAD.left}
              y={0}
              width={innerW}
              height={H}
              fill="transparent"
              onPointerMove={onMove}
              onPointerDown={onMove}
              onPointerLeave={() => setHover(null)}
              className="cursor-crosshair touch-pan-y"
            />
          </svg>

          <AnimatePresence>
            {hovered && hover !== null && (
              <m.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="pointer-events-none absolute top-0 rounded-xl border border-stone-200 bg-white px-3 py-2 text-xs shadow-lift"
                style={{ left: Math.min(Math.max(x(hover) - 60, 0), width - 130) }}
              >
                <p className="first-letter:uppercase text-stone-600">{DAY.format(new Date(`${hovered.key}T12:00:00`))}</p>
                <p className="mt-0.5 text-sm text-stone-800">
                  {hovered.mood === null ? <span className="text-stone-500">Sin registro</span> : <span className="tabular-nums">Ánimo {hovered.mood}/10</span>}
                </p>
              </m.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
