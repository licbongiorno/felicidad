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
  await expect(page.getByText('Revisado clínicamente', { exact: false })).toBeVisible();
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

test('tarjeta diaria DBT: la tarjeta de hoy aparece en la planilla semanal, imprimible y en CSV', async ({ page }) => {
  await open(page, '/diario?nuevo=tarjeta-diaria');
  await page.getByLabel('El día en una frase').fill('Día largo pero lo pude manejar');
  for (const [name, v] of [['Tristeza', '6'], ['Miedo o ansiedad', '3'], ['Ira', '1'], ['Vergüenza o culpa', '0'], ['Alegría', '4']] as const) {
    await page.getByRole('radiogroup', { name }).getByRole('radio', { name: v, exact: true }).click();
  }
  await page.getByLabel('Habilidades que usaste').fill('TIPP, mente sabia');
  await page.getByRole('button', { name: 'Guardar entrada' }).click();
  await page.getByRole('link', { name: 'Ver la semana' }).click();
  await page.waitForURL('**/diario/tarjeta-semanal');
  const table = page.getByRole('table');
  await expect(table.getByRole('row', { name: /^Tristeza/ })).toContainText('6');
  await expect(table.getByRole('row', { name: /^Habilidades/ })).toContainText('TIPP, mente sabia');
  await expect(page.getByText('Días con tarjeta: 1 de 7')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Semana siguiente →' })).toBeDisabled();
  const download = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Descargar planilla (CSV)' }).click();
  expect((await download).suggestedFilename()).toMatch(/^tarjeta-dbt-\d{4}-\d{2}-\d{2}\.csv$/);
  await noSideScroll(page);
  await expectAccessible(page);
  await page.getByRole('button', { name: '← Semana anterior' }).click();
  await expect(page.getByText('No hay tarjetas esta semana.')).toBeVisible();
});

test('patrones del ánimo: muestra la asociación con su confianza y abre un experimento ya armado', async ({ page }) => {
  await page.goto('/dashboard');
  // Datos de demostración: 16 días de ánimo, con práctica los días de ánimo alto.
  await page.evaluate(() => {
    const day = (i: number) => {
      const d = new Date();
      d.setHours(20, 0, 0, 0);
      d.setDate(d.getDate() - i);
      return d;
    };
    const key = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const days = Array.from({ length: 16 }, (_, i) => day(i + 1));
    const data = {
      sessions: days
        .filter((_, i) => i % 2 === 0)
        .map((d, i) => ({ id: `s${i}`, practiceId: 'atencion-respiracion', family: 'attentional', skills: ['attention'], source: 'gym', startedAt: d.toISOString(), durationSec: 600, completed: true, moodPre: null, moodPost: null })),
      afflictions: [],
      checkins: days.map((d, i) => ({ date: key(d), mood: i % 2 === 0 ? 8 : 5, perma: null, updatedAt: d.toISOString() })),
      journal: [],
      assessments: [],
      applications: [],
    };
    localStorage.clear();
    localStorage.setItem('eudaimonia-demo', JSON.stringify(data));
  });
  await page.goto('/dashboard');
  await expect(page.getByText(/Los días que practicaste una habilidad, tu ánimo ese mismo día fue en promedio 3 puntos más alto/)).toBeVisible();
  await expect(page.getByText('Confianza media').first()).toBeVisible();
  await expect(page.getByText(/Son asociaciones, no causas/)).toBeVisible();
  await page.getByRole('link', { name: 'Comprobarlo con un experimento' }).first().click();
  await page.waitForURL('**/diario?**');
  await expect(page.getByLabel('La creencia que quiero poner a prueba')).toHaveValue('Cuando hago una práctica corta, me siento mejor ese mismo día.');
  await expect(page.getByLabel('Qué haré para comprobarla')).toHaveValue(/un día sí y otro no/);
});

test('confianza por habilidad: se registra al contar que la usaste y aparece en la práctica y en el panel', async ({ page }) => {
  await open(page, '/gimnasio/dear-man');
  await page.getByRole('button', { name: '¿Ya la usaste en tu vida? Cuéntalo' }).click();
  const sheet = page.getByRole('dialog');
  await sheet.getByRole('radio', { name: 'Sí, la usé' }).click();
  await sheet.getByRole('radio', { name: 'Me sirvió' }).click();
  await sheet.getByRole('radiogroup', { name: /cuánta confianza/i }).getByRole('radio', { name: '6', exact: true }).click();
  await expectAccessible(page);
  await sheet.getByRole('button', { name: 'Guardar' }).click();
  await expect(sheet.getByRole('status')).toContainText('Guardado');
  await page.keyboard.press('Escape');
  await page.reload();
  await expect(page.getByText('Tu confianza para usarla:')).toContainText('6 de 10');
  await page.goto('/dashboard');
  await expect(page.getByRole('link', { name: 'DEAR MAN: pedir lo que necesitas' }).first()).toBeVisible();
  await expect(page.getByText('Confianza en tus habilidades')).toBeVisible();
});

test('mapa de esquemas: se lee un esquema, se marca y queda guardado; los modos enlazan a prácticas', async ({ page }) => {
  await open(page, '/laboratorio/esquemas');
  await expect(page.getByRole('heading', { name: 'Mapa de esquemas y modos', level: 1 })).toBeVisible();
  await noSideScroll(page);
  await expectAccessible(page);
  const card = page.locator('li').filter({ hasText: 'Abandono' }).first();
  await card.getByText('Abandono').click();
  await expect(card.getByText(/Tu adulto sano podría decirte/)).toBeVisible();
  await card.getByRole('button', { name: 'Me resuena' }).click();
  await expect(page.getByRole('heading', { name: 'Te resuenan un esquema' })).toBeVisible();
  await page.reload();
  await expect(page.getByRole('heading', { name: 'Te resuenan un esquema' })).toBeVisible();
  await page.getByRole('tab', { name: 'Los modos' }).click();
  await expect(page.getByRole('heading', { name: 'Crítico punitivo' })).toBeVisible();
  await expectAccessible(page);
});

test('genograma: se suman personas, se dibuja y aparece lo que se repite entre generaciones', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await open(page, '/laboratorio/genograma');
  await expect(page.getByRole('heading', { name: 'Tu genograma', level: 1 })).toBeVisible();
  await expectAccessible(page);

  async function addPerson(button: ReturnType<Page['getByRole']>, name: string, tag: string) {
    await button.click();
    const sheet = page.getByRole('dialog');
    await sheet.getByLabel('Apodo o iniciales').fill(name);
    await sheet.getByRole('button', { name: tag }).click();
    await sheet.getByRole('button', { name: 'Guardar' }).click();
    await expect(sheet).toBeHidden();
  }
  await addPerson(page.getByRole('button', { name: /Primera persona/ }), 'Mamá', 'Migración');
  await expect(page.getByRole('heading', { name: 'Familia de Mamá' })).toBeVisible();
  const branch = page.locator('section').filter({ has: page.getByRole('heading', { name: 'Familia de Mamá' }) });
  await addPerson(branch.getByRole('button', { name: /Padre o madre/ }).first(), 'Abuela Rosa', 'Migración');

  const chart = page.getByRole('img', { name: /Genograma con 3 personas/ });
  await expect(chart).toBeVisible();
  await expect(chart.locator('text').filter({ hasText: 'Abuela Rosa' })).toBeVisible();
  await expect(page.getByText('«Migración» aparece en 2 personas de 2 generaciones: Abuela Rosa y Mamá.')).toBeVisible();
  await noSideScroll(page);
  await expectAccessible(page);

  await page.reload();
  await expect(page.getByRole('button', { name: /Abuela Rosa/ })).toBeVisible();
});

test('revisión clínica: filtra por prioridad y muestra primero lo crítico', async ({ page }) => {
  await open(page, '/revision');
  await expect(page.getByRole('heading', { name: 'Revisión clínica', level: 1 })).toBeVisible();
  // Con el catálogo aprobado, «Por revisar» queda casi vacío: se recorre por tipo para volver a revisar.
  await page.getByRole('tab', { name: 'Prácticas' }).click();
  const first = page.locator('main li').first();
  await expect(first.getByText(/^Prioridad 1 · crítica/)).toBeVisible();
  await page.getByRole('button', { name: /^Prioridad 3 · habitual/ }).click();
  await expect(page.locator('main li').first().getByText(/^Prioridad 3 · habitual/)).toBeVisible();
  await expectAccessible(page);
});

test('compartir: una píldora se comparte sólo con su enlace público', async ({ page }) => {
  // Sin menú de compartir del sistema: se copia el enlace.
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'share', { value: undefined, configurable: true });
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: async (t: string) => void ((window as unknown as { __copied: string }).__copied = t) },
      configurable: true,
    });
  });
  await open(page, '/biblioteca/pildoras');
  const first = page.locator('main a[href^="/biblioteca/pildoras/"]').first();
  const href = (await first.getAttribute('href'))!;
  await first.click();
  await page.waitForURL(`**${href}`);
  for (let i = 0; i < 8; i++) {
    const next = page.getByRole('button', { name: /^(Siguiente →|Terminar)$/ });
    const label = (await next.innerText()).trim();
    await next.click();
    if (label === 'Terminar') break;
  }
  await page.getByRole('button', { name: 'Compartir' }).click();
  await expect(page.getByText('Enlace copiado')).toBeVisible();
  expect(await page.evaluate(() => (window as unknown as { __copied: string }).__copied)).toBe(new URL(href, page.url()).toString());
});

test('navegación de escritorio: «Más» abre el resto de las secciones', async ({ page, isMobile }) => {
  test.skip(isMobile, 'La barra superior es de escritorio');
  await open(page, '/dashboard');
  const bar = page.getByRole('banner');
  await expect(bar.getByRole('link', { name: 'Biblioteca' })).toBeVisible();
  await bar.getByRole('button', { name: 'Más' }).click();
  const sheet = page.getByRole('dialog', { name: 'Más' });
  await expect(sheet.getByRole('link', { name: /Desafíos/ })).toBeVisible();
  await expect(sheet.getByRole('link', { name: /Informe/ })).toBeVisible();
  await expectAccessible(page);
});

test('ajustes: se puede volver a hacer el test inicial', async ({ page }) => {
  await open(page, '/ajustes');
  await expect(page.getByRole('heading', { name: 'Tu punto de partida' })).toBeVisible();
  await page.getByRole('button', { name: 'Ayúdame a elegir (3 preguntas)' }).click();
  await expect(page.getByRole('button', { name: 'Ayúdame a elegir (3 preguntas)' })).toHaveCount(0);
  await expectAccessible(page);
});
