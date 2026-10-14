import { ANTIDOTES } from './antidotes';
import { practiceRisk, journalRisk } from './catalog';
import { EVIDENCE_LABEL } from './evidence';
import { reviewOf, type ContentKind, type ReviewRecord } from './governance';
import { INSTRUMENTS } from './instruments';
import { JOURNAL_TEMPLATES } from './journal';
import { ARTICLES } from './library';
import { PRACTICES } from './practices';
import { PROGRAMS } from './programs';

/**
 * Cola de revisión clínica: todo el contenido publicable con su ficha de gobernanza, para
 * que el/la responsable clínico/a lo recorra en /revision. Las decisiones se exportan y se
 * aplican en REVIEW_OVERRIDES (governance.ts): el contenido sigue versionado en el código.
 */

export interface ReviewItem {
  key: string;
  kind: ContentKind;
  id: string;
  title: string;
  href: string;
  record: ReviewRecord;
  evidence?: string;
  risk?: 1 | 2;
}

export const KIND_LABEL: Record<ContentKind, string> = {
  practica: 'Prácticas',
  antidoto: 'Antídotos',
  diario: 'Plantillas del diario',
  articulo: 'Artículos',
  instrumento: 'Evaluaciones',
  herramienta: 'Herramientas',
  programa: 'Programas',
};

const item = (kind: ContentKind, id: string, title: string, href: string, extra: Partial<ReviewItem> = {}): ReviewItem => ({
  key: `${kind}:${id}`,
  kind,
  id,
  title,
  href,
  record: reviewOf(kind, id),
  ...extra,
});

export function reviewQueue(): ReviewItem[] {
  return [
    item('herramienta', 'plan-seguridad', 'Plan de seguridad', '/plan-de-seguridad'),
    ...INSTRUMENTS.map((i) => item('instrumento', i.id, i.title, '/evaluaciones')),
    ...PRACTICES.map((p) => item('practica', p.id, p.title, `/gimnasio/${p.id}`, { evidence: EVIDENCE_LABEL[p.evidenceLevel].label, risk: practiceRisk(p.id) })),
    ...ANTIDOTES.map((a) => item('antidoto', a.emotionId, `${a.emotionLabel} · ${a.antidoteName}`, `/antidotos?emocion=${a.emotionId}`, { evidence: EVIDENCE_LABEL[a.evidenceLevel].label })),
    ...JOURNAL_TEMPLATES.filter((t) => !t.hidden || t.type === 'caja-herramientas').map((t) =>
      item('diario', t.type, t.title, t.type === 'caja-herramientas' ? '/laboratorio/caja' : `/diario?nuevo=${t.type}`, { evidence: EVIDENCE_LABEL[t.evidenceLevel].label, risk: journalRisk(t.type) }),
    ),
    ...ARTICLES.map((a) => item('articulo', a.id, a.title, `/biblioteca/${a.id}`)),
    ...PROGRAMS.map((p) => item('programa', p.id, p.title, `/programas/${p.id}`)),
  ];
}

export type Decision = 'aprobado' | 'cambios';

export interface ReviewDecision {
  decision: Decision;
  comment: string;
  at: string;
}

/** Texto para copiar y enviar: una línea por decisión, lista para aplicar en governance.ts. */
export function exportDecisions(decisions: Record<string, ReviewDecision>, reviewer: string, items: ReviewItem[]): string {
  const byKey = Object.fromEntries(items.map((i) => [i.key, i]));
  const rows = Object.entries(decisions).filter(([k]) => byKey[k]);
  const fmt = (k: string, d: ReviewDecision) => `- ${k} · ${byKey[k].title}${d.comment.trim() ? ` — ${d.comment.trim()}` : ''}`;
  const approved = rows.filter(([, d]) => d.decision === 'aprobado');
  const changes = rows.filter(([, d]) => d.decision === 'cambios');
  return [
    `Revisión clínica · ${reviewer} · ${new Date().toISOString().slice(0, 10)}`,
    '',
    `APROBADOS (${approved.length}):`,
    ...approved.map(([k, d]) => fmt(k, d)),
    '',
    `PIDE CAMBIOS (${changes.length}):`,
    ...changes.map(([k, d]) => fmt(k, d)),
  ].join('\n');
}
