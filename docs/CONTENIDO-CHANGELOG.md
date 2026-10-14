# Registro de cambios del contenido

Cada sesión de práctica y cada registro de antídoto guarda la **versión** del contenido usado (`contentVersion`).
Si se modifica el guion de una práctica o antídoto de forma relevante para la clínica, hay que:

1. Incrementar su `version` en `REVIEW_OVERRIDES` (`src/domain/governance.ts`).
2. Anotarlo aquí con fecha, elemento, cambio y motivo.

## Proceso de revisión clínica

| Estado | Significado | Visible para usuarios reales |
|---|---|---|
| `borrador` | Requiere decisión clínica | No (sólo en modo demo, con distintivo) |
| `pendiente` | Publicado, revisión clínica formal pendiente | Sí |
| `revisado` | Aprobado por el/la responsable clínico/a | Sí |

Para aprobar un elemento: en `REVIEW_OVERRIDES`, `status: 'revisado'`, `reviewedBy` y `reviewedAt`; después, una
entrada en este registro.

---

## 2026-10-14 · Fase 2: ciclo completo de cada ejercicio (versión 1)

Cada práctica sigue cinco pasos: Comprender, Practicar, Reflexionar, Llevarlo a tu vida y Revisar. Los dos últimos son
nuevos (`src/domain/application.ts`).

**Llevarlo a tu vida.**
- Al cerrar una práctica se puede escribir cuándo y dónde probarla. Es opcional y trae ideas para elegir.
- El plan se guarda con la sesión (campo `transfer`, de 280 caracteres como máximo).

**Revisar.**
- Entre 6 horas y 14 días después, el Panel pregunta por cada plan si se pudo usar, si sirvió (me sirvió, me dio igual,
  no era para esto) y qué se aprendió.
- «Todavía no» también se guarda, sin juicio: muestra qué se interpone.
- Desde cualquier práctica se puede registrar un uso sin plan previo («¿Ya la usaste en tu vida? Cuéntalo»).
- Los registros van a la nueva colección `applications`.

**Indicadores separados**, ninguno usado como medida de mejoría clínica:
- Práctica.
- Aplicación en la vida cotidiana.
- Utilidad percibida.

El Panel suma «En tu vida · 28 días» y el informe para el terapeuta, «Habilidades usadas en la vida cotidiana».

**Niveles de dominio de la colección DBT**: descubrir, practicar (3 prácticas), aplicar (una vez en la vida) e integrar
(le sirvió 3 veces). Las habilidades del diario se aplican a las 6 entradas y se integran a las 12. No bajan nunca.

**Reglas de Firestore.** Las sesiones aceptan `transfer` y hay una colección nueva, `applications`: sólo agregar,
valores cerrados y nota de 280 caracteres como máximo. Exportar y borrar los datos la incluyen. Probado en el emulador:
24/24. **Hay que volver a publicar `firestore.rules` en la consola de Firebase.**

**Seguridad.** El aviso de las prácticas de nivel 2 explica cómo detenerse: «Pausar» y después «Terminar aquí».

**Para la revisión clínica:**
- Los umbrales de los niveles (3 prácticas; útil 3 veces).
- Los plazos de la revisión (de 6 horas a 14 días).

---

## 2026-10-14 · Fase 1: seguridad y catálogo clínico (versión 1)

**Nombre.** La app pasa a llamarse **Habilidades Psicológicas**. Los identificadores internos (claves de
almacenamiento, ids) no cambian.

**Recursos de crisis de Argentina** (`src/config/safety.ts`). Verificados el 2026-10-14 en argentina.gob.ar, el sitio
del Centro de Asistencia al Suicida y notas de prensa de 2026:
- Emergencias 911.
- Línea Nacional de Salud Mental 0800-999-0091: gratuita, las 24 horas, en todo el país.
- Centro de Asistencia al Suicida 135 (CABA y GBA). Desde el resto del país, (011) 5275-1135 o 0800-345-1435.
- Línea 144 de violencia de género: gratuita y las 24 horas.

Un test obliga a revisarlos cada 12 meses (`CRISIS_RESOURCES_CHECKED_AT`).

**Botón «Ayuda» en todas las pantallas.** Abre los recursos con un toque para llamar, el plan de seguridad (si está
publicado) y los antídotos. Es el nivel 3 de riesgo: la app no gestiona crisis, facilita el acceso a ayuda humana.

**Mayores de 18 años.** El consentimiento y el registro piden confirmar la edad. Se actualiza la versión del
consentimiento (`2026-10-b`), así que cada usuario lo vuelve a aceptar una vez.

**Enfoque y nivel de riesgo** (`src/domain/catalog.ts`).
- Cada práctica y plantilla lleva su enfoque de origen: DBT, TCC, ACT, compasión (CFT), mindfulness, psicología
  positiva, contemplativa, relajación o escritura terapéutica. Se muestra en la práctica.
- Nivel 2, «con precauciones»:
  - Prácticas: tonglen, conciencia pura, yo observador, perdón REACH, aceptación radical y hacer espacio. Piden
    confirmar que se leyeron las precauciones y ofrecen una alternativa de nivel 1.
  - Plantillas del diario: escritura expresiva, escalera de exposición, perdón y análisis en cadena.
- Tests nuevos: enfoque en todo el contenido, alternativas de nivel 1 y vigencia de los recursos de crisis.

**Para la revisión clínica:**
- La lista de contenidos de nivel 2 y sus alternativas.
- Si hay que añadir recursos provinciales o la línea de consumos problemáticos.

---

## 2026-10-14 · Tu jardín: motivación sin castigo (versión 1)

Gamificación terapéutica. Las reglas quedan en la guía de estilo, sección *Motivación*. No guarda datos nuevos: todo
se deriva de las sesiones y del diario, así que **no cambian las reglas de Firestore**.

**Tu jardín** (`/crecimiento`, `src/domain/growth.ts`, `src/components/growth/`).
- Jardín ilustrado en SVG, con modo claro y oscuro y animaciones suaves que respetan «reducir movimiento».
- Cada práctica completa hace crecer una planta de su familia: helechos (atención), flores (compasión y cualidades) y
  árboles (comprensión). Cada planta pasa por cinco etapas. Los antídotos completos también cuentan.
- Hitos a las 1, 5, 12, 25, 50, 80, 120 y 180 prácticas: sol, mariposas, arroyo, pájaros, banco, faroles y jardín
  maduro. Cada entrada del diario suma una luciérnaga.
- Usa los recuentos de toda la vida con consultas de recuento de Firestore (unas 17 lecturas por carga, sin índices
  nuevos), así que el jardín no se reduce cuando las sesiones salen de la ventana de 90 días. Sin conexión, usa la
  ventana local.
- Al terminar una práctica o un antídoto aparece un aviso sobrio con lo que creció.

**Colección de habilidades DBT.**
- 13 habilidades, con íconos propios: mente sabia, STOP, tarjeta diaria, TIPP, cinco sentidos, pros y contras,
  aceptación radical, comprobar los hechos, acción opuesta, PLEASE, análisis en cadena, DEAR MAN y GIVE y FAST.
- Cinco niveles de dominio que no bajan: descubierta, en práctica, afianzada, integrada y propia (1, 3, 6, 10 y 15
  usos).

**Desafío semanal opcional.** 12 desafíos que rotan cada lunes. Se pueden ocultar, no se «pierden» y sólo cuentan lo
de la semana en curso.

**Panel.** La constancia pasa de «días seguidos» y «racha más larga» a «días practicados este mes». El informe para
el terapeuta conserva la racha como dato clínico.

**Verificación.** 12 tests nuevos (`growth.test.ts`): crecimiento determinista, que el jardín nunca retroceda, días del
mes, niveles de dominio y desafíos que apunten a contenido existente. 281 tests en total. Revisado con capturas en
claro, oscuro y móvil.

**Para la revisión clínica:**
- Si conviene ofrecer un ajuste para ocultar del todo el jardín a quien no le sirva.
- Si el desafío semanal debería adaptarse al programa que sigue cada paciente.

---

## 2026-10-14 · Antídotos, evaluaciones y programas nuevos (versión 1)

Todo el contenido nuevo queda en estado `pendiente`, salvo el ISI, que queda en `borrador`.

**Seis antídotos nuevos** (`src/domain/antidotes-more.ts`).
- *Vergüenza*: mostrarse con compasión (Gilbert y Procter, 2006; Rizvi y Linehan, 2005). Nivel preliminar.
- *Miedo*: acercarse con seguridad (Craske et al., 2014; Carpenter et al., 2018). Nivel moderado.
- *Celos*: comprobar los hechos y soltar el control. Nivel preliminar; la evidencia específica es escasa. Su «Cuándo
  no usarlo» remite a ayuda especializada si hay miedo a la pareja.
- *Frustración o irritabilidad*: pausa y paciencia activa (Bushman, 2002). Nivel moderado.
- *Vacío o aburrimiento*: contacto y sentido (activación conductual). Nivel preliminar. Remite al plan de seguridad.
- *Inseguridad o autoestima baja*: trato amable y logros reales (Neff, 2003; Kirby et al., 2017). Nivel moderado.
- Las reglas de Firestore aceptan las seis emociones nuevas en los registros de antídotos.
- La rueda de emociones enlaza ahora vergüenza, miedo y celos con sus antídotos propios.

**Tres evaluaciones nuevas** (`src/domain/instruments.ts`).
- *DERS-16* (dificultades de regulación emocional, 16–80; Bjureberg et al., 2016).
- *ISI* (gravedad del insomnio, 0–28; Bastien et al., 2001), con los puntos de corte y el cambio relevante de
  8 puntos de Morin et al. (2011). **Queda en borrador:** tiene derechos de autor y su uso en una app requiere
  licencia de Mapi Research Trust.
- *PSS-10* (estrés percibido, 0–40; Cohen et al., 1983; versión española de Remor, 2006), con los ítems 4, 5, 7 y 8
  invertidos.
- DERS-16 y PSS-10 no tienen puntos de corte clínicos oficiales. La app divide el rango en tercios y usa un cambio
  relevante orientativo de alrededor del 10 % del rango (7 y 4 puntos).
- Las reglas de Firestore validan el número de ítems, los rangos y el cálculo de la puntuación, invertidos incluidos.
- La pantalla de evaluaciones admite opciones distintas por ítem (ISI) y escalas que no empiezan en 0 (DERS-16).

**Cuatro programas nuevos y tres artículos.**
- *Dormir mejor* (4 semanas, TCC-I), con el artículo *Dormir mejor: la terapia del insomnio* (Trauer et al., 2015;
  Edinger et al., 2021). Advierte que no conviene reducir horas de cama por cuenta propia con trastorno bipolar,
  epilepsia, apnea o trabajos con riesgo por somnolencia.
- *Autoestima y autocrítica* (4 semanas), con el artículo *Autoestima y autocrítica* (Fennell, 1997; Kolubinski et
  al., 2018).
- *Atravesar un duelo* (4 semanas), basado en el modelo de proceso dual. Usa el artículo *Atravesar un duelo*, que ya
  existía.
- *Ansiedad social* (4 semanas), con el artículo *Ansiedad social* (Clark y Wells, 1995; Mayo-Wilson et al., 2014).
  No usa la escalera de exposición, que sigue en borrador.

**Verificación.**
- Tests: 269 pasan. Nuevos tests de rango de puntuación para cada instrumento, de los ítems invertidos de la PSS-10 y
  de los puntos de corte del ISI. Reglas de Firestore en el emulador: 22/22.
- DOI nuevos sin verificar contra Crossref: Gilbert y Procter (2006), Craske et al. (2014), Bushman (2002),
  Bjureberg et al. (2016), Gratz y Roemer (2004), Bastien et al. (2001), Morin et al. (2011), Cohen et al. (1983),
  Remor (2006), Edinger et al. (2021), Fennell (1997), Kolubinski et al. (2018) y Mayo-Wilson et al. (2014).
  Ejecutar `npm run verify:refs`.

**Para la revisión clínica:**
- La redacción de los ítems de DERS-16, ISI y PSS-10 es una adaptación propia: comparar con las versiones españolas
  validadas antes de usarlas con pacientes.
- Las franjas y los cambios relevantes orientativos de DERS-16 y PSS-10.
- La licencia del ISI.
- Duelo reciente: si el programa debe recomendar esperar o hacerse con acompañamiento profesional.

---

## 2026-10-14 · Tarjeta diaria, análisis en cadena y rueda de emociones (versión 1)

Todo el contenido nuevo queda en estado `pendiente` (publicado, revisión clínica formal pendiente).

**Diario: dos plantillas DBT nuevas.**
- *Tarjeta diaria DBT* (`tarjeta-diaria`): el día en una frase, cinco emociones del 0 al 10, el impulso más fuerte y
  su intensidad, una conducta a evitar, las habilidades usadas y cuánto ayudaron. No pregunta por ideación suicida
  de forma explícita. El aviso remite al plan de seguridad y a emergencias si hubo impulsos de hacerse daño.
- *Análisis en cadena* (`analisis-cadena`): vulnerabilidad, disparador, eslabones, consecuencias, dónde cortar la
  cadena, prevención y reparación (Rizvi y Ritschel, 2014). El aviso pide hacerlo en calma y revisarlo con el/la
  terapeuta si la conducta fue hacerse daño.
- Las reglas de Firestore aceptan los dos tipos nuevos y validan sus campos. Probado en el emulador: 20/20 tests.
  **Hay que volver a publicar `firestore.rules`** en la consola de Firebase; si no, estas entradas no se guardan.

**Rueda de emociones** (`/biblioteca/rueda-de-emociones`, datos en `src/domain/emotions.ts`).
- 10 familias: alegría, amor, tristeza, miedo, ira, vergüenza, culpa, envidia, celos y asco.
- Cada una tiene cinco matices de menor a mayor intensidad, cómo se siente en el cuerpo, a qué impulsa, cuándo encaja
  con los hechos y su acción opuesta. Cuando existe, enlaza al antídoto.
- Se enlaza desde la Biblioteca, el buscador, el glosario (*granularidad emocional*) y la tarjeta diaria.
- Nuevo test de calidad: familias completas, legibilidad INFLESZ ≥ 55 y antídotos existentes.

**Programa *Habilidades DBT*.** La semana 1 propone la tarjeta diaria; la semana 3, el análisis en cadena.

**Verificación.**
- DOI nuevo sin verificar contra Crossref: Rizvi y Ritschel (2014), 10.1016/j.cbpra.2013.09.002. Ejecutar
  `npm run verify:refs`.

**Para la revisión clínica:**
- Tarjeta diaria: si conviene añadir un ítem explícito de impulsos de autolesión o suicidio. Exigiría un protocolo de
  respuesta como el del ítem 9 del PHQ-9.
- Rueda de emociones: las acciones opuestas de amor (relación dañina), celos y culpa.

---

## 2026-10-14 · Habilidades DBT para pacientes (versión 1)

Todo el contenido nuevo queda en estado `pendiente` (publicado, revisión clínica formal pendiente). Completa las
habilidades DBT que ya estaban (TIPP, acción opuesta y DEAR MAN) con los cuatro módulos del manual de Linehan (2015).

**Prácticas nuevas** (`src/domain/practices-dbt.ts`), todas con nivel de evidencia preliminar:
- Conciencia plena: *Mente sabia* (iniciación).
- Tolerancia al malestar:
  - *Calmarse con los cinco sentidos*: herramienta rápida de 2,5 min (iniciación).
  - *Pros y contras ante un impulso* (iniciación). Remite al plan de seguridad si el impulso es hacerse daño.
  - *Aceptación radical* (intermedio, requiere *Mente sabia*). Precaución: no implica aceptar maltrato o peligro;
    con duelos o traumas recientes, practicarla con el/la terapeuta.
- Regulación emocional:
  - *Comprobar los hechos* (intermedio).
  - *PLEASE: cuidar el cuerpo* (iniciación). Precaución para trastornos de la conducta alimentaria.
- Efectividad interpersonal: *GIVE y FAST* (iniciación), con validación (Shenk y Fruzzetti, 2011).

**Biblioteca, glosario y programas.**
- Artículo *Las habilidades de la DBT*: mapa de los cuatro módulos. Su recuadro aclara que la app no sustituye un
  tratamiento DBT completo y remite a un equipo profesional ante autolesiones, ideación suicida o crisis frecuentes.
- El artículo *Kit de crisis emocional* incorpora los cinco sentidos, los pros y contras y la aceptación radical.
- Glosario: aceptación radical, mente sabia, terapia dialéctico-conductual (DBT) y validación.
- Programa *Habilidades DBT*, de 4 semanas: un módulo por semana.

**Verificación.**
- Los tests de calidad y de integridad pasan (legibilidad INFLESZ, guía de estilo, niveles y enlaces).
- DOI nuevos sin verificar contra Crossref (no hubo acceso a la red en esta sesión): Linehan et al. (2015),
  10.1001/jamapsychiatry.2014.3039; Neacsiu et al. (2010), 10.1016/j.brat.2010.05.017; Valentine et al. (2015),
  10.1002/jclp.22114; Shenk y Fruzzetti (2011), 10.1521/jscp.2011.30.2.163. Ejecutar `npm run verify:refs`.

**Para la revisión clínica:**
- Aceptación radical: salvaguardas ante maltrato, duelo y trauma.
- PLEASE: redacción de la precaución para trastornos de la conducta alimentaria.
- Pros y contras: si el plan de seguridad debe enlazarse directamente desde la práctica.


## 2026-10-13 · Habilidades: crisis, pensamiento, relaciones, pánico y cuidadores (versión 1)

Todo el contenido nuevo queda en estado `pendiente` (publicado, revisión clínica formal pendiente).

**Kit de crisis (DBT).**
- Prácticas:
  - *TIPP: kit de crisis*: herramienta rápida de 3 min. Precauciones: problemas cardíacos, tensión baja,
    trastornos de la conducta alimentaria y betabloqueantes.
  - *Acción opuesta*: nivel preliminar (Rizvi y Linehan, 2005).
- Artículo *Kit de crisis emocional*.
- En Antídotos, a intensidad 9–10 aparece un acceso directo al TIPP antes de la estabilización.

**Trampas del pensamiento.**
- Catálogo de 12 distorsiones cognitivas (Beck, 1979; Burns, 1980) en `/biblioteca/trampas-del-pensamiento`.
  Cada una tiene ejemplo, pregunta y alternativa.
- El registro de pensamientos tiene un campo opcional «Trampa» y enlaza al catálogo.
- El buscador y el glosario (*distorsión cognitiva*) enlazan al catálogo.

**Habilidades interpersonales.**
- Práctica *DEAR MAN*, nivel moderado (Speed et al., 2018).
- Plantilla del diario *Preparar una conversación difícil*.
- Artículo *Asertividad y límites*.

**Pánico y cuidadores.**
- Antídoto *Ataque de pánico*, basado en Clark (1986) y Pompoli et al. (2016, Cochrane). Su «Cuándo no usarlo»
  remite al médico en el primer episodio y a urgencias ante dolor en el pecho, falta de aire o desmayo.
- Artículos:
  - *Ataques de pánico*, con el diagrama «El círculo del pánico».
  - *Cuidar sin agotarse* (Klimecki et al., 2014; Sörensen et al., 2002).
- Programa *Cuidar sin agotarse*, de 2 semanas.
- Glosario: asertividad, distorsión cognitiva, fatiga por empatía y tolerancia al malestar.

**Verificación.**
- 99 DOI comprobados contra Crossref: 99 correctos.
- Nuevo test de calidad para las trampas: comillas españolas, pregunta y legibilidad INFLESZ ≥ 55.
- Las reglas de Firestore aceptan la plantilla `conversacion`, el campo `trampa` y la emoción `panico`.

**Para la revisión clínica:**
- Contraindicaciones del TIPP, sobre todo el agua fría y el ejercicio intenso.
- Si el antídoto de pánico debe quedar en borrador hasta tener el visto bueno.
- Redacción de los límites en *Asertividad y límites*, por si hay violencia en la relación.

## 2026-10-13 · Plan de mejora de contenido (versión 1 de todo el contenido)

**Verificación de referencias (A1).** 93 DOI comprobados contra Crossref; 93 correctos. Correcciones:
- Masuda et al. (2004): faltaba el subtítulo del artículo.
- Hasenkamp et al. (2012): faltaba el subtítulo del artículo.
- Prakhinkit et al. (2014): nombre oficial de la revista, que empieza por "The".

**Criterios de evidencia (A2).** El nivel se refiere a la técnica tal como se ofrece en la app.
- Bajan de robusta a moderada:
  - Prácticas: relajación muscular progresiva, pausa de autocompasión, perdón REACH, activación conductual,
    resolución de problemas.
  - Antídotos: autocrítica, rumiación, resentimiento, desánimo.
  - Plantillas del diario: registro de pensamientos, registro de actividades, perdón por escrito, diario de sueño,
    escalera de exposición, resolución de problemas.
- Suben a robusta (metaanálisis del formato breve): "Mi mejor yo posible" (práctica y plantilla).

**Legibilidad (A3).** Se reescribieron los 15 avisos «Cuándo no usarlo». Antes, 10 estaban por debajo de "normal" en la
escala INFLESZ y uno era "muy difícil" (24). Ahora todos están entre 56 y 87.

**Estilo (A4).** Se convirtieron 179 pares de comillas rectas a comillas españolas « ».

**Contenido nuevo (B).**
- Herramientas rápidas: espacio de respiración de tres minutos, pausa STOP, mano en el pecho y plantas de los pies.
- Prácticas: resolución de problemas y "Hacer espacio" (aceptación para sensaciones difíciles y dolor).
- Antídotos: duelo, agobio o sobrecarga, y bloqueo o procrastinación.
- Diario: resolución de problemas, diario de sueño (formato de consenso) y experimento conductual.
- Artículos: duelo, estrés y agotamiento, procrastinación y perfeccionismo, dolor crónico, mitos y realidades, y cómo
  evaluamos la evidencia.
- Programa: Estrés y agotamiento. Glosario de 25 términos. Diagramas de 5 ciclos clínicos.

**En borrador, pendientes de decisión clínica (C).**
- Plan de seguridad (Stanley-Brown).
- Escalera de exposición y su artículo.
- PHQ-9: el ítem 9 activa el aviso de seguridad.

**Publicado.** GAD-7 (sin ítem de riesgo).
