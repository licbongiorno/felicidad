/**
 * Diagrama de un ciclo clínico (p. ej. evitación ↔ ansiedad). SVG que hereda los colores
 * del tema (funciona en claro, oscuro e impresión) y alternativa en lista para lectores de pantalla.
 */
export function CycleDiagram({ title, nodes, caption }: { title: string; nodes: string[]; caption: string }) {
  const W = 560;
  const H = 360;
  const cx = W / 2;
  const cy = H / 2;
  const rx = 200;
  const ry = 125;
  const pos = nodes.map((_, i) => {
    const a = -Math.PI / 2 + (i / nodes.length) * Math.PI * 2;
    return { x: cx + rx * Math.cos(a), y: cy + ry * Math.sin(a), a };
  });

  // Flechas sobre la elipse entre nodos consecutivos, recortadas para no tapar las etiquetas.
  const arcs = pos.map((_, i) => {
    const a0 = pos[i].a + 0.32;
    const a1 = pos[(i + 1) % pos.length].a - 0.32 + (i === pos.length - 1 ? Math.PI * 2 : 0);
    const p0 = { x: cx + rx * Math.cos(a0), y: cy + ry * Math.sin(a0) };
    const p1 = { x: cx + rx * Math.cos(a1), y: cy + ry * Math.sin(a1) };
    return `M${p0.x.toFixed(1)},${p0.y.toFixed(1)} A${rx},${ry} 0 0 1 ${p1.x.toFixed(1)},${p1.y.toFixed(1)}`;
  });

  return (
    <figure className="my-10 rounded-2xl border border-stone-200 bg-white p-5 shadow-soft print:break-inside-avoid print:shadow-none">
      <p className="text-xs uppercase tracking-[0.18em] text-stone-600">{title}</p>
      <svg viewBox={`0 0 ${W} ${H}`} className="mt-2 block h-auto w-full" role="img" aria-label={`${title}: ${nodes.join(', luego ')}, y vuelve a empezar.`}>
        <defs>
          <marker id="flecha" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" className="fill-sage-600" />
          </marker>
        </defs>
        {arcs.map((d, i) => (
          <path key={i} d={d} fill="none" strokeWidth={1.75} className="stroke-sage-500" markerEnd="url(#flecha)" />
        ))}
        {pos.map((p, i) => (
          <foreignObject key={nodes[i]} x={p.x - 78} y={p.y - 26} width={156} height={52}>
            <div className="flex h-full items-center justify-center rounded-xl border border-stone-200 bg-stone-50 px-2 text-center text-[13px] leading-tight text-stone-800">
              {nodes[i]}
            </div>
          </foreignObject>
        ))}
      </svg>
      <ol className="sr-only">
        {nodes.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ol>
      <figcaption className="mt-3 text-sm leading-relaxed text-stone-600">{caption}</figcaption>
    </figure>
  );
}
