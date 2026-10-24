import type { Antidote, Reference } from './types';

/**
 * Tercera tanda de antídotos: vergüenza, miedo, celos, frustración, vacío e inseguridad.
 * Misma estructura: reconocer → observar → antídoto → integrar.
 */

const LINEHAN_2015: Reference = { citation: 'Linehan, M. M. (2015). DBT skills training manual (2nd ed.). Guilford Press.' };
const LABELING: Reference = {
  citation:
    'Lieberman, M. D., Eisenberger, N. I., Crockett, M. J., et al. (2007). Putting feelings into words: Affect labeling disrupts amygdala activity in response to affective stimuli. Psychological Science, 18(5), 421–428.',
  doi: '10.1111/j.1467-9280.2007.01916.x',
};
const KIRBY_2017: Reference = {
  citation:
    'Kirby, J. N., Tellegen, C. L., & Steindl, S. R. (2017). A meta-analysis of compassion-based interventions: Current state of knowledge and future directions. Behavior Therapy, 48(6), 778–792.',
  doi: '10.1016/j.beth.2017.06.003',
};

export const MORE_ANTIDOTES: Antidote[] = [
  {
    emotionId: 'verguenza',
    emotionLabel: 'Vergüenza',
    markers: 'Calor en la cara, mirada baja, ganas de esconderte o desaparecer, sensación de «algo está mal en mí».',
    antidoteName: 'Mostrarse con compasión',
    incompatibility:
      'La vergüenza dice «soy una mala persona» y empuja a esconderse. Esconderse la mantiene, porque impide comprobar que los demás no rechazan. La compasión hacia uno mismo y la acción opuesta (mostrarse en lugar de ocultarse) desactivan ese círculo.',
    evidenceLevel: 'preliminar',
    evidence: [
      {
        citation:
          'Gilbert, P., & Procter, S. (2006). Compassionate mind training for people with high shame and self-criticism: Overview and pilot study of a group therapy approach. Clinical Psychology & Psychotherapy, 13(6), 353–379.',
        doi: '10.1002/cpp.507',
      },
      {
        citation:
          'Rizvi, S. L., & Linehan, M. M. (2005). The treatment of maladaptive shame in borderline personality disorder: A pilot study of "opposite action". Cognitive and Behavioral Practice, 12(4), 437–447.',
        doi: '10.1016/S1077-7229(05)80071-9',
      },
    ],
    trainingPracticeId: 'accion-opuesta',
    science: [
      'Paul Gilbert desarrolló el entrenamiento de la mente compasiva para personas con mucha vergüenza y autocrítica. En su estudio piloto, la vergüenza y la autocrítica bajaron tras el entrenamiento. La idea es que la vergüenza activa un sistema de amenaza que se calma con calidez, no con argumentos.',
      'En la terapia dialéctico-conductual, la vergüenza que no se ajusta a los hechos se trata con acción opuesta: levantar la cabeza, mirar a los ojos y no ocultar lo que avergüenza ante personas de confianza. Rizvi y Linehan observaron una reducción de la vergüenza con esta habilidad en un estudio piloto.',
    ],
    whenNot:
      'Si la vergüenza viene de un abuso o de un trauma, trabájala con un profesional. No te expongas ante personas que te juzgan o te hacen daño.',
    steps: [
      { title: 'Nombrar', instruction: 'Reconoce: «esto es vergüenza». Nota dónde la sientes en el cuerpo.', durationSec: 45 },
      { title: 'Hecho o juicio', instruction: '¿Qué hiciste o qué pasó, en hechos? Separa eso de la conclusión «algo está mal en mí».', durationSec: 75, kind: 'reflection' },
      { title: 'No te pasa solo a ti', instruction: 'Recuerda que muchas personas sienten esto mismo. La vergüenza es humana, no una prueba de que vales menos.', durationSec: 60 },
      { title: 'Calidez', instruction: 'Pon una mano en el pecho. Háblate como a alguien que quieres y que se siente así: con calma y sin reproches.', durationSec: 90, kind: 'breath' },
      { title: 'Mostrarte', instruction: 'Levanta la cabeza y suelta los hombros. ¿Con qué persona de confianza podrías dejar de esconder esto?', durationSec: 60, kind: 'reflection' },
    ],
  },
  {
    emotionId: 'miedo',
    emotionLabel: 'Miedo',
    markers: 'Corazón rápido, tensión, alerta, ganas de huir o de evitar algo concreto.',
    antidoteName: 'Acercarse con seguridad',
    incompatibility:
      'El miedo protege ante peligros reales, pero cuando el peligro no es real, la evitación lo hace crecer: cada vez que huyes, la mente aprende que había peligro. Comprobar los hechos y acercarse poco a poco enseña al cerebro que la situación es tolerable.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Craske, M. G., Treanor, M., Conway, C. C., Zbozinek, T., & Vervliet, B. (2014). Maximizing exposure therapy: An inhibitory learning approach. Behaviour Research and Therapy, 58, 10–23.',
        doi: '10.1016/j.brat.2014.04.006',
      },
      {
        citation:
          'Carpenter, J. K., Andrews, L. A., Witcraft, S. M., et al. (2018). Cognitive behavioral therapy for anxiety and related disorders: A meta-analysis of randomized placebo-controlled trials. Depression and Anxiety, 35(6), 502–514.',
        doi: '10.1002/da.22728',
      },
    ],
    trainingPracticeId: 'comprobar-hechos',
    science: [
      'La exposición, acercarse de forma gradual a lo que se teme, es el componente con más evidencia del tratamiento de los miedos y la ansiedad. Según el modelo de aprendizaje inhibitorio de Craske y colaboradores, la exposición no borra el miedo: crea un aprendizaje nuevo, «esto es seguro», que compite con el antiguo.',
      'Para que ese aprendizaje ocurra hay que quedarse en la situación sin conductas de seguridad (no mirar, salir pronto, ir siempre con alguien). Por eso el antídoto propone un paso pequeño y concreto, no un gran salto.',
    ],
    whenNot:
      'Si hay un peligro real, protégete y pide ayuda: este antídoto no es para eso. Si el miedo es muy intenso o viene de un trauma, practica la exposición con un profesional.',
    steps: [
      { title: 'Nombrar', instruction: 'Reconoce: «esto es miedo a…». Nombra lo que temes, en concreto.', durationSec: 45 },
      { title: 'Respirar', instruction: 'Exhala más largo de lo que inhalas. Deja que el cuerpo baje un poco el ritmo.', durationSec: 60, kind: 'breath' },
      { title: 'Comprobar los hechos', instruction: '¿Hay un peligro real ahora? ¿Qué probabilidad tiene lo que temes? Si pasara, ¿cómo lo afrontarías?', durationSec: 75, kind: 'reflection' },
      { title: 'Lo que evitas', instruction: '¿Qué estás evitando por miedo? ¿Qué te cuesta esa evitación?', durationSec: 60, kind: 'reflection' },
      { title: 'Un paso pequeño', instruction: 'Elige un paso para acercarte, que te dé un miedo de 3 o 4 sobre 10. Decide cuándo lo harás.', durationSec: 60, kind: 'reflection' },
    ],
  },
  {
    emotionId: 'celos',
    emotionLabel: 'Celos',
    markers: 'Inseguridad, sospecha, nudo en el estómago, ganas de vigilar, preguntar o controlar.',
    antidoteName: 'Comprobar y soltar el control',
    incompatibility:
      'Los celos nacen del miedo a perder una relación. Vigilar y controlar da un alivio breve, pero aumenta la desconfianza y daña el vínculo que se quiere proteger. El antídoto separa los hechos de las suposiciones y cambia el control por una conversación honesta.',
    evidenceLevel: 'preliminar',
    evidence: [LINEHAN_2015, LABELING],
    trainingPracticeId: 'comprobar-hechos',
    science: [
      'En la terapia dialéctico-conductual, los celos se ajustan a los hechos cuando una relación importante corre un riesgo real de perderse por otra persona. Si no hay pruebas, la acción opuesta es dejar de vigilar, de preguntar sin parar y de acusar.',
      'Nombrar la emoción reduce su intensidad (Lieberman et al., 2007). Revisar los hechos antes de actuar evita respuestas que después se lamentan. La evidencia específica sobre los celos es escasa: este antídoto aplica principios generales de la regulación emocional.',
    ],
    whenNot:
      'Si los celos te llevan a controlar, amenazar o hacer daño, pide ayuda a un profesional. Si sientes miedo de tu pareja, busca un lugar seguro y ayuda especializada.',
    steps: [
      { title: 'Nombrar', instruction: 'Reconoce: «esto son celos». Nota el impulso que traen: mirar, preguntar, controlar.', durationSec: 45 },
      { title: 'Pausa', instruction: 'Antes de hacer nada, respira despacio. No tienes que actuar ahora.', durationSec: 60, kind: 'breath' },
      { title: 'Hechos o suposiciones', instruction: '¿Qué viste u oíste de verdad? ¿Qué estás suponiendo? Sepáralo.', durationSec: 75, kind: 'reflection' },
      { title: 'El miedo de fondo', instruction: '¿Qué temes perder? Muchas veces, debajo de los celos hay miedo a no ser suficiente.', durationSec: 60, kind: 'reflection' },
      { title: 'Soltar el control', instruction: 'Elige no vigilar. Si necesitas hablar, piensa cómo decir lo que sientes sin acusar: «Sentí inseguridad cuando…».', durationSec: 60, kind: 'reflection' },
    ],
  },
  {
    emotionId: 'frustracion',
    emotionLabel: 'Frustración o irritabilidad',
    markers: 'Impaciencia, tensión, respuestas bruscas, sensación de que todo molesta o de que algo no avanza.',
    antidoteName: 'Pausa y paciencia activa',
    incompatibility:
      'La frustración aparece cuando algo bloquea lo que quieres. Descargarla (golpear, gritar, quejarse sin parar) no la vacía: la alimenta. Bajar la activación y volver a mirar el obstáculo devuelve la capacidad de elegir el siguiente paso.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation: 'Bushman, B. J. (2002). Does venting anger feed or extinguish the flame? Catharsis, rumination, distraction, anger, and aggressive responding. Personality and Social Psychology Bulletin, 28(6), 724–731.',
        doi: '10.1177/0146167202289002',
      },
      {
        citation: 'Gross, J. J. (1998). The emerging field of emotion regulation: An integrative review. Review of General Psychology, 2(3), 271–299.',
        doi: '10.1037/1089-2680.2.3.271',
      },
    ],
    trainingPracticeId: 'pausa-stop',
    science: [
      'En el experimento de Bushman, las personas que se desahogaron golpeando un saco mientras pensaban en quien las había molestado acabaron más enfadadas y agresivas que las que no hicieron nada. La idea de «sacarlo todo» no funciona.',
      'La irritabilidad también aumenta con el cansancio, el hambre y el estrés acumulado. Por eso el antídoto revisa el estado del cuerpo y después mira el obstáculo con otros ojos, una forma de reevaluación cognitiva.',
    ],
    whenNot:
      'Si la irritabilidad dura semanas o te lleva a hacer daño, consulta a un profesional. A veces es una señal de depresión, de ansiedad o de un problema físico.',
    steps: [
      { title: 'Parar', instruction: 'Detén lo que estás haciendo. Dite: «esto es frustración».', durationSec: 30 },
      { title: 'Bajar la activación', instruction: 'Suelta la mandíbula y los puños. Exhala largo, varias veces.', durationSec: 60, kind: 'breath' },
      { title: 'El cuerpo', instruction: '¿Tienes cansancio, hambre o demasiadas cosas a la vez? Eso también cuenta.', durationSec: 45, kind: 'reflection' },
      { title: 'El obstáculo', instruction: '¿Qué te bloquea, en concreto? ¿Qué parte depende de ti y qué parte no?', durationSec: 75, kind: 'reflection' },
      { title: 'El siguiente paso', instruction: 'Elige un paso pequeño sobre lo que sí depende de ti. Lo demás, déjalo por ahora.', durationSec: 60, kind: 'reflection' },
    ],
  },
  {
    emotionId: 'vacio',
    emotionLabel: 'Vacío o aburrimiento',
    markers: 'Sensación de nada, desconexión, aburrimiento que no se va, falta de sentido o de ganas.',
    antidoteName: 'Contacto y sentido',
    incompatibility:
      'El vacío se alimenta de la inactividad y de la desconexión: cuanto menos haces, menos sientes, y menos ganas tienes de hacer. El antídoto no espera a tener ganas. Busca contacto con los sentidos y una acción pequeña ligada a algo que te importa.',
    evidenceLevel: 'preliminar',
    evidence: [
      {
        citation: 'Cuijpers, P., van Straten, A., & Warmerdam, L. (2007). Behavioral activation treatments of depression: A meta-analysis. Clinical Psychology Review, 27(3), 318–326.',
        doi: '10.1016/j.cpr.2006.11.001',
      },
      LINEHAN_2015,
    ],
    trainingPracticeId: 'activacion-conductual',
    science: [
      'La activación conductual, que propone actuar antes de tener ganas, es eficaz para el desánimo y la depresión (Cuijpers et al., 2007). El vacío crónico se ha estudiado menos, pero comparte ese círculo de inactividad y desconexión.',
      'En la terapia dialéctico-conductual, el vacío se trabaja con la conciencia plena, para volver a sentir el presente, y con actividades ligadas a los propios valores. La evidencia específica sobre el vacío es todavía escasa.',
    ],
    whenNot:
      'Si el vacío es constante o viene con ganas de hacerte daño, pide ayuda a un profesional. Si el riesgo es ahora, usa tu plan de seguridad o llama a emergencias.',
    steps: [
      { title: 'Nombrar', instruction: 'Reconoce: «esto es vacío». No tienes que entenderlo ahora.', durationSec: 30 },
      { title: 'Volver a los sentidos', instruction: 'Nota cinco cosas que ves, cuatro que oyes y tres que tocas. Despacio.', durationSec: 75 },
      { title: 'Algo que importa', instruction: '¿Qué cosa o qué persona te importaba antes, aunque ahora no lo sientas? Piénsalo un momento.', durationSec: 60, kind: 'reflection' },
      { title: 'Una acción pequeña', instruction: 'Elige algo de cinco minutos ligado a eso: escribir a alguien, salir a caminar, ordenar algo. Hazlo sin esperar ganas.', durationSec: 60, kind: 'reflection' },
      { title: 'Notar', instruction: 'Después de hacerlo, nota si algo cambió, aunque sea poco.', durationSec: 30 },
    ],
  },
  {
    emotionId: 'inseguridad',
    emotionLabel: 'Inseguridad o autoestima baja',
    markers: 'Sensación de no ser suficiente, compararte, dudar de ti, necesitar que otros te confirmen.',
    antidoteName: 'Trato amable y logros reales',
    incompatibility:
      'La autoestima baja se apoya en un juicio global («no valgo») que filtra la experiencia y solo deja ver los fallos. La autocompasión ofrece un apoyo que no depende de ser el mejor. Recordar logros concretos corrige el filtro con datos.',
    evidenceLevel: 'moderada',
    evidence: [
      KIRBY_2017,
      {
        citation: 'Neff, K. D. (2003). Self-compassion: An alternative conceptualization of a healthy attitude toward oneself. Self and Identity, 2(2), 85–101.',
        doi: '10.1080/15298860309032',
      },
    ],
    trainingPracticeId: 'pausa-autocompasion',
    science: [
      'Kristin Neff propuso la autocompasión como alternativa a la autoestima: no depende de compararse ni de tener éxito, y por eso es más estable. El metaanálisis de Kirby y colaboradores encontró que las intervenciones de compasión reducen la autocrítica, la ansiedad y la depresión.',
      'La autoestima baja suele ir acompañada de trampas del pensamiento como filtrar lo negativo o descalificar lo positivo. Escribir logros y cualidades concretas ayuda a ver el cuadro completo.',
    ],
    whenNot:
      'Si la inseguridad te impide hacer tu vida o viene con tristeza profunda, consulta a un profesional. Si alguien te desvaloriza a menudo, pide ayuda para protegerte.',
    steps: [
      { title: 'Nombrar', instruction: 'Reconoce: «siento inseguridad». Nota qué te lo disparó.', durationSec: 45 },
      { title: 'El juicio', instruction: '¿Qué te estás diciendo de ti? Escúchalo como un pensamiento, no como un hecho.', durationSec: 60, kind: 'reflection' },
      { title: 'Humanidad compartida', instruction: 'Todas las personas dudan de sí mismas a veces. No eres la excepción.', durationSec: 45 },
      { title: 'Datos reales', instruction: 'Recuerda tres cosas concretas que hiciste bien o cualidades que otros valoran en ti.', durationSec: 90, kind: 'reflection' },
      { title: 'Trato amable', instruction: 'Pon una mano en el pecho y dite: «estoy aprendiendo, y valgo también cuando fallo».', durationSec: 60, kind: 'breath' },
    ],
  },
];
