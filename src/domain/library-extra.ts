import type { Article } from './library';

/** Segunda tanda de la Biblioteca. Misma regla editorial: toda afirmación empírica, referenciada. */
export const EXTRA_ARTICLES: Article[] = [
  {
    id: 'autocompasion',
    title: 'Autocompasión',
    subtitle: 'Por qué tratarte con amabilidad no te vuelve complaciente, y cómo empezar.',
    category: 'Fundamentos',
    readingMin: 7,
    keyPoints: [
      'La autocompasión tiene tres componentes: atención plena, humanidad compartida y amabilidad.',
      'No es autoestima ni autoindulgencia: aumenta la motivación para corregir errores.',
      'Se asocia de forma consistente con menos ansiedad, depresión y estrés.',
    ],
    sections: [
      {
        heading: 'Qué es',
        paragraphs: [
          'Kristin Neff (2003) definió la autocompasión como la capacidad de tratarse en los momentos difíciles con la misma amabilidad con que se trataría a un buen amigo. La componen tres elementos que se contraponen a tres reacciones habituales ante el sufrimiento:',
          'Amabilidad hacia uno mismo, frente al juicio severo. Humanidad compartida (entender el sufrimiento y los errores como parte de la condición humana), frente al aislamiento («sólo me pasa a mí»). Atención plena (ver el dolor con claridad, sin exagerarlo ni negarlo), frente a la sobreidentificación.',
        ],
      },
      {
        heading: 'Lo que dice la evidencia',
        paragraphs: [
          'Un metaanálisis de MacBeth y Gumley (2012) encontró una relación grande y consistente entre más autocompasión y menos depresión, ansiedad y estrés. Los programas de entrenamiento en compasión muestran efectos de pequeños a moderados en ensayos controlados (Kirby et al., 2017).',
          'El hallazgo más contraintuitivo es de Breines y Chen (2012): tras recordar un error, las personas a las que se indujo autocompasión estudiaron más para un examen difícil y se mostraron más dispuestas a reparar el daño que quienes recibieron un mensaje para subir su autoestima.',
        ],
      },
      {
        heading: 'El modelo de los tres sistemas',
        paragraphs: [
          'Paul Gilbert propone que regulamos las emociones con tres sistemas: amenaza (protección, alerta), logro (búsqueda de recursos, motivación) y cuidado (calma, vínculo). La autocrítica intensa mantiene encendido el sistema de amenaza contra uno mismo. La autocompasión entrena el sistema de cuidado, que es el que permite calmarse y aprender.',
        ],
      },
    ],
    caveat: {
      title: 'Miedo a la compasión',
      body: 'Algunas personas, sobre todo con historia de crítica o abuso, sienten amenaza cuando intentan ser amables consigo mismas: les parece peligroso, inmerecido o débil. Es un fenómeno estudiado (Gilbert et al., 2011) y no un fracaso. Conviene ir despacio y, si es intenso, trabajarlo en terapia.',
    },
    related: { practices: ['pausa-autocompasion', 'amor-altruista'], articles: ['antidotos-y-regulacion'] },
    references: [
      {
        citation: 'Neff, K. D. (2003). Self-compassion: An alternative conceptualization of a healthy attitude toward oneself. Self and Identity, 2(2), 85–101.',
        doi: '10.1080/15298860309032',
      },
      {
        citation: 'MacBeth, A., & Gumley, A. (2012). Exploring compassion: A meta-analysis of the association between self-compassion and psychopathology. Clinical Psychology Review, 32(6), 545–552.',
        doi: '10.1016/j.cpr.2012.06.003',
      },
      {
        citation: 'Breines, J. G., & Chen, S. (2012). Self-compassion increases self-improvement motivation. Personality and Social Psychology Bulletin, 38(9), 1133–1143.',
        doi: '10.1177/0146167212445599',
      },
      {
        citation: 'Kirby, J. N., Tellegen, C. L., & Steindl, S. R. (2017). A meta-analysis of compassion-based interventions: Current state of knowledge and future directions. Behavior Therapy, 48(6), 778–792.',
        doi: '10.1016/j.beth.2017.06.003',
      },
    ],
  },
  {
    id: 'granularidad-emocional',
    title: 'Ponerle nombre a lo que sientes',
    subtitle: 'La granularidad emocional: por qué distinguir entre emociones parecidas ayuda a regularlas.',
    category: 'Fundamentos',
    readingMin: 5,
    keyPoints: [
      'Distinguir con precisión entre emociones (frustración, decepción, vergüenza) se llama granularidad emocional.',
      'Las personas con mayor granularidad regulan mejor sus emociones y recurren menos a conductas impulsivas.',
      'Ampliar el vocabulario emocional es entrenable.',
    ],
    sections: [
      {
        heading: 'Más allá de «mal»',
        paragraphs: [
          'Ante una experiencia desagradable, algunas personas sólo pueden decir «me siento mal». Otras distinguen si es frustración, decepción, vergüenza, culpa o soledad. Lisa Feldman Barrett y colaboradores llaman a esta capacidad granularidad emocional (o diferenciación emocional).',
          'Kashdan, Barrett y McKnight (2015) revisaron la evidencia: una mayor diferenciación de las emociones negativas se asocia con menos bebida compulsiva, menos agresión ante el rechazo y menos autolesiones, y con más estrategias de regulación eficaces. Saber exactamente qué sientes orienta sobre qué necesitas.',
        ],
      },
      {
        heading: 'Cómo entrenarla',
        paragraphs: [
          'Cada antídoto de esta app empieza por nombrar la emoción, y el registro de pensamientos pide «el nombre más preciso posible». Un ejercicio útil: cuando notes una emoción, busca tres palabras candidatas y elige la que mejor encaja. Con el tiempo, el repertorio se amplía.',
          'Nombrar no es sólo describir: el etiquetado afectivo reduce por sí mismo la reactividad emocional (Lieberman et al., 2007).',
        ],
      },
    ],
    related: { practices: ['anotacion-mental', 'escaneo-corporal'], articles: ['antidotos-y-regulacion'] },
    references: [
      {
        citation:
          'Kashdan, T. B., Barrett, L. F., & McKnight, P. E. (2015). Unpacking emotion differentiation: Transforming unpleasant experience by perceiving distinctions in negativity. Current Directions in Psychological Science, 24(1), 10–16.',
        doi: '10.1177/0963721414550708',
      },
      {
        citation:
          'Lieberman, M. D., Eisenberger, N. I., Crockett, M. J., et al. (2007). Putting feelings into words: Affect labeling disrupts amygdala activity in response to affective stimuli. Psychological Science, 18(5), 421–428.',
        doi: '10.1111/j.1467-9280.2007.01916.x',
      },
    ],
  },
  {
    id: 'activacion-conductual',
    title: 'Activación conductual',
    subtitle: 'Por qué esperar a tener ganas mantiene el desánimo, y cómo salir actuando primero.',
    category: 'Terapias contextuales',
    readingMin: 6,
    keyPoints: [
      'El desánimo reduce la actividad, y la inactividad profundiza el desánimo: es un círculo.',
      'La activación conductual lo rompe empezando por la conducta, no por la motivación.',
      'Tiene una eficacia comparable a la terapia cognitiva completa en depresión.',
    ],
    sections: [
      {
        heading: 'El círculo',
        paragraphs: [
          'Cuando el ánimo baja, es natural retirarse: cancelar planes, quedarse en casa, posponer tareas. A corto plazo alivia (se evita el esfuerzo), pero a largo plazo reduce las fuentes de placer, logro y conexión que sostienen el ánimo. Martell, Addis y Jacobson lo resumen con dos siglas: TRAP (disparador, respuesta, patrón de evitación) y TRAC (disparador, respuesta, afrontamiento alternativo).',
        ],
      },
      {
        heading: 'Lo que funciona',
        paragraphs: [
          'Metaanálisis como los de Cuijpers y colaboradores (2007) y Ekers y colaboradores (2014) sitúan la activación conductual entre los tratamientos psicológicos más eficaces para la depresión, con resultados comparables a la terapia cognitiva y con la ventaja de ser sencilla de aplicar.',
          'Los ingredientes clave son: registrar actividades y su efecto en el ánimo, programar actividades pequeñas y concretas de placer, logro y conexión, y detectar la evitación para sustituirla por afrontamiento.',
        ],
      },
      {
        heading: 'En esta app',
        paragraphs: [
          'La práctica «Planificar actividades que nutren» ayuda a elegir y agendar; el «Registro de actividades» del Diario permite comprobar después el placer y el logro reales; el antídoto para el desánimo guía el primer paso cuando todo cuesta.',
        ],
      },
    ],
    diagram: {
      title: 'El círculo del desánimo',
      nodes: ['Ánimo bajo', 'Hago menos', 'Menos placer, logro y conexión', 'Ánimo más bajo', 'Espero a tener ganas'],
      caption: 'La activación conductual rompe el círculo entre «espero a tener ganas» y «hago menos»: primero la acción, después las ganas.',
    },
    related: { practices: ['activacion-conductual', 'brujula-valores'], articles: ['ejercicio-y-animo'] },
    references: [
      {
        citation: 'Cuijpers, P., van Straten, A., & Warmerdam, L. (2007). Behavioral activation treatments of depression: A meta-analysis. Clinical Psychology Review, 27(3), 318–326.',
        doi: '10.1016/j.cpr.2006.11.001',
      },
      {
        citation: 'Ekers, D., Webster, L., Van Straten, A., et al. (2014). Behavioural activation for depression; an update of meta-analysis of effectiveness and sub group analysis. PLoS ONE, 9(6), e100100.',
        doi: '10.1371/journal.pone.0100100',
      },
      { citation: 'Martell, C. R., Addis, M. E., & Jacobson, N. S. (2001). Depression in context: Strategies for guided action. W. W. Norton.' },
    ],
  },
  {
    id: 'sueno-y-bienestar',
    title: 'Dormir mejor',
    subtitle: 'Lo que la evidencia recomienda para el insomnio, más allá de los consejos genéricos.',
    category: 'Hábitos y cuerpo',
    readingMin: 6,
    keyPoints: [
      'La terapia cognitivo-conductual para el insomnio (TCC-I) es el tratamiento de primera elección.',
      'Sus técnicas centrales son el control de estímulos y la regulación del horario de sueño.',
      'La «higiene del sueño» por sí sola tiene efectos modestos.',
    ],
    sections: [
      {
        heading: 'El sueño y el ánimo',
        paragraphs: [
          'Dormir mal empeora el ánimo, la regulación emocional y la concentración, y el malestar emocional a su vez dificulta el sueño. Por eso trabajar el sueño es, en sí mismo, una intervención sobre el bienestar.',
        ],
      },
      {
        heading: 'Lo que funciona',
        paragraphs: [
          'El metaanálisis de Trauer y colaboradores (2015) encontró que la TCC-I mejora de forma clínicamente significativa la latencia del sueño, los despertares nocturnos y la eficiencia del sueño, con efectos que se mantienen en el tiempo.',
          'Control de estímulos: usar la cama sólo para dormir (y sexo); si no te duermes en unos 20 minutos, levantarte y volver sólo con sueño; levantarte a la misma hora todos los días, incluidos los fines de semana.',
          'Regular el horario: pasar en la cama aproximadamente el tiempo que realmente duermes, para consolidar el sueño. Esta técnica conviene hacerla con guía profesional.',
          'Apagar la mente: la relajación muscular progresiva, la respiración lenta y el «tiempo de preocupación» (programado horas antes de acostarse) reducen la activación que impide dormir.',
        ],
      },
    ],
    caveat: {
      title: 'Cuándo consultar',
      body: 'Si roncas fuerte con pausas en la respiración, tienes somnolencia diurna intensa o el insomnio dura más de tres meses, consulta: puede haber un trastorno del sueño que requiera evaluación específica.',
    },
    related: { practices: ['relajacion-progresiva', 'respiracion-resonante', 'escaneo-corporal'], articles: ['preocupacion-y-ansiedad'] },
    references: [
      {
        citation:
          'Trauer, J. M., Qian, M. Y., Doyle, J. S., Rajaratnam, S. M. W., & Cunnington, D. (2015). Cognitive behavioral therapy for chronic insomnia: A systematic review and meta-analysis. Annals of Internal Medicine, 163(3), 191–204.',
        doi: '10.7326/M14-2841',
      },
    ],
  },
  {
    id: 'ejercicio-y-animo',
    title: 'Moverse para sentirse mejor',
    subtitle: 'La actividad física como intervención sobre el ánimo, con datos y sin exageraciones.',
    category: 'Hábitos y cuerpo',
    readingMin: 5,
    keyPoints: [
      'La actividad física reduce los síntomas de depresión y ansiedad en adultos.',
      'No hace falta deporte intenso: caminar cuenta.',
      'La regularidad importa más que la intensidad.',
    ],
    sections: [
      {
        heading: 'Lo que dice la evidencia',
        paragraphs: [
          'Una revisión de revisiones sistemáticas (Singh et al., 2023), con más de 1.000 ensayos, concluyó que la actividad física mejora de forma consistente los síntomas de depresión, ansiedad y malestar psicológico en adultos, con beneficios mayores en intervenciones de intensidad moderada a alta y de duración breve a media.',
          'Schuch y colaboradores (2016), corrigiendo el sesgo de publicación, encontraron que el ejercicio sigue mostrando un efecto grande sobre la depresión, aunque menor que el de estimaciones anteriores.',
        ],
      },
      {
        heading: 'Cómo empezar',
        paragraphs: [
          'Elegir algo que puedas sostener: caminar 20 minutos, subir escaleras, bailar en casa. La práctica «Caminar con atención» combina movimiento y entrenamiento atencional. En épocas de desánimo, una caminata breve es una excelente actividad de activación conductual.',
        ],
      },
    ],
    caveat: {
      title: 'No es sustituto',
      body: 'El ejercicio complementa, pero no sustituye, el tratamiento de una depresión moderada o grave. Si tienes una condición médica, consulta antes de empezar actividad intensa.',
    },
    related: { practices: ['caminar-atencion', 'activacion-conductual'], articles: ['activacion-conductual'] },
    references: [
      {
        citation:
          'Singh, B., Olds, T., Curtis, R., et al. (2023). Effectiveness of physical activity interventions for improving depression, anxiety and distress: An overview of systematic reviews. British Journal of Sports Medicine, 57(18), 1203–1209.',
        doi: '10.1136/bjsports-2022-106195',
      },
      {
        citation:
          'Schuch, F. B., Vancampfort, D., Richards, J., et al. (2016). Exercise as a treatment for depression: A meta-analysis adjusting for publication bias. Journal of Psychiatric Research, 77, 42–51.',
        doi: '10.1016/j.jpsychires.2016.02.023',
      },
    ],
  },
  {
    id: 'vinculos-y-soledad',
    title: 'Vínculos y soledad',
    subtitle: 'Las relaciones como factor de salud, y qué ayuda de verdad cuando falta conexión.',
    category: 'Relaciones',
    readingMin: 6,
    keyPoints: [
      'La calidad de las relaciones sociales predice la salud y la supervivencia tanto como factores clásicos de riesgo.',
      'La soledad no es estar sin compañía: es la distancia entre la conexión que tienes y la que necesitas.',
      'Lo que más ayuda es trabajar la forma de interpretar lo social, no sólo aumentar el contacto.',
    ],
    sections: [
      {
        heading: 'Por qué importan',
        paragraphs: [
          'El metaanálisis de Holt-Lunstad, Smith y Layton (2010), con 148 estudios y más de 300.000 personas, encontró que tener relaciones sociales sólidas se asocia con un 50 % más de probabilidad de supervivencia en el periodo estudiado: un efecto comparable al de dejar de fumar.',
          'El estudio de desarrollo adulto de Harvard, que sigue a participantes desde 1938, llega a una conclusión parecida: la calidad de los vínculos es uno de los mejores predictores de una vida larga y satisfecha.',
        ],
      },
      {
        heading: 'Salir de la soledad',
        paragraphs: [
          'Cacioppo describió la soledad crónica como un estado de hipervigilancia social: el cerebro busca señales de rechazo y las encuentra donde no las hay, lo que lleva a retirarse y confirma la soledad. El metaanálisis de Masi y colaboradores (2011) encontró que las intervenciones más eficaces son las que corrigen esa cognición social desadaptativa.',
          'En la práctica: tratar los pensamientos sobre los demás como hipótesis, dar pasos de contacto pequeños y regulares, y cultivar la benevolencia (que cambia la forma de mirar a los otros). El antídoto para la soledad y la meditación de amor altruista trabajan en esa dirección.',
        ],
      },
    ],
    related: { practices: ['amor-altruista', 'regocijo-empatico'], articles: ['autocompasion'] },
    references: [
      {
        citation: 'Holt-Lunstad, J., Smith, T. B., & Layton, J. B. (2010). Social relationships and mortality risk: A meta-analytic review. PLoS Medicine, 7(7), e1000316.',
        doi: '10.1371/journal.pmed.1000316',
      },
      {
        citation: 'Masi, C. M., Chen, H.-Y., Hawkley, L. C., & Cacioppo, J. T. (2011). A meta-analysis of interventions to reduce loneliness. Personality and Social Psychology Review, 15(3), 219–266.',
        doi: '10.1177/1088868310377394',
      },
      { citation: 'Waldinger, R., & Schulz, M. (2023). The good life: Lessons from the world’s longest scientific study of happiness. Simon & Schuster.' },
    ],
  },
  {
    id: 'preocupacion-y-ansiedad',
    title: 'Preocupación y ansiedad',
    subtitle: 'Por qué preocuparse parece útil pero rara vez lo es, y cómo poner límites a la preocupación.',
    category: 'Terapias contextuales',
    readingMin: 6,
    keyPoints: [
      'La preocupación es pensamiento verbal sobre amenazas futuras; da sensación de control sin resolver.',
      'Posponerla a un momento fijo del día reduce su frecuencia e intensidad.',
      'La aceptación de las sensaciones de ansiedad reduce la evitación.',
    ],
    sections: [
      {
        heading: 'La trampa de la preocupación',
        paragraphs: [
          'Thomas Borkovec mostró que la preocupación es sobre todo verbal: palabras sobre lo que podría pasar. Paradójicamente, esto reduce la activación fisiológica a corto plazo, lo que refuerza el hábito, pero impide procesar el miedo y resolver el problema. La mente la vive como «estar preparándose», aunque rara vez lleve a una acción.',
        ],
      },
      {
        heading: 'Herramientas',
        paragraphs: [
          'Tiempo de preocupación: reservar unos 20 minutos al día para preocuparse y posponer hasta entonces cualquier preocupación (Borkovec et al., 1983; McGowan y Behar, 2013).',
          'Separar lo controlable: convertir la parte controlable en un paso concreto y reconocer la incontrolable.',
          'Aceptación: permitir las sensaciones de ansiedad en lugar de luchar contra ellas reduce la evitación (Eifert y Heffner, 2003).',
          'Defusión: tratar el «¿y si…?» como un pensamiento, no como una predicción.',
        ],
      },
    ],
    caveat: {
      title: 'Cuándo es un trastorno',
      body: 'Si la preocupación es excesiva, difícil de controlar, afecta a varios ámbitos y dura más de seis meses, puede tratarse de un trastorno de ansiedad generalizada. La terapia cognitivo-conductual tiene buena evidencia para tratarlo.',
    },
    diagram: {
      title: 'El ciclo de la preocupación',
      nodes: ['Incertidumbre', '«¿Y si…?»', 'Sensación de estar preparándome', 'Alivio momentáneo', 'Necesito preocuparme más'],
      caption: 'La preocupación da una falsa sensación de control. Posponerla y separar lo controlable cortan el ciclo.',
    },
    related: { practices: ['pajaros-en-el-cielo', 'respiracion-resonante'], articles: ['rumiacion', 'sueno-y-bienestar'] },
    references: [
      {
        citation: 'Borkovec, T. D., Wilkinson, L., Folensbee, R., & Lerman, C. (1983). Stimulus control applications to the treatment of worry. Behaviour Research and Therapy, 21(3), 247–251.',
        doi: '10.1016/0005-7967(83)90206-1',
      },
      {
        citation: 'McGowan, S. K., & Behar, E. (2013). A preliminary investigation of stimulus control training for worry: Effects on anxiety and insomnia. Behavior Modification, 37(1), 90–112.',
        doi: '10.1177/0145445512455661',
      },
      {
        citation: 'Eifert, G. H., & Heffner, M. (2003). The effects of acceptance versus control contexts on avoidance of panic-related symptoms. Journal of Behavior Therapy and Experimental Psychiatry, 34(3–4), 293–312.',
        doi: '10.1016/j.jbtep.2003.11.001',
      },
    ],
  },
  {
    id: 'sentido-y-valores',
    title: 'Sentido y valores',
    subtitle: 'Qué es tener sentido en la vida según la psicología, y por qué buscarlo no es lo mismo que tenerlo.',
    category: 'Psicología positiva',
    readingMin: 6,
    keyPoints: [
      'El sentido vital combina coherencia (entender la propia vida), propósito (dirección) y significado (que importa).',
      'Tener sentido se asocia con bienestar; buscarlo intensamente, a veces con malestar.',
      'Los valores se viven en acciones pequeñas, no sólo en grandes decisiones.',
    ],
    sections: [
      {
        heading: 'Tener y buscar',
        paragraphs: [
          'Michael Steger desarrolló un cuestionario que distingue la presencia de sentido («mi vida tiene un propósito claro») de la búsqueda de sentido («estoy buscando algo que haga que mi vida tenga sentido»). La presencia se asocia de forma consistente con más bienestar; la búsqueda, con más malestar cuando no va acompañada de presencia (Steger et al., 2006).',
          'Viktor Frankl, desde su experiencia en los campos de concentración, sostuvo que el sentido no se inventa sino que se descubre, a través de lo que hacemos, de lo que vivimos y de la actitud ante lo inevitable.',
        ],
      },
      {
        heading: 'De los valores a la acción',
        paragraphs: [
          'En la Terapia de Aceptación y Compromiso, los valores son direcciones elegidas que se expresan en acciones concretas. El sentido no espera a una gran decisión: aparece cuando lo que haces hoy está alineado con lo que te importa. La «Brújula de valores», la «Intención del día» y el registro «Acción con valores» trabajan este puente.',
        ],
      },
    ],
    related: { practices: ['brujula-valores', 'fortalezas'], articles: ['eudaimonia-y-hedonia', 'flexibilidad-psicologica'] },
    references: [
      {
        citation:
          'Steger, M. F., Frazier, P., Oishi, S., & Kaler, M. (2006). The Meaning in Life Questionnaire: Assessing the presence of and search for meaning in life. Journal of Counseling Psychology, 53(1), 80–93.',
        doi: '10.1037/0022-0167.53.1.80',
      },
      { citation: 'Frankl, V. E. (1946/2015). El hombre en busca de sentido. Herder.' },
    ],
  },
];
