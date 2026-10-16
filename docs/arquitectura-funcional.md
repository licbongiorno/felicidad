# Arquitectura funcional

- **Fecha:** 2026-10-15
- **Alcance:** qué componentes tiene el producto, qué hace cada uno, qué existe hoy (con su ruta real), qué falta, cómo fluye el usuario y cómo se construye un ejercicio. La estructura técnica está en [ARQUITECTURA.md](ARQUITECTURA.md) y en [arquitectura-tecnica.md](arquitectura-tecnica.md).
- **Convención:** «hoy» = rama actual, verificada en el código o en [auditoria-proyecto.md](auditoria-proyecto.md). «En curso» = parte de «Ahora (este PR)» ([roadmap.md](roadmap.md)), que implementa otro miembro del equipo.

---

## 1. Los nueve componentes

```
                    ┌──────────── Centro de ayuda y seguridad (siempre visible) ────────────┐
                    │                                                                         │
 Mi espacio ──► Mapa de habilidades ──► práctica (motor de ejercicios) ──► Diario ──► Mi evolución
     │               │        ▲                 ▲                                       │
     │               ▼        │                 │                                       ▼
     └──────────► Recorridos ─┘     Laboratorio / Biblioteca sonora y multimedia   Espacio profesional
                                                                                   (opcional, futuro, P3)
```

La sección **Familia y modo chico** (`/familia`, `/chicos/*`) es transversal. Reutiliza el diario, el motor de actividades y la ayuda con su propio tema; aquí no se trata como componente aparte.

### 1.1 Mi espacio

| | |
|---|---|
| **Para qué** | Punto de entrada personal: qué hago hoy, qué me propuse, qué llevo a la sesión. |
| **Hoy** | `/dashboard`: «Tu día» en 3 pasos (check-in 0–10 con PERMA opcional, una práctica y la pregunta del día), primer uso guiado (`Onboarding.tsx`, `onboarding.ts`), sugerencias por reglas transparentes (`recommend.ts`), objetivos (≤ 3), plan semanal (≤ 3 prácticas), preguntas para la sesión (≤ 10) (`settings/personal`), favoritas, «Retomar» durante 24 h (`resume.ts`). `/ajustes`: voz, campana, recordatorio `.ics`, apariencia, texto, movimiento, exportación y borrado. |
| **Falta** | Entrada explícita «¿qué necesitas ahora?» enlazada al Mapa de habilidades (en curso con `/habilidades`). Editar o apagar sugerencias (personalización transparente, §3). Retomar sincronizado entre dispositivos. |

### 1.2 Mapa de habilidades

| | |
|---|---|
| **Para qué** | Encontrar la habilidad adecuada por necesidad y entender su ficha. |
| **Hoy** | `/gimnasio`: 108 prácticas en 18 módulos por necesidad, con filtros por enfoque, nivel y riesgo (`SkillsCatalog.tsx`). `/gimnasio/[practiceId]`: ficha y reproductor (`PracticePlayer.tsx`). `/antidotos`: 22 emociones (reconocer → medir → practicar → volver a medir). Buscador global Ctrl/⌘ + K (`search.ts`). |
| **Falta** | Mapa por las 16 necesidades de [vision-producto.md](vision-producto.md) (en curso: `/habilidades`). Ficha ampliada con objetivo de aprendizaje y fecha de revisión visibles (en curso). Buscador con píldoras, desafíos, cuentos y guías (en curso). Indicaciones explícitas por práctica (ver [catalogo-habilidades.md](catalogo-habilidades.md) §3). |

### 1.3 Recorridos

| | |
|---|---|
| **Para qué** | Aprender en secuencia, con un ritmo semanal. |
| **Hoy** | `/programas`: 28 programas por semanas (`programs.ts`; cada semana tiene `practiceIds`, `articleIds` y `journalType`), buscador «Ayúdame a elegir» (`ProgramFinder.tsx`); el progreso se deriva de las sesiones. `/desafios`: 4 desafíos de 7, 21 o 30 días (`challenges.ts`), que no se reinician al saltar días. |
| **Falta** | El estado de los desafíos vive sólo en `localStorage` (Auditoría §5.2). En curso: aislarlo por usuario y borrarlo al cerrar sesión (`src/lib/localData.ts`). Pendiente (P1): sincronizarlo en Firestore. Pausar o abandonar un programa de forma explícita. Fecha de revisión por programa. |

### 1.4 Laboratorio

| | |
|---|---|
| **Para qué** | Practicar en un entorno seguro, con retroalimentación explicada. |
| **Hoy** | `/laboratorio`: simulador de conversaciones (8, `/laboratorio/conversaciones/[simId]`, estilos asertivo, pasivo o agresivo), semáforo emocional (`/laboratorio/semaforo`), caja de herramientas (`/laboratorio/caja`, que se guarda como diario `caja-herramientas`) y «¿Hecho o interpretación?» (24 frases) (`lab.ts`). |
| **Falta** | Más simulaciones para límites y reparación (necesidades 6 y 16). Registro del aprendizaje en el Laboratorio (hoy sólo la caja se guarda). Ninguna simulación con IA (§4). |

### 1.5 Biblioteca sonora y multimedia

| | |
|---|---|
| **Para qué** | Entender (psicoeducación) y escuchar. |
| **Hoy** | `/biblioteca`: 53 artículos con diagramas de ciclos y lectura en voz alta (`ArticleAudio.tsx`, `voice-queue.ts`); `/biblioteca/pildoras`: 20 píldoras en tarjetas; glosario (72), rueda de emociones (10 familias), trampas del pensamiento (12). Voz guía de las prácticas por síntesis del navegador (`voice.ts`). Temporizador libre con campanas (`/gimnasio/temporizador`, `chime.ts`). Cartas filosóficas (`/cartas`). Cuentos con narración (Familia y modo chico). |
| **Falta** | Audio grabado con voz humana (P2; ver [decisiones-tecnicas.md](decisiones-tecnicas.md) ADR-005). Video. Fichas imprimibles por plantilla (R49). Transcripción y control de velocidad de la voz. |

### 1.6 Diario

| | |
|---|---|
| **Para qué** | Registros estructurados y privados. |
| **Hoy** | `/diario`: 28 plantillas (24 visibles), entre ellas el registro de pensamientos, DEAR MAN, tarjeta diaria DBT, análisis en cadena, diario de sueño, experimento conductual y `sentido`. Línea de tiempo. Borrador en `sessionStorage` (`JournalEditor.tsx`). Validación por tipo en el servidor (`validJournalValues` en `firestore.rules`). |
| **Falta** | Cifrado a nivel de campo (decisión pendiente, `ARQUITECTURA.md` §5). Versión de plantilla en cada entrada (`journal` no guarda `contentVersion`; ver §2.4). Buscar dentro del propio diario. Ventana de lectura de más de 90 días. |

### 1.7 Mi evolución

| | |
|---|---|
| **Para qué** | Ver qué practicaste y qué te sirve, sin conclusiones falsas. |
| **Hoy** | Tendencia de ánimo (`MoodTrend.tsx`), revisión semanal, «Qué te funciona» con n mínima (`insights.ts`, `MIN_N = 2`) y advertencia de correlación. `/crecimiento`: jardín que nunca decrece, colección DBT, desafío semanal e hitos (`growth.ts`). `/evaluaciones`: WHO-5, GAD-7, DERS-16 y PSS-10 publicados (PHQ-9 e ISI en borrador), con historial de un año. `/informe`: resumen para el terapeuta generado en el dispositivo, con el diario oculto por defecto. |
| **Falta** | Nivel de confianza explícito en «Qué te funciona», al estilo Daylio ([oportunidades-producto.md](oportunidades-producto.md)). Confianza subjetiva por habilidad (R33). Hitos sincronizados (hoy son por dispositivo). Métricas de más de 90 días (ventana del store). |

### 1.8 Espacio profesional opcional (futuro, P3)

| | |
|---|---|
| **Para qué** | Que el profesional vea **sólo lo que el paciente decide compartir**. |
| **Hoy** | **No existe interfaz: el portal es sólo para pacientes.** Las reglas ya contemplan `careLinks/{clinicianId}_{patientId}` con estados `pending`, `active` y `revoked`; el clínico propone y sólo el paciente activa o revoca. Hoy un vínculo activo da lectura de **todas** las subcolecciones (`canRead` en `firestore.rules`). No hay Cloud Functions para asignar el rol `clinician`. |
| **Diseño** | Permisos **granulares** por categoría (sesiones, antídotos, check-ins, evaluaciones, aplicaciones, preguntas para la sesión). **El diario nunca se comparte de forma automática**: sólo entradas sueltas, elegidas una por una, como ya hace el informe. Revocación inmediata. **Registro de accesos** visible para el paciente (quién, qué y cuándo), siguiendo el modelo documentado de Jenora (investigación §8). |
| **Requisitos previos** | Backend de confianza (Cloud Functions, plan Blaze); roles con *custom claims*; cambiar `canRead` para que dependa de la categoría; colección de auditoría que escribe sólo el servidor; revisión legal (Ley 26.529 si se considera parte de la historia clínica: **a verificar**). Ver [arquitectura-tecnica.md](arquitectura-tecnica.md) §3 y [decisiones-tecnicas.md](decisiones-tecnicas.md) ADR-013. |

### 1.9 Centro de ayuda y seguridad

| | |
|---|---|
| **Para qué** | Ayuda humana a un toque y reglas claras. |
| **Hoy** | Botón «Ayuda» en todas las pantallas con las líneas de crisis de Argentina (`HelpButton.tsx`, `src/config/safety.ts`, verificadas el 2026-10-14). Cribado en Antídotos que detiene el ejercicio (`SafetyPanel.tsx`). Plan de seguridad Stanley-Brown en **borrador** (`/plan-de-seguridad`, oculto con `isPublished`). Recursos para chicos y adolescentes (102, 911, líneas de salud mental). Política de privacidad (`/privacidad`, borrador). Consentimiento versionado. |
| **Falta** | Preguntas frecuentes y contacto de soporte (`PLAN-PREMIUM.md` §C). Declaración pública de accesibilidad. Precarga sin conexión del plan de seguridad y de `/chicos` (en curso). Recursos de otros países (P3). |

---

## 2. Flujos principales

### 2.1 El ciclo de cada ejercicio

```
entrar ─► identificar la necesidad ─► practicar ─► llevar una acción concreta ─► revisar
  │               │                       │                  │                      │
Mi espacio    Mapa / Antídotos /      motor de           «Llevarlo a tu vida»   «¿Lo pudiste usar?
o Ayuda       buscador / primer uso   ejercicios         (transfer ≤ 280)        ¿Te sirvió?»
                                      (pre/post 0–10)                            (applications)
```

| Paso | Hoy | Datos |
|---|---|---|
| Entrar | `/dashboard`, buscador, botón «Ayuda» | — |
| Identificar | Módulos por necesidad; en Antídotos, emoción e intensidad (SUDS 0–10) | `afflictionLogs.intensityPre` |
| Practicar | `GuidedSequence` (compartido por Gimnasio y Antídotos), duración ajustable, voz guía | `sessions` (`moodPre`, `moodPost`, `contentVersion`) |
| Acción concreta | «Llevarlo a tu vida»: cuándo y dónde | `sessions.transfer` |
| Revisar | Utilidad percibida (`util`, `indiferente`, `no-apropiada`) y nota | `applications` |

### 2.2 Flujo en un momento difícil

1. Botón «Ayuda» o Antídotos.
2. Se elige la emoción y se mide la intensidad.
3. Casilla «Ahora mismo tengo pensamientos de hacerme daño o de no querer vivir» → **se detiene el ejercicio** y se muestran los recursos de crisis. El indicador **no se guarda**: guardarlo crea un deber de respuesta (`ARQUITECTURA.md` §2).
4. Con intensidad ≥ 8 (`STABILIZATION_THRESHOLD`) → 90 s de respiración lenta antes del antídoto. Con ≥ 9 → se sugiere TIPP.
5. Práctica, nueva medición y registro.

### 2.3 Flujo de un recorrido

`/programas` → «Ayúdame a elegir» → semana N (prácticas, artículos y plantilla) → el progreso se calcula a partir de las sesiones → semana siguiente. Los desafíos marcan un día como hecho por registro o a mano.

### 2.4 El motor de ejercicios

#### Modelo común (real)

| Pieza | Dónde | Qué define |
|---|---|---|
| `Practice` | `src/domain/types.ts` | `id`, `title`, `family`, `skills`, `summary`, `mechanism`, `evidenceLevel`, `evidence[]` (`Reference` con DOI), `steps[]` (`GuidedStep`: `title`, `instruction`, `durationSec`, `kind` = `instruction`, `breath`, `silence` o `reflection`), `cautions`, `howItWorks[]`, `tips[]`, `obstacles[]`, `micro` |
| `PracticeMeta` | `src/domain/packs/types.ts` | `level`, `prerequisites`, `approaches`, `module`, `risk {level, alternative}` |
| `ContentPack` | `src/domain/packs/types.ts` | Un tema completo: `practices`, `meta`, `articles`, `programs`, `pills`, `kidGuides`, `glossary` |
| `Pill` | `src/domain/packs/types.ts` | 4 a 7 `slides`, `related`, `references` |
| `ReviewRecord` | `src/domain/governance.ts` | `version`, `status` (`borrador`, `pendiente` o `revisado`), `evidenceCheckedAt`, `reviewedBy`, `reviewedAt`, `note` |
| Niveles | `src/domain/levels.ts` | `PRACTICE_LEVELS` y `missingPrerequisites()` |
| Catálogo | `src/domain/catalog.ts` | `PRACTICE_APPROACHES`, `PRACTICE_RISK`, `JOURNAL_RISK`, `MODULES`, `MODULE_OF_PRACTICE` |
| Duraciones | `src/domain/durations.ts` | Variantes breve (≈ 5 min), estándar y extendida (≈ 20 min); ningún paso baja de 20 s |
| Plantilla de diario | `src/domain/journal.ts` | `JournalTemplate` con `fields` (`text`, `textarea` o `scale`), `when`, `rationale`, `evidence`, `caution` |

Las prácticas antiguas definen nivel, enfoque y riesgo en tablas separadas (`levels.ts`, `catalog.ts`). Las de paquetes lo hacen en `PracticeMeta`, y las tablas lo incorporan con `PACK_META`. Conviven dos convenciones (Auditoría §8).

#### Qué es configurable (datos) y qué es lógica programada

| Configurable como dato (sin tocar componentes) | Lógica programada (código y tests) |
|---|---|
| Textos, pasos, duración y tipo de cada paso | Temporizador sin deriva y *wake lock* (`useGuidedTimer.ts`) |
| Nivel, prerrequisitos, enfoque, módulo | Escalado de duraciones (`scaleSteps`) |
| Riesgo y alternativa | Bloqueo «leer precauciones» en riesgo 2 (`PracticePlayer.tsx`) |
| Referencias y nivel de evidencia | Cribado y estabilización (`AntidoteModule.tsx`, `STABILIZATION_THRESHOLD = 8`) |
| Campos de las plantillas de diario | Validación por tipo en el servidor (`validJournalValues`) |
| Semanas de programas y tareas de desafíos | Cálculo de progreso (`programs.ts`, `challenges.ts`) |
| Píldoras, glosario, guías | Puntuación e interpretación de instrumentos (`instruments.ts` y reglas) |
| Estado de revisión y versión | Sugerencias (`recommend.ts`) y efectos con n mínima (`insights.ts`) |
| Simulaciones del Laboratorio (`lab.ts`) | Voz guía (`voice.ts`) y retomar (`resume.ts`) |

Regla práctica: **todo lo que cambia el contenido clínico es un dato revisable; todo lo que decide la seguridad es código con test.**

#### Reutilización sin duplicar

- `GuidedSequence.tsx` reproduce tanto prácticas del Gimnasio como antídotos.
- Un antídoto enlaza su práctica de entrenamiento por id (`trainingPracticeId`). No copia los pasos.
- Programas, desafíos, píldoras y módulos referencian prácticas por id. Los tests de contenido (`content.test.ts`, `packs.test.ts`) fallan si un id no existe.
- Una práctica tiene **un módulo principal** (`MODULE_OF_PRACTICE`). El Mapa por necesidad (16) puede asignarla a varias necesidades por id, sin duplicarla.

#### Versionado

- `ReviewRecord.version` por elemento. Cada `session` y cada `afflictionLog` guarda `contentVersion` (validado en las reglas: entero ≥ 1).
- Cambio clínicamente relevante → subir `version` en `REVIEW_OVERRIDES` y anotarlo en [CONTENIDO-CHANGELOG.md](CONTENIDO-CHANGELOG.md).
- **Hueco:** `journal`, `applications` y `assessments` no guardan `contentVersion`. Propuesta (P2): agregarlo como campo opcional, con su regla y su test.

#### Evolución propuesta del modelo (P1–P2)

Agregar a la ficha estándar (ver [catalogo-habilidades.md](catalogo-habilidades.md) §3) los campos que faltan: `learningObjective`, `indications`, `needs[]` (las 16), `accessibleVariants` y `learningCheck`. La fecha de revisión se deriva de `ReviewRecord`, sin duplicarla. Todos opcionales al principio, con un test que exija completarlos en las prácticas nuevas.

---

## 3. Personalización transparente (Fase 8)

> El enunciado literal de la Fase 8 no está en el repositorio. Se toma como «personalizar sin opacidad»; **a verificar**.

**Hoy:**

- Primer uso: tres preguntas (qué trabajar, cuánto tiempo, en qué momento) → programa, primera práctica sin precauciones y recordatorio (`onboarding.ts`).
- Sugerencias por reglas, con el porqué visible (`recommend.ts`): patrón aflictivo recurrente → entrenar su antídoto; familia menos practicada en 14 días; WHO-5 pendiente; ninguna entrada de diario en la semana.
- «Qué te funciona» con n mínima y la advertencia de que es una correlación.

**Principios:**

1. **Cada sugerencia dice por qué** («te lo sugerimos porque…»). Ya se cumple.
2. **Sólo reglas legibles**, sin aprendizaje automático opaco. Mismo principio que declara COGITO (investigación §4).
3. **Editable:** cambiar objetivos y ocultar una sugerencia o un tipo de sugerencia. *Falta.*
4. **Datos usados, visibles:** «para sugerirte esto usamos tus últimos 14 días de antídotos». *Parcial.*
5. **Nada se infiere sobre la salud de la persona** (ni etiquetas ni perfiles de riesgo guardados).
6. **Utilidad percibida:** ordenar las sugerencias usando `applications.usefulness`, también con regla visible (R32). *Falta.*
7. **Se puede apagar:** modo «sin sugerencias». *Falta.*

---

## 4. Postura sobre IA

**Recomendación: no incorporar IA conversacional en el MVP.** Motivos: [oportunidades-producto.md](oportunidades-producto.md) §7 y §13 (pregunta 3); registro en [decisiones-tecnicas.md](decisiones-tecnicas.md) ADR-006.

Si en una fase posterior (P3, R57) se evalúa IA, debe cumplir estos 10 puntos **antes** de llegar a un usuario:

| # | Punto | Requisito |
|---|---|---|
| 1 | **Funciones seguras** | Sólo navegación («¿qué práctica hay para…?»), explicación de conceptos del glosario y resumen de contenido **público** de la app. Nunca consejo clínico, interpretación del diario, diagnóstico, triaje de riesgo ni conversación terapéutica. |
| 2 | **Datos a los que accede** | Sólo el catálogo público y la consulta del usuario en ese momento. |
| 3 | **Datos prohibidos** | Diario, antídotos, check-ins, evaluaciones, aplicaciones, perfiles de chicos y cualquier dato de `users/{uid}`. Nada de memoria entre sesiones. |
| 4 | **Límites** | Respuestas que sólo devuelven enlaces a contenido existente y revisado. Lista cerrada de temas. Ante señales de riesgo, **no responde**: muestra el panel de ayuda fijo (el mismo texto de `SafetyPanel`), sin generar texto. |
| 5 | **Errores** | Etiqueta «generado automáticamente» (como Jenora, investigación §8). Botón «esto está mal». Si falla, se vuelve al buscador. |
| 6 | **Revisión humana** | Conjunto de pruebas revisado por el/la responsable clínico/a antes de cada cambio de modelo o de *prompt*. Muestreo periódico de respuestas, sin datos personales. |
| 7 | **Costes** | Presupuesto por usuario y por mes, con límite duro. La función no puede volverse imprescindible: si se apaga, la app sigue entera. |
| 8 | **Inyección de *prompts* y filtraciones** | Sin herramientas ni acceso a datos, el daño posible se reduce a texto. El contenido del catálogo se trata como dato y no como instrucción. Salida restringida a ids del catálogo, que se validan antes de mostrarse. CSP: un nuevo `connect-src` sólo hacia un endpoint propio (Cloud Function), nunca directo al proveedor. |
| 9 | **Auditoría** | Registro de versión del modelo, versión del *prompt* y categoría de la consulta, **sin el texto del usuario**. Revisión trimestral. |
| 10 | **Alternativa sin IA** | El buscador local (`search.ts`) y el Mapa de habilidades cubren la misma necesidad. La IA es un atajo opcional y desactivado por defecto. |

Además, **nunca se entrenan modelos con datos de los usuarios** y no se envía contenido privado a terceros (ver [seguridad-clinica-y-privacidad.md](seguridad-clinica-y-privacidad.md) §14).
