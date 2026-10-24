import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Ansiedad social y timidez», según el modelo cognitivo de Clark y Wells:
 *  - atención autofocalizada y la imagen de cómo creo que me ven;
 *  - conductas de seguridad (McManus, Sacadura y Clark) y experimentos para soltarlas;
 *  - procesamiento anticipatorio y repaso posterior («rumiación post-evento»);
 *  - atención hacia afuera, exposición gradual a situaciones sociales y hablar en público;
 *  - autocompasión frente a la vergüenza (Gilbert; Neff).
 *
 * Complementa el artículo y el programa base «ansiedad-social» (library-programs.ts y
 * programs.ts) y reutiliza la escalera de exposición del paquete de fobias. Los
 * experimentos son para ansiedad leve a moderada; si la ansiedad social impide estudiar,
 * trabajar o tener vínculos, se recomienda terapia cognitiva con un profesional.
 */

// ------------------------------------------------------------ referencias
const CLARK_WELLS_1995: Reference = {
  citation:
    'Clark, D. M., & Wells, A. (1995). A cognitive model of social phobia. En R. G. Heimberg, M. R. Liebowitz, D. A. Hope y F. R. Schneier (Eds.), Social phobia: Diagnosis, assessment, and treatment (pp. 69–93). Guilford Press.',
};
const CLARK_2006: Reference = {
  citation:
    'Clark, D. M., Ehlers, A., Hackmann, A., McManus, F., Fennell, M., Grey, N., Waddington, L., & Wild, J. (2006). Cognitive therapy versus exposure and applied relaxation in social phobia: A randomized controlled trial. Journal of Consulting and Clinical Psychology, 74(3), 568–578.',
  doi: '10.1037/0022-006X.74.3.568',
};
const MAYO_WILSON_2014: Reference = {
  citation:
    'Mayo-Wilson, E., Dias, S., Mavranezouli, I., Kew, K., Clark, D. M., Ades, A. E., & Pilling, S. (2014). Psychological and pharmacological interventions for social anxiety disorder in adults: A systematic review and network meta-analysis. The Lancet Psychiatry, 1(5), 368–376.',
  doi: '10.1016/S2215-0366(14)70329-3',
};
const HOFMANN_2007: Reference = {
  citation:
    'Hofmann, S. G. (2007). Cognitive factors that maintain social anxiety disorder: A comprehensive model and its treatment implications. Cognitive Behaviour Therapy, 36(4), 193–209.',
};
const MCMANUS_2008: Reference = {
  citation:
    'McManus, F., Sacadura, C., & Clark, D. M. (2008). Why social anxiety persists: An experimental investigation of the role of safety behaviours as a maintaining factor. Journal of Behavior Therapy and Experimental Psychiatry, 39(2), 147–161.',
};
const GILBERT_2009: Reference = {
  citation: 'Gilbert, P. (2009). Introducing compassion-focused therapy. Advances in Psychiatric Treatment, 15(3), 199–208.',
  doi: '10.1192/apt.bp.107.005264',
};
const NEFF_2003: Reference = {
  citation: 'Neff, K. D. (2003). Self-compassion: An alternative conceptualization of a healthy attitude toward oneself. Self and Identity, 2(2), 85–101.',
  doi: '10.1080/15298860309032',
};

/** Aviso común de los experimentos en situaciones sociales. */
const EXPERIMENTOS =
  'Esta práctica es para ansiedad social leve a moderada. Empieza por situaciones de poco miedo. Si tienes ataques de pánico, si la ansiedad te impide estudiar, trabajar o salir, o si consumes alcohol para animarte, hazlo con un profesional. La Línea Nacional de Salud Mental es el 0800-999-0091.';

export const ANSIEDAD_SOCIAL_PACK: ContentPack = {
  id: 'ansiedad-social',

  // ================================================================== prácticas
  practices: [
    {
      id: 'mi-circulo-social',
      title: 'Mi círculo de la ansiedad social',
      family: 'deconstructive',
      skills: ['attention', 'resilience'],
      summary:
        'Dibujar, con una situación reciente, el círculo que mantiene la ansiedad social: lo que temes, dónde pones la atención, qué haces para protegerte y cómo te imaginas que te ven.',
      mechanism:
        'Ver el círculo con un ejemplo propio muestra que la ansiedad no se mantiene por la situación, sino por lo que haces dentro de ella. Eso indica por dónde cortarlo.',
      evidenceLevel: 'moderada',
      evidence: [CLARK_WELLS_1995, CLARK_2006, MAYO_WILSON_2014],
      howItWorks: [
        'La timidez es un rasgo común y no es un problema en sí. La ansiedad social es cuando el miedo a quedar mal es tan fuerte que te hace evitar o sufrir mucho en situaciones con otras personas.',
        'David Clark y Adrian Wells describieron cómo se mantiene. En la situación temida, la atención se va hacia adentro: notas el calor en la cara o el temblor de la voz. Con eso armas una imagen de cómo te ven, que suele ser mucho peor que la real (Clark y Wells, 1995).',
        'Para protegerte haces cosas: no mirar a los ojos, ensayar frases, hablar poco. Son las conductas de seguridad. Antes de la situación te anticipas con miedo y después la repasas buscando errores.',
        'La terapia cognitiva basada en este modelo funcionó mejor que la exposición con relajación en un ensayo (Clark y colaboradores, 2006). Un metaanálisis en red la ubicó entre los tratamientos más eficaces para adultos (Mayo-Wilson y colaboradores, 2014).',
      ],
      tips: [
        'Elige una situación reciente y concreta, no «siempre me pasa».',
        'Escribe los pensamientos como predicciones: «se van a dar cuenta de mis nervios».',
        'Anota todas las conductas de seguridad, aunque parezcan chicas.',
        'Usa el círculo como mapa para los experimentos de las próximas semanas.',
      ],
      obstacles: [
        { q: 'No sé qué pensaba, sólo sentía miedo.', a: 'Pregúntate qué temías que pasara o qué temías que pensaran de ti. Con eso suele aparecer la predicción.' },
        { q: 'Mis conductas de seguridad me ayudan.', a: 'Puede parecer así. Fíjate si alguna vez entraste sin ellas. Si nunca lo hiciste, no sabes qué pasaría sin ellas. Eso es lo que vas a probar.' },
      ],
      cautions: EXPERIMENTOS,
      steps: [
        { title: 'Llegar', instruction: 'Siéntate en una postura cómoda y respira despacio. Piensa en una situación social reciente que te dio ansiedad.', durationSec: 30, kind: 'breath' },
        { title: 'La situación', instruction: 'Escribe dónde estabas, con quién y qué pasaba. Una o dos frases alcanzan.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que temías', instruction: '¿Qué temías que pasara? ¿Qué temías que pensaran de ti? Escríbelo como una predicción.', durationSec: 60, kind: 'reflection' },
        { title: 'Tu atención', instruction: '¿En qué te fijabas? Nota si mirabas hacia adentro: tu cara, tu voz, tus manos.', durationSec: 45, kind: 'reflection' },
        { title: 'Cómo te veías', instruction: 'Describe la imagen de ti que tenías en la cabeza. ¿Cómo creías que te veían?', durationSec: 45, kind: 'reflection' },
        { title: 'Tus protecciones', instruction: 'Anota lo que hiciste para no quedar mal. Por ejemplo, no mirar, hablar poco o ensayar frases.', durationSec: 60, kind: 'reflection' },
        { title: 'Antes y después', instruction: '¿Le diste muchas vueltas antes? ¿La repasaste después? Anótalo.', durationSec: 45, kind: 'reflection' },
        { title: 'El círculo', instruction: 'Mira todo junto. Elige una parte del círculo que quieras cambiar primero.', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'atencion-hacia-afuera',
      title: 'Llevar la atención hacia afuera',
      family: 'attentional',
      skills: ['attention'],
      summary: 'Sacar la atención de tu cara, tu voz y tus manos, y llevarla a lo que pasa afuera: la otra persona, lo que dice, el lugar.',
      mechanism:
        'Vigilarte por dentro hace que notes más los nervios y te da una imagen peor de ti. Mirar hacia afuera te da datos reales y te ayuda a seguir la charla.',
      evidenceLevel: 'moderada',
      evidence: [CLARK_WELLS_1995, CLARK_2006],
      howItWorks: [
        'En la ansiedad social, la atención se queda pegada a uno mismo. Cuanto más te observas, más sensaciones notas, y más te parece que todos las ven (Clark y Wells, 1995).',
        'En la terapia cognitiva de Clark se entrena llevar la atención hacia afuera a propósito. Se practica primero en situaciones tranquilas y luego en las difíciles (Clark y colaboradores, 2006).',
        'No se trata de dejar de sentir nervios. Se trata de que no ocupen toda tu atención.',
      ],
      tips: [
        'Practica primero en casa o en la calle, sin presión.',
        'En una charla, busca un detalle de la otra persona: el color de sus ojos o una palabra que repite.',
        'Si notas que volviste a mirarte por dentro, no te retes. Vuelve afuera.',
      ],
      obstacles: [
        { q: 'Si dejo de vigilarme, voy a decir algo raro.', a: 'Es la predicción típica. Pruébalo en una charla corta y fíjate qué pasa de verdad.' },
      ],
      micro: true,
      steps: [
        { title: 'Notar', instruction: 'Fíjate dónde está tu atención ahora. ¿En tu cuerpo, en tu cara, en tu voz?', durationSec: 20, kind: 'instruction' },
        { title: 'Ver', instruction: 'Mira a tu alrededor. Nombra tres cosas que ves, con sus colores.', durationSec: 30, kind: 'instruction' },
        { title: 'Oír', instruction: 'Escucha. Nombra dos sonidos de afuera, cercanos o lejanos.', durationSec: 30, kind: 'instruction' },
        { title: 'Una persona', instruction: 'Si hay alguien, mira su cara y sus gestos. Si no, imagina a alguien con quien hablarás hoy.', durationSec: 40, kind: 'instruction' },
        { title: 'Volver', instruction: 'Si la atención vuelve a ti, está bien. Llévala otra vez afuera, con calma.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'soltar-una-conducta-de-seguridad',
      title: 'Soltar una conducta de seguridad',
      family: 'deconstructive',
      skills: ['resilience', 'attention'],
      summary: 'Un experimento: anotar qué temes, entrar en una situación social dejando una conducta de seguridad y comparar después lo que pasó.',
      mechanism:
        'Las conductas de seguridad impiden comprobar que lo temido no pasa. Soltarlas a propósito, como un experimento, deja aprender algo nuevo.',
      evidenceLevel: 'moderada',
      evidence: [MCMANUS_2008, CLARK_2006, CLARK_WELLS_1995],
      howItWorks: [
        'Freda McManus y su equipo pidieron a personas con ansiedad social que conversaran usando y sin usar sus conductas de seguridad. Sin ellas, la ansiedad y las predicciones negativas bajaron más (McManus y colaboradores, 2008).',
        'Las conductas de seguridad tienen dos problemas. Te hacen creer que estuviste bien «gracias a eso». Y a veces se notan: quien no mira ni pregunta puede parecer distante.',
        'Un experimento conductual tiene tres partes. Primero anotas qué temes. Después entras en la situación sin la protección. Al final comparas la predicción con lo que pasó.',
      ],
      tips: [
        'Empieza por una situación fácil, como preguntar algo en un negocio.',
        'Suelta una sola conducta por vez.',
        'Haz la predicción concreta y medible: «se me va a quebrar la voz y la persona se va a reír».',
        'Si puedes, pídele a alguien de confianza que te diga cómo te vio.',
      ],
      obstacles: [
        { q: 'Pasó lo que temía.', a: 'A veces pasa. Fíjate qué tan grave fue y cómo lo atravesaste. ¿Alguien reaccionó tan mal como esperabas?' },
        { q: 'No me animé.', a: 'Elige una situación más fácil o una conducta más chica. Lo importante es empezar por algo posible.' },
      ],
      cautions: EXPERIMENTOS,
      steps: [
        { title: 'La situación', instruction: 'Elige una situación social de poco a mediano miedo. Debe darte entre 20 y 50, de 0 a 100.', durationSec: 30, kind: 'reflection' },
        { title: 'La protección', instruction: 'Elige una conducta de seguridad para dejar. Por ejemplo, mirar al piso o ensayar lo que vas a decir.', durationSec: 30, kind: 'reflection' },
        { title: 'La predicción', instruction: 'Escribe qué temes que pase sin esa protección. ¿Cuánto lo crees, de 0 a 100?', durationSec: 45, kind: 'reflection' },
        { title: 'Entrar', instruction: 'Haz el experimento. Suelta la protección y lleva la atención a la otra persona.', durationSec: 120, kind: 'instruction' },
        { title: 'Qué pasó', instruction: 'Anota qué pasó en realidad. Sólo los hechos que viste u oíste.', durationSec: 45, kind: 'reflection' },
        { title: 'Comparar', instruction: 'Compara con tu predicción. ¿Cuánto la crees ahora, de 0 a 100?', durationSec: 30, kind: 'reflection' },
        { title: 'Aprender', instruction: 'Escribe una frase con lo que aprendiste. Elige el próximo experimento.', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'despues-del-encuentro',
      title: 'Después del encuentro: frenar el repaso',
      family: 'deconstructive',
      skills: ['attention', 'compassion'],
      summary: 'Cuando, después de una reunión o una charla, la mente repasa una y otra vez lo que dijiste, notar el repaso, mirar los hechos y volver al presente.',
      mechanism:
        'El repaso posterior se arma con la imagen negativa que tenías durante la situación, no con lo que pasó. Notarlo y mirar los hechos corta el bucle.',
      evidenceLevel: 'moderada',
      evidence: [CLARK_WELLS_1995, HOFMANN_2007],
      howItWorks: [
        'Después de un encuentro social, muchas personas con ansiedad social lo repasan en detalle. Buscan errores y se quedan con lo peor. Clark y Wells lo llamaron procesamiento posterior (Clark y Wells, 1995).',
        'Stefan Hofmann incluyó este repaso entre los factores que mantienen la ansiedad social. El repaso no resuelve nada, y hace que la próxima situación dé más miedo (Hofmann, 2007).',
        'Antes de la situación pasa algo parecido: te anticipas con escenas de lo que puede salir mal. Esta práctica sirve para los dos momentos.',
      ],
      tips: [
        'Pon un nombre corto al repaso: «otra vez la película del día después».',
        'Si te cuesta salir, haz algo con las manos o sal a caminar.',
        'Si el repaso dura días, es un buen motivo para consultar.',
      ],
      obstacles: [
        { q: 'Necesito entender qué hice mal.', a: 'Pensar una vez qué podrías hacer distinto está bien. Dar vueltas sin fin no da más claridad. Si ya lo pensaste, ese pensamiento puede descansar.' },
      ],
      steps: [
        { title: 'Notar', instruction: 'Fíjate si tu mente está repasando una charla o una reunión. Dite: «Estoy repasando».', durationSec: 20, kind: 'instruction' },
        { title: 'Respirar', instruction: 'Respira lento tres veces. Siente los pies en el piso.', durationSec: 30, kind: 'breath' },
        { title: 'Hechos', instruction: 'Escribe lo que pasó de verdad. Lo que viste y oíste, no lo que imaginas que pensaron.', durationSec: 60, kind: 'reflection' },
        { title: 'Otra mirada', instruction: '¿Qué le dirías a alguien querido que te cuenta lo mismo? Escríbelo para ti.', durationSec: 45, kind: 'reflection' },
        { title: 'Un aprendizaje', instruction: 'Si hay algo útil para la próxima vez, anótalo en una frase. Nada más.', durationSec: 30, kind: 'reflection' },
        { title: 'Volver', instruction: 'Elige algo que vas a hacer ahora. Lleva la atención a esa tarea.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'compasion-ante-la-verguenza',
      title: 'Compasión ante la vergüenza',
      family: 'constructive',
      skills: ['compassion'],
      summary: 'Cuando sientes vergüenza por algo que dijiste o hiciste delante de otros, responderte con el tono que usarías con alguien que quieres.',
      mechanism:
        'La vergüenza activa la amenaza y la autocrítica. Un tono amable activa el sistema de calma y hace más fácil volver a intentar.',
      evidenceLevel: 'moderada',
      evidence: [
        { citation: 'Ferrari, M., Hunt, C., Harrysunker, A., Abbott, M. J., Beath, A. P., & Einstein, D. A. (2019). Self-compassion interventions and psychosocial outcomes: A meta-analysis of RCTs. Mindfulness, 10, 1455–1473.' },
        { citation: 'Kirby, J. N., Tellegen, C. L., & Steindl, S. R. (2017). A meta-analysis of compassion-based interventions: Current state of knowledge and future directions. Behavior Therapy, 48(6), 778–792.', doi: '10.1016/j.beth.2017.06.003' },
        GILBERT_2009,
        NEFF_2003,
      ],
      howItWorks: [
        'La vergüenza es la sensación de que hay algo malo en ti y que los demás lo ven. En la ansiedad social aparece mucho, y suele venir con una voz crítica dura.',
        'Paul Gilbert propone la terapia centrada en la compasión para la vergüenza y la autocrítica. Busca activar el sistema de calma y cuidado, no sólo discutir los pensamientos (Gilbert, 2009).',
        'Kristin Neff describe tres partes de la autocompasión: amabilidad con uno mismo, sentirse parte de la experiencia humana y atención plena al dolor sin exagerarlo (Neff, 2003).',
      ],
      tips: [
        'Usa tu nombre al hablarte, como si fueras otra persona.',
        'Recuerda que casi todo el mundo pasó papelones.',
        'Si una mano en el pecho te calma, úsala.',
      ],
      obstacles: [
        { q: 'Si me trato bien, no voy a mejorar.', a: 'Es una idea común. La autocrítica dura suele dar más miedo a intentar. La amabilidad deja mirar el error sin hundirte.' },
      ],
      micro: true,
      steps: [
        { title: 'Notar', instruction: 'Nota la vergüenza en el cuerpo. Puede ser calor, un nudo o ganas de esconderte.', durationSec: 25, kind: 'instruction' },
        { title: 'Nombrar', instruction: 'Dite en voz baja: «Esto es vergüenza. Duele».', durationSec: 20, kind: 'instruction' },
        { title: 'Muy humano', instruction: 'Recuerda que mucha gente siente esto. Pasar un mal momento delante de otros es muy humano.', durationSec: 25, kind: 'instruction' },
        { title: 'Una mano', instruction: 'Si quieres, pon una mano en el pecho. Respira lento.', durationSec: 30, kind: 'breath' },
        { title: 'Una frase amable', instruction: 'Dite lo que le dirías a alguien que quieres. Por ejemplo, «fue un momento incómodo y sigues valiendo lo mismo».', durationSec: 40, kind: 'reflection' },
      ],
    },
    {
      id: 'preparar-una-charla',
      title: 'Preparar una charla en público',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Prepararte para hablar en público sin memorizar todo ni esconderte: ideas clave, ensayo en voz alta y atención en el mensaje y en el público.',
      mechanism:
        'Preparar ideas en vez de un texto, y ensayar en voz alta, baja la necesidad de conductas de seguridad. Mirar al público en vez de a ti te da datos reales.',
      evidenceLevel: 'moderada',
      evidence: [CLARK_WELLS_1995, CLARK_2006, MCMANUS_2008],
      howItWorks: [
        'Hablar en público es uno de los miedos sociales más comunes. Con él aparecen las mismas piezas del círculo: predicciones de quedar mal, atención hacia adentro y conductas de seguridad.',
        'Algunas protecciones típicas son leer todo, no mirar a nadie o hablar rápido para terminar. Alivian, pero hacen que la charla salga peor y que no aprendas que podías.',
        'En la terapia de Clark se usan grabaciones en video para comparar la imagen que tienes de ti con lo que se ve de verdad. Muchas personas se ven mejor de lo que esperaban (Clark y colaboradores, 2006).',
      ],
      tips: [
        'Arma tres o cuatro ideas clave, no un texto para leer.',
        'Ensaya en voz alta, de pie, al menos dos veces.',
        'Si puedes, grábate y mírate como si fueras otra persona.',
        'Empieza por públicos chicos y de confianza, y sube de a poco.',
      ],
      obstacles: [
        { q: 'Me quedo en blanco.', a: 'Lleva una tarjeta con las ideas clave. Hacer una pausa y mirar la tarjeta es normal y casi nadie lo nota.' },
        { q: 'Me tiembla la voz.', a: 'A muchas personas les pasa. Suele notarse mucho menos de lo que crees. Habla un poco más lento y sigue.' },
      ],
      cautions: EXPERIMENTOS,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en la charla que tienes que dar.', durationSec: 30, kind: 'breath' },
        { title: 'Para qué', instruction: 'Escribe en una frase qué quieres que el público se lleve.', durationSec: 40, kind: 'reflection' },
        { title: 'Ideas clave', instruction: 'Anota tres o cuatro ideas clave. Ponlas en orden en una tarjeta.', durationSec: 90, kind: 'reflection' },
        { title: 'Tus protecciones', instruction: '¿Qué harías para no quedar mal? Leer todo, no mirar, apurarte. Elige una para dejar.', durationSec: 40, kind: 'reflection' },
        { title: 'Ensayar', instruction: 'Ponte de pie y di la charla en voz alta, mirando la tarjeta sólo cuando la necesites.', durationSec: 180, kind: 'instruction' },
        { title: 'Hacia afuera', instruction: 'Imagina al público. Elige tres caras amables y piensa en mirarlas al hablar.', durationSec: 40, kind: 'instruction' },
        { title: 'Notar', instruction: '¿Cómo te fue? Anota una cosa que salió bien y una para ajustar.', durationSec: 30, kind: 'reflection' },
      ],
    },
  ],

  meta: {
    'mi-circulo-social': { level: 'intermedio', approaches: ['tcc'], module: 'relaciones' },
    'atencion-hacia-afuera': { level: 'iniciacion', approaches: ['tcc', 'mindfulness'], module: 'relaciones' },
    'soltar-una-conducta-de-seguridad': {
      level: 'intermedio',
      approaches: ['tcc'],
      module: 'relaciones',
      prerequisites: ['mi-circulo-social', 'atencion-hacia-afuera'],
      risk: { level: 2, alternative: 'plantas-de-los-pies' },
    },
    'despues-del-encuentro': { level: 'intermedio', approaches: ['tcc', 'mindfulness', 'cft'], module: 'relaciones', prerequisites: ['mi-circulo-social'] },
    'compasion-ante-la-verguenza': { level: 'iniciacion', approaches: ['cft'], module: 'emociones' },
    'preparar-una-charla': { level: 'intermedio', approaches: ['tcc'], module: 'relaciones', prerequisites: ['atencion-hacia-afuera'] },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'por-que-persiste-la-ansiedad-social',
      title: 'Por qué persiste la ansiedad social',
      subtitle: 'Atención hacia adentro, conductas de seguridad y el repaso del día después: el modelo de Clark y Wells, y cómo cortarlo.',
      category: 'Relaciones',
      readingMin: 9,
      keyPoints: [
        'La timidez es común; la ansiedad social es cuando el miedo a quedar mal te hace sufrir o evitar mucho.',
        'En la situación, la atención se va hacia adentro y armas una imagen de ti peor que la real.',
        'Las conductas de seguridad alivian, pero impiden aprender que lo temido no pasa.',
        'Darle vueltas antes y repasar después mantienen el miedo.',
        'La terapia cognitiva basada en este modelo es de los tratamientos más eficaces.',
      ],
      sections: [
        {
          heading: 'Timidez y ansiedad social',
          paragraphs: [
            'Mucha gente se pone nerviosa al conocer a alguien, al hablar en una reunión o al dar una charla. La timidez es un rasgo, no un problema.',
            'Se habla de ansiedad social cuando el miedo a que te juzguen es intenso y dura. Te lleva a evitar situaciones o a pasarlas muy mal, y eso afecta el estudio, el trabajo o los vínculos.',
          ],
        },
        {
          heading: 'El círculo de Clark y Wells',
          paragraphs: [
            'David Clark y Adrian Wells propusieron un modelo que hoy guía la terapia. Al entrar en una situación social aparecen predicciones: «voy a hacer el ridículo», «van a notar mis nervios» (Clark y Wells, 1995).',
            'Entonces la atención se da vuelta hacia adentro. Notas el calor en la cara, el temblor o el corazón, y con eso armas una imagen de cómo te ven. Esa imagen suele ser mucho peor que lo que los demás ven de verdad.',
            'Stefan Hofmann revisó los factores que mantienen la ansiedad social. Entre ellos están la atención puesta en uno, la idea de que el costo de un error social es enorme y el repaso posterior (Hofmann, 2007).',
          ],
        },
        {
          heading: 'Las conductas de seguridad',
          paragraphs: [
            'Para protegerte haces cosas: no mirar a los ojos, ensayar cada frase, agarrar fuerte el vaso, hablar poco, quedarte cerca de alguien conocido. Parecen ayudar.',
            'Freda McManus y su equipo mostraron que estas conductas mantienen el problema. Cuando las personas las dejaban en una conversación, la ansiedad y las predicciones negativas bajaban más (McManus y colaboradores, 2008).',
            'Además, algunas se notan. Quien no pregunta ni mira puede parecer distante, y eso confirma el miedo a caer mal.',
          ],
        },
        {
          heading: 'Antes y después',
          paragraphs: [
            'Antes de una situación, la mente se anticipa con escenas de lo que puede salir mal. A veces eso lleva a no ir.',
            'Después llega el repaso. Se revive la charla buscando errores y se recuerda con la imagen negativa que tenías, no con lo que pasó. Así la próxima situación da más miedo.',
          ],
        },
        {
          heading: 'Qué ayuda',
          paragraphs: [
            'Un metaanálisis en red comparó muchos tratamientos para adultos. La terapia cognitivo-conductual individual fue la intervención psicológica más eficaz (Mayo-Wilson y colaboradores, 2014). En un ensayo, la terapia cognitiva de Clark funcionó mejor que la exposición con relajación (Clark y colaboradores, 2006).',
            'Sus herramientas son concretas. Llevar la atención hacia afuera. Hacer experimentos soltando conductas de seguridad. Acercarse de a poco a situaciones temidas, con una escalera. Frenar el repaso posterior. Y tratarse con amabilidad ante la vergüenza.',
            'Para hablar en público ayuda preparar ideas clave en vez de un texto, ensayar en voz alta y empezar por públicos chicos.',
          ],
        },
        {
          heading: 'Cuándo consultar',
          paragraphs: [
            'Busca ayuda si la ansiedad te impide estudiar, trabajar, hacer trámites o tener amistades o pareja. También si tomas alcohol u otras sustancias para animarte, o si te sientes muy triste o sin salida. La Línea Nacional de Salud Mental es el 0800-999-0091. Para consumos, la Línea 141 es gratuita y atiende las 24 horas.',
          ],
        },
      ],
      caveat: {
        title: 'Hasta dónde llega lo autoguiado',
        body: 'Los experimentos de esta sección son para ansiedad social leve a moderada y empiezan por situaciones fáciles. No reemplazan la terapia. Si la ansiedad es muy intensa, si tienes ataques de pánico o si evitas casi todo contacto, la terapia cognitiva con un profesional tiene muy buena evidencia.',
      },
      diagram: {
        title: 'El círculo de la ansiedad social',
        nodes: ['Situación social', 'Predicción de quedar mal', 'Atención hacia adentro', 'Conductas de seguridad', 'Imagen de ti peor que la real', 'Repaso del día después'],
        caption: 'Mirar hacia afuera y soltar conductas de seguridad cortan el círculo.',
      },
      related: {
        practices: ['mi-circulo-social', 'atencion-hacia-afuera', 'soltar-una-conducta-de-seguridad', 'despues-del-encuentro', 'compasion-ante-la-verguenza', 'preparar-una-charla', 'escalera-del-miedo'],
        articles: ['ansiedad-social', 'exposicion-gradual', 'rumiacion', 'autocompasion'],
      },
      references: [CLARK_WELLS_1995, CLARK_2006, MAYO_WILSON_2014, HOFMANN_2007, MCMANUS_2008],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'salir-de-mi-cabeza',
      title: 'Salir de mi cabeza',
      subtitle: 'Cuatro semanas de experimentos para la ansiedad social',
      description:
        'Para quien siente muchos nervios con otras personas y por eso evita, se esconde o se repasa durante días. Sigue el modelo de Clark y Wells: entender el círculo, mirar hacia afuera, soltar conductas de seguridad, acercarse de a poco y cuidarse frente a la vergüenza. Es para ansiedad leve a moderada; si la ansiedad es muy intensa, hazlo con un profesional.',
      basis: 'Clark y Wells (1995); Clark y colaboradores (2006); McManus, Sacadura y Clark (2008); Hofmann (2007); Mayo-Wilson y colaboradores (2014).',
      rhythm: '10 a 15 minutos, 4 o 5 días por semana, y un experimento chico por semana.',
      weeks: [
        {
          title: 'Semana 1 · Mi círculo',
          focus: 'Entender qué mantiene el miedo',
          description: 'Leerás sobre el modelo y armarás tu propio círculo con una situación reciente. Empezarás a llevar la atención hacia afuera.',
          practiceIds: ['mi-circulo-social', 'atencion-hacia-afuera'],
          articleIds: ['por-que-persiste-la-ansiedad-social'],
        },
        {
          title: 'Semana 2 · Soltar protecciones',
          focus: 'Experimentos conductuales',
          description: 'Elegirás una situación fácil, dejarás una conducta de seguridad y compararás lo que temías con lo que pasó.',
          practiceIds: ['soltar-una-conducta-de-seguridad', 'atencion-hacia-afuera'],
          articleIds: [],
          journalType: 'experimento',
        },
        {
          title: 'Semana 3 · De a poco',
          focus: 'Exposición gradual y hablar en público',
          description: 'Armarás una escalera de situaciones sociales y subirás los primeros escalones. Si te toca hablar en público, prepararás la charla.',
          practiceIds: ['escalera-del-miedo', 'subir-un-escalon', 'preparar-una-charla'],
          articleIds: ['exposicion-gradual'],
          journalType: 'escalera-exposicion',
        },
        {
          title: 'Semana 4 · Después y con amabilidad',
          focus: 'Frenar el repaso y cuidar la vergüenza',
          description: 'Practicarás frenar el repaso del día después y responderte con amabilidad cuando aparezca la vergüenza.',
          practiceIds: ['despues-del-encuentro', 'compasion-ante-la-verguenza'],
          articleIds: ['autocompasion'],
          journalType: 'carta-compasiva',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-circulo-social',
      title: 'El círculo de la ansiedad social',
      subtitle: 'Por qué el miedo a quedar mal no se va por sí mismo.',
      slides: [
        { heading: 'Timidez o algo más', text: 'Sentir nervios con gente nueva es común. La ansiedad social es cuando ese miedo te hace evitar o sufrir mucho.' },
        { heading: 'Hacia adentro', text: 'En la situación, miras tu cara, tu voz y tus manos. Así te imaginas peor de lo que te ven.' },
        { heading: 'Las protecciones', text: 'No mirar, hablar poco o ensayar frases alivia. Pero no te deja ver que podías sin eso.' },
        { heading: 'El día después', text: 'Luego repasas la charla buscando errores. Y la próxima vez da más miedo.' },
        { heading: 'Se puede cortar', text: 'Mirar hacia afuera, soltar protecciones y acercarte de a poco ayudan. La terapia cognitiva tiene muy buena evidencia.' },
      ],
      related: { practices: ['mi-circulo-social', 'atencion-hacia-afuera'], articles: ['por-que-persiste-la-ansiedad-social'] },
      references: [CLARK_WELLS_1995, MAYO_WILSON_2014],
    },
    {
      id: 'pildora-conductas-de-seguridad',
      title: 'Lo que hago para no quedar mal',
      subtitle: 'Las conductas de seguridad y cómo soltarlas.',
      slides: [
        { heading: 'Pequeñas protecciones', text: 'Mirar el celular, no mirar a los ojos, hablar poco, quedarte cerca de alguien conocido. Son conductas de seguridad.' },
        { heading: 'Por qué no ayudan', text: 'Te hacen creer que saliste bien gracias a ellas. Así el miedo queda igual.' },
        { heading: 'A veces se notan', text: 'Quien no mira ni pregunta puede parecer distante. Y eso confirma el miedo a caer mal.' },
        { heading: 'Un experimento', text: 'Anota qué temes. Entra sin una protección. Después compara con lo que pasó de verdad.' },
        { heading: 'De a una', text: 'Empieza por algo fácil y suelta una sola protección por vez.' },
      ],
      related: { practices: ['soltar-una-conducta-de-seguridad'], articles: ['por-que-persiste-la-ansiedad-social'] },
      references: [MCMANUS_2008, CLARK_2006],
    },
    {
      id: 'pildora-repaso-del-dia-despues',
      title: 'La película del día después',
      subtitle: 'Cuando repasas una y otra vez lo que dijiste.',
      slides: [
        { heading: 'El repaso', text: 'Después de una reunión, la mente vuelve a lo que dijiste. Busca errores y se queda con lo peor.' },
        { heading: 'No es un buen testigo', text: 'El repaso usa la imagen fea que tenías de ti, no lo que pasó. Por eso todo parece peor.' },
        { heading: 'Notar', text: 'Cuando empiece, dite: «Estoy repasando». Respira y siente los pies en el piso.' },
        { heading: 'Hechos', text: 'Escribe lo que viste y oíste. Pregúntate qué le dirías a alguien querido.' },
        { heading: 'Volver', text: 'Si hay algo útil para la próxima vez, anótalo. Después vuelve a lo que estabas haciendo.' },
      ],
      related: { practices: ['despues-del-encuentro', 'compasion-ante-la-verguenza'], articles: ['por-que-persiste-la-ansiedad-social', 'rumiacion'] },
      references: [CLARK_WELLS_1995, HOFMANN_2007],
    },
    {
      id: 'pildora-hablar-en-publico',
      title: 'Hablar en público',
      subtitle: 'Prepararte sin esconderte.',
      slides: [
        { heading: 'Un miedo común', text: 'Hablar delante de otros es de los miedos más frecuentes. Le pasa a mucha gente.' },
        { heading: 'Ideas, no un texto', text: 'Arma tres o cuatro ideas clave en una tarjeta. Leer todo te aleja del público.' },
        { heading: 'Ensaya en voz alta', text: 'Di la charla de pie, al menos dos veces. Si puedes, grábate y mírate como si fueras otra persona.' },
        { heading: 'Mira afuera', text: 'Busca tres caras amables. Piensa en lo que quieres contar, no en cómo suena tu voz.' },
        { heading: 'De a poco', text: 'Empieza con públicos chicos y de confianza. Después sube un escalón.' },
      ],
      related: { practices: ['preparar-una-charla', 'atencion-hacia-afuera'], articles: ['por-que-persiste-la-ansiedad-social'] },
      references: [CLARK_2006, CLARK_WELLS_1995],
    },
  ],

  // ================================================================== glosario
  glossary: [
    {
      id: 'atencion-autofocalizada',
      term: 'Atención autofocalizada',
      definition: 'Poner la atención en uno mismo durante una situación social: la cara, la voz, los nervios. Hace notar más la ansiedad y da una imagen peor de lo que los demás ven.',
      practiceId: 'atencion-hacia-afuera',
    },
    {
      id: 'conductas-de-seguridad',
      term: 'Conductas de seguridad',
      definition: 'Cosas que se hacen para evitar lo temido, como no mirar a los ojos o ensayar frases. Alivian, pero impiden aprender que lo temido no pasa.',
      practiceId: 'soltar-una-conducta-de-seguridad',
    },
    {
      id: 'procesamiento-post-evento',
      term: 'Repaso posterior',
      definition: 'Volver una y otra vez, después de un encuentro social, a lo que se dijo o hizo, buscando errores. También se llama procesamiento post-evento.',
      practiceId: 'despues-del-encuentro',
    },
    {
      id: 'experimento-conductual',
      term: 'Experimento conductual',
      definition: 'Poner a prueba una predicción en la vida real. Se anota qué se teme, se hace la prueba y se compara con lo que pasó.',
      articleId: 'por-que-persiste-la-ansiedad-social',
    },
  ],
};
