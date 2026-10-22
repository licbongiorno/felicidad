import { DEMO_MODE } from '@/lib/demo';
import approved from './approved.json';

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
 * Para aprobar elementos: `APPROVE_KEYS=practica:x,articulo:y npm run approve` (o sin
 * APPROVE_KEYS para aprobar todo lo pendiente) y anotarlo en docs/CONTENIDO-CHANGELOG.md.
 * Para revocar: `APPROVE_MODE=revoke APPROVE_KEYS=... npm run approve`.
 */

export type ReviewStatus = 'borrador' | 'pendiente' | 'revisado';

export type ContentKind = 'practica' | 'antidoto' | 'diario' | 'articulo' | 'instrumento' | 'herramienta' | 'programa' | 'infantil' | 'guia-familia' | 'pildora' | 'cuento' | 'lectura-facil';

export interface ReviewRecord {
  version: number;
  status: ReviewStatus;
  evidenceCheckedAt: string; // YYYY-MM-DD
  reviewedBy?: string;
  reviewedAt?: string;
  note?: string;
}

/** Última verificación completa de referencias contra Crossref (263/263 DOI correctos, paquetes incluidos). */
export const EVIDENCE_LAST_CHECKED = '2026-10-17';

/** Quién firma las aprobaciones clínicas. */
export const CLINICAL_REVIEWER = 'Responsable clínico (licbongiorno)';

/**
 * Elementos aprobados, con la huella de su contenido y la fecha (approved.json). Lo que no
 * está en la lista —contenido nuevo— queda `pendiente`. Si un elemento aprobado cambia, un
 * test lo detecta y obliga a volver a aprobarlo o a revocar la aprobación (npm run approve).
 */
export const APPROVED: Record<string, { hash: string; at: string }> = approved;

const DEFAULT_RECORD: ReviewRecord = { version: 1, status: 'pendiente', evidenceCheckedAt: EVIDENCE_LAST_CHECKED };

/** Excepciones a la ficha por defecto. Clave: `${tipo}:${id}`. */
export const REVIEW_OVERRIDES: Record<string, Partial<ReviewRecord>> = {
  // Sin publicar por un motivo que no es clínico: falta la licencia de uso.
  'instrumento:isi': { status: 'borrador', reviewedBy: undefined, reviewedAt: undefined, note: 'ISI: tiene derechos de autor (Morin) y su uso en una app requiere licencia de Mapi Research Trust. Verificar también la redacción con la versión española validada.' },
  // Sin publicar hasta que estén desplegadas las reglas de Firestore que aceptan 'bigfive'. Al publicarlas, quitar esta línea.
  'instrumento:bigfive': { status: 'borrador', reviewedBy: undefined, reviewedAt: undefined, note: 'Mini-IPIP: falta publicar las reglas de Firestore que aceptan sus respuestas.' },
};

export function reviewOf(kind: ContentKind, id: string): ReviewRecord {
  const key = `${kind}:${id}`;
  const ok = APPROVED[key];
  const base: ReviewRecord = ok ? { ...DEFAULT_RECORD, status: 'revisado', reviewedBy: CLINICAL_REVIEWER, reviewedAt: ok.at } : DEFAULT_RECORD;
  return { ...base, ...REVIEW_OVERRIDES[key] };
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
