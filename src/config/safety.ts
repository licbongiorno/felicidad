/**
 * Recursos de crisis de Argentina (alcance nacional).
 * Verificados el 2026-10-14 en fuentes oficiales (argentina.gob.ar, Centro de Asistencia
 * al Suicida) y notas de prensa de 2026. Revisarlos cada año, o antes si cambia algún
 * servicio, y anotar la fecha en CRISIS_RESOURCES_CHECKED_AT.
 */
export interface CrisisResource {
  label: string;
  contact: string;
  href?: string;
  /** Alcance, horario o para qué sirve. */
  detail?: string;
}

export const CRISIS_RESOURCES_CHECKED_AT = '2026-10-14';

export const CRISIS_RESOURCES: CrisisResource[] = [
  { label: 'Emergencias', contact: '911', href: 'tel:911', detail: 'Si tu vida o la de otra persona está en peligro ahora.' },
  {
    label: 'Línea Nacional de Salud Mental',
    contact: '0800-999-0091',
    href: 'tel:08009990091',
    detail: 'Urgencias en salud mental. Gratuita, las 24 horas, en todo el país.',
  },
  {
    label: 'Centro de Asistencia al Suicida',
    contact: '135',
    href: 'tel:135',
    detail: 'Gratuita desde CABA y el Gran Buenos Aires. Desde el resto del país: (011) 5275-1135 o 0800-345-1435.',
  },
  {
    label: 'Violencia de género · Línea 144',
    contact: '144',
    href: 'tel:144',
    detail: 'Gratuita, las 24 horas, en todo el país.',
  },
  { label: 'Tu profesional tratante', contact: 'El contacto de tu plan de seguridad' },
];

/**
 * Recursos para la sección de chicos (botón «Ayuda» del modo chico y panel del adulto).
 * La Línea 102 depende de cada provincia: atiende en la mayoría, gratis y las 24 horas,
 * pero no en todas; por eso se indica el 911 como alternativa. Verificada el 2026-10-14.
 */
export const KID_RESOURCES: (CrisisResource & { href: string })[] = [
  {
    label: 'Línea 102',
    contact: '102',
    href: 'tel:102',
    detail: 'Para chicas y chicos. Te escuchan y te ayudan. Gratis. Funciona en la mayoría de las provincias.',
  },
  { label: 'Emergencias', contact: '911', href: 'tel:911', detail: 'Si alguien está en peligro ahora.' },
];

export const APP_NAME = 'Habilidades Psicológicas';

export const SAFETY_DISCLAIMER =
  'Habilidades Psicológicas es una herramienta de entrenamiento complementaria. No reemplaza la evaluación ni el tratamiento por un/a profesional de la salud mental.';

/** Edad mínima de uso: la versión para menores requiere un circuito propio. */
export const MIN_AGE = 18;
