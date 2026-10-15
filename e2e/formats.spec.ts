import { expect, test, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/** Formatos nuevos: píldoras, desafíos y dibujo (modo demo, almacenamiento limpio). */
test.use({ reducedMotion: 'reduce' });

async function open(page: Page, path: string) {
  await page.goto(path);
  await page.evaluate(() => localStorage.clear());
  await page.goto(path);
}

async function expectAccessible(page: Page) {
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(800);
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
  expect(results.violations.map((v) => `${v.id} (${v.nodes.length}): ${v.nodes[0]?.target.join(' ')}`)).toEqual([]);
}

async function noSideScroll(page: Page) {
  const { sw, w } = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, w: document.documentElement.clientWidth }));
  expect(sw).toBeLessThanOrEqual(w);
}

test('píldoras: desde la biblioteca, se pasan las tarjetas y queda marcada como leída', async ({ page }) => {
  await open(page, '/biblioteca');
  await page.getByRole('link', { name: /^Píldoras/ }).click();
  await page.waitForURL('**/biblioteca/pildoras');
  await expectAccessible(page);
  const first = page.locator('main a[href^="/biblioteca/pildoras/"]').first();
  const href = (await first.getAttribute('href'))!;
  await first.click();
  await page.waitForURL(`**${href}`);
  await expect(page.getByText(/^1 de \d+$/)).toBeVisible();
  await noSideScroll(page);
  await expectAccessible(page);
  for (let i = 0; i < 8; i++) {
    const next = page.getByRole('button', { name: /^(Siguiente →|Terminar)$/ });
    const label = (await next.innerText()).trim();
    await next.click();
    if (label === 'Terminar') break;
  }
  await expect(page.getByText('Listo.')).toBeVisible();
  await page.goto('/biblioteca/pildoras');
  await expect(page.locator(`a[href="${href}"]`).getByText('Leída ✓')).toBeVisible();
});

test('desafíos: empezar uno, marcar el día y verlo hecho; se puede dejar', async ({ page }) => {
  await open(page, '/desafios');
  await expect(page.getByRole('heading', { name: 'Desafíos', level: 1 })).toBeVisible();
  await expectAccessible(page);
  const card = page.locator('li').filter({ hasText: 'Una semana de gratitud' });
  await card.getByRole('button', { name: 'Empezar hoy' }).click();
  const active = page.getByRole('article', { name: 'Una semana de gratitud' });
  await expect(active.getByText('Día 1 de 7 · 0 hechos')).toBeVisible();
  await expect(active.getByRole('link', { name: 'Hacerlo ahora' })).toHaveAttribute('href', '/diario?nuevo=tres-cosas');
  await active.getByRole('button', { name: 'Lo hice' }).click();
  await expect(active.getByRole('status')).toHaveText('Hecho ✓');
  await expect(active.getByText('Día 1 de 7 · 1 hechos')).toBeVisible();
  await page.reload();
  await expect(page.getByRole('article', { name: 'Una semana de gratitud' }).getByRole('status')).toHaveText('Hecho ✓');
  await noSideScroll(page);
  await expectAccessible(page);
  await page.getByRole('button', { name: 'Dejar este desafío' }).click();
  await expect(page.getByRole('article', { name: 'Una semana de gratitud' })).toHaveCount(0);
});

test('mapa de habilidades: de la necesidad a la práctica, con su ficha', async ({ page }) => {
  await open(page, '/gimnasio');
  await page.getByRole('link', { name: /¿No sabes por dónde empezar\?/ }).click();
  await page.waitForURL('**/habilidades');
  await expect(page.getByRole('heading', { name: '¿Qué necesitas?', level: 1 })).toBeVisible();
  await noSideScroll(page);
  await expectAccessible(page);
  await page.getByRole('link', { name: /^Poner límites/ }).click();
  await page.waitForURL('**/habilidades/limites');
  await expect(page.getByText('Qué vas a aprender.')).toBeVisible();
  await expect(page.getByText('Para empezar')).toBeVisible();
  await noSideScroll(page);
  await expectAccessible(page);
  await page.locator('main a[href^="/gimnasio/"]').first().click();
  await page.waitForURL('**/gimnasio/dear-man');
  await page.getByRole('tab', { name: 'Ficha' }).click();
  await expect(page.getByText('Revisión clínica pendiente', { exact: false })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Poner límites' })).toBeVisible();
});

test('buscador: encuentra una necesidad y una píldora', async ({ page, isMobile }) => {
  test.skip(isMobile, 'Atajo de teclado: sólo escritorio');
  await open(page, '/dashboard');
  await page.waitForLoadState('networkidle');
  await page.keyboard.press('Control+k');
  const input = page.getByRole('combobox', { name: /Buscar/ });
  await input.fill('poner limites');
  await expect(page.getByRole('option').filter({ hasText: 'Poner límites' }).first()).toBeVisible();
  await input.fill('burnout');
  await page.getByRole('option').filter({ hasText: '¿Es burnout o solo cansancio?' }).click();
  await expect(page).toHaveURL(/\/biblioteca\/pildoras\/que-es-el-burnout$/);
});
