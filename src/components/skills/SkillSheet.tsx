import Link from 'next/link';
import type { Practice } from '@/domain/types';
import { totalDurationSec } from '@/domain/practices';
import { LEVEL_LABEL, levelOf } from '@/domain/levels';
import { APPROACH_LABEL, MODULE_BY_ID, MODULE_OF_PRACTICE, practiceApproaches, practiceRisk, RISK_LABEL } from '@/domain/catalog';
import { EVIDENCE_LABEL } from '@/domain/evidence';
import { REVIEW_LABEL, reviewOf } from '@/domain/governance';
import { NEEDS_OF_PRACTICE } from '@/domain/needs';

const fmtDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' });
};

/** Ficha de la habilidad: para qué sirve, cómo es, de dónde viene y en qué estado está su revisión. */
export function SkillSheet({ practice }: { practice: Practice }) {
  const needs = NEEDS_OF_PRACTICE[practice.id] ?? [];
  const review = reviewOf('practica', practice.id);
  const mod = MODULE_OF_PRACTICE[practice.id];
  const rows: [string, React.ReactNode][] = [
    [
      'Para qué sirve',
      needs.length ? (
        <ul className="space-y-1">
          {needs.map((n) => (
            <li key={n.id}>
              <Link href={`/habilidades/${n.id}`} className="text-sage-700 underline decoration-sage-300 underline-offset-2 hover:decoration-sage-700">
                {n.title}
              </Link>
              : {n.objective}
            </li>
          ))}
        </ul>
      ) : (
        practice.summary
      ),
    ],
    ['Módulo', mod ? MODULE_BY_ID[mod].title : '—'],
    ['Duración', `Unos ${Math.max(1, Math.round(totalDurationSec(practice.steps) / 60))} minutos (versión estándar)`],
    ['Nivel', LEVEL_LABEL[levelOf(practice.id).level]],
    ['Enfoque', practiceApproaches(practice.id).map((a) => APPROACH_LABEL[a]).join(', ') || '—'],
    ['Evidencia', EVIDENCE_LABEL[practice.evidenceLevel].label],
    ['Cuidado', `${RISK_LABEL[practiceRisk(practice.id)]}${practice.cautions ? `. ${practice.cautions}` : ''}`],
    [
      'Revisión',
      `${REVIEW_LABEL[review.status]} · versión ${review.version} · referencias verificadas el ${fmtDate(review.evidenceCheckedAt)}${review.reviewedAt ? ` · revisado el ${fmtDate(review.reviewedAt)}` : ''}`,
    ],
  ];
  return (
    <div>
      <dl className="divide-y divide-stone-200">
        {rows.map(([k, v]) => (
          <div key={k} className="grid gap-1 py-3 sm:grid-cols-[9rem_1fr] sm:gap-4">
            <dt className="text-sm font-medium text-stone-600">{k}</dt>
            <dd className="text-[15px] leading-relaxed text-stone-700">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-sm leading-relaxed text-stone-600">
        Esta práctica es para aprender y entrenar una habilidad. No reemplaza una evaluación ni un tratamiento profesional, y no todas las
        prácticas son adecuadas para todas las personas.
      </p>
    </div>
  );
}
