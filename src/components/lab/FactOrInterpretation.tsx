'use client';

import Link from 'next/link';
import { AnimatePresence, m } from 'motion/react';
import { useMemo, useState } from 'react';
import { FACT_ITEMS, type FactItem } from '@/domain/lab';
import { THINKING_TRAPS } from '@/domain/thinkingTraps';
import { collapse, EASE_OUT, fadeUp, stagger } from '@/lib/motion';
import { haptic } from '@/lib/haptics';
import { Button, buttonStyles } from '@/components/ui/Button';

const TRAP_NAME = Object.fromEntries(THINKING_TRAPS.map((t) => [t.id, t.name]));

/** Orden aleatorio estable por partida. */
function shuffle<T>(xs: T[], seed: number): T[] {
  const out = [...xs];
  let s = seed;
  for (let i = out.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * ¿Hecho o interpretación? Un entrenamiento breve de «comprobar los hechos»: distinguir
 * lo que pasó de lo que la mente agrega. No hay puntuación guardada.
 */
export function FactOrInterpretation() {
  const [round, setRound] = useState(1);
  const items = useMemo(() => shuffle(FACT_ITEMS, round * 7919), [round]);
  const [i, setI] = useState(0);
  const [answer, setAnswer] = useState<FactItem['kind'] | null>(null);
  const [right, setRight] = useState(0);
  const done = i >= items.length;
  const item = items[Math.min(i, items.length - 1)];

  function pick(kind: FactItem['kind']) {
    if (answer) return;
    setAnswer(kind);
    if (kind === item.kind) {
      setRight((r) => r + 1);
      haptic('success');
    } else haptic('tick');
  }

  function next() {
    setAnswer(null);
    setI((x) => x + 1);
  }

  function again() {
    setRound((r) => r + 1);
    setI(0);
    setAnswer(null);
    setRight(0);
  }

  return (
    <div className="mx-auto max-w-xl">
      <m.header variants={stagger(0.06)} initial="hidden" animate="show">
        <m.p variants={fadeUp} className="text-xs uppercase tracking-[0.2em] text-stone-500">
          Entrenamiento · comprobar los hechos
        </m.p>
        <m.h1 variants={fadeUp} className="mt-2 font-serif text-4xl text-stone-800">
          ¿Hecho o interpretación?
        </m.h1>
        <m.p variants={fadeUp} className="mt-4 leading-relaxed text-stone-600">
          Un hecho es lo que registraría una cámara. Una interpretación es lo que la mente agrega: suposiciones, predicciones y
          etiquetas. Separarlos cambia cómo te sientes.
        </m.p>
      </m.header>

      {!done ? (
        <section className="mt-10" aria-live="polite">
          <div className="flex items-center gap-1" aria-hidden>
            {items.map((_, k) => (
              <span key={k} className={`h-1 flex-1 rounded-full ${k < i ? 'bg-sage-500' : k === i ? 'bg-sage-300' : 'bg-stone-200'}`} />
            ))}
          </div>
          <AnimatePresence mode="wait">
            <m.div
              key={`${round}-${i}`}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE_OUT } }}
              exit={{ opacity: 0, x: -16, transition: { duration: 0.2 } }}
              className="mt-8 rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-soft"
            >
              <p className="text-xs tabular-nums text-stone-500">
                {i + 1} de {items.length}
              </p>
              <p className="mt-4 font-serif text-2xl leading-snug text-stone-800">«{item.text}»</p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {(['hecho', 'interpretacion'] as const).map((k) => {
                  const isAnswer = answer !== null && item.kind === k;
                  const isWrongPick = answer === k && item.kind !== k;
                  return (
                    <button
                      key={k}
                      type="button"
                      onClick={() => pick(k)}
                      disabled={answer !== null}
                      className={`rounded-2xl px-4 py-3 text-[15px] font-medium ring-1 ring-inset transition-colors ${
                        isAnswer ? 'bg-sage-700 text-stone-50 ring-sage-700' : isWrongPick ? 'bg-stone-100 text-stone-500 ring-stone-200' : 'bg-white text-stone-700 ring-stone-200 hover:ring-stone-300'
                      }`}
                    >
                      {k === 'hecho' ? 'Hecho' : 'Interpretación'}
                    </button>
                  );
                })}
              </div>
              <AnimatePresence initial={false}>
                {answer && (
                  <m.div variants={collapse} initial="hidden" animate="show" exit="exit" className="overflow-hidden">
                    <p className="mt-6 text-sm leading-relaxed text-stone-700">
                      <span className="font-medium">{answer === item.kind ? 'Así es. ' : 'Mira de nuevo. '}</span>
                      Es {item.kind === 'hecho' ? 'un hecho' : 'una interpretación'}: {item.why.charAt(0).toLowerCase() + item.why.slice(1)}
                    </p>
                    {item.trap && (
                      <Link
                        href={`/biblioteca/trampas-del-pensamiento#${item.trap}`}
                        className="mt-2 inline-block text-sm text-sage-700 underline decoration-sage-300 underline-offset-2"
                      >
                        Trampa: {TRAP_NAME[item.trap]}
                      </Link>
                    )}
                    <div className="mt-6">
                      <Button onClick={next}>{i === items.length - 1 ? 'Ver resumen' : 'Siguiente'}</Button>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </m.div>
          </AnimatePresence>
        </section>
      ) : (
        <m.section variants={stagger(0.1)} initial="hidden" animate="show" className="mt-10 rounded-3xl border border-stone-200 bg-white p-8 shadow-soft">
          <m.p variants={fadeUp} className="font-serif text-5xl text-stone-800">
            {right} <span className="text-2xl text-stone-500">de {items.length}</span>
          </m.p>
          <m.p variants={fadeUp} className="mt-4 leading-relaxed text-stone-600">
            En la vida real cuesta más: cuando la emoción sube, las interpretaciones se sienten como hechos. Por eso ayuda entrenarlo en
            calma.
          </m.p>
          <m.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
            <Link href="/gimnasio/comprobar-hechos" className={buttonStyles('primary')}>
              Practicar comprobar los hechos
            </Link>
            <Button variant="secondary" onClick={again}>
              Jugar de nuevo
            </Button>
          </m.div>
        </m.section>
      )}
    </div>
  );
}
