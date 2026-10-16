import Link from 'next/link';
import { PILLS, pillMinutes } from '@/domain/pills';
import { isPublished } from '@/domain/governance';
import { Stagger, StaggerItem } from '@/components/motion/Reveal';
import { PillReadMark } from '@/components/library/PillReadMark';

const VISIBLE = PILLS.filter((p) => isPublished('pildora', p.id));
/** La lista es larga: la entrada escalonada dura como máximo 0,6 s en total. */
const STEP = Math.min(0.05, 0.6 / Math.max(VISIBLE.length, 1));

export default function PillsPage() {
  return (
    <Stagger step={0.05}>
      <StaggerItem>
        <Link href="/biblioteca" className="group inline-flex items-center gap-1.5 text-sm text-stone-500 transition-colors hover:text-stone-700">
          <span className="transition-transform duration-300 group-hover:-translate-x-0.5">←</span> Biblioteca
        </Link>
      </StaggerItem>
      <StaggerItem as="header" className="mt-8 max-w-2xl">
        <h1 className="font-serif text-4xl text-stone-800 sm:text-5xl">Píldoras</h1>
        <p className="mt-3 leading-relaxed text-stone-600">Ideas clave en pocas tarjetas, para leer en un minuto. Desliza o toca «Siguiente» para avanzar.</p>
      </StaggerItem>
      <Stagger as="ul" step={STEP} delay={0.1} className="mt-8 grid gap-4 md:grid-cols-2">
        {VISIBLE.map((p) => (
          <StaggerItem as="li" key={p.id}>
            <Link
              href={`/biblioteca/pildoras/${p.id}`}
              className="group flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:border-sage-300 hover:shadow-lift"
            >
              <span className="font-serif text-xl text-stone-800">{p.title}</span>
              <span className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">{p.subtitle}</span>
              <span className="mt-5 flex items-center justify-between text-xs text-stone-500">
                <span>
                  {p.slides.length} tarjetas · {pillMinutes(p)} min
                </span>
                <PillReadMark id={p.id} />
              </span>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </Stagger>
  );
}
