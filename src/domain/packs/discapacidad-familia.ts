import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Discapacidad en la familia», desde el modelo social de la discapacidad (Oliver; CDPD):
 * la discapacidad surge de la interacción entre la persona y las barreras del entorno, no de un
 * «déficit» de la persona. Tiene dos caras:
 *  - criar a un hijo o hija con discapacidad: el diagnóstico y el duelo por el hijo imaginado
 *    («tristeza crónica», Olshansky), el estrés parental y lo que lo alivia (Hastings; Singer y
 *    colaboradores), la carga repartida en la pareja y la red, los hermanos (Stoneman; Meyer y
 *    Vadasy) y defender derechos en la escuela y la salud sin agotarse;
 *  - vivir con una discapacidad propia, adquirida o de nacimiento: identidad (Dunn y Burcaw),
 *    la buena vida después de una discapacidad adquirida (Dunn y Brody), pedir ayuda sin perder
 *    el control y el capacitismo, también el que uno aprendió (Campbell).
 *
 * No repite: la carga general de quien cuida y los límites («termometro-del-cuidador»,
 * «limites-al-cuidar», paquete «cuidadores»), el burnout parental (guía «agotamiento-de-criar», artículo «criar-sin-gritos-ni-culpa»,
 * «autoempatia-para-quien-cuida», paquete «familia-vinculos»), recibir y entender un diagnóstico
 * («la-ola-del-diagnostico», «preguntas-para-mi-equipo», «mi-diagnostico-no-me-define»), el ritmo
 * de actividad («ritmo-de-actividad»), la guía «entre-hermanos» ni la de chicos neurodivergentes.
 * Todo eso se enlaza.
 *
 * Seguridad: no se diagnostica ni se indican tratamientos, terapias o medicación; la Convención
 * (Ley 26.378) y el Certificado Único de Discapacidad (CUD) se nombran sólo como información, sin
 * trámites. Agotamiento extremo o ideas de no querer vivir: 135 (CABA y GBA) o 0800-345-1435,
 * 0800-999-0091, 911 y el botón Ayuda. Violencia o maltrato: 144, 102 para niñez y 911.
 */

// ------------------------------------------------------------------ referencias
const OLIVER_1990: Reference = { citation: 'Oliver, M. (1990). The politics of disablement. Macmillan.' };
const SHAKESPEARE_2006: Reference = { citation: 'Shakespeare, T. (2006). Disability rights and wrongs. Routledge.' };
const CDPD_2006: Reference = { citation: 'Naciones Unidas (2006). Convención sobre los Derechos de las Personas con Discapacidad. Asamblea General de las Naciones Unidas.' };
const LEY_26378: Reference = { citation: 'Ley 26.378 (2008). Aprueba la Convención sobre los Derechos de las Personas con Discapacidad y su Protocolo Facultativo. Boletín Oficial de la República Argentina.' };
const OLSHANSKY_1962: Reference = { citation: 'Olshansky, S. (1962). Chronic sorrow: A response to having a mentally defective child. Social Casework, 43(4), 190–193.' };
const HASTINGS_2002: Reference = {
  citation: 'Hastings, R. P. (2002). Parental stress and behaviour problems of children with developmental disability. Journal of Intellectual and Developmental Disability, 27(3), 149–160.',
};
const HASTINGS_TAUNT_2002: Reference = {
  citation: 'Hastings, R. P., & Taunt, H. M. (2002). Positive perceptions in families of children with developmental disabilities. American Journal on Mental Retardation, 107(2), 116–127.',
};
const SINGER_2007: Reference = {
  citation:
    'Singer, G. H. S., Ethridge, B. L., & Aldana, S. I. (2007). Primary and secondary effects of parenting and stress management interventions for parents of children with developmental disabilities: A meta-analysis. Mental Retardation and Developmental Disabilities Research Reviews, 13(4), 357–369.',
};
const STONEMAN_2005: Reference = { citation: 'Stoneman, Z. (2005). Siblings of children with disabilities: Research themes. Mental Retardation, 43(5), 339–350.' };
const MEYER_1994: Reference = { citation: 'Meyer, D. J., & Vadasy, P. F. (1994). Sibshops: Workshops for siblings of children with special needs. Paul H. Brookes.' };
const DUNN_BRODY_2008: Reference = { citation: 'Dunn, D. S., & Brody, C. (2008). Defining the good life following acquired physical disability. Rehabilitation Psychology, 53(4), 413–425.' };
const DUNN_BURCAW_2013: Reference = { citation: 'Dunn, D. S., & Burcaw, S. (2013). Disability identity: Exploring narrative accounts of disability. Rehabilitation Psychology, 58(2), 148–157.' };
const CAMPBELL_2009: Reference = { citation: 'Campbell, F. K. (2009). Contours of ableism: The production of disability and abledness. Palgrave Macmillan.' };

// ------------------------------------------------------------------ avisos
/** Agotamiento extremo o ideas de no querer vivir. */
const AYUDA =
  'Si sientes que ya no puedes más o aparecen ideas de no querer vivir, pide ayuda hoy. Llama al 135 (CABA y GBA) o al 0800-345-1435 desde el resto del país, o a la Línea de Salud Mental 0800-999-0091. Si hay peligro inmediato, llama al 911. También tienes el botón Ayuda.';
/** Violencia o maltrato en casa. */
const VIOLENCIA =
  'Si hay violencia o maltrato en casa, hacia ti, hacia un chico o hacia la persona con discapacidad, pide ayuda. Línea 144 si es violencia de género, Línea 102 si afecta a un chico o adolescente, y 911 si hay peligro inmediato.';

export const DISCAPACIDAD_FAMILIA_PACK: ContentPack = {
  id: 'discapacidad-familia',

  // ================================================================== prácticas
  practices: [
    {
      id: 'mapa-de-barreras',
      title: '¿Dónde está la barrera?',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Tomar una situación que salió mal y separar lo que depende del entorno de lo que depende de la persona, para elegir una barrera que se pueda cambiar.',
      mechanism: 'Mirar la discapacidad como el choque entre una persona y un entorno poco preparado saca la culpa de la persona y deja a la vista qué se puede ajustar.',
      evidenceLevel: 'preliminar',
      evidence: [OLIVER_1990, CDPD_2006],
      howItWorks: [
        'Mike Oliver, sociólogo y usuario de silla de ruedas, describió el modelo social de la discapacidad (Oliver, 1990). La idea es simple: una persona en silla de ruedas no «puede» o «no puede» entrar a un lugar. Entra si hay rampa y no entra si hay escalones.',
        'La Convención de la ONU dice algo parecido. La discapacidad surge de la interacción entre la persona y las barreras del entorno, que pueden ser físicas, de comunicación o de actitudes (Naciones Unidas, 2006).',
        'Esta práctica no niega lo que cuesta. El cansancio, el dolor o una dificultad son reales. Sólo ayuda a ver que no todo el problema está en la persona, y que una parte se puede cambiar.',
      ],
      tips: [
        'Sirve igual si la discapacidad es tuya o de alguien de tu familia.',
        'Las barreras de actitud cuentan: una mirada, un apuro, una palabra que humilla.',
        'Elige una barrera chica y posible. Las grandes se dejan para otro día.',
      ],
      obstacles: [
        { q: 'Siento que el problema es la discapacidad, no el entorno.', a: 'Las dos cosas pueden ser ciertas. Hay dificultades que vienen del cuerpo o de la mente. Igual vale la pena mirar qué parte agrega el entorno, porque esa sí se puede tocar.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Busca una postura cómoda y respira despacio tres veces. Ten algo para anotar.', durationSec: 30, kind: 'breath' },
        { title: 'Una situación', instruction: 'Piensa en algo de esta semana que salió mal. Un trámite, una salida, una clase, una consulta. Anótalo en una frase.', durationSec: 50, kind: 'reflection' },
        { title: 'Las barreras', instruction: '¿Qué del lugar o de la gente lo hizo más difícil? Escaleras, ruido, apuro, falta de información, una mirada. Anota todo.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que costó', instruction: 'Ahora anota lo que costó por el cuerpo o la mente. Por ejemplo, cansancio o dolor. Sin culpa.', durationSec: 45, kind: 'reflection' },
        { title: 'Mirar la lista', instruction: 'Compara las dos listas. Nota cuánto del problema estaba afuera de la persona.', durationSec: 30, kind: 'reflection' },
        { title: 'Una barrera', instruction: 'Elige una barrera que se pueda cambiar o pedir que cambien. Escribe un primer paso concreto.', durationSec: 50, kind: 'reflection' },
      ],
    },
    {
      id: 'el-hijo-que-imaginaba',
      title: 'El hijo que imaginaba y el que tengo',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Escribir sobre el hijo o la hija que imaginabas antes del diagnóstico, despedir esa imagen con cuidado y mirar al hijo o la hija real.',
      mechanism: 'Ponerle palabras a la tristeza por lo que no fue, sin culpa, la vuelve más llevadera y deja más lugar para conocer al hijo o la hija real.',
      evidenceLevel: 'preliminar',
      evidence: [OLSHANSKY_1962, HASTINGS_TAUNT_2002],
      howItWorks: [
        'Simon Olshansky trabajó con familias de chicos con discapacidad intelectual. Notó que muchas madres y padres sentían una tristeza que volvía en ciertos momentos, y la llamó «tristeza crónica» (Olshansky, 1962). Dijo que era una respuesta natural, no una enfermedad ni una falta de aceptación.',
        'Esa tristeza suele aparecer en fechas o hitos: un cumpleaños, el inicio de la escuela, ver a otros chicos de su edad. No quiere decir que quieras menos a tu hijo o hija. Quiere decir que también despides una imagen.',
        'Muchas familias cuentan además cosas buenas que llegaron con su hijo o hija: más unión, otras prioridades, un amor que no esperaban (Hastings y Taunt, 2002). Las dos cosas pueden convivir.',
      ],
      tips: [
        'No hay un orden correcto para sentir. La tristeza puede volver y eso es esperable.',
        'Si escribir te desborda, para y haz una práctica de anclaje.',
        'Puedes hacerla con tu pareja, cada uno por su lado, y después compartir lo que quieran.',
      ],
      obstacles: [
        { q: 'Me da culpa sentir esto.', a: 'Sentir tristeza no es rechazar a tu hijo o hija. Es despedir una imagen. Muchas madres y padres lo viven, aunque pocos lo dicen.' },
      ],
      cautions: AYUDA,
      steps: [
        { title: 'Llegar', instruction: 'Pon una mano en el pecho. Respira despacio y siente el calor de la mano.', durationSec: 40, kind: 'breath' },
        { title: 'La imagen', instruction: 'Antes del diagnóstico, ¿cómo imaginabas a tu hijo o hija? Escribe algunas escenas que soñabas.', durationSec: 75, kind: 'reflection' },
        { title: 'Lo que duele', instruction: '¿Qué de esa imagen te duele soltar? Escríbelo tal como lo sientes, sin corregirte.', durationSec: 60, kind: 'reflection' },
        { title: 'Despedir', instruction: 'Lee lo que escribiste. Dite en voz baja: «Esto era un sueño. Está bien que me duela».', durationSec: 40, kind: 'breath' },
        { title: 'Tu hijo real', instruction: 'Ahora piensa en tu hijo o hija de hoy. ¿Qué le hace reír? ¿Qué te sorprendió de su forma de ser?', durationSec: 75, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Escribe una frase para ti, con cariño. Por ejemplo: «Puedo estar triste y amarle igual».', durationSec: 40, kind: 'reflection' },
      ],
    },
    {
      id: 'la-carga-repartida',
      title: 'La carga repartida',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Hacer visible todo lo que implica el cuidado, ver quién hace cada cosa en la pareja y en la red, y pedir una ayuda concreta.',
      mechanism: 'Mucho del cuidado es invisible y recae en una sola persona. Verlo escrito ayuda a repartirlo, y pedir algo concreto facilita que otros digan que sí.',
      evidenceLevel: 'moderada',
      evidence: [HASTINGS_2002, SINGER_2007],
      howItWorks: [
        'Criar a un chico con discapacidad suele sumar tareas: turnos, terapias, trámites, reuniones en la escuela, cuidados de noche. Richard Hastings mostró que el estrés de madres y padres es más alto cuando además hay problemas de conducta, y que el apoyo cuenta (Hastings, 2002).',
        'Un metaanálisis encontró que los programas para madres y padres que combinan crianza y manejo del estrés bajan el malestar, sobre todo cuando son de varias semanas (Singer y colaboradores, 2007).',
        'Una parte del alivio viene de no estar a solas con todo. Muchas veces una persona carga casi todo y la otra no sabe cuánto es. Poner la lista sobre la mesa abre la conversación.',
      ],
      tips: [
        'Incluye la «carga mental»: recordar turnos, pensar qué falta, anticipar.',
        'Pide cosas concretas y con fecha. «¿Puedes llevarlo el jueves a las cinco?» funciona mejor que «ayúdame más».',
        'La red incluye abuelos, amigos, otras familias, la escuela y grupos de apoyo.',
      ],
      obstacles: [
        { q: 'Nadie lo hace como yo.', a: 'Puede ser. Pero si haces todo, te agotas. Explica una vez lo que importa y acepta que otro lo haga a su manera.' },
        { q: 'Mi pareja no se involucra.', a: 'Mostrar la lista ayuda a ver lo invisible. Elige un momento tranquilo y habla en primera persona. Si la tensión es constante, una consulta de pareja puede ayudar.' },
      ],
      cautions: AYUDA + ' ' + VIOLENCIA,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Piensa en una semana común en casa.', durationSec: 30, kind: 'breath' },
        { title: 'Todo lo que hay', instruction: 'Haz una lista de las tareas del cuidado. Turnos, terapias, trámites, escuela, noches, también recordar y organizar.', durationSec: 90, kind: 'reflection' },
        { title: 'Quién hace qué', instruction: 'Al lado de cada tarea, anota quién la hace casi siempre. Mira cómo queda repartido.', durationSec: 60, kind: 'reflection' },
        { title: 'Tu red', instruction: 'Anota personas o lugares que podrían ayudar en algo. Familia, amigos, otras familias, la escuela, un grupo.', durationSec: 60, kind: 'reflection' },
        { title: 'Un pedido', instruction: 'Elige una tarea y una persona. Escribe un pedido corto y concreto, con día y hora.', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Decide cuándo vas a hacer ese pedido. Dite: «Pedir ayuda también es cuidar».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'defender-sin-agotarme',
      title: 'Defender derechos sin agotarme',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Preparar una reunión en la escuela o con el sistema de salud: qué pedir, en qué te apoyas, con quién vas y hasta dónde llegas hoy.',
      mechanism: 'Ir con un objetivo claro, un pedido concreto y un límite de energía baja la tensión y sube la chance de lograr un ajuste, sin quemarse en cada reunión.',
      evidenceLevel: 'preliminar',
      evidence: [CDPD_2006, LEY_26378],
      howItWorks: [
        'En la Argentina, la Convención sobre los Derechos de las Personas con Discapacidad tiene jerarquía constitucional y fue aprobada por la Ley 26.378 (Ley 26.378, 2008). Reconoce el derecho a la educación inclusiva y a la salud, y habla de «ajustes razonables»: cambios que permiten participar en igualdad.',
        'Saber que se trata de derechos, y no de favores, cambia la postura en la reunión. Pero pelear en cada frente agota. Por eso conviene elegir una meta por vez y cuidar tu energía.',
        'Esta práctica no explica trámites ni reemplaza el asesoramiento. Si hay un conflicto serio, busca orientación en organizaciones de familias o con un abogado.',
      ],
      tips: [
        'Lleva el pedido escrito y pide que quede por escrito lo que se acuerda.',
        'Si puedes, ve con alguien. Una persona habla y la otra anota.',
        'Empieza por lo que comparten: «Los dos queremos que aprenda y esté bien».',
        'Decide antes cuándo te vas a ir. Puedes decir: «Lo pensamos y volvemos a hablar».',
      ],
      obstacles: [
        { q: 'Me enojo y después siento que lo arruiné.', a: 'Es muy común después de muchas peleas. Pide una pausa, toma agua y vuelve a tu pedido escrito. Lo que importa es el acuerdo, no ganar la discusión.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Siente los pies en el piso. Respira despacio tres veces.', durationSec: 30, kind: 'breath' },
        { title: 'La meta', instruction: 'Piensa en la próxima reunión. ¿Qué es lo más importante que quieres lograr? Escríbelo en una frase.', durationSec: 60, kind: 'reflection' },
        { title: 'El pedido', instruction: 'Convierte la meta en un pedido concreto. Qué, quién, cuándo. Por ejemplo: «Que tenga las consignas por escrito desde el lunes».', durationSec: 60, kind: 'reflection' },
        { title: 'En qué te apoyas', instruction: 'Anota lo que respalda tu pedido. Un informe, algo que ya funcionó, el derecho a la educación inclusiva.', durationSec: 50, kind: 'reflection' },
        { title: 'Con quién', instruction: '¿Quién puede acompañarte o ayudarte a preparar la reunión? Anota un nombre.', durationSec: 30, kind: 'reflection' },
        { title: 'Tu límite', instruction: 'Decide hasta dónde llegas hoy. Escribe una frase para cerrar si te sientes desbordado o desbordada.', durationSec: 45, kind: 'reflection' },
        { title: 'Después', instruction: 'Planea algo chico para recuperarte después de la reunión. Un café, una caminata, una charla.', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'pedir-ayuda-a-mi-manera',
      title: 'Pedir ayuda a mi manera',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Para quien vive con una discapacidad: decidir qué ayuda quieres, cómo la quieres y cómo decir «así no» sin perder el control de tu vida.',
      mechanism: 'Pedir ayuda con tus propias reglas protege la autonomía. La autonomía no es hacer todo sin nadie, sino decidir cómo se hacen las cosas.',
      evidenceLevel: 'preliminar',
      evidence: [DUNN_BRODY_2008, CDPD_2006],
      howItWorks: [
        'Muchas personas con discapacidad dicen que lo difícil no es recibir ayuda, sino que otros decidan por ellas. La Convención de la ONU pone en el centro la autonomía: tomar tus propias decisiones, también con apoyos (Naciones Unidas, 2006).',
        'Todos dependemos de otros en algo. Eso se llama interdependencia. Pedir ayuda no te quita autonomía si eres tú quien decide qué, cómo y cuándo.',
        'Dunn y Brody revisaron qué ayuda a vivir bien después de una discapacidad adquirida. Destacaron el sentido, las relaciones y sentir que uno sigue al mando de su vida (Dunn y Brody, 2008).',
      ],
      tips: [
        'Explica una vez, con calma, cómo te gusta que te ayuden. Después recuérdalo en pocas palabras.',
        'Agradecer no te obliga a aceptar una ayuda que no pediste.',
        'Si alguien te ayuda sin preguntar, puedes decir: «Gracias, prefiero hacerlo yo. Te aviso si te necesito».',
      ],
      obstacles: [
        { q: 'Siento que molesto.', a: 'Es un pensamiento muy común. Recuerda que todos piden ayuda en algo. Dar a otros también es parte del intercambio: tú también aportas.' },
      ],
      cautions: AYUDA,
      steps: [
        { title: 'Llegar', instruction: 'Busca una postura cómoda. Respira despacio y nota tu cuerpo apoyado.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que necesito', instruction: 'Piensa en una tarea donde hoy necesitas ayuda o la recibes. Escribe cuál es.', durationSec: 45, kind: 'reflection' },
        { title: 'Cómo la quiero', instruction: '¿Cómo te gustaría que te ayuden? Qué parte haces tú, qué parte otro, a qué ritmo.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que no quiero', instruction: '¿Qué tipo de ayuda te molesta o te quita control? Por ejemplo, que hablen por ti o que te apuren.', durationSec: 50, kind: 'reflection' },
        { title: 'Tu frase', instruction: 'Escribe una frase corta para pedir la ayuda a tu manera. Empieza con «Me sirve que…».', durationSec: 50, kind: 'reflection' },
        { title: 'Decir «así no»', instruction: 'Escribe otra frase para frenar una ayuda que no quieres, con amabilidad y firmeza.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Lee las dos frases en voz alta. Dite: «Pedir ayuda y decidir pueden ir juntos».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'mi-voz-frente-al-capacitismo',
      title: 'Mi voz frente al capacitismo',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Reconocer el capacitismo de afuera y el que uno aprendió, responder con una voz amable hacia ti y elegir cuándo vale la pena contestar.',
      mechanism: 'Ver el mensaje capacitista como algo aprendido del entorno, y no como la verdad sobre ti, reduce la vergüenza y deja elegir qué hacer.',
      evidenceLevel: 'preliminar',
      evidence: [CAMPBELL_2009, DUNN_BURCAW_2013],
      howItWorks: [
        'El capacitismo es la idea de que hay una sola forma correcta de cuerpo y de mente, y que las demás valen menos. Fiona Kumari Campbell mostró que está en las leyes, los edificios, las palabras y también en lo que cada uno aprende a pensar de sí (Campbell, 2009).',
        'A veces aparece como lástima, admiración exagerada o un «para tener lo que tienes, estás muy bien». Otras veces habla desde adentro: «soy una carga», «tengo que esconderlo».',
        'Dana Dunn y Shane Burcaw describen la identidad de discapacidad: sentirse parte de una comunidad y verse con dignidad, sin negar lo que cuesta (Dunn y Burcaw, 2013). Para muchas personas, eso protege.',
      ],
      tips: [
        'No tienes que responder a todo. Elegir no contestar también es cuidar tu energía.',
        'Hablar con otras personas con discapacidad ayuda a ver que no te pasa sólo a ti.',
        'Cada persona elige cómo nombrarse. Algunas dicen «persona con discapacidad» y otras prefieren otras palabras.',
      ],
      obstacles: [
        { q: 'Yo mismo pienso que soy menos.', a: 'Es muy común. Lo aprendimos de un entorno que trata así a la discapacidad. Notarlo es el primer paso. Prueba hablarte como le hablarías a un amigo con tu misma discapacidad.' },
      ],
      cautions: AYUDA,
      steps: [
        { title: 'Llegar', instruction: 'Pon una mano en el pecho. Respira despacio tres veces.', durationSec: 30, kind: 'breath' },
        { title: 'Lo de afuera', instruction: 'Recuerda un comentario o una actitud que te hizo sentir menos por tu discapacidad. Anótalo en una frase.', durationSec: 50, kind: 'reflection' },
        { title: 'Lo de adentro', instruction: '¿Qué te dices tú sobre tu discapacidad en un mal día? Anota una frase, tal como suena.', durationSec: 50, kind: 'reflection' },
        { title: 'De dónde viene', instruction: 'Pregúntate: ¿dónde aprendí esto? ¿Es la verdad sobre mí o un mensaje del entorno?', durationSec: 45, kind: 'reflection' },
        { title: 'La voz amable', instruction: 'Imagina a un amigo con tu misma discapacidad que se dice esa frase. Escribe lo que le dirías.', durationSec: 60, kind: 'reflection' },
        { title: 'Elegir', instruction: 'Para el comentario de afuera, decide: ¿respondo, pongo un límite o lo dejo pasar? Escribe una frase si quieres responder.', durationSec: 50, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Lee la respuesta amable como si fuera para ti. Respira despacio.', durationSec: 30, kind: 'breath' },
      ],
    },
  ],

  meta: {
    'mapa-de-barreras': { level: 'iniciacion', approaches: ['narrativa', 'soluciones'], module: 'afrontamiento' },
    'el-hijo-que-imaginaba': { level: 'intermedio', approaches: ['escritura', 'cft'], module: 'duelo', prerequisites: ['pausa-autocompasion'] },
    'la-carga-repartida': { level: 'iniciacion', approaches: ['sistemica', 'soluciones'], module: 'relaciones', prerequisites: ['termometro-del-cuidador'] },
    'defender-sin-agotarme': { level: 'intermedio', approaches: ['interpersonal', 'soluciones'], module: 'problemas', prerequisites: ['mapa-de-barreras', 'dear-man'] },
    'pedir-ayuda-a-mi-manera': { level: 'intermedio', approaches: ['interpersonal', 'humanista'], module: 'relaciones', prerequisites: ['mapa-de-barreras', 'dear-man'] },
    'mi-voz-frente-al-capacitismo': { level: 'intermedio', approaches: ['cft', 'narrativa'], module: 'autocompasion', prerequisites: ['mapa-de-barreras', 'pausa-autocompasion'] },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'criar-con-discapacidad',
      title: 'Criar a un hijo o hija con discapacidad',
      subtitle: 'El diagnóstico, la tristeza que vuelve, la carga, la pareja, los hermanos y cómo defender derechos sin quemarse.',
      category: 'Etapas de la vida',
      readingMin: 10,
      keyPoints: [
        'Desde el modelo social, la discapacidad surge del encuentro entre la persona y las barreras del entorno.',
        'La tristeza por el hijo imaginado puede volver en ciertos momentos. Es esperable y convive con el amor.',
        'El estrés de criar con discapacidad es real, y baja con apoyo, información y programas para familias.',
        'Los hermanos también necesitan su lugar, su información y su tiempo.',
        'Defender derechos es más sostenible con metas claras, aliados y pausas.',
      ],
      sections: [
        {
          heading: 'Otra forma de mirar',
          paragraphs: [
            'Durante mucho tiempo la discapacidad se miró como un problema de la persona que había que «arreglar». El modelo social propone otra mirada. La discapacidad aparece cuando una persona con cierta condición se encuentra con un entorno que no está preparado: escaleras, información difícil, escuelas rígidas o prejuicios (Oliver, 1990).',
            'La Convención de la ONU de 2006 adoptó esta idea. En la Argentina fue aprobada por la Ley 26.378 y tiene jerarquía constitucional (Naciones Unidas, 2006; Ley 26.378, 2008). El Certificado Único de Discapacidad (CUD) es el documento que da acceso a varios derechos y apoyos.',
            'Esto no significa que la condición no importe. El dolor, el cansancio o una dificultad para aprender son reales, y algunos autores lo recuerdan (Shakespeare, 2006). Pero mirar las barreras ayuda a ver qué se puede cambiar.',
          ],
        },
        {
          heading: 'El diagnóstico y el hijo imaginado',
          paragraphs: [
            'Recibir un diagnóstico de un hijo o hija suele sacudir. Muchas madres y padres sienten alivio por tener un nombre, y también miedo, enojo, culpa o tristeza. Todo eso es normal.',
            'Simon Olshansky llamó «tristeza crónica» a una tristeza que vuelve en ciertos momentos: un cumpleaños, el inicio de clases, ver a otros chicos de su edad (Olshansky, 1962). No es una falta de aceptación. Es la despedida, una y otra vez, del hijo o la hija que se imaginaba.',
            'Al mismo tiempo, muchas familias cuentan cosas buenas: más unión, otras prioridades, aprender a disfrutar de logros chicos (Hastings y Taunt, 2002). La tristeza y el amor pueden estar juntos.',
          ],
        },
        {
          heading: 'La carga, la pareja y la red',
          paragraphs: [
            'Turnos, terapias, trámites, reuniones, noches sin dormir. El estrés de madres y padres suele ser más alto, sobre todo cuando hay problemas de conducta o poco apoyo (Hastings, 2002).',
            'Lo que ayuda tiene evidencia. Un metaanálisis encontró que los programas que combinan crianza y manejo del estrés bajan el malestar de las familias (Singer y colaboradores, 2007). También ayuda repartir la carga en la pareja, sumar a la red y encontrarse con otras familias.',
            'La pareja suele sentir la presión. Ayuda hablar de cómo se reparten las tareas, cuidar algún rato a solas y aceptar que cada uno vive el duelo a su ritmo.',
          ],
        },
        {
          heading: 'Los hermanos',
          paragraphs: [
            'Los hermanos y hermanas viven una mezcla de cariño, orgullo, celos, vergüenza o preocupación. Muchos ayudan en casa y algunos sienten que deben ser «el hijo que no da trabajo» (Stoneman, 2005).',
            'Les ayuda tener información clara según su edad, un tiempo especial con cada adulto y permiso para sentir de todo. Los grupos para hermanos les permiten conocer a otros chicos que viven lo mismo (Meyer y Vadasy, 1994).',
          ],
        },
        {
          heading: 'Defender derechos sin agotarte',
          paragraphs: [
            'La Convención reconoce el derecho a la educación inclusiva y a la salud, con «ajustes razonables» que permitan participar en igualdad. Saber que son derechos cambia la postura en una reunión.',
            'Pero estar siempre en guerra quema. Ayuda ir con una meta por vez, llevar el pedido por escrito, ir con alguien y planear un descanso después. Las organizaciones de familias suelen orientar en lo que no se sabe.',
          ],
        },
        {
          heading: 'Cuándo pedir ayuda',
          paragraphs: [
            'Pide ayuda si duermes muy poco durante semanas, si ya no disfrutas de nada, si te enojas con frecuencia o si sientes que no puedes más. Habla con tu médico o con un equipo de salud mental.',
            'Si aparecen ideas de no querer vivir, llama al 135 (CABA y GBA), al 0800-345-1435 o al 0800-999-0091. Si hay peligro inmediato, al 911. Si hay violencia o maltrato en casa, la Línea 144, la Línea 102 para chicos y el 911.',
          ],
        },
      ],
      caveat: {
        title: 'Qué no hay en este artículo',
        body: 'No hay diagnósticos, tratamientos, terapias ni medicación para tu hijo o hija: eso se conversa con su equipo de salud. Tampoco se explican trámites. Gran parte de la investigación sobre estrés parental se hizo en familias de chicos con discapacidad intelectual o del desarrollo, y no siempre se aplica igual a otras discapacidades.',
      },
      diagram: {
        title: 'Cómo se agota quien cría en soledad',
        nodes: ['Más tareas y barreras', 'Una sola persona carga casi todo', 'Cansancio y aislamiento', 'Menos energía para pedir y defender', 'Las barreras siguen igual'],
        caption: 'Repartir la carga, sumar red y elegir una meta por vez cortan el ciclo.',
      },
      related: {
        practices: ['mapa-de-barreras', 'el-hijo-que-imaginaba', 'la-carga-repartida', 'defender-sin-agotarme', 'termometro-del-cuidador', 'limites-al-cuidar', 'autoempatia-para-quien-cuida'],
        articles: ['vivir-con-una-discapacidad', 'criar-sin-gritos-ni-culpa', 'acompanar-a-un-familiar'],
      },
      references: [OLIVER_1990, SHAKESPEARE_2006, CDPD_2006, LEY_26378, OLSHANSKY_1962, HASTINGS_TAUNT_2002, HASTINGS_2002, SINGER_2007, STONEMAN_2005, MEYER_1994],
    },
    {
      id: 'vivir-con-una-discapacidad',
      title: 'Vivir con una discapacidad: identidad, autonomía y capacitismo',
      subtitle: 'Para quien tiene una discapacidad de nacimiento o adquirida: cómo verse, cómo pedir ayuda sin perder el mando y qué hacer con el prejuicio.',
      category: 'Salud y trabajo',
      readingMin: 9,
      keyPoints: [
        'La discapacidad no es sólo algo del cuerpo o la mente: también la crean las barreras del entorno.',
        'Una discapacidad adquirida puede traer un duelo. La adaptación lleva tiempo y no tiene un único camino.',
        'La autonomía es decidir cómo se hacen las cosas, también con apoyos.',
        'El capacitismo está afuera y a veces también adentro. Reconocerlo quita vergüenza.',
        'Si aparecen ideas de no querer vivir, pide ayuda hoy.',
      ],
      sections: [
        {
          heading: 'Barreras, no defectos',
          paragraphs: [
            'Desde el modelo social, la discapacidad aparece cuando una persona se encuentra con barreras: un edificio sin rampa, un trámite sin lectura fácil, un trabajo que no hace ajustes, una mirada de lástima (Oliver, 1990). La Convención de la ONU lo dice así (Naciones Unidas, 2006).',
            'Esta mirada no niega el dolor, el cansancio ni las limitaciones del cuerpo (Shakespeare, 2006). Pero cambia la pregunta. En lugar de «qué te falta», se pregunta «qué hace falta cambiar».',
          ],
        },
        {
          heading: 'Cuando la discapacidad llega en la adultez',
          paragraphs: [
            'Un accidente, una enfermedad o un cambio en la vista o el oído pueden traer una discapacidad de un día para otro o de a poco. Es común sentir duelo por lo que se hacía antes, miedo, enojo o desánimo.',
            'Dunn y Brody revisaron qué ayuda a vivir bien después de una discapacidad adquirida. Destacaron encontrar sentido, sostener las relaciones y recuperar el control de las propias decisiones (Dunn y Brody, 2008). No hay un plazo para adaptarse.',
          ],
        },
        {
          heading: 'Identidad: cómo me nombro',
          paragraphs: [
            'Algunas personas viven la discapacidad como parte de quienes son. Se sienten parte de una comunidad y la nombran con orgullo. Dana Dunn y Shane Burcaw llaman a esto identidad de discapacidad, y la asocian con dignidad y pertenencia (Dunn y Burcaw, 2013).',
            'Otras personas no la sienten así, y también está bien. Cada quien elige cómo nombrarse. Conocer a otras personas con discapacidad suele ayudar a encontrar las propias palabras.',
          ],
        },
        {
          heading: 'Pedir ayuda sin perder el mando',
          paragraphs: [
            'Todos dependemos de otros en algo. La diferencia está en quién decide. La Convención habla de autonomía y de apoyos para tomar las propias decisiones (Naciones Unidas, 2006).',
            'Ayuda decir con claridad qué ayuda quieres y cómo, y también decir «así no» cuando alguien decide por ti. Agradecer no te obliga a aceptar una ayuda que no pediste.',
          ],
        },
        {
          heading: 'Capacitismo, afuera y adentro',
          paragraphs: [
            'El capacitismo es la idea de que hay una sola forma correcta de cuerpo y de mente (Campbell, 2009). Aparece en la falta de accesibilidad, en la lástima, en la admiración exagerada por hacer cosas comunes o en hablarle al acompañante en lugar de a la persona.',
            'También puede estar adentro: «soy una carga», «tengo que esconderlo». Notar de dónde viene ese mensaje, hablarte con amabilidad y elegir cuándo responder protege tu ánimo. No tienes que educar a todos.',
          ],
        },
        {
          heading: 'Cuándo consultar',
          paragraphs: [
            'Consulta si el desánimo dura semanas, si dejaste de hacer lo que te importa o si te aislaste mucho. Busca profesionales que entiendan la discapacidad y no la traten como el único problema.',
            'Si aparecen ideas de no querer vivir, llama al 135 (CABA y GBA), al 0800-345-1435 o al 0800-999-0091. Si hay peligro inmediato, al 911. Si alguien te maltrata, pide ayuda al 144 o al 911.',
          ],
        },
      ],
      caveat: {
        title: 'Límites de este artículo',
        body: 'Las discapacidades son muy distintas entre sí, y lo que sirve a una persona puede no servir a otra. Aquí no hay indicaciones de rehabilitación ni de tratamiento: eso se acuerda con tu equipo de salud. La evidencia sobre identidad y capacitismo viene sobre todo de estudios cualitativos y de teoría, no de ensayos.',
      },
      related: {
        practices: ['mapa-de-barreras', 'pedir-ayuda-a-mi-manera', 'mi-voz-frente-al-capacitismo', 'mi-diagnostico-no-me-define', 'ritmo-de-actividad', 'valores-con-la-enfermedad'],
        articles: ['criar-con-discapacidad', 'autocompasion'],
      },
      references: [OLIVER_1990, SHAKESPEARE_2006, CDPD_2006, DUNN_BRODY_2008, DUNN_BURCAW_2013, CAMPBELL_2009],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'familia-y-discapacidad',
      title: 'Familia y discapacidad',
      subtitle: 'Cuatro semanas para mirar las barreras, hacer lugar a lo que duele y no cargar a solas',
      description:
        'Mirarás las barreras del entorno, escribirás sobre el hijo o la hija que imaginabas, repartirás la carga del cuidado y prepararás una reunión para defender derechos sin agotarte. Sirve también si la discapacidad es tuya: la semana 4 ofrece prácticas sobre autonomía y capacitismo. Si estás al límite, pide ayuda antes de empezar.',
      basis: 'Oliver (1990); Olshansky (1962); Hastings (2002); Singer, Ethridge y Aldana (2007); Dunn y Burcaw (2013).',
      rhythm: '10 minutos, 3 o 4 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Las barreras',
          focus: 'El modelo social de la discapacidad',
          description: 'Leerás sobre el modelo social y separarás lo que depende del entorno de lo que depende de la persona.',
          practiceIds: ['mapa-de-barreras', 'termometro-del-cuidador'],
          articleIds: ['criar-con-discapacidad'],
          journalType: 'escritura-expresiva',
        },
        {
          title: 'Semana 2 · Lo que duele',
          focus: 'El hijo imaginado y la tristeza que vuelve',
          description: 'Harás lugar a la tristeza sin culpa y mirarás con cariño al hijo o la hija real.',
          practiceIds: ['pausa-autocompasion', 'el-hijo-que-imaginaba'],
          articleIds: [],
          journalType: 'carta-compasiva',
        },
        {
          title: 'Semana 3 · No a solas',
          focus: 'La pareja, la red y los límites',
          description: 'Harás visible la carga del cuidado, pedirás una ayuda concreta y revisarás tus límites.',
          practiceIds: ['la-carga-repartida', 'limites-al-cuidar'],
          articleIds: ['criar-sin-gritos-ni-culpa'],
          journalType: 'mis-roles',
        },
        {
          title: 'Semana 4 · Mi voz',
          focus: 'Defender derechos, autonomía y capacitismo',
          description: 'Prepararás una reunión en la escuela o en salud. Si la discapacidad es tuya, practicarás pedir ayuda a tu manera y responder al capacitismo.',
          practiceIds: ['defender-sin-agotarme', 'pedir-ayuda-a-mi-manera', 'mi-voz-frente-al-capacitismo'],
          articleIds: ['vivir-con-una-discapacidad'],
          journalType: 'conversacion',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-modelo-social',
      title: 'La barrera no es la persona',
      subtitle: 'Qué es el modelo social de la discapacidad.',
      slides: [
        { heading: 'Una rampa', text: 'Una persona en silla de ruedas entra si hay rampa. Si hay escalones, no entra. El problema está en la escalera.' },
        { heading: 'El modelo social', text: 'La discapacidad aparece cuando una persona se encuentra con barreras. Pueden ser lugares, trámites, palabras o prejuicios.' },
        { heading: 'Lo dice la ONU', text: 'La Convención de 2006 piensa la discapacidad así. En la Argentina tiene jerarquía constitucional.' },
        { heading: 'No niega lo que cuesta', text: 'El dolor o el cansancio son reales. Pero mirar las barreras muestra qué se puede cambiar.' },
        { heading: 'Una pregunta', text: 'En lugar de «qué le falta», pregunta «qué hace falta cambiar». Elige una barrera chica y empieza por ahí.' },
      ],
      related: { practices: ['mapa-de-barreras'], articles: ['criar-con-discapacidad', 'vivir-con-una-discapacidad'] },
      references: [OLIVER_1990, CDPD_2006, SHAKESPEARE_2006],
    },
    {
      id: 'pildora-tristeza-cronica',
      title: 'La tristeza que vuelve',
      subtitle: 'El duelo por el hijo que imaginabas.',
      slides: [
        { heading: 'Un sueño', text: 'Antes de nacer, o antes del diagnóstico, imaginabas a tu hijo o hija de cierta forma. Esa imagen también se despide.' },
        { heading: 'Tristeza crónica', text: 'Simon Olshansky vio que esa tristeza vuelve en ciertos momentos. Un cumpleaños, el primer día de clases, ver a otros chicos.' },
        { heading: 'No es rechazo', text: 'Sentir tristeza no quiere decir que no aceptas a tu hijo o hija. Es una respuesta natural.' },
        { heading: 'Conviven', text: 'Muchas familias también cuentan cosas buenas. Más unión, otras prioridades, un amor que no esperaban.' },
        { heading: 'Cuándo pedir ayuda', text: 'Si la tristeza no te deja vivir o piensas en no querer vivir, llama al 135 o al 0800-999-0091. Si hay peligro, al 911.' },
      ],
      related: { practices: ['el-hijo-que-imaginaba', 'pausa-autocompasion'], articles: ['criar-con-discapacidad'] },
      references: [OLSHANSKY_1962, HASTINGS_TAUNT_2002],
    },
    {
      id: 'pildora-hermanos-discapacidad',
      title: 'Los hermanos también sienten',
      subtitle: 'Qué necesitan los hermanos de un chico con discapacidad.',
      slides: [
        { heading: 'Mezcla de todo', text: 'Los hermanos sienten cariño y orgullo. También celos, vergüenza o miedo. Todo eso es normal.' },
        { heading: 'El hijo que no molesta', text: 'Algunos tratan de no dar trabajo. Se callan lo que les pasa para no sumar. Vale la pena preguntarles.' },
        { heading: 'Información clara', text: 'Explícales la discapacidad con palabras de su edad. Lo que no se dice, los chicos lo imaginan peor.' },
        { heading: 'Su propio tiempo', text: 'Diez minutos a solas con cada adulto, sin hablar de su hermano, valen mucho.' },
        { heading: 'No están solos', text: 'Los grupos para hermanos les permiten conocer a otros chicos que viven lo mismo.' },
      ],
      related: { practices: ['la-carga-repartida'], articles: ['criar-con-discapacidad'] },
      references: [STONEMAN_2005, MEYER_1994],
    },
    {
      id: 'pildora-capacitismo',
      title: 'Capacitismo: afuera y adentro',
      subtitle: 'El prejuicio contra la discapacidad y cómo cuidarte.',
      slides: [
        { heading: 'Qué es', text: 'El capacitismo es creer que hay una sola forma buena de cuerpo y de mente. Las demás valdrían menos.' },
        { heading: 'Cómo se ve', text: 'Lástima, hablarle al acompañante y no a la persona, o aplaudir por hacer cosas comunes. También lugares sin acceso.' },
        { heading: 'Adentro', text: 'A veces habla desde adentro: «soy una carga». Es un mensaje aprendido, no la verdad sobre ti.' },
        { heading: 'Una voz amable', text: 'Háblate como le hablarías a un amigo con tu misma discapacidad. Con respeto y sin lástima.' },
        { heading: 'Elegir', text: 'No tienes que responder a todo. Puedes contestar, poner un límite o dejarlo pasar para cuidar tu energía.' },
      ],
      related: { practices: ['mi-voz-frente-al-capacitismo', 'pedir-ayuda-a-mi-manera'], articles: ['vivir-con-una-discapacidad'] },
      references: [CAMPBELL_2009, DUNN_BURCAW_2013],
    },
  ],

  // ================================================================== guías para familias
  kidGuides: [
    {
      id: 'hermanos-y-discapacidad',
      title: 'Hermanos de un chico con discapacidad',
      subtitle: 'Cómo acompañar a los hermanos y hermanas: información, tiempo propio y permiso para sentir de todo.',
      readingMin: 6,
      keyPoints: [
        'Los hermanos sienten una mezcla de cariño, orgullo, celos, vergüenza y preocupación.',
        'Necesitan información clara según su edad sobre la discapacidad de su hermano o hermana.',
        'Un rato a solas con cada adulto les recuerda que también importan.',
        'Pueden ayudar en casa, pero no deben cargar con el cuidado.',
      ],
      sections: [
        {
          heading: 'Lo que viven',
          paragraphs: [
            'Crecer con un hermano o hermana con discapacidad trae cosas lindas y cosas difíciles. Muchos chicos se vuelven más empáticos y pacientes. También pueden sentir celos por la atención, vergüenza frente a amigos o miedo por el futuro (Stoneman, 2005).',
            'Algunos tratan de ser «el hijo que no da trabajo». Se portan muy bien, no se quejan y esconden lo que les pasa. Desde afuera parece que están bien, pero cargan solos con mucho.',
          ],
        },
        {
          heading: 'Hablar claro',
          paragraphs: [
            'Explica la discapacidad con palabras simples y según su edad. Por ejemplo: «A tu hermano le cuesta hablar, por eso usa dibujos para pedir cosas». Responde sus preguntas aunque se repitan.',
            'Los chicos llenan los huecos con su imaginación. Algunos creen que la discapacidad se contagia o que fue su culpa. Pregunta qué piensan y aclara.',
          ],
        },
        {
          heading: 'Su propio lugar',
          paragraphs: [
            'Busca un rato a solas con cada hijo o hija, aunque sea corto. Que elija qué hacer y que no sea para hablar de su hermano.',
            'Celebra sus logros y escucha sus problemas, aunque parezcan chicos al lado de los de su hermano. También son importantes.',
            'Pueden ayudar en tareas de la casa según su edad. Pero el cuidado es de los adultos. Si un hermano cuida demasiado, revisa cómo se reparte la carga.',
          ],
        },
        {
          heading: 'Con otros',
          paragraphs: [
            'Conocer a otros chicos con hermanos con discapacidad les hace bien. Los grupos para hermanos, como los que propusieron Donald Meyer y Patricia Vadasy, combinan juego e intercambio entre pares (Meyer y Vadasy, 1994).',
          ],
        },
      ],
      phrases: [
        '«Puedes querer a tu hermana y enojarte con ella. Las dos cosas están bien»',
        '«¿Hay algo de tu hermano que te dé vergüenza o miedo? Puedes contármelo»',
        '«Este rato es sólo para ti y para mí»',
        '«No es tu trabajo cuidarlo. Para eso estamos los grandes»',
      ],
      caveat: {
        title: 'Cuándo consultar',
        body: 'Consulta con su pediatra o con un profesional de salud mental si un hermano está muy triste o enojado durante semanas, deja de ver amigos, baja mucho en la escuela o habla de hacerse daño. Si hay maltrato en casa, llama a la Línea 102 o al 911.',
      },
      activities: ['como-me-siento', 'colores-de-mis-emociones', 'cuento-siento-pido', 'pedir-ayuda', 'mano-en-el-corazon'],
      references: [STONEMAN_2005, MEYER_1994],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'modelo-social-discapacidad', term: 'Modelo social de la discapacidad', definition: 'Forma de entender la discapacidad como el encuentro entre una persona y las barreras del entorno, y no como un defecto de la persona.', articleId: 'criar-con-discapacidad' },
    { id: 'capacitismo', term: 'Capacitismo', definition: 'Prejuicio que considera que hay una sola forma correcta de cuerpo y de mente, y que trata como menos a las personas con discapacidad.', practiceId: 'mi-voz-frente-al-capacitismo' },
    { id: 'tristeza-cronica', term: 'Tristeza crónica', definition: 'Tristeza que vuelve en ciertos momentos en madres y padres de chicos con discapacidad. Es una respuesta natural, no una falta de aceptación.', practiceId: 'el-hijo-que-imaginaba' },
    { id: 'ajustes-razonables', term: 'Ajustes razonables', definition: 'Cambios en un lugar, una tarea o una forma de hacer las cosas que permiten a una persona con discapacidad participar en igualdad.', practiceId: 'defender-sin-agotarme' },
    { id: 'identidad-de-discapacidad', term: 'Identidad de discapacidad', definition: 'Sentir la discapacidad como parte de quien uno es, con dignidad y pertenencia a una comunidad. No todas las personas la viven así.', articleId: 'vivir-con-una-discapacidad' },
    { id: 'interdependencia', term: 'Interdependencia', definition: 'Idea de que todas las personas dependen de otras en algo. Recibir apoyos no quita autonomía si la persona decide cómo.', practiceId: 'pedir-ayuda-a-mi-manera' },
  ],
};
