import type { EvidenceLevel, PracticeFamily, SkillKey } from './types';
import type { PracticeMeta } from './packs/types';
import practiceIndex from './generated/practice-index.json';
import packMeta from './generated/pack-meta.json';
import programIndex from './generated/program-index.json';
import kidGuideIndex from './generated/kid-guide-index.json';

/**
 * Índices livianos del catálogo, generados a partir del contenido completo
 * (`npm run gen:index`; generated.test.ts comprueba que estén al día).
 *
 * Los componentes de cliente que sólo muestran títulos, familias o duraciones importan
 * esto en lugar de `practices.ts` o `packs/`: así no descargan el texto de todas las
 * prácticas, artículos y píldoras (más de 1 MB).
 */
export interface PracticeSummary {
  id: string;
  title: string;
  family: PracticeFamily;
  skills: SkillKey[];
  summary: string;
  evidenceLevel: EvidenceLevel;
  /** Duración total de los pasos, en segundos. */
  durationSec: number;
  micro?: boolean;
  /** true si la práctica tiene precauciones. */
  cautions?: boolean;
}

export const PRACTICE_INDEX = practiceIndex as PracticeSummary[];

export const PRACTICE_SUMMARY_BY_ID: Record<string, PracticeSummary> = Object.fromEntries(PRACTICE_INDEX.map((p) => [p.id, p]));

/** Programas: lo justo para listarlos y elegir la primera práctica. */
export interface ProgramSummary {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  rhythm: string;
  weeks: { practiceIds: string[] }[];
}

export const PROGRAM_INDEX = programIndex as ProgramSummary[];

/** Guías para familias: lo justo para listarlas. */
export const KID_GUIDE_INDEX = kidGuideIndex as { id: string; title: string; subtitle: string; readingMin: number }[];

/** Metadatos de las prácticas de los paquetes (nivel, enfoques, módulo, riesgo). */
export const PACK_META_INDEX = packMeta as Record<string, PracticeMeta>;
