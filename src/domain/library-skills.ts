import type { Article } from './library';

/** Cuarta tanda: habilidades de crisis (DBT), asertividad, pánico y cuidado de quien cuida. */

const LINEHAN = { citation: 'Linehan, M. M. (2015). DBT skills training manual (2nd ed.). Guilford Press.' };

export const SKILL_ARTICLES: Article[] = [
  {
    id: 'kit-de-crisis',
    title: 'Kit de crisis emocional',
    subtitle: 'Qué hacer cuando la emoción está al máximo y no puedes pensar con claridad.',
    category: 'Terapias contextuales',
    readingMin: 5,
    keyPoints: [
      'En una crisis emocional, el objetivo no es resolver el problema, sino no empeorarlo.',
      'A intensidad máxima, primero el cuerpo (TIPP); después, la mente.',
      'La acción opuesta ayuda cuando una emoción empuja a hacer algo que no te conviene.',
    ],
    sections: [
      {
        heading: 'Sobrevivir a la crisis sin empeorarla',
        paragraphs: [
          'La terapia dialéctico-conductual (DBT), desarrollada por Marsha Linehan, dedica un módulo entero a la "tolerancia al malestar": habilidades para atravesar momentos de emoción extrema sin hacer algo que empeore la situación (gritar, romper, consumir, hacerse daño).',
          'La idea central es que, por encima de cierta intensidad, la mente racional no está disponible. Pedirse reflexionar en ese momento genera frustración. Por eso el orden importa: primero bajar la activación del cuerpo, después pensar.',
        ],
      },
      {
        heading: 'Las herramientas',
        paragraphs: [
          'TIPP: temperatura (agua fría en la cara), ejercicio intenso, respiración pausada y relajación. Actúan sobre el sistema nervioso en minutos. Tienen contraindicaciones médicas: léelas en la práctica.',
          'STOP: parar, respirar, observar y proseguir con intención. Útil antes de responder en caliente.',
          'Acción opuesta: si la emoción no se ajusta a los hechos, hacer lo contrario de lo que empuja a hacer.',
          'Después, cuando la intensidad baje de 7, los antídotos de la app vuelven a ser útiles.',
        ],
      },
    ],
    caveat: {
      title: 'Si hay riesgo',
      body: 'Si en la crisis aparecen pensamientos de hacerte daño, este kit no basta: contacta con emergencias o con tu profesional. Si tienes un plan de seguridad, este es el momento de usarlo.',
    },
    related: { practices: ['tipp', 'pausa-stop', 'accion-opuesta'], articles: ['antidotos-y-regulacion', 'practica-segura'] },
    references: [
      LINEHAN,
      {
        citation:
          'Cristea, I. A., Gentili, C., Cotet, C. D., Palomba, D., Barbui, C., & Cuijpers, P. (2017). Efficacy of psychotherapies for borderline personality disorder: A systematic review and meta-analysis. JAMA Psychiatry, 74(4), 319–328.',
        doi: '10.1001/jamapsychiatry.2016.4287',
      },
    ],
  },
  {
    id: 'asertividad-y-limites',
    title: 'Asertividad y límites',
    subtitle: 'Pedir lo que necesitas y decir que no, sin callar ni explotar.',
    category: 'Relaciones',
    readingMin: 6,
    keyPoints: [
      'La asertividad es una tercera vía entre la sumisión y la agresividad.',
      'Pedir algo con claridad no garantiza la respuesta, pero protege tu respeto propio y la relación.',
      'El entrenamiento asertivo tiene décadas de evidencia y se aprende con práctica.',
    ],
    sections: [
      {
        heading: 'Callar, explotar o pedir',
        paragraphs: [
          'Muchas personas oscilan entre callar para evitar el conflicto y explotar cuando ya no aguantan. Las dos opciones dañan: la primera, a uno mismo; la segunda, a la relación. La asertividad propone expresar lo que necesitas con claridad y respeto, hacia el otro y hacia ti.',
          'Speed, Goldstein y Goldfried (2018) revisaron la investigación sobre entrenamiento asertivo y concluyeron que es un tratamiento eficaz, sobre todo para la ansiedad social y la depresión, que la práctica clínica ha olvidado injustamente.',
        ],
      },
      {
        heading: 'Tres objetivos en cada conversación',
        paragraphs: [
          'La terapia dialéctico-conductual distingue tres objetivos que conviene equilibrar. Conseguir lo que pides: la guía DEAR MAN. Cuidar la relación: ser amable, mostrar interés y validar al otro. Mantener el respeto propio: ser justo/a contigo, no disculparte de más y defender tus valores.',
          'Antes de una conversación difícil, pregúntate cuál de los tres importa más esta vez. A veces conviene ceder en la petición para cuidar el vínculo; otras, sostener un límite aunque incomode.',
        ],
      },
      {
        heading: 'Poner límites',
        paragraphs: [
          'Un límite no es una amenaza ni un castigo: es informar de lo que harás tú. «Si sigues gritando, voy a salir de la habitación y hablamos más tarde.» El límite depende de tu conducta, no de la del otro.',
        ],
      },
    ],
    related: { practices: ['dear-man', 'pausa-autocompasion'], articles: ['vinculos-y-soledad', 'cuidar-sin-agotarse'] },
    references: [
      {
        citation: 'Speed, B. C., Goldstein, B. L., & Goldfried, M. R. (2018). Assertiveness training: A forgotten evidence-based treatment. Clinical Psychology: Science and Practice, 25(1), e12216.',
        doi: '10.1111/cpsp.12216',
      },
      LINEHAN,
    ],
  },
  {
    id: 'ataques-de-panico',
    title: 'Ataques de pánico',
    subtitle: 'Qué ocurre en el cuerpo durante un ataque, por qué no es peligroso y qué ayuda.',
    category: 'Terapias contextuales',
    readingMin: 6,
    keyPoints: [
      'Un ataque de pánico es una falsa alarma del sistema de defensa: muy intenso, pero no peligroso.',
      'Lo mantiene la interpretación catastrófica de las sensaciones y la evitación.',
      'La terapia cognitivo-conductual es el tratamiento psicológico con más evidencia.',
    ],
    sections: [
      {
        heading: 'Qué está pasando',
        paragraphs: [
          'El cuerpo tiene un sistema de alarma diseñado para responder a peligros: acelera el corazón, cambia la respiración y prepara los músculos. En un ataque de pánico esa alarma se dispara sin un peligro real. Las sensaciones son intensas y aterradoras, pero son las mismas que producirías al subir corriendo unas escaleras.',
          'David Clark (1986) describió el círculo que lo mantiene: una sensación normal se interpreta como peligrosa, eso genera miedo, el miedo intensifica las sensaciones y la interpretación se confirma.',
        ],
      },
      {
        heading: 'Qué ayuda',
        paragraphs: [
          'Durante el ataque: nombrarlo («es pánico, no es peligroso»), exhalar despacio sin respirar hondo, no huir y dejar que la ola pase. Suele alcanzar su pico en unos diez minutos.',
          'A largo plazo: dejar de evitar los lugares y sensaciones asociados al pánico. La evitación alivia hoy pero mantiene el miedo. La terapia cognitivo-conductual, que incluye exposición gradual a las sensaciones y situaciones, tiene la mejor evidencia (Pompoli et al., 2016).',
        ],
      },
    ],
    caveat: {
      title: 'Primero, descartar causas médicas',
      body: 'Ante el primer episodio, o si hay dolor en el pecho, desmayo o falta de aire persistente, hay que consultar con un médico. Algunos problemas cardíacos, tiroideos o respiratorios producen síntomas parecidos.',
    },
    diagram: {
      title: 'El círculo del pánico',
      nodes: ['Sensación corporal', '«Algo grave me pasa»', 'Miedo intenso', 'Más sensaciones', 'Huir o evitar'],
      caption: 'Reinterpretar la sensación como falsa alarma y no huir son las dos salidas del círculo.',
    },
    related: { practices: ['respiracion-resonante', 'hacer-espacio'], articles: ['preocupacion-y-ansiedad', 'exposicion-gradual'] },
    references: [
      { citation: 'Clark, D. M. (1986). A cognitive approach to panic. Behaviour Research and Therapy, 24(4), 461–470.', doi: '10.1016/0005-7967(86)90011-2' },
      {
        citation:
          'Pompoli, A., Furukawa, T. A., Imai, H., Tajika, A., Efthimiou, O., & Salanti, G. (2016). Psychological therapies for panic disorder with or without agoraphobia in adults: A network meta-analysis. Cochrane Database of Systematic Reviews, 4, CD011004.',
        doi: '10.1002/14651858.CD011004.pub2',
      },
    ],
  },
  {
    id: 'cuidar-sin-agotarse',
    title: 'Cuidar sin agotarse',
    subtitle: 'Para quienes cuidan de un familiar enfermo, de hijos con dificultades o trabajan con el sufrimiento ajeno.',
    category: 'Relaciones',
    readingMin: 6,
    keyPoints: [
      'El agotamiento de quien cuida viene más del distrés empático que de la compasión.',
      'La compasión, a diferencia de la empatía pura, se asocia con afecto positivo y protege del desgaste.',
      'Cuidarte no es egoísmo: es una condición para poder seguir cuidando.',
    ],
    sections: [
      {
        heading: 'Empatía y compasión no son lo mismo',
        paragraphs: [
          'Tania Singer y Olga Klimecki distinguieron dos respuestas al sufrimiento ajeno. La empatía es "sentir con": resonar con el dolor del otro. Sostenida en el tiempo, activa redes cerebrales del dolor y puede llevar al agotamiento. La compasión es "sentir por" con el deseo de ayudar: se asocia con afecto positivo y motivación para cuidar.',
          'En su estudio, el entrenamiento en compasión revirtió el malestar inducido por el entrenamiento en empatía (Klimecki et al., 2014). Por eso hoy se habla de "fatiga por empatía" más que de "fatiga por compasión".',
        ],
      },
      {
        heading: 'Qué ayuda a quien cuida',
        paragraphs: [
          'Un metaanálisis de intervenciones para cuidadores encontró mejoras en el malestar, el bienestar y el conocimiento sobre el cuidado, sobre todo en las intervenciones psicoeducativas y de psicoterapia (Sörensen et al., 2002).',
          'En la práctica: pausas breves a lo largo del día, pedir y aceptar relevos, poner límites a lo que puedes asumir, cultivar la ecuanimidad (cuidar sin cargar con todo el resultado) y tratarte con la misma amabilidad que ofreces.',
        ],
      },
    ],
    caveat: {
      title: 'Cuándo pedir ayuda',
      body: 'Si notas agotamiento constante, irritabilidad con la persona que cuidas, aislamiento o problemas de sueño persistentes, busca apoyo: tu médico, servicios sociales o asociaciones de cuidadores.',
    },
    related: { practices: ['ecuanimidad', 'mano-en-el-pecho', 'pausa-autocompasion'], articles: ['estres-y-agotamiento', 'asertividad-y-limites'] },
    references: [
      {
        citation:
          'Klimecki, O. M., Leiberg, S., Ricard, M., & Singer, T. (2014). Differential pattern of functional brain plasticity after compassion and empathy training. Social Cognitive and Affective Neuroscience, 9(6), 873–879.',
        doi: '10.1093/scan/nst060',
      },
      {
        citation: 'Sörensen, S., Pinquart, M., & Duberstein, P. (2002). How effective are interventions with caregivers? An updated meta-analysis. The Gerontologist, 42(3), 356–372.',
        doi: '10.1093/geront/42.3.356',
      },
    ],
  },
];
