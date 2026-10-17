import { ERROR_REPORT_MAX_BYTES, sanitizeErrorReport } from '@/lib/errorReport';

/** Recibe avisos de error del navegador y los deja en los logs del servidor (ver lib/errorReport). */
export async function POST(request: Request): Promise<Response> {
  const text = await request.text().catch(() => '');
  if (text.length > ERROR_REPORT_MAX_BYTES) return new Response(null, { status: 413 });
  let parsed: unknown = null;
  try {
    parsed = JSON.parse(text);
  } catch {
    return new Response(null, { status: 400 });
  }
  const report = sanitizeErrorReport(parsed);
  if (!report) return new Response(null, { status: 400 });
  console.error('[error-cliente]', JSON.stringify(report));
  return new Response(null, { status: 204 });
}
