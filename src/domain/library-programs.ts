import type { Article } from './library';

/** Quinta tanda: artículos que acompañan a los programas de insomnio, autoestima y ansiedad social. */

export const PROGRAM_ARTICLES: Article[] = [
  {
    id: 'insomnio-tcc',
    title: 'Dormir mejor: la terapia del insomnio',
    subtitle: 'Qué hace la terapia cognitivo-conductual para el insomnio y cómo aplicar sus principios.',
    category: 'Hábitos y cuerpo',
    readingMin: 7,
    keyPoints: [
      'La terapia cognitivo-conductual para el insomnio (TCC-I) es el tratamiento de primera elección, por delante de los fármacos.',
      'Sus claves: un horario fijo para levantarse, usar la cama sólo para dormir y no pelear con el sueño.',
      'Las primeras semanas pueden ser más cansadas antes de mejorar.',
      'La restricción de sueño estricta conviene hacerla con un/a profesional.',
    ],
    sections: [
      {
        heading: 'Por qué el insomnio se mantiene',
        paragraphs: [
          'El insomnio suele empezar por algo concreto: un estrés, una enfermedad, un cambio de horario. Lo que hace que dure meses es otra cosa: lo que hacemos para compensarlo. Acostarse antes, quedarse en la cama despierto/a o dormir siesta parecen lógicos, pero debilitan la presión de sueño y enseñan al cerebro que la cama es un lugar de vigilia.',
          'A eso se suma la preocupación por dormir. «Si no duermo, mañana no rindo» activa el cuerpo justo cuando necesita calmarse. El sueño no se puede forzar: cuanto más se busca, más se escapa.',
        ],
      },
      {
        heading: 'Los componentes de la TCC-I',
        paragraphs: [
          'Diario de sueño: registrar cada mañana a qué hora te acostaste, cuánto tardaste en dormirte, los despertares y la hora de levantarte. Muestra el patrón real, no la impresión de «duermo fatal».',
          'Control de estímulos: ir a la cama sólo con sueño, usarla sólo para dormir (y para la vida sexual) y, si no te duermes en unos veinte minutos, levantarte a otra habitación y volver cuando tengas sueño. Levantarte siempre a la misma hora, también el fin de semana.',
          'Ajustar el tiempo en la cama: si pasas nueve horas en la cama y duermes seis, reducir el tiempo en la cama acerca las dos cifras y hace el sueño más profundo y continuo. Después se amplía poco a poco.',
          'Pensamientos sobre el sueño: revisar ideas como «necesito ocho horas o el día está perdido». Y técnicas de relajación para bajar la activación antes de acostarte.',
        ],
      },
      {
        heading: 'Lo que dice la evidencia',
        paragraphs: [
          'El metaanálisis de Trauer y colaboradores (2015) encontró que la TCC-I reduce el tiempo que se tarda en dormirse y el tiempo despierto/a por la noche, y que sus efectos se mantienen en el tiempo. Por eso las guías clínicas la recomiendan como primer tratamiento para el insomnio crónico (Edinger et al., 2021).',
        ],
      },
    ],
    caveat: {
      title: 'Antes de reducir horas de cama',
      body: 'No reduzcas el tiempo en la cama por tu cuenta si tienes trastorno bipolar, epilepsia, apnea del sueño o un trabajo en el que la somnolencia sea peligrosa, como conducir. Si roncas fuerte, te despiertas ahogándote o tienes mucho sueño de día, consulta a tu médico.',
    },
    related: { practices: ['relajacion-progresiva', 'respiracion-resonante', 'escaneo-corporal'], articles: ['sueno-y-bienestar', 'preocupacion-y-ansiedad'] },
    references: [
      {
        citation:
          'Trauer, J. M., Qian, M. Y., Doyle, J. S., Rajaratnam, S. M. W., & Cunnington, D. (2015). Cognitive behavioral therapy for chronic insomnia: A systematic review and meta-analysis. Annals of Internal Medicine, 163(3), 191–204.',
        doi: '10.7326/M14-2841',
      },
      {
        citation:
          'Edinger, J. D., Arnedt, J. T., Bertisch, S. M., et al. (2021). Behavioral and psychological treatments for chronic insomnia disorder in adults: An American Academy of Sleep Medicine clinical practice guideline. Journal of Clinical Sleep Medicine, 17(2), 255–262.',
        doi: '10.5664/jcsm.8986',
      },
    ],
  },
  {
    id: 'autoestima',
    title: 'Autoestima y autocrítica',
    subtitle: 'De dónde viene la sensación de no valer y cómo se trabaja en terapia.',
    category: 'Terapias contextuales',
    readingMin: 6,
    keyPoints: [
      'La autoestima baja suele apoyarse en una conclusión global sobre uno mismo, aprendida en experiencias tempranas.',
      'Esa conclusión se protege con reglas rígidas y se confirma con un filtro que sólo deja ver los fallos.',
      'Se trabaja revisando los pensamientos autocríticos, registrando cualidades reales y poniendo a prueba las reglas.',
      'La autocompasión ofrece un apoyo más estable que la autoestima, porque no depende de compararse.',
    ],
    sections: [
      {
        heading: 'Cómo se forma',
        paragraphs: [
          'Melanie Fennell describió un modelo cognitivo de la autoestima baja. Experiencias tempranas como críticas, rechazo o exigencias excesivas dejan una conclusión central: «no valgo», «soy un estorbo», «no soy suficiente». Para vivir con esa idea, la persona crea reglas: «si no hago todo perfecto, me rechazarán», «tengo que agradar siempre».',
          'Mientras las reglas se cumplen, la persona se siente más o menos bien. Cuando una situación amenaza con romperlas, aparecen la ansiedad, la autocrítica y la conclusión de siempre, que parece confirmarse.',
        ],
      },
      {
        heading: 'Cómo se trabaja',
        paragraphs: [
          'La terapia cognitivo-conductual propone varios pasos. Notar los pensamientos autocríticos y revisarlos con las trampas del pensamiento. Registrar cada día cualidades y logros concretos, para corregir el filtro. Poner a prueba las reglas con pequeños experimentos: decir que no, mostrar un error, pedir ayuda.',
          'Una revisión con metaanálisis de los tratamientos basados en este modelo encontró mejoras en la autoestima, con efectos mayores en la terapia individual (Kolubinski et al., 2018).',
        ],
      },
      {
        heading: 'Autoestima y autocompasión',
        paragraphs: [
          'Subir la autoestima a base de logros tiene un límite: cuando fallas, se cae. La autocompasión es otra vía. Consiste en tratarte con la misma amabilidad que a alguien que quieres, reconocer que equivocarse es humano y mirar el malestar sin exagerarlo. No depende de ser mejor que nadie, por eso es más estable.',
        ],
      },
    ],
    caveat: {
      title: 'Cuándo pedir ayuda',
      body: 'Si la autocrítica es constante, viene con tristeza profunda o con ganas de hacerte daño, este recorrido no basta: consulta a un/a profesional. Si alguien de tu entorno te desvaloriza a menudo, el problema no es tu autoestima: busca apoyo para protegerte.',
    },
    related: { practices: ['pausa-autocompasion', 'fortalezas', 'mano-en-el-pecho'], articles: ['autocompasion', 'procrastinacion-y-perfeccionismo'] },
    references: [
      {
        citation: 'Fennell, M. J. V. (1997). Low self-esteem: A cognitive perspective. Behavioural and Cognitive Psychotherapy, 25(1), 1–26.',
      },
      {
        citation:
          'Kolubinski, D. C., Frings, D., Nikčević, A. V., Lawrence, J. A., & Spada, M. M. (2018). A systematic review and meta-analysis of CBT interventions based on the Fennell model of low self-esteem. Psychiatry Research, 267, 296–305.',
        doi: '10.1016/j.psychres.2018.06.025',
      },
      {
        citation: 'Neff, K. D. (2003). Self-compassion: An alternative conceptualization of a healthy attitude toward oneself. Self and Identity, 2(2), 85–101.',
        doi: '10.1080/15298860309032',
      },
    ],
  },
  {
    id: 'ansiedad-social',
    title: 'Ansiedad social',
    subtitle: 'El miedo a ser juzgado/a, qué lo mantiene y cómo se trata.',
    category: 'Relaciones',
    readingMin: 6,
    keyPoints: [
      'La ansiedad social es el miedo intenso a ser evaluado/a de forma negativa por otros.',
      'Lo mantienen tres cosas: fijarse en uno mismo, las conductas de seguridad y la evitación.',
      'La terapia cognitivo-conductual es el tratamiento con más evidencia.',
      'Se mejora con experimentos: entrar en las situaciones, dejar las conductas de seguridad y comprobar qué pasa.',
    ],
    sections: [
      {
        heading: 'Qué la mantiene',
        paragraphs: [
          'Según el modelo de Clark y Wells, en una situación social la persona con ansiedad social dirige la atención hacia sí misma: nota el calor en la cara, el temblor en la voz, y se imagina como la ven los demás. Esa imagen suele ser mucho peor que la realidad.',
          'Para protegerse usa conductas de seguridad: no mirar a los ojos, ensayar cada frase, sujetar el vaso con fuerza, hablar poco. Parecen ayudar, pero impiden comprobar que lo temido no ocurre, y a veces hacen que se note más la ansiedad. Después, la persona repasa la situación buscando errores.',
        ],
      },
      {
        heading: 'Cómo se trata',
        paragraphs: [
          'Un gran metaanálisis en red comparó los tratamientos para la ansiedad social en adultos: la terapia cognitivo-conductual individual fue la intervención psicológica más eficaz (Mayo-Wilson et al., 2014).',
          'Sus herramientas principales: llevar la atención hacia fuera (a la conversación, a la otra persona), dejar las conductas de seguridad y hacer experimentos conductuales en situaciones reales, de menor a mayor dificultad. Las habilidades de comunicación, como DEAR MAN, ayudan a sentirse más preparado/a.',
        ],
      },
    ],
    caveat: {
      title: 'Timidez no es lo mismo',
      body: 'Sentir algo de nervios con gente nueva es normal. Si la ansiedad te impide estudiar, trabajar o tener relaciones, consulta a un/a profesional: la ansiedad social tiene tratamiento eficaz.',
    },
    related: { practices: ['atencion-sonidos', 'respiracion-resonante', 'dear-man', 'give-fast'], articles: ['preocupacion-y-ansiedad', 'asertividad-y-limites'] },
    references: [
      {
        citation:
          'Mayo-Wilson, E., Dias, S., Mavranezouli, I., Kew, K., Clark, D. M., Ades, A. E., & Pilling, S. (2014). Psychological and pharmacological interventions for social anxiety disorder in adults: A systematic review and network meta-analysis. The Lancet Psychiatry, 1(5), 368–376.',
        doi: '10.1016/S2215-0366(14)70329-3',
      },
      { citation: 'Clark, D. M., & Wells, A. (1995). A cognitive model of social phobia. En R. G. Heimberg et al. (Eds.), Social phobia: Diagnosis, assessment, and treatment (pp. 69–93). Guilford Press.' },
    ],
  },
  {
    id: 'autoconocimiento',
    title: 'Conocerte mejor',
    subtitle: 'Roles, necesidades y patrones: una exploración personal, no un diagnóstico.',
    category: 'Terapias contextuales',
    readingMin: 6,
    keyPoints: [
      'Muchas reacciones que se repiten tienen sentido si se miran desde las necesidades que intentan cubrir.',
      'La terapia de esquemas describe cinco necesidades emocionales básicas y las partes («modos») que aparecen cuando no se cubren.',
      'Jung propuso mirar la imagen que mostramos y las partes que dejamos fuera de ella.',
      'Estos ejercicios son para conocerte, no para ponerte una etiqueta. Lo que descubras es buen material para tu terapia.',
    ],
    sections: [
      {
        heading: 'Por qué repetimos',
        paragraphs: [
          'A veces terminamos una y otra vez en el mismo lugar: cuidando a todos menos a nosotros, alejándonos cuando alguien se acerca, exigiéndonos sin descanso. No es falta de voluntad. Esas formas de reaccionar se aprendieron en algún momento porque servían, y siguen apareciendo aunque hoy ya no ayuden.',
          'La terapia de esquemas, creada por Jeffrey Young, llama «esquemas» a esos patrones profundos de creencias y emociones. Se forman cuando algunas necesidades emocionales básicas no se cubrieron: sentirse seguro/a y querido/a, tener autonomía, poder expresar lo que se siente, disfrutar y tener límites realistas.',
        ],
      },
      {
        heading: 'Partes de uno mismo',
        paragraphs: [
          'En la terapia de esquemas, las reacciones del momento se describen como «modos»: una parte asustada, una enojada, una muy exigente o una que se desconecta. También existe el «adulto sano», la parte que puede comprender a las demás, cuidarlas y poner límites. La práctica «El adulto sano» ensaya esa mirada.',
          'Carl Jung habló de la «persona», la imagen que mostramos para adaptarnos, y de la «sombra», las partes propias que no aceptamos. A menudo la sombra aparece en lo que nos irrita mucho de otras personas. Es un marco para reflexionar, sin evidencia experimental.',
        ],
      },
      {
        heading: 'Cómo explorar sin hacerte daño',
        paragraphs: [
          'Empieza por situaciones de intensidad media. Escribe con curiosidad, como si investigaras a alguien que te importa. Si aparece algo muy doloroso, para: no hace falta resolverlo solo/a.',
          'La terapia de esquemas completa, con terapeuta, mostró buenos resultados en ensayos clínicos (Bamelis et al., 2014). Los ejercicios de la app no son esa terapia: son una forma de conocerte mejor y de llevar preguntas a tu proceso.',
        ],
      },
    ],
    caveat: {
      title: 'Exploración, no diagnóstico',
      body: 'Nada de lo que escribas aquí dice qué «tienes». Si estos ejercicios traen recuerdos traumáticos, angustia intensa o ganas de hacerte daño, detente y busca a tu terapeuta o usa el botón «Ayuda».',
    },
    related: { practices: ['adulto-sano', 'persona-y-sombra', 'pausa-autocompasion', 'brujula-valores'], articles: ['autocompasion', 'autoestima'] },
    references: [
      { citation: 'Young, J. E., Klosko, J. S., & Weishaar, M. E. (2003). Schema therapy: A practitioner’s guide. Guilford Press.' },
      {
        citation:
          'Bamelis, L. L. M., Evers, S. M. A. A., Spinhoven, P., & Arntz, A. (2014). Results of a multicenter randomized controlled trial of the clinical effectiveness of schema therapy for personality disorders. American Journal of Psychiatry, 171(3), 305–322.',
        doi: '10.1176/appi.ajp.2013.12040518',
      },
      { citation: 'Jung, C. G. (1964). Man and his symbols. Doubleday.' },
    ],
  },
];
