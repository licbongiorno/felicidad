# Oportunidades de producto

- **Fecha:** 2026-10-15
- **Autores:** equipo de producto (PM de salud mental, psicología clínica, UX, arquitectura y privacidad).
- **Fuentes internas:** [investigacion-competitiva.md](investigacion-competitiva.md) (fichas por app, citadas como «§N»), [matriz-competitiva.csv](matriz-competitiva.csv) (requisitos R01–R58), [auditoria-proyecto.md](auditoria-proyecto.md) (estado real del repositorio, citado como «Auditoría §N»).
- **Advertencia de método:** la investigación competitiva **no probó ninguna app** y no pudo abrir los sitios oficiales: todo viene de extractos de búsqueda (ver «Método y limitaciones» en `investigacion-competitiva.md`). Cuando aquí se dice que una app «tiene» algo, significa «hay evidencia documental de que lo tiene». **N/V** quiere decir que no se halló evidencia, no que la función no exista.

Documentos relacionados: [vision-producto.md](vision-producto.md), [roadmap.md](roadmap.md), [decisiones-tecnicas.md](decisiones-tecnicas.md).

---

## 1. Resumen en cinco ideas

1. **El hueco de mercado existe y está documentado:** TCC gratuita, completa y en español quedó libre cuando MindShift CBT dejó de tener soporte (31-03-2025) y borró los datos (§1). Ningún competidor revisado une, a la vez, catálogo integrativo paso a paso, español nativo, gratuidad, privacidad estricta y un informe controlado por el usuario (matriz R02, R17, R21, R23, R24).
2. **Nuestro producto ya supera en contenido a casi todos los competidores revisados** (108 prácticas, 22 antídotos, 28 plantillas, 28 programas: Auditoría §0). El cuello de botella no es el contenido sino **la revisión clínica** (ningún elemento está `revisado`: Auditoría §8) y **cerrar riesgos de seguridad y privacidad** (Auditoría §9.1).
3. **Lo que más se repite como necesidad no resuelta** es la continuidad entre la práctica y la vida real, y entre la app y la terapia. Las apps que dan un puente con el profesional cobran (DBT Coach §3, MindDoc Extra B, Mente Sana §13) o no tienen catálogo (Jenora §8).
4. **Lo que sería un error copiar** está bien identificado: chat terapéutico con IA, rachas punitivas, comunidad abierta, cobros oscuros y tests presentados como diagnóstico.
5. **La ventaja difícil de replicar** no es una función: es el **proceso** (contenido como código con pruebas de legibilidad y evidencia, gobernanza clínica versionada, reglas de servidor probadas) más la **confianza** (sin rastreadores, sin IA conversacional, datos del usuario bajo su control).

---

## 2. Fortalezas de los competidores

| Fortaleza | Quién la tiene (evidencia) | Qué nos enseña |
|---|---|---|
| Catálogo TCC para ansiedad muy completo (exposición, experimentos, diario de pensamientos) | MindShift CBT §1 | La profundidad por técnica importa más que la cantidad de técnicas. |
| Cobertura DBT explícita con *diary card* y envío al terapeuta | DBT Coach §3 | La tarjeta diaria es el puente natural con el profesional en DBT. |
| Ejercicios breves, gratuitos, sin rastreo y editables por el usuario; **sin algoritmo adaptativo, y lo declara** | COGITO §4 | Se puede ser útil sin personalización opaca. |
| Gratis, sin cuenta, sin conexión, plan de seguridad, ECA publicado | PTSD Coach §5 (Kuhn et al., 2017, doi:10.1037/ccp0000163) | Es el referente de seguridad y privacidad. |
| Programa diario estructurado con onboarding por cuestionario | Sensa §6, BetterMe §18 | La gente quiere «qué hago hoy». El cuestionario funciona, pero se usó como embudo de venta. |
| Compartir con el terapeuta por categorías, revocable y con registro de cada acceso; IA etiquetada y no diagnóstica | Jenora §8 | Es el mejor modelo de consentimiento granular documentado. |
| SOS gratuito con plan de seguridad y *grounding*; uso anónimo | Wysa §10 | La ayuda en crisis nunca debe estar detrás de un pago. |
| Psicoeducación por problema y programas cortos en la web, gratis | Araam §11 (sólo nota de prensa, [AP]) | Es el competidor web gratuito más cercano. |
| Privacidad sin cuenta, procesamiento en el dispositivo y transparencia sobre qué señales usa | Kalisme §12 | Transparencia de personalización como valor. |
| Mucho audio y video en español | Mente Sana §13 | El audio humano es valorado. |
| Adherencia por micro-metas y tono amable | Finch §14 | La motivación funciona, pero hay que diseñarla sin culpa. |
| Biblioteca de audio de calidad, declaración de accesibilidad WCAG 2.2 AA con VPAT | Headspace §15 | La accesibilidad declarada es poco común y diferencia. |
| «Influence on Mood» con **nivel de confianza** y metas semanales que no castigan | Daylio §16 | Mostrar patrones con incertidumbre explícita. |
| Profundidad clínica y fichas en español | Therapist Aid §17 | Fichas de referencia, pero con licencia que **prohíbe** redistribuirlas. |
| Vocabulario de 132 emociones ligado a estrategias | How We Feel (Extra A) | La granularidad emocional ayuda a elegir la habilidad. |
| Informe descargable para el profesional; producto sanitario clase I (UE); ECA con resultados en preprint | MindDoc (Extra B) | El informe estructurado es un valor en sí mismo. |

## 3. Necesidades que se repiten

Se repiten en varias fichas y en la columna `necesidad_usuario` de la matriz:

1. **«¿Qué hago ahora?»**: herramienta según el estado actual (R10; Wysa §10, How We Feel, PTSD Coach §5).
2. **Aprender una habilidad paso a paso sin tener que recordarla** (R02).
3. **Entender qué me pasa** con psicoeducación breve ligada a la práctica (R01).
4. **Llevar lo aprendido a la vida real** y saber si sirvió (R31, R32). Casi nadie lo documenta.
5. **Ordenar lo que siento y pienso** con un diario privado (R11).
6. **Ver patrones** sin conclusiones falsas (R14, R34; Daylio §16).
7. **Compartir con mi terapeuta sólo lo que yo elija** (R17, R18; Jenora §8, MindDoc).
8. **Saber a quién llamar en un mal momento** (R19, R20).
9. **Que no me vendan mis datos ni me cobren a escondidas** (R21, R55, R56; Mozilla sobre Headspace §15 y MindShift §1; quejas de facturación en Sensa §6 y BetterMe §18).
10. **Contenido en mi idioma** (R23): varias apps líderes no tienen español o lo tienen parcial (How We Feel, MindDoc, Headspace §15, PTSD Coach §5 con configuración manual).

## 4. Experiencias fragmentarias

El usuario hoy tiene que **armar su propia caja de herramientas** con varias apps:

| Lo que necesita | Dónde lo encuentra hoy | Fragmentación |
|---|---|---|
| Registro de ánimo con correlaciones | Daylio §16 | Sin contenido terapéutico. |
| Técnicas TCC | MindShift §1 (cerrada), Therapist Aid §17 (papel) | Sin seguimiento ni historial. |
| DBT | DBT Coach §3 (de pago, posible abandono 2019–2020) | Inglés. |
| Mindfulness con audio | Headspace §15 | De pago, español parcial. |
| Crisis y plan de seguridad | PTSD Coach §5, Wysa §10 | Centrado en TEPT o detrás de un chatbot. |
| Puente con el terapeuta | Jenora §8, MindDoc | Sin catálogo de técnicas o sin español. |
| Vocabulario emocional | How We Feel | Sin español. |
| Familias y chicos | Headspace §15 (meditaciones), Therapist Aid §17 (fichas) | Sin habilidades estructuradas por edad. |

**Nuestra respuesta:** un solo lugar donde cada necesidad lleva a una práctica guiada, con su porqué, su registro, un plan para la vida real y un informe que el usuario controla.

## 5. Oportunidades no resueltas por el mercado

| Oportunidad | Evidencia de que no está resuelta | Estado en nuestro producto |
|---|---|---|
| TCC + DBT + ACT integrativas, gratis y en español | R02, R06, R23, R24: ninguna app con 3 en las cuatro | Implementado; falta revisión clínica |
| Exposición gradual segura | Sólo MindShift (§1, cerrada); nadie más (R04) | Borrador; requiere salvaguardas (riesgo) |
| Generalización: plan «cuándo y dónde» + utilidad percibida | R31, R32: sin competidor documentado | Implementado (`applications`) |
| Informe para el terapeuta con diario oculto por defecto, generado en el dispositivo | R17: MindDoc=3 pero sin español; Daylio exporta sin cifrar | Implementado (`/informe`) |
| Simulaciones con fin terapéutico | R27: máximo 1 en el mercado | Implementado (Laboratorio) |
| Contenido infantil por franjas con modo supervisado | R25: Headspace=3 sólo meditación | Implementado (Familia y modo chico) |
| Confianza subjetiva por habilidad (autoeficacia) | R33: nadie | **No implementado** |
| Hipótesis personales + experimento para comprobarlas | R34: nadie de forma prudente | Parcial |
| Accesibilidad declarada | R22: sólo Headspace | Probada con axe; **falta declaración pública** |

## 6. Patrones a adoptar (y cómo)

| Patrón | De quién | Cómo lo adoptamos |
|---|---|---|
| Consentimiento granular, revocable y con registro de accesos | Jenora §8 | Diseño del Espacio profesional (P3): permisos por categoría, revocación inmediata, bitácora visible para el paciente. Ver [arquitectura-funcional.md](arquitectura-funcional.md). |
| Uso sin cuenta y sin conexión | PTSD Coach §5, Daylio §16 | Modo demo local ya existe; PWA sin conexión. Evaluar «modo local» real sin cuenta (P2). |
| Patrones con nivel de confianza | Daylio §16 | «Qué te funciona» ya exige n mínima (`MIN_N = 2`, `src/domain/insights.ts`); falta mostrar un nivel de confianza explícito. |
| Metas semanales que no castigan | Daylio §16 | Desafíos que no se reinician al saltar días; jardín que nunca decrece (`GUIA-DE-ESTILO.md`). |
| Declarar que no hay algoritmo adaptativo | COGITO §4 | `recommend.ts` usa reglas transparentes y muestra siempre el porqué. |
| Ejercicios editables por el usuario | COGITO §4 | P2: «mi versión» de una práctica, sin tocar el guion revisado. |
| Vocabulario emocional ligado a la acción | How We Feel | Rueda de emociones (10 familias) enlazada a Antídotos. |
| Botón de ayuda gratuito y siempre visible | Wysa §10 | `HelpButton` en todas las pantallas. |
| Micro-sesiones distribuidas en el día | BetterMe §18 | «Tu día» en 3 pasos; herramientas rápidas de 1–3 min. |
| Accesibilidad declarada | Headspace §15 | Publicar declaración de accesibilidad con el resultado de axe (P1). |

## 7. Funciones que sería un error copiar

| Función | Quién la tiene | Por qué no |
|---|---|---|
| **Chat terapéutico con IA** | Wysa §10, Headspace (Ebb) §15, Jenora (Ori) §8, Mente Sana (María) §13 | La evidencia de eficacia es modesta y con conflictos de interés (Wysa: ECA del NHS sin superioridad clara; Ebb: todos los autores son de la empresa). No hay evaluación independiente del escalado de crisis (§15). En Argentina, la app Cux se frenó en 2024 tras críticas del Colegio de Psicólogos de la provincia de Buenos Aires (§9). Woebot retiró su app de consumo el 30-06-2025. Un chat crea expectativas de respuesta clínica que no podemos cumplir. |
| **Rachas punitivas** | Finch §14 (pérdida de «una racha de dos años»), Daylio §16 (parcial) | Hay críticas de culpa y dependencia (en reseñas y opinión, no en estudios: §14). En depresión o en DBT, perder lo logrado puede generar culpa (`GUIA-DE-ESTILO.md`, «Motivación»). |
| **Comunidad abierta en el MVP** | MindShift §1 (foro; desde 2022 sólo mayores de 18) | Exige moderación 24/7, protocolo de crisis entre pares y gestión de menores. Coste operativo y riesgo clínico altos (R28: P3). |
| **Cobros oscuros** | Sensa §6 (precio sólo tras cuestionario; borrar la app no cancela), BetterMe §18 (quejas por cargos tras cancelar) | Destruye la confianza, que es nuestra ventaja. |
| **Tests como diagnóstico** | Sensa §6 (cuestionario que define programa y precio); embudos tipo cuestionario (§18) | Los instrumentos son de cribado (PTSD Coach lo aclara: §5). Nosotros mostramos interpretación prudente y PHQ-9 sigue en borrador hasta tener protocolo del ítem 9. |
| **Rastreo publicitario** | Headspace §15 (Mozilla 2023), BetterMe §18 (etiquetas de rastreo) | Incompatible con datos de salud (Ley 25.326: datos sensibles). |
| **Reutilizar fichas de Therapist Aid** | §17 | Su licencia prohíbe redistribuir y alterar. Escribimos contenido propio. |
| **Mascota que «te espera»** | Finch §14 | Vínculo emocional que puede convertirse en presión para volver. Nuestro jardín no tiene avisos del tipo «te extraña». |

## 8. Qué queda fuera del MVP

- IA conversacional (decisión deliberada: R16 P3; ver [decisiones-tecnicas.md](decisiones-tecnicas.md), ADR-006).
- Comunidad (R28 P3; ADR-007).
- Espacio profesional con cuentas de clínico (R18 P3; hoy el portal es sólo para pacientes; ADR-013).
- Cobros y planes premium (`PLAN-PREMIUM.md`; requieren backend y revisión legal).
- Exposición autoguiada, plan de seguridad, PHQ-9 e ISI mientras sigan en borrador.
- Audio grabado con voz humana (R07; P2).
- Notificaciones push (P2; hoy hay recordatorio por calendario `.ics`).
- Internacionalización y recursos de crisis de otros países (P3).

## 9. Qué podemos hacer mejor y por qué

| Dimensión | Mejor práctica del mercado | Nuestra versión mejor | Por qué podemos |
|---|---|---|---|
| Evidencia | Nivel declarado sólo en algunas apps | Nivel de evidencia y referencias con DOI **por práctica**, verificadas contra Crossref (`npm run verify:refs`) | Contenido como código con tests (`quality.test.ts`). |
| Seguridad | Botón SOS (Wysa) | Riesgo 1/2 con alternativa obligatoria, cribado que detiene el ejercicio, estabilización desde intensidad 8 | Ya implementado (`catalog.ts`, `AntidoteModule.tsx`). |
| Puente con terapia | Jenora (sin catálogo), MindDoc (sin español) | Informe generado en el dispositivo, diario oculto por defecto, preguntas para la sesión | Ya implementado (`/informe`). |
| Motivación | Finch (con culpa) | Jardín que sólo crece, días practicados en vez de rachas | Ya implementado (`growth.ts`). |
| Privacidad | PTSD Coach, Daylio (local, sin cuenta) | Sin analítica de terceros, CSP estricta con `connect-src` limitado, reglas probadas | Ya implementado; falta cifrado del diario y aislar el estado local. |
| Accesibilidad | Headspace (declaración) | axe WCAG 2.1 AA en 34 rutas en claro y 12 en oscuro, escritorio y móvil | Ya implementado; falta declaración pública. |
| Legibilidad | N/V en el mercado | INFLESZ ≥ 55 obligatorio en pasos y avisos | Tests automáticos. |

## 10. Propuesta de valor

> **Habilidades Psicológicas** te ayuda a aprender y practicar, paso a paso, habilidades psicológicas con respaldo, organizadas por lo que necesitas hoy, en español y gratis. Te explica por qué funcionan, te ayuda a llevarlas a tu vida y te deja decidir qué compartes con tu terapeuta. No diagnostica, no reemplaza la terapia y no vende tus datos.

Para quién (detalle en [vision-producto.md](vision-producto.md)):

- Personas en terapia que quieren practicar entre sesiones.
- Personas que quieren aprender habilidades por su cuenta, sin un cuadro que requiera atención clínica.
- Adultos que acompañan a chicos y adolescentes.

## 11. Ventaja difícil de replicar

1. **Proceso editorial clínico codificado:** cada elemento tiene versión, estado de revisión y fecha de verificación de evidencia (`governance.ts`); cada sesión guarda la versión del guion usado (`contentVersion`). Copiar el contenido es fácil; copiar el proceso que lo mantiene correcto, no.
2. **Calidad automatizada sobre el contenido:** 493 tests unitarios con legibilidad y coherencia, 36 de reglas, e2e con axe (Auditoría §0).
3. **Confianza acumulada:** sin rastreadores, sin IA conversacional y sin cobros oscuros. Es una posición que un competidor con modelo publicitario no puede adoptar sin cambiar su negocio.
4. **Integración por necesidad de 22 enfoques** con distinción explícita entre evidencia empírica, fundamento teórico, práctica complementaria y exploración personal (ver [vision-producto.md](vision-producto.md)).
5. **Familia y chicos con el mismo rigor**, algo que ningún competidor revisado documenta (R25).

---

## 12. Qué tomar de cada competidor y cómo superarlo

| App | Qué tomar | Cómo superarlo | Evidencia |
|---|---|---|---|
| **MindShift CBT** | Profundidad TCC para ansiedad: escalera de exposición, experimentos de creencias, tarjetas de afrontamiento | Ofrecerlo en español, sin cuenta obligatoria para lo básico, y con salvaguardas: la exposición sigue en borrador hasta tener criterios de derivación. Nunca borrar datos sin exportación previa | §1 (cierre 31-03-2025; Mozilla 2023: contraseña «111111» aceptada) |
| **ToolPsy** | La idea del lado profesional: asignar ejercicios y ver resultados | Diferido (P3). Lo nuestro es la app del paciente con informe exportable que complementa herramientas así. Identidad de toolpsy.app **N/V** | §2 |
| **DBT Coach** | *Diary card*, compartir con el equipo, pestaña de crisis | Tarjeta diaria DBT y análisis en cadena ya existen, gratis, en español; el envío al terapeuta va por informe controlado | §3 (última actualización iOS 2019) |
| **Kalmo** | **N/V**: no se encontró información verificable | No se puede comparar. Si fuera un chat de IA en español, nuestra postura sin IA conversacional es un diferencial ante el contexto argentino (§9) | §7 |
| **Jenora** | Permisos por categoría, revocación inmediata, registro de accesos, IA etiquetada | Mismo modelo de permisos en el Espacio profesional (P3), más un catálogo de técnicas paso a paso que Jenora no documenta | §8 |
| **Amira Argentina** | **N/V**: no se encontró el producto | Tomamos el contexto: rechazo profesional a la IA como terapeuta (Cux, FePRA) y baja familiaridad con apps (73,7 % no las conocía, Garay y Celleri) | §9 |
| **Sensa** | Programa diario estructurado | Programas gratis, que se pueden pausar y abandonar sin culpa; precio y condiciones claras si alguna vez hay premium | §6 (Valinskas et al., 2023, sin control) |
| **Wysa** | SOS gratuito con plan de seguridad y *grounding*; uso anónimo; TCC+DBT+mindfulness | Lo mismo sin chatbot: selector por emoción e intensidad con reglas transparentes (Antídotos). Plan de seguridad: publicar tras aprobación clínica | §10 |
| **Araam** | Psicoeducación por problema, web, gratis | Ya tenemos más: exposición (borrador), plan de seguridad (borrador), informe y Laboratorio. Validación independiente de Araam: ninguna | §11 |
| **Kalisme** | Transparencia de personalización y procesamiento local | Explicar «te lo sugerimos porque…» (ya en `recommend.ts`) y dejar editar o apagar las sugerencias (P1) | §12 |
| **Mente Sana** | Audio y video en español; derivación humana declarada | Herramientas gratis; el vínculo profesional como opción, no como requisito; audio humano en P2 | §13 |
| **Finch** | Micro-metas de baja fricción, tono amable | Motivación sin pérdida: jardín que sólo crece, sin rachas, sin «te extraña» | §14 |
| **Headspace** | Calidad de audio, declaración WCAG 2.2 AA con VPAT, contenido infantil por edad | Mindfulness gratis en español, sin píxeles publicitarios; publicar declaración de accesibilidad; actividades infantiles por franja (5 franjas) | §15 |
| **Daylio** | Correlación actividad→ánimo con nivel de confianza; metas semanales flexibles | Mostrar confianza en «Qué te funciona»; exportación gratis (JSON) y PIN/privacidad sin pago | §16 |
| **Therapist Aid** | Catálogo clínico de referencia y fichas en español | Flujos interactivos propios con historial; **no copiar** sus fichas (licencia) | §17 |
| **PTSD Coach** | Sin cuenta, sin conexión, plan de seguridad, psicoeducación fiable | Precargar el plan de seguridad sin conexión (en curso: «Ahora (este PR)»), más allá de TEPT | §5 (Kuhn et al., 2017) |
| **COGITO** | Ejercicios breves diarios, editables, gratis, sin rastreo, honestidad sobre la personalización | Mismo principio de honestidad, con más registro y estadísticas; versiones de lectura fácil (P2) como su «Glücklich (leicht)» | §4 (Lüdtke et al., 2018: sin diferencias por ITT) |
| **BetterMe** | Estructura mañana/tarde/noche | Sin rastreo, sin suscripción oscura | §18 |
| **How We Feel** | 132 emociones en dos ejes ligadas a estrategias | Rueda de emociones en español enlazada a Antídotos (22) y prácticas | Extra A |
| **MindDoc** | Informe estructurado para el profesional, cuestionarios validados | Informe en español generado en el dispositivo, con evaluaciones (WHO-5, GAD-7, DERS-16, PSS-10) | Extra B |

---

## 13. Las 10 preguntas de la Fase 14

> **Nota:** el enunciado literal de las 10 preguntas de la Fase 14 no está en el repositorio. Se responden las preguntas tal como las recoge el encargo del equipo; **a verificar** que coincidan con el texto original.

### 1. ¿Qué necesidad resolvemos mejor que el mercado?

**Aprender y practicar habilidades concretas según lo que necesitas hoy, y llevarlas a tu vida**, en español y gratis. El mercado ofrece piezas sueltas (sección 4). Las apps con catálogo profundo están cerradas (MindShift §1), son de pago o están en inglés (DBT Coach §3), o no tienen español (MindDoc, How We Feel). La generalización a la vida real (R31, R32) no está documentada en ningún competidor. Nosotros la tenemos implementada.

### 2. ¿Para quién es y para quién no?

Es para adultos que quieren entrenar habilidades, con o sin terapia, y para familias. **No es** para crisis agudas, ideación suicida activa, trauma que requiere procesamiento, TOC que requiere ERP ni trastornos de la conducta alimentaria (ver [seguridad-clinica-y-privacidad.md](seguridad-clinica-y-privacidad.md)). COGITO declara lo mismo: no apta para crisis agudas (§4). PTSD Coach aclara que no sustituye la terapia (§5).

### 3. ¿Debemos incluir IA conversacional?

**No en el MVP.** Argumentos:

- Evidencia modesta y con conflictos de interés: Wysa (ECA del NHS con diferencias similares entre brazos), Ebb (todos los autores son empleados de Headspace) (§10, §15).
- Sin evaluación independiente del escalado de crisis (§15).
- Rechazo profesional en Argentina (Cux, FePRA: §9).
- Woebot retiró su app de consumo (2025).

La IA sólo se evaluará en P3, para navegación y explicación, con los 10 controles de [arquitectura-funcional.md](arquitectura-funcional.md) §10 (R57).

### 4. ¿Debemos incluir comunidad?

**No en el MVP.** La única comunidad grande documentada (MindShift) requería moderación y restringió la edad (§1). Kalisme muestra una alternativa íntima por invitación (§12), y Finch una de «sólo vibes positivas» (§14). Si algún día hay algo social, será de ese tipo: cerrado, por invitación y sin texto libre entre desconocidos (P3).

### 5. ¿Cómo motivamos sin generar culpa?

Con progreso que no se pierde: jardín que sólo crece, días practicados en vez de rachas y desafíos que no se reinician (`GUIA-DE-ESTILO.md`, `growth.ts`). Tomamos de Daylio las metas semanales que no castigan (§16) y evitamos el patrón de Finch (pérdida de rachas largas, críticas de culpa: §14).

### 6. ¿Cómo nos relacionamos con los profesionales?

Hoy, con un informe que el paciente genera y controla (`/informe`; el diario va oculto por defecto) y con preguntas para la sesión. Mañana (P3), con un Espacio profesional del estilo de Jenora: permisos por categoría, revocables y con registro de accesos (§8). Nunca con acceso automático al diario. Las reglas ya prevén `careLinks`, activable sólo por el paciente (`firestore.rules`).

### 7. ¿Qué modelo de acceso es ético?

**Núcleo gratuito y ayuda en crisis siempre gratis.** Jenora y Wysa también mantienen gratis los recursos de crisis (§8, §10). Si hay premium (`PLAN-PREMIUM.md`), tendrá precio visible antes de cualquier cuestionario y cancelación en un toque. Así evitamos lo que se critica de Sensa (§6) y BetterMe (§18).

### 8. ¿Cómo protegemos la privacidad mejor que el mercado?

- Sin analítica de terceros.
- CSP con `connect-src` limitado a la propia app y a Firebase.
- Reglas de servidor probadas con emulador.
- Exportación y borrado desde Ajustes.

Los referentes son PTSD Coach (sin cuenta, §5), Daylio (local, §16) y Kalisme (en el dispositivo, §12). Pendientes: cifrado del diario, aislamiento del estado local por usuario (en curso) y revisión legal (Auditoría §9.1).

### 9. ¿Cómo sabremos si funciona?

Con indicadores de uso real, no de vanidad:

- utilidad percibida de cada aplicación (`applications.usefulness`);
- proporción de prácticas con plan «Llevarlo a tu vida» y su revisión posterior;
- cambio pre/post autoinformado, con la advertencia de que es inmediato y autoinformado;
- WHO-5 quincenal;
- retención a 7 y 30 días, **sólo con analítica propia, anónima y con consentimiento** (`PLAN-PREMIUM.md` §C).

La app no tiene estudios propios (R26). Un estudio piloto queda como P3. Detalle en [roadmap.md](roadmap.md).

### 10. ¿Cuál es nuestra ventaja difícil de replicar?

El proceso y la confianza (sección 11), no una función aislada. Las funciones de Wysa, Headspace o Jenora pueden copiarse; su modelo de negocio (IA, B2B, publicidad o suscripción) les impide adoptar sin costo nuestra posición sin IA, sin rastreo y con el núcleo gratis.

---

## 14. Riesgos de esta estrategia

| Riesgo | Mitigación |
|---|---|
| Sin IA, menos «efecto wow» | Velocidad y claridad: «qué hago ahora» en dos toques (Antídotos, herramientas rápidas). |
| Sin revisión clínica, la ventaja de rigor es sólo potencial | Es el P0 del roadmap: revisión de lo `pendiente` y decisión sobre los borradores. |
| Contenido enorme y difícil de mantener | Paquetes por tema, tests y fecha de revisión visible. |
| Sostenibilidad económica | Premium ético u opciones institucionales (P3); a decidir por el dueño del producto. |
| Evidencia competitiva débil (no se probaron apps) | Repetir la investigación con acceso real a las apps antes de decisiones caras (**a verificar**). |
