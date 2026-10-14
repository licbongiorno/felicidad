'use client';

import { useEffect, useMemo, useState } from 'react';
import type { JournalEntry } from '@/domain/types';
import type { Zone } from '@/domain/lab';
import { loadRepo, useProgressStore } from '@/store/useProgressStore';

export interface Toolbox {
  practices: Record<Zone, string[]>;
  own: Record<Zone, string>;
  signals: Record<Exclude<Zone, 'verde'>, string>;
  personas: string;
  frases: string;
}

export const EMPTY_TOOLBOX: Toolbox = {
  practices: { verde: [], amarillo: [], rojo: [] },
  own: { verde: '', amarillo: '', rojo: '' },
  signals: { amarillo: '', rojo: '' },
  personas: '',
  frases: '',
};

const ids = (v: unknown) => (typeof v === 'string' && v ? v.split(',').filter(Boolean) : []);
const str = (v: unknown) => (typeof v === 'string' ? v : '');

export function fromEntry(e: JournalEntry | null | undefined): Toolbox {
  if (!e) return EMPTY_TOOLBOX;
  const v = e.values;
  return {
    practices: { verde: ids(v.verdePracticas), amarillo: ids(v.amarilloPracticas), rojo: ids(v.rojoPracticas) },
    own: { verde: str(v.verdePropias), amarillo: str(v.amarilloPropias), rojo: str(v.rojoPropias) },
    signals: { amarillo: str(v.amarilloSenales), rojo: str(v.rojoSenales) },
    personas: str(v.personas),
    frases: str(v.frases),
  };
}

export function toValues(t: Toolbox): Record<string, string> {
  const raw: Record<string, string> = {
    verdePracticas: t.practices.verde.join(','),
    verdePropias: t.own.verde,
    amarilloSenales: t.signals.amarillo,
    amarilloPracticas: t.practices.amarillo.join(','),
    amarilloPropias: t.own.amarillo,
    rojoSenales: t.signals.rojo,
    rojoPracticas: t.practices.rojo.join(','),
    rojoPropias: t.own.rojo,
    personas: t.personas,
    frases: t.frases,
  };
  return Object.fromEntries(Object.entries(raw).filter(([, v]) => v.trim().length > 0).map(([k, v]) => [k, v.trim()]));
}

/** La caja vigente: la última versión guardada, aunque tenga más de 90 días. */
export function useToolbox() {
  const uid = useProgressStore((s) => s.uid);
  const journal = useProgressStore((s) => s.journal);
  const [fetched, setFetched] = useState<JournalEntry | null | undefined>(undefined);

  useEffect(() => {
    if (!uid) return;
    let alive = true;
    loadRepo()
      .then((repo) => repo.fetchLatestJournal(uid, 'caja-herramientas'))
      .then((e) => alive && setFetched(e))
      .catch(() => alive && setFetched(null));
    return () => {
      alive = false;
    };
  }, [uid]);

  return useMemo(() => {
    const recent = journal.find((j) => j.type === 'caja-herramientas');
    const latest = [recent, fetched].filter(Boolean).sort((a, b) => b!.createdAt.getTime() - a!.createdAt.getTime())[0] ?? null;
    return { loaded: fetched !== undefined || Boolean(recent), entry: latest, toolbox: fromEntry(latest) };
  }, [journal, fetched]);
}
