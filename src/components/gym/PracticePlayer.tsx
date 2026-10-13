'use client';

import Link from 'next/link';
import { AnimatePresence, m } from 'motion/react';
import { useMemo, useRef, useState, type ReactNode } from 'react';
import type { Practice } from '@/domain/types';
import { FAMILY_LABEL, SKILL_LABEL } from '@/domain/evidence';
import { totalDurationSec } from '@/domain/practices';
import { availableVariants, scaleSteps, VARIANT_LABEL, type DurationVariant } from '@/domain/durations';
import { LEVEL_LABEL, levelOf, missingPrerequisites } from '@/domain/levels';
import { PRACTICE_BY_ID } from '@/domain/practices';
import { reviewOf } from '@/domain/governance';
import { completedPracticeIds } from '@/domain/metrics';
import { useProgressStore } from '@/store/useProgressStore';
import { fadeUp, gentleSpring, phaseVariants, stagger } from '@/lib/motion';
import { haptic } from '@/lib/haptics';
import { Button, buttonStyles } from '@/components/ui/Button';
import { IntensityScale } from '@/components/ui/IntensityScale';
import { EvidencePanel } from '@/components/ui/EvidencePanel';
import { Tabs } from '@/components/ui/Tabs';
import { GuidedSequence } from '@/components/practice/GuidedSequence';
import { CountUp, DrawnCheck } from '@/components/motion/Reveal';

type Phase = 'intro' | 'practice' | 'close' | 'done';
const ORDER: Record<Phase, number> = { intro: 0, practice: 1, close: 2, done: 3 };

const MIN_PRACTICE_SEC = 60;

export function PracticePlayer({ practice }: { practice: Practice }) {
  const logSession = useProgressStore((s) => s.logSession);
  const [phase, setPhase] = useState<Phase>('intro');
  const [direction, setDirection] = useState(1);
  const [moodPre, setMoodPre] = useState<number | null>(null);
  const [moodPost, setMoodPost] = useState<number | null>(null);
  const [practicedSec, setPracticedSec] = useState(0);
  const [variant, setVariant] = useState<DurationVariant>('estandar');
  // Las herramientas rápidas tienen una sola duración.
  const variants = useMemo<DurationVariant[]>(() => (practice.micro ? ['estandar'] : availableVariants(practice.steps)), [practice]);
  const sessions = useProgressStore((s) => s.sessions);
  const missing = useMemo(() => missingPrerequisites(practice.id, completedPracticeIds(sessions)), [practice.id, sessions]);
  const level = levelOf(practice.id).level;
  // Estable durante la práctica: GuidedSequence requiere pasos memoizados.
  const steps = useMemo(() => scaleSteps(practice.steps, variant), [practice.steps, variant]);
  const startedAtRef = useRef<Date>(new Date());

  function go(next: Phase) {
    setDirection(ORDER[next] >= ORDER[phase] ? 1 : -1);
    setPhase(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function save() {
    logSession({
      practiceId: practice.id,
      family: practice.family,
      skills: practice.skills,
      source: 'gym',
      startedAt: startedAtRef.current,
      durationSec: practicedSec,
      completed: practicedSec >= (practice.micro ? 30 : MIN_PRACTICE_SEC),
      contentVersion: reviewOf('practica', practice.id).version,
      moodPre,
      moodPost,
    });
    haptic('success');
    go('done');
  }

  let content: ReactNode;

  if (phase === 'intro') {
    content = (
      <m.article variants={stagger(0.07)} initial="hidden" animate="show" className="mx-auto max-w-2xl">
        <m.div variants={fadeUp}>
          <Link href="/gimnasio" className="group inline-flex items-center gap-1.5 text-sm text-stone-500 transition-colors hover:text-stone-700">
            <span className="transition-transform duration-300 group-hover:-translate-x-0.5">←</span> Gimnasio
          </Link>
        </m.div>
        <m.p variants={fadeUp} className="mt-8 text-xs uppercase tracking-[0.2em] text-stone-500">
          Familia {FAMILY_LABEL[practice.family].toLowerCase()} · {Math.round(totalDurationSec(steps) / 60)} min ·{' '}
          {practice.skills.map((s) => SKILL_LABEL[s]).join(', ')} · {LEVEL_LABEL[level]}
        </m.p>
        <m.h1 variants={fadeUp} className="mt-2 font-serif text-4xl text-stone-800 sm:text-5xl">
          {practice.title}
        </m.h1>
        <m.p variants={fadeUp} className="mt-4 text-lg leading-relaxed text-stone-600">
          {practice.summary}
        </m.p>
        <m.p variants={fadeUp} className="mt-6 text-sm leading-relaxed text-stone-600">
          <span className="font-medium text-stone-600">Mecanismo. </span>
          {practice.mechanism}
        </m.p>
        {missing.length > 0 && (
          <m.p variants={fadeUp} className="mt-4 rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm leading-relaxed text-stone-700">
            <span className="font-medium">Práctica de nivel {LEVEL_LABEL[level].toLowerCase()}. </span>
            Te recomendamos practicar antes{' '}
            {missing.map((id, i) => (
              <span key={id}>
                {i > 0 && (i === missing.length - 1 ? ' y ' : ', ')}
                <Link href={`/gimnasio/${id}`} className="text-sage-700 underline decoration-sage-300 underline-offset-2 hover:decoration-sage-700">
                  {PRACTICE_BY_ID[id]?.title ?? id}
                </Link>
              </span>
            ))}
            . Puedes empezar igualmente si ya tienes experiencia.
          </m.p>
        )}
        {practice.cautions && (
          <m.p variants={fadeUp} className="mt-4 rounded-xl bg-stone-100 px-4 py-3 text-sm leading-relaxed text-stone-600">
            <span className="font-medium">Precaución. </span>
            {practice.cautions}
          </m.p>
        )}
        {variants.length > 1 && (
        <m.div variants={fadeUp} className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
          <fieldset>
            <legend className="mb-3 text-sm text-stone-600">Duración</legend>
            <div role="radiogroup" aria-label="Duración" className="inline-flex rounded-full bg-stone-100 p-1">
              {variants.map((v) => {
                const active = v === variant;
                return (
                  <button
                    key={v}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => setVariant(v)}
                    className={`relative rounded-full px-4 py-1.5 text-sm transition-colors ${active ? 'text-stone-900' : 'text-stone-600 hover:text-stone-800'}`}
                  >
                    {active && <m.span layoutId="duration-pill" transition={gentleSpring} className="absolute inset-0 rounded-full bg-white shadow-soft" />}
                    <span className="relative">
                      {VARIANT_LABEL[v]} · <span className="tabular-nums">{Math.round(totalDurationSec(scaleSteps(practice.steps, v)) / 60)}</span> min
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="mt-2 text-xs text-stone-500">Mejor una práctica breve cada día que una larga de vez en cuando.</p>
          </fieldset>
        </m.div>
        )}
        <m.div variants={fadeUp} className="mt-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
          <IntensityScale
            label="Ánimo general ahora (opcional)"
            value={moodPre}
            onChange={setMoodPre}
            lowAnchor="0 · muy bajo"
            highAnchor="10 · excelente"
          />
        </m.div>
        <m.div variants={fadeUp} className="mt-8 flex justify-end">
          <Button
            onClick={() => {
              startedAtRef.current = new Date();
              go('practice');
            }}
          >
            Preparado
          </Button>
        </m.div>
        <m.div variants={fadeUp} className="mt-14">
          <Tabs
            tabs={[
              {
                id: 'como',
                label: 'Cómo funciona',
                content: (
                  <div className="space-y-4">
                    {practice.howItWorks.map((p, i) => (
                      <p key={i} className="text-[16px] leading-[1.8] text-stone-700">
                        {p}
                      </p>
                    ))}
                  </div>
                ),
              },
              {
                id: 'consejos',
                label: 'Consejos',
                content: (
                  <ul className="space-y-3">
                    {practice.tips.map((t) => (
                      <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-stone-700">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-sage-600" aria-hidden />
                        {t}
                      </li>
                    ))}
                  </ul>
                ),
              },
              {
                id: 'obstaculos',
                label: 'Si te cuesta',
                content: (
                  <dl className="space-y-5">
                    {practice.obstacles.map((o) => (
                      <div key={o.q}>
                        <dt className="font-serif text-lg text-stone-800">{o.q}</dt>
                        <dd className="mt-1 text-[15px] leading-relaxed text-stone-600">{o.a}</dd>
                      </div>
                    ))}
                  </dl>
                ),
              },
              {
                id: 'evidencia',
                label: 'Evidencia',
                content: <EvidencePanel level={practice.evidenceLevel} references={practice.evidence} />,
              },
            ]}
          />
        </m.div>
      </m.article>
    );
  } else if (phase === 'practice') {
    content = (
      <div className="pt-4">
        <p className="mb-8 text-center font-serif text-lg text-stone-600">{practice.title}</p>
        <GuidedSequence
          steps={steps}
          onComplete={(sec) => {
            setPracticedSec(sec);
            go('close');
          }}
          onCancel={() => go('intro')}
        />
      </div>
    );
  } else if (phase === 'close') {
    content = (
      <section className="mx-auto max-w-xl">
        <h2 className="font-serif text-3xl text-stone-800 sm:text-4xl">Antes de volver</h2>
        <p className="mt-3 text-stone-600">Tómate un momento para notar el estado actual, sin evaluarlo.</p>
        <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
          <IntensityScale
            label="Ánimo general ahora (opcional)"
            value={moodPost}
            onChange={setMoodPost}
            lowAnchor="0 · muy bajo"
            highAnchor="10 · excelente"
          />
        </div>
        <div className="mt-8 flex justify-end">
          <Button onClick={save}>Registrar práctica</Button>
        </div>
      </section>
    );
  } else {
    content = (
      <m.section variants={stagger(0.12, 0.1)} initial="hidden" animate="show" className="mx-auto max-w-xl text-center">
        <m.div variants={fadeUp} className="flex justify-center">
          <DrawnCheck className="h-10 w-10" />
        </m.div>
        <m.p variants={fadeUp} className="mt-4 text-xs uppercase tracking-[0.2em] text-stone-500">
          Práctica registrada
        </m.p>
        <m.h2 variants={fadeUp} className="mt-3 font-serif text-5xl text-stone-800">
          <CountUp value={Math.max(1, Math.round(practicedSec / 60))} /> <span className="text-3xl text-stone-500">min</span>
        </m.h2>
        <m.p variants={fadeUp} className="mt-4 text-stone-600">
          La constancia importa más que la duración.
        </m.p>
        <m.div variants={fadeUp} className="mt-10 flex justify-center gap-3">
          <Link href="/dashboard" className={buttonStyles('secondary')}>
            Ver panel
          </Link>
          <Link href="/gimnasio" className={buttonStyles('ghost')}>
            Otra práctica
          </Link>
        </m.div>
      </m.section>
    );
  }

  return (
    <AnimatePresence mode="wait" custom={direction} initial={false}>
      <m.div key={phase} custom={direction} variants={phaseVariants} initial="enter" animate="center" exit="exit">
        {content}
      </m.div>
    </AnimatePresence>
  );
}
