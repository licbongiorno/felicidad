import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Adolescentes: habilidades con otros» (para familias):
 *  - cuando a un hijo o hija adolescente le cuesta hacer amigos (Rubin, Bukowski y Parker;
 *    el programa PEERS de Laugeson y Frankel);
 *  - la presión del grupo y cómo acompañar sin controlar (Steinberg y Monahan; Gardner y
 *    Steinberg; Stattin y Kerr);
 *  - el aprendizaje socioemocional en la escuela (Durlak y colaboradores).
 *
 * Las actividades para adolescentes viven en kids.ts (camino «Habilidades con otros»):
 * charla-que-fluye, entrar-a-un-grupo, limite-sin-perder-al-amigo, no-a-la-presion-del-grupo,
 * reparar-con-un-amigo, antes-de-mandar, amigo-que-esta-mal y misiones-con-otros.
 *
 * Lo que ya existe y aquí sólo se enlaza: «Acompañar en la adolescencia» y «Timidez y ansiedad
 * social» (guías), el paquete de acoso escolar y ciberacoso, el de ansiedad social y la CNV
 * con hijos.
 *
 * Seguridad: si hay acoso, autolesiones, ideas de muerte, abuso o fotos íntimas difundidas,
 * se pide ayuda adulta ese mismo día: Línea 102, 135 (resto del país 0800-345-1435), 911 y el
 * botón Ayuda. Nunca se propone revisar a escondidas el celular ni enfrentar a otros chicos.
 */

const LAUGESON_FRANKEL_2010: Reference = {
  citation: 'Laugeson, E. A., & Frankel, F. (2010). Social skills for teenagers with developmental and autism spectrum disorders: The PEERS treatment manual. Routledge.',
  note: 'PEERS se estudió sobre todo con adolescentes en el espectro autista.',
};
const STEINBERG_MONAHAN_2007: Reference = {
  citation: 'Steinberg, L., & Monahan, K. C. (2007). Age differences in resistance to peer influence. Developmental Psychology, 43(6), 1531–1543.',
};
const GARDNER_STEINBERG_2005: Reference = {
  citation:
    'Gardner, M., & Steinberg, L. (2005). Peer influence on risk taking, risk preference, and risky decision making in adolescence and adulthood: An experimental study. Developmental Psychology, 41(4), 625–635.',
};
const DURLAK_2011: Reference = {
  citation:
    'Durlak, J. A., Weissberg, R. P., Dymnicki, A. B., Taylor, R. D., & Schellinger, K. B. (2011). The impact of enhancing students’ social and emotional learning: A meta-analysis of school-based universal interventions. Child Development, 82(1), 405–432.',
};
const RUBIN_2006: Reference = {
  citation:
    'Rubin, K. H., Bukowski, W. M., & Parker, J. G. (2006). Peer interactions, relationships, and groups. En N. Eisenberg (Ed.), Handbook of child psychology: Vol. 3. Social, emotional, and personality development (6.ª ed.). Wiley.',
};
const STATTIN_KERR_2000: Reference = {
  citation: 'Stattin, H., & Kerr, M. (2000). Parental monitoring: A reinterpretation. Child Development, 71(4), 1072–1085.',
};

/** Aviso común: cuándo no hay que esperar. */
const URGENTE =
  'Si tu hijo o hija habla de morir, se lastima, sufre acoso o abuso, o si circulan fotos íntimas suyas, no esperes. Llama al 911 si hay peligro. También puedes llamar a la Línea 102 o al 135 (resto del país, 0800-345-1435), o usar el botón Ayuda de la app.';

export const ADOLESCENTES_SOCIAL_PACK: ContentPack = {
  id: 'adolescentes-social',
  practices: [],
  meta: {},
  programs: [],

  // ================================================================== artículo
  articles: [
    {
      id: 'habilidades-sociales-adolescencia',
      title: 'Habilidades sociales en la adolescencia',
      subtitle: 'Por qué los amigos pesan tanto a esta edad, qué habilidades se pueden aprender y cómo acompañar desde casa sin invadir.',
      category: 'Etapas de la vida',
      readingMin: 7,
      keyPoints: [
        'En la adolescencia los amigos pasan a ser una fuente central de apoyo. Es parte del desarrollo, no un rechazo a la familia.',
        'Charlar, sumarse a un grupo, poner límites y reparar son habilidades: se aprenden con práctica.',
        'Con amigos cerca, los adolescentes se arriesgan más. La capacidad de resistir esa presión crece con la edad.',
        'Saber qué le pasa a tu hijo depende más de que te cuente que de vigilar.',
        'Acoso, aislamiento fuerte, autolesiones o ideas de muerte piden ayuda profesional y no pueden esperar.',
      ],
      sections: [
        {
          heading: 'Por qué los amigos importan tanto',
          paragraphs: [
            'En la adolescencia el mundo social se agranda. Los amigos pasan más tiempo juntos, se cuentan más cosas y se vuelven una fuente central de apoyo. Las amistades de buena calidad se asocian con más bienestar. El rechazo y el aislamiento, con más malestar (Rubin y colaboradores, 2006).',
            'Que tu hijo o hija prefiera a sus amigos no quiere decir que la familia deje de importar. Sigue siendo una base segura. Lo que cambia es la forma: menos control directo y más charla.',
          ],
        },
        {
          heading: 'Habilidades que se aprenden',
          paragraphs: [
            'Hacer amigos parece algo que «sale solo», pero tiene partes que se pueden enseñar. El programa PEERS, creado por Elizabeth Laugeson y Fred Frankel, enseña a adolescentes y a sus padres pasos concretos (Laugeson y Frankel, 2010). Por ejemplo, intercambiar información para encontrar gustos en común, sumarse a una charla de grupo y organizar encuentros alrededor de una actividad.',
            'PEERS se estudió sobre todo con adolescentes en el espectro autista. Sus pasos se usan también con otros adolescentes, pero ahí hay menos estudios. Lo que sí tiene buena evidencia general es el aprendizaje socioemocional en la escuela. Un metaanálisis de más de doscientos programas encontró mejoras en las habilidades sociales, la conducta y el rendimiento escolar (Durlak y colaboradores, 2011).',
            'En la sección para chicos, la franja de 13 a 17 años tiene un camino con estas habilidades: empezar una charla, sumarse a un grupo, poner un límite a un amigo, reparar después de una pelea, decir que no al grupo, pensar antes de mandar y cuidar a un amigo que está mal.',
          ],
        },
        {
          heading: 'La presión del grupo',
          paragraphs: [
            'En un experimento clásico, adolescentes y adultos jugaban a un videojuego de manejo. Los adolescentes se arriesgaban mucho más cuando había amigos mirando. En los adultos, la presencia de amigos casi no cambiaba nada (Gardner y Steinberg, 2005).',
            'Otro estudio, con miles de chicos y jóvenes, mostró que la capacidad de resistir la influencia de los pares crece a lo largo de la adolescencia, sobre todo entre los 14 y los 18 años (Steinberg y Monahan, 2007). Es decir: no es falta de valores. Es una capacidad que todavía se está formando.',
            'Por eso ayuda más preparar que sermonear. Pensar antes cuál es el propio límite, tener una frase corta para decir que no y un plan para irse si hace falta.',
          ],
        },
        {
          heading: 'Acompañar sin controlar',
          paragraphs: [
            'Durante años se pensó que los padres sabían lo que hacían sus hijos porque los vigilaban. Håkan Stattin y Margaret Kerr revisaron esa idea. Encontraron que lo que más explica que los padres sepan es que los hijos les cuenten por su cuenta (Stattin y Kerr, 2000). Y los hijos cuentan más cuando no temen una reacción dura.',
            'Esto no quiere decir que no haya reglas. Los acuerdos sobre horarios, salidas y seguridad siguen siendo necesarios. Pero revisar el celular a escondidas o castigar cada confesión suele cerrar la puerta. Escuchar primero, agradecer que te contó y recién después hablar de lo que hay que cambiar la mantiene abierta.',
          ],
        },
        {
          heading: 'Cuándo consultar',
          paragraphs: [
            'Consulta con un profesional si tu hijo o hija no tiene ningún amigo desde hace mucho y lo sufre, si evita la escuela o las salidas por miedo a quedar mal, o si la tristeza dura semanas. Si hay burlas o exclusión que se repiten, puede ser acoso: lee el artículo sobre acoso escolar y habla con la escuela.',
            'Si habla de morir, se lastima, sufre abuso o circulan fotos íntimas suyas, no esperes. Llama al 911 si hay peligro, a la Línea 102 o al 135 (resto del país, 0800-345-1435). También está el botón Ayuda de la app.',
          ],
        },
      ],
      caveat: {
        title: 'Qué dice y qué no dice la evidencia',
        body: 'El aprendizaje socioemocional en la escuela tiene buena evidencia. Los pasos de PEERS vienen de un programa estudiado sobre todo en adolescentes en el espectro autista, y las actividades de esta app son adaptaciones breves, sin estudios propios. No reemplazan una consulta si hay ansiedad social fuerte, depresión, acoso o riesgo. ' + URGENTE,
      },
      related: { practices: ['cnv-escucha-empatica', 'preparar-la-charla-con-mi-hijo'], articles: ['acoso-escolar-y-ciberacoso', 'por-que-persiste-la-ansiedad-social'] },
      references: [RUBIN_2006, LAUGESON_FRANKEL_2010, DURLAK_2011, GARDNER_STEINBERG_2005, STEINBERG_MONAHAN_2007, STATTIN_KERR_2000],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-hacer-amigos-adolescencia',
      title: 'Hacer amigos se aprende',
      subtitle: 'Cuando a tu hijo adolescente le cuesta.',
      slides: [
        { heading: 'No sale solo', text: 'Hacer amigos parece natural, pero tiene partes que se aprenden. Empezar una charla, sumarse a un grupo, proponer un plan.' },
        { heading: 'Gustos en común', text: 'Las amistades suelen nacer de algo compartido. Un club, un taller, un deporte o un juego.' },
        { heading: 'Lo que no ayuda', text: 'Forzar, comparar con hermanos o hablar por tu hijo. Alivia un rato, pero le quita práctica.' },
        { heading: 'Lo que sí ayuda', text: 'Ensayar una charla en casa si quiere. Y abrir la casa para que invite a alguien a hacer algo concreto.' },
        { heading: 'Cuándo consultar', text: 'Si no tiene amigos desde hace mucho y lo sufre, o si hay burlas que se repiten, habla con la escuela y con un profesional.' },
        { heading: 'Pruébalo', text: 'Pregúntale qué le gusta hacer. Busquen juntos un lugar donde haya otros chicos con ese gusto.' },
      ],
      related: { articles: ['habilidades-sociales-adolescencia'] },
      references: [LAUGESON_FRANKEL_2010, RUBIN_2006],
    },
    {
      id: 'pildora-presion-del-grupo',
      title: 'La presión del grupo',
      subtitle: 'Preparar en lugar de sermonear.',
      slides: [
        { heading: 'Con amigos cerca', text: 'Los adolescentes se arriesgan más cuando los miran sus amigos. En los adultos ese efecto casi no aparece.' },
        { heading: 'Algo que crece', text: 'La capacidad de resistir la presión del grupo crece a lo largo de la adolescencia. No es falta de valores.' },
        { heading: 'Un no corto', text: '«No, gracias. Hoy no.» Una frase corta, pensada antes, es más fácil de decir en el momento.' },
        { heading: 'Una salida', text: 'Acuerden una palabra clave. Si te la escribe, le pasas a buscar sin preguntas. Hablan después, con calma.' },
        { heading: 'Si hay fotos o amenazas', text: 'Si circulan fotos íntimas o hay amenazas, guarden las pruebas y pidan ayuda. Llamen a la Línea 102 o al 911 si hay peligro.' },
        { heading: 'Pruébalo', text: 'Esta semana, pregúntale qué haría si le insisten con algo. Escucha su idea antes de dar la tuya.' },
      ],
      related: { articles: ['habilidades-sociales-adolescencia', 'acoso-escolar-y-ciberacoso'] },
      references: [GARDNER_STEINBERG_2005, STEINBERG_MONAHAN_2007],
    },
    {
      id: 'pildora-amigo-que-esta-mal',
      title: 'Secretos que no se guardan',
      subtitle: 'Cuando tu hijo cuida a un amigo que está mal.',
      slides: [
        { heading: 'Primero le cuentan a un amigo', text: 'Cuando un adolescente está mal, a veces se lo cuenta primero a un amigo. Tu hijo puede ser ese amigo.' },
        { heading: 'Escuchar ayuda', text: 'Escuchar sin juzgar ya hace mucho. No hace falta tener la solución.' },
        { heading: 'Secretos que no se guardan', text: 'Si el amigo habla de morir, se lastima o alguien le hace daño, hay que contarle a un adulto ese mismo día.' },
        { heading: 'No es traicionar', text: 'Ayúdale a ver que contarlo es cuidar. Y que es demasiado peso para cargarlo sin ayuda.' },
        { heading: 'A quién llamar', text: 'Si hay peligro, llamen al 911. También están la Línea 102, el 135 (resto del país, 0800-345-1435) y el botón Ayuda.' },
        { heading: 'Pruébalo', text: 'Dile hoy: «Si un amigo tuyo está muy mal, puedes contarme. No te voy a retar».' },
      ],
      related: { articles: ['habilidades-sociales-adolescencia'] },
      references: [STATTIN_KERR_2000],
    },
  ],

  // ================================================================== guías para familias
  kidGuides: [
    {
      id: 'cuando-le-cuesta-hacer-amigos',
      title: 'Cuando a tu hijo o hija le cuesta hacer amigos',
      subtitle: 'Acompañar sin forzar: gustos en común, práctica en casa y cuándo pedir ayuda.',
      readingMin: 6,
      keyPoints: [
        'Hacer amigos tiene partes que se aprenden: charlar, sumarse a un grupo, proponer un plan.',
        'Las amistades nacen de algo compartido. Busquen lugares con gustos en común.',
        'Forzar, comparar o hablar por tu hijo suele empeorar las cosas.',
        'Si no tiene amigos desde hace mucho y lo sufre, o hay burlas que se repiten, consulta.',
      ],
      sections: [
        {
          heading: 'Es común y tiene arreglo',
          paragraphs: [
            'A muchos chicos les cuesta hacer amigos en algún momento. Pasa al cambiar de escuela, después de una mudanza o al empezar la secundaria. También pasa a chicos más tímidos o con otros gustos que la mayoría.',
            'En la adolescencia los amigos pesan mucho. Tener al menos una buena amistad protege el ánimo. Sentirse solo o rechazado, en cambio, duele y se asocia con más malestar (Rubin y colaboradores, 2006). Por eso vale la pena acompañar.',
          ],
        },
        {
          heading: 'Habilidades que se aprenden',
          paragraphs: [
            'Hacer amigos parece algo que sale solo, pero no es así para todos. El programa PEERS enseña pasos concretos a adolescentes y a sus padres (Laugeson y Frankel, 2010). Por ejemplo, hacer preguntas para encontrar gustos en común. O, para sumarse a un grupo, primero mirar y escuchar, y después decir algo sobre el mismo tema.',
            'Si quiere, ensayen en casa. Una charla corta sobre algo que le guste, con preguntas de ida y vuelta. Que no parezca un examen: mejor en el auto, cocinando o caminando.',
          ],
        },
        {
          heading: 'Gustos en común',
          paragraphs: [
            'Las amistades suelen nacer de algo compartido. Un club, un deporte, un taller de música, un grupo de juegos o un voluntariado. Pregúntale qué le gusta y busquen juntos dónde hay otros chicos con ese gusto.',
            'Ofrece tu casa para que invite a alguien. Funciona mejor si hay algo para hacer juntos, como cocinar o jugar a algo, y si el encuentro es corto al principio.',
          ],
        },
        {
          heading: 'Lo que no ayuda',
          paragraphs: [
            'Forzar a ir a un cumpleaños, comparar con un hermano o decir delante de otros que «es tímido» suele aumentar la vergüenza. Hablar por tu hijo o resolverle cada situación alivia un rato, pero le quita práctica.',
            'Tampoco ayuda preguntar todos los días «¿hiciste amigos?». Mejor interésate por lo que hizo y por cómo se sintió. Y respeta que algunos chicos están bien con pocos amigos.',
          ],
        },
        {
          heading: 'Cuándo consultar',
          paragraphs: [
            'Consulta si no tiene ningún amigo desde hace mucho y lo sufre, si evita la escuela por miedo a quedar mal o si la tristeza dura semanas. Si hay burlas o exclusión que se repiten, puede ser acoso: habla con la escuela y mira la guía sobre acoso.',
            'Si habla de morir, se lastima o sufre abuso, no esperes. Llama al 911 si hay peligro, a la Línea 102 o al 135 (resto del país, 0800-345-1435). También está el botón Ayuda de la app.',
          ],
        },
      ],
      phrases: [
        '«¿Qué te gustaría hacer si tuvieras con quién?»',
        '«No hace falta tener muchos amigos. Con uno bueno alcanza para empezar»',
        '«Si quieres, invitamos a alguien a casa a hacer algo que te guste»',
        '«Cuéntame cómo te fue, no importa si salió bien»',
      ],
      caveat: {
        title: 'Si hay acoso o riesgo',
        body: URGENTE,
      },
      activities: ['charla-que-fluye', 'entrar-a-un-grupo', 'misiones-con-otros', 'amigos-que-suman', 'cuando-me-dejan-afuera'],
      references: [RUBIN_2006, LAUGESON_FRANKEL_2010, DURLAK_2011],
    },
    {
      id: 'presion-del-grupo-acompanar',
      title: 'Presión del grupo: acompañar sin controlar',
      subtitle: 'Alcohol, retos y fotos: preparar a tu hijo o hija en lugar de vigilar.',
      readingMin: 6,
      keyPoints: [
        'Con amigos cerca, los adolescentes se arriesgan más. Es parte del desarrollo, no falta de valores.',
        'Ayuda más preparar un no y una salida que dar un sermón.',
        'Sabes más de su vida cuando te cuenta que cuando vigilas.',
        'Fotos íntimas difundidas, amenazas o riesgo físico piden ayuda ese mismo día.',
      ],
      sections: [
        {
          heading: 'Por qué el grupo pesa tanto',
          paragraphs: [
            'En un experimento, adolescentes y adultos jugaban a un juego de manejo. Los adolescentes se arriesgaban mucho más cuando había amigos mirando. En los adultos, casi no cambiaba (Gardner y Steinberg, 2005).',
            'La capacidad de resistir la presión del grupo crece a lo largo de la adolescencia (Steinberg y Monahan, 2007). Es decir: tu hijo o hija todavía la está formando. No es que no tenga valores.',
          ],
        },
        {
          heading: 'Preparar en lugar de sermonear',
          paragraphs: [
            'En un momento tranquilo, pregúntale qué haría si le insisten con algo. Por ejemplo, tomar alcohol, hacer un reto peligroso o mandar una foto. Escucha su idea antes de dar la tuya.',
            'Ayúdale a tener una frase corta: «No, gracias. Hoy no». Pensada antes, es más fácil de decir. También sirve tener un amigo que le apoye o una excusa lista.',
          ],
        },
        {
          heading: 'Una salida sin preguntas',
          paragraphs: [
            'Acuerden una palabra clave. Si te la manda, le pasas a buscar sin preguntas en ese momento. Las preguntas quedan para el día siguiente, con calma.',
            'Si cada vez que pide ayuda recibe un reto fuerte, la próxima vez no te va a escribir. Lo primero es que esté a salvo.',
          ],
        },
        {
          heading: 'Acompañar sin controlar',
          paragraphs: [
            'Durante años se pensó que los padres sabían lo que hacían sus hijos porque los vigilaban. Un estudio mostró que lo que más ayuda a saber es que los hijos cuenten por su cuenta (Stattin y Kerr, 2000). Y cuentan más cuando no temen una reacción dura.',
            'Las reglas siguen siendo necesarias: horarios, salidas y seguridad. Pero revisar el celular a escondidas suele romper la confianza. Mejor hablen de casos concretos: «¿Qué harías si alguien sube una foto tuya sin permiso?».',
          ],
        },
        {
          heading: 'Cuándo es urgente',
          paragraphs: [
            'Si circulan fotos íntimas de tu hijo o hija, si le amenazan o le piden plata para no publicarlas, no lo resuelvan solos. Guarden las pruebas, no paguen ni respondan y pidan ayuda. Llamen a la Línea 102 y, si hay peligro, al 911.',
            'Si se lastima, habla de morir o sufre abuso, llama al 911 si hay peligro, a la Línea 102 o al 135 (resto del país, 0800-345-1435). También está el botón Ayuda de la app.',
          ],
        },
      ],
      phrases: [
        '«¿Qué harías si te insisten con algo que no quieres?»',
        '«Si me mandas la palabra, te busco y no pregunto nada hasta mañana»',
        '«Te pregunto porque me importas, no para controlarte»',
        '«Gracias por contarme. Ahora pensemos juntos qué hacer»',
      ],
      caveat: {
        title: 'Si hay fotos, amenazas o riesgo',
        body: URGENTE,
      },
      activities: ['no-a-la-presion-del-grupo', 'antes-de-mandar', 'pedir-y-decir-que-no', 'limite-sin-perder-al-amigo', 'amigo-que-esta-mal', 'pedir-ayuda'],
      references: [GARDNER_STEINBERG_2005, STEINBERG_MONAHAN_2007, STATTIN_KERR_2000],
    },
  ],

  // ================================================================== glosario
  glossary: [
    {
      id: 'presion-de-pares',
      term: 'Presión de pares',
      definition: 'Influencia que ejerce el grupo de amigos o compañeros sobre lo que alguien hace. Pesa mucho en la adolescencia, y la capacidad de resistirla crece con la edad.',
      articleId: 'habilidades-sociales-adolescencia',
    },
    {
      id: 'conversacion-de-ida-y-vuelta',
      term: 'Conversación de ida y vuelta',
      definition: 'Charla en la que los dos preguntan, responden y cuentan algo propio, como quien se pasa una pelota. Sirve para encontrar gustos en común. Es una de las habilidades que enseña el programa PEERS.',
      articleId: 'habilidades-sociales-adolescencia',
    },
    {
      id: 'aprendizaje-socioemocional',
      term: 'Aprendizaje socioemocional',
      definition: 'Enseñanza en la escuela de habilidades para reconocer emociones, llevarse bien con otros y tomar decisiones responsables. Los programas escolares tienen buena evidencia.',
      articleId: 'habilidades-sociales-adolescencia',
    },
    {
      id: 'plan-de-salida',
      term: 'Plan de salida',
      definition: 'Acuerdo previo entre un adolescente y un adulto para irse de una situación incómoda o peligrosa sin dar explicaciones en el momento. Por ejemplo, una palabra clave por mensaje.',
      articleId: 'habilidades-sociales-adolescencia',
    },
  ],
};
