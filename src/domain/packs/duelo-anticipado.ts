import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Duelo anticipado»: cuando alguien querido tiene una enfermedad avanzada o terminal,
 * y también para quien está enfermo y piensa en su propio final.
 *  - el duelo que empieza antes de la muerte (Lindemann; Rando) y la culpa o el alivio que trae;
 *  - estar presente sin fingir;
 *  - las conversaciones que importan: perdón, gracias, te quiero, adiós (Byock);
 *  - preguntar qué quiere la persona y llevarlo al equipo de salud (Wright y colaboradores;
 *    planificación anticipada, Sudore y colaboradores; OMS; Ley 26.529 sólo como información);
 *  - cuidarse quien cuida en la recta final (Coelho, de Brito y Barbosa; Pinquart y Sörensen);
 *  - quien está enfermo y piensa en su final, con cuidado (Chochinov y colaboradores), con riesgo 2;
 *  - los chicos y lo que sigue después de la muerte (Stroebe y Schut).
 *
 * No duplica: el duelo anticipado en la demencia («despedirse-de-a-poco»), el duelo ambiguo
 * («duelo-ambiguo-y-cuidado»), el termómetro y los límites de quien cuida, el artículo
 * «cuidados-paliativos», «contarlo-a-otros» y la guía para familias «hablar-de-la-muerte».
 * Los enlaza.
 *
 * Reglas de seguridad del paquete: no hay indicaciones médicas; los cuidados paliativos, los
 * síntomas y las decisiones de tratamiento se conversan con el equipo de salud. Ante ideas de no
 * querer vivir, en quien cuida o en quien está enfermo: 135 (CABA y GBA) / 0800-345-1435, botón
 * Ayuda y 911. Ante agotamiento extremo de quien cuida: pedir relevo y consultar.
 */

const LINDEMANN_1944: Reference = {
  citation: 'Lindemann, E. (1944). Symptomatology and management of acute grief. American Journal of Psychiatry, 101(2), 141–148.',
};
const RANDO_2000: Reference = {
  citation:
    'Rando, T. A. (Ed.). (2000). Clinical dimensions of anticipatory mourning: Theory and practice in working with the dying, their loved ones, and their caregivers. Research Press.',
};
const BYOCK_2004: Reference = { citation: 'Byock, I. (2004). The four things that matter most: A book about living. Free Press.' };
const COELHO_2018: Reference = {
  citation: 'Coelho, A., de Brito, M., & Barbosa, A. (2018). Caregiver anticipatory grief: Phenomenology, assessment and clinical interventions. Current Opinion in Supportive and Palliative Care, 12(1).',
};
const STROEBE_1999: Reference = {
  citation: 'Stroebe, M., & Schut, H. (1999). The dual process model of coping with bereavement: Rationale and description. Death Studies, 23(3), 197–224.',
};
const OMS_2020: Reference = { citation: 'Organización Mundial de la Salud (2020). Cuidados paliativos: nota descriptiva. OMS.' };
const WRIGHT_2008: Reference = {
  citation:
    'Wright, A. A., Zhang, B., Ray, A., Mack, J. W., Trice, E., Balboni, T., Mitchell, S. L., Jackson, V. A., Block, S. D., Maciejewski, P. K., & Prigerson, H. G. (2008). Associations between end-of-life discussions, patient mental health, medical care near death, and caregiver bereavement adjustment. JAMA, 300(14), 1665–1673.',
};
const SUDORE_2017: Reference = {
  citation:
    'Sudore, R. L., Lum, H. D., You, J. J., Hanson, L. C., Meier, D. E., Pantilat, S. Z., … Heyland, D. K. (2017). Defining advance care planning for adults: A consensus definition from a multidisciplinary Delphi panel. Journal of Pain and Symptom Management, 53(5), 821–832.',
};
const LEY_26529: Reference = {
  citation:
    'Ley 26.529 (2009). Derechos del paciente en su relación con los profesionales e instituciones de la salud. Boletín Oficial de la República Argentina. Modificada por la Ley 26.742 (2012).',
};
const CHOCHINOV_2005: Reference = {
  citation:
    'Chochinov, H. M., Hack, T., Hassard, T., Kristjanson, L. J., McClement, S., & Harlos, M. (2005). Dignity therapy: A novel psychotherapeutic intervention for patients near the end of life. Journal of Clinical Oncology, 23(24), 5520–5525.',
};
const PINQUART_2003: Reference = {
  citation: 'Pinquart, M., & Sörensen, S. (2003). Differences between caregivers and noncaregivers in psychological health and physical health: A meta-analysis. Psychology and Aging, 18(2), 250–267.',
  doi: '10.1037/0882-7974.18.2.250',
};
const SPEECE_1984: Reference = {
  citation: 'Speece, M. W., & Brent, S. B. (1984). Children’s understanding of death: A review of three components of a death concept. Child Development, 55(5), 1671–1686.',
};
const DYREGROV_2008: Reference = { citation: 'Dyregrov, A. (2008). Grief in children: A handbook for adults (2.ª ed.). Jessica Kingsley.' };

/** Aviso común: ideas de no querer vivir, agotamiento extremo y nada de indicaciones médicas. */
const CUIDADO =
  'Si tú, o la persona enferma, piensan en no querer vivir o en hacerse daño, llama al 135 (CABA y GBA) o al 0800-345-1435 desde el resto del país, o usa el botón Ayuda. Si hay riesgo inmediato, llama al 911. Si estás al límite del cansancio, pide relevo hoy y consulta. Los síntomas y los cuidados se hablan con el equipo de salud.';

export const DUELO_ANTICIPADO_PACK: ContentPack = {
  id: 'duelo-anticipado',

  // ================================================================== prácticas
  practices: [
    {
      id: 'duelo-antes-de-tiempo',
      title: 'Ya empecé a despedirme',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Unos minutos para nombrar lo que sientes mientras alguien querido se está muriendo, también la culpa o el alivio, sin juzgarte.',
      mechanism: 'Nombrar lo que sientes, en vez de taparlo, baja la culpa y el aislamiento. Ver lo que ya se perdió y lo que todavía hay ayuda a no perder también el presente.',
      evidenceLevel: 'preliminar',
      evidence: [LINDEMANN_1944, RANDO_2000, COELHO_2018],
      howItWorks: [
        'Erich Lindemann usó la expresión «duelo anticipado» en 1944. Vio que algunas personas empezaban a hacer el duelo antes de una pérdida que temían (Lindemann, 1944). Hoy se usa sobre todo cuando alguien querido tiene una enfermedad avanzada.',
        'Therese Rando explicó que este duelo no es sólo tristeza por lo que viene. También es llorar lo que ya se fue: planes, charlas, una forma de estar juntos. Y es estar con la persona mientras tanto (Rando, 2000).',
        'Es muy común sentir cosas que parecen opuestas. Tristeza y cansancio. Amor y enojo. Ganas de que dure y ganas de que termine el sufrimiento. Sentir eso no es falta de amor.',
        'Si tu familiar tiene demencia, la práctica «Despedirse de a poco» está pensada para esa situación.',
      ],
      tips: [
        'No hace falta ordenar lo que sientes. Alcanza con nombrarlo.',
        'Pensar en el después, en el velorio o en los trámites, no es desear la muerte. Es la mente que se prepara.',
        'Puedes hacer esta práctica en el pasillo del hospital o en el colectivo.',
      ],
      obstacles: [
        { q: 'Me siento culpable por estar de duelo si todavía vive.', a: 'Es muy común. No estás adelantando nada ni queriéndola menos. Estás viendo lo que ya cambió, y eso duele.' },
        { q: 'A veces quiero que todo termine.', a: 'Muchas personas lo sienten cuando ven sufrir a alguien que quieren, o cuando llevan meses cuidando. Suele ser deseo de que termine el sufrimiento, no la persona.' },
      ],
      cautions: CUIDADO,
      steps: [
        { title: 'Llegar', instruction: 'Pon una mano en el pecho. Respira despacio tres veces.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que siento', instruction: 'Nota qué hay hoy en ti. Tristeza, miedo, cansancio, enojo o alivio. Nómbralo en voz baja.', durationSec: 60, kind: 'reflection' },
        { title: 'Sin juicio', instruction: 'Si aparece culpa por sentir eso, dite: «Esto también es parte de querer y de cuidar».', durationSec: 40, kind: 'breath' },
        { title: 'Lo que ya cambió', instruction: 'Escribe una cosa que ya se perdió. Un plan, una charla, una forma de estar juntos.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que todavía hay', instruction: 'Escribe una cosa que todavía comparten. Una mano, una mirada, una canción, un rato juntos.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Vuelve a la mano en el pecho. Dite: «Puedo despedirme y estar presente a la vez».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'estar-sin-fingir',
      title: 'Estar sin fingir',
      family: 'attentional',
      skills: ['attention', 'compassion'],
      summary: 'Prepararte para una visita a alguien que se está muriendo: estar presente, escuchar y no tener que hacerte el fuerte ni tener las palabras justas.',
      mechanism: 'Fingir que todo está bien cansa y deja a cada uno a solas con lo que siente. Estar con atención, al ritmo de la persona, permite un encuentro más verdadero.',
      evidenceLevel: 'preliminar',
      evidence: [RANDO_2000, BYOCK_2004],
      howItWorks: [
        'Muchas familias sienten que tienen que mostrarse alegres o hablar de cualquier cosa menos de la enfermedad. A veces la persona enferma hace lo mismo para cuidarlas. Así, todos callan lo que más pesa.',
        'Rando describe que acompañar a alguien que se muere incluye estar con esa persona en lo que vive ahora, no sólo prepararse para perderla (Rando, 2000). Ira Byock, médico de cuidados paliativos, insiste en que la presencia vale más que las palabras perfectas (Byock, 2004).',
        'No se trata de hablar de la muerte a la fuerza. Se trata de seguir a la persona: si quiere hablar, escuchar; si quiere reír o ver la tele, acompañar eso.',
      ],
      tips: [
        'Deja el celular en el bolsillo durante un rato de la visita.',
        'Una pregunta abierta ayuda: «¿Cómo estás hoy, de verdad?».',
        'El silencio compartido también acompaña.',
        'Si la visita te deja muy mal, date un rato a solas al salir antes de volver a tus cosas.',
      ],
      obstacles: [
        { q: 'No sé qué decir.', a: 'Puedes decir justo eso: «No sé qué decir, pero quiero estar». Suele alcanzar.' },
        { q: 'Si lloro delante, la voy a angustiar.', a: 'Puede pasar que se emocionen juntos, y eso no es malo. Si sientes que necesitas llorar mucho, sal un momento y vuelve.' },
      ],
      steps: [
        { title: 'Antes de entrar', instruction: 'Antes de la visita, apoya los pies en el piso. Respira despacio tres veces.', durationSec: 30, kind: 'breath' },
        { title: 'Soltar el papel', instruction: 'Recuerda que no tienes que estar alegre ni tener las palabras justas. Alcanza con estar.', durationSec: 30, kind: 'instruction' },
        { title: 'Mirar', instruction: 'Al llegar, mira a la persona antes que a los aparatos o al reloj. Nota cómo está hoy.', durationSec: 45, kind: 'instruction' },
        { title: 'Seguir su ritmo', instruction: 'Pregunta poco y escucha mucho. Por ejemplo: «¿De qué tienes ganas hoy?». Si quiere silencio, acompaña el silencio.', durationSec: 60, kind: 'instruction' },
        { title: 'Lo verdadero', instruction: 'Si te emocionas, no hace falta esconderlo. Puedes decir: «Me cuesta verte así, y quiero estar acá».', durationSec: 45, kind: 'instruction' },
        { title: 'El tacto', instruction: 'Si a la persona le gusta, toma su mano o acomoda su manta. El cuerpo también acompaña.', durationSec: 30, kind: 'instruction' },
        { title: 'Después', instruction: 'Al salir, respira despacio. Nota qué te quedó. Date un rato antes de seguir con el día.', durationSec: 40, kind: 'breath' },
      ],
    },
    {
      id: 'las-cuatro-frases',
      title: 'Perdón, gracias, te quiero, adiós',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Preparar, si lo deseas, las palabras que quieres decirle a alguien que se está muriendo, o que quieres decir tú si eres quien está enfermo.',
      mechanism: 'Decir lo importante a tiempo, aunque sea una frase, deja menos cosas pendientes. Elegir las palabras con calma hace más fácil animarse.',
      evidenceLevel: 'preliminar',
      evidence: [BYOCK_2004, RANDO_2000],
      howItWorks: [
        'Ira Byock acompañó a muchas personas al final de la vida. Propone cuatro frases que suelen importar: «Por favor, perdóname», «Te perdono», «Gracias» y «Te quiero». A eso suma, cuando llega el momento, decir adiós (Byock, 2004).',
        'No es una receta. No hace falta decir las cuatro, ni decirlas así. Algunas relaciones fueron difíciles, y está bien elegir sólo lo que sea verdadero para ti.',
        'También sirve para quien está enfermo. A veces es la persona que se muere la que quiere pedir perdón, agradecer o despedirse.',
      ],
      tips: [
        'Una frase dicha vale más que una carta perfecta que no se entrega.',
        'Si no puedes decirlo en persona, puedes escribirlo, grabar un audio o decirlo al oído.',
        'Si la persona ya no habla, muchas familias igual le dicen estas cosas. Lo decides tú.',
      ],
      obstacles: [
        { q: 'La relación fue muy difícil o me hizo daño.', a: 'No tienes que perdonar ni decir lo que no sientes. Puedes elegir una sola frase, o ninguna. A veces lo que se escribe es para ti y no se entrega.' },
        { q: 'Decirlo es como aceptar que se va a morir.', a: 'Puede sentirse así. Pero un «gracias» o un «te quiero» también son para hoy, y se pueden decir muchas veces.' },
      ],
      cautions: CUIDADO,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Piensa en la persona y en lo que vivieron juntos.', durationSec: 30, kind: 'breath' },
        { title: 'Gracias', instruction: 'Escribe algo que le agradeces. Algo concreto: un gesto, una época, una forma de cuidarte.', durationSec: 60, kind: 'reflection' },
        { title: 'Te quiero', instruction: 'Escribe cómo le dirías que la quieres, con tus palabras. Puede ser una frase corta.', durationSec: 45, kind: 'reflection' },
        { title: 'Perdón', instruction: 'Si lamentas algo, escribe cómo pedirías perdón. Si hay algo que perdonar, escribe sólo lo que de verdad quieras decir.', durationSec: 60, kind: 'reflection' },
        { title: 'Adiós', instruction: 'Piensa si quieres despedirte con palabras. Puede ser «gracias por todo» o «vamos a estar bien».', durationSec: 45, kind: 'reflection' },
        { title: 'Cómo y cuándo', instruction: 'Elige cómo decirlo: en persona, en una carta, en un audio o al oído. Elige también cuándo.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho. Dite: «Lo que importa, lo puedo decir a mi manera».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'preguntar-lo-que-quiere',
      title: 'Preguntar qué quiere',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Preparar una charla con la persona enferma sobre lo que le importa y lo que quiere para sus cuidados, y llevar eso al equipo de salud.',
      mechanism: 'Saber lo que la persona quiere quita peso a las decisiones de la familia y baja las peleas. Hablarlo no le quita esperanza: le devuelve la voz.',
      evidenceLevel: 'moderada',
      evidence: [WRIGHT_2008, SUDORE_2017, OMS_2020, LEY_26529],
      howItWorks: [
        'En un estudio con personas con cáncer avanzado, quienes habían hablado del final con su médico no tuvieron más depresión ni más preocupación. Recibieron menos tratamientos agresivos al final, y sus familias atravesaron mejor el duelo (Wright y colaboradores, 2008). Es un estudio de asociación, no un ensayo.',
        'La planificación anticipada es conversar sobre los valores y deseos de una persona para sus cuidados, por si después no puede decidir (Sudore y colaboradores, 2017). Lo mejor es hacerlo mientras la persona puede participar.',
        'Los cuidados paliativos alivian el dolor y otros síntomas, y acompañan lo emocional, lo social y lo espiritual, también de la familia (Organización Mundial de la Salud, 2020). Se piden y se conversan con el equipo de salud.',
        'En la Argentina, la Ley 26.529, modificada por la Ley 26.742, prevé las directivas anticipadas. Es información general: para lo legal, consulta al equipo y a un escribano o abogado.',
      ],
      tips: [
        'Empieza por los valores, no por los tratamientos: «¿Qué es lo que más te importa ahora?».',
        'No hace falta resolver todo en una charla. Pueden ser varias, cortas.',
        'Si la persona no quiere hablar, respeta. Puedes dejar la puerta abierta: «Cuando quieras, te escucho».',
        'Pidan una reunión con el equipo de salud para hablarlo juntos. Si la familia no se pone de acuerdo, el equipo puede ayudar.',
      ],
      obstacles: [
        { q: 'Si pregunto, va a pensar que me rendí.', a: 'Puedes decir para qué preguntas: «Quiero cuidarte como tú quieras». Preguntar no es bajar los brazos.' },
        { q: 'Ya no puede decidir.', a: 'Entonces se busca lo que habría querido. La práctica «Decidir con lo que la persona quería» te ayuda a prepararlo con la familia.' },
      ],
      cautions:
        'Esto es información general, no consejo médico ni legal. Los tratamientos, los síntomas y el lugar de cuidado se deciden con el equipo de salud. ' + CUIDADO,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Piensa en la persona como es, no sólo en su enfermedad.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que sabes', instruction: 'Anota lo que ya sabes de lo que quiere. Algo que dijo alguna vez, aunque sea al pasar.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que no sabes', instruction: 'Escribe dos preguntas para hacerle. Por ejemplo: «¿Qué es lo que más te importa ahora?» o «¿Qué te preocupa?».', durationSec: 60, kind: 'reflection' },
        { title: 'Abrir la charla', instruction: 'Prepara una frase para empezar, sin apuro. Por ejemplo: «Quiero cuidarte como tú quieras. ¿Podemos hablar de eso?».', durationSec: 45, kind: 'reflection' },
        { title: 'Escuchar', instruction: 'Si quiere hablar, escucha sin corregir. Si no quiere, respeta. Puedes volver a preguntar otro día.', durationSec: 45, kind: 'instruction' },
        { title: 'Para el equipo', instruction: 'Anota lo que conviene hablar con el equipo de salud. Por ejemplo, el dolor, dónde quiere estar o qué le preocupa.', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Dite: «Preguntar también es una forma de cuidar».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'cuidarme-en-la-recta-final',
      title: 'Cuidarte en la recta final',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Revisar cómo estás cuando cuidas a alguien que se está muriendo, elegir un cuidado mínimo para hoy y pedir un relevo concreto.',
      mechanism: 'En las últimas semanas el cuidado suele volverse más intenso. Un cuidado mínimo y un relevo a tiempo evitan llegar al límite y te dejan estar con más presencia.',
      evidenceLevel: 'preliminar',
      evidence: [PINQUART_2003, COELHO_2018],
      howItWorks: [
        'Quienes cuidan a un familiar tienen más estrés y depresión que quienes no cuidan, y su salud física también se resiente (Pinquart y Sörensen, 2003).',
        'Cuando la enfermedad está avanzada, al cansancio se suma el duelo anticipado. Una revisión lo describe como frecuente en quienes cuidan y ligado a la sobrecarga (Coelho y colaboradores, 2018). Cuidarte no es egoísmo: es lo que te permite seguir.',
        'Si quieres revisar tu cansancio con más detalle, prueba «El termómetro de quien cuida». Para poner un límite, «Límites para seguir cuidando».',
      ],
      tips: [
        'Acepta la ayuda que te ofrezcan, aunque sea chica. Di qué necesitas: una comida, un trámite, una noche.',
        'Arma turnos con la familia y amigos. Aunque sean de pocas horas.',
        'Una hoja con lo básico de la persona hace más fácil que otro te releve. Prueba «Una guía para quien te releva».',
        'Pregunta al equipo de salud qué apoyo hay para la familia.',
      ],
      obstacles: [
        { q: 'Si me voy y pasa algo, no me lo voy a perdonar.', a: 'Es un miedo muy común. Nadie puede estar todo el tiempo. Deja tu teléfono a quien te releva y pide que te avise.' },
      ],
      cautions: CUIDADO,
      steps: [
        { title: 'Llegar', instruction: 'Siéntate un momento. Respira despacio tres veces.', durationSec: 30, kind: 'breath' },
        { title: 'Cómo estás', instruction: 'Del cero al diez, ¿cuánto cansancio tienes hoy? ¿Cuántas horas dormiste anoche? Anótalo.', durationSec: 40, kind: 'reflection' },
        { title: 'Lo mínimo', instruction: 'Elige un cuidado mínimo para hoy. Comer algo caliente, una ducha, salir diez minutos o una siesta.', durationSec: 45, kind: 'reflection' },
        { title: 'El relevo', instruction: 'Escribe el nombre de alguien que pueda quedarse un rato. Anota qué le vas a pedir y para cuándo.', durationSec: 60, kind: 'reflection' },
        { title: 'Soltar algo', instruction: 'Anota una tarea que puede esperar o que otra persona puede hacer. Compras, trámites o avisar a la familia.', durationSec: 45, kind: 'reflection' },
        { title: 'Las señales', instruction: 'Si no duermes hace días, casi no comes o sientes que no puedes más, pide relevo hoy. Y consulta.', durationSec: 40, kind: 'instruction' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho. Dite: «Cuidarme también es cuidar».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'cuando-pienso-en-mi-final',
      title: 'Cuando pienso en mi final',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Para quien está enfermo: darle un lugar a lo que preocupa del final, separar lo que el equipo puede aliviar y pensar en lo que importa en este tiempo.',
      mechanism: 'Poner en palabras los miedos les quita fuerza. Distinguir lo que se puede aliviar y lo que importa ayuda a vivir este tiempo con más sentido y menos soledad.',
      evidenceLevel: 'preliminar',
      evidence: [CHOCHINOV_2005, WRIGHT_2008, BYOCK_2004],
      howItWorks: [
        'Pensar en la propia muerte es muy común cuando una enfermedad avanza. Hablarlo no la acerca. En un estudio, las personas que hablaron del final con su médico no tuvieron más depresión (Wright y colaboradores, 2008).',
        'Harvey Chochinov creó la terapia de la dignidad. En ella, una persona cerca del final cuenta lo que fue importante en su vida y lo que quiere dejar a los suyos. En su primer estudio, muchas personas dijeron que les dio sentido (Chochinov y colaboradores, 2005). Esa terapia la hace un profesional; esta práctica sólo toma la idea.',
        'Muchos miedos del final tienen respuesta. El dolor, la falta de aire o la angustia se pueden aliviar. Dilo a tu equipo de salud y pregunta por los cuidados paliativos.',
      ],
      tips: [
        'Hazla sólo si tienes ganas. Puedes hacer un paso y dejar el resto para otro día.',
        'Puedes pedirle a alguien de confianza que escriba por ti.',
        'Lo que escribas puede ser sólo para ti, o puedes compartirlo.',
      ],
      obstacles: [
        { q: 'Mi familia no quiere que hable de esto.', a: 'Muchas veces callan para cuidarte, y tú callas para cuidarlos. Puedes decir: «Necesito hablar de esto. No hace falta que tengas respuestas».' },
      ],
      cautions:
        'Haz esta práctica sólo si tienes ganas. Si hoy pesa demasiado, prueba «Mano en el pecho». Si sientes deseos de morir antes, ideas de hacerte daño o una angustia que no cede, dilo a tu equipo de salud. Si piensas en hacerte daño, llama al 135 (CABA y GBA) o al 0800-345-1435, usa el botón Ayuda o llama al 911.',
      steps: [
        { title: 'Prepararte', instruction: 'Busca un lugar cómodo. Recuerda que puedes parar en cualquier momento.', durationSec: 30, kind: 'instruction' },
        { title: 'Respirar', instruction: 'Pon una mano en el pecho. Respira despacio y siente el calor de la mano.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que preocupa', instruction: 'Escribe lo que más te preocupa al pensar en el final. Puede ser el dolor, tu familia, estar solo o sola, o no saber.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que se alivia', instruction: 'Marca lo que tu equipo de salud puede ayudar a aliviar. Anota qué le vas a preguntar.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que importa', instruction: 'Escribe qué te importa más en este tiempo. Personas, lugares, momentos, cómo quieres que te cuiden.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que dejo', instruction: 'Piensa si hay algo que quieres decir o dejar a alguien. Una historia, un consejo, un gracias.', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Vuelve a la mano en el pecho. Dite: «Mi vida importa, y este tiempo también».', durationSec: 30, kind: 'breath' },
      ],
    },
  ],

  meta: {
    'duelo-antes-de-tiempo': { level: 'iniciacion', approaches: ['cft', 'mindfulness'], module: 'duelo' },
    'estar-sin-fingir': { level: 'iniciacion', approaches: ['mindfulness', 'humanista'], module: 'duelo' },
    'cuidarme-en-la-recta-final': { level: 'iniciacion', approaches: ['cft', 'soluciones'], module: 'afrontamiento' },
    'las-cuatro-frases': { level: 'intermedio', approaches: ['humanista', 'escritura'], module: 'duelo', prerequisites: ['duelo-antes-de-tiempo'] },
    'preguntar-lo-que-quiere': { level: 'intermedio', approaches: ['act', 'sistemica'], module: 'etapas', prerequisites: ['estar-sin-fingir'] },
    'cuando-pienso-en-mi-final': {
      level: 'intermedio',
      approaches: ['logoterapia', 'act'],
      module: 'etapas',
      prerequisites: ['la-ola-del-diagnostico'],
      risk: { level: 2, alternative: 'mano-en-el-pecho' },
    },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'duelo-anticipado-final-de-vida',
      title: 'Cuando alguien querido se está muriendo',
      subtitle: 'El duelo que empieza antes, estar presente, lo que importa decir, preguntar qué quiere la persona, cuidarte, los chicos y lo que viene después.',
      category: 'Etapas de la vida',
      readingMin: 10,
      keyPoints: [
        'Es común sentir duelo antes de la muerte, y también culpa, enojo o alivio.',
        'No hace falta fingir: alcanza con estar, escuchar y seguir el ritmo de la persona.',
        'Gracias, te quiero, perdón y adiós: decir lo importante a tiempo, a tu manera.',
        'Preguntar qué quiere la persona y hablarlo con el equipo de salud quita peso a las decisiones.',
        'Quien cuida necesita relevo. Ante ideas de no querer vivir: 135, 0800-345-1435 o 911.',
      ],
      sections: [
        {
          heading: 'Un duelo que empieza antes',
          paragraphs: [
            'Cuando alguien querido tiene una enfermedad avanzada, el duelo suele empezar antes de la muerte. Erich Lindemann usó la expresión «duelo anticipado» en 1944 (Lindemann, 1944). Hoy se usa sobre todo en familias que acompañan una enfermedad grave.',
            'Therese Rando explicó que no es sólo llorar lo que viene. También es llorar lo que ya se perdió, estar con la persona mientras tanto y empezar a imaginar la vida después (Rando, 2000). Todo eso a la vez, y muchas veces con cansancio.',
            'Si tu familiar tiene demencia, este duelo tiene rasgos propios. El artículo «Acompañar a un familiar con demencia» habla de eso.',
          ],
        },
        {
          heading: 'Lo que se siente, y lo que da culpa',
          paragraphs: [
            'Tristeza, miedo, enojo, cansancio, ganas de huir. También alivio en un día bueno, o ganas de que el sufrimiento termine. Pensar en el velorio o en los trámites. Todo eso es común y no habla de falta de amor.',
            'Una revisión encontró que el duelo anticipado es frecuente en quienes cuidan y que se liga a la sobrecarga y al aislamiento (Coelho y colaboradores, 2018). Nombrarlo y compartirlo ayuda a no cargarlo a solas.',
          ],
        },
        {
          heading: 'Estar sin fingir',
          paragraphs: [
            'A veces la familia se muestra alegre para cuidar a la persona enferma, y ella hace lo mismo para cuidar a la familia. Así, todos callan lo que más pesa. No hace falta hablar de la muerte a la fuerza. Pero tampoco hace falta fingir.',
            'Estar presente es mirar a la persona, escuchar, seguir su ritmo y aceptar el silencio. Puedes decir «no sé qué decir, pero quiero estar». Suele alcanzar.',
          ],
        },
        {
          heading: 'Lo que importa decir',
          paragraphs: [
            'Ira Byock, médico de cuidados paliativos, propone cuatro frases que suelen importar al final: perdóname, te perdono, gracias y te quiero. Y, cuando llega el momento, adiós (Byock, 2004).',
            'No es una obligación ni una receta. Si la relación fue difícil o te hizo daño, no tienes que perdonar. Puedes elegir sólo lo que sea verdadero para ti, decirlo en persona, por carta o en un audio.',
          ],
        },
        {
          heading: 'Preguntar qué quiere la persona',
          paragraphs: [
            'Saber qué quiere la persona enferma quita peso a la familia. ¿Qué le importa más? ¿Dónde quiere estar? ¿Qué le preocupa? En un estudio con personas con cáncer avanzado, hablar del final con el médico no se asoció a más depresión, y sus familias atravesaron mejor el duelo (Wright y colaboradores, 2008).',
            'Los cuidados paliativos alivian el dolor y otros síntomas y acompañan también a la familia (Organización Mundial de la Salud, 2020). No significan rendirse. Se piden y se conversan con el equipo de salud. El artículo «Cuidados paliativos, sin miedo» lo explica.',
            'En la Argentina, la Ley 26.529, modificada por la Ley 26.742, prevé las directivas anticipadas. Es información general: lo médico se habla con el equipo y lo legal con un escribano o abogado.',
          ],
        },
        {
          heading: 'Quien cuida también',
          paragraphs: [
            'Cuidar a alguien cansa el cuerpo y el ánimo (Pinquart y Sörensen, 2003). En la recta final el cuidado suele volverse más intenso. Aceptar ayuda, armar turnos y pedir relevo no es abandonar.',
            'Si no duermes hace días, casi no comes o sientes que no puedes más, pide relevo hoy y consulta. Si piensas en no querer vivir, llama al 135 o al 0800-345-1435, o usa el botón Ayuda.',
          ],
        },
        {
          heading: 'Los chicos',
          paragraphs: [
            'Los chicos se dan cuenta de que algo pasa. Callar puede hacer que imaginen algo peor o que se sientan culpables. Ayuda decir la verdad con palabras simples, según su edad: «El abuelo está muy enfermo y los médicos dicen que se va a morir».',
            'Entender que la muerte es para siempre lleva tiempo, y muchos chicos lo logran entre los cinco y los siete años (Speece y Brent, 1984). Pueden llorar y al rato jugar (Dyregrov, 2008). La guía para familias «Hablar de la muerte con chicos» te acompaña.',
          ],
        },
        {
          heading: 'Lo que viene después',
          paragraphs: [
            'Después de la muerte, algunas personas sienten alivio. Alivio porque terminó el sufrimiento, o porque terminó un cuidado muy duro. El alivio puede venir con culpa. Las dos cosas pueden convivir con el amor.',
            'Haber sentido duelo antes no siempre hace más liviano el después. En el duelo es normal ir y venir entre el dolor y la vida que sigue (Stroebe y Schut, 1999). El programa «Atravesar un duelo» puede acompañarte.',
          ],
        },
        {
          heading: 'Cuándo consultar',
          paragraphs: [
            'Consulta con un profesional si la tristeza no te deja funcionar, si dejas de comer o de dormir, o si el cansancio es extremo. Muchos equipos de cuidados paliativos tienen psicólogos para la familia.',
            'Si tú o la persona enferma piensan en no querer vivir o en hacerse daño, llama al 135 (CABA y GBA) o al 0800-345-1435, o usa el botón Ayuda. Ante un riesgo inmediato, llama al 911.',
          ],
        },
      ],
      caveat: {
        title: 'Lo que esta sección no hace',
        body: 'Aquí no hay indicaciones médicas. Los síntomas, los tratamientos y los cuidados paliativos se conversan con el equipo de salud. El estudio de Wright y colaboradores muestra asociaciones, no prueba causas. La investigación sobre duelo anticipado es todavía despareja, y no muestra que sufrir más antes haga más fácil el después.',
      },
      related: {
        practices: ['duelo-antes-de-tiempo', 'estar-sin-fingir', 'las-cuatro-frases', 'preguntar-lo-que-quiere', 'cuidarme-en-la-recta-final', 'cuando-pienso-en-mi-final', 'despedirse-de-a-poco', 'contarlo-a-otros', 'termometro-del-cuidador'],
        articles: ['pensar-en-el-propio-final', 'cuidados-paliativos', 'enfermedad-grave', 'acompanar-la-demencia', 'duelo'],
      },
      references: [LINDEMANN_1944, RANDO_2000, COELHO_2018, BYOCK_2004, WRIGHT_2008, OMS_2020, LEY_26529, PINQUART_2003, SPEECE_1984, DYREGROV_2008, STROEBE_1999],
    },
    {
      id: 'pensar-en-el-propio-final',
      title: 'Cuando eres tú quien piensa en su final',
      subtitle: 'Para quien tiene una enfermedad avanzada: los miedos, lo que se puede aliviar, lo que importa y cómo hablarlo con los tuyos.',
      category: 'Etapas de la vida',
      readingMin: 6,
      keyPoints: [
        'Pensar en la propia muerte es común cuando una enfermedad avanza. Hablarlo no la acerca.',
        'El dolor, la falta de aire o la angustia se pueden aliviar: dilo a tu equipo.',
        'Pensar en lo que importa y en lo que quieres dejar puede dar sentido a este tiempo.',
        'A veces todos callan para cuidarse. Tú eliges de qué hablar y con quién.',
      ],
      sections: [
        {
          heading: 'Es común pensar en esto',
          paragraphs: [
            'Cuando una enfermedad avanza, muchas personas piensan en su muerte. Aparecen preguntas, miedos y también tristeza por lo que se deja. Es una reacción esperable, no una señal de que te estás rindiendo.',
            'Hablarlo no la acerca. En un estudio, las personas con cáncer avanzado que hablaron del final con su médico no tuvieron más depresión ni más preocupación (Wright y colaboradores, 2008).',
          ],
        },
        {
          heading: 'Lo que se puede aliviar',
          paragraphs: [
            'Muchos miedos del final tienen que ver con sufrir: el dolor, la falta de aire, la angustia o ser una carga. Los cuidados paliativos buscan aliviar eso y acompañar también lo emocional y lo espiritual (Organización Mundial de la Salud, 2020).',
            'Dile a tu equipo de salud qué te preocupa. Puedes preguntar si hay un equipo de cuidados paliativos en tu hospital o tu obra social. Lo que corresponde en tu caso lo decides con ellos.',
          ],
        },
        {
          heading: 'Lo que importa y lo que dejas',
          paragraphs: [
            'Harvey Chochinov creó la terapia de la dignidad, en la que una persona cerca del final cuenta lo que fue importante en su vida y lo que quiere dejar a los suyos. En su primer estudio, muchas personas dijeron que les dio sentido (Chochinov y colaboradores, 2005). La hace un profesional formado.',
            'Por tu cuenta, puedes pensar qué te importa en este tiempo y qué quieres decir. Un gracias, un perdón, una historia o un consejo (Byock, 2004).',
          ],
        },
        {
          heading: 'Con los tuyos',
          paragraphs: [
            'A veces la familia calla para cuidarte, y tú callas para cuidarla. Así, cada uno queda a solas con lo que siente. Puedes decir: «Necesito hablar de esto. No hace falta que tengas respuestas».',
            'También puedes decidir no hablar de ciertas cosas, o hablarlas sólo con alguien. Si quieres dejar claro qué cuidados deseas, la planificación anticipada y las directivas anticipadas se conversan con tu equipo (Sudore y colaboradores, 2017).',
          ],
        },
        {
          heading: 'Cuándo pedir ayuda',
          paragraphs: [
            'Si la angustia no cede, si no puedes dormir por el miedo o si sientes deseos de morir antes, dilo a tu equipo de salud. Muchos equipos tienen psicólogos que acompañan en esto.',
            'Si piensas en hacerte daño, llama al 135 (CABA y GBA) o al 0800-345-1435, o usa el botón Ayuda. Ante un riesgo inmediato, llama al 911.',
          ],
        },
      ],
      caveat: {
        title: 'Con cuidado',
        body: 'Esta sección no da indicaciones médicas ni legales. Lee a tu ritmo y deja lo que hoy pese demasiado. La terapia de la dignidad la ofrecen profesionales formados; aquí sólo se toma la idea de pensar en lo que importa.',
      },
      related: { practices: ['cuando-pienso-en-mi-final', 'las-cuatro-frases', 'valores-con-la-enfermedad', 'preguntar-a-mi-ritmo', 'mano-en-el-pecho'], articles: ['cuidados-paliativos', 'enfermedad-grave', 'duelo-anticipado-final-de-vida'] },
      references: [WRIGHT_2008, OMS_2020, CHOCHINOV_2005, BYOCK_2004, SUDORE_2017],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'acompanar-el-final',
      title: 'Acompañar el final',
      subtitle: 'Cuatro semanas para estar presente mientras alguien querido se está muriendo',
      description:
        'Para quien acompaña a alguien con una enfermedad avanzada. Le darás lugar a lo que sientes, prepararás las conversaciones que importan, preguntarás qué quiere la persona y cuidarás tu propio cansancio. La última semana mira lo que viene después. Ve a tu ritmo: puedes saltar o repetir semanas.',
      basis: 'Rando (2000); Byock (2004); Wright y colaboradores (2008); Coelho, de Brito y Barbosa (2018); Stroebe y Schut (1999).',
      rhythm: 'Unos minutos al día, cuando puedas.',
      weeks: [
        {
          title: 'Semana 1 · Lo que siento',
          focus: 'El duelo que empieza antes',
          description: 'Leerás qué es el duelo anticipado y nombrarás lo que sientes, también la culpa o el alivio, sin juzgarte.',
          practiceIds: ['duelo-antes-de-tiempo', 'pausa-autocompasion'],
          articleIds: ['duelo-anticipado-final-de-vida'],
          journalType: 'escritura-expresiva',
        },
        {
          title: 'Semana 2 · Estar y decir',
          focus: 'Presencia y conversaciones que importan',
          description: 'Practicarás estar sin fingir y prepararás, si lo deseas, un gracias, un te quiero, un perdón o un adiós.',
          practiceIds: ['estar-sin-fingir', 'las-cuatro-frases'],
          articleIds: [],
          journalType: 'carta-gratitud',
        },
        {
          title: 'Semana 3 · Lo que quiere y quién cuida',
          focus: 'Sus deseos, el equipo y tu cansancio',
          description: 'Prepararás una charla sobre lo que la persona quiere, pensarás cómo contarlo a los chicos y pedirás un relevo concreto.',
          practiceIds: ['preguntar-lo-que-quiere', 'cuidarme-en-la-recta-final', 'contarlo-a-otros'],
          articleIds: ['cuidados-paliativos'],
          journalType: 'conversacion',
        },
        {
          title: 'Semana 4 · Lo que viene',
          focus: 'Después de la muerte',
          description: 'Conocerás las olas del duelo y pensarás a quién pedir ayuda. Puedes hacer esta semana antes o después de la muerte.',
          practiceIds: ['ola-de-duelo', 'ayuda-en-el-duelo'],
          articleIds: ['duelo'],
          journalType: 'carta-compasiva',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-duelo-antes-de-la-despedida',
      title: 'Ya estoy de duelo',
      subtitle: 'Cuando alguien querido se está muriendo.',
      slides: [
        { heading: 'Antes de la muerte', text: 'Cuando alguien querido está muy enfermo, el duelo suele empezar antes. Se llama duelo anticipado.' },
        { heading: 'Lo que ya se fue', text: 'No es sólo miedo a lo que viene. También duele lo que ya cambió: un plan, una charla, una forma de estar juntos.' },
        { heading: 'Todo a la vez', text: 'Tristeza, enojo, cansancio y amor pueden estar en el mismo día. Es normal.' },
        { heading: 'Lo que todavía hay', text: 'Una mano, una mirada, una canción. Puedes despedirte y estar presente a la vez.' },
        { heading: 'Si pesa mucho', text: 'Si tú o la persona enferma piensan en no querer vivir, llama al 135 o al 0800-345-1435. O usa el botón Ayuda.' },
      ],
      related: { practices: ['duelo-antes-de-tiempo', 'estar-sin-fingir'], articles: ['duelo-anticipado-final-de-vida'] },
      references: [LINDEMANN_1944, RANDO_2000],
    },
    {
      id: 'pildora-alivio-y-culpa',
      title: 'El alivio no es falta de amor',
      subtitle: 'Culpa, alivio y ganas de que termine.',
      slides: [
        { heading: 'Ganas de que termine', text: 'Después de meses de cuidar, muchas personas desean que todo termine. Suele ser deseo de que termine el sufrimiento.' },
        { heading: 'Pensar en el después', text: 'Pensar en el velorio o en los trámites no es desear la muerte. Es la mente que se prepara.' },
        { heading: 'Después', text: 'Tras la muerte, algunas personas sienten alivio. Alivio por el fin del dolor, o de un cuidado muy duro.' },
        { heading: 'Alivio y culpa', text: 'El alivio puede venir con culpa. Las dos cosas pueden estar junto al amor.' },
        { heading: 'Ir y venir', text: 'En el duelo es normal ir y venir entre el dolor y la vida que sigue. Date tiempo.' },
      ],
      related: { practices: ['duelo-antes-de-tiempo', 'ola-de-duelo'], articles: ['duelo-anticipado-final-de-vida', 'duelo'] },
      references: [COELHO_2018, STROEBE_1999],
    },
    {
      id: 'pildora-cuatro-frases',
      title: 'Perdón, gracias, te quiero, adiós',
      subtitle: 'Las palabras que suelen importar al final.',
      slides: [
        { heading: 'Cuatro frases', text: 'Ira Byock, médico de cuidados paliativos, habla de cuatro frases: perdóname, te perdono, gracias y te quiero.' },
        { heading: 'Y un adiós', text: 'Cuando llega el momento, también puede importar decir adiós. Con tus palabras.' },
        { heading: 'No es una receta', text: 'No hace falta decir todas. Si la relación te hizo daño, no tienes que perdonar.' },
        { heading: 'A tu manera', text: 'En persona, en una carta, en un audio o al oído. Una frase dicha vale mucho.' },
        { heading: 'También para quien se va', text: 'A veces es la persona enferma la que quiere agradecer, pedir perdón o despedirse. Escúchala.' },
      ],
      related: { practices: ['las-cuatro-frases'], articles: ['duelo-anticipado-final-de-vida'] },
      references: [BYOCK_2004],
    },
    {
      id: 'pildora-chicos-y-una-muerte-cercana',
      title: 'Los chicos también se dan cuenta',
      subtitle: 'Cómo contarles que alguien querido se va a morir.',
      slides: [
        { heading: 'Se dan cuenta', text: 'Los chicos notan que algo pasa. Si nadie les explica, pueden imaginar algo peor o creer que es su culpa.' },
        { heading: 'Palabras simples', text: 'Di la verdad según su edad: «La abuela está muy enferma y se va a morir». Evita «se va a dormir».' },
        { heading: 'De a poco', text: 'Entender que la muerte es para siempre lleva tiempo. Pueden preguntar lo mismo muchas veces.' },
        { heading: 'A ratos', text: 'Pueden llorar y al rato jugar. No es falta de cariño. Es su forma de cuidarse.' },
        { heading: 'Lo que necesitan', text: 'Saber que no es su culpa, quién los va a cuidar y que pueden preguntar siempre.' },
      ],
      related: { practices: ['contarlo-a-otros'], articles: ['duelo-anticipado-final-de-vida'] },
      references: [SPEECE_1984, DYREGROV_2008],
    },
  ],

  // ================================================================== glosario
  glossary: [
    {
      id: 'duelo-preparatorio',
      term: 'Duelo preparatorio',
      definition: 'La tristeza de la propia persona enferma al pensar en su muerte y en lo que deja. Es esperable y se puede acompañar.',
      articleId: 'pensar-en-el-propio-final',
    },
    {
      id: 'cuatro-cosas-que-importan',
      term: 'Las cuatro cosas que importan',
      definition: 'Propuesta de Ira Byock para el final de la vida: decir perdóname, te perdono, gracias y te quiero. Y, cuando llega el momento, adiós.',
      practiceId: 'las-cuatro-frases',
    },
    {
      id: 'directivas-anticipadas',
      term: 'Directivas anticipadas',
      definition: 'Lo que una persona deja dicho sobre los cuidados que quiere o no quiere, por si después no puede decidir. En la Argentina las prevé la Ley 26.529.',
      articleId: 'duelo-anticipado-final-de-vida',
    },
    {
      id: 'conspiracion-del-silencio',
      term: 'Conspiración del silencio',
      definition: 'Cuando la familia y la persona enferma callan lo que pasa para protegerse entre sí. Suele dejar a cada uno a solas con lo que siente.',
      articleId: 'pensar-en-el-propio-final',
    },
    {
      id: 'alivio-en-el-duelo',
      term: 'Alivio en el duelo',
      definition: 'Sentir alivio después de una muerte, por el fin del sufrimiento o de un cuidado muy duro. Es común y puede convivir con el amor.',
      practiceId: 'duelo-antes-de-tiempo',
    },
  ],
};
