'use client';

import { m } from 'motion/react';
import type { StoryScene as Scene } from '@/domain/stories';

/**
 * Ilustraciones de los cuentos: escenarios simples, dibujados en SVG con los colores de la
 * sección para chicos (funcionan en claro y en oscuro). Decorativas: el texto cuenta todo.
 */
export function StoryScene({ scene, className = '' }: { scene: Scene; className?: string }) {
  return (
    <svg viewBox="0 0 400 220" className={`block h-auto w-full ${className}`} aria-hidden preserveAspectRatio="xMidYMid slice">
      <Sky scene={scene} />
      {SCENES[scene]}
    </svg>
  );
}

const NIGHT: Scene[] = ['noche'];
const GREY: Scene[] = ['lluvia', 'invierno'];

function Sky({ scene }: { scene: Scene }) {
  const night = NIGHT.includes(scene);
  const grey = GREY.includes(scene);
  return (
    <>
      <rect width="400" height="220" className={night ? 'fill-kid-ink' : grey ? 'fill-kid-tint-lavender' : 'fill-kid-tint-sky'} opacity={night ? 0.92 : 1} />
      {!night && !grey && (
        <m.circle cx="335" cy="48" r="24" className="fill-kid-paint-sun" animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 6, repeat: Infinity }} style={{ originX: '335px', originY: '48px' }} />
      )}
      {night && (
        <>
          <circle cx="320" cy="50" r="20" className="fill-kid-paint-sun" />
          <circle cx="330" cy="44" r="18" className="fill-kid-ink" opacity="0.92" />
          {[
            [60, 40],
            [120, 70],
            [200, 30],
            [250, 80],
            [380, 100],
            [30, 110],
          ].map(([x, y], i) => (
            <m.circle key={i} cx={x} cy={y} r="2.2" className="fill-kid-paint-sun" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 3 + i * 0.4, repeat: Infinity }} />
          ))}
        </>
      )}
      {!night && <Cloud x={50} y={40} />}
      {!night && <Cloud x={190} y={62} small />}
    </>
  );
}

function Cloud({ x, y, small = false }: { x: number; y: number; small?: boolean }) {
  const s = small ? 0.7 : 1;
  return (
    <m.g animate={{ x: [0, 12, 0] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}>
      <path
        transform={`translate(${x} ${y}) scale(${s})`}
        d="M0 20 a14 14 0 0 1 24 -10 a16 16 0 0 1 30 2 a12 12 0 0 1 4 24 h-50 a10 10 0 0 1 -8 -16Z"
        className="fill-kid-surface"
        opacity="0.95"
      />
    </m.g>
  );
}

const Hills = ({ tone = 'leaf' }: { tone?: 'leaf' | 'mint' }) => (
  <>
    <path d="M0 170 C80 140 170 150 250 162 S360 176 400 166 V220 H0Z" className={tone === 'leaf' ? 'fill-kid-paint-leaf' : 'fill-kid-paint-mint'} opacity="0.55" />
    <path d="M0 190 C110 172 230 178 400 186 V220 H0Z" className={tone === 'leaf' ? 'fill-kid-paint-leaf' : 'fill-kid-paint-mint'} />
  </>
);

const Tree = ({ x, y = 182, s = 1 }: { x: number; y?: number; s?: number }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <rect x="-5" y="-34" width="10" height="36" rx="3" className="fill-kid-paint-orange" />
    <circle cx="0" cy="-48" r="24" className="fill-kid-paint-leaf" />
    <circle cx="-14" cy="-38" r="14" className="fill-kid-paint-mint" />
  </g>
);

const House = ({ x, y = 188 }: { x: number; y?: number }) => (
  <g transform={`translate(${x} ${y})`}>
    <rect x="-40" y="-56" width="80" height="56" rx="4" className="fill-kid-tint-sun" />
    <path d="M-50 -54 L0 -92 L50 -54Z" className="fill-kid-paint-coral" />
    <rect x="-10" y="-30" width="20" height="30" rx="3" className="fill-kid-paint-orange" />
    <rect x="-32" y="-46" width="16" height="14" rx="2" className="fill-kid-tint-sky" />
    <rect x="16" y="-46" width="16" height="14" rx="2" className="fill-kid-tint-sky" />
  </g>
);

const Flower = ({ x, y, c }: { x: number; y: number; c: string }) => (
  <g transform={`translate(${x} ${y})`}>
    <path d="M0 0 V18" className="stroke-kid-paint-leaf" strokeWidth="3" />
    {[0, 72, 144, 216, 288].map((r) => (
      <ellipse key={r} cx="0" cy="-7" rx="4.5" ry="7" transform={`rotate(${r})`} className={c} />
    ))}
    <circle r="4" className="fill-kid-paint-sun" />
  </g>
);

const SCENES: Record<Scene, React.ReactNode> = {
  bosque: (
    <>
      <Hills />
      <Tree x={60} s={1.1} />
      <Tree x={130} y={176} s={0.8} />
      <Tree x={300} s={1.2} />
      <Tree x={360} y={178} s={0.85} />
    </>
  ),
  campo: (
    <>
      <Hills />
      <path d="M150 220 C170 196 200 186 230 182" className="stroke-kid-tint-sun" strokeWidth="14" fill="none" strokeLinecap="round" />
      <Flower x={60} y={190} c="fill-kid-paint-pink" />
      <Flower x={90} y={198} c="fill-kid-paint-lavender" />
      <Flower x={320} y={192} c="fill-kid-paint-coral" />
      <Tree x={350} y={176} s={0.7} />
    </>
  ),
  jardin: (
    <>
      <Hills />
      {[40, 80, 120, 260, 300, 340].map((x, i) => (
        <Flower key={x} x={x} y={186 + (i % 2) * 8} c={['fill-kid-paint-pink', 'fill-kid-paint-lavender', 'fill-kid-paint-coral'][i % 3]} />
      ))}
      <rect x="0" y="160" width="400" height="6" className="fill-kid-paint-orange" opacity="0.5" />
    </>
  ),
  casa: (
    <>
      <Hills />
      <House x={200} />
      <Tree x={70} />
      <Flower x={300} y={192} c="fill-kid-paint-pink" />
      <Flower x={325} y={196} c="fill-kid-paint-lavender" />
    </>
  ),
  ciudad: (
    <>
      {[
        [20, 90, 60],
        [90, 60, 50],
        [150, 110, 70],
        [230, 70, 55],
        [295, 100, 60],
        [355, 80, 50],
      ].map(([x, h, w], i) => (
        <g key={x}>
          <rect x={x} y={200 - h} width={w} height={h} rx="4" className={i % 2 ? 'fill-kid-paint-lavender' : 'fill-kid-paint-sky'} opacity="0.8" />
          {Array.from({ length: Math.floor(h / 26) }, (_, r) => (
            <rect key={r} x={x + 10} y={210 - h + r * 26} width={w - 20} height="8" rx="2" className="fill-kid-tint-sun" />
          ))}
        </g>
      ))}
      <rect x="0" y="200" width="400" height="20" className="fill-kid-soft" opacity="0.5" />
    </>
  ),
  escuela: (
    <>
      <Hills tone="mint" />
      <g transform="translate(200 190)">
        <rect x="-80" y="-70" width="160" height="70" rx="4" className="fill-kid-tint-coral" />
        <path d="M-90 -68 H90 L70 -96 H-70Z" className="fill-kid-paint-coral" />
        <rect x="-12" y="-34" width="24" height="34" rx="3" className="fill-kid-paint-orange" />
        {[-60, -36, 24, 48].map((x) => (
          <rect key={x} x={x} y="-58" width="16" height="16" rx="2" className="fill-kid-tint-sky" />
        ))}
        <path d="M0 -96 V-120" className="stroke-kid-soft" strokeWidth="2" />
        <path d="M0 -120 h20 l-6 6 l6 6 h-20Z" className="fill-kid-paint-sky" />
      </g>
    </>
  ),
  mar: (
    <>
      <path d="M0 140 H400 V220 H0Z" className="fill-kid-paint-sky" />
      {[150, 168, 186].map((y, i) => (
        <m.path
          key={y}
          d={`M-20 ${y} q25 -10 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0`}
          className="stroke-kid-tint-sky"
          strokeWidth="3"
          fill="none"
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      <path d="M260 196 C300 180 360 180 400 190 V220 H240Z" className="fill-kid-tint-sun" />
      <g transform="translate(110 132)">
        <path d="M-30 0 H30 L20 14 H-20Z" className="fill-kid-paint-coral" />
        <path d="M0 0 V-40 L24 -6Z" className="fill-kid-surface" />
      </g>
    </>
  ),
  montana: (
    <>
      <path d="M0 200 L90 80 L150 150 L230 50 L330 160 L400 110 V220 H0Z" className="fill-kid-paint-lavender" opacity="0.75" />
      <path d="M230 50 L210 76 L230 70 L250 78Z" className="fill-kid-surface" />
      <path d="M90 80 L76 98 L92 92 L104 98Z" className="fill-kid-surface" />
      <path d="M0 196 C120 180 260 186 400 194 V220 H0Z" className="fill-kid-paint-leaf" />
    </>
  ),
  cielo: (
    <>
      <Cloud x={260} y={120} />
      <Cloud x={20} y={140} small />
      <m.g animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity }}>
        <path d="M200 120 c-10 -6 -22 -2 -26 6 c10 -2 18 0 26 6 c8 -6 16 -8 26 -6 c-4 -8 -16 -12 -26 -6Z" className="fill-kid-ink" opacity="0.6" />
      </m.g>
      <path d="M0 206 C130 196 270 200 400 208 V220 H0Z" className="fill-kid-paint-leaf" opacity="0.6" />
    </>
  ),
  noche: (
    <>
      <path d="M0 186 C110 170 250 176 400 184 V220 H0Z" className="fill-kid-paint-lavender" opacity="0.5" />
      <House x={120} y={196} />
      <rect x="88" y="150" width="16" height="14" rx="2" className="fill-kid-paint-sun" />
      <Tree x={300} y={190} s={0.9} />
    </>
  ),
  lluvia: (
    <>
      <Cloud x={60} y={30} />
      <Cloud x={230} y={40} />
      {Array.from({ length: 22 }, (_, i) => (
        <m.path
          key={i}
          d={`M${20 + i * 17} ${80 + (i % 4) * 10} l-4 12`}
          className="stroke-kid-paint-sky"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={{ y: [0, 40], opacity: [1, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: (i % 6) * 0.2 }}
        />
      ))}
      <Hills tone="mint" />
    </>
  ),
  invierno: (
    <>
      <path d="M0 176 C100 160 250 168 400 176 V220 H0Z" className="fill-kid-surface" />
      <g transform="translate(90 182) scale(1.1)">
        <rect x="-4" y="-30" width="8" height="32" rx="3" className="fill-kid-paint-orange" />
        <path d="M0 -80 L26 -24 H-26Z" className="fill-kid-paint-mint" />
        <path d="M0 -80 L12 -54 H-12Z" className="fill-kid-surface" />
      </g>
      <g transform="translate(290 186)">
        <circle r="18" className="fill-kid-surface stroke-kid-line" strokeWidth="2" />
        <circle cy="-28" r="12" className="fill-kid-surface stroke-kid-line" strokeWidth="2" />
        <path d="M0 -28 l10 2 l-10 2Z" className="fill-kid-paint-orange" />
      </g>
      {Array.from({ length: 16 }, (_, i) => (
        <m.circle
          key={i}
          cx={15 + i * 24}
          cy={30 + (i % 5) * 18}
          r="2.5"
          className="fill-kid-surface"
          animate={{ y: [0, 30], opacity: [1, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, delay: (i % 4) * 0.6 }}
        />
      ))}
    </>
  ),
};
