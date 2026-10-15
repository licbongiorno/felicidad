# Investigación competitiva

Fecha de consulta: 2026-10-15. Alcance: 18 aplicaciones pedidas y 2 extra (How We Feel y MindDoc), elegidas porque aportan funciones distintas (vocabulario emocional e informe para el profesional). Woebot se descartó porque su app de consumo se retiró el 30-06-2025.

## Método y limitaciones (leer antes de usar este documento)

- **No se probó ninguna aplicación.** Este entorno no permite instalar apps ni crear cuentas.
- **Ningún sitio oficial pudo leerse directamente.** WebFetch devolvió `ENOTFOUND` y curl `403`. Toda la evidencia proviene de resultados indexados de búsqueda web (WebSearch): extractos de páginas oficiales, fichas de Google Play y App Store, reseñas profesionales (One Mind PsyberGuide, ORCHA, APA, Mozilla *Privacy Not Included*), artículos académicos y prensa.
- Etiquetas usadas en las fichas:
  - **[C]** confirmada en extracto de fuente oficial.
  - **[A]** anunciada por el proveedor.
  - **[S]** fuente secundaria.
  - **[NV]** no verificada.
- **N/V** significa que no se halló evidencia, **no** que la función no exista. Un 0 sólo indica evidencia de ausencia.
- **Kalmo y Amira Argentina:** no se halló información verificable. Las búsquedas devolvieron apps de nombre parecido, y sus fichas quedan en N/V.
- **ToolPsy:** no se encontró toolpsy.app. Se documenta toolpsy.com, con identidad no confirmada.
- Las puntuaciones 0–3 resumen la evidencia documental. No son una evaluación de uso. Ver `docs/matriz-competitiva.csv`.

## Síntesis

| Hallazgo | Evidencia (ver fichas) |
|---|---|
| El nicho de TCC gratuita para ansiedad quedó libre: MindShift CBT dejó de tener soporte el 31-03-2025 y borra los datos | Ficha A §1 |
| La referencia en seguridad es PTSD Coach (VA): gratis, sin cuenta, plan de seguridad, español, ECA publicado (Kuhn et al., 2017) | Ficha A §5 |
| Sólo unas pocas apps tienen estudios propios (PTSD Coach, Headspace, Wysa, COGITO, MindDoc con protocolo); varios son de la propia empresa o con resultados nulos o mixtos | Fichas A §4–5, B §10, C Headspace/MindDoc |
| El control de lo compartido con el terapeuta mejor documentado es el de Jenora: el usuario elige qué comparte, puede revocarlo y cada acceso queda registrado | Ficha B §8 |
| La gamificación de Finch engancha, pero hay críticas de culpa y dependencia (en reseñas y artículos de opinión, no en estudios) | Ficha C Finch |
| Daylio muestra patrones del ánimo («Influence on Mood») con nivel de confianza, guarda los datos en el dispositivo y sin cuenta, y cobra el PIN y la exportación | Ficha C Daylio |
| Therapist Aid tiene muchas fichas, también en español, pero su licencia prohíbe redistribuirlas y alterarlas: no se pueden reutilizar en la app | Ficha C Therapist Aid |
| Hay preocupación por la privacidad en apps comerciales (Headspace en Mozilla 2023; BetterMe declara rastreo) y quejas por cobros (Sensa, BetterMe) | Fichas A §6, C |
| Casi ninguna app declara accesibilidad. Headspace publica una declaración WCAG 2.2 AA | Ficha C Headspace |
| En Argentina hay sensibilidad profesional ante la IA como terapeuta: el caso Cux se frenó en 2024 tras críticas del Colegio de Psicólogos de la provincia de Buenos Aires | Ficha B §9 |

---


## Grupo A — Entrenamiento de habilidades psicológicas


**Fecha de consulta:** 2026-10-15
**Método:** se intentó WebFetch una vez por sitio oficial (mindshiftcbt.com, toolpsy.app, toolpsy.com, play.google.com x2, ptsd.va.gov, sensa.health). **Todos fallaron con `ENOTFOUND`.** Toda la evidencia procede de WebSearch (resúmenes de resultados que citan fichas de App Store, páginas oficiales indexadas, reseñas y artículos). No se instaló ni probó ninguna app.

**Etiquetas de evidencia:**
- **[C]** confirmada (fuente oficial: desarrollador, ficha de tienda, organismo público)
- **[A]** anunciada por el proveedor (marketing / descripción de tienda con afirmaciones no verificables)
- **[S]** fuente secundaria (reseñas, directorios, Mozilla, Healthify, artículos)
- **[NV]** no verificada
- **N/V**: sin evidencia encontrada

> Limitación general: al no poder abrir las páginas oficiales, incluso las afirmaciones [C] provienen de extractos indexados por el buscador de fichas oficiales (App Store, ptsd.va.gov, uke.de/clinical-neuropsychology.de), no de lectura directa. Las fichas de tienda pueden estar desactualizadas.

---

### 1. MindShift CBT (Anxiety Canada)

**ALERTA DE ESTADO:** la ficha de App Store indica que *"después del 31 de marzo de 2025, MindShift ya no recibirá actualizaciones ni soporte, y todos los datos de los usuarios se eliminarán permanentemente"* y pide desinstalarla manualmente [C, ficha App Store vía búsqueda]. No se encontró el anuncio en la web de Anxiety Canada [NV]. A fecha 2026-10-15 debe considerarse **discontinuada**; sigue siendo referencia de diseño.

| Aspecto | Hallazgo |
|---|---|
| Público y problema | Ansiedad (preocupación, pánico, ansiedad social, etc.); diseñada pensando en jóvenes, usable por adultos [S: Healthify, PsychCentral 2022]. |
| Propuesta de valor / precio | Gratuita, de una ONG (Anxiety Canada), uso solo o con profesional [S: HelpStartsHere BC, CanHealth]. Sin compras conocidas [S]. |
| Orientación terapéutica | TCC (CBT) [C ficha]. Mindfulness/relajación [S]. |
| Catálogo y profundidad | Diario de pensamientos, *fear ladder* (escalera de exposición), experimentos de creencias, retos de zona de confort, tarjetas de afrontamiento, objetivos y hábitos saludables, "quick relief" [C ficha / S]. Profundidad por ejercicio: N/V. |
| Psicoeducación | Sí, "education and information" [S: Healthify]. |
| Onboarding | N/V. |
| Personalización | N/V (posible selección de áreas de ansiedad, no confirmada) [NV]. |
| Recorridos / progresión | N/V. |
| Juegos / interactivos | N/V. |
| Audio / video | Meditaciones guiadas en "Chill Zone" [S]. |
| Registro emocional / diario / hábitos | Check-in con gráficos y entradas de diario; herramientas de hábitos saludables [S]. PsychCentral señala que el seguimiento del ánimo es intenso y no gusta a todos [S]. |
| Objetivos / recordatorios / estadísticas | Objetivos, recordatorios, seguimiento de ansiedad y gráficos [S: Healthify]. |
| Gamificación | N/V. |
| IA | No hay evidencia de IA [N/V]. |
| Psicólogo / informes / exportación | Se puede usar con un profesional [S]; exportación N/V. |
| Comunidad | Foro moderado entre pares; desde nov. 2022 solo para mayores de 18 [S: Mozilla PNI]. |
| Seguridad, privacidad, crisis | Requiere cuenta; recoge nombre, email, teléfono, ubicación y uso; no vende datos para publicidad; no se pudo confirmar cifrado; aceptó la contraseña "111111"; política de privacidad de oct. 2021; etiqueta *Privacy Not Included* [S: Mozilla, actualización 2023-04-25]. Recursos de crisis: N/V. |
| Accesibilidad / idiomas / plataformas | iOS y Android [S]. Inglés y francés [S: directorio Concordia, única fuente]. Español: N/V. Accesibilidad declarada: N/V. |

**Evidencia científica**
- Ensayo abierto registrado NCT04562948 ("Community Applications of the MindShift App"), 16 semanas, adultos de Canadá/EE. UU., IP Lance Rappaport (Univ. de Windsor), financiado por Anxiety Canada (21.750 CAD) [C: ClinicalTrials.gov; S: prensa].
- Tesis de la Universidad de Windsor (scholar.uwindsor.ca/etd/9210): 154 adultos; reducción de ansiedad, depresión y deterioro funcional durante 16 semanas; sin grupo control [S]. Autor/año exactos de la tesis: NV.
- Registro ANZCTR de diseño de caso único múltiple que incluye MindShift junto a MoodMission, Smiling Mind, etc. [S]. Resultados: NV.

**Fortalezas:** catálogo TCC muy completo para ansiedad (exposición, experimentos, diario de pensamientos); gratuita; ONG con credibilidad clínica.
**Debilidades:** discontinuada (marzo 2025) con borrado de datos; cuenta obligatoria y críticas de privacidad; sin evidencia controlada.
**Oportunidades:** su cierre deja un hueco en "TCC para ansiedad gratuita y completa", sobre todo en español; demuestra el riesgo de depender de cuentas en servidor (argumento a favor de almacenamiento local).

---

### 2. ToolPsy

**Advertencia de identidad:** no se encontró ningún resultado para el dominio **toolpsy.app**. Sí aparece **toolpsy.com** con el título *"ToolPsy Ψ - Plateforme TCC Professionnelle"*. Que toolpsy.app y toolpsy.com sean el mismo producto es **[NV]**. Lo que sigue describe toolpsy.com.

| Aspecto | Hallazgo |
|---|---|
| Público y problema | Psicólogos/profesionales de salud mental y estudiantes, no pacientes directamente [S: página de la psicóloga Laura Thomas; A: título de toolpsy.com]. |
| Propuesta de valor / precio | Plataforma SaaS con tests psicométricos y ejercicios TCC para profesionales [A]. Desarrollada por Summoning Systems [S]. Lanzamiento de la v1 con cuenta gratuita de 2 pacientes activos (post de LinkedIn de Alix Maurin, ~260 días antes de la consulta) [S]. Precios de planes de pago: N/V. |
| Orientación terapéutica | TCC [A]. |
| Catálogo y profundidad | Expedientes de pacientes, herramientas de evaluación clínica, ejercicios terapéuticos, planificación de talleres [A/S]. Número y profundidad: N/V. |
| Psicoeducación | N/V. |
| Onboarding | N/V. |
| Personalización | N/V. |
| Recorridos / progresión | N/V. |
| Juegos / interactivos | N/V (el autor del post trabaja en "Bottom Up Games"; no implica gamificación) [NV]. |
| Audio / video | N/V. |
| Registro emocional / diario / hábitos | N/V. |
| Objetivos / recordatorios / estadísticas | N/V. |
| Gamificación | N/V. |
| IA | N/V. |
| Psicólogo / informes / exportación | Es una herramienta *para* el psicólogo (expedientes, tests) [A]; una psicóloga colaboradora afirma que no sustituye el juicio clínico [S]. Exportación: N/V. |
| Seguridad, privacidad, crisis | N/V. |
| Accesibilidad / idiomas / plataformas | Web; interfaz en francés [S]. Español: N/V. App móvil: N/V. |

**Evidencia científica:** ninguna encontrada.

**Fortalezas:** enfoque profesional (tests + ejercicios + expedientes) poco común en apps de consumo.
**Debilidades:** información pública mínima; identidad del dominio indicado sin confirmar; francés.
**Oportunidades:** el lado "profesional" (asignar ejercicios, ver resultados) es un nicho en español; una app de usuario con informe exportable podría complementar herramientas de este tipo.

---

### 3. DBT Coach (Swasth Inc.)

| Aspecto | Hallazgo |
|---|---|
| Público y problema | Personas que aprenden/practican habilidades DBT (p. ej., TLP, desregulación emocional) [A ficha; S: blog ACA 2021]. |
| Propuesta de valor / precio | Prueba gratuita y luego suscripción: 11,99 USD/mes o 59,99 USD/6 meses [C ficha App Store, posiblemente desactualizada]. |
| Orientación terapéutica | DBT (terapia dialéctico-conductual) [C ficha]. |
| Catálogo y profundidad | +100 videos, +200 animaciones, +100 hojas de trabajo interactivas vinculadas a lecciones [A]. |
| Psicoeducación | Lecciones en video y animación de habilidades DBT [A]. |
| Onboarding | N/V. |
| Personalización | N/V. |
| Recorridos / progresión | Lecciones por habilidades; estructura de módulos exacta N/V [A parcial]. |
| Juegos / interactivos | Hojas de trabajo interactivas, animaciones [A]. Juegos: N/V. |
| Audio / video | Video (+100) [A]. Audio guiado: N/V. |
| Registro emocional / diario / hábitos | Tarjeta diaria DBT (*diary card*) de habilidades y conductas objetivo [A]. |
| Objetivos / recordatorios / estadísticas | Pantallas de resumen y analíticas [A]. Recordatorios: N/V. |
| Gamificación | "Premios por tareas realizadas" para adquirir habilidades [A]. |
| IA | N/V. |
| Psicólogo / informes / exportación | Compartir con terapeuta/equipo; diary card en formato gráfico o tabular; plataforma complementaria para que el clínico reciba datos en tiempo real si está registrado [A]. |
| Seguridad, privacidad, crisis | Pestaña "Crisis" [S: blog ACA 2021]. Política de privacidad / Data safety: N/V. |
| Accesibilidad / idiomas / plataformas | Android (co.swasth.dbtcoach) e iOS (id1452264969) [C]. Idioma: aparentemente inglés; existe página de BlueStacks en español, pero eso no implica traducción [NV]. Accesibilidad: N/V. |

**Notas de actualidad:** la ficha iOS indexada muestra última actualización 22-oct-2019 y las réplicas datan de 2020 [S]. Otro resultado atribuye un "DBT Coach" a **Resiliens Inc.** con 4,6★ (1.632 reseñas) [S]; no está claro si es la misma app o un cambio de editor [NV]. Afirmaciones "mejora medible en 90 días" y "3 millones de usuarios" son marketing [A, NV].

**Evidencia científica:** no se encontró evidencia publicada sobre esta app concreta.

**Fortalezas:** la cobertura DBT más explícita del grupo (diary card, compartir con terapeuta, crisis).
**Debilidades:** de pago; posible abandono/estancamiento (actualizaciones 2019–2020); sin evidencia; inglés.
**Oportunidades:** DBT en español con diary card exportable y gratuita es un hueco claro.

---

### 4. COGITO (UKE Hamburgo – Unidad de Neuropsicología y Psicoterapia, grupo Moritz/Bücker)

| Aspecto | Hallazgo |
|---|---|
| Público y problema | Adultos con problemas emocionales y de control de impulsos; paquetes: ánimo, ansiedad, juego patológico, autoestima, dolor, y uno para experiencias psicóticas (mejor junto al MCT para psicosis) [C: ficha App Store / web UKE]. |
| Propuesta de valor / precio | Gratuita, financiada por donaciones, sin anuncios, sin costes ocultos, "sin rastreo de datos" [C ficha]. |
| Orientación terapéutica | TCC y Entrenamiento Metacognitivo (MCT) [C]. |
| Catálogo y profundidad | Ejercicios cortos (pocos minutos/día) dentro de paquetes; el usuario puede escribir o modificar sus propios ejercicios [C web UKE]. Número exacto: N/V. Versión hermana "Oberberg COGITO" con más ejercicios [S]. |
| Psicoeducación | N/V explícita (ejercicios con explicación breve, no confirmado) [NV]. |
| Onboarding | Selección de paquetes según problema [C]. |
| Personalización | Elección de paquetes y ejercicios propios; **no se adapta automáticamente, sin algoritmo de aprendizaje** [C web UKE]. |
| Recorridos / progresión | Paquetes temáticos; progresión estructurada N/V. |
| Juegos / interactivos | N/V. |
| Audio / video | N/V. |
| Registro emocional / diario / hábitos | N/V. |
| Objetivos / recordatorios / estadísticas | Recordatorios push opcionales [C]. Estadísticas: N/V. |
| Gamificación | N/V. |
| IA | No; sin algoritmo de aprendizaje [C]. |
| Psicólogo / informes / exportación | Autoayuda; no sustituye tratamiento profesional [C]. Exportación: N/V. |
| Seguridad, privacidad, crisis | "Sin rastreo de datos" [C ficha]. No apta para crisis agudas ni ideación suicida (declarado) [C]. Recursos de crisis integrados: N/V. |
| Accesibilidad / idiomas / plataformas | Android (de.uke.cogitoapp) e iOS ("COGITO (MCT)", id1557322291) [C]. Inglés (ficha iOS), alemán [C]; versiones en árabe y turco en la web UKE [S]; ensayo con usuarios polacos (DRKS00029996) [S]. Español: **N/V**. Variante "Glücklich (leicht)" en lenguaje sencillo para personas con discapacidad intelectual [S] (accesibilidad cognitiva). |

**Evidencia científica**
- Lüdtke, T., et al. (2018) (lista completa de autores no verificada en esta sesión). *A randomized controlled trial on a smartphone self-help application (Be Good to Yourself) to reduce depressive symptoms.* **Psychiatry Research**. N = 90; sin diferencias entre grupos en análisis por intención de tratar; efecto pequeño a nivel de tendencia en usuarios frecuentes (per protocol); 39% no la usó con frecuencia. Versión predecesora de COGITO [C: portal FIS UKE; S].
- Moritz, S., et al. (2024). *A Randomized Controlled Trial on COGITO, a Free Self-Help Smartphone App to Enhance Mental Well-Being.* **Journal of Psychiatric Research**. Se confirmaron sólo metadatos; **resultados no verificados** [S: AMiner].
- Bruhns, Lüdtke, Moritz & Bücker: estudio con estudiantes; desarrolladores reportan efectos grandes en autoestima y depresión; estado de publicación NV [A].
- DRKS00029996: ensayo en usuarios polacos, autoestima, N objetivo 220 [S].

**Fortalezas:** gratuita, sin rastreo, base académica con ECA; ejercicios breves y editables; multiproblema.
**Debilidades:** sin personalización adaptativa; sin crisis integrada; poca multimedia y registro (N/V); evidencia mixta (2018 nulo en ITT).
**Oportunidades:** modelo "ejercicios breves diarios + editables + gratuito" trasladable al español con más registro emocional y estadísticas.

---

### 5. PTSD Coach (U.S. Department of Veterans Affairs, National Center for PTSD)

| Aspecto | Hallazgo |
|---|---|
| Público y problema | Personas que tienen o pueden tener TEPT (veteranos y civiles); no hace falta estar en tratamiento, pero no sustituye la terapia [C: ptsd.va.gov / folleto VA]. PsychCentral advierte orientación militar [S]. |
| Propuesta de valor / precio | Gratuita, organismo público [C]. |
| Orientación terapéutica | TCC / estrategias basadas en TCC centrada en trauma [S]; mindfulness y relajación [S]. |
| Catálogo y profundidad | Cuatro áreas: Aprender, Seguimiento de síntomas, Manejar síntomas, Obtener apoyo [C press VA]. Herramientas de afrontamiento "en el momento" por síntoma (p. ej., mindfulness, relaciones, sueño) [S: Healthify]. |
| Psicoeducación | Información fiable sobre TEPT y tratamientos eficaces, información sobre atención profesional [C]. |
| Onboarding | N/V. |
| Personalización | Estrategias individualizadas; posibilidad de personalizar (menú "Personalizar") [C]. Detalle: N/V. |
| Recorridos / progresión | N/V (estructura por herramientas, no por programa). |
| Juegos / interactivos | N/V. |
| Audio / video | Pistas de audio de relajación guiada e imaginería [S]. |
| Registro emocional / diario / hábitos | Autoevaluación periódica de 20 ítems (PCL-5) [S]; la página en español indica que el PCL no reemplaza la evaluación profesional [C]. |
| Objetivos / recordatorios / estadísticas | Gráfico de puntuaciones, recordatorios [S]. |
| Gamificación | N/V. |
| IA | N/V (sin evidencia). |
| Psicólogo / informes / exportación | Exportar puntuaciones [S]; diseñada para complementar la atención [C]. |
| Seguridad, privacidad, crisis | Plan de seguridad digital para prevención del suicidio y enlaces directos de apoyo/crisis [S: army.mil, Healthify]; enlace a apoyos locales [C press VA]. No se envían a VA ni a terceros datos identificativos [C folleto VA; S Mozilla]. Sin login, funciona sin internet [S: Healthify]. Almacenamiento solo local: [S psiquiatria.com, NV oficial]. |
| Accesibilidad / idiomas / plataformas | iOS y Android [C]. Español: descargar la versión en inglés y cambiar el idioma en "Personalizar" [C: página en español de ptsd.va.gov]. Accesibilidad declarada: N/V. Existen variantes (PTSD Coach Canada; "PTSD Coach 3.1 Explorer" solo para estudio) [S]. |

**Evidencia científica**
- Kuhn, E., Kanuri, N., Hoffman, J. E., Garvert, D. W., & Ruzek, J. I. (2017). *A randomized controlled trial of a smartphone app for posttraumatic stress disorder symptoms.* **Journal of Consulting and Clinical Psychology, 85**(3), 267–273. doi:10.1037/ccp0000163. N = 120 (62 app vs 58 lista de espera), 3 meses; mejoras significativamente mayores en TEPT (p = .035), depresión (p = .005) y funcionamiento psicosocial (p = .007) [S: OJP/NCJRS].
- ECA de PTSD Coach con apoyo clínico en atención primaria de VA (título en University at Buffalo/SUNY ResearchConnect) [S]; autores/revista NV en esta sesión.
- Revisión Cochrane 2018 la incluye; evidencia inicial limitada [S].
- Análisis de uso VA: 10,6% de quienes la descargaron la seguían usando al año [S].

**Fortalezas:** gratuita, sin cuenta, en español, plan de seguridad, ECA publicado, psicoeducación fiable.
**Debilidades:** centrada en TEPT/veteranos; retención baja; el español requiere configuración manual.
**Oportunidades:** referencia de privacidad (sin cuenta, local) y de plan de seguridad integrado para cualquier app en español.

---

### 6. Sensa (Sensa: Mental Coach)

| Aspecto | Hallazgo |
|---|---|
| Público y problema | Ansiedad, estrés, depresión, procrastinación, TDAH, autoestima, burnout [A]; reseña la orienta a ansiedad leve, estrés agudo o depresión [S: ChoosingTherapy]. |
| Propuesta de valor / precio | Suscripción sin versión ni prueba gratuita: 29,99 USD/mes o 59,99 USD/6 meses [S: ChoosingTherapy, ~2023]; "desde 30,99 USD", renovación automática salvo cancelación 48 h antes; borrar la app no cancela [C ficha App Store]. El precio se muestra sólo tras un cuestionario y depende de duración (1/3/6 meses) [S]. |
| Orientación terapéutica | TCC [C ficha]. La app declara que no es terapia ni diagnostica o trata [C ficha]. |
| Catálogo y profundidad | Plan a largo plazo con lecciones diarias sobre emociones y patrones de pensamiento, sesiones de escritura libre, ejercicios (respiración, mindfulness) [C ficha / S]. Muy textual [S]. |
| Psicoeducación | Lecciones diarias [C ficha]. |
| Onboarding | Cuestionario inicial sobre desencadenantes que define el programa y el precio [S]. |
| Personalización | Programas "adaptados" según cuestionario [S/A]. |
| Recorridos / progresión | Plan con lecciones diarias [C ficha]. |
| Juegos / interactivos | N/V. |
| Audio / video | Carece de audio y video según reseña [S]. |
| Registro emocional / diario / hábitos | Diario de ánimo y actividades [C ficha / S]; la reseña pide mejor seguimiento del ánimo [S]. |
| Objetivos / recordatorios / estadísticas | N/V. |
| Gamificación | N/V. |
| IA | El nombre "Mental Coach" no implica IA; **sin evidencia de IA conversacional** [N/V]. |
| Psicólogo / informes / exportación | "Ejercicios recomendados por nuestros profesionales de salud mental" [A]. Vínculo con terapeuta/exportación: N/V. |
| Seguridad, privacidad, crisis | Descargo "no sustituye terapia" [C]. Recursos de crisis: N/V. Privacidad: N/V. Quejas de cobros tras cancelar y subidas de precio no consentidas (Trustpilot 2,5/5, ~333 reseñas) [S, afirmaciones de usuarios]. |
| Accesibilidad / idiomas / plataformas | iOS y Android; Google Play 3,6★ (~3.510 reseñas) [S]. Español: la URL indicada es sensa.health/**es/**, lo que sugiere web en español, pero no se pudo abrir ni confirmar que la app esté traducida [NV]. |

**Evidencia científica**
- Valinskas, S., Nakrys, M., Aleknavicius, K., & Jonusas, J. (2023). *Sensa Mobile App for Managing Stress, Anxiety, and Depression Symptoms: Pilot Cohort Study.* **JMIR Formative Research, 7**, e40671. doi:10.2196/40671. Revisión retrospectiva de 381 usuarios (81,5% mujeres), DASS-21 ≥2 veces; reducciones significativas (depresión 11,05→9,01; estrés 11,42→9,96); uso >24 días y ≥12 días activos asociado a OR 3,46 (depresión) y 2,64 (ansiedad). Sin grupo control; afiliación de autores con la empresa probable pero NV [C: PMC10141277].

**Fortalezas:** programa diario estructurado y onboarding por cuestionario (embudo comercial efectivo); estudio publicado (débil).
**Debilidades:** caro, sin versión gratuita; prácticas de facturación criticadas; muy textual; sin crisis visible.
**Oportunidades:** demuestra demanda de "programa diario guiado" en español; espacio para una alternativa gratuita, transparente y con multimedia.

---

### Fuentes (consultadas 2026-10-15 vía WebSearch; WebFetch falló con ENOTFOUND)

**MindShift CBT**
- https://apps.apple.com/app/mindshift-cbt-anxiety-relief/id634684825 — aviso de cierre 31-mar-2025 y borrado de datos; herramientas (diario de pensamientos, fear ladder).
- https://apps.apple.com/us/app/-/id634684825 — descripción de herramientas TCC.
- https://healthify.nz/apps/m/mindshift-app/ — psicoeducación, seguimiento de ansiedad, foro, objetivos, recordatorios.
- https://helpstartshere.gov.bc.ca/resource/mindshift-cbt-app-0 — gratuita, iOS/Android, uso con profesional.
- https://www.canhealth.com/2021/09/30/mindshift-cbt-app-helps-people-cope-with-anxiety/ — herramientas, chill zone, quick relief, comunidad.
- https://internet.psych.wisc.edu/wp-content/uploads/532-Master/532-UnitPages/Unit-12/PsychCentral_MentalHealth_Apps_2022.pdf — orientación a jóvenes; crítica del seguimiento de ánimo.
- https://www.choosingtherapy.com/recommends/mindshift-cbt-google/ — check-in con gráficos; experimentos de creencias.
- https://concordia.ch/en/gesundheit/gesundheitskompass/digitale-begleiter/gesundheits-apps/psychische-erkrankungen/mindshift-cbt.html — idiomas inglés y francés.
- https://foundation.mozilla.org/privacynotincluded/mindshift-cbt/ — datos recogidos, contraseña débil, foro 18+, política 2021.
- https://clinicaltrials.gov/study/NCT04562948 — ensayo abierto 16 semanas.
- https://www.uwindsor.ca/dailynews/node/1367241 — financiación de Anxiety Canada a Rappaport.
- https://scholar.uwindsor.ca/etd/9210 — tesis, 154 adultos, resultados sin control.
- https://anzctr.org.au/Trial/Registration/TrialReview.aspx?id=378263 — estudio de caso único con 5 apps.

**ToolPsy**
- https://toolpsy.com/ — título "Plateforme TCC Professionnelle"; tests psicométricos y ejercicios TCC (sólo snippet; WebFetch falló).
- https://www.laurathomas-psychologue.com/index.html — dirigida a profesionales; no sustituye el juicio clínico.
- https://summoning.systems/software — SaaS para psicólogos, desarrollador.
- https://www.linkedin.com/in/alix-maurin-6a2354169/ — lanzamiento v1, cuenta gratuita con 2 pacientes.
- (toolpsy.app: sin resultados; WebFetch ENOTFOUND.)

**DBT Coach**
- https://apps.apple.com/us/app/-/id1452264969 — precios, prueba gratuita, funciones, compartir con terapeuta.
- https://www.bluestacks.com/campaign/co.swasth.dbtcoach/en — réplica de la ficha de Google Play (videos, animaciones, diary card, premios).
- https://apps.appfollow.io/ios/dbt-coach/1452264969?country=pt — editor Swasth Inc., última actualización 2019.
- https://community.counseling.org/blogs/david-metzner1/2021/04/10/DBT-applications-for-BPD — pestaña de crisis; popularidad.
- https://similarweb.com/app/apple/1452264969 / https://apps.appfollow.io/ios/dbt-coach/1452264969?country=us — referencia a Resiliens Inc. y 4,6★.

**COGITO**
- https://apps.apple.com/ae/app/cogito-mct/id1557322291 — gratuita, donaciones, sin anuncios ni rastreo; TCC+MCT; paquetes.
- https://dev.clinical-neuropsychology.de/cogito-en/ — ejercicios cortos, recordatorios, ejercicios propios, sin algoritmo de aprendizaje, evidencia, no apta para crisis.
- https://clinical-neuropsychology.de/news-and-updates — versiones árabe y turca.
- https://clinical-neuropsychology.de/app_en — información de la app.
- https://www.uni-hamburg.de/newsroom/forschung/2021/0831-app-cogito.html — anuncio institucional 2021.
- https://fis.uke.de/portal/de/publications/a-randomized-controlled-trial-on-a-smartphone-selfhelp-application-be-good-to-yourself-to-reduce-depressive-symptoms(241e5ada-233f-4be9-89ec-c4eb5fe366e3)/export.html — Lüdtke et al. 2018.
- https://aminer.org/pub/604b4ae56f90b7f6ca32950c — metadatos Moritz et al. 2024 (J Psychiatr Res).
- https://trial.medpath.com/zh/clinical-trial/ff5df64f4f9927fe/drks00029996-effectiveness-self-help-app-self-esteem-polish-users — ensayo DRKS00029996.
- https://apps.apple.com/app/id1623144738 — Oberberg COGITO.
- https://apps.apple.com/de/app/gl%C3%BCcklich-leicht/id1586781024 — Glücklich (leicht), lenguaje sencillo.

**PTSD Coach**
- https://www.ptsd.va.gov/spanish/resources/ptsdcoach_app_SP.asp — gratuita; cómo activar el español; PCL no sustituye evaluación (snippet; WebFetch falló).
- https://ptsd.va.gov/PTSD/appvid/mobile/ptsdcoach_app.asp — disponible en inglés y español; funciones.
- https://www.va.gov/opa/pressrel/pressrelease.cfm?id=2080 — cuatro funciones; apoyo local.
- https://pueblo.gpo.gov/PTSD/pdf/PTSD69.pdf — folleto VA: no requiere tratamiento; sin envío de datos identificativos; plataformas.
- https://apps.apple.com/app/id430646302 — psicoeducación, autoevaluación, herramientas.
- https://healthify.nz/apps/p/ptsd-coach-app — sin login, sin internet, herramientas por síntoma.
- https://www.army.mil/article/250409/using_ptsd_coach_for_suicide_prevention_planning — plan de seguridad.
- https://eastersealstech.com/2019/09/18/ptsd-coach-app-for-anxiety-panic-attacks — audios de relajación, gráficos, exportar, recordatorios.
- https://psiquiatria.com/inteligencia-artificial/ptsd-coach--1/ — PCL-5, datos en el dispositivo, sin cuenta.
- https://www.mozillafoundation.org/es/privacynotincluded/ptsd-coach/ — privacidad.
- https://www.ojp.gov/ncjrs/virtual-library/abstracts/randomized-controlled-trial-smartphone-app-posttraumatic-stress — Kuhn et al. 2017.
- https://researchconnect.buffalo.edu/en/publications/a-randomized-clinical-trial-of-clinician-supported-ptsd-coach-in- — ECA con apoyo clínico (título).
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6516951/table/table-wrap10 — inclusión en Cochrane 2018.
- https://internet.psych.wisc.edu/wp-content/uploads/532-Master/532-UnitPages/Unit-12/PsychCentral_MentalHealth_Apps_2022.pdf — valoraciones y sesgo militar; retención 10,6% (vía resultado).

**Sensa**
- https://apps.apple.com/us/app/sensa-mental-coach/id1570824278 — TCC, lecciones diarias, diario de ánimo, precio desde 30,99 USD, renovación, descargo.
- https://www.choosingtherapy.com/sensa-app-review/ — precio, sin prueba, cuestionario previo, sin audio/video, valoración Google Play.
- https://www.trustpilot.com/review/www.sensa.health — 2,5/5 y quejas de facturación.
- https://getinflow.io/post/adhd-apps-inflow-vs-sensa — cuestionario de desencadenantes; contenido textual (fuente competidora).
- https://thedailyworld.com/?p=73186 — mención de TDAH/procrastinación/burnout (fuente débil).
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10141277/ — Valinskas et al. 2023, JMIR Form Res.

---

### Tabla de puntuaciones (0 = ausente, 1 = básico, 2 = bueno, 3 = destacado; N/V = sin evidencia)

Notas: MindShift se puntúa por su funcionalidad documentada, pero está discontinuada (afecta R24/R21 en la práctica). ToolPsy se puntúa por toolpsy.com (identidad con toolpsy.app no verificada). "0" sólo cuando hay evidencia de ausencia.

| Id | Requisito | MindShift CBT | ToolPsy | DBT Coach | COGITO | PTSD Coach | Sensa |
|---|---|---|---|---|---|---|---|
| R01 | psicoeducación | 2 | N/V | 3 | N/V | 3 | 2 |
| R02 | habilidades guiadas paso a paso | 2 | 1 | 3 | 2 | 2 | 2 |
| R03 | registro de pensamientos | 3 | N/V | N/V | N/V | N/V | 1 |
| R04 | exposición gradual | 3 | N/V | N/V | N/V | N/V | N/V |
| R05 | experimentos conductuales | 2 | N/V | N/V | N/V | N/V | N/V |
| R06 | regulación emocional DBT | 0 | N/V | 3 | N/V | N/V | N/V |
| R07 | mindfulness guiado audio | 2 | N/V | N/V | N/V | 2 | 0 |
| R08 | recorridos estructurados | N/V | N/V | 2 | 2 | 1 | 2 |
| R09 | personalización por objetivos | 1 | N/V | N/V | 2 | 1 | 2 |
| R10 | recomendación de herramienta según estado | 1 | N/V | N/V | 0 | 2 | 1 |
| R11 | diario/registro emocional | 2 | N/V | 3 | N/V | 1 | 2 |
| R12 | seguimiento de hábitos | 2 | N/V | 2 | N/V | N/V | 1 |
| R13 | objetivos y recordatorios | 2 | N/V | N/V | 2 | 2 | N/V |
| R14 | estadísticas/gráficos | 2 | N/V | 2 | N/V | 2 | N/V |
| R15 | gamificación | N/V | N/V | 1 | N/V | N/V | N/V |
| R16 | IA conversacional | N/V | N/V | N/V | 0 | N/V | N/V |
| R17 | informes/exportación para terapeuta | N/V | 2 | 3 | N/V | 1 | N/V |
| R18 | vínculo con profesional | 1 | 3 | 3 | 0 | 1 | N/V |
| R19 | recursos de crisis | N/V | N/V | 2 | 1 | 3 | N/V |
| R20 | plan de seguridad | N/V | N/V | N/V | N/V | 3 | N/V |
| R21 | privacidad/sin cuenta | 0 | N/V | N/V | 3 | 3 | N/V |
| R22 | accesibilidad declarada | N/V | N/V | N/V | 2 | N/V | N/V |
| R23 | español | N/V | N/V | N/V | N/V | 2 | N/V |
| R24 | gratuito | 3 | 1 | 0 | 3 | 3 | 0 |
| R25 | contenido infantil/familias | 1 | N/V | N/V | N/V | N/V | N/V |
| R26 | evidencia publicada de la app | 1 | 0 | 0 | 2 | 3 | 1 |
| R27 | simulaciones/juegos con fin terapéutico | N/V | N/V | 1 | N/V | N/V | N/V |
| R28 | comunidad | 3 | N/V | N/V | N/V | 1 | N/V |

Justificación breve de puntuaciones discutibles:
- MindShift R21 = 0: cuenta obligatoria con email/teléfono (Mozilla). R25 = 1: diseñada para jóvenes, sin contenido familiar específico confirmado. R26 = 1: sólo ensayo abierto/tesis.
- ToolPsy R18 = 3 y R17 = 2: es una plataforma para el profesional con expedientes y tests (anunciado). R24 = 1: freemium (2 pacientes). R26 = 0: no se encontró evidencia.
- DBT Coach R24 = 0: suscripción tras prueba. R15/R27 = 1: premios y hojas interactivas/animaciones, no juegos terapéuticos.
- COGITO R22 = 2: variante en lenguaje sencillo (Glücklich (leicht)), no accesibilidad de la app principal. R10 = 0: declara no adaptarse. R19 = 1: sólo advierte que no es apta para crisis. R18 = 0: autoayuda.
- PTSD Coach R28 = 1: enlaces a apoyo/grupos, no comunidad dentro de la app. R23 = 2: español disponible pero hay que activarlo manualmente.
- Sensa R07 = 0: la reseña indica ausencia de audio/video. R26 = 1: cohorte retrospectiva sin control. R23 = N/V: web /es/ no verificada.


## Grupo B — Autorregulación, apoyo emocional y personalización


**Fecha de consulta:** 2026-10-15
**Método:** se intentó WebFetch una vez por cada sitio oficial (los 7 fallaron con `getaddrinfo ENOTFOUND`; curl vía proxy devolvió `CONNECT tunnel failed, 403`). Toda la evidencia procede de WebSearch (modo standard y extended), es decir, de **fragmentos indexados** de páginas oficiales, fichas de tiendas, prensa y artículos académicos. No se instaló ni probó ninguna app.

**Etiquetas de evidencia:**
- **[CO]** confirmada (fuente oficial: web del proveedor o ficha de tienda publicada por el desarrollador, leída mediante fragmento de buscador)
- **[AP]** anunciada por el proveedor (nota de prensa, marketing, cifras autodeclaradas)
- **[FS]** fuente secundaria (prensa, reseñas, artículos académicos, agregadores)
- **[NV]** no verificada / sin evidencia
- **N/V** = no hay evidencia disponible

> Advertencia general: aunque [CO] indica que la frase aparece en una página oficial, se leyó a través del resumen del buscador, no de la página completa. Conviene revisarlo cuando haya acceso directo.

---

### 7. Kalmo (https://www.kalmo.ai/es)

**Estado de la evidencia: sin evidencia.** El sitio no resolvió (ENOTFOUND). Cinco búsquedas (en español, en inglés, y limitadas a Google Play, App Store y kalmo.ai) no devolvieron **ninguna** página de kalmo.ai ni ninguna ficha de tienda de una app «Kalmo». Solo aparecieron productos con nombres parecidos y sin relación: Kalm, Kaalmo (marketplace de cuidadores en el Reino Unido), Kalmoa (bienestar con lectura de ondas cerebrales), Kalmia, Calmi y Kalmy.

| Dimensión | Hallazgo |
|---|---|
| Público y problema | N/V |
| Propuesta de valor / modelo de negocio / precio | N/V |
| Orientaciones terapéuticas | N/V |
| Catálogo y profundidad de ejercicios | N/V |
| Psicoeducación | N/V |
| Onboarding | N/V |
| Personalización | N/V |
| Recorridos/progresión | N/V |
| Juegos/interactivos | N/V |
| Audio/video | N/V |
| Registro emocional/diario/hábitos | N/V |
| Objetivos/recordatorios/estadísticas | N/V |
| Gamificación | N/V |
| **IA y sus límites** | N/V. El dominio .ai sugiere que el producto se apoya en IA, pero es solo una **inferencia [NV]**. No se encontró ninguna declaración sobre el modelo usado, sus límites, la supervisión clínica ni la derivación. |
| Psicólogo / informes / exportación | N/V |
| Seguridad, privacidad, crisis | N/V |
| Accesibilidad, idiomas, plataformas | La URL `/es` sugiere una versión en español [NV]. Lo demás, N/V. |
| Evidencia científica | No se encontró ninguna. |

**Fortalezas:** N/V. **Debilidades:** visibilidad nula en buscadores y tiendas. Puede ser un producto muy nuevo, de nicho o con otro nombre comercial [NV]. **Oportunidades:** si es un chat de IA en español, el espacio parece disputado por Psicólogo IA, Almia y Calmi, que aparecieron en las búsquedas [FS].

---

### 8. Jenora (https://www.jenora.com/es)

**Estado de la evidencia: buena en fuentes oficiales; no hay evaluación independiente.**

| Dimensión | Hallazgo |
|---|---|
| Público y problema | Personas en terapia o en recuperación que quieren apoyo entre sesiones. Se presenta como «Companion for Therapy» y «Mental Health & Therapy Companion App» [CO]. |
| Propuesta de valor | Check-ins diarios, planificación basada en valores, seguimiento de patrones emocionales para detectar la «deriva» (drift) antes de que se convierta en crisis, plan de recuperación y opción de compartir datos con el terapeuta. Usa los valores y rutinas propios del usuario «en lugar de consejos genéricos» [CO/AP]. |
| Modelo de negocio / precio | Gratuita durante el acceso anticipado. El proveedor planea mantener gratis las herramientas básicas, incluidos los recursos de crisis, y cobrar una suscripción premium por las funciones avanzadas: soporte guiado por IA y personalización completa del plan [CO, FAQ]. No se publica el precio [NV]. |
| Orientaciones terapéuticas | Sistema propio «Life in Sync» con un marco de «Three Zones» que, según el sitio, se basa en TCC y en trabajo con valores [CO/AP]. |
| Catálogo de ejercicios | Check-ins, diario, trabajo de objetivos y «tareas de terapia» entre sesiones [CO]. El catálogo y su profundidad son N/V. |
| Psicoeducación | Existe un «Depression Learning Centre» con varias partes; por ejemplo, la parte 1: «What Is Depression? Understanding More Than Sadness» [CO]. |
| Onboarding | Proceso guiado de autodescubrimiento. Los valores que salen de él anclan cada check-in y cada rutina [CO]. |
| Personalización | Por valores y rutinas, con sugerencias de «roadmap» personalizadas generadas por IA [CO]. |
| Recorridos/progresión | Plan de recuperación / roadmap [CO]. La estructura de niveles o módulos es N/V. |
| Juegos/interactivos | N/V |
| Audio/video | N/V |
| Registro emocional/diario/hábitos | Check-ins diarios, diario y rutinas [CO]. |
| Objetivos/recordatorios/estadísticas | Objetivos [CO]. Seguimiento de patrones o «drift» [CO]. Gráficos concretos y recordatorios: N/V. Integración **opcional y de solo lectura** con datos de salud como sueño y frecuencia cardiaca [CO]. |
| Gamificación | N/V |
| **IA y sus límites** | Un compañero de IA llamado **Ori** ayuda a reflexionar sobre momentos difíciles, según la ficha de Google Play [CO]. La IA también genera resúmenes de reflexión del diario y sugerencias de roadmap. Todo ese contenido va **etiquetado como generado por IA**, **no lo revisa un profesional antes** de que lo vea el usuario y **nunca se usa para diagnosticar** [CO, FAQ]. La app afirma que no diagnostica ni sustituye la terapia [CO]. No se encontró qué modelo usa ni cómo se evalúan sus riesgos [NV]. |
| Psicólogo / informes / control de lo compartido | **Punto fuerte.** El terapeuta no ve nada hasta que el usuario vincula la cuenta y **elige qué categorías** de datos compartir. El acceso se puede **revocar en cualquier momento** con efecto inmediato y **todo acceso del terapeuta queda registrado** [CO, FAQ]. Exportar a PDF u otros formatos: N/V. |
| Seguridad, privacidad, crisis | **No es un servicio de crisis** [CO]. Si se activa su «safety flow», muestra números de emergencia y líneas de ayuda de la zona del usuario [CO]. Los recursos de crisis siguen siendo gratuitos [CO]. Plan de seguridad estructurado: N/V. Certificaciones (HIPAA, GDPR): N/V. |
| Accesibilidad, idiomas, plataformas | iOS (App Store), Android (Google Play) y una app web completa [CO]. La URL `/es` sugiere español en la web [NV]. No se encontró ninguna declaración de accesibilidad [NV]. Desarrollador: Jenora Wellness [FS]. |
| Evidencia científica | No se encontraron estudios ni reseñas independientes [NV]. |

**Fortalezas:** buen diseño del «puente con el terapeuta», con consentimiento granular, revocación y registro de accesos. Transparencia sobre los límites de la IA. Enfoque en valores. Multiplataforma, web incluida.
**Debilidades:** sin evidencia clínica. Precio premium sin publicar. Catálogo de ejercicios poco documentado. Funciona como complemento de terapia y no tanto como autoayuda completa.
**Oportunidades:** combinar ese modelo de compartir con consentimiento con informes exportables y un catálogo de técnicas TCC/DBT paso a paso.

---

### 9. Amira Argentina (https://www.amira.ar/)

**Estado de la evidencia: sin evidencia.** El sitio no resolvió (ENOTFOUND). Ni las búsquedas en español ni las limitadas a tiendas y a amira.ar encontraron nada del producto. Solo aparecieron homónimos sin relación: «Amira: Ayudante de tareas IA» (app escolar), Amira Health Inc./Amira Terra (dispositivo para los sofocos) y Amiya.

| Dimensión | Hallazgo |
|---|---|
| Público, propuesta, precio, terapias, ejercicios, psicoeducación, onboarding, personalización, recorridos, juegos, audio/video, diario, objetivos, gamificación | N/V |
| **IA y sus límites** | N/V. No se encontró ninguna descripción del producto. **Contexto [FS]:** en Argentina, la app de IA «Cux» (Connie Ansaldi) se frenó en 2024 tras las críticas del Colegio de Psicólogas y Psicólogos de la provincia de Buenos Aires, y la Federación de Psicólogos de la República Argentina emitió un comunicado sobre los riesgos de la IA como terapeuta (MDZ, 0223). Este contexto regulatorio y profesional es relevante para cualquier acompañante de IA argentino. |
| Psicólogo / informes | N/V |
| Seguridad, privacidad, crisis | N/V |
| Idiomas / plataformas | El dominio .ar sugiere español rioplatense y mercado argentino [NV]. |
| Evidencia científica | No se encontró ninguna. |

**Fortalezas / debilidades:** N/V. **Oportunidad [FS]:** en Argentina hay una adopción declarada alta pero poco conocimiento de las apps de salud mental. Un estudio (Garay y Celleri, Psicodebate) encontró que el 73,7 % no conocía estas apps y que el 75,1 % las usaría. Una revisión en Redalyc señala que las apps argentinas de ansiedad no se basan en estudios de eficacia.

---

### 10. Wysa (https://www.wysa.com/)

**Estado de la evidencia: la mejor del grupo. Hay ensayos publicados, aunque con limitaciones.**

| Dimensión | Hallazgo |
|---|---|
| Público y problema | Adultos con estrés, ansiedad, ánimo bajo y sueño, entre otros. Tiene un canal B2B fuerte: empleadores, aseguradoras, NHS (Reino Unido) y Ministerio de Salud de Singapur [FS: TechCrunch, psiquiatria.com]. |
| Propuesta de valor | Chatbot de IA, el «pingüino», que guía técnicas basadas en evidencia, más herramientas de autoayuda y coaching humano opcional [CO/FS]. |
| Modelo de negocio / precio | Freemium. El chatbot y algunas herramientas son gratuitos. **Premium** da la biblioteca completa de herramientas, y el **coaching** (sesiones y mensajería asíncrona ilimitada) tiene coste adicional en algunas regiones [CO, FAQ/blog]. Acceso premium gratuito a través de empleador, centro educativo o aseguradora [CO]. Precios publicados: USD 49,99/año [FS, posiblemente desactualizado]; la ficha de App Store muestra USD 99,99 (Coach + Tools, mensual) y USD 99,99/año (Tools) [CO, la vigencia no está verificada]. Precios enterprise a medida [FS]. |
| Orientaciones terapéuticas | TCC, DBT, mindfulness y activación conductual [CO: página «AI CBT»; FS: psiquiatria.com]. |
| Catálogo y profundidad | «Más de 200 herramientas» y programas guiados («Packs») sobre sueño, ansiedad, duelo y otros temas [FS, agregador]. La cifra exacta no está verificada en la fuente oficial. |
| Psicoeducación | Integrada en las conversaciones y herramientas [FS]. Detalle: N/V. |
| Onboarding | Uso **sin login ni nombre de usuario** según la empresa (2022), para reducir el estigma [AP/FS]. |
| Personalización | La IA recomienda herramientas según lo que el usuario escribe [FS]. Detalle técnico: N/V. |
| Recorridos/progresión | «Packs» o programas guiados [FS]. |
| Juegos/interactivos | N/V |
| Audio/video | Meditaciones y mindfulness guiados [FS]. El formato exacto es N/V. |
| Registro emocional/diario/hábitos | Seguimiento del ánimo y diario [FS]. |
| Objetivos/recordatorios/estadísticas | Seguimiento del ánimo a lo largo del tiempo y «analíticas más profundas» en premium [FS]. Recordatorios: N/V. |
| Gamificación | N/V |
| **IA y sus límites** | Agente conversacional que guía técnicas, históricamente con flujos clínicos guionizados [FS]. Según psiquiatria.com, la política de privacidad describe herramientas que **detectan y sustituyen datos personales** escritos por accidente, y solo se envían al modelo de lenguaje **datos derivados y anonimizados** (ánimo, temas, herramientas usadas) [FS, no contrastado con la política original]. **Designación FDA Breakthrough Device (mayo de 2022)** para dolor musculoesquelético crónico con depresión o ansiedad asociadas en mayores de 18 años. **No es una aprobación ni autorización de la FDA** [FS: MedCity News, HIT Consultant]. Cumple el estándar de seguridad clínica **DCB0129** del NHS [FS: TechCrunch]. ORCHA: 92-93 % global y 100 % en seguridad clínica [AP, cifras de la propia empresa]. El coaching humano **no es un servicio de crisis** [CO, FAQ]. |
| Psicólogo / informes | Coaches o terapeutas humanos por texto o sesión (de pago, según región) [CO]. Informes o exportación hacia un terapeuta externo: N/V. Versión para servicios clínicos (NHS) [FS]. |
| Seguridad, privacidad, crisis | Botón **SOS gratuito** con **plan de seguridad personal**, ejercicios de grounding y líneas de crisis [CO, FAQ y página de producto]. Uso anónimo en la versión gratuita [FS]. Política de privacidad en legal.wysa.io [CO]. |
| Accesibilidad, idiomas, plataformas | iOS y Android [CO]. Idiomas: **las fuentes oficiales se contradicen**. Un blog dice inglés y español. El boletín «Wise Up» dice que la autoayuda llega a 10 idiomas, incluido el español, y que la herramienta Gateway está en FR, DE, IT, AR, JA, PT-BR, ES, HI y EN. La política de privacidad dice que «servicios selectos» están en ES, FR, DE, PT-BR y lenguas de India. Coaches humanos en EN, ES, HI, PA, BN, MR y UR [CO]. Accesibilidad declarada: N/V. |
| Evidencia científica (citas encontradas) | 1) Inkster B, Sarda S, Subramanian V. *An Empathy-Driven, Conversational Artificial Intelligence Agent (Wysa) for Digital Mental Well-Being: Real-World Data Evaluation Mixed-Methods Study.* JMIR mHealth uHealth 2018;6(11):e12106. Estudio observacional, no ECA; los autores piden muestras mayores [FS]. 2) MacNeill AL, Doucet S, Luke A. ECA en adultos con enfermedad crónica (artritis o diabetes), n=68, 4 semanas, PHQ-9. JMIR Form Res 2024;8:e50025, doi:10.2196/50025, NCT04620668. El resumen alojado por Wysa reporta un −39 % en síntomas depresivos (p<.001) frente a ningún cambio en el control [FS + AP en el resumen del proveedor]. 3) Piloto de viabilidad con trabajadores sanitarios de Singapur (JMIR Form Res 2024): el 80,1 % (422/527) completó al menos 2 sesiones [FS]. 4) ECA mixto en NHS Talking Therapies (Central and North West London) con pacientes en lista de espera. ISRCTN10327977, completado. 76 aleatorizados (2:1) y 30 pérdidas en el seguimiento. Según el resumen, las diferencias medias en depresión a 12 semanas fueron **similares entre brazos** [FS: Plymouth research portal, ISRCTN, psiquiatria.com]. Varios estudios tienen autores de la empresa [FS: psiquiatria.com]. PsyberGuide (tabla de 2020): 3,86 «Acceptable» [FS, la alineación de columnas no está clara]. |

**Fortalezas:** la mayor base de evidencia del grupo. SOS gratuito con plan de seguridad. Uso anónimo. TCC, DBT y mindfulness. Presencia en español. Canal B2B y sanitario consolidado.
**Debilidades:** la evidencia de eficacia es modesta. El ECA del NHS no muestra superioridad clara. Hay conflictos de interés en parte de los estudios. Precios y disponibilidad de idiomas confusos. El coaching humano es de pago o depende de la región.
**Oportunidades:** ofrecer en español, gratis y con transparencia lo que Wysa cobra o limita por región: informes para el terapeuta, recorridos estructurados y un plan de seguridad rico.

---

### 11. Araam (https://araam.org/es)

**Estado de la evidencia: solo nota de prensa autopublicada (ABNewswire, 21-09-2026, sindicada en openPR y Nebraska News Desk). Todo es [AP].**
Nota: existen homónimos sin relación, como Araam Wellness (meditación para musulmanes, araam.app) y Araamma.

| Dimensión | Hallazgo |
|---|---|
| Público y problema | Estrés cotidiano, ansiedad, sobrepensamiento (overthinking), dificultades de sueño y retos emocionales [AP]. |
| Propuesta de valor / precio | Plataforma **gratuita** de bienestar mental basada en navegador, sin necesidad de descargar app [AP]. Modelo de ingresos: N/V. |
| Orientaciones terapéuticas | Elementos de TCC (reestructuración de pensamientos, registros de pensamiento, tiempo de preocupación programado), mindfulness y grounding [AP]. No se declara una orientación formal [NV]. |
| Catálogo de ejercicios | Respiración, meditación guiada, diario, registro de ánimo, ejercicios de reestructuración de pensamientos y cuestionarios de cribado [AP]. Profundidad: N/V. |
| Psicoeducación | «Mental Wellness Guides» sobre ansiedad, ataques de pánico, sueño, estrés y burnout, ánimo bajo, sobrepensamiento, autocuidado y concentración. La guía de sobrepensamiento incluye tiempo de preocupación programado, registros de pensamientos, grounding sensorial y escritura libre [AP]. |
| Onboarding | N/V |
| Personalización | N/V |
| Recorridos/progresión | Programas de varias semanas sobre mindfulness, gratitud, sueño, movimiento y habilidades para la ansiedad, con sesiones de 10 a 20 minutos [AP]. |
| Juegos/interactivos | N/V |
| Audio/video | Meditación guiada [AP]. El formato de audio no está confirmado [NV]. |
| Registro emocional/diario/hábitos | Diario y registro de ánimo [AP]. Hábitos: N/V. |
| Objetivos/recordatorios/estadísticas | N/V |
| Gamificación | N/V |
| IA y sus límites | Tiene funciones de IA no especificadas. El contenido del diario **solo se envía a la IA cuando el usuario lo solicita** [AP]. |
| Psicólogo / informes | N/V |
| Seguridad, privacidad, crisis | Las entradas del diario se guardan en la cuenta del usuario. Se puede **activar cifrado de extremo a extremo** [AP]. Los cuestionarios son **de cribado, no diagnósticos**. La plataforma declara que **no sustituye** el diagnóstico ni el tratamiento profesional [AP]. Recursos de crisis: N/V. |
| Accesibilidad, idiomas, plataformas | Web. La URL `/es` sugiere español [NV]. Accesibilidad: N/V. |
| Evidencia científica | Ninguna encontrada. |

**Fortalezas:** gratis, sin instalación, con psicoeducación por problema y programas cortos. Incluye técnicas TCC concretas como el registro de pensamientos y el tiempo de preocupación.
**Debilidades:** producto muy reciente (septiembre de 2026), sin validación independiente. Requiere cuenta. No se encontraron recursos de crisis.
**Oportunidades:** es el competidor gratuito y web más cercano a una propuesta de psicoeducación + TCC en español. Puede diferenciarse con plan de seguridad, exposición gradual e informes para el terapeuta.

---

### 12. Kalisme (https://www.kalisme.com/es)

**Estado de la evidencia: ficha de App Store «Kalisme: let yourself be happy» (desarrollador Hakan Kaynar, id6767380889), que enlaza la política de privacidad en kalisme.com/privacy.** Esto **sugiere** que es el mismo producto que kalisme.com [NV, no se pudo leer el sitio].

| Dimensión | Hallazgo |
|---|---|
| Público y problema | Bienestar general o felicidad («let yourself be happy») [CO]. No apunta a un trastorno concreto. |
| Propuesta de valor / precio | «Manifiesto, cuaderno, respiración». **Gratis con compras dentro de la app**; el manifiesto es gratuito [CO]. Existe un sitio aparte, «I Am Rich — Kalisme Edition», con una app de pago de CHF 499, sin suscripción, con 5 módulos y 15 idiomas [FS]; su relación exacta con la app es N/V. Un juego («Where's My Balloon?») publicado por un desarrollador «Kalisme» parece otro proyecto [FS]. |
| Orientaciones terapéuticas | Filosofía propia (manifiesto) más respiración [CO]. No declara una orientación clínica [NV]. |
| Catálogo de ejercicios | Respiración y cuaderno [CO]. Profundidad: N/V. |
| Psicoeducación | Manifiesto de **13 capítulos** para leer o escuchar **sin conexión** [CO]. Es filosófico más que psicoeducativo [NV]. |
| Onboarding | N/V |
| Personalización | Disposición «Orbit Home» y cuatro «moods» visuales (Solar, Brown and gold, Mist, Ink) que se aplican en la app, Apple Watch y widgets [CO]. Con consentimiento, «Kal» usa el historial de práctica, el ánimo y lo que el usuario abre en la app. El procesamiento ocurre **en el dispositivo**, y el usuario ve qué datos usa Kal, elige las fuentes y puede resetear o cortar el acceso [CO]. |
| Recorridos/progresión | Capítulos del manifiesto [CO]. Lo demás, N/V. |
| Juegos/interactivos | N/V |
| Audio/video | Audio del manifiesto («escuchar») [CO]. |
| Registro emocional/diario/hábitos | Cuaderno; registro de «mood» usado por Kal [CO]. Hábitos: N/V. |
| Objetivos/recordatorios/estadísticas | Historial de práctica [CO]. Lo demás, N/V. |
| Gamificación | N/V |
| IA y sus límites | «Kal» funciona con señales personales procesadas en el dispositivo [CO]. La ficha **no aclara si Kal es un LLM conversacional** [NV]. |
| Psicólogo / informes | N/V |
| Seguridad, privacidad, crisis | **Fuerte en privacidad.** El «Circle» es para unas pocas personas invitadas una a una mediante un enlace que comparte el propio usuario: sin cuenta, sin directorio y sin sugerencias de amigos. Los mensajes van **cifrados de extremo a extremo** en el iPhone. El relay está alojado en la UE, no guarda claves y borra los datos a los 7 días. No accede al GPS. Etiquetas de privacidad: datos «no vinculados a ti» (autodeclaradas, no verificadas por Apple) [CO]. Recursos de crisis: N/V. |
| Accesibilidad, idiomas, plataformas | iOS 17+, Apple Watch y widgets [CO]. **15 idiomas** para el manifiesto [CO]; español: probable por la URL `/es` [NV]. Android: N/V. Accesibilidad: N/V. |
| Evidencia científica | Ninguna. |

**Fortalezas:** privacidad sin cuenta, con procesamiento en el dispositivo y E2E. Estética cuidada. Multilingüe y sin conexión. Comunidad íntima por invitación.
**Debilidades:** no es una herramienta clínica. Contenido filosófico más que basado en evidencia. Solo iOS. Sin crisis ni vínculo profesional. La marca es confusa (edición de CHF 499).
**Oportunidades:** su modelo de privacidad (sin cuenta, IA local, transparencia de señales) es un referente para un producto propio.

---

### 13. Mente Sana (https://mentesanapsicologia.com/marketing-app)

**Estado de la evidencia: páginas oficiales (soporte-app, descargar-app, incluido, home) y ficha de Google Play. La prensa de 2022 (Moncloa) tiene tono patrocinado.** La página concreta `/marketing-app` no se pudo leer.

| Dimensión | Hallazgo |
|---|---|
| Público y problema | Pacientes hispanohablantes (España y Europa) que buscan psicología online asequible. Hay páginas por problema, como insomnio o «sobrevivir en automático» [CO]. Operador: Royal Gala SL, Granada [FS/CO, ficha de Play]. |
| Propuesta de valor | Clínica de terapia online con una **app de acompañamiento** que incluye terapia por videoconsulta, meditaciones, audios, audiolibros, cursos en video y diario emocional [CO]. |
| Modelo de negocio / precio | «Diagnóstico» de **9,99 €**: informe clínico personalizado, asignación de psicóloga y sesión de 50 minutos, en pago único y sin suscripción [CO]. Las funciones premium (cursos, meditaciones, talleres y sesiones) requieren **comprar un bono de sesiones** [CO, Play]. La asistente María va incluida con cualquier bono activo [CO]. La app se descarga gratis [CO]. Precios de los bonos: N/V. |
| Orientaciones terapéuticas | N/V en lo que se pudo consultar. Según la web, las psicólogas están colegiadas y tienen al menos 2 años de experiencia [AP/FS]. |
| Catálogo de ejercicios | Meditaciones y audiolibros por temas (ansiedad, sueño, autoestima, estrés), cursos en video impartidos por las psicólogas y talleres [CO]. Herramientas de construcción de hábitos [CO, Play]. Ejercicios estructurados TCC/DBT: N/V. |
| Psicoeducación | Cursos en video y audiolibros [CO]. |
| Onboarding | Acceso con las credenciales que da la clínica [FS/CO]. Diagnóstico inicial de 9,99 € [CO]. |
| Personalización | Psicóloga asignada [CO]. |
| Recorridos/progresión | Cursos [CO]. Progresión estructurada: N/V. |
| Juegos/interactivos | N/V |
| Audio/video | Meditaciones, audios, audiolibros y cursos en video. Videoconsulta [CO]. |
| Registro emocional/diario/hábitos | **Diario emocional** con **7 emociones**, notas y fotos. Herramientas de hábitos [CO, Play]. |
| Objetivos/recordatorios/estadísticas | **Gráfico semanal** del ánimo. **Recordatorios** de citas y del diario [CO]. |
| Gamificación | N/V |
| **IA y sus límites** | **María**: asistente emocional 24/7 por chat o voz que «complementa el acompañamiento humano». Si detecta necesidad de atención clínica, **deriva a una psicóloga humana** [CO]. La página «incluido» menciona además un asistente de voz 24 h y un **chat de IA por WhatsApp supervisado por la psicóloga** [CO]. No se especifican el modelo, los criterios de derivación ni su precisión [NV]. |
| Psicólogo / informes / control de lo compartido | **Núcleo del servicio.** Psicóloga asignada, videoconsultas y gestión de bonos [CO]. Las conversaciones con María están cifradas y la psicóloga accede a la historia clínica, **no a la conversación en bruto** [CO, soporte-app]. Los datos clínicos solo los ven el usuario y su psicóloga [CO, Play]. El usuario no tiene un control granular de qué comparte [NV]. Exportación: N/V. |
| Seguridad, privacidad, crisis | Cifrado declarado [CO/AP]. Protocolo de crisis o líneas de emergencia en la app: N/V. |
| Accesibilidad, idiomas, plataformas | Español [CO]. Android (Google Play, y un APK oficial de unos 108 MB para Android 8.0+) [CO]. **iOS: las páginas oficiales se contradicen**; unas dicen «próximamente» y otras «disponible» [CO]. Accesibilidad: N/V. |
| Evidencia científica | Ninguna. |

**Fortalezas:** une humano e IA con derivación declarada. Entrada barata (9,99 €). Mucho contenido en audio y video en español. Diario emocional con gráfico.
**Debilidades:** la app solo tiene valor completo si se compra un bono: es una herramienta de fidelización de la clínica más que autoayuda. iOS confuso. El control de lo compartido es poco transparente. Sin evidencia.
**Oportunidades:** ofrecer las herramientas de autoayuda gratis y la conexión con un profesional como opción, no como requisito.

---

### Fuentes (consultadas el 2026-10-15)

| # | URL | Afirmaciones que sustenta |
|---|---|---|
| 1 | https://www.kalmo.ai/es | WebFetch: ENOTFOUND. Sin contenido. |
| 2 | https://play.google.com/store/apps/details?id=co.kaalmo.app | Homónimo «Kaalmo» (cuidadores en el Reino Unido), no es Kalmo. |
| 3 | https://kalmoa.com/ | Homónimo «Kalmoa» (ondas cerebrales), no es Kalmo. |
| 4 | https://www.jenora.com/ | Jenora: check-ins, valores, patrones, recuperación, compartir con el terapeuta, «Life in Sync», «Three Zones» (TCC + valores). |
| 5 | https://www.jenora.com/faq | Jenora: gratis en acceso anticipado; premium para IA y personalización; IA etiquetada, no revisada por profesionales y no diagnóstica; compartir granular, revocable y registrado; no es servicio de crisis; muestra líneas locales; datos de salud opcionales y de solo lectura; App Store, Google Play y web. |
| 6 | https://www.jenora.com/how-it-works | Jenora: plan de recuperación y seguimiento de «drift». |
| 7 | https://www.jenora.com/download | Jenora: disponible en App Store y Google Play. |
| 8 | https://play.google.com/store/apps/details?id=com.jenora.app | Jenora: «Companion for Therapy», IA Ori, diario, objetivos, tareas de terapia, onboarding de autodescubrimiento, no diagnostica. |
| 9 | https://www.jenora.com/resources/depression-learning-centre-part-1 | Jenora: psicoeducación sobre depresión. |
| 10 | https://www.amira.ar/ | WebFetch: ENOTFOUND. Sin contenido. |
| 11 | https://apps.apple.com/us/app/amira-ayudante-de-tareas-ia/id6755322719 | Homónimo (app escolar), no es Amira Argentina. |
| 12 | https://www.mdzol.com/sociedad/2024/6/6/terapia-es-posible-suplantar-los-psicologos-con-una-app-similar-chatgpt-433018.html | Contexto argentino: TerapIA y comunicado de FePRA sobre los riesgos de la IA. |
| 13 | https://www.0223.com.ar/nota/2024-6-5-13-35-0-tendrias-como-psicologo-a-una-inteligencia-artificial-la-polemica-app-de-connie-ansaldi | Contexto: app Cux frenada por el Colegio de Psicólogos de la provincia de Buenos Aires. |
| 14 | https://www.redalyc.org/journal/3334/333469858005/333469858005.pdf | Contexto: apps argentinas de ansiedad sin estudios de eficacia; datos de Garay y Celleri sobre conocimiento y uso. |
| 15 | https://www.wysa.com/faq | Wysa: SOS gratuito con plan de seguridad y grounding; idiomas de los coaches; el coaching no es servicio de crisis. |
| 16 | https://www.wysa.com/ai-cbt | Wysa: TCC con IA; SOS con plan de seguridad y líneas de ayuda. |
| 17 | https://blogs.wysa.io/blog/most-read/everything-you-need-to-know-about-wysas-coaching-services | Wysa: premium (biblioteca completa, coach, mensajería asíncrona); coaching con coste adicional en algunas regiones; acceso vía empleador. |
| 18 | https://blogs.wysa.io/api/media/file/Wise-Up-Issue-09.pdf | Wysa: autoayuda en 10 idiomas; Gateway en 9 idiomas. |
| 19 | https://legal.wysa.io/ | Wysa: política de privacidad; servicios selectos en ES, FR, DE, PT-BR y lenguas de India. |
| 20 | https://apps.apple.com/us/app/wysa-mental-wellbeing-ai/id1166585565 | Wysa: ficha de iOS; compras in-app de USD 99,99 (vigencia no verificada). |
| 21 | https://www.wysa.com/nhs-try-wysa | Wysa: oferta premium a través del NHS. |
| 22 | https://softwarefinder.com/hr/wysa | Wysa [FS]: freemium, USD 49,99/año, TCC/DBT/mindfulness, más de 200 herramientas y Packs. |
| 23 | https://medcitynews.com/2022/07/the-only-ai-powered-24-7-mental-health-solution-raises-20m/ | Wysa: designación FDA Breakthrough (no es aprobación); sin login. |
| 24 | https://techcrunch.com/2022/07/14/wysa-20-million-series-b-funding-expand-therapist-chatbot-wider-mental-health-services | Wysa: clientes como el NHS; Serie B. |
| 25 | https://techcrunch.com/2021/05/21/mental-health-app-wysa-raises-5-5m-for-emotionally-intelligent-ai | Wysa: cumplimiento de DCB0129 del NHS. |
| 26 | https://psiquiatria.com/inteligencia-artificial/wysa--1/ | Wysa [FS, 22-09-2026, fragmento]: TCC, activación conductual y mindfulness; modelo B2B (NHS, Singapur); estudios con autores de la empresa; ECA del NHS de 2026; anonimización de datos hacia el LLM. |
| 27 | https://mhealth.jmir.org/2018/11/e12106/PDF | Inkster et al. 2018, estudio observacional de Wysa. |
| 28 | https://preprints.jmir.org/preprint/50025/accepted | MacNeill, Doucet y Luke 2024, ECA en enfermedad crónica (JMIR Form Res 8:e50025). |
| 29 | https://blogs.wysa.io/wp-content/uploads/2024/08/UNB-RCT-Summary.pdf | Wysa [AP]: resumen del ECA de la UNB (−39 % PHQ-9). |
| 30 | https://formative.jmir.org/2024/1/e51858/PDF | Wysa: piloto en Singapur (80,1 % completó 2 o más sesiones). |
| 31 | https://researchportal.plymouth.ac.uk/en/publications/real-world-testing-of-an-artificial-intelligence-conversational-a/ | Wysa: ECA en NHS Talking Therapies, 76 aleatorizados, diferencias similares en depresión. |
| 32 | https://isrctn.com/ISRCTN10327977 | Wysa: registro del ensayo del NHS (completado). |
| 33 | https://pmc.ncbi.nlm.nih.gov/articles/PMC7463412/table/table3 | Wysa: puntuación de PsyberGuide de 3,86 (tabla de 2020, alineación incierta). |
| 34 | https://www.innovationsinhealthcare.org/profile/wysa/ | Wysa [AP]: ORCHA 92 % y 100 % en seguridad clínica (cifra de la propia empresa). |
| 35 | https://araam.org/es | WebFetch: ENOTFOUND. Sin contenido. |
| 36 | https://www.abnewswire.com/pressreleases/araam-introduces-a-free-digital-mental-wellness-platform-for-everyday-calm-reflection-and-selfunderstanding_836947.html | Araam [AP]: gratis y web; respiración, meditación, diario, ánimo, cribado; guías; programas de 10-20 minutos; E2E opcional; IA solo bajo petición; no sustituye tratamiento. |
| 37 | https://www.openpr.com/news/4637997/araam-introduces-a-free-digital-mental-wellness-platform | Araam [AP]: misma nota sindicada. |
| 38 | https://www.nebraskanewsdesk.com/news/story/564856/araam-introduces-a-free-digital-mental-wellness-platform-for-everyday-calm-reflection-and-selfunderstanding.html | Araam [AP]: misma nota sindicada. |
| 39 | https://www.araam.app/ | Homónimo (meditación para musulmanes), no es araam.org. |
| 40 | https://www.kalisme.com/es | WebFetch: ENOTFOUND. Sin contenido. |
| 41 | https://apps.apple.com/in/app/kalisme-let-yourself-be-happy/id6767380889 | Kalisme: manifiesto de 13 capítulos en 15 idiomas sin conexión; cuaderno; respiración; gratis con compras in-app; Circle E2E con relay en la UE y borrado a 7 días; Kal en el dispositivo; Orbit Home; moods; Watch y widgets; iOS 17+; sin GPS; política en kalisme.com/privacy. |
| 42 | https://www.i-amrich.com/ | Kalisme Edition [FS]: app de CHF 499, 5 módulos, 15 idiomas. |
| 43 | https://play.google.com/store/apps/details?id=com.mentesanapsicologia.com | Mente Sana: Royal Gala SL; terapia, meditaciones, audios; diario de 7 emociones con gráfico semanal; María 24/7 con derivación; cursos; recordatorios; hábitos; cifrado; premium mediante bono. |
| 44 | https://mentesanapsicologia.com/soporte-app | Mente Sana: María (chat/voz, derivación, cifrado, la psicóloga no ve la conversación en bruto, incluida con bono); APK de 108 MB para Android 8+; iOS «próximamente». |
| 45 | https://mentesanapsicologia.com/descargar-app | Mente Sana: Google Play; contradicción sobre la disponibilidad en App Store. |
| 46 | https://mentesanapsicologia.com/incluido | Mente Sana: asistente de voz 24 h; chat de IA por WhatsApp supervisado por la psicóloga. |
| 47 | https://mentesanapsicologia.com/ | Mente Sana: diagnóstico de 9,99 € (informe, psicóloga asignada, sesión de 50 minutos, pago único). |
| 48 | https://www.moncloa.com/2022/06/29/disponer-de-la-psicologia-al-alcance-de-todos-de-la-mano-de-mente-sana-1490860/ | Mente Sana [FS, tono patrocinado]: psicólogas colegiadas con más de 2 años de experiencia; pacientes hispanohablantes en Europa. |

---

### Tabla de puntuaciones (0-3 o N/V)

Escala: 0 = ausente según la evidencia; 1 = mínimo o indirecto; 2 = presente; 3 = fuerte o diferencial. N/V = no hay evidencia para puntuar. **Las puntuaciones se basan solo en evidencia documental, no en pruebas de uso.** En Kalmo y Amira no se encontró ninguna evidencia, así que todo es N/V.

| ID | Requisito | Kalmo | Jenora | Amira | Wysa | Araam | Kalisme | Mente Sana |
|---|---|---|---|---|---|---|---|---|
| R01 | psicoeducación | N/V | 2 | N/V | 2 | 3 | 1 | 2 |
| R02 | habilidades guiadas paso a paso | N/V | 1 | N/V | 3 | 2 | 1 | 1 |
| R03 | registro de pensamientos | N/V | N/V | N/V | 2 | 2 | N/V | N/V |
| R04 | exposición gradual | N/V | N/V | N/V | N/V | N/V | N/V | N/V |
| R05 | experimentos conductuales | N/V | N/V | N/V | N/V | N/V | N/V | N/V |
| R06 | regulación emocional DBT | N/V | N/V | N/V | 2 | N/V | N/V | N/V |
| R07 | mindfulness guiado audio | N/V | N/V | N/V | 2 | 2 | 1 | 3 |
| R08 | recorridos estructurados | N/V | 2 | N/V | 2 | 2 | 1 | 2 |
| R09 | personalización por objetivos | N/V | 3 | N/V | 1 | N/V | 1 | 1 |
| R10 | recomendación de herramienta según estado | N/V | 2 | N/V | 3 | N/V | 1 | 1 |
| R11 | diario/registro emocional | N/V | 3 | N/V | 2 | 2 | 2 | 3 |
| R12 | seguimiento de hábitos | N/V | 2 | N/V | N/V | N/V | 1 | 1 |
| R13 | objetivos y recordatorios | N/V | 2 | N/V | N/V | N/V | N/V | 2 |
| R14 | estadísticas/gráficos | N/V | 2 | N/V | 2 | N/V | 1 | 2 |
| R15 | gamificación | N/V | N/V | N/V | N/V | N/V | N/V | N/V |
| R16 | IA conversacional | N/V | 2 | N/V | 3 | 1 | 1 | 3 |
| R17 | informes/exportación para terapeuta | N/V | 2 | N/V | N/V | N/V | 0 | 1 |
| R18 | vínculo con profesional | N/V | 3 | N/V | 2 | 0 | 0 | 3 |
| R19 | recursos de crisis | N/V | 2 | N/V | 3 | N/V | N/V | 1 |
| R20 | plan de seguridad | N/V | N/V | N/V | 2 | N/V | N/V | N/V |
| R21 | privacidad/sin cuenta | N/V | 2 | N/V | 3 | 1 | 3 | 1 |
| R22 | accesibilidad declarada | N/V | N/V | N/V | N/V | N/V | N/V | N/V |
| R23 | español | N/V | 1 | N/V | 2 | 1 | 1 | 3 |
| R24 | gratuito | N/V | 2 | N/V | 2 | 3 | 2 | 1 |
| R25 | contenido infantil/familias | N/V | N/V | N/V | N/V | N/V | N/V | N/V |
| R26 | evidencia publicada de la app | N/V | 0 | N/V | 2 | 0 | 0 | 0 |
| R27 | simulaciones/juegos con fin terapéutico | N/V | N/V | N/V | N/V | N/V | N/V | N/V |
| R28 | comunidad | N/V | N/V | N/V | N/V | N/V | 2 | N/V |

**Notas sobre las puntuaciones:**
- **Jenora R17 = 2:** comparte categorías con el terapeuta mediante un panel con consentimiento, pero no consta exportación a PDF.
- **Jenora R23 y Araam R23 = 1:** el español solo se infiere de la URL `/es`, sin ficha que lo confirme. **Kalisme R23 = 1:** 15 idiomas confirmados, sin confirmar que el español sea uno de ellos.
- **Mente Sana R17 = 1:** la psicóloga accede a la historia clínica, pero no es un informe que controle el usuario. **R21 = 1:** requiere credenciales de la clínica. **R24 = 1:** la app es gratuita, pero las funciones premium exigen un bono.
- **Wysa R26 = 2:** hay ECA publicados, pero pequeños, con autores de la empresa y con resultados mixtos.
- **Kalisme R28 = 2:** el «Circle» es un grupo íntimo por invitación, no una comunidad abierta.
- **Puntuaciones de 0:** las de R26 (Jenora, Araam, Kalisme, Mente Sana) significan «no se encontró ninguna publicación», no que se haya demostrado que no exista. En R17/R18 de Araam y Kalisme se puntúa 0 porque el producto declarado no incluye vínculo profesional.


## Grupos C y D — Hábitos, mindfulness, gamificación y recursos profesionales


**Fecha de consulta:** 2026-10-15
**Método:** se intentó WebFetch una vez por cada sitio oficial indicado (finchcare.com, headspace.com, daylio.net, therapistaid.com, betterme.world); **los cinco fallaron con `getaddrinfo ENOTFOUND`**. Toda la evidencia procede de WebSearch (modo standard): fragmentos de páginas oficiales indexadas (centros de ayuda, fichas de tienda), evaluaciones de terceros (APA App Evaluation, Mozilla *Privacy Not Included*, Internet Matters), artículos académicos y prensa. **No se probó ninguna app**; nada de lo aquí descrito procede de uso directo.

**Leyenda de nivel de evidencia**
- **[OF]** confirmada (fuente oficial: web/centro de ayuda/ficha de tienda del propio proveedor o documento del proveedor indexado).
- **[AN]** anunciada por el proveedor (marketing, nota de prensa, afirmación no comprobable de forma independiente).
- **[2ª]** fuente secundaria (prensa, reseñas, evaluadores independientes, agregadores).
- **[NV]** no verificada (sólo fuentes débiles o contradictorias).
- **N/V** = no hay evidencia encontrada.

**Advertencia general:** los fragmentos de búsqueda son resúmenes; donde no pude abrir la página completa lo indico. Precios cambian por región; se dan como orientación.

---

### Elección de las 2 apps extra (justificación)

1. **How We Feel** (Yale Center for Emotional Intelligence / organización sin ánimo de lucro). Aporta lo que ninguna de las 5 cubre bien: **granularidad emocional (vocabulario de ~132 emociones sobre el "Mood Meter" energía × agrado, de RULER)** ligada a **estrategias de regulación emocional en vídeo** (pensar, mover el cuerpo, mindfulness, conectar), con **datos en el dispositivo** y **gratuidad total** sin anuncios. Es el referente de "regulación emocional + vocabulario" frente al registro por caritas de Daylio/Finch.
2. **MindDoc** (MindDoc Health GmbH, Alemania). Aporta **monitorización sintomática estructurada mediante preguntas diarias**, un **informe/valoración global descargable para compartir con el profesional**, **marcado como producto sanitario clase I (UE)**, y **ECA publicado (protocolo) con resultados en preprint**. Cubre el hueco "informe para terapeuta + evidencia clínica de la propia app" que Daylio sólo cubre con exportación CSV/PDF.

Descartes razonados: **Woebot** habría aportado IA conversacional TCC con ECA, pero **la app de consumo se retiró el 30-06-2025** [2ª: MobiHealthNews, New Atlas, HLTH], por lo que su valor competitivo actual es como lección (viabilidad y seguridad de chatbots), no como competidor; **Bearable** se solapa en correlaciones con Daylio; **Calm/Insight Timer** se solapan con Headspace.

---

### 14. Finch: Self-Care Pet

**Proveedor:** Finch Care Public Benefit Corporation [OF: ficha App Store]. Cofundadores Thomas Aquinas Nugraha Budi y Stephanie Yuan, que relatan experiencia propia de depresión/ansiedad [2ª: Paste Magazine].

#### Público y problema
- Personas con estrés, ansiedad, baja motivación que quieren mantener autocuidado diario; se presenta como app de autocuidado, no de tratamiento [OF ficha tienda; 2ª Paste].
- Clasificación App Store 4+ [2ª: Bark]. Una fuente de control parental dice que apunta a 6–12 años y cumple COPPA [NV: FlashGet, marketing]; Internet Matters (organización británica de seguridad infantil) la reseña como app de bienestar [2ª].

#### Propuesta de valor y modelo de negocio
- Mascota virtual (un pájaro) que crece cuando el usuario completa pequeñas metas de autocuidado; "self care pet app that helps you feel prepared and positive, one day at a time" [OF ficha tienda].
- Freemium: descarga gratuita, núcleo (metas, energía, registro de ánimo) gratis y sin anuncios intrusivos [2ª: Bustle, Gerald, Headway].
- **Finch Plus**: personalización del pájaro, seguimiento de hábitos más profundo, metas premium, objetos extra; precios orientativos en App Store entre ~US$5,99 y 69,99; reseñas citan US$9,99/mes o 69,99/año, a veces 39,99/año con descuento; prueba de 7 días [2ª: App Store IAP, Bustle, Gerald, Internet Matters]. Cifras contradictorias entre fuentes.
- Botón "Can't Afford It"/programa de patrocinio que da Plus gratis [NV: sólo Gerald].

#### Orientaciones terapéuticas
- No se encontró fuente que declare base TCC explícita [NV]. Elementos: gratitud, respiración guiada, reflexión/diario, check-ins [OF ficha tienda]. Lo más fiel: **activación conductual ligera + autocuidado + gratitud**, por inferencia de funciones, no por declaración del proveedor.

#### Catálogo y profundidad
- Rastreador de hábitos, diario de ánimo, respiración guiada, cuestionarios breves (ansiedad, depresión, apreciación corporal…), frases motivacionales, diario tipo *bullet journal* con indicaciones [OF/AN ficha tienda, recogida por APKMirror y webcatalog]. Profundidad clínica baja; amplitud alta en micro-acciones.

#### Psicoeducación
- Limitada; cuestionarios "para entender tu salud mental" [AN]. N/V de módulos psicoeducativos estructurados.

#### Onboarding
- N/V detallado (no se pudo abrir la web). Se elige/nombra la mascota y metas [2ª reseñas].

#### Personalización
- Metas propias, aspecto del pájaro, ropa, muebles, micro-mascotas [2ª: marlvel, Internet Matters].

#### Recorridos/progresión
- El pájaro "crece" y realiza "aventuras" con la energía obtenida [2ª: YourStory, Headway]. No hay programas terapéuticos secuenciales verificados.

#### Juegos / interactivos
- Mecánica tipo Tamagotchi (Blick lo llama "Tamagotchi für die Seele") [2ª]. No hay simulaciones terapéuticas.

#### Audio/vídeo
- Respiración guiada [OF ficha]. N/V de biblioteca de meditaciones extensa.

#### Registro emocional / diario / hábitos
- Registro de ánimo con tendencias ("access mood trends to understand what has been lifting you up or bringing you down"), diario guiado, hábitos [OF ficha tienda vía webcatalog/marlvel].

#### Objetivos / recordatorios / estadísticas
- Metas diarias = núcleo del producto; tendencias de ánimo [OF/2ª]. Notificaciones push documentadas en galería de flujos de terceros [2ª: Reteno]. Detalle de gráficos N/V.

#### Gamificación (análisis específico)
- **Mascota** que depende de tu autocuidado; **energía** por completar metas; **piedras arcoíris** (moneda) para ropa y muebles [2ª: Internet Matters, YourStory].
- **Rachas**: usuarios mencionan rachas largas (p. ej. pérdida de "una racha de dos años" al perder acceso a la cuenta) [2ª: Appbot, análisis de 40.294 reseñas ago-2025–ago-2026, media 4,6★, ~5 % de 1★].
- **Críticas de culpa/dependencia**: (a) un análisis crítico sostiene que el énfasis en completar cada día puede generar presión y culpa al fallar días [2ª opinión: Vocal]; (b) Headway cita un estudio de diario de 9 meses sobre una app de autocuidado gamificada con mascotas en que el apoyo inicial derivó en hábitos dirigidos por recompensas, vinculados a "adicción tecnológica" — **no pude identificar la publicación original ni confirmar que sea Finch** [NV]; (c) usuarios en Trustpilot dicen que "al principio ayudó y ahora me estresa" [2ª anecdótico]; (d) vínculo emocional fuerte: usuarios nombran a sus pájaros y vuelven "porque el pájaro les espera" [2ª Appbot]. Contrapunto: otras reseñas afirman que el tono empático hace que un día perdido se sienta como "una pausa" [2ª].

#### IA y límites
- N/V (no se encontró función de IA conversacional).

#### Trabajo con psicólogo / informes / exportación
- N/V.

#### Seguridad, privacidad y crisis
- Mozilla *Privacy Not Included* (2023): aparentemente no hace falta dar datos para usarla; función opcional "Super Vibe" pide teléfono y contactos, con sección clara en la política [2ª, puede estar desactualizada].
- Política de privacidad alojada en Notion [OF enlace en ficha; contenido no abierto].
- Una reseña afirma almacenamiento local de escritos [NV].
- Recursos de crisis: N/V. Limitación señalada por críticos: no ofrece intervención en crisis ni sustituye terapia [2ª Vocal].

#### Accesibilidad, idiomas, plataformas
- iOS y Android [OF tiendas]. La comunidad AppleVis (usuarios ciegos) tiene hilos sobre la app [2ª], pero no hay declaración de accesibilidad del proveedor: N/V. Idiomas: N/V (no se obtuvo lista).

#### Comunidad
- **Tree Town**: visitar mascotas de amigos y enviar "Good Vibes" [2ª].

#### Evidencia científica de la app
- No se encontró estudio revisado por pares sobre Finch [búsqueda negativa]. Una web que cita un "estudio de JMIR" sobre la app parece poco fiable [NV, descartada].

#### Fortalezas / debilidades / oportunidades
- **F:** adherencia y tono amable; micro-metas de baja fricción; comunidad de apoyo no tóxica (sólo "vibes" positivas); núcleo gratuito sin anuncios.
- **D:** escasa profundidad terapéutica; riesgo de culpa/dependencia de la mascota; sin crisis verificada; sin evidencia.
- **O:** usar la mecánica de cuidado como *envoltorio* de habilidades TCC/DBT reales; diseñar rachas "compasivas" (sin castigo, con "días de descanso"); recursos de crisis visibles.

#### Fuentes (consultadas 2026-10-15)
- https://apps.apple.com/app/id1528595748 — ficha oficial: desarrollador, descripción, gratis con compras integradas, rango de precios IAP.
- https://www.bustle.com/wellness/finch-app-review-features-price — precios Plus y qué incluye.
- https://joingerald.com/learn/financial-wellness/finch-app-cost-breakdown — límites del plan gratuito, "Can't Afford It" (NV).
- https://makeheadway.com/blog/finch-app-review/ — estudio de diario sobre dependencia (sin cita primaria), quejas Trustpilot.
- https://www.internetmatters.org/advice/apps-and-platforms/wellbeing/finch/ — piedras arcoíris, gamificación, Plus, prueba 7 días.
- https://www.pastemagazine.com/article/finch-app-mental-health-virtual-pet-self-care — fundadores y motivación.
- https://www.apkmirror.com/apk/finch-care-inc/finch-self-care-widget-pet/ — descripción del proveedor (estrés, ansiedad, depresión; lista de funciones).
- https://appbot.co/blog/finch-app-reviews-emotional-attachment-user-retention-product-loyalty/ — vínculo emocional, rachas, volumen y media de reseñas.
- https://vocal.media/critique/the-criousity-of-the-finch-app — crítica de culpa y límites terapéuticos.
- https://www.mozillafoundation.org/fr/privacynotincluded/finch-self-care-pet/ — evaluación de privacidad 2023, Super Vibe.
- https://yourstory.com/2022/06/app-review-self-care-pet-finch-gamifies-mental-wellbeing — energía, metas, aventuras.
- https://www.blick.ch/life/ratgeber/tamagotchi-fuer-die-seele-psychisch-gesund-dank-selfcare-app-id21160050.html — encuadre "Tamagotchi".
- https://www.bark.us/app-overview/finch/ — clasificación 4+.
- https://www.applevis.com/comment/142583 — uso por comunidad de usuarios ciegos (no declaración oficial).
- https://gallery.reteno.com/flows/push-notifications-finch — notificaciones push.

---

### 15. Headspace

#### Público y problema
- Adultos con estrés, sueño, ansiedad leve; además canal B2B (empleadores, planes de salud) y, desde 2025, terapia con seguro en EE. UU. [2ª: MedCity News, Fierce Healthcare].

#### Propuesta de valor y modelo de negocio
- Meditación/mindfulness y sueño, ampliado a "cuidado de salud mental" escalonado: contenido → IA (Ebb) → coaching por texto → terapia por vídeo [AN/2ª].
- Suscripción consumidor ~US$12,99/mes o 69,99/año; familiar 99,99/año [2ª agregadores 2026; no se confirmó en página oficial].
- **Plan gratuito**: la prueba desbloquea toda la biblioteca [OF centro de ayuda "What's included for free"]; tras la prueba, acceso gratuito limitado y se remite a YouTube, Radio Headspace, artículos y series en Netflix [OF]. La afirmación de "10 sesiones gratis de Basics" es [NV].
- Coaching por texto: US$99,99/mes extra (2024) [2ª]. Terapia: vídeo 1:1 con terapeutas licenciados en los 50 estados, >45 aseguradoras en red, copago típico US$0–35, ~US$149 sin seguro; sólo adultos [2ª Fierce Healthcare / OF página de terapia indexada].

#### Orientaciones terapéuticas
- Mindfulness/meditación (núcleo). Ebb basado en **entrevista motivacional** [AN, nota de prensa y paper de la empresa]. Terapia: terapeutas licenciados en diversas condiciones (ansiedad, trauma, ánimo) [2ª]. TCC explícita en app: N/V.

#### Catálogo y profundidad
- Gran biblioteca de meditaciones, cursos estructurados, sleepcasts, colecciones con licencias (p. ej. Star Wars, Sesame Street) [OF centro de ayuda; 2ª]. Alta profundidad en mindfulness/sueño.

#### Psicoeducación
- Vídeos introductorios, artículos, series "Guide to Meditation/Sleep" [OF]. Alta en mindfulness; N/V en psicoeducación clínica de trastornos.

#### Onboarding
- N/V detallado (web no accesible).

#### Personalización
- Ebb sugiere contenido de la biblioteca según el estado emocional [2ª MedCity News]. Memoria mejorada de Ebb (dic-2025) [AN: HLTH].

#### Recorridos/progresión
- Cursos de varios días ("Basics" y otros) [2ª/OF].

#### Juegos/interactivos
- N/V.

#### Audio/vídeo
- Núcleo del producto: audio guiado, sleepcasts, música, vídeo/animaciones; modo de voz de Ebb (dic-2025) [OF/AN].

#### Registro emocional/diario/hábitos
- Ebb permite "reflexionar y ordenar emociones" [AN]. Registro de ánimo formal: N/V.

#### Objetivos/recordatorios/estadísticas
- N/V (no se obtuvo evidencia específica).

#### Gamificación
- N/V en las fuentes obtenidas.

#### IA y límites
- **Ebb** (oct-2024): compañero de IA empático incluido en la suscripción; inicialmente sólo consumidores en EE. UU. [2ª MedCity News; OF página terapia].
- Límites declarados: **no da consejo, orientación ni diagnóstico de salud mental**; complemento, no sustituto de terapia; guardarraíles temáticos, sistema de seguridad multicapa, rutas de escalado de crisis, detección de riesgo por IA, revisión de mensajes de alta gravedad; se puede borrar conversaciones [AN: nota de prensa BusinessWire; paper de la empresa].
- Estudio de la empresa: Real-World Use of a Mental Health AI Companion: Multiple Methods Study, *JMIR Formative Research* 2026;10:e86904 (13-02-2026): encuesta n=482, análisis de uso n=393.969, diario n=15; Ebb 2.0 retención a 7 días 50,8 % vs 28,5 % (1.0). **Todos los autores son empleados de Headspace**; no hay evaluación independiente del escalado de crisis [2ª revista; resumen, texto completo no abierto].

#### Trabajo con profesional / informes
- Terapia y coaching integrados [2ª/OF]. Informes/exportación para terapeuta externo: N/V.

#### Seguridad, privacidad y crisis
- **Controversia documentada (Mozilla 2023):** Headspace recibió la etiqueta de advertencia *Privacy Not Included* porque su política permite compartir algunos datos personales con terceros, incluido Facebook, para publicidad dirigida; y no se pudo confirmar que todos los usuarios puedan acceder/borrar sus datos. Headspace respondió que no vende datos pero comparte cookies/píxeles para publicidad [2ª Mozilla].
- No se encontró acción de la FTC ni demanda colectiva contra Headspace en las búsquedas [búsqueda negativa; no descarta su existencia].
- Crisis: escalado de crisis en Ebb [AN]; recursos de crisis en el resto de la app: N/V.

#### Accesibilidad, idiomas, plataformas
- **Declaración de accesibilidad oficial**: objetivo WCAG 2.2 AA "en la máxima medida posible", con Accessible by Design LLC; informes VPAT (feb-2026) de app móvil y web [OF].
- Español: se puede cambiar el idioma de la app a español y aparece el contenido disponible en ese idioma (cobertura parcial); algunas colecciones sólo en EN/FR/DE [2ª Illinois AAP; OF centro de ayuda].
- iOS, Android, web; contenido infantil también en Amazon Kids+ (Sleep Studio, jun-2026) [OF artículo Headspace].

#### Contenido infantil/familias
- Meditaciones para niños por edades (≤5, 6–8, 9–12) [2ª Common Sense Media]; sleepcasts con Sesame Workshop [2ª]; plan familiar [2ª].

#### Evidencia científica de la app
- **Champion, L., Economides, M., & Chandler, C. (2018).** The efficacy of a brief app-based mindfulness intervention on psychosocial outcomes in healthy adults: A pilot randomised controlled trial. *PLoS ONE*, 13(12), e0209482. Headspace (n=38) vs lista de espera (n=36): mejoras en satisfacción vital, estrés y resiliencia a 10 y 30 días. Economides afiliado a Headspace [2ª índice RePEc; título completo según conocimiento previo, coherente con el identificador].
- **Economides, M., Martman, J., Bell, M. J., & Sanderson, B. (2018).** Improvements in Stress, Affect, and Irritability Following Brief Use of a Mindfulness-based Smartphone App: A Randomized Controlled Trial. *Mindfulness*. Resultados no recuperados en la búsqueda [2ª].
- Protocolo de ECA relacionado: *JMIR Research Protocols* 2022 (researchprotocols.org/2022/3/e33423) [2ª].
- Ebb: estudio observacional de la empresa (ver IA).
- Nota: los ECA citados están financiados/coescritos por la empresa.

#### Fortalezas / debilidades / oportunidades
- **F:** catálogo de audio de calidad; evidencia ECA; accesibilidad declarada con VPAT; continuo de cuidado hasta terapia; contenido infantil.
- **D:** caro; poco gratuito tras la prueba; historial de compartición de datos publicitarios; español parcial; terapia sólo EE. UU.
- **O:** mindfulness gratuito de calidad en español; transparencia de privacidad (sin píxeles publicitarios) como diferencial; IA con límites claros publicados.

#### Fuentes (consultadas 2026-10-15)
- https://help.headspace.com/hc/en-us/articles/115008192928-What-s-included-for-free — prueba desbloquea toda la biblioteca; alternativas gratuitas.
- https://www.headspace.com/accessibility-statement — WCAG 2.2 AA, VPAT feb-2026.
- https://www.headspace.com/therapy — Ebb incluido en suscripción; terapia; disponibilidad variable.
- https://www.fiercehealthcare.com/digital-health/headspace-launches-insurance-backed-dtc-therapy-offering — terapia con seguro, 50 estados, sólo adultos, precios.
- https://www.businesswire.com/news/home/20250617812976/en — nota de prensa de terapia con seguro (2025).
- https://medcitynews.com/2024/10/headspace-ai-mental-health/ — lanzamiento de Ebb, precio suscripción, sólo EE. UU., sugerencias según estado emocional.
- https://www.businesswire.com/news/home/20241010397470/en/Mental-Health-Company-Headspace-Launches-Empathetic-AI-Companion — límites y salvaguardas de Ebb (anunciado).
- https://hlth.com/insights/news/headspace-updates-ebb-ai-with-voice-mode-and-enhanced-memory-to-deepen-mental-health-support-2025-12-09 — modo de voz y memoria (dic-2025).
- https://formative.jmir.org/2026/1/e86904 — estudio de uso real de Ebb (autores de Headspace).
- https://www.mozillafoundation.org/en/privacynotincluded/headspace/ — advertencia de privacidad 2023 y respuesta de la empresa.
- https://conductatlas.com/platform/headspace/headspace-privacy-policy/data-sharing-with-advertising-and-analytics-partners — análisis de terceros sobre compartición publicitaria (opinión de proveedor comercial).
- https://ideas.repec.org/a/plo/pone00/0209482.html — ECA piloto Champion et al. 2018, PLoS ONE.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6153897 — devuelto para Economides et al. 2018 (no abierto; correspondencia exacta no verificada).
- https://researchprotocols.org/2022/3/e33423/PDF — protocolo ECA 2022 que lista ensayos previos.
- https://illinoisaap.org/wp-content/uploads/2025/10/ICAAP-QI-AppList_Final-SPANISH.pdf — cambio de idioma a español, contenido parcial; producto infantil.
- https://help.headspace.com/hc/en-us/articles/5724571293211-Headspace-x-Star-Wars-Collection — idiomas por colección.
- https://www.commonsensemedia.org/es/node/69307 — meditaciones infantiles por edades.
- https://www.headspace.com/articles/better-bedtimes-built-in-headspace-is-now-on-amazon-kids — Sleep Studio en Amazon Kids+.
- https://aisotools.com/blog/headspace-review-2026 — precios 2026 (agregador).

---

### 16. Daylio Journal – Mood Tracker

**Proveedor:** Habitics (Eslovaquia) [2ª APKMirror].

#### Público y problema
- Personas que quieren llevar un diario de ánimo "sin escribir una palabra" y descubrir qué actividades influyen en su ánimo; recomendada por Bipolar UK como diario de ánimo privado [2ª].

#### Propuesta de valor y modelo de negocio
- Registro en dos toques (ánimo en 5 niveles + actividades/iconos), estadísticas y metas [OF FAQ].
- Freemium con anuncios (AdMob) en la versión gratuita [2ª APA]. **Premium**: más ánimos y actividades, metas ilimitadas, estadísticas avanzadas, copia de seguridad automática, bloqueo PIN, sin anuncios, exportación PDF [2ª APA, intuitionlabs]. Precio App Store US: US$4,99/mes; anuales listados 17,99–35,99 [2ª ficha App Store].

#### Orientaciones terapéuticas
- Ninguna declarada; encaja con auto-monitorización y **activación conductual** (relación actividad→ánimo) [inferencia; NV como declaración].

#### Catálogo / profundidad / psicoeducación
- Sin contenido psicoeducativo ni ejercicios guiados [N/V de tales funciones].

#### Onboarding
- N/V.

#### Personalización
- Ánimos, actividades, iconos y grupos personalizables [2ª].

#### Registro emocional / diario / hábitos
- Registro de ánimo + actividades + notas + fotos; hábitos vía metas [OF/2ª].

#### Objetivos y recordatorios (tutorial oficial "Set up and track goals")
- Dos tipos de meta: (1) desde un **reto predefinido** o texto propio; (2) desde una **actividad que ya registras** [OF FAQ].
- Frecuencia: **n veces por semana** (p. ej. 2 entrenamientos/semana) o **días concretos** [OF].
- **Recordatorios activos por defecto**; hora y texto personalizables; fecha de inicio retroactiva [OF].
- **Rachas**: en metas semanales no importa *cuándo* lo hiciste sino *si* lo hiciste; no pierdes la racha si cumples la cuota semanal [OF]. Afirmación del proveedor: quien usa recordatorios tiene "87 % más éxito" [AN, sin estudio citado].
- Logros/achievements [2ª].

#### Estadísticas: cómo muestra patrones/correlaciones
- **"Influence on Mood"** (Stats → tocar una actividad): cuánto se asocia una actividad con tu ánimo, con vistas **mismo día**, **día siguiente** y **periodo más largo** [OF FAQ "Activity and Mood Statistics"].
- **Nivel de confianza** (Bajo/Medio/Alto) sobre la fiabilidad del número — una buena práctica de comunicación de incertidumbre [OF].
- **"Related Activities"** (qué actividades se asocian a un ánimo) y **"Mood Count"** (qué ánimo domina con cada actividad) [OF].
- Gráfico de línea mensual de ánimo, **"Year in Pixels"**, estadísticas semanales/mensuales/anuales [2ª].
- Matriz de co-ocurrencia "actividades a menudo juntas": sólo en herramientas de usuarios sobre datos exportados, no confirmada como función nativa [NV].
- Qué estadísticas son Premium exactamente: N/V.

#### Gamificación
- Rachas, logros, metas [OF/2ª]. Moderada.

#### IA y límites
- N/V.

#### Trabajo con psicólogo / exportación
- Exportación **CSV gratis**, **PDF en Premium**; los ficheros compartidos **no van cifrados** [2ª APA]. Sin vínculo con profesional.

#### Seguridad, privacidad y crisis
- Datos **almacenados localmente** en el teléfono; el desarrollador dice que no envía entradas a sus servidores; **sin cuenta** [AN desarrollador; 2ª APA confirma almacenamiento local].
- Copia de seguridad opcional a Google Drive/iCloud (privado del usuario) [2ª APA].
- PIN sólo en Premium; versión gratuita con AdMob (cookies, ID publicitario) [2ª APA]. Cifrado poco claro [2ª APA].
- Recursos de crisis: N/V.

#### Accesibilidad, idiomas, plataformas
- iOS y Android [OF tiendas]. **Español incluido**; ~28+ idiomas [OF FAQ idiomas; OF ficha App Store]. Accesibilidad declarada: N/V.

#### Evidencia
- Sólo un **informe de caso**: Chaudhry (2016), *mHealth* ("Daylio: mood-quantification for a less stressful you") [2ª]. Citada en revisión de apps de Wasil et al. (2021, *Cognitive and Behavioral Practice*) [2ª vía Wikipedia; hallazgos no verificados]. Sin ECA.

#### Fortalezas / debilidades / oportunidades
- **F:** fricción mínima; privacidad local sin cuenta; correlaciones explicadas con nivel de confianza; metas semanales flexibles que no castigan.
- **D:** cero contenido terapéutico; PIN tras pago; anuncios en gratis; exportación sin cifrar.
- **O:** combinar el modelo "actividad→ánimo con confianza" con sugerencias de activación conductual y exportación cifrada para el terapeuta.

#### Fuentes (consultadas 2026-10-15)
- https://daylio.net/faq/docs/daylio-faq/tutorials/setting-up-goals/ — tipos de meta, frecuencia, recordatorios por defecto, rachas, cifra del 87 %.
- https://daylio.net/faq/?p=5703 — "Influence on Mood", vistas, confianza, Related Activities, Mood Count.
- https://faq.daylio.net/article/61-which-languages-does-daylio-support — idiomas incluido español.
- https://apps.apple.com/us/app/daylio-journal-mood-tracker/id1194023242 — precios Premium e idiomas.
- https://psychiatry.org/psychiatrists/practice/mental-health-apps/evaluations/daylio-evaluation — evaluación APA: almacenamiento local, backup, PIN Premium, CSV/PDF, no cifrado, AdMob.
- https://www.apkmirror.com/apk/habitics/daylio-diary-journal-mood-tracker/daylio-journal-mood-tracker-1-62-3-release/ — descripción del desarrollador (local, sin servidores).
- https://intuitionlabs.ai/software/telepsychiatry-digital-mental-health/mood-tracking-and-journaling/daylio — lista de funciones Premium, Year in Pixels.
- https://mobilesyrup.com/2019/03/31/daylio-app-of-the-week-ios-android/ — Premium: metas ilimitadas, sin anuncios (2019).
- https://makeheadway.com/blog/daylio-review/ — estadísticas semanales/mensuales/anuales.
- https://mhealth.amegroups.org/article/view/11509 — informe de caso Chaudhry 2016.
- https://en.wikipedia.org/wiki/Daylio — cita a Wasil et al. 2021.
- https://www.bipolaruk.org/apps-for-managing-mood — recomendación de Bipolar UK.

---

### 17. Therapist Aid

**Proveedor:** Therapist Aid LLC; fundada en 2012 por el consejero Woody Schuldt [2ª intuitionlabs].

#### Público y problema
- **Profesionales de salud mental** que necesitan materiales para sesiones y tareas entre sesiones; también educadores y público [OF].

#### Propuesta de valor y modelo de negocio
- Biblioteca de fichas (worksheets), herramientas interactivas, vídeos, guías, artículos y audio guiado, por problema y tipo de tratamiento [OF].
- **Básico gratuito**: fichas estándar imprimibles (no modificables ni rellenables digitalmente), herramientas interactivas ilimitadas, audio guiado limitado [OF help center/plans; 2ª].
- **Profesional (pago)**: fichas personalizables (quitar marca) y **rellenables digitalmente**, compatibles con teleterapia, sin anuncios, herramientas de audio adicionales; mensual o anual; tarifas de grupo desde 5 usuarios [OF]. Precio exacto: N/V (página /plans no legible en resultados).

#### Licencia de uso de las fichas [OF: "Copyright and how tools may be used", "Acceptable worksheet uses"]
- Permitido: imprimir, compartir o mostrar durante tratamiento de salud mental o médico, trabajo social o educación; dar a clientes; repartir en clases/seminarios; enlazar al sitio; crear paquetes para clientes **sin cobrar**.
- Prohibido: redistribuir o reempaquetar con fines comerciales; subir a webs, bases de datos o bibliotecas; alterar o quitar avisos de copyright sin permiso escrito (sólo las versiones "customizable/fillable" y sólo por miembros Profesional); reproducción en apéndices de artículos sujeta a requisitos.
- Términos actualizados el 9-06-2026 [OF /terms; texto completo no leído].

#### Orientaciones terapéuticas
- **TCC** (hub con decenas de fichas, interactivos y vídeos), **DBT** (TIPP, eficacia interpersonal), manejo de ira, autoestima, pensamientos intrusivos, preocupación productiva, prevención de recaídas, suicidio/autolesión [OF].

#### Catálogo y profundidad
- Amplio y clínico. Ejemplos oficiales: Thought Record, Thought Log, Countering Anxiety, Automatic Thoughts, Simple CBT Model, CBT for Kids, Cognitive Distortions, Reframing Thoughts, DBT TIPP, Mental Health Maintenance Plan, Psychosocial Assessment, Productive Worrying [OF]. El hub TCC mostraba 43 fichas, 2 interactivos, 5 vídeos (recuento posiblemente antiguo) [OF].
- Jerarquía de exposición: no encontrada en las búsquedas [N/V].

#### Psicoeducación
- Hojas informativas (p. ej. "What is psychotherapy"), guías y vídeos [OF]. Alta.

#### Onboarding / personalización / recorridos
- Es un repositorio web, no un programa: N/V de recorridos o personalización por objetivos.

#### Juegos / interactivos
- "Interactive tools": actividades digitales y ejercicios guiados [OF]. Detalle N/V.

#### Audio/vídeo
- Audio guiado (relajación) y vídeos [OF].

#### Registro emocional / objetivos / estadísticas / gamificación / IA
- Fichas de registro (pensamientos, emociones, metas — "Goal Planning") en papel o rellenables; sin seguimiento longitudinal, estadísticas, gamificación ni IA [N/V].

#### Trabajo con psicólogo / informes
- Diseñado para uso en terapia; las fichas rellenables permiten trabajo en teleterapia [OF]. Sin informes automáticos.

#### Seguridad, privacidad y crisis
- Sección de fichas sobre **suicidio y autolesión**, incluida **planificación de seguridad**, evaluación y señales de alarma [OF].
- Privacidad: N/V (no aplica registro de datos clínicos en la versión imprimible).

#### Accesibilidad, idiomas, plataformas
- Web (PDF imprimibles). **Español**: muchas fichas traducidas (Registro de Pensamientos, Distorsiones cognitivas, Eficacia interpersonal DBT, ¿Dónde siento?, Iceberg de la ira, Planificación de metas…); se buscan por idioma o desde el menú de descarga [OF]. Proceso de traducción no descrito [N/V]. Accesibilidad declarada: N/V.

#### Contenido infantil
- Fichas para niños (p. ej. "CBT for Kids: Thoughts, Feelings, & Actions") [OF].

#### Evidencia
- No hay estudios de la plataforma; las fichas se basan en técnicas con evidencia (TCC/DBT), pero la evidencia es de las técnicas, no del producto [N/V].

#### Fortalezas / debilidades / oportunidades
- **F:** profundidad clínica; español disponible; gratuito imprimible; licencia clara para uso clínico.
- **D:** no es app; sin seguimiento, recordatorios ni datos; dependiente del profesional.
- **O:** convertir fichas validadas en flujos interactivos paso a paso con historial y exportación al terapeuta (respetando licencias: no copiar materiales, crear propios).

#### Fuentes (consultadas 2026-10-15)
- https://www.therapistaid.com/help-center/legal/copyright — licencias y prohibiciones.
- https://www.therapistaid.com/help-center/using-worksheets/worksheet-uses — usos aceptables.
- https://www.therapistaid.com/terms — términos (actualizados 9-06-2026).
- https://www.therapistaid.com/plans — niveles de membresía.
- https://www.therapistaid.com/help-center/subscriptions/supporting-member — suscripción mensual/anual.
- https://www.therapistaid.com/help-center/group-subscriptions/group-rates — tarifas de grupo.
- https://www.therapistaid.com/tools/cbt — hub TCC con fichas, interactivos, vídeos.
- https://www.therapistaid.com/therapy-worksheet/thought-record — registro de pensamientos, versión rellenable profesional.
- https://www.therapistaid.com/therapy-worksheet/thought-log — thought log imprimible/rellenable.
- https://www.therapistaid.com/therapy-worksheet/dbt-tipp — DBT TIPP.
- https://www.therapistaid.com/therapy-worksheets/suicide/none — suicidio, plan de seguridad.
- https://www.therapistaid.com/therapy-worksheet/cbt-for-kids — contenido infantil.
- https://www.therapistaid.com/help-center/using-worksheets/worksheet-translations — fichas en otros idiomas.
- https://www.therapistaid.com/worksheets/thought-record?language=es — Registro de Pensamientos en español.
- https://www.therapistaid.com/worksheets/dbt-interpersonal-effectiveness-skills-spanish.pdf — DBT en español.
- https://intuitionlabs.ai/software/substance-abuse-treatment/relapse-prevention-planning/therapistaid — fundador, modelo freemium (secundaria).

---

### 18. BetterMe: Mental Health

**Proveedor:** BetterMe (empresa también de apps de fitness/nutrición) [OF ficha App Store id1363010081].

#### Público y problema
- Adultos con estrés, ansiedad, sueño, autoestima que buscan un plan diario breve [AN ficha]. Captación mediante funnel web tipo cuestionario [2ª/NV].

#### Propuesta de valor y modelo de negocio
- "Self-Help Plan" personalizado con tareas de mañana, tarde y noche; cada una es un ejercicio de respiración o meditación guiada de ≤5 min [OF ficha].
- Gratis para descargar con compras integradas; 10 opciones de compra US$9,99–69,99 (semanal 9,99; mensual 19,99; 12 semanas 59,99; 6 meses 53,99) [2ª apppricinglab sobre ficha]. Gratuito real: N/V (parece casi todo tras pago).

#### Orientaciones terapéuticas
- Declara herramientas de **TCC**, meditación guiada, respiración, historias para dormir [AN ficha].

#### Catálogo / psicoeducación / recorridos
- Plan diario paso a paso; meditaciones, sueño, música [AN/2ª Kimola]. Psicoeducación: N/V.

#### Personalización / onboarding
- Plan personalizado [AN]; mecanismo de cuestionario de entrada: N/V.

#### IA
- "Interactive Mental Assistant" que ayuda a identificar el problema y da consejos; **chat en vivo con un "mental coach"** [AN ficha]. Si es IA generativa o reglas: N/V.

#### Registro emocional / estadísticas / gamificación
- Mood tracker mencionado sólo por fuente secundaria débil [NV]. Resto N/V.

#### Trabajo con profesional
- "Mental coach" por chat [AN]; no terapeutas licenciados verificados.

#### Seguridad, privacidad y crisis
- Descargo oficial: no pretende diagnosticar, tratar, curar ni prevenir; no sustituye atención profesional [OF ficha].
- Etiquetas de privacidad App Store: datos **vinculados a la identidad** (salud y forma física, compras, contacto, contenido de usuario, identificadores, uso, diagnóstico) y datos usados para **rastrear entre apps/webs** de otras empresas (compras, identificadores, uso) [OF ficha].
- Privacy International (resumido por VPN Overview) señaló que la política de BetterMe permite compartir con proveedores no nombrados y planteó dudas sobre la base legal RGPD [2ª; artículo sobre apps de dieta, posiblemente referido a la app de fitness, no necesariamente a la de salud mental].
- **Controversia de facturación**: múltiples quejas de usuarios por cobros tras cancelar y cancelación difícil (Şikayetvar, reseñas agregadas por Kimola); BetterMe responde que los términos de renovación se muestran antes del primer pago [2ª]. No se halló acción regulatoria (FTC) ni demanda [búsqueda negativa]. Las críticas de Nutrola provienen de un competidor [NV].
- No confundir con **BetterHelp** (sanción FTC de US$7,8 M por compartir datos de salud), que es otra empresa.
- Recursos de crisis: N/V.

#### Accesibilidad, idiomas, plataformas
- iOS (ficha), Android (cafebazaar/Google Play) [OF/2ª]. **15 idiomas incluido español** [OF ficha]. Accesibilidad declarada: N/V.

#### Evidencia
- Ninguna evaluación independiente (PsyberGuide/ORCHA) ni estudio encontrado [búsqueda negativa].

#### Fortalezas / debilidades / oportunidades
- **F:** formato de micro-sesiones de 5 min distribuidas en el día; disponible en español.
- **D:** precio alto y prácticas de suscripción criticadas; rastreo publicitario; sin evidencia; "asistente" poco definido; sin crisis verificada.
- **O:** competir con transparencia (precio claro, cancelación en un toque, sin rastreo) manteniendo la estructura mañana/tarde/noche.

#### Fuentes (consultadas 2026-10-15)
- https://apps.apple.com/us/app/-/id1363010081 — descripción oficial, plan diario, asistente, coach, descargos, etiquetas de privacidad, idiomas.
- https://apppricinglab.com/iap/apple/1363010081 — precios de compras integradas.
- https://adapty.io/paywall-library/betterme-mental-health/ — muro de pago 2024.
- https://cafebazaar.ir/app/com.gen.bettermeditation?l=en — disponibilidad Android.
- https://kimola.com/reports/insightful-review-analysis-of-betterme-mental-health-app-app-store-de-151623 — análisis de reseñas (cancelación, cargos).
- https://www.sikayetvar.com/en/betterme-us/billing-problems-with-the-betterme-app — quejas de facturación y respuesta de la empresa.
- https://nutrola.app/en/blog/why-does-betterme-auto-renew-without-warning — crítica de competidor (NV).
- https://vpnoverview.com/news/do-diet-apps-keep-your-data-safe/ — hallazgos de Privacy International sobre BetterMe.
- https://www.garagegymreviews.com/equipment/betterme-health-coaching-app — identidad fitness de la marca.

---

### Extra A. How We Feel

#### Público y problema
- Adolescentes y adultos que quieren **nombrar con precisión** lo que sienten y aprender estrategias de regulación [OF Yale].

#### Propuesta de valor y modelo de negocio
- Organización sin ánimo de lucro de base científica financiada por donaciones; **gratis** [2ª ORCHA/Yale]. Creada con el Yale Center for Emotional Intelligence (Marc Brackett); equipo de producto liderado por Ben Silbermann (Pinterest) [OF Yale/Brackett].

#### Orientaciones terapéuticas
- **Inteligencia emocional / RULER** (Mood Meter energía × agrado); estrategias cognitivas, de movimiento, mindfulness y sociales [OF].

#### Catálogo
- Check-ins con 4 cuadrantes que se ramifican en **132 emociones**; etiquetas de factores y diario; vídeos cortos de estrategias: "Change Your Thinking", "Move Your Body", "Be Mindful", "Reach Out" [OF ficha / 2ª ORCHA].

#### Registro / estadísticas
- Detección de patrones; integración con HealthKit (sueño, ejercicio) [OF ficha]. Revisión mensual exportable como imagen documentada por galería de flujos [2ª lazyweb]; exportación de datos completa no encontrada (usuarios se quejan) [2ª].

#### Comunidad
- Compartir cómo te sientes con amigos de confianza en tiempo real (opcional) [OF].

#### IA, gamificación, profesional
- N/V.

#### Privacidad y crisis
- Todos los datos en el dispositivo salvo opt-in para enviar versión anonimizada a investigación [AN desarrollador]. Crisis: N/V.

#### Idiomas/plataformas
- Ficha App Store: inglés [OF ficha consultada]; plataformas iOS y Android según universidades y ORCHA, aunque una ficha dice sólo iPhone [2ª, contradictorio].

#### Evidencia
- No hay estudio de resultados de la app; Yale usa datos de la app en investigación (Ivcevic, Brackett et al., 2024, *Frontiers in Psychology*, afecto diario en COVID-19) [OF Yale]. El marco RULER tiene evidencia en escuelas (Brackett et al., 2019, *Educational Psychologist*) — no extrapolable a la app [2ª].

#### F / D / O
- **F:** granularidad emocional y regulación; gratis; privacidad local. **D:** sin español; exportación limitada; sin evidencia de resultados. **O:** vocabulario emocional en español conectado a habilidades concretas.

#### Fuentes (consultadas 2026-10-15)
- https://apps.apple.com/us/app/-/id1562706384 — ficha: funciones, HealthKit, amigos, privacidad local, idioma inglés.
- https://medicine.yale.edu/news-article/the-how-we-feel-app-helping-emotions-work-for-us-not-against-us/ — objetivo (granularidad y regulación), equipo.
- https://medicine.yale.edu/childstudy/services/community-and-schools-programs/center-for-emotional-intelligence/research/current-research/how-we-feel-longitudinal-study/ — investigación con datos de la app.
- https://cdn.orchahealth.com/tenant-data/tenants/54347af5-71fe-42dc-97c8-2ea7acbdd695/packages/7ed4f3b3-c588-493d-a4e4-22ea5651a917/files/How%20We%20Feel_1.0-1.pdf — ficha ORCHA/formulario: cuadrantes, 132 emociones, plataformas.
- https://marcbrackett.com/how-we-feel-app-3/ — origen y sin ánimo de lucro.
- https://www.clarku.edu/counseling/self-help/apps-for-self-help/ — iOS y Android.
- https://app.lazyweb.com/flow/how-we-feel/export-monthly-review — flujo de revisión mensual.

---

### Extra B. MindDoc

#### Público y problema
- Adultos con síntomas de depresión, ansiedad, trastornos alimentarios o insomnio que quieren monitorizar síntomas y aprender autoayuda [OF ficha tienda DE/US].

#### Propuesta de valor y modelo de negocio
- Preguntas diarias de seguimiento → **valoración global descargable para compartir con el profesional**; biblioteca de cursos basados en **TCC**; orientación para encontrar psicoterapia [OF ficha]. En Alemania, terapia online semanal si el seguro la cubre [OF ficha DE].
- Freemium con prueba de 7 días; DE: 7,99 €/mes, 29,99 €/3 meses, 69,99 €/año [OF ficha DE]; cifras varían por región [2ª].
- Se declara **producto sanitario de clase I** según normativa UE [OF ficha]. Existe versión con prescripción ("MindDoc auf Rezept") [2ª protocolo].

#### Funciones clave
- Registro de ánimo y diario; cursos y ejercicios; informe para profesional [OF]. Quejas: paywall reciente, pérdida de datos, pocas emociones [2ª Kimola].

#### Privacidad y crisis
- Sujeta al RGPD; Mozilla (2023) elogió que extendiera derechos de acceso/borrado a todos los usuarios pero criticó vaguedad en compartición y que permitiera a Facebook recoger datos de apertura de la app [2ª Mozilla]. Crisis: N/V.

#### Idiomas/plataformas
- Alemán e inglés; **sin español** [OF ficha]. iOS y Android [OF].

#### Evidencia
- Protocolo ECA: Beintner et al. (2023), "Improving Mild to Moderate Depression With an App-Based Self-Guided Intervention: Protocol for a Randomized Controlled Trial", *JMIR Research Protocols* 12:e46651 (MindDoc Health, FU Berlin, Schön Klinik Roseneck, LMU) [2ª revista].
- Resultados en preprint JMIR: n=571, menor gravedad depresiva a 8 semanas (d=0,27), abandono 18,4 % [2ª; estado final de publicación no verificado].

#### F / D / O
- **F:** informe para profesional; estatus de producto sanitario; ECA. **D:** sin español; paywall; incidencias de privacidad pasadas. **O:** informe estructurado compartible en español, con cuestionarios validados.

#### Fuentes (consultadas 2026-10-15)
- https://apps.apple.com/DE/app/id1052216403 — ficha DE: cursos, terapia online, precios, idiomas, clase I.
- https://apps.apple.com/us/app/minddoc-mental-health-support/id1052216403?l=ar — ficha US: informe compartible, cursos TCC.
- https://www.heise.de/tipps-tricks/4-Mental-Health-Apps-im-Ueberblick-9200558.html — precios y descripción (prensa).
- https://researchprotocols.org/2023/1/e46651 — protocolo ECA.
- https://preprints.jmir.org/preprint/91378/submitted — resultados en preprint (no abierto en su totalidad).
- https://foundation.mozilla.org/privacynotincluded/minddoc/ — evaluación de privacidad 2023.
- https://kimola.com/reports/unlock-insights-with-the-minddoc-app-feedback-analysis-report-app-store-us-144961 — análisis de reseñas.

---

### Tabla comparativa de puntuaciones (0–3 o N/V)

Escala: **0** = ausente (evidencia de que no existe o, en R26, búsqueda sin resultados); **1** = básico/parcial; **2** = presente y sólido; **3** = diferencial/referente. **N/V** = sin evidencia en las fuentes obtenidas. Las puntuaciones reflejan evidencia documental, no pruebas de uso.

| ID | Criterio | Finch | Headspace | Daylio | Therapist Aid | BetterMe MH | How We Feel | MindDoc |
|---|---|---|---|---|---|---|---|---|
| R01 | psicoeducación | 1 | 3 | 0 | 3 | N/V | 2 | 2 |
| R02 | habilidades guiadas paso a paso | 1 | 3 | 0 | 2 | 2 | 2 | 2 |
| R03 | registro de pensamientos | N/V | N/V | N/V | 3 | N/V | N/V | N/V |
| R04 | exposición gradual | N/V | N/V | 0 | N/V | N/V | N/V | N/V |
| R05 | experimentos conductuales | N/V | N/V | 0 | N/V | N/V | N/V | N/V |
| R06 | regulación emocional DBT | N/V | N/V | 0 | 3 | N/V | 2 | N/V |
| R07 | mindfulness guiado audio | 1 | 3 | 0 | 2 | 2 | 1 | N/V |
| R08 | recorridos estructurados | 1 | 3 | 0 | N/V | 2 | N/V | 2 |
| R09 | personalización por objetivos | 2 | 1 | 1 | N/V | 2 | N/V | N/V |
| R10 | recomendación de herramienta según estado | N/V | 2 | N/V | N/V | N/V | 2 | N/V |
| R11 | diario/registro emocional | 2 | 1 | 3 | 1 | N/V | 3 | 3 |
| R12 | seguimiento de hábitos | 3 | N/V | 2 | 0 | N/V | 1 | N/V |
| R13 | objetivos y recordatorios | 3 | N/V | 3 | 1 | 1 | N/V | N/V |
| R14 | estadísticas/gráficos | 2 | N/V | 3 | 0 | N/V | 2 | 2 |
| R15 | gamificación | 3 | N/V | 2 | 0 | N/V | N/V | N/V |
| R16 | IA conversacional | N/V | 2 | N/V | 0 | 1 | N/V | N/V |
| R17 | informes/exportación para terapeuta | N/V | N/V | 2 | 2 | N/V | 1 | 3 |
| R18 | vínculo con profesional | N/V | 3 | 0 | 3 | 1 | N/V | 2 |
| R19 | recursos de crisis | N/V | 2 | N/V | 1 | N/V | N/V | N/V |
| R20 | plan de seguridad | N/V | N/V | N/V | 2 | N/V | N/V | N/V |
| R21 | privacidad/sin cuenta | 1 | 1 | 3 | N/V | 0 | 3 | 2 |
| R22 | accesibilidad declarada | N/V | 3 | N/V | N/V | N/V | N/V | N/V |
| R23 | español | N/V | 2 | 3 | 2 | 2 | 0 | 0 |
| R24 | gratuito | 2 | 1 | 2 | 2 | 0 | 3 | 1 |
| R25 | contenido infantil/familias | 1 | 3 | N/V | 2 | N/V | N/V | N/V |
| R26 | evidencia publicada de la app | 0 | 3 | 1 | 0 | 0 | 1 | 2 |
| R27 | simulaciones/juegos con fin terapéutico | 1 | N/V | 0 | 1 | N/V | N/V | N/V |
| R28 | comunidad | 2 | N/V | N/V | N/V | N/V | 2 | N/V |

**Notas de la tabla**
- Headspace R10 y R19 se basan en lo **anunciado** para Ebb (sugerencias según estado emocional, escalado de crisis), sin verificación independiente.
- Headspace R26 = 3 por ECA publicados (coautores de la empresa). MindDoc R26 = 2 (protocolo publicado + resultados en preprint). Daylio R26 = 1 (informe de caso). How We Feel R26 = 1 (estudios con datos de la app, no de eficacia).
- Daylio R17 = 2: CSV gratis/PDF Premium, sin cifrar y sin canal con el profesional.
- Therapist Aid R11–R15 bajos porque es un repositorio de fichas, no una app de seguimiento; R20 = 2 por fichas de plan de seguridad en su sección de suicidio.
- Finch R15 = 3 por ser referente de gamificación, con las críticas de culpa/dependencia descritas (no es una valoración positiva sin matices).
- BetterMe R21 = 0 por etiquetas oficiales de datos vinculados y rastreo; R16 = 1 porque no está claro que el "asistente" sea IA.
- How We Feel R23 = 0 según la ficha consultada (sólo inglés); MindDoc R23 = 0 (alemán/inglés).
