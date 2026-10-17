import type { Page } from '@playwright/test';

/**
 * Espera a que la página quede quieta antes de auditarla: red en reposo, sin animaciones CSS
 * en curso y sin cambios de opacidad ni de transformación entre dos muestras seguidas (las
 * entradas de Motion se animan por JavaScript y no aparecen en getAnimations()).
 *
 * Reemplaza las esperas fijas: termina apenas la página está estable (suele ser < 0,5 s) y
 * no corta antes de tiempo si una animación tarda más.
 */
export async function settled(page: Page, { timeout = 6_000 }: { timeout?: number } = {}) {
  await page.waitForLoadState('networkidle');
  await page
    .waitForFunction(
      () => document.getAnimations().every((a) => a.playState !== 'running' || a.effect?.getTiming().iterations === Infinity),
      null,
      { timeout },
    )
    .catch(() => undefined);
  await page
    .waitForFunction(
      () => {
        const snap = () =>
          Array.from(document.body.querySelectorAll('*'), (el) => {
            const s = getComputedStyle(el);
            return `${s.opacity}|${s.transform}`;
          }).join(';');
        const w = window as unknown as { __settledSnap?: string };
        const now = snap();
        const same = w.__settledSnap === now;
        w.__settledSnap = now;
        return same;
      },
      null,
      { timeout, polling: 150 },
    )
    .catch(() => undefined);
}
