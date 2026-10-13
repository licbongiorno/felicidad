/**
 * Modo demo: SÓLO se activa de forma explícita con NEXT_PUBLIC_DEMO_MODE=true.
 *
 * Antes se activaba automáticamente si faltaba la configuración de Firebase; eso
 * convertía un error de despliegue (variable olvidada en Vercel) en una app que
 * guardaba datos clínicos en localStorage sin avisar. Ahora la ausencia de
 * configuración es un error visible (`CONFIG_MISSING`), nunca un modo alternativo.
 */
export const DEMO_MODE = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

const hasFirebaseConfig = Boolean(
  process.env.NEXT_PUBLIC_FIREBASE_API_KEY &&
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID &&
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
);

export const CONFIG_MISSING = !DEMO_MODE && !hasFirebaseConfig;
