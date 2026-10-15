import { PACK_PILLS } from './packs';
import type { Pill } from './packs/types';

export type { Pill };

/** Píldoras: psicoeducación breve en tarjetas (vienen de los paquetes de contenido). */
export const PILLS: Pill[] = PACK_PILLS;
export const PILL_BY_ID: Record<string, Pill> = Object.fromEntries(PILLS.map((p) => [p.id, p]));

/** Minutos aproximados de lectura (unas 180 palabras por minuto, mínimo 1). */
export const pillMinutes = (p: Pill): number => Math.max(1, Math.round(p.slides.reduce((n, s) => n + s.text.split(/\s+/).length, 0) / 180));
