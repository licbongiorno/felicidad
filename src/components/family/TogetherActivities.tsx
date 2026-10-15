'use client';

import { useMemo, useState } from 'react';
import { activitiesFor, pathProgress, pathsFor, stickersOf, type KidActivityLog, type KidProfile } from '@/domain/kids';
import { useKidsStore } from '@/store/useKidsStore';
import { Button } from '@/components/ui/Button';
import { Sticker } from '@/components/kids/KidArt';

/**
 * 0 a 3 años: actividades que el adulto hace con el chico, sin pantalla para él o ella.
 * Se leen aquí y se marcan como hechas: alimentan el panel y el jardín del perfil.
 */
export function TogetherActivities({ kid, logs }: { kid: KidProfile; logs: KidActivityLog[] }) {
  const logActivity = useKidsStore((s) => s.logActivity);
  const activities = useMemo(() => activitiesFor(kid.band), [kid.band]);
  const [open, setOpen] = useState<string | null>(null);
  const [done, setDone] = useState<string | null>(null);
  const [pathId, setPathId] = useState<string | null>(null);
  const count = (id: string) => logs.filter((l) => l.activityId === id).length;
  const doneSet = useMemo(() => stickersOf(logs), [logs]);
  const paths = pathsFor(kid.band);
  const path = paths.find((p) => p.id === pathId) ?? null;
  const shown = path ? path.activities.map((id) => activities.find((a) => a.id === id)).filter((a): a is (typeof activities)[number] => !!a) : activities;

  return (
    <section id="juntos" className="mt-10 scroll-mt-24" aria-labelledby="juntos-titulo">
      <h2 id="juntos-titulo" className="font-serif text-2xl text-stone-800">
        Para hacer juntos
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-600">
        Antes de los 2 años se recomienda no usar pantallas, y muy poco hasta los 5. Por eso, a esta edad la app es para ti: lee la actividad y háganla
        juntos, sin el teléfono de por medio.
      </p>
      {paths.length > 0 && (
        <div className="mt-5">
          <h3 className="text-sm font-medium text-stone-800">Caminos</h3>
          <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Filtrar por camino">
            <button
              type="button"
              aria-pressed={!path}
              onClick={() => setPathId(null)}
              className={`rounded-full px-3.5 py-1.5 text-sm ring-1 ring-inset ${!path ? 'bg-sage-700 text-stone-50 ring-sage-700' : 'bg-white text-stone-700 ring-stone-200'}`}
            >
              Todas ({activities.length})
            </button>
            {paths.map((p) => {
              const { completed, total } = pathProgress(p, doneSet);
              return (
                <button
                  key={p.id}
                  type="button"
                  aria-pressed={pathId === p.id}
                  onClick={() => setPathId(p.id)}
                  className={`rounded-full px-3.5 py-1.5 text-sm ring-1 ring-inset ${pathId === p.id ? 'bg-sage-700 text-stone-50 ring-sage-700' : 'bg-white text-stone-700 ring-stone-200'}`}
                >
                  {p.title} · {completed}/{total}
                </button>
              );
            })}
          </div>
          {path && <p className="mt-2 text-sm text-stone-600">{path.description} Háganlas en este orden, a su ritmo.</p>}
        </div>
      )}
      <ul className="kid-theme mt-4 grid gap-3">
        {shown.map((a) => {
          const expanded = open === a.id;
          const n = count(a.id);
          return (
            <li key={a.id} className="rounded-2xl border border-stone-200 bg-white shadow-soft">
              <button
                type="button"
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? null : a.id)}
                className="flex w-full items-center gap-4 p-4 text-left"
              >
                <Sticker skill={a.skill} earned={n > 0} size={48} className="shrink-0" />
                <span className="min-w-0 flex-1">
                  <span className="block font-medium text-stone-800">{a.title}</span>
                  <span className="block text-sm text-stone-600">
                    {a.tagline} · {a.minutes} min{n > 0 ? ` · ${n} ${n === 1 ? 'vez' : 'veces'}` : ''}
                  </span>
                </span>
                <span aria-hidden className={`text-stone-500 transition-transform ${expanded ? 'rotate-180' : ''}`}>
                  ⌄
                </span>
              </button>
              {expanded && a.kind === 'juntos' && (
                <div className="border-t border-stone-100 px-5 pb-5 pt-4">
                  <ol className="list-decimal space-y-2 pl-5 leading-relaxed text-stone-700">
                    {a.steps.map((s) => (
                      <li key={s.text}>{s.text}</li>
                    ))}
                  </ol>
                  {a.caution && (
                    <p className="mt-4 rounded-xl bg-stone-100 px-4 py-3 text-sm text-stone-800">
                      <strong>Importante:</strong> {a.caution}
                    </p>
                  )}
                  <p className="mt-4 text-sm leading-relaxed text-stone-600">{a.forAdult}</p>
                  <p className="mt-2 text-xs leading-relaxed text-stone-500">{a.evidence}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <Button
                      onClick={() => {
                        logActivity({ kidId: kid.id, activityId: a.id });
                        setDone(a.id);
                      }}
                    >
                      Lo hicimos hoy
                    </Button>
                    {done === a.id && (
                      <span role="status" className="text-sm text-stone-600">
                        ¡Anotado! Su jardín creció un poquito.
                      </span>
                    )}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
