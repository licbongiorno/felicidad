'use client';

import Link from 'next/link';
import { AnimatePresence, m, useReducedMotion } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { Pill } from '@/domain/pills';
import { haptic } from '@/lib/haptics';
import { markPillRead } from './pillProgress';
import { buttonStyles } from '@/components/ui/Button';

/**
 * Lector de píldoras: una tarjeta por pantalla, como historias.
 * Se avanza tocando la mitad derecha, deslizando o con las flechas del teclado.
 */
export function PillReader({
  pill,
  related,
}: {
  pill: Pill;
  related: { href: string; label: string; kind: string }[];
}) {
  const reduced = useReducedMotion();
  const total = pill.slides.length;
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const atEnd = i === total;
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (d: number) => {
      setI((p) => {
        const n = Math.max(0, Math.min(total, p + d));
        if (n !== p) haptic('tick');
        return n;
      });
      setDir(d);
    },
    [total],
  );

  useEffect(() => {
    if (atEnd) markPillRead(pill.id);
  }, [atEnd, pill.id]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  const slide = pill.slides[Math.min(i, total - 1)];
  const offset = reduced ? 0 : 32 * dir;

  return (
    <article className="mx-auto max-w-xl" aria-labelledby="titulo-pildora">
      <Link href="/biblioteca/pildoras" className="group inline-flex items-center gap-1.5 text-sm text-stone-500 transition-colors hover:text-stone-700">
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">←</span> Píldoras
      </Link>
      <h1 id="titulo-pildora" className="mt-6 font-serif text-3xl leading-tight text-stone-800 sm:text-4xl">
        {pill.title}
      </h1>

      <div className="mt-5 flex gap-1" aria-hidden>
        {pill.slides.map((_, k) => (
          <span key={k} className={`h-1 flex-1 rounded-full transition-colors duration-300 ${k < i || atEnd ? 'bg-sage-600' : k === i ? 'bg-sage-400' : 'bg-stone-200'}`} />
        ))}
      </div>

      <div
        className="relative mt-4 min-h-[22rem] select-none overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-soft"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {!atEnd ? (
            <m.section
              key={i}
              initial={{ opacity: 0, x: offset }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -offset }}
              transition={{ duration: 0.28 }}
              className="flex min-h-[22rem] flex-col justify-center p-7 sm:p-10"
              aria-live="polite"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                {i + 1} de {total}
              </p>
              <h2 className="mt-3 font-serif text-2xl text-stone-800">{slide.heading}</h2>
              <p className="mt-4 text-lg leading-relaxed text-stone-700">{slide.text}</p>
            </m.section>
          ) : (
            <m.section key="fin" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex min-h-[22rem] flex-col justify-center p-7 sm:p-10">
              <p className="font-serif text-2xl text-stone-800">Listo.</p>
              <p className="mt-2 text-stone-600">Si te sirvió, puedes llevarlo a la práctica:</p>
              {related.length > 0 && (
                <ul className="mt-5 space-y-2">
                  {related.map((r) => (
                    <li key={r.href}>
                      <Link href={r.href} className="flex items-center justify-between gap-4 rounded-2xl border border-stone-200 px-4 py-3 transition-colors hover:border-sage-300">
                        <span>
                          <span className="block text-xs uppercase tracking-wider text-stone-500">{r.kind}</span>
                          <span className="block text-stone-800">{r.label}</span>
                        </span>
                        <span aria-hidden>→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              <button type="button" onClick={() => go(-total)} className="mt-6 self-start text-sm text-sage-700 underline-offset-4 hover:underline">
                Volver a empezar
              </button>
            </m.section>
          )}
        </AnimatePresence>
      </div>

      <nav className="mt-5 flex items-center justify-between gap-3" aria-label="Tarjetas de la píldora">
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={i === 0}
          className={buttonStyles('secondary', 'min-h-11')}
        >
          ← Anterior
        </button>
        {!atEnd && (
          <button type="button" onClick={() => go(1)} className={buttonStyles('primary', 'min-h-11 px-6')}>
            {i === total - 1 ? 'Terminar' : 'Siguiente →'}
          </button>
        )}
      </nav>

      <details className="mt-10 text-sm text-stone-600">
        <summary className="cursor-pointer text-stone-500">Referencias</summary>
        <ul className="mt-3 space-y-2">
          {pill.references.map((r) => (
            <li key={r.citation}>{r.citation}</li>
          ))}
        </ul>
      </details>
    </article>
  );
}
