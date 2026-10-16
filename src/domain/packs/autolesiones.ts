import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Autolesiones no suicidas»: hacerse daño a propósito sin intención de morir.
 *  - qué función suele cumplir: aliviar una emoción insoportable, castigarse, sentir algo cuando hay
 *    vacío, comunicar (modelo de funciones de Nock, 2009; Klonsky, 2007);
 *  - que tiene salida y tratamiento: DBT (Linehan, 2015; Mehlum y colaboradores, 2014; NICE, 2022);
 *  - alternativas de regulación con prácticas existentes (TIPP, surfear el impulso, cinco sentidos,
 *    plan de seguridad) y retrasar el impulso;
 *  - plan para el momento difícil, contar lo que pasa y tratarse con cuidado después;
 *  - guía para familias (adolescentes) y, en el artículo, para amistades.
 *
 * Reglas de seguridad del paquete (máximo cuidado):
 *  - NUNCA se describen métodos, objetos, lugares del cuerpo ni heridas; no hay ejemplos de cómo.
 *  - Sobre heridas sólo se dice: busca atención médica si una herida es profunda, sangra mucho o se infecta.
 *  - La palabra «autolesión» no aparece en títulos llamativos.
 *  - Se pregunta siempre por ideas de morir y se deriva: 135 (CABA y GBA; resto del país
 *    0800-345-1435), 0800-999-0091, 911, Línea 102 para adolescentes y el botón Ayuda.
 *  - Todas las prácticas tienen precauciones; las que trabajan con el impulso son de riesgo 2 y
 *    ofrecen una alternativa de riesgo 1.
 *  - Ninguna práctica pide recordar en detalle un episodio.
 */

// ------------------------------------------------------------ referencias
const NOCK_2009: Reference = {
  citation: 'Nock, M. K. (2009). Why do people hurt themselves? New insights into the nature and functions of self-injury. Current Directions in Psychological Science, 18(2), 78–83.',
};
const KLONSKY_2007: Reference = {
  citation: 'Klonsky, E. D. (2007). The functions of deliberate self-injury: A review of the evidence. Clinical Psychology Review, 27(2), 226–239.',
};
const LINEHAN_2015: Reference = { citation: 'Linehan, M. M. (2015). DBT skills training manual (2.ª ed.). Guilford Press.' };
const NICE_2022: Reference = {
  citation: 'National Institute for Health and Care Excellence. (2022). Self-harm: Assessment, management and preventing recurrence (NICE guideline NG225). NICE.',
};
const MEHLUM_2014: Reference = {
  citation:
    'Mehlum, L., Tørmoen, A. J., Ramberg, M., Haga, E., Diep, L. M., Laberg, S., Larsson, B. S., Stanley, B. H., Miller, A. L., Sund, A. M., & Grøholt, B. (2014). Dialectical behavior therapy for adolescents with repeated suicidal and self-harming behavior: A randomized trial. Journal of the American Academy of Child & Adolescent Psychiatry, 53(10), 1082–1091.',
};
const HAWTON_2012: Reference = {
  citation: "Hawton, K., Saunders, K. E. A., & O'Connor, R. C. (2012). Self-harm and suicide in adolescents. The Lancet, 379(9834), 2373–2382.",
};
const STANLEY_2012: Reference = {
  citation: 'Stanley, B., & Brown, G. K. (2012). Safety planning intervention: A brief intervention to mitigate suicide risk. Cognitive and Behavioral Practice, 19(2), 256–264.',
};
const NEFF_2003: Reference = {
  citation: 'Neff, K. D. (2003). Self-compassion: An alternative conceptualization of a healthy attitude toward oneself. Self and Identity, 2(2), 85–101.',
};
const BOWEN_2009: Reference = {
  citation: 'Bowen, S., & Marlatt, G. A. (2009). Surfing the urge: Brief mindfulness-based intervention for college student smokers. Psychology of Addictive Behaviors, 23(4), 666–671.',
  doi: '10.1037/a0017127',
};

/** Aviso común: ideas de morir, heridas y tratamiento. */
const CUIDADO =
  'Si aparecen ideas de morir o de quitarte la vida, no esperes: llama al 135 (CABA y GBA; resto del país 0800-345-1435), a la Línea Nacional de Salud Mental 0800-999-0091 o al 911, o usa el botón Ayuda de la app. Si tienes menos de 18 años, también puedes llamar a la Línea 102. Busca atención médica si una herida es profunda, sangra mucho o se infecta. Esta práctica acompaña un tratamiento; no lo reemplaza. Puedes parar cuando quieras.';

/** Pregunta de seguridad que abre o cierra las prácticas. */
const PREGUNTAR = '¿Hay ahora ideas de morir? Si las hay, deja esta práctica y llama al 135 o al 911, o toca el botón Ayuda.';

export const AUTOLESIONES_PACK: ContentPack = {
  id: 'autolesiones',

  // ================================================================== prácticas
  practices: [
    {
      id: 'plan-para-el-momento-dificil',
      title: 'Plan para el momento difícil',
      family: 'constructive',
      skills: ['resilience'],
      summary: 'Preparar en calma qué hacer cuando aparecen las ganas de hacerte daño: tus señales, lo que te ayuda, a quién llamar y dónde pedir ayuda.',
      mechanism: 'En plena crisis cuesta pensar. Un plan escrito de antemano te dice qué hacer paso a paso, y suma personas y lugares de ayuda.',
      evidenceLevel: 'moderada',
      evidence: [STANLEY_2012, NICE_2022, LINEHAN_2015],
      cautions: CUIDADO,
      howItWorks: [
        'El plan de seguridad de Stanley y Brown (2012) ordena los pasos de una crisis: reconocer las señales, usar lo que te calma, buscar a alguien, pedir ayuda profesional y hacer más seguro tu entorno.',
        'Se arma en un momento tranquilo, porque en la crisis la mente se angosta. La guía NICE (2022) recomienda que las personas que se hacen daño tengan un plan así, hecho con su equipo de salud cuando sea posible.',
        'La app tiene una sección «Plan de seguridad» para guardarlo. Esta práctica te ayuda a pensar qué poner.',
      ],
      tips: [
        'Escribe el plan con tus palabras, no con las que crees que deberías usar.',
        'Ten el plan a mano: en el celular y en papel.',
        'Revísalo cada tanto. Lo que ayuda puede cambiar.',
        'Si tienes terapeuta, muéstrale tu plan.',
      ],
      obstacles: [
        { q: 'Siento que no tengo a nadie para llamar.', a: 'Puede pasar. Anota igual las líneas de ayuda: el 135, el 0800-999-0091 y el 911 atienden siempre. Con el tiempo puedes sumar personas.' },
        { q: 'Cuando estoy mal no me acuerdo del plan.', a: 'Por eso conviene tenerlo visible y practicarlo en calma. También puedes pedir a alguien de confianza que te lo recuerde.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Hazlo en un momento tranquilo. Apoya los pies en el piso y respira despacio.', durationSec: 30, kind: 'breath' },
        { title: 'Antes de empezar', instruction: PREGUNTAR, durationSec: 20, kind: 'reflection' },
        { title: 'Mis señales', instruction: '¿Cómo te das cuenta de que se acerca un momento difícil? Anota pensamientos, emociones o situaciones que lo anuncian.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que me calma', instruction: 'Anota dos o tres cosas que te ayudan a bajar la intensidad. Por ejemplo, agua fría en la cara, salir a caminar o los cinco sentidos.', durationSec: 60, kind: 'reflection' },
        { title: 'Con quién estar', instruction: 'Anota personas o lugares donde puedes estar acompañada o acompañado, aunque no cuentes nada.', durationSec: 45, kind: 'reflection' },
        { title: 'A quién pedir ayuda', instruction: 'Anota una persona de confianza y tus líneas de ayuda: 135, 0800-999-0091 y 911.', durationSec: 45, kind: 'reflection' },
        { title: 'Un entorno más seguro', instruction: 'Piensa cómo poner distancia de lo que podrías usar para hacerte daño. Puedes pedir a alguien que lo guarde.', durationSec: 40, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Guarda tu plan en la sección «Plan de seguridad» de la app. Ten también una copia en papel.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'alternativas-para-el-impulso',
      title: 'Mis alternativas para bajar la intensidad',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Armar tu lista de alternativas para cuando la emoción es insoportable, según lo que necesitas en ese momento: calmarte, sentir algo distinto o expresar lo que te pasa.',
      mechanism: 'Si sabes qué función cumple el impulso, puedes elegir otra forma de cubrir esa necesidad. Tener las opciones listas evita pensarlas en plena crisis.',
      evidenceLevel: 'moderada',
      evidence: [LINEHAN_2015, KLONSKY_2007, NOCK_2009],
      cautions: CUIDADO,
      howItWorks: [
        'Hacerse daño suele cumplir una función. Lo más frecuente es aliviar una emoción que se siente insoportable (Klonsky, 2007). Por eso ayuda tener otras formas de bajar esa intensidad.',
        'La DBT enseña habilidades de tolerancia al malestar para estos momentos (Linehan, 2015). TIPP cambia rápido el cuerpo con frío, movimiento y respiración. Los cinco sentidos te traen al presente. Surfear el impulso te ayuda a dejar pasar la ola.',
        'No todas las alternativas sirven para todo. Si necesitas calma, busca algo que calme. Si te sientes vacía o vacío, busca algo que despierte los sentidos. Si necesitas expresar, escribe, dibuja o habla con alguien.',
      ],
      tips: [
        'Prueba cada alternativa en calma, antes de necesitarla.',
        'Elige cosas que puedas hacer en tu casa, en la escuela o en el trabajo.',
        'Si una alternativa no alcanza, pasa a la siguiente o pide ayuda.',
      ],
      obstacles: [
        { q: 'Nada me alivia tanto.', a: 'Es honesto decirlo. Las alternativas quizás alivien menos al principio, pero no te dañan. Con práctica, suelen alcanzar más. Un tratamiento como la DBT ayuda a sostenerlo.' },
        { q: 'No sé qué necesito en ese momento.', a: 'Empieza por bajar la intensidad del cuerpo con TIPP o los cinco sentidos. Cuando estés un poco mejor, pregúntate qué necesitas.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Hazlo en un momento tranquilo. Respira despacio y suelta el aire largo.', durationSec: 30, kind: 'breath' },
        { title: 'Antes de empezar', instruction: PREGUNTAR, durationSec: 20, kind: 'reflection' },
        { title: 'Qué necesito', instruction: 'Piensa qué buscas cuando aparece el impulso. ¿Calmar una emoción muy fuerte? ¿Sentir algo? ¿Descargar enojo contigo?', durationSec: 60, kind: 'reflection' },
        { title: 'Para calmar', instruction: 'Anota dos formas de bajar la intensidad. Por ejemplo, TIPP, los cinco sentidos o una ducha tibia.', durationSec: 45, kind: 'reflection' },
        { title: 'Para sentir', instruction: 'Anota algo que despierte los sentidos sin dañarte. Un sabor fuerte, un olor intenso, música alta o moverte rápido.', durationSec: 45, kind: 'reflection' },
        { title: 'Para expresar', instruction: 'Anota una forma de sacar lo que sientes. Escribir, dibujar, gritar en una almohada o hablar con alguien.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Elige una alternativa para probar hoy, en calma. Suma tu lista a tu plan para el momento difícil.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'retrasar-el-impulso',
      title: 'Ganar tiempo ante el impulso',
      family: 'attentional',
      skills: ['attention', 'resilience'],
      summary: 'Una herramienta breve para el momento en que aparecen las ganas de hacerte daño: posponer, bajar la intensidad del cuerpo y dejar que la ola pase.',
      mechanism: 'Los impulsos suben, llegan a un pico y bajan. Retrasar unos minutos da tiempo a que bajen, y cada vez que pasan sin hacerte daño, pierden fuerza.',
      evidenceLevel: 'preliminar',
      evidence: [LINEHAN_2015, BOWEN_2009, NICE_2022],
      cautions: CUIDADO + ' Si la ola no baja o te sientes en peligro, no sigas sola o solo: llama a alguien o a una línea de ayuda.',
      micro: true,
      howItWorks: [
        'El impulso de hacerse daño se siente urgente, pero no dura para siempre. Como una ola, sube y baja. Retrasar, aunque sea diez minutos, da tiempo a que baje.',
        'La DBT combina este retraso con habilidades para bajar la intensidad del cuerpo, como TIPP (Linehan, 2015). Surfear el impulso, observarlo sin seguirlo, viene de los tratamientos de las adicciones (Bowen y Marlatt, 2009). Su uso en este tema es una adaptación.',
      ],
      tips: [
        'Practícala primero en calma, con un impulso pequeño de otra cosa.',
        'Ponte una meta corta: diez minutos. Después, otros diez.',
        'Si estás con alguien, quédate cerca. Si estás sola o solo, llama a alguien.',
      ],
      obstacles: [{ q: 'La ola no baja.', a: 'Cambia de lugar, ve donde haya otras personas y llama a alguien de confianza o a una línea de ayuda. Si hay ideas de morir, llama al 135 o al 911.' }],
      steps: [
        { title: 'Parar', instruction: 'Para lo que estás haciendo. Dite por dentro: «Ahora no. Voy a esperar diez minutos».', durationSec: 20, kind: 'instruction' },
        { title: 'Preguntar', instruction: PREGUNTAR, durationSec: 15, kind: 'reflection' },
        { title: 'Distancia', instruction: 'Ve a otro lugar, mejor donde haya gente. Aléjate de lo que podrías usar para hacerte daño.', durationSec: 25, kind: 'instruction' },
        { title: 'Bajar el cuerpo', instruction: 'Moja tu cara con agua fría o sostén algo frío. Respira lento y suelta el aire largo.', durationSec: 40, kind: 'breath' },
        { title: 'Sentir la ola', instruction: 'Nota el impulso como una ola. Sube, llega arriba y baja. No tienes que hacer nada con ella.', durationSec: 40, kind: 'breath' },
        { title: 'Siguiente paso', instruction: 'Abre tu plan para el momento difícil. Elige una alternativa o llama a alguien ahora.', durationSec: 25, kind: 'reflection' },
      ],
    },
    {
      id: 'entender-la-funcion-del-impulso',
      title: 'Entender para qué aparece el impulso',
      family: 'constructive',
      skills: ['attention', 'compassion'],
      summary: 'Mirar con calma qué necesidad cubre el impulso de hacerte daño, sin entrar en detalles de lo que pasó, para buscar otras formas de cubrirla.',
      mechanism: 'Entender la función saca el impulso del terreno de lo incomprensible. Si sabes qué necesitas, puedes elegir otra forma de cubrir esa necesidad.',
      evidenceLevel: 'moderada',
      evidence: [NOCK_2009, KLONSKY_2007, LINEHAN_2015],
      cautions:
        CUIDADO +
        ' No hace falta recordar en detalle ningún momento. Piensa en general. Si pensar en esto te pone peor, deja la práctica y usa una más simple, como «Mano en el pecho».',
      howItWorks: [
        'Matthew Nock (2009) propone que hacerse daño se mantiene porque cumple funciones. Puede bajar una emoción insoportable, castigarse, sentir algo cuando hay vacío o comunicar un dolor que no encuentra palabras.',
        'Una revisión de Klonsky (2007) encontró que la función más frecuente es aliviar emociones muy intensas. Muchas personas también describen castigarse o enojo contra sí mismas.',
        'Entender la función no es justificar. Es el primer paso de la DBT para buscar otras formas de cubrir esa necesidad (Linehan, 2015).',
      ],
      tips: [
        'Piensa en general, no en un momento concreto.',
        'Puede haber más de una función. Anótalas todas.',
        'Si tienes terapeuta, lleva lo que escribas a la sesión.',
      ],
      obstacles: [
        { q: 'No sé por qué lo hago.', a: 'Es muy común. Empieza por lo que sientes antes y después. Muchas veces la función aparece ahí.' },
        { q: 'Pensar en esto me remueve mucho.', a: 'Para cuando quieras. Usa «Mano en el pecho» o los cinco sentidos. Esta práctica puede hacerse con un profesional.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Hazlo en un momento tranquilo. Pon una mano en el pecho y respira despacio.', durationSec: 30, kind: 'breath' },
        { title: 'Antes de empezar', instruction: PREGUNTAR, durationSec: 20, kind: 'reflection' },
        { title: 'Antes del impulso', instruction: 'Piensa en general. ¿Qué sueles sentir antes de que aparezca el impulso? Ponle nombre a la emoción.', durationSec: 60, kind: 'reflection' },
        { title: 'Para qué', instruction: '¿Qué buscas? Bajar una emoción muy fuerte, castigarte, sentir algo o mostrar un dolor. Anota lo que encaje.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que cuesta', instruction: '¿Qué te cuesta después? Puede ser culpa, vergüenza, secretos o miedo. Anótalo sin juzgarte.', durationSec: 45, kind: 'reflection' },
        { title: 'Otra forma', instruction: 'Para esa necesidad, ¿qué otra cosa podría ayudarte? Busca en tu lista de alternativas.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Agradécete por mirar con honestidad. Si te removió, usa los cinco sentidos.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'volver-a-tratarte-bien',
      title: 'Tratarte con cuidado después',
      family: 'constructive',
      skills: ['compassion'],
      summary: 'Responder con cuidado, y no con castigo, después de un momento difícil: atender tu cuerpo, bajar la culpa y volver a tu plan.',
      mechanism: 'La culpa y el castigo después suelen sumar malestar y empujar a repetir. Tratarte con cuidado corta ese ciclo y ayuda a pedir ayuda.',
      evidenceLevel: 'preliminar',
      evidence: [NEFF_2003, LINEHAN_2015, NICE_2022],
      cautions: CUIDADO,
      howItWorks: [
        'Después de hacerse daño, muchas personas sienten culpa, vergüenza o enojo consigo mismas. Si una de las funciones era castigarse, ese enojo puede volver a encender el impulso.',
        'La autocompasión tiene tres partes: notar el dolor, recordar que no eres la única persona que pasa por esto y hablarte con amabilidad (Neff, 2003). No es aprobar lo que pasó. Es cuidarte para poder seguir.',
        'Un momento difícil no borra lo que avanzaste. La DBT lo trata como información para ajustar el plan, no como un fracaso (Linehan, 2015).',
      ],
      tips: [
        'Primero, tu cuerpo. Si una herida es profunda, sangra mucho o se infecta, busca atención médica.',
        'Háblate como le hablarías a una amiga o un amigo que quieres.',
        'Cuéntale a alguien de confianza o a tu terapeuta.',
      ],
      obstacles: [{ q: 'Siento que merezco sentirme mal.', a: 'Es una idea muy común en estos momentos. Prueba igual tratarte con cuidado, aunque no lo creas del todo. Si la idea de castigarte es muy fuerte, pide ayuda hoy.' }],
      steps: [
        { title: 'Tu cuerpo', instruction: 'Primero, tu cuerpo. Busca atención médica si una herida es profunda, sangra mucho o se infecta.', durationSec: 30, kind: 'instruction' },
        { title: 'Preguntar', instruction: PREGUNTAR, durationSec: 20, kind: 'reflection' },
        { title: 'Llegar', instruction: 'Pon una mano en el pecho o donde te dé calma. Respira despacio unas veces.', durationSec: 40, kind: 'breath' },
        { title: 'Notar', instruction: 'Nota lo que sientes ahora. Puede ser culpa, vergüenza, cansancio o alivio. Dite: «Esto es muy difícil».', durationSec: 40, kind: 'reflection' },
        { title: 'No es sólo tuyo', instruction: 'Recuerda que otras personas pasan por esto. Y que hay tratamiento y salida.', durationSec: 30, kind: 'reflection' },
        { title: 'Otra voz', instruction: 'Escribe lo que te diría alguien que te quiere. Por ejemplo: «Estabas sufriendo mucho. Mereces cuidado y ayuda».', durationSec: 60, kind: 'reflection' },
        { title: 'Volver al plan', instruction: 'Elige un paso para hoy. Descansar, comer algo, revisar tu plan o contarle a alguien.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'contar-lo-que-te-pasa',
      title: 'Contar lo que te pasa',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Preparar cómo contarle a alguien de confianza o a un profesional lo que te pasa, con tus palabras y sin dar detalles que no quieras dar.',
      mechanism: 'El secreto aumenta la soledad y la vergüenza. Contar lo que pasa abre la puerta al apoyo y al tratamiento.',
      evidenceLevel: 'preliminar',
      evidence: [NICE_2022, HAWTON_2012, MEHLUM_2014],
      cautions: CUIDADO,
      howItWorks: [
        'Muchas personas que se hacen daño no se lo cuentan a nadie. A veces por vergüenza, a veces por miedo a la reacción. Pero el apoyo y el tratamiento ayudan (Hawton y colaboradores, 2012).',
        'No hace falta contar todo ni dar detalles. Alcanza con decir que estás pasando un momento difícil y que necesitas ayuda. Puedes empezar por una persona: un familiar, una amiga o un amigo, un docente o tu médico.',
        'La DBT tiene buena evidencia, también en adolescentes (Mehlum y colaboradores, 2014). La guía NICE (2022) recomienda una evaluación y un tratamiento psicológico para quien se hace daño.',
      ],
      tips: [
        'Elige un momento tranquilo y un lugar donde puedan hablar.',
        'Puedes escribirlo en un mensaje si hablar te cuesta mucho.',
        'Si la primera persona no reacciona bien, no es tu culpa. Prueba con otra.',
      ],
      obstacles: [
        { q: 'Tengo miedo de que se enojen o se asusten.', a: 'Es posible que se asusten al principio. Puedes decirles qué necesitas: que te escuchen con calma y te acompañen a pedir ayuda.' },
        { q: 'No quiero que me obliguen a nada.', a: 'Puedes decir qué te da miedo. Si hay riesgo para tu vida, la prioridad es que estés a salvo, y eso también es cuidarte.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Pon una mano en el pecho y respira despacio. Pedir ayuda es un paso valiente.', durationSec: 30, kind: 'breath' },
        { title: 'Antes de empezar', instruction: PREGUNTAR, durationSec: 20, kind: 'reflection' },
        { title: 'A quién', instruction: 'Piensa en una persona que te escucha con calma. Puede ser de tu familia, una amistad, un docente o tu médico.', durationSec: 45, kind: 'reflection' },
        { title: 'Qué contar', instruction: 'Escribe una primera frase. Por ejemplo: «Estoy pasando un momento muy difícil y a veces me hago daño. Necesito ayuda».', durationSec: 60, kind: 'reflection' },
        { title: 'Qué pedir', instruction: 'Anota un pedido concreto. Que te escuchen sin retarte, que te acompañen a consultar o que estén cerca esta semana.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Elige cuándo vas a hablar. Si hoy no puedes con nadie, llama al 0800-999-0091 o al 135.', durationSec: 30, kind: 'instruction' },
      ],
    },
  ],

  meta: {
    'plan-para-el-momento-dificil': { level: 'iniciacion', approaches: ['dbt', 'tcc'], module: 'afrontamiento' },
    'alternativas-para-el-impulso': { level: 'iniciacion', approaches: ['dbt'], module: 'afrontamiento', prerequisites: ['tipp', 'cinco-sentidos'] },
    'retrasar-el-impulso': {
      level: 'intermedio',
      approaches: ['dbt', 'mindfulness'],
      module: 'afrontamiento',
      prerequisites: ['plan-para-el-momento-dificil', 'tipp'],
      risk: { level: 2, alternative: 'cinco-sentidos' },
    },
    'entender-la-funcion-del-impulso': {
      level: 'intermedio',
      approaches: ['dbt'],
      module: 'afrontamiento',
      prerequisites: ['plan-para-el-momento-dificil'],
      risk: { level: 2, alternative: 'mano-en-el-pecho' },
    },
    'volver-a-tratarte-bien': { level: 'iniciacion', approaches: ['cft', 'dbt'], module: 'afrontamiento', prerequisites: ['pausa-autocompasion'] },
    'contar-lo-que-te-pasa': { level: 'iniciacion', approaches: ['dbt'], module: 'afrontamiento' },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'lastimarse-para-aguantar',
      title: 'Cuando hacerte daño parece aliviar',
      subtitle: 'Qué función suele cumplir, por qué tiene salida, qué hacer en el momento difícil y cómo acompañar a alguien.',
      category: 'Salud y trabajo',
      readingMin: 8,
      keyPoints: [
        'Hacerse daño a propósito, sin intención de morir, suele ser una forma de aguantar una emoción insoportable.',
        'También puede servir para castigarse, sentir algo cuando hay vacío o mostrar un dolor que no encuentra palabras.',
        'El alivio dura poco y después llegan la culpa y el secreto. Por eso tiende a repetirse.',
        'Tiene salida. La DBT y otros tratamientos psicológicos ayudan, también en adolescentes.',
        'Pregúntate siempre si hay ideas de morir. Si las hay, llama al 135, al 0800-999-0091 o al 911.',
      ],
      sections: [
        {
          heading: 'De qué hablamos',
          paragraphs: [
            'Hablamos de hacerse daño a propósito sin intención de morir. Es más frecuente en la adolescencia y en la juventud, pero puede pasar a cualquier edad (Hawton y colaboradores, 2012).',
            'No es una forma de llamar la atención ni un capricho. Suele ser una señal de mucho sufrimiento. Y merece ayuda, no reproches.',
          ],
        },
        {
          heading: 'Para qué suele servir',
          paragraphs: [
            'Matthew Nock (2009) explica que hacerse daño se mantiene porque cumple funciones. La más frecuente es bajar una emoción que se siente insoportable (Klonsky, 2007).',
            'Otras funciones son castigarse cuando hay mucho enojo con uno mismo, sentir algo cuando hay vacío o adormecimiento, y comunicar un dolor que no encuentra palabras.',
            'El alivio llega rápido, y eso hace que se repita. Después suelen venir la culpa, la vergüenza y el secreto, que suman malestar.',
          ],
        },
        {
          heading: 'Tiene salida',
          paragraphs: [
            'La terapia dialéctico-conductual, o DBT, fue creada para personas con emociones muy intensas y conductas que las dañan. Enseña a tolerar el malestar, regular las emociones y cuidar los vínculos (Linehan, 2015).',
            'En un ensayo con adolescentes, la DBT redujo las conductas de daño más que la atención habitual (Mehlum y colaboradores, 2014). La guía NICE (2022) recomienda una evaluación y un tratamiento psicológico pensado para cada persona.',
          ],
        },
        {
          heading: 'En el momento difícil',
          paragraphs: [
            'Ayuda tener un plan preparado en calma: tus señales, lo que te calma, con quién estar y a quién llamar (Stanley y Brown, 2012). La app tiene una sección «Plan de seguridad» para guardarlo.',
            'También ayuda ganar tiempo. El impulso sube y baja como una ola. Posponer diez minutos, ir donde haya gente y bajar la intensidad del cuerpo con TIPP o los cinco sentidos da tiempo a que baje.',
            'Busca atención médica si una herida es profunda, sangra mucho o se infecta.',
          ],
        },
        {
          heading: 'Siempre, preguntar por la vida',
          paragraphs: [
            'Hacerse daño sin intención de morir no es lo mismo que un intento de suicidio. Pero se asocia con más riesgo de suicidio con el tiempo (Hawton y colaboradores, 2012). Por eso conviene preguntarse siempre si hay ideas de morir.',
            'Si las hay, no esperes. Llama al 135 en CABA y GBA, al 0800-345-1435 en el resto del país, a la Línea 0800-999-0091 o al 911. Si tienes menos de 18 años, también puedes llamar a la Línea 102. En la app, el botón Ayuda está siempre a mano.',
          ],
        },
        {
          heading: 'Si te preocupa alguien',
          paragraphs: [
            'Si alguien te cuenta que se hace daño, respira antes de responder. Escucha con calma, sin retar y sin castigo. Agradece que te lo haya contado: le costó mucho.',
            'Puedes decir: «Gracias por contarme. No estás sola» o «No estás solo. Vamos a buscar ayuda juntos». Evita prometer guardar el secreto si hay riesgo para su vida. Pregunta con claridad si piensa en morir. Preguntarlo no da la idea.',
            'Acompaña a buscar ayuda profesional. Si piensa en morir, llama con esa persona al 135, al 0800-999-0091 o al 911. Cuídate también: acompañar cansa, y pedir apoyo para ti es parte de ayudar.',
          ],
        },
      ],
      caveat: {
        title: 'Primero, tu seguridad',
        body: 'Este artículo informa; no reemplaza una evaluación ni un tratamiento. Si aparecen ideas de morir, llama al 135, al 0800-999-0091 o al 911, o usa el botón Ayuda de la app. Si tienes menos de 18 años, también puedes llamar a la Línea 102.',
      },
      diagram: {
        title: 'Por qué tiende a repetirse',
        nodes: ['Emoción insoportable', 'Impulso', 'Alivio breve', 'Culpa, vergüenza y secreto', 'Más malestar'],
        caption: 'Un plan preparado, ganar tiempo, otras formas de bajar la intensidad y pedir ayuda cortan el ciclo.',
      },
      related: {
        practices: ['plan-para-el-momento-dificil', 'alternativas-para-el-impulso', 'retrasar-el-impulso', 'entender-la-funcion-del-impulso', 'volver-a-tratarte-bien', 'contar-lo-que-te-pasa', 'tipp', 'surfear-impulso', 'cinco-sentidos'],
        articles: ['habilidades-dbt', 'kit-de-crisis'],
      },
      references: [NOCK_2009, KLONSKY_2007, LINEHAN_2015, MEHLUM_2014, NICE_2022, HAWTON_2012, STANLEY_2012],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'cuidarte-en-los-momentos-dificiles',
      title: 'Cuidarte en los momentos difíciles',
      subtitle: 'Cuatro semanas para tener un plan, otras formas de bajar la intensidad y más apoyo',
      description:
        'Prepararás un plan para el momento difícil, armarás tu lista de alternativas, practicarás ganar tiempo ante el impulso y aprenderás a tratarte con cuidado y a contar lo que te pasa. Acompaña un tratamiento; no lo reemplaza. Si aparecen ideas de morir, llama al 135, al 0800-999-0091 o al 911.',
      basis: 'Linehan (2015); Stanley y Brown (2012); Nock (2009); NICE (2022).',
      rhythm: '10 minutos, 4 o 5 días por semana, siempre en un momento tranquilo.',
      weeks: [
        {
          title: 'Semana 1 · Seguridad',
          focus: 'Un plan para el momento difícil',
          description: 'Leerás sobre el tema, armarás tu plan y practicarás los cinco sentidos en calma.',
          practiceIds: ['plan-para-el-momento-dificil', 'cinco-sentidos'],
          articleIds: ['lastimarse-para-aguantar'],
          journalType: 'intencion',
        },
        {
          title: 'Semana 2 · Alternativas',
          focus: 'Otras formas de bajar la intensidad',
          description: 'Practicarás TIPP y armarás tu lista de alternativas según lo que necesitas.',
          practiceIds: ['tipp', 'alternativas-para-el-impulso'],
          articleIds: [],
        },
        {
          title: 'Semana 3 · Ganar tiempo',
          focus: 'Dejar pasar la ola',
          description: 'Ensayarás en calma cómo ganar tiempo ante el impulso y cómo surfearlo.',
          practiceIds: ['retrasar-el-impulso', 'surfear-impulso'],
          articleIds: [],
        },
        {
          title: 'Semana 4 · Cuidado y apoyo',
          focus: 'Tratarte con cuidado y contar lo que te pasa',
          description: 'Practicarás responder con cuidado después de un momento difícil y prepararás cómo pedir ayuda.',
          practiceIds: ['volver-a-tratarte-bien', 'contar-lo-que-te-pasa'],
          articleIds: [],
          journalType: 'carta-compasiva',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-dolor-que-busca-salida',
      title: 'Un dolor que busca salida',
      subtitle: 'Para qué suele servir hacerse daño, y por qué tiene salida.',
      slides: [
        { heading: 'No es un capricho', text: 'Hacerse daño a propósito no es llamar la atención. Suele ser una señal de mucho sufrimiento.' },
        { heading: 'Para aguantar', text: 'Lo más común es que sirva para bajar una emoción que se siente insoportable. El alivio llega rápido.' },
        { heading: 'Otras razones', text: 'También puede servir para castigarse, para sentir algo cuando hay vacío o para mostrar un dolor sin palabras.' },
        { heading: 'El precio', text: 'Después suelen venir la culpa, la vergüenza y el secreto. Por eso tiende a repetirse.' },
        { heading: 'Tiene salida', text: 'Hay tratamientos que ayudan, como la DBT. Se aprenden otras formas de bajar la intensidad.' },
        { heading: 'Pedir ayuda', text: 'Si piensas en morir, llama al 135, al 0800-999-0091 o al 911. Si tienes menos de 18 años, también al 102.' },
      ],
      related: { practices: ['entender-la-funcion-del-impulso', 'plan-para-el-momento-dificil'], articles: ['lastimarse-para-aguantar'] },
      references: [NOCK_2009, KLONSKY_2007, LINEHAN_2015],
    },
    {
      id: 'pildora-ganar-tiempo',
      title: 'Ganar tiempo',
      subtitle: 'Qué hacer cuando aparece el impulso.',
      slides: [
        { heading: 'Es una ola', text: 'El impulso se siente urgente, pero no dura para siempre. Sube, llega arriba y baja.' },
        { heading: 'Diez minutos', text: 'Dite: «Ahora no. Voy a esperar diez minutos». Después, otros diez.' },
        { heading: 'Cambiar de lugar', text: 'Ve donde haya otras personas. Pon distancia de lo que podrías usar para hacerte daño.' },
        { heading: 'Bajar el cuerpo', text: 'Agua fría en la cara, moverte rápido o respirar lento. TIPP y los cinco sentidos ayudan.' },
        { heading: 'Tu plan', text: 'Abre tu plan para el momento difícil. Llama a alguien de tu lista.' },
        { heading: 'Si no baja', text: 'Si piensas en morir, llama al 135 o al 911, o toca el botón Ayuda de la app.' },
      ],
      related: { practices: ['retrasar-el-impulso', 'tipp', 'cinco-sentidos', 'surfear-impulso'], articles: ['lastimarse-para-aguantar'] },
      references: [LINEHAN_2015, BOWEN_2009, STANLEY_2012],
    },
    {
      id: 'pildora-acompanar-sin-castigo',
      title: 'Si alguien te cuenta',
      subtitle: 'Cómo acompañar con calma a alguien que se hace daño.',
      slides: [
        { heading: 'Respirar primero', text: 'Es normal asustarse. Respira antes de responder. Tu calma ayuda más que tus palabras.' },
        { heading: 'Escuchar', text: 'Escucha sin retar y sin castigo. Agradece que te lo haya contado. Le costó mucho.' },
        { heading: 'Qué decir', text: 'Puedes decir: «Gracias por contarme. Vamos a buscar ayuda juntos».' },
        { heading: 'Preguntar por la vida', text: 'Pregunta con claridad si piensa en morir. Preguntarlo no da la idea. Si dice que sí, llama al 135 o al 911.' },
        { heading: 'Buscar ayuda', text: 'Acompaña a consultar a un profesional. Para chicos y adolescentes también está la Línea 102.' },
        { heading: 'Cuidarte', text: 'Acompañar cansa. Pide apoyo para ti también. Es parte de ayudar.' },
      ],
      related: { practices: ['contar-lo-que-te-pasa'], articles: ['lastimarse-para-aguantar'] },
      references: [NICE_2022, HAWTON_2012],
    },
  ],

  // ================================================================== guías para familias
  kidGuides: [
    {
      id: 'adolescente-que-se-lastima',
      title: 'Si tu hijo o hija adolescente se hace daño',
      subtitle: 'Cómo responder con calma y sin castigo, qué decir y dónde buscar ayuda.',
      readingMin: 6,
      keyPoints: [
        'Hacerse daño suele ser una forma de aguantar un dolor emocional muy fuerte. No es un capricho.',
        'Responder con calma y sin castigo ayuda a que vuelva a contarte.',
        'Pregunta siempre, con claridad, si piensa en morir. Preguntarlo no da la idea.',
        'Hay tratamiento: la DBT para adolescentes tiene buena evidencia. Busca ayuda profesional.',
      ],
      sections: [
        {
          heading: 'Primero, la calma',
          paragraphs: [
            'Enterarte de que tu hijo o hija se hace daño asusta mucho. Es normal sentir miedo, culpa o enojo. Respira antes de hablar. Tu calma le muestra que puede contarte.',
            'Hacerse daño suele servir para bajar una emoción insoportable, castigarse o sentir algo cuando hay vacío (Nock, 2009). Es una señal de sufrimiento, no de manipulación.',
          ],
        },
        {
          heading: 'Qué decir y qué evitar',
          paragraphs: [
            'Escucha más de lo que hablas. Agradece que te lo cuente. Di lo que sientes sin culparle: «Me preocupa y te quiero ayudar».',
            'Evita los castigos, los gritos, las amenazas y pedir que lo deje de golpe. También evita revisar su cuerpo a la fuerza. Eso suele llevar a esconder más.',
            'Pregunta con claridad si piensa en morir. Si dice que sí, o tienes dudas, busca ayuda ese mismo día.',
          ],
        },
        {
          heading: 'Buscar ayuda',
          paragraphs: [
            'Consulta con un profesional de salud mental. La DBT para adolescentes, que incluye a la familia, redujo estas conductas en un ensayo controlado (Mehlum y colaboradores, 2014). La guía NICE (2022) recomienda una evaluación y un tratamiento psicológico.',
            'La Línea 102 atiende a chicos y adolescentes. La Línea Nacional de Salud Mental 0800-999-0091 es gratis y atiende siempre. Si hay ideas de morir, llama al 135 o al 911.',
            'Busca atención médica si una herida es profunda, sangra mucho o se infecta.',
          ],
        },
        {
          heading: 'En casa, día a día',
          paragraphs: [
            'Hagan juntos un plan para los momentos difíciles: señales, qué le calma, a quién puede llamar. Pongan distancia, sin dramatismo, de lo que podría usar para hacerse daño.',
            'Practiquen en calma habilidades para bajar la intensidad, como las de la sección para chicos. Y cuídate tú también: acompañar cansa, y pedir apoyo para ti es parte de cuidar.',
          ],
        },
      ],
      phrases: [
        '«Gracias por contarme. Sé que no fue fácil»',
        '«No estoy enojado. Estoy preocupado y te quiero ayudar»',
        '«No estoy enojada. Estoy preocupada y te quiero ayudar»',
        '«¿Estás pensando en morir? Te lo pregunto porque me importas»',
        '«Esto lo vamos a enfrentar juntos. Vamos a buscar ayuda»',
      ],
      caveat: {
        title: 'Cuándo pedir ayuda enseguida',
        body: 'Si habla de morir, si se despide o regala sus cosas, o si una herida es profunda, sangra mucho o se infecta, no esperes. Llama al 135, al 0800-999-0091, a la Línea 102 o al 911.',
      },
      activities: ['tipp-rapido', 'ola-de-emocion', 'stop', 'voz-amable', 'pedir-ayuda'],
      references: [NOCK_2009, MEHLUM_2014, NICE_2022, HAWTON_2012],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'autolesion-no-suicida', term: 'Autolesión no suicida', definition: 'Hacerse daño a propósito sin intención de morir. Suele ser una forma de aguantar un dolor emocional muy fuerte, y tiene tratamiento.', articleId: 'lastimarse-para-aguantar' },
    { id: 'funcion-del-impulso', term: 'Función del impulso', definition: 'Lo que una conducta consigue para quien la hace, como bajar una emoción, castigarse o sentir algo. Entenderla ayuda a buscar otras formas.', practiceId: 'entender-la-funcion-del-impulso' },
    { id: 'demora-del-impulso', term: 'Ganar tiempo ante el impulso', definition: 'Posponer unos minutos lo que pide el impulso, mientras se baja la intensidad del cuerpo, para que la ola pase.', practiceId: 'retrasar-el-impulso' },
    { id: 'plan-de-seguridad', term: 'Plan de seguridad', definition: 'Plan escrito en calma para una crisis: señales, lo que calma, con quién estar, a quién llamar y cómo hacer más seguro el entorno.', practiceId: 'plan-para-el-momento-dificil', seeAlso: { href: '/plan-de-seguridad', label: 'Plan de seguridad' } },
  ],
};
