import { describe, expect, it } from 'vitest';
import { sanitizeErrorReport } from './errorReport';
import { POST } from '@/app/api/errores/route';

describe('registro de errores', () => {
  it('guarda sólo campos conocidos, recortados y sin parámetros en la ruta', () => {
    const r = sanitizeErrorReport({ message: 'x'.repeat(500), digest: 'abc', path: '/diario?nuevo=tres-cosas#nota', ua: 'u'.repeat(300), email: 'a@b.c', texto: 'privado' });
    expect(r).toEqual({ message: 'x'.repeat(300), digest: 'abc', path: '/diario', scope: 'seccion', ua: 'u'.repeat(120) });
  });

  it('rechaza avisos vacíos o con forma inválida', () => {
    expect(sanitizeErrorReport(null)).toBeNull();
    expect(sanitizeErrorReport({ message: '   ' })).toBeNull();
    expect(sanitizeErrorReport('texto')).toBeNull();
  });

  it('la ruta responde 204 a un aviso válido y rechaza cuerpos grandes o rotos', async () => {
    const post = (body: string) => POST(new Request('http://x/api/errores', { method: 'POST', body }));
    const log = console.error;
    console.error = () => undefined;
    try {
      expect((await post(JSON.stringify({ message: 'falló' }))).status).toBe(204);
    } finally {
      console.error = log;
    }
    expect((await post('x'.repeat(3_000))).status).toBe(413);
    expect((await post('{roto')).status).toBe(400);
  });
});
