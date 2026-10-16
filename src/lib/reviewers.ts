import { DEMO_MODE } from '@/lib/demo';

/** Correos autorizados a revisar (variable de Vercel NEXT_PUBLIC_REVIEWER_EMAILS, separados por comas). */
const REVIEWERS = (process.env.NEXT_PUBLIC_REVIEWER_EMAILS ?? '')
  .split(',')
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

/** Sólo controla qué se muestra: no da permisos (el panel de revisión no escribe datos). */
export const canReview = (email: string | null | undefined) => DEMO_MODE || (!!email && REVIEWERS.includes(email.toLowerCase()));
