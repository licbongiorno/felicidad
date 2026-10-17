import type { KidGuide } from './kids-guides';

/**
 * Guías para familias que atraviesan cambios grandes en casa: una enfermedad grave,
 * la salud mental de un adulto o la llegada de un hermano o hermana.
 */
export const KID_GUIDES_B: KidGuide[] = [
  {
    id: 'enfermedad-grave-en-la-familia',
    title: 'Cuando alguien de la familia está muy enfermo',
    subtitle: 'Cómo hablar de una enfermedad grave o una internación con tu hijo o hija, según la edad.',
    readingMin: 6,
    keyPoints: [
      'Los chicos se dan cuenta de que algo pasa. Una verdad simple les da menos miedo que el silencio.',
      'Usa palabras concretas, como «cáncer» o «internación», adaptadas a su edad.',
      'Muchos chicos piensan que tuvieron la culpa. Dile con claridad que no es así.',
      'Las rutinas, la escuela y el juego le dan seguridad mientras todo cambia.',
    ],
    sections: [
      {
        heading: 'Decir la verdad, de a poco',
        paragraphs: [
          'Es normal querer proteger a tu hijo o hija y no contarle nada. Pero los chicos notan las caras, los silencios y las idas al hospital. Si nadie les explica, suelen imaginar algo peor. Una información clara y adaptada a la edad les ayuda a adaptarse mejor (Visser y colaboradores, 2004).',
          'No hace falta contar todo de una vez. Empieza por lo básico: qué enfermedad es, qué van a hacer los médicos y qué va a cambiar en casa. Después, deja que pregunte. Si no sabes algo, puedes decir: «No lo sé todavía. Cuando sepa, te cuento».',
        ],
      },
      {
        heading: 'Palabras según la edad',
        paragraphs: [
          'De 0 a 3 años, lo que más importa es un adulto conocido que lo cuide y rutinas estables. Basta con frases cortas: «Mamá está en el hospital. La están cuidando. Yo estoy contigo».',
          'De 4 a 6 años, usa el nombre de la enfermedad y explica lo que se ve: «Papá tiene cáncer. Es una enfermedad seria. El remedio le hace caer el pelo». De 7 a 12 años, suelen querer saber cómo funciona el tratamiento. En la adolescencia, pueden querer más detalles y también un rato a solas para pensar.',
        ],
      },
      {
        heading: '«¿Fue por mí?»',
        paragraphs: [
          'Muchos chicos pequeños creen que sus pensamientos o sus enojos pueden causar cosas. Por eso a veces piensan que la enfermedad es su culpa. Otros temen que se contagie o que les pase a ellos.',
          'Dilo aunque no lo pregunte: «No es tu culpa. Nada de lo que pensaste o hiciste causó esta enfermedad». Si la enfermedad no se contagia, díselo también. Puede que necesite escucharlo muchas veces.',
        ],
      },
      {
        heading: 'Rutinas, escuela y formas de participar',
        paragraphs: [
          'Mantén lo que puedas de la vida de siempre: la escuela, los horarios, los amigos, el juego. Si otros adultos lo cuidan, cuéntale quién lo busca y cuándo. Avisa a la escuela lo que pasa, para que entiendan cambios en su ánimo o en sus notas.',
          'Muchos chicos se sienten mejor si pueden hacer algo. Pueden hacer un dibujo, grabar un mensaje o elegir una música. También visitar al familiar, si el equipo de salud lo permite. Que no quiera participar también está bien.',
          'La experiencia de cada chico es distinta. Algunos están tristes, otros enojados y otros parecen no sentir nada. Los adolescentes a veces cargan con tareas de la casa y se angustian en silencio (Osborn, 2007). Pregunta cómo está y no le pidas que haga de adulto.',
        ],
      },
    ],
    phrases: [
      '«La abuela tiene una enfermedad seria. Los médicos la están cuidando»',
      '«No es tu culpa. Nada de lo que pensaste o hiciste causó esto»',
      '«Puedes preguntarme lo que quieras. Si no sé, lo averiguamos»',
      '«Aunque las cosas cambien, siempre va a haber alguien que te cuide»',
    ],
    caveat: {
      title: 'Cuándo pedir ayuda',
      body: 'Consulta con su pediatra o con un profesional de salud mental si durante semanas no duerme, no come, deja de jugar o de ir a la escuela, o si tiene mucho miedo de separarse de ti. Muchos hospitales tienen equipos que acompañan a los hijos e hijas de pacientes. Si habla de querer morirse o de hacerse daño, busca ayuda ese mismo día; ante un peligro inmediato, llama al 911. La Línea 102 es gratuita y atiende situaciones que afectan los derechos de chicos y chicas.',
    },
    activities: ['como-me-siento', 'cajita-preocupaciones', 'mano-en-el-corazon', 'pedir-ayuda'],
    references: [
      {
        citation:
          'Visser, A., Huizinga, G. A., van der Graaf, W. T. A., Hoekstra, H. J., & Hoekstra-Weebers, J. E. H. M. (2004). The impact of parental cancer on children and the family: A review of the literature. Cancer Treatment Reviews, 30(8), 683–694.',
      },
      {
        citation:
          'Osborn, T. (2007). The psychosocial impact of parental cancer on children and adolescents: A systematic review. Psycho-Oncology, 16(2), 101–126.',
        doi: '10.1002/pon.1113',
      },
    ],
  },
  {
    id: 'cuando-un-adulto-de-la-casa-esta-mal',
    title: 'Cuando un adulto de la casa está mal',
    subtitle: 'Cómo hablar con los chicos de la depresión, la ansiedad o el tratamiento de alguien de la familia.',
    readingMin: 6,
    keyPoints: [
      'Los chicos notan cuando un adulto está mal. Explicarlo con calma les quita miedo.',
      'Hay dos mensajes clave: «no es tu culpa» y «no es tu trabajo arreglarlo».',
      'Otros adultos de confianza pueden sostener a tu hijo o hija mientras tanto.',
      'Cuidar la salud del adulto también es cuidar a los chicos.',
    ],
    sections: [
      {
        heading: 'Por qué conviene hablar',
        paragraphs: [
          'Cuando un adulto de la casa tiene depresión o ansiedad, los chicos ven cambios. Puede estar más cansado, más irritable o pasar mucho tiempo en la cama. Si nadie explica nada, muchos chicos creen que hicieron algo mal.',
          'La depresión de una madre o un padre se asocia con más dificultades en los hijos e hijas (Goodman y colaboradores, 2011). Pero eso no es un destino. Los programas que ayudan a la familia a hablar del tema reducen ese riesgo (Siegenthaler y colaboradores, 2012).',
        ],
      },
      {
        heading: 'Qué decir, según la edad',
        paragraphs: [
          'Habla de la enfermedad como de cualquier otra enfermedad. Tiene un nombre, se puede tratar y no es culpa de nadie. No hace falta dar detalles del tratamiento. Basta con decir que hay alguien que ayuda y que hay un plan.',
          'De 4 a 6 años, frases simples: «Papá está enfermo de tristeza. Por eso duerme mucho. Un doctor lo está ayudando». De 7 a 12 años, puedes nombrar la depresión o la ansiedad. Explica que afecta la energía y el humor. En la adolescencia, suelen querer entender más y pueden buscar información solos. Ofrece hablar y escucha lo que ya saben.',
        ],
      },
      {
        heading: 'No es tu culpa, no es tu trabajo',
        paragraphs: [
          'Algunos chicos intentan portarse perfecto para que el adulto se sienta mejor. Otros cuidan a sus hermanos o se ocupan de la casa. Es una carga muy pesada para un chico.',
          'Dile con claridad: «No es tu culpa. Y no es tu trabajo arreglarlo. De eso nos ocupamos los adultos». Mira si está tomando tareas que no le tocan y busca a otro adulto que las haga.',
        ],
      },
      {
        heading: 'Una red alrededor',
        paragraphs: [
          'Ayuda que tu hijo o hija tenga otros adultos de confianza. Puede ser un tío, una abuela o una docente. Dile a quién puede llamar si se preocupa. Mantener la escuela, el deporte y los amigos le da un lugar donde ser chico.',
          'Si tú eres el adulto que está mal, pedir ayuda es una forma de cuidar a tu familia. Seguir el tratamiento, dormir, moverse y hablar con alguien de confianza también cuentan. La evidencia sobre qué decir exactamente a cada edad es todavía limitada. Sí se sabe que la información clara y el apoyo de la familia protegen (Beardslee y colaboradores, 2003).',
        ],
      },
    ],
    phrases: [
      '«Mamá está enferma. Tiene una enfermedad que se llama depresión, y la están ayudando»',
      '«No es tu culpa. Y no es tu trabajo arreglarlo»',
      '«Si te preocupas, puedes hablar conmigo o con la tía»',
      '«Hoy tengo poca energía, pero te quiero igual que siempre»',
    ],
    caveat: {
      title: 'Cuándo pedir ayuda',
      body: 'Consulta con un profesional si tu hijo o hija está triste o con miedo durante semanas, si deja de jugar o de ir a la escuela, o si se ocupa del adulto todo el tiempo. Si el adulto habla de morirse o de hacerse daño, o si alguien de la casa corre peligro, llama al 911. La Línea 102 es gratuita y atiende situaciones que afectan los derechos de chicos y chicas.',
    },
    activities: ['como-me-siento', 'globo-de-preocupaciones', 'pedir-ayuda', 'mano-en-el-corazon'],
    references: [
      {
        citation:
          'Goodman, S. H., Rouse, M. H., Connell, A. M., Broth, M. R., Hall, C. M., & Heyward, D. (2011). Maternal depression and child psychopathology: A meta-analytic review. Clinical Child and Family Psychology Review, 14(1), 1–27.',
        doi: '10.1007/s10567-010-0080-1',
      },
      {
        citation:
          'Siegenthaler, E., Munder, T., & Egger, M. (2012). Effect of preventive interventions in mentally ill parents on the mental health of the offspring: Systematic review and meta-analysis. Journal of the American Academy of Child & Adolescent Psychiatry, 51(1), 8–17.',
        doi: '10.1016/j.jaac.2011.10.018',
      },
      {
        citation:
          'Beardslee, W. R., Gladstone, T. R. G., Wright, E. J., & Cooper, A. B. (2003). A family-based approach to the prevention of depressive symptoms in children at risk: Evidence of parental and child change. Pediatrics, 112(2), e119–e131.',
        doi: '10.1542/peds.112.2.e119',
      },
    ],
  },
  {
    id: 'llega-un-hermanito',
    title: 'Llega un hermanito o hermanita',
    subtitle: 'Cómo preparar al hermano o hermana mayor y acompañar los primeros meses.',
    readingMin: 5,
    keyPoints: [
      'Los celos y los cambios de conducta son normales cuando llega un hermano o hermana.',
      'Prepararle antes, con palabras de su edad, hace la llegada más fácil.',
      'Un rato especial a solas con tu hijo o hija mayor vale mucho.',
      'Evita culpar al bebé: «no podemos porque el bebé…» suma enojo.',
    ],
    sections: [
      {
        heading: 'Un cambio grande para el mayor',
        paragraphs: [
          'La llegada de un hermano o hermana es una alegría y también una pérdida. Tu hijo o hija mayor deja de tener toda la atención. Ve que el tiempo y la atención de los adultos se reparten. Es esperable que sienta celos, tristeza o enojo, y también cariño.',
          'Una revisión de muchos estudios lo confirma. Después del nacimiento, muchos chicos tienen más berrinches, más apego o más problemas de sueño. En la mayoría de los casos esto baja con los meses (Volling, 2012). Los estudios son sobre todo de nacimientos. Sobre adopción o familias ensambladas hay menos evidencia.',
        ],
      },
      {
        heading: 'Prepararle antes',
        paragraphs: [
          'Cuéntale con tiempo, pero no demasiado antes si es muy pequeño. De 0 a 3 años, sirven los libros con dibujos y jugar con un muñeco bebé. De 4 a 6 años, puede ayudar a elegir algo para el bebé. De 7 a 12 años y en la adolescencia, puedes hablar de lo que cambia y preguntarle qué le preocupa.',
          'Si llega por adopción o por una familia ensamblada, explica quién es. Cuenta también cómo va a ser la convivencia. Si el nuevo hermano o hermana tiene su edad, denles tiempo para conocerse. Avisa los cambios de cuarto o de rutina antes de que pasen.',
        ],
      },
      {
        heading: 'Las regresiones son esperables',
        paragraphs: [
          'Es común que el hermano o hermana mayor vuelva a pedir pañales, la mamadera o hablar como bebé. No es un capricho. Es su forma de pedir cuidado. Responde con calma y sin burla. Suele pasar solo cuando se siente seguro.',
          'Los celos no se quitan con un reto. Ponle nombre a lo que siente: «A veces te enoja que el bebé llore tanto. Es normal». Todas las emociones se aceptan. Lo que no se permite es lastimar al bebé.',
        ],
      },
      {
        heading: 'Tiempo especial y nada de culpas',
        paragraphs: [
          'Busca un rato corto a solas con tu hijo o hija mayor cada día, aunque sean diez minutos. Que elija qué hacer. Puedes decir: «Este rato es solo para nosotros».',
          'Cuida cómo hablas del bebé. Frases como «no hagas ruido que duerme el bebé» todo el tiempo hacen que el bebé parezca el culpable. Prueba con otras: «Ahora le doy de comer, en cinco minutos te leo». También ayuda hablar del bebé como una persona: «Mira, le gusta tu voz». En un estudio clásico, las familias que hablaban así tenían hermanos más cercanos después (Dunn y Kendrick, 1982).',
        ],
      },
    ],
    phrases: [
      '«Te quiero igual que siempre. El amor no se reparte, se agranda»',
      '«A veces es difícil tener un hermano. Puedes contarme cómo te sientes»',
      '«Este rato es solo para ti y para mí»',
      '«Mira cómo te mira. Ya te conoce»',
    ],
    caveat: {
      title: 'Cuándo consultar',
      body: 'Consulta con su pediatra o con un profesional si los cambios de conducta siguen muy fuertes después de varios meses, si intenta lastimar al bebé con frecuencia, o si deja de comer, de dormir o de jugar. Si alguien corre peligro inmediato, llama al 911.',
    },
    activities: ['como-me-siento', 'superpoder-amable', 'esperar-mi-turno', 'mano-en-el-corazon'],
    references: [
      {
        citation:
          'Volling, B. L. (2012). Family transitions following the birth of a sibling: An empirical review of changes in the firstborn\'s adjustment. Psychological Bulletin, 138(3), 497–528.',
        doi: '10.1037/a0026921',
      },
      {
        citation: 'Dunn, J., & Kendrick, C. (1982). Siblings: Love, envy, and understanding. Harvard University Press.',
      },
    ],
  },
];
