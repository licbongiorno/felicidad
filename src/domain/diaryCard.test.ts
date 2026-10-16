import { describe, expect, it } from 'vitest';
import { buildWeek, splitSkills, weekStart, weekToCsv } from './diaryCard';
import type { JournalEntry } from './types';

const entry = (id: string, d: Date, values: JournalEntry['values'], type: JournalEntry['type'] = 'tarjeta-diaria'): JournalEntry => ({ id, type, values, createdAt: d });

describe('tarjeta diaria DBT semanal', () => {
  it('la semana empieza el lunes', () => {
    expect(weekStart(new Date(2026, 9, 18, 15)).getDate()).toBe(12); // domingo 18 → lunes 12
    expect(weekStart(new Date(2026, 9, 12, 0, 5)).getDate()).toBe(12);
  });

  it('separa las habilidades escritas a mano', () => {
    expect(splitSkills('TIPP, mente sabia; acción opuesta y DEAR MAN.')).toEqual(['TIPP', 'mente sabia', 'acción opuesta', 'DEAR MAN']);
    expect(splitSkills('')).toEqual([]);
  });

  it('arma siete días con la última tarjeta de cada día, promedios y habilidades más usadas', () => {
    const journal = [
      entry('a', new Date(2026, 9, 12, 21), { tristeza: 6, alegria: 2, habilidades: 'TIPP' }),
      entry('b', new Date(2026, 9, 12, 23), { tristeza: 4, alegria: 4, habilidades: 'TIPP, mente sabia', conducta: 'Grité' }),
      entry('c', new Date(2026, 9, 14, 22), { tristeza: '2', habilidades: 'tipp' }),
      entry('d', new Date(2026, 9, 14, 22), { resumen: 'otra plantilla' }, 'tres-cosas'),
      entry('e', new Date(2026, 9, 20, 22), { tristeza: 9 }), // semana siguiente
    ];
    const w = buildWeek(journal, new Date(2026, 9, 15));
    expect(w.days).toHaveLength(7);
    expect(w.filled).toBe(2);
    expect(w.days[0].entry?.id).toBe('b');
    expect(w.days[1].entry).toBeNull();
    expect(w.averages.tristeza).toBe(3);
    expect(w.averages.ira).toBeNull();
    expect(w.skillCounts[0]).toEqual({ skill: 'TIPP', days: 2 });
    expect(w.behaviorDays).toBe(1);
  });

  it('exporta una fila por día y escapa comas y comillas', () => {
    const w = buildWeek([entry('a', new Date(2026, 9, 12, 21), { tristeza: 5, resumen: 'Bien, "tranquilo"' })], new Date(2026, 9, 12));
    const lines = weekToCsv(w).split('\n');
    expect(lines).toHaveLength(8);
    expect(lines[1]).toContain('2026-10-12,5');
    expect(lines[1]).toContain('"Bien, ""tranquilo"""');
  });
});
