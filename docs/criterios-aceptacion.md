# Criterios de aceptación

- **Fecha:** 2026-10-15
- **Formato:** Dado / Cuando / Entonces, o una lista comprobable. Cada criterio indica la prueba que lo **cubre** hoy (nombre exacto del test) o que lo **cubrirá** (archivo previsto).
- **Convenciones:**
  - «e2e» = Playwright en modo demo (escritorio y móvil);
  - «reglas» = `tests/rules/firestore.rules.test.ts` con emulador;
  - «unit» = Vitest.
- **Límite:** los e2e corren en modo demo. El camino real con Firebase (Auth, App Check, reglas publicadas) no tiene e2e (ver [arquitectura-tecnica.md](arquitectura-tecnica.md) §7).

---

## 1. Funciones existentes clave

### 1.1 Primer uso y Mi espacio

| # | Criterio | Prueba |
|---|---|---|
| C-01 | **Dado** un usuario nuevo, **cuando** abre el panel, **entonces** ve la bienvenida | e2e `flows.spec.ts` «un usuario nuevo ve la bienvenida en el panel» |
| C-02 | **Dado** el primer uso, **cuando** responde las tres preguntas, **entonces** recibe un programa y una primera práctica sin precauciones | e2e «primer uso: tres preguntas arman una ruta con programa y primera práctica» |
| C-03 | **Dado** «Tu día», **cuando** responde la pregunta del día, **entonces** se suma un paso y se celebra el primer hito, sin mensajes de castigo | e2e «tu día: responder la pregunta del día suma un paso y celebra el primer hito»; unit `daily.test.ts` |
| C-04 | Objetivos ≤ 3, favoritas ≤ 60, preguntas ≤ 10 y plan ≤ 3 prácticas se guardan; se rechazan los que superan el límite | reglas «el usuario guarda sus objetivos, favoritas, plan y preguntas», «rechaza otros documentos, listas largas y campos ajenos»; unit `personal.test.ts` |
| C-05 | Cada sugerencia muestra su porqué | unit `logic.test.ts` (comprueba `reason` de una sugerencia de `recommend.ts`) |

### 1.2 Mapa de habilidades y motor de ejercicios

| # | Criterio | Prueba |
|---|---|---|
| C-10 | Toda práctica tiene un id único, pasos con INFLESZ ≥ 55, ≤ 45 palabras y frases ≤ 30 palabras, y referencias con año | unit `quality.test.ts`, `content.test.ts` |
| C-11 | Todo id referenciado por programas, desafíos, antídotos, módulos y paquetes existe | unit `content.test.ts`, `packs.test.ts`, `challenges.test.ts` |
| C-12 | **Dado** una práctica de riesgo 2, **cuando** se abre, **entonces** hay que leer las precauciones antes de empezar y se ofrece una alternativa | e2e «nivel de riesgo 2: hay que leer las precauciones antes de empezar» |
| C-13 | **Dado** una práctica avanzada, **entonces** recomienda sus prerrequisitos | e2e «niveles: una práctica avanzada recomienda sus prerrequisitos» |
| C-14 | **Cuando** se elige la versión breve, **entonces** la práctica se acorta en proporción y ningún paso baja de 20 s | e2e «duración ajustable: la versión breve acorta la práctica»; unit `features.test.ts` (`scaleSteps`) |
| C-15 | Las herramientas rápidas (1–3 min) no muestran selector de duración | e2e «gimnasio: herramientas rápidas de 1–3 minutos sin selector de duración» |
| C-16 | **Cuando** termina una práctica y escribe «Llevarlo a tu vida», **entonces** el plan se guarda con la sesión | e2e «llevarlo a tu vida: el plan se guarda con la práctica»; reglas «acepta una aplicación válida y un plan en la sesión» |
| C-17 | La sesión guarda `contentVersion` (entero ≥ 1) | reglas «acepta un entero positivo y rechaza otros valores» |
| C-18 | Favoritas: se marcan desde el catálogo y aparecen arriba | e2e «favoritas: se marcan desde el catálogo y aparecen arriba» |

### 1.3 Antídotos y seguridad

| # | Criterio | Prueba |
|---|---|---|
| C-20 | Flujo completo: reconocer → medir → practicar → volver a medir | e2e «antídoto completo: reconocer → medir → practicar → volver a medir» |
| C-21 | **Dado** el cribado marcado, **cuando** continúa, **entonces** el ejercicio se detiene y se muestran los recursos de crisis; **y** el indicador no se guarda | e2e «el cribado de riesgo detiene el ejercicio y muestra ayuda». La no persistencia: **cubrirá** un unit sobre `AntidoteModule` (a crear) |
| C-22 | **Dado** una intensidad ≥ 8, **entonces** hay estabilización previa; **con** ≥ 9 se sugiere TIPP con sus contraindicaciones | e2e «kit de crisis: a intensidad 9 el antídoto sugiere TIPP, con sus contraindicaciones» |
| C-23 | Pánico: psicoeducación primero y aviso médico | e2e «antídoto de pánico: psicoeducación primero y aviso médico» |
| C-24 | El botón «Ayuda» está en todas las pantallas y sus enlaces llaman a las líneas de crisis | e2e «ayuda: el botón está en todas las pantallas y llama a las líneas de crisis» |
| C-25 | Los recursos de crisis tienen fecha de verificación de menos de 12 meses | unit `quality.test.ts` (`CRISIS_RESOURCES_CHECKED_AT`) |
| C-26 | Cada antídoto tiene «Cuándo no usarlo» legible (INFLESZ ≥ 55, frases ≤ 26 palabras) | unit `quality.test.ts`, `content.test.ts` («antídotos») |
| C-27 | El `emotionId` de las reglas coincide con `ANTIDOTES` | unit `content.test.ts` (coherencia con las reglas); reglas «rechaza claves no permitidas y rangos inválidos» |

### 1.4 Diario

| # | Criterio | Prueba |
|---|---|---|
| C-30 | Una entrada guardada aparece en la línea de tiempo | e2e «diario: una entrada guardada aparece en la línea de tiempo»; unit `JournalEditor.test.tsx` |
| C-31 | Registro de pensamientos con intensidad antes y después | e2e «diario: registro de pensamientos (TCC) con intensidad antes y después» |
| C-32 | El servidor rechaza campos de otra plantilla y textos > 280 / 8000 | reglas «rechaza campos de otra plantilla y textos demasiado largos» |
| C-33 | Los 28 tipos del código coinciden con los de las reglas | unit `content.test.ts` («diario») |
| C-34 | **Cubrirá:** cada uno de los 28 tipos tiene un caso válido y uno inválido en las reglas | reglas (tabla parametrizada, a crear en `firestore.rules.test.ts`) |

### 1.5 Evaluaciones e informe

| # | Criterio | Prueba |
|---|---|---|
| C-40 | WHO-5 y GAD-7: la puntuación y la interpretación son correctas | e2e «WHO-5: cinco respuestas…», «GAD-7: siete respuestas…» |
| C-41 | El servidor rechaza puntuaciones manipuladas en los 6 instrumentos | reglas «rechaza puntuaciones manipuladas…», «rechazan totales manipulados…», «rechaza rangos y puntuaciones inválidos» |
| C-42 | PHQ-9 (borrador): el ítem de riesgo muestra la ayuda antes que la puntuación | e2e «PHQ-9 (borrador): el ítem de riesgo muestra la ayuda antes que la puntuación» |
| C-43 | El informe refleja las evaluaciones y **oculta el diario por defecto** | e2e «informe: refleja las evaluaciones y oculta el diario por defecto» |
| C-44 | El informe se imprime en claro aunque la pantalla esté en oscuro | e2e «el informe se imprime en claro aunque la pantalla esté en oscuro» |

### 1.6 Datos, privacidad y seguridad técnica

| # | Criterio | Prueba |
|---|---|---|
| C-50 | Un usuario no lee ni escribe los datos de otro; sin sesión no hay acceso | reglas «el dueño escribe y lee sus sesiones», «otro usuario no puede leer ni escribir», «sin sesión no hay acceso» |
| C-51 | Los registros clínicos son append-only; las marcas de tiempo no se falsifican | reglas «los registros clínicos son append-only», «rechaza marcas de tiempo falsificadas» |
| C-52 | Nadie se autoasigna el rol de clínico | reglas «no se puede autoasignar el rol de clínico» |
| C-53 | Sin vínculo activo, el clínico no lee; con vínculo pendiente tampoco; el clínico nunca escribe | reglas del bloque «vínculo clínico» |
| C-54 | La exportación descarga un JSON con los datos | e2e «ajustes: la exportación descarga un JSON con los datos» |
| C-55 | CSP activa, sin violaciones en el uso normal, y bloquea envíos a dominios no autorizados | e2e «seguridad: política CSP activa…», «seguridad: la CSP bloquea enviar datos a un dominio no autorizado» |
| C-56 | Sin conexión, la app abre las secciones clave y avisa del estado | e2e «sin conexión: la app abre las secciones clave y avisa del estado» |
| C-57 | **Cubrirá:** tras «Borrar cuenta» no queda perfil, ni subcolecciones, ni cuenta de Auth, ni `careLinks`, ni datos locales personales | e2e contra emuladores (P3) y unit del flujo de `Settings` (a crear) |

### 1.7 Accesibilidad y diseño

| # | Criterio | Prueba |
|---|---|---|
| C-60 | WCAG 2.1 AA (axe) en 34 rutas en claro y 12 en oscuro, en escritorio y móvil | e2e «accesibilidad WCAG 2.1 AA: {ruta}», «… en oscuro: {ruta}» |
| C-61 | El primer Tab ofrece saltar al contenido; el foco no escapa de una hoja modal | e2e «teclado: el primer Tab ofrece saltar al contenido», «teclado: el foco no escapa de una hoja modal abierta» |
| C-62 | Ninguna página se desplaza hacia los costados | e2e «ninguna página se desplaza hacia los costados (celular y computadora)» |
| C-63 | La apariencia elegida se aplica y persiste | e2e «ajustes: la apariencia elegida se aplica y persiste al recargar» |
| C-64 | **Cubrirá:** axe en `/desafios`, `/biblioteca`, `/biblioteca/pildoras`, `/familia/cuentos`, `/login` y en el modo oscuro de `/crecimiento` y `/laboratorio` | e2e `flows.spec.ts` (ampliar la lista de rutas) |

### 1.8 Recorridos, Laboratorio, Biblioteca

| # | Criterio | Prueba |
|---|---|---|
| C-70 | «Ayúdame a elegir» recomienda un programa | e2e «programas: «Ayúdame a elegir» recomienda uno» |
| C-71 | Desafíos: empezar, marcar el día, verlo hecho y poder dejarlo | e2e `formats.spec.ts` «desafíos: empezar uno, marcar el día y verlo hecho; se puede dejar»; unit `challenges.test.ts` |
| C-72 | Píldoras: se pasan las tarjetas y queda marcada como leída | e2e `formats.spec.ts` «píldoras: desde la biblioteca, se pasan las tarjetas y queda marcada como leída» |
| C-73 | El simulador explica una respuesta pasiva y deja probar otra | e2e «laboratorio: el simulador explica una respuesta pasiva y deja probar otra» |
| C-74 | La caja de herramientas aparece en el semáforo en rojo | e2e «laboratorio: la caja de herramientas aparece en el semáforo en rojo» |
| C-75 | Glosario, diagrama del ciclo y lectura en voz alta | e2e «biblioteca: glosario, diagrama del ciclo y lectura en voz alta» |
| C-76 | Buscador: Ctrl+K, sin tildes, Enter abre el resultado; enlace profundo a un antídoto | e2e «buscador: Ctrl+K…», «buscador: botón de la cabecera y enlace profundo a un antídoto»; unit `search.test.ts`, `CommandPalette.test.tsx` |

### 1.9 Familia y modo chico

| # | Criterio | Prueba |
|---|---|---|
| C-80 | El perfil exige el consentimiento del adulto | e2e `kids.spec.ts` «el perfil exige el consentimiento del adulto»; reglas «rechaza perfiles sin consentimiento…» |
| C-81 | En modo chico, el área de adultos queda cerrada y se sale sólo con el código | e2e «modo chico: el área de adultos queda cerrada y se sale sólo con el código»; unit `kidMode.test.ts` |
| C-82 | Una emoción difícil al máximo invita a buscar al adulto y llega a su panel | e2e «¿cómo me siento?: una emoción difícil al máximo invita a buscar al adulto y llega a su panel» |
| C-83 | Ayuda para chicos: adulto de confianza y Línea 102; adolescentes: también las líneas de salud mental | e2e «ayuda para chicos: adulto de confianza y Línea 102», «adolescentes: líneas de salud mental en la ayuda…» |
| C-84 | Las actividades se adaptan a la edad; 0 a 3 años sin modo chico | e2e «las actividades se adaptan a la edad», «0 a 3 años: sin modo chico…»; unit `kids.test.ts` |
| C-85 | Las actividades exigen un perfil existente y validan la emoción, la intensidad y la nota ≤ 140 | reglas «las actividades exigen un perfil existente…», «valida emoción, intensidad y largo de la nota» |
| C-86 | Las respiraciones infantiles tienen al menos 6 s por respiración | unit `kids.test.ts` «los pasos que piden respirar despacio varias veces dan al menos 6 segundos por respiración» |

---

## 2. «Ahora (este PR)»

| # | Función | Criterios | Prueba |
|---|---|---|---|
| A1 | **Texto de privacidad adolescente** | **Dado** un perfil de 13 a 17 años en el frasco de gratitud, **entonces** el texto dice que el adulto no lo ve en la app **pero que queda guardado en su cuenta**. **Y** no aparece la frase «La app no le muestra a tu adulto lo que escribes aquí» | e2e `kids.spec.ts` «adolescentes: líneas de salud mental en la ayuda y lo que escriben no se muestra al adulto» (actualizado en este PR) |
| A2 | **Campos de `users/{uid}` restringidos** | **Dado** el dueño, **cuando** actualiza `displayName`, `timezone` o `consent`, **entonces** se acepta. **Cuando** agrega otro campo (p. ej. `premium: true`) **o** cambia `role` o `createdAt`, **entonces** se rechaza | reglas «no se pueden agregar campos nuevos al perfil (p. ej. un plan pago)», «se puede aceptar el consentimiento pero no cambiar el rol» |
| A3 | **Estado local aislado y borrado** | (a) **Dado** un dispositivo con datos locales de la cuenta X, **cuando** entra la cuenta Y, **entonces** `desafios`, `pildoras-leidas`, `eudaimonia-hitos` y `eudaimonia-resume` se descartan antes de mostrarse. (b) **Cuando** se cierra sesión **o** se elimina la cuenta, **entonces** esas claves y la de dueño se borran. (c) Las preferencias del dispositivo (tema, texto, voz, modo chico) **no** se borran. (d) Si `localStorage` no está disponible, no hay error | unit `src/lib/localData.test.ts` (3 casos en el bloque «datos locales personales»); que `AuthProvider` y `Settings` llamen a la limpieza: **cubrirá** un unit o e2e a definir |
| A4 | **Buscador ampliado** | **Cuando** se busca el título de una píldora, de un desafío, de un cuento o de una guía para familias (sin tildes), **entonces** aparece con su enlace correcto. Las secciones `/desafios`, `/crecimiento`, `/familia`, `/biblioteca/pildoras` y `/laboratorio` están en el índice. **Y** ningún resultado apunta a un borrador cuando no se muestran borradores | unit `src/domain/search.test.ts` (casos nuevos) |
| A5 | **Conteos de la portada sin borradores** | **Dado** un entorno sin borradores visibles, **entonces** la portada muestra 52 artículos y 23 registros de diario (no 53 y 24), y cualquier conteo sale de contenido con `isPublished` | **Cubrirá:** unit sobre la función de conteo (a extraer de `src/app/page.tsx`) o e2e en un build sin demo |
| A6 | **Precarga sin conexión** | **Dado** un service worker instalado, **cuando** no hay red y nunca se visitó `/plan-de-seguridad` ni `/chicos`, **entonces** ambas rutas abren (el plan sólo si está publicado o en demo) | e2e «sin conexión: la app abre las secciones clave y avisa del estado» (ampliar con estas rutas) |
| A7 | **Cuentos y píldoras en la cola de revisión** | `ContentKind` incluye «cuento». `reviewQueue()` devuelve los 35 cuentos y las 20 píldoras. El filtro por tipo de `/revision` incluye «píldora» y «cuento» | unit `src/domain/reviewQueue.test.ts` (casos nuevos) |
| A8 | **Mapa de habilidades (`/habilidades`)** | (a) Muestra las 16 necesidades de [vision-producto.md](vision-producto.md) §3, cada una con al menos una práctica publicada. (b) Cada práctica enlaza a su ficha en `/gimnasio/[id]`. (c) La ficha muestra el **objetivo de aprendizaje** (cuando existe) y la **fecha de revisión** (derivada de `ReviewRecord`: `reviewedAt` o, si no hay, `evidenceCheckedAt`, con su etiqueta). (d) No aparecen borradores a usuarios reales. (e) Pasa axe WCAG 2.1 AA en claro y en oscuro y no se desplaza hacia los costados | **Cubrirá:** unit del dominio de necesidades (cada id existe; cada necesidad tiene ≥ 1 práctica; sin duplicados por necesidad) y e2e en `flows.spec.ts` (ruta en la lista de axe y en la prueba de desplazamiento lateral). Archivos exactos: a definir por quien implementa |

---

## 3. Criterios transversales (Definition of Done)

Cada cambio de este proyecto, para darse por terminado:

- [ ] `npm run check` en verde (tipos, lint, tests).
- [ ] Si toca reglas: tests de reglas nuevos o actualizados, y un aviso en el changelog de que hay que publicarlas.
- [ ] Si toca contenido clínico: `version` incrementada si es relevante, entrada en [CONTENIDO-CHANGELOG.md](CONTENIDO-CHANGELOG.md), estado `pendiente` o `borrador` según corresponda.
- [ ] Si agrega una ruta: entra en la lista de axe (claro y oscuro) y en la prueba de desplazamiento lateral.
- [ ] Si agrega datos del usuario: entra en la exportación y el borrado.
- [ ] Sin dependencias nuevas de terceros que reciban datos del usuario.
