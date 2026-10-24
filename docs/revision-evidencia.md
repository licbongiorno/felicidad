# Revisión de niveles de evidencia: prácticas `preliminar` y `moderada`

Revisión hecha solo leyendo el repo. No se tocó ningún archivo. Fecha: 2026-10-24.

## Criterio usado

Usé la definición que la app muestra al usuario (`src/domain/evidence.ts` y el artículo «Cómo evaluamos la evidencia» en `src/domain/library-more.ts`):

- **Robusta**: metaanálisis de ECA sobre la técnica **en un formato comparable al de la app** (breve, autoguiado o de práctica repetida).
- **Moderada**: ensayos controlados, **o** metaanálisis de un formato más intensivo (una terapia completa) del que el ejercicio es un componente.
- **Preliminar**: estudios pequeños, de laboratorio, sin grupo control, o un único ensayo sin replicar.

La regla práctica que apliqué:

1. **Para subir de nivel** pedí una guía NICE, una revisión Cochrane o un metaanálisis que conozco con certeza y que trate la terapia de la que el ejercicio forma parte. Con eso alcanza para *moderada* según el propio criterio de la app. Para *robusta* hace falta evidencia del formato breve y autoguiado. Casi ninguna técnica la tiene a nivel de ejercicio suelto, así que **no propongo ninguna subida a robusta**.
2. **Para bajar de nivel** me basé en las referencias que cita hoy cada práctica. Si son solo teoría, libros de divulgación, estudios observacionales o un experimento de laboratorio, no cumplen el criterio de *moderada*. La seguridad «alta» en una bajada quiere decir que estoy seguro de que **las referencias actuales** no alcanzan. Puede existir una fuente mejor: cuando conozco una, la indico en la nota para que puedas añadirla y mantener el nivel.
3. Cuando una cita no la conozco con total certeza, la marco con **«verificar»**. No incluyo DOI nuevos: los tendrías que sacar de Crossref (el repo ya tiene `npm run verify:refs`).

### Dos inconsistencias que conviene saber antes

- **Las cifras no coinciden con las del encargo.** `src/domain/generated/practice-index.json` tiene hoy 467 prácticas: 13 robustas, **164** moderadas, **267** preliminares y 23 contemplativas. El encargo hablaba de 150 y 227. Puede que el índice se haya regenerado después.
- **Hay dos definiciones distintas de los niveles.** El comentario de `EvidenceLevel` en `src/domain/types.ts` dice «robusta: metaanálisis o múltiples ECA convergentes; moderada: ECA aislados o metaanálisis con heterogeneidad». Esa versión no exige el «formato comparable» que sí piden `evidence.ts` y la Biblioteca. Conviene unificarlas: tomé como válida la de cara al usuario.

---

## Propuestas de subida (preliminar → moderada)

| id de la práctica | título | nivel actual | nivel propuesto | fuente | seguridad | nota |
|---|---|---|---|---|---|---|
| accion-opuesta | Acción opuesta | preliminar | moderada | Storebø, O. J., et al. (2020). *Psychological therapies for people with borderline personality disorder*. Cochrane Database of Systematic Reviews, CD012955. Linehan, M. M., Korslund, K. E., Harned, M. S., et al. (2015). *DBT for high suicide risk in individuals with BPD: a randomized clinical trial and component analysis*. JAMA Psychiatry, 72(5), 475–482. Valentine et al. (2015), ya citado. | media | Habilidad central de DBT. `tipp` y `dear-man` ya son moderadas con las mismas fuentes, así que hoy la clasificación es incoherente. Linehan 2015 muestra que las condiciones con entrenamiento en habilidades superan a la terapia individual sola en varios resultados. La evidencia es del paquete DBT, no del ejercicio suelto. |
| mente-sabia | Mente sabia | preliminar | moderada | Las mismas que arriba (Storebø 2020, Cochrane; Linehan 2015, JAMA Psychiatry; Valentine 2015). NICE CG78 (2009), *Borderline personality disorder: recognition and management*. | media | Módulo de mindfulness de DBT. Es un componente, no está evaluado por separado. |
| pros-y-contras | Pros y contras ante un impulso | preliminar | moderada | Storebø 2020 (Cochrane); Valentine 2015 (revisión de DBT de habilidades como tratamiento independiente, ya citada). | media | Habilidad de tolerancia al malestar, igual que `tipp`. |
| aceptacion-radical | Aceptación radical | preliminar | moderada | Storebø 2020 (Cochrane); Valentine 2015. | media | Igual que la anterior. |
| comprobar-hechos | Comprobar los hechos | preliminar | moderada | Storebø 2020 (Cochrane); Linehan 2015 (JAMA Psychiatry). | media | Módulo de regulación emocional de DBT. Es la versión DBT de la reestructuración cognitiva. |
| please | PLEASE | preliminar | moderada | Storebø 2020 (Cochrane); Schuch et al. (2016), ya citado, para el componente de ejercicio. | media | Componente de DBT. El metaanálisis de Schuch cubre solo el ejercicio, no el resto (sueño, comida, sustancias). |
| give-fast | GIVE y FAST | preliminar | moderada | Storebø 2020 (Cochrane); Linehan 2015. | media | Efectividad interpersonal, el mismo módulo que `dear-man` (que ya es moderada). |
| cinco-sentidos | Calmarse con los cinco sentidos | preliminar | moderada | Storebø 2020 (Cochrane); Valentine 2015, ya citado. | media | «Calmarse con los sentidos» es una habilidad de tolerancia al malestar, junto a `tipp`. |
| aplazar-preocupacion | Aplazar la preocupación | preliminar | moderada | Normann, N., & Morina, N. (2018). *The efficacy of metacognitive therapy: a systematic review and meta-analysis*. Frontiers in Psychology, 9, 2211 (ya citado). | media | Técnica central de la terapia metacognitiva para el TAG. `entrenamiento-atencional`, del mismo pack, ya es moderada. Ojo: el metaanálisis reúne pocos ensayos y muchos son del grupo de Wells. Por eso no doy seguridad alta. |
| mindfulness-desapegado | Mindfulness desapegado | preliminar | moderada | Normann & Morina (2018), ya citado. | media | Igual que la anterior. |
| preocuparme-me-sirve | ¿Preocuparme me sirve? | preliminar | moderada | Normann & Morina (2018), ya citado. | media | Trabajo sobre creencias positivas de la preocupación, dentro de la terapia metacognitiva. |
| poner-a-prueba-el-descontrol | Poner a prueba «me voy a enloquecer» | preliminar | moderada | Normann & Morina (2018), ya citado. | media | Experimento sobre la incontrolabilidad, núcleo de la terapia metacognitiva para el TAG. |
| yo-compasivo | Imaginar mi yo compasivo | preliminar | moderada | Kirby, J. N., Tellegen, C. L., & Steindl, S. R. (2017). *A meta-analysis of compassion-based interventions*. Behavior Therapy, 48(6), 778–792. Leaviss, J., & Uttley, L. (2015). *Psychotherapeutic benefits of compassion-focused therapy: an early systematic review*. Psychological Medicine, 45(5), 927–945. | media | La imaginería del yo compasivo es una técnica central de la CFT. `pausa-autocompasion` y `ritmo-calmante` ya son moderadas. |
| compasion-ante-la-verguenza | Compasión ante la vergüenza | preliminar | moderada | Kirby et al. (2017); Ferrari, M., Hunt, C., Harrysunker, A., Abbott, M. J., Beath, A. P., & Einstein, D. A. (2019). *Self-compassion interventions and psychosocial outcomes: a meta-analysis of RCTs*. Mindfulness, 10, 1455–1473. | media | Hoy cita solo teoría (Gilbert 2009; Neff 2003, que es el artículo de la escala). Hay que añadir uno de estos metaanálisis. |
| manos-en-pausa | Manos en pausa | preliminar | moderada | Bate, K. S., Malouff, J. M., Thorsteinsson, E. T., & Bhullar, N. (2011). *The efficacy of habit reversal therapy for tics, habit disorders, and stuttering: a meta-analytic review*. Clinical Psychology Review, 31(5), 865–871 (ya está en el pack). | media | Es la respuesta competidora de la reversión de hábitos, que es la misma técnica de `respuesta-competidora` (moderada). Falta añadir Bate 2011 a sus referencias. |
| inventario-interpersonal | Inventario de mis vínculos | preliminar | moderada | Cuijpers, P., Donker, T., Weissman, M. M., Ravitz, P., & Cristea, I. A. (2016). *Interpersonal psychotherapy for mental health problems: a comprehensive meta-analysis*. American Journal of Psychiatry, 173(7), 680–687 (ya citado). NICE NG222 (2022), *Depression in adults: treatment and management*, que incluye la TIP entre los tratamientos. | media | Es un componente inicial de la TIP: cumple la definición de moderada de la app. Hecho en solitario y por escrito, el ejercicio queda lejos del tratamiento. |

**Total: 16 subidas, todas a moderada y con seguridad media.** Elegí no dar seguridad alta a ninguna porque en todos los casos la evidencia es del paquete terapéutico y no del ejercicio breve.

### Candidatas que revisé y **no** subo

- **A robusta**: `tres-cosas-buenas`, `gratitud-contemplativa`, `relajacion-progresiva`, `activacion-conductual`, `resolucion-problemas`, `escaneo-corporal` y `pausa-autocompasion`.
  - Hay metaanálisis de formatos breves o autoguiados, por ejemplo de gratitud: Davis, D. E., et al. (2016). *Thankful for the little things: a meta-analysis of gratitude interventions*. Journal of Counseling Psychology, 63(1), 20–31. También de mindfulness autoguiado: Cavanagh, K., Strauss, C., Forder, L., & Jones, F. (2014). Clinical Psychology Review, 34(2), 118–129.
  - Pero o bien evalúan programas de varias semanas, o bien los efectos frente a controles activos son pequeños (gratitud).
  - Para la activación conductual en formato digital existe un metaanálisis (Huguet et al., 2018, J Affect Disord, **verificar**). La propia Biblioteca de la app argumenta que el ejercicio breve de AC es moderada; lo dejaría así.
  - En relajación, NICE CG113 (TAG) recomienda la *relajación aplicada* conducida por un profesional, que no es lo mismo que la RMP autoguiada.
- **Entrevista motivacional**: no subo `balance-del-cambio` ni `regla-importancia-confianza`. El balance decisional no es un componente central de la EM y puede bajar el compromiso en personas ambivalentes: Miller, W. R., & Rose, G. S. (2015). *Motivational interviewing and decisional balance: contrasting responses to client ambivalence*. Behavioural and Cognitive Psychotherapy, 43(2), 129–141. Por la misma razón, conviene añadir una nota en `balance-del-alcohol`, `balance-de-las-apuestas` y `balance-del-cannabis`.
- **Esquemas** (`adulto-sano`, `reconocer-el-modo`, `tarjeta-del-esquema`, `dialogo-con-el-critico`, `cuidar-a-la-parte-vulnerable`): la terapia de esquemas tiene ECA (Bamelis 2014, ya citado). Pero es un tratamiento largo y muy guiado. El reescritura con imágenes a solas tiene además riesgos con recuerdos traumáticos. Las dejaría en preliminar.
- **Terapia centrada en soluciones** (`pregunta-milagro`): Kim (2008) encuentra efectos pequeños. Prefiero no subirla.
- **Plan de crisis familiar** (`plan-de-crisis-en-familia`): la evidencia de Pharoah 2010 (Cochrane) es de la intervención familiar completa, no del plan. La dejo igual.

---

## Posibles sobrevaloraciones

### A. Robustas que no cumplen el criterio de «formato comparable»

| id de la práctica | título | nivel actual | nivel propuesto | fuente | seguridad | nota |
|---|---|---|---|---|---|---|
| tension-aplicada | Tensión aplicada para la sangre y las agujas | robusta | moderada | Öst, Fellenius & Sterner (1991), ya citado, que es un único ECA. | alta | La app pide un metaanálisis para robusta y aquí solo se cita un ensayo. La técnica está bien apoyada para la fobia a sangre e inyecciones, pero en formato guiado por terapeuta. |
| mi-circulo-social | Mi círculo de la ansiedad social | robusta | moderada | Mayo-Wilson et al. (2014), ya citado, que es un metaanálisis en red de tratamientos completos. NICE CG159 (2013), *Social anxiety disorder*, que recomienda TCC individual (Clark y Wells). | alta | Es un componente (la formulación) de la terapia cognitiva individual. Encaja con la definición de moderada de la app. |
| soltar-una-conducta-de-seguridad | Soltar una conducta de seguridad | robusta | moderada | McManus et al. (2008), ya citado, que es un experimento. Clark et al. (2006), un ECA del tratamiento completo. NICE CG159. | alta | Igual que la anterior. |
| hablar-sin-pelear-con-quien-consume | Hablar sin pelear con quien consume | robusta | moderada | Roozen et al. (2010), ya citado. | alta | CRAFT es un programa de unas 12 sesiones con terapeuta, y su resultado principal es que la persona que consume entre a tratamiento. Un ejercicio breve de comunicación es un componente de ese programa. |
| chicos-fuera-del-conflicto | Los chicos fuera del medio | robusta | moderada | Las referencias actuales (Amato 2010; Kelly y Emery 2003; Hetherington 2002) son revisiones y un libro, sin ninguna intervención evaluada. Para sostener moderada: Wolchik, S. A., et al. (2002). *Six-year follow-up of preventive interventions for children of divorce: a randomized controlled trial*. JAMA, 288(15), 1874–1881. | alta | Con las referencias de hoy quedaría en preliminar. Que el conflicto entre los padres daña a los chicos está muy bien documentado, pero con estudios observacionales: eso no es evidencia de que esta intervención funcione. |
| escalera-del-miedo | Mi escalera del miedo | robusta | moderada (verificar) | Wolitzky-Taylor et al. (2008), ya citado, con tratamientos mayormente guiados por terapeuta. Öst, L.-G., Salkovskis, P. M., & Hellström, K. (1991). *One-session therapist-directed exposure vs. self-exposure in the treatment of spider phobia*. Behavior Therapy, 22, 407–422 (**verificar** paginación). | media | La exposición tiene evidencia robusta, pero la autoexposición sin guía rinde bastante menos que la dirigida. Podría sostenerse robusta con un metaanálisis de autoayuda para fobias, como Haug et al. (2012), Clinical Psychology Review, 32(5), 425–445, donde la fobia específica es un subgrupo. Lo dejo como «verificar». |
| subir-un-escalon | Subir un escalón | robusta | moderada (verificar) | Las mismas que la anterior. | media | Igual que la anterior. |

Robustas que **mantengo**: `control-estimulos-noche` y `ventana-de-sueno` (la guía AASM de Edinger 2021, ya citada, da recomendación condicional a cada componente por separado). Para la restricción del sueño se puede añadir Maurer, L. F., et al. (2021), *The clinical effects of sleep restriction therapy for insomnia: a meta-analysis of randomised controlled trials*, Sleep Medicine Reviews, 58, 101493 (**verificar**). Revisa también que la ficha avise de las contraindicaciones (somnolencia al conducir, trastorno bipolar, epilepsia). Mantengo igualmente `repasar-sin-mirar`, `mejor-yo-posible` y `habito-minimo`. Y `amor-altruista`, aunque Galante 2014 señala que los estudios son de baja calidad.

### B. Moderadas cuyas referencias no respaldan el nivel

En todos estos casos las referencias citadas son teoría, libros de divulgación, estudios observacionales o experimentos de laboratorio, sin ensayos de una intervención.

| id de la práctica | título | nivel actual | nivel propuesto | fuente | seguridad | nota |
|---|---|---|---|---|---|---|
| cinco-minutos | La regla de los cinco minutos | moderada | preliminar | Steel (2007), ya citado, que es un metaanálisis de correlatos de la procrastinación. | alta | No evalúa ninguna intervención. |
| el-celular-duerme-afuera | El celular duerme afuera | moderada | preliminar | Exelmans y Van den Bulck (2016), correlacional; Chang et al. (2015), de laboratorio. | alta | No hay ensayo de la intervención. |
| semana-de-examenes-y-sueno | Estudiar sin robarle horas al sueño | moderada | preliminar | Gillen-O'Neel et al. (2013), un estudio de diario; Rasch y Born (2013), una revisión de mecanismos. | alta | La evidencia es observacional y de mecanismos. |
| mapa-seis-areas | Mapa del desgaste: las seis áreas | moderada | preliminar | Maslach y Leiter, que proponen el modelo teórico y el instrumento. | alta | Ninguna intervención evaluada. |
| auditoria-de-pantallas | Auditoría del celular: una semana | moderada | preliminar | Wood y Rünger (2016), una revisión; Duke y Montag (2017) y Orben y Przybylski (2019), observacionales. | alta | No hay ensayo de la intervención. |
| hablar-del-cuerpo-en-casa | Cómo hablamos de los cuerpos en casa | moderada | preliminar | Neumark-Sztainer et al. (2010), observacional. | alta | No hay ensayo de la intervención. |
| acompanar-tras-un-trauma | Acompañar a alguien que vivió algo muy duro | moderada | preliminar | Hobfoll et al. (2007), un consenso de expertos; Bonanno (2004), una revisión. | alta | Los «cinco elementos» y los primeros auxilios psicológicos no tienen ECA que los respalden. |
| senales-de-alarma-del-juego | Señales de alarma del juego | moderada | preliminar | Hodgins et al. (2011), una revisión en The Lancet, y la Línea 141. | alta | Es psicoeducación o cribado, sin ensayo. |
| termometro-del-cuidador | El termómetro de quien cuida | moderada | preliminar | Pinquart y Sörensen (2003), un metaanálisis de diferencias de salud entre quien cuida y quien no. | alta | Es evidencia observacional y no evalúa ninguna intervención. |
| limites-al-cuidar | Límites para seguir cuidando | moderada | preliminar | Pinquart y Sörensen (2003); Smith y Meyers (2004), un manual de CRAFT. | media | Podrías sostener moderada con un ECA de apoyo a cuidadores, por ejemplo Livingston et al. (2013, START), que ya se cita en otra práctica. |
| creencias-que-sostienen | Lo que me sostiene y lo que me pesa | moderada | preliminar | Pargament et al. (2000), que valida la escala RCOPE; Koenig (2012), una revisión. | alta | Correlacional. |
| mandatos-que-me-pesan | Los mandatos que me pesan | moderada | preliminar | Wong et al. (2017), un metaanálisis de asociación; la guía de la APA. | alta | Observacional. |
| mas-alla-del-enojo | Más allá del enojo | moderada | preliminar | Cochran y Rabinowitz (2000), un libro; la guía de la APA. | alta | Sin ensayo. |
| senales-de-que-no-estoy-bien | Señales de que no estoy bien | moderada | preliminar | Un libro y una revisión sistemática sobre búsqueda de ayuda. | alta | Sin ensayo de la intervención. |
| pedir-ayuda-es-fuerza | Pedir ayuda es fuerza | moderada | preliminar | Addis y Mahalik (2003); Seidler et al. (2016), revisiones. | alta | Sin ensayo de la intervención. |
| mi-cuidado-en-este-duelo | Cuidarte en este duelo | moderada | preliminar | Pitman et al. (2014), una revisión de riesgo; un manual de posvención. | alta | Sin ensayo de la intervención. |
| lo-que-el-trabajo-me-daba | Lo que el trabajo me daba | moderada | preliminar | Jahoda (1982), teoría; Paul y Moser (2009), un metaanálisis observacional. | alta | Sin ensayo de la intervención. |
| despues-de-un-no | Después de un «no» | moderada | preliminar | McKee-Ryan et al. (2005), observacional; Wanberg (2012), una revisión. | alta | Sin ensayo de la intervención. |
| un-dia-con-forma | Un día con forma | moderada | preliminar, o mantener añadiendo fuente | Jahoda (1982); McKee-Ryan et al. (2005). | media | Es activación conductual aplicada al desempleo. Si citas Cuijpers et al. (2007) o Ekers et al. (2014), como hace `un-dia-con-sentido`, puede quedar en moderada. |
| nombrar-esta-perdida | Esta pérdida cuenta | moderada | preliminar | Doka (1989), un libro; Farren et al. (2016), una cohorte. | alta | Sin ensayo de la intervención. |
| entre-la-esperanza-y-la-espera | Entre la esperanza y la espera | moderada | preliminar | Greil et al. (2010), una revisión; Boivin et al. (2011), un metaanálisis pronóstico. | alta | Sin ensayo de la intervención. |
| el-duelo-de-quien-no-gesto | El duelo de quien no gestó | moderada | preliminar | Revisiones de prevalencia y un libro. | alta | Sin ensayo de la intervención. |
| duelo-de-la-separacion | El duelo de la pareja | moderada | preliminar | Sbarra et al. (2015), una revisión; Emery (2012), un libro. | alta | Sin ensayo de la intervención. |
| contarles-la-separacion | Contarles a los chicos | moderada | preliminar | Emery (2012); Kelly y Emery (2003). | media | Igual que `chicos-fuera-del-conflicto`: con Wolchik et al. (2002) podría sostenerse moderada. |
| quien-soy-sin-la-pareja | Volver a lo mío y a los míos | moderada | preliminar | Slotter et al. (2010); Lewandowski y Bizzoco (2007), correlacionales. | alta | Sin ensayo de la intervención. |
| mis-dias-tras-la-ruptura | Mis días después de la ruptura | moderada | preliminar | Stroebe y Schut (1999), teoría; Sbarra y Emery (2005), observacional. | alta | Sin ensayo de la intervención. |
| red-nueva-de-a-poco | Una red nueva, de a poco | moderada | preliminar | Sandstrom y Dunn (2014), correlacional; Bhugra (2004), una revisión. | alta | Sin ensayo de la intervención. |
| mi-lengua-y-mis-rituales | Mi lengua y mis rituales | moderada | preliminar | Berry (1997), teoría; Nguyen y Benet-Martínez (2013), un metaanálisis correlacional. | alta | Sin ensayo de la intervención. |
| soledad-o-aislamiento | ¿Soledad o aislamiento? | moderada | preliminar | Steptoe et al. (2013); Hawkley y Cacioppo (2010), observacionales. | alta | Es psicoeducación. |
| cuidarme-en-la-recta-final | Cuidarte en la recta final | moderada | preliminar | Pinquart y Sörensen (2003); Coelho et al. (2018), una revisión. | alta | Sin ensayo de la intervención. |
| preparar-su-historia | Preparar su historia | moderada | preliminar | Brodzinsky (2011), una revisión; Grotevant et al. (2013), longitudinal. | alta | Sin ensayo de la intervención. |
| cuando-te-lo-cuentan | Cuando alguien que quieres te lo cuenta | moderada | preliminar | Ryan et al. (2009, 2010), observacionales; la guía de la APA. | alta | Sin ensayo de la intervención. |
| despues-de-un-mal-examen | Después de un examen que salió mal | moderada | preliminar | Breines y Chen (2012), experimentos de laboratorio; Wohl et al. (2010), correlacional. | alta | Sin ensayo de la intervención. |
| consejo-de-amigo | Si se lo pasara a un amigo | moderada | preliminar | Grossmann y Kross (2014); Kross et al. (2014), experimentos de laboratorio. | alta | Es exactamente la definición de preliminar de la app. |
| nervios-que-preparan | Nervios que te preparan | moderada | preliminar | Jamieson et al. (2010, 2012) y Brooks (2014), experimentos de laboratorio. | media | No conozco con certeza un metaanálisis de la reevaluación de la activación. Si existe, se podría reconsiderar. |
| mi-feed-y-mi-cuerpo | Lo que miro y cómo me deja | moderada | preliminar | Fardouly et al. (2015); Tiggemann y Zaccardo (2015), experimentos de exposición en laboratorio. | media | Sin ensayo de la intervención. |
| del-rendimiento-al-presente | Del rendimiento al presente | moderada | preliminar | Barlow (1986), teoría; Masters y Johnson (1970). | media | Sin ensayo de la intervención. |
| atencion-a-las-sensaciones | Volver a las sensaciones | moderada | preliminar, o mantener añadiendo fuente | Brotto (2018), solo un libro de divulgación. | media | Brotto tiene ensayos de mindfulness para el deseo sexual bajo. Si los añades (**verificar** la cita exacta), puede quedar en moderada. |
| mentalizar-a-mi-hijo | ¿Qué le pasa por dentro? | moderada | preliminar | Slade (2005), una introducción; Camoirano (2017), una revisión narrativa. | media | Hay ECA de programas de función reflexiva parental, pero no se citan. |
| ese-pensamiento-no-es-un-deseo | Ese pensamiento no es un deseo | moderada | preliminar | Fairbrother y Woody (2008), observacional; Abramowitz et al. (2003), una revisión. | media | Es psicoeducación. Podría sostenerse como componente de la TCC para el TOC (NICE CG31). |
| registro-para-la-proxima-consulta | Un registro para la próxima consulta | moderada | preliminar | Korotitsch y Nelson-Gray (1999), una revisión; Elwyn et al. (2012), un modelo. | media | Sin ensayo de la intervención. |
| ensenar-lo-que-se | Enseñar lo que sé | moderada | preliminar | Anderson et al. (2014), una revisión mayormente observacional. | media | Sin ensayo de la intervención. |
| preparar-la-reunion-con-la-escuela | Preparar la reunión con la escuela | moderada | preliminar | Gaffney et al. (2019), un metaanálisis de programas escolares. | media | El metaanálisis evalúa programas de toda la escuela, no la reunión de los padres. |
| rutina-bajada-dormir | Rutina de bajada para dormir | moderada | preliminar | Carney y Waters (2006), un único estudio; Edinger et al. (2021). | media | La guía AASM se pronuncia *en contra* de la higiene del sueño como terapia única. La relajación tiene recomendación condicional. |
| respiracion-diafragmatica-movimiento | Respiración diafragmática con movimiento | moderada | preliminar | Ma et al. (2017), un ECA pequeño (n≈40); Zaccaro et al. (2018), una revisión sistemática sin metaanálisis. | media | Es un único ensayo sin replicar. |
| ganas-de-escribirle | Las ganas de escribirle | moderada | preliminar | Bowen y Marlatt (2009), un ECA sobre ganas de fumar. | media | Traslada la técnica a otro contexto (la ruptura de pareja), donde no se evaluó. |
| el-no-amable, mis-derechos-asertivos, admitir-un-error-sin-hundirme, preguntar-por-la-critica, un-acuerdo-que-me-respete, abrir-una-conversacion | Técnicas de Smith (disco rayado, banco de niebla, aserción e interrogación negativas, etc.) | moderada | preliminar | Smith (1975), un libro de divulgación; Speed et al. (2018), una revisión narrativa. | media | El entrenamiento asertivo en general tiene ensayos antiguos. Las técnicas concretas de Smith no tienen, que yo sepa, evaluación directa. |
| limites-a-la-estimulacion | Poner límites a la estimulación | moderada | preliminar | Speed et al. (2018); Aron (1996), un libro de divulgación. | media | Sin ensayo de la intervención. |
| cuando-siento-que-soy-demasiado | Cuando siento que soy demasiado | moderada | preliminar, o mantener añadiendo fuente | Neff (2003), la escala; Gilbert (2009), un libro; MacBeth y Gumley (2012), un metaanálisis correlacional. | media | Si añades Ferrari et al. (2019) o Kirby et al. (2017), puede quedar en moderada. |
| esta-etapa-con-amabilidad | Esta etapa, con amabilidad | moderada | mantener añadiendo fuente | Neff y Germer (2013), un ECA de MSC. | media | Funciona igual que `pausa-autocompasion`, que cita Kirby (2017). Añade un metaanálisis. |
| preguntar-lo-que-quiere | Preguntar qué quiere | moderada | preliminar, o mantener añadiendo fuente | Wright et al. (2008), observacional; Sudore et al. (2017), un consenso. | media | Para sostener moderada: Detering, K. M., et al. (2010). *The impact of advance care planning on end of life care in elderly patients: randomised controlled trial*. BMJ, 340, c1345. |

### C. Nivel probablemente correcto, pero con una referencia floja o que no corresponde

Aquí no propongo cambiar el nivel: solo reforzar la cita para que el panel «Fundamento empírico» sea coherente.

| id de la práctica | título | nivel actual | nivel propuesto | fuente | seguridad | nota |
|---|---|---|---|---|---|---|
| revision-semanal | Revisión semanal | moderada | moderada | Harkin, B., et al. (2016). *Does monitoring goal progress promote goal attainment? A meta-analysis of the experimental evidence*. Psychological Bulletin, 142(2), 198–229. | alta | La cita actual (Gollwitzer y Sheeran, 2006) trata de intenciones de implementación, no de revisar el progreso. |
| atencion-respiracion | Atención focalizada en la respiración | moderada | moderada | Goyal, M., et al. (2014). *Meditation programs for psychological stress and well-being: a systematic review and meta-analysis*. JAMA Internal Medicine, 174(3), 357–368. | alta | Hoy solo cita estudios de mecanismo (fMRI y una revisión teórica). |
| respiracion-resonante | Respiración resonante | moderada | moderada | Goessl, V. C., Curtiss, J. E., & Hofmann, S. G. (2017). *The effect of heart rate variability biofeedback training on stress and anxiety: a meta-analysis*. Psychological Medicine, 47(15), 2578–2586. | alta | La evidencia es del biofeedback, un formato más intensivo, así que encaja con moderada. |
| accion-comprometida, punto-de-eleccion | Acción comprometida / El punto de elección | moderada | moderada | A-Tjak, J. G. L., et al. (2015). *A meta-analysis of the efficacy of acceptance and commitment therapy for clinically relevant mental and physical health problems*. Psychotherapy and Psychosomatics, 84(1), 30–36. | alta | Hoy solo citan el manual de ACT. |
| mapa-de-situaciones-de-riesgo | Mis situaciones de riesgo | moderada | moderada | Irvin, J. E., Bowers, C. A., Dunn, M. E., & Wang, M. C. (1999). *Efficacy of relapse prevention: a meta-analytic review*. Journal of Consulting and Clinical Psychology, 67(4), 563–570. | alta | Sirve también para el resto del pack de prevención de recaídas. |
| hacer-lugar-al-dolor, valores-pese-al-dolor | Dolor crónico (ACT) | moderada | moderada | NICE NG193 (2021), *Chronic pain (primary and secondary) in over 16s*: recomienda ACT o TCC para el dolor crónico primario. | alta | Refuerza el nivel actual. |
| saboreo | Saboreo deliberado | moderada | moderada (verificar) | Las referencias actuales son un libro y un estudio correlacional (Quoidbach 2010). | media | Si no encuentras un ensayo controlado de una intervención de saboreo, debería bajar a preliminar. |
| redisenar-mi-trabajo | Rediseñar mi trabajo | moderada | moderada (verificar) | Oprea, B. T., et al. (2019). *Effectiveness of job crafting interventions: a meta-analysis and utility analysis*. European Journal of Work and Organizational Psychology (**verificar**). | media | Hoy cita teoría y una escala. Si no se confirma la fuente, queda en preliminar. |
| cierre-de-jornada | Cierre de jornada | moderada | moderada (verificar) | Hahn, V. C., Binnewies, C., Sonnentag, S., & Mojza, E. J. (2011). *Learning how to recover from job stress*. Journal of Occupational Health Psychology, 16(2), 202–216 (**verificar**). | media | Hoy solo cita un cuestionario y una revisión. |
| balance-del-alcohol, balance-de-las-apuestas, balance-del-cannabis | Balances de pros y contras | moderada | moderada | Miller y Rose (2015), Behavioural and Cognitive Psychotherapy, 43(2), 129–141. | alta | Mantengo moderada porque son parte de intervenciones breves evaluadas (Kaner et al., 2018, Cochrane; Gates et al., 2016, Cochrane). Pero conviene añadir en la ficha que el balance decisional puede ser contraproducente cuando la persona está muy ambivalente. |

---

## Resumen

- **Subidas propuestas: 16**, todas de preliminar a moderada y con seguridad media: 8 de DBT, 4 de terapia metacognitiva, 2 de CFT o autocompasión, 1 de reversión de hábitos y 1 de TIP. No propongo ninguna subida a robusta.
- **Bajadas propuestas: 62 prácticas** (contando por separado las 6 técnicas de Smith, que están en una sola fila).
  - 7 robustas pasan a moderada (2 de ellas, la escalera del miedo y subir un escalón, como «verificar»).
  - 55 moderadas pasan a preliminar. En 5 de ellas (`un-dia-con-forma`, `atencion-a-las-sensaciones`, `cuando-siento-que-soy-demasiado`, `preguntar-lo-que-quiere`, `contarles-la-separacion`) el nivel se puede mantener si añades la fuente indicada.
  - `esta-etapa-con-amabilidad` aparece en la tabla B, pero solo pide añadir una fuente: no cuenta como bajada.
- **Además**: unas 14 prácticas mantienen el nivel pero necesitan una referencia mejor (tabla C). Hay que unificar la definición de los niveles entre `types.ts` y `evidence.ts`, y revisar los recuentos del encargo frente al índice actual.
