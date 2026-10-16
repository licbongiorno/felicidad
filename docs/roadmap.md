# Roadmap

- **Fecha:** 2026-10-15
- **Prioridades:**
  - **P0:** imprescindible antes de tener usuarios reales.
  - **P1:** corto plazo; hace útil y confiable el producto.
  - **P2:** mediano plazo; mejora y amplía.
  - **P3:** evolución; requiere backend, decisiones de negocio o legales.
- **Escala de las columnas:** B = baja, M = media, A = alta.
- Fuentes: [auditoria-proyecto.md](auditoria-proyecto.md) §11, [matriz-competitiva.csv](matriz-competitiva.csv) (columna `prioridad`), [PLAN-PREMIUM.md](PLAN-PREMIUM.md), [seguridad-clinica-y-privacidad.md](seguridad-clinica-y-privacidad.md) §16.

---

## 1. La hipótesis de MVP frente al estado real

> El enunciado literal de la hipótesis de MVP de la Fase 12 no está en el repositorio. Se toma como la hipótesis habitual: un producto mínimo con pocas habilidades, un diario, un registro de ánimo y recorridos básicos. **A verificar** contra el texto original.

**Diagnóstico:** el producto **ya supera con creces ese MVP en contenido y funciones**:

- 108 prácticas en 18 módulos, 22 antídotos, 28 plantillas, 53 artículos, 28 programas, 4 desafíos, 6 instrumentos;
- Laboratorio, informe para el terapeuta, Familia y modo chico con 82 actividades y 35 cuentos;
- PWA sin conexión, modo oscuro, axe WCAG 2.1 AA, 493 tests.

El cuello de botella **no es construir más**. Está en tres lugares:

1. **Revisión clínica:** no hay ningún elemento `revisado` y hay 6 borradores sin decisión.
2. **Seguridad y privacidad:** reglas sin publicar, estado local sin dueño, texto adolescente engañoso, borrado no atómico, revisión legal pendiente.
3. **Evidencia de utilidad con usuarios reales:** cero hasta hoy.

Agregar contenido sin revisarlo **aumenta el riesgo** y la deuda de revisión.

### 1.1 MVP propuesto para probar con usuarios reales

**«Núcleo revisado»:** un subconjunto del contenido existente, revisado clínicamente, abierto a un piloto pequeño y con consentimiento.

| Incluye | Criterio |
|---|---|
| Mi espacio: «Tu día», primer uso, objetivos, plan semanal | Ya existe |
| Unas 24 prácticas que cubren las 16 necesidades (al menos 1 por necesidad, preferentemente de riesgo 1 y nivel I) | Revisadas: `status: 'revisado'` |
| 8 a 10 antídotos frecuentes (ansiedad, pánico, preocupación, tristeza, ira, autocrítica, agobio, bloqueo, soledad, frustración) con el cribado y la estabilización | Revisados |
| 6 a 8 plantillas de diario (registro de pensamientos, tarjeta diaria, conversación, resolución de problemas, activación, valores) | Revisadas |
| 3 a 4 programas (ansiedad, desánimo, regulación emocional, sueño) | Revisados |
| WHO-5 y GAD-7; informe para el terapeuta | Revisados |
| Centro de ayuda con recursos argentinos y, **si se aprueba**, el plan de seguridad | Aprobación clínica |
| Exportación y borrado robustos | P0 técnico |

**Fuera del piloto:** Familia y modo chico (requieren revisión infantojuvenil y legal propia), cuentos, cartas, Laboratorio (se puede sumar en una segunda ola) y todo lo `borrador`.

**Mecanismo técnico:** un modo de publicación «sólo revisado» (variable de entorno, al estilo de `NEXT_PUBLIC_SHOW_DRAFTS`) que oculte lo `pendiente`. Es P0 si se adopta este MVP.

**Piloto:** de 20 a 40 adultos en Argentina, durante 4 semanas, con consentimiento específico. Idealmente, la mitad en terapia (con su terapeuta informado/a). Sin analítica de terceros: métricas propias anónimas y con consentimiento, más entrevistas.

**Qué queremos aprender:**

1. ¿La gente encuentra la habilidad adecuada en menos de 1 minuto?
2. ¿La usa fuera de la app («Llevarlo a tu vida» + revisión)?
3. ¿La considera útil (`applications.usefulness`)?
4. ¿Vuelve en la semana 2 y en la semana 4?
5. ¿Los terapeutas encuentran útil el informe?
6. ¿Aparece algún problema de seguridad?

---

## 2. Ahora (este PR)

Lo implementa otro miembro del equipo en este mismo PR. Los criterios están en [criterios-aceptacion.md](criterios-aceptacion.md) §2.

| # | Cambio | Riesgo que cierra | Archivos (previstos o ya modificados) |
|---|---|---|---|
| A1 | Corregir el texto de privacidad adolescente | R-12 | `src/components/kids/activities/Gratitude.tsx`, `e2e/kids.spec.ts` |
| A2 | Restringir los campos de `users/{uid}` en las reglas (`hasOnly(['displayName','timezone','consent'])`) | R-02 | `firestore.rules`, `tests/rules/firestore.rules.test.ts` |
| A3 | Estado local aislado por usuario y borrado al cerrar sesión o eliminar la cuenta | R-04 | `src/lib/localData.ts`, `src/lib/localData.test.ts`, `AuthProvider.tsx`, `Settings.tsx` (**a verificar** al cerrar el PR) |
| A4 | Buscador con píldoras, desafíos, cuentos y guías | R-18 | `src/domain/search.ts`, `search.test.ts` |
| A5 | Conteos de la portada sin borradores | R-17 | `src/app/page.tsx` |
| A6 | Precarga sin conexión del plan de seguridad y de `/chicos` | R-14 | `public/sw.js` |
| A7 | Cuentos y píldoras en la cola de revisión clínica | R-15 | `governance.ts` (`ContentKind`), `reviewQueue.ts`, `ReviewPanel.tsx`, `reviewQueue.test.ts` |
| A8 | «Mapa de habilidades» por necesidad (`/habilidades`) con ficha ampliada (objetivo de aprendizaje y fecha de revisión visibles) | R29, R30 de la matriz | ruta nueva `src/app/(app)/habilidades/`, dominio de necesidades, ficha en `PracticePlayer` |

---

## 3. Clasificación de funciones

### 3.1 P0: antes de usuarios reales

| Función | Valor | Difer. | Complej. | Coste op. | Riesgo clínico | Riesgo técn. | Dependencias | Criterio de aceptación | Cómo comprobar utilidad |
|---|---|---|---|---|---|---|---|---|---|
| Publicar `firestore.rules` y verificarlas; paso de despliegue de reglas en la CI | A | B | B | B | B | A si no se hace | Cuenta de servicio de Firebase | Las reglas publicadas son idénticas al archivo; una entrada `pregunta-del-dia`, una `sentido` y un perfil 13–17 se guardan en producción | Cero errores `permission-denied` inesperados en `SyncNotice` |
| Revisión clínica del núcleo del MVP (§1.1) y decisión sobre los 6 borradores | A | A | M | A (horas profesionales) | **Reduce** | B | Responsable clínico/a matriculado/a | Cada elemento del núcleo con `status: 'revisado'`, `reviewedBy`, `reviewedAt` y una entrada en el changelog | Encuesta a terapeutas del piloto |
| Modo de publicación «sólo revisado» | A | M | B | B | Reduce | B | Revisión clínica | Con la variable activa, ninguna ruta muestra contenido `pendiente` ni `borrador`; test unitario y e2e | — |
| «Ahora (este PR)» A1–A8 | A | M | M | B | Reduce | B | — | Ver [criterios-aceptacion.md](criterios-aceptacion.md) §2 | — |
| Borrado de cuenta robusto (reautenticar antes de borrar; borrar `careLinks`) | A | B | M | B | B | M | — | Tras «Borrar cuenta», no queda perfil, ni subcolecciones, ni cuenta de Auth, ni datos locales | Prueba manual con una cuenta de prueba |
| Volver a verificar las referencias con red; la CI falla con más de un X % de `ERROR_RED` | M | M | B | B | Reduce | B | Red en la CI | Informe sin `ERROR_RED`; `EVIDENCE_LAST_CHECKED` actualizado | — |
| Revisión legal: privacidad, términos, AAIP, región, DPA, licencia del ISI, texto adolescente | A | M | M | M (honorarios) | B | B | Asesoría legal | Documento firmado por un/a profesional; `/privacidad` sin la marca de borrador | — |
| Responsable clínico/a y criterios de derivación escritos | A | A | B | M | **Reduce** | B | — | Documento de criterios aprobado; textos de derivación en la app | — |

### 3.2 P1: corto plazo

| Función | Valor | Difer. | Complej. | Coste op. | Riesgo clínico | Riesgo técn. | Dependencias | Criterio de aceptación | Cómo comprobar utilidad |
|---|---|---|---|---|---|---|---|---|---|
| Sincronizar desafíos, píldoras leídas e hitos (`progress/local`) con migración | M | B | M | B | B | M | A3, reglas + test | Un desafío iniciado en el móvil aparece en la computadora; entra en la exportación y el borrado | Desafíos completados por usuario |
| Ficha estándar completa (objetivo, indicaciones, variantes, evaluación del aprendizaje) | A | A | M | M | Reduce | B | A8, revisión clínica | Todas las prácticas del núcleo con los campos; test en `quality.test.ts` | Tiempo hasta elegir; utilidad percibida |
| Personalización editable (ocultar o apagar sugerencias; datos usados visibles) | M | A | M | B | B | B | `recommend.ts` | Cada sugerencia muestra su porqué y los datos usados; se puede ocultar | Proporción de sugerencias aceptadas |
| Ordenar sugerencias por utilidad percibida (regla visible) | M | A | B | B | B | B | `applications` | Una práctica marcada «no apropiada» dos veces deja de sugerirse; test | Utilidad media de lo sugerido |
| Nivel de confianza en «Qué te funciona» | M | M | B | B | Reduce (evita conclusiones falsas) | B | `insights.ts` | Cada efecto muestra «confianza baja, media o alta» según n | Entrevistas |
| Declaración pública de accesibilidad; axe en las rutas faltantes | M | A | B | B | B | B | — | Página publicada; axe en `/desafios`, `/biblioteca`, `/biblioteca/pildoras`, `/familia/cuentos`, `/login` | — |
| Reducir los recuentos del jardín (*debounce* o sólo en `/crecimiento`) | M | B | B | Reduce lecturas | B | B | — | Ninguna consulta de recuento tras cada escritura; test del store | Lecturas de Firestore por usuario y día |
| Preguntas frecuentes y contacto de soporte | M | B | B | M | B | B | — | Página con el contacto | Consultas recibidas |

### 3.3 P2: mediano plazo

| Función | Valor | Difer. | Complej. | Coste op. | Riesgo clínico | Riesgo técn. | Dependencias | Criterio de aceptación | Cómo comprobar utilidad |
|---|---|---|---|---|---|---|---|---|---|
| Separar el contenido en JSON por ruta y fijar un presupuesto de bundle en la CI | M | B | M | B | B | M | — | Todas las rutas ≤ umbral acordado (p. ej. 250 kB gzip); test de coincidencia entre JSON y fuente | LCP y TTI en móvil de gama media |
| Contenido nuevo: límites, incertidumbre, autoeficacia ([catalogo-habilidades.md](catalogo-habilidades.md) §2) | A | M | M | M (revisión) | M | B | Revisión clínica | ≥ 2 prácticas revisadas por necesidad | Uso y utilidad por necesidad |
| Confianza subjetiva por habilidad (R33) | M | A | M | B | B | B | Regla nueva | Registro 0–10 tras la práctica, separado del ánimo | Correlación con la utilidad percibida |
| Audio grabado con voz humana (R07) | A | M | A | A | B | M | Presupuesto y licencias | Audios en las prácticas del núcleo con transcripción | Finalización de prácticas con audio frente a síntesis |
| Notificaciones opcionales (Cloud Messaging) | M | B | M | M | M (presión para volver) | M | Backend, TWA | Desactivadas por defecto; tono neutro; sin «te extrañamos» | Retención sin aumento de quejas |
| `contentVersion` en `journal`, `applications` y `assessments` | M | B | B | B | B | B | Reglas + test | Campo opcional validado | — |
| Historial de consentimientos | M | B | B | B | B | B | Reglas | Cada aceptación queda registrada | — |
| Registro de errores sin datos personales | M | B | B | M | B | B | Proveedor o propio | Errores con ruta y versión, sin texto del usuario | Errores por versión |
| Mensajes de error de sincronización específicos | B | B | B | B | B | B | — | Se distingue «reglas» de «sesión» | — |
| Fichas imprimibles propias por plantilla (R49) | M | M | M | B | B | B | — | PDF por plantilla, con contenido propio | Descargas |
| Versiones de lectura fácil (C5) | M | A | M | M | B | B | Público objetivo definido | Pasos alternativos con un umbral de legibilidad más alto | Entrevistas |
| «Mi versión» de una práctica (editable, al estilo COGITO) | M | M | M | B | M | B | — | La edición no altera el guion revisado | Uso |

### 3.4 P3: evolución

| Función | Valor | Difer. | Complej. | Coste op. | Riesgo clínico | Riesgo técn. | Dependencias | Criterio de aceptación | Cómo comprobar utilidad |
|---|---|---|---|---|---|---|---|---|---|
| **Espacio profesional** (permisos por categoría, revocables, registro de accesos; el diario nunca se comparte de forma automática) | A | A | A | A | M | A | Cloud Functions (Blaze), *custom claims*, revisión legal | Un clínico sólo ve las categorías concedidas; cada acceso queda registrado y visible para el paciente; al revocar, el acceso se corta de inmediato; tests de reglas | Piloto con terapeutas |
| Cifrado del diario a nivel de campo | A | A | A | M | B | A | Decisión sobre claves y acceso del terapeuta | El texto del diario no es legible en Firestore sin la clave del usuario | — |
| `stats/summary` desde el backend | M | B | M | M | B | M | Cloud Functions | Recuentos consistentes sin `getCountFromServer` | Lecturas por usuario |
| Cobros y planes (Mercado Pago o Stripe; Play Billing) | M | B | A | A | B | A | Backend, legal, `PLAN-PREMIUM.md` | Derechos escritos sólo por el servidor; precio visible; cancelación en un toque; ayuda en crisis siempre gratis | Conversión sin quejas de cobro |
| App Android (TWA) | M | B | M | M | B | M | Dominio propio, `assetlinks.json` | App en Play con la declaración de salud | Instalaciones |
| IA para navegación y explicación (R57) | B | M | A | A | M | A | Los 10 controles de [arquitectura-funcional.md](arquitectura-funcional.md) §4 | Todos los controles cumplidos; alternativa sin IA; desactivada por defecto | Comparación con el buscador |
| Comunidad cerrada por invitación (R28) | B | B | A | A | A | M | Moderación, protocolo | — (no planificada) | — |
| Internacionalización, «tú» o «vos», recursos de crisis por país | M | M | A | M | M | M | Revisión local por país | Cada país con recursos verificados y fecha | — |
| E2E contra los emuladores de Auth y Firestore | M | B | M | B | B | Reduce | — | Flujos clave pasan sin el modo demo | — |
| Unificar el contenido antiguo en paquetes; renombrar las claves `eudaimonia-*` | B | B | M | B | B | M | — | Sin archivos por tanda; migración de claves con lectura doble | — |
| Ilustraciones de cuentos revisadas | M | M | M | M | B | B | ADR-012 | Sólo se publican las que alcanzan el estándar de calidad | — |
| Estudio piloto formal de la app | A | A | A | A | B | B | Comité de ética, institución | Protocolo registrado | Resultados publicados |
| Bloqueo persistente del modo chico | B | B | B | B | B | B | — | Espera creciente que sobrevive a la recarga; sal con `crypto.getRandomValues` | — |

---

## 4. Orden sugerido

| Etapa | Contenido | Resultado |
|---|---|---|
| 0 | «Ahora (este PR)» A1–A8 | Riesgos medios y bajos cerrados |
| 1 | P0: reglas publicadas, revisión clínica del núcleo, modo «sólo revisado», borrado robusto, revisión legal | Listo para el piloto |
| 2 | Piloto de 4 semanas (§1.1) en paralelo con P1 | Evidencia de utilidad |
| 3 | P1 según lo aprendido en el piloto | Producto confiable |
| 4 | P2 (contenido nuevo revisado, rendimiento, audio) | Producto más completo |
| 5 | P3 (Espacio profesional, backend, modelo económico) | Escala |
