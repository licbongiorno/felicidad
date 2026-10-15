import type { Article } from '../library';
import type { Program } from '../programs';
import type { GlossaryTerm } from '../glossary';
import type { Practice, Reference } from '../types';
import type { ContentPack, PracticeMeta, Pill } from './types';

/**
 * Paquete «Etapas y vínculos»: vida en pareja (método Gottman), duelo profundo
 * (tareas de Worden, proceso dual, vínculos continuos, duelo perinatal y por mascotas),
 * bienestar emocional en embarazo y posparto, y envejecimiento con sentido
 * (revisión de vida de Butler, legado y soledad).
 *
 * Las técnicas de pareja vienen de investigación observacional sólida, pero las prácticas
 * tal como se ofrecen aquí (breves y autoguiadas) no se probaron de forma aislada: por eso
 * declaran evidencia preliminar. Ninguna técnica de pareja es adecuada si hay violencia,
 * miedo o control: en ese caso la prioridad es la seguridad y la ayuda especializada.
 */

// ------------------------------------------------------------ referencias
const GOTTMAN_1999: Reference = { citation: 'Gottman, J. M., & Silver, N. (1999). The seven principles for making marriage work. Crown.' };
const GOTTMAN_1994: Reference = {
  citation: 'Gottman, J. M. (1994). What predicts divorce? The relationship between marital processes and marital outcomes. Lawrence Erlbaum.',
};
const GOTTMAN_LEVENSON_1992: Reference = {
  citation:
    'Gottman, J. M., & Levenson, R. W. (1992). Marital processes predictive of later dissolution: Behavior, physiology, and health. Journal of Personality and Social Psychology, 63(2), 221–233.',
  doi: '10.1037/0022-3514.63.2.221',
};
const GOTTMAN_1998: Reference = {
  citation:
    'Gottman, J. M., Coan, J., Carrere, S., & Swanson, C. (1998). Predicting marital happiness and stability from newlywed interactions. Journal of Marriage and the Family, 60(1), 5–22.',
};
const DRIVER_2004: Reference = {
  citation:
    'Driver, J. L., & Gottman, J. M. (2004). Daily marital interactions and positive affect during marital conflict among newlywed couples. Family Process, 43(3), 301–314.',
};
const GOTTMAN_2017: Reference = {
  citation: 'Gottman, J., & Gottman, J. (2017). The natural principles of love. Journal of Family Theory & Review, 9(1), 7–26.',
};
const JOHNSON_2008: Reference = { citation: 'Johnson, S. M. (2008). Hold me tight: Seven conversations for a lifetime of love. Little, Brown.' };
const OMS_2012_VIOLENCIA: Reference = {
  citation: 'Organización Mundial de la Salud (2012). Comprender y abordar la violencia contra las mujeres: violencia infligida por la pareja. OMS.',
};
const WORDEN_2018: Reference = {
  citation: 'Worden, J. W. (2018). Grief counseling and grief therapy: A handbook for the mental health practitioner (5th ed.). Springer.',
};
const STROEBE_1999: Reference = {
  citation: 'Stroebe, M., & Schut, H. (1999). The dual process model of coping with bereavement: Rationale and description. Death Studies, 23(3), 197–224.',
  doi: '10.1080/074811899201046',
};
const KLASS_1996: Reference = {
  citation: 'Klass, D., Silverman, P. R., & Nickman, S. L. (Eds.) (1996). Continuing bonds: New understandings of grief. Taylor & Francis.',
};
const SHEAR_2015: Reference = {
  citation: 'Shear, M. K. (2015). Complicated grief. New England Journal of Medicine, 372(2), 153–160.',
  doi: '10.1056/NEJMcp1315618',
};
const BONANNO_2004: Reference = {
  citation:
    'Bonanno, G. A. (2004). Loss, trauma, and human resilience: Have we underestimated the human capacity to thrive after extremely aversive events? American Psychologist, 59(1), 20–28.',
  doi: '10.1037/0003-066X.59.1.20',
};
const NEIMEYER_2001: Reference = { citation: 'Neimeyer, R. A. (Ed.) (2001). Meaning reconstruction and the experience of loss. American Psychological Association.' };
const KERSTING_2012: Reference = {
  citation: 'Kersting, A., & Wagner, B. (2012). Complicated grief after perinatal loss. Dialogues in Clinical Neuroscience, 14(2), 187–194.',
};
const DOKA_1989: Reference = { citation: 'Doka, K. J. (Ed.) (1989). Disenfranchised grief: Recognizing hidden sorrow. Lexington Books.' };
const LICHTENTHAL_2010: Reference = {
  citation:
    'Lichtenthal, W. G., & Cruess, D. G. (2010). Effects of directed written disclosure on grief and distress symptoms among bereaved individuals. Death Studies, 34(6), 475–499.',
};
const NORTON_2014: Reference = {
  citation:
    'Norton, M. I., & Gino, F. (2014). Rituals alleviate grieving for loved ones, lovers, and lotteries. Journal of Experimental Psychology: General, 143(1), 266–272.',
};
const HOWARD_2014: Reference = {
  citation:
    'Howard, L. M., Molyneaux, E., Dennis, C.-L., Rochat, T., Stein, A., & Milgrom, J. (2014). Non-psychotic mental disorders in the perinatal period. The Lancet, 384(9956), 1775–1788.',
};
const OHARA_2013: Reference = {
  citation: "O'Hara, M. W., & McCabe, J. E. (2013). Postpartum depression: Current status and future directions. Annual Review of Clinical Psychology, 9, 379–407.",
};
const PAULSON_2010: Reference = {
  citation:
    'Paulson, J. F., & Bazemore, S. D. (2010). Prenatal and postpartum depression in fathers and its association with maternal depression: A meta-analysis. JAMA, 303(19), 1961–1969.',
};
const BERGINK_2016: Reference = {
  citation:
    'Bergink, V., Rasgon, N., & Wisner, K. L. (2016). Postpartum psychosis: Madness, mania, and melancholia in motherhood. American Journal of Psychiatry, 173(12), 1179–1188.',
};
const NEFF_2013: Reference = {
  citation: 'Neff, K. D., & Germer, C. K. (2013). A pilot study and randomized controlled trial of the mindful self-compassion program. Journal of Clinical Psychology, 69(1), 28–44.',
  doi: '10.1002/jclp.21923',
};
const BUTLER_1963: Reference = {
  citation: 'Butler, R. N. (1963). The life review: An interpretation of reminiscence in the aged. Psychiatry, 26(1), 65–76.',
};
const BOHLMEIJER_2003: Reference = {
  citation:
    'Bohlmeijer, E., Smit, F., & Cuijpers, P. (2003). Effects of reminiscence and life review on late-life depression: A meta-analysis. International Journal of Geriatric Psychiatry, 18(12), 1088–1094.',
};
const PINQUART_2012: Reference = {
  citation: 'Pinquart, M., & Forstmeier, S. (2012). Effects of reminiscence interventions on psychosocial outcomes: A meta-analysis. Aging & Mental Health, 16(5), 541–558.',
};
const OMS_2002: Reference = { citation: 'Organización Mundial de la Salud (2002). Envejecimiento activo: un marco político. OMS.' };
const HOLT_LUNSTAD_2015: Reference = {
  citation:
    'Holt-Lunstad, J., Smith, T. B., Baker, M., Harris, T., & Stephenson, D. (2015). Loneliness and social isolation as risk factors for mortality: A meta-analytic review. Perspectives on Psychological Science, 10(2), 227–237.',
};
const MASI_2011: Reference = {
  citation:
    'Masi, C. M., Chen, H.-Y., Hawkley, L. C., & Cacioppo, J. T. (2011). A meta-analysis of interventions to reduce loneliness. Personality and Social Psychology Review, 15(3), 219–266.',
};
const CARSTENSEN_2006: Reference = {
  citation: 'Carstensen, L. L. (2006). The influence of a sense of time on human development. Science, 312(5782), 1913–1915.',
};
const ERIKSON_1982: Reference = { citation: 'Erikson, E. H. (1982). The life cycle completed. Norton.' };

const VIOLENCIA =
  'Si en tu pareja hay violencia, miedo, amenazas o control, estas técnicas no aplican: no se trata de comunicarte mejor. Lo primero es tu seguridad. Busca ayuda especializada en violencia de género o familiar, o llama a emergencias si estás en peligro.';

// ------------------------------------------------------------ prácticas
const PRACTICES: Practice[] = [
  // ---------------- pareja
  {
    id: 'mapas-de-amor',
    title: 'Mapas de amor',
    family: 'constructive',
    skills: ['compassion', 'attention'],
    summary: 'Hacer preguntas abiertas para conocer de nuevo el mundo interior de tu pareja: sus planes, sus miedos y su día.',
    mechanism: 'Conocer en detalle el mundo del otro sostiene la amistad de la pareja, que es la base para atravesar los conflictos.',
    evidenceLevel: 'preliminar',
    evidence: [GOTTMAN_1999, GOTTMAN_2017],
    howItWorks: [
      'John Gottman observó a miles de parejas durante décadas. Las que seguían juntas y contentas conocían bien el mundo del otro: sus gustos, sus preocupaciones, sus sueños. Él lo llamó «mapas de amor».',
      'Los mapas se desactualizan. Con los años, los hijos o el trabajo, damos por hecho que ya sabemos quién es la otra persona. Preguntar con curiosidad renueva el mapa y hace que el otro se sienta visto.',
    ],
    tips: [
      'Elige un momento tranquilo, sin pantallas ni apuros.',
      'Pregunta para conocer, no para corregir ni opinar.',
      'Si te sorprende una respuesta, dilo: «No lo sabía».',
    ],
    obstacles: [
      { q: 'Me da vergüenza preguntar cosas que ya debería saber.', a: 'Las personas cambian. Preguntar no muestra desinterés, muestra que te importa quién es hoy.' },
      { q: 'Mi pareja responde con monosílabos.', a: 'Empieza por preguntas fáciles y cuenta algo tuyo primero. La confianza para hablar se construye de a poco.' },
    ],
    steps: [
      { title: 'Prepararte', instruction: 'Busca un rato tranquilo con tu pareja. Apaguen el celular o déjenlo lejos.', durationSec: 40, kind: 'instruction' },
      { title: 'Elegir preguntas', instruction: 'Elige tres preguntas abiertas. Por ejemplo: «¿Qué te preocupa estos días?», «¿Qué te gustaría hacer este año?».', durationSec: 60, kind: 'reflection' },
      { title: 'Preguntar', instruction: 'Haz la primera pregunta y escucha. No des consejos. Solo trata de entender.', durationSec: 120, kind: 'instruction' },
      { title: 'Ir más hondo', instruction: 'Pide un poco más: «¿Cómo es eso para ti?». Deja que hable sin apuro.', durationSec: 90, kind: 'instruction' },
      { title: 'Cambiar de lugar', instruction: 'Ahora te toca responder a ti. Cuenta algo de tu mundo que tu pareja quizá no sepa.', durationSec: 120, kind: 'instruction' },
      { title: 'Cerrar', instruction: 'Díganse una cosa nueva que aprendieron del otro hoy. Agradezcan el rato compartido.', durationSec: 45, kind: 'reflection' },
    ],
  },
  {
    id: 'ofertas-de-conexion',
    title: 'Ofertas de conexión',
    family: 'attentional',
    skills: ['attention', 'compassion'],
    summary: 'Notar los pequeños gestos con que tu pareja busca tu atención y responder girándote hacia ella.',
    mechanism: 'Responder a los pequeños pedidos de atención construye confianza día a día, mucho más que los grandes gestos.',
    evidenceLevel: 'preliminar',
    evidence: [DRIVER_2004, GOTTMAN_1999],
    howItWorks: [
      'Una «oferta de conexión» es cualquier gesto que busca al otro: un comentario, una pregunta, un suspiro, una mano en el hombro. Ante cada oferta podemos girarnos hacia ella, ignorarla o rechazarla.',
      'En un estudio con parejas recién casadas, las que seguían juntas años después se habían girado hacia las ofertas del otro mucho más a menudo (Driver y Gottman, 2004). Son gestos chicos que suman confianza.',
    ],
    tips: [
      'Girarse hacia el otro puede ser mínimo: levantar la vista, sonreír o decir «qué bueno».',
      'Si no puedes atender ahora, dilo con cariño: «Ahora no puedo, en diez minutos te escucho».',
      'Nota también tus propias ofertas y si las haces claras.',
    ],
    obstacles: [
      { q: 'Me doy cuenta tarde, cuando ya la ignoré.', a: 'Puedes volver: «Hace un rato me hablaste y no te presté atención. ¿Qué me decías?». Esa vuelta también cuenta.' },
      { q: 'Siento que yo hago todas las ofertas.', a: 'Puede ser cierto. Es un buen tema para hablar en calma, con un inicio suave, sin acusar.' },
    ],
    steps: [
      { title: 'Entender la idea', instruction: 'Una oferta es un gesto que busca tu atención. Puede ser un comentario, una mirada o una pregunta.', durationSec: 40, kind: 'instruction' },
      { title: 'Recordar el día', instruction: 'Piensa en el día de ayer. ¿Qué ofertas te hizo tu pareja? Trata de recordar dos o tres.', durationSec: 90, kind: 'reflection' },
      { title: 'Ver tu respuesta', instruction: 'Para cada una, ¿te giraste hacia ella, la ignoraste o la rechazaste? Míralo sin culpa, solo para saber.', durationSec: 90, kind: 'reflection' },
      { title: 'Tus ofertas', instruction: 'Ahora piensa en tus ofertas. ¿Fueron claras? ¿Qué pasó con ellas?', durationSec: 60, kind: 'reflection' },
      { title: 'Plan de hoy', instruction: 'Hoy proponte notar tres ofertas y girarte hacia ellas. Basta con un gesto o una palabra.', durationSec: 45, kind: 'instruction' },
      { title: 'Cerrar', instruction: 'Respira despacio. Recuerda que lo pequeño, repetido, es lo que más cuenta.', durationSec: 30, kind: 'breath' },
    ],
  },
  {
    id: 'inicio-suave',
    title: 'Inicio suave y antídotos de los cuatro jinetes',
    family: 'constructive',
    skills: ['compassion', 'resilience'],
    summary: 'Preparar una queja sin crítica ni desprecio: hablar de ti, de lo que pasó y de lo que necesitas.',
    mechanism: 'Cómo empieza una discusión predice cómo termina. Un inicio suave baja las defensas y deja espacio para escuchar.',
    evidenceLevel: 'preliminar',
    evidence: [GOTTMAN_1994, GOTTMAN_1998, GOTTMAN_1999, JOHNSON_2008],
    cautions: VIOLENCIA,
    howItWorks: [
      'Gottman describió cuatro formas de discutir que dañan mucho a una pareja: la crítica, el desprecio, la actitud defensiva y la evasiva o «muro de piedra». Las llamó los cuatro jinetes. Cada uno tiene un antídoto.',
      'Ante la crítica, el antídoto es el inicio suave: hablar de lo que sientes y necesitas, no de cómo es el otro. Ante el desprecio, expresar aprecio. Ante la defensa, asumir tu parte. Ante el muro, pedir una pausa y volver.',
      'Gottman encontró que los primeros minutos de una discusión predicen bien cómo termina (Gottman y otros, 1998). Detrás de cada queja suele haber una necesidad. Decirla sin ataque ayuda a que el otro pueda escucharla.',
    ],
    tips: [
      'Usa la fórmula: «Me siento… por… y necesito…».',
      'Habla de una sola situación, no de «siempre» ni de «nunca».',
      'Si notas el corazón acelerado o mucha rabia, pide una pausa de veinte minutos y vuelve.',
    ],
    obstacles: [
      { q: 'Si hablo suave, no me toma en serio.', a: 'Suave no es débil. Puedes ser firme en lo que necesitas y amable en cómo lo dices.' },
      { q: 'Mi pareja igual se defiende.', a: 'Puede pasar al principio. Prueba con un aprecio antes de la queja y escucha su parte. Si siempre termina mal, consulten a un profesional de pareja.' },
    ],
    steps: [
      { title: 'Calmarte', instruction: 'Antes de preparar la charla, respira lento tres veces. No se habla bien desde el enojo fuerte.', durationSec: 40, kind: 'breath' },
      { title: 'La situación', instruction: 'Piensa en una queja concreta. Descríbela como lo diría una cámara, sin juicios: qué pasó y cuándo.', durationSec: 75, kind: 'reflection' },
      { title: 'Lo que sientes', instruction: 'Nombra lo que sentiste: tristeza, cansancio, soledad, preocupación. Debajo del enojo suele haber otra emoción.', durationSec: 60, kind: 'reflection' },
      { title: 'Lo que necesitas', instruction: 'Piensa qué necesitas. Conviértelo en un pedido positivo, algo que el otro pueda hacer.', durationSec: 60, kind: 'reflection' },
      { title: 'Armar la frase', instruction: 'Únelo así: «Me siento… cuando… y necesito…». Revisa que no haya un «tú siempre» ni un «tú nunca».', durationSec: 75, kind: 'reflection' },
      { title: 'Revisar los jinetes', instruction: '¿Tu frase tiene crítica, burla o ironía? Si la tiene, cámbiala. Agrega un aprecio sincero antes de empezar.', durationSec: 60, kind: 'reflection' },
      { title: 'Elegir el momento', instruction: 'Elige un momento tranquilo para decirla. Si la charla se calienta, pide una pausa y vuelvan más tarde.', durationSec: 45, kind: 'instruction' },
    ],
  },
  {
    id: 'reparar-tras-discusion',
    title: 'Reparar después de una discusión',
    family: 'constructive',
    skills: ['compassion', 'resilience'],
    summary: 'Volver sobre una discusión con calma para entender qué pasó, asumir tu parte y reconectar.',
    mechanism: 'Todas las parejas discuten. Lo que más protege la relación es la capacidad de reparar después.',
    evidenceLevel: 'preliminar',
    evidence: [GOTTMAN_1999, GOTTMAN_LEVENSON_1992, JOHNSON_2008],
    cautions: VIOLENCIA,
    howItWorks: [
      'Gottman llama «intentos de reparación» a los gestos que frenan una pelea que se va de las manos: un chiste, una disculpa, un «espera, empecemos de nuevo». Las parejas estables no pelean menos: reparan más y aceptan mejor los intentos del otro.',
      'Cuando el cuerpo se activa mucho, con el corazón acelerado, ya no se puede escuchar. Gottman lo llama «inundación». Por eso la reparación funciona mejor cuando los dos se calmaron, al menos veinte minutos después.',
    ],
    tips: [
      'Cada uno cuenta su versión. No hay una sola verdad sobre lo que pasó.',
      'Asumir una parte, aunque sea pequeña, abre la puerta a que el otro haga lo mismo.',
      'Terminen con algo concreto que harán distinto la próxima vez.',
    ],
    obstacles: [
      { q: 'Mi pareja no quiere volver a hablar del tema.', a: 'Puedes reparar tu parte igual: «Lamento cómo te hablé». A veces eso abre la charla más adelante.' },
      { q: 'Siempre discutimos lo mismo.', a: 'Muchos conflictos de pareja son permanentes. La meta no es resolverlos, sino poder hablarlos con humor y respeto. Un profesional de pareja puede ayudar.' },
    ],
    steps: [
      { title: 'Esperar la calma', instruction: 'Haz esto cuando los dos estén tranquilos. Si todavía sientes el cuerpo agitado, espera un poco más.', durationSec: 40, kind: 'instruction' },
      { title: 'Lo que sentí', instruction: 'Cada uno cuenta qué sintió durante la discusión. Solo emociones, sin explicar ni acusar.', durationSec: 120, kind: 'instruction' },
      { title: 'Mi versión', instruction: 'Cada uno cuenta cómo vio lo que pasó. El otro escucha y resume: «Entiendo que para ti fue así».', durationSec: 150, kind: 'instruction' },
      { title: 'Lo que me activó', instruction: '¿Qué te tocó por dentro? Quizá un viejo miedo a no importar, a ser criticado o a quedarte solo.', durationSec: 90, kind: 'reflection' },
      { title: 'Mi parte', instruction: 'Di una cosa que hiciste que no ayudó. Por ejemplo: «Te hablé con desprecio y lo lamento».', durationSec: 60, kind: 'instruction' },
      { title: 'La próxima vez', instruction: 'Acuerden una cosa que cada uno hará distinto la próxima vez. Que sea pequeña y concreta.', durationSec: 60, kind: 'reflection' },
      { title: 'Reconectar', instruction: 'Cierren con un gesto de cariño que a los dos les quede bien: un abrazo, un mate, un paseo.', durationSec: 30, kind: 'instruction' },
    ],
  },
  // ---------------- duelo
  {
    id: 'carta-al-ser-querido',
    title: 'Carta a quien ya no está',
    family: 'constructive',
    skills: ['compassion', 'resilience'],
    summary: 'Escribirle una carta a la persona o al animal que perdiste: lo que extrañas, lo que agradeces y lo que quedó pendiente.',
    mechanism: 'Poner en palabras la relación ayuda a ordenar el dolor y a transformar el vínculo en lugar de cortarlo.',
    evidenceLevel: 'preliminar',
    evidence: [LICHTENTHAL_2010, KLASS_1996, NEIMEYER_2001],
    cautions:
      'Si la pérdida es muy reciente, o si al escribir sientes un dolor que te desborda, para y vuelve a algo que te calme. Si después de muchos meses el duelo te impide vivir, consulta a un profesional de la salud mental: el duelo prolongado tiene tratamiento eficaz.',
    howItWorks: [
      'Durante mucho tiempo se pensó que hacer el duelo era «soltar» y cortar el lazo. Hoy se sabe que muchas personas mantienen un vínculo con quien murió: le hablan, lo recuerdan, se preguntan qué diría. A esto se le llama «vínculos continuos» (Klass y otros, 1996).',
      'Escribir una carta es una forma de seguir en relación de otro modo. En un estudio, escribir sobre el sentido de la pérdida o lo que trajo de bueno ayudó más que escribir solo sobre el dolor (Lichtenthal y Cruess, 2010).',
    ],
    tips: [
      'No hace falta que la carta sea linda ni ordenada. Escribe como te salga.',
      'Puedes escribirle también a una mascota o a un embarazo que se perdió.',
      'Después decide qué hacer con la carta: guardarla, leerla en voz alta o compartirla con alguien.',
    ],
    obstacles: [
      { q: 'Lloro tanto que no puedo seguir.', a: 'Llorar está bien. Si sientes que te desborda, para, respira y vuelve otro día. La carta puede escribirse en varios ratos.' },
      { q: 'La relación era difícil y siento enojo.', a: 'El enojo también tiene lugar en la carta. No hace falta idealizar a nadie. Si te pesa mucho, hablarlo con un profesional ayuda.' },
    ],
    steps: [
      { title: 'Preparar el lugar', instruction: 'Busca un lugar tranquilo con papel o un cuaderno. Si quieres, ten cerca una foto o un objeto que te lo recuerde.', durationSec: 60, kind: 'instruction' },
      { title: 'Saludar', instruction: 'Empieza la carta con su nombre, como si le escribieras de verdad. Respira antes de seguir.', durationSec: 60, kind: 'instruction' },
      { title: 'Lo que extraño', instruction: 'Escribe lo que más extrañas. Su voz, una costumbre, un momento del día que era de los dos.', durationSec: 180, kind: 'reflection' },
      { title: 'Lo que agradezco', instruction: 'Escribe lo que te dio o te enseñó. ¿Qué parte de ti existe gracias a ese vínculo?', durationSec: 180, kind: 'reflection' },
      { title: 'Lo pendiente', instruction: 'Si hay algo que no llegaste a decir, escríbelo ahora. Un perdón, un gracias o una despedida.', durationSec: 180, kind: 'reflection' },
      { title: 'Cómo sigue el lazo', instruction: 'Escribe cómo quieres llevarlo contigo de ahora en más. Por ejemplo, un valor, una receta o una frase suya.', durationSec: 120, kind: 'reflection' },
      { title: 'Cerrar con cuidado', instruction: 'Pon una mano en el pecho y respira despacio. Haz algo amable por ti en la próxima hora.', durationSec: 60, kind: 'breath' },
    ],
  },
  {
    id: 'ritual-de-recuerdo',
    title: 'Un ritual de recuerdo',
    family: 'constructive',
    skills: ['resilience', 'compassion'],
    summary: 'Crear un gesto propio y repetible para honrar a quien perdiste en fechas especiales o en días difíciles.',
    mechanism: 'Los rituales dan forma y límite al dolor: un tiempo y un lugar para recordar, y luego volver a la vida.',
    evidenceLevel: 'preliminar',
    evidence: [NORTON_2014, KLASS_1996, WORDEN_2018],
    howItWorks: [
      'En todas las culturas hay rituales para las pérdidas. En una serie de experimentos, las personas que hicieron un ritual después de una pérdida sintieron menos pena que las que no lo hicieron, incluso con rituales inventados (Norton y Gino, 2014).',
      'Un ritual personal no reemplaza a los rituales comunitarios. Pero ayuda en pérdidas que tienen poco reconocimiento, como un embarazo perdido o la muerte de una mascota, y en fechas como cumpleaños o aniversarios.',
    ],
    tips: [
      'Lo mejor es algo simple que puedas repetir: encender una vela, plantar algo, cocinar su comida favorita.',
      'Puedes hacerlo a solas o con otras personas que también lo quieren.',
      'Ponle un principio y un final claros: así el recuerdo tiene su lugar y no ocupa todo el día.',
    ],
    obstacles: [
      { q: 'Me parece raro inventar un ritual.', a: 'Muchos rituales empezaron así. Si te resulta más natural, adapta uno de tu familia o tu tradición.' },
      { q: 'Hacerlo me pone más triste.', a: 'Es esperable sentir pena durante el ritual. Si después de varios meses la pena no afloja nada, consulta a un profesional.' },
    ],
    steps: [
      { title: 'Pensar en la persona', instruction: 'Cierra los ojos y trae a la mente a quien perdiste. Nota qué te viene primero.', durationSec: 60, kind: 'reflection' },
      { title: 'Algo que la represente', instruction: 'Piensa en algo que la represente: una flor, una canción, un lugar, una comida, un objeto.', durationSec: 60, kind: 'reflection' },
      { title: 'Elegir el gesto', instruction: 'Elige un gesto simple con eso. Por ejemplo, encender una vela y escuchar su canción.', durationSec: 60, kind: 'reflection' },
      { title: 'Cuándo y dónde', instruction: 'Decide cuándo lo harás: una fecha especial, un día por mes o cuando lo necesites. Elige también el lugar.', durationSec: 60, kind: 'reflection' },
      { title: 'Principio y final', instruction: 'Piensa cómo empieza y cómo termina. Por ejemplo, empieza al encender la vela y termina al apagarla.', durationSec: 45, kind: 'reflection' },
      { title: 'Probarlo', instruction: 'Si puedes, hazlo ahora por unos minutos. Deja que el recuerdo esté presente, sin apuro.', durationSec: 120, kind: 'silence' },
      { title: 'Volver', instruction: 'Respira despacio y nota el lugar donde estás. Ahora vuelve a tu día con suavidad.', durationSec: 45, kind: 'breath' },
    ],
  },
  {
    id: 'oscilar-perdida-restauracion',
    title: 'Entre la pérdida y la vida que sigue',
    family: 'attentional',
    skills: ['resilience', 'attention'],
    summary: 'Revisar tu semana para ver si hay lugar tanto para el dolor como para la vida cotidiana, y equilibrar los dos.',
    mechanism: 'El modelo de proceso dual propone que el duelo sano va y viene entre mirar la pérdida y ocuparse de la vida.',
    evidenceLevel: 'preliminar',
    evidence: [STROEBE_1999, WORDEN_2018, BONANNO_2004],
    cautions:
      'Esta práctica no busca apurar el duelo. Si tras muchos meses no puedes pensar en otra cosa, o si evitas por completo todo lo que te recuerda la pérdida, consulta a un profesional. Si tienes ideas de morir, pide ayuda hoy mismo.',
    howItWorks: [
      'Margaret Stroebe y Henk Schut describieron dos tipos de tareas en el duelo. Unas miran la pérdida: llorar, recordar, extrañar. Otras miran la restauración: ocuparse de la casa, aprender cosas nuevas, tener ratos de descanso o de disfrute.',
      'Lo sano no es estar siempre en una ni en otra, sino oscilar entre las dos. Quien solo mira la pérdida puede quedar atrapado en el dolor. Quien solo se distrae puede postergarlo. Tomarse un respiro del duelo no es olvidar.',
    ],
    tips: [
      'Haz esta revisión una vez por semana, no todos los días.',
      'Los ratos de alivio o de risa no son traición. Son parte del duelo.',
      'Si te cuesta dar lugar al dolor, la carta a quien ya no está puede ayudar.',
    ],
    obstacles: [
      { q: 'Siento culpa cuando la paso bien.', a: 'Es muy frecuente. Puedes recordar que el amor por quien perdiste sigue, también en esos ratos.' },
      { q: 'No tengo tiempo para el dolor, debo seguir.', a: 'A veces la vida exige mucho. Prueba con un rato breve y cuidado, como diez minutos con una foto, una vez por semana.' },
    ],
    steps: [
      { title: 'Llegar', instruction: 'Siéntate cómodo y respira despacio. Trae a la mente la pérdida, sin forzar nada.', durationSec: 45, kind: 'breath' },
      { title: 'Ratos de pérdida', instruction: 'Repasa la semana. ¿Cuándo te diste tiempo para extrañar, llorar o recordar? Anota esos momentos.', durationSec: 90, kind: 'reflection' },
      { title: 'Ratos de vida', instruction: '¿Cuándo te ocupaste de la vida diaria, viste a alguien o tuviste un rato de alivio? Anota esos momentos.', durationSec: 90, kind: 'reflection' },
      { title: 'Mirar el balance', instruction: 'Mira las dos listas. ¿Alguna está casi vacía? No hay una medida justa. Solo nota hacia dónde se inclina.', durationSec: 60, kind: 'reflection' },
      { title: 'Un gesto para la que falta', instruction: 'Elige un gesto pequeño para el lado que tiene menos. Por ejemplo, mirar fotos o salir a caminar con alguien.', durationSec: 60, kind: 'reflection' },
      { title: 'Cerrar', instruction: 'Pon una mano en el pecho. Dite con suavidad: «Puedo extrañar y seguir viviendo a la vez».', durationSec: 45, kind: 'breath' },
    ],
  },
  // ---------------- etapas: perinatal y vejez
  {
    id: 'cuidarte-mientras-cuidas',
    title: 'Cuidarte mientras cuidas a tu bebé',
    family: 'constructive',
    skills: ['compassion', 'resilience'],
    summary: 'Una pausa amable para el embarazo o el posparto: notar cómo estás, tratarte con compasión y pedir ayuda concreta.',
    mechanism: 'La autocompasión baja la exigencia de ser la madre o el padre perfecto, y pedir ayuda protege tu salud mental.',
    evidenceLevel: 'preliminar',
    evidence: [NEFF_2013, HOWARD_2014, OHARA_2013],
    cautions:
      'Si la tristeza, la angustia o el no poder disfrutar duran más de dos semanas, consulta a tu médico o a un profesional de salud mental: la depresión perinatal es frecuente y tiene tratamiento. Si tienes ideas de hacerte daño o de dañar al bebé, o si oyes o ves cosas raras, pide ayuda urgente hoy.',
    howItWorks: [
      'El embarazo y el primer año con un bebé traen alegría, pero también cansancio, dudas y cambios en la pareja y el cuerpo. Muchas personas sienten que deberían estar felices todo el tiempo, y se culpan cuando no lo están.',
      'Alrededor de una de cada diez madres, y también muchos padres, tienen depresión en este período (Howard y otros, 2014; Paulson y Bazemore, 2010). Tratarte con amabilidad y apoyarte en otros no es un lujo: es parte del cuidado del bebé.',
    ],
    tips: [
      'Puedes hacer la pausa mientras das de comer o acunas al bebé.',
      'Piensa en ayudas concretas y pequeñas: alguien que cocine, que haga una compra, que te deje dormir dos horas.',
      'Habla con otras madres o padres: escuchar que les pasa lo mismo alivia.',
    ],
    obstacles: [
      { q: 'Pedir ayuda me hace sentir que no puedo sola.', a: 'Criar nunca fue tarea de una sola persona. Pedir ayuda es cuidar al bebé a través de cuidarte a ti.' },
      { q: 'No tengo a nadie cerca.', a: 'Busca grupos de crianza, el centro de salud o líneas de apoyo perinatal. Tu médico o tu obstetra también pueden orientarte.' },
    ],
    steps: [
      { title: 'Parar un momento', instruction: 'Donde estés, haz una pausa. Si tienes al bebé en brazos, está bien. Respira despacio tres veces.', durationSec: 45, kind: 'breath' },
      { title: 'Cómo estoy', instruction: 'Pregúntate: «¿Cómo estoy ahora, de verdad?». Nota el cansancio, la emoción, el cuerpo. No hace falta cambiar nada.', durationSec: 60, kind: 'reflection' },
      { title: 'No eres la única persona', instruction: 'Recuerda que muchas madres y padres se sienten así. El cansancio y las dudas son parte de esta etapa.', durationSec: 45, kind: 'reflection' },
      { title: 'Una frase amable', instruction: 'Pon una mano en el pecho. Dite algo amable, como a una amiga: «Estoy haciendo lo que puedo, y eso alcanza».', durationSec: 60, kind: 'breath' },
      { title: 'Mi red', instruction: 'Piensa en tres personas o lugares que pueden ayudarte. Puede ser familia, amigos, vecinos o el centro de salud.', durationSec: 75, kind: 'reflection' },
      { title: 'Un pedido concreto', instruction: 'Elige una ayuda concreta para pedir esta semana. Por ejemplo: «¿Puedes traer la cena el jueves?».', durationSec: 60, kind: 'reflection' },
      { title: 'Revisar las señales', instruction: 'Si llevas más de dos semanas muy triste o sin disfrutar, anótalo y cuéntaselo a tu médico.', durationSec: 40, kind: 'instruction' },
    ],
  },
  {
    id: 'revision-de-vida',
    title: 'Revisión de vida',
    family: 'deconstructive',
    skills: ['resilience', 'attention'],
    summary: 'Recorrer las etapas de tu vida para reconocer lo que viviste, lo que aprendiste y lo que quieres dejar a otros.',
    mechanism: 'Mirar la propia historia con perspectiva ayuda a integrar lo bueno y lo difícil, y a encontrar sentido y legado.',
    evidenceLevel: 'moderada',
    evidence: [BUTLER_1963, BOHLMEIJER_2003, PINQUART_2012, ERIKSON_1982],
    cautions:
      'Al recordar pueden aparecer momentos dolorosos. No hace falta detenerse en ellos: puedes pasar a otra etapa. Si un recuerdo te angustia mucho o vuelve una y otra vez, háblalo con un profesional de la salud mental.',
    howItWorks: [
      'El psiquiatra Robert Butler propuso en 1963 que repasar la propia vida es un proceso natural en la vejez, y que puede ayudar a dar sentido a lo vivido. Lo llamó «revisión de vida».',
      'Los estudios muestran que la reminiscencia guiada reduce los síntomas de depresión y aumenta el bienestar en personas mayores (Bohlmeijer y otros, 2003; Pinquart y Forstmeier, 2012). Funciona mejor cuando se mira tanto lo logrado como lo que costó.',
    ],
    tips: [
      'Hazla en varias sesiones, una etapa por vez.',
      'Fotos, cartas o canciones de cada época ayudan a recordar.',
      'Compartirla con un nieto, un amigo o un grupo la vuelve más rica.',
    ],
    obstacles: [
      { q: 'Siento que no hice nada importante.', a: 'Fíjate en lo cotidiano: personas que cuidaste, trabajos que hiciste, momentos difíciles que superaste. Eso también es una vida con valor.' },
      { q: 'Me arrepiento de muchas cosas.', a: 'El arrepentimiento es parte de la revisión. Pregúntate qué aprendiste. Si te pesa mucho, la carta compasiva puede ayudar.' },
    ],
    steps: [
      { title: 'Llegar', instruction: 'Siéntate con calma. Ten cerca papel o un álbum de fotos si quieres.', durationSec: 40, kind: 'breath' },
      { title: 'Elegir una etapa', instruction: 'Elige una etapa: la infancia, la juventud, la adultez o la vida actual. Hoy recorrerás solo esa.', durationSec: 45, kind: 'reflection' },
      { title: 'Personas y lugares', instruction: '¿Quiénes estaban en esa etapa? ¿Dónde vivías? Deja que vengan imágenes, olores, sonidos.', durationSec: 120, kind: 'reflection' },
      { title: 'Lo bueno', instruction: '¿Qué momentos de esa etapa te dan alegría o ternura? Quédate un rato con uno de ellos.', durationSec: 120, kind: 'reflection' },
      { title: 'Lo difícil', instruction: '¿Qué fue difícil? ¿Cómo lo atravesaste? Nota qué fuerza o qué ayuda tuviste. Si duele mucho, sigue adelante.', durationSec: 90, kind: 'reflection' },
      { title: 'Lo que aprendí', instruction: '¿Qué aprendiste en esa etapa que todavía hoy te sirve?', durationSec: 90, kind: 'reflection' },
      { title: 'Mi legado', instruction: 'Piensa qué de eso te gustaría dejar o contar a alguien más joven. Anótalo en una frase.', durationSec: 75, kind: 'reflection' },
    ],
  },
];

const META: Record<string, PracticeMeta> = {
  'mapas-de-amor': { level: 'iniciacion', approaches: ['gottman'], module: 'pareja' },
  'ofertas-de-conexion': { level: 'iniciacion', approaches: ['gottman'], module: 'pareja' },
  'inicio-suave': { level: 'intermedio', prerequisites: ['dear-man'], approaches: ['gottman', 'focalizada-emocion'], module: 'pareja' },
  'reparar-tras-discusion': { level: 'intermedio', prerequisites: ['mapas-de-amor'], approaches: ['gottman', 'focalizada-emocion'], module: 'pareja' },
  'carta-al-ser-querido': { level: 'intermedio', prerequisites: ['pausa-autocompasion'], approaches: ['escritura', 'narrativa'], module: 'duelo' },
  'ritual-de-recuerdo': { level: 'iniciacion', approaches: ['narrativa', 'interpersonal'], module: 'duelo' },
  'oscilar-perdida-restauracion': { level: 'intermedio', approaches: ['interpersonal', 'act'], module: 'duelo' },
  'cuidarte-mientras-cuidas': { level: 'intermedio', prerequisites: ['pausa-autocompasion'], approaches: ['cft', 'interpersonal'], module: 'etapas' },
  'revision-de-vida': { level: 'intermedio', approaches: ['narrativa', 'logoterapia'], module: 'etapas' },
};

// ------------------------------------------------------------ artículos
const ARTICLES: Article[] = [
  {
    id: 'pareja-gottman',
    title: 'Lo que cuida a una pareja',
    subtitle: 'Las ideas del método Gottman: amistad, conflictos que se pueden hablar y reparación.',
    category: 'Relaciones',
    readingMin: 8,
    keyPoints: [
      'Las parejas estables no son las que no discuten, sino las que mantienen la amistad y saben reparar.',
      'La crítica, el desprecio, la actitud defensiva y la evasiva dañan mucho. Cada una tiene un antídoto.',
      'Responder a los pequeños pedidos de atención construye confianza día a día.',
      'Si hay violencia, miedo o control, nada de esto aplica: lo primero es la seguridad.',
    ],
    sections: [
      {
        heading: 'Décadas de observar parejas',
        paragraphs: [
          'John Gottman y su equipo estudiaron a miles de parejas desde los años setenta. Las grabaron mientras conversaban y discutían, y midieron su ritmo cardíaco. Luego las siguieron durante años para ver cuáles seguían juntas y contentas.',
          'De esos estudios salió un modelo que su esposa, Julie Gottman, ayudó a llevar a la terapia. Tiene tres pilares: la amistad, el manejo del conflicto y un sentido compartido. Es investigación sobre todo observacional: muestra qué distingue a las parejas, más que probar cada técnica por separado.',
        ],
      },
      {
        heading: 'La amistad: mapas de amor y ofertas',
        paragraphs: [
          'Las parejas que funcionan conocen bien el mundo del otro: sus preocupaciones, sus planes, su día. Gottman lo llama «mapas de amor». Como las personas cambian, hay que actualizarlos con preguntas abiertas.',
          'También importan los gestos chicos. Cada vez que alguien busca la atención del otro hace una «oferta de conexión». En un estudio con parejas recién casadas, las que seguían juntas seis años después se habían girado hacia esas ofertas mucho más (Driver y Gottman, 2004).',
          'Otra práctica útil es la conversación de estrés diario: un rato para contarse lo que pasó fuera de la pareja, en el trabajo o con la familia. Quien escucha se pone del lado del otro, no da consejos apurados y no defiende a quien causó el problema.',
        ],
      },
      {
        heading: 'Los cuatro jinetes y sus antídotos',
        paragraphs: [
          'Gottman describió cuatro formas de discutir que predicen la ruptura. La crítica ataca a la persona en lugar de la conducta. El desprecio incluye burla, ironía o mirar desde arriba, y es el que más daña. La actitud defensiva niega toda parte propia. La evasiva, o «muro de piedra», es cerrarse y dejar de responder.',
          'Cada jinete tiene un antídoto. Para la crítica, el inicio suave: hablar de lo que sientes y necesitas. Para el desprecio, cultivar el aprecio y la gratitud. Para la defensa, asumir aunque sea una pequeña parte. Para el muro, pedir una pausa, calmarse y volver.',
        ],
      },
      {
        heading: 'Inundación y reparación',
        paragraphs: [
          'Cuando una discusión sube de tono, el cuerpo se activa: el corazón se acelera y ya no se puede escuchar bien. Gottman lo llama «inundación». En ese estado es mejor parar al menos veinte minutos y hacer algo que calme, sin repasar la pelea.',
          'Todas las parejas pelean. Lo que distingue a las que funcionan es que hacen «intentos de reparación» y los aceptan: un chiste, una disculpa, un «empecemos de nuevo». También aceptan que muchos conflictos son permanentes y aprenden a hablarlos con respeto.',
        ],
      },
      {
        heading: 'Cuándo buscar ayuda',
        paragraphs: [
          'Si los mismos conflictos terminan siempre mal, o si hay mucho desprecio, una terapia de pareja puede ayudar. El método Gottman y la terapia focalizada en las emociones de Sue Johnson son dos enfoques con respaldo.',
          'La terapia de pareja no está indicada cuando hay violencia. En ese caso, lo primero es la seguridad de quien la sufre y la ayuda especializada.',
        ],
      },
    ],
    caveat: {
      title: 'Si hay violencia, esto no aplica',
      body: 'Las técnicas de comunicación sirven entre dos personas que se sienten seguras. Si hay golpes, amenazas, humillaciones, control del dinero o del celular, o miedo a la reacción del otro, no es un problema de comunicación. Busca ayuda especializada en violencia o llama a emergencias si estás en peligro.',
    },
    related: {
      practices: ['mapas-de-amor', 'ofertas-de-conexion', 'inicio-suave', 'reparar-tras-discusion', 'dear-man'],
      articles: ['asertividad-y-limites', 'vinculos-y-soledad'],
    },
    references: [GOTTMAN_1994, GOTTMAN_LEVENSON_1992, GOTTMAN_1998, DRIVER_2004, GOTTMAN_1999, GOTTMAN_2017, JOHNSON_2008, OMS_2012_VIOLENCIA],
  },
  {
    id: 'duelo-profundo',
    title: 'El duelo por dentro',
    subtitle: 'Tareas, idas y vueltas, y lazos que siguen: lo que sabemos hoy sobre perder a alguien.',
    category: 'Relaciones',
    readingMin: 9,
    keyPoints: [
      'El duelo no sigue fases fijas. Va y viene entre mirar la pérdida y ocuparse de la vida.',
      'Seguir sintiendo un lazo con quien murió es frecuente y puede ser sano.',
      'Hay duelos poco reconocidos, como la pérdida de un embarazo o de una mascota, que duelen igual.',
      'Si después de muchos meses el duelo impide vivir, conviene consultar: el duelo prolongado tiene tratamiento.',
    ],
    sections: [
      {
        heading: 'Las tareas del duelo',
        paragraphs: [
          'El psicólogo William Worden propuso pensar el duelo como tareas, no como fases. La primera es aceptar la realidad de la pérdida. La segunda, atravesar el dolor. La tercera, adaptarse a un mundo sin esa persona. La cuarta, encontrar una forma de seguir unido a ella mientras se sigue viviendo.',
          'Las tareas no van en orden y se vuelve a ellas muchas veces. Hablar de tareas ayuda a ver que el duelo tiene algo de activo: no solo se espera a que pase, también se hace.',
        ],
      },
      {
        heading: 'Ir y venir: el modelo de proceso dual',
        paragraphs: [
          'Margaret Stroebe y Henk Schut observaron que las personas en duelo oscilan. A veces miran la pérdida: lloran, recuerdan, extrañan. Otras veces miran la restauración: se ocupan de trámites, aprenden tareas nuevas, descansan o se distraen.',
          'Las dos cosas son necesarias. Estar siempre en el dolor agota, y evitarlo siempre lo posterga. Tomarse un respiro, reírse o pasarla bien un rato no es olvidar.',
        ],
      },
      {
        heading: 'Vínculos que continúan',
        paragraphs: [
          'Durante mucho tiempo se creyó que había que «soltar» a quien murió. Hoy se sabe que muchas personas mantienen un lazo: le hablan, conservan objetos, se preguntan qué diría. A esto se le llama vínculos continuos (Klass y otros, 1996).',
          'El lazo cambia de forma: pasa de la presencia al recuerdo, a los valores heredados, a los rituales. Para muchas personas eso da consuelo. Escribir una carta o crear un ritual de recuerdo son maneras de darle un lugar.',
        ],
      },
      {
        heading: 'Duelos que no siempre se ven',
        paragraphs: [
          'Algunos duelos tienen poco reconocimiento social. Kenneth Doka los llamó «duelos desautorizados». La pérdida de un embarazo, un bebé que muere al nacer o un tratamiento de fertilidad que no funcionó son ejemplos. El dolor puede ser muy grande aunque otros no lo vean (Kersting y Wagner, 2012).',
          'La muerte de una mascota también puede doler mucho. Era un compañero diario y un vínculo de cariño. Mereces el mismo respeto por ese duelo y el mismo tiempo para atravesarlo.',
        ],
      },
      {
        heading: 'Cuándo pedir ayuda',
        paragraphs: [
          'La mayoría de las personas atraviesa el duelo con el apoyo de su entorno, sin tratamiento (Bonanno, 2004). Pero en algunas el dolor sigue igual de intenso mucho tiempo después y no deja vivir. Es el duelo prolongado.',
          'Conviene consultar a un profesional si pasado un año todavía no puedes aceptar la pérdida, sientes un anhelo que ocupa todo el día o evitas por completo lo que la recuerda. También si tienes ideas de morir. En ese caso pide ayuda hoy. Hay tratamientos eficaces para el duelo prolongado (Shear, 2015).',
        ],
      },
    ],
    caveat: {
      title: 'Sobre las «cinco fases»',
      body: 'Negación, ira, negociación, depresión y aceptación se hicieron famosas, pero la investigación no muestra que el duelo siga esas fases en orden. Si no te pasa así, no lo estás haciendo mal.',
    },
    diagram: {
      title: 'Proceso dual del duelo',
      nodes: ['Mirar la pérdida', 'Tomar un respiro', 'Ocuparse de la vida', 'Volver al recuerdo'],
      caption: 'El duelo sano oscila entre la pérdida y la restauración (Stroebe y Schut, 1999).',
    },
    related: {
      practices: ['carta-al-ser-querido', 'ritual-de-recuerdo', 'oscilar-perdida-restauracion', 'pausa-autocompasion'],
      articles: ['duelo', 'vinculos-y-soledad'],
    },
    references: [WORDEN_2018, STROEBE_1999, KLASS_1996, DOKA_1989, KERSTING_2012, BONANNO_2004, SHEAR_2015, NEIMEYER_2001],
  },
  {
    id: 'embarazo-y-posparto',
    title: 'Embarazo y posparto: cuidar la mente',
    subtitle: 'Lo esperable, las señales de alerta y por qué pedir ayuda es parte del cuidado.',
    category: 'Etapas de la vida',
    readingMin: 7,
    keyPoints: [
      'En los primeros días tras el parto es común una tristeza pasajera, que suele irse en dos semanas.',
      'Si la tristeza o la angustia duran más, puede ser depresión perinatal: es frecuente y tiene tratamiento.',
      'Los padres y las parejas también pueden deprimirse en esta etapa.',
      'Una red de apoyo y una mirada amable hacia ti protegen tu salud mental y la del bebé.',
    ],
    sections: [
      {
        heading: 'Una etapa de grandes cambios',
        paragraphs: [
          'El embarazo y el primer año con un bebé cambian casi todo: el cuerpo, el sueño, la pareja, el trabajo, la forma de verte. Es normal sentir alegría y también miedo, cansancio o dudas. Las dos cosas pueden estar juntas.',
          'Muchas personas cargan con la idea de que deberían ser felices todo el tiempo. Cuando no lo son, aparecen la culpa y la vergüenza. Saber que es una etapa difícil para casi todos ayuda a pedir apoyo.',
        ],
      },
      {
        heading: 'Tristeza pasajera o depresión',
        paragraphs: [
          'En los primeros días después del parto, muchas madres tienen llanto fácil, cambios de humor y sensibilidad. Suele aparecer entre el segundo y el quinto día, y se va sola en unas dos semanas.',
          'La depresión perinatal es otra cosa. Puede empezar en el embarazo o en el primer año. Afecta a alrededor de una de cada diez madres (Howard y otros, 2014). Las señales son tristeza o vacío casi todo el día, no poder disfrutar, mucha culpa, angustia, dificultad para conectar con el bebé o pensar que serías mejor sin estar.',
          'Si estas señales duran más de dos semanas, consulta a tu médico, tu obstetra o un profesional de salud mental. Un cuestionario breve, como la escala de Edimburgo, ayuda a detectarla. Tiene tratamiento eficaz y pedir ayuda no te hace peor madre ni peor padre.',
        ],
      },
      {
        heading: 'Señales urgentes',
        paragraphs: [
          'Algunas señales piden ayuda el mismo día: ideas de hacerte daño o de dañar al bebé, confusión, ver u oír cosas que otros no ven, o no dormir nada durante días con mucha agitación. Pueden ser parte de una psicosis posparto, poco frecuente pero urgente (Bergink y otros, 2016). En ese caso ve a una guardia o llama a emergencias.',
        ],
      },
      {
        heading: 'También los padres y las parejas',
        paragraphs: [
          'Alrededor de uno de cada diez padres tiene depresión en el embarazo de su pareja o en el primer año del bebé (Paulson y Bazemore, 2010). A veces se nota más como irritabilidad, aislamiento o mucho trabajo. Cuidar a quien cuida es parte del cuidado del bebé.',
        ],
      },
      {
        heading: 'Red de apoyo y autocompasión',
        paragraphs: [
          'Criar nunca fue tarea de una sola persona. Pedir ayudas concretas, como comida, compras o unas horas de sueño, protege tu salud. Los grupos de crianza y los centros de salud también pueden ser parte de tu red.',
          'La autocompasión es tratarte como tratarías a una amiga en tu lugar. Baja la exigencia de hacerlo perfecto y deja más energía para cuidar. No necesitas ser una madre o un padre perfecto: alcanza con ser suficientemente bueno.',
        ],
      },
    ],
    related: {
      practices: ['cuidarte-mientras-cuidas', 'pausa-autocompasion', 'mano-en-el-pecho', 'please'],
      articles: ['autocompasion', 'cuidar-sin-agotarse'],
    },
    references: [
      HOWARD_2014,
      OHARA_2013,
      PAULSON_2010,
      BERGINK_2016,
      {
        citation:
          'Cox, J. L., Holden, J. M., & Sagovsky, R. (1987). Detection of postnatal depression: Development of the 10-item Edinburgh Postnatal Depression Scale. British Journal of Psychiatry, 150, 782–786.',
      },
      NEFF_2013,
      KERSTING_2012,
    ],
  },
  {
    id: 'envejecer-con-sentido',
    title: 'Envejecer con sentido',
    subtitle: 'Envejecimiento activo, revisión de vida, legado y cómo hacer frente a la soledad.',
    category: 'Etapas de la vida',
    readingMin: 7,
    keyPoints: [
      'Envejecer no es solo perder: con los años muchas personas ganan calma y claridad sobre lo que importa.',
      'Repasar la propia vida con guía reduce los síntomas de depresión en personas mayores.',
      'Pensar en el legado da sentido: lo que transmitimos a otros sigue después de nosotros.',
      'La soledad no deseada afecta la salud. Buscar contacto y propósito es tan importante como cuidarse el cuerpo.',
    ],
    sections: [
      {
        heading: 'Envejecimiento activo',
        paragraphs: [
          'La Organización Mundial de la Salud habla de envejecimiento activo: seguir participando en la vida social, cultural y comunitaria, cuidar la salud y sentirse seguro. No se trata de hacer mucho, sino de seguir siendo parte.',
          'La investigación muestra que, con los años, muchas personas eligen mejor con quién pasar su tiempo y se centran en vínculos que les hacen bien (Carstensen, 2006). Por eso el bienestar emocional suele mantenerse, o incluso mejorar, en la vejez.',
        ],
      },
      {
        heading: 'Revisión de vida',
        paragraphs: [
          'El psiquiatra Robert Butler propuso en 1963 que repasar la propia vida es natural en la vejez. Ese repaso ayuda a integrar lo bueno y lo difícil, y a hacer las paces con lo que no fue como se esperaba.',
          'La reminiscencia guiada, sola o en grupo, reduce los síntomas de depresión y mejora el bienestar en personas mayores (Bohlmeijer y otros, 2003; Pinquart y Forstmeier, 2012). Se recorre la vida por etapas, con fotos, objetos o canciones que ayudan a recordar.',
        ],
      },
      {
        heading: 'Sentido y legado',
        paragraphs: [
          'Erik Erikson llamó «generatividad» al deseo de cuidar y dejar algo a las generaciones que vienen. Puede ser una receta, un oficio, una historia familiar o un valor. Pensar en el legado ayuda a ver que la vida propia tiene un lugar en algo más grande.',
          'Contar la propia historia a hijos, nietos o vecinos también fortalece los vínculos. Quien escucha recibe algo valioso y quien cuenta se siente visto.',
        ],
      },
      {
        heading: 'La soledad',
        paragraphs: [
          'La soledad no deseada es frecuente en la vejez, por la jubilación, las pérdidas o los problemas de movilidad. Un metaanálisis la relacionó con más riesgo para la salud, comparable a otros factores conocidos (Holt-Lunstad y otros, 2015).',
          'Las intervenciones que mejor funcionan no son solo juntar a las personas, sino trabajar los pensamientos que alejan, como «nadie quiere estar conmigo» (Masi y otros, 2011). Un taller, un voluntariado o una llamada fija por semana pueden ser un primer paso.',
          'Si la tristeza o el desinterés duran semanas, consulta a tu médico. La depresión en la vejez no es parte normal de envejecer y tiene tratamiento.',
        ],
      },
    ],
    related: {
      practices: ['revision-de-vida', 'lo-vivido-queda', 'tres-caminos-sentido', 'linea-de-vida'],
      articles: ['vinculos-y-soledad', 'sentido-y-valores', 'logoterapia'],
    },
    references: [OMS_2002, CARSTENSEN_2006, BUTLER_1963, BOHLMEIJER_2003, PINQUART_2012, ERIKSON_1982, HOLT_LUNSTAD_2015, MASI_2011],
  },
];

// ------------------------------------------------------------ programas
const PROGRAMS: Program[] = [
  {
    id: 'pareja-cuatro-semanas',
    title: 'Pareja en 4 semanas',
    subtitle: 'Amistad, conflictos que se pueden hablar y reparación',
    description:
      'Un recorrido para hacer en pareja o, si tu pareja no quiere, empezar por tu lado. Propone renovar la amistad, discutir sin dañar y aprender a reparar. No es para parejas donde hay violencia, miedo o control: en ese caso busca ayuda especializada.',
    basis: 'Método Gottman (Gottman y Silver, 1999; Driver y Gottman, 2004) y aportes de la terapia focalizada en las emociones (Johnson, 2008).',
    rhythm: 'Dos o tres encuentros de 15 minutos por semana.',
    weeks: [
      {
        title: 'Semana 1 · Conocerse de nuevo',
        focus: 'Actualizar los mapas de amor',
        description: 'Harán preguntas abiertas para conocer el mundo actual del otro y leerán cómo se cuida una pareja.',
        practiceIds: ['mapas-de-amor'],
        articleIds: ['pareja-gottman'],
      },
      {
        title: 'Semana 2 · Girarse hacia el otro',
        focus: 'Ofertas de conexión y aprecio',
        description: 'Notarás los pequeños pedidos de atención y responderás a ellos. Anotarás cada día algo que aprecias de tu pareja.',
        practiceIds: ['ofertas-de-conexion', 'tres-cosas-buenas'],
        articleIds: ['pareja-gottman'],
        journalType: 'tres-cosas',
      },
      {
        title: 'Semana 3 · Discutir sin dañar',
        focus: 'Inicio suave y antídotos',
        description: 'Prepararás una queja sin crítica ni desprecio y aprenderás a pedir una pausa cuando la charla se calienta.',
        practiceIds: ['inicio-suave', 'dear-man'],
        articleIds: ['asertividad-y-limites'],
        journalType: 'conversacion',
      },
      {
        title: 'Semana 4 · Reparar',
        focus: 'Volver después de una discusión',
        description: 'Revisarán juntos una discusión pasada, cada uno asumirá su parte y acordarán un cambio pequeño.',
        practiceIds: ['reparar-tras-discusion', 'pausa-autocompasion'],
        articleIds: ['pareja-gottman'],
      },
    ],
  },
  {
    id: 'duelo-lazo-y-vida',
    title: 'El lazo y la vida que sigue',
    subtitle: 'Cuatro semanas para un duelo que va y viene',
    description:
      'Para quien perdió a una persona, un embarazo o una mascota y quiere acompañar su duelo con más herramientas. Alterna espacios para el dolor y para la vida cotidiana, y propone formas de seguir unido a quien no está. Si el duelo te impide vivir tras muchos meses, consulta a un profesional.',
    basis: 'Tareas del duelo (Worden, 2018), modelo de proceso dual (Stroebe y Schut, 1999) y vínculos continuos (Klass y otros, 1996).',
    rhythm: 'Unos minutos al día, a tu ritmo. Puedes repetir cualquier semana.',
    weeks: [
      {
        title: 'Semana 1 · Entender el duelo',
        focus: 'Ir y venir entre el dolor y la vida',
        description: 'Leerás cómo funciona el duelo y revisarás tu semana para ver si hay lugar para las dos cosas.',
        practiceIds: ['oscilar-perdida-restauracion', 'mano-en-el-pecho'],
        articleIds: ['duelo-profundo'],
      },
      {
        title: 'Semana 2 · Poner en palabras',
        focus: 'Una carta a quien ya no está',
        description: 'Escribirás lo que extrañas, lo que agradeces y lo que quedó pendiente, en uno o varios ratos.',
        practiceIds: ['carta-al-ser-querido', 'pausa-autocompasion'],
        articleIds: ['duelo-profundo'],
        journalType: 'escritura-expresiva',
      },
      {
        title: 'Semana 3 · Un lugar para el recuerdo',
        focus: 'Crear un ritual propio',
        description: 'Diseñarás un gesto simple para honrar a quien perdiste en fechas especiales o días difíciles.',
        practiceIds: ['ritual-de-recuerdo'],
        articleIds: ['duelo'],
      },
      {
        title: 'Semana 4 · Seguir viviendo con el lazo',
        focus: 'Vínculos y sentido',
        description: 'Buscarás apoyo en otras personas y pensarás qué de ese vínculo quieres llevar contigo.',
        practiceIds: ['lo-vivido-queda', 'caminar-atencion'],
        articleIds: ['vinculos-y-soledad'],
        journalType: 'sentido',
      },
    ],
  },
];

// ------------------------------------------------------------ píldoras
const PILLS: Pill[] = [
  {
    id: 'pildora-cuatro-jinetes',
    title: 'Los cuatro jinetes',
    subtitle: 'Cuatro formas de discutir que dañan, y qué hacer en su lugar.',
    slides: [
      { heading: 'Qué son', text: 'John Gottman vio miles de parejas discutir. Cuatro conductas predecían la ruptura. Las llamó los cuatro jinetes.' },
      { heading: 'Crítica', text: 'La crítica ataca a la persona: «Eres un egoísta». El antídoto es hablar de ti y de lo que necesitas: «Me siento sola, ¿me ayudas con la cena?».' },
      { heading: 'Desprecio', text: 'El desprecio es burla, ironía o mirar desde arriba. Es el que más daña. El antídoto es buscar cada día algo que aprecias del otro y decirlo.' },
      { heading: 'Defensa y muro', text: 'Defenderse siempre cierra la charla. Asumir una parte pequeña la abre. Callar y cerrarse es el muro. Mejor pedir una pausa y volver.' },
      { heading: 'Si hay violencia', text: 'Esto vale entre dos personas que se sienten seguras. Si hay miedo, golpes o control, no es un tema de comunicación. Busca ayuda especializada.' },
    ],
    related: { practices: ['inicio-suave', 'reparar-tras-discusion'], articles: ['pareja-gottman'] },
    references: [GOTTMAN_1994, GOTTMAN_1999],
  },
  {
    id: 'pildora-proceso-dual',
    title: 'El duelo va y viene',
    subtitle: 'Llorar y seguir viviendo no se oponen.',
    slides: [
      { heading: 'Sin fases fijas', text: 'El duelo no sigue fases en orden. Hay días de mucho dolor y días más livianos. Eso es normal.' },
      { heading: 'Dos lados', text: 'A veces miras la pérdida: lloras, recuerdas, extrañas. Otras veces miras la vida: trabajas, cocinas, ves a alguien.' },
      { heading: 'Ir y venir', text: 'Stroebe y Schut vieron que lo sano es pasar de un lado al otro. Estar siempre en el dolor agota. Evitarlo siempre lo deja para después.' },
      { heading: 'Un respiro', text: 'Reír o pasarla bien un rato no es olvidar. El amor por quien perdiste sigue también en esos momentos.' },
      { heading: 'Cuándo consultar', text: 'Si después de muchos meses el dolor no te deja vivir, consulta a un profesional. El duelo prolongado tiene tratamiento.' },
    ],
    related: { practices: ['oscilar-perdida-restauracion', 'carta-al-ser-querido'], articles: ['duelo-profundo'] },
    references: [STROEBE_1999, SHEAR_2015],
  },
  {
    id: 'pildora-tristeza-posparto',
    title: 'Tristeza posparto o depresión',
    subtitle: 'Cómo distinguirlas y cuándo pedir ayuda.',
    slides: [
      { heading: 'Lo común', text: 'En los días después del parto, muchas madres lloran fácil y cambian de humor. Suele pasar sola en unas dos semanas.' },
      { heading: 'Cuándo es más', text: 'Si la tristeza, el vacío o la angustia duran más de dos semanas, puede ser depresión. Le pasa a una de cada diez madres.' },
      { heading: 'Otras señales', text: 'No poder disfrutar, sentir mucha culpa o no conectar con el bebé también son señales. Los padres pueden pasar por lo mismo.' },
      { heading: 'Pedir ayuda', text: 'Cuéntaselo a tu médico o a un profesional. La depresión posparto tiene tratamiento. Pedir ayuda es cuidar al bebé.' },
      { heading: 'Urgente', text: 'Si piensas en hacerte daño o en dañar al bebé, o ves cosas raras, pide ayuda hoy. Ve a una guardia o llama a emergencias.' },
    ],
    related: { practices: ['cuidarte-mientras-cuidas'], articles: ['embarazo-y-posparto'] },
    references: [HOWARD_2014, OHARA_2013, PAULSON_2010],
  },
  {
    id: 'pildora-revision-de-vida',
    title: 'Mirar la vida vivida',
    subtitle: 'Recordar con guía ayuda a dar sentido.',
    slides: [
      { heading: 'Una idea de Butler', text: 'En 1963, Robert Butler dijo que repasar la vida es algo natural al envejecer. Ayuda a hacer las paces con lo vivido.' },
      { heading: 'Qué dice la ciencia', text: 'Recordar con guía, por etapas, baja la tristeza y sube el bienestar en las personas mayores. Lo muestran varios estudios.' },
      { heading: 'Cómo hacerlo', text: 'Elige una etapa. Piensa en quiénes estaban, qué fue lindo, qué fue difícil y qué aprendiste. Las fotos ayudan.' },
      { heading: 'Tu legado', text: 'Piensa qué te gustaría dejar a los más jóvenes. Una receta, un oficio, una historia o un valor.' },
      { heading: 'Contra la soledad', text: 'Contar tu historia te acerca a otros. Si la tristeza dura semanas, habla con tu médico. Tiene tratamiento.' },
    ],
    related: { practices: ['revision-de-vida', 'lo-vivido-queda'], articles: ['envejecer-con-sentido'] },
    references: [BUTLER_1963, PINQUART_2012],
  },
];

// ------------------------------------------------------------ glosario
const GLOSSARY: GlossaryTerm[] = [
  {
    id: 'cuatro-jinetes',
    term: 'Cuatro jinetes',
    definition: 'En el método Gottman, cuatro formas de discutir que dañan a la pareja: crítica, desprecio, actitud defensiva y evasiva. Cada una tiene un antídoto.',
    articleId: 'pareja-gottman',
    practiceId: 'inicio-suave',
  },
  {
    id: 'oferta-de-conexion',
    term: 'Oferta de conexión',
    definition: 'Un gesto con el que alguien busca la atención o el cariño del otro, como un comentario o una mirada. Responder a ellas construye confianza.',
    articleId: 'pareja-gottman',
    practiceId: 'ofertas-de-conexion',
  },
  {
    id: 'proceso-dual-duelo',
    term: 'Proceso dual del duelo',
    definition: 'Modelo de Stroebe y Schut: el duelo sano va y viene entre mirar la pérdida y ocuparse de la vida que sigue.',
    articleId: 'duelo-profundo',
    practiceId: 'oscilar-perdida-restauracion',
  },
  {
    id: 'vinculos-continuos',
    term: 'Vínculos continuos',
    definition: 'El lazo que muchas personas mantienen con quien murió, a través del recuerdo, los rituales o los valores heredados. Puede ser fuente de consuelo.',
    articleId: 'duelo-profundo',
    practiceId: 'carta-al-ser-querido',
  },
  {
    id: 'duelo-prolongado',
    term: 'Duelo prolongado',
    definition: 'Duelo en el que el dolor y el anhelo siguen muy intensos mucho tiempo después de la pérdida y no dejan vivir. Tiene tratamiento eficaz con un profesional.',
    articleId: 'duelo-profundo',
  },
  {
    id: 'revision-de-vida',
    term: 'Revisión de vida',
    definition: 'Repaso guiado de la propia historia, por etapas, propuesto por Robert Butler. En personas mayores ayuda a dar sentido y reduce la tristeza.',
    articleId: 'envejecer-con-sentido',
    practiceId: 'revision-de-vida',
  },
];

export const ETAPAS_VINCULOS_PACK: ContentPack = {
  id: 'etapas-vinculos',
  practices: PRACTICES,
  meta: META,
  articles: ARTICLES,
  programs: PROGRAMS,
  pills: PILLS,
  glossary: GLOSSARY,
};
