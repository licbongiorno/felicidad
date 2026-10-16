import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Terapia de esquemas» (Jeffrey Young):
 *  - las cinco necesidades emocionales básicas y los 18 esquemas en cinco dominios
 *    (el detalle de cada esquema y modo está en domain/schemas.ts, que usa el explorador);
 *  - los modos: partes niñas, críticas, de afrontamiento, el adulto sano y el niño feliz;
 *  - las tres formas de afrontar un esquema: rendirse, evitar y sobrecompensar;
 *  - prácticas: reconocer el modo, la tarjeta del esquema, diálogo con el crítico, cuidar a la
 *    parte vulnerable y dar lugar al niño feliz; programa de cuatro semanas.
 *
 * Todo se ofrece como exploración autoguiada. La evidencia es de la terapia completa con
 * terapeuta (sobre todo en trastornos de la personalidad), no de estos ejercicios. No se usa
 * el cuestionario de Young (YSQ): tiene licencia y no está pensado para autodiagnóstico.
 * La reescritura de imágenes de recuerdos dolorosos no se automatiza: sólo se describe.
 */

const YOUNG_2003: Reference = { citation: 'Young, J. E., Klosko, J. S., & Weishaar, M. E. (2003). Schema therapy: A practitioner’s guide. Guilford Press.' };
const YOUNG_KLOSKO_1993: Reference = {
  citation: 'Young, J. E., & Klosko, J. S. (1993). Reinventing your life. Plume.',
  note: 'Edición en castellano: «Reinventa tu vida», Paidós. Libro de autoayuda de los creadores del modelo.',
};
const ARNTZ_JACOB_2012: Reference = { citation: 'Arntz, A., & Jacob, G. (2012). Schema therapy in practice: An introductory guide to the schema mode approach. Wiley-Blackwell.' };
const JACOB_2015: Reference = {
  citation: 'Jacob, G., van Genderen, H., & Seebauer, L. (2015). Breaking negative thinking patterns: A schema therapy self-help and support book. Wiley-Blackwell.',
};
const LOCKWOOD_2012: Reference = {
  citation:
    'Lockwood, G., & Perris, P. (2012). A new look at core emotional needs. En M. van Vreeswijk, J. Broersen y M. Nadort (Eds.), The Wiley-Blackwell handbook of schema therapy (pp. 41–66). Wiley-Blackwell.',
};
const GIESEN_BLOO_2006: Reference = {
  citation:
    'Giesen-Bloo, J., van Dyck, R., Spinhoven, P., et al. (2006). Outpatient psychotherapy for borderline personality disorder: Randomized trial of schema-focused therapy vs transference-focused psychotherapy. Archives of General Psychiatry, 63(6), 649–658.',
  doi: '10.1001/archpsyc.63.6.649',
  note: 'Terapia de esquemas completa, con terapeuta, durante tres años.',
};
const BAMELIS_2014: Reference = {
  citation:
    'Bamelis, L. L. M., Evers, S. M. A. A., Spinhoven, P., & Arntz, A. (2014). Results of a multicenter randomized controlled trial of the clinical effectiveness of schema therapy for personality disorders. American Journal of Psychiatry, 171(3), 305–322.',
  doi: '10.1176/appi.ajp.2013.12040518',
  note: 'Evidencia de la terapia completa con terapeuta, no de los ejercicios autoguiados.',
};
const TAYLOR_2017: Reference = {
  citation:
    'Taylor, C. D. J., Bee, P., & Haddock, G. (2017). Does schema therapy change schemas and symptoms? A systematic review across mental health disorders. Psychology and Psychotherapy: Theory, Research and Practice, 90(3), 456–479.',
  doi: '10.1111/papt.12112',
};
const KELLOGG_2004: Reference = {
  citation: 'Kellogg, S. (2004). Dialogical encounters: Contemporary perspectives on «chairwork» in psychotherapy. Psychotherapy: Theory, Research, Practice, Training, 41(3), 310–320.',
  doi: '10.1037/0033-3204.41.3.310',
};
const ARNTZ_2012_IR: Reference = {
  citation: 'Arntz, A. (2012). Imagery rescripting as a therapeutic technique: Review of clinical trials, basic studies, and research agenda. Journal of Experimental Psychopathology, 3(2), 189–208.',
  doi: '10.5127/jep.024211',
};
const GILBERT_2009: Reference = {
  citation: 'Gilbert, P. (2009). Introducing compassion-focused therapy. Advances in Psychiatric Treatment, 15(3), 199–208.',
  doi: '10.1192/apt.bp.107.005264',
};

const EXPLORACION =
  'Esto es una exploración personal, no un diagnóstico ni una terapia. Si aparecen recuerdos traumáticos, mucha angustia o ganas de hacerte daño, detente y busca ayuda: el botón «Ayuda» está en todas las pantallas.';

export const ESQUEMAS_PACK: ContentPack = {
  id: 'esquemas',

  // ================================================================== prácticas
  practices: [
    {
      id: 'reconocer-el-modo',
      title: '¿Desde qué parte estoy reaccionando?',
      family: 'deconstructive',
      skills: ['attention', 'resilience'],
      summary: 'Reconocer qué modo se activó en un momento difícil: una parte niña, una parte crítica, una forma de protegerte o el adulto sano.',
      mechanism: 'Ponerle nombre a la parte que reacciona crea distancia. Desde ahí es más fácil ver qué necesitas y elegir qué hacer.',
      evidenceLevel: 'preliminar',
      evidence: [ARNTZ_JACOB_2012, YOUNG_2003, BAMELIS_2014],
      howItWorks: [
        'En la terapia de esquemas, un «modo» es el estado en el que estás en un momento dado. Todos pasamos de un modo a otro durante el día. Un comentario de alguien puede despertar una parte asustada, una parte enojada o una voz que te exige sin descanso.',
        'Arnoud Arntz y Gitta Jacob describen cuatro grupos de modos: las partes niñas, las partes críticas, las formas de afrontar y el adulto sano. Saber en qué modo estás no lo resuelve todo, pero te ayuda a no confundirte con él.',
        'La pregunta clave no es «qué me pasa», sino «qué parte mía está al mando ahora». Esa pequeña distancia abre la posibilidad de responder desde tu parte más serena.',
      ],
      tips: [
        'Hazlo después de un momento de intensidad media, ya en calma.',
        'Puedes usar los nombres del explorador de modos o inventar los tuyos, por ejemplo «la nena asustada» o «el juez».',
        'Si no sabes qué modo era, está bien. Con la práctica se reconoce más rápido.',
      ],
      obstacles: [
        { q: 'Me reconozco en todos los modos.', a: 'Es lo esperable: todos los tenemos. Busca el que estuvo más al mando en ese momento concreto.' },
        { q: 'Me da vergüenza ver mi parte enojada.', a: 'Esa parte suele defender una necesidad que no se escuchó. Reconocerla no es justificar lo que hiciste, es entenderlo para cuidarte mejor.' },
      ],
      cautions: EXPLORACION,
      steps: [
        { title: 'Llegar', instruction: 'Siéntate cómodo y respira despacio tres veces. Nota el apoyo del cuerpo.', durationSec: 40, kind: 'breath' },
        { title: 'El momento', instruction: 'Recuerda un momento reciente en que reaccionaste con fuerza. Elige uno de intensidad media.', durationSec: 60, kind: 'reflection' },
        { title: 'El cuerpo y la emoción', instruction: '¿Qué sentiste en el cuerpo? ¿Qué emoción había? Ponle una palabra.', durationSec: 50, kind: 'reflection' },
        { title: '¿Qué parte era?', instruction: '¿Era una parte niña, asustada o enojada? ¿Una voz crítica? ¿Una forma de protegerte, como callarte, irte o atacar?', durationSec: 75, kind: 'reflection' },
        { title: 'Su nombre', instruction: 'Ponle un nombre a esa parte. Puede ser simple: «mi parte asustada», «el juez», «el que se va».', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que necesitaba', instruction: '¿Qué necesitaba esa parte en ese momento? Quizá calma, que la escuchen, un límite o un descanso.', durationSec: 60, kind: 'reflection' },
        { title: 'El adulto sano', instruction: 'Imagina a tu parte más serena mirando la escena. ¿Qué haría distinto la próxima vez?', durationSec: 60, kind: 'reflection' },
      ],
    },
    {
      id: 'tres-formas-de-afrontar',
      title: 'Rendirme, escapar o contraatacar',
      family: 'deconstructive',
      skills: ['attention', 'resilience'],
      summary: 'Reconocer cómo sueles afrontar un esquema cuando se activa: rindiéndote a él, evitándolo o haciendo lo contrario con fuerza.',
      mechanism: 'Las tres formas alivian en el momento pero mantienen el esquema. Verlas con claridad permite probar una cuarta: responder desde el adulto sano.',
      evidenceLevel: 'preliminar',
      evidence: [YOUNG_2003, YOUNG_KLOSKO_1993],
      howItWorks: [
        'Jeffrey Young observó que ante un esquema la gente reacciona de tres formas. Rendirse es actuar como si el esquema fuera cierto: si siento que no valgo, elijo a quien me trata mal. Evitar es no acercarse a lo que lo despierta: no me postulo, no me vinculo, me distraigo.',
        'Sobrecompensar es hacer lo contrario con mucha fuerza: si siento que no valgo, me muestro superior o necesito ganar siempre. Las tres formas tuvieron sentido cuando las aprendiste. El problema es que hoy confirman el esquema en lugar de cambiarlo.',
        'No se trata de juzgarte. Se trata de ver el patrón y preguntarte qué haría el adulto sano: reconocer la necesidad y cuidarla de una forma que no te dañe.',
      ],
      tips: [
        'Muchas personas usan las tres formas según la situación. Mira cuál aparece más.',
        'Elige un ejemplo concreto y reciente. Lo general cuesta más de ver.',
        'Lleva tus notas a terapia: son muy útiles para trabajar el esquema.',
      ],
      obstacles: [{ q: 'Mi forma de afrontar me funciona.', a: 'Puede ser que te alivie a corto plazo. La pregunta es qué te cuesta a largo plazo y si te acerca a lo que quieres.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio y deja que la atención se asiente.', durationSec: 30, kind: 'breath' },
        { title: 'El esquema', instruction: 'Piensa en una creencia dolorosa que se repite, como «me van a dejar» o «no soy suficiente».', durationSec: 60, kind: 'reflection' },
        { title: 'Rendirme', instruction: '¿Alguna vez actúas como si fuera cierta? Por ejemplo, aceptar un mal trato o no pedir nada.', durationSec: 60, kind: 'reflection' },
        { title: 'Escapar', instruction: '¿La evitas? Quizá no te acercas a la gente, postergas o te distraes con el celular, la comida o el trabajo.', durationSec: 60, kind: 'reflection' },
        { title: 'Contraatacar', instruction: '¿Haces lo contrario con fuerza? Quizá controlas todo, te muestras duro o necesitas ganar siempre.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que cuesta', instruction: 'Elige la forma que más usas. ¿Qué te alivia en el momento? ¿Qué te cuesta después?', durationSec: 60, kind: 'reflection' },
        { title: 'Una cuarta forma', instruction: '¿Qué haría tu adulto sano? Piensa un paso pequeño que cuide la necesidad sin dañarte.', durationSec: 60, kind: 'reflection' },
      ],
    },
    {
      id: 'tarjeta-del-esquema',
      title: 'Mi tarjeta para cuando se activa el esquema',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Escribir, en calma, una tarjeta para leer cuando el esquema se activa: qué siento, de dónde viene, qué es cierto hoy y qué voy a hacer.',
      mechanism: 'En plena activación cuesta pensar. Una tarjeta escrita antes, con la voz del adulto sano, trae esa voz al momento difícil.',
      evidenceLevel: 'preliminar',
      evidence: [YOUNG_2003, JACOB_2015],
      howItWorks: [
        'Young y sus colegas usan «tarjetas recordatorias». Se escriben en calma, a veces junto con el terapeuta, y se leen cuando el esquema se dispara. Unen la emoción del momento con lo que sabes cuando estás sereno.',
        'Una buena tarjeta valida lo que sientes, explica de dónde viene, recuerda los hechos de hoy y propone una conducta sana. Es la voz del adulto sano puesta por escrito.',
      ],
      tips: [
        'Escríbela en primera persona y con palabras tuyas.',
        'Guárdala en el celular o en la billetera, donde puedas leerla rápido.',
        'Revísala cada tanto. Puede mejorar con lo que vas aprendiendo.',
        'Puedes guardarla en el diario con la plantilla «Tarjeta del esquema».',
      ],
      obstacles: [{ q: 'Cuando se activa, no le creo a la tarjeta.', a: 'Al principio pasa. Léela igual, despacio y en voz baja. Con la repetición, la voz del adulto sano gana fuerza.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Ten a mano papel o el diario.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que siento', instruction: 'Completa: «Ahora me siento… porque pasó…». Describe lo típico que te pasa cuando el esquema se activa.', durationSec: 75, kind: 'reflection' },
        { title: 'De dónde viene', instruction: 'Completa: «Esto es mi esquema de… Lo aprendí cuando…». Sólo una frase, sin entrar en detalles dolorosos.', durationSec: 75, kind: 'reflection' },
        { title: 'Lo que es cierto hoy', instruction: 'Completa: «Pero hoy sé que…». Anota hechos que muestran otra cara de la situación.', durationSec: 75, kind: 'reflection' },
        { title: 'Lo que voy a hacer', instruction: 'Completa: «Por eso, aunque sienta ganas de…, voy a…». Elige una conducta sana y posible.', durationSec: 75, kind: 'reflection' },
        { title: 'Leerla', instruction: 'Lee la tarjeta entera en voz baja, despacio. Nota cómo suena tu voz serena.', durationSec: 45, kind: 'instruction' },
      ],
    },
    {
      id: 'dialogo-con-el-critico',
      title: 'Ponerle límite al crítico interno',
      family: 'deconstructive',
      skills: ['compassion', 'resilience'],
      summary: 'Un diálogo con dos sillas: escuchar a la voz que te critica o te exige de más, y responderle desde el adulto sano con firmeza y cuidado.',
      mechanism: 'Sacar la voz crítica afuera, en otra silla, permite verla como una parte y no como la verdad. Responderle en voz alta ensaya otra forma de tratarte.',
      evidenceLevel: 'preliminar',
      evidence: [KELLOGG_2004, ARNTZ_JACOB_2012, GILBERT_2009],
      howItWorks: [
        'En la terapia de esquemas, el modo crítico es una voz interna que castiga o exige sin descanso. Suele sonar como alguien de tu historia. Muchas veces quiere protegerte, pero lo hace con dureza.',
        'El trabajo con sillas viene de la Gestalt y se usa mucho en esta terapia (Kellogg, 2004). Te sientas en una silla para dar voz al crítico y en otra para responderle. Cambiar de lugar ayuda a separar las voces.',
        'El adulto sano no discute con el crítico punto por punto. Le pone un límite y se ocupa de la parte que recibió los golpes. Es firme con el crítico y amable con la parte herida.',
      ],
      tips: [
        'Elige una autocrítica frecuente pero de intensidad media.',
        'Si no tienes dos sillas, cambia de lugar en la cama o el sillón.',
        'Habla en voz alta si puedes. Escribir también sirve.',
        'Termina siempre en la silla del adulto sano.',
      ],
      obstacles: [
        { q: 'El crítico tiene razón.', a: 'Puede señalar algo a mejorar. Pero la forma importa: nadie aprende bien a los gritos. El adulto sano puede tomar lo útil sin aceptar el maltrato.' },
        { q: 'Me siento ridículo hablándole a una silla.', a: 'Es muy común al principio. Si te resulta más fácil, escribe el diálogo en dos columnas.' },
      ],
      cautions:
        'Si la voz crítica se parece a alguien que te maltrató, o si el ejercicio trae recuerdos de violencia, detente. Ese trabajo conviene hacerlo con un terapeuta. ' + EXPLORACION,
      steps: [
        { title: 'Preparar', instruction: 'Pon dos sillas frente a frente. Siéntate en una y respira despacio tres veces.', durationSec: 40, kind: 'breath' },
        { title: 'La frase del crítico', instruction: 'Recuerda una autocrítica que te repites. Escríbela tal cual suena, por ejemplo: «Nunca haces nada bien».', durationSec: 60, kind: 'reflection' },
        { title: 'Dar voz al crítico', instruction: 'Cámbiate a la otra silla. Di la frase en voz alta, como la dice el crítico. Nota el tono y la postura.', durationSec: 60, kind: 'instruction' },
        { title: 'Cómo llega', instruction: 'Vuelve a la primera silla. ¿Cómo te hace sentir escuchar eso? Nota el cuerpo y la emoción.', durationSec: 60, kind: 'reflection' },
        { title: 'El adulto sano', instruction: 'Ponte de pie un momento y siéntate de nuevo, más erguido. Ahora habla como tu adulto sano.', durationSec: 30, kind: 'instruction' },
        { title: 'Poner límite', instruction: 'Dile al crítico, con calma y firmeza: «Así no. Si hay algo a mejorar, lo veo yo, sin maltrato».', durationSec: 60, kind: 'instruction' },
        { title: 'Cuidar a la parte herida', instruction: 'Dirígete a la parte que recibió la crítica. Dile algo amable y verdadero, como a alguien que quieres.', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho. Respira despacio. Nota qué cambió, aunque sea poco.', durationSec: 40, kind: 'breath' },
      ],
    },
    {
      id: 'cuidar-a-la-parte-vulnerable',
      title: 'Cuidar a tu parte niña en el presente',
      family: 'constructive',
      skills: ['compassion'],
      summary: 'Imaginar a tu parte más vulnerable en un lugar seguro de hoy y darle lo que necesita: calma, cuidado y protección.',
      mechanism: 'Imaginar que la parte vulnerable recibe cuidado activa sistemas de calma y apego. Con la repetición, el adulto sano aprende a ofrecer ese cuidado.',
      evidenceLevel: 'preliminar',
      evidence: [ARNTZ_2012_IR, ARNTZ_JACOB_2012, GILBERT_2009],
      howItWorks: [
        'La terapia de esquemas usa mucho el trabajo con imágenes. En la consulta, el terapeuta ayuda a volver a imaginar escenas dolorosas de la infancia y a cambiar su final. Esa técnica se llama reescritura de imágenes y tiene buena evidencia, pero se hace con un profesional.',
        'Esta práctica es más suave y no trabaja con recuerdos. Imaginas a tu parte niña aquí y ahora, en un lugar seguro, y practicas cuidarla. Se parece a los ejercicios de la terapia centrada en la compasión.',
        'No hace falta que la imagen sea nítida. Basta con una sensación, un color o una idea. Lo importante es el gesto de cuidado.',
      ],
      tips: [
        'Si te cuesta imaginar, usa una foto tuya de chico.',
        'Si aparece un recuerdo doloroso, abre los ojos y vuelve a la habitación.',
        'Puedes repetir esta práctica antes de dormir.',
      ],
      obstacles: [
        { q: 'No siento nada por esa parte.', a: 'A veces el protector desapegado no deja sentir. Está bien. Imagina qué haría un adulto amable con cualquier chico que estuviera así.' },
        { q: 'Me da mucha tristeza.', a: 'Puede pasar: es una tristeza vieja. Si es manejable, quédate un momento con ella y cuídala. Si es demasiado, para y elige una práctica de anclaje.' },
      ],
      cautions:
        'No uses esta práctica para revivir recuerdos de abuso o violencia: eso se trabaja sólo con un terapeuta formado. Si aparecen imágenes así, abre los ojos, apoya los pies en el piso y nombra cinco cosas que ves. ' + EXPLORACION,
      steps: [
        { title: 'Llegar', instruction: 'Siéntate cómodo, con los pies en el piso. Respira despacio y alarga la exhalación.', durationSec: 45, kind: 'breath' },
        { title: 'Un lugar seguro', instruction: 'Imagina un lugar de hoy donde te sientes a salvo. Puede ser real o inventado. Nota sus colores y sus sonidos.', durationSec: 60, kind: 'breath' },
        { title: 'Tu parte niña', instruction: 'Imagina que llega tu parte niña, la que se asusta o se siente sola. Mírala desde tu edad de hoy.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que necesita', instruction: '¿Qué necesita ahora? Quizá que la abracen, que le digan que está a salvo o que alguien la escuche.', durationSec: 60, kind: 'reflection' },
        { title: 'Dárselo', instruction: 'Imagina que se lo das. Dile algo como: «Estoy aquí. Ahora te cuido yo. No estás sola».', durationSec: 75, kind: 'breath' },
        { title: 'Una promesa chica', instruction: '¿Qué vas a hacer hoy para cuidar esa parte? Elige algo pequeño y concreto.', durationSec: 45, kind: 'reflection' },
        { title: 'Volver', instruction: 'Deja la imagen despacio. Siente los pies, abre los ojos y mira a tu alrededor.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'dar-lugar-al-nino-feliz',
      title: 'Dar lugar al niño feliz',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Recordar qué te hacía jugar y disfrutar de chico, y hacerle un lugar esta semana a la espontaneidad y al juego.',
      mechanism: 'El juego y el disfrute cubren una necesidad básica que a menudo queda postergada. Darles un lugar fortalece el modo niño feliz.',
      evidenceLevel: 'preliminar',
      evidence: [LOCKWOOD_2012, YOUNG_2003],
      howItWorks: [
        'Young propone cinco necesidades emocionales básicas. Una de ellas es la espontaneidad y el juego. Cuando crecemos con mucha exigencia, esa necesidad queda al final de la lista.',
        'El modo «niño feliz» es la parte que juega, se ríe y se siente conectada. La terapia de esquemas no sólo trabaja lo que duele: también busca que esta parte tenga más lugar.',
      ],
      tips: [
        'No tiene que ser productivo. Ese es el punto.',
        'Si te cuesta recordar juegos de la infancia, piensa en algo que hoy te hace perder la noción del tiempo.',
        'Si aparece una voz que dice «es una pérdida de tiempo», reconócela: es el crítico exigente.',
      ],
      obstacles: [{ q: 'No tengo tiempo para jugar.', a: 'Empieza por diez minutos. Bailar una canción, dibujar o jugar con un chico o una mascota ya cuenta.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Suelta los hombros y la mandíbula.', durationSec: 30, kind: 'breath' },
        { title: 'Recordar', instruction: '¿A qué jugabas de chico? ¿Qué te hacía reír o perder la noción del tiempo?', durationSec: 75, kind: 'reflection' },
        { title: 'Sentirlo', instruction: 'Elige uno de esos recuerdos lindos. Nota cómo se siente en el cuerpo recordarlo.', durationSec: 45, kind: 'breath' },
        { title: 'Hoy', instruction: '¿Qué actividad de hoy tiene algo de eso? Puede ser bailar, dibujar, cocinar, jugar o salir al aire libre.', durationSec: 60, kind: 'reflection' },
        { title: 'Un lugar en la semana', instruction: 'Elige un día y un horario para hacerla. Anótalo como harías con algo importante.', durationSec: 45, kind: 'reflection' },
      ],
    },
  ],

  meta: {
    'reconocer-el-modo': { level: 'intermedio', approaches: ['esquemas'], module: 'autoconocimiento', prerequisites: ['adulto-sano'] },
    'tres-formas-de-afrontar': { level: 'intermedio', approaches: ['esquemas'], module: 'autoconocimiento' },
    'tarjeta-del-esquema': { level: 'intermedio', approaches: ['esquemas', 'tcc'], module: 'autoconocimiento', prerequisites: ['tres-formas-de-afrontar'] },
    'dialogo-con-el-critico': {
      level: 'avanzado',
      approaches: ['esquemas', 'gestalt', 'cft'],
      module: 'autocompasion',
      prerequisites: ['reconocer-el-modo'],
      risk: { level: 2, alternative: 'pausa-autocompasion' },
    },
    'cuidar-a-la-parte-vulnerable': {
      level: 'avanzado',
      approaches: ['esquemas', 'cft'],
      module: 'autocompasion',
      prerequisites: ['adulto-sano'],
      risk: { level: 2, alternative: 'mano-en-el-pecho' },
    },
    'dar-lugar-al-nino-feliz': { level: 'iniciacion', approaches: ['esquemas', 'positiva'], module: 'bienestar' },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'terapia-de-esquemas',
      title: 'Terapia de esquemas: los patrones que aprendimos de chicos',
      subtitle: 'Necesidades, esquemas, modos y formas de afrontar: el mapa de Jeffrey Young para entender por qué repetimos lo que nos duele.',
      category: 'Autoconocimiento y patrones',
      readingMin: 9,
      keyPoints: [
        'Los esquemas se forman cuando necesidades emocionales básicas no se cubren en la infancia.',
        'Young describe 18 esquemas agrupados en cinco dominios.',
        'Ante un esquema solemos rendirnos, evitarlo o sobrecompensar; las tres formas lo mantienen.',
        'El objetivo es fortalecer el adulto sano, la parte que cuida las necesidades sin dañarte.',
        'La evidencia es de la terapia completa con terapeuta; aquí se ofrece como exploración.',
      ],
      sections: [
        {
          heading: 'Cinco necesidades básicas',
          paragraphs: [
            'Jeffrey Young desarrolló la terapia de esquemas en los años noventa. Partió de la terapia cognitiva y sumó ideas del apego, la Gestalt y el psicoanálisis. Su punto de partida es simple: todos los chicos tienen necesidades emocionales básicas.',
            'Young propone cinco: vínculos seguros con otros; autonomía y sentido de capacidad; libertad para expresar lo que uno siente y necesita; espontaneidad y juego; y límites realistas que enseñen el autocontrol. Cuando alguna se cubre poco, o de mal modo, la mente se adapta como puede.',
          ],
        },
        {
          heading: 'Qué es un esquema',
          paragraphs: [
            'Un esquema es un patrón amplio de recuerdos, emociones, sensaciones y creencias sobre uno mismo y los demás. Se forma en la infancia y se refuerza con los años. Cuando algo lo despierta, se siente como una verdad: «me van a abandonar», «no soy suficiente», «tengo que hacerlo todo perfecto».',
            'Young describe 18 esquemas en cinco dominios: desconexión y rechazo; autonomía deteriorada; límites insuficientes; orientación hacia los demás; e hipervigilancia e inhibición. En el explorador de esquemas del Laboratorio puedes leer cada uno con ejemplos. No es un test: es un mapa para reconocerte.',
          ],
        },
        {
          heading: 'Tres formas de afrontar',
          paragraphs: [
            'Ante un esquema, reaccionamos de tres maneras. Rendirse es actuar como si fuera cierto. Evitar es alejarse de todo lo que lo despierta. Sobrecompensar es hacer lo contrario con mucha fuerza.',
            'Las tres tuvieron sentido cuando las aprendiste: te protegieron. El problema es que hoy mantienen el esquema. Quien evita los vínculos por miedo al abandono nunca comprueba que alguien se puede quedar.',
          ],
        },
        {
          heading: 'Los modos: las partes que se turnan',
          paragraphs: [
            'Con el tiempo, Young y luego Arnoud Arntz pusieron el foco en los «modos». Un modo es el estado en el que estás en un momento. Hay modos niños, como el niño vulnerable o el niño enojado. Hay modos críticos, que castigan o exigen. Hay modos de afrontamiento, como el protector desapegado, que desconecta las emociones.',
            'Y hay dos modos sanos: el adulto sano y el niño feliz. El trabajo consiste en reconocer qué modo está al mando, cuidar a las partes niñas, ponerle límite al crítico y fortalecer al adulto sano. Así, poco a poco, la persona aprende a darse lo que no recibió.',
          ],
        },
        {
          heading: 'Cómo trabaja la terapia',
          paragraphs: [
            'En la consulta, el terapeuta ofrece un cuidado limitado, dentro de los límites de la relación profesional, para cubrir en parte esas necesidades. Se usan técnicas cognitivas, ejercicios con sillas, cambios de conducta y trabajo con imágenes.',
            'Una técnica central es la reescritura de imágenes: se vuelve a imaginar una escena dolorosa y se cambia su final, con el adulto que protege. Funciona bien en estudios clínicos (Arntz, 2012), pero puede remover mucho. Por eso, en esta app no se hace con recuerdos: sólo se practica cuidar a la parte niña en el presente.',
          ],
        },
      ],
      caveat: {
        title: 'Qué dice la evidencia',
        body: 'Hay ensayos clínicos que muestran buenos resultados en el trastorno límite y otros trastornos de la personalidad (Giesen-Bloo y colaboradores, 2006; Bamelis y colaboradores, 2014). También hay estudios en depresión crónica, ansiedad y trastornos alimentarios, con resultados prometedores pero menos firmes (Taylor y colaboradores, 2017). Toda esa evidencia es de la terapia con un profesional. Los ejercicios de esta app son una puerta de entrada, no un tratamiento. No uses el mapa de esquemas para diagnosticarte ni para diagnosticar a otros.',
      },
      diagram: {
        title: 'Cómo se mantiene un esquema',
        nodes: ['Necesidad no cubierta en la infancia', 'Esquema («me van a dejar»)', 'Algo hoy lo despierta', 'Rendirse, evitar o sobrecompensar', 'El resultado parece confirmarlo'],
        caption: 'El adulto sano corta el ciclo: reconoce la necesidad y la cuida sin rendirse, sin huir y sin atacar.',
      },
      related: { practices: ['adulto-sano', 'reconocer-el-modo', 'tres-formas-de-afrontar', 'tarjeta-del-esquema', 'dialogo-con-el-critico'], articles: ['modos-de-esquema'] },
      references: [YOUNG_2003, YOUNG_KLOSKO_1993, LOCKWOOD_2012, ARNTZ_2012_IR, GIESEN_BLOO_2006, BAMELIS_2014, TAYLOR_2017],
    },
    {
      id: 'modos-de-esquema',
      title: 'Los modos: tu parte niña, tu crítico y tu adulto sano',
      subtitle: 'Una guía práctica para reconocer qué parte tuya está al mando y qué necesita cada una.',
      category: 'Autoconocimiento y patrones',
      readingMin: 7,
      keyPoints: [
        'Un modo es el estado emocional en el que estás ahora; todos cambiamos de modo durante el día.',
        'Las partes niñas necesitan cuidado; las críticas, un límite; las de afrontamiento, comprensión y alternativas.',
        'El adulto sano no elimina a las demás partes: las escucha y decide.',
      ],
      sections: [
        {
          heading: 'Las partes niñas',
          paragraphs: [
            'El niño vulnerable siente miedo, tristeza o soledad. Aparece cuando algo despierta un viejo dolor: un mensaje sin respuesta, una crítica, un rechazo. El niño enojado siente rabia porque una necesidad no se atiende. El niño impulsivo quiere lo que quiere ya, sin pensar en las consecuencias.',
            'Las partes niñas no son el problema. Son señales de necesidades. Lo que necesitan es que alguien las escuche y las cuide, y hoy ese alguien puedes ser tú.',
          ],
        },
        {
          heading: 'Las voces críticas',
          paragraphs: [
            'El crítico punitivo castiga: «eres un desastre», «te lo mereces». El crítico exigente no se conforma nunca: «podrías haberlo hecho mejor», «no descanses todavía». Muchas veces suenan como alguien de la historia de la persona.',
            'Con estas voces el trabajo es distinto. No se las convence ni se las consuela: se les pone un límite. El adulto sano puede tomar lo útil de una crítica sin aceptar el maltrato.',
          ],
        },
        {
          heading: 'Las formas de protegerte',
          paragraphs: [
            'El protector desapegado desconecta las emociones: todo da igual, nada duele. El que se rinde complace a los demás para evitar el conflicto. El sobrecompensador ataca, controla o se muestra superior. Todos nacieron para proteger a la parte niña.',
            'El costo es que la necesidad de fondo nunca se cubre. Con estas partes se trabaja con respeto: se les agradece lo que hicieron y se les muestra que hoy hay otras formas de cuidarse.',
          ],
        },
        {
          heading: 'El adulto sano y el niño feliz',
          paragraphs: [
            'El adulto sano es la parte que puede ver todo esto con calma. Cuida a las partes niñas, pone límites al crítico y elige conductas que sirven a largo plazo. No es perfecto ni está siempre: se fortalece con práctica.',
            'El niño feliz es la parte que juega, disfruta y se siente conectada. Cuanto más espacio tiene, más fácil es la vida. Por eso la terapia también busca momentos de juego y de alegría.',
          ],
        },
      ],
      caveat: {
        title: 'Partes, no personas',
        body: 'Hablar de partes es una forma de entender la experiencia, no de decir que hay varias personas dentro de ti. Si sientes que pierdes el tiempo, que no recuerdas cosas que hiciste o que no eres tú, consulta a un profesional: puede ser disociación y merece atención.',
      },
      related: { practices: ['reconocer-el-modo', 'dialogo-con-el-critico', 'cuidar-a-la-parte-vulnerable', 'dar-lugar-al-nino-feliz', 'adulto-sano'], articles: ['terapia-de-esquemas'] },
      references: [ARNTZ_JACOB_2012, JACOB_2015, YOUNG_2003, KELLOGG_2004],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'salir-del-patron',
      title: 'Salir del patrón',
      subtitle: 'Cuatro semanas con la terapia de esquemas: del esquema al adulto sano',
      description:
        'Para cuando sientes que repites las mismas historias: en la pareja, en el trabajo o contigo. Conocerás tus esquemas, verás cómo los afrontas, reconocerás tus modos y fortalecerás tu adulto sano. Es una exploración guiada y no reemplaza la terapia. Si tienes un terapeuta, compártelo con él o ella.',
      basis: 'Young, Klosko y Weishaar (2003); Arntz y Jacob (2012); Jacob, van Genderen y Seebauer (2015).',
      rhythm: '10 a 15 minutos al día, 4 o 5 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · El mapa',
          focus: 'Necesidades y esquemas',
          description: 'Leerás qué son los esquemas, explorarás el mapa del Laboratorio y anotarás un patrón que se repite.',
          practiceIds: ['adulto-sano'],
          articleIds: ['terapia-de-esquemas'],
          journalType: 'patron-repetido',
        },
        {
          title: 'Semana 2 · Cómo lo afronto',
          focus: 'Rendirme, escapar o contraatacar',
          description: 'Verás qué haces cuando el esquema se activa y escribirás tu primera tarjeta para esos momentos.',
          practiceIds: ['tres-formas-de-afrontar', 'tarjeta-del-esquema'],
          articleIds: [],
          journalType: 'tarjeta-esquema',
        },
        {
          title: 'Semana 3 · Mis modos',
          focus: 'Qué parte está al mando',
          description: 'Aprenderás a reconocer tus modos en el día a día con el diario de esquemas.',
          practiceIds: ['reconocer-el-modo', 'dar-lugar-al-nino-feliz'],
          articleIds: ['modos-de-esquema'],
          journalType: 'diario-esquemas',
        },
        {
          title: 'Semana 4 · El adulto sano',
          focus: 'Cuidar y poner límites',
          description: 'Practicarás cuidar a tu parte vulnerable y ponerle un límite al crítico. Si alguna práctica remueve mucho, usa la alternativa más suave.',
          practiceIds: ['cuidar-a-la-parte-vulnerable', 'dialogo-con-el-critico', 'pausa-autocompasion'],
          articleIds: [],
          journalType: 'diario-esquemas',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-que-es-un-esquema',
      title: '¿Por qué repito lo que me duele?',
      subtitle: 'Qué es un esquema y de dónde viene.',
      slides: [
        { heading: 'Lo que necesita un chico', text: 'Todo chico necesita sentirse seguro, capaz, escuchado, libre para jugar y con límites claros. Eso dice Jeffrey Young.' },
        { heading: 'Cuando falta algo', text: 'Si alguna de esas cosas falta, la mente se adapta. Aprende una regla para sobrevivir, como «mejor no pedir nada».' },
        { heading: 'El esquema', text: 'Esa regla se vuelve un esquema: una creencia profunda que se siente como verdad. Por ejemplo, «me van a dejar».' },
        { heading: 'Hoy se despierta', text: 'Años después, algo chico lo despierta. Un mensaje sin respuesta y sientes el miedo de entonces, con toda su fuerza.' },
        { heading: 'No es tu culpa', text: 'El esquema fue una forma de protegerte. Hoy puedes verlo, entenderlo y elegir otra respuesta. Con ayuda es más fácil.' },
      ],
      related: { practices: ['adulto-sano', 'tres-formas-de-afrontar'], articles: ['terapia-de-esquemas'] },
      references: [YOUNG_2003, LOCKWOOD_2012],
    },
    {
      id: 'pildora-cinco-dominios',
      title: 'Los cinco grupos de esquemas',
      subtitle: 'Un mapa rápido de los 18 esquemas de Young.',
      slides: [
        { heading: 'Desconexión', text: 'Miedo a que te dejen, a que te dañen o a no ser querido. Viene de vínculos poco seguros o fríos.' },
        { heading: 'Autonomía', text: 'Sentir que no puedes solo, que algo malo va a pasar o que vas a fracasar. Viene de la sobreprotección o de mensajes de incapacidad.' },
        { heading: 'Límites', text: 'Sentir que mereces más que otros o que no puedes frenarte. Viene de límites que faltaron.' },
        { heading: 'Los demás primero', text: 'Complacer, sacrificarte o buscar aprobación todo el tiempo. Viene de un amor que había que ganarse.' },
        { heading: 'Hipervigilancia', text: 'Exigirte de más, esconder lo que sientes o esperar lo peor. Viene de ambientes duros o con mucho control.' },
        { heading: 'Un mapa, no un test', text: 'Casi todos nos reconocemos en alguno. Sirve para entenderte, no para ponerte una etiqueta.' },
      ],
      related: { practices: ['tres-formas-de-afrontar'], articles: ['terapia-de-esquemas'] },
      references: [YOUNG_2003, YOUNG_KLOSKO_1993],
    },
    {
      id: 'pildora-modos',
      title: '¿Quién está al mando ahora?',
      subtitle: 'Las partes que se turnan dentro tuyo.',
      slides: [
        { heading: 'Partes', text: 'Durante el día pasamos de un estado a otro. La terapia de esquemas los llama modos.' },
        { heading: 'La parte niña', text: 'Siente miedo, tristeza o rabia. No es un problema. Es una señal de que necesita algo.' },
        { heading: 'El crítico', text: 'Te castiga o te exige sin parar. Suele sonar como alguien de tu historia. Necesita un límite.' },
        { heading: 'El protector', text: 'Te desconecta, te hace complacer o te pone a la defensiva. Te cuidó, pero hoy te aleja de lo que quieres.' },
        { heading: 'El adulto sano', text: 'Escucha a todas las partes y decide. Cuida a la niña y frena al crítico. Se fortalece con práctica.' },
      ],
      related: { practices: ['reconocer-el-modo', 'adulto-sano'], articles: ['modos-de-esquema'] },
      references: [ARNTZ_JACOB_2012],
    },
    {
      id: 'pildora-tres-formas',
      title: 'Rendirse, escapar o contraatacar',
      subtitle: 'Las tres formas de afrontar un esquema.',
      slides: [
        { heading: 'El esquema se activa', text: 'Supón que sientes que no vales. Hay tres formas típicas de reaccionar.' },
        { heading: 'Rendirte', text: 'Actúas como si fuera cierto. Aceptas un mal trato o no pides lo que necesitas.' },
        { heading: 'Escapar', text: 'Evitas lo que lo despierta. No te postulas, no te vinculas o te distraes sin parar.' },
        { heading: 'Contraatacar', text: 'Haces lo contrario con fuerza. Te muestras superior, controlas todo o necesitas ganar siempre.' },
        { heading: 'Una cuarta forma', text: 'Las tres alivian un rato y mantienen el esquema. El adulto sano busca otra: cuidar la necesidad sin dañarte.' },
      ],
      related: { practices: ['tres-formas-de-afrontar', 'tarjeta-del-esquema'], articles: ['terapia-de-esquemas'] },
      references: [YOUNG_2003],
    },
    {
      id: 'pildora-critico-interno',
      title: 'Tu crítico no siempre tiene razón',
      subtitle: 'Cómo ponerle un límite a la voz que te castiga.',
      slides: [
        { heading: 'Una voz conocida', text: '«Nunca haces nada bien.» «No descanses todavía.» Muchas personas tienen una voz así adentro.' },
        { heading: 'Es una parte', text: 'Esa voz no eres tú entero. Es una parte que aprendió a hablarte así, a veces para protegerte.' },
        { heading: 'No se discute', text: 'No hace falta ganarle cada argumento. Hace falta ponerle un límite: «Así no me hablo».' },
        { heading: 'Cuidar al herido', text: 'Después, mira a la parte que recibió el golpe. Háblale como a alguien que quieres.' },
        { heading: 'Si es muy fuerte', text: 'Si la voz se parece a alguien que te maltrató, trabájalo con un terapeuta. No tienes que hacerlo solo.' },
      ],
      related: { practices: ['dialogo-con-el-critico', 'pausa-autocompasion'], articles: ['modos-de-esquema'] },
      references: [ARNTZ_JACOB_2012, GILBERT_2009, KELLOGG_2004],
    },
  ],

  // ================================================================== glosario
  glossary: [
    {
      id: 'necesidades-emocionales-basicas',
      term: 'Necesidades emocionales básicas',
      definition:
        'En la terapia de esquemas, las cinco necesidades de todo chico: vínculos seguros, autonomía, libertad para expresarse, juego y límites realistas. Cuando no se cubren, se forman esquemas.',
      articleId: 'terapia-de-esquemas',
    },
    {
      id: 'modo-de-esquema',
      term: 'Modo',
      definition: 'El estado emocional en el que está una persona en un momento dado: una parte niña, una parte crítica, una forma de protegerse o el adulto sano. Todos cambiamos de modo durante el día.',
      articleId: 'modos-de-esquema',
      practiceId: 'reconocer-el-modo',
    },
    {
      id: 'adulto-sano',
      term: 'Adulto sano',
      definition: 'El modo que puede ver las demás partes con calma, cuidar las necesidades, poner límites al crítico y elegir conductas que sirven a largo plazo. La terapia de esquemas busca fortalecerlo.',
      practiceId: 'adulto-sano',
    },
    {
      id: 'protector-desapegado',
      term: 'Protector desapegado',
      definition: 'Un modo de afrontamiento que desconecta las emociones para no sufrir. Alivia en el momento, pero deja a la persona vacía o lejos de los demás.',
      articleId: 'modos-de-esquema',
    },
    {
      id: 'sobrecompensacion',
      term: 'Sobrecompensación',
      definition: 'Una de las tres formas de afrontar un esquema: hacer lo contrario de lo que el esquema dice, con mucha fuerza. Por ejemplo, mostrarse superior cuando uno se siente poca cosa.',
      practiceId: 'tres-formas-de-afrontar',
    },
    {
      id: 'reescritura-de-imagenes',
      term: 'Reescritura de imágenes',
      definition:
        'Técnica en la que se vuelve a imaginar una escena dolorosa y se cambia su final, con alguien que protege. Tiene buena evidencia, pero se hace con un terapeuta formado, no de forma autoguiada.',
      articleId: 'terapia-de-esquemas',
    },
    {
      id: 'reparentalizacion-limitada',
      term: 'Reparentalización limitada',
      definition: 'En la terapia de esquemas, el cuidado que ofrece el terapeuta, dentro de los límites de la relación profesional, para cubrir en parte las necesidades que faltaron.',
      articleId: 'terapia-de-esquemas',
    },
  ],
};
