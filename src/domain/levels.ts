/**
 * Nivel de dificultad y prerrequisitos de cada práctica (A5).
 * Evita que alguien empiece por las prácticas más exigentes o con más riesgo de
 * desestabilizar (p. ej. conciencia no dual, tonglen) sin la base atencional o afectiva.
 */

import { PACK_META_INDEX as PACK_META } from './practiceIndex';

export type Level = 'iniciacion' | 'intermedio' | 'avanzado';

export const LEVEL_LABEL: Record<Level, string> = {
  iniciacion: 'Iniciación',
  intermedio: 'Intermedio',
  avanzado: 'Avanzado',
};

export interface LevelInfo {
  level: Level;
  /** Prácticas recomendadas antes (al menos una sesión completa de cada una). */
  prerequisites?: string[];
}

export const PRACTICE_LEVELS: Record<string, LevelInfo> = {
  // Herramientas rápidas
  'espacio-tres-minutos': { level: 'iniciacion' },
  'pausa-stop': { level: 'iniciacion' },
  'mano-en-el-pecho': { level: 'iniciacion' },
  'plantas-de-los-pies': { level: 'iniciacion' },
  'tipp': { level: 'iniciacion' },
  'cinco-sentidos': { level: 'iniciacion' },
  // Atencionales
  'atencion-respiracion': { level: 'iniciacion' },
  'escaneo-corporal': { level: 'iniciacion' },
  'respiracion-resonante': { level: 'iniciacion' },
  'suspiro-ciclico': { level: 'iniciacion' },
  'atencion-sonidos': { level: 'iniciacion' },
  'caminar-atencion': { level: 'iniciacion' },
  'mente-sabia': { level: 'iniciacion' },
  'relajacion-progresiva': { level: 'iniciacion' },
  // Constructivas
  'saboreo': { level: 'iniciacion' },
  'tres-cosas-buenas': { level: 'iniciacion' },
  'gratitud-contemplativa': { level: 'iniciacion' },
  'pausa-autocompasion': { level: 'iniciacion' },
  'brujula-valores': { level: 'iniciacion' },
  'mejor-yo-posible': { level: 'iniciacion' },
  'fortalezas': { level: 'iniciacion' },
  'activacion-conductual': { level: 'iniciacion' },
  'resolucion-problemas': { level: 'iniciacion' },
  'dear-man': { level: 'iniciacion' },
  'pros-y-contras': { level: 'iniciacion' },
  'please': { level: 'iniciacion' },
  'give-fast': { level: 'iniciacion' },
  'habito-minimo': { level: 'iniciacion' },
  'revision-semanal': { level: 'iniciacion' },
  'cinco-minutos': { level: 'iniciacion' },
  'decidir-entre-opciones': { level: 'iniciacion' },
  'ritmo-calmante': { level: 'iniciacion' },
  'accion-comprometida': { level: 'intermedio', prerequisites: ['brujula-valores'] },
  'yo-compasivo': { level: 'intermedio', prerequisites: ['ritmo-calmante'] },
  'accion-opuesta': { level: 'intermedio' },
  'amor-altruista': { level: 'intermedio' },
  'regocijo-empatico': { level: 'intermedio', prerequisites: ['amor-altruista'] },
  'ecuanimidad': { level: 'intermedio', prerequisites: ['amor-altruista'] },
  'perdon-reach': { level: 'intermedio', prerequisites: ['pausa-autocompasion'] },
  'tonglen': { level: 'avanzado', prerequisites: ['amor-altruista', 'pausa-autocompasion'] },
  // Deconstructivas
  'pajaros-en-el-cielo': { level: 'intermedio', prerequisites: ['atencion-respiracion'] },
  'anotacion-mental': { level: 'intermedio', prerequisites: ['atencion-respiracion'] },
  'surfear-impulso': { level: 'intermedio', prerequisites: ['atencion-respiracion'] },
  'hacer-espacio': { level: 'intermedio', prerequisites: ['escaneo-corporal'] },
  'comprobar-hechos': { level: 'intermedio' },
  'persona-y-sombra': { level: 'intermedio' },
  'punto-de-eleccion': { level: 'intermedio', prerequisites: ['brujula-valores'] },
  'linea-de-vida': { level: 'intermedio' },
  'adulto-sano': { level: 'intermedio', prerequisites: ['pausa-autocompasion'] },
  'aceptacion-radical': { level: 'intermedio', prerequisites: ['mente-sabia'] },
  'observador': { level: 'avanzado', prerequisites: ['pajaros-en-el-cielo'] },
  'conciencia-pura': { level: 'avanzado', prerequisites: ['atencion-respiracion', 'pajaros-en-el-cielo'] },
  // Logoterapia, humanista y Gestalt
  'que-me-pide-la-vida': { level: 'iniciacion' },
  'lo-vivido-queda': { level: 'iniciacion' },
  'necesidades-que-pido': { level: 'iniciacion' },
  'darse-cuenta': { level: 'iniciacion' },
  'derreflexion': { level: 'iniciacion' },
  'tres-caminos-sentido': { level: 'intermedio', prerequisites: ['que-me-pide-la-vida'] },
  'escucharme-sin-juzgar': { level: 'intermedio', prerequisites: ['escaneo-corporal'] },
  'yo-real-yo-ideal': { level: 'intermedio', prerequisites: ['pausa-autocompasion'] },
  'intencion-paradojica': { level: 'intermedio', prerequisites: ['derreflexion'] },
  'polaridades': { level: 'intermedio', prerequisites: ['pausa-autocompasion'] },
  'asuntos-pendientes': { level: 'intermedio', prerequisites: ['pausa-autocompasion'] },
  'silla-vacia': { level: 'avanzado', prerequisites: ['asuntos-pendientes', 'pausa-autocompasion'] },
  ...Object.fromEntries(Object.entries(PACK_META).map(([id, m]) => [id, { level: m.level, prerequisites: m.prerequisites }])),
};

export function levelOf(practiceId: string): LevelInfo {
  return PRACTICE_LEVELS[practiceId] ?? { level: 'iniciacion' };
}

/** Prerrequisitos aún no practicados (lista vacía = listo). */
export function missingPrerequisites(practiceId: string, completed: Set<string>): string[] {
  return (levelOf(practiceId).prerequisites ?? []).filter((id) => !completed.has(id));
}
