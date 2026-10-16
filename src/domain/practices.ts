import type { Practice, Reference } from './types';
import { EXTRA_PRACTICES } from './practices-extra';
import { MORE_PRACTICES } from './practices-more';
import { SKILL_PRACTICES } from './practices-skills';
import { DBT_PRACTICES } from './practices-dbt';
import { SELF_PRACTICES } from './practices-self';
import { PLUS_PRACTICES } from './practices-plus';
import { EXISTENTIAL_PRACTICES } from './practices-existential';
import { PACK_PRACTICES } from './packs';

/**
 * Catálogo del Gimnasio Mental.
 * Cada práctica declara su familia (Dahl et al., 2015), su mecanismo propuesto,
 * su nivel de evidencia y referencias primarias. Los guiones son originales.
 */

// ---------------------------------------------------------------- referencias compartidas

const DAHL_2015: Reference = {
  citation:
    'Dahl, C. J., Lutz, A., & Davidson, R. J. (2015). Reconstructing and deconstructing the self: Cognitive mechanisms in meditation practice. Trends in Cognitive Sciences, 19(9), 515–523.',
  doi: '10.1016/j.tics.2015.07.001',
};
const LUTZ_2008_TICS: Reference = {
  citation:
    'Lutz, A., Slagter, H. A., Dunne, J. D., & Davidson, R. J. (2008). Attention regulation and monitoring in meditation. Trends in Cognitive Sciences, 12(4), 163–169.',
  doi: '10.1016/j.tics.2008.01.005',
};
const GOLDBERG_2018: Reference = {
  citation:
    'Goldberg, S. B., Tucker, R. P., Greene, P. A., et al. (2018). Mindfulness-based interventions for psychiatric disorders: A systematic review and meta-analysis. Clinical Psychology Review, 59, 52–60.',
  doi: '10.1016/j.cpr.2017.10.011',
};
const ZACCARO_2018: Reference = {
  citation:
    'Zaccaro, A., Piarulli, A., Laurino, M., et al. (2018). How breath-control can change your life: A systematic review on psycho-physiological correlates of slow breathing. Frontiers in Human Neuroscience, 12, 353.',
  doi: '10.3389/fnhum.2018.00353',
};
const SELIGMAN_2005: Reference = {
  citation:
    'Seligman, M. E. P., Steen, T. A., Park, N., & Peterson, C. (2005). Positive psychology progress: Empirical validation of interventions. American Psychologist, 60(5), 410–421.',
  doi: '10.1037/0003-066X.60.5.410',
};
const KIRBY_2017: Reference = {
  citation:
    'Kirby, J. N., Tellegen, C. L., & Steindl, S. R. (2017). A meta-analysis of compassion-based interventions: Current state of knowledge and future directions. Behavior Therapy, 48(6), 778–792.',
  doi: '10.1016/j.beth.2017.06.003',
};
const MASUDA_2004: Reference = {
  citation:
    'Masuda, A., Hayes, S. C., Sackett, C. F., & Twohig, M. P. (2004). Cognitive defusion and self-relevant negative thoughts: Examining the impact of a ninety year old technique. Behaviour Research and Therapy, 42(4), 477–485.',
  doi: '10.1016/j.brat.2003.10.008',
};

// ---------------------------------------------------------------- catálogo

const BASE_PRACTICES: Practice[] = [
  // ============================================================ ATENCIONALES
  {
    id: 'atencion-respiracion',
    title: 'Atención focalizada en la respiración',
    family: 'attentional',
    skills: ['attention'],
    summary:
      'Sostener la atención en las sensaciones de la respiración, detectar la distracción y volver sin juicio.',
    mechanism:
      'Entrena el ciclo atención → distracción → detección (meta-conciencia) → reorientación. La detección repetida es el «ejercicio».',
    evidenceLevel: 'moderada',
    evidence: [
      LUTZ_2008_TICS,
      {
        citation:
          'Hasenkamp, W., Wilson-Mendenhall, C. D., Duncan, E., & Barsalou, L. W. (2012). Mind wandering and attention during focused meditation: A fine-grained temporal analysis of fluctuating cognitive states. NeuroImage, 59(1), 750–760.',
        doi: '10.1016/j.neuroimage.2011.07.008',
      },
    ],
    howItWorks: [
      'La mente divaga cerca de la mitad del tiempo de vigilia. Esta práctica no busca eliminar la divagación, sino entrenar el instante en que la notas. Hasenkamp y colaboradores describieron cuatro fases que se repiten en bucle: divagación, darse cuenta, reorientar y sostener. Cada una recluta redes cerebrales distintas.',
      'El momento clave es el «darse cuenta». Cada vez que reconoces que te fuiste y vuelves, ejercitas la meta-conciencia: la capacidad de saber qué está haciendo tu mente mientras lo hace. Es la base de casi todas las demás prácticas del gimnasio.',
    ],
    tips: [
      'Una sesión con cien distracciones detectadas es una sesión excelente: son cien repeticiones.',
      'Si la respiración te genera ansiedad, usa como ancla el contacto de las manos o los sonidos.',
      'Mejor 8 minutos diarios que 40 un día por semana: la regularidad consolida el hábito atencional.',
    ],
    obstacles: [
      { q: 'Me distraigo todo el tiempo, ¿lo estoy haciendo mal?', a: 'No. Notar la distracción es exactamente el ejercicio. El problema sería no notarla nunca.' },
      { q: 'Me da sueño.', a: 'Abre los ojos con la mirada baja, endereza la espalda o practica a otra hora. El sueño es información sobre tu descanso, no un fracaso.' },
    ],
    steps: [
      { title: 'Llegar', instruction: 'Postura erguida y relajada. Deja que la mirada descanse o cierra los ojos.', durationSec: 45 },
      { title: 'Anclar', instruction: 'Elige un punto donde la respiración se sienta con claridad: fosas nasales, pecho o abdomen.', durationSec: 60, kind: 'breath' },
      { title: 'Sostener', instruction: 'Cuando notes que la mente se fue, eso es el momento de práctica: reconoce «distracción» y vuelve con suavidad.', durationSec: 300, kind: 'breath' },
      { title: 'Soltar el ancla', instruction: 'Deja de dirigir la atención. Nota simplemente cómo está la mente ahora.', durationSec: 45, kind: 'silence' },
    ],
  },
  {
    id: 'escaneo-corporal',
    title: 'Escaneo corporal',
    family: 'attentional',
    skills: ['attention', 'resilience'],
    summary:
      'Recorrer el cuerpo con la atención, región por región, registrando sensaciones sin intentar cambiarlas.',
    mechanism:
      'Entrena la interocepción (percibir señales internas) y la actitud de no reactividad ante sensaciones agradables, desagradables y neutras.',
    evidenceLevel: 'moderada',
    evidence: [
      GOLDBERG_2018,
      { citation: 'Kabat-Zinn, J. (1990). Full catastrophe living: Using the wisdom of your body and mind to face stress, pain, and illness. Delacorte.' },
    ],
    howItWorks: [
      'Muchas emociones se anuncian primero en el cuerpo: tensión en los hombros, nudo en el estómago, calor en la cara. El escaneo corporal afina esa lectura interna, lo que permite detectar una emoción antes de que escale.',
      'También entrena una relación distinta con la incomodidad: observar una sensación desagradable con curiosidad, en lugar de luchar contra ella, suele reducir el sufrimiento añadido. Es un componente central del programa MBSR, cuyo conjunto cuenta con evidencia metaanalítica en ansiedad, depresión y dolor.',
    ],
    tips: [
      'No hace falta sentir algo en cada zona: «no siento nada aquí» también es una observación válida.',
      'Si encuentras dolor, explora sus bordes, su textura, si late o es constante, en vez de su significado.',
      'Puede hacerse acostado, pero si te duermes, prueba sentado.',
    ],
    obstacles: [
      { q: 'Al prestar atención al cuerpo aparece ansiedad.', a: 'Reduce la intensidad: escanea sólo manos y pies, o vuelve a un ancla externa como los sonidos. Si te ocurre a menudo, coméntalo con tu terapeuta.' },
      { q: 'Me aburro.', a: 'El aburrimiento también es una sensación que se puede explorar. ¿Dónde se siente? ¿Cambia?' },
    ],
    cautions: 'En personas con historia de trauma la atención al cuerpo puede activar recuerdos. Mantén los ojos abiertos si lo necesitas y regula la intensidad.',
    steps: [
      { title: 'Llegar', instruction: 'Siente el peso del cuerpo sobre la superficie que te sostiene.', durationSec: 45 },
      { title: 'Pies y piernas', instruction: 'Lleva la atención a los pies: temperatura, contacto, hormigueo. Sube lentamente por tobillos, pantorrillas y rodillas.', durationSec: 120 },
      { title: 'Pelvis y abdomen', instruction: 'Nota el movimiento del abdomen con la respiración, sin modificarlo.', durationSec: 90, kind: 'breath' },
      { title: 'Espalda y pecho', instruction: 'Recorre la espalda de abajo arriba. Si hay tensión, sólo regístrala.', durationSec: 90 },
      { title: 'Brazos y manos', instruction: 'Hombros, brazos, antebrazos, manos. Nota las yemas de los dedos.', durationSec: 90 },
      { title: 'Cuello y rostro', instruction: 'Mandíbula, labios, mejillas, ojos, frente. Muchas tensiones se esconden aquí.', durationSec: 90 },
      { title: 'Cuerpo entero', instruction: 'Siente el cuerpo como un todo, respirando.', durationSec: 60, kind: 'silence' },
    ],
  },
  {
    id: 'respiracion-resonante',
    title: 'Respiración resonante',
    family: 'attentional',
    skills: ['resilience'],
    summary:
      'Respirar alrededor de seis veces por minuto, con exhalaciones largas, para llevar al sistema nervioso hacia la calma.',
    mechanism:
      'La respiración lenta aumenta la variabilidad de la frecuencia cardíaca y la actividad vagal; la exhalación prolongada se asocia a reducción de la activación fisiológica.',
    evidenceLevel: 'moderada',
    evidence: [
      ZACCARO_2018,
      {
        citation:
          'Lehrer, P. M., & Gevirtz, R. (2014). Heart rate variability biofeedback: How and why does it work? Frontiers in Psychology, 5, 756.',
        doi: '10.3389/fpsyg.2014.00756',
      },
    ],
    howItWorks: [
      'Al inhalar, el corazón se acelera levemente; al exhalar, se desacelera. A un ritmo cercano a seis respiraciones por minuto, este vaivén entra en resonancia con los reflejos que regulan la presión arterial y la variabilidad cardíaca se amplifica. Una mayor variabilidad se asocia a mejor capacidad de regulación emocional.',
      'Es una de las pocas herramientas que actúan «de abajo arriba»: no necesitas cambiar lo que piensas para bajar la activación. Por eso es útil como primer paso cuando la emoción es demasiado intensa para trabajar con ella cognitivamente.',
    ],
    tips: [
      'No fuerces el volumen de aire: lenta no significa profunda.',
      'Respira por la nariz si puedes; exhalar por la boca con los labios entornados también funciona.',
      'Practicarla en calma hace que esté disponible cuando la necesites en tensión.',
    ],
    obstacles: [
      { q: 'Me mareo.', a: 'Estás moviendo demasiado aire. Reduce la profundidad y mantén sólo la lentitud.' },
      { q: 'Siento que me falta el aire.', a: 'Acorta un poco el ciclo. El ritmo ideal varía entre personas; la guía es una referencia.' },
    ],
    steps: [
      { title: 'Preparar', instruction: 'Una mano en el abdomen. Deja que la respiración se haga más lenta por sí sola.', durationSec: 45 },
      { title: 'Resonar', instruction: 'Sigue el círculo: inhala mientras se expande, exhala mientras se contrae. Sin esfuerzo.', durationSec: 240, kind: 'breath' },
      { title: 'Soltar', instruction: 'Deja la respiración libre. Nota el estado del cuerpo.', durationSec: 45, kind: 'silence' },
    ],
  },
  {
    id: 'suspiro-ciclico',
    title: 'Suspiro cíclico',
    family: 'attentional',
    skills: ['resilience'],
    summary:
      'Doble inhalación por la nariz seguida de una exhalación larga por la boca, repetida durante cinco minutos.',
    mechanism:
      'La exhalación prolongada y el «suspiro fisiológico» se asocian a menor activación y mejor afecto en un ensayo aleatorizado reciente.',
    evidenceLevel: 'preliminar',
    evidence: [
      {
        citation:
          'Balban, M. Y., Neri, E., Kogon, M. M., et al. (2023). Brief structured respiration practices enhance mood and reduce physiological arousal. Cell Reports Medicine, 4(1), 100895.',
        doi: '10.1016/j.xcrm.2022.100895',
        note: 'Ensayo único, muestra sana y no clínica, sin seguimiento a largo plazo.',
      },
      ZACCARO_2018,
    ],
    howItWorks: [
      'El suspiro es un reflejo natural: ocurre espontáneamente varias veces por hora y con más frecuencia bajo estrés o antes de dormir. La segunda inhalación corta reabre alvéolos colapsados; la exhalación larga activa la rama de frenado del sistema nervioso.',
      'En el estudio de Balban y colaboradores, cinco minutos diarios de suspiro cíclico durante un mes mejoraron el afecto positivo algo más que una meditación de atención plena del mismo tiempo. Es un resultado prometedor pero aún aislado.',
    ],
    tips: [
      'Las dos inhalaciones son por la nariz: una larga y otra corta para «terminar de llenar».',
      'La exhalación debe ser claramente más larga que la inhalación.',
      'Úsala como «botón de pausa» de un minuto antes de una conversación difícil.',
    ],
    obstacles: [{ q: '¿Puedo hacerlo con los ojos abiertos en el trabajo?', a: 'Sí. Es discreta y no requiere postura especial.' }],
    steps: [
      { title: 'Aprender el gesto', instruction: 'Inhala por la nariz, añade un segundo sorbo corto de aire, y exhala lentamente por la boca hasta vaciar.', durationSec: 45 },
      { title: 'Suspiro cíclico', instruction: 'Durante la expansión del círculo: doble inhalación. Durante la contracción: exhalación lenta y completa.', durationSec: 240, kind: 'breath' },
      { title: 'Notar', instruction: 'Respira con normalidad y observa el cambio en el cuerpo.', durationSec: 45, kind: 'silence' },
    ],
  },

  // ============================================================ CONSTRUCTIVAS
  {
    id: 'amor-altruista',
    title: 'Meditación de amor altruista',
    family: 'constructive',
    skills: ['compassion'],
    summary:
      'Generar el deseo genuino de que otros estén bien, extendiéndolo progresivamente desde un benefactor hasta todos los seres.',
    mechanism:
      'Cultivo deliberado de un estado afectivo prosocial; la familiarización repetida lo vuelve más accesible (neuroplasticidad dependiente de la experiencia).',
    evidenceLevel: 'robusta',
    evidence: [
      {
        citation:
          'Lutz, A., Brefczynski-Lewis, J., Johnstone, T., & Davidson, R. J. (2008). Regulation of the neural circuitry of emotion by compassion meditation: Effects of meditative expertise. PLoS ONE, 3(3), e1897.',
        doi: '10.1371/journal.pone.0001897',
      },
      {
        citation:
          'Weng, H. Y., Fox, A. S., Shackman, A. J., et al. (2013). Compassion training alters altruism and neural responses to suffering. Psychological Science, 24(7), 1171–1180.',
        doi: '10.1177/0956797612469537',
      },
      {
        citation:
          'Galante, J., Galante, I., Bekkers, M.-J., & Gallacher, J. (2014). Effect of kindness-based meditation on health and well-being: A systematic review and meta-analysis. Journal of Consulting and Clinical Psychology, 82(6), 1101–1114.',
        doi: '10.1037/a0037249',
      },
    ],
    howItWorks: [
      'En la tradición tibetana que Matthieu Ricard transmite, el amor altruista se define como el deseo de que todos los seres encuentren la felicidad y sus causas. No es un sentimiento que se espera, sino una disposición que se cultiva, igual que una habilidad.',
      'Los estudios del laboratorio de Richard Davidson mostraron que meditadores expertos en compasión responden con más intensidad, en regiones vinculadas a la empatía, a sonidos de sufrimiento humano. En principiantes, sólo dos semanas de entrenamiento aumentaron la conducta altruista en un juego económico. La progresión benefactor → uno mismo → neutro → difícil → todos usa el afecto más fácil de generar como «semilla» para extenderlo.',
    ],
    tips: [
      'Las frases son andamios: si el sentimiento aparece sin ellas, suéltalas.',
      'Si no surge nada, quédate con la intención. La intención sostenida también entrena.',
      'Elige como persona difícil a alguien con fricción leve; la más difícil, para más adelante.',
    ],
    obstacles: [
      { q: 'Me siento falso/a repitiendo frases.', a: 'Es habitual al principio. Prueba a recordar un momento concreto en que esa persona estaba bien y desea que tenga más momentos así.' },
      { q: 'Hacia mí mismo/a no me sale.', a: 'Muy frecuente. Imagínate de niño/a, o cómo te desearía el bien alguien que te quiere. Si persiste la resistencia, vuelve al benefactor.' },
    ],
    cautions:
      'Dirigir benevolencia hacia uno mismo puede activar autocrítica en algunas personas («miedo a la compasión», Gilbert et al., 2011). Si ocurre, vuelve al benefactor.',
    steps: [
      { title: 'Llegar', instruction: 'Asiéntate. Deja que la respiración siga su ritmo natural.', durationSec: 45 },
      { title: 'Benefactor', instruction: 'Trae a la mente a alguien que te haya ayudado con sencillez. Nota el deseo espontáneo de que esté bien. Quédate con ese deseo más que con las palabras.', durationSec: 120 },
      { title: 'Uno mismo', instruction: 'Ofrécete el mismo deseo: que pueda estar bien, que pueda estar en paz. Si aparece resistencia, obsérvala sin forzar y vuelve al benefactor.', durationSec: 90 },
      { title: 'Persona neutra', instruction: 'Alguien a quien ves sin conocer: también quiere evitar el sufrimiento, igual que tú. Extiende el deseo.', durationSec: 90 },
      { title: 'Persona difícil', instruction: 'Opcional. Alguien con quien hay fricción leve, no la más difícil. Si la activación sube demasiado, regresa al benefactor.', durationSec: 120 },
      { title: 'Sin límites', instruction: 'Deja que el deseo de bienestar se expanda sin objeto particular, en todas direcciones, hacia todos los seres.', durationSec: 120 },
      { title: 'Descanso', instruction: 'Suelta la práctica activa. Descansa en lo que haya quedado.', durationSec: 60, kind: 'silence' },
    ],
  },
  {
    id: 'pausa-autocompasion',
    title: 'Pausa de autocompasión',
    family: 'constructive',
    skills: ['compassion', 'resilience'],
    summary:
      'Tres movimientos breves ante un momento difícil: reconocer el sufrimiento, recordar la humanidad compartida y ofrecerse amabilidad.',
    mechanism:
      'Desactiva el sistema de amenaza dirigido contra uno mismo y activa el sistema de cuidado; reduce la autocrítica sin reducir la responsabilidad.',
    evidenceLevel: 'moderada',
    evidence: [
      KIRBY_2017,
      {
        citation:
          'Neff, K. D., & Germer, C. K. (2013). A pilot study and randomized controlled trial of the mindful self-compassion program. Journal of Clinical Psychology, 69(1), 28–44.',
        doi: '10.1002/jclp.21923',
      },
    ],
    howItWorks: [
      'Kristin Neff describe la autocompasión con tres componentes: atención plena (ver el dolor sin exagerarlo ni negarlo), humanidad compartida (entender que sufrir es parte de la experiencia humana y no una prueba de que algo anda mal en ti) y amabilidad (tratarte como tratarías a un buen amigo).',
      'Un hallazgo contraintuitivo: la autocompasión no vuelve a las personas complacientes. Los estudios la asocian a mayor motivación para reparar errores, porque reduce el miedo al fracaso que lleva a evitar.',
    ],
    tips: [
      'Busca tus propias palabras: deben sonar a ti, no a una tarjeta de felicitación.',
      'El gesto físico (mano en el pecho) activa el cuidado aunque las palabras cuesten.',
      'Úsala en el momento: dura menos de cinco minutos.',
    ],
    obstacles: [{ q: '¿No es autoindulgencia?', a: 'La autoindulgencia evita el malestar; la autocompasión lo atraviesa con apoyo. Preguntarte «¿qué necesito para estar bien a largo plazo?» las distingue.' }],
    steps: [
      { title: 'Traer la dificultad', instruction: 'Recuerda una situación que te preocupa ahora, de intensidad moderada. Nota dónde se siente en el cuerpo.', durationSec: 60 },
      { title: 'Atención plena', instruction: 'Dite: «Este es un momento de sufrimiento» o «esto duele». Nombrarlo sin dramatizar.', durationSec: 45 },
      { title: 'Humanidad compartida', instruction: '«El sufrimiento es parte de la vida. Otras personas se sienten así.» No estás solo/a en esto.', durationSec: 60 },
      { title: 'Amabilidad', instruction: 'Mano en el pecho. «Que pueda ser amable conmigo. Que pueda darme lo que necesito.»', durationSec: 75 },
      { title: 'Integrar', instruction: 'Nota si algo cambió, aunque sea poco.', durationSec: 30, kind: 'silence' },
    ],
  },
  {
    id: 'tonglen',
    title: 'Tonglen: tomar y dar',
    family: 'constructive',
    skills: ['compassion'],
    summary:
      'Con la inhalación, imaginar que recibes el sufrimiento de alguien; con la exhalación, enviarle alivio y bienestar.',
    mechanism:
      'Entrena la compasión, que implica acercarse al sufrimiento ajeno con el deseo de aliviarlo, en lugar de la resonancia empática pura, que puede generar agotamiento.',
    evidenceLevel: 'preliminar',
    evidence: [
      {
        citation:
          'Klimecki, O. M., Leiberg, S., Ricard, M., & Singer, T. (2014). Differential pattern of functional brain plasticity after compassion and empathy training. Social Cognitive and Affective Neuroscience, 9(6), 873–879.',
        doi: '10.1093/scan/nst060',
      },
      KIRBY_2017,
    ],
    howItWorks: [
      'Tania Singer y Matthieu Ricard distinguieron dos respuestas al sufrimiento ajeno. La empatía, «sentir con», activa redes de dolor y, sostenida, puede llevar al agotamiento. La compasión, «sentir por» con el deseo de ayudar, activa redes asociadas a afecto positivo y vínculo. En su estudio, el entrenamiento en compasión revirtió el afecto negativo inducido por el entrenamiento en empatía.',
      'Tonglen invierte el hábito de proteger el yo: en lugar de alejarte del dolor, lo «respiras». La práctica no consiste en absorber realmente nada; es un ejercicio imaginativo que entrena la valentía de acercarse.',
    ],
    tips: [
      'Empieza por tu propio sufrimiento, o por el de alguien querido, antes de extenderlo.',
      'Imagina el sufrimiento como humo oscuro que se disuelve al entrar, no como algo que se acumula.',
      'Si te desborda, vuelve a la respiración neutra o a la pausa de autocompasión.',
    ],
    obstacles: [{ q: 'Me angustia «tomar» el sufrimiento.', a: 'Es una señal de distrés empático. Reduce la escala (un dolor pequeño, una persona) o practica primero amor altruista.' }],
    cautions: 'No recomendada en momentos de crisis personal aguda. Es una práctica avanzada; conviene tener experiencia previa en amor altruista.',
    steps: [
      { title: 'Asentar', instruction: 'Unas respiraciones neutras para llegar.', durationSec: 45, kind: 'breath' },
      { title: 'Alguien que sufre', instruction: 'Trae a la mente a una persona que está pasando un momento difícil. Siente el deseo de que esté libre de ese dolor.', durationSec: 75 },
      { title: 'Tomar y dar', instruction: 'Al inhalar, imagina recibir su sufrimiento como humo que se disuelve en tu centro. Al exhalar, envíale luz, alivio, lo que necesite.', durationSec: 180, kind: 'breath' },
      { title: 'Extender', instruction: 'Amplía a todas las personas que sufren de la misma manera en este momento.', durationSec: 90, kind: 'breath' },
      { title: 'Reposar', instruction: 'Suelta la visualización. Descansa.', durationSec: 45, kind: 'silence' },
    ],
  },
  {
    id: 'saboreo',
    title: 'Saboreo deliberado',
    family: 'constructive',
    skills: ['resilience'],
    summary:
      'Revivir un momento positivo reciente con detalle sensorial para prolongar e intensificar la emoción positiva.',
    mechanism:
      'Regulación ascendente de la emoción positiva (savoring); contrarresta el sesgo de negatividad y la «amortiguación» de lo positivo.',
    evidenceLevel: 'moderada',
    evidence: [
      { citation: 'Bryant, F. B., & Veroff, J. (2007). Savoring: A new model of positive experience. Lawrence Erlbaum.' },
      {
        citation:
          'Quoidbach, J., Berry, E. V., Hansenne, M., & Mikolajczak, M. (2010). Positive emotion regulation and well-being: Comparing the impact of eight savoring and dampening strategies. Personality and Individual Differences, 49(5), 368–373.',
        doi: '10.1016/j.paid.2010.03.048',
      },
    ],
    howItWorks: [
      'El cerebro procesa lo negativo con más rapidez y lo retiene con más fuerza que lo positivo: es un sesgo útil para sobrevivir, pero costoso para el bienestar. Las experiencias agradables tienden a pasar sin dejar huella si no se les presta atención.',
      'Saborear es regular la emoción positiva hacia arriba: prolongarla, intensificarla, compartirla. Quoidbach y colaboradores encontraron que estrategias como estar presente, expresar la emoción y recordar momentos positivos se asocian a más bienestar, mientras que «amortiguar» lo positivo («no es para tanto», «no durará») se asocia a menos.',
    ],
    tips: [
      'Los detalles sensoriales (olor, luz, temperatura) reactivan la experiencia mejor que los conceptos.',
      'Compartir lo bueno con alguien es otra forma de saborearlo.',
      'Funciona también hacia adelante: anticipar un evento agradable con detalle.',
    ],
    obstacles: [{ q: 'No encuentro nada positivo.', a: 'Baja el listón: un café caliente, una luz bonita, un mensaje amable. La práctica entrena justamente a ver lo pequeño.' }],
    steps: [
      { title: 'Elegir', instruction: 'Recuerda un momento agradable de las últimas 48 horas, aunque sea pequeño.', durationSec: 45 },
      { title: 'Detalle', instruction: '¿Qué viste, oíste, sentiste en el cuerpo? Reconstruye la escena con lentitud.', durationSec: 120 },
      { title: 'Amplificar', instruction: 'Nota dónde vive la emoción en el cuerpo y permite que ocupe un poco más de espacio.', durationSec: 90 },
      { title: 'Anclar', instruction: 'Elige una palabra o imagen para volver a este recuerdo durante el día.', durationSec: 45 },
    ],
  },
  {
    id: 'tres-cosas-buenas',
    title: 'Tres cosas buenas',
    family: 'constructive',
    skills: ['resilience', 'compassion'],
    summary:
      'Identificar tres cosas que salieron bien hoy y, para cada una, por qué ocurrió (incluido el papel de otros).',
    mechanism:
      'Reorienta la atención selectiva hacia lo que funciona y hacia la contribución ajena (gratitud estructurada).',
    evidenceLevel: 'moderada',
    evidence: [
      SELIGMAN_2005,
      {
        citation:
          'Mongrain, M., & Anselmo-Matthews, T. (2012). Do positive psychology exercises work? A replication of Seligman et al. (2005). Journal of Clinical Psychology, 68(4), 382–389.',
        doi: '10.1002/jclp.21839',
        note: 'Replicación con efectos menores y comparables a un control activo: conviene presentar la técnica sin promesas.',
      },
    ],
    howItWorks: [
      'La pregunta «¿por qué salió bien?» es la parte activa del ejercicio. Obliga a construir explicaciones que incluyen tus acciones y las de otros, lo que fortalece la percepción de agencia y de apoyo social.',
      'El ensayo original de Seligman encontró efectos que duraban meses. Replicaciones posteriores sugieren efectos más modestos. La lectura honesta: es una práctica barata, de bajo riesgo y probablemente útil, sobre todo si se sostiene en el tiempo y se escribe.',
    ],
    tips: [
      'Escríbelas en el Diario: escribir supera a pensar.',
      'Varía: si siempre son las mismas tres cosas, la práctica pierde frescura.',
      'Hazlo por la noche: también mejora la transición al descanso.',
    ],
    obstacles: [{ q: 'Se me hace repetitivo.', a: 'Prueba a hacerlo tres veces por semana en lugar de a diario; hay indicios de que la frecuencia excesiva reduce el efecto.' }],
    steps: [
      { title: 'Primera', instruction: 'Algo que salió bien hoy. ¿Por qué ocurrió? ¿Quién contribuyó?', durationSec: 90, kind: 'reflection' },
      { title: 'Segunda', instruction: 'Otra cosa, quizá más pequeña. ¿Qué la hizo posible?', durationSec: 90, kind: 'reflection' },
      { title: 'Tercera', instruction: 'Una más. Nota si aparece la tendencia a descalificarla y déjala pasar.', durationSec: 90, kind: 'reflection' },
    ],
  },
  {
    id: 'mejor-yo-posible',
    title: 'Mi mejor yo posible',
    family: 'constructive',
    skills: ['resilience'],
    summary:
      'Imaginar con detalle un futuro en el que las cosas han ido tan bien como es realista esperar, y lo que hiciste para llegar ahí.',
    mechanism:
      'Aumenta el optimismo y la claridad de metas; vincula el futuro deseado con acciones presentes.',
    evidenceLevel: 'robusta',
    evidence: [
      {
        citation:
          'King, L. A. (2001). The health benefits of writing about life goals. Personality and Social Psychology Bulletin, 27(7), 798–807.',
        doi: '10.1177/0146167201277003',
      },
      {
        citation:
          'Carrillo, A., Rubio-Aparicio, M., Molinari, G., et al. (2019). Effects of the Best Possible Self intervention: A systematic review and meta-analysis. PLoS ONE, 14(9), e0222386.',
        doi: '10.1371/journal.pone.0222386',
      },
    ],
    howItWorks: [
      'Laura King pidió a participantes escribir veinte minutos durante cuatro días sobre su mejor yo posible, y encontró mejoras en bienestar comparables a escribir sobre traumas, pero sin el malestar inicial. Un metaanálisis de 2019 confirmó efectos pequeños a moderados, sobre todo en optimismo.',
      'La clave es «realista»: no se trata de fantasear, sino de dibujar un futuro alcanzable que ilumine qué valores y metas importan. La investigación sobre «contraste mental» sugiere que funciona mejor si después identificas los obstáculos.',
    ],
    tips: [
      'Escribe en presente, como si ya hubiera ocurrido.',
      'Incluye varias áreas: vínculos, trabajo, salud, aportación a otros.',
      'Termina con un paso concreto que puedas dar esta semana.',
    ],
    obstacles: [{ q: 'Me hace sentir peor comparar con mi presente.', a: 'Céntrate en el camino, no en la distancia: ¿qué parte de ese futuro ya está empezando?' }],
    steps: [
      { title: 'Situarse', instruction: 'Imagina que han pasado cinco años y la vida ha ido tan bien como es realista esperar.', durationSec: 60 },
      { title: 'Ver la escena', instruction: 'Un día cualquiera de esa vida: ¿dónde estás, con quién, qué haces? Detalla.', durationSec: 150, kind: 'reflection' },
      { title: 'El camino', instruction: '¿Qué cualidades tuyas lo hicieron posible? ¿Qué decisiones tomaste?', durationSec: 120, kind: 'reflection' },
      { title: 'Primer paso', instruction: 'Un acto concreto de esta semana que apunte en esa dirección.', durationSec: 60, kind: 'reflection' },
    ],
  },
  {
    id: 'fortalezas',
    title: 'Fortalezas en acción',
    family: 'constructive',
    skills: ['resilience'],
    summary:
      'Identificar una fortaleza de carácter propia y planificar usarla hoy de una manera nueva.',
    mechanism:
      'Usar fortalezas personales de forma novedosa se asocia a aumentos de bienestar y reducción de síntomas depresivos sostenidos meses después.',
    evidenceLevel: 'moderada',
    evidence: [
      SELIGMAN_2005,
      { citation: 'Peterson, C., & Seligman, M. E. P. (2004). Character strengths and virtues: A handbook and classification. Oxford University Press.' },
    ],
    howItWorks: [
      'La clasificación VIA describe 24 fortalezas de carácter (curiosidad, valentía, amabilidad, prudencia, gratitud…). Cada persona tiene algunas «distintivas»: usarlas resulta energizante y auténtico.',
      'En el ensayo de Seligman de 2005, usar una fortaleza distintiva de forma nueva cada día durante una semana mostró efectos que se mantenían a los seis meses. La novedad parece importar: aplicar lo que ya sabes hacer en un contexto distinto.',
    ],
    tips: [
      'Si no conoces tus fortalezas, pregúntate: ¿qué me sale natural y me da energía?',
      'Para conocerlas con más precisión existe el cuestionario VIA (gratuito, en viacharacter.org).',
      'Combina fortalezas: curiosidad + amabilidad = preguntar de verdad a alguien cómo está.',
    ],
    obstacles: [{ q: 'No sé cuáles son mis fortalezas.', a: 'Piensa en un momento en que te sentiste orgulloso/a de cómo actuaste. ¿Qué cualidad mostraste?' }],
    steps: [
      { title: 'Recordar', instruction: 'Un momento en que te sentiste plenamente tú. ¿Qué cualidad estaba en juego?', durationSec: 90, kind: 'reflection' },
      { title: 'Nombrar', instruction: 'Ponle nombre: curiosidad, humor, perseverancia, justicia, amabilidad…', durationSec: 45, kind: 'reflection' },
      { title: 'Nuevo uso', instruction: '¿Cómo podrías usarla hoy en un contexto donde normalmente no la usas?', durationSec: 120, kind: 'reflection' },
      { title: 'Compromiso', instruction: 'Elige el momento del día y visualízate haciéndolo.', durationSec: 45 },
    ],
  },
  {
    id: 'brujula-valores',
    title: 'Brújula de valores',
    family: 'constructive',
    skills: ['resilience'],
    summary:
      'Clarificar qué cualidades de acción importan en un dominio vital y elegir un paso pequeño coherente con ellas.',
    mechanism:
      'Clarificación de valores (ACT): orienta la conducta hacia direcciones elegidas en lugar de la evitación de malestar.',
    evidenceLevel: 'moderada',
    evidence: [
      { citation: 'Hayes, S. C., Strosahl, K. D., & Wilson, K. G. (2012). Acceptance and Commitment Therapy: The process and practice of mindful change (2nd ed.). Guilford Press.' },
      {
        citation:
          'Cohen, G. L., & Sherman, D. K. (2014). The psychology of change: Self-affirmation and social psychological intervention. Annual Review of Psychology, 65, 333–371.',
        doi: '10.1146/annurev-psych-010213-115137',
      },
    ],
    howItWorks: [
      'En ACT, los valores no son metas: una meta se alcanza y se tacha, un valor es una dirección que nunca se agota (como «ir hacia el oeste»). «Casarme» es una meta; «ser un compañero presente y cariñoso» es un valor.',
      'Los valores son la razón para tolerar el malestar. Sin ellos, la vida tiende a organizarse alrededor de evitar lo desagradable, lo que a largo plazo estrecha el repertorio vital. La afirmación de valores, incluso breve, reduce la reactividad defensiva ante amenazas al yo.',
    ],
    tips: [
      'Pregunta clave: «si nadie lo supiera nunca, ¿seguiría importándome?»',
      'Prefiere verbos y adverbios («escuchar con atención») a sustantivos («familia»).',
      'Registra la acción en el Diario para cerrar el ciclo.',
    ],
    obstacles: [{ q: 'Mis valores entran en conflicto.', a: 'Es normal. No hay que elegir uno para siempre: elige cuál priorizar en esta situación concreta.' }],
    steps: [
      { title: 'Dominio', instruction: 'Elige un área: vínculos, trabajo, salud, aprendizaje, comunidad.', durationSec: 45, kind: 'reflection' },
      { title: 'Cualidad', instruction: 'Si nadie mirara, ¿qué tipo de persona querrías ser en esa área? Busca adjetivos de acción, no metas.', durationSec: 120, kind: 'reflection' },
      { title: 'Paso', instruction: 'Un acto pequeño, concreto y posible en las próximas 24 horas que exprese esa cualidad.', durationSec: 90, kind: 'reflection' },
      { title: 'Obstáculo', instruction: '¿Qué pensamiento o emoción podría aparecer para frenarte? ¿Puedes llevarlo contigo y actuar igual?', durationSec: 90, kind: 'reflection' },
    ],
  },

  // ============================================================ DECONSTRUCTIVAS
  {
    id: 'pajaros-en-el-cielo',
    title: 'Pájaros en el cielo',
    family: 'deconstructive',
    skills: ['resilience', 'attention'],
    summary:
      'Observar los pensamientos como pájaros que cruzan el cielo: aparecen, atraviesan y se van sin dejar huella. Tú eres el cielo, no los pájaros.',
    mechanism:
      'Defusión cognitiva / descentramiento: el pensamiento se experimenta como evento mental y no como verdad literal, reduciendo su credibilidad e impacto conductual.',
    evidenceLevel: 'moderada',
    evidence: [
      MASUDA_2004,
      {
        citation:
          'Levin, M. E., Hildebrandt, M. J., Lillis, J., & Hayes, S. C. (2012). The impact of treatment components suggested by the psychological flexibility model: A meta-analysis of laboratory-based component studies. Behavior Therapy, 43(4), 741–756.',
        doi: '10.1016/j.beth.2012.05.003',
      },
      {
        citation:
          'Bernstein, A., Hadash, Y., Lichtash, Y., et al. (2015). Decentering and related constructs: A critical review and metacognitive processes model. Perspectives on Psychological Science, 10(5), 599–617.',
        doi: '10.1177/1745691615594577',
      },
    ],
    howItWorks: [
      'Cuando estamos «fusionados» con un pensamiento, lo vivimos como la realidad misma: «soy un fracaso» no se siente como una frase, sino como un hecho. La defusión no discute el contenido (eso lo hace la reestructuración cognitiva clásica); cambia la relación con él.',
      'La imagen del cielo procede de la tradición contemplativa tibetana: la mente es como el cielo, y los pensamientos como pájaros o nubes que lo cruzan sin mancharlo. En estudios de laboratorio, las técnicas de defusión reducen de forma consistente la credibilidad y el malestar asociados a pensamientos negativos sobre uno mismo.',
    ],
    tips: [
      'Etiquetar con una palabra («planear», «juzgar», «recordar») acelera el distanciamiento.',
      'No intentes que haya menos pájaros: el objetivo es el cielo, no la ausencia de pájaros.',
      'Practica primero con pensamientos neutros; luego con los que más te enganchan.',
    ],
    obstacles: [{ q: 'Hay un pensamiento que vuelve una y otra vez.', a: 'Salúdalo: «ah, otra vez tú». Un pájaro que vuelve sigue siendo un pájaro.' }],
    steps: [
      { title: 'El cielo', instruction: 'Imagina la mente como un cielo amplio. No hace falta que esté despejado.', durationSec: 60 },
      { title: 'Ver pasar', instruction: 'Cada pensamiento que aparezca es un pájaro. Nómbralo con una palabra («plan», «recuerdo», «juicio») y déjalo cruzar.', durationSec: 180 },
      { title: 'Sin perseguir', instruction: 'Si te descubres volando con un pájaro, nota «me enganché» y vuelve a ser cielo. No hay que espantarlos.', durationSec: 180 },
      { title: 'Rastro', instruction: 'Nota que ningún pájaro deja huella en el cielo. Observa el espacio entre uno y otro.', durationSec: 90, kind: 'silence' },
    ],
  },
  {
    id: 'anotacion-mental',
    title: 'Anotación mental',
    family: 'deconstructive',
    skills: ['attention', 'resilience'],
    summary:
      'Nombrar suavemente cada experiencia predominante a medida que surge: «oír», «pensar», «tensión», «picor».',
    mechanism:
      'Monitoreo abierto con etiquetado: aumenta la granularidad perceptiva y reduce la identificación con los contenidos.',
    evidenceLevel: 'preliminar',
    evidence: [LUTZ_2008_TICS, DAHL_2015],
    howItWorks: [
      'Procedente de la tradición vipassana (escuela de Mahasi Sayadaw), la anotación usa etiquetas de una palabra para marcar qué está ocurriendo. La etiqueta funciona como un pequeño paso atrás: nombrar «enfado» ya no es estar completamente dentro del enfado.',
      'Con la práctica se observa que la experiencia es un flujo de eventos breves que surgen y pasan. Esta comprensión, que la tradición llama «insight» en la impermanencia, es el objetivo de las prácticas deconstructivas.',
    ],
    tips: [
      'Etiqueta con un tono suave, casi un susurro interior, y con un 95 % de atención a la experiencia y un 5 % a la palabra.',
      'Si no encuentras la palabra, usa «esto» o «sabiendo».',
      'Un ritmo de una anotación cada uno o dos segundos es suficiente.',
    ],
    obstacles: [{ q: 'Me pierdo buscando la palabra correcta.', a: 'La precisión no importa. «Sensación», «sonido» y «pensamiento» bastan para empezar.' }],
    steps: [
      { title: 'Ancla', instruction: 'Empieza anotando la respiración: «sube», «baja».', durationSec: 60, kind: 'breath' },
      { title: 'Abrir', instruction: 'Cuando otra experiencia predomine, anótala: «oír», «pensar», «picor». Luego vuelve a «sube, baja».', durationSec: 240 },
      { title: 'Sin ancla', instruction: 'Anota lo que aparezca, sin volver a la respiración.', durationSec: 120 },
      { title: 'Silencio', instruction: 'Deja las etiquetas y simplemente observa.', durationSec: 45, kind: 'silence' },
    ],
  },
  {
    id: 'conciencia-pura',
    title: 'Descanso en la conciencia pura',
    family: 'deconstructive',
    skills: ['resilience'],
    summary:
      'Dejar de seleccionar objetos de atención y reposar en el darse cuenta mismo, sin intención de cambiar nada.',
    mechanism:
      'Monitoreo abierto que tiende hacia la conciencia no dual: disminuye la elaboración autorreferencial y la reactividad a contenidos mentales.',
    evidenceLevel: 'preliminar',
    evidence: [
      DAHL_2015,
      {
        citation:
          'Josipovic, Z. (2014). Neural correlates of nondual awareness in meditation. Annals of the New York Academy of Sciences, 1307, 9–18.',
        doi: '10.1111/nyas.12261',
      },
    ],
    howItWorks: [
      'Matthieu Ricard describe la «conciencia pura» como la cualidad luminosa de la mente que permanece cuando no está ocupada por pensamientos: como el espejo que refleja imágenes sin ser ninguna de ellas. En lugar de mirar objetos, la atención reposa en el propio saber.',
      'Es la práctica más sutil del gimnasio y la que menos evidencia empírica tiene: la investigación sobre conciencia no dual es incipiente y se basa en muestras pequeñas de practicantes expertos. Se incluye por su centralidad en la tradición y su coherencia con el modelo de Dahl, Lutz y Davidson.',
    ],
    tips: [
      'No hay nada que conseguir: si buscas un estado especial, ya estás seleccionando un objeto.',
      'Los momentos breves cuentan: unos segundos de reposo genuino valen más que minutos de esfuerzo.',
      'Funciona mejor después de una práctica atencional que estabilice la mente.',
    ],
    obstacles: [{ q: 'No entiendo qué tengo que hacer.', a: 'Es normal. Prueba a preguntarte: «¿quién está escuchando este sonido?» y quédate con la apertura que deja la pregunta, sin responderla.' }],
    cautions:
      'Práctica sin anclaje: en personas con historia de disociación o trauma no elaborado puede resultar desestabilizante. Preferir prácticas ancladas y consultar con el/la terapeuta.',
    steps: [
      { title: 'Asentarse', instruction: 'Unas respiraciones con atención amplia al cuerpo entero.', durationSec: 60, kind: 'breath' },
      { title: 'Abrir', instruction: 'Deja que sonidos, sensaciones y pensamientos aparezcan sin elegir ninguno.', durationSec: 120 },
      { title: 'Reposar', instruction: 'Nota aquello que se da cuenta de todo esto. No lo busques como objeto: simplemente descansa en ello.', durationSec: 240, kind: 'silence' },
      { title: 'Regreso', instruction: 'Vuelve gradualmente a sentir el apoyo del cuerpo y el entorno.', durationSec: 45 },
    ],
  },
];

const ALL = [...MORE_PRACTICES, ...SKILL_PRACTICES, ...DBT_PRACTICES, ...SELF_PRACTICES, ...PLUS_PRACTICES, ...EXISTENTIAL_PRACTICES, ...PACK_PRACTICES];

export const PRACTICES: Practice[] = [...ALL.filter((p) => p.micro), ...BASE_PRACTICES, ...EXTRA_PRACTICES, ...ALL.filter((p) => !p.micro)];

export const PRACTICE_BY_ID: Record<string, Practice> = Object.fromEntries(
  PRACTICES.map((p) => [p.id, p]),
);

export { totalDurationSec } from './stepDuration';
