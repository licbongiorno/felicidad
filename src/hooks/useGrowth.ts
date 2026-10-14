'use client';

import { useMemo } from 'react';
import { applicationsByPractice } from '@/domain/application';
import { buildGarden, daysThisMonth, growthCounts, skillProgress } from '@/domain/growth';
import { useProgressStore } from '@/store/useProgressStore';

/** Jardín, constancia del mes y colección DBT, derivados del progreso del usuario. */
export function useGrowth() {
  const sessions = useProgressStore((s) => s.sessions);
  const journal = useProgressStore((s) => s.journal);
  const lifetime = useProgressStore((s) => s.lifetime);
  const status = useProgressStore((s) => s.status);
  const applications = useProgressStore((s) => s.applications);

  return useMemo(() => {
    const counts = growthCounts(sessions, journal, lifetime);
    return {
      ready: status === 'ready' || status === 'error',
      counts,
      garden: buildGarden(counts),
      month: daysThisMonth(sessions, journal),
      skills: skillProgress(counts, applicationsByPractice(applications)),
      sessions,
      journal,
    };
  }, [sessions, journal, lifetime, status, applications]);
}
