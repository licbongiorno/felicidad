import Link from 'next/link';
import { NEEDS } from '@/domain/needs';
import { Stagger, StaggerItem } from '@/components/motion/Reveal';

export const metadata = { title: 'Mapa de habilidades' };

export default function SkillsMapPage() {
  return (
    <Stagger step={0.04}>
      <StaggerItem as="header" className="max-w-2xl">
        <h1 className="font-serif text-4xl text-stone-800 sm:text-5xl">¿Qué necesitas?</h1>
        <p className="mt-3 leading-relaxed text-stone-600">
          Elige lo que se parece a lo que te pasa. Cada necesidad reúne habilidades de distintos enfoques, con su duración, su nivel y la
          evidencia que las respalda. Son sugerencias para aprender y practicar: no son un diagnóstico ni reemplazan la ayuda profesional.
        </p>
        <p className="mt-3 text-sm text-stone-600">
          Si estás en peligro o en crisis ahora,{' '}
          <Link href="/antidotos" className="text-sage-700 underline underline-offset-4">
            empieza por aquí
          </Link>{' '}
          o llama a una línea de ayuda.
        </p>
      </StaggerItem>
      <Stagger as="ul" step={0.03} delay={0.1} className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {NEEDS.map((n) => (
          <StaggerItem as="li" key={n.id}>
            <Link
              href={`/habilidades/${n.id}`}
              className="group flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-5 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:border-sage-300 hover:shadow-lift"
            >
              <span className="font-serif text-xl text-stone-800">{n.title}</span>
              <span className="mt-1 flex-1 text-sm leading-relaxed text-stone-600">{n.description}</span>
              <span className="mt-4 text-xs text-stone-500">{n.practices.length} habilidades</span>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </Stagger>
  );
}
