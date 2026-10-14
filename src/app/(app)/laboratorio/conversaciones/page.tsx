import Link from 'next/link';
import { Stagger, StaggerItem } from '@/components/motion/Reveal';
import { SIMULATIONS } from '@/domain/lab';

export default function ConversationsPage() {
  return (
    <Stagger step={0.06} className="mx-auto max-w-3xl">
      <StaggerItem>
        <Link href="/laboratorio" className="text-sm text-stone-600 hover:text-stone-800">
          ← Laboratorio
        </Link>
      </StaggerItem>
      <StaggerItem as="header" className="mt-8">
        <h1 className="font-serif text-4xl text-stone-800 sm:text-5xl">Simulador de conversaciones</h1>
        <p className="mt-3 leading-relaxed text-stone-600">
          Elige una situación. La otra persona habla; tú eliges cómo responder. Cada respuesta tiene una explicación: no hay que
          acertar a la primera.
        </p>
      </StaggerItem>
      <StaggerItem as="ul" className="mt-10 grid gap-4 sm:grid-cols-2">
        {SIMULATIONS.map((s) => (
          <li key={s.id}>
            <Link
              href={`/laboratorio/conversaciones/${s.id}`}
              className="group flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-sage-300 hover:shadow-lift"
            >
              <span className="text-xs uppercase tracking-[0.14em] text-stone-500">Con {s.other.toLowerCase()}</span>
              <span className="mt-2 font-serif text-xl text-stone-800">{s.title}</span>
              <span className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">{s.context}</span>
              <span className="mt-5 text-sm text-sage-700">Ensayar →</span>
            </Link>
          </li>
        ))}
      </StaggerItem>
    </Stagger>
  );
}
