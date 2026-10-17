import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Necesidades: cuerpo y atención». Suma prácticas a tres necesidades flojas:
 *  - atencion-plena: atención plena informal en una tarea de todos los días (Kabat-Zinn;
 *    Thich Nhat Hanh; Hanley y colaboradores) y la práctica RAIN (Tara Brach);
 *  - habitos-del-cuerpo: la cadena del hábito y la conciencia temprana (entrenamiento en
 *    conciencia de Azrin y Nunn), y sostener el cambio con apoyo y un plan ante los
 *    tropiezos (Marlatt y Gordon);
 *  - vida-sexual: los mensajes aprendidos sobre el sexo (guiones sexuales de Gagnon y
 *    Simon) y un menú de formas de cercanía en pareja (Muise y colaboradores; Mark y Lasslo).
 *
 * No repite lo que ya cubren los paquetes «sexualidad» (deseo responsivo, frenos y
 * aceleradores, ansiedad de desempeño) y «conductas-repetitivas» (registro, respuesta
 * competidora, barreras, aceptación de las ganas, autocompasión).
 *
 * Seguridad: RAIN se hace con malestares chicos o medianos, nunca con recuerdos
 * traumáticos. En los hábitos, heridas o caída de pelo → médico o dermatólogo; si hay
 * daño a propósito → líneas de ayuda. En la vida sexual, nada explícito; el dolor se
 * consulta con un médico y ante cualquier presión o coerción, Línea 144 (y 911 si hay
 * peligro).
 */

// ------------------------------------------------------------ referencias
const KABAT_ZINN_1990: Reference = {
  citation: 'Kabat-Zinn, J. (1990). Full catastrophe living: Using the wisdom of your body and mind to face stress, pain, and illness. Delacorte.',
};
const NHAT_HANH_1975: Reference = { citation: 'Nhat Hanh, T. (1975). The miracle of mindfulness. Beacon Press.' };
const HANLEY_2015: Reference = {
  citation:
    'Hanley, A. W., Warner, A. R., Dehili, V. M., Canto, A. I., & Garland, E. L. (2015). Washing dishes to wash the dishes: Brewing mindfulness in an everyday activity. Mindfulness, 6(5), 1095–1103.',
};
const BRACH_2003: Reference = { citation: 'Brach, T. (2003). Radical acceptance: Embracing your life with the heart of a Buddha. Bantam.' };
const BRACH_2019: Reference = { citation: 'Brach, T. (2019). Radical compassion: Learning to love yourself and your world with the practice of RAIN. Viking.' };
const NEFF_2003: Reference = {
  citation: 'Neff, K. D. (2003). Self-compassion: An alternative conceptualization of a healthy attitude toward oneself. Self and Identity, 2(2), 85–101.',
};
const AZRIN_1973: Reference = {
  citation: 'Azrin, N. H., & Nunn, R. G. (1973). Habit-reversal: A method of eliminating nervous habits and tics. Behaviour Research and Therapy, 11(4), 619–628.',
};
const WOODS_2008: Reference = {
  citation: 'Woods, D. W., & Twohig, M. P. (2008). Trichotillomania: An ACT-enhanced behavior therapy approach. Therapist guide. Oxford University Press.',
};
const MARLATT_1985: Reference = {
  citation: 'Marlatt, G. A., & Gordon, J. R. (Eds.). (1985). Relapse prevention: Maintenance strategies in the treatment of addictive behaviors. Guilford Press.',
};
const GAGNON_1973: Reference = { citation: 'Gagnon, J. H., & Simon, W. (1973). Sexual conduct: The social sources of human sexuality. Aldine.' };
const WIEDERMAN_2005: Reference = { citation: 'Wiederman, M. W. (2005). The gendered nature of sexual scripts. The Family Journal, 13(4), 496–502.' };
const NAGOSKI_2015: Reference = { citation: 'Nagoski, E. (2015). Come as you are: The surprising new science that will transform your sex life. Simon & Schuster.' };
const MUISE_2013: Reference = {
  citation:
    'Muise, A., Impett, E. A., & Desmarais, S. (2013). Getting it on versus getting it over with: Sexual motivation, desire, and satisfaction in intimate bonds. Personality and Social Psychology Bulletin, 39(10), 1320–1332.',
};
const MARK_2018: Reference = {
  citation: 'Mark, K. P., & Lasslo, J. A. (2018). Maintaining sexual desire in long-term relationships: A systematic review and conceptual model. The Journal of Sex Research, 55(4–5), 563–581.',
};

// ------------------------------------------------------------ avisos
const CONSULTA_HABITO =
  'Si hay heridas que no cierran, piel enrojecida, caliente o con pus, o una caída de pelo que te preocupa, consulta a un médico o dermatólogo. Si el hábito te quita mucho tiempo o te angustia, un profesional de salud mental con formación en inversión del hábito puede ayudarte. Si te lastimas a propósito para calmar un dolor emocional, o aparecen ideas de morir, pide ayuda: 135 (CABA y GBA; resto del país 0800-345-1435), 0800-999-0091 o 911.';

const CONSULTA_SEXUAL =
  'Si sientes dolor en las relaciones, o si una dificultad dura meses o te angustia mucho, consulta con un médico, ginecólogo, urólogo o sexólogo. No dejes ni cambies una medicación sin hablar con quien te la indicó. Si hay presión, amenazas o cualquier forma de coerción, o si viviste violencia sexual, esto no es un ejercicio para hacer por tu cuenta: llama a la Línea 144 y, ante un peligro, al 911.';

export const NECESIDADES_CUERPO_PACK: ContentPack = {
  id: 'necesidades-cuerpo-atencion',

  // ================================================================== prácticas
  practices: [
    // ---------------------------------------------------------------- atención plena
    {
      id: 'atencion-en-lo-cotidiano',
      title: 'Atención plena en una tarea de todos los días',
      family: 'attentional',
      skills: ['attention'],
      summary: 'Elegir una tarea común, como lavar los platos o ducharte, y hacerla con toda la atención en los sentidos. Es una forma de practicar sin sumar tiempo al día.',
      mechanism: 'La práctica informal lleva la atención plena a lo que ya haces. Al usar los sentidos como ancla, sales del piloto automático en medio del día.',
      evidenceLevel: 'preliminar',
      evidence: [KABAT_ZINN_1990, NHAT_HANH_1975, HANLEY_2015],
      howItWorks: [
        'Jon Kabat-Zinn distingue la práctica formal, cuando te sientas a meditar, de la informal. En la informal llevas la misma atención a lo que haces cada día: comer, caminar, lavarte los dientes (Kabat-Zinn, 1990).',
        'El monje Thich Nhat Hanh proponía lavar los platos para lavar los platos. No para terminar rápido, sino para estar ahí mientras lo haces (Nhat Hanh, 1975).',
        'Un estudio pequeño pidió a un grupo lavar platos con atención en el agua, el olor y el tacto. Ese grupo contó más atención plena y algo más de calma que quienes lavaron como siempre (Hanley y colaboradores, 2015). Es un dato preliminar.',
      ],
      tips: [
        'Elige siempre la misma tarea por una semana. Así se vuelve un recordatorio.',
        'Empieza por una tarea corta: lavarte las manos, preparar el mate o cepillarte los dientes.',
        'Si la mente se va a la lista de pendientes, es normal. Vuelve a una sensación.',
      ],
      obstacles: [
        { q: 'Me aburro y me apuro.', a: 'Nota el apuro como una sensación más. No tienes que ir lento todo el tiempo. Elige sólo un tramo de la tarea para hacerlo con atención.' },
        { q: 'Me olvido de hacerlo.', a: 'Pon una señal en el lugar: una nota en la canilla o en el espejo. Al verla, respira una vez y empieza.' },
      ],
      steps: [
        { title: 'Elegir', instruction: 'Elige una tarea que vas a hacer hoy. Por ejemplo, lavar los platos, ducharte o preparar algo para tomar.', durationSec: 30, kind: 'reflection' },
        { title: 'Llegar', instruction: 'Antes de empezar, detente. Respira una vez despacio y siente los pies en el piso.', durationSec: 20, kind: 'breath' },
        { title: 'El tacto', instruction: 'Empieza la tarea. Nota la temperatura del agua o del objeto. Nota el peso, la textura y el roce en las manos.', durationSec: 60, kind: 'instruction' },
        { title: 'Los otros sentidos', instruction: 'Suma los sonidos y los olores. El agua que corre, el jabón, el ruido de la loza. Nota todo sin juzgar.', durationSec: 60, kind: 'instruction' },
        { title: 'Volver', instruction: 'Si la mente se va, nota adónde fue. Dite «pensando» y vuelve a las manos.', durationSec: 60, kind: 'instruction' },
        { title: 'Cerrar', instruction: 'Al terminar, quédate un momento quieto. Nota cómo está tu cuerpo ahora. Respira una vez más.', durationSec: 20, kind: 'breath' },
      ],
    },
    {
      id: 'practica-rain',
      title: 'RAIN: reconocer, permitir, investigar y nutrir',
      family: 'attentional',
      skills: ['attention', 'compassion'],
      summary: 'Cuatro pasos de Tara Brach para acompañar una emoción difícil con atención y amabilidad, en lugar de huir de ella o quedar atrapado.',
      mechanism: 'Nombrar lo que sientes y dejarlo estar baja la lucha contra la emoción. Mirar con curiosidad lo que pasa en el cuerpo y darte un gesto de cuidado suma calma y apoyo.',
      evidenceLevel: 'contemplativa',
      evidence: [BRACH_2003, BRACH_2019, NEFF_2003],
      howItWorks: [
        'RAIN es una sigla en inglés. En castellano son cuatro pasos: reconocer lo que pasa, permitir que esté, investigar con amabilidad y nutrir con cuidado. Tara Brach la difundió a partir de la meditación budista (Brach, 2003; Brach, 2019).',
        'Reconocer y permitir son atención plena: ver lo que hay y dejar de pelear con eso. Investigar es mirar con curiosidad dónde se siente en el cuerpo. Nutrir es ofrecerte el cuidado que necesitas, como en la autocompasión (Neff, 2003).',
        'Es una práctica de la tradición contemplativa. Tiene poca investigación propia, pero sus partes se parecen a las de enfoques con más estudios.',
      ],
      tips: [
        'Empieza con una emoción chica o mediana, no con lo más difícil de tu vida.',
        'Investigar no es analizar. Es sentir con curiosidad, no buscar explicaciones.',
        'Si nutrir te cuesta, piensa qué le dirías a alguien que quieres.',
      ],
      obstacles: [
        { q: 'Al permitir la emoción, crece.', a: 'Puede pasar al principio. Abre la atención a los pies o a la respiración. Si sigue creciendo, para y haz algo que te calme.' },
        { q: 'No sé qué necesito para nutrir.', a: 'Prueba una mano en el pecho y una frase simple: «Estoy aquí contigo». Con eso alcanza.' },
      ],
      cautions:
        'Usa esta práctica con malestares chicos o medianos. Si aparecen recuerdos traumáticos, pánico o la sensación de estar fuera de ti, para. Abre los ojos y siente los pies en el piso. Esos temas conviene trabajarlos con un profesional. Si estás en crisis, usa el botón Ayuda de la app o llama al 0800-999-0091.',
      steps: [
        { title: 'Llegar', instruction: 'Siéntate con comodidad. Respira despacio tres veces. Piensa en algo que hoy te molesta un poco.', durationSec: 40, kind: 'breath' },
        { title: 'Reconocer', instruction: 'Nombra lo que sientes. Dite en voz baja: «Esto es enojo», o «Esto es miedo». Una palabra alcanza.', durationSec: 45, kind: 'instruction' },
        { title: 'Permitir', instruction: 'Dite: «Puede estar aquí». No tienes que cambiarlo ni que te guste. Sólo dejas de empujarlo.', durationSec: 60, kind: 'instruction' },
        { title: 'Investigar', instruction: '¿Dónde lo sientes en el cuerpo? Nota si hay calor, presión o un nudo. Míralo con curiosidad, sin buscar el porqué.', durationSec: 75, kind: 'instruction' },
        { title: 'Nutrir', instruction: 'Pregúntate qué necesita esa parte de ti. Pon una mano en el pecho. Dite algo amable, como «Estoy aquí contigo».', durationSec: 60, kind: 'reflection' },
        { title: 'Después', instruction: 'Suelta la práctica. Quédate unos segundos en silencio y nota cómo estás ahora.', durationSec: 40, kind: 'breath' },
      ],
    },

    // ---------------------------------------------------------------- hábitos del cuerpo
    {
      id: 'cadena-del-habito',
      title: 'La cadena del hábito',
      family: 'attentional',
      skills: ['attention', 'resilience'],
      summary: 'Descubrir los eslabones que llevan al hábito, desde la situación hasta la mano, y entrenarte a notarlos cada vez más temprano.',
      mechanism: 'El hábito no empieza cuando la mano toca el pelo, la piel o las uñas. Empieza antes. Si notas los primeros eslabones, tienes más tiempo para frenar.',
      evidenceLevel: 'moderada',
      evidence: [AZRIN_1973, WOODS_2008],
      cautions: CONSULTA_HABITO,
      howItWorks: [
        'La inversión del hábito incluye un entrenamiento en conciencia. Se describe el movimiento con detalle y se buscan las señales tempranas que lo anuncian (Azrin y Nunn, 1973).',
        'Muchas veces hay una cadena. Una situación, como estudiar o estar en el celular. Una emoción, como tensión o aburrimiento. Una sensación, como picazón. Una postura, como apoyar la cara en la mano. Y al final, el hábito (Woods y Twohig, 2008).',
        'Cuanto antes notes la cadena, más fácil es cortarla. Esta práctica arma tu cadena y ensaya, en cámara lenta, la conciencia del movimiento, sin llegar a tocar.',
      ],
      tips: [
        'Usa los datos de tu registro del hábito, si lo hiciste.',
        'Busca el eslabón más temprano que puedas notar. Ahí está tu mejor punto de corte.',
        'Repite el ensayo en cámara lenta unos días. La conciencia se entrena.',
      ],
      obstacles: [
        { q: 'No encuentro nada antes del hábito.', a: 'Es común con los hábitos automáticos. Fíjate en la postura y en lo que hacías. Esos suelen ser los primeros eslabones.' },
        { q: 'El ensayo me da ganas.', a: 'Puede pasar. Haz tu respuesta competidora y respira. Si las ganas son muy fuertes, deja el ensayo para otro día.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Siéntate con calma. Apoya las manos sobre las piernas. Respira despacio dos veces.', durationSec: 30, kind: 'breath' },
        { title: 'La situación', instruction: 'Piensa en una vez reciente. ¿Dónde estabas y qué hacías? Anota la situación.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo de adentro', instruction: '¿Qué emoción había? ¿Qué sensación en el cuerpo? Puede ser tensión, aburrimiento o picazón. Anótalas.', durationSec: 45, kind: 'reflection' },
        { title: 'La postura', instruction: '¿Qué hizo tu cuerpo antes? Apoyar la cara en la mano, tocar el pelo, mirar la piel. Anota ese gesto.', durationSec: 45, kind: 'reflection' },
        { title: 'Cámara lenta', instruction: 'Mueve la mano muy despacio hacia la zona. Detente a unos centímetros, sin tocar. Nota cada parte del movimiento.', durationSec: 45, kind: 'instruction' },
        { title: 'Volver', instruction: 'Baja la mano a las piernas. Cierra los puños con suavidad y respira.', durationSec: 30, kind: 'breath' },
        { title: 'El punto de corte', instruction: 'Mira tu cadena. Elige el eslabón más temprano que puedas notar. Escribe qué harás cuando aparezca.', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'sostener-el-cambio-del-habito',
      title: 'Sostener el cambio con apoyo',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Preparar un pedido claro a una persona de confianza y un plan para los días en que el hábito vuelve, para que un tropiezo no borre lo avanzado.',
      mechanism: 'Un apoyo que alienta, sin vigilar, ayuda a mantener el esfuerzo. Y tener un plan para los tropiezos evita el «ya está, arruiné todo», que suele traer más hábito.',
      evidenceLevel: 'preliminar',
      evidence: [AZRIN_1973, MARLATT_1985, WOODS_2008],
      cautions: CONSULTA_HABITO,
      howItWorks: [
        'Azrin y Nunn (1973) sumaban a una persona cercana al tratamiento. Su tarea era notar y reconocer los avances. No se trata de que te controle, sino de que te acompañe.',
        'Marlatt y Gordon (1985) distinguieron un tropiezo de una recaída. Un tropiezo es volver al hábito una vez. Si lo lees como «fracasé», es más fácil abandonar todo. Si lo lees como un dato, puedes volver al plan.',
        'Los hábitos con el cuerpo suelen volver en épocas de estrés, como exámenes, mudanzas o problemas en el trabajo. Saberlo de antemano ayuda a prepararte.',
      ],
      tips: [
        'Elige a alguien que te trate con cariño, no a quien suele criticarte.',
        'Pide algo concreto. Por ejemplo: «Pregúntame los domingos cómo me fue».',
        'Acuerda una seña discreta, si quieres que te avise cuando no te das cuenta.',
        'Si un día vuelve el hábito, mañana retomas el plan. No hace falta empezar de cero.',
      ],
      obstacles: [
        { q: 'No quiero que nadie se entere.', a: 'Está bien. El apoyo puede ser un profesional, un grupo o una nota para ti. También puedes contar sólo una parte.' },
        { q: 'La persona me reta cuando lo hago.', a: 'Díselo con claridad: «Me ayuda más que me alientes. Los retos me ponen más tenso». Si no cambia, busca otro apoyo.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en lo que ya probaste contra el hábito, aunque sea poco.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que funciona', instruction: 'Anota dos cosas que te ayudan. Puede ser tu respuesta competidora, una barrera o un cambio en el lugar.', durationSec: 45, kind: 'reflection' },
        { title: 'Quién', instruction: 'Piensa en una persona de confianza que te trate bien. Escribe su nombre.', durationSec: 30, kind: 'reflection' },
        { title: 'El pedido', instruction: 'Escribe qué le pedirías. Por ejemplo, que pregunte cómo te fue o que celebre un buen día. Aclara qué no quieres, como retos.', durationSec: 60, kind: 'reflection' },
        { title: 'Las épocas difíciles', instruction: '¿Cuándo suele volver el hábito? Anota una época o situación de riesgo que se viene.', durationSec: 45, kind: 'reflection' },
        { title: 'Si hay un tropiezo', instruction: 'Escribe qué te dirás si vuelve el hábito. Por ejemplo: «Fue un tropiezo. Mañana retomo el plan».', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Elige cuándo vas a hablar con esa persona. Anota el día.', durationSec: 25, kind: 'instruction' },
      ],
    },

    // ---------------------------------------------------------------- vida sexual
    {
      id: 'mensajes-que-aprendi-sobre-el-sexo',
      title: 'Lo que aprendí sobre el sexo',
      family: 'constructive',
      skills: ['attention', 'compassion'],
      summary: 'Mirar con calma los mensajes sobre el sexo que recibiste en tu familia, en la escuela o en los medios, y elegir cuáles quieres seguir. Sirve con pareja o sin pareja.',
      mechanism: 'Mucho de lo que esperamos del sexo se aprende sin darnos cuenta. Ver esos mensajes como aprendidos, y no como verdades, baja la culpa y la vergüenza y abre opciones propias.',
      evidenceLevel: 'preliminar',
      evidence: [GAGNON_1973, WIEDERMAN_2005, NAGOSKI_2015],
      cautions: CONSULTA_SEXUAL,
      howItWorks: [
        'John Gagnon y William Simon propusieron que la sexualidad sigue guiones. Son ideas aprendidas sobre qué es el sexo, quién debe tomar la iniciativa y qué está bien o mal (Gagnon y Simon, 1973).',
        'Muchos guiones cambian según el género. Por ejemplo, que los varones siempre tienen ganas o que las mujeres no deben pedir (Wiederman, 2005). Esos mensajes pueden pesar aunque no estés de acuerdo con ellos.',
        'Emily Nagoski señala que la vergüenza aprendida es uno de los frenos más fuertes del deseo (Nagoski, 2015). Esta práctica no busca juzgar a tu familia. Busca que elijas tus propios mensajes.',
      ],
      tips: [
        'Escribe sin censurarte. Nadie más tiene que leerlo.',
        'Algunos mensajes pueden ser buenos. Quédate también con esos.',
        'Si un recuerdo te angustia mucho, para. No es para trabajar a solas.',
      ],
      obstacles: [
        { q: 'En mi casa no se hablaba de sexo.', a: 'El silencio también es un mensaje. Por ejemplo, que es algo de lo que no se habla. Puedes anotarlo así.' },
        { q: 'Me da culpa revisar lo que me enseñaron.', a: 'Revisar no es rechazar a nadie. Puedes valorar a tu familia y, a la vez, elegir otras ideas para tu vida.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Siéntate en un lugar tranquilo y privado. Respira despacio tres veces.', durationSec: 30, kind: 'breath' },
        { title: 'En casa', instruction: '¿Qué aprendiste del sexo en tu casa? Puede ser algo dicho o algo que se callaba. Anota una o dos frases.', durationSec: 60, kind: 'reflection' },
        { title: 'Afuera', instruction: '¿Qué mensajes llegaron de la escuela, los amigos, la religión o las series? Anota los que más recuerdes.', durationSec: 60, kind: 'reflection' },
        { title: 'Por ser quien eres', instruction: '¿Hubo mensajes por tu género o tu orientación? Por ejemplo, sobre quién debe tener ganas o quién debe pedir. Anótalos.', durationSec: 60, kind: 'reflection' },
        { title: 'Cómo pesan hoy', instruction: 'Marca los mensajes que todavía te pesan. ¿Te traen culpa, vergüenza o presión?', durationSec: 45, kind: 'reflection' },
        { title: 'Tu mensaje', instruction: 'Elige uno y escribe una frase nueva, más tuya. Por ejemplo: «Mi deseo es mío y puedo hablar de él».', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Dite: «Puedo elegir qué ideas sigo».', durationSec: 25, kind: 'breath' },
      ],
    },
    {
      id: 'menu-de-cercania',
      title: 'Un menú de cercanía en pareja',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Armar en pareja una lista de formas de estar cerca, no sólo sexuales, para que un «hoy no» al sexo no sea un «no» a la cercanía.',
      mechanism: 'Cuando todo contacto parece un paso hacia el sexo, muchas personas evitan el contacto. Un menú con varias opciones saca presión y cuida el vínculo y el deseo.',
      evidenceLevel: 'preliminar',
      evidence: [MUISE_2013, MARK_2018],
      cautions: CONSULTA_SEXUAL,
      howItWorks: [
        'En parejas largas, el deseo se sostiene mejor con intimidad, comunicación y un buen clima (Mark y Lasslo, 2018). La cercanía cotidiana es parte de ese clima.',
        'Amy Muise y su equipo estudiaron por qué las personas se acercan en la intimidad. Acercarse por el gusto de compartir se asoció con más deseo y satisfacción. Hacerlo para evitar un conflicto o por obligación, con menos (Muise y colaboradores, 2013).',
        'Un menú amplio permite elegir según el día. Abrazarse, charlar, caminar juntos o una caricia también son intimidad. Y el consentimiento vale para cada opción del menú.',
      ],
      tips: [
        'Armen el menú en un momento tranquilo, fuera de la cama.',
        'Cada persona puede tener opciones que la otra no comparte. Está bien.',
        'Un «hoy no» se respeta siempre, sin reproches ni insistencia.',
        'Revisen el menú cada tanto. Los gustos cambian.',
      ],
      obstacles: [
        { q: 'Mi pareja siente que es un premio consuelo.', a: 'Puede pasar. Hablen de que la cercanía no reemplaza el sexo, sino que lo cuida. Muchas veces, con menos presión, aparecen más ganas.' },
        { q: 'No tengo pareja.', a: 'Puedes armar tu menú de cuidado y contacto: abrazos con amistades, deporte, un baño tibio. Y la práctica sobre los mensajes aprendidos también es para ti.' },
      ],
      steps: [
        { title: 'Acordar', instruction: 'Elijan un momento tranquilo. Acuerden que es una charla para conocerse, no para pedir sexo.', durationSec: 40, kind: 'instruction' },
        { title: 'Lo cotidiano', instruction: 'Cada persona anota formas de cercanía de todos los días. Por ejemplo, un abrazo al llegar, charlar sin celular o cocinar juntos.', durationSec: 75, kind: 'reflection' },
        { title: 'El contacto', instruction: 'Anoten formas de contacto que les gustan, sin que lleven al sexo. Una caricia, dormir abrazados, un masaje en los hombros.', durationSec: 75, kind: 'reflection' },
        { title: 'Compartir', instruction: 'Lean sus listas. Marquen lo que tienen en común. Pregunten con curiosidad por lo que no.', durationSec: 60, kind: 'reflection' },
        { title: 'El hoy no', instruction: 'Acuerden una frase para decir que no al sexo y sí a otra cosa. Por ejemplo: «Hoy no, pero me encantaría un abrazo».', durationSec: 45, kind: 'reflection' },
        { title: 'Elegir', instruction: 'Elijan una opción del menú para esta semana. Anótenla.', durationSec: 30, kind: 'reflection' },
      ],
    },
  ],

  meta: {
    'atencion-en-lo-cotidiano': { level: 'iniciacion', approaches: ['mindfulness', 'contemplativa'], module: 'cuerpo' },
    'practica-rain': { level: 'intermedio', approaches: ['mindfulness', 'contemplativa', 'cft'], module: 'cuerpo', prerequisites: ['atencion-respiracion'] },
    'cadena-del-habito': { level: 'intermedio', approaches: ['tcc', 'mindfulness'], module: 'habitos', prerequisites: ['registro-del-habito'] },
    'sostener-el-cambio-del-habito': {
      level: 'intermedio',
      approaches: ['tcc', 'cft'],
      module: 'habitos',
      prerequisites: ['respuesta-competidora', 'control-de-estimulos-del-habito'],
    },
    'mensajes-que-aprendi-sobre-el-sexo': { level: 'iniciacion', approaches: ['escritura', 'narrativa'], module: 'pareja' },
    'menu-de-cercania': { level: 'intermedio', approaches: ['tcc', 'gottman'], module: 'pareja', prerequisites: ['hablar-de-sexo-en-pareja'] },
  },

  articles: [],
  programs: [],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-atencion-en-lo-cotidiano',
      title: 'Lavar los platos para lavar los platos',
      subtitle: 'Atención plena sin sumar tiempo al día.',
      slides: [
        { heading: 'Dos formas', text: 'Puedes practicar sentado, con los ojos cerrados. Y también mientras haces cosas de todos los días.' },
        { heading: 'Lo de siempre', text: 'Lavar los platos, ducharte o preparar el mate. Son buenos momentos para estar presente.' },
        { heading: 'Los sentidos', text: 'Nota el agua, el olor del jabón, el peso de la taza. Los sentidos te traen al ahora.' },
        { heading: 'La mente se va', text: 'Se irá a los pendientes. Es normal. Nota adónde fue y vuelve a las manos.' },
        { heading: 'Una señal', text: 'Elige una sola tarea por semana. Así la tarea misma te recuerda practicar.' },
      ],
      related: { practices: ['atencion-en-lo-cotidiano'] },
      references: [KABAT_ZINN_1990, HANLEY_2015],
    },
    {
      id: 'pildora-rain',
      title: 'Cuatro pasos para una emoción difícil',
      subtitle: 'Reconocer, permitir, investigar y nutrir.',
      slides: [
        { heading: 'Reconocer', text: 'Ponle nombre a lo que sientes. «Esto es miedo.» Una palabra alcanza.' },
        { heading: 'Permitir', text: 'Dite: «Puede estar aquí». No hace falta que te guste. Sólo dejas de pelear.' },
        { heading: 'Investigar', text: '¿Dónde lo sientes en el cuerpo? Míralo con curiosidad, sin buscar el porqué.' },
        { heading: 'Nutrir', text: 'Pregúntate qué necesitas. Una mano en el pecho y una frase amable ayudan.' },
        { heading: 'Con cuidado', text: 'Empieza por malestares chicos. Si aparece algo muy fuerte, para y pide ayuda.' },
      ],
      related: { practices: ['practica-rain'] },
      references: [BRACH_2019],
    },
    {
      id: 'pildora-cadena-del-habito',
      title: 'El hábito empieza antes',
      subtitle: 'Ver venir el pelo, la piel o las uñas.',
      slides: [
        { heading: 'Una cadena', text: 'El hábito no empieza cuando la mano toca. Antes hay una situación, una emoción y un gesto.' },
        { heading: 'Los eslabones', text: 'Por ejemplo: estudiar, sentir tensión, apoyar la cara en la mano. Y después, el hábito.' },
        { heading: 'Notar antes', text: 'Cuanto antes notes la cadena, más tiempo tienes para frenar.' },
        { heading: 'Cámara lenta', text: 'Mueve la mano muy despacio hacia la zona, sin tocar. Así entrenas a notar el movimiento.' },
        { heading: 'Cortar', text: 'Elige el primer eslabón que puedas ver. Ahí usas tu respuesta competidora.' },
      ],
      related: { practices: ['cadena-del-habito'] },
      references: [AZRIN_1973, WOODS_2008],
    },
    {
      id: 'pildora-apoyo-sin-control',
      title: 'Apoyo que alienta, no que vigila',
      subtitle: 'Sostener el cambio de un hábito con el cuerpo.',
      slides: [
        { heading: 'Alguien cerca', text: 'Una persona de confianza puede ayudarte a sostener el cambio. Su tarea es alentar.' },
        { heading: 'Un pedido claro', text: 'Pide algo concreto. Que te pregunte cómo te fue o que celebre un buen día.' },
        { heading: 'Sin retos', text: 'Los retos suman tensión. Y la tensión dispara el hábito. Dilo con claridad.' },
        { heading: 'Un tropiezo', text: 'Volver al hábito un día no es fracasar. Es un dato. Mañana retomas el plan.' },
        { heading: 'Épocas de riesgo', text: 'Exámenes, mudanzas o mucho trabajo. Prepárate antes, porque ahí suele volver.' },
      ],
      related: { practices: ['sostener-el-cambio-del-habito'] },
      references: [AZRIN_1973, MARLATT_1985],
    },
    {
      id: 'pildora-mensajes-sobre-el-sexo',
      title: 'Lo que te enseñaron sobre el sexo',
      subtitle: 'Mensajes aprendidos que pesan sin que lo notes.',
      slides: [
        { heading: 'Guiones', text: 'Muchas ideas sobre el sexo se aprenden sin darnos cuenta. En casa, en la escuela o en las series.' },
        { heading: 'El silencio', text: 'Si en tu casa no se hablaba de sexo, eso también fue un mensaje.' },
        { heading: 'Por el género', text: 'Hay mensajes distintos para cada género. Quién debe tener ganas, quién debe pedir.' },
        { heading: 'La vergüenza', text: 'La vergüenza aprendida puede frenar el deseo. No es un defecto tuyo.' },
        { heading: 'Elegir', text: 'Puedes revisar esos mensajes y elegir los tuyos. Sin juzgar a nadie.' },
      ],
      related: { practices: ['mensajes-que-aprendi-sobre-el-sexo'] },
      references: [GAGNON_1973, NAGOSKI_2015],
    },
    {
      id: 'pildora-menu-de-cercania',
      title: 'Un «hoy no» que no aleja',
      subtitle: 'Muchas formas de estar cerca en pareja.',
      slides: [
        { heading: 'La trampa', text: 'Si cada caricia parece un paso al sexo, a veces se evita todo contacto.' },
        { heading: 'Un menú', text: 'Abrazos, charlas, caminar juntos, dormir cerca. Todo eso también es intimidad.' },
        { heading: 'Por gusto', text: 'Acercarse por el gusto de compartir, y no por obligación, cuida el deseo.' },
        { heading: 'Hoy no', text: '«Hoy no, pero me encantaría un abrazo.» Un no al sexo puede ser un sí a la cercanía.' },
        { heading: 'Siempre libre', text: 'Un no se respeta siempre. Si hay presión o miedo, llama a la Línea 144.' },
      ],
      related: { practices: ['menu-de-cercania'] },
      references: [MUISE_2013, MARK_2018],
    },
  ],
};
