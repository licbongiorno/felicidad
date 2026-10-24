import type { Practice } from './types';

/**
 * Tercera tanda: herramientas rápidas (1–3 min) para usar en el momento, resolución de
 * problemas y "hacer espacio" (aceptación de ACT para sensaciones difíciles y dolor).
 */
export const MORE_PRACTICES: Practice[] = [
  // ============================================================ HERRAMIENTAS RÁPIDAS
  {
    id: 'espacio-tres-minutos',
    title: 'Espacio de respiración de tres minutos',
    family: 'attentional',
    skills: ['attention', 'resilience'],
    micro: true,
    summary: 'Una pausa breve en tres tiempos: notar qué hay, reunir la atención en la respiración y ampliarla al cuerpo entero.',
    mechanism: 'Interrumpe el piloto automático y traslada la atención del pensamiento a la experiencia presente; es la práctica breve central de la terapia cognitiva basada en mindfulness (MBCT).',
    evidenceLevel: 'moderada',
    evidence: [
      { citation: 'Segal, Z. V., Williams, J. M. G., & Teasdale, J. D. (2013). Mindfulness-based cognitive therapy for depression (2nd ed.). Guilford Press.' },
      {
        citation:
          'Kuyken, W., Warren, F. C., Taylor, R. S., et al. (2016). Efficacy of mindfulness-based cognitive therapy in prevention of depressive relapse: An individual patient data meta-analysis from randomized trials. JAMA Psychiatry, 73(6), 565–574.',
        doi: '10.1001/jamapsychiatry.2016.0076',
        note: 'Evidencia del programa MBCT completo, del que esta pausa es un componente.',
      },
    ],
    howItWorks: [
      'Es la práctica que los creadores de la terapia cognitiva basada en mindfulness (MBCT) enseñan para los momentos difíciles del día. Tiene forma de reloj de arena: amplia al principio (¿qué está pasando?), estrecha en el centro (la respiración) y amplia otra vez al final (el cuerpo entero).',
      'Su función no es relajarse sino salir del modo automático. En tres minutos se pasa de reaccionar a darse cuenta, y desde ahí es más fácil elegir qué hacer.',
    ],
    tips: ['Úsala entre tareas, antes de una conversación difícil o cuando notes que la mente acelera.', 'No hace falta cerrar los ojos.', 'Tres minutos es una guía: incluso uno ayuda.'],
    obstacles: [{ q: 'No tengo tiempo.', a: 'Para eso existe: cabe entre dos correos. Si no hay tres minutos, haz una sola respiración consciente.' }],
    steps: [
      { title: 'Darse cuenta', instruction: '¿Qué hay ahora? Nota pensamientos, emociones y sensaciones, sin cambiarlos.', durationSec: 60 },
      { title: 'Reunir', instruction: 'Lleva toda la atención a la respiración, en el abdomen. Una respiración tras otra.', durationSec: 60, kind: 'breath' },
      { title: 'Ampliar', instruction: 'Abre la atención al cuerpo entero, respirando. Llévate esta amplitud a lo que sigue.', durationSec: 60 },
    ],
  },
  {
    id: 'pausa-stop',
    title: 'Pausa STOP',
    family: 'attentional',
    skills: ['attention', 'resilience'],
    micro: true,
    summary: 'Cuatro pasos para frenar una reacción automática: parar, tomar una respiración, observar y proseguir con intención.',
    mechanism: 'Crea un intervalo entre el estímulo y la respuesta; versión condensada del espacio de respiración de MBCT.',
    evidenceLevel: 'preliminar',
    evidence: [
      { citation: 'Segal, Z. V., Williams, J. M. G., & Teasdale, J. D. (2013). Mindfulness-based cognitive therapy for depression (2nd ed.). Guilford Press.', note: 'Formato derivado; no hay ensayos de la pausa STOP aislada.' },
    ],
    howItWorks: [
      'STOP es un acrónimo: Stop (para), Toma una respiración, Observa (cuerpo, emoción, pensamiento) y Prosigue con lo que importa. Es una forma de llevar la atención plena al momento en que más falta hace: justo antes de reaccionar.',
      'Su respaldo es indirecto: condensa los ingredientes de prácticas con evidencia. Se incluye por su utilidad práctica, con el nivel de evidencia declarado como preliminar.',
    ],
    tips: ['Asócialo a una señal frecuente: abrir una puerta, tomar el teléfono.', 'Funciona en medio de una discusión: puedes hacerlo sin que nadie lo note.'],
    obstacles: [{ q: 'Me olvido de usarlo cuando hace falta.', a: 'Practícalo varias veces al día en momentos tranquilos: así estará disponible cuando no lo estés.' }],
    steps: [
      { title: 'Para', instruction: 'Detente un instante, estés donde estés.', durationSec: 20 },
      { title: 'Toma una respiración', instruction: 'Una respiración lenta y consciente. Siente el aire entrar y salir.', durationSec: 25, kind: 'breath' },
      { title: 'Observa', instruction: '¿Qué hay en el cuerpo? ¿Qué emoción? ¿Qué te dice la mente? Sólo nótalo.', durationSec: 40 },
      { title: 'Prosigue', instruction: 'Elige cómo quieres seguir. ¿Qué haría ahora la persona que quieres ser?', durationSec: 25 },
    ],
  },
  {
    id: 'mano-en-el-pecho',
    title: 'Mano en el pecho',
    family: 'constructive',
    skills: ['compassion', 'resilience'],
    micro: true,
    summary: 'Un gesto de contacto amable sobre el pecho, acompañado de respiración lenta y una frase de cuidado.',
    mechanism: 'El contacto físico cálido activa respuestas de calma; en un ensayo, un gesto de autocontacto tranquilizador redujo la respuesta de cortisol al estrés de forma similar a recibir un abrazo.',
    evidenceLevel: 'preliminar',
    evidence: [
      {
        citation:
          'Dreisoerner, A., Junker, N. M., Schlotz, W., et al. (2021). Self-soothing touch and being hugged reduce cortisol responses to stress: A randomized controlled trial on stress, physical touch, and social identity. Comprehensive Psychoneuroendocrinology, 8, 100091.',
        doi: '10.1016/j.cpnec.2021.100091',
      },
    ],
    howItWorks: [
      'Los mamíferos se calman con el contacto: es uno de los primeros lenguajes del cuidado. El cuerpo responde al calor y la presión suave de una mano incluso cuando es la propia.',
      'En el estudio de Dreisoerner y colaboradores, quienes se hacían un gesto de autocontacto antes de una situación estresante mostraron menos cortisol que el grupo control, de forma parecida a quienes recibían un abrazo. Es un hallazgo reciente que requiere replicación.',
    ],
    tips: ['Si el pecho no te resulta cómodo, prueba una mano sobre la otra, en la mejilla o en el abdomen.', 'Úsala junto con la pausa de autocompasión.'],
    obstacles: [{ q: 'Me resulta raro o vergonzoso.', a: 'Puedes hacerlo de forma discreta, con la mano sobre el brazo. Lo importante es el calor y la intención.' }],
    steps: [
      { title: 'Contacto', instruction: 'Apoya una o ambas manos en el centro del pecho. Siente su calor y su peso.', durationSec: 30 },
      { title: 'Respirar', instruction: 'Respira despacio y nota cómo el pecho sube y baja bajo tus manos.', durationSec: 45, kind: 'breath' },
      { title: 'Cuidado', instruction: 'Dite con suavidad: «estoy aquí contigo» o la frase que te nazca.', durationSec: 45 },
    ],
  },
  {
    id: 'plantas-de-los-pies',
    title: 'Las plantas de los pies',
    family: 'attentional',
    skills: ['attention', 'resilience'],
    micro: true,
    summary: 'Ante una emoción intensa, llevar la atención a una parte neutra del cuerpo: las plantas de los pies.',
    mechanism: 'Desplazamiento atencional hacia un ancla neutra y estable, lejos del contenido que dispara la emoción; útil sobre todo con la ira.',
    evidenceLevel: 'preliminar',
    evidence: [
      {
        citation:
          'Singh, N. N., Wahler, R. G., Adkins, A. D., & Myers, R. E. (2003). Soles of the feet: A mindfulness-based self-control intervention for aggression by an individual with mild mental retardation and mental illness. Research in Developmental Disabilities, 24(3), 158–169.',
        doi: '10.1016/S0891-4222(03)00026-X',
        note: 'Estudio de caso; replicado después en pequeñas series. Evidencia preliminar.',
      },
    ],
    howItWorks: [
      'Nirbhay Singh y colaboradores desarrollaron esta técnica para personas con dificultades para regular la agresión. La idea es simple: cuando la emoción sube, llevar la atención a la parte del cuerpo más alejada de la cabeza y más neutra.',
      'Las plantas de los pies tienen dos ventajas: están siempre disponibles y rara vez están cargadas emocionalmente. Es un ancla de emergencia que no requiere cerrar los ojos ni que nadie lo note.',
    ],
    tips: ['Practícalo en calma para que esté disponible cuando lo necesites.', 'Mover un poco los dedos de los pies ayuda a sentirlos.'],
    obstacles: [{ q: 'La emoción sigue ahí.', a: 'No busca eliminarla, sino darte unos segundos para no actuar en caliente.' }],
    steps: [
      { title: 'Notar la emoción', instruction: 'Reconoce que una emoción fuerte está presente. Sin juzgarla.', durationSec: 25 },
      { title: 'Bajar a los pies', instruction: 'Lleva toda la atención a las plantas de los pies: el contacto con el suelo, la presión, la temperatura.', durationSec: 60 },
      { title: 'Mover los dedos', instruction: 'Mueve suavemente los dedos de los pies. Siente cada uno.', durationSec: 40 },
      { title: 'Volver', instruction: 'Respira. Cuando sientas más serenidad, decide qué hacer.', durationSec: 25, kind: 'breath' },
    ],
  },

  // ============================================================ RESOLUCIÓN DE PROBLEMAS
  {
    id: 'resolucion-problemas',
    title: 'Resolución de problemas',
    family: 'constructive',
    skills: ['resilience'],
    summary: 'Un método en cinco pasos para pasar de la preocupación a la acción: definir, generar opciones, evaluar, elegir y revisar.',
    mechanism: 'Convierte el problema difuso en uno concreto y con pasos; reduce la sensación de indefensión y la rumiación.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation: 'Cuijpers, P., van Straten, A., & Warmerdam, L. (2007). Problem solving therapies for depression: A meta-analysis. European Psychiatry, 22(1), 9–15.',
        doi: '10.1016/j.eurpsy.2006.11.001',
      },
      {
        citation: 'Bell, A. C., & D’Zurilla, T. J. (2009). Problem-solving therapy for depression: A meta-analysis. Clinical Psychology Review, 29(4), 348–353.',
        doi: '10.1016/j.cpr.2009.02.003',
      },
    ],
    howItWorks: [
      'La terapia de resolución de problemas, desarrollada por D’Zurilla y Nezu, parte de una observación: muchas personas no carecen de capacidad, sino de método. Ante un problema que abruma, la mente salta entre el problema entero y el miedo, sin dar pasos.',
      'El método separa fases que normalmente se mezclan: definir el problema en términos concretos, generar opciones sin juzgarlas, evaluarlas después, elegir una y revisar el resultado. Dos metaanálisis la sitúan entre los tratamientos eficaces para la depresión.',
    ],
    tips: [
      'Un problema bien definido ya está medio resuelto: concreto, observable y con un objetivo realista.',
      'En la lluvia de opciones, cantidad antes que calidad: incluye las absurdas.',
      'Escríbelo en el Diario (plantilla «Resolución de problemas»).',
    ],
    obstacles: [{ q: 'El problema no tiene solución.', a: 'Separa lo que se puede cambiar de lo que no. Para lo que no, el objetivo cambia: cómo vivir con ello (aceptación).' }],
    steps: [
      { title: 'Definir', instruction: 'Describe el problema en una frase concreta: qué pasa, cuándo, con quién. Sin juicios.', durationSec: 90, kind: 'reflection' },
      { title: 'Objetivo', instruction: '¿Qué cambio realista te gustaría conseguir? Que dependa de ti.', durationSec: 60, kind: 'reflection' },
      { title: 'Opciones', instruction: 'Escribe todas las soluciones posibles, sin evaluarlas todavía. Al menos cinco.', durationSec: 120, kind: 'reflection' },
      { title: 'Evaluar', instruction: 'Para cada opción: ventajas, inconvenientes y si es posible ahora. Elige una.', durationSec: 120, kind: 'reflection' },
      { title: 'Plan', instruction: 'Primer paso concreto, día y hora. ¿Cuándo revisarás cómo fue?', durationSec: 60, kind: 'reflection' },
    ],
  },

  // ============================================================ ACEPTACIÓN (ACT)
  {
    id: 'hacer-espacio',
    title: 'Hacer espacio',
    family: 'deconstructive',
    skills: ['resilience'],
    summary: 'Observar una sensación difícil (dolor, tensión, angustia) con curiosidad y dejar que ocupe su lugar sin luchar contra ella.',
    mechanism: 'Expansión o aceptación (ACT): reduce la lucha contra la sensación, que suele amplificar el sufrimiento, y libera energía para actuar.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Hughes, L. S., Clark, J., Colclough, J. A., Dale, E., & McMillan, D. (2017). Acceptance and commitment therapy (ACT) for chronic pain: A systematic review and meta-analyses. The Clinical Journal of Pain, 33(6), 552–568.',
        doi: '10.1097/AJP.0000000000000425',
        note: 'Evidencia del programa ACT completo; esta práctica es su componente de aceptación.',
      },
    ],
    howItWorks: [
      'Ante una sensación desagradable, la reacción natural es tensarse contra ella. Pero esa lucha añade una segunda capa de sufrimiento: el dolor más la resistencia al dolor. «Hacer espacio» invierte el movimiento: observar la sensación con curiosidad, respirar alrededor de ella y permitir que esté.',
      'Es uno de los componentes centrales de la Terapia de Aceptación y Compromiso, que en el dolor crónico tiene evidencia metaanalítica de mejora en el funcionamiento, la ansiedad y la depresión, aunque no siempre en la intensidad del dolor. El objetivo no es que la sensación desaparezca, sino que deje de dirigir tu vida.',
    ],
    tips: [
      'Describe la sensación como un científico: forma, tamaño, temperatura, movimiento.',
      'Imagina que respiras hacia ella y a su alrededor.',
      'No es resignación: es dejar de gastar energía en una pelea que no se gana.',
    ],
    obstacles: [{ q: 'Al prestarle atención, el dolor parece mayor.', a: 'Puede pasar al principio. Explora sus bordes en lugar del centro, o alterna con un ancla neutra como las plantas de los pies.' }],
    cautions: 'Un dolor nuevo, intenso o distinto del habitual debe consultarse con un médico antes de trabajarlo con aceptación.',
    steps: [
      { title: 'Localizar', instruction: 'Encuentra la sensación más intensa del cuerpo ahora. ¿Dónde empieza y dónde termina?', durationSec: 60 },
      { title: 'Describir', instruction: '¿Qué forma tiene? ¿Es caliente o fría? ¿Se mueve o está quieta? Obsérvala como algo nuevo.', durationSec: 90 },
      { title: 'Respirar alrededor', instruction: 'Respira hacia la sensación e imagina que a su alrededor se abre espacio.', durationSec: 90, kind: 'breath' },
      { title: 'Permitir', instruction: 'Dite: «no me gusta, y puedo dejar que esté aquí». Suelta la tensión que no hace falta.', durationSec: 90 },
      { title: 'Ampliar', instruction: 'Abre la atención al resto del cuerpo, a los sonidos, a la habitación. La sensación es una parte, no el todo.', durationSec: 60 },
    ],
  },
];
