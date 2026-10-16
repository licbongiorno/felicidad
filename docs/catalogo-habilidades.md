# Catálogo de habilidades por necesidad

- **Fecha:** 2026-10-15
- **Fuente de los datos:** extraídos del código con `npx tsx` sobre `src/domain/practices.ts` (`PRACTICES`, 108), `levels.ts` (`PRACTICE_LEVELS`), `catalog.ts` (`PRACTICE_APPROACHES`, `PRACTICE_RISK`, `JOURNAL_RISK`, `MODULES`), `governance.ts` (`reviewOf`), `journal.ts`, `antidotes.ts`, `programs.ts`, `pills.ts` y `challenges.ts`.
- **Estado de revisión:** las 108 prácticas están en `pendiente` (publicadas, sin revisión clínica formal). Ninguna está `revisado`.
- **Asignación a necesidades:** cada práctica tiene **un** módulo principal en el código (`MODULE_OF_PRACTICE`). La asignación a las 16 necesidades de [vision-producto.md](vision-producto.md) es una **propuesta del equipo**: una práctica puede servir a varias necesidades. **Requiere revisión clínica** antes de mostrarse en `/habilidades`.

**Columnas:** nivel (`I` iniciación, `M` intermedio, `A` avanzado) · enfoque (claves de `Approach`) · riesgo (1, o 2 → alternativa) · evidencia (`robusta`, `moderada`, `preliminar`, `contemplativa`) · `⚡` = herramienta rápida (`micro`).

---

## 1. Taxonomía por necesidad

### 1. Regular emociones intensas

| id | Título | Nivel | Enfoque | Riesgo | Evidencia |
|---|---|---|---|---|---|
| `tipp` ⚡ | TIPP: kit de crisis | I | dbt | 1 | moderada |
| `pausa-stop` ⚡ | Pausa STOP | I | mindfulness+dbt | 1 | preliminar |
| `cinco-sentidos` ⚡ | Calmarse con los cinco sentidos | I | dbt | 1 | preliminar |
| `plantas-de-los-pies` ⚡ | Las plantas de los pies | I | mindfulness | 1 | preliminar |
| `pros-y-contras` | Pros y contras ante un impulso | I | dbt | 1 | preliminar |
| `aceptacion-radical` | Aceptación radical | M | dbt | 2 → `mente-sabia` | preliminar |
| `mente-sabia` | Mente sabia | I | dbt | 1 | preliminar |
| `comprobar-hechos` | Comprobar los hechos | M | dbt+tcc | 1 | preliminar |
| `accion-opuesta` | Acción opuesta | M | dbt | 1 | preliminar |
| `please` | PLEASE: cuidar el cuerpo para cuidar las emociones | I | dbt | 1 | preliminar |
| `surfear-impulso` | Surfear el impulso | M | mindfulness | 1 | moderada |
| `emocion-primaria-secundaria` | Debajo de la emoción | I | focalizada-emocion | 1 | preliminar |
| `transformar-emocion` | Una emoción que cuida a otra | M | focalizada-emocion+escritura | 1 | preliminar |
| `escucharme-sin-juzgar` | Escucharme sin juzgar | M | humanista | 1 | preliminar |

**Además:** 22 antídotos (`/antidotos`, con estabilización desde intensidad 8); diario `tarjeta-diaria` (1), `analisis-cadena` (2), `escritura-expresiva` (2); Laboratorio: semáforo y caja de herramientas; rueda de emociones; programas `regulacion-emocional`, `habilidades-dbt`, `momentos-dificiles`; píldora `capas-de-la-emocion`.
**Huecos:** sin habilidad específica para la vergüenza intensa fuera del antídoto; el plan de seguridad (necesario cuando la intensidad se acompaña de riesgo) está en borrador.

### 2. Pensamientos y sesgos

| id | Título | Nivel | Enfoque | Riesgo | Evidencia |
|---|---|---|---|---|---|
| `pajaros-en-el-cielo` | Pájaros en el cielo | M (req. `atencion-respiracion`) | act+mindfulness | 1 | moderada |
| `anotacion-mental` | Anotación mental | M | mindfulness | 1 | preliminar |
| `hacer-espacio` | Hacer espacio | M | act | 2 → `escaneo-corporal` | moderada |
| `observador` | El yo observador | A | act | 2 → `pajaros-en-el-cielo` | preliminar |
| `derreflexion` | Derreflexión: volcarte hacia afuera | I | logoterapia | 1 | preliminar |
| `intencion-paradojica` | Intención paradójica | M | logoterapia | 2 → `derreflexion` | preliminar |
| `buscar-excepciones` | Buscar las excepciones | I | soluciones | 1 | preliminar |
| `aplazar-preocupacion` | Aplazar la preocupación | I | metacognitiva | 1 | preliminar |
| `mindfulness-desapegado` | Mindfulness desapegado | M | metacognitiva+mindfulness | 1 | preliminar |
| `entrenamiento-atencional` | Entrenamiento atencional con sonidos | M | metacognitiva | 1 | moderada |
| `comprobar-hechos` | Comprobar los hechos | M | dbt+tcc | 1 | preliminar |
| `creencias-sobre-el-sueno` | Revisar lo que piensas del sueño | M | tcc | 1 | moderada |

**Además:** diario `reestructuracion` (registro de pensamientos), `defusion`, `experimento`, `preocupacion` (1); 12 trampas del pensamiento; Laboratorio «¿Hecho o interpretación?» (24 frases); antídotos `rumiacion`, `preocupacion`; píldora `preocuparse-tiene-horario`.
**Huecos:** no hay una **práctica guiada** de reestructuración cognitiva en el Gimnasio (sólo la plantilla de diario); falta trabajo con sesgos atribucionales y de lectura de mente fuera de la mentalización.

### 3. Ansiedad y estrés

| id | Título | Nivel | Enfoque | Riesgo | Evidencia |
|---|---|---|---|---|---|
| `espacio-tres-minutos` ⚡ | Espacio de respiración de tres minutos | I | mindfulness | 1 | moderada |
| `respiracion-resonante` | Respiración resonante | I | relajacion | 1 | moderada |
| `suspiro-ciclico` | Suspiro cíclico | I | relajacion | 1 | preliminar |
| `relajacion-progresiva` | Relajación muscular progresiva | I | relajacion | 1 | moderada |
| `ritmo-calmante` | Respiración de ritmo calmante | I | cft+relajacion | 1 | moderada |
| `aplazar-preocupacion` | Aplazar la preocupación | I | metacognitiva | 1 | preliminar |
| `pausa-activa-oficina` ⚡ | Pausa activa de oficina | I | relajacion+mindfulness | 1 | moderada |
| `mapa-seis-areas` | Mapa del desgaste: las seis áreas | I | tcc+motivacional | 1 | moderada |
| `cierre-de-jornada` | Cierre de jornada: soltar el trabajo | I | tcc+mindfulness | 1 | moderada |
| `respiracion-diafragmatica-movimiento` | Respiración diafragmática con movimiento | I | relajacion+mindfulness | 1 | moderada |

**Además:** antídotos `ansiedad`, `panico` (psicoeducación primero y aviso médico), `preocupacion`, `miedo`, `agobio`; programas `ansiedad`, `estres`, `ansiedad-social`, `salir-del-burnout`; evaluaciones GAD-7 y PSS-10; desafío `siete-dias-de-calma`.
**Huecos:** **exposición gradual** en borrador (diario `escalera-exposicion`, artículo `exposicion-gradual`); sin experimentos conductuales guiados específicos para pánico o ansiedad social (sólo la plantilla `experimento`).

### 4. Autocompasión

| id | Título | Nivel | Enfoque | Riesgo | Evidencia |
|---|---|---|---|---|---|
| `pausa-autocompasion` | Pausa de autocompasión | I | cft | 1 | moderada |
| `mano-en-el-pecho` ⚡ | Mano en el pecho | I | cft | 1 | preliminar |
| `ritmo-calmante` | Respiración de ritmo calmante | I | cft+relajacion | 1 | moderada |
| `yo-compasivo` | Imaginar mi yo compasivo | M (req. `ritmo-calmante`) | cft | 1 | preliminar |
| `tonglen` | Tonglen: tomar y dar | A | contemplativa | 2 → `amor-altruista` | preliminar |
| `adulto-sano` | El adulto sano: mirar un patrón con amabilidad | M | esquemas+cft | 2 → `pausa-autocompasion` | preliminar |

**Además:** diario `carta-compasiva`; antídotos `autocritica`, `culpa`, `verguenza`; programas `autocompasion`, `autoestima`, `compasion`; desafío `treinta-dias-de-trato-amable`.
**Huecos:** pocas opciones de nivel M sin riesgo; nada específico para el miedo a la compasión (frecuente en autocrítica intensa).

### 5. Comunicación y relaciones

| id | Título | Nivel | Enfoque | Riesgo | Evidencia |
|---|---|---|---|---|---|
| `dear-man` | DEAR MAN: pedir lo que necesitas | I | dbt+tcc | 1 | moderada |
| `give-fast` | GIVE y FAST: cuidar la relación y tu respeto propio | I | dbt | 1 | preliminar |
| `inventario-interpersonal` | Inventario de mis vínculos | I | interpersonal | 1 | preliminar |
| `pausar-y-rebobinar` | Pausar y rebobinar | M | mentalizacion | 1 | preliminar |
| `necesidades-que-pido` | Necesidades que hoy pido | I | humanista | 1 | preliminar |
| `amor-altruista` | Meditación de amor altruista | M | contemplativa | 1 | robusta |
| `ecuanimidad` | Ecuanimidad | M | contemplativa | 1 | preliminar |
| `regocijo-empatico` | Regocijo empático | M | contemplativa | 1 | contemplativa |
| `mapas-de-amor` | Mapas de amor | I | gottman | 1 | preliminar |
| `ofertas-de-conexion` | Ofertas de conexión | I | gottman | 1 | preliminar |

**Además:** diario `conversacion` (DEAR MAN), `carta-gratitud`; Laboratorio: 8 simulaciones de conversación; antídoto `soledad`; programa `mente-y-vinculos`; píldoras `cuatro-areas-interpersonales`, `curiosidad-por-las-mentes`.
**Huecos:** escucha activa y validación del otro como práctica propia; conversaciones en el trabajo.

### 6. Límites

| id | Título | Nivel | Enfoque | Riesgo | Evidencia |
|---|---|---|---|---|---|
| `dear-man` | DEAR MAN: pedir lo que necesitas | I | dbt+tcc | 1 | moderada |
| `give-fast` | GIVE y FAST (FAST = respeto propio) | I | dbt | 1 | preliminar |
| `necesidades-que-pido` | Necesidades que hoy pido | I | humanista | 1 | preliminar |
| `mapa-seis-areas` | Mapa del desgaste: las seis áreas | I | tcc+motivacional | 1 | moderada |
| `cierre-de-jornada` | Cierre de jornada: soltar el trabajo | I | tcc+mindfulness | 1 | moderada |
| `cuidarte-mientras-cuidas` | Cuidarte mientras cuidas a tu bebé | M | cft+interpersonal | 1 | preliminar |

**Además:** programa `poner-limites`; programa `cuidadores`; Laboratorio (simulaciones asertivas).
**Huecos (importante):** **no hay una práctica dedicada a límites.** La necesidad se cubre con DBT interpersonal. Faltan: identificar tus límites, decir que no con un guion breve, sostener el límite ante la culpa y una plantilla de diario específica. Ningún contenido trata límites en situaciones de violencia: allí corresponde derivar (Línea 144).

### 7. Resolución de problemas

| id | Título | Nivel | Enfoque | Riesgo | Evidencia |
|---|---|---|---|---|---|
| `resolucion-problemas` | Resolución de problemas | I | tcc | 1 | moderada |
| `decidir-entre-opciones` | Decidir entre opciones | I | tcc | 1 | moderada |
| `cinco-minutos` ⚡ | La regla de los cinco minutos | I | tcc | 1 | moderada |
| `pregunta-milagro` | La pregunta milagro | I | soluciones | 1 | preliminar |
| `escala-un-punto-mas` ⚡ | Escala: un punto más | I | soluciones | 1 | preliminar |
| `meta-bien-formada` | Una meta bien formada | I | soluciones+tcc | 1 | moderada |

**Además:** diario `resolucion-problemas`; antídotos `agobio`, `bloqueo`; programa `del-problema-a-la-solucion`; píldoras `pildora-pregunta-milagro`, `pildora-excepciones`.
**Huecos:** distinguir los problemas que se pueden resolver de los que no (puente explícito hacia la aceptación radical).

### 8. Hábitos y objetivos

| id | Título | Nivel | Enfoque | Riesgo | Evidencia |
|---|---|---|---|---|---|
| `habito-minimo` | Un hábito mínimo | I | tcc | 1 | robusta |
| `activacion-conductual` | Planificar actividades que nutren | I | tcc | 1 | moderada |
| `monitoreo-actividad-animo` | Mapa de actividad y ánimo | I | tcc | 1 | moderada |
| `jerarquia-actividades` | Escalera de actividades | I | tcc | 1 | moderada |
| `de-trap-a-trac` | De TRAP a TRAC | M | tcc | 1 | moderada |
| `revision-semanal` | Revisión semanal | I | tcc+positiva | 1 | moderada |
| `meta-bien-formada` | Una meta bien formada | I | soluciones+tcc | 1 | moderada |
| `balance-del-cambio` | Balance del cambio | I | motivacional | 1 | preliminar |
| `regla-importancia-confianza` ⚡ | Regla de importancia y confianza | I | motivacional | 1 | preliminar |
| `andamios-ejecutivos` | Andamios para empezar una tarea | I | tcc | 1 | moderada |
| `cinco-minutos` ⚡ | La regla de los cinco minutos | I | tcc | 1 | moderada |

**Además:** diario `activacion`, `intencion`; objetivos y plan semanal (`settings/personal`); desafíos 7/21/30 días; programas `desanimo`, `rutina`, `dejar-de-postergar`, `activacion-conductual-seis-semanas`; antídotos `desanimo`, `bloqueo`, `vacio`; píldoras `pildora-trap-trac`, `pildora-ambivalencia`.
**Huecos:** registro de hábitos con frecuencia semanal (al estilo Daylio, investigación §16); recordatorios dentro de la app (hoy sólo `.ics`).

### 9. Atención plena

| id | Título | Nivel | Enfoque | Riesgo | Evidencia |
|---|---|---|---|---|---|
| `atencion-respiracion` | Atención focalizada en la respiración | I | mindfulness | 1 | moderada |
| `escaneo-corporal` | Escaneo corporal | I | mindfulness | 1 | moderada |
| `atencion-sonidos` | Atención a los sonidos | I | mindfulness | 1 | preliminar |
| `caminar-atencion` | Caminar con atención | I | mindfulness | 1 | preliminar |
| `caminata-consciente-ritmo` | Caminata consciente a tu ritmo | I | mindfulness | 1 | moderada |
| `estiramiento-suave-cinco` | Estiramiento suave de cinco minutos | I | relajacion+mindfulness | 1 | preliminar |
| `espacio-tres-minutos` ⚡ | Espacio de respiración de tres minutos | I | mindfulness | 1 | moderada |
| `darse-cuenta` | Darse cuenta: aquí y ahora | I | gestalt+mindfulness | 1 | preliminar |
| `anotacion-mental` | Anotación mental | M | mindfulness | 1 | preliminar |
| `conciencia-pura` | Descanso en la conciencia pura | A | contemplativa | 2 → `atencion-respiracion` | preliminar |

**Además:** temporizador libre con campanas; programa `fundamentos`; desafío `veintiun-dias-de-atencion`.
**Huecos:** audio grabado (hoy sólo síntesis de voz); prácticas informales en la vida diaria (comer o lavar con atención) como tareas cortas.

### 10. Valores y sentido

| id | Título | Nivel | Enfoque | Riesgo | Evidencia |
|---|---|---|---|---|---|
| `brujula-valores` | Brújula de valores | I | act | 1 | moderada |
| `accion-comprometida` | Acción comprometida | M (req. `brujula-valores`) | act | 1 | moderada |
| `punto-de-eleccion` | El punto de elección | M | act | 1 | moderada |
| `mejor-yo-posible` | Mi mejor yo posible | I | positiva | 1 | robusta |
| `que-me-pide-la-vida` | ¿Qué me pide la vida hoy? | I | logoterapia | 1 | preliminar |
| `tres-caminos-sentido` | Los tres caminos del sentido | M | logoterapia | 1 | preliminar |
| `lo-vivido-queda` | Lo vivido queda | I | logoterapia+positiva | 1 | preliminar |
| `historia-alternativa` | Otra historia de ti | M | narrativa+escritura | 1 | preliminar |
| `fortalezas` | Fortalezas en acción | I | positiva | 1 | moderada |
| `valores-pese-al-dolor` | Lo que importa, con dolor y todo | M | act | 1 | moderada |
| `redisenar-mi-trabajo` | Rediseñar mi trabajo (job crafting) | M | positiva+act | 1 | moderada |

**Además:** diario `valores`, `mejor-yo`, `intencion`, `sentido`; 59 cartas filosóficas en 8 mazos; programas `vivir-mis-valores`, `vida-con-sentido`.
**Huecos:** pocos. Falta una revisión periódica de valores (trimestral) que conecte con los objetivos.

### 11. Patrones personales

| id | Título | Nivel | Enfoque | Riesgo | Evidencia |
|---|---|---|---|---|---|
| `linea-de-vida` | Mi línea de vida | M | psicodinamica+positiva | 1 | preliminar |
| `persona-y-sombra` | Lo que muestro y lo que guardo | M | psicodinamica (Jung) | 1 | contemplativa |
| `adulto-sano` | El adulto sano | M | esquemas+cft | 2 → `pausa-autocompasion` | preliminar |
| `yo-real-yo-ideal` | Mi yo real y mi yo ideal | M | humanista | 1 | preliminar |
| `polaridades` | Polaridades: el que exige y el que se resiste | M | gestalt | 1 | preliminar |
| `externalizar-el-problema` | Externalizar el problema | M | narrativa | 1 | preliminar |
| `darse-cuenta` | Darse cuenta: aquí y ahora | I | gestalt+mindfulness | 1 | preliminar |
| `monitoreo-actividad-animo` | Mapa de actividad y ánimo | I | tcc | 1 | moderada |

**Además:** diario `mis-roles`, `necesidades`, `patron-repetido` (2), `analisis-cadena` (2); «Qué te funciona» (n mínima); programa `conocerme`.
**Huecos:** pasar de un patrón detectado a un experimento para comprobarlo (R34); todo es exploración y **nunca diagnóstico**.

### 12. Tolerar la incertidumbre y la frustración

| id | Título | Nivel | Enfoque | Riesgo | Evidencia |
|---|---|---|---|---|---|
| `aceptacion-radical` | Aceptación radical | M | dbt | 2 → `mente-sabia` | preliminar |
| `pros-y-contras` | Pros y contras ante un impulso | I | dbt | 1 | preliminar |
| `surfear-impulso` | Surfear el impulso | M | mindfulness | 1 | moderada |
| `hacer-espacio` | Hacer espacio | M | act | 2 → `escaneo-corporal` | moderada |
| `aplazar-preocupacion` | Aplazar la preocupación | I | metacognitiva | 1 | preliminar |
| `ecuanimidad` | Ecuanimidad | M | contemplativa | 1 | preliminar |
| `pausa-stop` ⚡ | Pausa STOP | I | mindfulness+dbt | 1 | preliminar |

**Además:** antídotos `frustracion`, `preocupacion`, `apego`.
**Huecos (importante):** **no hay una práctica sobre intolerancia a la incertidumbre** (por ejemplo, experimentos de incertidumbre o reducir la búsqueda de reaseguro). Es una necesidad sin módulo propio.

### 13. Cambios, pérdidas y transiciones

| id | Título | Nivel | Enfoque | Riesgo | Evidencia |
|---|---|---|---|---|---|
| `carta-al-ser-querido` | Carta a quien ya no está | M | escritura+narrativa | 1 | preliminar |
| `ritual-de-recuerdo` | Un ritual de recuerdo | I | narrativa+interpersonal | 1 | preliminar |
| `oscilar-perdida-restauracion` | Entre la pérdida y la vida que sigue | M | interpersonal+act | 1 | preliminar |
| `cuidarte-mientras-cuidas` | Cuidarte mientras cuidas a tu bebé | M | cft+interpersonal | 1 | preliminar |
| `revision-de-vida` | Revisión de vida | M | narrativa+logoterapia | 1 | moderada |
| `lo-vivido-queda` | Lo vivido queda | I | logoterapia+positiva | 1 | preliminar |
| `balance-del-cambio` | Balance del cambio | I | motivacional | 1 | preliminar |

**Además:** antídoto `duelo`; programas `duelo`, `duelo-lazo-y-vida`; píldoras `pildora-proceso-dual`, `pildora-tristeza-posparto`, `pildora-revision-de-vida`; cuentos sobre duelo, muerte y separación para chicos; guías para familias.
**Huecos:** transiciones que no son duelo (migración, mudanza, separación, cambio de trabajo, diagnóstico propio). El duelo complicado requiere derivación (criterios a definir con el/la responsable clínico/a).

### 14. Autoestima y autoeficacia

| id | Título | Nivel | Enfoque | Riesgo | Evidencia |
|---|---|---|---|---|---|
| `fortalezas` | Fortalezas en acción | I | positiva | 1 | moderada |
| `yo-real-yo-ideal` | Mi yo real y mi yo ideal | M | humanista | 1 | preliminar |
| `pausa-autocompasion` | Pausa de autocompasión | I | cft | 1 | moderada |
| `regla-importancia-confianza` ⚡ | Regla de importancia y confianza | I | motivacional | 1 | preliminar |
| `escala-un-punto-mas` ⚡ | Escala: un punto más | I | soluciones | 1 | preliminar |
| `habito-minimo` | Un hábito mínimo | I | tcc | 1 | robusta |
| `jerarquia-actividades` | Escalera de actividades | I | tcc | 1 | moderada |

**Además:** antídoto `inseguridad`; programa `autoestima`; diario `tres-cosas`.
**Huecos:** registro de logros y de la evidencia de capacidad; **confianza subjetiva por habilidad (R33)**, que tampoco existe en el modelo de datos.

### 15. Autocuidado

| id | Título | Nivel | Enfoque | Riesgo | Evidencia |
|---|---|---|---|---|---|
| `please` | PLEASE | I | dbt | 1 | preliminar |
| `control-estimulos-noche` | La cama, para dormir | I | tcc | 1 | robusta |
| `ventana-de-sueno` | Tu ventana de sueño | M | tcc | 2 → `control-estimulos-noche` | robusta |
| `rutina-bajada-dormir` | Rutina de bajada para dormir | I | relajacion+tcc | 1 | moderada |
| `plan-noches-dificiles` | Plan para las noches difíciles | M | tcc | 1 | moderada |
| `estiramiento-suave-cinco` | Estiramiento suave de cinco minutos | I | relajacion+mindfulness | 1 | preliminar |
| `pausa-activa-oficina` ⚡ | Pausa activa de oficina | I | relajacion+mindfulness | 1 | moderada |
| `cierre-de-jornada` | Cierre de jornada | I | tcc+mindfulness | 1 | moderada |
| `ritmo-de-actividad` | Ritmo de actividad (pacing) | M | tcc+act | 1 | preliminar |
| `hacer-lugar-al-dolor` | Hacer lugar al dolor | M | act+mindfulness | 1 | moderada |
| `mapa-sensorial` | Mi mapa sensorial y de energía | I | mindfulness+tcc | 1 | preliminar |
| `cuidarte-mientras-cuidas` | Cuidarte mientras cuidas a tu bebé | M | cft+interpersonal | 1 | preliminar |

**Además:** diario `diario-sueno`; programas `sueno`, `dormir-mejor`, `tcc-insomnio-seis-semanas`, `cuidadores`, `salir-del-burnout`; evaluación ISI en borrador (licencia de Mapi pendiente); píldoras de sueño, movimiento y burnout.
**Huecos:** alimentación y actividad física fuera del movimiento suave (**con cuidado**: nada que pueda empeorar un trastorno de la conducta alimentaria).

### 16. Regulación interpersonal y reparación

| id | Título | Nivel | Enfoque | Riesgo | Evidencia |
|---|---|---|---|---|---|
| `reparar-tras-discusion` | Reparar después de una discusión | M | gottman+focalizada-emocion | 1 | preliminar |
| `inicio-suave` | Inicio suave y antídotos de los cuatro jinetes | M | gottman+focalizada-emocion | 1 | preliminar |
| `pausar-y-rebobinar` | Pausar y rebobinar | M | mentalizacion | 1 | preliminar |
| `give-fast` | GIVE y FAST | I | dbt | 1 | preliminar |
| `perdon-reach` | Perdón (modelo REACH) | M | positiva | 2 → `pausa-autocompasion` | moderada |
| `asuntos-pendientes` | Asuntos pendientes | M | gestalt+escritura | 2 → `pausa-autocompasion` | preliminar |
| `silla-vacia` | La silla vacía | A | gestalt | 2 → `pausa-autocompasion` | preliminar |
| `ofertas-de-conexion` | Ofertas de conexión | I | gottman | 1 | preliminar |

**Además:** diario `perdon` (2); antídotos `ira`, `resentimiento`, `celos`; programa `pareja-cuatro-semanas` (con aviso de violencia); píldora `pildora-cuatro-jinetes`.
**Huecos:** reparación fuera de la pareja (amistades, familia, trabajo); corregulación (calmar juntos). Para chicos hay actividades «juntos» (0–3 años) y guías para familias, pero no para adultos entre sí.

---

## 2. Resumen de cobertura

| # | Necesidad | Prácticas asignadas | Cobertura | Hueco principal |
|---|---|---|---|---|
| 1 | Emociones intensas | 14 + 22 antídotos | Alta | Plan de seguridad en borrador |
| 2 | Pensamientos y sesgos | 12 | Alta | Reestructuración guiada en el Gimnasio |
| 3 | Ansiedad y estrés | 10 | Alta | Exposición en borrador |
| 4 | Autocompasión | 6 | Media | Opciones de nivel M |
| 5 | Comunicación | 10 | Alta | Validación y escucha |
| 6 | Límites | 6 (prestadas) | **Baja** | Práctica y plantilla dedicadas |
| 7 | Resolución de problemas | 6 | Media | — |
| 8 | Hábitos y objetivos | 11 | Alta | Registro de hábitos semanal |
| 9 | Atención plena | 10 | Alta | Audio grabado |
| 10 | Valores y sentido | 11 | Alta | — |
| 11 | Patrones personales | 8 | Media | Del patrón al experimento |
| 12 | Incertidumbre y frustración | 7 (prestadas) | **Baja** | Intolerancia a la incertidumbre |
| 13 | Cambios y pérdidas | 7 | Media | Transiciones que no son duelo |
| 14 | Autoestima y autoeficacia | 7 (prestadas) | **Baja** | Confianza por habilidad (R33) |
| 15 | Autocuidado | 12 | Alta | — |
| 16 | Regulación interpersonal | 8 | Media | Reparación fuera de la pareja |

«Prestadas» = prácticas cuyo módulo principal es otro.

**Prioridad de contenido nuevo** (después de la revisión clínica de lo existente): límites (6), incertidumbre (12) y autoeficacia (14).

---

## 3. Ficha estándar de habilidad

| Campo | Qué contiene | ¿Existe en el modelo? | Dónde / propuesta |
|---|---|---|---|
| **Nombre** | Título en lenguaje cotidiano | Sí | `Practice.title` |
| **Necesidad** | Una o varias de las 16 | Parcial: un módulo principal | `MODULE_OF_PRACTICE` / `PracticeMeta.module`. Propuesta: `needs: NeedId[]` |
| **Objetivo de aprendizaje** | «Al terminar, podrás…» | **No** (lo más cercano es `summary`) | Propuesta: `learningObjective` (resuelto: visible en la pestaña «Ficha»; objetivo por necesidad en `needs.ts`) |
| **Fundamento** | Por qué funciona y de qué enfoque viene | Sí | `mechanism`, `howItWorks[]`, `PRACTICE_APPROACHES` / `PracticeMeta.approaches` |
| **Evidencia** | Nivel y referencias | Sí | `evidenceLevel`, `evidence[]` (`Reference` con `doi`) |
| **Indicaciones** | Para qué situaciones sirve | **No** explícito (`MODULES.purpose` es por módulo) | Propuesta: `indications[]` |
| **Contraindicaciones** | Cuándo no usarla | Sí | `cautions`, riesgo (`PRACTICE_RISK` / `PracticeMeta.risk`) con `alternative`; en los antídotos, `whenNot` |
| **Duración** | Minutos y variantes | Sí | Suma de `steps[].durationSec`; `durations.ts` (breve, estándar, extendida); `micro` |
| **Dificultad** | Nivel y prerrequisitos | Sí | `PRACTICE_LEVELS` / `PracticeMeta.level`, `prerequisites` |
| **Instrucciones** | Pasos guiados | Sí | `steps[]` (`GuidedStep` con `kind`), `tips[]`, `obstacles[]` |
| **Variantes accesibles** | Lectura fácil, sin audio, sin movimiento, con los ojos abiertos | **Parcial**: voz opcional, duración breve, movimiento reducido global | Propuesta: `accessibleVariants` (p. ej. pasos de lectura fácil) |
| **Evaluación del aprendizaje** | ¿Lo aprendiste? ¿Lo usaste? | **Parcial**: `moodPre`/`moodPost` (ánimo, no aprendizaje), `applications.usefulness` | Propuesta: `learningCheck` (1–2 preguntas) y confianza 0–10 por habilidad (R33) |
| **Fuentes** | Referencias completas | Sí | `evidence[]`; verificadas con `npm run verify:refs` |
| **Fecha de revisión** | Última revisión clínica y de evidencia | Sí en datos, **no visible** | `ReviewRecord.evidenceCheckedAt`, `reviewedAt` (resuelto: visible en la pestaña «Ficha»; objetivo por necesidad en `needs.ts`). No duplicar en `Practice` |
| Estado de revisión | borrador, pendiente o revisado | Sí | `reviewOf('practica', id).status`, `REVIEW_LABEL` |
| Versión | Para saber qué guion se usó | Sí | `ReviewRecord.version` → `sessions.contentVersion` |

### Reglas de la ficha

- Los campos nuevos empiezan como opcionales. Un test de `quality.test.ts` los exigirá **para las prácticas nuevas** desde una fecha de corte, y para todas al terminar la revisión clínica.
- `learningObjective` e `indications` pasan las mismas pruebas de legibilidad que las instrucciones (INFLESZ ≥ 55).
- La fecha de revisión se deriva de la gobernanza: no se escribe a mano en dos lugares.
