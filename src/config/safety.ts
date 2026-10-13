/**
 * Recursos de crisis. DEBEN ajustarse a la jurisdicción donde se use la app y ser
 * revisados por el/la profesional responsable antes de producción.
 */
export interface CrisisResource {
  label: string;
  contact: string;
  href?: string;
}

export const CRISIS_RESOURCES: CrisisResource[] = [
  { label: 'Emergencias', contact: 'Número de emergencias local' },
  { label: 'Tu profesional tratante', contact: 'Contacto definido en tu plan de seguridad' },
  // Ejemplo a completar: { label: 'Línea de prevención del suicidio', contact: '…', href: 'tel:…' },
];

export const SAFETY_DISCLAIMER =
  'Protocolo Eudaimonía es una herramienta de entrenamiento complementaria. No reemplaza la evaluación ni el tratamiento por un/a profesional de la salud mental.';
