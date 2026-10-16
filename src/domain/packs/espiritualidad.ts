import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Espiritualidad»: sentido trascendente sin una religión en particular.
 *  - qué entendemos por espiritualidad: conexión con algo más grande, sentido, trascendencia;
 *  - asombro (Keltner y Haidt) y paseo de asombro (Sturm y colaboradores);
 *  - experiencias de autotrascendencia, gratitud y pertenencia (Yaden y colaboradores);
 *  - rituales personales y de paso; preguntas por el sentido en una crisis (Frankl);
 *  - afrontamiento religioso positivo y negativo (Pargament), sin juzgar creencias;
 *  - espiritualidad, naturaleza, valores y legado.
 *
 * Complementa la logoterapia existente ('que-me-pide-la-vida', 'tres-caminos-sentido').
 * Reglas de seguridad del paquete: respeto por creyentes, no creyentes y agnósticos; ninguna
 * práctica promete sanación ni reemplaza un tratamiento; ante desesperanza o ideas de muerte
 * se remite a ayuda (135, 0800-999-0091, 911).
 */

const KELTNER_2003: Reference = {
  citation: 'Keltner, D., & Haidt, J. (2003). Approaching awe, a moral, spiritual, and aesthetic emotion. Cognition and Emotion, 17(2), 297–314.',
  doi: '10.1080/02699930302297',
};
const STURM_2022: Reference = {
  citation: 'Sturm, V. E., Datta, S., Roy, A. R. K., Sible, I. J., Kosik, E. L., Veziris, C. R., … Keltner, D. (2022). Big smile, small self: Awe walks promote prosocial positive emotions in older adults. Emotion, 22(5), 1044–1058.',
};
const PARGAMENT_2000: Reference = {
  citation: 'Pargament, K. I., Koenig, H. G., & Perez, L. M. (2000). The many methods of religious coping: Development and initial validation of the RCOPE. Journal of Clinical Psychology, 56(4), 519–543.',
};
const KOENIG_2012: Reference = {
  citation: 'Koenig, H. G. (2012). Religion, spirituality, and health: The research and clinical implications. ISRN Psychiatry, 2012, 278730.',
  doi: '10.5402/2012/278730',
};
const YADEN_2017: Reference = {
  citation: 'Yaden, D. B., Haidt, J., Hood, R. W., Jr., Vago, D. R., & Newberg, A. B. (2017). The varieties of self-transcendent experience. Review of General Psychology, 21(2), 143–160.',
};
const FRANKL_1946: Reference = { citation: 'Frankl, V. E. (1946/2015). El hombre en busca de sentido. Herder.' };

/** Aviso común para las prácticas que tocan crisis o creencias. */
const CRISIS =
  'Esta práctica no reemplaza un tratamiento ni promete sanación. Si sientes desesperanza, piensas que la vida no tiene salida o tienes ideas de morir, pide ayuda hoy: Centro de Asistencia al Suicida 135 (CABA y GBA; resto del país 0800-345-1435), Línea Nacional de Salud Mental 0800-999-0091 o el 911 en una urgencia. También puedes usar el botón Ayuda de la app.';

export const ESPIRITUALIDAD_PACK: ContentPack = {
  id: 'espiritualidad',

  // ================================================================== prácticas
  practices: [
    {
      id: 'paseo-de-asombro',
      title: 'Paseo de asombro',
      family: 'attentional',
      skills: ['attention'],
      summary: 'Una caminata de quince minutos buscando lo que te asombra: el cielo, un árbol, la luz, algo pequeño que nunca habías visto.',
      mechanism: 'El asombro aparece ante algo más grande que uno. Achica el foco en uno mismo y aumenta las emociones que acercan a los demás.',
      evidenceLevel: 'preliminar',
      evidence: [STURM_2022, KELTNER_2003],
      howItWorks: [
        'Dacher Keltner y Jonathan Haidt describieron el asombro como la emoción que sentimos ante algo inmenso, que no entra del todo en lo que ya sabemos. Puede ser la naturaleza, la música, un acto de bondad o una idea (Keltner y Haidt, 2003).',
        'En un estudio, personas mayores hicieron una caminata semanal de quince minutos buscando asombro. Comparadas con quienes caminaban sin esa consigna, sintieron más emociones positivas y se vieron más chicas en sus fotos, rodeadas de más paisaje (Sturm y colaboradores, 2022).',
        'No hace falta ir lejos. Una plaza, la vereda o el cielo de tu barrio alcanzan.',
      ],
      tips: [
        'Deja el celular en el bolsillo, salvo para una foto.',
        'Mira hacia arriba y hacia lo pequeño: las nubes, una hoja, una grieta.',
        'Camina en un lugar nuevo, o en el de siempre como si fuera nuevo.',
      ],
      obstacles: [{ q: 'No me asombra nada.', a: 'Es común al principio. Busca algo que no entiendas del todo: cómo crece un árbol, la cantidad de estrellas. El asombro se entrena mirando.' }],
      steps: [
        { title: 'Salir', instruction: 'Sal a caminar quince minutos. Elige un lugar con algo de cielo o de verde, si puedes.', durationSec: 60, kind: 'instruction' },
        { title: 'Respirar', instruction: 'Camina despacio y respira hondo tres veces. Siente los pies en el suelo.', durationSec: 45, kind: 'breath' },
        { title: 'Lo grande', instruction: 'Mira hacia arriba. El cielo, los árboles, los edificios. Nota su tamaño al lado del tuyo.', durationSec: 120, kind: 'instruction' },
        { title: 'Lo pequeño', instruction: 'Ahora busca algo chico y detallado. Una hoja, una piedra, un bicho. Míralo como si fuera la primera vez.', durationSec: 120, kind: 'instruction' },
        { title: 'Lo que no entiendes', instruction: 'Elige algo y pregúntate cómo llegó a existir. Deja que la pregunta quede abierta.', durationSec: 90, kind: 'reflection' },
        { title: 'Volver', instruction: 'Antes de terminar, nota cómo te sientes. Si quieres, saca una foto de lo que más te asombró.', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'momentos-de-trascendencia',
      title: 'Momentos en que me sentí parte',
      family: 'constructive',
      skills: ['attention', 'compassion'],
      summary: 'Recordar momentos en que te sentiste parte de algo más grande y descubrir qué te conecta: personas, naturaleza, arte, fe o una causa.',
      mechanism: 'Las experiencias de autotrascendencia bajan el foco en uno mismo y aumentan la sensación de conexión. Recordarlas ayuda a buscarlas más.',
      evidenceLevel: 'preliminar',
      evidence: [YADEN_2017, KELTNER_2003],
      howItWorks: [
        'David Yaden y su equipo revisaron las experiencias de autotrascendencia. Son momentos en que se afloja la frontera del yo y uno se siente unido a otros o al mundo. Van desde el asombro y la gratitud hasta experiencias místicas (Yaden y colaboradores, 2017).',
        'Pueden aparecer en un templo, en un recital, frente al mar, cuidando a alguien o en una cancha con miles de personas. No dependen de tener una religión.',
        'Gratitud y pertenencia son caminos de todos los días hacia lo mismo: notar que tu vida está unida a muchas otras.',
      ],
      tips: [
        'No hace falta un momento enorme. Sirve una tarde en familia o una canción.',
        'Si eres creyente, puedes incluir momentos de oración o de comunidad.',
        'Si no lo eres, puedes pensar en la naturaleza, el arte o la humanidad.',
      ],
      obstacles: [{ q: 'Nunca tuve una experiencia así.', a: 'Muchas personas creen eso y luego recuerdan algo simple: un abrazo, un atardecer, un coro. Empieza por lo que te emocionó.' }],
      steps: [
        { title: 'Llegar', instruction: 'Siéntate con comodidad. Respira despacio tres veces.', durationSec: 30, kind: 'breath' },
        { title: 'Recordar', instruction: 'Recuerda un momento en que te sentiste parte de algo más grande que tú. Anota dónde estabas y con quién.', durationSec: 75, kind: 'reflection' },
        { title: 'Revivir', instruction: 'Cierra los ojos y vuelve a ese momento. ¿Qué veías, oías, sentías en el cuerpo?', durationSec: 60, kind: 'breath' },
        { title: 'Lo que te une', instruction: 'Escribe con qué sentiste esa unión: personas, naturaleza, arte, Dios, la vida, una causa.', durationSec: 60, kind: 'reflection' },
        { title: 'Gratitud', instruction: 'Piensa en tres personas o cosas sin las que tu vida de hoy no sería posible. Agradéceles en silencio.', durationSec: 60, kind: 'reflection' },
        { title: 'Buscarlo', instruction: 'Elige una forma de acercarte a esa conexión esta semana. Escribe cuándo y dónde.', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'mi-ritual-con-sentido',
      title: 'Un ritual con sentido',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Crear un ritual personal y simple para marcar el día, un cambio de etapa o una pérdida, con gestos que tengan sentido para ti.',
      mechanism: 'Los rituales dan forma a lo que no se puede decir del todo. Marcan un antes y un después, y conectan con lo que importa.',
      evidenceLevel: 'contemplativa',
      evidence: [KOENIG_2012, FRANKL_1946],
      howItWorks: [
        'Todas las culturas tienen rituales: para empezar el día, para despedir, para celebrar, para recordar. Muchas tradiciones religiosas los ofrecen, y también se pueden crear sin religión.',
        'Un ritual no tiene que ser solemne. Puede ser encender una vela cada noche, plantar algo en un aniversario o leer una carta en voz alta. Lo que importa es el sentido que le das.',
        'Si estás atravesando un duelo, puedes probar también la práctica «Ritual de recuerdo».',
      ],
      tips: [
        'Hazlo simple. Un ritual que puedes repetir vale más que uno grande que no harás.',
        'Usa objetos, lugares o palabras que te importen.',
        'Puedes hacerlo a solas o invitar a otras personas.',
      ],
      obstacles: [{ q: 'Me da vergüenza hacerlo.', a: 'Es normal al principio. Prueba con algo muy pequeño y privado. El sentido suele crecer con la repetición.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en qué momento de tu vida quieres marcar.', durationSec: 30, kind: 'breath' },
        { title: 'Para qué', instruction: 'Escribe para qué es el ritual. Por ejemplo: empezar el día, cerrar una etapa, recordar a alguien.', durationSec: 60, kind: 'reflection' },
        { title: 'El gesto', instruction: 'Elige un gesto simple. Encender una vela, tomar un mate en silencio, escribir una frase, regar una planta.', durationSec: 60, kind: 'reflection' },
        { title: 'Las palabras', instruction: 'Escribe una frase corta para decir en tu ritual. Puede ser una oración, un deseo o un agradecimiento.', durationSec: 60, kind: 'reflection' },
        { title: 'Cuándo', instruction: 'Decide cuándo lo harás: cada día, una vez, o en una fecha que importa.', durationSec: 30, kind: 'reflection' },
        { title: 'Probar', instruction: 'Hazlo ahora una vez, despacio. Nota cómo te sientes al terminar.', durationSec: 90, kind: 'instruction' },
      ],
    },
    {
      id: 'creencias-que-sostienen',
      title: 'Lo que me sostiene y lo que me pesa',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Revisar, sin juzgar tus creencias, cómo te ayudan y cómo te pesan en un momento difícil. Sirve para creyentes, no creyentes y agnósticos.',
      mechanism: 'Las creencias pueden ser un gran apoyo en las crisis, o una fuente de culpa y soledad. Notar cuál es cuál ayuda a apoyarse en lo que sostiene.',
      evidenceLevel: 'moderada',
      evidence: [PARGAMENT_2000, KOENIG_2012],
      howItWorks: [
        'Kenneth Pargament estudió cómo las personas usan su fe en momentos difíciles. Encontró formas que suelen ayudar, como sentirse acompañado, buscar sentido o apoyarse en una comunidad. Y formas que suelen pesar, como sentirse castigado o abandonado (Pargament y colaboradores, 2000).',
        'Harold Koenig revisó miles de estudios. En promedio, la religión y la espiritualidad se asocian con más bienestar y menos depresión. Pero las luchas espirituales, como sentir culpa o enojo con lo sagrado, se asocian con más malestar (Koenig, 2012).',
        'Esta práctica no busca cambiar lo que crees. Si no tienes creencias religiosas, puedes pensar en tus ideas sobre la vida, la justicia o el destino.',
      ],
      tips: [
        'No hay creencias buenas o malas en esta práctica. Sólo miras cómo te hacen sentir.',
        'Las dudas y el enojo con lo sagrado son humanos y muy frecuentes.',
        'Si tienes una comunidad o un guía espiritual de confianza, puedes hablarlo con ellos.',
      ],
      obstacles: [{ q: 'Siento que Dios me castiga.', a: 'Es una sensación que muchas personas tienen en una crisis, y duele mucho. Hablarlo con alguien de confianza, de tu fe o un profesional, puede aliviar.' }],
      cautions: CRISIS,
      steps: [
        { title: 'Llegar', instruction: 'Siéntate con comodidad. Piensa en algo difícil que estás viviendo.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que creo', instruction: 'Escribe qué crees sobre lo que te pasa. Puede ser religioso o no: ideas sobre la vida, el destino, la justicia.', durationSec: 75, kind: 'reflection' },
        { title: 'Lo que sostiene', instruction: '¿Qué de eso te da fuerza, calma o compañía? Anótalo.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que pesa', instruction: '¿Qué te trae culpa, miedo o soledad? Anótalo sin juzgarte.', durationSec: 60, kind: 'reflection' },
        { title: 'Apoyarte', instruction: 'Elige una de las cosas que te sostienen. ¿Cómo puedes acercarte a ella esta semana?', durationSec: 60, kind: 'reflection' },
        { title: 'Compartir', instruction: 'Piensa en alguien con quien hablar de lo que pesa. Puede ser un amigo, un guía de tu fe o un profesional.', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'preguntas-en-la-crisis',
      title: 'Preguntas en la crisis',
      family: 'constructive',
      skills: ['resilience'],
      summary: 'Escribir las preguntas por el sentido que trae una crisis, sin exigir respuestas, y buscar qué te sostiene mientras tanto.',
      mechanism: 'Las crisis abren preguntas grandes. Darles lugar, en vez de taparlas, y buscar a qué o a quién responder hoy, ayuda a seguir con dirección.',
      evidenceLevel: 'contemplativa',
      evidence: [FRANKL_1946, YADEN_2017],
      howItWorks: [
        'Viktor Frankl pensaba que aun en el sufrimiento más duro se puede encontrar un sentido. No porque el dolor sea bueno, sino por cómo respondemos a él: por una persona, una tarea o una actitud.',
        'En una crisis aparecen preguntas como «¿por qué a mí?» o «¿para qué sigo?». No siempre tienen respuesta. A veces basta con escribirlas y dejarlas abiertas, y buscar qué te pide hoy la vida.',
        'Esta práctica sigue a «Tres caminos hacia el sentido». No busca apurar el dolor.',
      ],
      tips: [
        'Escribe las preguntas tal como te salen, aunque parezcan duras.',
        'No tienes que responderlas hoy.',
        'Si sientes que no hay salida, pide ayuda antes de seguir con la práctica.',
      ],
      obstacles: [{ q: 'No encuentro ningún sentido.', a: 'Es honesto y muy humano en una crisis. Por hoy, busca algo pequeño: alguien a quien cuidar, una tarea, un rato de descanso. El sentido puede llegar después.' }],
      cautions: CRISIS,
      steps: [
        { title: 'Llegar', instruction: 'Siéntate en un lugar seguro. Respira despacio y siente los pies en el piso.', durationSec: 30, kind: 'breath' },
        { title: 'Las preguntas', instruction: 'Escribe las preguntas que te trae esta crisis. Tal como suenan, sin corregirlas.', durationSec: 90, kind: 'reflection' },
        { title: 'Dejarlas abiertas', instruction: 'Léelas despacio. Dite: «No tengo que responder todo hoy».', durationSec: 40, kind: 'breath' },
        { title: 'Lo que sostiene', instruction: '¿Qué o quién te sostiene en estos días? Una persona, una creencia, un lugar, un recuerdo.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que pide hoy', instruction: '¿Qué te pide hoy la vida, en algo pequeño? Escribe una sola respuesta.', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho. Respira despacio tres veces antes de seguir con tu día.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'mi-legado',
      title: 'Lo que quiero dejar',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Pensar qué quieres dejar en las personas y en el mundo, y convertirlo en un gesto concreto de esta semana.',
      mechanism: 'Pensar en el legado conecta los valores con algo que va más allá de la propia vida. Da dirección a lo cotidiano.',
      evidenceLevel: 'contemplativa',
      evidence: [FRANKL_1946, YADEN_2017],
      howItWorks: [
        'El legado no es sólo lo que queda después de la muerte. Es la huella que dejas hoy en las personas, en tu trabajo, en tu barrio o en la naturaleza.',
        'Para Frankl, el sentido se encuentra en lo que damos al mundo, en lo que recibimos de él y en la actitud ante lo que no podemos cambiar. Pensar en el legado une esos caminos.',
        'No hace falta algo grande. Una forma de tratar a los demás, una receta, un oficio o un árbol plantado también son legado.',
      ],
      tips: [
        'Piensa en personas que dejaron huella en ti. ¿Qué te dejaron?',
        'Escribe en presente: «Quiero que quienes me conocen se sientan…».',
        'Elige un gesto chico para esta semana.',
      ],
      obstacles: [{ q: 'Pensar en esto me angustia.', a: 'Puede pasar, porque toca el paso del tiempo. Si te angustia mucho, enfócate sólo en lo que quieres dar hoy, y deja lo demás para otro día.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Piensa en tu vida como un camino.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que recibí', instruction: 'Piensa en una persona que dejó huella en ti. Escribe qué te dejó.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que quiero dar', instruction: 'Escribe qué te gustaría dejar en las personas que quieres. Una forma de tratar, algo que enseñar, un recuerdo.', durationSec: 75, kind: 'reflection' },
        { title: 'Más allá', instruction: '¿Y en el mundo? Tu barrio, tu trabajo, la naturaleza, una causa. Anota una idea.', durationSec: 60, kind: 'reflection' },
        { title: 'Un gesto', instruction: 'Elige un gesto concreto de legado para esta semana. Escribe qué harás y cuándo.', durationSec: 45, kind: 'reflection' },
      ],
    },
  ],

  meta: {
    'paseo-de-asombro': { level: 'iniciacion', approaches: ['positiva', 'mindfulness'], module: 'bienestar' },
    'momentos-de-trascendencia': { level: 'iniciacion', approaches: ['positiva', 'contemplativa'], module: 'valores' },
    'mi-ritual-con-sentido': { level: 'iniciacion', approaches: ['logoterapia', 'humanista'], module: 'valores' },
    'creencias-que-sostienen': { level: 'intermedio', approaches: ['logoterapia', 'humanista'], module: 'valores', prerequisites: ['momentos-de-trascendencia'] },
    'preguntas-en-la-crisis': { level: 'intermedio', approaches: ['logoterapia', 'escritura'], module: 'valores', prerequisites: ['tres-caminos-sentido'] },
    'mi-legado': { level: 'iniciacion', approaches: ['logoterapia', 'act'], module: 'valores' },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'espiritualidad-y-sentido',
      title: 'Espiritualidad: sentirse parte de algo más grande',
      subtitle: 'Qué entendemos por espiritualidad, con o sin religión, qué dice la investigación y cómo cultivarla sin promesas mágicas.',
      category: 'Humanismo y existencialismo',
      readingMin: 9,
      keyPoints: [
        'La espiritualidad es la búsqueda de conexión con algo más grande que uno, y de sentido.',
        'Puede vivirse dentro de una religión o fuera de ella. También las personas no creyentes la viven.',
        'El asombro, la gratitud y la pertenencia son formas cotidianas de autotrascendencia.',
        'Las creencias pueden sostener en una crisis, o pesar. Notar cuál es cuál ayuda.',
        'La espiritualidad acompaña, pero no reemplaza un tratamiento.',
      ],
      sections: [
        {
          heading: 'Qué entendemos por espiritualidad',
          paragraphs: [
            'En esta app, espiritualidad es la búsqueda de conexión con algo más grande que uno: Dios, la naturaleza, la humanidad, la vida o el universo. Incluye preguntas por el sentido y momentos de trascendencia.',
            'Para muchas personas se vive dentro de una religión. Para otras, fuera de ella. Aquí respetamos a creyentes, no creyentes y agnósticos por igual, y no proponemos ninguna creencia.',
          ],
        },
        {
          heading: 'El asombro',
          paragraphs: [
            'Keltner y Haidt describieron el asombro como la emoción ante algo inmenso, que nos obliga a ampliar lo que sabemos (Keltner y Haidt, 2003). Aparece ante la naturaleza, el arte, la ciencia o un acto de bondad.',
            'En un estudio, personas mayores que hicieron paseos semanales buscando asombro sintieron más emociones positivas que quienes caminaban sin esa consigna (Sturm y colaboradores, 2022). El asombro achica el «yo» y acerca a los demás.',
          ],
        },
        {
          heading: 'Autotrascendencia, gratitud y pertenencia',
          paragraphs: [
            'Yaden y su equipo llaman autotrascendencia a los momentos en que se afloja la frontera del yo y uno se siente unido a algo más. Van desde el asombro y la gratitud hasta experiencias místicas (Yaden y colaboradores, 2017).',
            'No hacen falta grandes experiencias. Agradecer a quienes hicieron posible tu día, sentirte parte de una familia, un barrio o una comunidad, o estar en la naturaleza, son caminos de todos los días.',
          ],
        },
        {
          heading: 'Creencias que sostienen y creencias que pesan',
          paragraphs: [
            'Pargament estudió cómo las personas usan su fe en una crisis. Sentirse acompañado, buscar sentido o apoyarse en una comunidad suelen ayudar. Sentirse castigado o abandonado suele pesar (Pargament y colaboradores, 2000).',
            'Koenig revisó muchos estudios y encontró que, en promedio, la religión y la espiritualidad se asocian con más bienestar. Pero las luchas espirituales se asocian con más malestar (Koenig, 2012). Esto no habla de qué creencia es verdadera, sino de cómo se vive.',
          ],
        },
        {
          heading: 'Rituales y preguntas en la crisis',
          paragraphs: [
            'Los rituales dan forma a los cambios: empezar el día, despedir, recordar, celebrar. Se pueden tomar de una tradición o crear de cero. Lo importante es el sentido que tienen para ti.',
            'Las crisis traen preguntas grandes. Frankl pensaba que aun en el sufrimiento se puede encontrar un sentido, en una persona, una tarea o una actitud. Las prácticas de logoterapia de la app, como «¿Qué me pide la vida hoy?», ayudan a buscarlo.',
          ],
        },
        {
          heading: 'Valores y legado',
          paragraphs: [
            'Pensar en lo que quieres dejar en las personas y en el mundo une los valores con algo que va más allá de tu vida. El legado se construye hoy, con gestos pequeños.',
          ],
        },
      ],
      caveat: {
        title: 'Lo que la espiritualidad no hace',
        body: 'La investigación muestra asociaciones, no que una creencia cure. Ninguna práctica espiritual reemplaza un tratamiento médico o psicológico, y desconfía de quien prometa sanación. Si alguien usa la fe para presionarte, aislarte o pedirte dinero, eso no es cuidado. Si sientes desesperanza o tienes ideas de morir, llama al 135 (resto del país 0800-345-1435) o al 911.',
      },
      related: {
        practices: ['paseo-de-asombro', 'momentos-de-trascendencia', 'mi-ritual-con-sentido', 'creencias-que-sostienen', 'preguntas-en-la-crisis', 'mi-legado', 'que-me-pide-la-vida', 'tres-caminos-sentido'],
        articles: ['logoterapia', 'sentido-y-valores'],
      },
      references: [KELTNER_2003, STURM_2022, YADEN_2017, PARGAMENT_2000, KOENIG_2012, FRANKL_1946],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'espiritualidad-cotidiana',
      title: 'Espiritualidad cotidiana',
      subtitle: 'Cuatro semanas para cultivar asombro, conexión y sentido, con o sin religión',
      description:
        'Saldrás a buscar asombro, recordarás momentos en que te sentiste parte de algo más grande, crearás un ritual propio y pensarás en tu legado. No hace falta tener una religión, ni dejar la tuya. No reemplaza un tratamiento.',
      basis: 'Keltner y Haidt (2003); Sturm y colaboradores (2022); Yaden y colaboradores (2017); Frankl (1946/2015).',
      rhythm: '10 a 15 minutos, 3 o 4 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Asombro',
          focus: 'Mirar lo grande y lo pequeño',
          description: 'Leerás qué entendemos por espiritualidad y harás paseos de asombro.',
          practiceIds: ['paseo-de-asombro'],
          articleIds: ['espiritualidad-y-sentido'],
          journalType: 'saboreo',
        },
        {
          title: 'Semana 2 · Conexión',
          focus: 'Autotrascendencia, gratitud y pertenencia',
          description: 'Recordarás momentos en que te sentiste parte y practicarás la gratitud.',
          practiceIds: ['momentos-de-trascendencia', 'gratitud-contemplativa'],
          articleIds: [],
          journalType: 'tres-cosas',
        },
        {
          title: 'Semana 3 · Rituales',
          focus: 'Dar forma a lo que importa',
          description: 'Crearás un ritual simple y revisarás qué creencias te sostienen.',
          practiceIds: ['mi-ritual-con-sentido', 'creencias-que-sostienen'],
          articleIds: [],
          journalType: 'sentido',
        },
        {
          title: 'Semana 4 · Legado',
          focus: 'Valores que van más allá de ti',
          description: 'Pensarás en lo que quieres dejar y lo convertirás en un gesto de esta semana.',
          practiceIds: ['mi-legado', 'que-me-pide-la-vida'],
          articleIds: [],
          journalType: 'valores',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-que-es-espiritualidad',
      title: 'Algo más grande que tú',
      subtitle: 'Qué entendemos por espiritualidad.',
      slides: [
        { heading: 'Conexión', text: 'La espiritualidad es sentirte parte de algo más grande que tú. Dios, la naturaleza, la gente, la vida.' },
        { heading: 'Con o sin religión', text: 'Hay quien la vive en su fe y hay quien la vive sin religión. Las dos formas valen.' },
        { heading: 'Sentido', text: 'También incluye las preguntas grandes. ¿Para qué vivo? ¿Qué me importa de verdad?' },
        { heading: 'En lo cotidiano', text: 'Un atardecer, un abrazo, un coro, una tarde en familia. Ahí también aparece.' },
        { heading: 'Lo que no hace', text: 'La espiritualidad acompaña, pero no cura ni reemplaza un tratamiento. Desconfía de quien lo prometa.' },
      ],
      related: { practices: ['momentos-de-trascendencia'], articles: ['espiritualidad-y-sentido'] },
      references: [YADEN_2017, KOENIG_2012],
    },
    {
      id: 'pildora-asombro',
      title: 'Salir a buscar asombro',
      subtitle: 'El paseo de asombro.',
      slides: [
        { heading: 'El asombro', text: 'Es lo que sientes ante algo inmenso. El mar, el cielo de noche, una música, un acto de bondad.' },
        { heading: 'Te achica, y está bien', text: 'El asombro hace que tu yo se sienta más chico. Y eso te acerca a los demás.' },
        { heading: 'Un estudio', text: 'Personas mayores caminaron quince minutos por semana buscando asombro. Sintieron más emociones positivas.' },
        { heading: 'Cómo hacerlo', text: 'Sal a caminar sin apuro. Mira hacia arriba y mira lo pequeño. Pregúntate cómo llegó a existir.' },
        { heading: 'Cerca de casa', text: 'No hace falta viajar. Una plaza, un árbol o el cielo de tu barrio alcanzan.' },
      ],
      related: { practices: ['paseo-de-asombro'], articles: ['espiritualidad-y-sentido'] },
      references: [KELTNER_2003, STURM_2022],
    },
    {
      id: 'pildora-afrontamiento-espiritual',
      title: 'Cuando la fe sostiene y cuando pesa',
      subtitle: 'Creencias en los momentos difíciles.',
      slides: [
        { heading: 'En la crisis', text: 'En los momentos difíciles, muchas personas se apoyan en lo que creen.' },
        { heading: 'Lo que sostiene', text: 'Sentir compañía, buscar sentido o tener una comunidad suelen ayudar.' },
        { heading: 'Lo que pesa', text: 'Sentir castigo o abandono suele traer más malestar. Es muy humano y se puede hablar.' },
        { heading: 'Sin juzgar', text: 'No se trata de qué creencia es verdadera. Se trata de cómo te hace sentir.' },
        { heading: 'Pedir ayuda', text: 'Si sientes que no hay salida, llama al 135 o al 911. También puedes usar el botón Ayuda de la app.' },
      ],
      related: { practices: ['creencias-que-sostienen'], articles: ['espiritualidad-y-sentido'] },
      references: [PARGAMENT_2000, KOENIG_2012],
    },
    {
      id: 'pildora-rituales',
      title: 'Rituales que dan forma',
      subtitle: 'Cómo crear un ritual propio.',
      slides: [
        { heading: 'Todas las culturas', text: 'Todas las culturas tienen rituales. Para empezar el día, despedir, recordar o celebrar.' },
        { heading: 'Un antes y un después', text: 'Un ritual marca un cambio. Le da forma a lo que no se puede decir del todo.' },
        { heading: 'Simple', text: 'Encender una vela, tomar un mate en silencio, regar una planta. No hace falta más.' },
        { heading: 'Tuyo', text: 'Puedes tomarlo de tu tradición o crearlo de cero. Lo que importa es el sentido.' },
        { heading: 'Repetir', text: 'Un ritual chico que repites vale más que uno grande que no harás.' },
      ],
      related: { practices: ['mi-ritual-con-sentido', 'ritual-de-recuerdo'], articles: ['espiritualidad-y-sentido'] },
      references: [FRANKL_1946, KOENIG_2012],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'espiritualidad-sentido', term: 'Espiritualidad', definition: 'Búsqueda de conexión con algo más grande que uno, y de sentido. Puede vivirse dentro o fuera de una religión.', articleId: 'espiritualidad-y-sentido' },
    { id: 'asombro', term: 'Asombro', definition: 'Emoción ante algo inmenso que no entra del todo en lo que sabemos. Achica el foco en uno mismo y acerca a los demás.', practiceId: 'paseo-de-asombro' },
    { id: 'autotrascendencia', term: 'Autotrascendencia', definition: 'Momentos en que se afloja la frontera del yo y uno se siente unido a otros o al mundo, como en el asombro o la gratitud.', practiceId: 'momentos-de-trascendencia' },
    { id: 'afrontamiento-religioso', term: 'Afrontamiento religioso', definition: 'Cómo una persona usa su fe ante una dificultad. Puede sostener, como sentirse acompañado, o pesar, como sentirse castigado.', practiceId: 'creencias-que-sostienen' },
    { id: 'lucha-espiritual', term: 'Lucha espiritual', definition: 'Dudas, culpa o enojo con lo sagrado en un momento difícil. Es humana y frecuente, y se asocia con más malestar.', articleId: 'espiritualidad-y-sentido' },
  ],
};
