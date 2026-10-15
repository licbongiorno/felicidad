import Link from 'next/link';
import { PRACTICES, totalDurationSec } from '@/domain/practices';
import { Stagger, StaggerItem } from '@/components/motion/Reveal';
import { SkillsCatalog } from '@/components/gym/SkillsCatalog';
import { isPublished } from '@/domain/governance';

const VISIBLE = PRACTICES.filter((p) => isPublished('practica', p.id));

export default function GymPage() {
  return (
    <Stagger step={0.05}>
      <StaggerItem as="header">
        <h1 className="font-serif text-4xl text-stone-800 sm:text-5xl">Habilidades</h1>
        <p className="mt-3 max-w-2xl leading-relaxed text-stone-600">
          Prácticas guiadas organizadas según lo que necesitas. Cada una indica de qué enfoque viene (DBT, TCC, ACT y otros),
          su nivel de evidencia y si conviene hacerla con precauciones.
        </p>
        <Link
          href="/habilidades"
          className="group mt-5 flex max-w-2xl items-center justify-between gap-6 rounded-2xl border border-stone-200 bg-white px-6 py-4 transition-[border-color,box-shadow] hover:border-sage-300 hover:shadow-soft"
        >
          <span>
            <span className="block font-serif text-lg text-stone-800">¿No sabes por dónde empezar?</span>
            <span className="block text-sm text-stone-600">Elige lo que necesitas y te mostramos las habilidades que lo trabajan.</span>
          </span>
          <span className="text-stone-500 transition-transform group-hover:translate-x-0.5" aria-hidden>
            →
          </span>
        </Link>
      </StaggerItem>

      <StaggerItem as="section" className="mt-10" aria-labelledby="rapidas">
        <h2 id="rapidas" className="text-xs uppercase tracking-[0.2em] text-stone-600">
          Herramientas rápidas · 1 a 3 minutos
        </h2>
        <p className="mt-1 text-sm text-stone-600">Para usar en el momento: entre tareas, antes de una conversación difícil, cuando la emoción sube.</p>
        <ul className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {VISIBLE.filter((p) => p.micro).map((p) => (
            <li key={p.id}>
              <Link
                href={`/gimnasio/${p.id}`}
                className="group flex h-full flex-col rounded-2xl border border-sage-200 bg-sage-50 p-4 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-sage-300 hover:shadow-soft"
              >
                <span className="font-serif text-[17px] leading-snug text-stone-800">{p.title}</span>
                <span className="mt-auto pt-3 text-xs tabular-nums text-sage-800">{Math.max(1, Math.round(totalDurationSec(p.steps) / 60))} min</span>
              </Link>
            </li>
          ))}
        </ul>
      </StaggerItem>

      <StaggerItem>
        <SkillsCatalog />
      </StaggerItem>
    </Stagger>
  );
}
