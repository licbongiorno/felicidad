# Guía de revisión clínica

Todo el contenido de la app está en estado `pendiente`, o en `borrador` si necesita una decisión clínica antes de mostrarse. Esta guía ordena la revisión por riesgo, para empezar por lo que más daño podría hacer si estuviera mal.

## Cómo se hace

1. **Entrar al panel.** En Vercel, la variable `NEXT_PUBLIC_REVIEWER_EMAILS` tiene que incluir tu correo. Después se entra a `/revision` con esa cuenta. En el modo demo cualquiera puede verlo.
2. **Filtrar por prioridad.** El panel tiene filtros de prioridad y ordena primero lo más sensible. Cada elemento dice por qué tiene esa prioridad.
3. **Leer como lo verá un paciente.** El título abre el contenido en otra pestaña, tal como se muestra en la app.
4. **Decidir.** Para cada elemento, «Aprobar» o «Pedir cambios», con un comentario. Las decisiones se guardan en el dispositivo hasta que las copias.
5. **Enviar.** «Copiar decisiones» arma un texto listo para pasar. Con ese texto se corrige lo pedido, se aprueba lo aprobado con `APPROVE_KEYS=<claves> npm run approve` y se registra en `docs/CONTENIDO-CHANGELOG.md`.

La aprobación queda atada al texto exacto de cada elemento (`src/domain/approved.json`). El contenido nuevo aparece como pendiente. Si se edita algo ya aprobado, las pruebas fallan hasta que se vuelva a aprobar o se revoque con `APPROVE_MODE=revoke APPROVE_KEYS=<claves> npm run approve`. Así nada llega a los usuarios como «revisado» sin que lo hayas visto.

No hace falta hacerlo todo de una vez. Se puede ir por bloques y enviar las decisiones de cada bloque.

## Prioridad 1 · crítica (79 elementos)

Son temas donde un error puede poner en riesgo a alguien. Conviene revisarlos primero y completos: prácticas, artículos, programas, píldoras y guías.

| Bloque | Qué hay | Qué mirar especialmente |
|---|---|---|
| **Plan de seguridad** (herramienta, en borrador) | Modelo de Stanley y Brown | Pasos, teléfonos, qué pasa con los datos y cuándo publicarlo. Hoy no se muestra. |
| **PHQ-9** | Incluye el ítem 9, sobre ideas de muerte | Qué se muestra al responder el ítem 9 y la derivación. Hace falta un protocolo definido. |
| **Autolesiones** (12) | Plan para el momento difícil, alternativas al impulso, demora del impulso, guía para familias | Que no se nombre ningún método, objeto ni parte del cuerpo. Que cada práctica pregunte por ideas de morir y derive. Que el tono no castigue. |
| **Duelo por suicidio** (13) | Culpa y «¿por qué?», qué contar, aniversarios, el propio riesgo | Pautas de comunicación segura de la OMS: «murió por suicidio», sin detalles ni una sola causa, sin presentarlo como salida. |
| **Trauma** (12) | Ventana de tolerancia, anclaje, contenedor, lugar tranquilo, pesadillas | Que nada pida recordar ni escribir el hecho. Que las dos prácticas de imaginación (riesgo 2) tengan salida clara. Que los tratamientos sólo se describan. |
| **Medicación** (12) | Preparar la consulta, efectos, ambivalencia, no suspender de golpe | Que no se indique, cambie ni suspenda nada. Que no haya nombres de remedios ni dosis. Revisar lo dicho sobre benzodiacepinas, alcohol y embarazo. |
| **Diagnósticos** (15) | Depresión, ansiedad, bipolaridad, trastorno límite, psicosis | Que no haya autodiagnóstico ni lenguaje estigmatizante. Que las señales de urgencia sean correctas, y también lo que se dice de la Ley 26.657. |
| **Apuestas** (13) | Señales, trampas del jugador, barreras, deudas, guía para familias | El aviso de riesgo suicida por deudas, la Línea 141 y que la charla con la familia no se proponga si hay violencia. |

## Prioridad 2 · alta (387 elementos)

- **Riesgo 2 (28):** prácticas y plantillas que pueden activar mucho, como silla vacía, tonglen, diálogo con el crítico o exposición. Hay que verificar que las precauciones sean claras y que la alternativa sugerida sea la adecuada.
- **Para chicos y familias (134):** actividades por edad, guías para familias y cuentos. Mirar que el lenguaje sea adecuado a cada edad, que no haya contenido que asuste y que la supervisión adulta esté clara.
- **Evaluaciones (7):** la interpretación de cada franja de puntaje y lo que se sugiere después.
- **Temas sensibles:**
  - TOC
  - imagen corporal y trastornos alimentarios
  - exposición y ansiedad por la salud
  - sexualidad
  - acoso escolar y laboral
  - crisis familiares
  - varones (violencia y riesgo suicida)
  - duelo perinatal
  - separación con violencia
  - conductas repetitivas
  - exposición social
  - terapia de esquemas
  - Jung (imaginación activa)
  - recaídas
  - enfermedad grave
  - alcohol y violencia de género
  - TDAH

## Prioridad 3 · habitual (321 elementos)

Psicoeducación general, gratitud, valores, hábitos, atención plena y relajación. El riesgo es bajo. Alcanza con mirar la exactitud, la legibilidad y que no se prometa de más.

## Lista de control para cada elemento

- **Exactitud:** lo que se afirma coincide con la evidencia citada, y el nivel de evidencia que se declara es honesto.
- **Seguridad:** las precauciones están donde hacen falta, los teléfonos son correctos y la derivación es clara. No se promete curar ni se reemplaza el tratamiento.
- **Lenguaje:** se trata de «tú», es claro y sin tecnicismos, sin culpar ni estigmatizar, y no excluye por género, orientación ni tipo de familia.
- **Adecuación al formato autoguiado:** se puede hacer sin terapeuta. Si no, tiene que estar marcado como de riesgo 2 o derivado.
- **Referencias:** son reales y están bien citadas. Esto se puede completar con `npm run verify:refs` cuando haya red.

## Teléfonos que usa la app (revisar una vez por año)

| Servicio | Contacto |
|---|---|
| Emergencias | 911 |
| Línea Nacional de Salud Mental | 0800-999-0091 |
| Centro de Asistencia al Suicida | 135 en CABA y GBA; 0800-345-1435 en el resto del país |
| Violencia de género | Línea 144 |
| Niñez y adolescencia | Línea 102 |
| Consumos (SEDRONAR) | Línea 141 |

Están en `src/config/safety.ts`. Hay una prueba que obliga a revisarlos cada 12 meses.
