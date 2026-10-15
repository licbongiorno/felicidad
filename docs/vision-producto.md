# Visión de producto

- **Fecha:** 2026-10-15
- **Estado:** propuesta del equipo; requiere validación del/de la responsable clínico/a y del dueño del producto.
- Relacionados: [oportunidades-producto.md](oportunidades-producto.md), [arquitectura-funcional.md](arquitectura-funcional.md), [catalogo-habilidades.md](catalogo-habilidades.md), [seguridad-clinica-y-privacidad.md](seguridad-clinica-y-privacidad.md).

---

## 1. Identidad

**Habilidades Psicológicas es una herramienta educativa y de práctica.** Te ayuda a aprender habilidades psicológicas, a practicarlas paso a paso y a usarlas en tu vida.

Lo que es y lo que no es:

| Es | No es |
|---|---|
| Un lugar para **aprender y entrenar** habilidades con respaldo | Un tratamiento ni un servicio de salud |
| Un **complemento de la terapia**, entre sesiones | Un sustituto de la evaluación o del tratamiento profesional |
| Un catálogo con **niveles de riesgo, precauciones y alternativas** | Un diagnóstico: los cuestionarios son orientativos (cribado) |
| Un espacio donde **tú controlas tus datos**: exportas, borras y eliges qué compartes | Un servicio de emergencias: en crisis te lleva a la ayuda humana |
| Un catálogo amplio en el que **no todo es para todos** | Una lista de técnicas que hay que hacer completa |

Esta identidad ya está en el código:

- `SAFETY_DISCLAIMER` en `src/config/safety.ts`;
- el consentimiento informado versionado (`src/lib/consent.ts`);
- la gobernanza de contenido (`src/domain/governance.ts`);
- los niveles de riesgo (`src/domain/catalog.ts`).

### Cuatro compromisos

1. **Honestidad epistémica.** Cada práctica dice de dónde viene y cuánto respaldo tiene. Ante la duda, se declara el nivel inferior (`GUIA-DE-ESTILO.md`).
2. **Seguridad antes que alcance.** Lo que exige decisión clínica no se publica (estado `borrador`).
3. **Control del usuario.** Nada se comparte de forma automática. El diario nunca sale de tu cuenta sin que lo elijas.
4. **Motivación sin culpa.** Nada se pierde y no hay rachas que se rompan.

---

## 2. Usuarios

| Perfil | Qué busca | Cómo lo atendemos |
|---|---|---|
| **Persona en terapia** | Practicar entre sesiones lo que trabaja con su terapeuta y llevar material a la sesión | Catálogo por enfoque, diario estructurado, informe para el terapeuta, preguntas para la sesión |
| **Persona que aprende por su cuenta** | Herramientas para el estrés, el ánimo, las relaciones o el sentido, sin un cuadro que requiera atención clínica | Mapa por necesidad, programas, primer uso guiado, «Tu día» |
| **Persona en un mal momento** | Algo que la ayude ahora | Antídotos (emoción → medir → practicar → volver a medir), herramientas rápidas, botón «Ayuda» |
| **Adulto que acompaña a chicos** | Actividades por edad, cuentos, guías | Familia y modo chico, 5 franjas de 0 a 17 años |
| **Profesional** (futuro) | Ver lo que su paciente decide compartir | Espacio profesional opcional (P3); hoy, sólo el informe que genera el paciente |

**Para quién no es** (ver [seguridad-clinica-y-privacidad.md](seguridad-clinica-y-privacidad.md) §3): crisis aguda, ideación suicida activa, trauma que requiere procesamiento, TOC que requiere exposición con prevención de respuesta, trastornos de la conducta alimentaria. En esos casos la app orienta a la ayuda humana.

---

## 3. Las 16 necesidades

La app se organiza por **lo que la persona necesita**, en lenguaje cotidiano. Ésta es la taxonomía de referencia. La cobertura real de cada necesidad está en [catalogo-habilidades.md](catalogo-habilidades.md).

| # | Necesidad | Pregunta del usuario | Módulos actuales (`MODULES`) |
|---|---|---|---|
| 1 | Regular emociones intensas | «Siento demasiado, ¿qué hago ahora?» | `afrontamiento`, `emociones` |
| 2 | Pensamientos y sesgos | «No puedo dejar de pensar en esto» / «¿y si me equivoco al interpretarlo?» | `pensamientos` |
| 3 | Ansiedad y estrés | «Estoy acelerado/a, preocupado/a, tenso/a» | `cuerpo`, `pensamientos`, `trabajo` |
| 4 | Autocompasión | «Me trato muy mal» | `autocompasion` |
| 5 | Comunicación y relaciones | «No sé cómo decirlo» | `relaciones`, `pareja` |
| 6 | Límites | «Me cuesta decir que no» | `relaciones`, `trabajo` |
| 7 | Resolución de problemas | «Tengo un problema y no sé por dónde empezar» | `problemas` |
| 8 | Hábitos y objetivos | «Quiero empezar y no me sale» | `habitos` |
| 9 | Atención plena | «Quiero estar más presente» | `cuerpo` |
| 10 | Valores y sentido | «¿Qué me importa? ¿Para qué?» | `valores` |
| 11 | Patrones personales | «Siempre me pasa lo mismo» | `autoconocimiento` |
| 12 | Tolerar la incertidumbre y la frustración | «No soporto no saber» / «Me desespera que no salga» | `afrontamiento`, `pensamientos` (parcial) |
| 13 | Cambios, pérdidas y transiciones | «Perdí a alguien» / «Mi vida cambió» | `duelo`, `etapas` |
| 14 | Autoestima y autoeficacia | «No me siento capaz» | `autocompasion`, `bienestar`, `habitos` (parcial) |
| 15 | Autocuidado | «Me estoy descuidando» | `sueno`, `habitos`, `trabajo`, `salud` |
| 16 | Regulación interpersonal y reparación | «Discutimos y no sé cómo volver» | `pareja`, `relaciones` |

Los 18 módulos actuales del Gimnasio ya son transversales («organizan el catálogo por necesidad psicológica, no por teoría»: comentario en `catalog.ts`). Las 16 necesidades son la capa de navegación orientada al usuario: el «Mapa de habilidades» (`/habilidades`, en curso en «Ahora (este PR)», ver [roadmap.md](roadmap.md)).

---

## 4. Por necesidades, no por escuelas

**Decisión:** la persona entra por su necesidad. El enfoque terapéutico aparece como un dato de la ficha («de dónde viene esta técnica»), nunca como la puerta de entrada.

Por qué:

- Nadie piensa «necesito ACT». Piensa «no puedo dejar de pensar en esto».
- Una misma necesidad tiene técnicas de varias escuelas. Para la rumiación, por ejemplo: defusión (ACT), aplazar la preocupación (metacognitiva), comprobar los hechos (DBT/TCC) y buscar excepciones (centrada en soluciones). Mostrarlas juntas permite elegir lo que encaja.
- El usuario en terapia puede filtrar por enfoque (en el Gimnasio ya existe el filtro por `Approach`) para practicar lo que trabaja con su terapeuta.

---

## 5. Cómo se integran las orientaciones

### 5.1 Cuatro tipos de respaldo

Además del nivel de evidencia de cada práctica (`robusta`, `moderada`, `preliminar`, `contemplativa`, en `src/domain/types.ts`), la visión distingue **qué tipo de respaldo** tiene un enfoque **tal como lo ofrecemos** (breve y autoguiado):

| Tipo | Significado | Cómo se comunica |
|---|---|---|
| **Evidencia empírica** | Hay ensayos o metaanálisis sobre la técnica o el componente. Puede ser moderada o con matices | «Hay estudios que la respaldan». Nivel y referencias visibles |
| **Fundamento teórico** | Tiene un modelo clínico coherente y uso profesional, pero la evidencia de la técnica suelta, autoguiada, es escasa | «Se basa en el modelo de…; hay pocos estudios de su uso por cuenta propia» |
| **Práctica complementaria** | Útil como apoyo (relajación, tradición contemplativa), sin pretensión terapéutica propia | «Puede ayudarte a…; no reemplaza un tratamiento» |
| **Exploración personal** | Reflexión sobre uno mismo, sin pretensión de eficacia clínica. **Nunca diagnóstico** | «Es una invitación a reflexionar, no un diagnóstico» |

**Regla:** el tipo y el nivel se refieren al formato de la app, no a la terapia completa. Por ejemplo, la terapia de esquemas tiene ensayos como tratamiento completo, pero un ejercicio suelto en la app es exploración (`APPROACH_DESCRIPTION.esquemas`: «Aquí, como exploración»).

### 5.2 Clasificación propuesta por orientación

> Clasificación orientativa del equipo, a partir de los niveles ya asignados en el código (`evidenceLevel` de cada práctica) y de las descripciones de `APPROACH_DESCRIPTION`. **Requiere revisión del/de la responsable clínico/a** antes de mostrarse en la interfaz. No se agregan referencias nuevas aquí: las referencias están en cada práctica del repositorio.

| Orientación | Clave en `Approach` | Tipo de respaldo en la app | Ejemplos reales | Nota |
|---|---|---|---|---|
| TCC | `tcc` | Evidencia empírica | `resolucion-problemas`, `habito-minimo` (robusta), `control-estimulos-noche` (robusta) | Núcleo del catálogo |
| DBT | `dbt` | Evidencia empírica (habilidades sueltas: mayormente `preliminar`) | `tipp` (moderada), `dear-man` (moderada), `mente-sabia` | La terapia completa incluye componentes que la app no ofrece (terapia individual, coaching telefónico) |
| ACT | `act` | Evidencia empírica | `brujula-valores`, `hacer-espacio`, `pajaros-en-el-cielo` (moderada) | |
| Compasión (CFT) | `cft` | Evidencia empírica moderada | `pausa-autocompasion`, `ritmo-calmante` (moderada) | |
| Activación conductual | dentro de `tcc` | Evidencia empírica | `activacion-conductual`, `monitoreo-actividad-animo`, `de-trap-a-trac` | Programa de 6 semanas |
| Mindfulness (incluye MBCT) | `mindfulness` | Evidencia empírica moderada; prácticas sueltas, `preliminar` a `moderada` | `espacio-tres-minutos`, `escaneo-corporal` | |
| Relajación y respiración (incluye TIPP de DBT) | `relajacion` | Práctica complementaria con evidencia moderada | `respiracion-resonante`, `relajacion-progresiva` | |
| Contemplativa | `contemplativa` | Práctica complementaria | `amor-altruista` (robusta), `tonglen` (riesgo 2), `conciencia-pura` (riesgo 2) | El marco de «antídotos» (Ricard) se presenta como premisa contemplativa (`ARQUITECTURA.md` §4) |
| Terapia de esquemas | `esquemas` | Exploración personal | `adulto-sano` (riesgo 2), diario `necesidades` | |
| Humanista (Rogers, Gendlin) | `humanista` | Fundamento teórico | `escucharme-sin-juzgar`, `yo-real-yo-ideal` | |
| Gestalt | `gestalt` | Fundamento teórico / exploración | `darse-cuenta`, `silla-vacia` (riesgo 2) | |
| Psicodinámica | `psicodinamica` | Exploración personal | `linea-de-vida`, diario `mis-roles` | «Nunca como diagnóstico» |
| Junguiana | `psicodinamica` («Psicodinámica · Jung») | Exploración personal | `persona-y-sombra` (contemplativa) | No tiene clave propia; comparte con psicodinámica |
| Logoterapia | `logoterapia` | Fundamento teórico; evidencia preliminar | `que-me-pide-la-vida`, `derreflexion`, `intencion-paradojica` (riesgo 2) | |
| Psicología positiva | `positiva` | Evidencia empírica con matices | `mejor-yo-posible` (robusta), `tres-cosas-buenas` (moderada) | Se incluyen resultados que matizan (Mongrain y Anselmo-Matthews, 2012, citado en `ARQUITECTURA.md` §4) |
| Resolución de problemas | dentro de `tcc` | Evidencia empírica | `resolucion-problemas`, `decidir-entre-opciones` | |
| Interpersonal (TIP) | `interpersonal` | Evidencia empírica como terapia; en la app, `preliminar` | `inventario-interpersonal` | **TIP** aquí es la terapia interpersonal. No confundir con **TIPP** (DBT, `tipp`) |
| Mentalización | `mentalizacion` | Fundamento teórico; en la app, `preliminar` | `pausar-y-rebobinar` | |
| Centrada en soluciones | `soluciones` | Evidencia moderada a preliminar | `pregunta-milagro`, `escala-un-punto-mas`, `meta-bien-formada` (moderada) | |
| Narrativa | `narrativa` | Fundamento teórico | `externalizar-el-problema`, `historia-alternativa` | |
| Entrevista motivacional | `motivacional` | Evidencia empírica como intervención con profesional; en la app, `preliminar` | `balance-del-cambio`, `regla-importancia-confianza` | Pensada para conversación con otra persona; la versión autoguiada es una adaptación |
| Metacognitiva | `metacognitiva` | Evidencia empírica moderada | `aplazar-preocupacion`, `entrenamiento-atencional` (moderada) | |
| Focalizada en la emoción (EFT) | `focalizada-emocion` | Fundamento teórico; en la app, `preliminar` | `emocion-primaria-secundaria`, `transformar-emocion` | |
| Método Gottman | `gottman` | Fundamento observacional; en la app, `preliminar` | `mapas-de-amor`, `reparar-tras-discusion` | Con aviso de violencia (`CONTENIDO-CHANGELOG.md`) |
| Escritura terapéutica | `escritura` | Evidencia empírica con matices | diario `escritura-expresiva` (riesgo 2) | |

### 5.3 Dónde chocan los supuestos de dos enfoques

Integrar no es mezclar. Hay pares de enfoques cuyos supuestos se contradicen. La app no los combina dentro de una misma práctica y lo explica:

| Choque | Supuesto A | Supuesto B | Cómo lo resolvemos |
|---|---|---|---|
| **TCC vs ACT / metacognitiva** | Revisar el contenido del pensamiento y buscar una alternativa más ajustada (registro de pensamientos) | No discutir el contenido: cambiar la relación con el pensamiento (defusión) o dejar de analizarlo (metacognitiva) | Se presentan como **dos caminos** para la misma necesidad. Si la reestructuración se vuelve rumiación, la ficha sugiere la defusión. El análisis en exceso es un riesgo declarado (matriz R03) |
| **Psicología positiva vs ACT** | Cultivar emociones positivas | No perseguir sentirse bien; hacer lugar al malestar | Las prácticas positivas no prometen resultados («sin promesas», `GUIA-DE-ESTILO.md`). Se cuenta la práctica, no el resultado |
| **Centrada en soluciones vs psicodinámica, junguiana y esquemas** | No hace falta entender el origen del problema; mirar al futuro y a las excepciones | Entender patrones y su historia | Viven en necesidades distintas (problemas frente a patrones personales). La exploración del pasado lleva riesgo 2 cuando puede activar recuerdos dolorosos |
| **Relajación vs exposición y aceptación** | Bajar la activación | La activación no es peligrosa; buscar alivio inmediato puede mantener el miedo (conducta de seguridad) | En pánico, el antídoto prioriza psicoeducación y «dejar pasar la falsa alarma». La exposición está en borrador |
| **Intención paradójica (logoterapia) vs ERP (TCC)** | Exagerar con humor el temor | Exposición sistemática con prevención de respuesta, con terapeuta | `intencion-paradojica` es riesgo 2: no en crisis, ni con pensamientos obsesivos, pánico intenso o miedo a hacer daño sin terapeuta. Alternativa: `derreflexion` |
| **Gestalt (silla vacía) y escritura expresiva vs estabilización DBT** | Activar y expresar la emoción para cerrarla | Primero, regular y tolerar | Las prácticas que activan son riesgo 2, piden prerrequisitos (`silla-vacia` exige `asuntos-pendientes` y `pausa-autocompasion`) y ofrecen una alternativa más suave |
| **Narrativa vs esquemas** | El problema es externo a la persona («tú no eres el problema») | Hay patrones aprendidos dentro de uno | Dos lenguajes para momentos distintos. No se ofrecen en la misma secuencia |
| **Entrevista motivacional vs programas directivos** | Respetar la ambivalencia y no empujar | Metas y tareas semanales | Los programas se pueden pausar o abandonar sin culpa. Para quien duda, se ofrece primero el `balance-del-cambio` |
| **Contemplativa (antídotos) vs evidencia psicológica** | Un estado cultivado es incompatible con el aflictivo (premisa) | Mecanismos medibles (etiquetado afectivo, *undoing*) | Se declara como premisa contemplativa y no se afirma más que lo que respalda la evidencia (`ARQUITECTURA.md` §4) |

---

## 6. Principios de diseño

1. **Entrar por la necesidad, en dos toques.** Desde el inicio: «¿qué necesitas ahora?» → una práctica.
2. **Cada ejercicio cierra el ciclo:** entrar → identificar la necesidad → practicar → llevar una acción concreta → revisar (ver [arquitectura-funcional.md](arquitectura-funcional.md) §2).
3. **El porqué, siempre visible:** fundamento, nivel de evidencia y referencias en la ficha. Sugerencias con «te lo sugerimos porque…».
4. **No todo es para todos:** riesgo, precauciones, prerrequisitos y una alternativa más suave.
5. **Seguridad sin dramatismo:** el botón «Ayuda» está en todas las pantallas. El cribado detiene el ejercicio. Nunca se promete una respuesta de emergencia.
6. **Privacidad desde el diseño:** minimización, nada compartido sin acción explícita, exportación y borrado al alcance.
7. **Motivación sin castigo:** nada se pierde y no hay comparación con otras personas.
8. **Lenguaje claro:** INFLESZ ≥ 55, frases cortas, «tú», validar antes de proponer (`GUIA-DE-ESTILO.md`).
9. **Accesible por defecto:** WCAG 2.1 AA probado, movimiento reducido, texto grande, teclado y lector de pantalla.
10. **Funciona sin conexión** para lo esencial, y sobre todo para la ayuda.
11. **Sin IA conversacional, sin comunidad, sin rastreo** en el MVP.
12. **Honestidad sobre el estado:** lo que no se revisó lo dice (`REVIEW_LABEL`).

---

## 7. Preguntas abiertas

- Elegir entre «tú» y «vos» (`GUIA-DE-ESTILO.md`) e internacionalización.
- Validar la clasificación del §5.2 con el/la responsable clínico/a.
- Definir la relación con instituciones (obras sociales, universidades), si la hubiera.
- Decidir el modelo económico (`PLAN-PREMIUM.md`) sin comprometer los principios.
