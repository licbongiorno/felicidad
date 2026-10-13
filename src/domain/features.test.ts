import { describe, expect, it } from 'vitest';
import { availableVariants, scaleSteps } from './durations';
import { freeTimerSteps } from './freeTimer';
import { antidoteEffects, dayPart, practiceEffects, timeOfDayEffects } from './insights';
import { PRACTICE_BY_ID, PRACTICES, totalDurationSec } from './practices';
import type { AfflictionLog, SessionRecord } from './types';

describe('duración ajustable', () => {
  const metta = PRACTICE_BY_ID['amor-altruista'].steps; // ~12 min

  it('la versión estándar es el guion original', () => {
    expect(scaleSteps(metta, 'estandar')).toBe(metta);
  });

  it('breve ≈ 5 min y extendida ≈ 20 min, conservando el número y orden de pasos', () => {
    const breve = scaleSteps(metta, 'breve');
    const ext = scaleSteps(metta, 'extendida');
    expect(breve).toHaveLength(metta.length);
    expect(breve.map((s) => s.title)).toEqual(metta.map((s) => s.title));
    expect(Math.abs(totalDurationSec(breve) - 300)).toBeLessThanOrEqual(60);
    expect(Math.abs(totalDurationSec(ext) - 1200)).toBeLessThanOrEqual(60);
  });

  it('ningún paso queda por debajo de 20 s y todos son múltiplos de 5', () => {
    for (const p of PRACTICES) {
      for (const s of scaleSteps(p.steps, 'breve')) {
        expect(s.durationSec).toBeGreaterThanOrEqual(20);
        expect(s.durationSec % 5).toBe(0);
      }
    }
  });

  it('sólo ofrece variantes que cambian la duración de forma significativa', () => {
    expect(availableVariants([{ title: 'a', instruction: 'x', durationSec: 300 }])).toEqual(['estandar', 'extendida']);
    expect(availableVariants([{ title: 'a', instruction: 'x', durationSec: 1500 }])).toEqual(['breve', 'estandar']);
    expect(availableVariants(metta)).toEqual(['breve', 'estandar', 'extendida']);
  });
});

describe('temporizador libre', () => {
  it('divide la duración en intervalos con una preparación inicial', () => {
    const steps = freeTimerSteps(20, 5);
    expect(steps[0].title).toBe('Preparación');
    expect(steps.slice(1)).toHaveLength(4);
    expect(totalDurationSec(steps.slice(1))).toBe(20 * 60);
  });

  it('sin intervalos es un único bloque', () => {
    const steps = freeTimerSteps(10, null);
    expect(steps).toHaveLength(2);
    expect(steps[1].durationSec).toBe(600);
  });

  it('el último intervalo se recorta si la duración no es múltiplo', () => {
    const steps = freeTimerSteps(15, 10);
    expect(steps.slice(1).map((s) => s.durationSec)).toEqual([600, 300]);
  });

  it('ignora un intervalo igual o mayor que la duración', () => {
    expect(freeTimerSteps(5, 5)).toHaveLength(2);
  });
});

describe('qué te funciona', () => {
  const sess = (practiceId: string, pre: number | null, post: number | null, hour = 9): SessionRecord => {
    const d = new Date(2026, 9, 10, hour);
    return { id: Math.random().toString(), practiceId, family: 'attentional', skills: ['attention'], source: 'gym', startedAt: d, durationSec: 600, completed: true, moodPre: pre, moodPost: post };
  };

  it('promedia el cambio de ánimo por práctica, exige n mínimo y ordena de mejor a peor', () => {
    const rows = practiceEffects([
      sess('saboreo', 4, 7),
      sess('saboreo', 5, 6),
      sess('amor-altruista', 5, 5),
      sess('amor-altruista', 4, 5),
      sess('tonglen', 3, 9), // n=1: excluida
      sess('saboreo', null, 8), // sin "antes": excluida
    ]);
    expect(rows.map((r) => [r.key, r.meanDelta, r.n])).toEqual([
      ['saboreo', 2, 2],
      ['amor-altruista', 0.5, 2],
    ]);
    expect(rows[0].label).toBe('Saboreo deliberado');
  });

  it('para antídotos, más negativo es mejor', () => {
    const log = (emotionId: AfflictionLog['emotionId'], pre: number, post: number | null): AfflictionLog => ({
      id: Math.random().toString(), emotionId, antidoteId: '', intensityPre: pre, intensityPost: post, trigger: null, stabilizationUsed: false, createdAt: new Date(),
    });
    const rows = antidoteEffects([log('ira', 8, 4), log('ira', 6, 4), log('ansiedad', 7, 6), log('ansiedad', 5, 5)]);
    expect(rows.map((r) => r.key)).toEqual(['ira', 'ansiedad']);
    expect(rows[0].meanDelta).toBe(-3);
  });

  it('clasifica el momento del día', () => {
    expect(dayPart(new Date(2026, 0, 1, 7))).toBe('mañana');
    expect(dayPart(new Date(2026, 0, 1, 15))).toBe('tarde');
    expect(dayPart(new Date(2026, 0, 1, 23))).toBe('noche');
    expect(dayPart(new Date(2026, 0, 1, 2))).toBe('noche');
    const rows = timeOfDayEffects([sess('x', 4, 6, 8), sess('x', 4, 8, 9), sess('x', 5, 5, 21)]);
    expect(rows).toEqual([{ key: 'mañana', label: 'Mañana', meanDelta: 3, n: 2 }]);
  });
});
