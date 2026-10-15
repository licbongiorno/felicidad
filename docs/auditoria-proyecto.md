# Auditoría del proyecto «Habilidades Psicológicas»

- **Fecha:** 2026-10-15
- **Rama auditada:** `claude/vigilant-dirac-baqtyu` (último commit `3ffae68`, «Pruebas e2e de píldoras, desafíos y dibujo; ajustes por el contenido nuevo»).
- **Alcance:** código, configuración, contenido clínico como código, reglas de Firestore, pruebas, CI y documentación.
- **Método:** lectura del código y conteos con comandos (`npx tsx` sobre `src/domain`, `npx vitest run`, `npx tsc --noEmit`, `npx eslint .` y análisis de la build local en `.next/`). No se ejecutaron los e2e ni los tests de reglas (necesitan el emulador y Java).
- **Convención:** **[verificado]** quiere decir que se comprobó en el código o con un comando. **[a verificar]** es una inferencia o algo que depende del entorno de producción (consola de Firebase, Vercel), al que esta auditoría no tiene acceso.

---

## 0. Cifras clave (verificadas)

| Elemento | Cantidad | Fuente |
|---|---|---|
| Prácticas (`PRACTICES`) | **108** (44 de paquetes) | `src/domain/practices.ts:620` |
| Módulos del Gimnasio (`MODULES`) | **18** | `src/domain/catalog.ts` |
| Antídotos (`ANTIDOTES`) | **22** emociones | `src/domain/antidotes.ts` |
| Plantillas de diario (`JOURNAL_TEMPLATES`) | **28** (4 ocultas: `plan-seguridad`, `caja-herramientas`, `reflexion-carta`, `pregunta-del-dia`) | `src/domain/journal.ts` |
| Artículos (`ARTICLES`) | **53** (17 de paquetes) | `src/domain/library.ts:505` |
| Píldoras (`PILLS`) | **20**, todas de paquetes | `src/domain/pills.ts:7` |
| Glosario (`GLOSSARY`) | **72** términos (30 de paquetes) | `src/domain/glossary.ts` |
| Trampas del pensamiento | 12 | `src/domain/thinkingTraps.ts` |
| Familias de emociones (rueda) | 10 | `src/domain/emotions.ts` |
| Programas (`PROGRAMS`) | **28** (7 de paquetes) | `src/domain/programs.ts` |
| Desafíos (`CHALLENGES`) | **4** | `src/domain/challenges.ts:31` |
| Instrumentos (`INSTRUMENTS`) | **6**: who5, gad7, phq9, ders16, isi, pss10 | `src/domain/instruments.ts` |
| Cartas / mazos | 59 cartas en 8 mazos | `src/domain/cards.ts:338` |
| Preguntas del día | 64 (8 temas) | `src/domain/daily.ts:126` |
| Laboratorio | 8 simulaciones de conversación y 24 frases de «¿hecho o interpretación?» | `src/domain/lab.ts` |
| Actividades infantiles (`KID_ACTIVITIES`) | **82** (47 de pasos, 21 «juntos», 8 de respirar, 4 de dibujo, 4 misiones, 2 de emoción, 2 de gratitud, 2 juegos) | `src/domain/kids.ts` |
| Caminos infantiles | 20 | `src/domain/kids.ts` |
| Cuentos (`STORIES`) | **35** (20 originales y 15 clásicos) | `src/domain/stories.ts:94` |
| Guías para familias (`KID_GUIDES`) | 13 (4 de paquetes) | `src/domain/kids-guides.ts` |
| Paquetes de contenido (`PACKS`) | 5 | `src/domain/packs/index.ts:9` |
| Elementos en borrador (`REVIEW_OVERRIDES`) | 6 | `src/domain/governance.ts:38-45` |
| Rutas (`page.tsx`) | **43** (34 en `(app)`, 6 en `(kids)` y 3 públicas: `/`, `/login`, `/privacidad`) | `find src/app -name page.tsx` |
| Páginas prerenderizadas en la build | 433 | `.next/prerender-manifest.json` |
| Archivos en `src/` | 271 (≈ 40 000 líneas TS/TSX; `src/domain` ≈ 21 000) | `wc -l` |
| Componentes `.tsx` | 101 | `src/components` |
| Tests unitarios y de componentes (Vitest) | **493 tests en 20 archivos, todos en verde** (4,6 s) | `npx vitest run` |
| Tests de reglas (emulador) | 36 casos (`it`) | `tests/rules/firestore.rules.test.ts` |
| Tests e2e (Playwright) | 63 `test()` (45 de flujos, 2 de formatos y 16 de chicos), más auditorías axe en bucle: 34 rutas en claro y 12 en oscuro; cada uno se corre en escritorio y en móvil | `e2e/*.spec.ts` |
| `tsc --noEmit` / `eslint .` | sin errores | comandos |

---

## 1. Propósito y funcionalidades actuales

Es una aplicación web (PWA) para **entrenar habilidades psicológicas basadas en evidencia** entre sesiones de terapia o por cuenta propia: DBT, TCC, ACT, compasión, mindfulness, psicología positiva, logoterapia, Gestalt, terapias breves, etc. Tiene una sección supervisada para chicos de 0 a 17 años. Declara que es una «herramienta complementaria» que «no reemplaza la evaluación ni el tratamiento profesional» (`README.md`). El nombre interno anterior es «Protocolo Eudaimonía»: aparece en `package.json`, en las claves de `localStorage` y en `public/sw.js:2`.

Funcionalidades, por sección:

- **Panel / Tu día** (`/dashboard`, `src/components/dashboard/*`):
  - Ritual de tres pasos: check-in de ánimo (0–10, PERMA opcional), una práctica y la pregunta del día (`TodayCard.tsx`, `src/domain/daily.ts`).
  - Bienvenida y primer uso guiado: tres preguntas arman una ruta con un programa y una primera práctica (`Onboarding.tsx`, `src/domain/onboarding.ts`).
  - Tendencia de ánimo (`MoodTrend.tsx`), revisión semanal, «Qué te funciona» (`WhatWorks.tsx`, `src/domain/insights.ts`, con un mínimo de n) y sugerencias por reglas transparentes (`src/domain/recommend.ts`).
  - Objetivos, plan semanal y preguntas para la sesión (`src/components/personal/*`).
- **Gimnasio y módulos** (`/gimnasio`, `/gimnasio/[practiceId]`, `/gimnasio/temporizador`):
  - 108 prácticas en 18 módulos, con nivel y prerrequisitos (`src/domain/levels.ts`), nivel de riesgo 1–2 con alternativa (`catalog.ts:179`), enfoque de origen, evidencia con DOI y duración ajustable (breve, estándar o extendida).
  - Reproductor guiado con temporizador sin deriva y *wake lock* (`useGuidedTimer.ts`), «Retomar» durante 24 h (`src/lib/resume.ts`) y «Llevarlo a tu vida» (colección `applications`).
  - Favoritas y temporizador libre con campanas.
- **Antídotos** (`/antidotos`): 22 emociones. El flujo es reconocer → medir (SUDS) → practicar → volver a medir. Incluye cribado de riesgo y estabilización a intensidad alta (TIPP), y un historial (`AntidoteModule.tsx`, `SafetyPanel.tsx`, `AntidoteHistory.tsx`).
- **Diario y plantillas** (`/diario`): 24 plantillas visibles. Hay registro de pensamientos (TCC), DEAR MAN, tarjeta diaria y análisis en cadena (DBT), diario de sueño, experimento conductual, `sentido` (logoterapia), entre otras. La línea de tiempo y los borradores se guardan en `sessionStorage` (`JournalEditor.tsx:33-69`). La escalera de exposición está en borrador.
- **Laboratorio** (`/laboratorio/*`): simulador de conversaciones (8), semáforo emocional, caja de herramientas (se guarda como entrada de diario `caja-herramientas`) y el juego «¿Hecho o interpretación?».
- **Programas** (`/programas`, `/programas/[programId]`): 28 recorridos de varias semanas y un buscador «Ayúdame a elegir» (`ProgramFinder.tsx`).
- **Desafíos** (`/desafios`): 4 desafíos de 7, 21 o 30 días. Un día cuenta como hecho por registro o si se marca a mano. El estado vive **sólo en `localStorage`** (ver §9).
- **Biblioteca** (`/biblioteca/*`): 53 artículos con diagramas de ciclos y lectura en voz alta (`ArticleAudio.tsx`, `voice-queue.ts`), 20 píldoras en tarjetas (las leídas se marcan en `localStorage`), glosario de 72 términos, rueda de emociones y 12 trampas del pensamiento.
- **Evaluaciones** (`/evaluaciones`): WHO-5, GAD-7, DERS-16 y PSS-10 publicados; PHQ-9 e ISI en borrador. Cada una con interpretación, cambio relevante e historial de un año. Las reglas del servidor verifican la puntuación.
- **Informe** (`/informe`): resumen para el terapeuta, imprimible o en PDF, que se genera en el dispositivo. El diario sólo se incluye entrada por entrada, si el usuario lo marca (`TherapistReport.tsx`).
- **Cartas** (`/cartas`): 59 cartas filosóficas en 8 mazos, con volteo 3D en CSS.
- **Crecimiento / jardín** (`/crecimiento`): el jardín crece con la práctica y nunca decrece. Incluye la colección de habilidades DBT, el desafío semanal (12) y hitos (`src/domain/growth.ts`, `useMilestones.ts`).
- **Familia, modo chico y cuentos**:
  - Adulto: `/familia`, `/familia/chico/[kidId]`, `/familia/guia/[guideId]` y `/familia/cuentos`. Hasta 6 perfiles (`kids.ts:1970`), con consentimiento del adulto, actividades «juntos» para 0–3 años, panel con alertas e informe semanal.
  - Modo chico: `/chicos/*`. Se sale con un código de 4 cifras (`kidMode.ts`). Tiene tema propio `.kid-theme`, tipografía Nunito, mascota, narración por voz, caminos, álbum de stickers, dibujo (no se guarda, sólo se descarga: `Drawing.tsx:132`) y cuentos por edad.
  - Ayuda: Línea 102 y 911, más líneas de salud mental para adolescentes (`src/config/safety.ts`).
- **Plan de seguridad** (`/plan-de-seguridad`): Stanley-Brown, en **borrador**. Se oculta a usuarios reales con `isPublished('herramienta','plan-seguridad')`.
- **Revisión clínica** (`/revision`): panel para recorrer todo el contenido, aprobar o pedir cambios y exportar las decisiones. Las decisiones quedan en `localStorage` hasta exportarlas (`ReviewPanel.tsx`). El acceso se controla con `NEXT_PUBLIC_REVIEWER_EMAILS`.
- **Ajustes y exportación** (`/ajustes`): voz guía, campana, recordatorio en calendario (.ics, `src/lib/ics.ts`), apariencia (sistema, claro u oscuro), tamaño de texto, reducir movimiento, exportación JSON completa y borrado de la cuenta (`Settings.tsx:346-390`).
- **Privacidad** (`/privacidad`): política pública en borrador (Ley 25.326).
- **Buscador** (Ctrl/⌘ + K o «/»): combobox ARIA, sin tildes, con lógica AND y el índice cargado bajo demanda (`src/domain/search.ts`, `CommandPalette.tsx`).
- **Voz guía**: Web Speech API, sin servidores (`src/lib/voice.ts`). Prefiere una voz en español; si no está disponible, la práctica sigue en modo visual.
- **Transversales**: botón «Ayuda» con líneas de crisis en todas las pantallas (`HelpButton.tsx`), PWA sin conexión (`public/sw.js`), modo oscuro y consentimiento informado versionado (`src/lib/consent.ts`).

---

## 2. Stack, arquitectura y dependencias

**Versiones instaladas [verificado en `node_modules`]:** Next 15.5.27 (App Router), React 19.3.0, Firebase JS SDK 11.10.0, Motion 12.43.0, Zustand 5.0.15, Tailwind 3.4.19, TypeScript 5.9.3, Vitest 3.2.7, Playwright 1.64.0. Node 20 (`.nvmrc`).

- **Dependencias de ejecución:** sólo 6 (`firebase`, `motion`, `next`, `react`, `react-dom` y `zustand`). No hay librería de UI, de formularios, de i18n ni de gráficos: los gráficos son SVG propios.
- **Dependencias de desarrollo:** ESLint 9 (`eslint-config-next`), Testing Library, jsdom, `@firebase/rules-unit-testing`, `@axe-core/playwright` y PostCSS/Autoprefixer.

**Arquitectura en capas (vigente y respetada en el código):**

```
src/app/         enrutado y composición (App Router; grupos (app), (kids) y rutas públicas)
src/components/  UI por sección (cliente), sin acceso directo a Firestore salvo login/consent/settings
src/domain/      contenido clínico como código + lógica pura (sin React ni Firebase)
src/lib/         firebase (client, db, repositories), demo (memoryRepo), kids, utilidades (voz, ics, tema, a11y)
src/store/       Zustand: useProgressStore (proyección de Firestore), useKidsStore, useUiStore
src/providers/   AuthProvider (identidad, Context) y MotionProvider (LazyMotion)
src/config/      recursos de crisis por jurisdicción (Argentina)
```

- **Contenido como código:**
  - Cada elemento (práctica, artículo, plantilla…) es un objeto TS tipado con evidencia y referencias.
  - Los paquetes (`src/domain/packs/*.ts`) agrupan por tema prácticas, metadatos, artículos, programas, píldoras, glosario y guías. Se agregan en `packs/index.ts`.
  - Los tests de calidad (`quality.test.ts`, 183 tests; `content.test.ts`, 168) imponen legibilidad INFLESZ, longitud de frases, ids únicos y coherencia con las reglas.
- **Gobernanza** (`governance.ts`): estados `borrador`, `pendiente` y `revisado`, con versión por elemento. `isPublished()` oculta los borradores salvo en demo o con `NEXT_PUBLIC_SHOW_DRAFTS`.
- **Repositorio intercambiable:** `useProgressStore.loadRepo()` importa bajo demanda `lib/firebase/repositories` o `lib/demo/memoryRepo`, con la misma interfaz `DataRepo` (`useProgressStore.ts:26-54`).
- **Renderizado:** casi todas las páginas se prerenderizan como HTML estático con `generateStaticParams` en 10 rutas dinámicas. La excepción es `/familia/chico/[kidId]`, que no tiene `generateStaticParams` y se renderiza en el servidor en cada petición [verificado en `app-path-routes-manifest.json`]. Los datos del usuario llegan siempre del lado del cliente.

---

## 3. Rutas, componentes y módulos

| Ruta | Página / componente principal | Dominio | Datos |
|---|---|---|---|
| `/` | `app/page.tsx` (portada) | conteos de contenido | — |
| `/login` | `app/login/page.tsx` | — | Auth y `users/{uid}` |
| `/privacidad` | `app/privacidad/page.tsx` | — | — |
| `/dashboard` | `Dashboard`, `TodayCard`, `CheckinForm`, `MoodTrend`, `WeeklyReview`, `WhatWorks`, `Onboarding` | `daily`, `recommend`, `metrics`, `insights`, `onboarding` | checkins, sessions, journal y settings |
| `/gimnasio`, `/gimnasio/[practiceId]`, `/gimnasio/temporizador` | `SkillsCatalog`, `PracticePlayer`, `GuidedSequence`, `FreeTimer`, `BreathingOrb` | `practices*`, `catalog`, `levels`, `durations`, `freeTimer` | sessions, applications y favorites |
| `/antidotos` | `AntidoteModule`, `SafetyPanel`, `AntidoteHistory` | `antidotes*` | afflictionLogs y sessions |
| `/diario` | `JournalHome`, `JournalEditor`, `JournalTimeline` | `journal` | journal (+ borrador en sessionStorage) |
| `/laboratorio`, `/caja`, `/semaforo`, `/conversaciones[/simId]`, `/hecho-o-interpretacion` | `Toolbox`, `Semaphore`, `ConversationSim`, `FactOrInterpretation` | `lab` | journal (`caja-herramientas`) |
| `/programas[/programId]` | `ProgramViews`, `ProgramFinder` | `programs`, `library-programs` | derivado de sessions |
| `/desafios` | `Challenges`, `challengeStore` | `challenges` | **localStorage** + sessions y journal |
| `/biblioteca`, `/[articleId]`, `/pildoras[/pillId]`, `/glosario`, `/rueda-de-emociones`, `/trampas-del-pensamiento` | `ArticleAudio`, `CycleDiagram`, `PillReader`, `ReadingProgress` | `library*`, `pills`, `glossary`, `emotions`, `thinkingTraps` | **localStorage** (píldoras leídas) |
| `/evaluaciones` | `Assessments` | `instruments` | assessments |
| `/informe` | `TherapistReport` | `metrics`, `insights` | todo el store |
| `/cartas` | `CardDeck`, `PhilosophyCard` | `cards*` | — |
| `/crecimiento` | `GrowthPage`, `Garden`, `Milestones`, `WeeklyChallenge` | `growth`, `daily` | conteos (`getCountFromServer`) y localStorage (hitos) |
| `/familia`, `/familia/chico/[kidId]`, `/familia/guia/[guideId]`, `/familia/cuentos[/cuentoId]` | `FamilyHub`, `KidProfileForm`, `KidReport`, `GuideView`, `FamilyStories`, `TogetherActivities` | `kids`, `kids-guides`, `family-tips`, `stories*` | kids y kidActivities |
| `/chicos`, `/[actividad]`, `/album`, `/camino/[caminoId]`, `/cuentos[/cuentoId]` | `KidShell`, `KidHome`, `ActivityRunner` (+ 7 tipos en `activities/`), `KidAlbum`, `KidPaths`, `StoryBook`, `StoryScene` | `kids`, `stories`, `story-cast`, `story-art` | kidActivities y localStorage (modo, código y voz) |
| `/plan-de-seguridad` | `SafetyPlan` | `governance` | journal (`plan-seguridad`) |
| `/revision` | `ReviewPanel` | `reviewQueue`, `governance` | **localStorage** |
| `/ajustes` | `Settings` | — | settings, exportación y borrado |

**Componentes reutilizables** (`src/components/ui`): `Button`/`buttonStyles`, `Sheet` (modal con foco atrapado, `Sheet.tsx:36-51`), `Tabs`, `IntensityScale` (SUDS 0–10, con *pointer capture* tolerante), `EvidenceBadge`/`EvidencePanel` e `icons.tsx`. Para animaciones: `components/motion/Reveal.tsx` (`Stagger`) y `lib/motion.ts` (`fadeUp`, `stagger`, `calm`).

**Módulos de dominio relevantes:**

- `catalog.ts`: 22 enfoques, riesgo y 18 módulos.
- `governance.ts` y `reviewQueue.ts`: cola de revisión de 10 tipos de contenido.
- `levels.ts`: prerrequisitos.
- `recommend.ts`: sugerencias.
- `search.ts`: índice y búsqueda.
- `metrics.ts`: racha, dosis, línea base, día vivido por zona horaria.
- `insights.ts`: efectos con n mínima.
- `instruments.ts`: 6 instrumentos con su puntuación.
- `readability.ts`: INFLESZ.
- `growth.ts`: jardín y DBT.
- `daily.ts`: Tu día, preguntas e hitos.
- `challenges.ts`, `application.ts`, `personal.ts`.

---

## 4. Autenticación y usuarios

- **Proveedor:** Firebase Authentication con correo y contraseña, y Google por popup (`app/login/page.tsx:60-72`). El popup se carga con `browserPopupRedirectResolver` sólo en `/login`. El resto usa `initializeAuth` con persistencia IndexedDB/local (`lib/firebase/client.ts:88-91`).
- **Alta:** `ensureUserProfile` crea `users/{uid}` con `role: 'patient'`, la zona horaria y el consentimiento si se marcó (`repositories.ts:47-58`). La verificación de correo se envía al registrarse. La recuperación de contraseña no revela si la cuenta existe (`login/page.tsx:82`).
- **Sesión en la app:** `AuthProvider` escucha `onAuthStateChanged` y espera a `appCheckReady()`. Después se suscribe al perfil y conecta `useProgressStore` (`AuthProvider.tsx:40-79`).
- **Guardia de rutas, en el cliente y sólo para UX:**
  - `(app)/layout.tsx` sigue el orden sesión → perfil → consentimiento vigente (`ConsentGate`) → app. En modo chico redirige a `/chicos`.
  - `KidShell` exige sesión del adulto, consentimiento y un perfil de chico activo.
  - La seguridad real está en `firestore.rules`.
- **Consentimiento:** `CONSENT_VERSION = '2026-10-b'`, con edad mínima de 18 (`lib/consent.ts`). Si cambia la versión, el usuario tiene que volver a aceptar. Cada perfil infantil exige además `KID_CONSENT_VERSION`.
- **Roles:**
  - El cliente sólo puede crear `patient` (`firestore.rules:183`).
  - `clinician` y `careLinks` existen en las reglas y los tipos, pero **no hay UI ni Cloud Functions** para asignarlos [verificado: `careLinks` sólo aparece en `domain/types.ts`].
- **Cierre de sesión:** desconecta los stores, sale del modo chico, ejecuta `terminate` y `clearIndexedDbPersistence` de Firestore, y redirige (`AuthProvider.tsx:87-101`). **No limpia** las claves propias de `localStorage` (ver §9).
- **Verificación de correo:** sólo es un aviso (`VerifyEmailNotice.tsx:12`). Ni la app ni las reglas exigen `email_verified` [verificado].
- **Modo demo** (`lib/demo/index.ts`):
  - Se activa sólo con `NEXT_PUBLIC_DEMO_MODE=true`. Si falta la configuración de Firebase, aparece `ConfigError`; nunca hay una degradación silenciosa (`CONFIG_MISSING`).
  - Usa un usuario ficticio `uid: 'demo'` (`AuthProvider.tsx:14-15`), `memoryRepo` y `memoryKids`, que persisten en `localStorage` (`eudaimonia-demo` y la clave de chicos). Muestra los borradores y da acceso a `/revision`.
  - Los e2e y la build de CI corren en demo (`playwright.config.ts`, `ci.yml`).

---

## 5. Persistencia

### 5.1 Firestore (nube): esquema real según `firestore.rules`

| Ruta | Escritura | Validación del servidor |
|---|---|---|
| `users/{uid}` | create (sólo `role:'patient'`), update y delete del dueño | `create` con lista blanca de claves. `update` sólo prohíbe tocar `role` y `createdAt` (**no restringe claves nuevas**, `firestore.rules:185-186`) |
| `users/{uid}/sessions` | append-only | claves, familia, `source ∈ {gym, antidote}`, duración ≤ 4 h, `startedAt` ≤ ahora + 5 min, `createdAt == request.time`, `tz` y `contentVersion` |
| `users/{uid}/afflictionLogs` | append-only | `emotionId` en una lista de 22 (coincide con `ANTIDOTES` [verificado]), intensidades 0–10, `trigger` ≤ 280 |
| `users/{uid}/checkins/{YYYY-MM-DD}` | create y update | id = fecha, mood 0–10; `perma` sólo se exige que sea un mapa |
| `users/{uid}/journal` | append-only | `type` en una lista de 28 y **campos por tipo** con límites de 280 y 8000 (`validJournalValues`, líneas 58-163). Las 28 plantillas del código coinciden con las reglas [verificado con script] |
| `users/{uid}/settings/personal` | set (merge) | goals ≤ 3, favorites ≤ 60, questions ≤ 10, plan de ≤ 3 prácticas |
| `users/{uid}/applications` | append-only | `usefulness` enumerado, `note` ≤ 280 |
| `users/{uid}/assessments` | append-only | número de ítems, rangos y **coherencia de la puntuación** de los 6 instrumentos (con los ítems invertidos de PSS-10) |
| `users/{uid}/kids` | create, update (sólo name, band y avatar) y delete | apodo de 1 a 24 caracteres, 5 franjas, 8 avatares y consentimiento con `acceptedAt == request.time` |
| `users/{uid}/kidActivities` | append-only | el `kidId` tiene que existir (`exists()`), emoción enumerada, intensidad de 1 a 3 y nota ≤ 140 |
| `users/{uid}/stats` | sólo lectura (backend) | no hay backend que lo escriba |
| `careLinks/{clin}_{pat}` | lo crea el clínico (pending) y sólo el paciente lo activa o revoca | lectura por `hasActiveCareLink` en todas las subcolecciones |
| `/{document=**}` | denegado | — |

- **Consultas:** las suscripciones tienen ventana de 90 días para sessions, afflictionLogs, checkins y journal, y de 365 días para assessments. Applications, settings y kidActivities no tienen ventana (`useProgressStore.ts:166-175`).
- **Índices:** no hay índices compuestos. Se excluyen de la indexación los campos de texto libre `afflictionLogs.trigger` y `journal.values` (`firestore.indexes.json`).
- **Caché offline:** `persistentLocalCache` con `persistentMultipleTabManager` (`lib/firebase/db.ts:28-30`). Las escrituras no se esperan y los rechazos llegan a `syncError` y de ahí a `SyncNotice`.
- **Recuentos de toda la vida (jardín):** `fetchLifetimeCounts` hace **17 consultas `getCountFromServer`** (3 familias, 11 prácticas DBT, 2 tipos de diario y el total) cada vez que se conecta el store y **tras cada escritura** de sesión, antídoto o diario (`repositories.ts:179-199`, `useProgressStore.ts:143-144`). Cada consulta de recuento cobra al menos 1 lectura.
- **Exportación y borrado:** se recorren `USER_COLLECTIONS` (9 subcolecciones) y el perfil (`repositories.ts:33, 91-112`).

### 5.2 Almacenamiento local del navegador [verificado con `grep`]

| Clave | Qué | Ámbito | ¿Entra en la exportación o el borrado? |
|---|---|---|---|
| `desafios` (`challengeStore.ts:7`) | desafíos activos y días marcados a mano | **dispositivo, sin uid** | No |
| `pildoras-leidas` (`pillProgress.ts:4`) | píldoras leídas | dispositivo, sin uid | No |
| `eudaimonia-hitos` (`useMilestones.ts:8`) | hitos ya celebrados | por uid | No |
| `eudaimonia-resume` (`resume.ts:12`) | paso de una práctica interrumpida (24 h) | dispositivo | No |
| `eudaimonia-review` (`ReviewPanel.tsx:13`) | decisiones de revisión clínica | dispositivo | No (se exportan a mano) |
| `eudaimonia-prefs` (`useUiStore.ts:13`) | voz, campana y desafío semanal visible | dispositivo | No |
| tema y a11y (`lib/theme.ts`, `lib/a11y.ts`) | apariencia, tamaño de texto y movimiento | dispositivo (script de arranque en `<head>`) | No |
| `eudaimonia-kid-mode`, `eudaimonia-kid-pin` (`kidMode.ts:14-15`) | modo chico activo y hash con sal del código | dispositivo | No |
| `eudaimonia-kid-voice` (`useNarration.ts:12`) | narración por chico | dispositivo | No |
| `eudaimonia-demo` y chicos demo | **todo** el progreso en modo demo | dispositivo | Sí (en demo) |
| `sessionStorage` (`JournalEditor.tsx:33`) | borrador del diario | pestaña | No |

### 5.3 Cobertura de los tests de reglas

`tests/rules/firestore.rules.test.ts` tiene 36 casos y cubre:

- aislamiento entre usuarios y acceso sin sesión;
- esquema, marcas de tiempo falsificadas y append-only;
- diario: válidos, campos ajenos, longitudes, `pregunta-del-dia`, `sentido`, autoconocimiento, `caja-herramientas` y DBT;
- `settings`, `applications`, los 6 instrumentos, rol y perfil, `careLinks` (pendiente o activo, y que el clínico no escribe), `tz`, `contentVersion`, `kids` y `kidActivities`.

**Huecos [verificado]:**

- No se prueban 15 de los 28 tipos de diario uno por uno, aunque comparten patrón: `defusion`, `valores`, `carta-gratitud`, `perdon`, `diario-sueno`, `experimento`, `escalera-exposicion`, etc.
- No hay casos para `checkins` con `perma` arbitrario ni para `users/{uid}` update con claves nuevas.
- No se prueban la lectura por clínico de `kids` o `kidActivities`, ni la eliminación de `careLinks`.

`firestore-debug.log` (15 oct, 16:47) indica que el emulador se ejecutó localmente [a verificar el resultado].

---

## 6. Integraciones externas

- **Firebase:**
  - Auth (correo y Google) y Firestore. Configuración pública `NEXT_PUBLIC_FIREBASE_*` (`.env.local.example`).
  - No hay Cloud Functions, Storage ni Messaging. Las reglas se publican a mano (`npx firebase-tools deploy --only firestore`, `README.md:48`).
- **App Check (reCAPTCHA v3):**
  - Es opcional (`NEXT_PUBLIC_RECAPTCHA_SITE_KEY`). Antes de activarlo, se comprueba que reCAPTCHA entregue un token (8 s como máximo). Si falla, la app sigue sin App Check y lo avisa en la consola (`client.ts:36-75`).
  - Si App Check se *aplica* en la consola y reCAPTCHA no carga (por ejemplo, con un bloqueador), las peticiones se rechazan [a verificar el comportamiento en producción].
- **Google:** el popup de acceso y reCAPTCHA están permitidos en la CSP (`next.config.mjs:17,33`).
- **Vercel:** despliegue documentado (`README.md`). No hay `vercel.json`. Las cabeceras de seguridad están en `next.config.mjs`.
- **GitHub Actions:**
  - `ci.yml`: tipos, lint, tests y build (en demo); reglas en el emulador (Java 21); e2e con Chromium sobre la build de producción (en demo).
  - `referencias.yml`: verifica cada mes los DOI contra Crossref y falla si un DOI no existe o hay una discrepancia.
  - `ilustraciones.yml`: generación manual de ilustraciones de cuentos con **Pollinations.ai** o **Hugging Face** (`HF_TOKEN`). Las sube a la rama `ilustraciones-cuentos` con `contents: write`.
- **Crossref:** lo usa `scripts/verify-references.mjs` (`npm run verify:refs`).
- **Web Speech API**, `navigator.wakeLock`, `vibrate` (`haptics.ts`) y descarga de `.ics`: todo en el navegador, sin servidores.

---

## 7. Sistema de diseño

- **Tokens:** todos los colores de Tailwind son variables CSS `rgb(var(--x) / <alpha>)` (`tailwind.config.ts:9-10`).
  - Escalas: `stone` (50–950), `sage` (50–800) y `white`.
  - Superficie de acento: `accent.{from,to,fg,muted,soft}`.
  - Jardín: `garden.*` (15 tokens).
  - Sección infantil: `kid.*` (superficies, más 8 tintes y 11 pinturas, sólo dentro de `.kid-theme`).
- **Tema oscuro:**
  - Las escalas se reasignan en `:root[data-theme='dark']` y en `@media (prefers-color-scheme: dark) :root:not([data-theme='light'])` (`globals.css:59,109`). Lo mismo para `.kid-theme` (`globals.css:375,403`).
  - Los componentes no usan variantes `dark:`. Un script en `<head>` evita el destello (`lib/theme.ts:13`, `app/layout.tsx:34`). El informe se imprime siempre en claro (`@media print`).
- **Tipografía:** Inter (sans) y Newsreader (serif) con `next/font`. Nunito sólo en `(kids)`. Tamaño de texto «grande» y «muy grande» con `data-text` (`globals.css:317-320`).
- **Movimiento:**
  - `LazyMotion strict` con componentes `m`; las funciones avanzadas se cargan tras pintar (`MotionProvider.tsx`).
  - `reducedMotion="user"`, o `always` si en Ajustes se fuerza «reducir movimiento». Además, las reglas CSS `[data-motion='reduce']` y `prefers-reduced-motion` desactivan animaciones y transiciones (`globals.css:323-345`).
  - Lenguaje de movimiento sobrio: `calm` 0,5 s *ease-out*, desplazamientos ≤ 28 px (`lib/motion.ts`).
- **Componentes base:** ver §3. También hay una guía de redacción en `docs/GUIA-DE-ESTILO.md`, en parte verificada por tests: INFLESZ ≥ 55, frases cortas y «sin gamificación castigadora».

---

## 8. Estado: terminado, incompleto, duplicado o defectuoso

### Terminado [verificado]

- Flujos principales de adultos: práctica, antídoto, diario, evaluaciones, informe, programas, buscador, ajustes, exportación y borrado.
- Sección infantil completa, con 5 franjas y 82 actividades.
- Gobernanza y panel de revisión; PWA sin conexión; CSP; modo oscuro.
- Tipos, lint y 493 tests en verde.

### Incompleto

- **Módulo clínico:** `careLinks`, `role: 'clinician'` y `stats/summary` están en las reglas, pero falta la UI y el backend (`firestore.rules:361-383`; pendiente en `ARQUITECTURA.md:273-288`).
- **Borradores sin decisión clínica (6):** plan de seguridad, escalera de exposición (diario y artículo), PHQ-9, ISI (también tiene pendiente la licencia de Mapi) y «escalera valiente» infantil (`governance.ts:38-45`).
- **Todo el resto está `pendiente`:** no hay ningún elemento `revisado`, porque `REVIEW_OVERRIDES` no tiene ningún `reviewedBy`.
- **Cuentos fuera de la gobernanza:** `ContentKind` no incluye «cuento» (`governance.ts:21`), así que los 35 cuentos no aparecen en `reviewQueue()` (`reviewQueue.ts:54-70`), aunque el changelog los declare `pendiente`.
- **Ilustraciones de cuentos:** `STORY_ART` está vacío (`story-art.ts:6-7`) y `public/cuentos/` también. Todos los cuentos usan el dibujo SVG de respaldo.
- **Recursos de crisis sólo de Argentina** (`config/safety.ts`). No hay i18n, y «tú» o «vos» sigue sin decidirse (`GUIA-DE-ESTILO.md:7`).
- **Verificación de referencias:** el último informe local (`referencias-informe.json`) tiene **137 referencias, todas `ERROR_RED`** (sin red en el entorno donde se corrió). La última verificación correcta que se declara es del 2026-10-13, con «72/72 DOI» (`governance.ts:33`). Las referencias de los paquetes del 15 de octubre **no están verificadas** [verificado; a verificar con red].
- **Cobros y planes, notificaciones push, Android (TWA o Capacitor), audios humanos:** sólo existen como plan (`docs/PLAN-PREMIUM.md`).

### Duplicado o fragmentado

- **Contenido repartido en archivos por tanda**, no por tema: `practices*.ts` (8 archivos), `library*.ts` (6), `antidotes*.ts` (3), `cards*.ts` (3), `stories-*.ts` (2). Los paquetes nuevos sí van por tema. Conviven dos convenciones.
- **Dos vistas de cuentos:** `/familia/cuentos/*` (`FamilyStories`) y `/chicos/cuentos/*` (`KidStories`/`StoryBook`), sobre los mismos datos. Es intencional (adulto o chico), pero duplica rutas y chunks: ≈ 280 kB gzip cada una.
- **Íconos repetidos en la navegación:** `IconPath` en Programas y Desafíos, `IconSprout` en Tu jardín y Familia, `IconAntidote` en Antídotos y Plan de seguridad (`AppNav.tsx:35,40,42-44,51`).
- **`ARQUITECTURA.md` desactualizado:** dice 34 técnicas, 18 plantillas, 16 emociones, 28 artículos y «68 tests unitarios» (`ARQUITECTURA.md:22,161-167,198`). Su esquema de `journal` lista 8 tipos y el de `assessments` sólo WHO-5. Las cifras reales están en §0.
- **Comentario obsoleto en las reglas:** «la forma por tipo se valida en cliente» (`firestore.rules:250-251`), cuando en realidad se valida en el servidor (`validJournalValues`).

### Defectuoso o inconsistente [verificado]

- **Buscador incompleto:** `buildIndex()` no indexa píldoras, desafíos, cuentos, guías para familias ni actividades. `SECTIONS` no incluye `/desafios`, `/crecimiento`, `/familia`, `/biblioteca/pildoras` ni `/laboratorio` como sección base (`search.ts:47-60`, `61-113`).
- **Panel de revisión:** el filtro por tipo (`KINDS`) omite `pildora` (`ReviewPanel.tsx:14`). Las 20 píldoras sólo se ven en «pendientes».
- **Conteos de la portada:** incluyen borradores. `ARTICLES.length` cuenta `exposicion-gradual` y los registros de diario no ocultos cuentan `escalera-exposicion` (`app/page.tsx:64-68`). Muestran 53 y 24 donde un usuario real ve 52 y 23.
- **Borrado de cuenta no atómico:** primero se borran los datos y después se llama a `deleteUser`. Con `auth/requires-recent-login`, la cuenta de acceso sobrevive sin perfil (`Settings.tsx:374-386`). En el siguiente inicio de sesión, `ensureUserProfile` crea un perfil con `consent: null`. No se borran los `careLinks`.
- **Privacidad de adolescentes engañosa:** la UI dice «La app no le muestra a tu adulto lo que escribes aquí» (`Gratitude.tsx:69`). Pero las notas se guardan en `users/{uidAdulto}/kidActivities`: el adulto las puede leer por reglas y **las recibe en la exportación JSON** (`repositories.ts:33`).

---

## 9. Problemas de seguridad, accesibilidad, rendimiento y UX

### 9.1 Seguridad y privacidad

1. **[a verificar, alta] Reglas de Firestore pendientes de publicar.** El código acepta los tipos de diario `pregunta-del-dia` (`firestore.rules:156-158, 262`) y `sentido` (`159-162, 262`). El changelog pide «volver a publicar `firestore.rules`» en varias tandas (`CONTENIDO-CHANGELOG.md:64,77,121,151,217,246,283,348,498`).
   - El despliegue de reglas no está en la CI. Si producción tiene reglas anteriores, esas entradas (y las franjas `0-3` y `13-17`) **se rechazan con `permission-denied`**: el usuario sólo ve «El servidor rechazó el registro».
   - Comprobar en la consola de Firebase que las reglas publicadas coinciden con el archivo.
2. **[verificado, media] `users/{uid}` update sin lista blanca.** El dueño puede añadir cualquier campo (por ejemplo, `premium: true`, `plan: …`), porque sólo se prohíben `role` y `createdAt` (`firestore.rules:185-186`). Hoy no se explota, pero **bloquea el plan premium** si el derecho de acceso se guarda en el perfil. Tampoco se valida `consent` en `update`.
3. **[verificado, media] Validaciones laxas:**
   - `sessions.practiceId` no tiene límite de longitud y no se validan los elementos de `skills` (`firestore.rules:199,202`).
   - `afflictionLogs.antidoteId` no se valida (218-231).
   - `checkins.perma` acepta cualquier mapa (244).
   - El riesgo es acotado (son datos del propio usuario), pero permite documentos inflados.
4. **[verificado, media] Datos locales no ligados a la cuenta.** `desafios`, `pildoras-leidas`, `eudaimonia-resume`, `eudaimonia-review` y las preferencias:
   - no llevan uid;
   - no se limpian al cerrar sesión ni al borrar la cuenta (`AuthProvider.tsx:87-101`, `Settings.tsx:370-380`);
   - no entran en la exportación.
   En un equipo compartido, otra cuenta hereda los desafíos y las píldoras leídas. Esto contradice la intención declarada en el cierre de sesión («privacidad en equipos compartidos»).
5. **[verificado, baja] El código del modo chico es débil por diseño:**
   - 4 dígitos;
   - bloqueo de 30 s tras 5 intentos, guardado **sólo en memoria**, así que se reinicia al recargar (`kidMode.ts:20-21,79-84`);
   - sal con `Math.random` (`kidMode.ts:61`);
   - *fallback* de hash no criptográfico sin WebCrypto (`kidMode.ts:47-50`).
   Está documentado como «barrera de uso, no de seguridad», pero un chico de 10 a 17 años puede forzarlo recargando.
6. **[verificado, baja] El panel de revisión se protege sólo en el cliente,** y la lista de correos de revisores va en el bundle público (`NEXT_PUBLIC_REVIEWER_EMAILS`, `ReviewPanel.tsx:17-22`). El contenido ya es público, pero los correos quedan expuestos.
7. **[verificado, baja] CSP con `'unsafe-inline'`** en `script-src` y `style-src` (`next.config.mjs:17-18`). Es un límite conocido y documentado por el prerenderizado estático. El resto de la CSP es estricta: `connect-src` restringido, `frame-ancestors 'none'`, HSTS con preload y `Permissions-Policy`.
8. **[verificado] El correo no verificado tiene acceso completo** (`VerifyEmailNotice.tsx:12`). Las reglas no exigen `email_verified`.
9. **[a verificar, alta, legal] Diario en texto plano.** No hay cifrado a nivel de campo (pendiente en `ARQUITECTURA.md:174`). Faltan el registro ante la AAIP, la región de Firestore y la licencia del ISI.
10. **[verificado, baja] Las referencias pueden degradarse sin aviso.** `referencias.yml` sólo falla con `DOI_NO_EXISTE` o `DISCREPANCIA`. Si Crossref no responde (`ERROR_RED`), la verificación pasa.
11. **[verificado, baja] El workflow de ilustraciones** usa un servicio externo sin clave (Pollinations) y empuja con `contents: write` a una rama. Tiene un aislamiento razonable (rama aparte y revisión manual).

### 9.2 Accesibilidad

- **[verificado] Base sólida:**
  - axe WCAG 2.1 AA en 34 rutas en claro y 12 en oscuro, más el modo chico en claro y oscuro, en escritorio y móvil;
  - enlace para saltar al contenido, foco atrapado en `Sheet` y anuncio del estado de la práctica;
  - escala 0–10 accesible, tamaño de texto configurable y reducción de movimiento doble (sistema y app).
- **[verificado] Rutas sin auditoría axe:** `/desafios`, `/biblioteca`, `/biblioteca/pildoras[/id]`, `/familia/cuentos`, `/login`, `/revision`, `/familia/chico/[kidId]`. Además, no hay auditoría en oscuro de `/crecimiento` (jardín con tokens propios) ni de `/laboratorio/*` (`e2e/flows.spec.ts:417,434`).
- **[verificado, baja] La portada no tiene landmark `<main>`** (`app/page.tsx:29` usa `div`). La regla `region` de axe es *best-practice* y no está entre las etiquetas auditadas.
- **[verificado, baja] Íconos repetidos en «Más»** (ver §8): dificultan la orientación visual. El texto sí distingue las secciones.
- **[a verificar]** La narración y la guía por voz dependen de la disponibilidad de voces en español del sistema. En Android con TWA, el comportamiento de `speechSynthesis` puede variar.

### 9.3 Rendimiento

**JS que carga cada ruta.** Se calculó desde la build local `.next/` (BUILD_ID del 15 oct, 21:34, sin `.env.local`, probablemente en modo demo) sumando los chunks del `app-build-manifest`, comprimidos con gzip. **[verificado como medición local; a verificar en Vercel con `next build`]**

| Ruta | JS gzip | JS sin comprimir |
|---|---|---|
| `/ajustes` | **469 kB** | 1 484 kB |
| `/revision` | 460 kB | 1 459 kB |
| `/dashboard` | 378 kB | 1 202 kB |
| `/informe` | 377 kB | 1 204 kB |
| `/familia` | 362 kB | 1 167 kB |
| `/programas` | 359 kB | 1 141 kB |
| `/gimnasio`, `/gimnasio/[id]` | ≈ 318 kB | ≈ 1 015 kB |
| `/login` | 316 kB | 1 023 kB |
| cuentos (familia y chicos) | ≈ 280 kB | ≈ 900 kB |
| `/biblioteca`, `/`, `/laboratorio` | 154 kB | 495 kB |
| `/privacidad`, guías | 104 kB | 353 kB |

- Las cifras incluyen polyfills (≈ 39 kB gzip, que sólo se cargan con `nomodule`), así que no son directamente comparables con el «First Load JS» de `next build`. Aun así, **superan con holgura el objetivo de 165–220 kB** que se declara en `ARQUITECTURA.md` (tercera tanda).
- **Causa:** el contenido clínico va empaquetado en el JS del cliente. Los chunks `4860` (82 kB gzip) y `7927` (51 kB gzip) contienen texto de prácticas y referencias y se cargan en el panel, los ajustes y el gimnasio. `/revision` importa todo el catálogo. `/ajustes` importa `deleteUser` de `firebase/auth` de forma estática (`Settings.tsx:5`).
- **Bien resuelto:** Firestore (chunk `bc9e92e6…`, 83 kB gzip) **no** está en el JS inicial de ninguna página; se carga bajo demanda [verificado].
- **[verificado, media] Lecturas de Firestore por recuentos:** 17 consultas de recuento al conectar y tras cada escritura (§5.1). Con uso intensivo, el coste crece linealmente. `getCountFromServer` falla sin conexión; en ese caso se cae a la ventana local, y esto está controlado.
- **[verificado, baja] Suscripciones sin ventana:** `applications`, `kidActivities` y la consulta de `fetchLatestJournal` por tipo crecen sin límite con los años (`repositories.ts:371-373`, `firestoreKids.ts:72-74`, `repositories.ts:313-319`).
- **[verificado, baja] Precarga sin conexión limitada:** el service worker sólo precarga 8 rutas (`public/sw.js:16`). **No incluye `/plan-de-seguridad` ni `/chicos`.** Una persona en crisis sin conexión que nunca abrió el plan no lo tiene disponible (el botón de ayuda con teléfonos sí, porque está en el layout). `/familia/chico/[kidId]` se renderiza en el servidor y no funciona sin conexión.

### 9.4 UX

- **[verificado, media] Los desafíos y las píldoras leídas no se sincronizan.** Se pierden al cambiar de dispositivo o borrar datos del navegador, y no aparecen en la exportación ni en el informe. Además, los desafíos tienen tareas que dependen de sessions y journal (que sí se sincronizan), así que un desafío iniciado en el móvil no existe en la computadora.
- **[verificado, media] Los hitos se recuerdan por dispositivo** (`useMilestones.ts`). En un dispositivo nuevo, los alcanzados fuera de la ventana de 90 días no aparecen.
- **[verificado, baja]** El buscador no encuentra píldoras, desafíos, cuentos ni guías (§8).
- **[verificado, baja]** El mensaje de error de sincronización es genérico. No distingue «reglas sin publicar» de «sesión vencida» (`useProgressStore.ts:108-113`).
- **[a verificar]** Con App Check aplicado y reCAPTCHA bloqueado, la app arranca sin App Check y las escrituras fallan con un aviso genérico.

---

## 10. Reutilización y limitaciones técnicas

**Lo que se puede reutilizar con poco esfuerzo:**

- `src/domain/` es TS puro y testeable. Se puede llevar a otra app (React Native o Capacitor) o a un backend (por ejemplo, Cloud Functions que calculen `stats/summary` con `metrics.ts`).
- La interfaz `DataRepo` (`useProgressStore.ts:26-45`) permite cambiar el backend. `memoryRepo` sirve como *mock* para tests y demos.
- El patrón de paquetes (`packs/types.ts`, `packs/index.ts`): para sumar un tema basta un archivo. Los tests de `packs.test.ts`, `quality.test.ts` y `content.test.ts` validan el contenido nuevo automáticamente.
- La gobernanza (`reviewOf`/`isPublished`) y `reviewQueue` sirven como base de un flujo editorial.
- Los tokens CSS y los componentes `ui/*` sirven de base para un tema de marca. El tema infantil ya demuestra un segundo tema sobre la misma base.
- `tests/rules` es la plantilla para probar reglas nuevas, como un campo `premium` escrito sólo por el backend.

**Limitaciones:**

- **Sin backend propio.** No hay lógica de servidor de confianza: nada puede otorgar derechos, como premium o el rol de clínico, sin Cloud Functions (plan Blaze).
- **El contenido va en el bundle.** No se puede actualizar el contenido sin desplegar, y el JS crece con cada paquete (§9.3). No hay CMS ni carga por demanda del texto largo.
- **Sólo un idioma y una jurisdicción** (es-AR en los recursos de crisis; textos en «tú»).
- **Voz del navegador:** la calidad depende del dispositivo y no hay audio grabado.
- **Pruebas e2e sólo en demo:** el camino real con Firebase (Auth, App Check, reglas publicadas) no tiene pruebas de punta a punta.
- **Estado parcial fuera de Firestore** (§5.2), sin una estrategia de migración.
- **Ventana de 90 días en memoria:** las métricas históricas (más de 90 días) dependen de los recuentos del servidor o no existen. El informe y «Qué te funciona» sólo ven 90 días (las evaluaciones, 365).

---

## 11. Fortalezas, deuda técnica y recomendaciones

### Fortalezas

- **Rigor clínico codificado:** evidencia y DOI por elemento, niveles de riesgo con alternativas, prerrequisitos, cribado de riesgo, borradores ocultos y versión de contenido en cada sesión.
- **Calidad automatizada:** 493 tests unitarios (legibilidad INFLESZ y coherencia de contenido incluidas), 36 de reglas, e2e con axe en dos esquemas y dos dispositivos, y CI en cada PR.
- **Seguridad de datos bien pensada:**
  - reglas append-only, validación de esquema por tipo, puntuaciones verificadas en el servidor, `createdAt == request.time`;
  - CSP estricta en `connect-src`;
  - limpieza de la caché al cerrar sesión;
  - modo demo explícito, nunca por accidente.
- **Arquitectura limpia** y de pocas dependencias (6 en ejecución), con Firestore y Motion cargados de forma diferida.
- **Accesibilidad y diseño:** tokens, modo oscuro sin variantes y movimiento reducido en dos niveles.
- **Amplitud de contenido:** 108 prácticas, 82 actividades infantiles y 35 cuentos.

### Deuda técnica

- Documentación de arquitectura desactualizada (§8).
- Contenido repartido en archivos por tanda; dos convenciones (archivos sueltos y paquetes).
- Estado local sin uid ni sincronización (desafíos, píldoras, hitos).
- Validaciones de reglas incompletas (`users` update, `perma`, longitudes).
- Bundles grandes por el contenido embebido.
- Publicación manual de reglas, fuera de la CI.
- Cuentos sin gobernanza; ilustraciones sin generar.
- Comentarios obsoletos (`firestore.rules:250`, nombre «Protocolo Eudaimonía» en `sw.js` y en las claves).

### Recomendaciones priorizadas

**P0 (antes de tener usuarios reales o de la próxima publicación)**

1. **Publicar `firestore.rules`** y verificar en la consola que coinciden con el repositorio. Probar a mano una entrada `pregunta-del-dia`, una `sentido` y un perfil de 0–3 o 13–17 años. Agregar a la CI un paso de despliegue de reglas a `main` (`firebase deploy --only firestore:rules` con una cuenta de servicio), o al menos un recordatorio bloqueante.
2. **Cerrar `users/{uid}` update** con `affectedKeys().hasOnly(['displayName','timezone','consent'])` y validar `consent`. Agregar el test correspondiente.
3. **Corregir el texto de privacidad para adolescentes** (`Gratitude.tsx:69`): ser exactos («tu adulto puede acceder a estos datos desde su cuenta»), o bien excluir las notas de adolescentes de la exportación y del panel. Lo segundo requiere una decisión clínica y legal.
4. **Volver a verificar las referencias con red** (`npm run verify:refs`), porque hay 137 DOI y el informe local es todo `ERROR_RED`. Además, hacer que `referencias.yml` falle si más de un X % de las referencias da `ERROR_RED`.

**P1 (corto plazo)**

5. **Sincronizar desafíos, píldoras leídas e hitos** en `users/{uid}/settings/personal` (o en una colección `progress`, con su regla y su test), incluirlos en la exportación y el borrado, y migrar el contenido de `localStorage` al iniciar sesión. Mientras tanto, guardar con clave por uid y limpiar al cerrar sesión.
6. **Borrado de cuenta robusto:** reautenticar *antes* de borrar los datos, o mover el borrado a una Cloud Function con `auth.user().onDelete`. Borrar también los `careLinks`.
7. **Reducir los recuentos del jardín:** agrupar en `stats/summary` (backend), recalcular con *debounce* o sólo al entrar a `/crecimiento`, y no tras cada escritura.
8. **Llevar los cuentos a la gobernanza** (`ContentKind 'cuento'`) y a `reviewQueue`. Agregar `pildora` al filtro de `ReviewPanel` (`ReviewPanel.tsx:14`).
9. **Precargar `/plan-de-seguridad`** (cuando se publique) y `/chicos` en el service worker.

**P2 (mediano plazo)**

10. **Bajar el JS por ruta:** cargar bajo demanda los textos largos (pasos, referencias, artículos) por id, con `import()` o JSON estático por elemento. Hacer dinámico `deleteUser` en Ajustes y cargar `/revision` sólo para revisores. Fijar un presupuesto en la CI, por ejemplo con `size-limit` o un script sobre `app-build-manifest`.
11. **Completar el buscador** con píldoras, desafíos, cuentos, guías y las secciones que faltan. Corregir los conteos de la portada filtrando con `isPublished`.
12. **Extender la auditoría axe** a `/desafios`, `/biblioteca`, `/biblioteca/pildoras`, `/familia/cuentos`, `/login` y al modo oscuro de `/crecimiento` y `/laboratorio`. Añadir `<main>` a la portada. Diferenciar los íconos de la navegación.
13. **Tests de reglas por tipo de diario** (tabla parametrizada con los 28 tipos), `perma` y límites de `practiceId` y `antidoteId`.
14. **Actualizar `docs/ARQUITECTURA.md`** con el esquema y las cifras reales, y quitar el comentario obsoleto de `firestore.rules:250-251`.

**P3 (evolución)**

15. Backend con Cloud Functions: rol de clínico con *custom claims*, `stats/summary`, derechos premium escritos sólo por el servidor y cobros (ver `PLAN-PREMIUM.md`).
16. Cifrado del diario a nivel de campo, y decisión sobre qué ve el terapeuta.
17. Unificar el contenido antiguo en paquetes temáticos; i18n y la decisión entre tú y vos; recursos de crisis por país.
18. Bloqueo persistente del código del modo chico (en `localStorage`, con espera creciente) y sal con `crypto.getRandomValues`.
19. E2e contra el emulador de Auth y Firestore, para cubrir el camino real además del modo demo.
20. Generar y revisar las ilustraciones de los cuentos, o descartar el flujo de Pollinations por la licencia y la calidad, y renombrar los identificadores «eudaimonia» con una migración de claves.
