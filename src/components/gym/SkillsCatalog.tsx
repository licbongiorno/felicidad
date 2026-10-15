'use client';

import Link from 'next/link';
import { AnimatePresence, m } from 'motion/react';
import { useMemo, useState } from 'react';
import { PRACTICE_BY_ID, totalDurationSec } from '@/domain/practices';
import { TEMPLATE_BY_TYPE } from '@/domain/journal';
import { LEVEL_LABEL, levelOf } from '@/domain/levels';
import { isPublished } from '@/domain/governance';
import { APPROACH_DESCRIPTION, APPROACH_LABEL, MODULES, practiceApproaches, practiceRisk, type Approach } from '@/domain/catalog';
import { EvidenceBadge } from '@/components/ui/EvidencePanel';
import { fadeUp, gentleSpring, stagger } from '@/lib/motion';
import { ModuleIcon } from './ModuleIcons';
import { FavoriteButton } from '@/components/personal/FavoriteButton';
import { useProgressStore } from '@/store/useProgressStore';
import type { Practice } from '@/domain/types';

const FILTERS: (Approach | 'todas')[] = ['todas', 'dbt', 'tcc', 'act', 'cft', 'mindfulness', 'esquemas', 'psicodinamica', 'positiva', 'contemplativa', 'relajacion'];

/**
 * Catálogo de habilidades por necesidad psicológica, con filtro por enfoque terapéutico.
 * Cada módulo muestra sus prácticas guiadas, las plantillas del diario y lecturas útiles.
 */
export function SkillsCatalog() {
  const [filter, setFilter] = useState<Approach | 'todas'>('todas');
  const favorites = useProgressStore((s) => s.personal.favorites);
  const favoritePractices = favorites.map((id) => PRACTICE_BY_ID[id]).filter((p): p is Practice => Boolean(p) && isPublished('practica', p.id));

  const modules = useMemo(
    () =>
      MODULES.map((mod) => ({
        ...mod,
        items: mod.practices
          .filter((id) => PRACTICE_BY_ID[id] && isPublished('practica', id))
          .filter((id) => filter === 'todas' || practiceApproaches(id).includes(filter))
          .map((id) => PRACTICE_BY_ID[id]),
        templates: mod.journal.filter((t) => isPublished('diario', t)),
      })).filter((mod) => mod.items.length > 0 || (filter === 'todas' && mod.templates.length > 0)),
    [filter],
  );

  return (
    <div>
      {/* Índice de módulos ------------------------------------------------------------ */}
      <nav aria-label="Módulos" className="mt-10">
        <h2 className="text-xs uppercase tracking-[0.2em] text-stone-600">¿Qué necesitas hoy?</h2>
        <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {MODULES.filter((mod) => mod.practices.length > 0).map((mod) => (
            <li key={mod.id}>
              <a
                href={`#${mod.id}`}
                className="group flex h-full items-center gap-3 rounded-2xl border border-stone-200 bg-white p-3 text-sm text-stone-700 transition-[border-color,box-shadow] hover:border-sage-300 hover:shadow-soft"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-50 text-sage-700">
                  <ModuleIcon id={mod.id} className="h-5 w-5" />
                </span>
                <span className="leading-snug">{mod.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Filtro por enfoque ----------------------------------------------------------- */}
      <div className="sticky top-[57px] z-10 -mx-5 mt-10 bg-stone-50/90 px-5 py-3 sm:-mx-6 sm:px-6 backdrop-blur-md">
        <div role="radiogroup" aria-label="Filtrar por enfoque" className="flex gap-1.5 overflow-x-auto pb-1">
          {FILTERS.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                type="button"
                role="radio"
                aria-checked={active}
                title={f === 'todas' ? 'Todas las prácticas' : APPROACH_DESCRIPTION[f]}
                onClick={() => setFilter(f)}
                className={`relative shrink-0 rounded-full px-3.5 py-1.5 text-sm ring-1 ring-inset transition-colors ${
                  active ? 'text-stone-50 ring-sage-700' : 'bg-white text-stone-600 ring-stone-200 hover:text-stone-800'
                }`}
              >
                {active && <m.span layoutId="approach-pill" transition={gentleSpring} className="absolute inset-0 rounded-full bg-sage-700" />}
                <span className="relative">{f === 'todas' ? 'Todas' : APPROACH_LABEL[f]}</span>
              </button>
            );
          })}
        </div>
        {filter !== 'todas' && <p className="mt-2 text-xs leading-relaxed text-stone-500">{APPROACH_DESCRIPTION[filter]}</p>}
      </div>

      {favoritePractices.length > 0 && filter === 'todas' && (
        <section className="mt-10" aria-labelledby="favoritas">
          <h2 id="favoritas" className="text-xs uppercase tracking-[0.2em] text-stone-600">
            Tus favoritas
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {favoritePractices.map((p) => (
              <li key={p.id}>
                <Link href={`/gimnasio/${p.id}`} className="inline-flex items-center gap-2 rounded-full border border-sage-200 bg-sage-50 px-3.5 py-1.5 text-sm text-stone-800 hover:border-sage-300">
                  <span className="text-sage-700" aria-hidden>
                    ♥
                  </span>
                  {p.title.split(':')[0]}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <AnimatePresence mode="popLayout" initial={false}>
        <m.div key={filter} variants={stagger(0.05)} initial="hidden" animate="show">
          {modules.map((mod) => (
            <m.section key={mod.id} id={mod.id} variants={fadeUp} className="mt-12 scroll-mt-32" aria-labelledby={`t-${mod.id}`}>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sage-50 text-sage-700 shadow-soft">
                  <ModuleIcon id={mod.id} className="h-6 w-6" />
                </span>
                <div>
                  <h2 id={`t-${mod.id}`} className="font-serif text-2xl text-stone-800">
                    {mod.title}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600">{mod.purpose}</p>
                </div>
              </div>

              {mod.items.length > 0 && (
                <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                  {mod.items.map((p) => (
                    <li key={p.id} className="relative">
                      <FavoriteButton practiceId={p.id} title={p.title} className="absolute right-3 top-3 z-[1]" />
                      <Link
                        href={`/gimnasio/${p.id}`}
                        className="group flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-5 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:border-sage-300 hover:shadow-lift active:scale-[0.99]"
                      >
                        <span className="pr-10 font-serif text-lg text-stone-800">{p.title}</span>
                        <span className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">{p.summary}</span>
                        <span className="mt-4 flex flex-wrap gap-1.5">
                          {practiceApproaches(p.id).map((a) => (
                            <span key={a} className="rounded-full bg-stone-100 px-2 py-0.5 text-[11px] text-stone-600">
                              {APPROACH_LABEL[a]}
                            </span>
                          ))}
                          {practiceRisk(p.id) === 2 && <span className="rounded-full bg-stone-800 px-2 py-0.5 text-[11px] text-stone-50">Con precauciones</span>}
                        </span>
                        <span className="mt-4 flex items-center justify-between gap-3 border-t border-stone-100 pt-4 text-xs text-stone-500">
                          <span>{Math.max(1, Math.round(totalDurationSec(p.steps) / 60))} min</span>
                          <span className="flex items-center gap-2">
                            <span className="rounded-full px-2 py-0.5 ring-1 ring-stone-200">{LEVEL_LABEL[levelOf(p.id).level]}</span>
                            <EvidenceBadge level={p.evidenceLevel} />
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {filter === 'todas' && (mod.templates.length > 0 || mod.resources.length > 0) && (
                <div className="mt-4 flex flex-wrap gap-2 text-sm">
                  {mod.templates.map((t) => (
                    <Link
                      key={t}
                      href={`/diario?nuevo=${t}`}
                      className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-stone-700 transition-colors hover:border-sage-300"
                    >
                      <span className="text-stone-500">Diario · </span>
                      {TEMPLATE_BY_TYPE[t].title}
                    </Link>
                  ))}
                  {mod.resources.map((r) => (
                    <Link key={r.href} href={r.href} className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-stone-700 transition-colors hover:border-sage-300">
                      <span className="text-stone-500">{r.href.startsWith('/biblioteca') ? 'Leer · ' : r.href.startsWith('/laboratorio') ? 'Ensayar · ' : 'Ir a · '}</span>
                      {r.label}
                    </Link>
                  ))}
                </div>
              )}
            </m.section>
          ))}
          {modules.length === 0 && <p className="mt-12 text-sm text-stone-600">No hay prácticas de este enfoque todavía.</p>}
        </m.div>
      </AnimatePresence>
    </div>
  );
}
