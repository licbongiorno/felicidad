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
/** Los cinco niveles del termómetro se registran como las tres intensidades del check-in. */
export const levelIntensity = (level: number): KidIntensity => (level <= 2 ? 1 : level === 3 ? 2 : 3);
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

export type BreathPhase = 'in' | 'hold' | 'out' | 'rest';

/**
 * Regla común a todos los dibujos de respiración, para que el movimiento diga lo mismo que
 * la consigna: crece al tomar aire, queda quieto al guardarlo, baja despacio al soltarlo y
 * descansa quieto.
 */
export const breathFull = (phase: BreathPhase) => phase === 'in' || phase === 'hold';
/** Sólo se mueve al tomar y al soltar el aire; en las pausas el dibujo queda fijo. */
export const breathMoves = (phase: BreathPhase) => phase === 'in' || phase === 'out';

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
    /** Dibujar con el dedo: ideas para empezar y una pregunta para conversar al final. */
    | { kind: 'dibujar'; intro: string; prompts: string[]; question: string }
    /** 0 a 3 años: pasos para el adulto, que se muestran en Familia (sin modo chico). */
    | { kind: 'juntos'; steps: KidStep[] }
    /** Termómetro: cinco niveles de una emoción, del más suave al más fuerte, con qué hacer en cada uno. */
    | { kind: 'termometro'; intro: string; feeling: KidFeelingId; levels: { label: string; tip: string }[] }
    /** Escalera de valentía: escalones del más fácil al más difícil hasta la meta; el chico elige el próximo. */
    | { kind: 'escalera'; intro: string; goal: string; rungs: string[] }
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
      { text: 'Adentro del caparazón, respira tres veces despacio.', mood: 'calma', seconds: 24 },
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
      { text: 'Respira hondo tres veces, soltando el aire como vapor que sale del volcán.', mood: 'calma', seconds: 24 },
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

  // ------------------------------------------------------------ más actividades para hacer juntos (0 a 3)
  {
    id: 'masaje-suave',
    kind: 'juntos',
    title: 'Masaje suave',
    tagline: 'Contacto tranquilo después del baño.',
    skill: 'calma',
    bands: ['0-3'],
    minutes: 5,
    steps: [
      { text: 'Elijan un momento tranquilo, como después del baño, en un lugar cálido.' },
      { text: 'Con las manos tibias, acaricia despacio sus piernas, brazos y panza, siempre en la misma dirección.' },
      { text: 'Mírale y háblale bajito o cántale mientras tanto.' },
      { text: 'Si llora, se pone tenso o mira para otro lado, para: es su forma de decir «basta por ahora».' },
    ],
    forAdult: 'No hace falta ninguna técnica especial. Lo que importa es el contacto calmado y estar atento a sus señales.',
    evidence: 'El contacto físico suave y predecible ayuda a regular la activación del bebé y fortalece el vínculo.',
  },
  {
    id: 'musica-y-movimiento',
    kind: 'juntos',
    title: 'Música y movimiento',
    tagline: 'Bailar juntos, rápido y lento.',
    skill: 'cuerpo',
    bands: ['0-3'],
    minutes: 5,
    steps: [
      { text: 'Pongan una canción que les guste a los dos.' },
      { text: 'Con los más chicos, bailen a upa, meciéndose al ritmo. Con los más grandes, bailen de la mano.' },
      { text: 'Alternen canciones rápidas y lentas. Terminen siempre con una lenta, para bajar.' },
    ],
    forAdult: 'Cambiar de rápido a lento le ayuda a su cuerpo a aprender a activarse y a calmarse. Es una base temprana de la regulación.',
    evidence: 'El movimiento rítmico compartido favorece la sincronía entre adulto y niño y la regulación de la activación.',
  },
  {
    id: 'partes-del-cuerpo',
    kind: 'juntos',
    title: '¿Dónde está la nariz?',
    tagline: 'Nombrar las partes del cuerpo jugando.',
    skill: 'atencion',
    bands: ['0-3'],
    minutes: 3,
    steps: [
      { text: 'Toca suavemente una parte de su cuerpo y nómbrala: «¡Acá está tu nariz!».' },
      { text: 'Haz lo mismo con la tuya: «Y acá está la nariz de mamá» o «de papá».' },
      { text: 'Cuando sea más grande, pregúntale: «¿Dónde está tu panza?» y deja que te muestre.' },
    ],
    forAdult: 'Conocer el propio cuerpo es la base para, más adelante, notar dónde se sienten las emociones.',
    evidence: 'Los juegos de nombrar el cuerpo favorecen el lenguaje y la conciencia corporal en los primeros años.',
  },
  {
    id: 'imitar-animales',
    kind: 'juntos',
    title: 'Imitar animales',
    tagline: 'Hacer como el perro, el gato y la vaca.',
    skill: 'emociones',
    bands: ['0-3'],
    minutes: 3,
    steps: [
      { text: 'Hagan juntos el sonido de un animal: «¡Guau, guau!».' },
      { text: 'Muévanse como ese animal: el perro en cuatro patas, el pájaro con las alas.' },
      { text: 'Prueben animales tranquilos y animales con mucha energía: la tortuga lenta y el conejo que salta.' },
    ],
    forAdult: 'Imitar es una de las primeras formas de aprender. Jugar con animales tranquilos y movidos también enseña a cambiar de ritmo.',
    evidence: 'El juego de imitación es central en el desarrollo social y del lenguaje en los primeros años.',
  },
  {
    id: 'paseo-de-sentidos',
    kind: 'juntos',
    title: 'Paseo de los sentidos',
    tagline: 'Descubrir texturas, sonidos y olores.',
    skill: 'atencion',
    bands: ['0-3'],
    minutes: 10,
    steps: [
      { text: 'Salgan a dar una vuelta, aunque sea por el patio o la vereda.' },
      { text: 'Frenen para tocar cosas distintas: una hoja, el pasto, una piedra lisa.' },
      { text: 'Escuchen juntos: «¿Oíste el pájaro? ¿Y el auto?».' },
      { text: 'Nombra lo que descubre y su reacción: «¡Te sorprendió lo frío del agua!».' },
    ],
    forAdult: 'Explorar con los sentidos, acompañado, es la forma de aprender de los más chicos. Y es una pausa de atención plena para ti.',
    evidence: 'El juego al aire libre y la exploración sensorial acompañada favorecen el desarrollo motor, del lenguaje y emocional.',
  },
  {
    id: 'esperar-un-poquito',
    kind: 'juntos',
    title: 'Esperar un poquito',
    tagline: 'Practicar la espera de a poco (2 a 3 años).',
    skill: 'valentia',
    bands: ['0-3'],
    minutes: 3,
    steps: [
      { text: 'Cuando pida algo que no puede tener ya, como la comida, nómbralo: «Tienes hambre y quieres comer ya».' },
      { text: 'Dale una espera muy corta y concreta: «Termino de servir y te doy. Contemos hasta cinco».' },
      { text: 'Ofrécele algo para la espera: cantar, contar o mirar algo juntos.' },
      { text: 'Cumple lo que dijiste y celebra: «¡Esperaste! Acá está».' },
    ],
    forAdult: 'Tolerar la espera se aprende de a poco, con esperas cortas y predecibles. Antes de los 2 años, casi no pueden esperar: es normal.',
    evidence: 'La capacidad de demorar la gratificación empieza a desarrollarse entre los 2 y los 3 años y se apoya en un adulto que anticipa y cumple.',
  },
  {
    id: 'elegir-entre-dos',
    kind: 'juntos',
    title: 'Elegir entre dos',
    tagline: 'Pequeñas decisiones que dan seguridad.',
    skill: 'amabilidad',
    bands: ['0-3'],
    minutes: 2,
    steps: [
      { text: 'Ofrécele dos opciones que estén bien para ti: «¿Remera roja o azul?».' },
      { text: 'Muéstrale las dos y espera a que elija, señalando o diciendo.' },
      { text: 'Respeta su elección y nómbrala: «Elegiste la roja».' },
    ],
    forAdult: 'Elegir entre dos opciones le da sensación de control y suele reducir los berrinches en las rutinas, como vestirse o bañarse.',
    evidence: 'Ofrecer elecciones limitadas favorece la autonomía en la primera infancia sin perder los límites.',
  },
  {
    id: 'gracias-del-dia',
    kind: 'juntos',
    title: 'Las gracias del día',
    tagline: 'Un ritual de agradecimiento a la noche.',
    skill: 'gratitud',
    bands: ['0-3'],
    minutes: 2,
    steps: [
      { text: 'Al acostarle, cuéntale algo lindo del día: «Hoy fuimos a la plaza y te reíste con el perro».' },
      { text: 'Agradece en voz alta: «Gracias por el día lindo».' },
      { text: 'Cuando ya hable, pregúntale: «¿Qué te gustó hoy?».' },
    ],
    forAdult: 'Aunque al principio no entienda las palabras, el ritual calma y, con el tiempo, se convierte en un hábito de mirar lo bueno.',
    evidence: 'Los rituales de cierre del día dan previsibilidad y son un primer modelo de gratitud dentro de la familia.',
  },
  {
    id: 'burbujas-juntos',
    kind: 'juntos',
    title: 'Burbujas para mirar',
    tagline: 'Seguir las burbujas con la mirada.',
    skill: 'calma',
    bands: ['0-3'],
    minutes: 3,
    steps: [
      { text: 'Haz burbujas despacio, cerca pero no sobre su cara.' },
      { text: 'Deja que las siga con la mirada o intente tocarlas.' },
      { text: 'Cuando sea más grande, muéstrale cómo soplar despacito para que salgan.' },
    ],
    forAdult: 'Mirar burbujas calma y entrena la atención. Más adelante, soplarlas es una forma divertida de practicar la respiración lenta.',
    evidence: 'Seguir objetos con la mirada favorece la atención visual, y el soplido lento es un juego temprano de respiración.',
  },

  // ------------------------------------------------------------ más actividades para 4 a 9 años
  {
    id: 'soplar-burbujas',
    kind: 'respirar',
    title: 'Burbujas gigantes',
    tagline: 'Sopla despacito para hacer la burbuja más grande.',
    skill: 'calma',
    bands: ['4-6', '7-9'],
    minutes: 2,
    shape: 'globo',
    intro: 'Imagina que tienes un aro de burbujas. Si soplas fuerte, se rompe. Si soplas despacito, sale una burbuja gigante.',
    inhale: 3,
    hold: 0,
    exhale: 5,
    rest: 1,
    cycles: 5,
    cueIn: 'Toma aire por la nariz',
    cueOut: 'Sopla despacito la burbuja',
    forAdult: 'Si tienen un frasco de burbujas de verdad, mejor todavía: el soplido lento sale solo para que la burbuja no se rompa.',
    evidence: 'Soplar lento alarga la exhalación, y eso ayuda a que el cuerpo se calme. Es una forma de juego de la respiración diafragmática.',
  },
  {
    id: 'respiracion-del-oso',
    kind: 'respirar',
    title: 'El oso que hiberna',
    tagline: 'Respira lento como un oso dormido.',
    skill: 'calma',
    bands: ['4-6', '7-9'],
    minutes: 3,
    shape: 'ola',
    intro: 'En invierno, los osos duermen en su cueva y respiran muy lento. Vamos a respirar como un oso.',
    inhale: 4,
    hold: 1,
    exhale: 5,
    rest: 1,
    cycles: 5,
    cueIn: 'El oso toma aire',
    cueHold: 'Lo guarda un poquito',
    cueOut: 'Lo suelta despacio',
    forAdult: 'Es ideal para la hora de dormir. Pueden hacerlo acostados, con un peluche sobre la panza que sube y baja.',
    evidence: 'La respiración lenta con la panza, con una imagen tranquila, ayuda a pasar de la activación al descanso.',
  },
  {
    id: 'congelados',
    kind: 'pasos',
    title: '¡Congelados!',
    tagline: 'Muévete y frena cuando lo digo.',
    skill: 'cuerpo',
    bands: ['4-6', '7-9'],
    minutes: 3,
    steps: [
      { text: 'Vamos a jugar a los congelados. Cuando digo «¡a moverse!», bailas como quieras.', mood: 'feliz' },
      { text: '¡A moverse! Salta, baila, mueve los brazos.', mood: 'feliz', seconds: 15 },
      { text: '¡Congelados! Quédate quieto como una estatua de hielo.', mood: 'sorpresa', seconds: 8 },
      { text: '¡A moverse otra vez! Ahora muy despacito, como en cámara lenta.', mood: 'calma', seconds: 15 },
      { text: '¡Congelados! Respira tranquilo mientras estás quieto.', mood: 'calma', seconds: 8 },
      { text: 'Frenar el cuerpo cuando quieres es un superpoder. ¡Lo hiciste muy bien!', mood: 'orgullo' },
    ],
    forAdult: 'Pongan música y paren cuando la pausan. Frenar a pedido entrena el autocontrol de forma divertida.',
    evidence: 'Los juegos de frenar y arrancar entrenan las funciones ejecutivas, como el control de impulsos, en la primera infancia.',
  },
  {
    id: 'animales-que-se-estiran',
    kind: 'pasos',
    title: 'Animales que se estiran',
    tagline: 'Yoga con el gato, el perro y la mariposa.',
    skill: 'cuerpo',
    bands: ['4-6', '7-9'],
    minutes: 4,
    steps: [
      { text: 'Vamos a estirarnos como distintos animales.', mood: 'feliz' },
      { text: 'El gato: en cuatro patas, arquea la espalda hacia arriba como un gato enojado. Después bájala.', mood: 'calma', seconds: 15 },
      { text: 'El perro: apoya manos y pies en el piso y levanta la cola bien alto.', mood: 'calma', seconds: 15 },
      { text: 'La mariposa: siéntate, junta las plantas de los pies y mueve las rodillas como alas.', mood: 'feliz', seconds: 15 },
      { text: 'La tortuga dormida: acuéstate boca arriba y quédate quieto, respirando.', mood: 'calma', seconds: 20 },
      { text: 'Tu cuerpo está más suave y tranquilo. ¡Qué buen zoológico!', mood: 'orgullo' },
    ],
    forAdult: 'Háganlo sin buscar la postura perfecta: lo importante es moverse y respirar. Si algo le duele, que no lo haga.',
    evidence: 'El yoga adaptado a la infancia combina movimiento, respiración y atención, y se usa en programas escolares de bienestar.',
  },
  {
    id: 'colores-de-mis-emociones',
    kind: 'pasos',
    title: 'Los colores de mis emociones',
    tagline: '¿De qué color es lo que sientes?',
    skill: 'emociones',
    bands: ['4-6', '7-9'],
    minutes: 3,
    steps: [
      { text: 'Si las emociones tuvieran colores, ¿de qué color serían?', mood: 'piensa' },
      {
        text: 'Piensa en el enojo.',
        mood: 'sorpresa',
        choice: {
          question: '¿De qué color es tu enojo?',
          options: [
            { label: 'Rojo como el fuego', reply: 'Mucha gente siente el enojo caliente, como fuego. ¡Buena elección!' },
            { label: 'Negro como una tormenta', reply: 'Una tormenta oscura. Las tormentas también pasan.' },
            { label: 'Otro color', reply: 'Cada uno siente distinto. Tu color está bien.' },
          ],
        },
      },
      {
        text: 'Ahora piensa en la alegría.',
        mood: 'feliz',
        choice: {
          question: '¿De qué color es tu alegría?',
          options: [
            { label: 'Amarillo como el sol', reply: '¡Qué brillante! La alegría da calorcito.' },
            { label: 'Rosa como un caramelo', reply: '¡Qué dulce! Una alegría rosa.' },
            { label: 'De todos los colores', reply: '¡Un arcoíris! A veces la alegría es así.' },
          ],
        },
      },
      { text: 'Puedes dibujar tus emociones con sus colores. Así es más fácil contar cómo te sientes.', mood: 'orgullo' },
    ],
    forAdult: 'Después, dibujen juntos. Pregúntale qué color tiene hoy, en vez de «¿cómo estás?»: suele ser más fácil de responder.',
    evidence: 'Asociar emociones con colores y dibujos ayuda a los más chicos a reconocerlas y a hablar de ellas.',
  },
  {
    id: 'espejo-de-caras',
    kind: 'pasos',
    title: 'El espejo de las caras',
    tagline: 'Pon cara de cada emoción.',
    skill: 'emociones',
    bands: ['4-6'],
    minutes: 2,
    steps: [
      { text: 'Busca un espejo o mira a tu adulto. Vamos a hacer caras.', mood: 'feliz' },
      { text: 'Pon cara de alegría. ¿Qué hacen tu boca y tus ojos?', mood: 'feliz', seconds: 8 },
      { text: 'Ahora cara de sorpresa. ¡Bien grandes los ojos!', mood: 'sorpresa', seconds: 8 },
      { text: 'Ahora cara de enojo. ¿Qué pasa con tus cejas?', mood: 'valiente', seconds: 8 },
      { text: 'Y ahora cara de calma. Suelta todo.', mood: 'calma', seconds: 8 },
      { text: 'Las caras nos ayudan a saber cómo se sienten los demás. ¡Eres un experto en caras!', mood: 'orgullo' },
    ],
    forAdult: 'Hagan las caras juntos y adivinen la emoción del otro. Es un juego muy útil para que aprenda a leer las emociones ajenas.',
    evidence: 'Reconocer las expresiones de la cara es una de las primeras competencias emocionales y se entrena jugando.',
  },
  {
    id: 'caminata-de-colores',
    kind: 'pasos',
    title: 'La caminata de los colores',
    tagline: 'Encuentra colores a tu alrededor.',
    skill: 'atencion',
    bands: ['4-6', '7-9'],
    minutes: 3,
    steps: [
      { text: 'Vamos a buscar colores con ojos de explorador.', mood: 'feliz' },
      { text: 'Busca algo rojo. ¡Señálalo!', mood: 'piensa', seconds: 10 },
      { text: 'Ahora algo azul.', mood: 'piensa', seconds: 10 },
      { text: 'Ahora algo verde.', mood: 'piensa', seconds: 10 },
      { text: 'Y algo de tu color favorito.', mood: 'feliz', seconds: 10 },
      { text: 'Cuando miras con atención, descubres cosas que antes no veías.', mood: 'orgullo' },
    ],
    forAdult: 'Sirve en la calle, en la sala de espera o en el auto. Es una forma simple de llevar la atención al presente.',
    evidence: 'Los juegos de atención a los sentidos son una forma de atención plena adaptada a la primera infancia.',
  },
  {
    id: 'globo-de-preocupaciones',
    kind: 'pasos',
    title: 'El globo de las preocupaciones',
    tagline: 'Deja volar lo que te preocupa.',
    skill: 'pensar',
    bands: ['4-6', '7-9'],
    minutes: 3,
    steps: [
      { text: 'A veces tenemos una preocupación que no se va de la cabeza.', mood: 'piensa' },
      { text: 'Imagina que la pones dentro de un globo. ¿De qué color es tu globo?', mood: 'piensa', seconds: 10 },
      { text: 'Toma aire y sopla para inflar el globo con la preocupación adentro.', mood: 'calma', seconds: 8 },
      { text: 'Ahora suelta el hilo y mira cómo sube, sube, sube…', mood: 'calma', seconds: 10 },
      { text: 'La preocupación puede volver. Si vuelve, cuéntasela a tu adulto. Juntos es más fácil.', mood: 'orgullo' },
    ],
    forAdult: 'El globo ayuda a soltar por un rato, pero no reemplaza escuchar. Pregúntale después qué preocupación puso en el globo.',
    evidence: 'Las imágenes guiadas ayudan a tomar distancia de los pensamientos que preocupan. Es una adaptación infantil de la defusión.',
  },
  {
    id: 'escudo-valiente',
    kind: 'pasos',
    title: 'Mi escudo valiente',
    tagline: 'Una pose y una frase para cuando hay miedo.',
    skill: 'valentia',
    bands: ['4-6', '7-9'],
    minutes: 2,
    steps: [
      { text: 'Los superhéroes también tienen miedo. Pero tienen un escudo valiente.', mood: 'valiente' },
      { text: 'Párate firme, con los pies separados y las manos en la cintura.', mood: 'valiente', seconds: 8 },
      { text: 'Respira hondo y llena tu pecho de aire valiente.', mood: 'calma', seconds: 8 },
      {
        text: 'Ahora elige tu frase valiente.',
        mood: 'valiente',
        choice: {
          question: '¿Cuál es tu frase valiente?',
          options: [
            { label: '«Puedo hacerlo, aunque dé miedo»', reply: '¡Qué frase poderosa!' },
            { label: '«Paso a paso, yo puedo»', reply: '¡Muy bien! Los pasitos chiquitos también cuentan.' },
            { label: '«Mi adulto me ayuda»', reply: '¡Claro! Pedir ayuda también es valiente.' },
          ],
        },
      },
      { text: 'Cuando tengas miedo, usa tu escudo: pose, aire y frase valiente.', mood: 'orgullo' },
    ],
    forAdult: 'Recuérdale su escudo antes de algo que le cuesta, como entrar a un cumpleaños. Celebra que lo use, salga como salga.',
    evidence: 'Las autoinstrucciones de afrontamiento («puedo hacerlo») son parte de la TCC para la ansiedad infantil (Kendall, 1994).',
  },
  {
    id: 'miedo-a-la-noche',
    kind: 'pasos',
    title: 'Cuando tengo miedo a la noche',
    tagline: 'Para dormir más tranquilo.',
    skill: 'valentia',
    bands: ['4-6', '7-9'],
    minutes: 3,
    steps: [
      { text: 'Muchos chicos tienen miedo a la noche. Es muy común, y se puede hacer más chiquito.', mood: 'calma' },
      { text: 'Primero, respira como el oso: lento y por la panza, tres veces.', mood: 'calma', seconds: 24 },
      { text: 'Abraza tu peluche o tu almohada y siente que está suave y calentito.', mood: 'calma', seconds: 10 },
      { text: 'Piensa en un lugar lindo donde te gusta estar: la plaza, la playa o la casa de tus abuelos.', mood: 'feliz', seconds: 20 },
      { text: 'Dite: «Estoy seguro en mi cama. Mi familia está cerca».', mood: 'orgullo' },
    ],
    forAdult: 'Valida el miedo sin reforzarlo: «Entiendo que da miedo, y estás seguro». Una luz tenue está bien. Si el miedo es muy intenso o dura meses, consulten.',
    evidence: 'La respiración, el objeto de apego y la imaginación de un lugar seguro son estrategias habituales para los miedos nocturnos en la infancia.',
  },
  {
    id: 'esperar-mi-turno',
    kind: 'pasos',
    title: 'Esperar mi turno',
    tagline: 'Jugar por turnos sin enojarse.',
    skill: 'amabilidad',
    bands: ['4-6'],
    minutes: 2,
    steps: [
      { text: 'Cuando jugamos con otros, a veces hay que esperar el turno. ¡Y cuesta!', mood: 'piensa' },
      { text: 'Mientras esperas, puedes mirar cómo juega el otro.', mood: 'piensa' },
      { text: 'O puedes contar despacito hasta diez.', mood: 'calma', seconds: 10 },
      { text: 'Cuando llega tu turno, ¡a jugar! Y después le toca al otro.', mood: 'feliz' },
      { text: 'Esperar el turno hace que todos puedan jugar. ¡Eres un gran compañero de juego!', mood: 'orgullo' },
    ],
    forAdult: 'Practiquen con juegos de mesa simples o pasándose una pelota. Al principio, que las esperas sean cortas.',
    evidence: 'Esperar y tomar turnos son habilidades sociales básicas que trabajan los programas socioemocionales del nivel inicial.',
  },
  {
    id: 'pedir-perdon-y-reparar',
    kind: 'pasos',
    title: 'Pedir perdón y reparar',
    tagline: 'Cuando lastimé a alguien sin querer, o queriendo.',
    skill: 'amabilidad',
    bands: ['4-6', '7-9', '10-12', '13-17'],
    minutes: 3,
    steps: [
      { text: 'Todos nos equivocamos y a veces lastimamos a alguien. Lo importante es lo que hacemos después.', mood: 'piensa' },
      { text: 'Primero, para y mira cómo está la otra persona.', mood: 'piensa' },
      { text: 'Di lo que pasó, sin excusas: «Te empujé y te dolió».', mood: 'calma' },
      { text: 'Pide perdón de verdad: «Perdón, no estuvo bien».', mood: 'calma' },
      {
        text: 'Repara: haz algo para que se sienta mejor.',
        mood: 'piensa',
        choice: {
          question: 'Si rompiste el dibujo de alguien, ¿cómo podrías reparar?',
          options: [
            { label: 'Ayudarle a hacer otro', reply: '¡Excelente! Reparar es hacer algo para arreglarlo.' },
            { label: 'Decirle que igual era feo', reply: 'Eso puede doler más. ¿Qué podrías hacer para ayudar?' },
            { label: 'Prestarle mis lápices', reply: '¡Qué buena idea! Así puede hacer uno nuevo.' },
          ],
        },
      },
      { text: 'Equivocarse no te hace malo. Reparar te hace valiente y buen amigo.', mood: 'orgullo' },
    ],
    forAdult: 'No le obligues a decir «perdón» en caliente: espera a que se calme. Y repara tú también cuando te equivoques con él o ella: es el mejor ejemplo.',
    evidence: 'Reparar después de un conflicto es una habilidad social clave. Los programas de crianza la trabajan con el ejemplo del adulto.',
  },
  {
    id: 'lo-mejor-del-dia',
    kind: 'pasos',
    title: 'Lo mejor de mi día',
    tagline: 'Recordar algo lindo antes de dormir.',
    skill: 'gratitud',
    bands: ['4-6', '7-9'],
    minutes: 2,
    steps: [
      { text: 'Antes de dormir, vamos a buscar el mejor momento de hoy.', mood: 'feliz' },
      { text: 'Cierra los ojos y piensa: ¿qué fue lo más lindo del día?', mood: 'calma', seconds: 15 },
      { text: '¿Con quién estabas? ¿Qué hacían?', mood: 'piensa', seconds: 10 },
      { text: 'Cuéntaselo a tu adulto, y pregúntale cuál fue su mejor momento.', mood: 'feliz' },
      { text: 'Recordar lo lindo te ayuda a dormir con una sonrisa.', mood: 'orgullo' },
    ],
    forAdult: 'Hagan de esto una rutina nocturna. Si fue un mal día, también vale algo muy pequeño, como la comida rica o un abrazo.',
    evidence: 'Recordar momentos positivos al final del día se asocia con más emociones positivas y un mejor descanso.',
  },
  {
    id: 'mi-cuerpo-en-alerta',
    kind: 'pasos',
    title: 'Mi cuerpo en alerta',
    tagline: 'Las señales de que una emoción está creciendo.',
    skill: 'emociones',
    bands: ['7-9', '10-12', '13-17'],
    minutes: 3,
    steps: [
      { text: 'Antes de que una emoción explote, el cuerpo avisa. Son como las luces del tablero de un auto.', mood: 'piensa' },
      { text: 'Piensa en una vez que te enojaste o te asustaste mucho. ¿Qué pasaba en tu cuerpo?', mood: 'piensa', seconds: 15 },
      {
        text: 'Las señales más comunes son el corazón rápido, la cara caliente, los puños apretados o la panza revuelta.',
        mood: 'sorpresa',
        choice: {
          question: '¿Cuál es tu primera señal?',
          options: [
            { label: 'El corazón rápido', reply: 'Cuando lo notes, es un buen momento para respirar lento.' },
            { label: 'Calor en la cara', reply: 'Tu cara te avisa. Puedes tomar agua fresca o alejarte un momento.' },
            { label: 'Tensión en el cuerpo', reply: 'Cuando te tensas, prueba apretar y soltar los puños.' },
          ],
        },
      },
      { text: 'Cuanto antes notas la señal, más fácil es calmarte.', mood: 'orgullo' },
    ],
    forAdult: 'Pregúntale por sus señales en un momento tranquilo. Cuando las veas aparecer, nómbralas con suavidad: «Veo que estás apretando los puños».',
    evidence: 'Reconocer las señales físicas tempranas es el primer paso de los programas de TCC para el manejo de la ansiedad y el enojo (Kendall, 1994).',
  },

  // ------------------------------------------------------------ más actividades para 10 a 17 años
  {
    id: 'diario-de-logros',
    kind: 'pasos',
    title: 'Mi diario de logros',
    tagline: 'Tres cosas que hiciste bien esta semana.',
    skill: 'gratitud',
    bands: ['10-12', '13-17'],
    minutes: 3,
    steps: [
      { text: 'La cabeza recuerda más los errores que los aciertos. Vamos a equilibrar un poco.', mood: 'piensa' },
      { text: 'Piensa en algo que te salió bien esta semana, aunque sea chiquito.', mood: 'piensa', seconds: 15 },
      { text: 'Ahora piensa en algo difícil que intentaste, aunque no saliera perfecto.', mood: 'valiente', seconds: 15 },
      { text: 'Y algo amable que hiciste por otra persona.', mood: 'feliz', seconds: 15 },
      { text: 'Anótalos en un cuaderno. Cuando tengas un mal día, vuelve a leerlos.', mood: 'orgullo' },
    ],
    forAdult: 'Nombra tú también sus logros concretos, sobre todo el esfuerzo: «Vi cuánto practicaste». Evita compararlo con hermanos o compañeros.',
    evidence: 'Registrar logros y fortalezas personales es una intervención de la psicología positiva asociada con más bienestar y autoestima.',
  },
  {
    id: 'amigos-que-suman',
    kind: 'pasos',
    title: 'Amistades que suman',
    tagline: '¿Cómo me siento con mis amigos?',
    skill: 'amabilidad',
    bands: ['10-12', '13-17'],
    minutes: 3,
    steps: [
      { text: 'Las amistades son muy importantes. Algunas nos hacen sentir bien, y otras no tanto.', mood: 'piensa' },
      { text: 'Piensa en un amigo o amiga con quien te sientes bien. ¿Qué hace que te sientas así?', mood: 'feliz', seconds: 15 },
      {
        text: 'Una amistad que suma te respeta, te escucha y te deja ser como eres.',
        mood: 'piensa',
        choice: {
          question: 'Si un amigo siempre se burla de ti delante de otros, ¿qué podrías hacer?',
          options: [
            { label: 'Decirle que no me gusta', reply: 'Muy bien. Decirlo con calma es cuidarte, y le da la oportunidad de cambiar.' },
            { label: 'Aguantar para no perderlo', reply: 'Se entiende que quieras cuidar la amistad. Pero tus sentimientos también importan.' },
            { label: 'Pasar más tiempo con otros', reply: 'Es una buena opción también. Tienes derecho a elegir con quién estar.' },
          ],
        },
      },
      { text: 'Tú también puedes ser una amistad que suma: escuchando, ayudando y respetando.', mood: 'orgullo' },
    ],
    forAdult: 'Interésate por sus amistades sin juzgar. Si notas aislamiento, burlas frecuentes o acoso, hablen con la escuela.',
    evidence: 'Las relaciones con pares de buena calidad protegen el bienestar emocional en la preadolescencia y la adolescencia.',
  },
  {
    id: 'cuidarme-por-dentro',
    kind: 'pasos',
    title: 'Cuidarme por dentro',
    tagline: 'Sueño, comida, movimiento: la base de todo.',
    skill: 'cuerpo',
    bands: ['13-17'],
    minutes: 3,
    steps: [
      { text: 'Cuando el cuerpo está descuidado, las emociones se vuelven más intensas. Es como andar con la batería baja.', mood: 'piensa' },
      { text: 'Revisa tu batería: ¿dormiste bien anoche? ¿Comiste algo hoy? ¿Te moviste un poco?', mood: 'piensa', seconds: 20 },
      { text: 'Si estás enfermo o te duele algo, cuídate y pide ayuda: el malestar físico también afecta el ánimo.', mood: 'calma' },
      { text: 'Evita el alcohol y otras sustancias: en la adolescencia afectan mucho más el ánimo y el sueño.', mood: 'piensa' },
      { text: 'Elige una sola cosa para cuidar hoy: dormir un poco antes, tomar agua o caminar un rato.', mood: 'orgullo' },
    ],
    forAdult: 'Acompañen con hábitos de la casa, como horarios de comida compartidos. Si notas cambios fuertes en la alimentación o el peso, consulten con su pediatra.',
    evidence: 'Basado en las habilidades de la DBT para reducir la vulnerabilidad emocional cuidando el cuerpo (conocidas como PLEASE).',
  },
  {
    id: 'respirar-tres-minutos',
    kind: 'pasos',
    title: 'Tres minutos para mí',
    tagline: 'Una pausa de atención plena.',
    skill: 'atencion',
    bands: ['10-12', '13-17'],
    minutes: 3,
    steps: [
      { text: 'Siéntate cómodo. No hace falta cerrar los ojos si no quieres.', mood: 'calma' },
      { text: 'Primer minuto: nota cómo estás. ¿Qué piensas? ¿Qué sientes? Solo míralo, sin cambiar nada.', mood: 'calma', seconds: 60 },
      { text: 'Segundo minuto: lleva la atención a la respiración. Siente el aire que entra y sale.', mood: 'calma', seconds: 60 },
      { text: 'Tercer minuto: abre la atención a todo el cuerpo y a los sonidos de alrededor.', mood: 'calma', seconds: 60 },
      { text: 'Puedes usar esta pausa en cualquier momento del día, también en la escuela.', mood: 'orgullo' },
    ],
    forAdult: 'Si le cuesta quedarse quieto, que lo haga caminando despacio. La atención plena no es poner la mente en blanco: es notar.',
    evidence: 'Adaptado del «espacio de respiración de tres minutos» de la terapia cognitiva basada en atención plena. Los programas de atención plena para jóvenes muestran beneficios en el manejo del estrés (Zenner y colaboradores, 2014).',
  },
  {
    id: 'cuando-me-dejan-afuera',
    kind: 'pasos',
    title: 'Cuando me dejan afuera',
    tagline: 'Para los días en que duele el rechazo.',
    skill: 'emociones',
    bands: ['10-12', '13-17'],
    minutes: 4,
    steps: [
      { text: 'Que te dejen afuera de un grupo, de un plan o de una conversación duele mucho. Es una de las emociones más fuertes.', mood: 'calma' },
      { text: 'Primero, date permiso para sentirlo. No tienes que hacer como que no te importa.', mood: 'calma', seconds: 15 },
      { text: 'Chequea los hechos: ¿qué pasó exactamente? ¿Hay otras explicaciones posibles?', mood: 'piensa' },
      { text: 'Háblale con voz amable a la parte tuya que está dolida, como le hablarías a un amigo.', mood: 'calma', seconds: 15 },
      { text: 'Busca a alguien con quien te sientas bien: un amigo, un familiar o tu adulto de confianza.', mood: 'feliz' },
      { text: 'Que te dejen afuera una vez no dice cuánto vales.', mood: 'orgullo' },
    ],
    forAdult: 'Escucha antes de aconsejar y no minimices («ya vas a tener otros amigos»). Si el rechazo es repetido o hay acoso, hablen con la escuela.',
    evidence: 'Combina habilidades de la DBT (chequear los hechos, validación) con la autocompasión, útiles ante el rechazo social en la adolescencia.',
  },

  {
    id: 'pedir-ayuda',
    kind: 'pasos',
    title: 'Pedir ayuda también es valiente',
    tagline: 'Cómo y a quién pedir ayuda.',
    skill: 'valentia',
    bands: ['10-12', '13-17'],
    minutes: 3,
    steps: [
      { text: 'Muchas personas sienten que pedir ayuda es de débiles. En realidad, es una de las cosas más valientes.', mood: 'valiente' },
      { text: 'Piensa en tres personas a quienes podrías pedir ayuda: alguien de tu familia, de la escuela y un amigo.', mood: 'piensa', seconds: 20 },
      { text: 'No hace falta tener las palabras perfectas. Alcanza con: «¿Tienes un momento? Estoy pasando algo difícil».', mood: 'calma' },
      {
        text: 'Si la primera persona no puede ayudarte, prueba con otra.',
        mood: 'valiente',
        choice: {
          question: 'Hace días que te sientes muy mal y no se lo contaste a nadie. ¿Qué harías?',
          options: [
            { label: 'Contarle a alguien de confianza hoy', reply: 'Es una gran decisión. Hablar alivia y abre la puerta a más ayuda.' },
            { label: 'Esperar a que se pase solo', reply: 'A veces pasa, pero si dura días, mereces compañía. Contarlo no es molestar.' },
            { label: 'Escribirle a alguien si me cuesta hablar', reply: '¡Buena idea! Un mensaje también sirve para empezar.' },
          ],
        },
      },
      { text: 'Si alguna vez piensas en hacerte daño, pide ayuda ese mismo día. Puedes llamar gratis al 0800-999-0091.', mood: 'calma' },
    ],
    forAdult: 'Cuando te pida ayuda, agradécele que lo hizo antes de opinar. Eso aumenta la probabilidad de que vuelva a hacerlo.',
    evidence: 'Buscar ayuda es un factor de protección clave en la salud mental adolescente. Muchos adolescentes no la piden por vergüenza o por miedo a molestar.',
  },
  {
    id: 'hablar-frente-a-otros',
    kind: 'pasos',
    title: 'Hablar frente a otros',
    tagline: 'Para una exposición oral o una presentación.',
    skill: 'valentia',
    bands: ['10-12', '13-17'],
    minutes: 4,
    steps: [
      { text: 'Hablar frente a otros da nervios a casi todo el mundo, también a los adultos.', mood: 'piensa' },
      { text: 'Practica antes en voz alta, frente a un espejo o a alguien de confianza. Cada ensayo baja un poco los nervios.', mood: 'valiente' },
      { text: 'Antes de empezar, respira lento: inhala contando 4 y exhala contando 6, tres veces.', mood: 'calma', seconds: 30 },
      { text: 'Busca con la mirada a una o dos personas amables del público.', mood: 'feliz' },
      { text: 'Si te equivocas, sigue. El público casi nunca nota los errores tanto como tú.', mood: 'valiente' },
      { text: 'Cuando termines, reconoce que lo hiciste, aunque no haya salido perfecto.', mood: 'orgullo' },
    ],
    forAdult: 'Ofrécele ser su público de prueba. Si la ansiedad social le impide participar en clase o ver amigos, consulten con un profesional.',
    evidence: 'El ensayo y la exposición gradual son los componentes centrales de la TCC para la ansiedad social en la adolescencia.',
  },
  {
    id: 'anticipar-cambios',
    kind: 'juntos',
    title: 'Anticipar lo que viene',
    tagline: 'Contarle antes los cambios del día.',
    skill: 'valentia',
    bands: ['0-3'],
    minutes: 2,
    steps: [
      { text: 'Antes de un cambio, avísale con palabras simples: «Después del baño, vamos a comer».' },
      { text: 'Si va a pasar algo nuevo, como un médico o un lugar desconocido, cuéntale antes qué va a pasar.' },
      { text: 'Dale un aviso antes de terminar algo que le gusta: «Dos toboganes más y nos vamos».' },
    ],
    forAdult: 'Saber qué viene da seguridad a los más chicos y reduce los berrinches en las transiciones.',
    evidence: 'La previsibilidad de las rutinas y la anticipación de los cambios reducen el estrés en la primera infancia.',
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
    bands: ['10-12', '13-17'],
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
    bands: ['10-12', '13-17'],
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
    bands: ['10-12', '13-17'],
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
    bands: ['10-12', '13-17'],
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
    bands: ['10-12', '13-17'],
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
    bands: ['10-12', '13-17'],
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
  {
    id: 'dibujo-como-me-siento',
    kind: 'dibujar',
    title: 'Dibujo cómo me siento',
    tagline: 'Pon tu emoción en colores.',
    skill: 'emociones',
    bands: ['4-6', '7-9', '10-12'],
    minutes: 5,
    intro: 'A veces lo que sentimos es difícil de decir. Con colores y formas se puede mostrar.',
    prompts: ['¿De qué color es lo que sientes hoy?', '¿Tiene forma de nube, de rayo o de sol?', '¿Es grande o chiquito?', '¿En qué parte del cuerpo lo sientes?'],
    question: '¿Qué le pondrías a tu dibujo para que se sienta mejor?',
    forAdult: 'Mira el dibujo con curiosidad y sin interpretarlo: pregunta «¿Me cuentas tu dibujo?». No es un test ni dice nada por sí solo. El dibujo no se guarda en la app; si quieres conservarlo, usa «Guardar dibujo».',
    evidence: 'Expresar emociones con el dibujo ayuda a ponerlas en palabras después. Es un recurso habitual en la psicología infantil y en la educación emocional.',
  },
  {
    id: 'dibujo-mi-lugar-tranquilo',
    kind: 'dibujar',
    title: 'Mi lugar tranquilo',
    tagline: 'Dibuja un lugar donde te sientes bien.',
    skill: 'calma',
    bands: ['4-6', '7-9', '10-12', '13-17'],
    minutes: 5,
    intro: 'Piensa en un lugar donde sientes calma y estás a salvo. Puede ser real o inventado.',
    prompts: ['¿Qué colores tiene tu lugar?', '¿Hay plantas, agua o animales?', '¿Quién te acompaña?', '¿Qué se escucha allí?'],
    question: 'Cuando sientas nervios, ¿cómo podrías visitar tu lugar con la imaginación?',
    forAdult: 'Pídele que te cuente su lugar y úsenlo después como un refugio imaginario: cerrar los ojos y «visitarlo» unos minutos ayuda a calmarse. El dibujo no se guarda en la app.',
    evidence: 'La imaginación de un lugar seguro es una técnica de relajación usada en programas de regulación emocional para chicos y adolescentes.',
  },
  {
    id: 'dibujo-achicar-el-miedo',
    kind: 'dibujar',
    title: 'Dibujo mi miedo y lo achico',
    tagline: 'Dale una cara graciosa a tu miedo.',
    skill: 'valentia',
    bands: ['4-6', '7-9', '10-12'],
    minutes: 5,
    intro: 'Vamos a dibujar al miedo como si fuera un personaje. Después le ponemos algo gracioso para que se vea más chiquito.',
    prompts: ['¿Cómo se llama tu miedo?', '¿De qué color es?', 'Ponle un sombrero o unas medias de colores.', 'Hazlo más chiquito que tú.'],
    question: '¿Qué le dirías a tu miedo la próxima vez que aparezca?',
    forAdult: 'Ponerle nombre y forma al miedo lo vuelve algo de lo que se puede hablar. Sigue su ritmo: si se angustia, pasen a otra actividad. Si los miedos son muy intensos o duran mucho, consulten con un profesional.',
    evidence: 'Externalizar el problema (verlo como algo separado de uno) viene de la terapia narrativa con chicos. El humor ayuda a bajar la intensidad del miedo.',
    caution: 'No es para miedos ligados a algo que pasó de verdad y lo asustó mucho. En ese caso, conversen con un profesional.',
  },
  // ------------------------------------------------------------ 0 a 3 años: rutinas, turnos y primeros pasos para pensar
  {
    id: 'cancion-para-lavarse',
    kind: 'juntos',
    title: 'Una canción para lavarse',
    tagline: 'Cantar los pasos de lavarse o vestirse.',
    skill: 'cuerpo',
    bands: ['0-3'],
    minutes: 3,
    steps: [
      { text: 'Elige una rutina del cuerpo, como lavarse las manos, los dientes o vestirse.' },
      { text: 'Inventa una canción corta con los pasos: «Agua, jabón, frota, frota, y a secar».' },
      { text: 'Cántala siempre igual mientras lo hacen juntos, despacio y con gestos.' },
      { text: 'Deja que haga una parte solo, como frotar o meter un brazo. Celebra el intento.' },
    ],
    forAdult: 'La misma canción cada vez convierte una pelea en un juego. Si está cansado, haz tú la mayor parte y deja un solo paso para él.',
    evidence: 'Las rutinas predecibles dan seguridad en la primera infancia. Cantar los pasos ayuda a recordarlos y a sumar autonomía de a poco.',
  },
  {
    id: 'el-comentarista',
    kind: 'juntos',
    title: 'El comentarista',
    tagline: 'Contar en voz alta lo que hace.',
    skill: 'atencion',
    bands: ['0-3'],
    minutes: 5,
    steps: [
      { text: 'Siéntate cerca mientras juega y míralo sin dirigir el juego.' },
      { text: 'Cuenta en voz alta lo que hace, como en un partido: «Agarraste el auto rojo. ¡Lo pusiste arriba!».' },
      { text: 'Usa frases cortas y deja silencios. Si hace un sonido o dice algo, respóndele.' },
      { text: 'Evita las preguntas y las órdenes. Sólo acompaña lo que él elige.' },
    ],
    forAdult: 'Sirve para cualquier momento: el baño, la comida o el juego. Le muestra que te importa lo que hace y le regala palabras nuevas.',
    evidence: 'Describir en voz alta lo que el niño hace es una de las habilidades que enseñan los programas de crianza como la PCIT. Favorece la atención y el lenguaje.',
  },
  {
    id: 'esconder-el-juguete',
    kind: 'juntos',
    title: '¿Dónde está el juguete?',
    tagline: 'Esconder algo y buscarlo juntos.',
    skill: 'pensar',
    bands: ['0-3'],
    minutes: 5,
    steps: [
      { text: 'Muéstrale un juguete que le guste y tápalo con un pañuelo mientras te mira.' },
      { text: 'Pregunta: «¿Dónde está?». Espera a que lo busque, o ayúdalo a levantar el pañuelo.' },
      { text: 'Celebra cuando lo encuentre: «¡Acá estaba!».' },
      { text: 'Cuando le salga fácil, escóndelo debajo de uno de dos vasos y deja que elija.' },
    ],
    forAdult: 'Desde los 8 o 9 meses empieza a buscar lo que no ve. Si pierde el interés, deja el juguete a la vista y prueben otro día.',
    evidence: 'Buscar objetos escondidos acompaña el desarrollo de la permanencia del objeto, que describió Jean Piaget. También es un juego temprano de memoria.',
    caution: 'Usa juguetes grandes, sin piezas pequeñas que pueda llevarse a la boca: hay riesgo de atragantamiento.',
  },
  {
    id: 'pelota-por-turnos',
    kind: 'juntos',
    title: 'La pelota va y viene',
    tagline: 'Pasarse una pelota por turnos.',
    skill: 'amabilidad',
    bands: ['0-3'],
    minutes: 5,
    steps: [
      { text: 'Siéntense en el piso, frente a frente, con las piernas abiertas.' },
      { text: 'Haz rodar una pelota blanda hacia él y di: «Te toca a ti».' },
      { text: 'Espera a que te la devuelva y di: «Ahora me toca a mí».' },
      { text: 'Si se la queda, está bien. Prueba de nuevo más tarde, sin apurar.' },
    ],
    forAdult: 'Los turnos son la base de compartir y de conversar. Al principio quizás no la devuelva: el juego es esperar y volver a intentar.',
    evidence: 'Los juegos de ida y vuelta entrenan la espera y la atención, según el Centro para el Niño en Desarrollo de la Universidad de Harvard.',
    caution: 'Usa una pelota blanda y más grande que su puño, para que no pueda metérsela en la boca.',
  },
  {
    id: 'caras-en-el-espejo',
    kind: 'juntos',
    title: 'Caras en el espejo',
    tagline: 'Hacer caras juntos frente al espejo.',
    skill: 'emociones',
    bands: ['0-3'],
    minutes: 3,
    steps: [
      { text: 'Pónganse frente a un espejo, con el chico en tus brazos o sentado a tu lado.' },
      { text: 'Haz una cara exagerada y nómbrala: «Mira, cara de contento».' },
      { text: 'Prueben otras: sorpresa, enojo o tristeza. Hazlo con suavidad para no asustarlo.' },
      { text: 'Si imita una cara, festéjalo y nómbrala de nuevo.' },
    ],
    forAdult: 'Antes de los dos años, quizás no se reconozca en el espejo, pero igual mira tu cara. Termina siempre con una cara alegre.',
    evidence: 'Los bebés imitan gestos de la cara desde muy pequeños, y mirar caras con un adulto que las nombra es una primera forma de aprender emociones.',
    caution: 'Usa un espejo irrompible o mantenlo fuera de su alcance.',
  },
  {
    id: 'hora-de-guardar',
    kind: 'juntos',
    title: 'La canción de guardar',
    tagline: 'Avisar y cantar para terminar de jugar.',
    skill: 'valentia',
    bands: ['0-3'],
    minutes: 5,
    steps: [
      { text: 'Un ratito antes, avísale: «Un poquito más y guardamos».' },
      { text: 'Cuando llegue la hora, canta siempre la misma canción de guardar.' },
      { text: 'Guarden juntos. Dale una tarea fácil: «Tú pones los bloques en la caja».' },
      { text: 'Al terminar, nombra lo que viene: «Listo, ahora vamos a bañarnos».' },
    ],
    forAdult: 'Dejar algo que le gusta cuesta mucho a esta edad. Si llora, nombra lo que siente y sigue guardando con calma.',
    evidence: 'Avisar antes de un cambio y usar señales siempre iguales reduce las peleas en las transiciones. Es una estrategia común en la crianza positiva y en los jardines.',
  },
  {
    id: 'agua-y-arena',
    kind: 'juntos',
    title: 'Agua y arena',
    tagline: 'Un juego para tocar y calmarse.',
    skill: 'calma',
    bands: ['0-3'],
    minutes: 10,
    steps: [
      { text: 'Pon un poco de agua tibia o arena en una bandeja, con vasitos y una cuchara.' },
      { text: 'Siéntate a su lado y muéstrale cómo llenar y vaciar, despacio.' },
      { text: 'Nombra lo que siente al tocar: «Está fresquita. Es suave».' },
      { text: 'Si está alterado, usa este juego para bajar el ritmo: habla lento y en voz baja.' },
    ],
    forAdult: 'Llenar y vaciar suele atraparlos y calmarlos. Pongan una toalla en el piso y acepta que se va a mojar o ensuciar.',
    evidence: 'El juego sensorial con un adulto al lado ayuda a explorar y a bajar la activación. Es parte del juego libre que recomienda la Academia Estadounidense de Pediatría.',
    caution: 'Nunca lo dejes solo cerca del agua, ni un segundo: un bebé puede ahogarse en muy poca agua. Vigila que no coma arena.',
  },
  {
    id: 'album-de-la-familia',
    kind: 'juntos',
    title: 'El álbum de la familia',
    tagline: 'Mirar fotos de las personas que lo quieren.',
    skill: 'gratitud',
    bands: ['0-3'],
    minutes: 5,
    steps: [
      { text: 'Junta algunas fotos de la familia y de personas cercanas en un álbum o un cuaderno.' },
      { text: 'Mírenlas juntos y nombra a cada uno: «Esta es la abuela. Ella te hace upa».' },
      { text: 'Cuenta algo lindo que hace cada persona por él: «El tío te lleva a la plaza».' },
      { text: 'Termina con una frase de cariño: «Cuánta gente te quiere».' },
    ],
    forAdult: 'Sirve mucho cuando extraña a alguien o antes de una visita. Las fotos impresas aguantan mejor que una pantalla y no lo distraen.',
    evidence: 'No hay estudios sobre este juego en particular. Se basa en la idea de que reconocer lo bueno que nos dan los demás empieza con modelos sencillos dentro de la familia.',
  },
  {
    id: 'munecos-que-sienten',
    kind: 'juntos',
    title: 'Muñecos que sienten',
    tagline: 'Jugar a que un muñeco está triste o contento.',
    skill: 'emociones',
    bands: ['0-3'],
    minutes: 5,
    steps: [
      { text: 'Elige un muñeco o un peluche y cuenta qué le pasa: «El oso está triste. Se le cayó el helado».' },
      { text: 'Pon cara y voz de tristeza, y pregunta: «¿Qué hacemos?».' },
      { text: 'Muestra una idea: darle un abrazo o decirle «Estoy acá».' },
      { text: 'Prueben otras emociones, como la alegría o el miedo, siempre con un final tranquilo.' },
    ],
    forAdult: 'Con los muñecos es más fácil hablar de emociones que cuando las vive él. Desde los dos años suele sumarse al juego y proponer ideas.',
    evidence: 'Hablar de las emociones con los hijos desde pequeños se asocia con una mejor regulación emocional más adelante (Gottman y colaboradores, 1996).',
  },
  {
    id: 'ayudar-en-casa',
    kind: 'juntos',
    title: 'Pequeño ayudante',
    tagline: 'Hacer juntos una tarea de la casa.',
    skill: 'amabilidad',
    bands: ['0-3'],
    minutes: 5,
    steps: [
      { text: 'Elige una tarea simple: llevar la ropa al canasto, poner las cucharas o regar una planta.' },
      { text: 'Invítalo: «¿Me ayudas?». Muéstrale cómo, despacio.' },
      { text: 'Acepta que lo haga a su manera, aunque tarde más o no quede perfecto.' },
      { text: 'Agradécele de verdad: «Gracias por ayudarme. Lo hicimos juntos».' },
    ],
    forAdult: 'Desde el año y medio muchos chicos quieren ayudar solos. Aprovecha esas ganas aunque sea más lento: así aprende a cuidar a los demás.',
    evidence: 'Los niños pequeños ayudan a los adultos de forma espontánea desde los 18 meses (Warneken y Tomasello, 2006).',
    caution: 'Deja fuera de su alcance los cuchillos, lo caliente y los productos de limpieza.',
  },
  {
    id: 'cuento-de-hoy',
    kind: 'juntos',
    title: 'El cuento de hoy',
    tagline: 'Contar juntos lo que pasó en el día.',
    skill: 'pensar',
    bands: ['0-3'],
    minutes: 5,
    steps: [
      { text: 'A la noche, cuéntale su día como si fuera un cuento: «Hoy a la mañana fuimos a la plaza».' },
      { text: 'Haz preguntas fáciles: «¿Y qué vimos en la plaza?». Si no contesta, responde tú.' },
      { text: 'Incluye lo que sintió: «Te asustaste con el perro y te abracé».' },
      { text: 'Termina con algo tranquilo: «Y después volvimos a casa a cenar».' },
    ],
    forAdult: 'Se puede sumar a la rutina para dormir. Contar lo difícil con un final seguro le ayuda a ordenar lo que vivió.',
    evidence: 'Conversar con los hijos sobre lo que vivieron, con detalles y preguntas, se asocia con más memoria y lenguaje en la infancia (Fivush, Haden y Reese, 2006).',
  },
  {
    id: 'juego-con-cajas',
    kind: 'juntos',
    title: 'Jugar con cajas',
    tagline: 'Una caja puede ser cualquier cosa.',
    skill: 'pensar',
    bands: ['0-3'],
    minutes: 10,
    steps: [
      { text: 'Junta cajas de cartón de distintos tamaños, sin grapas ni cintas sueltas.' },
      { text: 'Deja que las explore: meter cosas, apilarlas, sacarlas y volver a meterlas.' },
      { text: 'Propón ideas: «¿Y si es un auto?». Si es grande, puede meterse adentro.' },
      { text: 'Sigue sus ideas aunque sean raras. Si dice que es un barco, ¡es un barco!' },
    ],
    forAdult: 'Los juguetes simples dejan más lugar a la imaginación que los que hacen todo solos. No hace falta comprar nada.',
    evidence: 'La Academia Estadounidense de Pediatría recomienda el juego libre con objetos simples y un adulto que acompaña, porque favorece el pensamiento y el lenguaje (Yogman y colaboradores, 2018).',
    caution: 'Revisa que no tengan grapas, plásticos ni bolsas, que pueden lastimar o asfixiar.',
  },
  // ------------------------------------------------------------ pensar y agradecer (4 a 17 años)
  // ------------------------------------------------------------ pensar
  {
    id: 'plan-b',
    kind: 'mision',
    title: 'Mi plan B',
    tagline: 'Si algo sale mal, busca otro camino.',
    skill: 'pensar',
    bands: ['4-6', '7-9'],
    minutes: 3,
    intro: 'A veces las cosas no salen como queremos. Llueve, se rompe un juguete o no hay lo que pedimos.',
    steps: [
      { text: 'Cuando algo sale mal, es normal sentir enojo o pena.', mood: 'piensa' },
      { text: 'Pero casi siempre hay otro camino. Lo llamamos plan B.', mood: 'piensa' },
      {
        text: 'Imagina que ibas a ir a la plaza y empieza a llover.',
        mood: 'sorpresa',
        choice: {
          question: '¿Cuál podría ser tu plan B?',
          options: [
            { label: 'Armar una carpa en casa', reply: '¡Qué buena idea! La lluvia no frenó tu juego.' },
            { label: 'Jugar con autos o muñecos', reply: '¡Muy bien! Encontraste otro juego para hoy.' },
            { label: 'Llorar todo el día', reply: 'La pena se entiende. Llora un rato, y después busquen juntos un plan B.' },
          ],
        },
      },
      { text: 'Elige con tu adulto una misión para practicar tu plan B.', mood: 'feliz' },
    ],
    missions: [
      'Si no hay mi fruta favorita, elegir otra',
      'Si mi torre se cae, armarla de otra forma',
      'Si un amigo no puede jugar, buscar otro juego',
      'Si pierdo en un juego, decir «otra vez»',
      'Si llueve, inventar un juego en casa',
    ],
    forAdult: 'Muestra tus propios planes B en voz alta: «Se acabó la leche, ¿qué hacemos? Ya sé…». Primero valida la frustración y después busquen ideas juntos.',
    evidence: 'Pensar en otras opciones cuando algo sale mal es una forma sencilla de flexibilidad y de resolución de problemas, que la TCC para niños entrena desde temprano.',
  },
  {
    id: 'hecho-o-pensamiento',
    kind: 'pasos',
    title: '¿Hecho o pensamiento?',
    tagline: 'Lo que ve la cámara y lo que dice la cabeza.',
    skill: 'pensar',
    bands: ['4-6', '7-9'],
    minutes: 3,
    steps: [
      { text: 'Un hecho es algo que pasó. Una cámara lo podría filmar.', mood: 'piensa' },
      { text: 'Un pensamiento es algo que dice tu cabeza. La cámara no lo ve.', mood: 'piensa' },
      {
        text: 'Escucha esto: «Sofi no me saludó».',
        mood: 'piensa',
        choice: {
          question: '¿Es un hecho o un pensamiento?',
          options: [
            { label: 'Un hecho', reply: '¡Sí! La cámara podría ver que Sofi no saludó.' },
            { label: 'Un pensamiento', reply: 'Casi. Esto sí lo vería la cámara, así que es un hecho.' },
            { label: 'No sé', reply: 'Pregúntate: ¿lo vería una cámara? Aquí sí, entonces es un hecho.' },
          ],
        },
      },
      {
        text: 'Y ahora esto: «Sofi está enojada conmigo».',
        mood: 'piensa',
        choice: {
          question: '¿Es un hecho o un pensamiento?',
          options: [
            { label: 'Un pensamiento', reply: '¡Muy bien! La cámara no ve lo que siente Sofi. Puede que no te haya visto.' },
            { label: 'Un hecho', reply: 'Parece un hecho, pero es un pensamiento. Sofi te lo podría contar.' },
            { label: 'No sé', reply: 'La cámara no ve el enojo por dentro. Por eso es un pensamiento.' },
          ],
        },
      },
      { text: 'Cuando algo te duela, pregúntate: ¿qué vio la cámara y qué dijo mi cabeza?', mood: 'orgullo' },
    ],
    forAdult: 'Usen la pregunta de la cámara en la vida diaria, sin corregir: «¿Eso lo vio la cámara o lo pensaste?». Si el pensamiento era cierto, también vale: ayúdale con lo que pasó.',
    evidence: 'Separar lo que pasó de lo que pensamos es el primer paso de la reestructuración cognitiva de la TCC, adaptado como juego para los más chicos.',
  },
  {
    id: 'problema-en-cuatro-pasos',
    kind: 'pasos',
    title: 'Un problema, cuatro pasos',
    tagline: 'Una receta para resolver problemas.',
    skill: 'pensar',
    bands: ['7-9', '10-12'],
    minutes: 4,
    steps: [
      { text: 'Los problemas se resuelven mejor con una receta. Tiene cuatro pasos.', mood: 'piensa' },
      { text: 'Paso uno: di cuál es el problema en una frase. Por ejemplo: «Mi hermano usa mi pelota sin pedir».', mood: 'piensa' },
      { text: 'Paso dos: piensa todas las ideas que puedas, aunque sean raras. Todavía no las juzgues.', mood: 'piensa', seconds: 20 },
      {
        text: 'Paso tres: mira qué pasaría con cada idea y elige una.',
        mood: 'piensa',
        choice: {
          question: '¿Qué idea elegirías para lo de la pelota?',
          options: [
            { label: 'Decirle cómo me siento', reply: 'Buena idea. Hablar con calma suele ayudar.' },
            { label: 'Turnarnos la pelota', reply: '¡Genial! Así los dos pueden jugar.' },
            { label: 'Esconderle sus cosas', reply: 'Se entiende el enojo, pero eso puede traer un problema nuevo. Mira otra idea.' },
          ],
        },
      },
      { text: 'Paso cuatro: pruébala. Después mira si funcionó. Si no, vuelve al paso dos.', mood: 'valiente' },
      { text: 'Ya tienes tu receta. Sirve para muchos problemas.', mood: 'orgullo' },
    ],
    forAdult: 'Cuando te traiga un problema, no lo resuelvas por él: guíalo por los pasos con preguntas. Celebra el intento aunque la idea no funcione.',
    evidence: 'Es la resolución de problemas, un componente clásico de la TCC para niños: definir el problema, pensar ideas, elegir una y evaluar cómo salió.',
  },
  {
    id: 'abogado-de-mis-pensamientos',
    kind: 'pasos',
    title: 'El abogado de mi pensamiento',
    tagline: 'Pon tu pensamiento en un juicio justo.',
    skill: 'pensar',
    bands: ['13-17'],
    minutes: 4,
    steps: [
      { text: 'Hay pensamientos que llegan como sentencia: «Le caigo mal a todos». Pero toda acusación merece un juicio justo.', mood: 'piensa' },
      { text: 'Escribe el pensamiento que más te pesa hoy. Esa es la acusación.', mood: 'piensa', seconds: 20 },
      { text: 'Primero habla la fiscalía: ¿qué pruebas reales hay a favor? Solo hechos, no sensaciones.', mood: 'piensa', seconds: 30 },
      { text: 'Ahora eres el abogado defensor: ¿qué pruebas hay en contra? Busca al menos dos.', mood: 'valiente', seconds: 30 },
      {
        text: 'Toca decidir. Un buen juez no exagera ni para un lado ni para el otro.',
        mood: 'piensa',
        choice: {
          question: '¿Qué veredicto se parece más a lo que encontraste?',
          options: [
            { label: 'El pensamiento era exagerado', reply: 'Pasa seguido. Prueba decirlo de forma más justa, por ejemplo: «Con algunos me llevo mejor que con otros».' },
            { label: 'Hay algo de verdad', reply: 'Está bien reconocerlo. Ahora la pregunta es qué puedes hacer con esa parte.' },
            { label: 'No encontré pruebas en contra', reply: 'A veces cuesta verlas cuando uno está mal. Pregúntale a alguien de confianza qué ve.' },
          ],
        },
      },
      { text: 'Escribe el veredicto con una frase justa. Vuelve a ella cuando el pensamiento regrese.', mood: 'orgullo' },
    ],
    forAdult: 'Si te comparte su «juicio», no hagas de fiscal ni de juez: pregunta qué pruebas encontró. Si los pensamientos duros son constantes o hablan de no querer vivir, consulten con un profesional.',
    evidence: 'Examinar las pruebas a favor y en contra de un pensamiento es una técnica central de la reestructuración cognitiva en la TCC para adolescentes.',
  },
  {
    id: 'lupa-o-telescopio',
    kind: 'pasos',
    title: '¿Lo pienso en grande o en chico?',
    tagline: 'Cuando un problema chico parece enorme.',
    skill: 'pensar',
    bands: ['10-12', '13-17'],
    minutes: 4,
    steps: [
      { text: 'A veces la cabeza agarra un problema chico y lo agranda con una lupa. Eso se llama catastrofizar.', mood: 'piensa' },
      { text: 'Por ejemplo: «Me fue mal en la prueba, voy a repetir, mi vida es un desastre».', mood: 'sorpresa' },
      { text: 'Respira despacio tres veces y baja la lupa.', mood: 'calma', seconds: 18 },
      {
        text: 'Ahora mira el problema con su tamaño real.',
        mood: 'piensa',
        choice: {
          question: '¿Qué pregunta te ayuda a ver el tamaño real?',
          options: [
            { label: '¿Qué es lo más probable que pase?', reply: 'Buena pregunta. Lo más probable casi nunca es lo peor.' },
            { label: '¿Esto me va a importar en un mes?', reply: 'Muy útil. Muchas cosas que hoy pesan, en un mes ya no.' },
            { label: '¿Y si pasa lo peor?', reply: 'Esa pregunta suele agrandar la lupa. Pregúntate mejor: si pasa, ¿qué podría hacer?' },
          ],
        },
      },
      { text: 'Ponle un número del uno al diez: ¿qué tan grande es en verdad? Muchas veces es un tres que parecía un diez.', mood: 'piensa', seconds: 15 },
      { text: 'Los problemas son reales. Pero verlos en su tamaño te ayuda a pensar qué hacer.', mood: 'orgullo' },
    ],
    forAdult: 'No le digas «no es para tanto»: pregúntale qué número le pone y qué es lo más probable. Escuchar primero hace que acepte mirar el tamaño real.',
    evidence: 'Notar y corregir la catastrofización (pensar que pasará lo peor) es parte de la reestructuración cognitiva de la TCC para niños y adolescentes.',
  },

  // ------------------------------------------------------------ gratitud
  {
    id: 'carta-de-gracias',
    kind: 'pasos',
    title: 'Mi carta de gracias',
    tagline: 'Escribe a alguien que te ayudó.',
    skill: 'gratitud',
    bands: ['7-9', '10-12', '13-17'],
    minutes: 5,
    steps: [
      { text: 'Piensa en una persona que hizo algo bueno por ti. Puede ser de tu familia, de la escuela o del barrio.', mood: 'piensa', seconds: 15 },
      { text: '¿Qué hizo? Recuerda ese momento con detalles.', mood: 'piensa', seconds: 15 },
      { text: 'Ahora escríbele una carta corta. Cuéntale qué hizo y cómo te ayudó.', mood: 'feliz' },
      {
        text: 'Llega la parte más valiente.',
        mood: 'valiente',
        choice: {
          question: '¿Cómo le darías tu carta?',
          options: [
            { label: 'Leérsela en persona', reply: '¡Qué valiente! Leerla en voz alta suele emocionar mucho a los dos.' },
            { label: 'Dejársela para que la lea', reply: 'Muy bien. Igual le va a llegar tu gracias.' },
            { label: 'Mandarle un mensaje', reply: 'También vale. Lo importante es que sepa lo que hizo por ti.' },
          ],
        },
      },
      { text: 'Dar las gracias hace bien a quien las recibe. Y también a quien las da.', mood: 'orgullo' },
    ],
    forAdult: 'Ayúdale a elegir a la persona y a organizar la entrega, pero deja que las palabras sean suyas. Si le da vergüenza leerla, acompáñale o dejen la carta.',
    evidence: 'Es una versión de la «visita de gratitud»: escribir y entregar una carta de agradecimiento mejoró el bienestar de adultos durante algunas semanas (Seligman y colaboradores, 2005).',
  },
  {
    id: 'paseo-de-cosas-lindas',
    kind: 'mision',
    title: 'El paseo de las cosas lindas',
    tagline: 'Sal a buscar tesoros con los ojos.',
    skill: 'gratitud',
    bands: ['4-6', '7-9'],
    minutes: 5,
    intro: 'Hoy vamos a dar un paseo. Pero no un paseo cualquiera: vamos a cazar cosas lindas.',
    steps: [
      { text: 'Las cosas lindas están en todos lados. A veces no las vemos porque vamos apurados.', mood: 'piensa' },
      { text: 'Camina despacio con tu adulto. Mira arriba, abajo y a los costados.', mood: 'calma' },
      { text: 'Cuando encuentres algo lindo, dile «¡gracias!» bajito.', mood: 'feliz' },
      { text: 'Elige tu misión de hoy. Al volver, cuenta qué encontraste.', mood: 'feliz' },
    ],
    missions: [
      'Encontrar tres flores o plantas',
      'Escuchar un pájaro',
      'Ver una nube con forma divertida',
      'Encontrar algo de mi color favorito',
      'Ver a alguien ayudando a otra persona',
      'Encontrar una piedra o una hoja linda',
    ],
    forAdult: 'Vayan sin apuro y sin pantallas. Nombra tú también lo que te gusta: «Mira qué lindo ese árbol». Al volver, pueden dibujar lo que encontraron.',
    evidence: 'Notar y nombrar cosas buenas a diario es la base de los ejercicios de gratitud. En adolescentes, contar cosas buenas se asoció con más bienestar (Froh, Sefick y Emmons, 2008).',
  },
  {
    id: 'gracias-a-mi-cuerpo',
    kind: 'dibujar',
    title: 'Gracias a mi cuerpo',
    tagline: 'Todo lo que tu cuerpo hace por ti.',
    skill: 'gratitud',
    bands: ['4-6', '7-9', '10-12'],
    minutes: 4,
    intro: 'Tu cuerpo hace muchas cosas por ti cada día. Vamos a dibujarlo y darle las gracias.',
    prompts: ['Dibuja tu cuerpo como quieras.', '¿Qué hacen tus piernas por ti?', '¿Qué hacen tus manos?', '¿Qué te dejan ver, oír y oler?', 'Pon un corazón en la parte que más quieres agradecer.'],
    question: '¿Qué le dirías a tu cuerpo para darle las gracias?',
    forAdult: 'Pon el foco en lo que el cuerpo hace (correr, abrazar, saborear) y no en cómo se ve. Si tiene alguna dificultad física, valora todo lo que sí puede hacer, sin forzar. El dibujo no se guarda en la app.',
    evidence: 'Agradecer lo que el cuerpo permite hacer, más que cómo se ve, es una idea usada en programas de imagen corporal positiva. Aquí se combina con un ejercicio sencillo de gratitud.',
  },
  {
    id: 'cadena-de-gracias',
    kind: 'mision',
    title: 'La cadena de gracias',
    tagline: 'Un gracias que pasa de mano en mano.',
    skill: 'gratitud',
    bands: ['4-6', '7-9', '10-12'],
    minutes: 4,
    intro: 'En familia vamos a armar una cadena. Cada eslabón es un gracias.',
    steps: [
      { text: 'Recorten tiras de papel. En cada tira se escribe o se dibuja un gracias.', mood: 'feliz' },
      { text: 'Puede ser para alguien de la casa: «Gracias, papá, por la comida rica».', mood: 'feliz' },
      { text: 'Peguen cada tira como un aro, unida a la anterior. Así crece la cadena.', mood: 'orgullo' },
      { text: 'Elige tu misión de hoy para sumar un eslabón.', mood: 'feliz' },
    ],
    missions: [
      'Dar las gracias a cada persona en la cena',
      'Agradecer algo que hicieron por mí sin que lo pidiera',
      'Agradecer a alguien de la escuela',
      'Escribir un gracias para mí por algo que hice',
      'Esconder un gracias para que alguien lo encuentre',
    ],
    forAdult: 'Sumen eslabones durante una semana y cuélguenla a la vista. Que los adultos también agreguen gracias, sobre todo a los chicos: «Gracias por ayudarme a poner la mesa».',
    evidence: 'Contar y expresar cosas buenas con frecuencia se asoció con más gratitud y bienestar en adolescentes (Froh, Sefick y Emmons, 2008). En familia, el ejemplo de los adultos ayuda a sostener el hábito.',
  },
  {
    id: 'tres-cosas-buenas',
    kind: 'pasos',
    title: 'Tres cosas buenas y su porqué',
    tagline: 'Lo bueno del día, y por qué pasó.',
    skill: 'gratitud',
    bands: ['13-17'],
    minutes: 4,
    steps: [
      { text: 'El cerebro está hecho para notar lo malo. Es útil para sobrevivir, pero no deja ver todo el día.', mood: 'piensa' },
      { text: 'Esta noche, anota tres cosas que salieron bien hoy. Pueden ser chicas: un mensaje, una charla, una comida.', mood: 'piensa', seconds: 30 },
      { text: 'Al lado de cada una, escribe por qué pasó. ¿Qué hiciste tú? ¿Quién más ayudó?', mood: 'piensa', seconds: 30 },
      {
        text: 'Lo del porqué es la clave del ejercicio.',
        mood: 'piensa',
        choice: {
          question: '¿Por qué crees que importa el porqué?',
          options: [
            { label: 'Me muestra lo que yo hice bien', reply: 'Exacto. Ves que lo bueno no fue solo suerte.' },
            { label: 'Me hace ver a quien me ayudó', reply: 'Muy bien. Notar a los demás también es gratitud.' },
            { label: 'No sé, parece de más', reply: 'Es normal pensarlo. Prueba una semana y fíjate si notas algo distinto.' },
          ],
        },
      },
      { text: 'Hazlo una semana, en tu cuaderno o en las notas del celular. Lo que entrenas, lo ves más.', mood: 'orgullo' },
    ],
    forAdult: 'No le pidas que te muestre lo que escribe: es suyo. Si quieren, compartan en la cena una cosa buena cada uno, sin obligar.',
    evidence: 'En el estudio de Seligman y colaboradores (2005), anotar tres cosas buenas y su causa durante una semana se asoció con más felicidad y menos síntomas depresivos en adultos, hasta seis meses después.',
  },
  // ------------------------------------------------------------ termómetros y escaleras (interactivas)
  {
    id: 'termometro-del-enojo',
    kind: 'termometro',
    title: 'El termómetro del enojo',
    tagline: '¿Qué tan fuerte es el enojo ahora?',
    skill: 'emociones',
    bands: ['7-9', '10-12'],
    minutes: 2,
    feeling: 'enojo',
    intro: 'Piensa en algo que te enojó hoy. ¿Qué tan fuerte es el enojo ahora?',
    levels: [
      { label: 'Calma', tip: 'Estás en calma. Es un buen momento para hablar de lo que pasó.' },
      { label: 'Una molestia chiquita', tip: 'Nota dónde la sientes en el cuerpo. Respira hondo una vez.' },
      { label: 'Enojo mediano', tip: 'Haz la tortuga: frena, respira tres veces y después piensa qué hacer.' },
      { label: 'Enojo grande', tip: 'Aléjate un momento a un lugar tranquilo. Aprieta los puños y suéltalos.' },
      { label: 'Volcán a punto de explotar', tip: 'Busca a tu adulto. Primero se calma el cuerpo. Las palabras vienen después.' },
    ],
    forAdult: 'Medir la emoción ayuda a darse cuenta antes de que explote. Úsenlo también en momentos tranquilos, para practicar. Si marca 4 o 5, no es momento de sermones: acompaña a calmar el cuerpo.',
    evidence: 'Los «termómetros de emociones» son una herramienta habitual de la TCC con chicos para reconocer la intensidad de una emoción y elegir qué hacer en cada nivel.',
  },
  {
    id: 'termometro-de-los-nervios',
    kind: 'termometro',
    title: 'El termómetro de los nervios',
    tagline: '¿Qué tan fuertes son los nervios ahora?',
    skill: 'valentia',
    bands: ['10-12', '13-17'],
    minutes: 2,
    feeling: 'preocupacion',
    intro: 'Piensa en algo que te pone nervioso o nerviosa. ¿Qué tan fuertes son los nervios ahora?',
    levels: [
      { label: 'Calma', tip: 'Los nervios están quietos. Aprovecha para preparar lo que viene.' },
      { label: 'Cosquillas en la panza', tip: 'Es normal antes de algo importante. Un poco de nervios te ayuda a prestar atención.' },
      { label: 'Nervios medianos', tip: 'Respira lento. Suelta el aire más despacio de lo que lo tomas.' },
      { label: 'Muchos nervios', tip: 'Nombra cinco cosas que ves. Después elige un paso chico para empezar.' },
      { label: 'No puedo pensar', tip: 'Para un momento y pide ayuda. Cuando el cuerpo se calma, se piensa mejor.' },
    ],
    forAdult: 'Pregunta por el número sin juzgarlo: «¿En cuánto estás?». Con nervios altos, primero calmar el cuerpo y después hablar del problema. Si los nervios son muy altos casi todos los días, consulten con un profesional.',
    evidence: 'Calificar la intensidad del miedo o la ansiedad es parte de los programas de TCC para la ansiedad infantil, como Coping Cat.',
  },
  {
    id: 'escalones-para-dormir',
    kind: 'escalera',
    title: 'Escalones para dormir en mi cama',
    tagline: 'Un paso chico cada noche.',
    skill: 'valentia',
    bands: ['4-6', '7-9'],
    minutes: 3,
    intro: 'Las cosas difíciles se suben de a un escalón. ¿Cuál quieres probar esta noche?',
    goal: 'dormir en mi cama toda la noche',
    rungs: [
      'Dormir con la puerta abierta y la luz del pasillo prendida.',
      'Que mi adulto se quede sentado al lado un ratito.',
      'Que mi adulto me venga a ver cada cinco minutos.',
      'Que mi adulto me venga a ver una sola vez.',
      'Dormirme con mi peluche y la luz bajita.',
    ],
    forAdult: 'Elijan juntos el escalón y repítanlo varias noches antes de subir al siguiente. Si un escalón cuesta mucho, bajen uno: no es retroceder. Elogia el esfuerzo de cada noche, no solo el resultado.',
    evidence: 'La exposición gradual, de a pasos chicos, es la base de la TCC para los miedos infantiles, también los de la noche.',
    caution: 'Si el miedo empezó después de algo que lo asustó de verdad, o si aparecen pesadillas todas las noches, consulten con un profesional.',
  },
  {
    id: 'escalones-para-hablar',
    kind: 'escalera',
    title: 'Escalones para hablar',
    tagline: 'Animarse a hablar, de a poco.',
    skill: 'valentia',
    bands: ['7-9', '10-12', '13-17'],
    minutes: 3,
    intro: 'Hablar con otros a veces da vergüenza. Se aprende de a un escalón. ¿Cuál quieres probar esta semana?',
    goal: 'decir algo en clase',
    rungs: [
      'Saludar con la mano a alguien que conozco.',
      'Decir «hola» en voz alta a alguien de mi grupo.',
      'Hacerle una pregunta corta a un compañero o compañera.',
      'Pedir algo en un kiosco o en un negocio.',
      'Levantar la mano en clase para decir una cosa corta.',
    ],
    forAdult: 'No hables por tu hijo o hija, aunque cueste ver la espera. Repitan cada escalón hasta que sea más fácil. Si casi no habla fuera de casa o la vergüenza le impide ir a la escuela, consulten con un profesional.',
    evidence: 'La exposición gradual con apoyo del adulto es el tratamiento con más evidencia para la ansiedad social en chicos y adolescentes, según la guía NICE de 2013.',
  },

  // ------------------------------------------------------------ habilidades con otros (10 a 17 años)
  {
    id: 'charla-que-fluye',
    kind: 'pasos',
    title: 'Una charla que fluye',
    tagline: 'Empezar a hablar y que la charla siga.',
    skill: 'amabilidad',
    bands: ['10-12', '13-17'],
    minutes: 4,
    steps: [
      { text: 'Una buena charla es como pasarse una pelota. Uno pregunta, el otro responde y la pelota vuelve.', mood: 'piensa' },
      { text: 'Para empezar, comenta algo que tienen cerca: una clase, una tarea o algo que pasó hoy.', mood: 'calma' },
      { text: 'Haz una pregunta que no se responda con sí o no. Por ejemplo: «¿Qué te pareció?».', mood: 'piensa' },
      {
        text: 'Escucha la respuesta y busca algo en común: un gusto, una serie, un deporte.',
        mood: 'feliz',
        choice: {
          question: 'Te cuenta que juega al vóley. ¿Qué podrías decir?',
          options: [
            { label: 'Preguntarle desde cuándo juega', reply: 'Bien. Una pregunta más muestra que te interesa lo que dijo.' },
            { label: 'Hablar diez minutos de mi deporte', reply: 'Contar de ti está bien, pero deja lugar para que la pelota vuelva.' },
            { label: 'Decir «ah» y mirar el celular', reply: 'Puede parecer que no te interesa. Prueba con una pregunta corta.' },
          ],
        },
      },
      { text: 'Cuenta algo tuyo también. Si solo preguntas, parece una entrevista.', mood: 'calma' },
      { text: 'Para cerrar, alcanza con algo simple: «Me tengo que ir. Hablamos otro día».', mood: 'orgullo' },
      { text: 'No todas las charlas fluyen. Si el otro contesta corto y mira para otro lado, no es tu culpa. Prueba con otra persona.', mood: 'calma' },
    ],
    forAdult: 'No le digas qué decir delante de otros. Si quiere, ensayen en casa una charla corta sobre algo que le guste. Si la vergüenza le impide hablar con chicos de su edad casi siempre, consulten con un profesional.',
    evidence: 'Intercambiar información y buscar intereses en común son habilidades centrales del programa PEERS (Laugeson y Frankel, 2010). PEERS se estudió sobre todo con adolescentes en el espectro autista; con otros adolescentes hay menos estudios.',
  },
  {
    id: 'entrar-a-un-grupo',
    kind: 'escalera',
    title: 'Sumarme a un grupo',
    tagline: 'Entrar a una charla o a un grupo nuevo, de a poco.',
    skill: 'valentia',
    bands: ['10-12', '13-17'],
    minutes: 3,
    intro: 'Sumarte a un grupo nuevo cuesta. Primero se mira y se escucha. Después se habla. ¿Qué escalón quieres probar esta semana?',
    goal: 'sumarme a la charla de un grupo nuevo',
    rungs: [
      'Acercarme a un grupo y solo escuchar de qué hablan.',
      'Sonreír o mirar a quien habla, para mostrar que escucho.',
      'Esperar una pausa y decir algo corto sobre el mismo tema.',
      'Hacerle una pregunta a alguien del grupo.',
      'Ir a una actividad nueva, como un taller o un club, y presentarme.',
    ],
    forAdult: 'Para entrar a un grupo ayuda primero mirar y escuchar, y después hablar del mismo tema. Si no le dan lugar, que se retire con calma y pruebe con otro grupo: no es un fracaso. Ayúdale a encontrar lugares con gustos en común, como un club o un taller.',
    evidence: 'Mirar, escuchar y esperar una pausa antes de sumarse al tema es la forma de entrar a una charla que enseña el programa PEERS (Laugeson y Frankel, 2010). Los escalones siguen la exposición gradual de la TCC.',
    caution: 'Si casi no tiene amigos desde hace mucho, si lo excluyen siempre o hay burlas, puede ser acoso: hablen con la escuela y lean la guía sobre acoso escolar.',
  },
  {
    id: 'no-a-la-presion-del-grupo',
    kind: 'pasos',
    title: 'Decir que no al grupo',
    tagline: 'Alcohol, retos o fotos: tu decisión vale.',
    skill: 'valentia',
    bands: ['13-17'],
    minutes: 4,
    steps: [
      { text: 'En grupo a veces aparece la presión. Tomar alcohol, hacer un reto peligroso o mandar una foto.', mood: 'piensa' },
      { text: 'Sentir esa presión es normal. Con amigos cerca, a todos nos cuesta más frenar.', mood: 'calma' },
      { text: 'Decide antes cuál es tu límite. Es más fácil decir que no si ya lo pensaste.', mood: 'piensa' },
      { text: 'Un no corto alcanza: «No, gracias. Hoy no». No hace falta dar explicaciones.', mood: 'valiente' },
      {
        text: 'Si insisten, repite lo mismo con calma. También puedes cambiar de tema o irte.',
        mood: 'valiente',
        choice: {
          question: 'Alguien te pide por chat una foto tuya sin ropa. ¿Qué haces?',
          options: [
            { label: 'No mandarla y contarle a un adulto', reply: 'Muy bien. Nadie tiene derecho a pedirte eso. Contarlo te protege.' },
            { label: 'Mandarla si es alguien de confianza', reply: 'Una foto enviada puede circular sin tu permiso. Tu cuerpo es tuyo y puedes decir que no.' },
            { label: 'No responder', reply: 'Está bien no contestar. Si insisten o te amenazan, cuéntaselo a un adulto.' },
          ],
        },
      },
      { text: 'Arma una salida: un amigo que te apoye o un adulto al que puedas escribir para que te busque.', mood: 'orgullo' },
      { text: 'Si alguien difunde una foto tuya o te amenaza, no es tu culpa. Cuéntaselo a un adulto o llama a la Línea 102.', mood: 'calma' },
    ],
    forAdult: 'Acuerden una palabra clave: si te la escribe, le pasas a buscar sin preguntas en ese momento. Hablen después, con calma. Los retos en caliente hacen que la próxima vez no te escriba.',
    evidence: 'La capacidad de resistir la influencia de los pares crece a lo largo de la adolescencia (Steinberg y Monahan, 2007). Ensayar respuestas y planear una salida son estrategias comunes de los programas de prevención, aunque solas tienen un efecto limitado.',
    caution: 'Si hay fotos íntimas difundidas, amenazas o pedidos de plata a cambio de no publicarlas, no lo resuelvan solos: guarden las pruebas, no paguen ni respondan y pidan ayuda. Pueden llamar a la Línea 102 y, si hay peligro, al 911.',
  },
  {
    id: 'limite-sin-perder-al-amigo',
    kind: 'pasos',
    title: 'Un límite sin perder al amigo',
    tagline: 'Decir «esto no me gusta» y cuidar la amistad.',
    skill: 'amabilidad',
    bands: ['10-12', '13-17'],
    minutes: 4,
    steps: [
      { text: 'Poner un límite a un amigo da miedo. Parece que lo vas a perder. Pero callar todo también gasta la amistad.', mood: 'piensa' },
      { text: 'Elige un buen momento: a solas, en persona y cuando los dos están tranquilos.', mood: 'calma' },
      { text: 'Di lo que pasó con hechos, sin insultos: «Ayer contaste lo que te dije en secreto».', mood: 'piensa' },
      { text: 'Di cómo te sentiste: «Me dio mucha bronca y vergüenza».', mood: 'calma' },
      {
        text: 'Pide algo concreto: «Lo que te cuento, quiero que quede entre nosotros».',
        mood: 'valiente',
        choice: {
          question: 'Se ríe y te dice que exageras. ¿Qué haces?',
          options: [
            { label: 'Repetir mi pedido con calma', reply: 'Bien. No hace falta que esté de acuerdo para que tu límite valga.' },
            { label: 'Decir que no pasa nada', reply: 'Se entiende que quieras evitar la pelea. Pero lo que sientes también cuenta.' },
            { label: 'Gritarle y dejar de hablarle', reply: 'La bronca tiene sentido, pero gritar suele cerrar la charla. Puedes retomarla más tarde.' },
          ],
        },
      },
      { text: 'Un buen amigo puede enojarse un rato y después respetar tu límite. Si nunca lo respeta, eso también te dice algo.', mood: 'orgullo' },
    ],
    forAdult: 'Si te cuenta un problema con un amigo, pregúntale qué quiere decirle antes de dar tu opinión. Pueden ensayar la frase juntos. Respeta que la decisión sea suya.',
    evidence: 'Sigue los pasos de DEAR MAN, la habilidad de efectividad interpersonal de la DBT para adolescentes: describir, expresar, pedir y sostener. Las amistades de buena calidad protegen el bienestar en la adolescencia (Rubin y colaboradores, 2006).',
  },
  {
    id: 'reparar-con-un-amigo',
    kind: 'pasos',
    title: 'Volver a hablar después de una pelea',
    tagline: 'Reparar una amistad sin hacer como que no pasó nada.',
    skill: 'amabilidad',
    bands: ['10-12', '13-17'],
    minutes: 4,
    steps: [
      { text: 'Pelearse con un amigo pasa en todas las amistades. Lo importante es lo que hacen después.', mood: 'calma' },
      { text: 'Primero, deja pasar un rato. En caliente es difícil hablar bien.', mood: 'calma' },
      { text: 'Piensa qué parte te toca a ti. No hace falta que sea toda la culpa.', mood: 'piensa', seconds: 15 },
      { text: 'Escríbele o búscalo: «¿Podemos hablar de lo que pasó?». Un mensaje corto abre la puerta.', mood: 'valiente' },
      {
        text: 'Cuando hablen, escucha su versión sin cortarle. Después cuenta la tuya.',
        mood: 'piensa',
        choice: {
          question: 'Tu amiga te dice que se sintió dejada de lado. ¿Qué le respondes?',
          options: [
            { label: '«Entiendo que te sentiste así»', reply: 'Muy bien. Validar lo que siente no es darle toda la razón.' },
            { label: '«Eso no es verdad»', reply: 'Quizás tú lo viviste distinto. Primero escucha, después cuenta tu versión.' },
            { label: '«Perdón por mi parte»', reply: 'Bien. Hacerte cargo de tu parte ayuda mucho a reparar.' },
          ],
        },
      },
      { text: 'Pide perdón por tu parte, sin «pero»: «Perdón por no avisarte».', mood: 'calma' },
      { text: 'Si todavía no quiere hablar, dale tiempo. Tú ya diste el primer paso.', mood: 'orgullo' },
    ],
    forAdult: 'No resuelvas la pelea por tu hijo o hija ni hables con la familia del amigo, salvo que haya acoso o violencia. Escucha y pregunta qué quiere hacer. Reparar también se aprende viéndote reparar a ti.',
    evidence: 'Los conflictos entre amigos son comunes, y aprender a resolverlos es parte del desarrollo de las amistades (Rubin y colaboradores, 2006). Suma la validación de la DBT y la idea de hacerse cargo de la propia parte.',
  },
  {
    id: 'amigo-que-esta-mal',
    kind: 'pasos',
    title: 'Cuando un amigo está mal',
    tagline: 'Escuchar, y saber cuándo avisar a un adulto.',
    skill: 'amabilidad',
    bands: ['13-17'],
    minutes: 4,
    steps: [
      { text: 'A veces un amigo o una amiga está mal y te lo cuenta a ti. Que confíe en ti es valioso.', mood: 'calma' },
      { text: 'Escucha sin apurarte a dar consejos. Puedes decir: «Te escucho. Cuéntame».', mood: 'calma' },
      { text: 'No hace falta tener la solución. Estar ahí ya ayuda mucho.', mood: 'feliz' },
      { text: 'Pregunta qué necesita: «¿Quieres que te ayude a pensar o que solo te escuche?».', mood: 'piensa' },
      {
        text: 'Hay secretos que no se guardan: si habla de morir, de lastimarse o si alguien le hace daño.',
        mood: 'piensa',
        choice: {
          question: 'Tu amiga te dice que piensa en hacerse daño y te pide que no lo cuentes. ¿Qué haces?',
          options: [
            { label: 'Contarle hoy a un adulto de confianza', reply: 'Es lo correcto. No es traicionarla: es cuidarla. Esto es mucho para cargarlo sin ayuda.' },
            { label: 'Guardar el secreto', reply: 'Se entiende que no quieras fallarle. Pero su vida importa más que el secreto. Cuéntale a un adulto.' },
            { label: 'Decirle que ya se le va a pasar', reply: 'Lo dices para ayudar, pero puede sentir que no la tomas en serio. Busca a un adulto hoy.' },
          ],
        },
      },
      { text: 'Puedes decirle: «Me importas mucho. Por eso voy a pedir ayuda a un adulto».', mood: 'valiente' },
      { text: 'Si hay peligro ya, llama al 911. También puedes llamar a la Línea 102 o usar el botón Ayuda.', mood: 'calma' },
      { text: 'Cuidar a un amigo cansa. Cuéntale a alguien cómo estás tú también.', mood: 'orgullo' },
    ],
    forAdult: 'Si tu hijo o hija te cuenta que un amigo está mal, agradécele que te lo dijo. Si hay riesgo, avisen juntos ese mismo día a la familia del amigo o a la escuela. No le pidas que cargue con eso.',
    evidence: 'Escuchar sin juzgar y buscar la ayuda de un adulto son los pasos que enseñan los programas de primeros auxilios en salud mental para adolescentes. La evidencia sobre su efecto en la conducta todavía es limitada.',
    caution: 'Si el amigo habla de morir, se lastima o sufre abuso, un adulto tiene que actuar ese mismo día. Llamen al 911 si hay peligro, al 135 (resto del país, 0800-345-1435) o a la Línea 102. También está el botón Ayuda.',
  },
  {
    id: 'antes-de-mandar',
    kind: 'pasos',
    title: 'Antes de mandar',
    tagline: 'Qué compartir y qué no en redes y en el grupo.',
    skill: 'pensar',
    bands: ['10-12', '13-17'],
    minutes: 3,
    steps: [
      { text: 'Lo que mandas o subes puede quedar para siempre. Una captura dura más que un mensaje.', mood: 'piensa' },
      { text: 'Antes de mandar, hazte tres preguntas. ¿Es cierto? ¿Puede lastimar a alguien? ¿Me molestaría que lo vea cualquiera?', mood: 'piensa' },
      { text: 'No compartas fotos de otros sin su permiso. Tampoco capturas de charlas privadas.', mood: 'piensa' },
      { text: 'Tu casa, tu escuela y dónde estás ahora son datos privados. No los subas en público.', mood: 'calma' },
      {
        text: 'En el chat del grupo se burlan de la foto de un compañero.',
        mood: 'sorpresa',
        choice: {
          question: '¿Qué podrías hacer?',
          options: [
            { label: 'No reenviarla y escribirle aparte', reply: 'Muy bien. No sumarte y acompañar a quien recibe la burla ayuda mucho.' },
            { label: 'Mandar un emoji para no quedar mal', reply: 'Se entiende la presión del grupo. Pero cada reacción hace más grande la burla.' },
            { label: 'Avisarle a un adulto si sigue', reply: 'Bien. Si la burla se repite, puede ser acoso. Contarlo es cuidar, no delatar.' },
          ],
        },
      },
      { text: 'Si tienes mucha bronca o tristeza, espera antes de mandar. Mañana puede que pienses distinto.', mood: 'calma' },
      { text: 'Si alguien te acosa o difunde algo tuyo, guarda capturas y cuéntaselo a un adulto.', mood: 'orgullo' },
    ],
    forAdult: 'Más que revisar su celular, conversen sobre casos concretos: «¿Qué harías si alguien sube una foto tuya sin permiso?». Si hay ciberacoso, guarden las pruebas antes de bloquear y hablen con la escuela.',
    evidence: 'El ciberacoso se asocia con malestar emocional en los adolescentes (Kowalski y colaboradores, 2014). Pensar antes de publicar y no sumarse a la burla son pasos que proponen los programas de convivencia digital, con evidencia todavía en desarrollo.',
  },
  {
    id: 'misiones-con-otros',
    kind: 'mision',
    title: 'Misiones con otros',
    tagline: 'Una práctica social chica para esta semana.',
    skill: 'amabilidad',
    bands: ['10-12', '13-17'],
    minutes: 3,
    intro: 'Las habilidades con otros se entrenan como un deporte: de a poco y con práctica. Elige una misión para esta semana.',
    steps: [
      { text: 'No hace falta hacer algo enorme. Una misión chica, repetida, cambia mucho.', mood: 'piensa' },
      { text: 'Elige una que te dé un poco de nervios, pero no demasiados.', mood: 'valiente' },
      { text: 'Después, nota cómo te fue. Salga como salga, lo intentaste.', mood: 'orgullo' },
    ],
    missions: [
      'Saludar por su nombre a alguien con quien casi no hablo',
      'Hacer una pregunta más en una charla',
      'Sumarme a una charla en el recreo',
      'Escribirle a alguien para proponer un plan',
      'Decir que no a algo que no quiero, con calma',
      'Escuchar a un amigo sin mirar el celular',
      'Agradecerle a alguien algo concreto que hizo',
    ],
    forAdult: 'No le preguntes cada día si cumplió la misión. Si te cuenta, interésate por cómo se sintió, no por el resultado. En la franja de 13 a 17 años, lo que escribe en la app es privado.',
    evidence: 'Practicar fuera de la sesión con tareas concretas es parte central de los programas que enseñan habilidades sociales, como PEERS (Laugeson y Frankel, 2010), y del aprendizaje socioemocional en la escuela (Durlak y colaboradores, 2011).',
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

// ---------------------------------------------------------------- caminos de aprendizaje

/**
 * Caminos: recorridos ordenados de actividades para aprender una habilidad paso a paso.
 * El chico elige el camino; el progreso es cuántas actividades del camino ya hizo alguna vez.
 */
export interface KidPath {
  id: string;
  band: AgeBand;
  title: string;
  description: string;
  skill: KidSkill;
  activities: string[];
}

export const KID_PATHS: KidPath[] = [
  // 0 a 3 (las hace el adulto)
  { id: 'bebe-vinculo', band: '0-3', title: 'Vínculo y calma', description: 'Las bases de la regulación: contacto, voz y rutinas.', skill: 'calma', activities: ['cara-a-cara', 'calma-compartida', 'cancion-y-balanceo', 'masaje-suave', 'rutina-para-dormir'] },
  { id: 'bebe-emociones', band: '0-3', title: 'Emociones desde el principio', description: 'Nombrar, esperar y acompañar los desbordes.', skill: 'emociones', activities: ['nombrar-lo-que-siente', 'imitar-animales', 'elegir-entre-dos', 'esperar-un-poquito', 'acompanar-el-berrinche'] },
  { id: 'bebe-explorar', band: '0-3', title: 'Explorar juntos', description: 'Juego, lectura y sentidos, sin pantallas.', skill: 'atencion', activities: ['juego-en-el-piso', 'leer-juntos', 'paseo-de-sentidos', 'musica-y-movimiento', 'burbujas-juntos', 'cucu-tras'] },
  { id: 'bebe-seguridad', band: '0-3', title: 'Seguridad en los cambios', description: 'Despedidas, anticipación y rituales de cierre.', skill: 'valentia', activities: ['anticipar-cambios', 'despedidas-cortas', 'cucu-tras', 'gracias-del-dia', 'partes-del-cuerpo'] },

  // 4 a 6
  { id: 'peques-calma', band: '4-6', title: 'Mi primer camino de calma', description: 'Cinco formas de respirar y calmarme.', skill: 'calma', activities: ['globo-magico', 'huele-la-flor', 'soplar-burbujas', 'respiracion-del-oso', 'tortuga'] },
  { id: 'peques-emociones', band: '4-6', title: 'Conozco mis emociones', description: 'Caras, colores y nombres para lo que siento.', skill: 'emociones', activities: ['como-me-siento', 'espejo-de-caras', 'caras-y-emociones', 'colores-de-mis-emociones', 'mano-en-el-corazon'] },
  { id: 'peques-valiente', band: '4-6', title: 'Pequeño valiente', description: 'Para cuando algo da miedo.', skill: 'valentia', activities: ['escudo-valiente', 'pasito-valiente', 'miedo-a-la-noche', 'globo-de-preocupaciones', 'congelados'] },
  { id: 'peques-amigos', band: '4-6', title: 'Amigos y amabilidad', description: 'Turnos, perdón y cosas buenas.', skill: 'amabilidad', activities: ['esperar-mi-turno', 'superpoder-amable', 'pedir-perdon-y-reparar', 'lo-mejor-del-dia', 'frasco-de-gratitud'] },

  // 7 a 9
  { id: 'medianos-calma', band: '7-9', title: 'Calma en cinco pasos', description: 'Respirar y aflojar el cuerpo.', skill: 'calma', activities: ['globo-magico', 'respiracion-estrella', 'ola-del-mar', 'espagueti', 'tortuga'] },
  { id: 'medianos-emociones', band: '7-9', title: 'Detective de emociones', description: 'Reconocer lo que siento y dónde lo siento.', skill: 'emociones', activities: ['como-me-siento', 'colores-de-mis-emociones', 'emociones-en-el-cuerpo', 'mi-cuerpo-en-alerta', 'volcan'] },
  { id: 'medianos-mente', band: '7-9', title: 'Mente valiente', description: 'Para las preocupaciones y los miedos.', skill: 'pensar', activities: ['globo-de-preocupaciones', 'cajita-preocupaciones', 'detective-de-pensamientos', 'escudo-valiente', 'miedo-a-la-noche'] },
  { id: 'medianos-amigos', band: '7-9', title: 'Buen compañero', description: 'Resolver problemas y cuidar a los demás.', skill: 'amabilidad', activities: ['semaforo', 'pedir-perdon-y-reparar', 'superpoder-amable', 'mano-en-el-corazon', 'lo-mejor-del-dia'] },

  // 10 a 12
  { id: 'pre-calma', band: '10-12', title: 'Calma para la escuela', description: 'Nervios, pruebas y momentos tensos.', skill: 'calma', activities: ['respiracion-cuadrado', 'stop', 'rayos-x', 'antes-de-una-prueba', 'hablar-frente-a-otros'] },
  { id: 'pre-mente', band: '10-12', title: 'Pensar mejor', description: 'Mirar los pensamientos sin creerles todo.', skill: 'pensar', activities: ['detective-de-pensamientos', 'chequear-los-hechos', 'pensamientos-nube', 'voz-amable', 'mente-sabia'] },
  { id: 'pre-emociones', band: '10-12', title: 'Emociones a mi favor', description: 'Señales, olas y acción opuesta.', skill: 'emociones', activities: ['como-me-siento', 'mi-cuerpo-en-alerta', 'volcan', 'ola-de-emocion', 'accion-opuesta'] },
  { id: 'pre-amigos', band: '10-12', title: 'Amistades', description: 'Pedir lo que necesito y cuidar los vínculos.', skill: 'amabilidad', activities: ['cuento-siento-pido', 'amigos-que-suman', 'cuando-me-dejan-afuera', 'pedir-perdon-y-reparar', 'diario-de-logros'] },

  // 13 a 17
  { id: 'teen-intenso', band: '13-17', title: 'Kit para momentos intensos', description: 'Bajar la intensidad sin empeorar las cosas.', skill: 'calma', activities: ['stop', 'tipp-rapido', 'respirar-tres-minutos', 'ola-de-emocion', 'accion-opuesta'] },
  { id: 'teen-mente', band: '13-17', title: 'Mi mente y yo', description: 'Hechos, interpretaciones y voz amable.', skill: 'pensar', activities: ['chequear-los-hechos', 'detective-de-pensamientos', 'pensamientos-nube', 'voz-amable', 'mente-sabia'] },
  { id: 'teen-vinculos', band: '13-17', title: 'Relaciones', description: 'Pedir, decir que no, reparar y elegir amistades.', skill: 'amabilidad', activities: ['pedir-y-decir-que-no', 'amigos-que-suman', 'cuando-me-dejan-afuera', 'pedir-perdon-y-reparar', 'pedir-ayuda'] },
  { id: 'teen-cuidarme', band: '13-17', title: 'Cuidarme', description: 'Sueño, cuerpo, redes y lo que me importa.', skill: 'cuerpo', activities: ['cuidarme-por-dentro', 'dormir-mejor', 'redes-y-yo', 'mi-brujula', 'diario-de-logros'] },
  // Caminos por situación: para un momento puntual (la noche, la escuela, un cambio en casa).
  { id: 'bebe-rutinas', band: '0-3', title: 'Rutinas del día', description: 'Lavarse, guardar, ayudar y contar el día.', skill: 'cuerpo', activities: ['cancion-para-lavarse', 'hora-de-guardar', 'ayudar-en-casa', 'cuento-de-hoy', 'rutina-para-dormir'] },
  { id: 'bebe-pensar', band: '0-3', title: 'Pequeños exploradores', description: 'Esconder, probar y tomar turnos.', skill: 'pensar', activities: ['esconder-el-juguete', 'juego-con-cajas', 'el-comentarista', 'pelota-por-turnos', 'munecos-que-sienten'] },
  { id: 'peques-noche', band: '4-6', title: 'Miedo a la noche', description: 'Para irse a dormir con más calma.', skill: 'valentia', activities: ['respiracion-del-oso', 'miedo-a-la-noche', 'dibujo-achicar-el-miedo', 'escudo-valiente', 'huele-la-flor'] },
  { id: 'peques-enojo', band: '4-6', title: 'Cuando me enojo', description: 'Frenar, respirar y arreglar lo que pasó.', skill: 'emociones', activities: ['tortuga', 'globo-magico', 'colores-de-mis-emociones', 'plan-b', 'pedir-perdon-y-reparar'] },
  { id: 'medianos-noche', band: '7-9', title: 'Miedo a la noche', description: 'Preocupaciones a la hora de dormir.', skill: 'valentia', activities: ['respiracion-del-oso', 'miedo-a-la-noche', 'cajita-preocupaciones', 'dibujo-mi-lugar-tranquilo', 'escudo-valiente'] },
  { id: 'medianos-escuela', band: '7-9', title: 'Escuela nueva', description: 'Para empezar en un lugar nuevo.', skill: 'valentia', activities: ['escalera-valiente', 'como-me-siento', 'superpoder-amable', 'plan-b', 'lo-mejor-del-dia'] },
  { id: 'medianos-enojo', band: '7-9', title: 'Cuando me enojo', description: 'Del volcán al semáforo.', skill: 'emociones', activities: ['volcan', 'tortuga', 'semaforo', 'problema-en-cuatro-pasos', 'pedir-perdon-y-reparar'] },
  { id: 'pre-pruebas', band: '10-12', title: 'Antes de una prueba', description: 'Nervios, pensamientos y plan.', skill: 'pensar', activities: ['antes-de-una-prueba', 'respiracion-cuadrado', 'lupa-o-telescopio', 'problema-en-cuatro-pasos', 'diario-de-logros'] },
  { id: 'pre-cambios', band: '10-12', title: 'Cuando algo cambia en casa', description: 'Una mudanza, una separación o alguien que llega.', skill: 'emociones', activities: ['ola-de-emocion', 'como-me-siento', 'dibujo-mi-lugar-tranquilo', 'voz-amable', 'pedir-ayuda'] },
  { id: 'teen-redes', band: '13-17', title: 'Redes y pantallas', description: 'Usarlas sin que te usen.', skill: 'atencion', activities: ['redes-y-yo', 'respirar-tres-minutos', 'abogado-de-mis-pensamientos', 'amigos-que-suman', 'dormir-mejor'] },
  { id: 'teen-con-otros', band: '13-17', title: 'Habilidades con otros', description: 'Charlar, sumarme a un grupo, poner límites, reparar y cuidar a un amigo.', skill: 'amabilidad', activities: ['charla-que-fluye', 'entrar-a-un-grupo', 'limite-sin-perder-al-amigo', 'no-a-la-presion-del-grupo', 'reparar-con-un-amigo', 'antes-de-mandar', 'amigo-que-esta-mal', 'misiones-con-otros', 'pedir-ayuda'] },
  { id: 'teen-examenes', band: '13-17', title: 'Época de exámenes', description: 'Estudiar con menos ansiedad.', skill: 'pensar', activities: ['antes-de-una-prueba', 'respiracion-cuadrado', 'lupa-o-telescopio', 'stop', 'tres-cosas-buenas'] },
];

export const KID_PATH_BY_ID = Object.fromEntries(KID_PATHS.map((p) => [p.id, p])) as Record<string, KidPath>;

export const pathsFor = (band: AgeBand) => KID_PATHS.filter((p) => p.band === band);

/** Progreso de un camino: actividades hechas alguna vez y la siguiente por hacer. */
export function pathProgress(path: KidPath, done: Set<string>) {
  const items = path.activities.map((id) => KID_ACTIVITY_BY_ID[id]).filter((a) => a && isPublished('infantil', a.id));
  const completed = items.filter((a) => done.has(a.id)).length;
  return { items, completed, total: items.length, next: items.find((a) => !done.has(a.id)) ?? null };
}
