import type { EvidenceLevel, PracticeFamily, SkillKey } from './types';

/** Criterios explícitos (A2). Detalle y razonamiento en Biblioteca › Cómo evaluamos la evidencia. */
export const EVIDENCE_LABEL: Record<EvidenceLevel, { label: string; description: string }> = {
  robusta: {
    label: 'Evidencia robusta',
    description: 'Metaanálisis de ensayos aleatorizados sobre la técnica en un formato comparable al de la app (breve, autoguiado o de práctica repetida).',
  },
  moderada: {
    label: 'Evidencia moderada',
    description: 'Ensayos controlados, o metaanálisis de un formato más intensivo (p. ej. una terapia completa) del que el ejercicio es un componente.',
  },
  preliminar: {
    label: 'Evidencia preliminar',
    description: 'Estudios pequeños, de laboratorio, sin grupo control o un único ensayo sin replicar.',
  },
  contemplativa: {
    label: 'Fundamento contemplativo',
    description: 'Procede de una tradición contemplativa; sólo hay evidencia indirecta de sus mecanismos.',
  },
};

export const FAMILY_LABEL: Record<PracticeFamily, string> = {
  attentional: 'Atencional',
  constructive: 'Constructiva',
  deconstructive: 'Deconstructiva',
};

export const SKILL_LABEL: Record<SkillKey, string> = {
  attention: 'Atención',
  compassion: 'Compasión',
  resilience: 'Resiliencia',
};
