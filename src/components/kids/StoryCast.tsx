'use client';

import { m } from 'motion/react';
import type { MascotMood } from '@/domain/kids';
import type { CastMember, Skin, Species } from '@/domain/story-cast';

/**
 * Personajes de los cuentos en SVG. Cada uno se dibuja con los pies en (0, 0) y crece hacia
 * arriba; la expresión cambia con el ánimo de la página.
 */

const SKIN: Record<Skin, string> = { clara: '#f6d5b8', media: '#e0ad84', morena: '#b97c55', oscura: '#7a4a30' };
const INK = '#2b2740';

/** Cara: ojos, boca y mejillas según el ánimo. */
function Face({ mood = 'feliz', r = 14, cheeks = true }: { mood?: MascotMood; r?: number; cheeks?: boolean }) {
  const ex = r * 0.38;
  const ey = -r * 0.08;
  const eye = (x: number) =>
    mood === 'calma' ? (
      <path d={`M${x - r * 0.14} ${ey} q${r * 0.14} ${r * 0.12} ${r * 0.28} 0`} stroke={INK} strokeWidth={r * 0.09} fill="none" strokeLinecap="round" />
    ) : (
      <circle cx={x} cy={ey} r={mood === 'sorpresa' ? r * 0.14 : r * 0.11} fill={INK} />
    );
  const mouth = {
    feliz: <path d={`M${-r * 0.28} ${r * 0.28} q${r * 0.28} ${r * 0.26} ${r * 0.56} 0`} stroke={INK} strokeWidth={r * 0.09} fill="none" strokeLinecap="round" />,
    orgullo: <path d={`M${-r * 0.34} ${r * 0.24} q${r * 0.34} ${r * 0.4} ${r * 0.68} 0Z`} fill={INK} />,
    calma: <path d={`M${-r * 0.2} ${r * 0.32} q${r * 0.2} ${r * 0.12} ${r * 0.4} 0`} stroke={INK} strokeWidth={r * 0.08} fill="none" strokeLinecap="round" />,
    piensa: <path d={`M${-r * 0.18} ${r * 0.36} h${r * 0.36}`} stroke={INK} strokeWidth={r * 0.08} strokeLinecap="round" />,
    sorpresa: <ellipse cx="0" cy={r * 0.36} rx={r * 0.13} ry={r * 0.17} fill={INK} />,
    valiente: <path d={`M${-r * 0.24} ${r * 0.3} q${r * 0.24} ${r * 0.16} ${r * 0.48} 0`} stroke={INK} strokeWidth={r * 0.1} fill="none" strokeLinecap="round" />,
  }[mood];
  return (
    <g>
      {eye(-ex)}
      {eye(ex)}
      {mood === 'piensa' && <path d={`M${ex - r * 0.18} ${ey - r * 0.3} l${r * 0.32} ${-r * 0.08}`} stroke={INK} strokeWidth={r * 0.07} strokeLinecap="round" />}
      {mood === 'valiente' && (
        <path d={`M${-ex - r * 0.18} ${ey - r * 0.32} l${r * 0.3} ${r * 0.1} M${ex + r * 0.18} ${ey - r * 0.32} l${-r * 0.3} ${r * 0.1}`} stroke={INK} strokeWidth={r * 0.08} strokeLinecap="round" />
      )}
      {mouth}
      {cheeks && (
        <>
          <circle cx={-ex - r * 0.18} cy={r * 0.2} r={r * 0.13} fill="#f4978e" opacity="0.55" />
          <circle cx={ex + r * 0.18} cy={r * 0.2} r={r * 0.13} fill="#f4978e" opacity="0.55" />
        </>
      )}
    </g>
  );
}

const HEIGHT = { bebe: 52, nino: 82, teen: 100, adulto: 112, mayor: 104 } as const;

function Person({ c, mood }: { c: Extract<CastMember, { kind: 'persona' }>; mood?: MascotMood }) {
  const h = HEIGHT[c.age];
  const head = c.age === 'bebe' ? 15 : c.age === 'nino' ? 15 : 14;
  const skin = SKIN[c.skin];
  const hy = -h + head; // centro de la cabeza
  const bodyTop = hy + head - 2;
  const legs = c.age === 'bebe' ? 0 : h * 0.3;
  const hair = c.hairColor;
  const shirt = `fill-kid-paint-${c.shirt}`;
  return (
    <g>
      {/* piernas */}
      {legs > 0 && (
        <>
          <rect x={-10} y={-legs} width={8} height={legs} rx={4} fill="#4a4e6e" />
          <rect x={2} y={-legs} width={8} height={legs} rx={4} fill="#4a4e6e" />
          <ellipse cx={-6} cy={-2} rx={7} ry={4} fill={INK} />
          <ellipse cx={6} cy={-2} rx={7} ry={4} fill={INK} />
        </>
      )}
      {/* cuerpo */}
      <rect x={c.age === 'bebe' ? -15 : -14} y={bodyTop} width={c.age === 'bebe' ? 30 : 28} height={-bodyTop - legs + (c.age === 'bebe' ? 0 : 2)} rx={c.age === 'bebe' ? 14 : 10} className={shirt} />
      {/* brazos */}
      <rect x={-21} y={bodyTop + 4} width={8} height={h * 0.3} rx={4} fill={skin} />
      <rect x={13} y={bodyTop + 4} width={8} height={h * 0.3} rx={4} fill={skin} />
      {/* pelo detrás */}
      {c.hair === 'largo' && <rect x={-head - 3} y={hy - head * 0.3} width={head * 2 + 6} height={head * 2.2} rx={head * 0.7} fill={hair} />}
      {c.hair === 'rodete' && <circle cx={0} cy={hy - head - 3} r={7} fill={hair} />}
      {c.hair === 'colitas' && (
        <>
          <circle cx={-head - 4} cy={hy - 2} r={6} fill={hair} />
          <circle cx={head + 4} cy={hy - 2} r={6} fill={hair} />
        </>
      )}
      {c.hair === 'cola' && <path d={`M${head - 2} ${hy - head * 0.6} q${head} ${head * 0.2} ${head * 0.8} ${head * 1.4}`} stroke={hair} strokeWidth={6} fill="none" strokeLinecap="round" />}
      {/* cabeza */}
      <circle cx={0} cy={hy} r={head} fill={skin} />
      {/* pelo arriba */}
      {c.hair !== 'pelado' && c.hair !== 'rulos' && <path d={`M${-head} ${hy - 2} a${head} ${head} 0 0 1 ${head * 2} 0 q${-head} ${-head * 0.55} ${-head * 2} 0Z`} fill={hair} />}
      {c.hair === 'rulos' &&
        [-0.8, -0.4, 0, 0.4, 0.8].map((t) => <circle key={t} cx={t * head} cy={hy - head * 0.75 + Math.abs(t) * head * 0.3} r={head * 0.42} fill={hair} />)}
      {c.hair === 'pelado' && c.age === 'mayor' && (
        <>
          <path d={`M${-head} ${hy - 2} q-2 ${-head * 0.5} ${head * 0.25} ${-head * 0.7}`} stroke={hair} strokeWidth={4} fill="none" strokeLinecap="round" />
          <path d={`M${head} ${hy - 2} q2 ${-head * 0.5} ${-head * 0.25} ${-head * 0.7}`} stroke={hair} strokeWidth={4} fill="none" strokeLinecap="round" />
        </>
      )}
      <g transform={`translate(0 ${hy + 2})`}>
        <Face mood={mood} r={head * 0.95} />
      </g>
      {c.extra === 'anteojos' && (
        <g stroke={INK} strokeWidth={1.6} fill="none">
          <circle cx={-5.5} cy={hy + 1} r={4} />
          <circle cx={5.5} cy={hy + 1} r={4} />
          <path d={`M-1.5 ${hy + 1} h3`} />
        </g>
      )}
      {c.extra === 'barba' && <path d={`M${-head * 0.8} ${hy + 4} q${head * 0.8} ${head * 1.6} ${head * 1.6} 0 q${-head * 0.8} ${head * 0.5} ${-head * 1.6} 0Z`} fill={hair} />}
      {c.extra === 'corona' && <path d={`M${-head * 0.8} ${hy - head + 2} l2 -12 l6 7 l${head * 0.8 - 8} -10 l${head * 0.8 - 8} 10 l6 -7 l2 12Z`} className="fill-kid-paint-sun" />}
      {c.extra === 'gorro' && <path d={`M${-head - 1} ${hy - 3} a${head + 1} ${head} 0 0 1 ${head * 2 + 2} 0Z`} className="fill-kid-paint-coral" />}
      {c.extra === 'auriculares' && (
        <g>
          <path d={`M${-head} ${hy} a${head} ${head + 2} 0 0 1 ${head * 2} 0`} stroke={INK} strokeWidth={3} fill="none" />
          <rect x={-head - 4} y={hy - 4} width={6} height={10} rx={3} fill={INK} />
          <rect x={head - 2} y={hy - 4} width={6} height={10} rx={3} fill={INK} />
        </g>
      )}
    </g>
  );
}

function Animal({ species, color = '#c9a27a', mood }: { species: Species; color?: string; mood?: MascotMood }) {
  const face = (r: number, x = 0, y = 0, cheeks = true) => (
    <g transform={`translate(${x} ${y})`}>
      <Face mood={mood} r={r} cheeks={cheeks} />
    </g>
  );
  switch (species) {
    case 'pez':
      return (
        <g transform="translate(0 -40)">
          <path d="M22 0 l18 -14 v28Z" fill={color} />
          <ellipse cx="0" cy="0" rx="26" ry="18" fill={color} />
          <circle cx="-30" cy="-14" r="4" fill="#bfe3f5" opacity="0.8" />
          <circle cx="-38" cy="-26" r="3" fill="#bfe3f5" opacity="0.8" />
          {face(10, -8, 0)}
        </g>
      );
    case 'perro':
    case 'gato':
    case 'oso':
    case 'raton':
    case 'zorra':
    case 'liebre':
    case 'leon': {
      const ears =
        species === 'liebre' ? (
          <>
            <ellipse cx="-8" cy="-78" rx="6" ry="20" fill={color} />
            <ellipse cx="8" cy="-78" rx="6" ry="20" fill={color} />
          </>
        ) : species === 'perro' ? (
          <>
            <ellipse cx="-20" cy="-50" rx="8" ry="16" fill="#6b4a33" transform="rotate(20 -20 -50)" />
            <ellipse cx="20" cy="-50" rx="8" ry="16" fill="#6b4a33" transform="rotate(-20 20 -50)" />
          </>
        ) : species === 'gato' || species === 'zorra' ? (
          <>
            <path d="M-20 -60 l4 -18 l12 12Z" fill={color} />
            <path d="M20 -60 l-4 -18 l-12 12Z" fill={color} />
          </>
        ) : species === 'raton' ? (
          <>
            <circle cx="-17" cy="-64" r="10" fill={color} />
            <circle cx="17" cy="-64" r="10" fill={color} />
          </>
        ) : (
          <>
            <circle cx="-16" cy="-66" r="7" fill={color} />
            <circle cx="16" cy="-66" r="7" fill={color} />
          </>
        );
      const scale = species === 'raton' ? 0.55 : species === 'leon' ? 1.1 : 1;
      return (
        <g transform={`scale(${scale})`}>
          {species === 'leon' && <circle cx="0" cy="-50" r="30" fill="#b9652e" />}
          {species === 'zorra' && <path d="M18 -14 q34 -6 30 -34 q-14 18 -30 14Z" fill={color} />}
          {species === 'gato' && <path d="M18 -10 q26 -10 18 -40" stroke={color} strokeWidth="6" fill="none" strokeLinecap="round" />}
          <ellipse cx="0" cy="-16" rx="22" ry="18" fill={color} />
          {ears}
          <circle cx="0" cy="-50" r="21" fill={color} />
          {(species === 'perro' || species === 'oso' || species === 'leon' || species === 'zorra') && <ellipse cx="0" cy="-42" rx="10" ry="7" fill="#f3e3cf" />}
          <ellipse cx="0" cy="-45" rx="3.5" ry="2.5" fill={INK} />
          {face(13, 0, -52, species !== 'oso')}
        </g>
      );
    }
    case 'tortuga':
      return (
        <g>
          <ellipse cx="34" cy="-18" rx="11" ry="10" fill="#9fcf8f" />
          <path d="M-34 -6 a34 30 0 0 1 68 0Z" fill={color} />
          <path d="M-20 -6 a20 18 0 0 1 40 0" stroke="#4e7d52" strokeWidth="3" fill="none" />
          <rect x="-26" y="-8" width="9" height="8" rx="3" fill="#9fcf8f" />
          <rect x="17" y="-8" width="9" height="8" rx="3" fill="#9fcf8f" />
          {face(7, 36, -20, false)}
        </g>
      );
    case 'pato':
    case 'cisne':
    case 'pajaro':
    case 'golondrina':
    case 'gallo': {
      const big = species === 'cisne';
      return (
        <g transform={`scale(${big ? 1.2 : species === 'pajaro' || species === 'golondrina' ? 0.7 : 0.9})`}>
          {species === 'golondrina' && <path d="M-22 -24 l-22 -6 l14 14Z" fill="#2c3550" />}
          <ellipse cx="0" cy="-22" rx="26" ry="20" fill={species === 'golondrina' ? '#2c3550' : color} />
          <path d="M-6 -24 q-14 -4 -18 10 q12 0 18 -10Z" fill="#ffffff" opacity="0.35" />
          {big ? (
            <path d="M14 -30 q14 -30 -2 -52" stroke={color} strokeWidth="10" fill="none" strokeLinecap="round" />
          ) : null}
          <circle cx={big ? -2 : 14} cy={big ? -82 : -48} r={14} fill={species === 'golondrina' ? '#2c3550' : color} />
          {species === 'golondrina' && <circle cx="14" cy="-44" r="7" fill="#f4f1ea" />}
          {species === 'gallo' && <path d="M8 -62 q4 -10 8 -2 q4 -10 8 0 q4 -6 6 2Z" fill="#d9533a" />}
          <path d={big ? 'M-14 -82 l-12 4 l12 4Z' : 'M26 -48 l12 4 l-12 4Z'} fill="#f2994a" />
          {face(9, big ? -2 : 14, big ? -84 : -50, species !== 'golondrina')}
        </g>
      );
    }
    case 'burro':
      return (
        <g>
          <rect x="-30" y="-50" width="60" height="30" rx="14" fill={color} />
          {[-24, -10, 10, 24].map((x) => (
            <rect key={x} x={x - 3} y="-24" width="6" height="24" rx="3" fill={color} />
          ))}
          <ellipse cx="-24" cy="-94" rx="5" ry="16" fill={color} />
          <ellipse cx="-10" cy="-94" rx="5" ry="16" fill={color} />
          <ellipse cx="-17" cy="-68" rx="16" ry="20" fill={color} />
          <ellipse cx="-17" cy="-56" rx="11" ry="8" fill="#e8ded2" />
          {face(10, -17, -72)}
        </g>
      );
    case 'soldadito':
      return (
        <g>
          <rect x="-4" y="-34" width="8" height="34" rx="3" fill="#3a4a7a" />
          <rect x="-12" y="-70" width="24" height="38" rx="5" fill="#c0392b" />
          <path d="M-12 -60 l24 14" stroke="#f4d03f" strokeWidth="3" />
          <circle cx="0" cy="-82" r="11" fill="#f6d5b8" />
          <rect x="-10" y="-112" width="20" height="24" rx="4" fill={INK} />
          {face(10, 0, -80)}
          <path d="M16 -70 v-46" stroke="#9aa0a6" strokeWidth="3" />
        </g>
      );
    case 'abeto':
      return (
        <g>
          <rect x="-7" y="-24" width="14" height="24" rx="3" fill="#8a5a3a" />
          {[0, 1, 2].map((i) => (
            <path key={i} d={`M${-40 + i * 9} ${-20 - i * 32} L0 ${-70 - i * 32} L${40 - i * 9} ${-20 - i * 32}Z`} fill={['#3f7d4f', '#4b9160', '#5aa571'][i]} />
          ))}
          {face(10, 0, -60, true)}
        </g>
      );
    case 'estatua':
      return (
        <g>
          <rect x="-26" y="-30" width="52" height="30" rx="4" fill="#b8b2a6" />
          <rect x="-16" y="-92" width="32" height="62" rx="10" fill="#d4af37" />
          <circle cx="0" cy="-104" r="15" fill="#e2c15a" />
          <path d="M-13 -116 l3 -12 l6 8 l4 -10 l4 10 l6 -8 l3 12Z" fill="#c9a227" />
          <circle cx="-8" cy="-80" r="4" fill="#d24a4a" />
          {face(13, 0, -103, false)}
        </g>
      );
    case 'gigante':
      return (
        <g transform="scale(1.35)">
          <rect x="-10" y="-30" width="9" height="30" rx="4" fill="#4a4e6e" />
          <rect x="1" y="-30" width="9" height="30" rx="4" fill="#4a4e6e" />
          <rect x="-18" y="-74" width="36" height="46" rx="12" fill={color} />
          <circle cx="0" cy="-88" r="17" fill="#e0ad84" />
          <path d="M-14 -82 q14 22 28 0 q-14 8 -28 0Z" fill="#8a6b52" />
          {face(15, 0, -90)}
        </g>
      );
    case 'duende':
      return (
        <g transform="scale(0.6)">
          <rect x="-14" y="-50" width="28" height="44" rx="10" fill={color} />
          <circle cx="0" cy="-62" r="15" fill="#f6d5b8" />
          <path d="M-15 -66 L0 -104 L15 -66Z" className="fill-kid-paint-coral" />
          {face(13, 0, -60)}
        </g>
      );
    case 'nube':
      return (
        <g transform="translate(0 -110)">
          <path d="M-40 10 a20 20 0 0 1 14 -32 a26 26 0 0 1 46 -4 a18 18 0 0 1 22 30Z" fill="#dfe6ef" />
          <path d="M44 0 q20 -6 34 4 M40 14 q22 2 38 14" stroke="#b6c4d6" strokeWidth="4" fill="none" strokeLinecap="round" />
          {face(14, 0, -4)}
        </g>
      );
    case 'sol':
      return (
        <g transform="translate(0 -130)">
          {Array.from({ length: 10 }, (_, i) => (
            <path key={i} d="M0 -36 v-12" stroke="#f2c94c" strokeWidth="5" strokeLinecap="round" transform={`rotate(${i * 36})`} />
          ))}
          <circle r="30" fill="#f2c94c" />
          {face(18)}
        </g>
      );
  }
}

/** Elenco de un cuento puesto en escena: el protagonista adelante y, si hay, un compañero. */
export function StoryCastLayer({ cast, mood, page = 0 }: { cast: CastMember[]; mood?: MascotMood; page?: number }) {
  const slots = cast.length === 1 ? [200] : cast.length === 2 ? [140, 265] : [105, 205, 305];
  return (
    <g>
      {cast.slice(0, 3).map((c, i) => (
        <m.g
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}
        >
          {/* Una leve variación por página para que cada escena se sienta distinta. */}
          <g transform={`translate(${slots[i] + (page % 2 === 0 ? -10 : 10) * (i === 0 ? 1 : -1)} 206) scale(${cast.length > 2 ? 1.1 : 1.3})`}>
            <ellipse cx="0" cy="0" rx="26" ry="5" fill="#000" opacity="0.08" />
            {c.kind === 'persona' ? <Person c={c} mood={mood} /> : <Animal species={c.species} color={c.color} mood={mood} />}
          </g>
        </m.g>
      ))}
    </g>
  );
}
