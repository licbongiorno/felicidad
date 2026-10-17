import type { KidGuide } from './kids-guides';

/**
 * Guías para familias: sueño, cuidado del propio cuerpo y mudanzas o migración.
 */
export const KID_GUIDES_C: KidGuide[] = [
  {
    id: 'dormir-mejor',
    title: 'Dormir mejor en familia',
    subtitle: 'Cuántas horas necesita según la edad, rutinas, pantallas y miedos de la noche.',
    readingMin: 6,
    keyPoints: [
      'Las horas de sueño que necesita cambian mucho con la edad.',
      'Una rutina corta, tranquila y siempre igual ayuda más que cualquier truco.',
      'Las pantallas cerca de la hora de dormir suelen quitar sueño.',
      'Las pesadillas y los terrores nocturnos no son lo mismo y se acompañan distinto.',
    ],
    sections: [
      {
        heading: 'Cuánto sueño necesita',
        paragraphs: [
          'La Academia Americana de Medicina del Sueño da estas horas por día, con siestas incluidas (Paruthi y colaboradores, 2016). De 1 a 2 años, de 11 a 14 horas. De 3 a 5 años, de 10 a 13 horas. De 6 a 12 años, de 9 a 12 horas. En la adolescencia, de 8 a 10 horas.',
          'Son rangos, no metas exactas. Mira más bien cómo está de día. Si se despierta de buen humor y rinde bien, es probable que duerma lo que necesita.',
        ],
      },
      {
        heading: 'Una rutina para ir a dormir',
        paragraphs: [
          'Una rutina es una serie de pasos que se repiten cada noche. Por ejemplo, baño, pijama, dientes, un cuento y luz baja. Con los años cambian los pasos, pero sirve igual. Las rutinas regulares mejoran el sueño de los más chicos (Mindell y colaboradores, 2006).',
          'Trata de que dure entre 20 y 30 minutos. Que la hora de acostarse sea parecida todos los días, también el fin de semana. Si tiene de 0 a 3 años, ayuda que aprenda a dormirse en su cama, con tu compañía cerca.',
        ],
      },
      {
        heading: 'Pantallas y noche',
        paragraphs: [
          'Usar celular, tableta o tele antes de dormir se asocia con dormir menos y más tarde (Hale y Guan, 2015). La luz, los juegos y los mensajes mantienen el cerebro despierto.',
          'Una idea útil es apagar las pantallas una hora antes. También ayuda que duerman fuera del cuarto. Funciona mejor si toda la familia hace lo mismo.',
        ],
      },
      {
        heading: 'Miedos, pesadillas y terrores nocturnos',
        paragraphs: [
          'Entre los 4 y los 9 años es común tener miedo a la oscuridad o a los monstruos. Escucha el miedo sin burlarte. Una luz suave o un muñeco pueden dar seguridad.',
          'La pesadilla es un mal sueño. Se despierta asustado o asustada, te reconoce y lo puede contar. Abrázalo y quédate un rato. El terror nocturno pasa en la primera parte de la noche. Grita o llora, pero sigue dormido o dormida y no te reconoce. No hace falta despertarlo. Cuida que no se golpee y espera. Al otro día no lo suele recordar.',
        ],
      },
      {
        heading: 'Adolescentes con el horario corrido',
        paragraphs: [
          'En la adolescencia el reloj del cuerpo se corre. Les da sueño más tarde, pero la escuela sigue empezando temprano. Por eso muchos duermen menos de lo que necesitan (Adolescent Sleep Working Group y colaboradores, 2014).',
          'No es pereza. Ayuda acordar una hora para dejar el celular y salir a la luz por la mañana. Dormir mucho más el fin de semana puede correr aún más el horario.',
        ],
      },
    ],
    phrases: [
      '«Ya es hora del cuento. Después apagamos la luz»',
      '«Tu miedo es real. Estoy cerca y aquí estás a salvo»',
      '«Fue un sueño feo. Ya pasó, me quedo un ratito contigo»',
      '«¿A qué hora dejamos los celulares hoy?»',
    ],
    caveat: {
      title: 'Cuándo consultar',
      body: 'Consulta con su pediatra si ronca fuerte casi todas las noches, si hace pausas al respirar mientras duerme o si tiene mucho sueño de día. También si le cuesta dormirse o se despierta casi todas las noches durante más de un mes, o si los terrores nocturnos son muy frecuentes.',
    },
    activities: ['rutina-para-dormir', 'miedo-a-la-noche', 'respiracion-del-oso', 'dormir-mejor'],
    references: [
      {
        citation:
          'Paruthi, S., Brooks, L. J., D’Ambrosio, C., Hall, W. A., Kotagal, S., Lloyd, R. M., Malow, B. A., Maski, K., Nichols, C., Quan, S. F., Rosen, C. L., Troester, M. M., & Wise, M. S. (2016). Recommended amount of sleep for pediatric populations: A consensus statement of the American Academy of Sleep Medicine. Journal of Clinical Sleep Medicine, 12(6), 785–786.',
        doi: '10.5664/jcsm.5866',
      },
      {
        citation:
          'Mindell, J. A., Kuhn, B., Lewin, D. S., Meltzer, L. J., & Sadeh, A. (2006). Behavioral treatment of bedtime problems and night wakings in infants and young children. Sleep, 29(10), 1263–1276.',
        doi: '10.1093/sleep/29.10.1263',
      },
      {
        citation:
          'Hale, L., & Guan, S. (2015). Screen time and sleep among school-aged children and adolescents: A systematic literature review. Sleep Medicine Reviews, 21, 50–58.',
        doi: '10.1016/j.smrv.2014.07.007',
      },
      {
        citation:
          'Adolescent Sleep Working Group, Committee on Adolescence, & Council on School Health. (2014). School start times for adolescents. Pediatrics, 134(3), 642–649.',
        doi: '10.1542/peds.2014-1697',
      },
    ],
  },
  {
    id: 'cuidar-el-propio-cuerpo',
    title: 'Cuidar el propio cuerpo',
    subtitle: 'Educación sexual integral según la edad y cómo prevenir el abuso, con calma.',
    readingMin: 7,
    keyPoints: [
      'Nombrar las partes del cuerpo con su nombre real le da palabras para contar.',
      'Las sorpresas se cuentan pronto. Los secretos que hacen sentir mal se cuentan siempre.',
      'Su cuerpo es suyo. Puede decir que no, también a un familiar.',
      'Si te cuenta algo, créele, quédate en calma y busca ayuda.',
    ],
    sections: [
      {
        heading: 'Qué es la educación sexual integral',
        paragraphs: [
          'En la Argentina, la Ley 26.150 da a todos los chicos y chicas el derecho a recibir educación sexual integral en la escuela (Ley 26.150, 2006). No se trata solo de sexo. Incluye el cuerpo, las emociones, el respeto y el cuidado.',
          'En casa también se aprende. Se habla poco a poco, según la edad y las preguntas de cada uno. Los programas escolares de cuidado ayudan a reconocer el riesgo y a contarlo (Walsh y colaboradores, 2015). Que eso evite el abuso todavía no está claro.',
        ],
      },
      {
        heading: 'Nombrar el cuerpo y decir que no',
        paragraphs: [
          'Desde los 0 a 3 años puedes nombrar todas las partes del cuerpo. Vulva, pene y cola se dicen igual que mano o rodilla. Sin vergüenza y sin apodos. Así tu hijo o hija tiene palabras claras si algún día necesita contar algo.',
          'Entre los 4 y los 6 años puedes enseñar una idea simple. «Mi cuerpo es mío». Nadie puede tocar sus partes íntimas ni pedirle que toque las de otro. La excepción es un médico que lo revisa con tu presencia. También puede decir que no a un beso o un abrazo, aunque sea de la abuela.',
        ],
      },
      {
        heading: 'Secretos y sorpresas',
        paragraphs: [
          'Una sorpresa es algo lindo que se cuenta pronto, como un regalo de cumpleaños. Un secreto que da miedo, vergüenza o tristeza no se guarda. Se cuenta a un adulto de confianza, aunque le hayan dicho que no lo haga.',
          'Arma con tu hijo o hija una lista de adultos de confianza. Que sean dos o tres, dentro y fuera de casa. Entre los 7 y los 12 años, y en la adolescencia, suma el cuidado en internet. Nadie debe pedirle fotos de su cuerpo ni que guarde secretos en un chat.',
        ],
      },
      {
        heading: 'Señales que conviene mirar',
        paragraphs: [
          'Ninguna señal sola prueba un abuso. Pero vale prestar atención si aparecen cambios fuertes. Por ejemplo, miedo a una persona o a un lugar, o volver a mojar la cama. También dolor o lastimaduras en la zona genital. O conductas y palabras sexuales que no son de su edad.',
          'Otras señales son tristeza, aislamiento, problemas para dormir o regalos que no se explican. Si algo te preocupa, habla con su pediatra o con el equipo de la escuela.',
        ],
      },
      {
        heading: 'Si te cuenta algo',
        paragraphs: [
          'Lo más importante es creerle. Mantén la calma, aunque por dentro sientas mucho. Agradécele que te lo haya contado y dile que no es su culpa (Organización Mundial de la Salud, 2017).',
          'No lo interrogues ni le hagas repetir la historia. Escucha y anota lo que dijo con sus palabras. Luego llama a la Línea 102, gratuita, para recibir orientación. Puedes denunciar en una comisaría o en una fiscalía. Ante un peligro inmediato, llama al 911.',
        ],
      },
    ],
    phrases: [
      '«Tu cuerpo es tuyo. Puedes decir que no»',
      '«Las sorpresas se cuentan pronto. Los secretos que te hacen sentir mal, me los puedes contar siempre»',
      '«Gracias por contarme. Te creo y no es tu culpa»',
      '«Voy a buscar ayuda para cuidarte»',
    ],
    caveat: {
      title: 'Cuándo pedir ayuda',
      body: 'Si te cuenta algo, si ves lastimaduras en la zona genital o si sospechas un abuso, pide ayuda ese mismo día. La Línea 102 es gratuita y orienta sobre los derechos de chicos y chicas. Ante un peligro inmediato, llama al 911. No hace falta tener pruebas para pedir orientación.',
    },
    activities: ['partes-del-cuerpo', 'pedir-y-decir-que-no', 'pedir-ayuda', 'como-me-siento'],
    references: [
      {
        citation: 'Ley N.º 26.150. (2006). Programa Nacional de Educación Sexual Integral. Boletín Oficial de la República Argentina.',
      },
      {
        citation:
          'UNESCO. (2018). International technical guidance on sexuality education: An evidence-informed approach (Rev. ed.). UNESCO.',
      },
      {
        citation:
          'Walsh, K., Zwi, K., Woolfenden, S., & Shlonsky, A. (2015). School-based education programmes for the prevention of child sexual abuse. Cochrane Database of Systematic Reviews, 2015(4), CD004380.',
        doi: '10.1002/14651858.CD004380.pub3',
      },
      {
        citation:
          'World Health Organization. (2017). Responding to children and adolescents who have been sexually abused: WHO clinical guidelines. World Health Organization.',
      },
    ],
  },
  {
    id: 'mudanza-o-migracion',
    title: 'Mudanzas y migración',
    subtitle: 'Cómo acompañar un cambio de casa, de escuela o de país.',
    readingMin: 6,
    keyPoints: [
      'Anticipar el cambio con tiempo baja la incertidumbre.',
      'Despedirse de lo que se deja también es parte de llegar.',
      'Mantener la lengua y las costumbres de la familia da raíces.',
      'Adaptarse lleva meses. Es esperable que haya altibajos.',
    ],
    sections: [
      {
        heading: 'Anticipar el cambio',
        paragraphs: [
          'Cuéntale la noticia con tiempo y con palabras simples. Explica por qué se mudan, cuándo y qué va a seguir igual. Deja lugar para sus preguntas y para su enojo o su tristeza.',
          'De 0 a 3 años sirven los cuentos, las fotos y jugar a la mudanza. De 4 a 12 años ayuda mirar juntos fotos de la nueva casa o de la escuela. En la adolescencia conviene darle voz en algunas decisiones, como su cuarto o cómo seguir en contacto con sus amigos.',
        ],
      },
      {
        heading: 'Despedirse y llevar algo conocido',
        paragraphs: [
          'Las despedidas ayudan a cerrar. Puede visitar sus lugares queridos, sacar fotos o hacer una pequeña fiesta con amigos. Que sepa que puede seguir en contacto con ellos.',
          'Lleva a mano sus objetos queridos, como su peluche, su manta o su almohada. Arma su cuarto primero, si se puede. Mantener las rutinas de comida y de sueño da seguridad en medio del cambio.',
        ],
      },
      {
        heading: 'Migrar a otro país',
        paragraphs: [
          'Migrar implica muchas pérdidas a la vez. La familia, los amigos, la lengua, los olores y las comidas. A veces se lo llama duelo migratorio. Los chicos también lo viven, aunque no siempre lo digan.',
          'Suele ir mejor cuando la familia aprende la nueva cultura sin dejar la propia (Berry, 1997). Habla en casa tu lengua y cuenta historias de tu lugar. Cocinen sus comidas y festejen sus fiestas. Así tu hijo o hija puede sentirse parte de los dos mundos.',
        ],
      },
      {
        heading: 'La nueva escuela',
        paragraphs: [
          'Habla con la escuela antes de que empiece. Cuéntales de dónde viene, qué le gusta y qué le cuesta. Si cambia de idioma, pregunta qué apoyo le pueden dar.',
          'Los vínculos con otros chicos y una escuela que recibe bien son factores que protegen (Fazel y colaboradores, 2012). Ayuda invitar a un compañero a casa o sumarse a un deporte. Mudarse muchas veces seguidas se asocia con más dificultades (Jelleyman y Spencer, 2008). Por eso, si se puede, conviene evitar cambios extra.',
        ],
      },
      {
        heading: 'Los tiempos de la adaptación',
        paragraphs: [
          'Adaptarse lleva meses, a veces más de un año. Al principio puede volver a mojar la cama, pegarse más a ti o estar irritable. Suele ser pasajero.',
          'Tú también estás en duelo. Cuidarte y pedir apoyo a otras familias ayuda a todos. Hay pocos estudios sobre cuánto dura la adaptación en cada edad. Por eso, mira a tu hijo o hija más que al calendario.',
        ],
      },
    ],
    phrases: [
      '«Nos vamos a mudar. Te cuento cuándo y qué va a seguir igual»',
      '«Está bien extrañar. Yo también extraño»',
      '«Puedes llevar tus cosas queridas contigo»',
      '«En casa seguimos hablando nuestra lengua y comiendo nuestras comidas»',
    ],
    caveat: {
      title: 'Cuándo consultar',
      body: 'Consulta con un profesional si después de varios meses sigue muy triste o con miedo, si no quiere ir a la escuela, si se aísla de todos o si deja de comer o dormir bien. Si vivió situaciones muy difíciles en el viaje o en su país, consulta pronto. Ante un peligro inmediato, llama al 911.',
    },
    activities: ['anticipar-cambios', 'despedidas-cortas', 'como-me-siento', 'cuando-me-dejan-afuera'],
    references: [
      {
        citation: 'Berry, J. W. (1997). Immigration, acculturation, and adaptation. Applied Psychology, 46(1), 5–34.',
        doi: '10.1111/j.1464-0597.1997.tb01087.x',
      },
      {
        citation:
          'Fazel, M., Reed, R. V., Panter-Brick, C., & Stein, A. (2012). Mental health of displaced and refugee children resettled in high-income countries: Risk and protective factors. The Lancet, 379(9812), 266–282.',
        doi: '10.1016/S0140-6736(11)60051-2',
      },
      {
        citation:
          'Jelleyman, T., & Spencer, N. (2008). Residential mobility in childhood and health outcomes: A systematic review. Journal of Epidemiology and Community Health, 62(7), 584–592.',
        doi: '10.1136/jech.2007.060103',
      },
    ],
  },
];
