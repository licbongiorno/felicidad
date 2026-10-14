'use client';

import Link from 'next/link';
import { AnimatePresence, m } from 'motion/react';
import { useMemo, useState } from 'react';
import { compareScores, hasRiskResponse, INSTRUMENTS, type Instrument } from '@/domain/instruments';
import { isPublished, reviewOf, REVIEW_LABEL } from '@/domain/governance';
import { daysAgo } from '@/domain/metrics';
import type { Assessment } from '@/domain/types';
import { useProgressStore } from '@/store/useProgressStore';
import { EASE_OUT, fadeUp, gentleSpring, phaseVariants, stagger } from '@/lib/motion';
import { haptic } from '@/lib/haptics';
import { Button } from '@/components/ui/Button';
import { CountUp } from '@/components/motion/Reveal';
import { CrisisResources } from '@/components/safety/CrisisResources';

const DATE = new Intl.DateTimeFormat('es', { day: 'numeric', month: 'short', year: 'numeric' });

type View = { kind: 'home' } | { kind: 'form'; instrument: Instrument } | { kind: 'result'; instrument: Instrument; score: number; previous?: number; risk: boolean };

/**
 * Evaluaciones con instrumentos validados (WHO-5, GAD-7 y, en borrador, PHQ-9).
 * Si un ítem de riesgo recibe una respuesta > 0, los recursos de ayuda se muestran
 * ANTES que la puntuación.
 */
export function Assessments() {
  const assessments = useProgressStore((s) => s.assessments);
  const logAssessment = useProgressStore((s) => s.logAssessment);
  const instruments = INSTRUMENTS.filter((i) => isPublished('instrumento', i.id));
  const [view, setView] = useState<View>({ kind: 'home' });

  const byInstrument = useMemo(() => {
    const map = new Map<string, Assessment[]>();
    for (const a of assessments) map.set(a.instrument, [...(map.get(a.instrument) ?? []), a]);
    return map;
  }, [assessments]);

  function submit(instrument: Instrument, answers: number[]) {
    const score = instrument.score(answers);
    const previous = byInstrument.get(instrument.id)?.[0]?.score;
    logAssessment({ instrument: instrument.id, items: answers, score });
    haptic('success');
    setView({ kind: 'result', instrument, score, previous, risk: hasRiskResponse(instrument, answers) });
  }

  const key = view.kind === 'home' ? 'home' : `${view.kind}-${view.instrument.id}`;

  return (
    <AnimatePresence mode="wait" custom={view.kind === 'home' ? -1 : 1} initial={false}>
      <m.div key={key} custom={view.kind === 'home' ? -1 : 1} variants={phaseVariants} initial="enter" animate="center" exit="exit">
        {view.kind === 'form' ? (
          <Form instrument={view.instrument} onBack={() => setView({ kind: 'home' })} onSubmit={(a) => submit(view.instrument, a)} />
        ) : view.kind === 'result' ? (
          <Result {...view} onDone={() => setView({ kind: 'home' })} />
        ) : (
          <m.section variants={stagger(0.07)} initial="hidden" animate="show">
            <m.header variants={fadeUp} className="max-w-2xl">
              <h1 className="font-serif text-4xl text-stone-800 sm:text-5xl">Evaluaciones</h1>
              <p className="mt-3 leading-relaxed text-stone-600">
                El panel muestra cuánto practicas. Esta sección mide cómo estás, con cuestionarios validados
                internacionalmente. Repítelos cada dos semanas para ver tu evolución con criterio clínico. Ninguno es un
                diagnóstico.
              </p>
            </m.header>

            <m.div variants={stagger(0.08)} className="mt-10 grid gap-5 lg:grid-cols-2">
              {instruments.map((ins) => (
                <InstrumentCard key={ins.id} instrument={ins} history={byInstrument.get(ins.id) ?? []} onStart={() => setView({ kind: 'form', instrument: ins })} />
              ))}
            </m.div>
          </m.section>
        )}
      </m.div>
    </AnimatePresence>
  );
}

function InstrumentCard({ instrument, history, onStart }: { instrument: Instrument; history: Assessment[]; onStart: () => void }) {
  const last = history[0];
  const due = !last || last.createdAt < daysAgo(instrument.intervalDays - 1);
  const review = reviewOf('instrumento', instrument.id);
  return (
    <m.article variants={fadeUp} className="flex flex-col rounded-3xl border border-stone-200 bg-white p-7 shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs uppercase tracking-[0.2em] text-stone-500">{instrument.purpose}</p>
        {review.status === 'borrador' && (
          <span className="rounded-full bg-stone-800 px-2.5 py-0.5 text-[11px] text-stone-50">{REVIEW_LABEL.borrador}</span>
        )}
      </div>
      <h2 className="mt-3 font-serif text-2xl text-stone-800">{instrument.title}</h2>

      {history.length > 0 ? (
        <ul className="mt-5 divide-y divide-stone-100">
          {history.slice(0, 4).map((a, i) => {
            const cmp = compareScores(instrument, a.score, history[i + 1]?.score);
            return (
              <li key={a.id} className="flex items-center gap-4 py-2.5">
                <span className="w-24 text-sm text-stone-600">{DATE.format(a.createdAt)}</span>
                <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-stone-100" aria-hidden>
                  <m.div
                    className="h-full rounded-full bg-sage-500"
                    style={{ originX: 0 }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: (a.score - (instrument.minScore ?? 0)) / (instrument.maxScore - (instrument.minScore ?? 0)) }}
                    transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.2 + i * 0.05 }}
                  />
                </div>
                <span className="w-12 text-right font-serif text-lg tabular-nums text-stone-800">{a.score}</span>
                <span className="w-20 text-right text-xs text-stone-500">{cmp ? `${cmp.delta > 0 ? '+' : ''}${cmp.delta}${cmp.relevant ? ' •' : ''}` : 'base'}</span>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="mt-4 text-sm text-stone-600">Aún no lo has respondido. La primera vez será tu línea base.</p>
      )}

      <p className="mt-4 text-xs leading-relaxed text-stone-500">
        Escala {instrument.minScore ?? 0}–{instrument.maxScore}, {instrument.higherIsBetter ? 'más es mejor' : 'más indica más síntomas'}. Cambio relevante: {instrument.relevantChange} puntos (•).
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button onClick={onStart} aria-label={`${due ? 'Responder ahora' : 'Responder de nuevo'}: ${instrument.title}`}>
          {due ? 'Responder ahora' : 'Responder de nuevo'}
        </Button>
        {!due && last && (
          <span className="text-sm text-stone-500">Próxima sugerida: {DATE.format(new Date(last.createdAt.getTime() + instrument.intervalDays * 86_400_000))}</span>
        )}
      </div>

      <p className="mt-6 border-t border-stone-100 pt-4 text-[11px] leading-relaxed text-stone-500">
        {instrument.references[0].citation}{' '}
        {instrument.references[0].doi && (
          <a href={`https://doi.org/${instrument.references[0].doi}`} target="_blank" rel="noopener noreferrer" className="text-sage-700 underline decoration-sage-300 underline-offset-2 hover:decoration-sage-700">
            doi:{instrument.references[0].doi}
          </a>
        )}
      </p>
    </m.article>
  );
}

function Form({ instrument, onBack, onSubmit }: { instrument: Instrument; onBack: () => void; onSubmit: (answers: number[]) => void }) {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(instrument.items.length).fill(null));
  const complete = answers.every((a) => a !== null);
  return (
    <section className="mx-auto max-w-2xl">
      <button type="button" onClick={onBack} className="text-sm text-stone-600 hover:text-stone-800">
        ← Volver
      </button>
      <p className="mt-6 text-xs uppercase tracking-[0.2em] text-stone-500">{instrument.title}</p>
      <h1 className="mt-2 font-serif text-3xl text-stone-800 sm:text-4xl">{instrument.stem}</h1>
      <p className="mt-3 text-stone-600">Elige la opción que mejor describa cómo te has sentido. No hay respuestas correctas.</p>

      <ol className="mt-10 space-y-8">
        {instrument.items.map((item, i) => (
          <li key={item}>
            <fieldset>
              <legend className="font-serif text-xl text-stone-800">
                <span className="mr-2 text-sm tabular-nums text-stone-500">{i + 1}.</span>
                {item}
              </legend>
              <div role="radiogroup" aria-label={item} className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {(instrument.itemOptions?.[i] ?? instrument.options).map((o) => {
                  const selected = answers[i] === o.value;
                  return (
                    <button
                      key={o.value}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => {
                        haptic('tick');
                        setAnswers((prev) => prev.map((v, j) => (j === i ? o.value : v)));
                      }}
                      className={`relative rounded-xl px-3 py-3 text-left text-sm ring-1 ring-inset transition-colors ${
                        selected ? 'text-stone-50 ring-sage-700' : 'bg-white text-stone-700 ring-stone-200 hover:ring-stone-300'
                      }`}
                    >
                      {selected && <m.span layoutId={`${instrument.id}-${i}`} transition={gentleSpring} className="absolute inset-0 rounded-xl bg-sage-700" />}
                      <span className="relative">{o.label}</span>
                    </button>
                  );
                })}
              </div>
            </fieldset>
          </li>
        ))}
      </ol>

      <div className="mt-10 flex items-center justify-between">
        <p className="text-sm tabular-nums text-stone-500">
          {answers.filter((a) => a !== null).length}/{instrument.items.length} respondidas
        </p>
        <Button disabled={!complete} onClick={() => onSubmit(answers as number[])}>
          Ver resultado
        </Button>
      </div>
    </section>
  );
}

function Result({ instrument, score, previous, risk, onDone }: { instrument: Instrument; score: number; previous?: number; risk: boolean; onDone: () => void }) {
  const info = instrument.interpret(score);
  const cmp = compareScores(instrument, score, previous);
  return (
    <m.section variants={stagger(0.1, 0.1)} initial="hidden" animate="show" className="mx-auto max-w-xl text-center">
      {risk && (
        <m.div variants={fadeUp} role="alert" className="mb-10 rounded-2xl border border-stone-300 bg-white p-6 text-left shadow-soft">
          <h2 className="font-serif text-2xl text-stone-800">Gracias por responder con sinceridad</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-stone-700">
            Has indicado pensamientos de muerte o de hacerte daño. Lo que sientes merece la atención de una persona ahora.
            Por favor, contacta con alguno de estos recursos, o con alguien de confianza.
          </p>
          <CrisisResources className="mt-2" />
          <p className="mt-4 text-sm text-stone-600">Si estás en peligro inmediato, llama a emergencias.</p>
          {isPublished('herramienta', 'plan-seguridad') && (
            <Link href="/plan-de-seguridad" className="mt-4 inline-block text-sm font-medium text-sage-700 underline decoration-sage-300 underline-offset-2">
              Abrir mi plan de seguridad
            </Link>
          )}
        </m.div>
      )}

      <m.p variants={fadeUp} className="text-xs uppercase tracking-[0.2em] text-stone-500">
        Tu puntuación · {instrument.short}
      </m.p>
      <m.p variants={fadeUp} className="mt-3 font-serif text-7xl text-stone-800">
        <CountUp value={score} duration={1.4} />
        <span className="text-3xl text-stone-500">/{instrument.maxScore}</span>
      </m.p>
      {cmp && (
        <m.p variants={fadeUp} className="mt-3 text-sm text-stone-600">
          {cmp.label} respecto a la anterior ({cmp.delta > 0 ? '+' : ''}
          {cmp.delta})
        </m.p>
      )}
      <m.div variants={fadeUp} className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 text-left shadow-soft">
        <h2 className="font-serif text-xl text-stone-800">{info.title}</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-stone-600">{info.body}</p>
      </m.div>
      <m.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-3">
        <Button variant="secondary" onClick={onDone}>
          Ver historial
        </Button>
        <Link href="/programas" className="inline-flex items-center rounded-full px-5 py-2.5 text-sm text-stone-600 hover:bg-stone-100">
          Explorar programas
        </Link>
      </m.div>
    </m.section>
  );
}
