import { m } from 'motion/react';
import type { SVGProps } from 'react';
import { EASE_OUT } from '@/lib/motion';

/**
 * Íconos de las habilidades DBT. Mismo sistema que components/ui/icons: retícula de 24,
 * trazo de 1,5, extremos redondeados y sin relleno (salvo puntos de acento).
 */

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

/** Mente sabia: la mente emocional y la racional, y el punto donde se encuentran. */
const WiseMind: Icon = (p) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="12" r="5.5" />
    <circle cx="15" cy="12" r="5.5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

/** STOP: parar antes de reaccionar. */
const Stop: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M8.7 3.5h6.6l4.7 4.7v6.6l-4.7 4.7H8.7L4 14.8V8.2z" />
    <path d="M10 9.5v5M14 9.5v5" />
  </svg>
);

/** Tarjeta diaria: registro de cada día. */
const DiaryCard: Icon = (p) => (
  <svg {...base} {...p}>
    <rect x="4.5" y="4" width="15" height="16.5" rx="2" />
    <path d="M8 2.5v3M16 2.5v3M4.5 9h15" />
    <path d="M8 13h2M8 16.5h2M13 13h3M13 16.5h3" />
  </svg>
);

/** TIPP: temperatura (agua fría) para bajar la activación. */
const Tipp: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3.5c3 3.6 5 6.4 5 9a5 5 0 0 1-10 0c0-2.6 2-5.4 5-9z" />
    <path d="M9.6 13.2c.8.6 1.6.6 2.4 0s1.6-.6 2.4 0" />
    <path d="M20 5.5v3M18.5 7h3" />
  </svg>
);

/** Cinco sentidos: cinco puntos de contacto amable. */
const Senses: Icon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="2.2" />
    {[0, 72, 144, 216, 288].map((a) => {
      const r = (a * Math.PI) / 180;
      return <circle key={a} cx={12 + Math.sin(r) * 6.5} cy={12 - Math.cos(r) * 6.5} r="1.9" />;
    })}
  </svg>
);

/** Pros y contras: una balanza. */
const ProsCons: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 4v16M8 20h8M5 7.5h14" />
    <path d="M5 7.5 2.8 13a2.4 2.4 0 0 0 4.4 0z" />
    <path d="M19 7.5 16.8 13a2.4 2.4 0 0 0 4.4 0z" />
    <circle cx="12" cy="4" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

/** Aceptación radical: manos abiertas, palmas hacia arriba. */
const Acceptance: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M3 13.5c2.5 0 4 1 5.5 2.5S11 18.5 12 18.5s2-1 3.5-2.5 3-2.5 5.5-2.5" />
    <path d="M3 13.5v4M21 13.5v4" />
    <circle cx="12" cy="8.5" r="2.6" />
    <path d="M12 3.5v1.2M7.6 5.3l.8.8M16.4 5.3l-.8.8" />
  </svg>
);

/** Comprobar los hechos: una lupa con una marca de verificación. */
const CheckFacts: Icon = (p) => (
  <svg {...base} {...p}>
    <circle cx="10.5" cy="10.5" r="6" />
    <path d="m15 15 5 5" />
    <path d="m8 10.6 1.8 1.8 3.2-3.4" />
  </svg>
);

/** Acción opuesta: girar en sentido contrario al impulso. */
const Opposite: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 8h12a4 4 0 0 1 0 8H9" />
    <path d="m7 5-3 3 3 3" />
    <path d="m12 13-3 3 3 3" />
  </svg>
);

/** PLEASE: cuidar el cuerpo (un corazón con pulso). */
const Please: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 19.5s-7.5-4.3-7.5-9.6A4 4 0 0 1 12 7.7a4 4 0 0 1 7.5 2.2c0 5.3-7.5 9.6-7.5 9.6z" />
    <path d="M7.5 12h2.2l1.2-2 1.8 4 1.2-2h2.6" />
  </svg>
);

/** Análisis en cadena: eslabones. */
const Chain: Icon = (p) => (
  <svg {...base} {...p}>
    <rect x="2.8" y="9" width="9" height="6" rx="3" transform="rotate(-35 7.3 12)" />
    <rect x="12.2" y="9" width="9" height="6" rx="3" transform="rotate(-35 16.7 12)" />
    <path d="M10.4 13.6 13.6 10.4" />
  </svg>
);

/** DEAR MAN: pedir con claridad (un globo de diálogo con una flecha). */
const DearMan: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M4.5 5.5h15a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H10l-4.5 3.5v-3.5h-1A1.5 1.5 0 0 1 3 15V7a1.5 1.5 0 0 1 1.5-1.5z" />
    <path d="M8 11h7.5M13 8.5l2.5 2.5-2.5 2.5" />
  </svg>
);

/** GIVE y FAST: dos voces que se cuidan. */
const GiveFast: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M3.5 5h10a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5H8l-3 2.5V13H3.5A1.5 1.5 0 0 1 2 11.5v-5A1.5 1.5 0 0 1 3.5 5z" />
    <path d="M18 9h2.5A1.5 1.5 0 0 1 22 10.5v5a1.5 1.5 0 0 1-1.5 1.5H19v2.5L16 17h-4.5a1.5 1.5 0 0 1-1.5-1.5V15" />
    <path d="M8.5 9.6c.5-.8 1.6-.6 1.6.3 0 .8-1.6 1.6-1.6 1.6S6.9 10.7 6.9 9.9c0-.9 1.1-1.1 1.6-.3z" />
  </svg>
);

export const SKILL_ICON: Record<string, Icon> = {
  'mente-sabia': WiseMind,
  stop: Stop,
  tarjeta: DiaryCard,
  tipp: Tipp,
  sentidos: Senses,
  'pros-contras': ProsCons,
  aceptacion: Acceptance,
  hechos: CheckFacts,
  opuesta: Opposite,
  please: Please,
  cadena: Chain,
  'dear-man': DearMan,
  'give-fast': GiveFast,
};

/** Medalla de una habilidad: anillo de cinco segmentos (nivel de dominio) e ícono. */
export function SkillMedal({ skillId, level, size = 64 }: { skillId: string; level: number; size?: number }) {
  const Icon = SKILL_ICON[skillId] ?? WiseMind;
  const r = 27;
  const circ = 2 * Math.PI * r;
  const gap = 7;
  const seg = circ / 5 - gap;
  const locked = level === 0;
  return (
    <span className="relative inline-flex shrink-0 items-center justify-center" style={{ width: size, height: size }}>
      <svg viewBox="0 0 64 64" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden>
        {Array.from({ length: 5 }, (_, i) => (
          <circle
            key={i}
            cx="32"
            cy="32"
            r={r}
            fill="none"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray={`${seg} ${circ - seg}`}
            strokeDashoffset={-i * (seg + gap) - gap / 2}
            className="stroke-stone-200"
          />
        ))}
        {Array.from({ length: level }, (_, i) => (
          <m.circle
            key={`l${i}`}
            cx="32"
            cy="32"
            r={r}
            fill="none"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="stroke-sage-600"
            strokeDashoffset={-i * (seg + gap) - gap / 2}
            initial={{ strokeDasharray: `0 ${circ}` }}
            animate={{ strokeDasharray: `${seg} ${circ - seg}` }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: EASE_OUT }}
          />
        ))}
      </svg>
      <span
        className={`flex items-center justify-center rounded-full ${locked ? 'bg-stone-100 text-stone-400' : 'bg-sage-50 text-sage-700 shadow-soft'}`}
        style={{ width: size * 0.66, height: size * 0.66 }}
      >
        <Icon width={size * 0.36} height={size * 0.36} />
      </span>
    </span>
  );
}
