'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import { REVIEW_LABEL, type ContentKind } from '@/domain/governance';
import { exportDecisions, KIND_LABEL, reviewQueue, type Decision, type ReviewDecision } from '@/domain/reviewQueue';
import { DEMO_MODE } from '@/lib/demo';
import { useAuth } from '@/providers/AuthProvider';
import { fadeUp, stagger } from '@/lib/motion';
import { Button } from '@/components/ui/Button';

const KEY = 'eudaimonia-review';
const KINDS: ContentKind[] = ['herramienta', 'instrumento', 'practica', 'antidoto', 'diario', 'articulo', 'programa', 'infantil', 'guia-familia', 'cuento', 'pildora'];

/** Correos autorizados a revisar (variable de Vercel NEXT_PUBLIC_REVIEWER_EMAILS, separados por comas). */
const REVIEWERS = (process.env.NEXT_PUBLIC_REVIEWER_EMAILS ?? '')
  .split(',')
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

export const canReview = (email: string | null | undefined) => DEMO_MODE || (!!email && REVIEWERS.includes(email.toLowerCase()));

function load(): Record<string, ReviewDecision> {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '{}');
  } catch {
    return {};
  }
}

/**
 * Panel de revisión clínica: recorrer todo el contenido, abrirlo, aprobarlo o pedir cambios
 * con un comentario, y exportar las decisiones. Las decisiones se guardan en este
 * dispositivo hasta exportarlas: el estado oficial vive en governance.ts.
 */
export function ReviewPanel() {
  const { user } = useAuth();
  const items = useMemo(() => reviewQueue(), []);
  const [decisions, setDecisions] = useState<Record<string, ReviewDecision>>({});
  const [kind, setKind] = useState<ContentKind | 'pendientes'>('pendientes');
  const [copied, setCopied] = useState(false);
  useEffect(() => setDecisions(load()), []);

  if (!canReview(user?.email)) {
    return (
      <section className="mx-auto max-w-xl py-16 text-center">
        <h1 className="font-serif text-3xl text-stone-800">Sección no disponible</h1>
        <p className="mt-3 text-stone-600">Esta página es sólo para el equipo de revisión clínica.</p>
      </section>
    );
  }

  const persist = (next: Record<string, ReviewDecision>) => {
    setDecisions(next);
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* sin almacenamiento: se pierden al recargar */
    }
  };
  const decide = (key: string, decision: Decision) =>
    persist({ ...decisions, [key]: { decision, comment: decisions[key]?.comment ?? '', at: new Date().toISOString() } });
  const comment = (key: string, text: string) =>
    persist({ ...decisions, [key]: { decision: decisions[key]?.decision ?? 'cambios', comment: text.slice(0, 500), at: new Date().toISOString() } });

  const visible = items.filter((i) => (kind === 'pendientes' ? i.record.status !== 'revisado' : i.kind === kind));
  const total = items.filter((i) => i.record.status !== 'revisado').length;
  const done = Object.keys(decisions).length;

  async function copy() {
    const text = exportDecisions(decisions, user?.email ?? 'demo', items);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      window.prompt('Copia este texto:', text);
    }
  }

  return (
    <m.div variants={stagger(0.05)} initial="hidden" animate="show" className="mx-auto max-w-4xl">
      <m.header variants={fadeUp}>
        <h1 className="font-serif text-4xl text-stone-800">Revisión clínica</h1>
        <p className="mt-3 max-w-2xl leading-relaxed text-stone-600">
          Recorre el contenido, ábrelo para leerlo como lo verá un paciente y decide. Tus decisiones se guardan en este dispositivo; al
          terminar, cópialas y envíalas para aplicarlas en la app.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <p className="text-sm text-stone-600">
            <span className="font-serif text-2xl tabular-nums text-stone-800">{done}</span> de {total} revisados
          </p>
          <Button onClick={copy} disabled={done === 0}>
            {copied ? 'Copiado ✓' : 'Copiar decisiones'}
          </Button>
          {done > 0 && (
            <Button variant="ghost" onClick={() => window.confirm('¿Borrar todas las decisiones de este dispositivo?') && persist({})}>
              Empezar de nuevo
            </Button>
          )}
        </div>
      </m.header>

      <m.div variants={fadeUp} role="tablist" aria-label="Tipo de contenido" className="mt-8 flex flex-wrap gap-1.5">
        {(['pendientes', ...KINDS] as const).map((k) => (
          <button
            key={k}
            type="button"
            role="tab"
            aria-selected={kind === k}
            onClick={() => setKind(k)}
            className={`rounded-full px-3.5 py-1.5 text-sm ring-1 ring-inset ${kind === k ? 'bg-sage-700 text-stone-50 ring-sage-700' : 'bg-white text-stone-600 ring-stone-200 hover:text-stone-800'}`}
          >
            {k === 'pendientes' ? 'Por revisar' : KIND_LABEL[k]}
          </button>
        ))}
      </m.div>

      <ul className="mt-6 space-y-3">
        {visible.map((i) => {
          const d = decisions[i.key];
          return (
            <li key={i.key} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-soft">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.14em] text-stone-500">
                    {KIND_LABEL[i.kind]} · v{i.record.version} · {REVIEW_LABEL[i.record.status]}
                  </p>
                  <Link href={i.href} target="_blank" className="mt-1 block font-serif text-xl text-stone-800 underline decoration-stone-300 underline-offset-4 hover:decoration-sage-600">
                    {i.title}
                  </Link>
                  <p className="mt-1 text-xs text-stone-500">
                    {[i.evidence, i.risk === 2 && 'Nivel de riesgo 2 · con precauciones'].filter(Boolean).join(' · ')}
                  </p>
                  {i.record.note && <p className="mt-2 text-sm text-stone-700">Nota: {i.record.note}</p>}
                </div>
                <div className="flex gap-2">
                  {(['aprobado', 'cambios'] as const).map((dec) => (
                    <button
                      key={dec}
                      type="button"
                      aria-pressed={d?.decision === dec}
                      onClick={() => decide(i.key, dec)}
                      className={`rounded-full px-3.5 py-1.5 text-sm ring-1 ring-inset ${
                        d?.decision === dec ? 'bg-sage-700 text-stone-50 ring-sage-700' : 'bg-white text-stone-700 ring-stone-200 hover:ring-stone-300'
                      }`}
                    >
                      {dec === 'aprobado' ? 'Aprobar' : 'Pedir cambios'}
                    </button>
                  ))}
                </div>
              </div>
              {d && (
                <textarea
                  rows={2}
                  value={d.comment}
                  onChange={(e) => comment(i.key, e.target.value)}
                  placeholder={d.decision === 'cambios' ? '¿Qué hay que cambiar?' : 'Comentario opcional'}
                  aria-label={`Comentario sobre ${i.title}`}
                  className="mt-4 w-full rounded-xl border border-stone-200 bg-stone-50/60 px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-500 focus:border-sage-400 focus:bg-white focus:outline-none"
                />
              )}
            </li>
          );
        })}
        {visible.length === 0 && <li className="py-10 text-center text-sm text-stone-600">No queda nada en esta lista.</li>}
      </ul>
    </m.div>
  );
}
