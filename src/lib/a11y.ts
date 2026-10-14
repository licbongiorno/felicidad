/**
 * Accesibilidad por dispositivo: tamaño de letra y movimiento. Igual que el tema, se
 * guardan en localStorage y un script en <head> las aplica antes de pintar.
 *   data-text="grande" | "muy-grande" en <html> → escala la tipografía (todo usa rem).
 *   data-motion="reduce" → anula animaciones CSS y pide a Motion sólo fundidos.
 */
export type TextSize = 'normal' | 'grande' | 'muy-grande';
export type MotionPref = 'system' | 'reduce';

export const TEXT_KEY = 'eudaimonia-text';
export const MOTION_KEY = 'eudaimonia-motion';
export const A11Y_EVENT = 'eudaimonia-a11y';

export const A11Y_BOOT_SCRIPT = `(function(){try{var d=document.documentElement;var t=localStorage.getItem('${TEXT_KEY}');if(t==='grande'||t==='muy-grande')d.setAttribute('data-text',t);if(localStorage.getItem('${MOTION_KEY}')==='reduce')d.setAttribute('data-motion','reduce');}catch(e){}})();`;

function read<T extends string>(key: string, allowed: T[], fallback: T): T {
  try {
    const v = localStorage.getItem(key) as T | null;
    return v && allowed.includes(v) ? v : fallback;
  } catch {
    return fallback;
  }
}

export const readTextSize = () => read<TextSize>(TEXT_KEY, ['normal', 'grande', 'muy-grande'], 'normal');
export const readMotionPref = () => read<MotionPref>(MOTION_KEY, ['system', 'reduce'], 'system');

function apply(attr: string, key: string, value: string, isDefault: boolean) {
  const root = document.documentElement;
  if (isDefault) root.removeAttribute(attr);
  else root.setAttribute(attr, value);
  try {
    if (isDefault) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  } catch {
    /* almacenamiento no disponible: dura la sesión */
  }
  window.dispatchEvent(new Event(A11Y_EVENT));
}

export const applyTextSize = (v: TextSize) => apply('data-text', TEXT_KEY, v, v === 'normal');
export const applyMotionPref = (v: MotionPref) => apply('data-motion', MOTION_KEY, v, v === 'system');
