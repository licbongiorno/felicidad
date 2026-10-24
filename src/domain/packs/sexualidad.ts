import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Sexualidad»: vida sexual de adultos, desde la psicoeducación.
 *  - deseo espontáneo y deseo responsivo (Basson), frenos y aceleradores (Nagoski);
 *  - diferencias de deseo en la pareja (Mark y Lasslo);
 *  - ansiedad de desempeño y atención puesta en el rendimiento (Barlow; Masters y Johnson);
 *  - focalización sensorial por etapas (Masters y Johnson), con riesgo 2;
 *  - atención plena para el deseo (Brotto);
 *  - hablar de sexo con la pareja: pedir, decir que no, consentimiento.
 *
 * Reglas de seguridad del paquete: nada explícito; lenguaje inclusivo de todas las
 * orientaciones y de quienes no tienen pareja; el consentimiento va primero y puede
 * retirarse en cualquier momento; el dolor y las dificultades persistentes se consultan
 * con un médico o sexólogo; la medicación no se cambia sin quien la indicó; si hubo
 * violencia sexual, no hay ejercicios: se deriva (Línea 144, 911).
 */

const BASSON_2000: Reference = { citation: 'Basson, R. (2000). The female sexual response: A different model. Journal of Sex & Marital Therapy, 26(1), 51–65.' };
const MASTERS_1970: Reference = { citation: 'Masters, W. H., & Johnson, V. E. (1970). Human sexual inadequacy. Little, Brown.' };
const BROTTO_2018: Reference = { citation: 'Brotto, L. A. (2018). Better sex through mindfulness: How women can cultivate desire. Greystone Books.' };
const BARLOW_1986: Reference = {
  citation: 'Barlow, D. H. (1986). Causes of sexual dysfunction: The role of anxiety and cognitive interference. Journal of Consulting and Clinical Psychology, 54(2), 140–148.',
};
const NAGOSKI_2015: Reference = { citation: 'Nagoski, E. (2015). Come as you are: The surprising new science that will transform your sex life. Simon & Schuster.' };
const MARK_2018: Reference = {
  citation: 'Mark, K. P., & Lasslo, J. A. (2018). Maintaining sexual desire in long-term relationships: A systematic review and conceptual model. The Journal of Sex Research, 55(4–5), 563–581.',
};

/** Aviso común: cuándo consultar, medicación y violencia sexual. */
const CONSULTA =
  'Si sientes dolor, o si una dificultad dura meses o te angustia mucho, consulta con un médico, ginecólogo, urólogo o sexólogo. Algunas enfermedades y medicamentos cambian el deseo: no dejes ni cambies una medicación sin hablar con quien te la indicó. Si viviste violencia sexual, esto no es un ejercicio para hacer por tu cuenta: puedes llamar a la Línea 144 y, ante un peligro, al 911.';

export const SEXUALIDAD_PACK: ContentPack = {
  id: 'sexualidad',

  // ================================================================== prácticas
  practices: [
    {
      id: 'mapa-de-mi-deseo',
      title: 'El mapa de mi deseo',
      family: 'constructive',
      skills: ['attention', 'compassion'],
      summary: 'Conocer cómo aparece tu deseo y anotar qué lo enciende y qué lo frena. Sirve con pareja o sin pareja.',
      mechanism: 'Entender que el deseo puede aparecer antes o después de empezar a estar cerca, y que depende del contexto, baja la culpa y abre opciones.',
      evidenceLevel: 'preliminar',
      evidence: [BASSON_2000, NAGOSKI_2015],
      howItWorks: [
        'Rosemary Basson propuso un modelo distinto del deseo. A veces el deseo aparece de golpe: es el deseo espontáneo. Otras veces aparece después, cuando ya hay cercanía, caricias o un buen clima: es el deseo responsivo. Los dos son normales (Basson, 2000).',
        'Emily Nagoski habla de aceleradores y frenos. Los aceleradores son lo que te acerca al deseo: un clima tranquilo, sentir cuidado, una caricia. Los frenos son lo que lo apaga: el cansancio, el estrés, las preocupaciones o sentir presión (Nagoski, 2015).',
        'Muchas veces el problema no es que falte deseo, sino que hay muchos frenos apretados. Conocer tu mapa te ayuda a cuidar el contexto.',
      ],
      tips: [
        'No hay respuestas correctas. Cada persona tiene su propio mapa.',
        'Piensa en el contexto: el lugar, el momento del día, cómo estaba tu ánimo.',
        'Si tienes pareja, cada quien puede hacer su mapa y después compartir lo que quiera.',
      ],
      obstacles: [
        { q: 'Casi nunca siento deseo de golpe.', a: 'Es muy común, sobre todo en parejas de muchos años. El deseo responsivo también es deseo. Fíjate qué pasa cuando el contexto es bueno.' },
        { q: 'No tengo pareja.', a: 'El mapa es tuyo. Te sirve para conocerte, cuidar tu bienestar y saber qué quieres en el futuro.' },
      ],
      cautions: CONSULTA,
      steps: [
        { title: 'Llegar', instruction: 'Siéntate en un lugar tranquilo. Respira despacio tres veces.', durationSec: 30, kind: 'breath' },
        { title: 'Dos formas', instruction: 'Recuerda que el deseo puede llegar de golpe o aparecer después, con la cercanía. Las dos formas son normales.', durationSec: 40, kind: 'instruction' },
        { title: 'Aceleradores', instruction: 'Anota tres cosas que te acercan al deseo. Puede ser un lugar, un momento, un gesto o cómo te sientes.', durationSec: 75, kind: 'reflection' },
        { title: 'Frenos', instruction: 'Anota tres cosas que lo apagan. Por ejemplo, el cansancio, el estrés, una pelea o sentir presión.', durationSec: 75, kind: 'reflection' },
        { title: 'Un freno menos', instruction: 'Elige un freno que puedas aflojar un poco esta semana. Escribe un paso chico.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Dite: «Mi deseo tiene su forma, y está bien».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'atencion-a-las-sensaciones',
      title: 'Volver a las sensaciones',
      family: 'attentional',
      skills: ['attention'],
      summary: 'Una práctica de atención plena, a solas y con ropa, para notar sensaciones del cuerpo sin juzgar. Es la base del trabajo de Lori Brotto sobre el deseo.',
      mechanism: 'La atención plena entrena a quedarse en las sensaciones en lugar de quedar atrapado en juicios. Eso ayuda al deseo, que necesita presencia.',
      evidenceLevel: 'moderada',
      evidence: [BROTTO_2018],
      howItWorks: [
        'Lori Brotto adaptó la atención plena para personas con poco deseo o con dificultades sexuales. Sus programas en grupo incluyen prácticas como ésta, y en sus estudios mejoraron el deseo y el malestar sexual (Brotto, 2018).',
        'La idea no es sentir algo especial. Es notar lo que hay: calor, frío, peso, roce, cosquillas. Cuando aparece un juicio, lo notas y vuelves a la sensación.',
        'Esta práctica es a solas, con ropa y sin ningún objetivo sexual. Es un entrenamiento de la atención.',
      ],
      tips: [
        'Hazla en un momento sin apuro y sin interrupciones.',
        'Si la mente se va, es normal. Volver es la práctica.',
        'Nombra en voz baja lo que sientes: «calor», «peso», «roce».',
      ],
      obstacles: [{ q: 'Me juzgo todo el tiempo.', a: 'Es muy común. Cuando aparezca un juicio, dite «juicio» y vuelve a una sensación simple, como las manos o los pies.' }],
      steps: [
        { title: 'Llegar', instruction: 'Acuéstate o siéntate con comodidad, con ropa. Cierra los ojos si quieres.', durationSec: 30, kind: 'instruction' },
        { title: 'Respirar', instruction: 'Siente el aire que entra y sale. No lo cambies, sólo nótalo.', durationSec: 60, kind: 'breath' },
        { title: 'Las manos', instruction: 'Lleva la atención a las manos. Nota el calor, el peso, el contacto con la ropa.', durationSec: 60, kind: 'instruction' },
        { title: 'Todo el cuerpo', instruction: 'Recorre el cuerpo despacio, de los pies a la cabeza. Nota lo que sientes en cada parte.', durationSec: 120, kind: 'instruction' },
        { title: 'Los juicios', instruction: 'Si aparece un juicio sobre tu cuerpo, dite «juicio». Vuelve a una sensación simple.', durationSec: 60, kind: 'instruction' },
        { title: 'Lo agradable', instruction: 'Busca una sensación agradable, aunque sea chica. El calor de las manos, la manta. Quédate ahí un rato.', durationSec: 60, kind: 'breath' },
        { title: 'Cerrar', instruction: 'Respira hondo. Abre los ojos y mueve el cuerpo despacio.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'del-rendimiento-al-presente',
      title: 'Del rendimiento al presente',
      family: 'attentional',
      skills: ['attention', 'resilience'],
      summary: 'Notar cuándo la atención se va a «cómo me está yendo» y practicar volver a las sensaciones y al vínculo.',
      mechanism: 'La preocupación por rendir lleva la atención hacia afuera y lejos de las sensaciones. Eso baja la excitación y aumenta la preocupación. Volver al presente corta el ciclo.',
      evidenceLevel: 'preliminar',
      evidence: [BARLOW_1986, MASTERS_1970],
      howItWorks: [
        'Masters y Johnson describieron que muchas personas, en la intimidad, se miran desde afuera como un espectador que evalúa. En lugar de sentir, se preguntan si lo están haciendo bien (Masters y Johnson, 1970).',
        'David Barlow mostró que lo que más pesa no es la ansiedad en sí, sino a dónde va la atención. Cuando se va a la evaluación y al miedo a fallar, la excitación baja. Y eso confirma el miedo (Barlow, 1986).',
        'Esta práctica entrena el gesto de notar «me fui a evaluar» y volver con suavidad. Primero se ensaya en calma, lejos de la intimidad.',
      ],
      tips: [
        'Ensaya primero en situaciones comunes: comiendo, en la ducha, caminando.',
        'Una frase corta ayuda: «evaluando», y vuelves a una sensación.',
        'El objetivo no es rendir mejor. Es estar más presente.',
      ],
      obstacles: [{ q: 'Si dejo de controlar, temo que salga mal.', a: 'Es la trampa del ciclo. Controlar aumenta la presión. Prueba sacar el objetivo por un tiempo y poner la atención en sentir.' }],
      cautions:
        'Las dificultades de erección, de excitación o de orgasmo que duran meses pueden tener causas físicas, como problemas del corazón, diabetes, hormonas o medicamentos. Conviene consultar. ' + CONSULTA,
      steps: [
        { title: 'Llegar', instruction: 'Siéntate con comodidad. Respira despacio y siente el apoyo del cuerpo.', durationSec: 30, kind: 'breath' },
        { title: 'Reconocer', instruction: 'Piensa en una situación en la que sientes que te evalúan. ¿Qué te dices? Anota esas frases.', durationSec: 60, kind: 'reflection' },
        { title: 'El ciclo', instruction: 'Nota el ciclo: me preocupo, me miro desde afuera, siento menos, me preocupo más.', durationSec: 45, kind: 'instruction' },
        { title: 'Ensayar', instruction: 'Imagina que aparece una de esas frases. Dite «evaluando» y lleva la atención a tus manos.', durationSec: 60, kind: 'instruction' },
        { title: 'Volver', instruction: 'Nota el calor, el roce, la respiración. Si la mente vuelve a evaluar, vuelve tú también a sentir.', durationSec: 75, kind: 'breath' },
        { title: 'Un objetivo nuevo', instruction: 'Escribe un objetivo distinto para tu intimidad. Por ejemplo: «sentir y disfrutar», en lugar de «rendir».', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'focalizacion-sensorial',
      title: 'Focalización sensorial en pareja',
      family: 'attentional',
      skills: ['attention', 'compassion'],
      summary: 'Un ejercicio de pareja por etapas: turnos de caricias sin objetivo sexual, con acuerdos claros y la libertad de parar.',
      mechanism: 'Al sacar la meta y la presión, la atención vuelve a las sensaciones. La pareja aprende a tocarse y a comunicarse sin miedo a fallar.',
      evidenceLevel: 'preliminar',
      evidence: [MASTERS_1970, BROTTO_2018],
      howItWorks: [
        'La focalización sensorial fue creada por Masters y Johnson y todavía se usa en terapia sexual. Se hace en etapas. En la primera, la pareja se da caricias por turnos, sin tocar zonas genitales ni pechos, y sin buscar sexo (Masters y Johnson, 1970).',
        'Quitar la meta es la clave. Si no hay nada que lograr, no hay forma de fallar. La atención puede volver a lo que se siente: temperatura, textura, presión.',
        'Esta práctica guía sólo la primera etapa. Las etapas siguientes conviene trabajarlas con un sexólogo, que las adapta a cada pareja.',
      ],
      tips: [
        'Acuerden antes que esta vez no habrá sexo. Eso saca presión.',
        'Cualquiera puede decir «paro» en cualquier momento, sin explicar.',
        'Quien recibe sólo nota lo que siente. Quien da, explora con curiosidad.',
        'Hagan varias sesiones antes de pasar a otra etapa.',
      ],
      obstacles: [{ q: 'Nos da risa o vergüenza.', a: 'Es muy común al principio. Pueden reírse y seguir. Con las sesiones suele volverse más natural.' }],
      cautions:
        'Sólo hazla si las dos personas lo quieren de verdad. Si hay dolor, miedo o recuerdos que angustian, para y consulta. Si en la pareja hay violencia, este ejercicio no corresponde: pide ayuda a la Línea 144 o al 911 ante un peligro. ' + CONSULTA,
      steps: [
        { title: 'Acordar', instruction: 'Elijan un momento sin apuro. Acuerden en voz alta: «Hoy no habrá sexo. Cualquiera puede parar».', durationSec: 60, kind: 'instruction' },
        { title: 'Llegar', instruction: 'Siéntense cerca, con ropa cómoda. Respiren despacio juntos tres veces.', durationSec: 30, kind: 'breath' },
        { title: 'Primer turno', instruction: 'Una persona acaricia a la otra en brazos, manos, espalda o cara. Sin zonas genitales ni pechos.', durationSec: 180, kind: 'instruction' },
        { title: 'Notar', instruction: 'Quien recibe, sólo nota: calor, textura, presión. Si algo no gusta, lo dice o mueve la mano de la otra persona.', durationSec: 60, kind: 'instruction' },
        { title: 'Cambiar', instruction: 'Cambien los roles. Quien acariciaba ahora recibe, con las mismas reglas.', durationSec: 180, kind: 'instruction' },
        { title: 'Charlar', instruction: 'Cuéntense una cosa que les gustó y una que prefieren distinta. Sin críticas.', durationSec: 60, kind: 'reflection' },
      ],
    },
    {
      id: 'hablar-de-sexo-en-pareja',
      title: 'Hablar de sexo con la pareja',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Preparar una conversación para pedir lo que te gusta, decir que no con cuidado y hablar de diferencias de deseo sin culpas.',
      mechanism: 'En las parejas de muchos años, hablar abiertamente de sexo y cuidar el vínculo se asocia con mantener el deseo. El silencio deja que crezcan los malentendidos.',
      evidenceLevel: 'preliminar',
      evidence: [MARK_2018, NAGOSKI_2015],
      howItWorks: [
        'Una revisión de estudios sobre el deseo en parejas largas encontró que el deseo cambia con el tiempo y depende de muchas cosas. Entre ellas, la intimidad, la comunicación y el clima de la relación (Mark y Lasslo, 2018).',
        'Que una persona quiera más y otra menos es muy común. No significa que algo esté roto. Ayuda hablar sin culpas, buscar el contexto y recordar que hay muchas formas de intimidad.',
        'Pedir y decir que no son dos caras del mismo cuidado. Un «no» dicho con cariño protege el vínculo. Y el consentimiento puede cambiar en cualquier momento.',
      ],
      tips: [
        'Hablen fuera de la cama, en un momento tranquilo.',
        'Empieza por algo que valoras: «Me gusta cuando…».',
        'Para decir que no, ofrece otra forma de cercanía si la quieres: «Hoy no, pero me gustaría abrazarte».',
        'Escucha para entender, no para defenderte.',
      ],
      obstacles: [{ q: 'Me da mucha vergüenza.', a: 'Es lo más común. Pueden escribirse primero, o empezar por algo chico. Con la práctica se vuelve más fácil.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en tu intimidad con cariño, sin buscar culpables.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que valoras', instruction: 'Anota una cosa que te gusta de tu intimidad o de tu pareja. Así puedes empezar la charla.', durationSec: 45, kind: 'reflection' },
        { title: 'Pedir', instruction: 'Escribe un pedido claro y amable. Por ejemplo: «Me gustaría que tengamos más tiempo para estar juntos sin apuro».', durationSec: 60, kind: 'reflection' },
        { title: 'Decir que no', instruction: 'Escribe cómo dirías que no a algo, con cuidado. Puedes sumar otra forma de cercanía, si la quieres.', durationSec: 60, kind: 'reflection' },
        { title: 'Las diferencias', instruction: 'Si desean con distinta frecuencia, escribe una pregunta abierta. Por ejemplo: «¿Qué te ayuda a tener ganas?».', durationSec: 60, kind: 'reflection' },
        { title: 'El momento', instruction: 'Elige un momento tranquilo, fuera de la cama, para hablar. Anótalo.', durationSec: 30, kind: 'reflection' },
      ],
    },
  ],

  meta: {
    'mapa-de-mi-deseo': { level: 'iniciacion', approaches: ['tcc', 'escritura'], module: 'pareja' },
    'atencion-a-las-sensaciones': { level: 'iniciacion', approaches: ['mindfulness'], module: 'pareja' },
    'del-rendimiento-al-presente': { level: 'intermedio', approaches: ['tcc', 'mindfulness'], module: 'pareja', prerequisites: ['atencion-a-las-sensaciones'] },
    'focalizacion-sensorial': {
      level: 'intermedio',
      approaches: ['tcc', 'mindfulness'],
      module: 'pareja',
      prerequisites: ['atencion-a-las-sensaciones', 'hablar-de-sexo-en-pareja'],
      risk: { level: 2, alternative: 'respiracion-resonante' },
    },
    'hablar-de-sexo-en-pareja': { level: 'iniciacion', approaches: ['tcc'], module: 'pareja' },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'sexualidad-y-deseo',
      title: 'Sexualidad y deseo en la vida adulta',
      subtitle: 'Cómo funciona el deseo, por qué cambia, qué hacer con la ansiedad de desempeño y cuándo consultar.',
      category: 'Relaciones',
      readingMin: 10,
      keyPoints: [
        'El deseo puede aparecer de golpe o después de empezar a estar cerca. Las dos formas son normales.',
        'El deseo depende del contexto: hay aceleradores y frenos.',
        'Las diferencias de deseo en la pareja son muy comunes y se pueden hablar.',
        'La preocupación por rendir aleja la atención de las sensaciones y empeora el problema.',
        'El consentimiento es la base y se puede retirar en cualquier momento.',
        'El dolor o una dificultad que dura meses se consultan con un médico o sexólogo.',
      ],
      sections: [
        {
          heading: 'Dos formas de deseo',
          paragraphs: [
            'Durante años se pensó que el deseo siempre llega primero, y después viene lo demás. Rosemary Basson propuso otro modelo. Muchas personas, sobre todo en parejas largas, sienten el deseo después: cuando ya hay cercanía, caricias o un buen clima (Basson, 2000).',
            'Al primero se lo llama deseo espontáneo y al segundo, deseo responsivo. Los dos son sanos. Saberlo quita mucha culpa a quien piensa que «ya no tiene ganas como antes».',
          ],
        },
        {
          heading: 'Aceleradores y frenos',
          paragraphs: [
            'Emily Nagoski explica el deseo con una imagen simple: un acelerador y un freno. Los aceleradores son lo que acerca al deseo. Los frenos son lo que lo apaga: estrés, cansancio, preocupaciones, conflictos, sentir presión o vergüenza con el cuerpo (Nagoski, 2015).',
            'Muchas veces no falta acelerador, sino que hay demasiados frenos. Por eso cuidar el contexto ayuda tanto: descansar, tener tiempo sin apuro, sentirse en confianza.',
          ],
        },
        {
          heading: 'Cuando el deseo no coincide',
          paragraphs: [
            'Que una persona de la pareja quiera más y otra menos es de lo más común. Una revisión de estudios encontró que el deseo cambia a lo largo de la relación y depende de lo personal, de la pareja y del contexto (Mark y Lasslo, 2018).',
            'Ayuda hablar sin culpas, buscar juntos qué frena y qué acelera, y recordar que la intimidad incluye muchas formas de cercanía. Presionar o ceder sin ganas suele empeorar las cosas.',
          ],
        },
        {
          heading: 'La trampa del rendimiento',
          paragraphs: [
            'Masters y Johnson describieron un fenómeno muy común: mirarse desde afuera, como un espectador que evalúa, en lugar de sentir (Masters y Johnson, 1970). David Barlow mostró que esa atención puesta en el rendimiento y en el miedo a fallar baja la excitación (Barlow, 1986).',
            'Así se arma un ciclo. Me preocupo, me evalúo, siento menos, y la próxima vez me preocupo más. La salida es sacar la meta por un tiempo y volver la atención a las sensaciones.',
          ],
        },
        {
          heading: 'Atención plena y focalización sensorial',
          paragraphs: [
            'Lori Brotto adaptó la atención plena para el deseo. Entrenar la atención en las sensaciones, sin juzgar, mejoró el deseo y el malestar sexual en sus estudios con mujeres (Brotto, 2018).',
            'La focalización sensorial es un ejercicio de pareja por etapas. Se empieza con caricias por turnos, sin zonas genitales y sin buscar sexo. Al no haber meta, no hay forma de fallar. Las etapas siguientes conviene hacerlas con un sexólogo.',
          ],
        },
        {
          heading: 'Hablar, pedir y decir que no',
          paragraphs: [
            'Hablar de sexo da vergüenza a casi todo el mundo. Ayuda hacerlo fuera de la cama, empezar por lo que se valora y pedir con claridad. Decir que no con cariño también cuida el vínculo.',
            'El consentimiento es un sí libre, claro y que puede cambiar. Nadie le debe sexo a nadie, tampoco en una pareja estable. Si una persona duda o dice que no, se para.',
          ],
        },
        {
          heading: 'Cambios de la vida',
          paragraphs: [
            'El deseo cambia con la vida. El posparto, la crianza, la menopausia, una enfermedad, el dolor crónico o algunos medicamentos pueden cambiarlo mucho. No es un fracaso personal.',
            'Si crees que un medicamento te afecta, habla con quien te lo indicó. No lo dejes ni lo cambies por tu cuenta. Muchas veces hay alternativas.',
          ],
        },
        {
          heading: 'Cuándo consultar',
          paragraphs: [
            'Consulta con un médico, ginecólogo, urólogo o sexólogo si sientes dolor en las relaciones, si una dificultad dura meses o si te angustia mucho. Algunas dificultades, como las de erección, pueden ser una señal de otros problemas de salud.',
            'Si viviste violencia sexual, no es un tema para ejercicios por tu cuenta. Mereces ayuda especializada. Puedes llamar a la Línea 144, y al 911 si hay un peligro. También puedes usar el botón Ayuda de la app.',
          ],
        },
      ],
      caveat: {
        title: 'Qué es y qué no es esta sección',
        body: 'Es psicoeducación para adultos, para personas de cualquier orientación, con o sin pareja. No es terapia sexual ni reemplaza una consulta. Buena parte de la investigación sobre deseo responsivo y atención plena se hizo con mujeres, y los modelos todavía se discuten. La focalización sensorial se usa mucho en terapia sexual, pero se estudió en pocos ensayos controlados.',
      },
      diagram: {
        title: 'El ciclo de la ansiedad de desempeño',
        nodes: ['Preocupación por rendir', 'Mirarse desde afuera y evaluar', 'Menos atención a las sensaciones', 'Menos excitación', 'Más miedo a fallar'],
        caption: 'Sacar la meta y volver a las sensaciones corta el ciclo.',
      },
      related: {
        practices: ['mapa-de-mi-deseo', 'atencion-a-las-sensaciones', 'del-rendimiento-al-presente', 'focalizacion-sensorial', 'hablar-de-sexo-en-pareja'],
        articles: ['asertividad-y-limites'],
      },
      references: [BASSON_2000, NAGOSKI_2015, MARK_2018, MASTERS_1970, BARLOW_1986, BROTTO_2018],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'sexualidad-con-calma',
      title: 'Sexualidad con calma',
      subtitle: 'Cuatro semanas para entender tu deseo y vivir la intimidad con menos presión',
      description:
        'Conocerás cómo funciona tu deseo, entrenarás la atención en las sensaciones, saldrás de la trampa del rendimiento y practicarás hablar de sexo. Sirve con o sin pareja: la última semana suma un ejercicio de pareja opcional. Si hay dolor o una dificultad persistente, consulta con un profesional.',
      basis: 'Basson (2000); Masters y Johnson (1970); Barlow (1986); Brotto (2018).',
      rhythm: '10 a 15 minutos, 3 o 4 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Mi deseo',
          focus: 'Deseo espontáneo y responsivo',
          description: 'Leerás cómo funciona el deseo y armarás tu mapa de aceleradores y frenos.',
          practiceIds: ['mapa-de-mi-deseo'],
          articleIds: ['sexualidad-y-deseo'],
          journalType: 'tres-cosas',
        },
        {
          title: 'Semana 2 · Sentir',
          focus: 'Atención plena en el cuerpo',
          description: 'Practicarás notar sensaciones sin juzgar, a solas y sin ningún objetivo sexual.',
          practiceIds: ['atencion-a-las-sensaciones', 'escaneo-corporal'],
          articleIds: [],
          journalType: 'saboreo',
        },
        {
          title: 'Semana 3 · Sin rendir',
          focus: 'Salir de la trampa del rendimiento',
          description: 'Aprenderás a notar cuándo te vas a evaluar y a volver al presente.',
          practiceIds: ['del-rendimiento-al-presente'],
          articleIds: [],
          journalType: 'defusion',
        },
        {
          title: 'Semana 4 · Hablar y acercarse',
          focus: 'Comunicación y consentimiento',
          description: 'Prepararás una conversación sobre sexo. Si tienes pareja y las dos personas quieren, pueden probar la primera etapa de la focalización sensorial.',
          practiceIds: ['hablar-de-sexo-en-pareja', 'focalizacion-sensorial'],
          articleIds: [],
          journalType: 'conversacion',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-deseo-responsivo',
      title: 'El deseo no siempre llega primero',
      subtitle: 'Deseo espontáneo y deseo responsivo.',
      slides: [
        { heading: 'De golpe', text: 'A veces el deseo llega de golpe, sin buscarlo. Es el deseo espontáneo.' },
        { heading: 'Después', text: 'Otras veces llega después, con la cercanía o una caricia. Es el deseo responsivo. También es deseo.' },
        { heading: 'Los dos son sanos', text: 'Muchas personas en parejas largas sienten sobre todo el segundo. No es que algo ande mal.' },
        { heading: 'Frenos', text: 'El cansancio, el estrés y la presión frenan el deseo. A veces no faltan ganas: sobran frenos.' },
        { heading: 'Cuidar el clima', text: 'Descansar, tener tiempo sin apuro y sentirte en confianza ayudan mucho.' },
      ],
      related: { practices: ['mapa-de-mi-deseo'], articles: ['sexualidad-y-deseo'] },
      references: [BASSON_2000, NAGOSKI_2015],
    },
    {
      id: 'pildora-ansiedad-de-desempeno',
      title: 'Mirarte desde afuera',
      subtitle: 'La trampa de la ansiedad de desempeño.',
      slides: [
        { heading: 'El espectador', text: 'En la intimidad, a veces te miras desde afuera y te evalúas. ¿Lo hago bien? ¿Funcionará?' },
        { heading: 'Lo que pasa', text: 'Cuando la atención se va a evaluar, se aleja de lo que sientes. Y la excitación baja.' },
        { heading: 'El ciclo', text: 'Eso confirma el miedo. La próxima vez te preocupas más. Así se arma el ciclo.' },
        { heading: 'La salida', text: 'Saca la meta por un tiempo. Vuelve a lo que sientes: calor, roce, respiración.' },
        { heading: 'Cuándo consultar', text: 'Si la dificultad dura meses, consulta a un médico. A veces hay una causa física que tiene tratamiento.' },
      ],
      related: { practices: ['del-rendimiento-al-presente', 'atencion-a-las-sensaciones'], articles: ['sexualidad-y-deseo'] },
      references: [MASTERS_1970, BARLOW_1986],
    },
    {
      id: 'pildora-consentimiento',
      title: 'Un sí que se puede cambiar',
      subtitle: 'Consentimiento, pedir y decir que no.',
      slides: [
        { heading: 'Un sí libre', text: 'El consentimiento es un sí libre y claro. Sin presión, sin miedo y sin culpa.' },
        { heading: 'Puede cambiar', text: 'Puedes decir que sí y después cambiar de idea. Si la otra persona duda o dice que no, se para.' },
        { heading: 'También en pareja', text: 'Nadie le debe sexo a nadie. Tampoco en una pareja de muchos años.' },
        { heading: 'Pedir', text: 'Pide con claridad y cariño: «Me gusta cuando…». Hablen fuera de la cama, con calma.' },
        { heading: 'Decir que no', text: 'Un no dicho con cariño cuida el vínculo. Puedes sumar otra forma de cercanía, si la quieres.' },
        { heading: 'Si hubo violencia', text: 'Si viviste violencia sexual, mereces ayuda. Llama a la Línea 144, o al 911 si hay peligro.' },
      ],
      related: { practices: ['hablar-de-sexo-en-pareja'], articles: ['sexualidad-y-deseo', 'asertividad-y-limites'] },
      references: [NAGOSKI_2015, MARK_2018],
    },
    {
      id: 'pildora-sexualidad-cuando-consultar',
      title: 'Cuándo consultar por tu vida sexual',
      subtitle: 'Señales para pedir ayuda profesional.',
      slides: [
        { heading: 'El dolor', text: 'El dolor en las relaciones no es normal ni hay que aguantarlo. Consulta con un ginecólogo, urólogo o médico.' },
        { heading: 'Lo que dura', text: 'Si una dificultad dura meses o te angustia mucho, un sexólogo puede ayudar.' },
        { heading: 'Los cambios', text: 'El posparto, la menopausia, una enfermedad o un medicamento pueden cambiar el deseo. No es tu culpa.' },
        { heading: 'La medicación', text: 'Si un medicamento te afecta, habla con quien te lo indicó. No lo dejes por tu cuenta.' },
        { heading: 'Pedir ayuda', text: 'Consultar no es exagerar. Muchas dificultades sexuales tienen tratamiento.' },
      ],
      related: { articles: ['sexualidad-y-deseo'] },
      references: [MASTERS_1970, BROTTO_2018],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'deseo-responsivo', term: 'Deseo responsivo', definition: 'Deseo sexual que aparece después de empezar a estar cerca, con caricias o un buen clima. Es tan sano como el deseo que llega de golpe.', practiceId: 'mapa-de-mi-deseo' },
    { id: 'deseo-espontaneo', term: 'Deseo espontáneo', definition: 'Deseo sexual que aparece de golpe, antes de cualquier cercanía. Es una de las dos formas normales del deseo.', articleId: 'sexualidad-y-deseo' },
    { id: 'frenos-y-aceleradores', term: 'Frenos y aceleradores del deseo', definition: 'Imagen de Emily Nagoski: lo que acerca al deseo y lo que lo apaga, como el estrés o la presión. Muchas veces sobran frenos.', practiceId: 'mapa-de-mi-deseo' },
    { id: 'espectador-de-uno-mismo', term: 'Mirarse desde afuera', definition: 'Evaluarse durante la intimidad como un espectador, en lugar de sentir. Aumenta la ansiedad de desempeño y baja la excitación.', practiceId: 'del-rendimiento-al-presente' },
    { id: 'focalizacion-sensorial', term: 'Focalización sensorial', definition: 'Ejercicio de pareja por etapas, creado por Masters y Johnson. Empieza con caricias por turnos, sin meta sexual, para sacar la presión.', practiceId: 'focalizacion-sensorial' },
    { id: 'consentimiento-sexual', term: 'Consentimiento sexual', definition: 'Un sí libre, claro y que se puede retirar en cualquier momento. Vale también en una pareja estable.', articleId: 'sexualidad-y-deseo' },
  ],
};
