import Link from 'next/link';
import { Stagger, StaggerItem } from '@/components/motion/Reveal';
import { SIMULATIONS } from '@/domain/lab';

const TOOLS = [
  {
    href: '/laboratorio/conversaciones',
    title: 'Simulador de conversaciones',
    body: `${SIMULATIONS.length} situaciones para ensayar cómo pedir, decir que no y poner límites. Eliges qué responder y ves qué efecto tiene.`,
    tag: 'DBT · asertividad',
  },
  {
    href: '/laboratorio/semaforo',
    title: 'Semáforo emocional',
    body: 'Según cuán intensa es la emoción, qué hacer primero: pensar, hacer una pausa o bajar la activación del cuerpo.',
    tag: 'DBT · regulación',
  },
  {
    href: '/laboratorio/caja',
    title: 'Mi caja de herramientas',
    body: 'Prepara en calma tus señales y lo que te ayuda en cada zona del semáforo. Aparece cuando lo necesitas.',
    tag: 'DBT · tolerancia al malestar',
  },
  {
    href: '/laboratorio/hecho-o-interpretacion',
    title: '¿Hecho o interpretación?',
    body: 'Un juego breve para separar lo que pasó de lo que la mente agrega. La base de comprobar los hechos.',
    tag: 'DBT · TCC',
  },
  {
    href: '/laboratorio/cnv',
    title: 'Del chacal a la jirafa',
    body: 'Distingue observación de juicio, sentimiento de reproche y pedido de exigencia, y practica reescribir frases que lastiman.',
    tag: 'Comunicación no violenta',
  },
  {
    href: '/laboratorio/esquemas',
    title: 'Mapa de esquemas y modos',
    body: 'Los 18 esquemas de Jeffrey Young y las partes que se turnan dentro tuyo. Marca los que te resuenan, sin puntajes ni diagnósticos.',
    tag: 'Terapia de esquemas',
  },
  {
    href: '/laboratorio/genograma',
    title: 'Tu genograma',
    body: 'Dibuja tu familia en tres generaciones y mira qué se repite: dificultades y también fortalezas. Queda sólo en tu dispositivo.',
    tag: 'Sistémica · familia',
  },
];

export default function LabPage() {
  return (
    <Stagger step={0.06}>
      <StaggerItem as="header" className="max-w-2xl">
        <h1 className="font-serif text-4xl text-stone-800 sm:text-5xl">Laboratorio</h1>
        <p className="mt-3 leading-relaxed text-stone-600">
          Ejercicios interactivos para ensayar habilidades sin riesgo, antes de usarlas en tu vida. Equivocarte aquí es parte de
          aprender.
        </p>
      </StaggerItem>
      <StaggerItem as="ul" className="mt-10 grid gap-4 md:grid-cols-2">
        {TOOLS.map((t) => (
          <li key={t.href}>
            <Link
              href={t.href}
              className="group flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-sage-300 hover:shadow-lift"
            >
              <span className="text-xs uppercase tracking-[0.14em] text-stone-500">{t.tag}</span>
              <span className="mt-2 font-serif text-2xl text-stone-800">{t.title}</span>
              <span className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">{t.body}</span>
              <span className="mt-5 text-sm text-sage-700 transition-transform group-hover:translate-x-0.5">Abrir →</span>
            </Link>
          </li>
        ))}
      </StaggerItem>
    </Stagger>
  );
}
