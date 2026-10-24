import type { Practice, Reference } from './types';

/**
 * Segunda tanda del catálogo del Gimnasio. Mismo estándar que practices.ts: familia,
 * mecanismo, nivel de evidencia declarado, referencias primarias y guiones originales.
 */

const DAHL_2015: Reference = {
  citation:
    'Dahl, C. J., Lutz, A., & Davidson, R. J. (2015). Reconstructing and deconstructing the self: Cognitive mechanisms in meditation practice. Trends in Cognitive Sciences, 19(9), 515–523.',
  doi: '10.1016/j.tics.2015.07.001',
};
const LUTZ_2008_TICS: Reference = {
  citation:
    'Lutz, A., Slagter, H. A., Dunne, J. D., & Davidson, R. J. (2008). Attention regulation and monitoring in meditation. Trends in Cognitive Sciences, 12(4), 163–169.',
  doi: '10.1016/j.tics.2008.01.005',
};
const HAYES_2006: Reference = {
  citation:
    'Hayes, S. C., Luoma, J. B., Bond, F. W., Masuda, A., & Lillis, J. (2006). Acceptance and commitment therapy: Model, processes and outcomes. Behaviour Research and Therapy, 44(1), 1–25.',
  doi: '10.1016/j.brat.2005.06.006',
};

export const EXTRA_PRACTICES: Practice[] = [
  // ============================================================ ATENCIONALES
  {
    id: 'atencion-sonidos',
    title: 'Atención a los sonidos',
    family: 'attentional',
    skills: ['attention'],
    summary: 'Usar los sonidos del entorno como ancla: recibirlos tal como llegan, sin buscarlos ni rechazarlos.',
    mechanism:
      'Ancla externa y cambiante que entrena una atención receptiva; útil cuando atender al cuerpo o a la respiración resulta incómodo.',
    evidenceLevel: 'preliminar',
    evidence: [LUTZ_2008_TICS],
    howItWorks: [
      'Los sonidos tienen una ventaja como ancla: llegan solos, no hay que producirlos. Esto los hace especialmente útiles para personas a las que atender a la respiración les genera ansiedad, o para quienes tienen historia de trauma y prefieren un foco fuera del cuerpo.',
      'La práctica entrena además una cualidad sutil: notar la diferencia entre el sonido en bruto y la etiqueta que la mente le pone en seguida («coche», «molesto»). Esa pequeña distancia entre percepción y juicio es la misma que después permite responder en lugar de reaccionar.',
    ],
    tips: [
      'No hace falta silencio: una calle ruidosa es un excelente campo de práctica.',
      'Escucha también los silencios entre sonidos.',
      'Si un sonido te molesta, observa la molestia como otra experiencia más.',
    ],
    obstacles: [{ q: 'Hay un ruido que me irrita.', a: 'Explora su textura, volumen y ritmo como si fuera música experimental. La irritación suele aflojar cuando se vuelve curiosidad.' }],
    steps: [
      { title: 'Llegar', instruction: 'Siéntate con comodidad. Deja que los ojos se cierren o descansen en un punto.', durationSec: 45 },
      { title: 'Recibir', instruction: 'Abre la atención a los sonidos: cercanos, lejanos, continuos, breves. No los busques: deja que lleguen.', durationSec: 150 },
      { title: 'Sonido sin nombre', instruction: 'Cuando la mente diga «coche» o «pájaro», vuelve al sonido tal como es: tono, volumen, duración.', durationSec: 120 },
      { title: 'Silencios', instruction: 'Nota también los espacios entre sonidos. El silencio es parte del paisaje.', durationSec: 60, kind: 'silence' },
    ],
  },
  {
    id: 'caminar-atencion',
    title: 'Caminar con atención',
    family: 'attentional',
    skills: ['attention', 'resilience'],
    summary: 'Caminar despacio prestando atención a cada fase del paso: levantar, mover, apoyar.',
    mechanism: 'Atención focalizada en movimiento: integra la práctica en la vida cotidiana y es más accesible cuando hay inquietud o somnolencia.',
    evidenceLevel: 'preliminar',
    evidence: [
      {
        citation:
          'Prakhinkit, S., Suppapitiporn, S., Tanaka, H., & Suksom, D. (2014). Effects of Buddhism walking meditation on depression, functional fitness, and endothelium-dependent vasodilation in depressed elderly. The Journal of Alternative and Complementary Medicine, 20(5), 411–416.',
        doi: '10.1089/acm.2013.0205',
        note: 'Ensayo pequeño en personas mayores con depresión.',
      },
      { citation: 'Kabat-Zinn, J. (1990). Full catastrophe living. Delacorte.' },
    ],
    howItWorks: [
      'La meditación caminando es una práctica tradicional en casi todas las escuelas contemplativas. El movimiento da a la atención un objeto vivo y concreto, lo que la hace más fácil de sostener cuando la mente está agitada o el cuerpo cansado.',
      'Tiene un beneficio práctico: se lleva a la vida diaria. Cualquier trayecto (al trabajo, por un pasillo) puede convertirse en unos minutos de entrenamiento atencional sin que nadie lo note.',
    ],
    tips: [
      'Basta un espacio de cinco o seis pasos: ida y vuelta.',
      'Más lento de lo habitual, pero sin rigidez.',
      'Puedes etiquetar suavemente: «levantar, mover, apoyar».',
    ],
    obstacles: [{ q: 'Se me hace raro caminar tan despacio.', a: 'Hazlo a velocidad normal durante un trayecto cotidiano. La lentitud ayuda, pero lo esencial es la atención.' }],
    steps: [
      { title: 'De pie', instruction: 'Sin moverte, siente el peso del cuerpo sobre los pies y el contacto con el suelo.', durationSec: 45 },
      { title: 'Paso a paso', instruction: 'Camina despacio. Nota cómo se levanta el talón, cómo avanza el pie, cómo se apoya.', durationSec: 180 },
      { title: 'Girar', instruction: 'Al llegar al final, detente, siente la intención de girar y gira con atención.', durationSec: 90 },
      { title: 'Ritmo natural', instruction: 'Aumenta un poco la velocidad manteniendo la atención en los pies.', durationSec: 120 },
      { title: 'Detenerse', instruction: 'Detente otra vez. Nota el cuerpo después de caminar.', durationSec: 45, kind: 'silence' },
    ],
  },
  {
    id: 'relajacion-progresiva',
    title: 'Relajación muscular progresiva',
    family: 'attentional',
    skills: ['resilience'],
    summary: 'Tensar y soltar grupos musculares en secuencia para aprender a reconocer y liberar la tensión.',
    mechanism: 'Entrena la discriminación entre tensión y relajación y reduce la activación fisiológica; técnica clásica de Jacobson con amplia evidencia en ansiedad.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Manzoni, G. M., Pagnini, F., Castelnuovo, G., & Molinari, E. (2008). Relaxation training for anxiety: A ten-years systematic review with meta-analysis. BMC Psychiatry, 8, 41.',
        doi: '10.1186/1471-244X-8-41',
      },
    ],
    howItWorks: [
      'Edmund Jacobson observó en los años 30 que la ansiedad y la tensión muscular se alimentan mutuamente, y que muchas personas no notan su tensión hasta que se vuelve dolor. Tensar un músculo a propósito y luego soltarlo hace evidente el contraste.',
      'Con la práctica, el cuerpo aprende a soltar tensión sin necesidad de tensar primero. Un metaanálisis de 2008 encontró efectos medios a grandes de las técnicas de relajación sobre la ansiedad. Es especialmente útil antes de dormir.',
    ],
    tips: [
      'Tensa al 50–70 %, nunca hasta el dolor.',
      'El momento clave es soltar: quédate unos segundos notando la diferencia.',
      'Si tienes una lesión, salta esa zona.',
    ],
    obstacles: [{ q: 'Al relajarme me inquieto más.', a: 'Le ocurre a algunas personas («ansiedad inducida por relajación»). Mantén los ojos abiertos, acorta la práctica y alterna con caminar con atención.' }],
    cautions: 'Evita tensar zonas lesionadas o con dolor. Con hipertensión no controlada, tensa suavemente.',
    steps: [
      { title: 'Preparar', instruction: 'Siéntate o acuéstate. Unas respiraciones tranquilas.', durationSec: 40 },
      { title: 'Manos y brazos', instruction: 'Cierra los puños y tensa los brazos 5 segundos… suelta de golpe. Nota la diferencia durante el resto del paso.', durationSec: 75 },
      { title: 'Rostro', instruction: 'Arruga la frente, aprieta ojos y mandíbula 5 segundos… suelta. Deja la mandíbula entreabierta.', durationSec: 75 },
      { title: 'Hombros y cuello', instruction: 'Sube los hombros hacia las orejas 5 segundos… suéltalos. Siente cómo caen.', durationSec: 75 },
      { title: 'Abdomen y espalda', instruction: 'Tensa el abdomen y arquea ligeramente la espalda 5 segundos… suelta.', durationSec: 75 },
      { title: 'Piernas y pies', instruction: 'Estira las piernas y flexiona los dedos de los pies 5 segundos… suelta.', durationSec: 75 },
      { title: 'Todo el cuerpo', instruction: 'Recorre el cuerpo buscando restos de tensión y déjalos ir con cada exhalación.', durationSec: 75, kind: 'breath' },
    ],
  },

  // ============================================================ CONSTRUCTIVAS
  {
    id: 'gratitud-contemplativa',
    title: 'Gratitud contemplativa',
    family: 'constructive',
    skills: ['compassion', 'resilience'],
    summary: 'Reconocer, en silencio y con detalle, aquello que sostiene tu vida y a quienes lo hacen posible.',
    mechanism: 'Reorienta la atención hacia lo recibido y hacia la contribución de otros; la gratitud se asocia a afecto positivo y conducta prosocial.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Emmons, R. A., & McCullough, M. E. (2003). Counting blessings versus burdens: An experimental investigation of gratitude and subjective well-being in daily life. Journal of Personality and Social Psychology, 84(2), 377–389.',
        doi: '10.1037/0022-3514.84.2.377',
      },
    ],
    howItWorks: [
      'En el estudio clásico de Emmons y McCullough, quienes anotaban semanalmente cosas por las que estaban agradecidos reportaron más optimismo y bienestar que quienes anotaban molestias o sucesos neutros.',
      'La versión contemplativa añade una capa: seguir la cadena de causas. El café de esta mañana existe gracias a quien lo cultivó, lo transportó, lo vendió. Esta práctica, central en la tradición que transmite Ricard, convierte la gratitud en una percepción de interdependencia.',
    ],
    tips: [
      'Lo pequeño y concreto funciona mejor que lo grande y abstracto.',
      'Incluye a personas que nunca conocerás.',
      'Si aparece resentimiento («no tengo nada que agradecer»), obsérvalo con amabilidad y vuelve a algo mínimo: el aire, el agua.',
    ],
    obstacles: [{ q: 'Me parece forzado agradecer cuando lo estoy pasando mal.', a: 'La gratitud no niega el dolor: convive con él. No hace falta sentirla; basta con reconocer un hecho.' }],
    steps: [
      { title: 'Llegar', instruction: 'Unas respiraciones para asentar el cuerpo.', durationSec: 45, kind: 'breath' },
      { title: 'Lo cercano', instruction: 'Trae a la mente algo concreto de hoy que te sostuvo: una comida, un abrigo, una conversación.', durationSec: 90 },
      { title: 'La cadena', instruction: '¿Cuántas personas hicieron falta para que eso llegara a ti? Recórrelas con la imaginación.', durationSec: 120, kind: 'reflection' },
      { title: 'Una persona', instruction: 'Elige a alguien que te haya ayudado. Recuerda un gesto concreto y nota lo que se siente al reconocerlo.', durationSec: 90 },
      { title: 'Descansar', instruction: 'Deja que la sensación de haber recibido ocupe espacio, sin palabras.', durationSec: 45, kind: 'silence' },
    ],
  },
  {
    id: 'regocijo-empatico',
    title: 'Regocijo empático',
    family: 'constructive',
    skills: ['compassion'],
    summary: 'Cultivar la alegría por el bienestar y los logros de otras personas (mudita).',
    mechanism: 'Entrena el estado opuesto a la envidia y la comparación; fortalece los vínculos al responder con entusiasmo genuino al bien ajeno.',
    evidenceLevel: 'contemplativa',
    evidence: [
      {
        citation:
          'Gable, S. L., Reis, H. T., Impett, E. A., & Asher, E. R. (2004). What do you do when things go right? The intrapersonal and interpersonal benefits of sharing positive events. Journal of Personality and Social Psychology, 87(2), 228–245.',
        doi: '10.1037/0022-3514.87.2.228',
        note: 'Evidencia indirecta: beneficios de responder activamente al bien ajeno.',
      },
      { citation: 'Ricard, M. (2016). En defensa del altruismo. Urano. (Orig. Plaidoyer pour l’altruisme, 2013).' },
    ],
    howItWorks: [
      'Mudita es una de las cuatro cualidades inconmensurables del budismo, junto al amor, la compasión y la ecuanimidad. Es probablemente la menos practicada y la más difícil: alegrarse del bien ajeno sin compararse.',
      'Su respaldo empírico es indirecto pero coherente. Gable y colaboradores mostraron que responder de forma activa y entusiasta cuando alguien comparte una buena noticia mejora la relación y el bienestar de ambos. Esta práctica entrena la base afectiva de esa respuesta.',
    ],
    tips: [
      'Empieza por alguien a quien quieres: es más fácil.',
      'Puedes alegrarte también por desconocidos: alguien que ríe en la calle, un niño que aprende.',
      'Si aparece la envidia, no la combatas: nótala y vuelve a la intención.',
    ],
    obstacles: [{ q: 'Con ciertas personas me sale envidia, no alegría.', a: 'Es humano y es justo lo que se entrena. Empieza por un logro pequeño de esa persona, o por alguien más neutral.' }],
    steps: [
      { title: 'Llegar', instruction: 'Unas respiraciones tranquilas.', durationSec: 40, kind: 'breath' },
      { title: 'Alguien querido', instruction: 'Piensa en una persona querida a la que le va bien en algo. Déjate contagiar de su alegría: «me alegro de que estés bien».', durationSec: 120 },
      { title: 'Alguien neutral', instruction: 'Una persona que apenas conoces y que hoy tuvo un buen momento. Alégrate por ella.', durationSec: 90 },
      { title: 'Alguien difícil', instruction: 'Opcional: alguien cuyo éxito te incomoda un poco. Prueba a desearle que lo disfrute. Nota lo que aparece.', durationSec: 90 },
      { title: 'Todos', instruction: 'Imagina la cantidad de alegrías pequeñas ocurriendo ahora en el mundo. Alégrate por todas.', durationSec: 60, kind: 'silence' },
    ],
  },
  {
    id: 'ecuanimidad',
    title: 'Ecuanimidad',
    family: 'constructive',
    skills: ['resilience', 'compassion'],
    summary: 'Cultivar una estabilidad interior que permite acercarse a lo agradable y a lo desagradable sin aferrarse ni rechazar.',
    mechanism: 'Reduce la reactividad hedónica automática (atracción/aversión) manteniendo la implicación y el cuidado.',
    evidenceLevel: 'preliminar',
    evidence: [
      {
        citation:
          'Desbordes, G., Gard, T., Hoge, E. A., et al. (2015). Moving beyond mindfulness: Defining equanimity as an outcome measure in meditation and contemplative research. Mindfulness, 6(2), 356–372.',
        doi: '10.1007/s12671-013-0269-8',
      },
    ],
    howItWorks: [
      'La ecuanimidad no es indiferencia. Es la capacidad de sentir plenamente sin que la emoción te arrastre: ni aferrarse a lo agradable ni huir de lo desagradable. En la tradición, protege al amor y a la compasión del apego y del agotamiento.',
      'Desbordes y colaboradores propusieron la ecuanimidad como uno de los resultados centrales del entrenamiento contemplativo, y la definieron como una reducción de la reactividad automática. Su medición es aún reciente, por eso la evidencia es preliminar.',
    ],
    tips: [
      'Las frases son apoyos: «las cosas son como son», «cada cual es dueño de sus actos».',
      'Combínala con el amor altruista: calidez y estabilidad juntas.',
      'Útil cuando cuidas de alguien que sufre y no puedes resolver su situación.',
    ],
    obstacles: [{ q: '¿No es resignación?', a: 'No: la ecuanimidad permite actuar con más claridad, porque la reacción no te atrapa. Se puede tener ecuanimidad y compromiso.' }],
    steps: [
      { title: 'Estabilizar', instruction: 'Respiración natural. Siente el apoyo firme del asiento.', durationSec: 45, kind: 'breath' },
      { title: 'Agradable', instruction: 'Recuerda algo agradable. Nota el impulso de retenerlo. Déjalo estar sin aferrarte: «esto también cambiará».', durationSec: 90 },
      { title: 'Desagradable', instruction: 'Recuerda algo levemente desagradable. Nota el impulso de rechazarlo. Hazle espacio: «esto también cambiará».', durationSec: 90 },
      { title: 'Alguien que sufre', instruction: 'Piensa en alguien a quien quieres y que lo pasa mal. Ofrécele tu cuidado reconociendo que no puedes controlar su camino.', durationSec: 120 },
      { title: 'Montaña', instruction: 'Imagina una montaña bajo cualquier clima: sol, lluvia, nieve. El clima cambia; la montaña permanece.', durationSec: 60, kind: 'silence' },
    ],
  },
  {
    id: 'perdon-reach',
    title: 'Perdón (modelo REACH)',
    family: 'constructive',
    skills: ['compassion', 'resilience'],
    summary: 'Recorrer los cinco pasos del modelo REACH para soltar el resentimiento por una ofensa concreta.',
    mechanism: 'Reduce la rumiación vengativa y la activación asociada al agravio; no implica reconciliarse ni justificar.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Wade, N. G., Hoyt, W. T., Kidwell, J. E. M., & Worthington, E. L. (2014). Efficacy of psychotherapeutic interventions to promote forgiveness: A meta-analysis. Journal of Consulting and Clinical Psychology, 82(1), 154–170.',
        doi: '10.1037/a0035268',
      },
    ],
    howItWorks: [
      'Everett Worthington desarrolló REACH: Recordar el daño sin victimizarse, Empatizar con quien lo hizo, ofrecer el perdón como un regalo Altruista, Comprometerse públicamente con él y Hold on (sostenerlo cuando vuelvan las dudas).',
      'Un metaanálisis de 54 estudios mostró que estas intervenciones reducen la depresión y la ansiedad y aumentan la esperanza, con más efecto cuanto más tiempo se dedica. El perdón se entiende aquí como un cambio interno, no como un acuerdo con la otra persona.',
    ],
    tips: [
      'Empieza por una ofensa pequeña: el perdón también se entrena.',
      'Perdonar no es olvidar ni dejar de protegerte.',
      'Es normal que el resentimiento vuelva: eso es la fase «sostener».',
    ],
    obstacles: [{ q: 'No quiero perdonar a esa persona.', a: 'No tienes por qué. El perdón es una opción, no una obligación. A veces el primer paso es reconocer cuánto te cuesta cargar el agravio.' }],
    cautions: 'No es adecuado si la situación de daño continúa. Primero, seguridad.',
    steps: [
      { title: 'Recordar', instruction: 'Recuerda la ofensa como un narrador neutral, en tercera persona. Sin dramatizar ni minimizar.', durationSec: 90, kind: 'reflection' },
      { title: 'Empatizar', instruction: '¿Qué presión, miedo o ignorancia pudo llevar a esa persona a actuar así? Comprender no es justificar.', durationSec: 120, kind: 'reflection' },
      { title: 'Regalo altruista', instruction: 'Recuerda una vez en que alguien te perdonó. ¿Cómo se sintió? ¿Puedes ofrecer algo parecido?', durationSec: 90, kind: 'reflection' },
      { title: 'Comprometerse', instruction: 'Cuando sientas que es el momento, formula internamente: «suelto el deseo de que pagues por esto». Puedes escribirlo en el Diario.', durationSec: 60 },
      { title: 'Sostener', instruction: 'Cuando vuelva el resentimiento, recuerda este momento: el recuerdo del dolor no es lo mismo que no haber perdonado.', durationSec: 60, kind: 'silence' },
    ],
  },
  {
    id: 'activacion-conductual',
    title: 'Planificar actividades que nutren',
    family: 'constructive',
    skills: ['resilience'],
    summary: 'Elegir y agendar actividades de placer, logro y conexión, pequeñas y concretas, para romper el ciclo del desánimo.',
    mechanism: 'Activación conductual: aumentar el contacto con fuentes de refuerzo positivo, actuando antes de tener ganas.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Cuijpers, P., van Straten, A., & Warmerdam, L. (2007). Behavioral activation treatments of depression: A meta-analysis. Clinical Psychology Review, 27(3), 318–326.',
        doi: '10.1016/j.cpr.2006.11.001',
      },
      {
        citation:
          'Ekers, D., Webster, L., Van Straten, A., et al. (2014). Behavioural activation for depression; an update of meta-analysis of effectiveness and sub group analysis. PLoS ONE, 9(6), e100100.',
        doi: '10.1371/journal.pone.0100100',
      },
    ],
    howItWorks: [
      'Cuando el ánimo baja, hacemos menos; al hacer menos, recibimos menos placer, logro y conexión; y con menos de eso, el ánimo baja más. La activación conductual interrumpe el círculo desde la acción, sin esperar a que lleguen las ganas.',
      'Las actividades se eligen por tres criterios: placer (algo que disfrutas), logro (algo que te hace sentir capaz) y conexión (algo con otras personas). La clave es que sean pequeñas y estén agendadas: día, hora y lugar.',
    ],
    tips: [
      'Divide: «ordenar la casa» → «lavar tres platos».',
      'Agenda como si fuera una cita médica.',
      'Después, anota del 0 al 10 el placer y el logro en el Diario (registro de actividades).',
    ],
    obstacles: [{ q: 'No tengo ganas de nada.', a: 'Es lo esperable: las ganas suelen venir después de la acción, no antes. Elige algo tan pequeño que parezca casi ridículo.' }],
    steps: [
      { title: 'Placer', instruction: 'Piensa en algo que antes disfrutabas, o que podrías disfrutar un poco, y que lleve menos de 20 minutos.', durationSec: 75, kind: 'reflection' },
      { title: 'Logro', instruction: 'Algo pequeño que te daría sensación de haber hecho algo: una tarea, un trámite, un orden.', durationSec: 75, kind: 'reflection' },
      { title: 'Conexión', instruction: 'Un contacto breve con alguien: un mensaje, una llamada, un saludo.', durationSec: 75, kind: 'reflection' },
      { title: 'Agendar', instruction: 'Para cada una, decide día, hora y lugar concretos en los próximos tres días.', durationSec: 75, kind: 'reflection' },
      { title: 'Anticipar', instruction: '¿Qué podría frenarte? Prepara un «si pasa X, entonces haré Y».', durationSec: 60, kind: 'reflection' },
    ],
  },

  // ============================================================ DECONSTRUCTIVAS
  {
    id: 'observador',
    title: 'El yo observador',
    family: 'deconstructive',
    skills: ['resilience', 'attention'],
    summary: 'Notar que hay una perspectiva desde la que se observan pensamientos, emociones y sensaciones, y que no cambia con ellos.',
    mechanism: '«Yo como contexto» (ACT): desidentificación de los contenidos mentales; la experiencia de uno mismo como el espacio donde ocurren.',
    evidenceLevel: 'preliminar',
    evidence: [HAYES_2006, DAHL_2015],
    howItWorks: [
      'En la Terapia de Aceptación y Compromiso se distinguen tres sentidos del yo: el yo como contenido («soy una persona ansiosa, soy un fracaso»), el yo como proceso (notar lo que ocurre ahora) y el yo como contexto: la perspectiva estable desde la que todo eso se observa.',
      'Cuando una persona se identifica rígidamente con un relato sobre sí misma, cualquier cosa que lo amenace se vive como una amenaza a su existencia. Contactar con el observador crea un lugar seguro desde el que mirar incluso los contenidos más dolorosos.',
    ],
    tips: [
      'Pregunta útil: «¿quién está notando esto?», sin buscar una respuesta.',
      'Recordar momentos distintos de tu vida ayuda: tú estabas ahí en todos.',
      'Es una práctica para hacer en calma antes de necesitarla.',
    ],
    obstacles: [{ q: 'No encuentro ningún «observador».', a: 'No es una cosa que se encuentre. Es la perspectiva misma. Si notas que estás notando, ya estás ahí.' }],
    cautions: 'En personas con experiencias disociativas puede resultar desorientadora. Prefiere prácticas con ancla corporal.',
    steps: [
      { title: 'Notar', instruction: 'Nota el cuerpo sentado. Y nota que eres tú quien lo nota.', durationSec: 60 },
      { title: 'Pensamientos', instruction: 'Observa los pensamientos que aparecen. Están ahí… y tú los estás notando.', durationSec: 90 },
      { title: 'Emociones', instruction: 'Observa cómo te sientes ahora. La emoción está ahí… y tú la estás notando.', durationSec: 90 },
      { title: 'A lo largo del tiempo', instruction: 'Recuerda una escena de tu infancia. Tú estabas ahí, observando. Y ahora estás aquí, observando. Esa perspectiva te ha acompañado siempre.', durationSec: 120, kind: 'reflection' },
      { title: 'Descansar', instruction: 'Descansa como el espacio en el que todo esto aparece.', durationSec: 60, kind: 'silence' },
    ],
  },
  {
    id: 'surfear-impulso',
    title: 'Surfear el impulso',
    family: 'deconstructive',
    skills: ['resilience', 'attention'],
    summary: 'Observar un impulso (comer, fumar, mirar el móvil, discutir) como una ola que sube y baja, sin obedecerlo ni combatirlo.',
    mechanism: 'Exposición atenta al deseo sin conducta: el impulso se experimenta como sensaciones transitorias y pierde capacidad de mando.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Bowen, S., & Marlatt, A. (2009). Surfing the urge: Brief mindfulness-based intervention for college student smokers. Psychology of Addictive Behaviors, 23(4), 666–671.',
        doi: '10.1037/a0017127',
      },
    ],
    howItWorks: [
      'G. Alan Marlatt, uno de los pioneros en prevención de recaídas, propuso imaginar el impulso como una ola: crece, alcanza un pico y desciende, normalmente en pocos minutos, si no se alimenta con la acción.',
      'En un ensayo con fumadores, una breve instrucción en esta técnica redujo el consumo en la semana siguiente. Lo que se entrena es la capacidad de sentir el deseo plenamente sin que dicte la conducta.',
    ],
    tips: [
      'Practícala primero con impulsos pequeños: rascarte, mirar el móvil.',
      'Localiza el impulso en el cuerpo: suele estar en la boca, el pecho, las manos.',
      'Usa la respiración como tabla de surf.',
    ],
    obstacles: [{ q: 'El impulso no baja.', a: 'A veces tarda más de lo que esperas, o sube varias veces. Cada ola que atraviesas sin actuar debilita el hábito.' }],
    steps: [
      { title: 'Evocar', instruction: 'Recuerda un impulso habitual (o usa uno presente). Deja que aparezca con cierta intensidad.', durationSec: 60 },
      { title: 'Localizar', instruction: '¿Dónde se siente en el cuerpo? ¿Presión, calor, cosquilleo, tensión?', durationSec: 75 },
      { title: 'Surfear', instruction: 'Respira con la sensación. Obsérvala crecer, alcanzar su cresta y empezar a bajar. No actúes.', durationSec: 180, kind: 'breath' },
      { title: 'Después de la ola', instruction: 'Nota cómo está ahora el impulso. Nota que no necesitaste obedecerlo.', durationSec: 60, kind: 'silence' },
    ],
  },
];
