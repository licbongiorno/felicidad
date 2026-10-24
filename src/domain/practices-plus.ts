import type { Practice, Reference } from './types';

/**
 * Séptima tanda: prácticas para los módulos con menos opciones (hábitos, resolución de
 * problemas, valores, autocompasión y autoconocimiento), para que cada uno tenga varias
 * alternativas y un recorrido posible de lo más simple a lo más exigente.
 */

const GOLLWITZER_2006: Reference = {
  citation:
    'Gollwitzer, P. M., & Sheeran, P. (2006). Implementation intentions and goal achievement: A meta-analysis of effects and processes. Advances in Experimental Social Psychology, 38, 69–119.',
  doi: '10.1016/S0065-2601(06)38002-1',
};
const LALLY_2010: Reference = {
  citation:
    'Lally, P., van Jaarsveld, C. H. M., Potts, H. W. W., & Wardle, J. (2010). How are habits formed: Modelling habit formation in the real world. European Journal of Social Psychology, 40(6), 998–1009.',
  doi: '10.1002/ejsp.674',
};
const STEEL_2007: Reference = {
  citation:
    'Steel, P. (2007). The nature of procrastination: A meta-analytic and theoretical review of quintessential self-regulatory failure. Psychological Bulletin, 133(1), 65–94.',
  doi: '10.1037/0033-2909.133.1.65',
};
const NEZU_2013: Reference = {
  citation: 'Nezu, A. M., Nezu, C. M., & D’Zurilla, T. J. (2013). Problem-solving therapy: A treatment manual. Springer.',
};
const HAYES_2012: Reference = {
  citation: 'Hayes, S. C., Strosahl, K. D., & Wilson, K. G. (2012). Acceptance and commitment therapy: The process and practice of mindful change (2.ª ed.). Guilford Press.',
};
const GILBERT_2009: Reference = {
  citation: 'Gilbert, P. (2009). Introducing compassion-focused therapy. Advances in Psychiatric Treatment, 15(3), 199–208.',
  doi: '10.1192/apt.bp.107.005264',
};
const MCADAMS_2013: Reference = {
  citation: 'McAdams, D. P., & McLean, K. C. (2013). Narrative identity. Current Directions in Psychological Science, 22(3), 233–238.',
  doi: '10.1177/0963721413475622',
};

export const PLUS_PRACTICES: Practice[] = [
  // ------------------------------------------------------------ hábitos
  {
    id: 'habito-minimo',
    title: 'Un hábito mínimo',
    family: 'constructive',
    skills: ['resilience'],
    summary: 'Diseñar un hábito tan pequeño que sea difícil no hacerlo, atado a algo que ya haces.',
    mechanism: 'Un plan «si… entonces…» atado a una rutina existente hace que la acción arranque sola, sin depender de la motivación del momento.',
    evidenceLevel: 'robusta',
    evidence: [GOLLWITZER_2006, LALLY_2010],
    howItWorks: [
      'Los hábitos no se forman por fuerza de voluntad sino por repetición en el mismo contexto. Por eso conviene empezar con una versión mínima: leer una página, caminar dos minutos, tomar un vaso de agua.',
      'Las intenciones de implementación («cuando haga X, haré Y») duplican, en promedio, la probabilidad de cumplir un objetivo. En el estudio de Lally y colaboradores, un hábito tardó una media de 66 días en volverse automático, con mucha variación entre personas.',
    ],
    tips: [
      'Si un día no puedes, haz la versión más pequeña posible: mantener la cadena importa más que la cantidad.',
      'Átalo a algo que haces todos los días sin pensar, como lavarte los dientes o preparar el café.',
      'Perderte un día no arruina el hábito. Vuelve al siguiente.',
    ],
    obstacles: [{ q: 'Es tan pequeño que parece que no sirve.', a: 'Esa es la idea. Primero se construye la costumbre; después se agranda. Un hábito grande que se abandona sirve menos que uno mínimo que se sostiene.' }],
    steps: [
      { title: 'Llegar', instruction: 'Respira despacio un momento y piensa en algo que te gustaría hacer más seguido.', durationSec: 40, kind: 'breath' },
      { title: 'Achicarlo', instruction: 'Reduce ese hábito a una versión de dos minutos o menos. ¿Cuál sería la versión más pequeña posible?', durationSec: 60, kind: 'reflection' },
      { title: 'El ancla', instruction: 'Elige algo que ya haces todos los días. Ese será el momento de tu hábito.', durationSec: 45, kind: 'reflection' },
      { title: 'El plan', instruction: 'Arma la frase: «Cuando termine de…, voy a…». Dila en voz baja dos veces.', durationSec: 45, kind: 'reflection' },
      { title: 'El obstáculo', instruction: '¿Qué podría impedírtelo? Piensa qué harás si aparece. Por ejemplo: «Si tengo mucho cansancio, haré solo un minuto».', durationSec: 60, kind: 'reflection' },
      { title: 'Ensayarlo', instruction: 'Imagina con detalle el momento del ancla y cómo haces el hábito mínimo. Nota la satisfacción de haberlo hecho.', durationSec: 45, kind: 'reflection' },
    ],
  },
  {
    id: 'revision-semanal',
    title: 'Revisión semanal',
    family: 'constructive',
    skills: ['attention', 'resilience'],
    summary: 'Diez minutos para mirar la semana que pasó, aprender de ella y elegir lo importante de la que viene.',
    mechanism: 'Revisar con regularidad convierte la experiencia en aprendizaje y reduce la sensación de ir a la deriva.',
    evidenceLevel: 'moderada',
    evidence: [GOLLWITZER_2006],
    howItWorks: [
      'Sin una pausa para mirar atrás, las semanas se encadenan y lo urgente tapa lo importante. La revisión semanal es una práctica sencilla que combina el registro de logros, el aprendizaje de lo que no salió y la planificación concreta.',
      'Planificar pocas acciones, con día y momento, es más eficaz que una lista larga de buenas intenciones.',
    ],
    tips: ['Hazla siempre el mismo día, por ejemplo el domingo a la tarde.', 'Elige como máximo tres prioridades para la semana.', 'Incluye al menos una cosa que sea solo para disfrutar.'],
    obstacles: [{ q: 'Mirar la semana me hace sentir que no hice nada.', a: 'Empieza por los logros, aunque sean pequeños. La mente tiende a recordar más lo pendiente que lo hecho.' }],
    steps: [
      { title: 'Llegar', instruction: 'Respira tres veces despacio y date permiso para dedicar estos minutos a ti.', durationSec: 30, kind: 'breath' },
      { title: 'Lo que salió bien', instruction: 'Recuerda tres cosas que salieron bien esta semana, aunque sean pequeñas.', durationSec: 75, kind: 'reflection' },
      { title: 'Lo que aprendí', instruction: '¿Qué no salió como esperabas? ¿Qué aprendiste de eso, sin juzgarte?', durationSec: 75, kind: 'reflection' },
      { title: 'Lo importante', instruction: 'Piensa en la semana que viene. ¿Cuáles son las tres cosas más importantes?', durationSec: 75, kind: 'reflection' },
      { title: 'Cuándo', instruction: 'Para cada una, elige un día y un momento concreto.', durationSec: 60, kind: 'reflection' },
      { title: 'Algo para ti', instruction: 'Elige una actividad que disfrutes y ponle también un momento en la semana.', durationSec: 45, kind: 'reflection' },
    ],
  },
  {
    id: 'cinco-minutos',
    title: 'La regla de los cinco minutos',
    family: 'constructive',
    skills: ['resilience'],
    summary: 'Para la postergación: comprometerte solo a empezar durante cinco minutos.',
    mechanism: 'Empezar es lo más difícil. Bajar la exigencia a cinco minutos reduce el malestar anticipado, y una vez en marcha suele ser más fácil seguir.',
    evidenceLevel: 'preliminar',
    evidence: [STEEL_2007],
    micro: true,
    howItWorks: [
      'Postergar no es pereza: muchas veces es una forma de evitar el malestar que nos produce una tarea, como aburrimiento, miedo a hacerlo mal o agobio. Cuanto más lejos está la recompensa, más se posterga (Steel, 2007).',
      'La regla de los cinco minutos achica la tarea hasta que el malestar sea tolerable. Puedes parar a los cinco minutos sin culpa; muchas veces vas a querer seguir.',
    ],
    tips: ['Define el primer paso físico: abrir el archivo, sacar los papeles, escribir el título.', 'Silencia el teléfono durante esos cinco minutos.', 'Si paras, anota cuál será el próximo paso.'],
    obstacles: [{ q: 'A los cinco minutos sigo sin ganas.', a: 'Está bien parar. Hiciste cinco minutos más que antes. Mañana, repite. El hábito de empezar se construye así.' }],
    steps: [
      { title: 'Nombrar la tarea', instruction: '¿Qué estás postergando? Nómbralo en una frase.', durationSec: 20, kind: 'reflection' },
      { title: 'El malestar', instruction: '¿Qué sientes al pensar en ella? Quizá aburrimiento, miedo o agobio. Solo nótalo.', durationSec: 25, kind: 'reflection' },
      { title: 'El primer paso', instruction: '¿Cuál es el primer paso físico, el más pequeño? Por ejemplo, abrir el documento.', durationSec: 25, kind: 'reflection' },
      { title: 'Cinco minutos', instruction: 'Comprométete solo a cinco minutos. Después puedes parar sin culpa. Respira y empieza.', durationSec: 20, kind: 'instruction' },
    ],
  },

  // ------------------------------------------------------------ resolución de problemas
  {
    id: 'decidir-entre-opciones',
    title: 'Decidir entre opciones',
    family: 'constructive',
    skills: ['attention', 'resilience'],
    summary: 'Una forma ordenada de elegir cuando das vueltas entre dos o más caminos.',
    mechanism: 'Poner por escrito las opciones, sus consecuencias y lo que te importa ordena la decisión y reduce la rumiación.',
    evidenceLevel: 'moderada',
    evidence: [NEZU_2013],
    howItWorks: [
      'Cuando una decisión es difícil, la mente salta de una opción a otra sin cerrar ninguna. La terapia de resolución de problemas propone separar los pasos: definir bien el problema, generar opciones, evaluarlas y elegir.',
      'Agregar tus valores al análisis ayuda a decidir no solo por lo que conviene, sino por lo que te importa.',
    ],
    tips: ['Escribe en papel: ayuda a salir del círculo mental.', 'Ninguna opción es perfecta: busca la suficientemente buena.', 'Si sigues dudando, pon una fecha para decidir.'],
    obstacles: [{ q: '¿Y si elijo mal?', a: 'Casi ninguna decisión es irreversible. Elegir con lo que sabes hoy es lo mejor que puedes hacer; después podrás ajustar.' }],
    steps: [
      { title: 'Llegar', instruction: 'Respira despacio y nota el cuerpo. Las decisiones se piensan mejor con un poco de calma.', durationSec: 40, kind: 'breath' },
      { title: 'La decisión', instruction: 'Formula la decisión como pregunta concreta. Por ejemplo: «¿Acepto el nuevo trabajo o me quedo?».', durationSec: 45, kind: 'reflection' },
      { title: 'Las opciones', instruction: 'Enumera las opciones. Agrega al menos una que no se te había ocurrido.', durationSec: 60, kind: 'reflection' },
      { title: 'A favor y en contra', instruction: 'Para cada opción, piensa en lo bueno y lo malo, a corto y a largo plazo.', durationSec: 90, kind: 'reflection' },
      { title: 'Lo que me importa', instruction: '¿Qué opción se acerca más a lo que valoras? Por ejemplo, la familia, el aprendizaje o la tranquilidad.', durationSec: 60, kind: 'reflection' },
      { title: 'Elegir', instruction: 'Elige la opción suficientemente buena y define el primer paso para llevarla a cabo.', durationSec: 45, kind: 'reflection' },
    ],
  },

  // ------------------------------------------------------------ valores
  {
    id: 'accion-comprometida',
    title: 'Acción comprometida',
    family: 'constructive',
    skills: ['resilience'],
    summary: 'Elegir un paso concreto hacia lo que te importa, aunque aparezcan dudas o miedo.',
    mechanism: 'Actuar según los valores, con las emociones difíciles presentes, amplía la vida en lugar de esperar a sentir que ya es el momento.',
    evidenceLevel: 'moderada',
    evidence: [HAYES_2012],
    howItWorks: [
      'En la terapia de aceptación y compromiso (ACT), los valores son direcciones, no metas. La acción comprometida es el paso concreto que das hacia esa dirección hoy, sin esperar a que el miedo o la duda desaparezcan.',
      'La idea no es eliminar el malestar, sino que deje de decidir por ti. Muchas veces la motivación aparece después de actuar, no antes.',
    ],
    tips: ['Elige un paso que puedas hacer en las próximas 24 horas.', 'Si el miedo aparece, nómbralo: «Aparece el miedo», y sigue.', 'Lo que cuenta es la dirección, no el tamaño del paso.'],
    obstacles: [{ q: 'No sé cuáles son mis valores.', a: 'Prueba primero la práctica «Brújula de valores». También puedes preguntarte qué te gustaría que dijeran de ti las personas que te quieren.' }],
    steps: [
      { title: 'Llegar', instruction: 'Respira despacio y siente el apoyo del cuerpo.', durationSec: 40, kind: 'breath' },
      { title: 'Un valor', instruction: 'Elige un valor importante para ti ahora, como cuidar mi salud, cuidar las amistades o aprender.', durationSec: 60, kind: 'reflection' },
      { title: 'Un paso', instruction: '¿Qué paso pequeño podrías dar hoy o mañana en esa dirección?', durationSec: 60, kind: 'reflection' },
      { title: 'Lo que aparece', instruction: 'Imagina que das ese paso. ¿Qué pensamientos o emociones aparecen? Déjalos estar, como pasajeros en un colectivo.', durationSec: 75, kind: 'reflection' },
      { title: 'Comprometerte', instruction: 'Di para ti: «Acepto sentir esto para acercarme a lo que me importa».', durationSec: 40, kind: 'reflection' },
      { title: 'Cuándo', instruction: 'Elige el momento exacto en que darás el paso.', durationSec: 30, kind: 'reflection' },
    ],
  },
  {
    id: 'punto-de-eleccion',
    title: 'El punto de elección',
    family: 'deconstructive',
    skills: ['attention', 'resilience'],
    summary: 'Notar, en un momento difícil, si te estás acercando o alejando de lo que te importa.',
    mechanism: 'Reconocer el «punto de elección» abre un espacio entre lo que sientes y lo que haces, y te permite elegir.',
    evidenceLevel: 'moderada',
    evidence: [HAYES_2012],
    howItWorks: [
      'Ante una situación difícil, aparecen pensamientos y emociones que nos empujan. A veces nos llevan a conductas que nos alejan de lo que nos importa, como evitar o discutir. Otras veces logramos actuar en dirección a nuestros valores.',
      'El punto de elección, una herramienta de ACT, es ese momento en que podemos notar hacia dónde vamos y elegir. No se trata de no sentir, sino de que lo que sentimos no decida solo.',
    ],
    tips: ['Practícalo primero con situaciones pasadas, después con las que se repiten.', 'Escribe tus conductas «de alejarte» más frecuentes: así las vas a reconocer antes.', 'Elegir acercarte no tiene que ser perfecto: un paso basta.'],
    obstacles: [{ q: 'En el momento no me doy cuenta.', a: 'Es normal. Al principio se nota después. Con la práctica, el momento de darte cuenta se adelanta.' }],
    steps: [
      { title: 'Llegar', instruction: 'Respira y trae a la mente una situación difícil que suele repetirse.', durationSec: 45, kind: 'breath' },
      { title: 'Lo que aparece', instruction: '¿Qué pensamientos, emociones y sensaciones aparecen en esa situación? Nómbralos.', durationSec: 75, kind: 'reflection' },
      { title: 'Alejarme', instruction: '¿Qué sueles hacer que te aleja de lo que te importa? Por ejemplo, evitar, callarte o enojarte.', durationSec: 60, kind: 'reflection' },
      { title: 'Acercarme', instruction: '¿Qué podrías hacer que te acerque, aunque lo difícil siga ahí?', durationSec: 75, kind: 'reflection' },
      { title: 'Elegir', instruction: 'La próxima vez que aparezca, ¿qué te dirás para notar el punto de elección? Elige una frase corta.', durationSec: 45, kind: 'reflection' },
    ],
  },

  // ------------------------------------------------------------ autocompasión
  {
    id: 'ritmo-calmante',
    title: 'Respiración de ritmo calmante',
    family: 'constructive',
    skills: ['compassion', 'resilience'],
    summary: 'Una respiración lenta con un gesto amable hacia ti, para activar el sistema de calma.',
    mechanism: 'Respirar lento y con calidez activa el sistema de calma y afiliación, que regula el sistema de amenaza.',
    evidenceLevel: 'moderada',
    evidence: [GILBERT_2009],
    howItWorks: [
      'La terapia centrada en la compasión, de Paul Gilbert, describe tres sistemas emocionales: amenaza, logro y calma. Cuando el de amenaza está muy activo, como en la autocrítica, cuesta acceder a la calma.',
      'La respiración de ritmo calmante combina una respiración lenta con una expresión facial y un tono de voz interno amables. Es la base sobre la que se construyen las demás prácticas de compasión.',
    ],
    tips: ['Una leve sonrisa y la mandíbula suelta ayudan.', 'No busques relajarte del todo: basta con un poco más de calma.', 'Úsala antes de una conversación difícil o al notar la autocrítica.'],
    obstacles: [{ q: 'La calidez hacia mí me resulta rara.', a: 'Es muy frecuente, sobre todo si tienes la costumbre de exigirte. Empieza solo con la respiración y agrega la calidez de a poco.' }],
    steps: [
      { title: 'Postura', instruction: 'Siéntate con la espalda erguida pero suelta. Relaja la cara y deja una leve sonrisa.', durationSec: 40, kind: 'instruction' },
      { title: 'Ritmo lento', instruction: 'Respira un poco más lento de lo habitual, contando unos cuatro tiempos al inhalar y cuatro al exhalar.', durationSec: 90, kind: 'breath' },
      { title: 'Calidez', instruction: 'Imagina que con cada exhalación se suaviza el cuerpo, como si alguien que te quiere estuviera cerca.', durationSec: 90, kind: 'breath' },
      { title: 'Una frase', instruction: 'Dite en un tono amable: «Estoy aquí, a mi lado».', durationSec: 45, kind: 'reflection' },
      { title: 'Volver', instruction: 'Deja la respiración libre y nota cómo estás ahora.', durationSec: 30, kind: 'silence' },
    ],
  },
  {
    id: 'yo-compasivo',
    title: 'Imaginar mi yo compasivo',
    family: 'constructive',
    skills: ['compassion'],
    summary: 'Imaginarte con las cualidades de la compasión: sabiduría, fortaleza y calidez.',
    mechanism: 'Ensayar en la imaginación una versión compasiva de ti fortalece la capacidad de tratarte con amabilidad en los momentos difíciles.',
    evidenceLevel: 'moderada',
    evidence: [
      { citation: 'Kirby, J. N., Tellegen, C. L., & Steindl, S. R. (2017). A meta-analysis of compassion-based interventions: Current state of knowledge and future directions. Behavior Therapy, 48(6), 778–792.', doi: '10.1016/j.beth.2017.06.003' },
      GILBERT_2009,
    ],
    howItWorks: [
      'En la terapia centrada en la compasión, el «yo compasivo» es una forma de ser que se entrena, como un actor que ensaya un papel. No hace falta sentirlo de verdad al principio: se practica imaginándolo.',
      'Sus cualidades son la sabiduría (entender que el sufrimiento es parte de la vida), la fortaleza (poder estar con lo difícil) y la calidez (el deseo de ayudar).',
    ],
    tips: ['Empieza con la respiración de ritmo calmante.', 'Si cuesta imaginarte, imagina a alguien compasivo y después ponte en su lugar.', 'Vuelve a esta imagen cuando aparezca la autocrítica.'],
    obstacles: [{ q: 'Siento que estoy fingiendo.', a: 'Al principio se siente así, como cualquier habilidad nueva. Los actores ensayan para encarnar un personaje; con la práctica, se vuelve más natural.' }],
    cautions: 'Si al practicar aparecen recuerdos dolorosos o emociones muy intensas, vuelve a la respiración o abre los ojos. Es un buen tema para tu terapeuta.',
    steps: [
      { title: 'Ritmo calmante', instruction: 'Respira despacio, con la cara relajada y una leve sonrisa.', durationSec: 60, kind: 'breath' },
      { title: 'Sabiduría', instruction: 'Imagina que eres una persona sabia, que entiende que la vida es difícil para todos y que no es tu culpa.', durationSec: 75, kind: 'reflection' },
      { title: 'Fortaleza', instruction: 'Ahora siente tu fortaleza: puedes estar con lo difícil sin derrumbarte. Nota la postura firme y estable.', durationSec: 75, kind: 'reflection' },
      { title: 'Calidez', instruction: 'Siente también la calidez: el deseo genuino de que tú y los demás estén bien.', durationSec: 75, kind: 'reflection' },
      { title: 'Mirar lo difícil', instruction: 'Desde ese lugar, mira una dificultad leve que estés viviendo. ¿Qué le dirías a esa parte tuya que sufre?', durationSec: 90, kind: 'reflection' },
      { title: 'Volver', instruction: 'Respira y vuelve. Lleva contigo una palabra que represente a tu yo compasivo.', durationSec: 30, kind: 'breath' },
    ],
  },

  // ------------------------------------------------------------ autoconocimiento
  {
    id: 'linea-de-vida',
    title: 'Mi línea de vida',
    family: 'deconstructive',
    skills: ['attention', 'compassion'],
    summary: 'Mirar tu historia en capítulos para reconocer qué te formó y qué te sostiene.',
    mechanism: 'Organizar la propia historia en un relato con sentido se asocia con mayor bienestar y ayuda a integrar experiencias difíciles.',
    evidenceLevel: 'preliminar',
    evidence: [MCADAMS_2013],
    howItWorks: [
      'La psicología narrativa estudia cómo construimos nuestra identidad contando nuestra historia. Las personas que encuentran en su relato momentos de crecimiento y redención suelen tener mayor bienestar (McAdams y McLean, 2013).',
      'Este ejercicio te invita a mirar tu vida en capítulos. No busca revivir lo doloroso, sino ver el conjunto y reconocer tus recursos.',
    ],
    tips: ['Dibuja una línea en un papel y marca los capítulos.', 'No hace falta que sea completa ni ordenada.', 'Si aparece algo muy doloroso, sigue de largo: no es el momento de detenerte ahí.'],
    obstacles: [{ q: 'Mi historia tiene mucho dolor.', a: 'Puedes nombrar esos capítulos sin entrar en detalle. Si sientes que necesitas trabajarlos, es un buen tema para hacerlo con un profesional de la salud mental.' }],
    cautions: 'Si la práctica despierta recuerdos traumáticos o te desborda, detente y vuelve al presente con la respiración. Este trabajo se hace mejor acompañado.',
    steps: [
      { title: 'Llegar', instruction: 'Respira despacio y nota el apoyo del cuerpo. Ten a mano papel y lápiz si quieres.', durationSec: 40, kind: 'breath' },
      { title: 'Los capítulos', instruction: 'Si tu vida fuera un libro, ¿en qué capítulos la dividirías? Ponle un título breve a cada uno.', durationSec: 90, kind: 'reflection' },
      { title: 'Un punto alto', instruction: 'Elige un momento muy bueno de tu historia. ¿Qué dice de ti?', durationSec: 75, kind: 'reflection' },
      { title: 'Un giro', instruction: 'Piensa en un momento difícil que superaste. ¿Qué te ayudó a seguir?', durationSec: 75, kind: 'reflection' },
      { title: 'Lo que me sostiene', instruction: '¿Qué personas, valores o fortalezas aparecen una y otra vez en tu historia?', durationSec: 75, kind: 'reflection' },
      { title: 'El próximo capítulo', instruction: 'Si pudieras ponerle un título al próximo capítulo, ¿cuál sería?', durationSec: 45, kind: 'reflection' },
    ],
  },
];
