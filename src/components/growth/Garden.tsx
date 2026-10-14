'use client';

import { m } from 'motion/react';
import { useId, useMemo } from 'react';
import { hasMilestone, SPECIES, type Garden as GardenData, type Plant } from '@/domain/growth';
import { EASE_OUT } from '@/lib/motion';

/**
 * Jardín ilustrado (SVG): crece con la práctica y nunca se marchita.
 * Cada familia de práctica es una especie: helechos (atención), flores (compasión y
 * cualidades) y árboles (comprensión). Los hitos añaden sol, mariposas, un arroyo,
 * pájaros, un banco y faroles; cada entrada del diario, una luciérnaga.
 * Colores: tokens --garden-* (claro y oscuro en globals.css). Movimiento: lento y
 * opcional; con «reducir movimiento» del sistema sólo quedan los fundidos.
 */

const c = (token: string, alpha?: number) => (alpha === undefined ? `rgb(var(--garden-${token}))` : `rgb(var(--garden-${token}) / ${alpha})`);

const W = 800;
const H = 400;
const HORIZON = 240;
const GROUND_DEPTH = 140;

const PETALS = ['petal-a', 'petal-b', 'petal-c'] as const;

function rng(seed: number) {
  let t = Math.floor(seed * 1e9) >>> 0;
  return () => {
    t = (t * 1664525 + 1013904223) >>> 0;
    return t / 4294967296;
  };
}

// ---------------------------------------------------------------- especies

/** Punto de una curva cuadrática (para colocar foliolos sobre la fronda). */
function quad(t: number, p0: [number, number], p1: [number, number], p2: [number, number]): [number, number] {
  const u = 1 - t;
  return [u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0], u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1]];
}

function Fern({ plant, delay }: { plant: Plant; delay: number }) {
  const fronds = plant.stage;
  const h = 26 + plant.stage * 9;
  const r = rng(plant.seed);
  return (
    <g>
      {Array.from({ length: fronds }, (_, k) => {
        const spread = fronds === 1 ? 0 : -0.9 + (1.8 * k) / (fronds - 1);
        const angle = spread + (r() - 0.5) * 0.15;
        const len = h * (0.75 + 0.25 * Math.cos(spread));
        const p2: [number, number] = [Math.sin(angle) * len * 0.75, -Math.cos(angle) * len];
        const p1: [number, number] = [p2[0] * 0.2, p2[1] * 0.75];
        const leaflets = 3 + plant.stage;
        return (
          <g key={k}>
            <m.path
              d={`M0,0 Q${p1[0]},${p1[1]} ${p2[0]},${p2[1]}`}
              fill="none"
              stroke={c('stem')}
              strokeWidth={1.4}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, delay: delay + k * 0.08, ease: EASE_OUT }}
            />
            {Array.from({ length: leaflets }, (_, j) => {
              const t = 0.25 + (0.7 * j) / leaflets;
              const [x, y] = quad(t, [0, 0], p1, p2);
              const [x2, y2] = quad(Math.min(1, t + 0.02), [0, 0], p1, p2);
              const tangent = (Math.atan2(y2 - y, x2 - x) * 180) / Math.PI;
              const size = 6.5 * (1 - t * 0.55);
              return [-1, 1].map((side) => (
                <m.ellipse
                  key={`${j}${side}`}
                  cx={x}
                  cy={y}
                  rx={size}
                  ry={size * 0.36}
                  fill={j % 2 ? c('leaf') : c('leaf-deep', 0.9)}
                  transform={`rotate(${tangent + side * 55} ${x} ${y}) translate(${size * 0.85} 0)`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: delay + 0.4 + k * 0.08 + j * 0.04 }}
                />
              ));
            })}
          </g>
        );
      })}
    </g>
  );
}

function Flower({ plant, delay }: { plant: Plant; delay: number }) {
  const h = 14 + plant.stage * 9;
  const sway = (plant.seed - 0.5) * 8;
  const petal = PETALS[Math.floor(plant.seed * 3) % 3];
  const stem = `M0,0 C${sway},${-h / 3} ${-sway},${(-2 * h) / 3} 0,${-h}`;
  return (
    <g>
      <m.path d={stem} fill="none" stroke={c('stem')} strokeWidth={1.6} strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9, delay, ease: EASE_OUT }} />
      {plant.stage >= 2 &&
        [-1, 1].map((side) => (
          <g key={side} transform={`translate(0 ${-h * (side < 0 ? 0.3 : 0.42)}) scale(${side} 1) rotate(-38)`}>
            <m.path
              d="M0,0 C3,-3.6 8.5,-3.8 12,0 C8.5,2.6 3,2.4 0,0Z"
              fill={side < 0 ? c('leaf') : c('leaf-deep', 0.9)}
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ originX: '0px', originY: '0px' }}
              transition={{ duration: 0.6, delay: delay + 0.5 }}
            />
            <path d="M1,0 L9,-0.4" stroke={c('sky-bottom', 0.35)} strokeWidth={0.6} strokeLinecap="round" />
          </g>
        ))}
      {plant.stage === 1 && (
        <g>
          <ellipse cx={-3} cy={-h} rx={3.4} ry={1.6} fill={c('leaf')} transform={`rotate(-30 -3 ${-h})`} />
          <ellipse cx={3} cy={-h} rx={3.4} ry={1.6} fill={c('leaf')} transform={`rotate(30 3 ${-h})`} />
        </g>
      )}
      {plant.stage === 3 && <circle cx={0} cy={-h} r={2.6} fill={c('leaf-deep')} />}
      {plant.stage === 4 && (
        <g transform={`translate(0 ${-h})`}>
          <path d="M0,2 C-4,0 -3.5,-7 0,-9 C3.5,-7 4,0 0,2Z" fill={c(petal)} />
          <path d="M0,2 C-3,1 -3.5,-3 -2.5,-4.5 L0,-1 L2.5,-4.5 C3.5,-3 3,1 0,2Z" fill={c('leaf-deep')} />
        </g>
      )}
      {plant.stage >= 5 && (
        <m.g
          transform={`translate(0 ${-h})`}
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: delay + 0.6, ease: EASE_OUT }}
        >
          {Array.from({ length: 6 }, (_, i) => (
            <ellipse key={i} cx={0} cy={-6.2} rx={3.6} ry={6.4} fill={c(petal)} opacity={0.95} transform={`rotate(${i * 60 + plant.seed * 30})`} />
          ))}
          <circle r={3.4} fill={c('glow')} />
          <circle r={1.4} fill={c('trunk', 0.6)} />
        </m.g>
      )}
    </g>
  );
}

function Tree({ plant, delay }: { plant: Plant; delay: number }) {
  const r = rng(plant.seed);
  if (plant.stage === 1) {
    return (
      <g>
        <m.path d="M0,0 C1,-6 -1,-11 0,-16" fill="none" stroke={c('trunk')} strokeWidth={1.6} strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay }} />
        <ellipse cx={-4} cy={-15} rx={4.5} ry={2.2} fill={c('leaf')} transform="rotate(-25 -4 -15)" />
        <ellipse cx={4} cy={-17} rx={4.5} ry={2.2} fill={c('leaf-deep')} transform="rotate(25 4 -17)" />
      </g>
    );
  }
  const th = 20 + plant.stage * 15;
  const w = 1.5 + plant.stage * 0.9;
  const radius = 9 + plant.stage * 5.5;
  const blobs = plant.stage + 2;
  const canopy = Array.from({ length: blobs }, (_, i) => {
    const a = (i / blobs) * Math.PI * 2 + r() * 0.6;
    const d = i === 0 ? 0 : radius * (0.45 + r() * 0.25);
    return { x: Math.cos(a) * d, y: -th - radius * 0.35 + Math.sin(a) * d * 0.7, rr: radius * (i === 0 ? 0.95 : 0.6 + r() * 0.2), deep: i % 2 === 1 };
  });
  return (
    <g>
      <m.path
        d={`M${-w},0 C${-w * 0.7},${-th * 0.4} ${-w * 0.45},${-th * 0.7} ${-w * 0.35},${-th} L${w * 0.35},${-th} C${w * 0.45},${-th * 0.7} ${w * 0.7},${-th * 0.4} ${w},0Z`}
        fill={c('trunk')}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        style={{ originY: 1 }}
        transition={{ duration: 0.9, delay, ease: EASE_OUT }}
      />
      {plant.stage >= 3 &&
        [-1, 1].map((side) => (
          <path key={side} d={`M0,${-th * 0.6} Q${side * radius * 0.35},${-th * 0.75} ${side * radius * 0.55},${-th * 0.95}`} fill="none" stroke={c('trunk')} strokeWidth={w * 0.45} strokeLinecap="round" />
        ))}
      <m.g initial={{ scale: 0.3, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ originY: 1 }} transition={{ duration: 1, delay: delay + 0.4, ease: EASE_OUT }}>
        {canopy.map((b, i) => (
          <circle key={i} cx={b.x} cy={b.y} r={b.rr} fill={b.deep ? c('leaf-deep', 0.92) : c('leaf', 0.95)} />
        ))}
        {/* Luz suave arriba a la izquierda: da volumen a la copa. */}
        <circle cx={canopy[0].x - radius * 0.3} cy={canopy[0].y - radius * 0.35} r={radius * 0.45} fill={c('sky-bottom', 0.18)} />
        {plant.stage >= 5 &&
          Array.from({ length: 7 }, (_, i) => {
            const b = canopy[i % canopy.length];
            return <circle key={`f${i}`} cx={b.x + (r() - 0.5) * b.rr} cy={b.y + (r() - 0.5) * b.rr} r={1.8} fill={c(PETALS[i % 3])} />;
          })}
      </m.g>
    </g>
  );
}

const SPECIES_COMPONENT = { attentional: Fern, constructive: Flower, deconstructive: Tree } as const;

/** Mata de hierba: textura del suelo. Aparece más hierba a medida que se practica. */
function Tuft({ x, y, s, seed }: { x: number; y: number; s: number; seed: number }) {
  const r = rng(seed);
  const blades = 3 + Math.floor(r() * 3);
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {Array.from({ length: blades }, (_, i) => {
        const a = -0.6 + (1.2 * i) / Math.max(1, blades - 1) + (r() - 0.5) * 0.2;
        const h = 7 + r() * 6;
        return (
          <path
            key={i}
            d={`M${i - blades / 2},0 Q${Math.sin(a) * h * 0.3},${-h * 0.6} ${Math.sin(a) * h * 0.8},${-h}`}
            fill="none"
            stroke={i % 2 ? c('leaf-deep', 0.55) : c('leaf', 0.7)}
            strokeWidth={1.1}
            strokeLinecap="round"
          />
        );
      })}
    </g>
  );
}

// ---------------------------------------------------------------- escenografía

function Butterfly({ path, delay, wing }: { path: { x: number[]; y: number[] }; delay: number; wing: (typeof PETALS)[number] }) {
  return (
    <m.g initial={{ x: path.x[0], y: path.y[0], opacity: 0 }} animate={{ x: path.x, y: path.y, opacity: 1 }} transition={{ duration: 18, delay, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}>
      <m.g animate={{ scaleX: [1, 0.35, 1] }} transition={{ duration: 0.45, repeat: Infinity, ease: 'easeInOut' }}>
        <ellipse cx={-3.4} cy={-1} rx={3.6} ry={4.6} fill={c(wing)} />
        <ellipse cx={3.4} cy={-1} rx={3.6} ry={4.6} fill={c(wing)} />
        <ellipse cx={-2.6} cy={3} rx={2.2} ry={2.8} fill={c(wing, 0.8)} />
        <ellipse cx={2.6} cy={3} rx={2.2} ry={2.8} fill={c(wing, 0.8)} />
      </m.g>
      <rect x={-0.6} y={-4} width={1.2} height={9} rx={0.6} fill={c('trunk')} />
    </m.g>
  );
}

function Bird({ y, delay, scale }: { y: number; delay: number; scale: number }) {
  return (
    <m.g initial={{ x: -40, y }} animate={{ x: W + 40, y: [y, y - 12, y + 4, y] }} transition={{ duration: 46, delay, repeat: Infinity, ease: 'linear' }}>
      <m.path
        d="M-9,0 Q-4.5,-5 0,0 Q4.5,-5 9,0"
        fill="none"
        stroke={c('trunk', 0.75)}
        strokeWidth={1.4 / scale}
        strokeLinecap="round"
        transform={`scale(${scale})`}
        animate={{ d: ['M-9,0 Q-4.5,-5 0,0 Q4.5,-5 9,0', 'M-9,-2 Q-4.5,2 0,0 Q4.5,2 9,-2', 'M-9,0 Q-4.5,-5 0,0 Q4.5,-5 9,0'] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
      />
    </m.g>
  );
}

function Lantern({ x, y, glowId, delay }: { x: number; y: number; glowId: string; delay: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <m.circle cy={-34} r={18} fill={`url(#${glowId})`} animate={{ opacity: [0.55, 0.9, 0.55] }} transition={{ duration: 5, delay, repeat: Infinity, ease: 'easeInOut' }} />
      <path d="M0,0 L0,-28" stroke={c('trunk')} strokeWidth={1.6} strokeLinecap="round" />
      <path d="M-4.5,-28 L4.5,-28 L3.5,-39 L-3.5,-39Z" fill={c('glow')} stroke={c('trunk')} strokeWidth={1} strokeLinejoin="round" />
      <path d="M-5.5,-39 L5.5,-39 L0,-44Z" fill={c('trunk')} />
    </g>
  );
}

function Bench({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`} fill={c('trunk')}>
      <rect x={-22} y={-14} width={44} height={3} rx={1.2} />
      <rect x={-22} y={-24} width={44} height={2.4} rx={1.2} opacity={0.85} />
      <rect x={-22} y={-20} width={44} height={2.4} rx={1.2} opacity={0.85} />
      <rect x={-19} y={-24} width={2.4} height={24} rx={1} />
      <rect x={16.6} y={-24} width={2.4} height={24} rx={1} />
    </g>
  );
}

// ---------------------------------------------------------------- jardín

export function Garden({ garden, compact = false, className = '' }: { garden: GardenData; compact?: boolean; className?: string }) {
  const uid = useId().replace(/:/g, '');
  const ids = { sky: `sky${uid}`, sun: `sun${uid}`, glow: `glow${uid}`, fly: `fly${uid}`, near: `near${uid}` };

  const counts = useMemo(() => {
    const out = { attentional: 0, constructive: 0, deconstructive: 0 };
    for (const p of garden.plants) out[p.family] += 1;
    return out;
  }, [garden.plants]);

  const fireflies = useMemo(() => {
    const r = rng(0.4242);
    return Array.from({ length: garden.fireflies }, () => ({ x: 30 + r() * (W - 60), y: 150 + r() * 170, d: r() * 6, s: 0.7 + r() * 0.6 }));
  }, [garden.fireflies]);

  // Hierba: una base fija y más matas con la práctica (hasta 40).
  const tufts = useMemo(() => {
    const r = rng(0.1313);
    const n = 16 + Math.min(40, Math.floor(garden.total / 2));
    return Array.from({ length: n }, (_, i) => {
      const depth = r();
      return { id: i, x: r() * W, y: HORIZON + 14 + depth * (GROUND_DEPTH + 6), s: 0.6 + depth * 0.7, seed: r() };
    }).sort((a, b) => a.y - b.y);
  }, [garden.total]);

  const label =
    garden.total === 0
      ? 'Tu jardín todavía está por sembrar. La primera práctica plantará una semilla.'
      : `Tu jardín: ${counts.attentional} ${counts.attentional === 1 ? SPECIES.attentional.name : SPECIES.attentional.plural}, ${counts.constructive} ${
          counts.constructive === 1 ? SPECIES.constructive.name : SPECIES.constructive.plural
        } y ${counts.deconstructive} ${counts.deconstructive === 1 ? SPECIES.deconstructive.name : SPECIES.deconstructive.plural}, de ${garden.total} prácticas.${
          garden.reached.length ? ` Hitos: ${garden.reached.map((x) => x.title.toLowerCase()).join(', ')}.` : ''
        }`;

  const has = (at: number) => hasMilestone(garden, at);

  return (
    <svg
      viewBox={compact ? `0 120 ${W} ${H - 120}` : `0 40 ${W} ${H - 40}`}
      preserveAspectRatio="xMidYMax slice"
      role="img"
      aria-label={label}
      className={`block h-full w-full ${className}`}
    >
      <defs>
        <linearGradient id={ids.sky} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={c('sky-top')} />
          <stop offset="1" stopColor={c('sky-bottom')} />
        </linearGradient>
        <radialGradient id={ids.sun}>
          <stop offset="0" stopColor={c('sun', 0.55)} />
          <stop offset="1" stopColor={c('sun', 0)} />
        </radialGradient>
        <radialGradient id={ids.glow}>
          <stop offset="0" stopColor={c('glow', 0.7)} />
          <stop offset="1" stopColor={c('glow', 0)} />
        </radialGradient>
        <radialGradient id={ids.fly}>
          <stop offset="0" stopColor={c('glow', 1)} />
          <stop offset="0.35" stopColor={c('glow', 0.55)} />
          <stop offset="1" stopColor={c('glow', 0)} />
        </radialGradient>
        <linearGradient id={ids.near} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={c('hill-near')} />
          <stop offset="1" stopColor={c('hill-mid')} />
        </linearGradient>
      </defs>

      <rect width={W} height={H} fill={`url(#${ids.sky})`} />

      {has(5) && (
        <m.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6 }}>
          <m.circle cx={662} cy={82} r={70} fill={`url(#${ids.sun})`} animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} style={{ originX: '662px', originY: '82px' }} />
          <circle cx={662} cy={82} r={24} fill={c('sun')} />
        </m.g>
      )}

      {has(50) && [0, 1].map((i) => <Bird key={i} y={96 + i * 26} delay={i * 7} scale={1 - i * 0.25} />)}

      {/* Colinas en tres planos: perspectiva atmosférica. */}
      <path d="M0,214 C110,182 220,204 330,190 C450,176 560,206 680,186 C740,177 780,190 800,186 L800,400 L0,400Z" fill={c('hill-far')} />
      {has(180) && (
        <g opacity={0.75}>
          {[70, 110, 150, 610, 650].map((x, i) => (
            <g key={x} transform={`translate(${x} ${200 - (i % 2) * 6})`}>
              <rect x={-2} y={-26} width={4} height={26} fill={c('trunk', 0.7)} />
              <circle cy={-34} r={16 - (i % 2) * 3} fill={c('leaf-deep', 0.55)} />
            </g>
          ))}
        </g>
      )}
      <path d="M0,250 C140,226 260,246 400,232 C540,219 660,248 800,236 L800,400 L0,400Z" fill={c('hill-mid')} />
      <path d="M0,300 C160,280 300,297 420,288 C560,279 680,301 800,290 L800,400 L0,400Z" fill={`url(#${ids.near})`} />

      {has(25) && (
        <g>
          <path d="M-10,352 C110,326 230,366 370,340 C510,314 610,356 810,322" fill="none" stroke={c('water')} strokeWidth={11} strokeLinecap="round" opacity={0.85} />
          <m.path
            d="M-10,352 C110,326 230,366 370,340 C510,314 610,356 810,322"
            fill="none"
            stroke={c('sky-bottom', 0.7)}
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeDasharray="10 26"
            animate={{ strokeDashoffset: [0, -72] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          />
        </g>
      )}

      {tufts.map((t) => (
        <Tuft key={t.id} x={t.x} y={t.y} s={t.s} seed={t.seed} />
      ))}

      {garden.total === 0 && (
        <g transform={`translate(${W / 2} 318)`}>
          <ellipse rx={30} ry={7} fill={c('trunk', 0.35)} />
          <m.ellipse cy={-3} rx={4} ry={3} fill={c('trunk')} animate={{ y: [0, -1.5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
        </g>
      )}

      {garden.plants.map((p, i) => {
        const Species = SPECIES_COMPONENT[p.family];
        const x = p.x * W;
        const y = HORIZON + 8 + p.depth * GROUND_DEPTH;
        const scale = 0.55 + p.depth * 0.6;
        return (
          <g key={p.id} transform={`translate(${x} ${y}) scale(${scale})`}>
            <ellipse cx={0} cy={1} rx={10 + p.stage * 2} ry={2.4} fill={c('leaf-deep', 0.18)} />
            <m.g
              animate={{ rotate: [-1.2, 1.2, -1.2] }}
              transition={{ duration: 6 + p.seed * 4, delay: p.seed * 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ originX: '0px', originY: '0px' }}
            >
              <Species plant={p} delay={0.15 + Math.min(i, 20) * 0.05} />
            </m.g>
          </g>
        );
      })}

      {has(80) && <Bench x={628} y={338} />}
      {has(120) && (
        <>
          <Lantern x={96} y={334} glowId={ids.glow} delay={0} />
          <Lantern x={720} y={318} glowId={ids.glow} delay={1.6} />
        </>
      )}

      {has(12) &&
        [
          { x: [180, 260, 320, 240], y: [230, 200, 250, 220] },
          { x: [520, 460, 560, 600], y: [260, 220, 210, 250] },
          { x: [360, 420, 380, 300], y: [300, 270, 240, 280] },
        ]
          .slice(0, garden.total >= 40 ? 3 : 2)
          .map((path, i) => <Butterfly key={i} path={path} delay={i * 2.5} wing={PETALS[(i + 2) % 3]} />)}

      {fireflies.map((f, i) => (
        <m.circle
          key={i}
          cx={f.x}
          cy={f.y}
          r={5 * f.s}
          fill={`url(#${ids.fly})`}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.15, 0.95, 0.15], y: [0, -6, 0] }}
          transition={{ duration: 4 + f.d, delay: f.d, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </svg>
  );
}
