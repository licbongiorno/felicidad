import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Demencia en la familia»: para el familiar adulto que acompaña a alguien con
 * Alzheimer u otra demencia.
 *  - entender los cambios de memoria y conducta: «no es a propósito» (Livingston y colaboradores);
 *  - comunicación validante: no discutir la realidad, responder a la emoción y redirigir (Feil);
 *  - agitación y ocaso: buscar la necesidad detrás de la conducta, enfoque DICE
 *    (Kales, Gitlin y Lyketsos; Brodaty y Arasaratnam);
 *  - duelo anticipado y duelo ambiguo en la demencia (Boss; Chan y colaboradores);
 *  - relevo con una guía escrita de la persona (Mittelman y colaboradores; Livingston y colaboradores, START);
 *  - decisiones difíciles: residencia y planificación anticipada (Sudore y colaboradores; Ley 26.529);
 *  - guía para explicarles a los chicos que el abuelo o la abuela tiene demencia (Celdrán y colaboradores).
 *
 * No repite el paquete `cuidadores` (carga del cuidador, límites, duelo ambiguo general,
 * plan de crisis): lo enlaza.
 *
 * Reglas de seguridad del paquete: no hay indicaciones médicas ni de fármacos. Un cambio
 * brusco de conducta o de confusión se consulta con el médico ese mismo día (puede ser una
 * infección, dolor o un delirium). Ante violencia o peligro, 911. Para quien cuida, la Línea
 * Nacional de Salud Mental 0800-999-0091 y el 135. Lo legal se presenta sólo como información
 * general. No se nombran teléfonos de asociaciones.
 */

const LIVINGSTON_2020: Reference = {
  citation:
    'Livingston, G., Huntley, J., Sommerlad, A., Ames, D., Ballard, C., Banerjee, S., … Mukadam, N. (2020). Dementia prevention, intervention, and care: 2020 report of the Lancet Commission. The Lancet, 396(10248), 413–446.',
  doi: '10.1016/S0140-6736(20)30367-6',
};
const KALES_2014: Reference = {
  citation:
    'Kales, H. C., Gitlin, L. N., & Lyketsos, C. G. (2014). Management of neuropsychiatric symptoms of dementia in clinical settings: Recommendations from a multidisciplinary expert panel. Journal of the American Geriatrics Society, 62(4), 762–769.',
  doi: '10.1111/jgs.12730',
};
const KALES_2015: Reference = {
  citation: 'Kales, H. C., Gitlin, L. N., & Lyketsos, C. G. (2015). Assessment and management of behavioral and psychological symptoms of dementia. BMJ, 350, h369.',
  doi: '10.1136/bmj.h369',
};
const BRODATY_2012: Reference = {
  citation: 'Brodaty, H., & Arasaratnam, C. (2012). Meta-analysis of nonpharmacological interventions for neuropsychiatric symptoms of dementia. American Journal of Psychiatry, 169(9), 946–953.',
  doi: '10.1176/appi.ajp.2012.11101529',
};
const FEIL_1993: Reference = { citation: 'Feil, N. (1993). The validation breakthrough: Simple techniques for communicating with people with «Alzheimer’s-type dementia». Health Professions Press.' };
const BOSS_2011: Reference = { citation: 'Boss, P. (2011). Loving someone who has dementia: How to find hope while coping with stress and grief. Jossey-Bass.' };
const CHAN_2013: Reference = {
  citation: 'Chan, D., Livingston, G., Jones, L., & Sampson, E. L. (2013). Grief reactions in dementia carers: A systematic review. International Journal of Geriatric Psychiatry, 28(1), 1–17.',
};
const MITTELMAN_2006: Reference = {
  citation: 'Mittelman, M. S., Haley, W. E., Clay, O. J., & Roth, D. L. (2006). Improving caregiver well-being delays nursing home placement of patients with Alzheimer disease. Neurology, 67(9), 1592–1599.',
};
const START_2013: Reference = {
  citation:
    'Livingston, G., Barber, J., Rapaport, P., Knapp, M., Griffin, M., King, D., … Cooper, C. (2013). Clinical effectiveness of a manual based coping strategy programme (START, STrAtegies for RelaTives) in promoting the mental health of carers of family members with dementia: Pragmatic randomised controlled trial. BMJ, 347, f6276.',
};
const SUDORE_2017: Reference = {
  citation:
    'Sudore, R. L., Lum, H. D., You, J. J., Hanson, L. C., Meier, D. E., Pantilat, S. Z., … Heyland, D. K. (2017). Defining advance care planning for adults: A consensus definition from a multidisciplinary Delphi panel. Journal of Pain and Symptom Management, 53(5), 821–832.',
};
const LEY_26529: Reference = {
  citation: 'Ley 26.529 (2009). Derechos del paciente en su relación con los profesionales e instituciones de la salud. Boletín Oficial de la República Argentina. Modificada por la Ley 26.742 (2012).',
  note: 'El artículo 11 regula las directivas anticipadas. Se menciona sólo como información general.',
};
const CELDRAN_2011: Reference = {
  citation:
    'Celdrán, M., Triadó, C., & Villar, F. (2011). «My grandparent has dementia»: How adolescents perceive their relationship with grandparents with a cognitive impairment. Journal of Applied Gerontology, 30(3), 332–352.',
};

/** Aviso común: cambios bruscos, violencia y ayuda para quien cuida. */
const AVISO =
  'Si la confusión o la conducta cambian de golpe, en horas o días, consulta al médico ese mismo día: puede ser una infección, dolor o un delirium. No cambies ni sumes medicamentos por tu cuenta. Si hay violencia o peligro, llama al 911. Si tú no das más, llama a la Línea Nacional de Salud Mental, 0800-999-0091.';

export const DEMENCIA_MAYORES_PACK: ContentPack = {
  id: 'demencia-mayores',

  // ================================================================== prácticas
  practices: [
    {
      id: 'es-la-enfermedad-no-la-persona',
      title: 'No lo hace a propósito',
      family: 'attentional',
      skills: ['attention', 'compassion'],
      summary: 'Una pausa breve para cuando tu familiar repite, acusa o se enoja: respirar, recordar que es la enfermedad y elegir cómo responder.',
      mechanism: 'Ver la conducta como un síntoma, y no como algo contra ti, baja el enojo y la culpa. Con menos enojo es más fácil responder con calma.',
      evidenceLevel: 'moderada',
      evidence: [LIVINGSTON_2020, KALES_2015],
      micro: true,
      howItWorks: [
        'La demencia daña partes del cerebro que guardan recuerdos nuevos, ordenan el tiempo y frenan los impulsos. Por eso la persona pregunta lo mismo muchas veces, acusa de robos o se enoja sin motivo claro. No es terquedad ni maldad: es la enfermedad (Livingston y colaboradores, 2020).',
        'Muchas conductas difíciles expresan algo que la persona no puede decir con palabras. Puede ser dolor, miedo, hambre, ganas de ir al baño o demasiado ruido (Kales y colaboradores, 2015). Una pausa corta te da tiempo para mirar eso, en lugar de discutir.',
      ],
      tips: [
        'Úsala en el momento, aunque sea con los ojos abiertos y en la cocina.',
        'Ten una frase lista: «Es la enfermedad, no es ella».',
        'Si te enojaste, no pasa nada. Puedes volver a empezar en el próximo momento.',
      ],
      obstacles: [
        { q: 'A veces parece que lo hace para molestarme.', a: 'Es muy común sentirlo así, sobre todo cuando con otros parece estar mejor. La demencia sube y baja durante el día. Que pueda algo un rato no significa que pueda siempre.' },
      ],
      steps: [
        { title: 'Parar', instruction: 'Antes de responder, para un momento. Siente los pies en el piso.', durationSec: 20, kind: 'instruction' },
        { title: 'Respirar', instruction: 'Respira despacio dos veces. Suelta el aire más lento de lo que entra.', durationSec: 30, kind: 'breath' },
        { title: 'Nombrar', instruction: 'Dite en silencio: «Es la enfermedad, no es la persona. No lo hace a propósito».', durationSec: 25, kind: 'breath' },
        { title: 'Mirar', instruction: '¿Qué puede estar sintiendo? Miedo, dolor, hambre, frío o cansancio. Elige una posibilidad.', durationSec: 35, kind: 'reflection' },
        { title: 'Responder', instruction: 'Responde a eso con pocas palabras y voz suave. No hace falta corregir lo que dijo.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'validar-y-redirigir',
      title: 'Validar y redirigir',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Preparar respuestas para las frases que más se repiten: no discutir la realidad, responder a la emoción y llevar la charla a otro lado.',
      mechanism: 'Corregir a alguien con demencia suele traer más angustia, porque no puede retener el dato. Responder a la emoción calma y cuida el vínculo.',
      evidenceLevel: 'preliminar',
      evidence: [FEIL_1993, LIVINGSTON_2020],
      howItWorks: [
        'Cuando la persona dice que tiene que ir a buscar a sus hijos, que ya son adultos, corregirla no sirve. No puede guardar el dato nuevo. En cambio, puede sentir otra vez la noticia como si fuera la primera vez.',
        'Naomi Feil propuso la validación: entrar en la realidad de la persona y responder a lo que siente, no a los hechos (Feil, 1993). Los estudios sobre este método son pocos y de poca calidad. Pero la idea de no discutir y responder a la emoción es parte de las guías de cuidado (Livingston y colaboradores, 2020).',
        'Redirigir es llevar la atención a otra cosa que le guste o le sirva. Una tarea, una foto, un té, una canción. No es engañar: es cuidar.',
      ],
      tips: [
        'Primero la emoción: «Te preocupan tus hijos. Siempre los cuidaste mucho».',
        'Después, invita a algo concreto: «¿Me ayudas a doblar la ropa?».',
        'Habla de frente, despacio y con frases cortas. Una idea por vez.',
        'Si una respuesta funciona, anótala. Seguro la vas a necesitar de nuevo.',
      ],
      obstacles: [
        { q: 'Siento que le miento.', a: 'No tienes que inventar. Puedes no confirmar ni corregir, y hablar de lo que siente. Cuando una verdad sólo trae dolor que no puede procesar, elegir la calma es una forma de respeto.' },
        { q: 'Me pregunta por su mamá, que murió hace años.', a: 'Decírselo puede hacerle vivir el duelo de nuevo. Prueba: «La extrañas. ¿Cómo era ella?». Muchas veces lo que busca es consuelo, no un dato.' },
      ],
      cautions: AVISO,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Piensa en tu familiar en un día común.', durationSec: 30, kind: 'breath' },
        { title: 'La frase', instruction: 'Escribe una frase que repite mucho y que te cuesta. Por ejemplo: «Me quiero ir a mi casa».', durationSec: 45, kind: 'reflection' },
        { title: 'La emoción', instruction: '¿Qué siente cuando lo dice? Miedo, tristeza, ganas de sentirse útil, de estar en un lugar seguro. Anótalo.', durationSec: 60, kind: 'reflection' },
        { title: 'Validar', instruction: 'Escribe una respuesta a esa emoción, sin corregir. Por ejemplo: «Extrañas tu casa. Allí te sentías bien».', durationSec: 60, kind: 'reflection' },
        { title: 'Redirigir', instruction: 'Escribe una invitación concreta para después. Un mate, una foto, una caminata o una tarea simple.', durationSec: 60, kind: 'reflection' },
        { title: 'Ensayar', instruction: 'Lee las dos frases en voz baja, con voz suave. Imagina que se las dices mirándola a los ojos.', durationSec: 45, kind: 'instruction' },
        { title: 'Cerrar', instruction: 'Respira despacio. Guarda estas frases en el celular para tenerlas a mano.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'detective-de-la-agitacion',
      title: 'Qué hay detrás de la agitación',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Mirar un episodio de agitación o de ocaso como un detective: qué pasó, qué pudo causarlo, qué probar y cómo salió.',
      mechanism: 'La agitación suele tener disparadores: dolor, cansancio, ruido, cambios de rutina o la caída de la luz. Encontrarlos permite prevenir en lugar de apagar incendios.',
      evidenceLevel: 'moderada',
      evidence: [KALES_2014, BRODATY_2012],
      howItWorks: [
        'Un grupo de expertos propuso el enfoque DICE para la agitación en la demencia. Describir qué pasó. Investigar las causas posibles. Crear un plan. Evaluar si funcionó (Kales y colaboradores, 2014). Esta práctica toma esos cuatro pasos para usarlos en casa.',
        'Un metaanálisis encontró que los programas que enseñan a la familia a manejar estas conductas reducen los síntomas y mejoran el ánimo de quien cuida (Brodaty y Arasaratnam, 2012).',
        'Muchas personas con demencia se agitan más al atardecer. Se lo llama ocaso o síndrome del atardecer. Ayudan la luz natural de día, la actividad por la mañana, menos ruido a la tarde y una rutina estable para la noche.',
      ],
      tips: [
        'Anota varios episodios. Los patrones aparecen después de unos días.',
        'Revisa lo básico primero: dolor, baño, hambre, sed, frío o calor.',
        'Al atardecer, prende las luces antes de que oscurezca y baja la tele.',
        'Cambia una sola cosa por vez para saber qué funcionó.',
        'Lleva tus notas al médico. Le sirven mucho.',
      ],
      obstacles: [
        { q: 'Nada funciona, se agita igual.', a: 'Pasa. Algunas causas no se ven, como un dolor o una infección. Por eso conviene consultar al médico con tus notas. Y tú también necesitas relevo para aguantar esos días.' },
      ],
      cautions: AVISO,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Haz esto cuando ya pasó el episodio y estás más tranquilo o tranquila.', durationSec: 30, kind: 'breath' },
        { title: 'Describir', instruction: 'Escribe qué pasó, como en una foto. Hora, lugar, quién estaba y qué hizo tu familiar.', durationSec: 60, kind: 'reflection' },
        { title: 'Antes', instruction: '¿Qué pasó justo antes? Un ruido, una visita, un baño, un cambio de lugar, la caída de la luz.', durationSec: 60, kind: 'reflection' },
        { title: 'El cuerpo', instruction: '¿Pudo tener dolor, hambre, sed, frío, ganas de ir al baño o cansancio? Anota lo posible.', durationSec: 45, kind: 'reflection' },
        { title: 'Crear', instruction: 'Elige un solo cambio para probar. Por ejemplo, prender luces antes, bajar la tele o una caminata a la mañana.', durationSec: 60, kind: 'reflection' },
        { title: 'Evaluar', instruction: 'Anota una fecha, en una semana, para ver si cambió algo. Si no, prueben otra idea.', durationSec: 30, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Reconoce lo que haces: mirar con paciencia es mucho trabajo.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'despedirse-de-a-poco',
      title: 'Despedirse de a poco',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Nombrar las pérdidas chicas que trae la demencia y buscar formas nuevas de estar con tu familiar en lo que todavía comparten.',
      mechanism: 'En la demencia el duelo empieza antes de la muerte. Reconocer cada pérdida, en vez de taparla, baja la culpa. Buscar lo que sigue ayuda a no perder también el presente.',
      evidenceLevel: 'preliminar',
      evidence: [BOSS_2011, CHAN_2013],
      howItWorks: [
        'Una revisión encontró que muchas familias sienten duelo mientras su familiar sigue vivo. Se lo llama duelo anticipado. Suele crecer a medida que avanza la enfermedad y se asocia a más depresión en quien cuida (Chan y colaboradores, 2013).',
        'Pauline Boss escribió sobre la demencia como duelo ambiguo: la persona está, pero no como antes. Propone no buscar un cierre, sino aprender a convivir con la ambigüedad y encontrar sentido y esperanza en lo que todavía es posible (Boss, 2011).',
        'Si quieres trabajar el duelo ambiguo en general, la práctica «Está, pero no está» te acompaña. Aquí nos enfocamos en cada pérdida concreta y en la conexión que sigue.',
      ],
      tips: [
        'Las pérdidas chicas también cuentan: la última vez que cocinó, que te llamó por tu nombre.',
        'La música, el tacto y las fotos viejas suelen llegar cuando las palabras ya no.',
        'Puedes llorar una pérdida y disfrutar un momento juntos el mismo día.',
      ],
      obstacles: [
        { q: 'Siento culpa por llorarla si todavía está.', a: 'Es una reacción muy común en la demencia. No es desear su muerte ni quererla menos. Es reconocer lo que ya se fue.' },
      ],
      cautions:
        'Si la tristeza no te deja funcionar, si dejas de comer o dormir o si piensas en morir, consulta con un profesional. Puedes llamar a la Línea Nacional de Salud Mental, 0800-999-0091. Si piensas en hacerte daño, llama al 135.',
      steps: [
        { title: 'Llegar', instruction: 'Pon una mano en el pecho. Respira despacio y siente el calor de la mano.', durationSec: 40, kind: 'breath' },
        { title: 'Una pérdida', instruction: 'Escribe una pérdida chica de estos meses. Algo que tu familiar ya no hace o ya no recuerda.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que dolió', instruction: '¿Qué significaba eso para ti? Escribe una frase. Por ejemplo: «Era nuestra charla de los domingos».', durationSec: 60, kind: 'reflection' },
        { title: 'Nombrarlo', instruction: 'Dite despacio: «Esto es una pérdida real. Tiene sentido que duela».', durationSec: 30, kind: 'breath' },
        { title: 'Lo que sigue', instruction: 'Escribe algo que todavía comparten. Una canción, una mano, una risa, mirar fotos o tomar mate.', durationSec: 60, kind: 'reflection' },
        { title: 'Un momento', instruction: 'Elige un momento chico para hacer eso juntos esta semana. Anota cuándo.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Vuelve a la mano en el pecho. Dite: «Puedo extrañar y estar presente a la vez».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'manual-para-el-relevo',
      title: 'Una guía para quien te releva',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Escribir una hoja con lo que otra persona necesita saber de tu familiar, para que pedir relevo sea más fácil y más seguro.',
      mechanism: 'Muchas personas no piden relevo porque sienten que nadie sabrá cuidar como ellas. Una guía escrita baja ese miedo y hace que otros se animen a ayudar.',
      evidenceLevel: 'moderada',
      evidence: [MITTELMAN_2006, START_2013],
      howItWorks: [
        'En un ensayo largo, un programa de apoyo a la familia, con consejería y ayuda de la red, mejoró el bienestar de quienes cuidaban. Además, las personas con Alzheimer pudieron vivir más tiempo en casa (Mittelman y colaboradores, 2006).',
        'Otro ensayo, llamado START, enseñó a familiares estrategias para cuidar y cuidarse. Bajó la ansiedad y la depresión de quienes cuidaban, y el efecto duró (Livingston y colaboradores, 2013).',
        'Pedir relevo es parte del cuidado. La práctica «Límites para seguir cuidando» te ayuda a pedirlo. Esta te ayuda a que el relevo funcione: quien llega sabe qué hacer.',
      ],
      tips: [
        'Escribe frases cortas, como si fuera para alguien que no conoce a tu familiar.',
        'Incluye lo que le calma y lo que le altera. Es lo que más sirve.',
        'Deja la hoja en un lugar visible, por ejemplo en la heladera.',
        'Pregunta en el centro de salud o al médico si hay centros de día o grupos para familias cerca.',
      ],
      obstacles: [
        { q: 'Nadie lo va a hacer como yo.', a: 'Puede ser que lo hagan distinto, y está bien. Tu familiar también se beneficia de que llegues descansado o descansada.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Ten a mano papel o el celular.', durationSec: 30, kind: 'breath' },
        { title: 'Quién es', instruction: 'Escribe cómo le gusta que la llamen, de qué le gusta hablar y qué hacía en su vida.', durationSec: 60, kind: 'reflection' },
        { title: 'Su rutina', instruction: 'Anota los horarios de comida, baño, siesta y sueño. Incluye lo que le gusta comer y tomar.', durationSec: 60, kind: 'instruction' },
        { title: 'Lo que calma', instruction: 'Escribe tres cosas que la calman. Una canción, una frase, una tarea, un lugar de la casa.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que altera', instruction: 'Escribe lo que la pone nerviosa y conviene evitar. Ruidos, prisa, que la corrijan.', durationSec: 45, kind: 'reflection' },
        { title: 'Los teléfonos', instruction: 'Anota tu teléfono, el del médico y el 911 para una emergencia.', durationSec: 30, kind: 'instruction' },
        { title: 'A quién', instruction: 'Piensa a quién le darías esta guía. Escribe qué le vas a pedir y cuándo.', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'lo-que-quiere-mi-familiar',
      title: 'Decidir con lo que la persona quería',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Preparar una charla familiar sobre decisiones difíciles, como una residencia o los cuidados del final, poniendo en el centro los valores de tu familiar.',
      mechanism: 'Las decisiones duelen menos y dividen menos cuando se apoyan en lo que la persona valoraba, y no sólo en la culpa o en lo que opina cada uno.',
      evidenceLevel: 'preliminar',
      evidence: [SUDORE_2017, LEY_26529, MITTELMAN_2006],
      howItWorks: [
        'La planificación anticipada es conversar sobre los valores y deseos de una persona para su cuidado futuro. Lo ideal es hacerlo cuando todavía puede participar (Sudore y colaboradores, 2017). En la demencia conviene empezar pronto.',
        'Si ya no puede decidir, la familia y el equipo de salud buscan lo que la persona habría querido. Ayuda pensar qué le importaba: estar en su casa, no ser una carga, estar con su gente, no sufrir.',
        'En la Argentina, la Ley 26.529 de derechos del paciente prevé las directivas anticipadas. Es información general: para lo legal y lo médico, consulta al médico y a un abogado o escribano.',
        'Elegir una residencia no es abandonar. A veces es la forma de que la persona esté segura y tú puedas volver a ser hija, hijo o pareja, y no sólo quien cuida.',
      ],
      tips: [
        'Si tu familiar todavía puede, inclúyelo en la charla, con preguntas simples.',
        'Hablen de valores antes que de lugares: «¿Qué le importaba más?».',
        'Busquen un momento sin apuro y sin la tensión de una crisis.',
        'Si la familia no se pone de acuerdo, pidan una reunión con el médico o un equipo de salud.',
      ],
      obstacles: [
        { q: 'Le prometí que nunca la iba a llevar a una residencia.', a: 'Esa promesa nació del amor, en otro momento. Hoy puedes preguntarte qué buscaba proteger: que esté bien cuidada y acompañada. A veces eso se cumple mejor de otra forma.' },
      ],
      cautions:
        'Esto es información general, no consejo legal ni médico. Las decisiones sobre tratamientos, internación o apoyos legales se hablan con el médico y con un abogado o escribano. Si la culpa o la angustia no te dejan, llama a la Línea Nacional de Salud Mental, 0800-999-0091.',
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Piensa en tu familiar como era antes de la enfermedad.', durationSec: 30, kind: 'breath' },
        { title: 'Sus valores', instruction: 'Escribe tres cosas que le importaban mucho. Por ejemplo, su independencia, su casa, la familia o no sufrir.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que dijo', instruction: '¿Alguna vez habló de cómo quería que la cuidaran? Anota lo que recuerdes, con sus palabras.', durationSec: 60, kind: 'reflection' },
        { title: 'La decisión', instruction: 'Escribe la decisión que tienen por delante en una frase simple. Sin buscar todavía la respuesta.', durationSec: 45, kind: 'reflection' },
        { title: 'Las opciones', instruction: 'Para cada opción, anota cómo cuida esos valores y qué cuesta. También a ti y a la familia.', durationSec: 75, kind: 'reflection' },
        { title: 'La charla', instruction: 'Escribe con quién vas a hablarlo y una frase para empezar. Por ejemplo: «Quiero que decidamos pensando en lo que ella quería».', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho. Dite: «No hay opción perfecta. Busco la que mejor la cuida».', durationSec: 30, kind: 'breath' },
      ],
    },
  ],

  meta: {
    'es-la-enfermedad-no-la-persona': { level: 'iniciacion', approaches: ['mindfulness', 'cft'], module: 'relaciones' },
    'validar-y-redirigir': { level: 'intermedio', approaches: ['humanista', 'focalizada-emocion'], module: 'relaciones', prerequisites: ['es-la-enfermedad-no-la-persona'] },
    'detective-de-la-agitacion': { level: 'intermedio', approaches: ['tcc', 'soluciones'], module: 'problemas', prerequisites: ['es-la-enfermedad-no-la-persona'] },
    'despedirse-de-a-poco': { level: 'intermedio', approaches: ['cft', 'logoterapia'], module: 'duelo', prerequisites: ['duelo-ambiguo-y-cuidado'] },
    'manual-para-el-relevo': { level: 'iniciacion', approaches: ['sistemica', 'soluciones'], module: 'relaciones' },
    'lo-que-quiere-mi-familiar': { level: 'avanzado', approaches: ['act', 'sistemica'], module: 'etapas', prerequisites: ['manual-para-el-relevo'] },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'acompanar-la-demencia',
      title: 'Acompañar a un familiar con demencia',
      subtitle: 'Qué cambia en la memoria y la conducta, cómo hablar sin discutir, qué hacer con la agitación y el atardecer, y el duelo que empieza antes.',
      category: 'Etapas de la vida',
      readingMin: 10,
      keyPoints: [
        'La demencia cambia la memoria, el juicio y la conducta. Lo difícil que hace tu familiar no es a propósito.',
        'Corregir suele angustiar más. Responder a la emoción y redirigir calma.',
        'La agitación casi siempre tiene un disparador. Buscarlo sirve más que discutir.',
        'El duelo empieza antes de la muerte. Tiene nombre y es esperable.',
        'Ante un cambio brusco, consulta al médico ese día. No hay aquí indicaciones de fármacos.',
      ],
      sections: [
        {
          heading: 'Qué está pasando',
          paragraphs: [
            'Demencia es un nombre general para enfermedades que dañan el cerebro de a poco. La más común es el Alzheimer. Hay otras, como la vascular, la de cuerpos de Lewy o la frontotemporal. Cada una avanza distinto (Livingston y colaboradores, 2020).',
            'Al principio suele fallar la memoria de lo reciente. Después cuesta orientarse, encontrar palabras, organizar tareas y controlar emociones. La persona puede repetir preguntas, esconder cosas, acusar de robos o no reconocer su casa.',
            'Nada de esto es a propósito. La enfermedad afecta justo las partes del cerebro que permitirían darse cuenta y frenar. Recordarlo no quita el cansancio, pero baja el enojo y la culpa.',
          ],
        },
        {
          heading: 'Hablar sin discutir',
          paragraphs: [
            'Si tu familiar dice algo que no es real, corregirlo casi nunca sirve. No puede guardar el dato nuevo, y puede sentir el golpe una y otra vez. Discutir suele terminar en angustia para los dos.',
            'Ayuda responder a la emoción, no a los hechos. Naomi Feil llamó a esto validación (Feil, 1993). Los estudios sobre su método son pocos. Pero la idea de no discutir y responder con calma está en las guías actuales (Livingston y colaboradores, 2020).',
            'Después de validar, puedes redirigir: proponer una tarea simple, una foto, un té o una canción. Habla de frente, despacio, con frases cortas y una idea por vez.',
          ],
        },
        {
          heading: 'La agitación y el atardecer',
          paragraphs: [
            'La agitación, los gritos o querer irse suelen tener un disparador. Puede ser dolor, hambre, ganas de ir al baño, cansancio, ruido, prisa o un cambio de rutina. El enfoque DICE propone describir, investigar, crear un plan y evaluar (Kales y colaboradores, 2014).',
            'Un metaanálisis encontró que enseñar a la familia a manejar estas conductas reduce los síntomas y mejora el ánimo de quien cuida (Brodaty y Arasaratnam, 2012). Las guías piden probar estas medidas antes que los fármacos, que decide sólo el médico (Kales y colaboradores, 2015).',
            'Muchas personas se agitan más al caer la tarde. Se lo llama ocaso o síndrome del atardecer. Ayudan la luz natural de día, la actividad a la mañana, prender las luces antes de que oscurezca, menos ruido y una rutina estable para la noche.',
          ],
        },
        {
          heading: 'Un duelo que empieza antes',
          paragraphs: [
            'Muchas familias sienten duelo mientras su familiar sigue vivo. Se lo llama duelo anticipado. Suele crecer con la enfermedad y se asocia a más depresión en quien cuida (Chan y colaboradores, 2013).',
            'Pauline Boss describe la demencia como duelo ambiguo: la persona está, pero no como antes. Propone no esperar un cierre, sino aprender a convivir con las dos cosas y buscar lo que todavía es posible (Boss, 2011).',
          ],
        },
        {
          heading: 'Relevo y apoyo',
          paragraphs: [
            'Cuidar a alguien con demencia es de las tareas más pesadas. Los programas de apoyo a la familia mejoran el ánimo de quien cuida. En un ensayo, además, la persona con Alzheimer pudo vivir más tiempo en casa (Mittelman y colaboradores, 2006).',
            'Pide relevo antes de llegar al límite. Una guía escrita con la rutina, lo que calma y lo que altera hace más fácil que otros ayuden. Pregunta al médico o en el centro de salud por centros de día y grupos para familias.',
          ],
        },
        {
          heading: 'Cuándo consultar',
          paragraphs: [
            'Consulta al médico ese mismo día si la confusión o la conducta cambian de golpe, en horas o días. Puede ser una infección, dolor, deshidratación o un delirium, y muchas veces tiene tratamiento. No cambies ni sumes medicamentos por tu cuenta.',
            'Si hay violencia o peligro, llama al 911. Si tú no das más, llama a la Línea Nacional de Salud Mental, 0800-999-0091. Si piensas en hacerte daño, llama al 135.',
          ],
        },
      ],
      caveat: {
        title: 'Lo que esta sección no hace',
        body: 'Aquí no hay diagnósticos ni indicaciones de medicación. Las ideas para la conducta tienen buena evidencia como conjunto, pero cada persona es distinta y lo que funciona cambia con el tiempo. La validación de Feil tiene pocos estudios: se usa aquí como una forma de hablar, no como un tratamiento. Ante dudas médicas, consulta al médico de tu familiar.',
      },
      diagram: {
        title: 'Cómo crece la agitación',
        nodes: ['Una necesidad que no puede decir (dolor, miedo, ruido)', 'Agitación o enojo', 'Quien cuida corrige o discute', 'Más confusión y miedo', 'Más agitación'],
        caption: 'Buscar la necesidad, validar la emoción y redirigir cortan el ciclo.',
      },
      related: {
        practices: ['es-la-enfermedad-no-la-persona', 'validar-y-redirigir', 'detective-de-la-agitacion', 'despedirse-de-a-poco', 'manual-para-el-relevo', 'duelo-ambiguo-y-cuidado', 'termometro-del-cuidador'],
        articles: ['decisiones-dificiles-demencia', 'acompanar-a-un-familiar'],
      },
      references: [LIVINGSTON_2020, FEIL_1993, KALES_2014, KALES_2015, BRODATY_2012, CHAN_2013, BOSS_2011, MITTELMAN_2006, START_2013],
    },
    {
      id: 'decisiones-dificiles-demencia',
      title: 'Decisiones difíciles en la demencia',
      subtitle: 'Hablar a tiempo de lo que la persona quiere, pensar una residencia sin culpa y decidir en familia.',
      category: 'Etapas de la vida',
      readingMin: 7,
      keyPoints: [
        'La planificación anticipada es hablar de valores y deseos para el cuidado futuro.',
        'En la demencia conviene hacerlo pronto, mientras la persona puede participar.',
        'Si ya no puede decidir, se busca lo que habría querido.',
        'Elegir una residencia no es abandonar. Puede ser la forma de cuidarla mejor.',
        'Lo legal y lo médico se consulta con profesionales.',
      ],
      sections: [
        {
          heading: 'Hablar a tiempo',
          paragraphs: [
            'Un panel de expertos definió la planificación anticipada como un proceso para conocer y compartir los valores y preferencias de una persona sobre su cuidado futuro (Sudore y colaboradores, 2017). No es un único papel: es una conversación que se retoma.',
            'En la demencia, la capacidad de decidir se va perdiendo. Por eso conviene hablar pronto. Preguntas simples ayudan: «¿Qué es lo más importante para ti?», «¿Qué te daría miedo?», «¿Quién quieres que decida si tú no puedes?».',
            'En la Argentina, la Ley 26.529 de derechos del paciente prevé las directivas anticipadas. Es información general. Para hacerlo bien, consulta al médico y a un abogado o escribano.',
          ],
        },
        {
          heading: 'Cuando ya no puede decidir',
          paragraphs: [
            'Si la persona ya no puede participar, la familia y el equipo de salud buscan lo que ella habría querido. No se trata de lo que preferiría cada uno, sino de sus valores: su independencia, su casa, estar con su gente, no sufrir.',
            'Las familias suelen discutir en estos momentos. Ayuda hablar primero de valores y después de opciones. Si no logran acordar, pidan una reunión con el médico o con un equipo de salud.',
          ],
        },
        {
          heading: 'Pensar en una residencia',
          paragraphs: [
            'Muchas familias sienten culpa al pensar en una residencia. Algunas hicieron promesas hace años. Pero a veces los cuidados que necesita la persona ya no se pueden dar en casa sin poner en riesgo su seguridad o la salud de quien cuida.',
            'Algunas señales para pensarlo: la persona no está segura en casa, el cuidado de noche no deja dormir a nadie o quien cuida se está enfermando. Visiten varios lugares, pregunten por la rutina y por cómo manejan la agitación.',
            'Después de la mudanza, la familia sigue cuidando de otra forma. Puedes visitar, llevar música y fotos, y volver a ser hija, hijo o pareja, no sólo quien cuida.',
          ],
        },
      ],
      caveat: {
        title: 'Información, no consejo',
        body: 'Esta sección no reemplaza el consejo médico ni legal. Las leyes y los trámites cambian, y cada situación es distinta. Consulta con el médico de tu familiar y con un abogado o escribano. Si la culpa o la angustia te desbordan, llama a la Línea Nacional de Salud Mental, 0800-999-0091.',
      },
      related: {
        practices: ['lo-que-quiere-mi-familiar', 'manual-para-el-relevo', 'despedirse-de-a-poco', 'limites-al-cuidar'],
        articles: ['acompanar-la-demencia'],
      },
      references: [SUDORE_2017, LEY_26529, MITTELMAN_2006, LIVINGSTON_2020],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'cuidar-cuando-la-memoria-se-va',
      title: 'Cuidar cuando la memoria se va',
      subtitle: 'Cuatro semanas para familiares de alguien con Alzheimer u otra demencia',
      description:
        'Entenderás qué cambia en tu familiar y por qué no es a propósito. Practicarás hablar sin discutir, buscarás qué hay detrás de la agitación y armarás una guía para pedir relevo. Al final, mirarás el duelo y las decisiones difíciles con amabilidad. No reemplaza al médico de tu familiar ni a la ayuda profesional para ti.',
      basis: 'Livingston y colaboradores (2020); Kales, Gitlin y Lyketsos (2014); Mittelman y colaboradores (2006); Boss (2011).',
      rhythm: '10 minutos, 3 o 4 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Entender',
          focus: 'No es a propósito',
          description: 'Leerás qué cambia con la demencia y practicarás una pausa breve antes de responder.',
          practiceIds: ['es-la-enfermedad-no-la-persona', 'termometro-del-cuidador'],
          articleIds: ['acompanar-la-demencia'],
        },
        {
          title: 'Semana 2 · Hablar',
          focus: 'Validar y redirigir',
          description: 'Prepararás respuestas para las frases que más se repiten, sin discutir la realidad.',
          practiceIds: ['validar-y-redirigir', 'detective-de-la-agitacion'],
          articleIds: [],
          journalType: 'conversacion',
        },
        {
          title: 'Semana 3 · Relevo',
          focus: 'Que otros puedan ayudar',
          description: 'Armarás una guía de tu familiar y pedirás un relevo concreto.',
          practiceIds: ['manual-para-el-relevo', 'limites-al-cuidar'],
          articleIds: [],
          journalType: 'resolucion-problemas',
        },
        {
          title: 'Semana 4 · Duelo y decisiones',
          focus: 'Lo que se va y lo que importa',
          description: 'Nombrarás las pérdidas, buscarás lo que todavía comparten y pensarás las decisiones con sus valores.',
          practiceIds: ['despedirse-de-a-poco', 'lo-que-quiere-mi-familiar'],
          articleIds: ['decisiones-dificiles-demencia'],
          journalType: 'carta-compasiva',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-no-es-a-proposito',
      title: 'No lo hace a propósito',
      subtitle: 'Qué cambia con la demencia y por qué.',
      slides: [
        { heading: 'Una enfermedad', text: 'La demencia daña el cerebro de a poco. La más común es el Alzheimer, pero hay otras.' },
        { heading: 'Lo nuevo se borra', text: 'Primero falla la memoria de lo reciente. Por eso pregunta lo mismo muchas veces.' },
        { heading: 'También la conducta', text: 'Puede esconder cosas, acusar o enojarse. La enfermedad afecta la parte que frena.' },
        { heading: 'No es contra ti', text: 'No es terquedad ni maldad. Recordarlo baja el enojo y la culpa.' },
        { heading: 'Algo que no dice', text: 'Muchas veces la conducta avisa algo. Dolor, miedo, hambre, frío o ganas de ir al baño.' },
        { heading: 'Si cambia de golpe', text: 'Si se confunde mucho más en pocas horas o días, consulta al médico ese mismo día.' },
      ],
      related: { practices: ['es-la-enfermedad-no-la-persona'], articles: ['acompanar-la-demencia'] },
      references: [LIVINGSTON_2020, KALES_2015],
    },
    {
      id: 'pildora-validar-y-redirigir',
      title: '«Me quiero ir a mi casa»',
      subtitle: 'Cómo responder sin discutir la realidad.',
      slides: [
        { heading: 'Corregir no sirve', text: 'Tu familiar no puede guardar el dato nuevo. Corregirla suele traer más angustia.' },
        { heading: 'La emoción', text: 'Detrás de la frase hay algo que siente. Miedo, tristeza, ganas de estar segura.' },
        { heading: 'Validar', text: 'Responde a eso: «Extrañas tu casa. Allí te sentías bien».' },
        { heading: 'Redirigir', text: 'Después, invita a algo concreto. Un mate, una foto, una canción o una tarea simple.' },
        { heading: 'Cómo decirlo', text: 'De frente, despacio y con voz suave. Frases cortas, una idea por vez.' },
        { heading: 'Anótalo', text: 'Si algo funciona, guárdalo. Vas a necesitarlo otra vez.' },
      ],
      related: { practices: ['validar-y-redirigir'], articles: ['acompanar-la-demencia'] },
      references: [FEIL_1993, LIVINGSTON_2020],
    },
    {
      id: 'pildora-ocaso',
      title: 'Cuando cae la tarde',
      subtitle: 'El ocaso y la agitación: qué mirar y qué probar.',
      slides: [
        { heading: 'El ocaso', text: 'Muchas personas con demencia se agitan más al atardecer. Se lo llama ocaso.' },
        { heading: 'Buscar la causa', text: 'Mira qué pasó antes. Cansancio, ruido, poca luz, hambre o ganas de ir al baño.' },
        { heading: 'De día', text: 'Luz natural y algo de actividad a la mañana. Una siesta corta, no larga.' },
        { heading: 'A la tarde', text: 'Prende las luces antes de que oscurezca. Baja la tele y evita las visitas largas.' },
        { heading: 'Un cambio por vez', text: 'Prueba una sola idea por unos días. Así sabes qué funciona.' },
        { heading: 'Pedir ayuda', text: 'Lleva tus notas al médico. Si hay peligro, llama al 911.' },
      ],
      related: { practices: ['detective-de-la-agitacion'], articles: ['acompanar-la-demencia'] },
      references: [KALES_2014, BRODATY_2012],
    },
    {
      id: 'pildora-duelo-anticipado',
      title: 'Un duelo que llega antes',
      subtitle: 'Extrañar a alguien que todavía está.',
      slides: [
        { heading: 'Duelo anticipado', text: 'Muchas familias sienten duelo mientras su familiar sigue vivo. Es muy común en la demencia.' },
        { heading: 'Pérdidas chicas', text: 'La última vez que cocinó. Que te llamó por tu nombre. Cada una cuenta.' },
        { heading: 'No es falta de amor', text: 'Llorar a alguien que vive puede dar culpa. No es desear su muerte. Es ver lo que se fue.' },
        { heading: 'Lo que sigue', text: 'La música, una mano o fotos viejas llegan cuando las palabras ya no.' },
        { heading: 'Las dos cosas', text: 'Puedes extrañar y estar presente el mismo día.' },
        { heading: 'Si pesa mucho', text: 'Si no puedes con la tristeza, consulta. Puedes llamar al 0800-999-0091.' },
      ],
      related: { practices: ['despedirse-de-a-poco', 'duelo-ambiguo-y-cuidado'], articles: ['acompanar-la-demencia'] },
      references: [CHAN_2013, BOSS_2011],
    },
  ],

  // ================================================================== guías para familias
  kidGuides: [
    {
      id: 'abuelos-con-demencia',
      title: 'Cuando el abuelo o la abuela tiene demencia',
      subtitle: 'Cómo explicarles a los chicos qué pasa, qué decir según la edad y cómo pueden seguir juntos.',
      readingMin: 6,
      keyPoints: [
        'Los chicos se dan cuenta de los cambios. Decirles la verdad con palabras simples los cuida.',
        'Tres ideas clave: es una enfermedad, no es culpa de nadie y no se contagia.',
        'El abuelo o la abuela puede olvidar un nombre y seguir disfrutando de estar juntos.',
        'Los chicos pueden ayudar, pero no tienen que cuidar.',
      ],
      sections: [
        {
          heading: 'Decir la verdad',
          paragraphs: [
            'Los chicos notan cuando algo cambia. Si nadie les explica, imaginan cosas. A veces piensan que el abuelo está enojado con ellos. Hablar claro les da calma.',
            'Usa palabras simples y la palabra real: demencia o Alzheimer. Por ejemplo: «La abuela tiene una enfermedad en el cerebro. Se llama Alzheimer. Por eso se olvida de cosas».',
          ],
        },
        {
          heading: 'Según la edad',
          paragraphs: [
            'Con los más chicos, alcanzan pocas frases. Explica lo que ven: «El abuelo pregunta lo mismo porque su memoria está enferma». Repite la explicación cuando pregunten de nuevo.',
            'Con los de primaria, puedes contar un poco más. Que hay partes del cerebro que guardan recuerdos, y que esas partes se dañan. Que va a cambiar de a poco.',
            'Con los adolescentes, puedes hablar casi como con un adulto. Escucha sus dudas. Algunos sienten vergüenza o se alejan. En un estudio, muchos adolescentes seguían sintiendo cariño y ganas de ayudar, aunque el vínculo cambiara (Celdrán y colaboradores, 2011).',
          ],
        },
        {
          heading: 'Lo que más preguntan',
          paragraphs: [
            '¿Es mi culpa? No. Nadie hizo nada para que pase. ¿Se contagia? No. ¿Me va a pasar a mí o a ti? Puedes decir que es una enfermedad de personas mayores y que la mayoría no la tiene.',
            '¿Por qué no se acuerda de mí? Explica que la memoria está enferma, pero que el cariño se siente igual. Muchas veces la persona disfruta de la compañía aunque no recuerde el nombre (Boss, 2011).',
          ],
        },
        {
          heading: 'Seguir juntos',
          paragraphs: [
            'Busquen cosas simples para hacer juntos. Escuchar música, mirar fotos viejas, dibujar, regar plantas o tomar algo en la cocina. Visitas cortas suelen ir mejor que largas.',
            'Si el abuelo dice algo raro o se enoja, ayuda al chico a entender que es la enfermedad. Enséñale a no discutir y a cambiar de tema con cariño.',
            'Los chicos pueden ayudar, pero no tienen que cuidar. No los dejes a cargo ni les pidas que guarden secretos. Si un chico está muy triste, con miedo o cambia mucho, consulta con su pediatra.',
          ],
        },
        {
          heading: 'Sus emociones',
          paragraphs: [
            'Es normal que sientan tristeza, miedo, enojo o vergüenza. A veces todo junto. Diles que está bien sentir eso y que pueden contarte.',
            'También es normal que tú estés triste. Mostrar algo de tu tristeza, con calma, les enseña que se puede hablar de lo difícil. Si sientes que no puedes más, llama a la Línea Nacional de Salud Mental, 0800-999-0091.',
          ],
        },
      ],
      phrases: [
        '«La abuela tiene una enfermedad en el cerebro que se llama Alzheimer. Por eso se olvida de cosas»',
        '«No es culpa de nadie, y no se contagia»',
        '«Aunque no se acuerde de tu nombre, le hace bien que estés con ella»',
        '«Si dice algo raro, es la enfermedad. Podemos cambiar de tema juntos»',
        '«Puedes estar triste o enojado. Cuéntame cuando quieras»',
      ],
      caveat: {
        title: 'Con cuidado',
        body: 'Hay pocos estudios sobre cómo hablar de la demencia con chicos. Estas ideas se apoyan en lo que se sabe sobre hablar de enfermedades en familia. Adapta las palabras a tu hijo o hija y a tu cultura.',
      },
      activities: ['como-me-siento', 'mano-en-el-corazon', 'cajita-preocupaciones', 'frasco-de-gratitud'],
      references: [CELDRAN_2011, BOSS_2011, LIVINGSTON_2020],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'demencia', term: 'Demencia', definition: 'Nombre general para enfermedades que dañan el cerebro de a poco y afectan la memoria, el juicio y la conducta. La más común es el Alzheimer.', articleId: 'acompanar-la-demencia' },
    { id: 'sindrome-del-ocaso', term: 'Ocaso (síndrome del atardecer)', definition: 'Aumento de la confusión y la agitación al caer la tarde en algunas personas con demencia. Ayudan la luz, la rutina y menos ruido.', practiceId: 'detective-de-la-agitacion' },
    { id: 'comunicacion-validante', term: 'Comunicación validante', definition: 'Forma de hablar con alguien con demencia que responde a lo que siente, sin discutir lo que dice. Suele seguirse de redirigir hacia otra actividad.', practiceId: 'validar-y-redirigir' },
    { id: 'duelo-anticipado', term: 'Duelo anticipado', definition: 'Duelo que se siente antes de la muerte, mientras la persona sigue viva pero se va perdiendo. Es muy común en familias de personas con demencia.', practiceId: 'despedirse-de-a-poco' },
    { id: 'planificacion-anticipada', term: 'Planificación anticipada', definition: 'Conversar a tiempo sobre los valores y deseos de una persona para su cuidado futuro, por si después no puede decidir.', articleId: 'decisiones-dificiles-demencia', practiceId: 'lo-que-quiere-mi-familiar' },
  ],
};
