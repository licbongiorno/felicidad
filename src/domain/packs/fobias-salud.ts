import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Fobias específicas y ansiedad por la salud»:
 *  1. Fobias específicas (animales, sangre e inyecciones, alturas, volar, tormentas): por qué
 *     la evitación mantiene el miedo, escalera de exposición gradual autoguiada para miedos
 *     leves a moderados (Öst; Wolitzky-Taylor y colaboradores) con el enfoque de aprendizaje
 *     inhibitorio (Craske y colaboradores), y tensión aplicada para la fobia a la sangre y las
 *     inyecciones (Öst, Fellenius y Sterner).
 *  2. Ansiedad por la salud: chequeo de síntomas, búsqueda en internet, pedir tranquilización y
 *     evitar médicos; TCC (Salkovskis y Warwick; Tyrer y colaboradores).
 *
 * Cuidados del paquete: la tensión aplicada sube la presión, así que con problemas cardíacos o de
 * presión se consulta antes. Ante síntomas físicos nuevos, intensos o que cambian, primero se
 * consulta al médico: las prácticas de ansiedad por la salud no sirven para decidir si un síntoma
 * es grave. La exposición autoguiada es para miedos leves a moderados; los escalones de mucho
 * miedo, el pánico frecuente o el trauma se trabajan con un profesional.
 */

// ------------------------------------------------------------ referencias: fobias
const OST_1989: Reference = {
  citation: 'Öst, L.-G. (1989). One-session treatment for specific phobias. Behaviour Research and Therapy, 27(1), 1–7.',
  doi: '10.1016/0005-7967(89)90113-7',
};
const OST_1991: Reference = {
  citation: 'Öst, L.-G., Fellenius, J., & Sterner, U. (1991). Applied tension, exposure in vivo, and tension-only in the treatment of blood phobia. Behaviour Research and Therapy, 29(6), 561–574.',
  doi: '10.1016/0005-7967(91)90006-O',
};
const WOLITZKY_2008: Reference = {
  citation:
    'Wolitzky-Taylor, K. B., Horowitz, J. D., Powers, M. B., & Telch, M. J. (2008). Psychological approaches in the treatment of specific phobias: A meta-analysis. Clinical Psychology Review, 28(6), 1021–1037.',
  doi: '10.1016/j.cpr.2008.02.007',
};
const CRASKE_2014: Reference = {
  citation:
    'Craske, M. G., Treanor, M., Conway, C. C., Zbozinek, T., & Vervliet, B. (2014). Maximizing exposure therapy: An inhibitory learning approach. Behaviour Research and Therapy, 58, 10–23.',
  doi: '10.1016/j.brat.2014.04.006',
};

// ------------------------------------------------------------ referencias: ansiedad por la salud
const SALKOVSKIS_1986: Reference = {
  citation:
    'Salkovskis, P. M., & Warwick, H. M. C. (1986). Morbid preoccupations, health anxiety and reassurance: A cognitive-behavioural approach to hypochondriasis. Behaviour Research and Therapy, 24(5), 597–602.',
  doi: '10.1016/0005-7967(86)90041-0',
};
const TYRER_2014: Reference = {
  citation:
    'Tyrer, P., Cooper, S., Salkovskis, P., Tyrer, H., Crawford, M., Byford, S., Dupont, S., Finnis, S., Green, J., McLaren, E., Murphy, D., Reid, S., Smith, G., Wang, D., Warwick, H., Petkova, H., & Barrett, B. (2014). Clinical and cost-effectiveness of cognitive behaviour therapy for health anxiety in medical patients: A multicentre randomised controlled trial. The Lancet, 383(9913), 219–225.',
  doi: '10.1016/S0140-6736(13)61905-4',
};

/** Aviso común de la exposición autoguiada. */
const EXPOSICION =
  'Esta práctica es para miedos leves a moderados. Empieza por escalones de poco miedo. Si el miedo es muy intenso, si tienes ataques de pánico frecuentes, si el miedo viene de una experiencia traumática o si tienes un problema de salud que el miedo puede empeorar, como un problema cardíaco o asma, hazla con un profesional.';

/** Aviso común: los síntomas físicos nuevos o graves se consultan primero. */
const SINTOMAS =
  'Esta práctica no sirve para decidir si un síntoma es grave. Si tienes un síntoma nuevo, intenso o que cambia, consulta primero a tu médico. Ante dolor de pecho fuerte, falta de aire, desmayo o una urgencia, llama al 911.';

export const FOBIAS_SALUD_PACK: ContentPack = {
  id: 'fobias-salud',

  // ================================================================== prácticas
  practices: [
    // ------------------------------------------------------------ fobias específicas
    {
      id: 'escalera-del-miedo',
      title: 'Mi escalera del miedo',
      family: 'deconstructive',
      skills: ['resilience', 'attention'],
      summary: 'Armar una escalera de situaciones, de menos a más miedo, para acercarte de a poco a lo que temes: un animal, las alturas, volar, las tormentas.',
      mechanism:
        'Ordenar las situaciones temidas de menos a más permite empezar por algo que puedes hacer. Cada escalón cumplido le enseña algo nuevo a tu sistema de alarma.',
      evidenceLevel: 'robusta',
      evidence: [WOLITZKY_2008, CRASKE_2014],
      howItWorks: [
        'Una fobia específica es un miedo intenso a algo concreto: perros, arañas, alturas, aviones, tormentas, sangre o agujas. El miedo es mucho mayor que el peligro real, y lleva a evitar.',
        'Evitar alivia en el momento, pero impide aprender que la situación se puede atravesar. Un metaanálisis encontró que los tratamientos basados en la exposición son los más eficaces para las fobias específicas (Wolitzky-Taylor y colaboradores, 2008).',
        'La escalera es el mapa. Cada escalón es una situación concreta, con un número de miedo del 0 al 100. Se empieza por uno de 20 o 30, no por el más difícil.',
      ],
      tips: [
        'Escribe escalones muy concretos: «mirar una foto de un perro chico durante un minuto».',
        'Varía la distancia, el tiempo, el tamaño o si estás con alguien.',
        'Ocho a doce escalones suelen alcanzar.',
        'Si un salto es muy grande, inventa un escalón intermedio.',
      ],
      obstacles: [
        { q: 'Todo me da 100 de miedo.', a: 'Prueba con versiones más lejanas: una palabra escrita, un dibujo, un video sin sonido. Si igual todo es 100, conviene hacerlo con un profesional.' },
      ],
      cautions: EXPOSICION,
      steps: [
        { title: 'Llegar', instruction: 'Siéntate y respira despacio. Piensa en el miedo que quieres trabajar.', durationSec: 30, kind: 'breath' },
        { title: 'El miedo', instruction: 'Escribe en una frase qué temes. Por ejemplo, «que un perro me muerda» o «que el avión se caiga».', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que evitas', instruction: 'Anota lo que haces para no encontrarte con eso. Cruzar la calle, no viajar, cerrar las cortinas.', durationSec: 60, kind: 'reflection' },
        { title: 'Situaciones', instruction: 'Anota ocho a diez situaciones ligadas a ese miedo. Algunas fáciles y otras difíciles.', durationSec: 90, kind: 'reflection' },
        { title: 'Puntuar', instruction: 'Ponle a cada una un número de miedo, de 0 a 100. No pienses mucho: el primer número vale.', durationSec: 60, kind: 'reflection' },
        { title: 'Ordenar', instruction: 'Ordénalas de menor a mayor. Esa es tu escalera.', durationSec: 45, kind: 'reflection' },
        { title: 'El primer escalón', instruction: 'Marca uno de 20 a 40 para empezar. Elige un día y una hora para hacerlo.', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'subir-un-escalon',
      title: 'Subir un escalón',
      family: 'deconstructive',
      skills: ['resilience', 'attention'],
      summary: 'Hacer un escalón de tu escalera: anotar qué temes que pase, quedarte en la situación sin protecciones y comparar después lo que pasó.',
      mechanism:
        'La exposición funciona mejor cuando lo que pasa no coincide con lo que temías. Esa sorpresa es la que enseña al sistema de alarma que puede bajar la guardia.',
      evidenceLevel: 'robusta',
      evidence: [CRASKE_2014, OST_1989, WOLITZKY_2008],
      howItWorks: [
        'Michelle Craske y su equipo proponen el aprendizaje inhibitorio. El miedo viejo no se borra, pero se aprende algo nuevo que compite con él. Ese aprendizaje es mayor cuando el resultado te sorprende (Craske y colaboradores, 2014).',
        'Por eso primero anotas qué temes que pase. Luego te quedas en la situación el tiempo suficiente para comprobarlo. No hace falta que el miedo baje del todo.',
        'Las «conductas de seguridad» frenan el aprendizaje: agarrarte fuerte, no mirar, distraerte, tener a alguien que te tranquilice. Se van dejando de a poco.',
        'Lars-Göran Öst desarrolló un tratamiento intensivo de una sola sesión, de hasta tres horas, con un terapeuta (Öst, 1989). Aquí se usa una versión autoguiada, en pasos chicos, para miedos leves a moderados.',
      ],
      tips: [
        'Repite el mismo escalón varias veces antes de pasar al siguiente.',
        'Cambia el lugar, la hora o la compañía: lo aprendido se generaliza mejor.',
        'Si el miedo sube a más de 70, quédate un poco y luego baja a un escalón más fácil, sin escapar de golpe.',
        'Anota cada intento en el diario de la escalera.',
      ],
      obstacles: [
        { q: 'Salí corriendo.', a: 'Pasa, y no es un fracaso. Vuelve a intentarlo con un escalón un poco más fácil. Lo importante es repetir.' },
        { q: 'Lo hice pero sigo con miedo.', a: 'Es esperable al principio. Fíjate si pasó lo que temías. Con la repetición, el miedo suele bajar.' },
      ],
      cautions: EXPOSICION + ' Nunca hagas exposición a algo realmente peligroso, como un animal suelto desconocido o una tormenta eléctrica a la intemperie.',
      steps: [
        { title: 'El escalón', instruction: 'Elige el escalón de hoy. Debe darte entre 20 y 50 de miedo.', durationSec: 20, kind: 'reflection' },
        { title: 'Qué temes', instruction: 'Anota qué temes que pase y cuánto lo crees, de 0 a 100.', durationSec: 40, kind: 'reflection' },
        { title: 'Sin protecciones', instruction: 'Piensa qué haces para sentirte a salvo. Deja de lado al menos una de esas cosas hoy.', durationSec: 30, kind: 'reflection' },
        { title: 'Entrar', instruction: 'Haz el escalón. Mira, escucha y nota lo que sientes. No te distraigas.', durationSec: 120, kind: 'instruction' },
        { title: 'Quedarte', instruction: 'Quédate un poco más. Nota el miedo como una ola que sube y baja. Respira con calma.', durationSec: 90, kind: 'breath' },
        { title: 'Comparar', instruction: '¿Pasó lo que temías? ¿Qué pasó en realidad? Anótalo.', durationSec: 40, kind: 'reflection' },
        { title: 'Aprender', instruction: 'Escribe una frase con lo que aprendiste. Por ejemplo, «pude estar cerca y no pasó nada malo».', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'tension-aplicada',
      title: 'Tensión aplicada para la sangre y las agujas',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Tensar los músculos grandes del cuerpo unos segundos para subir la presión y evitar el desmayo ante la sangre, las heridas o las inyecciones.',
      mechanism:
        'En la fobia a la sangre y las inyecciones, la presión puede bajar de golpe y causar un desmayo. Tensar los músculos la sube y lo previene.',
      evidenceLevel: 'moderada',
      evidence: [OST_1991],
      howItWorks: [
        'La fobia a la sangre, las heridas y las inyecciones es distinta de las demás. Primero sube el pulso y luego la presión baja de golpe. Por eso algunas personas se marean o se desmayan.',
        'Lars-Göran Öst y su equipo desarrollaron la tensión aplicada. Se tensan brazos, piernas y tronco unos segundos y se suelta sin relajarse del todo. En un ensayo, ayudó a personas con fobia a la sangre (Öst y colaboradores, 1991).',
        'Primero se practica en casa durante una semana. Después se usa mientras te acercas, de a poco, a fotos, videos o una extracción.',
        'En esta fobia no conviene relajarse del todo, porque la presión bajaría más. Por eso se usa tensión y no relajación.',
      ],
      tips: [
        'Practica unas cinco veces por día durante una semana antes de usarla.',
        'Si sientes calor en la cara al tensar, lo estás haciendo bien.',
        'Para una extracción, avisa al personal de salud. Puedes pedir hacerla en una camilla.',
        'Deja libre el brazo del pinchazo y tensa el resto del cuerpo.',
      ],
      obstacles: [
        { q: 'Me duele la cabeza al hacerlo.', a: 'Puede pasar si tensas demasiado. Tensa un poco menos. Si el dolor sigue, consulta antes de seguir.' },
      ],
      cautions:
        'Si tienes problemas cardíacos, presión alta, aneurismas, glaucoma o estás en el embarazo, consulta a tu médico antes de usar la tensión aplicada. Sirve para la fobia a la sangre y las agujas, no para otros miedos. Si te desmayas sin un motivo claro, consulta.',
      steps: [
        { title: 'Sentarte', instruction: 'Siéntate en una silla cómoda, con los pies en el piso.', durationSec: 15, kind: 'instruction' },
        { title: 'Tensar', instruction: 'Tensa brazos, piernas y panza a la vez. Mantén la tensión unos diez a quince segundos.', durationSec: 15, kind: 'instruction' },
        { title: 'Soltar', instruction: 'Suelta, pero no del todo. Quédate así unos veinte o treinta segundos.', durationSec: 30, kind: 'instruction' },
        { title: 'Otra vez', instruction: 'Vuelve a tensar brazos, piernas y panza. Nota el calor en la cara.', durationSec: 15, kind: 'instruction' },
        { title: 'Soltar', instruction: 'Suelta a medias otra vez. Respira normal, sin aguantar el aire.', durationSec: 30, kind: 'instruction' },
        { title: 'Tres más', instruction: 'Repite tres veces más: tensar quince segundos, soltar treinta.', durationSec: 135, kind: 'instruction' },
        { title: 'Notar', instruction: '¿Cómo te sientes? Anota si notaste calor en la cara o más energía.', durationSec: 20, kind: 'reflection' },
      ],
    },

    // ------------------------------------------------------------ ansiedad por la salud
    {
      id: 'mis-chequeos-de-salud',
      title: 'Lo que hago cuando temo tener algo grave',
      family: 'deconstructive',
      skills: ['attention', 'resilience'],
      summary: 'Registrar durante una semana cuánto revisas tu cuerpo, buscas síntomas en internet, pides que te tranquilicen o evitas ir al médico, y qué efecto tiene.',
      mechanism:
        'Chequear, buscar y pedir tranquilización alivian un rato, pero mantienen la preocupación. Verlo con datos propios es el primer paso para cambiarlo.',
      evidenceLevel: 'moderada',
      evidence: [SALKOVSKIS_1986, TYRER_2014],
      howItWorks: [
        'La ansiedad por la salud es una preocupación intensa y duradera por tener una enfermedad grave, aunque los estudios den bien. Antes se llamaba hipocondría.',
        'Paul Salkovskis y Hilary Warwick describieron cómo se mantiene. Revisar el cuerpo, buscar en internet o pedir que te digan «no es nada» calman un rato. Pero la duda vuelve, y cada vez hace falta más tranquilización (Salkovskis y Warwick, 1986).',
        'Otras personas hacen lo contrario: evitan médicos y estudios por miedo a lo que puedan encontrar. También mantiene el miedo.',
        'La terapia cognitivo-conductual trabaja estas conductas. En un ensayo grande en pacientes de hospital, redujo la ansiedad por la salud más que la atención habitual (Tyrer y colaboradores, 2014).',
      ],
      tips: [
        'Anota en el momento, no al final del día.',
        'Cuenta también las preguntas a familiares: «¿me ves bien?».',
        'Registra cuánto dura el alivio después de cada chequeo.',
      ],
      obstacles: [
        { q: '¿Y si de verdad tengo algo?', a: 'Es una duda razonable. Por eso los síntomas nuevos se consultan con tu médico. Esta práctica trabaja la preocupación que sigue después de consultar.' },
      ],
      cautions: SINTOMAS,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en los últimos días.', durationSec: 30, kind: 'breath' },
        { title: 'Chequear', instruction: '¿Cómo revisas tu cuerpo? Tocarte bultos, tomarte el pulso, mirarte la piel. Anota cuántas veces por día.', durationSec: 60, kind: 'reflection' },
        { title: 'Buscar', instruction: '¿Cuántas veces buscas síntomas en internet? ¿Cuánto tiempo pasas? Anótalo.', durationSec: 45, kind: 'reflection' },
        { title: 'Preguntar', instruction: '¿A quién le pides que te tranquilice? Familia, amigos, médicos. Anota cuántas veces.', durationSec: 45, kind: 'reflection' },
        { title: 'Evitar', instruction: '¿Evitas algo? Médicos, estudios, noticias, hablar de enfermedades. Anótalo.', durationSec: 45, kind: 'reflection' },
        { title: 'El efecto', instruction: 'Elige una conducta. ¿Cuánto dura el alivio después? ¿Y cómo te sientes una hora más tarde?', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Esta semana sólo vas a observar, sin cambiar nada todavía.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'esperar-antes-de-chequear',
      title: 'Esperar antes de chequear',
      family: 'deconstructive',
      skills: ['resilience', 'attention'],
      summary: 'Cuando aparecen las ganas de revisar tu cuerpo, buscar en internet o pedir que te tranquilicen, esperar un rato y dejar pasar la ola.',
      mechanism:
        'Posponer el chequeo rompe el círculo del alivio rápido. Muchas veces, al esperar, las ganas bajan solas y aprendes que puedes tolerar la duda.',
      evidenceLevel: 'moderada',
      evidence: [SALKOVSKIS_1986, TYRER_2014],
      howItWorks: [
        'En la ansiedad por la salud, cada chequeo calma un poco y entrena a la mente a necesitar otro. Esperar corta ese entrenamiento.',
        'No se trata de no chequear nunca, sino de ganar tiempo. Se empieza con diez o quince minutos y se alarga de a poco.',
        'Con la práctica se aprende algo importante: la incertidumbre es incómoda, pero se puede vivir con ella.',
      ],
      tips: [
        'Si buscas mucho en internet, saca los buscadores de salud de la pantalla de inicio.',
        'Pide a tu familia que, con cariño, no responda la misma pregunta muchas veces.',
        'Arma con tu médico un plan de controles regulares, en vez de consultas por miedo.',
      ],
      obstacles: [
        { q: 'No aguanto la duda.', a: 'Empieza con una espera corta, de cinco minutos. Lo que importa es que la ola baje sin chequear. Si no puedes, consulta: es una buena señal para buscar terapia.' },
      ],
      cautions: SINTOMAS,
      steps: [
        { title: 'Notar', instruction: 'Cuando aparezcan las ganas de chequear, detente. Dite: «Son ganas de chequear».', durationSec: 15, kind: 'instruction' },
        { title: 'Cuánto', instruction: '¿Qué tan fuertes son, de 0 a 10? Anótalo.', durationSec: 15, kind: 'reflection' },
        { title: 'Un plazo', instruction: 'Decide esperar un tiempo antes de hacer nada. Por ejemplo, quince minutos. Pon una alarma.', durationSec: 20, kind: 'instruction' },
        { title: 'La ola', instruction: 'Nota las ganas en el cuerpo. Respira lento y mira cómo suben y bajan.', durationSec: 60, kind: 'breath' },
        { title: 'Otra cosa', instruction: 'Haz algo que te ocupe las manos: lavar platos, caminar, ordenar.', durationSec: 40, kind: 'instruction' },
        { title: 'Al final', instruction: 'Cuando suene la alarma, vuelve a medir las ganas. Anota si bajaron.', durationSec: 20, kind: 'reflection' },
      ],
    },
    {
      id: 'dos-explicaciones-del-sintoma',
      title: 'Dos explicaciones para lo que siento',
      family: 'deconstructive',
      skills: ['attention', 'resilience'],
      summary: 'Comparar dos ideas: «tengo una enfermedad grave» o «tengo un problema de preocupación por la salud», y ver cuál explica mejor lo que te pasa.',
      mechanism:
        'Poner a prueba una explicación alternativa ayuda a soltar la idea de enfermedad sin pedir más pruebas, y abre la puerta a trabajar la preocupación.',
      evidenceLevel: 'moderada',
      evidence: [SALKOVSKIS_1986, TYRER_2014],
      howItWorks: [
        'En la terapia cognitivo-conductual de la ansiedad por la salud se comparan dos explicaciones. La primera dice que tienes una enfermedad grave que nadie encontró. La segunda dice que tienes un problema de preocupación que hace que notes todo y lo leas como peligro.',
        'No se trata de convencerte de que no tienes nada. Se trata de ver qué explicación encaja mejor con todo lo que sabes: los estudios, los síntomas que van y vienen, cómo empeoran con el estrés.',
        'Si la segunda explicación encaja, tiene sentido tratar la preocupación, en lugar de seguir buscando la enfermedad.',
      ],
      tips: [
        'Escribe los datos a favor y en contra de cada explicación, no sólo lo que sientes.',
        'Fíjate si los síntomas cambian cuando te distraes o estás en calma.',
        'Recuerda que prestar mucha atención a una parte del cuerpo hace notar más sensaciones.',
      ],
      obstacles: [
        { q: 'Pero los médicos se pueden equivocar.', a: 'Es cierto, nadie da certeza total. La pregunta es qué explicación encaja mejor hoy. Si aparece algo nuevo, consultas, como cualquier persona.' },
      ],
      cautions: SINTOMAS,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en el síntoma que más te preocupa.', durationSec: 30, kind: 'breath' },
        { title: 'Primera idea', instruction: 'Escribe la primera explicación: «Tengo una enfermedad grave». ¿Cuánto la crees, de 0 a 100?', durationSec: 40, kind: 'reflection' },
        { title: 'Segunda idea', instruction: 'Escribe la segunda: «Tengo un problema de preocupación por la salud». ¿Cuánto la crees?', durationSec: 40, kind: 'reflection' },
        { title: 'Datos', instruction: 'Anota lo que sabes. Qué dijeron los estudios, cuándo empeora el síntoma, si cambia con el estrés.', durationSec: 75, kind: 'reflection' },
        { title: 'Comparar', instruction: '¿Qué explicación encaja mejor con esos datos? Anota por qué.', durationSec: 60, kind: 'reflection' },
        { title: 'Volver a medir', instruction: 'Vuelve a puntuar cuánto crees cada idea. Nota si algo cambió, aunque sea poco.', durationSec: 30, kind: 'reflection' },
        { title: 'Un paso', instruction: 'Si la segunda encaja, elige un paso. Por ejemplo, esperar antes de buscar en internet.', durationSec: 30, kind: 'reflection' },
      ],
    },
  ],

  meta: {
    'escalera-del-miedo': { level: 'intermedio', approaches: ['tcc'], module: 'afrontamiento' },
    'subir-un-escalon': {
      level: 'intermedio',
      approaches: ['tcc'],
      module: 'afrontamiento',
      prerequisites: ['escalera-del-miedo'],
      risk: { level: 2, alternative: 'plantas-de-los-pies' },
    },
    'tension-aplicada': {
      level: 'intermedio',
      approaches: ['tcc', 'relajacion'],
      module: 'afrontamiento',
      risk: { level: 2, alternative: 'plantas-de-los-pies' },
    },
    'mis-chequeos-de-salud': { level: 'intermedio', approaches: ['tcc'], module: 'salud' },
    'esperar-antes-de-chequear': { level: 'intermedio', approaches: ['tcc', 'mindfulness'], module: 'salud', prerequisites: ['mis-chequeos-de-salud'] },
    'dos-explicaciones-del-sintoma': { level: 'intermedio', approaches: ['tcc'], module: 'salud', prerequisites: ['mis-chequeos-de-salud'] },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'fobias-especificas',
      title: 'Fobias específicas: acercarse de a poco',
      subtitle: 'Animales, sangre e inyecciones, alturas, volar, tormentas: por qué la evitación mantiene el miedo y cómo armar una escalera.',
      category: 'Fundamentos',
      readingMin: 8,
      keyPoints: [
        'Una fobia específica es un miedo intenso a algo concreto, mayor que el peligro real.',
        'Evitar alivia en el momento y mantiene el miedo a largo plazo.',
        'La exposición gradual es el tratamiento con más evidencia.',
        'En la fobia a la sangre y las agujas se usa la tensión aplicada para no desmayarse.',
        'Los miedos muy intensos se trabajan con un profesional.',
      ],
      sections: [
        {
          heading: 'Qué es una fobia específica',
          paragraphs: [
            'Es un miedo intenso y persistente a un objeto o una situación concreta. Los más comunes son los animales, como perros, arañas o víboras; la sangre, las heridas y las inyecciones; las alturas; volar; los lugares cerrados; y fenómenos como las tormentas.',
            'La persona suele saber que el miedo es exagerado, pero igual le cuesta controlarlo. El problema aparece cuando el miedo y la evitación achican la vida: no viajar, no ir al médico, no visitar a quien tiene un perro.',
          ],
        },
        {
          heading: 'Por qué la evitación mantiene el miedo',
          paragraphs: [
            'Cada vez que evitas, sientes alivio. Ese alivio refuerza la evitación. Y nunca llegas a comprobar que podías atravesar la situación.',
            'Las conductas de seguridad funcionan parecido. Agarrarte fuerte, no mirar o ir siempre con alguien te hacen pensar que estuviste bien «gracias a eso». El miedo queda intacto.',
          ],
        },
        {
          heading: 'La exposición gradual',
          paragraphs: [
            'Un metaanálisis encontró que los tratamientos basados en la exposición son los más eficaces para las fobias específicas, y que la exposición en vivo funciona mejor que otras formas (Wolitzky-Taylor y colaboradores, 2008). Lars-Göran Öst mostró que una sola sesión intensiva, de hasta tres horas con un terapeuta, puede ayudar mucho (Öst, 1989).',
            'Para miedos leves a moderados se puede practicar de forma autoguiada con una escalera: situaciones ordenadas de menos a más miedo. Se empieza por un escalón fácil y se repite hasta que resulta más manejable.',
            'Michelle Craske y su equipo proponen que la exposición funciona por aprendizaje inhibitorio. Lo que más enseña es comprobar que lo temido no pasa, o que puedes con ello. Ayuda anotar qué temes antes, dejar las conductas de seguridad y variar las situaciones (Craske y colaboradores, 2014).',
          ],
        },
        {
          heading: 'Sangre, heridas e inyecciones',
          paragraphs: [
            'Esta fobia es especial. Primero sube el pulso y luego la presión baja de golpe, y la persona puede desmayarse. La tensión aplicada consiste en tensar brazos, piernas y tronco unos segundos para subir la presión (Öst y colaboradores, 1991).',
            'Si tienes problemas cardíacos o de presión, consulta antes de usarla. En una extracción, avisa al personal de salud y pide hacerla en una camilla.',
          ],
        },
        {
          heading: 'Cuándo hacerlo con un profesional',
          paragraphs: [
            'Busca ayuda si el miedo es muy intenso, si tienes ataques de pánico, si la fobia te impide hacer cosas importantes, como un tratamiento médico, o si el miedo empezó con una experiencia traumática. La exposición a escalones de mucho miedo conviene hacerla con un profesional.',
          ],
        },
      ],
      caveat: {
        title: 'Hasta dónde llega la práctica autoguiada',
        body: 'La exposición autoguiada es para miedos leves a moderados y siempre empieza por escalones de poco miedo. Nunca te expongas a un peligro real. Si tienes problemas de salud que el miedo puede empeorar, como un problema cardíaco o asma, consulta antes. Si el miedo te desborda, baja un escalón y pide ayuda profesional.',
      },
      diagram: {
        title: 'Cómo se mantiene una fobia',
        nodes: ['Situación temida', 'Alarma y miedo', 'Evitar o escapar', 'Alivio rápido', 'El miedo queda igual o crece'],
        caption: 'Acercarse de a poco, sin conductas de seguridad, corta el ciclo.',
      },
      related: {
        practices: ['escalera-del-miedo', 'subir-un-escalon', 'tension-aplicada'],
        articles: ['exposicion-gradual', 'ataques-de-panico'],
      },
      references: [WOLITZKY_2008, OST_1989, CRASKE_2014, OST_1991],
    },
    {
      id: 'ansiedad-por-la-salud',
      title: 'Ansiedad por la salud: cuando el miedo a enfermar ocupa todo',
      subtitle: 'Chequeos, búsquedas en internet, pedir que te tranquilicen o evitar médicos: cómo se mantiene y qué ayuda.',
      category: 'Salud y trabajo',
      readingMin: 8,
      keyPoints: [
        'La ansiedad por la salud es una preocupación intensa por tener una enfermedad grave, aunque los estudios den bien.',
        'Chequear, buscar en internet y pedir tranquilización alivian un rato y mantienen el miedo.',
        'Evitar médicos también lo mantiene.',
        'La terapia cognitivo-conductual tiene buena evidencia.',
        'Ante síntomas nuevos o graves, primero se consulta al médico.',
      ],
      sections: [
        {
          heading: 'Qué es',
          paragraphs: [
            'Todos nos preocupamos por la salud alguna vez. La ansiedad por la salud es cuando esa preocupación se vuelve intensa, dura meses y ocupa mucho del día. Antes se la llamaba hipocondría.',
            'Las sensaciones normales del cuerpo, como un latido fuerte, un dolor de cabeza o un lunar, se leen como señales de algo grave. Cuanto más miedo, más atención se presta al cuerpo, y más sensaciones se notan.',
          ],
        },
        {
          heading: 'Cómo se mantiene',
          paragraphs: [
            'Paul Salkovskis y Hilary Warwick explicaron el papel de la tranquilización. Cuando un médico o un familiar dice «no es nada», el alivio dura poco. Pronto aparece una nueva duda y hace falta otra respuesta (Salkovskis y Warwick, 1986).',
            'Pasa algo parecido con revisarse el cuerpo y con buscar síntomas en internet. Las búsquedas suelen mostrar lo más grave primero, y la angustia sube. Otras personas hacen lo contrario: evitan médicos y estudios por miedo a lo que puedan encontrar.',
          ],
        },
        {
          heading: 'Qué ayuda',
          paragraphs: [
            'La terapia cognitivo-conductual trabaja estas conductas y las ideas que hay detrás. En un ensayo grande con pacientes de hospital, redujo la ansiedad por la salud más que la atención habitual (Tyrer y colaboradores, 2014).',
            'Algunas herramientas son registrar los chequeos, esperar antes de chequear, comparar dos explicaciones para lo que sientes y acordar con tu médico controles regulares, en lugar de consultas por miedo. También ayuda pedir a la familia que no responda muchas veces la misma pregunta.',
          ],
        },
        {
          heading: 'Cuándo consultar',
          paragraphs: [
            'Un síntoma nuevo, intenso o que cambia se consulta con el médico. Eso no es ansiedad: es cuidarse. Ante dolor de pecho fuerte, falta de aire o desmayo, llama al 911.',
            'Busca ayuda psicológica si la preocupación te ocupa muchas horas, si consultas o te haces estudios muy seguido, si evitas por completo al médico o si la angustia afecta tu trabajo y tus vínculos. La Línea Nacional de Salud Mental es el 0800-999-0091.',
          ],
        },
      ],
      caveat: {
        title: 'Un cuidado importante',
        body: 'Las prácticas de esta sección no sirven para decidir si un síntoma es grave. Primero se consulta al médico. Lo que se trabaja aquí es la preocupación que sigue después de consultar, cuando los estudios dieron bien.',
      },
      diagram: {
        title: 'El círculo de la ansiedad por la salud',
        nodes: ['Sensación en el cuerpo', 'Idea de enfermedad grave', 'Miedo', 'Chequear, buscar o preguntar', 'Alivio breve', 'Más atención al cuerpo'],
        caption: 'Esperar antes de chequear y buscar otra explicación cortan el círculo.',
      },
      related: {
        practices: ['mis-chequeos-de-salud', 'esperar-antes-de-chequear', 'dos-explicaciones-del-sintoma'],
        articles: ['preocupacion-y-ansiedad', 'ataques-de-panico'],
      },
      references: [SALKOVSKIS_1986, TYRER_2014],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'acercarme-a-lo-que-temo',
      title: 'Acercarme a lo que temo',
      subtitle: 'Cuatro semanas para fobias leves y miedo a enfermar',
      description:
        'Las dos primeras semanas son para una fobia específica: armarás tu escalera y subirás escalones de a poco. Las dos últimas son para la ansiedad por la salud. Puedes hacer sólo la parte que te sirve. Es para miedos leves a moderados; si el miedo es muy intenso, hazlo con un profesional.',
      basis: 'Öst (1989); Wolitzky-Taylor y colaboradores (2008); Craske y colaboradores (2014); Salkovskis y Warwick (1986); Tyrer y colaboradores (2014).',
      rhythm: '10 a 15 minutos, 4 o 5 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Mi escalera',
          focus: 'Entender la fobia y ordenar los miedos',
          description: 'Leerás por qué evitar mantiene el miedo y armarás tu escalera, de menos a más.',
          practiceIds: ['escalera-del-miedo', 'respiracion-resonante'],
          articleIds: ['fobias-especificas'],
          journalType: 'escalera-exposicion',
        },
        {
          title: 'Semana 2 · Subir escalones',
          focus: 'Exposición gradual y tensión aplicada',
          description: 'Harás los primeros escalones y anotarás qué pasó. Si tu miedo es a la sangre o las agujas, practicarás la tensión aplicada.',
          practiceIds: ['subir-un-escalon', 'tension-aplicada'],
          articleIds: [],
          journalType: 'escalera-exposicion',
        },
        {
          title: 'Semana 3 · Mirar los chequeos',
          focus: 'Cómo se mantiene el miedo a enfermar',
          description: 'Leerás sobre la ansiedad por la salud y registrarás tus chequeos, búsquedas y preguntas.',
          practiceIds: ['mis-chequeos-de-salud'],
          articleIds: ['ansiedad-por-la-salud'],
          journalType: 'preocupacion',
        },
        {
          title: 'Semana 4 · Esperar y explicar',
          focus: 'Tolerar la duda',
          description: 'Practicarás esperar antes de chequear y comparar dos explicaciones para lo que sientes.',
          practiceIds: ['esperar-antes-de-chequear', 'dos-explicaciones-del-sintoma'],
          articleIds: [],
          journalType: 'experimento',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-fobias-especificas',
      title: 'El miedo que achica la vida',
      subtitle: 'Fobias específicas y por qué evitar no ayuda.',
      slides: [
        { heading: 'Un miedo concreto', text: 'Perros, arañas, alturas, aviones o tormentas. En una fobia, el miedo es mucho mayor que el peligro real.' },
        { heading: 'Evitar alivia', text: 'Cruzar la calle o no viajar calma en el momento. Pero así nunca compruebas que podías.' },
        { heading: 'De a poco', text: 'La exposición gradual es lo que más ayuda. Se arma una escalera de menos a más miedo.' },
        { heading: 'Comprobar', text: 'Antes de cada escalón, anota qué temes. Después, mira qué pasó en realidad.' },
        { heading: 'Con ayuda', text: 'Si el miedo es muy fuerte o tienes ataques de pánico, hazlo con un profesional.' },
      ],
      related: { practices: ['escalera-del-miedo', 'subir-un-escalon'], articles: ['fobias-especificas'] },
      references: [WOLITZKY_2008, CRASKE_2014],
    },
    {
      id: 'pildora-tension-aplicada',
      title: 'Si te desmayas con la sangre',
      subtitle: 'La tensión aplicada, paso a paso.',
      slides: [
        { heading: 'Una fobia distinta', text: 'Con la sangre o las agujas, la presión puede bajar de golpe. Por eso algunas personas se desmayan.' },
        { heading: 'Tensar', text: 'Tensa brazos, piernas y panza unos quince segundos. Vas a sentir calor en la cara.' },
        { heading: 'Soltar a medias', text: 'Suelta sin relajarte del todo, unos treinta segundos. Repite cinco veces.' },
        { heading: 'Practicar antes', text: 'Practica en casa una semana. Después úsala al ver fotos, videos o en una extracción.' },
        { heading: 'Un cuidado', text: 'Si tienes problemas del corazón o de presión, consulta a tu médico antes de usarla.' },
      ],
      related: { practices: ['tension-aplicada'], articles: ['fobias-especificas'] },
      references: [OST_1991],
    },
    {
      id: 'pildora-ansiedad-por-la-salud',
      title: 'Cuando temes tener algo grave',
      subtitle: 'Qué es la ansiedad por la salud y qué la mantiene.',
      slides: [
        { heading: 'Mucho más que cuidarse', text: 'Es una preocupación intensa por tener algo grave, aunque los estudios den bien. Dura meses y ocupa mucho del día.' },
        { heading: 'Pedir que te calmen', text: 'Cuando alguien te dice «no es nada», el alivio dura poco. Pronto aparece otra duda.' },
        { heading: 'Chequear', text: 'Tocarte, tomarte el pulso o mirarte la piel hace que notes más sensaciones. Y el miedo crece.' },
        { heading: 'Evitar', text: 'Algunas personas no van al médico por miedo. Eso también mantiene la angustia.' },
        { heading: 'Tiene tratamiento', text: 'La terapia cognitivo-conductual ayuda. Y ante un síntoma nuevo o fuerte, primero consulta a tu médico.' },
      ],
      related: { practices: ['mis-chequeos-de-salud', 'dos-explicaciones-del-sintoma'], articles: ['ansiedad-por-la-salud'] },
      references: [SALKOVSKIS_1986, TYRER_2014],
    },
    {
      id: 'pildora-buscar-sintomas',
      title: 'Buscar síntomas en internet',
      subtitle: 'Por qué no calma y qué hacer con las ganas.',
      slides: [
        { heading: 'Lo grave primero', text: 'Las búsquedas suelen mostrar lo más grave. Por eso sales con más miedo del que tenías.' },
        { heading: 'Alivio corto', text: 'A veces una página te calma. Pero al rato buscas otra vez, y cada vez necesitas más.' },
        { heading: 'Esperar', text: 'Cuando aparezcan las ganas, espera quince minutos. Respira y haz algo con las manos.' },
        { heading: 'Mirar la ola', text: 'Las ganas suben y bajan. Si esperas, muchas veces bajan solas.' },
        { heading: 'Un plan', text: 'Acuerda con tu médico controles regulares. Y ante un síntoma nuevo, consulta en lugar de buscar.' },
      ],
      related: { practices: ['esperar-antes-de-chequear'], articles: ['ansiedad-por-la-salud'] },
      references: [SALKOVSKIS_1986],
    },
  ],

  // ================================================================== glosario
  glossary: [
    {
      id: 'fobia-especifica',
      term: 'Fobia específica',
      definition: 'Miedo intenso y duradero a algo concreto, como un animal, las alturas o la sangre, mucho mayor que el peligro real.',
      articleId: 'fobias-especificas',
    },
    {
      id: 'jerarquia-de-exposicion',
      term: 'Escalera de exposición',
      definition: 'Lista de situaciones temidas ordenadas de menos a más miedo. Se sube de a un escalón, empezando por uno fácil.',
      practiceId: 'escalera-del-miedo',
    },
    {
      id: 'aprendizaje-inhibitorio',
      term: 'Aprendizaje inhibitorio',
      definition: 'Idea de que la exposición no borra el miedo viejo, sino que suma un aprendizaje nuevo que compite con él. Enseña más cuando lo temido no pasa.',
      practiceId: 'subir-un-escalon',
    },
    {
      id: 'tension-aplicada',
      term: 'Tensión aplicada',
      definition: 'Técnica para la fobia a la sangre y las agujas. Se tensan los músculos grandes para subir la presión y evitar el desmayo.',
      practiceId: 'tension-aplicada',
    },
    {
      id: 'ansiedad-por-la-salud',
      term: 'Ansiedad por la salud',
      definition: 'Preocupación intensa y duradera por tener una enfermedad grave, aunque los estudios den bien. Antes se llamaba hipocondría.',
      articleId: 'ansiedad-por-la-salud',
    },
    {
      id: 'busqueda-de-tranquilizacion',
      term: 'Búsqueda de tranquilización',
      definition: 'Pedir una y otra vez que te digan que todo está bien. Calma un rato, pero mantiene la duda y el miedo.',
      practiceId: 'esperar-antes-de-chequear',
    },
  ],
};
