/**
 * Registro de errores propio, sin servicios de terceros: el navegador avisa a /api/errores y
 * el servidor lo escribe en los logs de Vercel. Se manda lo mínimo para reparar el fallo —
 * mensaje recortado, referencia, ruta sin parámetros y navegador— y nunca datos de la
 * persona ni lo que escribió.
 */

export interface ErrorReport {
  message: string;
  digest: string | null;
  path: string;
  scope: 'seccion' | 'global';
  ua: string;
}

export const ERROR_REPORT_MAX_BYTES = 2_000;

const clip = (v: unknown, max: number) => (typeof v === 'string' ? v.slice(0, max) : '');

/** Sólo la ruta: sin consulta (?…) ni fragmento (#…), que podrían llevar datos. */
const cleanPath = (v: unknown) => clip(v, 200).split(/[?#]/)[0] || '/';

/** Normaliza lo que llega (del navegador o de cualquiera): campos conocidos y recortados. */
export function sanitizeErrorReport(raw: unknown): ErrorReport | null {
  if (!raw || typeof raw !== 'object') return null;
  const r = raw as Record<string, unknown>;
  const message = clip(r.message, 300).trim();
  if (!message) return null;
  return {
    message,
    digest: clip(r.digest, 64) || null,
    path: cleanPath(r.path),
    scope: r.scope === 'global' ? 'global' : 'seccion',
    ua: clip(r.ua, 120),
  };
}

/** Avisa del error sin bloquear la página (sendBeacon sobrevive a una recarga). */
export function reportError(error: Error & { digest?: string }, scope: ErrorReport['scope']): void {
  try {
    const report = sanitizeErrorReport({
      message: error?.message || String(error),
      digest: error?.digest,
      path: window.location.pathname,
      scope,
      ua: navigator.userAgent,
    });
    if (!report) return;
    const body = JSON.stringify(report);
    if (!navigator.sendBeacon?.('/api/errores', new Blob([body], { type: 'application/json' }))) {
      void fetch('/api/errores', { method: 'POST', body, headers: { 'Content-Type': 'application/json' }, keepalive: true }).catch(() => undefined);
    }
  } catch {
    /* informar nunca debe romper la página de error */
  }
}
