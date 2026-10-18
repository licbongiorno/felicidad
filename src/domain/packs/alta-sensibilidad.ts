import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Alta sensibilidad» (sensibilidad de procesamiento sensorial):
 *  - qué es el rasgo (Aron y Aron, 1997; Aron, Aron y Jagiellowicz, 2012; Greven y colaboradores, 2019);
 *  - sensibilidad diferencial y ventajosa (Belsky y Pluess, 2009; Pluess y Belsky, 2013; Pluess, 2015);
 *  - sobreestimulación y recuperación (Sonnentag y Fritz, 2007; Kaplan, 1995);
 *  - límites a la estimulación (asertividad: Speed, Goldstein y Goldfried, 2018);
 *  - autocrítica por «ser demasiado» (Neff, 2003; Gilbert, 2009; MacBeth y Gumley, 2012);
 *  - guía para familias de chicos muy sensibles (Aron, 2002; Pluess y colaboradores, 2018).
 *
 * Reglas de seguridad del paquete: la alta sensibilidad es un rasgo del temperamento, no un
 * diagnóstico ni un trastorno. No se ofrece ningún test para «saber si eres PAS». Se distingue de
 * la ansiedad, el autismo y el TDAH sin invitar al autodiagnóstico, y se remite a consulta cuando
 * el malestar es intenso o limita la vida diaria. Se presentan fortalezas sin idealizar el rasgo, y
 * se dice lo que la investigación todavía no sabe.
 */

const ARON_1997: Reference = {
  citation: 'Aron, E. N., & Aron, A. (1997). Sensory-processing sensitivity and its relation to introversion and emotionality. Journal of Personality and Social Psychology, 73(2), 345–368.',
  doi: '10.1037/0022-3514.73.2.345',
};
const ARON_1996: Reference = { citation: 'Aron, E. N. (1996). The highly sensitive person: How to thrive when the world overwhelms you. Broadway Books.' };
const ARON_2002: Reference = { citation: 'Aron, E. N. (2002). The highly sensitive child: Helping our children thrive when the world overwhelms them. Broadway Books.' };
const ARON_2012: Reference = {
  citation: 'Aron, E. N., Aron, A., & Jagiellowicz, J. (2012). Sensory processing sensitivity: A review in the light of the evolution of biological responsivity. Personality and Social Psychology Review, 16(3), 262–282.',
  doi: '10.1177/1088868311434213',
};
const ACEVEDO_2014: Reference = {
  citation:
    'Acevedo, B. P., Aron, E. N., Aron, A., Sangster, M.-D., Collins, N., & Brown, L. L. (2014). The highly sensitive brain: An fMRI study of sensory processing sensitivity and response to others’ emotions. Brain and Behavior, 4(4), 580–594.',
  doi: '10.1002/brb3.242',
};
const GREVEN_2019: Reference = {
  citation:
    'Greven, C. U., Lionetti, F., Booth, C., Aron, E. N., Fox, E., Schendan, H. E., Pluess, M., Bruining, H., Acevedo, B., Bijttebier, P., & Homberg, J. (2019). Sensory processing sensitivity in the context of environmental sensitivity: A critical review and development of research agenda. Neuroscience & Biobehavioral Reviews, 98, 287–305.',
  doi: '10.1016/j.neubiorev.2019.01.009',
};
const LIONETTI_2018: Reference = {
  citation:
    'Lionetti, F., Aron, A., Aron, E. N., Burns, G. L., Jagiellowicz, J., & Pluess, M. (2018). Dandelions, tulips and orchids: Evidence for the existence of low-sensitive, medium-sensitive and high-sensitive individuals. Translational Psychiatry, 8, 24.',
  doi: '10.1038/s41398-017-0090-6',
};
const SMOLEWSKA_2006: Reference = {
  citation:
    'Smolewska, K. A., McCabe, S. B., & Woody, E. Z. (2006). A psychometric evaluation of the Highly Sensitive Person Scale: The components of sensory-processing sensitivity and their relation to the BIS/BAS and «Big Five». Personality and Individual Differences, 40(6), 1269–1279.',
};
const BELSKY_2009: Reference = {
  citation: 'Belsky, J., & Pluess, M. (2009). Beyond diathesis stress: Differential susceptibility to environmental influences. Psychological Bulletin, 135(6), 885–908.',
  doi: '10.1037/a0017376',
};
const PLUESS_BELSKY_2013: Reference = {
  citation: 'Pluess, M., & Belsky, J. (2013). Vantage sensitivity: Individual differences in response to positive experiences. Psychological Bulletin, 139(4), 901–916.',
  doi: '10.1037/a0030196',
};
const PLUESS_2015: Reference = {
  citation: 'Pluess, M. (2015). Individual differences in environmental sensitivity. Child Development Perspectives, 9(3), 138–143.',
  doi: '10.1111/cdep.12120',
};
const PLUESS_BONIWELL_2015: Reference = {
  citation:
    'Pluess, M., & Boniwell, I. (2015). Sensory-processing sensitivity predicts treatment response to a school-based depression prevention program: Evidence of vantage sensitivity. Personality and Individual Differences, 82, 40–45.',
};
const PLUESS_2018: Reference = {
  citation:
    'Pluess, M., Assary, E., Lionetti, F., Lester, K. J., Krapohl, E., Aron, E. N., & Aron, A. (2018). Environmental sensitivity in children: Development of the Highly Sensitive Child Scale and identification of sensitivity groups. Developmental Psychology, 54(1), 51–70.',
  doi: '10.1037/dev0000406',
};
const SLAGT_2018: Reference = {
  citation:
    'Slagt, M., Dubas, J. S., van Aken, M. A. G., Ellis, B. J., & Deković, M. (2018). Sensory processing sensitivity as a marker of differential susceptibility to parenting. Developmental Psychology, 54(3), 543–558.',
};
const SONNENTAG_2007: Reference = {
  citation:
    'Sonnentag, S., & Fritz, C. (2007). The Recovery Experience Questionnaire: Development and validation of a measure for assessing recuperation and unwinding from work. Journal of Occupational Health Psychology, 12(3), 204–221.',
  doi: '10.1037/1076-8998.12.3.204',
};
const KAPLAN_1995: Reference = {
  citation: 'Kaplan, S. (1995). The restorative benefits of nature: Toward an integrative framework. Journal of Environmental Psychology, 15(3), 169–182.',
  doi: '10.1016/0272-4944(95)90001-2',
};
const SPEED_2018: Reference = {
  citation: 'Speed, B. C., Goldstein, B. L., & Goldfried, M. R. (2018). Assertiveness training: A forgotten evidence-based treatment. Clinical Psychology: Science and Practice, 25(1), e12216.',
  doi: '10.1111/cpsp.12216',
};
const NEFF_2003: Reference = {
  citation: 'Neff, K. D. (2003). Self-compassion: An alternative conceptualization of a healthy attitude toward oneself. Self and Identity, 2(2), 85–101.',
  doi: '10.1080/15298860309032',
};
const GILBERT_2009: Reference = { citation: 'Gilbert, P. (2009). The compassionate mind. Constable.' };
const MACBETH_2012: Reference = {
  citation: 'MacBeth, A., & Gumley, A. (2012). Exploring compassion: A meta-analysis of the association between self-compassion and psychopathology. Clinical Psychology Review, 32(6), 545–552.',
  doi: '10.1016/j.cpr.2012.06.003',
};

/** Aviso común: no es un diagnóstico y cuándo consultar. */
const CONSULTA =
  'La alta sensibilidad es un rasgo, no un diagnóstico. Si el malestar es intenso, dura semanas o no te deja trabajar, estudiar o vincularte, consulta con un profesional de salud mental. Si tienes pensamientos de hacerte daño, usa el botón Ayuda de la app o llama al 135 (CABA y GBA), al 0800-345-1435 o al 0800-999-0091.';

export const ALTA_SENSIBILIDAD_PACK: ContentPack = {
  id: 'alta-sensibilidad',

  // ================================================================== prácticas
  practices: [
    {
      id: 'pausa-de-descompresion',
      title: 'Pausa de descompresión',
      family: 'attentional',
      skills: ['attention', 'resilience'],
      summary: 'Tres minutos para bajar la estimulación cuando sientes que todo es demasiado: menos estímulos, exhalación larga y apoyo del cuerpo.',
      mechanism: 'Cortar la entrada de estímulos un momento y alargar la exhalación ayuda al cuerpo a salir del modo de alerta. Es una pausa, no una solución de fondo.',
      evidenceLevel: 'preliminar',
      evidence: [ARON_2012, SONNENTAG_2007, KAPLAN_1995],
      micro: true,
      howItWorks: [
        'Elaine Aron describe la sobreestimulación como un rasgo central de las personas muy sensibles. Procesan lo que les llega con más profundidad, y por eso se saturan antes en lugares con ruido, luz fuerte, gente o apuro (Aron, Aron y Jagiellowicz, 2012).',
        'No hay estudios que prueben una técnica especial para personas muy sensibles. Esta pausa toma ideas generales: bajar la entrada de estímulos, descansar la atención (Kaplan, 1995) y hacer pausas de recuperación durante el día (Sonnentag y Fritz, 2007).',
        'Sirve para el momento. Si te saturas todos los días, también conviene revisar tu rutina y tus entornos.',
      ],
      tips: [
        'Si puedes, ve a un lugar más tranquilo: un baño, un pasillo, la vereda.',
        'Los auriculares sin música o con ruido suave ayudan a cortar el ruido de afuera.',
        'Mirar algo lejano o verde descansa la vista.',
        'Hazla antes de llegar al límite, no sólo cuando ya estás desbordado.',
      ],
      obstacles: [
        { q: 'No puedo irme del lugar.', a: 'Puedes hacer una versión mínima: mirar un punto fijo, apoyar los pies y exhalar largo tres veces. Nadie lo nota.' },
        { q: 'Me da vergüenza necesitar una pausa.', a: 'Todo sistema nervioso necesita descanso. El tuyo lo pide antes. Pausar no es debilidad, es mantenimiento.' },
      ],
      steps: [
        { title: 'Notar', instruction: 'Dite: «Esto es mucho ahora». Nombrar la saturación ya baja un poco la presión.', durationSec: 20, kind: 'instruction' },
        { title: 'Bajar estímulos', instruction: 'Baja lo que puedas. Cierra los ojos o mira un punto fijo. Aleja el celular o ponte los auriculares.', durationSec: 30, kind: 'instruction' },
        { title: 'Exhalar largo', instruction: 'Inhala por la nariz en cuatro tiempos. Exhala despacio por la boca en seis. Repite varias veces.', durationSec: 50, kind: 'breath' },
        { title: 'Apoyo', instruction: 'Siente los pies en el piso y la espalda apoyada. Nota el peso del cuerpo.', durationSec: 40, kind: 'breath' },
        { title: 'Un próximo paso', instruction: 'Elige una sola cosa para los próximos minutos. Puede ser salir un rato, bajar la luz o seguir más despacio.', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'mi-dia-en-estimulos',
      title: 'Mi día en estímulos',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Revisar cuánta estimulación tuvo tu día, dónde te saturaste y dónde puedes poner pausas o cambiar un entorno.',
      mechanism: 'La sobreestimulación se acumula. Ver el día completo permite repartir mejor la carga y planificar pausas antes del desborde, en lugar de reaccionar tarde.',
      evidenceLevel: 'preliminar',
      evidence: [ARON_1996, SONNENTAG_2007, KAPLAN_1995],
      howItWorks: [
        'La estimulación no es sólo ruido. También cuentan las conversaciones, las decisiones, las pantallas, el apuro y las emociones de otros. Para una persona muy sensible, todo eso suma (Aron, 1996).',
        'Los estudios sobre recuperación muestran que desconectarse, relajarse y hacer algo que uno elige ayuda a recuperarse del trabajo (Sonnentag y Fritz, 2007). Los entornos naturales y tranquilos también descansan la atención (Kaplan, 1995).',
        'Esta práctica no busca evitar todo estímulo. Una vida sin desafíos también aburre y aísla. La idea es dosificar.',
      ],
      tips: [
        'Hazla al final del día o a la mañana siguiente.',
        'Usa una escala simple del cero al diez para cada momento.',
        'Busca patrones: ¿qué días o lugares te dejan peor?',
        'Planifica pausas cortas después de los momentos más cargados.',
      ],
      obstacles: [
        { q: 'No tengo control sobre mi agenda.', a: 'Quizás no sobre todo. Busca márgenes chicos: cinco minutos entre reuniones, otro camino a casa, una tarde sin planes.' },
        { q: 'Si evito cosas, me aíslo más.', a: 'Tienes razón en cuidarlo. No se trata de evitar, sino de elegir. Puedes ir y prever una pausa o una hora de salida.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en el día de hoy, desde que te levantaste.', durationSec: 30, kind: 'breath' },
        { title: 'Recorrer', instruction: 'Anota los momentos principales del día: viajes, trabajo, comidas, charlas, pantallas.', durationSec: 75, kind: 'reflection' },
        { title: 'Puntuar', instruction: 'Ponle a cada momento un número del cero al diez según cuánta estimulación tuvo.', durationSec: 60, kind: 'reflection' },
        { title: 'El desborde', instruction: '¿En qué momento te saturaste? ¿Qué señales te dio el cuerpo? Irritación, cansancio, ganas de huir.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que repone', instruction: '¿Qué momentos te devolvieron energía? Silencio, caminar, una charla tranquila, estar en casa.', durationSec: 60, kind: 'reflection' },
        { title: 'Ajustar', instruction: 'Elige un cambio para mañana. Una pausa después del momento más cargado, o un entorno más tranquilo.', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'limites-a-la-estimulacion',
      title: 'Poner límites a la estimulación',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Preparar un pedido concreto para el trabajo o la vida social: menos ruido, una pausa, irte antes o decir que no a un plan.',
      mechanism: 'Pedir lo que necesitas de forma clara y amable reduce la carga sin romper el vínculo. La asertividad se aprende con práctica.',
      evidenceLevel: 'moderada',
      evidence: [SPEED_2018, ARON_1996],
      howItWorks: [
        'Muchas personas muy sensibles aguantan de más para no molestar. Después llegan agotadas o se van de golpe. Aron sugiere planificar los entornos y hablar de lo que uno necesita (Aron, 1996).',
        'El entrenamiento en asertividad tiene buena evidencia para la ansiedad social y para el bienestar en general (Speed, Goldstein y Goldfried, 2018). Se trata de decir lo que necesitas, con respeto por ti y por el otro.',
        'Un buen pedido es concreto, corto y viene con una razón breve. No necesitas justificarte con un diagnóstico.',
      ],
      tips: [
        'Prueba primero con alguien de confianza o con un pedido chico.',
        'Habla de lo que te ayuda, no de lo que el otro hace mal.',
        'Ofrece una alternativa cuando puedas: «Hoy no voy a la cena, ¿nos vemos el domingo a tomar un café?».',
        'En el trabajo, conecta el pedido con tu rendimiento: «Con menos ruido me concentro mejor».',
      ],
      obstacles: [
        { q: 'Van a pensar que soy complicado.', a: 'Puede que alguien no lo entienda. Pero la mayoría prefiere un pedido claro a una persona que se va agotada o enojada.' },
        { q: 'Me dicen que no.', a: 'A veces pasa. Puedes negociar otra opción o buscar un ajuste que dependa de ti, como llegar antes o tomar una pausa.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio y piensa en una situación de trabajo o social que te satura.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que pasa', instruction: 'Describe la situación en una o dos frases. Por ejemplo: «La oficina abierta con música fuerte».', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que necesitas', instruction: '¿Qué te ayudaría de verdad? Un lugar más tranquilo, una pausa, irte a cierta hora, menos planes por semana.', durationSec: 60, kind: 'reflection' },
        { title: 'Tu pedido', instruction: 'Escribe un pedido corto: lo que pasa, lo que necesitas y una razón breve. Sin pedir perdón por existir.', durationSec: 75, kind: 'reflection' },
        { title: 'Ensayar', instruction: 'Léelo en voz alta dos veces. Busca un tono firme y amable.', durationSec: 45, kind: 'instruction' },
        { title: 'Plan B', instruction: 'Si te dicen que no, ¿qué ajuste depende sólo de ti? Anótalo.', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'mi-sensibilidad-como-recurso',
      title: 'Lo que mi sensibilidad aporta y lo que cuesta',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Mirar con equilibrio tu sensibilidad: qué te permite, qué te cuesta y en qué entornos rindes mejor.',
      mechanism: 'Las personas muy sensibles responden más al entorno, para mal y también para bien. Saber qué entornos te sostienen ayuda a aprovechar el rasgo sin idealizarlo.',
      evidenceLevel: 'preliminar',
      evidence: [PLUESS_BELSKY_2013, ACEVEDO_2014, GREVEN_2019],
      howItWorks: [
        'Michael Pluess y Jay Belsky proponen que algunas personas son más sensibles al entorno en las dos direcciones. Sufren más en ambientes duros, y también aprovechan más los ambientes buenos (Belsky y Pluess, 2009; Pluess y Belsky, 2013).',
        'Un estudio con resonancia magnética encontró más actividad en zonas ligadas a la empatía y la conciencia en personas con más sensibilidad, al ver emociones de otros (Acevedo y colaboradores, 2014). Es un estudio chico y no prueba que sean «mejores» en nada.',
        'Las fortalezas que suelen nombrarse son la profundidad, la atención al detalle y la empatía. Pero no son automáticas. Y el rasgo también trae costos reales, como el cansancio o la preocupación.',
      ],
      tips: [
        'Busca ejemplos concretos, no rasgos generales.',
        'Incluye costos y fortalezas con la misma honestidad.',
        'Pregúntale a alguien de confianza qué valora de tu forma de ser.',
      ],
      obstacles: [
        { q: 'No le veo nada bueno.', a: 'Cuando estás saturado, es difícil verlo. Piensa en una vez que notaste algo que otros no vieron, o que alguien se sintió comprendido contigo.' },
        { q: 'Siento que soy mejor que otros por ser sensible.', a: 'Es un rasgo, no un mérito. Otras personas tienen otras fortalezas. Mirarlo así te protege de la soberbia y de la culpa.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Pon una mano en el pecho si te ayuda.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que aporta', instruction: 'Anota dos momentos en que tu sensibilidad te ayudó. Notar un detalle, entender a alguien, disfrutar algo con intensidad.', durationSec: 75, kind: 'reflection' },
        { title: 'Lo que cuesta', instruction: 'Anota dos costos reales. Por ejemplo, cansarte rápido, tardar en decidir o cargar con emociones ajenas.', durationSec: 60, kind: 'reflection' },
        { title: 'Dónde rindes', instruction: '¿En qué entornos rindes mejor? Piensa en el ritmo, el ruido, la gente y el tipo de tarea.', durationSec: 60, kind: 'reflection' },
        { title: 'Usarlo', instruction: 'Elige una situación de esta semana donde puedas usar una fortaleza a propósito.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Dite: «Mi sensibilidad tiene luces y sombras. Puedo cuidarla y usarla».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'cuando-siento-que-soy-demasiado',
      title: 'Cuando siento que soy demasiado',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Responder con amabilidad a la voz que te dice que eres «demasiado sensible», «demasiado intenso» o que exageras.',
      mechanism: 'La autocrítica suma vergüenza al cansancio. La autocompasión se asocia a menos ansiedad y depresión, y permite cuidarte sin pelearte con tu forma de ser.',
      evidenceLevel: 'moderada',
      evidence: [NEFF_2003, GILBERT_2009, MACBETH_2012],
      howItWorks: [
        'Muchas personas muy sensibles escucharon desde chicas frases como «no exageres» o «eres demasiado». Con el tiempo, esa voz se vuelve propia.',
        'Kristin Neff describe la autocompasión con tres partes: amabilidad contigo, recordar que es algo humano y compartido, y mirar lo que sientes sin taparlo ni agrandarlo (Neff, 2003). Más autocompasión se asocia a menos ansiedad y depresión (MacBeth y Gumley, 2012).',
        'Paul Gilbert explica que la autocrítica activa el sistema de amenaza. La compasión activa un sistema que calma (Gilbert, 2009). No se trata de decirte que todo está bien, sino de no sumar maltrato.',
      ],
      tips: [
        'Escribe la frase crítica tal como suena, aunque te dé vergüenza.',
        'Pregúntate de quién es esa voz. A veces es de alguien de tu historia.',
        'Busca una respuesta verdadera, no un elogio forzado.',
      ],
      obstacles: [
        { q: 'Es que de verdad exagero.', a: 'Puede que a veces reacciones más fuerte que otros. Eso no te hace exagerado como persona. Es un sistema que registra más.' },
        { q: 'La voz amable no me sale.', a: 'Es esperable al principio. Piensa qué le dirías a un amigo muy sensible que se trata así. Empieza por ahí.' },
      ],
      cautions: CONSULTA,
      steps: [
        { title: 'Llegar', instruction: 'Pon una mano en el pecho. Respira despacio y siente el calor de la mano.', durationSec: 40, kind: 'breath' },
        { title: 'La voz', instruction: 'Escribe la frase que te dices cuando te sientes demasiado. Tal como suena.', durationSec: 45, kind: 'reflection' },
        { title: 'De dónde viene', instruction: '¿A quién escuchaste decir algo parecido? ¿Cuándo empezó esa voz? Anótalo sin juzgar.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo compartido', instruction: 'Recuerda que muchas personas sienten con intensidad y escuchan lo mismo. Dite: «No me pasa sólo a mí».', durationSec: 40, kind: 'breath' },
        { title: 'Otra voz', instruction: 'Escribe lo que le dirías a un amigo muy sensible que se habla así. Con cariño y con verdad.', durationSec: 75, kind: 'reflection' },
        { title: 'Para ti', instruction: 'Lee esa respuesta despacio, como si fuera para ti. Quédate con una frase.', durationSec: 40, kind: 'breath' },
      ],
    },
  ],

  meta: {
    'pausa-de-descompresion': { level: 'iniciacion', approaches: ['relajacion', 'mindfulness'], module: 'autoconocimiento' },
    'mi-dia-en-estimulos': { level: 'iniciacion', approaches: ['tcc', 'mindfulness'], module: 'autoconocimiento', prerequisites: ['pausa-de-descompresion'] },
    'mi-sensibilidad-como-recurso': { level: 'iniciacion', approaches: ['positiva'], module: 'autoconocimiento' },
    'limites-a-la-estimulacion': { level: 'intermedio', approaches: ['dbt', 'tcc'], module: 'relaciones', prerequisites: ['mi-dia-en-estimulos'] },
    'cuando-siento-que-soy-demasiado': { level: 'intermedio', approaches: ['cft'], module: 'autocompasion', prerequisites: ['pausa-autocompasion'] },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'alta-sensibilidad',
      title: 'Alta sensibilidad: un rasgo, no un diagnóstico',
      subtitle: 'Qué dice la investigación sobre la sensibilidad de procesamiento sensorial, qué fortalezas y costos trae, y qué todavía no se sabe.',
      category: 'Autoconocimiento y patrones',
      readingMin: 9,
      keyPoints: [
        'La alta sensibilidad es un rasgo del temperamento. No es un trastorno ni un diagnóstico.',
        'Implica procesar con más profundidad, saturarse antes, sentir con intensidad y notar detalles.',
        'Las personas muy sensibles responden más al entorno, para mal y también para bien.',
        'Ayuda dosificar la estimulación, hacer pausas y poner límites claros.',
        'La evidencia es moderada: se mide sobre todo con cuestionarios y hay mucho por estudiar.',
      ],
      sections: [
        {
          heading: 'Qué es',
          paragraphs: [
            'Elaine y Arthur Aron propusieron en 1997 el concepto de sensibilidad de procesamiento sensorial. Lo describieron como un rasgo del temperamento: algunas personas procesan lo que viven con más profundidad (Aron y Aron, 1997). En lenguaje común se habla de «personas altamente sensibles».',
            'Aron resume el rasgo en cuatro aspectos. Procesar con profundidad, saturarse con facilidad, sentir las emociones con intensidad y notar detalles sutiles (Aron, Aron y Jagiellowicz, 2012). No todas las personas sensibles los viven igual.',
            'Un estudio encontró que la gente se agrupa en tres niveles de sensibilidad: baja, media y alta (Lionetti y colaboradores, 2018). Es decir, el rasgo va de menos a más. No es algo que se tiene o no se tiene.',
          ],
        },
        {
          heading: 'Sensibles para mal y para bien',
          paragraphs: [
            'Jay Belsky y Michael Pluess propusieron la idea de sensibilidad diferencial. Algunas personas son más sensibles al ambiente en las dos direcciones. En ambientes duros les va peor. En ambientes buenos, les va mejor que al resto (Belsky y Pluess, 2009).',
            'También se habla de sensibilidad ventajosa: responder más a las experiencias positivas (Pluess y Belsky, 2013). En una escuela, un programa de prevención de la depresión funcionó sobre todo en chicas con más sensibilidad (Pluess y Boniwell, 2015). Es un resultado prometedor, pero todavía hay pocos estudios así.',
          ],
        },
        {
          heading: 'Fortalezas, sin idealizar',
          paragraphs: [
            'Se suelen nombrar la profundidad, la atención al detalle, la creatividad y la empatía. Un estudio con imágenes del cerebro encontró más actividad en zonas de empatía al ver emociones ajenas (Acevedo y colaboradores, 2014). Pero fue un estudio pequeño.',
            'Ser sensible no hace a nadie mejor persona. Tampoco garantiza empatía en cada momento: cuando estás saturado, es más difícil estar para otros. Y el rasgo trae costos, como cansarse rápido o preocuparse más.',
          ],
        },
        {
          heading: 'Qué ayuda',
          paragraphs: [
            'No hay tratamientos probados específicos para la alta sensibilidad, porque no es un trastorno. Lo que se recomienda son ideas generales con buena base. Dosificar la estimulación, hacer pausas de recuperación (Sonnentag y Fritz, 2007) y buscar entornos que descansen la atención, como la naturaleza (Kaplan, 1995).',
            'También ayuda pedir lo que necesitas con claridad (Speed, Goldstein y Goldfried, 2018) y tratarte con amabilidad cuando te sientes «demasiado» (Neff, 2003).',
          ],
        },
        {
          heading: 'Lo que no se sabe',
          paragraphs: [
            'Casi todo lo que se sabe viene de cuestionarios que cada persona responde sobre sí. Esos cuestionarios se superponen bastante con la emotividad negativa o neuroticismo, y no está claro cuánto miden algo distinto (Smolewska y colaboradores, 2006; Greven y colaboradores, 2019).',
            'Tampoco se sabe bien qué pasa en el cerebro ni cuánto pesan los genes y la crianza. Los propios investigadores piden más estudios con otras medidas (Greven y colaboradores, 2019). Por eso conviene usar la idea como una lente útil, no como una etiqueta fija.',
          ],
        },
      ],
      caveat: {
        title: 'No es un diagnóstico',
        body: 'La alta sensibilidad no figura en los manuales de diagnóstico y no se «diagnostica». Los cuestionarios en internet no sirven para saber si tienes un trastorno. Si el malestar es intenso, dura semanas o te impide hacer tu vida, consulta con un profesional de salud mental.',
      },
      diagram: {
        title: 'Cómo se acumula la sobreestimulación',
        nodes: ['Muchos estímulos (ruido, gente, apuro)', 'Procesamiento profundo de todo', 'Saturación y cansancio', 'Irritación o ganas de huir', 'Autocrítica («soy demasiado»)'],
        caption: 'Las pausas, los entornos más tranquilos, los límites claros y una voz amable cortan el ciclo.',
      },
      related: {
        practices: ['pausa-de-descompresion', 'mi-dia-en-estimulos', 'limites-a-la-estimulacion', 'mi-sensibilidad-como-recurso', 'cuando-siento-que-soy-demasiado'],
        articles: ['sensibilidad-ansiedad-o-neurodivergencia', 'autocompasion'],
      },
      references: [ARON_1997, ARON_2012, LIONETTI_2018, BELSKY_2009, PLUESS_BELSKY_2013, PLUESS_BONIWELL_2015, ACEVEDO_2014, SMOLEWSKA_2006, GREVEN_2019, SONNENTAG_2007, KAPLAN_1995, SPEED_2018, NEFF_2003],
    },
    {
      id: 'sensibilidad-ansiedad-o-neurodivergencia',
      title: '¿Sensibilidad, ansiedad o algo más?',
      subtitle: 'En qué se parecen y en qué se diferencian la alta sensibilidad, la ansiedad, el autismo y el TDAH, y por qué no conviene autodiagnosticarse.',
      category: 'Autoconocimiento y patrones',
      readingMin: 7,
      keyPoints: [
        'La alta sensibilidad, la ansiedad, el autismo y el TDAH pueden compartir rasgos, pero no son lo mismo.',
        'Un rasgo del temperamento no explica por sí solo un malestar que limita tu vida.',
        'Pueden coexistir: ser una persona muy sensible no descarta otra cosa.',
        'Sólo una evaluación profesional puede orientar un diagnóstico.',
      ],
      sections: [
        {
          heading: 'Por qué se confunden',
          paragraphs: [
            'Saturarse con el ruido, cansarse en reuniones sociales o sentir mucho son experiencias que aparecen en varios cuadros. Por eso es fácil leer un artículo y pensar «esto soy yo». La investigación también reconoce que estos conceptos se superponen en parte (Greven y colaboradores, 2019).',
          ],
        },
        {
          heading: 'Sensibilidad y ansiedad',
          paragraphs: [
            'La alta sensibilidad describe cómo procesas los estímulos. La ansiedad describe miedo o preocupación que se anticipa al peligro. Una persona sensible puede estar tranquila en un entorno amable. En la ansiedad, el miedo sigue aunque el entorno sea seguro.',
            'Las personas muy sensibles pueden tener más riesgo de ansiedad en ambientes duros o con mucho estrés (Aron, Aron y Jagiellowicz, 2012). Pero sensibilidad no es lo mismo que ansiedad. Si la preocupación ocupa gran parte del día, hay ataques de pánico o evitas cada vez más cosas, conviene consultar. La ansiedad tiene tratamientos eficaces.',
          ],
        },
        {
          heading: 'Sensibilidad y neurodivergencia',
          paragraphs: [
            'Muchas personas autistas tienen una sensibilidad sensorial muy marcada. En el autismo también hay diferencias en la comunicación social y en los intereses o rutinas, presentes desde la infancia. En el TDAH lo central es la atención, la impulsividad o la inquietud, también desde chicos.',
            'La alta sensibilidad, en cambio, no implica esas diferencias. Pero una persona puede ser muy sensible y además autista o con TDAH. Para la investigación, la relación entre estos conceptos todavía no está clara (Greven y colaboradores, 2019).',
          ],
        },
        {
          heading: 'Por qué no autodiagnosticarse',
          paragraphs: [
            'Una etiqueta puede aliviar, porque da palabras. Pero una etiqueta equivocada puede hacer que no busques la ayuda que necesitas. O que te expliques todo con ella.',
            'Los cuestionarios de alta sensibilidad se hicieron para investigar, no para diagnosticar. Si te reconoces en varias de estas descripciones y te cuesta la vida diaria, lo útil es una evaluación con un profesional de salud mental. Mientras tanto, cuidar tus niveles de estimulación te sirve sea cual sea la respuesta.',
          ],
        },
      ],
      caveat: {
        title: 'Cuándo consultar',
        body: 'Consulta si el malestar dura semanas, si dejas de hacer cosas importantes, si tienes ataques de pánico o si te cuesta mucho el trabajo, el estudio o los vínculos. Si tienes pensamientos de hacerte daño, usa el botón Ayuda de la app o llama al 135 (CABA y GBA), al 0800-345-1435 o al 0800-999-0091.',
      },
      related: { practices: ['pausa-de-descompresion', 'mi-dia-en-estimulos', 'mapa-sensorial'], articles: ['alta-sensibilidad'] },
      references: [GREVEN_2019, ARON_2012, ARON_1997, SMOLEWSKA_2006],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'sensible-sin-desbordarme',
      title: 'Sensible sin desbordarme',
      subtitle: 'Cuatro semanas para cuidar tu sensibilidad sin pelearte con ella',
      description:
        'Aprenderás a bajar la sobreestimulación en el momento, a repartir mejor la carga del día, a pedir lo que necesitas y a responder con amabilidad cuando te sientes «demasiado». No es un tratamiento ni un diagnóstico. Si el malestar es intenso, consulta.',
      basis: 'Aron y Aron (1997); Pluess y Belsky (2013); Sonnentag y Fritz (2007); Speed, Goldstein y Goldfried (2018); Neff (2003).',
      rhythm: '10 minutos, 4 o 5 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Entender el rasgo',
          focus: 'Qué es y qué no es la alta sensibilidad',
          description: 'Leerás qué dice la investigación y practicarás una pausa breve para cuando todo es demasiado.',
          practiceIds: ['pausa-de-descompresion'],
          articleIds: ['alta-sensibilidad', 'sensibilidad-ansiedad-o-neurodivergencia'],
          journalType: 'necesidades',
        },
        {
          title: 'Semana 2 · Dosificar',
          focus: 'Pausas y entornos',
          description: 'Revisarás cuánta estimulación tienen tus días y probarás un cambio de rutina o de entorno.',
          practiceIds: ['mi-dia-en-estimulos', 'pausa-de-descompresion'],
          articleIds: [],
          journalType: 'experimento',
        },
        {
          title: 'Semana 3 · Pedir',
          focus: 'Límites en el trabajo y en lo social',
          description: 'Prepararás y ensayarás un pedido concreto para bajar la carga sin romper el vínculo.',
          practiceIds: ['limites-a-la-estimulacion'],
          articleIds: [],
          journalType: 'conversacion',
        },
        {
          title: 'Semana 4 · Hacer las paces',
          focus: 'Fortalezas y autocrítica',
          description: 'Mirarás con equilibrio lo que tu sensibilidad aporta y responderás a la voz que te dice que eres demasiado.',
          practiceIds: ['mi-sensibilidad-como-recurso', 'cuando-siento-que-soy-demasiado'],
          articleIds: [],
          journalType: 'carta-compasiva',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-alta-sensibilidad',
      title: 'Sentir más no es un defecto',
      subtitle: 'Qué es la alta sensibilidad, en pocas palabras.',
      slides: [
        { heading: 'Un rasgo', text: 'La alta sensibilidad es un rasgo del temperamento. No es una enfermedad ni un diagnóstico.' },
        { heading: 'Qué implica', text: 'Procesas lo que vives con más profundidad. Notas detalles, sientes con intensidad y te cansas antes.' },
        { heading: 'De menos a más', text: 'No es algo que se tiene o no. Hay personas con poca, media y mucha sensibilidad.' },
        { heading: 'Para mal y para bien', text: 'Las personas muy sensibles sufren más en ambientes duros. Y aprovechan más los ambientes buenos.' },
        { heading: 'Lo que falta saber', text: 'Casi todo se mide con cuestionarios. Todavía no está claro cuánto se distingue de otros rasgos.' },
      ],
      related: { practices: ['mi-sensibilidad-como-recurso'], articles: ['alta-sensibilidad'] },
      references: [ARON_1997, LIONETTI_2018, PLUESS_BELSKY_2013, GREVEN_2019],
    },
    {
      id: 'pildora-sobreestimulacion',
      title: 'Cuando todo es demasiado',
      subtitle: 'Sobreestimulación: qué es y cómo bajarla.',
      slides: [
        { heading: 'No es sólo ruido', text: 'Cuentan la luz, la gente, el apuro, las pantallas y las emociones de otros. Todo suma.' },
        { heading: 'Las señales', text: 'Irritación, cansancio, ganas de huir o de estar a solas. Son avisos de que el vaso se llenó.' },
        { heading: 'En el momento', text: 'Baja lo que puedas. Cierra los ojos o mira un punto fijo. Exhala largo y siente los pies.' },
        { heading: 'Durante el día', text: 'Pon pausas cortas después de los momentos más cargados. No esperes a desbordarte.' },
        { heading: 'Entornos', text: 'Un lugar verde o tranquilo descansa la atención. Busca uno cerca de tu rutina.' },
      ],
      related: { practices: ['pausa-de-descompresion', 'mi-dia-en-estimulos'], articles: ['alta-sensibilidad'] },
      references: [ARON_2012, SONNENTAG_2007, KAPLAN_1995],
    },
    {
      id: 'pildora-no-es-un-diagnostico',
      title: 'Sensible no es lo mismo que ansioso',
      subtitle: 'Sensibilidad, ansiedad y neurodivergencia.',
      slides: [
        { heading: 'Se parecen', text: 'Saturarse con el ruido o cansarse con la gente aparece en varios cuadros. Por eso se confunden.' },
        { heading: 'La ansiedad', text: 'En la ansiedad, el miedo sigue aunque el lugar sea seguro. Una persona sensible puede estar en calma en un lugar amable.' },
        { heading: 'Autismo y TDAH', text: 'Tienen otras diferencias presentes desde la infancia. Y pueden convivir con la alta sensibilidad.' },
        { heading: 'Sin autodiagnóstico', text: 'Los test de internet no diagnostican. Una etiqueta equivocada puede alejarte de la ayuda que necesitas.' },
        { heading: 'Cuándo consultar', text: 'Si el malestar dura semanas o te impide hacer tu vida, consulta con un profesional.' },
      ],
      related: { practices: ['pausa-de-descompresion'], articles: ['sensibilidad-ansiedad-o-neurodivergencia'] },
      references: [GREVEN_2019, ARON_2012],
    },
    {
      id: 'pildora-ser-demasiado',
      title: '«Eres demasiado»',
      subtitle: 'La autocrítica de las personas muy sensibles.',
      slides: [
        { heading: 'Una frase conocida', text: '«No exageres». «Eres demasiado sensible». Muchas personas sensibles lo escucharon desde chicas.' },
        { heading: 'Se vuelve propia', text: 'Con el tiempo, esa voz se instala adentro. Y suma vergüenza al cansancio.' },
        { heading: 'Otra voz', text: 'Háblate como le hablarías a un amigo sensible. Con cariño y con verdad, sin elogios forzados.' },
        { heading: 'Funciona', text: 'Tratarte con amabilidad se asocia a menos ansiedad y menos tristeza. No es darte la razón en todo.' },
        { heading: 'Una frase', text: 'Prueba esta: «Siento mucho. No soy demasiado. Puedo cuidarme».' },
      ],
      related: { practices: ['cuando-siento-que-soy-demasiado'], articles: ['alta-sensibilidad'] },
      references: [NEFF_2003, MACBETH_2012, GILBERT_2009],
    },
  ],

  // ================================================================== guías para familias
  kidGuides: [
    {
      id: 'chicos-muy-sensibles',
      title: 'Si tu hijo o hija es muy sensible',
      subtitle: 'Cómo acompañar a un chico que siente mucho, sin sobreprotegerlo ni pedirle que se endurezca.',
      readingMin: 6,
      keyPoints: [
        'La alta sensibilidad es un rasgo del temperamento, no un problema que haya que corregir.',
        'Los chicos muy sensibles responden más a la crianza: sufren más con el maltrato y aprovechan más el cariño.',
        'Ayuda anticipar, dar pausas y validar lo que sienten, sin evitar todos los desafíos.',
        'Si el miedo, el enojo o el retraimiento limitan su vida, consulta con su pediatra o un profesional.',
      ],
      sections: [
        {
          heading: 'Cómo se ve',
          paragraphs: [
            'Algunos chicos notan cada ruido, cada etiqueta de la ropa o cada cambio de humor en casa. Se toman las cosas muy a pecho, piensan mucho antes de actuar y se cansan en lugares con mucha gente. Elaine Aron los describe como chicos muy sensibles (Aron, 2002).',
            'Existe un cuestionario para estudiar este rasgo en chicos (Pluess y colaboradores, 2018). Se usa en investigación, no para diagnosticar. No hace falta ponerle una etiqueta a tu hijo o hija para acompañarlo bien.',
          ],
        },
        {
          heading: 'Por qué la crianza pesa más',
          paragraphs: [
            'Los estudios sugieren que los chicos más sensibles responden más a cómo se los cría. Con una crianza dura les va peor. Con una crianza cálida y con límites claros, les va mejor que a otros chicos (Slagt y colaboradores, 2018). Es una buena noticia: lo que haces importa.',
          ],
        },
        {
          heading: 'Qué ayuda',
          paragraphs: [
            'Anticipar los cambios y los planes. Dejar tiempo de calma después de la escuela o de un cumpleaños. Bajar el ruido en casa cuando se puede. Validar lo que siente antes de buscar soluciones.',
            'No ayuda decirle «no seas tan sensible» ni evitarle todo lo difícil. Lo que sirve es acompañar desafíos de a poco, con pausas y con tu apoyo. Así aprende que puede con más de lo que cree.',
          ],
        },
        {
          heading: 'Cuándo consultar',
          paragraphs: [
            'Ser sensible no es un trastorno. Pero consulta con su pediatra o un profesional si los miedos o los berrinches son muy intensos, si deja de ir a la escuela o de ver amigos, o si hay diferencias marcadas en la comunicación o en el juego. A veces hay algo más, y cuanto antes se sabe, mejor.',
          ],
        },
      ],
      phrases: [
        '«Veo que esto te molesta mucho. Tiene sentido»',
        '«¿Necesitas un rato tranquilo antes de seguir?»',
        '«Sentir mucho no está mal. Vamos a ver cómo cuidarte»',
        '«Vamos de a poco. Yo estoy contigo»',
      ],
      caveat: {
        title: 'Sin etiquetas',
        body: 'Esta guía no sirve para diagnosticar. Si te preocupa el desarrollo, el ánimo o la conducta de tu hijo o hija, habla con su pediatra. Para orientación sobre niñez y adolescencia también está la Línea 102.',
      },
      activities: ['huele-la-flor', 'tortuga', 'emociones-en-el-cuerpo', 'mano-en-el-corazon'],
      references: [ARON_2002, PLUESS_2018, SLAGT_2018, PLUESS_2015],
    },
  ],

  // ================================================================== glosario
  glossary: [
    {
      id: 'sensibilidad-procesamiento-sensorial',
      term: 'Sensibilidad de procesamiento sensorial',
      definition: 'Rasgo del temperamento descrito por Elaine y Arthur Aron. Implica procesar con más profundidad, saturarse antes y sentir con intensidad. No es un diagnóstico.',
      articleId: 'alta-sensibilidad',
    },
    {
      id: 'sobreestimulacion',
      term: 'Sobreestimulación',
      definition: 'Estado de saturación cuando los estímulos del entorno superan lo que una persona puede procesar con comodidad. Se nota como irritación, cansancio o ganas de aislarse.',
      practiceId: 'pausa-de-descompresion',
    },
    {
      id: 'sensibilidad-diferencial',
      term: 'Sensibilidad diferencial',
      definition: 'Idea de Belsky y Pluess: algunas personas responden más al ambiente en las dos direcciones. Les va peor en ambientes duros y mejor en ambientes buenos.',
      articleId: 'alta-sensibilidad',
    },
    {
      id: 'sensibilidad-ventajosa',
      term: 'Sensibilidad ventajosa',
      definition: 'Tendencia a aprovechar más las experiencias positivas, como el apoyo o una intervención. Es la cara luminosa de la sensibilidad al entorno.',
      practiceId: 'mi-sensibilidad-como-recurso',
    },
    {
      id: 'sensibilidad-ambiental',
      term: 'Sensibilidad ambiental',
      definition: 'Término amplio que usa Michael Pluess para las diferencias en cuánto registra y responde cada persona a su entorno, positivo o negativo.',
      articleId: 'alta-sensibilidad',
    },
  ],
};
