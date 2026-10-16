import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Acoso escolar y ciberacoso»:
 *  - qué es el acoso y por qué no es «cosa de chicos» (Olweus; Arseneault y colaboradores);
 *  - preparar la charla con tu hijo o hija: preguntar y escuchar sin presionar;
 *  - preparar la reunión con la escuela (Ley 26.892 de convivencia escolar, Argentina);
 *  - calmar el propio enojo como madre o padre antes de actuar;
 *  - el grupo y los testigos (Salmivalli; Gaffney, Ttofi y Farrington);
 *  - ciberacoso y pruebas (Kowalski y colaboradores);
 *  - para adultos que lo vivieron: autocompasión y presente, sin revivir recuerdos.
 *
 * Reglas de seguridad del paquete: nunca se indica enfrentar a quien acosa ni a su familia;
 * siempre se prioriza la seguridad y la escuela; ante autolesiones, ideas de muerte o
 * amenazas se remite a 911, 135, 0800-999-0091 o Línea 102. La práctica para adultos que
 * vivieron acoso no trabaja recuerdos en detalle: eso se hace con un profesional.
 */

const OLWEUS_1993: Reference = { citation: 'Olweus, D. (1993). Bullying at school: What we know and what we can do. Blackwell.' };
const GAFFNEY_2019: Reference = {
  citation: 'Gaffney, H., Ttofi, M. M., & Farrington, D. P. (2019). Evaluating the effectiveness of school-bullying prevention programs: An updated meta-analytical review. Aggression and Violent Behavior, 45, 111–133.',
};
const SALMIVALLI_2010: Reference = { citation: 'Salmivalli, C. (2010). Bullying and the peer group: A review. Aggression and Violent Behavior, 15(2), 112–120.' };
const KOWALSKI_2014: Reference = {
  citation: 'Kowalski, R. M., Giumetti, G. W., Schroeder, A. N., & Lattanner, M. R. (2014). Bullying in the digital age: A critical review and meta-analysis of cyberbullying research among youth. Psychological Bulletin, 140(4), 1073–1137.',
  doi: '10.1037/a0035618',
};
const ARSENEAULT_2010: Reference = {
  citation: 'Arseneault, L., Bowes, L., & Shakoor, S. (2010). Bullying victimization in youths and mental health problems: «Much ado about nothing»? Psychological Medicine, 40(5), 717–729.',
  doi: '10.1017/S0033291709991383',
};
const LEY_26892: Reference = {
  citation: 'Ley 26.892 (2013). Ley para la promoción de la convivencia y el abordaje de la conflictividad social en las instituciones educativas. Boletín Oficial de la República Argentina.',
  note: 'Marco legal argentino: pide a las escuelas acuerdos de convivencia y un abordaje institucional, no sólo individual.',
};

/** Aviso común: cuándo es urgente. */
const URGENTE =
  'Si tu hijo o hija habla de morir, se lastima, recibe amenazas o hay violencia física, no esperes. Llama al 911 si hay peligro. Puedes llamar a la Línea 102, al 135 o al 0800-999-0091. También está el botón Ayuda de la app.';

export const ACOSO_ESCOLAR_PACK: ContentPack = {
  id: 'acoso-escolar',

  // ================================================================== prácticas
  practices: [
    {
      id: 'preparar-la-charla-con-mi-hijo',
      title: 'Preparar la charla con tu hijo o hija',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Planear cómo, cuándo y con qué palabras preguntar por el acoso, para escuchar sin presionar ni asustar.',
      mechanism: 'Los chicos cuentan más cuando sienten que el adulto escucha con calma, no se enoja con ellos y no actúa sin avisarles.',
      evidenceLevel: 'preliminar',
      evidence: [OLWEUS_1993, ARSENEAULT_2010],
      howItWorks: [
        'Muchos chicos que sufren acoso no lo cuentan. Sienten vergüenza, miedo a que empeore o temen que el adulto reaccione mal. Dan Olweus describió hace décadas cómo el acoso suele quedar oculto a los adultos (Olweus, 1993).',
        'El acoso no es «cosa de chicos». Se asocia a más ansiedad, tristeza y problemas de salud mental, a veces durante años (Arseneault y colaboradores, 2010). Por eso vale la pena preguntar bien.',
        'Ayuda elegir un momento tranquilo, de costado y sin apuro: en el auto, cocinando o caminando. Hacer preguntas abiertas, escuchar más que hablar y no prometer lo que no puedes cumplir.',
      ],
      tips: [
        'Empieza por algo general: «¿Cómo están las cosas con tus compañeros?».',
        'No le preguntes «¿por qué no te defendiste?». Suena a culpa.',
        'Agradece que te cuente. Dile que no es su culpa.',
        'Acuerda con tu hijo o hija los próximos pasos antes de ir a la escuela.',
      ],
      obstacles: [
        { q: 'Me dice que no pasa nada.', a: 'Puede ser cierto, o puede no estar listo. Deja la puerta abierta: «Si algún día pasa algo, puedes contarme. No me voy a enojar contigo».' },
        { q: 'Me pide que no haga nada.', a: 'Escucha su miedo. Explícale que tu tarea es cuidarle y que van a decidir juntos cómo actuar. Si hay peligro, actúa igual y explícale por qué.' },
      ],
      cautions: URGENTE,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Antes de hablar con tu hijo o hija, busca un poco de calma para ti.', durationSec: 40, kind: 'breath' },
        { title: 'Lo que notaste', instruction: 'Anota lo que viste que te preocupa. Por ejemplo, no quiere ir a la escuela, llega con cosas rotas o mira el celular con miedo.', durationSec: 60, kind: 'reflection' },
        { title: 'El momento', instruction: 'Elige un momento tranquilo y sin apuro. Mejor de costado que cara a cara: en el auto, cocinando o caminando.', durationSec: 45, kind: 'reflection' },
        { title: 'La primera pregunta', instruction: 'Escribe una pregunta abierta y suave. Por ejemplo: «Te noto distinto últimamente. ¿Pasa algo con tus compañeros?».', durationSec: 60, kind: 'reflection' },
        { title: 'Escuchar', instruction: 'Piensa qué harás mientras habla. Escuchar sin cortar, no retar y repetir lo que entendiste.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que vas a decir', instruction: 'Escribe tres frases para el cierre: «Gracias por contarme», «No es tu culpa» y «Vamos a buscar ayuda juntos».', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Recuerda que no tienes que resolver todo en una charla.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'preparar-la-reunion-con-la-escuela',
      title: 'Preparar la reunión con la escuela',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Ordenar hechos, pruebas y pedidos concretos para ir a la escuela con calma y salir con un plan.',
      mechanism: 'Una reunión con hechos claros y pedidos concretos ayuda a que la escuela actúe como institución, que es lo que mejor funciona contra el acoso.',
      evidenceLevel: 'moderada',
      evidence: [GAFFNEY_2019, LEY_26892],
      howItWorks: [
        'Los programas que trabajan con toda la escuela reducen el acoso. Un metaanálisis encontró que bajan tanto el acoso como la victimización, aunque el efecto es moderado (Gaffney y colaboradores, 2019). Por eso conviene que la escuela intervenga, y no resolverlo solo entre familias.',
        'En la Argentina, la Ley 26.892 de 2013 pide a las escuelas acuerdos de convivencia y un abordaje institucional de los conflictos. Puedes pedir que te expliquen cómo lo aplican.',
        'Ir con hechos, fechas y pruebas ayuda a que la charla no quede en opiniones. Pedir un plan concreto y una fecha para volver a hablar ayuda a que algo cambie.',
      ],
      tips: [
        'Pide la reunión por escrito y guarda la respuesta.',
        'Lleva una lista con fechas, lugares y lo que pasó. Sin adjetivos.',
        'No pidas castigos para el otro chico. Pide protección y un plan.',
        'Si nada cambia, puedes pedir hablar con la dirección o con el equipo de orientación.',
      ],
      obstacles: [
        { q: 'En la escuela me dicen que son «cosas de chicos».', a: 'Explica con calma que hay hechos que se repiten y que afectan a tu hijo o hija. Pide por escrito qué van a hacer. Si no hay respuesta, sube a la dirección o a la supervisión.' },
      ],
      cautions: URGENTE,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa que vas a la escuela a buscar un aliado, no a pelear.', durationSec: 30, kind: 'breath' },
        { title: 'Los hechos', instruction: 'Anota qué pasó, cuándo, dónde y quiénes estaban. Usa frases cortas y sin adjetivos.', durationSec: 75, kind: 'reflection' },
        { title: 'Las pruebas', instruction: 'Junta lo que tengas: capturas de pantalla, mensajes, fotos de cosas rotas o notas del médico. Guárdalas en un solo lugar.', durationSec: 60, kind: 'instruction' },
        { title: 'Lo que necesitas', instruction: 'Escribe dos o tres pedidos concretos. Por ejemplo, que un adulto mire los recreos o que cambien de lugar a tu hijo o hija.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que dice tu hijo', instruction: 'Repasa qué quiere tu hijo o hija que se cuente y qué no. Respeta lo que acordaron.', durationSec: 45, kind: 'reflection' },
        { title: 'La frase de inicio', instruction: 'Escribe cómo vas a empezar. Por ejemplo: «Vengo porque me preocupa algo que se repite. Quiero trabajar con ustedes».', durationSec: 45, kind: 'reflection' },
        { title: 'El cierre', instruction: 'Anota qué vas a pedir al final: quién hace qué y cuándo vuelven a hablar.', durationSec: 40, kind: 'reflection' },
      ],
    },
    {
      id: 'enojo-de-madre-o-padre',
      title: 'Cuando el enojo te gana como madre o padre',
      family: 'attentional',
      skills: ['attention', 'resilience'],
      summary: 'Una pausa de tres minutos para bajar la furia antes de responder un mensaje, llamar a la escuela o hablar con tu hijo o hija.',
      mechanism: 'El enojo es una reacción natural cuando lastiman a un hijo. Bajar la activación antes de actuar ayuda a proteger mejor y a no empeorar la situación.',
      evidenceLevel: 'preliminar',
      evidence: [OLWEUS_1993],
      micro: true,
      howItWorks: [
        'Enterarte de que lastiman a tu hijo o hija puede darte mucha furia. Es comprensible: el enojo aparece para proteger. Pero si actúas en ese pico, puedes enviar un mensaje que empeore las cosas o asustar a tu hijo.',
        'Una pausa breve, con respiración lenta y los pies en el piso, baja un poco la activación. Después puedes elegir qué hacer con más claridad. El enojo puede quedarse, pero no conduce.',
      ],
      tips: [
        'No escribas a la otra familia ni en el grupo de padres con enojo. Espera al menos un día.',
        'Nunca enfrentes a otro chico. Lleva todo a la escuela.',
        'Si el enojo no baja en días, habla con alguien de confianza o con un profesional.',
      ],
      obstacles: [{ q: 'Siento que si me calmo, no lo estoy defendiendo.', a: 'Calmarte no es dejarlo pasar. Es elegir la mejor forma de protegerle. Defender bien necesita una cabeza clara.' }],
      steps: [
        { title: 'Parar', instruction: 'Deja el celular. No respondas nada todavía. Siente los pies en el piso.', durationSec: 20, kind: 'instruction' },
        { title: 'Nombrar', instruction: 'Dite en voz baja: «Siento furia porque quiero proteger a mi hijo». Nota dónde sientes el enojo en el cuerpo.', durationSec: 30, kind: 'reflection' },
        { title: 'Respirar', instruction: 'Toma aire en cuatro tiempos y suéltalo en seis. Repite varias veces, despacio.', durationSec: 60, kind: 'breath' },
        { title: 'Aflojar', instruction: 'Suelta las manos, los hombros y la mandíbula. Deja que el cuerpo pese.', durationSec: 30, kind: 'breath' },
        { title: 'Elegir', instruction: '¿Qué necesita tu hijo de ti ahora? Elige un paso calmo para hoy. Lo demás puede esperar.', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'sanar-el-acoso-que-vivi',
      title: 'Para quien vivió acoso',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Una práctica de autocompasión para adolescentes y adultos que sufrieron acoso. No se revive lo que pasó: se mira cómo estás hoy.',
      mechanism: 'Tratarse con amabilidad y anclarse en el presente baja la vergüenza que suele dejar el acoso, sin necesidad de volver a los recuerdos.',
      evidenceLevel: 'preliminar',
      evidence: [ARSENEAULT_2010, OLWEUS_1993],
      howItWorks: [
        'El acoso deja huellas en muchas personas. Puede quedar vergüenza, miedo a los grupos o una voz que repite lo que decían los otros (Arseneault y colaboradores, 2010).',
        'Esta práctica no vuelve a los recuerdos ni los describe en detalle. Eso, si hace falta, se trabaja con un profesional. Aquí sólo se reconoce que dolió, se mira lo que te ayudó a seguir y se ofrece amabilidad al presente.',
        'Lo que te pasó no habla de lo que vales. Habla de un grupo que eligió lastimar y de adultos que no frenaron a tiempo.',
      ],
      tips: [
        'Si aparece una imagen fuerte, abre los ojos y mira cinco cosas a tu alrededor.',
        'No hace falta pensar en lo que pasó. Basta con saber que pasó.',
        'Si la voz que te critica usa las palabras de entonces, nótalo: «esa voz no es mía».',
      ],
      obstacles: [
        { q: 'Me vienen imágenes del pasado.', a: 'Deja la práctica en ese punto. Siente los pies, mira a tu alrededor y nombra lo que ves. Si las imágenes son frecuentes, consulta con un profesional: hay tratamientos que ayudan.' },
      ],
      cautions:
        'No es una práctica para revivir recuerdos. Si al recordar sientes que vuelves a estar ahí, si tienes pesadillas o te cuesta funcionar, consulta con un profesional. Si tienes ideas de hacerte daño, llama al 135 o al 0800-999-0091. Si hay peligro, al 911.',
      steps: [
        { title: 'Llegar al presente', instruction: 'Siente los pies en el piso. Mira a tu alrededor y nombra tres cosas que ves. Estás aquí, hoy.', durationSec: 45, kind: 'instruction' },
        { title: 'Respirar', instruction: 'Pon una mano en el pecho. Respira despacio y siente el calor de la mano.', durationSec: 40, kind: 'breath' },
        { title: 'Reconocer', instruction: 'Sin entrar en detalles, dite: «Me pasó algo que dolió. No fue mi culpa».', durationSec: 40, kind: 'breath' },
        { title: 'No te pasó sólo a ti', instruction: 'Recuerda que muchas personas vivieron algo parecido. Dite: «No estoy sola ni solo en esto».', durationSec: 40, kind: 'breath' },
        { title: 'Lo que te ayudó', instruction: 'Escribe algo o alguien que te ayudó a seguir. Una amistad, un lugar, una música o tu propia fuerza.', durationSec: 60, kind: 'reflection' },
        { title: 'Una voz amable', instruction: 'Escribe lo que le dirías hoy a esa persona más joven que fuiste. Usa palabras cálidas y simples.', durationSec: 75, kind: 'reflection' },
        { title: 'Volver', instruction: 'Mira otra vez a tu alrededor. Mueve las manos y los pies. Termina con una respiración lenta.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'testigo-que-ayuda',
      title: 'Ser un testigo que ayuda',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Planear qué hacer cuando ves acoso, en la escuela, en un grupo de chat o en el trabajo, sin ponerte en riesgo.',
      mechanism: 'El acoso se sostiene con el público. Cuando los testigos no se ríen, acompañan a quien sufre o avisan a un adulto, el acoso pierde fuerza.',
      evidenceLevel: 'moderada',
      evidence: [SALMIVALLI_2010, GAFFNEY_2019],
      howItWorks: [
        'Christina Salmivalli mostró que el acoso es un fenómeno de grupo. Además de quien acosa y quien sufre, hay quienes ayudan, quienes se ríen, quienes miran y quienes defienden (Salmivalli, 2010). Lo que hacen los testigos cambia mucho lo que pasa.',
        'No hace falta ser un héroe. Basta con no reírse, no reenviar, acercarse después a quien sufrió y avisar a un adulto. Estos pasos pequeños son seguros y ayudan.',
      ],
      tips: [
        'Tu seguridad primero. Si hay violencia, busca a un adulto o llama al 911.',
        'Acompañar después cuenta mucho: «Vi lo que pasó. ¿Estás bien?».',
        'En el chat, no reenvíes. Guarda la captura y avisa a un adulto.',
        'Ayuda hacerlo con otra persona. En grupo es más fácil.',
      ],
      obstacles: [{ q: 'Tengo miedo de que me agarren a mí.', a: 'Es un miedo real. Por eso no hace falta enfrentar. Puedes acompañar en privado y avisar a un adulto sin que nadie se entere.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en un lugar donde a veces ves burlas o acoso.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que pasa', instruction: 'Recuerda una situación. ¿Qué hacían los demás? ¿Quién se reía, quién miraba, quién se iba?', durationSec: 60, kind: 'reflection' },
        { title: 'No sumar', instruction: 'Elige qué no vas a hacer: reírte, compartir o dar me gusta. Anótalo.', durationSec: 40, kind: 'reflection' },
        { title: 'Acompañar', instruction: 'Escribe una frase para decirle después a quien sufrió. Por ejemplo: «Lo que te hicieron no estuvo bien. ¿Estás bien?».', durationSec: 60, kind: 'reflection' },
        { title: 'Avisar', instruction: 'Anota a qué adulto podrías avisar. Un docente, un preceptor, alguien de tu familia o del trabajo.', durationSec: 45, kind: 'reflection' },
        { title: 'Con otros', instruction: 'Piensa en una persona que podría acompañarte. Juntos es más fácil y más seguro.', durationSec: 40, kind: 'reflection' },
      ],
    },
  ],

  meta: {
    'preparar-la-charla-con-mi-hijo': { level: 'iniciacion', approaches: ['mentalizacion', 'humanista'], module: 'etapas' },
    'preparar-la-reunion-con-la-escuela': { level: 'iniciacion', approaches: ['soluciones', 'sistemica'], module: 'etapas' },
    'enojo-de-madre-o-padre': { level: 'iniciacion', approaches: ['dbt', 'relajacion'], module: 'etapas' },
    'sanar-el-acoso-que-vivi': {
      level: 'intermedio',
      approaches: ['cft'],
      module: 'relaciones',
      prerequisites: ['pausa-autocompasion'],
      risk: { level: 2, alternative: 'pausa-autocompasion' },
    },
    'testigo-que-ayuda': { level: 'iniciacion', approaches: ['sistemica', 'interpersonal'], module: 'relaciones' },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'acoso-escolar-y-ciberacoso',
      title: 'Acoso escolar y ciberacoso',
      subtitle: 'Qué es, cómo darte cuenta, qué hacer con la escuela, el rol de los testigos y cómo sanar si lo viviste.',
      category: 'Etapas de la vida',
      readingMin: 9,
      keyPoints: [
        'El acoso es una agresión que se repite y donde hay una diferencia de poder. No es una pelea entre iguales.',
        'Deja huellas en la salud mental. No es «cosa de chicos».',
        'Lo que mejor funciona es que actúe toda la escuela, no sólo las familias.',
        'Los testigos pueden frenar el acoso con pasos pequeños y seguros.',
        'En el ciberacoso, guarda las pruebas antes de bloquear o borrar.',
      ],
      sections: [
        {
          heading: 'Qué es el acoso',
          paragraphs: [
            'Dan Olweus definió el acoso escolar con tres rasgos. Es una agresión a propósito, se repite en el tiempo y hay una diferencia de poder entre quien acosa y quien sufre (Olweus, 1993). Una pelea aislada entre iguales no es acoso.',
            'Puede ser físico, como golpes o romper cosas. Puede ser verbal, como burlas o apodos. Puede ser social, como dejar afuera o inventar rumores. Y puede ser digital.',
          ],
        },
        {
          heading: 'Por qué importa',
          paragraphs: [
            'Sufrir acoso se asocia a más ansiedad, depresión, autolesiones y problemas de salud, a veces durante años (Arseneault y colaboradores, 2010). Por eso conviene tomarlo en serio desde el principio.',
            'Algunas señales son: no querer ir a la escuela, dolores de panza o de cabeza por la mañana, cosas rotas o perdidas, cambios en el sueño o el apetito, aislarse o mirar el celular con miedo. Ninguna señal sola prueba nada, pero juntas merecen una charla.',
          ],
        },
        {
          heading: 'El ciberacoso',
          paragraphs: [
            'El ciberacoso usa el celular y las redes. Puede seguir en casa, a cualquier hora, y llegar a mucha gente. Una revisión grande encontró que se asocia a más ansiedad, depresión y malestar, y que suele darse junto con el acoso en persona (Kowalski y colaboradores, 2014).',
            'Ante el ciberacoso, primero guarda las pruebas: capturas con fecha, nombre de la cuenta y enlace. Después bloquea y denuncia en la plataforma. No respondas ni reenvíes. Si hay amenazas, imágenes íntimas o extorsión, es un delito: llama al 911.',
          ],
        },
        {
          heading: 'Qué hacer con la escuela',
          paragraphs: [
            'Los programas que involucran a toda la escuela bajan el acoso y la victimización (Gaffney y colaboradores, 2019). Funcionan mejor cuando hay supervisión en los recreos, reglas claras y trabajo con el grupo.',
            'En la Argentina, la Ley 26.892 de 2013 pide a las escuelas acuerdos de convivencia y un abordaje institucional. Pide una reunión, lleva hechos y pruebas, pide un plan concreto y una fecha para volver a hablar. No enfrentes a otro chico ni a su familia.',
          ],
        },
        {
          heading: 'El grupo y los testigos',
          paragraphs: [
            'Christina Salmivalli mostró que el acoso es un fenómeno de grupo. Hay quienes ayudan a quien acosa, quienes se ríen, quienes miran y quienes defienden (Salmivalli, 2010). Cuando el público deja de reírse, el acoso pierde fuerza.',
            'Si tu hijo o hija es quien acosa, también necesita ayuda. Escucha sin humillar, pon límites claros y repara el daño. Trabaja con la escuela y pregúntate qué le está pasando.',
          ],
        },
        {
          heading: 'Si lo viviste',
          paragraphs: [
            'Muchas personas adultas cargan con lo que vivieron en la escuela. Puede quedar vergüenza, miedo a los grupos o una voz crítica. Tratarte con amabilidad y anclarte en el presente puede aliviar.',
            'Si los recuerdos vuelven con fuerza, si tienes pesadillas o te cuesta funcionar, consulta con un profesional. Hay tratamientos que ayudan, y no conviene trabajar esos recuerdos sin acompañamiento.',
          ],
        },
      ],
      caveat: {
        title: 'Cuándo es urgente',
        body: 'Si hay autolesiones, ideas de muerte, amenazas, violencia física o imágenes íntimas difundidas, no esperes a la escuela. Llama al 911 si hay peligro. Puedes llamar a la Línea 102 (niñez y adolescencia), al 135 o al 0800-999-0091. Los programas escolares tienen evidencia, pero su efecto es moderado: también hace falta acompañar a cada chico.',
      },
      diagram: {
        title: 'Cómo se sostiene el acoso',
        nodes: ['Agresión a alguien con menos poder', 'Testigos que se ríen o miran', 'Quien acosa gana lugar en el grupo', 'Quien sufre calla por miedo o vergüenza', 'Los adultos no se enteran'],
        caption: 'Romper cualquier eslabón ayuda: testigos que no se ríen, chicos que cuentan y adultos que actúan juntos.',
      },
      related: {
        practices: ['preparar-la-charla-con-mi-hijo', 'preparar-la-reunion-con-la-escuela', 'enojo-de-madre-o-padre', 'testigo-que-ayuda', 'sanar-el-acoso-que-vivi'],
        articles: ['autocompasion'],
      },
      references: [OLWEUS_1993, ARSENEAULT_2010, KOWALSKI_2014, GAFFNEY_2019, SALMIVALLI_2010, LEY_26892],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'frente-al-acoso-escolar',
      title: 'Frente al acoso escolar',
      subtitle: 'Tres semanas para familias que acompañan a un chico que sufre acoso',
      description:
        'Aprenderás a preguntar y escuchar sin presionar, a calmar tu enojo antes de actuar y a trabajar con la escuela. También verás el rol de los testigos. Si hay autolesiones, amenazas o violencia, no esperes: pide ayuda enseguida.',
      basis: 'Olweus (1993); Gaffney, Ttofi y Farrington (2019); Salmivalli (2010).',
      rhythm: '10 minutos, 3 o 4 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Escuchar',
          focus: 'Señales y charla',
          description: 'Leerás qué es el acoso y cómo darte cuenta. Prepararás una charla tranquila con tu hijo o hija.',
          practiceIds: ['preparar-la-charla-con-mi-hijo', 'enojo-de-madre-o-padre'],
          articleIds: ['acoso-escolar-y-ciberacoso'],
          journalType: 'conversacion',
        },
        {
          title: 'Semana 2 · La escuela',
          focus: 'Hechos, pruebas y un plan',
          description: 'Ordenarás los hechos y las pruebas y prepararás la reunión con la escuela.',
          practiceIds: ['preparar-la-reunion-con-la-escuela', 'enojo-de-madre-o-padre'],
          articleIds: [],
          journalType: 'resolucion-problemas',
        },
        {
          title: 'Semana 3 · El grupo',
          focus: 'Testigos y cuidado propio',
          description: 'Verás cómo los testigos pueden frenar el acoso y te darás un momento de cuidado a ti.',
          practiceIds: ['testigo-que-ayuda', 'pausa-autocompasion'],
          articleIds: [],
          journalType: 'carta-compasiva',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-que-es-el-acoso',
      title: 'No es cosa de chicos',
      subtitle: 'Qué es el acoso y cómo darte cuenta.',
      slides: [
        { heading: 'Qué es', text: 'El acoso es una agresión que se repite. Y quien la sufre tiene menos poder. No es una pelea entre iguales.' },
        { heading: 'Muchas formas', text: 'Golpes, burlas, apodos, dejar afuera, rumores o mensajes. Todo eso puede ser acoso.' },
        { heading: 'Deja huellas', text: 'El acoso se asocia a más ansiedad y tristeza, a veces por años. Por eso vale la pena tomarlo en serio.' },
        { heading: 'Señales', text: 'No querer ir a la escuela, dolor de panza a la mañana, cosas rotas o mirar el celular con miedo.' },
        { heading: 'Preguntar bien', text: 'Busca un momento tranquilo. Pregunta con calma y escucha. Dile que no es su culpa.' },
        { heading: 'Si es urgente', text: 'Si hay amenazas, golpes o habla de morir, no esperes. Llama al 911 o a la Línea 102.' },
      ],
      related: { practices: ['preparar-la-charla-con-mi-hijo'], articles: ['acoso-escolar-y-ciberacoso'] },
      references: [OLWEUS_1993, ARSENEAULT_2010],
    },
    {
      id: 'pildora-ciberacoso',
      title: 'Ciberacoso: primero, las pruebas',
      subtitle: 'Qué hacer cuando el acoso llega por el celular.',
      slides: [
        { heading: 'No para en casa', text: 'El ciberacoso llega por el celular. Puede seguir de noche y llegar a mucha gente.' },
        { heading: 'Guardar', text: 'Antes de borrar, saca capturas. Que se vea la fecha, el nombre de la cuenta y el mensaje.' },
        { heading: 'Bloquear', text: 'Después, bloquea y denuncia en la red. No respondas ni reenvíes nada.' },
        { heading: 'Sin castigo', text: 'No le saques el celular a tu hijo por contarte. Si lo haces, la próxima vez no te cuenta.' },
        { heading: 'Es delito', text: 'Si hay amenazas, extorsión o fotos íntimas, es un delito. Llama al 911.' },
      ],
      related: { practices: ['preparar-la-reunion-con-la-escuela'], articles: ['acoso-escolar-y-ciberacoso'] },
      references: [KOWALSKI_2014],
    },
    {
      id: 'pildora-testigos',
      title: 'El acoso necesita público',
      subtitle: 'Qué pueden hacer quienes miran.',
      slides: [
        { heading: 'Un juego de grupo', text: 'En el acoso hay quien acosa y quien sufre. Pero también hay quien se ríe, quien mira y quien defiende.' },
        { heading: 'Sin público', text: 'Cuando nadie se ríe ni comparte, el acoso pierde fuerza. Los testigos pesan mucho.' },
        { heading: 'Pasos chicos', text: 'No reírte. No reenviar. Acercarte después: «¿Estás bien?». Avisar a un adulto.' },
        { heading: 'Tu seguridad', text: 'No hace falta enfrentar a nadie. Si hay violencia, busca a un adulto o llama al 911.' },
        { heading: 'Toda la escuela', text: 'Los programas que trabajan con toda la escuela bajan el acoso. Pregunta qué hace la escuela de tus hijos.' },
      ],
      related: { practices: ['testigo-que-ayuda'], articles: ['acoso-escolar-y-ciberacoso'] },
      references: [SALMIVALLI_2010, GAFFNEY_2019],
    },
  ],

  // ================================================================== guías para familias
  kidGuides: [
    {
      id: 'si-tu-hijo-sufre-acoso',
      title: 'Si tu hijo o hija sufre acoso',
      subtitle: 'Cómo darte cuenta, cómo preguntar sin presionar, qué hacer con la escuela y con el ciberacoso.',
      readingMin: 6,
      keyPoints: [
        'Muchos chicos no cuentan el acoso por vergüenza o miedo. Mira las señales.',
        'Pregunta en un momento tranquilo y escucha más de lo que hablas.',
        'Dile que no es su culpa y decidan juntos los próximos pasos.',
        'Lleva hechos y pruebas a la escuela y pide un plan concreto.',
        'En el ciberacoso, guarda las pruebas antes de bloquear.',
      ],
      sections: [
        {
          heading: 'Señales para mirar',
          paragraphs: [
            'Muchos chicos no cuentan lo que les pasa. Temen que empeore o que el adulto se enoje (Olweus, 1993). Por eso conviene mirar señales: no querer ir a la escuela, dolores por la mañana, cosas rotas o perdidas, cambios en el sueño o el apetito, menos amigos o miedo al celular.',
            'Una señal sola no prueba nada. Pero si ves varias, vale la pena una charla tranquila.',
          ],
        },
        {
          heading: 'Preguntar y escuchar',
          paragraphs: [
            'Elige un momento sin apuro, mejor de costado que cara a cara: en el auto, cocinando o caminando. Pregunta algo abierto: «¿Cómo están las cosas con tus compañeros?».',
            'Si cuenta algo, escucha sin cortar. No preguntes «¿por qué no te defendiste?». Agradece que te cuente y dile que no es su culpa. Si no quiere hablar, deja la puerta abierta.',
          ],
        },
        {
          heading: 'Con la escuela',
          paragraphs: [
            'Los programas que trabajan con toda la escuela bajan el acoso (Gaffney y colaboradores, 2019). Por eso conviene ir a la escuela y no resolverlo entre familias. En la Argentina, la Ley 26.892 pide a las escuelas acuerdos de convivencia.',
            'Lleva hechos, fechas y pruebas. Pide un plan concreto y una fecha para volver a hablar. No enfrentes a otro chico ni a su familia: suele empeorar las cosas.',
          ],
        },
        {
          heading: 'Ciberacoso y pruebas',
          paragraphs: [
            'El ciberacoso puede seguir en casa y a cualquier hora (Kowalski y colaboradores, 2014). Antes de bloquear, guarda capturas con la fecha y el nombre de la cuenta. Después bloquea y denuncia en la red.',
            'No le saques el celular por contarte. Si lo haces, la próxima vez puede callar. Si hay amenazas, extorsión o fotos íntimas, llama al 911.',
          ],
        },
      ],
      phrases: ['«Gracias por contarme. No es tu culpa»', '«Vamos a buscar ayuda juntos. Te voy a avisar antes de cada paso»', '«No me voy a enojar contigo por lo que me cuentes»', '«Si algún día pasa algo, puedes contarme»'],
      caveat: {
        title: 'Cuándo es urgente',
        body: 'Si tu hijo o hija habla de morir, se lastima, recibe amenazas o hay violencia física, no esperes a la escuela. Llama al 911 si hay peligro. También puedes llamar a la Línea 102, al 135 o al 0800-999-0091.',
      },
      activities: ['como-me-siento', 'pedir-ayuda', 'cuando-me-dejan-afuera', 'redes-y-yo'],
      references: [OLWEUS_1993, GAFFNEY_2019, KOWALSKI_2014, LEY_26892],
    },
    {
      id: 'si-tu-hijo-acosa-o-mira',
      title: 'Si tu hijo o hija acosa o mira',
      subtitle: 'Qué hacer cuando tu hijo es quien lastima, y cómo ayudarle a ser un testigo que ayuda.',
      readingMin: 5,
      keyPoints: [
        'Si tu hijo o hija acosa, también necesita ayuda, no sólo castigo.',
        'Escucha sin humillar, pon límites claros y busquen juntos cómo reparar.',
        'El acoso se sostiene con el público. Los testigos pueden frenarlo.',
        'Enséñale pasos seguros: no reírse, no reenviar, acompañar y avisar.',
      ],
      sections: [
        {
          heading: 'Si tu hijo o hija es quien acosa',
          paragraphs: [
            'Enterarte de que tu hijo lastima a otro duele y avergüenza. Respira antes de actuar. Escucha su versión sin humillar ni gritar. Después deja claro que lastimar no está bien, aunque haya un motivo.',
            'Pregúntate qué le está pasando. A veces quien acosa busca lugar en el grupo o está pasando un mal momento (Salmivalli, 2010). Trabaja con la escuela, pon límites claros y busquen juntos cómo reparar el daño. Si se repite, consulta con un profesional.',
          ],
        },
        {
          heading: 'El rol de los testigos',
          paragraphs: [
            'El acoso es un fenómeno de grupo. Hay quienes ayudan a quien acosa, quienes se ríen, quienes miran y quienes defienden (Salmivalli, 2010). Lo que hace el público cambia lo que pasa.',
            'No hace falta enfrentar a nadie. Pasos chicos y seguros ayudan mucho: no reírse, no reenviar, acercarse después a quien sufrió y avisar a un adulto.',
          ],
        },
        {
          heading: 'Cómo hablarlo en casa',
          paragraphs: [
            'Pregunta qué ve en la escuela y en los grupos de chat. Escucha sin juzgar. Practiquen juntos qué decir: «¿Estás bien?» o «Eso no estuvo bien».',
            'Cuenta tus propias experiencias si te sirven. Y muestra con tu ejemplo cómo hablas de otras personas.',
          ],
        },
      ],
      phrases: ['«Lastimar a otro no está bien. Vamos a ver cómo reparar»', '«Quiero entender qué te pasó a ti también»', '«No tienes que enfrentar a nadie. Puedes acompañar y avisar»', '«¿Qué podrías decirle después a ese compañero?»'],
      caveat: {
        title: 'Lo que no ayuda',
        body: 'Humillar, pegar o castigar sin explicar suele empeorar las cosas. Si la conducta se repite, si hay violencia o si notas mucho enojo o tristeza en tu hijo o hija, consulta con un profesional y con el equipo de la escuela.',
      },
      activities: ['superpoder-amable', 'pedir-perdon-y-reparar', 'amigos-que-suman', 'pedir-y-decir-que-no'],
      references: [SALMIVALLI_2010, GAFFNEY_2019],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'acoso-escolar-termino', term: 'Acoso escolar', definition: 'Agresión a propósito que se repite en el tiempo, donde hay una diferencia de poder entre quien acosa y quien sufre. Una pelea aislada entre iguales no es acoso.', articleId: 'acoso-escolar-y-ciberacoso' },
    { id: 'ciberacoso', term: 'Ciberacoso', definition: 'Acoso por el celular, las redes o los juegos en línea. Puede seguir en casa y llegar a mucha gente. Conviene guardar las pruebas antes de bloquear.', articleId: 'acoso-escolar-y-ciberacoso' },
    { id: 'testigos-del-acoso', term: 'Testigos del acoso', definition: 'Quienes ven el acoso sin ser quien acosa ni quien sufre. Si no se ríen, acompañan y avisan a un adulto, el acoso pierde fuerza.', practiceId: 'testigo-que-ayuda' },
    { id: 'acuerdos-de-convivencia', term: 'Acuerdos de convivencia', definition: 'Normas que cada escuela arma con su comunidad para convivir y abordar los conflictos. En la Argentina los pide la Ley 26.892 de 2013.', practiceId: 'preparar-la-reunion-con-la-escuela' },
  ],
};
