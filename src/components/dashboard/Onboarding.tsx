'use client';

import Link from 'next/link';
import { AnimatePresence, m } from 'motion/react';
import { useState } from 'react';
import { CONCERNS, DAY_MOMENTS, planFor, TIME_BUDGETS, type ConcernId, type DayMoment, type TimeBudget } from '@/domain/onboarding';
import { PRACTICE_SUMMARY_BY_ID as PRACTICE_BY_ID } from '@/domain/practiceIndex';
import { useProgressStore } from '@/store/useProgressStore';
import { buildReminderIcs, downloadFile } from '@/lib/ics';
import { haptic } from '@/lib/haptics';
import { Button, buttonStyles } from '@/components/ui/Button';

type Step = 0 | 1 | 2 | 3;

/**
 * Tres preguntas → una ruta: programa recomendado, primera práctica y recordatorio.
 * Elegir guarda el objetivo en «Mis objetivos» (se puede cambiar cuando quieras).
 */
export function Onboarding() {
  const updatePersonal = useProgressStore((s) => s.updatePersonal);
  const goals = useProgressStore((s) => s.personal.goals);
  const [step, setStep] = useState<Step>(0);
  const [concern, setConcern] = useState<ConcernId | null>(null);
  const [time, setTime] = useState<TimeBudget | null>(null);
  const [moment, setMoment] = useState<DayMoment | null>(null);
  const plan = concern && time && moment ? planFor({ concern, time, moment }) : null;
  const first = plan ? PRACTICE_BY_ID[plan.firstPracticeId] : null;

  const finish = (mo: DayMoment) => {
    setMoment(mo);
    const p = planFor({ concern: concern!, time: time!, moment: mo });
    if (!goals.includes(p.concern.module)) updatePersonal({ goals: [p.concern.module, ...goals.filter((g) => g !== p.concern.module)].slice(0, 3) });
    haptic('success');
    setStep(3);
  };

  const reminder = () => {
    if (!plan) return;
    const ics = buildReminderIcs({
      time: plan.moment.time,
      days: ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'],
      cue: plan.moment.cue,
      url: `${window.location.origin}/dashboard`,
      minutes: plan.minutes,
    });
    downloadFile('recordatorio-practica.ics', ics, 'text/calendar');
  };

  return (
    <section aria-labelledby="ruta" className="rounded-3xl border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <h2 id="ruta" className="font-serif text-2xl text-stone-800">
          {step < 3 ? 'Armemos tu ruta' : 'Tu ruta'}
        </h2>
        {step < 3 && (
          <span className="text-sm tabular-nums text-stone-500" aria-label={`Pregunta ${step + 1} de 3`}>
            {step + 1}/3
          </span>
        )}
      </div>
      <div className="mt-2 h-1 overflow-hidden rounded-full bg-stone-100" aria-hidden>
        <m.div className="h-full rounded-full bg-sage-500" animate={{ width: `${(step / 3) * 100}%` }} />
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <m.div key={step} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.25 }}>
          {step === 0 && (
            <Question title="¿Qué te gustaría trabajar primero?">
              <div className="grid gap-2 sm:grid-cols-2">
                {CONCERNS.map((c) => (
                  <Choice
                    key={c.id}
                    selected={concern === c.id}
                    onClick={() => {
                      setConcern(c.id);
                      setStep(1);
                    }}
                  >
                    {c.label}
                  </Choice>
                ))}
              </div>
            </Question>
          )}
          {step === 1 && (
            <Question title="¿Cuánto tiempo tienes por día?" onBack={() => setStep(0)}>
              <div className="grid gap-2 sm:grid-cols-3">
                {TIME_BUDGETS.map((t) => (
                  <Choice
                    key={t.id}
                    selected={time === t.id}
                    onClick={() => {
                      setTime(t.id);
                      setStep(2);
                    }}
                  >
                    {t.label}
                  </Choice>
                ))}
              </div>
            </Question>
          )}
          {step === 2 && (
            <Question title="¿Qué momento del día te queda mejor?" onBack={() => setStep(1)}>
              <div className="grid gap-2 sm:grid-cols-3">
                {DAY_MOMENTS.map((d) => (
                  <Choice key={d.id} selected={moment === d.id} onClick={() => finish(d.id)}>
                    {d.label}
                  </Choice>
                ))}
              </div>
            </Question>
          )}
          {step === 3 && plan && (
            <div className="mt-5">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Te recomendamos</p>
              <p className="mt-1 font-serif text-3xl text-stone-800">{plan.program.title}</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone-600">
                {plan.concern.why} Son {plan.program.weeks.length} semanas, a tu ritmo.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {first && (
                  <Link href={`/gimnasio/${first.id}`} className={buttonStyles('primary')}>
                    Empezar: {first.title} →
                  </Link>
                )}
                <Link href={`/programas/${plan.program.id}`} className={buttonStyles('secondary')}>
                  Ver el programa
                </Link>
                <Button variant="secondary" onClick={reminder}>
                  Recordatorio {plan.moment.label.toLowerCase()}
                </Button>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-stone-500">
                Lo guardamos en tus objetivos; puedes cambiarlo cuando quieras. El recordatorio se agrega a tu calendario.{' '}
                <button type="button" onClick={() => setStep(0)} className="text-sage-700 underline decoration-sage-300 underline-offset-2">
                  Volver a elegir
                </button>
              </p>
            </div>
          )}
        </m.div>
      </AnimatePresence>
    </section>
  );
}

function Question({ title, onBack, children }: { title: string; onBack?: () => void; children: React.ReactNode }) {
  return (
    <fieldset className="mt-5">
      <legend className="mb-3 text-lg font-medium text-stone-800">{title}</legend>
      {children}
      {onBack && (
        <button type="button" onClick={onBack} className="mt-3 text-sm text-stone-600 underline decoration-stone-300 underline-offset-2 hover:text-stone-800">
          ← Atrás
        </button>
      )}
    </fieldset>
  );
}

function Choice({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`min-h-12 rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
        selected ? 'border-sage-500 bg-sage-50 text-stone-800' : 'border-stone-200 text-stone-700 hover:border-sage-300 hover:bg-stone-50'
      }`}
    >
      {children}
    </button>
  );
}
