'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { confidenceTrends } from '@/domain/application';
import { PRACTICE_SUMMARY_BY_ID as PRACTICE_BY_ID } from '@/domain/practiceIndex';
import type { Application } from '@/domain/types';

const signed = (x: number) => (x > 0 ? `+${x}` : x < 0 ? `−${Math.abs(x)}` : '±0');

/**
 * Confianza para usar cada habilidad (0–10), de la primera a la última vez que la registraste.
 * Es aprendizaje percibido: no dice nada sobre síntomas ni diagnósticos.
 */
export function SkillConfidence({ applications }: { applications: Application[] }) {
  const trends = useMemo(() => confidenceTrends(applications).filter((t) => PRACTICE_BY_ID[t.practiceId]).slice(0, 6), [applications]);
  if (!trends.length) {
    return (
      <p className="text-sm leading-relaxed text-stone-600">
        Cuando cuentes que usaste una habilidad en tu vida, puedes anotar cuánta confianza tienes en usarla. Aquí verás cómo cambia con la práctica.
      </p>
    );
  }
  return (
    <div>
      <ul className="divide-y divide-stone-100">
        {trends.map((t) => (
          <li key={t.practiceId} className="flex items-center justify-between gap-4 py-3">
            <Link href={`/gimnasio/${t.practiceId}`} className="min-w-0 text-[15px] text-stone-700 hover:text-stone-900">
              {PRACTICE_BY_ID[t.practiceId].title}
            </Link>
            <span className="shrink-0 text-sm tabular-nums text-stone-600">
              {t.n > 1 ? (
                <>
                  {t.first} → <span className="text-stone-800">{t.last}</span> <span className="text-stone-500">({signed(t.change)})</span>
                </>
              ) : (
                <span className="text-stone-800">{t.last}</span>
              )}
              <span className="sr-only"> de 10, {t.n === 1 ? '1 registro' : `${t.n} registros`}</span>
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs leading-relaxed text-stone-500">Confianza de 0 a 10 para usar cada habilidad cuando la necesites. Mide aprendizaje, no cómo te sientes.</p>
    </div>
  );
}
