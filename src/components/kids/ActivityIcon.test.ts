import { describe, expect, it } from 'vitest';
import { activitiesFor, AGE_BANDS, KID_SKILLS } from '@/domain/kids';
import { glyphFor } from './ActivityIcon';

describe('íconos de actividades', () => {
  it('cada franja tiene íconos variados y, dentro de cada habilidad, no todos iguales', () => {
    for (const b of AGE_BANDS) {
      const list = activitiesFor(b.id);
      expect(new Set(list.map(glyphFor)).size, b.id).toBeGreaterThanOrEqual(Math.min(10, list.length / 2));
      for (const sk of KID_SKILLS) {
        const same = list.filter((a) => a.skill === sk.id);
        if (same.length >= 3) expect(new Set(same.map(glyphFor)).size, `${b.id} ${sk.id}`).toBeGreaterThan(1);
      }
    }
  });
});
