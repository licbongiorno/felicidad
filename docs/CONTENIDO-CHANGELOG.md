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
