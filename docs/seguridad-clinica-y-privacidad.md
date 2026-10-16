# Seguridad clínica y privacidad

- **Fecha:** 2026-10-15
- **Aviso:** este documento **no es asesoramiento legal**. Resume el marco que el equipo identificó para diseñar el producto. **Antes de abrir la app a usuarios reales es imprescindible una revisión legal profesional**, en particular sobre datos de salud, menores y, si llega a existir, el acceso de profesionales.
- **Referencias normativas:** se citan por número y organismo, con enlace al buscador oficial. Este entorno no tiene acceso web, así que **los enlaces y los artículos citados están «a verificar»** (fecha de consulta declarada: 2026-10-15).
- Relacionados: [auditoria-proyecto.md](auditoria-proyecto.md), [arquitectura-tecnica.md](arquitectura-tecnica.md), [CONTENIDO-CHANGELOG.md](CONTENIDO-CHANGELOG.md).

---

## 1. Niveles de riesgo del contenido

Clasificación interna de la app, no una escala clínica validada (cabecera de `src/domain/catalog.ts`):

| Nivel | Criterio | Ejemplos reales | Cómo se implementa hoy |
|---|---|---|---|
| **1 · Uso autónomo** | Psicoeducación, gratitud, valores, hábitos, atención sencilla. Activación emocional baja | `pausa-autocompasion`, `brujula-valores`, `habito-minimo` | Valor por defecto: `practiceRisk(id)` devuelve 1 si no hay entrada |
| **2 · Con precauciones** | Puede aumentar la activación: recuerdos dolorosos, vergüenza, conflictos vinculares, exposición, prácticas sin anclaje | Prácticas: `tonglen`, `conciencia-pura`, `observador`, `perdon-reach`, `aceptacion-radical`, `hacer-espacio`, `adulto-sano`, `intencion-paradojica`, `silla-vacia`, `asuntos-pendientes`, `ventana-de-sueno` (paquete). Diario: `escritura-expresiva`, `escalera-exposicion`, `perdon`, `analisis-cadena`, `patron-repetido` | `PRACTICE_RISK` (con **alternativa obligatoria**), `PracticeMeta.risk` en paquetes, `JOURNAL_RISK`. La ficha exige leer las precauciones antes de empezar (e2e «nivel de riesgo 2…»). Distintivo «Con precauciones» en el catálogo |
| **3 · Atención clínica o emergencia** | Lo que no debe automatizarse | Ver §3 | **No existe como nivel en el tipo** (`RiskLevel = 1 \| 2`). Se implementa de tres formas: (a) el contenido queda en **borrador no publicado** (`isPublished` lo oculta); (b) el **cribado detiene el ejercicio** y muestra ayuda humana; (c) el botón «Ayuda» está en todas las pantallas |

### 1.1 Mecanismos de seguridad en el código

- **Cribado en Antídotos** (`AntidoteModule.tsx`): casilla «Ahora mismo tengo pensamientos de hacerme daño o de no querer vivir». Si se marca, la fase pasa a `safety` y se muestra `SafetyPanel` («Lo que sientes ahora merece la atención de una persona, no de un ejercicio»). **El indicador no se persiste** (`ARQUITECTURA.md` §2). Test: e2e «el cribado de riesgo detiene el ejercicio y muestra ayuda».
- **Estabilización desde intensidad alta:** con `intensityPre ≥ 8` (`STABILIZATION_THRESHOLD`, `antidotes.ts`) se anteponen 90 s de respiración lenta y se registra `stabilizationUsed`. Con ≥ 9 se sugiere TIPP. Test: e2e «kit de crisis: a intensidad 9…».
- **Prerrequisitos** (`levels.ts`): las prácticas avanzadas recomiendan antes una base (`silla-vacia` pide `asuntos-pendientes` y `pausa-autocompasion`).
- **PHQ-9 (borrador):** el ítem 9 muestra la ayuda antes que la puntuación (e2e).
- **Chicos:** una emoción difícil al máximo invita a buscar al adulto y queda en su panel (e2e `kids.spec.ts`); recursos 102 y 911, y líneas de salud mental para adolescentes (`src/config/safety.ts`).
- **Borradores actuales** (`REVIEW_OVERRIDES`): plan de seguridad, escalera de exposición (diario y artículo), PHQ-9, ISI y `escalera-valiente` (chicos).

---

## 2. Revisión clínica (gobernanza)

| Estado | Visible para usuarios reales | Hoy |
|---|---|---|
| `borrador` | No (sólo en demo o con `NEXT_PUBLIC_SHOW_DRAFTS`) | 6 elementos |
| `pendiente` | Sí, con la etiqueta «Revisión clínica pendiente» | **Todo el resto** |
| `revisado` | Sí | **Ninguno** |

- Cola de revisión: `reviewQueue.ts` y panel `/revision`. Las decisiones se guardan en `localStorage` hasta exportarlas.
- **Faltantes:** cuentos fuera de la cola (`ContentKind` no incluye «cuento») y píldoras sin filtro propio en el panel. Ambos se corrigen en «Ahora (este PR)».
- **Requisito para usuarios reales:** designar un/a responsable clínico/a con matrícula y decidir sobre los 6 borradores ([roadmap.md](roadmap.md), P0).

---

## 3. Qué NO se ofrece como autoayuda

| Área | Por qué | Qué hace la app |
|---|---|---|
| **Exposición intensa** (inundación, exposición interoceptiva intensa) | Puede sensibilizar y, sin guía, reforzar la evitación | La escalera de exposición (gradual) está en **borrador** hasta tener salvaguardas y criterios de derivación |
| **Procesamiento de trauma** (EMDR, exposición prolongada, reprocesamiento narrativo) | Requiere terapeuta formado/a, estabilización previa y seguimiento | No existe en la app. Las prácticas que pueden activar recuerdos son riesgo 2, con alternativa anclada |
| **TOC con exposición y prevención de respuesta (ERP)** | La autoexposición mal hecha puede convertirse en ritual o reaseguro | No se ofrece. `intencion-paradojica` excluye de forma explícita los pensamientos obsesivos y el miedo a hacer daño |
| **Trastornos de la conducta alimentaria** | Riesgo médico; el contenido sobre peso o comida puede dañar | No hay contenido de dieta, peso ni conteo. **A verificar:** revisar que ningún contenido de hábitos se lea como restricción |
| **Ideación suicida sin protocolo** | Exige respuesta humana | Cribado que detiene, recursos de crisis, plan de seguridad sólo tras aprobación clínica, PHQ-9 en borrador |
| **Psicosis, manía, consumo problemático, violencia** | Fuera del alcance de una app de habilidades | **A definir:** criterios de derivación por escrito. Pareja (Gottman) lleva un aviso de violencia y la Línea 144 está en los recursos |
| **Diagnóstico** | La app no diagnostica | Los instrumentos son de cribado, con interpretación prudente. La neurodiversidad se trata como psicoeducación «sin diagnosticar» (`CONTENIDO-CHANGELOG.md`) |

---

## 4. Consentimiento

- **Adultos:** `CONSENT_VERSION = '2026-10-b'`, edad mínima de 18 (`src/lib/consent.ts`, `MIN_AGE` en `safety.ts`). Si cambia la versión, se vuelve a pedir (`ConsentGate`). Se guarda `{version, acceptedAt}` en `users/{uid}`.
- **Perfiles de chicos:** `KID_CONSENT_VERSION = '2026-10-k1'`, con `acceptedAt == request.time` validado por las reglas.
- **Faltante:** historial de consentimientos (hoy se sobrescribe; ver [arquitectura-tecnica.md](arquitectura-tecnica.md) §2.3). Consentimiento en capas, con un resumen corto y el detalle desplegable (R40). Revisión legal del texto.

---

## 5. Privacidad desde el diseño y minimización

| Principio | Implementación actual |
|---|---|
| Recoger sólo lo necesario | Perfil mínimo (`displayName`, `role`, `timezone`, `consent`, `createdAt`). Los chicos no tienen cuenta ni correo: apodo, franja y avatar |
| Texto libre acotado | Límites de 280 y 8000 caracteres; `trigger` y `journal.values` excluidos de los índices |
| No guardar lo que obliga a responder | El indicador de riesgo no se persiste |
| Sin terceros | Sin analítica de terceros ni píxeles; `connect-src` limitado a la propia app y a Firebase (test e2e «la CSP bloquea enviar datos a un dominio no autorizado») |
| Procesar en el dispositivo | El informe para el terapeuta se genera en el dispositivo; el diario se incluye sólo entrada por entrada |
| Aislamiento por usuario | Reglas por `users/{uid}`; 36 tests de reglas |
| Caché local al salir | `terminate` + `clearIndexedDbPersistence` al cerrar sesión. En curso: borrar también el estado local personal (`localData.ts`) |

---

## 6. Permisos y roles

| Rol | Cómo se obtiene | Qué puede |
|---|---|---|
| `patient` | Lo crea el cliente al registrarse | Todo sobre su árbol `users/{uid}` |
| `clinician` | Sólo por backend (no existe todavía) | Proponer `careLinks`; leer con un vínculo `active` |
| Adulto responsable | Es el `patient` titular | Crear y borrar perfiles de chicos y leer sus actividades |
| Revisor/a clínico/a | Lista `NEXT_PUBLIC_REVIEWER_EMAILS` (en el bundle) | Ver `/revision`. **Sólo control de cliente**; el contenido ya es público |

El Espacio profesional (P3) exige permisos por categoría, revocables y con registro de accesos (ver [arquitectura-funcional.md](arquitectura-funcional.md) §1.8). **El diario nunca se comparte de forma automática.**

---

## 7. Almacenamiento y comunicaciones

- **Firestore:** cifrado en reposo y en tránsito provisto por Google Cloud (**a verificar** en la documentación vigente). **Región: a verificar** (README: «en la región que exija el marco legal aplicable»). Diario en texto plano: el cifrado a nivel de campo es una decisión pendiente.
- **CSP** (`next.config.mjs`): `connect-src` limitado, `frame-ancestors 'none'`, `object-src 'none'`, `base-uri 'self'`, HSTS con preload, `Permissions-Policy`. Límite conocido: `'unsafe-inline'` en `script-src` por el prerenderizado estático.
- **App Check (reCAPTCHA v3):** opcional. Si no carga, la app sigue sin App Check (`client.ts`). **A verificar** qué pasa si se aplica en la consola.
- **Navegador:** voz por Web Speech API, sin servidores. El modo chico guarda un hash con sal del código (barrera de uso, no de seguridad; Auditoría §9.1-5).
- **Sin envío a terceros** de contenido privado. La única integración externa en la CI es Crossref (DOI públicos) y el workflow de ilustraciones (sin datos de usuarios).

---

## 8. Exportación y borrado

- **Exportación** (Ajustes): JSON completo de `USER_COLLECTIONS` y del perfil, con `app`, `formatVersion` y `timezone` (e2e «la exportación descarga un JSON»).
- **Borrado** (Ajustes): borra las subcolecciones y el perfil, y después llama a `deleteUser`.
- **Defectos conocidos:**
  1. El borrado no es atómico: con `auth/requires-recent-login`, la cuenta de acceso sobrevive (Auditoría §8).
  2. No se borran los `careLinks`.
  3. El estado local no entraba en el borrado (en curso).
  4. La exportación incluye las notas de adolescentes en la cuenta del adulto. Por eso se corrige el texto de privacidad adolescente (§11).

---

## 9. Registro de cambios

- **Contenido:** [CONTENIDO-CHANGELOG.md](CONTENIDO-CHANGELOG.md). Cada cambio clínicamente relevante sube `version` en `REVIEW_OVERRIDES`; cada sesión guarda `contentVersion`.
- **Reglas:** el changelog avisa cuando hay que volver a publicar `firestore.rules`. El despliegue es manual: **riesgo alto** (Auditoría §9.1-1).
- **Código:** historial de git y PR con CI.

---

## 10. Incidentes y conservación

**Plan de incidentes (propuesta; no existe hoy):**

1. **Detección:** errores de reglas en `SyncNotice`; reportes de usuarios (falta un canal de soporte); registro de errores sin datos personales (P2).
2. **Clasificación:** de contenido (un guion inadecuado), de seguridad clínica (un flujo de crisis que falla) o de datos (acceso indebido o filtración).
3. **Contención:**
   - de contenido: pasar el elemento a `borrador` (se oculta con un despliegue);
   - de datos: revocar credenciales, endurecer las reglas y publicarlas.
4. **Notificación:** a los usuarios afectados y a la autoridad cuando corresponda (AAIP en Argentina; plazos **a verificar** con asesoría legal).
5. **Registro:** una entrada en el changelog o en un registro de incidentes interno, y el análisis posterior.

**Conservación (propuesta):**

- Los datos se conservan mientras la cuenta exista. El usuario los borra cuando quiere.
- Cuentas inactivas: definir un plazo y un aviso previo (**a decidir** con asesoría legal).
- Las copias de seguridad de Firestore (cuando existan) deben tener rotación y borrarse en un plazo definido.

---

## 11. Menores

- **Modelo actual:** el adulto titular crea hasta 6 perfiles (`kids.ts`), con su consentimiento (`KID_CONSENT_VERSION`). Los chicos no tienen cuenta. Las actividades se guardan en `users/{uidAdulto}/kidActivities`. El modo chico se cierra con un código de 4 cifras. La franja de 0 a 3 años no tiene modo chico: son actividades «juntos».
- **Privacidad adolescente (13–17):** el texto anterior («La app no le muestra a tu adulto lo que escribes aquí») era **engañoso**: el adulto puede leer las notas por reglas y las recibe en la exportación (Auditoría §8). **Corrección en curso** (`Gratitude.tsx`): «Tu adulto no ve en la app lo que escribes aquí, pero queda guardado en su cuenta.» La alternativa (excluir esas notas de la exportación y del panel) requiere una decisión clínica y legal.
- **Ley 26.061** de Protección Integral de los Derechos de Niñas, Niños y Adolescentes: interés superior, derecho a ser oído y a la intimidad (**artículos a verificar**). El diseño debe equilibrar la supervisión adulta con la intimidad adolescente. Esto requiere revisión legal y clínica infantojuvenil.
- **Código Civil y Comercial**, art. 26: capacidad progresiva de adolescentes en decisiones sobre su salud (**a verificar** su aplicación a una app de habilidades).
- **Debilidades conocidas:** el código del modo chico se puede forzar recargando la página (Auditoría §9.1-5; P3).

---

## 12. Marco legal argentino

| Norma | Relevancia para el producto | Referencia |
|---|---|---|
| **Ley 25.326** de Protección de los Datos Personales (2000) | Los datos de salud son **datos sensibles** (definición en art. 2); nadie puede ser obligado a proporcionarlos (art. 7); requisitos de consentimiento, seguridad (art. 9), confidencialidad (art. 10), derechos de acceso, rectificación y supresión (arts. 14–16) e inscripción de bases de datos (art. 21). **Artículos a verificar** | InfoLEG / argentina.gob.ar, «Ley 25.326» — https://www.argentina.gob.ar/normativa (búsqueda por número; consulta 2026-10-15, **a verificar**) |
| **Decreto 1558/2001** (reglamentario de la Ley 25.326) | Reglamentación | Ídem (**a verificar**) |
| **Resoluciones y disposiciones de la AAIP** (Agencia de Acceso a la Información Pública, autoridad de control) | Medidas de seguridad, registro de bases de datos, transferencias internacionales. Hay que identificar las vigentes; por ejemplo, la Res. AAIP 47/2018 sobre medidas de seguridad recomendadas (**número y vigencia a verificar**) | https://www.argentina.gob.ar/aaip (consulta 2026-10-15, **a verificar**) |
| **Ley 27.699** (aprobación del Convenio 108+ del Consejo de Europa) | Estándar actualizado de protección de datos (**a verificar** su estado y alcance) | argentina.gob.ar/normativa (**a verificar**) |
| **Ley 26.657** de Salud Mental (2010) | Derechos de las personas usuarias de servicios de salud mental; el enfoque interdisciplinario; prohibición de diagnósticos sobre ciertas bases. Ayuda a orientar el lenguaje (no diagnosticar, no estigmatizar) y la derivación | argentina.gob.ar/normativa (**a verificar**) |
| **Ley 26.529** de Derechos del Paciente, Historia Clínica y Consentimiento Informado (2009) | Si en el futuro un profesional usa la app en un tratamiento, hay que definir si lo compartido forma parte de la historia clínica y con qué obligaciones (**a verificar** con asesoría legal) | argentina.gob.ar/normativa (**a verificar**) |
| **Ley 23.277** de Ejercicio Profesional de la Psicología (1985) | Delimita qué actos son propios del/de la psicólogo/a matriculado/a. Refuerza que la app es educativa y de práctica, que no hace psicoterapia ni diagnóstico, y que el Espacio profesional sólo lo usan profesionales matriculados (**a verificar**; hay normas provinciales de ejercicio profesional y colegiación) | argentina.gob.ar/normativa (**a verificar**) |
| **Ley 26.061** | Ver §11 | argentina.gob.ar/normativa (**a verificar**) |
| **ANMAT** (software como producto médico) | Si la app se presentara con fines diagnósticos o terapéuticos, habría que evaluar su encuadre como producto médico (`ARQUITECTURA.md`, pendientes) | https://www.argentina.gob.ar/anmat (**a verificar**) |

**Acciones legales pendientes:**

- Revisión profesional de la política de privacidad (`/privacidad`, hoy en borrador) y de los términos.
- Inscripción de la base ante la AAIP.
- Región de Firestore y acuerdo de tratamiento con Google (DPA).
- Licencia del ISI (Mapi Research Trust).
- Texto de privacidad adolescente.

---

## 13. Otros países

| Marco | Cuándo aplica | Implicancias | Referencia |
|---|---|---|---|
| **RGPD** (Reglamento (UE) 2016/679) | Si se ofrece a personas en la UE | Los datos de salud son categoría especial (art. 9): consentimiento explícito, evaluación de impacto (EIPD), representante en la UE y transferencias internacionales | https://eur-lex.europa.eu/eli/reg/2016/679/oj (consulta 2026-10-15) |
| **HIPAA** (EE. UU.) | Sólo si el producto actúa como *covered entity* o *business associate* (p. ej. integrado con un prestador de EE. UU.). Una app de consumo directo, en general, no está alcanzada por HIPAA (**a verificar**), aunque pueden aplicar normas de la FTC sobre datos de salud | Si aplicara: BAA con proveedores y salvaguardas administrativas | https://www.hhs.gov/hipaa (consulta 2026-10-15, **a verificar**) |
| Otros países de América Latina | Cada país tiene su ley de datos | Antes de abrir un país: recursos de crisis verificados y revisión legal local | — |

---

## 14. Crisis

- **Recursos sólo de Argentina**, verificados el 2026-10-14 (`CRISIS_RESOURCES_CHECKED_AT`): 911, Línea Nacional de Salud Mental 0800-999-0091, Centro de Asistencia al Suicida 135, Línea 144; para chicos, 102 (provincial) y 911. Un test exige revisarlos cada año.
- **Regla:** sólo se muestran recursos de países **confirmados**. Si la persona está en otro país, se dice: «estos números son de Argentina; busca los servicios de emergencia de tu país». **No se inventan números.**
- **No se prometen emergencias:** la app no monitorea ni responde en tiempo real. Lo dice en `SafetyPanel` y en el consentimiento.
- Plan de seguridad: sólo tras aprobación clínica. Sin conexión: precarga en curso.

---

## 15. IA y datos

- No hay IA en el producto.
- **Nunca se entrenan modelos con los datos privados de los usuarios.** No se comparten con terceros para ese fin.
- Si se evaluara IA (P3), sólo sobre contenido público y sin acceso a datos personales (ver [arquitectura-funcional.md](arquitectura-funcional.md) §4, 10 puntos).
- Las ilustraciones de cuentos se generan fuera del entorno de usuarios (workflow `ilustraciones.yml`), sin datos personales (ver [decisiones-tecnicas.md](decisiones-tecnicas.md) ADR-012).

---

## 16. Hallazgos de la auditoría como riesgos

Fuente: [auditoria-proyecto.md](auditoria-proyecto.md) §8 y §9. Estado al 2026-10-15.

| # | Riesgo | Severidad | Estado |
|---|---|---|---|
| R-01 | Reglas de Firestore sin publicar (tipos de diario `pregunta-del-dia` y `sentido`, franjas 0-3 y 13-17); despliegue manual | Alta | **Abierto · a verificar** en la consola de Firebase |
| R-02 | `users/{uid}` update sin lista blanca de claves | Media | **Resuelto en este PR** («Ahora (este PR)»: `affectedKeys().hasOnly(['displayName','timezone','consent'])` y su test) |
| R-03 | Validaciones laxas (`practiceId`, `antidoteId`, `perma`) | Media | Abierto (P2) |
| R-04 | Estado local sin dueño ni borrado (desafíos, píldoras, hitos, retomar) | Media | **Resuelto en este PR** (`localData.ts`, `localData.test.ts`); sincronización en P1 |
| R-05 | Código del modo chico débil (4 dígitos, bloqueo en memoria, `Math.random`) | Baja | Abierto (P3) |
| R-06 | Panel de revisión sólo protegido en el cliente; correos de revisores en el bundle | Baja | Abierto |
| R-07 | CSP con `'unsafe-inline'` | Baja | Aceptado (límite conocido del prerenderizado) |
| R-08 | Correo no verificado con acceso completo | Baja | Abierto (a decidir) |
| R-09 | Diario en texto plano; registro AAIP, región e ISI pendientes | Alta (legal) | **Abierto · a verificar** |
| R-10 | Referencias sin verificar con red (137 con `ERROR_RED`); la CI no falla con `ERROR_RED` | Baja | Abierto (P0: volver a verificar) |
| R-11 | Workflow de ilustraciones con servicio externo sin clave y `contents: write` | Baja | Mitigado (rama aparte, revisión manual) |
| R-12 | Texto de privacidad adolescente engañoso | Alta (confianza y legal) | **Resuelto en este PR** (`Gratitude.tsx`, e2e `kids.spec.ts`) |
| R-13 | Borrado de cuenta no atómico; `careLinks` sin borrar | Media | Abierto (P1) |
| R-14 | Plan de seguridad y `/chicos` sin precarga sin conexión | Media (seguridad) | **Resuelto en este PR** |
| R-15 | Cuentos fuera de la gobernanza; píldoras sin filtro en el panel | Media | **Resuelto en este PR** |
| R-16 | Ningún contenido `revisado`; 6 borradores sin decisión | Alta (clínica) | Abierto (P0) |
| R-17 | Conteos de la portada que incluyen borradores | Baja | **Resuelto en este PR** |
| R-18 | Buscador sin píldoras, desafíos, cuentos ni guías | Baja | **Resuelto en este PR** |
| R-19 | E2E sólo en demo (sin el camino real con Firebase) | Media | Abierto (P3) |
| R-20 | Recursos de crisis sólo de Argentina | Media | Aceptado mientras el alcance sea Argentina |
