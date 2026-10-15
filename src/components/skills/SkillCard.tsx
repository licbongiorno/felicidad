import Link from 'next/link';
import { PRACTICE_BY_ID, totalDurationSec } from '@/domain/practices';
import { LEVEL_LABEL, levelOf } from '@/domain/levels';
import { APPROACH_LABEL, practiceApproaches, practiceRisk } from '@/domain/catalog';
import { EVIDENCE_LABEL } from '@/domain/evidence';

/** Tarjeta de una habilidad con lo necesario para elegir: duración, nivel, enfoque, evidencia y cuidado. */
export function SkillCard({ practiceId, first = false }: { practiceId: string; first?: boolean }) {
  const p = PRACTICE_BY_ID[practiceId];
  const min = Math.max(1, Math.round(totalDurationSec(p.steps) / 60));
  const careful = practiceRisk(p.id) === 2;
  return (
    <Link
      href={`/gimnasio/${p.id}`}
      className="group flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-5 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:border-sage-300 hover:shadow-lift"
    >
      {first && <span className="mb-2 self-start rounded-full bg-sage-50 px-2.5 py-0.5 text-xs text-sage-700 ring-1 ring-sage-200">Para empezar</span>}
      <span className="font-serif text-lg text-stone-800">{p.title}</span>
      <span className="mt-1 flex-1 text-sm leading-relaxed text-stone-600">{p.summary}</span>
      <span className="mt-4 flex flex-wrap gap-1.5 text-xs text-stone-600">
        <span className="rounded-full bg-stone-100 px-2 py-0.5">{min} min</span>
        <span className="rounded-full bg-stone-100 px-2 py-0.5">{LEVEL_LABEL[levelOf(p.id).level]}</span>
        <span className="rounded-full bg-stone-100 px-2 py-0.5">{EVIDENCE_LABEL[p.evidenceLevel].label}</span>
        {practiceApproaches(p.id).map((a) => (
          <span key={a} className="rounded-full border border-stone-200 px-2 py-0.5">
            {APPROACH_LABEL[a]}
          </span>
        ))}
        {careful && <span className="rounded-full bg-stone-800 px-2 py-0.5 text-stone-50">Con precauciones</span>}
      </span>
    </Link>
  );
}
