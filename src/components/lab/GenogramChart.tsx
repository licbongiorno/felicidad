'use client';

import { forwardRef } from 'react';
import { GEN_TAG_BY_ID, layoutGenogram, NODE, ROW, type Bond, type Genogram, type PlacedPerson } from '@/domain/genogram';

/** Colores fijos: el genograma se dibuja sobre papel claro, también en modo oscuro (se imprime y se descarga). */
const INK = '#44403c';
const SOFT = '#78716c';
const PAPER = '#fffdf7';
const BOND_COLOR: Record<Bond, string> = { cercana: '#4d7c5f', distante: '#8a8178', conflictiva: '#b45309', cortada: '#57534e' };

const H = NODE / 2;

function Shape({ p, me }: { p: PlacedPerson; me: boolean }) {
  const { x, y, person } = p;
  const common = { fill: '#ffffff', stroke: INK, strokeWidth: me ? 3 : 1.75 };
  const shape =
    person.shape === 'cuadrado' ? (
      <rect x={x - H} y={y - H} width={NODE} height={NODE} {...common} />
    ) : person.shape === 'circulo' ? (
      <circle cx={x} cy={y} r={H} {...common} />
    ) : (
      <polygon points={`${x},${y - H - 3} ${x + H + 3},${y} ${x},${y + H + 3} ${x - H - 3},${y}`} {...common} />
    );
  return (
    <g>
      {shape}
      {me && <circle cx={x} cy={y} r={5} fill={INK} />}
      {person.deceased && (
        <g stroke={INK} strokeWidth={1.75}>
          <line x1={x - H + 6} y1={y - H + 6} x2={x + H - 6} y2={y + H - 6} />
          <line x1={x + H - 6} y1={y - H + 6} x2={x - H + 6} y2={y + H - 6} />
        </g>
      )}
    </g>
  );
}

const trim = (s: string, n: number) => (s.length > n ? `${s.slice(0, n - 1)}…` : s);

function Label({ p }: { p: PlacedPerson }) {
  const { x, y, person } = p;
  const years = person.birthYear ? `${person.birthYear}${person.deceased && person.deathYear ? `–${person.deathYear}` : ''}` : person.deceased && person.deathYear ? `† ${person.deathYear}` : '';
  const tags = person.tags.map((t) => GEN_TAG_BY_ID[t]?.label).filter(Boolean);
  return (
    <g textAnchor="middle" fontFamily="system-ui, sans-serif">
      <text x={x} y={y + H + 18} fontSize={13} fill={INK} fontWeight={600}>
        {trim(person.slot.kind === 'yo' ? person.name || 'Yo' : person.name || '¿?', 16)}
      </text>
      {years && (
        <text x={x} y={y + H + 33} fontSize={11} fill={SOFT}>
          {years}
        </text>
      )}
      {tags.length > 0 && (
        <text x={x} y={y + H + (years ? 47 : 33)} fontSize={10} fill={SOFT}>
          {trim(tags[0]!, tags.length > 1 ? 14 : 18)}
          {tags.length > 1 ? ` +${tags.length - 1}` : ''}
        </text>
      )}
    </g>
  );
}

/** Línea de vínculo emocional entre tú y otra persona (convención simplificada). */
function BondLine({ from, to, bond }: { from: PlacedPerson; to: PlacedPerson; bond: Bond }) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const sx = from.x + ux * (H + 6);
  const sy = from.y + uy * (H + 6);
  const ex = to.x - ux * (H + 6);
  const ey = to.y - uy * (H + 6);
  const color = BOND_COLOR[bond];
  if (bond === 'conflictiva') {
    // Zigzag a lo largo de la línea.
    const n = Math.max(4, Math.round(Math.hypot(ex - sx, ey - sy) / 14));
    const pts = Array.from({ length: n + 1 }, (_, i) => {
      const t = i / n;
      const off = i === 0 || i === n ? 0 : i % 2 ? 5 : -5;
      return `${sx + (ex - sx) * t - uy * off},${sy + (ey - sy) * t + ux * off}`;
    }).join(' ');
    return <polyline points={pts} fill="none" stroke={color} strokeWidth={1.75} opacity={0.9} />;
  }
  if (bond === 'cortada') {
    const mx = (sx + ex) / 2;
    const my = (sy + ey) / 2;
    return (
      <g stroke={color} strokeWidth={1.75} opacity={0.9}>
        <line x1={sx} y1={sy} x2={mx - ux * 8} y2={my - uy * 8} />
        <line x1={mx + ux * 8} y1={my + uy * 8} x2={ex} y2={ey} />
        <line x1={mx - ux * 8 - uy * 8} y1={my - uy * 8 + ux * 8} x2={mx - ux * 8 + uy * 8} y2={my - uy * 8 - ux * 8} />
        <line x1={mx + ux * 8 - uy * 8} y1={my + uy * 8 + ux * 8} x2={mx + ux * 8 + uy * 8} y2={my + uy * 8 - ux * 8} />
      </g>
    );
  }
  return (
    <line
      x1={sx}
      y1={sy}
      x2={ex}
      y2={ey}
      stroke={color}
      strokeWidth={bond === 'cercana' ? 3 : 1.75}
      strokeDasharray={bond === 'distante' ? '2 6' : undefined}
      strokeLinecap="round"
      opacity={0.9}
    />
  );
}

/** Dibujo SVG del genograma. Se puede descargar tal cual (serializando el nodo). */
export const GenogramChart = forwardRef<SVGSVGElement, { genogram: Genogram; showBonds: boolean }>(function GenogramChart({ genogram, showBonds }, ref) {
  const l = layoutGenogram(genogram);
  const me = l.placed.find((p) => p.person.slot.kind === 'yo')!;
  const n = l.placed.length + l.others.length;
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${l.width} ${l.height}`}
      width={l.width}
      height={l.height}
      role="img"
      aria-label={`Genograma con ${n === 1 ? 'una persona' : `${n} personas`}. La lista completa está en el editor.`}
      className="h-auto max-w-none"
    >
      <rect x={0} y={0} width={l.width} height={l.height} fill={PAPER} />
      {/* Parejas: línea a la altura del centro, entre las dos figuras (así no tapa los nombres). */}
      {l.couples.map((c) => {
        const y = c.a.y;
        const x1 = c.a.x + H + (c.a.person.shape === 'rombo' ? 3 : 0);
        const x2 = c.b.x - H - (c.b.person.shape === 'rombo' ? 3 : 0);
        const mid = (c.a.x + c.b.x) / 2;
        return (
          <g key={c.id} stroke={INK} strokeWidth={1.75} fill="none">
            <line x1={x1} y1={y} x2={x2} y2={y} />
            {c.separated && (
              <g>
                <line x1={mid - 9} y1={y + 8} x2={mid - 1} y2={y - 8} />
                <line x1={mid + 1} y1={y + 8} x2={mid + 9} y2={y - 8} />
              </g>
            )}
          </g>
        );
      })}
      {/* Descendencia */}
      {l.descents.map((d, i) => {
        const startY = d.parents === 2 ? d.from.y : d.from.y + H + 54;
        const sibY = d.from.y + ROW / 2 + 26;
        const xs = d.children.map((c) => c.x);
        const left = Math.min(...xs, d.from.x);
        const right = Math.max(...xs, d.from.x);
        return (
          <g key={i} stroke={INK} strokeWidth={1.75} fill="none">
            <line x1={d.from.x} y1={startY} x2={d.from.x} y2={sibY} />
            <line x1={left} y1={sibY} x2={right} y2={sibY} />
            {d.children.map((c) => (
              <line key={c.person.id} x1={c.x} y1={sibY} x2={c.x} y2={c.y - H - (c.person.shape === 'rombo' ? 3 : 0)} />
            ))}
          </g>
        );
      })}
      {/* Vínculos contigo */}
      {showBonds &&
        [...l.placed, ...l.others]
          .filter((p) => p.person.bond && p.person.slot.kind !== 'yo')
          .map((p) => <BondLine key={p.person.id} from={me} to={p} bond={p.person.bond!} />)}
      {/* Personas */}
      {[...l.placed, ...l.others].map((p) => (
        <g key={p.person.id}>
          <title>{[p.person.name || 'Sin nombre', ...p.person.tags.map((t) => GEN_TAG_BY_ID[t]?.label)].filter(Boolean).join(' · ')}</title>
          <Shape p={p} me={p.person.slot.kind === 'yo'} />
          <Label p={p} />
        </g>
      ))}
      {l.others.length > 0 && (
        <text x={24} y={l.others[0].y - H - 22} fontSize={12} fill={SOFT} fontFamily="system-ui, sans-serif">
          Otras personas importantes
        </text>
      )}
    </svg>
  );
});
