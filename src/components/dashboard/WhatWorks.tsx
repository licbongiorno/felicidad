'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { antidoteEffects, MIN_N, practiceEffects, timeOfDayEffects, type EffectRow } from '@/domain/insights';
import type { AfflictionLog, SessionRecord } from '@/domain/types';
import { Tabs } from '@/components/ui/Tabs';

const signed = (x: number) => (x > 0 ? `+${x.toFixed(1)}` : x.toFixed(1).replace('-', '−'));

/**
 * Qué te funciona a ti: efectos inmediatos autoinformados por práctica, antídoto y
 * momento del día. Texto antes que gráfico: los valores son pocos y de n pequeña.
 */
export function WhatWorks({ sessions, afflictions }: { sessions: SessionRecord[]; afflictions: AfflictionLog[] }) {
  const byPractice = useMemo(() => practiceEffects(sessions), [sessions]);
  const byAntidote = useMemo(() => antidoteEffects(afflictions), [afflictions]);
  const byTime = useMemo(() => timeOfDayEffects(sessions), [sessions]);

  return (
    <div>
      <Tabs
        tabs={[
          {
            id: 'practicas',
            label: 'Prácticas',
            content: (
              <Rows
                rows={byPractice}
                unit="puntos de ánimo"
                better="up"
                empty="Registra tu ánimo antes y después de practicar (es opcional, al inicio y al final de cada práctica) para ver qué te sienta mejor."
              />
            ),
          },
          {
            id: 'antidotos',
            label: 'Antídotos',
            content: <Rows rows={byAntidote} unit="puntos de intensidad" better="down" empty="Cuando uses un mismo antídoto al menos dos veces, verás aquí su efecto medio." />,
          },
          {
            id: 'momento',
            label: 'Momento del día',
            content: <Rows rows={byTime} unit="puntos de ánimo" better="up" empty="Con algunos registros de ánimo en distintos momentos del día verás si hay alguno que te sienta mejor." />,
          },
        ]}
      />
      <p className="mt-6 text-xs leading-relaxed text-stone-500">
        Cambios inmediatos autoinformados, con al menos {MIN_N} registros por fila. Sirven para orientarte, no prueban
        causa y efecto.{' '}
        <Link href="/biblioteca/medir-tu-progreso" className="text-sage-700 underline decoration-sage-300 underline-offset-2 hover:decoration-sage-700">
          Cómo leerlos
        </Link>
      </p>
    </div>
  );
}

function Rows({ rows, unit, better, empty }: { rows: EffectRow[]; unit: string; better: 'up' | 'down'; empty: string }) {
  if (rows.length === 0) return <p className="rounded-xl border border-dashed border-stone-200 px-4 py-5 text-sm text-stone-600">{empty}</p>;
  return (
    <ol className="divide-y divide-stone-100">
      {rows.map((r, i) => {
        const favorable = better === 'up' ? r.meanDelta > 0 : r.meanDelta < 0;
        return (
          <li key={r.key} className="flex items-baseline justify-between gap-4 py-3">
            <span className="flex items-baseline gap-3">
              <span className="w-4 text-xs tabular-nums text-stone-500">{i + 1}</span>
              <span className="text-[15px] text-stone-800">{r.label}</span>
            </span>
            <span className="shrink-0 text-right">
              <span className={`font-serif text-xl tabular-nums ${favorable ? 'text-sage-700' : 'text-stone-600'}`}>{signed(r.meanDelta)}</span>
              <span className="ml-2 text-xs text-stone-500">
                {unit} · n={r.n}
              </span>
            </span>
          </li>
        );
      })}
    </ol>
  );
}
