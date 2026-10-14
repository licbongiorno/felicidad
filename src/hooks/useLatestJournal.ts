'use client';

import { useEffect, useMemo, useState } from 'react';
import type { JournalEntry, JournalType } from '@/domain/types';
import { loadRepo, useProgressStore } from '@/store/useProgressStore';

/**
 * Última entrada de un tipo del diario, sin la ventana de 90 días del store: para
 * documentos vigentes que se guardan como versiones (plan de seguridad, caja de herramientas).
 * Combina la consulta directa con lo que llega en tiempo real, y gana la más reciente.
 */
export function useLatestJournal(type: JournalType) {
  const uid = useProgressStore((s) => s.uid);
  const journal = useProgressStore((s) => s.journal);
  const [fetched, setFetched] = useState<JournalEntry | null | undefined>(undefined);

  useEffect(() => {
    if (!uid) return;
    let alive = true;
    loadRepo()
      .then((repo) => repo.fetchLatestJournal(uid, type))
      .then((e) => alive && setFetched(e))
      .catch(() => alive && setFetched(null));
    return () => {
      alive = false;
    };
  }, [uid, type]);

  return useMemo(() => {
    const recent = journal.find((j) => j.type === type);
    const candidates = [recent, fetched].filter((e): e is JournalEntry => Boolean(e));
    const latest = candidates.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())[0] ?? null;
    return { loaded: fetched !== undefined || Boolean(recent), latest };
  }, [journal, fetched, type]);
}
