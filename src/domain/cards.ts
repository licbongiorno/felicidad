/**
 * Mazos de Cartas Filosóficas.
 *
 * Función clínica: interrumpir la rumiación mediante autodistanciamiento y cambio de
 * perspectiva (Kross & Ayduk, 2017; Grossmann & Kross, 2014). La eficacia de las cartas
 * como intervención aislada NO está establecida: se presentan como recurso reflexivo.
 *
 * Rigor de fuentes: sólo se usan citas verificables con su localización. Cuando la
 * traducción o la formulación no es literal se marca como 'paráfrasis' o 'concepto'.
 * Se excluyeron deliberadamente frases apócrifas muy difundidas (p. ej. "entre el estímulo
 * y la respuesta hay un espacio", que no pertenece a Frankl).
 */

import { EXTRA_CARDS } from './cards-extra';

export type DeckId = 'estoicismo' | 'clasica' | 'spinoza' | 'foucault' | 'jung' | 'contemplativa' | 'psicologia';

export type TextType = 'cita' | 'paráfrasis' | 'concepto';

export interface PhilosophyCard {
  id: string;
  deck: DeckId;
  author: string;
  text: string;
  textType: TextType;
  source: string;
  /** Pregunta para desplazar la atención del contenido rumiativo al proceso. */
  reflection: string;
  /** Acción de un minuto o menos. */
  microPractice: string;
}

export const DECKS: Record<DeckId, { title: string; description: string }> = {
  estoicismo: { title: 'Estoicismo', description: 'Juicio, control y perspectiva.' },
  clasica: { title: 'Filosofía clásica', description: 'La vida buena según los antiguos.' },
  spinoza: { title: 'Spinoza', description: 'Comprender los afectos para dejar de padecerlos.' },
  foucault: { title: 'Foucault', description: 'El cuidado de sí como práctica.' },
  jung: { title: 'Psicología junguiana', description: 'Sombra, proyección e integración.' },
  contemplativa: { title: 'Contemplativa', description: 'La mente como campo de entrenamiento.' },
  psicologia: { title: 'Psicología contemporánea', description: 'Distancia, flexibilidad y sentido.' },
};

const BASE_CARDS: PhilosophyCard[] = [
  {
    id: 'epicteto-juicios',
    deck: 'estoicismo',
    author: 'Epicteto',
    text: 'No son las cosas las que perturban a los hombres, sino las opiniones que tienen sobre las cosas.',
    textType: 'cita',
    source: 'Enquiridión, 5',
    reflection: '¿Cuál es exactamente el juicio que estás añadiendo a lo que pasó?',
    microPractice: 'Escribe el hecho en una línea, sin adjetivos. Debajo, el juicio. Compara.',
  },
  {
    id: 'epicteto-dicotomia',
    deck: 'estoicismo',
    author: 'Epicteto',
    text: 'De las cosas existentes, unas dependen de nosotros y otras no dependen de nosotros.',
    textType: 'cita',
    source: 'Enquiridión, 1',
    reflection: 'De lo que te preocupa ahora, ¿qué parte depende de ti y qué parte no?',
    microPractice: 'Traza dos columnas. Invierte tu siguiente hora sólo en la primera.',
  },
  {
    id: 'marco-aurelio-juicio',
    deck: 'estoicismo',
    author: 'Marco Aurelio',
    text: 'Si te aflige algo externo, no es eso lo que te importuna, sino tu juicio sobre ello; y borrarlo ahora mismo está en tu mano.',
    textType: 'cita',
    source: 'Meditaciones, VIII, 47 (traducción libre)',
    reflection: '¿Qué ocurriría si suspendieras ese juicio durante diez minutos?',
    microPractice: 'Durante tres respiraciones, describe la situación como lo haría una cámara.',
  },
  {
    id: 'seneca-imaginacion',
    deck: 'estoicismo',
    author: 'Séneca',
    text: 'Son más las cosas que nos asustan que las que nos oprimen; sufrimos más a menudo en la imaginación que en la realidad.',
    textType: 'cita',
    source: 'Cartas a Lucilio, 13, 4',
    reflection: '¿Lo que temes está ocurriendo ahora, o es una simulación de tu mente?',
    microPractice: 'Nombra una evidencia a favor y una en contra de que el peor escenario ocurra.',
  },
  {
    id: 'marco-aurelio-vista-alta',
    deck: 'estoicismo',
    author: 'Marco Aurelio',
    text: 'Contempla desde lo alto la multitud de vidas humanas, sus afanes y sus ceremonias: tu preocupación ocupa su justo lugar entre ellas.',
    textType: 'paráfrasis',
    source: 'Meditaciones, IX, 30 (la «visión desde lo alto»)',
    reflection: '¿Cómo se vería este problema dentro de cinco años, o desde otra ciudad?',
    microPractice: 'Imagina alejar la cámara: tu habitación, tu barrio, tu país, el planeta.',
  },
  {
    id: 'seneca-tiempo',
    deck: 'estoicismo',
    author: 'Séneca',
    text: 'No es que tengamos poco tiempo, sino que perdemos mucho.',
    textType: 'cita',
    source: 'Sobre la brevedad de la vida, 1, 3',
    reflection: '¿En qué se te va hoy el tiempo que no elegiste conscientemente?',
    microPractice: 'Elige una actividad de los próximos 30 minutos y hazla con atención completa.',
  },
  {
    id: 'marco-aurelio-obstaculo',
    deck: 'estoicismo',
    author: 'Marco Aurelio',
    text: 'El impedimento para la acción hace avanzar la acción. Lo que se interpone en el camino se convierte en el camino.',
    textType: 'cita',
    source: 'Meditaciones, V, 20 (traducción libre)',
    reflection: '¿Qué te está pidiendo aprender el obstáculo que tienes delante?',
    microPractice: 'Escribe el obstáculo y, debajo, una cualidad que podrías ejercitar gracias a él.',
  },
  {
    id: 'marco-aurelio-retiro',
    deck: 'estoicismo',
    author: 'Marco Aurelio',
    text: 'Buscan retiros en el campo, en la costa, en el monte. Pero en ningún lugar se retira el hombre con más tranquilidad que en su propia alma.',
    textType: 'paráfrasis',
    source: 'Meditaciones, IV, 3',
    reflection: '¿Dónde está, dentro de ti, ese lugar de retiro?',
    microPractice: 'Tres respiraciones lentas con los ojos cerrados, aquí mismo.',
  },
  {
    id: 'spinoza-idea-clara',
    deck: 'spinoza',
    author: 'Baruch Spinoza',
    text: 'Un afecto que es una pasión deja de ser pasión tan pronto como nos formamos de él una idea clara y distinta.',
    textType: 'cita',
    source: 'Ética, V, proposición 3',
    reflection: '¿Puedes describir esta emoción con precisión: causa, sensación, impulso?',
    microPractice: 'Completa: «Siento ___ porque interpreto ___, y me impulsa a ___».',
  },
  {
    id: 'spinoza-afecto-contrario',
    deck: 'spinoza',
    author: 'Baruch Spinoza',
    text: 'Un afecto no puede ser reprimido ni suprimido sino por un afecto contrario y más fuerte que el afecto que ha de ser reprimido.',
    textType: 'cita',
    source: 'Ética, IV, proposición 7',
    reflection: 'Si no puedes suprimir lo que sientes, ¿qué afecto contrario podrías cultivar?',
    microPractice: 'Abre el módulo de Antídotos y prueba el que corresponde a esta emoción.',
  },
  {
    id: 'spinoza-entender',
    deck: 'spinoza',
    author: 'Baruch Spinoza',
    text: 'He procurado con esmero no ridiculizar, ni lamentar, ni detestar las acciones humanas, sino entenderlas.',
    textType: 'cita',
    source: 'Tratado político, I, §4',
    reflection: '¿Qué entenderías si miraras esta situación —o a ti— con curiosidad en vez de juicio?',
    microPractice: 'Escribe tres causas posibles de lo ocurrido que no sean «es malo» o «soy malo».',
  },
  {
    id: 'spinoza-beatitud',
    deck: 'spinoza',
    author: 'Baruch Spinoza',
    text: 'La beatitud no es el premio de la virtud, sino la virtud misma.',
    textType: 'cita',
    source: 'Ética, V, proposición 42',
    reflection: '¿Qué estás haciendo hoy sólo por la recompensa, que podría valer por sí mismo?',
    microPractice: 'Haz algo bueno sin contarlo a nadie.',
  },
  {
    id: 'spinoza-vida',
    deck: 'spinoza',
    author: 'Baruch Spinoza',
    text: 'El hombre libre en nada piensa menos que en la muerte, y su sabiduría no es una meditación de la muerte, sino de la vida.',
    textType: 'cita',
    source: 'Ética, IV, proposición 67',
    reflection: 'Si tu preocupación fuera una meditación sobre la vida, ¿qué te pediría hacer?',
    microPractice: 'Nombra algo vivo a tu alrededor (una planta, una voz, tu respiración) y obsérvalo diez segundos.',
  },
  {
    id: 'foucault-obra-de-arte',
    deck: 'foucault',
    author: 'Michel Foucault',
    text: '¿Por qué no podría la vida de cada uno convertirse en una obra de arte?',
    textType: 'paráfrasis',
    source: 'Sobre la genealogía de la ética (entrevista, 1983)',
    reflection: 'Si tu día fuera una obra que estás componiendo, ¿qué gesto le falta?',
    microPractice: 'Cambia un detalle de tu rutina de hoy por elección estética, no por eficiencia.',
  },
  {
    id: 'foucault-tecnologias',
    deck: 'foucault',
    author: 'Michel Foucault',
    text: 'Las tecnologías del yo permiten a los individuos efectuar, por sus propios medios o con ayuda de otros, operaciones sobre su cuerpo, su alma, sus pensamientos y su conducta, para transformarse y alcanzar cierto estado de felicidad, sabiduría o serenidad.',
    textType: 'paráfrasis',
    source: 'Tecnologías del yo (1988)',
    reflection: '¿Qué práctica pequeña y repetida está dando forma a quien eres hoy?',
    microPractice: 'Elige una práctica del Gimnasio para mañana a la misma hora que hoy.',
  },
  {
    id: 'foucault-cuidado',
    deck: 'foucault',
    author: 'Michel Foucault',
    text: 'En la Antigüedad, el «cuidado de sí» no era un repliegue egoísta sino un trabajo sobre uno mismo que transformaba la relación con los otros y con la verdad.',
    textType: 'concepto',
    source: 'La hermenéutica del sujeto, curso 1981–1982',
    reflection: '¿Tu forma de cuidarte hoy te acerca o te aleja de los demás?',
    microPractice: 'Haz algo por tu cuerpo que también beneficie a otra persona (caminar con alguien, cocinar para dos).',
  },
  {
    id: 'jung-destino',
    deck: 'jung',
    author: 'Carl G. Jung',
    text: 'Cuando una situación interior no se hace consciente, sucede afuera, como destino.',
    textType: 'paráfrasis',
    source: 'Aion, Obra completa 9/2, §126',
    reflection: '¿Se repite en tu vida alguna escena con distintos actores?',
    microPractice: 'Anota el patrón en una frase. Sólo verlo ya es un primer movimiento.',
  },
  {
    id: 'jung-sombra',
    deck: 'jung',
    author: 'Carl G. Jung',
    text: 'La sombra reúne lo que no aceptamos de nosotros mismos; a menudo la encontramos primero en lo que nos irrita intensamente de los demás.',
    textType: 'concepto',
    source: 'Concepto de sombra y proyección, p. ej. Aion, cap. 2',
    reflection: 'Lo que más te molesta de alguien hoy, ¿existe en alguna forma en ti?',
    microPractice: 'Nombra el rasgo. Luego, nombra un contexto en el que ese rasgo podría tener algo valioso.',
  },
  {
    id: 'jung-individuacion',
    deck: 'jung',
    author: 'Carl G. Jung',
    text: 'La individuación es el proceso de llegar a ser el que uno es: no un ideal perfecto, sino una totalidad que integra también lo rechazado.',
    textType: 'concepto',
    source: 'Concepto de individuación, p. ej. Las relaciones entre el yo y el inconsciente (1928)',
    reflection: '¿Qué parte de ti estás intentando no ser?',
    microPractice: 'Nombra esa parte con amabilidad, como a un personaje. ¿Qué necesita?',
  },
  {
    id: 'jung-persona',
    deck: 'jung',
    author: 'Carl G. Jung',
    text: 'La persona es la máscara con la que nos adaptamos al mundo. Es necesaria, pero se vuelve una prisión cuando la confundimos con quien somos.',
    textType: 'concepto',
    source: 'Concepto de persona, Las relaciones entre el yo y el inconsciente (1928)',
    reflection: '¿Qué máscara llevas hoy? ¿Te sirve o te pesa?',
    microPractice: 'Durante una conversación de hoy, di algo que realmente piensas con suavidad.',
  },
  {
    id: 'shantideva-ira',
    deck: 'contemplativa',
    author: 'Shantideva',
    text: 'Si hay remedio, ¿por qué enfadarse? Y si no hay remedio, ¿de qué sirve enfadarse?',
    textType: 'paráfrasis',
    source: 'Bodhicaryāvatāra, VI, 10',
    reflection: '¿Tu situación tiene remedio? Entonces, ¿cuál es el primer paso? ¿No lo tiene? Entonces, ¿qué puedes soltar?',
    microPractice: 'Responde con una sola frase a cada pregunta.',
  },
  {
    id: 'ricard-manera-de-ser',
    deck: 'contemplativa',
    author: 'Matthieu Ricard',
    text: 'La felicidad no es una sucesión ininterrumpida de experiencias placenteras, sino una manera de ser que se cultiva con el entrenamiento de la mente.',
    textType: 'paráfrasis',
    source: 'En defensa de la felicidad (2003)',
    reflection: '¿Qué cualidad de tu manera de ser quieres cultivar este mes?',
    microPractice: 'Elige una práctica del Gimnasio que entrene esa cualidad y agéndala.',
  },
  {
    id: 'ricard-nube',
    deck: 'contemplativa',
    author: 'Matthieu Ricard',
    text: 'Observa la ira en lugar de a quien la provoca: como una nube de tormenta, vista de cerca se vuelve niebla y no puede sostenerte ni golpearte.',
    textType: 'paráfrasis',
    source: 'En defensa de la felicidad (2003), sobre las emociones aflictivas',
    reflection: 'Si miras directamente la emoción que sientes, ¿qué forma tiene?',
    microPractice: 'Describe la emoción con tres cualidades sensoriales (temperatura, peso, movimiento).',
  },
  {
    id: 'kabat-zinn-atencion',
    deck: 'contemplativa',
    author: 'Jon Kabat-Zinn',
    text: 'Mindfulness significa prestar atención de un modo particular: deliberadamente, en el momento presente y sin juzgar.',
    textType: 'cita',
    source: 'Wherever You Go, There You Are (1994)',
    reflection: 'De esas tres condiciones, ¿cuál te cuesta más ahora mismo?',
    microPractice: 'Durante un minuto, nota sonidos sin nombrar si te gustan o no.',
  },
  {
    id: 'act-pensamientos',
    deck: 'psicologia',
    author: 'Terapia de Aceptación y Compromiso',
    text: 'Tienes pensamientos, pero no eres tus pensamientos. Un pensamiento es un evento mental, no un hecho ni una orden.',
    textType: 'concepto',
    source: 'Hayes, Strosahl & Wilson (2012), defusión cognitiva',
    reflection: '¿Qué pensamiento te está dando órdenes ahora mismo?',
    microPractice: 'Repítelo en voz alta muy lento, o con voz de dibujo animado, durante 30 segundos.',
  },
  {
    id: 'kross-tercera-persona',
    deck: 'psicologia',
    author: 'Ethan Kross',
    text: 'Hablarse a uno mismo en tercera persona, usando el propio nombre, crea distancia psicológica y reduce la reactividad emocional.',
    textType: 'concepto',
    source: 'Kross et al. (2014), Journal of Personality and Social Psychology, 106(2), 304–324',
    reflection: '¿Qué consejo le darías a [tu nombre] en esta situación?',
    microPractice: 'Escribe dos líneas dirigidas a ti por tu nombre: «___, lo que estás sintiendo es…».',
  },
  {
    id: 'nietzsche-porque',
    deck: 'psicologia',
    author: 'Friedrich Nietzsche (citado por Viktor Frankl)',
    text: 'Si tenemos nuestro porqué de la vida, nos avenimos a casi cualquier cómo.',
    textType: 'cita',
    source: 'Crepúsculo de los ídolos, «Sentencias y flechas», 12; retomada en El hombre en busca de sentido',
    reflection: '¿Cuál es tu «porqué» en la situación difícil que atraviesas?',
    microPractice: 'Escribe tu porqué en una línea y déjalo visible hoy.',
  },
  {
    id: 'gross-reevaluacion',
    deck: 'psicologia',
    author: 'James Gross',
    text: 'Cambiar cómo interpretamos una situación antes de que la emoción se dispare cuesta menos, y funciona mejor, que suprimir la emoción una vez desatada.',
    textType: 'concepto',
    source: 'Gross (1998), modelo de procesos de regulación emocional',
    reflection: '¿Qué otra interpretación igualmente plausible tiene lo que te pasó?',
    microPractice: 'Escribe tres interpretaciones distintas del mismo hecho.',
  },
  {
    id: 'frankl-actitud',
    deck: 'psicologia',
    author: 'Viktor Frankl',
    text: 'Al hombre se le puede arrebatar todo salvo una cosa: la última de las libertades humanas, la elección de la actitud personal ante un conjunto de circunstancias.',
    textType: 'cita',
    source: 'El hombre en busca de sentido (1946)',
    reflection: 'Si no puedes cambiar la circunstancia, ¿qué actitud quieres elegir ante ella?',
    microPractice: 'Nombra el valor que esa actitud expresaría (paciencia, dignidad, ternura…).',
  },
];

export const CARDS: PhilosophyCard[] = [...BASE_CARDS, ...EXTRA_CARDS];
