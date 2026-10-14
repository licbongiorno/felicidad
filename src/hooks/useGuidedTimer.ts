'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { playChime } from '@/lib/chime';

export type TimerStatus = 'idle' | 'running' | 'paused' | 'done';

interface Options {
  /** Recibe los segundos realmente practicados (excluye pausas). */
  onComplete?: (practicedSec: number) => void;
  chime?: boolean;
  /** Paso desde el que empezar (para retomar una práctica interrumpida). */
  initialIndex?: number;
}

/**
 * Temporizador por pasos, resistente a deriva: calcula el restante contra un deadline
 * absoluto en lugar de restar 1 por tick (los intervalos se ralentizan en segundo plano).
 */
export function useGuidedTimer<T extends { durationSec: number }>(
  steps: T[],
  { onComplete, chime = true, initialIndex = 0 }: Options = {},
) {
  const first = Math.min(Math.max(0, initialIndex), Math.max(0, steps.length - 1));
  const [index, setIndex] = useState(first);
  const [remaining, setRemaining] = useState(steps[first]?.durationSec ?? 0);
  const [status, setStatus] = useState<TimerStatus>('idle');

  const remainingRef = useRef(remaining);
  remainingRef.current = remaining;
  const practicedRef = useRef(0);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const finish = useCallback(() => {
    setStatus('done');
    setRemaining(0);
    if (chime) playChime(2);
    onCompleteRef.current?.(Math.round(practicedRef.current));
  }, [chime]);

  const goTo = useCallback(
    (next: number) => {
      if (next >= steps.length) return finish();
      if (chime) playChime(1);
      setIndex(next);
      setRemaining(steps[next].durationSec);
    },
    [steps, finish, chime],
  );

  useEffect(() => {
    if (status !== 'running') return;
    const deadline = Date.now() + remainingRef.current * 1000;
    let last = Date.now();
    const id = window.setInterval(() => {
      const now = Date.now();
      practicedRef.current += (now - last) / 1000;
      last = now;
      const left = Math.max(0, Math.ceil((deadline - now) / 1000));
      setRemaining(left);
      if (left === 0) {
        window.clearInterval(id);
        goTo(index + 1);
      }
    }, 250);
    return () => window.clearInterval(id);
  }, [status, index, goTo]);

  // Mantener la pantalla encendida mientras se practica (si el navegador lo permite).
  useEffect(() => {
    if (status !== 'running' || !('wakeLock' in navigator)) return;
    let lock: WakeLockSentinel | undefined;
    navigator.wakeLock.request('screen').then((l) => (lock = l)).catch(() => undefined);
    return () => void lock?.release();
  }, [status]);

  return {
    index,
    step: steps[index],
    remaining,
    status,
    progress: steps.length ? (index + (status === 'done' ? 1 : 0)) / steps.length : 0,
    start: () => setStatus('running'),
    pause: () => setStatus('paused'),
    resume: () => setStatus('running'),
    skip: () => goTo(index + 1),
    endEarly: finish,
    reset: () => {
      practicedRef.current = 0;
      setIndex(0);
      setRemaining(steps[0]?.durationSec ?? 0);
      setStatus('idle');
    },
  };
}

export function formatClock(totalSec: number): string {
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}
