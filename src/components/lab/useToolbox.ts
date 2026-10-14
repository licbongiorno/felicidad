'use client';

import { useMemo } from 'react';
import type { JournalEntry } from '@/domain/types';
import type { Zone } from '@/domain/lab';
import { useLatestJournal } from '@/hooks/useLatestJournal';

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
  const { loaded, latest } = useLatestJournal('caja-herramientas');
  return useMemo(() => ({ loaded, entry: latest, toolbox: fromEntry(latest) }), [loaded, latest]);
}
