'use client';

/** Píldoras ya leídas en este dispositivo (sólo una comodidad visual; no es un dato clínico). */
const KEY = 'pildoras-leidas';

export function readPills(): Set<string> {
  try {
    return new Set(JSON.parse(localStorage.getItem(KEY) ?? '[]') as string[]);
  } catch {
    return new Set();
  }
}

export function markPillRead(id: string): void {
  try {
    const s = readPills();
    s.add(id);
    localStorage.setItem(KEY, JSON.stringify([...s]));
  } catch {
    // sin almacenamiento disponible: no pasa nada
  }
}
