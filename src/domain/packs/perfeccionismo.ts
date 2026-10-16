import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Perfeccionismo»: perfeccionismo clínico según la TCC de Shafran, Egan y Wade.
 *  - autoevaluación basada casi sólo en logros (el «pie» de la autoestima);
 *  - estándares altos que ayudan vs. perfeccionismo que hace daño;
 *  - trampas del pensamiento: todo o nada, doble estándar, sesgo hacia lo que faltó;
 *  - postergar por miedo a no hacerlo perfecto; chequeos y repeticiones;
 *  - experimentos conductuales con «lo suficientemente bien»;
 *  - autocompasión ante el error; perfeccionismo en el trabajo y en la crianza.
 *
 * Se enlaza con el artículo base «procrastinacion-y-perfeccionismo», con el esquema
 * «autoexigencia» (paquete de esquemas) y con «mis-impulsores» (análisis transaccional).
 *
 * Cuidados del paquete: los experimentos se hacen sólo en tareas donde un error no hace daño
 * (nunca con medicación, seguridad, manejo o dinero ajeno). Si los chequeos o repeticiones
 * ocupan mucho tiempo y vienen con angustia intensa, puede tratarse de un TOC o de un trastorno
 * alimentario y se trabaja con un profesional. Ante ideas de morir, se remite a ayuda inmediata.
 */

const SHAFRAN_2002: Reference = {
  citation: 'Shafran, R., Cooper, Z., & Fairburn, C. G. (2002). Clinical perfectionism: A cognitive-behavioural analysis. Behaviour Research and Therapy, 40(7), 773–791.',
  doi: '10.1016/S0005-7967(01)00059-6',
};
const EGAN_2011: Reference = {
  citation: 'Egan, S. J., Wade, T. D., & Shafran, R. (2011). Perfectionism as a transdiagnostic process: A clinical review. Clinical Psychology Review, 31(2), 203–212.',
  doi: '10.1016/j.cpr.2010.04.009',
};
const SHAFRAN_2010: Reference = {
  citation: 'Shafran, R., Egan, S., & Wade, T. (2010). Overcoming perfectionism: A self-help guide using cognitive behavioral techniques. Robinson.',
};
const CURRAN_2019: Reference = {
  citation: 'Curran, T., & Hill, A. P. (2019). Perfectionism is increasing over time: A meta-analysis of birth cohort differences from 1989 to 2016. Psychological Bulletin, 145(4), 410–429.',
  doi: '10.1037/bul0000138',
};
const LLOYD_2015: Reference = {
  citation: 'Lloyd, S., Schmidt, U., Khondoker, M., & Tchanturia, K. (2015). Can psychological interventions reduce perfectionism? A systematic review and meta-analysis. Behavioural and Cognitive Psychotherapy, 43(6), 705–731.',
  doi: '10.1017/S1352465814000162',
};
const NEFF_2003: Reference = {
  citation: 'Neff, K. D. (2003). Self-compassion: An alternative conceptualization of a healthy attitude toward oneself. Self and Identity, 2(2), 85–101.',
  doi: '10.1080/15298860309032',
};

/** Aviso común del paquete. */
const CUIDADO =
  'Si revisar, repetir o corregir te ocupa más de una hora por día o te angustia mucho, consulta con un profesional: puede ser un TOC y tiene tratamiento. Si la exigencia viene con tristeza honda o ideas de morir, pide ayuda ya: 135, 0800-999-0091, 911 o el botón Ayuda de la app.';

export const PERFECCIONISMO_PACK: ContentPack = {
  id: 'perfeccionismo',

  // ================================================================== prácticas
  practices: [
    {
      id: 'mi-pie-de-la-autoestima',
      title: 'El pie de mi autoestima',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Dibujar de qué depende cómo te valoras y sumar porciones nuevas para que tu autoestima no dependa sólo de rendir.',
      mechanism: 'Cuando la autoestima se apoya casi sólo en los logros, cada error se vive como una amenaza. Ampliar las fuentes de valor baja esa presión.',
      evidenceLevel: 'moderada',
      evidence: [SHAFRAN_2002, SHAFRAN_2010],
      howItWorks: [
        'Roz Shafran, Zafra Cooper y Christopher Fairburn describieron el perfeccionismo clínico. Su centro es juzgar el propio valor casi sólo por lograr metas muy exigentes, aunque eso traiga problemas (Shafran y colaboradores, 2002).',
        'En el libro de autoayuda de Shafran, Egan y Wade se usa un dibujo simple: un pie, como una torta dividida en porciones. Cada porción es algo de lo que depende cómo te valoras. Si una porción ocupa casi todo, cuando esa parte va mal, todo se cae.',
        'La meta no es dejar de esforzarte. Es que tu valor también descanse en otras cosas: vínculos, juego, descanso, intereses, cómo tratas a otros.',
      ],
      tips: [
        'Sé honesto con el tamaño de cada porción. Nadie más va a ver el dibujo.',
        'Las porciones nuevas no se miden por rendimiento. Se trata de hacerlas, no de hacerlas bien.',
        'Repite el dibujo en un mes y compara.',
      ],
      obstacles: [{ q: 'Si dejo de exigirme, no voy a hacer nada.', a: 'Es un miedo muy común. No se trata de bajar todos los estándares, sino de no apostar todo tu valor a uno solo. Prueba y mira qué pasa.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Ten a mano un papel y una lapicera.', durationSec: 30, kind: 'breath' },
        { title: 'De qué depende', instruction: '¿De qué depende que te sientas bien contigo? Anota todo: el trabajo, el estudio, la familia, los amigos, el cuerpo, otras cosas.', durationSec: 75, kind: 'reflection' },
        { title: 'El pie', instruction: 'Dibuja un círculo. Divídelo en porciones según cuánto pesa cada cosa en cómo te valoras.', durationSec: 60, kind: 'reflection' },
        { title: 'Mirar', instruction: '¿Hay una porción muy grande? Si esa parte va mal, ¿qué pasa con todo lo demás?', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que dejaste', instruction: 'Piensa en partes de tu vida que dejaste de lado. Amigos, juego, descanso, un hobby. Anota dos.', durationSec: 60, kind: 'reflection' },
        { title: 'Un paso', instruction: 'Elige una de esas partes. Planea algo chico para esta semana, sin metas ni puntajes.', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'trampas-del-perfeccionismo',
      title: 'Las trampas del perfeccionismo',
      family: 'deconstructive',
      skills: ['attention'],
      summary: 'Revisar un juicio duro sobre ti con tres preguntas: todo o nada, lo que faltó y el doble estándar.',
      mechanism: 'El perfeccionismo se sostiene con sesgos del pensamiento. Notarlos y buscar una mirada más justa baja la autocrítica y el miedo a fallar.',
      evidenceLevel: 'moderada',
      evidence: [SHAFRAN_2002, EGAN_2011, LLOYD_2015],
      howItWorks: [
        'La terapia cognitivo-conductual del perfeccionismo trabaja con tres trampas frecuentes. La primera es el todo o nada: algo es perfecto o es un fracaso. La segunda es mirar sólo lo que faltó y no lo que salió bien.',
        'La tercera es el doble estándar: te exiges cosas que nunca le exigirías a alguien que quieres. Preguntarte cómo juzgarías a una amiga muestra esa diferencia.',
        'Una revisión de estudios encontró que las intervenciones cognitivo-conductuales reducen el perfeccionismo y también la ansiedad y la depresión asociadas (Lloyd y colaboradores, 2015).',
      ],
      tips: [
        'Usa una escala del cero al diez en lugar de «bien» o «mal».',
        'Busca al menos tres cosas que salieron bien, aunque parezcan chicas.',
        'Si te cuesta imaginar a otra persona, piensa en ti a los diez años.',
      ],
      obstacles: [{ q: 'Pero de verdad salió mal.', a: 'Puede ser. La idea no es convencerte de que fue perfecto, sino verlo completo: lo que salió mal, lo que salió bien y lo que puedes aprender.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio y piensa en tu semana.', durationSec: 30, kind: 'breath' },
        { title: 'La situación', instruction: 'Piensa en algo reciente que sentiste que salió mal. Escribe qué pasó, en una o dos frases.', durationSec: 45, kind: 'reflection' },
        { title: 'Todo o nada', instruction: '¿Lo juzgaste como éxito total o fracaso total? Del cero al diez, ¿cuánto salió bien en realidad?', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que faltó', instruction: '¿Miraste sólo lo que faltó? Anota tres cosas que sí salieron bien, aunque sean chicas.', durationSec: 60, kind: 'reflection' },
        { title: 'Doble estándar', instruction: 'Imagina que una amiga hizo lo mismo. ¿La juzgarías igual? Escribe lo que le dirías.', durationSec: 60, kind: 'reflection' },
        { title: 'Otra mirada', instruction: 'Reescribe tu juicio con un tono más justo. Incluye lo que salió bien y lo que puedes mejorar.', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'experimento-suficientemente-bien',
      title: 'Experimento: lo suficientemente bien',
      family: 'deconstructive',
      skills: ['resilience', 'attention'],
      summary: 'Hacer a propósito una tarea chica «suficientemente bien», por ejemplo enviar un mensaje con un error menor, y comprobar qué pasa de verdad.',
      mechanism: 'Las creencias perfeccionistas se mantienen porque casi nunca se ponen a prueba. Un experimento conductual compara la predicción con lo que de verdad ocurre.',
      evidenceLevel: 'moderada',
      evidence: [SHAFRAN_2002, SHAFRAN_2010, LLOYD_2015],
      howItWorks: [
        'Quien vive con perfeccionismo suele predecir que un error chico traerá algo grave: que van a pensar mal, que se va a notar, que todo se arruina. Como revisa y corrige siempre, nunca llega a comprobarlo.',
        'El experimento conductual es una herramienta central de la TCC del perfeccionismo (Shafran y colaboradores, 2002). Anotas una predicción, cambias una conducta y miras el resultado. Muchas veces lo temido no pasa, o pasa y se puede manejar.',
      ],
      tips: [
        'Empieza por algo de bajo riesgo: un mensaje a un amigo, un mail interno, ordenar un cajón.',
        'Anota la predicción antes, con números. Así puedes comparar después.',
        'La incomodidad es parte del experimento. Suele bajar sola.',
      ],
      obstacles: [{ q: 'Me da mucha vergüenza que noten el error.', a: 'Anótalo como predicción: «van a notar y pensar mal de mí». Después mira si alguien lo notó y qué hizo. Ese dato vale más que mil argumentos.' }],
      cautions: 'Elige tareas donde un error no haga daño a nadie. Nunca hagas este experimento con medicación, seguridad, manejo, salud ni dinero de otros. ' + CUIDADO,
      steps: [
        { title: 'Elegir', instruction: 'Elige una tarea chica donde un error no haga daño. Un mensaje, un mail interno, ordenar un cajón.', durationSec: 60, kind: 'reflection' },
        { title: 'La predicción', instruction: '¿Qué crees que pasará si la haces «suficientemente bien»? Anota la predicción y cuánto la crees, del cero al cien.', durationSec: 60, kind: 'reflection' },
        { title: 'El cambio', instruction: 'Decide qué harás distinto. Por ejemplo, enviar sin releer tres veces, o dejar un error menor.', durationSec: 45, kind: 'reflection' },
        { title: 'Hacerlo', instruction: 'Haz la tarea así. Nota la incomodidad y las ganas de corregir. Respira y déjalas estar.', durationSec: 60, kind: 'instruction' },
        { title: 'Qué pasó', instruction: 'Más tarde, anota qué pasó de verdad. ¿Se cumplió tu predicción? ¿Cuánto la crees ahora?', durationSec: 60, kind: 'reflection' },
        { title: 'Lo aprendido', instruction: '¿Qué aprendiste? Escribe una frase para recordar la próxima vez.', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'menos-chequeos-y-repeticiones',
      title: 'Menos revisar, menos repetir',
      family: 'deconstructive',
      skills: ['attention', 'resilience'],
      summary: 'Registrar lo que revisas, corriges o rehaces para que quede perfecto, y ponerle un límite claro a una de esas conductas.',
      mechanism: 'Revisar y repetir alivian un momento, pero confirman la idea de que sin eso todo saldría mal. Ponerles límite permite aprender que no hace falta.',
      evidenceLevel: 'moderada',
      evidence: [SHAFRAN_2002, EGAN_2011],
      howItWorks: [
        'En el modelo de Shafran, el perfeccionismo se mantiene con conductas como revisar muchas veces, rehacer, comparar con otros o pedir que te digan que está bien. Cada una calma un rato y deja la duda intacta.',
        'Además, cuestan mucho tiempo. Ese tiempo sale del descanso, de los vínculos y de otras tareas. Reducirlas de a poco devuelve tiempo y baja la ansiedad.',
      ],
      tips: [
        'Empieza por la conducta que te parece más fácil de cambiar.',
        'Una regla clara ayuda: «releo una vez y envío».',
        'Usa un reloj para las tareas que tienden a no terminar nunca.',
      ],
      obstacles: [{ q: 'Si no reviso, seguro se me escapa algo.', a: 'Puede pasar alguna vez. Fíjate si ese error es grave o se puede arreglar. Casi siempre se arregla, y ganas horas.' }],
      cautions: CUIDADO,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio y piensa en un día común.', durationSec: 30, kind: 'breath' },
        { title: 'Registrar', instruction: '¿Qué revisas o repites para que quede perfecto? Releer mails, corregir, rehacer, preguntar si está bien. Anótalo.', durationSec: 75, kind: 'reflection' },
        { title: 'Cuánto tiempo', instruction: 'Calcula cuánto tiempo te lleva por día. ¿Qué otra cosa harías con ese tiempo?', durationSec: 45, kind: 'reflection' },
        { title: 'Elegir uno', instruction: 'Elige una conducta para reducir esta semana. Empieza por la más fácil.', durationSec: 45, kind: 'reflection' },
        { title: 'Una regla', instruction: 'Ponle un límite claro. Por ejemplo: «releo una vez y envío», o «quince minutos y listo».', durationSec: 45, kind: 'reflection' },
        { title: 'Con la ola', instruction: 'Cuando aparezcan las ganas de revisar, respira tres veces. Fíjate cómo suben y después bajan.', durationSec: 45, kind: 'breath' },
      ],
    },
    {
      id: 'empezar-imperfecto',
      title: 'Empezar imperfecto',
      family: 'constructive',
      skills: ['resilience'],
      summary: 'Destrabar una tarea que postergas por miedo a no hacerla perfecta, con un primer paso muy chico y un borrador imperfecto a propósito.',
      mechanism: 'Postergar evita el miedo a no estar a la altura. Un primer paso chico y un borrador imperfecto bajan ese miedo y ponen la tarea en marcha.',
      evidenceLevel: 'moderada',
      evidence: [EGAN_2011, SHAFRAN_2010],
      howItWorks: [
        'Muchas personas perfeccionistas postergan. No por vagancia, sino porque empezar es enfrentar la posibilidad de no hacerlo perfecto. Mientras no empiezas, nada puede salir mal.',
        'El perfeccionismo se asocia a la postergación y a varios problemas emocionales (Egan y colaboradores, 2011). Lo que ayuda es bajar la vara del primer paso: un borrador malo vale más que una idea perfecta sin escribir.',
      ],
      tips: [
        'El primer paso tiene que ser tan chico que dé un poco de risa.',
        'Ponle un nombre al borrador: «versión fea». Libera.',
        'Al terminar, anota cuándo sigues. No hace falta terminar hoy.',
      ],
      obstacles: [{ q: 'Me siento a hacerlo y me bloqueo.', a: 'Achica más el paso. Abrir el archivo y escribir el título ya cuenta. Y si hoy no sale, prueba con cinco minutos mañana.' }],
      steps: [
        { title: 'La tarea', instruction: 'Piensa en una tarea que vienes postergando. Escribe cuál es.', durationSec: 40, kind: 'reflection' },
        { title: 'El miedo', instruction: '¿Qué temes si la empiezas y no queda perfecta? Anótalo en una frase.', durationSec: 45, kind: 'reflection' },
        { title: 'Un paso chico', instruction: 'Divide la tarea hasta encontrar un primer paso muy chico. Abrir el archivo, escribir un título, juntar los papeles.', durationSec: 45, kind: 'reflection' },
        { title: 'Versión fea', instruction: 'Pon un reloj de cinco minutos. Haz una versión imperfecta a propósito. Vale tachar y dejar huecos.', durationSec: 300, kind: 'instruction' },
        { title: 'Cerrar', instruction: 'Mira lo que hiciste. ¿Fue tan terrible como temías? Anota cuándo vas a seguir.', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'autocompasion-ante-el-error',
      title: 'Un minuto amable ante el error',
      family: 'constructive',
      skills: ['compassion'],
      micro: true,
      summary: 'Responder a un error con las tres partes de la autocompasión en lugar de castigarte.',
      mechanism: 'La autocrítica dura sube la vergüenza y el miedo a fallar. La autocompasión permite reconocer el error y aprender sin hundirte.',
      evidenceLevel: 'moderada',
      evidence: [NEFF_2003, SHAFRAN_2010],
      howItWorks: [
        'Kristin Neff describe la autocompasión en tres partes: notar el dolor con atención, recordar que equivocarse es humano y tratarte con amabilidad (Neff, 2003).',
        'Para el perfeccionismo, es un antídoto. No baja las ganas de hacer bien las cosas. Baja el castigo cuando algo sale mal, que es lo que más hace sufrir.',
      ],
      tips: [
        'Usa las palabras que le dirías a alguien que quieres.',
        'Si no te sale amable, prueba con neutral: «Me equivoqué. Pasa».',
        'Úsala justo después de un error, cuando la crítica suena más fuerte.',
      ],
      obstacles: [{ q: 'Siento que me estoy dando permiso para hacerlo mal.', a: 'La autocompasión no borra la responsabilidad. Puedes reparar el error y aprender. Sólo dejas de sumarle maltrato.' }],
      steps: [
        { title: 'Notar', instruction: 'Piensa en un error reciente que te sigue molestando. Nota dónde lo sientes en el cuerpo.', durationSec: 30, kind: 'breath' },
        { title: 'Nombrar', instruction: 'Pon una mano en el pecho. Dite: «Me equivoqué y me duele».', durationSec: 30, kind: 'breath' },
        { title: 'Es humano', instruction: 'Recuerda que todas las personas se equivocan. Dite: «Esto es parte de ser humano».', durationSec: 30, kind: 'breath' },
        { title: 'Amable', instruction: 'Dite lo que le dirías a alguien que quieres: «Puedo aprender de esto sin castigarme».', durationSec: 45, kind: 'breath' },
        { title: 'Un paso', instruction: '¿Hay algo para reparar o aprender? Elige un paso concreto, o déjalo ir.', durationSec: 30, kind: 'reflection' },
      ],
    },
  ],

  meta: {
    'mi-pie-de-la-autoestima': { level: 'iniciacion', approaches: ['tcc'], module: 'pensamientos' },
    'trampas-del-perfeccionismo': { level: 'intermedio', approaches: ['tcc'], module: 'pensamientos', prerequisites: ['mi-pie-de-la-autoestima'] },
    'experimento-suficientemente-bien': { level: 'intermedio', approaches: ['tcc'], module: 'pensamientos', prerequisites: ['trampas-del-perfeccionismo'] },
    'menos-chequeos-y-repeticiones': { level: 'intermedio', approaches: ['tcc'], module: 'pensamientos', prerequisites: ['mi-pie-de-la-autoestima'] },
    'empezar-imperfecto': { level: 'iniciacion', approaches: ['tcc'], module: 'pensamientos' },
    'autocompasion-ante-el-error': { level: 'iniciacion', approaches: ['cft'], module: 'autocompasion' },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'perfeccionismo-clinico',
      title: 'Perfeccionismo: cuando nada alcanza',
      subtitle: 'La diferencia entre tener estándares altos y el perfeccionismo que hace daño, cómo se mantiene y qué ayuda según la TCC.',
      category: 'Autoconocimiento y patrones',
      readingMin: 9,
      keyPoints: [
        'Tener estándares altos no es un problema. Lo es juzgar tu valor casi sólo por cumplirlos.',
        'El perfeccionismo clínico se mantiene con trampas del pensamiento, chequeos y postergación.',
        'Los experimentos con «lo suficientemente bien» ponen a prueba lo que temes.',
        'Ampliar las fuentes de autoestima y la autocompasión bajan la presión.',
        'Es un factor común a la ansiedad, la depresión y los trastornos alimentarios.',
      ],
      sections: [
        {
          heading: 'Estándares altos o perfeccionismo que daña',
          paragraphs: [
            'Querer hacer bien las cosas es valioso. El problema aparece cuando tu valor como persona depende casi sólo de lograr metas muy exigentes, y sigues apostando a eso aunque te cueste caro. Roz Shafran, Zafra Cooper y Christopher Fairburn llamaron a esto perfeccionismo clínico (2002).',
            'Una pregunta útil: ¿tus estándares te ayudan o te frenan? Si te dejan disfrutar de lo logrado y aprender de los errores, ayudan. Si nunca alcanza, si un error te hunde por días o si postergas por miedo, hacen daño.',
          ],
        },
        {
          heading: 'Cómo se mantiene',
          paragraphs: [
            'Cuando no alcanzas la meta, aparece la autocrítica y redoblas el esfuerzo. Cuando la alcanzas, la descartas: «era fácil» o «tendría que haber sido mejor». Y subes la vara. Así el ciclo nunca termina.',
            'Tres trampas del pensamiento lo sostienen. El todo o nada: perfecto o fracaso. El sesgo hacia lo que faltó: mirar el único error y no los aciertos. Y el doble estándar: exigirte lo que nunca le exigirías a otra persona.',
          ],
        },
        {
          heading: 'Postergar, revisar, repetir',
          paragraphs: [
            'Muchas personas perfeccionistas postergan. Empezar es arriesgarse a no estar a la altura, y mientras no empiezas, nada falla. Otras revisan y rehacen sin fin. Las dos cosas alivian un rato y confirman que sin ellas todo saldría mal.',
            'Ayuda empezar con un paso muy chico y hacer una «versión fea» a propósito. También ponerle límites claros a los chequeos: releer una vez y enviar.',
          ],
        },
        {
          heading: 'Qué ayuda',
          paragraphs: [
            'La TCC del perfeccionismo usa experimentos conductuales. Haces algo «suficientemente bien», por ejemplo enviar un mensaje con un error menor, y comparas lo que temías con lo que pasó. Una revisión de estudios encontró que estas intervenciones reducen el perfeccionismo y también la ansiedad y la depresión (Lloyd y colaboradores, 2015).',
            'También se trabaja ampliar las fuentes de autoestima: que tu valor descanse en vínculos, descanso, juego e intereses, no sólo en rendir. Y la autocompasión: tratarte ante el error como tratarías a alguien que quieres.',
          ],
        },
        {
          heading: 'En el trabajo y en la crianza',
          paragraphs: [
            'En el trabajo, el perfeccionismo puede parecer compromiso. Pero suele traer horas de más, dificultad para delegar, demoras y agotamiento. Distinguir qué tareas necesitan mucho cuidado y cuáles alcanzan con «bien» libera tiempo y energía.',
            'En la crianza, buscar ser una madre o un padre perfecto agota y llena de culpa. Los chicos no necesitan adultos perfectos, sino adultos presentes que se equivocan, reparan y siguen. Además, aprenden de cómo te tratas cuando fallas.',
          ],
        },
        {
          heading: 'Un fenómeno en aumento',
          paragraphs: [
            'Un metaanálisis de Thomas Curran y Andrew Hill encontró que el perfeccionismo aumentó en estudiantes universitarios de varios países entre 1989 y 2016 (Curran y Hill, 2019). Creció sobre todo la sensación de que los demás esperan perfección de uno.',
            'Sarah Egan, Tracey Wade y Roz Shafran lo describen como un proceso transdiagnóstico: aparece en la ansiedad, la depresión, el TOC y los trastornos alimentarios (Egan y colaboradores, 2011). Trabajarlo puede ayudar en varios frentes a la vez.',
          ],
        },
        {
          heading: 'Cuándo consultar',
          paragraphs: [
            'Consulta con un profesional si la exigencia te quita el sueño, la comida o los vínculos, si revisar o repetir te ocupa mucho tiempo, o si te sientes triste casi todo el día. Si tienes ideas de morir, pide ayuda ya: 135, 0800-999-0091, 911 o el botón Ayuda de la app.',
          ],
        },
      ],
      caveat: {
        title: 'Un matiz importante',
        body: 'Hay debate sobre si existe un perfeccionismo «sano». Aquí distinguimos los estándares altos y flexibles, que pueden ayudar, del perfeccionismo clínico, que hace daño. Los experimentos se hacen sólo en tareas donde un error no lastima a nadie. Si los chequeos ocupan mucho tiempo, puede ser un TOC y conviene consultar.',
      },
      diagram: {
        title: 'El ciclo del perfeccionismo',
        nodes: ['Autoestima basada en logros', 'Meta muy exigente', 'Chequeos, repetición o postergación', 'No alcanza, o se descarta el logro', 'Autocrítica y vara más alta'],
        caption: 'Ampliar las fuentes de valor, probar «lo suficientemente bien» y tratarse con amabilidad cortan el ciclo.',
      },
      related: {
        practices: ['mi-pie-de-la-autoestima', 'trampas-del-perfeccionismo', 'experimento-suficientemente-bien', 'menos-chequeos-y-repeticiones', 'empezar-imperfecto', 'autocompasion-ante-el-error', 'mis-impulsores'],
        articles: ['procrastinacion-y-perfeccionismo', 'autocompasion'],
      },
      references: [SHAFRAN_2002, EGAN_2011, SHAFRAN_2010, CURRAN_2019, LLOYD_2015, NEFF_2003],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'suficientemente-bien',
      title: 'Suficientemente bien',
      subtitle: 'Cuatro semanas para aflojar el perfeccionismo sin perder lo que te importa',
      description:
        'Mirarás de qué depende tu autoestima, revisarás las trampas del pensamiento perfeccionista, harás experimentos con «lo suficientemente bien» y practicarás tratarte con amabilidad ante el error. Si revisar o repetir te ocupa mucho tiempo, consulta con un profesional.',
      basis: 'Shafran, Cooper y Fairburn (2002); Shafran, Egan y Wade (2010); Lloyd y colaboradores (2015).',
      rhythm: '10 a 15 minutos, 4 o 5 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · De qué depende',
          focus: 'Estándares altos vs. perfeccionismo que daña',
          description: 'Leerás qué es el perfeccionismo clínico y dibujarás el pie de tu autoestima.',
          practiceIds: ['mi-pie-de-la-autoestima', 'autocompasion-ante-el-error'],
          articleIds: ['perfeccionismo-clinico'],
          journalType: 'valores',
        },
        {
          title: 'Semana 2 · Las trampas',
          focus: 'Todo o nada, lo que faltó y doble estándar',
          description: 'Revisarás tus juicios duros con tres preguntas y buscarás una mirada más justa.',
          practiceIds: ['trampas-del-perfeccionismo'],
          articleIds: [],
          journalType: 'reestructuracion',
        },
        {
          title: 'Semana 3 · Probar',
          focus: 'Experimentos y menos chequeos',
          description: 'Harás una tarea chica «suficientemente bien» y le pondrás un límite a un chequeo.',
          practiceIds: ['experimento-suficientemente-bien', 'menos-chequeos-y-repeticiones'],
          articleIds: [],
          journalType: 'experimento',
        },
        {
          title: 'Semana 4 · Empezar y cuidarte',
          focus: 'Postergación y autocompasión',
          description: 'Destrabarás una tarea postergada con un primer paso chico y practicarás una voz amable ante el error.',
          practiceIds: ['empezar-imperfecto', 'autocompasion-ante-el-error', 'pausa-autocompasion'],
          articleIds: ['procrastinacion-y-perfeccionismo'],
          journalType: 'carta-compasiva',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-perfeccionismo',
      title: 'Cuando nada alcanza',
      subtitle: 'Estándares altos o perfeccionismo que daña.',
      slides: [
        { heading: 'No es querer hacerlo bien', text: 'Querer hacer bien las cosas es valioso. El problema es otro.' },
        { heading: 'El problema', text: 'Es sentir que vales sólo si logras metas muy altas. Y seguir así aunque te haga mal.' },
        { heading: 'Nunca alcanza', text: 'Si no llegas, te criticas. Si llegas, dices que era fácil. Y subes la vara otra vez.' },
        { heading: 'Una pregunta', text: '¿Tus metas te ayudan o te frenan? Si un error te hunde por días, te frenan.' },
        { heading: 'Qué ayuda', text: 'Probar hacer algo «suficientemente bien». Sumar otras fuentes de valor. Y hablarte con amabilidad.' },
      ],
      related: { practices: ['mi-pie-de-la-autoestima'], articles: ['perfeccionismo-clinico'] },
      references: [SHAFRAN_2002, EGAN_2011],
    },
    {
      id: 'pildora-lo-suficientemente-bien',
      title: 'Enviar con un error',
      subtitle: 'Un experimento para el perfeccionismo.',
      slides: [
        { heading: 'Lo que temes', text: 'Piensas que un error chico traerá algo grave. Que lo van a notar. Que van a pensar mal de ti.' },
        { heading: 'Nunca lo pruebas', text: 'Como revisas todo, nunca sabes qué pasaría. El miedo queda igual.' },
        { heading: 'El experimento', text: 'Elige algo chico y sin riesgo. Envía un mensaje sin releerlo tres veces, o con un error menor.' },
        { heading: 'Anota y mira', text: 'Antes, anota qué crees que pasará. Después, mira qué pasó de verdad. Compara.' },
        { heading: 'Con cuidado', text: 'Nunca lo hagas con remedios, dinero de otros o temas de seguridad. Sólo con cosas que no dañan.' },
      ],
      related: { practices: ['experimento-suficientemente-bien'], articles: ['perfeccionismo-clinico'] },
      references: [SHAFRAN_2010, LLOYD_2015],
    },
    {
      id: 'pildora-postergar-por-perfeccion',
      title: 'No empiezo porque no va a quedar perfecto',
      subtitle: 'Por qué el perfeccionismo hace postergar.',
      slides: [
        { heading: 'No es vagancia', text: 'Muchas veces postergas porque temes no estar a la altura. Mientras no empiezas, nada falla.' },
        { heading: 'El costo', text: 'La tarea crece en tu cabeza. Y la culpa también.' },
        { heading: 'Un paso chico', text: 'Busca un primer paso tan chico que dé risa. Abrir el archivo. Escribir el título.' },
        { heading: 'Versión fea', text: 'Haz una primera versión mala a propósito. Cinco minutos. Después la mejoras.' },
        { heading: 'Sin castigo', text: 'Si hoy no sale, no te castigues. Castigarte hace que postergues más.' },
      ],
      related: { practices: ['empezar-imperfecto'], articles: ['procrastinacion-y-perfeccionismo', 'perfeccionismo-clinico'] },
      references: [EGAN_2011, SHAFRAN_2010],
    },
    {
      id: 'pildora-perfeccionismo-crianza',
      title: 'Ni madres ni padres perfectos',
      subtitle: 'El perfeccionismo en la crianza y en el trabajo.',
      slides: [
        { heading: 'La presión', text: 'Hoy mucha gente siente que los demás le piden perfección. Los estudios muestran que va en aumento.' },
        { heading: 'En casa', text: 'Buscar criar perfecto agota y llena de culpa. Los chicos no necesitan eso.' },
        { heading: 'Lo que sí necesitan', text: 'Adultos presentes que se equivocan, piden perdón y siguen. Eso les enseña mucho.' },
        { heading: 'En el trabajo', text: 'No todo pide el mismo cuidado. Elige qué tareas necesitan mucho y cuáles alcanzan con «bien».' },
        { heading: 'Te miran', text: 'Los chicos aprenden de cómo te tratas cuando fallas. Una voz amable también se contagia.' },
      ],
      related: { practices: ['autocompasion-ante-el-error', 'mi-pie-de-la-autoestima'], articles: ['perfeccionismo-clinico'] },
      references: [CURRAN_2019, SHAFRAN_2010],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'perfeccionismo-clinico', term: 'Perfeccionismo clínico', definition: 'Juzgar el propio valor casi sólo por lograr metas muy exigentes, y seguir así aunque traiga problemas.', articleId: 'perfeccionismo-clinico' },
    { id: 'doble-estandar', term: 'Doble estándar', definition: 'Exigirte cosas que nunca le exigirías a otra persona. Es una trampa común del perfeccionismo.', practiceId: 'trampas-del-perfeccionismo' },
    { id: 'pie-de-la-autoestima', term: 'Pie de la autoestima', definition: 'Dibujo en forma de torta que muestra de qué depende cómo te valoras. Sirve para ver si todo depende de una sola cosa.', practiceId: 'mi-pie-de-la-autoestima' },
    { id: 'lo-suficientemente-bien', term: 'Lo suficientemente bien', definition: 'Hacer una tarea bien, sin buscar que sea perfecta. En la TCC se prueba con experimentos para ver qué pasa de verdad.', practiceId: 'experimento-suficientemente-bien' },
  ],
};
