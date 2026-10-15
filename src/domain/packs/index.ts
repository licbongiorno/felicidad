import type { ContentPack, PracticeMeta, Pill } from './types';
import { SOLUCIONES_NARRATIVA_PACK } from './soluciones-narrativa';
import { METACOGNICION_VINCULOS_PACK } from './metacognicion-vinculos';
import { SUENO_ACTIVACION_PACK } from './sueno-activacion';
import { ETAPAS_VINCULOS_PACK } from './etapas-vinculos';
import { SALUD_TRABAJO_CRIANZA_PACK } from './salud-trabajo-crianza';

/** Todos los paquetes de contenido. Para sumar uno: crear el archivo y agregarlo aquí. */
export const PACKS: ContentPack[] = [SOLUCIONES_NARRATIVA_PACK, METACOGNICION_VINCULOS_PACK, SUENO_ACTIVACION_PACK, ETAPAS_VINCULOS_PACK, SALUD_TRABAJO_CRIANZA_PACK];

export const PACK_PRACTICES = PACKS.flatMap((p) => p.practices);
export const PACK_META: Record<string, PracticeMeta> = Object.assign({}, ...PACKS.map((p) => p.meta));
export const PACK_ARTICLES = PACKS.flatMap((p) => p.articles);
export const PACK_PROGRAMS = PACKS.flatMap((p) => p.programs);
export const PACK_PILLS: Pill[] = PACKS.flatMap((p) => p.pills);
export const PACK_KID_GUIDES = PACKS.flatMap((p) => p.kidGuides ?? []);
export const PACK_GLOSSARY = PACKS.flatMap((p) => p.glossary ?? []);
