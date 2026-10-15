import type { Approach, ModuleId, RiskLevel } from '../catalog';
import type { Level } from '../levels';
import type { Article } from '../library';
import type { Program } from '../programs';
import type { KidGuide } from '../kids-guides';
import type { GlossaryTerm } from '../glossary';
import type { Practice, Reference } from '../types';

/**
 * Paquete de contenido: un tema completo (prácticas con su nivel, enfoque y módulo,
 * artículos, programas, píldoras, guías para familias y glosario) en un solo archivo.
 * packs/index.ts los reúne y cada registro de la app (catálogo, niveles, biblioteca,
 * programas…) los incorpora solo. Así sumar un tema no obliga a tocar archivos comunes.
 */

export interface PracticeMeta {
  level: Level;
  /** Prácticas recomendadas antes (ids existentes). */
  prerequisites?: string[];
  approaches: Approach[];
  /** Módulo del Gimnasio donde aparece. */
  module: ModuleId;
  /** Riesgo 2 = requiere más cuidado; se ofrece una alternativa más suave. */
  risk?: { level: RiskLevel; alternative: string };
}

/** Píldora: psicoeducación breve en tarjetas que se pasan como historias (4 a 7). */
export interface Pill {
  id: string;
  title: string;
  /** Una línea para la tarjeta. */
  subtitle: string;
  slides: { heading: string; text: string }[];
  related?: { practices?: string[]; articles?: string[] };
  references: Reference[];
}

export interface ContentPack {
  id: string;
  practices: Practice[];
  meta: Record<string, PracticeMeta>;
  articles: Article[];
  programs: Program[];
  pills: Pill[];
  kidGuides?: KidGuide[];
  glossary?: GlossaryTerm[];
}

export const emptyPack = (id: string): ContentPack => ({ id, practices: [], meta: {}, articles: [], programs: [], pills: [] });
