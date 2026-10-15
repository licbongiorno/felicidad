'use client';

import type { KidActivity } from '@/domain/kids';

/**
 * Ícono propio de cada actividad: muestra lo que se hace (un globo para inflar, una ola,
 * un volcán, un detective…), no sólo la habilidad. Así las tarjetas no se ven iguales.
 */
type Glyph =
  | 'globo'
  | 'flor'
  | 'estrella'
  | 'cuadrado'
  | 'ola'
  | 'cara'
  | 'frasco'
  | 'cartas'
  | 'bandera'
  | 'corazon'
  | 'tortuga'
  | 'robot'
  | 'volcan'
  | 'lupa'
  | 'nube'
  | 'campana'
  | 'escalera'
  | 'semaforo'
  | 'oso'
  | 'burbujas'
  | 'luna'
  | 'escudo'
  | 'brujula'
  | 'telefono'
  | 'manos'
  | 'libro'
  | 'musica'
  | 'cuerpo'
  | 'caja'
  | 'pie'
  | 'sol'
  | 'charla'
  | 'fideo'
  | 'nieve';

/** Palabras del id que deciden el dibujo (en orden: la primera que coincide gana). */
const BY_WORD: [RegExp, Glyph][] = [
  [/tortuga|esperar/, 'tortuga'],
  [/cara-a-cara|nombrar|cucu|espejo/, 'cara'],
  [/berrinche/, 'volcan'],
  [/elegir|juego/, 'cartas'],
  [/despedida|perdon/, 'corazon'],
  [/voz|pedir-y-decir|hablar|siento-pido|pedir-ayuda/, 'charla'],
  [/anticipar/, 'brujula'],
  [/espagueti|fideo/, 'fideo'],
  [/congelad/, 'nieve'],
  [/robot/, 'robot'],
  [/volcan/, 'volcan'],
  [/detective|chequear|lupa|rayos/, 'lupa'],
  [/nube|pensamiento/, 'nube'],
  [/campana|escucha/, 'campana'],
  [/escalera|pasito|valiente(?!s)/, 'escalera'],
  [/semaforo|stop|tipp|alerta/, 'semaforo'],
  [/oso/, 'oso'],
  [/burbuja/, 'burbujas'],
  [/globo/, 'globo'],
  [/noche|dormir|rutina|luna/, 'luna'],
  [/escudo/, 'escudo'],
  [/brujula|mente-sabia/, 'brujula'],
  [/redes|telefono/, 'telefono'],
  [/amig|amable|perdon|ayuda|afuera|vinculo|cara-a-cara|pedir/, 'manos'],
  [/leer|cuento/, 'libro'],
  [/musica|cancion/, 'musica'],
  [/cuerpo|masaje|estira|partes|animales/, 'cuerpo'],
  [/caja|cajita|preocupacion/, 'caja'],
  [/caminata|paseo|explorar|pie/, 'pie'],
  [/logro|mejor-del-dia|gracias|gratitud/, 'sol'],
  [/corazon|calma-compartida|cuidarme/, 'corazon'],
];

export function glyphFor(a: KidActivity): Glyph {
  if (a.kind === 'respirar') return /oso/.test(a.id) ? 'oso' : /burbuja/.test(a.id) ? 'burbujas' : a.shape;
  if (a.kind === 'emocion') return 'cara';
  if (a.kind === 'gratitud') return 'frasco';
  if (a.kind === 'juego') return 'cartas';
  const hit = BY_WORD.find(([re]) => re.test(a.id));
  if (hit) return hit[1];
  if (a.kind === 'mision') return 'bandera';
  if (a.kind === 'juntos') return 'manos';
  return a.skill === 'calma' ? 'ola' : a.skill === 'emociones' ? 'cara' : a.skill === 'pensar' ? 'nube' : a.skill === 'valentia' ? 'escalera' : 'corazon';
}

const s = { fill: 'none', strokeWidth: 2.4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, className: 'stroke-kid-ink' };

const GLYPHS: Record<Glyph, React.ReactNode> = {
  globo: (
    <>
      <ellipse cx="24" cy="19" rx="10" ry="12" className="fill-kid-paint-sky" />
      <path d="M24 31 q-3 6 0 10" {...s} />
    </>
  ),
  flor: (
    <>
      {[0, 72, 144, 216, 288].map((r) => (
        <ellipse key={r} cx="24" cy="15" rx="4.5" ry="7" transform={`rotate(${r} 24 22)`} className="fill-kid-paint-pink" />
      ))}
      <circle cx="24" cy="22" r="4" className="fill-kid-paint-sun" />
      <path d="M24 28 v12" {...s} />
    </>
  ),
  estrella: <path d="M24 8 l4.7 9.6 10.5 1.5 -7.6 7.4 1.8 10.5 -9.4 -5 -9.4 5 1.8 -10.5 -7.6 -7.4 10.5 -1.5Z" className="fill-kid-paint-sun stroke-kid-ink" strokeWidth="2" strokeLinejoin="round" />,
  cuadrado: (
    <>
      <rect x="11" y="11" width="26" height="26" rx="4" className="fill-kid-tint-lavender stroke-kid-ink" strokeWidth="2.4" />
      <circle cx="11" cy="37" r="3.5" className="fill-kid-primary" />
    </>
  ),
  ola: <path d="M6 28 q6 -8 12 0 t12 0 t12 0 M6 36 q6 -8 12 0 t12 0 t12 0" {...s} className="stroke-kid-paint-sky" strokeWidth="3.2" />,
  cara: (
    <>
      <circle cx="24" cy="24" r="14" className="fill-kid-paint-sun" />
      <circle cx="19" cy="21" r="1.8" className="fill-kid-ink" />
      <circle cx="29" cy="21" r="1.8" className="fill-kid-ink" />
      <path d="M18 28 q6 5 12 0" {...s} />
    </>
  ),
  frasco: (
    <>
      <rect x="17" y="8" width="14" height="5" rx="2" className="fill-kid-paint-orange" />
      <path d="M15 15 h18 c3 3 3 7 3 10 v10 c0 3 -2 5 -5 5 h-14 c-3 0 -5 -2 -5 -5 v-10 c0 -3 0 -7 3 -10Z" className="fill-kid-tint-sky stroke-kid-ink" strokeWidth="2" />
      <path d="M21 30 l1.4 -3 1.4 3 3 .4 -2.2 2 .6 3 -2.8 -1.5 -2.8 1.5 .6 -3 -2.2 -2Z" className="fill-kid-paint-sun" />
    </>
  ),
  cartas: (
    <>
      <rect x="10" y="12" width="16" height="22" rx="3" transform="rotate(-10 18 23)" className="fill-kid-paint-coral" />
      <rect x="22" y="12" width="16" height="22" rx="3" transform="rotate(10 30 23)" className="fill-kid-surface stroke-kid-ink" strokeWidth="2" />
      <circle cx="30" cy="23" r="3" className="fill-kid-paint-sky" />
    </>
  ),
  bandera: (
    <>
      <path d="M14 40 V8" {...s} />
      <path d="M15 9 h18 l-5 6 5 6 h-18Z" className="fill-kid-paint-coral" />
    </>
  ),
  corazon: <path d="M24 38 s-13 -7.5 -13 -16.5 a7 7 0 0 1 13 -3.6 a7 7 0 0 1 13 3.6 c0 9 -13 16.5 -13 16.5Z" className="fill-kid-paint-coral" />,
  tortuga: (
    <>
      <path d="M10 30 a14 12 0 0 1 28 0Z" className="fill-kid-paint-leaf" />
      <circle cx="40" cy="27" r="4" className="fill-kid-paint-mint" />
      <path d="M14 30 v4 M34 30 v4" {...s} />
    </>
  ),
  robot: (
    <>
      <rect x="14" y="14" width="20" height="18" rx="4" className="fill-kid-tint-sky stroke-kid-ink" strokeWidth="2.2" />
      <circle cx="20" cy="22" r="2" className="fill-kid-ink" />
      <circle cx="28" cy="22" r="2" className="fill-kid-ink" />
      <path d="M24 14 v-5 M20 28 h8 M18 32 v6 M30 32 v6" {...s} />
    </>
  ),
  volcan: (
    <>
      <path d="M8 40 L19 18 h10 L40 40Z" className="fill-kid-paint-orange" />
      <path d="M20 14 q-2 -4 1 -7 M24 13 q0 -5 3 -7 M28 14 q2 -4 0 -7" {...s} className="stroke-kid-paint-coral" />
    </>
  ),
  lupa: (
    <>
      <circle cx="21" cy="21" r="10" className="fill-kid-tint-sky stroke-kid-ink" strokeWidth="2.6" />
      <path d="M28.5 28.5 L38 38" {...s} strokeWidth="3.4" />
    </>
  ),
  nube: <path d="M14 32 a7 7 0 0 1 2 -13.6 a9 9 0 0 1 17 -1.4 a7 7 0 0 1 1 15Z" className="fill-kid-surface stroke-kid-ink" strokeWidth="2.2" />,
  campana: (
    <>
      <path d="M14 32 h20 c-3 -3 -3 -6 -3 -10 a7 7 0 0 0 -14 0 c0 4 0 7 -3 10Z" className="fill-kid-paint-sun stroke-kid-ink" strokeWidth="2" />
      <path d="M21 36 a3 3 0 0 0 6 0 M10 18 q-2 4 0 8 M38 18 q2 4 0 8" {...s} />
    </>
  ),
  escalera: <path d="M12 40 h8 v-8 h8 v-8 h8 v-8 h4" {...s} strokeWidth="3" className="stroke-kid-paint-lavender" />,
  semaforo: (
    <>
      <rect x="17" y="6" width="14" height="36" rx="6" className="fill-kid-ink" />
      <circle cx="24" cy="14" r="4" className="fill-kid-paint-coral" />
      <circle cx="24" cy="24" r="4" className="fill-kid-paint-sun" />
      <circle cx="24" cy="34" r="4" className="fill-kid-paint-leaf" />
    </>
  ),
  oso: (
    <>
      <circle cx="15" cy="15" r="5" className="fill-kid-paint-orange" />
      <circle cx="33" cy="15" r="5" className="fill-kid-paint-orange" />
      <circle cx="24" cy="25" r="13" className="fill-kid-paint-orange" />
      <ellipse cx="24" cy="29" rx="5" ry="4" className="fill-kid-tint-sun" />
      <circle cx="19" cy="22" r="1.6" className="fill-kid-ink" />
      <circle cx="29" cy="22" r="1.6" className="fill-kid-ink" />
    </>
  ),
  burbujas: (
    <>
      <circle cx="18" cy="28" r="9" className="fill-kid-tint-sky stroke-kid-paint-sky" strokeWidth="2.2" />
      <circle cx="32" cy="16" r="6" className="fill-kid-tint-sky stroke-kid-paint-sky" strokeWidth="2.2" />
      <circle cx="34" cy="34" r="4" className="fill-kid-tint-sky stroke-kid-paint-sky" strokeWidth="2.2" />
    </>
  ),
  luna: (
    <>
      <path d="M30 8 a16 16 0 1 0 10 26 a13 13 0 0 1 -10 -26Z" className="fill-kid-paint-sun" />
      <circle cx="14" cy="12" r="1.6" className="fill-kid-paint-sun" />
    </>
  ),
  escudo: <path d="M24 7 l14 5 v10 c0 10 -7 16 -14 19 c-7 -3 -14 -9 -14 -19 v-10Z" className="fill-kid-paint-sky stroke-kid-ink" strokeWidth="2" />,
  brujula: (
    <>
      <circle cx="24" cy="24" r="15" className="fill-kid-surface stroke-kid-ink" strokeWidth="2.2" />
      <path d="M24 12 l4 12 -4 12 -4 -12Z" className="fill-kid-paint-coral" />
    </>
  ),
  telefono: (
    <>
      <rect x="15" y="7" width="18" height="34" rx="4" className="fill-kid-ink" />
      <rect x="18" y="11" width="12" height="22" rx="1.5" className="fill-kid-tint-sky" />
    </>
  ),
  manos: (
    <>
      <path d="M8 30 q8 -10 16 -4 q8 -6 16 4" {...s} strokeWidth="3" />
      <path d="M24 24 s-6 -4 -6 -8 a3.5 3.5 0 0 1 6 -1.8 a3.5 3.5 0 0 1 6 1.8 c0 4 -6 8 -6 8Z" className="fill-kid-paint-coral" />
    </>
  ),
  libro: (
    <>
      <path d="M8 13 q8 -3 16 1 v24 q-8 -4 -16 -1Z" className="fill-kid-paint-sky" />
      <path d="M40 13 q-8 -3 -16 1 v24 q8 -4 16 -1Z" className="fill-kid-paint-mint" />
    </>
  ),
  musica: (
    <>
      <path d="M20 34 V12 l16 -4 v22" {...s} />
      <circle cx="16" cy="34" r="4.5" className="fill-kid-paint-lavender" />
      <circle cx="32" cy="30" r="4.5" className="fill-kid-paint-lavender" />
    </>
  ),
  cuerpo: (
    <>
      <circle cx="24" cy="11" r="4.5" className="fill-kid-paint-mint" />
      <path d="M24 16 v12 M14 20 l10 3 10 -3 M24 28 l-6 11 M24 28 l6 11" {...s} strokeWidth="3" />
    </>
  ),
  caja: (
    <>
      <rect x="10" y="20" width="28" height="18" rx="3" className="fill-kid-paint-orange" />
      <path d="M8 14 h32 v6 h-32Z" className="fill-kid-paint-coral" />
      <path d="M24 14 v24" {...s} className="stroke-kid-surface" />
    </>
  ),
  pie: (
    <>
      <ellipse cx="18" cy="30" rx="6" ry="9" className="fill-kid-paint-leaf" />
      <ellipse cx="31" cy="20" rx="5" ry="8" className="fill-kid-paint-leaf" />
    </>
  ),
  fideo: (
    <>
      <path d="M8 26 h32 a16 14 0 0 1 -32 0Z" className="fill-kid-paint-orange" />
      <path d="M14 26 q2 -10 6 -2 t6 -4 t6 0 t4 -6" {...s} className="stroke-kid-paint-sun" strokeWidth="3" />
    </>
  ),
  nieve: (
    <g className="stroke-kid-paint-sky" strokeWidth="3" strokeLinecap="round">
      {[0, 60, 120].map((r) => (
        <path key={r} d="M24 9 V39 M19 13 l5 4 5 -4 M19 35 l5 -4 5 4" fill="none" transform={`rotate(${r} 24 24)`} />
      ))}
    </g>
  ),
  charla: (
    <>
      <path d="M8 12 h24 a4 4 0 0 1 4 4 v10 a4 4 0 0 1 -4 4 h-14 l-7 6 v-6 h-3 a4 4 0 0 1 -4 -4 v-10 a4 4 0 0 1 4 -4Z" className="fill-kid-paint-sky" />
      <path d="M30 22 h6 a4 4 0 0 1 4 4 v8 a4 4 0 0 1 -4 4 h-1 v5 l-6 -5 h-6" className="fill-kid-paint-mint" />
    </>
  ),
  sol: (
    <>
      <circle cx="24" cy="24" r="8" className="fill-kid-paint-sun" />
      {Array.from({ length: 8 }, (_, i) => (
        <path key={i} d="M24 9 v4" {...s} className="stroke-kid-paint-sun" strokeWidth="3" transform={`rotate(${i * 45} 24 24)`} />
      ))}
    </>
  ),
};

export function ActivityIcon({ activity, done = false, size = 56, className = '' }: { activity: KidActivity; done?: boolean; size?: number; className?: string }) {
  return (
    <span className={`relative inline-flex shrink-0 ${className}`} style={{ width: size, height: size }} aria-hidden>
      <svg viewBox="0 0 48 48" width={size} height={size}>
        <rect x="1" y="1" width="46" height="46" rx="14" className="fill-kid-surface" />
        {GLYPHS[glyphFor(activity)]}
      </svg>
      {done && (
        <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-kid-paint-mint text-[11px] font-black text-kid-surface ring-2 ring-kid-surface">
          ✓
        </span>
      )}
    </span>
  );
}
