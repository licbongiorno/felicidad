import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Imagen corporal»:
 *  - el cuerpo por lo que hace (funcionalidad corporal, Alleva y colaboradores);
 *  - autocompasión hacia el cuerpo (Albertson, Neff y Dill-Shackleford);
 *  - redes sociales y comparación (Fardouly; Tiggemann y Zaccardo);
 *  - chequeos y evitaciones (TCC de la imagen corporal, Cash; Fairburn);
 *  - exposición al espejo con lenguaje neutro (Griffen y colaboradores), con riesgo 2;
 *  - cómo se habla de los cuerpos en casa (Neumark-Sztainer).
 *
 * Reglas de seguridad del paquete: no hay contenido sobre bajar de peso, dietas, calorías ni
 * números de peso o talle; no se elogian ni critican cuerpos; cada práctica remite a consulta
 * si hay señales de un trastorno de la conducta alimentaria. La meta es una relación más
 * amable y funcional con el cuerpo, no cambiarlo.
 */

const CASH_2008: Reference = { citation: 'Cash, T. F. (2008). The body image workbook: An eight-step program for learning to like your looks (2.ª ed.). New Harbinger.' };
const FAIRBURN_2008: Reference = { citation: 'Fairburn, C. G. (2008). Cognitive behavior therapy and eating disorders. Guilford Press.' };
const ALLEVA_2015: Reference = {
  citation:
    'Alleva, J. M., Martijn, C., Van Breukelen, G. J. P., Jansen, A., & Karos, K. (2015). Expand Your Horizon: A programme that improves body image and reduces self-objectification by training women to focus on body functionality. Body Image, 15, 81–89.',
  doi: '10.1016/j.bodyim.2015.07.001',
};
const ALBERTSON_2015: Reference = {
  citation: 'Albertson, E. R., Neff, K. D., & Dill-Shackleford, K. E. (2015). Self-compassion and body dissatisfaction in women: A randomized controlled trial of a brief meditation intervention. Mindfulness, 6(3), 444–454.',
  doi: '10.1007/s12671-014-0277-3',
};
const TYLKA_2015: Reference = {
  citation: 'Tylka, T. L., & Wood-Barcalow, N. L. (2015). What is and what is not positive body image? Conceptual foundations and construct definition. Body Image, 14, 118–129.',
  doi: '10.1016/j.bodyim.2015.04.001',
};
const FARDOULY_2015: Reference = {
  citation: 'Fardouly, J., Diedrichs, P. C., Vartanian, L. R., & Halliwell, E. (2015). Social comparisons on social media: The impact of Facebook on young women’s body image concerns and mood. Body Image, 13, 38–45.',
  doi: '10.1016/j.bodyim.2014.12.002',
};
const TIGGEMANN_2015: Reference = {
  citation: 'Tiggemann, M., & Zaccardo, M. (2015). «Exercise to be fit, not skinny»: The effect of fitspiration imagery on women’s body image. Body Image, 15, 61–67.',
  doi: '10.1016/j.bodyim.2015.06.003',
};
const GRIFFEN_2018: Reference = {
  citation: 'Griffen, T. C., Naumann, E., & Hildebrandt, T. (2018). Mirror exposure therapy for body image disturbances and eating disorders: A review. Clinical Psychology Review, 65, 163–174.',
  doi: '10.1016/j.cpr.2018.08.006',
};
const NEUMARK_2010: Reference = {
  citation:
    'Neumark-Sztainer, D., Bauer, K. W., Friend, S., Hannan, P. J., Story, M., & Berge, J. M. (2010). Family weight talk and dieting: How much do they matter for body dissatisfaction and disordered eating behaviors in adolescent girls? Journal of Adolescent Health, 47(3), 270–276.',
  doi: '10.1016/j.jadohealth.2010.02.001',
};

/** Aviso común: señales de un trastorno de la conducta alimentaria y a quién consultar. */
const TCA =
  'Si dejas de comer o comes muy poco, vomitas, usas laxantes, haces ejercicio para compensar lo que comiste, tienes atracones o bajaste mucho de peso, consulta pronto a un médico o a un equipo de salud mental. Son señales de un trastorno alimentario y tienen tratamiento. Si te mareas o te desmayas, es una urgencia.';

export const IMAGEN_CORPORAL_PACK: ContentPack = {
  id: 'imagen-corporal',

  // ================================================================== prácticas
  practices: [
    {
      id: 'lo-que-mi-cuerpo-hace',
      title: 'Lo que mi cuerpo hace por mí',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Escribir sobre lo que tu cuerpo te permite hacer, sentir y vivir, en lugar de cómo se ve.',
      mechanism: 'Mirar el cuerpo por sus funciones, y no sólo por su apariencia, mejora la imagen corporal y baja la costumbre de mirarse desde afuera.',
      evidenceLevel: 'moderada',
      evidence: [ALLEVA_2015, TYLKA_2015],
      howItWorks: [
        'Jessica Alleva y su equipo probaron un programa breve de escritura sobre la funcionalidad del cuerpo: lo que permite hacer, sentir, crear y vincularse. Las participantes mejoraron su apreciación del cuerpo y se miraron menos desde afuera (Alleva y colaboradores, 2015).',
        'La idea es simple. Muchas personas piensan su cuerpo sólo como algo que se mira. Pero el cuerpo también te lleva, te abraza, te hace sentir el sol, te deja reír y cuidar a otros.',
        'No hace falta que el cuerpo funcione «perfecto». Si tienes dolor, una enfermedad o una discapacidad, busca lo que sí te permite, aunque sea pequeño.',
      ],
      tips: [
        'Escribe frases concretas: «mis piernas me llevaron a ver a mi amiga».',
        'Incluye los sentidos: lo que ves, oyes, saboreas y tocas.',
        'Si aparece una crítica sobre cómo te ves, anótala aparte y vuelve a lo que el cuerpo hace.',
      ],
      obstacles: [{ q: 'Mi cuerpo me falla mucho.', a: 'Tiene sentido sentirlo así. Busca igual algo que sí hace hoy, aunque sea respirar, sentir una manta o escuchar una canción.' }],
      cautions: TCA,
      steps: [
        { title: 'Llegar', instruction: 'Siéntate cómodo. Respira despacio y nota el apoyo del cuerpo en la silla.', durationSec: 40, kind: 'breath' },
        { title: 'Moverte', instruction: 'Piensa en lo que tu cuerpo te dejó hacer esta semana: caminar, cocinar, trabajar, bailar. Anota tres cosas.', durationSec: 75, kind: 'reflection' },
        { title: 'Sentir', instruction: '¿Qué te dejó sentir? Un sabor, un abrazo, el agua caliente, una canción. Anota dos cosas.', durationSec: 60, kind: 'reflection' },
        { title: 'Vincularte', instruction: '¿Cómo te ayudó tu cuerpo a estar con otros? Una mirada, una charla, cuidar a alguien.', durationSec: 60, kind: 'reflection' },
        { title: 'Cuidarte', instruction: '¿Qué hace tu cuerpo para cuidarte sin que lo pidas? Respirar, curar una herida, descansar.', durationSec: 45, kind: 'reflection' },
        { title: 'Agradecer', instruction: 'Elige una de esas cosas. Escribe una frase de agradecimiento a esa parte de tu cuerpo.', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'carta-compasiva-a-mi-cuerpo',
      title: 'Una voz amable para mi cuerpo',
      family: 'constructive',
      skills: ['compassion'],
      summary: 'Responder a la crítica sobre tu cuerpo con la voz que usarías con un amigo que sufre por lo mismo.',
      mechanism: 'La autocompasión reduce la vergüenza y la insatisfacción corporal. Cambiar la voz con que te hablas cambia cómo te sientes en tu cuerpo.',
      evidenceLevel: 'moderada',
      evidence: [ALBERTSON_2015, TYLKA_2015],
      howItWorks: [
        'En un ensayo controlado, tres semanas de meditaciones breves de autocompasión bajaron la insatisfacción con el cuerpo y la vergüenza corporal, y subió la apreciación del cuerpo (Albertson y colaboradores, 2015).',
        'La autocompasión tiene tres partes. Reconocer que duele, recordar que mucha gente siente lo mismo y hablarte con amabilidad. No se trata de convencerte de que te gusta todo, sino de no sumar maltrato al malestar.',
      ],
      tips: [
        'Imagina a un amigo diciendo lo mismo de su cuerpo. ¿Qué le dirías?',
        'Evita reemplazar la crítica por elogios a la apariencia. Busca amabilidad, no un nuevo juicio.',
        'Una mano en el pecho ayuda a que la voz amable se sienta.',
      ],
      obstacles: [{ q: 'Siento que me miento.', a: 'No tienes que decir que te encanta. Prueba algo verdadero: «Esto me duele. Mucha gente se siente así. Merezco tratarme con cuidado».' }],
      cautions: TCA,
      steps: [
        { title: 'Llegar', instruction: 'Pon una mano en el pecho. Respira despacio y siente el calor de la mano.', durationSec: 40, kind: 'breath' },
        { title: 'La crítica', instruction: 'Escribe una frase crítica que te dices sobre tu cuerpo, tal como suena.', durationSec: 45, kind: 'reflection' },
        { title: 'Cómo duele', instruction: 'Nota qué sientes al leerla. Dite: «Esto duele».', durationSec: 40, kind: 'breath' },
        { title: 'No te pasa sólo a ti', instruction: 'Recuerda que muchísimas personas sienten algo parecido. Dite: «Esto no me pasa sólo a mí».', durationSec: 40, kind: 'breath' },
        { title: 'La voz amable', instruction: 'Imagina a un amigo que dice esa frase de sí mismo. Escribe lo que le dirías, con cariño.', durationSec: 75, kind: 'reflection' },
        { title: 'Para ti', instruction: 'Lee esa respuesta como si fuera para ti. Despacio, con la mano en el pecho.', durationSec: 45, kind: 'breath' },
      ],
    },
    {
      id: 'mi-feed-y-mi-cuerpo',
      title: 'Lo que miro y cómo me deja',
      family: 'attentional',
      skills: ['attention'],
      summary: 'Revisar qué cuentas y contenidos te hacen sentir peor con tu cuerpo, y armar un entorno de redes que te trate mejor.',
      mechanism: 'Las comparaciones hacia arriba con imágenes retocadas empeoran la imagen corporal. Cambiar lo que miras cambia con qué te comparas.',
      evidenceLevel: 'preliminar',
      evidence: [FARDOULY_2015, TIGGEMANN_2015],
      howItWorks: [
        'En un experimento, mirar redes sociales unos minutos aumentó el malestar con la apariencia en mujeres que tendían a compararse (Fardouly y colaboradores, 2015). Las imágenes de «inspiración fitness» también empeoraron la imagen corporal, aunque prometían lo contrario (Tiggemann y Zaccardo, 2015).',
        'Las imágenes de las redes están elegidas, iluminadas y muchas veces retocadas. Compararte con ellas es compararte con algo que no existe así. La buena noticia es que puedes elegir qué miras.',
      ],
      tips: [
        'No hace falta borrar las redes. Basta con dejar de seguir o silenciar lo que te hace mal.',
        'Suma cuentas sobre temas que te gustan y que no giran alrededor de cuerpos.',
        'Si te notas comparándote, nómbralo: «estoy comparando». Y cierra la aplicación un rato.',
      ],
      obstacles: [{ q: 'Me da miedo perderme algo.', a: 'Silenciar no es bloquear: puedes volver cuando quieras. Prueba una semana y mira cómo te sientes.' }],
      cautions: TCA,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Ten el celular a mano, todavía bloqueado.', durationSec: 30, kind: 'breath' },
        { title: 'Recorrer', instruction: 'Abre la red que más usas. Mira las primeras diez publicaciones con atención.', durationSec: 90, kind: 'instruction' },
        { title: 'Cómo te deja', instruction: 'Para cada cuenta, nota si te deja mejor, igual o peor con tu cuerpo. Anota las que te dejan peor.', durationSec: 60, kind: 'reflection' },
        { title: 'Silenciar', instruction: 'Elige tres de esas cuentas y deja de seguirlas, o ponlas en silencio por un tiempo.', durationSec: 60, kind: 'instruction' },
        { title: 'Sumar', instruction: 'Busca dos cuentas sobre algo que te gusta: un hobby, un tema, humor. Síguelas.', durationSec: 60, kind: 'instruction' },
        { title: 'Revisar', instruction: 'Anota una fecha, en una semana, para ver cómo te sientes con este cambio.', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'chequeos-y-evitaciones',
      title: 'Menos chequeos, menos evitaciones',
      family: 'deconstructive',
      skills: ['attention', 'resilience'],
      summary: 'Registrar cuántas veces revisas tu cuerpo o evitas situaciones por cómo te ves, y reducir una de esas conductas de a poco.',
      mechanism: 'Chequear el cuerpo y evitar situaciones alivian un momento, pero mantienen la preocupación. Reducirlas de a poco baja la ansiedad por la apariencia.',
      evidenceLevel: 'moderada',
      evidence: [CASH_2008, FAIRBURN_2008],
      howItWorks: [
        'Muchas personas preocupadas por su cuerpo lo chequean muy seguido: se miran en cada vidrio, se pellizcan, se pesan, se prueban ropa para comprobar. Otras evitan: no van a la playa, no se sacan fotos, se tapan con ropa grande.',
        'Christopher Fairburn y Thomas Cash muestran que estas conductas mantienen el problema. El chequeo encuentra siempre algún defecto, porque busca eso. La evitación impide comprobar que se puede estar bien igual.',
        'El cambio se hace de a poco. Primero se registra, después se reduce una conducta por vez.',
      ],
      tips: [
        'Empieza por el chequeo o la evitación que te parece más fácil de cambiar.',
        'Ponte metas chicas: mirarte en el espejo sólo al vestirte, no en cada vidrio.',
        'Las ganas de chequear suben y bajan como una ola. Puedes esperar a que bajen.',
      ],
      obstacles: [{ q: 'Si no me peso, me angustio más.', a: 'Al principio puede pasar. Si pesarte o evitar comer ocupan mucho de tu día, hazlo con un profesional: es parte de un tratamiento y no conviene hacerlo solo.' }],
      cautions: TCA,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio y piensa en un día común.', durationSec: 30, kind: 'breath' },
        { title: 'Chequeos', instruction: '¿Cómo revisas tu cuerpo? Espejos, vidrios, fotos, pellizcar, medir, probar ropa. Anota los que hagas.', durationSec: 75, kind: 'reflection' },
        { title: 'Evitaciones', instruction: '¿Qué evitas por cómo te ves? La playa, fotos, ciertas ropas, comer delante de otros. Anótalo.', durationSec: 75, kind: 'reflection' },
        { title: 'El efecto', instruction: 'Elige una conducta. Después de hacerla, ¿te sientes mejor o peor un rato más tarde?', durationSec: 45, kind: 'reflection' },
        { title: 'Un paso', instruction: 'Elige una meta chica para esta semana. Por ejemplo, mirarte sólo al vestirte, o usar una vez una ropa que evitas.', durationSec: 60, kind: 'reflection' },
        { title: 'Con la ola', instruction: 'Cuando aparezcan las ganas de chequear, respira tres veces y espera. Fíjate cómo suben y bajan.', durationSec: 45, kind: 'breath' },
      ],
    },
    {
      id: 'espejo-con-palabras-neutras',
      title: 'Frente al espejo, con palabras neutras',
      family: 'deconstructive',
      skills: ['attention', 'resilience'],
      summary: 'Mirarte en el espejo de arriba abajo y describir cada parte con palabras neutras, sin juicio, durante unos minutos.',
      mechanism: 'Describir el cuerpo con palabras neutras, sin escapar de las partes difíciles, baja con la repetición el malestar al mirarse.',
      evidenceLevel: 'moderada',
      evidence: [GRIFFEN_2018, CASH_2008],
      howItWorks: [
        'La exposición al espejo es una técnica de la terapia cognitivo-conductual. Se mira todo el cuerpo, de arriba abajo, y se describe cada parte con palabras neutras: color, forma, textura. Se evita juzgar con palabras como «horrible» o «gordo».',
        'Una revisión de estudios encontró que reduce la insatisfacción corporal, también en trastornos alimentarios, cuando se hace de forma guiada (Griffen y colaboradores, 2018). Al principio puede subir el malestar, y luego baja.',
        'Es una práctica intensa. Hazla cuando estés en un momento estable y, si puedes, con el acompañamiento de un profesional.',
      ],
      tips: [
        'Empieza con ropa. Más adelante, si quieres, con menos ropa.',
        'Ve de arriba abajo, sin saltarte partes ni quedarte demasiado en una.',
        'Usa palabras como las que usaría un pintor: color, curva, línea.',
        'Si el malestar sube mucho, termina con una práctica de anclaje.',
      ],
      obstacles: [{ q: 'No me sale no juzgar.', a: 'Es esperable. Cada vez que aparezca un juicio, nótalo y vuelve a describir. «Mi panza es redonda» en lugar de «mi panza es horrible».' }],
      cautions:
        'No hagas esta práctica si estás atravesando un trastorno alimentario sin tratamiento, si el espejo te provoca mucha angustia o si estás en una crisis. Primero consulta. ' + TCA,
      steps: [
        { title: 'Preparar', instruction: 'Ponte frente a un espejo de cuerpo entero, con ropa cómoda. Siente los pies en el piso.', durationSec: 30, kind: 'instruction' },
        { title: 'Respirar', instruction: 'Respira despacio tres veces. Recuerda que puedes parar cuando quieras.', durationSec: 30, kind: 'breath' },
        { title: 'La cabeza', instruction: 'Mira tu pelo, tu cara, tus ojos. Descríbelos en voz baja con palabras neutras: color, forma.', durationSec: 60, kind: 'instruction' },
        { title: 'El torso', instruction: 'Baja la mirada a los hombros, los brazos, el pecho y la panza. Describe sin juzgar.', durationSec: 75, kind: 'instruction' },
        { title: 'Las piernas', instruction: 'Sigue por la cadera, las piernas y los pies. Describe cada parte con calma.', durationSec: 60, kind: 'instruction' },
        { title: 'El malestar', instruction: 'Del cero al diez, ¿cuánto malestar sientes ahora? Anótalo. Con la repetición suele bajar.', durationSec: 30, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Aléjate del espejo. Pon una mano en el pecho y respira despacio.', durationSec: 40, kind: 'breath' },
      ],
    },
    {
      id: 'hablar-del-cuerpo-en-casa',
      title: 'Cómo hablamos de los cuerpos en casa',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Revisar los comentarios sobre peso, comida y apariencia que circulan en tu casa y acordar una forma más cuidadosa de hablar.',
      mechanism: 'Los comentarios de la familia sobre el peso se asocian a más insatisfacción corporal y conductas alimentarias de riesgo en los chicos. Cambiar la conversación protege.',
      evidenceLevel: 'preliminar',
      evidence: [NEUMARK_2010, TYLKA_2015],
      howItWorks: [
        'Dianne Neumark-Sztainer estudió durante años a adolescentes y sus familias. Encontró que los comentarios de los padres sobre el peso, propio o de los hijos, se asocian a más insatisfacción corporal y a más dietas y conductas alimentarias de riesgo (Neumark-Sztainer y colaboradores, 2010).',
        'No hace falta hablar perfecto. Ayuda dejar de comentar cuerpos, propios y ajenos, y hablar de comida en términos de sabor, energía y momentos compartidos, no de «engordar». También ayuda que los adultos se traten con más amabilidad delante de los chicos.',
      ],
      tips: [
        'Un cambio simple: no comentar el cuerpo de nadie, ni para criticar ni para elogiar.',
        'Si un chico se queja de su cuerpo, escucha primero y pregunta qué le pasó.',
        'Elogia lo que hace, lo que piensa y cómo trata a otros.',
      ],
      obstacles: [{ q: 'En mi familia siempre se habló así.', a: 'Es muy común. Puedes cambiar lo que dices tú y, si quieres, pedir a otros adultos que no comenten el cuerpo de tus hijos.' }],
      cautions:
        'Si un chico o adolescente come muy poco, vomita, hace mucho ejercicio para compensar o baja de peso sin explicación, consulta pronto con su pediatra. Cuanto antes se trata un trastorno alimentario, mejor.',
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en las comidas y charlas de tu casa.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que se dice', instruction: 'Anota frases sobre peso, comida o apariencia que se dicen en casa. Las tuyas y las de otros.', durationSec: 75, kind: 'reflection' },
        { title: 'Lo que transmiten', instruction: '¿Qué aprendería un chico que escucha esas frases todos los días?', durationSec: 60, kind: 'reflection' },
        { title: 'Otra forma', instruction: 'Reescribe dos de esas frases. Habla de sabor, energía o de lo que el cuerpo hace.', durationSec: 60, kind: 'reflection' },
        { title: 'Un acuerdo', instruction: 'Piensa un acuerdo familiar simple. Por ejemplo: «En casa no comentamos los cuerpos».', durationSec: 45, kind: 'reflection' },
        { title: 'Contigo', instruction: 'Elige una frase amable sobre tu propio cuerpo para decir, o no decir crítica, delante de los chicos.', durationSec: 45, kind: 'reflection' },
      ],
    },
  ],

  meta: {
    'lo-que-mi-cuerpo-hace': { level: 'iniciacion', approaches: ['positiva', 'escritura'], module: 'imagen-corporal' },
    'carta-compasiva-a-mi-cuerpo': { level: 'iniciacion', approaches: ['cft'], module: 'imagen-corporal' },
    'mi-feed-y-mi-cuerpo': { level: 'iniciacion', approaches: ['tcc'], module: 'imagen-corporal' },
    'chequeos-y-evitaciones': { level: 'intermedio', approaches: ['tcc'], module: 'imagen-corporal', prerequisites: ['lo-que-mi-cuerpo-hace'] },
    'espejo-con-palabras-neutras': {
      level: 'avanzado',
      approaches: ['tcc'],
      module: 'imagen-corporal',
      prerequisites: ['chequeos-y-evitaciones'],
      risk: { level: 2, alternative: 'lo-que-mi-cuerpo-hace' },
    },
    'hablar-del-cuerpo-en-casa': { level: 'iniciacion', approaches: ['tcc', 'positiva'], module: 'imagen-corporal' },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'imagen-corporal',
      title: 'Imagen corporal: hacer las paces con el cuerpo',
      subtitle: 'Qué es, por qué tanta gente sufre por su cuerpo, qué ayuda según la investigación y cuándo hace falta consultar.',
      category: 'Hábitos y cuerpo',
      readingMin: 9,
      keyPoints: [
        'La imagen corporal es cómo percibes, piensas y sientes tu cuerpo, no cómo es.',
        'Mirar el cuerpo por lo que hace, y tratarlo con amabilidad, mejora la imagen corporal.',
        'Las comparaciones en redes, los chequeos y las evitaciones mantienen el malestar.',
        'La meta no es cambiar el cuerpo, sino la relación con él.',
        'Restringir, vomitar, compensar o tener atracones son señales para consultar pronto.',
      ],
      sections: [
        {
          heading: 'Qué es la imagen corporal',
          paragraphs: [
            'La imagen corporal no es el cuerpo. Es lo que percibes, piensas y sientes sobre él. Dos personas con cuerpos parecidos pueden vivirlos de forma muy distinta. Por eso, cambiar la imagen corporal no pasa por cambiar el cuerpo.',
            'Tracy Tylka y Nichole Wood-Barcalow describen la imagen corporal positiva. No es creer que el cuerpo es perfecto. Es apreciarlo, respetar sus necesidades, ver la belleza de forma amplia y protegerse de los mensajes dañinos.',
          ],
        },
        {
          heading: 'El cuerpo por lo que hace',
          paragraphs: [
            'Una forma de cambiar la relación con el cuerpo es mirarlo por sus funciones. El cuerpo te lleva, te deja sentir, crear, descansar y estar con otros. En un estudio, escribir sobre eso mejoró la apreciación del cuerpo (Alleva y colaboradores, 2015).',
            'La autocompasión también ayuda. Tratarte con la amabilidad con que tratarías a un amigo bajó la vergüenza corporal en un ensayo controlado (Albertson y colaboradores, 2015).',
          ],
        },
        {
          heading: 'Lo que mantiene el malestar',
          paragraphs: [
            'Las redes sociales muestran cuerpos elegidos, iluminados y retocados. Compararse con ellos empeora el ánimo y la imagen corporal (Fardouly y colaboradores, 2015). Ayuda elegir qué miras y notar cuando empiezas a comparar.',
            'Los chequeos frecuentes, como mirarse en cada vidrio o pesarse varias veces, y las evitaciones, como no ir a la playa, alivian un momento pero mantienen la preocupación. La terapia cognitivo-conductual trabaja reduciéndolos de a poco (Cash, 2008).',
          ],
        },
        {
          heading: 'En casa',
          paragraphs: [
            'Los chicos aprenden mucho de cómo se habla de los cuerpos en su casa. Los comentarios sobre el peso, aunque sean «por su bien», se asocian a más insatisfacción y más conductas alimentarias de riesgo (Neumark-Sztainer y colaboradores, 2010).',
            'Ayuda no comentar cuerpos, hablar de la comida en términos de sabor y de momentos compartidos, y que los adultos se traten con amabilidad delante de los chicos.',
          ],
        },
        {
          heading: 'Cuándo consultar',
          paragraphs: [
            'La preocupación por el cuerpo es muy común. Pero a veces se vuelve un trastorno de la conducta alimentaria. Las señales son: dejar de comer o comer muy poco, vomitar o usar laxantes, hacer ejercicio para compensar, tener atracones, bajar mucho de peso o pensar en el cuerpo casi todo el día.',
            'Los trastornos alimentarios tienen tratamiento, y cuanto antes, mejor. Consulta con un médico o un equipo de salud mental. Si hay mareos, desmayos o debilidad, es una urgencia.',
          ],
        },
      ],
      caveat: {
        title: 'Qué no hay en esta sección',
        body: 'Aquí no vas a encontrar dietas, planes para bajar de peso ni números de peso o talle. No es lo que mejora la imagen corporal y puede hacer daño a quien está en riesgo de un trastorno alimentario. La exposición al espejo tiene evidencia, pero es intensa: hazla en un momento estable y, si puedes, acompañado por un profesional.',
      },
      diagram: {
        title: 'Cómo se mantiene el malestar con el cuerpo',
        nodes: ['Comparación o comentario sobre el cuerpo', 'Pensamiento crítico («me veo mal»)', 'Chequeo o evitación', 'Alivio breve', 'Más atención puesta en la apariencia'],
        caption: 'Mirar lo que el cuerpo hace, tratarse con amabilidad y reducir los chequeos cortan el ciclo.',
      },
      related: { practices: ['lo-que-mi-cuerpo-hace', 'carta-compasiva-a-mi-cuerpo', 'mi-feed-y-mi-cuerpo', 'chequeos-y-evitaciones', 'espejo-con-palabras-neutras', 'hablar-del-cuerpo-en-casa'], articles: ['autocompasion'] },
      references: [TYLKA_2015, ALLEVA_2015, ALBERTSON_2015, FARDOULY_2015, TIGGEMANN_2015, CASH_2008, FAIRBURN_2008, GRIFFEN_2018, NEUMARK_2010],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'en-paz-con-mi-cuerpo',
      title: 'En paz con mi cuerpo',
      subtitle: 'Cuatro semanas para cambiar la relación con tu cuerpo, no tu cuerpo',
      description:
        'Mirarás tu cuerpo por lo que hace, practicarás hablarte con amabilidad, ordenarás lo que miras en redes y reducirás chequeos y evitaciones. No hay dietas ni metas de peso. Si notas señales de un trastorno alimentario, consulta antes de empezar.',
      basis: 'Alleva y colaboradores (2015); Albertson, Neff y Dill-Shackleford (2015); Cash (2008).',
      rhythm: '10 minutos, 4 o 5 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Lo que hace',
          focus: 'El cuerpo por sus funciones',
          description: 'Leerás qué es la imagen corporal y escribirás sobre lo que tu cuerpo te permite hacer y sentir.',
          practiceIds: ['lo-que-mi-cuerpo-hace'],
          articleIds: ['imagen-corporal'],
          journalType: 'tres-cosas',
        },
        {
          title: 'Semana 2 · Una voz amable',
          focus: 'Autocompasión frente a la crítica',
          description: 'Practicarás responder a la crítica sobre tu cuerpo con la voz que usarías con un amigo.',
          practiceIds: ['carta-compasiva-a-mi-cuerpo', 'pausa-autocompasion'],
          articleIds: [],
          journalType: 'carta-compasiva',
        },
        {
          title: 'Semana 3 · Lo que miro',
          focus: 'Redes y comparación',
          description: 'Revisarás qué contenidos te dejan peor y armarás un entorno de redes más amable.',
          practiceIds: ['mi-feed-y-mi-cuerpo'],
          articleIds: [],
          journalType: 'defusion',
        },
        {
          title: 'Semana 4 · Menos chequeos',
          focus: 'Chequeos, evitaciones y casa',
          description: 'Reducirás una conducta de chequeo o evitación y revisarás cómo se habla de los cuerpos en tu casa.',
          practiceIds: ['chequeos-y-evitaciones', 'hablar-del-cuerpo-en-casa'],
          articleIds: [],
          journalType: 'experimento',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-imagen-corporal',
      title: 'No es tu cuerpo: es cómo lo miras',
      subtitle: 'Qué es la imagen corporal y qué la mejora.',
      slides: [
        { heading: 'Imagen corporal', text: 'Es lo que percibes, piensas y sientes sobre tu cuerpo. No es el cuerpo en sí.' },
        { heading: 'No hace falta cambiarlo', text: 'Dos personas con cuerpos parecidos pueden vivirlos muy distinto. Lo que cambia es la relación.' },
        { heading: 'Lo que hace', text: 'Tu cuerpo te lleva, te deja sentir y estar con otros. Mirarlo así mejora cómo lo vives.' },
        { heading: 'Una voz amable', text: 'Hablarte como a un amigo baja la vergüenza. No tienes que decir que te encanta, sólo no maltratarte.' },
        { heading: 'Cuándo consultar', text: 'Si dejas de comer, vomitas, compensas con ejercicio o tienes atracones, consulta pronto. Tiene tratamiento.' },
      ],
      related: { practices: ['lo-que-mi-cuerpo-hace', 'carta-compasiva-a-mi-cuerpo'], articles: ['imagen-corporal'] },
      references: [TYLKA_2015, ALLEVA_2015, ALBERTSON_2015],
    },
    {
      id: 'pildora-redes-y-cuerpo',
      title: 'Las redes no son un espejo',
      subtitle: 'Comparación, retoques y qué hacer.',
      slides: [
        { heading: 'Imágenes elegidas', text: 'Las fotos de las redes están elegidas, iluminadas y muchas veces retocadas. No son la vida real.' },
        { heading: 'Comparar duele', text: 'Compararte con esas fotos empeora tu ánimo y cómo ves tu cuerpo. Así lo muestran los estudios.' },
        { heading: 'Ni siquiera el fitness', text: 'Las fotos de «inspiración fitness» también hacen sentir peor, aunque prometan lo contrario.' },
        { heading: 'Elige qué miras', text: 'Silencia las cuentas que te dejan peor. Suma cuentas de cosas que te gustan y no giran alrededor de cuerpos.' },
        { heading: 'Nómbralo', text: 'Cuando te notes comparando, dite «estoy comparando». Cierra la aplicación un rato.' },
      ],
      related: { practices: ['mi-feed-y-mi-cuerpo'], articles: ['imagen-corporal'] },
      references: [FARDOULY_2015, TIGGEMANN_2015],
    },
    {
      id: 'pildora-chequeos',
      title: 'Mirarte en cada vidrio',
      subtitle: 'Por qué los chequeos no calman.',
      slides: [
        { heading: 'Chequear', text: 'Mirarte en cada vidrio, pellizcarte o pesarte seguido. Son formas de chequear el cuerpo.' },
        { heading: 'Evitar', text: 'No ir a la playa, no sacarte fotos, taparte con ropa grande. Son formas de evitar.' },
        { heading: 'Alivio corto', text: 'Las dos alivian un rato. Pero el chequeo siempre encuentra un defecto, porque busca eso.' },
        { heading: 'De a poco', text: 'Elige una conducta y redúcela un poco esta semana. Por ejemplo, mírate sólo al vestirte.' },
        { heading: 'Con ayuda', text: 'Si pesarte o la comida ocupan gran parte de tu día, hazlo con un profesional.' },
      ],
      related: { practices: ['chequeos-y-evitaciones'], articles: ['imagen-corporal'] },
      references: [CASH_2008, FAIRBURN_2008],
    },
    {
      id: 'pildora-cuerpos-en-casa',
      title: 'En casa no comentamos cuerpos',
      subtitle: 'Cómo hablar de cuerpos y comida con los chicos.',
      slides: [
        { heading: 'Los chicos escuchan', text: 'Los chicos aprenden de cómo se habla de los cuerpos en su casa. También de cómo te hablas tú.' },
        { heading: 'Los comentarios pesan', text: 'Los comentarios sobre el peso, aunque sean por su bien, se asocian a más dietas y malestar.' },
        { heading: 'Un acuerdo simple', text: 'No comentar el cuerpo de nadie, ni para criticar ni para elogiar. Elogiar lo que hacen y cómo tratan a otros.' },
        { heading: 'La comida', text: 'Hablar de sabor, energía y momentos juntos. No de «engordar» ni de comida buena o mala.' },
        { heading: 'Señales', text: 'Si un chico come muy poco, vomita o baja de peso sin explicación, consulta pronto con su pediatra.' },
      ],
      related: { practices: ['hablar-del-cuerpo-en-casa'], articles: ['imagen-corporal'] },
      references: [NEUMARK_2010],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'imagen-corporal', term: 'Imagen corporal', definition: 'Lo que una persona percibe, piensa y siente sobre su cuerpo. No es el cuerpo en sí, por eso puede cambiar sin cambiarlo.', articleId: 'imagen-corporal' },
    { id: 'funcionalidad-corporal', term: 'Funcionalidad corporal', definition: 'Todo lo que el cuerpo permite hacer, sentir, crear y vivir. Mirarla mejora la imagen corporal.', practiceId: 'lo-que-mi-cuerpo-hace' },
    { id: 'apreciacion-corporal', term: 'Apreciación corporal', definition: 'Aceptar, respetar y valorar el propio cuerpo, sus funciones y su salud, más allá de cómo se ve.', articleId: 'imagen-corporal' },
    { id: 'comparacion-social', term: 'Comparación hacia arriba', definition: 'Compararse con personas que uno percibe como mejores, por ejemplo en las redes. Suele empeorar el ánimo y la imagen corporal.', practiceId: 'mi-feed-y-mi-cuerpo' },
    { id: 'chequeo-corporal', term: 'Chequeo corporal', definition: 'Revisar el cuerpo de forma repetida, como mirarse en cada vidrio o pesarse seguido. Alivia un momento y mantiene la preocupación.', practiceId: 'chequeos-y-evitaciones' },
  ],
};
