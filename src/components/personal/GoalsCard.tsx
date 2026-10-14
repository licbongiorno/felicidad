'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { useMemo, useState } from 'react';
import { MODULES, type ModuleId } from '@/domain/catalog';
import { goalSuggestions, MAX_GOALS, toggle } from '@/domain/personal';
import { useProgressStore } from '@/store/useProgressStore';
import { fadeUp } from '@/lib/motion';
import { Button, buttonStyles } from '@/components/ui/Button';
import { ModuleIcon } from '@/components/gym/ModuleIcons';

/**
 * Objetivos personales: hasta tres módulos que la persona quiere trabajar. Sin objetivos,
 * pregunta; con objetivos, sugiere la próxima práctica de cada uno.
 */
export function GoalsCard({ className = '' }: { className?: string }) {
  const goals = useProgressStore((s) => s.personal.goals);
  const sessions = useProgressStore((s) => s.sessions);
  const updatePersonal = useProgressStore((s) => s.updatePersonal);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<string[]>(goals);
  const suggestions = useMemo(() => goalSuggestions(goals, sessions), [goals, sessions]);
  const choosing = editing || goals.length === 0;

  if (choosing) {
    return (
      <m.section variants={fadeUp} className={`rounded-2xl border border-stone-200/80 bg-white p-6 shadow-soft ${className}`} aria-labelledby="objetivos">
        <h2 id="objetivos" className="font-serif text-2xl text-stone-800">
          ¿Qué te gustaría trabajar?
        </h2>
        <p className="mt-1 text-sm text-stone-600">Elige hasta {MAX_GOALS}. Las sugerencias se ajustarán a lo que elijas. Puedes cambiarlo cuando quieras.</p>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.filter((mod) => mod.practices.length > 0).map((mod) => {
            const on = draft.includes(mod.id);
            const full = !on && draft.length >= MAX_GOALS;
            return (
              <li key={mod.id}>
                <button
                  type="button"
                  aria-pressed={on}
                  disabled={full}
                  onClick={() => setDraft((d) => toggle(d, mod.id, MAX_GOALS))}
                  className={`flex w-full items-center gap-3 rounded-2xl p-3 text-left text-sm ring-1 ring-inset transition-colors disabled:opacity-40 ${
                    on ? 'bg-sage-50 text-stone-800 ring-sage-400' : 'bg-white text-stone-700 ring-stone-200 hover:ring-stone-300'
                  }`}
                >
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${on ? 'bg-sage-700 text-stone-50' : 'bg-sage-50 text-sage-700'}`}>
                    <ModuleIcon id={mod.id} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-medium">{mod.title}</span>
                    <span className="block text-xs leading-relaxed text-stone-500">{mod.purpose}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <div className="mt-5 flex justify-end gap-3">
          {goals.length > 0 && (
            <Button
              variant="ghost"
              onClick={() => {
                setDraft(goals);
                setEditing(false);
              }}
            >
              Cancelar
            </Button>
          )}
          <Button
            disabled={draft.length === 0}
            onClick={() => {
              updatePersonal({ goals: draft });
              setEditing(false);
            }}
          >
            Guardar
          </Button>
        </div>
      </m.section>
    );
  }

  return (
    <m.section variants={fadeUp} className={`rounded-2xl border border-stone-200/80 bg-white p-6 shadow-soft ${className}`} aria-labelledby="objetivos">
      <div className="flex items-start justify-between gap-4">
        <h2 id="objetivos" className="text-xs uppercase tracking-[0.2em] text-stone-500">
          Para tus objetivos
        </h2>
        <button
          type="button"
          onClick={() => {
            setDraft(goals);
            setEditing(true);
          }}
          className="text-xs text-stone-500 hover:text-stone-700"
        >
          Cambiar
        </button>
      </div>
      <ul className="mt-4 grid gap-3 md:grid-cols-3">
        {suggestions.map(({ module, next, practiced }) => (
          <li key={module.id} className="flex flex-col rounded-2xl bg-stone-50 p-4">
            <span className="flex items-center gap-2 text-sm font-medium text-stone-800">
              <ModuleIcon id={module.id as ModuleId} className="h-4 w-4 text-sage-700" />
              {module.title}
            </span>
            <span className="mt-1 text-xs text-stone-500">
              {practiced} de {module.practices.length} prácticas probadas
            </span>
            {next && (
              <Link href={`/gimnasio/${next.id}`} className={buttonStyles('secondary', 'mt-4 self-start')}>
                {next.title.split(':')[0]} →
              </Link>
            )}
          </li>
        ))}
      </ul>
    </m.section>
  );
}
