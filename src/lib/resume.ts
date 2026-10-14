/**
 * «Retomar»: recuerda en este dispositivo en qué paso quedó una práctica interrumpida.
 * Es una comodidad por dispositivo (localStorage), no un registro clínico: caduca a las 24 h.
 */
export interface ResumePoint {
  practiceId: string;
  variant: string;
  index: number;
  at: number;
}

const KEY = 'eudaimonia-resume';
const TTL_MS = 24 * 3_600_000;

export function loadResume(practiceId: string): ResumePoint | null {
  try {
    const r = JSON.parse(localStorage.getItem(KEY) ?? 'null') as ResumePoint | null;
    if (!r || r.practiceId !== practiceId || Date.now() - r.at > TTL_MS || r.index < 1) return null;
    return r;
  } catch {
    return null;
  }
}

export function saveResume(point: Omit<ResumePoint, 'at'>): void {
  try {
    localStorage.setItem(KEY, JSON.stringify({ ...point, at: Date.now() }));
  } catch {
    /* almacenamiento no disponible: no se podrá retomar */
  }
}

export function clearResume(): void {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* nada que limpiar */
  }
}
