'use client';

import { useSyncExternalStore } from 'react';

/**
 * Modo chico y código del adulto (por dispositivo, en localStorage).
 *
 * El código de 4 números es una barrera de uso, no de seguridad: evita que el chico salga
 * del modo chico y llegue al contenido de adultos. Los datos los protegen las reglas de
 * Firestore. Se guarda el hash con sal, nunca el código; tras 5 intentos fallidos se
 * espera 30 segundos. Si el adulto lo olvida, una pregunta para adultos permite crear otro.
 */

const MODE_KEY = 'eudaimonia-kid-mode';
const PIN_KEY = 'eudaimonia-kid-pin';
const EVENT = 'eudaimonia-kid-mode';
const MAX_TRIES = 5;
const LOCK_MS = 30_000;

let tries = 0;
let lockedUntil = 0;

function read(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function write(key: string, value: string | null) {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  } catch {
    /* almacenamiento bloqueado: el modo dura lo que la pestaña */
  }
  window.dispatchEvent(new Event(EVENT));
}

async function hash(pin: string, salt: string): Promise<string> {
  const text = `${salt}:${pin}`;
  if (globalThis.crypto?.subtle) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
    return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
  }
  // Sin WebCrypto (contexto no seguro): hash simple; sigue sin guardar el código en claro.
  let h = 0;
  for (const c of text) h = (Math.imul(31, h) + c.charCodeAt(0)) | 0;
  return `s${h}`;
}

export const isValidPin = (pin: string) => /^\d{4}$/.test(pin);

export function hasPin(): boolean {
  return !!read(PIN_KEY);
}

export async function setPin(pin: string): Promise<void> {
  if (!isValidPin(pin)) throw new Error('El código tiene que tener 4 números.');
  const salt = Math.random().toString(36).slice(2, 10);
  write(PIN_KEY, JSON.stringify({ salt, hash: await hash(pin, salt) }));
  tries = 0;
}

export type PinCheck = { ok: true } | { ok: false; lockedFor: number };

export async function checkPin(pin: string, now = Date.now()): Promise<PinCheck> {
  if (now < lockedUntil) return { ok: false, lockedFor: lockedUntil - now };
  try {
    const stored = JSON.parse(read(PIN_KEY) ?? 'null') as { salt: string; hash: string } | null;
    if (stored && (await hash(pin, stored.salt)) === stored.hash) {
      tries = 0;
      return { ok: true };
    }
  } catch {
    /* código guardado ilegible: cuenta como fallo */
  }
  tries += 1;
  if (tries >= MAX_TRIES) {
    tries = 0;
    lockedUntil = now + LOCK_MS;
    return { ok: false, lockedFor: LOCK_MS };
  }
  return { ok: false, lockedFor: 0 };
}

export function enterKidMode(kidId: string) {
  write(MODE_KEY, kidId);
}

export function exitKidMode() {
  write(MODE_KEY, null);
}

function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  window.addEventListener('storage', cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener('storage', cb);
  };
}

/** Id del chico en modo chico, o null. `undefined` mientras no se puede leer (servidor). */
export function useActiveKidId(): string | null | undefined {
  return useSyncExternalStore(subscribe, () => read(MODE_KEY), () => undefined);
}

/** Pregunta para adultos (multiplicación de dos cifras) para recuperar el código olvidado. */
export function adultQuestion(): { a: number; b: number } {
  const r = () => 6 + Math.floor(Math.random() * 7);
  return { a: r(), b: r() };
}
