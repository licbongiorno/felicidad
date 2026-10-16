# Arquitectura técnica: datos, permisos y evolución

- **Fecha:** 2026-10-15
- **Alcance:** [ARQUITECTURA.md](ARQUITECTURA.md) describe la **estructura general** del proyecto (carpetas, capas, estado global, decisiones iniciales). Este documento trata **datos, permisos, validación, migración, fallos, pruebas y rendimiento**, y cómo evolucionan. No repite lo que ya está allí.
- **Aviso:** las cifras de `ARQUITECTURA.md` §5 están desactualizadas. Las cifras reales están en [auditoria-proyecto.md](auditoria-proyecto.md) §0.
- Relacionados: [decisiones-tecnicas.md](decisiones-tecnicas.md), [seguridad-clinica-y-privacidad.md](seguridad-clinica-y-privacidad.md), [criterios-aceptacion.md](criterios-aceptacion.md).

---

## 1. Stack real

Versiones instaladas, verificadas en la auditoría (§2):

| Capa | Tecnología |
|---|---|
| Framework | Next.js 15.5 (App Router), React 19, TypeScript 5.9; páginas prerenderizadas (433 en la build) salvo `/familia/chico/[kidId]` |
| Estilos y movimiento | Tailwind 3.4 con tokens CSS (`rgb(var(--x))`), Motion 12 (`LazyMotion strict`) |
| Estado | Zustand 5 (`useProgressStore`, `useKidsStore`, `useUiStore`); Context para identidad (`AuthProvider`) |
| Backend | Firebase Auth (correo y Google) y Firestore con `persistentLocalCache`; App Check (reCAPTCHA v3) opcional. **Sin Cloud Functions, Storage ni Messaging** |
| Navegador | Web Speech API (voz), Wake Lock, `vibrate`, service worker propio (`public/sw.js`), `.ics` |
| Pruebas | Vitest + Testing Library + jsdom; `@firebase/rules-unit-testing` con emulador; Playwright + `@axe-core/playwright` |
| CI | GitHub Actions: `ci.yml` (tipos, lint, tests, build en demo, reglas en emulador, e2e), `referencias.yml` (DOI contra Crossref cada mes), `ilustraciones.yml` (manual) |
| Despliegue | Vercel (cabeceras en `next.config.mjs`); reglas publicadas **a mano** |

Dependencias de ejecución: sólo 6 (`firebase`, `motion`, `next`, `react`, `react-dom`, `zustand`).

---

## 2. Modelo de datos

### 2.1 Colecciones reales (según `firestore.rules`)

| Ruta | Tipo de escritura | Validación del servidor | Tipo de dominio (`src/domain/types.ts`) |
|---|---|---|---|
| `users/{uid}` | create (sólo `role: 'patient'`), update, delete del dueño | create con lista blanca de claves. update limitado a `displayName`, `timezone` y `consent` (en curso, «Ahora (este PR)»; antes sólo prohibía `role` y `createdAt`) | `Profile` |
| `users/{uid}/sessions` | append-only | claves, `family`, `source ∈ {gym, antidote}`, `skills ≤ 3`, duración ≤ 4 h, `startedAt ≤ ahora + 5 min`, `transfer ≤ 280`, `tz`, `contentVersion`, `createdAt == request.time` | `SessionRecord` |
| `users/{uid}/afflictionLogs` | append-only | `emotionId` en una lista de 22, intensidades 0–10, `trigger ≤ 280`, `stabilizationUsed` | `AfflictionLog` |
| `users/{uid}/checkins/{YYYY-MM-DD}` | create y update | id = fecha, `mood` 0–10; `perma` sólo se exige que sea un mapa | `DailyCheckin` |
| `users/{uid}/journal` | append-only | `type` en una lista de 28 y **campos por tipo** (`validJournalValues`) con límites de 280 y 8000 | `JournalEntry` |
| `users/{uid}/settings/personal` | set | `goals ≤ 3`, `favorites ≤ 60`, `questions ≤ 10`, `plan` con ≤ 3 prácticas | `PersonalSettings` |
| `users/{uid}/applications` | append-only | `practiceId ≤ 64`, `usefulness` enumerado, `note ≤ 280` | `Application` |
| `users/{uid}/assessments` | append-only | número de ítems, rangos y **coherencia de la puntuación** en los 6 instrumentos | `Assessment` |
| `users/{uid}/kids` | create, update (sólo `name`, `band`, `avatar`), delete | apodo de 1 a 24, 5 franjas, 8 avatares, consentimiento con `acceptedAt == request.time` | `src/lib/kids/types.ts` |
| `users/{uid}/kidActivities` | append-only | el `kidId` tiene que existir (`exists()`), emoción enumerada, intensidad 1–3, `note ≤ 140` | ídem |
| `users/{uid}/stats/{doc}` | sólo lectura (escribe el backend) | no hay backend que lo escriba todavía | — |
| `careLinks/{clinicianId}_{patientId}` | el clínico crea `pending`; sólo el paciente pasa a `active` o `revoked`; delete prohibido | rol `clinician` leído de `users/{uid}` | — |
| `/{document=**}` | denegado | — | — |

Exportación y borrado recorren `USER_COLLECTIONS` (`src/lib/firebase/repositories.ts`): `sessions`, `checkins`, `afflictionLogs`, `journal`, `assessments`, `applications`, `settings`, `kids`, `kidActivities`, más el perfil.

### 2.2 Separación conceptual: lo que existe y lo que falta

| Concepto | Hoy | Dónde | Hueco / propuesta |
|---|---|---|---|
| **Usuarios y preferencias** | Sí | `users/{uid}` (perfil); `settings/personal` (sincronizado); tema, texto, voz y movimiento en `localStorage` (por dispositivo, a propósito) | — |
| **Catálogo** | Sí, como código | `src/domain/*`, `src/domain/packs/*` | No vive en Firestore (ADR-001). Se separará en JSON estático por ruta (§7) |
| **Ejercicios y versiones** | Sí, como código | `Practice`, `JournalTemplate`, `ReviewRecord.version` | `contentVersion` sólo en `sessions` y `afflictionLogs` |
| **Recorridos** | Definición: sí; progreso: derivado | `programs.ts`, `challenges.ts`; progreso de programas desde `sessions`; **desafíos en `localStorage`** | Sincronizar desafíos (§4) |
| **Sesiones** | Sí | `sessions`, `afflictionLogs` | — |
| **Objetivos** | Sí | `settings/personal.goals` y `plan` | — |
| **Registros privados** | Sí | `journal`, `checkins`, `afflictionLogs.trigger` (texto libre excluido de índices en `firestore.indexes.json`) | Cifrado a nivel de campo: decisión pendiente |
| **Progreso** | Parcial | Derivado con funciones puras (`metrics.ts`, `growth.ts`); recuentos con `getCountFromServer` (17 consultas); **hitos y píldoras leídas en `localStorage`** | `stats/summary` desde el backend; mover hitos y píldoras a la nube (§4) |
| **Permisos y vínculos profesionales** | Sólo reglas | `careLinks`, `hasActiveCareLink` | Permisos por categoría; sin UI ni backend (P3) |
| **Revisiones clínicas** | Sí, como código + `localStorage` | `REVIEW_OVERRIDES`; decisiones del panel `/revision` en `eudaimonia-review` hasta exportarlas | Flujo con firma del revisor (P2): las decisiones se exportan y se incorporan con un PR |
| **Consentimientos** | Sí | `users/{uid}.consent {version, acceptedAt}`; `kids/{id}.consent` | Historial de versiones aceptadas (hoy se sobrescribe) |
| **Auditoría** | **No** | — | Colección `users/{uid}/accessLog` escrita sólo por el backend cuando exista acceso profesional (P3) |

### 2.3 Propuesta de colecciones nuevas

| Ruta | Para qué | Escritura | Prioridad |
|---|---|---|---|
| `users/{uid}/progress/local` (un documento) | Desafíos en curso, días marcados, píldoras leídas, hitos celebrados | Dueño, con lista blanca y límites (p. ej. ≤ 10 desafíos, ≤ 200 píldoras) | P1 |
| `users/{uid}/accessLog/{id}` | Registro de cada acceso profesional | Sólo backend; lectura del dueño | P3 |
| `careLinks/{id}.scopes` | Categorías compartidas (`sessions`, `checkins`, `assessments`…; nunca `journal` completo) | El paciente | P3 |
| `users/{uid}/sharedJournal/{id}` | Entradas del diario que el paciente elige compartir, copiadas una por una | El paciente | P3 |
| `users/{uid}/consents/{version}` | Historial de consentimientos | Dueño, append-only | P2 |

---

## 3. Permisos y reglas

**Principios actuales** (cabecera de `firestore.rules`):

1. Cada usuario es dueño exclusivo de `users/{uid}`.
2. El clínico sólo lee con un vínculo activo y consentido.
3. Los registros son append-only (se borran, no se reescriben).
4. Validación de esquema en el servidor.

**Roles:**

- `patient`: es el único que puede crear el cliente.
- `clinician`: debe asignarlo el backend (Admin SDK). Hoy no hay backend.

**Cambios necesarios para el Espacio profesional (P3):**

- Reemplazar `canRead(uid)` por `canReadScope(uid, scope)`, que consulte `careLinks/{id}.scopes`.
- `journal` **fuera** de cualquier alcance profesional. Sólo `sharedJournal`.
- `kids` y `kidActivities` fuera del alcance profesional salvo un permiso explícito y separado (y decisión legal sobre menores).
- Permitir que el paciente borre `careLinks` (hoy `delete: false`) o que el borrado de cuenta lo haga el backend.
- Registro de accesos desde una Cloud Function que actúe de intermediaria, porque las reglas no pueden escribir.

**Huecos conocidos** (Auditoría §9.1):

- `sessions.practiceId` sin límite de longitud;
- `afflictionLogs.antidoteId` sin validar;
- `checkins.perma` acepta cualquier mapa;
- `email_verified` no se exige.

---

## 4. Validación

| Capa | Qué valida | Dónde |
|---|---|---|
| Contenido | Ids únicos, referencias existentes, legibilidad INFLESZ, longitudes, comillas, DOI con año, coherencia con las reglas (tipos de diario y emociones) | `quality.test.ts`, `content.test.ts`, `packs.test.ts`, `reviewQueue.test.ts`, `search.test.ts`, `stories.test.ts`, `kids.test.ts` |
| Referencias | Que cada DOI exista en Crossref y coincida | `scripts/verify-references.mjs`, `referencias.yml` (falla con `DOI_NO_EXISTE` o `DISCREPANCIA`, no con `ERROR_RED`) |
| Cliente | Formularios, límites de caracteres, escala 0–10 | Componentes (`IntensityScale`, `JournalEditor`) |
| Servidor | Esquema, rangos, append-only, marcas de tiempo, puntuaciones | `firestore.rules` y `tests/rules/firestore.rules.test.ts` |

Regla: **la validación del cliente es de UX; la que cuenta es la del servidor.**

---

## 5. Estrategia de migración

### 5.1 Estado local → Firestore

**Situación:** `desafios`, `pildoras-leidas`, `eudaimonia-hitos` y `eudaimonia-resume` viven en `localStorage`. Antes de «Ahora (este PR)» no tenían dueño ni se borraban (Auditoría §5.2, §9.1-4).

**Paso 1 (en curso, «Ahora (este PR)»):** `src/lib/localData.ts` define `PERSONAL_LOCAL_KEYS`.

- `claimLocalData(uid)` descarta los datos si pertenecen a otra cuenta.
- `clearPersonalLocalData()` los borra al cerrar sesión o al eliminar la cuenta.
- Las preferencias del dispositivo no se tocan.
- Test: `src/lib/localData.test.ts`.

**Paso 2 (P1):** documento `users/{uid}/progress/local` con su regla y su test.

1. Al iniciar sesión, si hay datos locales del mismo dueño y el documento remoto no existe, se suben (migración única, idempotente).
2. Si existen los dos, se **fusionan**: unión de píldoras leídas e hitos; en los desafíos, gana el más avanzado por id.
3. Después, la fuente de verdad es Firestore, y `localStorage` queda sólo como caché.
4. Se incluye en `USER_COLLECTIONS`, y así entra en la exportación y el borrado.
5. Se marca la migración con una versión (`progress.local.schema = 1`).

**Paso 3 (P2):** renombrar las claves `eudaimonia-*`. Lectura doble durante una versión, escritura sólo de las nuevas y borrado de las viejas.

### 5.2 Contenido

- Cambiar un guion: subir `version` y anotar en el changelog. Las sesiones viejas conservan su `contentVersion`.
- Cambiar un tipo de diario o una emoción: actualizar el código y `firestore.rules` **en el mismo PR** (hay un test de coherencia) y **publicar las reglas** antes de desplegar la app. Hoy el despliegue de reglas es manual: riesgo alto (Auditoría §9.1-1).
- Archivos por tanda → paquetes por tema: migración mecánica sin cambio de ids (P3).

### 5.3 Esquema de Firestore

Los campos nuevos se agregan como opcionales, primero en las reglas y después en el cliente. Nunca se renombra un campo existente sin una regla que acepte los dos durante la transición.

---

## 6. Recuperación ante fallos

| Fallo | Comportamiento actual | Mejora |
|---|---|---|
| Sin red | Caché persistente de Firestore; las escrituras se encolan; el SW precarga 8 rutas; página «Sin conexión» | Precargar `/plan-de-seguridad` y `/chicos` (en curso) |
| Reglas rechazan una escritura | `syncError` → `SyncNotice` («El servidor rechazó el registro») | Distinguir «reglas sin publicar» de «sesión vencida» (P2) |
| App Check falla al cargar reCAPTCHA | La app sigue sin App Check y lo avisa en consola | Si App Check se aplica en la consola, las escrituras fallan: **a verificar** en producción |
| `getCountFromServer` sin red | Se cae a la ventana local de 90 días | `stats/summary` desde el backend |
| Borrado de cuenta con `auth/requires-recent-login` | Se borran los datos y la cuenta de acceso sobrevive | Reautenticar **antes** de borrar, o Cloud Function `onDelete` (P1) |
| Pestaña cerrada a mitad de práctica | «Retomar» durante 24 h (`resume.ts`) | Sincronizar (P2) |
| Borrador del diario | `sessionStorage` (por pestaña) | Aviso de cambios sin guardar (ya existe) |
| Pérdida de datos en Firestore | **Sin copias de seguridad programadas** | Exportaciones programadas de Firestore (`PLAN-PREMIUM.md` §C; requiere plan Blaze) |
| Error de render | `error.tsx`, `global-error.tsx`, `not-found.tsx` | Registro de errores sin datos personales (P2) |

---

## 7. Pruebas

| Tipo | Qué existe | Cómo se corre |
|---|---|---|
| Unitarias y de componentes | 493 tests en 20 archivos (Auditoría §0), más `src/lib/localData.test.ts` (en curso). Contenido: `quality.test.ts`, `content.test.ts`, `packs.test.ts`; lógica: `metrics`, `growth`, `daily`, `recommend` (en `logic.test.ts`), `search`, `reviewQueue`, `challenges`, `kids`, `stories`; componentes: `JournalEditor`, `CommandPalette`, `ui` | `npm test` |
| Reglas | 36 casos con emulador (`tests/rules/firestore.rules.test.ts`): aislamiento, esquema, append-only, diario por tipo (parcial), instrumentos, rol, `careLinks`, chicos | `npm run test:rules` (Java 21) |
| E2E | 63 `test()` en `e2e/flows.spec.ts`, `formats.spec.ts`, `kids.spec.ts`, más axe en 34 rutas en claro y 12 en oscuro; escritorio y móvil; **en modo demo** | `npm run test:e2e` |
| Referencias | Crossref | `npm run verify:refs` |

**Huecos:**

- E2E sin el camino real (Auth, App Check y reglas publicadas). Propuesta: e2e contra los emuladores de Auth y Firestore (P3).
- Rutas sin axe: `/desafios`, `/biblioteca`, `/biblioteca/pildoras`, `/familia/cuentos`, `/login`, `/revision`; tampoco el modo oscuro de `/crecimiento` y `/laboratorio`.
- Reglas: no se prueban uno por uno 15 de los 28 tipos de diario, ni `perma`, ni las lecturas de `kids` por un clínico.
- No hay presupuesto de tamaño de bundle en la CI.

---

## 8. Rendimiento

### 8.1 Diagnóstico

JS por ruta, en gzip, medido sobre la build local (Auditoría §9.3; incluye ≈ 39 kB de polyfills `nomodule`; **a verificar** en Vercel):

| Ruta | gzip |
|---|---|
| `/ajustes` | 469 kB |
| `/revision` | 460 kB |
| `/dashboard` | 378 kB |
| `/informe` | 377 kB |
| `/familia` | 362 kB |
| `/programas` | 359 kB |
| `/gimnasio` | ≈ 318 kB |

Superan el objetivo de 165–220 kB declarado en `ARQUITECTURA.md`.

**Causa:** el contenido clínico se empaqueta en el JS del cliente. Los chunks con textos de prácticas y referencias (82 kB y 51 kB gzip) se cargan en el panel, los ajustes y el gimnasio. `/revision` importa todo el catálogo y `/ajustes` importa `deleteUser` de forma estática.

**Bien resuelto:** Firestore (83 kB gzip) se carga bajo demanda.

### 8.2 Propuesta

1. **Separar índice y cuerpo.** Un índice ligero de catálogo (id, título, módulo, nivel, riesgo, enfoque, duración) se queda en JS. Los cuerpos (pasos, `howItWorks`, `tips`, `obstacles`, referencias, artículos) se generan como **JSON estático por elemento** en la build (p. ej. `public/contenido/practicas/{id}.json`) y se cargan con `fetch` o `import()` al abrir la ficha.
2. **Páginas que no necesitan el catálogo** (`/ajustes`, `/dashboard`): importar sólo el índice. `deleteUser` con `import()` dinámico.
3. **`/revision`:** cargar el catálogo completo de forma diferida y sólo para revisores.
4. **Sin conexión:** el SW precarga los JSON de las rutas críticas (ayuda, plan de seguridad y herramientas rápidas).
5. **Mantener las pruebas de contenido:** los tests siguen leyendo los módulos TS fuente; el JSON es un artefacto de la build. Un test verifica que el JSON generado coincide con la fuente.
6. **Presupuesto en la CI:** un script sobre `app-build-manifest.json` falla si una ruta supera, por ejemplo, 250 kB gzip (umbral a decidir).
7. **Recuentos:** reemplazar las 17 consultas `getCountFromServer` tras cada escritura por un recálculo con *debounce*, o sólo al entrar a `/crecimiento`; más adelante, `stats/summary`.

**Riesgo:** el prerenderizado actual de las fichas (`generateStaticParams`) ya pone el contenido en el HTML. Hay que evitar duplicarlo en el HTML y en el payload de RSC. Medir antes y después.
