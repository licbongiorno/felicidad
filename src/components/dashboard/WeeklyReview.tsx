'use client';

import { useMemo } from 'react';
import { weeklyReview } from '@/domain/metrics';
import type { DailyCheckin, JournalEntry, SessionRecord } from '@/domain/types';
import { CountUp } from '@/components/motion/Reveal';

/** Revisión semanal: cuatro cifras de esta semana y su diferencia con la anterior. Sin juicios. */
export function WeeklyReview({ sessions, checkins, journal }: { sessions: SessionRecord[]; checkins: DailyCheckin[]; journal: JournalEntry[] }) {
  const { current, previous } = useMemo(
    () => weeklyReview(sessions, checkins, journal.map((j) => j.createdAt)),
    [sessions, checkins, journal],
  );

  const rows: { label: string; value: number | null; prev: number | null; decimals?: number; unit?: string }[] = [
    { label: 'Días con práctica', value: current.practiceDays, prev: previous.practiceDays, unit: '/7' },
    { label: 'Minutos', value: current.minutes, prev: previous.minutes },
    { label: 'Ánimo medio', value: current.mood, prev: previous.mood, decimals: 1, unit: '/10' },
    { label: 'Entradas de diario', value: current.entries, prev: previous.entries },
  ];

  return (
    <div>
      <dl className="grid grid-cols-2 gap-x-6 gap-y-6">
        {rows.map((r) => {
          const delta = r.value !== null && r.prev !== null ? Math.round((r.value - r.prev) * 10) / 10 : null;
          return (
            <div key={r.label}>
              <dt className="text-xs text-stone-500">{r.label}</dt>
              <dd className="mt-1 flex items-baseline gap-1">
                {r.value === null ? (
                  <span className="font-serif text-3xl text-stone-500">–</span>
                ) : (
                  <CountUp value={r.value} decimals={r.decimals ?? 0} className="font-serif text-3xl text-stone-800" />
                )}
                {r.unit && r.value !== null && <span className="text-sm text-stone-500">{r.unit}</span>}
              </dd>
              <dd className="mt-0.5 text-xs tabular-nums text-stone-500">
                {delta === null ? 'sin datos previos' : delta === 0 ? 'igual que la semana anterior' : `${delta > 0 ? '+' : ''}${delta} vs. semana anterior`}
              </dd>
            </div>
          );
        })}
      </dl>
      <p className="mt-6 border-t border-stone-100 pt-4 font-serif text-[15px] leading-relaxed text-stone-700">
        Pregunta de la semana: ¿qué práctica te ayudó más, y cuándo podrías repetirla?
      </p>
    </div>
  );
}
