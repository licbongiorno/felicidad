import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Estudiantes y exámenes» (secundario final, terciario, universidad):
 *  - estudiar recordando y repartiendo el repaso (Roediger y Karpicke; Dunlosky y colaboradores; Cepeda y colaboradores);
 *  - nervios antes y durante el examen: reevaluar la activación (Jamieson y colaboradores; Brooks);
 *  - escribir las preocupaciones antes del examen (Ramirez y Beilock), presentado con evidencia preliminar
 *    porque las réplicas posteriores fueron mixtas;
 *  - después de un examen que salió mal: autocompasión y aprendizaje (Breines y Chen; Wohl, Pychyl y Bennett);
 *  - sueño y estudio (Gillen-O'Neel, Huynh y Fuligni; Rasch y Born).
 *
 * La postergación y el sueño ya tienen prácticas propias en la app ('cinco-minutos', 'empezar-imperfecto',
 * 'habito-minimo', 'rutina-bajada-dormir', 'creencias-sobre-el-sueno'): aquí se enlazan, no se repiten.
 *
 * Seguridad: la ansiedad ante los exámenes es común y no es una enfermedad. Si es tan intensa que impide
 * rendir, provoca ataques de pánico o viene con desánimo persistente o ideas de no querer vivir, se remite
 * a consulta y a los recursos de ayuda de la app.
 */

const ROEDIGER_2006: Reference = {
  citation: 'Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. Psychological Science, 17(3), 249–255.',
  doi: '10.1111/j.1467-9280.2006.01693.x',
};
const DUNLOSKY_2013: Reference = {
  citation:
    'Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students’ learning with effective learning techniques: Promising directions from cognitive and educational psychology. Psychological Science in the Public Interest, 14(1), 4–58.',
  doi: '10.1177/1529100612453266',
};
const CEPEDA_2006: Reference = {
  citation: 'Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006). Distributed practice in verbal recall tasks: A review and quantitative synthesis. Psychological Bulletin, 132(3), 354–380.',
};
const JAMIESON_2010: Reference = {
  citation: 'Jamieson, J. P., Mendes, W. B., Blackstock, E., & Schmader, T. (2010). Turning the knots in your stomach into bows: Reappraising arousal improves performance on the GRE. Journal of Experimental Social Psychology, 46(1), 208–212.',
};
const JAMIESON_2012: Reference = {
  citation: 'Jamieson, J. P., Nock, M. K., & Mendes, W. B. (2012). Mind over matter: Reappraising arousal improves cardiovascular and cognitive responses to stress. Journal of Experimental Psychology: General, 141(3), 417–422.',
};
const BROOKS_2014: Reference = {
  citation: 'Brooks, A. W. (2014). Get excited: Reappraising pre-performance anxiety as excitement. Journal of Experimental Psychology: General, 143(3), 1144–1158.',
};
const HEMBREE_1988: Reference = {
  citation: 'Hembree, R. (1988). Correlates, causes, effects, and treatment of test anxiety. Review of Educational Research, 58(1), 47–77.',
};
const RAMIREZ_2011: Reference = {
  citation: 'Ramirez, G., & Beilock, S. L. (2011). Writing about testing worries boosts exam performance in the classroom. Science, 331(6014), 211–213.',
  doi: '10.1126/science.1199427',
  note: 'Los intentos posteriores de repetir el efecto dieron resultados mixtos.',
};
const PARK_2014: Reference = {
  citation: 'Park, D., Ramirez, G., & Beilock, S. L. (2014). The role of expressive writing in math anxiety. Journal of Experimental Psychology: Applied, 20(2), 103–111.',
};
const FRATTAROLI_2006: Reference = {
  citation: 'Frattaroli, J. (2006). Experimental disclosure and its moderators: A meta-analysis. Psychological Bulletin, 132(6), 823–865.',
};
const BREINES_2012: Reference = {
  citation: 'Breines, J. G., & Chen, S. (2012). Self-compassion increases self-improvement motivation. Personality and Social Psychology Bulletin, 38(9), 1133–1143.',
};
const WOHL_2010: Reference = {
  citation:
    'Wohl, M. J. A., Pychyl, T. A., & Bennett, S. H. (2010). I forgive myself, now I can study: How self-forgiveness for procrastinating can reduce future procrastination. Personality and Individual Differences, 48(7), 803–808.',
};
const STEEL_2007: Reference = {
  citation: 'Steel, P. (2007). The nature of procrastination: A meta-analytic and theoretical review of quintessential self-regulatory failure. Psychological Bulletin, 133(1), 65–94.',
};
const GILLEN_ONEEL_2013: Reference = {
  citation: 'Gillen-O’Neel, C., Huynh, V. W., & Fuligni, A. J. (2013). To study or to sleep? The academic costs of extra studying at the expense of sleep. Child Development, 84(1), 133–142.',
};
const RASCH_2013: Reference = {
  citation: 'Rasch, B., & Born, J. (2013). About sleep’s role in memory. Physiological Reviews, 93(2), 681–766.',
};

/** Aviso común: cuándo la ansiedad ante los exámenes pide algo más que autoayuda. */
const CONSULTA =
  'Si los nervios te impiden rendir una y otra vez, tienes ataques de pánico o dejas de presentarte a los exámenes, consulta con un profesional de salud mental o con el servicio de orientación de tu institución. Si aparecen ideas de no querer vivir, usa el botón Ayuda o llama al 135 (CABA y GBA) o al 0800-345-1435.';

export const ESTUDIANTES_EXAMENES_PACK: ContentPack = {
  id: 'estudiantes-examenes',

  // ================================================================== prácticas
  practices: [
    {
      id: 'nervios-que-preparan',
      title: 'Nervios que te preparan',
      family: 'deconstructive',
      skills: ['resilience', 'attention'],
      summary: 'Antes o durante un examen, leer el corazón rápido y la tensión como el cuerpo preparándose para rendir, no como una señal de que vas a fallar.',
      mechanism: 'Interpretar la activación como energía útil, en lugar de intentar suprimirla, mejora la respuesta del cuerpo al estrés y el rendimiento en pruebas.',
      evidenceLevel: 'moderada',
      evidence: [JAMIESON_2010, JAMIESON_2012, BROOKS_2014],
      micro: true,
      howItWorks: [
        'Jeremy Jamieson y su equipo dieron a un grupo de estudiantes un mensaje breve antes de un examen de práctica: la activación no daña el rendimiento y hasta puede ayudar. Ese grupo rindió mejor en matemática que el grupo que no lo recibió (Jamieson y colaboradores, 2010).',
        'En otro estudio, reinterpretar la activación cambió la respuesta del corazón y los vasos sanguíneos hacia un patrón de desafío, más eficiente (Jamieson y colaboradores, 2012). Alison Wood Brooks encontró algo parecido: decir «esto me entusiasma» ayudó más que intentar calmarse (Brooks, 2014).',
        'La idea no es negar los nervios ni fingir calma. Es cambiar lo que te dices sobre ellos. El cuerpo se acelera porque algo te importa.',
      ],
      tips: [
        'Úsala en el pasillo, antes de entrar, o en el banco si te trabas.',
        'Si te quedas en blanco, deja esa pregunta. Pasa a una que sepas y vuelve después.',
        'Practícala antes en un examen de prueba, así ya la conoces el día real.',
      ],
      obstacles: [
        { q: 'No me lo creo: los nervios me arruinan.', a: 'No hace falta creerlo del todo. Basta con dejar de pelear con la sensación. Prueba decir: «Mi cuerpo se está preparando».' },
        { q: 'Siento que me ahogo o me desmayo.', a: 'Si te pasa seguido, consulta con un médico o un profesional de salud mental. Puede ser un ataque de pánico y tiene tratamiento.' },
      ],
      steps: [
        { title: 'Notar', instruction: 'Nota lo que siente tu cuerpo. Quizá el corazón rápido, las manos frías o un nudo en la panza.', durationSec: 25, kind: 'reflection' },
        { title: 'Nombrar', instruction: 'Dite en voz baja: «Esto es activación. Mi cuerpo se prepara para rendir».', durationSec: 25, kind: 'instruction' },
        { title: 'Para qué sirve', instruction: 'El corazón manda más sangre y oxígeno al cerebro. Es energía para pensar. No hace falta que se vaya.', durationSec: 30, kind: 'reflection' },
        { title: 'Soltar el aire', instruction: 'Exhala largo por la boca, como si soplaras una vela sin apagarla. Repite tres veces.', durationSec: 30, kind: 'breath' },
        { title: 'Los pies', instruction: 'Apoya los pies en el piso. Siente el peso del cuerpo en la silla.', durationSec: 20, kind: 'instruction' },
        { title: 'Un paso', instruction: 'Elige lo próximo que harás. Leer la primera consigna, o empezar por la pregunta que mejor sabes.', durationSec: 25, kind: 'instruction' },
      ],
    },
    {
      id: 'repasar-sin-mirar',
      title: 'Repasar sin mirar',
      family: 'attentional',
      skills: ['attention', 'resilience'],
      summary: 'Estudiar intentando recordar con el apunte cerrado y repartir los repasos en varios días, en lugar de releer y subrayar.',
      mechanism: 'Traer la información a la memoria, y hacerlo en días separados, la fija mejor que volver a leerla. Además muestra con honestidad qué sabes y qué no.',
      evidenceLevel: 'robusta',
      evidence: [ROEDIGER_2006, DUNLOSKY_2013, CEPEDA_2006],
      howItWorks: [
        'Henry Roediger y Jeffrey Karpicke compararon dos formas de estudiar un texto. Un grupo lo releía. Otro lo leía una vez y después intentaba recordarlo por escrito. A la semana, el segundo grupo recordaba más, aunque los que releían se sentían más seguros (Roediger y Karpicke, 2006).',
        'Una revisión grande de técnicas de estudio dio la nota más alta a dos: practicar recordando y repartir el estudio en el tiempo. Releer, subrayar y resumir quedaron con utilidad baja (Dunlosky y colaboradores, 2013). Repartir el repaso en varias sesiones gana a estudiar todo de una vez (Cepeda y colaboradores, 2006).',
        'Releer da una sensación de que ya sabes, porque el texto te resulta conocido. Recordar sin mirar cuesta más, y ese esfuerzo es justamente lo que ayuda.',
      ],
      tips: [
        'Convierte cada título del apunte en una pregunta y respóndela sin mirar.',
        'Usa exámenes viejos o preguntas del final de cada capítulo.',
        'Explícale el tema en voz alta a alguien, o a una silla vacía.',
        'Si vienes postergando el estudio, empieza con la regla de los cinco minutos.',
      ],
      obstacles: [
        { q: 'Me acuerdo de muy poco y me desanimo.', a: 'Es normal al principio, y es información útil: ahora sabes qué repasar. Recordar poco hoy suele dar mejores resultados que releer mucho.' },
        { q: 'El examen es pasado mañana.', a: 'Igual sirve. Reparte lo que queda en dos o tres sesiones cortas con pausas, y en cada una practica recordar. Y duerme: el sueño también fija lo estudiado.' },
      ],
      steps: [
        { title: 'Elegir', instruction: 'Elige un tema chico del examen. Por ejemplo, un capítulo o una clase.', durationSec: 30, kind: 'instruction' },
        { title: 'Leer una vez', instruction: 'Lee el apunte de ese tema una sola vez, con atención. Después ciérralo.', durationSec: 300, kind: 'instruction' },
        { title: 'Recordar', instruction: 'En una hoja en blanco, escribe todo lo que recuerdes. Ideas, ejemplos, esquemas. Sin mirar.', durationSec: 240, kind: 'reflection' },
        { title: 'Comparar', instruction: 'Abre el apunte y compara. Marca con otro color lo que faltó o estaba mal.', durationSec: 120, kind: 'reflection' },
        { title: 'Otra vez', instruction: 'Cierra el apunte y vuelve a escribir sólo lo que te faltó.', durationSec: 120, kind: 'reflection' },
        { title: 'Agendar', instruction: 'Anota en tu agenda dos repasos más de este tema: mañana y dentro de tres o cuatro días.', durationSec: 40, kind: 'instruction' },
      ],
    },
    {
      id: 'escribir-antes-del-examen',
      title: 'Escribir las preocupaciones antes del examen',
      family: 'deconstructive',
      skills: ['attention', 'resilience'],
      summary: 'Diez minutos antes de un examen, escribir con franqueza lo que te preocupa de él, para que esas ideas ocupen menos lugar mientras rindes.',
      mechanism: 'Poner las preocupaciones en papel podría liberar parte de la memoria de trabajo que se gasta en ellas. Es una hipótesis con evidencia mixta.',
      evidenceLevel: 'preliminar',
      evidence: [RAMIREZ_2011, PARK_2014, FRATTAROLI_2006],
      howItWorks: [
        'Gerardo Ramirez y Sian Beilock pidieron a estudiantes que escribieran sus preocupaciones durante diez minutos antes de un examen. Les fue mejor que a quienes no escribieron, sobre todo a quienes tenían más ansiedad ante los exámenes (Ramirez y Beilock, 2011). Un estudio posterior del mismo equipo encontró algo parecido con la ansiedad matemática (Park y colaboradores, 2014).',
        'Hay que ser honestos: los intentos posteriores de repetir el resultado dieron resultados mixtos. En algunos estudios ayudó y en otros no hubo diferencia. Por eso la presentamos como algo para probar, no como una técnica segura.',
        'La escritura expresiva en general tiene efectos pequeños pero reales en el bienestar (Frattaroli, 2006). Si a ti te ayuda a llegar con más calma al examen, vale la pena. Si te pone peor, déjala.',
      ],
      tips: [
        'Escribe a mano o en el celular, lo que te resulte más fácil.',
        'No hace falta escribir bien. Nadie lo va a leer.',
        'Pruébala primero antes de un examen de práctica o un parcial menos importante.',
      ],
      obstacles: [
        { q: 'Al escribir me pongo peor.', a: 'Puede pasar. Termina con la respiración larga y los pies en el piso. Si siempre te pasa, usa en su lugar «Nervios que te preparan».' },
        { q: 'No tengo diez minutos antes de entrar.', a: 'Prueba con cinco, en el colectivo o en el pasillo. O hazla la noche anterior.' },
      ],
      cautions: CONSULTA,
      steps: [
        { title: 'Preparar', instruction: 'Busca un lugar tranquilo, unos diez minutos antes del examen. Ten a mano papel o el celular.', durationSec: 30, kind: 'instruction' },
        { title: 'Lo que temo', instruction: 'Escribe sin parar lo que te preocupa de este examen. Lo que temes que pase y lo que significaría para ti.', durationSec: 240, kind: 'reflection' },
        { title: 'Lo que siento', instruction: 'Escribe también qué sientes ahora, en el cuerpo y en la cabeza. Con tus palabras, sin corregir.', durationSec: 120, kind: 'reflection' },
        { title: 'Dejarlo ahí', instruction: 'Dobla la hoja o cierra la nota. Dite: «Esto ya está escrito. Ahora voy a rendir».', durationSec: 30, kind: 'instruction' },
        { title: 'Volver al cuerpo', instruction: 'Exhala largo tres veces. Siente los pies en el piso.', durationSec: 40, kind: 'breath' },
      ],
    },
    {
      id: 'despues-de-un-mal-examen',
      title: 'Después de un examen que salió mal',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Tratarte con amabilidad tras un mal resultado y, cuando baje la angustia, mirar qué pasó para preparar mejor el próximo.',
      mechanism: 'La autocompasión después de un fracaso aumenta las ganas de mejorar. Perdonarte por haber postergado se asocia a postergar menos la vez siguiente.',
      evidenceLevel: 'moderada',
      evidence: [BREINES_2012, WOHL_2010],
      howItWorks: [
        'Juliana Breines y Serena Chen pidieron a estudiantes que pensaran en un error o un fracaso. Quienes se trataron con autocompasión tuvieron más ganas de mejorar. En uno de sus estudios, después de un examen difícil, estudiaron más tiempo para el siguiente (Breines y Chen, 2012).',
        'Michael Wohl y su equipo siguieron a estudiantes universitarios entre dos parciales. Quienes se perdonaron por haber postergado antes del primero postergaron menos antes del segundo (Wohl y colaboradores, 2010).',
        'Castigarse no prepara mejor. Al contrario: suele llevar a evitar el tema. Primero se baja la angustia, después se aprende.',
      ],
      tips: [
        'Espera a que pase la primera ola, un día o dos, antes de analizar.',
        'Pide ver el examen corregido. Es la mejor guía para el próximo.',
        'Habla con el docente o con alguien que ya cursó la materia.',
        'Un examen dice cómo te fue ese día, no cuánto vales.',
      ],
      obstacles: [
        { q: 'Si me trato bien, me voy a relajar.', a: 'Los estudios muestran lo contrario: la amabilidad hace más fácil mirar el error sin escapar. Ser amable no es decir que no importa.' },
        { q: 'Ya me fue mal muchas veces.', a: 'Si sientes que no sirves para estudiar, o el desánimo dura semanas, consulta. A veces hay algo más, como un TDAH o una depresión, y tiene ayuda.' },
      ],
      steps: [
        { title: 'Parar', instruction: 'Pon una mano en el pecho. Respira despacio tres veces.', durationSec: 30, kind: 'breath' },
        { title: 'Reconocer', instruction: 'Dite: «Esto duele. Me importaba y me fue mal». No hace falta minimizarlo.', durationSec: 30, kind: 'reflection' },
        { title: 'No es sólo a ti', instruction: 'Recuerda que casi todo estudiante pasa por un examen malo. Dite: «A mucha gente le pasa».', durationSec: 30, kind: 'reflection' },
        { title: 'Una voz amable', instruction: '¿Qué le dirías a un amigo que acaba de desaprobar? Escríbelo y léelo para ti.', durationSec: 60, kind: 'reflection' },
        { title: 'Qué pasó', instruction: 'Cuando baje la angustia, anota qué influyó. Cómo estudiaste, cuánto dormiste, qué pasó en el examen.', durationSec: 90, kind: 'reflection' },
        { title: 'Lo que depende de ti', instruction: 'Marca lo que sí puedes cambiar. Por ejemplo, empezar antes o practicar con exámenes viejos.', durationSec: 60, kind: 'reflection' },
        { title: 'Un paso', instruction: 'Elige un solo cambio para la próxima vez y anótalo con fecha.', durationSec: 40, kind: 'reflection' },
      ],
    },
    {
      id: 'semana-de-examenes-y-sueno',
      title: 'Estudiar sin robarle horas al sueño',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Armar la semana de exámenes con un horario de corte para el estudio y una hora fija de levantarte, para que el sueño también trabaje a tu favor.',
      mechanism: 'Durante el sueño la memoria se consolida. Restar horas de sueño para estudiar más suele empeorar el rendimiento del día siguiente.',
      evidenceLevel: 'moderada',
      evidence: [GILLEN_ONEEL_2013, RASCH_2013],
      howItWorks: [
        'Un estudio siguió a estudiantes secundarios durante varias semanas. Los días en que dormían menos para estudiar más tenían, al día siguiente, más problemas para entender en clase y les iba peor en las pruebas (Gillen-O’Neel y colaboradores, 2013).',
        'Mientras duermes, el cerebro repasa y ordena lo que aprendiste durante el día. Dormir después de estudiar ayuda a fijar la memoria (Rasch y Born, 2013). Por eso trasnochar suele salir caro.',
        'Si tienes insomnio que dura semanas, la app tiene un programa basado en la terapia cognitivo-conductual para el insomnio.',
      ],
      tips: [
        'Deja la última hora antes de dormir sin estudio y con poca pantalla.',
        'Evita el café y las bebidas energizantes desde la tarde.',
        'Si un tema no entra de noche, anótalo y retómalo a la mañana.',
        'Una siesta corta, de unos veinte minutos, puede ayudar sin quitarte el sueño de la noche.',
      ],
      obstacles: [
        { q: 'No me alcanza el tiempo si duermo.', a: 'Mira cuánto rindes de madrugada. Muchas veces se lee sin retener. Una hora de práctica recordando de día rinde más que tres de relectura a la noche.' },
        { q: 'La noche antes no puedo dormir de los nervios.', a: 'Es muy común. Una mala noche aislada no arruina un examen. Haz la rutina de bajada y no te quedes peleando en la cama.' },
      ],
      steps: [
        { title: 'La semana', instruction: 'Escribe las fechas de tus exámenes de las próximas dos semanas.', durationSec: 45, kind: 'reflection' },
        { title: 'Levantarte', instruction: 'Elige una hora fija para levantarte todos los días, también los fines de semana.', durationSec: 40, kind: 'reflection' },
        { title: 'La hora de corte', instruction: 'Resta unas ocho horas de sueño y una hora más de bajada. Esa es tu hora de dejar de estudiar.', durationSec: 60, kind: 'reflection' },
        { title: 'Los bloques', instruction: 'Reparte el estudio en bloques de día, con pausas. Pon lo más difícil cuando tengas más energía.', durationSec: 90, kind: 'reflection' },
        { title: 'Repasos', instruction: 'Agenda un repaso corto de cada tema el día antes, sin dejar temas nuevos para la última noche.', durationSec: 60, kind: 'reflection' },
        { title: 'La noche antes', instruction: 'Decide qué harás la noche previa. Un repaso liviano, preparar lo que llevas y la rutina de bajada.', durationSec: 45, kind: 'reflection' },
      ],
    },
  ],

  meta: {
    'nervios-que-preparan': { level: 'iniciacion', approaches: ['tcc'], module: 'afrontamiento' },
    'repasar-sin-mirar': { level: 'iniciacion', approaches: ['tcc'], module: 'habitos' },
    'escribir-antes-del-examen': { level: 'intermedio', approaches: ['escritura'], module: 'afrontamiento', prerequisites: ['nervios-que-preparan'] },
    'despues-de-un-mal-examen': { level: 'intermedio', approaches: ['cft', 'tcc'], module: 'autocompasion', prerequisites: ['pausa-autocompasion'] },
    'semana-de-examenes-y-sueno': { level: 'iniciacion', approaches: ['tcc'], module: 'sueno' },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'estudiar-y-rendir-examenes',
      title: 'Estudiar y rendir con menos ansiedad',
      subtitle: 'Cómo estudiar según la investigación, qué hacer con los nervios, la postergación y el sueño, y cómo seguir después de un mal examen.',
      category: 'Etapas de la vida',
      readingMin: 10,
      keyPoints: [
        'Recordar sin mirar y repartir el estudio en varios días rinde más que releer y subrayar.',
        'Los nervios antes de un examen son normales. Leerlos como energía ayuda más que pelear con ellos.',
        'Escribir las preocupaciones antes de rendir puede ayudar, pero su evidencia es mixta.',
        'Postergar suele ser una forma de escapar del malestar. Se trabaja empezando en chico.',
        'Dormir es parte del estudio. Y después de un mal examen, la amabilidad ayuda a mejorar.',
      ],
      sections: [
        {
          heading: 'Cómo estudiar mejor',
          paragraphs: [
            'Muchos estudiantes releen el apunte y subrayan. Da la sensación de saber, porque el texto resulta conocido. Pero reconocer no es lo mismo que recordar.',
            'Una revisión grande de técnicas de estudio dio la nota más alta a dos: practicar recordando, por ejemplo con preguntas o exámenes viejos, y repartir el estudio en varios días (Dunlosky y colaboradores, 2013). En un experimento clásico, quienes practicaron recordar un texto lo recordaban mejor una semana después que quienes lo releyeron (Roediger y Karpicke, 2006).',
            'Repartir los repasos también importa. Estudiar un tema en tres sesiones separadas suele dejar más que estudiarlo una vez durante el mismo tiempo (Cepeda y colaboradores, 2006).',
          ],
        },
        {
          heading: 'Los nervios antes y durante el examen',
          paragraphs: [
            'La ansiedad ante los exámenes es muy común. Cuando es alta se asocia a peor rendimiento, porque las preocupaciones ocupan lugar en la cabeza (Hembree, 1988). La meta no es dejar de sentir nervios, sino que no manejen el examen.',
            'Una herramienta con buen apoyo es reinterpretar la activación. El corazón rápido y la tensión son el cuerpo preparándose. Estudiantes que recibieron este mensaje antes de un examen rindieron mejor (Jamieson y colaboradores, 2010). Decir «esto me entusiasma» ayudó más que intentar calmarse (Brooks, 2014).',
            'Si te quedas en blanco durante el examen, suelta el aire largo, apoya los pies y pasa a una pregunta que sepas. Muchas veces el recuerdo vuelve solo cuando bajas la presión.',
          ],
        },
        {
          heading: 'Escribir antes de rendir: lo que sabemos y lo que no',
          paragraphs: [
            'Un estudio publicado en la revista Science encontró que escribir diez minutos sobre las preocupaciones antes de un examen mejoró las notas, sobre todo en estudiantes muy ansiosos (Ramirez y Beilock, 2011).',
            'Los intentos posteriores de repetir ese resultado dieron resultados mixtos: en algunos estudios ayudó y en otros no hubo diferencia. Por eso conviene tomarlo como un experimento personal. Si te ayuda, úsalo. Si no, hay otras herramientas.',
          ],
        },
        {
          heading: 'La postergación',
          paragraphs: [
            'Postergar no es vagancia. Suele ser una forma de escapar del malestar que da la tarea: aburrimiento, miedo a no entender o a hacerlo mal. Cuanto más lejos está el examen, más fácil es dejarlo para después (Steel, 2007).',
            'En la app hay prácticas para esto. La regla de los cinco minutos baja la exigencia de empezar. «Empezar imperfecto» ayuda si postergas por miedo a no estar a la altura. Y perdonarte por haber postergado, en lugar de castigarte, se asocia a postergar menos la vez siguiente (Wohl y colaboradores, 2010).',
          ],
        },
        {
          heading: 'Dormir también es estudiar',
          paragraphs: [
            'Mientras duermes, el cerebro consolida lo que aprendiste (Rasch y Born, 2013). En un estudio con estudiantes secundarios, los días en que dormían menos para estudiar más les iba peor al día siguiente (Gillen-O’Neel y colaboradores, 2013).',
            'Ayuda fijar una hora de levantarte, poner una hora de corte para el estudio y no dejar temas nuevos para la última noche. Una mala noche aislada antes de un examen es común y no arruina el resultado.',
          ],
        },
        {
          heading: 'Después de un examen que salió mal',
          paragraphs: [
            'Un mal resultado duele, y tiene sentido. Lo que ayuda a mejorar no es castigarse, sino tratarse con amabilidad y después mirar qué pasó. En estudios con universitarios, la autocompasión tras un fracaso aumentó las ganas de mejorar y el tiempo de estudio (Breines y Chen, 2012).',
            'Pide ver el examen corregido, separa lo que dependía de ti de lo que no, y elige un solo cambio para la próxima vez.',
          ],
        },
        {
          heading: 'Cuándo consultar',
          paragraphs: [
            'Consulta con un profesional, o con el servicio de orientación de tu institución, si la ansiedad te impide presentarte a los exámenes, si tienes ataques de pánico, o si el desánimo dura semanas. También si sientes que siempre te cuesta mucho más que a otros concentrarte: a veces hay un TDAH sin diagnosticar.',
            'Si aparecen ideas de no querer vivir, usa el botón Ayuda de la app o llama al 135 (CABA y GBA) o al 0800-345-1435 desde el resto del país.',
          ],
        },
      ],
      caveat: {
        title: 'Qué tan firme es cada cosa',
        body: 'Lo más sólido es cómo estudiar: practicar recordando y repartir el estudio tienen muchos estudios a favor. Reinterpretar los nervios tiene apoyo moderado, con experimentos bien hechos pero no tantos. La escritura antes del examen es preliminar: el primer estudio fue llamativo y las réplicas fueron mixtas. Nada de esto reemplaza un tratamiento si la ansiedad es muy intensa.',
      },
      diagram: {
        title: 'Cómo se mantiene la ansiedad ante los exámenes',
        nodes: ['Se acerca un examen', 'Ansiedad y miedo a fallar', 'Postergar o releer sin practicar', 'Alivio breve', 'Menos preparación real y menos sueño'],
        caption: 'Empezar en chico, estudiar recordando y cuidar el sueño cortan el ciclo.',
      },
      related: {
        practices: ['repasar-sin-mirar', 'nervios-que-preparan', 'escribir-antes-del-examen', 'despues-de-un-mal-examen', 'semana-de-examenes-y-sueno', 'cinco-minutos', 'empezar-imperfecto', 'rutina-bajada-dormir'],
        articles: ['procrastinacion-y-perfeccionismo', 'sueno-y-bienestar', 'autocompasion'],
      },
      references: [DUNLOSKY_2013, ROEDIGER_2006, CEPEDA_2006, HEMBREE_1988, JAMIESON_2010, JAMIESON_2012, BROOKS_2014, RAMIREZ_2011, PARK_2014, STEEL_2007, WOHL_2010, RASCH_2013, GILLEN_ONEEL_2013, BREINES_2012],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'temporada-de-examenes',
      title: 'Temporada de exámenes',
      subtitle: 'Cuatro semanas para estudiar mejor, rendir con menos ansiedad y seguir después de un mal resultado',
      description:
        'Aprenderás a estudiar recordando y repartiendo el repaso, a empezar aunque cueste, a leer los nervios como energía y a proteger el sueño. La última semana es para lo que pasa después del examen. Si la ansiedad te impide rendir, consulta además con un profesional.',
      basis: 'Roediger y Karpicke (2006); Dunlosky y colaboradores (2013); Jamieson y colaboradores (2010); Gillen-O’Neel y colaboradores (2013); Breines y Chen (2012).',
      rhythm: '10 a 15 minutos de práctica, 4 o 5 días por semana, además de tu estudio.',
      weeks: [
        {
          title: 'Semana 1 · Estudiar recordando',
          focus: 'Práctica de recuperación y repaso espaciado',
          description: 'Leerás cómo estudiar según la investigación y cambiarás la relectura por recordar sin mirar. Si te cuesta empezar, usa cinco minutos como puerta de entrada.',
          practiceIds: ['repasar-sin-mirar', 'cinco-minutos'],
          articleIds: ['estudiar-y-rendir-examenes'],
          journalType: 'experimento',
        },
        {
          title: 'Semana 2 · Empezar aunque cueste',
          focus: 'Postergación',
          description: 'Mirarás qué malestar evitas cuando postergas y armarás un hábito mínimo de estudio atado a tu rutina.',
          practiceIds: ['empezar-imperfecto', 'habito-minimo'],
          articleIds: ['procrastinacion-y-perfeccionismo'],
          journalType: 'intencion',
        },
        {
          title: 'Semana 3 · Nervios y sueño',
          focus: 'Antes y durante el examen',
          description: 'Practicarás leer los nervios como energía, probarás escribir las preocupaciones antes de rendir y pondrás una hora de corte para el estudio.',
          practiceIds: ['nervios-que-preparan', 'escribir-antes-del-examen', 'semana-de-examenes-y-sueno', 'rutina-bajada-dormir'],
          articleIds: ['sueno-y-bienestar'],
          journalType: 'diario-sueno',
        },
        {
          title: 'Semana 4 · Después del examen',
          focus: 'Autocompasión y aprendizaje',
          description: 'Practicarás tratarte con amabilidad ante un mal resultado y revisar qué pasó para preparar mejor el próximo.',
          practiceIds: ['despues-de-un-mal-examen', 'pausa-autocompasion'],
          articleIds: ['autocompasion'],
          journalType: 'carta-compasiva',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-estudiar-recordando',
      title: 'Releer engaña',
      subtitle: 'Cómo estudiar para que quede.',
      slides: [
        { heading: 'La trampa', text: 'Releer el apunte da la sensación de que ya sabes. El texto te resulta conocido. Pero reconocer no es recordar.' },
        { heading: 'Recordar sin mirar', text: 'Cierra el apunte y escribe lo que recuerdas. Después compara. Cuesta más, y por eso funciona.' },
        { heading: 'Lo que muestran los estudios', text: 'Quienes practicaron recordar un texto lo sabían mejor una semana después que quienes lo releyeron.' },
        { heading: 'Repartir', text: 'Tres repasos cortos en días distintos dejan más que una tarde larga. Agenda el próximo repaso al terminar.' },
        { heading: 'Si no arrancas', text: 'Empieza con cinco minutos. Una pregunta, una hoja en blanco. Después decides si sigues.' },
      ],
      related: { practices: ['repasar-sin-mirar', 'cinco-minutos'], articles: ['estudiar-y-rendir-examenes'] },
      references: [ROEDIGER_2006, DUNLOSKY_2013, CEPEDA_2006],
    },
    {
      id: 'pildora-nervios-del-examen',
      title: 'Los nervios no son el enemigo',
      subtitle: 'Qué hacer con la ansiedad antes y durante el examen.',
      slides: [
        { heading: 'Es normal', text: 'Casi todo el mundo siente nervios antes de un examen. El cuerpo se acelera porque algo te importa.' },
        { heading: 'Energía', text: 'El corazón rápido manda más sangre y oxígeno al cerebro. Dite: «Mi cuerpo se prepara para rendir».' },
        { heading: 'Mejor que calmarse', text: 'En los estudios, leer los nervios como energía ayudó más que intentar calmarse a la fuerza.' },
        { heading: 'Si te quedas en blanco', text: 'Suelta el aire largo. Apoya los pies. Pasa a una pregunta que sepas y vuelve después.' },
        { heading: 'Escribir antes', text: 'Escribir tus miedos diez minutos antes ayudó en un estudio. Otros no lo confirmaron. Puedes probarlo.' },
        { heading: 'Cuándo consultar', text: 'Si los nervios te impiden rendir o tienes ataques de pánico, consulta. Tiene tratamiento.' },
      ],
      related: { practices: ['nervios-que-preparan', 'escribir-antes-del-examen'], articles: ['estudiar-y-rendir-examenes'] },
      references: [JAMIESON_2010, BROOKS_2014, RAMIREZ_2011],
    },
    {
      id: 'pildora-dormir-o-estudiar',
      title: '¿Dormir o estudiar?',
      subtitle: 'Por qué trasnochar sale caro.',
      slides: [
        { heading: 'El sueño fija', text: 'Mientras duermes, el cerebro ordena lo que aprendiste en el día. Dormir es parte del estudio.' },
        { heading: 'Trasnochar cuesta', text: 'En un estudio, los días en que los chicos dormían menos para estudiar más les iba peor en clase y en las pruebas.' },
        { heading: 'Una hora de corte', text: 'Elige a qué hora dejas de estudiar. Deja la última hora sin apuntes y con poca pantalla.' },
        { heading: 'Nada nuevo a último momento', text: 'La noche antes, sólo un repaso liviano. Los temas nuevos van en los días previos.' },
        { heading: 'Si no duermes de nervios', text: 'Una mala noche aislada no arruina un examen. Haz la rutina de bajada y no pelees en la cama.' },
      ],
      related: { practices: ['semana-de-examenes-y-sueno', 'rutina-bajada-dormir'], articles: ['estudiar-y-rendir-examenes', 'sueno-y-bienestar'] },
      references: [GILLEN_ONEEL_2013, RASCH_2013],
    },
    {
      id: 'pildora-despues-del-examen',
      title: 'Me fue mal, ¿y ahora?',
      subtitle: 'Seguir después de un mal resultado.',
      slides: [
        { heading: 'Duele', text: 'Un mal examen duele porque te importaba. No hace falta hacer como que no pasó nada.' },
        { heading: 'Castigarte no ayuda', text: 'Tratarte con dureza suele llevar a evitar la materia. La amabilidad hace más fácil volver a intentarlo.' },
        { heading: 'Lo que muestran los estudios', text: 'Estudiantes que se trataron con amabilidad tras un examen difícil estudiaron más para el siguiente.' },
        { heading: 'Mirar qué pasó', text: 'Cuando baje la angustia, pide ver el examen. Separa lo que dependía de ti de lo que no.' },
        { heading: 'Un cambio', text: 'Elige un solo cambio para la próxima vez. Empezar antes, practicar con exámenes viejos o dormir más.' },
      ],
      related: { practices: ['despues-de-un-mal-examen', 'pausa-autocompasion'], articles: ['estudiar-y-rendir-examenes'] },
      references: [BREINES_2012, WOHL_2010],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'practica-de-recuperacion', term: 'Práctica de recuperación', definition: 'Estudiar intentando recordar sin mirar, con preguntas o una hoja en blanco. Fija lo aprendido mejor que releer.', practiceId: 'repasar-sin-mirar' },
    { id: 'practica-espaciada', term: 'Práctica espaciada', definition: 'Repartir el estudio de un tema en varias sesiones separadas por días, en lugar de estudiarlo todo de una vez.', practiceId: 'repasar-sin-mirar' },
    { id: 'ilusion-de-saber', term: 'Ilusión de saber', definition: 'Sensación de dominar un tema porque el texto resulta conocido al releerlo, aunque todavía no puedas recordarlo sin mirar.', articleId: 'estudiar-y-rendir-examenes' },
    { id: 'ansiedad-ante-los-examenes', term: 'Ansiedad ante los exámenes', definition: 'Nervios y preocupación intensos antes o durante una evaluación. Es común. Si impide rendir, conviene consultar.', articleId: 'estudiar-y-rendir-examenes' },
    { id: 'reevaluacion-de-la-activacion', term: 'Reevaluación de la activación', definition: 'Leer el corazón rápido y la tensión como el cuerpo preparándose para rendir, en lugar de como señal de peligro.', practiceId: 'nervios-que-preparan' },
  ],
};
