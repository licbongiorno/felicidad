import { ANTIDOTES } from './antidotes';
import { practiceRisk, journalRisk } from './catalog';
import { EVIDENCE_LABEL } from './evidence';
import { reviewOf, type ContentKind, type ReviewRecord } from './governance';
import { INSTRUMENTS } from './instruments';
import { JOURNAL_TEMPLATES } from './journal';
import { ARTICLES, ARTICLE_BY_ID } from './library';
import { EASY_READS } from './easy-read';
import { PRACTICES } from './practices';
import { PROGRAMS } from './programs';
import { KID_ACTIVITIES } from './kids';
import { KID_GUIDES } from './kids-guides';
import { PILLS } from './pills';
import { STORIES } from './stories';
import { PACKS } from './packs';

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
  /** 1 = crítica, 2 = alta, 3 = habitual: el orden sugerido para revisar. */
  priority: Priority;
  /** Por qué tiene esa prioridad, en una frase. */
  reason: string;
}

export type Priority = 1 | 2 | 3;

export const PRIORITY_LABEL: Record<Priority, string> = { 1: 'Prioridad 1 · crítica', 2: 'Prioridad 2 · alta', 3: 'Prioridad 3 · habitual' };

/**
 * Temas donde un error puede dañar: riesgo suicida, autolesiones, trauma, medicación,
 * diagnósticos y juego con deudas. Todo lo que pertenece a estos paquetes va primero.
 */
const CRITICAL_PACKS: Record<string, string> = {
  autolesiones: 'autolesiones',
  'duelo-suicidio': 'duelo por suicidio',
  trauma: 'trauma',
  medicacion: 'medicación',
  diagnosticos: 'diagnósticos',
  apuestas: 'apuestas y riesgo por deudas',
};

/** Temas sensibles: clínicos específicos, menores, violencia, cuerpo o sexualidad. */
const SENSITIVE_PACKS: Record<string, string> = {
  'toc-intrusivos': 'TOC',
  'imagen-corporal': 'imagen corporal y trastornos alimentarios',
  'fobias-salud': 'exposición y ansiedad por la salud',
  sexualidad: 'sexualidad',
  'acoso-escolar': 'acoso escolar',
  cuidadores: 'crisis familiares',
  varones: 'violencia y riesgo suicida en varones',
  'duelo-perinatal': 'duelo perinatal',
  'separacion-hijos': 'separación y violencia',
  'conductas-repetitivas': 'conductas repetitivas',
  'ansiedad-social': 'exposición social',
  esquemas: 'terapia de esquemas (modos e imágenes)',
  jung: 'psicología de Jung (incluye imaginación activa)',
  'prevencion-recaidas': 'recaídas',
  'enfermedad-grave': 'enfermedad grave',
  'vida-cotidiana': 'alcohol y violencia de género',
  'acoso-laboral': 'acoso laboral',
  'tdah-adultos': 'TDAH',
};

const PACK_KINDS: [ContentKind, (p: (typeof PACKS)[number]) => string[]][] = [
  ['practica', (p) => p.practices.map((x) => x.id)],
  ['articulo', (p) => p.articles.map((x) => x.id)],
  ['programa', (p) => p.programs.map((x) => x.id)],
  ['pildora', (p) => p.pills.map((x) => x.id)],
  ['guia-familia', (p) => (p.kidGuides ?? []).map((x) => x.id)],
];

const PACK_OF: Record<string, string> = Object.fromEntries(PACKS.flatMap((p) => PACK_KINDS.flatMap(([kind, ids]) => ids(p).map((id) => [`${kind}:${id}`, p.id]))));

/** Prioridad sugerida de revisión según el riesgo del tema y del formato. */
export function reviewPriority(kind: ContentKind, id: string, risk?: 1 | 2): { priority: Priority; reason: string } {
  const pack = PACK_OF[`${kind}:${id}`];
  if (kind === 'herramienta') return { priority: 1, reason: 'Herramienta de crisis.' };
  if (kind === 'instrumento' && id === 'phq9') return { priority: 1, reason: 'Incluye una pregunta sobre ideas de muerte.' };
  if (pack && CRITICAL_PACKS[pack]) return { priority: 1, reason: `Tema crítico: ${CRITICAL_PACKS[pack]}.` };
  if (risk === 2) return { priority: 2, reason: 'Contenido de riesgo 2, con precauciones.' };
  if (kind === 'instrumento') return { priority: 2, reason: 'Evaluación con puntaje e interpretación.' };
  if (kind === 'infantil' || kind === 'guia-familia' || kind === 'cuento') return { priority: 2, reason: 'Contenido para chicos o sus familias.' };
  if (pack && SENSITIVE_PACKS[pack]) return { priority: 2, reason: `Tema sensible: ${SENSITIVE_PACKS[pack]}.` };
  return { priority: 3, reason: 'Contenido de uso habitual.' };
}

export const KIND_LABEL: Record<ContentKind, string> = {
  practica: 'Prácticas',
  antidoto: 'Antídotos',
  diario: 'Plantillas del diario',
  articulo: 'Artículos',
  instrumento: 'Evaluaciones',
  herramienta: 'Herramientas',
  programa: 'Programas',
  infantil: 'Actividades para chicos',
  'guia-familia': 'Guías para familias',
  pildora: 'Píldoras',
  cuento: 'Cuentos',
  'lectura-facil': 'Lectura fácil',
};

const item = (kind: ContentKind, id: string, title: string, href: string, extra: Partial<ReviewItem> = {}): ReviewItem => ({
  key: `${kind}:${id}`,
  kind,
  id,
  title,
  href,
  record: reviewOf(kind, id),
  ...reviewPriority(kind, id, extra.risk),
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
    // Las actividades para chicos se ven desde el modo chico (Familia › Entrar al modo chico).
    ...KID_ACTIVITIES.map((a) => item('infantil', a.id, a.title, `/chicos/${a.id}`, { evidence: `${a.bands.join(', ')} años` })),
    ...KID_GUIDES.map((g) => item('guia-familia', g.id, g.title, `/familia/guia/${g.id}`)),
    ...PILLS.map((p) => item('pildora', p.id, p.title, `/biblioteca/pildoras/${p.id}`)),
    ...STORIES.map((st) => item('cuento', st.id, st.title, `/familia/cuentos/${st.id}`, { evidence: `${st.bands.join(', ')} años` })),
    ...EASY_READS.map((e) => item('lectura-facil', e.articleId, `${ARTICLE_BY_ID[e.articleId]?.title ?? e.articleId} · versión fácil`, `/biblioteca/${e.articleId}#lectura-facil`)),
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
