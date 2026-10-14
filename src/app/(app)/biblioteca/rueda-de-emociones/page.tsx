import Link from 'next/link';
import { EMOTION_FAMILIES, EMOTION_REFERENCES } from '@/domain/emotions';
import { Stagger, StaggerItem } from '@/components/motion/Reveal';
import { buttonStyles } from '@/components/ui/Button';

/** Fondo de cada matiz: más intenso cuanto mayor es la intensidad de la emoción. */
const SHADE_BG = ['bg-sage-50', 'bg-sage-100', 'bg-sage-200', 'bg-sage-300', 'bg-sage-400'];

export default function EmotionWheelPage() {
  return (
    <Stagger step={0.03} className="mx-auto max-w-3xl">
      <StaggerItem>
        <Link href="/biblioteca" className="group inline-flex items-center gap-1.5 text-sm text-stone-600 transition-colors hover:text-stone-800">
          <span className="transition-transform duration-300 group-hover:-translate-x-0.5">←</span> Biblioteca
        </Link>
      </StaggerItem>
      <StaggerItem as="header" className="mt-8">
        <h1 className="font-serif text-4xl text-stone-800 sm:text-5xl">Rueda de emociones</h1>
        <p className="mt-3 leading-relaxed text-stone-600">
          Diez familias de emociones, cada una con sus matices de menor a mayor intensidad. Ponerle un nombre preciso a lo que
          sientes ya ayuda a regularlo. Abre cada una para ver cómo se siente en el cuerpo, a qué te empuja y qué hacer con ella.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/diario?nuevo=tarjeta-diaria" className={buttonStyles('secondary')}>
            Registrar en la tarjeta diaria →
          </Link>
          <Link href="/gimnasio/comprobar-hechos" className={buttonStyles('ghost')}>
            Comprobar los hechos
          </Link>
        </div>
      </StaggerItem>

      <StaggerItem as="div" className="mt-10">
        <ul className="grid gap-4 sm:grid-cols-2">
          {EMOTION_FAMILIES.map((e) => (
            <li key={e.id} id={e.id} className="scroll-mt-24">
              <details className="group h-full rounded-2xl border border-stone-200 bg-white p-5 shadow-soft open:shadow-lift">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span>
                    <span className="block font-serif text-xl text-stone-800">{e.name}</span>
                    <span className="mt-3 flex flex-wrap items-center gap-1.5" aria-label={`Matices de ${e.name.toLowerCase()}, de menor a mayor intensidad`}>
                      {e.shades.map((s, i) => (
                        <span
                          key={s}
                          className={`rounded-full border border-sage-200 px-2.5 py-0.5 text-xs text-stone-800 ${SHADE_BG[i] ?? SHADE_BG[SHADE_BG.length - 1]}`}
                        >
                          {s}
                        </span>
                      ))}
                    </span>
                  </span>
                  <span className="mt-1 text-stone-500 transition-transform group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <dl className="mt-4 space-y-3 border-t border-stone-100 pt-4 text-[15px] leading-relaxed">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.14em] text-stone-500">En el cuerpo</dt>
                    <dd className="mt-1 text-stone-700">{e.body}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.14em] text-stone-500">Te empuja a</dt>
                    <dd className="mt-1 text-stone-700">{e.urge}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.14em] text-stone-500">Encaja con los hechos si</dt>
                    <dd className="mt-1 text-stone-700">{e.fits}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.14em] text-sage-700">Si no encaja: acción opuesta</dt>
                    <dd className="mt-1 font-serif text-stone-800">{e.opposite}</dd>
                  </div>
                  {e.antidoteId && (
                    <div>
                      <Link
                        href={`/antidotos?emocion=${e.antidoteId}`}
                        className="text-sm text-sage-700 underline decoration-sage-300 underline-offset-2 hover:decoration-sage-700"
                      >
                        Usar el antídoto →
                      </Link>
                    </div>
                  )}
                </dl>
              </details>
            </li>
          ))}
        </ul>
      </StaggerItem>

      <StaggerItem as="section" className="mt-12">
        <h2 className="text-xs uppercase tracking-[0.2em] text-stone-600">Referencias</h2>
        <ol className="mt-4 space-y-2 text-xs leading-relaxed text-stone-600">
          {EMOTION_REFERENCES.map((r) => (
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
