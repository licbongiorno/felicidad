'use client';

import Link from 'next/link';
import { AnimatePresence, m } from 'motion/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { JOURNAL_TEMPLATES, TEMPLATE_BY_TYPE } from '@/domain/journal';
import { isPublished, reviewOf } from '@/domain/governance';
import { daysAgo } from '@/domain/metrics';
import type { JournalType } from '@/domain/types';
import { useProgressStore } from '@/store/useProgressStore';
import { fadeUp, phaseVariants, stagger } from '@/lib/motion';
import { EvidenceBadge } from '@/components/ui/EvidencePanel';
import { DrawnCheck } from '@/components/motion/Reveal';
import { Button, buttonStyles } from '@/components/ui/Button';
import { JournalEditor } from './JournalEditor';
import { JournalTimeline } from './JournalTimeline';

type View = { kind: 'home' } | { kind: 'edit'; type: JournalType } | { kind: 'saved'; type: JournalType };

export function JournalHome() {
  const params = useSearchParams();
  const router = useRouter();
  const initial = params.get('nuevo') as JournalType | null;
  const [view, setView] = useState<View>(initial && TEMPLATE_BY_TYPE[initial] ? { kind: 'edit', type: initial } : { kind: 'home' });
  const [direction, setDirection] = useState(1);
  // Campos de texto propuestos por la app (p. ej. un experimento desde «Patrones»); se leen una sola vez.
  const [prefill] = useState<Record<string, string> | undefined>(() => {
    if (!initial || !TEMPLATE_BY_TYPE[initial]) return undefined;
    const out: Record<string, string> = {};
    for (const f of TEMPLATE_BY_TYPE[initial].fields) {
      const v = params.get(f.id);
      if (f.kind === 'text' && v) out[f.id] = v;
    }
    return Object.keys(out).length ? out : undefined;
  });
  const journal = useProgressStore((s) => s.journal);
  const status = useProgressStore((s) => s.status);

  const thisWeek = useMemo(() => journal.filter((j) => j.createdAt >= daysAgo(6)).length, [journal]);

  function go(next: View, dir: number) {
    setDirection(dir);
    setView(next);
    if (params.get('nuevo')) router.replace('/diario', { scroll: false });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <AnimatePresence mode="wait" custom={direction} initial={false}>
      <m.div key={view.kind === 'home' ? 'home' : `${view.kind}-${view.type}`} custom={direction} variants={phaseVariants} initial="enter" animate="center" exit="exit">
        {view.kind === 'edit' ? (
          <JournalEditor
            template={TEMPLATE_BY_TYPE[view.type]}
            initialValues={view.type === initial ? prefill : undefined}
            onCancel={() => go({ kind: 'home' }, -1)}
            onSaved={() => go({ kind: 'saved', type: view.type }, 1)}
          />
        ) : view.kind === 'saved' ? (
          <m.section variants={stagger(0.1, 0.1)} initial="hidden" animate="show" className="mx-auto max-w-md py-10 text-center">
            <m.div variants={fadeUp} className="flex justify-center">
              <DrawnCheck className="h-12 w-12" />
            </m.div>
            <m.h2 variants={fadeUp} className="mt-5 font-serif text-3xl text-stone-800">
              Entrada guardada
            </m.h2>
            <m.p variants={fadeUp} className="mt-3 text-stone-600">
              Escribir es una forma de ordenar la experiencia. Lo que acabas de hacer cuenta.
            </m.p>
            <m.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-3">
              {view.type === 'tarjeta-diaria' && (
                <Link href="/diario/tarjeta-semanal" className={buttonStyles('primary')}>
                  Ver la semana
                </Link>
              )}
              <Button variant="secondary" onClick={() => go({ kind: 'home' }, -1)}>
                Volver al diario
              </Button>
            </m.div>
          </m.section>
        ) : (
          <m.div variants={stagger(0.06)} initial="hidden" animate="show">
            <m.header variants={fadeUp} className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h1 className="font-serif text-4xl text-stone-800 sm:text-5xl">Diario</h1>
                <p className="mt-3 max-w-xl leading-relaxed text-stone-600">
                  Registros estructurados, cada uno basado en una intervención con evidencia. Escribir obliga a poner la
                  experiencia en palabras, y eso ya la transforma.
                </p>
              </div>
              <p className="text-sm text-stone-500">
                <span className="font-serif text-2xl tabular-nums text-stone-700">{thisWeek}</span> entradas esta semana
              </p>
            </m.header>

            {journal.some((j) => j.type === 'tarjeta-diaria') && (
              <m.div variants={fadeUp} className="mt-8">
                <Link
                  href="/diario/tarjeta-semanal"
                  className="group flex max-w-2xl items-center justify-between gap-6 rounded-2xl border border-stone-200 bg-white px-6 py-4 transition-[border-color,box-shadow] hover:border-sage-300 hover:shadow-soft"
                >
                  <span>
                    <span className="block font-serif text-lg text-stone-800">Tarjeta diaria DBT · vista semanal</span>
                    <span className="block text-sm text-stone-600">Tus tarjetas de la semana en una planilla para llevar a terapia.</span>
                  </span>
                  <span className="text-stone-500 transition-transform group-hover:translate-x-0.5" aria-hidden>
                    →
                  </span>
                </Link>
              </m.div>
            )}

            <m.h2 variants={fadeUp} className="mb-4 mt-12 text-xs uppercase tracking-[0.2em] text-stone-500">
              Nueva entrada
            </m.h2>
            <m.ul variants={stagger(0.05)} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {JOURNAL_TEMPLATES.filter((t) => !t.hidden && isPublished('diario', t.type)).map((t) => (
                <m.li key={t.type} variants={fadeUp}>
                  <m.button
                    type="button"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.985 }}
                    onClick={() => go({ kind: 'edit', type: t.type }, 1)}
                    className="group flex h-full w-full flex-col rounded-2xl border border-stone-200 bg-white p-5 text-left transition-[border-color,box-shadow] duration-300 hover:border-sage-300 hover:shadow-lift"
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span className="font-serif text-lg text-stone-800">
                        {t.title}
                        {reviewOf('diario', t.type).status === 'borrador' && (
                          <span className="ml-2 align-middle rounded-full bg-stone-800 px-2 py-0.5 font-sans text-[10px] text-stone-50">Borrador</span>
                        )}
                      </span>
                      <span className="mt-1 text-stone-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-sage-600" aria-hidden>
                        +
                      </span>
                    </span>
                    <span className="mt-1.5 flex-1 text-sm leading-relaxed text-stone-600">{t.summary}</span>
                    <span className="mt-4 flex items-center justify-between gap-2 text-xs text-stone-500">
                      <span>{t.suggestedMinutes ? `${t.suggestedMinutes} min` : '5 min'}</span>
                      <EvidenceBadge level={t.evidenceLevel} />
                    </span>
                  </m.button>
                </m.li>
              ))}
            </m.ul>

            <m.h2 variants={fadeUp} className="mb-6 mt-16 text-xs uppercase tracking-[0.2em] text-stone-500">
              Tus entradas
            </m.h2>
            <m.div variants={fadeUp}>
              {status === 'ready' ? (
                <JournalTimeline entries={journal} />
              ) : (
                <div className="space-y-3">
                  <div className="skeleton h-20" />
                  <div className="skeleton h-20" />
                </div>
              )}
            </m.div>
          </m.div>
        )}
      </m.div>
    </AnimatePresence>
  );
}
