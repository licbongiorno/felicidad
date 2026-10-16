'use client';

import { useProgressStore } from '@/store/useProgressStore';

/** Píldoras leídas hasta el final (sólo una comodidad visual). Se sincronizan con la cuenta. */
export function markPillRead(id: string): void {
  const { status, personal, updatePersonal } = useProgressStore.getState();
  // Antes de cargar la cuenta no se escribe: se pisaría la lista guardada.
  if (status !== 'ready' || personal.pillsRead.includes(id)) return;
  updatePersonal({ pillsRead: [...personal.pillsRead, id] });
}

export function usePillRead(id: string): boolean {
  return useProgressStore((s) => s.personal.pillsRead.includes(id));
}
