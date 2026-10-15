import { ProgramList } from '@/components/programs/ProgramViews';
import { Stagger, StaggerItem } from '@/components/motion/Reveal';
import { ProgramFinder } from '@/components/programs/ProgramFinder';
import Link from 'next/link';

export default function ProgramsPage() {
  return (
    <Stagger>
      <StaggerItem as="header" className="max-w-2xl">
        <h1 className="font-serif text-4xl text-stone-800 sm:text-5xl">Programas</h1>
        <p className="mt-3 leading-relaxed text-stone-600">
          Recorridos de varias semanas que combinan prácticas, lecturas y registros en un orden pensado. Si no sabes por
          dónde empezar, empieza por <span className="text-stone-700">Fundamentos</span>.
        </p>
        <ProgramFinder />
        <p className="mt-4 text-sm text-stone-600">
          ¿Prefieres algo más corto?{' '}
          <Link href="/desafios" className="text-sage-700 underline underline-offset-4">
            Prueba un desafío de 7, 21 o 30 días
          </Link>
          .
        </p>
      </StaggerItem>
      <ProgramList />
    </Stagger>
  );
}
