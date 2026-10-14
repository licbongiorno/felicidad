'use client';

import { AnimatePresence, m } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { formatClock, useGuidedTimer } from '@/hooks/useGuidedTimer';
import { Button } from '@/components/ui/Button';
import { useUiStore } from '@/store/useUiStore';
import { EASE_OUT } from '@/lib/motion';
import { haptic } from '@/lib/haptics';
import { speak, stopSpeaking, voiceSupported } from '@/lib/voice';
import type { GuidedStep } from '@/domain/types';
import { BreathingOrb } from './BreathingOrb';

interface Props {
  steps: GuidedStep[];
  onComplete: (practicedSec: number) => void;
  onCancel?: () => void;
  /** Sin guía por voz (temporizador libre: el silencio es la práctica). */
  silent?: boolean;
  /** Paso inicial (retomar) y aviso de cada cambio de paso (para poder retomar después). */
  startAt?: number;
  onStep?: (index: number) => void;
}

const SWIPE_THRESHOLD = 70;

function useCoarsePointer() {
  const [coarse, setCoarse] = useState(false);
  useEffect(() => setCoarse(window.matchMedia('(pointer: coarse)').matches), []);
  return coarse;
}

/**
 * Reproductor de secuencias guiadas, compartido por el Gimnasio y los Antídotos.
 * `steps` debe ser estable (memoizado) mientras el componente esté montado.
 *
 * Gestos: tocar el orbe (pausa/reanuda), deslizar el texto a la izquierda (siguiente paso).
 * Teclado: Espacio (pausa/reanuda), → (siguiente paso).
 * Mientras corre, activa el modo inmersivo: la navegación se retira.
 */
export function GuidedSequence({ steps, onComplete, onCancel, silent = false, startAt = 0, onStep }: Props) {
  const voice = useUiStore((s) => s.voice);
  const chime = useUiStore((s) => s.chime);
  const setPref = useUiStore((s) => s.setPref);
  const hydrate = useUiStore((s) => s.hydrate);
  const [canSpeak, setCanSpeak] = useState(false);
  useEffect(() => {
    hydrate();
    setCanSpeak(voiceSupported());
  }, [hydrate]);

  const timer = useGuidedTimer(steps, { onComplete, chime, initialIndex: startAt });
  const { step, status, index } = timer;
  const onStepRef = useRef(onStep);
  onStepRef.current = onStep;
  useEffect(() => {
    if (status === 'running' || status === 'paused') onStepRef.current?.(index);
  }, [index, status]);

  // Guía por voz: lee cada paso al empezar (y al reanudar, para reorientar).
  useEffect(() => {
    if (silent || !voice || status !== 'running' || !step) return;
    speak(`${step.title}. ${step.instruction}`);
  }, [silent, voice, status, index, step]);
  useEffect(() => {
    if (status !== 'running') stopSpeaking();
  }, [status]);
  useEffect(() => stopSpeaking, []);
  const isBreath = step?.kind === 'breath';
  const stepProgress = step ? Math.min(1, 1 - timer.remaining / step.durationSec) : 0;
  const setImmersive = useUiStore((s) => s.setImmersive);
  const coarse = useCoarsePointer();

  useEffect(() => setImmersive(status === 'running'), [status, setImmersive]);
  useEffect(() => () => setImmersive(false), [setImmersive]);

  const toggle = () => {
    haptic('select');
    if (status === 'idle') timer.start();
    else if (status === 'running') timer.pause();
    else if (status === 'paused') timer.resume();
  };
  const skip = () => {
    if (status !== 'running' && status !== 'paused') return;
    haptic('select');
    timer.skip();
  };

  // Atajos de teclado (con ref para no re-suscribir el listener en cada tick).
  const handlers = useRef({ toggle, skip });
  handlers.current = { toggle, skip };
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('input, textarea, select, [contenteditable="true"]')) return;
      if (e.code === 'Space' && !target.closest('button')) {
        e.preventDefault();
        handlers.current.toggle();
      } else if (e.key === 'ArrowRight') {
        handlers.current.skip();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section aria-label="Práctica guiada" className="flex flex-col items-center text-center">
      <div className="mb-6 flex gap-2">
        {canSpeak && !silent && (
          <PrefToggle label="Voz guía" active={voice} onClick={() => setPref('voice', !voice)} />
        )}
        <PrefToggle label="Campana" active={chime} onClick={() => setPref('chime', !chime)} />
      </div>
      <ol className="mb-10 flex gap-1.5" aria-label={`Paso ${index + 1} de ${steps.length}`}>
        {steps.map((s, i) => (
          <li key={s.title + i} className="h-1 w-7 overflow-hidden rounded-full bg-stone-200 sm:w-9">
            <m.div
              className="h-full rounded-full bg-sage-600"
              style={{ originX: 0 }}
              initial={false}
              animate={{ scaleX: status === 'done' || i < index ? 1 : i === index ? stepProgress : 0 }}
              transition={{ duration: i === index ? 0.3 : 0.6, ease: i === index ? 'linear' : EASE_OUT }}
            />
          </li>
        ))}
      </ol>

      <BreathingOrb
        breathing={isBreath}
        running={status === 'running'}
        paused={status === 'paused'}
        progress={stepProgress}
        onTap={toggle}
        label={status === 'running' ? 'Pausar práctica' : status === 'paused' ? 'Reanudar práctica' : 'Comenzar práctica'}
      >
        <span className="font-serif text-5xl tabular-nums text-stone-700" aria-hidden>
          {formatClock(timer.remaining)}
        </span>
      </BreathingOrb>

      <m.div
        drag={status === 'idle' ? false : 'x'}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={(_, info) => {
          if (info.offset.x < -SWIPE_THRESHOLD) skip();
        }}
        className={`min-h-[10rem] w-full max-w-md touch-pan-y ${status === 'idle' ? '' : 'cursor-grab active:cursor-grabbing'}`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <m.div
            key={index}
            aria-live="polite"
            initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-stone-500">
              {step?.title} <span className="text-stone-500">· {index + 1}/{steps.length}</span>
            </p>
            <p className="font-serif text-xl leading-relaxed text-stone-700 sm:text-[1.35rem]">{step?.instruction}</p>
          </m.div>
        </AnimatePresence>
      </m.div>

      <div className="mt-8 flex min-h-[2.75rem] flex-wrap justify-center gap-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {status === 'idle' && (
            <m.div key="idle" className="flex gap-3" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
              <Button onClick={toggle}>Comenzar</Button>
              {onCancel && (
                <Button variant="ghost" onClick={onCancel}>
                  Volver
                </Button>
              )}
            </m.div>
          )}
          {status === 'running' && (
            <m.div key="running" className="flex gap-3" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
              <Button variant="secondary" onClick={toggle}>
                Pausar
              </Button>
              <Button variant="ghost" onClick={skip}>
                Siguiente paso
              </Button>
            </m.div>
          )}
          {status === 'paused' && (
            <m.div key="paused" className="flex gap-3" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
              <Button onClick={toggle}>Continuar</Button>
              <Button variant="ghost" onClick={timer.endEarly}>
                Terminar aquí
              </Button>
            </m.div>
          )}
        </AnimatePresence>
      </div>

      <p className="sr-only" aria-live="assertive">
        {status === 'running' ? 'Práctica en curso' : status === 'paused' ? 'Práctica en pausa' : status === 'done' ? 'Práctica terminada' : ''}
      </p>

      <m.p
        animate={{ opacity: status === 'running' ? 0.5 : 1 }}
        className="mt-6 text-xs text-stone-500"
      >
        {coarse
          ? 'Toca el círculo para pausar · desliza el texto hacia la izquierda para avanzar'
          : 'Espacio para pausar · → para el siguiente paso'}
      </m.p>
    </section>
  );
}

function PrefToggle({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={active}
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs transition-colors ${
        active ? 'bg-sage-50 text-sage-800 ring-1 ring-sage-200' : 'text-stone-500 ring-1 ring-stone-200 hover:text-stone-800'
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full transition-colors ${active ? 'bg-sage-600' : 'bg-stone-300'}`} aria-hidden />
      {label}
    </button>
  );
}
