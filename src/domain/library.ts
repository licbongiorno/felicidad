import type { Reference } from './types';
import { EXTRA_ARTICLES } from './library-extra';
import { MORE_ARTICLES } from './library-more';
import { SKILL_ARTICLES } from './library-skills';
import { PROGRAM_ARTICLES } from './library-programs';
import { EXISTENTIAL_ARTICLES } from './library-existential';
import { PACK_ARTICLES } from './packs';

/**
 * Biblioteca: fundamentos teóricos en lenguaje claro.
 * Regla editorial: cada afirmación empírica tiene referencia; donde la evidencia es
 * débil o discutida, se dice. Se incluyen críticas y límites (Van Dam et al., 2018).
 */

export type ArticleCategory =
  | 'Fundamentos'
  | 'Neurociencia contemplativa'
  | 'Psicología positiva'
  | 'Terapias contextuales'
  | 'Humanismo y existencialismo'
  | 'Hábitos y cuerpo'
  | 'Relaciones'
  | 'Terapias breves e integrativas'
  | 'Etapas de la vida'
  | 'Salud y trabajo'
  | 'Autoconocimiento y patrones'
  | 'Uso responsable';

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: ArticleCategory;
  readingMin: number;
  keyPoints: string[];
  sections: { heading: string; paragraphs: string[] }[];
  /** Recuadro opcional para mitos, matices o críticas. */
  caveat?: { title: string; body: string };
  /** Diagrama de un ciclo clínico (nodos en orden; el último vuelve al primero). */
  diagram?: { title: string; nodes: string[]; caption: string };
  related: { practices?: string[]; articles?: string[] };
  references: Reference[];
}

const BASE_ARTICLES: Article[] = [
  {
    id: 'eudaimonia-y-hedonia',
    title: 'Eudaimonía y hedonia',
    subtitle: 'Dos maneras de entender el bienestar, y por qué esta app apuesta por la primera sin renunciar a la segunda.',
    category: 'Fundamentos',
    readingMin: 6,
    keyPoints: [
      'El bienestar hedónico es sentirse bien; el eudaimónico, vivir bien: con sentido, crecimiento y coherencia con los propios valores.',
      'Ambos están relacionados pero no son lo mismo, y se cultivan con herramientas distintas.',
      'La felicidad entendida como «manera de ser» (Ricard) es más estable que la que depende de circunstancias.',
    ],
    sections: [
      {
        heading: 'Dos tradiciones',
        paragraphs: [
          'Para Aristóteles, eudaimonía no era un estado de ánimo agradable, sino la actividad del alma conforme a la virtud a lo largo de una vida completa. La tradición hedónica, desde Epicuro hasta la psicología contemporánea del bienestar subjetivo, pone el foco en la presencia de placer y la ausencia de dolor.',
          'Ryan y Deci (2001) sistematizaron esta distinción en psicología: el bienestar hedónico se mide como satisfacción vital y afecto positivo; el eudaimónico, como autonomía, propósito, crecimiento personal, relaciones positivas, autoaceptación y dominio del entorno, las seis dimensiones del modelo de Carol Ryff (1989).',
        ],
      },
      {
        heading: 'Por qué importa la diferencia',
        paragraphs: [
          'Las actividades que más bienestar eudaimónico producen (cuidar a alguien, aprender algo difícil, comprometerse con una causa) no siempre son las más placenteras en el momento. Una vida organizada sólo alrededor del placer inmediato tiende a la adaptación hedónica: lo agradable deja de serlo con la repetición.',
          'Huta y Waterman (2014) muestran que ambos tipos de bienestar se correlacionan pero predicen cosas distintas: la orientación hedónica se asocia más a afecto positivo inmediato; la eudaimónica, a sentido, elevación y percepción de que la propia vida vale la pena.',
        ],
      },
      {
        heading: 'La felicidad como manera de ser',
        paragraphs: [
          'Matthieu Ricard define la felicidad como «un estado de plenitud que impregna todos los estados emocionales» más que como una sucesión de experiencias agradables. Desde esta perspectiva, la felicidad es una habilidad: se entrena a través de la transformación de la mente, igual que se entrena un músculo o un idioma.',
          'Esta app combina ambos enfoques: las prácticas de saboreo y gratitud trabajan el polo hedónico; las de valores, compasión e insight, el eudaimónico.',
        ],
      },
    ],
    related: { practices: ['brujula-valores', 'saboreo'], articles: ['plasticidad-del-bienestar'] },
    references: [
      {
        citation:
          'Ryan, R. M., & Deci, E. L. (2001). On happiness and human potentials: A review of research on hedonic and eudaimonic well-being. Annual Review of Psychology, 52, 141–166.',
        doi: '10.1146/annurev.psych.52.1.141',
      },
      {
        citation:
          'Ryff, C. D. (1989). Happiness is everything, or is it? Explorations on the meaning of psychological well-being. Journal of Personality and Social Psychology, 57(6), 1069–1081.',
        doi: '10.1037/0022-3514.57.6.1069',
      },
      {
        citation:
          'Huta, V., & Waterman, A. S. (2014). Eudaimonia and its distinction from hedonia: Developing a classification and terminology for understanding conceptual and operational definitions. Journal of Happiness Studies, 15(6), 1425–1456.',
        doi: '10.1007/s10902-013-9485-0',
      },
      { citation: 'Ricard, M. (2005). En defensa de la felicidad. Urano.' },
    ],
  },
  {
    id: 'plasticidad-del-bienestar',
    title: 'La plasticidad del bienestar',
    subtitle: 'El marco de Davidson: conciencia, conexión, insight y propósito como habilidades entrenables.',
    category: 'Neurociencia contemplativa',
    readingMin: 8,
    keyPoints: [
      'El cerebro cambia con la experiencia repetida; el bienestar puede tratarse como una habilidad.',
      'Davidson y colaboradores proponen cuatro pilares entrenables: conciencia, conexión, insight y propósito.',
      'La evidencia neurocientífica es prometedora pero más modesta de lo que sugieren los titulares.',
    ],
    sections: [
      {
        heading: 'De la neuroplasticidad al entrenamiento',
        paragraphs: [
          'La neuroplasticidad, la capacidad del sistema nervioso de reorganizarse en respuesta a la experiencia, ocurre lo queramos o no: el estrés crónico, por ejemplo, la orienta en direcciones perjudiciales. Davidson y McEwen (2012) propusieron que intervenciones deliberadas pueden orientarla en sentido contrario, hacia la resiliencia y el bienestar.',
          'Es lo que Ricard y Davidson llaman neuroplasticidad autodirigida: no podemos elegir directamente qué neuronas cambian, pero sí qué estados mentales repetimos, y la repetición deja huella.',
        ],
      },
      {
        heading: 'Cuatro pilares',
        paragraphs: [
          'Dahl, Wilson-Mendenhall y Davidson (2020) proponen un marco con cuatro dimensiones del bienestar, cada una asociada a formas específicas de entrenamiento:',
          'Conciencia (awareness): atención y meta-conciencia, saber qué hace tu mente mientras lo hace. Se entrena con prácticas atencionales.',
          'Conexión: aprecio, amabilidad y compasión hacia uno mismo y los demás. Se entrena con prácticas constructivas como el amor altruista.',
          'Insight: comprensión de cómo los pensamientos y relatos sobre uno mismo construyen la experiencia. Se entrena con prácticas deconstructivas como la defusión.',
          'Propósito: claridad sobre lo que valoras y la capacidad de orientar la acción hacia ello. Se entrena con clarificación de valores.',
        ],
      },
      {
        heading: 'Cómo se organiza esta app',
        paragraphs: [
          'El Gimnasio sigue las tres familias de práctica (atencional, constructiva, deconstructiva) de Dahl, Lutz y Davidson (2015), y el programa «Fundamentos» recorre los cuatro pilares en cuatro semanas.',
        ],
      },
    ],
    caveat: {
      title: 'Cuidado con los titulares',
      body: 'Van Dam y colaboradores (2018) advirtieron que la investigación en mindfulness sufre de definiciones imprecisas, muestras pequeñas y sobreinterpretación de imágenes cerebrales. Que una práctica «cambie el cerebro» no dice, por sí solo, si mejora la vida. Esta app prioriza la evidencia conductual y clínica sobre la neuroimagen.',
    },
    related: { practices: ['atencion-respiracion', 'amor-altruista', 'pajaros-en-el-cielo', 'brujula-valores'], articles: ['familias-de-practica'] },
    references: [
      {
        citation:
          'Dahl, C. J., Wilson-Mendenhall, C. D., & Davidson, R. J. (2020). The plasticity of well-being: A training-based framework for the cultivation of human flourishing. Proceedings of the National Academy of Sciences, 117(51), 32197–32206.',
        doi: '10.1073/pnas.2014859117',
      },
      {
        citation:
          'Davidson, R. J., & McEwen, B. S. (2012). Social influences on neuroplasticity: Stress and interventions to promote well-being. Nature Neuroscience, 15(5), 689–695.',
        doi: '10.1038/nn.3093',
      },
      {
        citation:
          'Van Dam, N. T., van Vugt, M. K., Vago, D. R., et al. (2018). Mind the hype: A critical evaluation and prescriptive agenda for research on mindfulness and meditation. Perspectives on Psychological Science, 13(1), 36–61.',
        doi: '10.1177/1745691617709589',
      },
    ],
  },
  {
    id: 'familias-de-practica',
    title: 'Tres familias de meditación',
    subtitle: 'Atencional, constructiva y deconstructiva: qué entrena cada una y por qué conviene alternarlas.',
    category: 'Neurociencia contemplativa',
    readingMin: 5,
    keyPoints: [
      '«Meditación» no es una sola cosa: distintas prácticas entrenan procesos distintos.',
      'Las atencionales regulan la atención; las constructivas cultivan cualidades; las deconstructivas generan comprensión.',
      'Un entrenamiento equilibrado incluye las tres.',
    ],
    sections: [
      {
        heading: 'Más allá de «meditar»',
        paragraphs: [
          'Decir que alguien «medita» es tan poco informativo como decir que «hace deporte». Lutz y colaboradores (2008) distinguieron primero entre atención focalizada y monitoreo abierto; Dahl, Lutz y Davidson (2015) ampliaron la clasificación a tres familias según el mecanismo cognitivo principal.',
        ],
      },
      {
        heading: 'Las tres familias',
        paragraphs: [
          'Atencional: entrena la capacidad de dirigir, sostener y monitorear la atención, y de detectar cuándo la mente divaga. Ejemplos: atención en la respiración, escaneo corporal.',
          'Constructiva: cultiva deliberadamente patrones cognitivos y afectivos valiosos, como la benevolencia, la compasión, la gratitud o la perspectiva sobre los propios valores. Ejemplos: amor altruista, tres cosas buenas.',
          'Deconstructiva: usa la autoindagación para desarmar patrones mentales automáticos, en especial la identificación con pensamientos y con un yo narrativo rígido. Ejemplos: pájaros en el cielo, anotación mental.',
        ],
      },
      {
        heading: 'En la práctica',
        paragraphs: [
          'Las prácticas atencionales suelen ser la base: sin cierta estabilidad atencional, las constructivas se convierten en pensamiento discursivo y las deconstructivas en confusión. Una semana equilibrada podría incluir dos o tres sesiones de cada familia. El panel de esta app muestra tu dosis por habilidad precisamente para hacer visible ese equilibrio.',
        ],
      },
    ],
    related: { practices: ['atencion-respiracion', 'amor-altruista', 'anotacion-mental'], articles: ['plasticidad-del-bienestar'] },
    references: [
      {
        citation:
          'Dahl, C. J., Lutz, A., & Davidson, R. J. (2015). Reconstructing and deconstructing the self: Cognitive mechanisms in meditation practice. Trends in Cognitive Sciences, 19(9), 515–523.',
        doi: '10.1016/j.tics.2015.07.001',
      },
      {
        citation:
          'Lutz, A., Slagter, H. A., Dunne, J. D., & Davidson, R. J. (2008). Attention regulation and monitoring in meditation. Trends in Cognitive Sciences, 12(4), 163–169.',
        doi: '10.1016/j.tics.2008.01.005',
      },
    ],
  },
  {
    id: 'antidotos-y-regulacion',
    title: 'Antídotos y regulación emocional',
    subtitle: 'La lógica contemplativa de los antídotos y su traducción a la ciencia de la emoción.',
    category: 'Fundamentos',
    readingMin: 7,
    keyPoints: [
      'La tradición contemplativa propone que estados opuestos no pueden coexistir en el mismo instante respecto del mismo objeto.',
      'La psicología contemporánea respalda mecanismos afines: etiquetado afectivo, autodistanciamiento y efecto de «deshacer» de las emociones positivas.',
      'Los antídotos funcionan mejor cuando se entrenan en calma, antes de necesitarlos.',
    ],
    sections: [
      {
        heading: 'La propuesta de Ricard',
        paragraphs: [
          'En la psicología budista, las emociones aflictivas (ira, envidia, apego, orgullo, confusión) no son «malas» en un sentido moral, sino estados que distorsionan la percepción y generan sufrimiento. Para cada una existe un antídoto: un estado mental que, cultivado, la desplaza. La benevolencia frente a la ira, el regocijo frente a la envidia, la impermanencia frente al apego.',
          'Ricard insiste en que no se trata de reprimir. Reprimir es como tapar una olla a presión; el antídoto es más bien apagar el fuego, cambiando el estado mental desde dentro.',
        ],
      },
      {
        heading: 'Lo que dice la ciencia de la emoción',
        paragraphs: [
          'El modelo de procesos de James Gross (1998) describe cinco momentos en los que se puede regular una emoción: selección de la situación, modificación de la situación, despliegue atencional, cambio cognitivo y modulación de la respuesta. Los antídotos operan sobre todo en los momentos atencional y cognitivo, que son los más eficaces y los de menor costo.',
          'Tres hallazgos apoyan la lógica de los antídotos. Poner nombre a una emoción reduce la reactividad de la amígdala (Lieberman et al., 2007). Observar la experiencia desde una perspectiva distanciada reduce su intensidad (Kross & Ayduk, 2017). Y las emociones positivas aceleran la recuperación fisiológica tras una emoción negativa (Fredrickson & Levenson, 1998).',
        ],
      },
      {
        heading: 'Entrenar antes de necesitar',
        paragraphs: [
          'Un antídoto que nunca se ha practicado es difícil de generar en medio de la tormenta. Por eso cada antídoto de esta app sugiere una práctica de entrenamiento: cultivar la benevolencia en calma la vuelve accesible cuando aparece la ira.',
        ],
      },
    ],
    caveat: {
      title: 'Lo que no sabemos',
      body: 'La afirmación de que dos estados opuestos «no pueden coexistir» es una tesis fenomenológica de la tradición, no un hallazgo empírico. Los mecanismos citados son análogos plausibles, pero no se ha probado directamente el modelo de antídotos como sistema.',
    },
    related: { practices: ['amor-altruista', 'pausa-autocompasion'], articles: ['rumiacion'] },
    references: [
      {
        citation:
          'Gross, J. J. (1998). The emerging field of emotion regulation: An integrative review. Review of General Psychology, 2(3), 271–299.',
        doi: '10.1037/1089-2680.2.3.271',
      },
      {
        citation:
          'Lieberman, M. D., Eisenberger, N. I., Crockett, M. J., et al. (2007). Putting feelings into words: Affect labeling disrupts amygdala activity in response to affective stimuli. Psychological Science, 18(5), 421–428.',
        doi: '10.1111/j.1467-9280.2007.01916.x',
      },
      {
        citation:
          'Fredrickson, B. L., & Levenson, R. W. (1998). Positive emotions speed recovery from the cardiovascular sequelae of negative emotions. Cognition and Emotion, 12(2), 191–220.',
        doi: '10.1080/026999398379718',
      },
      {
        citation:
          'Kross, E., & Ayduk, O. (2017). Self-distancing: Theory, research, and current directions. Advances in Experimental Social Psychology, 55, 81–136.',
        doi: '10.1016/bs.aesp.2016.10.002',
      },
    ],
  },
  {
    id: 'flexibilidad-psicologica',
    title: 'Flexibilidad psicológica',
    subtitle: 'El modelo de la Terapia de Aceptación y Compromiso en seis procesos.',
    category: 'Terapias contextuales',
    readingMin: 7,
    keyPoints: [
      'Flexibilidad psicológica: estar en contacto con el presente y actuar según los propios valores, incluso con malestar.',
      'Seis procesos: aceptación, defusión, presente, yo como contexto, valores y acción comprometida.',
      'ACT tiene evidencia metaanalítica en ansiedad, depresión, dolor crónico y adicciones.',
    ],
    sections: [
      {
        heading: 'El problema de la evitación',
        paragraphs: [
          'Steven Hayes y colaboradores parten de una observación: buena parte del sufrimiento no viene del dolor en sí, sino de la lucha por evitarlo. Evitar pensamientos, emociones y sensaciones desagradables funciona a corto plazo, pero a largo plazo estrecha la vida: dejamos de hacer lo que importa para no sentir lo que duele.',
        ],
      },
      {
        heading: 'Seis procesos',
        paragraphs: [
          'Aceptación: abrirse a la experiencia interna tal como es, sin luchar contra ella.',
          'Defusión: ver los pensamientos como lo que son (palabras e imágenes) y no como lo que dicen ser.',
          'Contacto con el presente: atención flexible al aquí y ahora.',
          'Yo como contexto: la perspectiva desde la que se observan los contenidos mentales, distinta de ellos.',
          'Valores: direcciones vitales elegidas libremente.',
          'Acción comprometida: pasos concretos en la dirección de los valores.',
        ],
      },
      {
        heading: 'En esta app',
        paragraphs: [
          'La práctica «Pájaros en el cielo» y el registro de defusión del Diario trabajan la defusión. La «Brújula de valores» y el registro «Acción con valores» trabajan valores y acción comprometida. El antídoto para la ansiedad usa la aceptación.',
        ],
      },
    ],
    related: { practices: ['pajaros-en-el-cielo', 'brujula-valores'], articles: ['rumiacion'] },
    references: [
      {
        citation:
          'Hayes, S. C., Luoma, J. B., Bond, F. W., Masuda, A., & Lillis, J. (2006). Acceptance and commitment therapy: Model, processes and outcomes. Behaviour Research and Therapy, 44(1), 1–25.',
        doi: '10.1016/j.brat.2005.06.006',
      },
      {
        citation:
          'A-Tjak, J. G. L., Davis, M. L., Morina, N., et al. (2015). A meta-analysis of the efficacy of acceptance and commitment therapy for clinically relevant mental and physical health problems. Psychotherapy and Psychosomatics, 84(1), 30–36.',
        doi: '10.1159/000365764',
      },
    ],
  },
  {
    id: 'perma-y-psicologia-positiva',
    title: 'PERMA y psicología positiva',
    subtitle: 'Qué propone el modelo de Seligman, qué funciona de verdad y qué mitos conviene abandonar.',
    category: 'Psicología positiva',
    readingMin: 7,
    keyPoints: [
      'PERMA: emociones positivas, compromiso, relaciones, sentido y logro.',
      'Las intervenciones de psicología positiva tienen efectos reales pero pequeños, menores de lo que sugirieron los primeros estudios.',
      'El famoso «40 % de la felicidad depende de ti» no se sostiene.',
    ],
    sections: [
      {
        heading: 'El modelo',
        paragraphs: [
          'En «Flourish» (2011), Martin Seligman propuso que el bienestar no es una sola cosa, sino cinco elementos medibles por separado: Positive emotions (emociones positivas), Engagement (compromiso o flow), Relationships (relaciones), Meaning (sentido) y Accomplishment (logro). Ninguno basta por sí solo; cada uno se persigue por sí mismo.',
          'El registro diario de esta app incluye cinco ítems orientativos inspirados en PERMA. No son el instrumento validado (el PERMA-Profiler de Butler y Kern), pero sirven para observar tendencias propias.',
        ],
      },
      {
        heading: 'Qué funciona',
        paragraphs: [
          'Un metaanálisis de Bolier y colaboradores (2013) encontró efectos pequeños pero significativos de las intervenciones de psicología positiva sobre el bienestar y la depresión. Un reanálisis posterior de White, Uttl y Holder (2019), corrigiendo el sesgo de publicación y los estudios pequeños, encontró efectos aún menores.',
          'La lectura honesta: estas prácticas son útiles, baratas y de bajo riesgo, pero no son una cura. Funcionan mejor sostenidas en el tiempo, elegidas por la persona (no impuestas) y combinadas con otras intervenciones cuando hay sufrimiento clínico.',
        ],
      },
    ],
    caveat: {
      title: 'El mito del 40 %',
      body: 'Un gráfico muy difundido afirma que el 50 % de la felicidad es genético, el 10 % depende de las circunstancias y el 40 % de nuestras actividades intencionales. Brown y Rohrer (2020) mostraron que esas cifras no se derivan de los datos en que dicen basarse. La felicidad sí puede cultivarse, pero no sabemos en qué proporción, y probablemente varía de persona a persona.',
    },
    related: { practices: ['tres-cosas-buenas', 'saboreo', 'fortalezas'], articles: ['eudaimonia-y-hedonia', 'medir-tu-progreso'] },
    references: [
      { citation: 'Seligman, M. E. P. (2011). Flourish: A visionary new understanding of happiness and well-being. Free Press.' },
      {
        citation:
          'Bolier, L., Haverman, M., Westerhof, G. J., et al. (2013). Positive psychology interventions: A meta-analysis of randomized controlled studies. BMC Public Health, 13, 119.',
        doi: '10.1186/1471-2458-13-119',
      },
      {
        citation:
          'White, C. A., Uttl, B., & Holder, M. D. (2019). Meta-analyses of positive psychology interventions: The effects are much smaller than previously reported. PLoS ONE, 14(5), e0216588.',
        doi: '10.1371/journal.pone.0216588',
      },
      {
        citation:
          'Brown, N. J. L., & Rohrer, J. M. (2020). Easy as (happiness) pie? A critical evaluation of a popular model of the determinants of well-being. Journal of Happiness Studies, 21, 1285–1301.',
        doi: '10.1007/s10902-019-00128-4',
      },
    ],
  },
  {
    id: 'rumiacion',
    title: 'Rumiación: cuando pensar no ayuda',
    subtitle: 'Por qué darle vueltas a un problema suele empeorarlo, y cómo salir del bucle.',
    category: 'Terapias contextuales',
    readingMin: 6,
    keyPoints: [
      'La rumiación es pensamiento repetitivo, pasivo y centrado en el «por qué».',
      'Predice el inicio y la duración de episodios depresivos y ansiosos.',
      'Salir de ella requiere cambiar el modo de pensar, no sólo el contenido.',
    ],
    sections: [
      {
        heading: 'Rumiar no es reflexionar',
        paragraphs: [
          'Susan Nolen-Hoeksema mostró que las personas que responden al malestar dándole vueltas a sus causas y consecuencias tienen más probabilidad de desarrollar depresión y de que ésta dure más. La rumiación se siente como resolver problemas, pero rara vez lleva a una solución: mantiene la atención fija en lo que está mal.',
          'Watkins (2008) aclaró que no todo pensamiento repetitivo es dañino. La diferencia clave está en el nivel de abstracción: preguntas abstractas y evaluativas («¿por qué soy así?») mantienen el malestar; preguntas concretas y orientadas al proceso («¿cómo pasó exactamente? ¿qué puedo hacer?») facilitan la resolución.',
        ],
      },
      {
        heading: 'Salidas',
        paragraphs: [
          'Defusión: notar «estoy rumiando» y tratar el bucle como un evento mental, no como un análisis necesario.',
          'Concreción: pasar del «por qué» al «cómo» y al «qué sigue».',
          'Cambio de foco: atención al cuerpo y a los sentidos, o una actividad que absorba.',
          'Perspectiva: las cartas filosóficas de esta app están diseñadas para introducir distancia desde una voz ajena.',
          'Posponer: decidir conscientemente pensar en el tema a una hora fija, y no antes.',
        ],
      },
    ],
    diagram: {
      title: 'El bucle de la rumiación',
      nodes: ['Malestar', '«¿Por qué me pasa esto?»', 'Más análisis abstracto', 'Más malestar y menos acción', 'Confirmación: «nada cambia»'],
      caption: 'Pasar del «por qué» al «cómo» y tomar distancia del pensamiento son las dos salidas con más evidencia.',
    },
    related: { practices: ['pajaros-en-el-cielo', 'anotacion-mental'], articles: ['flexibilidad-psicologica'] },
    references: [
      {
        citation:
          'Nolen-Hoeksema, S., Wisco, B. E., & Lyubomirsky, S. (2008). Rethinking rumination. Perspectives on Psychological Science, 3(5), 400–424.',
        doi: '10.1111/j.1745-6924.2008.00088.x',
      },
      {
        citation: 'Watkins, E. R. (2008). Constructive and unconstructive repetitive thought. Psychological Bulletin, 134(2), 163–206.',
        doi: '10.1037/0033-2909.134.2.163',
      },
    ],
  },
  {
    id: 'medir-tu-progreso',
    title: 'Cómo leer tu propio progreso',
    subtitle: 'Qué miden los números del panel, qué no miden y cómo evitar engañarte con ellos.',
    category: 'Uso responsable',
    readingMin: 5,
    keyPoints: [
      'El panel muestra dosis (cuánto practicas), no habilidad (cuánto has cambiado).',
      'Las comparaciones entre días con y sin práctica son correlaciones, no causas.',
      'Las tendencias de varias semanas son más fiables que cualquier día aislado.',
    ],
    sections: [
      {
        heading: 'Dosis no es efecto',
        paragraphs: [
          'Contar minutos de práctica es fácil; medir cambios en atención o compasión, no. Por eso el panel muestra exposición y no «niveles». Más práctica predice, en promedio, más cambio, pero la relación varía mucho entre personas.',
        ],
      },
      {
        heading: 'Trampas habituales',
        paragraphs: [
          'Regresión a la media: si registras tu ánimo cuando estás peor, es probable que el siguiente registro sea mejor, practiques o no. Por eso el antídoto mide antes y después en el mismo momento, pero aun así una parte del cambio se debe al simple paso del tiempo.',
          'Causalidad inversa: los días con práctica pueden mostrar mejor ánimo porque practicas más cuando ya estás mejor, no necesariamente al revés.',
          'Expectativas: saber que «debería» sentirte mejor tras practicar puede sesgar tu respuesta. Responde con lo que notas, no con lo que esperas.',
        ],
      },
      {
        heading: 'Cómo usarlo bien',
        paragraphs: [
          'Mira tendencias de tres o cuatro semanas. Úsalo para descubrir qué te sirve a ti (qué antídoto, qué familia de práctica, qué hora del día) más que para evaluarte. Y si lo hablas con tu terapeuta, los datos se vuelven mucho más útiles.',
        ],
      },
    ],
    related: { articles: ['perma-y-psicologia-positiva'] },
    references: [
      {
        citation:
          'Van Dam, N. T., van Vugt, M. K., Vago, D. R., et al. (2018). Mind the hype: A critical evaluation and prescriptive agenda for research on mindfulness and meditation. Perspectives on Psychological Science, 13(1), 36–61.',
        doi: '10.1177/1745691617709589',
      },
    ],
  },
  {
    id: 'practica-segura',
    title: 'Práctica segura y cuándo pedir ayuda',
    subtitle: 'La meditación también tiene efectos adversos. Conocerlos es parte de practicar bien.',
    category: 'Uso responsable',
    readingMin: 5,
    keyPoints: [
      'Alrededor de 8 % de quienes meditan reportan algún efecto adverso, en su mayoría leve y transitorio.',
      'La ansiedad y la depresión son los más frecuentes; en personas vulnerables pueden aparecer experiencias disociativas.',
      'Bajar la intensidad, anclar la atención fuera y consultar son respuestas adecuadas.',
    ],
    sections: [
      {
        heading: 'Lo que dice la evidencia',
        paragraphs: [
          'Una revisión sistemática de Farias y colaboradores (2020), con más de 80 estudios, estimó que alrededor del 8 % de los participantes experimentó algún efecto adverso durante o después de la meditación. Los más comunes fueron ansiedad y síntomas depresivos; menos frecuentes, alteraciones de la percepción o experiencias disociativas.',
          'Britton y colaboradores (2021) encontraron que, en programas de mindfulness, la mayoría de estos efectos fueron transitorios, pero una minoría tuvo impacto en el funcionamiento durante más tiempo.',
        ],
      },
      {
        heading: 'Señales para ajustar',
        paragraphs: [
          'Si una práctica te deja con más agitación que al empezar de forma repetida, si aparecen recuerdos intrusivos, sensación de irrealidad o desconexión del cuerpo, o si el sueño empeora: reduce la duración, mantén los ojos abiertos, elige prácticas con ancla externa (sonidos, contacto de los pies) o constructivas, y coméntalo con un profesional.',
        ],
      },
      {
        heading: 'Cuándo pedir ayuda',
        paragraphs: [
          'Si tienes pensamientos de hacerte daño o de no querer vivir, si el malestar dura semanas o te impide funcionar, o si estás atravesando una crisis, esta app no es suficiente. Busca a tu profesional de referencia o a los servicios de emergencia de tu zona.',
        ],
      },
    ],
    related: { practices: ['escaneo-corporal', 'respiracion-resonante'], articles: ['medir-tu-progreso'] },
    references: [
      {
        citation:
          'Farias, M., Maraldi, E., Wallenkampf, K. C., & Lucchetti, G. (2020). Adverse events in meditation practices and meditation-based therapies: A systematic review. Acta Psychiatrica Scandinavica, 142(5), 374–393.',
        doi: '10.1111/acps.13225',
      },
      {
        citation:
          'Britton, W. B., Lindahl, J. R., Cooper, D. J., Canby, N. K., & Palitsky, R. (2021). Defining and measuring meditation-related adverse effects in mindfulness-based programs. Clinical Psychological Science, 9(6), 1185–1204.',
        doi: '10.1177/2167702621996340',
      },
    ],
  },
];

export const ARTICLES: Article[] = [...BASE_ARTICLES, ...EXTRA_ARTICLES, ...MORE_ARTICLES, ...SKILL_ARTICLES, ...PROGRAM_ARTICLES, ...EXISTENTIAL_ARTICLES, ...PACK_ARTICLES];

export const ARTICLE_BY_ID: Record<string, Article> = Object.fromEntries(ARTICLES.map((a) => [a.id, a]));
