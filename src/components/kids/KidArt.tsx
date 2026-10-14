import type { KidAvatar, KidFeelingId, KidSkill } from '@/domain/kids';

/**
 * Dibujos de la sección para chicos (SVG sin archivos): caras de emociones, avatares y
 * stickers. Colores por token (--kid-paint-*): se adaptan al modo oscuro.
 */

// ---------------------------------------------------------------- color por habilidad

export const SKILL_PAINT: Record<KidSkill, { fill: string; tint: string; stroke: string }> = {
  calma: { fill: 'fill-kid-paint-sky', tint: 'bg-kid-tint-sky', stroke: 'stroke-kid-paint-sky' },
  cuerpo: { fill: 'fill-kid-paint-mint', tint: 'bg-kid-tint-mint', stroke: 'stroke-kid-paint-mint' },
  emociones: { fill: 'fill-kid-paint-coral', tint: 'bg-kid-tint-coral', stroke: 'stroke-kid-paint-coral' },
  atencion: { fill: 'fill-kid-paint-sun', tint: 'bg-kid-tint-sun', stroke: 'stroke-kid-paint-sun' },
  pensar: { fill: 'fill-kid-paint-lavender', tint: 'bg-kid-tint-lavender', stroke: 'stroke-kid-paint-lavender' },
  valentia: { fill: 'fill-kid-paint-orange', tint: 'bg-kid-tint-orange', stroke: 'stroke-kid-paint-orange' },
  amabilidad: { fill: 'fill-kid-paint-pink', tint: 'bg-kid-tint-pink', stroke: 'stroke-kid-paint-pink' },
  gratitud: { fill: 'fill-kid-paint-leaf', tint: 'bg-kid-tint-leaf', stroke: 'stroke-kid-paint-leaf' },
};

// ---------------------------------------------------------------- caras de emociones

const FEELING_PAINT: Record<KidFeelingId, string> = {
  alegria: 'fill-kid-paint-sun',
  calma: 'fill-kid-paint-mint',
  tristeza: 'fill-kid-paint-sky',
  enojo: 'fill-kid-paint-coral',
  miedo: 'fill-kid-paint-lavender',
  preocupacion: 'fill-kid-paint-orange',
  sorpresa: 'fill-kid-paint-pink',
  cansancio: 'fill-kid-paint-leaf',
};

export function FeelingFace({ feeling, size = 64, className = '' }: { feeling: KidFeelingId; size?: number; className?: string }) {
  const ink = 'stroke-kid-paint-eye';
  const dot = 'fill-kid-paint-eye';
  const eyes = (r = 4) => (
    <>
      <circle cx="24" cy="28" r={r} className={dot} />
      <circle cx="40" cy="28" r={r} className={dot} />
    </>
  );
  const face: Record<KidFeelingId, React.ReactNode> = {
    alegria: (
      <>
        {eyes()}
        <path d="M20 38 Q32 50 44 38" className={ink} strokeWidth="3" strokeLinecap="round" fill="none" />
      </>
    ),
    calma: (
      <>
        <path d="M19 28 Q24 32 29 28 M35 28 Q40 32 45 28" className={ink} strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M25 41 Q32 45 39 41" className={ink} strokeWidth="3" strokeLinecap="round" fill="none" />
      </>
    ),
    tristeza: (
      <>
        {eyes()}
        <path d="M22 45 Q32 37 42 45" className={ink} strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M42 33 Q44 38 42 40 Q40 38 42 33Z" className="fill-kid-surface" />
      </>
    ),
    enojo: (
      <>
        <path d="M18 21 L29 25 M46 21 L35 25" className={ink} strokeWidth="3" strokeLinecap="round" />
        {eyes(3.6)}
        <path d="M22 44 Q32 37 42 44" className={ink} strokeWidth="3" strokeLinecap="round" fill="none" />
      </>
    ),
    miedo: (
      <>
        <circle cx="24" cy="28" r="5.5" className="fill-kid-surface" />
        <circle cx="40" cy="28" r="5.5" className="fill-kid-surface" />
        {eyes(3)}
        <path d="M21 43 Q24.5 39 28 43 T35 43 T42 43" className={ink} strokeWidth="2.8" strokeLinecap="round" fill="none" />
      </>
    ),
    preocupacion: (
      <>
        <path d="M18 23 L28 20 M46 23 L36 20" className={ink} strokeWidth="3" strokeLinecap="round" />
        {eyes()}
        <path d="M24 42 Q28 39 32 42 Q36 45 40 42" className={ink} strokeWidth="3" strokeLinecap="round" fill="none" />
      </>
    ),
    sorpresa: (
      <>
        {eyes(4.8)}
        <ellipse cx="32" cy="42" rx="4.5" ry="5.5" className={dot} />
      </>
    ),
    cansancio: (
      <>
        <path d="M19 29 L29 29 M35 29 L45 29" className={ink} strokeWidth="3" strokeLinecap="round" />
        <path d="M27 42 Q32 40 37 42" className={ink} strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M48 12 h6 l-6 6 h6" className={ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} className={className} aria-hidden>
      <circle cx="32" cy="33" r="27" className={FEELING_PAINT[feeling]} />
      <circle cx="32" cy="33" r="27" className="fill-none stroke-kid-ink" strokeOpacity="0.08" strokeWidth="2" />
      {face[feeling]}
    </svg>
  );
}

// ---------------------------------------------------------------- avatares

const AVATAR_TINT: Record<KidAvatar, string> = {
  sol: 'fill-kid-tint-sun',
  luna: 'fill-kid-tint-lavender',
  estrella: 'fill-kid-tint-orange',
  hoja: 'fill-kid-tint-leaf',
  flor: 'fill-kid-tint-pink',
  nube: 'fill-kid-tint-sky',
  corazon: 'fill-kid-tint-coral',
  rayo: 'fill-kid-tint-mint',
};

export function AvatarIcon({ avatar, size = 48, className = '' }: { avatar: KidAvatar; size?: number; className?: string }) {
  const shapes: Record<KidAvatar, React.ReactNode> = {
    sol: (
      <>
        <circle cx="24" cy="24" r="8" className="fill-kid-paint-sun" />
        {Array.from({ length: 8 }, (_, i) => {
          const a = (i * Math.PI) / 4;
          return <line key={i} x1={24 + Math.cos(a) * 11} y1={24 + Math.sin(a) * 11} x2={24 + Math.cos(a) * 15} y2={24 + Math.sin(a) * 15} className="stroke-kid-paint-sun" strokeWidth="2.6" strokeLinecap="round" />;
        })}
      </>
    ),
    luna: <path d="M29 11 A13 13 0 1 0 37 33 A10 10 0 1 1 29 11Z" className="fill-kid-paint-lavender" />,
    estrella: <path d="M24 9 L28.4 18.6 L38.9 19.7 L31 26.8 L33.2 37.1 L24 31.8 L14.8 37.1 L17 26.8 L9.1 19.7 L19.6 18.6Z" className="fill-kid-paint-orange" strokeLinejoin="round" />,
    hoja: (
      <>
        <path d="M12 36 C12 20 22 11 37 11 C37 26 28 36 12 36Z" className="fill-kid-paint-leaf" />
        <path d="M14 34 C20 26 26 20 33 15" className="stroke-kid-surface" strokeWidth="2" strokeLinecap="round" fill="none" />
      </>
    ),
    flor: (
      <>
        {Array.from({ length: 5 }, (_, i) => {
          const a = (i * 2 * Math.PI) / 5 - Math.PI / 2;
          return <circle key={i} cx={24 + Math.cos(a) * 8} cy={24 + Math.sin(a) * 8} r="6.5" className="fill-kid-paint-pink" />;
        })}
        <circle cx="24" cy="24" r="5" className="fill-kid-paint-sun" />
      </>
    ),
    nube: <path d="M15 33 a7 7 0 0 1 0-14 a9 9 0 0 1 17-3 a7.5 7.5 0 0 1 2 17Z" className="fill-kid-paint-sky" />,
    corazon: <path d="M24 37 C10 28 9 18 15 14 C19 11.5 23 13.5 24 17 C25 13.5 29 11.5 33 14 C39 18 38 28 24 37Z" className="fill-kid-paint-coral" />,
    rayo: <path d="M27 8 L14 27 L23 27 L20 40 L34 20 L25 20Z" className="fill-kid-paint-mint" strokeLinejoin="round" />,
  };
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} className={className} aria-hidden>
      <circle cx="24" cy="24" r="23" className={AVATAR_TINT[avatar]} />
      {shapes[avatar]}
    </svg>
  );
}

// ---------------------------------------------------------------- stickers

function SkillGlyph({ skill }: { skill: KidSkill }) {
  const s = { className: 'stroke-kid-surface', strokeWidth: 3, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' };
  switch (skill) {
    case 'calma':
      return <path d="M14 24 h14 a4 4 0 1 0 -4 -4 M14 30 h20 a4 4 0 1 1 -4 4 M14 18 h6" {...s} />;
    case 'cuerpo':
      return (
        <>
          <circle cx="24" cy="15" r="3.5" {...s} />
          <path d="M14 22 h20 M24 22 v9 l-6 9 M24 31 l6 9" {...s} />
        </>
      );
    case 'emociones':
      return (
        <>
          <circle cx="24" cy="24" r="11" {...s} />
          <path d="M19 27 q5 5 10 0" {...s} />
          <path d="M20 21 h0.1 M28 21 h0.1" {...s} strokeWidth={4} />
        </>
      );
    case 'atencion':
      return (
        <>
          <path d="M11 24 q13 -14 26 0 q-13 14 -26 0Z" {...s} />
          <circle cx="24" cy="24" r="3.5" {...s} />
        </>
      );
    case 'pensar':
      return (
        <>
          <circle cx="21" cy="21" r="7.5" {...s} />
          <path d="M26.5 26.5 L35 35" {...s} />
        </>
      );
    case 'valentia':
      return <path d="M24 11 L35 15 V24 C35 31 30 35 24 38 C18 35 13 31 13 24 V15Z M19 24 l4 4 l7 -8" {...s} />;
    case 'amabilidad':
      return <path d="M24 35 C13 28 12 20 17 17 C20 15 23 16.5 24 19.5 C25 16.5 28 15 31 17 C36 20 35 28 24 35Z" {...s} />;
    case 'gratitud':
      return <path d="M17 15 h14 M18 15 v4 c-3 2 -4 4 -4 7 v8 a3 3 0 0 0 3 3 h12 a3 3 0 0 0 3 -3 v-8 c0 -3 -1 -5 -4 -7 v-4 M20 28 l2.5 -2.5 l2.5 2.5 l2.5 -2.5" {...s} />;
  }
}

/** Sticker de una actividad: borde ondulado, color de la habilidad y brillo. */
export function Sticker({ skill, earned, size = 72, className = '' }: { skill: KidSkill; earned: boolean; size?: number; className?: string }) {
  const scallop = Array.from({ length: 12 }, (_, i) => {
    const a = (i * Math.PI) / 6;
    return `${24 + Math.cos(a) * 21},${24 + Math.sin(a) * 21}`;
  });
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} className={className} aria-hidden>
      {earned ? (
        <>
          {scallop.map((p, i) => {
            const [x, y] = p.split(',').map(Number);
            return <circle key={i} cx={x} cy={y} r="4.6" className={SKILL_PAINT[skill].fill} />;
          })}
          <circle cx="24" cy="24" r="21" className={SKILL_PAINT[skill].fill} />
          <circle cx="24" cy="24" r="17.5" className="fill-none stroke-kid-surface" strokeWidth="1.2" strokeDasharray="2 2.5" opacity="0.8" />
          <SkillGlyph skill={skill} />
          <path d="M13 13 q3 -4 8 -5" className="stroke-kid-surface" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
        </>
      ) : (
        <>
          <circle cx="24" cy="24" r="21" className="fill-kid-bg stroke-kid-soft" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M20 21 a4 4 0 1 1 6 3.4 c-1.4 0.8 -2 1.6 -2 3 M24 31.5 h0.1" className="stroke-kid-soft" strokeWidth="2.4" strokeLinecap="round" fill="none" />
        </>
      )}
    </svg>
  );
}
