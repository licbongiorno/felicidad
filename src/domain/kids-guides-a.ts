import type { KidGuide } from './kids-guides';
import type { Reference } from './types';

const HOBFOLL_2007: Reference = {
  citation:
    'Hobfoll, S. E., Watson, P., Bell, C. C., Bryant, R. A., Brymer, M. J., Friedman, M. J., Friedman, M., Gersons, B. P. R., de Jong, J. T. V. M., Layne, C. M., Maguen, S., Neria, Y., Norwood, A. E., Pynoos, R. S., Reissman, D., Ruzek, J. I., Shalev, A. Y., Solomon, Z., Steinberg, A. M., & Ursano, R. J. (2007). Five essential elements of immediate and mid-term mass trauma intervention: Empirical evidence. Psychiatry: Interpersonal and Biological Processes, 70(4), 283–315.',
  doi: '10.1521/psyc.2007.70.4.283',
};
const COHEN_2004: Reference = {
  citation:
    'Cohen, J. A., Deblinger, E., Mannarino, A. P., & Steer, R. A. (2004). A multisite, randomized controlled trial for children with sexual abuse–related PTSD symptoms. Journal of the American Academy of Child & Adolescent Psychiatry, 43(4), 393–402.',
};
const NICE_2018: Reference = {
  citation: 'National Institute for Health and Care Excellence. (2018). Post-traumatic stress disorder (NICE guideline NG116). NICE.',
};
const KAGAN_1988: Reference = {
  citation: 'Kagan, J., Reznick, J. S., & Snidman, N. (1988). Biological bases of childhood shyness. Science, 240(4849), 167–171.',
};
const RUBIN_2009: Reference = {
  citation: 'Rubin, K. H., Coplan, R. J., & Bowker, J. C. (2009). Social withdrawal in childhood. Annual Review of Psychology, 60, 141–171.',
};
const NICE_2013: Reference = {
  citation: 'National Institute for Health and Care Excellence. (2013). Social anxiety disorder: Recognition, assessment and treatment (NICE clinical guideline CG159). NICE.',
};
const LEBOWITZ_2020: Reference = {
  citation:
    'Lebowitz, E. R., Marin, C., Martino, A., Shimshoni, Y., & Silverman, W. K. (2020). Parent-based treatment as efficacious as cognitive-behavioral therapy for childhood anxiety: A randomized noninferiority study of supportive parenting for anxious childhood emotions. Journal of the American Academy of Child & Adolescent Psychiatry, 59(3), 362–372.',
};
const POTS_2004: Reference = {
  citation:
    'Pediatric OCD Treatment Study (POTS) Team. (2004). Cognitive-behavior therapy, sertraline, and their combination for children and adolescents with obsessive-compulsive disorder: The Pediatric OCD Treatment Study (POTS) randomized controlled trial. JAMA, 292(16), 1969–1976.',
  doi: '10.1001/jama.292.16.1969',
};
const LEBOWITZ_2016: Reference = {
  citation:
    'Lebowitz, E. R., Panza, K. E., & Bloch, M. H. (2016). Family accommodation in obsessive-compulsive and anxiety disorders: A five-year update. Expert Review of Neurotherapeutics, 16(1), 45–53.',
};
const MARCH_1998: Reference = {
  citation: 'March, J. S., & Mulle, K. (1998). OCD in children and adolescents: A cognitive-behavioral treatment manual. Guilford Press.',
};
const NICE_2005: Reference = {
  citation:
    'National Institute for Health and Care Excellence. (2005). Obsessive-compulsive disorder and body dysmorphic disorder: Treatment (NICE clinical guideline CG31). NICE.',
};

export const KID_GUIDES_A: KidGuide[] = [
  {
    id: 'despues-de-un-susto-grave',
    title: 'Después de un susto grave',
    subtitle: 'Cómo acompañar a tu hijo o hija tras un accidente, un hecho violento o una catástrofe.',
    readingMin: 6,
    keyPoints: [
      'Después de un hecho muy fuerte, el miedo, el mal sueño o el enojo son reacciones esperables.',
      'Lo que más ayuda al principio es sentirse a salvo, estar en calma y estar con su gente.',
      'No hace falta que cuente lo que pasó. Escucha si quiere hablar, sin insistir.',
      'Si las reacciones no bajan después de un mes, consulta. Hay tratamientos que funcionan.',
    ],
    sections: [
      {
        heading: 'Lo que es esperable',
        paragraphs: [
          'Después de un susto grave, el cuerpo y la mente siguen en alerta. Es una reacción normal ante algo que no es normal. La mayoría de los chicos mejora con el paso de las semanas, sobre todo si tiene adultos cerca.',
          'Entre 0 y 3 años puede llorar más, aferrarse a ti o dormir mal. Entre 4 y 6 años puede volver a mojar la cama o hablar como un bebé. Entre 7 y 12 años son comunes los dolores de panza, el miedo a que vuelva a pasar y la culpa. En la adolescencia puede aislarse, enojarse o arriesgarse más.',
        ],
      },
      {
        heading: 'Los primeros días',
        paragraphs: [
          'Un grupo de expertos revisó qué ayuda después de una catástrofe. Encontraron cinco pilares: sentirse a salvo, calmarse, sentirse capaz, estar conectado y tener esperanza (Hobfoll y colaboradores, 2007). Son principios que surgen de muchos estudios, pero hay pocos ensayos hechos con chicos.',
          'En casa, eso se traduce en cosas simples. Dile que ahora está a salvo, si es verdad. Quédate cerca. Cuida que coma y descanse. Limita las noticias y las imágenes del hecho. Y explícale qué va a pasar hoy y mañana.',
        ],
      },
      {
        heading: 'Rutina y seguridad',
        paragraphs: [
          'Las rutinas dicen al cuerpo que el mundo vuelve a ser predecible. Vuelvan pronto a los horarios de comer, de dormir y de ir a la escuela. Si necesita dormir cerca de ti unos días, está bien. Luego vuelvan de a poco a lo de antes.',
          'Pon límites con cariño, como siempre. Los límites claros también dan seguridad.',
        ],
      },
      {
        heading: 'No forzar el relato',
        paragraphs: [
          'Algunos chicos quieren contar lo que pasó muchas veces. Otros no quieren hablar. Las dos cosas son normales. No le pidas que cuente detalles. Hazle saber que puede hablar cuando quiera.',
          'Si pregunta, responde con la verdad y con palabras simples. Si sientes culpa o miedo, busca apoyo para ti también. Tu calma es su mejor refugio.',
        ],
      },
      {
        heading: 'El juego que repite',
        paragraphs: [
          'Muchos chicos pequeños juegan a lo que pasó: chocan autitos o hacen sonar sirenas. Es su forma de procesar. Puedes acompañar el juego y agregar un final seguro, como una ambulancia que llega.',
          'Fíjate si el juego le trae calma o más angustia. Si siempre termina con mucho miedo y no cambia con los días, es una señal para consultar.',
        ],
      },
    ],
    phrases: ['«Ya pasó. Ahora estás a salvo y yo estoy contigo»', '«Puedes contarme cuando quieras. Y si no quieres, también está bien»', '«Lo que sientes es normal después de un susto tan grande»', '«No fue tu culpa»'],
    caveat: {
      title: 'Cuándo consultar',
      body: 'Consulta si después de un mes siguen las pesadillas, el miedo intenso, los recuerdos que vuelven sin querer o la evitación, o si no puede volver a la escuela. El tratamiento con más evidencia para chicos es la terapia cognitivo-conductual centrada en el trauma, TF-CBT (Cohen y colaboradores, 2004; NICE, 2018). Si habla de hacerse daño, busca ayuda ese mismo día. Ante un peligro inmediato, llama al 911. Si el hecho incluyó violencia o maltrato, la Línea 102 atiende gratis consultas sobre derechos de chicos y chicas.',
    },
    activities: ['calma-compartida', 'respiracion-del-oso', 'dibujo-mi-lugar-tranquilo', 'mi-cuerpo-en-alerta'],
    references: [HOBFOLL_2007, COHEN_2004, NICE_2018],
  },
  {
    id: 'timidez-y-ansiedad-social',
    title: 'Timidez y ansiedad social',
    subtitle: 'Cuándo la timidez es parte de su forma de ser y cuándo el miedo le pone freno.',
    readingMin: 5,
    keyPoints: [
      'La timidez es un rasgo, no un problema. Muchos chicos tímidos tienen buenas amistades.',
      'La ansiedad social es un miedo tan fuerte a quedar mal que le impide hacer su vida.',
      'Ayuda más acompañar pasos pequeños que hablar por tu hijo o hija.',
      'Si no habla nada en la escuela durante semanas, consulta.',
    ],
    sections: [
      {
        heading: 'Timidez o ansiedad social',
        paragraphs: [
          'Algunos chicos nacen con un estilo más cauteloso. Ante lo nuevo, primero miran y después se acercan (Kagan y colaboradores, 1988). Eso es timidez. Con tiempo y confianza, suelen entrar en el juego.',
          'La ansiedad social es distinta. El miedo a hacer el ridículo es tan fuerte que evita hablar, jugar o ir a cumpleaños. Sufre antes, durante y después. Y eso le quita cosas que quiere hacer.',
        ],
      },
      {
        heading: 'No ponerle etiquetas',
        paragraphs: [
          'Frases como «es tímido» o «es vergonzosa» dichas delante de otros pueden pesar. El chico empieza a creer que es así y que no puede cambiar. Describe la situación en lugar del chico: «Le cuesta un poco al principio».',
          'Tampoco sirve forzar ni burlarse. Retar al chico por no saludar suele aumentar el miedo. Lo que sí importa es si se aísla mucho y por mucho tiempo. Eso se asocia con más ansiedad después (Rubin y colaboradores, 2009).',
        ],
      },
      {
        heading: 'Pasos pequeños con apoyo',
        paragraphs: [
          'El miedo baja cuando se enfrenta de a poco. Hagan juntos una lista de situaciones, de la más fácil a la más difícil. Por ejemplo: saludar a un vecino, pedir algo en el kiosco, invitar a un amigo a casa.',
          'Empiecen por la más fácil y repitan hasta que sea cómoda. Celebra el esfuerzo, no el resultado. Esta forma de enfrentar el miedo es la base de los tratamientos que funcionan (NICE, 2013).',
        ],
      },
      {
        heading: 'No rescatar ni hablar por él o ella',
        paragraphs: [
          'Cuando ves que sufre, dan ganas de responder por tu hijo o hija o de sacarle del mal momento. Alivia en el momento, pero el miedo crece. El mensaje que recibe es que no puede solo.',
          'Prueba con dos mensajes juntos: «Entiendo que te da miedo» y «Confío en que puedes». Un programa que enseña esto a los padres funcionó tan bien como la terapia con el chico (Lebowitz y colaboradores, 2020). Espera unos segundos antes de intervenir. Dale tiempo para responder.',
        ],
      },
    ],
    phrases: ['«Entiendo que te da miedo. Y confío en que puedes»', '«Puedes mirar un rato y entrar cuando estés listo o lista»', '«Me di cuenta de que saludaste aunque te costaba. Eso fue valiente»', '«¿Cuál sería un paso pequeño para probar esta semana?»'],
    caveat: {
      title: 'Cuándo consultar',
      body: 'Consulta si el miedo le impide ir a la escuela, tener amigos o hacer actividades que le gustan. También si en casa habla bien pero en la escuela o con otros no dice nada durante semanas. Eso puede ser mutismo selectivo y conviene tratarlo pronto. Un buen primer paso es su pediatra o el equipo de orientación de la escuela.',
    },
    activities: ['pasito-valiente', 'escalera-valiente', 'hablar-frente-a-otros', 'escudo-valiente'],
    references: [KAGAN_1988, RUBIN_2009, NICE_2013, LEBOWITZ_2020],
  },
  {
    id: 'rituales-y-pensamientos-que-se-repiten',
    title: 'Rituales y pensamientos que se repiten',
    subtitle: 'Cómo distinguir las manías de la edad del TOC y cómo acompañar sin alimentarlo.',
    readingMin: 6,
    keyPoints: [
      'Muchos chicos pequeños tienen rituales. Suelen ser normales y van pasando con la edad.',
      'El TOC aparece cuando los pensamientos y los rituales le causan mucha angustia y le quitan tiempo.',
      'Ponerle nombre al TOC ayuda a ver que el problema es el TOC, no tu hijo o hija.',
      'La terapia cognitivo-conductual con exposición es el tratamiento de primera línea.',
    ],
    sections: [
      {
        heading: 'Rituales normales',
        paragraphs: [
          'Entre los 2 y los 6 años es común querer las cosas siempre igual. El mismo cuento, el mismo vaso, el mismo orden para dormir. Estos rituales dan seguridad y suelen ir bajando con los años.',
          'Lo esperable es que el chico disfrute el ritual o le dé igual si un día cambia. No sufre mucho si no lo hace.',
        ],
      },
      {
        heading: 'Cuándo puede ser TOC',
        paragraphs: [
          'En el TOC aparecen pensamientos que asustan y no se van. Por ejemplo, que algo malo le pasará a la familia o que está sucio. Para calmar ese miedo, el chico hace rituales: lavarse, contar, ordenar o preguntar lo mismo muchas veces.',
          'Las señales son tres. Los rituales le quitan más de una hora al día. Siente mucha angustia si no puede hacerlos. Y le traban la vida en casa o en la escuela. Muchos chicos esconden el TOC por vergüenza.',
        ],
      },
      {
        heading: 'Ponerle nombre al TOC',
        paragraphs: [
          'Ayuda tratar al TOC como algo de afuera, como un mandón que da órdenes. Pueden ponerle un nombre o hacer un dibujo. Así tu hijo o hija no se siente el problema. El problema es el TOC, y ustedes son un equipo contra él (March y Mulle, 1998).',
          'Con chicos de 4 a 8 años esto funciona bien como un juego. Con adolescentes, basta con decir «eso es el TOC hablando».',
        ],
      },
      {
        heading: 'Acompañar sin alimentar el TOC',
        paragraphs: [
          'Las familias suelen ayudar con los rituales para que el chico sufra menos. Responden la misma pregunta diez veces o lavan las cosas como pide. Esto se llama acomodación. Es muy común y nace del amor, pero se asocia con más síntomas (Lebowitz y colaboradores, 2016).',
          'No conviene quitarla de golpe. Elijan juntos un ritual para reducir de a poco, mejor con guía de un profesional. Acompaña con calma: «Sé que es difícil. Confío en que puedes esperar un poco».',
        ],
      },
      {
        heading: 'El tratamiento que funciona',
        paragraphs: [
          'La terapia cognitivo-conductual con exposición y prevención de respuesta es el tratamiento de primera línea (NICE, 2005). El chico se acerca de a poco a lo que teme sin hacer el ritual. Así aprende que la angustia baja sola.',
          'En un gran estudio, esta terapia ayudó a muchos chicos y adolescentes. Sumar medicación a la terapia dio los mejores resultados en conjunto (POTS, 2004). La familia suele participar en el tratamiento.',
        ],
      },
    ],
    phrases: ['«Eso que te pide lavarte otra vez es el TOC, no eres tú»', '«Sé que es difícil. Confío en que puedes esperar un poquito»', '«Ya te respondí. Esta vez vamos a dejar que la duda se quede»', '«Somos un equipo contra el TOC»'],
    caveat: {
      title: 'Cuándo consultar',
      body: 'Consulta si los rituales le quitan más de una hora al día, si le causan mucha angustia o si le impiden ir a la escuela o estar con amigos. También si los síntomas aparecen de golpe tras una infección: coméntalo con su pediatra, aunque la evidencia sobre esa relación todavía se discute. Si en algún momento habla de hacerse daño, busca ayuda ese mismo día. Ante un peligro inmediato, llama al 911.',
    },
    activities: ['globo-de-preocupaciones', 'pensamientos-nube', 'escalera-valiente', 'detective-de-pensamientos'],
    references: [POTS_2004, LEBOWITZ_2016, MARCH_1998, NICE_2005],
  },
];
