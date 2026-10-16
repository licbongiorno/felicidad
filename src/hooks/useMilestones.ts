'use client';

import { useEffect, useMemo, useState } from 'react';
import { useAuth } from '@/providers/AuthProvider';
import { useProgressStore } from '@/store/useProgressStore';
import { mergeMilestones, reachedMilestones } from '@/domain/daily';

/**
 * Hitos alcanzados y los recién alcanzados (para celebrarlos una sola vez).
 * Lo alcanzado se guarda en la cuenta: un hito no se pierde aunque los registros salgan de
 * la ventana local de 90 días ni al cambiar de dispositivo. Al cargar por primera vez no se
 * celebra nada: lo que ya estaba alcanzado se marca como visto en silencio.
 */
export function useMilestones() {
  const { user } = useAuth();
  const uid = user?.uid ?? 'demo';
  const status = useProgressStore((s) => s.status);
  const storedMilestones = useProgressStore((s) => s.personal.milestones);
  const read = (_uid: string) => storedMilestones;
  // Se une con lo último guardado: nunca se pierde un hito ya registrado (p. ej. uno recién migrado).
  const write = (_uid: string, ids: string[]) => {
    const { personal, updatePersonal } = useProgressStore.getState();
    updatePersonal({ milestones: [...new Set([...personal.milestones, ...ids])] });
  };
  const sessions = useProgressStore((s) => s.sessions);
  const checkins = useProgressStore((s) => s.checkins);
  const journal = useProgressStore((s) => s.journal);
  const applications = useProgressStore((s) => s.applications);
  const now = useMemo(() => reachedMilestones({ sessions, checkins, journal, applications }), [sessions, checkins, journal, applications]);
  const [saved, setSaved] = useState<string[] | null>(null);
  const [fresh, setFresh] = useState<string[]>([]);

  useEffect(() => {
    if (status !== 'ready') return;
    const stored = read(uid);
    const firstRun = saved === null;
    const { all, fresh: newly } = mergeMilestones(stored, now);
    if (newly.length > 0) write(uid, all);
    setSaved(all);
    // En la primera lectura sólo se celebra si ya había hitos guardados (no es la primera vez en este dispositivo).
    if (newly.length > 0 && (!firstRun || stored.length > 0)) setFresh((f) => [...f, ...newly.filter((id) => !f.includes(id))]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, uid, now]);

  return {
    reached: saved ?? now,
    fresh,
    dismiss: (id: string) => setFresh((f) => f.filter((x) => x !== id)),
  };
}
