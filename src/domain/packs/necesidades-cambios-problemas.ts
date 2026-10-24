import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Necesidades: pérdidas, cambios y problemas».
 * Suma prácticas a dos necesidades que tenían poca variedad:
 *  1. «Atravesar una pérdida o un cambio» (perdidas-cambios): la ola de duelo que llega
 *     de golpe, pedir y aceptar ayuda concreta en el duelo, y la identidad después de un
 *     cambio grande (jubilación, mudanza, fin de una etapa), con la idea de transición de
 *     rol de la terapia interpersonal.
 *  2. «Resolver un problema» (problemas): partir un problema grande en pasos de diez
 *     minutos, pedir consejo de forma eficaz y mirar el problema como si fuera de un amigo
 *     (autodistanciamiento).
 *
 * No se repiten técnicas que ya existen: las fechas difíciles están en «fechas-que-pesan»,
 * lo controlable y lo que no en «plata-controlable» y «preocupacion-que-moviliza», y el
 * pedido general de ayuda en «pedir-ayuda-es-fuerza».
 * Las prácticas de duelo recuerdan el botón Ayuda y las líneas de crisis.
 */

// ------------------------------------------------------------ referencias: duelo y cambios
const STROEBE_1999: Reference = {
  citation: 'Stroebe, M., & Schut, H. (1999). The dual process model of coping with bereavement: Rationale and description. Death Studies, 23(3), 197–224.',
  doi: '10.1080/074811899201046',
};
const RANDO_1993: Reference = {
  citation: 'Rando, T. A. (1993). Treatment of complicated mourning. Research Press.',
  note: 'Describe los «repuntes temporales del duelo»: subidas breves del dolor ante un recuerdo, una fecha o un estímulo.',
};
const WORDEN_2018: Reference = {
  citation: 'Worden, J. W. (2018). Grief counseling and grief therapy: A handbook for the mental health practitioner (5th ed.). Springer.',
};
const SHEAR_2015: Reference = {
  citation: 'Shear, M. K. (2015). Complicated grief. New England Journal of Medicine, 372(2), 153–160.',
  doi: '10.1056/NEJMcp1315618',
};
const STROEBE_2005: Reference = {
  citation: 'Stroebe, W., Zech, E., Stroebe, M. S., & Abakoumkin, G. (2005). Does social support help in bereavement? Journal of Social and Clinical Psychology, 24(7), 1030–1050.',
  doi: '10.1521/jscp.2005.24.7.1030',
  note: 'El apoyo social se asocia con más bienestar general, aunque por sí solo no acorta el duelo.',
};
const WEISSMAN_2000: Reference = {
  citation: 'Weissman, M. M., Markowitz, J. C., & Klerman, G. L. (2000). Comprehensive guide to interpersonal psychotherapy. Basic Books.',
};
const BRIDGES_1980: Reference = {
  citation: 'Bridges, W. (1980). Transitions: Making sense of life’s changes. Addison-Wesley.',
};

// ------------------------------------------------------------ referencias: problemas
const NEZU_2013: Reference = { citation: 'Nezu, A. M., Nezu, C. M., & D’Zurilla, T. J. (2013). Problem-solving therapy: A treatment manual. Springer.' };
const BANDURA_1981: Reference = {
  citation: 'Bandura, A., & Schunk, D. H. (1981). Cultivating competence, self-efficacy, and intrinsic interest through proximal self-motivation. Journal of Personality and Social Psychology, 41(3), 586–598.',
  doi: '10.1037/0022-3514.41.3.586',
};
const GOLLWITZER_2006: Reference = {
  citation: 'Gollwitzer, P. M., & Sheeran, P. (2006). Implementation intentions and goal achievement: A meta-analysis of effects and processes. Advances in Experimental Social Psychology, 38, 69–119.',
  doi: '10.1016/S0065-2601(06)38002-1',
};
const BROOKS_2015: Reference = {
  citation: 'Brooks, A. W., Gino, F., & Schweitzer, M. E. (2015). Smart people ask for (my) advice: Seeking advice boosts perceptions of competence. Management Science, 61(6), 1421–1435.',
  doi: '10.1287/mnsc.2014.2054',
};
const BONACCIO_2006: Reference = {
  citation: 'Bonaccio, S., & Dalal, R. S. (2006). Advice taking and decision-making: An integrative literature review, and implications for the organizational sciences. Organizational Behavior and Human Decision Processes, 101(2), 127–151.',
  doi: '10.1016/j.obhdp.2006.07.001',
};
const GROSSMANN_2014: Reference = {
  citation: 'Grossmann, I., & Kross, E. (2014). Exploring Solomon’s paradox: Self-distancing eliminates the self-other asymmetry in wise reasoning about close relationships in younger and older adults. Psychological Science, 25(8), 1571–1580.',
  doi: '10.1177/0956797614535400',
};
const KROSS_2014: Reference = {
  citation: 'Kross, E., Bruehlman-Senecal, E., Park, J., et al. (2014). Self-talk as a regulatory mechanism: How you do it matters. Journal of Personality and Social Psychology, 106(2), 304–324.',
  doi: '10.1037/a0035173',
};

// ------------------------------------------------------------ avisos
const DUELO_CAUTION =
  'Si el dolor te desborda o piensas en morir, no esperes: usa el botón Ayuda de la app. Puedes llamar al 135 (CABA y GBA) o al 0800-345-1435 desde el resto del país. Si hay peligro inmediato, llama al 911. Si tras muchos meses el duelo te impide vivir, consulta a un profesional: tiene tratamiento.';

const CAMBIO_CAUTION =
  'Después de un cambio grande es común sentirse sin rumbo un tiempo. Si llevas más de dos semanas sin ganas de nada, durmiendo muy mal o pensando que no vale la pena seguir, consulta a un profesional. Puedes llamar a la Línea Nacional de Salud Mental, 0800-999-0091, o usar el botón Ayuda de la app.';

export const NECESIDADES_CAMBIOS_PACK: ContentPack = {
  id: 'necesidades-cambios-problemas',

  // ================================================================== prácticas
  practices: [
    // ------------------------------------------------------------ pérdidas y cambios
    {
      id: 'ola-de-duelo',
      title: 'Cuando llega la ola',
      family: 'attentional',
      skills: ['attention', 'compassion'],
      summary: 'Una pausa breve para cuando el dolor de una pérdida aparece de golpe: una canción, un olor, un lugar.',
      mechanism: 'Nombrar la ola y dejarla pasar con el cuerpo apoyado evita pelear con ella. Así sube, llega a su punto y baja.',
      evidenceLevel: 'preliminar',
      evidence: [RANDO_1993, STROEBE_1999, WORDEN_2018],
      micro: true,
      cautions: DUELO_CAUTION,
      howItWorks: [
        'Mucho después de una pérdida, el dolor puede volver de golpe. Una canción en la radio, un olor o una silla vacía alcanzan. Therese Rando llamó a esto repuntes temporales del duelo (Rando, 1993).',
        'Estas olas son esperables y no significan que vas para atrás. Suelen ser intensas y breves. Pelear contra ellas o asustarse suele hacerlas más largas.',
        'Esta práctica no busca que no duela. Busca que puedas atravesar la ola con el cuerpo apoyado y luego volver a lo que estabas haciendo, como propone el modelo de proceso dual (Stroebe y Schut, 1999).',
      ],
      tips: [
        'Si estás en un lugar público, puedes hacerla en el baño o caminando despacio.',
        'Llorar está bien. No hace falta frenarlo.',
        'Si las olas son muchas por día, anota qué las dispara. Te ayuda a prepararte.',
      ],
      obstacles: [
        { q: 'Me da vergüenza que me pase delante de otros.', a: 'Es muy humano. Puedes decir «me vino un recuerdo» y tomarte un minuto. La mayoría entiende.' },
        { q: 'La ola no baja.', a: 'Apoya los pies, mira cinco cosas a tu alrededor y llama a alguien. Si el dolor te desborda, usa el botón Ayuda.' },
      ],
      steps: [
        { title: 'Nombrar', instruction: 'Dite en voz baja: «Llegó una ola de duelo». Ponerle nombre ya ayuda.', durationSec: 20, kind: 'instruction' },
        { title: 'Apoyar el cuerpo', instruction: 'Siente los pies en el piso. Si puedes, apoya la espalda o una mano en algo firme.', durationSec: 25, kind: 'instruction' },
        { title: 'Respirar', instruction: 'Respira despacio. Deja que el aire salga más largo de lo que entra.', durationSec: 40, kind: 'breath' },
        { title: 'Dejar pasar', instruction: 'Nota dónde duele en el cuerpo. No lo empujes. Las olas suben y bajan solas.', durationSec: 40, kind: 'reflection' },
        { title: 'Una frase amable', instruction: 'Pon una mano en el pecho. Dite: «Duele porque quise mucho».', durationSec: 20, kind: 'breath' },
        { title: 'Volver', instruction: 'Mira a tu alrededor. Elige un paso chico: tomar agua, seguir caminando o escribirle a alguien.', durationSec: 25, kind: 'instruction' },
      ],
    },
    {
      id: 'ayuda-en-el-duelo',
      title: 'Pedir y aceptar ayuda en el duelo',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Armar una lista de ayudas concretas que otras personas pueden darte en estos días, y responder a los «si necesitas algo, avísame».',
      mechanism: 'Mucha gente quiere ayudar y no sabe cómo. Un pedido concreto le da forma a esa ayuda y te quita peso.',
      evidenceLevel: 'preliminar',
      evidence: [STROEBE_2005, WORDEN_2018, SHEAR_2015],
      cautions: DUELO_CAUTION,
      howItWorks: [
        'Después de una pérdida, todo cuesta más. Comer, hacer trámites o atender a los chicos puede parecer imposible. Al mismo tiempo, muchas personas dicen «si necesitas algo, avísame» y no saben qué hacer.',
        'El apoyo de otras personas se asocia con más bienestar en el duelo, aunque no hace desaparecer la pena (Stroebe y otros, 2005). Ayuda sobre todo cuando es concreto y cuando no te obliga a fingir que estás bien.',
        'Pedir ayuda no es ser una carga. Es dejar que otros te acompañen. Muchas veces también les hace bien a ellos.',
      ],
      tips: [
        'Separa dos tipos de ayuda: hacer cosas por ti y estar contigo.',
        'Ten la lista en el celular. Cuando alguien ofrezca, elige algo de ahí.',
        'Puedes decir qué no te ayuda. Por ejemplo, que no te den consejos o que no te apuren.',
      ],
      obstacles: [
        { q: 'No quiero molestar.', a: 'Piensa si a ti te molestaría que una amiga en duelo te pidiera una comida. A la mayoría le da alivio poder hacer algo.' },
        { q: 'La gente dejó de preguntar.', a: 'Pasa mucho después de las primeras semanas. Puedes escribir tú: «Sigo mal, ¿te parece si nos vemos el sábado?».' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Ten a mano papel o el celular.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que pesa', instruction: 'Anota qué tareas te cuestan estos días. Comida, compras, trámites, la casa, los chicos o las mascotas.', durationSec: 75, kind: 'reflection' },
        { title: 'Lo que falta', instruction: 'Anota qué compañía te haría bien. Alguien que escuche, una caminata o un mate por la noche.', durationSec: 60, kind: 'reflection' },
        { title: 'Quién puede', instruction: 'Junto a cada cosa, escribe el nombre de alguien que podría darla. No tiene que ser la misma persona.', durationSec: 75, kind: 'reflection' },
        { title: 'La respuesta lista', instruction: 'Prepara una frase para cuando te ofrezcan ayuda. Por ejemplo: «Gracias. ¿Podrías traer algo de comer el jueves?».', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que no ayuda', instruction: 'Anota algo que prefieres que no hagan. Puedes decirlo con calma cuando haga falta.', durationSec: 45, kind: 'reflection' },
        { title: 'Un pedido hoy', instruction: 'Elige un pedido y mándalo hoy. Pon una mano en el pecho y dite: «Merezco apoyo».', durationSec: 40, kind: 'breath' },
      ],
    },
    {
      id: 'quien-soy-despues-del-cambio',
      title: 'Quién soy después del cambio',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Para una jubilación, una mudanza o el fin de una etapa: despedir el lugar que tenías, ver qué sigue siendo tuyo y probar un rol nuevo.',
      mechanism: 'Un cambio grande también es una pérdida de rol. Hacer el duelo por lo viejo y buscar apoyos para lo nuevo ayuda a rearmar la identidad.',
      evidenceLevel: 'preliminar',
      evidence: [WEISSMAN_2000, BRIDGES_1980],
      cautions: CAMBIO_CAUTION,
      howItWorks: [
        'Cuando dejas un trabajo, una ciudad o una etapa, no pierdes solo un lugar. Pierdes rutinas, personas y una forma de presentarte. Por eso muchas personas se sienten desorientadas aunque el cambio sea bueno.',
        'La terapia interpersonal llama a esto una transición de rol. Propone dos tareas: hacer el duelo por el rol que se fue y buscar apoyos y habilidades para el nuevo (Weissman y otros, 2000).',
        'William Bridges describió un tiempo intermedio, entre lo que terminó y lo que empieza, que se siente vacío y confuso (Bridges, 1980). No es un error tuyo. Es parte del cambio.',
      ],
      tips: [
        'Hazla en dos o tres ratos si el cambio es muy grande.',
        'Lo que sigue siendo tuyo suele estar en tus valores y tus habilidades, no en el cargo o el lugar.',
        'Probar un rol nuevo no es elegir para siempre. Es un ensayo.',
      ],
      obstacles: [
        { q: 'Siento que ya no sirvo para nada.', a: 'Es una sensación muy común tras una jubilación o un despido. Mira la lista de lo que sigue siendo tuyo. Si el desánimo no afloja, consulta.' },
        { q: 'El cambio fue bueno y aun así estoy triste.', a: 'Pasa mucho. Todo cambio deja algo atrás. Puedes alegrarte y extrañar a la vez.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Siéntate con calma y respira despacio. Piensa en el cambio que estás viviendo.', durationSec: 40, kind: 'breath' },
        { title: 'Lo que terminó', instruction: 'Anota qué terminó. Un trabajo, una casa, un barrio, una etapa con los hijos.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que extraño', instruction: 'Escribe lo que extrañas de ese lugar. Personas, rutinas, cómo te veían los demás.', durationSec: 90, kind: 'reflection' },
        { title: 'Lo que no extraño', instruction: 'Escribe también lo que no extrañas. Está bien que haya cosas que te alivia dejar.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que sigue conmigo', instruction: 'Anota qué sigue siendo tuyo. Tus valores, lo que sabes hacer, lo que te importa.', durationSec: 90, kind: 'reflection' },
        { title: 'El tiempo del medio', instruction: 'Si hoy te sientes en el medio, sin saber bien quién eres, dite: «Esto también es parte del cambio».', durationSec: 40, kind: 'breath' },
        { title: 'Un rol para probar', instruction: 'Elige una forma de usar algo de tu lista en tu vida nueva. Por ejemplo, enseñar, cuidar o sumarte a un grupo.', durationSec: 75, kind: 'reflection' },
        { title: 'Un apoyo', instruction: 'Escribe a quién puedes contarle este cambio. Elige cuándo hablarle esta semana.', durationSec: 45, kind: 'reflection' },
      ],
    },

    // ------------------------------------------------------------ problemas
    {
      id: 'pasos-de-diez-minutos',
      title: 'Un problema grande en pasos de diez minutos',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Partir un problema que abruma en pasos tan chicos que cada uno entre en diez minutos, y poner el primero en la agenda.',
      mechanism: 'Las metas cercanas y chicas dan logros rápidos. Eso aumenta la confianza y hace más fácil seguir.',
      evidenceLevel: 'moderada',
      evidence: [BANDURA_1981, GOLLWITZER_2006, NEZU_2013],
      howItWorks: [
        'Un problema grande se ve como un bloque. La mente no sabe por dónde empezar y lo posterga. Partirlo en pasos lo vuelve manejable.',
        'Albert Bandura y Dale Schunk mostraron que las metas chicas y cercanas ayudan más que una meta grande y lejana. Cada paso logrado suma confianza (Bandura y Schunk, 1981).',
        'Decidir cuándo y dónde harás el primer paso aumenta mucho las chances de hacerlo (Gollwitzer y Sheeran, 2006).',
      ],
      tips: [
        'Si un paso no entra en diez minutos, pártelo otra vez.',
        'Empieza cada paso con un verbo: llamar, buscar, escribir, pedir.',
        'Tacha cada paso hecho. Ver el avance motiva.',
      ],
      obstacles: [
        { q: 'Me salen demasiados pasos.', a: 'Está bien. No tienes que hacerlos todos esta semana. Elige los tres primeros y guarda el resto.' },
        { q: 'No sé cuál es el primer paso.', a: 'Muchas veces el primer paso es buscar información. Por ejemplo, averiguar a quién preguntar.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio dos veces. Ten papel a mano.', durationSec: 20, kind: 'breath' },
        { title: 'El problema', instruction: 'Escribe arriba el problema en una frase. Por ejemplo: «Ordenar los papeles de la herencia».', durationSec: 40, kind: 'reflection' },
        { title: 'La meta', instruction: 'Escribe cómo te darías cuenta de que está resuelto. Algo que se pueda ver.', durationSec: 40, kind: 'reflection' },
        { title: 'Los pasos', instruction: 'Anota los pasos que se te ocurran, sin orden. Cada uno empieza con un verbo.', durationSec: 90, kind: 'reflection' },
        { title: 'Achicar', instruction: 'Mira cada paso. Si lleva más de diez minutos, pártelo en dos o tres más chicos.', durationSec: 60, kind: 'reflection' },
        { title: 'Ordenar', instruction: 'Numera los pasos en el orden en que tiene sentido hacerlos.', durationSec: 40, kind: 'reflection' },
        { title: 'Agendar', instruction: 'Elige el primer paso y ponle día, hora y lugar. Agéndalo en el celular.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'pedir-consejo',
      title: 'Pedir consejo de forma eficaz',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Preparar una consulta a alguien que sabe del tema: qué preguntar, cómo contar el problema y qué hacer con lo que te digan.',
      mechanism: 'Un pedido claro trae respuestas más útiles. Escuchar varias miradas y decidir tú mejora la decisión.',
      evidenceLevel: 'preliminar',
      evidence: [BONACCIO_2006, BROOKS_2015, NEZU_2013],
      howItWorks: [
        'Pedir consejo suele mejorar las decisiones, sobre todo cuando quien aconseja sabe del tema. Pero muchas personas le dan poco peso a lo que escuchan y se quedan con su idea de antes (Bonaccio y Dalal, 2006).',
        'Mucha gente no pide consejo por miedo a parecer incapaz. Un estudio mostró lo contrario: quien pide consejo sobre algo difícil suele parecer más competente (Brooks y otros, 2015).',
        'El consejo sirve más cuando preguntas algo concreto, das el contexto necesario y luego decides tú.',
      ],
      tips: [
        'Busca a alguien con experiencia en ese tema, no solo a quien te quiere.',
        'Pide opciones o preguntas que no viste, no un veredicto.',
        'Consulta a dos personas distintas si la decisión es importante.',
        'Para temas de salud, plata o leyes, consulta también a un profesional.',
      ],
      obstacles: [
        { q: 'Siempre me dicen lo que yo quiero oír.', a: 'Pregunta así: «¿Qué ves que yo no estoy viendo?» o «¿Qué harías distinto?».' },
        { q: 'Me dan consejos que no pedí.', a: 'Puedes agradecer y volver a tu pregunta: «Gracias. Lo que más me sirve ahora es esto».' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en el problema que quieres consultar.', durationSec: 30, kind: 'breath' },
        { title: 'La pregunta', instruction: 'Escribe una sola pregunta concreta. Por ejemplo: «¿Cómo negocio un plan de pagos?».', durationSec: 60, kind: 'reflection' },
        { title: 'A quién', instruction: 'Piensa quién sabe de esto por experiencia o por oficio. Escribe uno o dos nombres.', durationSec: 45, kind: 'reflection' },
        { title: 'El contexto', instruction: 'Anota en tres frases lo que esa persona necesita saber. Qué pasa, qué probaste y qué te preocupa.', durationSec: 75, kind: 'reflection' },
        { title: 'Escuchar', instruction: 'Cuando hables, escucha sin defenderte. Anota lo que te dice, aunque no estés de acuerdo.', durationSec: 40, kind: 'instruction' },
        { title: 'Agradecer', instruction: 'Agradece y cuéntale después qué hiciste. Eso cuida el vínculo.', durationSec: 30, kind: 'instruction' },
        { title: 'Decidir tú', instruction: 'Mira lo que te dijeron y elige qué tomar. La decisión sigue siendo tuya.', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'consejo-de-amigo',
      title: 'Si se lo pasara a un amigo',
      family: 'deconstructive',
      skills: ['attention', 'compassion'],
      summary: 'Mirar tu problema como si le pasara a una persona querida y darte el consejo que le darías a ella.',
      mechanism: 'Tomar distancia de uno mismo baja la emoción y deja ver más opciones. Con los problemas ajenos pensamos con más calma.',
      evidenceLevel: 'preliminar',
      evidence: [GROSSMANN_2014, KROSS_2014],
      howItWorks: [
        'Muchas personas dan buenos consejos a otros y se traban con sus propios problemas. Igor Grossmann y Ethan Kross encontraron que razonamos con más sabiduría sobre los problemas ajenos. Al imaginar el propio como si fuera de otro, esa diferencia desaparece (Grossmann y Kross, 2014).',
        'Hablarte por tu nombre o en segunda persona también ayuda a tomar distancia y bajar la angustia (Kross y otros, 2014).',
        'No se trata de no sentir. Se trata de mirar el problema desde un poco más lejos.',
      ],
      tips: [
        'Piensa en alguien concreto que quieras bien.',
        'Escribe el consejo con tu nombre: «Ana, lo que yo haría es…».',
        'Si te sale un consejo duro, pregúntate si se lo dirías así a esa persona.',
      ],
      obstacles: [
        { q: 'A mí no me sirve lo que le diría a otro.', a: 'Puede ser. Igual mira si el consejo tiene una parte que sí podrías probar.' },
        { q: 'Me cuesta salir de mi cabeza.', a: 'Prueba a escribir el problema en tercera persona: «Ella está preocupada porque…». Eso ya da algo de distancia.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Nota cómo está tu cuerpo.', durationSec: 30, kind: 'breath' },
        { title: 'Contarlo en tercera persona', instruction: 'Escribe el problema como si le pasara a otra persona. Usa tu nombre: «Juan tiene que decidir…».', durationSec: 75, kind: 'reflection' },
        { title: 'Una persona querida', instruction: 'Ahora imagina que es un amigo o una amiga quien te cuenta esto. Míralo con cariño.', durationSec: 40, kind: 'reflection' },
        { title: 'Lo que ves desde afuera', instruction: '¿Qué ves desde afuera que quien está adentro no ve? Anota una o dos cosas.', durationSec: 60, kind: 'reflection' },
        { title: 'El consejo', instruction: 'Escribe el consejo que le darías. Que sea amable y concreto.', durationSec: 75, kind: 'reflection' },
        { title: 'Volver a ti', instruction: 'Lee el consejo como si fuera para ti. ¿Qué parte puedes probar esta semana?', durationSec: 45, kind: 'reflection' },
      ],
    },
  ],

  // ================================================================== fichas
  meta: {
    'ola-de-duelo': { level: 'iniciacion', approaches: ['mindfulness', 'cft'], module: 'duelo' },
    'ayuda-en-el-duelo': { level: 'iniciacion', approaches: ['interpersonal'], module: 'duelo' },
    'quien-soy-despues-del-cambio': {
      level: 'intermedio',
      approaches: ['interpersonal', 'act'],
      module: 'etapas',
      prerequisites: ['oscilar-perdida-restauracion'],
    },
    'pasos-de-diez-minutos': { level: 'iniciacion', approaches: ['tcc'], module: 'problemas' },
    'pedir-consejo': { level: 'intermedio', approaches: ['tcc', 'interpersonal'], module: 'problemas', prerequisites: ['resolucion-problemas'] },
    'consejo-de-amigo': { level: 'intermedio', approaches: ['tcc', 'cft'], module: 'problemas' },
  },

  articles: [],
  programs: [],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-ola-de-duelo',
      title: 'Las olas del duelo',
      subtitle: 'Por qué el dolor vuelve de golpe y qué hacer.',
      slides: [
        { heading: 'Vuelve de golpe', text: 'Una canción, un olor o una fecha pueden traer el dolor de nuevo. Puede pasar meses o años después.' },
        { heading: 'No es ir para atrás', text: 'Estas olas son parte del duelo. No quieren decir que estás peor ni que hiciste algo mal.' },
        { heading: 'Suben y bajan', text: 'Suelen ser fuertes y breves. Si no peleas con ellas, pasan antes.' },
        { heading: 'Qué hacer', text: 'Nombra la ola. Apoya los pies. Respira despacio. Después elige un paso chico para seguir.' },
        { heading: 'Si te desborda', text: 'Si el dolor es muy fuerte o piensas en morir, usa el botón Ayuda. Puedes llamar al 135 o al 911.' },
      ],
      related: { practices: ['ola-de-duelo'] },
      references: [RANDO_1993, STROEBE_1999],
    },
    {
      id: 'pildora-ayuda-en-el-duelo',
      title: '«Si necesitas algo, avísame»',
      subtitle: 'Cómo pedir y aceptar ayuda en el duelo.',
      slides: [
        { heading: 'Quieren ayudar', text: 'Mucha gente quiere ayudar después de una pérdida. Pero no sabe qué hacer ni qué decir.' },
        { heading: 'Un pedido concreto', text: 'Ten a mano una lista: una comida, una compra, un trámite, una caminata. Cuando ofrezcan, elige algo.' },
        { heading: 'Dos tipos de ayuda', text: 'Hay ayuda para hacer cosas y ayuda para estar contigo. Las dos valen.' },
        { heading: 'Lo que no ayuda', text: 'Puedes decir qué no te sirve. Por ejemplo, que no te apuren ni te den consejos.' },
        { heading: 'Después de un tiempo', text: 'A las pocas semanas la gente pregunta menos. Si sigues mal, escribe tú. No estás molestando.' },
      ],
      related: { practices: ['ayuda-en-el-duelo'] },
      references: [STROEBE_2005, WORDEN_2018],
    },
    {
      id: 'pildora-despues-del-cambio',
      title: 'Cuando cambia tu lugar',
      subtitle: 'Jubilación, mudanza o fin de una etapa.',
      slides: [
        { heading: 'También es una pérdida', text: 'Al dejar un trabajo o una ciudad pierdes rutinas, personas y una forma de presentarte.' },
        { heading: 'Aunque sea bueno', text: 'Puedes alegrarte por el cambio y aun así extrañar. Las dos cosas pueden ir juntas.' },
        { heading: 'El tiempo del medio', text: 'Entre lo que terminó y lo que empieza hay un tiempo confuso. Es parte del cambio, no un error tuyo.' },
        { heading: 'Lo que sigue contigo', text: 'Tus valores y lo que sabes hacer no se quedan atrás. Puedes usarlos en tu vida nueva.' },
        { heading: 'Probar un rol', text: 'Elige algo chico para probar: un curso, un grupo, una tarea de ayuda. Es un ensayo, no para siempre.' },
        { heading: 'Cuándo consultar', text: 'Si llevas más de dos semanas sin ganas de nada, consulta. La Línea 0800-999-0091 te orienta.' },
      ],
      related: { practices: ['quien-soy-despues-del-cambio'] },
      references: [WEISSMAN_2000, BRIDGES_1980],
    },
    {
      id: 'pildora-pasos-de-diez',
      title: 'Pasos de diez minutos',
      subtitle: 'Cómo achicar un problema que abruma.',
      slides: [
        { heading: 'Un bloque enorme', text: 'Un problema grande parece un bloque. No sabes por dónde empezar y lo dejas para mañana.' },
        { heading: 'Pártelo', text: 'Escribe los pasos. Si uno lleva más de diez minutos, pártelo otra vez.' },
        { heading: 'Empieza con un verbo', text: 'Llamar, buscar, escribir, pedir. Un paso con verbo se sabe cómo hacer.' },
        { heading: 'Metas cercanas', text: 'Las metas chicas y cercanas dan logros rápidos. Cada logro suma confianza para el siguiente.' },
        { heading: 'Ponle hora', text: 'Elige el primer paso y decide cuándo y dónde lo harás. Así es más fácil cumplir.' },
      ],
      related: { practices: ['pasos-de-diez-minutos'] },
      references: [BANDURA_1981, GOLLWITZER_2006],
    },
    {
      id: 'pildora-pedir-consejo',
      title: 'Pedir consejo sirve',
      subtitle: 'Cómo preguntar para que la respuesta te ayude.',
      slides: [
        { heading: 'No es debilidad', text: 'Mucha gente no pide consejo por miedo a parecer incapaz. Los estudios muestran que suele pasar lo contrario.' },
        { heading: 'A quién', text: 'Busca a alguien que sepa del tema por experiencia o por oficio, no solo a quien te quiere.' },
        { heading: 'Una pregunta clara', text: 'Haz una sola pregunta concreta. Cuenta lo que pasa, lo que probaste y lo que te preocupa.' },
        { heading: 'Escuchar de verdad', text: 'Solemos dar poco peso a lo que nos dicen. Anota el consejo antes de discutirlo.' },
        { heading: 'Decides tú', text: 'Agradece y elige qué tomar. La decisión sigue siendo tuya.' },
      ],
      related: { practices: ['pedir-consejo'] },
      references: [BROOKS_2015, BONACCIO_2006],
    },
    {
      id: 'pildora-consejo-de-amigo',
      title: 'Míralo como si fuera de otro',
      subtitle: 'Tomar distancia para pensar mejor.',
      slides: [
        { heading: 'Buenos consejos', text: 'Solemos dar buenos consejos a otros. Con nuestros problemas nos trabamos más.' },
        { heading: 'Un poco de distancia', text: 'Pensar el problema como si fuera de otra persona baja la emoción. Así se ven más salidas.' },
        { heading: 'Usa tu nombre', text: 'Escribe el problema con tu nombre: «Laura tiene que decidir…». Ya eso da algo de distancia.' },
        { heading: 'El consejo', text: 'Imagina que te lo cuenta alguien que quieres. ¿Qué le dirías? Escríbelo con cariño.' },
        { heading: 'Volver a ti', text: 'Lee el consejo como si fuera para ti. Elige una parte para probar esta semana.' },
      ],
      related: { practices: ['consejo-de-amigo'] },
      references: [GROSSMANN_2014, KROSS_2014],
    },
  ],
};
