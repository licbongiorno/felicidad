import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Enfoques: Gestalt y análisis transaccional». Amplía dos enfoques que ya tenían
 * prácticas, sin repetirlas:
 *  - Gestalt (ya existen darse-cuenta, silla-vacia, asuntos-pendientes, polaridades y
 *    dialogo-con-el-critico): «veo e imagino», que lleva el continuo de conciencia de
 *    «darse-cuenta» al contacto con otra persona (Stevens); amplificar un gesto (Levitsky y
 *    Perls; Kepner); el ciclo de la necesidad (Zinker) y el lenguaje responsable, de
 *    «tengo que» a «elijo» (Perls). La proyección ya está en «lo-que-me-irrita-del-otro».
 *  - Análisis transaccional (ya existen mis-estados-del-yo, conversacion-que-se-trabo,
 *    salir-del-triangulo-dramatico, dar-y-pedir-caricias y mis-impulsores): posiciones
 *    existenciales (Harris; Ernst), la secuencia de un juego (Berne), mandatos y permisos
 *    (Goulding y Goulding) y un contrato de cambio (Berne; Stewart y Joines).
 *
 * Seguridad: los dos enfoques tienen poca investigación controlada; se declara en cada ficha.
 * Amplificar un gesto y revisar mandatos pueden remover emociones o recuerdos: llevan avisos,
 * nivel intermedio y una alternativa más suave. Si en un vínculo hay violencia, no es un
 * «juego»: se remite a la Línea 144 y al 911. Ante ideas de hacerse daño, al 135 y al
 * 0800-999-0091.
 */

// ------------------------------------------------------------------ referencias
const PERLS_1951: Reference = {
  citation: 'Perls, F., Hefferline, R. F., & Goodman, P. (1951/2002). Terapia Gestalt: excitación y crecimiento de la personalidad humana. Sociedad de Cultura Valle-Inclán.',
};
const PERLS_1969: Reference = { citation: 'Perls, F. S. (1969). Gestalt therapy verbatim. Real People Press.' };
const LEVITSKY_1970: Reference = {
  citation:
    'Levitsky, A., & Perls, F. S. (1970). The rules and games of Gestalt therapy. En J. Fagan & I. L. Shepherd (Eds.), Gestalt therapy now: Theory, techniques, applications. Science and Behavior Books.',
};
const STEVENS_1971: Reference = { citation: 'Stevens, J. O. (1971). Awareness: Exploring, experimenting, experiencing. Real People Press.' };
const POLSTER_1973: Reference = { citation: 'Polster, E., & Polster, M. (1973). Gestalt therapy integrated: Contours of theory and practice. Brunner/Mazel.' };
const ZINKER_1977: Reference = { citation: 'Zinker, J. (1977). Creative process in Gestalt therapy. Brunner/Mazel.' };
const KEPNER_1987: Reference = { citation: 'Kepner, J. I. (1987). Body process: A Gestalt approach to working with the body in psychotherapy. Gardner Press.' };
const YONTEF_1993: Reference = { citation: 'Yontef, G. M. (1993/1995). Proceso y diálogo en psicoterapia gestáltica. Cuatro Vientos.' };

const BERNE_1964: Reference = { citation: 'Berne, E. (1964). Games people play: The psychology of human relationships. Grove Press.', note: 'Edición en castellano: «Juegos en que participamos».' };
const BERNE_1966: Reference = { citation: 'Berne, E. (1966). Principles of group treatment. Oxford University Press.' };
const BERNE_1972: Reference = { citation: 'Berne, E. (1972). What do you say after you say hello? Grove Press.' };
const HARRIS_1967: Reference = { citation: 'Harris, T. A. (1967). I’m OK—You’re OK. Harper & Row.' };
const ERNST_1971: Reference = { citation: 'Ernst, F. H. (1971). The OK corral: The grid for get-on-with. Transactional Analysis Journal, 1(4).' };
const GOULDING_1976: Reference = { citation: 'Goulding, R. L., & Goulding, M. M. (1976). Injunctions, decisions, and redecisions. Transactional Analysis Journal, 6(1), 41–48.' };
const GOULDING_1979: Reference = { citation: 'Goulding, M. M., & Goulding, R. L. (1979). Changing lives through redecision therapy. Brunner/Mazel.' };
const STEWART_2012: Reference = { citation: 'Stewart, I., & Joines, V. (2012). TA today: A new introduction to transactional analysis (2.ª ed.). Lifespace.' };
const LOCKE_2002: Reference = {
  citation: 'Locke, E. A., & Latham, G. P. (2002). Building a practically useful theory of goal setting and task motivation: A 35-year odyssey. American Psychologist, 57(9), 705–717.',
  doi: '10.1037/0003-066X.57.9.705',
};

// ------------------------------------------------------------------ avisos
const MARCO = 'Es un lenguaje para entender interacciones, con poca investigación controlada. No lo uses para etiquetar a nadie.';

const AVISO_CUERPO =
  'Este experimento puede traer emociones fuertes o recuerdos. Si aparece mucho miedo, mareo o un recuerdo traumático, detente: abre los ojos, apoya los pies y mira a tu alrededor. Si viviste un trauma, haz este trabajo con un terapeuta. Si necesitas hablar con alguien ya, llama al 0800-999-0091.';

const AVISO_VIOLENCIA =
  'Si en el vínculo hay violencia, control o miedo, no es un juego: es un riesgo y tu seguridad es primero. Busca ayuda: la Línea 144 orienta las 24 horas y, si hay peligro, llama al 911.';

const AVISO_MANDATOS =
  'Revisar mensajes de la infancia puede remover dolor. Si aparecen recuerdos de maltrato o abuso, detente y trabájalo con un terapeuta. Si sientes un mensaje como «no existas» o tienes ideas de hacerte daño, deja la práctica y pide ayuda ya: llama al 135 (resto del país, 0800-345-1435) o al 0800-999-0091. Si hay peligro, al 911.';

export const ENFOQUES_GESTALT_AT_PACK: ContentPack = {
  id: 'enfoques-gestalt-transaccional',

  // ================================================================== prácticas
  practices: [
    // ---------------------------------------------------------------- Gestalt
    {
      id: 'veo-e-imagino',
      title: 'Veo… e imagino…',
      family: 'attentional',
      skills: ['attention', 'compassion'],
      summary: 'Llevar el «darse cuenta» al encuentro con otra persona: separar lo que ves y oyes de lo que imaginas sobre lo que piensa o siente.',
      mechanism: 'Muchas tensiones nacen de tomar una suposición por un hecho. Nombrar por separado lo que percibes y lo que imaginas te devuelve al contacto real y abre la puerta a preguntar.',
      evidenceLevel: 'preliminar',
      evidence: [STEVENS_1971, PERLS_1951, YONTEF_1993],
      howItWorks: [
        'La terapia Gestalt distingue lo que percibimos de lo que imaginamos. John O. Stevens reunió experimentos sencillos para notarlo. Uno consiste en mirar a alguien y decir, por turnos, «veo…» e «imagino…» (Stevens, 1971).',
        'Al hacerlo aparece algo sorprendente: mucho de lo que «sabemos» de la otra persona es imaginado. Vemos un ceño fruncido e imaginamos enojo. Puede ser enojo, cansancio o el sol en la cara.',
        'La práctica «Darse cuenta» trabaja contigo a solas. Esta la lleva a un vínculo. No se trata de dejar de imaginar, sino de saber cuándo imaginas.',
      ],
      tips: [
        'Puedes hacerla con alguien cerca, en silencio, o recordando una charla reciente.',
        'Lo que ves se podría filmar: un gesto, una palabra, un silencio. Lo demás es imaginado.',
        'Si quieres, después pregunta: «Te vi con cara seria. ¿Te pasa algo?».',
      ],
      obstacles: [
        { q: 'Tengo la certeza de lo que la otra persona piensa.', a: 'Puede que aciertes. Igual vale nombrarlo como «imagino». Así queda lugar para que te diga si es así.' },
        { q: 'Me cuesta separar lo que veo de lo que imagino.', a: 'Pregúntate si una cámara lo registraría. «Mira el celular» sí. «Se aburre» no: eso es imaginado.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Elige a alguien con quien hablaste hoy, o alguien que tengas cerca.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que veo', instruction: 'Completa varias veces: «Veo…» o «Escucho…». Sólo lo que una cámara podría registrar. Por ejemplo: «Veo que mira el celular».', durationSec: 75, kind: 'instruction' },
        { title: 'Lo que imagino', instruction: 'Ahora completa varias veces: «Imagino que…». Por ejemplo: «Imagino que se aburre conmigo».', durationSec: 75, kind: 'instruction' },
        { title: 'Juntar', instruction: 'Une las dos frases: «Veo que mira el celular, e imagino que se aburre». Repite con otros ejemplos.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que siento', instruction: '¿Qué sientes cuando crees lo que imaginas? Nota si algo cambia al llamarlo «imagino».', durationSec: 45, kind: 'reflection' },
        { title: 'Preguntar', instruction: 'Elige una suposición para comprobar. Escribe una pregunta simple y amable para hacerle a esa persona.', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'de-tengo-que-a-elijo',
      title: 'De «tengo que» a «elijo»',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Reescribir frases como «tengo que» y «no puedo» en un lenguaje que te devuelve la elección: «elijo», «no quiero», «yo».',
      mechanism: 'La forma de hablar puede esconder que eliges. Cambiar el verbo no borra la obligación, pero muestra la decisión y lo que cuidas con ella. Así baja la sensación de estar a merced.',
      evidenceLevel: 'preliminar',
      evidence: [LEVITSKY_1970, PERLS_1969, YONTEF_1993],
      howItWorks: [
        'La Gestalt presta mucha atención al lenguaje. Abraham Levitsky y Fritz Perls describieron reglas para hablar en primera persona y hacerse cargo. Una es cambiar «no puedo» por «no quiero» y ver qué pasa (Levitsky y Perls, 1970).',
        'Otra es cambiar «tengo que» por «elijo». «Tengo que ir a trabajar» pasa a «elijo ir a trabajar, porque quiero cobrar a fin de mes». La tarea es la misma. Lo que cambia es quién decide (Perls, 1969).',
        'También se cambia el «uno» o el «eso» por el «yo». «Uno se pone mal» pasa a «yo me pongo mal».',
        'Ojo: no todo es elección. Hay situaciones de presión, pobreza o violencia donde el margen es chico. Aquí se busca el margen que sí existe, no culparte.',
      ],
      tips: [
        'Dilo en voz alta y nota el cuerpo. Si una frase suena falsa, eso también informa.',
        'Si «elijo» no te sale, prueba «por ahora elijo…, porque…».',
        'Si al decir «no quiero» piensas «es verdad, no quiero», ese es un dato valioso.',
      ],
      obstacles: [
        { q: 'Hay cosas que de verdad no elijo.', a: 'Es cierto. Una enfermedad o una pérdida no se eligen. Pero sí eliges algo de cómo responder. Busca ese margen, aunque sea chico.' },
        { q: 'Si digo «elijo», siento que me culpo.', a: 'No es la idea. Elegir no significa que todo dependa de ti. Significa ver dónde tienes voz.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Ten a mano papel o el celular para anotar.', durationSec: 30, kind: 'breath' },
        { title: 'Tus «tengo que»', instruction: 'Anota tres frases que te dices seguido con «tengo que» o «debo». Por ejemplo: «Tengo que llamar a mi madre».', durationSec: 60, kind: 'reflection' },
        { title: 'Elijo', instruction: 'Reescribe cada una así: «Elijo… porque quiero…». Por ejemplo: «Elijo llamarla porque quiero cuidar el vínculo».', durationSec: 75, kind: 'reflection' },
        { title: 'Tus «no puedo»', instruction: 'Anota una o dos frases con «no puedo». Cámbialas por «no quiero» y léelas despacio.', durationSec: 60, kind: 'reflection' },
        { title: 'Del uno al yo', instruction: 'Busca una frase con «uno», «la gente» o «eso». Dila con «yo». Por ejemplo: «Yo me angustio».', durationSec: 45, kind: 'reflection' },
        { title: 'Notar', instruction: '¿Qué frases suenan verdaderas y cuáles falsas? ¿Qué cambió en el cuerpo al decirlas?', durationSec: 45, kind: 'reflection' },
        { title: 'Una para hoy', instruction: 'Elige una frase nueva para recordar hoy. Escríbela donde la veas.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'amplificar-un-gesto',
      title: 'Amplificar un gesto',
      family: 'deconstructive',
      skills: ['attention', 'compassion'],
      summary: 'Un experimento con el cuerpo: notar un gesto o una postura que haces sin darte cuenta, agrandarlo de a poco y escuchar qué expresa.',
      mechanism: 'El cuerpo a veces expresa lo que todavía no pusimos en palabras. Agrandar un gesto, con cuidado, lo vuelve visible y permite darle voz.',
      evidenceLevel: 'preliminar',
      evidence: [LEVITSKY_1970, KEPNER_1987, PERLS_1969],
      howItWorks: [
        'En la Gestalt, un experimento es una propuesta para probar algo en el momento y ver qué pasa. Uno clásico es exagerar un gesto: un puño apretado, un pie que se mueve, los hombros que suben (Levitsky y Perls, 1970).',
        'La idea es que el gesto no es un error. Puede estar diciendo algo: enojo, ganas de irse, cansancio o ganas de protegerse. Al agrandarlo y darle voz, muchas personas reconocen lo que sienten.',
        'James Kepner desarrolló este trabajo con el cuerpo dentro de la Gestalt (Kepner, 1987). Aquí se ofrece una versión breve y suave, siempre a tu ritmo.',
      ],
      tips: [
        'Agranda poco a poco: un poco más, y otro poco. No hace falta llegar al máximo.',
        'Si el gesto tiene voz, déjala salir en una frase corta: «¡Basta!», «Déjame», «Me voy».',
        'Haz también el gesto contrario y compara.',
      ],
      obstacles: [
        { q: 'No noto ningún gesto.', a: 'Empieza por la postura: cómo estás en la silla, dónde están las manos, cómo está la mandíbula. Cualquier cosa vale.' },
        { q: 'Me da vergüenza hacerlo.', a: 'Es muy común. Puedes hacerlo a solas y con un gesto chico. La vergüenza también se puede notar como parte del experimento.' },
      ],
      cautions: AVISO_CUERPO,
      steps: [
        { title: 'Llegar', instruction: 'Siéntate con comodidad. Respira despacio y siente los pies en el piso. Puedes parar cuando quieras.', durationSec: 40, kind: 'breath' },
        { title: 'Notar', instruction: 'Recorre tu cuerpo sin cambiar nada. ¿Hay un gesto o una postura que se repite? Una mano apretada, los hombros altos, un pie inquieto.', durationSec: 60, kind: 'instruction' },
        { title: 'Un poco más', instruction: 'Elige uno. Hazlo un poco más grande, despacio. Después, otro poco. Quédate en un punto que puedas sostener.', durationSec: 60, kind: 'instruction' },
        { title: 'Qué aparece', instruction: 'Mientras lo haces, nota qué emoción aparece. ¿Qué parece querer este gesto?', durationSec: 60, kind: 'reflection' },
        { title: 'Darle voz', instruction: 'Si el gesto pudiera hablar, ¿qué diría? Dilo en voz baja, en una frase corta y en primera persona.', durationSec: 60, kind: 'reflection' },
        { title: 'Soltar', instruction: 'Deja el gesto de a poco. Prueba el gesto contrario, por ejemplo abrir la mano. Nota la diferencia.', durationSec: 45, kind: 'instruction' },
        { title: 'Volver', instruction: 'Respira despacio. Mira a tu alrededor y nombra tres cosas que ves. Anota lo que descubriste.', durationSec: 40, kind: 'breath' },
      ],
    },
    {
      id: 'ciclo-de-la-necesidad',
      title: 'El ciclo de una necesidad',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Seguir una necesidad de hoy por sus etapas, notar, movilizarte, contactar y cerrar, y descubrir en cuál sueles quedarte a mitad de camino.',
      mechanism: 'Una necesidad que no se completa sigue pidiendo atención como un malestar difuso. Ver en qué etapa se corta el ciclo muestra qué paso falta para cerrarlo.',
      evidenceLevel: 'preliminar',
      evidence: [ZINKER_1977, POLSTER_1973, PERLS_1951],
      howItWorks: [
        'Joseph Zinker describió el ciclo de la experiencia. Primero aparece una sensación. Luego nos damos cuenta de qué necesitamos, juntamos energía, actuamos y hacemos contacto con lo que buscábamos. Al final viene un cierre y la necesidad se aquieta (Zinker, 1977).',
        'Un ejemplo simple: notas un vacío en el estómago, te das cuenta de que tienes hambre, cocinas, comes y quedas en calma. Con necesidades como compañía o descanso pasa lo mismo, pero se ve menos.',
        'Para la Gestalt, muchas molestias vienen de ciclos cortados. A veces no notamos la sensación. Otras veces la notamos pero no actuamos, o actuamos y no disfrutamos ni cerramos (Polster y Polster, 1973). Cada persona suele cortarse en un lugar parecido.',
      ],
      tips: [
        'Empieza con una necesidad chica de hoy: descanso, agua, aire, hablar con alguien.',
        'El cierre importa: date un momento para notar que ya está.',
        'Si siempre te cortas en la misma etapa, ahí está tu punto de práctica.',
      ],
      obstacles: [
        { q: 'No sé qué necesito.', a: 'Empieza por el cuerpo: ¿hay cansancio, tensión, hambre, inquietud? La práctica «Necesidades que hoy pido» también puede ayudarte.' },
        { q: 'Cuando consigo algo, enseguida paso a lo siguiente.', a: 'Es muy común. Prueba quedarte diez segundos más con lo que lograste antes de seguir. Eso también es cerrar.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en tu día de hoy, desde la mañana.', durationSec: 30, kind: 'breath' },
        { title: 'Notar', instruction: '¿Qué sensación se repitió hoy en el cuerpo? Inquietud, cansancio, vacío o tensión. Anótala.', durationSec: 60, kind: 'reflection' },
        { title: 'Darte cuenta', instruction: '¿Qué necesidad podría haber detrás? Por ejemplo, descanso, compañía, movimiento o que te escuchen.', durationSec: 60, kind: 'reflection' },
        { title: 'Movilizarte', instruction: '¿Juntaste energía para buscarla? ¿Qué hiciste, o qué te frenó?', durationSec: 60, kind: 'reflection' },
        { title: 'Contactar', instruction: '¿Llegaste a tener lo que necesitabas? Si llegó, ¿lo disfrutaste o pasaste rápido a otra cosa?', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: '¿Hubo un momento de «ya está»? Si no lo hubo, ¿qué faltaría para cerrar?', durationSec: 45, kind: 'reflection' },
        { title: 'Tu punto', instruction: '¿En qué etapa sueles cortarte? Elige un paso chico para completar el ciclo de hoy.', durationSec: 45, kind: 'reflection' },
      ],
    },

    // ---------------------------------------------------------------- análisis transaccional
    {
      id: 'mi-posicion-existencial',
      title: 'Yo estoy bien, tú estás bien',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Reconocer desde qué posición te miras a ti y a los demás en un momento difícil, y practicar volver a «yo estoy bien, tú estás bien».',
      mechanism: 'Bajo tensión solemos pasar a una posición rígida: «yo no valgo» o «el otro no vale». Notarlo y buscar una mirada que respete a las dos personas cambia lo que decimos y hacemos.',
      evidenceLevel: 'contemplativa',
      evidence: [HARRIS_1967, ERNST_1971, STEWART_2012],
      howItWorks: [
        'Eric Berne propuso que cada persona toma desde chica una posición sobre sí y sobre los demás. Hay cuatro: «yo estoy bien, tú estás bien»; «yo no estoy bien, tú estás bien»; «yo estoy bien, tú no estás bien»; y «nadie está bien».',
        'Thomas Harris hizo famosa la primera en su libro de 1967. Franklin Ernst las dibujó como un cuadro de cuatro casillas, el «corral OK» (Ernst, 1971). Cada casilla tiene su forma de actuar: entenderse, apartarse, imponerse o no ir a ningún lado.',
        'Nadie está siempre en la misma casilla. En un día malo o con ciertas personas, nos movemos. «Estar bien» no quiere decir que todo lo que haces está bien: quiere decir que tu valor y el del otro no están en discusión. ' + MARCO,
      ],
      tips: [
        'Pista de «yo no estoy bien»: te achicas, pides perdón de más o te callas.',
        'Pista de «tú no estás bien»: desprecias, das órdenes o te burlas.',
        '«Yo estoy bien, tú estás bien» no significa estar de acuerdo. Se puede discrepar con respeto.',
      ],
      obstacles: [
        {
          q: 'Con alguien que me lastimó no puedo pensar que «está bien».',
          a: 'Tiene sentido. La posición no pide aprobar lo que hizo ni seguir cerca. Puedes ver su valor como persona y, a la vez, protegerte. Si hay violencia, tu seguridad es primero: la Línea 144 orienta las 24 horas.',
        },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en un encuentro reciente que te dejó mal.', durationSec: 30, kind: 'breath' },
        { title: 'Las cuatro', instruction: 'Lee las cuatro posiciones: yo bien y tú bien; yo no y tú sí; yo sí y tú no; nadie bien.', durationSec: 60, kind: 'instruction' },
        { title: 'Dónde estabas', instruction: '¿En cuál estabas en ese encuentro? ¿Qué pensabas de ti y qué pensabas de la otra persona?', durationSec: 60, kind: 'reflection' },
        { title: 'Qué hiciste', instruction: '¿Cómo actuaste desde ahí? Por ejemplo, te callaste, te impusiste o te fuiste.', durationSec: 60, kind: 'reflection' },
        { title: 'Las dos bien', instruction: 'Imagina la escena desde «yo estoy bien, tú estás bien». ¿Qué dirías distinto?', durationSec: 60, kind: 'reflection' },
        { title: 'Una frase', instruction: 'Escribe una frase para la próxima vez. Por ejemplo: «Pienso distinto y te respeto».', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'salir-de-un-juego',
      title: 'Salir de un juego psicológico',
      family: 'deconstructive',
      skills: ['attention', 'resilience'],
      summary: 'Reconocer un juego que se repite, con su gancho, su giro y su mal final conocido, y probar una salida desde el Adulto.',
      mechanism: 'Los juegos siguen un guion: un mensaje oculto, una respuesta que engancha, un giro y una sensación amarga. Ver ese guion permite no tomar el gancho o pedir directamente lo que se busca.',
      evidenceLevel: 'contemplativa',
      evidence: [BERNE_1964, BERNE_1972, STEWART_2012],
      howItWorks: [
        'Eric Berne llamó juego a una serie de intercambios que se repite y siempre termina mal. Lo que se dice parece una cosa, pero hay un mensaje oculto. Al final alguien cambia de postura de golpe y todos quedan con una sensación conocida (Berne, 1964).',
        'Más tarde lo resumió en una fórmula: un gancho, un punto débil que engancha, una respuesta, un giro, un momento de confusión y un final amargo (Berne, 1972). «Sí, pero…» es un ejemplo: alguien pide ideas y las rechaza todas.',
        'La práctica del triángulo dramático mira los roles. Esta mira la secuencia, para encontrar salidas: no tomar el gancho, nombrar lo que pasa sin culpar o pedir lo que de verdad se busca. ' + MARCO,
      ],
      tips: [
        'Pista de un juego: la sensación final es siempre la misma.',
        'Ponle un nombre con humor, como «el de las llaves». Así lo reconoces antes.',
        'La salida más simple suele ser no dar la respuesta de siempre.',
      ],
      obstacles: [
        { q: 'Quien juega es la otra persona, no yo.', a: 'Puede ser. Igual, un juego necesita a dos. Lo que puedes cambiar es tu jugada, y eso suele alcanzar para que el juego no siga.' },
        { q: 'Si no respondo como siempre, se enoja más.', a: 'Al principio puede pasar: el juego insiste. Mantén la calma y vuelve al Adulto. Si el enojo da miedo, no es un juego: cuida tu seguridad.' },
      ],
      cautions: AVISO_VIOLENCIA,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en una situación con alguien que termina siempre igual.', durationSec: 30, kind: 'breath' },
        { title: 'El final', instruction: '¿Cómo termina casi siempre? ¿Qué sientes al final? Bronca, culpa, tristeza o «otra vez lo mismo».', durationSec: 45, kind: 'reflection' },
        { title: 'El gancho', instruction: '¿Cómo empieza? Anota la primera frase o el primer gesto. ¿Qué mensaje oculto lleva?', durationSec: 60, kind: 'reflection' },
        { title: 'Tu respuesta', instruction: '¿Qué respondes casi siempre? ¿Desde qué estado: Padre, Adulto o Niño?', durationSec: 60, kind: 'reflection' },
        { title: 'El giro', instruction: '¿En qué momento cambia todo de golpe? ¿Quién cambia de postura?', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que se busca', instruction: '¿Qué crees que buscan las dos personas en el fondo? Atención, cercanía, tener razón o descansar.', durationSec: 60, kind: 'reflection' },
        { title: 'Una salida', instruction: 'Elige una salida: no dar la respuesta de siempre, nombrar lo que pasa con calma o pedir directo lo que buscas.', durationSec: 60, kind: 'reflection' },
      ],
    },
    {
      id: 'mandatos-y-permisos',
      title: 'Mis mandatos y mis permisos',
      family: 'deconstructive',
      skills: ['compassion', 'resilience'],
      summary: 'Reconocer un mandato que captaste en la infancia, como «no sientas» o «no te acerques», ver la decisión que tomaste entonces y darte hoy un permiso.',
      mechanism: 'En la infancia tomamos decisiones para adaptarnos a los mensajes que recibíamos. Hoy esas decisiones pueden limitar. Verlas como decisiones, y no como verdades, abre la puerta a decidir otra cosa.',
      evidenceLevel: 'contemplativa',
      evidence: [GOULDING_1976, GOULDING_1979, STEWART_2012],
      howItWorks: [
        'Robert y Mary Goulding describieron los mandatos: mensajes que una criatura capta de los adultos, casi siempre sin palabras. Algunos son «no sientas», «no te acerques», «no seas importante», «no lo logres», «no pienses» o «no pertenezcas» (Goulding y Goulding, 1976).',
        'Lo central de su propuesta es que el mensaje no actúa solo. La criatura toma una decisión para adaptarse, por ejemplo: «no voy a mostrar lo que siento». Esa decisión tuvo sentido entonces. Por eso hoy se puede volver a decidir (Goulding y Goulding, 1979).',
        'A diferencia de los impulsores, que empujan a hacer («sé perfecto»), los mandatos frenan: dicen «no». Un permiso los equilibra: «puedo sentir», «puedo acercarme», «puedo lograrlo». El trabajo profundo se hace en terapia. Aquí se da un primer paso. ' + MARCO,
      ],
      tips: [
        'Busca en lo que hoy te cuesta mucho, aunque lo quieras: acercarte, mostrar enojo, destacarte.',
        'No hace falta saber quién te lo transmitió. Alcanza con reconocer el mensaje.',
        'El permiso se escribe en presente y en primera persona: «Puedo…».',
      ],
      obstacles: [
        { q: 'Siento que culpo a mi familia.', a: 'No se trata de culpar. Los adultos también recibieron mensajes. La decisión la tomaste en la infancia para cuidarte, y eso es lo que hoy puedes revisar.' },
        { q: 'No me creo el permiso.', a: 'Es normal al principio. Léelo igual y busca una acción chica en esa dirección. El permiso se vuelve creíble cuando lo vives.' },
      ],
      cautions: AVISO_MANDATOS,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Siente los pies en el piso. Puedes parar cuando quieras.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que cuesta', instruction: 'Anota algo que te cuesta mucho, aunque lo quieras. Por ejemplo, pedir ayuda, mostrar enojo o destacarte.', durationSec: 60, kind: 'reflection' },
        { title: 'El mandato', instruction: 'Lee: no sientas, no te acerques, no seas importante, no lo logres, no pienses, no pertenezcas. ¿Cuál se parece a lo tuyo?', durationSec: 60, kind: 'reflection' },
        { title: 'La decisión', instruction: '¿Qué decidiste en tu infancia para adaptarte? Completa: «Decidí que yo no…». No hace falta entrar en recuerdos dolorosos.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que te dio', instruction: '¿Cómo te cuidó esa decisión entonces? ¿Qué te cuesta hoy?', durationSec: 45, kind: 'reflection' },
        { title: 'Tu permiso', instruction: 'Escribe tu permiso en presente: «Puedo sentir», «puedo acercarme» o «puedo ser importante».', durationSec: 60, kind: 'reflection' },
        { title: 'Un paso', instruction: 'Elige una acción chica para esta semana que vaya en la dirección del permiso.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho. Lee tu permiso en voz baja, despacio, dos veces.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'contrato-de-cambio',
      title: 'Mi contrato de cambio',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Escribir, desde el Adulto, un acuerdo contigo para un cambio concreto: qué harás, cómo sabrás que lo lograste y cómo podrías sabotearlo.',
      mechanism: 'Un cambio dicho en general, como «quiero estar mejor», es difícil de sostener. Un contrato claro y medible orienta la acción, deja ver el avance y anticipa los frenos.',
      evidenceLevel: 'preliminar',
      evidence: [BERNE_1966, STEWART_2012, LOCKE_2002],
      howItWorks: [
        'En el análisis transaccional, el trabajo empieza con un contrato. Eric Berne lo pensó como un acuerdo claro, entre adultos, sobre qué se quiere cambiar (Berne, 1966).',
        'Ian Stewart y Vann Joines proponen algunas preguntas: qué quieres cambiar, qué vas a hacer, cómo sabrás que lo lograste, cómo podrías sabotearte y qué harás entonces (Stewart y Joines, 2012).',
        'Esto coincide con la investigación sobre metas. Las metas concretas y medibles suelen funcionar mejor que un «hago lo que puedo» (Locke y Latham, 2002).',
        'A diferencia de «Una meta bien formada», aquí se suma una pregunta clave: cómo podrías boicotearte. Y se escribe como un acuerdo contigo, con fecha para revisarlo.',
      ],
      tips: [
        'Escríbelo en positivo: lo que harás, no lo que dejarás de hacer.',
        'Tiene que poder verse desde afuera: alguien podría notar el cambio.',
        'Léelo desde el Adulto y también desde el Niño: ¿una parte tuya lo resiste?',
        'Pon una fecha para revisarlo, por ejemplo en dos semanas.',
      ],
      obstacles: [
        { q: 'No sé cómo medir lo que quiero cambiar.', a: 'Pregúntate qué harías distinto un martes cualquiera si ya lo hubieras logrado. Eso se puede contar: veces, minutos, días.' },
        { q: 'Siempre rompo lo que me propongo.', a: 'Por eso está la pregunta del sabotaje. Achica el contrato hasta que parezca casi fácil. Cumplir uno chico vale más que romper uno grande.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en un cambio que quieres hacer en tu vida.', durationSec: 30, kind: 'breath' },
        { title: 'Qué quiero', instruction: 'Escribe qué quieres cambiar, en positivo. Por ejemplo: «Quiero hablar con calma en las discusiones».', durationSec: 60, kind: 'reflection' },
        { title: 'Qué haré', instruction: '¿Qué harás, en concreto, para lograrlo? Una acción que otra persona podría ver.', durationSec: 60, kind: 'reflection' },
        { title: 'Cómo sabré', instruction: '¿Cómo vas a saber que lo lograste? Escribe algo que se pueda contar: veces, minutos o días.', durationSec: 60, kind: 'reflection' },
        { title: 'El sabotaje', instruction: '¿Cómo podrías boicotearte? Por ejemplo, olvidarte, postergar o decir «esta vez no cuenta».', durationSec: 60, kind: 'reflection' },
        { title: 'Si pasa', instruction: 'Escribe qué harás si aparece ese sabotaje. Una respuesta simple y concreta.', durationSec: 45, kind: 'reflection' },
        { title: 'Firmar', instruction: 'Pon una fecha para revisarlo. Lee el contrato entero. Si una parte tuya se resiste, achícalo.', durationSec: 45, kind: 'reflection' },
      ],
    },
  ],

  meta: {
    'veo-e-imagino': { level: 'iniciacion', approaches: ['gestalt'], module: 'relaciones', prerequisites: ['darse-cuenta'] },
    'de-tengo-que-a-elijo': { level: 'iniciacion', approaches: ['gestalt'], module: 'valores' },
    'amplificar-un-gesto': {
      level: 'intermedio',
      approaches: ['gestalt'],
      module: 'cuerpo',
      prerequisites: ['darse-cuenta', 'escaneo-corporal'],
      risk: { level: 2, alternative: 'plantas-de-los-pies' },
    },
    'ciclo-de-la-necesidad': { level: 'intermedio', approaches: ['gestalt'], module: 'autoconocimiento', prerequisites: ['darse-cuenta', 'necesidades-que-pido'] },
    'mi-posicion-existencial': { level: 'iniciacion', approaches: ['analisis-transaccional'], module: 'autoconocimiento', prerequisites: ['mis-estados-del-yo'] },
    'salir-de-un-juego': { level: 'intermedio', approaches: ['analisis-transaccional'], module: 'relaciones', prerequisites: ['mis-estados-del-yo', 'salir-del-triangulo-dramatico'] },
    'mandatos-y-permisos': {
      level: 'intermedio',
      approaches: ['analisis-transaccional'],
      module: 'autoconocimiento',
      prerequisites: ['mis-impulsores'],
      risk: { level: 2, alternative: 'pausa-autocompasion' },
    },
    'contrato-de-cambio': { level: 'iniciacion', approaches: ['analisis-transaccional'], module: 'habitos', prerequisites: ['mis-estados-del-yo'] },
  },

  articles: [],
  programs: [],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-veo-e-imagino',
      title: 'Lo que veo y lo que imagino',
      subtitle: 'Separar un hecho de una suposición.',
      slides: [
        { heading: 'Un ceño fruncido', text: 'Ves un ceño fruncido y piensas: «Le molesta algo de mí». Pero eso no lo viste. Lo imaginaste.' },
        { heading: 'Dos cosas', text: 'Lo que ves se podría filmar. Lo que imaginas es tuyo: una idea sobre lo que la otra persona piensa.' },
        { heading: 'Decirlo así', text: 'Prueba unir las dos: «Veo que no me mira, e imagino que le molesta algo».' },
        { heading: 'Qué cambia', text: 'Al llamarlo «imagino», la idea pierde fuerza. Ya no es un hecho. Es algo que puedes comprobar.' },
        { heading: 'Preguntar', text: 'Si te importa, pregunta con calma: «Te vi con cara seria. ¿Te pasa algo?».' },
      ],
      related: { practices: ['veo-e-imagino'] },
      references: [STEVENS_1971, YONTEF_1993],
    },
    {
      id: 'pildora-tengo-que-elijo',
      title: '«Tengo que» o «elijo»',
      subtitle: 'El lenguaje que te devuelve la elección.',
      slides: [
        { heading: 'Tengo que', text: 'Tengo que trabajar. Tengo que llamar. Tengo que ir. Dicho así, parece que otro decide por ti.' },
        { heading: 'Elijo', text: 'Prueba: «Elijo ir a trabajar, porque quiero cobrar». La tarea es la misma. Pero ahora ves quién decide.' },
        { heading: 'No puedo', text: 'Cambia «no puedo» por «no quiero». A veces suena falso. A veces suena muy verdadero.' },
        { heading: 'Del uno al yo', text: '«Uno se pone mal» pasa a «yo me pongo mal». Hablar en primera persona te acerca a lo que sientes.' },
        { heading: 'Sin culpa', text: 'No todo se elige. La idea es ver el margen que sí tienes, aunque sea chico.' },
      ],
      related: { practices: ['de-tengo-que-a-elijo'] },
      references: [LEVITSKY_1970, PERLS_1969],
    },
    {
      id: 'pildora-amplificar-un-gesto',
      title: 'Lo que dice un gesto',
      subtitle: 'Un experimento con el cuerpo, a tu ritmo.',
      slides: [
        { heading: 'Sin darte cuenta', text: 'Aprietas la mano. Subes los hombros. Mueves un pie. El cuerpo hace gestos que no elegimos.' },
        { heading: 'Agrandarlo', text: 'La Gestalt propone un experimento: hacer ese gesto un poco más grande, despacio, y ver qué pasa.' },
        { heading: 'Darle voz', text: 'Si el gesto pudiera hablar, ¿qué diría? A veces aparece un «basta» o un «déjame».' },
        { heading: 'El contrario', text: 'Después prueba el gesto contrario. Abre la mano. Baja los hombros. Nota la diferencia.' },
        { heading: 'Con cuidado', text: 'Si aparece mucho miedo o un recuerdo duro, para. Apoya los pies y mira a tu alrededor. Si viviste un trauma, hazlo con un terapeuta.' },
      ],
      related: { practices: ['amplificar-un-gesto'] },
      references: [LEVITSKY_1970, KEPNER_1987],
    },
    {
      id: 'pildora-ciclo-de-la-necesidad',
      title: 'Una necesidad, de punta a punta',
      subtitle: 'Notar, moverte, contactar y cerrar.',
      slides: [
        { heading: 'Un ciclo', text: 'Notas algo en el cuerpo. Te das cuenta de qué necesitas. Te mueves. Lo consigues. Y cierras.' },
        { heading: 'Con hambre', text: 'Sientes un vacío en el estómago. Te das cuenta de que es hambre. Cocinas, comes y quedas en calma.' },
        { heading: 'Ciclos cortados', text: 'Con otras necesidades no es tan claro. A veces no la notamos. A veces la notamos y no hacemos nada.' },
        { heading: 'Sin cierre', text: 'Otras veces conseguimos algo y pasamos rápido a lo siguiente. Sin disfrutar. Sin un «ya está».' },
        { heading: 'Tu punto', text: 'Cada persona suele cortarse en un lugar parecido. Encontrarlo te muestra qué practicar.' },
      ],
      related: { practices: ['ciclo-de-la-necesidad'] },
      references: [ZINKER_1977, POLSTER_1973],
    },
    {
      id: 'pildora-posiciones-existenciales',
      title: 'Yo estoy bien, tú estás bien',
      subtitle: 'Las cuatro posiciones del análisis transaccional.',
      slides: [
        { heading: 'Cuatro lugares', text: 'Yo bien y tú bien. Yo no y tú sí. Yo sí y tú no. Nadie bien. Son las cuatro posiciones.' },
        { heading: 'Yo no', text: 'Desde «yo no estoy bien» te achicas. Te callas, pides perdón de más o te apartas.' },
        { heading: 'Tú no', text: 'Desde «tú no estás bien» te impones. Das órdenes, desprecias o te burlas.' },
        { heading: 'Las dos bien', text: 'Desde «yo bien, tú bien» se puede discrepar con respeto. Nadie tiene que perder.' },
        { heading: 'Nos movemos', text: 'Nadie vive siempre en la misma casilla. Notar dónde estás te ayuda a volver.' },
      ],
      related: { practices: ['mi-posicion-existencial'], articles: ['analisis-transaccional'] },
      references: [HARRIS_1967, ERNST_1971],
    },
    {
      id: 'pildora-salir-de-un-juego',
      title: 'Otra vez lo mismo',
      subtitle: 'Cómo reconocer un juego psicológico y salir.',
      slides: [
        { heading: 'Siempre igual', text: 'Hay peleas que terminan siempre igual. Con la misma bronca, la misma culpa, el mismo «otra vez».' },
        { heading: 'Un gancho', text: 'Eric Berne las llamó juegos. Empiezan con un gancho: una frase que parece inocente, pero lleva otro mensaje.' },
        { heading: 'El giro', text: 'Alguien muerde el anzuelo. Después, de golpe, cambia todo. Y llega el final de siempre.' },
        { heading: 'Salir', text: 'No des la respuesta de siempre. O nombra lo que pasa con calma. O pide directo lo que buscas.' },
        { heading: 'No es un juego', text: 'Si hay violencia o miedo, no es un juego. Tu seguridad es primero. La Línea 144 atiende las 24 horas.' },
      ],
      related: { practices: ['salir-de-un-juego'], articles: ['analisis-transaccional'] },
      references: [BERNE_1964, BERNE_1972],
    },
    {
      id: 'pildora-mandatos-y-permisos',
      title: 'No sientas, no te acerques',
      subtitle: 'Mandatos de la infancia y permisos de hoy.',
      slides: [
        { heading: 'Sin palabras', text: 'En la infancia captamos mensajes de los adultos, casi siempre sin palabras. No sientas. No te acerques. No seas importante.' },
        { heading: 'Una decisión', text: 'Para adaptarnos, tomamos una decisión. Por ejemplo: «No voy a mostrar lo que siento». En su momento tuvo sentido.' },
        { heading: 'Hoy', text: 'Esa decisión puede seguir activa. Y frenar algo que hoy quieres, como acercarte o destacarte.' },
        { heading: 'Un permiso', text: 'Escribe un permiso en presente. Puedo sentir. Puedo acercarme. Puedo ser importante.' },
        { heading: 'Si duele', text: 'Si aparecen recuerdos de maltrato o ideas de hacerte daño, para. Pide ayuda al 135 o al 0800-999-0091.' },
      ],
      related: { practices: ['mandatos-y-permisos'], articles: ['analisis-transaccional'] },
      references: [GOULDING_1976, GOULDING_1979],
    },
    {
      id: 'pildora-contrato-de-cambio',
      title: 'Un contrato contigo',
      subtitle: 'Un cambio claro, medible y a prueba de excusas.',
      slides: [
        { heading: 'En general', text: '«Quiero estar mejor» es difícil de sostener. No dice qué hacer ni cuándo sabrás que llegaste.' },
        { heading: 'Qué harás', text: 'Escribe una acción concreta, que otra persona podría ver. Por ejemplo, hablar con calma en las discusiones.' },
        { heading: 'Cómo sabrás', text: 'Elige algo que se pueda contar. Veces por semana, minutos o días.' },
        { heading: 'El sabotaje', text: 'Pregúntate cómo podrías boicotearte. Olvidarte, postergar, decir «esta vez no cuenta». Y qué harás entonces.' },
        { heading: 'Revisar', text: 'Pon una fecha para revisarlo. Si te cuesta, achica el contrato. Uno chico cumplido vale más.' },
      ],
      related: { practices: ['contrato-de-cambio'] },
      references: [BERNE_1966, STEWART_2012, LOCKE_2002],
    },
  ],
};
