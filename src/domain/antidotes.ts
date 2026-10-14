import type { AfflictiveEmotionId, Antidote, GuidedStep, Reference } from './types';
import { EXTRA_ANTIDOTES } from './antidotes-extra';
import { MORE_ANTIDOTES } from './antidotes-more';

/**
 * Módulo de Antídotos Cognitivos.
 *
 * Premisa contemplativa (Ricard, 2003): dos estados mentales opuestos —p. ej. el deseo
 * de dañar y el deseo de que alguien esté bien— no pueden ocupar la mente en el mismo
 * instante respecto del mismo objeto; cultivar uno desplaza al otro.
 *
 * Su traducción empírica más cercana:
 *  - Etiquetado afectivo: nombrar la emoción reduce la reactividad límbica (Lieberman et al., 2007).
 *  - "Undoing hypothesis": la emoción positiva acelera la recuperación de la activación negativa
 *    (Fredrickson & Levenson, 1998).
 *  - Autodistanciamiento: observar la experiencia desde fuera reduce la reactividad (Kross & Ayduk, 2017).
 *  - Spinoza, Ética IV, prop. 7: un afecto sólo se reprime por un afecto contrario y más fuerte.
 *
 * Todas las secuencias siguen la misma estructura:
 * reconocer → observar sin fusión → generar el estado incompatible → integrar.
 */

const LABELING: Reference = {
  citation:
    'Lieberman, M. D., Eisenberger, N. I., Crockett, M. J., et al. (2007). Putting feelings into words: Affect labeling disrupts amygdala activity in response to affective stimuli. Psychological Science, 18(5), 421–428.',
  doi: '10.1111/j.1467-9280.2007.01916.x',
};

const UNDOING: Reference = {
  citation:
    'Fredrickson, B. L., & Levenson, R. W. (1998). Positive emotions speed recovery from the cardiovascular sequelae of negative emotions. Cognition and Emotion, 12(2), 191–220.',
  doi: '10.1080/026999398379718',
};

const DISTANCING: Reference = {
  citation:
    'Kross, E., & Ayduk, O. (2017). Self-distancing: Theory, research, and current directions. Advances in Experimental Social Psychology, 55, 81–136.',
  doi: '10.1016/bs.aesp.2016.10.002',
};

const RICARD: Reference = {
  citation: 'Ricard, M. (2005). En defensa de la felicidad. Urano. (Orig. Plaidoyer pour le bonheur, 2003).',
  note: 'Fuente de la lógica de antídotos; texto contemplativo, no empírico.',
};

/**
 * Paso de estabilización que se antepone cuando la intensidad es ≥ 8/10.
 * A intensidades muy altas el trabajo cognitivo es poco accesible; primero se baja
 * la activación fisiológica (respiración lenta ~6/min; Zaccaro et al., 2018).
 */
export const STABILIZATION_STEP: GuidedStep = {
  title: 'Estabilizar',
  instruction:
    'Antes de trabajar con la emoción, baja la activación: inhala por la nariz durante 4 segundos y exhala lentamente durante 6. Sigue el círculo.',
  durationSec: 90,
  kind: 'breath',
};

export const STABILIZATION_THRESHOLD = 8;

const BASE_ANTIDOTES: Antidote[] = [
  {
    emotionId: 'ira',
    emotionLabel: 'Ira',
    markers: 'Calor, tensión en mandíbula o puños, impulso de atacar o de tener razón.',
    antidoteName: 'Paciencia y benevolencia',
    incompatibility:
      'La ira sostiene el deseo de que el otro sufra o pierda. El deseo genuino de que esté bien —aunque se rechace su conducta— no puede coexistir con ella en el mismo instante.',
    evidenceLevel: 'moderada',
    evidence: [LABELING, DISTANCING, UNDOING, RICARD],
    trainingPracticeId: 'amor-altruista',
    science: [
      'Nombrar la emoción («esto es ira») reduce la actividad de la amígdala y aumenta la de la corteza prefrontal ventrolateral, una región implicada en la regulación (Lieberman et al., 2007). Es el primer freno.',
      'Mirar la escena «desde lejos» (autodistanciamiento) reduce la intensidad de la ira y la agresividad posterior, a diferencia de revivirla en primera persona, que la mantiene (Kross & Ayduk, 2017).',
      'Ricard propone mirar la ira misma en lugar de su objeto: la emoción, observada directamente, se revela como un fenómeno cambiante y pierde parte de su solidez. Desear el bien a quien nos dañó no implica aprobar su acto: separa la persona de la conducta.',
    ],
    whenNot:
      'Si sufres abuso o estás en peligro, tu enfado puede ser una señal de que necesitas protegerte. Este ejercicio no te pide aguantar lo que no se debe aguantar. Te ayuda a responder con calma y firmeza.',
    steps: [
      { title: 'Nombrar', instruction: 'Di internamente: «esto es ira». Nota dónde está en el cuerpo y con qué intensidad.', durationSec: 45 },
      { title: 'Mirar la ira, no su objeto', instruction: 'Deja por un momento a la persona o la situación. Observa la ira misma: ¿tiene forma, color, centro? Mírala como a una nube.', durationSec: 90 },
      { title: 'Ampliar el encuadre', instruction: 'Imagina la escena vista desde lejos, como un observador neutral. ¿Qué causas y condiciones llevaron al otro a actuar así?', durationSec: 90 },
      { title: 'Generar el antídoto', instruction: 'Esa persona, como tú, quiere evitar el sufrimiento y suele equivocarse al buscarlo. Sin justificar el acto, prueba a desearle claridad y bienestar.', durationSec: 120 },
      { title: 'Elegir la respuesta', instruction: 'Con algo más de espacio interior: ¿cuál sería una respuesta firme y no dañina, si hace falta alguna?', durationSec: 60, kind: 'reflection' },
    ],
  },
  {
    emotionId: 'envidia',
    emotionLabel: 'Envidia',
    markers: 'Comparación, sensación de pérdida o injusticia ante el logro o la felicidad ajena.',
    antidoteName: 'Regocijo empático',
    incompatibility:
      'La envidia resiente el bien del otro; el regocijo (mudita) se alegra de él. Alegrarse sinceramente del bien ajeno cancela, en ese momento, la comparación.',
    evidenceLevel: 'contemplativa',
    evidence: [
      LABELING,
      {
        citation:
          'Gable, S. L., Reis, H. T., Impett, E. A., & Asher, E. R. (2004). What do you do when things go right? The intrapersonal and interpersonal benefits of sharing positive events. Journal of Personality and Social Psychology, 87(2), 228–245.',
        doi: '10.1037/0022-3514.87.2.228',
        note: 'Evidencia indirecta: beneficios de responder activamente al bien ajeno.',
      },
      RICARD,
    ],
    trainingPracticeId: 'regocijo-empatico',
    science: [
      'La envidia surge de la comparación social ascendente: medirse con quien parece estar mejor. Es automática y universal; lo que podemos entrenar es qué hacemos después.',
      'El regocijo empático (mudita) es una de las cuatro cualidades inconmensurables de la tradición budista. Su evidencia directa es escasa, pero la investigación sobre «capitalización» muestra que responder con entusiasmo genuino al bien ajeno mejora el vínculo y el bienestar de ambos (Gable et al., 2004).',
      'Reformular la envidia como información («¿qué me muestra sobre lo que deseo?») la convierte de amenaza en dirección: un puente hacia la clarificación de valores.',
    ],
    whenNot:
      'A veces la envidia señala algo injusto de verdad, como un trato desigual en el trabajo. En ese caso, además de calmarte, puede hacer falta actuar para cambiar la situación.',
    steps: [
      { title: 'Nombrar', instruction: 'Reconoce: «esto es envidia». No necesitas avergonzarte; es una emoción humana muy común.', durationSec: 45 },
      { title: 'Ver la comparación', instruction: 'Identifica la frase que tu mente repite («yo debería…», «no es justo…»). Obsérvala como un pensamiento, no como un hecho.', durationSec: 90 },
      { title: 'La historia completa', instruction: 'Considera lo que no ves de la vida del otro: esfuerzos, pérdidas, miedos. Su bien no reduce el tuyo.', durationSec: 90 },
      { title: 'Generar el antídoto', instruction: 'Prueba a alegrarte de su bien como si fuera de alguien querido: «me alegra que te vaya bien». Aunque al principio sea sólo intención, sostenla.', durationSec: 120 },
      { title: 'Información útil', instruction: 'La envidia a veces señala algo que valoras. ¿Qué te muestra sobre lo que quieres cultivar en tu vida?', durationSec: 60, kind: 'reflection' },
    ],
  },
  {
    emotionId: 'apego',
    emotionLabel: 'Deseo compulsivo o apego',
    markers: 'Urgencia, pensamiento estrechado sobre un objeto, sensación de «lo necesito ya».',
    antidoteName: 'Surfear el impulso e impermanencia',
    incompatibility:
      'El apego percibe el objeto como permanente y fuente segura de felicidad. Observar el impulso como ola que sube y baja, y ver la transitoriedad del objeto, contradice esa percepción.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Bowen, S., & Marlatt, A. (2009). Surfing the urge: Brief mindfulness-based intervention for college student smokers. Psychology of Addictive Behaviors, 23(4), 666–671.',
        doi: '10.1037/a0017127',
      },
      LABELING,
      RICARD,
    ],
    trainingPracticeId: 'surfear-impulso',
    science: [
      'Un impulso tiene forma de ola: sube, alcanza un pico y desciende, normalmente en minutos, si no se alimenta con la acción. «Surfear el impulso» consiste en observarlo sin obedecerlo ni combatirlo.',
      'En un ensayo con fumadores, una breve instrucción en surfear el impulso redujo el consumo de cigarrillos en la semana siguiente frente al grupo control (Bowen & Marlatt, 2009).',
      'La reflexión sobre la impermanencia es el antídoto contemplativo clásico del apego: ver que el objeto deseado, y la satisfacción que promete, también pasan.',
    ],
    whenNot:
      'Si tienes una adicción, este ejercicio ayuda, pero no basta. Pide también ayuda a un equipo que trate adicciones.',
    steps: [
      { title: 'Nombrar', instruction: 'Reconoce: «esto es un impulso». Nota que es una sensación, no una orden.', durationSec: 45 },
      { title: 'Surfear la ola', instruction: 'Localiza el impulso en el cuerpo. Obsérvalo crecer, alcanzar su pico y comenzar a bajar, sin actuar. Usa la respiración como tabla.', durationSec: 150, kind: 'breath' },
      { title: 'Impermanencia', instruction: 'Recuerda otra vez que sentiste esta urgencia. ¿Cuánto duró la satisfacción? ¿Dónde está ahora?', durationSec: 90, kind: 'reflection' },
      { title: 'Generar el antídoto', instruction: 'Nota la libertad que hay en no tener que obedecer. Descansa en ese espacio unos instantes.', durationSec: 60, kind: 'silence' },
    ],
  },
  {
    emotionId: 'autocritica',
    emotionLabel: 'Autocrítica',
    markers: 'Voz interna dura que te reprocha y exige, sensación de ser insuficiente.',
    antidoteName: 'Autocompasión',
    incompatibility:
      'La autocrítica activa un sistema de amenaza dirigido hacia uno mismo; la autocompasión activa un sistema de cuidado. Tratarse como a un amigo en dificultad interrumpe el ataque.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Kirby, J. N., Tellegen, C. L., & Steindl, S. R. (2017). A meta-analysis of compassion-based interventions: Current state of knowledge and future directions. Behavior Therapy, 48(6), 778–792.',
        doi: '10.1016/j.beth.2017.06.003',
      },
      {
        citation:
          'Neff, K. D., & Germer, C. K. (2013). A pilot study and randomized controlled trial of the mindful self-compassion program. Journal of Clinical Psychology, 69(1), 28–44.',
        doi: '10.1002/jclp.21923',
      },
      LABELING,
    ],
    trainingPracticeId: 'pausa-autocompasion',
    science: [
      'Paul Gilbert describe tres sistemas de regulación emocional: amenaza, logro y cuidado. La autocrítica activa el de amenaza contra uno mismo: eres a la vez el atacante y el atacado.',
      'La autocompasión activa el sistema de cuidado y tiene evidencia metaanalítica en la reducción de la autocrítica, la ansiedad y la depresión (Kirby et al., 2017).',
      'Contrariamente a la intuición, tratarse con amabilidad tras un error aumenta la motivación para repararlo, porque disminuye el miedo al fracaso que lleva a evitar el problema.',
    ],
    whenNot:
      'Si la vergüenza viene de un trauma, ser amable contigo puede doler al principio. Es normal. Ve despacio y habla de esto con tu terapeuta.',
    steps: [
      { title: 'Nombrar', instruction: 'Reconoce: «este es un momento de sufrimiento». Observa el tono de la voz crítica, como si escucharas una radio.', durationSec: 60 },
      { title: 'Humanidad compartida', instruction: 'Muchísimas personas sienten exactamente esto. Equivocarse y sentirse insuficiente es parte de la condición humana, no una falla tuya.', durationSec: 90 },
      { title: 'Gesto de cuidado', instruction: 'Si te resulta cómodo, apoya una mano en el pecho. Nota su calor.', durationSec: 45 },
      { title: 'Generar el antídoto', instruction: '¿Qué le dirías a un buen amigo en tu misma situación? Dítelo a ti, con el mismo tono.', durationSec: 120, kind: 'reflection' },
    ],
  },
  {
    emotionId: 'ansiedad',
    emotionLabel: 'Ansiedad',
    markers: 'Inquietud difusa, anticipación de amenaza, pulso acelerado, «¿y si…?».',
    antidoteName: 'Aceptación y presencia',
    incompatibility:
      'La ansiedad se alimenta de la lucha por eliminarla y del desplazamiento al futuro. Permitir la sensación en el presente, sin controlarla, retira ese combustible.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Eifert, G. H., & Heffner, M. (2003). The effects of acceptance versus control contexts on avoidance of panic-related symptoms. Journal of Behavior Therapy and Experimental Psychiatry, 34(3–4), 293–312.',
        doi: '10.1016/j.jbtep.2003.11.001',
      },
      {
        citation:
          'Zaccaro, A., Piarulli, A., Laurino, M., et al. (2018). How breath-control can change your life: A systematic review on psycho-physiological correlates of slow breathing. Frontiers in Human Neuroscience, 12, 353.',
        doi: '10.3389/fnhum.2018.00353',
      },
      LABELING,
    ],
    trainingPracticeId: 'respiracion-resonante',
    science: [
      'Intentar suprimir la ansiedad suele aumentarla: el esfuerzo de control se convierte en otra señal de amenaza. En el estudio de Eifert y Heffner (2003), las personas que recibieron una instrucción de aceptación ante síntomas de pánico inducidos evitaron menos y reportaron menos miedo que las que intentaron controlarlos.',
      'La exhalación lenta activa el freno vagal y reduce la activación fisiológica, lo que vuelve más accesible el trabajo atencional (Zaccaro et al., 2018).',
      'El anclaje sensorial en el presente (ver, oír) devuelve la atención desde el escenario futuro imaginado al aquí y ahora, donde la amenaza suele no estar ocurriendo.',
    ],
    whenNot:
      'Si notas algo nuevo o muy fuerte en el cuerpo, como dolor en el pecho o falta de aire que no pasa, ve primero al médico.',
    steps: [
      { title: 'Nombrar', instruction: 'Reconoce: «esto es ansiedad». Distingue sensaciones (pulso, respiración) de pensamientos («¿y si…?»).', durationSec: 45 },
      { title: 'Respiración lenta', instruction: 'Exhala más largo de lo que inhalas. Sigue el círculo.', durationSec: 90, kind: 'breath' },
      { title: 'Permitir', instruction: 'Elige la sensación más intensa. En lugar de empujarla, hazle espacio: «puedo sentir esto». Observa sus bordes y cómo cambia.', durationSec: 120 },
      { title: 'Aquí y ahora', instruction: 'Nombra cinco cosas que ves y tres que oyes. Este momento, en este lugar, ¿es manejable?', durationSec: 60 },
    ],
  },
  {
    emotionId: 'rumiacion',
    emotionLabel: 'Rumiación',
    markers: 'Pensamiento en bucle sobre «por qué», repasar escenas, sensación de no avanzar.',
    antidoteName: 'Defusión y pensamiento concreto',
    incompatibility:
      'La rumiación es abstracta y evaluativa («¿por qué siempre me pasa?»). Observar el pensamiento como evento y pasar a un modo concreto («¿qué paso puedo dar?») son modos de procesamiento incompatibles con ella.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Watkins, E. R. (2008). Constructive and unconstructive repetitive thought. Psychological Bulletin, 134(2), 163–206.',
        doi: '10.1037/0033-2909.134.2.163',
      },
      {
        citation:
          'Watkins, E. R., Baeyens, C. B., & Read, R. (2009). Concreteness training reduces dysphoria: Proof-of-principle for repeated cognitive bias modification in depression. Journal of Abnormal Psychology, 118(1), 55–64.',
        doi: '10.1037/a0013642',
      },
      {
        citation:
          'Masuda, A., Hayes, S. C., Sackett, C. F., & Twohig, M. P. (2004). Cognitive defusion and self-relevant negative thoughts: Examining the impact of a ninety year old technique. Behaviour Research and Therapy, 42(4), 477–485.',
        doi: '10.1016/j.brat.2003.10.008',
      },
    ],
    trainingPracticeId: 'pajaros-en-el-cielo',
    science: [
      'Edward Watkins distingue dos modos de pensamiento repetitivo: abstracto-evaluativo («¿por qué siempre me pasa?») y concreto-experiencial («¿cómo pasó? ¿qué hago ahora?»). El primero mantiene la depresión; el segundo facilita la resolución de problemas (Watkins, 2008).',
      'Entrenar el modo concreto reduce la disforia en personas con tendencia depresiva (Watkins et al., 2009).',
      'La defusión («estoy teniendo el pensamiento de que…») reduce la credibilidad del contenido sin necesidad de discutirlo (Masuda et al., 2004).',
    ],
    whenNot:
      'Si pasas varias horas al día dándole vueltas a las cosas, o te sientes sin esperanza, pide ayuda a un profesional. Es un síntoma que se puede tratar.',
    steps: [
      { title: 'Nombrar el bucle', instruction: 'Resume el bucle en una frase y antepón: «estoy teniendo el pensamiento de que…».', durationSec: 60, kind: 'reflection' },
      { title: 'Distancia', instruction: 'Imagina esa frase escrita en un cartel que pasa lentamente. Puedes leerlo sin subirte a él.', durationSec: 90 },
      { title: 'De «por qué» a «cómo»', instruction: '¿Cómo se desarrolló concretamente la situación, paso a paso? ¿Qué detalle sensorial recuerdas?', durationSec: 90, kind: 'reflection' },
      { title: 'Generar el antídoto', instruction: 'Elige una acción concreta y pequeña, o decide conscientemente posponer el tema hasta un momento definido.', durationSec: 60, kind: 'reflection' },
    ],
  },
  {
    emotionId: 'resentimiento',
    emotionLabel: 'Resentimiento',
    markers: 'Revivir una ofensa pasada, deseo de que el otro pague, amargura que vuelve al recordar.',
    antidoteName: 'Perdón como liberación',
    incompatibility:
      'El resentimiento mantiene vivo el agravio repitiéndolo. El perdón, entendido como soltar el deseo de revancha y no como reconciliarse ni justificar, interrumpe esa repetición.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Wade, N. G., Hoyt, W. T., Kidwell, J. E. M., & Worthington, E. L. (2014). Efficacy of psychotherapeutic interventions to promote forgiveness: A meta-analysis. Journal of Consulting and Clinical Psychology, 82(1), 154–170.',
        doi: '10.1037/a0035268',
      },
      DISTANCING,
      RICARD,
    ],
    trainingPracticeId: 'perdon-reach',
    science: [
      'Un metaanálisis de 54 estudios encontró que las intervenciones de perdón reducen la depresión y la ansiedad y aumentan la esperanza, con efectos proporcionales al tiempo dedicado (Wade et al., 2014).',
      'El modelo REACH de Everett Worthington, uno de los más estudiados, incluye recordar la ofensa sin victimizarse, empatizar con el ofensor, ofrecer el perdón como un regalo, comprometerse con él y sostenerlo.',
      'Perdonar no es olvidar, reconciliarse ni dejar de poner límites. Es una decisión interna que libera a quien perdona del costo de cargar el agravio.',
    ],
    whenNot:
      'No es el momento si el daño sigue ocurriendo, o si otros te exigen perdonar. Primero, tu seguridad y tus límites. El perdón, si llega, es una decisión tuya.',
    steps: [
      { title: 'Nombrar', instruction: 'Reconoce: «esto es resentimiento». Nota cuánta energía consume cargar con él.', durationSec: 45 },
      { title: 'Recordar sin revivir', instruction: 'Describe la ofensa en tercera persona, como un narrador neutral, en una o dos frases.', durationSec: 90, kind: 'reflection' },
      { title: 'Comprender', instruction: 'Sin justificarlo: ¿qué miedo, dolor o ignorancia pudo llevar a esa persona a actuar así?', durationSec: 120, kind: 'reflection' },
      { title: 'Generar el antídoto', instruction: 'Prueba a decir internamente: «suelto el deseo de que sufras por esto. Me libero de cargarlo». Aunque sea sólo por hoy.', durationSec: 90 },
      { title: 'Límite', instruction: '¿Hay algún límite que necesites poner para cuidarte? Perdonar y protegerse no se excluyen.', durationSec: 60, kind: 'reflection' },
    ],
  },
  {
    emotionId: 'desanimo',
    emotionLabel: 'Desánimo o apatía',
    markers: 'Falta de energía y de ganas, todo parece cuesta arriba, tendencia a aislarse o quedarse en la cama.',
    antidoteName: 'Activación conductual',
    incompatibility:
      'El desánimo espera a tener ganas para actuar; la activación invierte el orden: la acción pequeña y elegida genera, después, algo de energía y sentido. Esperar alimenta la inercia; moverse la rompe.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Cuijpers, P., van Straten, A., & Warmerdam, L. (2007). Behavioral activation treatments of depression: A meta-analysis. Clinical Psychology Review, 27(3), 318–326.',
        doi: '10.1016/j.cpr.2006.11.001',
      },
      {
        citation:
          'Ekers, D., Webster, L., Van Straten, A., et al. (2014). Behavioural activation for depression; an update of meta-analysis of effectiveness and sub group analysis. PLoS ONE, 9(6), e100100.',
        doi: '10.1371/journal.pone.0100100',
      },
    ],
    trainingPracticeId: 'activacion-conductual',
    science: [
      'La activación conductual es uno de los tratamientos psicológicos con mejor evidencia para la depresión: los metaanálisis la sitúan a la par de la terapia cognitiva completa (Cuijpers et al., 2007; Ekers et al., 2014).',
      'Su lógica: el desánimo reduce la actividad, la menor actividad reduce las fuentes de refuerzo (placer, logro, conexión) y eso profundiza el desánimo. Romper el ciclo empieza por la conducta, no por la motivación.',
      'La clave es que la acción sea pequeña, concreta y conectada con algo que valoras. «Ordenar la casa» paraliza; «lavar tres platos» es posible.',
    ],
    whenNot:
      'Pide ayuda a un profesional si el desánimo dura más de dos semanas. También si duermes o comes muy distinto, si no puedes con tu día o si pierdes la esperanza. Puede ser una depresión, y tiene tratamiento.',
    steps: [
      { title: 'Nombrar', instruction: 'Reconoce: «esto es desánimo». No es pereza ni un defecto de carácter: es un estado que se puede mover.', durationSec: 45 },
      { title: 'Notar el ciclo', instruction: '¿Qué dejaste de hacer últimamente? ¿Cómo se sintió no hacerlo, a la larga?', durationSec: 75, kind: 'reflection' },
      { title: 'Elegir algo pequeño', instruction: 'Una acción de menos de 10 minutos que te dé placer, logro o conexión: salir a la puerta, escribir a alguien, ducharte, regar una planta.', durationSec: 90, kind: 'reflection' },
      { title: 'Generar el antídoto', instruction: 'Decide cuándo exactamente (hora y lugar). Si puedes, levántate ahora y hazla al terminar este paso.', durationSec: 60 },
      { title: 'Registrar después', instruction: 'Cuando la hagas, nota del 0 al 10 cuánto placer o logro te dio. Suele ser más de lo que el desánimo predijo.', durationSec: 45, kind: 'reflection' },
    ],
  },
];

export const ANTIDOTES: Antidote[] = [...BASE_ANTIDOTES, ...EXTRA_ANTIDOTES, ...MORE_ANTIDOTES];

export const ANTIDOTE_BY_EMOTION: Record<AfflictiveEmotionId, Antidote> = Object.fromEntries(
  ANTIDOTES.map((a) => [a.emotionId, a]),
) as Record<AfflictiveEmotionId, Antidote>;

/** Secuencia final que se ejecutará, incluyendo estabilización si la intensidad lo requiere. */
export function buildAntidoteSequence(antidote: Antidote, intensity: number): GuidedStep[] {
  return intensity >= STABILIZATION_THRESHOLD ? [STABILIZATION_STEP, ...antidote.steps] : antidote.steps;
}
