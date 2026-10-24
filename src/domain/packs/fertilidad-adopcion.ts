import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Fertilidad y adopción»: el proceso de buscar un hijo o una hija.
 *  - la búsqueda de un embarazo que no llega y los tratamientos de reproducción asistida:
 *    la espera del resultado, los negativos, la pareja, decidir hasta cuándo y cerrar la búsqueda;
 *  - maternidades y paternidades diversas: monoparentales por elección y parejas del mismo género;
 *  - la adopción: la espera, la llegada, el vínculo, contar su historia según la edad y la identidad de origen.
 *
 * No duplica `duelo-perinatal` (pérdidas del embarazo, duelo e infertilidad como duelo) ni
 * `necesidades-separacion-perinatal` (comentarios que duelen, duelo de quien no gestó): los enlaza.
 *
 * Reglas del paquete: no hay indicaciones médicas ni sobre trámites; ninguna decisión se juzga
 * (seguir, parar, adoptar, buscar sin pareja o no tener hijos). Lenguaje inclusivo de quien gesta,
 * de quien no gesta y de familias de cualquier forma. Señales para consultar: tristeza que no se va,
 * angustia que no deja funcionar, conflicto de pareja muy fuerte e ideas de no querer vivir
 * (135 o 0800-345-1435, botón Ayuda, 911).
 */

const BOIVIN_2011: Reference = {
  citation:
    'Boivin, J., Griffiths, E., & Venetis, C. A. (2011). Emotional distress in infertile women and failure of assisted reproductive technologies: Meta-analysis of prospective psychosocial studies. BMJ, 342, d223.',
};
const GREIL_2010: Reference = {
  citation: 'Greil, A. L., Slauson-Blevins, K., & McQuillan, J. (2010). The experience of infertility: A review of recent literature. Sociology of Health & Illness, 32(1), 140–162.',
};
const GAMEIRO_2015: Reference = {
  citation:
    'Gameiro, S., Boivin, J., Dancet, E., de Klerk, C., Emery, M., Lewis-Jones, C., Thorn, P., Van den Broeck, U., Venetis, C., Verhaak, C. M., Wischmann, T., & Vermeulen, N. (2015). ESHRE guideline: Routine psychosocial care in infertility and medically assisted reproduction. A guide for fertility staff. Human Reproduction, 30(11), 2476–2485.',
};
const GAMEIRO_FINNIGAN_2017: Reference = {
  citation:
    'Gameiro, S., & Finnigan, A. (2017). Long-term adjustment to unmet parenthood goals following ART: A systematic review and meta-analysis. Human Reproduction Update, 23(3), 322–337.',
};
const DOMAR_2000: Reference = {
  citation:
    'Domar, A. D., Clapp, D., Slawsby, E. A., Dusek, J., Kessel, B., & Freizinger, M. (2000). Impact of group psychological interventions on pregnancy rates in infertile women. Fertility and Sterility, 73(4), 805–811.',
};
const GOLOMBOK_2014: Reference = {
  citation:
    'Golombok, S., Mellish, L., Jennings, S., Casey, P., Tasker, F., & Lamb, M. E. (2014). Adoptive gay father families: Parent–child relationships and children’s psychological adjustment. Child Development, 85(2), 456–468.',
};
const GOLOMBOK_2016: Reference = {
  citation:
    'Golombok, S., Zadeh, S., Imrie, S., Smith, V., & Freeman, T. (2016). Single mothers by choice: Mother–child relationships and children’s psychological adjustment. Journal of Family Psychology, 30(4), 409–418.',
};
const BRODZINSKY_2011: Reference = {
  citation: 'Brodzinsky, D. (2011). Children’s understanding of adoption: Developmental and clinical implications. Professional Psychology: Research and Practice, 42(2), 200–207.',
};
const GROTEVANT_2013: Reference = {
  citation:
    'Grotevant, H. D., McRoy, R. G., Wrobel, G. M., & Ayers-Lopez, S. (2013). Contact between adoptive and birth families: Perspectives from the Minnesota/Texas Adoption Research Project. Child Development Perspectives, 7(3), 193–198.',
};
const VAN_IJZENDOORN_JUFFER_2006: Reference = {
  citation:
    'van IJzendoorn, M. H., & Juffer, F. (2006). The Emanuel Miller Memorial Lecture 2006: Adoption as intervention. Meta-analytic evidence for massive catch-up and plasticity in physical, socio-emotional, and cognitive development. Journal of Child Psychology and Psychiatry, 47(12), 1228–1245.',
};

/** Aviso común: señales para consultar. */
const CONSULTAR =
  'Si la tristeza no se va, si la angustia no te deja funcionar o si piensas que no quieres vivir, consulta con un profesional. Puedes llamar al 135 (CABA y GBA) o al 0800-345-1435 (resto del país), o usar el botón Ayuda. Si hay peligro inmediato, llama al 911.';

export const FERTILIDAD_ADOPCION_PACK: ContentPack = {
  id: 'fertilidad-adopcion',

  // ================================================================== prácticas
  practices: [
    {
      id: 'un-dia-de-la-espera',
      title: 'Un día de la espera',
      family: 'attentional',
      skills: ['attention', 'resilience'],
      summary: 'Tres minutos para un día de la espera del resultado: notar el «¿y si…?», volver al cuerpo y elegir qué hacer en la próxima hora.',
      mechanism: 'En la espera, la mente salta al resultado una y otra vez. Notar ese salto y volver a lo que tienes delante baja la rumiación, aunque no quite la incertidumbre.',
      evidenceLevel: 'preliminar',
      evidence: [GAMEIRO_2015, BOIVIN_2011],
      micro: true,
      howItWorks: [
        'Los días entre un procedimiento y el resultado suelen ser de los más difíciles del tratamiento. Muchas personas los llaman «las dos semanas de espera» o «la betaespera». La guía de ESHRE sobre cuidado psicosocial señala la espera como un momento de mucha carga emocional (Gameiro y colaboradores, 2015).',
        'En esos días es común revisar el cuerpo todo el tiempo, buscar señales en internet o imaginar el resultado. Esta práctica no te pide que dejes de pensar en eso. Te ayuda a notarlo y a volver, un rato, a tu día.',
        'Tampoco tienes que estar tranquila o tranquilo para que salga bien. Un metaanálisis no encontró que el malestar emocional previo empeore los resultados del tratamiento (Boivin y colaboradores, 2011).',
      ],
      tips: [
        'Úsala cuando notes que vuelves a revisar el cuerpo o el celular.',
        'Lo que sientas en el cuerpo no es un dato del resultado. El resultado lo da el estudio.',
        'Si la espera se te hace muy larga, combínala con «Entre la esperanza y la espera».',
      ],
      obstacles: [
        { q: 'No puedo dejar de buscar síntomas en internet.', a: 'Es muy común. Prueba ponerte un horario corto para buscar, y fuera de ese horario vuelve a esta práctica. Las dudas médicas, llévalas a tu equipo de salud.' },
        { q: 'Me da culpa ilusionarme.', a: 'Ilusionarte no cambia el resultado, y no ilusionarte tampoco. Puedes dejar que la esperanza esté, junto con el miedo.' },
      ],
      steps: [
        { title: 'Parar', instruction: 'Apoya los pies en el suelo. Suelta el aire despacio dos veces.', durationSec: 20, kind: 'breath' },
        { title: 'Notar', instruction: 'Nota qué pensaba tu mente. Quizás un «¿y si no funciona?». Dite: «Estoy en la espera».', durationSec: 30, kind: 'reflection' },
        { title: 'El cuerpo', instruction: 'Siente dónde está la tensión. Deja que esté. No tienes que leerla como una señal.', durationSec: 30, kind: 'instruction' },
        { title: 'Aquí', instruction: 'Nombra tres cosas que ves y una que oyes. Esto es lo que pasa ahora.', durationSec: 30, kind: 'instruction' },
        { title: 'La próxima hora', instruction: 'Elige una cosa para la próxima hora. Algo chico: comer, caminar, llamar a alguien, una serie.', durationSec: 30, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho. Dite: «Esperar es difícil. Me acompaño».', durationSec: 20, kind: 'breath' },
      ],
    },
    {
      id: 'despues-de-un-negativo',
      title: 'Después de un negativo',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Cuidarte en las horas y los días que siguen a un resultado negativo: darle lugar a la desilusión, pedir lo que necesitas y no decidir todo ese mismo día.',
      mechanism: 'Un negativo es una pérdida, aunque nadie la vea. Tratarte con amabilidad y armar un plan corto de cuidado baja la culpa y evita decidir en el peor momento.',
      evidenceLevel: 'preliminar',
      evidence: [GREIL_2010, BOIVIN_2011, GAMEIRO_2015],
      howItWorks: [
        'Cada intento trae esperanza. Cuando el resultado es negativo, llega la desilusión, y a veces un duelo por lo que se imaginó. Muchas personas sienten tristeza, enojo, vergüenza o ganas de aislarse (Greil y colaboradores, 2010).',
        'Es común buscar un culpable, y muchas veces ese culpable es uno mismo: «no me cuidé», «me estresé». Pero el estrés no hace fracasar el tratamiento (Boivin y colaboradores, 2011). Ese pensamiento suma dolor sin ser cierto.',
        'La guía de ESHRE recomienda que los equipos de salud ofrezcan apoyo emocional después de un resultado negativo (Gameiro y colaboradores, 2015). Si tu equipo tiene ese apoyo, puedes pedirlo.',
      ],
      tips: [
        'No hace falta decidir el mismo día si seguir, cambiar o parar.',
        'Avisa a pocas personas, o a ninguna. Puedes pedir a alguien de confianza que avise por ti.',
        'Si sientes que quieres dejar el tema de lado unos días, está bien.',
      ],
      obstacles: [
        { q: 'Ya pasé por esto muchas veces. Siento que no debería dolerme tanto.', a: 'Que se repita no lo hace más liviano. A veces pesa más. Cada negativo puede doler, y tiene sentido que duela.' },
        { q: 'Mi pareja lo vive distinto y nos peleamos.', a: 'Es muy común. Cada persona tiene su ritmo. La práctica «Dos maneras de doler» puede ayudarles a hablarlo.' },
      ],
      cautions: CONSULTAR,
      steps: [
        { title: 'Llegar', instruction: 'Busca un lugar donde puedas estar a solas o con quien elijas. Respira despacio tres veces.', durationSec: 30, kind: 'breath' },
        { title: 'Nombrar', instruction: 'Dite: «Esto es una pérdida. Tengo derecho a estar mal».', durationSec: 30, kind: 'reflection' },
        { title: 'Lo que sientes', instruction: 'Escribe lo que sientes ahora, sin ordenarlo. Tristeza, enojo, cansancio, vacío. Todo puede estar.', durationSec: 60, kind: 'reflection' },
        { title: 'La culpa', instruction: 'Si aparece un «es mi culpa», escríbelo. Al lado anota: «El estrés no decide el resultado».', durationSec: 45, kind: 'reflection' },
        { title: 'Dos días', instruction: 'Anota qué necesitas en los próximos dos días. Dormir, faltar al trabajo, un abrazo, estar en silencio.', durationSec: 50, kind: 'reflection' },
        { title: 'A quién', instruction: 'Escribe a quién quieres contarle, y a quién no por ahora. Puede ser nadie.', durationSec: 40, kind: 'reflection' },
        { title: 'Más adelante', instruction: 'Anota un día para pensar qué sigue. Hasta ese día, no tienes que decidir nada.', durationSec: 30, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho. Dite: «Hice lo que pude. Me trato con cuidado».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'un-equipo-en-la-busqueda',
      title: 'Un equipo en la búsqueda',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Para parejas en la búsqueda de un hijo o una hija: hablar de cómo está cada uno, repartir lo que pesa y proteger una parte de la vida juntos fuera del tratamiento.',
      mechanism: 'La búsqueda puede ocupar toda la relación. Hablar con turnos y acuerdos claros, y cuidar un espacio sin tratamiento, protege el vínculo.',
      evidenceLevel: 'preliminar',
      evidence: [GREIL_2010, GAMEIRO_2015],
      howItWorks: [
        'La infertilidad y los tratamientos tocan la pareja. Cada integrante puede vivirlos distinto: uno quiere hablar todo el tiempo y otro necesita pensar en otra cosa. Eso no mide el deseo ni el amor (Greil y colaboradores, 2010).',
        'Muchas veces una persona lleva más carga. Pone el cuerpo en los procedimientos, o se ocupa de turnos, trámites y papeles. En parejas del mismo género también hay que decidir quién gesta, si alguien lo hace, y eso trae sus propias preguntas.',
        'La guía de ESHRE recomienda que el cuidado incluya a la pareja, no sólo a quien recibe el tratamiento (Gameiro y colaboradores, 2015). Esta práctica les da un rato para hablar con orden.',
      ],
      tips: [
        'Elijan un momento tranquilo, lejos de un resultado o de una discusión.',
        'Prueba acordar una «zona sin tratamiento»: una salida o una noche en la que no se habla del tema.',
        'Si buscas sin pareja, haz esta práctica con una persona de tu red: una amiga, un hermano, alguien que te acompañe.',
      ],
      obstacles: [
        { q: 'Mi pareja no quiere seguir y yo sí.', a: 'Es una de las diferencias más difíciles. No tienen que resolverla hoy. La práctica «¿Hasta cuándo seguir?» y una consulta de pareja pueden ayudar.' },
        { q: 'Siento que todo el peso cae sobre mí.', a: 'Dilo con un pedido concreto. Por ejemplo: «¿Puedes ocuparte de los turnos este mes?». Pedir no es reprochar.' },
      ],
      cautions: CONSULTAR,
      steps: [
        { title: 'Llegar', instruction: 'Siéntense cerca. Respiren despacio tres veces, sin hablar.', durationSec: 30, kind: 'breath' },
        { title: 'Cómo estoy', instruction: 'Cada uno escribe cómo está hoy con la búsqueda. Una o dos frases.', durationSec: 50, kind: 'reflection' },
        { title: 'Escuchar', instruction: 'Lean por turnos. Quien escucha no corrige. Sólo dice: «Gracias por contarme».', durationSec: 60, kind: 'instruction' },
        { title: 'Lo que pesa', instruction: 'Hagan una lista de lo que hay que hacer: turnos, papeles, plata, avisos. Anoten quién lo lleva hoy.', durationSec: 60, kind: 'reflection' },
        { title: 'Repartir', instruction: 'Elijan una tarea que pueda pasar de una persona a la otra este mes.', durationSec: 40, kind: 'reflection' },
        { title: 'Zona libre', instruction: 'Acuerden un momento de la semana sin hablar del tratamiento. Escriban qué van a hacer.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Tómense de la mano un momento. Recuerden que están del mismo lado.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'hasta-cuando-seguir',
      title: '¿Hasta cuándo seguir?',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Pensar con calma, y en un momento tranquilo, tus límites en la búsqueda: cuerpo, plata, tiempo, pareja y otros caminos posibles.',
      mechanism: 'Las decisiones sobre seguir o parar suelen tomarse en el peor momento, después de un negativo. Pensar antes en lo que te importa y en tus límites hace la decisión más tuya.',
      evidenceLevel: 'preliminar',
      evidence: [GAMEIRO_2015, GAMEIRO_FINNIGAN_2017],
      howItWorks: [
        'Muchas personas no saben cuándo parar. Siempre hay un intento más posible, y parar puede sentirse como rendirse. Pero seguir o parar son decisiones, y las dos pueden ser cuidadas.',
        'La guía de ESHRE recomienda que el equipo de salud ayude a pensar estas decisiones y a preparar lo que viene, también si el tratamiento termina sin un embarazo (Gameiro y colaboradores, 2015). Las preguntas médicas, como qué chances hay, van con tu equipo.',
        'Una revisión de estudios encontró que, con los años, muchas personas que no tuvieron hijos después de los tratamientos se adaptan bien. Seguir muy aferrado al deseo se asoció con más malestar (Gameiro y Finnigan, 2017). Revisar tus límites no es dejar de desear: es cuidarte.',
      ],
      tips: [
        'Haz esta práctica lejos de un resultado. No en las semanas de espera ni el día de un negativo.',
        'Tus límites pueden cambiar. Puedes revisarlos cada tanto.',
        'Si hay pareja, que cada uno la haga por separado y después compartan.',
      ],
      obstacles: [
        { q: 'Si pongo un límite, siento que me rindo.', a: 'Un límite no es rendirse. Es decidir cómo quieres atravesar esto. Muchas personas sienten alivio al tenerlo claro, aunque también duela.' },
        { q: 'No sé qué otros caminos hay.', a: 'Puede ser otro tratamiento, buscar con donantes, la adopción o una vida sin hijos. Ninguno es mejor que otro. Tu equipo de salud y el artículo de adopción pueden darte información.' },
      ],
      cautions: CONSULTAR,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Hoy sólo piensas. No tienes que decidir nada.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que me importa', instruction: 'Escribe por qué quieres ser madre o padre. Qué tipo de vida y de familia imaginas.', durationSec: 60, kind: 'reflection' },
        { title: 'El cuerpo', instruction: '¿Cuánto más puede o quiere atravesar tu cuerpo? Anota lo que sientes, sin juzgarte.', durationSec: 45, kind: 'reflection' },
        { title: 'Plata y tiempo', instruction: 'Anota cuánta plata y cuánto tiempo quieres seguir dando a esta búsqueda.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo demás', instruction: 'Escribe qué pasa con tu pareja, tu trabajo y tus amistades. ¿Qué estás dejando de lado?', durationSec: 50, kind: 'reflection' },
        { title: 'Otros caminos', instruction: 'Anota otros caminos posibles, aunque hoy no te gusten. Al lado, una palabra de cómo te hace sentir cada uno.', durationSec: 60, kind: 'reflection' },
        { title: 'Una fecha', instruction: 'Elige una fecha para volver a mirar esto. Escribe qué pregunta quieres llevar a tu equipo de salud.', durationSec: 40, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho. Dite: «Puedo desear mucho y también cuidarme».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'cerrar-la-busqueda',
      title: 'Cerrar la búsqueda',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Para cuando decides terminar la búsqueda de un embarazo, o cerrar un camino: despedir al hijo o la hija que imaginaste y empezar a pensar la vida que sigue.',
      mechanism: 'Cerrar la búsqueda trae un duelo por algo que no llegó a existir. Ponerle palabras y mirar lo que sigue importando ayuda a que ese duelo tenga un lugar.',
      evidenceLevel: 'preliminar',
      evidence: [GAMEIRO_FINNIGAN_2017, GREIL_2010],
      howItWorks: [
        'Cuando una búsqueda termina, se pierde algo difícil de nombrar: un hijo o una hija que se imaginó, una forma de familia, un futuro. A ese duelo casi nadie lo ve. Puede llegar con tristeza y también con alivio (Greil y colaboradores, 2010).',
        'Cerrar no siempre es elegir una vida sin hijos. A veces es cerrar los tratamientos para abrir otro camino, como la adopción. Otras veces sí es dejar de buscar. Cualquier camino tiene su duelo.',
        'Con el tiempo, muchas personas encuentran otras fuentes de sentido y se adaptan bien (Gameiro y Finnigan, 2017). Eso no borra lo que se perdió. Esta práctica es para darle un lugar.',
      ],
      tips: [
        'Puedes hacerla más de una vez. Un cierre no pasa en un solo día.',
        'Si hay pareja, cada uno puede escribir su propia carta.',
        'Las fechas, como un cumpleaños que habría tenido o el día de la madre o del padre, pueden doler. Planea algo para esos días.',
      ],
      obstacles: [
        { q: 'Siento alivio y me da culpa.', a: 'El alivio es muy común después de mucho esfuerzo. Puede estar junto con la tristeza. No quiere decir que no te importaba.' },
        { q: 'La gente sigue preguntando si vamos a tener hijos.', a: 'Puedes tener una frase corta lista. La práctica «Cuando un comentario duele» te ayuda a armarla.' },
      ],
      cautions: CONSULTAR,
      steps: [
        { title: 'Llegar', instruction: 'Busca un lugar tranquilo. Pon una mano donde te dé calma y respira despacio.', durationSec: 30, kind: 'breath' },
        { title: 'El camino', instruction: 'Escribe en pocas líneas el camino que hiciste. Cuánto tiempo, qué intentaste, qué te dio fuerza.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que imaginaste', instruction: 'Escribe al hijo o la hija que imaginaste, o a la familia que esperabas. Puede ser una carta corta.', durationSec: 90, kind: 'reflection' },
        { title: 'Despedir', instruction: 'Cierra la carta con una frase de despedida. Por ejemplo: «Te llevo conmigo, aunque no llegues».', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que queda', instruction: 'Anota lo que sigue siendo tuyo. Vínculos, valores, proyectos, formas de cuidar a otros.', durationSec: 60, kind: 'reflection' },
        { title: 'Un paso', instruction: 'Elige un paso chico para las próximas semanas. Algo que hayas postergado por la búsqueda.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho. Dite: «Esto dolió y lo atravesé. Sigo aquí».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'preparar-su-historia',
      title: 'Preparar su historia',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Para familias adoptivas: preparar con palabras simples la historia de adopción de tu hijo o hija, y ajustarla según la edad.',
      mechanism: 'Hablar de la adopción es un proceso de años, no una sola charla. Tener las palabras pensadas de antemano baja tu ansiedad y deja la puerta abierta a sus preguntas.',
      evidenceLevel: 'moderada',
      evidence: [BRODZINSKY_2011, GROTEVANT_2013],
      howItWorks: [
        'David Brodzinsky estudió cómo entienden la adopción los chicos. A los tres o cuatro años pueden repetir la palabra sin saber qué quiere decir. Hacia la escuela primaria entienden que, para llegar a su familia, hubo otra familia antes. Ahí pueden aparecer preguntas, tristeza o enojo (Brodzinsky, 2011).',
        'Por eso no alcanza con contarlo una vez. Ayuda más una conversación abierta que se repite y crece con la edad. Lo que más importa es que tu hijo o hija sienta que puede preguntar sin que eso te lastime.',
        'Los estudios sobre apertura muestran que hablar de su origen con naturalidad suele ayudar. Esto vale aunque no haya contacto con la familia de origen (Grotevant y colaboradores, 2013).',
      ],
      tips: [
        'Usa palabras verdaderas desde el principio, adaptadas a su edad. Nada que después haya que desmentir.',
        'Habla de su familia de origen con respeto, aunque la historia sea dura.',
        'Si hay partes difíciles, como violencia o abandono, consulta con un profesional antes de contarlas.',
      ],
      obstacles: [
        { q: 'Me da miedo que quiera más a su familia de origen.', a: 'Es un miedo muy común. Que quiera saber de dónde viene no le quita amor a su familia de hoy. Saber que puede preguntar suele acercar.' },
        { q: 'No sé casi nada de su historia.', a: 'Puedes decirlo con honestidad: «Esto es lo que sabemos. Hay cosas que no sabemos». Contarle lo que hay es mejor que inventar.' },
      ],
      cautions:
        'Si su historia incluye violencia, abuso o abandono, piensa con un profesional qué contar y cómo. Si tu hijo o hija muestra mucho malestar o habla de hacerse daño, consulta. Puedes llamar a la Línea 102 (niñez y adolescencia), al 135, o al 911 si hay peligro inmediato.',
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Hoy sólo preparas palabras. No tienes que contar nada todavía.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que sabes', instruction: 'Escribe lo que sabes de su historia antes de llegar a tu familia. Sólo los hechos.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que sientes', instruction: 'Anota qué sientes al pensar en contárselo. Miedo, ternura, tristeza, dudas.', durationSec: 45, kind: 'reflection' },
        { title: 'Su edad', instruction: 'Piensa en su edad hoy. ¿Qué puede entender? ¿Qué te pregunta, o qué no te pregunta?', durationSec: 45, kind: 'reflection' },
        { title: 'Tres frases', instruction: 'Escribe tres frases simples y verdaderas. Por ejemplo: «Naciste de otra mujer. Ella no pudo cuidarte. Nosotros te esperábamos».', durationSec: 75, kind: 'reflection' },
        { title: 'Su familia de origen', instruction: 'Escribe una frase respetuosa sobre su familia de origen. Evita frases que la culpen o la idealicen.', durationSec: 50, kind: 'reflection' },
        { title: 'La puerta abierta', instruction: 'Escribe cómo vas a invitar a preguntar. Por ejemplo: «Puedes preguntarme lo que quieras, cuando quieras».', durationSec: 40, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho. Dite: «Su historia es suya. La cuido con cariño».', durationSec: 30, kind: 'breath' },
      ],
    },
  ],

  meta: {
    'un-dia-de-la-espera': { level: 'iniciacion', approaches: ['mindfulness', 'act'], module: 'etapas' },
    'despues-de-un-negativo': { level: 'intermedio', approaches: ['cft', 'escritura'], module: 'duelo', prerequisites: ['pausa-autocompasion'] },
    'un-equipo-en-la-busqueda': { level: 'intermedio', approaches: ['gottman', 'focalizada-emocion'], module: 'pareja', prerequisites: ['pausa-autocompasion'] },
    'hasta-cuando-seguir': { level: 'intermedio', approaches: ['act', 'motivacional'], module: 'valores', prerequisites: ['decidir-entre-opciones'] },
    'cerrar-la-busqueda': { level: 'intermedio', approaches: ['narrativa', 'act'], module: 'duelo', prerequisites: ['pausa-autocompasion'] },
    'preparar-su-historia': { level: 'intermedio', approaches: ['narrativa', 'sistemica'], module: 'relaciones', prerequisites: ['pausa-autocompasion'] },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'buscar-un-embarazo-y-tratamientos',
      title: 'Buscar un embarazo que no llega',
      subtitle: 'Los tratamientos, la espera, la pareja, las decisiones y otras formas de formar una familia.',
      category: 'Etapas de la vida',
      readingMin: 10,
      keyPoints: [
        'La búsqueda de un embarazo que no llega es una carga grande para el cuerpo, la pareja, el trabajo y la plata.',
        'La espera del resultado y los negativos son momentos difíciles. Se pueden planear con cuidado.',
        'El estrés no hace fracasar el tratamiento. Si no funciona, no es tu culpa.',
        'Decidir hasta cuándo seguir es una decisión tuya, o de la pareja, que conviene pensar en un momento tranquilo.',
        'Las familias monoparentales por elección y las de parejas del mismo género tienen sus propias preguntas, y sus hijos e hijas crecen bien.',
        'Ante ideas de no querer vivir: 135 o 0800-345-1435, el botón Ayuda o el 911.',
      ],
      sections: [
        {
          heading: 'Una búsqueda que pesa',
          paragraphs: [
            'Cuando un embarazo no llega, la vida empieza a girar alrededor de la búsqueda. Turnos, estudios, calendarios, plata, preguntas. Muchas personas sienten aislamiento, vergüenza o una tristeza que se renueva cada mes (Greil y colaboradores, 2010).',
            'Si ya perdiste un embarazo o sientes la infertilidad como un duelo, el artículo «Pérdida de embarazo, muerte perinatal e infertilidad» habla de eso. Aquí nos centramos en el proceso: la espera, los resultados, la pareja y las decisiones.',
            'En Argentina, la Ley 26.862 de 2013 garantiza el acceso integral a las técnicas de reproducción médicamente asistida, sin importar el estado civil ni la orientación sexual. Las dudas sobre cobertura y requisitos, consúltalas con tu equipo de salud o tu obra social.',
          ],
        },
        {
          heading: 'La espera del resultado',
          paragraphs: [
            'Los días entre un procedimiento y el resultado son de los más duros. Muchas personas los llaman «las dos semanas de espera» o «la betaespera». La mente salta al resultado una y otra vez, y el cuerpo parece dar señales que no lo son.',
            'Ayuda planear esos días: algo amable para cada uno, poco tiempo de búsqueda en internet y alguien con quien hablar. La práctica «Un día de la espera» te ayuda a volver al presente en tres minutos.',
          ],
        },
        {
          heading: 'Cuando el resultado es negativo',
          paragraphs: [
            'Un negativo es una pérdida, aunque nadie la vea. Es común sentir tristeza, enojo, cansancio o ganas de aislarse. También es común buscar culpables, y muchas veces ese culpable es uno mismo.',
            'Un metaanálisis no encontró que el malestar emocional previo empeore los resultados de los tratamientos (Boivin y colaboradores, 2011). Si un intento no funciona, no es porque no te relajaste. La guía de ESHRE recomienda que los equipos ofrezcan apoyo emocional en estos momentos (Gameiro y colaboradores, 2015).',
            'No hace falta decidir ese mismo día qué sigue. Primero, cuidarte unos días. Después, pensar.',
          ],
        },
        {
          heading: 'La pareja y la red',
          paragraphs: [
            'La búsqueda puede ocupar toda la relación. Cada integrante tiene su ritmo y su forma de sentir. Muchas veces una persona carga más: con el cuerpo, con los turnos o con los papeles. Hablar con orden y cuidar un rato sin tratamiento protege el vínculo.',
            'También pesan los comentarios ajenos: «¿Y para cuándo?», «Relájate y va a llegar». Puedes decidir qué contar, a quién y cuándo, y tener una frase corta lista para cortar preguntas. La práctica «Cuando un comentario duele» te ayuda.',
            'Desde hace décadas se estudian grupos de apoyo y de manejo del estrés para personas en tratamiento (Domar y colaboradores, 2000). Si te sientes sola o solo, un grupo o una consulta pueden aliviar.',
          ],
        },
        {
          heading: 'Familias diversas',
          paragraphs: [
            'Hay muchas formas de buscar un hijo o una hija. Algunas personas eligen ser madres o padres sin pareja. Otras son parejas del mismo género. Muchas usan donantes. Cada camino trae preguntas propias: quién gesta, cómo contarle al hijo o la hija su origen, cómo responder a un entorno que a veces no entiende.',
            'Los estudios con madres solas por elección y con familias de padres gays encontraron que los chicos se desarrollan bien. Lo que más pesa es la calidad del vínculo, no la forma de la familia (Golombok y colaboradores, 2014; Golombok y colaboradores, 2016).',
            'En parejas del mismo género, quien no gesta a veces siente que su lugar no se ve. Si hubo una pérdida, la práctica «El duelo de quien no gestó» puede ayudar. Si buscas sin pareja, arma tu red: personas que te acompañen a los turnos, en la espera y en los resultados.',
          ],
        },
        {
          heading: 'Decidir hasta cuándo',
          paragraphs: [
            'Casi siempre hay un intento más posible. Por eso decidir cuándo parar es tan difícil. Ayuda pensarlo antes, en un momento tranquilo, y no el día de un negativo. Pensar en tu cuerpo, tu plata, tu tiempo, tu pareja y lo que te importa.',
            'Las preguntas médicas, como qué chances hay o qué opciones quedan, se hablan con tu equipo de salud. Tus límites, en cambio, son tuyos. Pueden cambiar con el tiempo, y está bien revisarlos.',
          ],
        },
        {
          heading: 'Cerrar la búsqueda, o cambiar de camino',
          paragraphs: [
            'A veces la búsqueda termina sin un embarazo. Puede ser para abrir otro camino, como la adopción, o para dejar de buscar. Las dos cosas traen un duelo por el hijo o la hija que se imaginó, y a veces también alivio.',
            'Una revisión de estudios encontró que, con los años, muchas personas que no tuvieron hijos después de los tratamientos se adaptan bien. Seguir muy aferrado al deseo se asoció con más malestar (Gameiro y Finnigan, 2017). Cerrar no es olvidar: es darle un lugar a lo que no fue y mirar lo que sigue.',
          ],
        },
        {
          heading: 'Cuándo pedir ayuda',
          paragraphs: [
            'Consulta con un profesional si la tristeza no se va, si dejas de disfrutar casi todo, si la angustia no te deja trabajar o dormir, o si la pareja está muy lejos. Muchos equipos de fertilidad tienen apoyo psicológico. Puedes pedirlo.',
            'Si piensas que no quieres vivir, pide ayuda hoy. Llama al 135 (CABA y GBA) o al 0800-345-1435 (resto del país), o usa el botón Ayuda. Si hay peligro inmediato, llama al 911.',
          ],
        },
      ],
      caveat: {
        title: 'Lo que este artículo no hace',
        body: 'No da indicaciones médicas sobre tratamientos, chances ni cobertura: eso se habla con tu equipo de salud. Las ideas para la espera, la pareja y las decisiones se apoyan en guías de cuidado psicosocial y en la experiencia clínica más que en ensayos. Ninguna decisión se juzga aquí: seguir, parar, adoptar, buscar sin pareja o no tener hijos.',
      },
      diagram: {
        title: 'El ciclo de cada intento',
        nodes: ['Esperanza', 'Procedimiento', 'Espera del resultado', 'Resultado', 'Cuidarse y pensar qué sigue'],
        caption: 'Planear la espera, cuidarse después del resultado y decidir con calma alivian el ciclo.',
      },
      related: {
        practices: ['un-dia-de-la-espera', 'despues-de-un-negativo', 'un-equipo-en-la-busqueda', 'hasta-cuando-seguir', 'cerrar-la-busqueda', 'entre-la-esperanza-y-la-espera', 'responder-comentarios-que-duelen', 'el-duelo-de-quien-no-gesto'],
        articles: ['perdida-perinatal-e-infertilidad', 'adopcion-espera-llegada-e-historia', 'embarazo-y-posparto'],
      },
      references: [GREIL_2010, BOIVIN_2011, GAMEIRO_2015, DOMAR_2000, GOLOMBOK_2014, GOLOMBOK_2016, GAMEIRO_FINNIGAN_2017],
    },
    {
      id: 'adopcion-espera-llegada-e-historia',
      title: 'La adopción: la espera, la llegada y su historia',
      subtitle: 'Cómo atravesar la espera, construir el vínculo y hablar de su origen según la edad.',
      category: 'Etapas de la vida',
      readingMin: 9,
      keyPoints: [
        'La espera de una adopción puede ser larga e incierta. Merece el mismo cuidado que cualquier otra espera.',
        'El vínculo se construye de a poco. No tiene que aparecer el primer día.',
        'Los chicos adoptados suelen recuperarse mucho en su desarrollo después de llegar a una familia.',
        'Hablar de la adopción es un proceso de años, con palabras verdaderas y adaptadas a la edad.',
        'Su historia y su origen le pertenecen. Hablar de ellos con naturalidad suele ayudar.',
      ],
      sections: [
        {
          heading: 'La espera',
          paragraphs: [
            'En Argentina, las personas que quieren adoptar se inscriben en el registro nacional de aspirantes con fines adoptivos (DNRUA). Los tiempos y los pasos dependen de cada caso. Las dudas sobre el trámite, llévalas al registro o a un equipo especializado.',
            'La espera puede ser larga y llena de dudas. Muchas personas llegan después de años de tratamientos, con un duelo todavía abierto. Darle un lugar a ese duelo ayuda a recibir a un hijo o una hija por quien es, y no como reemplazo de otro.',
          ],
        },
        {
          heading: 'La llegada',
          paragraphs: [
            'Los primeros meses suelen traer alegría, cansancio y sorpresas. Tu hijo o hija llega con su historia, sus costumbres y, a veces, sus heridas. Puede tener rabietas, dormir mal, no querer contacto o aferrarse mucho. Son formas de adaptarse a algo muy grande.',
            'Un metaanálisis encontró que los chicos adoptados muestran una gran recuperación en su desarrollo físico, emocional e intelectual después de la adopción (van IJzendoorn y Juffer, 2006). El cambio lleva tiempo, y algunos chicos necesitan más apoyo que otros.',
          ],
        },
        {
          heading: 'El vínculo, de a poco',
          paragraphs: [
            'El amor no siempre aparece el primer día. Para muchas familias crece con las rutinas, el cuidado y el tiempo juntos. Si no sientes lo que esperabas, no estás fallando. Es muy común, y suele cambiar.',
            'Ayudan las rutinas previsibles, la presencia tranquila y la paciencia con el contacto. Deja que tu hijo o hija marque el ritmo de los abrazos. Cuida también tu descanso y pide ayuda a tu red.',
          ],
        },
        {
          heading: 'Contarle su historia según la edad',
          paragraphs: [
            'David Brodzinsky mostró que los chicos entienden la adopción por etapas. Antes de los cinco o seis años pueden usar la palabra sin entenderla del todo. En la escuela primaria entienden que hubo otra familia antes, y pueden aparecer preguntas, tristeza o enojo. En la adolescencia la adopción se mezcla con la pregunta de quién soy (Brodzinsky, 2011).',
            'Por eso no es una sola charla. Es una conversación que se repite y crece. Empieza temprano, con palabras simples y verdaderas. Responde lo que pregunta, sin agregar más de lo que puede entender. Y vuelve al tema cada tanto, para que sepa que puede hablar.',
            'Si hay partes duras, como violencia o abandono, piensa con un profesional qué contar y cuándo. Lo importante es no decir nada que después haya que desmentir.',
          ],
        },
        {
          heading: 'Su identidad de origen',
          paragraphs: [
            'Su historia empieza antes de llegar a tu familia. Saber de dónde viene, quiénes fueron sus primeros cuidadores y por qué no pudieron cuidarle es parte de su identidad. En Argentina, la ley reconoce el derecho de las personas adoptadas a conocer sus orígenes.',
            'Los estudios sobre apertura en la adopción encontraron que hablar del origen con naturalidad, y en algunos casos tener contacto con la familia de origen, suele ayudar. La apertura en la comunicación parece pesar más que el tipo de contacto (Grotevant y colaboradores, 2013).',
            'Habla de su familia de origen con respeto, aunque la historia sea dura. Que quiera saber de ella no le quita amor a su familia de hoy.',
          ],
        },
        {
          heading: 'Cuándo pedir ayuda',
          paragraphs: [
            'Consulta con un profesional que conozca de adopción si la adaptación se hace muy difícil, si tu hijo o hija tiene mucho miedo, enojo o tristeza durante meses, o si te sientes al límite. Pedir ayuda no es fracasar: es cuidar el vínculo.',
            'Si hay peligro inmediato, llama al 911. Para consultas sobre niñez y adolescencia, la Línea 102. Si alguien de la familia piensa que no quiere vivir, llama al 135 o al 0800-345-1435, o usa el botón Ayuda.',
          ],
        },
      ],
      caveat: {
        title: 'Lo que este artículo no hace',
        body: 'No explica trámites ni requisitos legales de la adopción: eso se consulta en el registro o con un equipo especializado. Cada historia de adopción es distinta, y las ideas para contarla son orientaciones generales. Si la historia de tu hijo o hija incluye experiencias traumáticas, busca acompañamiento profesional.',
      },
      related: {
        practices: ['preparar-su-historia', 'cerrar-la-busqueda', 'pausa-autocompasion'],
        articles: ['buscar-un-embarazo-y-tratamientos', 'perdida-perinatal-e-infertilidad'],
      },
      references: [BRODZINSKY_2011, GROTEVANT_2013, VAN_IJZENDOORN_JUFFER_2006],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'la-busqueda-con-sosten',
      title: 'La búsqueda con sostén',
      subtitle: 'Cuatro semanas para atravesar la búsqueda de un hijo o una hija',
      description:
        'Para quien busca un embarazo que no llega, está en tratamiento o piensa en otros caminos, como la adopción. Con o sin pareja. Cuidarás la espera y los resultados, hablarán en pareja o con tu red, pensarás tus límites y mirarás lo que viene. No reemplaza la ayuda profesional ni las indicaciones de tu equipo de salud.',
      basis: 'Greil y colaboradores (2010); Boivin y colaboradores (2011); Gameiro y colaboradores (2015); Gameiro y Finnigan (2017); Brodzinsky (2011).',
      rhythm: 'Unos minutos, 3 o 4 días por semana, a tu ritmo. Puedes repetir cualquier semana.',
      weeks: [
        {
          title: 'Semana 1 · La espera',
          focus: 'Atravesar los días de espera',
          description: 'Aprenderás a volver al presente en la espera y a planear días más amables.',
          practiceIds: ['un-dia-de-la-espera', 'entre-la-esperanza-y-la-espera'],
          articleIds: ['buscar-un-embarazo-y-tratamientos'],
          journalType: 'preocupacion',
        },
        {
          title: 'Semana 2 · Resultados y compañía',
          focus: 'Cuidarte y no estar a solas',
          description: 'Prepararás cómo cuidarte después de un resultado. Hablarás con tu pareja o tu red y armarás respuestas para los comentarios que duelen.',
          practiceIds: ['despues-de-un-negativo', 'un-equipo-en-la-busqueda', 'responder-comentarios-que-duelen'],
          articleIds: [],
          journalType: 'carta-compasiva',
        },
        {
          title: 'Semana 3 · Decidir',
          focus: 'Tus límites y lo que te importa',
          description: 'Pensarás con calma hasta cuándo seguir y qué otros caminos hay, sin apuro.',
          practiceIds: ['hasta-cuando-seguir', 'decidir-entre-opciones'],
          articleIds: [],
          journalType: 'valores',
        },
        {
          title: 'Semana 4 · Lo que viene',
          focus: 'Seguir, cambiar de camino o cerrar',
          description: 'Si cierras la búsqueda o un camino, le darás un lugar. Si piensas en adoptar, conocerás cómo es la espera, la llegada y cómo contarle su historia.',
          practiceIds: ['cerrar-la-busqueda', 'preparar-su-historia'],
          articleIds: ['adopcion-espera-llegada-e-historia'],
          journalType: 'escritura-expresiva',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-dos-semanas-de-espera',
      title: 'Las dos semanas de espera',
      subtitle: 'Los días entre el procedimiento y el resultado.',
      slides: [
        { heading: 'Días largos', text: 'Los días antes del resultado se hacen eternos. La mente salta al final una y otra vez.' },
        { heading: 'El cuerpo', text: 'Es común revisar el cuerpo todo el tiempo. Lo que sientes no es un dato del resultado. El resultado lo da el estudio.' },
        { heading: 'No es tu culpa', text: 'No tienes que estar tranquila o tranquilo para que salga bien. El estrés no decide el resultado.' },
        { heading: 'Planear', text: 'Elige algo amable para cada día. Pon un límite a las búsquedas en internet. Ten a alguien con quien hablar.' },
        { heading: 'Volver', text: 'Cuando la mente se va al resultado, nota tus pies, mira a tu alrededor y elige qué hacer en la próxima hora.' },
      ],
      related: { practices: ['un-dia-de-la-espera', 'entre-la-esperanza-y-la-espera'], articles: ['buscar-un-embarazo-y-tratamientos'] },
      references: [BOIVIN_2011, GAMEIRO_2015],
    },
    {
      id: 'pildora-hasta-cuando',
      title: '¿Hasta cuándo?',
      subtitle: 'Pensar tus límites en la búsqueda.',
      slides: [
        { heading: 'Siempre hay uno más', text: 'Casi siempre hay otro intento posible. Por eso decidir cuándo parar es tan difícil.' },
        { heading: 'En calma', text: 'Piensa tus límites en un momento tranquilo. No el día de un negativo.' },
        { heading: 'Qué mirar', text: 'Tu cuerpo, tu plata, tu tiempo, tu pareja y lo que te importa. Las dudas médicas, con tu equipo de salud.' },
        { heading: 'Otros caminos', text: 'Otro tratamiento, donantes, la adopción o una vida sin hijos. Ninguno es mejor que otro.' },
        { heading: 'No es rendirse', text: 'Un límite no es dejar de desear. Es decidir cómo quieres atravesar esto. Y puedes revisarlo.' },
      ],
      related: { practices: ['hasta-cuando-seguir', 'cerrar-la-busqueda'], articles: ['buscar-un-embarazo-y-tratamientos'] },
      references: [GAMEIRO_2015, GAMEIRO_FINNIGAN_2017],
    },
    {
      id: 'pildora-familias-diversas',
      title: 'Muchas formas de familia',
      subtitle: 'Madres y padres sin pareja, parejas del mismo género, donantes.',
      slides: [
        { heading: 'Muchos caminos', text: 'Hay quien busca sin pareja. Hay parejas de dos mujeres o de dos varones. Hay quien usa donantes. Todas son familias.' },
        { heading: 'Lo que importa', text: 'Los estudios muestran que los chicos de estas familias crecen bien. Lo que más pesa es el vínculo, no la forma de la familia.' },
        { heading: 'Preguntas propias', text: 'Quién gesta, cómo contarle su origen, qué responder a la gente. Son preguntas que vale la pena hablar con tiempo.' },
        { heading: 'Quien no gesta', text: 'A veces el entorno no ve a quien no gesta. Su lugar y sus emociones también cuentan.' },
        { heading: 'Tu red', text: 'Si buscas sin pareja, arma tu red. Personas que te acompañen a los turnos, en la espera y en los resultados.' },
      ],
      related: { practices: ['un-equipo-en-la-busqueda', 'el-duelo-de-quien-no-gesto'], articles: ['buscar-un-embarazo-y-tratamientos'] },
      references: [GOLOMBOK_2014, GOLOMBOK_2016],
    },
    {
      id: 'pildora-contar-la-adopcion',
      title: 'Contarle su historia',
      subtitle: 'Hablar de la adopción según la edad.',
      slides: [
        { heading: 'No es una charla', text: 'Hablar de la adopción no es contarlo una vez. Es una conversación que crece con los años.' },
        { heading: 'Desde temprano', text: 'Empieza temprano, con palabras simples y verdaderas. Nada que después haya que desmentir.' },
        { heading: 'Según la edad', text: 'Los más chicos repiten la palabra. En la primaria entienden que hubo otra familia. En la adolescencia se preguntan quiénes son.' },
        { heading: 'Su origen', text: 'Habla de su familia de origen con respeto. Que quiera saber no le quita amor a su familia de hoy.' },
        { heading: 'La puerta abierta', text: 'Dile que puede preguntar lo que quiera, cuando quiera. Si la historia es dura, piensa con un profesional cómo contarla.' },
      ],
      related: { practices: ['preparar-su-historia'], articles: ['adopcion-espera-llegada-e-historia'] },
      references: [BRODZINSKY_2011, GROTEVANT_2013],
    },
  ],

  // ================================================================== guías para familias
  kidGuides: [
    {
      id: 'hablar-de-adopcion-en-familia',
      title: 'Hablar de la adopción en familia',
      subtitle: 'Cómo contarle a tu hijo o hija su historia de adopción, según la edad.',
      readingMin: 6,
      keyPoints: [
        'Cuéntale desde temprano, con palabras simples y verdaderas.',
        'No es una sola charla: es una conversación que vuelve y crece con la edad.',
        'Responde lo que pregunta, sin agregar más de lo que puede entender.',
        'Habla de su familia de origen con respeto.',
        'Si la historia es dura, piensa con un profesional cómo contarla.',
      ],
      sections: [
        {
          heading: 'Por qué contarlo',
          paragraphs: [
            'Su historia es suya. Saber cómo llegó a tu familia le ayuda a armar quién es. Los chicos que se enteran tarde, o por otra persona, pueden sentir que les mintieron.',
            'Lo que más ayuda es que el tema no sea un secreto. Cuando se habla con naturalidad, tu hijo o hija aprende que puede preguntar sin miedo (Grotevant y colaboradores, 2013).',
          ],
        },
        {
          heading: 'Según la edad',
          paragraphs: [
            'Hasta los cinco años, más o menos, pueden repetir la palabra «adopción» sin saber bien qué es. Ayuda contar su llegada como un cuento corto: cómo lo esperaban, cómo fue el día en que se conocieron. Con fotos, si las hay.',
            'En la escuela primaria entienden que, para llegar a tu familia, antes hubo otra. Pueden preguntar por qué no se quedó con ella. También pueden sentir tristeza, enojo o miedo a que lo dejen. Es parte de entender (Brodzinsky, 2011).',
            'En la adolescencia la adopción se mezcla con la pregunta de quién soy. Puede querer saber más de su origen, o no querer hablar del tema. Respeta su ritmo y deja la puerta abierta.',
          ],
        },
        {
          heading: 'Cómo hablar',
          paragraphs: [
            'Usa palabras verdaderas, aunque sean pocas. Si no sabes algo, dilo: «Eso no lo sabemos». Es mejor que inventar.',
            'Habla de su familia de origen con respeto. Evita frases que la culpen, como «no te quería». También evita frases que la idealicen. Puedes decir: «No pudo cuidarte, y eso no fue tu culpa».',
            'Escucha lo que siente sin apurarte a calmarlo. Si dice que está triste o enojado, nómbralo con él o ella: «Te pone triste pensar en eso. Tiene sentido».',
          ],
        },
        {
          heading: 'Cuándo consultar',
          paragraphs: [
            'Consulta con un profesional que conozca de adopción si la historia tiene partes duras, como violencia o abandono. También si tu hijo o hija tiene mucho miedo, enojo o tristeza durante semanas, o si deja de jugar, comer o dormir bien.',
            'Para consultas sobre niñez y adolescencia, puedes llamar a la Línea 102. Si hay peligro inmediato, llama al 911.',
          ],
        },
      ],
      phrases: [
        '«Te esperábamos mucho, y un día llegaste»',
        '«Naciste de otra mujer. Ella no pudo cuidarte, y eso no fue tu culpa»',
        '«Puedes preguntarme lo que quieras, cuando quieras»',
        '«Eso no lo sabemos. Te cuento lo que sí sabemos»',
        '«Te pone triste pensar en eso. Tiene sentido»',
      ],
      caveat: {
        title: 'Cada historia es distinta',
        body: 'Estas ideas son orientaciones generales. La edad de llegada, lo que vivió antes y lo que se sabe de su origen cambian mucho cómo contarlo. Si su historia incluye experiencias traumáticas, busca acompañamiento profesional.',
      },
      activities: ['como-me-siento', 'cuento-siento-pido', 'mano-en-el-corazon'],
      references: [BRODZINSKY_2011, GROTEVANT_2013],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'reproduccion-asistida', term: 'Reproducción médicamente asistida', definition: 'Técnicas médicas que ayudan a lograr un embarazo, como la inseminación o la fertilización in vitro. En Argentina, la Ley 26.862 de 2013 garantiza el acceso a ellas.', articleId: 'buscar-un-embarazo-y-tratamientos' },
    { id: 'betaespera', term: 'Betaespera', definition: 'Nombre que muchas personas dan a los días de espera entre un procedimiento de fertilidad y el resultado del análisis. También se la llama «las dos semanas de espera».', articleId: 'buscar-un-embarazo-y-tratamientos', practiceId: 'un-dia-de-la-espera' },
    { id: 'monoparentalidad-por-eleccion', term: 'Monoparentalidad por elección', definition: 'Cuando una persona decide tener o adoptar un hijo o una hija sin pareja, como proyecto propio.', articleId: 'buscar-un-embarazo-y-tratamientos' },
    { id: 'apertura-en-la-adopcion', term: 'Apertura en la adopción', definition: 'Hablar con naturalidad de la adopción y del origen en la familia. A veces incluye contacto con la familia de origen. Suele ayudar a los chicos a armar su identidad.', articleId: 'adopcion-espera-llegada-e-historia', practiceId: 'preparar-su-historia' },
    { id: 'identidad-de-origen', term: 'Identidad de origen', definition: 'La parte de la historia de una persona adoptada que viene de antes de la adopción: quién la gestó, dónde nació, sus primeros años. Conocerla es un derecho.', articleId: 'adopcion-espera-llegada-e-historia' },
  ],
};
