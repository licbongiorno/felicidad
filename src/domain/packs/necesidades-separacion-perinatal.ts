import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Necesidades: separación y pérdida perinatal». Suma prácticas a dos necesidades
 * que tenían pocas, sin repetir lo que ya cubren «separacion-hijos» y «duelo-perinatal»:
 *  - separarse con hijos: las primeras fiestas y fechas con dos casas (Emery; Kelly y Emery),
 *    rearmar la propia rutina y la identidad (Slotter y colaboradores; Martell y
 *    colaboradores) y presentar una nueva pareja a los chicos (Papernow; Hetherington y Kelly);
 *  - pérdida perinatal: qué responder a comentarios que duelen (Lehman y colaboradores; Doka),
 *    volver al trabajo después de la pérdida (Stroebe y Schut) y el duelo de quien no gestó
 *    (Obst y colaboradores; Badenhorst y colaboradores).
 *
 * Reglas de seguridad: en la separación, si hay violencia no hay acuerdos cara a cara ni
 * presentaciones conjuntas; se remite a la Línea 144 y al 911 (y a la Línea 102 por los chicos).
 * No se dan consejos legales. En la pérdida perinatal no hay indicaciones médicas ni laborales
 * precisas; ante ideas de morir se remite al 135, al 0800-999-0091 y al botón Ayuda.
 */

// ------------------------------------------------------------------ referencias
const EMERY_2012: Reference = {
  citation: 'Emery, R. E. (2012). Renegotiating family relationships: Divorce, child custody, and mediation (2.ª ed.). Guilford Press.',
};
const KELLY_EMERY_2003: Reference = {
  citation: 'Kelly, J. B., & Emery, R. E. (2003). Children’s adjustment following divorce: Risk and resilience perspectives. Family Relations, 52(4), 352–362.',
};
const HETHERINGTON_KELLY_2002: Reference = {
  citation: 'Hetherington, E. M., & Kelly, J. (2002). For better or for worse: Divorce reconsidered. W. W. Norton.',
};
const SLOTTER_2010: Reference = {
  citation:
    'Slotter, E. B., Gardner, W. L., & Finkel, E. J. (2010). Who am I without you? The influence of romantic breakup on the self-concept. Personality and Social Psychology Bulletin, 36(2), 147–160.',
};
const MARTELL_2001: Reference = {
  citation: 'Martell, C. R., Addis, M. E., & Jacobson, N. S. (2001). Depression in context: Strategies for guided action. W. W. Norton.',
};
const PAPERNOW_2013: Reference = {
  citation: 'Papernow, P. L. (2013). Surviving and thriving in stepfamily relationships: What works and what doesn’t. Routledge.',
};
const DOKA_1989: Reference = { citation: 'Doka, K. J. (Ed.) (1989). Disenfranchised grief: Recognizing hidden sorrow. Lexington Books.' };
const LEHMAN_1986: Reference = {
  citation:
    'Lehman, D. R., Ellard, J. H., & Wortman, C. B. (1986). Social support for the bereaved: Recipients’ and providers’ perspectives on what is helpful. Journal of Consulting and Clinical Psychology, 54(4), 438–446.',
};
const STROEBE_SCHUT_1999: Reference = {
  citation: 'Stroebe, M., & Schut, H. (1999). The dual process model of coping with bereavement: Rationale and description. Death Studies, 23(3), 197–224.',
};
const FARREN_2016: Reference = {
  citation:
    'Farren, J., Jalmbrant, M., Ameye, L., Joash, K., Mitchell-Jones, N., Tapp, S., Timmerman, D., & Bourne, T. (2016). Post-traumatic stress, anxiety and depression following miscarriage or ectopic pregnancy: A prospective cohort study. BMJ Open, 6(11), e011864.',
};
const OBST_2020: Reference = {
  citation:
    'Obst, K. L., Due, C., Oxlad, M., & Middleton, P. (2020). Men’s grief following pregnancy loss and neonatal loss: A systematic review and emerging theoretical model. BMC Pregnancy and Childbirth, 20, 11.',
};
const BADENHORST_2006: Reference = {
  citation:
    'Badenhorst, W., Riches, S., Turton, P., & Hughes, P. (2006). The psychological effects of stillbirth and neonatal death on fathers: Systematic review. Journal of Psychosomatic Obstetrics & Gynecology, 27(4), 245–256.',
};

// ------------------------------------------------------------------ avisos
/** Separación: violencia y ánimo. */
const AVISO_SEPARACION =
  'Si hay golpes, amenazas, control o miedo, esto no es un problema de organización. No acuerdes nada a solas ni cara a cara. Llama a la Línea 144, gratis y a toda hora. Si hay peligro inmediato, llama al 911. Si te preocupa la seguridad de tus hijos, llama a la Línea 102. Si piensas en morir, llama al 135 o al 0800-999-0091.';

/** Pérdida perinatal: cuándo consultar y a quién llamar. */
const AVISO_PERINATAL =
  'Si la tristeza no se va, si la angustia no te deja funcionar o si piensas en morir, consulta con un profesional. Si tienes ideas de hacerte daño, llama al 135 o al 0800-999-0091, o toca el botón Ayuda de la app. Si hay peligro inmediato, llama al 911.';

export const NECESIDADES_SEPARACION_PACK: ContentPack = {
  id: 'necesidades-separacion-perinatal',

  // ================================================================== prácticas
  practices: [
    // ---------------------------------------------------------------- separación
    {
      id: 'mi-vida-despues-de-separarme',
      title: 'Mi rutina después de separarme',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Rearmar tu semana después de la separación: un ancla diaria, algo tuyo que habías dejado y un plan para los días sin los chicos.',
      mechanism: 'Tras una separación, la rutina y la idea de quién eres quedan desarmadas. Volver a poner actividades propias en la semana, de a poco, ayuda a que el ánimo y la identidad se reacomoden.',
      evidenceLevel: 'preliminar',
      evidence: [SLOTTER_2010, MARTELL_2001],
      howItWorks: [
        'En la pareja, parte de quien eres se mezcla con el otro: amistades, gustos, horarios. En unos estudios, después de una ruptura las personas tenían menos claro quiénes eran, y eso se asociaba con más tristeza (Slotter y colaboradores, 2010).',
        'La activación conductual propone no esperar a tener ganas para moverte. Se eligen actividades chicas, con día y hora, y el ánimo suele seguir a la acción (Martell y colaboradores, 2001).',
        'Los días sin los chicos pueden ser los más difíciles. Tener algo pensado para esos ratos evita que se llenen sólo de pantalla, cama o mensajes al ex.',
      ],
      tips: [
        'Empieza por un ancla fija: una hora para levantarte o una comida a la misma hora.',
        'Recupera algo que hacías antes de la pareja, aunque sea chico.',
        'Prueba una sola cosa nueva por semana. No tiene que gustarte enseguida.',
        'Si un día no sale, retoma al día siguiente sin castigarte.',
      ],
      obstacles: [
        { q: 'No tengo ganas de nada.', a: 'Es muy común después de una separación. Elige algo muy chico, de diez minutos, y hazlo igual. Si pasan semanas sin ganas de nada, consulta con un profesional.' },
        { q: 'Los días sin mis hijos la casa se me cae encima.', a: 'Tiene sentido: es un vacío nuevo. Planea esos días antes de que lleguen. Una salida, una visita, una tarea con música. Y está bien extrañarlos.' },
      ],
      cautions: AVISO_SEPARACION,
      steps: [
        { title: 'Llegar', instruction: 'Siéntate. Respira despacio tres veces. Hoy vas a mirar tu semana, no la del otro.', durationSec: 30, kind: 'breath' },
        { title: 'Cómo está hoy', instruction: 'Anota cómo es tu semana ahora. Qué días están los chicos y qué días no.', durationSec: 60, kind: 'reflection' },
        { title: 'Los huecos', instruction: 'Marca los momentos que más pesan. Por ejemplo, el domingo a la tarde o la noche sin ellos.', durationSec: 45, kind: 'reflection' },
        { title: 'Un ancla', instruction: 'Elige algo fijo para cada día. Una hora para levantarte, una comida o una caminata corta.', durationSec: 45, kind: 'reflection' },
        { title: 'Algo tuyo', instruction: 'Anota algo que te gustaba y dejaste en la pareja. Un deporte, una amistad, un lugar, una música.', durationSec: 60, kind: 'reflection' },
        { title: 'Algo nuevo', instruction: 'Anota una cosa nueva para probar. No tiene que ser grande. Una clase, un paseo, una receta.', durationSec: 45, kind: 'reflection' },
        { title: 'En la agenda', instruction: 'Pon una de esas cosas en uno de los huecos de esta semana. Anota día y hora.', durationSec: 40, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Dite: «Estoy armando una vida que también es mía».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'primeras-fiestas-tras-la-separacion',
      title: 'Las primeras fiestas con dos casas',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Planear con tiempo un cumpleaños, una fiesta o unas vacaciones con la nueva organización: qué se acuerda, qué se les cuenta a los chicos y cómo cuidas tu propio día.',
      mechanism: 'Las fechas especiales reavivan el duelo y el conflicto. Acordar antes, avisar a los chicos y planear también tu propio día baja la tensión y deja que la fecha sea de ellos.',
      evidenceLevel: 'preliminar',
      evidence: [EMERY_2012, KELLY_EMERY_2003],
      howItWorks: [
        'Las primeras fiestas después de una separación suelen doler más de lo esperado. Traen recuerdos de cómo era antes y obligan a decidir cosas nuevas: dónde, con quién, a qué hora. Robert Emery describe que en esas fechas el duelo y el enojo vuelven con fuerza (Emery, 2012).',
        'Para los chicos, lo que más pesa no es tener dos festejos, sino quedar en medio de una pelea. Un plan acordado con tiempo y contado con claridad les da seguridad (Kelly y Emery, 2003).',
        'También importa tu parte. Si te toca pasar la fecha sin ellos, planear algo para ti no es olvidarlos. Es cuidarte para poder estar bien cuando vuelvan.',
      ],
      tips: [
        'Arranca a planear unas semanas antes. A último momento todo se pelea más.',
        'Acuerda por escrito, con mensajes breves: día, hora y lugar.',
        'Cuéntales a los chicos el plan antes, con frases simples.',
        'Una tradición nueva y chica puede convivir con el recuerdo de las viejas.',
      ],
      obstacles: [
        { q: 'Este año no me toca estar con mis hijos.', a: 'Duele, y está bien que duela. Puedes armar un festejo propio otro día, con ellos. Y para la fecha, planea estar con alguien que te quiera.' },
        { q: 'El otro adulto no responde o cambia todo a último momento.', a: 'Escribe una propuesta clara con tiempo y guarda los mensajes. Si no hay acuerdo, consulta con un profesional del derecho o de la mediación.' },
      ],
      cautions: AVISO_SEPARACION,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Piensa en la próxima fecha especial: un cumpleaños, una fiesta o unas vacaciones.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que trae', instruction: 'Anota qué te trae esa fecha. Recuerdos, tristeza, enojo, miedo. Todo puede estar.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo práctico', instruction: 'Escribe qué hay que decidir. Dónde, con quién, a qué hora y cómo se hace el cambio de casa.', durationSec: 60, kind: 'reflection' },
        { title: 'La propuesta', instruction: 'Escribe una propuesta breve para el otro adulto. Sólo datos y una frase amable.', durationSec: 60, kind: 'reflection' },
        { title: 'A los chicos', instruction: 'Anota cómo les contarás el plan. Por ejemplo: «A la noche estás con papá, y el domingo festejamos acá».', durationSec: 45, kind: 'reflection' },
        { title: 'Tu día', instruction: 'Si te toca sin ellos, anota qué harás y con quién. Si te toca con ellos, anota un rato de descanso.', durationSec: 45, kind: 'reflection' },
        { title: 'Algo nuevo', instruction: 'Piensa una tradición chica y nueva. Una comida, un juego, una foto cada año.', durationSec: 40, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho. Dite: «Esta fecha puede doler y también puede tener algo bueno».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'presentar-una-nueva-pareja',
      title: 'Presentar una nueva pareja',
      family: 'constructive',
      skills: ['attention', 'compassion'],
      summary: 'Pensar si es el momento y planear cómo contarles a tus hijos e hijas que tienes una nueva pareja, y cómo hacer el primer encuentro, corto y sin presiones.',
      mechanism: 'Una nueva pareja es otro cambio para los chicos y despierta lealtades divididas. Ir despacio, contarlo tú primero y no pedirles cariño baja el choque.',
      evidenceLevel: 'preliminar',
      evidence: [PAPERNOW_2013, HETHERINGTON_KELLY_2002],
      howItWorks: [
        'Patricia Papernow describe que, cuando llega una nueva pareja, el adulto y los chicos viven cosas muy distintas. Para el adulto es una alegría. Para los chicos puede ser una pérdida más: menos tiempo a solas y la sensación de traicionar al otro adulto si la quieren (Papernow, 2013).',
        'Por eso conviene ir despacio. Esperar a que la relación sea estable, contarlo tú primero y presentar a la persona en encuentros cortos (Hetherington y Kelly, 2002).',
        'Al principio, la nueva pareja no pone límites ni reemplaza a nadie. Su lugar es el de una persona adulta amable que se va conociendo.',
      ],
      tips: [
        'Cuéntalo tú, a solas con tus hijos, antes de que se enteren por otro lado.',
        'Que el primer encuentro sea corto y con algo para hacer: una plaza, un helado.',
        'Evita las muestras de afecto fuertes delante de ellos al principio.',
        'Sigue teniendo ratos a solas con cada hijo o hija.',
      ],
      obstacles: [
        { q: 'Mi hijo no quiere conocerla.', a: 'Es una reacción común. No lo fuerces. Escucha qué le pasa y vuelve a proponer más adelante, en algo corto. Querer al otro adulto no está en juego.' },
        { q: '¿Y si el otro adulto se enoja?', a: 'Si se puede hablar sin pelear, avísale antes de la presentación con un mensaje breve. Si hay mucho conflicto, cuida que los chicos no queden en medio.' },
      ],
      cautions: AVISO_SEPARACION,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Piensa en tus hijos o hijas, uno por uno.', durationSec: 30, kind: 'breath' },
        { title: 'El momento', instruction: 'Pregúntate: ¿la relación es estable? ¿Los chicos ya se acomodaron a la separación? Anota lo que notas.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que pueden sentir', instruction: 'Anota qué podría sentir cada uno. Celos, miedo, enojo, curiosidad o culpa con el otro adulto.', durationSec: 45, kind: 'reflection' },
        { title: 'Contarlo', instruction: 'Escribe una frase simple. Por ejemplo: «Estoy conociendo a alguien. Nadie va a reemplazar a tu mamá».', durationSec: 60, kind: 'reflection' },
        { title: 'Sin obligación', instruction: 'Suma una frase que los libere: «No tienes que quererla. Puedes decirme lo que sientes».', durationSec: 40, kind: 'reflection' },
        { title: 'El encuentro', instruction: 'Planea un primer encuentro corto, en un lugar neutro y con algo para hacer. Anota dónde y cuánto dura.', durationSec: 45, kind: 'reflection' },
        { title: 'Su tiempo', instruction: 'Anota un rato a solas con cada hijo o hija para esa semana.', durationSec: 30, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Ir despacio también es una forma de cuidar a todos.', durationSec: 30, kind: 'breath' },
      ],
    },

    // ---------------------------------------------------------------- pérdida perinatal
    {
      id: 'responder-comentarios-que-duelen',
      title: 'Cuando un comentario duele',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Una pausa breve para cuando alguien dice «ya vendrá otro» o «al menos fue temprano»: notar el golpe y tener lista una respuesta corta, o elegir no responder.',
      mechanism: 'Muchas frases bien intencionadas achican la pérdida. Tener preparada una respuesta corta evita quedar sin palabras y protege tu duelo.',
      evidenceLevel: 'preliminar',
      evidence: [LEHMAN_1986, DOKA_1989],
      micro: true,
      howItWorks: [
        'En un estudio, personas en duelo contaron qué les había ayudado y qué no. Los consejos, los «ya vas a estar mejor» y las frases que minimizan solían doler. Lo que más ayudaba era que alguien estuviera presente y las dejara hablar (Lehman y colaboradores, 1986).',
        'La pérdida de un embarazo o de un bebé suele ser un duelo que el entorno no reconoce (Doka, 1989). Por eso los comentarios que la achican son tan frecuentes.',
        'No tienes que educar a nadie. Puedes poner un límite, decir lo que necesitas o cambiar de tema. Las tres cosas están bien.',
      ],
      tips: [
        'Guarda tus frases en el celular para tenerlas a mano.',
        'Un «gracias, prefiero no hablar de eso» alcanza.',
        'Con alguien cercano, puedes decirle qué te ayudaría: «Sólo necesito que me escuches».',
        'Si el comentario te dejó mal, date un rato después para ti.',
      ],
      obstacles: [
        { q: 'Me quedé sin palabras y después me sentí peor.', a: 'Pasa mucho. Quedarse en blanco ante un golpe es humano. Puedes volver al tema otro día, si quieres, o dejarlo ir.' },
        { q: 'Lo dice alguien que quiero mucho.', a: 'Seguramente quiere ayudar y no sabe cómo. Puedes decirle con cariño: «Sé que lo dices para ayudarme. Lo que me sirve es que me escuches».' },
      ],
      cautions: AVISO_PERINATAL,
      steps: [
        { title: 'El comentario', instruction: 'Recuerda una frase que te dolió. Escríbela tal como te la dijeron.', durationSec: 30, kind: 'reflection' },
        { title: 'El golpe', instruction: 'Nota dónde lo sientes en el cuerpo. Dite: «Esto dolió, y tiene sentido».', durationSec: 30, kind: 'breath' },
        { title: 'Elegir', instruction: 'Elige qué quieres hacer: poner un límite, decir qué te ayuda o no responder. Todo vale.', durationSec: 30, kind: 'reflection' },
        { title: 'Tu frase', instruction: 'Escribe una frase corta. Por ejemplo: «Para mí fue un bebé, y lo extraño» o «Prefiero no hablar de eso».', durationSec: 50, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Tu dolor no necesita permiso de nadie.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'volver-al-trabajo-tras-la-perdida',
      title: 'Volver al trabajo después de la pérdida',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Preparar la vuelta al trabajo después de perder un embarazo o un bebé: qué contar y a quién, qué hacer con las preguntas y cómo cuidarte en los momentos difíciles.',
      mechanism: 'Volver al trabajo obliga a pasar del duelo a las tareas varias veces por día. Decidir antes qué contar y tener un plan para los momentos difíciles hace ese ir y venir más llevadero.',
      evidenceLevel: 'preliminar',
      evidence: [STROEBE_SCHUT_1999, DOKA_1989, FARREN_2016],
      howItWorks: [
        'Margaret Stroebe y Henk Schut describieron que en el duelo se va y se viene. A veces se mira la pérdida y a veces se atiende la vida que sigue, como el trabajo. Ese ir y venir es esperable (Stroebe y Schut, 1999).',
        'En el trabajo, muchas veces nadie sabe qué pasó, o se sabe y nadie lo nombra. Una pregunta como «¿para cuándo nace?» puede llegar de golpe. Es parte de un duelo que no siempre se reconoce (Doka, 1989).',
        'Después de una pérdida temprana, la ansiedad y la tristeza pueden durar meses (Farren y colaboradores, 2016). Si te cuesta concentrarte, no es falta de ganas. Es parte del proceso.',
      ],
      tips: [
        'Puedes pedirle a una persona de confianza que cuente lo necesario por ti.',
        'Ten una frase lista para las preguntas: «Perdí el embarazo. Prefiero no hablar del tema en el trabajo».',
        'Busca un lugar donde ir unos minutos si llega una ola de tristeza.',
        'Consulta qué licencias o ajustes te corresponden con tu médico y con recursos humanos.',
      ],
      obstacles: [
        { q: 'Una compañera está embarazada y me cuesta verla.', a: 'Es muy común y no te hace mala persona. Puedes tomar distancia un tiempo, sin explicar. Si hay un festejo, no tienes obligación de ir.' },
        { q: 'Siento que tengo que rendir como antes.', a: 'Es una exigencia muy dura en este momento. Si se puede, pide tareas más simples por un tiempo. Lo que puedas hacer hoy alcanza.' },
      ],
      cautions: AVISO_PERINATAL,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Piensa en tu lugar de trabajo, sin apuro.', durationSec: 30, kind: 'breath' },
        { title: 'Qué sabe cada uno', instruction: 'Anota quiénes saben lo que pasó y quiénes no. ¿Quieres que lo sepa alguien más?', durationSec: 60, kind: 'reflection' },
        { title: 'Quién cuenta', instruction: 'Elige si lo cuentas tú o le pides a alguien de confianza que diga lo justo.', durationSec: 45, kind: 'reflection' },
        { title: 'Tu frase', instruction: 'Escribe una frase corta para las preguntas. Por ejemplo: «Pasé por una pérdida. Gracias por entender».', durationSec: 45, kind: 'reflection' },
        { title: 'Momentos difíciles', instruction: 'Anota qué podría costarte. Una pregunta, una compañera embarazada, un festejo, una fecha.', durationSec: 60, kind: 'reflection' },
        { title: 'Un refugio', instruction: 'Elige un lugar y una persona para esos momentos. El baño, una vuelta a la manzana, un mensaje a alguien.', durationSec: 45, kind: 'reflection' },
        { title: 'Ir y venir', instruction: 'Recuerda que puedes estar en una tarea y de pronto extrañar. Las dos cosas son parte del duelo.', durationSec: 40, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho. Dite: «Vuelvo de a poco. Lo que hoy puedo, alcanza».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'el-duelo-de-quien-no-gesto',
      title: 'El duelo de quien no gestó',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Para la pareja que no llevó el embarazo: darte permiso para tu propio duelo, mirar si estás haciendo de «fuerte» todo el tiempo y buscar un apoyo para ti.',
      mechanism: 'Quien no gestó suele poner su dolor en segundo plano para sostener al otro. Reconocer ese duelo y buscar apoyo propio evita que quede escondido y se haga más pesado.',
      evidenceLevel: 'moderada',
      evidence: [OBST_2020, BADENHORST_2006, DOKA_1989],
      howItWorks: [
        'Una revisión de estudios encontró que muchos varones viven un duelo intenso tras una pérdida de embarazo o la muerte de un bebé. A la vez, sienten que su papel es sostener y que su dolor importa menos (Obst y colaboradores, 2020).',
        'Otra revisión, sobre la muerte de un bebé al nacer o poco después, encontró en los padres tristeza, ansiedad y a veces más consumo de alcohol. También vio que suelen pedir menos ayuda (Badenhorst y colaboradores, 2006).',
        'Esto le pasa a cualquier pareja que no gestó, sea varón o mujer. El entorno pregunta por quien llevó el embarazo y se olvida de la otra persona. Es un duelo que no se reconoce (Doka, 1989).',
      ],
      tips: [
        'Sostener a tu pareja y estar de duelo pueden ir juntos.',
        'Busca a una persona fuera de la pareja con quien hablar de lo tuyo.',
        'Si notas que tomas más alcohol o trabajas sin parar para no sentir, préstale atención.',
        'Tu forma de doler puede ser hacer cosas. También cuenta.',
      ],
      obstacles: [
        { q: 'No quiero sumarle mi dolor a mi pareja.', a: 'Es una forma de cuidar. Pero callar todo suele alejar. Puedes contarle algo chico. Y buscar otro apoyo para lo más pesado.' },
        { q: 'Siento que no tengo derecho, porque no fue mi cuerpo.', a: 'El cuerpo es una parte del duelo, no todo. También perdiste un hijo o una hija que imaginabas, unos planes, un futuro. Tiene sentido que duela.' },
      ],
      cautions: AVISO_PERINATAL,
      steps: [
        { title: 'Llegar', instruction: 'Siéntate. Pon una mano en el pecho. Respira despacio tres veces.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que perdiste', instruction: 'Escribe qué perdiste tú. Lo que imaginabas, lo que esperabas, quién ibas a ser.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que sientes', instruction: 'Nombra lo que sientes hoy. Tristeza, enojo, culpa, vacío, miedo. Todo puede estar.', durationSec: 45, kind: 'reflection' },
        { title: 'Hacer de fuerte', instruction: '¿En qué momentos guardas lo que sientes para sostener a otros? Anota uno o dos.', durationSec: 60, kind: 'reflection' },
        { title: 'Cómo lo llevas', instruction: 'Anota qué haces con el dolor. Hablar, trabajar más, tomar, dormir poco, hacer cosas. Sin juzgarte.', durationSec: 45, kind: 'reflection' },
        { title: 'Un apoyo', instruction: 'Elige a una persona fuera de la pareja para contarle algo de lo tuyo esta semana. Anota su nombre.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Dite: «Yo también perdí algo. Mi dolor también cuenta».', durationSec: 30, kind: 'breath' },
      ],
    },
  ],

  meta: {
    'mi-vida-despues-de-separarme': { level: 'iniciacion', approaches: ['tcc', 'act'], module: 'etapas', prerequisites: ['duelo-de-la-separacion'] },
    'primeras-fiestas-tras-la-separacion': { level: 'intermedio', approaches: ['sistemica', 'soluciones'], module: 'relaciones', prerequisites: ['mensaje-breve-y-neutro'] },
    'presentar-una-nueva-pareja': { level: 'intermedio', approaches: ['sistemica'], module: 'relaciones', prerequisites: ['contarles-la-separacion'] },
    'responder-comentarios-que-duelen': { level: 'iniciacion', approaches: ['cft', 'interpersonal'], module: 'duelo' },
    'volver-al-trabajo-tras-la-perdida': { level: 'intermedio', approaches: ['interpersonal', 'cft'], module: 'trabajo', prerequisites: ['nombrar-esta-perdida'] },
    'el-duelo-de-quien-no-gesto': { level: 'intermedio', approaches: ['cft', 'escritura'], module: 'duelo', prerequisites: ['nombrar-esta-perdida'] },
  },

  articles: [],
  programs: [],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-mi-vida-despues-de-separarme',
      title: 'Rearmar tu semana',
      subtitle: 'La rutina y la identidad después de separarte.',
      slides: [
        { heading: 'Algo se desarma', text: 'En la pareja, parte de quien eres se mezcla con el otro. Al separarte, eso se desarma.' },
        { heading: 'Un ancla', text: 'Empieza por algo fijo cada día. Una hora para levantarte, una comida, una caminata.' },
        { heading: 'Lo tuyo', text: 'Recupera algo que dejaste en la pareja. Un deporte, una amistad, una música.' },
        { heading: 'Los días sin ellos', text: 'Los días sin los chicos pueden pesar. Planéalos antes, con algo para hacer o alguien para ver.' },
        { heading: 'Primero actuar', text: 'No esperes a tener ganas. Haz algo chico. El ánimo suele llegar después.' },
      ],
      related: { practices: ['mi-vida-despues-de-separarme'], articles: ['separarse-con-hijos'] },
      references: [SLOTTER_2010, MARTELL_2001],
    },
    {
      id: 'pildora-primeras-fiestas',
      title: 'La primera Navidad con dos casas',
      subtitle: 'Fiestas, cumpleaños y vacaciones después de separarse.',
      slides: [
        { heading: 'Duelen más', text: 'Las primeras fiestas después de una separación suelen doler más de lo esperado. Es normal.' },
        { heading: 'Con tiempo', text: 'Acuerden el plan unas semanas antes, por escrito y con pocas palabras. Día, hora y lugar.' },
        { heading: 'Contarles', text: 'Cuéntales a los chicos el plan antes. Lo que más les pesa es quedar en medio de una pelea.' },
        { heading: 'Tu día', text: 'Si te toca sin ellos, planea algo para ti. No es olvidarlos. Es cuidarte.' },
        { heading: 'Algo nuevo', text: 'Una tradición chica y nueva puede convivir con el recuerdo de las viejas.' },
        { heading: 'Si hay violencia', text: 'Si hay golpes, amenazas o miedo, no acuerdes a solas. Llama a la Línea 144 o al 911.' },
      ],
      related: { practices: ['primeras-fiestas-tras-la-separacion'], articles: ['separarse-con-hijos'] },
      references: [EMERY_2012, KELLY_EMERY_2003],
    },
    {
      id: 'pildora-presentar-nueva-pareja',
      title: 'Te quiero presentar a alguien',
      subtitle: 'Cómo contarles a los chicos que hay una nueva pareja.',
      slides: [
        { heading: 'Dos vivencias', text: 'Para ti, una nueva pareja es una alegría. Para tus hijos, puede ser una pérdida más.' },
        { heading: 'Sin apuro', text: 'Espera a que la relación sea estable. Y a que los chicos se acomoden a la separación.' },
        { heading: 'Cuéntalo tú', text: 'Díselo tú, a solas, antes de que se enteren por otro lado. Con una frase simple.' },
        { heading: 'Sin obligación', text: 'Diles: «No tienes que quererla. Puedes decirme lo que sientes».' },
        { heading: 'Corto y simple', text: 'Que el primer encuentro sea corto, en un lugar neutro y con algo para hacer.' },
        { heading: 'Su tiempo', text: 'Sigue teniendo ratos a solas con cada hijo o hija. Eso les da seguridad.' },
      ],
      related: { practices: ['presentar-una-nueva-pareja'], articles: ['separarse-con-hijos'] },
      references: [PAPERNOW_2013, HETHERINGTON_KELLY_2002],
    },
    {
      id: 'pildora-comentarios-que-duelen',
      title: '«Ya vendrá otro»',
      subtitle: 'Qué responder cuando un comentario achica tu pérdida.',
      slides: [
        { heading: 'Frases que duelen', text: '«Ya vendrá otro». «Al menos fue temprano». Se dicen para ayudar, pero duelen.' },
        { heading: 'Tiene sentido', text: 'Si te dolió, no exageras. Esa frase achicó algo que para ti es grande.' },
        { heading: 'Tres opciones', text: 'Puedes poner un límite, decir lo que te ayuda o no responder. Las tres están bien.' },
        { heading: 'Una frase lista', text: 'Por ejemplo: «Para mí fue un bebé, y lo extraño». O: «Prefiero no hablar de eso».' },
        { heading: 'Lo que ayuda', text: 'A quien te quiere, puedes decirle: «No necesito consejos. Sólo que me escuches».' },
      ],
      related: { practices: ['responder-comentarios-que-duelen'], articles: ['perdida-perinatal-e-infertilidad'] },
      references: [LEHMAN_1986, DOKA_1989],
    },
    {
      id: 'pildora-volver-al-trabajo-tras-perdida',
      title: 'Volver al trabajo',
      subtitle: 'Después de perder un embarazo o un bebé.',
      slides: [
        { heading: 'Ir y venir', text: 'En el duelo se va y se viene. A ratos estás en la tarea y a ratos extrañas. Es esperable.' },
        { heading: 'Qué contar', text: 'Tú decides quién sabe y cuánto. Puedes pedirle a alguien de confianza que cuente lo justo.' },
        { heading: 'Una frase', text: 'Ten una frase lista: «Pasé por una pérdida. Prefiero no hablar del tema aquí».' },
        { heading: 'Un refugio', text: 'Elige un lugar o una persona para cuando llegue una ola de tristeza.' },
        { heading: 'De a poco', text: 'Si te cuesta concentrarte, no es falta de ganas. Si se puede, pide tareas más simples un tiempo.' },
        { heading: 'Pedir ayuda', text: 'Si la tristeza no se va o piensas en morir, llama al 135 o toca el botón Ayuda.' },
      ],
      related: { practices: ['volver-al-trabajo-tras-la-perdida'], articles: ['perdida-perinatal-e-infertilidad'] },
      references: [STROEBE_SCHUT_1999, DOKA_1989],
    },
    {
      id: 'pildora-duelo-de-quien-no-gesto',
      title: 'Yo también lo perdí',
      subtitle: 'El duelo de la pareja que no gestó.',
      slides: [
        { heading: 'Un duelo olvidado', text: 'Todos preguntan por quien llevó el embarazo. Y la otra persona queda en segundo plano.' },
        { heading: 'Hacer de fuerte', text: 'Muchas parejas guardan su dolor para sostener al otro. Eso, con el tiempo, pesa.' },
        { heading: 'También cuenta', text: 'No fue tu cuerpo, pero perdiste un hijo o una hija que imaginabas. Tu dolor cuenta.' },
        { heading: 'Otra forma', text: 'Quizás tu forma de doler es hacer cosas. También es duelo, y también vale.' },
        { heading: 'Un apoyo propio', text: 'Busca a alguien fuera de la pareja para hablar de lo tuyo. Si tomas más o no paras, presta atención.' },
        { heading: 'Pedir ayuda', text: 'Si piensas en morir, llama al 135 o al 0800-999-0091. O toca el botón Ayuda.' },
      ],
      related: { practices: ['el-duelo-de-quien-no-gesto'], articles: ['perdida-perinatal-e-infertilidad'] },
      references: [OBST_2020, BADENHORST_2006],
    },
  ],
};
