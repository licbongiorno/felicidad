/**
 * Preferencia de apariencia: 'system' sigue al sistema operativo; 'light' y 'dark' la
 * fuerzan con data-theme en <html>. Se guarda en localStorage (conveniencia por dispositivo).
 */
export type ThemePref = 'system' | 'light' | 'dark';

export const THEME_KEY = 'eudaimonia-theme';

/**
 * Se ejecuta en <head> antes de pintar: evita el destello del tema equivocado al cargar.
 * Debe ser autocontenido (se inserta como texto) y tolerar almacenamiento bloqueado.
 */
export const THEME_BOOT_SCRIPT = `(function(){try{var t=localStorage.getItem('${THEME_KEY}');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export function readThemePref(): ThemePref {
  try {
    const t = localStorage.getItem(THEME_KEY);
    return t === 'light' || t === 'dark' ? t : 'system';
  } catch {
    return 'system';
  }
}

export function applyThemePref(pref: ThemePref): void {
  const root = document.documentElement;
  if (pref === 'system') root.removeAttribute('data-theme');
  else root.setAttribute('data-theme', pref);
  try {
    if (pref === 'system') localStorage.removeItem(THEME_KEY);
    else localStorage.setItem(THEME_KEY, pref);
  } catch {
    /* almacenamiento no disponible: la preferencia dura la sesión */
  }
}
