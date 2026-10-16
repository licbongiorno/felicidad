'use client';

import Link from 'next/link';
import { AnimatePresence, m } from 'motion/react';
import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import type { Practice } from '@/domain/types';
import { FAMILY_LABEL, SKILL_LABEL } from '@/domain/evidence';
import { totalDurationSec } from '@/domain/stepDuration';
import { availableVariants, scaleSteps, VARIANT_LABEL, type DurationVariant } from '@/domain/durations';
import { LEVEL_LABEL, levelOf, missingPrerequisites } from '@/domain/levels';
import { PRACTICE_SUMMARY_BY_ID as PRACTICE_BY_ID } from '@/domain/practiceIndex';
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
import { growthNote } from '@/domain/growth';
import { APPROACH_DESCRIPTION, APPROACH_LABEL, PRACTICE_RISK, practiceApproaches } from '@/domain/catalog';
import { confidenceTrends, TRANSFER_SUGGESTIONS } from '@/domain/application';
import { ApplicationForm } from '@/components/application/ApplicationForm';
import { Sheet } from '@/components/ui/Sheet';
import { FavoriteButton } from '@/components/personal/FavoriteButton';
import { clearResume, loadResume, saveResume, type ResumePoint } from '@/lib/resume';
import { useGrowth } from '@/hooks/useGrowth';
import { GrowthNote } from '@/components/growth/GrowthNote';
import { SkillSheet } from '@/components/skills/SkillSheet';

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
  const growth = useGrowth();
  // Qué creció en el jardín con esta práctica (se fija al registrarla).
  const [note, setNote] = useState<string | null>(null);
  // Nivel de riesgo 2: hay que leer las precauciones antes de empezar.
  const risk = PRACTICE_RISK[practice.id];
  const [acknowledged, setAcknowledged] = useState(false);
  // Paso «Llevarlo a tu vida»: cuándo y dónde se probará fuera de la pantalla (opcional).
  const [transfer, setTransfer] = useState('');
  const [applyOpen, setApplyOpen] = useState(false);
  // Retomar una práctica interrumpida en este dispositivo (se lee tras montar: localStorage).
  const [resume, setResume] = useState<ResumePoint | null>(null);
  const [startAt, setStartAt] = useState(0);
  useEffect(() => setResume(loadResume(practice.id)), [practice.id]);
  const missing = useMemo(() => missingPrerequisites(practice.id, completedPracticeIds(sessions)), [practice.id, sessions]);
  const level = levelOf(practice.id).level;
  const applications = useProgressStore((s) => s.applications);
  const confidence = useMemo(() => confidenceTrends(applications.filter((a) => a.practiceId === practice.id))[0] ?? null, [applications, practice.id]);
  // Estable durante la práctica: GuidedSequence requiere pasos memoizados.
  const steps = useMemo(() => scaleSteps(practice.steps, variant), [practice.steps, variant]);
  const startedAtRef = useRef<Date>(new Date());

  function go(next: Phase) {
    setDirection(ORDER[next] >= ORDER[phase] ? 1 : -1);
    setPhase(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function save() {
    const completed = practicedSec >= (practice.micro ? 30 : MIN_PRACTICE_SEC);
    setNote(completed ? growthNote(practice.family, growth.counts.families[practice.family], growth.garden.total) : null);
    logSession({
      practiceId: practice.id,
      family: practice.family,
      skills: practice.skills,
      source: 'gym',
      startedAt: startedAtRef.current,
      durationSec: practicedSec,
      completed,
      contentVersion: reviewOf('practica', practice.id).version,
      moodPre,
      moodPost,
      transfer: transfer.trim() || null,
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
            <span className="transition-transform duration-300 group-hover:-translate-x-0.5">←</span> Habilidades
          </Link>
        </m.div>
        <m.p variants={fadeUp} className="mt-8 text-xs uppercase tracking-[0.2em] text-stone-500">
          Familia {FAMILY_LABEL[practice.family].toLowerCase()} · {Math.round(totalDurationSec(steps) / 60)} min ·{' '}
          {practice.skills.map((s) => SKILL_LABEL[s]).join(', ')} · {LEVEL_LABEL[level]}
        </m.p>
        <m.div variants={fadeUp} className="mt-2 flex items-start justify-between gap-4">
          <h1 className="font-serif text-4xl text-stone-800 sm:text-5xl">{practice.title}</h1>
          <FavoriteButton practiceId={practice.id} title={practice.title} className="mt-1 shrink-0" />
        </m.div>
        <m.ul variants={fadeUp} className="mt-3 flex flex-wrap gap-1.5" aria-label="Enfoque">
          {practiceApproaches(practice.id).map((a) => (
            <li key={a} title={APPROACH_DESCRIPTION[a]} className="rounded-full border border-stone-200 bg-white px-2.5 py-0.5 text-xs text-stone-600">
              {APPROACH_LABEL[a]}
            </li>
          ))}
          {risk && <li className="rounded-full bg-stone-800 px-2.5 py-0.5 text-xs text-stone-50">Con precauciones</li>}
        </m.ul>
        <m.p variants={fadeUp} className="mt-4 text-lg leading-relaxed text-stone-600">
          {practice.summary}
        </m.p>
        {confidence && (
          <m.p variants={fadeUp} className="mt-3 text-sm text-stone-600">
            Tu confianza para usarla: <span className="tabular-nums text-stone-800">{confidence.last} de 10</span>
            {confidence.n > 1 && <span className="tabular-nums"> (empezaste en {confidence.first})</span>}
          </m.p>
        )}
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
        {practice.cautions && !risk && (
          <m.p variants={fadeUp} className="mt-4 rounded-xl bg-stone-100 px-4 py-3 text-sm leading-relaxed text-stone-600">
            <span className="font-medium">Precaución. </span>
            {practice.cautions}
          </m.p>
        )}
        {risk && (
          <m.div variants={fadeUp} className="mt-6 rounded-2xl border border-stone-300 bg-white p-5">
            <p className="font-medium text-stone-800">Antes de empezar</p>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              Esta práctica puede remover emociones intensas. {practice.cautions}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              Puedes detenerte en cualquier momento: «Pausar» y después «Terminar aquí». Si hoy no es un buen día, prueba{' '}
              <Link href={`/gimnasio/${risk.alternative}`} className="text-sage-700 underline decoration-sage-300 underline-offset-2 hover:decoration-sage-700">
                {PRACTICE_BY_ID[risk.alternative]?.title ?? risk.alternative}
              </Link>
              .
            </p>
            <label className="mt-4 flex cursor-pointer items-start gap-3 text-sm text-stone-700">
              <input type="checkbox" checked={acknowledged} onChange={(e) => setAcknowledged(e.target.checked)} className="mt-0.5 h-4 w-4 accent-sage-700" />
              Leí las precauciones y quiero hacerla ahora.
            </label>
          </m.div>
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
        {resume && resume.index < scaleSteps(practice.steps, resume.variant as DurationVariant).length && (
          <m.div variants={fadeUp} className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-sage-200 bg-sage-50/70 p-5">
            <p className="text-sm leading-relaxed text-stone-700">
              La dejaste en el paso {resume.index + 1}: <span className="font-medium">{practice.steps[resume.index]?.title}</span>.
            </p>
            <Button
              variant="secondary"
              disabled={Boolean(risk) && !acknowledged}
              onClick={() => {
                setVariant(resume.variant as DurationVariant);
                setStartAt(resume.index);
                startedAtRef.current = new Date();
                go('practice');
              }}
            >
              Retomar desde ahí
            </Button>
          </m.div>
        )}
        <m.div variants={fadeUp} className="mt-8 flex justify-end">
          <Button
            disabled={Boolean(risk) && !acknowledged}
            onClick={() => {
              setStartAt(0);
              startedAtRef.current = new Date();
              go('practice');
            }}
          >
            {resume ? 'Empezar de nuevo' : 'Preparado'}
          </Button>
        </m.div>
        <m.div variants={fadeUp} className="mt-4 flex justify-end">
          <button type="button" onClick={() => setApplyOpen(true)} className="text-sm text-sage-700 underline decoration-sage-300 underline-offset-2 hover:decoration-sage-700">
            ¿Ya la usaste en tu vida? Cuéntalo
          </button>
        </m.div>
        <Sheet open={applyOpen} onClose={() => setApplyOpen(false)} title="La usé en mi vida">
          <div className="pb-4">
            <p className="mb-4 text-sm leading-relaxed text-stone-600">
              Usar una habilidad fuera de la pantalla, aunque sea a medias, es lo que la vuelve tuya. Cuéntalo para ver qué te sirve.
            </p>
            <ApplicationForm practiceId={practice.id} />
          </div>
        </Sheet>
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
              {
                id: 'ficha',
                label: 'Ficha',
                content: <SkillSheet practice={practice} />,
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
          startAt={startAt}
          onStep={(index) => saveResume({ practiceId: practice.id, variant, index })}
          onComplete={(sec) => {
            clearResume();
            setResume(null);
            setPracticedSec(sec);
            go('close');
          }}
          onCancel={() => {
            setResume(loadResume(practice.id));
            go('intro');
          }}
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
        <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
          <label className="block">
            <span className="block font-serif text-xl text-stone-800">Llevarlo a tu vida</span>
            <span className="mt-1 block text-sm leading-relaxed text-stone-600">
              ¿Cuándo y dónde podrías probar esta habilidad fuera de la pantalla? Una acción pequeña basta. En unos días te
              preguntaremos cómo fue (opcional).
            </span>
            <input
              value={transfer}
              onChange={(e) => setTransfer(e.target.value.slice(0, 280))}
              placeholder="Ej.: Mañana, antes de la reunión"
              className="mt-3 w-full rounded-xl border border-stone-200 bg-stone-50/60 px-4 py-3 text-[15px] text-stone-800 placeholder:text-stone-500 focus:border-sage-400 focus:bg-white focus:outline-none"
            />
          </label>
          <div className="mt-3 flex flex-wrap gap-2" aria-label="Ideas">
            {TRANSFER_SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setTransfer(s)}
                className="rounded-full border border-stone-200 px-3 py-1 text-xs text-stone-600 transition-colors hover:border-sage-300 hover:text-stone-800"
              >
                {s}
              </button>
            ))}
          </div>
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
        {note && <GrowthNote note={note} className="mt-8" />}
        {transfer.trim() && (
          <m.p variants={fadeUp} className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-stone-600">
            Te propusiste: «{transfer.trim()}». En unos días te preguntaremos en el Panel cómo fue.
          </m.p>
        )}
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
