import type { Article } from './library';

/** Sexta tanda: logoterapia, psicología humanista y terapia Gestalt. */

const FRANKL_1946 = { citation: 'Frankl, V. E. (1946/2015). El hombre en busca de sentido. Herder.' };
const VOS_2015 = {
  citation:
    'Vos, J., Craig, M., & Cooper, M. (2015). Existential therapies: A meta-analysis of their effects on psychological outcomes. Journal of Consulting and Clinical Psychology, 83(1), 115–128.',
};
const PERLS_1951 = { citation: 'Perls, F., Hefferline, R. F., & Goodman, P. (1951/2002). Terapia Gestalt: excitación y crecimiento de la personalidad humana. Sociedad de Cultura Valle-Inclán.' };
const ELLIOTT_2013 = {
  citation:
    'Elliott, R., Greenberg, L. S., Watson, J., Timulak, L., & Freire, E. (2013). Research on humanistic-experiential psychotherapies. En M. J. Lambert (Ed.), Bergin and Garfield’s handbook of psychotherapy and behavior change (6.ª ed., pp. 495–538). Wiley.',
};

export const EXISTENTIAL_ARTICLES: Article[] = [
  {
    id: 'logoterapia',
    title: 'Logoterapia: vivir con sentido',
    subtitle: 'La propuesta de Viktor Frankl: el sentido no se inventa, se descubre en lo que haces, en lo que vives y en cómo enfrentas lo inevitable.',
    category: 'Humanismo y existencialismo',
    readingMin: 7,
    keyPoints: [
      'Para Frankl, la motivación más profunda de las personas es encontrar sentido, no solo placer o poder.',
      'El sentido se descubre por tres caminos: crear o hacer, vivir o amar, y la actitud ante un sufrimiento que no se puede evitar.',
      'Estar demasiado pendiente de uno mismo empeora muchos problemas; volcarse hacia algo o alguien ayuda.',
      'La logoterapia tiene mucha tradición clínica y menos ensayos controlados que otras terapias: sus técnicas aquí son una invitación a reflexionar.',
    ],
    sections: [
      {
        heading: 'Quién fue Viktor Frankl',
        paragraphs: [
          'Viktor Frankl (1905–1997) fue un psiquiatra y neurólogo vienés. Antes de la Segunda Guerra Mundial ya trabajaba en prevención del suicidio con jóvenes. Fue deportado a varios campos de concentración nazis, donde murieron su esposa, sus padres y su hermano.',
          'Al salir escribió, en pocos días, «El hombre en busca de sentido». En ese libro cuenta lo que observó: quienes conservaban un motivo para vivir, como una persona que los esperaba o una obra por terminar, resistían mejor. De esa experiencia, y de su trabajo clínico anterior, nació la logoterapia, la «terapia a través del sentido».',
        ],
      },
      {
        heading: 'La voluntad de sentido',
        paragraphs: [
          'Frankl sostenía que lo que más nos mueve no es el placer, como decía Freud, ni el poder, como decía Adler, sino la búsqueda de sentido. Cuando esa búsqueda se frustra aparece lo que llamó «vacío existencial»: aburrimiento, apatía, la sensación de que nada vale la pena.',
          'Una idea central es dar vuelta la pregunta. En lugar de preguntar «¿qué espero yo de la vida?», preguntar «¿qué espera la vida de mí?». El sentido no es una respuesta general para toda la vida, sino la respuesta concreta a esta situación, hoy.',
        ],
      },
      {
        heading: 'Los tres caminos',
        paragraphs: [
          'Crear: hacer un trabajo, una obra, una acción que deja algo en el mundo. Vivir y amar: dejarse tocar por la belleza, la naturaleza, la cultura o, sobre todo, por otra persona. La actitud: cuando algo doloroso no se puede cambiar, todavía se puede elegir cómo enfrentarlo.',
          'Este tercer camino es el más conocido y el más delicado. Frankl no decía que el sufrimiento sea bueno ni que haya que buscarlo. Si algo se puede cambiar, el sentido está en cambiarlo. Solo ante lo inevitable queda la libertad de elegir la actitud.',
        ],
      },
      {
        heading: 'Dos técnicas: derreflexión e intención paradójica',
        paragraphs: [
          'La «hiperreflexión» es estar demasiado pendiente de uno mismo: de si duermo, de si me sale bien, de si se me notan los nervios. La derreflexión propone dirigir la atención hacia afuera, hacia una tarea o una persona. La investigación sobre el control mental muestra algo parecido: intentar no pensar en algo suele traerlo más a la mente (Wegner, 1994).',
          'La intención paradójica consiste en desear, con humor, lo que se teme: «hoy voy a sonrojarme como nunca». Al reírse del miedo, la persona deja de luchar con él. Funciona mejor con miedos leves y concretos, y nunca se usa sola en crisis, con pensamientos obsesivos o con miedos a hacer daño.',
        ],
      },
      {
        heading: 'Lo que dice la evidencia',
        paragraphs: [
          'Un metaanálisis de terapias existenciales encontró efectos positivos sobre el sentido en la vida y, en menor medida, sobre la psicopatología, con estudios de calidad variable (Vos et al., 2015). La terapia centrada en el sentido, inspirada en Frankl, mostró buenos resultados en personas con cáncer avanzado.',
          'La investigación sobre sentido vital es más amplia: sentir que la propia vida tiene propósito se asocia de forma consistente con más bienestar y mejor adaptación al estrés (Steger et al., 2006; Park, 2010).',
        ],
      },
    ],
    caveat: {
      title: 'Una advertencia sobre las citas',
      body: 'Circulan muchas frases atribuidas a Frankl que no están en su obra, como «entre el estímulo y la respuesta hay un espacio». En esta app usamos sus ideas con fuente localizable y marcamos como paráfrasis lo que no es literal.',
    },
    related: {
      practices: ['que-me-pide-la-vida', 'tres-caminos-sentido', 'derreflexion', 'intencion-paradojica', 'lo-vivido-queda'],
      articles: ['sentido-y-valores', 'psicologia-humanista', 'gestalt'],
    },
    references: [
      FRANKL_1946,
      { citation: 'Frankl, V. E. (1946/1978). Psicoanálisis y existencialismo: de la psicoterapia a la logoterapia. Fondo de Cultura Económica.' },
      VOS_2015,
      {
        citation:
          'Breitbart, W., Rosenfeld, B., Pessin, H., et al. (2015). Meaning-centered group psychotherapy: An effective intervention for improving psychological well-being in patients with advanced cancer. Journal of Clinical Oncology, 33(7), 749–754.',
      },
      {
        citation:
          'Steger, M. F., Frazier, P., Oishi, S., & Kaler, M. (2006). The Meaning in Life Questionnaire: Assessing the presence of and search for meaning in life. Journal of Counseling Psychology, 53(1), 80–93.',
        doi: '10.1037/0022-0167.53.1.80',
      },
      {
        citation:
          'Park, C. L. (2010). Making sense of the meaning literature: An integrative review of meaning making and its effects on adjustment to stressful life events. Psychological Bulletin, 136(2), 257–301.',
        doi: '10.1037/a0018301',
      },
      {
        citation: 'Wegner, D. M. (1994). Ironic processes of mental control. Psychological Review, 101(1), 34–52.',
        doi: '10.1037/0033-295X.101.1.34',
      },
    ],
  },
  {
    id: 'psicologia-humanista',
    title: 'Psicología humanista: el poder de ser escuchado',
    subtitle: 'Rogers, Maslow y Gendlin: aceptación, autenticidad y crecimiento como motores del cambio.',
    category: 'Humanismo y existencialismo',
    readingMin: 7,
    keyPoints: [
      'La psicología humanista ve a cada persona como alguien con tendencia a crecer, no como un conjunto de síntomas.',
      'Rogers describió tres condiciones que facilitan el cambio: empatía, aceptación incondicional y autenticidad.',
      'La empatía y la aceptación del terapeuta están entre los factores que más se asocian con buenos resultados en cualquier terapia.',
      'La pirámide de Maslow es una simplificación: las necesidades no se cumplen en un orden fijo.',
    ],
    sections: [
      {
        heading: 'La «tercera fuerza»',
        paragraphs: [
          'A mediados del siglo XX, la psicología estaba dominada por el psicoanálisis y el conductismo. Un grupo de psicólogos, entre ellos Carl Rogers, Abraham Maslow y Rollo May, propuso una «tercera fuerza»: mirar a la persona entera, con su libertad, su experiencia subjetiva y su capacidad de crecer.',
          'Para este enfoque, quien consulta no es un caso a corregir, sino alguien que sabe mucho de sí mismo. La tarea del terapeuta es crear las condiciones para que esa sabiduría aparezca.',
        ],
      },
      {
        heading: 'Rogers: las tres condiciones',
        paragraphs: [
          'Carl Rogers propuso en 1957 que el cambio terapéutico se facilita cuando el terapeuta ofrece tres actitudes. Empatía: comprender el mundo del otro desde dentro, como si fuera propio. Aceptación incondicional: valorar a la persona sin condiciones, aunque no se aprueben todas sus conductas. Congruencia: ser auténtico, sin fachadas.',
          'Rogers también observó una paradoja: cuando una persona se siente aceptada tal como es, empieza a cambiar. La autocrítica dura suele inmovilizar; la aceptación abre espacio. Esta idea conecta con la investigación actual sobre autocompasión.',
          'Hoy sabemos que la empatía del terapeuta y la consideración positiva hacia el paciente se asocian con mejores resultados, en todo tipo de terapias (Elliott et al., 2018; Farber et al., 2018). Rogers fue además uno de los primeros en grabar sesiones para investigarlas.',
        ],
      },
      {
        heading: 'Yo real y yo ideal',
        paragraphs: [
          'Rogers explicó buena parte del malestar como una falta de congruencia: la distancia entre lo que de verdad sentimos y somos, y la imagen de quien creemos que deberíamos ser. Muchas veces ese ideal se arma con lo que otros esperaban de nosotros para querernos.',
          'La investigación de Higgins (1987) sobre las «discrepancias del yo» encontró algo parecido: la distancia con el ideal se asocia con tristeza, y la distancia con lo que «debería» ser, con ansiedad.',
        ],
      },
      {
        heading: 'Maslow y las necesidades',
        paragraphs: [
          'Abraham Maslow propuso que las personas tenemos necesidades básicas, como las fisiológicas, la seguridad, el afecto y la estima, y también una necesidad de crecimiento que llamó «autorrealización». La famosa pirámide no la dibujó él, y él mismo aclaró que el orden no es rígido.',
          'Un estudio con datos de 123 países encontró que distintas necesidades se asocian con el bienestar casi de forma independiente: se puede tener sentido y vínculos aun con necesidades básicas sin cubrir del todo (Tay y Diener, 2011).',
        ],
      },
      {
        heading: 'Gendlin y la sensación sentida',
        paragraphs: [
          'Eugene Gendlin, colaborador de Rogers, estudió qué distinguía a quienes más avanzaban en terapia. Encontró que esas personas prestaban atención a una sensación corporal difusa, todavía sin palabras, que llamó «sensación sentida». A partir de eso creó el focusing, una forma de escucharse con paciencia hasta que aparece la palabra justa.',
        ],
      },
    ],
    caveat: {
      title: 'Lo que no es',
      body: 'Aceptarse no es resignarse ni aprobar todo lo que uno hace. Es dejar de pelear con lo que ya está, para poder elegir hacia dónde ir. Y escucharse no reemplaza ser escuchado: si llevas mucho tiempo con malestar, buscar a un profesional es un buen paso.',
    },
    related: {
      practices: ['escucharme-sin-juzgar', 'yo-real-yo-ideal', 'necesidades-que-pido', 'pausa-autocompasion'],
      articles: ['autocompasion', 'logoterapia', 'gestalt'],
    },
    references: [
      {
        citation: 'Rogers, C. R. (1957). The necessary and sufficient conditions of therapeutic personality change. Journal of Consulting Psychology, 21(2), 95–103.',
        doi: '10.1037/h0045357',
      },
      { citation: 'Rogers, C. R. (1961/2011). El proceso de convertirse en persona. Paidós.' },
      {
        citation: 'Maslow, A. H. (1943). A theory of human motivation. Psychological Review, 50(4), 370–396.',
        doi: '10.1037/h0054346',
      },
      {
        citation: 'Tay, L., & Diener, E. (2011). Needs and subjective well-being around the world. Journal of Personality and Social Psychology, 101(2), 354–365.',
        doi: '10.1037/a0023779',
      },
      {
        citation: 'Higgins, E. T. (1987). Self-discrepancy: A theory relating self and affect. Psychological Review, 94(3), 319–340.',
        doi: '10.1037/0033-295X.94.3.319',
      },
      {
        citation: 'Elliott, R., Bohart, A. C., Watson, J. C., & Murphy, D. (2018). Therapist empathy and client outcome: An updated meta-analysis. Psychotherapy, 55(4), 399–410.',
        doi: '10.1037/pst0000175',
      },
      { citation: 'Farber, B. A., Suzuki, J. Y., & Lynch, D. A. (2018). Positive regard and psychotherapy outcome: A meta-analytic review. Psychotherapy, 55(4), 411–423.' },
      { citation: 'Gendlin, E. T. (1978/2016). Focusing: proceso y técnica del enfoque corporal. Mensajero.' },
      ELLIOTT_2013,
    ],
  },
  {
    id: 'gestalt',
    title: 'Gestalt: el darse cuenta y el aquí y ahora',
    subtitle: 'La terapia de Fritz y Laura Perls: notar lo que pasa ahora, cerrar lo que quedó pendiente y dejar dialogar a las partes en conflicto.',
    category: 'Humanismo y existencialismo',
    readingMin: 7,
    keyPoints: [
      'La Gestalt pone el foco en el «darse cuenta»: notar lo que pasa ahora, más que explicar por qué pasa.',
      'Distingue lo que percibes afuera, lo que sientes adentro y lo que imaginas o piensas.',
      'Los «asuntos pendientes» son experiencias incompletas que vuelven una y otra vez hasta que se cierran.',
      'La silla vacía tiene apoyo en estudios de la terapia focalizada en la emoción, pero conviene hacerla con acompañamiento si el tema es doloroso.',
    ],
    sections: [
      {
        heading: 'Origen',
        paragraphs: [
          'La terapia Gestalt nació en la década de 1940 de la mano de Fritz Perls, psiquiatra, y Laura Perls, psicóloga, con aportes de Paul Goodman. Tomaron ideas de la psicología de la Gestalt, que estudia cómo percibimos totalidades, del existencialismo, del psicoanálisis y del teatro.',
          '«Gestalt» es una palabra alemana que significa forma o configuración. La idea es que vivimos la experiencia como un todo con figura y fondo: lo que nos importa en cada momento pasa al frente, y cuando se resuelve vuelve al fondo para dejar lugar a lo siguiente.',
        ],
      },
      {
        heading: 'El darse cuenta',
        paragraphs: [
          'El concepto central es el «darse cuenta» (awareness): estar en contacto con lo que pasa ahora, en el cuerpo, en las emociones y en la relación con otros. Para la Gestalt, el cambio no viene de esforzarse por ser distinto, sino de darse cuenta de lo que uno ya está haciendo.',
          'Un ejercicio clásico es el «continuo de conciencia»: completar una y otra vez la frase «ahora me doy cuenta de…». Al hacerlo se distinguen tres zonas: la de afuera (lo que veo y oigo), la de adentro (lo que siento en el cuerpo) y la zona intermedia de la fantasía (lo que pienso, imagino, recuerdo o anticipo).',
          'Laura Perls subrayó que el contacto con lo nuevo necesita apoyo: una buena postura, la respiración, el suelo bajo los pies, los vínculos. Sin apoyo, el contacto asusta.',
        ],
      },
      {
        heading: 'Asuntos pendientes y silla vacía',
        paragraphs: [
          'Un asunto pendiente es una experiencia que quedó incompleta: algo que no dijimos, un enojo que tragamos, una despedida que no fue. Lo incompleto busca cerrarse y vuelve como recuerdo, rumiación o tensión.',
          'La silla vacía es una forma de cerrarlo: la persona imagina al otro frente a sí y le habla en presente. Leslie Greenberg y Sandra Paivio estudiaron esta técnica dentro de la terapia focalizada en la emoción. En un ensayo, las personas que trabajaron así sus asuntos pendientes mejoraron más que el grupo de comparación (Paivio y Greenberg, 1995).',
        ],
      },
      {
        heading: 'Polaridades',
        paragraphs: [
          'Fritz Perls describió conflictos internos entre partes opuestas. El más conocido es el del «perro de arriba», la voz que exige y dice «deberías», y el «perro de abajo», la parte que se resiste con excusas o cansancio. Mientras pelean, la persona queda trabada.',
          'La Gestalt propone dar voz a cada parte por turnos, para que se escuchen, en lugar de que una gane a la otra. Muchas veces la que exige tiene miedo, y la que se resiste necesita algo, como descanso o reconocimiento.',
        ],
      },
    ],
    caveat: {
      title: 'Con cuidado',
      body: 'Las técnicas de la Gestalt pueden remover emociones intensas. No hagas la silla vacía sin acompañamiento si se trata de trauma, abuso o un duelo muy reciente. Si te desbordas, detente, abre los ojos y nota tus pies en el piso. La investigación sobre la Gestalt clásica es menor que la de otras terapias; buena parte de la evidencia viene de la terapia focalizada en la emoción.',
    },
    related: {
      practices: ['darse-cuenta', 'asuntos-pendientes', 'silla-vacia', 'polaridades'],
      articles: ['psicologia-humanista', 'logoterapia', 'autoconocimiento'],
    },
    references: [
      PERLS_1951,
      { citation: 'Yontef, G. M. (1993/1995). Proceso y diálogo en psicoterapia gestáltica. Cuatro Vientos.' },
      {
        citation:
          'Paivio, S. C., & Greenberg, L. S. (1995). Resolving «unfinished business»: Efficacy of experiential therapy using empty-chair dialogue. Journal of Consulting and Clinical Psychology, 63(3), 419–425.',
        doi: '10.1037/0022-006X.63.3.419',
      },
      { citation: 'Greenberg, L. S. (2002). Emotion-focused therapy: Coaching clients to work through their feelings. American Psychological Association.' },
      ELLIOTT_2013,
    ],
  },
];
