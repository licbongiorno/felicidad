# Habilidades Psicológicas — Arquitectura

## 1. Estructura del proyecto

```
felicidad/
├── firestore.rules              # Seguridad + validación de esquema en servidor
├── firestore.indexes.json       # Exime texto libre (trigger) de indexación
├── firebase.json
├── docs/ARQUITECTURA.md
└── src/
    ├── app/                                 # Next.js App Router (sólo enrutado y composición)
    │   ├── layout.tsx                       # Fuentes, <AuthProvider>
    │   ├── page.tsx                         # Portada pública
    │   ├── login/page.tsx                   # Auth + consentimiento informado
    │   └── (app)/                           # Grupo privado: guardia de sesión + navegación
    │       ├── layout.tsx
    │       ├── dashboard/page.tsx
    │       ├── gimnasio/page.tsx            # Catálogo por familias de práctica
    │       ├── gimnasio/[practiceId]/page.tsx  # SSG de cada práctica
    │       ├── antidotos/page.tsx
    │       ├── diario/page.tsx              # Registros estructurados (18 plantillas)
    │       ├── programas/[programId]/       # Recorridos de varias semanas
    │       ├── biblioteca/[articleId]/      # Artículos de fundamentos (SSG)
    │       └── cartas/page.tsx
    │
    ├── domain/                              # Núcleo clínico: TS puro, sin React ni Firebase
    │   ├── types.ts                         # Modelo de dominio
    │   ├── evidence.ts                      # Niveles de evidencia, etiquetas
    │   ├── practices.ts                     # Catálogo del Gimnasio (+ referencias)
    │   ├── antidotes.ts                     # Emoción → antídoto (+ referencias, estabilización)
    │   ├── cards.ts                         # Mazos filosóficos (citas verificadas)
    │   ├── journal.ts                       # Plantillas del diario (campos, evidencia, precauciones)
    │   ├── library.ts                       # Artículos de la biblioteca
    │   ├── programs.ts                      # Programas y cálculo de progreso
    │   ├── recommend.ts                     # Sugerencias del panel (reglas transparentes)
    │   └── metrics.ts                       # Racha, dosis, línea base, tendencias (funciones puras)
    │
    ├── lib/firebase/
    │   ├── client.ts                        # Inicialización perezosa, caché offline
    │   └── repositories.ts                  # Único lugar que conoce la forma de Firestore
    │
    ├── store/useProgressStore.ts            # Zustand: proyección en memoria de Firestore
    ├── providers/AuthProvider.tsx           # Context: identidad; conecta/desconecta el store
    ├── hooks/useGuidedTimer.ts              # Temporizador por pasos sin deriva + wake lock
    ├── config/safety.ts                     # Recursos de crisis (ajustar por jurisdicción)
    └── components/
        ├── ui/                              # Button, IntensityScale (SUDS 0–10), EvidencePanel
        ├── practice/GuidedSequence.tsx      # Reproductor compartido Gimnasio/Antídotos
        ├── antidotes/                       # AntidoteModule (módulo principal), SafetyPanel
        ├── gym/PracticePlayer.tsx
        ├── cards/                           # PhilosophyCard (volteo CSS 3D), CardDeck
        ├── dashboard/                       # Dashboard, CheckinForm
        └── layout/                          # AppNav, SyncNotice
```

**Por qué esta separación (escalabilidad clínica):**

- `domain/` concentra todo el contenido clínico y sus referencias. Un/a revisor/a clínico/a puede auditar un solo
  directorio sin leer componentes, y el contenido es testeable sin navegador.
- `lib/firebase/repositories.ts` es la única capa que conoce Firestore. Migrar a otro backend (p. ej. uno con
  BAA/HIPAA distinto) no toca UI ni dominio.
- Añadir un rol clínico = nuevo grupo de rutas `(clinician)/` + reglas `careLinks`, sin tocar el área del paciente.

## 2. Esquema Firestore

```
users/{uid}                                   perfil
  displayName: string | null
  role: 'patient' | 'clinician'               # sólo 'patient' desde el cliente; 'clinician' vía Admin SDK
  timezone: string                            # IANA, p. ej. America/Argentina/Buenos_Aires
  consent: { version: string, acceptedAt: Timestamp } | null
  createdAt: Timestamp

users/{uid}/sessions/{autoId}                 práctica (append-only)
  practiceId: string                          # 'amor-altruista' | 'antidoto-ira' | …
  family: 'attentional' | 'constructive' | 'deconstructive'
  skills: ('attention' | 'compassion' | 'resilience')[]
  source: 'gym' | 'antidote'
  startedAt: Timestamp
  durationSec: number                         # tiempo realmente practicado, sin pausas
  completed: boolean                          # ≥ 60 s
  moodPre, moodPost: number(0–10) | null
  createdAt: serverTimestamp

users/{uid}/afflictionLogs/{autoId}           antídoto aplicado (append-only)
  emotionId: 'ira' | 'envidia' | 'apego' | 'autocritica' | 'ansiedad' | 'rumiacion' | 'resentimiento' | 'desanimo'
  antidoteId: string
  intensityPre: number(0–10)
  intensityPost: number(0–10) | null
  trigger: string(≤280) | null                # no indexado
  stabilizationUsed: boolean
  createdAt: serverTimestamp

users/{uid}/checkins/{YYYY-MM-DD}             estado diario (1 doc/día, editable)
  date: string
  mood: number(0–10)
  perma: { P, E, R, M, A: number(0–10) } | null
  updatedAt: serverTimestamp

users/{uid}/journal/{autoId}                diario (append-only)
  type: 'tres-cosas' | 'defusion' | 'saboreo' | 'valores' | 'escritura-expresiva'
        | 'carta-gratitud' | 'mejor-yo' | 'reflexion-carta'
  values: map<string, string | number>       # ≤ 12 campos; texto ≤ 280 / 8000 (validado en cliente), no indexado
  createdAt: serverTimestamp

users/{uid}/assessments/{autoId}            evaluaciones validadas (append-only)
  instrument: 'who5'
  items: number[5]                            # 0–5 cada uno
  score: number                               # = suma × 4; las reglas verifican la coherencia
  createdAt: serverTimestamp

users/{uid}/stats/summary                     agregados — SÓLO escribe una Cloud Function
  currentStreak, longestStreak, totalMinutes, lastPracticeAt, …

careLinks/{clinicianId}_{patientId}           vínculo terapéutico consentido
  clinicianId, patientId: string
  status: 'pending' | 'active' | 'revoked'    # el clínico propone; sólo el paciente activa/revoca
  createdAt, respondedAt: Timestamp
```

**Decisiones de diseño:**

| Decisión | Motivo |
|---|---|
| Subcolecciones bajo `users/{uid}` | El aislamiento por paciente se expresa en una sola regla; exportar o borrar los datos de un paciente es borrar un árbol. |
| Registros append-only (`update: false`) | Integridad del registro clínico: no se reescribe la historia. Se permite borrar (derecho de supresión). |
| Check-in con id = fecha | Idempotente y sin duplicados por día; consulta por rango de string. |
| `createdAt == request.time` en reglas | Impide falsificar marcas de tiempo desde el cliente. |
| Sin índices compuestos | Todas las consultas son rango + orden sobre el mismo campo. |
| `trigger` excluido de índices | Texto libre sensible: no hace falta consultarlo, y no indexarlo reduce la superficie de exposición. |
| Indicador de riesgo **no** persistido | Guardarlo crea un deber de respuesta que exige monitorización en tiempo real. Si el equipo clínico decide registrarlo, debe ir acompañado de alertas y un protocolo. |
| `stats/summary` sólo desde backend | Los agregados que verá un clínico no deben depender de un cálculo del cliente. Mientras tanto, el cliente calcula todo con `domain/metrics.ts`. |

## 3. Estado global

**Context para identidad, Zustand para progreso.**

- `AuthProvider` (Context): el usuario cambia rara vez y lo necesita todo el árbol. Al cambiar, llama a
  `useProgressStore.getState().connect(uid)` / `disconnect()`; es el único punto de unión.
- `useProgressStore` (Zustand): proyección en memoria de 90 días, alimentada por tres `onSnapshot`.
  - **Firestore es la fuente de verdad.** El store no tiene `persist`: la caché offline de Firestore ya cumple ese papel, y duplicarla en `localStorage` dejaría datos clínicos sin cifrar y sin control.
  - **Escrituras sin esperar a la red:** con la caché persistente, el listener refleja la escritura local al instante, así que la práctica funciona offline. Los rechazos del servidor llegan a `syncError` → `SyncNotice`.
  - **Sin estado derivado en el store:** racha, dosis y línea base se calculan con funciones puras + `useMemo`. Los componentes se suscriben por porciones (`useProgressStore(s => s.sessions)`); nunca se usa un selector que devuelva un objeto nuevo, porque en Zustand 5 eso provoca bucles de render.
- **Cierre de sesión:** `terminate` + `clearIndexedDbPersistence` borran la caché local, porque el equipo puede ser compartido.

## 4. Fundamentación y honestidad epistémica

- Cada práctica y antídoto declara su **nivel de evidencia** (`robusta` / `moderada` / `preliminar` / `contemplativa`) y sus referencias con DOI, visibles en la UI.
- Se incluyen deliberadamente **resultados que matizan**. Por ejemplo, Mongrain & Anselmo-Matthews (2012) sobre "Tres cosas buenas".
- La lógica de "antídotos" (Ricard) se presenta como **premisa contemplativa**. Su respaldo empírico se apoya en el etiquetado afectivo, la *undoing hypothesis* y el autodistanciamiento, y el texto no afirma más que eso.
- El panel muestra **dosis**, no "nivel de habilidad", y advierte que el cambio pre/post es autoinformado e inmediato.
- Las cartas sólo usan citas con localización verificable y marcan paráfrasis y conceptos. Se excluyeron frases apócrifas, como "entre el estímulo y la respuesta…", atribuida falsamente a Frankl.
- Los ítems PERMA del check-in son orientativos. Para medición formal: PERMA-Profiler (Butler & Kern, 2016).
- Sin gamificación: no hay puntos, insignias ni rachas castigadoras. La racha no se rompe hasta que termina el día.

## 5. Contenido

| Sección | Contenido |
|---|---|
| Gimnasio | 34 técnicas: 5 herramientas rápidas (1–3 min, entre ellas el kit de crisis TIPP) y 29 prácticas en 3 familias, con nivel (iniciación/intermedio/avanzado), prerrequisitos, explicación, consejos, obstáculos y referencias; duración ajustable y temporizador libre |
| Antídotos | 16 emociones, entre ellas duelo, agobio, bloqueo y pánico, con base científica, «Cuándo no usarlo» legible (INFLESZ ≥ 55), práctica de entrenamiento e historial |
| Diario | 18 plantillas, entre ellas la preparación de conversaciones difíciles (DEAR MAN), entre ellas el registro de pensamientos (TCC), el diario de sueño de consenso, el experimento conductual y la resolución de problemas; escalera de exposición en borrador |
| Evaluaciones | WHO-5 y GAD-7 publicados; PHQ-9 en borrador, con aviso de seguridad por el ítem 9 |
| Biblioteca | 28 artículos en 7 categorías, 6 diagramas de ciclos clínicos, lectura en voz alta, glosario de 29 términos y catálogo de 12 trampas del pensamiento |
| Programas | 9 recorridos y 27 semanas, entre ellos *Estrés y agotamiento* y *Cuidar sin agotarse* |
| Herramientas | Plan de seguridad (Stanley-Brown), en borrador |
| Cartas | 7 mazos y 44 cartas con fuente localizable |

Total: 110 referencias distintas; las 93 con DOI se verificaron contra Crossref. Proceso de revisión clínica, versiones
y registro de cambios: [CONTENIDO-CHANGELOG.md](CONTENIDO-CHANGELOG.md). Normas de redacción:
[GUIA-DE-ESTILO.md](GUIA-DE-ESTILO.md).

**Pendiente de decisión clínica:** el diario guarda texto libre sensible. Antes de producción, valorar cifrado a nivel
de campo (p. ej. con una clave derivada en cliente) y la política de acceso del terapeuta a este contenido en concreto.

## 6. Estado de las mejoras

### Hecho
- **Modo demo explícito** (`NEXT_PUBLIC_DEMO_MODE=true`). Sin configuración de Firebase, la app muestra un error
  visible en lugar de guardar datos clínicos en `localStorage`. Verificado en el build.
- **Contraste WCAG AA** en todo el texto: auditado automáticamente con axe en 11 páginas, en escritorio y móvil.
- **Consentimiento informado obligatorio y versionado** (`CONSENT_VERSION`). Cubre la entrada con Google y la
  renovación del consentimiento.
- **Autenticación**: verificación de correo, recuperación de contraseña sin revelar qué cuentas existen.
- **Derechos sobre los datos**: exportación completa en JSON y borrado de la cuenta, desde Ajustes.
- **Reglas de seguridad**:
  - Validación del diario por tipo (lista blanca de campos y límites de longitud).
  - Evaluaciones con verificación de que la puntuación coincide con los ítems.
  - Supresión del propio perfil.
- **WHO-5**: evaluación quincenal con interpretación clínica (Topp et al., 2015), umbral de cambio relevante e
  historial.
- **Guía por voz** (Web Speech API) y campana configurables, para practicar con los ojos cerrados.
- **Recordatorios** como evento recurrente de calendario (.ics), formulados como intención de implementación.
- **Primera visita guiada**, **revisión semanal** y **borradores del diario** con aviso de cambios sin guardar.
- **PWA instalable**: manifiesto, icono y accesos directos.
- **Calidad**:
  - ESLint, 68 tests unitarios y tests de reglas para el emulador.
  - 34 tests de punta a punta con auditoría de accesibilidad.
  - Integración continua (CI) y Node 20 fijado en `.nvmrc`.

### Hecho · segunda tanda
- **Informe para el terapeuta** (`/informe`), imprimible o en PDF:
  - Se genera en el dispositivo; el periodo y las secciones son configurables.
  - El diario sólo se incluye si el usuario marca cada entrada. Ejemplo en `docs/ejemplos/`.
- **Duración ajustable** de cada práctica (breve ≈5 min / estándar / extendida ≈20 min), escalando los pasos en
  proporción.
- **Temporizador libre** (`/gimnasio/temporizador`), con campanas de intervalo; cuenta en la racha y la dosis.
- **Qué te funciona**: efecto medio por práctica, antídoto y momento del día, con n mínima y advertencia de que es una
  correlación.
- **Páginas 404, de error y de carga** con el diseño de la app.
- **Accesibilidad**:
  - El foco del teclado queda dentro de las hojas modales.
  - Enlace "Saltar al contenido".
  - El lector de pantalla anuncia el estado de la práctica.
  - La página de Antídotos tiene encabezado principal.
- **Errores corregidos gracias a los tests**: con "reducir movimiento", la línea del gráfico de ánimo y la marca de
  verificación no se dibujaban; y el gráfico se desbordaba al imprimir.

### Hecho · tercera tanda
- **Buscador global** (⌘K / Ctrl+K, «/» o el botón de la cabecera):
  - Busca en prácticas, antídotos, artículos, cartas, programas, plantillas y secciones.
  - Ignora tildes, exige todas las palabras (AND) y da más peso al título.
  - Patrón ARIA combobox. El índice se descarga sólo al abrirlo.
  - Enlaces profundos: `/antidotos?emocion=…` y `/cartas?carta=…`.
- **Rendimiento** (JS inicial en modo real, sin comprimir según `next build`): las páginas del área privada bajan de
  ~300–335 kB a ~165–200 kB (−40 %).
  - **Firestore bajo demanda.** Es el chunk más pesado: 73 kB gzip en la medición inicial, 83 kB gzip en el build
    final. Se aisló en `lib/firebase/db.ts` y lo carga el store en segundo plano: la página pinta primero y los datos
    llegan después.
  - **Motion en dos tiempos.** `LazyMotion` con componentes `m`; los gestos y animaciones de layout se descargan tras
    la hidratación (`strict` impide volver a importar `motion` completo).
  - **Auth sin el resolvedor de popups.** Sólo `/login` incluye el popup de Google.
  - Excepciones: `/informe` queda en 227 kB, por encima del objetivo de 220. `/login` sube a 307 kB porque absorbe el
    popup y la creación del perfil; se descarga una vez y beneficia al resto.

### Hecho · cuarta tanda
- **Modo oscuro**, automático según el sistema o elegido en Ajustes › Apariencia (Sistema / Claro / Oscuro):
  - Implementación: los colores de Tailwind (`stone`, `sage`, `white`, `accent`) son variables CSS en
    `globals.css`; ningún componente lleva variantes `dark:`.
  - Un script en `<head>` aplica la preferencia antes de pintar, sin destello.
  - Contraste WCAG AA calculado para cada par texto/fondo en ambos modos.
  - Color de la línea del gráfico validado por separado para cada superficie.
  - Jerarquía de superficies en oscuro: fondo < pista < tarjeta.
  - Tarjetas destacadas con su propio token de acento, para no encender un bloque claro de noche.
  - Auditoría axe en 11 páginas con el sistema en oscuro.
  - El informe se imprime siempre en claro.
- Corrección: las fechas usaban `capitalize` ("12 De Octubre"); ahora sólo la primera letra va en mayúscula.

### Hecho · quinta tanda
- **Uso sin conexión** (`public/sw.js`):
  - El service worker precarga las secciones clave y sus archivos.
  - Páginas con red primero; archivos versionados con caché primero.
  - Sin red, muestra un aviso en la app y una página propia de "Sin conexión".
  - No intercepta Firebase: los datos offline los gestiona Firestore.
  - Error encontrado al probarlo: Next.js referencia el código de cada página como `static/chunks/…`, sin el prefijo
    `/_next/`. Sin capturar ese formato se veía la cabecera pero no el contenido.
- **Política de seguridad de contenido (CSP)** en `next.config.mjs`:
  - `connect-src` limitado a la propia app y a Firebase; un test verifica que se bloquea el envío a otros dominios.
  - `frame-ancestors 'none'`, `object-src 'none'`, `base-uri 'self'` y `COOP same-origin-allow-popups` (para el
    popup de Google).
  - Límite conocido: `script-src` incluye `'unsafe-inline'`, porque las páginas son HTML estático prerenderizado.
    Un nonce exigiría renderizado dinámico de cada página.
- **Zona horaria en cada registro** (`tz`, IANA): el "día vivido" se conserva al viajar, así que la racha no se rompe
  ni se duplican días. Las reglas del servidor validan el campo.
- **Exportación**:
  - El nombre del archivo usa la fecha local; antes, una exportación a las 23:00 llevaba la fecha del día siguiente.
  - El formato es el mismo en demo y en Firestore (`afflictionLogs`), con metadatos `app`, `formatVersion` y
    `timezone`.
- **Tests de componentes** (React Testing Library + jsdom): escala 0–10, pestañas, editor del diario y buscador.
  - Detectaron un fallo: `setPointerCapture` no existe en navegadores antiguos y rompía la escala.

### Pendiente (requiere decisión o infraestructura)
1. **Recursos de crisis** en `src/config/safety.ts` según la jurisdicción, revisados por el/la responsable clínico/a.
2. **Cifrado del diario**: decidir qué ve el terapeuta y cómo se gestiona la clave. Puede ser una clave derivada en
   cliente, o KMS con Cloud Functions.
3. **Marco legal y regulatorio**:
   - Región de Firestore y acuerdos de tratamiento (DPA/BAA).
   - Si la app se presenta con fines clínicos, evaluar si es un dispositivo médico (ANMAT, MDR).
4. **Cloud Functions**: rol `clinician` con custom claims, `stats/summary` y borrado de la cuenta en el servidor
   (sin requerir un inicio de sesión reciente).
5. **Módulo clínico**: interfaz de `careLinks`, panel del terapeuta, tareas asignadas e informe en PDF.
6. **PHQ-9 / GAD-7**: sólo con un protocolo de respuesta al ítem 9 (ideación suicida).
7. Internacionalización, incluida la elección entre tú y vos (C4). Definirá también la adaptación regional del
   contenido.
8. Versiones de "lectura fácil" (C5): requieren definir el público objetivo.
9. Aprobar o ajustar el contenido en borrador: plan de seguridad, escalera de exposición y PHQ-9
   (ver `src/domain/governance.ts`).
