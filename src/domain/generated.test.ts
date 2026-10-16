import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { PACK_META } from './packs';
import { PRACTICES, totalDurationSec } from './practices';
import type { PracticeSummary, ProgramSummary } from './practiceIndex';
import { PROGRAMS } from './programs';
import { KID_GUIDES } from './kids-guides';

/**
 * Los índices livianos (src/domain/generated/) se derivan del contenido completo.
 * - Modo normal (CI): falla si están desactualizados.
 * - `npm run gen:index`: los regenera.
 */
const dir = (name: string) => fileURLToPath(new URL(`./generated/${name}`, import.meta.url));

function build(): Record<string, unknown> {
  const practices: PracticeSummary[] = PRACTICES.map((p) => ({
    id: p.id,
    title: p.title,
    family: p.family,
    skills: p.skills,
    summary: p.summary,
    evidenceLevel: p.evidenceLevel,
    durationSec: totalDurationSec(p.steps),
    ...(p.micro ? { micro: true } : {}),
    ...(p.cautions ? { cautions: true } : {}),
  }));
  const programs: ProgramSummary[] = PROGRAMS.map((p) => ({
    id: p.id,
    title: p.title,
    subtitle: p.subtitle,
    description: p.description,
    rhythm: p.rhythm,
    weeks: p.weeks.map((w) => ({ practiceIds: w.practiceIds })),
  }));
  return { 'practice-index.json': practices, 'pack-meta.json': PACK_META, 'program-index.json': programs,
    'kid-guide-index.json': KID_GUIDES.map((g) => ({ id: g.id, title: g.title, subtitle: g.subtitle, readingMin: g.readingMin })),
  };
}

const serialize = (v: unknown) => `${JSON.stringify(v)}\n`;

describe('índices generados del catálogo', () => {
  const files = build();
  if (process.env.GEN_INDEX) {
    it('regenera los índices', () => {
      for (const [name, value] of Object.entries(files)) writeFileSync(dir(name), serialize(value));
    });
    return;
  }
  for (const [name, value] of Object.entries(files)) {
    it(`${name} está al día (si falla: npm run gen:index)`, () => {
      expect(readFileSync(dir(name), 'utf8')).toBe(serialize(value));
    });
  }
});
