'use client';

import { useMemo } from 'react';
import { buildGarden, daysThisMonth, growthCounts, skillProgress } from '@/domain/growth';
import { useProgressStore } from '@/store/useProgressStore';

/** Jardín, constancia del mes y colección DBT, derivados del progreso del usuario. */
export function useGrowth() {
  const sessions = useProgressStore((s) => s.sessions);
  const journal = useProgressStore((s) => s.journal);
  const lifetime = useProgressStore((s) => s.lifetime);
  const status = useProgressStore((s) => s.status);

  return useMemo(() => {
    const counts = growthCounts(sessions, journal, lifetime);
    return {
      ready: status === 'ready' || status === 'error',
      counts,
      garden: buildGarden(counts),
      month: daysThisMonth(sessions, journal),
      skills: skillProgress(counts),
      sessions,
      journal,
    };
  }, [sessions, journal, lifetime, status]);
}
