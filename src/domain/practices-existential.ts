import type { Practice, Reference } from './types';

/**
 * Octava tanda: logoterapia (Viktor Frankl), psicología humanista (Carl Rogers, Abraham
 * Maslow, Eugene Gendlin) y terapia Gestalt (Fritz y Laura Perls).
 *
 * Son enfoques con mucha tradición clínica y menos ensayos controlados que la TCC o la DBT.
 * Por eso casi todas las prácticas declaran evidencia preliminar: la técnica, tal como se
 * ofrece aquí (breve y autoguiada), no se ha probado de forma aislada. Las que pueden
 * remover emociones intensas (silla vacía, asuntos pendientes, intención paradójica) llevan
 * precauciones y una alternativa más segura.
 */

// ------------------------------------------------------------ referencias
const FRANKL_1946: Reference = { citation: 'Frankl, V. E. (1946/2015). El hombre en busca de sentido. Herder.' };
const FRANKL_1946_PSICO: Reference = {
  citation: 'Frankl, V. E. (1946/1978). Psicoanálisis y existencialismo: de la psicoterapia a la logoterapia. Fondo de Cultura Económica.',
};
const VOS_2015: Reference = {
  citation:
    'Vos, J., Craig, M., & Cooper, M. (2015). Existential therapies: A meta-analysis of their effects on psychological outcomes. Journal of Consulting and Clinical Psychology, 83(1), 115–128.',
};
const PARK_2010: Reference = {
  citation:
    'Park, C. L. (2010). Making sense of the meaning literature: An integrative review of meaning making and its effects on adjustment to stressful life events. Psychological Bulletin, 136(2), 257–301.',
  doi: '10.1037/a0018301',
};
const WEGNER_1994: Reference = {
  citation: 'Wegner, D. M. (1994). Ironic processes of mental control. Psychological Review, 101(1), 34–52.',
  doi: '10.1037/0033-295X.101.1.34',
};
const ASCHER_1979: Reference = {
  citation: 'Ascher, L. M., & Turner, R. M. (1979). Paradoxical intention and insomnia: An experimental investigation. Behaviour Research and Therapy, 17(4), 408–411.',
};
const BOHLMEIJER_2003: Reference = {
  citation:
    'Bohlmeijer, E., Smit, F., & Cuijpers, P. (2003). Effects of reminiscence and life review on late-life depression: A meta-analysis. International Journal of Geriatric Psychiatry, 18(12), 1088–1094.',
};
const ROGERS_1957: Reference = {
  citation: 'Rogers, C. R. (1957). The necessary and sufficient conditions of therapeutic personality change. Journal of Consulting Psychology, 21(2), 95–103.',
  doi: '10.1037/h0045357',
};
const ROGERS_1961: Reference = { citation: 'Rogers, C. R. (1961/2011). El proceso de convertirse en persona. Paidós.' };
const GENDLIN_1978: Reference = { citation: 'Gendlin, E. T. (1978/2016). Focusing: proceso y técnica del enfoque corporal. Mensajero.' };
const HIGGINS_1987: Reference = {
  citation: 'Higgins, E. T. (1987). Self-discrepancy: A theory relating self and affect. Psychological Review, 94(3), 319–340.',
  doi: '10.1037/0033-295X.94.3.319',
};
const MASLOW_1943: Reference = {
  citation: 'Maslow, A. H. (1943). A theory of human motivation. Psychological Review, 50(4), 370–396.',
  doi: '10.1037/h0054346',
};
const TAY_2011: Reference = {
  citation: 'Tay, L., & Diener, E. (2011). Needs and subjective well-being around the world. Journal of Personality and Social Psychology, 101(2), 354–365.',
  doi: '10.1037/a0023779',
};
const PERLS_1951: Reference = { citation: 'Perls, F., Hefferline, R. F., & Goodman, P. (1951/2002). Terapia Gestalt: excitación y crecimiento de la personalidad humana. Sociedad de Cultura Valle-Inclán.' };
const YONTEF_1993: Reference = { citation: 'Yontef, G. M. (1993/1995). Proceso y diálogo en psicoterapia gestáltica. Cuatro Vientos.' };
const PAIVIO_1995: Reference = {
  citation: 'Paivio, S. C., & Greenberg, L. S. (1995). Resolving «unfinished business»: Efficacy of experiential therapy using empty-chair dialogue. Journal of Consulting and Clinical Psychology, 63(3), 419–425.',
  doi: '10.1037/0022-006X.63.3.419',
};
const GREENBERG_2002: Reference = {
  citation: 'Greenberg, L. S. (2002). Emotion-focused therapy: Coaching clients to work through their feelings. American Psychological Association.',
};
const PENNEBAKER_1997: Reference = {
  citation: 'Pennebaker, J. W. (1997). Writing about emotional experiences as a therapeutic process. Psychological Science, 8(3), 162–166.',
  doi: '10.1111/j.1467-9280.1997.tb00403.x',
};

export const EXISTENTIAL_PRACTICES: Practice[] = [
  // ------------------------------------------------------------ logoterapia
  {
    id: 'que-me-pide-la-vida',
    title: '¿Qué me pide la vida hoy?',
    family: 'constructive',
    skills: ['resilience', 'attention'],
    summary: 'Cambiar la pregunta «¿qué espero de la vida?» por «¿qué me pide hoy?» y responder con un gesto concreto.',
    mechanism: 'Pasar de esperar a responder devuelve la sensación de que tus actos importan, incluso en un día gris.',
    evidenceLevel: 'preliminar',
    evidence: [FRANKL_1946, VOS_2015, PARK_2010],
    howItWorks: [
      'Viktor Frankl, psiquiatra vienés y creador de la logoterapia, propuso dar vuelta la pregunta por el sentido. No se trata de lo que esperamos de la vida, sino de lo que la vida espera de nosotros en cada situación concreta.',
      'El sentido, para Frankl, no es una gran respuesta para toda la vida. Es la respuesta de hoy a esta situación: una tarea, una persona que te necesita, una actitud. Los estudios sobre sentido vital muestran que sentir que la propia vida tiene propósito se asocia con más bienestar (Park, 2010).',
    ],
    tips: [
      'Piensa en lo pequeño: una llamada, una tarea bien hecha, un rato de escucha.',
      'Si hoy no puedes hacer mucho, la respuesta puede ser una actitud: paciencia, dignidad, ternura.',
      'Hazla por la mañana. A la noche, mira si respondiste.',
    ],
    obstacles: [
      { q: 'Siento que la vida no me pide nada.', a: 'Es una sensación frecuente en días de desánimo. Prueba con algo mínimo: ¿quién o qué estaría un poco mejor si hoy hicieras algo pequeño?' },
      { q: 'Me pide demasiadas cosas a la vez.', a: 'Elige una sola. La pregunta no es por todo lo que debes, sino por lo que hoy tiene más sentido para ti.' },
    ],
    steps: [
      { title: 'Llegar', instruction: 'Siéntate con comodidad y respira despacio tres veces. Nota que estás aquí, en este día.', durationSec: 40, kind: 'breath' },
      { title: 'Dar vuelta la pregunta', instruction: 'Deja de lado lo que esperas de este día. Pregúntate en voz baja: «¿Qué me pide hoy la vida?».', durationSec: 45, kind: 'reflection' },
      { title: 'Una tarea', instruction: '¿Hay algo que solo tú puedes hacer hoy? Puede ser una tarea, un trabajo o algo que crear.', durationSec: 60, kind: 'reflection' },
      { title: 'Una persona', instruction: '¿Hay alguien que hoy te necesita, o a quien te gustaría dar algo de ti? Piensa en su cara.', durationSec: 60, kind: 'reflection' },
      { title: 'Una actitud', instruction: 'Si hoy hay algo difícil que no puedes cambiar, ¿qué actitud quieres tener ante eso?', durationSec: 60, kind: 'reflection' },
      { title: 'Responder', instruction: 'Elige una sola respuesta y hazla concreta. Por ejemplo: «Hoy llamo a mi madre a la tarde».', durationSec: 45, kind: 'reflection' },
      { title: 'Cerrar', instruction: 'Respira y dite: «Hoy respondo con esto». Deja que el día empiece desde ahí.', durationSec: 30, kind: 'breath' },
    ],
  },
  {
    id: 'tres-caminos-sentido',
    title: 'Los tres caminos del sentido',
    family: 'constructive',
    skills: ['resilience', 'compassion'],
    summary: 'Recorrer las tres fuentes de sentido que describió Frankl: lo que das, lo que recibes y la actitud ante lo inevitable.',
    mechanism: 'Mirar las tres fuentes amplía dónde buscar sentido cuando una de ellas está cerrada por un tiempo.',
    evidenceLevel: 'preliminar',
    evidence: [FRANKL_1946, VOS_2015],
    howItWorks: [
      'Frankl describió tres caminos hacia el sentido. El primero es crear: un trabajo, una obra, una acción. El segundo es vivir algo o amar a alguien: la belleza, la naturaleza, un encuentro. El tercero es la actitud que tomamos ante un sufrimiento que no se puede evitar.',
      'Cuando un camino se cierra, por ejemplo por una enfermedad o una pérdida de trabajo, los otros siguen abiertos. Ver los tres ayuda a no depender de uno solo.',
    ],
    tips: [
      'No hace falta que los tres caminos estén llenos. Basta con notar uno.',
      'El tercer camino no pide aceptar el sufrimiento evitable: si algo se puede cambiar, el sentido está en cambiarlo.',
      'Repite la práctica en distintos momentos de la vida: las respuestas cambian.',
    ],
    obstacles: [{ q: 'Ahora no tengo trabajo ni algo que crear.', a: 'Entonces mira con más calma los otros dos caminos. Lo que vives y a quien quieres también cuentan, y mucho.' }],
    cautions: 'El tercer camino invita a mirar algo difícil. Si estás atravesando una pérdida muy reciente o una crisis, quédate en los dos primeros. Lo difícil se trabaja mejor acompañado.',
    steps: [
      { title: 'Llegar', instruction: 'Respira despacio y nota el apoyo del cuerpo en la silla o en el piso.', durationSec: 40, kind: 'breath' },
      { title: 'Crear', instruction: 'Piensa en algo que hiciste o creaste y que valió la pena. Puede ser grande o pequeño. ¿Qué dio de ti?', durationSec: 75, kind: 'reflection' },
      { title: 'Vivir y amar', instruction: 'Ahora piensa en algo que viviste o en alguien que quieres. Un paisaje, una música, una persona. Deja que vuelva esa sensación.', durationSec: 75, kind: 'reflection' },
      { title: 'La actitud', instruction: 'Piensa en algo difícil que no puedes cambiar. Sin forzar nada, pregúntate: ¿qué actitud me gustaría tener ante esto?', durationSec: 75, kind: 'reflection' },
      { title: 'El camino de hoy', instruction: '¿Cuál de los tres caminos está más abierto para ti esta semana? Elige un paso pequeño en esa dirección.', durationSec: 60, kind: 'reflection' },
      { title: 'Cerrar', instruction: 'Respira y agradece en silencio lo que encontraste en cada camino.', durationSec: 30, kind: 'breath' },
    ],
  },
  {
    id: 'derreflexion',
    title: 'Derreflexión: volcarte hacia afuera',
    family: 'attentional',
    skills: ['attention', 'resilience'],
    summary: 'Cuando te observas demasiado, llevar la atención hacia una tarea o una persona que te importa.',
    mechanism: 'Mirarse sin parar aumenta el malestar que se quiere evitar. Volcar la atención hacia algo valioso corta ese círculo.',
    evidenceLevel: 'preliminar',
    evidence: [FRANKL_1946_PSICO, WEGNER_1994],
    howItWorks: [
      'Frankl llamó «hiperreflexión» a estar demasiado pendiente de uno mismo: de si duermo, de si me sale bien, de si se me nota la ansiedad. Cuanto más nos observamos, más torpe sale lo que queremos que salga solo.',
      'La «derreflexión» propone no luchar contra eso, sino ignorarlo con amabilidad y dirigir la atención hacia afuera: hacia una tarea, una persona o algo bello. La investigación de Wegner sobre el control mental muestra algo parecido: intentar no pensar en algo suele hacer que aparezca más.',
    ],
    tips: [
      'Elige algo que realmente te interese. La atención se va sola hacia lo que importa.',
      'No es distraerse para escapar: es volver a la vida que la preocupación había tapado.',
      'Sirve sobre todo ante la autoobservación ansiosa, como en una reunión o antes de dormir.',
    ],
    obstacles: [{ q: 'La preocupación vuelve enseguida.', a: 'Es normal. No la empujes. Nótala, como quien ve pasar a alguien conocido, y vuelve a la tarea o a la persona.' }],
    steps: [
      { title: 'Notar el círculo', instruction: 'Nota si estás muy pendiente de ti: de cómo te sientes, de cómo te ven o de si te sale bien.', durationSec: 40, kind: 'reflection' },
      { title: 'Nombrarlo', instruction: 'Dite con calma: «Me estoy observando demasiado». No hace falta hacer nada más con eso.', durationSec: 30, kind: 'reflection' },
      { title: 'Algo que importa', instruction: 'Elige algo que te importe ahora: una tarea, una persona o algo bello que puedas ver o escuchar.', durationSec: 45, kind: 'reflection' },
      { title: 'Volcarte', instruction: 'Pon toda tu atención ahí. Si es una persona, escúchala con curiosidad. Si es una tarea, nota sus detalles.', durationSec: 90, kind: 'instruction' },
      { title: 'Volver sin pelear', instruction: 'Si vuelves a mirarte, sonríe por dentro y vuelve hacia afuera. Cada regreso cuenta.', durationSec: 60, kind: 'instruction' },
      { title: 'Notar el cambio', instruction: 'Respira y nota cómo estás ahora que la atención estuvo puesta en otra cosa.', durationSec: 30, kind: 'breath' },
    ],
  },
  {
    id: 'intencion-paradojica',
    title: 'Intención paradójica',
    family: 'deconstructive',
    skills: ['resilience', 'attention'],
    summary: 'Ante un miedo anticipatorio leve, desear con humor justo lo que temes, para que pierda fuerza.',
    mechanism: 'El miedo a que algo pase suele provocarlo. Desearlo con humor rompe el círculo de la ansiedad anticipatoria.',
    evidenceLevel: 'preliminar',
    evidence: [FRANKL_1946_PSICO, ASCHER_1979, WEGNER_1994],
    howItWorks: [
      'Frankl observó que muchos síntomas se mantienen por la «ansiedad anticipatoria»: el miedo a sonrojarse hace que uno se sonroje; el miedo a no dormir quita el sueño. Propuso una técnica sorprendente: desear, con humor, justo lo que se teme.',
      'Al decir «hoy voy a sonrojarme como un tomate, a ver si llego a récord», la persona deja de luchar y toma distancia con humor. Algunos estudios pequeños, por ejemplo con insomnio, encontraron mejoras. Hoy se considera una técnica para problemas leves y concretos.',
    ],
    tips: [
      'El humor es la clave: exagera hasta que te dé un poco de risa.',
      'Úsala con miedos leves y concretos, como sonrojarte, trabarte al hablar o no dormir una noche.',
      'Si no te causa ni un poco de gracia, no es el momento. Prueba la derreflexión.',
    ],
    obstacles: [{ q: 'Me da miedo provocar lo que temo.', a: 'Es comprensible. Por eso conviene empezar con algo leve y de poco riesgo. Si el miedo es fuerte o se refiere a algo peligroso, esta técnica no es para eso.' }],
    cautions:
      'No la uses en una crisis ni con miedos a hacerte daño o a dañar a otros. Tampoco con pensamientos obsesivos o ataques de pánico intensos sin tu terapeuta. Si te sientes peor, detente y vuelve a respirar.',
    steps: [
      { title: 'Elegir algo leve', instruction: 'Elige un miedo pequeño y concreto que se repite. Por ejemplo, sonrojarte en una reunión o no dormir enseguida.', durationSec: 45, kind: 'reflection' },
      { title: 'Ver el círculo', instruction: 'Nota cómo el miedo a que pase hace que pase más. Cuanto más lo evitas, más presente está.', durationSec: 45, kind: 'reflection' },
      { title: 'Desearlo con humor', instruction: 'Ahora deséalo en broma y exagera. Por ejemplo: «Hoy me voy a poner tan rojo que van a apagar la luz».', durationSec: 60, kind: 'reflection' },
      { title: 'Notar la distancia', instruction: '¿Qué pasa con el miedo cuando lo miras con humor? Quizá baja un poco. Solo nótalo.', durationSec: 45, kind: 'reflection' },
      { title: 'Tu frase', instruction: 'Elige una frase breve y graciosa para usar la próxima vez que aparezca ese miedo.', durationSec: 40, kind: 'reflection' },
      { title: 'Volver', instruction: 'Respira despacio y vuelve al presente. Si algo te inquietó, nota tus pies en el piso.', durationSec: 30, kind: 'breath' },
    ],
  },
  {
    id: 'lo-vivido-queda',
    title: 'Lo vivido queda',
    family: 'constructive',
    skills: ['resilience', 'compassion'],
    summary: 'Mirar con gratitud lo que ya viviste y realizaste: nadie puede quitártelo.',
    mechanism: 'Reconocer lo realizado da una base estable al sentido, que no depende de lo que todavía falta.',
    evidenceLevel: 'preliminar',
    evidence: [FRANKL_1946, BOHLMEIJER_2003],
    howItWorks: [
      'Frankl sostenía que el pasado no es solo lo que se perdió. Es también un lugar donde queda a salvo lo que hicimos, lo que amamos y lo que soportamos con dignidad. «Haber sido» es también una forma de ser.',
      'La revisión de la propia vida, sobre todo en personas mayores, se asocia con menos síntomas depresivos (Bohlmeijer et al., 2003). Esta práctica toma esa idea: mirar atrás para reconocer lo valioso, no para lamentar.',
    ],
    tips: [
      'Incluye cosas pequeñas: una tarde con alguien, un trabajo bien hecho, una ayuda que diste.',
      'Si aparece nostalgia, está bien. Puedes sentir tristeza y gratitud a la vez.',
      'Puedes escribirlo como una lista y guardarla para los días difíciles.',
    ],
    obstacles: [{ q: 'Siento que no hice nada valioso.', a: 'La mente en días bajos tiende a borrar lo bueno. Prueba con preguntas concretas: ¿a quién ayudaste?, ¿qué aprendiste?, ¿qué momento disfrutaste?' }],
    steps: [
      { title: 'Llegar', instruction: 'Respira despacio y deja que el cuerpo se apoye. No hay prisa.', durationSec: 40, kind: 'breath' },
      { title: 'Lo que hice', instruction: 'Recuerda algo que hiciste y que te enorgullece, aunque sea pequeño. Nadie puede quitarte haberlo hecho.', durationSec: 75, kind: 'reflection' },
      { title: 'Lo que viví', instruction: 'Recuerda un momento hermoso de tu vida. Un lugar, una risa, un abrazo. Ese momento ya fue, y por eso queda.', durationSec: 75, kind: 'reflection' },
      { title: 'Lo que soporté', instruction: 'Piensa en algo difícil que atravesaste. No entres en detalles. Solo reconoce que lo atravesaste.', durationSec: 60, kind: 'reflection' },
      { title: 'Agradecer', instruction: 'Elige una de estas cosas y agradécela en silencio, como quien guarda algo valioso.', durationSec: 45, kind: 'reflection' },
      { title: 'Cerrar', instruction: 'Respira y vuelve al presente. Lo vivido está contigo.', durationSec: 30, kind: 'breath' },
    ],
  },

  // ------------------------------------------------------------ psicología humanista
  {
    id: 'escucharme-sin-juzgar',
    title: 'Escucharme sin juzgar',
    family: 'attentional',
    skills: ['attention', 'compassion'],
    summary: 'Escuchar lo que sientes en el cuerpo con la aceptación que te daría alguien que te comprende.',
    mechanism: 'Atender sin juzgar a la «sensación sentida» del cuerpo ayuda a poner en palabras lo que todavía no está claro, y eso alivia.',
    evidenceLevel: 'preliminar',
    evidence: [GENDLIN_1978, ROGERS_1957],
    howItWorks: [
      'Carl Rogers describió tres condiciones que ayudan a cambiar: la empatía, la aceptación incondicional y la autenticidad. Esta práctica intenta ofrecértelas a ti: escucharte como lo haría alguien que te comprende y no te juzga.',
      'Eugene Gendlin, colaborador de Rogers, notó que las personas que más avanzaban en terapia prestaban atención a una sensación corporal difusa, que llamó «sensación sentida». Su técnica, el focusing, enseña a escuchar esa sensación hasta que aparece la palabra justa.',
    ],
    tips: [
      'No busques una respuesta rápida. La sensación necesita un poco de tiempo.',
      'Trátala como a un amigo tímido: con paciencia y sin apurarla.',
      'Si la palabra que aparece no encaja, prueba otra. El cuerpo avisa cuando acierta.',
    ],
    obstacles: [{ q: 'No siento nada en el cuerpo.', a: 'Le pasa a mucha gente al principio. Prueba con la zona del pecho o del estómago y pregúntate: «¿Cómo está esto ahora?». Una sensación vaga también vale.' }],
    cautions: 'Si al mirar hacia adentro aparece algo muy intenso o un recuerdo traumático, abre los ojos y nota tus pies en el piso. Ese material se trabaja mejor con un profesional.',
    steps: [
      { title: 'Llegar', instruction: 'Siéntate con comodidad y respira despacio. Lleva la atención al centro del cuerpo, al pecho y al estómago.', durationSec: 45, kind: 'breath' },
      { title: 'Hacer espacio', instruction: 'Pregúntate con amabilidad: «¿Qué hay en mí ahora?». Deja que aparezca lo que sea, sin elegir.', durationSec: 60, kind: 'reflection' },
      { title: 'La sensación', instruction: 'Elige una cosa y nota cómo se siente en el cuerpo. Quizá un nudo, un peso o un calor. Quédate con eso.', durationSec: 75, kind: 'reflection' },
      { title: 'Una palabra', instruction: 'Busca una palabra o imagen que describa esa sensación. Por ejemplo: «apretado», «pesado», «como una piedra».', durationSec: 60, kind: 'reflection' },
      { title: 'Comprobar', instruction: 'Repite la palabra y nota si encaja con la sensación. Si no encaja, prueba otra hasta que algo se afloje.', durationSec: 60, kind: 'reflection' },
      { title: 'Escuchar', instruction: 'Pregunta a la sensación, sin apuro: «¿Qué necesitas?». Recibe lo que llegue, aunque sea poco.', durationSec: 60, kind: 'reflection' },
      { title: 'Agradecer', instruction: 'Agradece a tu cuerpo lo que te mostró. Dite: «Puedo volver aquí más tarde».', durationSec: 30, kind: 'breath' },
    ],
  },
  {
    id: 'yo-real-yo-ideal',
    title: 'Mi yo real y mi yo ideal',
    family: 'deconstructive',
    skills: ['compassion', 'attention'],
    summary: 'Mirar la distancia entre cómo eres y cómo crees que deberías ser, y acercar las dos imágenes con amabilidad.',
    mechanism: 'Cuando el ideal es rígido o ajeno, la distancia con el yo real genera malestar. Mirarla con aceptación facilita una congruencia mayor.',
    evidenceLevel: 'preliminar',
    evidence: [ROGERS_1961, HIGGINS_1987],
    howItWorks: [
      'Para Carl Rogers, mucho malestar viene de la distancia entre el «yo real», lo que de verdad sientes y eres, y el «yo ideal», la imagen de quien crees que deberías ser. Muchas veces ese ideal se arma con lo que otros esperaban de nosotros.',
      'La investigación de Higgins sobre las discrepancias del yo encontró algo parecido: la distancia con el ideal se asocia con tristeza, y con lo que «debería» ser, con ansiedad. Rogers proponía no forzar el cambio, sino aceptar lo que hay: desde ahí, el cambio se hace posible.',
    ],
    tips: [
      'Escribe las dos listas en papel, una al lado de la otra.',
      'Pregúntate de quién es la voz que dice cómo deberías ser.',
      'El objetivo no es renunciar a crecer, sino que el ideal sea tuyo y amable.',
    ],
    obstacles: [{ q: 'Mirar la distancia me hace sentir peor.', a: 'Puede pasar. Detente en el paso de aceptación y quédate ahí un rato. Si la autocrítica es muy fuerte, prueba antes «Pausa de autocompasión».' }],
    cautions: 'Si la práctica despierta una autocrítica muy dura o pensamientos de no valer nada, detente. Vuelve a la respiración y habla con alguien de confianza o con tu terapeuta.',
    steps: [
      { title: 'Llegar', instruction: 'Respira despacio y nota el apoyo del cuerpo. Ten a mano papel si quieres.', durationSec: 40, kind: 'breath' },
      { title: 'El yo ideal', instruction: 'Completa: «Debería ser una persona que…». Escribe tres frases, sin pensarlas mucho.', durationSec: 75, kind: 'reflection' },
      { title: 'De quién es la voz', instruction: 'Lee cada frase. ¿De quién es esa voz? ¿Tuya, de tu familia, de tu trabajo o de las redes?', durationSec: 60, kind: 'reflection' },
      { title: 'El yo real', instruction: 'Ahora completa: «En realidad, hoy soy alguien que…». Escribe con honestidad, sin castigarte.', durationSec: 75, kind: 'reflection' },
      { title: 'Aceptar', instruction: 'Mira lo que escribiste del yo real. Dite: «Esto es lo que soy hoy, y está bien empezar desde aquí».', durationSec: 60, kind: 'reflection' },
      { title: 'Un ideal amable', instruction: 'Elige una frase del ideal que sí sea tuya. Conviértela en una dirección amable, no en una exigencia.', durationSec: 60, kind: 'reflection' },
      { title: 'Cerrar', instruction: 'Respira y pon una mano en el pecho, si te ayuda. Agradece tu honestidad.', durationSec: 30, kind: 'breath' },
    ],
  },
  {
    id: 'necesidades-que-pido',
    title: 'Necesidades que hoy pido',
    family: 'constructive',
    skills: ['compassion', 'resilience'],
    summary: 'Reconocer qué necesitas hoy, sin jerarquías rígidas, y elegir cómo cuidarlo o a quién pedirlo.',
    mechanism: 'Nombrar una necesidad concreta transforma un malestar difuso en algo que se puede cuidar o pedir.',
    evidenceLevel: 'preliminar',
    evidence: [MASLOW_1943, TAY_2011],
    howItWorks: [
      'Abraham Maslow propuso que las personas tenemos necesidades básicas, como descanso, seguridad, afecto y reconocimiento, y también necesidades de crecimiento. La famosa pirámide es una simplificación posterior: él mismo aclaró que el orden no es rígido.',
      'Un estudio en 123 países encontró que distintas necesidades se asocian con el bienestar de forma bastante independiente (Tay y Diener, 2011). Por eso esta práctica no sigue una escalera: pregunta qué necesitas hoy y cómo cuidarlo.',
    ],
    tips: [
      'Una necesidad no es un capricho: es una señal de lo que te hace falta para estar bien.',
      'Pedir no garantiza recibir, pero no pedir casi garantiza no recibir.',
      'Si nadie puede darte lo que necesitas hoy, piensa cómo darte una parte tú.',
    ],
    obstacles: [{ q: 'Me cuesta pedir porque siento que molesto.', a: 'Es muy común. Empieza por un pedido pequeño a alguien de confianza. Para pedir con más claridad, prueba la práctica «DEAR MAN».' }],
    steps: [
      { title: 'Llegar', instruction: 'Respira despacio y pregúntate cómo estás hoy, en una palabra.', durationSec: 40, kind: 'breath' },
      { title: 'El cuerpo', instruction: '¿Qué necesita hoy tu cuerpo? Quizá descanso, comida, movimiento o abrigo.', durationSec: 45, kind: 'reflection' },
      { title: 'La seguridad', instruction: '¿Hay algo que te preocupa y te quita calma? ¿Qué te daría un poco más de seguridad?', durationSec: 45, kind: 'reflection' },
      { title: 'Los vínculos', instruction: '¿Necesitas compañía, un abrazo, que te escuchen o tiempo a solas?', durationSec: 45, kind: 'reflection' },
      { title: 'El valor propio', instruction: '¿Necesitas que alguien reconozca lo que haces? ¿O reconocerlo tú?', durationSec: 45, kind: 'reflection' },
      { title: 'Crecer', instruction: '¿Hay algo que te gustaría aprender, crear o explorar? Nota si eso también te llama hoy.', durationSec: 45, kind: 'reflection' },
      { title: 'Elegir y pedir', instruction: 'Elige la necesidad más fuerte de hoy. Decide un paso: darte algo tú, o pedir algo concreto a alguien.', durationSec: 60, kind: 'reflection' },
    ],
  },

  // ------------------------------------------------------------ Gestalt
  {
    id: 'darse-cuenta',
    title: 'Darse cuenta: aquí y ahora',
    family: 'attentional',
    skills: ['attention'],
    summary: 'El continuo de conciencia de la Gestalt: notar lo que pasa afuera, adentro y en tus pensamientos, momento a momento.',
    mechanism: 'Distinguir entre lo que percibes, lo que sientes y lo que imaginas te devuelve al presente y aclara qué es tuyo.',
    evidenceLevel: 'preliminar',
    evidence: [PERLS_1951, YONTEF_1993],
    howItWorks: [
      'Para la terapia Gestalt, creada por Fritz y Laura Perls, el cambio empieza por el «darse cuenta»: notar lo que pasa ahora, en lugar de explicarlo o juzgarlo. Distingue tres zonas: lo de afuera (lo que ves y oyes), lo de adentro (lo que sientes en el cuerpo) y la zona intermedia de la fantasía (lo que piensas, imaginas o recuerdas).',
      'El ejercicio consiste en completar, una y otra vez, la frase «Ahora me doy cuenta de…». Al hacerlo, notamos cuánto tiempo pasamos en la zona de la fantasía y cómo volver al contacto con el presente.',
    ],
    tips: [
      'Di las frases en voz baja o escríbelas. Sin explicar el porqué.',
      'Si te descubres pensando, no está mal: di «Ahora me doy cuenta de que estoy pensando en…».',
      'Puedes hacerla caminando o mientras esperas en una fila.',
    ],
    obstacles: [{ q: 'Me cuesta distinguir lo que siento de lo que pienso.', a: 'Pregúntate si eso está en el cuerpo, como un calor o una tensión, o si son palabras e imágenes en la cabeza. Con la práctica se vuelve más claro.' }],
    steps: [
      { title: 'Llegar', instruction: 'Siéntate o quédate de pie. Respira y deja los ojos abiertos, con la mirada suave.', durationSec: 30, kind: 'breath' },
      { title: 'Afuera', instruction: 'Completa varias veces: «Ahora me doy cuenta de…» con lo que ves y oyes. Por ejemplo: «… de la luz en la pared».', durationSec: 75, kind: 'instruction' },
      { title: 'Adentro', instruction: 'Ahora haz lo mismo con el cuerpo: «Ahora me doy cuenta de… la tensión en los hombros».', durationSec: 75, kind: 'instruction' },
      { title: 'La fantasía', instruction: 'Nota cuando aparece un pensamiento o un recuerdo. Dilo así: «Ahora me doy cuenta de que pienso en…».', durationSec: 75, kind: 'instruction' },
      { title: 'Ir y venir', instruction: 'Deja que la atención se mueva libre entre afuera, adentro y la fantasía. Solo nombra dónde está.', durationSec: 90, kind: 'instruction' },
      { title: 'Lo que descubrí', instruction: '¿En qué zona pasaste más tiempo? ¿Qué te dice eso de cómo estás hoy?', durationSec: 45, kind: 'reflection' },
    ],
  },
  {
    id: 'silla-vacia',
    title: 'La silla vacía',
    family: 'deconstructive',
    skills: ['compassion', 'resilience'],
    summary: 'Hablarle a alguien imaginado en una silla frente a ti para expresar lo que quedó sin decir. También se puede hacer por escrito.',
    mechanism: 'Expresar en primera persona, como si el otro estuviera presente, ayuda a sentir y ordenar emociones que quedaron bloqueadas.',
    evidenceLevel: 'preliminar',
    evidence: [PAIVIO_1995, GREENBERG_2002, PERLS_1951],
    howItWorks: [
      'La silla vacía es una técnica clásica de la Gestalt. La persona imagina a alguien sentado frente a ella y le habla en presente, como si estuviera ahí. A veces se cambia de silla para responder desde el lugar del otro.',
      'La terapia focalizada en la emoción la estudió para resolver «asuntos pendientes» con personas importantes. En un ensayo, quienes la hicieron en terapia mejoraron más que el grupo de comparación (Paivio y Greenberg, 1995). Aquí se ofrece una versión breve y suave, para relaciones sin trauma.',
    ],
    tips: [
      'Elige una relación con un conflicto leve o algo pequeño no dicho, no la herida más grande.',
      'Habla en presente y en primera persona: «Me dolió cuando…».',
      'Si prefieres no hablar en voz alta, escríbelo como si la persona fuera a leerlo.',
    ],
    obstacles: [{ q: 'Me da vergüenza hablarle a una silla.', a: 'Es una reacción muy común. Puedes hacerlo por escrito o en voz muy baja. Lo importante es hablarle a la persona, no hablar de ella.' }],
    cautions:
      'No la hagas sin acompañamiento si se trata de alguien que te hizo daño grave, de abuso o de un duelo muy reciente. En esos casos necesita un terapeuta. Si te desbordas, detente, abre los ojos y nota tus pies.',
    steps: [
      { title: 'Preparar', instruction: 'Pon una silla frente a ti o imagina una. Elige a alguien con quien quedó algo leve sin decir.', durationSec: 45, kind: 'instruction' },
      { title: 'Anclarte', instruction: 'Respira despacio y siente tus pies en el piso. Recuerda que puedes parar cuando quieras.', durationSec: 40, kind: 'breath' },
      { title: 'Imaginar', instruction: 'Imagina a esa persona sentada en la silla. ¿Cómo está? ¿Qué cara tiene? Nota lo que sientes al verla.', durationSec: 45, kind: 'reflection' },
      { title: 'Decir', instruction: 'Háblale en presente. Empieza con «Quiero decirte que…». Di lo que sientes y lo que necesitabas.', durationSec: 120, kind: 'reflection' },
      { title: 'Escuchar', instruction: 'Si quieres, imagina qué te respondería. No hace falta que esté de acuerdo. Solo escucha.', durationSec: 60, kind: 'reflection' },
      { title: 'Despedirte', instruction: 'Dile lo último que quieras decirle hoy. Puede ser una despedida, un pedido o un gracias.', durationSec: 45, kind: 'reflection' },
      { title: 'Volver', instruction: 'Mira la silla vacía de nuevo. Respira, nota tus pies y mira a tu alrededor. Estás aquí, ahora.', durationSec: 45, kind: 'breath' },
    ],
  },
  {
    id: 'asuntos-pendientes',
    title: 'Asuntos pendientes',
    family: 'constructive',
    skills: ['compassion', 'resilience'],
    summary: 'Escribir una carta que no vas a enviar para cerrar algo que quedó sin decir.',
    mechanism: 'Poner en palabras lo no dicho ayuda a completar una experiencia que la mente sigue reabriendo.',
    evidenceLevel: 'preliminar',
    evidence: [PERLS_1951, PENNEBAKER_1997, GREENBERG_2002],
    howItWorks: [
      'La Gestalt llama «asunto pendiente» a una experiencia que quedó incompleta: algo que no dijimos, una despedida que no fue, un enojo que tragamos. Lo incompleto tiende a volver una y otra vez, como una puerta mal cerrada.',
      'Escribir sobre lo que nos afecta, con emoción y con orden, se asocia con mejoras en el bienestar (Pennebaker, 1997). Esta carta no se envía: es para ti. Cerrar no siempre significa resolver con el otro; a veces es terminar de decirlo.',
    ],
    tips: [
      'Escribe a mano si puedes. Es más lento y más personal.',
      'No corrijas ni busques palabras lindas.',
      'Después decide qué hacer con la carta: guardarla, romperla o leerla en terapia.',
    ],
    obstacles: [{ q: '¿Y si después quiero decírselo de verdad?', a: 'Puede pasar, y la carta te ayuda a saber qué quieres decir. Antes de hablar, deja pasar unos días y piensa qué esperas de esa conversación.' }],
    cautions:
      'Si el asunto es un trauma, un abuso o una pérdida muy reciente, no lo hagas sin acompañamiento. Si aparece mucho dolor, para, respira y vuelve al presente.',
    steps: [
      { title: 'Llegar', instruction: 'Respira despacio. Ten a mano papel y lápiz. Recuerda que esta carta no se envía.', durationSec: 40, kind: 'breath' },
      { title: 'Elegir', instruction: 'Elige algo que quedó sin decir con alguien, y que todavía vuelve a tu mente. Empieza por algo mediano, no lo más difícil.', durationSec: 45, kind: 'reflection' },
      { title: 'Lo que pasó', instruction: 'Escribe a esa persona lo que pasó, en pocas líneas y en segunda persona: «Cuando tú…».', durationSec: 90, kind: 'reflection' },
      { title: 'Lo que sentí', instruction: 'Escribe lo que sentiste y lo que sientes hoy. Usa palabras simples: dolor, enojo, tristeza, miedo.', durationSec: 90, kind: 'reflection' },
      { title: 'Lo que necesitaba', instruction: 'Escribe lo que necesitabas en ese momento y no recibiste, o lo que no te animaste a decir.', durationSec: 90, kind: 'reflection' },
      { title: 'Cerrar', instruction: 'Termina con una frase de cierre que sea verdad para ti hoy. Puede ser un adiós, un gracias o un «ya lo dije».', durationSec: 60, kind: 'reflection' },
      { title: 'Volver', instruction: 'Deja el lápiz. Respira, nota el cuerpo y haz algo amable por ti en la próxima hora.', durationSec: 40, kind: 'breath' },
    ],
  },
  {
    id: 'polaridades',
    title: 'Polaridades: el que exige y el que se resiste',
    family: 'deconstructive',
    skills: ['compassion', 'attention'],
    summary: 'Dar voz a dos partes en conflicto, la que exige y la que se resiste, para que puedan escucharse.',
    mechanism: 'Escuchar a cada parte por separado reduce la pelea interna y permite encontrar una salida que tenga en cuenta a las dos.',
    evidenceLevel: 'preliminar',
    evidence: [PERLS_1951, GREENBERG_2002],
    howItWorks: [
      'Fritz Perls describió un conflicto interno muy común entre el «perro de arriba», la voz que exige y dice «deberías», y el «perro de abajo», la parte que se resiste con excusas, cansancio o «mañana». Mientras pelean, la persona queda paralizada.',
      'La Gestalt propone dar voz a cada una, por turnos, en lugar de que una gane a la otra. Muchas veces la parte que exige quiere protegerte, y la que se resiste necesita algo, como descanso o reconocimiento.',
    ],
    tips: [
      'Puedes usar dos sillas o dos columnas en un papel.',
      'Habla desde cada parte en primera persona: «Yo te exijo…», «Yo no quiero…».',
      'No busques un ganador. Busca un acuerdo que respete a las dos.',
    ],
    obstacles: [{ q: 'La voz que exige es muy dura.', a: 'Pregúntale qué teme que pase si deja de exigir. Detrás de la dureza suele haber miedo. Si es muy cruel, prueba «Imaginar mi yo compasivo».' }],
    cautions: 'Si la voz que exige se vuelve muy cruel o despierta pensamientos de no valer nada, detente y vuelve a la respiración. Es un buen tema para tu terapeuta.',
    steps: [
      { title: 'Llegar', instruction: 'Respira despacio. Piensa en algo que te dices que «deberías» hacer y que vienes postergando.', durationSec: 45, kind: 'breath' },
      { title: 'La que exige', instruction: 'Habla desde la parte que exige. ¿Qué le dice a la otra? Usa sus palabras: «Tienes que…», «Siempre…».', durationSec: 75, kind: 'reflection' },
      { title: 'La que se resiste', instruction: 'Ahora habla desde la parte que se resiste. ¿Qué responde? ¿Qué siente cuando la presionan?', durationSec: 75, kind: 'reflection' },
      { title: 'Lo que teme', instruction: 'Vuelve a la parte que exige y pregúntale: «¿Qué temes que pase si dejo de hacerte caso?».', durationSec: 60, kind: 'reflection' },
      { title: 'Lo que necesita', instruction: 'Pregunta a la parte que se resiste: «¿Qué necesitas para poder moverte?».', durationSec: 60, kind: 'reflection' },
      { title: 'Un acuerdo', instruction: 'Desde un lugar tranquilo, busca un acuerdo que tenga en cuenta a las dos. Por ejemplo, hacer menos, pero hacerlo.', durationSec: 60, kind: 'reflection' },
      { title: 'Cerrar', instruction: 'Respira y agradece a las dos partes. Las dos quieren algo bueno para ti.', durationSec: 30, kind: 'breath' },
    ],
  },
];
