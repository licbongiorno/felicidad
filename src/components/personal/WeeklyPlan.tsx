'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { useMemo, useState } from 'react';
import { currentWeekKey, MAX_PLAN, planCandidates, toggle, weeklyPlanStatus } from '@/domain/personal';
import { useProgressStore } from '@/store/useProgressStore';
import { fadeUp } from '@/lib/motion';
import { Button } from '@/components/ui/Button';

/**
 * Plan semanal flexible: 1 a 3 prácticas elegidas para la semana. Cada lunes empieza en
 * blanco; lo no hecho no se arrastra ni se marca como fallo.
 */
export function WeeklyPlan({ className = '' }: { className?: string }) {
  const personal = useProgressStore((s) => s.personal);
  const sessions = useProgressStore((s) => s.sessions);
  const updatePersonal = useProgressStore((s) => s.updatePersonal);
  const status = useMemo(() => weeklyPlanStatus(personal, sessions), [personal, sessions]);
  const candidates = useMemo(() => planCandidates(personal, sessions), [personal, sessions]);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<string[]>([]);

  if (!status || editing) {
    return (
      <m.section variants={fadeUp} className={`rounded-2xl border border-stone-200/80 bg-white p-6 shadow-soft ${className}`} aria-labelledby="plan">
        <h2 id="plan" className="text-xs uppercase tracking-[0.2em] text-stone-500">
          Mi plan de la semana
        </h2>
        <p className="mt-3 font-serif text-xl text-stone-800">Elige 1 o 2 prácticas para esta semana</p>
        <p className="mt-1 text-sm text-stone-600">Pocas y realistas funcionan mejor que muchas. Puedes cambiarlas cuando quieras.</p>
        {candidates.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {candidates.map((p) => {
              const on = draft.includes(p.id);
              return (
                <button
                  key={p.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setDraft((d) => toggle(d, p.id, MAX_PLAN))}
                  className={`rounded-full px-3 py-1.5 text-sm ring-1 ring-inset transition-colors ${on ? 'bg-sage-700 text-stone-50 ring-sage-700' : 'bg-white text-stone-700 ring-stone-200 hover:ring-stone-300'}`}
                >
                  {p.title.split(':')[0]}
                </button>
              );
            })}
          </div>
        ) : (
          <p className="mt-4 text-sm text-stone-600">
            Marca prácticas como favoritas en{' '}
            <Link href="/gimnasio" className="text-sage-700 underline decoration-sage-300 underline-offset-2">
              Habilidades
            </Link>{' '}
            o elige tus objetivos para ver opciones aquí.
          </p>
        )}
        <div className="mt-5 flex justify-end gap-3">
          {editing && (
            <Button variant="ghost" onClick={() => setEditing(false)}>
              Cancelar
            </Button>
          )}
          <Button
            disabled={draft.length === 0}
            onClick={() => {
              updatePersonal({ plan: { week: currentWeekKey(), practiceIds: draft } });
              setEditing(false);
            }}
          >
            Guardar mi plan
          </Button>
        </div>
      </m.section>
    );
  }

  return (
    <m.section variants={fadeUp} className={`rounded-2xl border border-stone-200/80 bg-white p-6 shadow-soft ${className}`} aria-labelledby="plan">
      <div className="flex items-start justify-between gap-4">
        <h2 id="plan" className="text-xs uppercase tracking-[0.2em] text-stone-500">
          Mi plan de la semana
        </h2>
        <button
          type="button"
          onClick={() => {
            setDraft(status.items.map((i) => i.practice.id));
            setEditing(true);
          }}
          className="text-xs text-stone-500 hover:text-stone-700"
        >
          Cambiar
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {status.items.map(({ practice, done }) => (
          <li key={practice.id}>
            <Link
              href={`/gimnasio/${practice.id}`}
              className="flex items-center justify-between gap-4 rounded-2xl border border-stone-200 px-4 py-3 transition-colors hover:border-sage-300"
            >
              <span className="flex items-center gap-3">
                <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${done ? 'bg-sage-700 text-stone-50' : 'ring-1 ring-stone-300'}`} aria-hidden>
                  {done ? '✓' : ''}
                </span>
                <span className="font-serif text-lg text-stone-800">{practice.title.split(':')[0]}</span>
              </span>
              <span className="text-xs tabular-nums text-stone-500">{done ? `${done} ${done === 1 ? 'vez' : 'veces'}` : 'pendiente'}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs leading-relaxed text-stone-500">
        {status.complete ? 'Hiciste todo lo que te propusiste esta semana.' : 'El lunes empieza una semana nueva: lo que no se hizo no se arrastra.'}
      </p>
    </m.section>
  );
}
