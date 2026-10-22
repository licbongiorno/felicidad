import { ANTIDOTES } from './antidotes';
import type { ContentKind } from './governance';
import { INSTRUMENTS } from './instruments';
import { JOURNAL_TEMPLATES } from './journal';
import { ARTICLES } from './library';
import { PRACTICES } from './practices';
import { PROGRAMS } from './programs';
import { KID_ACTIVITIES } from './kids';
import { KID_GUIDES } from './kids-guides';
import { PILLS } from './pills';
import { STORIES } from './stories';
import { EASY_READS } from './easy-read';
import { CRISIS_RESOURCES } from '@/config/safety';

/**
 * Índice de todo el contenido revisable, con el objeto que lo define. Sirve para calcular la
 * huella de cada elemento y atar la aprobación clínica a su texto exacto (approved.json):
 * si el contenido cambia, la huella cambia y hay que volver a aprobarlo.
 *
 * Sólo lo usan los tests y el script de aprobación: no se importa desde la app.
 */
export function contentIndex(): Record<string, unknown> {
  const entries: [ContentKind, string, unknown][] = [
    ['herramienta', 'plan-seguridad', { recursos: CRISIS_RESOURCES }],
    ...INSTRUMENTS.map((x) => ['instrumento', x.id, x] as [ContentKind, string, unknown]),
    ...PRACTICES.map((x) => ['practica', x.id, x] as [ContentKind, string, unknown]),
    ...ANTIDOTES.map((x) => ['antidoto', x.emotionId, x] as [ContentKind, string, unknown]),
    ...JOURNAL_TEMPLATES.map((x) => ['diario', x.type, x] as [ContentKind, string, unknown]),
    ...ARTICLES.map((x) => ['articulo', x.id, x] as [ContentKind, string, unknown]),
    ...PROGRAMS.map((x) => ['programa', x.id, x] as [ContentKind, string, unknown]),
    ...KID_ACTIVITIES.map((x) => ['infantil', x.id, x] as [ContentKind, string, unknown]),
    ...KID_GUIDES.map((x) => ['guia-familia', x.id, x] as [ContentKind, string, unknown]),
    ...PILLS.map((x) => ['pildora', x.id, x] as [ContentKind, string, unknown]),
    ...STORIES.map((x) => ['cuento', x.id, x] as [ContentKind, string, unknown]),
    ...EASY_READS.map((x) => ['lectura-facil', x.articleId, x] as [ContentKind, string, unknown]),
  ];
  return Object.fromEntries(entries.map(([kind, id, obj]) => [`${kind}:${id}`, obj]));
}

/** JSON con las claves ordenadas, para que la huella no dependa del orden de las propiedades. */
function stable(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(stable).join(',')}]`;
  if (value && typeof value === 'object') {
    return `{${Object.keys(value)
      .sort()
      .filter((k) => (value as Record<string, unknown>)[k] !== undefined && typeof (value as Record<string, unknown>)[k] !== 'function')
      .map((k) => `${JSON.stringify(k)}:${stable((value as Record<string, unknown>)[k])}`)
      .join(',')}}`;
  }
  return typeof value === 'function' ? '' : JSON.stringify(value) ?? '';
}

/** Huella corta del contenido (FNV-1a de 32 bits, dos pasadas): detecta cambios, no es criptográfica. */
export function contentHash(value: unknown): string {
  const text = stable(value);
  let a = 0x811c9dc5;
  let b = 0x01000193;
  for (let i = 0; i < text.length; i++) {
    const c = text.charCodeAt(i);
    a = Math.imul(a ^ c, 0x01000193) >>> 0;
    b = Math.imul(b ^ c, 0x811c9dc5) >>> 0;
  }
  return a.toString(16).padStart(8, '0') + b.toString(16).padStart(8, '0');
}
