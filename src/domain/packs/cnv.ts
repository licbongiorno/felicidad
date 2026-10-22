import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Comunicación No Violenta (CNV)», según Marshall B. Rosenberg:
 *  - los cuatro componentes: observación, sentimiento, necesidad y pedido;
 *  - sentimientos frente a pseudosentimientos («me siento ignorado»);
 *  - pedido frente a exigencia;
 *  - escucha empática y autoempatía;
 *  - enojo, gratitud y decir o escuchar un «no».
 *
 * «Jirafa» y «chacal» son metáforas de Rosenberg: la jirafa habla desde lo que siente y
 * necesita; el chacal, desde el juicio, la culpa y la exigencia. Aquí se usan como ejemplos
 * comparativos, nunca como etiquetas para personas.
 *
 * Evidencia: la CNV tiene mucha difusión, pero pocos estudios y de baja calidad metodológica.
 * Por eso todas las prácticas son 'preliminar'. No se citan revisiones: sólo el libro de
 * Rosenberg y, como apoyo de ideas vecinas, estudios conocidos sobre nombrar emociones,
 * empatía y autocompasión.
 *
 * Seguridad: la CNV es para conversaciones entre personas que se respetan. No reemplaza la
 * terapia de pareja ni la ayuda ante la violencia. Si alguien te lastima, la prioridad es tu
 * seguridad (Línea 144, 911), no encontrar las palabras justas.
 */

const ROSENBERG_2003: Reference = {
  citation: 'Rosenberg, M. B. (2003). Nonviolent communication: A language of life (2.ª ed.). PuddleDancer Press.',
  note: 'Hay edición en castellano con el título «Comunicación no violenta: un lenguaje de vida».',
};
const LIEBERMAN_2007: Reference = {
  citation:
    'Lieberman, M. D., Eisenberger, N. I., Crockett, M. J., et al. (2007). Putting feelings into words: Affect labeling disrupts amygdala activity in response to affective stimuli. Psychological Science, 18(5), 421–428.',
  doi: '10.1111/j.1467-9280.2007.01916.x',
};
const ROGERS_1957: Reference = {
  citation: 'Rogers, C. R. (1957). The necessary and sufficient conditions of therapeutic personality change. Journal of Consulting Psychology, 21(2), 95–103.',
  doi: '10.1037/h0045357',
};
const NEFF_2003: Reference = {
  citation: 'Neff, K. D. (2003). Self-compassion: An alternative conceptualization of a healthy attitude toward oneself. Self and Identity, 2(2), 85–101.',
  doi: '10.1080/15298860309032',
};

/** Aviso común para las prácticas que se usan con otra persona. */
const SEGURIDAD =
  'La CNV sirve entre personas que se respetan. Si alguien te grita, te amenaza, te controla o te lastima, no hace falta encontrar las palabras justas: lo primero es tu seguridad. Llama a la Línea 144 o, si hay peligro ya, al 911. Tampoco reemplaza una terapia de pareja o familiar.';

/** Recuadro común de los dos artículos. */
const CAVEAT_BODY =
  'La CNV es muy conocida y mucha gente la encuentra útil, pero la evidencia empírica es escasa y de baja calidad metodológica: pocos estudios, muestras chicas y casi sin grupos de comparación. Tómala como una guía práctica, no como un tratamiento probado. No reemplaza la terapia de pareja ni la ayuda ante la violencia. Si convives con alguien violento, la prioridad es tu seguridad y no la forma de hablar: llama a la Línea 144 (gratis, las 24 horas) o al 911 si hay peligro ya.';

export const CNV_PACK: ContentPack = {
  id: 'cnv',

  // ================================================================== prácticas
  practices: [
    {
      id: 'cnv-observar-sin-evaluar',
      title: 'Observar sin evaluar',
      family: 'attentional',
      skills: ['attention'],
      summary: 'Separar lo que pasó, tal como lo registraría una cámara, de lo que piensas sobre eso.',
      mechanism: 'Una observación sin juicio es más fácil de escuchar. La otra persona no siente que la atacan y no necesita defenderse.',
      evidenceLevel: 'preliminar',
      evidence: [ROSENBERG_2003],
      howItWorks: [
        'Marshall Rosenberg propone empezar una conversación difícil por lo que pasó, sin mezclarlo con lo que opinamos. «Llegaste a las diez y habíamos quedado a las nueve» es una observación. «Siempre llegas tarde» es una evaluación.',
        'Las evaluaciones no son malas. El problema es mezclarlas con los hechos. Cuando alguien escucha un juicio, suele defenderse y deja de escuchar el resto.',
        'Las palabras «siempre», «nunca», «otra vez» y los adjetivos sobre la persona («egoísta», «vago») suelen ser señales de evaluación.',
      ],
      tips: [
        'Pregúntate: ¿una cámara podría grabar esto?',
        'Cambia «siempre» por cuántas veces y cuándo: «tres veces esta semana».',
        'Describe lo que la persona hizo o dijo, no lo que es.',
      ],
      obstacles: [{ q: 'Pero es verdad que siempre llega tarde.', a: 'Puede ser. Igual, decir «las últimas tres veces llegaste media hora tarde» se discute menos y se escucha más.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Piensa en algo que alguien hizo y te molestó.', durationSec: 40, kind: 'breath' },
        { title: 'Tal como sale', instruction: 'Escribe la frase que te sale al pensar en eso, sin filtro.', durationSec: 45, kind: 'reflection' },
        { title: 'Buscar juicios', instruction: 'Subraya las palabras que juzgan: «siempre», «nunca», «egoísta», «no le importa».', durationSec: 45, kind: 'reflection' },
        { title: 'La cámara', instruction: '¿Qué grabaría una cámara? Escribe sólo lo que se vio o se oyó, con día y hora si puedes.', durationSec: 75, kind: 'reflection' },
        { title: 'Comparar', instruction: 'Lee las dos frases. ¿Cuál podría escuchar la otra persona sin defenderse?', durationSec: 40, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Guarda la frase de la cámara. Te servirá para empezar la charla.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'cnv-nombrar-lo-que-siento',
      title: 'Nombrar lo que siento',
      family: 'attentional',
      skills: ['attention', 'compassion'],
      summary: 'Poner en palabras lo que sientes y distinguirlo de los pseudosentimientos, como «me siento ignorado».',
      mechanism: 'Nombrar una emoción ayuda a regularla. Y decir lo que sientes, sin culpar, invita a la otra persona a escucharte.',
      evidenceLevel: 'preliminar',
      evidence: [ROSENBERG_2003, LIEBERMAN_2007],
      howItWorks: [
        'Rosenberg distingue los sentimientos de las palabras que en realidad describen lo que creemos que otros nos hacen. «Me siento ignorado», «manipulado» o «rechazado» hablan del otro. Son pseudosentimientos. Debajo suele haber tristeza, enojo, miedo o soledad.',
        'Algo parecido pasa con «siento que…». «Siento que no te importo» es un pensamiento, no un sentimiento.',
        'Ponerle nombre a una emoción, además, ayuda a calmarla: en un estudio, nombrar la emoción bajó la reacción de la amígdala ante imágenes difíciles (Lieberman y colaboradores, 2007).',
      ],
      tips: [
        'Si después de «me siento» viene «que», es un pensamiento.',
        'Si la palabra habla de lo que el otro te hizo, busca qué sientes tú: «ignorado» puede ser «triste» o «solo».',
        'Usa palabras simples: triste, enojada, cansado, con miedo, tranquila, aliviado.',
      ],
      obstacles: [{ q: 'No sé qué siento.', a: 'Es muy común. Empieza por el cuerpo: ¿dónde notas algo? Después elige entre cuatro palabras básicas: enojo, miedo, tristeza o alegría.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en una situación reciente que te removió.', durationSec: 40, kind: 'breath' },
        { title: 'El cuerpo', instruction: 'Nota dónde la sientes en el cuerpo: pecho, panza, garganta, hombros.', durationSec: 40, kind: 'breath' },
        { title: 'Tu frase', instruction: 'Completa por escrito: «Me siento…». Escribe lo primero que salga.', durationSec: 40, kind: 'reflection' },
        { title: 'Revisar', instruction: '¿Tu palabra habla del otro, como «ignorado» o «usado»? ¿O empieza con «que»? Si es así, es un pseudosentimiento.', durationSec: 60, kind: 'reflection' },
        { title: 'Debajo', instruction: 'Busca qué sientes tú debajo de esa palabra. Prueba con triste, enojado, con miedo, solo o cansado.', durationSec: 60, kind: 'reflection' },
        { title: 'Decirlo', instruction: 'Escribe la frase nueva: «Me siento…». Léela en voz baja y nota si encaja.', durationSec: 40, kind: 'reflection' },
      ],
    },
    {
      id: 'cnv-necesidad-detras',
      title: 'La necesidad detrás',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Descubrir qué necesidad está viva detrás de un sentimiento, tuyo o de otra persona.',
      mechanism: 'Los sentimientos señalan necesidades cubiertas o no. Hablar de necesidades, que todas las personas compartimos, conecta más que hablar de culpas.',
      evidenceLevel: 'preliminar',
      evidence: [ROSENBERG_2003],
      howItWorks: [
        'En la CNV, lo que otra persona hace puede ser el estímulo de lo que sientes, pero no la causa. La causa es una necesidad tuya: descanso, respeto, cercanía, orden, autonomía, que te tengan en cuenta.',
        'Rosenberg describe las necesidades como universales: todas las personas las tenemos. Por eso, cuando las nombras, es más fácil que la otra persona te entienda.',
        'Una necesidad no es una estrategia. «Necesito que me llames» es una estrategia. La necesidad puede ser saber que estás bien o sentir cercanía. Para una necesidad hay muchas estrategias posibles.',
      ],
      tips: [
        'Si tu necesidad incluye a una persona concreta haciendo algo, probablemente es una estrategia.',
        'Pregúntate: ¿qué me daría eso que quiero?',
        'Una lista de necesidades a mano ayuda mucho al principio.',
      ],
      obstacles: [{ q: 'Me da vergüenza decir lo que necesito.', a: 'Le pasa a mucha gente. Puedes empezar por nombrarlo para ti. Decirlo en voz alta puede quedar para después.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Trae a la mente la situación y lo que sentiste.', durationSec: 40, kind: 'breath' },
        { title: 'El sentimiento', instruction: 'Escribe el sentimiento que nombraste. Por ejemplo: «Me siento cansada y enojada».', durationSec: 40, kind: 'reflection' },
        { title: 'La pregunta', instruction: 'Pregúntate: ¿qué necesito que no está cubierto? Mira opciones como descanso, ayuda, respeto, orden o cercanía.', durationSec: 75, kind: 'reflection' },
        { title: 'Necesidad o estrategia', instruction: '¿Tu respuesta nombra a alguien haciendo algo? Entonces es una estrategia. Pregúntate qué te daría eso.', durationSec: 60, kind: 'reflection' },
        { title: 'Juntar', instruction: 'Escribe: «Me siento… porque necesito…». Sin nombrar culpas.', durationSec: 45, kind: 'reflection' },
        { title: 'El otro lado', instruction: 'Si quieres, piensa en la otra persona. ¿Qué podría estar necesitando ella?', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'cnv-pedido-concreto',
      title: 'Hacer un pedido concreto',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Convertir una queja en un pedido claro, posible y en positivo, y distinguirlo de una exigencia.',
      mechanism: 'Un pedido concreto le muestra a la otra persona qué puede hacer. Si acepta un «no» sin castigo, es un pedido y no una exigencia.',
      evidenceLevel: 'preliminar',
      evidence: [ROSENBERG_2003],
      howItWorks: [
        'El cuarto paso de la CNV es pedir algo concreto, que se pueda hacer ahora o pronto. «Quiero que me respetes» es vago. «¿Podrías avisarme por mensaje si vas a llegar más tarde?» es concreto.',
        'Rosenberg propone pedir lo que sí quieres, no lo que no quieres. «No me grites» deja abierto qué hacer en cambio. «¿Puedes bajar la voz?» lo dice.',
        'La diferencia entre pedido y exigencia está en lo que pasa si te dicen que no. Si reaccionas con culpa o castigo, era una exigencia. Si quieres entender qué le impide decir que sí, era un pedido.',
      ],
      tips: [
        'Incluye qué, cuándo y cómo.',
        'Habla en positivo: lo que quieres que pase.',
        'Puedes pedir algo sobre la charla misma: «¿Me cuentas qué entendiste?».',
      ],
      obstacles: [{ q: '¿Y si me dice que no?', a: 'Es una respuesta posible. Ese «no» suele ser un «sí» a otra necesidad suya. Pregunta cuál es y busquen juntos otra opción.' }],
      cautions: SEGURIDAD,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en algo que quieres pedirle a alguien.', durationSec: 40, kind: 'breath' },
        { title: 'La queja', instruction: 'Escribe la queja tal como te sale. Por ejemplo: «Nunca me ayudas con la casa».', durationSec: 40, kind: 'reflection' },
        { title: 'Lo que sí quieres', instruction: 'Pásala a positivo. ¿Qué quieres que pase, en lugar de lo que no quieres?', durationSec: 60, kind: 'reflection' },
        { title: 'Hacerlo concreto', instruction: 'Agrega qué, cuándo y cómo. Por ejemplo: «¿Podrías lavar los platos después de la cena los martes y jueves?».', durationSec: 60, kind: 'reflection' },
        { title: 'La prueba del no', instruction: 'Imagina que te dice que no. ¿Qué harías? Si quieres castigar, revisa si es una exigencia.', durationSec: 60, kind: 'reflection' },
        { title: 'Todo junto', instruction: 'Arma la frase entera: lo que viste, lo que sientes, lo que necesitas y tu pedido.', durationSec: 60, kind: 'reflection' },
      ],
    },
    {
      id: 'cnv-escucha-empatica',
      title: 'Escuchar con empatía',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Recibir lo que otra persona dice buscando su sentimiento y su necesidad, sin aconsejar, corregir ni defenderte.',
      mechanism: 'Sentirse comprendido baja la tensión. Cuando la otra persona se siente escuchada, suele estar más dispuesta a escuchar después.',
      evidenceLevel: 'preliminar',
      evidence: [ROSENBERG_2003, ROGERS_1957],
      howItWorks: [
        'Rosenberg estudió con Carl Rogers, que puso la comprensión empática en el centro de la ayuda (Rogers, 1957). La CNV toma esa idea para la vida cotidiana.',
        'Escuchar con empatía es escuchar lo que la otra persona siente y necesita, aunque lo diga con un juicio. Si te dice «eres un egoísta», puedes preguntarte: ¿qué siente?, ¿qué necesita?',
        'No es estar de acuerdo. Tampoco es aconsejar, consolar rápido, contar tu historia o explicar. Es acompañar y comprobar si entendiste.',
      ],
      tips: [
        'Pregunta en lugar de afirmar: «¿Estás cansada porque necesitas más ayuda?».',
        'Si te equivocas, no pasa nada: la persona te corrige y siguen.',
        'Espera a que la otra persona se calme antes de decir lo tuyo.',
      ],
      obstacles: [{ q: 'Me cuesta no defenderme.', a: 'Es lo más difícil. Si no puedes escuchar ahora, dilo: «Quiero escucharte, pero necesito diez minutos». Y date autoempatía primero.' }],
      cautions: SEGURIDAD,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en algo que te dijo alguien con enojo o queja.', durationSec: 40, kind: 'breath' },
        { title: 'La frase', instruction: 'Escribe lo que te dijo, con sus palabras.', durationSec: 40, kind: 'reflection' },
        { title: 'Sin responder', instruction: 'Nota tus ganas de defenderte o explicar. Déjalas a un lado por ahora.', durationSec: 40, kind: 'breath' },
        { title: 'Su sentimiento', instruction: '¿Qué podría estar sintiendo? Elige una o dos palabras: enojo, cansancio, miedo, tristeza.', durationSec: 50, kind: 'reflection' },
        { title: 'Su necesidad', instruction: '¿Qué podría necesitar? Por ejemplo, ayuda, respeto, que la tengan en cuenta o descanso.', durationSec: 50, kind: 'reflection' },
        { title: 'La pregunta', instruction: 'Arma una pregunta: «¿Te sientes… porque necesitas…?». Úsala la próxima vez, antes de decir lo tuyo.', durationSec: 60, kind: 'reflection' },
      ],
    },
    {
      id: 'cnv-autoempatia',
      title: 'Autoempatía',
      family: 'constructive',
      skills: ['compassion'],
      summary: 'Escucharte con empatía cuando te hablas en «lenguaje chacal»: con juicios, culpa o «debería».',
      mechanism: 'Traducir la autocrítica en sentimientos y necesidades baja la culpa y la vergüenza, y deja ver qué quieres cuidar.',
      evidenceLevel: 'preliminar',
      evidence: [ROSENBERG_2003, NEFF_2003],
      howItWorks: [
        'Rosenberg usa al chacal como metáfora del lenguaje que juzga y exige. Muchas veces el chacal habla hacia adentro: «Soy un desastre», «Debería haberme dado cuenta».',
        'La autoempatía es escuchar ese juicio como harías con otra persona. ¿Qué siento? ¿Qué necesidad mía no se cubrió? Rosenberg propone también el duelo: lamentar lo que hiciste desde lo que valoras, sin castigarte.',
        'La idea se parece a la autocompasión que estudia Kristin Neff: tratarte con la amabilidad que usarías con alguien querido (Neff, 2003).',
      ],
      tips: [
        'Escribe el juicio tal como suena. Verlo en papel ayuda.',
        'Cambia «debería» por «me hubiera gustado, porque valoro…».',
        'Úsala antes de una charla difícil: te deja más disponible para escuchar.',
      ],
      obstacles: [{ q: 'Si no me critico, no voy a cambiar.', a: 'La crítica dura suele paralizar. Saber qué necesidad querías cuidar te muestra qué hacer distinto la próxima vez.' }],
      steps: [
        { title: 'Llegar', instruction: 'Pon una mano en el pecho. Respira despacio tres veces.', durationSec: 40, kind: 'breath' },
        { title: 'El chacal', instruction: 'Escribe lo que te dices cuando te equivocas. Tal cual, aunque sea duro.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que sientes', instruction: 'Debajo de ese juicio, ¿qué sientes? Tristeza, miedo, frustración, cansancio.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que necesitas', instruction: '¿Qué necesidad tuya no se cubrió? Por ejemplo, cuidar a alguien, hacer bien tu trabajo o descansar.', durationSec: 60, kind: 'reflection' },
        { title: 'El duelo', instruction: 'Escribe: «Me hubiera gustado… porque valoro…». Date un momento para lamentarlo, sin castigo.', durationSec: 60, kind: 'reflection' },
        { title: 'Un paso', instruction: '¿Qué podrías hacer distinto la próxima vez para cuidar esa necesidad? Anota una cosa.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Vuelve a la mano en el pecho. Respira y dite algo amable.', durationSec: 30, kind: 'breath' },
      ],
    },
  ],

  meta: {
    'cnv-observar-sin-evaluar': { level: 'iniciacion', approaches: ['humanista', 'interpersonal'], module: 'relaciones' },
    'cnv-nombrar-lo-que-siento': { level: 'iniciacion', approaches: ['humanista', 'interpersonal'], module: 'relaciones' },
    'cnv-necesidad-detras': { level: 'intermedio', approaches: ['humanista', 'interpersonal'], module: 'relaciones', prerequisites: ['cnv-nombrar-lo-que-siento'] },
    'cnv-pedido-concreto': { level: 'intermedio', approaches: ['humanista', 'interpersonal'], module: 'relaciones', prerequisites: ['cnv-observar-sin-evaluar', 'cnv-necesidad-detras'] },
    'cnv-escucha-empatica': { level: 'intermedio', approaches: ['humanista', 'interpersonal'], module: 'relaciones', prerequisites: ['cnv-necesidad-detras'] },
    'cnv-autoempatia': { level: 'intermedio', approaches: ['humanista'], module: 'autocompasion', prerequisites: ['cnv-nombrar-lo-que-siento'] },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'cnv-cuatro-componentes',
      title: 'Comunicación no violenta: los cuatro componentes',
      subtitle: 'Observación, sentimiento, necesidad y pedido: el modelo de Marshall Rosenberg, con ejemplos en «lenguaje chacal» y «lenguaje jirafa».',
      category: 'Relaciones',
      readingMin: 9,
      keyPoints: [
        'La CNV propone hablar desde lo que observas, sientes, necesitas y pides, en lugar de juzgar o exigir.',
        'Una observación describe lo que pasó; una evaluación lo juzga.',
        '«Me siento ignorado» no es un sentimiento: es una idea sobre lo que el otro hizo.',
        'Las necesidades son universales; las estrategias para cubrirlas, muchas.',
        'Un pedido acepta un «no»; una exigencia, no.',
        'La evidencia es escasa: es una guía práctica, no un tratamiento probado.',
      ],
      sections: [
        {
          heading: 'Qué es la CNV',
          paragraphs: [
            'La Comunicación No Violenta es un modelo creado por el psicólogo Marshall Rosenberg, que estudió con Carl Rogers. Propone una forma de hablar y escuchar que busca la conexión antes que tener razón.',
            'Rosenberg usa dos animales como metáforas. El chacal habla desde el juicio, la culpa y la exigencia. La jirafa, que Rosenberg eligió por su corazón grande, habla desde lo que siente y necesita. No son tipos de personas: cualquiera habla a veces como chacal y a veces como jirafa.',
            'El modelo tiene cuatro componentes. Sirven para expresarte y también para escuchar a otra persona.',
          ],
        },
        {
          heading: '1. Observación',
          paragraphs: [
            'El primer paso es describir lo que pasó sin mezclarlo con juicios. Una cámara podría grabarlo. Cuando la otra persona escucha un juicio, se defiende. Cuando escucha un hecho, puede seguir escuchando.',
            'Lenguaje chacal (reactivo): «Siempre llegas tarde. No te importa nadie».',
            'Lenguaje jirafa (CNV): «Habíamos quedado a las nueve y llegaste a las diez».',
          ],
        },
        {
          heading: '2. Sentimiento',
          paragraphs: [
            'El segundo paso es decir qué sientes. Rosenberg distingue los sentimientos de palabras como «ignorado», «manipulado» o «traicionado». Esas palabras describen lo que creemos que el otro nos hizo. Son pseudosentimientos.',
            'Tampoco es un sentimiento la frase «siento que…». «Siento que no te importo» es un pensamiento.',
            'Lenguaje chacal (reactivo): «Me siento ignorada por ti».',
            'Lenguaje jirafa (CNV): «Me siento triste y un poco sola».',
          ],
        },
        {
          heading: '3. Necesidad',
          paragraphs: [
            'En la CNV, lo que otra persona hace puede disparar lo que sientes, pero la raíz está en una necesidad tuya. Descanso, respeto, cercanía, seguridad o que te tengan en cuenta son ejemplos. Rosenberg las considera universales.',
            'Conviene separar la necesidad de la estrategia. «Necesito que me llames todos los días» es una estrategia. La necesidad puede ser cercanía o tranquilidad.',
            'Lenguaje chacal (reactivo): «Me pones nerviosa con tu desorden».',
            'Lenguaje jirafa (CNV): «Me siento inquieta porque necesito orden para descansar al llegar a casa».',
          ],
        },
        {
          heading: '4. Pedido',
          paragraphs: [
            'El último paso es pedir algo concreto, en positivo y posible ahora. Un pedido vago deja a la otra persona sin saber qué hacer.',
            'Un pedido no es una exigencia. Si te dicen que no y respondes con culpa o castigo, era una exigencia. Si te interesa saber qué le impide decir que sí, era un pedido.',
            'Lenguaje chacal (reactivo): «Tienes que cambiar de actitud».',
            'Lenguaje jirafa (CNV): «¿Podrías avisarme por mensaje si vas a llegar más de media hora tarde?».',
          ],
        },
        {
          heading: 'Escuchar con los cuatro componentes',
          paragraphs: [
            'Los mismos cuatro pasos sirven para escuchar. Ante una queja, puedes buscar qué siente y qué necesita la otra persona. Es la escucha empática.',
            'Lenguaje chacal (reactivo): ante «nunca me ayudas», responder «¡Pero si ayer lavé los platos!».',
            'Lenguaje jirafa (CNV): ante «nunca me ayudas», preguntar «¿Estás agotada y necesitas que compartamos más las tareas?».',
          ],
        },
        {
          heading: 'Una fórmula, no un guion',
          paragraphs: [
            'Al principio la CNV suena rígida. Es normal. Con la práctica se vuelve más natural y no hace falta decir los cuatro pasos siempre ni en orden.',
            'Lo importante no son las palabras exactas, sino la intención de entender y ser entendido. Usada para manipular o para tapar una injusticia, pierde su sentido.',
          ],
        },
      ],
      caveat: { title: 'Qué dice la evidencia y cuándo no alcanza', body: CAVEAT_BODY },
      diagram: {
        title: 'Los cuatro componentes de la CNV',
        nodes: ['Observación: lo que pasó', 'Sentimiento: lo que siento', 'Necesidad: lo que necesito', 'Pedido: lo que pido', 'Escucha de la otra persona'],
        caption: 'Se usan para expresarte y para escuchar. La conversación vuelve a empezar con lo que la otra persona observa, siente y necesita.',
      },
      related: {
        practices: ['cnv-observar-sin-evaluar', 'cnv-nombrar-lo-que-siento', 'cnv-necesidad-detras', 'cnv-pedido-concreto', 'cnv-escucha-empatica', 'cnv-autoempatia', 'dear-man'],
        articles: ['cnv-dia-a-dia', 'asertividad-y-limites'],
      },
      references: [ROSENBERG_2003, ROGERS_1957, LIEBERMAN_2007],
    },
    {
      id: 'cnv-dia-a-dia',
      title: 'CNV en el día a día: gratitud, enojo y decir que no',
      subtitle: 'Cómo usar la comunicación no violenta para agradecer, expresar enojo sin herir y decir o escuchar un «no».',
      category: 'Relaciones',
      readingMin: 8,
      keyPoints: [
        'En la CNV, agradecer es decir qué hizo la otra persona, qué necesidad tuya cubrió y cómo te sientes.',
        'Rosenberg ve el enojo como una señal de un juicio y, debajo, de una necesidad no cubierta.',
        'Expresar el enojo a fondo es nombrar la necesidad, no descargar el juicio.',
        'Un «no» suele ser un «sí» a otra necesidad.',
        'Con alguien violento, la prioridad es la seguridad, no la forma de hablar.',
      ],
      sections: [
        {
          heading: 'Gratitud en CNV',
          paragraphs: [
            'Rosenberg dedica una parte de su libro a la gratitud. Propone no agradecer con elogios generales, como «eres genial», sino con los mismos componentes: qué hizo la persona, qué necesidad tuya cubrió y cómo te sientes.',
            'Lenguaje chacal (reactivo): «Eres el mejor». Es amable, pero es un juicio, aunque sea positivo, y no dice qué te llegó.',
            'Lenguaje jirafa (CNV): «Cuando ayer te quedaste con los chicos, pude descansar. Me siento aliviada y agradecida».',
            'Recibir gratitud también se aprende. En lugar de restarle valor («no fue nada»), puedes alegrarte de haber cubierto una necesidad de otra persona.',
          ],
        },
        {
          heading: 'Expresar el enojo',
          paragraphs: [
            'Rosenberg trata el enojo en su libro. Para él, lo que otra persona hace es el estímulo del enojo, pero no la causa. La causa está en lo que pensamos: juicios sobre lo que el otro «debería» hacer. Debajo hay una necesidad no cubierta.',
            'Expresar el enojo a fondo, en la CNV, no es callarlo ni gritarlo. Es parar, respirar, notar los juicios que pasan por la cabeza y conectar con la necesidad. Después se dice lo que se siente y necesita.',
            'Lenguaje chacal (reactivo): «¡Eres un irresponsable! ¡Otra vez te olvidaste de pagar la luz!».',
            'Lenguaje jirafa (CNV): «Vi que la factura de la luz venció ayer. Estoy enojado y preocupado porque necesito tranquilidad con las cuentas. ¿Podemos ver juntos cómo organizarnos?».',
            'Si el enojo es muy fuerte, primero baja la activación del cuerpo. Una conversación así se tiene mejor con calma.',
          ],
        },
        {
          heading: 'Decir que no',
          paragraphs: [
            'Desde la CNV, decir que no es decir sí a una necesidad propia. Puedes nombrarla y, si quieres, ofrecer otra opción.',
            'Lenguaje chacal (reactivo): «No, no puedo. Siempre me pides cosas a último momento».',
            'Lenguaje jirafa (CNV): «Hoy no puedo cuidar al perro, porque necesito descansar después de una semana larga. ¿Te sirve el domingo?».',
          ],
        },
        {
          heading: 'Escuchar un no',
          paragraphs: [
            'Recibir un «no» duele menos si lo escuchas como un «sí» a algo que la otra persona necesita. Puedes preguntar qué es y buscar juntos otra salida.',
            'Lenguaje chacal (reactivo): «Claro, como siempre, nunca puedes nada».',
            'Lenguaje jirafa (CNV): «Entiendo. ¿Estás con mucho trabajo y necesitas guardar tiempo para ti?».',
          ],
        },
        {
          heading: 'Cuándo no alcanza',
          paragraphs: [
            'La CNV es útil entre personas que se respetan y quieren entenderse. No sirve para convencer a alguien que te maltrata, ni para tapar un abuso con palabras suaves.',
            'Si vives violencia, no tienes que encontrar las palabras justas: lo primero es tu seguridad. Llama a la Línea 144 o, si hay peligro ya, al 911. Si los conflictos de pareja o de familia se repiten y duelen, una terapia puede ayudar más que cualquier técnica de comunicación.',
          ],
        },
      ],
      caveat: { title: 'Qué dice la evidencia y cuándo no alcanza', body: CAVEAT_BODY },
      related: {
        practices: ['cnv-pedido-concreto', 'cnv-escucha-empatica', 'cnv-autoempatia', 'cnv-necesidad-detras'],
        articles: ['cnv-cuatro-componentes', 'asertividad-y-limites', 'violencia-de-genero-informacion'],
      },
      references: [ROSENBERG_2003],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'cnv-seis-semanas',
      title: 'Comunicación no violenta en 6 semanas',
      subtitle: 'Observar, sentir, necesitar, pedir, escuchar y escucharte',
      description:
        'Cada semana practicarás un componente de la comunicación no violenta de Marshall Rosenberg, de lo más simple a lo más difícil. La evidencia sobre la CNV es preliminar: tómalo como un entrenamiento práctico. No reemplaza una terapia de pareja. Si vives violencia, lo primero es tu seguridad: Línea 144 o 911.',
      basis: 'Rosenberg (2003).',
      rhythm: '10 minutos, 4 o 5 días por semana, y una conversación real para probar.',
      weeks: [
        {
          title: 'Semana 1 · Observar',
          focus: 'Hechos y juicios',
          description: 'Leerás los cuatro componentes de la CNV y practicarás describir lo que pasó como lo grabaría una cámara.',
          practiceIds: ['cnv-observar-sin-evaluar'],
          articleIds: ['cnv-cuatro-componentes'],
        },
        {
          title: 'Semana 2 · Sentir',
          focus: 'Sentimientos y pseudosentimientos',
          description: 'Practicarás poner nombre a lo que sientes y separar los sentimientos de frases como «me siento ignorado».',
          practiceIds: ['cnv-nombrar-lo-que-siento'],
          articleIds: [],
          journalType: 'escritura-expresiva',
        },
        {
          title: 'Semana 3 · Necesitar',
          focus: 'La necesidad detrás',
          description: 'Buscarás qué necesidad está detrás de lo que sientes y la separarás de la estrategia.',
          practiceIds: ['cnv-necesidad-detras'],
          articleIds: [],
          journalType: 'necesidades',
        },
        {
          title: 'Semana 4 · Pedir',
          focus: 'Pedido y exigencia',
          description: 'Convertirás una queja en un pedido concreto y prepararás una conversación real.',
          practiceIds: ['cnv-pedido-concreto'],
          articleIds: [],
          journalType: 'conversacion',
        },
        {
          title: 'Semana 5 · Escuchar',
          focus: 'Escucha empática',
          description: 'Practicarás escuchar el sentimiento y la necesidad de otra persona, aunque te hable con un juicio.',
          practiceIds: ['cnv-escucha-empatica'],
          articleIds: [],
        },
        {
          title: 'Semana 6 · Escucharte',
          focus: 'Autoempatía, gratitud, enojo y «no»',
          description: 'Traducirás tu propio lenguaje chacal y llevarás la CNV a la gratitud, al enojo y a decir que no.',
          practiceIds: ['cnv-autoempatia', 'pausa-autocompasion'],
          articleIds: ['cnv-dia-a-dia'],
          journalType: 'carta-compasiva',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-cnv-que-es',
      title: 'Hablar como una jirafa',
      subtitle: 'Saber qué es la CNV y cuáles son sus cuatro pasos.',
      slides: [
        { heading: 'Qué es', text: 'La CNV es una forma de hablar y de escuchar. La creó Marshall Rosenberg. Busca entenderse antes que ganar.' },
        { heading: 'Dos animales', text: 'Rosenberg usa dos metáforas. El chacal juzga, culpa y exige. La jirafa dice lo que siente y lo que necesita.' },
        { heading: 'Cuatro pasos', text: 'Lo que pasó. Lo que sientes. Lo que necesitas. Lo que pides. Sirven para hablar y para escuchar.' },
        { heading: 'Chacal', text: '«¡Nunca me escuchas!»' },
        { heading: 'Jirafa', text: '«Te hablé y miraste el celular. Me sentí triste. Necesito que me prestes atención. ¿Podemos hablar sin el celular?»' },
        { heading: 'Prueba', text: 'Hoy, piensa en una queja que tengas. Escríbela con los cuatro pasos. No hace falta decirla todavía.' },
      ],
      related: { practices: ['cnv-observar-sin-evaluar'], articles: ['cnv-cuatro-componentes'] },
      references: [ROSENBERG_2003],
    },
    {
      id: 'pildora-cnv-observacion',
      title: 'Lo que grabaría una cámara',
      subtitle: 'Aprender a separar lo que pasó de lo que piensas de eso.',
      slides: [
        { heading: 'Hecho y juicio', text: 'Un hecho es lo que se vio o se oyó. Un juicio es lo que piensas de eso. Los dos valen, pero conviene no mezclarlos.' },
        { heading: 'Por qué importa', text: 'Si la otra persona oye un juicio, se defiende. Si oye un hecho, puede seguir escuchando.' },
        { heading: 'Señales', text: '«Siempre», «nunca» y «otra vez» suelen ser juicios. También palabras como «vago» o «egoísta».' },
        { heading: 'Chacal', text: '«Eres un desordenado.»' },
        { heading: 'Jirafa', text: '«Hay tres pares de zapatos en el pasillo desde el lunes.»' },
        { heading: 'Prueba', text: 'Elige algo que te molestó hoy. Escríbelo como lo grabaría una cámara, con día y hora.' },
      ],
      related: { practices: ['cnv-observar-sin-evaluar'], articles: ['cnv-cuatro-componentes'] },
      references: [ROSENBERG_2003],
    },
    {
      id: 'pildora-cnv-sentimientos',
      title: 'Ponerle nombre',
      subtitle: 'Aprender a decir lo que sientes con palabras simples.',
      slides: [
        { heading: 'Sentir', text: 'Un sentimiento es lo que pasa adentro tuyo. Triste, enojada, con miedo, cansado, en paz, contenta.' },
        { heading: 'Nombrar ayuda', text: 'Ponerle nombre a lo que sientes ayuda a calmarlo. Y a que el otro te entienda.' },
        { heading: 'Empieza por el cuerpo', text: 'Si no sabes qué sientes, mira el cuerpo. ¿Hay un nudo en la panza? ¿Calor en la cara? ¿Peso en el pecho?' },
        { heading: 'Chacal', text: '«¡Me tienes harta!»' },
        { heading: 'Jirafa', text: '«Estoy cansada y frustrada.»' },
        { heading: 'Prueba', text: 'Tres veces hoy, para un momento y dite cómo te sientes con una sola palabra.' },
      ],
      related: { practices: ['cnv-nombrar-lo-que-siento'], articles: ['cnv-cuatro-componentes'] },
      references: [ROSENBERG_2003, LIEBERMAN_2007],
    },
    {
      id: 'pildora-cnv-pseudosentimientos',
      title: '«Me siento ignorado» no es un sentimiento',
      subtitle: 'Aprender a distinguir un sentimiento de un pseudosentimiento.',
      slides: [
        { heading: 'Parecen, pero no', text: '«Ignorado», «usado» o «traicionado» parecen sentimientos. Pero hablan de lo que crees que el otro te hizo.' },
        { heading: 'Otra trampa', text: 'Si después de «me siento» viene «que», es un pensamiento. «Siento que no te importo» es una idea.' },
        { heading: 'Lo de debajo', text: 'Debajo de esas palabras suele haber tristeza, miedo, enojo o soledad. Eso es lo que sientes.' },
        { heading: 'Chacal', text: '«Me siento ignorado por ti.»' },
        { heading: 'Jirafa', text: '«Me siento triste y solo.»' },
        { heading: 'Prueba', text: 'La próxima vez que digas «me siento…», revisa la palabra. ¿Habla de ti o del otro?' },
      ],
      related: { practices: ['cnv-nombrar-lo-que-siento'], articles: ['cnv-cuatro-componentes'] },
      references: [ROSENBERG_2003],
    },
    {
      id: 'pildora-cnv-necesidades',
      title: 'Lo que todas las personas necesitamos',
      subtitle: 'Aprender a encontrar la necesidad detrás de lo que sientes.',
      slides: [
        { heading: 'La raíz', text: 'Lo que el otro hace puede disparar lo que sientes. Pero la raíz es una necesidad tuya.' },
        { heading: 'Universales', text: 'Descanso, respeto, cercanía, orden o seguridad. Rosenberg dice que todas las personas las tenemos.' },
        { heading: 'No es una estrategia', text: '«Necesito que me llames» es una estrategia. La necesidad puede ser cercanía. Para eso hay muchos caminos.' },
        { heading: 'Chacal', text: '«Me pones nerviosa con tanto ruido.»' },
        { heading: 'Jirafa', text: '«Me siento inquieta porque necesito silencio para concentrarme.»' },
        { heading: 'Prueba', text: 'Elige algo que sentiste hoy. Completa: «Me siento… porque necesito…».' },
      ],
      related: { practices: ['cnv-necesidad-detras'], articles: ['cnv-cuatro-componentes'] },
      references: [ROSENBERG_2003],
    },
    {
      id: 'pildora-cnv-pedido',
      title: 'Pedir, no exigir',
      subtitle: 'Aprender a hacer un pedido concreto y a notar cuándo es una exigencia.',
      slides: [
        { heading: 'Concreto', text: 'Un buen pedido dice qué, cuándo y cómo. «Respétame» es vago. «¿Puedes bajar la voz?» es claro.' },
        { heading: 'En positivo', text: 'Pide lo que sí quieres. «No me grites» no dice qué hacer en cambio.' },
        { heading: 'La prueba del no', text: 'Si te dicen que no y quieres castigar, era una exigencia. Si quieres entender, era un pedido.' },
        { heading: 'Chacal', text: '«Tienes que ayudar más en casa.»' },
        { heading: 'Jirafa', text: '«¿Podrías poner la mesa los días que yo cocino?»' },
        { heading: 'Prueba', text: 'Elige una queja. Pásala a un pedido concreto y en positivo. Si te animas, hazlo hoy.' },
      ],
      related: { practices: ['cnv-pedido-concreto'], articles: ['cnv-cuatro-componentes'] },
      references: [ROSENBERG_2003],
    },
    {
      id: 'pildora-cnv-escucha',
      title: 'Escuchar lo que hay debajo',
      subtitle: 'Aprender a escuchar el sentimiento y la necesidad detrás de una queja.',
      slides: [
        { heading: 'Escuchar', text: 'Escuchar con empatía es buscar qué siente y qué necesita la otra persona. Aunque te hable con un juicio.' },
        { heading: 'Lo que no es', text: 'No es dar consejos, corregir ni contar tu historia. Tampoco es estar de acuerdo.' },
        { heading: 'Preguntar', text: 'Puedes adivinar en voz alta. Si te equivocas, la otra persona te corrige. No pasa nada.' },
        { heading: 'Chacal', text: 'Te dicen «¡Nunca me ayudas!». Respondes: «¡Ayer lavé los platos!».' },
        { heading: 'Jirafa', text: 'Te dicen «¡Nunca me ayudas!». Preguntas: «¿Estás agotada y necesitas más ayuda?».' },
        { heading: 'Prueba', text: 'En tu próxima charla, antes de responder, pregunta: «¿Te sientes… porque necesitas…?».' },
      ],
      related: { practices: ['cnv-escucha-empatica'], articles: ['cnv-cuatro-componentes'] },
      references: [ROSENBERG_2003, ROGERS_1957],
    },
    {
      id: 'pildora-cnv-autoempatia',
      title: 'Cuando el chacal te habla a ti',
      subtitle: 'Aprender a escucharte con empatía cuando te criticas.',
      slides: [
        { heading: 'El chacal de adentro', text: 'A veces el chacal habla hacia adentro. «Soy un desastre.» «Debería haberlo sabido.»' },
        { heading: 'Escucharte', text: 'La autoempatía es escucharte como a otra persona. ¿Qué siento? ¿Qué necesitaba?' },
        { heading: 'Lamentar sin castigo', text: 'Puedes lamentar lo que hiciste desde lo que valoras. Sin pegarte.' },
        { heading: 'Chacal', text: '«Soy un idiota, otra vez llegué tarde.»' },
        { heading: 'Jirafa', text: '«Estoy frustrado. Me hubiera gustado llegar a tiempo, porque valoro cumplir.»' },
        { heading: 'Prueba', text: 'Cuando te critiques hoy, escribe el juicio. Debajo, anota qué sientes y qué necesitas.' },
      ],
      related: { practices: ['cnv-autoempatia', 'pausa-autocompasion'], articles: ['cnv-cuatro-componentes'] },
      references: [ROSENBERG_2003, NEFF_2003],
    },
    {
      id: 'pildora-cnv-enojo',
      title: 'Enojo sin herir',
      subtitle: 'Aprender a expresar el enojo desde la necesidad y no desde el juicio.',
      slides: [
        { heading: 'Una señal', text: 'Rosenberg ve el enojo como una señal. Detrás hay un juicio sobre lo que el otro «debería» hacer. Y debajo, una necesidad.' },
        { heading: 'Los pasos', text: 'Para. Respira. Nota los juicios que pasan por tu cabeza. Busca la necesidad. Después habla.' },
        { heading: 'Ni callar ni gritar', text: 'No se trata de tragarte el enojo. Se trata de decir lo que hay debajo.' },
        { heading: 'Chacal', text: '«¡Eres un irresponsable! ¡Te olvidaste otra vez!»' },
        { heading: 'Jirafa', text: '«Vi que venció la factura. Estoy enojado porque necesito tranquilidad con las cuentas. ¿Lo vemos juntos?»' },
        { heading: 'Prueba', text: 'La próxima vez que te enojes, espera antes de hablar. Escribe tu juicio y busca la necesidad.' },
      ],
      related: { practices: ['cnv-necesidad-detras', 'cnv-autoempatia'], articles: ['cnv-dia-a-dia'] },
      references: [ROSENBERG_2003],
    },
    {
      id: 'pildora-cnv-decir-no',
      title: 'Decir y escuchar un no',
      subtitle: 'Aprender a decir que no y a escuchar un no sin tomarlo como rechazo.',
      slides: [
        { heading: 'Un sí a otra cosa', text: 'En la CNV, un «no» suele ser un «sí» a otra necesidad. A descansar, a cuidar tu tiempo, a otra tarea.' },
        { heading: 'Decirlo', text: 'Puedes decir que no y nombrar tu necesidad. Si quieres, ofrece otra opción.' },
        { heading: 'Escucharlo', text: 'Cuando te dicen que no, pregunta qué necesita la otra persona. Así pueden buscar otra salida.' },
        { heading: 'Chacal', text: '«No. Siempre me pides cosas a último momento.»' },
        { heading: 'Jirafa', text: '«Hoy no puedo, necesito descansar. ¿Te sirve el domingo?»' },
        { heading: 'Prueba', text: 'Piensa en algo a lo que quieres decir que no. Escribe tu «no» con tu necesidad y una opción.' },
      ],
      related: { practices: ['cnv-pedido-concreto', 'cnv-escucha-empatica'], articles: ['cnv-dia-a-dia'] },
      references: [ROSENBERG_2003],
    },
    {
      id: 'pildora-cnv-gratitud',
      title: 'Agradecer como una jirafa',
      subtitle: 'Aprender a agradecer diciendo qué te llegó y por qué.',
      slides: [
        { heading: 'Más que un elogio', text: '«Eres genial» es amable. Pero no dice qué te llegó. Rosenberg propone agradecer con los cuatro pasos.' },
        { heading: 'Los pasos', text: 'Qué hizo la persona. Qué necesidad tuya cubrió. Cómo te sientes ahora.' },
        { heading: 'Recibir', text: 'Cuando te agradecen, no hace falta decir «no fue nada». Puedes alegrarte.' },
        { heading: 'Chacal', text: '«Eres el mejor.»' },
        { heading: 'Jirafa', text: '«Ayer te quedaste con los chicos y pude descansar. Me siento aliviada y agradecida.»' },
        { heading: 'Prueba', text: 'Hoy, agradece algo a alguien con los tres pasos. Puede ser en persona o por mensaje.' },
      ],
      related: { practices: ['cnv-necesidad-detras'], articles: ['cnv-dia-a-dia'] },
      references: [ROSENBERG_2003],
    },
    {
      id: 'pildora-cnv-limites',
      title: 'Cuando la CNV no alcanza',
      subtitle: 'Saber cuándo la CNV no es la herramienta y qué hacer entonces.',
      slides: [
        { heading: 'Entre personas que se respetan', text: 'La CNV ayuda cuando las dos partes quieren entenderse. No sirve para frenar a alguien que te maltrata.' },
        { heading: 'Poca evidencia', text: 'Mucha gente la encuentra útil. Pero hay pocos estudios y son débiles. Es una guía, no un tratamiento.' },
        { heading: 'No reemplaza', text: 'No reemplaza una terapia de pareja o de familia. Si los conflictos se repiten y duelen, consulta.' },
        { heading: 'Chacal', text: 'Pensar: «Si hablo mejor, va a dejar de gritarme y empujarme».' },
        { heading: 'Jirafa', text: 'Pensar: «No es mi forma de hablar. Necesito estar a salvo y pedir ayuda».' },
        { heading: 'Prueba', text: 'Si vives violencia, lo primero es tu seguridad. Llama a la Línea 144 o, si hay peligro, al 911. También tienes el botón Ayuda.' },
      ],
      related: { practices: ['cnv-autoempatia'], articles: ['cnv-dia-a-dia', 'violencia-de-genero-informacion'] },
      references: [ROSENBERG_2003],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'observacion-cnv', term: 'Observación (CNV)', definition: 'Describir lo que pasó como lo registraría una cámara, sin mezclarlo con juicios. Es el primer paso de la comunicación no violenta.', articleId: 'cnv-cuatro-componentes', practiceId: 'cnv-observar-sin-evaluar' },
    { id: 'pseudosentimiento', term: 'Pseudosentimiento', definition: 'Palabra que parece un sentimiento pero describe lo que creemos que otro nos hizo, como «ignorado» o «manipulado». Debajo suele haber tristeza, miedo o enojo.', articleId: 'cnv-cuatro-componentes', practiceId: 'cnv-nombrar-lo-que-siento' },
    { id: 'necesidad-cnv', term: 'Necesidad (CNV)', definition: 'Lo que toda persona necesita para estar bien, como descanso, respeto o cercanía. No incluye a alguien concreto haciendo algo: eso es una estrategia.', articleId: 'cnv-cuatro-componentes', practiceId: 'cnv-necesidad-detras' },
    { id: 'pedido-cnv', term: 'Pedido (CNV)', definition: 'Pedir algo concreto, en positivo y posible ahora. A diferencia de una exigencia, acepta un «no» sin culpa ni castigo.', articleId: 'cnv-cuatro-componentes', practiceId: 'cnv-pedido-concreto' },
    { id: 'escucha-empatica', term: 'Escucha empática', definition: 'Escuchar buscando qué siente y qué necesita la otra persona, sin aconsejar, corregir ni defenderse. No es estar de acuerdo.', articleId: 'cnv-cuatro-componentes', practiceId: 'cnv-escucha-empatica' },
    { id: 'lenguaje-jirafa', term: 'Lenguaje jirafa', definition: 'Metáfora de Marshall Rosenberg para hablar desde lo que se siente y se necesita. Se opone al «lenguaje chacal», que juzga, culpa y exige.', articleId: 'cnv-cuatro-componentes' },
  ],
};
