'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { useMemo, type ReactNode } from 'react';
import { useProgressStore } from '@/store/useProgressStore';
import {
  antidoteEffect,
  dailyMinutes,
  moodBaseline,
  moodByPracticeDay,
  moodSeries,
  practiceDayKeys,
  skillDose,
  toDateKey,
} from '@/domain/metrics';
import { SKILL_LABEL } from '@/domain/evidence';
import type { SkillKey } from '@/domain/types';
import { EASE_OUT, fadeUp, stagger } from '@/lib/motion';
import { CountUp } from '@/components/motion/Reveal';
import { CheckinForm } from './CheckinForm';
import { MoodTrend } from './MoodTrend';
import { Welcome } from './Welcome';
import { WeeklyReview } from './WeeklyReview';
import { WhatWorks } from './WhatWorks';
import { suggestNext } from '@/domain/recommend';
import { buttonStyles } from '@/components/ui/Button';
import { GrowthCard } from '@/components/growth/GrowthCard';
import { WeeklyChallenge } from '@/components/growth/WeeklyChallenge';
import { daysThisMonth } from '@/domain/growth';

const WEEKDAY = new Intl.DateTimeFormat('es', { weekday: 'short', day: 'numeric', month: 'short' });

export function Dashboard() {
  // Suscripción por porciones: cada slice es una referencia estable entre snapshots.
  const status = useProgressStore((s) => s.status);
  const sessions = useProgressStore((s) => s.sessions);
  const checkins = useProgressStore((s) => s.checkins);
  const afflictions = useProgressStore((s) => s.afflictions);
  const journal = useProgressStore((s) => s.journal);
  const assessments = useProgressStore((s) => s.assessments);

  // Constancia sin castigo: días del mes, no rachas que se rompen (ver domain/growth).
  const month = useMemo(() => daysThisMonth(sessions, journal), [sessions, journal]);
  const days = useMemo(() => dailyMinutes(sessions, 28), [sessions]);
  const practiced = useMemo(() => practiceDayKeys(sessions), [sessions]);
  const dose = useMemo(() => skillDose(sessions, 28), [sessions]);
  const baseline7 = useMemo(() => moodBaseline(checkins, 7), [checkins]);
  const baseline28 = useMemo(() => moodBaseline(checkins, 28), [checkins]);
  const effect = useMemo(() => antidoteEffect(afflictions, 28), [afflictions]);
  const series = useMemo(() => moodSeries(checkins, 28), [checkins]);
  const comparison = useMemo(() => moodByPracticeDay(sessions, checkins, 28), [sessions, checkins]);
  const suggestions = useMemo(() => suggestNext(sessions, afflictions, journal, assessments), [sessions, afflictions, journal, assessments]);

  const isNew = sessions.length + checkins.length + journal.length + assessments.length + afflictions.length === 0;
  const todayKey = toDateKey(new Date());
  const todayCheckin = checkins.find((c) => c.date === todayKey);
  const maxDose = Math.max(1, ...Object.values(dose).map((d) => d.minutes));
  const maxWeekly = Math.max(1, ...Object.values(dose).flatMap((d) => d.weekly));

  if (status === 'loading' || status === 'idle') return <DashboardSkeleton />;

  return (
    <m.div variants={stagger(0.08)} initial="hidden" animate="show" className="grid gap-5 lg:grid-cols-3">
      {isNew && <Welcome />}

      {!isNew && suggestions.length > 0 && (
        <m.section variants={fadeUp} className="grid gap-4 lg:col-span-3 md:grid-cols-2" aria-label="Sugerencias">
          {suggestions.map((sug, i) => (
            <div
              key={sug.id}
              className={`flex flex-col justify-between gap-5 rounded-2xl p-6 sm:flex-row sm:items-end ${
                i === 0 ? 'bg-gradient-to-br from-accent-from to-accent-to text-accent-fg shadow-lift' : 'border border-stone-200 bg-white shadow-soft'
              }`}
            >
              <div>
                <p className={`text-xs uppercase tracking-[0.2em] ${i === 0 ? 'text-accent-soft' : 'text-stone-500'}`}>{sug.eyebrow}</p>
                <p className={`mt-2 font-serif text-2xl ${i === 0 ? 'text-accent-fg' : 'text-stone-800'}`}>{sug.title}</p>
                <p className={`mt-2 max-w-md text-sm leading-relaxed ${i === 0 ? 'text-accent-muted' : 'text-stone-600'}`}>{sug.reason}</p>
              </div>
              <Link
                href={sug.href}
                className={
                  i === 0
                    ? 'inline-flex shrink-0 items-center justify-center rounded-full bg-accent-fg px-5 py-2.5 text-sm font-medium text-accent-from transition-transform duration-200 hover:bg-accent-muted active:scale-[0.97]'
                    : buttonStyles('secondary', 'shrink-0')
                }
              >
                {sug.cta} →
              </Link>
            </div>
          ))}
        </m.section>
      )}

      {/* Jardín y desafío -------------------------------------------------------------- */}
      {!isNew && <GrowthCard className="lg:col-span-2" />}
      {!isNew && (
        <m.div variants={fadeUp}>
          <WeeklyChallenge className="h-full" />
        </m.div>
      )}

      {/* Constancia ---------------------------------------------------------------- */}
      <Panel title="Constancia" className="lg:col-span-2">
        <div className="flex flex-wrap items-baseline gap-x-10 gap-y-4">
          <Figure value={month.days} unit={`${month.days === 1 ? 'día' : 'días'} practicados en ${month.monthLabel}`} />
          <Figure value={practiced.size} unit="días con práctica (90 d)" muted />
        </div>
        <div className="mt-8" aria-label="Minutos de práctica en los últimos 28 días">
          <div className="grid grid-cols-[repeat(14,minmax(0,1fr))] gap-1.5 sm:grid-cols-[repeat(28,minmax(0,1fr))] sm:gap-1">
            {days.map((d, i) => (
              <m.div
                key={d.key}
                title={`${WEEKDAY.format(new Date(`${d.key}T12:00:00`))} · ${d.minutes} min`}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25 + i * 0.015, duration: 0.4, ease: EASE_OUT }}
                whileHover={{ scale: 1.25 }}
                className={`aspect-square rounded-[4px] ${
                  d.minutes === 0 ? 'bg-stone-100' : d.minutes < 10 ? 'bg-sage-200' : d.minutes < 20 ? 'bg-sage-400' : 'bg-sage-600'
                } ${d.key === todayKey ? 'ring-1 ring-stone-400 ring-offset-1' : ''}`}
              />
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-stone-500">
            <span>hace 4 semanas</span>
            <span className="flex items-center gap-1.5">
              menos
              {['bg-stone-100', 'bg-sage-200', 'bg-sage-400', 'bg-sage-600'].map((c) => (
                <span key={c} className={`h-2.5 w-2.5 rounded-[3px] ${c}`} aria-hidden />
              ))}
              más
            </span>
            <span>hoy</span>
          </div>
        </div>
      </Panel>

      {/* Estado emocional base ------------------------------------------------------ */}
      <Panel title="Estado emocional base">
        {baseline7 ? (
          <>
            <Figure value={baseline7.mean} decimals={1} unit={`/10 · media 7 días (n=${baseline7.n})`} />
            {baseline28 && (
              <p className="mt-4 text-sm text-stone-600">
                Media 28 días: <span className="tabular-nums text-stone-700">{baseline28.mean}</span> (n={baseline28.n})
              </p>
            )}
          </>
        ) : (
          <Empty>Registra tu ánimo diario para establecer una línea base.</Empty>
        )}
        <p className="mt-6 text-xs leading-relaxed text-stone-500">
          La línea base se estabiliza tras 2–3 semanas de registros. Compara tendencias, no días aislados.
        </p>
      </Panel>

      {/* Tendencia del ánimo -------------------------------------------------------- */}
      <Panel title="Ánimo · últimos 28 días" className="lg:col-span-2">
        <MoodTrend series={series} />
      </Panel>

      {/* Días con y sin práctica ---------------------------------------------------- */}
      <Panel title="Tus datos · 28 días">
        {comparison.with.n >= 3 && comparison.without.n >= 3 ? (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-stone-500">Días con práctica</p>
                <CountUp value={comparison.with.mean ?? 0} decimals={1} className="font-serif text-4xl text-stone-800" />
                <p className="text-xs text-stone-500">ánimo medio · n={comparison.with.n}</p>
              </div>
              <div>
                <p className="text-xs text-stone-500">Días sin práctica</p>
                <CountUp value={comparison.without.mean ?? 0} decimals={1} className="font-serif text-4xl text-stone-500" />
                <p className="text-xs text-stone-500">ánimo medio · n={comparison.without.n}</p>
              </div>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-stone-500">
              Es una correlación: puede que practiques más los días en que ya estás mejor.{' '}
              <Link href="/biblioteca/medir-tu-progreso" className="text-sage-700 underline decoration-sage-300 underline-offset-2 hover:decoration-sage-700">
                Cómo leer tus datos
              </Link>
            </p>
          </>
        ) : (
          <Empty>
            Con al menos tres registros de ánimo en días con práctica y tres sin ella, aquí verás cómo se comparan.
          </Empty>
        )}
      </Panel>

      {/* Qué te funciona ------------------------------------------------------------ */}
      <Panel title="Qué te funciona" className="lg:col-span-3">
        <WhatWorks sessions={sessions} afflictions={afflictions} />
      </Panel>

      {/* Revisión semanal ---------------------------------------------------------- */}
      <Panel title="Esta semana" className="lg:col-span-3">
        <WeeklyReview sessions={sessions} checkins={checkins} journal={journal} />
      </Panel>

      {/* Cultivo de habilidades ----------------------------------------------------- */}
      <Panel title="Cultivo de habilidades · últimos 28 días" className="lg:col-span-2">
        <ul className="space-y-7">
          {(Object.keys(dose) as SkillKey[]).map((skill, row) => (
            <li key={skill} className="grid grid-cols-[1fr_auto] items-end gap-x-6">
              <div>
                <div className="flex items-baseline justify-between text-sm">
                  <span className="text-stone-700">{SKILL_LABEL[skill]}</span>
                  <span className="tabular-nums text-stone-600">
                    <CountUp value={dose[skill].minutes} /> min · {dose[skill].sessions} sesiones
                  </span>
                </div>
                <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-stone-100">
                  <m.div
                    className="h-full rounded-full bg-gradient-to-r from-sage-400 to-sage-600"
                    style={{ originX: 0 }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: dose[skill].minutes / maxDose }}
                    transition={{ delay: 0.3 + row * 0.1, duration: 1, ease: EASE_OUT }}
                  />
                </div>
              </div>
              {/* Mini-columnas semanales */}
              <div className="flex h-8 items-end gap-1" aria-label={`Minutos por semana: ${dose[skill].weekly.join(', ')}`}>
                {dose[skill].weekly.map((minutes, i) => (
                  <m.span
                    key={i}
                    title={`Semana ${i + 1}: ${minutes} min`}
                    className="w-2 rounded-sm bg-sage-300"
                    style={{ originY: 1 }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.5 + row * 0.1 + i * 0.05, duration: 0.6, ease: EASE_OUT }}
                  >
                    <span className="block" style={{ height: `${Math.max(8, (minutes / maxWeekly) * 32)}px` }} />
                  </m.span>
                ))}
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-7 text-xs leading-relaxed text-stone-500">
          Se muestra la dosis de entrenamiento (exposición), no un nivel de competencia: la práctica acumulada es un
          predictor, no una medida, del cambio.
        </p>
      </Panel>

      {/* Antídotos ------------------------------------------------------------------ */}
      <Panel title="Antídotos · últimos 28 días">
        {effect ? (
          <>
            <Figure value={effect.meanDelta} decimals={1} signed unit={`puntos de intensidad, media (n=${effect.n})`} />
            <p className="mt-6 text-xs leading-relaxed text-stone-500">
              Cambio autoinformado inmediato. Útil para identificar qué antídotos te sirven; no equivale a un efecto
              clínico sostenido.
            </p>
          </>
        ) : (
          <Empty>
            Aún no hay registros.{' '}
            <Link href="/antidotos" className="text-sage-700 underline decoration-sage-300 underline-offset-2 hover:decoration-sage-700">
              Abrir antídotos →
            </Link>
          </Empty>
        )}
      </Panel>

      {/* Check-in ------------------------------------------------------------------- */}
      <Panel title="Registro de hoy" className="lg:col-span-3">
        <CheckinForm existing={todayCheckin} />
      </Panel>
    </m.div>
  );
}

function Panel({ title, className = '', children }: { title: string; className?: string; children: ReactNode }) {
  return (
    <m.section
      variants={fadeUp}
      className={`rounded-2xl border border-stone-200/80 bg-white p-6 shadow-soft transition-shadow duration-500 hover:shadow-lift ${className}`}
    >
      <h2 className="mb-6 text-xs uppercase tracking-[0.2em] text-stone-500">{title}</h2>
      {children}
    </m.section>
  );
}

function Figure({
  value,
  unit,
  muted = false,
  decimals = 0,
  signed = false,
}: {
  value: number;
  unit: string;
  muted?: boolean;
  decimals?: number;
  signed?: boolean;
}) {
  return (
    <div>
      <CountUp
        value={value}
        decimals={decimals}
        signed={signed}
        className={`font-serif ${muted ? 'text-2xl text-stone-500' : 'text-5xl text-stone-800'}`}
      />
      <span className="ml-2 text-sm text-stone-600">{unit}</span>
    </div>
  );
}

function Empty({ children }: { children: ReactNode }) {
  return <p className="rounded-xl border border-dashed border-stone-200 px-4 py-5 text-sm text-stone-600">{children}</p>;
}

function DashboardSkeleton() {
  return (
    <div className="grid gap-5 lg:grid-cols-3" aria-busy="true" aria-label="Cargando tu registro">
      {['lg:col-span-2 h-56', 'h-56', 'lg:col-span-2 h-64', 'h-64', 'lg:col-span-3 h-40'].map((cls) => (
        <div key={cls} className={`rounded-2xl border border-stone-200/80 bg-white p-6 ${cls}`}>
          <div className="skeleton h-3 w-32" />
          <div className="skeleton mt-6 h-10 w-24" />
          <div className="skeleton mt-6 h-3 w-full" />
          <div className="skeleton mt-3 h-3 w-2/3" />
        </div>
      ))}
    </div>
  );
}
