'use client';

import { useCallback } from 'react';
import type { ChallengeState } from '@/domain/challenges';
import { useProgressStore } from '@/store/useProgressStore';

/** Desafíos activos (inicio y días marcados a mano), sincronizados con la cuenta. */
export function useChallenges() {
  const all = useProgressStore((s) => s.personal.challenges) as Record<string, ChallengeState>;
  const ready = useProgressStore((s) => s.status === 'ready');
  const save = useCallback((fn: (prev: Record<string, ChallengeState>) => Record<string, ChallengeState>) => {
    const { status, personal, updatePersonal } = useProgressStore.getState();
    if (status !== 'ready') return; // antes de cargar se pisarían los desafíos guardados
    updatePersonal({ challenges: fn(personal.challenges) });
  }, []);
  return { all, ready, save };
}
