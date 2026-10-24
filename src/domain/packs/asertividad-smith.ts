import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Asertividad: las técnicas de Manuel J. Smith y la culpa».
 *
 * Basado en Smith (1975), «When I say no, I feel guilty» (terapia asertiva sistemática), con el
 * respaldo general del entrenamiento asertivo (Speed y colaboradores, 2018) y los enlaces con la
 * efectividad interpersonal de la DBT (Linehan, 2015). Suma a lo que ya existe:
 *  - los derechos asertivos y la culpa usada para que cedas (iniciación);
 *  - aserción negativa: reconocer un error real sin hundirte ni justificarte de más;
 *  - interrogación negativa: pedir más detalles de una crítica para ver si sirve;
 *  - compromiso viable: negociar sin poner en juego tu respeto propio;
 *  - autorrevelación e información gratuita: abrir y sostener una conversación.
 * El disco rayado y el banco de niebla ya están en «el-no-amable» (necesidades-limites-diagnostico).
 *
 * Reglas de seguridad: con alguien violento no se negocia ni se ensaya ninguna técnica; primero
 * la seguridad (Línea 144, 911, botón Ayuda). Las técnicas son para cuidarte, no para manipular.
 * La lista de derechos se parafrasea; no hay citas textuales del libro.
 */

// ------------------------------------------------------------------ referencias
const SMITH_1975: Reference = { citation: 'Smith, M. J. (1975). When I say no, I feel guilty. Dial Press.' };
const SPEED_2018: Reference = {
  citation: 'Speed, B. C., Goldstein, B. L., & Goldfried, M. R. (2018). Assertiveness training: A forgotten evidence-based treatment. Clinical Psychology: Science and Practice, 25(1), e12216.',
  doi: '10.1111/cpsp.12216',
};
const LINEHAN_2015: Reference = { citation: 'Linehan, M. M. (2015). DBT skills training manual (2nd ed.). Guilford Press.' };

// ------------------------------------------------------------------ avisos
/** Con violencia no hay técnica: primero la seguridad. */
const SEGURIDAD =
  'Estas técnicas son para conversaciones entre personas que se respetan. Si la otra persona te grita, te amenaza, te golpea o te controla, no negocies ni discutas: prioriza tu seguridad. Puedes llamar a la Línea 144 (violencia de género), al 911 si hay peligro ahora o usar el botón Ayuda de la app.';

/** Las técnicas no se usan para manipular. */
const NO_MANIPULAR = ' Úsalas para cuidarte, no para ganar discusiones ni para presionar a nadie.';

export const ASERTIVIDAD_SMITH_PACK: ContentPack = {
  id: 'asertividad-smith',

  // ================================================================== prácticas
  practices: [
    {
      id: 'mis-derechos-asertivos',
      title: 'Mis derechos asertivos y la culpa que te hace ceder',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Repasar algunos derechos asertivos y aprender a notar cuándo te hacen sentir culpa para que digas que sí.',
      mechanism: 'Saber que tienes derecho a decidir por ti baja la culpa automática. Nombrar la culpa usada como presión permite elegir en lugar de ceder.',
      evidenceLevel: 'preliminar',
      evidence: [SMITH_1975, SPEED_2018],
      howItWorks: [
        'Manuel Smith, psicólogo de Estados Unidos, escribió en 1975 un libro sobre decir que no sin culpa (Smith, 1975). Propuso que muchas personas ceden porque aprendieron en la infancia a sentir culpa, ansiedad o torpeza cuando eligen por sí mismas. Otras personas, a veces sin darse cuenta, usan esas emociones para que hagamos lo que quieren.',
        'Smith resumió su idea en una serie de derechos asertivos. El principal es que tú eres quien juzga tu conducta, tus ideas y tus emociones, y quien se hace cargo de sus efectos. De ahí salen otros: no tener que dar excusas, cambiar de opinión, equivocarte y hacerte cargo, decir «no sé» o «no entiendo», y decidir si te toca resolver el problema de otra persona.',
        'Una culpa usada como presión suele tener señales: te hace sentir mala persona por elegir distinto, aparece aunque no dañaste a nadie y se calma sólo si cedes. Es distinta de la culpa que avisa que rompiste un valor propio, que se repara pidiendo perdón. El entrenamiento asertivo, que incluye este trabajo, tiene buena evidencia (Speed y colaboradores, 2018).',
      ],
      tips: [
        'Tener un derecho no te obliga a usarlo siempre. Tú eliges cuándo.',
        'Los demás tienen los mismos derechos que tú. También pueden decirte que no.',
        'Si la culpa aparece, pregúntate: «¿Dañé a alguien o sólo elegí distinto?».',
      ],
      obstacles: [
        { q: 'Si pienso en mis derechos, siento que soy egoísta.', a: 'Cuidar lo que necesitas no es egoísmo. Egoísmo sería negarle a los demás los mismos derechos. Aquí se trata de que cuenten las dos partes.' },
      ],
      cautions: SEGURIDAD,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Piensa en una vez que dijiste que sí y querías decir que no.', durationSec: 30, kind: 'breath' },
        { title: 'La frase', instruction: '¿Qué te dijeron para que cedieras? Por ejemplo: «Después de todo lo que hago por ti». Anótala.', durationSec: 45, kind: 'reflection' },
        { title: 'La culpa', instruction: '¿Sentiste culpa? Pregúntate si dañaste a alguien o si sólo ibas a elegir distinto.', durationSec: 40, kind: 'reflection' },
        { title: 'Tu derecho', instruction: 'Elige un derecho para esa escena. Por ejemplo: «Puedo decir que no sin dar excusas». Escríbelo con tus palabras.', durationSec: 45, kind: 'reflection' },
        { title: 'Para los dos', instruction: 'Recuerda que la otra persona tiene el mismo derecho. Puede pedirte cosas, y tú puedes decir que no.', durationSec: 30, kind: 'instruction' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho. Dite en voz baja: «Puedo sentir culpa y aun así elegir».', durationSec: 25, kind: 'breath' },
      ],
    },
    {
      id: 'admitir-un-error-sin-hundirme',
      title: 'Aserción negativa: admitir un error sin hundirte',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Reconocer con calma un error real, sin pedir perdón de más, sin justificarte y sin decir que eres un desastre.',
      mechanism: 'Aceptar un error cierto en pocas palabras corta la discusión y la culpa. Separar el hecho de tu valor como persona baja la vergüenza.',
      evidenceLevel: 'preliminar',
      evidence: [SMITH_1975, SPEED_2018],
      howItWorks: [
        'Cuando alguien señala un error tuyo, hay dos caminos comunes. Uno es hundirse: pedir perdón muchas veces y decir que no sirves para nada. El otro es defenderse: dar mil razones o atacar de vuelta.',
        'Smith llamó aserción negativa a una tercera opción (Smith, 1975). Si el error es real, lo reconoces con calma y en pocas palabras: «Es cierto, me olvidé de llamarte». No te castigas ni te excusas. Si hace falta, reparas lo que se pueda.',
        'Equivocarse y hacerse cargo es uno de los derechos asertivos que propuso Smith. El entrenamiento asertivo, que incluye responder a las críticas, tiene buena evidencia (Speed y colaboradores, 2018). Si la crítica no es cierta, esta técnica no corresponde: usa el banco de niebla o pregunta más.',
      ],
      tips: [
        'Habla del hecho, no de tu persona. «Llegué tarde» y no «soy un desastre».',
        'Una disculpa sincera alcanza. No hace falta repetirla.',
        'Si puedes reparar algo, dilo en una frase: «Mañana lo dejo listo».',
      ],
      obstacles: [
        { q: 'Si admito el error, van a pensar que soy incompetente.', a: 'Suele pasar lo contrario. Reconocer un error con calma muestra seguridad. Lo que más tensión genera es defenderse o hundirse.' },
      ],
      cautions: SEGURIDAD + ' Si te criticas con mucha dureza o te sientes sin valor la mayor parte del día, conviene hablarlo con un profesional.',
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en un error real que alguien te marcó hace poco.', durationSec: 30, kind: 'breath' },
        { title: 'El hecho', instruction: 'Escribe sólo lo que pasó, sin juicios. Por ejemplo: «Me olvidé de pagar la luz».', durationSec: 45, kind: 'reflection' },
        { title: 'Lo pasivo', instruction: 'Escribe lo que dirías si te hundes: «Perdón, perdón, soy un desastre». Míralo sin juzgarte.', durationSec: 35, kind: 'reflection' },
        { title: 'Lo agresivo', instruction: 'Escribe lo que dirías si te defiendes: «¿Y tú nunca te olvidas de nada?». Míralo también.', durationSec: 35, kind: 'reflection' },
        { title: 'Lo asertivo', instruction: 'Ahora escribe una frase corta y tranquila: «Es cierto, me olvidé. Fue un error». Sin excusas largas.', durationSec: 45, kind: 'reflection' },
        { title: 'Reparar', instruction: 'Si se puede reparar, suma una frase: «Hoy lo pago». Si no, alcanza con reconocerlo.', durationSec: 35, kind: 'reflection' },
        { title: 'Ensayo', instruction: 'Di tu frase en voz alta, con voz pausada. Repítela hasta que suene firme y no de rodillas.', durationSec: 40, kind: 'instruction' },
        { title: 'Tu valor', instruction: 'Pon una mano en el pecho. Dite: «Me equivoqué en esto. Sigo valiendo lo mismo».', durationSec: 25, kind: 'breath' },
      ],
    },
    {
      id: 'preguntar-por-la-critica',
      title: 'Interrogación negativa: preguntar por la crítica',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Ante una crítica vaga, pedir con calma que te digan más, para saber si es útil o si sólo busca que cedas.',
      mechanism: 'Preguntar con curiosidad, en vez de defenderte, baja la tensión. La respuesta muestra si hay algo concreto que cambiar o si la crítica es una presión.',
      evidenceLevel: 'preliminar',
      evidence: [SMITH_1975, SPEED_2018],
      howItWorks: [
        'Algunas críticas son vagas: «Siempre haces lo mismo», «No es manera». Cuesta saber qué quiere la otra persona. Si te defiendes enseguida, la discusión crece y nunca se aclara.',
        'Smith propuso la interrogación negativa (Smith, 1975). Consiste en pedir más información sobre la crítica, con tono tranquilo: «¿Qué es lo que te molesta de cómo lo hice?». Si la crítica es útil, aparece algo concreto que puedes mejorar. Si sólo busca que cedas, al preguntar se nota que no hay mucho detrás.',
        'La clave es la curiosidad real, no la ironía. Preguntar así también invita a la otra persona a decir lo que quiere de forma directa. Esta habilidad forma parte del entrenamiento asertivo (Speed y colaboradores, 2018).',
      ],
      tips: [
        'Pregunta por lo concreto: «¿Qué parte?», «¿Cuándo pasó?».',
        'No tienes que estar de acuerdo con lo que te digan. Primero escuchas, después decides.',
        'Si la crítica es cierta, puedes seguir con la aserción negativa.',
      ],
      obstacles: [
        { q: 'Si pregunto, me van a criticar todavía más.', a: 'Puede pasar un rato. Pero muchas veces la crítica se agota rápido o se vuelve concreta. Si la otra persona te humilla, puedes cortar la conversación.' },
      ],
      cautions: SEGURIDAD + ' Si alguien te critica para humillarte de forma constante, no hace falta pedirle más detalles. Puedes cortar la conversación.',
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Piensa en una crítica vaga que te hicieron hace poco.', durationSec: 30, kind: 'breath' },
        { title: 'La crítica', instruction: 'Escribe la crítica tal como te la dijeron. Por ejemplo: «Nunca te importa lo que pienso».', durationSec: 40, kind: 'reflection' },
        { title: 'Lo que harías', instruction: '¿Qué sueles hacer? ¿Callas y cedes, o te defiendes y atacas? Anótalo sin juzgarte.', durationSec: 35, kind: 'reflection' },
        { title: 'Tu pregunta', instruction: 'Escribe una pregunta tranquila: «No entiendo bien. ¿Qué hice que te hizo sentir así?».', durationSec: 45, kind: 'reflection' },
        { title: 'Una más', instruction: 'Imagina que responde algo vago. Prepara otra pregunta: «¿Hay algo más que te moleste?».', durationSec: 40, kind: 'reflection' },
        { title: 'Útil o presión', instruction: 'Imagina la respuesta. ¿Hay algo concreto que puedes mejorar? ¿O sólo te piden que cedas?', durationSec: 45, kind: 'reflection' },
        { title: 'Ensayo', instruction: 'Di tus preguntas en voz alta, con curiosidad real y sin ironía. Afloja los hombros.', durationSec: 40, kind: 'instruction' },
      ],
    },
    {
      id: 'un-acuerdo-que-me-respete',
      title: 'Compromiso viable: un acuerdo que te respete',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Buscar un punto medio en un conflicto práctico, sabiendo de antemano qué cosas no negocias porque tocan tu respeto propio.',
      mechanism: 'Negociar lo práctico permite que las dos partes ganen algo. Separar antes lo negociable de lo que no lo es evita ceder por culpa.',
      evidenceLevel: 'preliminar',
      evidence: [SMITH_1975, SPEED_2018, LINEHAN_2015],
      howItWorks: [
        'Decir que no siempre no es la meta. Muchos conflictos son prácticos: quién lleva a los chicos, cuándo se paga una deuda, cómo se reparten las tareas. Ahí suele convenir un acuerdo.',
        'Smith llamó compromiso viable a ofrecer un punto medio cuando lo que está en juego es práctico (Smith, 1975). Pero marcó un límite claro: si lo que se pone en juego es tu valor o tu respeto propio, no hay nada que negociar.',
        'La DBT también incluye negociar en la guía DEAR MAN, y propone cuidar el respeto propio con la guía FAST (Linehan, 2015). El entrenamiento asertivo, que incluye estas habilidades, tiene buena evidencia (Speed y colaboradores, 2018).',
      ],
      tips: [
        'Antes de hablar, escribe qué puedes ceder y qué no.',
        'Ofrece algo concreto: un día, un horario, una parte.',
        'Si te piden que dejes de ser quien eres, no es una negociación. Puedes decir que no.',
      ],
      obstacles: [
        { q: 'Siempre termino cediendo más de lo que quería.', a: 'Pasa mucho cuando no decidiste antes tu límite. Escríbelo y llévalo a mano. Si dudas en el momento, pide tiempo: «Lo pienso y te digo mañana».' },
      ],
      cautions: SEGURIDAD + NO_MANIPULAR,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en un conflicto práctico con alguien, como un horario o una tarea.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que quiero', instruction: 'Escribe en una frase lo que quieres tú. Después, lo que crees que quiere la otra persona.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que no negocio', instruction: '¿Hay algo que toca tu respeto propio? Por ejemplo, que te traten mal. Eso no se negocia. Anótalo.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que puedo ceder', instruction: 'Escribe dos cosas que sí podrías ceder. Un día, una parte del trabajo, un horario.', durationSec: 40, kind: 'reflection' },
        { title: 'Tu propuesta', instruction: 'Arma una propuesta concreta: «Esta semana los llevo yo el lunes y el martes. ¿Tú puedes el resto?».', durationSec: 45, kind: 'reflection' },
        { title: 'Si insisten', instruction: 'Si te piden lo que no negocias, repite con calma: «Eso no. Lo otro, lo hablamos».', durationSec: 35, kind: 'instruction' },
        { title: 'Ensayo', instruction: 'Di tu propuesta en voz alta, con voz firme y tranquila. Nota cómo se siente.', durationSec: 35, kind: 'instruction' },
      ],
    },
    {
      id: 'abrir-una-conversacion',
      title: 'Autorrevelación e información gratuita: abrir una conversación',
      family: 'constructive',
      skills: ['attention', 'compassion'],
      summary: 'Escuchar los datos que la otra persona ofrece sin que preguntes, retomarlos y contar algo tuyo para que la charla siga.',
      mechanism: 'Retomar lo que el otro cuenta muestra interés. Contar algo propio, en pequeñas dosis, da confianza y hace que la charla sea de ida y vuelta.',
      evidenceLevel: 'preliminar',
      evidence: [SMITH_1975, SPEED_2018],
      howItWorks: [
        'La asertividad no es sólo decir que no. También es animarse a hablar con otras personas, en una fiesta, en el trabajo o con una persona nueva.',
        'Smith describió dos habilidades para eso (Smith, 1975). La información gratuita es lo que la otra persona cuenta sin que se lo pidas: «Vengo del club», «Recién me mudé». Son puertas para seguir hablando. La autorrevelación es contar algo tuyo: lo que piensas, lo que te gusta o incluso que te dan nervios.',
        'Con las dos, la conversación deja de ser un interrogatorio. El entrenamiento asertivo trabaja también estas habilidades sociales (Speed y colaboradores, 2018).',
      ],
      tips: [
        'Escucha los detalles que el otro suma sin que preguntes. Ahí está el hilo.',
        'Cuenta algo tuyo de a poco. No hace falta contar tu vida.',
        'Decir «me dan un poco de nervios» suele bajar la tensión, no subirla.',
      ],
      obstacles: [
        { q: 'Me quedo en blanco y no sé qué decir.', a: 'Es muy común. No hace falta tener ingenio. Retoma algo que dijo la otra persona y pregunta: «¿Del club? ¿Qué deporte haces?».' },
      ],
      cautions: 'Si la ansiedad en las charlas es tan fuerte que evitas salir o trabajar, puede ser ansiedad social, que tiene tratamiento. Consulta con un profesional.',
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Piensa en una charla que te gustaría tener esta semana.', durationSec: 30, kind: 'breath' },
        { title: 'Escuchar', instruction: 'Imagina que te dicen: «Uf, vengo del club». Subraya el dato que te dieron sin que preguntes.', durationSec: 40, kind: 'reflection' },
        { title: 'Retomar', instruction: 'Escribe una pregunta sobre ese dato. Por ejemplo: «¿Del club? ¿Qué haces ahí?».', durationSec: 40, kind: 'reflection' },
        { title: 'Algo tuyo', instruction: 'Escribe algo tuyo que se conecte: «Yo hace años que quiero volver a nadar».', durationSec: 40, kind: 'reflection' },
        { title: 'Lo que sientes', instruction: 'Si te dan nervios, prepara una frase simple: «No conozco a nadie aquí y me dan un poco de nervios».', durationSec: 35, kind: 'reflection' },
        { title: 'Ensayo', instruction: 'Di en voz alta la pregunta y tu frase. Sonríe si te sale natural.', durationSec: 35, kind: 'instruction' },
        { title: 'Un paso', instruction: 'Elige una charla real para probar esta semana. Alcanza con una pregunta y algo tuyo.', durationSec: 30, kind: 'instruction' },
      ],
    },
  ],

  meta: {
    'mis-derechos-asertivos': { level: 'iniciacion', approaches: ['tcc'], module: 'relaciones', prerequisites: ['necesidades-que-pido'] },
    'admitir-un-error-sin-hundirme': { level: 'intermedio', approaches: ['tcc'], module: 'relaciones', prerequisites: ['mis-derechos-asertivos'] },
    'preguntar-por-la-critica': { level: 'intermedio', approaches: ['tcc'], module: 'relaciones', prerequisites: ['admitir-un-error-sin-hundirme', 'el-no-amable'] },
    'un-acuerdo-que-me-respete': { level: 'intermedio', approaches: ['tcc', 'dbt'], module: 'relaciones', prerequisites: ['dear-man', 'el-no-amable'] },
    'abrir-una-conversacion': { level: 'iniciacion', approaches: ['tcc'], module: 'relaciones', prerequisites: ['mis-derechos-asertivos'] },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'derechos-asertivos-y-culpa',
      title: 'Derechos asertivos y culpa: las técnicas de Manuel Smith',
      subtitle: 'Cómo decir que no, recibir críticas y negociar sin ceder por culpa, con ejemplos de respuestas pasivas, agresivas y asertivas.',
      category: 'Relaciones',
      readingMin: 10,
      keyPoints: [
        'Manuel Smith propuso que muchas personas ceden porque aprendieron a sentir culpa cuando eligen por sí mismas.',
        'Sus derechos asertivos parten de una idea: tú juzgas tu conducta y te haces cargo de ella.',
        'Sus técnicas ayudan a sostener un no, responder críticas, negociar y conversar.',
        'En cada caso hay una respuesta pasiva, una agresiva y una asertiva. La asertiva cuida a las dos partes.',
        'Con alguien violento no se negocia: primero la seguridad.',
      ],
      sections: [
        {
          heading: 'La culpa que te hace ceder',
          paragraphs: [
            'En 1975, el psicólogo Manuel J. Smith publicó un libro cuyo título dice, más o menos, «Cuando digo que no, me siento culpable» (Smith, 1975). Su idea central es simple. En la infancia, muchas personas aprenden a sentir culpa, ansiedad o torpeza cuando hacen lo que quieren. Después, otras personas pueden usar esas emociones para que cedamos, a veces sin darse cuenta.',
            'Esa culpa tiene señales. Te hace sentir mala persona por elegir distinto, aparece aunque no dañaste a nadie y se calma sólo si haces lo que te piden. Frases como «después de todo lo que hice por ti» o «una buena hija no haría eso» suelen buscar ese efecto. Es distinta de la culpa que avisa que rompiste un valor propio, que se repara.',
          ],
        },
        {
          heading: 'Los derechos asertivos',
          paragraphs: [
            'Smith armó una lista de derechos asertivos. Aquí los contamos con otras palabras. El más importante es que tú eres quien juzga lo que haces, piensas y sientes, y quien se hace cargo de las consecuencias. Los demás salen de ese.',
            'Entre ellos están: no tener que dar razones ni excusas, decidir si te toca resolver el problema de otra persona, cambiar de opinión, equivocarte y hacerte cargo, decir «no sé» y «no entiendo», y no depender de que todos te aprueben. Tener un derecho no obliga a usarlo. Y los demás tienen los mismos derechos que tú.',
          ],
        },
        {
          heading: 'Disco rayado y banco de niebla',
          paragraphs: [
            'Estas dos técnicas ya están en la práctica «El no amable». El disco rayado es repetir tu frase con calma, sin sumar argumentos. Un ejemplo: te insisten para que prestes plata. Pasivo: «Bueno, está bien, te la presto». Agresivo: «¡Siempre lo mismo contigo!». Asertivo: «Te entiendo. Esta vez no puedo prestarte». Y si insisten, repites lo mismo.',
            'El banco de niebla es dar la razón en lo que tenga de cierto una crítica, sin cambiar tu decisión. Te dicen: «Eres muy egoísta por no venir». Pasivo: «Tienes razón, voy igual». Agresivo: «¿Egoísta yo? Mira quién habla». Asertivo: «Puede ser que lo veas así. Y esta vez no voy». El tono es tranquilo, sin ironía.',
          ],
        },
        {
          heading: 'Aserción negativa: admitir un error',
          paragraphs: [
            'Cuando el error es real, Smith propone reconocerlo con calma, sin castigarte y sin excusas largas. Te dicen: «Te olvidaste de buscar a los chicos». Pasivo: «Perdón, perdón, soy un desastre, no sirvo para nada». Agresivo: «¿Y tú nunca te olvidas de nada?». Asertivo: «Es cierto, me olvidé. Fue un error. Mañana pongo una alarma».',
            'La respuesta asertiva habla del hecho, no de tu valor. Si la crítica no es cierta, esta técnica no corresponde. Ahí sirven el banco de niebla o la interrogación negativa.',
          ],
        },
        {
          heading: 'Interrogación negativa: preguntar por la crítica',
          paragraphs: [
            'Ante una crítica vaga, Smith sugiere pedir más información con curiosidad real. Así sabes si hay algo útil o si la crítica sólo busca que cedas. Te dicen: «No te importa nada de esta casa». Pasivo: callas y limpias todo tú. Agresivo: «¿A mí? Si el que no hace nada eres tú». Asertivo: «No entiendo bien. ¿Qué es lo que te molesta de cómo hago las cosas?».',
            'Si aparece algo concreto, como «nunca sacas la basura», ya hay algo para hablar o negociar. Si no aparece nada, es probable que la crítica fuera una presión. Preguntar así también invita al otro a pedir lo que quiere de forma directa.',
          ],
        },
        {
          heading: 'Compromiso viable: negociar sin perderte',
          paragraphs: [
            'En los conflictos prácticos, Smith propone ofrecer un punto medio. Pero marca un límite: si lo que está en juego es tu valor o tu respeto propio, no hay negociación. Un ejemplo: tu hermana quiere que cuides a sus hijos todos los sábados. Pasivo: «Sí, claro, los sábados que quieras». Agresivo: «No soy tu niñera. Arréglate». Asertivo: «Todos los sábados no puedo. Uno por mes, sí. ¿Te sirve?».',
            'La DBT incluye también negociar en la guía DEAR MAN y cuidar el respeto propio con la guía FAST (Linehan, 2015). Antes de hablar, conviene escribir qué puedes ceder y qué no.',
          ],
        },
        {
          heading: 'Autorrevelación e información gratuita',
          paragraphs: [
            'Smith también pensó en cómo empezar y sostener una charla. La información gratuita es lo que el otro cuenta sin que se lo pidas. La autorrevelación es contar algo tuyo. En una reunión alguien dice: «Recién llego de viaje». Pasivo: «Ah», y silencio. Agresivo: «Qué suerte, algunos trabajamos». Asertivo: «¿De viaje? ¿Adónde fuiste? Yo hace mucho que quiero salir un poco».',
            'Contar algo propio, como «no conozco a nadie y me dan nervios», suele acercar a las personas. No hace falta contar mucho: alcanza con un poco, de ida y vuelta.',
          ],
        },
        {
          heading: 'Qué dice la investigación',
          paragraphs: [
            'Speed, Goldstein y Goldfried revisaron décadas de estudios sobre el entrenamiento asertivo (Speed y colaboradores, 2018). Concluyeron que es un tratamiento con evidencia, sobre todo para la ansiedad social y la depresión, y que se usa menos de lo que debería. Las técnicas de Smith son parte de esa tradición, pero no hay muchos estudios de cada técnica por separado.',
            'Para armar un pedido completo, la app ofrece DEAR MAN. Para cuidar la relación y tu respeto propio, GIVE y FAST. Las técnicas de Smith se suman a esas guías.',
          ],
        },
      ],
      caveat: {
        title: 'Antes de usar estas técnicas',
        body: 'El libro de Smith es de 1975 y su estilo a veces es confrontativo. Aquí lo adaptamos con un tono más amable, que cuide también la relación. Estas técnicas son para conversaciones entre personas que se respetan. Con alguien violento no se negocia ni se discute: la prioridad es tu seguridad. Si hay golpes, amenazas o control, llama a la Línea 144 o al 911 si hay peligro ahora, o usa el botón Ayuda de la app. Y estas técnicas no son para manipular a otros: sirven para cuidarte, no para ganar a toda costa.',
      },
      diagram: {
        title: 'Cómo la culpa te hace ceder',
        nodes: ['Un pedido con presión («después de todo lo que hice»)', 'Culpa («soy mala persona si digo que no»)', 'Cedes', 'Alivio breve', 'Malestar y más pedidos parecidos'],
        caption: 'Nombrar la culpa, recordar tu derecho a decidir y responder con una técnica asertiva corta el ciclo.',
      },
      related: {
        practices: ['mis-derechos-asertivos', 'el-no-amable', 'admitir-un-error-sin-hundirme', 'preguntar-por-la-critica', 'un-acuerdo-que-me-respete', 'abrir-una-conversacion', 'dear-man', 'give-fast', 'necesidades-que-pido', 'limites-con-la-familia-de-origen'],
        articles: ['asertividad-y-limites'],
      },
      references: [SMITH_1975, SPEED_2018, LINEHAN_2015],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'asertividad-en-seis-semanas',
      title: 'Asertividad en 6 semanas',
      subtitle: 'De la culpa a una respuesta clara, con las técnicas de Manuel Smith y la DBT',
      description:
        'Para quien cede por culpa, se defiende de más ante las críticas o no sabe cómo negociar. Aclararás lo que necesitas, revisarás la culpa que te hace ceder y practicarás, una por semana, técnicas para decir que no, recibir críticas y negociar. Al final armarás una conversación completa con DEAR MAN y GIVE y FAST. Si en tu vínculo hay violencia, primero busca ayuda: Línea 144 o 911.',
      basis: 'Smith (1975); entrenamiento asertivo (Speed y colaboradores, 2018); efectividad interpersonal de la DBT (Linehan, 2015).',
      rhythm: '10 minutos al día, 4 o 5 días por semana, y una conversación real por semana si se puede.',
      weeks: [
        {
          title: 'Semana 1 · Lo que necesito',
          focus: 'Necesidades',
          description: 'Aclararás qué necesitas y qué te cuesta pedir. La asertividad empieza por saber qué quieres cuidar.',
          practiceIds: ['necesidades-que-pido'],
          articleIds: ['asertividad-y-limites'],
          journalType: 'necesidades',
        },
        {
          title: 'Semana 2 · Derechos y culpa',
          focus: 'La culpa que te hace ceder',
          description: 'Leerás sobre los derechos asertivos y aprenderás a notar cuándo la culpa se usa para que digas que sí.',
          practiceIds: ['mis-derechos-asertivos'],
          articleIds: ['derechos-asertivos-y-culpa'],
          journalType: 'reestructuracion',
        },
        {
          title: 'Semana 3 · El no amable',
          focus: 'Disco rayado y banco de niebla',
          description: 'Practicarás decir que no en una frase corta, repetirla si insisten y responder a las críticas sin pelear ni ceder.',
          practiceIds: ['el-no-amable'],
          articleIds: [],
          journalType: 'conversacion',
        },
        {
          title: 'Semana 4 · Recibir críticas',
          focus: 'Aserción e interrogación negativa',
          description: 'Ensayarás reconocer un error real sin hundirte y preguntar por una crítica vaga para saber si sirve.',
          practiceIds: ['admitir-un-error-sin-hundirme', 'preguntar-por-la-critica'],
          articleIds: [],
          journalType: 'experimento',
        },
        {
          title: 'Semana 5 · Negociar',
          focus: 'Compromiso viable',
          description: 'Separarás lo que puedes ceder de lo que no, y armarás una propuesta concreta para un conflicto práctico.',
          practiceIds: ['un-acuerdo-que-me-respete'],
          articleIds: [],
          journalType: 'resolucion-problemas',
        },
        {
          title: 'Semana 6 · La conversación completa',
          focus: 'DEAR MAN y GIVE y FAST',
          description: 'Armarás un pedido completo, cuidando la relación y tu respeto propio. Si quieres, suma una charla nueva con autorrevelación.',
          practiceIds: ['dear-man', 'give-fast', 'abrir-una-conversacion'],
          articleIds: ['derechos-asertivos-y-culpa'],
          journalType: 'conversacion',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-culpa-manipulativa',
      title: 'La culpa que te hace ceder',
      subtitle: 'Derechos asertivos y cómo notar la culpa usada como presión.',
      slides: [
        { heading: 'Aprendida', text: 'En la infancia, muchas personas aprenden a sentir culpa al elegir por sí mismas. Después, otros pueden usar esa culpa para que cedas.' },
        { heading: 'Las señales', text: 'Te sientes mala persona por elegir distinto. No dañaste a nadie. Y la culpa se calma sólo si cedes.' },
        { heading: 'Tu derecho', text: 'Tú juzgas lo que haces y te haces cargo. Puedes decir que no sin dar excusas. Los demás tienen el mismo derecho.' },
        { heading: 'Pasivo', text: 'Te dicen: «Después de todo lo que hice por ti». Respondes: «Bueno, tienes razón, voy».' },
        { heading: 'Agresivo', text: '«¡Siempre me sacas eso en cara! Ya no te aguanto.»' },
        { heading: 'Asertivo', text: '«Sé que hiciste mucho por mí, y te lo agradezco. Igual esta vez no voy.»' },
        { heading: 'Pruébalo', text: 'La próxima vez que sientas culpa, pregúntate: «¿Dañé a alguien o sólo elegí distinto?».' },
      ],
      related: { practices: ['mis-derechos-asertivos'], articles: ['derechos-asertivos-y-culpa'] },
      references: [SMITH_1975, SPEED_2018],
    },
    {
      id: 'pildora-asercion-negativa',
      title: 'Me equivoqué, y sigo valiendo lo mismo',
      subtitle: 'Aserción negativa: admitir un error sin hundirte.',
      slides: [
        { heading: 'Un error real', text: 'Cuando te marcan un error cierto, hay dos trampas: hundirte o defenderte. Hay una tercera vía.' },
        { heading: 'Pasivo', text: 'Te dicen: «Te olvidaste de llamar». Respondes: «Perdón, perdón, soy un desastre».' },
        { heading: 'Agresivo', text: '«¿Y tú nunca te olvidas de nada?»' },
        { heading: 'Asertivo', text: '«Es cierto, me olvidé. Fue un error. Ahora te llamo.» Hablas del hecho, no de tu valor.' },
        { heading: 'Sólo si es cierto', text: 'Si la crítica no es cierta, no la aceptes. Ahí sirve el banco de niebla o preguntar más.' },
        { heading: 'Pruébalo', text: 'Piensa en un error de esta semana. Escribe una frase corta para admitirlo, sin excusas y sin castigarte.' },
      ],
      related: { practices: ['admitir-un-error-sin-hundirme'], articles: ['derechos-asertivos-y-culpa'] },
      references: [SMITH_1975, SPEED_2018],
    },
    {
      id: 'pildora-interrogacion-negativa',
      title: '¿Qué es lo que te molesta?',
      subtitle: 'Interrogación negativa: preguntar por una crítica vaga.',
      slides: [
        { heading: 'Críticas vagas', text: '«No te importa nada.» Así es difícil saber qué quiere la otra persona.' },
        { heading: 'Pasivo', text: 'Callas, te sientes mal y haces todo lo que crees que esperan de ti.' },
        { heading: 'Agresivo', text: '«¿A mí no me importa? ¡Si el que no hace nada eres tú!»' },
        { heading: 'Asertivo', text: '«No entiendo bien. ¿Qué es lo que te molesta de lo que hago?» Con curiosidad real, sin ironía.' },
        { heading: 'Útil o presión', text: 'Si aparece algo concreto, hay algo para hablar. Si no aparece nada, quizá era sólo una presión.' },
        { heading: 'Pruébalo', text: 'Ante la próxima crítica vaga, respira y haz una sola pregunta antes de defenderte.' },
      ],
      related: { practices: ['preguntar-por-la-critica'], articles: ['derechos-asertivos-y-culpa'] },
      references: [SMITH_1975, SPEED_2018],
    },
    {
      id: 'pildora-compromiso-viable',
      title: 'Un acuerdo que te respete',
      subtitle: 'Compromiso viable: negociar sin perderte.',
      slides: [
        { heading: 'Ni todo ni nada', text: 'En los temas prácticos, un punto medio suele ser mejor que ganar o perder.' },
        { heading: 'Pasivo', text: 'Te piden que cuides a tus sobrinos todos los sábados. Dices: «Sí, claro, cuando quieras».' },
        { heading: 'Agresivo', text: '«No soy tu niñera. Arréglate.»' },
        { heading: 'Asertivo', text: '«Todos los sábados no puedo. Uno por mes, sí. ¿Te sirve?»' },
        { heading: 'Lo que no se negocia', text: 'Si lo que está en juego es tu respeto propio, no hay trato. Eso no se cede.' },
        { heading: 'Pruébalo', text: 'Antes de tu próxima charla difícil, escribe dos cosas que puedes ceder y una que no.' },
      ],
      related: { practices: ['un-acuerdo-que-me-respete', 'dear-man'], articles: ['derechos-asertivos-y-culpa'] },
      references: [SMITH_1975, LINEHAN_2015],
    },
    {
      id: 'pildora-autorrevelacion',
      title: 'Para que la charla siga',
      subtitle: 'Información gratuita y autorrevelación.',
      slides: [
        { heading: 'Datos de regalo', text: 'La gente cuenta cosas sin que preguntes: «Recién llego de viaje». Son puertas para seguir hablando.' },
        { heading: 'Pasivo', text: 'Dices «Ah» y te quedas en silencio, sin saber qué más decir.' },
        { heading: 'Agresivo', text: '«Qué suerte. Algunos trabajamos.»' },
        { heading: 'Asertivo', text: '«¿De viaje? ¿Adónde fuiste? Yo hace mucho que quiero salir un poco.» Retomas su dato y sumas algo tuyo.' },
        { heading: 'Decir lo que sientes', text: 'Contar «no conozco a nadie y me dan nervios» suele acercar. No hace falta contar mucho.' },
        { heading: 'Pruébalo', text: 'En tu próxima charla, retoma un dato que te den y cuenta algo tuyo. Con eso alcanza.' },
      ],
      related: { practices: ['abrir-una-conversacion'], articles: ['derechos-asertivos-y-culpa'] },
      references: [SMITH_1975, SPEED_2018],
    },
    {
      id: 'pildora-dear-man-smith',
      title: 'DEAR MAN: un pedido completo',
      subtitle: 'Cómo se suma DEAR MAN a las técnicas de Smith.',
      slides: [
        { heading: 'El pedido entero', text: 'Las técnicas de Smith ayudan en un momento de la charla. DEAR MAN te ayuda a armar el pedido completo.' },
        { heading: 'Cómo es', text: 'Describes los hechos, dices lo que sientes y pides claro. Explicas qué gana el otro, te mantienes en el tema, hablas con seguridad y negocias.' },
        { heading: 'Pasivo', text: '«No, nada, está todo bien.» Y te quedas con el enojo.' },
        { heading: 'Agresivo', text: '«Nunca me ayudas con nada. Ya no aguanto más.»' },
        { heading: 'Asertivo', text: '«Esta semana cociné todos los días. Me siento sin energía. ¿Puedes cocinar tú martes y jueves? Así tenemos más tiempo juntos.»' },
        { heading: 'Pruébalo', text: 'Abre la práctica DEAR MAN y arma un pedido real para esta semana.' },
      ],
      related: { practices: ['dear-man', 'give-fast'], articles: ['asertividad-y-limites'] },
      references: [LINEHAN_2015, SPEED_2018],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'derechos-asertivos', term: 'Derechos asertivos', definition: 'Ideas que propuso Manuel Smith para decidir sin culpa. La principal: tú juzgas lo que haces y te haces cargo. Los demás tienen los mismos derechos.', articleId: 'derechos-asertivos-y-culpa', practiceId: 'mis-derechos-asertivos' },
    { id: 'culpa-manipulativa', term: 'Culpa manipulativa', definition: 'Culpa que otra persona despierta, a veces sin darse cuenta, para que cedas. Aparece aunque no dañaste a nadie y se calma sólo si haces lo que te piden.', articleId: 'derechos-asertivos-y-culpa', practiceId: 'mis-derechos-asertivos' },
    { id: 'asercion-negativa', term: 'Aserción negativa', definition: 'Técnica de Smith para reconocer con calma un error real, sin castigarte ni dar excusas largas. Habla del hecho, no de tu valor.', articleId: 'derechos-asertivos-y-culpa', practiceId: 'admitir-un-error-sin-hundirme' },
    { id: 'interrogacion-negativa', term: 'Interrogación negativa', definition: 'Técnica de Smith para pedir más detalles de una crítica, con curiosidad real. Sirve para saber si la crítica es útil o es una presión.', articleId: 'derechos-asertivos-y-culpa', practiceId: 'preguntar-por-la-critica' },
    { id: 'compromiso-viable', term: 'Compromiso viable', definition: 'Punto medio en un conflicto práctico, en el que las dos partes ganan algo. Según Smith, no se negocia lo que toca tu respeto propio.', articleId: 'derechos-asertivos-y-culpa', practiceId: 'un-acuerdo-que-me-respete' },
  ],
};
