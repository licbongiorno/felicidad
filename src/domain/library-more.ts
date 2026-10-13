import type { Article } from './library';

/** Tercera tanda de la Biblioteca: situaciones clínicas frecuentes, criterios de evidencia y mitos. */
export const MORE_ARTICLES: Article[] = [
  {
    id: 'como-evaluamos-la-evidencia',
    title: 'Cómo evaluamos la evidencia',
    subtitle: 'Qué significa cada nivel de evidencia de esta app y cómo se asigna.',
    category: 'Uso responsable',
    readingMin: 4,
    keyPoints: [
      'Cada práctica, antídoto y registro declara un nivel de evidencia según criterios explícitos.',
      'El nivel se refiere a la técnica tal como se ofrece aquí: breve y autoguiada.',
      'Las referencias se verifican automáticamente contra el registro oficial de publicaciones.',
    ],
    sections: [
      {
        heading: 'Los cuatro niveles',
        paragraphs: [
          'Evidencia robusta: hay metaanálisis de ensayos controlados aleatorizados sobre una intervención en un formato comparable al de la app (breve, autoguiado o de práctica repetida).',
          'Evidencia moderada: hay ensayos controlados, o metaanálisis de un formato más intensivo (por ejemplo, una terapia completa) del que el ejercicio es un componente.',
          'Evidencia preliminar: estudios pequeños, de laboratorio, sin grupo control o un único ensayo sin replicar.',
          'Fundamento contemplativo: la técnica procede de una tradición contemplativa y sólo hay evidencia indirecta de sus mecanismos.',
        ],
      },
      {
        heading: 'Por qué un ejercicio breve puede tener menos evidencia que su terapia',
        paragraphs: [
          'La activación conductual tiene evidencia robusta como tratamiento de la depresión. Pero el antídoto de cinco minutos para el desánimo es sólo una parte de ese tratamiento, así que se declara como evidencia moderada. Preferimos subestimar a exagerar.',
        ],
      },
      {
        heading: 'Cómo se mantiene al día',
        paragraphs: [
          'Todas las referencias con identificador DOI se comprueban contra Crossref, el registro oficial de publicaciones académicas: que existan y que título, año y revista coincidan. La verificación debe repetirse al menos una vez al año; si pasan más de doce meses, las pruebas automáticas de la app fallan hasta que se repita.',
        ],
      },
    ],
    related: { articles: ['medir-tu-progreso', 'mitos-y-realidades'] },
    references: [
      {
        citation:
          'Van Dam, N. T., van Vugt, M. K., Vago, D. R., et al. (2018). Mind the hype: A critical evaluation and prescriptive agenda for research on mindfulness and meditation. Perspectives on Psychological Science, 13(1), 36–61.',
        doi: '10.1177/1745691617709589',
      },
    ],
  },
  {
    id: 'mitos-y-realidades',
    title: 'Mitos y realidades del bienestar',
    subtitle: 'Ideas muy difundidas que la evidencia no respalda, y lo que sí sabemos.',
    category: 'Uso responsable',
    readingMin: 6,
    keyPoints: [
      'La felicidad no depende «en un 40 %» de ti: esa cifra no se sostiene.',
      'Meditar no es dejar la mente en blanco, y no siempre relaja.',
      'Pensar en positivo a la fuerza no funciona; aceptar las emociones difíciles, sí.',
    ],
    sections: [
      {
        heading: 'Mito: «el 40 % de la felicidad depende de lo que haces»',
        paragraphs: [
          'Realidad: el famoso gráfico del 50/10/40 no se deriva de los datos en los que dice apoyarse (Brown y Rohrer, 2020). Sabemos que la felicidad puede cultivarse, pero no en qué proporción, y probablemente varía entre personas.',
        ],
      },
      {
        heading: 'Mito: «meditar es dejar la mente en blanco»',
        paragraphs: [
          'Realidad: en la mayoría de las prácticas, notar que la mente se fue y volver es el ejercicio. Una sesión llena de distracciones detectadas es una buena sesión.',
        ],
      },
      {
        heading: 'Mito: «la meditación siempre relaja y no tiene riesgos»',
        paragraphs: [
          'Realidad: alrededor del 8 % de quienes meditan reportan algún efecto adverso, en su mayoría leve y transitorio (Farias et al., 2020). Por eso esta app indica precauciones y niveles de dificultad.',
        ],
      },
      {
        heading: 'Mito: «hay que pensar en positivo»',
        paragraphs: [
          'Realidad: intentar suprimir los pensamientos y emociones negativos suele intensificarlos. Aceptar las emociones difíciles se asocia con mejor salud mental a largo plazo (Ford et al., 2018).',
        ],
      },
      {
        heading: 'Mito: «la autocompasión vuelve a la gente blanda»',
        paragraphs: [
          'Realidad: tratarse con amabilidad tras un error aumenta la motivación para corregirlo (Breines y Chen, 2012).',
        ],
      },
      {
        heading: 'Mito: «entre el estímulo y la respuesta hay un espacio» (Frankl)',
        paragraphs: [
          'Realidad: la idea es valiosa, pero la frase no aparece en la obra de Viktor Frankl. Esta app sólo usa citas con fuente localizable.',
        ],
      },
    ],
    related: { articles: ['perma-y-psicologia-positiva', 'practica-segura', 'autocompasion'] },
    references: [
      {
        citation: 'Brown, N. J. L., & Rohrer, J. M. (2020). Easy as (happiness) pie? A critical evaluation of a popular model of the determinants of well-being. Journal of Happiness Studies, 21, 1285–1301.',
        doi: '10.1007/s10902-019-00128-4',
      },
      {
        citation: 'Farias, M., Maraldi, E., Wallenkampf, K. C., & Lucchetti, G. (2020). Adverse events in meditation practices and meditation-based therapies: A systematic review. Acta Psychiatrica Scandinavica, 142(5), 374–393.',
        doi: '10.1111/acps.13225',
      },
      {
        citation:
          'Ford, B. Q., Lam, P., John, O. P., & Mauss, I. B. (2018). The psychological health benefits of accepting negative emotions and thoughts: Laboratory, diary, and longitudinal evidence. Journal of Personality and Social Psychology, 115(6), 1075–1092.',
        doi: '10.1037/pspp0000157',
      },
      {
        citation: 'Breines, J. G., & Chen, S. (2012). Self-compassion increases self-improvement motivation. Personality and Social Psychology Bulletin, 38(9), 1133–1143.',
        doi: '10.1177/0146167212445599',
      },
    ],
  },
  {
    id: 'duelo',
    title: 'Atravesar un duelo',
    subtitle: 'Lo que sabemos sobre el duelo, cuándo es esperable y cuándo pedir ayuda.',
    category: 'Relaciones',
    readingMin: 6,
    keyPoints: [
      'El duelo no sigue fases fijas: oscila entre momentos centrados en la pérdida y momentos centrados en seguir viviendo.',
      'La mayoría de las personas atraviesa el duelo sin tratamiento.',
      'El duelo prolongado existe, es identificable y tiene tratamiento eficaz.',
    ],
    sections: [
      {
        heading: 'Más allá de las «cinco fases»',
        paragraphs: [
          'El modelo de las cinco etapas (negación, ira, negociación, depresión, aceptación) es muy conocido, pero la investigación no respalda que el duelo siga una secuencia fija. El modelo de proceso dual de Stroebe y Schut (1999) describe mejor lo que ocurre: una oscilación entre afrontar la pérdida (recordar, llorar) y reconstruir la vida (ocuparse de lo cotidiano, descansar del dolor).',
          'Ambos movimientos son sanos. Darse permiso para no estar triste en algunos momentos no es olvidar; darse permiso para estar triste en otros no es «no avanzar».',
        ],
      },
      {
        heading: 'Cuándo pedir ayuda',
        paragraphs: [
          'Una minoría de personas desarrolla un duelo prolongado: una añoranza intensa y persistente que, pasado un año (o seis meses, según el sistema de clasificación), sigue interfiriendo con la vida. Para este cuadro existen tratamientos específicos con buena evidencia (Shear, 2015).',
          'Busca ayuda también si aparecen pensamientos de morir, si no puedes cuidar de ti, o si el consumo de alcohol u otras sustancias aumenta.',
        ],
      },
    ],
    related: { practices: ['pausa-autocompasion', 'mano-en-el-pecho'], articles: ['vinculos-y-soledad', 'autocompasion'] },
    references: [
      {
        citation: 'Stroebe, M., & Schut, H. (1999). The dual process model of coping with bereavement: Rationale and description. Death Studies, 23(3), 197–224.',
        doi: '10.1080/074811899201046',
      },
      { citation: 'Shear, M. K. (2015). Complicated grief. New England Journal of Medicine, 372(2), 153–160.', doi: '10.1056/NEJMcp1315618' },
    ],
  },
  {
    id: 'estres-y-agotamiento',
    title: 'Estrés y agotamiento',
    subtitle: 'Diferencia entre estrés y desgaste profesional (burnout), y qué depende de ti y qué no.',
    category: 'Hábitos y cuerpo',
    readingMin: 6,
    keyPoints: [
      'El burnout tiene tres dimensiones: agotamiento, distanciamiento (cinismo) y sensación de ineficacia.',
      'Surge de un desajuste crónico entre la persona y las condiciones de trabajo.',
      'Las estrategias individuales ayudan, pero no sustituyen cambios en las condiciones.',
    ],
    sections: [
      {
        heading: 'Qué es el burnout',
        paragraphs: [
          'Christina Maslach describió el desgaste profesional como una respuesta prolongada a estresores crónicos en el trabajo, con tres componentes: agotamiento emocional, cinismo o distanciamiento del trabajo y una sensación de ineficacia (Maslach y Leiter, 2016).',
          'Su modelo identifica seis áreas de desajuste: carga de trabajo, control, recompensa, comunidad, justicia y valores. El burnout aparece cuando el desajuste es crónico en una o varias de ellas.',
        ],
      },
      {
        heading: 'Qué puedes hacer',
        paragraphs: [
          'Recuperación diaria: pausas breves (las herramientas rápidas del Gimnasio), descanso real fuera del trabajo y sueño suficiente.',
          'Ordenar la carga: el antídoto para el agobio y la resolución de problemas ayudan a pasar de «todo» a «lo siguiente».',
          'Identificar el desajuste: ¿cuál de las seis áreas pesa más? Algunas se pueden negociar (control, carga); otras requieren decisiones mayores.',
          'Tratarse con amabilidad: la autocrítica por «no poder con todo» agrava el agotamiento.',
        ],
      },
    ],
    caveat: {
      title: 'No es un fallo personal',
      body: 'El burnout es en gran parte un problema de las condiciones de trabajo. Las herramientas de esta app ayudan a sostenerte, pero si las condiciones no cambian, conviene hablarlo con tu médico, tu terapeuta o, si es posible, con tu organización.',
    },
    diagram: {
      title: 'El ciclo del agotamiento',
      nodes: ['Exigencia sostenida', 'Más esfuerzo y menos descanso', 'Agotamiento', 'Rendimiento y ánimo bajan', 'Sensación de no llegar'],
      caption: 'Sin recuperación, cada vuelta del ciclo deja menos recursos para la siguiente. Se rompe sobre todo en dos puntos: el descanso y la carga.',
    },
    related: { practices: ['espacio-tres-minutos', 'resolucion-problemas', 'relajacion-progresiva'], articles: ['sueno-y-bienestar', 'autocompasion'] },
    references: [
      {
        citation: 'Maslach, C., & Leiter, M. P. (2016). Understanding the burnout experience: Recent research and its implications for psychiatry. World Psychiatry, 15(2), 103–111.',
        doi: '10.1002/wps.20311',
      },
    ],
  },
  {
    id: 'procrastinacion-y-perfeccionismo',
    title: 'Procrastinación y perfeccionismo',
    subtitle: 'Por qué posponemos lo importante y por qué la exigencia excesiva suele empeorarlo.',
    category: 'Terapias contextuales',
    readingMin: 6,
    keyPoints: [
      'La procrastinación es sobre todo un problema de regulación emocional, no de gestión del tiempo.',
      'Castigarse por procrastinar aumenta la procrastinación; perdonarse la reduce.',
      'El perfeccionismo puede trabajarse con técnicas cognitivo-conductuales con buena evidencia.',
    ],
    sections: [
      {
        heading: 'Procrastinar para no sentir',
        paragraphs: [
          'El metaanálisis de Piers Steel (2007) encontró que la procrastinación se asocia sobre todo a la aversión a la tarea, la impulsividad y la distancia de la recompensa. Sirois y Pychyl (2013) añadieron una lectura emocional: posponemos para aliviar el malestar inmediato que la tarea provoca, a costa de nuestro yo futuro.',
          'Por eso las soluciones que sólo organizan el tiempo fallan. Funciona mejor reducir el malestar de empezar: dividir la tarea hasta un primer paso pequeño, comprometerse sólo a cinco minutos y tratarse con amabilidad (Wohl et al., 2010).',
        ],
      },
      {
        heading: 'Cuando nada es suficiente',
        paragraphs: [
          'El perfeccionismo clínico consiste en basar la autoestima en alcanzar estándares muy exigentes pese a las consecuencias negativas. Es un factor de riesgo transdiagnóstico (depresión, ansiedad, trastornos de la conducta alimentaria). Un metaanálisis encontró que las intervenciones cognitivo-conductuales lo reducen de forma significativa (Lloyd et al., 2015).',
          'Herramientas útiles: experimentos conductuales («¿qué pasa si entrego algo bien hecho, no perfecto?»), registro de pensamientos y autocompasión.',
        ],
      },
    ],
    related: { practices: ['activacion-conductual', 'pausa-autocompasion'], articles: ['autocompasion', 'activacion-conductual'] },
    references: [
      {
        citation: 'Steel, P. (2007). The nature of procrastination: A meta-analytic and theoretical review of quintessential self-regulatory failure. Psychological Bulletin, 133(1), 65–94.',
        doi: '10.1037/0033-2909.133.1.65',
      },
      {
        citation: 'Sirois, F., & Pychyl, T. (2013). Procrastination and the priority of short-term mood regulation: Consequences for future self. Social and Personality Psychology Compass, 7(2), 115–127.',
        doi: '10.1111/spc3.12011',
      },
      {
        citation:
          'Lloyd, S., Schmidt, U., Khondoker, M., & Tchanturia, K. (2015). Can psychological interventions reduce perfectionism? A systematic review and meta-analysis. Behavioural and Cognitive Psychotherapy, 43(6), 705–731.',
        doi: '10.1017/S1352465814000162',
      },
    ],
  },
  {
    id: 'dolor-cronico',
    title: 'Vivir con dolor crónico',
    subtitle: 'Cuando el dolor no se va: la aceptación como camino para recuperar la vida.',
    category: 'Hábitos y cuerpo',
    readingMin: 6,
    keyPoints: [
      'En el dolor crónico, la lucha contra el dolor puede añadir sufrimiento y limitar la vida.',
      'La Terapia de Aceptación y Compromiso mejora el funcionamiento, la ansiedad y la depresión asociadas al dolor.',
      'Aceptar no es resignarse: es dejar de que el dolor decida todo lo que haces.',
    ],
    sections: [
      {
        heading: 'El dolor y la lucha contra el dolor',
        paragraphs: [
          'Cuando el dolor se vuelve crónico, es natural organizar la vida alrededor de evitarlo: dejar actividades, esperar a «estar bien» para vivir. A largo plazo, esa evitación reduce la vida sin reducir el dolor.',
          'La Terapia de Aceptación y Compromiso propone otra relación: hacer espacio a la sensación sin luchar contra ella y orientar la acción hacia lo que importa. Un metaanálisis (Hughes et al., 2017) encontró mejoras en el funcionamiento físico, la ansiedad y la depresión, aunque no siempre en la intensidad del dolor.',
        ],
      },
      {
        heading: 'Por dónde empezar',
        paragraphs: [
          'La práctica «Hacer espacio» entrena la aceptación de sensaciones difíciles. La «Brújula de valores» ayuda a recuperar actividades significativas adaptadas a tus límites. La relajación y la respiración lenta reducen la tensión que a menudo acompaña al dolor.',
        ],
      },
    ],
    caveat: {
      title: 'Siempre con seguimiento médico',
      body: 'Esta información complementa, no sustituye, el seguimiento médico del dolor. Un dolor nuevo, distinto o que empeora debe consultarse.',
    },
    related: { practices: ['hacer-espacio', 'escaneo-corporal', 'relajacion-progresiva'], articles: ['flexibilidad-psicologica'] },
    references: [
      {
        citation:
          'Hughes, L. S., Clark, J., Colclough, J. A., Dale, E., & McMillan, D. (2017). Acceptance and commitment therapy (ACT) for chronic pain: A systematic review and meta-analyses. The Clinical Journal of Pain, 33(6), 552–568.',
        doi: '10.1097/AJP.0000000000000425',
      },
    ],
  },
  {
    id: 'exposicion-gradual',
    title: 'Exposición gradual',
    subtitle: 'Por qué evitar lo que temes mantiene el miedo, y cómo acercarse paso a paso.',
    category: 'Terapias contextuales',
    readingMin: 5,
    keyPoints: [
      'Evitar lo que da miedo alivia a corto plazo y lo mantiene a largo plazo.',
      'La exposición gradual y repetida es el componente con más evidencia en el tratamiento de la ansiedad.',
      'Se empieza por situaciones de malestar moderado, nunca extremo.',
    ],
    sections: [
      {
        heading: 'El ciclo de la evitación',
        paragraphs: [
          'Cuando evitamos una situación temida, el alivio inmediato refuerza la evitación, y nunca llegamos a comprobar que la situación era tolerable. El miedo se mantiene, y a menudo se extiende a situaciones parecidas.',
        ],
      },
      {
        heading: 'Cómo funciona la exposición',
        paragraphs: [
          'Se construye una escalera de situaciones de menor a mayor malestar y se practica cada escalón de forma repetida, sin conductas de seguridad (las pequeñas evitaciones), hasta que deja de ser tan amenazante. Lo esencial no es que la ansiedad baje en cada intento, sino aprender que lo temido no ocurre o es manejable.',
          'La terapia cognitivo-conductual, cuyo componente central en ansiedad es la exposición, tiene evidencia metaanalítica frente a placebo en los trastornos de ansiedad (Carpenter et al., 2018).',
        ],
      },
    ],
    caveat: {
      title: 'Con acompañamiento si hace falta',
      body: 'Si la ansiedad es muy intensa, hay ataques de pánico frecuentes o historia de trauma, la exposición debe hacerse con un/a terapeuta.',
    },
    diagram: {
      title: 'El ciclo de la evitación',
      nodes: ['Situación temida', 'Ansiedad', 'Evito la situación', 'Alivio inmediato', 'El miedo se mantiene'],
      caption: 'El alivio refuerza la evitación. La exposición gradual rompe el ciclo entre «ansiedad» y «evito».',
    },
    related: { practices: ['respiracion-resonante', 'hacer-espacio'], articles: ['preocupacion-y-ansiedad'] },
    references: [
      {
        citation:
          'Carpenter, J. K., Andrews, L. A., Witcraft, S. M., et al. (2018). Cognitive behavioral therapy for anxiety and related disorders: A meta-analysis of randomized placebo-controlled trials. Depression and Anxiety, 35(6), 502–514.',
        doi: '10.1002/da.22728',
      },
    ],
  },
];
