import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Necesidades: autoestima y no recaer». Suma prácticas a dos necesidades que
 * tenían pocas, sin repetir lo que ya cubren:
 *  - autoestima: aceptar un elogio sin descontarlo (Burns; Marigold, Holmes y Ross),
 *    registro de datos positivos (Padesky) y revisar la regla «valgo si…» (Fennell);
 *  - no recaer: estilo de vida equilibrado, «debo» frente a «quiero» (Marlatt), la cadena de
 *    decisiones que parecen irrelevantes y sus «permisos», y una red de apoyo para el cambio
 *    (Litt y colaboradores; Kelly, Humphreys y Ferri). Surfear el impulso ya existe en la app
 *    («surfear-impulso»), por eso no se repite.
 *
 * Reglas de seguridad: nada reemplaza el tratamiento ni sugiere cambiar la medicación. Si la
 * autocrítica viene con ideas de hacerte daño, se remite al 135 y al 0800-999-0091. En
 * consumos se nombra la Línea 141 de SEDRONAR. No se proponen metas de consumo «controlado»:
 * esa decisión se toma con el equipo de salud.
 */

// ------------------------------------------------------------------ referencias
const BURNS_1980: Reference = { citation: 'Burns, D. D. (1980). Feeling good: The new mood therapy. William Morrow.' };
const MARIGOLD_2007: Reference = {
  citation:
    'Marigold, D. C., Holmes, J. G., & Ross, M. (2007). More than words: Reframing compliments from romantic partners fosters security in low self-esteem individuals. Journal of Personality and Social Psychology, 92(2), 232–248.',
};
const PADESKY_1994: Reference = {
  citation: 'Padesky, C. A. (1994). Schema change processes in cognitive therapy. Clinical Psychology & Psychotherapy, 1(5), 267–278.',
};
const FENNELL_1997: Reference = {
  citation: 'Fennell, M. J. V. (1997). Low self-esteem: A cognitive perspective. Behavioural and Cognitive Psychotherapy, 25(1), 1–26.',
};
const FENNELL_1999: Reference = {
  citation: 'Fennell, M. (1999). Overcoming low self-esteem: A self-help guide using cognitive behavioural techniques. Robinson.',
};
const KOLUBINSKI_2018: Reference = {
  citation:
    'Kolubinski, D. C., Frings, D., Nikčević, A. V., Lawrence, J. A., & Spada, M. M. (2018). A systematic review and meta-analysis of CBT interventions based on the Fennell model of low self-esteem. Psychiatry Research, 267, 296–305.',
  doi: '10.1016/j.psychres.2018.06.025',
};
const MARLATT_1985: Reference = {
  citation: 'Marlatt, G. A., & Gordon, J. R. (Eds.) (1985). Relapse prevention: Maintenance strategies in the treatment of addictive behaviors. Guilford Press.',
};
const LARIMER_1999: Reference = {
  citation: 'Larimer, M. E., Palmer, R. S., & Marlatt, G. A. (1999). Relapse prevention: An overview of Marlatt’s cognitive-behavioral model. Alcohol Research & Health, 23(2), 151–160.',
};
const WITKIEWITZ_2004: Reference = {
  citation: 'Witkiewitz, K., & Marlatt, G. A. (2004). Relapse prevention for alcohol and drug problems: That was Zen, this is Tao. American Psychologist, 59(4), 224–235.',
};
const LITT_2007: Reference = {
  citation:
    'Litt, M. D., Kadden, R. M., Kabela-Cormier, E., & Petry, N. (2007). Changing network support for drinking: Initial findings from the Network Support Project. Journal of Consulting and Clinical Psychology, 75(4), 542–555.',
};
const KELLY_2020: Reference = {
  citation: 'Kelly, J. F., Humphreys, K., & Ferri, M. (2020). Alcoholics Anonymous and other 12-step programs for alcohol use disorder. Cochrane Database of Systematic Reviews, 3, CD012880.',
};
const SEDRONAR: Reference = {
  citation: 'Secretaría de Políticas Integrales sobre Drogas de la Nación Argentina. (2024). Línea 141: atención y orientación sobre consumos. SEDRONAR.',
  note: 'Gratuita, anónima y las 24 horas en todo el país.',
};

// ------------------------------------------------------------------ avisos
/** Autoestima: cuándo esto no alcanza. */
const AVISO_AUTOESTIMA =
  'Si la autocrítica es constante, viene con una tristeza profunda o con ideas de hacerte daño, esta práctica no alcanza: consulta a un profesional. Si piensas en hacerte daño, llama al 135 o al 0800-999-0091. Si alguien te desvaloriza seguido, el problema no es tu autoestima: busca apoyo para protegerte.';

/** Recaídas: tratamiento, medicación y a quién llamar. */
const AVISO_RECAIDAS =
  'Esta práctica no reemplaza tu tratamiento. No cambies la medicación sin tu médico. Por consumos, llama a la Línea 141 de SEDRONAR, gratuita y las 24 horas. Si tienes ideas de hacerte daño, llama al 135 o al 0800-999-0091. Si hay peligro, al 911.';

export const NECESIDADES_AUTOESTIMA_PACK: ContentPack = {
  id: 'necesidades-autoestima-recaidas',

  // ================================================================== prácticas
  practices: [
    // ---------------------------------------------------------------- autoestima
    {
      id: 'aceptar-un-elogio',
      title: 'Recibir un elogio sin descontarlo',
      family: 'constructive',
      skills: ['attention', 'compassion'],
      summary: 'Una pausa breve para recibir un elogio reciente sin achicarlo, y quedarte con lo que dice de ti.',
      mechanism: 'Quien se valora poco suele descontar lo bueno («fue suerte», «lo dice por decir»). Frenar ese descuento y pensar qué significa el elogio ayuda a que lo positivo quede.',
      evidenceLevel: 'preliminar',
      evidence: [BURNS_1980, MARIGOLD_2007],
      howItWorks: [
        'David Burns describió una trampa del pensamiento que llamó «descalificar lo positivo». Llega algo bueno y la mente lo descuenta: «no es para tanto», «cualquiera lo hace», «lo dice porque es amable» (Burns, 1980).',
        'En unos experimentos con parejas, a las personas con autoestima baja se les pidió escribir por qué su pareja las había elogiado y qué significaba eso. Después se sintieron más seguras en la relación que quienes sólo describieron el elogio (Marigold y colaboradores, 2007).',
        'No se trata de creerte todo. Se trata de no tirar el dato a la basura antes de mirarlo.',
      ],
      tips: [
        'Para responder un elogio alcanza con «gracias». No hace falta explicar ni devolver otro.',
        'Si notas un «pero…» después del elogio, sólo nómbralo: «estoy descontando».',
        'Guarda los elogios que recibas en una nota del celular. Léela en un mal día.',
      ],
      obstacles: [
        { q: 'Siento que me están mintiendo.', a: 'Puede pasar. Pregúntate qué gana esa persona con mentirte. Casi siempre, nada. Prueba tratar el elogio como un dato más, no como una verdad total.' },
        { q: 'Me da vergüenza que me elogien.', a: 'Es muy común. Empieza por elogios chicos y por decir sólo «gracias». La incomodidad baja con la práctica.' },
      ],
      micro: true,
      steps: [
        { title: 'Un elogio', instruction: 'Recuerda algo bueno que te dijeron hace poco. Escríbelo tal como te lo dijeron.', durationSec: 30, kind: 'reflection' },
        { title: 'El descuento', instruction: '¿Qué te dijiste por dentro al escucharlo? Por ejemplo: «fue suerte» o «lo dice por quedar bien». Anótalo.', durationSec: 30, kind: 'reflection' },
        { title: 'Por qué lo dijo', instruction: '¿Qué viste o hiciste para que te lo dijera? Escribe un hecho concreto.', durationSec: 40, kind: 'reflection' },
        { title: 'Lo que dice de ti', instruction: 'Completa: «Esto muestra que puedo…» o «que soy alguien que…».', durationSec: 40, kind: 'reflection' },
        { title: 'Gracias', instruction: 'Respira despacio. Dite «gracias», como si recibieras un regalo, sin devolverlo.', durationSec: 20, kind: 'breath' },
      ],
    },
    {
      id: 'registro-de-datos-positivos',
      title: 'Mi registro de datos a favor',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Elegir una idea nueva y más justa sobre ti, y anotar cada día pequeños hechos que la apoyan, para corregir el filtro que sólo deja ver los fallos.',
      mechanism: 'Una creencia como «no valgo» filtra la información: lo que encaja se ve y lo que no, se olvida. Anotar a propósito los datos que no encajan, durante semanas, ayuda a que una idea nueva gane fuerza.',
      evidenceLevel: 'moderada',
      evidence: [PADESKY_1994, FENNELL_1997, KOLUBINSKI_2018],
      howItWorks: [
        'Christine Padesky propuso el registro de datos positivos. Se elige una idea nueva sobre uno mismo, como «soy aceptable tal como soy», y cada día se anotan hechos chicos que la apoyan (Padesky, 1994).',
        'La creencia vieja funciona como un prejuicio. Los fallos se ven enseguida y los aciertos pasan sin registrar. El registro hace lo contrario a propósito.',
        'Es parte de los tratamientos basados en el modelo de Melanie Fennell, que mejoran la autoestima según una revisión con metaanálisis (Kolubinski y colaboradores, 2018). El cambio es lento: piensa en semanas, no en días.',
      ],
      tips: [
        'Anota hechos chicos y concretos: «ayudé a mi compañera con la planilla».',
        'Vale todo lo que apoye la idea nueva, aunque parezca poco.',
        'Si aparece un «sí, pero…», anótalo aparte y vuelve al registro.',
        'Una vez por semana, relee todo y puntúa cuánto crees la idea nueva.',
      ],
      obstacles: [
        { q: 'No encuentro nada para anotar.', a: 'El filtro es fuerte al principio. Pregúntate qué diría alguien que te quiere. O busca cosas muy chicas: cumplir algo, cuidar a alguien, intentar algo difícil.' },
        { q: 'Lo que anoto me parece insignificante.', a: 'Así actúa la creencia vieja: achica lo bueno. Anótalo igual. El valor está en juntar muchos datos chicos.' },
      ],
      cautions: AVISO_AUTOESTIMA,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Ten a mano un cuaderno o una nota del celular.', durationSec: 30, kind: 'breath' },
        { title: 'La idea vieja', instruction: 'Escribe la idea dura que tienes sobre ti. Por ejemplo, «no valgo» o «no soy suficiente».', durationSec: 45, kind: 'reflection' },
        { title: 'La idea nueva', instruction: 'Escribe una idea más justa que te gustaría creer. No hace falta que sea muy positiva. Por ejemplo: «soy aceptable tal como soy».', durationSec: 60, kind: 'reflection' },
        { title: 'Cuánto la crees', instruction: 'Del cero al cien, ¿cuánto crees hoy la idea nueva? Anota el número.', durationSec: 30, kind: 'reflection' },
        { title: 'Los datos de hoy', instruction: 'Piensa en el día de hoy. Anota tres hechos chicos que apoyen la idea nueva.', durationSec: 75, kind: 'reflection' },
        { title: 'Sin descontar', instruction: 'Lee cada hecho. Si aparece un «sí, pero», déjalo pasar. El dato queda anotado igual.', durationSec: 40, kind: 'reflection' },
        { title: 'Cada día', instruction: 'Elige un momento fijo para sumar datos cada día. Una vez por semana, vuelve a puntuar la idea.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'mi-regla-valgo-si',
      title: 'Mi regla «valgo si…»',
      family: 'deconstructive',
      skills: ['attention', 'compassion'],
      summary: 'Descubrir una regla rígida que pone condiciones a tu valor, como «valgo si nunca fallo», y escribir una regla más flexible para probarla.',
      mechanism: 'Las reglas rígidas protegen de la idea «no valgo» mientras se cumplen. Cuando una situación las amenaza, la ansiedad y la autocrítica se disparan. Una regla más flexible deja de poner tu valor en juego cada día.',
      evidenceLevel: 'moderada',
      evidence: [FENNELL_1997, FENNELL_1999, KOLUBINSKI_2018],
      howItWorks: [
        'Melanie Fennell describió que la autoestima baja se apoya en reglas para vivir. Suenan así: «si no hago todo bien, no valgo», «tengo que agradar siempre», «si digo que no, me van a dejar» (Fennell, 1997).',
        'Mientras la regla se cumple, la persona se siente más o menos bien. Pero el valor queda siempre a prueba. Basta un error o una crítica para que vuelva la idea de no valer.',
        'Fennell propone ver de dónde viene la regla, qué te da y qué te cuesta. Luego se escribe una regla más flexible y se pone a prueba con pasos chicos (Fennell, 1999).',
      ],
      tips: [
        'Busca frases con «tengo que», «debería», «si no…, entonces…».',
        'La regla nueva suele empezar con «me gustaría» o «prefiero», y terminar con «y si no, sigo valiendo».',
        'No hace falta tirar la regla vieja. A veces sólo hace falta aflojarla.',
        'Para probarla, puedes usar «Experimento: lo suficientemente bien».',
      ],
      obstacles: [
        { q: 'Si aflojo la regla, voy a dejar de esforzarme.', a: 'Es un miedo común. La regla nueva no dice «no importa nada». Dice que puedes esforzarte sin poner tu valor en juego. Muchas personas rinden mejor así, con menos miedo.' },
        { q: 'Mirar de dónde viene la regla me trae recuerdos feos.', a: 'No hace falta entrar en detalles. Basta con nombrar de dónde la aprendiste. Si los recuerdos pesan mucho, es un tema para trabajar con un terapeuta.' },
      ],
      cautions: AVISO_AUTOESTIMA,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Piensa en una situación reciente en que te sentiste poco.', durationSec: 40, kind: 'breath' },
        { title: 'La regla', instruction: '¿Qué regla se rompió ahí? Complétala: «Valgo sólo si…» o «Si no…, entonces no valgo».', durationSec: 60, kind: 'reflection' },
        { title: 'De dónde viene', instruction: '¿Dónde aprendiste esa regla? En tu casa, en la escuela, en un trabajo. Nómbralo sin entrar en detalles.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que te da', instruction: 'Anota qué te da la regla. Por ejemplo, esforzarte, ser responsable o evitar críticas.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que te cuesta', instruction: 'Anota qué te cuesta. Por ejemplo, ansiedad, cansancio, no pedir ayuda o castigarte cuando fallas.', durationSec: 60, kind: 'reflection' },
        { title: 'Una regla nueva', instruction: 'Escribe una regla más flexible. Por ejemplo: «Me gusta hacer las cosas bien. Si fallo, sigo valiendo».', durationSec: 60, kind: 'reflection' },
        { title: 'Probarla', instruction: 'Elige un paso chico para actuar según la regla nueva esta semana. Anota qué esperas y, después, qué pasó.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho. Dite: «Mi valor no depende de cumplir esta regla».', durationSec: 30, kind: 'breath' },
      ],
    },

    // ---------------------------------------------------------------- no recaer
    {
      id: 'debo-y-quiero',
      title: 'Lo que debo y lo que quiero',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Mirar tu día común y ver cuánto es obligación y cuánto es gusto, para sumar momentos de disfrute sano que bajen el «me lo merezco».',
      mechanism: 'Una vida llena de obligaciones y sin gustos aumenta las ganas de compensar con algo inmediato. Equilibrar el «debo» con el «quiero» baja esa presión y protege del tropiezo.',
      evidenceLevel: 'preliminar',
      evidence: [MARLATT_1985, LARIMER_1999],
      howItWorks: [
        'Alan Marlatt observó que muchas recaídas empiezan en una vida desequilibrada. Si casi todo el día son obligaciones, crece la sensación de que «me debo algo». Esa idea abre la puerta al consumo o al hábito que querías dejar (Marlatt y Gordon, 1985).',
        'Por eso la prevención de recaídas no sólo se ocupa del riesgo. También propone un estilo de vida más equilibrado, con actividades que den placer o sentido y no hagan daño (Larimer y colaboradores, 1999).',
        'No se trata de llenar la agenda. A veces basta con un rato propio por día: caminar, cocinar algo rico, escuchar música o ver a alguien.',
      ],
      tips: [
        'Cuenta como «quiero» lo que te da placer o sentido, no lo que «deberías disfrutar».',
        'Elige gustos que no te acerquen al consumo ni al hábito que cuidas.',
        'Si piensas «me lo merezco», es una buena señal para darte un gusto sano.',
        'Revisa el equilibrio cuando tengas una semana muy cargada.',
      ],
      obstacles: [
        { q: 'No tengo tiempo para gustos.', a: 'Empieza por cinco o diez minutos. Un mate al sol o una canción también cuentan. El objetivo es que el día no sea sólo obligación.' },
        { q: 'Lo único que me gustaba era consumir.', a: 'Es muy común al principio. Prueba cosas nuevas sin esperar que te encanten. Si el vacío pesa mucho, habla con tu equipo o llama a la Línea 141.' },
      ],
      cautions: AVISO_RECAIDAS,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en un día común de tu semana.', durationSec: 30, kind: 'breath' },
        { title: 'Tu día', instruction: 'Anota lo que haces ese día, de la mañana a la noche. Trabajo, tareas, comidas, ratos libres.', durationSec: 75, kind: 'reflection' },
        { title: 'Debo o quiero', instruction: 'Al lado de cada cosa, pon una D si es obligación y una Q si la eliges por gusto.', durationSec: 60, kind: 'reflection' },
        { title: 'Mirar', instruction: '¿Cuántas D y cuántas Q hay? ¿En qué momento del día aparece el «me lo merezco»?', durationSec: 45, kind: 'reflection' },
        { title: 'Gustos sanos', instruction: 'Anota tres cosas que disfrutas y no te acercan al riesgo. Por ejemplo, caminar, cocinar o llamar a alguien.', durationSec: 60, kind: 'reflection' },
        { title: 'Un lugar', instruction: 'Elige uno y ponlo en tu día, cerca del momento más difícil. Anota cuándo.', durationSec: 40, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Cuidarte también es darte gustos que no te hacen daño.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'decisiones-que-parecen-irrelevantes',
      title: 'Las decisiones que parecen no importar',
      family: 'deconstructive',
      skills: ['attention', 'resilience'],
      summary: 'Rebobinar un tropiezo, o un casi tropiezo, para ver la cadena de decisiones chicas y los «permisos» que te acercaron, y encontrar dónde salir antes.',
      mechanism: 'Muchas recaídas no empiezan con una gran decisión, sino con varias chicas que parecen inocentes. Ver la cadena y las excusas que la sostienen permite cortar antes, cuando todavía es fácil.',
      evidenceLevel: 'moderada',
      evidence: [MARLATT_1985, LARIMER_1999, WITKIEWITZ_2004],
      howItWorks: [
        'Marlatt llamó «decisiones aparentemente irrelevantes» a elecciones chicas que, sumadas, llevan a una situación de riesgo. Volver por la calle del kiosco, guardar «por las dudas» o aceptar una salida «sólo un rato» (Marlatt y Gordon, 1985).',
        'Cada paso suele venir con un permiso: «me lo merezco», «una no es nada», «ya fue». Son pensamientos que hacen que la decisión parezca inocente (Larimer y colaboradores, 1999).',
        'Esta práctica va más allá del mapa de riesgos. Mira hacia atrás un episodio concreto y busca la primera bifurcación, el punto donde salir era más fácil.',
      ],
      tips: [
        'Mira el episodio como una película, desde afuera, sin juzgarte.',
        'Las primeras decisiones suelen estar horas o días antes.',
        'Sospecha de las frases «sólo un rato», «por las dudas» y «ya que estoy».',
        'Pregúntate seguido: «¿Esto me acerca o me aleja de lo que cuido?».',
      ],
      obstacles: [
        { q: 'Me da culpa revisar lo que pasó.', a: 'La idea no es castigarte, sino entender. Si la culpa pesa, haz antes «Después de un tropiezo» o una «Pausa de autocompasión».' },
        { q: 'No veo ninguna decisión, simplemente pasó.', a: 'Es común al principio. Rebobina más despacio, hora por hora. Pregúntate dónde estabas, con quién y qué pensabas.' },
      ],
      cautions: AVISO_RECAIDAS,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Siente los pies en el piso. Vas a mirar desde afuera, como en una película.', durationSec: 30, kind: 'breath' },
        { title: 'El episodio', instruction: 'Elige un tropiezo o un casi tropiezo reciente. Escribe en una frase qué pasó al final.', durationSec: 45, kind: 'reflection' },
        { title: 'Rebobinar', instruction: '¿Qué decidiste justo antes? ¿Y antes de eso? Anota cuatro o cinco decisiones, hacia atrás.', durationSec: 90, kind: 'reflection' },
        { title: 'Los permisos', instruction: 'Al lado de cada decisión, anota lo que te dijiste. Por ejemplo, «me lo merezco» o «sólo un rato».', durationSec: 60, kind: 'reflection' },
        { title: 'La primera salida', instruction: 'Marca la decisión más temprana donde salir era fácil. ¿Qué otra opción tenías ahí?', durationSec: 60, kind: 'reflection' },
        { title: 'Una pregunta', instruction: 'Escribe una pregunta para usar en esos momentos: «¿Esto me acerca o me aleja de lo que cuido?».', durationSec: 40, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Entender la cadena no es culparte, es darte más salidas.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'mi-red-para-no-recaer',
      title: 'Mi red para sostener el cambio',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Mapear quiénes te ayudan a sostener el cambio y quiénes te lo hacen más difícil, y dar un paso para fortalecer tu red.',
      mechanism: 'Tener personas que apoyan tu cambio protege de las recaídas. Sumar apoyo y ganar distancia de quienes empujan al consumo cambia el ambiente que te rodea.',
      evidenceLevel: 'moderada',
      evidence: [LITT_2007, KELLY_2020, SEDRONAR],
      howItWorks: [
        'En un ensayo, ayudar a las personas a sumar al menos un vínculo que apoyara no tomar mejoró sus resultados con el alcohol (Litt y colaboradores, 2007). Lo que pesó fue el cambio en la red, no sólo la fuerza de voluntad.',
        'Los grupos de ayuda mutua son una forma de red. Una revisión Cochrane encontró que los programas de doce pasos facilitados ayudan a sostener la abstinencia del alcohol (Kelly y colaboradores, 2020). No son la única opción, y no reemplazan el tratamiento.',
        'Si no sabes por dónde empezar, la Línea 141 de SEDRONAR te orienta sobre lugares de ayuda cerca de ti. Es gratuita y atiende las 24 horas.',
      ],
      tips: [
        'Una persona de confianza que sepa de tu plan ya cambia mucho.',
        'No hace falta cortar con todos. A veces alcanza con ver a algunas personas en otros lugares u horarios.',
        'Acuerda con alguien una palabra o un mensaje para pedir ayuda rápido.',
        'Guarda el 141 en tus contactos.',
      ],
      obstacles: [
        { q: 'Casi toda mi gente consume.', a: 'Es una situación muy difícil y común. Empieza por sumar un vínculo nuevo, aunque sea uno: un grupo, una actividad o tu equipo de salud. La Línea 141 puede orientarte.' },
        { q: 'Me da vergüenza contarlo.', a: 'Tiene sentido. No hace falta contar todo. Puedes decir: «Estoy cuidando algo importante y me ayuda que lo sepas».' },
      ],
      cautions: AVISO_RECAIDAS,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en las personas con las que hablas en una semana común.', durationSec: 30, kind: 'breath' },
        { title: 'Quienes ayudan', instruction: 'Anota a las personas que apoyan tu cambio o con quienes te cuidas mejor.', durationSec: 60, kind: 'reflection' },
        { title: 'Quienes dificultan', instruction: 'Anota a las personas o grupos con quienes es más fácil volver atrás. Sólo para verlo, sin juzgar.', durationSec: 60, kind: 'reflection' },
        { title: 'Más distancia', instruction: 'Elige un cambio con alguien de esa lista. Por ejemplo, verlo en otro lugar, en otro horario o menos seguido.', durationSec: 60, kind: 'reflection' },
        { title: 'Más apoyo', instruction: 'Piensa en una forma de sumar apoyo. Un grupo de ayuda mutua, una actividad o tu equipo de salud.', durationSec: 60, kind: 'reflection' },
        { title: 'Contar', instruction: 'Elige a una persona para contarle tu plan esta semana. Acuerden cómo avisarle si estás en riesgo.', durationSec: 45, kind: 'reflection' },
        { title: 'La Línea 141', instruction: 'Guarda el 141 en tu celular. Te orientan sobre dónde pedir ayuda, gratis y a toda hora.', durationSec: 30, kind: 'instruction' },
      ],
    },
  ],

  meta: {
    'aceptar-un-elogio': { level: 'iniciacion', approaches: ['tcc', 'positiva'], module: 'autoconocimiento' },
    'registro-de-datos-positivos': { level: 'intermedio', approaches: ['tcc', 'escritura'], module: 'pensamientos', prerequisites: ['tres-cosas-buenas'] },
    'mi-regla-valgo-si': { level: 'intermedio', approaches: ['tcc', 'esquemas'], module: 'pensamientos', prerequisites: ['pausa-autocompasion'] },
    'debo-y-quiero': { level: 'iniciacion', approaches: ['tcc'], module: 'habitos' },
    'decisiones-que-parecen-irrelevantes': { level: 'intermedio', approaches: ['tcc'], module: 'afrontamiento', prerequisites: ['mapa-de-situaciones-de-riesgo'] },
    'mi-red-para-no-recaer': { level: 'intermedio', approaches: ['tcc', 'interpersonal'], module: 'afrontamiento', prerequisites: ['plan-verde-amarillo-rojo'] },
  },

  articles: [],
  programs: [],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-aceptar-elogios',
      title: '«No es para tanto»',
      subtitle: 'Por qué descontamos los elogios y cómo recibirlos.',
      slides: [
        { heading: 'El descuento', text: 'Te dicen algo bueno y piensas «fue suerte» o «lo dice por decir». Es una trampa común.' },
        { heading: 'Qué se pierde', text: 'Si descuentas cada elogio, lo bueno nunca queda. Sólo quedan los errores.' },
        { heading: 'Pensar el porqué', text: 'En un estudio, pensar por qué te elogiaron y qué significa ayudó a personas con autoestima baja.' },
        { heading: 'Alcanza un gracias', text: 'No hace falta explicar ni devolver otro elogio. Di «gracias» y respira.' },
        { heading: 'Guárdalos', text: 'Anota los elogios en una nota del celular. Léela en un día malo.' },
      ],
      related: { practices: ['aceptar-un-elogio'] },
      references: [BURNS_1980, MARIGOLD_2007],
    },
    {
      id: 'pildora-datos-positivos',
      title: 'Juntar datos a tu favor',
      subtitle: 'Un registro diario para corregir el filtro.',
      slides: [
        { heading: 'Un filtro', text: 'La idea «no valgo» funciona como un filtro. Deja ver los fallos y esconde lo bueno.' },
        { heading: 'Una idea nueva', text: 'Elige una idea más justa sobre ti. Por ejemplo: «soy aceptable tal como soy».' },
        { heading: 'Datos chicos', text: 'Cada día, anota tres hechos chicos que la apoyen. Ayudar a alguien, cumplir algo, intentar algo difícil.' },
        { heading: 'Sin «sí, pero»', text: 'Si la mente descuenta el dato, déjala hablar. El dato queda anotado igual.' },
        { heading: 'Paciencia', text: 'Una vez por semana, relee todo. El cambio es lento: piensa en semanas, no en días.' },
      ],
      related: { practices: ['registro-de-datos-positivos'] },
      references: [PADESKY_1994, KOLUBINSKI_2018],
    },
    {
      id: 'pildora-regla-valgo-si',
      title: 'Valgo si…',
      subtitle: 'Las reglas que ponen condiciones a tu valor.',
      slides: [
        { heading: 'Una regla', text: '«Valgo si nunca fallo». «Tengo que agradar siempre». Son reglas para vivir.' },
        { heading: 'Mientras se cumple', text: 'Mientras la regla se cumple, te sientes más o menos bien. Pero tu valor queda siempre a prueba.' },
        { heading: 'Cuando se rompe', text: 'Basta un error o una crítica para que vuelva la idea de no valer. Y con ella, la ansiedad.' },
        { heading: 'Más flexible', text: 'Prueba otra regla: «Me gusta hacer las cosas bien. Si fallo, sigo valiendo».' },
        { heading: 'A prueba', text: 'Actúa una vez según la regla nueva. Mira qué pasa de verdad.' },
        { heading: 'Si pesa mucho', text: 'Si la autocrítica no para o piensas en hacerte daño, pide ayuda. Llama al 135 o al 0800-999-0091.' },
      ],
      related: { practices: ['mi-regla-valgo-si'] },
      references: [FENNELL_1997, FENNELL_1999],
    },
    {
      id: 'pildora-debo-y-quiero',
      title: 'Me lo merezco',
      subtitle: 'Una vida sólo de obligaciones empuja al tropiezo.',
      slides: [
        { heading: 'Debo y quiero', text: 'Hay cosas que haces porque debes y otras porque quieres. Las dos hacen falta.' },
        { heading: 'El desequilibrio', text: 'Si casi todo es obligación, crece la idea de «me lo merezco». Esa idea abre la puerta al tropiezo.' },
        { heading: 'Gustos sanos', text: 'Suma gustos que no te acerquen al riesgo. Caminar, cocinar algo rico, ver a alguien.' },
        { heading: 'Un rato por día', text: 'No hace falta llenar la agenda. Alcanza con un rato propio, cerca del momento más difícil.' },
        { heading: 'Si hay consumo', text: 'Si el consumo es lo que cuidas, la Línea 141 te orienta. Es gratuita y atiende las 24 horas.' },
      ],
      related: { practices: ['debo-y-quiero'], articles: ['prevenir-recaidas'] },
      references: [MARLATT_1985, LARIMER_1999, SEDRONAR],
    },
    {
      id: 'pildora-decisiones-chicas',
      title: 'Sólo un rato',
      subtitle: 'Las decisiones chicas que llevan al riesgo.',
      slides: [
        { heading: 'No de golpe', text: 'Muchas recaídas no empiezan con una gran decisión. Empiezan con varias chicas.' },
        { heading: 'Parecen inocentes', text: 'Pasar por la calle del kiosco. Guardar algo «por las dudas». Ir «sólo un rato».' },
        { heading: 'Los permisos', text: 'Cada paso viene con una excusa: «me lo merezco», «una no es nada», «ya fue».' },
        { heading: 'Rebobinar', text: 'Mira hacia atrás un tropiezo. Busca la primera decisión, donde salir era más fácil.' },
        { heading: 'Una pregunta', text: 'Úsala seguido: «¿Esto me acerca o me aleja de lo que cuido?».' },
      ],
      related: { practices: ['decisiones-que-parecen-irrelevantes'], articles: ['prevenir-recaidas'] },
      references: [MARLATT_1985, LARIMER_1999],
    },
    {
      id: 'pildora-red-para-no-recaer',
      title: 'No se sostiene en soledad',
      subtitle: 'Tu red también cuida el cambio.',
      slides: [
        { heading: 'No es sólo voluntad', text: 'Las personas que te rodean pesan mucho. Sumar apoyo protege de las recaídas.' },
        { heading: 'Una persona', text: 'Alguien de confianza que sepa de tu plan ya cambia mucho. Acuerden cómo avisar si hay riesgo.' },
        { heading: 'Más distancia', text: 'No hace falta cortar con todos. A veces alcanza con ver a algunas personas en otro lugar u horario.' },
        { heading: 'Grupos', text: 'Los grupos de ayuda mutua son otra forma de red. Acompañan el tratamiento, no lo reemplazan.' },
        { heading: 'Línea 141', text: 'Si no sabes por dónde empezar, llama al 141 de SEDRONAR. Es gratis y atiende las 24 horas.' },
      ],
      related: { practices: ['mi-red-para-no-recaer'], articles: ['prevenir-recaidas'] },
      references: [LITT_2007, KELLY_2020, SEDRONAR],
    },
  ],
};
