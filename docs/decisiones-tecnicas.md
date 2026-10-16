# Registro de decisiones técnicas (ADR)

- **Fecha de este registro:** 2026-10-15. Las decisiones se tomaron a lo largo del proyecto (ver [CONTENIDO-CHANGELOG.md](CONTENIDO-CHANGELOG.md) y [ARQUITECTURA.md](ARQUITECTURA.md)). Aquí se documentan con su contexto para que no se reabran sin motivo.
- **Formato:** contexto, decisión, alternativas consideradas y consecuencias. Estado: **vigente**, **revisable** (con una condición para revisarla) o **reemplazada**.
- Relacionados: [arquitectura-tecnica.md](arquitectura-tecnica.md), [arquitectura-funcional.md](arquitectura-funcional.md), [seguridad-clinica-y-privacidad.md](seguridad-clinica-y-privacidad.md).

| ADR | Título | Estado |
|---|---|---|
| 001 | Contenido clínico como código, con tests | Vigente |
| 002 | Paquetes de contenido por tema | Vigente |
| 003 | Firebase/Firestore con reglas probadas en emulador | Vigente |
| 004 | Modo demo local explícito | Vigente |
| 005 | Voz por síntesis del navegador en lugar de audio grabado | Revisable |
| 006 | Sin IA conversacional | Vigente |
| 007 | Sin comunidad | Vigente |
| 008 | Sin analítica de terceros y con CSP estricta | Vigente |
| 009 | Gobernanza borrador / pendiente / revisado | Vigente |
| 010 | Qué estado vive en el dispositivo y qué en la nube | Vigente, con migración en curso |
| 011 | Indicador de riesgo no persistido | Vigente |
| 012 | Ilustraciones generadas fuera del entorno y no publicadas sin calidad | Vigente |
| 013 | Portal sólo para pacientes; Espacio profesional diferido | Revisable |

---

## ADR-001 · Contenido clínico como código, con tests

- **Contexto:** el contenido terapéutico (pasos, avisos, referencias) es la parte más sensible del producto. Un error de redacción o una referencia falsa tiene consecuencias clínicas. No hay CMS ni equipo editorial con herramientas propias.
- **Decisión:** cada práctica, antídoto, plantilla, artículo, programa, píldora y cuento es un objeto TypeScript tipado en `src/domain/`, sin dependencias de React ni de Firebase. Los tests verifican:
  - legibilidad INFLESZ y longitud de frases;
  - comillas, lenguaje inclusivo y citas apócrifas prohibidas;
  - ids únicos y referencias cruzadas;
  - coherencia con `firestore.rules`.

  Las referencias con DOI se verifican contra Crossref (`npm run verify:refs`, `referencias.yml`).
- **Alternativas:**
  1. CMS headless: requiere backend, permisos editoriales y pruebas propias, y saca el contenido del control de versiones.
  2. Contenido en Firestore: se podría actualizar sin desplegar, pero las pruebas de calidad no se aplican antes de publicar.
  3. Markdown con *front matter*: más fácil de escribir, pero se pierde el tipado de pasos, riesgos y referencias.
- **Consecuencias:**
  - Cada cambio pasa por PR, CI y revisión, y el historial es auditable.
  - Un/a revisor/a clínico/a audita un solo directorio.
  - Como costo, el contenido viaja en el JS del cliente (bundles de 378–469 kB gzip en algunas rutas: [arquitectura-tecnica.md](arquitectura-tecnica.md) §8): para cambiar un texto hay que desplegar, y quien no programa no puede editar.
  - **Mitigación prevista:** generar JSON estático por elemento en la build, manteniendo el TS como fuente y los tests (P2).

## ADR-002 · Paquetes de contenido por tema

- **Contexto:** el contenido creció en tandas (`practices*.ts`: 8 archivos; `library*.ts`: 6). Sumar un tema obligaba a tocar muchos archivos comunes (niveles, catálogo, módulos, biblioteca, programas).
- **Decisión:** `ContentPack` (`src/domain/packs/types.ts`) reúne en un archivo prácticas, `PracticeMeta` (nivel, prerrequisitos, enfoques, módulo y riesgo), artículos, programas, píldoras, guías y glosario. `packs/index.ts` los agrega y cada registro los incorpora (`PACK_META` en `levels.ts` y `catalog.ts`). Hay 5 paquetes.
- **Alternativas:** seguir con archivos por tipo; un archivo por elemento (demasiada fragmentación).
- **Consecuencias:** sumar un tema es sumar un archivo, y `packs.test.ts` lo valida. Conviven dos convenciones (antigua y paquetes) hasta migrar el contenido antiguo (P3, mecánica, sin cambiar ids).

## ADR-003 · Firebase/Firestore con reglas probadas en emulador

- **Contexto:** se necesitaba autenticación, sincronización entre dispositivos y uso sin conexión, sin operar servidores propios, y un aislamiento fuerte de datos sensibles.
- **Decisión:** Firebase Auth (correo y Google) y Firestore con caché persistente.
  - Toda la seguridad y la validación de esquema están en `firestore.rules`: lista blanca de claves, rangos, append-only, `createdAt == request.time` y coherencia de las puntuaciones.
  - Las reglas se prueban con `@firebase/rules-unit-testing` en el emulador (36 casos) en la CI.
  - Un solo módulo conoce la forma de Firestore (`repositories.ts`), detrás de la interfaz `DataRepo`.
- **Alternativas:**
  1. Backend propio (Node + Postgres): más control, pero más operación y más superficie de seguridad.
  2. Supabase: SQL y RLS, pero sin el modelo de caché offline integrado que se usa hoy.
  3. Sólo local (como Daylio): máxima privacidad, sin sincronización.
- **Consecuencias:**
  - Sin backend de confianza no se pueden otorgar derechos (rol de clínico, premium): hacen falta Cloud Functions (plan Blaze).
  - El **despliegue de reglas es manual** y está fuera de la CI. Es un riesgo alto (R-01): pasarlo a la CI es P0.
  - Hay dependencia de un proveedor, mitigada por `DataRepo`.

## ADR-004 · Modo demo local explícito

- **Contexto:** hace falta mostrar la app, probarla de punta a punta y revisarla clínicamente sin cuentas reales. Al mismo tiempo, nunca hay que guardar datos clínicos reales en `localStorage` por accidente.
- **Decisión:** `NEXT_PUBLIC_DEMO_MODE=true` activa un usuario ficticio (`uid: 'demo'`), `memoryRepo` y `memoryKids` en `localStorage`, y muestra los borradores. Si falta la configuración de Firebase **y** no está el modo demo, aparece `ConfigError`: nunca hay degradación silenciosa. Los e2e y la build de la CI corren en demo.
- **Alternativas:** emuladores de Firebase para la demo (más pesado para revisores); degradar a local sin aviso (descartado por privacidad).
- **Consecuencias:** demos y e2e simples. Como costo, **los e2e no cubren el camino real** (Auth, App Check, reglas publicadas): e2e contra emuladores en P3.

## ADR-005 · Voz por síntesis del navegador en lugar de audio grabado

- **Contexto:** se quiere guiar las prácticas con los ojos cerrados y leer artículos en voz alta. El audio grabado necesita guiones cerrados, estudio o voces con licencia, almacenamiento, CDN y una nueva grabación por cada cambio de guion.
- **Decisión:** Web Speech API (`src/lib/voice.ts`, `voice-queue.ts`), sin servidores. Prefiere una voz en español; si no hay, la práctica sigue en modo visual. Campanas con `chime.ts`.
- **Alternativas:** audio grabado con voz humana (lo que más valoran las apps premium: [PLAN-PREMIUM.md](PLAN-PREMIUM.md) §B.7); voz sintética de alta calidad generada en la build (coste y licencia).
- **Consecuencias:** cero coste y cero datos enviados, y el texto revisado es exactamente lo que se escucha. Como costo, la calidad depende del dispositivo, y en Android con TWA el comportamiento es **a verificar**.
- **Revisar cuando:** el contenido del núcleo esté `revisado` y estable, y haya presupuesto (P2).

## ADR-006 · Sin IA conversacional

- **Contexto:** varios competidores ofrecen chat con IA (Wysa, Ebb de Headspace, Ori de Jenora, María de Mente Sana). La evidencia es modesta y con conflictos de interés. No hay evaluación independiente del escalado de crisis. En Argentina hay rechazo profesional a la IA como terapeuta (caso Cux, comunicado de FePRA). Fuentes en [investigacion-competitiva.md](investigacion-competitiva.md) §8–§10 y §15.
- **Decisión:** no hay IA conversacional en el producto. Las sugerencias usan reglas transparentes (`recommend.ts`) que siempre muestran su porqué.
- **Alternativas:** chat terapéutico (descartado); IA sólo para navegación y explicación (diferida a P3, con los 10 controles de [arquitectura-funcional.md](arquitectura-funcional.md) §4).
- **Consecuencias:** no hay riesgo de consejo clínico generado, ni coste por uso, ni datos enviados a proveedores de modelos. Como costo, hay menos «efecto novedad». **Nunca se entrenan modelos con datos de usuarios.**

## ADR-007 · Sin comunidad

- **Contexto:** una comunidad exige moderación continua, un protocolo de crisis entre pares, gestión de menores y una política de contenido. La matriz la clasifica como P3 (R28).
- **Decisión:** no hay foros, comentarios, perfiles públicos ni mensajes entre usuarios.
- **Alternativas:** foro moderado (MindShift, investigación §1); círculo íntimo por invitación (Kalisme, §12).
- **Consecuencias:** riesgo y coste operativo nulos en este frente. Si algún día se reconsidera, sería un modelo cerrado por invitación y sin texto libre entre desconocidos.

## ADR-008 · Sin analítica de terceros y con CSP estricta

- **Contexto:** los datos de salud son sensibles (Ley 25.326). Hay controversias documentadas por píxeles publicitarios en apps de salud mental (Headspace y BetterMe en la investigación §15 y §18).
- **Decisión:**
  - No hay SDK de analítica, publicidad ni rastreo.
  - La CSP en `next.config.mjs` limita `connect-src` a la propia app y a Firebase; además, `frame-ancestors 'none'`, `object-src 'none'`, HSTS y `Permissions-Policy`.
  - Un e2e verifica que la CSP bloquea envíos a dominios no autorizados.
- **Alternativas:** analítica de terceros anónima (sigue siendo un tercero); analítica propia con consentimiento (prevista para medir el piloto, sin terceros).
- **Consecuencias:** máxima confianza, y la promesa se puede verificar. Como costo, hoy no hay métricas de uso: hará falta analítica **propia**, anónima y con consentimiento, para el piloto. Límite conocido: `'unsafe-inline'` en `script-src` por el prerenderizado estático.

## ADR-009 · Gobernanza borrador / pendiente / revisado

- **Contexto:** hay contenido que exige una decisión clínica antes de mostrarse (plan de seguridad, exposición, PHQ-9). El resto se publica sin revisión formal porque no hay un/a responsable clínico/a designado/a.
- **Decisión:** `governance.ts` asigna un `ReviewRecord` a cada elemento (`version`, `status`, `evidenceCheckedAt`, `reviewedBy`, `reviewedAt`).
  - `borrador` no se muestra a usuarios reales (`isPublished`).
  - `pendiente` se muestra con la etiqueta correspondiente.
  - Cada sesión guarda `contentVersion`.
  - Hay una cola (`reviewQueue.ts`) y un panel (`/revision`).
  - Un test falla si la verificación de la evidencia tiene más de 12 meses.
- **Alternativas:** no publicar nada hasta revisarlo todo (bloquea el desarrollo); publicar todo sin etiquetas (falta de honestidad).
- **Consecuencias:** el estado de cada elemento es transparente y auditable. Hoy **no hay nada `revisado`**: es el cuello de botella del roadmap. Cuentos y píldoras se suman a la cola en este PR.

## ADR-010 · Qué estado vive en el dispositivo y qué en la nube

- **Contexto:** Firestore es la fuente de verdad de los registros clínicos (`ARQUITECTURA.md` §3: el store no tiene `persist`, para no dejar datos clínicos sin control en `localStorage`). Algunas funciones nuevas guardaron estado en `localStorage` sin dueño (desafíos, píldoras leídas, hitos, retomar).
- **Decisión:**
  - **En la nube:** todo registro del usuario y toda preferencia que deba seguirlo entre dispositivos (`settings/personal`).
  - **En el dispositivo:** sólo preferencias propias del dispositivo (tema, tamaño de texto, movimiento, voz, modo chico, código) y borradores temporales (`sessionStorage`).
  - **Transición:** las comodidades personales que hoy están en local quedan ligadas al uid y se borran al salir (`src/lib/localData.ts`, en este PR). Después migran a `users/{uid}/progress/local` (P1).
- **Alternativas:** todo local (no sigue al usuario y es inseguro en equipos compartidos); todo en la nube, incluido el tema (innecesario y con más lecturas).
- **Consecuencias:** coherencia con la exportación y el borrado; privacidad en equipos compartidos. Requiere una migración idempotente con fusión ([arquitectura-tecnica.md](arquitectura-tecnica.md) §5.1).

## ADR-011 · Indicador de riesgo no persistido

- **Contexto:** el cribado de Antídotos pregunta por pensamientos de hacerse daño. Guardar la respuesta crearía un registro que alguien podría esperar que se monitoree.
- **Decisión:** la respuesta sólo cambia el flujo en el momento (se detiene y se muestra ayuda). No se guarda (`AntidoteModule.tsx`; `ARQUITECTURA.md` §2).
- **Alternativas:** guardarlo para el informe (crea un deber de respuesta sin la capacidad de cumplirlo); guardarlo con alertas a un profesional (requiere un protocolo, guardias y el Espacio profesional).
- **Consecuencias:** no se generan expectativas de respuesta. Si en el futuro hay un vínculo profesional, esta decisión se revisa junto con un protocolo clínico.

## ADR-012 · Ilustraciones generadas fuera del entorno y no publicadas sin calidad

- **Contexto:** los 35 cuentos se beneficiarían de ilustraciones. No hay presupuesto para ilustración profesional (`PLAN-PREMIUM.md` §B.8). Generar imágenes en el cliente o en producción enviaría datos a terceros y rompería la CSP.
- **Decisión:**
  - Las ilustraciones se generan **fuera del entorno de usuarios**, con un workflow manual de GitHub Actions (`.github/workflows/ilustraciones.yml`, `workflow_dispatch`, servicio a elegir entre Pollinations y Hugging Face) que sube los archivos a una rama aparte (`ilustraciones-cuentos`) para revisarlos a mano.
  - **Sólo se publican las que alcanzan el estándar de calidad** (coherencia con el elenco de cada cuento, adecuación a la edad, sin estereotipos ni errores anatómicos).
  - Mientras tanto, los cuentos usan el dibujo SVG propio de respaldo: `STORY_ART` está vacío y `public/cuentos/` también.
- **Alternativas:** ilustración profesional (coste); generación en tiempo de ejecución (descartada por privacidad y CSP); publicar todo lo generado (descartada por calidad).
- **Consecuencias:** ningún dato de usuarios sale; la calidad queda bajo control humano. Pendientes: la licencia de las imágenes según el servicio usado (**a verificar**) y el permiso `contents: write` del workflow (riesgo bajo, mitigado con la rama aparte).

## ADR-013 · Portal sólo para pacientes; Espacio profesional diferido

- **Contexto:** un panel para el terapeuta es valioso (Jenora, MindDoc, DBT Coach) y es la vía B2B de `PLAN-PREMIUM.md`. Pero exige backend de confianza, roles asignados por el servidor, permisos por categoría, registro de accesos y una revisión legal (Ley 26.529 y ejercicio profesional: **a verificar**).
- **Decisión:**
  - Hoy el portal es **sólo para pacientes**.
  - El puente con el profesional es el **informe** que el paciente genera en su dispositivo, con el diario oculto por defecto, y las preguntas para la sesión.
  - Las reglas conservan `careLinks` (el clínico propone, el paciente activa o revoca) como base, sin interfaz.
  - El Espacio profesional queda en P3, con este diseño:
    - permisos granulares y revocables;
    - registro de accesos visible para el paciente;
    - **el diario nunca se comparte de forma automática**.
- **Alternativas:** construirlo ahora (bloqueado por backend y legal); no prever nada (habría que rediseñar las reglas).
- **Consecuencias:** menos superficie de riesgo en el MVP. Como costo, no hay ingresos B2B a corto plazo. Hoy `canRead` da a un vínculo activo acceso a **todas** las subcolecciones; **hay que cambiarlo a permisos por categoría antes** de habilitar cualquier interfaz de clínico.
- **Revisar cuando:** existan Cloud Functions, revisión legal y un piloto con terapeutas.
