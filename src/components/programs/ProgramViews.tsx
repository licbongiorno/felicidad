'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { useMemo } from 'react';
import type { Program } from '@/domain/programs';
import { programProgress } from '@/domain/programProgress';
import { PROGRAM_INDEX as PROGRAMS } from '@/domain/practiceIndex';
import { PRACTICE_SUMMARY_BY_ID as PRACTICE_BY_ID } from '@/domain/practiceIndex';
import { TEMPLATE_BY_TYPE } from '@/domain/journal';
import { completedPracticeIds } from '@/domain/metrics';
import { useProgressStore } from '@/store/useProgressStore';
import { EASE_OUT, fadeUp, stagger } from '@/lib/motion';
import { buttonStyles } from '@/components/ui/Button';

function useCompleted() {
  const sessions = useProgressStore((s) => s.sessions);
  return useMemo(() => completedPracticeIds(sessions), [sessions]);
}

/** Anillo de progreso con trazo animado. */
function Ring({ ratio, size = 56, label }: { ratio: number; size?: number; label?: string }) {
  const r = size / 2 - 3;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} className="-rotate-90" aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth="2.5" className="stroke-stone-200" />
        <m.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="stroke-sage-600"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c * (1 - ratio) }}
          transition={{ duration: 1.1, ease: EASE_OUT, delay: 0.2 }}
        />
      </svg>
      {label && <span className="absolute inset-0 flex items-center justify-center text-xs tabular-nums text-stone-600">{label}</span>}
    </div>
  );
}

export function ProgramList() {
  const completed = useCompleted();
  return (
    <m.ul variants={stagger(0.08, 0.1)} initial="hidden" animate="show" className="mt-12 grid gap-5 lg:grid-cols-3">
      {PROGRAMS.map((p) => {
        const prog = programProgress(p, completed);
        return (
          <m.li key={p.id} variants={fadeUp}>
            <Link
              href={`/programas/${p.id}`}
              className="group flex h-full flex-col rounded-3xl border border-stone-200 bg-white p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-sage-300 hover:shadow-lift"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-stone-500">{p.weeks.length} semanas</p>
                  <h2 className="mt-2 font-serif text-2xl text-stone-800">{p.title}</h2>
                </div>
                <Ring ratio={prog.ratio} label={`${Math.round(prog.ratio * 100)}%`} />
              </div>
              <p className="mt-2 text-sm text-sage-700">{p.subtitle}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-600">{p.description}</p>
              <p className="mt-6 border-t border-stone-100 pt-4 text-xs text-stone-500">{p.rhythm}</p>
            </Link>
          </m.li>
        );
      })}
    </m.ul>
  );
}

/** `articleTitles`: títulos de los artículos de las semanas (los pasa la página, para no cargar la biblioteca). */
export function ProgramDetail({ program, articleTitles }: { program: Program; articleTitles: Record<string, string> }) {
  const completed = useCompleted();
  const prog = programProgress(program, completed);

  return (
    <m.div variants={stagger(0.07)} initial="hidden" animate="show" className="mx-auto max-w-3xl">
      <m.div variants={fadeUp}>
        <Link href="/programas" className="group inline-flex items-center gap-1.5 text-sm text-stone-500 transition-colors hover:text-stone-700">
          <span className="transition-transform duration-300 group-hover:-translate-x-0.5">←</span> Programas
        </Link>
      </m.div>

      <m.header variants={fadeUp} className="mt-8 flex flex-wrap items-start justify-between gap-6">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Programa · {program.weeks.length} semanas</p>
          <h1 className="mt-2 font-serif text-4xl text-stone-800 sm:text-5xl">{program.title}</h1>
          <p className="mt-2 text-sage-700">{program.subtitle}</p>
          <p className="mt-4 leading-relaxed text-stone-600">{program.description}</p>
          <p className="mt-4 text-sm text-stone-500">
            <span className="text-stone-600">Ritmo:</span> {program.rhythm}
            <br />
            <span className="text-stone-600">Base:</span> {program.basis}
          </p>
        </div>
        <div className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white px-5 py-4 shadow-soft">
          <Ring ratio={prog.ratio} size={64} label={`${prog.done}/${prog.total}`} />
          <div className="text-sm">
            <p className="text-stone-700">Prácticas realizadas</p>
            <p className="text-stone-500">Semana actual: {prog.currentWeek + 1}</p>
          </div>
        </div>
      </m.header>

      <m.ol variants={stagger(0.1, 0.2)} className="relative mt-14 space-y-6 border-l border-stone-200 pl-8">
        {program.weeks.map((w, i) => {
          const wp = prog.weeks[i];
          const current = i === prog.currentWeek && !wp.complete;
          return (
            <m.li key={w.title} variants={fadeUp} className="relative">
              <span
                aria-hidden
                className={`absolute -left-[41px] top-6 flex h-5 w-5 items-center justify-center rounded-full border-2 border-stone-50 ${
                  wp.complete ? 'bg-sage-600' : current ? 'bg-white ring-2 ring-sage-500' : 'bg-stone-200'
                }`}
              >
                {wp.complete && (
                  <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                    <path d="M3 6.2l2 2 4-4.4" />
                  </svg>
                )}
              </span>
              <div className={`rounded-3xl border bg-white p-6 transition-shadow ${current ? 'border-sage-300 shadow-lift' : 'border-stone-200'}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-serif text-xl text-stone-800">{w.title}</h2>
                  <span className="text-xs tabular-nums text-stone-500">
                    {wp.done}/{wp.total} prácticas
                  </span>
                </div>
                <p className="mt-1 text-sm text-sage-700">{w.focus}</p>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{w.description}</p>

                <ul className="mt-5 space-y-2">
                  {w.practiceIds.map((id) => {
                    const p = PRACTICE_BY_ID[id];
                    const done = completed.has(id);
                    return (
                      <li key={id}>
                        <Link
                          href={`/gimnasio/${id}`}
                          className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-stone-50"
                        >
                          <span
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                              done ? 'border-sage-600 bg-sage-600' : 'border-stone-300'
                            }`}
                            aria-label={done ? 'Realizada' : 'Pendiente'}
                          >
                            {done && (
                              <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" aria-hidden>
                                <path d="M3 6.2l2 2 4-4.4" />
                              </svg>
                            )}
                          </span>
                          <span className={`flex-1 text-[15px] ${done ? 'text-stone-600' : 'text-stone-800'}`}>{p.title}</span>
                          <span className="text-xs text-stone-500">{Math.round(p.durationSec / 60)} min</span>
                          <span className="text-stone-500 transition-all group-hover:translate-x-0.5 group-hover:text-sage-600" aria-hidden>
                            →
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                {(w.articleIds.length > 0 || w.journalType) && (
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-stone-100 pt-4">
                    {w.articleIds.map((id) => (
                      <Link key={id} href={`/biblioteca/${id}`} className="rounded-full bg-stone-100 px-3 py-1.5 text-xs text-stone-600 transition-colors hover:bg-stone-200">
                        Leer · {articleTitles[id] ?? id}
                      </Link>
                    ))}
                    {w.journalType && (
                      <Link href={`/diario?nuevo=${w.journalType}`} className="rounded-full bg-sage-50 px-3 py-1.5 text-xs text-sage-800 transition-colors hover:bg-sage-100">
                        Escribir · {TEMPLATE_BY_TYPE[w.journalType].title}
                      </Link>
                    )}
                  </div>
                )}

                {current && (
                  <Link href={`/gimnasio/${w.practiceIds.find((id) => !completed.has(id)) ?? w.practiceIds[0]}`} className={buttonStyles('primary', 'mt-6')}>
                    Continuar esta semana
                  </Link>
                )}
              </div>
            </m.li>
          );
        })}
      </m.ol>

      <m.p variants={fadeUp} className="mt-10 text-xs leading-relaxed text-stone-500">
        El progreso se calcula a partir de las prácticas completas de los últimos 90 días. Puedes avanzar a tu ritmo:
        repetir una semana es tan válido como avanzar.
      </m.p>
    </m.div>
  );
}
