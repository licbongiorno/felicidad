import { describe, expect, it } from 'vitest';
import { describeSyncError } from './useProgressStore';

describe('mensajes de sincronización', () => {
  it('dicen qué pasó y qué hacer según el error', () => {
    expect(describeSyncError({ code: 'unauthenticated' })).toMatch(/sesión expiró/);
    expect(describeSyncError({ code: 'resource-exhausted' })).toMatch(/Espera un momento/);
    expect(describeSyncError({ code: 'unavailable' })).toMatch(/Sin conexión/);
    expect(describeSyncError(new Error('x'))).toMatch(/Vuelve a intentarlo/);
  });
});
