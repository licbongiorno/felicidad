/**
 * Datos personales guardados sólo en este dispositivo (localStorage): desafíos en curso,
 * píldoras leídas, hitos, «retomar», el genograma y los esquemas marcados. Son de una persona
 * (el genograma, además, tiene datos sensibles de terceros): se borran al cerrar sesión o eliminar la cuenta, y si entra otra cuenta en el mismo equipo.
 * Las preferencias del dispositivo (tema, texto, voz, modo chico) no se tocan.
 */
export const PERSONAL_LOCAL_KEYS = ['desafios', 'pildoras-leidas', 'eudaimonia-hitos', 'eudaimonia-resume', 'genograma', 'esquemas-resuenan'] as const;
const OWNER_KEY = 'eudaimonia-local-owner';

export function clearPersonalLocalData(): void {
  try {
    for (const k of PERSONAL_LOCAL_KEYS) localStorage.removeItem(k);
    localStorage.removeItem(OWNER_KEY);
  } catch {
    /* almacenamiento no disponible: no hay nada que borrar */
  }
}

/** Si los datos locales son de otra cuenta, se descartan antes de mostrar nada. */
export function claimLocalData(uid: string): void {
  try {
    const owner = localStorage.getItem(OWNER_KEY);
    if (owner !== uid) {
      if (owner !== null || PERSONAL_LOCAL_KEYS.some((k) => localStorage.getItem(k) !== null)) {
        for (const k of PERSONAL_LOCAL_KEYS) localStorage.removeItem(k);
      }
      localStorage.setItem(OWNER_KEY, uid);
    }
  } catch {
    /* almacenamiento no disponible */
  }
}
