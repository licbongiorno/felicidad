'use client';

import { useEffect, useMemo } from 'react';
import { useAuth } from '@/providers/AuthProvider';
import { useKidsStore } from '@/store/useKidsStore';
import { useActiveKidId } from '@/lib/kids/kidMode';

/** Conecta el store de chicos con la sesión del adulto. */
export function useKids() {
  const { user } = useAuth();
  const connect = useKidsStore((s) => s.connect);
  useEffect(() => {
    if (user) connect(user.uid);
  }, [user, connect]);
  return useKidsStore();
}

/** El chico activo en modo chico y sus actividades. */
export function useActiveKid() {
  const store = useKids();
  const activeId = useActiveKidId();
  const kid = store.kids.find((k) => k.id === activeId) ?? null;
  const logs = useMemo(() => store.activities.filter((a) => a.kidId === activeId), [store.activities, activeId]);
  return { ...store, activeId, kid, logs };
}
