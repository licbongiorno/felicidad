'use client';

import { m } from 'motion/react';
import { useId, useRef, type KeyboardEvent, type PointerEvent } from 'react';
import { gentleSpring } from '@/lib/motion';
import { haptic } from '@/lib/haptics';

interface Props {
  label: string;
  value: number | null;
  onChange: (value: number) => void;
  lowAnchor: string;
  highAnchor: string;
}

const VALUES = Array.from({ length: 11 }, (_, n) => n);

/**
 * Escala 0–10 con anclas verbales (formato SUDS).
 * Gestos: tocar, o arrastrar el dedo a lo largo de la escala ("scrubbing") con un pulso
 * háptico por cada valor. Teclado: flechas, Inicio y Fin (patrón ARIA radiogroup).
 */
export function IntensityScale({ label, value, onChange, lowAnchor, highAnchor }: Props) {
  const id = useId();
  const trackRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const scrubbing = useRef(false);
  const last = useRef(value);
  last.current = value;

  function select(n: number) {
    if (n === last.current) return;
    last.current = n;
    haptic('tick');
    onChange(n);
  }

  function indexFromX(clientX: number) {
    const rect = trackRef.current!.getBoundingClientRect();
    return Math.max(0, Math.min(10, Math.floor(((clientX - rect.left) / rect.width) * 11)));
  }

  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    scrubbing.current = true;
    // Opcional: navegadores antiguos (y jsdom) no lo implementan; el toque sigue funcionando.
    e.currentTarget.setPointerCapture?.(e.pointerId);
    select(indexFromX(e.clientX));
  }

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (scrubbing.current) select(indexFromX(e.clientX));
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const current = value ?? -1;
    const next =
      e.key === 'ArrowRight' || e.key === 'ArrowUp'
        ? Math.min(10, current + 1)
        : e.key === 'ArrowLeft' || e.key === 'ArrowDown'
          ? Math.max(0, current === -1 ? 0 : current - 1)
          : e.key === 'Home'
            ? 0
            : e.key === 'End'
              ? 10
              : null;
    if (next === null) return;
    e.preventDefault();
    select(next);
    buttonsRef.current[next]?.focus();
  }

  return (
    <fieldset>
      <legend id={id} className="mb-3 text-sm text-stone-600">
        {label}
      </legend>
      <div
        ref={trackRef}
        role="radiogroup"
        aria-labelledby={id}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={() => (scrubbing.current = false)}
        onPointerCancel={() => (scrubbing.current = false)}
        onKeyDown={onKeyDown}
        className="grid touch-pan-y select-none grid-cols-11 gap-1"
      >
        {VALUES.map((n) => {
          const selected = value === n;
          const below = value !== null && n < value;
          return (
            <button
              key={n}
              ref={(el) => {
                buttonsRef.current[n] = el;
              }}
              type="button"
              role="radio"
              aria-checked={selected}
              tabIndex={selected || (value === null && n === 0) ? 0 : -1}
              onClick={() => select(n)}
              className={`relative h-11 rounded-lg text-sm tabular-nums ring-1 ring-inset transition-colors duration-300 ${
                below ? 'bg-sage-50 ring-sage-100' : 'bg-white ring-stone-200 hover:ring-stone-300'
              }`}
            >
              {selected && (
                <m.span
                  layoutId={`thumb-${id}`}
                  transition={gentleSpring}
                  className="absolute inset-0 rounded-lg bg-sage-700 shadow-soft"
                />
              )}
              <span
                className={`relative transition-colors duration-200 ${
                  selected ? 'font-medium text-stone-50' : below ? 'text-sage-700' : 'text-stone-600'
                }`}
              >
                {n}
              </span>
            </button>
          );
        })}
      </div>
      <div className="mt-2 flex justify-between text-xs text-stone-500">
        <span>{lowAnchor}</span>
        <span>{highAnchor}</span>
      </div>
    </fieldset>
  );
}
