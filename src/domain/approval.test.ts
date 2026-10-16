import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { contentHash, contentIndex } from './contentIndex';
import { APPROVED, REVIEW_OVERRIDES, reviewOf } from './governance';

/**
 * La aprobación clínica está atada al contenido exacto (approved.json).
 *
 * - Modo normal (CI): falla si un elemento aprobado cambió o ya no existe.
 * - `npm run approve`: aprueba lo indicado en APPROVE_KEYS (o todo lo pendiente) y reescribe
 *   approved.json. Con APPROVE_MODE=revoke, quita esas claves (vuelven a `pendiente`).
 */
const FILE = fileURLToPath(new URL('./approved.json', import.meta.url));
const index = contentIndex();
const MODE = process.env.APPROVE_MODE ?? (process.env.APPROVE_CONTENT ? 'approve' : '');

describe('aprobación clínica atada al contenido', () => {
  if (MODE) {
    it(`actualiza approved.json (${MODE})`, () => {
      const keys = (process.env.APPROVE_KEYS ?? '').split(',').map((k) => k.trim()).filter(Boolean);
      const unknown = keys.filter((k) => !(k in index));
      expect(unknown, 'Claves que no existen en el contenido').toEqual([]);
      const next: Record<string, { hash: string; at: string }> = { ...APPROVED };
      const today = new Date().toISOString().slice(0, 10);
      if (MODE === 'revoke') {
        for (const k of keys) delete next[k];
      } else {
        const targets = keys.length
          ? keys
          : Object.keys(index).filter((k) => REVIEW_OVERRIDES[k]?.status !== 'borrador' && APPROVED[k]?.hash !== contentHash(index[k]));
        for (const k of targets) next[k] = { hash: contentHash(index[k]), at: today };
      }
      const sorted = Object.fromEntries(Object.keys(next).sort().map((k) => [k, next[k]]));
      // Una línea por elemento: los cambios de aprobación se leen fácil en el diff.
      const lines = Object.entries(sorted).map(([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)}`);
      writeFileSync(FILE, `{\n${lines.join(',\n')}\n}\n`);
    });
    return;
  }

  it('cada elemento aprobado sigue existiendo', () => {
    const gone = Object.keys(APPROVED).filter((k) => !(k in index));
    expect(gone, 'Se aprobaron elementos que ya no existen: quítalos con APPROVE_MODE=revoke APPROVE_KEYS=... npm run approve').toEqual([]);
  });

  it('el contenido aprobado no cambió desde su aprobación', () => {
    const changed = Object.keys(APPROVED).filter((k) => k in index && APPROVED[k].hash !== contentHash(index[k]));
    expect(
      changed,
      'Estos elementos cambiaron después de aprobarse. Si el responsable clínico aprobó el cambio: APPROVE_KEYS=<claves> npm run approve. Si no: APPROVE_MODE=revoke APPROVE_KEYS=<claves> npm run approve (vuelven a pendiente).',
    ).toEqual([]);
  });

  it('lo nuevo queda pendiente y lo aprobado muestra revisor y fecha', () => {
    expect(reviewOf('practica', 'una-practica-que-no-existe').status).toBe('pendiente');
    const [key] = Object.keys(APPROVED);
    const [kind, ...rest] = key.split(':');
    const r = reviewOf(kind as Parameters<typeof reviewOf>[0], rest.join(':'));
    expect(r.status).toBe('revisado');
    expect(r.reviewedBy && r.reviewedAt).toBeTruthy();
  });

  it('la huella cambia si cambia el contenido y no depende del orden de las propiedades', () => {
    expect(contentHash({ a: 1, b: 'x' })).toBe(contentHash({ b: 'x', a: 1 }));
    expect(contentHash({ a: 1, b: 'x' })).not.toBe(contentHash({ a: 1, b: 'y' }));
  });
});
