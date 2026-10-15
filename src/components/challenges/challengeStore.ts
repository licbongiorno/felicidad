'use client';

import { useCallback, useEffect, useState } from 'react';
import type { ChallengeState } from '@/domain/challenges';

/** Desafíos activos en este dispositivo (inicio y días marcados a mano). */
const KEY = 'desafios';

function load(): Record<string, ChallengeState> {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '{}') as Record<string, ChallengeState>;
  } catch {
    return {};
  }
}

export function useChallenges() {
  const [all, setAll] = useState<Record<string, ChallengeState>>({});
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setAll(load());
    setReady(true);
  }, []);
  const save = useCallback((fn: (prev: Record<string, ChallengeState>) => Record<string, ChallengeState>) => {
    setAll((prev) => {
      const next = fn(prev);
      try {
        localStorage.setItem(KEY, JSON.stringify(next));
      } catch {
        // sin almacenamiento: el estado vive sólo en esta pestaña
      }
      return next;
    });
  }, []);
  return { all, ready, save };
}
