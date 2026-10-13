import { EVIDENCE_LABEL } from '@/domain/evidence';
import type { EvidenceLevel, Reference } from '@/domain/types';

export function EvidenceBadge({ level }: { level: EvidenceLevel }) {
  const { label, description } = EVIDENCE_LABEL[level];
  return (
    <span
      title={description}
      className="inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-2.5 py-0.5 text-xs text-stone-600"
    >
      <span
        aria-hidden
        className={`h-1.5 w-1.5 rounded-full ${
          level === 'robusta' ? 'bg-sage-700' : level === 'moderada' ? 'bg-sage-400' : 'bg-stone-300'
        }`}
      />
      {label}
    </span>
  );
}

export function EvidencePanel({ level, references }: { level: EvidenceLevel; references: Reference[] }) {
  return (
    <details className="group rounded-lg border border-stone-200 bg-white/60 px-4 py-3 text-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-stone-600">
        <span>Fundamento empírico</span>
        <EvidenceBadge level={level} />
      </summary>
      <ul className="mt-3 space-y-3 border-t border-stone-100 pt-3 text-xs leading-relaxed text-stone-600">
        {references.map((r) => (
          <li key={r.citation}>
            {r.citation}{' '}
            {r.doi && (
              <a
                href={`https://doi.org/${r.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-700 underline decoration-sage-300 underline-offset-2 hover:decoration-sage-700"
              >
                doi:{r.doi}
              </a>
            )}
            {r.note && <p className="mt-1 italic text-stone-500">{r.note}</p>}
          </li>
        ))}
      </ul>
    </details>
  );
}
