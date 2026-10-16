import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Diagnósticos explicados»: diagnósticos frecuentes en lenguaje simple, para la persona
 * y su familia. NUNCA es un test ni un autodiagnóstico.
 *  - depresión mayor y trastornos de ansiedad (Malhi y Mann);
 *  - trastorno bipolar (Grande y colaboradores);
 *  - trastorno límite de la personalidad (Gunderson y colaboradores);
 *  - psicosis y esquizofrenia (Owen y colaboradores);
 *  - estigma y etiquetas (Corrigan y Watson), derechos de la Ley 26.657;
 *  - marcos diagnósticos: DSM-5 y CIE-11.
 *
 * Reglas del paquete: el diagnóstico lo hace un profesional; las etiquetas no definen a la
 * persona; no se nombran medicamentos; cada texto recuerda las señales de urgencia
 * (ideas de morir, psicosis aguda, manía con riesgo) y los teléfonos 135, 0800-999-0091 y 911.
 */

const APA_2013: Reference = {
  citation: 'American Psychiatric Association. (2013). Diagnostic and statistical manual of mental disorders (5.ª ed.). American Psychiatric Publishing.',
};
const OMS_2019: Reference = {
  citation: 'Organización Mundial de la Salud. (2019). Clasificación Internacional de Enfermedades, 11.ª revisión (CIE-11). OMS.',
};
const MALHI_2018: Reference = {
  citation: 'Malhi, G. S., & Mann, J. J. (2018). Depression. The Lancet, 392(10161), 2299–2312.',
  doi: '10.1016/S0140-6736(18)31948-2',
};
const GRANDE_2016: Reference = {
  citation: 'Grande, I., Berk, M., Birmaher, B., & Vieta, E. (2016). Bipolar disorder. The Lancet, 387(10027), 1561–1572.',
  doi: '10.1016/S0140-6736(15)00241-X',
};
const GUNDERSON_2018: Reference = {
  citation: 'Gunderson, J. G., Herpertz, S. C., Skodol, A. E., Torgersen, S., & Zanarini, M. C. (2018). Borderline personality disorder. Nature Reviews Disease Primers, 4, 18029.',
  doi: '10.1038/nrdp.2018.29',
};
const OWEN_2016: Reference = {
  citation: 'Owen, M. J., Sawa, A., & Mortensen, P. B. (2016). Schizophrenia. The Lancet, 388(10039), 86–97.',
  doi: '10.1016/S0140-6736(15)01121-6',
};
const CORRIGAN_2002: Reference = {
  citation: 'Corrigan, P. W., & Watson, A. C. (2002). Understanding the impact of stigma on people with mental illness. World Psychiatry, 1(1), 16–20.',
};
const LEY_26657: Reference = {
  citation: 'Ley N.º 26.657 de Salud Mental (2010). Boletín Oficial de la República Argentina.',
  note: 'Derechos de las personas usuarias de servicios de salud mental.',
};

/** Aviso común: no es un test; el diagnóstico lo hace un profesional; señales de urgencia. */
const DX =
  'Esto no es un test ni sirve para diagnosticar. El diagnóstico lo hace un profesional de la salud mental, y una etiqueta no te define. Si aparecen ideas de morir o de hacerte daño, si alguien escucha o cree cosas que asustan y pierde el contacto con la realidad, o si hay euforia con conductas de riesgo, pide ayuda ya: 135 (CABA y GBA; resto del país 0800-345-1435), 0800-999-0091 o 911.';

export const DIAGNOSTICOS_PACK: ContentPack = {
  id: 'diagnosticos',

  // ================================================================== prácticas
  practices: [
    {
      id: 'prepararte-para-un-diagnostico',
      title: 'Prepararte para recibir un diagnóstico',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Antes de una evaluación o de una devolución, ordenar lo que esperas, lo que temes y lo que quieres preguntar, para llegar con más calma.',
      mechanism: 'Poner en palabras las expectativas y los miedos baja la incertidumbre. Llevar preguntas escritas ayuda a entender mejor lo que te digan.',
      evidenceLevel: 'preliminar',
      evidence: [CORRIGAN_2002, APA_2013],
      cautions: DX,
      howItWorks: [
        'Recibir un diagnóstico puede traer alivio, porque por fin hay un nombre para lo que pasa. También puede traer miedo, enojo o tristeza. Todas esas reacciones son esperables, y pueden aparecer juntas.',
        'Un diagnóstico es una herramienta de trabajo. Sirve para elegir un tratamiento y para hablar un idioma común con el equipo. No es un juicio sobre quién eres ni sobre tu futuro.',
        'Mucho del miedo viene de las ideas que circulan sobre los diagnósticos. El estigma puede hacer que una persona se vea a sí misma con esos prejuicios (Corrigan y Watson, 2002). Prepararte te ayuda a separar la información de los prejuicios.',
      ],
      tips: [
        'Si puedes, ve con alguien de confianza. Puede tomar notas por ti.',
        'Pide que te expliquen el diagnóstico con palabras simples. Es tu derecho.',
        'No hace falta entender todo en una sola consulta. Puedes volver con más preguntas.',
      ],
      obstacles: [
        { q: 'Tengo miedo de que me digan que «estoy loco».', a: 'Esa palabra es un prejuicio, no un diagnóstico. Los diagnósticos describen dificultades concretas que tienen tratamiento. Puedes decirle ese miedo al profesional.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Aquí no tienes que decidir nada.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que espero', instruction: '¿Qué esperas de la evaluación o de la devolución? Anota una o dos cosas.', durationSec: 50, kind: 'reflection' },
        { title: 'Lo que temo', instruction: '¿Qué te da miedo escuchar? Escríbelo tal como aparece. Nombrarlo suele bajar un poco su peso.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que noté', instruction: 'Anota lo que te pasa en tu día: el ánimo, el sueño, lo que te cuesta. Con ejemplos, si puedes.', durationSec: 60, kind: 'reflection' },
        { title: 'Mis preguntas', instruction: 'Escribe tres preguntas. Por ejemplo: ¿qué significa este diagnóstico? ¿Qué tratamientos hay? ¿Qué puedo hacer yo?', durationSec: 60, kind: 'reflection' },
        { title: 'Una frase amable', instruction: 'Escribe una frase para leer después de la consulta. Por ejemplo: «Un nombre no dice quién soy».', durationSec: 40, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho y respira. Guarda tus notas para el día de la consulta.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'preguntas-para-mi-equipo',
      title: 'Armar tus preguntas para el equipo de salud',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Escribir lo que quieres saber sobre tu diagnóstico, tu tratamiento y tus derechos, para entender y decidir junto con tu equipo.',
      mechanism: 'Las consultas son cortas y los nervios hacen olvidar. Una lista escrita ayuda a pedir información clara y a participar de las decisiones.',
      evidenceLevel: 'preliminar',
      evidence: [LEY_26657, APA_2013],
      cautions: DX,
      howItWorks: [
        'Tienes derecho a recibir información sobre tu salud de forma clara y en un idioma que entiendas. En la Argentina, la Ley 26.657 de Salud Mental reconoce ese derecho y el de participar en las decisiones sobre tu tratamiento.',
        'Muchas personas se van de la consulta con dudas. No es falta de capacidad: hay poco tiempo y mucha emoción. Llevar las preguntas escritas cambia mucho la charla.',
        'Esta práctica no reemplaza la evaluación. Te ayuda a aprovecharla.',
      ],
      tips: [
        'Ordena las preguntas de más a menos importante. Si el tiempo no alcanza, haces las primeras.',
        'Anota las respuestas, o pide permiso para grabar el audio.',
        'Si algo no te queda claro, pide que te lo expliquen de otra forma.',
      ],
      obstacles: [
        { q: 'Siento que molesto si pregunto tanto.', a: 'Preguntar es parte del tratamiento. Un buen equipo prefiere que preguntes a que te quedes con dudas.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Ten a mano papel o el celular.', durationSec: 20, kind: 'breath' },
        { title: 'El diagnóstico', instruction: 'Escribe lo que quieres saber del diagnóstico. ¿Qué es? ¿Por qué lo pensaron? ¿Qué no es?', durationSec: 60, kind: 'reflection' },
        { title: 'El tratamiento', instruction: 'Anota tus dudas sobre el tratamiento. ¿Qué opciones hay? ¿Cuánto dura? ¿Cómo sabré si me ayuda?', durationSec: 60, kind: 'reflection' },
        { title: 'Mi vida', instruction: 'Anota lo que te importa: el trabajo, el estudio, la familia, los planes. Pregunta cómo cuidarlos.', durationSec: 50, kind: 'reflection' },
        { title: 'Si empeoro', instruction: 'Pregunta qué señales tienes que vigilar y a quién llamar si empeoras. Anota los teléfonos.', durationSec: 45, kind: 'reflection' },
        { title: 'Ordenar', instruction: 'Marca las tres preguntas más importantes. Esas van primero.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'mi-diagnostico-no-me-define',
      title: 'Entender tu diagnóstico sin que te defina',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Separar lo que el diagnóstico describe de todo lo demás que eres: tus valores, tus vínculos, tus gustos y tu historia.',
      mechanism: 'Ver el diagnóstico como una parte de tu vida, y no como tu identidad, protege del estigma internalizado y ayuda a sostener lo que te importa.',
      evidenceLevel: 'preliminar',
      evidence: [CORRIGAN_2002],
      cautions: DX,
      howItWorks: [
        'El estigma no sólo viene de afuera. A veces la persona termina creyendo los prejuicios sobre su diagnóstico. Eso baja la autoestima y las ganas de buscar ayuda. Se llama estigma internalizado (Corrigan y Watson, 2002).',
        'Decir «tengo depresión» no es lo mismo que decir «soy un depresivo». La primera frase deja lugar a todo lo demás que eres. Esa diferencia, que parece chica, cambia cómo te tratas.',
        'Esta práctica no niega el diagnóstico ni el tratamiento. Te ayuda a ubicarlo en tu vida sin que ocupe todo.',
      ],
      tips: [
        'Prueba hablar de lo que tienes, no de lo que eres: «tengo», «vivo con», «estoy atravesando».',
        'Si una frase sobre ti te hace daño, pregúntate de quién la aprendiste.',
        'Volver a esta práctica en distintos momentos suele mostrar cosas nuevas.',
      ],
      obstacles: [
        { q: 'Siento que el diagnóstico explica todo de mí.', a: 'Puede explicar algunas dificultades. No explica tus valores, tu humor, lo que amas ni lo que elegiste. Anota una cosa de cada una de esas áreas.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Pon una mano en el pecho y respira despacio. Date un momento para ti.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que describe', instruction: 'Escribe en pocas palabras qué dificultades describe tu diagnóstico. Sólo eso, sin juicios.', durationSec: 60, kind: 'reflection' },
        { title: 'Todo lo demás', instruction: 'Ahora anota otras partes de ti. Lo que te gusta, la gente que quieres, lo que sabes hacer, lo que te importa.', durationSec: 75, kind: 'reflection' },
        { title: 'Las frases que duelen', instruction: '¿Hay alguna frase sobre tu diagnóstico que te hace daño? Escríbela. Luego anota de dónde la aprendiste.', durationSec: 60, kind: 'reflection' },
        { title: 'Otra forma de decirlo', instruction: 'Escribe la misma idea de una forma más justa. Por ejemplo: «Vivo con un diagnóstico y también soy muchas cosas».', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Lee en voz baja lo que escribiste en «todo lo demás».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'hablar-del-diagnostico-en-familia',
      title: 'Hablar del diagnóstico con tu familia',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Preparar qué contar, a quién y cómo, y qué ayuda pedir, para hablar del diagnóstico con la familia o con alguien de confianza.',
      mechanism: 'Elegir de antemano qué decir y qué pedir baja la ansiedad de la charla y ayuda a recibir apoyo en lugar de consejos o reproches.',
      evidenceLevel: 'preliminar',
      evidence: [CORRIGAN_2002],
      cautions: DX,
      howItWorks: [
        'Contar o no contar es tu decisión. No le debes tu diagnóstico a nadie. Hay personas con las que conviene hablar y otras con las que no, y eso puede cambiar con el tiempo.',
        'Las familias también tienen miedos y prejuicios. A veces reaccionan con preguntas, consejos o negación. Ayuda llegar con una explicación simple y con un pedido concreto.',
        'El estigma baja cuando hay contacto y conversación con personas reales, y no sólo ideas (Corrigan y Watson, 2002). Hablar, cuando es seguro, también protege.',
      ],
      tips: [
        'Elige un momento tranquilo, sin apuro y sin alcohol de por medio.',
        'Puedes llevar un artículo de la app o pedir al equipo un material para la familia.',
        'Si la charla se pone tensa, puedes cortarla y seguir otro día.',
      ],
      obstacles: [
        { q: 'Mi familia dice que «es pura voluntad».', a: 'Es una idea muy común. Puedes decir: «Sé que lo dices por cuidarme. Es un problema de salud y tiene tratamiento». Si siguen igual, busca apoyo en otras personas.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Piensa en la persona con quien quieres hablar.', durationSec: 30, kind: 'breath' },
        { title: 'Para qué', instruction: '¿Para qué quieres contarlo? ¿Para que te entiendan, para pedir ayuda, para no ocultarlo? Anota tu motivo.', durationSec: 50, kind: 'reflection' },
        { title: 'Qué contar', instruction: 'Escribe dos o tres frases simples sobre lo que te pasa. No hace falta dar todos los detalles.', durationSec: 60, kind: 'reflection' },
        { title: 'Qué pedir', instruction: 'Anota un pedido concreto. Por ejemplo: «Que me preguntes cómo estoy» o «Que me acompañes a una consulta».', durationSec: 50, kind: 'reflection' },
        { title: 'Lo difícil', instruction: '¿Qué reacción te preocupa? Escribe una respuesta corta y tranquila para ese momento.', durationSec: 50, kind: 'reflection' },
        { title: 'Cuidarte', instruction: 'Elige qué harás después para cuidarte, salga como salga la charla.', durationSec: 30, kind: 'instruction' },
      ],
    },
  ],

  meta: {
    'prepararte-para-un-diagnostico': { level: 'iniciacion', approaches: ['cft', 'tcc'], module: 'salud' },
    'preguntas-para-mi-equipo': { level: 'iniciacion', approaches: ['motivacional'], module: 'salud' },
    'mi-diagnostico-no-me-define': { level: 'intermedio', approaches: ['narrativa', 'cft'], module: 'salud', prerequisites: ['pausa-autocompasion'] },
    'hablar-del-diagnostico-en-familia': { level: 'intermedio', approaches: ['sistemica', 'interpersonal'], module: 'salud', prerequisites: ['prepararte-para-un-diagnostico'] },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'diagnostico-sin-etiquetas',
      title: 'Qué es un diagnóstico y qué no es',
      subtitle: 'Quién lo hace, para qué sirve, el peso del estigma y tus derechos como persona usuaria.',
      category: 'Salud y trabajo',
      readingMin: 7,
      keyPoints: [
        'Esta información no sirve para diagnosticarte ni para diagnosticar a otra persona. El diagnóstico lo hace un profesional.',
        'Un diagnóstico es una herramienta para elegir un tratamiento, no una definición de quién eres.',
        'El estigma hace daño dos veces: desde afuera y cuando la persona se lo cree.',
        'La recuperación es posible. Mucha gente con un diagnóstico de salud mental vive una vida plena.',
        'En la Argentina, la Ley 26.657 protege los derechos de las personas usuarias de servicios de salud mental.',
      ],
      sections: [
        {
          heading: 'Quién diagnostica y cómo',
          paragraphs: [
            'Los profesionales de la salud mental usan dos grandes manuales: el DSM-5, de la Asociación Estadounidense de Psiquiatría, y la CIE-11, de la Organización Mundial de la Salud (American Psychiatric Association, 2013; Organización Mundial de la Salud, 2019). Describen grupos de síntomas que suelen ir juntos.',
            'Un diagnóstico no sale de un test de internet ni de una lista de síntomas. Requiere una entrevista, conocer tu historia y descartar otras causas, como problemas físicos, consumos o efectos de remedios. A veces lleva más de una consulta.',
            'Muchas experiencias se parecen entre sí. La tristeza intensa puede ser parte de una depresión, de un duelo o de un trastorno bipolar. Por eso no conviene sacar conclusiones por tu cuenta.',
          ],
        },
        {
          heading: 'Para qué sirve un nombre',
          paragraphs: [
            'Un diagnóstico ayuda a elegir el tratamiento que mejor funciona, a hablar un idioma común con el equipo y a acceder a derechos y apoyos. Para muchas personas también trae alivio: lo que pasaba tiene nombre y no es culpa suya.',
            'Pero un diagnóstico describe dificultades, no a la persona. Dos personas con el mismo diagnóstico pueden vivirlo de formas muy distintas. Y un diagnóstico puede cambiar con el tiempo.',
          ],
        },
        {
          heading: 'El peso del estigma',
          paragraphs: [
            'El estigma son los prejuicios y la discriminación hacia las personas con problemas de salud mental. Corrigan y Watson (2002) describen dos caras. El estigma público es lo que la sociedad piensa y hace. El autoestigma es cuando la persona termina creyendo esos prejuicios sobre sí misma.',
            'El autoestigma baja la autoestima y puede llevar a no pedir ayuda: el llamado efecto «¿para qué intentarlo?». Hablar de lo que tienes y no de lo que eres, y conocer a otras personas que se recuperan, ayuda a romperlo.',
          ],
        },
        {
          heading: 'Tus derechos',
          paragraphs: [
            'En la Argentina, la Ley 26.657 de Salud Mental (2010) reconoce, entre otros, el derecho a recibir atención sin discriminación, a ser informado de forma clara sobre tu salud y tu tratamiento, y a participar de las decisiones. También indica que un diagnóstico no puede usarse por sí solo para suponer que alguien es peligroso o incapaz.',
            'La ley prioriza la atención en la comunidad y cerca de los vínculos de la persona. Si sientes que no se respetan tus derechos, puedes pedir una segunda opinión o consultar con la defensoría de tu jurisdicción.',
          ],
        },
      ],
      caveat: {
        title: 'Nunca un autodiagnóstico',
        body: 'Leer sobre un diagnóstico puede ayudarte a hacer preguntas, no a responderlas. Si te reconoces en lo que lees, consulta con un profesional. Ante ideas de morir, una pérdida de contacto con la realidad o euforia con conductas de riesgo, llama al 135, al 0800-999-0091 o al 911, o usa el botón Ayuda de la app.',
      },
      related: {
        practices: ['prepararte-para-un-diagnostico', 'mi-diagnostico-no-me-define', 'preguntas-para-mi-equipo'],
        articles: ['depresion-y-ansiedad-explicadas', 'trastorno-bipolar-explicado', 'trastorno-limite-explicado', 'psicosis-y-esquizofrenia-explicadas'],
      },
      references: [APA_2013, OMS_2019, CORRIGAN_2002, LEY_26657],
    },
    {
      id: 'depresion-y-ansiedad-explicadas',
      title: 'Depresión mayor y trastornos de ansiedad, en palabras simples',
      subtitle: 'Qué son y qué no son, señales, mitos, tratamientos con evidencia y qué puede hacer la familia.',
      category: 'Salud y trabajo',
      readingMin: 8,
      keyPoints: [
        'La depresión mayor no es estar triste un día: es un estado que dura semanas y afecta el ánimo, el cuerpo y las ganas.',
        'Los trastornos de ansiedad no son «ser nervioso»: el miedo o la preocupación son intensos, duran y achican la vida.',
        'Las dos cosas tienen tratamiento con evidencia: psicoterapia, medicación indicada por un médico, o ambas.',
        'La familia ayuda más escuchando y acompañando que dando consejos.',
        'Sólo un profesional puede diagnosticar. Ante ideas de morir, pide ayuda ya.',
      ],
      sections: [
        {
          heading: 'Depresión mayor: qué es y qué no es',
          paragraphs: [
            'La depresión mayor es un problema de salud frecuente. Incluye un ánimo bajo o la pérdida del interés y del placer la mayor parte del día, casi todos los días, durante al menos dos semanas. Suele sumar cambios en el sueño, el apetito, la energía y la concentración, culpa excesiva y, a veces, ideas de morir (Malhi y Mann, 2018).',
            'No es debilidad, ni flojera, ni falta de voluntad. Tampoco es lo mismo que la tristeza de un mal momento o que un duelo, aunque a veces se mezclan. En algunas personas no se nota como tristeza sino como irritabilidad, cansancio o dolores.',
          ],
        },
        {
          heading: 'Trastornos de ansiedad: qué son y qué no son',
          paragraphs: [
            'La ansiedad es una emoción normal que nos prepara ante un peligro. Se vuelve un trastorno cuando es muy intensa, dura mucho, aparece sin un peligro real y lleva a evitar cosas importantes (American Psychiatric Association, 2013).',
            'Hay varios tipos. En la ansiedad generalizada la preocupación no para. En el trastorno de pánico aparecen ataques bruscos de miedo con síntomas físicos. En la ansiedad social se teme el juicio de los demás. En las fobias el miedo se dirige a algo concreto.',
          ],
        },
        {
          heading: 'Mitos frecuentes',
          paragraphs: [
            '«Es cuestión de ponerle onda.» Si fuera así, nadie tendría depresión. Es un problema de salud y necesita tratamiento, no reproches.',
            '«Hablar de la muerte le da ideas.» Preguntar con respeto por las ideas de morir no las provoca. Suele traer alivio y abre la puerta a pedir ayuda.',
            '«La ansiedad se cura evitando lo que da miedo.» Evitar alivia en el momento, pero con el tiempo el miedo crece. Los tratamientos ayudan a acercarse de a poco.',
          ],
        },
        {
          heading: 'Tratamientos con evidencia y recuperación',
          paragraphs: [
            'Para la depresión, hay psicoterapias con buena evidencia, como la terapia cognitivo-conductual, la activación conductual y la terapia interpersonal. En cuadros moderados o graves, la medicación indicada por un médico suele ayudar, y combinar ambas cosas suele dar mejores resultados (Malhi y Mann, 2018).',
            'Para los trastornos de ansiedad, la terapia cognitivo-conductual con exposición gradual es uno de los tratamientos más estudiados. La medicación también puede ser una opción, decidida con el médico.',
            'Muchas personas se recuperan por completo. Otras tienen episodios que vuelven, y aprenden a reconocer las señales temprano. Dormir, moverse, sostener vínculos y bajar el alcohol también ayudan.',
          ],
        },
        {
          heading: 'Qué puede hacer la familia',
          paragraphs: [
            'Escuchar sin juzgar ni apurar. Frases como «Estoy aquí» o «No tienes que explicar todo» ayudan más que «Tienes que salir más».',
            'Acompañar a pedir turno o a una consulta, si la persona quiere. Ayudar con tareas concretas cuando falta energía. Y cuidarse también: acompañar cansa.',
            'Si la persona habla de morir o de hacerse daño, tómalo en serio. No la dejes sola y llama al 135, al 0800-999-0091 o al 911.',
          ],
        },
      ],
      caveat: {
        title: 'Sin autodiagnóstico',
        body: 'Muchas personas se sienten tristes o ansiosas sin tener un trastorno, y otros problemas de salud pueden dar síntomas parecidos. Sólo una evaluación profesional puede decirlo. Este artículo no nombra remedios a propósito: la medicación se decide con el médico.',
      },
      related: {
        practices: ['preguntas-para-mi-equipo', 'activacion-conductual', 'hablar-del-diagnostico-en-familia'],
        articles: ['diagnostico-sin-etiquetas', 'preocupacion-y-ansiedad', 'medicacion-psiquiatrica', 'depresion-que-no-parece-tristeza'],
      },
      references: [MALHI_2018, APA_2013, OMS_2019],
    },
    {
      id: 'trastorno-bipolar-explicado',
      title: 'Trastorno bipolar, en palabras simples',
      subtitle: 'No es «cambiar de humor»: qué es, señales, mitos, tratamiento y cómo acompañar.',
      category: 'Salud y trabajo',
      readingMin: 7,
      keyPoints: [
        'El trastorno bipolar incluye episodios de manía o hipomanía y, muchas veces, episodios de depresión.',
        'No es tener cambios de humor durante el día. Los episodios duran días o semanas y cambian mucho el funcionamiento.',
        'Tiene tratamiento. Suele combinar medicación indicada por el médico, psicoeducación y rutinas estables.',
        'Muchas personas con trastorno bipolar estudian, trabajan, tienen familia y proyectos.',
        'La manía con conductas de riesgo es una urgencia: 911, 135 o 0800-999-0091.',
      ],
      sections: [
        {
          heading: 'Qué es y qué no es',
          paragraphs: [
            'El trastorno bipolar es un problema de salud que afecta la regulación del ánimo y la energía. Se presentan episodios de manía o de hipomanía, que es una forma más leve, y en muchos casos también episodios de depresión. Entre un episodio y otro, la persona puede estar bien (Grande y colaboradores, 2016).',
            'No es lo mismo que «ser cambiante» o enojarse rápido. Tampoco es tener dos personalidades. El uso de «bipolar» como insulto suma estigma y confunde.',
          ],
        },
        {
          heading: 'Señales',
          paragraphs: [
            'En la manía puede haber euforia o irritabilidad intensa, mucha energía, poca necesidad de dormir, hablar muy rápido, ideas que saltan, planes grandiosos y gastos o conductas de riesgo. En los casos graves puede haber psicosis.',
            'En la hipomanía los cambios son parecidos pero más leves, y a veces se viven como «estar muy bien». En la depresión bipolar aparecen la tristeza, el cansancio y la falta de ganas. Dormir mucho menos sin sentir cansancio suele ser una señal temprana de manía.',
          ],
        },
        {
          heading: 'Mitos frecuentes',
          paragraphs: [
            '«Todos somos un poco bipolares.» Los cambios de humor cotidianos no son trastorno bipolar. Usar la palabra así quita seriedad a un problema real.',
            '«Si está bien, ya no necesita tratamiento.» Muchas veces está bien justamente gracias al tratamiento. Dejarlo por cuenta propia aumenta el riesgo de un nuevo episodio. Cualquier cambio se habla con el médico.',
          ],
        },
        {
          heading: 'Tratamiento y recuperación',
          paragraphs: [
            'El tratamiento suele incluir medicación indicada y controlada por un médico, que ayuda a prevenir episodios. Se suman la psicoeducación, terapias que trabajan las rutinas y el reconocimiento de señales, y el apoyo de la familia (Grande y colaboradores, 2016).',
            'Horarios regulares de sueño, evitar el alcohol y otras drogas, y tener un plan para las primeras señales ayudan mucho. Con tratamiento, muchas personas pasan largos períodos estables.',
          ],
        },
        {
          heading: 'Qué puede hacer la familia',
          paragraphs: [
            'Aprender sobre el trastorno junto con la persona. Acordar en calma qué señales observar y qué hacer si aparecen, y quién llama al equipo.',
            'En una manía, discutir no suele servir. Ayuda hablar poco, bajar estímulos y buscar ayuda. Si hay riesgo para la persona o para otros, llama al 911.',
          ],
        },
      ],
      caveat: {
        title: 'El diagnóstico lo hace un profesional',
        body: 'Una depresión puede ser parte de un trastorno bipolar, y eso cambia el tratamiento. Por eso es clave contar al equipo si alguna vez tuviste períodos de mucha energía y poco sueño. Este artículo no reemplaza una evaluación ni nombra remedios.',
      },
      related: {
        practices: ['preguntas-para-mi-equipo', 'plan-de-crisis-en-familia', 'mi-diagnostico-no-me-define'],
        articles: ['diagnostico-sin-etiquetas', 'medicacion-psiquiatrica', 'acompanar-a-un-familiar'],
      },
      references: [GRANDE_2016, APA_2013],
    },
    {
      id: 'trastorno-limite-explicado',
      title: 'Trastorno límite de la personalidad, en palabras simples',
      subtitle: 'Emociones muy intensas, miedo al abandono y relaciones que duelen: qué es, mitos y por qué hay esperanza.',
      category: 'Salud y trabajo',
      readingMin: 7,
      keyPoints: [
        'El trastorno límite implica emociones muy intensas y cambiantes, miedo al abandono, impulsividad y una imagen de uno mismo inestable.',
        'No es manipulación ni «mal carácter». Detrás suele haber mucho sufrimiento.',
        'Hay psicoterapias con evidencia, como la terapia dialéctico-conductual y la terapia basada en la mentalización.',
        'La mayoría de las personas mejora mucho con el tiempo y el tratamiento.',
        'Las autolesiones o las ideas de morir requieren ayuda inmediata: 135, 0800-999-0091 o 911.',
      ],
      sections: [
        {
          heading: 'Qué es y qué no es',
          paragraphs: [
            'El trastorno límite de la personalidad, también llamado borderline, se caracteriza por emociones muy intensas que suben rápido y tardan en bajar, miedo fuerte al abandono, relaciones con altibajos, impulsividad y una sensación de vacío o de no saber bien quién se es (Gunderson y colaboradores, 2018).',
            'No es «ser manipulador», ni «llamar la atención», ni una forma de ser que no cambia. Es un problema de salud que causa mucho dolor a quien lo vive. Muchas personas con este diagnóstico tienen historias de experiencias difíciles, aunque no todas.',
          ],
        },
        {
          heading: 'Señales',
          paragraphs: [
            'Cambios de ánimo intensos en pocas horas, enojo difícil de manejar, esfuerzos desesperados por evitar que alguien se vaya, pasar de idealizar a alguien a sentirse traicionado, conductas impulsivas y, a veces, autolesiones o ideas de morir.',
            'Estas señales también aparecen en otros cuadros, como el trauma, el trastorno bipolar o los consumos. Por eso la evaluación profesional es importante.',
          ],
        },
        {
          heading: 'El estigma, también en la salud',
          paragraphs: [
            'Este diagnóstico carga con mucho estigma, a veces incluso entre profesionales. Frases como «no tiene arreglo» son falsas y hacen daño. Pueden hacer que la persona no pida ayuda o deje el tratamiento.',
            'Hablar de conductas, y no de etiquetas, ayuda: «Cuando sientes que te dejan, el dolor es enorme» es más justo que «es una borderline».',
          ],
        },
        {
          heading: 'Tratamiento y recuperación',
          paragraphs: [
            'El tratamiento central es la psicoterapia. Hay varias con evidencia, como la terapia dialéctico-conductual, que enseña habilidades para regular emociones y tolerar el malestar, y la terapia basada en la mentalización (Gunderson y colaboradores, 2018). La medicación puede ayudar con algunos síntomas, pero no es el tratamiento principal.',
            'La evolución suele ser mejor de lo que mucha gente cree. Con el tiempo, gran parte de las personas deja de cumplir los criterios del diagnóstico y mejora su vida, aunque algunas dificultades pueden seguir.',
          ],
        },
        {
          heading: 'Qué puede hacer la familia',
          paragraphs: [
            'Validar la emoción sin validar cualquier conducta: «Entiendo que estés tan dolida, y no voy a aceptar gritos». Mantener límites claros y predecibles, con calma.',
            'Buscar apoyo para la familia. Muchos equipos ofrecen espacios de habilidades para familiares. Ante autolesiones o ideas de morir, busca ayuda de inmediato.',
          ],
        },
      ],
      caveat: {
        title: 'No es un diagnóstico para usar en una pelea',
        body: 'Las palabras «borderline» o «límite» se usan a veces como insulto. Esa no es una forma de diagnóstico. Sólo un profesional, después de una evaluación cuidadosa, puede decirlo. Si alguien se lastima o habla de morir, llama al 135, al 0800-999-0091 o al 911.',
      },
      related: {
        practices: ['mi-diagnostico-no-me-define', 'accion-opuesta', 'hablar-del-diagnostico-en-familia'],
        articles: ['diagnostico-sin-etiquetas', 'lastimarse-para-aguantar', 'acompanar-a-un-familiar'],
      },
      references: [GUNDERSON_2018, APA_2013, CORRIGAN_2002],
    },
    {
      id: 'psicosis-y-esquizofrenia-explicadas',
      title: 'Psicosis y esquizofrenia, en palabras simples',
      subtitle: 'Qué es una psicosis, qué es y qué no es la esquizofrenia, mitos, tratamiento y recuperación.',
      category: 'Salud y trabajo',
      readingMin: 8,
      keyPoints: [
        'Una psicosis es un estado en el que se pierde en parte el contacto con la realidad: por ejemplo, oír voces o creer cosas que otros no comparten.',
        'La esquizofrenia es uno de los cuadros en los que aparece psicosis, pero no el único.',
        'No es «doble personalidad», y la gran mayoría de las personas con esquizofrenia no es violenta.',
        'Pedir ayuda temprano mejora mucho la evolución. Hay tratamiento y la recuperación es posible.',
        'Una psicosis aguda es una urgencia: 911, 135 o 0800-999-0091.',
      ],
      sections: [
        {
          heading: 'Qué es una psicosis',
          paragraphs: [
            'En una psicosis, la persona pierde en parte el contacto con la realidad compartida. Puede tener alucinaciones, como oír voces que otros no oyen, o delirios, que son creencias firmes que no cambian ante las pruebas, por ejemplo sentirse perseguida.',
            'Una psicosis puede aparecer en distintos cuadros: la esquizofrenia, el trastorno bipolar, una depresión grave, el consumo de drogas, la falta extrema de sueño o algunas enfermedades físicas. Por eso necesita siempre una evaluación médica.',
          ],
        },
        {
          heading: 'Qué es y qué no es la esquizofrenia',
          paragraphs: [
            'La esquizofrenia es un trastorno que suele empezar al final de la adolescencia o en la adultez joven. Además de la psicosis, puede afectar la motivación, la expresión de las emociones, la concentración y la memoria (Owen y colaboradores, 2016).',
            'No es tener dos personalidades. Tampoco es culpa de la familia ni de la persona. Influyen factores genéticos y del ambiente, como el consumo de cannabis en la adolescencia o el estrés (Owen y colaboradores, 2016).',
          ],
        },
        {
          heading: 'Mitos frecuentes',
          paragraphs: [
            '«Son personas peligrosas.» La gran mayoría no es violenta. De hecho, las personas con esquizofrenia tienen más riesgo de sufrir violencia que de ejercerla.',
            '«No se recupera nunca.» La evolución varía mucho. Muchas personas tienen pocos episodios y una buena vida. Otras necesitan más apoyo. Recuperarse también es tener una vida con sentido, aunque sigan algunos síntomas.',
          ],
        },
        {
          heading: 'Tratamiento y recuperación',
          paragraphs: [
            'El tratamiento suele combinar medicación indicada y controlada por un médico con psicoterapia, psicoeducación para la persona y su familia, y apoyos para el estudio, el trabajo y la vida diaria (Owen y colaboradores, 2016).',
            'Tratar temprano un primer episodio mejora la evolución. También ayudan dormir bien, evitar el cannabis y otras drogas, y tener un plan para las señales de recaída.',
          ],
        },
        {
          heading: 'Qué puede hacer la familia',
          paragraphs: [
            'No discutir los delirios ni darles la razón. Puedes hablar de lo que la persona siente: «Veo que tienes mucho miedo. Estoy contigo». Bajar el ruido y la tensión en casa ayuda.',
            'A veces la persona no reconoce que está enferma, por la propia enfermedad. Es frustrante, y hay formas de hablar que ayudan más que convencer. Si hay riesgo para la persona o para otros, llama al 911.',
          ],
        },
      ],
      caveat: {
        title: 'Ante una psicosis, no esperes',
        body: 'Si alguien empieza a oír voces, a creer cosas que asustan o se desorganiza mucho, consulta pronto con un profesional. Si hay riesgo, llama al 911, al 135 o al 0800-999-0091. Este artículo no reemplaza una evaluación ni nombra remedios.',
      },
      related: {
        practices: ['escuchar-sin-convencer', 'plan-de-crisis-en-familia', 'preguntas-para-mi-equipo'],
        articles: ['diagnostico-sin-etiquetas', 'acompanar-a-un-familiar', 'medicacion-psiquiatrica'],
      },
      references: [OWEN_2016, APA_2013, CORRIGAN_2002],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'entender-un-diagnostico',
      title: 'Entender un diagnóstico',
      subtitle: 'Tres semanas para entender, preguntar y hablar de tu diagnóstico sin que te defina',
      description:
        'Leerás qué es un diagnóstico y qué no es, prepararás tus preguntas para el equipo, mirarás tu diagnóstico como una parte de tu vida y prepararás una charla con tu familia. Este programa no diagnostica ni reemplaza la atención profesional. Si aparecen ideas de morir o una crisis, usa el botón Ayuda de la app o llama al 135, al 0800-999-0091 o al 911.',
      basis: 'American Psychiatric Association (2013); Organización Mundial de la Salud (2019); Corrigan y Watson (2002); Ley 26.657 (2010).',
      rhythm: '5 a 10 minutos, 3 o 4 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Entender',
          focus: 'Qué es un diagnóstico y cómo prepararte',
          description: 'Leerás qué es un diagnóstico, quién lo hace y cuáles son tus derechos, y prepararás tu próxima consulta.',
          practiceIds: ['prepararte-para-un-diagnostico', 'preguntas-para-mi-equipo'],
          articleIds: ['diagnostico-sin-etiquetas'],
          journalType: 'intencion',
        },
        {
          title: 'Semana 2 · Ubicarlo en tu vida',
          focus: 'Un diagnóstico no es tu identidad',
          description: 'Leerás sobre tu diagnóstico y separarás lo que describe de todo lo demás que eres.',
          practiceIds: ['mi-diagnostico-no-me-define', 'pausa-autocompasion'],
          articleIds: ['depresion-y-ansiedad-explicadas', 'trastorno-bipolar-explicado', 'trastorno-limite-explicado', 'psicosis-y-esquizofrenia-explicadas'],
          journalType: 'carta-compasiva',
        },
        {
          title: 'Semana 3 · Hablarlo',
          focus: 'La familia y las personas de confianza',
          description: 'Prepararás qué contar, a quién y qué pedir, y cómo cuidarte después.',
          practiceIds: ['hablar-del-diagnostico-en-familia'],
          articleIds: ['acompanar-a-un-familiar'],
          journalType: 'conversacion',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-que-es-un-diagnostico',
      title: 'Qué es un diagnóstico',
      subtitle: 'Un nombre que ayuda, no una etiqueta que define.',
      slides: [
        { heading: 'Un nombre', text: 'Un diagnóstico pone nombre a un grupo de dificultades que suelen ir juntas. Ayuda a elegir un tratamiento.' },
        { heading: 'Quién lo hace', text: 'Lo hace un profesional, con una entrevista y tu historia. No sale de un test de internet.' },
        { heading: 'Qué no es', text: 'No es un juicio sobre quién eres. No dice cuánto vales ni cómo será tu futuro.' },
        { heading: 'Puede cambiar', text: 'Un diagnóstico se puede revisar con el tiempo. Tú también cambias.' },
        { heading: 'Tus derechos', text: 'La Ley 26.657 dice que tienes derecho a recibir información clara y a participar de las decisiones.' },
      ],
      related: { practices: ['prepararte-para-un-diagnostico', 'preguntas-para-mi-equipo'], articles: ['diagnostico-sin-etiquetas'] },
      references: [APA_2013, LEY_26657],
    },
    {
      id: 'pildora-mitos-salud-mental',
      title: 'Tres mitos que hacen daño',
      subtitle: 'Voluntad, peligro y «no tiene arreglo».',
      slides: [
        { heading: '«Es falta de voluntad»', text: 'Los problemas de salud mental no se van con ganas. Son problemas de salud y tienen tratamiento.' },
        { heading: '«Son peligrosos»', text: 'La gran mayoría de las personas con un diagnóstico no es violenta. Muchas veces sufren más violencia de la que ejercen.' },
        { heading: '«No tiene arreglo»', text: 'Mucha gente se recupera. Otras personas aprenden a vivir bien con algunos síntomas.' },
        { heading: 'El daño doble', text: 'El estigma duele desde afuera. Y duele más cuando una persona empieza a creerlo de sí misma.' },
        { heading: 'Lo que ayuda', text: 'Hablar de lo que tienes, no de lo que eres. Y conocer historias de recuperación.' },
      ],
      related: { practices: ['mi-diagnostico-no-me-define'], articles: ['diagnostico-sin-etiquetas'] },
      references: [CORRIGAN_2002],
    },
    {
      id: 'pildora-bipolar-explicado',
      title: 'Bipolar no es cambiar de humor',
      subtitle: 'Qué es el trastorno bipolar y qué señales cuidar.',
      slides: [
        { heading: 'No es un insulto', text: 'Todos cambiamos de humor en el día. Eso no es trastorno bipolar.' },
        { heading: 'Qué es', text: 'Son episodios que duran días o semanas. Hay períodos de mucha energía y euforia, y a veces de depresión.' },
        { heading: 'Una señal', text: 'Dormir mucho menos sin sentir cansancio puede ser una señal temprana. Conviene avisar al equipo.' },
        { heading: 'Tiene tratamiento', text: 'Suele incluir medicación que indica el médico, terapia y rutinas estables. Mucha gente pasa años estable.' },
        { heading: 'Si hay riesgo', text: 'Si hay euforia con gastos o conductas peligrosas, es una urgencia. Llama al 911 o al 135.' },
      ],
      related: { practices: ['plan-de-crisis-en-familia'], articles: ['trastorno-bipolar-explicado'] },
      references: [GRANDE_2016],
    },
    {
      id: 'pildora-tlp-sin-estigma',
      title: 'Límite no es manipulación',
      subtitle: 'Emociones intensas, mucho dolor y razones para la esperanza.',
      slides: [
        { heading: 'Mucho dolor', text: 'El trastorno límite trae emociones muy fuertes, miedo a que te dejen y vínculos que duelen.' },
        { heading: 'No es manipular', text: 'Detrás de muchas conductas hay un dolor enorme. No es «llamar la atención».' },
        { heading: 'Hay terapias', text: 'Hay terapias que enseñan a calmar las emociones y a entender mejor a los demás. Tienen buena evidencia.' },
        { heading: 'Hay esperanza', text: 'La mayoría de las personas mejora mucho con el tiempo y el tratamiento.' },
        { heading: 'Si te lastimas', text: 'Si te haces daño o piensas en morir, pide ayuda hoy. Llama al 135 o al 911.' },
      ],
      related: { practices: ['mi-diagnostico-no-me-define'], articles: ['trastorno-limite-explicado'] },
      references: [GUNDERSON_2018],
    },
    {
      id: 'pildora-recuperacion-posible',
      title: 'La recuperación es posible',
      subtitle: 'Qué significa recuperarse y qué ayuda en el camino.',
      slides: [
        { heading: 'Recuperarse', text: 'Recuperarse no siempre es no tener ningún síntoma. Es volver a una vida con sentido.' },
        { heading: 'A tiempo', text: 'Pedir ayuda temprano suele mejorar mucho la evolución. No hace falta esperar a estar muy mal.' },
        { heading: 'Juntos', text: 'Terapia, medicación si hace falta, rutinas y vínculos. Casi siempre ayuda más la suma.' },
        { heading: 'La familia', text: 'Escuchar sin juzgar y acompañar a las consultas ayuda. Cuidarse también es parte.' },
        { heading: 'Si es urgente', text: 'Si alguien piensa en morir o pierde el contacto con la realidad, llama al 135, al 0800-999-0091 o al 911.' },
      ],
      related: { practices: ['hablar-del-diagnostico-en-familia'], articles: ['psicosis-y-esquizofrenia-explicadas', 'depresion-y-ansiedad-explicadas'] },
      references: [OWEN_2016, MALHI_2018],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'episodio-maniaco', term: 'Manía', definition: 'Período de días con euforia o irritabilidad intensa, mucha energía y poca necesidad de dormir. Puede traer conductas de riesgo y es una urgencia.', articleId: 'trastorno-bipolar-explicado' },
    { id: 'psicosis', term: 'Psicosis', definition: 'Estado en el que se pierde en parte el contacto con la realidad, por ejemplo al oír voces o tener creencias firmes que otros no comparten. Necesita atención pronto.', articleId: 'psicosis-y-esquizofrenia-explicadas' },
    { id: 'estigma-internalizado', term: 'Autoestigma', definition: 'Cuando una persona con un diagnóstico empieza a creer los prejuicios sobre sí misma. Baja la autoestima y las ganas de pedir ayuda.', articleId: 'diagnostico-sin-etiquetas', practiceId: 'mi-diagnostico-no-me-define' },
    { id: 'recuperacion-en-salud-mental', term: 'Recuperación', definition: 'Volver a una vida con sentido y proyectos propios, con o sin algunos síntomas. Es un camino personal y con apoyo.', articleId: 'diagnostico-sin-etiquetas' },
    { id: 'ley-de-salud-mental', term: 'Ley de Salud Mental', definition: 'Ley argentina 26.657, de 2010. Protege los derechos de las personas usuarias, como recibir información clara, no ser discriminadas y participar de su tratamiento.', articleId: 'diagnostico-sin-etiquetas', practiceId: 'preguntas-para-mi-equipo' },
  ],
};
