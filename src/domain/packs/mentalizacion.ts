import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Mentalización» (Peter Fonagy, Anthony Bateman y colaboradores). Amplía lo que ya
 * está en metacognicion-vinculos.ts (práctica «Pausar y rebobinar», artículo y glosario base):
 *  - mentalizarse a uno mismo y a los demás con la postura de «no saber»;
 *  - los tres modos no mentalizantes: equivalencia psíquica, modo teleológico y modo simulado;
 *  - preguntar en lugar de suponer en pareja y familia; función reflexiva en la crianza;
 *  - confianza epistémica.
 *
 * La evidencia del tratamiento basado en la mentalización es del tratamiento completo con
 * terapeutas, sobre todo en el trastorno límite de la personalidad.
 */

const BATEMAN_2016: Reference = { citation: 'Bateman, A., & Fonagy, P. (2016). Mentalization-based treatment for personality disorders: A practical guide. Oxford University Press.' };
const ALLEN_2008: Reference = { citation: 'Allen, J. G., Fonagy, P., & Bateman, A. W. (2008). Mentalizing in clinical practice. American Psychiatric Publishing.' };
const LUYTEN_2020: Reference = {
  citation: 'Luyten, P., Campbell, C., Allison, E., & Fonagy, P. (2020). The mentalizing approach to psychopathology: State of the art and future directions. Annual Review of Clinical Psychology, 16, 297–325.',
  doi: '10.1146/annurev-clinpsy-071919-015355',
};
const FONAGY_ALLISON_2014: Reference = {
  citation: 'Fonagy, P., & Allison, E. (2014). The role of mentalizing and epistemic trust in the therapeutic relationship. Psychotherapy, 51(3), 372–380.',
  doi: '10.1037/a0036505',
};
const SLADE_2005: Reference = {
  citation: 'Slade, A. (2005). Parental reflective functioning: An introduction. Attachment & Human Development, 7(3), 269–281.',
  doi: '10.1080/14616730500245906',
};
const CAMOIRANO_2017: Reference = {
  citation: 'Camoirano, A. (2017). Mentalizing makes parenting work: A review about parental reflective functioning and clinical interventions to improve it. Frontiers in Psychology, 8, 14.',
  doi: '10.3389/fpsyg.2017.00014',
};
const STOREBO_2020: Reference = {
  citation: 'Storebø, O. J., Stoffers-Winterling, J. M., Völlm, B. A., et al. (2020). Psychological therapies for people with borderline personality disorder. Cochrane Database of Systematic Reviews, 5, CD012955.',
  doi: '10.1002/14651858.CD012955.pub2',
  note: 'Incluye el tratamiento basado en la mentalización entre las terapias con evidencia, con certeza baja a moderada.',
};

export const MENTALIZACION_PACK: ContentPack = {
  id: 'mentalizacion',

  // ================================================================== prácticas
  practices: [
    {
      id: 'que-pasa-en-mi',
      title: '¿Qué está pasando en mí?',
      family: 'attentional',
      skills: ['attention'],
      summary: 'Detenerte y poner en palabras lo que sientes, piensas y quieres en un momento, con curiosidad y sin dar nada por seguro.',
      mechanism: 'Mentalizarte a ti mismo baja la reactividad: lo que se nombra como un estado de la mente deja de sentirse como la realidad entera.',
      evidenceLevel: 'preliminar',
      evidence: [ALLEN_2008, BATEMAN_2016],
      howItWorks: [
        'Mentalizar es entender las conductas, propias y ajenas, a partir de lo que pasa por dentro: emociones, deseos, creencias e intenciones. Empieza por uno mismo.',
        'Cuando la emoción sube, la mente tiende a cerrarse en una sola explicación. Preguntarte qué estás sintiendo y qué quieres abre de nuevo el espacio. Jon Allen lo describe como «tener la mente en mente».',
        'No hace falta llegar a una respuesta exacta. Lo importante es la actitud de curiosidad: «¿Qué me pasa? ¿Puede haber algo más?».',
      ],
      tips: [
        'Úsala justo después de una reacción fuerte, cuando ya bajó un poco.',
        'Empieza por el cuerpo si no encuentras palabras.',
        'Usa frases como «estoy sintiendo…» en lugar de «soy…».',
      ],
      obstacles: [{ q: 'No sé qué siento.', a: 'Es muy común. Empieza por el cuerpo: tensión, calor, nudo. Después prueba palabras cercanas hasta que una encaje un poco.' }],
      steps: [
        { title: 'Parar', instruction: 'Detente. Respira despacio dos veces y siente los pies.', durationSec: 30, kind: 'breath' },
        { title: 'El cuerpo', instruction: '¿Qué notas en el cuerpo ahora? Tensión, calor, cansancio, un nudo.', durationSec: 40, kind: 'reflection' },
        { title: 'La emoción', instruction: '¿Qué emoción hay? Ponle un nombre provisorio: «Creo que es enojo, o quizá miedo».', durationSec: 45, kind: 'reflection' },
        { title: 'El pensamiento', instruction: '¿Qué estás pensando sobre lo que pasó? Dilo como un pensamiento: «Estoy pensando que…».', durationSec: 45, kind: 'reflection' },
        { title: 'El deseo', instruction: '¿Qué querrías que pase ahora? ¿Qué necesitas?', durationSec: 45, kind: 'reflection' },
        { title: 'Otra mirada', instruction: 'Pregúntate: ¿hay algo más en mí que no estoy viendo? Deja la pregunta abierta.', durationSec: 40, kind: 'reflection' },
      ],
    },
    {
      id: 'tres-explicaciones',
      title: 'Tres explicaciones posibles',
      family: 'deconstructive',
      skills: ['attention', 'compassion'],
      summary: 'Ante algo que alguien hizo y te molestó, pensar al menos tres razones posibles desde su mente, en lugar de dar por cierta la primera.',
      mechanism: 'Buscar varias explicaciones contrarresta la certeza rápida sobre las intenciones ajenas y deja lugar a preguntar.',
      evidenceLevel: 'preliminar',
      evidence: [BATEMAN_2016, LUYTEN_2020],
      howItWorks: [
        'Con emociones fuertes, solemos estar seguros de lo que el otro pensaba: «lo hizo para molestarme». Bateman y Fonagy proponen la postura de «no saber». No sabemos qué pasa en la mente del otro hasta que lo preguntamos.',
        'Pensar varias explicaciones no es justificar al otro. Es recuperar la flexibilidad. A veces, después de pensarlo, la primera explicación sigue siendo la más probable, y está bien.',
      ],
      tips: [
        'Que al menos una explicación tenga que ver con el estado del otro: cansancio, miedo, una preocupación.',
        'Si puedes, termina con una pregunta para hacerle a esa persona.',
        'Sirve también para ti: «¿Por qué reaccioné así?».',
      ],
      obstacles: [{ q: 'Estoy seguro de que lo hizo a propósito.', a: 'Puede ser. Prueba igual: la certeza fuerte suele ser una señal de que la emoción está al mando. Si después de pensar sigues seguro, también es información.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en algo que alguien hizo y te molestó.', durationSec: 40, kind: 'breath' },
        { title: 'Tu explicación', instruction: 'Escribe la primera explicación que te viene: «Lo hizo porque…».', durationSec: 45, kind: 'reflection' },
        { title: 'Su día', instruction: 'Imagina el día de esa persona. ¿Qué podía estar sintiendo o preocupándole?', durationSec: 60, kind: 'reflection' },
        { title: 'Dos más', instruction: 'Escribe dos explicaciones más, distintas de la primera. Aunque te parezcan poco probables.', durationSec: 75, kind: 'reflection' },
        { title: 'Lo que no sé', instruction: '¿Qué no sabes de lo que pasó por su mente? Anótalo.', durationSec: 45, kind: 'reflection' },
        { title: 'Una pregunta', instruction: 'Piensa una pregunta para hacerle, con curiosidad y sin acusar. Por ejemplo: «¿Qué te pasó cuando…?».', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'cuando-dejo-de-mentalizar',
      title: 'Cuando dejo de mentalizar',
      family: 'deconstructive',
      skills: ['attention', 'resilience'],
      summary: 'Reconocer los tres modos en que la mente deja de ver estados mentales: la certeza absoluta, los hechos como única prueba y las palabras vacías.',
      mechanism: 'Reconocer el modo no mentalizante en el momento es la señal para frenar, bajar la activación y volver a la curiosidad.',
      evidenceLevel: 'preliminar',
      evidence: [BATEMAN_2016, ALLEN_2008, LUYTEN_2020],
      howItWorks: [
        'Fonagy y Bateman describen tres modos en que dejamos de mentalizar. En la equivalencia psíquica, lo que siento es la realidad: «si me siento rechazado, es que me rechazan».',
        'En el modo teleológico, sólo cuentan los hechos visibles: «si me quisiera, vendría ya». En el modo simulado, hablamos mucho de emociones, pero sin conexión con lo que sentimos de verdad.',
        'Los tres aparecen en todos cuando el estrés es alto. No hace falta evitarlos del todo, sino darte cuenta antes. Primero se baja la activación, después se vuelve a pensar.',
      ],
      tips: [
        'Una señal de equivalencia psíquica: la certeza total y la urgencia.',
        'Una señal del modo teleológico: exigir pruebas concretas para creer en un afecto.',
        'Una señal del modo simulado: hablar y hablar sin que cambie nada por dentro.',
      ],
      obstacles: [{ q: 'Me doy cuenta tarde, cuando ya discutí.', a: 'Es el comienzo. Rebobinar después ya es mentalizar. Con la práctica, la señal llega antes.' }],
      cautions: 'Si reconoces estos modos muy a menudo y con mucha intensidad, por ejemplo con cambios bruscos en tus vínculos, vale la pena consultar: hay tratamientos que ayudan mucho.',
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Recuerda una discusión o un mal momento reciente.', durationSec: 40, kind: 'breath' },
        { title: '¿Era la realidad?', instruction: '¿Sentiste lo que pensabas como un hecho indudable? Por ejemplo: «Me odia, es así».', durationSec: 60, kind: 'reflection' },
        { title: '¿Pedías pruebas?', instruction: '¿Necesitabas que el otro hiciera algo concreto para creerle? Por ejemplo: «Si le importara, me contestaría ya».', durationSec: 60, kind: 'reflection' },
        { title: '¿Palabras vacías?', instruction: '¿Hablaste de emociones sin sentirlas, como en piloto automático?', durationSec: 45, kind: 'reflection' },
        { title: 'Tu señal', instruction: '¿Qué te avisa de que dejaste de mentalizar? Puede ser urgencia, certeza, calor o ganas de cortar.', durationSec: 60, kind: 'reflection' },
        { title: 'Tu freno', instruction: 'Elige qué harás cuando notes la señal: respirar, tomar distancia un rato o decir «dame un minuto».', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'preguntar-en-vez-de-suponer',
      title: 'Preguntar en vez de suponer',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Preparar y ensayar una conversación en la que preguntas por la mente del otro y cuentas la tuya, en lugar de dar por sabido lo que piensa.',
      mechanism: 'Preguntar con curiosidad muestra interés por la mente del otro. Eso baja la defensa y aumenta la confianza en el vínculo.',
      evidenceLevel: 'preliminar',
      evidence: [BATEMAN_2016, FONAGY_ALLISON_2014],
      howItWorks: [
        'Muchas discusiones empiezan por suponer: «ya sé lo que vas a decir». Cuando alguien siente que el otro se interesa de verdad por su mente, se abre. Fonagy y Allison llaman a esto confianza epistémica.',
        'La conversación mentalizadora tiene dos movimientos. Contar lo propio como algo tuyo: «yo sentí…, yo pensé…». Y preguntar por lo del otro sin dar nada por sabido: «¿qué te pasó a ti?».',
      ],
      tips: [
        'Elige un momento tranquilo, no en plena pelea.',
        'Una pregunta abierta vale más que tres cerradas.',
        'Si el otro se enoja, vuelve a la curiosidad: «Parece que esto te importa mucho. Cuéntame más».',
      ],
      obstacles: [{ q: 'El otro no quiere hablar.', a: 'Puedes empezar por algo chico y en otro momento. Mostrar curiosidad sin presionar ya cambia el clima.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en un malentendido con alguien cercano.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que supongo', instruction: '¿Qué das por sabido sobre lo que esa persona piensa o siente? Escríbelo.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo mío', instruction: 'Escribe lo tuyo en primera persona: «Cuando pasó…, yo sentí… y pensé…».', durationSec: 60, kind: 'reflection' },
        { title: 'Una pregunta', instruction: 'Escribe una pregunta abierta sobre su mente: «¿Cómo lo viviste tú?».', durationSec: 45, kind: 'reflection' },
        { title: 'Si se enoja', instruction: 'Prepara una frase para volver a la curiosidad si la charla se calienta.', durationSec: 45, kind: 'reflection' },
        { title: 'Ensayo', instruction: 'Di en voz baja tu frase y tu pregunta, despacio. Nota cómo suenan.', durationSec: 45, kind: 'instruction' },
      ],
    },
    {
      id: 'mentalizar-a-mi-hijo',
      title: '¿Qué le pasa por dentro?',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Ante una conducta difícil de tu hijo o hija, pensar qué podía estar sintiendo, necesitando o queriendo, antes de responder a la conducta.',
      mechanism: 'Ver la mente detrás de la conducta ayuda a responder a la necesidad. Los chicos que se sienten comprendidos aprenden a entenderse a sí mismos.',
      evidenceLevel: 'preliminar',
      evidence: [SLADE_2005, CAMOIRANO_2017],
      howItWorks: [
        'Arietta Slade llamó función reflexiva parental a la capacidad de pensar en la mente del hijo: qué siente, qué quiere, qué entiende. Se asocia a vínculos más seguros y a chicos que regulan mejor sus emociones (Camoirano, 2017).',
        'No se trata de no poner límites. Se trata de que el límite llegue junto con la comprensión: «Entiendo que estás muy enojado porque querías seguir jugando. Igual ahora vamos a cenar».',
        'Los adultos también somos parte: lo que sentimos nosotros cambia cómo vemos al chico. Por eso el primer paso es mirar tu propio estado.',
      ],
      tips: [
        'Piensa en la edad: un chico de tres años no tiene las mismas herramientas que uno de diez.',
        'No hace falta acertar. Decirle «creo que estás…» y dejar que te corrija ya enseña.',
        'Si estás muy enojado, primero ocúpate de calmarte tú.',
      ],
      obstacles: [{ q: 'Lo hace para provocarme.', a: 'A veces parece así. Detrás de la provocación suele haber una necesidad: atención, cansancio, celos, miedo. Busca esa necesidad sin dejar de poner el límite.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en una situación reciente con tu hijo o hija que te costó.', durationSec: 40, kind: 'breath' },
        { title: 'Tu estado', instruction: '¿Cómo estabas tú en ese momento? Cansado, apurado, preocupado.', durationSec: 45, kind: 'reflection' },
        { title: 'La conducta', instruction: 'Describe qué hizo, como si lo filmara una cámara.', durationSec: 45, kind: 'reflection' },
        { title: 'Por dentro', instruction: '¿Qué podía estar sintiendo o queriendo? Piensa al menos dos posibilidades.', durationSec: 60, kind: 'reflection' },
        { title: 'Ponerlo en palabras', instruction: 'Escribe una frase para decirle: «Me parece que estabas… porque…».', durationSec: 60, kind: 'reflection' },
        { title: 'El límite', instruction: 'Si hacía falta un límite, súmalo a esa frase, con calma y firmeza.', durationSec: 45, kind: 'reflection' },
      ],
    },
  ],

  meta: {
    'que-pasa-en-mi': { level: 'iniciacion', approaches: ['mentalizacion', 'mindfulness'], module: 'emociones' },
    'tres-explicaciones': { level: 'iniciacion', approaches: ['mentalizacion', 'tcc'], module: 'relaciones' },
    'cuando-dejo-de-mentalizar': { level: 'intermedio', approaches: ['mentalizacion'], module: 'relaciones', prerequisites: ['tres-explicaciones'] },
    'preguntar-en-vez-de-suponer': { level: 'intermedio', approaches: ['mentalizacion'], module: 'relaciones', prerequisites: ['tres-explicaciones'] },
    'mentalizar-a-mi-hijo': { level: 'iniciacion', approaches: ['mentalizacion'], module: 'etapas' },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'modos-no-mentalizantes',
      title: 'Cuando la mente se cierra: los modos no mentalizantes',
      subtitle: 'Certeza absoluta, pruebas concretas y palabras vacías: cómo reconocerlos y cómo volver a la curiosidad.',
      category: 'Relaciones',
      readingMin: 7,
      keyPoints: [
        'Mentalizar es entender conductas a partir de estados mentales: emociones, deseos e intenciones.',
        'Con estrés alto, todos dejamos de mentalizar y caemos en tres modos típicos.',
        'Primero se baja la activación; después se vuelve a pensar con la postura de «no saber».',
        'La confianza epistémica crece cuando sentimos que alguien se interesa de verdad por nuestra mente.',
      ],
      sections: [
        {
          heading: 'Mentalizar se apaga con el estrés',
          paragraphs: [
            'La capacidad de mentalizar no es fija. Funciona bien cuando estamos tranquilos y se apaga cuando la emoción sube mucho, sobre todo con personas cercanas. Le pasa a todo el mundo.',
            'Peter Fonagy y sus colegas muestran que esta capacidad se aprende en la infancia, cuando alguien nos ayuda a entender lo que sentimos. Quienes tuvieron menos de eso suelen perderla más rápido bajo estrés (Luyten y colaboradores, 2020).',
          ],
        },
        {
          heading: 'Tres formas de dejar de mentalizar',
          paragraphs: [
            'Equivalencia psíquica: lo que siento es la realidad. Si me siento tonto, soy tonto. Si siento que me rechazan, me rechazan. No hay distancia entre la mente y el mundo.',
            'Modo teleológico: sólo cuenta lo que se ve. El afecto se mide en acciones concretas e inmediatas: «si me quisieras, vendrías ahora». Modo simulado: se habla de emociones con muchas palabras, pero sin contacto con lo que se siente. Parece mentalizar, pero no cambia nada.',
          ],
        },
        {
          heading: 'Cómo volver',
          paragraphs: [
            'El primer paso es notar la señal: certeza, urgencia, ganas de cortar o de atacar. El segundo es bajar la activación: respirar, tomar distancia un rato o pedir un minuto. Recién entonces sirve pensar.',
            'Después llega la postura de «no saber». Preguntarse y preguntar: «¿Qué me pasó? ¿Qué le pasaba a él?». Rebobinar la escena con calma, como propone la práctica «Pausar y rebobinar».',
          ],
        },
        {
          heading: 'Confianza epistémica',
          paragraphs: [
            'Fonagy y Allison llaman confianza epistémica a la disposición a aprender de otros. Crece cuando sentimos que alguien entiende nuestra mente. Por eso, en una buena terapia, sentirse comprendido es parte del cambio.',
            'En la vida diaria pasa lo mismo. Cuando alguien siente que te interesa lo que piensa, escucha mejor lo que tienes para decir.',
          ],
        },
      ],
      caveat: {
        title: 'Qué dice la evidencia',
        body: 'El tratamiento basado en la mentalización tiene ensayos controlados en el trastorno límite de la personalidad y figura entre las terapias con evidencia en una revisión Cochrane (Storebø y colaboradores, 2020). Esa evidencia es del tratamiento completo, con terapeutas formados, no de ejercicios autoguiados.',
      },
      diagram: {
        title: 'Cómo se pierde y se recupera la mentalización',
        nodes: ['Algo activa una emoción fuerte', 'La mente se cierra (certeza, pruebas, palabras vacías)', 'Reacción automática', 'Pausa y calma del cuerpo', 'Curiosidad: ¿qué pasaba en cada mente?'],
        caption: 'La pausa y la calma vienen antes de pensar: con la emoción al máximo, mentalizar no es posible.',
      },
      related: { practices: ['cuando-dejo-de-mentalizar', 'tres-explicaciones', 'pausar-y-rebobinar', 'que-pasa-en-mi', 'preguntar-en-vez-de-suponer'], articles: ['mentalizar-en-la-vida-diaria'] },
      references: [BATEMAN_2016, ALLEN_2008, LUYTEN_2020, FONAGY_ALLISON_2014, STOREBO_2020],
    },
    {
      id: 'mentalizar-en-la-crianza',
      title: 'Pensar en la mente de tu hijo',
      subtitle: 'La función reflexiva parental: ver lo que siente detrás de lo que hace, sin dejar de poner límites.',
      category: 'Etapas de la vida',
      readingMin: 6,
      keyPoints: [
        'La función reflexiva parental es pensar qué siente, quiere y entiende el chico.',
        'Se asocia a vínculos más seguros y mejor regulación emocional de los hijos.',
        'Comprender no es dejar de poner límites: el límite llega junto con la comprensión.',
        'Equivocarse y reparar también enseña a mentalizar.',
      ],
      sections: [
        {
          heading: 'Detrás de la conducta',
          paragraphs: [
            'Un berrinche, un portazo o un silencio son conductas. Detrás hay emociones, deseos y necesidades. Arietta Slade llamó función reflexiva parental a la capacidad de pensar en eso (Slade, 2005).',
            'Los estudios muestran que esta capacidad se asocia a apegos más seguros y a chicos que regulan mejor sus emociones. También se puede entrenar: varios programas lo hacen con buenos resultados (Camoirano, 2017).',
          ],
        },
        {
          heading: 'Ponerlo en palabras',
          paragraphs: [
            'Cuando un adulto le dice al chico lo que cree que siente, lo ayuda a entenderse. «Me parece que estás triste porque se terminó la visita a la abuela.» No hace falta acertar: si el chico corrige, también aprende.',
            'Con los más chicos alcanza con nombrar la emoción. Con los más grandes se puede preguntar y escuchar. Con los adolescentes, mostrar interés sin invadir es clave.',
          ],
        },
        {
          heading: 'Comprender y poner límites',
          paragraphs: [
            'Mentalizar no es dejar hacer. El límite puede ir junto con la comprensión: «Entiendo que querías seguir jugando y estás enojado. Igual ahora vamos a cenar».',
            'También importa el estado del adulto. Cuando estamos cansados o enojados, nos cuesta ver la mente del chico. Calmarse primero no es egoísmo: es lo que permite responder mejor.',
          ],
        },
        {
          heading: 'Reparar',
          paragraphs: [
            'Ningún adulto mentaliza todo el tiempo. Lo que ayuda es volver después: «Ayer te grité. Estaba cansado y me enojé. No estuvo bien. ¿Cómo te sentiste tú?».',
            'Reparar le muestra al chico que las mentes se pueden entender, que los errores se arreglan y que el vínculo sigue en pie.',
          ],
        },
      ],
      related: { practices: ['mentalizar-a-mi-hijo', 'que-pasa-en-mi'], articles: ['modos-no-mentalizantes'] },
      references: [SLADE_2005, CAMOIRANO_2017, ALLEN_2008],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'entender-mentes',
      title: 'Entender mentes',
      subtitle: 'Tres semanas para mentalizar mejor: en ti, en los otros y en los momentos difíciles',
      description:
        'Practicarás ver lo que pasa por dentro de ti y de los demás, reconocer cuándo la mente se cierra y preguntar en lugar de suponer. Sirve para la pareja, la familia, la crianza y el trabajo.',
      basis: 'Bateman y Fonagy (2016); Allen, Fonagy y Bateman (2008); Fonagy y Allison (2014).',
      rhythm: '10 minutos, 4 o 5 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Mi mente',
          focus: 'Ponerle palabras a lo que pasa por dentro',
          description: 'Practicarás detenerte y nombrar lo que sientes, piensas y quieres, sin darlo por seguro.',
          practiceIds: ['que-pasa-en-mi'],
          articleIds: ['mentalizar-en-la-vida-diaria'],
          journalType: 'reestructuracion',
        },
        {
          title: 'Semana 2 · La mente del otro',
          focus: 'Tres explicaciones y la postura de no saber',
          description: 'Ante lo que te molesta de otros, buscarás varias explicaciones y aprenderás a reconocer cuándo la mente se cierra.',
          practiceIds: ['tres-explicaciones', 'cuando-dejo-de-mentalizar'],
          articleIds: ['modos-no-mentalizantes'],
          journalType: 'patron-repetido',
        },
        {
          title: 'Semana 3 · Entre mentes',
          focus: 'Preguntar y rebobinar',
          description: 'Prepararás una conversación en la que preguntas en lugar de suponer, y rebobinarás un malentendido.',
          practiceIds: ['preguntar-en-vez-de-suponer', 'pausar-y-rebobinar'],
          articleIds: [],
          journalType: 'conversacion',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-modos-no-mentalizantes',
      title: 'Cuando la mente se cierra',
      subtitle: 'Tres señales de que dejaste de mentalizar.',
      slides: [
        { heading: 'Nos pasa a todos', text: 'Con mucho estrés, dejamos de ver lo que pasa en las mentes. Nos quedamos con una sola idea.' },
        { heading: 'Lo siento, es así', text: 'Primera señal: lo que sientes parece la realidad. «Me siento rechazado, entonces me rechazan.»' },
        { heading: 'Quiero pruebas', text: 'Segunda señal: sólo cuentan los hechos. «Si me quisiera, vendría ahora mismo.»' },
        { heading: 'Palabras vacías', text: 'Tercera señal: hablas mucho de emociones, pero no sientes nada. Parece que entiendes, pero no cambia nada.' },
        { heading: 'Cómo volver', text: 'Primero, calma el cuerpo. Después pregúntate qué pasaba en tu mente y en la del otro.' },
      ],
      related: { practices: ['cuando-dejo-de-mentalizar', 'pausar-y-rebobinar'], articles: ['modos-no-mentalizantes'] },
      references: [BATEMAN_2016],
    },
    {
      id: 'pildora-no-saber',
      title: 'No sé lo que piensas',
      subtitle: 'La postura de no saber y por qué abre las conversaciones.',
      slides: [
        { heading: 'Suponer', text: 'Muchas peleas empiezan por suponer. «Ya sé lo que piensas.» Pero las mentes no se ven.' },
        { heading: 'No saber', text: 'La postura de no saber es simple. No dar por hecho lo que piensa el otro, ni siquiera lo que piensas tú.' },
        { heading: 'Tres razones', text: 'Cuando algo te molesta, busca tres razones posibles desde la mente del otro. No para justificar, sino para ver más.' },
        { heading: 'Preguntar', text: 'Después, pregunta. «¿Qué te pasó cuando…?» Una pregunta curiosa baja la defensa.' },
        { heading: 'Confianza', text: 'Cuando alguien siente que te interesa su mente, te escucha mejor. Eso se llama confianza epistémica.' },
      ],
      related: { practices: ['tres-explicaciones', 'preguntar-en-vez-de-suponer'], articles: ['modos-no-mentalizantes'] },
      references: [BATEMAN_2016, FONAGY_ALLISON_2014],
    },
    {
      id: 'pildora-mente-de-tu-hijo',
      title: '¿Qué le pasa por dentro?',
      subtitle: 'Ver la emoción detrás de la conducta de tu hijo.',
      slides: [
        { heading: 'Detrás de la conducta', text: 'Un berrinche o un portazo son conductas. Detrás hay una emoción o una necesidad.' },
        { heading: 'Ponerlo en palabras', text: 'Dile lo que crees que siente. «Me parece que estás triste porque se fue tu amigo.» No hace falta acertar.' },
        { heading: 'Con límites', text: 'Comprender no es dejar hacer. «Entiendo que estás enojado. Igual ahora vamos a cenar.»' },
        { heading: 'Primero tú', text: 'Si estás muy enojado o cansado, cuesta ver al chico. Calmarte primero ayuda a los dos.' },
        { heading: 'Reparar', text: 'Si te equivocas, vuelve después. Pide perdón y pregúntale cómo se sintió. Eso también enseña.' },
      ],
      related: { practices: ['mentalizar-a-mi-hijo'], articles: ['mentalizar-en-la-crianza'] },
      references: [SLADE_2005, CAMOIRANO_2017],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'equivalencia-psiquica', term: 'Equivalencia psíquica', definition: 'Modo no mentalizante en el que lo que uno siente o piensa se vive como la realidad misma: «si me siento rechazado, me rechazan».', articleId: 'modos-no-mentalizantes' },
    { id: 'modo-teleologico', term: 'Modo teleológico', definition: 'Modo no mentalizante en el que sólo cuentan los hechos visibles: el afecto se mide en acciones concretas e inmediatas.', articleId: 'modos-no-mentalizantes' },
    { id: 'modo-simulado', term: 'Modo simulado', definition: 'Modo no mentalizante en el que se habla de emociones con muchas palabras, pero sin contacto con lo que se siente.', articleId: 'modos-no-mentalizantes' },
    { id: 'postura-de-no-saber', term: 'Postura de no saber', definition: 'Actitud de curiosidad que no da por sabido lo que pasa en la mente propia ni en la ajena, y por eso pregunta.', practiceId: 'tres-explicaciones' },
    { id: 'confianza-epistemica', term: 'Confianza epistémica', definition: 'Disposición a aprender de otra persona. Crece cuando sentimos que alguien entiende nuestra mente.', articleId: 'modos-no-mentalizantes' },
    { id: 'funcion-reflexiva-parental', term: 'Función reflexiva parental', definition: 'Capacidad de un adulto de pensar en lo que siente, quiere y entiende su hijo, detrás de lo que hace.', practiceId: 'mentalizar-a-mi-hijo', articleId: 'mentalizar-en-la-crianza' },
  ],
};
