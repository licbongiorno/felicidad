import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Psicología analítica de Jung»:
 *  - sombra y proyección (lo que me irrita del otro), complejos («botones que se aprietan»),
 *    arquetipos como lenguaje para pensar la propia historia, tipos psicológicos (sin MBTI),
 *    sueños con preguntas de amplificación, imaginación activa breve, mandala en papel e
 *    individuación (la segunda mitad de la vida);
 *  - artículos, programa de cuatro semanas, píldoras y glosario.
 *
 * La psicología junguiana tiene poca investigación empírica: se declara en cada ficha y se
 * ofrece como marco de reflexión, nunca como explicación o diagnóstico. Cuando existe, se
 * cita evidencia afín (trabajo con sueños de Hill, proyección en psicología social, mandalas
 * y ansiedad). La imaginación activa lleva precauciones: no se recomienda con antecedentes de
 * psicosis o disociación. No se incluyen citas atribuidas a Jung sin fuente.
 */

const JUNG_1964: Reference = { citation: 'Jung, C. G. (1964). Man and his symbols. Doubleday.', note: 'Edición en castellano: «El hombre y sus símbolos». Introducción accesible escrita con colaboradores.' };
const JUNG_TIPOS: Reference = { citation: 'Jung, C. G. (1921/1971). Psychological types (Collected Works, vol. 6). Princeton University Press.' };
const JUNG_AION: Reference = { citation: 'Jung, C. G. (1951/1959). Aion: Researches into the phenomenology of the self (Collected Works, vol. 9, parte 2). Princeton University Press.' };
const JUNG_COMPLEJO: Reference = { citation: 'Jung, C. G. (1934/1960). A review of the complex theory. En The structure and dynamics of the psyche (Collected Works, vol. 8). Princeton University Press.' };
const JUNG_TRASCENDENTE: Reference = { citation: 'Jung, C. G. (1916/1960). The transcendent function. En The structure and dynamics of the psyche (Collected Works, vol. 8). Princeton University Press.' };
const JUNG_ETAPAS: Reference = { citation: 'Jung, C. G. (1930/1960). The stages of life. En The structure and dynamics of the psyche (Collected Works, vol. 8). Princeton University Press.' };
const CHODOROW_1997: Reference = { citation: 'Chodorow, J. (Ed.). (1997). Jung on active imagination. Princeton University Press.' };
const VON_FRANZ_1996: Reference = { citation: 'von Franz, M.-L. (1996). The interpretation of fairy tales (ed. revisada). Shambhala.' };
const HILL_1996: Reference = { citation: 'Hill, C. E. (1996). Working with dreams in psychotherapy. Guilford Press.', note: 'Modelo cognitivo-experiencial de trabajo con sueños: explorar, comprender y actuar.' };
const HILL_KNOX_2010: Reference = {
  citation: 'Hill, C. E., & Knox, S. (2010). The use of dreams in modern psychotherapy. International Review of Neurobiology, 92, 291–317.',
};
const SCHREDL_2003: Reference = {
  citation: 'Schredl, M., & Hofmann, F. (2003). Continuity between waking activities and dream activities. Consciousness and Cognition, 12(2), 298–308.',
  doi: '10.1016/S1053-8100(02)00072-7',
};
const BAUMEISTER_1998: Reference = {
  citation:
    'Baumeister, R. F., Dale, K., & Sommer, K. L. (1998). Freudian defense mechanisms and empirical findings in modern social psychology: Reaction formation, projection, displacement, undoing, isolation, sublimation, and denial. Journal of Personality, 66(6), 1081–1124.',
  doi: '10.1111/1467-6494.00043',
};
const ROESLER_2013: Reference = {
  citation: 'Roesler, C. (2013). Evidence for the effectiveness of Jungian psychotherapy: A review of empirical studies. Behavioral Sciences, 3(4), 562–575.',
  doi: '10.3390/bs3040562',
  note: 'Revisión de estudios mayormente observacionales; pocos ensayos controlados.',
};
const PITTENGER_2005: Reference = {
  citation: 'Pittenger, D. J. (2005). Cautionary comments regarding the Myers-Briggs Type Indicator. Consulting Psychology Journal: Practice and Research, 57(3), 210–221.',
  doi: '10.1037/1065-9293.57.3.210',
};
const CURRY_KASSER_2005: Reference = {
  citation: 'Curry, N. A., & Kasser, T. (2005). Can coloring mandalas reduce anxiety? Art Therapy, 22(2), 81–85.',
  doi: '10.1080/07421656.2005.10129441',
};
const MCADAMS_2013: Reference = {
  citation: 'McAdams, D. P., & McLean, K. C. (2013). Narrative identity. Current Directions in Psychological Science, 22(3), 233–238.',
  doi: '10.1177/0963721413475622',
};

const MARCO =
  'Es un marco para reflexionar, con poca investigación empírica. No busques en él explicaciones definitivas ni diagnósticos.';

export const JUNG_PACK: ContentPack = {
  id: 'jung',

  // ================================================================== prácticas
  practices: [
    {
      id: 'lo-que-me-irrita-del-otro',
      title: 'Lo que me irrita del otro',
      family: 'deconstructive',
      skills: ['attention', 'compassion'],
      summary: 'Usar una irritación fuerte con alguien como espejo: qué rasgo te molesta tanto y qué podría decir de ti.',
      mechanism: 'Preguntarte qué parte tuya se parece a lo que rechazas reduce el juicio y devuelve energía a algo propio que no tenía lugar.',
      evidenceLevel: 'contemplativa',
      evidence: [JUNG_AION, BAUMEISTER_1998, JUNG_1964],
      howItWorks: [
        'Jung llamó «sombra» a las partes propias que no aceptamos. Pensaba que muchas veces la encontramos primero afuera: en alguien que nos irrita de forma desproporcionada. A eso lo llamó proyección.',
        'La psicología social estudió algo parecido. Baumeister y colaboradores (1998) revisaron experimentos: quien intenta no pensar en un rasgo propio tiende a verlo más en los demás. La evidencia es parcial, pero coincide con la intuición de Jung.',
        'No toda irritación es proyección. A veces el otro hace algo dañino y molestarse es sano. La pregunta no es «¿soy igual?», sino «¿hay algo de esto en mí que me cuesta aceptar?».',
      ],
      tips: [
        'Elige a alguien que te irrita mucho pero no te hizo daño grave.',
        'Busca el rasgo, no la persona: «la arrogancia», «la pereza», «la necesidad de atención».',
        'Lo que encuentres puede ser una versión sana del rasgo que te falta. Por ejemplo, detrás de la «arrogancia» puede estar el derecho a ocupar lugar.',
      ],
      obstacles: [
        { q: 'Yo no soy así para nada.', a: 'Puede ser. Prueba otra pregunta: ¿qué te prohibieron a ti que esa persona se permite? A veces la sombra es una libertad que no te diste.' },
        { q: 'Me da culpa encontrar algo de eso en mí.', a: 'Todos tenemos todo un poco. Reconocerlo no te vuelve esa persona: te da la posibilidad de elegir cómo usarlo.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio y nota cómo estás. No hace falta cambiar nada.', durationSec: 30, kind: 'breath' },
        { title: 'La persona', instruction: 'Piensa en alguien que te irrita más de lo que la situación justifica. Puede ser un conocido o alguien público.', durationSec: 60, kind: 'reflection' },
        { title: 'El rasgo', instruction: '¿Qué es exactamente lo que te molesta? Ponle un nombre al rasgo, en una o dos palabras.', durationSec: 60, kind: 'reflection' },
        { title: 'La reacción', instruction: '¿Qué sientes en el cuerpo cuando lo ves? ¿Qué te dan ganas de decirle?', durationSec: 45, kind: 'reflection' },
        { title: 'El espejo', instruction: 'Pregúntate con curiosidad: ¿hay algo de ese rasgo en mí, aunque sea pequeño o escondido?', durationSec: 75, kind: 'reflection' },
        { title: 'Lo prohibido', instruction: '¿Qué se permite esa persona que a ti te enseñaron que no estaba bien? Anótalo.', durationSec: 60, kind: 'reflection' },
        { title: 'Una versión sana', instruction: 'Si ese rasgo tuviera una forma sana en tu vida, ¿cómo se vería? Piensa un ejemplo concreto.', durationSec: 60, kind: 'reflection' },
      ],
    },
    {
      id: 'botones-que-se-aprietan',
      title: 'Los botones que se aprietan',
      family: 'deconstructive',
      skills: ['attention', 'resilience'],
      summary: 'Reconocer un complejo: una reacción que se dispara siempre ante lo mismo, más fuerte de lo que la situación pide.',
      mechanism: 'Ver el patrón del «botón» separa la situación de hoy de la carga emocional vieja. Esa distancia baja la reactividad.',
      evidenceLevel: 'contemplativa',
      evidence: [JUNG_COMPLEJO, JUNG_1964],
      howItWorks: [
        'Jung estudió los complejos con un experimento de asociación de palabras. Notó que ciertas palabras hacían tardar a la gente, tartamudear o cambiar la respiración. Pensó que tocaban un núcleo emocional cargado de recuerdos.',
        'Hoy diríamos que todos tenemos «botones»: temas que nos disparan una reacción automática y desproporcionada. La crítica, el dinero, la autoridad o sentirse ignorado son botones muy comunes.',
        'Un complejo no es un defecto. Es un nudo de experiencia que pide atención. Cuando lo conoces, puedes notar que se aprieta y darte un momento antes de reaccionar. ' + MARCO,
      ],
      tips: [
        'Mira tus reacciones de las últimas semanas: ¿cuál se repite?',
        'La señal típica es la desproporción: reaccionas como si estuviera en juego mucho más.',
        'Puedes cruzarlo con el explorador de esquemas: a veces el botón es un esquema que se activa.',
      ],
      obstacles: [{ q: 'Cuando se aprieta, no me doy cuenta hasta después.', a: 'Es lo normal al principio. Revisarlo después ya sirve. Con el tiempo lo notarás antes, a veces en el cuerpo.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Apoya la espalda.', durationSec: 30, kind: 'breath' },
        { title: 'Las reacciones', instruction: 'Recuerda tres veces recientes en que reaccionaste más fuerte de lo que hubieras querido.', durationSec: 75, kind: 'reflection' },
        { title: 'El tema común', instruction: '¿Qué tienen en común? Quizá sentirte ignorado, criticado, controlado o en falta.', durationSec: 60, kind: 'reflection' },
        { title: 'La carga', instruction: 'Cuando se aprieta ese botón, ¿qué emoción aparece? ¿A qué edad te sientes en ese momento?', durationSec: 60, kind: 'reflection' },
        { title: 'Un nombre', instruction: 'Ponle un nombre al botón. Por ejemplo: «el botón de no ser tenido en cuenta».', durationSec: 45, kind: 'reflection' },
        { title: 'La señal', instruction: '¿Cómo te avisa el cuerpo que se apretó? Calor, nudo en el pecho, mandíbula tensa.', durationSec: 45, kind: 'reflection' },
        { title: 'Un plan', instruction: 'Piensa qué harás la próxima vez que lo notes. Por ejemplo, respirar tres veces y decir «se apretó el botón».', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'mis-funciones-psicologicas',
      title: 'Cómo miro el mundo: introversión, extraversión y cuatro funciones',
      family: 'constructive',
      skills: ['attention'],
      summary: 'Reflexionar sobre tu forma preferida de cargar energía y de conocer el mundo, según los tipos de Jung, sin etiquetas ni tests.',
      mechanism: 'Reconocer tus preferencias te ayuda a entender roces con otros y a cultivar la función que menos usas.',
      evidenceLevel: 'contemplativa',
      evidence: [JUNG_TIPOS, PITTENGER_2005],
      howItWorks: [
        'En «Tipos psicológicos» (1921), Jung describió dos actitudes. La extraversión se orienta hacia afuera: personas, actividad, estímulos. La introversión se orienta hacia adentro: ideas, sensaciones y tiempo a solas.',
        'También describió cuatro funciones. Dos para percibir: la sensación, que registra lo concreto, y la intuición, que capta posibilidades. Dos para decidir: el pensamiento, que ordena con lógica, y el sentimiento, que valora lo que importa.',
        'Jung pensaba que todos usamos todo, con preferencias. Las pruebas que convierten esto en «16 tipos» tienen problemas de validez (Pittenger, 2005). Aquí no hay test: sólo preguntas para conocerte.',
      ],
      tips: [
        'Piensa en ti en un día común, no en tu mejor versión.',
        'La función que menos usas suele ser la que más te cuesta y la que más te enriquece.',
        'Sirve mucho pensarlo con tu pareja o tu familia: explica muchos roces.',
      ],
      obstacles: [{ q: 'Me reconozco en todo.', a: 'Es una buena señal: usas varias funciones. Busca cuál te sale sin esfuerzo y cuál te cansa.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio y piensa en una semana común de tu vida.', durationSec: 30, kind: 'breath' },
        { title: 'La energía', instruction: '¿Qué te recarga más? ¿Estar con gente y en movimiento, o un rato a solas y en calma?', durationSec: 60, kind: 'reflection' },
        { title: 'Lo concreto o lo posible', instruction: '¿Te fijas primero en los datos y los detalles, o en las ideas y lo que podría ser?', durationSec: 60, kind: 'reflection' },
        { title: 'La lógica o el valor', instruction: 'Al decidir, ¿pesa más lo que es lógico o lo que es importante para ti y para otros?', durationSec: 60, kind: 'reflection' },
        { title: 'La que menos usas', instruction: '¿Cuál de las cuatro te cuesta más? ¿En qué momentos te hace falta?', durationSec: 60, kind: 'reflection' },
        { title: 'Un roce', instruction: 'Piensa en un roce con alguien cercano. ¿Puede venir de mirar el mundo de forma distinta?', durationSec: 60, kind: 'reflection' },
        { title: 'Cultivar', instruction: 'Elige una forma pequeña de usar esta semana la función que menos usas.', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'trabajar-un-sueno',
      title: 'Trabajar un sueño',
      family: 'deconstructive',
      skills: ['attention', 'compassion'],
      summary: 'Explorar un sueño con preguntas: qué imágenes aparecieron, qué sentiste, a qué te recuerdan y qué podría decir de tu vida de hoy.',
      mechanism: 'Los sueños suelen retomar preocupaciones y emociones del día. Asociar libremente sobre sus imágenes ayuda a ponerlas en palabras.',
      evidenceLevel: 'preliminar',
      evidence: [HILL_1996, HILL_KNOX_2010, SCHREDL_2003, JUNG_1964],
      howItWorks: [
        'La investigación muestra que los sueños tienen continuidad con la vida despierta: retoman preocupaciones, vínculos y emociones del día (Schredl y Hofmann, 2003). No hace falta pensar que traen mensajes ocultos para que sean útiles.',
        'Clara Hill desarrolló un modelo de trabajo con sueños en tres etapas: explorar las imágenes, comprender qué dicen de la vida actual y decidir una acción. Los estudios muestran que ayuda a las personas a entenderse mejor (Hill y Knox, 2010).',
        'Jung proponía «amplificar» las imágenes: preguntarse qué significa cada una para ti, y también en los cuentos y los mitos. Pensaba que cada personaje del sueño podía ser una parte de uno mismo. Aquí se usan sus preguntas como un juego de reflexión.',
      ],
      tips: [
        'Anota el sueño apenas te despiertes, aunque sea en tres palabras.',
        'No busques la interpretación correcta: busca la que te dice algo.',
        'Los diccionarios de sueños no sirven: cada imagen significa algo distinto para cada persona.',
        'Usa la plantilla «Diario de sueños» para guardarlo.',
      ],
      obstacles: [
        { q: 'No me acuerdo de mis sueños.', a: 'Antes de dormir, dite que quieres recordarlos. Deja papel junto a la cama y anota algo apenas despiertes, sin moverte mucho.' },
        { q: 'Tengo pesadillas que se repiten.', a: 'Las pesadillas frecuentes, sobre todo después de algo traumático, tienen tratamientos eficaces. Consulta a un profesional en lugar de trabajarlas solo.' },
      ],
      cautions:
        'Si el sueño repite una experiencia traumática o tienes pesadillas casi todas las noches, no lo trabajes solo: consulta a un profesional. Las pesadillas tienen tratamientos eficaces.',
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Ten a mano lo que anotaste del sueño.', durationSec: 30, kind: 'breath' },
        { title: 'Contarlo', instruction: 'Cuenta el sueño en presente, como si pasara ahora: «Estoy en una casa…». Anota lo que recuerdes.', durationSec: 90, kind: 'reflection' },
        { title: 'La emoción', instruction: '¿Qué sentiste en el sueño? ¿Y al despertar? Ponle una o dos palabras.', durationSec: 45, kind: 'reflection' },
        { title: 'Una imagen', instruction: 'Elige la imagen más fuerte. ¿Qué es para ti? ¿Qué te recuerda de tu vida?', durationSec: 75, kind: 'reflection' },
        { title: 'Una parte tuya', instruction: 'Si esa imagen o ese personaje fuera una parte tuya, ¿qué parte sería?', durationSec: 60, kind: 'reflection' },
        { title: 'Tu vida de hoy', instruction: '¿Con qué situación actual podría tener que ver el sueño? Piensa en lo que te preocupa o te mueve ahora.', durationSec: 60, kind: 'reflection' },
        { title: 'Un gesto', instruction: 'Si el sueño te pidiera algo, ¿qué sería? Elige un gesto pequeño para hoy.', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'imaginacion-activa-breve',
      title: 'Imaginación activa: conversar con una imagen',
      family: 'deconstructive',
      skills: ['attention', 'compassion'],
      summary: 'Dejar que aparezca una imagen interior, observarla y conversar con ella por escrito, manteniendo siempre tu lugar de observador.',
      mechanism: 'Darle forma y voz a una emoción a través de una imagen permite dialogar con ella en lugar de quedar atrapado en ella.',
      evidenceLevel: 'contemplativa',
      evidence: [JUNG_TRASCENDENTE, CHODOROW_1997],
      howItWorks: [
        'Jung desarrolló la imaginación activa como una forma de dialogar con el inconsciente estando despierto. Se deja que aparezca una imagen, por ejemplo a partir de un sueño o de una emoción, y se la observa con atención. Después se conversa con ella.',
        'La clave, decía Jung, es que el yo participe: no sólo mirar como en una película, sino responder, preguntar y tomar postura. Por eso suele hacerse por escrito, como un diálogo.',
        'Es una práctica con muy poca investigación y que puede ser intensa. ' + MARCO,
      ],
      tips: [
        'Empieza con una emoción leve o con una imagen amable de un sueño.',
        'Escribe el diálogo: te ayuda a mantener los pies en la tierra.',
        'Si la imagen se vuelve amenazante, puedes terminar cuando quieras. Abre los ojos y mira la habitación.',
        'Hazla pocos minutos al principio.',
      ],
      obstacles: [{ q: 'No aparece ninguna imagen.', a: 'Está bien. Puedes partir de un color, una sensación o un personaje de un cuento. No se fuerza.' }],
      cautions:
        'No hagas esta práctica si tuviste psicosis, si a veces sientes que no eres tú o que el mundo no es real, o si estás atravesando una crisis. Puede intensificar esas experiencias. Si en algún momento te sientes desbordado, para, apoya los pies y nombra cinco cosas que ves.',
      steps: [
        { title: 'Anclar', instruction: 'Siéntate con los pies en el piso. Respira despacio. Nota tres cosas que ves en la habitación.', durationSec: 45, kind: 'breath' },
        { title: 'Un punto de partida', instruction: 'Elige una emoción leve que tengas hoy, o una imagen de un sueño reciente.', durationSec: 45, kind: 'reflection' },
        { title: 'Dejar que aparezca', instruction: 'Cierra los ojos si quieres. Deja que esa emoción tome forma: una figura, un animal, un paisaje.', durationSec: 75, kind: 'breath' },
        { title: 'Observar', instruction: 'Míralo sin cambiarlo. ¿Cómo es? ¿Qué hace? ¿Cómo te sientes al verlo?', durationSec: 60, kind: 'reflection' },
        { title: 'Preguntar', instruction: 'Pregúntale por escrito: «¿Quién eres? ¿Qué quieres de mí?». Anota la primera respuesta que surja.', durationSec: 75, kind: 'reflection' },
        { title: 'Responder', instruction: 'Contéstale desde tu lugar de hoy. Puedes estar de acuerdo, discutir o poner un límite.', durationSec: 75, kind: 'reflection' },
        { title: 'Volver', instruction: 'Despídete de la imagen. Abre los ojos, siente los pies y nombra cinco cosas que ves.', durationSec: 40, kind: 'instruction' },
      ],
    },
    {
      id: 'mandala-del-dia',
      title: 'Un mandala del día',
      family: 'attentional',
      skills: ['attention'],
      summary: 'Dibujar o colorear un círculo con formas y colores que expresen cómo estás, y después mirarlo con preguntas.',
      mechanism: 'Concentrarse en un dibujo dentro de un círculo ordena la atención y baja la activación. Mirarlo después ayuda a poner en palabras el estado de ánimo.',
      evidenceLevel: 'preliminar',
      evidence: [CURRY_KASSER_2005, JUNG_1964],
      howItWorks: [
        'Jung dibujaba un círculo casi todos los días durante una época difícil de su vida. Pensaba que esos dibujos mostraban su estado interior. Los llamó mandalas, por la palabra sánscrita que significa círculo.',
        'Un estudio pequeño encontró que colorear un mandala bajó la ansiedad más que colorear un dibujo libre (Curry y Kasser, 2005). El efecto parece venir de la atención concentrada en un diseño ordenado.',
        'No hace falta saber dibujar. El valor está en el rato de concentración y en lo que descubres al mirarlo.',
      ],
      tips: [
        'Dibuja un círculo con un plato o un vaso.',
        'Usa lápices, fibras o lo que tengas. También sirve una birome.',
        'Empieza desde el centro o desde el borde, como te salga.',
        'Fecha cada mandala. Mirarlos juntos después de unas semanas es revelador.',
      ],
      obstacles: [{ q: 'Me sale feo.', a: 'No es para mostrar. Nadie lo va a calificar. Fíjate en lo que sentiste al hacerlo, no en el resultado.' }],
      steps: [
        { title: 'Preparar', instruction: 'Busca una hoja y dibuja un círculo grande con un plato o un vaso. Ten a mano colores.', durationSec: 60, kind: 'instruction' },
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Pregúntate: ¿cómo estoy hoy?', durationSec: 30, kind: 'breath' },
        { title: 'Dibujar', instruction: 'Llena el círculo con formas y colores, sin planificar. Deja que la mano elija.', durationSec: 300, kind: 'instruction' },
        { title: 'Mirar', instruction: 'Aleja la hoja. ¿Qué ves primero? ¿Qué colores dominan? ¿Hay algo que te sorprende?', durationSec: 60, kind: 'reflection' },
        { title: 'Un título', instruction: 'Ponle un título al mandala, como si fuera un cuadro. Escribe la fecha.', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'mi-historia-y-sus-figuras',
      title: 'Las figuras de mi historia',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Mirar tu vida como un relato y reconocer qué figuras te habitan: quien busca, quien cuida, quien protege, quien juega o quien sabe.',
      mechanism: 'Pensar la propia vida como una historia, con capítulos y figuras, ayuda a darle sentido y a ver qué partes piden más lugar.',
      evidenceLevel: 'contemplativa',
      evidence: [JUNG_1964, VON_FRANZ_1996, MCADAMS_2013],
      howItWorks: [
        'Jung llamó arquetipos a figuras que se repiten en mitos y cuentos de muchas culturas: el héroe que parte, la madre que cuida, el sabio que aconseja, el pícaro que rompe las reglas. Pensaba que también aparecen en la vida de cada persona.',
        'No hace falta aceptar toda su teoría para usar estas figuras. Funcionan como un lenguaje para pensar tu historia. La investigación sobre identidad narrativa muestra que contar la propia vida con sentido se asocia a más bienestar (McAdams y McLean, 2013).',
        'La pregunta no es qué arquetipo «eres», sino qué figuras aparecen en tu vida y cuál pide más lugar ahora. ' + MARCO,
      ],
      tips: [
        'Piensa en cuentos o películas que te marcaron: suelen tener pistas.',
        'Una figura que te falta puede ser tan importante como la que más usas.',
        'Si te sirve, combínala con la práctica «Línea de vida».',
      ],
      obstacles: [{ q: 'Mi vida no parece una historia.', a: 'Casi nadie lo siente así. Empieza por tres momentos que te cambiaron. Con eso ya hay capítulos.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en tu vida como si fuera un libro.', durationSec: 30, kind: 'breath' },
        { title: 'Los capítulos', instruction: 'Ponle título a tres o cuatro capítulos de tu vida hasta hoy.', durationSec: 75, kind: 'reflection' },
        { title: 'El que busca', instruction: '¿Cuándo fuiste el que parte, se arriesga o busca algo nuevo?', durationSec: 45, kind: 'reflection' },
        { title: 'El que cuida', instruction: '¿Cuándo fuiste quien cuida y sostiene a otros? ¿Quién te cuidó a ti?', durationSec: 45, kind: 'reflection' },
        { title: 'El que juega', instruction: '¿Dónde está el pícaro o el que juega en tu vida? ¿Tiene lugar o está guardado?', durationSec: 45, kind: 'reflection' },
        { title: 'El que sabe', instruction: '¿Quién fue un sabio para ti? ¿Qué sabiduría propia tienes hoy?', durationSec: 45, kind: 'reflection' },
        { title: 'El próximo capítulo', instruction: '¿Qué figura necesita más lugar en el capítulo que empieza? Elige un paso para darle espacio.', durationSec: 60, kind: 'reflection' },
      ],
    },
    {
      id: 'la-segunda-mitad-de-la-vida',
      title: 'La segunda mitad de la vida',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Revisar qué construiste hasta ahora y qué partes tuyas quedaron postergadas, para orientar la etapa que viene.',
      mechanism: 'Preguntarse qué falta, y no sólo qué se logró, abre el camino a desarrollar partes dejadas de lado. Jung lo llamó individuación.',
      evidenceLevel: 'contemplativa',
      evidence: [JUNG_ETAPAS, MCADAMS_2013],
      howItWorks: [
        'Jung pensaba que la vida tiene dos mitades con tareas distintas. En la primera, construimos: un trabajo, una familia, un lugar en el mundo. En la segunda, la tarea es otra: integrar lo que quedó afuera y volvernos más nosotros mismos.',
        'Llamó individuación a ese proceso. No es volverse perfecto, sino más completo. Muchas crisis de la mediana edad pueden entenderse como un llamado a esta tarea.',
        'No hace falta tener una edad determinada. La pregunta sirve en cualquier cambio de etapa: un hijo que se va, una jubilación, una separación o una enfermedad. ' + MARCO,
      ],
      tips: [
        'Hazla sin apuro: puedes dividirla en dos días.',
        'Mira con amabilidad lo que construiste. No se trata de despreciarlo.',
        'Si aparecen duelos importantes, dales lugar. A veces conviene hablarlos con alguien.',
      ],
      obstacles: [{ q: 'Siento que ya es tarde.', a: 'Jung pensaba lo contrario: que la segunda mitad tiene su propio sentido. Siempre hay una parte postergada que puede tener un poco más de lugar.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio y nota tu edad, sin juzgarla.', durationSec: 30, kind: 'breath' },
        { title: 'Lo construido', instruction: '¿Qué construiste hasta hoy? Vínculos, trabajo, lugares, aprendizajes. Anota tres cosas.', durationSec: 75, kind: 'reflection' },
        { title: 'El costo', instruction: '¿Qué dejaste de lado para construir eso? Quizá un interés, una forma de ser o un deseo.', durationSec: 75, kind: 'reflection' },
        { title: 'Lo que llama', instruction: '¿Qué parte tuya pide más lugar ahora? Nota si aparece con ganas, con nostalgia o con miedo.', durationSec: 75, kind: 'reflection' },
        { title: 'Soltar', instruction: '¿Hay algo que ya cumplió su función y podrías dejar ir? Un rol, una exigencia, una imagen de ti.', durationSec: 60, kind: 'reflection' },
        { title: 'Un primer paso', instruction: 'Elige un paso pequeño para darle lugar a esa parte este mes.', durationSec: 45, kind: 'reflection' },
      ],
    },
  ],

  meta: {
    'lo-que-me-irrita-del-otro': { level: 'intermedio', approaches: ['psicodinamica'], module: 'autoconocimiento', prerequisites: ['persona-y-sombra'] },
    'botones-que-se-aprietan': { level: 'intermedio', approaches: ['psicodinamica', 'mindfulness'], module: 'autoconocimiento' },
    'mis-funciones-psicologicas': { level: 'iniciacion', approaches: ['psicodinamica'], module: 'autoconocimiento' },
    'trabajar-un-sueno': { level: 'intermedio', approaches: ['psicodinamica', 'humanista'], module: 'autoconocimiento' },
    'imaginacion-activa-breve': {
      level: 'avanzado',
      approaches: ['psicodinamica'],
      module: 'autoconocimiento',
      prerequisites: ['trabajar-un-sueno'],
      risk: { level: 2, alternative: 'mandala-del-dia' },
    },
    'mandala-del-dia': { level: 'iniciacion', approaches: ['psicodinamica', 'mindfulness'], module: 'bienestar' },
    'mi-historia-y-sus-figuras': { level: 'iniciacion', approaches: ['psicodinamica', 'narrativa'], module: 'valores' },
    'la-segunda-mitad-de-la-vida': { level: 'intermedio', approaches: ['psicodinamica', 'logoterapia'], module: 'etapas' },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'psicologia-de-jung',
      title: 'Jung: sombra, complejos, arquetipos e individuación',
      subtitle: 'Las ideas centrales de la psicología analítica, explicadas con claridad y con honestidad sobre su evidencia.',
      category: 'Autoconocimiento y patrones',
      readingMin: 10,
      keyPoints: [
        'La persona es la imagen que mostramos; la sombra, lo que no aceptamos de nosotros.',
        'Los complejos son nudos emocionales que se disparan ante ciertos temas.',
        'Los arquetipos son figuras que se repiten en mitos y cuentos; sirven como lenguaje para pensar la propia historia.',
        'La individuación es el proceso de volverse más completo integrando lo que quedó afuera.',
        'Es un marco de reflexión con poca investigación empírica; no sirve para diagnosticar.',
      ],
      sections: [
        {
          heading: 'Quién fue Jung',
          paragraphs: [
            'Carl Gustav Jung fue un psiquiatra suizo. Trabajó con Freud y luego se separó de él para fundar la psicología analítica. Le interesaban los sueños, los mitos, las religiones y el arte como expresiones de la vida psíquica.',
            'Sus ideas influyeron mucho en la cultura y en la psicoterapia. Al mismo tiempo, varias son difíciles de comprobar con experimentos. Por eso en esta app se ofrecen como preguntas para pensar, no como verdades.',
          ],
        },
        {
          heading: 'Persona y sombra',
          paragraphs: [
            'La persona, en latín, era la máscara de los actores. Jung usó la palabra para la imagen que mostramos para adaptarnos: el profesional serio, la amiga que siempre ayuda. La persona es necesaria. El problema aparece cuando nos confundimos del todo con ella.',
            'La sombra reúne lo que no aceptamos de nosotros: enojo, ambición, fragilidad, deseo. No es lo malo, sino lo rechazado. A menudo la vemos primero en otros, en lo que nos irrita de forma desproporcionada. Integrarla no es actuarla, sino reconocerla y darle un lugar sano.',
          ],
        },
        {
          heading: 'Complejos',
          paragraphs: [
            'Jung empezó estudiando la asociación de palabras. Pedía a las personas que dijeran lo primero que se les ocurría ante una lista. Ciertas palabras producían demoras, risas nerviosas o cambios en la respiración.',
            'Pensó que esas palabras tocaban un complejo: un nudo de recuerdos y emociones con vida propia. Hoy hablaríamos de «botones» que se aprietan. Todos los tenemos. Conocerlos ayuda a no quedar a su merced.',
          ],
        },
        {
          heading: 'Arquetipos y cuentos',
          paragraphs: [
            'Jung notó que ciertas figuras se repiten en mitos de culturas muy distintas: el héroe, la gran madre, el sabio, el pícaro, el niño divino. Las llamó arquetipos y pensó que forman parte de un inconsciente colectivo.',
            'Esa idea es la más discutida de su obra. Pero las figuras sirven como lenguaje para pensar la vida. Marie-Louise von Franz, discípula de Jung, mostró cómo los cuentos de hadas hablan de pasos del crecimiento: dejar la casa, atravesar el bosque, enfrentar el miedo, volver cambiado.',
          ],
        },
        {
          heading: 'Tipos psicológicos',
          paragraphs: [
            'Jung describió dos actitudes, introversión y extraversión, y cuatro funciones: sensación, intuición, pensamiento y sentimiento. Pensaba que cada persona tiene preferencias y que la función menos desarrollada es una puerta al crecimiento.',
            'Sobre esta idea se construyeron tests populares de 16 tipos. Esos tests tienen problemas de fiabilidad y validez, y no se recomiendan para decisiones importantes (Pittenger, 2005). La extraversión, en cambio, sí es un rasgo bien estudiado en la psicología actual.',
          ],
        },
        {
          heading: 'Individuación',
          paragraphs: [
            'Para Jung, la tarea de la vida es la individuación: llegar a ser quien uno es, integrando las partes que quedaron afuera. No es aislarse ni volverse perfecto. Es volverse más completo.',
            'Pensaba que esta tarea se vuelve central en la segunda mitad de la vida. Después de construir un lugar en el mundo, aparece la pregunta por el sentido y por lo postergado.',
          ],
        },
      ],
      caveat: {
        title: 'Qué dice la evidencia',
        body: 'La psicoterapia junguiana tiene estudios, sobre todo observacionales, que muestran mejoras en síntomas y calidad de vida, pero hay pocos ensayos controlados (Roesler, 2013). Conceptos como el inconsciente colectivo o la sincronicidad no tienen apoyo empírico. Circulan muchas frases atribuidas a Jung que él nunca escribió: desconfía de las citas sin fuente.',
      },
      related: { practices: ['persona-y-sombra', 'lo-que-me-irrita-del-otro', 'botones-que-se-aprietan', 'mis-funciones-psicologicas', 'mi-historia-y-sus-figuras', 'la-segunda-mitad-de-la-vida'], articles: ['suenos-y-simbolos'] },
      references: [JUNG_1964, JUNG_TIPOS, JUNG_AION, JUNG_COMPLEJO, JUNG_ETAPAS, VON_FRANZ_1996, ROESLER_2013, PITTENGER_2005],
    },
    {
      id: 'suenos-y-simbolos',
      title: 'Sueños: qué sabemos y cómo trabajarlos',
      subtitle: 'Lo que dice la investigación sobre los sueños, la mirada de Jung y un método simple para explorarlos.',
      category: 'Autoconocimiento y patrones',
      readingMin: 7,
      keyPoints: [
        'Los sueños retoman preocupaciones, vínculos y emociones de la vida despierta.',
        'El trabajo con sueños ayuda a entenderse, según estudios del modelo de Clara Hill.',
        'Jung proponía amplificar cada imagen: qué significa para ti y en los mitos.',
        'Los diccionarios de sueños no tienen base: cada imagen es personal.',
        'Las pesadillas frecuentes tienen tratamientos eficaces y merecen consulta.',
      ],
      sections: [
        {
          heading: 'Lo que dice la investigación',
          paragraphs: [
            'Soñamos todas las noches, aunque no siempre lo recordamos. Los estudios muestran que los sueños tienen continuidad con la vida despierta: aparecen las personas, las preocupaciones y las emociones del día (Schredl y Hofmann, 2003).',
            'No sabemos con certeza para qué sirven los sueños. Hay hipótesis sobre la memoria y el procesamiento emocional. Lo que sí sabemos es que hablar de ellos puede ayudar a las personas a conocerse.',
          ],
        },
        {
          heading: 'La mirada de Jung',
          paragraphs: [
            'Para Freud, los sueños disfrazaban deseos. Jung pensaba distinto: creía que los sueños compensan la actitud consciente y muestran lo que estamos dejando de lado. Si alguien vive sólo para el trabajo, quizá sueñe con un chico que juega.',
            'Jung no usaba un diccionario de símbolos. Proponía «amplificar»: preguntarse qué significa cada imagen para el soñante y luego buscar ecos en cuentos y mitos. También sugería mirar cada personaje del sueño como una parte de uno mismo.',
          ],
        },
        {
          heading: 'Un método en tres pasos',
          paragraphs: [
            'Clara Hill propone tres etapas. Primero, explorar: contar el sueño, notar las emociones y asociar sobre cada imagen. Segundo, comprender: preguntarse qué puede decir sobre la vida actual. Tercero, actuar: decidir algo concreto a partir de lo que se entendió.',
            'Los estudios con este modelo muestran que las personas se sienten más comprendidas y con más claridad sobre sus problemas (Hill y Knox, 2010). Puedes seguir estos pasos con la práctica «Trabajar un sueño» y guardar tus sueños en el diario.',
          ],
        },
      ],
      caveat: {
        title: 'Pesadillas',
        body: 'Las pesadillas que se repiten casi todas las noches, sobre todo después de una experiencia traumática, no se trabajan solas con un diario. Hay tratamientos eficaces, como el ensayo en imaginación, que se hacen con un profesional. Si las tienes, consulta.',
      },
      related: { practices: ['trabajar-un-sueno', 'imaginacion-activa-breve'], articles: ['psicologia-de-jung'] },
      references: [SCHREDL_2003, HILL_1996, HILL_KNOX_2010, JUNG_1964],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'encuentro-con-la-sombra',
      title: 'Encuentro con la sombra',
      subtitle: 'Cuatro semanas con las ideas de Jung: la máscara, la sombra, los sueños y lo que pide lugar',
      description:
        'Un recorrido de autoconocimiento inspirado en la psicología analítica. Mirarás la imagen que muestras y lo que guardas, tus botones, tus sueños y las figuras de tu historia. Es un marco de reflexión con poca evidencia empírica: tómalo como preguntas, no como respuestas.',
      basis: 'Jung (1964), El hombre y sus símbolos; Hill (1996); McAdams y McLean (2013).',
      rhythm: '10 a 15 minutos, 3 o 4 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · La máscara',
          focus: 'Lo que muestro y lo que guardo',
          description: 'Leerás sobre persona y sombra, y empezarás por lo que muestras y lo que escondes.',
          practiceIds: ['persona-y-sombra', 'mis-funciones-psicologicas'],
          articleIds: ['psicologia-de-jung'],
          journalType: 'mis-roles',
        },
        {
          title: 'Semana 2 · La sombra',
          focus: 'Lo que me irrita y lo que me dispara',
          description: 'Usarás tus irritaciones como espejo y reconocerás los botones que se aprietan.',
          practiceIds: ['lo-que-me-irrita-del-otro', 'botones-que-se-aprietan'],
          articleIds: [],
          journalType: 'patron-repetido',
        },
        {
          title: 'Semana 3 · Los sueños',
          focus: 'Escuchar lo que aparece de noche',
          description: 'Anotarás tus sueños y trabajarás uno con preguntas. También probarás un mandala.',
          practiceIds: ['trabajar-un-sueno', 'mandala-del-dia'],
          articleIds: ['suenos-y-simbolos'],
          journalType: 'sueno-nocturno',
        },
        {
          title: 'Semana 4 · Lo que pide lugar',
          focus: 'Tu historia y su próximo capítulo',
          description: 'Mirarás tu vida como una historia, con sus figuras, y elegirás qué parte necesita más lugar.',
          practiceIds: ['mi-historia-y-sus-figuras', 'la-segunda-mitad-de-la-vida'],
          articleIds: [],
          journalType: 'sentido',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-sombra',
      title: 'Tu sombra no es lo malo',
      subtitle: 'Lo que guardamos y por qué conviene mirarlo.',
      slides: [
        { heading: 'La máscara', text: 'Todos mostramos una imagen para adaptarnos. Jung la llamó persona, como la máscara de los actores.' },
        { heading: 'Lo que queda afuera', text: 'Lo que no entra en esa imagen se guarda. Puede ser el enojo, la ambición, la fragilidad o el deseo. Eso es la sombra.' },
        { heading: 'No es lo malo', text: 'La sombra no es lo malo de ti. Es lo que aprendiste a rechazar. A veces guarda fuerzas valiosas.' },
        { heading: 'Cómo aparece', text: 'Suele aparecer en lo que nos irrita mucho de otros, en los sueños o en reacciones que nos sorprenden.' },
        { heading: 'Darle lugar', text: 'Integrarla no es actuarla. Es reconocerla y buscarle una forma sana. Así gastas menos energía en esconderla.' },
      ],
      related: { practices: ['persona-y-sombra', 'lo-que-me-irrita-del-otro'], articles: ['psicologia-de-jung'] },
      references: [JUNG_1964, JUNG_AION],
    },
    {
      id: 'pildora-proyeccion',
      title: 'Lo que te irrita habla de ti',
      subtitle: 'La proyección, explicada simple.',
      slides: [
        { heading: 'Una molestia de más', text: 'Hay gente que te irrita mucho más de lo que la situación justifica. Esa desproporción es una pista.' },
        { heading: 'El espejo', text: 'Jung pensaba que a veces vemos en otros lo que no aceptamos en nosotros. Lo llamó proyección.' },
        { heading: 'También en estudios', text: 'Algunos experimentos muestran algo parecido. Quien intenta no pensar en un rasgo propio lo ve más en los demás.' },
        { heading: 'No siempre', text: 'No toda molestia es proyección. Si alguien te hace daño, enojarte es sano y necesario.' },
        { heading: 'La pregunta', text: 'Prueba preguntarte: ¿hay algo de esto en mí, aunque sea pequeño? ¿Qué se permite esa persona que yo no me permito?' },
      ],
      related: { practices: ['lo-que-me-irrita-del-otro'], articles: ['psicologia-de-jung'] },
      references: [JUNG_AION, BAUMEISTER_1998],
    },
    {
      id: 'pildora-complejos',
      title: 'Los botones que se aprietan',
      subtitle: 'Qué es un complejo y cómo reconocerlo.',
      slides: [
        { heading: 'Un experimento', text: 'Jung leía palabras y pedía que la gente dijera lo primero que pensaba. Algunas palabras hacían tardar o tartamudear.' },
        { heading: 'Un nudo', text: 'Pensó que esas palabras tocaban un nudo de recuerdos y emociones. Lo llamó complejo.' },
        { heading: 'Todos tenemos', text: 'Hoy diríamos que todos tenemos botones. La crítica, el dinero o sentirse ignorado son muy comunes.' },
        { heading: 'La señal', text: 'La pista es la desproporción. Reaccionas como si estuviera en juego mucho más de lo que pasa.' },
        { heading: 'Notarlo', text: 'Cuando lo notes, dite: «se apretó el botón». Respira tres veces. Esa pausa te devuelve la elección.' },
      ],
      related: { practices: ['botones-que-se-aprietan'], articles: ['psicologia-de-jung'] },
      references: [JUNG_COMPLEJO],
    },
    {
      id: 'pildora-arquetipos',
      title: 'Las figuras de tu historia',
      subtitle: 'Arquetipos como lenguaje, no como etiquetas.',
      slides: [
        { heading: 'Figuras que se repiten', text: 'En los mitos de todo el mundo aparecen las mismas figuras. El héroe, la madre, el sabio, el pícaro.' },
        { heading: 'Arquetipos', text: 'Jung las llamó arquetipos. Pensaba que también aparecen en la vida de cada persona.' },
        { heading: 'En los cuentos', text: 'Los cuentos muestran pasos del crecimiento. Dejar la casa, atravesar el bosque, enfrentar el miedo y volver cambiado.' },
        { heading: 'Un lenguaje', text: 'No es un test ni una etiqueta. Es una forma de pensar tu historia: ¿qué figura está viva hoy en ti?' },
        { heading: 'La que falta', text: 'A veces importa más la figura que falta. Quizá el que juega o el que pide ayuda. Pregúntate qué necesita lugar.' },
      ],
      related: { practices: ['mi-historia-y-sus-figuras'], articles: ['psicologia-de-jung'] },
      references: [JUNG_1964, VON_FRANZ_1996],
    },
    {
      id: 'pildora-suenos',
      title: '¿Qué me dice este sueño?',
      subtitle: 'Cómo explorar un sueño sin diccionarios.',
      slides: [
        { heading: 'Sueños y día', text: 'Los sueños suelen retomar lo que te preocupa o te mueve en la vida despierta. Eso dicen los estudios.' },
        { heading: 'Sin diccionario', text: 'Una casa o un perro no significan lo mismo para todos. Lo que importa es qué significan para ti.' },
        { heading: 'Explorar', text: 'Cuenta el sueño en presente. Nota qué sentiste. Pregúntate qué te recuerda cada imagen.' },
        { heading: 'Una parte tuya', text: 'Jung sugería mirar cada personaje como una parte tuya. ¿Qué parte sería ese perro?' },
        { heading: 'Si son pesadillas', text: 'Si tienes pesadillas casi todas las noches, consulta. Tienen tratamientos que funcionan.' },
      ],
      related: { practices: ['trabajar-un-sueno'], articles: ['suenos-y-simbolos'] },
      references: [SCHREDL_2003, HILL_1996],
    },
    {
      id: 'pildora-individuacion',
      title: 'Volverte más completo',
      subtitle: 'La individuación y la segunda mitad de la vida.',
      slides: [
        { heading: 'Dos mitades', text: 'Jung pensaba que la vida tiene dos mitades. En la primera construimos un lugar en el mundo.' },
        { heading: 'Lo que quedó afuera', text: 'Para construir, dejamos cosas de lado. Intereses, deseos y formas de ser que no tenían lugar.' },
        { heading: 'La otra tarea', text: 'En la segunda mitad la tarea cambia. Se trata de integrar lo postergado y ser más uno mismo.' },
        { heading: 'No es ser perfecto', text: 'Jung llamó a esto individuación. No es volverse perfecto, sino más completo.' },
        { heading: 'En cualquier cambio', text: 'La pregunta sirve en cualquier etapa: ¿qué parte mía pide más lugar ahora?' },
      ],
      related: { practices: ['la-segunda-mitad-de-la-vida'], articles: ['psicologia-de-jung'] },
      references: [JUNG_ETAPAS],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'persona-jung', term: 'Persona', definition: 'Para Jung, la imagen que mostramos a los demás para adaptarnos. Es necesaria, pero no somos sólo eso.', articleId: 'psicologia-de-jung', practiceId: 'persona-y-sombra' },
    { id: 'sombra', term: 'Sombra', definition: 'Para Jung, las partes propias que no aceptamos y dejamos fuera de la imagen que mostramos. No es lo malo, sino lo rechazado.', articleId: 'psicologia-de-jung', practiceId: 'persona-y-sombra' },
    { id: 'proyeccion', term: 'Proyección', definition: 'Ver en otras personas rasgos propios que no aceptamos. Suele notarse en una irritación desproporcionada.', practiceId: 'lo-que-me-irrita-del-otro' },
    { id: 'complejo', term: 'Complejo', definition: 'Para Jung, un nudo de recuerdos y emociones que se activa ante ciertos temas y provoca reacciones automáticas.', practiceId: 'botones-que-se-aprietan' },
    { id: 'arquetipo', term: 'Arquetipo', definition: 'Figura que se repite en mitos y cuentos de muchas culturas, como el héroe o el sabio. Jung pensaba que forman parte de un inconsciente colectivo, una idea sin apoyo empírico.', practiceId: 'mi-historia-y-sus-figuras' },
    { id: 'individuacion', term: 'Individuación', definition: 'Para Jung, el proceso de volverse más completo integrando las partes que quedaron afuera. No es aislarse ni ser perfecto.', practiceId: 'la-segunda-mitad-de-la-vida' },
    { id: 'imaginacion-activa', term: 'Imaginación activa', definition: 'Técnica de Jung para dialogar con imágenes interiores estando despierto, por escrito. Puede ser intensa y no se recomienda con antecedentes de psicosis o disociación.', practiceId: 'imaginacion-activa-breve' },
    { id: 'amplificacion', term: 'Amplificación', definition: 'Forma junguiana de trabajar un sueño: explorar qué significa cada imagen para quien sueña y buscar ecos en cuentos y mitos.', articleId: 'suenos-y-simbolos' },
    { id: 'funciones-psicologicas', term: 'Funciones psicológicas', definition: 'Para Jung, cuatro formas de conocer y decidir: sensación, intuición, pensamiento y sentimiento. Todos las usamos, con preferencias.', practiceId: 'mis-funciones-psicologicas' },
  ],
};
