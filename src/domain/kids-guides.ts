import type { Reference } from './types';

/**
 * Guías para madres, padres y tutores: cómo acompañar las emociones de chicos de 4 a 12 años.
 * Misma regla editorial que la biblioteca: cada afirmación empírica con su referencia y,
 * donde la evidencia es limitada, se dice.
 */

export interface KidGuide {
  id: string;
  title: string;
  subtitle: string;
  readingMin: number;
  keyPoints: string[];
  sections: { heading: string; paragraphs: string[] }[];
  /** Frases listas para usar, entre comillas españolas. */
  phrases: string[];
  caveat?: { title: string; body: string };
  /** Actividades de la sección para chicos que acompañan la guía. */
  activities: string[];
  references: Reference[];
}

export const KID_GUIDES: KidGuide[] = [
  {
    id: 'entrenador-emocional',
    title: 'Ser entrenador emocional',
    subtitle: 'Cómo acompañar una emoción fuerte sin taparla ni dejarla sola.',
    readingMin: 5,
    keyPoints: [
      'Las emociones de tu hijo o hija son una oportunidad para acercarse, no un problema que apagar.',
      'Primero nombrar y validar; después, si hace falta, poner límites y buscar soluciones.',
      'Validar no es estar de acuerdo con todo: todas las emociones se aceptan, no todas las conductas.',
    ],
    sections: [
      {
        heading: 'Qué es el entrenamiento emocional',
        paragraphs: [
          'John Gottman y su equipo observaron cómo hablaban los padres con sus hijos de las emociones. Encontraron que algunos padres trataban las emociones negativas como algo que había que hacer desaparecer rápido. Otros las veían como un momento para acercarse y enseñar.',
          'A estos últimos los llamaron «entrenadores emocionales». Sus hijos regulaban mejor sus emociones, tenían mejores relaciones con otros chicos y menos problemas de conducta años después (Gottman y colaboradores, 1996).',
        ],
      },
      {
        heading: 'Los cinco pasos',
        paragraphs: [
          'Darte cuenta de la emoción, sobre todo cuando todavía es pequeña. Verla como una oportunidad para conectar. Escuchar con empatía y validar lo que siente. Ayudarle a ponerle nombre. Y, al final, poner límites a la conducta y buscar juntos qué hacer.',
          'El orden importa. Si saltas directo a la solución o al reto, tu hijo o hija aprende que sus emociones molestan. Si primero se siente comprendido, después escucha mucho mejor.',
        ],
      },
      {
        heading: 'Por qué funciona',
        paragraphs: [
          'Los chicos aprenden a regularse primero con un adulto que los regula. Cuando le prestas tu calma, su cuerpo se calma con el tuyo. Con el tiempo, aprende a hacerlo solo. La forma en que la familia habla de las emociones es uno de los factores que más influyen en cómo se desarrolla esa capacidad (Morris y colaboradores, 2007).',
        ],
      },
    ],
    phrases: ['«Veo que estás muy enojado. Tiene sentido, querías seguir jugando»', '«Está bien estar triste. Estoy aquí»', '«Puedes enojarte, pero no puedes pegar. ¿Qué podemos hacer?»'],
    activities: ['como-me-siento', 'caras-y-emociones', 'emociones-en-el-cuerpo'],
    references: [
      {
        citation:
          'Gottman, J. M., Katz, L. F., & Hooven, C. (1996). Parental meta-emotion philosophy and the emotional life of families: Theoretical models and preliminary data. Journal of Family Psychology, 10(3), 243–268.',
        doi: '10.1037/0893-3200.10.3.243',
      },
      {
        citation:
          'Morris, A. S., Silk, J. S., Steinberg, L., Myers, S. S., & Robinson, L. R. (2007). The role of the family context in the development of emotion regulation. Social Development, 16(2), 361–388.',
        doi: '10.1111/j.1467-9507.2007.00389.x',
      },
    ],
  },
  {
    id: 'tiempo-especial',
    title: 'Diez minutos de tiempo especial',
    subtitle: 'Un rato de juego donde tu hijo o hija dirige y tú acompañas.',
    readingMin: 4,
    keyPoints: [
      'Diez minutos al día de juego sin pantallas, en el que tu hijo o hija elige qué hacer.',
      'Tú describes, imitas y elogias. No das órdenes, no preguntas mucho y no corriges.',
      'Fortalece el vínculo y, con el tiempo, mejora la conducta.',
    ],
    sections: [
      {
        heading: 'De dónde viene',
        paragraphs: [
          'El tiempo especial viene de la terapia de interacción padres-hijos (PCIT) y de otros programas de crianza con evidencia. Antes de trabajar los límites, estos programas dedican semanas a fortalecer el vínculo con un rato de juego diario.',
          'Una revisión de estudios encontró que estos programas reducen los problemas de conducta en la infancia de forma clara (Thomas y Zimmer-Gembeck, 2007).',
        ],
      },
      {
        heading: 'Cómo hacerlo',
        paragraphs: [
          'Elige un horario fijo y avisa: «Ahora es nuestro tiempo especial». Deja el teléfono lejos. Tu hijo o hija elige el juego, siempre que sea tranquilo y sin pantallas.',
          'Durante esos diez minutos, describe lo que hace («Estás armando una torre muy alta»), imita su juego y elogia cosas concretas («Me gusta cómo esperaste tu turno»). Evita dar órdenes, hacer muchas preguntas o corregir. Si se porta mal, mira para otro lado un momento; si es algo peligroso, termina el tiempo especial con calma.',
        ],
      },
    ],
    phrases: ['«Es nuestro tiempo especial. ¿A qué quieres jugar?»', '«Estás eligiendo los colores con mucho cuidado»', '«Gracias por compartir los bloques conmigo»'],
    activities: ['superpoder-amable', 'frasco-de-gratitud'],
    references: [
      {
        citation:
          'Thomas, R., & Zimmer-Gembeck, M. J. (2007). Behavioral outcomes of Parent-Child Interaction Therapy and Triple P—Positive Parenting Program: A review and meta-analysis. Journal of Abnormal Child Psychology, 35(3), 475–495.',
        doi: '10.1007/s10802-007-9104-9',
      },
    ],
  },
  {
    id: 'berrinches',
    title: 'Berrinches y desbordes',
    subtitle: 'Qué hacer en el momento y qué hacer después.',
    readingMin: 5,
    keyPoints: [
      'En pleno desborde el cerebro no puede aprender: primero calma, después charla.',
      'Tu calma es la herramienta principal. Baja la voz, acércate y acompaña.',
      'Los límites se mantienen, pero con cariño.',
    ],
    sections: [
      {
        heading: 'En el momento',
        paragraphs: [
          'Cuando un chico está desbordado, la parte de su cerebro que razona está casi apagada. Los sermones, las amenazas o las explicaciones no llegan. Lo que sí llega es tu tono, tu cara y tu cuerpo.',
          'Quédate cerca, baja la voz y usa pocas palabras: «Estoy aquí. Te ayudo a calmarte». Si hay riesgo de que se lastime o lastime a alguien, protege con firmeza y sin enojo. Si necesitas calmarte tú primero, está bien decirlo: «Voy a respirar un momento y vuelvo».',
        ],
      },
      {
        heading: 'Después, en calma',
        paragraphs: [
          'Cuando ya pasó, busca un momento tranquilo para hablar. Pongan nombre a lo que sintió, piensen juntos qué podría hacer la próxima vez y, si hace falta, cómo reparar lo que se rompió.',
          'Aquí sirven las actividades de esta sección: practicar la tortuga, el volcán o el globo cuando todo está bien hace que estén disponibles cuando llega el desborde.',
        ],
      },
      {
        heading: 'Lo que es esperable',
        paragraphs: [
          'Los berrinches son frecuentes hasta los 5 o 6 años y van bajando con la edad. Que un chico de 4 años tenga varios por semana es parte del desarrollo. Si son muy largos, muy violentos o siguen siendo frecuentes después de los 7 años, vale la pena consultar.',
        ],
      },
    ],
    phrases: ['«Estoy aquí. Esperamos juntos a que pase»', '«No te voy a dejar pegar. Te voy a ayudar a calmarte»', '«¿Qué podríamos hacer la próxima vez que te enojes así?»'],
    caveat: {
      title: 'Cuándo consultar',
      body: 'Consulta con un profesional si los desbordes duran más de 25 minutos seguidos, si se lastima o lastima a otros con frecuencia, o si después de los 7 años siguen siendo casi diarios.',
    },
    activities: ['tortuga', 'volcan', 'globo-magico', 'huele-la-flor'],
    references: [
      {
        citation:
          'Morris, A. S., Silk, J. S., Steinberg, L., Myers, S. S., & Robinson, L. R. (2007). The role of the family context in the development of emotion regulation. Social Development, 16(2), 361–388.',
        doi: '10.1111/j.1467-9507.2007.00389.x',
      },
    ],
  },
  {
    id: 'acompanar-la-ansiedad',
    title: 'Acompañar la ansiedad sin alimentarla',
    subtitle: 'Por qué evitar lo que da miedo lo hace crecer, y qué hacer en cambio.',
    readingMin: 6,
    keyPoints: [
      'Es natural querer proteger a tu hijo o hija de lo que le da miedo. Pero evitarlo siempre hace que el miedo crezca.',
      'La clave es combinar dos cosas: aceptar que el miedo es real y confiar en que puede enfrentarlo.',
      'Los programas para padres funcionan tan bien como la terapia directa con el chico.',
    ],
    sections: [
      {
        heading: 'La trampa de la acomodación',
        paragraphs: [
          'Cuando un chico tiene miedo, los adultos hacemos cosas para aliviarlo: lo acompañamos a dormir todas las noches, respondemos la misma pregunta diez veces o hablamos por él en el negocio. Se llama acomodación. Alivia en el momento, pero le dice al chico que solo no puede.',
          'Con el tiempo, el miedo crece y la familia se organiza alrededor de él. Reducir la acomodación de a poco, con cariño, es uno de los cambios que más ayudan.',
        ],
      },
      {
        heading: 'Apoyo: aceptar y confiar',
        paragraphs: [
          'El programa SPACE enseña a los padres a responder con dos mensajes juntos: «Entiendo que tienes miedo» y «Confío en que puedes con esto». En un ensayo clínico, este programa para padres fue tan eficaz como la terapia cognitivo-conductual con el chico (Lebowitz y colaboradores, 2020).',
          'La terapia cognitivo-conductual para la ansiedad infantil tiene muy buena evidencia (James y colaboradores, 2015). Su parte más eficaz es enfrentar lo que da miedo de forma gradual, con apoyo (Kendall, 1994).',
        ],
      },
      {
        heading: 'Cómo hacerlo en casa',
        paragraphs: [
          'Elijan una sola situación para empezar. Avisa con anticipación lo que va a cambiar: «Desde el lunes, te voy a acompañar a la cama, pero después me voy a mi cuarto. Sé que te va a costar, y sé que puedes». Sostén el cambio con calma, aunque proteste. Y celebra el esfuerzo.',
          'La escalera valiente de esta sección sirve para armar los pasos juntos, del más fácil al más difícil.',
        ],
      },
    ],
    phrases: ['«Sé que da miedo. Y sé que puedes hacerlo»', '«Ya te respondí. Confío en que puedes manejar esa duda»', '«Estoy orgulloso de que lo intentaste»'],
    caveat: {
      title: 'Cuándo pedir ayuda',
      body: 'Si el miedo le impide ir a la escuela, dormir o hacer amigos, o si tiene ataques de pánico, consulta con un profesional de salud mental infantil. La escalera valiente no reemplaza un tratamiento.',
    },
    activities: ['escalera-valiente', 'pasito-valiente', 'cajita-preocupaciones', 'detective-de-pensamientos'],
    references: [
      {
        citation:
          'Lebowitz, E. R., Marin, C., Martino, A., Shimshoni, Y., & Silverman, W. K. (2020). Parent-based treatment as efficacious as cognitive-behavioral therapy for childhood anxiety: A randomized noninferiority study of supportive parenting for anxious childhood emotions. Journal of the American Academy of Child & Adolescent Psychiatry, 59(3), 362–372.',
        doi: '10.1016/j.jaac.2019.02.014',
      },
      {
        citation:
          'Kendall, P. C. (1994). Treating anxiety disorders in children: Results of a randomized clinical trial. Journal of Consulting and Clinical Psychology, 62(1), 100–110.',
        doi: '10.1037/0022-006X.62.1.100',
      },
      {
        citation:
          'James, A. C., James, G., Cowdrey, F. A., Soler, A., & Choke, A. (2015). Cognitive behavioural therapy for anxiety disorders in children and adolescents. Cochrane Database of Systematic Reviews, (2), CD004690.',
        doi: '10.1002/14651858.CD004690.pub4',
      },
    ],
  },
  {
    id: 'validar',
    title: 'Validar: «tiene sentido que te sientas así»',
    subtitle: 'La herramienta más simple y más potente para acompañar emociones.',
    readingMin: 4,
    keyPoints: [
      'Validar es mostrar que entiendes por qué se siente así, aunque no estés de acuerdo con lo que hizo.',
      'Invalidar («no es para tanto», «no llores») no hace que la emoción se vaya: la hace más fuerte.',
      'Se puede validar y poner un límite en la misma frase.',
    ],
    sections: [
      {
        heading: 'Qué es y qué no es',
        paragraphs: [
          'Validar es decirle a tu hijo o hija, con palabras o con gestos, que lo que siente tiene sentido. No significa darle la razón en todo ni cumplir lo que pide. Puedes validar el enojo por tener que dejar de jugar y, aun así, apagar la tele.',
          'En la DBT para niños, la validación de los padres es una de las habilidades centrales. Es lo que permite que el chico se calme lo suficiente para aprender otras habilidades (Perepletchikova y colaboradores, 2017).',
        ],
      },
      {
        heading: 'Cómo se hace',
        paragraphs: [
          'Escucha sin interrumpir. Refleja lo que viste: «Te pusiste muy triste cuando tu amigo se fue». Busca el sentido: «Claro, estaban jugando muy bien». Y muestra que es normal: «A mí también me pasaría».',
          'Las frases que invalidan suelen empezar con «no»: «no pasa nada», «no es para tanto», «no llores». Aunque se dicen con buena intención, el chico aprende que lo que siente está mal.',
        ],
      },
    ],
    phrases: ['«Tiene sentido que estés enojado. Querías seguir jugando»', '«Entiendo que te dé vergüenza. A mí también me daría»', '«Estás triste y está bien. Y igual es hora de irnos»'],
    activities: ['como-me-siento', 'mano-en-el-corazon', 'ola-de-emocion'],
    references: [
      {
        citation:
          'Perepletchikova, F., Nathanson, D., Axelrod, S. R., Merrill, C., Walker, A., Grossman, M., Rebeta, J., Scahill, L., Kaufman, J., Flye, B., Mauer, E., & Walkup, J. (2017). Randomized clinical trial of dialectical behavior therapy for preadolescent children with disruptive mood dysregulation disorder: Feasibility and outcomes. Journal of the American Academy of Child & Adolescent Psychiatry, 56(10), 832–840.',
        doi: '10.1016/j.jaac.2017.07.789',
      },
    ],
  },
  {
    id: 'usar-la-app',
    title: 'Cómo usar esta sección con tu hijo o hija',
    subtitle: 'Supervisión, tiempo de pantalla y privacidad.',
    readingMin: 3,
    keyPoints: [
      'Está pensada para usarse juntos, sobre todo con los más chicos.',
      'Pocos minutos por día alcanzan. Lo importante es llevar las habilidades a la vida real.',
      'Tú ves todo lo que registra. Díselo con claridad.',
    ],
    sections: [
      {
        heading: 'Juntos, pocos minutos',
        paragraphs: [
          'Las actividades duran entre 1 y 5 minutos. Con chicos de 4 a 6 años, hazlas siempre a su lado. De 7 a 12, puede hacerlas solo, pero conviene que después charlen un momento sobre lo que hizo.',
          'La pantalla es solo el punto de partida. La tortuga, el globo o el semáforo funcionan de verdad cuando los usan en casa, en el auto o antes de dormir, sin el teléfono.',
        ],
      },
      {
        heading: 'Privacidad',
        paragraphs: [
          'Tu hijo o hija no tiene cuenta propia: usa tu cuenta, en su propio perfil. No se pide su correo ni su apellido. Lo que marca (emociones, actividades y cosas buenas del día) lo ves en tu panel. Puedes borrar su perfil y todos sus registros cuando quieras.',
          'Para que el modo chico no le deje entrar a tu parte de la app, se pide un código de cuatro números para salir. Ese código se guarda solo en este dispositivo.',
        ],
      },
      {
        heading: 'Lo que esta sección no es',
        paragraphs: [
          'No es un tratamiento ni sirve para diagnosticar. Si te preocupa cómo está tu hijo o hija, la guía «Cuándo consultar» te ayuda a decidir. Ante una urgencia, llama al 911.',
        ],
      },
    ],
    phrases: ['«Esto que marcas lo puedo ver yo, para acompañarte mejor»', '«¿Me muestras lo que hiciste hoy?»'],
    activities: ['como-me-siento', 'frasco-de-gratitud'],
    references: [],
  },
  {
    id: 'cuando-consultar',
    title: 'Cuándo consultar con un profesional',
    subtitle: 'Señales para pedir ayuda y dónde encontrarla.',
    readingMin: 4,
    keyPoints: [
      'Consultar no es exagerar: cuanto antes se pide ayuda, más simple suele ser.',
      'Fíjate en tres cosas: cuánto dura, cuánto le hace sufrir y cuánto le impide hacer su vida.',
      'Si hay riesgo para su seguridad, la consulta es urgente.',
    ],
    sections: [
      {
        heading: 'Señales para consultar pronto',
        paragraphs: [
          'Tristeza, enojo o miedo que duran más de dos semanas y no mejoran. Cambios fuertes en el sueño o en la comida. Que deje de jugar, de ver a sus amigos o de querer ir a la escuela. Dolores de panza o de cabeza frecuentes sin causa médica. Una caída clara en la escuela.',
          'También vale consultar si tú sientes que ya no sabes cómo ayudar. Pedir apoyo para la crianza también es cuidar a tu hijo o hija.',
        ],
      },
      {
        heading: 'Señales de urgencia',
        paragraphs: [
          'Si habla de querer morirse o de hacerse daño, si se lastima a propósito, si cuenta que alguien lo maltrata o abusa, o si de golpe parece desconectado de la realidad, busca ayuda ese mismo día. Ante un peligro inmediato, llama al 911.',
          'La Línea 102 atiende de forma gratuita situaciones en las que se vulneran los derechos de niñas, niños y adolescentes. La puede usar un adulto o el propio chico. Funciona en la mayoría de las provincias; si en la tuya no atiende, llama al 911.',
        ],
      },
      {
        heading: 'A quién acudir',
        paragraphs: [
          'Un buen primer paso es su pediatra, que puede orientar y derivar. También los equipos de orientación de la escuela y los servicios de salud mental infantojuvenil de los hospitales públicos.',
        ],
      },
    ],
    phrases: ['«Te veo triste hace días. ¿Quieres contarme? Estoy para ayudarte»', '«Vamos a pedir ayuda a alguien que sabe de esto. No es tu culpa»'],
    activities: [],
    references: [],
  },
];

export const KID_GUIDE_BY_ID = Object.fromEntries(KID_GUIDES.map((g) => [g.id, g])) as Record<string, KidGuide>;
