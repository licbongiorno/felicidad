import { DEMO_MODE } from '@/lib/demo';

/**
 * Gobernanza clínica del contenido (ficha de revisión por elemento).
 *
 * - status:
 *     'borrador'   → contenido sensible que requiere decisión clínica. NO se muestra a usuarios
 *                    reales; sí en modo demo (con distintivo) para poder revisarlo.
 *     'pendiente'  → publicado, pendiente de revisión clínica formal.
 *     'revisado'   → revisado y aprobado por el/la responsable clínico/a.
 * - version: se guarda en cada sesión/registro (E2) para saber qué guion se usó.
 * - evidenceCheckedAt: fecha de la última verificación de referencias (npm run verify:refs).
 *   Un test falla si pasan más de 12 meses (E3): obliga a revisar la evidencia cada año.
 *
 * Para aprobar un elemento: cambiar su status a 'revisado' y completar reviewedBy/reviewedAt
 * en REVIEW_OVERRIDES, y anotar el cambio en docs/CONTENIDO-CHANGELOG.md.
 */

export type ReviewStatus = 'borrador' | 'pendiente' | 'revisado';

export type ContentKind = 'practica' | 'antidoto' | 'diario' | 'articulo' | 'instrumento' | 'herramienta' | 'programa';

export interface ReviewRecord {
  version: number;
  status: ReviewStatus;
  evidenceCheckedAt: string; // YYYY-MM-DD
  reviewedBy?: string;
  reviewedAt?: string;
  note?: string;
}

/** Última verificación completa de referencias contra Crossref (72/72 DOI correctos). */
export const EVIDENCE_LAST_CHECKED = '2026-10-13';

const DEFAULT_RECORD: ReviewRecord = { version: 1, status: 'pendiente', evidenceCheckedAt: EVIDENCE_LAST_CHECKED };

/** Excepciones a la ficha por defecto. Clave: `${tipo}:${id}`. */
export const REVIEW_OVERRIDES: Record<string, Partial<ReviewRecord>> = {
  // Contenido sensible: requiere decisión clínica antes de mostrarse a usuarios reales.
  'herramienta:plan-seguridad': { status: 'borrador', note: 'Plan de seguridad (Stanley-Brown): validar pasos y contactos con el equipo clínico.' },
  'diario:escalera-exposicion': { status: 'borrador', note: 'Exposición autoguiada: definir salvaguardas y criterios de derivación.' },
  'articulo:exposicion-gradual': { status: 'borrador', note: 'Acompaña a la escalera de exposición.' },
  'instrumento:phq9': { status: 'borrador', note: 'PHQ-9: el ítem 9 (ideación suicida) exige un protocolo de respuesta aprobado.' },
};

export function reviewOf(kind: ContentKind, id: string): ReviewRecord {
  return { ...DEFAULT_RECORD, ...REVIEW_OVERRIDES[`${kind}:${id}`] };
}

/** Los borradores sólo se muestran en modo demo o con NEXT_PUBLIC_SHOW_DRAFTS=true. */
export const SHOW_DRAFTS = DEMO_MODE || process.env.NEXT_PUBLIC_SHOW_DRAFTS === 'true';

export function isPublished(kind: ContentKind, id: string): boolean {
  return reviewOf(kind, id).status !== 'borrador' || SHOW_DRAFTS;
}

export const REVIEW_LABEL: Record<ReviewStatus, string> = {
  borrador: 'Borrador · requiere revisión clínica',
  pendiente: 'Revisión clínica pendiente',
  revisado: 'Revisado clínicamente',
};
