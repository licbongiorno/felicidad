import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Soledad no deseada en personas mayores». Escrito para la propia persona mayor:
 * frases cortas, pasos simples y un solo pedido por paso.
 *  - soledad y aislamiento no son lo mismo (Steptoe y colaboradores; Hawkley y Cacioppo);
 *  - reconectar de a poco: un llamado, un vecino, un centro de jubilados (Masi y colaboradores);
 *  - aprender a hacer videollamadas pidiendo ayuda (Chen y Schulz);
 *  - un día con anclas y sentido (activación conductual, Cuijpers y colaboradores);
 *  - extrañar a amigos y pareja que ya no están, con enlace a las prácticas de duelo
 *    existentes (Stroebe y Schut);
 *  - dar lo que uno sabe: voluntariado y generatividad (Erikson; Anderson y colaboradores).
 *
 * No repite lo que ya existe: el antídoto «soledad» y el artículo «vinculos-y-soledad»
 * trabajan la lectura de rechazo; «envejecer-con-sentido» y «revision-de-vida» cubren la
 * revisión de vida y el legado como reflexión. Aquí todo es concreto y conductual.
 *
 * Seguridad: si el desánimo dura semanas, se remite al médico y a la Línea 0800-999-0091;
 * si aparecen ideas de morir, al 135 y al botón Ayuda.
 */

const HOLT_LUNSTAD_2010: Reference = {
  citation: 'Holt-Lunstad, J., Smith, T. B., & Layton, J. B. (2010). Social relationships and mortality risk: A meta-analytic review. PLoS Medicine, 7(7), e1000316.',
  doi: '10.1371/journal.pmed.1000316',
};
const HAWKLEY_CACIOPPO_2010: Reference = {
  citation: 'Hawkley, L. C., & Cacioppo, J. T. (2010). Loneliness matters: A theoretical and empirical review of consequences and mechanisms. Annals of Behavioral Medicine, 40(2), 218–227.',
  doi: '10.1007/s12160-010-9210-8',
};
const STEPTOE_2013: Reference = {
  citation: 'Steptoe, A., Shankar, A., Demakakos, P., & Wardle, J. (2013). Social isolation, loneliness, and all-cause mortality in older men and women. Proceedings of the National Academy of Sciences, 110(15), 5797–5801.',
  doi: '10.1073/pnas.1219686110',
};
const MASI_2011: Reference = {
  citation: 'Masi, C. M., Chen, H.-Y., Hawkley, L. C., & Cacioppo, J. T. (2011). A meta-analysis of interventions to reduce loneliness. Personality and Social Psychology Review, 15(3), 219–266.',
  doi: '10.1177/1088868310377394',
};
const CHEN_SCHULZ_2016: Reference = {
  citation: 'Chen, Y.-R. R., & Schulz, P. J. (2016). The effect of information communication technology interventions on reducing social isolation in the elderly: A systematic review. Journal of Medical Internet Research, 18(1), e18.',
  doi: '10.2196/jmir.4596',
};
const CUIJPERS_2007: Reference = {
  citation: 'Cuijpers, P., van Straten, A., & Warmerdam, L. (2007). Behavioral activation treatments of depression: A meta-analysis. Clinical Psychology Review, 27(3), 318–326.',
  doi: '10.1016/j.cpr.2006.11.001',
};
const STROEBE_SCHUT_1999: Reference = {
  citation: 'Stroebe, M., & Schut, H. (1999). The dual process model of coping with bereavement: Rationale and description. Death Studies, 23(3), 197–224.',
  doi: '10.1080/074811899201046',
};
const ERIKSON_1982: Reference = { citation: 'Erikson, E. H. (1982). The life cycle completed. Norton.' };
const ANDERSON_2014: Reference = {
  citation:
    'Anderson, N. D., Damianakis, T., Kröger, E., Wagner, L. M., Dawson, D. R., Binns, M. A., Bernstein, S., Caspi, E., & Cook, S. L. (2014). The benefits associated with volunteering among seniors: A critical review and recommendations for future research. Psychological Bulletin, 140(6), 1505–1533.',
  doi: '10.1037/a0037610',
};

/** Aviso común: desánimo que dura e ideas de morir. */
const AYUDA =
  'Si el desánimo dura más de dos semanas, habla con tu médico o llama a la Línea Nacional de Salud Mental, 0800-999-0091. Es gratis. Si piensas en morir, llama al 135 (CABA y GBA) o al 0800-345-1435, o toca el botón Ayuda de la app.';

export const SOLEDAD_MAYORES_PACK: ContentPack = {
  id: 'soledad-mayores',

  // ================================================================== prácticas
  practices: [
    {
      id: 'soledad-o-aislamiento',
      title: '¿Soledad o aislamiento?',
      family: 'attentional',
      skills: ['attention'],
      summary: 'Mirar tu semana para ver si te falta compañía, cercanía o las dos cosas. Es el primer paso para saber qué buscar.',
      mechanism: 'Soledad y aislamiento son cosas distintas y no siempre van juntas. Saber cuál te pasa ayuda a elegir el paso que sirve.',
      evidenceLevel: 'preliminar',
      evidence: [STEPTOE_2013, HAWKLEY_CACIOPPO_2010],
      howItWorks: [
        'El aislamiento es un dato: cuántas personas ves y con qué frecuencia. La soledad es un sentimiento: la distancia entre la compañía que tienes y la que quisieras.',
        'Se puede vivir con gente y sentirse muy solo. También se puede ver poca gente y estar en paz. Un estudio con personas mayores en Inglaterra midió las dos cosas por separado, y las dos importaban para la salud (Steptoe y colaboradores, 2013).',
        'John Cacioppo y Louise Hawkley explican que la soledad funciona como el hambre: es una señal de que falta algo. No es un defecto tuyo (Hawkley y Cacioppo, 2010).',
      ],
      tips: [
        'Usa un papel y una lapicera grande. Escribe con letra clara.',
        'Cuenta también los contactos chicos: el saludo del almacenero, la vecina del ascensor.',
        'No hay respuesta correcta. Sólo estás mirando.',
      ],
      obstacles: [
        { q: 'Me da vergüenza decir que me siento solo.', a: 'Le pasa a muchísima gente, a cualquier edad. Sentir soledad es humano. Nombrarlo es el primer paso para cambiarlo.' },
      ],
      cautions: AYUDA,
      steps: [
        { title: 'Llegar', instruction: 'Siéntate cómodo. Ten a mano un papel y una lapicera. Respira tranquilo dos veces.', durationSec: 20, kind: 'breath' },
        { title: 'Contar', instruction: 'Piensa en la última semana. ¿Con cuántas personas hablaste? Cuenta también llamados y saludos. Anota el número.', durationSec: 45, kind: 'reflection' },
        { title: 'Sentir', instruction: 'Ahora pregúntate: ¿me sentí acompañado? Marca una de tres: poco, algo o bastante.', durationSec: 30, kind: 'reflection' },
        { title: 'Qué falta', instruction: '¿Qué te falta más? ¿Ver más gente, o tener una charla de verdad con alguien? Puede ser las dos.', durationSec: 45, kind: 'reflection' },
        { title: 'Un nombre', instruction: 'Escribe el nombre de una persona con quien te gustaría hablar esta semana. Sólo el nombre.', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'contactos-de-a-poco',
      title: 'Volver a conectar, de a un paso',
      family: 'constructive',
      skills: ['resilience'],
      summary: 'Armar una escalera de contactos, del más fácil al más grande: un llamado, un vecino, un centro de jubilados. Dar un escalón por semana.',
      mechanism: 'Los pasos chicos y fijos son más fáciles de cumplir. Cada contacto que sale bien hace más fácil el siguiente.',
      evidenceLevel: 'moderada',
      evidence: [MASI_2011, HOLT_LUNSTAD_2010],
      howItWorks: [
        'Tener vínculos cuida la salud tanto como otros hábitos conocidos (Holt-Lunstad y colaboradores, 2010). Pero cuando uno pasa mucho tiempo sin ver gente, cuesta volver.',
        'Por eso conviene ir de a poco. Primero lo más fácil, como un llamado corto. Después algo un poco más grande, como tomar un mate con una vecina. Más adelante, un lugar con más gente, como un centro de jubilados o un taller del barrio.',
        'Un análisis de muchos estudios encontró que ayuda tener más ocasiones de encuentro. Y ayuda todavía más revisar los pensamientos que nos alejan, como «no quiero molestar» (Masi y colaboradores, 2011).',
      ],
      tips: [
        'Un mismo día y una misma hora cada semana. Así se vuelve costumbre.',
        'Si alguien no atiende, no es un rechazo. Prueba otro día.',
        'Pregunta en la parroquia, en el club o en el centro de salud qué actividades hay para personas mayores.',
        'Si piensas «voy a molestar», recuerda que a la otra persona también puede alegrarle tu llamado.',
      ],
      obstacles: [
        { q: 'No tengo a nadie a quién llamar.', a: 'Empieza por un contacto chico: saludar al diariero, charlar con quien atiende en la farmacia. También puedes ir directo a un centro de jubilados: allí hay gente que busca lo mismo.' },
        { q: 'Me cuesta salir de casa.', a: 'Empieza con escalones que se hacen desde casa: un llamado, una videollamada, invitar a alguien a tomar un café. Si hay un problema de movilidad, coméntalo con tu médico.' },
      ],
      cautions: AYUDA,
      steps: [
        { title: 'Llegar', instruction: 'Siéntate con un papel. Respira despacio dos veces.', durationSec: 20, kind: 'breath' },
        { title: 'Ideas', instruction: 'Anota contactos posibles. Un llamado a un familiar, saludar a un vecino, un mate, un taller, un centro de jubilados.', durationSec: 75, kind: 'reflection' },
        { title: 'Ordenar', instruction: 'Ordénalos del más fácil al más difícil. Arriba lo que harías hoy sin problema. Abajo lo que más cuesta.', durationSec: 60, kind: 'reflection' },
        { title: 'Elegir', instruction: 'Elige el escalón más fácil. Escribe qué día y a qué hora lo harás esta semana.', durationSec: 45, kind: 'reflection' },
        { title: 'Preparar', instruction: 'Piensa qué vas a decir para empezar. Por ejemplo: «Hola, me acordé de ti y quise saber cómo estás».', durationSec: 45, kind: 'reflection' },
        { title: 'Después', instruction: 'Cuando lo hagas, anota cómo te sentiste. La semana que viene, sube un escalón.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'videollamada-con-ayuda',
      title: 'Aprender a hacer videollamadas, con ayuda',
      family: 'constructive',
      skills: ['resilience'],
      summary: 'Pedirle a alguien de confianza que te enseñe a hacer una videollamada, anotar los pasos en un papel y practicar con una llamada corta.',
      mechanism: 'Aprender con otra persona, con los pasos escritos, baja el miedo a equivocarse. La videollamada acerca a quienes están lejos.',
      evidenceLevel: 'preliminar',
      evidence: [CHEN_SCHULZ_2016],
      howItWorks: [
        'Ver la cara de alguien, aunque sea en una pantalla, se siente más cercano que un mensaje. Sirve para hablar con hijos o nietos que viven lejos, o con amigos cuando cuesta salir.',
        'Una revisión de estudios encontró que aprender a usar la computadora o el celular puede bajar el aislamiento en personas mayores. Los resultados son variados y los estudios son chicos (Chen y Schulz, 2016). Funciona mejor cuando alguien enseña con paciencia.',
        'Pedir ayuda no es molestar. A muchas personas jóvenes les gusta enseñar algo que saben hacer bien.',
      ],
      tips: [
        'Pide que te enseñen siempre con la misma aplicación, la que usa tu familia.',
        'Agranda la letra del celular. Quien te ayuda puede hacerlo en la configuración.',
        'Escribe los pasos con tus palabras, no con las de quien te enseña.',
        'Si te equivocas, no se rompe nada. Cuelga y vuelve a empezar.',
        'Nunca des claves ni códigos que lleguen por mensaje, aunque parezca un familiar. Ante la duda, llama tú al número de siempre.',
      ],
      obstacles: [
        { q: 'Ya me explicaron y me olvidé.', a: 'Es normal. Por eso se escriben los pasos en un papel. Pide que te lo muestren otra vez y practica varios días seguidos.' },
        { q: 'No tengo a quién pedirle.', a: 'Pregunta en el centro de jubilados, la biblioteca o la municipalidad. Muchos dan cursos gratis de celular para personas mayores.' },
      ],
      steps: [
        { title: 'Elegir quién', instruction: 'Piensa en alguien paciente que sepa usar el celular. Un nieto, una sobrina, una vecina. Escribe su nombre.', durationSec: 40, kind: 'reflection' },
        { title: 'Pedir', instruction: 'Pídele una hora para enseñarte. Puedes decir: «¿Me enseñas a hacer videollamadas? Quiero ver a la familia».', durationSec: 40, kind: 'instruction' },
        { title: 'Anotar', instruction: 'Mientras te enseña, escribe cada paso en un papel, con letra grande. Un paso por renglón.', durationSec: 90, kind: 'instruction' },
        { title: 'Probar', instruction: 'Haz tú la videollamada, con el papel delante. La otra persona sólo mira y te ayuda si te trabas.', durationSec: 90, kind: 'instruction' },
        { title: 'Repetir', instruction: 'Al otro día, haz una llamada corta sin ayuda. Usa el papel. Si sale, ¡felicitaciones!', durationSec: 60, kind: 'instruction' },
        { title: 'Agendar', instruction: 'Elige un día fijo por semana para una videollamada con alguien que quieres.', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'un-dia-con-sentido',
      title: 'Un día con anclas',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Ordenar el día con pocas anclas fijas: algo para empezar, algo útil, algo con otros y algo que te guste.',
      mechanism: 'Las rutinas con actividades que importan sostienen el ánimo. Hacer primero y esperar las ganas después rompe el círculo del encierro.',
      evidenceLevel: 'moderada',
      evidence: [CUIJPERS_2007, ERIKSON_1982],
      howItWorks: [
        'Después de jubilarse, o cuando los hijos se van, los días pueden quedar sin forma. Sin horarios, cuesta levantarse y todo se vuelve igual. Eso suele bajar el ánimo.',
        'La activación conductual propone hacer cosas pequeñas que dan placer o sentido, aunque no haya ganas. Muchas veces las ganas llegan después. Tiene buena evidencia contra el desánimo (Cuijpers y colaboradores, 2007).',
        'No se trata de llenar el día. Alcanza con cuatro anclas: una para empezar, una útil, una con otros y una que te guste.',
      ],
      tips: [
        'Pon las anclas siempre a la misma hora.',
        'Útil puede ser regar las plantas, cocinar para alguien o arreglar algo.',
        'Con otros puede ser un llamado, la feria o el banco de la plaza.',
        'Si un día no sale, no pasa nada. Mañana vuelves a empezar.',
      ],
      obstacles: [
        { q: 'No tengo ganas de nada.', a: 'Empieza por la más chica, aunque sea sin ganas. Si el desánimo dura semanas, consulta: puede ser una depresión, y tiene tratamiento.' },
      ],
      cautions: AYUDA,
      steps: [
        { title: 'Llegar', instruction: 'Siéntate con un papel. Respira despacio y piensa en un día común.', durationSec: 20, kind: 'breath' },
        { title: 'Empezar', instruction: 'Elige algo para arrancar la mañana a la misma hora. Un mate, abrir las ventanas, la radio. Anótalo.', durationSec: 45, kind: 'reflection' },
        { title: 'Útil', instruction: 'Elige algo útil para hacer. Cocinar, regar, ordenar un cajón, ayudar a alguien. Anótalo con su hora.', durationSec: 45, kind: 'reflection' },
        { title: 'Con otros', instruction: 'Elige un momento con otra persona. Un llamado, la feria, un saludo en la vereda. Anótalo.', durationSec: 45, kind: 'reflection' },
        { title: 'Algo lindo', instruction: 'Elige algo que te guste. Una caminata, música, tejer, leer. Anótalo con su hora.', durationSec: 45, kind: 'reflection' },
        { title: 'A la vista', instruction: 'Pega el papel en la heladera. Al final del día, marca lo que hiciste.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'los-que-ya-no-estan',
      title: 'Extrañar a los que ya no están',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Nombrar a los amigos y a la pareja que perdiste, recordar lo que te daba cada uno y ver qué parte de eso puedes volver a buscar.',
      mechanism: 'Con los años se acumulan pérdidas, y cada una deja un hueco distinto. Darle lugar al dolor y, a la vez, a la vida que sigue ayuda a atravesar el duelo.',
      evidenceLevel: 'preliminar',
      evidence: [STROEBE_SCHUT_1999, HAWKLEY_CACIOPPO_2010],
      howItWorks: [
        'En la vejez, muchas veces la soledad viene de las pérdidas. Se van amigos, hermanos, la pareja de toda la vida. Cada persona ocupaba un lugar: el que llamaba los domingos, la compañera de caminatas, quien te escuchaba.',
        'Margaret Stroebe y Henk Schut explican que en el duelo vamos y venimos. A veces miramos la pérdida y lloramos. Otras veces miramos la vida que sigue. Las dos cosas hacen falta (Stroebe y Schut, 1999).',
        'Buscar compañía nueva no es olvidar ni traicionar. El amor por quien se fue sigue. Lo que se busca es que no te falte todo lo que esa persona te daba.',
        'Si quieres ir más hondo, la app tiene otras prácticas de duelo: «Un ritual de recuerdo», «Carta a quien ya no está» y «Entre la pérdida y la vida que sigue».',
      ],
      tips: [
        'Hazla en un momento tranquilo, no en una fecha difícil.',
        'Puedes tener una foto cerca, si te hace bien.',
        'Si lloras, está bien. Para cuando quieras y retoma otro día.',
        'Contarle a alguien lo que escribiste también acompaña.',
      ],
      obstacles: [
        { q: 'Nadie puede reemplazar a mi pareja.', a: 'Es verdad, y no se trata de eso. Se trata de que alguna parte de lo que te daba, como charlar o salir a caminar, vuelva a tu vida con otras personas.' },
      ],
      cautions:
        'Si el dolor no afloja después de muchos meses y no puedes hacer tu vida, consulta con un profesional. ' + AYUDA,
      steps: [
        { title: 'Llegar', instruction: 'Siéntate cómodo. Pon una mano en el pecho y respira despacio.', durationSec: 30, kind: 'breath' },
        { title: 'Nombrar', instruction: 'Escribe los nombres de personas queridas que ya no están. Amigos, pareja, hermanos. Tómate tu tiempo.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que daba', instruction: 'Elige una persona. ¿Qué te daba? Compañía, risas, consejos, alguien con quien salir. Anótalo.', durationSec: 75, kind: 'reflection' },
        { title: 'Agradecer', instruction: 'Escribe una frase de gracias para esa persona. Puedes decirla en voz baja.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que sigue', instruction: 'De lo que te daba, ¿qué parte podrías buscar hoy con otra persona? Por ejemplo, alguien con quien caminar.', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Vuelve a poner la mano en el pecho. Respira despacio y date un momento antes de seguir.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'ensenar-lo-que-se',
      title: 'Enseñar lo que sé',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Elegir un saber de tu vida, como una receta, un oficio o una historia, y buscar a quién enseñárselo o dónde ofrecerlo como voluntario.',
      mechanism: 'Dar a otros lo que uno sabe da sentido y crea vínculos nuevos. El voluntariado se asocia a más bienestar en personas mayores.',
      evidenceLevel: 'preliminar',
      evidence: [ANDERSON_2014, ERIKSON_1982],
      howItWorks: [
        'Erik Erikson llamó generatividad al deseo de cuidar y dejar algo a quienes vienen después (Erikson, 1982). No hace falta algo grande. Puede ser la receta de los ñoquis, cómo arreglar una canilla o cómo era el barrio antes.',
        'Una revisión de estudios encontró que las personas mayores que hacen voluntariado suelen tener mejor ánimo, más bienestar y mejor salud (Anderson y colaboradores, 2014). Parte del beneficio viene de sentirse útil y de conocer gente.',
        'Esta práctica va de la idea a la acción: elegir qué enseñar, a quién y cuándo empezar.',
      ],
      tips: [
        'Pregunta en la escuela, la biblioteca, el comedor o la parroquia del barrio si buscan voluntarios.',
        'Empieza con algo corto, como una sola tarde.',
        'Enseñar a un nieto también cuenta. Y suele unir mucho.',
        'Elige algo que disfrutes. Si te cansa, cambia o deja.',
      ],
      obstacles: [
        { q: 'No sé hacer nada especial.', a: 'Seguro sabes más de lo que crees. Cocinar, coser, contar cuentos, jugar a las cartas, escuchar. Pregunta a alguien cercano qué te ve hacer bien.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Siéntate cómodo con un papel. Respira despacio.', durationSec: 20, kind: 'breath' },
        { title: 'Lo que sé', instruction: 'Anota cosas que sabes hacer o contar. Recetas, oficios, juegos, historias del barrio o de la familia.', durationSec: 75, kind: 'reflection' },
        { title: 'Elegir uno', instruction: 'Elige el saber que más te gustaría pasar a otros. Rodéalo con un círculo.', durationSec: 30, kind: 'reflection' },
        { title: 'A quién', instruction: '¿A quién podría servirle? Un nieto, una vecina, un grupo de la escuela, un comedor, la biblioteca.', durationSec: 60, kind: 'reflection' },
        { title: 'Cómo empezar', instruction: 'Escribe un primer paso chico. Por ejemplo, llamar al centro de jubilados y preguntar si buscan voluntarios.', durationSec: 45, kind: 'reflection' },
        { title: 'Cuándo', instruction: 'Pon un día y una hora para ese primer paso. Anótalo en el calendario.', durationSec: 30, kind: 'instruction' },
      ],
    },
  ],

  meta: {
    'soledad-o-aislamiento': { level: 'iniciacion', approaches: ['tcc'], module: 'etapas' },
    'contactos-de-a-poco': { level: 'iniciacion', approaches: ['tcc'], module: 'etapas', prerequisites: ['soledad-o-aislamiento'] },
    'videollamada-con-ayuda': { level: 'iniciacion', approaches: ['soluciones'], module: 'etapas' },
    'un-dia-con-sentido': { level: 'iniciacion', approaches: ['tcc', 'logoterapia'], module: 'etapas' },
    'los-que-ya-no-estan': { level: 'intermedio', approaches: ['tcc', 'cft'], module: 'duelo', prerequisites: ['soledad-o-aislamiento'] },
    'ensenar-lo-que-se': { level: 'intermedio', approaches: ['positiva', 'logoterapia'], module: 'etapas', prerequisites: ['contactos-de-a-poco'] },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'soledad-en-la-vejez',
      title: 'Soledad no deseada en la vejez',
      subtitle: 'Qué es, en qué se diferencia del aislamiento y qué pasos chicos ayudan a volver a estar con otros.',
      category: 'Etapas de la vida',
      readingMin: 7,
      keyPoints: [
        'La soledad es un sentimiento. El aislamiento es un dato. No siempre van juntos.',
        'La soledad es una señal, como el hambre: avisa que falta compañía. No es un defecto.',
        'Se sale de a poco: un llamado, un vecino, un centro de jubilados.',
        'El celular puede acercar, si alguien te enseña con paciencia.',
        'Si el desánimo dura semanas, consulta. La depresión en la vejez tiene tratamiento.',
      ],
      sections: [
        {
          heading: 'Soledad y aislamiento',
          paragraphs: [
            'El aislamiento es estar con poca gente. La soledad es sentir que te falta compañía o cercanía. Puedes vivir con tu familia y sentirte muy solo. Y puedes ver poca gente y estar bien.',
            'Un estudio con miles de personas mayores en Inglaterra midió las dos cosas por separado. Las dos se relacionaban con la salud (Steptoe y colaboradores, 2013). Por eso conviene mirar las dos.',
          ],
        },
        {
          heading: 'Por qué importa',
          paragraphs: [
            'Los vínculos cuidan la salud. Un gran análisis de muchos estudios encontró que tener buenas relaciones se asocia con vivir más (Holt-Lunstad y colaboradores, 2010).',
            'John Cacioppo y Louise Hawkley explican que la soledad funciona como el hambre o la sed. Es una señal del cuerpo que avisa que falta algo necesario. Cuando dura mucho, nos pone en guardia y nos hace alejarnos, justo cuando más falta hace acercarse (Hawkley y Cacioppo, 2010).',
          ],
        },
        {
          heading: 'Volver de a poco',
          paragraphs: [
            'No hace falta cambiar todo de golpe. Ayuda empezar por lo más fácil, como un llamado corto, y subir de a un escalón: un mate con una vecina, un taller, un centro de jubilados.',
            'También ayuda revisar los pensamientos que alejan, como «voy a molestar» o «ya nadie se acuerda de mí». Son pensamientos, no hechos (Masi y colaboradores, 2011). El artículo «Vínculos y soledad» cuenta más sobre esto.',
          ],
        },
        {
          heading: 'El celular como puente',
          paragraphs: [
            'Una videollamada permite ver a los nietos que viven lejos o a una amiga que no puede salir. Aprender cuesta al principio, y eso es normal. Ayuda pedir a alguien paciente que enseñe, anotar los pasos en un papel y practicar varios días.',
            'Los estudios sobre tecnología y aislamiento en personas mayores son todavía chicos, pero muestran que puede ayudar cuando hay alguien que acompaña (Chen y Schulz, 2016). Cuidado con los mensajes que piden claves o dinero: ante la duda, llama al número de siempre.',
          ],
        },
        {
          heading: 'Días con forma',
          paragraphs: [
            'Después de jubilarse, el día puede quedar vacío. Unas pocas anclas fijas ayudan: algo para arrancar, algo útil, algo con otros y algo que te guste. Hacer cosas con sentido, aunque falten las ganas, mejora el ánimo (Cuijpers y colaboradores, 2007).',
          ],
        },
        {
          heading: 'Los que ya no están',
          paragraphs: [
            'Con los años se van amigos, hermanos y, muchas veces, la pareja. Cada pérdida deja un hueco. En el duelo es normal ir y venir entre el dolor y la vida que sigue (Stroebe y Schut, 1999).',
            'Buscar compañía nueva no es olvidar. Es dejar que algo de lo que esa persona te daba, como una charla o una caminata, vuelva a tu vida.',
          ],
        },
        {
          heading: 'Dar lo que sabes',
          paragraphs: [
            'Erik Erikson llamó generatividad al deseo de cuidar a quienes vienen después (Erikson, 1982). Enseñar una receta, un oficio o una historia es una forma de hacerlo. El voluntariado en personas mayores se asocia a más bienestar y mejor ánimo (Anderson y colaboradores, 2014).',
          ],
        },
        {
          heading: 'Cuándo pedir ayuda',
          paragraphs: [
            'Si la tristeza o la falta de ganas duran más de dos semanas, habla con tu médico. La depresión no es parte normal de envejecer y tiene tratamiento. También puedes llamar gratis a la Línea Nacional de Salud Mental, 0800-999-0091.',
            'Si piensas en morir, no estás solo. Llama al 135 (CABA y GBA) o al 0800-345-1435 desde el resto del país, o toca el botón Ayuda de la app. En una emergencia, llama al 911.',
          ],
        },
      ],
      caveat: {
        title: 'Lo que sabemos y lo que no',
        body: 'Que la soledad y el aislamiento se asocian a peor salud está bien estudiado. Pero son estudios de asociación: no prueban que una cosa cause la otra. Sobre qué ayuda más, la evidencia es moderada, y sobre la tecnología es todavía preliminar. Estas prácticas no reemplazan la consulta médica ni la terapia.',
      },
      diagram: {
        title: 'Cómo se mantiene la soledad',
        nodes: ['Una pérdida o un cambio, como jubilarse o enviudar', 'Menos contactos', 'Sentir soledad', 'Pensar «voy a molestar»', 'Alejarse un poco más'],
        caption: 'Un contacto chico y fijo, una rutina con otros y revisar los pensamientos cortan el círculo.',
      },
      related: {
        practices: ['soledad-o-aislamiento', 'contactos-de-a-poco', 'videollamada-con-ayuda', 'un-dia-con-sentido', 'los-que-ya-no-estan', 'ensenar-lo-que-se', 'revision-de-vida'],
        articles: ['vinculos-y-soledad', 'envejecer-con-sentido'],
      },
      references: [STEPTOE_2013, HOLT_LUNSTAD_2010, HAWKLEY_CACIOPPO_2010, MASI_2011, CHEN_SCHULZ_2016, CUIJPERS_2007, STROEBE_SCHUT_1999, ERIKSON_1982, ANDERSON_2014],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'acompanado-de-a-poco',
      title: 'De a poco, con otros',
      subtitle: 'Cuatro semanas para salir de la soledad no deseada, paso a paso',
      description:
        'Mirarás si te falta compañía o cercanía, darás un contacto chico por semana, aprenderás a hacer videollamadas con ayuda, le darás forma a tus días y buscarás dónde ofrecer lo que sabes. Si el desánimo dura semanas, consulta con tu médico.',
      basis: 'Masi y colaboradores (2011); Hawkley y Cacioppo (2010); Cuijpers y colaboradores (2007); Anderson y colaboradores (2014).',
      rhythm: '10 minutos, 3 o 4 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Mirar',
          focus: 'Soledad y aislamiento',
          description: 'Leerás qué es la soledad no deseada y mirarás tu semana para ver qué te falta.',
          practiceIds: ['soledad-o-aislamiento', 'un-dia-con-sentido'],
          articleIds: ['soledad-en-la-vejez'],
          journalType: 'activacion',
        },
        {
          title: 'Semana 2 · Un escalón',
          focus: 'Contactos chicos y fijos',
          description: 'Armarás tu escalera de contactos y aprenderás a hacer videollamadas con ayuda de alguien.',
          practiceIds: ['contactos-de-a-poco', 'videollamada-con-ayuda'],
          articleIds: [],
          journalType: 'tres-cosas',
        },
        {
          title: 'Semana 3 · Los que no están',
          focus: 'Extrañar y seguir',
          description: 'Recordarás a quienes perdiste, con gratitud, y buscarás qué parte de lo que te daban puede volver a tu vida.',
          practiceIds: ['los-que-ya-no-estan', 'ritual-de-recuerdo'],
          articleIds: [],
          journalType: 'carta-gratitud',
        },
        {
          title: 'Semana 4 · Dar',
          focus: 'Lo que sabes, para otros',
          description: 'Elegirás un saber de tu vida y darás el primer paso para enseñarlo o ser voluntario.',
          practiceIds: ['ensenar-lo-que-se', 'contactos-de-a-poco'],
          articleIds: ['envejecer-con-sentido'],
          journalType: 'sentido',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-soledad-o-aislamiento',
      title: 'Sentirse solo no es lo mismo que estar solo',
      subtitle: 'Soledad y aislamiento, dos cosas distintas.',
      slides: [
        { heading: 'Estar con poca gente', text: 'El aislamiento es un dato. Es cuánta gente ves y cada cuánto.' },
        { heading: 'Sentir que falta', text: 'La soledad es un sentimiento. Es sentir que te falta compañía o una charla de verdad.' },
        { heading: 'No siempre van juntos', text: 'Puedes vivir con tu familia y sentirte solo. Y puedes ver poca gente y estar en paz.' },
        { heading: 'Una señal', text: 'La soledad es como el hambre. Avisa que te falta algo. No es un defecto tuyo.' },
        { heading: 'Un paso', text: 'Anota el nombre de alguien con quien te gustaría hablar. Llámalo esta semana.' },
      ],
      related: { practices: ['soledad-o-aislamiento', 'contactos-de-a-poco'], articles: ['soledad-en-la-vejez'] },
      references: [STEPTOE_2013, HAWKLEY_CACIOPPO_2010],
    },
    {
      id: 'pildora-videollamada',
      title: 'El celular como puente',
      subtitle: 'Aprender videollamadas, con ayuda.',
      slides: [
        { heading: 'Ver una cara', text: 'Una videollamada te deja ver a los nietos o a una amiga. Se siente más cerca que un mensaje.' },
        { heading: 'Pedir ayuda', text: 'Pide a alguien paciente que te enseñe. Pedir no es molestar. A muchos les gusta enseñar.' },
        { heading: 'En un papel', text: 'Anota cada paso con letra grande. Un paso por renglón. Así no dependes de la memoria.' },
        { heading: 'Sin miedo', text: 'Si te equivocas, no se rompe nada. Cuelga y empieza de nuevo.' },
        { heading: 'Cuidado', text: 'Nunca des claves por mensaje. Si alguien pide plata, llama tú al número de siempre.' },
      ],
      related: { practices: ['videollamada-con-ayuda'], articles: ['soledad-en-la-vejez'] },
      references: [CHEN_SCHULZ_2016],
    },
    {
      id: 'pildora-los-que-ya-no-estan',
      title: 'Extrañar y seguir',
      subtitle: 'Soledad y duelo en la vejez.',
      slides: [
        { heading: 'Se van', text: 'Con los años se van amigos, hermanos y a veces la pareja. Cada uno deja un hueco distinto.' },
        { heading: 'Ir y venir', text: 'En el duelo vamos y venimos. A veces lloramos. Otras veces miramos la vida que sigue.' },
        { heading: 'No es olvidar', text: 'Buscar compañía nueva no es traicionar a nadie. El cariño por quien se fue sigue.' },
        { heading: 'Lo que te daba', text: 'Piensa qué te daba esa persona. Una charla, una caminata. Busca algo de eso con otros.' },
        { heading: 'Si no afloja', text: 'Si el dolor no afloja en muchos meses, consulta. Si piensas en morir, llama al 135 o toca el botón Ayuda.' },
      ],
      related: { practices: ['los-que-ya-no-estan', 'ritual-de-recuerdo', 'carta-al-ser-querido'], articles: ['soledad-en-la-vejez'] },
      references: [STROEBE_SCHUT_1999],
    },
    {
      id: 'pildora-ensenar-lo-que-sabes',
      title: 'Lo que sabes vale',
      subtitle: 'Voluntariado y transmitir saberes.',
      slides: [
        { heading: 'Dejar algo', text: 'Erikson lo llamó generatividad. Es el deseo de cuidar a los que vienen después.' },
        { heading: 'Cosas simples', text: 'Una receta, un oficio, un juego de cartas, cómo era el barrio. Todo eso se puede enseñar.' },
        { heading: 'Hace bien', text: 'Las personas mayores que hacen voluntariado suelen tener mejor ánimo. Se sienten útiles y conocen gente.' },
        { heading: 'Dónde', text: 'Pregunta en la escuela, la biblioteca, el comedor o el centro de jubilados si buscan ayuda.' },
        { heading: 'Un paso', text: 'Elige un saber y una persona. Pon un día para empezar.' },
      ],
      related: { practices: ['ensenar-lo-que-se', 'revision-de-vida'], articles: ['soledad-en-la-vejez', 'envejecer-con-sentido'] },
      references: [ERIKSON_1982, ANDERSON_2014],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'soledad-no-deseada', term: 'Soledad no deseada', definition: 'Sentir que falta compañía o cercanía, aunque haya gente cerca. Es un sentimiento, no un dato.', articleId: 'soledad-en-la-vejez' },
    { id: 'aislamiento-social', term: 'Aislamiento social', definition: 'Tener pocos contactos con otras personas. Se puede medir y no siempre va junto con la soledad.', practiceId: 'soledad-o-aislamiento' },
    { id: 'generatividad', term: 'Generatividad', definition: 'Palabra de Erik Erikson para el deseo de cuidar y dejar algo a quienes vienen después, por ejemplo enseñando lo que uno sabe.', practiceId: 'ensenar-lo-que-se' },
    { id: 'brecha-digital', term: 'Brecha digital', definition: 'La distancia entre quienes saben usar el celular o internet y quienes no tuvieron ocasión de aprender. Se achica con ayuda y práctica.', practiceId: 'videollamada-con-ayuda' },
  ],
};
