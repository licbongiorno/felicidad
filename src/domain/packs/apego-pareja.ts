import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Apego adulto y mentalización en pareja»:
 *  - la alarma de apego: qué la enciende (silencio, distancia, reclamo) y qué pide hacer;
 *  - dos dimensiones, ansiedad y evitación (Brennan, Clark y Shaver; Fraley y colaboradores);
 *  - el ciclo perseguir–alejarse (Christensen y Heavey; Sue Johnson), sin culpables;
 *  - mentalizar al otro con hipótesis («quizás…») y notar cuándo la activación apaga la
 *    mentalización (Bateman y Fonagy);
 *  - pedir cercanía sin reclamo y reparar desde el apego;
 *  - el estilo no es destino: seguridad ganada (Roisman y colaboradores; Mikulincer y Shaver).
 *
 * Complementa, sin repetir, los paquetes de mentalización (tres-explicaciones,
 * preguntar-en-vez-de-suponer, cuando-dejo-de-mentalizar), Gottman (reparar-tras-discusion,
 * inicio-suave, ofertas-de-conexion), focalizada en la emoción (emocion-primaria-secundaria)
 * y CNV (cnv-pedido-concreto).
 *
 * Seguridad: si hay violencia, control o miedo, no es un problema de estilos de apego. Se
 * nombran la Línea 144 y el 911. No se ponen etiquetas («eres evitativo»): se describen
 * tendencias que cambian con las relaciones y con la terapia.
 */

const BOWLBY_1969: Reference = { citation: 'Bowlby, J. (1969/1982). Attachment and loss: Vol. 1. Attachment (2.ª ed.). Basic Books.' };
const HAZAN_SHAVER_1987: Reference = {
  citation: 'Hazan, C., & Shaver, P. (1987). Romantic love conceptualized as an attachment process. Journal of Personality and Social Psychology, 52(3), 511–524.',
  doi: '10.1037/0022-3514.52.3.511',
};
const BARTHOLOMEW_1991: Reference = {
  citation: 'Bartholomew, K., & Horowitz, L. M. (1991). Attachment styles among young adults: A test of a four-category model. Journal of Personality and Social Psychology, 61(2), 226–244.',
  doi: '10.1037/0022-3514.61.2.226',
};
const BRENNAN_1998: Reference = {
  citation:
    'Brennan, K. A., Clark, C. L., & Shaver, P. R. (1998). Self-report measurement of adult attachment: An integrative overview. En J. A. Simpson & W. S. Rholes (Eds.), Attachment theory and close relationships (pp. 46–76). Guilford Press.',
};
const FRALEY_2000: Reference = {
  citation: 'Fraley, R. C., Waller, N. G., & Brennan, K. A. (2000). An item response theory analysis of self-report measures of adult attachment. Journal of Personality and Social Psychology, 78(2), 350–365.',
  doi: '10.1037/0022-3514.78.2.350',
};
const FRALEY_2002: Reference = {
  citation: 'Fraley, R. C. (2002). Attachment stability from infancy to adulthood: Meta-analysis and dynamic modeling of developmental mechanisms. Personality and Social Psychology Review, 6(2), 123–151.',
};
const MIKULINCER_2003: Reference = {
  citation:
    'Mikulincer, M., Shaver, P. R., & Pereg, D. (2003). Attachment theory and affect regulation: The dynamics, development, and cognitive consequences of attachment-related strategies. Motivation and Emotion, 27(2), 77–102.',
};
const MIKULINCER_SHAVER_2016: Reference = { citation: 'Mikulincer, M., & Shaver, P. R. (2016). Attachment in adulthood: Structure, dynamics, and change (2.ª ed.). Guilford Press.' };
const ROISMAN_2002: Reference = {
  citation: 'Roisman, G. I., Padrón, E., Sroufe, L. A., & Egeland, B. (2002). Earned-secure attachment status in retrospect and prospect. Child Development, 73(4), 1204–1219.',
};
const CHRISTENSEN_1990: Reference = {
  citation: 'Christensen, A., & Heavey, C. L. (1990). Gender and social structure in the demand/withdraw pattern of marital conflict. Journal of Personality and Social Psychology, 59(1), 73–81.',
};
const JOHNSON_2008: Reference = { citation: 'Johnson, S. M. (2008). Hold me tight: Seven conversations for a lifetime of love. Little, Brown.' };
const BATEMAN_2016: Reference = { citation: 'Bateman, A., & Fonagy, P. (2016). Mentalization-based treatment for personality disorders: A practical guide. Oxford University Press.' };
const ALLEN_2008: Reference = { citation: 'Allen, J. G., Fonagy, P., & Bateman, A. W. (2008). Mentalizing in clinical practice. American Psychiatric Publishing.' };
const OMS_2012_VIOLENCIA: Reference = {
  citation: 'Organización Mundial de la Salud (2012). Comprender y abordar la violencia contra las mujeres: violencia infligida por la pareja. OMS.',
};

/** Aviso común: la violencia no es un problema de estilos de apego. */
const VIOLENCIA =
  'Si en tu pareja hay violencia, control, amenazas o miedo, no es un problema de estilos de apego ni de comunicación. Lo primero es tu seguridad. Puedes llamar a la Línea 144 o usar el botón Ayuda de la app. Si estás en peligro, llama al 911.';

export const APEGO_PAREJA_PACK: ContentPack = {
  id: 'apego-pareja',

  // ================================================================== prácticas
  practices: [
    {
      id: 'mi-alarma-de-apego',
      title: 'Reconocer mi alarma de apego',
      family: 'attentional',
      skills: ['attention', 'compassion'],
      summary: 'Recordar un momento en que te sentiste lejos de alguien querido y notar qué se encendió en ti: en el cuerpo, en la mente y en las ganas de actuar.',
      mechanism: 'Ponerle nombre a la alarma de apego la vuelve algo que te pasa, y no la verdad sobre el vínculo. Eso abre un espacio antes de reaccionar.',
      evidenceLevel: 'preliminar',
      evidence: [BOWLBY_1969, MIKULINCER_SHAVER_2016, MIKULINCER_2003],
      howItWorks: [
        'John Bowlby describió el apego como un sistema que nos acerca a quienes nos cuidan cuando sentimos peligro. En la adultez, la pareja suele ocupar ese lugar. Por eso un silencio o un gesto frío pueden doler tanto.',
        'Mario Mikulincer y Phillip Shaver muestran dos formas de responder cuando la alarma se enciende. Algunas personas buscan más: escriben, insisten, reclaman. Otras se apagan: se alejan, se callan, se ocupan de otra cosa. Las dos son formas de protegerse.',
        'Esta práctica no busca apagar la alarma. Busca que la reconozcas cuando suena, para que no decida todo por ti.',
      ],
      tips: [
        'Elige un momento chico, no la peor pelea de tu vida.',
        'No hace falta que sea con una pareja: puede ser una amistad o alguien de tu familia.',
        'Si notas que la alarma suena igual con distintas personas, también es información valiosa.',
      ],
      obstacles: [
        { q: 'No noto nada, me da igual.', a: 'A veces la alarma se nota como lo contrario: ganas de cortar, cansancio o ponerse a hacer otra cosa. Eso también cuenta.' },
        { q: 'Me da vergüenza lo que sentí.', a: 'Necesitar a otros es humano. La alarma no es un defecto: es una parte tuya que cuida el vínculo.' },
      ],
      cautions: VIOLENCIA,
      steps: [
        { title: 'Llegar', instruction: 'Siéntate con comodidad. Respira despacio dos veces y siente el apoyo del cuerpo.', durationSec: 30, kind: 'breath' },
        { title: 'Una escena', instruction: 'Recuerda un momento chico en que te sentiste lejos de alguien querido. Un mensaje sin respuesta, un gesto frío, un silencio.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que pasó', instruction: 'Describe qué pasó como lo diría una cámara. Sólo los hechos, sin explicar.', durationSec: 45, kind: 'reflection' },
        { title: 'El cuerpo', instruction: '¿Qué notaste en el cuerpo? Un nudo, calor, el pecho apretado, ganas de moverte o de cerrarte.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que pensaste', instruction: '¿Qué pensaste en ese momento? Por ejemplo: «no le importo», «me va a dejar» o «me ahoga».', durationSec: 45, kind: 'reflection' },
        { title: 'Las ganas', instruction: '¿Qué te dieron ganas de hacer? ¿Buscar más, escribir de nuevo, reclamar? ¿O irte, callarte, hacer otra cosa?', durationSec: 45, kind: 'reflection' },
        { title: 'Ponerle nombre', instruction: 'Dite en voz baja: «Se encendió mi alarma». No es un defecto. Es una parte tuya que cuida el vínculo.', durationSec: 40, kind: 'breath' },
      ],
    },
    {
      id: 'pausa-de-apego',
      title: 'Una pausa antes de buscar o de alejarme',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Una pausa de dos minutos para cuando sientes la urgencia de escribir, reclamar o cortar: calmar el cuerpo y elegir un paso pequeño.',
      mechanism: 'Con la alarma muy alta, cuesta pensar en la mente del otro. Bajar primero la activación del cuerpo deja lugar para elegir qué hacer.',
      evidenceLevel: 'preliminar',
      evidence: [MIKULINCER_2003, BATEMAN_2016],
      howItWorks: [
        'Cuando la alarma de apego se enciende fuerte, el cuerpo se prepara para actuar ya. Unas personas sienten urgencia por buscar al otro. Otras, urgencia por irse.',
        'Bateman y Fonagy explican que con mucha activación la mente se cierra y ya no ve con claridad lo que pasa en el otro. Por eso la primera tarea es bajar un poco la activación. Pensar viene después.',
      ],
      tips: [
        'Úsala antes de mandar un mensaje que te sale del enojo o del miedo.',
        'Si tiendes a alejarte, el paso puede ser avisar: «Necesito un rato y vuelvo».',
        'Si tiendes a buscar, el paso puede ser esperar diez minutos antes de escribir.',
      ],
      obstacles: [{ q: 'Si espero, siento que me muero de angustia.', a: 'La angustia sube y baja como una ola. Esperar unos minutos no es abandonar el vínculo. Es darte tiempo para cuidarlo mejor.' }],
      micro: true,
      steps: [
        { title: 'Notar', instruction: 'Nota la señal: ganas urgentes de escribir, reclamar o cortar. Para antes de actuar.', durationSec: 20, kind: 'instruction' },
        { title: 'Los pies', instruction: 'Siente los pies en el piso. Suelta el aire despacio, más largo de lo que entra.', durationSec: 30, kind: 'breath' },
        { title: 'La mano', instruction: 'Pon una mano en el pecho. Dite: «Es mi alarma. Puedo esperar un poco».', durationSec: 30, kind: 'breath' },
        { title: 'Nombrar', instruction: '¿Qué temes ahora? ¿Que te dejen, o que te pidan demasiado? Ponle una palabra.', durationSec: 30, kind: 'reflection' },
        { title: 'Elegir', instruction: 'Elige un paso chico. Esperar diez minutos, escribir un mensaje calmo o avisar que necesitas un rato.', durationSec: 40, kind: 'reflection' },
      ],
    },
    {
      id: 'el-baile-de-los-dos',
      title: 'El baile de los dos',
      family: 'deconstructive',
      skills: ['attention', 'compassion'],
      summary: 'Dibujar el círculo que se repite en sus discusiones, cuando uno busca y el otro se aleja, sin buscar culpables.',
      mechanism: 'Ver el ciclo como un baile en el que los dos se mueven cambia la pregunta de «quién tiene la culpa» a «qué nos atrapa».',
      evidenceLevel: 'preliminar',
      evidence: [CHRISTENSEN_1990, JOHNSON_2008, MIKULINCER_SHAVER_2016],
      howItWorks: [
        'Andrew Christensen y Christopher Heavey estudiaron un patrón muy común en las parejas: uno reclama o insiste, y el otro se cierra o se retira. Cuanto más insiste uno, más se aleja el otro. Y cuanto más se aleja, más insiste el primero.',
        'Sue Johnson, creadora de la terapia de pareja focalizada en las emociones, describe este círculo como un baile. Debajo de cada paso suele haber miedo. Quien busca teme no importar. Quien se aleja teme fallar o ser criticado.',
        'Cuando la pareja ve el baile, puede ponerse del mismo lado. El problema deja de ser la otra persona y pasa a ser el círculo.',
      ],
      tips: [
        'Describe pasos, no rasgos: «me callo», no «soy frío».',
        'Los roles pueden cambiar según el tema. Fíjate en el que más se repite.',
        'Si puedes, háganlo juntos en un momento tranquilo y comparen sus dibujos.',
      ],
      obstacles: [
        { q: 'Pero el problema es el otro.', a: 'Puede que haga cosas que te duelen. Igual, mirar tu paso te da algo que sí depende de ti.' },
        { q: 'Los dos buscamos, o los dos nos alejamos.', a: 'También pasa. Describe igual cómo se mueven y qué siente cada uno debajo.' },
      ],
      cautions: VIOLENCIA,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Ten a mano papel y lápiz.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que se repite', instruction: 'Piensa en una discusión que se repite. No el tema, sino cómo suele ir.', durationSec: 60, kind: 'reflection' },
        { title: 'Mi paso', instruction: 'Cuando se pone tenso, ¿qué haces tú? ¿Buscas, insistes, subes el tono? ¿O te callas, te vas, cambias de tema?', durationSec: 60, kind: 'reflection' },
        { title: 'Su paso', instruction: '¿Qué hace la otra persona? Descríbelo sin juzgar, como un paso de baile.', durationSec: 60, kind: 'reflection' },
        { title: 'El círculo', instruction: 'Une los dos pasos con flechas. Escribe: «Cuanto más yo…, más tú…, y entonces yo más…».', durationSec: 75, kind: 'reflection' },
        { title: 'Debajo', instruction: '¿Qué sientes debajo de tu paso? Quizás miedo a no importar, o a fallar. ¿Y qué podría sentir el otro?', durationSec: 60, kind: 'reflection' },
        { title: 'Un nombre', instruction: 'Ponle un nombre al círculo, como «el remolino». El problema es el baile, no la persona.', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'su-alarma-quizas',
      title: 'Lo que quizás le pasa',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Pensar en la alarma de apego de tu pareja con hipótesis que empiezan con «quizás», en lugar de dar por cierta tu primera lectura.',
      mechanism: 'Pensar en el miedo que mueve al otro, como una hipótesis y no como certeza, baja la defensa propia y abre una pregunta.',
      evidenceLevel: 'preliminar',
      evidence: [BATEMAN_2016, ALLEN_2008, JOHNSON_2008],
      howItWorks: [
        'Mentalizar es entender lo que alguien hace a partir de lo que siente y piensa por dentro. En pareja, lo más difícil es mentalizar justo cuando la alarma de apego está encendida.',
        'Esta práctica aplica la postura de «no saber» de Bateman y Fonagy a la pareja. Buscas qué podría temer el otro cuando insiste o cuando se aleja. Lo dices con «quizás», porque no lo sabes hasta preguntarlo.',
        'Si todavía no hiciste «Tres explicaciones posibles», empieza por esa. Aquí se suma la mirada del apego.',
      ],
      tips: [
        'Si te cuesta, imagina que se lo cuentas a una amiga que no conoce a tu pareja.',
        'Una hipótesis no justifica lo que hizo. Sólo abre otra lectura.',
        'Si sientes certeza total y urgencia, primero haz la pausa de apego.',
      ],
      obstacles: [{ q: 'Siempre le encuentro excusas al otro.', a: 'Mentalizar no es excusar. Puedes pensar qué le pasa y, a la vez, pedir un cambio o poner un límite.' }],
      steps: [
        { title: 'Primero tú', instruction: 'Antes de pensar en el otro, mira cómo estás. Si el corazón late fuerte, respira un rato y vuelve después.', durationSec: 40, kind: 'breath' },
        { title: 'Lo que hizo', instruction: 'Recuerda algo que hizo tu pareja y te dolió. Descríbelo en una frase, sin adjetivos.', durationSec: 45, kind: 'reflection' },
        { title: 'Mi certeza', instruction: 'Escribe lo que estás seguro de que pensaba. Por ejemplo: «no le importo».', durationSec: 45, kind: 'reflection' },
        { title: 'Su alarma', instruction: 'Ahora imagina su alarma. ¿Qué podía temer? ¿Fallarte, sentir presión, quedarse sin ti?', durationSec: 75, kind: 'reflection' },
        { title: 'Con quizás', instruction: 'Escribe dos ideas que empiecen con «quizás». Por ejemplo: «Quizás se calló porque sintió que no hacía nada bien».', durationSec: 60, kind: 'reflection' },
        { title: 'Una pregunta', instruction: 'Elige una para preguntarle en calma: «Me quedé pensando. ¿Puede ser que…?».', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'pedir-cercania-sin-reclamo',
      title: 'Pedir cercanía sin reclamo',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Transformar un reclamo («nunca estás») en un pedido que muestre lo que sientes y lo que necesitas, para que el otro pueda acercarse.',
      mechanism: 'El reclamo suele activar la defensa o la retirada del otro. Mostrar la necesidad de fondo, con un pedido concreto, invita a acercarse.',
      evidenceLevel: 'preliminar',
      evidence: [JOHNSON_2008, MIKULINCER_SHAVER_2016],
      howItWorks: [
        'Detrás de muchos reclamos hay una pregunta de apego: «¿Estás para mí? ¿Te importo?». Pero el reclamo suena a ataque, y el otro se defiende o se aleja.',
        'Sue Johnson propone mostrar la emoción más blanda que hay debajo, como la tristeza o el miedo, y pedir algo concreto. Es más vulnerable, pero da al otro una forma clara de responder.',
        'Para quien tiende a alejarse vale lo mismo, al revés. Puede pedir espacio sin desaparecer: «Necesito media hora y vuelvo a hablar».',
      ],
      tips: [
        'Un pedido es algo que el otro puede hacer hoy o esta semana.',
        'Habla de una situación, no de toda la relación.',
        'Si quieres afinar la forma del pedido, prueba «Hacer un pedido concreto», de comunicación no violenta.',
      ],
      obstacles: [
        { q: 'Si pido, me muestro débil.', a: 'Pedir es un acto de confianza, no de debilidad. Y te deja más claro qué necesitas.' },
        { q: '¿Y si me dice que no?', a: 'Puede pasar. Un no a un pedido no es un no a ti. Piensa antes cómo te vas a cuidar si llega.' },
      ],
      cautions: VIOLENCIA,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en algo que le reclamas seguido a tu pareja.', durationSec: 30, kind: 'breath' },
        { title: 'El reclamo', instruction: 'Escribe el reclamo tal como suele salir. Por ejemplo: «Nunca tienes tiempo para mí».', durationSec: 45, kind: 'reflection' },
        { title: 'Debajo', instruction: '¿Qué sientes debajo del reclamo? Quizás tristeza, soledad o miedo a no importar.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que necesitas', instruction: '¿Qué te ayudaría a sentirte cerca? Piensa en algo concreto y posible.', durationSec: 45, kind: 'reflection' },
        { title: 'El pedido', instruction: 'Arma una frase así: «Me siento… y me ayudaría que…». Habla de ti, no de cómo es el otro.', durationSec: 75, kind: 'reflection' },
        { title: 'Revisar', instruction: '¿Tu frase tiene un «siempre», un «nunca» o una amenaza? Si los tiene, quítalos.', durationSec: 45, kind: 'reflection' },
        { title: 'Si dice que no', instruction: 'El otro puede decir que no ahora. Piensa qué harás para cuidarte si pasa.', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'reparar-desde-el-apego',
      title: 'Reparar desde el apego',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Después de una pelea, volver a hablar juntos nombrando el baile que los atrapó y el miedo que había debajo de cada uno.',
      mechanism: 'Reparar nombrando el ciclo y los miedos de fondo, en lugar de discutir quién tenía razón, devuelve la sensación de estar a salvo con el otro.',
      evidenceLevel: 'preliminar',
      evidence: [JOHNSON_2008, MIKULINCER_SHAVER_2016],
      howItWorks: [
        'La práctica «Reparar después de una discusión» se apoya en el método Gottman. Esta suma la mirada del apego: no sólo qué pasó, sino qué miedo se encendió en cada uno.',
        'Sue Johnson observó que las parejas se recuperan mejor cuando pueden decir, en calma, «tenía miedo de perderte» o «sentí que no hacía nada bien». Esas frases calman la alarma del otro mucho más que tener razón.',
        'Hace falta que los dos estén tranquilos. Si uno sigue muy agitado, conviene esperar.',
      ],
      tips: [
        'Hablen del baile en plural: «nos atrapó», no «me hiciste».',
        'Quien escucha no corrige. Sólo trata de entender y resume.',
        'Acuerden una palabra para pausar la próxima vez, y la promesa de volver.',
      ],
      obstacles: [
        { q: 'Mi pareja no quiere hacer esto.', a: 'Puedes hacer tu parte: nombrar tu paso y tu miedo, sin pedir nada a cambio. A veces eso abre la charla más adelante.' },
        { q: 'Siempre terminamos peleando otra vez.', a: 'Paren y prueben otro día. Si pasa seguido, una terapia de pareja puede ayudar mucho.' },
      ],
      cautions: VIOLENCIA,
      steps: [
        { title: 'Esperar la calma', instruction: 'Hazlo cuando los dos estén en calma, horas o un día después. Si el cuerpo sigue agitado, espera más.', durationSec: 40, kind: 'instruction' },
        { title: 'Nombrar el baile', instruction: 'Empieza por el círculo, no por la culpa: «Creo que nos atrapó otra vez el remolino».', durationSec: 60, kind: 'instruction' },
        { title: 'Mi paso', instruction: 'Cuenta tu parte del baile: «Yo empecé a insistir» o «yo me cerré».', durationSec: 60, kind: 'instruction' },
        { title: 'Mi miedo', instruction: 'Cuenta qué temías debajo. Por ejemplo: «Tenía miedo de no importarte» o «sentí que no hacía nada bien».', durationSec: 90, kind: 'instruction' },
        { title: 'Escuchar', instruction: 'Ahora escucha su parte. Resume lo que entendiste: «Entonces, tú sentiste…». Pregunta si es así.', durationSec: 90, kind: 'instruction' },
        { title: 'La próxima vez', instruction: 'Díganse qué ayudaría la próxima vez. Por ejemplo, una palabra para pausar y la promesa de volver.', durationSec: 75, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Cierren con un gesto que a los dos les quede bien: un abrazo, un mate o una caminata.', durationSec: 30, kind: 'instruction' },
      ],
    },
  ],

  meta: {
    'mi-alarma-de-apego': { level: 'iniciacion', approaches: ['focalizada-emocion', 'mentalizacion'], module: 'pareja' },
    'pausa-de-apego': { level: 'iniciacion', approaches: ['mentalizacion', 'cft'], module: 'pareja' },
    'el-baile-de-los-dos': { level: 'intermedio', approaches: ['focalizada-emocion', 'sistemica'], module: 'pareja', prerequisites: ['mi-alarma-de-apego'] },
    'su-alarma-quizas': { level: 'intermedio', approaches: ['mentalizacion'], module: 'pareja', prerequisites: ['tres-explicaciones', 'mi-alarma-de-apego'] },
    'pedir-cercania-sin-reclamo': { level: 'intermedio', approaches: ['focalizada-emocion', 'interpersonal'], module: 'pareja', prerequisites: ['mi-alarma-de-apego'] },
    'reparar-desde-el-apego': { level: 'avanzado', approaches: ['focalizada-emocion', 'mentalizacion'], module: 'pareja', prerequisites: ['el-baile-de-los-dos', 'reparar-tras-discusion'] },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'apego-adulto',
      title: 'Apego adulto: la alarma, el baile y la seguridad ganada',
      subtitle: 'Qué es el apego en la adultez, qué son la ansiedad y la evitación, por qué las parejas quedan atrapadas en el mismo círculo y por qué el estilo no es destino.',
      category: 'Relaciones',
      readingMin: 9,
      keyPoints: [
        'El apego es un sistema que nos acerca a quienes queremos cuando sentimos peligro. En la adultez, la pareja suele ocupar ese lugar.',
        'Hoy se describe con dos dimensiones: la ansiedad (miedo a no importar o a que te dejen) y la evitación (incomodidad con la cercanía y la dependencia).',
        'Muchas peleas siguen un círculo: uno busca o reclama, el otro se aleja, y cada paso alimenta el del otro.',
        'El estilo de apego no es una etiqueta fija. Cambia con las relaciones, con la reflexión y con la terapia.',
        'Si hay violencia, control o miedo, no es un problema de estilos de apego.',
      ],
      sections: [
        {
          heading: 'De Bowlby a la pareja',
          paragraphs: [
            'El psiquiatra John Bowlby propuso que los bebés nacen con un sistema de apego. Cuando sienten miedo o malestar, buscan a quien los cuida. Si esa persona responde, se calman y vuelven a explorar el mundo.',
            'En 1987, Cindy Hazan y Phillip Shaver propusieron que el amor de pareja también es un vínculo de apego. La pareja se vuelve un refugio cuando las cosas van mal y una base desde donde salir al mundo. Por eso su distancia puede doler tanto.',
          ],
        },
        {
          heading: 'Dos dimensiones: ansiedad y evitación',
          paragraphs: [
            'Kelly Brennan, Catherine Clark y Phillip Shaver revisaron muchos cuestionarios de apego adulto. Encontraron que casi todo se resume en dos dimensiones. Más tarde, Chris Fraley y su equipo mostraron que el apego se describe mejor como grados en esas dimensiones que como cajas separadas.',
            'La ansiedad de apego es cuánto te preocupa no importar, que te dejen o no ser suficiente. Cuando sube, aparecen ganas de buscar, de pedir pruebas, de revisar el celular. La evitación es cuánto te incomoda la cercanía y depender de otros. Cuando sube, aparecen ganas de tomar distancia, de callar lo que sientes o de arreglártelas sin ayuda.',
            'Mikulincer y Shaver llaman a esto estrategias de hiperactivación y de desactivación. Las dos tienen sentido: son formas que aprendimos para protegernos. El problema es cuando se vuelven automáticas y nos alejan de lo que queremos.',
          ],
        },
        {
          heading: 'Cuatro combinaciones, no cuatro etiquetas',
          paragraphs: [
            'Kim Bartholomew y Leonard Horowitz describieron cuatro combinaciones. Con poca ansiedad y poca evitación, la cercanía se vive con bastante calma: se habla más de seguridad. Con mucha ansiedad y poca evitación, la alarma por perder al otro está alta: se habla de un estilo preocupado.',
            'Con poca ansiedad y mucha evitación, la distancia funciona como refugio: se habla de un estilo evitativo o rechazante. Con mucha ansiedad y mucha evitación, se desea la cercanía y a la vez se teme: se habla de un estilo temeroso.',
            'Son puntos de un mapa, no categorías de personas. Casi todos tenemos un poco de cada cosa, y podemos movernos según el vínculo, la etapa y el estrés.',
          ],
        },
        {
          heading: 'El baile de perseguir y alejarse',
          paragraphs: [
            'Andrew Christensen y Christopher Heavey estudiaron un patrón muy común: uno reclama y el otro se retira. Cuanto más reclama uno, más se cierra el otro, y cuanto más se cierra, más reclama el primero.',
            'Sue Johnson lo describe como un baile en el que los dos quedan atrapados. Quien persigue suele tener miedo de no importar. Quien se aleja suele tener miedo de fallar o de ser criticado. Cada uno ve el paso del otro, pero no su miedo.',
            'Ver el círculo ayuda a dejar de buscar un culpable. La pareja puede decir: «nos atrapó el remolino otra vez», y ponerse del mismo lado.',
          ],
        },
        {
          heading: 'No es destino: la seguridad ganada',
          paragraphs: [
            'El apego tiene cierta estabilidad, pero no es fijo. Una revisión de Fraley encontró que el apego de la infancia se parece sólo en parte al de la adultez. Las experiencias de la vida lo van moviendo.',
            'Se habla de «seguridad ganada» cuando alguien tuvo vínculos difíciles en la infancia, pero hoy se vincula con bastante seguridad. Glenn Roisman y su equipo estudiaron a personas así. Suelen haber pensado mucho su historia y haber tenido alguna relación que les dio confianza: una pareja, una amistad, un terapeuta.',
            'Lo que ayuda es parecido a lo que proponen las prácticas de este paquete. Notar la alarma, calmarte antes de actuar, pensar la mente del otro y pedir lo que necesitas de forma clara. Y, cuando hace falta, una terapia individual o de pareja.',
          ],
        },
        {
          heading: 'Cuándo consultar',
          paragraphs: [
            'Conviene consultar si las peleas se repiten siempre igual, si el miedo a ser dejado ocupa gran parte de tu día, o si te alejas tanto que sientes soledad aunque haya compañía. La terapia de pareja focalizada en las emociones y el método Gottman tienen buen respaldo.',
            'La terapia de pareja no está indicada si hay violencia. En ese caso lo primero es la seguridad. Puedes llamar a la Línea 144 o, si estás en peligro, al 911.',
          ],
        },
      ],
      caveat: {
        title: 'Si hay violencia, no es un estilo de apego',
        body: 'Los celos que controlan, las amenazas, los golpes, revisar el celular del otro o limitar su dinero no son «ansiedad de apego». Tampoco es «evitación» castigar con el silencio para dar miedo. Son formas de violencia, y la responsabilidad es de quien las ejerce. Si te pasa, llama a la Línea 144 o usa el botón Ayuda. Si estás en peligro, al 911. Los cuestionarios de apego de las revistas o de las redes tampoco sirven para etiquetar a nadie.',
      },
      diagram: {
        title: 'El baile de perseguir y alejarse',
        nodes: ['Algo enciende la alarma de uno (un silencio, una distancia)', 'Busca, insiste o reclama', 'El otro se siente presionado o criticado', 'Se cierra o se aleja', 'Más miedo a no importar'],
        caption: 'Cada paso tiene sentido desde adentro y alimenta el del otro. Nombrar el círculo y el miedo de cada uno ayuda a salir de él.',
      },
      related: {
        practices: ['mi-alarma-de-apego', 'pausa-de-apego', 'el-baile-de-los-dos', 'pedir-cercania-sin-reclamo', 'reparar-desde-el-apego', 'emocion-primaria-secundaria'],
        articles: ['mentalizar-en-pareja', 'pareja-gottman', 'terapia-focalizada-emocion'],
      },
      references: [BOWLBY_1969, HAZAN_SHAVER_1987, BRENNAN_1998, FRALEY_2000, BARTHOLOMEW_1991, MIKULINCER_2003, MIKULINCER_SHAVER_2016, CHRISTENSEN_1990, JOHNSON_2008, FRALEY_2002, ROISMAN_2002, OMS_2012_VIOLENCIA],
    },
    {
      id: 'mentalizar-en-pareja',
      title: 'Mentalizar en pareja',
      subtitle: 'Leer tu mente y la del otro con curiosidad, por qué se pierde justo cuando más importa y cómo recuperarla.',
      category: 'Relaciones',
      readingMin: 7,
      keyPoints: [
        'Mentalizar es entender lo que alguien hace a partir de lo que siente, piensa y quiere por dentro. Incluye la propia mente.',
        'En pareja ayuda la curiosidad: tratar lo que creemos del otro como una hipótesis, no como un hecho.',
        'Cuando la alarma de apego sube mucho, la capacidad de mentalizar baja. Es esperable y le pasa a todo el mundo.',
        'Primero se baja la activación, después se vuelve a pensar en la mente propia y en la del otro.',
      ],
      sections: [
        {
          heading: 'Qué es mentalizar',
          paragraphs: [
            'Peter Fonagy, Anthony Bateman y Jon Allen llaman mentalizar a la capacidad de ver la mente detrás de la conducta. Es preguntarse qué siente, qué piensa y qué quiere alguien, incluido uno mismo.',
            'En la biblioteca hay una introducción general en «Mentalizar: entender mentes». Aquí nos enfocamos en la pareja, donde mentalizar es a la vez más importante y más difícil.',
          ],
        },
        {
          heading: 'Leer tu propia mente',
          paragraphs: [
            'Antes de entender al otro, ayuda saber qué te pasa a ti. ¿Qué se encendió? ¿Miedo a no importar? ¿Ganas de irte? Ponerle nombre a tu estado lo vuelve algo que te pasa, y no la verdad sobre la relación.',
            'Es distinto decir «me siento dejado» que «me dejó». Lo primero es un estado de tu mente. Lo segundo es una conclusión que quizás no es cierta.',
          ],
        },
        {
          heading: 'Leer la mente del otro con curiosidad',
          paragraphs: [
            'Bateman y Fonagy proponen una postura de «no saber». No sabemos lo que pasa en la mente del otro hasta que lo preguntamos. Podemos tener hipótesis, y conviene decirlas con un «quizás».',
            'En pareja, una buena pregunta es qué alarma podría tener el otro. Quien se aleja quizás teme fallar. Quien reclama quizás teme no importar. Pensarlo no justifica nada. Sólo abre una lectura más amplia y una pregunta posible.',
          ],
        },
        {
          heading: 'Cuándo se pierde',
          paragraphs: [
            'Bateman y Fonagy explican que la mentalización baja cuando la activación emocional sube mucho, sobre todo en vínculos de apego. Por eso es tan difícil pensar con claridad en medio de una pelea con la persona que más quieres.',
            'Una señal de que la perdiste es la certeza total: «sé lo que piensa», «lo hizo a propósito». Otra es necesitar pruebas concretas para creer en el afecto: «si me quisiera, me contestaría ya». La práctica «Cuando dejo de mentalizar» ayuda a reconocer estas señales.',
          ],
        },
        {
          heading: 'Cómo recuperarla',
          paragraphs: [
            'El orden importa. Primero baja la activación: para, respira, toma distancia un rato si hace falta. Después vuelve a tu mente: qué sentiste y qué temiste. Recién entonces piensa en la mente del otro, con hipótesis.',
            'Después de una pelea, se puede rebobinar juntos: volver al momento en que la charla se torció y preguntarse qué pasó por dentro de cada uno. Eso ya es mentalizar, aunque sea tarde.',
          ],
        },
      ],
      caveat: {
        title: 'Qué es y qué no',
        body: 'La evidencia del tratamiento basado en la mentalización viene de terapias completas con profesionales. Las prácticas de esta app son ejercicios de autoayuda, no un tratamiento. Mentalizar tampoco es justificar: puedes entender qué le pasa al otro y, a la vez, poner un límite. Si hay violencia, control o miedo, lo primero es tu seguridad: Línea 144 o, si estás en peligro, 911.',
      },
      related: {
        practices: ['su-alarma-quizas', 'pausa-de-apego', 'tres-explicaciones', 'cuando-dejo-de-mentalizar', 'preguntar-en-vez-de-suponer', 'pausar-y-rebobinar'],
        articles: ['apego-adulto', 'mentalizar-en-la-vida-diaria', 'modos-no-mentalizantes'],
      },
      references: [BATEMAN_2016, ALLEN_2008, MIKULINCER_SHAVER_2016, JOHNSON_2008],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'apego-mas-seguro',
      title: 'Hacia un vínculo más seguro',
      subtitle: 'Cuatro semanas para entender tu forma de vincularte y salir del círculo de perseguir y alejarse',
      description:
        'Reconocerás tu alarma de apego, aprenderás a calmarte antes de buscar o de alejarte, dibujarás el baile que se repite en tu pareja, practicarás mentalizar con hipótesis y pedirás cercanía sin reclamo. Si en tu pareja hay violencia, control o miedo, este programa no es para ese momento: busca ayuda en la Línea 144.',
      basis: 'Mikulincer y Shaver (2016); Johnson (2008); Bateman y Fonagy (2016); Christensen y Heavey (1990).',
      rhythm: '10 minutos, 4 o 5 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Mi alarma',
          focus: 'Qué me activa y cómo me calmo',
          description: 'Leerás sobre el apego adulto, reconocerás qué enciende tu alarma y practicarás una pausa antes de buscar o de alejarte.',
          practiceIds: ['mi-alarma-de-apego', 'pausa-de-apego'],
          articleIds: ['apego-adulto'],
          journalType: 'patron-repetido',
        },
        {
          title: 'Semana 2 · El baile',
          focus: 'El círculo de los dos, sin culpables',
          description: 'Dibujarás el ciclo que se repite en sus discusiones y buscarás la emoción que hay debajo de cada paso.',
          practiceIds: ['el-baile-de-los-dos', 'emocion-primaria-secundaria'],
          articleIds: [],
          journalType: 'necesidades',
        },
        {
          title: 'Semana 3 · Dos mentes',
          focus: 'Hipótesis en lugar de certezas',
          description: 'Practicarás pensar la mente del otro con «quizás» y reconocer cuándo la activación te deja sin mentalizar.',
          practiceIds: ['tres-explicaciones', 'su-alarma-quizas', 'cuando-dejo-de-mentalizar'],
          articleIds: ['mentalizar-en-pareja'],
          journalType: 'reestructuracion',
        },
        {
          title: 'Semana 4 · Acercarse',
          focus: 'Pedir y reparar',
          description: 'Convertirás un reclamo en un pedido y, si los dos quieren, repararán una pelea nombrando el baile y el miedo de cada uno.',
          practiceIds: ['pedir-cercania-sin-reclamo', 'reparar-desde-el-apego'],
          articleIds: [],
          journalType: 'conversacion',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-ansiedad-y-evitacion',
      title: 'Dos formas de cuidar el vínculo',
      subtitle: 'Ansiedad y evitación: qué son y por qué no son etiquetas.',
      slides: [
        { heading: 'La alarma', text: 'Cuando sientes lejos a alguien que quieres, se enciende una alarma. Es el apego. Todos lo tenemos.' },
        { heading: 'Buscar', text: 'Con la alarma alta, unas personas buscan más. Escriben, insisten, piden pruebas. Es la ansiedad de apego.' },
        { heading: 'Alejarse', text: 'Otras se apagan. Se callan, se alejan o hacen otra cosa. Es la evitación. También es una forma de protegerse.' },
        { heading: 'Grados, no cajas', text: 'Cada persona tiene un poco de las dos. Y cambia según el vínculo, la etapa y el estrés.' },
        { heading: 'Lo que ayuda', text: 'Notar la alarma antes de actuar. Calmar el cuerpo. Y recién después decidir qué hacer.' },
      ],
      related: { practices: ['mi-alarma-de-apego', 'pausa-de-apego'], articles: ['apego-adulto'] },
      references: [BRENNAN_1998, FRALEY_2000, MIKULINCER_SHAVER_2016],
    },
    {
      id: 'pildora-perseguir-y-alejarse',
      title: 'El baile que se repite',
      subtitle: 'Cuando uno busca y el otro se aleja.',
      slides: [
        { heading: 'Un círculo', text: 'Uno reclama y el otro se cierra. Cuanto más reclama uno, más se aleja el otro. Y vuelta a empezar.' },
        { heading: 'Debajo hay miedo', text: 'Quien busca suele temer no importar. Quien se aleja suele temer fallar o ser criticado.' },
        { heading: 'Ver sólo el paso', text: 'Cada uno ve el paso del otro, pero no su miedo. Por eso parece un ataque o un desprecio.' },
        { heading: 'Ponerle nombre', text: 'Llamen al círculo de alguna forma, como «el remolino». El problema es el baile, no la persona.' },
        { heading: 'Si hay miedo de verdad', text: 'Si hay violencia, control o amenazas, no es un baile. Llama a la Línea 144 o, si estás en peligro, al 911.' },
      ],
      related: { practices: ['el-baile-de-los-dos', 'reparar-desde-el-apego'], articles: ['apego-adulto'] },
      references: [CHRISTENSEN_1990, JOHNSON_2008],
    },
    {
      id: 'pildora-seguridad-ganada',
      title: 'El apego no es destino',
      subtitle: 'Se puede llegar a vincularse con más seguridad.',
      slides: [
        { heading: 'No es fijo', text: 'Lo que viviste en la infancia deja huella. Pero el apego se sigue moviendo durante toda la vida.' },
        { heading: 'Seguridad ganada', text: 'Hay personas que tuvieron vínculos difíciles y hoy se vinculan con calma. Se habla de seguridad ganada.' },
        { heading: 'Qué ayudó', text: 'Suelen haber pensado su historia. Y haber tenido alguien que les dio confianza: una pareja, una amistad, un terapeuta.' },
        { heading: 'Paso a paso', text: 'Notar la alarma, calmarte, pensar qué siente el otro y pedir claro. Cada vez que lo haces, sumas.' },
        { heading: 'Con ayuda', text: 'Si te cuesta mucho, una terapia individual o de pareja puede ayudar. No tienes que hacerlo a solas.' },
      ],
      related: { practices: ['mi-alarma-de-apego', 'pedir-cercania-sin-reclamo'], articles: ['apego-adulto'] },
      references: [ROISMAN_2002, FRALEY_2002, MIKULINCER_SHAVER_2016],
    },
    {
      id: 'pildora-quizas-en-pareja',
      title: 'Quizás, en lugar de seguro',
      subtitle: 'Mentalizar en pareja cuando la alarma está alta.',
      slides: [
        { heading: 'Leer mentes', text: 'Mentalizar es pensar qué siente y qué quiere alguien. Incluso tú.' },
        { heading: 'Se apaga', text: 'Con mucha emoción, esa capacidad baja. Le pasa a todo el mundo, sobre todo con quien más quieres.' },
        { heading: 'La señal', text: 'Una señal es la certeza total: «sé lo que piensa», «lo hizo a propósito».' },
        { heading: 'Primero calma', text: 'Primero baja la activación. Respira, toma un rato. Después vuelve a pensar.' },
        { heading: 'Con quizás', text: 'Prueba frases con «quizás»: «quizás se calló porque se sintió criticado». Y después pregúntale.' },
      ],
      related: { practices: ['su-alarma-quizas', 'tres-explicaciones'], articles: ['mentalizar-en-pareja'] },
      references: [BATEMAN_2016, ALLEN_2008],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'ansiedad-de-apego', term: 'Ansiedad de apego', definition: 'Cuánto preocupa no importar o que te deje alguien querido. Cuando sube, aparecen ganas de buscar, insistir o pedir pruebas.', articleId: 'apego-adulto' },
    { id: 'evitacion-del-apego', term: 'Evitación del apego', definition: 'Cuánto incomodan la cercanía y depender de otros. Cuando sube, aparecen ganas de tomar distancia o de callar lo que se siente.', articleId: 'apego-adulto' },
    { id: 'seguridad-ganada', term: 'Seguridad ganada', definition: 'Vincularse con bastante seguridad en la adultez después de una infancia con vínculos difíciles. Muestra que el apego puede cambiar.', articleId: 'apego-adulto' },
    { id: 'ciclo-perseguir-retirarse', term: 'Ciclo de perseguir y alejarse', definition: 'Círculo en que una persona busca o reclama y la otra se cierra o se aleja, y cada paso alimenta el del otro.', practiceId: 'el-baile-de-los-dos' },
    { id: 'base-segura', term: 'Base segura', definition: 'Persona con la que uno se siente a salvo y desde la que se anima a salir al mundo. En la adultez, la pareja suele cumplir ese papel.', articleId: 'apego-adulto' },
  ],
};
