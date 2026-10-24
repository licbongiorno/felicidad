import type { ContentPack } from './types';
import type { Practice, Reference } from '../types';
import type { Article } from '../library';
import type { Program } from '../programs';
import type { Pill } from './types';
import type { GlossaryTerm } from '../glossary';

/**
 * Paquete «Sueño y activación»: el programa completo de TCC para el insomnio (TCC-I),
 * la activación conductual a fondo (Lewinsohn, Martell) y rutinas breves de movimiento y
 * respiración guiadas por texto.
 *
 * Reutiliza lo que ya existe (relajacion-progresiva, escaneo-corporal, activacion-conductual,
 * brujula-valores, revision-semanal, el diario de sueño y el de activación) y suma sólo las
 * piezas que faltaban. La ventana de sueño (restricción de sueño) lleva precauciones y una
 * alternativa más suave: el control de estímulos.
 */

// ------------------------------------------------------------ referencias
const TRAUER_2015: Reference = {
  citation:
    'Trauer, J. M., Qian, M. Y., Doyle, J. S., Rajaratnam, S. M. W., & Cunnington, D. (2015). Cognitive behavioral therapy for chronic insomnia: A systematic review and meta-analysis. Annals of Internal Medicine, 163(3), 191–204.',
  doi: '10.7326/M14-2841',
};
const EDINGER_2021: Reference = {
  citation:
    'Edinger, J. D., Arnedt, J. T., Bertisch, S. M., et al. (2021). Behavioral and psychological treatments for chronic insomnia disorder in adults: An American Academy of Sleep Medicine clinical practice guideline. Journal of Clinical Sleep Medicine, 17(2), 255–262.',
  doi: '10.5664/jcsm.8986',
};
const RIEMANN_2017: Reference = {
  citation: 'Riemann, D., Baglioni, C., Bassetti, C., et al. (2017). European guideline for the diagnosis and treatment of insomnia. Journal of Sleep Research, 26(6), 675–700.',
  doi: '10.1111/jsr.12594',
};
const BOOTZIN_1972: Reference = {
  citation: 'Bootzin, R. R. (1972). Stimulus control treatment for insomnia. Proceedings of the 80th Annual Convention of the American Psychological Association, 7, 395–396.',
};
const SPIELMAN_1987: Reference = {
  citation: 'Spielman, A. J., Saskin, P., & Thorpy, M. J. (1987). Treatment of chronic insomnia by restriction of time in bed. Sleep, 10(1), 45–56.',
};
const KYLE_2014: Reference = {
  citation:
    'Kyle, S. D., Miller, C. B., Rogers, Z., Siriwardena, A. N., MacMahon, K. M., & Espie, C. A. (2014). Sleep restriction therapy for insomnia is associated with reduced objective total sleep time, increased daytime somnolence, and objectively impaired vigilance. Sleep, 37(2), 229–237.',
  doi: '10.5665/sleep.3386',
};
const MORIN_2007: Reference = {
  citation: 'Morin, C. M., Vallières, A., & Ivers, H. (2007). Dysfunctional beliefs and attitudes about sleep (DBAS): Validation of a brief version (DBAS-16). Sleep, 30(11), 1547–1554.',
};
const HARVEY_2002: Reference = {
  citation: 'Harvey, A. G. (2002). A cognitive model of insomnia. Behaviour Research and Therapy, 40(8), 869–893.',
  doi: '10.1016/S0005-7967(01)00061-4',
};
const CARNEY_2006: Reference = {
  citation:
    'Carney, C. E., & Waters, W. F. (2006). Effects of a structured problem-solving procedure on pre-sleep cognitive arousal in college students with insomnia. Behavioral Sleep Medicine, 4(1), 13–28.',
};
const IRISH_2015: Reference = {
  citation: 'Irish, L. A., Kline, C. E., Gunn, H. E., Buysse, D. J., & Hall, M. H. (2015). The role of sleep hygiene in promoting public health: A review of empirical evidence. Sleep Medicine Reviews, 22, 23–36.',
};
const PERLIS_2005: Reference = {
  citation: 'Perlis, M. L., Jungquist, C., Smith, M. T., & Posner, D. (2005). Cognitive behavioral treatment of insomnia: A session-by-session guide. Springer.',
};
const ESPIE_2006: Reference = {
  citation: 'Espie, C. A. (2006). Overcoming insomnia and sleep problems: A self-help guide using cognitive behavioral techniques. Robinson.',
};
const LEWINSOHN_1974: Reference = {
  citation:
    'Lewinsohn, P. M. (1974). A behavioral approach to depression. En R. J. Friedman & M. M. Katz (Eds.), The psychology of depression: Contemporary theory and research (pp. 157–178). Wiley.',
};
const MARTELL_2001: Reference = { citation: 'Martell, C. R., Addis, M. E., & Jacobson, N. S. (2001). Depression in context: Strategies for guided action. W. W. Norton.' };
const MARTELL_2010: Reference = {
  citation: 'Martell, C. R., Dimidjian, S., & Herman-Dunn, R. (2010). Behavioral activation for depression: A clinician’s guide. Guilford Press.',
};
const LEJUEZ_2011: Reference = {
  citation:
    'Lejuez, C. W., Hopko, D. R., Acierno, R., Daughters, S. B., & Pagoto, S. L. (2011). Ten year revision of the brief behavioral activation treatment for depression: Revised treatment manual. Behavior Modification, 35(2), 111–161.',
  doi: '10.1177/0145445510390929',
};
const DIMIDJIAN_2006: Reference = {
  citation:
    'Dimidjian, S., Hollon, S. D., Dobson, K. S., et al. (2006). Randomized trial of behavioral activation, cognitive therapy, and antidepressant medication in the acute treatment of adults with major depression. Journal of Consulting and Clinical Psychology, 74(4), 658–670.',
  doi: '10.1037/0022-006X.74.4.658',
};
const EKERS_2014: Reference = {
  citation:
    'Ekers, D., Webster, L., Van Straten, A., et al. (2014). Behavioural activation for depression; an update of meta-analysis of effectiveness and sub group analysis. PLoS ONE, 9(6), e100100.',
  doi: '10.1371/journal.pone.0100100',
};
const RICHARDS_2016: Reference = {
  citation:
    'Richards, D. A., Ekers, D., McMillan, D., et al. (2016). Cost and outcome of behavioural activation versus cognitive behavioural therapy for depression (COBRA): A randomised, controlled, non-inferiority trial. The Lancet, 388(10047), 871–880.',
  doi: '10.1016/S0140-6736(16)31140-0',
};
const BULL_2020: Reference = {
  citation:
    'Bull, F. C., Al-Ansari, S. S., Biddle, S., et al. (2020). World Health Organization 2020 guidelines on physical activity and sedentary behaviour. British Journal of Sports Medicine, 54(24), 1451–1462.',
  doi: '10.1136/bjsports-2020-102955',
};
const DUNSTAN_2012: Reference = {
  citation:
    'Dunstan, D. W., Kingwell, B. A., Larsen, R., et al. (2012). Breaking up prolonged sitting reduces postprandial glucose and insulin responses. Diabetes Care, 35(5), 976–983.',
  doi: '10.2337/dc11-1931',
};
const SHARIAT_2018: Reference = {
  citation:
    'Shariat, A., Cleland, J. A., Danaee, M., Kargarfard, M., Sangelaji, B., & Tamrin, S. B. M. (2018). Effects of stretching exercise training and ergonomic modifications on musculoskeletal discomforts of office workers: A randomized controlled trial. Brazilian Journal of Physical Therapy, 22(2), 144–153.',
};
const KELLY_2018: Reference = {
  citation:
    'Kelly, P., Williamson, C., Niven, A. G., Hunter, R., Mutrie, N., & Richards, J. (2018). Walking on sunshine: Scoping review of the evidence for walking and mental health. British Journal of Sports Medicine, 52(12), 800–806.',
};
const MA_2017: Reference = {
  citation: 'Ma, X., Yue, Z.-Q., Gong, Z.-Q., et al. (2017). The effect of diaphragmatic breathing on attention, negative affect and stress in healthy adults. Frontiers in Psychology, 8, 874.',
  doi: '10.3389/fpsyg.2017.00874',
};
const ZACCARO_2018: Reference = {
  citation:
    'Zaccaro, A., Piarulli, A., Laurino, M., et al. (2018). How breath-control can change your life: A systematic review on psycho-physiological correlates of slow breathing. Frontiers in Human Neuroscience, 12, 353.',
  doi: '10.3389/fnhum.2018.00353',
};
const KLINE_2014: Reference = {
  citation: 'Kline, C. E. (2014). The bidirectional relationship between exercise and sleep: Implications for exercise adherence and sleep improvement. American Journal of Lifestyle Medicine, 8(6), 375–379.',
};

// ------------------------------------------------------------ prácticas
const practices: Practice[] = [
  // ============================== TCC para el insomnio
  {
    id: 'control-estimulos-noche',
    title: 'La cama, para dormir',
    family: 'constructive',
    skills: ['resilience'],
    summary: 'Armar tu plan de control de estímulos: horario fijo para levantarte, cama sólo con sueño y qué hacer si no te duermes.',
    mechanism: 'Control de estímulos (Bootzin): el cerebro vuelve a asociar la cama con dormir, no con dar vueltas despierto.',
    evidenceLevel: 'robusta',
    evidence: [BOOTZIN_1972, TRAUER_2015, EDINGER_2021],
    howItWorks: [
      'Con el insomnio, la cama se vuelve un lugar de lucha. Pasas ahí horas despierto, mirando el reloj y pensando. El cerebro aprende la lección: cama es igual a alerta. Por eso a veces te duermes en el sillón y te despiertas al llegar a la cama.',
      'El control de estímulos desarma esa asociación. Vas a la cama sólo con sueño, la usas sólo para dormir y sales de ella si no te duermes. Con las semanas, la cama vuelve a ser una señal de sueño. Es una de las técnicas con más respaldo de la TCC-I.',
      'La hora fija para levantarte es el ancla de todo. Ordena el reloj biológico y hace que la presión de sueño llegue a la misma hora cada noche.',
    ],
    tips: [
      'Elige una hora de levantarte que puedas cumplir los siete días, también el fin de semana.',
      'Prepara antes el lugar al que irás si te levantas de noche: luz tenue, una manta, algo aburrido para leer.',
      'Si te levantas de noche, enciende una luz suave para no tropezar. La seguridad va primero.',
      'No mires la hora. Gira el reloj y deja el teléfono fuera de alcance.',
    ],
    obstacles: [
      { q: 'Me da miedo levantarme y desvelarme más.', a: 'Al principio puede pasar. Las primeras noches suelen ser más cansadas. Es parte del proceso, y en dos o tres semanas el sueño suele hacerse más firme.' },
      { q: '¿Cómo sé que pasaron veinte minutos si no miro el reloj?', a: 'Calcúlalo a ojo. La regla es simple: si sientes que no te vas a dormir pronto, o te notas inquieto, levántate.' },
    ],
    steps: [
      { title: 'Llegar', instruction: 'Siéntate con algo para anotar. Respira despacio dos o tres veces.', durationSec: 30, kind: 'breath' },
      { title: 'Tu hora de levantarte', instruction: 'Elige una hora fija para levantarte todos los días. Que sea realista. Anótala.', durationSec: 60, kind: 'reflection' },
      { title: 'Sólo con sueño', instruction: 'Decide una señal de sueño real: bostezos, ojos pesados, cabeceo. Irás a la cama cuando aparezca, no antes.', durationSec: 60, kind: 'reflection' },
      { title: 'La cama, para dormir', instruction: 'Piensa qué haces hoy en la cama además de dormir. Pantallas, trabajo, comer. Elige dónde lo harás desde ahora.', durationSec: 75, kind: 'reflection' },
      { title: 'Si no te duermes', instruction: 'Si estás despierto y molesto, sal de la cama. Ve a otro cuarto con luz suave. Vuelve cuando tengas sueño.', durationSec: 60, kind: 'reflection' },
      { title: 'Tu lugar de espera', instruction: 'Elige ese lugar y qué harás allí. Algo tranquilo, sin pantallas brillantes. Una lectura sencilla o música baja sirve.', durationSec: 60, kind: 'reflection' },
      { title: 'Sin siestas largas', instruction: 'Durante estas semanas, evita las siestas. Si las necesitas, que sean breves y antes de media tarde.', durationSec: 45, kind: 'reflection' },
      { title: 'Comprometerte', instruction: 'Lee tu plan en voz baja. Dite: «Lo pruebo dos semanas, aunque las primeras noches cuesten».', durationSec: 40, kind: 'breath' },
    ],
  },
  {
    id: 'ventana-de-sueno',
    title: 'Tu ventana de sueño',
    family: 'constructive',
    skills: ['resilience'],
    summary: 'Ajustar el tiempo en la cama al tiempo que de verdad duermes, para que el sueño se vuelva más profundo y continuo.',
    mechanism: 'Restricción de sueño (Spielman): menos tiempo en la cama aumenta la presión de sueño y consolida el descanso.',
    evidenceLevel: 'robusta',
    evidence: [SPIELMAN_1987, TRAUER_2015, EDINGER_2021, KYLE_2014],
    cautions:
      'Al principio da más sueño de día. No la hagas por tu cuenta si tienes trastorno bipolar, epilepsia, apnea del sueño o estás embarazada. Tampoco si conduces o haces un trabajo de riesgo. En esos casos, consulta antes a un profesional de la salud. Si tienes sueño, no conduzcas.',
    howItWorks: [
      'Muchas personas con insomnio pasan mucho tiempo en la cama para «recuperar» sueño. Pero el sueño se estira y se vuelve liviano, lleno de despertares. La ventana de sueño hace lo contrario: junta el sueño en menos horas para que sea más firme.',
      'Primero llevas el diario de sueño una o dos semanas. Con eso calculas cuánto duermes en promedio. Esa cifra es tu ventana inicial, nunca menos de seis horas en esta versión autoguiada. La hora de levantarte queda fija y la de acostarte se calcula hacia atrás.',
      'Cada semana miras la eficiencia del sueño: horas dormidas divididas por horas en la cama. Si pasa del 90 %, sumas 15 minutos. Si está entre 85 y 90 %, mantienes. Así la ventana crece hasta encontrar lo que tu cuerpo necesita.',
      'Los estudios muestran que funciona muy bien, pero también que las primeras semanas aumentan el sueño de día (Kyle et al., 2014). Por eso pide cuidado y, mejor aún, acompañamiento profesional.',
    ],
    tips: [
      'Necesitas al menos una semana de diario de sueño antes de empezar.',
      'Planifica qué harás despierto hasta la hora de acostarte: algo tranquilo, fuera de la cama.',
      'Evita conducir o usar máquinas si notas somnolencia durante el día.',
      'Si después de tres semanas no mejora, consulta a un profesional.',
    ],
    obstacles: [
      { q: 'Me cuesta mucho quedarme despierto hasta la hora.', a: 'Es la parte difícil. Ten preparada una actividad tranquila y de pie si hace falta. No te acuestes en el sillón.' },
      { q: 'Me siento peor la primera semana.', a: 'Es esperable y suele pasar. Si el cansancio te pone en riesgo o no mejora en dos semanas, vuelve al control de estímulos y consulta.' },
    ],
    steps: [
      { title: 'Revisar las precauciones', instruction: 'Lee las precauciones de esta práctica. Si alguna es tu caso, para aquí y elige el control de estímulos.', durationSec: 45, kind: 'reflection' },
      { title: 'Tu promedio', instruction: 'Mira tu diario de sueño. Suma las horas dormidas de cada noche y divide por el número de noches.', durationSec: 90, kind: 'reflection' },
      { title: 'Tu ventana', instruction: 'Ese promedio es tu ventana. Si da menos de seis horas, usa seis. Anota la cifra.', durationSec: 45, kind: 'reflection' },
      { title: 'Las dos horas', instruction: 'Deja fija tu hora de levantarte. Resta la ventana y obtienes la hora de acostarte. Por ejemplo, 7:00 menos seis horas es 1:00.', durationSec: 75, kind: 'reflection' },
      { title: 'Mientras esperas', instruction: 'Elige qué harás antes de esa hora. Algo calmo, fuera del dormitorio y con luz suave.', durationSec: 60, kind: 'reflection' },
      { title: 'La revisión semanal', instruction: 'Fija un día para revisar. Si dormiste más del 90 % del tiempo en la cama, suma 15 minutos.', durationSec: 60, kind: 'reflection' },
      { title: 'Cuidarte', instruction: 'Decide qué harás si tienes mucho sueño de día. Por ejemplo, no conducir y pedir ayuda con los traslados.', durationSec: 45, kind: 'reflection' },
    ],
  },
  {
    id: 'creencias-sobre-el-sueno',
    title: 'Revisar lo que piensas del sueño',
    family: 'deconstructive',
    skills: ['resilience', 'attention'],
    summary: 'Detectar las ideas que te activan por la noche, como «necesito ocho horas», y cambiarlas por otras más ajustadas y calmas.',
    mechanism: 'Reestructuración cognitiva de las creencias sobre el sueño (Morin; Harvey): menos preocupación, menos activación al acostarte.',
    evidenceLevel: 'moderada',
    evidence: [MORIN_2007, HARVEY_2002, EDINGER_2021],
    howItWorks: [
      'Lo que piensas del sueño cambia cómo duermes. Ideas como «si no duermo ocho horas, mañana será un desastre» o «el insomnio me está dañando» encienden el cuerpo justo cuando necesita apagarse.',
      'Charles Morin estudió estas creencias y vio que bajan cuando la TCC-I funciona. Allison Harvey describió el círculo: preocuparte por dormir te vuelve más alerta, notas más cada señal de cansancio, y eso confirma el miedo.',
      'Esta práctica no busca pensar en positivo. Busca pensar más ajustado: mirar los datos de tu propio diario y lo que sabemos del sueño.',
    ],
    tips: [
      'Hazla de día o temprano por la tarde, no en la cama.',
      'Usa tu diario de sueño como prueba: ¿cómo fue de verdad el día después de una mala noche?',
      'Puedes anotar la creencia y la alternativa en el Diario de reestructuración.',
    ],
    obstacles: [
      { q: 'Pero es verdad que duermo mal.', a: 'Sí, y eso no se niega. Lo que revisas es lo que sigue: si una mala noche arruina sí o sí el día siguiente, o si a veces lo llevas mejor de lo que temías.' },
    ],
    steps: [
      { title: 'Llegar', instruction: 'Siéntate de día, con calma. Respira despacio tres veces.', durationSec: 30, kind: 'breath' },
      { title: 'La idea de la noche', instruction: '¿Qué piensas cuando no te duermes? Escribe la frase tal como aparece. Por ejemplo: «Mañana no voy a rendir nada».', durationSec: 75, kind: 'reflection' },
      { title: 'Cuánto la crees', instruction: 'Del 0 al 100, ¿cuánto crees esa idea ahora? ¿Y qué sientes en el cuerpo al leerla?', durationSec: 45, kind: 'reflection' },
      { title: 'Los datos', instruction: 'Recuerda días después de una mala noche. ¿Fueron todos un desastre? ¿Hubo alguno que llevaste mejor de lo que esperabas?', durationSec: 90, kind: 'reflection' },
      { title: 'Lo que sabemos', instruction: 'El cuerpo compensa: tras una mala noche, la siguiente suele ser más profunda. Las necesidades de sueño cambian de persona a persona.', durationSec: 60, kind: 'reflection' },
      { title: 'Otra frase', instruction: 'Escribe una frase más ajustada. Por ejemplo: «Quizá mañana esté cansado, pero ya he podido otras veces».', durationSec: 75, kind: 'reflection' },
      { title: 'Volver a medir', instruction: 'Del 0 al 100, ¿cuánto crees ahora la primera idea? No hace falta que baje a cero.', durationSec: 40, kind: 'reflection' },
    ],
  },
  {
    id: 'rutina-bajada-dormir',
    title: 'Rutina de bajada para dormir',
    family: 'attentional',
    skills: ['attention', 'resilience'],
    summary: 'Diez minutos antes de acostarte para cerrar el día, aflojar el cuerpo y bajar el ritmo, siempre fuera de la cama.',
    mechanism: 'Desactivación nocturna: un puente entre el día y el sueño reduce la activación física y mental que impide dormirse.',
    evidenceLevel: 'preliminar',
    evidence: [CARNEY_2006, EDINGER_2021, ZACCARO_2018],
    howItWorks: [
      'Pasar de golpe de la pantalla a la cama es como frenar un auto en seco. La mente sigue a toda velocidad. Una rutina de bajada da al cuerpo y a la mente un tiempo para cambiar de marcha.',
      'Cerrar los pendientes en un papel ayuda: en un estudio con estudiantes con insomnio, escribir las preocupaciones y un próximo paso bajó la activación mental antes de dormir (Carney y Waters, 2006). La respiración lenta y el estiramiento suave hacen lo mismo desde el cuerpo.',
      'Repetirla cada noche, en el mismo orden, la convierte en una señal: el cerebro aprende que después viene el sueño.',
    ],
    tips: [
      'Hazla entre 30 y 60 minutos antes de tu hora de acostarte.',
      'Baja la luz de la casa mientras la haces.',
      'Deja el teléfono cargando lejos del dormitorio.',
      'Muévete siempre sin dolor. Si algún movimiento molesta, omítelo.',
    ],
    obstacles: [
      { q: 'Me olvido de hacerla.', a: 'Átala a algo que ya haces cada noche, como lavarte los dientes. Primero la rutina, después el baño.' },
      { q: 'Al hacerla me despierto más.', a: 'Puede pasar si la mente se engancha con los pendientes. Escribe sólo una línea por tema y pasa al cuerpo.' },
    ],
    steps: [
      { title: 'Bajar la luz', instruction: 'Apaga las luces fuertes. Deja una lámpara suave. Siéntate fuera de la cama.', durationSec: 30, kind: 'instruction' },
      { title: 'Cerrar el día', instruction: 'En un papel, anota lo que quedó pendiente. Una línea por tema y, al lado, el próximo paso.', durationSec: 120, kind: 'reflection' },
      { title: 'Soltar el papel', instruction: 'Cierra el cuaderno y déjalo lejos. Dite: «Esto ya está anotado. Mañana sigo».', durationSec: 20, kind: 'instruction' },
      { title: 'Hombros', instruction: 'Sube los hombros hacia las orejas al inhalar. Déjalos caer al exhalar. Repite cinco veces, despacio.', durationSec: 60, kind: 'instruction' },
      { title: 'Cuello', instruction: 'Inclina la cabeza hacia un hombro, sin forzar. Respira tres veces. Cambia de lado.', durationSec: 60, kind: 'instruction' },
      { title: 'Espalda', instruction: 'Sentado, deja caer el pecho hacia las rodillas. Cuelga los brazos. Sube despacio, vértebra a vértebra.', durationSec: 60, kind: 'instruction' },
      { title: 'Respirar lento', instruction: 'Inhala por la nariz contando cuatro. Exhala por la boca contando seis. Sigue así un rato.', durationSec: 120, kind: 'breath' },
      { title: 'Notar el cuerpo', instruction: 'Recorre el cuerpo de la cabeza a los pies. Donde notes tensión, exhala y afloja un poco.', durationSec: 75, kind: 'silence' },
      { title: 'Esperar el sueño', instruction: 'Quédate tranquilo aquí con algo calmo. Ve a la cama cuando notes sueño, no antes.', durationSec: 30, kind: 'instruction' },
    ],
  },
  {
    id: 'plan-noches-dificiles',
    title: 'Plan para las noches difíciles',
    family: 'constructive',
    skills: ['resilience'],
    summary: 'Preparar qué harás si el insomnio vuelve, para que una mala racha no se convierta otra vez en un problema crónico.',
    mechanism: 'Prevención de recaídas en TCC-I: actuar pronto con lo que ya funcionó y evitar compensar con más cama.',
    evidenceLevel: 'moderada',
    evidence: [PERLIS_2005, RIEMANN_2017, ESPIE_2006],
    howItWorks: [
      'Después de mejorar, es normal tener alguna mala noche. Un viaje, un estrés o una enfermedad pueden volver a alterar el sueño. Eso no es un fracaso: es el sueño de cualquier persona.',
      'Lo que decide si el insomnio vuelve a instalarse es la respuesta. Acostarte antes, quedarte en la cama o dormir siestas largas lo alimentan. Volver pronto a lo que te funcionó lo corta.',
      'Tener el plan escrito de antemano ayuda, porque en una mala racha cuesta pensar con claridad.',
    ],
    tips: [
      'Guarda el plan en un lugar fácil de encontrar, por ejemplo en el Diario.',
      'Una o dos malas noches no piden nada especial. Activa el plan si la racha dura más de una semana.',
      'Si vuelves a dormir mal durante semanas, consulta a un profesional.',
    ],
    obstacles: [{ q: 'Si vuelvo a dormir mal, siento que todo fue en vano.', a: 'Lo aprendido no se pierde. Volver a aplicarlo suele funcionar más rápido que la primera vez.' }],
    steps: [
      { title: 'Llegar', instruction: 'Siéntate con algo para escribir. Respira despacio dos veces.', durationSec: 30, kind: 'breath' },
      { title: 'Lo que funcionó', instruction: 'Anota las tres cosas que más te ayudaron a dormir mejor. Por ejemplo: hora fija, salir de la cama, la rutina de bajada.', durationSec: 90, kind: 'reflection' },
      { title: 'Tus señales', instruction: '¿Qué te avisaría de que el insomnio vuelve? Por ejemplo: tres noches seguidas despierto más de una hora.', durationSec: 60, kind: 'reflection' },
      { title: 'Tus riesgos', instruction: '¿Qué situaciones suelen alterar tu sueño? Viajes, cambios de turno, épocas de mucho trabajo. Escríbelas.', durationSec: 60, kind: 'reflection' },
      { title: 'Lo que no harás', instruction: 'Escribe la trampa principal: «No me acostaré antes ni me quedaré en la cama para recuperar».', durationSec: 45, kind: 'reflection' },
      { title: 'Lo que harás', instruction: 'Escribe tus primeros pasos. Hora fija, salir de la cama si no duermes, retomar el diario una semana.', durationSec: 75, kind: 'reflection' },
      { title: 'Pedir ayuda', instruction: 'Anota a quién consultarías si la racha dura semanas. Puede ser tu médico o un profesional del sueño.', durationSec: 40, kind: 'reflection' },
    ],
  },
  // ============================== activación conductual
  {
    id: 'monitoreo-actividad-animo',
    title: 'Mapa de actividad y ánimo',
    family: 'attentional',
    skills: ['attention', 'resilience'],
    summary: 'Registrar qué hiciste a lo largo del día y cómo estaba tu ánimo, para descubrir qué te sube y qué te baja.',
    mechanism: 'Monitoreo de actividades (Lewinsohn; Martell): ver el vínculo entre lo que haces y cómo te sientes guía qué cambiar.',
    evidenceLevel: 'moderada',
    evidence: [LEWINSOHN_1974, MARTELL_2010, LEJUEZ_2011],
    howItWorks: [
      'Peter Lewinsohn observó que el ánimo bajo va de la mano de menos actividades gratificantes. Pero cuando estamos mal, solemos recordar el día como «todo gris». El registro muestra los matices.',
      'Al anotar cada bloque del día y puntuar el ánimo, aparecen patrones. Quizá la mañana es la peor hora. Quizá hablar con alguien sube dos puntos. Quizá quedarte en la cama de tarde te deja peor.',
      'Ese mapa es la base de la activación conductual: muestra qué actividades conviene sumar y cuáles conviene reducir.',
    ],
    tips: [
      'Anota en el momento o cada pocas horas. Al final del día se olvidan detalles.',
      'Basta con bloques de una o dos horas y pocas palabras.',
      'Haz el registro unos días antes de cambiar nada.',
      'Usa el Diario de activación para guardar cada día.',
    ],
    obstacles: [
      { q: 'Mi día no tiene nada para anotar.', a: 'Todo cuenta: estar en la cama, mirar el teléfono, comer. Ver eso con claridad ya es información valiosa.' },
      { q: 'Me da vergüenza ver lo poco que hago.', a: 'El registro no es una nota sobre ti. Es un mapa para saber por dónde empezar. Trátalo con la curiosidad de un científico.' },
    ],
    steps: [
      { title: 'Llegar', instruction: 'Siéntate con el Diario o un papel. Respira despacio dos veces.', durationSec: 30, kind: 'breath' },
      { title: 'Los bloques', instruction: 'Divide el día de hoy en bloques: mañana, mediodía, tarde y noche. O usa bloques de dos horas.', durationSec: 45, kind: 'instruction' },
      { title: 'Qué hiciste', instruction: 'En cada bloque, anota qué hiciste. Pocas palabras alcanzan: «desayuno», «teléfono en la cama», «llamé a Ana».', durationSec: 120, kind: 'reflection' },
      { title: 'Cómo estabas', instruction: 'Al lado de cada actividad, pon tu ánimo del 0 al 10. No lo pienses mucho.', durationSec: 75, kind: 'reflection' },
      { title: 'Placer y logro', instruction: 'Marca con una P lo que te dio algo de placer. Marca con una L lo que te dio sensación de logro.', durationSec: 60, kind: 'reflection' },
      { title: 'El patrón', instruction: 'Mira el mapa. ¿Qué actividades acompañan los números más altos? ¿Y los más bajos?', durationSec: 75, kind: 'reflection' },
      { title: 'Una pista', instruction: 'Anota una cosa que te gustaría hacer un poco más y otra que te gustaría hacer un poco menos.', durationSec: 45, kind: 'reflection' },
    ],
  },
  {
    id: 'jerarquia-actividades',
    title: 'Escalera de actividades',
    family: 'constructive',
    skills: ['resilience'],
    summary: 'Elegir actividades para cada área importante de tu vida y ordenarlas de la más fácil a la más difícil, para subir de a un peldaño.',
    mechanism: 'Valores por áreas y jerarquía de actividades (Lejuez; Martell): empezar por lo fácil asegura éxitos que dan impulso.',
    evidenceLevel: 'moderada',
    evidence: [LEJUEZ_2011, MARTELL_2010, EKERS_2014],
    howItWorks: [
      'En la versión breve de la activación conductual, Lejuez y su equipo proponen partir de las áreas de la vida: vínculos, trabajo o estudio, salud, ocio, casa y comunidad. En cada una se pregunta qué te importa y qué actividad lo expresaría.',
      'Después se ordenan las actividades por dificultad. Se empieza por las más fáciles. Cada pequeño logro suma energía y confianza para el siguiente peldaño.',
      'Así las actividades no son sólo «cosas para estar ocupado». Están conectadas con lo que valoras, y eso las hace más gratificantes.',
    ],
    tips: [
      'Una actividad útil es concreta: «caminar 10 minutos después de comer», no «hacer ejercicio».',
      'Si una actividad te parece difícil, pártela en dos más pequeñas.',
      'Si quieres pensar con más calma qué te importa, haz antes la Brújula de valores.',
    ],
    obstacles: [{ q: 'No sé qué me importa ahora.', a: 'Piensa en qué te importaba antes de este momento difícil, o en qué te gustaría que dijeran de ti las personas que quieres.' }],
    steps: [
      { title: 'Llegar', instruction: 'Ten a mano papel y lápiz. Respira despacio dos veces.', durationSec: 30, kind: 'breath' },
      { title: 'Las áreas', instruction: 'Escribe estas áreas en una lista: vínculos, trabajo o estudio, salud, ocio, casa y comunidad.', durationSec: 40, kind: 'instruction' },
      { title: 'Qué te importa', instruction: 'En cada área, escribe en pocas palabras qué te importa. Por ejemplo, en vínculos: «estar presente para mis amigos».', durationSec: 120, kind: 'reflection' },
      { title: 'Actividades', instruction: 'Para cada área, anota dos o tres actividades concretas que lo expresen. Que puedas hacerlas esta semana o la próxima.', durationSec: 120, kind: 'reflection' },
      { title: 'Puntuar', instruction: 'Pon a cada actividad un número del 1 al 10 según lo difícil que te parezca hoy.', durationSec: 60, kind: 'reflection' },
      { title: 'Ordenar', instruction: 'Ordena la lista de la más fácil a la más difícil. Esa es tu escalera.', durationSec: 60, kind: 'reflection' },
      { title: 'El primer peldaño', instruction: 'Elige dos actividades fáciles. Decide día, hora y lugar para cada una en los próximos tres días.', durationSec: 60, kind: 'reflection' },
    ],
  },
  {
    id: 'de-trap-a-trac',
    title: 'De TRAP a TRAC',
    family: 'constructive',
    skills: ['resilience', 'attention'],
    summary: 'Descubrir cómo la evitación te alivia un rato pero te deja peor, y elegir una respuesta alternativa que te devuelva a la vida.',
    mechanism: 'Análisis funcional de la evitación (Martell): pasar de la respuesta de escape a una acción alternativa reduce el círculo del desánimo.',
    evidenceLevel: 'moderada',
    evidence: [MARTELL_2001, MARTELL_2010, DIMIDJIAN_2006],
    howItWorks: [
      'Martell, Addis y Jacobson describieron un patrón con la sigla TRAP, en inglés. Primero hay un disparador (T). Luego una respuesta emocional (R), como tristeza o cansancio. Después aparece un patrón de evitación (AP): quedarte en la cama, no contestar, posponer.',
      'La evitación alivia en el momento. Pero a la larga quita cosas buenas a tu vida y hace que el problema crezca. Es una trampa, que en inglés se dice justo «trap».',
      'La salida es TRAC: el mismo disparador y la misma emoción, pero con un afrontamiento alternativo (AC). Una acción pequeña que te acerca a lo que te importa, aunque no tengas ganas.',
      'En el ensayo de Dimidjian y colaboradores (2006), la activación conductual fue tan eficaz como la medicación en personas con depresión moderada a grave.',
    ],
    tips: [
      'Empieza con una situación reciente y concreta, no con «toda mi vida».',
      'La respuesta alternativa puede ser muy pequeña: contestar una línea, levantarte cinco minutos.',
      'Pregúntate: «¿esto me acerca o me aleja de lo que me importa?».',
    ],
    obstacles: [
      { q: 'A veces descansar es lo que necesito.', a: 'Es cierto. La pregunta no es si descansas, sino para qué. Si te repone, es cuidado. Si te deja peor y te aleja de lo que importa, quizá sea evitación.' },
    ],
    steps: [
      { title: 'Llegar', instruction: 'Siéntate con algo para anotar. Respira despacio tres veces.', durationSec: 30, kind: 'breath' },
      { title: 'El disparador', instruction: 'Piensa en una situación reciente en la que te frenaste. ¿Qué pasó justo antes? Anótalo en una línea.', durationSec: 60, kind: 'reflection' },
      { title: 'La respuesta', instruction: '¿Qué sentiste en ese momento? Nombra la emoción y dónde la notaste en el cuerpo.', durationSec: 60, kind: 'reflection' },
      { title: 'La evitación', instruction: '¿Qué hiciste para no sentir eso? Por ejemplo: me acosté, miré el teléfono, no respondí.', durationSec: 60, kind: 'reflection' },
      { title: 'El costo', instruction: '¿Qué te dio esa salida en el momento? ¿Y qué te quitó después, en horas o días?', durationSec: 75, kind: 'reflection' },
      { title: 'La alternativa', instruction: 'Imagina el mismo disparador y la misma emoción. ¿Qué acción pequeña te acercaría a lo que te importa?', durationSec: 75, kind: 'reflection' },
      { title: 'Si pasa, entonces', instruction: 'Escribe tu plan: «Si vuelve a pasar X, entonces haré Y». Que Y sea pequeño y posible.', durationSec: 60, kind: 'reflection' },
    ],
  },
  // ============================== movimiento y respiración
  {
    id: 'estiramiento-suave-cinco',
    title: 'Estiramiento suave de cinco minutos',
    family: 'attentional',
    skills: ['attention'],
    summary: 'Una secuencia breve de estiramientos lentos, de pie o sentado, para despertar el cuerpo y soltar tensión con atención.',
    mechanism: 'Movimiento suave con atención: baja la tensión muscular y lleva la mente al cuerpo, fuera del ruido mental.',
    evidenceLevel: 'preliminar',
    evidence: [SHARIAT_2018, BULL_2020],
    howItWorks: [
      'Pasar horas en la misma postura carga los hombros, el cuello y la espalda. Un estiramiento lento devuelve movilidad y avisa al cuerpo de que puede aflojar.',
      'Moverte despacio y prestar atención a cada sensación es también una forma de práctica atencional. La mente tiene un lugar concreto donde apoyarse.',
      'Un ensayo con trabajadores de oficina encontró que estirar a diario redujo las molestias de cuello y hombros (Shariat et al., 2018).',
    ],
    tips: [
      'Estira hasta sentir una tensión agradable, nunca dolor.',
      'Si tienes una lesión, dolor fuerte o una cirugía reciente, consulta antes con un profesional de la salud.',
      'Puedes hacerla sentado si te cuesta estar de pie.',
      'Respira mientras estiras. Si contienes el aire, aflojas menos.',
    ],
    obstacles: [{ q: 'Soy muy rígido, no llego a nada.', a: 'No importa cuánto llegues. Importa moverte con atención y respirar. La flexibilidad llega sola con los días.' }],
    steps: [
      { title: 'Llegar', instruction: 'Ponte de pie o siéntate con la espalda recta. Apoya bien los pies. Respira tres veces.', durationSec: 30, kind: 'breath' },
      { title: 'Cuello', instruction: 'Lleva la oreja derecha hacia el hombro, sin forzar. Respira tres veces. Repite del otro lado.', durationSec: 40, kind: 'instruction' },
      { title: 'Hombros', instruction: 'Haz círculos lentos con los hombros hacia atrás. Cinco veces. Después cinco hacia adelante.', durationSec: 35, kind: 'instruction' },
      { title: 'Brazos arriba', instruction: 'Entrelaza los dedos y sube los brazos sobre la cabeza al inhalar. Estírate hacia el techo. Baja al exhalar.', durationSec: 35, kind: 'instruction' },
      { title: 'Costados', instruction: 'Con un brazo arriba, inclínate un poco hacia el lado contrario. Siente el costado abrirse. Cambia de lado.', durationSec: 40, kind: 'instruction' },
      { title: 'Pecho', instruction: 'Lleva las manos atrás y abre el pecho. Mira un poco hacia arriba, sin tirar del cuello.', durationSec: 30, kind: 'instruction' },
      { title: 'Espalda', instruction: 'Redondea la espalda como un gato y lleva los brazos al frente. Respira en la espalda.', durationSec: 30, kind: 'instruction' },
      { title: 'Piernas', instruction: 'Sentado, estira una pierna con el talón en el suelo. Inclínate apenas hacia adelante. Cambia de pierna.', durationSec: 40, kind: 'instruction' },
      { title: 'Notar', instruction: 'Quédate quieto. Nota cómo está el cuerpo ahora. ¿Qué cambió?', durationSec: 20, kind: 'silence' },
    ],
  },
  {
    id: 'pausa-activa-oficina',
    title: 'Pausa activa de oficina',
    family: 'attentional',
    skills: ['attention', 'resilience'],
    summary: 'Tres minutos para levantarte, mover el cuerpo y descansar la vista entre tarea y tarea.',
    mechanism: 'Cortar el tiempo sentado con movimiento breve mejora la circulación y renueva la atención.',
    evidenceLevel: 'moderada',
    evidence: [DUNSTAN_2012, BULL_2020],
    micro: true,
    howItWorks: [
      'Estar sentado muchas horas seguidas tiene efectos en la salud, incluso en personas que hacen ejercicio. Cortar ese tiempo con pausas breves de movimiento ayuda: en un estudio, levantarse cada 20 minutos mejoró la respuesta del azúcar en sangre (Dunstan et al., 2012).',
      'La pausa también descansa la atención. Mirar lejos relaja los ojos, y moverte unos minutos te ayuda a volver a la tarea con más claridad.',
    ],
    tips: [
      'Pon un recordatorio cada 45 o 60 minutos.',
      'Si no puedes levantarte, haz los movimientos sentado.',
      'Muévete siempre sin dolor.',
    ],
    obstacles: [{ q: 'Me da vergüenza moverme en la oficina.', a: 'Puedes ir al pasillo o al baño. También sirve ir a buscar agua por el camino más largo.' }],
    steps: [
      { title: 'De pie', instruction: 'Levántate y apoya bien los pies. Inhala hondo y suelta el aire despacio.', durationSec: 20, kind: 'breath' },
      { title: 'Mirar lejos', instruction: 'Aparta la vista de la pantalla. Mira algo lejano, como una ventana o una pared del fondo.', durationSec: 20, kind: 'instruction' },
      { title: 'Hombros y cuello', instruction: 'Haz cinco círculos lentos con los hombros. Luego inclina la cabeza a cada lado.', durationSec: 35, kind: 'instruction' },
      { title: 'Muñecas', instruction: 'Gira las muñecas despacio. Abre y cierra las manos varias veces.', durationSec: 20, kind: 'instruction' },
      { title: 'Piernas', instruction: 'Sube y baja los talones diez veces. Si puedes, camina un minuto.', durationSec: 60, kind: 'instruction' },
      { title: 'Volver', instruction: 'Respira una vez más. Elige la próxima tarea y vuelve a ella.', durationSec: 20, kind: 'breath' },
    ],
  },
  {
    id: 'caminata-consciente-ritmo',
    title: 'Caminata consciente a tu ritmo',
    family: 'attentional',
    skills: ['attention', 'resilience'],
    summary: 'Una caminata de diez a quince minutos, a paso normal, atenta a los sentidos y al ritmo del cuerpo.',
    mechanism: 'Une dos cosas que suben el ánimo: actividad física moderada y atención plena al presente.',
    evidenceLevel: 'moderada',
    evidence: [KELLY_2018, BULL_2020, KLINE_2014],
    howItWorks: [
      'Caminar es una de las actividades físicas más fáciles de sumar al día. Una revisión de estudios encontró que se asocia con menos síntomas de depresión y ansiedad (Kelly et al., 2018).',
      'A diferencia de la meditación caminando lenta, aquí caminas a tu paso normal. La atención va a los sentidos: lo que ves, oyes y sientes. Cuando la mente se va a los problemas, vuelves al ritmo de los pasos.',
      'Caminar de día, con luz natural, también ayuda a ordenar el reloj biológico y a dormir mejor de noche.',
    ],
    tips: [
      'Mejor de día y al aire libre, si el lugar es seguro.',
      'Deja los auriculares en el bolsillo esta vez.',
      'Si tienes una condición médica, elige un ritmo cómodo y consulta con tu médico cuánto moverte.',
    ],
    obstacles: [{ q: 'No tengo ganas de salir.', a: 'Empieza por la puerta: sal cinco minutos. Si después quieres volver, vuelve. Muchas veces las ganas llegan caminando.' }],
    steps: [
      { title: 'Arrancar', instruction: 'Antes de salir, quédate quieto un momento. Siente los pies en el suelo. Respira dos veces.', durationSec: 30, kind: 'breath' },
      { title: 'El ritmo', instruction: 'Camina a tu paso natural. Nota el ritmo de los pies: derecho, izquierdo, derecho, izquierdo.', durationSec: 120, kind: 'instruction' },
      { title: 'Ver', instruction: 'Lleva la atención a lo que ves. Colores, formas, luz. Elige tres cosas que no habías notado.', durationSec: 120, kind: 'instruction' },
      { title: 'Oír', instruction: 'Ahora escucha. Sonidos cerca y lejos. Déjalos pasar sin ponerles nombre.', durationSec: 120, kind: 'instruction' },
      { title: 'Sentir', instruction: 'Nota el aire en la cara, el balanceo de los brazos, la temperatura. Si la mente se va, vuelve a los pasos.', durationSec: 120, kind: 'instruction' },
      { title: 'Respirar al paso', instruction: 'Si te resulta cómodo, inhala durante tres pasos y exhala durante cuatro. Si no, respira libre.', durationSec: 90, kind: 'breath' },
      { title: 'Llegar', instruction: 'Antes de terminar, detente un momento. Nota cómo está tu cuerpo y tu ánimo ahora.', durationSec: 30, kind: 'silence' },
    ],
  },
  {
    id: 'respiracion-diafragmatica-movimiento',
    title: 'Respiración diafragmática con movimiento',
    family: 'attentional',
    skills: ['attention', 'resilience'],
    summary: 'Respirar con el abdomen mientras acompañas el aire con movimientos lentos de los brazos.',
    mechanism: 'La respiración lenta y abdominal activa la rama del sistema nervioso que calma; el movimiento marca el ritmo y sostiene la atención.',
    evidenceLevel: 'preliminar',
    evidence: [MA_2017, ZACCARO_2018],
    howItWorks: [
      'Cuando estamos tensos, respiramos rápido y con el pecho. La respiración diafragmática usa el músculo que está debajo de los pulmones: el abdomen sube al inhalar y baja al exhalar.',
      'Respirar así, más lento, se asocia con menos estrés y mejor atención (Ma et al., 2017). Sumar el movimiento de los brazos marca el ritmo sin tener que contar y da a la mente algo concreto que seguir.',
      'Sirve de día para bajar la tensión y de noche como parte de la rutina antes de dormir.',
    ],
    tips: [
      'No fuerces el aire. Una respiración suave alcanza.',
      'Si te mareas, vuelve a respirar normal y descansa.',
      'Puedes hacerla sentado o acostado, con los brazos en el pecho.',
    ],
    obstacles: [{ q: 'No siento que se mueva el abdomen.', a: 'Pon una mano en la panza y empuja suave la mano con el aire. Acostado boca arriba suele ser más fácil notarlo.' }],
    steps: [
      { title: 'Postura', instruction: 'Siéntate con la espalda recta o ponte de pie. Afloja los hombros.', durationSec: 20, kind: 'instruction' },
      { title: 'Manos al abdomen', instruction: 'Pon una mano en el pecho y otra en el abdomen. Respira normal y nota qué mano se mueve más.', durationSec: 45, kind: 'breath' },
      { title: 'Abdomen', instruction: 'Inhala por la nariz y deja que suba la mano del abdomen. Exhala despacio y deja que baje.', durationSec: 75, kind: 'breath' },
      { title: 'Brazos que suben', instruction: 'Al inhalar, sube los brazos por los costados hasta la altura de los hombros. Al exhalar, bájalos despacio.', durationSec: 90, kind: 'breath' },
      { title: 'Exhalar más largo', instruction: 'Haz que la bajada de los brazos dure un poco más que la subida. La exhalación se alarga sola.', durationSec: 90, kind: 'breath' },
      { title: 'Sin movimiento', instruction: 'Deja los brazos quietos. Sigue respirando con el abdomen, lento y suave.', durationSec: 60, kind: 'breath' },
      { title: 'Notar', instruction: 'Respira normal. Nota cómo está el cuerpo ahora.', durationSec: 20, kind: 'silence' },
    ],
  },
];

// ------------------------------------------------------------ artículos
const articles: Article[] = [
  {
    id: 'tcc-i-paso-a-paso',
    title: 'TCC para el insomnio, paso a paso',
    subtitle: 'Cómo se aplica en seis semanas: diario, control de estímulos, ventana de sueño, creencias, relajación y recaídas.',
    category: 'Hábitos y cuerpo',
    readingMin: 8,
    keyPoints: [
      'La TCC-I es el tratamiento recomendado en primer lugar para el insomnio crónico.',
      'Su orden habitual: registrar, recuperar la cama para dormir, ajustar el tiempo en la cama, revisar creencias, bajar la activación y prevenir recaídas.',
      'La ventana de sueño funciona muy bien, pero da más sueño de día al principio y no es para todas las personas.',
      'La higiene del sueño sola tiene efectos modestos: sirve como complemento.',
    ],
    sections: [
      {
        heading: 'Antes de empezar',
        paragraphs: [
          'El insomnio crónico es dormir mal al menos tres noches por semana durante tres meses o más, con efectos durante el día. Si roncas fuerte, te despiertas ahogándote, sientes las piernas inquietas o tienes mucho sueño de día, consulta primero a tu médico. Pueden ser otros trastornos del sueño que necesitan otra atención.',
          'Durante el programa llevarás el diario de sueño cada mañana. Toma un minuto. Es lo que te permite ver el avance real y ajustar las técnicas.',
        ],
      },
      {
        heading: 'Semanas 1 y 2: mirar y recuperar la cama',
        paragraphs: [
          'La primera semana sólo registras. No cambias nada. Así ves tu patrón real: cuánto tardas en dormirte, cuántas veces te despiertas y cuánto duermes de verdad.',
          'La segunda semana empieza el control de estímulos. Te levantas a la misma hora cada día, vas a la cama sólo con sueño y sales de ella si no te duermes. Es sencillo de explicar y exigente de hacer. Las primeras noches pueden ser más cansadas.',
        ],
      },
      {
        heading: 'Semana 3: la ventana de sueño',
        paragraphs: [
          'Con el diario calculas cuántas horas duermes en promedio. Esa es tu ventana: el tiempo que pasarás en la cama. En una versión autoguiada, nunca menos de seis horas. La hora de levantarte queda fija y la de acostarte se calcula hacia atrás.',
          'Cada semana calculas la eficiencia del sueño: horas dormidas divididas por horas en la cama, por cien. Si supera el 90 %, sumas 15 minutos a la ventana. Si está entre 85 y 90 %, la mantienes. Si es más baja, mantén la ventana y consulta con un profesional antes de reducirla.',
          'No hagas la ventana de sueño por tu cuenta si tienes trastorno bipolar, epilepsia, apnea del sueño, estás embarazada, conduces o tienes un trabajo de riesgo. Dormir menos puede desencadenar crisis o accidentes. En esos casos basta con el control de estímulos, o con la ventana guiada por un profesional.',
        ],
      },
      {
        heading: 'Semanas 4 y 5: el día, las creencias y la activación',
        paragraphs: [
          'La higiene del sueño reúne hábitos útiles: luz natural de mañana, movimiento durante el día, menos cafeína después del mediodía, poco alcohol y un dormitorio fresco y oscuro. Sola tiene efectos pequeños (Irish et al., 2015), pero suma.',
          'Las creencias sobre el sueño, como «necesito ocho horas» o «el insomnio me va a enfermar», aumentan la preocupación y la activación. Revisarlas con los datos del diario las vuelve más ajustadas. Una rutina de bajada, la relajación muscular y la respiración lenta completan el trabajo desde el cuerpo.',
        ],
      },
      {
        heading: 'Semana 6: prevenir recaídas',
        paragraphs: [
          'Una mala noche no es una recaída. Lo que conviene vigilar es la respuesta: acostarte antes, quedarte en la cama o dormir siestas largas. Esas compensaciones son las que vuelven a instalar el insomnio.',
          'Un plan escrito ayuda: qué te funcionó, qué señales te avisan y qué harás si vuelve una mala racha. Si después de unas semanas el sueño sigue mal, pide ayuda profesional.',
        ],
      },
    ],
    caveat: {
      title: 'Peor antes de mejorar',
      body: 'Las primeras dos o tres semanas suelen ser más cansadas, sobre todo con la ventana de sueño. Es un efecto conocido y pasajero. Si el cansancio te pone en riesgo o no mejora, vuelve al control de estímulos y consulta a un profesional.',
    },
    related: {
      practices: ['control-estimulos-noche', 'ventana-de-sueno', 'creencias-sobre-el-sueno', 'rutina-bajada-dormir', 'plan-noches-dificiles', 'relajacion-progresiva'],
      articles: ['insomnio-tcc', 'sueno-y-bienestar'],
    },
    references: [TRAUER_2015, EDINGER_2021, RIEMANN_2017, SPIELMAN_1987, KYLE_2014, MORIN_2007, IRISH_2015, PERLIS_2005],
  },
  {
    id: 'activacion-conductual-a-fondo',
    title: 'Activación conductual a fondo',
    subtitle: 'El modelo de Lewinsohn y Martell: por qué el desánimo se alimenta de la evitación y cómo salir paso a paso.',
    category: 'Terapias contextuales',
    readingMin: 8,
    keyPoints: [
      'El ánimo bajo se mantiene, en parte, porque al hacer menos recibimos menos cosas buenas de la vida.',
      'La evitación alivia en el momento y empeora las cosas a largo plazo: es la trampa TRAP.',
      'El método tiene pasos claros: registrar, conectar con valores, armar una escalera de actividades y elegir alternativas a la evitación.',
      'Tiene buena evidencia en depresión y es tan eficaz como la terapia cognitiva en varios ensayos.',
    ],
    diagram: {
      title: 'El círculo del desánimo',
      nodes: ['Algo difícil pasa', 'El ánimo baja', 'Evitas y haces menos', 'Recibes menos cosas buenas', 'Los problemas crecen'],
      caption: 'La activación conductual corta el círculo en la evitación: una acción pequeña en lugar de la retirada.',
    },
    sections: [
      {
        heading: 'De dónde viene',
        paragraphs: [
          'En los años setenta, Peter Lewinsohn propuso una idea sencilla. Cuando la vida da pocas recompensas, el ánimo baja. Con el ánimo bajo, hacemos menos. Y al hacer menos, las recompensas bajan todavía más.',
          'En los años noventa, el equipo de Neil Jacobson comparó las partes de la terapia cognitiva. Vio que la parte de activación, sola, funcionaba casi igual que el tratamiento completo. De ahí nació la activación conductual moderna, que Christopher Martell y colaboradores desarrollaron.',
        ],
      },
      {
        heading: 'La trampa de la evitación',
        paragraphs: [
          'Martell usa la sigla TRAP, en inglés. Un disparador (T) provoca una respuesta emocional (R), y aparece un patrón de evitación (AP). Por ejemplo: un correo difícil, angustia, cerrar la computadora y acostarte.',
          'La evitación funciona un rato: baja la angustia. Por eso se repite. Pero el correo sigue ahí, la tarde se perdió y te sientes peor. La alternativa es TRAC: el mismo disparador y la misma emoción, con un afrontamiento alternativo (AC). Por ejemplo, responder sólo la primera línea.',
          'La rumiación también puede ser una forma de evitación: dar vueltas a los problemas en vez de vivir lo que está pasando. Una salida es llevar la atención a la experiencia del momento, a lo que ves, oyes y haces.',
        ],
      },
      {
        heading: 'El método, paso a paso',
        paragraphs: [
          'Registrar: durante unos días anotas qué haces y cómo está tu ánimo. Aparecen patrones que a simple vista no se ven.',
          'Conectar con valores: en cada área de la vida, como vínculos, trabajo, salud, ocio o casa, te preguntas qué te importa. De ahí salen actividades con sentido, no sólo «cosas para estar ocupado».',
          'Armar la escalera: ordenas las actividades de la más fácil a la más difícil y empiezas por abajo. Cada una con día, hora y lugar.',
          'Actuar desde afuera hacia adentro: no esperas a tener ganas. Haces la actividad según el plan y luego miras cómo te sentiste. Las ganas suelen llegar después.',
        ],
      },
      {
        heading: 'Lo que dice la evidencia',
        paragraphs: [
          'Varios metaanálisis muestran que la activación conductual reduce los síntomas de depresión (Ekers et al., 2014). En un ensayo grande, fue tan eficaz como la terapia cognitivo-conductual, con un costo menor (Richards et al., 2016). En el estudio de Dimidjian (2006), igualó a la medicación en personas con depresión más grave.',
          'Si tu ánimo está muy bajo desde hace semanas, o tienes pensamientos de hacerte daño, esta app no reemplaza la ayuda profesional. Consulta con un profesional de la salud mental.',
        ],
      },
    ],
    related: {
      practices: ['activacion-conductual', 'monitoreo-actividad-animo', 'jerarquia-actividades', 'de-trap-a-trac', 'brujula-valores'],
      articles: ['activacion-conductual', 'ejercicio-y-animo'],
    },
    references: [LEWINSOHN_1974, MARTELL_2001, MARTELL_2010, LEJUEZ_2011, DIMIDJIAN_2006, EKERS_2014, RICHARDS_2016],
  },
  {
    id: 'moverse-y-respirar',
    title: 'Moverte y respirar a lo largo del día',
    subtitle: 'Pausas activas, estiramientos, caminatas y respiración lenta: pequeños movimientos que cuidan el cuerpo, el ánimo y el sueño.',
    category: 'Salud y trabajo',
    readingMin: 6,
    keyPoints: [
      'Estar sentado muchas horas seguidas tiene costos para la salud, aunque hagas ejercicio otro día.',
      'Cortar el tiempo sentado con pausas breves de movimiento ya ayuda.',
      'Caminar se asocia con menos síntomas de ansiedad y depresión.',
      'La respiración lenta y abdominal es una forma sencilla de bajar el estrés.',
    ],
    sections: [
      {
        heading: 'Lo que pasa cuando no te mueves',
        paragraphs: [
          'Muchos trabajos piden estar horas frente a una pantalla. El cuerpo lo nota: rigidez en el cuello, dolor de espalda, ojos cansados. La Organización Mundial de la Salud recomienda reducir el tiempo sentado y sumar movimiento, aunque sea poco (Bull et al., 2020).',
          'No hace falta un gimnasio. Levantarte unos minutos cada hora, estirar o caminar al mediodía ya cambian cómo responde el cuerpo. En un estudio, cortar el tiempo sentado con pausas breves mejoró la respuesta del azúcar en sangre (Dunstan et al., 2012).',
        ],
      },
      {
        heading: 'Movimiento y ánimo',
        paragraphs: [
          'Moverte también cuida la mente. Caminar con regularidad se asocia con menos síntomas de depresión y ansiedad (Kelly et al., 2018). Si lo haces con atención a los sentidos, sumas además un momento de pausa para la mente.',
          'El movimiento de día ayuda al sueño de noche. El ejercicio regular se asocia con dormir mejor (Kline, 2014). La luz natural de la mañana, además, ordena el reloj biológico.',
        ],
      },
      {
        heading: 'La respiración como herramienta',
        paragraphs: [
          'Respirar lento, con el abdomen y con una exhalación un poco más larga, se asocia con más calma y mejor atención (Zaccaro et al., 2018). Es una herramienta que llevas contigo a todas partes.',
          'Puedes combinarla con movimiento suave: subir los brazos al inhalar y bajarlos al exhalar. El movimiento marca el ritmo sin tener que contar.',
        ],
      },
      {
        heading: 'Moverte con cuidado',
        paragraphs: [
          'Todas las rutinas de esta app son suaves y se pueden hacer sentado. Muévete siempre sin dolor. Si tienes una lesión, una enfermedad del corazón, un embarazo o una cirugía reciente, consulta con tu médico qué movimientos te convienen.',
        ],
      },
    ],
    related: {
      practices: ['estiramiento-suave-cinco', 'pausa-activa-oficina', 'caminata-consciente-ritmo', 'respiracion-diafragmatica-movimiento', 'caminar-atencion'],
      articles: ['ejercicio-y-animo', 'estres-y-agotamiento'],
    },
    references: [BULL_2020, DUNSTAN_2012, KELLY_2018, KLINE_2014, ZACCARO_2018, MA_2017, SHARIAT_2018],
  },
];

// ------------------------------------------------------------ programas
const programs: Program[] = [
  {
    id: 'tcc-insomnio-seis-semanas',
    title: 'TCC para el insomnio',
    subtitle: 'Seis semanas con el programa completo para dormir mejor',
    description:
      'El recorrido completo de la terapia cognitivo-conductual para el insomnio: registrar el sueño, recuperar la cama para dormir, ajustar la ventana de sueño, cuidar el día, revisar las creencias y prevenir recaídas. Es más largo y más detallado que «Dormir mejor». Si tienes trastorno bipolar, epilepsia, apnea del sueño, estás embarazada o conduces por trabajo, salta la semana de la ventana de sueño y consulta a un profesional.',
    basis: 'TCC-I (Trauer et al., 2015; Edinger et al., 2021; Riemann et al., 2017); control de estímulos (Bootzin, 1972); restricción de sueño (Spielman et al., 1987).',
    rhythm: 'Diario de sueño cada mañana y unos 10 minutos de práctica por la noche, fuera de la cama.',
    weeks: [
      {
        title: 'Semana 1 · Mirar tu sueño',
        focus: 'Registrar sin cambiar',
        description: 'Llevarás el diario de sueño cada mañana y empezarás la rutina de bajada. Todavía no cambies horarios: primero, conoce tu patrón.',
        practiceIds: ['rutina-bajada-dormir'],
        articleIds: ['tcc-i-paso-a-paso', 'insomnio-tcc'],
        journalType: 'diario-sueno',
      },
      {
        title: 'Semana 2 · La cama, para dormir',
        focus: 'Control de estímulos y hora fija',
        description: 'Armarás tu plan: misma hora de levantarte, cama sólo con sueño y salir de ella si no te duermes. Suma la respiración con movimiento a la rutina de la noche.',
        practiceIds: ['control-estimulos-noche', 'respiracion-diafragmatica-movimiento'],
        articleIds: ['tcc-i-paso-a-paso'],
        journalType: 'diario-sueno',
      },
      {
        title: 'Semana 3 · Tu ventana de sueño',
        focus: 'Ajustar el tiempo en la cama',
        description: 'Con el diario calcularás tu ventana de sueño y la ajustarás cada semana. Lee antes las precauciones. Si alguna es tu caso, sigue con el control de estímulos y consulta a un profesional.',
        practiceIds: ['ventana-de-sueno'],
        articleIds: ['tcc-i-paso-a-paso'],
        journalType: 'diario-sueno',
      },
      {
        title: 'Semana 4 · Cuidar el día',
        focus: 'Higiene del sueño, luz y movimiento',
        description: 'Revisarás los hábitos del día que influyen en la noche: luz de la mañana, movimiento, cafeína y alcohol. Una caminata y un estiramiento suave te ayudarán.',
        practiceIds: ['caminata-consciente-ritmo', 'estiramiento-suave-cinco'],
        articleIds: ['sueno-y-bienestar', 'moverse-y-respirar'],
        journalType: 'diario-sueno',
      },
      {
        title: 'Semana 5 · Pensar y soltar',
        focus: 'Creencias sobre el sueño y desactivación',
        description: 'Revisarás las ideas que te activan por la noche y practicarás la relajación muscular como parte de la bajada. Deja las preocupaciones para un rato de la tarde.',
        practiceIds: ['creencias-sobre-el-sueno', 'relajacion-progresiva'],
        articleIds: ['preocupacion-y-ansiedad'],
        journalType: 'reestructuracion',
      },
      {
        title: 'Semana 6 · Mantener lo logrado',
        focus: 'Prevención de recaídas',
        description: 'Escribirás tu plan para las noches difíciles y elegirás qué rutinas mantener. Una mala noche no es una recaída: lo que cuenta es no compensar con más cama.',
        practiceIds: ['plan-noches-dificiles', 'escaneo-corporal'],
        articleIds: ['tcc-i-paso-a-paso'],
        journalType: 'diario-sueno',
      },
    ],
  },
  {
    id: 'activacion-conductual-seis-semanas',
    title: 'Activación conductual',
    subtitle: 'Seis semanas para salir del desánimo desde la acción',
    description:
      'El método completo de la activación conductual: registrar actividad y ánimo, conectar con tus valores, armar una escalera de actividades, cambiar la evitación por alternativas y mantener lo logrado. Es para el desánimo y la apatía del día a día. Si tu ánimo está muy bajo desde hace semanas, úsalo junto con ayuda profesional.',
    basis: 'Lewinsohn (1974); Martell, Addis y Jacobson (2001); Lejuez et al. (2011); Ekers et al. (2014).',
    rhythm: 'Un registro breve cada día y dos o tres actividades agendadas por semana.',
    weeks: [
      {
        title: 'Semana 1 · El mapa',
        focus: 'Registrar actividad y ánimo',
        description: 'Durante varios días anotarás qué haces y cómo está tu ánimo. No cambies nada todavía: sólo mira el mapa.',
        practiceIds: ['monitoreo-actividad-animo'],
        articleIds: ['activacion-conductual-a-fondo'],
        journalType: 'activacion',
      },
      {
        title: 'Semana 2 · Lo que te importa',
        focus: 'Valores por áreas',
        description: 'Revisarás qué te importa en cada área de la vida y lo traducirás en una escalera de actividades, de la más fácil a la más difícil.',
        practiceIds: ['brujula-valores', 'jerarquia-actividades'],
        articleIds: ['activacion-conductual'],
        journalType: 'valores',
      },
      {
        title: 'Semana 3 · Primeros peldaños',
        focus: 'Agendar y actuar sin esperar ganas',
        description: 'Agendarás actividades pequeñas de placer, logro y conexión. Una caminata cuenta. Después de cada una, anota cómo te sentiste.',
        practiceIds: ['activacion-conductual', 'caminata-consciente-ritmo'],
        articleIds: ['ejercicio-y-animo'],
        journalType: 'activacion',
      },
      {
        title: 'Semana 4 · De TRAP a TRAC',
        focus: 'Ver y cambiar la evitación',
        description: 'Aprenderás a reconocer tus patrones de evitación y a elegir una respuesta alternativa pequeña, aunque no tengas ganas.',
        practiceIds: ['de-trap-a-trac'],
        articleIds: ['activacion-conductual-a-fondo'],
        journalType: 'activacion',
      },
      {
        title: 'Semana 5 · Subir la escalera',
        focus: 'Actividades más exigentes y atención a la experiencia',
        description: 'Subirás uno o dos peldaños. Cuando aparezca la rumiación, llevarás la atención a lo que estás haciendo y saboreando.',
        practiceIds: ['jerarquia-actividades', 'saboreo'],
        articleIds: ['rumiacion'],
        journalType: 'activacion',
      },
      {
        title: 'Semana 6 · Sostener',
        focus: 'Hábitos y revisión semanal',
        description: 'Elegirás las actividades que quieres mantener y una revisión semanal para no perder el rumbo cuando el ánimo vuelva a bajar.',
        practiceIds: ['revision-semanal', 'habito-minimo'],
        articleIds: ['activacion-conductual'],
        journalType: 'activacion',
      },
    ],
  },
];

// ------------------------------------------------------------ píldoras
const pills: Pill[] = [
  {
    id: 'pildora-cama-para-dormir',
    title: 'La cama, para dormir',
    subtitle: 'Por qué salir de la cama ayuda a dormir.',
    slides: [
      { heading: 'Una lección sin querer', text: 'Si pasas horas despierto en la cama, el cerebro aprende algo. Aprende que la cama es un lugar para estar alerta.' },
      { heading: 'Por eso pasa', text: 'Te duermes en el sofá y te despiertas al llegar a la cama. No es mala suerte. Es una costumbre que se puede cambiar.' },
      { heading: 'La regla', text: 'Ve a la cama sólo con sueño. Úsala sólo para dormir. Si no te duermes, sal y vuelve cuando tengas sueño.' },
      { heading: 'El ancla', text: 'Levántate a la misma hora todos los días. También el fin de semana. Así el sueño llega a su hora.' },
      { heading: 'Paciencia', text: 'Las primeras noches cuestan. En dos o tres semanas, la cama vuelve a ser un lugar para dormir.' },
    ],
    related: { practices: ['control-estimulos-noche'], articles: ['tcc-i-paso-a-paso'] },
    references: [BOOTZIN_1972, TRAUER_2015],
  },
  {
    id: 'pildora-mitos-del-sueno',
    title: 'Tres ideas sobre el sueño',
    subtitle: 'Lo que pensamos del sueño también nos quita el sueño.',
    slides: [
      { heading: 'Lo que piensas cuenta', text: 'Dar vueltas a la idea de dormir te pone más alerta. El sueño no se puede forzar. Cuanto más lo buscas, más se va.' },
      { heading: '«Necesito ocho horas»', text: 'No todas las personas necesitan lo mismo. Algunas están bien con seis o siete horas. Mira cómo te sientes de día.' },
      { heading: '«Mañana será un desastre»', text: 'Tras una mala noche, el día suele ser más llevadero de lo que temes. Y la noche que sigue suele ser más profunda.' },
      { heading: '«Tengo que recuperar»', text: 'Acostarte antes o quedarte en la cama parece lógico. Pero hace el sueño más liviano. Es mejor mantener tu hora.' },
      { heading: 'Qué hacer', text: 'Anota la idea que te asusta. Busca en tu diario qué pasó de verdad. Escribe una frase más justa y más calma.' },
    ],
    related: { practices: ['creencias-sobre-el-sueno'], articles: ['tcc-i-paso-a-paso'] },
    references: [MORIN_2007, HARVEY_2002],
  },
  {
    id: 'pildora-trap-trac',
    title: 'De TRAP a TRAC',
    subtitle: 'Cuando escapar alivia, pero atrapa.',
    slides: [
      { heading: 'Algo pasa', text: 'Llega un mensaje difícil. Sientes un nudo en el pecho. Y entonces haces algo para no sentirlo.' },
      { heading: 'La salida fácil', text: 'Te acuestas. Miras el teléfono. No respondes. El nudo baja un poco. Por eso lo repites.' },
      { heading: 'La trampa', text: 'Pero el problema sigue ahí. Y además perdiste la tarde. Al día siguiente todo pesa más. En inglés, trampa se dice «trap».' },
      { heading: 'Otra opción', text: 'El mismo mensaje y el mismo nudo. Pero eliges otra cosa, algo pequeño. Respondes sólo una línea, o sales cinco minutos.' },
      { heading: 'Pregúntate', text: '¿Esto que voy a hacer me acerca o me aleja de lo que me importa? Esa pregunta es la llave.' },
    ],
    related: { practices: ['de-trap-a-trac', 'activacion-conductual'], articles: ['activacion-conductual-a-fondo'] },
    references: [MARTELL_2001, MARTELL_2010],
  },
  {
    id: 'pildora-moverte-cada-hora',
    title: 'Moverte un poco cada hora',
    subtitle: 'Pequeñas pausas para un cuerpo que pasa el día sentado.',
    slides: [
      { heading: 'Mucho tiempo sentado', text: 'Pasar muchas horas sentado cansa el cuerpo. Pasa aunque hagas deporte otros días.' },
      { heading: 'Poco alcanza', text: 'No hace falta mucho. Levantarte unos minutos cada hora ya ayuda al cuerpo y a la mente.' },
      { heading: 'Una pausa simple', text: 'Ponte de pie. Mira lejos de la pantalla. Mueve los hombros y el cuello. Camina un minuto.' },
      { heading: 'Respira', text: 'Antes de volver, toma aire con la panza. Suelta el aire más lento de lo que entró.' },
      { heading: 'Sin dolor', text: 'Muévete siempre con suavidad. Si algo duele, para. Si tienes una lesión, consulta a tu médico.' },
    ],
    related: { practices: ['pausa-activa-oficina', 'estiramiento-suave-cinco'], articles: ['moverse-y-respirar'] },
    references: [DUNSTAN_2012, BULL_2020],
  },
];

// ------------------------------------------------------------ glosario
const glossary: GlossaryTerm[] = [
  {
    id: 'control-de-estimulos',
    term: 'Control de estímulos',
    definition: 'Técnica de la TCC para el insomnio: ir a la cama sólo con sueño, usarla sólo para dormir y salir si no te duermes, para que la cama vuelva a ser una señal de sueño.',
    articleId: 'tcc-i-paso-a-paso',
    practiceId: 'control-estimulos-noche',
  },
  {
    id: 'ventana-de-sueno',
    term: 'Ventana de sueño (restricción de sueño)',
    definition: 'Ajustar el tiempo en la cama al tiempo que de verdad duermes, y ampliarlo poco a poco. Consolida el sueño, pero al principio da más sueño de día y no es para todas las personas.',
    articleId: 'tcc-i-paso-a-paso',
    practiceId: 'ventana-de-sueno',
  },
  {
    id: 'eficiencia-del-sueno',
    term: 'Eficiencia del sueño',
    definition: 'Porcentaje del tiempo en la cama que pasas durmiendo. Se calcula con el diario de sueño: horas dormidas divididas por horas en la cama, por cien.',
    articleId: 'tcc-i-paso-a-paso',
  },
  {
    id: 'higiene-del-sueno',
    term: 'Higiene del sueño',
    definition: 'Hábitos que favorecen el sueño, como la luz de la mañana, menos cafeína por la tarde y un dormitorio oscuro. Ayudan, pero solos tienen efectos pequeños sobre el insomnio.',
    articleId: 'sueno-y-bienestar',
  },
  {
    id: 'trap-trac',
    term: 'TRAP y TRAC',
    definition: 'Siglas en inglés de la activación conductual. TRAP es disparador, respuesta y patrón de evitación. TRAC cambia la evitación por un afrontamiento alternativo.',
    articleId: 'activacion-conductual-a-fondo',
    practiceId: 'de-trap-a-trac',
  },
];

export const SUENO_ACTIVACION_PACK: ContentPack = {
  id: 'sueno-activacion',
  practices,
  meta: {
    'control-estimulos-noche': { level: 'iniciacion', approaches: ['tcc'], module: 'sueno' },
    'ventana-de-sueno': {
      level: 'intermedio',
      prerequisites: ['control-estimulos-noche'],
      approaches: ['tcc'],
      module: 'sueno',
      risk: { level: 2, alternative: 'control-estimulos-noche' },
    },
    'creencias-sobre-el-sueno': { level: 'intermedio', approaches: ['tcc'], module: 'sueno' },
    'rutina-bajada-dormir': { level: 'iniciacion', approaches: ['relajacion', 'tcc'], module: 'sueno' },
    'plan-noches-dificiles': { level: 'intermedio', prerequisites: ['control-estimulos-noche'], approaches: ['tcc'], module: 'sueno' },
    'respiracion-diafragmatica-movimiento': { level: 'iniciacion', approaches: ['relajacion', 'mindfulness'], module: 'sueno' },
    'monitoreo-actividad-animo': { level: 'iniciacion', approaches: ['tcc'], module: 'habitos' },
    'jerarquia-actividades': { level: 'iniciacion', prerequisites: ['activacion-conductual'], approaches: ['tcc'], module: 'habitos' },
    'de-trap-a-trac': { level: 'intermedio', prerequisites: ['monitoreo-actividad-animo'], approaches: ['tcc'], module: 'habitos' },
    'estiramiento-suave-cinco': { level: 'iniciacion', approaches: ['relajacion', 'mindfulness'], module: 'habitos' },
    'pausa-activa-oficina': { level: 'iniciacion', approaches: ['relajacion', 'mindfulness'], module: 'habitos' },
    'caminata-consciente-ritmo': { level: 'iniciacion', approaches: ['mindfulness'], module: 'habitos' },
  },
  articles,
  programs,
  pills,
  glossary,
};
