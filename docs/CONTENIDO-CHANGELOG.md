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
