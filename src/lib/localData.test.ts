// @vitest-environment jsdom
import { beforeEach, describe, expect, it } from 'vitest';
import { claimLocalData, clearPersonalLocalData, mergeLegacyProgress, takeLegacyProgress } from './localData';

describe('datos locales personales', () => {
  beforeEach(() => localStorage.clear());

  it('otra cuenta en el mismo equipo no hereda desafíos, píldoras ni hitos', () => {
    claimLocalData('ana');
    localStorage.setItem('desafios', '{"x":1}');
    localStorage.setItem('pildoras-leidas', '["a"]');
    localStorage.setItem('tema', 'dark');
    claimLocalData('ana');
    expect(localStorage.getItem('desafios')).not.toBeNull();
    claimLocalData('beto');
    expect(localStorage.getItem('desafios')).toBeNull();
    expect(localStorage.getItem('pildoras-leidas')).toBeNull();
    expect(localStorage.getItem('tema')).toBe('dark');
  });

  it('datos sin dueño (versión anterior) se descartan al entrar una cuenta', () => {
    localStorage.setItem('eudaimonia-hitos', '{}');
    claimLocalData('ana');
    expect(localStorage.getItem('eudaimonia-hitos')).toBeNull();
  });

  it('cerrar sesión borra las comodidades personales', () => {
    claimLocalData('ana');
    localStorage.setItem('eudaimonia-resume', '{}');
    clearPersonalLocalData();
    expect(localStorage.getItem('eudaimonia-resume')).toBeNull();
  });

  it('pasa a la cuenta lo que se guardaba sólo en el dispositivo, una sola vez', () => {
    claimLocalData('ana');
    localStorage.setItem('pildoras-leidas', '["a","b"]');
    localStorage.setItem('desafios', '{"siete":{"start":"2026-10-01","manual":["2026-10-02"]}}');
    localStorage.setItem('eudaimonia-hitos', '{"ana":["h1"],"otra":["h9"]}');
    const legacy = takeLegacyProgress('ana');
    expect(legacy).toEqual({ pillsRead: ['a', 'b'], challenges: { siete: { start: '2026-10-01', manual: ['2026-10-02'] } }, milestones: ['h1'] });
    expect(localStorage.getItem('pildoras-leidas')).toBeNull();
    expect(takeLegacyProgress('ana')).toBeNull();
  });

  it('une sin perder nada de la cuenta y la cuenta gana si el desafío empezó en otra fecha', () => {
    const current = { pillsRead: ['b', 'c'], challenges: { siete: { start: '2026-10-05', manual: [] }, otro: { start: '2026-10-01', manual: ['2026-10-01'] } }, milestones: [] };
    const legacy = { pillsRead: ['a', 'b'], challenges: { siete: { start: '2026-10-01', manual: ['2026-10-02'] }, otro: { start: '2026-10-01', manual: ['2026-10-03'] }, nuevo: { start: '2026-10-10', manual: [] } }, milestones: ['h1'] };
    const patch = mergeLegacyProgress(current, legacy);
    expect(patch.pillsRead).toEqual(['b', 'c', 'a']);
    expect(patch.milestones).toEqual(['h1']);
    expect(patch.challenges).toEqual({ siete: { start: '2026-10-05', manual: [] }, otro: { start: '2026-10-01', manual: ['2026-10-01', '2026-10-03'] }, nuevo: { start: '2026-10-10', manual: [] } });
    expect(mergeLegacyProgress(current, { pillsRead: ['b'], challenges: {}, milestones: [] })).toEqual({});
  });
});
