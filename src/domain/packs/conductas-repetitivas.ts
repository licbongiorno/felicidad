import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Conductas repetitivas centradas en el cuerpo»: arrancarse el pelo (tricotilomanía),
 * pellizcarse la piel (dermatilomanía) y morderse las uñas (onicofagia).
 *  - qué son, por qué se mantienen (alivio de tensión, aburrimiento, conducta automática o focalizada);
 *  - inversión del hábito (Azrin y Nunn, 1973; Bate y colaboradores, 2011): entrenamiento en
 *    conciencia, respuesta competidora, control de estímulos y apoyo social;
 *  - aceptación de los impulsos y autocompasión frente a la vergüenza (Woods y Twohig, 2008; Neff, 2003);
 *  - cuándo consultar: lesiones, infecciones o caída de pelo que preocupa → médico o dermatólogo;
 *    angustia o mucho tiempo perdido → profesional de salud mental.
 *
 * Seguridad: no son autolesiones con intención de hacerse daño, pero si alguien se lastima a
 * propósito para calmar un dolor emocional, se deriva al paquete «autolesiones». No se dan
 * datos de prevalencia ni se indican medicamentos.
 */

// ------------------------------------------------------------ referencias
const AZRIN_1973: Reference = {
  citation: 'Azrin, N. H., & Nunn, R. G. (1973). Habit-reversal: A method of eliminating nervous habits and tics. Behaviour Research and Therapy, 11(4), 619–628.',
};
const BATE_2011: Reference = {
  citation:
    'Bate, K. S., Malouff, J. M., Thorsteinsson, E. T., & Bhullar, N. (2011). The efficacy of habit reversal therapy for tics, habit disorders, and stuttering: A meta-analytic review. Clinical Psychology Review, 31(5), 865–871.',
};
const WOODS_2008: Reference = {
  citation: 'Woods, D. W., & Twohig, M. P. (2008). Trichotillomania: An ACT-enhanced behavior therapy approach. Therapist guide. Oxford University Press.',
};
const GRANT_2016: Reference = {
  citation: 'Grant, J. E., & Chamberlain, S. R. (2016). Trichotillomania. American Journal of Psychiatry, 173(9), 868–874.',
};
const NEFF_2003: Reference = {
  citation: 'Neff, K. D. (2003). Self-compassion: An alternative conceptualization of a healthy attitude toward oneself. Self and Identity, 2(2), 85–101.',
};

/** Aviso común: cuándo consultar. */
const CONSULTA =
  'Si hay heridas que no cierran, piel enrojecida, caliente o con pus, o una caída de pelo que te preocupa, consulta a un médico o dermatólogo. Si el hábito te quita mucho tiempo o te angustia, un profesional de salud mental con formación en inversión del hábito puede ayudarte. Si te lastimas a propósito para calmar un dolor emocional, o aparecen ideas de morir, pide ayuda: 135 (CABA y GBA; resto del país 0800-345-1435), 0800-999-0091 o 911.';

export const CONDUCTAS_REPETITIVAS_PACK: ContentPack = {
  id: 'conductas-repetitivas',

  // ================================================================== prácticas
  practices: [
    {
      id: 'registro-del-habito',
      title: 'Registrar el hábito',
      family: 'attentional',
      skills: ['attention'],
      summary: 'Anotar cuándo, dónde y con qué emoción aparece el hábito de arrancarte el pelo, pellizcarte la piel o morderte las uñas, para verlo venir.',
      mechanism: 'Muchas veces el hábito pasa sin que te des cuenta. Registrarlo lo vuelve visible y muestra los momentos de riesgo. Es el primer paso de la inversión del hábito.',
      evidenceLevel: 'moderada',
      evidence: [AZRIN_1973, BATE_2011, WOODS_2008],
      cautions: CONSULTA,
      howItWorks: [
        'La inversión del hábito empieza por la conciencia. Antes de cambiar algo hay que notarlo. Azrin y Nunn (1973) propusieron registrar cada vez que aparece el hábito y las señales que lo anuncian.',
        'Hay dos formas típicas. A veces el hábito es automático: pasa mientras lees, miras el celular o manejas, sin que lo notes. Otras veces es focalizado: buscas el pelo o la zona de la piel para calmar una tensión o una sensación (Woods y Twohig, 2008).',
        'El registro muestra patrones: horas, lugares, posturas, emociones. Con esos datos se arman las barreras y la respuesta competidora.',
      ],
      tips: [
        'Anota apenas puedas, aunque sea con una palabra en el celular.',
        'No anotes sólo el hábito. Anota también las ganas que no seguiste.',
        'Registra una semana sin intentar cambiar nada. Primero se mira.',
      ],
      obstacles: [
        { q: 'Me doy cuenta cuando ya lo hice.', a: 'Es lo más común al principio. Anota igual. Con los días vas a notar antes las señales, como la mano que se acerca a la cara.' },
        { q: 'Me da vergüenza ver cuántas veces pasa.', a: 'Míralo como un dato, no como una nota sobre ti. Saber cuántas veces pasa te ayuda a medir el avance.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Siéntate con calma. Respira despacio dos o tres veces.', durationSec: 30, kind: 'breath' },
        { title: 'La última vez', instruction: 'Recuerda la última vez que pasó. ¿A qué hora era? ¿Dónde estabas?', durationSec: 45, kind: 'reflection' },
        { title: 'Qué hacías', instruction: '¿Qué estabas haciendo? Leer, mirar el celular, estudiar, esperar. ¿En qué postura estabas?', durationSec: 45, kind: 'reflection' },
        { title: 'Qué sentías', instruction: '¿Qué emoción había? Puede ser tensión, aburrimiento, nervios, cansancio o enojo. Ponle un nombre.', durationSec: 45, kind: 'reflection' },
        { title: 'La señal', instruction: '¿Qué pasó justo antes? Una picazón, una sensación en los dedos, buscar con la mano. Anota la primera señal.', durationSec: 45, kind: 'reflection' },
        { title: 'Después', instruction: '¿Qué sentiste después? Alivio, calma, culpa o vergüenza. Anota lo que haya, sin juzgarte.', durationSec: 40, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Elige cómo vas a registrar esta semana. Puede ser una nota en el celular o un papel a mano.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'respuesta-competidora',
      title: 'La respuesta competidora',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Elegir y ensayar un gesto con las manos que no se puede hacer a la vez que el hábito, para usarlo cuando aparecen las ganas.',
      mechanism: 'Si las manos están ocupadas en otra cosa, el hábito no puede pasar. Mantener ese gesto un minuto da tiempo a que las ganas bajen.',
      evidenceLevel: 'moderada',
      evidence: [AZRIN_1973, BATE_2011, WOODS_2008],
      cautions: CONSULTA,
      howItWorks: [
        'La respuesta competidora es el centro de la inversión del hábito. Es un gesto que no se puede hacer a la vez que el hábito. Por ejemplo, cerrar los puños con suavidad o apoyar las manos sobre los muslos (Azrin y Nunn, 1973).',
        'Conviene que sea discreto, para usarlo en cualquier lugar, y que dure un minuto o hasta que las ganas bajen. Una revisión de muchos estudios encontró que la inversión del hábito ayuda en estos hábitos y en los tics (Bate y colaboradores, 2011).',
        'Se ensaya primero en calma. Así, cuando llegan las ganas, el gesto ya sale casi solo.',
      ],
      tips: [
        'Elige un gesto que puedas hacer en el trabajo, en el colectivo o en la cama.',
        'Mantén el gesto un minuto, aunque las ganas bajen antes.',
        'Ensaya varias veces por día, sobre todo en tus momentos de riesgo.',
      ],
      obstacles: [
        { q: 'Se me olvida usarlo.', a: 'Es normal al principio. Pon recordatorios en los lugares de riesgo, como una nota en el escritorio o en el espejo.' },
        { q: 'Las ganas vuelven al rato.', a: 'Vuelve a hacer el gesto. Cada vez que las ganas pasan sin el hábito, el lazo entre ambas cosas se afloja.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Siéntate con calma. Apoya las manos sobre las piernas y respira despacio.', durationSec: 30, kind: 'breath' },
        { title: 'Mirar el hábito', instruction: 'Piensa qué hacen tus manos cuando aparece el hábito. ¿Adónde van? ¿Qué movimiento hacen?', durationSec: 45, kind: 'reflection' },
        { title: 'Elegir el gesto', instruction: 'Elige un gesto que lo impida. Puede ser cerrar los puños suave, entrelazar los dedos o apretar un objeto blando.', durationSec: 45, kind: 'reflection' },
        { title: 'Ensayar', instruction: 'Haz ese gesto ahora. Mantenlo un minuto. Nota la fuerza justa en las manos, sin apretar de más.', durationSec: 60, kind: 'instruction' },
        { title: 'Imaginar', instruction: 'Imagina un momento de riesgo. Siente que la mano empieza a moverse. Haz el gesto y respira.', durationSec: 60, kind: 'instruction' },
        { title: 'Cerrar', instruction: 'Anota tu gesto y dónde lo vas a usar. Ensáyalo otra vez antes de dormir.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'control-de-estimulos-del-habito',
      title: 'Preparar el entorno contra el hábito',
      family: 'constructive',
      skills: ['resilience'],
      summary: 'Poner barreras simples, como guantes, curitas, uñas cortas u objetos para las manos, y sumar el apoyo de alguien de confianza.',
      mechanism: 'Cambiar el entorno hace que el hábito cueste más y llegue más tarde. Eso da tiempo para notarlo y usar la respuesta competidora.',
      evidenceLevel: 'moderada',
      evidence: [AZRIN_1973, WOODS_2008, BATE_2011],
      cautions: CONSULTA,
      howItWorks: [
        'El control de estímulos busca que el hábito sea más difícil en los lugares y momentos de riesgo. No depende de la fuerza de voluntad (Woods y Twohig, 2008).',
        'Hay barreras para las manos: guantes finos, curitas en los dedos, uñas cortas y limadas. Hay objetos para tener las manos ocupadas, como una pelotita blanda o algo con textura. Y hay cambios en el lugar: menos luz frente al espejo, no usar lupa, dejar el celular lejos de la cama.',
        'El apoyo social también ayuda. Azrin y Nunn (1973) incluían a una persona cercana que reconocía los avances. La idea es que te alienten, no que te controlen.',
      ],
      tips: [
        'Usa tu registro para saber dónde poner cada barrera.',
        'Deja los objetos para las manos donde más pasa el hábito: el sillón, el escritorio, la cama.',
        'Pide a alguien de confianza que te felicite por los avances, no que te marque cada error.',
      ],
      obstacles: [
        { q: 'Me da vergüenza usar guantes o curitas.', a: 'Usa las barreras en casa, donde nadie te ve. Afuera puedes elegir otras, como tener algo en las manos.' },
        { q: 'No quiero que nadie me esté mirando las manos.', a: 'Acuerda con esa persona cómo te ayuda. Puede ser sólo preguntarte cómo te fue en la semana.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Ten a mano tu registro del hábito, si lo hiciste.', durationSec: 30, kind: 'breath' },
        { title: 'Lugares de riesgo', instruction: 'Anota los dos o tres lugares donde más pasa el hábito. Por ejemplo, el baño, la cama o el escritorio.', durationSec: 45, kind: 'reflection' },
        { title: 'Barreras para las manos', instruction: 'Elige una barrera para las manos. Pueden ser guantes finos, curitas en los dedos o uñas cortas y limadas.', durationSec: 45, kind: 'reflection' },
        { title: 'Manos ocupadas', instruction: 'Elige un objeto para tener en las manos. Una pelotita blanda, algo con textura o una lapicera. Anota dónde lo vas a dejar.', durationSec: 45, kind: 'reflection' },
        { title: 'Cambiar el lugar', instruction: 'Piensa un cambio en el lugar de riesgo. Menos luz frente al espejo, guardar la pinza o dejar el celular lejos.', durationSec: 45, kind: 'reflection' },
        { title: 'Apoyo', instruction: 'Piensa en alguien de confianza. ¿Qué le pedirías? Por ejemplo, que te pregunte cómo te fue o que celebre un buen día.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Elige una barrera para poner hoy mismo. Anota cuál es.', durationSec: 25, kind: 'instruction' },
      ],
    },
    {
      id: 'manos-en-pausa',
      title: 'Manos en pausa',
      family: 'attentional',
      skills: ['attention', 'resilience'],
      summary: 'Una herramienta de dos minutos para el momento en que aparecen las ganas: notar la señal, ocupar las manos y dejar que el impulso baje.',
      mechanism: 'Observar las ganas sin seguirlas, mientras las manos hacen la respuesta competidora, debilita el lazo entre el impulso y el hábito.',
      evidenceLevel: 'preliminar',
      evidence: [WOODS_2008, AZRIN_1973],
      cautions: CONSULTA,
      micro: true,
      howItWorks: [
        'Las ganas de tocar el pelo, la piel o las uñas suben, llegan a un pico y bajan. Si no las sigues, pasan solas.',
        'El enfoque de Woods y Twohig (2008) suma a la inversión del hábito la aceptación: dejar que la sensación esté, sin pelear con ella, mientras eliges qué hacer con las manos.',
      ],
      tips: [
        'Úsala apenas notes la primera señal, no cuando ya empezaste.',
        'Si ya empezaste, para igual. Nunca es tarde para frenar.',
        'Ten tu objeto para las manos cerca.',
      ],
      obstacles: [{ q: 'La sensación es muy fuerte.', a: 'Está bien que sea fuerte. No tienes que hacerla desaparecer. Sólo mantén el gesto y respira. Si no baja, cambia de lugar.' }],
      steps: [
        { title: 'Notar', instruction: 'Nota la señal. La mano que se acerca, la picazón, las ganas. Di por dentro: «Aparecieron las ganas».', durationSec: 20, kind: 'instruction' },
        { title: 'Ocupar las manos', instruction: 'Haz tu respuesta competidora. Cierra los puños suave o toma tu objeto. Mantenlo.', durationSec: 30, kind: 'instruction' },
        { title: 'Sentir la ola', instruction: 'Sin soltar el gesto, nota dónde están las ganas. Déjalas subir como una ola.', durationSec: 30, kind: 'breath' },
        { title: 'Respirar', instruction: 'Respira despacio. Suelta el aire más largo de lo que lo tomas. Las ganas suben y bajan.', durationSec: 30, kind: 'breath' },
        { title: 'Elegir', instruction: 'Suelta las manos con calma. Elige qué hacer ahora: levantarte, tomar agua o seguir con lo tuyo.', durationSec: 20, kind: 'reflection' },
      ],
    },
    {
      id: 'compasion-ante-el-habito',
      title: 'Amabilidad frente a la vergüenza',
      family: 'constructive',
      skills: ['compassion'],
      summary: 'Responder con amabilidad, y no con reproches, cuando el hábito vuelve o cuando te miras al espejo con vergüenza.',
      mechanism: 'La vergüenza y la autocrítica aumentan la tensión, y la tensión alimenta el hábito. Tratarte con cuidado baja esa tensión y ayuda a seguir intentando.',
      evidenceLevel: 'preliminar',
      evidence: [NEFF_2003, WOODS_2008],
      cautions: CONSULTA,
      howItWorks: [
        'Muchas personas con estos hábitos sienten mucha vergüenza. Esconden las manos, el pelo o la piel, y se retan cada vez que pasa. Ese reto suele sumar tensión, y la tensión vuelve a disparar el hábito (Woods y Twohig, 2008).',
        'La autocompasión tiene tres partes: notar el dolor, recordar que no eres la única persona que pasa por esto y hablarte con amabilidad (Neff, 2003). No es resignarse. Es la base para volver a intentar.',
      ],
      tips: [
        'Usa esta práctica justo después de un mal momento con el hábito.',
        'Háblate como le hablarías a una amiga o un amigo que quieres.',
        'Un tropiezo no borra lo que ya avanzaste.',
      ],
      obstacles: [{ q: 'Siento que no merezco tratarme bien.', a: 'Es una idea muy común cuando hay vergüenza. Prueba igual, aunque no lo creas del todo. La amabilidad se entrena.' }],
      steps: [
        { title: 'Llegar', instruction: 'Pon una mano en el pecho o donde te dé calma. Respira despacio.', durationSec: 30, kind: 'breath' },
        { title: 'Notar', instruction: 'Nota lo que sientes. Puede ser vergüenza, enojo contigo o tristeza. Dite: «Esto es difícil».', durationSec: 40, kind: 'reflection' },
        { title: 'No es sólo tuyo', instruction: 'Recuerda que muchas personas tienen este hábito. No es falta de voluntad ni un defecto tuyo.', durationSec: 40, kind: 'reflection' },
        { title: 'Lo que te dices', instruction: '¿Qué te dices cuando el hábito vuelve? Escribe la frase tal como suena.', durationSec: 45, kind: 'reflection' },
        { title: 'Otra voz', instruction: 'Escribe lo que te diría alguien que te quiere. Por ejemplo: «Fue un mal momento. Puedo volver a intentar».', durationSec: 60, kind: 'reflection' },
        { title: 'Un cuidado', instruction: 'Elige un cuidado para hoy. Lavar y cuidar la piel, ponerte crema o descansar un rato.', durationSec: 30, kind: 'instruction' },
      ],
    },
  ],

  meta: {
    'registro-del-habito': { level: 'iniciacion', approaches: ['tcc'], module: 'habitos' },
    'respuesta-competidora': { level: 'intermedio', approaches: ['tcc'], module: 'habitos', prerequisites: ['registro-del-habito'] },
    'control-de-estimulos-del-habito': { level: 'iniciacion', approaches: ['tcc'], module: 'habitos' },
    'manos-en-pausa': { level: 'intermedio', approaches: ['tcc', 'act', 'mindfulness'], module: 'habitos', prerequisites: ['respuesta-competidora'] },
    'compasion-ante-el-habito': { level: 'iniciacion', approaches: ['cft'], module: 'habitos' },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'habitos-repetitivos-del-cuerpo',
      title: 'Arrancarse el pelo, pellizcarse la piel, morderse las uñas',
      subtitle: 'Qué son las conductas repetitivas centradas en el cuerpo, cómo funciona la inversión del hábito y cuándo consultar.',
      category: 'Hábitos y cuerpo',
      readingMin: 7,
      keyPoints: [
        'Arrancarse el pelo, pellizcarse la piel y morderse las uñas son conductas repetitivas centradas en el cuerpo. No son falta de voluntad.',
        'Suelen calmar una tensión, el aburrimiento o una sensación molesta. El alivio es breve y después llegan la culpa o la vergüenza.',
        'La inversión del hábito tiene evidencia: conciencia, respuesta competidora, control de estímulos y apoyo.',
        'La vergüenza alimenta el ciclo. La amabilidad con uno mismo ayuda a sostener el cambio.',
        'Si hay heridas, infecciones o caída de pelo que preocupa, consulta a un médico o dermatólogo.',
      ],
      sections: [
        {
          heading: 'Qué son',
          paragraphs: [
            'Son hábitos que se repiten sobre el propio cuerpo y cuesta mucho dejar. Arrancarse el pelo se llama tricotilomanía. Pellizcarse o rascarse la piel, dermatilomanía. Morderse las uñas, onicofagia.',
            'Cuando el hábito causa daño, quita mucho tiempo o trae angustia, y cuesta frenarlo aunque se intente, puede ser un problema de salud que se trata (Grant y Chamberlain, 2016). No es una manía ni algo que se hace para llamar la atención.',
          ],
        },
        {
          heading: 'Por qué se mantienen',
          paragraphs: [
            'El hábito suele calmar algo: tensión, nervios, aburrimiento, cansancio o una sensación en la piel. Ese alivio rápido hace que se repita. Después suelen llegar la culpa, la vergüenza y las ganas de esconder.',
            'A veces el hábito es automático y pasa sin que lo notes, por ejemplo leyendo o con el celular. Otras veces es focalizado: buscas el pelo o la piel para sentir alivio (Woods y Twohig, 2008). Muchas personas tienen las dos formas.',
          ],
        },
        {
          heading: 'La inversión del hábito',
          paragraphs: [
            'Nathan Azrin y Gregory Nunn (1973) propusieron un método con varias partes. Primero, la conciencia: registrar cuándo, dónde y con qué emoción aparece el hábito, y cuál es la primera señal.',
            'Segundo, la respuesta competidora: un gesto que no se puede hacer a la vez que el hábito, como cerrar los puños con suavidad durante un minuto. Tercero, el apoyo social: alguien cercano que reconoce los avances.',
            'Una revisión de muchos estudios encontró que la inversión del hábito ayuda en estos hábitos, en los tics y en la tartamudez (Bate y colaboradores, 2011).',
          ],
        },
        {
          heading: 'Preparar el entorno',
          paragraphs: [
            'El control de estímulos hace que el hábito cueste más en los lugares de riesgo. Guantes finos o curitas en los dedos, uñas cortas, un objeto para tener las manos ocupadas, menos luz frente al espejo, dejar el celular lejos de la cama.',
            'Estas barreras no dependen de la fuerza de voluntad. Dan tiempo para notar las ganas y usar la respuesta competidora.',
          ],
        },
        {
          heading: 'Vergüenza y amabilidad',
          paragraphs: [
            'La vergüenza es muy común. Lleva a esconder, a evitar la playa, la peluquería o las fotos, y a retarse cada vez que el hábito vuelve. El reto suma tensión, y la tensión dispara el hábito otra vez.',
            'El enfoque de Woods y Twohig (2008) suma aceptación: dejar que las ganas estén sin pelear con ellas, y actuar según lo que te importa. Tratarte con amabilidad no es rendirte. Es lo que te permite volver a intentar (Neff, 2003).',
          ],
        },
        {
          heading: 'Cuándo consultar',
          paragraphs: [
            'Consulta a un médico o dermatólogo si hay heridas que no cierran, piel enrojecida o con pus, o una zona sin pelo que te preocupa. Un profesional de salud mental con formación en inversión del hábito puede acompañarte si el hábito te quita tiempo o te angustia.',
            'Si te lastimas a propósito para calmar un dolor emocional, es otra situación y también tiene ayuda. Si aparecen ideas de morir, llama al 135, al 0800-999-0091 o al 911, o usa el botón Ayuda de la app.',
          ],
        },
      ],
      caveat: {
        title: 'Lo que este artículo no hace',
        body: 'Informa y ofrece herramientas de autoayuda. No reemplaza una consulta ni indica medicamentos. Si el hábito causa heridas o infecciones, o viene con mucha angustia, busca ayuda profesional.',
      },
      diagram: {
        title: 'Cómo se mantiene el hábito',
        nodes: ['Señal: tensión, aburrimiento o una sensación', 'Ganas', 'Hábito', 'Alivio breve', 'Culpa, vergüenza y más tensión'],
        caption: 'Notar la señal, ocupar las manos y tratarte con amabilidad cortan el ciclo.',
      },
      related: {
        practices: ['registro-del-habito', 'respuesta-competidora', 'control-de-estimulos-del-habito', 'manos-en-pausa', 'compasion-ante-el-habito', 'surfear-impulso'],
        articles: ['autocompasion', 'lastimarse-para-aguantar'],
      },
      references: [AZRIN_1973, BATE_2011, WOODS_2008, GRANT_2016, NEFF_2003],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'soltar-el-habito',
      title: 'Soltar el hábito',
      subtitle: 'Cuatro semanas de inversión del hábito para el pelo, la piel o las uñas',
      description:
        'Registrarás el hábito, prepararás tu entorno, aprenderás una respuesta competidora y practicarás tratarte con amabilidad cuando haya tropiezos. No reemplaza una consulta. Si hay heridas o infecciones, consulta a un médico o dermatólogo.',
      basis: 'Azrin y Nunn (1973); Bate y colaboradores (2011); Woods y Twohig (2008).',
      rhythm: '10 minutos, 5 días por semana, y la herramienta rápida cada vez que aparezcan las ganas.',
      weeks: [
        {
          title: 'Semana 1 · Notar',
          focus: 'Conciencia del hábito',
          description: 'Leerás sobre estos hábitos y registrarás cuándo, dónde y con qué emoción aparecen.',
          practiceIds: ['registro-del-habito'],
          articleIds: ['habitos-repetitivos-del-cuerpo'],
          journalType: 'intencion',
        },
        {
          title: 'Semana 2 · Preparar',
          focus: 'Barreras y apoyo',
          description: 'Pondrás barreras en tus lugares de riesgo y elegirás a alguien que te apoye.',
          practiceIds: ['control-de-estimulos-del-habito', 'registro-del-habito'],
          articleIds: [],
          journalType: 'intencion',
        },
        {
          title: 'Semana 3 · Responder',
          focus: 'La respuesta competidora',
          description: 'Elegirás un gesto para tus manos, lo ensayarás en calma y lo usarás cuando aparezcan las ganas.',
          practiceIds: ['respuesta-competidora', 'manos-en-pausa'],
          articleIds: [],
        },
        {
          title: 'Semana 4 · Sostener',
          focus: 'Amabilidad frente a los tropiezos',
          description: 'Practicarás responder a la vergüenza con amabilidad y seguirás usando tus herramientas.',
          practiceIds: ['compasion-ante-el-habito', 'manos-en-pausa', 'pausa-autocompasion'],
          articleIds: [],
          journalType: 'carta-compasiva',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-habitos-del-cuerpo',
      title: 'Pelo, piel y uñas',
      subtitle: 'Hábitos que cuesta dejar, y no por falta de ganas.',
      slides: [
        { heading: 'No es una manía', text: 'Arrancarse el pelo, pellizcarse la piel o morderse las uñas son hábitos que cuesta mucho dejar. No es falta de voluntad.' },
        { heading: 'Calman algo', text: 'Suelen calmar tensión, nervios o aburrimiento. El alivio dura poco. Después llegan la culpa y la vergüenza.' },
        { heading: 'Sin darte cuenta', text: 'A veces pasa sin que lo notes, mientras lees o miras el celular. Otras veces lo buscas para calmarte.' },
        { heading: 'Tiene tratamiento', text: 'La inversión del hábito tiene buena evidencia. Se aprende a notar la señal y a ocupar las manos.' },
        { heading: 'Cuándo consultar', text: 'Si hay heridas, infecciones o caída de pelo que te preocupa, consulta a un médico o dermatólogo.' },
      ],
      related: { practices: ['registro-del-habito'], articles: ['habitos-repetitivos-del-cuerpo'] },
      references: [GRANT_2016, WOODS_2008],
    },
    {
      id: 'pildora-inversion-del-habito',
      title: 'Invertir el hábito',
      subtitle: 'Cuatro pasos para frenar el pelo, la piel o las uñas.',
      slides: [
        { heading: 'Notar', text: 'Anota cuándo, dónde y con qué emoción aparece el hábito. Busca la primera señal, como la mano que sube.' },
        { heading: 'Ocupar las manos', text: 'Elige un gesto que impida el hábito. Por ejemplo, cerrar los puños suave. Mantenlo un minuto.' },
        { heading: 'Poner barreras', text: 'Guantes finos, curitas en los dedos, uñas cortas o algo para tener en las manos. Ponlos donde más pasa.' },
        { heading: 'Sumar apoyo', text: 'Pide a alguien de confianza que celebre tus avances. Que te aliente, no que te controle.' },
        { heading: 'Con paciencia', text: 'Habrá días buenos y días malos. Cada vez que las ganas pasan sin el hábito, el lazo se afloja.' },
      ],
      related: { practices: ['respuesta-competidora', 'control-de-estimulos-del-habito', 'manos-en-pausa'], articles: ['habitos-repetitivos-del-cuerpo'] },
      references: [AZRIN_1973, BATE_2011],
    },
    {
      id: 'pildora-verguenza-y-habito',
      title: 'La vergüenza no ayuda',
      subtitle: 'Por qué retarte empeora el hábito.',
      slides: [
        { heading: 'Esconder', text: 'Mucha gente esconde las manos, el pelo o la piel. Evita fotos, la playa o la peluquería.' },
        { heading: 'El reto', text: 'Retarte cada vez que el hábito vuelve suma tensión. Y la tensión es una de las señales que lo disparan.' },
        { heading: 'No es sólo tuyo', text: 'Muchas personas tienen este hábito. No eres la única persona que pasa por esto.' },
        { heading: 'Otra voz', text: 'Prueba decirte: «Fue un mal momento. Puedo volver a intentar». Como le hablarías a alguien que quieres.' },
        { heading: 'Cuidar', text: 'Después de un tropiezo, cuida tu piel o tu pelo con calma. Cuidarte también es parte del cambio.' },
      ],
      related: { practices: ['compasion-ante-el-habito', 'pausa-autocompasion'], articles: ['habitos-repetitivos-del-cuerpo'] },
      references: [NEFF_2003, WOODS_2008],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'conducta-repetitiva-centrada-en-el-cuerpo', term: 'Conducta repetitiva centrada en el cuerpo', definition: 'Hábito que se repite sobre el propio cuerpo y cuesta dejar, como arrancarse el pelo, pellizcarse la piel o morderse las uñas.', articleId: 'habitos-repetitivos-del-cuerpo' },
    { id: 'tricotilomania', term: 'Tricotilomanía', definition: 'Arrancarse el pelo de forma repetida, con dificultad para frenar y con daño o angustia.', articleId: 'habitos-repetitivos-del-cuerpo' },
    { id: 'dermatilomania', term: 'Dermatilomanía', definition: 'Pellizcarse o rascarse la piel de forma repetida, hasta causar lesiones, con dificultad para frenar.', articleId: 'habitos-repetitivos-del-cuerpo' },
    { id: 'onicofagia', term: 'Onicofagia', definition: 'Morderse las uñas o la piel de alrededor de forma repetida.', articleId: 'habitos-repetitivos-del-cuerpo' },
    { id: 'inversion-del-habito', term: 'Inversión del hábito', definition: 'Método de Azrin y Nunn para frenar hábitos y tics: conciencia del hábito, respuesta competidora, control de estímulos y apoyo social.', practiceId: 'registro-del-habito' },
    { id: 'respuesta-incompatible', term: 'Respuesta competidora', definition: 'Gesto que no se puede hacer a la vez que el hábito, como cerrar los puños con suavidad, que se mantiene hasta que las ganas bajan.', practiceId: 'respuesta-competidora' },
  ],
};
