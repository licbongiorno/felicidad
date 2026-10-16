'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { moodPatterns, type Confidence, type MoodPattern } from '@/domain/moodPatterns';
import type { DailyCheckin, JournalEntry, SessionRecord } from '@/domain/types';
import { buttonStyles } from '@/components/ui/Button';

const CONFIDENCE_LABEL: Record<Confidence, string> = {
  baja: 'Confianza baja: pocos días',
  media: 'Confianza media',
  alta: 'Confianza alta',
};

const experimentHref = (p: MoodPattern) => `/diario?${new URLSearchParams({ nuevo: 'experimento', ...p.experiment }).toString()}`;

/**
 * Patrones del ánimo: qué se asocia con tus días mejores o peores, con su nivel de confianza.
 * Se presenta como hipótesis para comprobar, nunca como causa.
 */
export function MoodPatterns({ checkins, sessions, journal }: { checkins: DailyCheckin[]; sessions: SessionRecord[]; journal: JournalEntry[] }) {
  const patterns = useMemo(() => moodPatterns(checkins, sessions, journal).slice(0, 3), [checkins, sessions, journal]);

  if (!patterns.length) {
    return (
      <p className="text-sm leading-relaxed text-stone-600">
        Cuando registres tu ánimo varios días, con y sin práctica o diario, aquí aparecerán patrones para comprobar. Hacen falta al menos tres días de cada tipo.
      </p>
    );
  }

  return (
    <div>
      <ul className="space-y-4">
        {patterns.map((p) => (
          <li key={`${p.feature}-${p.lag}`} className="rounded-2xl border border-stone-200 bg-white p-5">
            <p className="text-[15px] leading-relaxed text-stone-700">{p.text}</p>
            <p className="mt-2 text-xs uppercase tracking-wider text-stone-500">{CONFIDENCE_LABEL[p.confidence]}</p>
            <Link href={experimentHref(p)} className={buttonStyles('secondary', 'mt-4')}>
              Comprobarlo con un experimento
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-xs leading-relaxed text-stone-500">
        Son asociaciones, no causas: puede que hagas más cosas los días en que ya estás mejor, o que influya algo que la app no registra. Un experimento te
        ayuda a comprobarlo en tu propia vida.{' '}
        <Link href="/biblioteca/medir-tu-progreso" className="text-sage-700 underline decoration-sage-300 underline-offset-2 hover:decoration-sage-700">
          Cómo leer tus datos
        </Link>
      </p>
    </div>
  );
}
