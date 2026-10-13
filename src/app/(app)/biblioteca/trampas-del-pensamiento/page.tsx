import Link from 'next/link';
import { THINKING_TRAPS, THINKING_TRAPS_REFERENCES } from '@/domain/thinkingTraps';
import { Stagger, StaggerItem } from '@/components/motion/Reveal';
import { buttonStyles } from '@/components/ui/Button';

export default function ThinkingTrapsPage() {
  return (
    <Stagger step={0.03} className="mx-auto max-w-3xl">
      <StaggerItem>
        <Link href="/biblioteca" className="group inline-flex items-center gap-1.5 text-sm text-stone-600 transition-colors hover:text-stone-800">
          <span className="transition-transform duration-300 group-hover:-translate-x-0.5">←</span> Biblioteca
        </Link>
      </StaggerItem>
      <StaggerItem as="header" className="mt-8">
        <h1 className="font-serif text-4xl text-stone-800 sm:text-5xl">Trampas del pensamiento</h1>
        <p className="mt-3 leading-relaxed text-stone-600">
          Formas habituales en que la mente distorsiona la realidad cuando estamos mal. Todos caemos en ellas. Reconocerlas
          es el primer paso para no creerlas del todo.
        </p>
        <Link href="/diario?nuevo=reestructuracion" className={buttonStyles('secondary', 'mt-6')}>
          Usarlas en un registro de pensamientos →
        </Link>
      </StaggerItem>

      <StaggerItem as="div" className="mt-10">
        <ul className="grid gap-4 sm:grid-cols-2">
          {THINKING_TRAPS.map((t) => (
            <li key={t.id} id={t.id} className="scroll-mt-24">
              <details className="group h-full rounded-2xl border border-stone-200 bg-white p-5 shadow-soft open:shadow-lift">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span>
                    <span className="block font-serif text-xl text-stone-800">{t.name}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-stone-600">{t.description}</span>
                  </span>
                  <span className="mt-1 text-stone-500 transition-transform group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <dl className="mt-4 space-y-3 border-t border-stone-100 pt-4 text-[15px] leading-relaxed">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.14em] text-stone-500">Ejemplo</dt>
                    <dd className="mt-1 font-serif text-stone-700">{t.example}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.14em] text-stone-500">Pregúntate</dt>
                    <dd className="mt-1 text-stone-700">{t.question}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.14em] text-sage-700">Alternativa más equilibrada</dt>
                    <dd className="mt-1 font-serif text-stone-800">{t.alternative}</dd>
                  </div>
                </dl>
              </details>
            </li>
          ))}
        </ul>
      </StaggerItem>

      <StaggerItem as="section" className="mt-12">
        <h2 className="text-xs uppercase tracking-[0.2em] text-stone-600">Referencias</h2>
        <ol className="mt-4 space-y-2 text-xs leading-relaxed text-stone-600">
          {THINKING_TRAPS_REFERENCES.map((r) => (
            <li key={r.citation}>
              {r.citation}{' '}
              {r.doi && (
                <a href={`https://doi.org/${r.doi}`} target="_blank" rel="noopener noreferrer" className="text-sage-700 underline decoration-sage-300 underline-offset-2 hover:decoration-sage-700">
                  doi:{r.doi}
                </a>
              )}
            </li>
          ))}
        </ol>
      </StaggerItem>
    </Stagger>
  );
}
