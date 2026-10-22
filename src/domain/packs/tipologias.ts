import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Tipologías»: eneagrama y preferencias junguianas como autoexploración, más las
 * ideas de Jung que faltaban en el paquete de Jung (persona como rol, anima y animus, self).
 *
 * Decisiones clínicas:
 *  - Ni el eneagrama ni el MBTI tienen validez empírica sólida: se dice en cada artículo y
 *    píldora, y se recomienda el modelo de los cinco grandes rasgos como marco más sólido.
 *  - Los cuestionarios del Laboratorio (/laboratorio/eneagrama y /laboratorio/preferencias)
 *    usan ítems originales; no se reproduce el RHETI, el Wagner ni el MBTI.
 *  - No hay prácticas ni programas nuevos: las tipologías enlazan con prácticas existentes.
 */

const RISO_HUDSON_1999: Reference = {
  citation: 'Riso, D. R., & Hudson, R. (1999). The wisdom of the Enneagram: The complete guide to psychological and spiritual growth for the nine personality types. Bantam.',
  note: 'Nombres de los tipos, miedos y deseos básicos, líneas y niveles de desarrollo.',
};
const NARANJO_1994: Reference = {
  citation: 'Naranjo, C. (1994). Character and neurosis: An integrative view. Gateways.',
  note: 'Relaciona los eneatipos con caracteres descritos por la psiquiatría y el psicoanálisis.',
};
const HOOK_2021: Reference = {
  citation:
    'Hook, J. N., Hall, T. W., Davis, D. E., Van Tongeren, D. R., & Conner, M. (2021). The Enneagram: A systematic review of the literature and directions for future research. Journal of Clinical Psychology, 77(4), 865–883.',
  note: 'Revisión sistemática: evidencia mixta y de calidad limitada.',
};
// Copiada exacta de packs/jung.ts.
const JUNG_TIPOS: Reference = { citation: 'Jung, C. G. (1921/1971). Psychological types (Collected Works, vol. 6). Princeton University Press.' };
const JUNG_AION: Reference = { citation: 'Jung, C. G. (1951/1959). Aion: Researches into the phenomenology of the self (Collected Works, vol. 9, parte 2). Princeton University Press.' };
const JUNG_DOS_ENSAYOS: Reference = {
  citation: 'Jung, C. G. (1928/1966). The relations between the ego and the unconscious. En Two essays on analytical psychology (Collected Works, vol. 7). Princeton University Press.',
};
const MYERS_1980: Reference = { citation: 'Myers, I. B., & Myers, P. B. (1980). Gifts differing. Consulting Psychologists Press.' };
const KEIRSEY_BATES_1978: Reference = { citation: 'Keirsey, D., & Bates, M. (1978). Please understand me: Character and temperament types. Prometheus Nemesis.' };
// Copiada exacta de packs/jung.ts.
const PITTENGER_2005: Reference = {
  citation: 'Pittenger, D. J. (2005). Cautionary comments regarding the Myers-Briggs Type Indicator. Consulting Psychology Journal: Practice and Research, 57(3), 210–221.',
  doi: '10.1037/1065-9293.57.3.210',
};
const MCCRAE_COSTA_1989: Reference = {
  citation:
    'McCrae, R. R., & Costa, P. T., Jr. (1989). Reinterpreting the Myers-Briggs Type Indicator from the perspective of the five-factor model of personality. Journal of Personality, 57(1), 17–40.',
  note: 'Las escalas del MBTI se relacionan con cuatro de los cinco grandes rasgos.',
};

export const TIPOLOGIAS_PACK: ContentPack = {
  id: 'tipologias',
  practices: [],
  meta: {},

  // ================================================================== artículos
  articles: [
    {
      id: 'eneagrama-que-es-y-que-no',
      title: 'Eneagrama: qué es y qué no',
      subtitle: 'De dónde viene, qué describen sus nueve figuras y por qué conviene usarlo como mapa y no como etiqueta.',
      category: 'Autoconocimiento y patrones',
      readingMin: 9,
      keyPoints: [
        'El eneagrama describe nueve estilos de personalidad organizados alrededor de un miedo y un deseo de fondo.',
        'Llegó a la psicología por Óscar Ichazo y Claudio Naranjo, y se popularizó con Don Riso y Russ Hudson.',
        'Los tipos se agrupan en tres tríadas: instintiva, emocional y mental.',
        'Las líneas describen cómo cambia cada estilo con el estrés y con el crecimiento.',
        'Tiene poca evidencia empírica: sirve para pensarse, no para diagnosticar ni para decidir sobre otras personas.',
      ],
      sections: [
        {
          heading: 'De dónde viene',
          paragraphs: [
            'El dibujo del eneagrama es un círculo con nueve puntos unidos por líneas. A comienzos del siglo XX lo difundió George Gurdjieff, pero todavía no como mapa de la personalidad.',
            'En los años sesenta, el boliviano Óscar Ichazo asoció cada punto a una fijación y a una pasión, una especie de hábito mental y emocional. El psiquiatra chileno Claudio Naranjo aprendió con él y conectó esos tipos con caracteres que describían la psiquiatría y el psicoanálisis (Naranjo, 1994).',
            'Después, Don Riso y Russ Hudson les dieron los nombres que hoy son más conocidos y describieron niveles de salud dentro de cada tipo (Riso y Hudson, 1999). Hay otras escuelas, y no siempre coinciden en los detalles.',
          ],
        },
        {
          heading: 'Las nueve figuras',
          paragraphs: [
            'Cada tipo se organiza alrededor de un miedo básico y de un deseo básico. El reformador (1) busca ser bueno y teme estar en falta. El ayudador (2) busca ser querido. El triunfador (3) busca sentirse valioso. El individualista (4) busca una identidad propia.',
            'El investigador (5) busca ser capaz y teme quedarse sin recursos. El leal (6) busca seguridad y apoyo. El entusiasta (7) busca satisfacción y evita el dolor. El desafiador (8) busca protegerse y no ser controlado. El pacificador (9) busca paz y evita el conflicto.',
            'Lo que define un tipo no son las conductas, sino la motivación que hay detrás. Dos personas pueden ayudar mucho por razones distintas: una para sentirse querida y otra para sentirse útil o segura.',
          ],
        },
        {
          heading: 'Las tríadas',
          paragraphs: [
            'Los nueve tipos se agrupan de a tres según su centro. En la tríada instintiva o del cuerpo (8, 9 y 1) el tema de fondo es el enojo y el control: el 8 lo expresa, el 9 lo adormece y el 1 lo corrige.',
            'En la tríada emocional o del corazón (2, 3 y 4) el tema es la imagen y el valor propio. En la tríada mental o de la cabeza (5, 6 y 7) el tema es el miedo y la búsqueda de seguridad u orientación.',
          ],
        },
        {
          heading: 'Las líneas y las alas',
          paragraphs: [
            'Las líneas del dibujo unen cada tipo con otros dos. Riso y Hudson describen una dirección de integración, hacia la que se va cuando hay calma y crecimiento, y una de desintegración, que aparece con el estrés.',
            'Por ejemplo, el reformador en calma toma algo del entusiasta: más juego y disfrute. Bajo estrés se acerca al individualista: más tristeza y queja. Además, se habla de alas: los dos tipos vecinos en el círculo, que dan matices a cada estilo.',
          ],
        },
        {
          heading: 'Cómo usarlo bien',
          paragraphs: [
            'Úsalo como una lista de preguntas: ¿qué me mueve?, ¿qué evito?, ¿qué me pasa cuando estoy bajo presión? Casi todas las personas se reconocen en varios tipos, y eso es esperable.',
            'Evita usarlo para explicar a otras personas o para decidir sobre ellas. Decir «es un 8, por eso es así» cierra la conversación. Lo útil es lo contrario: abrir una pregunta sobre ti.',
          ],
        },
      ],
      caveat: {
        title: 'Qué dice la evidencia',
        body: 'El eneagrama tiene poca investigación de calidad. Una revisión sistemática encontró resultados mixtos y estudios con limitaciones, y pidió más investigación antes de sacar conclusiones (Hook et al., 2021). Los cuestionarios de esta app son originales y no están validados. No lo uses para elegir pareja, contratar personas ni explicar problemas de salud mental.',
      },
      diagram: {
        title: 'Una de las líneas de integración',
        nodes: ['1 · El reformador', '7 · El entusiasta', '5 · El investigador', '8 · El desafiador', '2 · El ayudador', '4 · El individualista'],
        caption: 'Según Riso y Hudson, cada tipo crece hacia el siguiente de la flecha. En sentido contrario está la dirección del estrés. El 3, el 6 y el 9 forman su propio triángulo.',
      },
      related: { practices: ['empezar-imperfecto', 'necesidades-que-pido', 'comprobar-hechos', 'mas-alla-del-enojo'], articles: ['preferencias-junguianas-y-mbti', 'psicologia-de-jung'] },
      references: [RISO_HUDSON_1999, NARANJO_1994, HOOK_2021],
    },
    {
      id: 'preferencias-junguianas-y-mbti',
      title: 'Preferencias junguianas y MBTI: usos y límites',
      subtitle: 'Qué propuso Jung, qué agregó el MBTI, qué son los temperamentos y por qué los cinco grandes rasgos son un marco más sólido.',
      category: 'Autoconocimiento y patrones',
      readingMin: 10,
      keyPoints: [
        'Jung describió dos actitudes, introversión y extraversión, y cuatro funciones: sensación, intuición, pensamiento y sentimiento.',
        'Katharine Briggs e Isabel Briggs Myers convirtieron esas ideas en el MBTI y agregaron la escala de juicio y percepción.',
        'Los cuatro temperamentos son de Keirsey y Bates, no de Jung.',
        'Las categorías del MBTI tienen baja estabilidad al repetir el test y su validez es discutida.',
        'Para pensar la personalidad, los cinco grandes rasgos tienen mucha más evidencia.',
      ],
      sections: [
        {
          heading: 'Qué propuso Jung',
          paragraphs: [
            'En su libro sobre los tipos psicológicos, Jung describió dos actitudes. En la extraversión, la energía va hacia afuera. En la introversión, va hacia adentro (Jung, 1921/1971).',
            'También describió cuatro funciones. Dos son formas de percibir: la sensación, que registra lo concreto, y la intuición, que capta posibilidades. Dos son formas de juzgar: el pensamiento, que ordena con lógica, y el sentimiento, que evalúa según valores.',
            'Para Jung, cada persona tiene una función dominante y otra auxiliar. La menos desarrollada, la función inferior, suele aparecer torpe o intensa bajo presión. Él la veía como una puerta al crecimiento.',
          ],
        },
        {
          heading: 'Del libro de Jung al MBTI',
          paragraphs: [
            'Katharine Briggs y su hija, Isabel Briggs Myers, construyeron un cuestionario basado en estas ideas a partir de la década de 1940. Lo conocemos como MBTI.',
            'Agregaron una cuarta escala que Jung no usó como tal: juicio o percepción, es decir, si alguien prefiere cerrar y planificar o dejar opciones abiertas. Con cuatro escalas de dos polos salen 16 tipos (Myers y Myers, 1980).',
          ],
        },
        {
          heading: 'Las cuatro dicotomías',
          paragraphs: [
            'Extraversión o introversión: hacia dónde va la energía. Sensación o intuición: cómo se toma la información. Pensamiento o sentimiento: cómo se decide. Juicio o percepción: cómo se organiza la vida de afuera.',
            'Una preferencia es como la mano con la que escribes. Usas más una, pero tienes las dos. Nadie es sólo introvertido o sólo intuitivo.',
          ],
        },
        {
          heading: 'Los temperamentos',
          paragraphs: [
            'David Keirsey y Marilyn Bates agruparon los 16 tipos en cuatro temperamentos: NT, NF, SJ y SP (Keirsey y Bates, 1978). Se apoyaron en ideas antiguas sobre el temperamento, no en Jung.',
            'Pueden servir para conversar sobre diferencias de estilo en una pareja o un equipo. Tienen los mismos límites que los tipos en los que se basan.',
          ],
        },
        {
          heading: 'Las críticas',
          paragraphs: [
            'La crítica principal es la estabilidad. Muchas personas obtienen otro tipo al repetir el test unas semanas después. Pasa sobre todo cuando sus puntajes están cerca del medio, que es donde está la mayoría (Pittenger, 2005).',
            'El problema de fondo es partir en dos algo continuo. Alguien apenas por encima del medio recibe la misma letra que alguien en el extremo. Además, la validez del MBTI para predecir conductas o el éxito en el trabajo es discutida, y no se recomienda para seleccionar personal.',
          ],
        },
        {
          heading: 'Un marco más sólido: los cinco grandes',
          paragraphs: [
            'La psicología de la personalidad usa sobre todo el modelo de los cinco grandes rasgos: apertura a la experiencia, responsabilidad, extraversión, amabilidad y neuroticismo, o su opuesto, la estabilidad emocional.',
            'Son dimensiones, no casilleros: cada persona está en algún punto de cada una. Las escalas del MBTI se parecen a cuatro de esos rasgos, pero dejan afuera la estabilidad emocional (McCrae y Costa, 1989). Si quieres conocerte con más rigor, este modelo tiene mucha más evidencia.',
          ],
        },
      ],
      caveat: {
        title: 'Para qué sí y para qué no',
        body: 'Las preferencias junguianas pueden ser un buen punto de partida para conversar sobre diferencias de estilo. No sirven para diagnosticar, elegir carrera, contratar personas ni explicar por qué alguien sufre. El cuestionario de esta app es original, inspirado en Jung, y no está validado.',
      },
      related: { practices: ['mis-funciones-psicologicas', 'persona-y-sombra'], articles: ['psicologia-de-jung', 'eneagrama-que-es-y-que-no'] },
      references: [JUNG_TIPOS, MYERS_1980, KEIRSEY_BATES_1978, PITTENGER_2005, MCCRAE_COSTA_1989],
    },
  ],

  programs: [],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-eneagrama-mapa',
      title: 'Nueve formas de cuidarse',
      subtitle: 'Qué describe el eneagrama y qué no.',
      slides: [
        { heading: 'Un mapa', text: 'El eneagrama describe nueve estilos de personalidad. Cada uno es una forma de protegerse y de buscar lo que necesita.' },
        { heading: 'Lo de fondo', text: 'Cada estilo tiene un miedo y un deseo de fondo. Uno quiere ser bueno. Otro quiere ser querido. Otro busca seguridad.' },
        { heading: 'No es la conducta', text: 'Dos personas pueden hacer lo mismo por razones distintas. Lo que cuenta es el motivo, no la conducta.' },
        { heading: 'Varios a la vez', text: 'Casi todas las personas se ven en varios estilos. Es normal. No hace falta elegir uno.' },
        { heading: 'Poca evidencia', text: 'Hay poca investigación sólida sobre el eneagrama. Úsalo para hacerte preguntas, no para ponerte una etiqueta.' },
      ],
      related: { practices: ['brujula-valores'], articles: ['eneagrama-que-es-y-que-no'] },
      references: [RISO_HUDSON_1999, HOOK_2021],
    },
    {
      id: 'pildora-eneagrama-triadas',
      title: 'Cuerpo, corazón y cabeza',
      subtitle: 'Las tres tríadas del eneagrama.',
      slides: [
        { heading: 'Tres grupos', text: 'Los nueve estilos se agrupan de a tres. Cada grupo comparte un tema de fondo.' },
        { heading: 'El cuerpo', text: 'En el grupo del cuerpo están el 8, el 9 y el 1. El tema es el enojo. Uno lo muestra, otro lo duerme y otro lo corrige.' },
        { heading: 'El corazón', text: 'En el grupo del corazón están el 2, el 3 y el 4. El tema es la imagen. ¿Valgo? ¿Me quieren? ¿Quién soy?' },
        { heading: 'La cabeza', text: 'En el grupo de la cabeza están el 5, el 6 y el 7. El tema es el miedo. Uno se aleja, otro se prepara y otro se distrae.' },
        { heading: 'Una pregunta', text: 'Prueba preguntarte: ¿qué me mueve más, el enojo, la imagen o el miedo? La respuesta puede cambiar según el día.' },
      ],
      related: { practices: ['mas-alla-del-enojo', 'comprobar-hechos'], articles: ['eneagrama-que-es-y-que-no'] },
      references: [RISO_HUDSON_1999, NARANJO_1994],
    },
    {
      id: 'pildora-eneagrama-lineas',
      title: 'Con estrés y con calma',
      subtitle: 'Las líneas del eneagrama.',
      slides: [
        { heading: 'Las flechas', text: 'En el dibujo, cada estilo se une con otros dos. Son las líneas.' },
        { heading: 'Con calma', text: 'Cuando hay calma, tomamos algo bueno de otro estilo. Quien siempre corrige puede jugar más. Quien siempre ayuda puede escucharse.' },
        { heading: 'Con estrés', text: 'Bajo estrés aparece lo menos sano de otro estilo. Quien busca la paz puede llenarse de dudas.' },
        { heading: 'Una señal', text: 'Notar el cambio sirve como alarma. Si de pronto te ves distinto de lo habitual, quizá estás con mucha presión.' },
        { heading: 'Qué hacer', text: 'No hace falta saber tu número. Basta con preguntarte qué te pasa con presión y qué te ayuda a volver.' },
      ],
      related: { practices: ['comprobar-hechos', 'saboreo'], articles: ['eneagrama-que-es-y-que-no'] },
      references: [RISO_HUDSON_1999],
    },
    {
      id: 'pildora-preferencias',
      title: 'Preferir no es ser',
      subtitle: 'Las preferencias de Jung, sin casilleros.',
      slides: [
        { heading: 'Dos actitudes', text: 'Jung habló de extraversión e introversión. Es hacia dónde va tu energía: afuera o adentro.' },
        { heading: 'Cuatro funciones', text: 'También habló de cuatro funciones. Sensación e intuición sirven para percibir. Pensamiento y sentimiento sirven para decidir.' },
        { heading: 'Como la mano', text: 'Una preferencia es como la mano con la que escribes. Usas más una, pero tienes las dos.' },
        { heading: 'Lo que usas menos', text: 'Jung pensaba que lo que menos usas también es una puerta. Probarlo de a poco te da más recursos.' },
        { heading: 'Una agregada', text: 'La escala de juicio y percepción no es de Jung. La agregaron Briggs y Myers para armar el MBTI.' },
      ],
      related: { practices: ['mis-funciones-psicologicas'], articles: ['preferencias-junguianas-y-mbti'] },
      references: [JUNG_TIPOS, MYERS_1980],
    },
    {
      id: 'pildora-tipos-o-rasgos',
      title: '¿Tipos o rasgos?',
      subtitle: 'Por qué el MBTI tiene límites y qué usar en su lugar.',
      slides: [
        { heading: 'Muy popular', text: 'El MBTI se inspiró en Jung y lo usan millones de personas. Es fácil de entender y da una etiqueta de cuatro letras.' },
        { heading: 'Cambia mucho', text: 'Mucha gente obtiene otro tipo al repetir el test. Pasa más cuando los puntajes están cerca del medio.' },
        { heading: 'Partir en dos', text: 'Casi todas las personas están cerca del medio en cada escala. Partirlas en dos grupos exagera las diferencias.' },
        { heading: 'Cinco grandes', text: 'La psicología usa más el modelo de los cinco grandes rasgos. Son dimensiones, no casilleros, y tienen mucha más evidencia.' },
        { heading: 'Para qué sí', text: 'Las preferencias sirven para conversar sobre estilos. No sirven para elegir carrera ni para contratar a nadie.' },
      ],
      related: { practices: ['mis-funciones-psicologicas'], articles: ['preferencias-junguianas-y-mbti'] },
      references: [PITTENGER_2005, MCCRAE_COSTA_1989],
    },
    {
      id: 'pildora-persona',
      title: 'Tus roles no son todo',
      subtitle: 'La persona de Jung: útil, pero no es todo lo que eres.',
      slides: [
        { heading: 'Muchos roles', text: 'En el trabajo eres de una forma. Con tu familia, de otra. Con tus amistades, de otra. Eso es normal.' },
        { heading: 'La persona', text: 'Jung llamó persona a esa cara que mostramos para adaptarnos. Viene de la máscara de los actores.' },
        { heading: 'Es útil', text: 'La persona no es falsa. Nos ayuda a convivir y a cumplir lo que nos toca.' },
        { heading: 'El riesgo', text: 'El problema es quedar pegado a un rol. Si eres sólo «la que siempre puede» o «el fuerte», el resto se apaga.' },
        { heading: 'Una prueba', text: 'Pregúntate: ¿quién soy cuando nadie espera nada de mí? Esa respuesta también eres tú.' },
      ],
      related: { practices: ['persona-y-sombra'], articles: ['psicologia-de-jung'] },
      references: [JUNG_DOS_ENSAYOS],
    },
    {
      id: 'pildora-anima-animus',
      title: 'Anima y animus',
      subtitle: 'Una idea de Jung, leída hoy.',
      slides: [
        { heading: 'La idea', text: 'Jung pensaba que cada persona lleva adentro una imagen del otro género. En los varones la llamó anima. En las mujeres, animus.' },
        { heading: 'Dónde aparece', text: 'Según Jung, esa imagen aparece en los sueños, en los enamoramientos intensos y en lo que idealizamos.' },
        { heading: 'Una crítica', text: 'Hoy se critica esta idea. Divide el mundo en dos géneros y usa estereotipos de su época.' },
        { heading: 'Una lectura actual', text: 'Se puede leer de otra forma. Son las cualidades que aprendiste que no eran para ti, como la ternura o la firmeza.' },
        { heading: 'Una pregunta', text: '¿Qué cualidad te enseñaron que no era para alguien como tú? ¿Qué pasaría si le dieras un poco de lugar?' },
      ],
      related: { practices: ['persona-y-sombra'], articles: ['psicologia-de-jung'] },
      references: [JUNG_AION],
    },
    {
      id: 'pildora-self',
      title: 'Más grande que el yo',
      subtitle: 'El self en la psicología de Jung.',
      slides: [
        { heading: 'El yo', text: 'Para Jung, el yo es la parte de la que te das cuenta. Es quien decide y dice «yo».' },
        { heading: 'El self', text: 'Jung llamó self a algo más amplio. Es la psique entera, con lo que sabes y con lo que no sabes de ti.' },
        { heading: 'Un centro', text: 'Pensaba que el self ordena la vida desde el fondo. A veces se expresa en sueños o en imágenes de círculos.' },
        { heading: 'El camino', text: 'La individuación sería acercar el yo al self. Es volverse más completo, no más perfecto.' },
        { heading: 'Con cuidado', text: 'Es una idea para pensar, no un dato comprobado. Tómala como una pregunta: ¿qué parte de mí todavía no conozco?' },
      ],
      related: { practices: ['la-segunda-mitad-de-la-vida'], articles: ['psicologia-de-jung'] },
      references: [JUNG_AION],
    },
  ],

  // ================================================================== glosario
  glossary: [
    {
      id: 'eneatipo',
      term: 'Eneatipo',
      definition: 'En el eneagrama, cada uno de los nueve estilos de personalidad. Es un mapa para pensarse, con poca evidencia empírica, y no un diagnóstico.',
      articleId: 'eneagrama-que-es-y-que-no',
      seeAlso: { href: '/laboratorio/eneagrama', label: 'Explorar el eneagrama' },
    },
    {
      id: 'fijacion-eneagrama',
      term: 'Fijación (eneagrama)',
      definition: 'Según Ichazo y Naranjo, el hábito mental típico de cada eneatipo, como el resentimiento o la duda. Va junto con una pasión, su hábito emocional.',
      articleId: 'eneagrama-que-es-y-que-no',
    },
    {
      id: 'triada-eneagrama',
      term: 'Tríada (eneagrama)',
      definition: 'Grupo de tres eneatipos que comparten un centro: el instintivo (8, 9 y 1), el emocional (2, 3 y 4) o el mental (5, 6 y 7).',
      articleId: 'eneagrama-que-es-y-que-no',
    },
    {
      id: 'anima-y-animus',
      term: 'Anima y animus',
      definition: 'Para Jung, la imagen interior del otro género. Hoy se critica su mirada binaria y se lee como las cualidades que aprendimos que no eran para nosotros.',
      articleId: 'psicologia-de-jung',
      practiceId: 'persona-y-sombra',
    },
    {
      id: 'self-junguiano',
      term: 'Self (Jung)',
      definition: 'Para Jung, el centro de la psique entera, consciente e inconsciente, más amplio que el yo. Acercarse a él es la meta de la individuación.',
      articleId: 'psicologia-de-jung',
      practiceId: 'la-segunda-mitad-de-la-vida',
    },
  ],
};
