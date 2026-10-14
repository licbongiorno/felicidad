/**
 * Modelo de dominio de Habilidades Psicológicas.
 * Este módulo no depende de React ni de Firebase: es la "verdad clínica" de la app.
 */

/**
 * Familias de práctica según Dahl, Lutz & Davidson (2015), Trends Cogn Sci 19(9):515-523.
 * - attentional: regulación de la atención y meta-conciencia.
 * - constructive: cultivo de cualidades (benevolencia, compasión, gratitud).
 * - deconstructive: indagación/insight; desarma la fusión con pensamientos y yo narrativo.
 */
export type PracticeFamily = 'attentional' | 'constructive' | 'deconstructive';

export type SkillKey = 'attention' | 'compassion' | 'resilience';

/**
 * Grado de respaldo empírico, declarado de forma explícita en cada contenido.
 * - robusta: metaanálisis o múltiples ECA convergentes.
 * - moderada: ECA aislados o metaanálisis con heterogeneidad/sesgo relevante.
 * - preliminar: estudios pequeños, transversales o de laboratorio.
 * - contemplativa: fundamento en la tradición contemplativa con evidencia sólo indirecta.
 */
export type EvidenceLevel = 'robusta' | 'moderada' | 'preliminar' | 'contemplativa';

export interface Reference {
  citation: string;
  doi?: string;
  note?: string;
}

export type StepKind = 'instruction' | 'breath' | 'silence' | 'reflection';

export interface GuidedStep {
  title: string;
  instruction: string;
  durationSec: number;
  kind?: StepKind;
}

export interface Practice {
  id: string;
  title: string;
  family: PracticeFamily;
  skills: SkillKey[];
  summary: string;
  mechanism: string;
  evidenceLevel: EvidenceLevel;
  evidence: Reference[];
  steps: GuidedStep[];
  cautions?: string;
  /** Explicación extendida: qué ocurre en la mente durante la práctica. */
  howItWorks: string[];
  tips: string[];
  obstacles: { q: string; a: string }[];
  /** Herramienta rápida (1–3 min) para usar en el momento. */
  micro?: boolean;
}

export type AfflictiveEmotionId =
  | 'ira'
  | 'envidia'
  | 'apego'
  | 'autocritica'
  | 'ansiedad'
  | 'rumiacion'
  | 'resentimiento'
  | 'desanimo'
  | 'tristeza'
  | 'culpa'
  | 'soledad'
  | 'preocupacion'
  | 'duelo'
  | 'agobio'
  | 'bloqueo'
  | 'panico'
  | 'verguenza'
  | 'miedo'
  | 'celos'
  | 'frustracion'
  | 'vacio'
  | 'inseguridad';

export interface Antidote {
  emotionId: AfflictiveEmotionId;
  emotionLabel: string;
  /** Marcadores fenomenológicos para ayudar a reconocer la emoción (etiquetado afectivo). */
  markers: string;
  antidoteName: string;
  /** Por qué el estado cultivado es incompatible con el aflictivo. */
  incompatibility: string;
  evidenceLevel: EvidenceLevel;
  evidence: Reference[];
  steps: GuidedStep[];
  /** Práctica del Gimnasio que entrena el antídoto fuera del momento de crisis. */
  trainingPracticeId: string;
  /** Por qué funciona, en lenguaje claro y sin exagerar la evidencia. */
  science: string[];
  /** Cuándo este antídoto no es la herramienta adecuada. */
  whenNot: string;
}

export type PermaKey = 'P' | 'E' | 'R' | 'M' | 'A';

// ---------- Registros persistidos (forma de dominio, no de Firestore) ----------

export type SessionSource = 'gym' | 'antidote';

export interface SessionRecord {
  id: string;
  practiceId: string;
  family: PracticeFamily;
  skills: SkillKey[];
  source: SessionSource;
  startedAt: Date;
  durationSec: number;
  completed: boolean;
  /** Ánimo autoinformado 0–10, antes y después (opcional). */
  moodPre: number | null;
  moodPost: number | null;
  /** Zona horaria IANA donde se hizo el registro: fija el "día vivido" aunque luego se viaje. */
  tz?: string | null;
  /** Versión del contenido (guion de la práctica) usada en esta sesión. */
  contentVersion?: number | null;
}

export interface AfflictionLog {
  id: string;
  emotionId: AfflictiveEmotionId;
  antidoteId: string;
  intensityPre: number;
  intensityPost: number | null;
  trigger: string | null;
  stabilizationUsed: boolean;
  createdAt: Date;
  tz?: string | null;
  contentVersion?: number | null;
}

export interface DailyCheckin {
  /** Clave de fecha local YYYY-MM-DD; también es el id del documento. */
  date: string;
  mood: number;
  perma: Partial<Record<PermaKey, number>> | null;
  updatedAt: Date;
}

export type JournalType =
  | 'tres-cosas'
  | 'defusion'
  | 'saboreo'
  | 'valores'
  | 'escritura-expresiva'
  | 'carta-gratitud'
  | 'mejor-yo'
  | 'reestructuracion'
  | 'carta-compasiva'
  | 'activacion'
  | 'preocupacion'
  | 'perdon'
  | 'intencion'
  | 'resolucion-problemas'
  | 'diario-sueno'
  | 'experimento'
  | 'escalera-exposicion'
  | 'plan-seguridad'
  | 'conversacion'
  | 'tarjeta-diaria'
  | 'analisis-cadena'
  | 'reflexion-carta';

export type JournalValue = string | number;

export interface JournalEntry {
  id: string;
  type: JournalType;
  values: Record<string, JournalValue>;
  createdAt: Date;
  tz?: string | null;
}

export type InstrumentId = 'who5' | 'gad7' | 'phq9' | 'ders16' | 'isi' | 'pss10';

export interface Assessment {
  id: string;
  instrument: InstrumentId;
  /** Respuestas crudas por ítem, en el orden del instrumento. */
  items: number[];
  /** Puntuación normalizada del instrumento (WHO-5: 0–100). */
  score: number;
  createdAt: Date;
  tz?: string | null;
}

export interface Profile {
  displayName: string | null;
  role: 'patient' | 'clinician';
  consentVersion: string | null;
}
