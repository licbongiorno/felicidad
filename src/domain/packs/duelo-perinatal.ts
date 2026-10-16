import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Duelo perinatal»: pérdida de embarazo, muerte perinatal e infertilidad.
 *  - duelo no reconocido (Doka): validar la pérdida aunque haya sido temprana;
 *  - rituales y recuerdos, sólo si se desean;
 *  - diferencias de duelo en la pareja;
 *  - volver a intentar o no; embarazo después de una pérdida y ansiedad;
 *  - infertilidad y tratamientos: carga emocional, ciclo de esperanza y desilusión,
 *    qué contar y a quién (Greil y colaboradores; Boivin y colaboradores);
 *  - qué no ayuda y qué sí ayuda decir (para familiares y amistades).
 *
 * Reglas del paquete: lenguaje inclusivo de parejas de cualquier género y de quien gesta;
 * no se juzga ninguna decisión, incluida la interrupción del embarazo, que se menciona como una
 * situación que puede traer duelo, o no. No hay indicaciones médicas. Señales para consultar:
 * depresión, ansiedad intensa o ideas de morir (135, 0800-999-0091, 911).
 */

const DOKA_1989: Reference = { citation: 'Doka, K. J. (Ed.) (1989). Disenfranchised grief: Recognizing hidden sorrow. Lexington Books.' };
const FARREN_2016: Reference = {
  citation:
    'Farren, J., Jalmbrant, M., Ameye, L., Joash, K., Mitchell-Jones, N., Tapp, S., Timmerman, D., & Bourne, T. (2016). Post-traumatic stress, anxiety and depression following miscarriage or ectopic pregnancy: A prospective cohort study. BMJ Open, 6(11), e011864.',
};
const KERSTING_2012: Reference = {
  citation: 'Kersting, A., & Wagner, B. (2012). Complicated grief after perinatal loss. Dialogues in Clinical Neuroscience, 14(2), 187–194.',
};
const GREIL_2010: Reference = {
  citation: 'Greil, A. L., Slauson-Blevins, K., & McQuillan, J. (2010). The experience of infertility: A review of recent literature. Sociology of Health & Illness, 32(1), 140–162.',
};
const BOIVIN_2011: Reference = {
  citation:
    'Boivin, J., Griffiths, E., & Venetis, C. A. (2011). Emotional distress in infertile women and failure of assisted reproductive technologies: Meta-analysis of prospective psychosocial studies. BMJ, 342, d223.',
};

/** Aviso común: señales para consultar. */
const CONSULTAR =
  'Si la tristeza no se va, si la angustia o el miedo no te dejan funcionar, o si piensas en morir, consulta con un profesional. Si tienes ideas de hacerte daño, llama al 135 o al 0800-999-0091. Si hay peligro inmediato, llama al 911.';

export const DUELO_PERINATAL_PACK: ContentPack = {
  id: 'duelo-perinatal',

  // ================================================================== prácticas
  practices: [
    {
      id: 'nombrar-esta-perdida',
      title: 'Esta pérdida cuenta',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Darle un lugar a la pérdida de un embarazo o de un bebé, aunque haya sido temprana o los demás no la vean.',
      mechanism: 'Cuando el entorno no reconoce una pérdida, el dolor queda sin lugar. Nombrarla y validarla baja la soledad y la culpa.',
      evidenceLevel: 'moderada',
      evidence: [DOKA_1989, FARREN_2016],
      howItWorks: [
        'Kenneth Doka llamó duelo no reconocido al que la sociedad no ve o no valida. La pérdida de un embarazo es un ejemplo frecuente: a veces nadie sabía, no hubo despedida y otros esperan que sigas como si nada (Doka, 1989).',
        'Pero el dolor puede ser grande, aunque la pérdida haya sido temprana. Un estudio que siguió a mujeres tras una pérdida temprana encontró síntomas de estrés postraumático, ansiedad y depresión en muchas de ellas. En la mayoría bajaron con los meses (Farren y colaboradores, 2016).',
        'No hay una forma correcta de sentir. Algunas personas sienten un dolor enorme, otras alivio, otras poco. También quien no gestó puede estar de duelo. Todo eso es válido.',
      ],
      tips: [
        'Puedes nombrar a tu bebé o no. Las dos cosas están bien.',
        'No tienes que justificar tu dolor por las semanas que tenía el embarazo.',
        'Si alguien minimiza tu pérdida, no es un dato sobre ti.',
      ],
      obstacles: [
        { q: 'Fue muy temprano. Siento que exagero.', a: 'El dolor no se mide en semanas. Se mide en lo que esperabas, lo que imaginaste y lo que perdiste. Tiene sentido que duela.' },
        { q: 'Siento culpa, como si hubiera hecho algo mal.', a: 'La culpa es muy común después de una pérdida. Casi siempre no hubo nada que pudieras hacer. Si la culpa no se va, habla con tu equipo de salud.' },
      ],
      cautions: CONSULTAR,
      steps: [
        { title: 'Llegar', instruction: 'Busca un lugar tranquilo. Pon una mano en el pecho o en la panza, donde te dé calma.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que pasó', instruction: 'Escribe con tus palabras lo que pasó. Puedes ser breve. Nadie más va a leerlo.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que esperabas', instruction: 'Escribe lo que imaginaste o esperabas. Un nombre, una fecha, una escena.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que sientes', instruction: 'Nombra lo que sientes hoy. Tristeza, enojo, vacío, alivio, culpa. Todo puede estar.', durationSec: 45, kind: 'reflection' },
        { title: 'Validar', instruction: 'Dite despacio: «Esto fue una pérdida. Tiene sentido que me duela».', durationSec: 30, kind: 'breath' },
        { title: 'Compañía', instruction: 'Piensa en una persona que pueda escucharte sin minimizar. Anota su nombre.', durationSec: 40, kind: 'reflection' },
      ],
    },
    {
      id: 'ritual-perdida-perinatal',
      title: 'Un ritual, si lo deseas',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Elegir, sólo si lo deseas, un ritual o un recuerdo para tu bebé o tu embarazo: una carta, un objeto, una fecha, una planta.',
      mechanism: 'Los rituales dan forma a una pérdida que no tuvo despedida. Elegirlo tú, a tu ritmo, lo vuelve un acto de cuidado.',
      evidenceLevel: 'preliminar',
      evidence: [DOKA_1989, KERSTING_2012],
      howItWorks: [
        'Muchas pérdidas perinatales no tienen ritual. No hay velorio ni lugar donde ir. Doka señaló que la falta de rituales es parte de lo que hace que un duelo no se reconozca (Doka, 1989).',
        'Para algunas familias, un ritual o un recuerdo ayuda a darle un lugar a la pérdida. Para otras, no. No hay estudios grandes que digan cuál es mejor. Lo importante es que sea una elección tuya, sin presión (Kersting y Wagner, 2012).',
      ],
      tips: [
        'Puede ser algo íntimo, sólo para ti o para la pareja.',
        'Puedes hacerlo meses o años después. No hay apuro.',
        'Si hoy no quieres ningún ritual, también está bien.',
      ],
      obstacles: [{ q: 'No tengo ecografías ni nada que guardar.', a: 'El recuerdo no necesita objetos. Puede ser una carta, una fecha que marques en el calendario o una planta.' }],
      cautions: CONSULTAR,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Hoy sólo exploras ideas. No tienes que decidir nada.', durationSec: 30, kind: 'breath' },
        { title: '¿Lo deseas?', instruction: 'Pregúntate con honestidad si quieres un ritual. Si la respuesta es no, puedes cerrar aquí.', durationSec: 30, kind: 'reflection' },
        { title: 'Ideas', instruction: 'Anota ideas que te resuenen. Una carta, una vela, un árbol, una caja de recuerdos, un nombre.', durationSec: 60, kind: 'reflection' },
        { title: 'Con quién', instruction: '¿Lo harías a solas, con tu pareja o con alguien más? Anótalo.', durationSec: 40, kind: 'reflection' },
        { title: 'Cuándo', instruction: 'Elige un momento posible. Puede ser una fecha que te importe, o cualquier día tranquilo.', durationSec: 40, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho. Dite: «Le doy un lugar a lo que perdí».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'dos-maneras-de-doler',
      title: 'Dos maneras de doler',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Hablar en pareja de cómo vive cada uno la pérdida, sin pedir que el otro sienta igual.',
      mechanism: 'En una pareja, el duelo suele tener ritmos distintos. Entender esas diferencias evita leerlas como falta de amor y protege el vínculo.',
      evidenceLevel: 'preliminar',
      evidence: [KERSTING_2012, DOKA_1989],
      howItWorks: [
        'Tras una pérdida perinatal, cada integrante de la pareja puede vivirla distinto. Quien gestó pasó también por el cuerpo. Quien acompañó a veces siente que su dolor no cuenta, o que tiene que ser el fuerte (Kersting y Wagner, 2012).',
        'Una persona quiere hablar y otra prefiere hacer cosas. Una llora seguido y otra casi nada. Eso no mide cuánto quiere cada uno. Ponerlo en palabras ayuda a no sentirse solos dentro de la pareja.',
      ],
      tips: [
        'Hablen en un momento tranquilo, no en medio de una discusión.',
        'Escuchen sin corregir: «Así lo vivo yo» no necesita respuesta.',
        'Pueden pedir cosas distintas y acordar un poco de cada una.',
      ],
      obstacles: [{ q: 'Mi pareja no quiere hablar del tema.', a: 'Puedes decir lo que necesitas sin forzarla. Por ejemplo: «No hace falta que hables. ¿Me escuchas diez minutos?». Si siguen muy lejos, una consulta de pareja puede ayudar.' }],
      cautions: CONSULTAR,
      steps: [
        { title: 'Llegar', instruction: 'Siéntense cerca. Respiren despacio tres veces, sin hablar.', durationSec: 30, kind: 'breath' },
        { title: 'Cómo lo vivo', instruction: 'Cada uno escribe cómo vive la pérdida hoy. Qué siente y qué hace con eso.', durationSec: 60, kind: 'reflection' },
        { title: 'Escuchar', instruction: 'Lean por turnos. Quien escucha no corrige ni aconseja. Sólo dice: «Gracias por contarme».', durationSec: 60, kind: 'instruction' },
        { title: 'Lo distinto', instruction: 'Nombren una diferencia sin juzgarla. Por ejemplo: «Tú quieres hablar y yo necesito hacer cosas».', durationSec: 45, kind: 'reflection' },
        { title: 'Un pedido', instruction: 'Cada uno pide algo concreto. Por ejemplo: «Que me abraces cuando lloro» o «Que salgamos a caminar».', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Tómense de la mano un momento. Recuerden que están del mismo lado.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'embarazo-despues-de-una-perdida',
      title: 'Un embarazo después de una pérdida',
      family: 'attentional',
      skills: ['attention', 'compassion'],
      summary: 'Acompañar el miedo de un nuevo embarazo después de una pérdida: notar la ansiedad, volver al presente y tratarte con amabilidad.',
      mechanism: 'Tras una pérdida, el cuerpo y la mente quedan en alerta. Notar el miedo sin pelear con él y volver al presente baja su fuerza.',
      evidenceLevel: 'preliminar',
      evidence: [FARREN_2016, KERSTING_2012],
      howItWorks: [
        'Volver a estar embarazada, o que tu pareja lo esté, después de una pérdida puede traer alegría y miedo a la vez. Es común contar los días hasta cada control, revisar el cuerpo todo el tiempo o no animarse a ilusionarse (Kersting y Wagner, 2012).',
        'La ansiedad tras una pérdida es frecuente (Farren y colaboradores, 2016). Esta práctica no la quita, pero te ayuda a notarla y a volver al momento presente. Si el miedo no te deja vivir, habla con tu equipo de salud.',
      ],
      tips: [
        'Puedes ilusionarte de a poco. No hay una forma correcta.',
        'Cuéntale a tu equipo de salud lo que pasó antes. Pide que lo tengan en cuenta.',
        'Este embarazo no borra la pérdida anterior. Las dos cosas pueden estar.',
      ],
      obstacles: [{ q: 'Me da miedo encariñarme.', a: 'Es una forma de protegerte, y es muy común. No tienes que forzarte. Puedes ir dándole lugar de a poco.' }],
      cautions: 'Esta práctica no reemplaza los controles. Ante dolor, sangrado u otra señal física que te preocupe, consulta a tu equipo de salud o a la guardia. Si la ansiedad no te deja funcionar o piensas en morir, consulta con un profesional. Puedes llamar al 135 o al 0800-999-0091.',
      steps: [
        { title: 'Llegar', instruction: 'Siéntate. Apoya los pies en el suelo. Respira despacio.', durationSec: 30, kind: 'breath' },
        { title: 'Notar', instruction: 'Nota dónde sientes el miedo en el cuerpo. El pecho, la panza, la garganta.', durationSec: 40, kind: 'instruction' },
        { title: 'Nombrar', instruction: 'Dite: «Esto es miedo. Tiene sentido, por lo que pasé».', durationSec: 30, kind: 'reflection' },
        { title: 'Respirar', instruction: 'Respira despacio. Suelta el aire más largo de lo que entra. Cinco veces.', durationSec: 60, kind: 'breath' },
        { title: 'Aquí y ahora', instruction: 'Nombra tres cosas que ves y dos que oyes. Este es el momento presente.', durationSec: 45, kind: 'instruction' },
        { title: 'Amabilidad', instruction: 'Pon una mano donde te dé calma. Dite: «Hoy estoy aquí. Me acompaño».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'entre-la-esperanza-y-la-espera',
      title: 'Entre la esperanza y la espera',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Para quien atraviesa infertilidad o tratamientos: cuidar los días de espera, darle lugar a la desilusión y decidir qué contar y a quién.',
      mechanism: 'Los tratamientos traen un ciclo de esperanza y desilusión que agota. Planear la espera, nombrar la pérdida de cada intento y elegir con quién hablar bajan esa carga.',
      evidenceLevel: 'moderada',
      evidence: [GREIL_2010, BOIVIN_2011],
      howItWorks: [
        'La infertilidad suele vivirse como una crisis. Toca la identidad, la pareja, el cuerpo, el trabajo y la plata. Muchas personas sienten aislamiento, vergüenza o duelo, y estas vivencias pueden ser distintas en cada integrante de la pareja (Greil y colaboradores, 2010).',
        'Cada intento trae esperanza y, si no funciona, desilusión. Ese ciclo cansa mucho. Cada intento que no funciona puede ser también una pérdida.',
        'Un mito común es que el estrés hace fracasar el tratamiento. Un metaanálisis no encontró que el malestar emocional previo empeore los resultados (Boivin y colaboradores, 2011). Si un intento no funciona, no es porque «no te relajaste».',
      ],
      tips: [
        'Decidan juntos qué contar, a quién y cuándo. Pueden cambiar de idea.',
        'Prepara una frase corta para quien pregunte de más: «Prefiero no hablar de eso hoy».',
        'Planea algo amable para los días de espera y para el día del resultado.',
      ],
      obstacles: [{ q: 'Siento que mi vida gira sólo alrededor del tratamiento.', a: 'Es muy común. Prueba elegir una cosa que no tenga que ver con el tratamiento y protegerla, como una salida o un hobby.' }],
      cautions: CONSULTAR,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Este rato es para ti, no para el tratamiento.', durationSec: 30, kind: 'breath' },
        { title: 'Dónde estás', instruction: 'Escribe en qué parte del camino estás. Esperando, empezando, después de un resultado.', durationSec: 45, kind: 'reflection' },
        { title: 'La espera', instruction: 'Anota dos cosas amables para los días de espera. Por ejemplo, una película o una caminata.', durationSec: 50, kind: 'reflection' },
        { title: 'Si no funciona', instruction: 'Escribe qué te ayudaría si el resultado no es el que esperas. Quién, dónde, qué.', durationSec: 50, kind: 'reflection' },
        { title: 'Qué contar', instruction: 'Haz dos listas. A quién quieres contarle y a quién no. Escribe una frase para cortar preguntas.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que sigue siendo tuyo', instruction: 'Anota una cosa de tu vida que quieres cuidar, más allá del tratamiento.', durationSec: 40, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho. Dite: «Esto es difícil. Hago lo que puedo».', durationSec: 30, kind: 'breath' },
      ],
    },
  ],

  meta: {
    'nombrar-esta-perdida': { level: 'iniciacion', approaches: ['cft', 'escritura'], module: 'duelo' },
    'ritual-perdida-perinatal': { level: 'iniciacion', approaches: ['narrativa', 'interpersonal'], module: 'duelo', prerequisites: ['ritual-de-recuerdo'] },
    'dos-maneras-de-doler': { level: 'intermedio', approaches: ['focalizada-emocion', 'sistemica'], module: 'duelo', prerequisites: ['pausa-autocompasion'] },
    'embarazo-despues-de-una-perdida': { level: 'iniciacion', approaches: ['mindfulness', 'cft'], module: 'etapas' },
    'entre-la-esperanza-y-la-espera': { level: 'intermedio', approaches: ['act', 'cft'], module: 'etapas', prerequisites: ['pausa-autocompasion'] },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'perdida-perinatal-e-infertilidad',
      title: 'Pérdida de embarazo, muerte perinatal e infertilidad',
      subtitle: 'Un duelo que no siempre se ve: cómo atravesarlo, en pareja y con la familia.',
      category: 'Etapas de la vida',
      readingMin: 10,
      keyPoints: [
        'La pérdida de un embarazo o de un bebé es un duelo real, aunque haya sido temprana.',
        'Cada persona y cada integrante de la pareja lo vive a su manera.',
        'Los rituales y recuerdos ayudan a algunas familias. Son una elección, no una obligación.',
        'La infertilidad trae un ciclo de esperanza y desilusión que agota. El estrés no hace fracasar el tratamiento.',
        'Ante depresión, ansiedad intensa o ideas de morir: 135, 0800-999-0091 o 911.',
      ],
      sections: [
        {
          heading: 'Un duelo que no siempre se ve',
          paragraphs: [
            'Kenneth Doka llamó duelo no reconocido al que el entorno no ve o no valida (Doka, 1989). La pérdida de un embarazo, la muerte de un bebé al nacer o un tratamiento que no funciona suelen quedar en ese lugar. A veces nadie sabía, no hubo despedida y se espera que sigas como si nada.',
            'El dolor no se mide en semanas. Un estudio que siguió a mujeres después de una pérdida temprana encontró síntomas de estrés postraumático, ansiedad y depresión en muchas de ellas. En la mayoría bajaron con los meses, pero no en todas (Farren y colaboradores, 2016).',
            'También puede haber duelo después de interrumpir un embarazo, por la razón que sea. O puede no haberlo. Alivio, tristeza, las dos cosas o ninguna: todas son respuestas posibles y merecen respeto.',
          ],
        },
        {
          heading: 'Rituales y recuerdos',
          paragraphs: [
            'Muchas pérdidas perinatales no tienen ritual. Para algunas familias ayuda crear uno: una carta, una planta, un nombre, una caja con recuerdos, una fecha. Para otras, no. No hay una forma mejor que otra (Kersting y Wagner, 2012).',
            'Lo importante es que sea una elección tuya y a tu ritmo. Puede ser enseguida o años después.',
          ],
        },
        {
          heading: 'El duelo en la pareja',
          paragraphs: [
            'Cada integrante de la pareja puede vivir la pérdida distinto. Quien gestó la vivió también en el cuerpo. Quien acompañó a veces siente que su dolor no cuenta o que tiene que sostener al otro. En parejas del mismo género, a veces el entorno reconoce todavía menos el duelo de quien no gestó.',
            'Una persona quiere hablar y otra prefiere hacer cosas. Eso no mide el amor. Hablar de las diferencias, sin pedir que el otro sienta igual, protege el vínculo.',
          ],
        },
        {
          heading: 'Volver a intentar, o no',
          paragraphs: [
            'No hay un momento correcto para volver a intentar, ni obligación de hacerlo. Es una decisión personal y de la pareja, con la información del equipo de salud.',
            'Un nuevo embarazo después de una pérdida suele traer alegría y miedo a la vez. Es común no animarse a ilusionarse o contar los días hasta cada control. Contarle al equipo de salud lo que pasó antes ayuda a que te acompañe mejor (Kersting y Wagner, 2012).',
          ],
        },
        {
          heading: 'Infertilidad y tratamientos',
          paragraphs: [
            'La infertilidad toca la identidad, la pareja, el cuerpo, el trabajo y la plata. Muchas personas sienten aislamiento, vergüenza o duelo, y cada integrante de la pareja puede vivirlo distinto (Greil y colaboradores, 2010).',
            'Cada intento trae esperanza y, si no funciona, desilusión. Ese ciclo agota. Ayuda decidir qué contar y a quién, y planear algo amable para los días de espera. Un metaanálisis no encontró que el malestar emocional previo empeore los resultados del tratamiento (Boivin y colaboradores, 2011). No es tu culpa si no funciona.',
          ],
        },
        {
          heading: 'Para familiares y amistades',
          paragraphs: [
            'Hay frases que, aunque se dicen con cariño, duelen. Por ejemplo: «Por algo pasan las cosas», «Ya vas a tener otro», «Al menos fue temprano» o «Relájate y va a llegar». Minimizan la pérdida o cargan culpa.',
            'Lo que sí suele ayudar es más simple: «Lo siento mucho», «Estoy aquí», «¿Quieres contarme?». Nombrar al bebé si la familia lo nombró, recordar las fechas importantes y ofrecer ayuda concreta, como llevar comida o hacer un trámite.',
          ],
        },
        {
          heading: 'Cuándo pedir ayuda',
          paragraphs: [
            'Consulta con un profesional si la tristeza no se va, si dejas de disfrutar casi todo, si la ansiedad o los recuerdos de lo que pasó no te dejan funcionar, o si la relación de pareja se resiente mucho. Algunas personas desarrollan un duelo complicado y hay tratamientos que ayudan (Kersting y Wagner, 2012).',
            'Si piensas en morir, pide ayuda hoy. Llama al 135 o al 0800-999-0091. Si hay peligro inmediato, llama al 911.',
          ],
        },
      ],
      caveat: {
        title: 'Lo que esta sección no hace',
        body: 'Aquí no hay indicaciones médicas sobre la pérdida, los tratamientos de fertilidad ni un nuevo embarazo: eso se habla con tu equipo de salud. Los rituales y las ideas para la pareja se apoyan en la experiencia clínica más que en ensayos. Ninguna decisión que tomes se juzga aquí.',
      },
      diagram: {
        title: 'El ciclo de los tratamientos',
        nodes: ['Esperanza', 'Tratamiento y espera', 'Resultado', 'Desilusión y duelo', 'Decidir si seguir'],
        caption: 'Planear la espera, nombrar cada pérdida y elegir con quién hablar alivian el ciclo.',
      },
      related: {
        practices: ['nombrar-esta-perdida', 'ritual-perdida-perinatal', 'dos-maneras-de-doler', 'embarazo-despues-de-una-perdida', 'entre-la-esperanza-y-la-espera', 'ritual-de-recuerdo', 'pausa-autocompasion'],
        articles: ['duelo-profundo', 'embarazo-y-posparto', 'duelo'],
      },
      references: [DOKA_1989, FARREN_2016, KERSTING_2012, GREIL_2010, BOIVIN_2011],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'un-duelo-que-tambien-cuenta',
      title: 'Un duelo que también cuenta',
      subtitle: 'Tres semanas para atravesar una pérdida perinatal o la infertilidad',
      description:
        'Para quien perdió un embarazo o un bebé, o atraviesa la infertilidad, y también para su pareja. Le darás un lugar a la pérdida, hablarás de cómo la vive cada uno y cuidarás lo que viene, sea un nuevo intento o no. No reemplaza la ayuda profesional ni las indicaciones de tu equipo de salud.',
      basis: 'Doka (1989); Kersting y Wagner (2012); Greil y colaboradores (2010); Boivin y colaboradores (2011).',
      rhythm: 'Unos minutos, 3 o 4 días por semana, a tu ritmo. Puedes repetir cualquier semana.',
      weeks: [
        {
          title: 'Semana 1 · Esta pérdida cuenta',
          focus: 'Darle un lugar',
          description: 'Nombrarás lo que perdiste y te tratarás con amabilidad.',
          practiceIds: ['nombrar-esta-perdida', 'pausa-autocompasion'],
          articleIds: ['perdida-perinatal-e-infertilidad'],
          journalType: 'escritura-expresiva',
        },
        {
          title: 'Semana 2 · Recordar y compartir',
          focus: 'Rituales y pareja',
          description: 'Si lo deseas, pensarás un ritual. Y hablarán en pareja de cómo vive cada uno la pérdida.',
          practiceIds: ['ritual-perdida-perinatal', 'dos-maneras-de-doler'],
          articleIds: [],
          journalType: 'carta-compasiva',
        },
        {
          title: 'Semana 3 · Lo que viene',
          focus: 'Esperar con cuidado',
          description: 'Cuidarás la espera, sea un nuevo embarazo, un tratamiento o una pausa.',
          practiceIds: ['entre-la-esperanza-y-la-espera', 'embarazo-despues-de-una-perdida'],
          articleIds: [],
          journalType: 'valores',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-perdida-temprana',
      title: 'Aunque haya sido temprano',
      subtitle: 'La pérdida de un embarazo también es un duelo.',
      slides: [
        { heading: 'Un duelo real', text: 'Perder un embarazo duele, aunque haya sido temprano. El dolor no se mide en semanas.' },
        { heading: 'Que no se ve', text: 'A veces nadie sabía. No hubo despedida. Y otros esperan que sigas como si nada.' },
        { heading: 'Lo que sientes', text: 'Tristeza, enojo, vacío, culpa o alivio. No hay una forma correcta de sentir.' },
        { heading: 'También la pareja', text: 'Quien no gestó también puede estar de duelo. Su dolor también cuenta.' },
        { heading: 'Pedir ayuda', text: 'Si la tristeza o el miedo no se van, consulta. Si piensas en morir, llama al 135 o al 0800-999-0091.' },
      ],
      related: { practices: ['nombrar-esta-perdida'], articles: ['perdida-perinatal-e-infertilidad'] },
      references: [DOKA_1989, FARREN_2016],
    },
    {
      id: 'pildora-que-decir-ante-una-perdida',
      title: 'Qué decir, y qué no',
      subtitle: 'Para familiares y amistades de alguien que perdió un embarazo o un bebé.',
      slides: [
        { heading: 'Con cariño, pero duele', text: '«Por algo pasan las cosas». «Ya vas a tener otro». Se dicen con cariño, pero duelen.' },
        { heading: 'Tampoco', text: '«Al menos fue temprano». «Relájate y va a llegar». Achican la pérdida o dan culpa.' },
        { heading: 'Lo que sí', text: '«Lo siento mucho». «Estoy aquí». «¿Quieres contarme?». Eso alcanza.' },
        { heading: 'Nombrar', text: 'Si la familia le puso nombre al bebé, úsalo. Recuerda las fechas importantes.' },
        { heading: 'Ayuda concreta', text: 'Lleva comida, haz un trámite, acompaña a un control. Los gestos chicos ayudan.' },
      ],
      related: { articles: ['perdida-perinatal-e-infertilidad'] },
      references: [DOKA_1989],
    },
    {
      id: 'pildora-infertilidad',
      title: 'La montaña rusa de los tratamientos',
      subtitle: 'Esperanza, espera y desilusión.',
      slides: [
        { heading: 'Una carga grande', text: 'La infertilidad toca el cuerpo, la pareja, el trabajo y la plata. Es mucho.' },
        { heading: 'El ciclo', text: 'Cada intento trae esperanza. Si no funciona, llega la desilusión. Ese ciclo cansa.' },
        { heading: 'No es tu culpa', text: 'El estrés no hace fracasar el tratamiento. Si no funciona, no es porque no te relajaste.' },
        { heading: 'Qué contar', text: 'Tú decides qué contar y a quién. Puedes decir: «Prefiero no hablar de eso hoy».' },
        { heading: 'La espera', text: 'Planea algo amable para los días de espera. Y cuida algo de tu vida fuera del tratamiento.' },
      ],
      related: { practices: ['entre-la-esperanza-y-la-espera'], articles: ['perdida-perinatal-e-infertilidad'] },
      references: [GREIL_2010, BOIVIN_2011],
    },
    {
      id: 'pildora-embarazo-despues-de-perdida',
      title: 'Alegría y miedo a la vez',
      subtitle: 'Un nuevo embarazo después de una pérdida.',
      slides: [
        { heading: 'Las dos cosas', text: 'Un nuevo embarazo puede traer alegría y miedo juntos. Es muy común.' },
        { heading: 'En alerta', text: 'Contar los días hasta cada control. No animarse a ilusionarse. Tiene sentido.' },
        { heading: 'No borra', text: 'Este embarazo no borra la pérdida anterior. Puedes seguir extrañando.' },
        { heading: 'Contarlo', text: 'Cuéntale a tu equipo de salud lo que pasó antes. Así te acompaña mejor.' },
        { heading: 'Consultar', text: 'Si el miedo no te deja vivir, pide ayuda. Ante una señal física que te preocupe, ve a la guardia.' },
      ],
      related: { practices: ['embarazo-despues-de-una-perdida'], articles: ['perdida-perinatal-e-infertilidad', 'embarazo-y-posparto'] },
      references: [KERSTING_2012, FARREN_2016],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'duelo-no-reconocido', term: 'Duelo no reconocido', definition: 'Duelo que el entorno no ve o no valida, como la pérdida de un embarazo. Kenneth Doka lo describió. El dolor puede ser tan grande como en otros duelos.', articleId: 'perdida-perinatal-e-infertilidad', practiceId: 'nombrar-esta-perdida' },
    { id: 'perdida-perinatal', term: 'Pérdida perinatal', definition: 'La pérdida de un embarazo o la muerte de un bebé antes, durante o poco después del nacimiento.', articleId: 'perdida-perinatal-e-infertilidad' },
    { id: 'ciclo-esperanza-desilusion', term: 'Ciclo de esperanza y desilusión', definition: 'El ir y venir emocional de los tratamientos de fertilidad: ilusión en cada intento y desilusión si no funciona. Con el tiempo, agota.', practiceId: 'entre-la-esperanza-y-la-espera' },
    { id: 'bebe-arcoiris', term: 'Bebé arcoíris', definition: 'Nombre que muchas familias usan para un bebé que nace después de una pérdida. Como el arcoíris después de la tormenta.', practiceId: 'embarazo-despues-de-una-perdida' },
  ],
};
