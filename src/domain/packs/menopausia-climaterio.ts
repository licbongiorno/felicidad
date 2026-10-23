import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Menopausia y climaterio»: la transición vivida desde lo psicológico.
 *  - sofocos y sudores nocturnos con TCC: modelo cognitivo (Hunter y Mann), respiración pausada
 *    y reencuadre de los pensamientos sobre los sofocos (ensayo MENOS 2; guía de Hunter y Smith);
 *  - noches con sudores: se apoya en la TCC-I del paquete «Sueño y activación» y la enlaza;
 *  - memoria y concentración («niebla»): apoyos externos y menos alarma;
 *  - identidad, cuerpo y ánimo: autocompasión (enlaza «Imagen corporal»);
 *  - hablarlo sin vergüenza con la pareja, en el trabajo y en la consulta (enlaza «Sexualidad»).
 *
 * Reglas de seguridad del paquete: no se indica ningún tratamiento, medicamento, suplemento ni
 * dosis; se dice que existen tratamientos médicos hormonales y no hormonales y que se conversan
 * con ginecología o medicina clínica. Se remite a consulta ante ánimo muy bajo, ideas de no
 * querer vivir (135, 0800-345-1435, 0800-999-0091, 911, botón Ayuda), sangrados inesperados o
 * después de un año sin menstruar, y olvidos que empeoran o preocupan. Lenguaje inclusivo:
 * también atraviesan la menopausia hombres trans y personas no binarias.
 */

// ------------------------------------------------------------ referencias
const HUNTER_MANN_2010: Reference = {
  citation: 'Hunter, M. S., & Mann, E. (2010). A cognitive model of menopausal hot flushes and night sweats. Journal of Psychosomatic Research, 69(5), 491–501.',
};
const AYERS_2012: Reference = {
  citation:
    'Ayers, B., Smith, M., Hellier, J., Mann, E., & Hunter, M. S. (2012). Effectiveness of group and self-help cognitive behavior therapy in reducing problematic menopausal hot flushes and night sweats (MENOS 2): A randomized controlled trial. Menopause, 19(7), 749–759.',
};
const HUNTER_SMITH_2014: Reference = {
  citation: 'Hunter, M. S., & Smith, M. (2014). Managing hot flushes and night sweats: A cognitive behavioural self-help guide to the menopause. Routledge.',
};
const NICE_2015: Reference = {
  citation: 'National Institute for Health and Care Excellence (2015). Menopause: Diagnosis and management (NICE guideline NG23). NICE.',
  note: 'Guía actualizada posteriormente.',
};
const NEFF_2003: Reference = {
  citation: 'Neff, K. D. (2003). Self-compassion: An alternative conceptualization of a healthy attitude toward oneself. Self and Identity, 2(2), 85–101.',
  doi: '10.1080/15298860309032',
};
const NEFF_GERMER_2013: Reference = {
  citation: 'Neff, K. D., & Germer, C. K. (2013). A pilot study and randomized controlled trial of the mindful self-compassion program. Journal of Clinical Psychology, 69(1), 28–44.',
};
const EDINGER_2021: Reference = {
  citation:
    'Edinger, J. D., Arnedt, J. T., Bertisch, S. M., et al. (2021). Behavioral and psychological treatments for chronic insomnia disorder in adults: An American Academy of Sleep Medicine clinical practice guideline. Journal of Clinical Sleep Medicine, 17(2), 255–262.',
  doi: '10.5664/jcsm.8986',
};
const IRISH_2015: Reference = {
  citation: 'Irish, L. A., Kline, C. E., Gunn, H. E., Buysse, D. J., & Hall, M. H. (2015). The role of sleep hygiene in promoting public health: A review of empirical evidence. Sleep Medicine Reviews, 22, 23–36.',
};
const BULL_2020: Reference = {
  citation:
    'Bull, F. C., Al-Ansari, S. S., Biddle, S., et al. (2020). World Health Organization 2020 guidelines on physical activity and sedentary behaviour. British Journal of Sports Medicine, 54(24), 1451–1462.',
  doi: '10.1136/bjsports-2020-102955',
};

/** Aviso común: cuándo consultar y con quién, sin indicar tratamientos. */
const CONSULTA =
  'Esto no reemplaza la consulta médica. Hay tratamientos hormonales y no hormonales para los síntomas del climaterio: se conversan con ginecología o medicina clínica. Consulta si tienes un sangrado inesperado, o cualquier sangrado después de un año sin menstruar. Si el ánimo está muy bajo o aparecen ideas de no querer vivir, pide ayuda hoy: 135 (CABA y GBA), 0800-345-1435, 0800-999-0091, 911 o el botón Ayuda.';

export const MENOPAUSIA_CLIMATERIO_PACK: ContentPack = {
  id: 'menopausia-climaterio',

  // ================================================================== prácticas
  practices: [
    {
      id: 'pausa-ante-el-sofoco',
      title: 'Pausa ante el sofoco',
      family: 'attentional',
      skills: ['resilience', 'attention'],
      summary: 'Dos minutos para cuando empieza un sofoco: notar, aflojar, respirar lento y dejar que pase sin pelearte con él.',
      mechanism: 'En la TCC para los sofocos, notar el comienzo y responder con calma, en lugar de alarmarse, baja la tensión y hace que el sofoco moleste menos.',
      evidenceLevel: 'moderada',
      evidence: [HUNTER_MANN_2010, AYERS_2012, HUNTER_SMITH_2014],
      howItWorks: [
        'Un sofoco es una ola de calor que sube por el pecho, el cuello y la cara. A veces llega con sudor, palpitaciones o un poco de ansiedad. Dura unos minutos y se va solo.',
        'Myra Hunter y Eleanor Mann describieron un modelo cognitivo de los sofocos. El estrés puede hacerlos más seguidos. Y lo que pensamos en el momento («todos se dan cuenta», «no lo aguanto») los hace sentir peor (Hunter y Mann, 2010).',
        'La respiración pausada y una actitud tranquila son parte del programa de TCC que se probó en el ensayo MENOS 2. No se trata de cortar el sofoco, sino de atravesarlo con menos tensión.',
      ],
      tips: [
        'Practícala primero en un momento tranquilo. Así te sale mejor cuando llega el calor.',
        'Respira lento, no profundo. Si te mareas, mueve menos aire.',
        'Ten a mano lo práctico: agua fresca, ropa en capas, un abanico.',
      ],
      obstacles: [
        { q: 'El sofoco no se va más rápido.', a: 'Es esperable. La meta no es cortarlo, sino que te moleste menos y no sume nervios. Con la práctica, muchas personas lo notan más llevadero.' },
        { q: 'Me da vergüenza parar delante de otros.', a: 'Nadie necesita ver nada. Puedes respirar lento con los ojos abiertos, mientras sigues la charla.' },
      ],
      micro: true,
      steps: [
        { title: 'Notar', instruction: 'Cuando sientas que empieza el calor, dítelo por dentro: «Empieza un sofoco».', durationSec: 15, kind: 'instruction' },
        { title: 'Aflojar', instruction: 'Baja los hombros. Afloja la mandíbula y las manos. Si puedes, sácate una capa de ropa.', durationSec: 20, kind: 'instruction' },
        { title: 'Respirar lento', instruction: 'Inhala por la nariz contando cuatro. Exhala despacio contando seis. Lento, no profundo.', durationSec: 60, kind: 'breath' },
        { title: 'Una frase tranquila', instruction: 'Dite algo amable y cierto: «Es calor. Ya sé cómo es. En unos minutos pasa».', durationSec: 20, kind: 'instruction' },
        { title: 'Dejar pasar', instruction: 'Sigue respirando lento. Mira cómo el calor sube, llega arriba y empieza a bajar.', durationSec: 45, kind: 'breath' },
        { title: 'Volver', instruction: 'Cuando baje, toma un poco de agua fresca. Vuelve a lo que estabas haciendo.', durationSec: 15, kind: 'instruction' },
      ],
    },
    {
      id: 'lo-que-me-digo-del-sofoco',
      title: 'Lo que me digo cuando llega el calor',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Anotar los pensamientos que aparecen con un sofoco, sobre todo los de vergüenza o alarma, y buscar otros más justos y útiles.',
      mechanism: 'Reencuadre cognitivo: los pensamientos catastróficos o de vergüenza aumentan el malestar del sofoco. Revisarlos baja cuánto molesta.',
      evidenceLevel: 'moderada',
      evidence: [HUNTER_MANN_2010, AYERS_2012, HUNTER_SMITH_2014],
      howItWorks: [
        'Según el modelo de Hunter y Mann (2010), el mismo sofoco se vive distinto según lo que pensamos de él. «Todos me miran», «voy a quedar mal» o «no voy a aguantar» suman vergüenza y ansiedad.',
        'En el ensayo MENOS 2, la TCC en grupo y la TCC de autoayuda con un libro redujeron cuánto molestaban los sofocos y sudores nocturnos, comparadas con la atención habitual (Ayers y colaboradores, 2012). Revisar estos pensamientos es una de sus partes.',
        'No se trata de pensar «en positivo». Se trata de mirar los hechos: muchas veces los demás no notan nada, o lo notan menos de lo que creemos.',
      ],
      tips: [
        'Escribe el pensamiento tal como aparece, aunque suene exagerado.',
        'Pregúntate qué le dirías a una persona querida que piensa lo mismo.',
        'Prueba la frase nueva durante una semana y mira cómo te deja.',
      ],
      obstacles: [
        { q: 'Es verdad que se me nota: se me enrojece la cara y transpiro.', a: 'Puede ser. El reencuadre no niega lo que pasa. Busca una frase justa: «Se nota un poco. Le pasa a mucha gente. Puedo seguir igual».' },
        { q: 'No sé qué pienso, sólo siento el calor.', a: 'Empieza por la emoción: ¿vergüenza, miedo, enojo? Desde ahí suele aparecer la frase que la acompaña.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Siéntate con algo para escribir. Respira lento dos o tres veces.', durationSec: 30, kind: 'breath' },
        { title: 'Un sofoco reciente', instruction: 'Recuerda un sofoco que te haya molestado. ¿Dónde estabas y con quién?', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que pensaste', instruction: 'Anota lo que te dijiste en ese momento. Por ejemplo: «todos se dan cuenta» o «no lo soporto».', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que sentiste', instruction: 'Nombra la emoción: vergüenza, miedo, enojo, cansancio. Del cero al diez, ¿cuánto?', durationSec: 40, kind: 'reflection' },
        { title: 'Mirar los hechos', instruction: '¿Qué pasó de verdad? ¿Alguien dijo algo? ¿Cuánto duró? ¿Pudiste seguir con lo que hacías?', durationSec: 60, kind: 'reflection' },
        { title: 'Una frase más justa', instruction: 'Escribe una frase nueva, cierta y amable. Por ejemplo: «Es un sofoco. Pasa. Puedo seguir».', durationSec: 60, kind: 'reflection' },
        { title: 'Para la próxima', instruction: 'Guarda la frase en el celular o en un papel. Úsala la próxima vez que llegue el calor.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'noches-de-calor-y-desvelo',
      title: 'Noches de calor y desvelo',
      family: 'constructive',
      skills: ['resilience'],
      summary: 'Armar un plan para las noches con sudores: preparar el dormitorio, qué hacer al despertarte y cómo no pelear con el insomnio.',
      mechanism: 'Combina la TCC para los sudores nocturnos con la TCC para el insomnio: preparar el entorno, responder con calma y no quedarse dando vueltas en la cama.',
      evidenceLevel: 'moderada',
      evidence: [AYERS_2012, HUNTER_SMITH_2014, EDINGER_2021, IRISH_2015],
      howItWorks: [
        'Los sudores nocturnos son sofocos que llegan durante el sueño. Despiertan, y a veces cuesta volver a dormir. Con el tiempo puede aparecer el miedo a la noche, y ese miedo también desvela.',
        'El programa de Hunter y Smith (2014) propone preparar el dormitorio, responder al sudor con calma y no quedarse en la cama luchando. Para el insomnio, la TCC-I es el tratamiento recomendado en primer lugar (Edinger y colaboradores, 2021).',
        'La higiene del sueño sola ayuda poco cuando el insomnio ya está instalado (Irish y colaboradores, 2015). Sirve como base, junto con el resto del plan.',
      ],
      tips: [
        'Si compartes la cama, pueden acordar juntos la temperatura y las mantas.',
        'Deja preparada una remera seca y una toalla, para no tener que buscarlas de noche.',
        'Si el insomnio dura semanas, prueba el programa completo de TCC para el insomnio de la app.',
      ],
      obstacles: [
        { q: 'Me despierto con mucho sudor varias veces por noche.', a: 'Es agotador. Cuéntalo en la consulta médica: hay tratamientos que pueden ayudar. Mientras tanto, el plan sirve para volver a dormir con menos lucha.' },
        { q: 'Si me levanto, me desvelo más.', a: 'Levantarte es sólo si llevas un rato largo sin dormir y notas inquietud. Cambiarte y respirar lento puede bastar.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Siéntate de día, con algo para escribir. Respira lento dos veces.', durationSec: 30, kind: 'breath' },
        { title: 'El dormitorio', instruction: 'Anota qué puedes cambiar: ventana, ventilador, sábanas livianas, mantas en capas que se puedan sacar.', durationSec: 60, kind: 'reflection' },
        { title: 'A mano', instruction: 'Elige qué dejarás junto a la cama: agua fresca, una remera seca, una toalla chica.', durationSec: 45, kind: 'reflection' },
        { title: 'Al despertarte', instruction: 'Escribe tu respuesta: no mirar la hora, sacarte una capa, respirar lento y decirte «es calor, pasa».', durationSec: 60, kind: 'reflection' },
        { title: 'Si no vuelves a dormir', instruction: 'Si pasa un rato largo y notas inquietud, sal de la cama a un lugar tranquilo. Vuelve cuando tengas sueño.', durationSec: 45, kind: 'reflection' },
        { title: 'De día', instruction: 'Anota tu hora fija para levantarte. Evita siestas largas, aunque hayas dormido mal.', durationSec: 40, kind: 'reflection' },
        { title: 'Lo que te dices', instruction: 'Cambia «mañana no voy a poder con nada» por algo más justo: «Dormí poco. Igual puedo con lo importante».', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'niebla-mental-con-apoyos',
      title: 'Niebla mental: apoyos para la memoria',
      family: 'constructive',
      skills: ['attention', 'compassion'],
      summary: 'Elegir dos o tres apoyos externos para los olvidos y la dificultad para concentrarte, y bajar la alarma sobre lo que significan.',
      mechanism: 'Sacar la memoria afuera (listas, rutinas, un solo lugar para cada cosa) reduce la carga mental. Bajar la preocupación libera atención.',
      evidenceLevel: 'preliminar',
      evidence: [NICE_2015, HUNTER_SMITH_2014],
      howItWorks: [
        'En el climaterio, muchas personas cuentan que les cuesta encontrar palabras, se olvidan de lo que iban a buscar o se distraen más. Lo llaman «niebla mental». El mal sueño, los sofocos y el estrés pueden hacerla más densa.',
        'Cuando aparecen los olvidos, es común asustarse: «¿y si es algo grave?». Esa alarma ocupa atención y deja menos lugar para recordar. Por eso ayuda bajar el miedo y, a la vez, apoyarse en herramientas externas.',
        'Los apoyos externos no son trampa. Una lista o una alarma en el celular hacen el trabajo que hoy le cuesta a tu memoria. Esta práctica es de sentido común, con poca investigación específica para esta etapa.',
      ],
      tips: [
        'Empieza con un solo apoyo y úsalo una semana antes de sumar otro.',
        'Haz una cosa por vez cuando la tarea es importante.',
        'Dormir mejor suele aclarar la cabeza. Mira también el plan para las noches.',
      ],
      obstacles: [
        { q: 'Tengo miedo de que sea el comienzo de una demencia.', a: 'Es un miedo muy común. Si los olvidos empeoran, te preocupan mucho o los notan otras personas, consulta con tu médico. Es la mejor forma de salir de la duda.' },
        { q: 'En el trabajo me da vergüenza anotar todo.', a: 'Anotar es una forma de cuidar el trabajo. Mucha gente lo hace, a cualquier edad.' },
      ],
      cautions:
        'Si los olvidos empeoran rápido, te pierdes en lugares conocidos, te cuesta hacer cosas que antes hacías bien o lo notan otras personas, consulta con tu médico. ' + CONSULTA,
      steps: [
        { title: 'Llegar', instruction: 'Respira lento dos veces. Piensa en una semana común.', durationSec: 30, kind: 'breath' },
        { title: 'Los olvidos', instruction: 'Anota dos o tres olvidos recientes. Por ejemplo: las llaves, una palabra, a qué fuiste a la cocina.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que te dijiste', instruction: '¿Qué pensaste en ese momento? Anótalo. Nota si fue con alarma o con burla hacia ti.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que pesa', instruction: '¿Cómo venías durmiendo? ¿Había estrés o muchas cosas a la vez? Anota lo que pudo influir.', durationSec: 45, kind: 'reflection' },
        { title: 'Elegir apoyos', instruction: 'Elige dos: una lista diaria, alarmas en el celular, un lugar fijo para las llaves, anotar antes de cambiar de tarea.', durationSec: 60, kind: 'reflection' },
        { title: 'Una frase amable', instruction: 'Escribe algo para decirte cuando olvides algo: «Mi cabeza está cargada. Lo anoto y sigo».', durationSec: 40, kind: 'reflection' },
      ],
    },
    {
      id: 'esta-etapa-con-amabilidad',
      title: 'Esta etapa, con amabilidad',
      family: 'constructive',
      skills: ['compassion'],
      summary: 'Una pausa de autocompasión para los días de irritabilidad, ánimo bajo o extrañeza con el propio cuerpo.',
      mechanism: 'La autocompasión reconoce el malestar sin sumarle crítica. Hablarte con amabilidad baja la vergüenza y deja más energía para cuidarte.',
      evidenceLevel: 'moderada',
      evidence: [NEFF_2003, NEFF_GERMER_2013, HUNTER_SMITH_2014],
      howItWorks: [
        'El climaterio trae cambios en el cuerpo, el sueño y el ánimo. A veces llegan junto con otros cambios: hijos que se van, padres que necesitan cuidado, el trabajo. Es esperable sentirse más irritable, triste o con extrañeza en el propio cuerpo.',
        'Kristin Neff describe tres partes de la autocompasión: reconocer que duele, recordar que le pasa a mucha gente y tratarte con amabilidad (Neff, 2003). En un ensayo, un programa de autocompasión bajó el estrés y la ansiedad (Neff y Germer, 2013).',
        'No se trata de aguantar ni de forzar el buen humor. Se trata de no sumar maltrato al malestar, y de preguntarte qué necesitas hoy.',
      ],
      tips: [
        'Una mano en el pecho o en el brazo ayuda a que la voz amable se sienta.',
        'Si la irritabilidad salta con alguien, puedes hacerla después y luego reparar.',
        'Una caminata corta suele ayudar al ánimo y al sueño. Es un buen cierre para esta práctica.',
      ],
      obstacles: [
        { q: 'Siento que me estoy quejando de algo natural.', a: 'Que sea una etapa natural no quiere decir que no cueste. Reconocerlo no es quejarse: es el primer paso para cuidarte.' },
        { q: 'No me reconozco en el espejo.', a: 'Es un duelo real por una imagen conocida. Puedes mirar también lo que tu cuerpo sigue haciendo por ti. La sección de imagen corporal tiene prácticas para eso.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Pon una mano en el pecho. Respira despacio y siente el calor de la mano.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que pasa', instruction: 'Nombra lo que sientes hoy, en pocas palabras. Por ejemplo: «Estoy irritable y sin energía».', durationSec: 40, kind: 'reflection' },
        { title: 'Esto duele', instruction: 'Dite despacio: «Esto es difícil. Me está costando».', durationSec: 30, kind: 'breath' },
        { title: 'No sólo a ti', instruction: 'Recuerda a otras personas que atraviesan esta etapa. Dite: «Le pasa a mucha gente. No me pasa sólo a mí».', durationSec: 30, kind: 'breath' },
        { title: 'Una voz amable', instruction: 'Pregúntate qué le dirías a una persona querida que se siente así. Dite eso mismo, con el mismo tono.', durationSec: 45, kind: 'reflection' },
        { title: 'Qué necesitas', instruction: 'Elige un cuidado chico para hoy: descansar, caminar, pedir ayuda, decir que no a algo.', durationSec: 40, kind: 'reflection' },
      ],
    },
    {
      id: 'hablarlo-sin-verguenza',
      title: 'Hablarlo sin vergüenza',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Preparar una conversación sobre lo que te pasa en esta etapa: con tu pareja, en el trabajo o en la consulta médica.',
      mechanism: 'Hablar de los síntomas con la gente cercana baja la vergüenza y permite pedir ajustes concretos. Esto forma parte de la TCC para los sofocos.',
      evidenceLevel: 'preliminar',
      evidence: [HUNTER_MANN_2010, HUNTER_SMITH_2014, NICE_2015],
      howItWorks: [
        'Durante mucho tiempo, la menopausia se vivió en silencio. Callarla tiene un costo: la vergüenza crece, y los demás no entienden lo que pasa. Por ejemplo, la pareja puede tomar la irritabilidad o la falta de deseo como algo personal.',
        'En el modelo de Hunter y Mann (2010), la vergüenza y el miedo a que otros noten los síntomas aumentan el malestar. Contarlo de forma simple suele bajarlo.',
        'En la consulta, ayuda llevar escrito qué síntomas tienes, desde cuándo y cuánto te afectan. Así es más fácil conversar las opciones de tratamiento, hormonales y no hormonales.',
      ],
      tips: [
        'Elige un momento tranquilo, no en medio de una discusión ni de un sofoco.',
        'Habla de ti: «me pasa», «necesito». Evita los reproches.',
        'En el trabajo, pide ajustes concretos: un ventilador, cerca de una ventana, pausas cortas.',
        'Para hablar de sexualidad con tu pareja, la sección de sexualidad tiene una práctica guiada.',
      ],
      obstacles: [
        { q: 'En mi trabajo no se habla de esto.', a: 'No necesitas contar todo. Puedes pedir un ajuste concreto sin dar detalles, por ejemplo: «Me ayuda trabajar cerca de una ventana».' },
        { q: 'Mi pareja no lo entiende.', a: 'Puede necesitar información. Comparte un artículo de la app o una píldora, y conversen después de leerla.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira lento dos veces. Piensa con quién quieres hablar: tu pareja, alguien del trabajo o tu médico.', durationSec: 30, kind: 'breath' },
        { title: 'Para qué', instruction: 'Anota qué esperas de la charla. ¿Que entienda, que te ayude con algo, una consulta de tratamiento?', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que pasa', instruction: 'Escribe en dos o tres frases lo que te pasa. Por ejemplo: «Duermo mal por los sudores y estoy más irritable».', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que pides', instruction: 'Escribe un pedido concreto. Por ejemplo: «Necesito que hablemos sin enojarnos» o «¿Qué opciones de tratamiento tengo?».', durationSec: 60, kind: 'reflection' },
        { title: 'La vergüenza', instruction: 'Si aparece vergüenza, nómbrala. Dite: «Es una etapa de la vida. Hablarlo es cuidarme».', durationSec: 30, kind: 'breath' },
        { title: 'Cuándo', instruction: 'Elige un día y un momento tranquilo para la charla. Anótalo.', durationSec: 30, kind: 'reflection' },
      ],
    },
  ],

  meta: {
    'pausa-ante-el-sofoco': { level: 'iniciacion', approaches: ['tcc', 'relajacion'], module: 'etapas' },
    'lo-que-me-digo-del-sofoco': { level: 'intermedio', approaches: ['tcc'], module: 'etapas', prerequisites: ['pausa-ante-el-sofoco'] },
    'noches-de-calor-y-desvelo': { level: 'intermedio', approaches: ['tcc'], module: 'etapas', prerequisites: ['pausa-ante-el-sofoco'] },
    'niebla-mental-con-apoyos': { level: 'iniciacion', approaches: ['tcc', 'cft'], module: 'etapas' },
    'esta-etapa-con-amabilidad': { level: 'iniciacion', approaches: ['cft'], module: 'etapas' },
    'hablarlo-sin-verguenza': { level: 'intermedio', approaches: ['tcc', 'interpersonal'], module: 'etapas', prerequisites: ['esta-etapa-con-amabilidad'] },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'menopausia-y-climaterio',
      title: 'Menopausia y climaterio: lo que pasa y lo que ayuda',
      subtitle: 'El ánimo, el sueño, la memoria, el cuerpo, la sexualidad, el trabajo y la pareja en esta etapa. Qué ayuda desde lo psicológico y cuándo consultar.',
      category: 'Etapas de la vida',
      readingMin: 10,
      keyPoints: [
        'La menopausia es la última menstruación. El climaterio es la transición más larga que la rodea.',
        'Además de los sofocos, pueden cambiar el ánimo, el sueño, la memoria, el deseo y la relación con el cuerpo.',
        'La TCC ayuda con los sofocos, los sudores nocturnos y el sueño. La autocompasión y la actividad física ayudan al ánimo.',
        'Hay tratamientos médicos hormonales y no hormonales: se conversan con ginecología o medicina clínica.',
        'Ánimo muy bajo, ideas de no querer vivir o sangrados inesperados son motivos para consultar pronto.',
      ],
      sections: [
        {
          heading: 'Qué es cada cosa',
          paragraphs: [
            'La menopausia es la última menstruación. Se confirma cuando pasa un año sin menstruar. Suele llegar entre los 45 y los 55 años, aunque a veces llega antes, o por una cirugía o un tratamiento médico.',
            'El climaterio es la etapa más larga que la rodea. Incluye la perimenopausia, los años previos con ciclos irregulares, y el tiempo posterior. Cada persona lo vive distinto: algunas casi no notan cambios y otras los sienten mucho.',
            'Aquí hablamos de mujeres y de personas que atraviesan la menopausia. También la atraviesan hombres trans y personas no binarias, que muchas veces encuentran todavía menos lugar para hablarlo.',
          ],
        },
        {
          heading: 'El ánimo',
          paragraphs: [
            'En el climaterio es común sentirse más irritable, con ansiedad o con el ánimo bajo. Influyen los cambios hormonales, el mal sueño y, muchas veces, otras cargas de esta edad: hijos que se van, padres que necesitan cuidado, cambios en el trabajo o en la pareja.',
            'La guía NICE incluye la TCC entre las opciones para el ánimo bajo y la ansiedad asociados a la menopausia (NICE, 2015). La autocompasión ayuda a no sumar crítica al malestar (Neff, 2003). La actividad física regular también ayuda al ánimo y al sueño (Bull y colaboradores, 2020).',
            'Si el ánimo está muy bajo durante semanas, si dejas de disfrutar de casi todo o si aparecen ideas de no querer vivir, no es «la edad»: es un motivo para consultar pronto.',
          ],
        },
        {
          heading: 'Los sofocos y la TCC',
          paragraphs: [
            'Myra Hunter y Eleanor Mann propusieron un modelo cognitivo de los sofocos y sudores nocturnos. El estrés puede hacerlos más frecuentes. Y lo que pensamos de ellos, como «todos se dan cuenta» o «no lo aguanto», cambia cuánto nos molestan (Hunter y Mann, 2010).',
            'Con esa base armaron un programa breve de TCC. Enseña respiración pausada, manejo del estrés, revisión de los pensamientos sobre los sofocos y un plan para dormir. En el ensayo MENOS 2, la TCC en grupo y la de autoayuda con un libro bajaron cuánto molestaban los sofocos, comparadas con la atención habitual (Ayers y colaboradores, 2012).',
            'La versión de autoayuda está publicada como guía (Hunter y Smith, 2014). Las prácticas de esta sección toman sus ideas centrales.',
          ],
        },
        {
          heading: 'El sueño',
          paragraphs: [
            'Los sudores nocturnos despiertan, y a veces cuesta volver a dormir. Con el tiempo puede instalarse un insomnio que sigue aunque los sudores bajen. Para el insomnio, la TCC-I es el tratamiento recomendado en primer lugar (Edinger y colaboradores, 2021).',
            'Un dormitorio fresco, ropa de cama liviana y un horario fijo para levantarte ayudan como base. La higiene del sueño sola suele quedarse corta cuando el insomnio ya está instalado (Irish y colaboradores, 2015). Por eso conviene sumar el programa completo de TCC para el insomnio de la app.',
          ],
        },
        {
          heading: 'La memoria y la concentración',
          paragraphs: [
            'Muchas personas cuentan olvidos, dificultad para encontrar palabras o para concentrarse. Lo llaman «niebla mental». El mal sueño, los sofocos y el estrés pueden empeorarla.',
            'Ayudan los apoyos externos, como listas y alarmas, hacer una cosa por vez y dormir mejor. También ayuda bajar la alarma. Si los olvidos empeoran, te preocupan mucho o los notan otras personas, consulta con tu médico.',
          ],
        },
        {
          heading: 'El cuerpo, la identidad y la sexualidad',
          paragraphs: [
            'El cuerpo cambia, y con él, a veces, la forma de verse. Para algunas personas es un alivio dejar de menstruar. Para otras es un duelo por una etapa o por la posibilidad de tener hijos. Las dos cosas pueden convivir.',
            'El deseo sexual también puede cambiar, y puede aparecer sequedad o dolor en las relaciones. No es un fracaso personal. El dolor se consulta con ginecología, porque tiene tratamiento. Hablarlo con la pareja, sin culpas, suele aliviar a las dos personas.',
          ],
        },
        {
          heading: 'El trabajo y la pareja',
          paragraphs: [
            'En el trabajo, los sofocos y la niebla pueden dar vergüenza. No hace falta contar todo. Pedir ajustes concretos, como un ventilador, una ventana cerca o pausas cortas, suele ser suficiente.',
            'En la pareja, la irritabilidad o la falta de deseo se pueden leer como algo personal. Contar lo que pasa y pedir algo concreto ayuda a que la otra persona entienda y acompañe.',
          ],
        },
        {
          heading: 'Tratamientos médicos y cuándo consultar',
          paragraphs: [
            'Hay tratamientos médicos para los síntomas del climaterio, hormonales y no hormonales. Cada uno tiene beneficios y riesgos según la historia de cada persona. Por eso se conversan con ginecología o medicina clínica, no se deciden por cuenta propia. Esta app no indica tratamientos.',
            'Consulta pronto si tienes un sangrado inesperado o cualquier sangrado después de un año sin menstruar. Si el ánimo está muy bajo o aparecen ideas de no querer vivir, pide ayuda hoy: 135 (CABA y GBA), 0800-345-1435 (resto del país), Línea de Salud Mental 0800-999-0091, 911 o el botón Ayuda de la app.',
          ],
        },
      ],
      caveat: {
        title: 'Qué no hay en esta sección',
        body: 'No hay indicaciones de medicamentos, hormonas, suplementos ni dosis. La TCC para los sofocos tiene buena evidencia, pero sobre todo baja cuánto molestan; no reemplaza la consulta ni los tratamientos médicos, y se puede combinar con ellos. Las ideas sobre la niebla mental son de sentido común, con poca investigación específica.',
      },
      diagram: {
        title: 'Cómo se agranda un sofoco',
        nodes: ['Estrés o una situación social', 'Llega el sofoco', 'Pensamiento de alarma o vergüenza («todos lo notan»)', 'Más tensión y malestar', 'Evitar situaciones y dormir peor'],
        caption: 'Respirar lento, revisar lo que te dices y no evitar cortan el ciclo.',
      },
      related: {
        practices: ['pausa-ante-el-sofoco', 'lo-que-me-digo-del-sofoco', 'noches-de-calor-y-desvelo', 'niebla-mental-con-apoyos', 'esta-etapa-con-amabilidad', 'hablarlo-sin-verguenza', 'control-estimulos-noche', 'caminata-consciente-ritmo'],
        articles: ['tcc-i-paso-a-paso', 'sexualidad-y-deseo', 'imagen-corporal', 'ejercicio-y-animo'],
      },
      references: [NICE_2015, HUNTER_MANN_2010, AYERS_2012, HUNTER_SMITH_2014, EDINGER_2021, IRISH_2015, NEFF_2003, BULL_2020],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'atravesar-el-climaterio',
      title: 'Atravesar el climaterio',
      subtitle: 'Cuatro semanas para los sofocos, el sueño, el ánimo y hablarlo sin vergüenza',
      description:
        'Aprenderás a responder a los sofocos con calma, a revisar lo que te dices cuando llegan, a armar un plan para las noches y a tratarte con amabilidad. Al final prepararás una conversación con tu pareja, en el trabajo o en la consulta. No reemplaza la consulta médica: los tratamientos se conversan con ginecología o medicina clínica.',
      basis: 'Hunter y Mann (2010); Ayers y colaboradores (2012, ensayo MENOS 2); Hunter y Smith (2014); Neff (2003).',
      rhythm: '10 minutos, 4 o 5 días por semana, más la pausa ante el sofoco cuando haga falta.',
      weeks: [
        {
          title: 'Semana 1 · Entender y respirar',
          focus: 'Qué pasa en esta etapa y la pausa ante el sofoco',
          description: 'Leerás qué es el climaterio y qué ayuda. Practicarás la respiración lenta en calma y la usarás cuando llegue el calor.',
          practiceIds: ['pausa-ante-el-sofoco', 'respiracion-resonante'],
          articleIds: ['menopausia-y-climaterio'],
        },
        {
          title: 'Semana 2 · Lo que me digo',
          focus: 'Pensamientos sobre los sofocos',
          description: 'Anotarás lo que te dices cuando llega un sofoco y buscarás frases más justas y útiles.',
          practiceIds: ['lo-que-me-digo-del-sofoco'],
          articleIds: [],
          journalType: 'reestructuracion',
        },
        {
          title: 'Semana 3 · Las noches',
          focus: 'Sudores nocturnos y sueño',
          description: 'Armarás un plan para las noches con sudores y lo combinarás con lo esencial de la TCC para el insomnio.',
          practiceIds: ['noches-de-calor-y-desvelo', 'control-estimulos-noche'],
          articleIds: ['tcc-i-paso-a-paso'],
          journalType: 'diario-sueno',
        },
        {
          title: 'Semana 4 · Cuidarme y hablarlo',
          focus: 'Ánimo, niebla mental y conversaciones',
          description: 'Practicarás la autocompasión, elegirás apoyos para la memoria y prepararás una conversación importante.',
          practiceIds: ['esta-etapa-con-amabilidad', 'niebla-mental-con-apoyos', 'hablarlo-sin-verguenza'],
          articleIds: [],
          journalType: 'carta-compasiva',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-sofocos-y-pensamientos',
      title: 'El sofoco y lo que te dices',
      subtitle: 'Por qué el mismo calor molesta más o menos.',
      slides: [
        { heading: 'Una ola de calor', text: 'Un sofoco es calor que sube por el pecho y la cara. Puede venir con sudor. Dura unos minutos y pasa.' },
        { heading: 'Lo que pensamos', text: 'Pensar «todos lo notan» o «no lo aguanto» suma vergüenza y nervios. El calor se siente peor.' },
        { heading: 'Lo que se probó', text: 'En un ensayo, la TCC en grupo o con un libro hizo que los sofocos molestaran menos.' },
        { heading: 'Respirar lento', text: 'Cuando empiece, baja los hombros y respira lento. Inhala en cuatro y exhala en seis.' },
        { heading: 'Una frase justa', text: 'Prueba decirte: «Es calor. Ya sé cómo es. En unos minutos pasa».' },
      ],
      related: { practices: ['pausa-ante-el-sofoco', 'lo-que-me-digo-del-sofoco'], articles: ['menopausia-y-climaterio'] },
      references: [HUNTER_MANN_2010, AYERS_2012],
    },
    {
      id: 'pildora-niebla-mental',
      title: 'Cuando la cabeza está con niebla',
      subtitle: 'Olvidos y concentración en el climaterio.',
      slides: [
        { heading: 'Es común', text: 'Olvidar palabras o a qué fuiste a la cocina es algo que cuentan muchas personas en esta etapa.' },
        { heading: 'Lo que la espesa', text: 'Dormir mal, los sofocos y el estrés suelen hacer la niebla más densa.' },
        { heading: 'Afuera de la cabeza', text: 'Usa listas, alarmas y un lugar fijo para cada cosa. No es trampa: es ayuda.' },
        { heading: 'Menos alarma', text: 'El miedo a «algo grave» ocupa atención. Dite: «Mi cabeza está cargada. Lo anoto y sigo».' },
        { heading: 'Cuándo consultar', text: 'Si los olvidos empeoran, te preocupan mucho o los notan otras personas, consulta con tu médico.' },
      ],
      related: { practices: ['niebla-mental-con-apoyos', 'noches-de-calor-y-desvelo'], articles: ['menopausia-y-climaterio'] },
      references: [HUNTER_SMITH_2014, NICE_2015],
    },
    {
      id: 'pildora-hablar-de-menopausia',
      title: 'Hablarlo sin vergüenza',
      subtitle: 'Con tu pareja, en el trabajo y en la consulta.',
      slides: [
        { heading: 'El silencio pesa', text: 'Callar lo que pasa hace crecer la vergüenza. Y los demás no entienden qué te pasa.' },
        { heading: 'En la pareja', text: 'La irritabilidad o los cambios en el deseo no son algo personal. Contarlo ayuda a que te acompañen.' },
        { heading: 'En el trabajo', text: 'No hace falta contar todo. Pide algo concreto: un ventilador, una ventana o pausas cortas.' },
        { heading: 'En la consulta', text: 'Lleva escrito qué sientes, desde cuándo y cuánto te afecta. Así es más fácil hablar de tratamientos.' },
        { heading: 'Una frase', text: 'Si aparece la vergüenza, dite: «Es una etapa de la vida. Hablarlo es cuidarme».' },
      ],
      related: { practices: ['hablarlo-sin-verguenza', 'hablar-de-sexo-en-pareja'], articles: ['menopausia-y-climaterio'] },
      references: [HUNTER_MANN_2010, HUNTER_SMITH_2014],
    },
    {
      id: 'pildora-menopausia-cuando-consultar',
      title: 'Climaterio: cuándo consultar',
      subtitle: 'Tratamientos, señales y a quién llamar.',
      slides: [
        { heading: 'Hay tratamientos', text: 'Para los síntomas hay tratamientos hormonales y no hormonales. Se conversan con ginecología o con tu médico.' },
        { heading: 'Sangrados', text: 'Consulta si tienes un sangrado que no esperabas. También si sangras después de un año sin menstruar.' },
        { heading: 'El ánimo', text: 'Si estás muy triste durante semanas o ya nada te da ganas, no es «la edad». Consulta.' },
        { heading: 'Ideas de no vivir', text: 'Si piensas en no querer vivir, pide ayuda hoy. Llama al 135 o al 0800-345-1435, o usa el botón Ayuda.' },
        { heading: 'También ayuda', text: 'La TCC, dormir mejor, moverte y tratarte con amabilidad ayudan. Se suman a lo médico, no lo reemplazan.' },
      ],
      related: { practices: ['esta-etapa-con-amabilidad'], articles: ['menopausia-y-climaterio'] },
      references: [NICE_2015],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'menopausia', term: 'Menopausia', definition: 'La última menstruación. Se confirma cuando pasa un año sin menstruar. Suele llegar entre los 45 y los 55 años.', articleId: 'menopausia-y-climaterio' },
    { id: 'climaterio', term: 'Climaterio', definition: 'La etapa de transición que rodea a la menopausia. Incluye los años previos con ciclos irregulares y el tiempo posterior.', articleId: 'menopausia-y-climaterio' },
    { id: 'perimenopausia', term: 'Perimenopausia', definition: 'Los años antes de la última menstruación, con ciclos irregulares y, a veces, sofocos, cambios de ánimo o de sueño.', articleId: 'menopausia-y-climaterio' },
    { id: 'sintomas-vasomotores', term: 'Síntomas vasomotores', definition: 'Nombre médico de los sofocos y los sudores nocturnos. La TCC ayuda a que molesten menos.', articleId: 'menopausia-y-climaterio', practiceId: 'pausa-ante-el-sofoco' },
    { id: 'niebla-mental', term: 'Niebla mental', definition: 'Forma común de nombrar los olvidos y la dificultad para concentrarse en el climaterio. El mal sueño y el estrés la empeoran.', practiceId: 'niebla-mental-con-apoyos' },
    { id: 'respiracion-pausada', term: 'Respiración pausada', definition: 'Respirar lento, con la exhalación más larga que la inhalación. Se usa en la TCC para atravesar un sofoco con menos tensión.', practiceId: 'pausa-ante-el-sofoco' },
  ],
};
