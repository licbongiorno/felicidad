import type { JournalType } from './types';

/**
 * Catálogo clínico: enfoque terapéutico de origen y nivel de riesgo de cada contenido.
 *
 * Enfoque: indica de qué corriente viene una técnica y para qué sirve, sin presentar todo
 * el catálogo como un tratamiento validado (la evidencia de cada técnica está en su ficha).
 *
 * Nivel de riesgo (clasificación interna de la app, no una escala clínica validada):
 *   1 · Uso autónomo habitual: psicoeducación, gratitud, valores, hábitos, atención sencilla.
 *   2 · Uso con precauciones: puede aumentar la activación emocional (recuerdos dolorosos,
 *       vergüenza, conflictos vinculares, exposición, prácticas sin anclaje). Pide leer las
 *       precauciones antes de empezar y ofrece una alternativa más segura.
 *   3 · Atención clínica o emergencia: no se automatiza. La app sólo facilita el acceso a
 *       ayuda humana (botón «Ayuda» en todas las pantallas, plan de seguridad).
 */

export type Approach = 'dbt' | 'tcc' | 'act' | 'cft' | 'mindfulness' | 'positiva' | 'contemplativa' | 'relajacion' | 'escritura';

export const APPROACH_LABEL: Record<Approach, string> = {
  dbt: 'DBT',
  tcc: 'TCC',
  act: 'ACT',
  cft: 'Compasión (CFT)',
  mindfulness: 'Mindfulness',
  positiva: 'Psicología positiva',
  contemplativa: 'Contemplativa',
  relajacion: 'Relajación',
  escritura: 'Escritura terapéutica',
};

export const APPROACH_DESCRIPTION: Record<Approach, string> = {
  dbt: 'Terapia dialéctico-conductual: regulación emocional, tolerancia al malestar, conciencia plena y relaciones.',
  tcc: 'Terapia cognitivo-conductual: revisar pensamientos, experimentos, exposición y resolución de problemas.',
  act: 'Terapia de aceptación y compromiso: aceptación, defusión, valores y acción comprometida.',
  cft: 'Terapia centrada en la compasión: trabajar la autocrítica y cultivar una actitud compasiva.',
  mindfulness: 'Atención plena (incluye MBCT): entrenar la atención y ver los patrones de la mente.',
  positiva: 'Psicología positiva: fortalezas, gratitud, sentido y relaciones positivas.',
  contemplativa: 'Tradición contemplativa: prácticas de cultivo mental con evidencia sobre todo indirecta.',
  relajacion: 'Técnicas fisiológicas de relajación y respiración.',
  escritura: 'Escritura expresiva y estructurada para ordenar la experiencia.',
};

export const PRACTICE_APPROACHES: Record<string, Approach[]> = {
  'espacio-tres-minutos': ['mindfulness'],
  'pausa-stop': ['mindfulness', 'dbt'],
  'mano-en-el-pecho': ['cft'],
  'plantas-de-los-pies': ['mindfulness'],
  tipp: ['dbt'],
  'cinco-sentidos': ['dbt'],
  'atencion-respiracion': ['mindfulness'],
  'escaneo-corporal': ['mindfulness'],
  'respiracion-resonante': ['relajacion'],
  'suspiro-ciclico': ['relajacion'],
  'amor-altruista': ['contemplativa'],
  'pausa-autocompasion': ['cft'],
  tonglen: ['contemplativa'],
  saboreo: ['positiva'],
  'tres-cosas-buenas': ['positiva'],
  'mejor-yo-posible': ['positiva'],
  fortalezas: ['positiva'],
  'brujula-valores': ['act'],
  'pajaros-en-el-cielo': ['act', 'mindfulness'],
  'anotacion-mental': ['mindfulness'],
  'conciencia-pura': ['contemplativa'],
  'atencion-sonidos': ['mindfulness'],
  'caminar-atencion': ['mindfulness'],
  'relajacion-progresiva': ['relajacion'],
  'gratitud-contemplativa': ['positiva', 'contemplativa'],
  'regocijo-empatico': ['contemplativa'],
  ecuanimidad: ['contemplativa'],
  'perdon-reach': ['positiva'],
  'activacion-conductual': ['tcc'],
  observador: ['act'],
  'surfear-impulso': ['mindfulness'],
  'resolucion-problemas': ['tcc'],
  'hacer-espacio': ['act'],
  'accion-opuesta': ['dbt'],
  'dear-man': ['dbt', 'tcc'],
  'mente-sabia': ['dbt'],
  'pros-y-contras': ['dbt'],
  'aceptacion-radical': ['dbt'],
  'comprobar-hechos': ['dbt', 'tcc'],
  please: ['dbt'],
  'give-fast': ['dbt'],
};

export const JOURNAL_APPROACHES: Partial<Record<JournalType, Approach[]>> = {
  'tres-cosas': ['positiva'],
  defusion: ['act'],
  saboreo: ['positiva'],
  valores: ['act'],
  'escritura-expresiva': ['escritura'],
  'carta-gratitud': ['positiva'],
  'mejor-yo': ['positiva'],
  reestructuracion: ['tcc'],
  'carta-compasiva': ['cft'],
  activacion: ['tcc'],
  preocupacion: ['tcc'],
  perdon: ['positiva'],
  intencion: ['tcc'],
  'resolucion-problemas': ['tcc'],
  'diario-sueno': ['tcc'],
  experimento: ['tcc'],
  'escalera-exposicion': ['tcc'],
  conversacion: ['dbt', 'tcc'],
  'tarjeta-diaria': ['dbt'],
  'analisis-cadena': ['dbt'],
};

// ---------------------------------------------------------------- nivel de riesgo

export type RiskLevel = 1 | 2;

export const RISK_LABEL: Record<RiskLevel, string> = {
  1: 'Uso autónomo',
  2: 'Con precauciones',
};

/**
 * Contenidos de nivel 2 y su alternativa más segura (práctica anclada o de menor
 * activación) para quien prefiera no hacerlo ahora.
 */
export const PRACTICE_RISK: Record<string, { level: RiskLevel; alternative: string }> = {
  tonglen: { level: 2, alternative: 'amor-altruista' },
  'conciencia-pura': { level: 2, alternative: 'atencion-respiracion' },
  observador: { level: 2, alternative: 'pajaros-en-el-cielo' },
  'perdon-reach': { level: 2, alternative: 'pausa-autocompasion' },
  'aceptacion-radical': { level: 2, alternative: 'mente-sabia' },
  'hacer-espacio': { level: 2, alternative: 'escaneo-corporal' },
};

export const JOURNAL_RISK: Partial<Record<JournalType, RiskLevel>> = {
  'escritura-expresiva': 2,
  'escalera-exposicion': 2,
  perdon: 2,
  'analisis-cadena': 2,
};

export const practiceRisk = (id: string): RiskLevel => PRACTICE_RISK[id]?.level ?? 1;
export const journalRisk = (type: JournalType): RiskLevel => JOURNAL_RISK[type] ?? 1;
export const practiceApproaches = (id: string): Approach[] => PRACTICE_APPROACHES[id] ?? [];
