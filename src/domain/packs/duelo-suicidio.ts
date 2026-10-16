import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Duelo por suicidio»: para quienes perdieron a alguien que murió por suicidio,
 * y para quienes los acompañan.
 *  - la culpa y el «¿por qué?»; el enojo junto al amor (Jordan, 2001);
 *  - estigma y silencio; qué decir a otros y a los chicos, según la edad y con verdad;
 *  - aniversarios y fechas que pesan;
 *  - grupos de sobrevivientes y posvención (Andriessen y colaboradores, 2017);
 *  - cuidar el propio riesgo: quienes atraviesan este duelo tienen más riesgo (Pitman y
 *    colaboradores, 2014), así que se invita a preguntarse y a pedir ayuda;
 *  - duelo complicado y cuándo consultar (Shear, 2015).
 *
 * Reglas de seguridad del paquete (pautas de comunicación segura, OMS 2017):
 *  - NUNCA se describen métodos, lugares ni detalles de la muerte; ninguna práctica pide
 *    recordar la escena ni cómo fue.
 *  - El suicidio no se presenta como solución, como algo comprensible «por» una sola causa
 *    ni como un acto heroico o romántico. Se repite que casi nunca hay una sola causa.
 *  - Se dice «murió por suicidio», nunca «cometió».
 *  - Todas las prácticas tienen precauciones con los recursos: 135 (CABA y GBA; resto del
 *    país 0800-345-1435), 0800-999-0091, 911, Línea 102 si son chicos y el botón Ayuda.
 *  - La práctica de la culpa es de riesgo 2, con alternativa 'mano-en-el-pecho'.
 */

// ------------------------------------------------------------ referencias
const JORDAN_2001: Reference = {
  citation: 'Jordan, J. R. (2001). Is suicide bereavement different? A reassessment of the literature. Suicide and Life-Threatening Behavior, 31(1), 91–102.',
};
const PITMAN_2014: Reference = {
  citation: 'Pitman, A., Osborn, D., King, M., & Erlangsen, A. (2014). Effects of suicide bereavement on mental health and suicide risk. The Lancet Psychiatry, 1(1), 86–94.',
};
const ANDRIESSEN_2017: Reference = {
  citation: 'Andriessen, K., Krysinska, K., & Grad, O. T. (Eds.) (2017). Postvention in action: The international handbook of suicide bereavement support. Hogrefe.',
};
const OMS_2017: Reference = {
  citation: 'Organización Mundial de la Salud (2017). Preventing suicide: A resource for media professionals (actualización 2017). OMS.',
};
const SHEAR_2015: Reference = {
  citation: 'Shear, M. K. (2015). Complicated grief. New England Journal of Medicine, 372(2), 153–160.',
};

/** Aviso común: ideas de morir y recursos. */
const CUIDADO =
  'Este duelo trae más riesgo para quienes lo atraviesan. Si aparecen ideas de morir o de quitarte la vida, no esperes: llama al 135 (CABA y GBA; resto del país 0800-345-1435), a la Línea Nacional de Salud Mental 0800-999-0091 o al 911, o usa el botón Ayuda de la app. Si es un chico o un adolescente quien lo necesita, también está la Línea 102. Esta práctica no reemplaza la ayuda profesional. Puedes parar cuando quieras.';

export const DUELO_SUICIDIO_PACK: ContentPack = {
  id: 'duelo-suicidio',

  // ================================================================== prácticas
  practices: [
    {
      id: 'el-por-que-sin-respuesta',
      title: 'El «¿por qué?» y la culpa',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Acompañar las preguntas que no tienen respuesta y la culpa que suele aparecer, sin cargar con una responsabilidad que no es tuya.',
      mechanism: 'La mente busca una causa para poder entender. Notar esa búsqueda, recordar que casi nunca hay una sola causa y hablarte con amabilidad baja el peso de la culpa.',
      evidenceLevel: 'preliminar',
      evidence: [JORDAN_2001, ANDRIESSEN_2017],
      howItWorks: [
        'Después de una muerte por suicidio, es muy común preguntarse «¿por qué?» una y otra vez. También es común la culpa: «Tendría que haberme dado cuenta», «Si hubiera llamado ese día». John Jordan revisó los estudios y encontró que estos temas aparecen más en este duelo que en otros (Jordan, 2001).',
        'El suicidio casi nunca tiene una sola causa. Suele haber muchas cosas juntas: sufrimiento, a veces una enfermedad, momentos de crisis. Nadie puede ver todo eso desde afuera. Lo que hoy sabes, antes no lo sabías.',
        'Esta práctica no busca una respuesta. Busca que puedas convivir con la pregunta y tratarte con la amabilidad con que tratarías a otra persona en tu lugar.',
      ],
      tips: [
        'La culpa no prueba que hayas hecho algo mal. Muchas veces es amor que no sabe dónde ir.',
        'Si la pregunta vuelve muchas veces al día, dale un rato fijo y después vuelve a lo que estabas haciendo.',
        'Hablarlo con otras personas que pasaron por lo mismo suele aliviar.',
      ],
      obstacles: [
        { q: 'Siento que sí fue mi culpa.', a: 'Es un sentimiento muy común y muy pesado. Pero ninguna persona sola causa un suicidio. Si la culpa no te deja vivir, habla con un profesional. No tienes que cargarla a solas.' },
        { q: 'Necesito saber por qué.', a: 'Es una necesidad muy humana. A veces aparecen algunas respuestas con el tiempo. Otras veces la pregunta queda abierta. Las dos cosas son posibles, y se puede seguir viviendo con ellas.' },
      ],
      cautions: CUIDADO,
      steps: [
        { title: 'Llegar', instruction: 'Siéntate en un lugar seguro. Apoya los pies en el suelo. Respira despacio tres veces.', durationSec: 30, kind: 'breath' },
        { title: 'Antes de empezar', instruction: '¿Hay ahora ideas de morir? Si las hay, deja esta práctica y llama al 135 o al 911, o toca el botón Ayuda.', durationSec: 20, kind: 'reflection' },
        { title: 'La pregunta', instruction: 'Escribe la pregunta que más vuelve. Sólo la pregunta. No hace falta contestarla ni escribir lo que pasó.', durationSec: 45, kind: 'reflection' },
        { title: 'Muchas cosas juntas', instruction: 'Dite despacio: «Casi nunca hay una sola causa. Yo no podía ver todo».', durationSec: 30, kind: 'breath' },
        { title: 'Lo que hoy sabes', instruction: 'Nota si te juzgas con lo que sabes ahora. Antes no lo sabías. Escribe una frase sobre eso.', durationSec: 45, kind: 'reflection' },
        { title: 'Como a otra persona', instruction: 'Imagina a alguien querido en tu lugar, con esta culpa. ¿Qué le dirías? Escríbelo para ti.', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho. Dite: «Esto duele mucho. Me acompaño». Vuelve a tu día con calma.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'enojo-y-amor-a-la-vez',
      title: 'Enojo y amor a la vez',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Darle lugar al enojo que a veces aparece en este duelo, sin que borre el amor ni se vuelva contra ti.',
      mechanism: 'Las emociones mezcladas confunden y dan culpa. Nombrarlas y aceptar que pueden estar juntas baja la lucha interna.',
      evidenceLevel: 'preliminar',
      evidence: [JORDAN_2001, SHEAR_2015],
      howItWorks: [
        'En este duelo puede aparecer enojo. Con la persona que murió, con uno mismo, con la familia, con el equipo de salud o con la vida. También puede aparecer una sensación de abandono o de rechazo (Jordan, 2001).',
        'El enojo no quiere decir que no la quieras. El amor y el enojo pueden estar juntos. Darle un lugar seguro al enojo, sin actuarlo contra nadie, suele aliviar.',
        'Si el enojo o la tristeza no bajan con los meses y no te dejan vivir, puede tratarse de un duelo complicado. Hay tratamientos que ayudan (Shear, 2015).',
      ],
      tips: [
        'Puedes escribir lo que sientes y no mostrarlo a nadie.',
        'Mover el cuerpo, como caminar rápido, ayuda a descargar.',
        'Si el enojo es con una persona viva, espera a estar en calma para hablar.',
      ],
      obstacles: [{ q: 'Me siento mal por enojarme con quien murió.', a: 'Es muy común y no te hace mala persona. Puedes enojarte y seguir queriéndola. Las dos cosas son parte del duelo.' }],
      cautions: CUIDADO,
      steps: [
        { title: 'Llegar', instruction: 'Siéntate. Respira despacio. Suelta el aire más largo de lo que entra.', durationSec: 30, kind: 'breath' },
        { title: 'Notar', instruction: 'Nota dónde sientes el enojo en el cuerpo. La mandíbula, el pecho, las manos.', durationSec: 40, kind: 'instruction' },
        { title: 'Con quién', instruction: 'Escribe qué o quién te enoja hoy. Puede ser más de una cosa.', durationSec: 50, kind: 'reflection' },
        { title: 'Y también', instruction: 'Escribe una frase que empiece así: «Y también la quiero porque…».', durationSec: 50, kind: 'reflection' },
        { title: 'Juntos', instruction: 'Dite: «Puedo sentir enojo y amor a la vez. Las dos cosas son mías».', durationSec: 30, kind: 'breath' },
        { title: 'Descargar', instruction: 'Elige una forma segura de descargar hoy. Caminar, escribir o hablar con alguien.', durationSec: 40, kind: 'reflection' },
      ],
    },
    {
      id: 'contar-con-verdad',
      title: 'Qué contar y cómo',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Preparar qué decir a otras personas y a los chicos, con verdad, sin detalles y según la edad.',
      mechanism: 'El silencio y el estigma aíslan. Tener palabras preparadas, simples y verdaderas, reduce la angustia de cada conversación y protege a los chicos.',
      evidenceLevel: 'preliminar',
      evidence: [ANDRIESSEN_2017, OMS_2017],
      howItWorks: [
        'Muchas familias no saben qué decir. A veces callan por vergüenza o por miedo a lo que piensen los demás. Pero el silencio suele dejar a cada uno solo con su dolor (Andriessen y colaboradores, 2017).',
        'Con los chicos, suele ayudar decir la verdad con palabras simples, según la edad. No hace falta dar detalles de cómo fue. Lo importante es que sepan que no fue su culpa, que pueden preguntar y que hay adultos que los cuidan.',
        'Con otras personas, tú eliges cuánto contar. Una frase breve alcanza. Hablar de «murió por suicidio», y no de «cometió», ayuda a quitar culpa y estigma (OMS, 2017).',
      ],
      tips: [
        'Para los más chicos: «Murió. Su cuerpo dejó de funcionar y no va a volver».',
        'Para explicar el suicidio: «Sufría mucho por dentro, como una enfermedad. Siempre hay ayuda para ese dolor».',
        'Repite siempre: «No fue tu culpa. Puedes preguntarme lo que quieras».',
      ],
      obstacles: [
        { q: '¿Y si me preguntan cómo fue?', a: 'No hace falta contar detalles, ni a chicos ni a adultos. Puedes decir: «Prefiero no hablar de eso». Si tienes dudas con un chico, consulta con un profesional cómo responder.' },
        { q: 'Prefiero que los chicos no sepan.', a: 'Es un deseo de protegerlos. Pero los chicos suelen darse cuenta o enterarse por otros. Saberlo de alguien que los quiere, con palabras simples, suele ser menos dañino.' },
      ],
      cautions: `${CUIDADO} Si un chico se ve muy angustiado, deja de comer o de dormir, o habla de morir, consulta pronto con un profesional.`,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Hoy sólo preparas palabras. No tienes que hablar con nadie todavía.', durationSec: 30, kind: 'breath' },
        { title: 'A quién', instruction: 'Haz una lista de personas a quienes quieres o necesitas contarle. Los chicos, la familia, el trabajo.', durationSec: 50, kind: 'reflection' },
        { title: 'Una frase', instruction: 'Escribe una frase corta y verdadera. Por ejemplo: «Murió por suicidio. Estamos muy tristes».', durationSec: 50, kind: 'reflection' },
        { title: 'Para los chicos', instruction: 'Si hay chicos, escribe palabras simples según su edad. Sin detalles. Agrega: «No fue tu culpa».', durationSec: 60, kind: 'reflection' },
        { title: 'Un límite', instruction: 'Escribe una frase para cortar preguntas de más. Por ejemplo: «Prefiero no hablar de eso».', durationSec: 40, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho. Dite: «Puedo contar la verdad a mi ritmo».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'mi-cuidado-en-este-duelo',
      title: 'Cuidarte en este duelo',
      family: 'attentional',
      skills: ['attention', 'resilience'],
      summary: 'Preguntarte cómo estás de verdad, notar señales de alarma en ti y tener a mano a quién llamar.',
      mechanism: 'Quienes atraviesan este duelo tienen más riesgo. Preguntarse con honestidad y dejar listo un plan corto hace más fácil pedir ayuda a tiempo.',
      evidenceLevel: 'moderada',
      evidence: [PITMAN_2014, ANDRIESSEN_2017],
      howItWorks: [
        'Un estudio que revisó muchas investigaciones encontró que perder a alguien por suicidio se asocia con más riesgo de depresión y de suicidio en quienes quedan (Pitman y colaboradores, 2014). No es un destino. Es una razón para cuidarse más.',
        'Preguntarte si tienes ideas de morir no las provoca. Al revés: nombrarlas permite pedir ayuda. Si aparecen, no estás fallando. Estás sufriendo y mereces apoyo.',
        'Esta práctica es corta. Puedes repetirla cada semana, y también cerca de fechas difíciles.',
      ],
      tips: [
        'Guarda en el celular el 135 y el 0800-999-0091.',
        'Elige una persona a quien puedas decirle «hoy estoy mal» sin explicar más.',
        'La app tiene un plan de seguridad que puedes completar con calma.',
      ],
      obstacles: [{ q: 'Me da miedo admitir que a veces pienso en morir.', a: 'Muchas personas en este duelo lo piensan alguna vez. Decirlo es un acto de cuidado, no de debilidad. Llama al 135 o al 0800-999-0091, o cuéntaselo a alguien de confianza hoy.' }],
      cautions: CUIDADO,
      steps: [
        { title: 'Llegar', instruction: 'Apoya los pies en el suelo. Respira despacio. Nota que estás aquí.', durationSec: 30, kind: 'breath' },
        { title: 'Cómo estoy', instruction: 'Pregúntate con honestidad: ¿cómo estoy esta semana? Del uno al diez. Anótalo.', durationSec: 30, kind: 'reflection' },
        { title: 'La pregunta importante', instruction: '¿Tengo ideas de morir o de no querer estar? Si la respuesta es sí, llama hoy al 135 o al 0800-999-0091.', durationSec: 30, kind: 'reflection' },
        { title: 'Señales', instruction: 'Nota otras señales. Dormir muy poco, beber más, aislarte, no comer. Anota las que veas.', durationSec: 40, kind: 'reflection' },
        { title: 'A quién llamar', instruction: 'Escribe el nombre y el número de una persona de confianza. Y el 135 al lado.', durationSec: 30, kind: 'reflection' },
        { title: 'Un cuidado', instruction: 'Elige un cuidado chico para hoy. Comer algo, salir un rato, mandar un mensaje.', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'fechas-que-pesan',
      title: 'Fechas que pesan',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Prepararte para un aniversario, un cumpleaños o una fiesta: decidir qué hacer, con quién y cómo cuidarte.',
      mechanism: 'Las fechas importantes suelen traer de vuelta el dolor. Anticiparlas y tener un plan reduce la sorpresa y la soledad.',
      evidenceLevel: 'preliminar',
      evidence: [ANDRIESSEN_2017, SHEAR_2015],
      howItWorks: [
        'Los aniversarios, cumpleaños y fiestas suelen ser días difíciles. A veces el dolor sube días antes. Es una reacción esperable del duelo, no un retroceso (Shear, 2015).',
        'Ayuda decidir antes qué quieres hacer ese día. Algunas personas prefieren un ritual. Otras, estar con alguien o hacer algo distinto. No hay una forma correcta.',
      ],
      tips: [
        'Avisa a alguien de confianza que esa fecha se acerca.',
        'Puedes cambiar los planes el mismo día si lo necesitas.',
        'Cerca de esas fechas, revisa cómo estás y pide ayuda si hace falta.',
      ],
      obstacles: [{ q: 'La familia quiere hacer cosas distintas.', a: 'Es común. Cada persona hace su duelo a su manera. Pueden acordar un momento juntos y otro libre para cada uno.' }],
      cautions: CUIDADO,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Piensa en la fecha que se acerca.', durationSec: 30, kind: 'breath' },
        { title: 'La fecha', instruction: 'Escribe qué fecha es y qué significa para ti.', durationSec: 40, kind: 'reflection' },
        { title: 'Qué quiero', instruction: '¿Cómo quieres pasar ese día? Con un ritual, con compañía, haciendo algo distinto. Anota una idea.', durationSec: 50, kind: 'reflection' },
        { title: 'Con quién', instruction: 'Escribe a quién vas a avisar que ese día es difícil para ti.', durationSec: 40, kind: 'reflection' },
        { title: 'Un plan B', instruction: 'Anota qué harás si el día se pone muy pesado. Una llamada, una salida, el botón Ayuda.', durationSec: 40, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho. Dite: «Ese día también me voy a cuidar».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'acompanar-un-duelo-por-suicidio',
      title: 'Acompañar a alguien en este duelo',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Para familiares y amistades: prepararte para estar cerca de alguien que perdió a una persona por suicidio, sin juzgar ni pedir detalles.',
      mechanism: 'Quienes atraviesan este duelo suelen sentir estigma y aislamiento. Una presencia simple y constante, sin juicio, es una de las ayudas más valiosas.',
      evidenceLevel: 'preliminar',
      evidence: [ANDRIESSEN_2017, JORDAN_2001],
      howItWorks: [
        'Muchas personas se alejan de quien perdió a alguien por suicidio porque no saben qué decir. Eso aumenta el aislamiento (Jordan, 2001). Estar cerca, aunque sea en silencio, ya ayuda.',
        'No hace falta tener respuestas. Ayuda escuchar, nombrar a la persona que murió y ofrecer ayuda concreta. Y seguir presente después de las primeras semanas, cuando los demás se alejan (Andriessen y colaboradores, 2017).',
      ],
      tips: [
        'Di: «Lo siento mucho. Estoy aquí». Eso alcanza.',
        'No preguntes cómo fue ni busques una causa.',
        'Evita frases como «Fue egoísta» o «Ya está en paz». Duelen o confunden.',
        'Si notas que la persona habla de morir, pregúntale con calma y ayúdala a llamar al 135.',
      ],
      obstacles: [{ q: 'Me da miedo decir algo que duela.', a: 'Es mejor acercarse con torpeza que alejarse. Si dices algo que no cae bien, puedes decir: «Perdón, no sé bien qué decir. Pero quiero estar».' }],
      cautions: `${CUIDADO} Si la persona que acompañas dice que piensa en morir, no la dejes sola y llamen juntos al 135 o al 911.`,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en la persona que quieres acompañar.', durationSec: 30, kind: 'breath' },
        { title: 'Qué necesita', instruction: 'Escribe qué crees que necesita hoy. Compañía, comida, ayuda con un trámite, silencio.', durationSec: 50, kind: 'reflection' },
        { title: 'Qué decir', instruction: 'Escribe una frase simple. Por ejemplo: «Lo siento mucho. Estoy aquí. ¿Quieres hablar de ella?».', durationSec: 45, kind: 'reflection' },
        { title: 'Qué no decir', instruction: 'Anota dos frases que vas a evitar. Por ejemplo, preguntar cómo fue o buscar culpables.', durationSec: 40, kind: 'reflection' },
        { title: 'Un gesto', instruction: 'Elige un gesto concreto para esta semana. Un mensaje, una visita, una comida.', durationSec: 40, kind: 'reflection' },
        { title: 'Más adelante', instruction: 'Anota en tu calendario volver a escribirle en un mes. Y en las fechas difíciles.', durationSec: 30, kind: 'reflection' },
      ],
    },
  ],

  meta: {
    'el-por-que-sin-respuesta': {
      level: 'intermedio',
      approaches: ['cft', 'escritura'],
      module: 'duelo',
      prerequisites: ['pausa-autocompasion'],
      risk: { level: 2, alternative: 'mano-en-el-pecho' },
    },
    'enojo-y-amor-a-la-vez': { level: 'intermedio', approaches: ['focalizada-emocion', 'act'], module: 'duelo', prerequisites: ['pausa-autocompasion'] },
    'contar-con-verdad': { level: 'iniciacion', approaches: ['sistemica', 'interpersonal'], module: 'duelo' },
    'mi-cuidado-en-este-duelo': { level: 'iniciacion', approaches: ['dbt', 'tcc'], module: 'duelo' },
    'fechas-que-pesan': { level: 'iniciacion', approaches: ['narrativa', 'interpersonal'], module: 'duelo', prerequisites: ['ritual-de-recuerdo'] },
    'acompanar-un-duelo-por-suicidio': { level: 'iniciacion', approaches: ['interpersonal', 'humanista'], module: 'duelo' },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'duelo-por-suicidio',
      title: 'Cuando alguien muere por suicidio',
      subtitle: 'La culpa, el «¿por qué?», el silencio y cómo cuidarte en un duelo que pesa distinto.',
      category: 'Etapas de la vida',
      readingMin: 10,
      keyPoints: [
        'Este duelo comparte mucho con otros duelos, pero suele traer más culpa, preguntas, enojo y estigma.',
        'El suicidio casi nunca tiene una sola causa. Nadie puede ver todo desde afuera.',
        'Decir «murió por suicidio», y no «cometió», ayuda a quitar culpa y vergüenza.',
        'Quienes atraviesan este duelo tienen más riesgo. Preguntarse y pedir ayuda es parte del cuidado.',
        'Los grupos de sobrevivientes y la ayuda profesional alivian. Ante ideas de morir: 135, 0800-999-0091 o 911.',
      ],
      sections: [
        {
          heading: 'Un duelo que pesa distinto',
          paragraphs: [
            'Perder a alguien por suicidio es una de las experiencias más duras que existen. En muchos aspectos, es un duelo como otros: tristeza, extrañar, idas y vueltas. Pero John Jordan revisó los estudios y encontró que suele traer más culpa, más preguntas sobre el «¿por qué?», más sensación de rechazo y más estigma (Jordan, 2001).',
            'No hay una forma correcta de vivirlo. Algunas personas sienten un dolor enorme y otras se sienten anestesiadas. Algunas sienten alivio, sobre todo si hubo mucho sufrimiento antes. Todo eso puede pasar y no te hace mala persona.',
          ],
        },
        {
          heading: 'La culpa y el «¿por qué?»',
          paragraphs: [
            'Es muy común repasar los últimos días buscando señales. «Tendría que haberme dado cuenta». «Si hubiera dicho otra cosa». La mente busca una causa para poder entender.',
            'Pero el suicidio casi nunca tiene una sola causa. Suele haber muchas cosas juntas que nadie puede ver por completo desde afuera. Lo que hoy sabes, antes no lo sabías. La culpa suele ser amor que no encuentra dónde ir.',
            'A veces aparecen algunas respuestas con el tiempo. Otras veces la pregunta queda abierta. Se puede aprender a vivir con ella.',
          ],
        },
        {
          heading: 'Enojo, estigma y silencio',
          paragraphs: [
            'También puede aparecer enojo: con quien murió, con uno mismo, con otros o con el sistema de salud. El enojo y el amor pueden estar juntos.',
            'El estigma hace que muchas familias callen. Otras personas se alejan porque no saben qué decir. El silencio aísla. Hablar con palabras simples y verdaderas, a tu ritmo, suele aliviar. Decir «murió por suicidio» es una forma clara y sin juicio (Organización Mundial de la Salud, 2017).',
          ],
        },
        {
          heading: 'Fechas difíciles',
          paragraphs: [
            'Los aniversarios, cumpleaños y fiestas suelen traer de vuelta el dolor, a veces desde días antes. Es esperable. Ayuda planear el día, avisar a alguien de confianza y tener un plan por si se pone muy pesado.',
          ],
        },
        {
          heading: 'Grupos de sobrevivientes',
          paragraphs: [
            'Se llama sobrevivientes a quienes perdieron a alguien por suicidio. En muchos lugares hay grupos de apoyo para ellos, presenciales o en línea. Escuchar a otras personas que pasaron por lo mismo suele quitar la sensación de ser la única persona que pasa por esto.',
            'Al apoyo que se ofrece después de un suicidio se le llama posvención. Incluye grupos, ayuda profesional y acompañamiento a familias, escuelas y lugares de trabajo (Andriessen y colaboradores, 2017). Puedes preguntar por grupos en tu centro de salud o en el 135.',
          ],
        },
        {
          heading: 'Cuidar tu propio riesgo',
          paragraphs: [
            'Quienes pierden a alguien por suicidio tienen más riesgo de depresión y de suicidio (Pitman y colaboradores, 2014). No es un destino, pero es una razón para cuidarse más.',
            'Pregúntate de vez en cuando si tienes ideas de morir. Preguntarlo no las provoca. Si aparecen, pide ayuda hoy: 135 (CABA y GBA; resto del país 0800-345-1435), 0800-999-0091 o 911. También puedes usar el botón Ayuda de la app.',
            'Consulta con un profesional si el dolor no baja con los meses, si no puedes dejar de pensar en la muerte de esa persona o si dejas de hacer tu vida. Puede ser un duelo complicado, y hay tratamientos que ayudan (Shear, 2015).',
          ],
        },
      ],
      caveat: {
        title: 'Lo que esta sección no hace',
        body: 'Aquí no se habla de cómo fue la muerte ni se busca una causa. La investigación sobre este duelo es todavía limitada y las ideas prácticas se apoyan sobre todo en la experiencia clínica y de los grupos de apoyo. Nada de esto reemplaza la ayuda profesional.',
      },
      diagram: {
        title: 'Un ciclo que suele repetirse',
        nodes: ['La pregunta «¿por qué?»', 'Repasar lo que pasó', 'Culpa', 'Silencio y aislamiento', 'Más preguntas'],
        caption: 'Hablarte con amabilidad, hablar con otras personas y pedir ayuda cortan el ciclo.',
      },
      related: {
        practices: ['el-por-que-sin-respuesta', 'enojo-y-amor-a-la-vez', 'mi-cuidado-en-este-duelo', 'fechas-que-pesan', 'contar-con-verdad', 'acompanar-un-duelo-por-suicidio', 'ritual-de-recuerdo', 'pausa-autocompasion'],
        articles: ['hablar-del-suicidio-en-la-familia', 'duelo-profundo', 'duelo'],
      },
      references: [JORDAN_2001, PITMAN_2014, ANDRIESSEN_2017, OMS_2017, SHEAR_2015],
    },
    {
      id: 'hablar-del-suicidio-en-la-familia',
      title: 'Hablar de un suicidio con otros y con los chicos',
      subtitle: 'Qué decir, según la edad y con verdad, y cómo acompañar a quien está de duelo.',
      category: 'Relaciones',
      readingMin: 7,
      keyPoints: [
        'Con los chicos, suele ayudar decir la verdad con palabras simples, según la edad y sin detalles.',
        'Repite que no fue su culpa, que pueden preguntar y que hay adultos que los cuidan.',
        'Con otras personas, tú eliges cuánto contar. Una frase breve alcanza.',
        'Para acompañar: estar cerca, escuchar, nombrar a quien murió y no pedir detalles.',
      ],
      sections: [
        {
          heading: 'Con los chicos',
          paragraphs: [
            'Muchas familias quieren proteger a los chicos con el silencio. Pero los chicos suelen darse cuenta de que algo pasa, o se enteran por otros. Saberlo por alguien que los quiere suele ser menos dañino (Andriessen y colaboradores, 2017).',
            'Con los más chicos, alcanza con palabras muy simples: «Murió. Su cuerpo dejó de funcionar y no va a volver». Más adelante, o con chicos más grandes, puedes decir: «Murió por suicidio. Sufría mucho por dentro, como una enfermedad. Siempre hay ayuda para ese dolor».',
            'No hace falta contar cómo fue. Si preguntan, puedes responder: «Eso no es importante ahora. Lo importante es que no fue tu culpa». Repite que pueden preguntar lo que quieran y que van a estar cuidados.',
            'Consulta con un profesional si un chico deja de comer o de dormir, se aísla mucho o habla de morir. La Línea 102 también orienta sobre niñez y adolescencia.',
          ],
        },
        {
          heading: 'Con otras personas',
          paragraphs: [
            'Tú eliges cuánto contar y a quién. Una frase breve alcanza: «Murió por suicidio. Estamos muy tristes». Si alguien pregunta de más, puedes decir: «Prefiero no hablar de eso».',
            'Las pautas de comunicación segura recomiendan no dar detalles sobre la muerte y no presentar el suicidio como una salida (Organización Mundial de la Salud, 2017). Esto también vale en redes sociales y grupos de mensajes.',
          ],
        },
        {
          heading: 'Para quien acompaña',
          paragraphs: [
            'Lo que más ayuda es simple: «Lo siento mucho. Estoy aquí». Escuchar sin juzgar. Nombrar a la persona que murió. Ofrecer ayuda concreta, como llevar comida o hacer un trámite.',
            'Evita preguntar cómo fue, buscar culpables o decir frases como «Fue egoísta» o «Ya está en paz». Y sigue presente después de las primeras semanas, cuando muchos se alejan (Jordan, 2001).',
            'Si la persona que acompañas dice que piensa en morir, no la dejes sola. Llamen juntos al 135 o al 911.',
          ],
        },
      ],
      caveat: {
        title: 'Un matiz',
        body: 'Cada familia y cada chico son distintos. Estas ideas vienen de la experiencia clínica y de los grupos de apoyo más que de ensayos. Si tienes dudas sobre qué decirle a un chico, un profesional puede ayudarte a encontrar las palabras.',
      },
      related: {
        practices: ['contar-con-verdad', 'acompanar-un-duelo-por-suicidio', 'mi-cuidado-en-este-duelo'],
        articles: ['duelo-por-suicidio', 'duelo'],
      },
      references: [ANDRIESSEN_2017, OMS_2017, JORDAN_2001],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'despues-de-un-suicidio',
      title: 'Después de un suicidio',
      subtitle: 'Cuatro semanas para un duelo que pesa distinto',
      description:
        'Para quien perdió a alguien que murió por suicidio. Acompañarás la culpa y las preguntas, le darás lugar al enojo, prepararás qué contar y te cuidarás en las fechas difíciles. Cada semana incluye una revisión de cómo estás. No reemplaza la ayuda profesional. Si aparecen ideas de morir, llama al 135 o al 0800-999-0091.',
      basis: 'Jordan (2001); Pitman y colaboradores (2014); Andriessen y colaboradores (2017); Shear (2015).',
      rhythm: 'Unos minutos, 3 o 4 días por semana, a tu ritmo. Puedes pausar o repetir cualquier semana.',
      weeks: [
        {
          title: 'Semana 1 · Cuidarte primero',
          focus: 'Seguridad y compañía',
          description: 'Revisarás cómo estás, dejarás listo a quién llamar y te tratarás con amabilidad.',
          practiceIds: ['mi-cuidado-en-este-duelo', 'mano-en-el-pecho'],
          articleIds: ['duelo-por-suicidio'],
        },
        {
          title: 'Semana 2 · Las preguntas y la culpa',
          focus: 'Convivir con el «¿por qué?»',
          description: 'Acompañarás las preguntas sin respuesta y le hablarás a tu culpa como a otra persona.',
          practiceIds: ['el-por-que-sin-respuesta', 'pausa-autocompasion'],
          articleIds: [],
          journalType: 'carta-compasiva',
        },
        {
          title: 'Semana 3 · Enojo, silencio y palabras',
          focus: 'Lo que se siente y lo que se cuenta',
          description: 'Le darás lugar al enojo y prepararás palabras verdaderas para otros y para los chicos.',
          practiceIds: ['enojo-y-amor-a-la-vez', 'contar-con-verdad'],
          articleIds: ['hablar-del-suicidio-en-la-familia'],
          journalType: 'escritura-expresiva',
        },
        {
          title: 'Semana 4 · El lazo y las fechas',
          focus: 'Recordar y seguir',
          description: 'Prepararás las fechas difíciles y buscarás una forma de recordar a quien murió.',
          practiceIds: ['fechas-que-pesan', 'ritual-de-recuerdo', 'mi-cuidado-en-este-duelo'],
          articleIds: [],
          journalType: 'valores',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-el-por-que',
      title: 'El «¿por qué?»',
      subtitle: 'La culpa y las preguntas después de un suicidio.',
      slides: [
        { heading: 'Una pregunta que vuelve', text: 'Después de un suicidio, el «¿por qué?» vuelve una y otra vez. Es muy común.' },
        { heading: 'La culpa', text: '«Tendría que haberme dado cuenta». Casi todas las personas en este duelo lo piensan.' },
        { heading: 'Muchas cosas juntas', text: 'El suicidio casi nunca tiene una sola causa. Nadie puede ver todo desde afuera.' },
        { heading: 'Antes no sabías', text: 'Lo que hoy sabes, antes no lo sabías. No te juzgues con lo que ves ahora.' },
        { heading: 'Pedir ayuda', text: 'Si la culpa no te deja vivir, habla con alguien. Si piensas en morir, llama al 135 o al 0800-999-0091.' },
      ],
      related: { practices: ['el-por-que-sin-respuesta'], articles: ['duelo-por-suicidio'] },
      references: [JORDAN_2001],
    },
    {
      id: 'pildora-contarles-a-los-chicos',
      title: 'Contarles a los chicos',
      subtitle: 'Con verdad, según la edad y sin detalles.',
      slides: [
        { heading: 'El silencio no protege', text: 'Los chicos suelen darse cuenta. Es mejor que lo sepan por alguien que los quiere.' },
        { heading: 'Palabras simples', text: 'A los más chicos: «Murió. Su cuerpo dejó de funcionar y no va a volver».' },
        { heading: 'Más grandes', text: '«Murió por suicidio. Sufría mucho por dentro. Siempre hay ayuda para ese dolor».' },
        { heading: 'Sin detalles', text: 'No hace falta contar cómo fue. Lo importante es que estén cuidados.' },
        { heading: 'No fue su culpa', text: 'Díselo muchas veces: «No fue tu culpa. Puedes preguntarme lo que quieras».' },
        { heading: 'Consultar', text: 'Si un chico deja de comer o de dormir, o habla de morir, consulta pronto. La Línea 102 orienta.' },
      ],
      related: { practices: ['contar-con-verdad'], articles: ['hablar-del-suicidio-en-la-familia'] },
      references: [ANDRIESSEN_2017, OMS_2017],
    },
    {
      id: 'pildora-acompanar-duelo-suicidio',
      title: 'Cómo acompañar',
      subtitle: 'Para estar cerca de alguien que perdió a una persona por suicidio.',
      slides: [
        { heading: 'Acercarse', text: 'Muchos se alejan porque no saben qué decir. Estar cerca ya ayuda.' },
        { heading: 'Qué decir', text: '«Lo siento mucho. Estoy aquí». No hace falta más.' },
        { heading: 'Qué evitar', text: 'No preguntes cómo fue. No busques culpables. No digas «fue egoísta».' },
        { heading: 'Nombrar', text: 'Nombra a la persona que murió. Recuerda las fechas difíciles.' },
        { heading: 'Seguir ahí', text: 'Escribe también al mes y a los tres meses. Ahí muchos ya se fueron.' },
        { heading: 'Si habla de morir', text: 'No la dejes sola. Llamen juntos al 135 o al 911.' },
      ],
      related: { practices: ['acompanar-un-duelo-por-suicidio'], articles: ['hablar-del-suicidio-en-la-familia'] },
      references: [JORDAN_2001, ANDRIESSEN_2017],
    },
    {
      id: 'pildora-cuidarte-en-este-duelo',
      title: 'Cuidarte también',
      subtitle: 'Este duelo trae más riesgo para quien lo vive.',
      slides: [
        { heading: 'Más riesgo', text: 'Quienes pierden a alguien por suicidio tienen más riesgo de depresión y de suicidio.' },
        { heading: 'No es un destino', text: 'No quiere decir que te vaya a pasar. Es una razón para cuidarte más.' },
        { heading: 'Preguntarte', text: '¿Tengo ideas de morir? Preguntarlo no las provoca. Ayuda a pedir ayuda a tiempo.' },
        { heading: 'A quién llamar', text: 'Guarda el 135 y el 0800-999-0091 en el celular. Y el número de alguien de confianza.' },
        { heading: 'Hay compañía', text: 'Hay grupos de sobrevivientes. Escuchar a otros que pasaron por esto alivia.' },
      ],
      related: { practices: ['mi-cuidado-en-este-duelo'], articles: ['duelo-por-suicidio'] },
      references: [PITMAN_2014, ANDRIESSEN_2017],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'sobreviviente-de-suicidio', term: 'Sobreviviente de una pérdida por suicidio', definition: 'Persona que perdió a alguien cercano que murió por suicidio. Es un duelo con más culpa, preguntas y estigma, y con más riesgo, por eso merece cuidado.', articleId: 'duelo-por-suicidio', practiceId: 'mi-cuidado-en-este-duelo' },
    { id: 'posvencion', term: 'Posvención', definition: 'Apoyo que se ofrece después de un suicidio a la familia, las amistades, la escuela o el trabajo: grupos, ayuda profesional y acompañamiento.', articleId: 'duelo-por-suicidio' },
    { id: 'murio-por-suicidio', term: '«Murió por suicidio»', definition: 'Forma clara y sin juicio de nombrar esta muerte. Se evita «cometió», que suena a delito y aumenta la culpa y el estigma.', articleId: 'hablar-del-suicidio-en-la-familia', practiceId: 'contar-con-verdad' },
    { id: 'grupo-de-sobrevivientes', term: 'Grupo de sobrevivientes', definition: 'Grupo de apoyo para personas que perdieron a alguien por suicidio. Compartir con quien pasó por lo mismo suele aliviar el aislamiento.', articleId: 'duelo-por-suicidio' },
    { id: 'reacciones-de-aniversario', term: 'Reacciones de aniversario', definition: 'Aumento del dolor cerca de fechas importantes, como el aniversario de una muerte o un cumpleaños. Es esperable en el duelo y ayuda anticiparlo.', practiceId: 'fechas-que-pesan' },
  ],
};
