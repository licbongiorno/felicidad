import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Pensamientos intrusivos y TOC»: psicoeducación y prácticas autoguiadas de BAJO nivel.
 *  - los pensamientos intrusivos son universales (Rachman y de Silva);
 *  - el problema es la interpretación del intrusivo (Salkovskis) y la fusión pensamiento-acción
 *    (Shafran, Thordarson y Rachman);
 *  - rituales, comprobaciones, pedir tranquilización y evitación mantienen el ciclo; no hace
 *    falta «neutralizar»;
 *  - defusión al estilo ACT (Twohig y colaboradores);
 *  - acomodación familiar: no participar en los rituales, con cariño (Lebowitz, Panza y Bloch).
 *
 * Reglas de seguridad del paquete: la exposición con prevención de respuesta completa (Foa y
 * colaboradores) se describe y se recomienda con un profesional, pero no se automatiza. Las
 * prácticas se quedan en pasos chicos: notar y nombrar, posponer un ritual pocos minutos,
 * reducir de a poco el pedido de tranquilización y una guía para familiares. Los intrusivos de
 * daño o sexuales se nombran sin describirlos y se aclara que no indican peligro ni deseo. Si el
 * TOC ocupa más de una hora por día o paraliza, se recomienda consultar. No se nombran
 * medicamentos.
 */

// ------------------------------------------------------------ referencias
const RACHMAN_1978: Reference = {
  citation: 'Rachman, S., & de Silva, P. (1978). Abnormal and normal obsessions. Behaviour Research and Therapy, 16(4), 233–248.',
  doi: '10.1016/0005-7967(78)90022-0',
};
const SALKOVSKIS_1985: Reference = {
  citation: 'Salkovskis, P. M. (1985). Obsessional-compulsive problems: A cognitive-behavioural analysis. Behaviour Research and Therapy, 23(5), 571–583.',
  doi: '10.1016/0005-7967(85)90105-6',
};
const SHAFRAN_1996: Reference = {
  citation: 'Shafran, R., Thordarson, D. S., & Rachman, S. (1996). Thought-action fusion in obsessive compulsive disorder. Journal of Anxiety Disorders, 10(5), 379–391.',
  doi: '10.1016/0887-6185(96)00018-7',
};
const FOA_2005: Reference = {
  citation:
    'Foa, E. B., Liebowitz, M. R., Kozak, M. J., Davies, S., Campeas, R., Franklin, M. E., Huppert, J. D., Kjernisted, K., Rowan, V., Schmidt, A. B., Simpson, H. B., & Tu, X. (2005). Randomized, placebo-controlled trial of exposure and ritual prevention, clomipramine, and their combination in the treatment of obsessive-compulsive disorder. American Journal of Psychiatry, 162(1), 151–161.',
  doi: '10.1176/appi.ajp.162.1.151',
};
const TWOHIG_2010: Reference = {
  citation:
    'Twohig, M. P., Hayes, S. C., Plumb, J. C., Pruitt, L. D., Collins, A. B., Hazlett-Stevens, H., & Woidneck, M. R. (2010). A randomized clinical trial of acceptance and commitment therapy versus progressive relaxation training for obsessive-compulsive disorder. Journal of Consulting and Clinical Psychology, 78(5), 705–716.',
  doi: '10.1037/a0020508',
};
const LEBOWITZ_2016: Reference = {
  citation:
    'Lebowitz, E. R., Panza, K. E., & Bloch, M. H. (2016). Family accommodation in obsessive-compulsive and anxiety disorders: A five-year update. Expert Review of Neurotherapeutics, 16(1), 45–53.',
};

/** Aviso común: cuándo el TOC se trabaja con un profesional. */
const TOC_PROFESIONAL =
  'Si los pensamientos y rituales te ocupan más de una hora por día, te paralizan o te impiden trabajar, estudiar o estar con otros, consulta a un profesional. El tratamiento con más evidencia, la exposición con prevención de respuesta, se hace con un terapeuta. Si sientes que no puedes más, llama a la Línea Nacional de Salud Mental, 0800-999-0091, o al 135.';

export const TOC_INTRUSIVOS_PACK: ContentPack = {
  id: 'toc-intrusivos',

  // ================================================================== prácticas
  practices: [
    {
      id: 'notar-y-nombrar-el-intrusivo',
      title: 'Notar y nombrar el pensamiento intrusivo',
      family: 'deconstructive',
      skills: ['attention', 'resilience'],
      summary: 'Cuando aparece un pensamiento que te asusta o te molesta, ponerle nombre, dejarlo estar sin discutirlo ni taparlo y volver a lo que hacías.',
      mechanism:
        'Nombrar el intrusivo como un evento mental le quita fuerza sin pelear con él. Al no neutralizarlo, la mente aprende que puede pasar solo.',
      evidenceLevel: 'moderada',
      evidence: [TWOHIG_2010, RACHMAN_1978, SALKOVSKIS_1985],
      howItWorks: [
        'Casi todas las personas tienen pensamientos intrusivos: ideas, imágenes o impulsos que aparecen sin querer y chocan con lo que valoran. Stanley Rachman y Padmal de Silva encontraron que la mayoría de las personas sin TOC también los tiene (Rachman y de Silva, 1978).',
        'Hay intrusivos de daño, de contenido sexual, de contaminación o de duda. Tenerlos no indica peligro ni deseo. Muchas veces aparecen justo porque eso te importa y te asusta.',
        'Pelear con el pensamiento, taparlo o hacer algo para «anularlo» le da más importancia. La terapia de aceptación y compromiso propone otra cosa: notarlo, nombrarlo y seguir con lo que valoras. En un ensayo, ayudó a personas con TOC más que la relajación (Twohig y colaboradores, 2010).',
      ],
      tips: [
        'Usa siempre la misma frase: «Ahí está el pensamiento intrusivo».',
        'No hace falta que el malestar baje para volver a tu tarea.',
        'No busques entender el contenido. El nombre alcanza.',
        'Si te cuesta, practica primero con pensamientos poco molestos.',
      ],
      obstacles: [
        { q: '¿Y si el pensamiento dice algo de mí?', a: 'Es la duda que el TOC genera. Un intrusivo es ruido de la mente, no un mensaje. Que te moleste tanto muestra que va en contra de lo que valoras.' },
        { q: 'Sigue apareciendo.', a: 'Es esperable. El objetivo no es que deje de aparecer, sino cambiar cómo respondes. Con la práctica suele perder fuerza.' },
      ],
      cautions: TOC_PROFESIONAL,
      steps: [
        { title: 'Notar', instruction: 'Cuando aparezca un pensamiento que te asusta o te molesta, detente un momento.', durationSec: 15, kind: 'instruction' },
        { title: 'Nombrar', instruction: 'Dite en voz baja: «Ahí está el pensamiento intrusivo». No repitas el contenido.', durationSec: 20, kind: 'instruction' },
        { title: 'Recordar', instruction: 'Recuerda que casi todo el mundo tiene pensamientos así. Un pensamiento no es un hecho ni un deseo.', durationSec: 25, kind: 'instruction' },
        { title: 'Dejarlo estar', instruction: 'No lo discutas ni lo tapes con otra idea. Déjalo estar, como una radio de fondo.', durationSec: 40, kind: 'instruction' },
        { title: 'Respirar', instruction: 'Respira lento. Nota el malestar en el cuerpo, sin hacer nada para sacarlo.', durationSec: 40, kind: 'breath' },
        { title: 'Volver', instruction: 'Vuelve a lo que estabas haciendo, aunque el pensamiento siga ahí.', durationSec: 20, kind: 'instruction' },
      ],
    },
    {
      id: 'mi-ciclo-obsesivo',
      title: 'Mi ciclo de pensamiento y ritual',
      family: 'deconstructive',
      skills: ['attention', 'resilience'],
      summary: 'Dibujar el ciclo con un ejemplo propio: el intrusivo, lo que crees que significa, la ansiedad, lo que haces para calmarla y el alivio que dura poco.',
      mechanism:
        'Ver el ciclo completo muestra que el problema no es el pensamiento sino la interpretación y los rituales. Eso indica dónde se puede cortar.',
      evidenceLevel: 'moderada',
      evidence: [SALKOVSKIS_1985, SHAFRAN_1996, RACHMAN_1978],
      howItWorks: [
        'Paul Salkovskis propuso que el problema no es el pensamiento intrusivo, sino cómo se interpreta. Si crees que tenerlo te hace responsable de evitar un daño, aparece mucha ansiedad y la necesidad de hacer algo (Salkovskis, 1985).',
        'Roz Shafran y su equipo describieron la fusión pensamiento-acción. Es la idea de que pensar algo lo hace más probable, o que pensarlo es casi tan malo como hacerlo (Shafran y colaboradores, 1996).',
        'Para calmar la ansiedad aparecen los rituales: lavar, comprobar, ordenar, repetir, contar, rezar de cierta forma, pedir que te tranquilicen o evitar. Alivian un rato, pero le enseñan a la mente que el pensamiento era peligroso. Así vuelve más seguido.',
      ],
      tips: [
        'Elige un ejemplo concreto y reciente.',
        'Describe el intrusivo con pocas palabras, sin detalles.',
        'Cuenta también los rituales mentales, como repetir una frase o revisar recuerdos.',
        'Anota cuánto dura el alivio después del ritual.',
      ],
      obstacles: [
        { q: 'Me da miedo escribir el pensamiento.', a: 'No hace falta escribirlo. Pon sólo una etiqueta, como «pensamiento de daño» o «duda de la puerta».' },
      ],
      cautions: TOC_PROFESIONAL,
      steps: [
        { title: 'Llegar', instruction: 'Siéntate y respira despacio. Piensa en una vez reciente en que apareció un intrusivo.', durationSec: 30, kind: 'breath' },
        { title: 'El intrusivo', instruction: 'Ponle una etiqueta corta, sin detalles. Por ejemplo, «duda de la puerta» o «pensamiento de daño».', durationSec: 30, kind: 'reflection' },
        { title: 'Qué significa', instruction: '¿Qué temías que dijera de ti o que pasara? Anota esa interpretación en una frase.', durationSec: 60, kind: 'reflection' },
        { title: 'Cuánta ansiedad', instruction: '¿Cuánta ansiedad sentiste, de 0 a 10? Anota dónde la notabas en el cuerpo.', durationSec: 30, kind: 'reflection' },
        { title: 'Qué hiciste', instruction: 'Anota lo que hiciste para calmarte. Comprobar, lavar, repetir, preguntar o evitar.', durationSec: 60, kind: 'reflection' },
        { title: 'El alivio', instruction: '¿Cuánto duró el alivio? ¿Volvió el pensamiento después? Anótalo.', durationSec: 40, kind: 'reflection' },
        { title: 'El ciclo', instruction: 'Mira todo junto. Nota cómo el ritual alivia hoy y alimenta el ciclo mañana.', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'posponer-un-ritual',
      title: 'Posponer un ritual unos minutos',
      family: 'deconstructive',
      skills: ['resilience', 'attention'],
      summary: 'Cuando aparecen las ganas de hacer un ritual, esperar unos pocos minutos antes de hacerlo y notar cómo la ola sube y baja.',
      mechanism:
        'Posponer es un primer paso, chico y posible. Muestra que la ansiedad puede bajar sin el ritual y le da un poco de margen a tu elección.',
      evidenceLevel: 'moderada',
      evidence: [FOA_2005, SALKOVSKIS_1985],
      howItWorks: [
        'El tratamiento con más evidencia para el TOC es la exposición con prevención de respuesta. Con un terapeuta, la persona se acerca a lo que teme y no hace el ritual. En un ensayo grande fue muy eficaz (Foa y colaboradores, 2005).',
        'Ese tratamiento se planifica con un profesional, porque genera mucha ansiedad al principio. Esta práctica no lo reemplaza. Es un paso previo, de bajo nivel.',
        'Posponer no es prohibirte el ritual. Sólo esperas unos minutos. Muchas veces las ganas bajan un poco mientras esperas, y eso ya enseña algo.',
      ],
      tips: [
        'Empieza por un ritual de poca ansiedad, no por el más difícil.',
        'Empieza con dos a cinco minutos y alarga de a poco.',
        'Si después haces el ritual, hazlo una sola vez y anota cuánto esperaste.',
        'Si la comprobación es de algo real, como la hornalla, hazla una vez y pospone la segunda.',
      ],
      obstacles: [
        { q: 'No aguanté y lo hice.', a: 'No es un fracaso. Anota cuánto esperaste. La próxima vez prueba con una espera más corta o un ritual más fácil.' },
        { q: '¿Y si pasa algo malo por no hacerlo?', a: 'Esa duda es parte del TOC. Notarla y esperar igual es justamente la práctica. Si la ansiedad es enorme, elige un ritual más fácil o trabájalo con un profesional.' },
      ],
      cautions:
        'Esta práctica sólo pide esperar unos pocos minutos con rituales de poca ansiedad. No intentes dejar de golpe todos tus rituales ni hacer exposición a lo que más temes por tu cuenta: eso se hace con un terapeuta. ' +
        TOC_PROFESIONAL,
      steps: [
        { title: 'Elegir', instruction: 'Elige un ritual que te dé poca ansiedad no hacer. Que sea de 2 a 4, de 0 a 10.', durationSec: 30, kind: 'reflection' },
        { title: 'Notar las ganas', instruction: 'Cuando aparezcan las ganas, detente. Dite: «Son ganas de hacer el ritual».', durationSec: 15, kind: 'instruction' },
        { title: 'Un plazo', instruction: 'Decide esperar unos minutos, por ejemplo tres. Pon una alarma en el celular.', durationSec: 20, kind: 'instruction' },
        { title: 'La ola', instruction: 'Nota la ansiedad en el cuerpo. Respira lento y mira cómo sube y baja, como una ola.', durationSec: 60, kind: 'breath' },
        { title: 'Las manos', instruction: 'Si te ayuda, haz algo con las manos que no sea el ritual. Ordena algo o camina un poco.', durationSec: 60, kind: 'instruction' },
        { title: 'Al final', instruction: 'Cuando suene la alarma, mide la ansiedad otra vez. Anota si bajó, aunque sea un poco.', durationSec: 20, kind: 'reflection' },
        { title: 'Elegir otra vez', instruction: 'Ahora decides tú. Puedes esperar un poco más o seguir con tu día.', durationSec: 15, kind: 'reflection' },
      ],
    },
    {
      id: 'pedir-menos-tranquilizacion',
      title: 'Pedir menos tranquilización',
      family: 'deconstructive',
      skills: ['resilience', 'compassion'],
      summary: 'Notar cuándo preguntas lo mismo para calmarte, esperar antes de preguntar y acordar con tu familia una respuesta cariñosa que no alimente la duda.',
      mechanism:
        'Cada respuesta tranquilizadora calma un rato y entrena a la mente a necesitar otra. Preguntar menos, de a poco, deja que aprendas a convivir con la duda.',
      evidenceLevel: 'moderada',
      evidence: [SALKOVSKIS_1985, LEBOWITZ_2016],
      howItWorks: [
        'Pedir tranquilización es una forma de ritual. Preguntas «¿seguro que cerré?», «¿está todo bien?» o «¿no hice nada malo?», y la respuesta calma por un rato (Salkovskis, 1985).',
        'Pronto aparece otra duda y hace falta otra respuesta. Las personas que te quieren suelen contestar para ayudarte, y sin querer el ciclo crece.',
        'La idea no es cortar todo de golpe. Se trata de notar el pedido, esperar un poco y acordar con tu familia cómo responder con cariño sin dar la respuesta de siempre.',
      ],
      tips: [
        'Cuenta durante unos días cuántas veces preguntas lo mismo.',
        'Acuerda la frase con tu familia en un momento tranquilo, no en plena ansiedad.',
        'Busca también la tranquilización en internet o en tu propia cabeza, repasando recuerdos.',
      ],
      obstacles: [
        { q: 'Mi familia se enoja si no les pregunto.', a: 'Conviene hablarlo con calma y explicarles el ciclo. La guía para familiares de esta sección puede ayudar.' },
      ],
      cautions: TOC_PROFESIONAL,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en las preguntas que haces para calmarte.', durationSec: 30, kind: 'breath' },
        { title: 'Mis preguntas', instruction: 'Anota las preguntas que más repites y a quién se las haces.', durationSec: 60, kind: 'reflection' },
        { title: 'El efecto', instruction: '¿Cuánto dura la calma después de la respuesta? ¿Vuelve la duda? Anótalo.', durationSec: 40, kind: 'reflection' },
        { title: 'Una pregunta', instruction: 'Elige una sola pregunta para trabajar esta semana. Que no sea la más difícil.', durationSec: 30, kind: 'reflection' },
        { title: 'Esperar', instruction: 'Cuando aparezca, nómbrala: «Son ganas de preguntar». Espera unos minutos antes de hacerla.', durationSec: 40, kind: 'instruction' },
        { title: 'Un acuerdo', instruction: 'Piensa una frase cariñosa para tu familia. Por ejemplo, «sé que es difícil, confío en que puedes con la duda».', durationSec: 40, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira lento. Elige cuándo hablarás con tu familia de este acuerdo.', durationSec: 20, kind: 'breath' },
      ],
    },
    {
      id: 'acompanar-sin-acomodar',
      title: 'Acompañar sin participar en los rituales',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Para familiares: ver cómo participas en los rituales de alguien con TOC y elegir, con cariño y de acuerdo con esa persona, un cambio chico.',
      mechanism:
        'Participar en los rituales alivia a los dos un rato, pero mantiene el TOC. Retirarse de a poco, con cariño y avisando, ayuda a que la persona aprenda que puede con la ansiedad.',
      evidenceLevel: 'moderada',
      evidence: [LEBOWITZ_2016, SALKOVSKIS_1985],
      howItWorks: [
        'La acomodación familiar son los cambios que hace la familia por el TOC. Responder la misma pregunta muchas veces, comprobar en su lugar, lavar de cierta forma, evitar lugares o cambiar rutinas.',
        'Eli Lebowitz y su equipo revisaron los estudios. La acomodación es muy común y se asocia con síntomas más graves. Reducirla forma parte de los tratamientos que funcionan (Lebowitz y colaboradores, 2016).',
        'No se trata de retar ni de retirar la ayuda de golpe. Se trata de mostrar cariño y confianza, y de dejar de hacer el ritual por la otra persona, de a poco y de acuerdo con ella.',
      ],
      tips: [
        'Habla del plan en un momento tranquilo, nunca en plena crisis.',
        'Cambia una sola cosa por vez.',
        'Usa frases que muestren cariño y confianza: «sé que es difícil y sé que puedes».',
        'Cuídate tú también. Convivir con el TOC cansa.',
      ],
      obstacles: [
        { q: 'Si no le respondo, se angustia mucho.', a: 'Es esperable al principio. Por eso se empieza por algo chico y se acuerda antes. Si la angustia es enorme o hay enojo fuerte, busquen juntos ayuda profesional.' },
        { q: 'No quiere hablar del tema.', a: 'Puedes empezar por entender tú el ciclo y consultar a un profesional para familias. No hace falta que lo resuelvas sola o solo.' },
      ],
      cautions:
        'Esta guía es para acompañar, no para hacer el tratamiento. No cortes de golpe toda la ayuda ni lo hagas como castigo. Si hay violencia en casa, llama al 911; por violencia de género, a la Línea 144. Si la persona tiene menos de 18 años, la Línea 102 orienta. ' +
        TOC_PROFESIONAL,
      steps: [
        { title: 'Llegar', instruction: 'Siéntate y respira despacio. Piensa en tu familiar y en el TOC que comparten en casa.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que haces', instruction: 'Anota lo que haces por el TOC. Responder lo mismo, comprobar, esperar, evitar lugares o cambiar rutinas.', durationSec: 75, kind: 'reflection' },
        { title: 'El costo', instruction: '¿Cuánto tiempo te lleva? ¿Cómo te sientes al hacerlo? Anótalo sin culpa.', durationSec: 45, kind: 'reflection' },
        { title: 'Un cambio', instruction: 'Elige una sola cosa para cambiar. Que sea chica y posible.', durationSec: 30, kind: 'reflection' },
        { title: 'Tu frase', instruction: 'Escribe una frase con cariño y confianza. Por ejemplo, «te quiero y sé que puedes con esto sin que yo lo haga».', durationSec: 45, kind: 'reflection' },
        { title: 'El acuerdo', instruction: 'Piensa cuándo hablarlo con tu familiar, en un momento tranquilo. Acuerden el cambio juntos.', durationSec: 30, kind: 'reflection' },
        { title: 'Cuidarte', instruction: 'Respira lento. Piensa algo que harás esta semana para cuidarte tú.', durationSec: 25, kind: 'breath' },
      ],
    },
  ],

  meta: {
    'notar-y-nombrar-el-intrusivo': { level: 'intermedio', approaches: ['act', 'mindfulness'], module: 'pensamientos' },
    'mi-ciclo-obsesivo': { level: 'intermedio', approaches: ['tcc'], module: 'pensamientos' },
    'posponer-un-ritual': {
      level: 'intermedio',
      approaches: ['tcc', 'act'],
      module: 'pensamientos',
      prerequisites: ['mi-ciclo-obsesivo', 'notar-y-nombrar-el-intrusivo'],
      risk: { level: 2, alternative: 'plantas-de-los-pies' },
    },
    'pedir-menos-tranquilizacion': { level: 'intermedio', approaches: ['tcc'], module: 'pensamientos', prerequisites: ['mi-ciclo-obsesivo'] },
    'acompanar-sin-acomodar': { level: 'intermedio', approaches: ['tcc', 'sistemica'], module: 'pensamientos' },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'pensamientos-intrusivos-y-toc',
      title: 'Pensamientos intrusivos y TOC',
      subtitle: 'Todo el mundo tiene pensamientos que asustan. Qué los vuelve un problema, por qué los rituales mantienen el ciclo y qué tratamiento funciona.',
      category: 'Fundamentos',
      readingMin: 9,
      keyPoints: [
        'Casi todas las personas tienen pensamientos intrusivos. No dicen nada malo de ti.',
        'El problema es cómo se interpretan y lo que se hace para calmarlos.',
        'Rituales, comprobaciones, pedir tranquilización y evitar mantienen el ciclo.',
        'No hace falta «neutralizar» un pensamiento: se puede notar y dejar pasar.',
        'La exposición con prevención de respuesta, con un terapeuta, es el tratamiento con más evidencia.',
      ],
      sections: [
        {
          heading: 'Pensamientos que aparecen sin querer',
          paragraphs: [
            'Un pensamiento intrusivo es una idea, una imagen o un impulso que aparece sin buscarlo y que choca con lo que valoras. Puede ser una duda, una imagen de un accidente o una idea que te parece horrible.',
            'Stanley Rachman y Padmal de Silva preguntaron a personas sin TOC por estos pensamientos. La mayoría los tenía, con contenidos muy parecidos a los de las personas con TOC (Rachman y de Silva, 1978). La diferencia estaba en la frecuencia, el malestar y lo que la persona hacía con ellos.',
          ],
        },
        {
          heading: 'Los intrusivos de daño o sexuales',
          paragraphs: [
            'Algunos intrusivos tratan de hacer daño a alguien querido o tienen contenido sexual no deseado. Son de los que más angustia y vergüenza dan, y por eso muchas personas no los cuentan.',
            'Tenerlos no indica que seas un peligro ni que lo desees. Suelen aparecer justo sobre lo que más te importa cuidar. El rechazo y la angustia que sientes muestran que van en contra de tus valores. Un profesional que conoce el TOC no se asusta al escucharlos.',
          ],
        },
        {
          heading: 'El problema es la interpretación',
          paragraphs: [
            'Paul Salkovskis propuso que lo que importa es qué significado le das al intrusivo. Si crees que tenerlo te hace responsable de evitar un daño, aparece mucha ansiedad y la urgencia de hacer algo (Salkovskis, 1985).',
            'Roz Shafran y su equipo describieron la fusión pensamiento-acción. Es creer que pensar algo lo hace más probable, o que pensarlo es tan malo como hacerlo (Shafran y colaboradores, 1996). Un pensamiento es un evento de la mente, no una acción ni una predicción.',
          ],
        },
        {
          heading: 'Qué mantiene el ciclo',
          paragraphs: [
            'Para calmar la ansiedad aparecen los rituales. Pueden ser visibles, como lavar, comprobar u ordenar, o mentales, como repetir frases, contar o revisar recuerdos. También pedir que te tranquilicen y evitar lugares o personas.',
            'Todo eso alivia un rato. Pero le enseña a la mente que el pensamiento era peligroso y que había que hacer algo. Así el intrusivo vuelve más seguido y con más fuerza. Intentar «neutralizarlo» o suprimirlo tiene el mismo efecto.',
          ],
        },
        {
          heading: 'Qué ayuda',
          paragraphs: [
            'El tratamiento con más evidencia es la exposición con prevención de respuesta. Con un terapeuta, la persona se acerca de a poco a lo que teme y no hace el ritual. En un ensayo grande fue muy eficaz, sola o combinada con medicación indicada por un psiquiatra (Foa y colaboradores, 2005).',
            'La terapia de aceptación y compromiso también mostró resultados. Enseña a notar los pensamientos sin pelear con ellos y a actuar según tus valores (Twohig y colaboradores, 2010).',
            'Por tu cuenta puedes dar pasos chicos: nombrar el intrusivo, entender tu ciclo, posponer un ritual pocos minutos y pedir menos tranquilización. La exposición completa se planifica con un profesional.',
          ],
        },
        {
          heading: 'Cuándo consultar',
          paragraphs: [
            'Consulta si los pensamientos y rituales te ocupan más de una hora por día, si te paralizan o si afectan tu trabajo, tus estudios o tus vínculos. También si evitas cada vez más cosas. El TOC tiene tratamiento y suele mejorar.',
            'Si te sientes sin salida, llama a la Línea Nacional de Salud Mental, 0800-999-0091, o al Centro de Asistencia al Suicida, 135. También puedes usar el botón Ayuda de la app.',
          ],
        },
      ],
      caveat: {
        title: 'Lo que esta sección no hace',
        body: 'Las prácticas son de bajo nivel y no reemplazan la terapia. No te proponen exponerte por tu cuenta a lo que más temes ni dejar todos los rituales de golpe. Si quieres hacer exposición con prevención de respuesta, búscala con un profesional que conozca el TOC. La medicación, si hace falta, la indica un médico.',
      },
      diagram: {
        title: 'El ciclo del TOC',
        nodes: ['Pensamiento intrusivo', 'Interpretación: «esto es peligroso»', 'Ansiedad', 'Ritual, comprobación o pregunta', 'Alivio breve', 'El pensamiento vuelve más fuerte'],
        caption: 'Notar el pensamiento sin neutralizarlo y posponer el ritual empiezan a cortar el ciclo.',
      },
      related: {
        practices: ['notar-y-nombrar-el-intrusivo', 'mi-ciclo-obsesivo', 'posponer-un-ritual', 'pedir-menos-tranquilizacion', 'pajaros-en-el-cielo', 'surfear-impulso'],
        articles: ['el-toc-en-familia', 'flexibilidad-psicologica', 'preocupacion-y-ansiedad'],
      },
      references: [RACHMAN_1978, SALKOVSKIS_1985, SHAFRAN_1996, FOA_2005, TWOHIG_2010],
    },
    {
      id: 'el-toc-en-familia',
      title: 'Cuando alguien de tu familia tiene TOC',
      subtitle: 'Qué es la acomodación familiar, por qué no conviene participar en los rituales y cómo retirarse con cariño.',
      category: 'Relaciones',
      readingMin: 6,
      keyPoints: [
        'La acomodación familiar son los cambios que hace la familia por el TOC.',
        'Es muy común y nace del cariño, pero mantiene el problema.',
        'Se reduce de a poco, con acuerdo y sin castigos.',
        'Cuidarte también es parte de acompañar.',
      ],
      sections: [
        {
          heading: 'Qué es la acomodación',
          paragraphs: [
            'Cuando alguien tiene TOC, la familia suele cambiar cosas para ayudar. Responde muchas veces la misma pregunta, comprueba en su lugar, lava o ordena de cierta forma, evita lugares o espera a que termine un ritual.',
            'Eli Lebowitz y su equipo revisaron los estudios. La acomodación aparece en la mayoría de las familias y se asocia con síntomas más graves. Reducirla es parte de los tratamientos que funcionan (Lebowitz y colaboradores, 2016).',
          ],
        },
        {
          heading: 'Por qué no conviene participar',
          paragraphs: [
            'Hacer el ritual por la otra persona alivia a todos un rato. Pero confirma que el pensamiento era peligroso y que la ansiedad no se puede tolerar. Así el ciclo crece.',
            'Esto no es culpa de la familia. La acomodación nace del cariño y de querer evitar el sufrimiento.',
          ],
        },
        {
          heading: 'Cómo retirarse con cariño',
          paragraphs: [
            'Habla en un momento tranquilo. Explica el ciclo y acuerden un cambio chico. Usa frases que muestren cariño y confianza: «sé que es difícil y sé que puedes con esto».',
            'Cambia una sola cosa por vez y sostenla. No lo hagas como castigo ni cortes toda la ayuda de golpe. Si la angustia o el enojo son muy fuertes, busquen orientación profesional juntos.',
          ],
        },
        {
          heading: 'Cuidarte tú',
          paragraphs: [
            'Convivir con el TOC cansa. Busca tiempo para ti y personas con quienes hablar. Si hay violencia en casa, llama al 911; por violencia de género, a la Línea 144. Si la persona con TOC es menor de 18 años, la Línea 102 orienta a familias.',
          ],
        },
      ],
      caveat: {
        title: 'Acompañar no es tratar',
        body: 'Esta guía ayuda a no alimentar el ciclo, pero el tratamiento del TOC lo hace un profesional. Muchos tratamientos incluyen sesiones para la familia. Si tu familiar no quiere consultar, puedes pedir orientación para ti.',
      },
      related: {
        practices: ['acompanar-sin-acomodar', 'pedir-menos-tranquilizacion', 'pausa-autocompasion'],
        articles: ['pensamientos-intrusivos-y-toc', 'cuidar-sin-agotarse'],
      },
      references: [LEBOWITZ_2016, SALKOVSKIS_1985],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'convivir-con-los-intrusivos',
      title: 'Convivir con los pensamientos intrusivos',
      subtitle: 'Tres semanas para entender el ciclo y dar los primeros pasos',
      description:
        'Para quien tiene pensamientos que asustan o molestan y siente que tiene que hacer algo para calmarlos. Aprenderás que los intrusivos son universales, cómo funciona el ciclo y cómo dar pasos chicos. No reemplaza la exposición con prevención de respuesta, que se hace con un terapeuta. Si el TOC te ocupa más de una hora por día, consulta.',
      basis: 'Rachman y de Silva (1978); Salkovskis (1985); Shafran, Thordarson y Rachman (1996); Twohig y colaboradores (2010); Foa y colaboradores (2005); Lebowitz, Panza y Bloch (2016).',
      rhythm: '10 minutos, 4 o 5 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Entender',
          focus: 'Los intrusivos y su ciclo',
          description: 'Leerás por qué todo el mundo tiene intrusivos y armarás tu ciclo. Practicarás nombrar el pensamiento sin discutirlo.',
          practiceIds: ['mi-ciclo-obsesivo', 'notar-y-nombrar-el-intrusivo'],
          articleIds: ['pensamientos-intrusivos-y-toc'],
          journalType: 'defusion',
        },
        {
          title: 'Semana 2 · Pasos chicos',
          focus: 'Posponer y preguntar menos',
          description: 'Probarás esperar unos minutos antes de un ritual fácil y trabajarás una pregunta de tranquilización.',
          practiceIds: ['posponer-un-ritual', 'pedir-menos-tranquilizacion', 'surfear-impulso'],
          articleIds: [],
          journalType: 'experimento',
        },
        {
          title: 'Semana 3 · Con otros',
          focus: 'La familia y la ayuda profesional',
          description: 'Leerás sobre la acomodación familiar y, si quieres, compartirás la guía con tu familia. Pensarás si es momento de consultar.',
          practiceIds: ['acompanar-sin-acomodar', 'pausa-autocompasion'],
          articleIds: ['el-toc-en-familia'],
          journalType: 'carta-compasiva',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-intrusivos-universales',
      title: 'Todos tenemos pensamientos raros',
      subtitle: 'Los intrusivos son normales. Lo que importa es qué haces con ellos.',
      slides: [
        { heading: 'Sin querer', text: 'A veces aparece una idea o una imagen que te asusta. No la buscaste. Eso es un pensamiento intrusivo.' },
        { heading: 'Le pasa a casi todos', text: 'Un estudio clásico encontró que la mayoría de las personas sin TOC también los tiene.' },
        { heading: 'No dicen nada de ti', text: 'Si el pensamiento es de daño o sexual, no indica peligro ni deseo. Suele aparecer sobre lo que más te importa.' },
        { heading: 'Lo que cambia', text: 'El problema empieza cuando crees que el pensamiento es peligroso y haces algo para anularlo.' },
        { heading: 'Nombrarlo', text: 'Prueba decir: «Ahí está el pensamiento intrusivo». Y vuelve a lo que hacías.' },
      ],
      related: { practices: ['notar-y-nombrar-el-intrusivo'], articles: ['pensamientos-intrusivos-y-toc'] },
      references: [RACHMAN_1978, SALKOVSKIS_1985],
    },
    {
      id: 'pildora-no-neutralizar',
      title: 'No hace falta anular el pensamiento',
      subtitle: 'Por qué los rituales mantienen el ciclo.',
      slides: [
        { heading: 'El ritual', text: 'Lavar, comprobar, repetir una frase o preguntar otra vez. Todo eso calma la ansiedad un rato.' },
        { heading: 'El problema', text: 'Cada ritual le enseña a tu mente que el pensamiento era peligroso. Y así vuelve más seguido.' },
        { heading: 'Dejarlo estar', text: 'No hace falta tapar ni anular el pensamiento. Puedes dejarlo estar, como una radio de fondo.' },
        { heading: 'Un paso chico', text: 'Cuando vengan las ganas, espera unos minutos. Mira cómo la ansiedad sube y baja.' },
        { heading: 'Con ayuda', text: 'El tratamiento con más evidencia se hace con un terapeuta. Si el TOC te ocupa más de una hora por día, consulta.' },
      ],
      related: { practices: ['posponer-un-ritual', 'mi-ciclo-obsesivo'], articles: ['pensamientos-intrusivos-y-toc'] },
      references: [SALKOVSKIS_1985, FOA_2005],
    },
    {
      id: 'pildora-fusion-pensamiento-accion',
      title: 'Pensar no es hacer',
      subtitle: 'La fusión pensamiento-acción.',
      slides: [
        { heading: 'Una trampa', text: 'A veces sentimos que pensar algo lo hace más probable. O que pensarlo es tan malo como hacerlo.' },
        { heading: 'Tiene nombre', text: 'Se llama fusión pensamiento-acción. Es muy común en el TOC.' },
        { heading: 'Un pensamiento', text: 'Un pensamiento es algo que pasa en la mente. No es una acción, ni un deseo, ni una predicción.' },
        { heading: 'Notar la trampa', text: 'Cuando la notes, dite: «Estoy teniendo el pensamiento de que…». Así tomas distancia.' },
        { heading: 'Seguir', text: 'No necesitas discutirlo ni anularlo. Puedes seguir con lo que te importa.' },
      ],
      related: { practices: ['notar-y-nombrar-el-intrusivo', 'pajaros-en-el-cielo'], articles: ['pensamientos-intrusivos-y-toc'] },
      references: [SHAFRAN_1996, TWOHIG_2010],
    },
    {
      id: 'pildora-toc-en-familia',
      title: 'Ayudar sin alimentar el TOC',
      subtitle: 'Para familias que conviven con el TOC.',
      slides: [
        { heading: 'Ayudar con cariño', text: 'Responder la misma pregunta o comprobar en su lugar nace del cariño. Se llama acomodación familiar.' },
        { heading: 'El efecto', text: 'Alivia a todos un rato. Pero mantiene el ciclo y el TOC crece.' },
        { heading: 'De a poco', text: 'Elige un solo cambio chico. Acuérdalo en un momento tranquilo, nunca en plena crisis.' },
        { heading: 'Una frase', text: 'Prueba decir: «Te quiero y sé que puedes con esto». Sin retos ni castigos.' },
        { heading: 'Cuidarte', text: 'Convivir con el TOC cansa. Busca apoyo y orientación profesional para ti también.' },
      ],
      related: { practices: ['acompanar-sin-acomodar'], articles: ['el-toc-en-familia'] },
      references: [LEBOWITZ_2016],
    },
  ],

  // ================================================================== glosario
  glossary: [
    {
      id: 'pensamiento-intrusivo',
      term: 'Pensamiento intrusivo',
      definition: 'Idea, imagen o impulso que aparece sin querer y choca con lo que valoras. Casi todas las personas los tienen. No indican peligro ni deseo.',
      articleId: 'pensamientos-intrusivos-y-toc',
    },
    {
      id: 'fusion-pensamiento-accion',
      term: 'Fusión pensamiento-acción',
      definition: 'Creer que pensar algo lo hace más probable, o que pensarlo es tan malo como hacerlo. Es común en el TOC.',
      articleId: 'pensamientos-intrusivos-y-toc',
    },
    {
      id: 'neutralizacion',
      term: 'Neutralización',
      definition: 'Hacer algo para anular un pensamiento que asusta, como repetir una frase o pensar otra cosa. Alivia un rato y mantiene el ciclo.',
      practiceId: 'notar-y-nombrar-el-intrusivo',
    },
    {
      id: 'acomodacion-familiar',
      term: 'Acomodación familiar',
      definition: 'Cambios que hace la familia por el TOC o la ansiedad, como responder muchas veces lo mismo o comprobar en lugar de la persona. Nace del cariño, pero mantiene el problema.',
      practiceId: 'acompanar-sin-acomodar',
    },
    {
      id: 'exposicion-con-prevencion-de-respuesta',
      term: 'Exposición con prevención de respuesta',
      definition: 'Tratamiento del TOC con más evidencia. Con un terapeuta, la persona se acerca de a poco a lo que teme y no hace el ritual.',
      articleId: 'pensamientos-intrusivos-y-toc',
    },
  ],
};
