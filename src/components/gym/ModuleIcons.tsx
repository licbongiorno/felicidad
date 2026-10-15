import type { SVGProps } from 'react';
import type { ModuleId } from '@/domain/catalog';

/** Íconos de los módulos de habilidades. Retícula de 24, trazo de 1,5, como components/ui/icons. */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
} as const;

type Icon = (p: SVGProps<SVGSVGElement>) => React.JSX.Element;

const icons: Record<ModuleId, Icon> = {
  // Un salvavidas: sostenerse en el momento difícil.
  afrontamiento: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M6 6l3.5 3.5M18 6l-3.5 3.5M6 18l3.5-3.5M18 18l-3.5-3.5" />
    </svg>
  ),
  // Una ola que sube y baja.
  emociones: (p) => (
    <svg {...base} {...p}>
      <path d="M3 14c2.2 0 2.2-4 4.5-4s2.3 4 4.5 4 2.2-4 4.5-4 2.3 4 4.5 4" />
      <path d="M3 18.5c2.2 0 2.2-2 4.5-2s2.3 2 4.5 2 2.2-2 4.5-2 2.3 2 4.5 2" opacity="0.55" />
      <circle cx="12" cy="6" r="1.6" />
    </svg>
  ),
  // Un globo de pensamiento con nubes.
  pensamientos: (p) => (
    <svg {...base} {...p}>
      <path d="M7.5 15.5a4 4 0 0 1-.6-7.95 5 5 0 0 1 9.6-.6A3.8 3.8 0 0 1 17 15.5z" />
      <circle cx="8" cy="19" r="1.2" />
      <circle cx="5" cy="21" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  ),
  // Dos personas conectadas.
  relaciones: (p) => (
    <svg {...base} {...p}>
      <circle cx="8" cy="8" r="3" />
      <circle cx="16.5" cy="9" r="2.5" />
      <path d="M2.5 19.5c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" />
      <path d="M14 15.2c.8-.5 1.6-.7 2.5-.7 2.3 0 4.2 1.6 4.8 4.5" />
    </svg>
  ),
  // Una mano que sostiene un corazón.
  autocompasion: (p) => (
    <svg {...base} {...p}>
      <path d="M12 12.5s-4-2.4-4-5.2A2.2 2.2 0 0 1 12 6.1a2.2 2.2 0 0 1 4 1.2c0 2.8-4 5.2-4 5.2z" />
      <path d="M3 15.5h3.5l3 2h4.5a1.5 1.5 0 0 0 0-3h-3" />
      <path d="M6.5 15.5v5M10.5 20.5h5.5l5-4.5a1.4 1.4 0 0 0-2-2l-3 2.5" />
    </svg>
  ),
  // Una brújula.
  valores: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15.5 8.5-2 5-5 2 2-5z" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  // Un calendario con una marca: pasos pequeños y regulares.
  habitos: (p) => (
    <svg {...base} {...p}>
      <rect x="4" y="5" width="16" height="15" rx="2.2" />
      <path d="M8 3v4M16 3v4M4 10h16" />
      <path d="m9 14.5 2 2 4-4" />
    </svg>
  ),
  // Un camino que se bifurca: elegir el siguiente paso.
  problemas: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="19" r="1.6" />
      <path d="M12 17.4V12m0 0c0-2.5-3.5-3.5-5.5-6m5.5 6c0-2.5 3.5-3.5 5.5-6" />
      <path d="M5 4.5 6.5 6 8 4.5M16 4.5 17.5 6 19 4.5" />
    </svg>
  ),
  // Respiración: la exhalación que se expande.
  cuerpo: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="2.4" />
      <circle cx="12" cy="12" r="5.5" opacity="0.7" />
      <circle cx="12" cy="12" r="8.5" opacity="0.4" />
    </svg>
  ),
  // Un sol que asoma.
  bienestar: (p) => (
    <svg {...base} {...p}>
      <path d="M6.5 16a5.5 5.5 0 0 1 11 0" />
      <path d="M3 16h18M12 4.5V7M5.6 7.6l1.7 1.7M18.4 7.6l-1.7 1.7M3.5 12.5H5M19 12.5h1.5" />
      <path d="M8 19.5h8" />
    </svg>
  ),
  // Un espejo con un reflejo: mirarse a uno mismo.
  autoconocimiento: (p) => (
    <svg {...base} {...p}>
      <ellipse cx="12" cy="10" rx="5.5" ry="6.5" />
      <path d="M12 16.5V21M9 21h6" />
      <path d="M9.6 8a2.6 2.6 0 0 1 2.4-1.6" />
    </svg>
  ),
  // Dos corazones que se tocan.
  pareja: (p) => (
    <svg {...base} {...p}>
      <path d="M9 19s-5.5-3.3-5.5-7.4A3 3 0 0 1 9 10a3 3 0 0 1 5.5 1.6" />
      <path d="M15 20s-5.5-3.3-5.5-7.4A3 3 0 0 1 15 11a3 3 0 0 1 5.5 1.6c0 4.1-5.5 7.4-5.5 7.4z" />
    </svg>
  ),
  // Una hoja que cae.
  duelo: (p) => (
    <svg {...base} {...p}>
      <path d="M6 18c0-7 5-11 12-12 0 7-4 12-12 12z" />
      <path d="M6 18l7-7M4 21h5" />
    </svg>
  ),
  // Una luna con estrellas.
  sueno: (p) => (
    <svg {...base} {...p}>
      <path d="M15.5 4.5a7.5 7.5 0 1 0 4 12.5 6 6 0 0 1-4-12.5z" />
      <path d="M19 4v3M17.5 5.5h3" />
    </svg>
  ),
  // Un maletín con una pausa.
  trabajo: (p) => (
    <svg {...base} {...p}>
      <rect x="3.5" y="7.5" width="17" height="11.5" rx="2" />
      <path d="M9 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1.5M10.5 11.5v4M13.5 11.5v4" />
    </svg>
  ),
  // Un camino con tres etapas.
  etapas: (p) => (
    <svg {...base} {...p}>
      <path d="M4 19c4 0 4-6 8-6s4-6 8-6" />
      <circle cx="4" cy="19" r="1.4" />
      <circle cx="12" cy="13" r="1.4" />
      <circle cx="20" cy="7" r="1.4" />
    </svg>
  ),
  // Una cruz suave dentro de un círculo: cuidado de la salud.
  salud: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  ),
  // Piezas distintas que encajan.
  neurodiversidad: (p) => (
    <svg {...base} {...p}>
      <path d="M4 4h7v4a2 2 0 1 0 0 3v2H4z" />
      <path d="M13 11h7v9h-7v-3a2 2 0 1 0 0-3z" />
      <path d="M4 15h7v5H4z" />
    </svg>
  ),
};

export function ModuleIcon({ id, ...p }: { id: ModuleId } & SVGProps<SVGSVGElement>) {
  const Icon = icons[id];
  return <Icon {...p} />;
}
