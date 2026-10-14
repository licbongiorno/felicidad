import { describe, expect, it } from 'vitest';
import { exportDecisions, reviewQueue } from './reviewQueue';

describe('cola de revisión clínica', () => {
  it('incluye todo el contenido una sola vez, con enlace', () => {
    const items = reviewQueue();
    expect(new Set(items.map((i) => i.key)).size).toBe(items.length);
    expect(items.some((i) => i.key === 'herramienta:plan-seguridad')).toBe(true);
    expect(items.some((i) => i.key === 'instrumento:phq9')).toBe(true);
    for (const i of items) expect(i.href.startsWith('/'), i.key).toBe(true);
  });

  it('exporta las decisiones agrupadas y con comentario', () => {
    const items = reviewQueue();
    const text = exportDecisions(
      {
        'practica:tipp': { decision: 'aprobado', comment: '', at: '' },
        'instrumento:phq9': { decision: 'cambios', comment: 'Definir protocolo del ítem 9', at: '' },
        'practica:no-existe': { decision: 'aprobado', comment: '', at: '' },
      },
      'clinica@ejemplo.org',
      items,
    );
    expect(text).toContain('APROBADOS (1):');
    expect(text).toContain('- practica:tipp');
    expect(text).toContain('PIDE CAMBIOS (1):');
    expect(text).toContain('Definir protocolo del ítem 9');
    expect(text).not.toContain('no-existe');
  });
});
