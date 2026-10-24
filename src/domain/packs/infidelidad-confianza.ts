import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Infidelidad y confianza en la pareja»: para quien descubrió una infidelidad y
 * para quien la tuvo, sin juzgar ni decir qué camino es el correcto.
 *  - el golpe inicial: shock, imágenes y preguntas que vuelven, hipervigilancia; cuidarse
 *    antes de decidir (Gordon, Baucom y Snyder: reacciones parecidas a un trauma);
 *  - no tomar decisiones grandes en caliente (mente sabia, Linehan; Snyder y colaboradores);
 *  - qué preguntar y qué no: preguntas para entender y preguntas que dejan imágenes (Glass;
 *    Snyder, Baucom y Gordon);
 *  - para quien tuvo la relación: hacerse cargo sin excusas y sin hundirse en la vergüenza
 *    (Fife, Weeks y Gambescia);
 *  - si eligen seguir: acuerdos de transparencia chicos, con fecha, y confianza que se
 *    reconstruye en hechos pequeños (Gottman y Silver); terapia de pareja;
 *  - si eligen separarse: hacerlo con dignidad (se enlaza el paquete de duelo por ruptura);
 *  - celos sin infidelidad: la emoción está permitida, el control no.
 *
 * No repite: el ciclo perseguir–alejarse y la alarma de apego (apego-pareja), las ganas de
 * escribirle y el plan de contacto tras una ruptura (duelo-ruptura), la pausa ante la
 * inundación (enfoques-metacognitiva-gottman), la reparación tras una discusión
 * (etapas-vinculos), comprobar los hechos (DBT) y el perdón REACH. Se enlazan.
 *
 * Seguridad: si hay violencia, amenazas, control o miedo, no es un tema de infidelidad ni de
 * confianza (Línea 144, 911), y no se recomienda terapia de pareja. Ideas de no querer vivir
 * (135 / 0800-345-1435, botón Ayuda). Control médico si hubo relaciones sin protección.
 * Nunca se dice si conviene seguir o separarse: las dos opciones se tratan con respeto.
 */

const GORDON_2004: Reference = {
  citation:
    'Gordon, K. C., Baucom, D. H., & Snyder, D. K. (2004). An integrative intervention for promoting recovery from extramarital affairs. Journal of Marital and Family Therapy, 30(2), 213–231.',
};
const SNYDER_2007: Reference = {
  citation: 'Snyder, D. K., Baucom, D. H., & Gordon, K. C. (2007). Getting past the affair: A program to help you cope, heal, and move on — together or apart. Guilford Press.',
};
const GLASS_2003: Reference = {
  citation: 'Glass, S. P. (2003). Not «just friends»: Protect your relationship from infidelity and heal the trauma of betrayal. Free Press.',
};
const FIFE_2008: Reference = {
  citation: 'Fife, S. T., Weeks, G. R., & Gambescia, N. (2008). Treating infidelity: An integrative approach. The Family Journal, 16(4), 316–323.',
};
const GOTTMAN_SILVER_2012: Reference = {
  citation: 'Gottman, J. M., & Silver, N. (2012). What makes love last? How to build trust and avoid betrayal. Simon & Schuster.',
};
const LINEHAN_2015: Reference = { citation: 'Linehan, M. M. (2015). DBT skills training manual (2nd ed.). Guilford Press.' };
const LEY_26485: Reference = {
  citation: 'Ley 26.485 de Protección Integral a las Mujeres. (2009). Boletín Oficial de la República Argentina.',
};

/** Aviso común: violencia, control o miedo en la pareja. */
const VIOLENCIA =
  'Si hay golpes, amenazas, insultos constantes, control de tu celular, tu plata o tus salidas, o si sientes miedo de tu pareja, ya no es un tema de infidelidad ni de confianza. Es violencia y no es tu culpa. Puedes llamar a la Línea 144, gratis y las 24 horas. Si corres peligro ahora, llama al 911.';
/** Aviso común: la terapia de pareja no es para situaciones de violencia. */
const SIN_TERAPIA_SI_VIOLENCIA = 'Si hay violencia, la terapia de pareja no es el camino: primero va tu seguridad, con ayuda especializada.';
/** Aviso común: ideas de no querer vivir. */
const NO_QUERER_VIVIR =
  'Si aparecen ideas de no querer vivir, no esperes: llama al Centro de Asistencia al Suicida, 135 en CABA y GBA o 0800-345-1435 en el resto del país, o usa el botón Ayuda.';
/** Aviso común: ganas de lastimar. */
const GANAS_DE_LASTIMAR = 'Si sientes ganas de lastimar a alguien o de lastimarte, aléjate de la situación y pide ayuda ya. Si hay peligro, llama al 911.';

export const INFIDELIDAD_CONFIANZA_PACK: ContentPack = {
  id: 'infidelidad-confianza',

  // ================================================================== prácticas
  practices: [
    {
      id: 'cuando-recien-te-enteras',
      title: 'Cuando recién te enteras',
      family: 'attentional',
      skills: ['resilience', 'compassion'],
      summary: 'Tres minutos para el golpe de los primeros días después de descubrir una infidelidad, o de que la descubrieran: parar, respirar, nombrar el shock y cuidar lo básico.',
      mechanism: 'En el shock, el cuerpo está en alarma y la mente no para. Bajar un poco la activación y ocuparse de lo básico da sostén antes de pensar en decisiones.',
      evidenceLevel: 'preliminar',
      evidence: [GORDON_2004, SNYDER_2007],
      howItWorks: [
        'Enterarte de una infidelidad suele sentirse como un golpe. Kristina Gordon, Donald Baucom y Douglas Snyder describen que muchas personas reaccionan de forma parecida a un trauma: imágenes que vuelven solas, preguntas que no paran, poco sueño, enojo y tristeza que se alternan, y una necesidad de vigilar todo (Gordon y colaboradores, 2004).',
        'No es exagerar ni estar fuera de control. Es la reacción de una mente que perdió algo que daba por seguro. Suele bajar con el tiempo, aunque vaya y venga.',
        'Quien tuvo la relación también puede quedar en shock cuando todo sale a la luz: culpa, miedo, vergüenza. Esta pausa sirve para las dos personas.',
      ],
      tips: [
        'Úsala cuando la angustia sube de golpe: de noche, al ver un mensaje, al recordar una fecha.',
        'En estos días, lo básico cuenta mucho: comer algo, tomar agua, dormir aunque sea poco.',
        'No hace falta contarle todo a nadie. Alcanza con tener a alguien cerca.',
      ],
      obstacles: [
        { q: 'No puedo dejar de pensar en eso.', a: 'Es esperable al principio. No intentes echar los pensamientos. Nota que están, respira y vuelve a algo concreto que puedas hacer ahora.' },
        { q: 'Me da vergüenza contárselo a alguien.', a: 'Es muy común. Puedes decir sólo «estoy pasando un momento muy difícil y necesito compañía». Eso ya ayuda.' },
      ],
      micro: true,
      cautions: `${VIOLENCIA} ${NO_QUERER_VIVIR}`,
      steps: [
        { title: 'Parar', instruction: 'Deja el celular. Siéntate o apoya la espalda en una pared. Siente los pies en el piso.', durationSec: 20, kind: 'instruction' },
        { title: 'Respirar', instruction: 'Respira despacio. Suelta el aire más largo de lo que entra. Hazlo cinco veces.', durationSec: 40, kind: 'breath' },
        { title: 'Nombrar', instruction: 'Nombra lo que pasa: «Estoy en shock. Es una reacción normal a algo que duele mucho».', durationSec: 20, kind: 'reflection' },
        { title: 'Lo básico', instruction: '¿Comiste hoy? ¿Tomaste agua? ¿Dormiste algo? Elige una cosa básica para hacer en la próxima hora.', durationSec: 40, kind: 'reflection' },
        { title: 'Alguien', instruction: 'Piensa en una persona de confianza a quien puedas llamar hoy. No hace falta contarle todo.', durationSec: 30, kind: 'reflection' },
        { title: 'Hoy no', instruction: 'Dite: «Hoy no tengo que decidir nada grande. Hoy me cuido».', durationSec: 25, kind: 'reflection' },
      ],
    },
    {
      id: 'no-decidir-en-caliente',
      title: 'No decidir en caliente',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Separar lo que no puede esperar de las decisiones grandes, como separarse, mudarse o contarle a todos, y darles una fecha para pensarlas con más calma.',
      mechanism: 'Con la emoción muy alta, cuesta ver el largo plazo. Ordenar las decisiones y postergar las grandes deja tiempo para elegir desde la calma, y no desde el golpe.',
      evidenceLevel: 'preliminar',
      evidence: [SNYDER_2007, LINEHAN_2015],
      howItWorks: [
        'En los primeros días aparecen muchas ganas de hacer algo ya: irse, echar al otro, contarle a toda la familia, escribirle a la otra persona, publicar algo. Es comprensible. Pero esas decisiones son difíciles de deshacer.',
        'Snyder, Baucom y Gordon recomiendan no tomar decisiones grandes sobre la relación mientras dura el impacto inicial, salvo las que hacen falta para estar a salvo (Snyder y colaboradores, 2007). Postergar no es perdonar ni quedarse: es darte tiempo.',
        'Marsha Linehan llama «mente sabia» al lugar donde se juntan la emoción y la razón (Linehan, 2015). Desde ahí suele ser más fácil saber qué quieres de verdad.',
      ],
      tips: [
        'Mientras tanto, acuerden algo para estas semanas: dónde duerme cada uno, qué se les dice a los chicos y cuándo hablar del tema.',
        'Elige con cuidado a quién le cuentas. Lo que se cuenta en caliente, después es difícil de retirar.',
        'Sirve igual si fuiste quien tuvo la relación: tampoco es momento de exigir una decisión al otro.',
      ],
      obstacles: [
        { q: 'Siento que si no me voy ahora, soy débil.', a: 'Esperar no te hace débil ni te obliga a quedarte. Puedes tomar distancia, dormir en otro lado y decidir lo grande más adelante.' },
        { q: 'Mi pareja me pide una respuesta ya.', a: 'Puedes decir con claridad: «Necesito unas semanas antes de decidir». Es un pedido razonable.' },
      ],
      cautions: `${VIOLENCIA} En ese caso, irte o pedir ayuda no es una decisión en caliente: es cuidarte. ${GANAS_DE_LASTIMAR}`,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Hoy no decides tu futuro. Sólo ordenas qué decisiones hay.', durationSec: 30, kind: 'breath' },
        { title: 'Lo urgente', instruction: 'Anota lo que no puede esperar. Tu seguridad, los chicos, dónde dormir esta semana, el trabajo.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo grande', instruction: 'Anota las decisiones grandes que te dan vueltas. Separarte, mudarte, contarle a la familia, escribirle a la otra persona.', durationSec: 60, kind: 'reflection' },
        { title: 'Una fecha', instruction: 'Para cada decisión grande, elige una fecha para pensarla otra vez, dentro de unas semanas. Anótala.', durationSec: 45, kind: 'reflection' },
        { title: 'Mientras tanto', instruction: 'Escribe un acuerdo simple para estas semanas. Dónde duerme cada uno, cuándo se habla del tema y qué se les dice a los chicos.', durationSec: 60, kind: 'reflection' },
        { title: 'Mente sabia', instruction: 'Pon una mano en el pecho. Pregúntate: «¿Qué haría yo en calma, dentro de un mes?». Escucha la respuesta.', durationSec: 40, kind: 'breath' },
        { title: 'Cerrar', instruction: 'Respira despacio. Dite: «Esperar no es rendirme. Es elegir con más claridad».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'preguntas-que-ayudan',
      title: 'Qué preguntar y qué no',
      family: 'constructive',
      skills: ['attention', 'compassion'],
      summary: 'Preparar las preguntas sobre la infidelidad antes de hablar: las que ayudan a entender, las que podrían dejar imágenes que duelen, y cuándo y cuánto hablar.',
      mechanism: 'Preguntar ayuda a armar una historia que tenga sentido. Elegir las preguntas y ponerle un marco a la charla evita que cada conversación sea una pelea de horas que deja más heridas.',
      evidenceLevel: 'preliminar',
      evidence: [SNYDER_2007, GLASS_2003, GORDON_2004],
      howItWorks: [
        'Quien descubrió una infidelidad suele necesitar preguntar mucho, y muchas veces lo mismo. No es obsesión: es parte de entender qué pasó. Shirley Glass insistía en que las respuestas honestas ayudan a reconstruir la confianza (Glass, 2003).',
        'Snyder, Baucom y Gordon sugieren pensar antes para qué sirve cada pregunta. Las que buscan entender, como cómo empezó, qué significó o si terminó, suelen ayudar. Los detalles sexuales y las comparaciones suelen dejar imágenes que después vuelven solas (Snyder y colaboradores, 2007).',
        'No se trata de prohibir preguntas. Tienes derecho a preguntar. Se trata de elegir las que te ayudan y de hablar en un momento que los cuide a los dos.',
      ],
      tips: [
        'No hablen de esto en la cama, de madrugada, con alcohol o con los chicos cerca.',
        'Una hora suele ser suficiente. Pueden seguir otro día.',
        'Si la charla se vuelve gritos, paren. Usen la pausa ante la inundación y retomen más tarde.',
        'Si eres quien responde, no minimices ni des detalles crueles. Si no sabes algo, dilo.',
      ],
      obstacles: [
        { q: 'Necesito saber todo, hasta lo último.', a: 'Es una necesidad comprensible. Antes de preguntar un detalle, pregúntate cómo te vas a sentir con esa imagen mañana. Puedes preguntarlo igual, pero eligiéndolo.' },
        { q: 'Cada respuesta abre otra pregunta.', a: 'Pasa mucho. Anota las preguntas nuevas y guárdalas para la próxima charla acordada. No hace falta resolver todo hoy.' },
      ],
      cautions: `Si las charlas terminan en gritos, empujones o amenazas, paren y pidan ayuda. ${VIOLENCIA} ${GANAS_DE_LASTIMAR}`,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Esta práctica es para preparar una charla, no para tenerla ahora.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que quiero entender', instruction: 'Anota lo que necesitas entender. Cómo empezó, cuánto duró, si terminó, qué pasaba entre ustedes en ese tiempo.', durationSec: 75, kind: 'reflection' },
        { title: 'Lo que me lastimaría', instruction: 'Anota preguntas que quizás te harían más daño que bien. Por ejemplo, detalles sexuales o comparaciones con la otra persona.', durationSec: 60, kind: 'reflection' },
        { title: 'Para qué', instruction: 'Para cada pregunta, pregúntate: «¿Saber esto me ayuda a entender o a decidir?». Empieza por esas.', durationSec: 45, kind: 'reflection' },
        { title: 'El cuándo', instruction: 'Propón un momento para hablar. Con tiempo, sin chicos cerca, sin alcohol y no de madrugada.', durationSec: 45, kind: 'reflection' },
        { title: 'Un final', instruction: 'Acuerden un límite de tiempo, por ejemplo una hora. Y una señal para pausar si alguno se desborda.', durationSec: 40, kind: 'reflection' },
        { title: 'Si respondes tú', instruction: 'Si eres quien tuvo la relación, responde con la verdad y sin detalles crueles. Si no sabes algo, dilo.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Las preguntas pueden volver muchas veces. Eso también es parte de entender.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'hacerme-cargo',
      title: 'Hacerme cargo de lo que hice',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Para quien tuvo la relación: mirar lo que hiciste y el daño que causó, sin excusas y sin hundirte en la vergüenza, y pensar qué puedes sostener en estas semanas.',
      mechanism: 'Reconocer el daño sin minimizarlo es una base para cualquier reparación. Mirarte con respeto, y no con desprecio, hace más fácil sostener la responsabilidad en el tiempo.',
      evidenceLevel: 'preliminar',
      evidence: [FIFE_2008, GORDON_2004, SNYDER_2007],
      howItWorks: [
        'Stephen Fife, Gerald Weeks y Nancy Gambescia describen la responsabilidad de quien tuvo la relación como una parte central de la reparación. Incluye reconocer el daño, terminar el contacto con la tercera persona y sostener la honestidad mientras la confianza vuelve (Fife y colaboradores, 2008).',
        'Entender por qué pasó no es justificarlo. Puede que la pareja tuviera problemas, o que tú estuvieras mal. Eso sirve para entender. Pero la decisión fue tuya, y decirlo así ayuda al otro a volver a confiar.',
        'La vergüenza suele empujar a esconderse o a defenderse. Tratarte con respeto, sin castigarte, te deja más presente para escuchar el dolor del otro. Esta práctica sirve sigan juntos o no.',
      ],
      tips: [
        'Evita el «pero». «Lo hice, pero tú…» borra todo lo anterior. Habla de tu parte.',
        'Las mismas preguntas pueden volver muchas veces. Responder con paciencia también repara.',
        'No pidas perdón para que la charla termine. Pídelo cuando puedas nombrar el daño.',
        'Si te cuesta mucho, una terapia individual puede ayudarte a entender qué te pasó.',
      ],
      obstacles: [
        { q: 'Hago todo y mi pareja sigue desconfiando.', a: 'Es esperable. La confianza vuelve despacio y con altibajos. Lo que más ayuda es ser constante durante mucho tiempo, no hacer mucho unos días.' },
        { q: 'La relación ya estaba mal hace años.', a: 'Puede ser cierto, y vale la pena hablarlo más adelante. Primero ayuda reconocer lo que hiciste sin mezclarlo con eso.' },
      ],
      cautions: `Si la culpa o la vergüenza te traen ideas de no querer vivir, pide ayuda hoy. ${NO_QUERER_VIVIR} Si tu pareja reacciona con golpes o amenazas, aléjate y llama al 911.`,
      steps: [
        { title: 'Llegar', instruction: 'Pon una mano en el pecho. Respira despacio. Hoy miras lo que hiciste sin castigarte y sin excusas.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que hice', instruction: 'Escribe en una o dos frases lo que hiciste. Con hechos, sin «pero» y sin explicar todavía.', durationSec: 60, kind: 'reflection' },
        { title: 'El daño', instruction: '¿Cómo crees que le afectó a tu pareja? Piensa en su confianza, su sueño, su forma de verse.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que me pasaba', instruction: 'Anota qué te pasaba en ese tiempo. Sirve para entender, no para justificar. La decisión fue tuya.', durationSec: 60, kind: 'reflection' },
        { title: 'El contacto', instruction: '¿Sigue el contacto con la persona con quien estuviste? Si quieres reparar, piensa cómo cerrarlo con claridad y cómo contarlo.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que puedo sostener', instruction: 'Anota qué puedes ofrecer estas semanas. Responder con verdad, avisar dónde estás, tener paciencia con las preguntas.', durationSec: 60, kind: 'reflection' },
        { title: 'Sin apurar', instruction: 'Dite: «No puedo apurar su perdón ni su confianza. Puedo ser constante».', durationSec: 30, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Dite: «Hice daño. Puedo hacerme cargo y tratarme con respeto a la vez».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'confianza-de-a-poco',
      title: 'Reconstruir la confianza de a poco',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Para hacer en pareja si los dos eligen seguir: armar dos o tres acuerdos de transparencia chicos y con fecha, distinguirlos del control y notar los gestos que ayudan.',
      mechanism: 'La confianza no vuelve con una promesa grande, sino con muchos hechos chicos cumplidos. Acuerdos claros, elegidos por los dos y revisados, hacen visible ese avance.',
      evidenceLevel: 'preliminar',
      evidence: [GOTTMAN_SILVER_2012, GORDON_2004, FIFE_2008],
      howItWorks: [
        'John Gottman y Nan Silver describen la confianza como algo que se construye en momentos pequeños: cada vez que uno elige estar para el otro (Gottman y Silver, 2012). Después de una infidelidad, esos momentos tienen que volver a sumarse, uno por uno.',
        'Gordon, Baucom y Snyder proponen un camino en tres partes: atravesar el impacto, entender el contexto de lo que pasó y decidir cómo seguir. Lo probaron con un grupo pequeño de parejas, con resultados alentadores (Gordon y colaboradores, 2004).',
        'Un acuerdo de transparencia, como avisar si llegas tarde, puede dar calma. Pero tiene que ser elegido por los dos, tener una fecha de revisión y no usarse para castigar. Si lo impone uno con miedo o con amenazas, ya es control.',
      ],
      tips: [
        'Mejor un acuerdo chico que se cumple siempre que uno grande que se cumple a veces.',
        'Los días malos van a volver, sobre todo en fechas o lugares que recuerdan lo que pasó. No quieren decir que no avanzan.',
        'Si los dos quieren seguir, una terapia de pareja ayuda mucho en este camino.',
      ],
      obstacles: [
        { q: 'Revisar su celular es lo único que me calma.', a: 'Se entiende. Si lo acuerdan los dos y por un tiempo, puede ser parte del camino. Si se vuelve diario y sin fin, suele mantener la alerta en lugar de bajarla.' },
        { q: '¿Cuánto tiempo va a llevar?', a: 'No hay un plazo fijo. Suele llevar meses, con avances y retrocesos. Notar los gestos que ayudan hace visible lo que sí cambió.' },
      ],
      cautions: `${VIOLENCIA} ${SIN_TERAPIA_SI_VIOLENCIA}`,
      steps: [
        { title: 'Juntos', instruction: 'Siéntense en un lugar tranquilo. Respiren despacio tres veces. Hoy arman acuerdos, no revisan todo lo que pasó.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que ayudaría', instruction: 'Quien fue lastimado anota qué gestos le darían algo de calma. Por ejemplo, avisar si llega tarde.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que se puede', instruction: 'Quien tuvo la relación anota qué puede ofrecer de verdad. Mejor poco y constante que mucho por unos días.', durationSec: 60, kind: 'reflection' },
        { title: 'Acuerdos chicos', instruction: 'Elijan dos o tres acuerdos concretos y fáciles de cumplir. Escríbanlos con palabras simples.', durationSec: 60, kind: 'reflection' },
        { title: 'Una fecha', instruction: 'Pongan una fecha para revisarlos, por ejemplo en un mes. Los acuerdos pueden cambiar con el tiempo.', durationSec: 30, kind: 'reflection' },
        { title: 'Acuerdo o control', instruction: '¿Lo eligieron los dos y tiene fecha? Es un acuerdo. ¿Lo impone uno con miedo o con castigo? Es control.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que sí', instruction: 'Cada uno nombra un gesto del otro que ayudó esta semana. Aunque haya sido chico.', durationSec: 45, kind: 'reflection' },
        { title: 'Ayuda', instruction: 'Si los dos quieren seguir, anoten buscar una terapia de pareja. Pongan una fecha para averiguar.', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'celos-o-control',
      title: '¿Celos o control?',
      family: 'deconstructive',
      skills: ['attention', 'resilience'],
      summary: 'Para cuando hay celos sin infidelidad: separar la emoción de lo que haces con ella, mirar si en la pareja hay control, en una dirección o en la otra, y probar un pedido sin control.',
      mechanism: 'Los celos son una emoción y se pueden sentir. El control es una conducta que daña el vínculo y puede ser violencia. Separar las dos cosas deja ver qué cambiar y cuándo pedir ayuda.',
      evidenceLevel: 'preliminar',
      evidence: [LINEHAN_2015, LEY_26485],
      howItWorks: [
        'Los celos aparecen cuando sentimos que podemos perder a alguien importante. Pueden venir de algo que pasó, de otras relaciones o de miedos propios. En la terapia dialéctico-conductual, una forma de manejarlos es separar lo que viste de lo que imaginas (Linehan, 2015).',
        'El control es otra cosa. Revisar el celular del otro, pedir la ubicación todo el tiempo, prohibir amistades, decidir la ropa o enojarse si el otro sale son formas de control. No protegen la relación: la dañan. La Ley 26.485 incluye el control y los celos que vigilan dentro de la violencia psicológica.',
        'Esta práctica mira en las dos direcciones: lo que tú haces con tus celos y lo que recibes de tu pareja. Si ya pasó una infidelidad, mira también la práctica sobre reconstruir la confianza.',
      ],
      tips: [
        'Sentir celos no te hace mala persona. Lo que importa es qué haces con ellos.',
        'Un pedido claro funciona mejor que una prueba o una trampa.',
        'Si los celos te ocupan muchas horas del día, consulta con un profesional.',
      ],
      obstacles: [
        { q: 'Si no lo controlo, me va a engañar.', a: 'Es un miedo real y duele. Pero el control no impide que alguien se vaya: suele alejarlo. Hablar de tu miedo y trabajarlo con ayuda protege más.' },
        { q: 'Mi pareja dice que me controla porque me quiere.', a: 'El cariño no necesita vigilar ni prohibir. Si te sientes con miedo o sin libertad, es una señal importante. Puedes consultar a la Línea 144.' },
      ],
      cautions: `${VIOLENCIA} Si eres quien controla y no puedes parar, pide ayuda a un profesional o llama a la Línea Nacional de Salud Mental, 0800-999-0091. ${SIN_TERAPIA_SI_VIOLENCIA}`,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Hoy miras tus celos con curiosidad, sin juzgarte.', durationSec: 30, kind: 'breath' },
        { title: 'La emoción', instruction: 'Nombra lo que sientes: «Siento celos». Del cero al diez, ¿cuánto?', durationSec: 30, kind: 'reflection' },
        { title: 'Los hechos', instruction: '¿Qué viste u oíste de verdad? ¿Qué estás imaginando? Escribe cada cosa en una columna.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que hago', instruction: '¿Qué haces con los celos? ¿Revisas su celular, pides fotos, le prohíbes salidas? Anótalo con honestidad.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que recibo', instruction: 'Ahora mira al revés. ¿Tu pareja revisa tu celular, te pide la ubicación o decide a quién ves? Anótalo.', durationSec: 60, kind: 'reflection' },
        { title: 'El límite', instruction: 'Sentir celos está permitido. Controlar al otro, no. Marca en tus listas lo que es control.', durationSec: 45, kind: 'reflection' },
        { title: 'Otra forma', instruction: 'Escribe un pedido sin control. Por ejemplo: «Esto me da inseguridad. ¿Podemos hablarlo?».', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Si en tus listas hay control, es una señal para pedir ayuda.', durationSec: 30, kind: 'breath' },
      ],
    },
  ],

  meta: {
    'cuando-recien-te-enteras': { level: 'iniciacion', approaches: ['dbt', 'cft'], module: 'pareja' },
    'no-decidir-en-caliente': { level: 'iniciacion', approaches: ['dbt', 'tcc'], module: 'pareja' },
    'preguntas-que-ayudan': { level: 'intermedio', approaches: ['tcc', 'focalizada-emocion'], module: 'pareja', prerequisites: ['cuando-recien-te-enteras'] },
    'hacerme-cargo': { level: 'intermedio', approaches: ['cft', 'focalizada-emocion'], module: 'pareja', prerequisites: ['pausa-autocompasion'] },
    'confianza-de-a-poco': { level: 'avanzado', approaches: ['gottman', 'tcc'], module: 'pareja', prerequisites: ['preguntas-que-ayudan', 'hacerme-cargo'] },
    'celos-o-control': { level: 'intermedio', approaches: ['dbt', 'tcc'], module: 'pareja', prerequisites: ['comprobar-hechos'] },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'despues-de-una-infidelidad',
      title: 'Después de una infidelidad',
      subtitle: 'Para quien la descubrió y para quien la tuvo: el golpe de los primeros días, qué preguntar, cómo se repara si eligen seguir y cómo separarse con dignidad si no.',
      category: 'Relaciones',
      readingMin: 11,
      keyPoints: [
        'Descubrir una infidelidad suele vivirse como un golpe: shock, imágenes que vuelven, preguntas que no paran y ganas de vigilar todo.',
        'En los primeros días, lo primero es cuidarte. Las decisiones grandes pueden esperar unas semanas, salvo las de tu seguridad.',
        'Preguntar para entender suele ayudar. Los detalles sexuales y las comparaciones suelen dejar imágenes que duelen.',
        'Si eligen seguir, la confianza se reconstruye de a poco, con responsabilidad, honestidad y acuerdos chicos que se cumplen.',
        'Separarse también es un camino válido, y se puede hacer con dignidad.',
        'Si hay violencia, control o miedo, ya no es un tema de infidelidad: es un tema de seguridad.',
      ],
      sections: [
        {
          heading: 'Qué es una infidelidad',
          paragraphs: [
            'No hay una sola definición. Cada pareja tiene sus acuerdos, dichos o no dichos. Para algunas, una infidelidad es tener relaciones sexuales con otra persona. Para otras, también lo es un vínculo emocional secreto o los mensajes íntimos por el celular.',
            'Lo que suele doler más no es sólo lo que pasó, sino el secreto y la ruptura de un acuerdo. Shirley Glass describió cómo muchas infidelidades empiezan en amistades que, de a poco, se vuelven más íntimas que la pareja (Glass, 2003).',
            'Esta sección no juzga a nadie ni dice qué deberían hacer. Sirve para quien descubrió una infidelidad, para quien la tuvo y para las parejas que quieren entender qué les pasó.',
          ],
        },
        {
          heading: 'El golpe de los primeros días',
          paragraphs: [
            'Muchas personas, al descubrir una infidelidad, reaccionan de forma parecida a un trauma. Aparecen imágenes que vuelven solas, preguntas que no paran, poco sueño, enojo y tristeza que se alternan, e incluso ganas fuertes de estar cerca del otro (Gordon y colaboradores, 2004).',
            'También aparece la hipervigilancia: revisar el celular, mirar la hora, buscar señales en todo. Se entiende, porque la mente intenta no volver a ser sorprendida. Pero vigilar sin parar suele mantener la alerta alta.',
            'Lo primero es cuidarte. Comer algo, dormir lo que se pueda, tener a una persona de confianza cerca. Si hubo relaciones sexuales sin protección, conviene hacer un control médico. Es un cuidado de salud, no un reproche.',
          ],
        },
        {
          heading: 'No decidir en caliente',
          paragraphs: [
            'En los primeros días aparecen ganas de irse, de echar al otro, de contarle a todos o de escribirle a la otra persona. Snyder, Baucom y Gordon recomiendan esperar con las decisiones grandes sobre la relación mientras dura el impacto, salvo las que hacen falta para estar a salvo (Snyder y colaboradores, 2007).',
            'Esperar no es perdonar ni quedarse. Es darte tiempo para decidir desde la calma. Mientras tanto, ayuda acordar lo básico: dónde duerme cada uno, cuándo se habla del tema y qué se les dice a los chicos.',
            'Los chicos necesitan saber que los adultos están resolviendo algo difícil y que no es su culpa. No necesitan conocer los detalles de la infidelidad ni ser parte de la pelea.',
          ],
        },
        {
          heading: 'Qué preguntar y qué no',
          paragraphs: [
            'Quien descubrió una infidelidad suele necesitar preguntar mucho, y muchas veces lo mismo. Es parte de entender. Las respuestas honestas ayudan más que las verdades a medias que después salen a la luz (Glass, 2003).',
            'Antes de preguntar, ayuda pensar para qué sirve cada pregunta. Las que buscan entender, como cómo empezó, qué significó, si terminó o qué pasaba en la pareja, suelen ayudar. Los detalles sexuales y las comparaciones suelen dejar imágenes que vuelven solas (Snyder y colaboradores, 2007). Igual tienes derecho a preguntar: la idea es elegir.',
            'Ayuda hablar en momentos acordados, con tiempo, sin alcohol y sin chicos cerca, con un límite de duración. Si alguno se desborda, paren y retomen otro día.',
          ],
        },
        {
          heading: 'Si eres quien tuvo la relación',
          paragraphs: [
            'Hacerse cargo es una parte central de cualquier reparación. Incluye reconocer el daño sin minimizarlo, terminar el contacto con la tercera persona si quieres reparar y sostener la honestidad en el tiempo (Fife y colaboradores, 2008).',
            'Entender por qué pasó no es justificarlo. Puede haber problemas en la pareja o momentos personales difíciles, y vale la pena hablarlos más adelante. Pero la decisión fue tuya.',
            'Es común sentir culpa, vergüenza y miedo. La culpa puede ayudar a reparar. La vergüenza, en cambio, suele empujar a esconderse o a defenderse. Tratarte con respeto te deja más presente para escuchar el dolor del otro.',
          ],
        },
        {
          heading: 'Si eligen seguir',
          paragraphs: [
            'Gordon, Baucom y Snyder proponen un camino en tres partes. Primero, atravesar el impacto. Después, entender el contexto de lo que pasó, en la pareja y en cada uno. Por último, decidir cómo seguir. Lo probaron con un grupo pequeño de parejas, con resultados alentadores (Gordon y colaboradores, 2004).',
            'John Gottman y Nan Silver describen la confianza como algo que se arma en momentos pequeños, cada vez que uno elige estar para el otro (Gottman y Silver, 2012). Después de una infidelidad, la confianza vuelve así: con hechos chicos cumplidos durante mucho tiempo, no con una promesa grande.',
            'Los acuerdos de transparencia pueden ayudar, si los eligen los dos, tienen fecha de revisión y no se usan para castigar. Si los dos quieren reparar, una terapia de pareja ayuda mucho. Hay enfoques pensados para este problema (Fife y colaboradores, 2008).',
          ],
        },
        {
          heading: 'Si eligen separarse',
          paragraphs: [
            'Separarse no es un fracaso del proceso. Para muchas parejas es la decisión más cuidadosa. El libro de Snyder, Baucom y Gordon lo dice desde el título: se puede seguir adelante juntos o separados (Snyder y colaboradores, 2007).',
            'Separarse con dignidad es no humillar al otro, no usar a los chicos como mensajeros ni como aliados, y no contar la historia en redes. También es cuidarte a ti: elegir un plan de contacto, darte tiempo para el duelo y volver a tu gente.',
            'Si se separan, la sección sobre el duelo por una ruptura puede acompañarte. Si tienen hijos, mira también la sección sobre separarse cuando hay hijos.',
          ],
        },
        {
          heading: 'Cuándo pedir ayuda',
          paragraphs: [
            'Si hay golpes, amenazas, insultos constantes o control de tu celular, tu plata o tus salidas, o si sientes miedo de tu pareja, ya no es un tema de infidelidad. Es violencia y no es tu culpa. Llama a la Línea 144. Si corres peligro, llama al 911. En ese caso, la terapia de pareja no es el camino: primero va tu seguridad.',
            'Si aparecen ideas de no querer vivir, no esperes. Llama al 135 en CABA y GBA o al 0800-345-1435 en el resto del país, o usa el botón Ayuda. Si sientes ganas de lastimar a alguien, aléjate y pide ayuda ya.',
            'También vale consultar si pasan semanas y casi no duermes, no puedes trabajar o las imágenes no te dejan en paz. Una terapia individual sirve tanto a quien fue lastimado como a quien tuvo la relación.',
          ],
        },
      ],
      caveat: {
        title: 'Lo que sabemos y lo que no',
        body: 'Hay pocos estudios sobre cómo tratar una infidelidad, y muchos se hicieron con pocas parejas casadas de Estados Unidos. Sirven de guía, pero cada historia es distinta. Esta sección no decide por ti si seguir o separarte: las dos opciones merecen respeto. Las prácticas no reemplazan una terapia de pareja ni una consulta individual.',
      },
      diagram: {
        title: 'Cómo se mantiene la herida abierta',
        nodes: ['Una señal: una hora, un nombre, una notificación', 'Imágenes y preguntas que vuelven', 'Revisar, preguntar o reclamar sin parar', 'Alivio breve', 'Más alerta y más preguntas'],
        caption: 'Cuidarte, hablar en momentos acordados y sumar acuerdos chicos que se cumplen ayudan a cortar el ciclo.',
      },
      related: {
        practices: ['cuando-recien-te-enteras', 'no-decidir-en-caliente', 'preguntas-que-ayudan', 'hacerme-cargo', 'confianza-de-a-poco', 'celos-o-control', 'mi-jinete-y-su-antidoto', 'reparar-tras-discusion', 'mi-plan-de-contacto', 'perdon-reach'],
        articles: ['celos-y-control', 'duelo-por-una-ruptura', 'separarse-con-hijos', 'pareja-gottman', 'apego-adulto', 'violencia-de-genero-informacion'],
      },
      references: [GORDON_2004, SNYDER_2007, GLASS_2003, FIFE_2008, GOTTMAN_SILVER_2012, LINEHAN_2015],
    },
    {
      id: 'celos-y-control',
      title: 'Celos y control: dónde está el límite',
      subtitle: 'Sentir celos es humano. Controlar al otro, no. Cómo distinguirlos, qué hacer con los celos y cuándo es violencia.',
      category: 'Relaciones',
      readingMin: 6,
      keyPoints: [
        'Los celos son una emoción. Aparecen por miedo a perder a alguien, haya o no una infidelidad.',
        'El control es una conducta: revisar, vigilar, prohibir o decidir por el otro.',
        'El control no protege la relación. La daña, y puede ser violencia.',
        'Separar lo que viste de lo que imaginas ayuda a bajar los celos.',
        'Si sientes miedo de tu pareja, llama a la Línea 144. Si hay peligro, al 911.',
      ],
      sections: [
        {
          heading: 'Los celos son una emoción',
          paragraphs: [
            'Los celos aparecen cuando sentimos que podemos perder a alguien importante. Pueden venir de algo que pasó en la pareja, de relaciones anteriores o de miedos propios, como no sentirse suficiente.',
            'Sentir celos no te hace mala persona. En la terapia dialéctico-conductual, una forma de manejarlos es separar los hechos de las suposiciones antes de actuar (Linehan, 2015).',
          ],
        },
        {
          heading: 'El control es una conducta',
          paragraphs: [
            'El control es lo que se hace con los celos o con el miedo. Revisar el celular sin permiso, pedir la ubicación todo el tiempo, prohibir amistades, decidir la ropa, enojarse si el otro sale o controlar la plata son formas de control.',
            'Muchas veces se presenta como amor: «lo hago porque te quiero». Pero el cariño no necesita vigilar ni prohibir. La Ley 26.485 incluye el control y la vigilancia dentro de la violencia psicológica (Ley 26.485, 2009).',
          ],
        },
        {
          heading: 'Después de una infidelidad',
          paragraphs: [
            'Si hubo una infidelidad, es esperable que quien fue lastimado quiera más información por un tiempo. Un acuerdo de transparencia puede ayudar si lo eligen los dos, tiene fecha de revisión y no se usa para castigar.',
            'Cuando ese acuerdo se vuelve vigilancia sin fin, con amenazas o con miedo, deja de reparar y se vuelve control. Vale la pena revisarlo, idealmente con ayuda profesional.',
          ],
        },
        {
          heading: 'Qué hacer con los celos',
          paragraphs: [
            'Nombrar la emoción, separar lo que viste de lo que imaginas y esperar antes de actuar ya baja mucho la intensidad. Después, si necesitas hablar, ayuda un pedido claro y sin acusación: «Esto me da inseguridad. ¿Podemos hablarlo?».',
            'Si los celos te ocupan muchas horas del día, o si notas que controlas y no puedes parar, consulta con un profesional. No es un defecto de carácter: se puede trabajar.',
          ],
        },
        {
          heading: 'Cuándo pedir ayuda',
          paragraphs: [
            'Si tu pareja te vigila, te prohíbe, te amenaza o sientes miedo de su reacción, eso es violencia y no es tu culpa. Llama a la Línea 144, gratis y las 24 horas. Si corres peligro, llama al 911. En ese caso, la terapia de pareja no es recomendable: primero va tu seguridad.',
          ],
        },
      ],
      caveat: {
        title: 'Sobre la evidencia',
        body: 'Hay poca investigación sobre cómo manejar los celos con prácticas breves. Lo que se propone aquí aplica principios generales de la regulación emocional. Si los celos son muy intensos o constantes, conviene consultar.',
      },
      related: {
        practices: ['celos-o-control', 'comprobar-hechos', 'confianza-de-a-poco', 'pausa-de-apego'],
        articles: ['despues-de-una-infidelidad', 'violencia-de-genero-informacion', 'apego-adulto'],
      },
      references: [LINEHAN_2015, LEY_26485],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'despues-de-la-infidelidad',
      title: 'Después de la infidelidad',
      subtitle: 'Cuatro semanas para atravesar el golpe, hablar sin herir más y elegir cómo seguir',
      description:
        'Te cuidarás en los primeros días, ordenarás las decisiones sin apuro, prepararás las conversaciones difíciles y, según lo que elijan, empezarán a reconstruir la confianza o a separarse con dignidad. Sirve para quien descubrió la infidelidad y para quien la tuvo. Si hay violencia o miedo, pide ayuda antes de empezar: Línea 144 o 911.',
      basis: 'Gordon, Baucom y Snyder (2004); Snyder, Baucom y Gordon (2007); Fife, Weeks y Gambescia (2008); Gottman y Silver (2012).',
      rhythm: '10 a 15 minutos, 4 o 5 días por semana. La pausa de los primeros días, cada vez que haga falta.',
      weeks: [
        {
          title: 'Semana 1 · El golpe',
          focus: 'Cuidarte antes de decidir',
          description: 'Leerás qué suele pasar después de una infidelidad, practicarás la pausa para los momentos de angustia y ordenarás las decisiones sin apuro.',
          practiceIds: ['cuando-recien-te-enteras', 'no-decidir-en-caliente'],
          articleIds: ['despues-de-una-infidelidad'],
          journalType: 'resolucion-problemas',
        },
        {
          title: 'Semana 2 · Hablar sin herir más',
          focus: 'Preguntas, respuestas y responsabilidad',
          description: 'Prepararás las preguntas que ayudan y el marco para hablar. Si fuiste quien tuvo la relación, mirarás lo que hiciste sin excusas.',
          practiceIds: ['preguntas-que-ayudan', 'hacerme-cargo', 'mi-jinete-y-su-antidoto'],
          articleIds: [],
          journalType: 'conversacion',
        },
        {
          title: 'Semana 3 · Elegir el camino',
          focus: 'Reparar o separarse',
          description: 'Si eligen seguir, armarán acuerdos chicos de transparencia. Si eligen separarse, armarás tu plan de contacto. Las dos opciones son válidas.',
          practiceIds: ['confianza-de-a-poco', 'mi-plan-de-contacto'],
          articleIds: [],
          journalType: 'valores',
        },
        {
          title: 'Semana 4 · Cuidarte en el camino',
          focus: 'Amabilidad, celos y reparación',
          description: 'Practicarás tratarte con amabilidad, mirarás si los celos se vuelven control y, si siguen juntos, repararán las discusiones que vuelvan.',
          practiceIds: ['pausa-autocompasion', 'celos-o-control', 'reparar-tras-discusion'],
          articleIds: ['celos-y-control'],
          journalType: 'carta-compasiva',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-primeros-dias',
      title: 'Los primeros días',
      subtitle: 'Qué pasa después de descubrir una infidelidad y qué ayuda.',
      slides: [
        { heading: 'Un golpe', text: 'Enterarte de una infidelidad suele sentirse como un golpe. Shock, enojo, tristeza y confusión, todo junto.' },
        { heading: 'La mente no para', text: 'Vuelven imágenes y preguntas. Cuesta dormir. Dan ganas de revisar todo. Es una reacción común, no es locura.' },
        { heading: 'Primero tú', text: 'Come algo, toma agua y duerme lo que puedas. Ten cerca a una persona de confianza.' },
        { heading: 'Un cuidado más', text: 'Si hubo relaciones sin protección, haz un control médico. Es cuidar tu salud, no un reproche.' },
        { heading: 'Sin apuro', text: 'Las decisiones grandes pueden esperar unas semanas. Las de tu seguridad, no.' },
        { heading: 'Si hay miedo', text: 'Si hay golpes, amenazas o miedo, llama a la Línea 144. Si hay peligro, al 911.' },
      ],
      related: { practices: ['cuando-recien-te-enteras', 'no-decidir-en-caliente'], articles: ['despues-de-una-infidelidad'] },
      references: [GORDON_2004, SNYDER_2007],
    },
    {
      id: 'pildora-que-preguntar',
      title: 'Qué preguntar y qué no',
      subtitle: 'Preguntas que ayudan a entender y preguntas que dejan imágenes.',
      slides: [
        { heading: 'Preguntar es normal', text: 'Quien descubrió una infidelidad suele preguntar mucho, y muchas veces lo mismo. Es parte de entender.' },
        { heading: 'Para entender', text: 'Cómo empezó, cuánto duró, si terminó, qué pasaba entre ustedes. Estas preguntas suelen ayudar.' },
        { heading: 'Imágenes que vuelven', text: 'Los detalles sexuales y las comparaciones suelen dejar imágenes que después vuelven solas. Piénsalo antes.' },
        { heading: 'Un buen momento', text: 'Hablen con tiempo, sin alcohol y sin chicos cerca. Pongan un límite, por ejemplo una hora.' },
        { heading: 'Si respondes tú', text: 'Di la verdad, sin detalles crueles. Si no sabes algo, dilo. Ten paciencia si la pregunta vuelve.' },
      ],
      related: { practices: ['preguntas-que-ayudan', 'hacerme-cargo'], articles: ['despues-de-una-infidelidad'] },
      references: [SNYDER_2007, GLASS_2003],
    },
    {
      id: 'pildora-reparar-o-separarse',
      title: 'Reparar o separarse',
      subtitle: 'Dos caminos válidos después de una infidelidad.',
      slides: [
        { heading: 'No hay un solo camino', text: 'Algunas parejas siguen juntas y otras se separan. Las dos opciones merecen respeto.' },
        { heading: 'Hacerse cargo', text: 'Si siguen, quien tuvo la relación reconoce el daño sin «pero». Y cierra el contacto con la otra persona.' },
        { heading: 'De a poco', text: 'La confianza vuelve con hechos chicos que se cumplen. No con una promesa grande.' },
        { heading: 'Acuerdo, no control', text: 'Un acuerdo de transparencia lo eligen los dos y tiene fecha. Si se impone con miedo, es control.' },
        { heading: 'Con ayuda', text: 'Si los dos quieren reparar, una terapia de pareja ayuda mucho. Si hay violencia, no es el camino.' },
        { heading: 'Separarse con dignidad', text: 'Sin humillar, sin usar a los chicos y sin contarlo en redes. Y cuidándote durante el duelo.' },
      ],
      related: { practices: ['confianza-de-a-poco', 'hacerme-cargo', 'mi-plan-de-contacto'], articles: ['despues-de-una-infidelidad', 'duelo-por-una-ruptura'] },
      references: [GOTTMAN_SILVER_2012, FIFE_2008, SNYDER_2007],
    },
    {
      id: 'pildora-celos-o-control',
      title: '¿Celos o control?',
      subtitle: 'La emoción está permitida. Controlar al otro, no.',
      slides: [
        { heading: 'Los celos', text: 'Son una emoción. Aparecen por miedo a perder a alguien, haya o no una infidelidad.' },
        { heading: 'El control', text: 'Revisar el celular, pedir la ubicación todo el tiempo, prohibir salidas o amistades. Eso es control.' },
        { heading: 'No es amor', text: 'El control no cuida la relación. La daña, y puede ser violencia, aunque se diga «es porque te quiero».' },
        { heading: 'Hechos o ideas', text: '¿Qué viste de verdad? ¿Qué estás imaginando? Sepáralo antes de actuar.' },
        { heading: 'Un pedido claro', text: 'Prueba decir: «Esto me da inseguridad. ¿Podemos hablarlo?». Funciona mejor que vigilar.' },
        { heading: 'Si tienes miedo', text: 'Si tu pareja te controla o te da miedo, llama a la Línea 144. Si hay peligro, al 911.' },
      ],
      related: { practices: ['celos-o-control', 'comprobar-hechos'], articles: ['celos-y-control'] },
      references: [LINEHAN_2015, LEY_26485],
    },
  ],

  // ================================================================== glosario
  glossary: [
    {
      id: 'infidelidad',
      term: 'Infidelidad',
      definition: 'Romper en secreto un acuerdo de exclusividad de la pareja, sexual o emocional. Cada pareja define sus acuerdos, por eso no hay una sola definición.',
      articleId: 'despues-de-una-infidelidad',
    },
    {
      id: 'hipervigilancia-tras-la-infidelidad',
      term: 'Hipervigilancia tras una infidelidad',
      definition: 'Estar en alerta todo el tiempo y buscar señales de engaño después de descubrir una infidelidad. Es una reacción común y suele bajar con el tiempo.',
      practiceId: 'cuando-recien-te-enteras',
    },
    {
      id: 'transparencia-acordada',
      term: 'Transparencia acordada',
      definition: 'Acuerdos que la pareja elige junta para dar calma después de una infidelidad, como avisar si se llega tarde. Tienen fecha de revisión y no se usan para castigar.',
      practiceId: 'confianza-de-a-poco',
    },
    {
      id: 'hacerse-cargo',
      term: 'Hacerse cargo',
      definition: 'Reconocer lo que uno hizo y el daño que causó, sin excusas ni «pero», y sostener la honestidad mientras la confianza vuelve.',
      practiceId: 'hacerme-cargo',
    },
    {
      id: 'control-en-la-pareja',
      term: 'Control en la pareja',
      definition: 'Vigilar, prohibir o decidir por el otro: revisar su celular, controlar sus salidas, su ropa o su plata. No es amor y puede ser violencia psicológica.',
      articleId: 'celos-y-control',
    },
  ],
};
