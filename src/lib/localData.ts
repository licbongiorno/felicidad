/**
 * Datos personales guardados sólo en este dispositivo (localStorage): «retomar», el genograma
 * y los esquemas marcados. Las claves de desafíos, píldoras leídas e hitos son de versiones
 * anteriores: ahora se sincronizan con la cuenta y se migran una vez (takeLegacyProgress). Son de una persona
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

/** Lo que versiones anteriores guardaban sólo en el dispositivo y ahora se sincroniza. */
export interface LegacyProgress {
  pillsRead: string[];
  challenges: Record<string, { start: string; manual: string[] }>;
  milestones: string[];
}

const LEGACY_SYNCED_KEYS = ['desafios', 'pildoras-leidas', 'eudaimonia-hitos'] as const;

/**
 * Lee (y borra del dispositivo) los desafíos, píldoras leídas e hitos que se guardaban sólo
 * en localStorage, para pasarlos a la cuenta. Devuelve null si no había nada.
 * Se llama después de claimLocalData: lo que queda es de esta misma cuenta.
 */
export function takeLegacyProgress(uid: string): LegacyProgress | null {
  try {
    if (!LEGACY_SYNCED_KEYS.some((k) => localStorage.getItem(k) !== null)) return null;
    const parse = <T,>(k: string, fallback: T): T => {
      try {
        return (JSON.parse(localStorage.getItem(k) ?? 'null') as T) ?? fallback;
      } catch {
        return fallback;
      }
    };
    const pills = parse<unknown>('pildoras-leidas', []);
    const challenges = parse<unknown>('desafios', {});
    const hitos = parse<Record<string, unknown>>('eudaimonia-hitos', {});
    for (const k of LEGACY_SYNCED_KEYS) localStorage.removeItem(k);
    const strings = (v: unknown) => (Array.isArray(v) ? v.filter((x): x is string => typeof x === 'string') : []);
    return {
      pillsRead: strings(pills),
      challenges:
        challenges && typeof challenges === 'object' && !Array.isArray(challenges)
          ? Object.fromEntries(
              Object.entries(challenges as Record<string, { start?: unknown; manual?: unknown }>)
                .filter(([, c]) => typeof c?.start === 'string')
                .map(([id, c]) => [id, { start: c.start as string, manual: strings(c.manual) }]),
            )
          : {},
      milestones: strings(hitos?.[uid]),
    };
  } catch {
    return null;
  }
}

/** Une lo que había en el dispositivo con lo de la cuenta. Devuelve sólo lo que cambió. */
export function mergeLegacyProgress(current: LegacyProgress, legacy: LegacyProgress): Partial<LegacyProgress> {
  const union = (a: string[], b: string[]) => [...new Set([...a, ...b])];
  const patch: Partial<LegacyProgress> = {};
  const pills = union(current.pillsRead, legacy.pillsRead);
  if (pills.length !== current.pillsRead.length) patch.pillsRead = pills;
  const milestones = union(current.milestones, legacy.milestones);
  if (milestones.length !== current.milestones.length) patch.milestones = milestones;
  const challenges = { ...current.challenges };
  let changed = false;
  for (const [id, c] of Object.entries(legacy.challenges)) {
    const mine = challenges[id];
    if (!mine) {
      challenges[id] = c;
      changed = true;
    } else if (mine.start === c.start) {
      const manual = union(mine.manual, c.manual);
      if (manual.length !== mine.manual.length) {
        challenges[id] = { start: mine.start, manual };
        changed = true;
      }
    }
    // Si empezó en otra fecha en la cuenta, gana la cuenta.
  }
  if (changed) patch.challenges = challenges;
  return patch;
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
