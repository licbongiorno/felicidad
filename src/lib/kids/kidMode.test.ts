// @vitest-environment jsdom
import { describe, expect, it } from 'vitest';
import { checkPin, enterKidMode, exitKidMode, hasPin, isValidPin, setPin } from './kidMode';

describe('código del adulto y modo chico', () => {
  it('sólo acepta 4 números y no guarda el código en claro', async () => {
    expect(isValidPin('12a4')).toBe(false);
    await expect(setPin('123')).rejects.toThrow();
    await setPin('4821');
    expect(hasPin()).toBe(true);
    expect(localStorage.getItem('eudaimonia-kid-pin')).not.toContain('4821');
  });

  it('valida el código y bloquea 30 segundos tras 5 intentos fallidos', async () => {
    await setPin('4821');
    expect((await checkPin('4821')).ok).toBe(true);
    const now = Date.now();
    for (let i = 0; i < 4; i++) expect(await checkPin('0000', now)).toEqual({ ok: false, lockedFor: 0 });
    const locked = await checkPin('0000', now);
    expect(locked.ok).toBe(false);
    expect(!locked.ok && locked.lockedFor).toBe(30_000);
    expect((await checkPin('4821', now + 1000)).ok).toBe(false); // bloqueado aunque sea el correcto
    expect((await checkPin('4821', now + 31_000)).ok).toBe(true);
  });

  it('entra y sale del modo chico', () => {
    enterKidMode('k1');
    expect(localStorage.getItem('eudaimonia-kid-mode')).toBe('k1');
    exitKidMode();
    expect(localStorage.getItem('eudaimonia-kid-mode')).toBeNull();
  });
});
