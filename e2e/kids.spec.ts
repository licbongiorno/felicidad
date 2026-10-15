import { expect, test, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/** Sección para chicos (modo demo): perfiles, modo chico con código y actividades. */
test.use({ reducedMotion: 'reduce' });

async function freshFamily(page: Page) {
  await page.goto('/familia');
  await page.evaluate(() => localStorage.clear());
  await page.goto('/familia');
}

async function pressPin(page: Page, digits: string) {
  for (const d of digits) await page.getByRole('button', { name: d, exact: true }).click();
}

/** Crea el perfil «Juli» (7 a 9 años), elige el código 1234 y entra al modo chico. */
async function enterAsKid(page: Page, band = /7 a 9 años/) {
  await freshFamily(page);
  await page.getByRole('button', { name: 'Crear el primer perfil' }).click();
  await page.getByLabel('Nombre o apodo').fill('Juli');
  await page.getByRole('radio', { name: band }).check();
  await page.getByLabel(/Soy la madre/).check();
  await page.getByRole('button', { name: 'Crear perfil' }).click();
  await page.getByRole('button', { name: 'Entrar al modo chico' }).click();
  await pressPin(page, '12341234');
  await page.waitForURL('**/chicos');
  await expect(page.getByRole('button', { name: '¿Qué te gustaría hacer hoy?' })).toBeVisible();
}

/** Sale del modo chico con el código y abre el panel del perfil. */
async function openPanel(page: Page) {
  await page.getByRole('button', { name: 'Salir' }).click();
  await pressPin(page, '1234');
  await page.waitForURL('**/familia');
  // La lista entra con una animación: se reintenta el clic hasta que la navegación ocurre.
  await expect(async () => {
    await page.getByRole('link', { name: 'Ver su panel' }).click({ timeout: 2_000 });
    await page.waitForURL('**/familia/chico/**', { timeout: 2_000 });
  }).toPass({ timeout: 15_000 });
}

async function expectAccessible(page: Page) {
  await page.waitForLoadState('networkidle');
  await page.waitForFunction(() => document.getAnimations().every((a) => a.playState !== 'running' || a.effect?.getTiming().iterations === Infinity), null, { timeout: 5_000 }).catch(() => undefined);
  await page.waitForTimeout(1_200);
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
  expect(results.violations.map((v) => `${v.id} (${v.nodes.length}): ${v.nodes[0]?.target.join(' ')}`)).toEqual([]);
}

test('el perfil exige el consentimiento del adulto', async ({ page }) => {
  await freshFamily(page);
  await page.getByRole('button', { name: 'Crear el primer perfil' }).click();
  await page.getByLabel('Nombre o apodo').fill('Juli');
  await expect(page.getByRole('button', { name: 'Crear perfil' })).toBeDisabled();
  await page.getByLabel(/Soy la madre/).check();
  await expect(page.getByRole('button', { name: 'Crear perfil' })).toBeEnabled();
});

test('modo chico: el área de adultos queda cerrada y se sale sólo con el código', async ({ page }) => {
  await enterAsKid(page);
  await page.goto('/dashboard');
  await page.waitForURL('**/chicos');
  await page.getByRole('button', { name: 'Salir' }).click();
  await pressPin(page, '9999');
  await expect(page.getByText('Código incorrecto.')).toBeVisible();
  await pressPin(page, '1234');
  await page.waitForURL('**/familia');
  await expect(page.getByRole('heading', { name: 'Familia' })).toBeVisible();
});

test('¿cómo me siento?: una emoción difícil al máximo invita a buscar al adulto y llega a su panel', async ({ page }) => {
  await enterAsKid(page);
  await page.getByRole('link', { name: /¿Cómo me siento\?/ }).click();
  await page.getByRole('button', { name: 'Miedo' }).click();
  await page.getByRole('button', { name: 'Muchísimo' }).click();
  await expect(page.getByText(/buen momento para buscar a tu adulto/)).toBeVisible();
  await page.getByRole('button', { name: 'Listo' }).click();
  await expect(page.getByRole('heading', { name: /Ganaste un sticker nuevo/ })).toBeVisible();

  await openPanel(page);
  await expect(page.getByText('Miedo · muchísimo')).toBeVisible();
});

test('actividad con preguntas: responde, termina y el sticker aparece en el álbum', async ({ page }) => {
  await enterAsKid(page);
  await page.goto('/chicos/detective-de-pensamientos');
  await page.getByRole('button', { name: 'Siguiente' }).click();
  await page.getByRole('button', { name: 'Siguiente' }).click();
  await expect(page.getByRole('button', { name: 'Siguiente' })).toBeDisabled();
  await page.getByRole('radio', { name: /Alguien jugó conmigo/ }).click();
  await expect(page.getByText(/Excelente pista/)).toBeVisible();
  await page.getByRole('button', { name: 'Siguiente' }).click();
  await page.getByRole('button', { name: 'Siguiente' }).click();
  await page.getByRole('button', { name: '¡Terminé!' }).click();
  await page.getByRole('link', { name: 'Ver mi jardín' }).click();
  await expect(page.getByText('1 de', { exact: false })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Detective de pensamientos', exact: true })).toBeVisible();
});

test('frasco de gratitud: lo que guarda lo ve el adulto', async ({ page }) => {
  await enterAsKid(page);
  await page.goto('/chicos/frasco-de-gratitud');
  await page.getByRole('button', { name: 'Una mascota' }).click();
  await page.getByPlaceholder('Hoy jugué con…').fill('Paseé a Toby');
  await page.getByRole('button', { name: 'Guardar en el frasco' }).click();
  await openPanel(page);
  await expect(page.getByText('«Una mascota: Paseé a Toby»')).toBeVisible();
});

test('ayuda para chicos: adulto de confianza y Línea 102', async ({ page }) => {
  await enterAsKid(page);
  await page.getByRole('button', { name: 'Ayuda' }).click();
  await expect(page.getByText(/cuéntaselo ahora a un adulto de confianza/)).toBeVisible();
  await expect(page.getByRole('link', { name: /Llamar a Línea 102/ })).toHaveAttribute('href', 'tel:102');
});

test('las actividades se adaptan a la edad', async ({ page }) => {
  await enterAsKid(page, /4 a 6 años/);
  await expect(page.getByRole('link', { name: /Huele la flor/ })).toBeVisible();
  await expect(page.getByRole('link', { name: /Mi mente sabia/ })).toHaveCount(0);
});

test('accesibilidad WCAG 2.1 AA: Familia y guía', async ({ page }) => {
  await freshFamily(page);
  await expectAccessible(page);
  await page.goto('/familia/guia/acompanar-la-ansiedad');
  await expectAccessible(page);
});

for (const scheme of ['light', 'dark'] as const) {
  test(`accesibilidad WCAG 2.1 AA del modo chico (${scheme === 'light' ? 'claro' : 'oscuro'})`, async ({ page }) => {
    await page.emulateMedia({ colorScheme: scheme });
    await enterAsKid(page);
    for (const path of ['/chicos', '/chicos/como-me-siento', '/chicos/album', '/chicos/semaforo', '/chicos/frasco-de-gratitud', '/chicos/caras-y-emociones']) {
      await page.goto(path);
      await expectAccessible(page);
    }
  });
}

test('0 a 3 años: sin modo chico, con actividades para hacer juntos que se registran', async ({ page }) => {
  await freshFamily(page);
  await page.getByRole('button', { name: 'Crear el primer perfil' }).click();
  await page.getByLabel('Nombre o apodo').fill('Benja');
  await page.getByRole('radio', { name: /0 a 3 años/ }).check();
  await page.getByLabel(/Soy la madre/).check();
  await page.getByRole('button', { name: 'Crear perfil' }).click();
  await expect(page.getByRole('button', { name: 'Entrar al modo chico' })).toHaveCount(0);
  await expect(async () => {
    await page.getByRole('link', { name: 'Actividades para hacer juntos' }).click({ timeout: 2_000 });
    await page.waitForURL('**/familia/chico/**', { timeout: 2_000 });
  }).toPass({ timeout: 15_000 });
  await page.getByRole('button', { name: /Ida y vuelta cara a cara/ }).click();
  await page.getByRole('button', { name: 'Lo hicimos hoy' }).click();
  await expect(page.getByText('¡Anotado!', { exact: false })).toBeVisible();
  await expect(page.getByText('actividad en 1 día')).toBeVisible();
  await expectAccessible(page);
});

test('adolescentes: líneas de salud mental en la ayuda y lo que escriben no se muestra al adulto', async ({ page }) => {
  await enterAsKid(page, /13 a 17 años/);
  await expect(page.getByRole('link', { name: /^STOP antes de reaccionar/ })).toBeVisible();
  await page.getByRole('button', { name: 'Ayuda' }).click();
  await expect(page.getByRole('link', { name: /Llamar a Línea Nacional de Salud Mental/ })).toHaveAttribute('href', 'tel:08009990091');
  await page.keyboard.press('Escape');
  await page.goto('/chicos/frasco-de-gratitud');
  await expect(page.getByText('La app no le muestra a tu adulto lo que escribes aquí.')).toBeVisible();
  await page.getByRole('button', { name: 'Mis amigos' }).click();
  await page.getByPlaceholder('Hoy jugué con…').fill('Algo privado');
  await page.getByRole('button', { name: 'Guardar en el frasco' }).click();
  await openPanel(page);
  await expect(page.getByText(/Por su privacidad/)).toBeVisible();
  await expect(page.getByText(/Algo privado/)).toHaveCount(0);
});

test('caminos: se elige uno, se avanza y propone la siguiente actividad', async ({ page }) => {
  await enterAsKid(page);
  await expect(page.getByRole('heading', { name: 'Mis caminos' })).toBeVisible();
  await page.getByRole('link', { name: /Empezar: ¿Cómo me siento hoy\?/ }).click();
  await page.getByRole('button', { name: 'Alegría' }).click();
  await page.getByRole('button', { name: 'Un poco' }).click();
  await page.getByRole('button', { name: 'Listo' }).click();
  await expect(page.getByRole('link', { name: /Siguiente: Los colores de mis emociones/ })).toBeVisible();
  await page.goto('/chicos/camino/medianos-emociones');
  await expect(page.getByRole('progressbar', { name: '1 de 5 actividades' })).toBeVisible();
  await expectAccessible(page);
});

test('cuentos: se lee uno de su edad, se elige cómo lo dejó y el adulto lo ve en su panel', async ({ page }) => {
  await enterAsKid(page);
  await page.getByRole('link', { name: /^Cuentos/ }).click();
  await page.waitForURL('**/chicos/cuentos');
  await expect(page.getByRole('heading', { name: 'Cuentos', level: 1 })).toBeVisible();
  // Filtrar por un tema deja sólo cuentos de ese tema.
  await page.getByRole('button', { name: 'Valentía', exact: true }).click();
  await page.locator('main a[href^="/chicos/cuentos/"]').first().click();
  await page.waitForURL('**/chicos/cuentos/**');
  const title = await page.getByRole('heading', { level: 1 }).innerText();
  for (let i = 0; i < 20; i++) {
    const next = page.getByRole('button', { name: /^(Seguir →|Terminar)$/ });
    const label = (await next.innerText()).trim();
    await next.click();
    if (label === 'Terminar') break;
  }
  await expect(page.getByRole('heading', { name: 'Para conversar' })).toBeVisible();
  await page.getByRole('group', { name: 'Cómo me dejó el cuento' }).getByRole('button', { name: 'Calma' }).click();
  await expect(page.getByRole('status').filter({ hasText: 'Guardado' })).toBeVisible();
  await openPanel(page);
  await expect(page.getByText(`Cuento: ${title}`)).toBeVisible();
});

test('familia: cuentos para leer juntos con guía para el adulto, por edad y tema', async ({ page }) => {
  await freshFamily(page);
  await page.getByRole('link', { name: /Cuentos para leer juntos/ }).click();
  await page.waitForURL('**/familia/cuentos');
  await page.getByRole('button', { name: '10 a 12 años' }).click();
  await page.getByRole('button', { name: 'Duelo', exact: true }).click();
  await page.locator('main a[href^="/familia/cuentos/"]').first().click();
  await expect(page.getByRole('heading', { name: 'Para ti, antes de leer' })).toBeVisible();
  await expect(page.getByText(/tema sensible/)).toBeVisible();
  await page.getByRole('button', { name: 'Leer el cuento' }).click();
  await expect(page.getByRole('button', { name: 'Seguir →' })).toBeVisible();
  await expectAccessible(page);
});

test('accesibilidad WCAG 2.1 AA y sin desplazamiento lateral: cuentos del modo chico', async ({ page }) => {
  await enterAsKid(page);
  for (const path of ['/chicos', '/chicos/cuentos', '/chicos/album', '/chicos/como-me-siento']) {
    await page.goto(path);
    await page.waitForLoadState('networkidle');
    const { sw, w } = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, w: document.documentElement.clientWidth }));
    expect(sw, path).toBeLessThanOrEqual(w);
  }
  await page.goto('/chicos/cuentos');
  await expectAccessible(page);
  await page.locator('main a[href^="/chicos/cuentos/"]').first().click();
  await page.waitForURL('**/chicos/cuentos/**');
  await expectAccessible(page);
});
