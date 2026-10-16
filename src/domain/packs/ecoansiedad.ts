import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Ecoansiedad»: angustia por el cambio climático y la crisis ambiental.
 *  - no es un trastorno: es una respuesta comprensible ante una amenaza real (Clayton);
 *  - preocupación que moviliza y preocupación que paraliza;
 *  - afrontamiento centrado en el sentido (Ojala), acción colectiva y valores;
 *  - límites con las noticias; duelo ecológico (Cunsolo y Ellis) y solastalgia (Albrecht);
 *  - conversar con chicos sobre el clima sin asustar (Hickman y colaboradores);
 *  - esperanza activa: esperanza que se apoya en lo que hacemos, no en negar el problema.
 *
 * Reglas del paquete: nada de política partidaria ni de datos climáticos cuantitativos;
 * no se patologiza la preocupación, pero se indica cuándo consultar (cuando impide dormir,
 * trabajar o disfrutar, o aparece desesperanza). Enlaza con 'aplazar-preocupacion',
 * 'brujula-valores', 'accion-comprometida', 'plan-celular-intencional' y 'pausa-autocompasion'.
 */

const CLAYTON_2020: Reference = {
  citation: 'Clayton, S. (2020). Climate anxiety: Psychological responses to climate change. Journal of Anxiety Disorders, 74, 102263.',
  doi: '10.1016/j.janxdis.2020.102263',
};
const HICKMAN_2021: Reference = {
  citation: 'Hickman, C., Marks, E., Pihkala, P., Clayton, S., Lewandowski, R. E., Mayall, E. E., … van Susteren, L. (2021). Climate anxiety in children and young people and their beliefs about government responses to climate change: a global survey. The Lancet Planetary Health, 5(12), e863–e873.',
  doi: '10.1016/S2542-5196(21)00278-3',
};
const OJALA_2012: Reference = {
  citation: 'Ojala, M. (2012). How do children cope with global climate change? Coping strategies, engagement, and well-being. Journal of Environmental Psychology, 32(3), 225–233.',
  doi: '10.1016/j.jenvp.2012.02.004',
};
const ALBRECHT_2007: Reference = {
  citation: 'Albrecht, G., Sartore, G.-M., Connor, L., Higginbotham, N., Freeman, S., Kelly, B., … Pollard, G. (2007). Solastalgia: the distress caused by environmental change. Australasian Psychiatry, 15(Suppl 1), S95–S98.',
};
const CUNSOLO_2018: Reference = {
  citation: 'Cunsolo, A., & Ellis, N. R. (2018). Ecological grief as a mental health response to climate change-related loss. Nature Climate Change, 8(4), 275–281.',
  doi: '10.1038/s41558-018-0092-2',
};

/** Aviso común: la preocupación es comprensible, pero a veces conviene consultar. */
const CONSULTAR =
  'La angustia por el clima es comprensible y no es un trastorno. Pero si no te deja dormir, trabajar o disfrutar durante semanas, consulta con un profesional. Si sientes desesperanza o tienes ideas de morir, pide ayuda hoy: Centro de Asistencia al Suicida 135 (CABA y GBA; resto del país 0800-345-1435), Línea Nacional de Salud Mental 0800-999-0091 o el 911 en una urgencia. También puedes usar el botón Ayuda de la app.';

export const ECOANSIEDAD_PACK: ContentPack = {
  id: 'ecoansiedad',

  // ================================================================== prácticas
  practices: [
    {
      id: 'pausa-ante-la-noticia',
      title: 'Pausa ante una noticia que angustia',
      family: 'attentional',
      skills: ['attention', 'resilience'],
      summary: 'Una pausa de dos minutos para cuando una noticia sobre el clima o el ambiente te deja con el pecho apretado.',
      mechanism: 'Volver al cuerpo y al presente baja la alarma. Con menos alarma, puedes elegir qué hacer con lo que leíste.',
      evidenceLevel: 'preliminar',
      evidence: [CLAYTON_2020],
      micro: true,
      howItWorks: [
        'Las noticias sobre la crisis ambiental pueden disparar miedo, tristeza o enojo en segundos. Es una reacción comprensible ante algo que importa (Clayton, 2020).',
        'Esta pausa no busca que dejes de sentir. Busca que la ola baje un poco antes de seguir leyendo, compartir o decidir algo.',
      ],
      tips: [
        'Deja el celular boca abajo durante la pausa.',
        'Si estás en la calle, puedes hacerla con los ojos abiertos.',
        'Después, elige si quieres seguir leyendo o no.',
      ],
      obstacles: [{ q: 'Siento que pausar es mirar para otro lado.', a: 'Cuidarte no es desentenderte. Con la mente más calma se piensa mejor qué hacer.' }],
      steps: [
        { title: 'Soltar', instruction: 'Deja el celular. Apoya los pies en el piso.', durationSec: 15, kind: 'instruction' },
        { title: 'Respirar', instruction: 'Respira despacio. Suelta el aire más lento de lo que entra.', durationSec: 40, kind: 'breath' },
        { title: 'Nombrar', instruction: 'Dite qué sientes: «Siento miedo», «siento tristeza» o «siento enojo».', durationSec: 20, kind: 'reflection' },
        { title: 'Mirar alrededor', instruction: 'Nombra cinco cosas que ves cerca de ti. Estás aquí, ahora.', durationSec: 30, kind: 'instruction' },
        { title: 'Elegir', instruction: 'Pregúntate: «¿Necesito seguir leyendo ahora?». Haz lo que te cuide.', durationSec: 20, kind: 'reflection' },
      ],
    },
    {
      id: 'preocupacion-que-moviliza',
      title: 'Preocupación que moviliza o que paraliza',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Distinguir cuándo tu preocupación por el ambiente te empuja a actuar y cuándo te deja dando vueltas sin salida.',
      mechanism: 'Una preocupación que lleva a un paso concreto es útil. Una que gira sin parar agota. Notar la diferencia ayuda a elegir.',
      evidenceLevel: 'preliminar',
      evidence: [CLAYTON_2020, OJALA_2012],
      howItWorks: [
        'Susan Clayton propone ver la ansiedad por el clima como una respuesta comprensible ante una amenaza real. Sólo en algunas personas se vuelve tan fuerte que traba la vida diaria (Clayton, 2020).',
        'Algo de preocupación puede ayudar: nos hace prestar atención y actuar. El problema aparece cuando gira en círculos, no lleva a nada y deja sin energía.',
        'Si la preocupación te ocupa muchas horas, puedes probar también «Aplazar la preocupación».',
      ],
      tips: [
        'Escribe la preocupación tal como suena en tu cabeza.',
        'Un paso chico cuenta. No hace falta resolver todo.',
        'Si sólo hay preguntas sin respuesta, eso también es información.',
      ],
      obstacles: [{ q: 'Nada de lo que yo haga alcanza.', a: 'Es cierto que nadie lo resuelve por su cuenta. Pero tus acciones se suman a las de muchas personas, y actuar con otros también cambia cómo te sientes.' }],
      steps: [
        { title: 'Llegar', instruction: 'Siéntate con calma. Respira despacio tres veces.', durationSec: 30, kind: 'breath' },
        { title: 'La preocupación', instruction: 'Escribe qué te preocupa del ambiente o del clima. Usa tus palabras.', durationSec: 60, kind: 'reflection' },
        { title: 'El efecto', instruction: 'Pregúntate: ¿esta preocupación me lleva a hacer algo, o me deja dando vueltas?', durationSec: 45, kind: 'reflection' },
        { title: 'En el cuerpo', instruction: 'Nota cómo está tu cuerpo. ¿Tenso, cansado, con energía? Anótalo.', durationSec: 40, kind: 'reflection' },
        { title: 'Un paso', instruction: 'Si moviliza, elige un paso chico para esta semana. Escribe qué harás y cuándo.', durationSec: 60, kind: 'reflection' },
        { title: 'Un límite', instruction: 'Si paraliza, elige un límite. Por ejemplo, no leer noticias de noche. Anótalo.', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'mi-dieta-de-noticias',
      title: 'Mi plan con las noticias',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Decidir cuándo, dónde y cuánto te informas sobre el ambiente, para estar al tanto sin vivir en alarma.',
      mechanism: 'Informarse en momentos elegidos, y no a toda hora, baja la exposición a la alarma sin dejar de saber lo que pasa.',
      evidenceLevel: 'preliminar',
      evidence: [CLAYTON_2020, HICKMAN_2021],
      howItWorks: [
        'Las noticias sobre la crisis ambiental llegan sin pausa al celular. Leerlas a cada rato, o antes de dormir, puede mantener el cuerpo en alerta.',
        'Poner límites no es negar el problema. Es elegir cómo informarte: en un horario, de fuentes confiables, y con un plan para lo que sientas después.',
        'Si el celular en general te cuesta, puedes probar «Plan de uso intencional del celular».',
      ],
      tips: [
        'Elige un horario fijo, lejos de la hora de dormir.',
        'Prefiere una o dos fuentes confiables a muchas fuentes alarmistas.',
        'Equilibra: busca también noticias de lo que la gente está haciendo.',
      ],
      obstacles: [{ q: 'Siento culpa si no me informo.', a: 'Puedes informarte en menos tiempo. Saber un poco y actuar vale más que leer todo y quedar sin fuerzas.' }],
      steps: [
        { title: 'Mirar', instruction: 'Piensa en ayer. ¿Cuántas veces leíste o viste algo sobre el ambiente? ¿A qué hora?', durationSec: 60, kind: 'reflection' },
        { title: 'El efecto', instruction: 'Anota cómo te sentiste después. ¿Con ganas de hacer algo, o con más angustia?', durationSec: 45, kind: 'reflection' },
        { title: 'Cuándo', instruction: 'Elige un momento del día para informarte. Escribe la hora y cuánto tiempo.', durationSec: 45, kind: 'reflection' },
        { title: 'De dónde', instruction: 'Elige una o dos fuentes que te parezcan serias. Anótalas.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que no', instruction: 'Elige un momento sin noticias. Por ejemplo, la cama o la comida.', durationSec: 30, kind: 'reflection' },
        { title: 'Después', instruction: 'Decide qué harás si una noticia te angustia. Puede ser la pausa breve o hablar con alguien.', durationSec: 40, kind: 'reflection' },
      ],
    },
    {
      id: 'afrontamiento-con-sentido',
      title: 'Esperanza con los pies en la tierra',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Buscar razones de esperanza que no niegan el problema: lo que otras personas hacen, lo que tú valoras y lo que ya cambió.',
      mechanism: 'El afrontamiento centrado en el sentido sostiene el ánimo sin negar la amenaza. Así es más fácil seguir actuando.',
      evidenceLevel: 'preliminar',
      evidence: [OJALA_2012, CLAYTON_2020],
      howItWorks: [
        'Maria Ojala estudió cómo chicos y chicas afrontan la preocupación por el clima. Describió tres caminos: resolver problemas, restarle importancia y buscar sentido (Ojala, 2012).',
        'Restarle importancia calmaba, pero se asociaba con menos compromiso. Buscar sentido, en cambio, se asociaba con más bienestar sin dejar de actuar. Incluye confiar en otras personas y ver lo que sí se está haciendo.',
        'A esto le podemos llamar esperanza activa: no es esperar que todo salga bien, sino apoyarse en lo que uno hace con otros.',
      ],
      tips: [
        'Busca ejemplos reales y cercanos: tu barrio, una escuela, una cooperativa.',
        'La esperanza no tiene que ser grande. Alcanza con una razón para seguir.',
        'Puedes sentir esperanza y miedo a la vez.',
      ],
      obstacles: [{ q: 'Me parece ingenuo tener esperanza.', a: 'Esta esperanza no niega los hechos. Se apoya en lo que tú y otras personas hacen, y eso es real.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Reconoce lo que sientes por el ambiente, sin taparlo.', durationSec: 30, kind: 'breath' },
        { title: 'Otras personas', instruction: 'Escribe tres ejemplos de personas o grupos que cuidan el ambiente. Cerca o lejos.', durationSec: 75, kind: 'reflection' },
        { title: 'Lo que valoras', instruction: '¿Qué te importa proteger? Un lugar, la salud de los tuyos, los animales, el futuro de los chicos.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que cambió', instruction: 'Piensa en algo que antes no se hacía y hoy sí. Anótalo.', durationSec: 45, kind: 'reflection' },
        { title: 'Tu razón', instruction: 'Escribe una frase de esperanza que no niegue el problema. Por ejemplo: «Somos muchas personas en esto».', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Lee tu frase en voz baja. Respira despacio antes de seguir.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'accion-colectiva-con-valores',
      title: 'Una acción con otros',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Elegir una acción por el ambiente que vaya con tus valores y que puedas hacer junto a otras personas.',
      mechanism: 'Actuar según los valores, y hacerlo con otros, da sentido y pertenencia. Eso alivia la sensación de estar a solas frente a algo enorme.',
      evidenceLevel: 'preliminar',
      evidence: [OJALA_2012, CLAYTON_2020],
      howItWorks: [
        'Frente a un problema enorme, es fácil sentir que nada sirve. Ojala encontró que resolver problemas sin buscar sentido se asociaba con más malestar. Combinado con sentido y confianza en otros, se asociaba con más bienestar (Ojala, 2012).',
        'Actuar con otras personas suma fuerza y compañía. Puede ser en tu barrio, tu escuela, tu trabajo, tu comunidad de fe o un grupo de vecinos.',
        'Esta práctica sigue a «Brújula de valores». La idea no es hacer todo, sino algo que tenga sentido para ti.',
      ],
      tips: [
        'Elige algo que puedas sostener, no algo heroico.',
        'Vale también cuidar a quienes ya están haciendo algo.',
        'Si un grupo te agota, puedes buscar otro o tomarte un descanso.',
      ],
      obstacles: [{ q: 'No conozco a nadie que haga algo.', a: 'Empieza por preguntar en tu barrio, en la escuela de tus chicos o en tu trabajo. Muchas veces hay alguien esperando compañía.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en lo que te importa del ambiente.', durationSec: 30, kind: 'breath' },
        { title: 'El valor', instruction: 'Escribe un valor que quieres vivir aquí. Por ejemplo: cuidado, justicia, comunidad, responsabilidad.', durationSec: 45, kind: 'reflection' },
        { title: 'Ideas', instruction: 'Anota tres acciones que vayan con ese valor y que se hagan con otras personas.', durationSec: 75, kind: 'reflection' },
        { title: 'Elegir', instruction: 'Elige la más posible para ti hoy. Que sea concreta y chica.', durationSec: 40, kind: 'reflection' },
        { title: 'Con quién', instruction: 'Escribe con quién podrías hacerla. Un vecino, un amigo, un grupo.', durationSec: 40, kind: 'reflection' },
        { title: 'Cuándo', instruction: 'Pon fecha al primer paso. Puede ser escribir un mensaje o ir a una reunión.', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'duelo-por-un-lugar',
      title: 'Duelo por un lugar que cambia',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Dar lugar a la tristeza por un paisaje, un río, un monte o un clima que ya no es como era, y honrar lo que te dio.',
      mechanism: 'Nombrar una pérdida ambiental y darle un gesto ayuda a sentirla sin quedarse atrapado en ella.',
      evidenceLevel: 'contemplativa',
      evidence: [CUNSOLO_2018, ALBRECHT_2007],
      cautions: CONSULTAR,
      howItWorks: [
        'Glenn Albrecht llamó solastalgia a la angustia de ver cambiar el lugar donde uno vive. Es como extrañar tu casa sin haberte ido (Albrecht y colaboradores, 2007).',
        'Ashlee Cunsolo y Neville Ellis describieron el duelo ecológico. Es la pena por pérdidas en la naturaleza, por saberes y modos de vida que se pierden, y por lo que se teme perder (Cunsolo y Ellis, 2018).',
        'Este duelo pocas veces se reconoce. Darle palabras y un gesto ayuda a que no quede escondido.',
      ],
      tips: [
        'Puede ser un lugar de tu infancia, de tu barrio o uno que conoces por otros.',
        'Puedes llorar, enojarte o sentir poco. Todo es válido.',
        'Si quieres, comparte lo que escribiste con alguien que también quiera ese lugar.',
      ],
      obstacles: [{ q: 'Me parece exagerado sentir duelo por un paisaje.', a: 'Los lugares son parte de quiénes somos. Extrañarlos es humano, y otras personas sienten lo mismo.' }],
      steps: [
        { title: 'Llegar', instruction: 'Siéntate en un lugar tranquilo. Respira despacio y siente los pies en el piso.', durationSec: 30, kind: 'breath' },
        { title: 'El lugar', instruction: 'Piensa en un lugar o un paisaje que cambió o que temes perder. Escribe su nombre.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que era', instruction: 'Recuerda cómo era. Los colores, los sonidos, los olores. Anota lo que más extrañas.', durationSec: 75, kind: 'reflection' },
        { title: 'Lo que sientes', instruction: 'Pon una mano en el pecho. Nombra lo que sientes, sin juzgarlo.', durationSec: 45, kind: 'breath' },
        { title: 'Lo que te dio', instruction: 'Escribe qué te dio ese lugar. Una alegría, una forma de ser, un recuerdo con alguien.', durationSec: 60, kind: 'reflection' },
        { title: 'Un gesto', instruction: 'Elige un gesto para honrarlo. Plantar algo, visitar un lugar verde, contar su historia.', durationSec: 45, kind: 'reflection' },
      ],
    },
  ],

  meta: {
    'pausa-ante-la-noticia': { level: 'iniciacion', approaches: ['mindfulness', 'dbt'], module: 'emociones' },
    'preocupacion-que-moviliza': { level: 'iniciacion', approaches: ['tcc', 'act'], module: 'emociones' },
    'mi-dieta-de-noticias': { level: 'iniciacion', approaches: ['tcc', 'metacognitiva'], module: 'emociones' },
    'afrontamiento-con-sentido': { level: 'intermedio', approaches: ['positiva', 'logoterapia'], module: 'valores', prerequisites: ['preocupacion-que-moviliza'] },
    'accion-colectiva-con-valores': { level: 'intermedio', approaches: ['act', 'positiva'], module: 'valores', prerequisites: ['brujula-valores'] },
    'duelo-por-un-lugar': { level: 'intermedio', approaches: ['act', 'escritura'], module: 'emociones', prerequisites: ['pausa-autocompasion'] },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'ecoansiedad-y-esperanza-activa',
      title: 'Ecoansiedad: cuando el planeta preocupa',
      subtitle: 'Qué es la angustia por el clima, por qué no es un trastorno, cuándo moviliza y cuándo paraliza, y cómo sostener una esperanza activa.',
      category: 'Salud y trabajo',
      readingMin: 9,
      keyPoints: [
        'La ecoansiedad es angustia ante la crisis ambiental. Es una respuesta comprensible, no un trastorno.',
        'La preocupación puede movilizar o paralizar. Notar cuál pasa en ti ayuda a elegir.',
        'Buscar sentido y actuar con otras personas se asocia con más bienestar.',
        'Poner límites a las noticias no es negar el problema.',
        'El duelo por lugares que cambian tiene nombre: solastalgia y duelo ecológico.',
        'Con chicos, conviene escuchar primero, no asustar y mostrar lo que se puede hacer.',
      ],
      sections: [
        {
          heading: 'Una respuesta comprensible',
          paragraphs: [
            'Mucha gente siente miedo, tristeza, enojo o culpa por el clima y el ambiente. A esto se le suele llamar ecoansiedad o ansiedad climática.',
            'Susan Clayton propone verla como una respuesta comprensible ante una amenaza real, no como un trastorno. Sólo en algunas personas se vuelve tan fuerte que traba el sueño, el trabajo o los vínculos (Clayton, 2020). Ahí sí conviene consultar.',
          ],
        },
        {
          heading: 'Lo que dicen los jóvenes',
          paragraphs: [
            'Una encuesta a jóvenes de diez países encontró que muchas personas jóvenes sentían una preocupación intensa por el clima. También encontró que sentir que los gobiernos no respondían se asociaba con más angustia (Hickman y colaboradores, 2021).',
            'Esto muestra que la angustia no es sólo individual. También depende de sentirse escuchado y acompañado.',
          ],
        },
        {
          heading: 'Preocupación que moviliza y que paraliza',
          paragraphs: [
            'Algo de preocupación ayuda a prestar atención y actuar. La preocupación que paraliza, en cambio, gira en círculos, quita el sueño y deja sin energía.',
            'Una pregunta útil es: «¿Esto me lleva a algún paso, o sólo me da vueltas?». Si da vueltas, sirven los límites: un horario para informarte, una pausa, hablar con alguien.',
          ],
        },
        {
          heading: 'Buscar sentido y actuar con otros',
          paragraphs: [
            'Maria Ojala estudió cómo chicos y chicas afrontan el tema. Restarle importancia calmaba, pero se asociaba con menos compromiso. Buscar sentido, confiar en otras personas y ver lo que se está haciendo se asociaba con más bienestar sin dejar de actuar (Ojala, 2012).',
            'Actuar con otros, según tus valores, da compañía y dirección. No hace falta hacer todo: alcanza con algo que puedas sostener.',
          ],
        },
        {
          heading: 'Duelo ecológico y solastalgia',
          paragraphs: [
            'Glenn Albrecht llamó solastalgia a la angustia de ver cambiar el propio lugar: extrañar tu casa sin haberte ido (Albrecht y colaboradores, 2007).',
            'Cunsolo y Ellis describieron el duelo ecológico: la pena por pérdidas en la naturaleza, por modos de vida que cambian y por lo que se teme perder (Cunsolo y Ellis, 2018). Darle nombre y un ritual ayuda a llevarlo.',
          ],
        },
        {
          heading: 'Hablar con chicos sin asustar',
          paragraphs: [
            'Antes de explicar, pregunta qué saben y qué sienten. Responde con palabras simples y verdaderas, según la edad. No hace falta dar todos los datos.',
            'Valida lo que sienten, cuéntales que hay muchas personas trabajando en esto y elijan juntos algo para hacer. Si notas que la angustia no los deja dormir o jugar, consulta.',
          ],
        },
        {
          heading: 'Esperanza activa',
          paragraphs: [
            'La esperanza activa no es pensar que todo va a salir bien. Es apoyarse en lo que uno hace, con otros, por lo que valora. Puede convivir con el miedo y la tristeza.',
          ],
        },
      ],
      diagram: {
        title: 'Cuando la preocupación paraliza',
        nodes: ['Noticia que alarma', 'Miedo y sensación de que nada sirve', 'Más horas leyendo o evitando el tema', 'Cansancio y aislamiento', 'Menos acción y más desesperanza'],
        caption: 'Un límite con las noticias, buscar sentido y una acción chica con otras personas cortan el círculo.',
      },
      caveat: {
        title: 'Lo que este artículo no hace',
        body: 'No da datos del clima ni toma posición partidaria. Habla de cómo cuidarte mientras te informas y actúas. Si la angustia no te deja dormir, trabajar o disfrutar, consulta con un profesional. Si sientes desesperanza o tienes ideas de morir, llama al 135 (resto del país 0800-345-1435), al 0800-999-0091 o al 911.',
      },
      related: {
        practices: ['pausa-ante-la-noticia', 'preocupacion-que-moviliza', 'mi-dieta-de-noticias', 'afrontamiento-con-sentido', 'accion-colectiva-con-valores', 'duelo-por-un-lugar', 'aplazar-preocupacion', 'brujula-valores'],
        articles: ['preocupacion-y-ansiedad', 'sentido-y-valores'],
      },
      references: [CLAYTON_2020, HICKMAN_2021, OJALA_2012, ALBRECHT_2007, CUNSOLO_2018],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'clima-y-esperanza-activa',
      title: 'Clima y esperanza activa',
      subtitle: 'Cuatro semanas para cuidarte de la angustia por el ambiente sin dejar de actuar',
      description:
        'Aprenderás a bajar la alarma ante las noticias, a distinguir la preocupación que moviliza de la que paraliza, a buscar sentido y a elegir una acción con otras personas. También darás lugar al duelo por lo que cambia. No reemplaza la consulta si la angustia es intensa.',
      basis: 'Clayton (2020); Ojala (2012); Albrecht y colaboradores (2007); Cunsolo y Ellis (2018); Hickman y colaboradores (2021).',
      rhythm: '10 a 15 minutos, 3 o 4 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Entender',
          focus: 'Una respuesta comprensible',
          description: 'Leerás qué es la ecoansiedad y practicarás una pausa breve para las noticias que angustian.',
          practiceIds: ['pausa-ante-la-noticia', 'preocupacion-que-moviliza'],
          articleIds: ['ecoansiedad-y-esperanza-activa'],
          journalType: 'preocupacion',
        },
        {
          title: 'Semana 2 · Límites',
          focus: 'Informarte sin vivir en alarma',
          description: 'Armarás tu plan con las noticias y le darás un horario a la preocupación.',
          practiceIds: ['mi-dieta-de-noticias', 'aplazar-preocupacion'],
          articleIds: [],
          journalType: 'intencion',
        },
        {
          title: 'Semana 3 · Sentido',
          focus: 'Esperanza con los pies en la tierra',
          description: 'Buscarás razones de esperanza que no niegan el problema y darás lugar al duelo por un lugar.',
          practiceIds: ['afrontamiento-con-sentido', 'duelo-por-un-lugar'],
          articleIds: [],
          journalType: 'sentido',
        },
        {
          title: 'Semana 4 · Acción',
          focus: 'Valores puestos en marcha con otros',
          description: 'Revisarás tus valores y elegirás una acción para hacer con otras personas.',
          practiceIds: ['brujula-valores', 'accion-colectiva-con-valores'],
          articleIds: [],
          journalType: 'valores',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-ecoansiedad',
      title: 'Cuando el planeta preocupa',
      subtitle: 'La ecoansiedad no es un trastorno.',
      slides: [
        { heading: 'No te pasa sólo a ti', text: 'Mucha gente siente miedo, tristeza o enojo por el clima y el ambiente. Tiene un nombre: ecoansiedad.' },
        { heading: 'Es comprensible', text: 'No es un trastorno. Es lo que se siente cuando algo que importa está en riesgo.' },
        { heading: 'Moviliza o paraliza', text: 'A veces la preocupación te lleva a actuar. Otras veces da vueltas y te deja sin fuerzas.' },
        { heading: 'Una pregunta', text: 'Pregúntate: ¿esto me lleva a un paso, o sólo me da vueltas? La respuesta te dice qué hacer.' },
        { heading: 'Cuándo consultar', text: 'Si no te deja dormir, trabajar o disfrutar por semanas, consulta. Si sientes que no hay salida, llama al 135 o al 911.' },
      ],
      related: { practices: ['preocupacion-que-moviliza', 'pausa-ante-la-noticia'], articles: ['ecoansiedad-y-esperanza-activa'] },
      references: [CLAYTON_2020],
    },
    {
      id: 'pildora-noticias-y-clima',
      title: 'Informarte sin vivir en alarma',
      subtitle: 'Un plan con las noticias.',
      slides: [
        { heading: 'Sin pausa', text: 'Las noticias del ambiente llegan al celular todo el día. El cuerpo puede quedar en alerta.' },
        { heading: 'Un horario', text: 'Elige un momento para informarte. Lejos de la hora de dormir.' },
        { heading: 'Pocas fuentes', text: 'Una o dos fuentes serias valen más que muchas que asustan.' },
        { heading: 'También lo que se hace', text: 'Busca noticias de personas y grupos que cuidan el ambiente. También son reales.' },
        { heading: 'No es negar', text: 'Poner un límite no es mirar para otro lado. Es cuidarte para poder seguir.' },
      ],
      related: { practices: ['mi-dieta-de-noticias', 'pausa-ante-la-noticia'], articles: ['ecoansiedad-y-esperanza-activa'] },
      references: [CLAYTON_2020, HICKMAN_2021],
    },
    {
      id: 'pildora-solastalgia',
      title: 'Extrañar tu casa sin haberte ido',
      subtitle: 'Solastalgia y duelo ecológico.',
      slides: [
        { heading: 'Un lugar que cambia', text: 'A veces el río, el monte o el barrio donde creciste ya no es como era. Y eso duele.' },
        { heading: 'Solastalgia', text: 'Glenn Albrecht le puso nombre a esa pena: extrañar tu casa sin haberte ido.' },
        { heading: 'Duelo ecológico', text: 'Es la tristeza por lo que se pierde en la naturaleza, y por lo que se teme perder.' },
        { heading: 'Darle lugar', text: 'Nombra lo que extrañas. Recuerda lo que ese lugar te dio. Puedes compartirlo con alguien.' },
        { heading: 'Un gesto', text: 'Planta algo, visita un lugar verde o cuenta la historia de ese lugar. Un gesto ayuda a llevar la pena.' },
      ],
      related: { practices: ['duelo-por-un-lugar'], articles: ['ecoansiedad-y-esperanza-activa'] },
      references: [ALBRECHT_2007, CUNSOLO_2018],
    },
    {
      id: 'pildora-esperanza-activa',
      title: 'Esperanza que se hace',
      subtitle: 'Buscar sentido y actuar con otros.',
      slides: [
        { heading: 'Tres caminos', text: 'Ante la preocupación por el clima, se puede actuar, restarle importancia o buscar sentido.' },
        { heading: 'Lo que se vio', text: 'Restarle importancia calma, pero aleja de la acción. Buscar sentido se asocia con más bienestar.' },
        { heading: 'Qué es buscar sentido', text: 'Confiar en otras personas, ver lo que ya se hace y recordar lo que te importa.' },
        { heading: 'Con otros', text: 'Elige algo chico para hacer con vecinos, amigos o compañeros. Nadie puede con todo por su cuenta.' },
        { heading: 'Esperanza activa', text: 'No es creer que todo va a salir bien. Es apoyarte en lo que haces. Puede convivir con el miedo.' },
      ],
      related: { practices: ['afrontamiento-con-sentido', 'accion-colectiva-con-valores'], articles: ['ecoansiedad-y-esperanza-activa'] },
      references: [OJALA_2012],
    },
  ],

  // ================================================================== guías para familias
  kidGuides: [
    {
      id: 'hablar-del-clima-con-chicos',
      title: 'Hablar del clima con chicos sin asustar',
      subtitle: 'Cómo escuchar sus preguntas, responder con verdad según la edad y convertir la preocupación en algo para hacer juntos.',
      readingMin: 5,
      keyPoints: [
        'Primero pregunta qué saben y qué sienten. Después explica.',
        'Di la verdad con palabras simples, sin datos que asusten.',
        'Valida lo que sienten y cuéntales que mucha gente está cuidando el planeta.',
        'Elijan juntos algo chico para hacer. Actuar calma.',
      ],
      sections: [
        {
          heading: 'Escuchar primero',
          paragraphs: [
            'Muchos chicos escuchan sobre el clima en la escuela, en videos o en casa. Antes de explicar, pregunta qué oyeron y cómo se sienten. Así sabrás qué necesitan.',
            'Una encuesta a jóvenes de diez países mostró que la preocupación por el clima es común. También que sentirse ignorados aumentaba la angustia (Hickman y colaboradores, 2021). Escucharlos ya es un cuidado.',
          ],
        },
        {
          heading: 'Responder según la edad',
          paragraphs: [
            'Con los más chicos, alcanza con ideas simples: cuidar el agua, las plantas y los animales. Con los más grandes puedes hablar más, siempre dejando lugar a sus preguntas.',
            'No hace falta saber todo. Puedes decir «no sé, busquemos juntos». Evita imágenes o datos que asusten.',
          ],
        },
        {
          heading: 'Del miedo a la acción',
          paragraphs: [
            'Ojala encontró que, en chicos y chicas, buscar sentido y confiar en otras personas se asociaba con más bienestar sin dejar de actuar (Ojala, 2012).',
            'Muéstrales lo que hace la gente: científicos, vecinos, escuelas. Y elijan juntos algo para hacer, como una huerta, juntar residuos en la plaza o ir caminando a algún lado.',
          ],
        },
      ],
      phrases: [
        '«¿Qué escuchaste sobre el clima? ¿Cómo te hace sentir?»',
        '«Tiene sentido que te preocupe. A mí también me importa.»',
        '«Hay mucha gente grande trabajando para cuidar el planeta.»',
        '«No sé todo, pero podemos averiguarlo juntos.»',
        '«¿Qué te gustaría que hagamos en casa o en el barrio?»',
      ],
      caveat: {
        title: 'Cuándo pedir ayuda',
        body: 'Si la preocupación no deja a tu hijo o hija dormir, comer, jugar o ir a la escuela durante semanas, consulta con su pediatra o con un profesional de salud mental. La Línea 102 orienta sobre niñez y adolescencia.',
      },
      activities: ['nombrar-lo-que-siente', 'globo-de-preocupaciones', 'caminata-de-colores', 'huele-la-flor'],
      references: [HICKMAN_2021, OJALA_2012],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'ansiedad-climatica', term: 'Ecoansiedad', definition: 'Angustia ante la crisis ambiental y el cambio climático. Es una respuesta comprensible, no un trastorno, aunque a veces se vuelve tan fuerte que conviene consultar.', articleId: 'ecoansiedad-y-esperanza-activa' },
    { id: 'solastalgia', term: 'Solastalgia', definition: 'Angustia de ver cambiar el lugar donde uno vive. Glenn Albrecht la describió como extrañar tu casa sin haberte ido.', practiceId: 'duelo-por-un-lugar' },
    { id: 'duelo-ecologico', term: 'Duelo ecológico', definition: 'Pena por pérdidas en la naturaleza, en modos de vida ligados a ella o por lo que se teme perder en el futuro.', practiceId: 'duelo-por-un-lugar' },
    { id: 'afrontamiento-centrado-en-el-sentido', term: 'Afrontamiento centrado en el sentido', definition: 'Forma de afrontar un problema que no se puede resolver de golpe: buscar razones de esperanza, confiar en otros y apoyarse en los valores.', practiceId: 'afrontamiento-con-sentido' },
    { id: 'esperanza-activa', term: 'Esperanza activa', definition: 'Esperanza que no niega el problema y se apoya en lo que uno hace, junto con otras personas, por lo que valora.', practiceId: 'accion-colectiva-con-valores' },
  ],
};
