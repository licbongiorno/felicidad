/**
 * Sección para chicos (4 a 12 años), supervisada por un adulto responsable.
 *
 * Principios:
 *  - El adulto es el titular de la cuenta; el chico no tiene correo ni contraseña (minimización
 *    de datos de menores, Ley 25.326) y lo que registra lo ve el adulto.
 *  - Contenido adaptado de programas con evidencia en la infancia: TCC para la ansiedad
 *    (Coping Cat), aprendizaje socioemocional, atención plena escolar y DBT para niños.
 *  - No hay evaluaciones clínicas, ni análisis en cadena, ni prácticas de riesgo 2: eso exige
 *    un profesional. La gamificación es sana: stickers y jardín, sin rachas que castiguen,
 *    sin cuentas regresivas, sin tienda ni nada social.
 *  - Lenguaje simple y frases cortas; las emociones se nombran con sustantivos («el enojo»),
 *    que no tienen género.
 */

import { isPublished } from './governance';

export type AgeBand = '0-3' | '4-6' | '7-9' | '10-12' | '13-17';

export const AGE_BANDS: { id: AgeBand; label: string; description: string }[] = [
  { id: '0-3', label: '0 a 3 años', description: 'Sin pantallas para el chico: actividades guiadas para que las hagas tú con él o ella.' },
  { id: '4-6', label: '4 a 6 años', description: 'Todavía no lee solo: casi todo con voz, dibujos y botones grandes.' },
  { id: '7-9', label: '7 a 9 años', description: 'Frases cortas con voz. Actividades de 2 a 5 minutos.' },
  { id: '10-12', label: '10 a 12 años', description: 'Texto con ilustraciones y habilidades un poco más complejas.' },
  { id: '13-17', label: '13 a 17 años', description: 'Habilidades para adolescentes. Más privacidad: no te mostramos lo que escribe.' },
];

/** La voz narrada se activa sola para quienes todavía no leen. */
export const narrateByDefault = (band: AgeBand) => band === '4-6';

/**
 * 0 a 3 años: la OMS recomienda no usar pantallas antes de los 2 años y muy poco hasta los 5.
 * Por eso esa franja no tiene modo chico: son actividades que el adulto hace con el chico.
 */
export const hasKidMode = (band: AgeBand) => band !== '0-3';

/**
 * Adolescentes: el adulto ve las actividades, las emociones y los avisos de seguridad, pero
 * no lo que escriben (cosas buenas, misiones). Así se sostiene la confianza sin perder el cuidado.
 */
export const isTeen = (band: AgeBand) => band === '13-17';

// ---------------------------------------------------------------- emociones

export type KidFeelingId = 'alegria' | 'calma' | 'tristeza' | 'enojo' | 'miedo' | 'preocupacion' | 'sorpresa' | 'cansancio';

export interface KidFeeling {
  id: KidFeelingId;
  label: string;
  /** Frase de validación de la mascota. */
  validation: string;
  /** Sentimientos que, si se repiten muy intensos, avisan al adulto. */
  hard: boolean;
}

export const KID_FEELINGS: KidFeeling[] = [
  { id: 'alegria', label: 'Alegría', validation: '¡Qué lindo! La alegría da ganas de saltar y de compartir.', hard: false },
  { id: 'calma', label: 'Calma', validation: 'La calma es como un lago quieto. Disfrútala.', hard: false },
  { id: 'tristeza', label: 'Tristeza', validation: 'Está bien sentir tristeza. A veces pide un abrazo o llorar un rato.', hard: true },
  { id: 'enojo', label: 'Enojo', validation: 'El enojo aparece cuando algo nos parece injusto. Sentirlo está bien; lastimar no.', hard: true },
  { id: 'miedo', label: 'Miedo', validation: 'El miedo quiere cuidarte. Podemos hacerlo más chiquito juntos.', hard: true },
  { id: 'preocupacion', label: 'Preocupación', validation: 'Las preocupaciones dan vueltas en la cabeza. Contarlas las hace más livianas.', hard: true },
  { id: 'sorpresa', label: 'Sorpresa', validation: '¡Uy! La sorpresa llega de golpe y después se acomoda.', hard: false },
  { id: 'cansancio', label: 'Cansancio', validation: 'El cuerpo cansado pide descanso. Escucharlo es cuidarte.', hard: false },
];

export const FEELING_BY_ID = Object.fromEntries(KID_FEELINGS.map((f) => [f.id, f])) as Record<KidFeelingId, KidFeeling>;

/** Intensidad en el termómetro: 1 un poco, 2 bastante, 3 muchísimo. */
export type KidIntensity = 1 | 2 | 3;
export const INTENSITY_LABEL: Record<KidIntensity, string> = { 1: 'Un poco', 2: 'Bastante', 3: 'Muchísimo' };

// ---------------------------------------------------------------- avatares

export type KidAvatar = 'sol' | 'luna' | 'estrella' | 'hoja' | 'flor' | 'nube' | 'corazon' | 'rayo';
export const KID_AVATARS: { id: KidAvatar; label: string }[] = [
  { id: 'sol', label: 'Sol' },
  { id: 'luna', label: 'Luna' },
  { id: 'estrella', label: 'Estrella' },
  { id: 'hoja', label: 'Hoja' },
  { id: 'flor', label: 'Flor' },
  { id: 'nube', label: 'Nube' },
  { id: 'corazon', label: 'Corazón' },
  { id: 'rayo', label: 'Rayo' },
];

// ---------------------------------------------------------------- actividades

export type KidSkill = 'calma' | 'cuerpo' | 'emociones' | 'pensar' | 'valentia' | 'amabilidad' | 'gratitud' | 'atencion';

export const KID_SKILLS: { id: KidSkill; label: string; description: string }[] = [
  { id: 'calma', label: 'Respirar y calmarme', description: 'Respiraciones con dibujos que se mueven.' },
  { id: 'cuerpo', label: 'Mi cuerpo', description: 'Aflojar el cuerpo cuando está tenso.' },
  { id: 'emociones', label: 'Mis emociones', description: 'Reconocer lo que siento y ponerle nombre.' },
  { id: 'atencion', label: 'Prestar atención', description: 'Usar los sentidos para estar aquí y ahora.' },
  { id: 'pensar', label: 'Mis pensamientos', description: 'Mirar los pensamientos como un detective.' },
  { id: 'valentia', label: 'Ser valiente', description: 'Pasitos para que el miedo se achique.' },
  { id: 'amabilidad', label: 'Amabilidad y amigos', description: 'Cuidar a otros y pedir lo que necesito.' },
  { id: 'gratitud', label: 'Gratitud', description: 'Guardar las cosas buenas del día.' },
];

export type MascotMood = 'feliz' | 'calma' | 'piensa' | 'sorpresa' | 'orgullo' | 'valiente';

export interface KidChoice {
  question: string;
  options: { label: string; reply: string }[];
}

export interface KidStep {
  text: string;
  mood?: MascotMood;
  /** Reproduce una campana suave al mostrar el paso. */
  sound?: boolean;
  /** Segundos sugeridos para el paso (muestra un círculo que se llena, sin cuenta regresiva). */
  seconds?: number;
  choice?: KidChoice;
}

export type BreathShape = 'globo' | 'flor' | 'estrella' | 'cuadrado' | 'ola';

interface ActivityBase {
  id: string;
  title: string;
  /** Una línea para la tarjeta. */
  tagline: string;
  skill: KidSkill;
  bands: AgeBand[];
  minutes: number;
  /** Cómo acompañar (lo lee el adulto). */
  forAdult: string;
  /** De dónde viene (lo lee el adulto). */
  evidence: string;
  /** Aviso para el adulto cuando corresponde. */
  caution?: string;
}

export type KidActivity = ActivityBase &
  (
    | {
        kind: 'respirar';
        shape: BreathShape;
        intro: string;
        /** Segundos de cada fase; hold = pausa con aire, rest = pausa sin aire. */
        inhale: number;
        hold: number;
        exhale: number;
        rest: number;
        cycles: number;
        cueIn: string;
        cueOut: string;
        cueHold?: string;
      }
    | { kind: 'pasos'; steps: KidStep[] }
    | { kind: 'juego'; intro: string; rounds: { situation: string; answer: KidFeelingId; options: KidFeelingId[] }[] }
    | { kind: 'emocion'; intro: string }
    | { kind: 'gratitud'; intro: string }
    | { kind: 'mision'; intro: string; steps: KidStep[]; missions: string[] }
    /** 0 a 3 años: pasos para el adulto, que se muestran en Familia (sin modo chico). */
    | { kind: 'juntos'; steps: KidStep[] }
  );

/** Franjas con modo chico. */
const ALL: AgeBand[] = ['4-6', '7-9', '10-12', '13-17'];

export const KID_ACTIVITIES: KidActivity[] = [
  // ------------------------------------------------------------ calma
  {
    id: 'globo-magico',
    kind: 'respirar',
    title: 'El globo mágico',
    tagline: 'Infla un globo en tu panza.',
    skill: 'calma',
    bands: ['4-6', '7-9'],
    minutes: 2,
    shape: 'globo',
    intro: 'Pon una mano en tu panza. Imagina que adentro hay un globo de tu color favorito.',
    inhale: 3,
    hold: 0,
    exhale: 4,
    rest: 1,
    cycles: 5,
    cueIn: 'Inflamos el globo',
    cueOut: 'Lo desinflamos despacio',
    forAdult: 'Respira a la par, con tu mano en tu panza. Si se marea, que vuelva a respirar normal: no hace falta llenar mucho el globo.',
    evidence: 'La respiración lenta con la panza baja la activación del cuerpo. Es parte de casi todos los programas de regulación emocional para la infancia.',
  },
  {
    id: 'huele-la-flor',
    kind: 'respirar',
    title: 'Huele la flor, sopla la vela',
    tagline: 'Una flor en una mano, una vela en la otra.',
    skill: 'calma',
    bands: ['4-6'],
    minutes: 2,
    shape: 'flor',
    intro: 'Levanta un dedo: es una flor. Levanta otro dedo: es una vela.',
    inhale: 3,
    hold: 0,
    exhale: 4,
    rest: 1,
    cycles: 5,
    cueIn: 'Huele la flor',
    cueOut: 'Sopla la vela',
    forAdult: 'Haz los dedos con tu hijo o hija. El soplido es lento, como para que la llama tiemble sin apagarse.',
    evidence: 'Convierte la exhalación larga en un juego. La exhalación más larga que la inhalación ayuda a que el cuerpo se calme.',
  },
  {
    id: 'respiracion-estrella',
    kind: 'respirar',
    title: 'La estrella de cinco puntas',
    tagline: 'Recorre una estrella con el dedo.',
    skill: 'calma',
    bands: ['7-9', '10-12'],
    minutes: 2,
    shape: 'estrella',
    intro: 'Sigue la luz por la estrella. Cuando sube, tomas aire. Cuando baja, lo sueltas.',
    inhale: 3,
    hold: 0,
    exhale: 3,
    rest: 0,
    cycles: 5,
    cueIn: 'Sube y toma aire',
    cueOut: 'Baja y suelta el aire',
    forAdult: 'También se puede hacer sin pantalla: abre la mano y recorre los dedos con el índice de la otra mano.',
    evidence: 'Unir la respiración a un movimiento que se ve ayuda a sostener la atención y a llevar un ritmo lento.',
  },
  {
    id: 'respiracion-cuadrado',
    kind: 'respirar',
    title: 'El cuadrado tranquilo',
    tagline: 'Cuatro lados, cuatro tiempos.',
    skill: 'calma',
    bands: ['10-12', '13-17'],
    minutes: 2,
    shape: 'cuadrado',
    intro: 'Vamos a recorrer un cuadrado. En cada lado haces una cosa distinta.',
    inhale: 3,
    hold: 3,
    exhale: 3,
    rest: 3,
    cycles: 4,
    cueIn: 'Toma aire',
    cueHold: 'Guárdalo',
    cueOut: 'Suéltalo',
    forAdult: 'Si las pausas le incomodan, se pueden acortar o quitar. Lo importante es el ritmo lento.',
    evidence: 'La respiración con pausas regulares es una forma sencilla de bajar el ritmo. Sirve antes de una prueba o al irse a dormir.',
  },
  {
    id: 'ola-del-mar',
    kind: 'respirar',
    title: 'Las olas del mar',
    tagline: 'Respira como las olas que van y vienen.',
    skill: 'calma',
    bands: ['7-9', '10-12', '13-17'],
    minutes: 3,
    shape: 'ola',
    intro: 'Mira la ola. Cuando sube, el aire entra. Cuando baja, el aire sale, más largo.',
    inhale: 4,
    hold: 0,
    exhale: 6,
    rest: 0,
    cycles: 6,
    cueIn: 'La ola sube',
    cueOut: 'La ola baja',
    forAdult: 'Es una buena actividad para antes de dormir. Con la luz baja y en voz suave, funciona mejor.',
    evidence: 'Respirar unas seis veces por minuto, con la exhalación más larga, se asocia con más calma y mejor regulación.',
  },
  {
    id: 'tortuga',
    kind: 'pasos',
    title: 'La técnica de la tortuga',
    tagline: 'Métete en tu caparazón cuando te enojas.',
    skill: 'calma',
    bands: ['4-6', '7-9'],
    minutes: 3,
    steps: [
      { text: 'Cuando las tortugas se enojan o se asustan, se meten en su caparazón.', mood: 'feliz' },
      { text: 'Primero, para. Quédate quieto como una piedra.', mood: 'sorpresa' },
      { text: 'Ahora métete en tu caparazón: cruza los brazos, baja la cabeza y cierra los ojos.', mood: 'calma' },
      { text: 'Adentro del caparazón, respira tres veces despacio.', mood: 'calma', seconds: 15 },
      { text: 'Piensa: ¿qué puedo hacer ahora? Puedo pedir ayuda, decir lo que siento o irme un ratito.', mood: 'piensa' },
      { text: 'Sal del caparazón cuando estés más tranquilo. ¡Lo hiciste muy bien!', mood: 'orgullo' },
    ],
    forAdult: 'Practíquenla en calma muchas veces antes de usarla enojados. Cuando la use de verdad, nómbralo: «¡Usaste tu tortuga!».',
    evidence: 'La técnica de la tortuga nació en aulas de primaria para el autocontrol (Robin y colaboradores, 1976). Hoy se usa en programas de aprendizaje socioemocional.',
  },

  // ------------------------------------------------------------ cuerpo
  {
    id: 'espagueti',
    kind: 'pasos',
    title: 'Fideo duro, fideo blando',
    tagline: 'De fideo crudo a fideo cocido.',
    skill: 'cuerpo',
    bands: ['4-6', '7-9'],
    minutes: 2,
    steps: [
      { text: '¿Viste los fideos antes de cocinarlos? Son duros y derechos.', mood: 'feliz' },
      { text: 'Ponte duro como un fideo crudo. Aprieta los brazos, las piernas y la cara.', mood: 'sorpresa', seconds: 5 },
      { text: '¡Al agua caliente! Ahora eres un fideo cocido: blando, blandito.', mood: 'calma', seconds: 8 },
      { text: 'Otra vez: duro, duro, duro como un fideo crudo.', mood: 'sorpresa', seconds: 5 },
      { text: 'Y ahora blando, flojito, como fideo en el plato.', mood: 'calma', seconds: 8 },
      { text: '¿Notas tu cuerpo más suave? Así se siente aflojar.', mood: 'orgullo' },
    ],
    forAdult: 'Hazlo con exageración y con humor: el juego es la mitad del efecto. No hace falta apretar fuerte.',
    evidence: 'Es una versión infantil de la relajación muscular progresiva: tensar y soltar enseña a notar la diferencia y a aflojar.',
  },
  {
    id: 'robot-y-muneco',
    kind: 'pasos',
    title: 'El limón, el gato y la tortuga',
    tagline: 'Aprieta y suelta cada parte del cuerpo.',
    skill: 'cuerpo',
    bands: ['7-9', '10-12'],
    minutes: 4,
    steps: [
      { text: 'Vamos a recorrer el cuerpo apretando y soltando, como en un juego.', mood: 'feliz' },
      { text: 'Imagina que tienes un limón en cada mano. Exprímelo fuerte para sacarle todo el jugo.', mood: 'sorpresa', seconds: 5 },
      { text: 'Suelta el limón. Nota tus manos flojas y calentitas.', mood: 'calma', seconds: 8 },
      { text: 'Ahora eres un gato que se despierta: estira los brazos bien alto.', mood: 'sorpresa', seconds: 5 },
      { text: 'Deja caer los brazos, sueltos, como un gato que se vuelve a dormir.', mood: 'calma', seconds: 8 },
      { text: 'Eres una tortuga: sube los hombros hasta las orejas para esconder la cabeza.', mood: 'sorpresa', seconds: 5 },
      { text: 'Sal del caparazón y baja los hombros. Siente cuánto pesan.', mood: 'calma', seconds: 8 },
      { text: 'Por último, masca un chicle enorme y duro. Después deja la boca floja.', mood: 'calma', seconds: 8 },
      { text: 'Todo tu cuerpo está más suelto. Puedes volver a esto cuando estés tenso.', mood: 'orgullo' },
    ],
    forAdult: 'Si alguna parte le duele, que no la apriete. Funciona muy bien en la cama, antes de dormir.',
    evidence: 'Adaptación del guion de relajación para niños de Koeppen (1974), basado en la relajación muscular progresiva.',
  },
  {
    id: 'rayos-x',
    kind: 'pasos',
    title: 'Mis rayos X',
    tagline: 'Recorre tu cuerpo con una luz imaginaria.',
    skill: 'cuerpo',
    bands: ['10-12', '13-17'],
    minutes: 4,
    steps: [
      { text: 'Acuéstate o siéntate cómodo. Imagina que tienes unos rayos X que ven lo que siente tu cuerpo.', mood: 'calma' },
      { text: 'Empieza por los pies. ¿Están fríos, calientes, cansados? Solo míralos, sin cambiar nada.', mood: 'calma', seconds: 15 },
      { text: 'Sube a las piernas y a la panza. ¿Hay algo apretado? Respira hacia ahí.', mood: 'calma', seconds: 15 },
      { text: 'Ahora el pecho y los hombros. Muchas emociones se sienten aquí.', mood: 'piensa', seconds: 15 },
      { text: 'Por último, la cara: la frente, los ojos, la mandíbula. Déjalos aflojar.', mood: 'calma', seconds: 15 },
      { text: 'Tus rayos X te ayudan a darte cuenta de cómo estás. Eso es el primer paso para cuidarte.', mood: 'orgullo' },
    ],
    forAdult: 'Pregúntale después qué notó, sin corregir. Si algo le preocupa del cuerpo, escúchalo y, si hace falta, consulten al pediatra.',
    evidence: 'El escaneo corporal es una práctica central de los programas de atención plena en escuelas, que muestran mejoras en atención y en manejo del estrés.',
  },

  // ------------------------------------------------------------ emociones
  {
    id: 'como-me-siento',
    kind: 'emocion',
    title: '¿Cómo me siento hoy?',
    tagline: 'Elige una cara y mide tu emoción.',
    skill: 'emociones',
    bands: ALL,
    minutes: 1,
    intro: 'Todas las emociones están bien. Elige la que más se parece a lo que sientes ahora.',
    forAdult: 'Lo que marque, lo verás en tu panel. Recíbelo sin corregir: «Gracias por contarme. ¿Quieres que hagamos algo juntos?».',
    evidence: 'Poner nombre a las emociones es la base de la regulación emocional y de los programas de aprendizaje socioemocional (Durlak y colaboradores, 2011).',
  },
  {
    id: 'caras-y-emociones',
    kind: 'juego',
    title: 'Adivina la emoción',
    tagline: '¿Qué siente cada personaje?',
    skill: 'emociones',
    bands: ['4-6', '7-9'],
    minutes: 3,
    intro: 'Te cuento lo que le pasa a alguien. Tú adivinas qué siente.',
    rounds: [
      { situation: 'A Lucía le regalaron el perrito que quería.', answer: 'alegria', options: ['alegria', 'tristeza', 'enojo'] },
      { situation: 'A Tomás se le rompió su juguete favorito.', answer: 'tristeza', options: ['sorpresa', 'tristeza', 'calma'] },
      { situation: 'Le sacaron el lugar en la fila a Martina.', answer: 'enojo', options: ['enojo', 'alegria', 'cansancio'] },
      { situation: 'Joaquín escucha un ruido fuerte en la noche.', answer: 'miedo', options: ['calma', 'miedo', 'alegria'] },
      { situation: 'Sofía abre la puerta y están todos sus amigos gritando «¡Feliz cumpleaños!».', answer: 'sorpresa', options: ['tristeza', 'sorpresa', 'enojo'] },
      { situation: 'Benjamín corrió toda la tarde en la plaza y ahora bosteza.', answer: 'cansancio', options: ['cansancio', 'miedo', 'enojo'] },
    ],
    forAdult: 'Después de cada respuesta, pregunten: «¿A ti te pasó algo así alguna vez?». Ahí está lo más valioso del juego.',
    evidence: 'Reconocer emociones en otros es una de las competencias que más trabajan los programas socioemocionales en la primera infancia.',
  },
  {
    id: 'emociones-en-el-cuerpo',
    kind: 'pasos',
    title: '¿Dónde vive mi emoción?',
    tagline: 'Las emociones se sienten en el cuerpo.',
    skill: 'emociones',
    bands: ['7-9'],
    minutes: 3,
    steps: [
      { text: 'Las emociones no solo se piensan: también se sienten en el cuerpo.', mood: 'piensa' },
      {
        text: 'Piensa en la última vez que tuviste miedo.',
        mood: 'sorpresa',
        choice: {
          question: '¿Dónde lo sentiste?',
          options: [
            { label: 'En la panza', reply: 'Muchas personas sienten mariposas o un nudo en la panza.' },
            { label: 'En el corazón', reply: 'El corazón late rápido para prepararte. Es el miedo trabajando.' },
            { label: 'En las piernas', reply: 'Las piernas tiemblan o quieren correr. ¡El cuerpo se prepara!' },
          ],
        },
      },
      {
        text: 'Ahora piensa en la última vez que tuviste mucha alegría.',
        mood: 'feliz',
        choice: {
          question: '¿Dónde la sentiste?',
          options: [
            { label: 'En la cara', reply: '¡Sí! La sonrisa aparece sola.' },
            { label: 'En el pecho', reply: 'Muchas personas sienten calor y ganas de abrazar.' },
            { label: 'En todo el cuerpo', reply: 'Ganas de saltar y bailar. ¡Qué lindo!' },
          ],
        },
      },
      { text: 'Cuando notas la emoción en el cuerpo, puedes darte cuenta antes de que crezca mucho.', mood: 'orgullo' },
    ],
    forAdult: 'Comparte también dónde sientes tú las emociones. Que te vea nombrarlas le enseña más que cualquier explicación.',
    evidence: 'Notar las señales del cuerpo ayuda a reconocer la emoción a tiempo. Es un paso de los programas de TCC infantil como Coping Cat (Kendall, 1994).',
  },
  {
    id: 'volcan',
    kind: 'pasos',
    title: 'El volcán del enojo',
    tagline: 'Enfría el volcán antes de que explote.',
    skill: 'emociones',
    bands: ['7-9', '10-12'],
    minutes: 3,
    steps: [
      { text: 'El enojo es como un volcán: empieza calentito y puede crecer hasta explotar.', mood: 'piensa' },
      {
        text: 'Las señales de que el volcán se calienta son distintas para cada uno.',
        mood: 'piensa',
        choice: {
          question: '¿Cuál es tu señal?',
          options: [
            { label: 'Me pongo rojo y caliente', reply: 'Esa es tu alarma. Cuando la notes, es momento de enfriar.' },
            { label: 'Aprieto los puños', reply: 'Tus manos te avisan. ¡Buena señal para parar!' },
            { label: 'Grito o hablo fuerte', reply: 'La voz te avisa que el volcán sube. Puedes bajar el volumen y respirar.' },
          ],
        },
      },
      { text: 'Para enfriar el volcán, primero para. No hagas nada todavía.', mood: 'calma' },
      { text: 'Respira hondo tres veces, soltando el aire como vapor que sale del volcán.', mood: 'calma', seconds: 15 },
      { text: 'Cuando estés más fresco, dilo con palabras: «Me enojé porque…».', mood: 'piensa' },
      { text: 'El enojo está permitido. Lastimar a otros, a ti o a las cosas, no. ¡Tú puedes enfriar tu volcán!', mood: 'orgullo' },
    ],
    forAdult: 'En plena explosión no se enseña: primero calma (tuya y suya). Esta actividad se practica después, cuando todos estén tranquilos.',
    evidence: 'Reconocer las señales tempranas y frenar antes de actuar es el centro de los programas para el manejo del enojo en la infancia.',
  },
  {
    id: 'ola-de-emocion',
    kind: 'pasos',
    title: 'Surfear la ola',
    tagline: 'Las emociones suben y bajan como olas.',
    skill: 'emociones',
    bands: ['10-12', '13-17'],
    minutes: 3,
    steps: [
      { text: 'Las emociones fuertes son como olas: suben, llegan a lo más alto y después bajan.', mood: 'piensa' },
      { text: 'Si peleas contra la ola, te revuelca. Si la surfeas, te lleva hasta la orilla.', mood: 'piensa' },
      { text: 'Piensa en una emoción fuerte que tuviste. ¿Cuánto duró lo más intenso? Casi siempre son unos minutos.', mood: 'piensa' },
      { text: 'Para surfear: nombra la emoción, siente dónde está en el cuerpo y respira con ella.', mood: 'calma', seconds: 20 },
      { text: 'No tienes que hacer lo que la emoción te pide en ese momento. Puedes esperar a que la ola baje.', mood: 'calma' },
      { text: 'Cada vez que surfeas una ola, te vuelves mejor surfista.', mood: 'orgullo' },
    ],
    forAdult: 'Ayúdale a recordar olas que ya pasaron: «¿Te acuerdas de lo enojado que estabas ayer? Mira cómo se fue».',
    evidence: 'Basado en las habilidades de regulación emocional de la DBT para niños (Perepletchikova y colaboradores, 2017).',
  },

  // ------------------------------------------------------------ atención
  {
    id: 'escucha-la-campana',
    kind: 'pasos',
    title: 'Escucha la campana',
    tagline: '¿Hasta cuándo puedes oír el sonido?',
    skill: 'atencion',
    bands: ['4-6', '7-9'],
    minutes: 2,
    steps: [
      { text: 'Vamos a jugar a escuchar. Siéntate cómodo y quédate quieto como una estatua.', mood: 'calma' },
      { text: 'Va a sonar una campana. Escucha el sonido hasta que ya no lo oigas más.', mood: 'calma', sound: true, seconds: 10 },
      { text: 'Otra vez. Ahora cierra los ojos si quieres.', mood: 'calma', sound: true, seconds: 10 },
      { text: 'Con los ojos cerrados, ¿qué otros sonidos escuchas? Cuenta cuántos.', mood: 'piensa', seconds: 15 },
      { text: '¡Escuchaste con mucha atención! Eso es estar aquí y ahora.', mood: 'orgullo' },
    ],
    forAdult: 'Sube el volumen del dispositivo. Al final, cuenten juntos los sonidos que oyeron.',
    evidence: 'Los juegos de escucha son una forma de atención plena adaptada a la infancia. Los programas escolares de atención plena mejoran la atención (Zenner y colaboradores, 2014).',
  },
  {
    id: 'detective-de-sentidos',
    kind: 'pasos',
    title: 'Detective de los sentidos',
    tagline: '5 cosas que ves, 4 que tocas, 3 que oyes…',
    skill: 'atencion',
    bands: ['7-9', '10-12', '13-17'],
    minutes: 3,
    steps: [
      { text: 'Hoy eres detective. Tu lupa son tus sentidos.', mood: 'feliz' },
      { text: 'Busca 5 cosas que puedas ver. Nómbralas en voz alta.', mood: 'piensa', seconds: 20 },
      { text: 'Busca 4 cosas que puedas tocar. ¿Son suaves, duras, frías?', mood: 'piensa', seconds: 20 },
      { text: 'Escucha 3 sonidos distintos.', mood: 'calma', seconds: 15 },
      { text: 'Encuentra 2 olores. Si no hay, imagina tu olor favorito.', mood: 'calma', seconds: 15 },
      { text: 'Y 1 sabor: ¿qué gusto tiene tu boca ahora?', mood: 'calma', seconds: 10 },
      { text: '¡Caso resuelto! Tus sentidos te trajeron al presente.', mood: 'orgullo' },
    ],
    forAdult: 'Sirve mucho cuando la cabeza da vueltas con una preocupación. Pueden jugarlo en la calle o en el auto.',
    evidence: 'Llevar la atención a los sentidos ayuda a salir de la preocupación. Es una técnica de anclaje que se usa en atención plena y en TCC.',
  },
  {
    id: 'comer-con-atencion',
    kind: 'pasos',
    title: 'Comer como un explorador',
    tagline: 'Descubre un alimento como si fuera la primera vez.',
    skill: 'atencion',
    bands: ['7-9', '10-12', '13-17'],
    minutes: 4,
    steps: [
      { text: 'Busca un alimento chiquito con un adulto: una pasa, un gajo de mandarina o una galletita.', mood: 'feliz' },
      { text: 'Imagina que vienes de otro planeta y nunca lo viste. Míralo bien: colores, formas, brillos.', mood: 'piensa', seconds: 20 },
      { text: 'Tócalo. ¿Es liso, rugoso, pegajoso? Huélelo.', mood: 'piensa', seconds: 15 },
      { text: 'Ponlo en la boca sin masticar. ¿Qué pasa con tu lengua?', mood: 'sorpresa', seconds: 15 },
      { text: 'Mastícalo muy despacio y nota cómo cambia el sabor.', mood: 'calma', seconds: 20 },
      { text: 'Comiste con toda tu atención. ¿Sabía distinto que otras veces?', mood: 'orgullo' },
    ],
    forAdult: 'Elijan un alimento sin riesgo de atragantamiento y que no le dé alergia. Si hay dificultades con la comida, consúltalo antes con su pediatra.',
    evidence: 'El ejercicio de la pasa es un clásico de los programas de atención plena, también en sus versiones para escuelas.',
    caution: 'Elige un alimento seguro para su edad y sin alérgenos.',
  },

  // ------------------------------------------------------------ pensamientos
  {
    id: 'detective-de-pensamientos',
    kind: 'pasos',
    title: 'Detective de pensamientos',
    tagline: '¿Ese pensamiento dice la verdad?',
    skill: 'pensar',
    bands: ['7-9', '10-12', '13-17'],
    minutes: 4,
    steps: [
      { text: 'A veces la cabeza nos dice cosas que asustan o ponen tristes. Pero no todo lo que pensamos es verdad.', mood: 'piensa' },
      { text: 'Un detective no cree lo primero que escucha: busca pistas.', mood: 'piensa' },
      {
        text: 'Imagina que piensas: «Nadie quiere jugar conmigo».',
        mood: 'piensa',
        choice: {
          question: '¿Qué pista buscaría un detective?',
          options: [
            { label: '¿Alguien jugó conmigo esta semana?', reply: '¡Excelente pista! Si alguien jugó contigo, «nadie» no es del todo cierto.' },
            { label: '¿Hay alguien a quien todavía no le pregunté?', reply: '¡Muy bien! A lo mejor alguien diría que sí.' },
            { label: 'Nada, ya sé que es así', reply: 'Ese pensamiento es muy convincente. Pero un detective siempre busca al menos una pista más.' },
          ],
        },
      },
      { text: 'Con las pistas, arma un pensamiento más justo: «Hoy me costó, pero a veces juego con Juli».', mood: 'feliz' },
      { text: 'Cuando un pensamiento te haga sentir mal, pregúntate: ¿qué pistas tengo?', mood: 'orgullo' },
    ],
    forAdult: 'No intentes convencerle de que el pensamiento es falso: ayúdale a buscar pistas. Si los pensamientos negativos son muy frecuentes, consúltalo con un profesional.',
    evidence: 'Es la reestructuración cognitiva de la TCC infantil, que tiene buena evidencia para la ansiedad en la infancia (James y colaboradores, 2015).',
  },
  {
    id: 'pensamientos-nube',
    kind: 'pasos',
    title: 'Pensamientos que son nubes',
    tagline: 'Mira pasar los pensamientos sin subirte.',
    skill: 'pensar',
    bands: ['10-12', '13-17'],
    minutes: 3,
    steps: [
      { text: 'Imagina que estás acostado en el pasto mirando el cielo.', mood: 'calma' },
      { text: 'Cada pensamiento que aparece es una nube. Algunas son blancas, otras grises.', mood: 'calma' },
      { text: 'Cuando llegue un pensamiento, ponlo en una nube y míralo pasar. No hace falta subirte.', mood: 'calma', seconds: 30 },
      { text: 'Si te subes a una nube sin querer, no pasa nada. Bájate y vuelve a mirar el cielo.', mood: 'calma', seconds: 30 },
      { text: 'Los pensamientos van y vienen. Tú eres el cielo, que siempre sigue ahí.', mood: 'orgullo' },
    ],
    forAdult: 'Sirve cuando un pensamiento se repite mucho. No reemplaza hablar de lo que le preocupa: hazlo también.',
    evidence: 'Es la defusión cognitiva de la terapia de aceptación y compromiso, adaptada con una imagen visual para chicos.',
  },
  {
    id: 'voz-amable',
    kind: 'pasos',
    title: 'Mi voz amable',
    tagline: 'Háblate como le hablarías a un amigo.',
    skill: 'pensar',
    bands: ['10-12', '13-17'],
    minutes: 3,
    steps: [
      { text: 'Cuando nos equivocamos, a veces nos hablamos con una voz muy dura: «Soy un desastre».', mood: 'piensa' },
      {
        text: 'Imagina que tu mejor amigo se equivoca en una prueba y está triste.',
        mood: 'piensa',
        choice: {
          question: '¿Qué le dirías?',
          options: [
            { label: '«Le pasa a todos, la próxima te sale»', reply: '¡Qué amable! Esa es tu voz amable.' },
            { label: '«Estudiemos juntos para la próxima»', reply: '¡Genial! Ayudar también es amabilidad.' },
            { label: '«Eres un desastre»', reply: 'Seguro que no se lo dirías a un amigo. ¿Por qué decírtelo a ti?' },
          ],
        },
      },
      { text: 'Ahora pon una mano en el pecho y dite a ti lo mismo que le dirías a tu amigo.', mood: 'calma', seconds: 15 },
      { text: 'La voz amable no es mentir: es tratarte con cariño mientras aprendes.', mood: 'orgullo' },
    ],
    forAdult: 'Presta atención a cómo te hablas tú delante de tus hijos cuando te equivocas: es el modelo que copian.',
    evidence: 'La autocompasión se asocia con mejor bienestar en adolescentes. Esta es una versión sencilla del ejercicio «¿Cómo tratarías a un amigo?».',
  },
  {
    id: 'mente-sabia',
    kind: 'pasos',
    title: 'Mi mente sabia',
    tagline: 'Cuando la emoción y la razón se ponen de acuerdo.',
    skill: 'pensar',
    bands: ['10-12', '13-17'],
    minutes: 3,
    steps: [
      { text: 'Tenemos una mente que siente (la de las emociones) y una que piensa (la de la razón).', mood: 'piensa' },
      { text: 'Cuando solo manda la emoción, hacemos cosas de las que nos arrepentimos. Cuando solo manda la razón, no escuchamos lo que sentimos.', mood: 'piensa' },
      { text: 'La mente sabia es donde las dos se encuentran: sientes la emoción y también piensas.', mood: 'calma' },
      {
        text: 'Imagina que un compañero te empuja sin querer y te caes.',
        mood: 'sorpresa',
        choice: {
          question: '¿Qué haría tu mente sabia?',
          options: [
            { label: 'Empujarlo más fuerte', reply: 'Esa es la mente emocional sola. Se entiende el enojo, pero puede traer problemas.' },
            { label: 'Respirar y decirle que me dolió', reply: '¡Esa es tu mente sabia! Escucha el enojo y elige qué hacer.' },
            { label: 'Hacer como si no pasó nada', reply: 'Eso es más razón que emoción. Tu enojo también merece ser escuchado.' },
          ],
        },
      },
      { text: 'Para encontrar tu mente sabia: para, respira y pregúntate: ¿qué es lo mejor que puedo hacer ahora?', mood: 'orgullo' },
    ],
    forAdult: 'Pueden usar la pregunta en casa: «¿Qué diría tu mente sabia?». Funciona mejor que un sermón.',
    evidence: 'La mente sabia es una habilidad central de la DBT, adaptada para niños en la DBT-C (Perepletchikova y colaboradores, 2017).',
  },

  // ------------------------------------------------------------ valentía
  {
    id: 'pasito-valiente',
    kind: 'mision',
    title: 'Pasitos valientes',
    tagline: 'Una misión chiquita con tu adulto.',
    skill: 'valentia',
    bands: ['4-6'],
    minutes: 3,
    intro: 'Ser valiente no es no tener miedo. Es hacer algo chiquito aunque el miedo esté.',
    steps: [
      { text: 'El miedo a veces nos dice «¡no lo hagas!». Pero muchas veces exagera.', mood: 'sorpresa' },
      { text: 'Cuando hacemos algo un poquito difícil, el miedo se achica.', mood: 'valiente' },
      { text: 'Elige una misión con tu adulto. ¡Pueden hacerla juntos!', mood: 'feliz' },
    ],
    missions: [
      'Saludar a alguien nuevo',
      'Pedir algo en un negocio',
      'Dormir con la luz un poco más baja',
      'Quedarme un ratito jugando solo en mi pieza',
      'Probar un juego nuevo en la plaza',
    ],
    forAdult: 'Elige una misión fácil, que casi seguro salga bien. Acompaña y elogia el esfuerzo, no el resultado: «¡Lo intentaste aunque daba miedo!».',
    evidence: 'Enfrentar de a poco lo que da miedo, con apoyo, es el componente más eficaz de la TCC para la ansiedad en la infancia (James y colaboradores, 2015).',
  },
  {
    id: 'escalera-valiente',
    kind: 'mision',
    title: 'Mi escalera valiente',
    tagline: 'Sube un escalón por vez.',
    skill: 'valentia',
    bands: ['7-9', '10-12', '13-17'],
    minutes: 5,
    intro: 'Cuando algo nos da miedo, no hace falta enfrentarlo todo de golpe. Se sube de a un escalón.',
    steps: [
      { text: 'Piensa en algo que te da miedo y que te gustaría poder hacer.', mood: 'piensa' },
      { text: 'Ahora piensa en un paso chiquito, que dé solo un poco de miedo. Ese es el primer escalón.', mood: 'piensa' },
      { text: 'Cuando haces el escalón, el miedo sube un poco y después baja. Si te quedas, baja solo.', mood: 'valiente' },
      { text: 'Cuando un escalón ya es fácil, pasas al siguiente. Elige tu misión de hoy con tu adulto.', mood: 'feliz' },
    ],
    missions: [
      'Levantar la mano para hablar en clase',
      'Ir a un cumpleaños donde conozco a pocos',
      'Llamar por teléfono a un familiar',
      'Dormir una noche en mi cama sin llamar',
      'Preguntar algo a un adulto que no conozco mucho',
      'Probar una comida nueva',
    ],
    forAdult: 'Armen juntos los escalones, del más fácil al más difícil. No le obligues a saltar escalones ni le rescates apenas aparece el miedo: acompaña y espera a que baje.',
    evidence: 'La exposición gradual es el núcleo de Coping Cat (Kendall, 1994). En SPACE, los padres aprenden a acompañar sin acomodarse al miedo (Lebowitz y colaboradores, 2020).',
    caution: 'Si el miedo es muy intenso, aparece de golpe o limita mucho su vida, consulta con un profesional antes de armar la escalera.',
  },
  {
    id: 'cajita-preocupaciones',
    kind: 'pasos',
    title: 'La cajita de las preocupaciones',
    tagline: 'Guarda las preocupaciones hasta la hora de charlarlas.',
    skill: 'valentia',
    bands: ['7-9'],
    minutes: 3,
    steps: [
      { text: 'Las preocupaciones a veces aparecen todo el día, como mosquitos molestos.', mood: 'sorpresa' },
      { text: 'Vamos a hacerles una casa: una cajita de las preocupaciones.', mood: 'feliz' },
      { text: 'Dibuja o escribe tu preocupación en un papel con tu adulto.', mood: 'piensa', seconds: 30 },
      { text: 'Dóblala y guárdala en la cajita. Ahí queda cuidada.', mood: 'calma' },
      { text: 'Elijan juntos una hora del día para abrir la cajita y charlar las preocupaciones.', mood: 'piensa' },
      { text: 'Si la preocupación vuelve antes, dile: «Ya estás en la caja, te veo más tarde».', mood: 'orgullo' },
    ],
    forAdult: 'Respeten el horario de la cajita: 10 minutos al día, no antes de dormir. Cuando la abran, escucha primero y busquen juntos qué se puede hacer.',
    evidence: 'Es una versión infantil del «tiempo para preocuparse», una técnica de la TCC para la preocupación excesiva.',
  },

  // ------------------------------------------------------------ problemas y amigos
  {
    id: 'semaforo',
    kind: 'pasos',
    title: 'El semáforo para resolver problemas',
    tagline: 'Rojo, amarillo y verde.',
    skill: 'amabilidad',
    bands: ['7-9', '10-12'],
    minutes: 4,
    steps: [
      { text: 'Cuando tenemos un problema, podemos usar un semáforo en la cabeza.', mood: 'piensa' },
      { text: 'Rojo: ¡para! Respira y di cómo te sientes.', mood: 'calma', seconds: 10 },
      { text: 'Amarillo: piensa. ¿Cuál es el problema? ¿Qué cosas podría hacer?', mood: 'piensa' },
      {
        text: 'Imagina que tu hermano agarró tu juguete sin pedirlo.',
        mood: 'sorpresa',
        choice: {
          question: '¿Qué opción elegirías en verde?',
          options: [
            { label: 'Pedirle que me lo devuelva', reply: '¡Buena opción! Decir lo que necesitas con calma suele funcionar.' },
            { label: 'Ofrecerle jugar juntos', reply: '¡Qué buena idea! Así ganan los dos.' },
            { label: 'Sacárselo de un tirón', reply: 'Es una opción, pero puede terminar en pelea. ¿Qué otra se te ocurre?' },
          ],
        },
      },
      { text: 'Verde: prueba la opción que elegiste. Si no funciona, vuelve al amarillo y elige otra.', mood: 'orgullo' },
    ],
    forAdult: 'Cuando pida ayuda con un problema, en lugar de resolverlo, pregúntale: «¿Qué opciones se te ocurren?». Es como aprende a resolver.',
    evidence: 'El semáforo es una herramienta clásica de los programas de resolución de problemas en la escuela, dentro del aprendizaje socioemocional (Durlak y colaboradores, 2011).',
  },
  {
    id: 'cuento-siento-pido',
    kind: 'pasos',
    title: 'Cuento, siento, pido',
    tagline: 'Tres pasos para pedir lo que necesitas.',
    skill: 'amabilidad',
    bands: ['10-12'],
    minutes: 4,
    steps: [
      { text: 'Pedir lo que necesitamos sin gritar ni quedarnos callados es una habilidad. Tiene tres pasos.', mood: 'piensa' },
      { text: 'Cuento: digo lo que pasó, sin insultar. «Ayer no me guardaste lugar en la mesa».', mood: 'piensa' },
      { text: 'Siento: digo cómo me sentí. «Me sentí dejado de lado».', mood: 'calma' },
      { text: 'Pido: digo lo que necesito. «¿Me guardas lugar mañana?».', mood: 'feliz' },
      {
        text: 'Tu amiga siempre elige el juego y nunca te pregunta.',
        mood: 'piensa',
        choice: {
          question: '¿Cuál sería un buen «pido»?',
          options: [
            { label: '«¿Hoy elijo yo y mañana tú?»', reply: '¡Perfecto! Es claro y justo para las dos.' },
            { label: '«Eres una mandona»', reply: 'Eso es un insulto: suele terminar en pelea. Prueba decir qué te gustaría.' },
            { label: 'No digo nada y me enojo', reply: 'Si no lo dices, tu amiga no se entera. Tu necesidad también cuenta.' },
          ],
        },
      },
      { text: 'Decir lo que necesitas con respeto es cuidarte a ti y a la amistad.', mood: 'orgullo' },
    ],
    forAdult: 'Practíquenlo con situaciones de casa. Cuando lo use contigo, aunque no puedas darle lo que pide, reconoce que lo pidió bien.',
    evidence: 'Es una versión simplificada de las habilidades de efectividad interpersonal de la DBT, adaptadas en la DBT para niños.',
  },
  {
    id: 'superpoder-amable',
    kind: 'mision',
    title: 'Mi superpoder amable',
    tagline: 'Una misión de amabilidad para hoy.',
    skill: 'amabilidad',
    bands: ['4-6', '7-9'],
    minutes: 2,
    intro: 'La amabilidad es un superpoder: hace sentir bien a los demás y también a ti.',
    steps: [
      { text: 'Cuando hacemos algo amable, el corazón se pone calentito.', mood: 'feliz' },
      { text: 'Elige tu misión amable de hoy.', mood: 'orgullo' },
    ],
    missions: [
      'Dar un abrazo a alguien de mi familia',
      'Ayudar a poner la mesa',
      'Prestar un juguete',
      'Decirle algo lindo a un amigo',
      'Hacer un dibujo para alguien',
      'Dar las gracias a alguien que me ayudó',
    ],
    forAdult: 'Cuando la cumpla, nombra lo que viste: «Vi cómo le prestaste el juguete a tu prima. Fue muy amable».',
    evidence: 'Hacer actos amables aumenta el bienestar y la aceptación entre compañeros en la escuela primaria.',
  },
  {
    id: 'mano-en-el-corazon',
    kind: 'pasos',
    title: 'Mano en el corazón',
    tagline: 'Un abrazo que te das a ti.',
    skill: 'amabilidad',
    bands: ['4-6', '7-9'],
    minutes: 2,
    steps: [
      { text: 'Cuando estás triste o te duele algo, puedes darte un abrazo a ti.', mood: 'calma' },
      { text: 'Pon una mano en tu corazón. ¿Lo sientes latir?', mood: 'calma', seconds: 10 },
      { text: 'Pon la otra mano encima. Siente el calorcito de tus manos.', mood: 'calma', seconds: 10 },
      { text: 'Dite despacito: «Estoy aquí. Te cuido».', mood: 'calma', seconds: 10 },
      { text: 'Puedes hacerlo cuando quieras. Y también puedes pedir un abrazo a tu adulto.', mood: 'orgullo' },
    ],
    forAdult: 'Esto no reemplaza tu consuelo: lo complementa. Si está triste, ofrécele también tu abrazo.',
    evidence: 'El contacto calmante es un gesto de autocompasión que ayuda a sentirse acompañado.',
  },

  // ------------------------------------------------------------ gratitud
  {
    id: 'frasco-de-gratitud',
    kind: 'gratitud',
    title: 'El frasco de las cosas buenas',
    tagline: 'Guarda algo bueno que te pasó hoy.',
    skill: 'gratitud',
    bands: ALL,
    minutes: 2,
    intro: 'Todos los días pasa algo bueno, aunque sea chiquito. Vamos a guardarlo en el frasco.',
    forAdult: 'Háganlo juntos a la noche, contando cada uno su cosa buena. Si tuvo un mal día, también vale algo muy pequeño.',
    evidence: 'Registrar cosas buenas del día aumenta el bienestar y las emociones positivas, también en escolares.',
  },
  // ------------------------------------------------------------ 0 a 3 años: para hacer juntos (las guía el adulto)
  {
    id: 'cara-a-cara',
    kind: 'juntos',
    title: 'Ida y vuelta cara a cara',
    tagline: 'Responder a sus gestos y sonidos.',
    skill: 'emociones',
    bands: ['0-3'],
    minutes: 5,
    steps: [
      { text: 'Pónganse cara a cara, a unos 30 centímetros, en un momento en que esté despierto y tranquilo.' },
      { text: 'Espera a que haga algo: un sonido, una mirada, una mueca o un gesto con la mano.' },
      { text: 'Respóndele: imita el sonido, sonríe, nombra lo que mira. Es como una conversación sin palabras.' },
      { text: 'Haz una pausa y espera su turno. Si mira para otro lado, está descansando: respeta esa pausa.' },
    ],
    forAdult: 'No hace falta un momento especial: el cambio de pañal o la comida sirven. Lo que importa es responder a lo que hace, no llenar el silencio.',
    evidence: 'Estas interacciones de «ida y vuelta» construyen las bases del desarrollo emocional y del lenguaje, según el Centro para el Niño en Desarrollo de la Universidad de Harvard.',
  },
  {
    id: 'nombrar-lo-que-siente',
    kind: 'juntos',
    title: 'Ponerle palabras a lo que siente',
    tagline: 'Nombrar sus emociones en voz alta.',
    skill: 'emociones',
    bands: ['0-3'],
    minutes: 2,
    steps: [
      { text: 'Cuando notes una emoción, nómbrala con pocas palabras: «Estás enojado. Querías el juguete».' },
      { text: 'Usa tu cara y tu voz para acompañar: un tono suave para la tristeza, uno alegre para la alegría.' },
      { text: 'Si llora, primero consuela. Las palabras vienen después, cuando ya se calmó un poco.' },
      { text: 'Haz lo mismo con tus emociones: «Estoy un poco cansada, voy a sentarme un ratito».' },
    ],
    forAdult: 'Aunque todavía no hable, entiende mucho más de lo que puede decir. Nombrar emociones es la base de que algún día pueda regularlas.',
    evidence: 'Hablar de las emociones con los hijos desde pequeños se asocia con una mejor regulación emocional más adelante (Gottman y colaboradores, 1996).',
  },
  {
    id: 'calma-compartida',
    kind: 'juntos',
    title: 'Calma compartida',
    tagline: 'Tu calma le ayuda a calmarse.',
    skill: 'calma',
    bands: ['0-3'],
    minutes: 3,
    steps: [
      { text: 'Cuando llora o está muy alterado, primero cuida tu calma: suelta los hombros y respira lento por la nariz.' },
      { text: 'Sostenlo cerca de tu pecho. Tu respiración lenta y tu latido le ayudan a calmarse.' },
      { text: 'Balancéate despacio o camina, y habla en voz baja y monótona: «Shhh, estoy acá».' },
      { text: 'Si sientes que no puedes más, déjalo en un lugar seguro, como la cuna, y tómate unos minutos. Pedir ayuda está bien.' },
    ],
    forAdult: 'Nunca lo sacudas, aunque estés al límite: es peligroso para su cerebro. Si el llanto es muy intenso, no para o lo notas enfermo, consulta al pediatra o a la guardia.',
    evidence: 'Los bebés regulan sus emociones a través del adulto (co-regulación). La calma del adulto es la primera herramienta de regulación que aprenden.',
    caution: 'Si el llanto no para, lo notas enfermo o con fiebre, consulta al pediatra o a la guardia.',
  },
  {
    id: 'cancion-y-balanceo',
    kind: 'juntos',
    title: 'Canción y balanceo',
    tagline: 'Una canción siempre igual para calmarse.',
    skill: 'calma',
    bands: ['0-3'],
    minutes: 3,
    steps: [
      { text: 'Elige una canción corta y cántala siempre en los mismos momentos: al dormir o cuando está inquieto.' },
      { text: 'Cántala lento y bajito, mientras lo meces al mismo ritmo.' },
      { text: 'Con el tiempo, la canción sola empieza a avisarle que es hora de calmarse.' },
    ],
    forAdult: 'No importa cómo cantes: tu voz es la que más le calma. La repetición es lo que hace que funcione.',
    evidence: 'Las rutinas predecibles y el canto dirigido al bebé ayudan a regular su activación y fortalecen el vínculo.',
  },
  {
    id: 'rutina-para-dormir',
    kind: 'juntos',
    title: 'La rutina para dormir',
    tagline: 'Los mismos pasos cada noche.',
    skill: 'cuerpo',
    bands: ['0-3'],
    minutes: 5,
    steps: [
      { text: 'Elijan tres o cuatro pasos fijos, por ejemplo: baño, pijama, cuento y canción.' },
      { text: 'Háganlos siempre en el mismo orden y a una hora parecida.' },
      { text: 'Apaguen las pantallas al menos una hora antes de dormir. La luz baja le avisa al cuerpo que viene la noche.' },
      { text: 'Termina siempre igual, con una frase corta: «Buenas noches, hasta mañana».' },
    ],
    forAdult: 'Una rutina predecible baja la ansiedad de la noche. Si hay cambios, como viajes o enfermedades, vuelvan a la rutina apenas se pueda.',
    evidence: 'Las rutinas para dormir constantes se asocian con un sueño más largo y menos despertares en la primera infancia.',
  },
  {
    id: 'cucu-tras',
    kind: 'juntos',
    title: 'Cucú, ¡acá estoy!',
    tagline: 'Jugar a esconderse y volver.',
    skill: 'valentia',
    bands: ['0-3'],
    minutes: 3,
    steps: [
      { text: 'Tápate la cara con las manos o con un pañuelo y pregunta: «¿Dónde está mamá?» o «¿Dónde está papá?».' },
      { text: 'Destápate con alegría: «¡Cucú, acá estoy!».' },
      { text: 'Cuando sea más grande, escóndete detrás de una puerta o un sillón por unos segundos.' },
    ],
    forAdult: 'Este juego le enseña que lo que desaparece vuelve. Ayuda a preparar las separaciones de todos los días.',
    evidence: 'El juego de esconderse y aparecer acompaña el desarrollo de la permanencia del objeto y la tolerancia a separaciones breves.',
  },
  {
    id: 'despedidas-cortas',
    kind: 'juntos',
    title: 'Despedidas cortas y claras',
    tagline: 'Un ritual para las separaciones.',
    skill: 'valentia',
    bands: ['0-3'],
    minutes: 2,
    steps: [
      { text: 'Avisa siempre que te vas, aunque llore. Irse a escondidas aumenta la inseguridad.' },
      { text: 'Usa un ritual breve: un abrazo, un beso y una frase siempre igual, como «Vuelvo después de la siesta».' },
      { text: 'Despídete con calma y vete. Las despedidas largas suelen hacerlo más difícil.' },
      { text: 'Al volver, saluda con alegría y nombra que cumpliste: «Te dije que volvía, y acá estoy».' },
    ],
    forAdult: 'El llanto al separarse es esperable entre los 8 meses y los 3 años. Suele durar poco después de que el adulto se va.',
    evidence: 'La ansiedad por separación es una etapa normal del desarrollo. Las despedidas predecibles ayudan a que el niño confíe en que el adulto vuelve.',
  },
  {
    id: 'acompanar-el-berrinche',
    kind: 'juntos',
    title: 'Acompañar un berrinche',
    tagline: 'Quedarse cerca, con pocas palabras.',
    skill: 'emociones',
    bands: ['0-3'],
    minutes: 5,
    steps: [
      { text: 'Primero, que no pueda lastimarse: aleja lo peligroso.' },
      { text: 'Quédate cerca, a su altura, con voz baja. No hace falta hablar mucho.' },
      { text: 'Nombra lo que pasa: «Estás muy enojado porque nos fuimos de la plaza».' },
      { text: 'Mantén el límite con cariño. No cedas por el berrinche, pero tampoco lo castigues por sentir.' },
      { text: 'Cuando pase, ofrécele un abrazo y sigan con el día, sin sermones.' },
    ],
    forAdult: 'Entre los 18 meses y los 3 años, los berrinches son parte del desarrollo: quieren más de lo que pueden manejar. La guía «Berrinches y desbordes» tiene más ideas.',
    evidence: 'La presencia calmada del adulto ayuda al niño a recuperar la calma (Morris y colaboradores, 2007).',
  },
  {
    id: 'leer-juntos',
    kind: 'juntos',
    title: 'Leer juntos, conversando',
    tagline: 'Un cuento con preguntas.',
    skill: 'atencion',
    bands: ['0-3'],
    minutes: 10,
    steps: [
      { text: 'Elijan un libro con dibujos grandes. Con los bebés, sirven los de tela o cartón.' },
      { text: 'Más que leer el texto, señalen y nombren lo que ven: «¡Mira el perro! ¿Cómo hace el perro?».' },
      { text: 'Hablen de las caras de los personajes: «Está triste. ¿Por qué estará triste?».' },
      { text: 'Si quiere el mismo libro mil veces, está perfecto: la repetición le ayuda a aprender.' },
    ],
    forAdult: 'Con 10 minutos al día alcanza. Leer juntos favorece el lenguaje y es un momento de conexión sin pantallas.',
    evidence: 'La lectura compartida y conversada se asocia con un mejor desarrollo del lenguaje en la primera infancia.',
  },
  {
    id: 'juego-en-el-piso',
    kind: 'juntos',
    title: 'Juego en el piso',
    tagline: 'Diez minutos donde él o ella elige.',
    skill: 'amabilidad',
    bands: ['0-3'],
    minutes: 10,
    steps: [
      { text: 'Siéntate en el piso, a su altura, y deja el teléfono lejos.' },
      { text: 'Deja que elija con qué jugar. Tú sigues su juego.' },
      { text: 'Describe lo que hace: «Pusiste el bloque rojo arriba». Así se siente visto.' },
      { text: 'Celebra sus intentos, no solo los logros: «¡Lo intentaste otra vez!».' },
    ],
    forAdult: 'Es la versión para los más chicos del «tiempo especial». La guía con ese nombre explica por qué funciona.',
    evidence: 'Los programas de crianza con evidencia, como la PCIT, empiezan fortaleciendo el vínculo con un rato de juego diario guiado por el niño (Thomas y Zimmer-Gembeck, 2007).',
  },

  // ------------------------------------------------------------ 13 a 17 años
  {
    id: 'tipp-rapido',
    kind: 'pasos',
    title: 'TIPP: bajar la intensidad rápido',
    tagline: 'Cuando la emoción está al máximo.',
    skill: 'calma',
    bands: ['13-17'],
    minutes: 4,
    steps: [
      { text: 'TIPP sirve cuando una emoción es tan fuerte que no puedes pensar. No resuelve el problema: baja el volumen para que puedas pensar.', mood: 'piensa' },
      { text: 'Temperatura: moja tu cara con agua fría o sostén algo frío unos segundos. El frío baja el ritmo del corazón.', mood: 'calma', seconds: 20 },
      { text: 'Intensidad: mueve el cuerpo fuerte un minuto. Salta, corre en el lugar o sube escaleras.', mood: 'valiente', seconds: 30 },
      { text: 'Pausa al respirar: inhala contando 4 y exhala contando 6, varias veces.', mood: 'calma', seconds: 30 },
      { text: 'Pares de músculos: aprieta los puños y los hombros cinco segundos, y suelta. Repite dos veces.', mood: 'calma', seconds: 20 },
      { text: 'Cuando bajó un poco, pregúntate qué necesitas ahora. A veces es hablar con alguien.', mood: 'orgullo' },
    ],
    forAdult: 'Si tiene problemas del corazón o un trastorno de la conducta alimentaria, que no use el frío ni el ejercicio intenso sin consultar antes al médico.',
    evidence: 'TIPP es una habilidad de tolerancia al malestar de la DBT, que también tiene una versión para adolescentes con buenos resultados.',
    caution: 'Si tiene problemas del corazón o de la alimentación, que no use el agua fría ni el ejercicio intenso sin consultar al médico.',
  },
  {
    id: 'stop',
    kind: 'pasos',
    title: 'STOP antes de reaccionar',
    tagline: 'Cuatro pasos para no actuar en caliente.',
    skill: 'calma',
    bands: ['13-17'],
    minutes: 2,
    steps: [
      { text: 'Hay momentos en que reaccionamos y después nos arrepentimos: un mensaje, un portazo, una respuesta.', mood: 'piensa' },
      { text: 'S de stop: frena. No hagas nada todavía, ni siquiera mandar ese mensaje.', mood: 'sorpresa' },
      { text: 'T de tomar distancia: da un paso atrás y respira un par de veces.', mood: 'calma', seconds: 10 },
      { text: 'O de observar: ¿qué está pasando? ¿Qué siento? ¿Qué están haciendo los demás?', mood: 'piensa' },
      {
        text: 'P de proceder con mente sabia: elige lo que te va a ayudar después, no solo ahora.',
        mood: 'piensa',
        choice: {
          question: 'Un amigo te deja en visto y te enojas. ¿Qué harías con STOP?',
          options: [
            { label: 'Mandarle un audio enojado ya', reply: 'Es lo que pide el enojo, pero quizás después te arrepientas. STOP te da unos minutos para decidir.' },
            { label: 'Esperar y preguntarle más tarde qué pasó', reply: '¡Eso es STOP! Esperas a estar más tranquilo y buscas los hechos.' },
            { label: 'Bloquearlo sin decir nada', reply: 'Puede que te alivie un rato, pero cierra la conversación. Quizás haya otra explicación.' },
          ],
        },
      },
    ],
    forAdult: 'Si la ves usar STOP en casa, reconócelo. Practicarlo con situaciones chicas ayuda a que esté disponible en las grandes.',
    evidence: 'STOP es una habilidad de tolerancia al malestar de la DBT para adolescentes.',
  },
  {
    id: 'accion-opuesta',
    kind: 'pasos',
    title: 'Acción opuesta',
    tagline: 'Hacer lo contrario de lo que pide la emoción.',
    skill: 'emociones',
    bands: ['13-17'],
    minutes: 3,
    steps: [
      { text: 'Cada emoción trae un impulso. La tristeza pide encerrarse; el miedo, escapar; el enojo, atacar.', mood: 'piensa' },
      { text: 'A veces seguir ese impulso empeora las cosas. Por ejemplo, cuando el miedo es más grande que el peligro real.', mood: 'piensa' },
      {
        text: 'Acción opuesta: haces lo contrario del impulso, con todo el cuerpo.',
        mood: 'valiente',
        choice: {
          question: 'Estás triste y quieres quedarte todo el día en la cama. ¿Cuál sería la acción opuesta?',
          options: [
            { label: 'Salir a caminar o ver a alguien', reply: '¡Exacto! Moverse y conectar con otros es lo opuesto a aislarse.' },
            { label: 'Ver series hasta tarde', reply: 'Eso sigue siendo encerrarse. Prueba algo que te saque un poco afuera.' },
            { label: 'Obligarme a estar feliz', reply: 'La acción opuesta no es fingir. Es hacer algo distinto, aunque la emoción siga ahí.' },
          ],
        },
      },
      { text: 'Úsala solo cuando la emoción no ayuda o es más fuerte de lo que la situación pide.', mood: 'orgullo' },
    ],
    forAdult: 'Si la tristeza dura semanas, aparece todos los días o la aleja de todo, no alcanza con esta habilidad: consulten con un profesional.',
    evidence: 'La acción opuesta es una habilidad de regulación emocional de la DBT, con base en la exposición y la activación conductual.',
  },
  {
    id: 'chequear-los-hechos',
    kind: 'pasos',
    title: 'Chequear los hechos',
    tagline: '¿Lo que siento encaja con lo que pasó?',
    skill: 'pensar',
    bands: ['13-17'],
    minutes: 4,
    steps: [
      { text: 'A veces la emoción reacciona a lo que pensamos que pasó, no a lo que pasó.', mood: 'piensa' },
      { text: 'Primero, describe solo los hechos, como lo haría una cámara: «Mis amigos subieron una foto sin mí».', mood: 'piensa' },
      { text: 'Después, nota tu interpretación: «No me quieren, me dejaron afuera a propósito».', mood: 'piensa' },
      { text: 'Pregúntate: ¿hay otras explicaciones posibles? ¿Qué tan probable es lo peor?', mood: 'piensa', seconds: 20 },
      { text: 'Si la emoción no encaja con los hechos, puede bajar. Si encaja, ya sabes qué problema resolver.', mood: 'orgullo' },
    ],
    forAdult: 'Cuando te cuente algo que le dolió, ayúdale a separar hechos de interpretaciones sin decirle que «está exagerando».',
    evidence: 'Chequear los hechos es una habilidad de regulación emocional de la DBT, cercana a la reestructuración cognitiva de la TCC.',
  },
  {
    id: 'pedir-y-decir-que-no',
    kind: 'pasos',
    title: 'Pedir algo o decir que no',
    tagline: 'Defender lo que necesitas sin pelear.',
    skill: 'amabilidad',
    bands: ['13-17'],
    minutes: 4,
    steps: [
      { text: 'Pedir algo o decir que no, sin atacar y sin ceder en todo, es una habilidad que se entrena.', mood: 'piensa' },
      { text: 'Describe la situación con hechos: «Esta semana tengo tres pruebas».', mood: 'piensa' },
      { text: 'Expresa lo que sientes o piensas: «Me preocupa no llegar a estudiar».', mood: 'calma' },
      { text: 'Pide o di que no con claridad: «Hoy no puedo salir. ¿Podemos el sábado?».', mood: 'valiente' },
      {
        text: 'Mantente firme sin agredir. Puedes repetir tu respuesta con calma.',
        mood: 'valiente',
        choice: {
          question: 'Te insisten para que pruebes algo que no quieres. ¿Qué respuesta te cuida más?',
          options: [
            { label: '«No, gracias. No quiero»', reply: 'Clara y breve. No necesitas dar explicaciones largas para decir que no.' },
            { label: '«Bueno, un poquito»', reply: 'Ceder por presión es muy común, pero tu decisión vale. Puedes practicar decir que no.' },
            { label: 'Insultar y irme', reply: 'Te protege, pero puede traer otros problemas. Un «no» firme suele alcanzar.' },
          ],
        },
      },
      { text: 'Tu necesidad importa, y la relación también. Esta habilidad cuida las dos cosas.', mood: 'orgullo' },
    ],
    forAdult: 'Practiquen con situaciones de casa, como negociar un horario. Si usa la habilidad contigo, valora la forma aunque no le des lo que pide.',
    evidence: 'Es una versión simplificada de DEAR MAN, la habilidad de efectividad interpersonal de la DBT.',
  },
  {
    id: 'redes-y-yo',
    kind: 'pasos',
    title: 'Las redes y yo',
    tagline: '¿Cómo me siento después de scrollear?',
    skill: 'atencion',
    bands: ['13-17'],
    minutes: 3,
    steps: [
      { text: 'Las redes pueden conectar y divertir. También pueden hacerte sentir que todos están mejor que tú.', mood: 'piensa' },
      { text: 'La próxima vez que dejes el teléfono, frena un segundo y nota: ¿cómo me siento ahora?', mood: 'calma', seconds: 15 },
      {
        text: 'Nota también qué cuentas te hacen sentir peor y cuáles te suman.',
        mood: 'piensa',
        choice: {
          question: 'Si una cuenta siempre te hace sentir mal con tu cuerpo, ¿qué podrías hacer?',
          options: [
            { label: 'Silenciarla o dejar de seguirla', reply: 'Buena idea. Tú decides qué entra en tu día.' },
            { label: 'Mirarla más para motivarme', reply: 'La comparación suele bajar el ánimo más que motivar. Prueba sin ella unos días.' },
            { label: 'No hacer nada', reply: 'Es una opción, pero notar el efecto ya te da poder para elegir.' },
          ],
        },
      },
      { text: 'Prueba un pequeño cambio esta semana, como dejar el teléfono fuera del cuarto a la noche.', mood: 'orgullo' },
    ],
    forAdult: 'Las prohibiciones totales suelen funcionar mal en la adolescencia. Conversen sobre cómo les hacen sentir las redes y acuerden reglas juntos, como no usar pantallas a la noche.',
    evidence: 'El uso problemático de redes, sobre todo de noche y con comparación social, se asocia con peor ánimo y peor sueño en adolescentes.',
  },
  {
    id: 'dormir-mejor',
    kind: 'pasos',
    title: 'Dormir mejor',
    tagline: 'El sueño cambia cómo te sientes.',
    skill: 'cuerpo',
    bands: ['13-17'],
    minutes: 3,
    steps: [
      { text: 'En la adolescencia el reloj del cuerpo se atrasa: da sueño más tarde. No es vagancia, es biología.', mood: 'piensa' },
      { text: 'Aun así, necesitas entre 8 y 10 horas. Dormir poco hace que todo se sienta más intenso.', mood: 'piensa' },
      { text: 'Intenta levantarte a una hora parecida todos los días, también el fin de semana.', mood: 'calma' },
      { text: 'Deja las pantallas una hora antes de dormir. Si no puedes, baja el brillo y silencia las notificaciones.', mood: 'calma' },
      { text: 'Si la cabeza no para, anota lo que te preocupa en un papel para retomarlo mañana.', mood: 'orgullo' },
    ],
    forAdult: 'Si duerme muy poco, ronca fuerte o tiene mucho sueño de día durante semanas, consulten con su pediatra.',
    evidence: 'La falta de sueño en la adolescencia se asocia con peor ánimo, más irritabilidad y peor rendimiento escolar.',
  },
  {
    id: 'antes-de-una-prueba',
    kind: 'pasos',
    title: 'Antes de una prueba',
    tagline: 'Para cuando los nervios no te dejan pensar.',
    skill: 'valentia',
    bands: ['13-17'],
    minutes: 3,
    steps: [
      { text: 'Un poco de nervios ayuda a concentrarte. Demasiados bloquean. La idea es bajarlos un poco, no eliminarlos.', mood: 'piensa' },
      { text: 'Respira lento: inhala contando 4 y exhala contando 6, cinco veces.', mood: 'calma', seconds: 50 },
      { text: 'Nota el pensamiento catastrófico, como «Me va a ir horrible». Cámbialo por uno más justo: «Estudié, voy a hacer lo que pueda».', mood: 'piensa' },
      { text: 'En la prueba, empieza por lo que sabes. Si te trabas, sigue con otra pregunta y vuelve después.', mood: 'valiente' },
      { text: 'Pase lo que pase, una prueba no define quién eres.', mood: 'orgullo' },
    ],
    forAdult: 'Pregunta por cómo se preparó y cómo se siente, más que por la nota. Si la ansiedad por las pruebas es muy fuerte o le hace faltar a la escuela, consulten.',
    evidence: 'La respiración lenta y la reestructuración de pensamientos catastróficos son componentes de la TCC para la ansiedad, que tiene buena evidencia en adolescentes (James y colaboradores, 2015).',
  },
  {
    id: 'mi-brujula',
    kind: 'pasos',
    title: 'Mi brújula de valores',
    tagline: 'Lo que te importa, para decidir mejor.',
    skill: 'gratitud',
    bands: ['13-17'],
    minutes: 4,
    steps: [
      { text: 'Los valores son como una brújula: no son metas que se cumplen, sino direcciones que eliges.', mood: 'piensa' },
      {
        text: 'Piensa en lo que más te importa en tu vida ahora.',
        mood: 'piensa',
        choice: {
          question: '¿Cuál de estas direcciones te representa más?',
          options: [
            { label: 'Ser buena amiga o buen amigo', reply: 'La amistad es un valor fuerte. ¿Qué pequeña acción lo mostraría hoy?' },
            { label: 'Aprender y crecer', reply: 'Aprender es una dirección para toda la vida. ¿Qué te gustaría aprender este mes?' },
            { label: 'Crear o expresarme', reply: 'Expresarte es muy valioso. ¿Cuándo podrías dedicarle un rato esta semana?' },
          ],
        },
      },
      { text: 'Elige una acción chiquita, para esta semana, que vaya en esa dirección.', mood: 'valiente' },
      { text: 'Cuando tengas que decidir algo difícil, pregúntate: ¿qué opción va hacia lo que me importa?', mood: 'orgullo' },
    ],
    forAdult: 'Interésate por sus valores aunque no coincidan con los tuyos. Que se sienta escuchado en esto fortalece mucho el vínculo.',
    evidence: 'Trabajar con valores es central en la terapia de aceptación y compromiso (ACT), que se usa también con adolescentes.',
  },
];

export const KID_ACTIVITY_BY_ID = Object.fromEntries(KID_ACTIVITIES.map((a) => [a.id, a])) as Record<string, KidActivity>;

/** Actividades de la franja, sin los borradores clínicos (salvo en modo demo). */
export const activitiesFor = (band: AgeBand) => KID_ACTIVITIES.filter((a) => a.bands.includes(band) && isPublished('infantil', a.id));

/** Qué proponer después de marcar una emoción (siempre actividades de la franja). */
const SUGGESTIONS: Record<KidFeelingId, string[]> = {
  alegria: ['superpoder-amable', 'frasco-de-gratitud', 'detective-de-sentidos', 'mi-brujula'],
  calma: ['escucha-la-campana', 'detective-de-sentidos', 'frasco-de-gratitud'],
  tristeza: ['mano-en-el-corazon', 'voz-amable', 'globo-magico', 'ola-del-mar', 'accion-opuesta'],
  enojo: ['tortuga', 'volcan', 'huele-la-flor', 'respiracion-estrella', 'stop', 'respiracion-cuadrado', 'tipp-rapido'],
  miedo: ['globo-magico', 'huele-la-flor', 'ola-del-mar', 'pasito-valiente', 'detective-de-sentidos', 'chequear-los-hechos'],
  preocupacion: ['cajita-preocupaciones', 'pensamientos-nube', 'detective-de-pensamientos', 'detective-de-sentidos', 'huele-la-flor', 'chequear-los-hechos', 'antes-de-una-prueba'],
  sorpresa: ['globo-magico', 'respiracion-estrella', 'escucha-la-campana', 'stop'],
  cansancio: ['espagueti', 'robot-y-muneco', 'ola-del-mar', 'rayos-x', 'dormir-mejor'],
};

export function suggestionsFor(feeling: KidFeelingId, band: AgeBand, max = 3): KidActivity[] {
  return SUGGESTIONS[feeling]
    .map((id) => KID_ACTIVITY_BY_ID[id])
    .filter((a) => a && a.bands.includes(band) && isPublished('infantil', a.id))
    .slice(0, max);
}

// ---------------------------------------------------------------- gratitud

export const GRATITUDE_THINGS: { id: string; label: string }[] = [
  { id: 'familia', label: 'Mi familia' },
  { id: 'amigos', label: 'Mis amigos' },
  { id: 'mascota', label: 'Una mascota' },
  { id: 'jugar', label: 'Jugar' },
  { id: 'comida', label: 'Algo rico' },
  { id: 'naturaleza', label: 'La naturaleza' },
  { id: 'escuela', label: 'La escuela' },
  { id: 'yo', label: 'Algo que hice yo' },
];

// ---------------------------------------------------------------- registros

/** Lo que guarda cada actividad hecha (users/{uid}/kidActivities). */
export interface KidActivityLog {
  id: string;
  kidId: string;
  activityId: string;
  feeling: KidFeelingId | null;
  intensity: KidIntensity | null;
  /** Gratitud, misión elegida o palabra breve (máx. 140). */
  note: string | null;
  createdAt: Date;
  tz?: string;
}

export interface KidProfile {
  id: string;
  name: string;
  band: AgeBand;
  avatar: KidAvatar;
  createdAt: Date;
}

export const KID_NAME_MAX = 24;
export const KID_NOTE_MAX = 140;
export const MAX_KIDS = 6;

// ---------------------------------------------------------------- jardín y stickers

/** Un sticker por actividad hecha al menos una vez; el jardín crece con cada actividad. */
export function stickersOf(logs: KidActivityLog[]): Set<string> {
  return new Set(logs.map((l) => l.activityId).filter((id) => KID_ACTIVITY_BY_ID[id]));
}

/** Etapas del jardín infantil: semilla → brote → planta → flor → árbol con frutos. */
export const GARDEN_STAGES = [
  { min: 0, label: 'Una semilla' },
  { min: 1, label: 'Un brote' },
  { min: 5, label: 'Una plantita' },
  { min: 12, label: 'Una planta con flores' },
  { min: 25, label: 'Un árbol' },
  { min: 45, label: 'Un árbol con frutos' },
];

export function gardenStage(count: number) {
  let idx = 0;
  GARDEN_STAGES.forEach((s, i) => {
    if (count >= s.min) idx = i;
  });
  return { index: idx, ...GARDEN_STAGES[idx], next: GARDEN_STAGES[idx + 1] ?? null };
}

// ---------------------------------------------------------------- avisos para el adulto

const dayKey = (d: Date) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;

/**
 * Aviso al adulto: una emoción difícil marcada como «muchísimo» en 3 días distintos de
 * la última semana. No es un diagnóstico: invita a conversar y, si sigue, a consultar.
 */
export function kidAlert(logs: KidActivityLog[], now = new Date()): { feeling: KidFeeling; days: number } | null {
  const since = now.getTime() - 7 * 86_400_000;
  const byFeeling = new Map<KidFeelingId, Set<string>>();
  for (const l of logs) {
    if (!l.feeling || l.intensity !== 3 || l.createdAt.getTime() < since || !FEELING_BY_ID[l.feeling]?.hard) continue;
    const set = byFeeling.get(l.feeling) ?? new Set<string>();
    set.add(dayKey(l.createdAt));
    byFeeling.set(l.feeling, set);
  }
  let best: { feeling: KidFeeling; days: number } | null = null;
  for (const [id, days] of byFeeling) if (days.size >= 3 && (!best || days.size > best.days)) best = { feeling: FEELING_BY_ID[id], days: days.size };
  return best;
}

/** Resumen semanal para el panel del adulto. */
export function weeklySummary(logs: KidActivityLog[], now = new Date()) {
  const since = now.getTime() - 7 * 86_400_000;
  const week = logs.filter((l) => l.createdAt.getTime() >= since);
  const feelings = new Map<KidFeelingId, number>();
  for (const l of week) if (l.feeling) feelings.set(l.feeling, (feelings.get(l.feeling) ?? 0) + 1);
  const skills = new Map<KidSkill, number>();
  for (const l of week) {
    const a = KID_ACTIVITY_BY_ID[l.activityId];
    if (a) skills.set(a.skill, (skills.get(a.skill) ?? 0) + 1);
  }
  return {
    activities: week.length,
    days: new Set(week.map((l) => dayKey(l.createdAt))).size,
    feelings: [...feelings.entries()].sort((a, b) => b[1] - a[1]).map(([id, n]) => ({ feeling: FEELING_BY_ID[id], n })),
    skills: [...skills.entries()].sort((a, b) => b[1] - a[1]).map(([id, n]) => ({ skill: KID_SKILLS.find((s) => s.id === id)!, n })),
    gratitude: week.filter((l) => l.activityId === 'frasco-de-gratitud' && l.note).map((l) => l.note as string),
  };
}
