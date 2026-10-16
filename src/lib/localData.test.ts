// @vitest-environment jsdom
import { beforeEach, describe, expect, it } from 'vitest';
import { claimLocalData, clearPersonalLocalData } from './localData';

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
});
