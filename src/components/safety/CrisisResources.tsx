import { CRISIS_RESOURCES } from '@/config/safety';

/** Lista de recursos de crisis: un toque para llamar. Se usa en todas las pantallas de ayuda. */
export function CrisisResources({ className = '' }: { className?: string }) {
  return (
    <ul className={`divide-y divide-stone-100 ${className}`}>
      {CRISIS_RESOURCES.map((r) => (
        <li key={r.label} className="flex items-start justify-between gap-4 py-3">
          <span className="min-w-0">
            <span className="block text-sm font-medium text-stone-800">{r.label}</span>
            {r.detail && <span className="mt-0.5 block text-xs leading-relaxed text-stone-500">{r.detail}</span>}
          </span>
          {r.href ? (
            <a
              href={r.href}
              className="shrink-0 rounded-full bg-sage-700 px-3.5 py-1.5 text-sm font-medium tabular-nums text-stone-50 transition-colors hover:bg-sage-800"
              aria-label={`Llamar a ${r.label}: ${r.contact}`}
            >
              {r.contact}
            </a>
          ) : (
            <span className="shrink-0 text-right text-sm text-stone-600">{r.contact}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
