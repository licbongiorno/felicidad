import { describe, expect, it } from 'vitest';
import { exportDecisions, reviewPriority, reviewQueue } from './reviewQueue';

describe('cola de revisión clínica', () => {
  it('incluye todo el contenido una sola vez, con enlace', () => {
    const items = reviewQueue();
    expect(new Set(items.map((i) => i.key)).size).toBe(items.length);
    expect(items.some((i) => i.key === 'herramienta:plan-seguridad')).toBe(true);
    expect(items.some((i) => i.key === 'instrumento:phq9')).toBe(true);
    for (const i of items) expect(i.href.startsWith('/'), i.key).toBe(true);
  });

  it('ordena por riesgo: crisis y temas críticos primero', () => {
    const items = reviewQueue();
    const p = (key: string) => items.find((i) => i.key === key)!.priority;
    expect(p('herramienta:plan-seguridad')).toBe(1);
    expect(p('instrumento:phq9')).toBe(1);
    expect(p('practica:plan-para-el-momento-dificil')).toBe(1);
    expect(p('articulo:duelo-por-suicidio')).toBe(1);
    expect(p('practica:tonglen')).toBe(2); // riesgo 2
    expect(p('practica:tres-cosas-buenas')).toBe(3);
    expect(reviewPriority('guia-familia', 'cualquiera').priority).toBe(2);
    for (const i of items) expect(i.reason.trim(), i.key).toMatch(/\.$/);
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
