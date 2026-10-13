'use client';

import Link from 'next/link';
import { AnimatePresence, m } from 'motion/react';
import { useMemo, useRef, useState, type ReactNode } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  ANTIDOTES,
  ANTIDOTE_BY_EMOTION,
  STABILIZATION_THRESHOLD,
  buildAntidoteSequence,
} from '@/domain/antidotes';
import { PRACTICE_BY_ID } from '@/domain/practices';
import { reviewOf } from '@/domain/governance';
import type { AfflictiveEmotionId } from '@/domain/types';
import { useProgressStore } from '@/store/useProgressStore';
import { useUiStore } from '@/store/useUiStore';
import { collapse, EASE_OUT, fadeUp, phaseVariants, stagger } from '@/lib/motion';
import { haptic } from '@/lib/haptics';
import { Button } from '@/components/ui/Button';
import { IntensityScale } from '@/components/ui/IntensityScale';
import { EvidencePanel, EvidenceBadge } from '@/components/ui/EvidencePanel';
import { GuidedSequence } from '@/components/practice/GuidedSequence';
import { CountUp, DrawnCheck } from '@/components/motion/Reveal';
import { SafetyPanel } from './SafetyPanel';
import { AntidoteHistory } from './AntidoteHistory';
import { Tabs } from '@/components/ui/Tabs';

/**
 * Flujo clínico:
 *  1. select     – reconocer y nombrar la emoción (etiquetado afectivo).
 *  2. calibrate  – intensidad 0–10 (SUDS), disparador opcional y cribado de riesgo.
 *  3. safety     – si hay riesgo, se detiene el flujo y se muestran recursos de crisis.
 *  4. practice   – secuencia guiada; estabilización previa si intensidad ≥ 8.
 *  5. reassess   – intensidad posterior (medida pre/post del mismo instrumento).
 *  6. summary    – resultado descrito sin valoración + práctica de entrenamiento sugerida.
 */
type Phase = 'select' | 'calibrate' | 'safety' | 'practice' | 'reassess' | 'summary';

const FLOW: { phase: Phase; label: string }[] = [
  { phase: 'select', label: 'Reconocer' },
  { phase: 'calibrate', label: 'Medir' },
  { phase: 'practice', label: 'Antídoto' },
  { phase: 'reassess', label: 'Volver a medir' },
  { phase: 'summary', label: 'Cierre' },
];
const ORDER: Record<Phase, number> = { select: 0, calibrate: 1, safety: 2, practice: 2, reassess: 3, summary: 4 };

/** Umbral para contar el ejercicio como sesión completa (racha y dosis). */
const MIN_PRACTICE_SEC = 60;

export function AntidoteModule() {
  const logAntidote = useProgressStore((s) => s.logAntidote);

  // Enlace profundo desde el buscador: /antidotos?emocion=ira abre directamente la medición.
  const params = useSearchParams();
  const preset = params.get('emocion') as AfflictiveEmotionId | null;
  const presetValid = preset !== null && preset in ANTIDOTE_BY_EMOTION;
  const [phase, setPhase] = useState<Phase>(presetValid ? 'calibrate' : 'select');
  const [direction, setDirection] = useState(1);
  const [emotionId, setEmotionId] = useState<AfflictiveEmotionId | null>(presetValid ? preset : null);
  const [intensityPre, setIntensityPre] = useState<number | null>(null);
  const [intensityPost, setIntensityPost] = useState<number | null>(null);
  const [trigger, setTrigger] = useState('');
  const [riskFlag, setRiskFlag] = useState(false);
  const [practicedSec, setPracticedSec] = useState(0);
  const startedAtRef = useRef<Date | null>(null);

  const antidote = emotionId ? ANTIDOTE_BY_EMOTION[emotionId] : null;
  const needsStabilization = (intensityPre ?? 0) >= STABILIZATION_THRESHOLD;

  // Estable mientras dura la práctica (requisito de GuidedSequence).
  const sequence = useMemo(
    () => (antidote && intensityPre !== null ? buildAntidoteSequence(antidote, intensityPre) : []),
    [antidote, intensityPre],
  );

  function go(next: Phase) {
    setDirection(ORDER[next] >= ORDER[phase] ? 1 : -1);
    setPhase(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function reset() {
    go('select');
    setEmotionId(null);
    setIntensityPre(null);
    setIntensityPost(null);
    setTrigger('');
    setRiskFlag(false);
    setPracticedSec(0);
    startedAtRef.current = null;
  }

  function handleCalibrated() {
    // El indicador de riesgo NO se persiste: registrarlo crea un deber de respuesta que
    // sólo puede asumirse con monitorización clínica en tiempo real. Decisión del equipo clínico.
    if (riskFlag) return go('safety');
    startedAtRef.current = new Date();
    go('practice');
  }

  function handleSave() {
    if (!antidote || intensityPre === null || intensityPost === null || !startedAtRef.current) return;
    const training = PRACTICE_BY_ID[antidote.trainingPracticeId];
    logAntidote(
      {
        emotionId: antidote.emotionId,
        antidoteId: `antidoto-${antidote.emotionId}`,
        intensityPre,
        intensityPost,
        trigger: trigger.trim() || null,
        stabilizationUsed: needsStabilization,
        contentVersion: reviewOf('antidoto', antidote.emotionId).version,
      },
      {
        practiceId: `antidoto-${antidote.emotionId}`,
        family: training.family,
        skills: ['resilience'],
        source: 'antidote',
        startedAt: startedAtRef.current,
        durationSec: practicedSec,
        completed: practicedSec >= MIN_PRACTICE_SEC,
        contentVersion: reviewOf('antidoto', antidote.emotionId).version,
        moodPre: null,
        moodPost: null,
      },
    );
    haptic('success');
    go('summary');
  }

  // ------------------------------------------------------------------ contenido por fase

  let content: ReactNode = null;

  if (phase === 'safety') {
    content = <SafetyPanel onBack={reset} />;
  } else if (phase === 'select') {
    content = (
      <section>
        <Intro
          title="¿Qué está presente ahora?"
          body="Nombrar con precisión una emoción ya reduce parte de su fuerza. Elige la que mejor describa lo que sientes; si hay varias, empieza por la más intensa."
        />
        <m.ul variants={stagger(0.05, 0.1)} initial="hidden" animate="show" className="grid gap-3 sm:grid-cols-2">
          {ANTIDOTES.map((a) => (
            <m.li key={a.emotionId} variants={fadeUp}>
              <m.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.985 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                onClick={() => {
                  haptic('select');
                  setEmotionId(a.emotionId);
                  go('calibrate');
                }}
                className="group flex h-full w-full flex-col rounded-2xl border border-stone-200 bg-white p-5 text-left transition-[border-color,box-shadow] duration-300 hover:border-sage-300 hover:shadow-lift"
              >
                <span className="flex items-center justify-between">
                  <span className="font-serif text-lg text-stone-800">{a.emotionLabel}</span>
                  <span
                    aria-hidden
                    className="text-stone-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-sage-600"
                  >
                    →
                  </span>
                </span>
                <span className="mt-1 block flex-1 text-sm leading-relaxed text-stone-600">{a.markers}</span>
                <span className="mt-4 block text-[11px] uppercase tracking-[0.14em] text-sage-700 transition-colors group-hover:text-sage-700">
                  Antídoto · {a.antidoteName}
                </span>
              </m.button>
            </m.li>
          ))}
        </m.ul>
        <AntidoteHistory />
      </section>
    );
  } else if (antidote && phase === 'calibrate') {
    content = (
      <section className="mx-auto max-w-xl">
        <Intro
          title={antidote.emotionLabel}
          body="Antes de intervenir, registra cómo estás. Esto te permitirá ver después qué cambió, sin adivinarlo."
        />
        <div className="space-y-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
          <IntensityScale
            label="Intensidad de la emoción ahora"
            value={intensityPre}
            onChange={setIntensityPre}
            lowAnchor="0 · ausente"
            highAnchor="10 · la máxima imaginable"
          />

          <AnimatePresence initial={false}>
            {needsStabilization && (
              <m.div variants={collapse} initial="hidden" animate="show" exit="exit" className="overflow-hidden">
                <p className="rounded-xl bg-sage-50 px-4 py-3 text-sm leading-relaxed text-sage-800">
                  Con una intensidad alta, el trabajo cognitivo cuesta más. Empezaremos con 90 segundos de
                  respiración lenta para bajar la activación.
                </p>
                {(intensityPre ?? 0) >= 9 && (
                  <Link
                    href="/gimnasio/tipp"
                    className="mt-3 flex items-center justify-between gap-4 rounded-xl border border-sage-300 bg-white px-4 py-3 text-sm text-stone-800 transition-colors hover:bg-sage-50"
                  >
                    <span>
                      <span className="block font-medium">¿Está al máximo? Prueba primero el kit de crisis</span>
                      <span className="block text-stone-600">TIPP: tres minutos para bajar la intensidad con el cuerpo.</span>
                    </span>
                    <span aria-hidden>→</span>
                  </Link>
                )}
              </m.div>
            )}
          </AnimatePresence>

          <label className="block">
            <span className="mb-2 block text-sm text-stone-600">
              ¿Qué lo disparó? <span className="text-stone-500">(opcional, una frase)</span>
            </span>
            <input
              type="text"
              maxLength={280}
              value={trigger}
              onChange={(e) => setTrigger(e.target.value)}
              placeholder="Describe el hecho, no el juicio"
              className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm transition-[border-color,background-color,box-shadow] duration-200 placeholder:text-stone-500 focus:border-sage-400 focus:bg-white focus:shadow-soft focus:outline-none"
            />
            <span className="mt-1.5 block text-right text-[11px] tabular-nums text-stone-500">{trigger.length}/280</span>
          </label>

          <label className="flex cursor-pointer items-start gap-3 border-t border-stone-100 pt-6 text-sm text-stone-600">
            <input
              type="checkbox"
              checked={riskFlag}
              onChange={(e) => setRiskFlag(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-stone-300 accent-sage-700"
            />
            Ahora mismo tengo pensamientos de hacerme daño o de no querer vivir.
          </label>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <Button variant="ghost" onClick={reset}>
            ← Cambiar emoción
          </Button>
          <Button disabled={intensityPre === null} onClick={handleCalibrated}>
            Continuar
          </Button>
        </div>
      </section>
    );
  } else if (antidote && phase === 'practice') {
    content = (
      <section className="mx-auto max-w-2xl">
        <header className="mb-10 text-center">
          <h2 className="font-serif text-3xl text-stone-800">{antidote.antidoteName}</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-stone-600">{antidote.incompatibility}</p>
        </header>
        <GuidedSequence
          steps={sequence}
          onComplete={(sec) => {
            setPracticedSec(sec);
            go('reassess');
          }}
          onCancel={() => go('calibrate')}
        />
        <div className="mt-16">
          <Tabs
            tabs={[
              {
                id: 'ciencia',
                label: 'Por qué funciona',
                content: (
                  <div className="space-y-4">
                    {antidote.science.map((p, i) => (
                      <p key={i} className="text-[16px] leading-[1.8] text-stone-700">
                        {p}
                      </p>
                    ))}
                  </div>
                ),
              },
              {
                id: 'cuando-no',
                label: 'Cuándo no usarlo',
                content: <p className="border-l-2 border-stone-300 pl-5 text-[15px] leading-relaxed text-stone-600">{antidote.whenNot}</p>,
              },
              {
                id: 'evidencia',
                label: 'Evidencia',
                content: <EvidencePanel level={antidote.evidenceLevel} references={antidote.evidence} />,
              },
            ]}
          />
        </div>
      </section>
    );
  } else if (antidote && phase === 'reassess') {
    content = (
      <section className="mx-auto max-w-xl">
        <Intro
          title="¿Cómo está ahora?"
          body="Responde con lo que notas, no con lo que crees que debería haber cambiado. Cualquier resultado es información útil."
        />
        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
          <IntensityScale
            label={`Intensidad de ${antidote.emotionLabel.toLowerCase()} ahora`}
            value={intensityPost}
            onChange={setIntensityPost}
            lowAnchor="0 · ausente"
            highAnchor="10 · la máxima imaginable"
          />
          <p className="mt-6 flex items-center gap-2 text-xs text-stone-500">
            <span className="h-1.5 w-1.5 rounded-full bg-stone-300" aria-hidden />
            Antes: {intensityPre}/10
          </p>
        </div>
        <div className="mt-8 flex justify-end">
          <Button disabled={intensityPost === null} onClick={handleSave}>
            Guardar registro
          </Button>
        </div>
      </section>
    );
  } else if (antidote && phase === 'summary') {
    const delta = (intensityPost ?? 0) - (intensityPre ?? 0);
    const training = PRACTICE_BY_ID[antidote.trainingPracticeId];
    content = (
      <m.section variants={stagger(0.12, 0.1)} initial="hidden" animate="show" className="mx-auto max-w-xl text-center">
        <m.div variants={fadeUp} className="flex justify-center">
          <DrawnCheck className="h-10 w-10" />
        </m.div>
        <m.p variants={fadeUp} className="mt-4 text-xs uppercase tracking-[0.2em] text-stone-500">
          Registro guardado
        </m.p>
        <m.h2 variants={fadeUp} className="mt-3 font-serif text-5xl text-stone-800">
          <span className="text-stone-500">{intensityPre}</span>
          <span aria-hidden className="mx-3 text-stone-500">→</span>
          <CountUp value={intensityPost ?? 0} from={intensityPre ?? 0} duration={1.6} />
        </m.h2>
        <m.p variants={fadeUp} className="mx-auto mt-5 max-w-md leading-relaxed text-stone-600">
          {delta < 0
            ? `La intensidad bajó ${Math.abs(delta)} ${Math.abs(delta) === 1 ? 'punto' : 'puntos'}. Nota qué paso del ejercicio marcó la diferencia.`
            : delta === 0
              ? 'La intensidad se mantuvo. A veces la emoción necesita más tiempo, o un antídoto distinto; quedarte con ella sin actuar ya es práctica.'
              : 'La intensidad subió. Ocurre cuando una emoción recibe atención por primera vez. Si persiste, considera hablarlo con tu terapeuta.'}
        </m.p>

        <m.div variants={fadeUp}>
          <Link
            href={`/gimnasio/${training.id}`}
            className="group mt-10 block rounded-2xl border border-stone-200 bg-white p-6 text-left transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-sage-300 hover:shadow-lift"
          >
            <p className="text-xs uppercase tracking-wider text-stone-500">Entrenamiento fuera de la crisis</p>
            <p className="mt-2 font-serif text-lg text-stone-800">{training.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-stone-600">
              Los antídotos funcionan mejor cuando el estado opuesto ya está familiarizado. Esta práctica lo entrena en calma.
            </p>
            <div className="mt-4 flex items-center justify-between">
              <EvidenceBadge level={training.evidenceLevel} />
              <span className="text-sm font-medium text-sage-700">
                Ir a la práctica <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        </m.div>

        <m.div variants={fadeUp}>
          <Button variant="secondary" className="mt-10" onClick={reset}>
            Registrar otra emoción
          </Button>
        </m.div>
      </m.section>
    );
  }

  return (
    <div>
      {phase !== 'safety' && <FlowStepper phase={phase} />}
      <AnimatePresence mode="wait" custom={direction} initial={false}>
        <m.div key={phase} custom={direction} variants={phaseVariants} initial="enter" animate="center" exit="exit">
          {content}
        </m.div>
      </AnimatePresence>
    </div>
  );
}

function FlowStepper({ phase }: { phase: Phase }) {
  const current = ORDER[phase];
  const immersive = useUiStore((s) => s.immersive);
  return (
    <m.nav aria-label="Progreso del ejercicio" animate={{ opacity: immersive ? 0.25 : 1 }} className="mb-12">
      <ol className="flex gap-2">
        {FLOW.map((f, i) => (
          <li key={f.phase} className="flex flex-1 flex-col gap-2" aria-current={i === current ? 'step' : undefined}>
            <div className="h-0.5 overflow-hidden rounded-full bg-stone-200">
              <m.div
                className="h-full bg-sage-600"
                style={{ originX: 0 }}
                initial={false}
                animate={{ scaleX: i <= current ? 1 : 0 }}
                transition={{ duration: 0.7, ease: EASE_OUT, delay: i === current ? 0.15 : 0 }}
              />
            </div>
            <span
              className={`hidden text-[11px] uppercase tracking-[0.14em] transition-colors duration-500 sm:block ${
                i === current ? 'font-medium text-stone-800' : i < current ? 'text-stone-600' : 'text-stone-500'
              }`}
            >
              {f.label}
            </span>
          </li>
        ))}
      </ol>
    </m.nav>
  );
}

function Intro({ title, body }: { title: string; body: string }) {
  return (
    <header className="mb-8">
      <h2 className="font-serif text-3xl text-stone-800 sm:text-4xl">{title}</h2>
      <p className="mt-3 max-w-xl leading-relaxed text-stone-600">{body}</p>
    </header>
  );
}
