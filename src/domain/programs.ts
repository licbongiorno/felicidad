import type { JournalType } from './types';

/**
 * Programas: recorridos sugeridos de varias semanas.
 * El progreso se calcula a partir de las sesiones registradas (sin estado de inscripción):
 * una semana se considera recorrida cuando cada práctica tiene al menos una sesión completa.
 */

export interface ProgramWeek {
  title: string;
  focus: string;
  description: string;
  practiceIds: string[];
  articleIds: string[];
  journalType?: JournalType;
}

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  basis: string;
  weeks: ProgramWeek[];
  rhythm: string;
}

export const PROGRAMS: Program[] = [
  {
    id: 'fundamentos',
    title: 'Fundamentos',
    subtitle: 'Cuatro semanas, cuatro pilares del bienestar',
    description:
      'Un recorrido completo por las cuatro dimensiones entrenables del bienestar: conciencia, conexión, insight y propósito. El punto de partida recomendado.',
    basis: 'Dahl, Wilson-Mendenhall & Davidson (2020), PNAS.',
    rhythm: '10–15 minutos al día, 5 días por semana.',
    weeks: [
      {
        title: 'Semana 1 · Conciencia',
        focus: 'Saber qué hace tu mente mientras lo hace',
        description:
          'La base de todo lo demás. Entrenarás la capacidad de notar la distracción y volver, y de leer las señales del cuerpo.',
        practiceIds: ['atencion-respiracion', 'escaneo-corporal', 'respiracion-resonante'],
        articleIds: ['familias-de-practica'],
      },
      {
        title: 'Semana 2 · Conexión',
        focus: 'Aprecio, amabilidad y compasión',
        description:
          'Cultivarás deliberadamente estados que acercan: hacia otros y hacia ti. Muchas personas descubren aquí que lo más difícil es ser amables consigo mismas.',
        practiceIds: ['amor-altruista', 'pausa-autocompasion', 'tres-cosas-buenas'],
        articleIds: ['eudaimonia-y-hedonia'],
        journalType: 'tres-cosas',
      },
      {
        title: 'Semana 3 · Insight',
        focus: 'Ver los pensamientos como pensamientos',
        description:
          'Aprenderás a tomar distancia de los relatos mentales, especialmente de los que hablan de ti. Es la semana que más ayuda con la rumiación.',
        practiceIds: ['pajaros-en-el-cielo', 'anotacion-mental'],
        articleIds: ['flexibilidad-psicologica', 'rumiacion'],
        journalType: 'defusion',
      },
      {
        title: 'Semana 4 · Propósito',
        focus: 'Orientar la vida hacia lo que importa',
        description:
          'Clarificarás tus valores y los traducirás en acciones pequeñas y concretas. El cierre del programa mira hacia adelante.',
        practiceIds: ['brujula-valores', 'mejor-yo-posible', 'fortalezas'],
        articleIds: ['plasticidad-del-bienestar'],
        journalType: 'valores',
      },
    ],
  },
  {
    id: 'regulacion-emocional',
    title: 'Regulación emocional',
    subtitle: 'Tres semanas para responder en lugar de reaccionar',
    description:
      'Herramientas de abajo arriba (respiración) y de arriba abajo (atención, defusión, autocompasión) para transitar emociones intensas. Combínalo con el módulo de Antídotos.',
    basis: 'Modelo de procesos de Gross (1998); evidencia sobre respiración lenta, defusión y autocompasión.',
    rhythm: '10 minutos al día y el módulo de Antídotos cuando lo necesites.',
    weeks: [
      {
        title: 'Semana 1 · Bajar la activación',
        focus: 'El cuerpo primero',
        description: 'Practicarás en calma las técnicas de respiración para que estén disponibles cuando la emoción suba.',
        practiceIds: ['respiracion-resonante', 'suspiro-ciclico'],
        articleIds: ['antidotos-y-regulacion'],
      },
      {
        title: 'Semana 2 · Observar sin fundirse',
        focus: 'Espacio entre emoción y acción',
        description: 'Entrenarás la capacidad de ver una emoción o un pensamiento como un evento pasajero.',
        practiceIds: ['escaneo-corporal', 'pajaros-en-el-cielo'],
        articleIds: ['rumiacion'],
        journalType: 'defusion',
      },
      {
        title: 'Semana 3 · Responder con cuidado',
        focus: 'Del juicio al apoyo',
        description: 'Aprenderás a sostenerte en los momentos difíciles con la misma amabilidad que ofrecerías a otro.',
        practiceIds: ['pausa-autocompasion', 'amor-altruista'],
        articleIds: ['practica-segura'],
        journalType: 'escritura-expresiva',
      },
    ],
  },
  {
    id: 'compasion',
    title: 'Corazón abierto',
    subtitle: 'Tres semanas de entrenamiento en compasión',
    description:
      'Un camino progresivo desde la gratitud hasta la compasión activa, siguiendo la secuencia que usan los programas de entrenamiento en compasión basados en evidencia.',
    basis: 'Weng et al. (2013); Klimecki et al. (2014); Kirby et al. (2017).',
    rhythm: '15 minutos al día.',
    weeks: [
      {
        title: 'Semana 1 · Aprecio',
        focus: 'Ver lo bueno que ya está',
        description: 'Comenzarás entrenando la atención a lo que otros aportan a tu vida.',
        practiceIds: ['tres-cosas-buenas', 'saboreo'],
        articleIds: ['perma-y-psicologia-positiva'],
        journalType: 'carta-gratitud',
      },
      {
        title: 'Semana 2 · Benevolencia',
        focus: 'Desear el bien, empezando por casa',
        description: 'Cultivarás el amor altruista y la autocompasión, los dos cimientos de la compasión estable.',
        practiceIds: ['amor-altruista', 'pausa-autocompasion'],
        articleIds: ['antidotos-y-regulacion'],
      },
      {
        title: 'Semana 3 · Compasión activa',
        focus: 'Acercarse al sufrimiento sin desbordarse',
        description: 'Practicarás tonglen y aprenderás a distinguir compasión de distrés empático.',
        practiceIds: ['tonglen', 'amor-altruista'],
        articleIds: ['practica-segura'],
        journalType: 'valores',
      },
    ],
  },
  {
    id: 'ansiedad',
    title: 'Calma ante la ansiedad',
    subtitle: 'Tres semanas: del cuerpo a la mente y a la acción',
    description:
      'Primero, herramientas para bajar la activación física. Después, para tomar distancia de la preocupación. Por último, para que la ansiedad deje de decidir qué haces.',
    basis: 'Relajación (Manzoni et al., 2008); control de estímulos de la preocupación (Borkovec, 1983); aceptación y defusión (ACT).',
    rhythm: '10–15 minutos al día; el antídoto de ansiedad o preocupación cuando lo necesites.',
    weeks: [
      {
        title: 'Semana 1 · El cuerpo',
        focus: 'Bajar la activación',
        description: 'Practicarás en calma las técnicas que después usarás en los momentos de ansiedad.',
        practiceIds: ['respiracion-resonante', 'relajacion-progresiva', 'suspiro-ciclico'],
        articleIds: ['preocupacion-y-ansiedad'],
      },
      {
        title: 'Semana 2 · La mente',
        focus: 'Distancia de los «¿y si…?»',
        description: 'Aprenderás a ver la preocupación como pensamiento y a darle un lugar y un horario.',
        practiceIds: ['pajaros-en-el-cielo', 'observador'],
        articleIds: ['rumiacion'],
        journalType: 'preocupacion',
      },
      {
        title: 'Semana 3 · La acción',
        focus: 'Vivir con ansiedad, no para la ansiedad',
        description: 'Clarificarás qué quieres hacer aunque la ansiedad aparezca, y darás pasos pequeños.',
        practiceIds: ['brujula-valores', 'caminar-atencion'],
        articleIds: ['flexibilidad-psicologica'],
        journalType: 'intencion',
      },
    ],
  },
  {
    id: 'desanimo',
    title: 'Salir del desánimo',
    subtitle: 'Cuatro semanas basadas en la activación conductual',
    description:
      'Un recorrido para cuando todo cuesta: empezar por la acción pequeña, recuperar la percepción de lo bueno, tratarse con amabilidad y reconectar con lo que importa.',
    basis: 'Activación conductual (Cuijpers et al., 2007; Ekers et al., 2014); autocompasión (Kirby et al., 2017).',
    rhythm: '10 minutos al día y una actividad agendada.',
    weeks: [
      {
        title: 'Semana 1 · Moverse primero',
        focus: 'Actuar antes de tener ganas',
        description: 'Programarás actividades pequeñas de placer, logro y conexión, y registrarás cómo te sientan.',
        practiceIds: ['activacion-conductual', 'caminar-atencion'],
        articleIds: ['activacion-conductual'],
        journalType: 'activacion',
      },
      {
        title: 'Semana 2 · Ver lo que funciona',
        focus: 'Contrarrestar el filtro negativo',
        description: 'Entrenarás la atención a lo que sí sale bien, por pequeño que sea.',
        practiceIds: ['tres-cosas-buenas', 'saboreo'],
        articleIds: ['ejercicio-y-animo'],
        journalType: 'tres-cosas',
      },
      {
        title: 'Semana 3 · Amabilidad',
        focus: 'Bajar el volumen de la autocrítica',
        description: 'El desánimo suele venir con una voz interna dura. Esta semana aprenderás a responderle.',
        practiceIds: ['pausa-autocompasion'],
        articleIds: ['autocompasion'],
        journalType: 'carta-compasiva',
      },
      {
        title: 'Semana 4 · Lo que importa',
        focus: 'Dirección',
        description: 'Reconectarás con tus valores y fortalezas para orientar los próximos pasos.',
        practiceIds: ['brujula-valores', 'fortalezas'],
        articleIds: ['sentido-y-valores'],
        journalType: 'valores',
      },
    ],
  },
  {
    id: 'autocompasion',
    title: 'Amabilidad hacia ti',
    subtitle: 'Tres semanas para transformar la relación con tu crítico interno',
    description:
      'Notar la voz crítica sin creerla del todo, cultivar el sistema de cuidado y descubrir que tus dificultades te conectan con los demás en lugar de separarte.',
    basis: 'Autocompasión (Neff, 2003; Neff y Germer, 2013); terapia centrada en la compasión (Gilbert).',
    rhythm: '10–15 minutos al día.',
    weeks: [
      {
        title: 'Semana 1 · Notar al crítico',
        focus: 'Ver la autocrítica como un patrón',
        description: 'Aprenderás a reconocer la voz crítica y a examinar sus afirmaciones.',
        practiceIds: ['escaneo-corporal', 'pausa-autocompasion'],
        articleIds: ['autocompasion'],
        journalType: 'reestructuracion',
      },
      {
        title: 'Semana 2 · Cultivar el cuidado',
        focus: 'Hablarte como a alguien que quieres',
        description: 'Practicarás la benevolencia y la gratitud, y escribirás desde una voz compasiva.',
        practiceIds: ['amor-altruista', 'gratitud-contemplativa'],
        articleIds: ['granularidad-emocional'],
        journalType: 'carta-compasiva',
      },
      {
        title: 'Semana 3 · Humanidad compartida',
        focus: 'No estás solo/a en esto',
        description: 'Ampliarás el cuidado hacia los demás con estabilidad, sin agotarte.',
        practiceIds: ['ecuanimidad', 'regocijo-empatico'],
        articleIds: ['vinculos-y-soledad'],
        journalType: 'intencion',
      },
    ],
  },
  {
    id: 'sueno',
    title: 'Descanso y sueño',
    subtitle: 'Dos semanas para preparar el cuerpo y la mente para dormir',
    description:
      'Prácticas para hacer por la noche que reducen la activación física y mental, junto con las recomendaciones con mejor evidencia para el insomnio.',
    basis: 'Terapia cognitivo-conductual para el insomnio (Trauer et al., 2015); relajación muscular progresiva.',
    rhythm: 'Una práctica cada noche, 30–60 minutos antes de acostarte.',
    weeks: [
      {
        title: 'Semana 1 · Soltar el cuerpo',
        focus: 'Desactivación física',
        description: 'Relajación y respiración lenta como ritual nocturno. Prueba también el tiempo de preocupación, temprano por la tarde.',
        practiceIds: ['relajacion-progresiva', 'respiracion-resonante'],
        articleIds: ['sueno-y-bienestar'],
        journalType: 'preocupacion',
      },
      {
        title: 'Semana 2 · Aquietar la mente',
        focus: 'Atención receptiva',
        description: 'Prácticas suaves y sin esfuerzo para el momento de acostarte.',
        practiceIds: ['escaneo-corporal', 'atencion-sonidos'],
        articleIds: ['preocupacion-y-ansiedad'],
      },
    ],
  },
  {
    id: 'estres',
    title: 'Estrés y agotamiento',
    subtitle: 'Tres semanas para recuperar margen',
    description:
      'Herramientas para recuperarte a lo largo del día, ordenar la carga y cuidar de ti sin culparte por no llegar a todo.',
    basis: 'Modelo de desgaste profesional de Maslach (Maslach y Leiter, 2016); terapia de resolución de problemas (Bell y D’Zurilla, 2009).',
    rhythm: 'Herramientas rápidas varias veces al día y una práctica de 10 minutos.',
    weeks: [
      {
        title: 'Semana 1 · Recuperarte',
        focus: 'Pausas que recargan',
        description: 'Incorporarás pausas breves al día y una práctica para soltar la tensión acumulada.',
        practiceIds: ['espacio-tres-minutos', 'pausa-stop', 'relajacion-progresiva'],
        articleIds: ['estres-y-agotamiento'],
      },
      {
        title: 'Semana 2 · Ordenar la carga',
        focus: 'Del todo a lo siguiente',
        description: 'Aprenderás a sacar de la cabeza lo pendiente y a elegir el siguiente paso.',
        practiceIds: ['resolucion-problemas', 'brujula-valores'],
        articleIds: ['procrastinacion-y-perfeccionismo'],
        journalType: 'resolucion-problemas',
      },
      {
        title: 'Semana 3 · Cuidarte',
        focus: 'Sin culpa por no llegar a todo',
        description: 'Trabajarás la autocrítica que suele acompañar al agotamiento y reforzarás el descanso.',
        practiceIds: ['pausa-autocompasion', 'caminar-atencion'],
        articleIds: ['sueno-y-bienestar', 'autocompasion'],
        journalType: 'diario-sueno',
      },
    ],
  },
  {
    id: 'cuidadores',
    title: 'Cuidar sin agotarse',
    subtitle: 'Dos semanas para quien cuida de otros',
    description:
      'Para familiares que cuidan, madres y padres en situaciones exigentes y profesionales que trabajan con el sufrimiento. Pausas que recargan, compasión sin desgaste y límites sostenibles.',
    basis: 'Compasión frente a distrés empático (Klimecki et al., 2014); intervenciones para cuidadores (Sörensen et al., 2002).',
    rhythm: 'Herramientas rápidas durante el día y una práctica de 10 minutos.',
    weeks: [
      {
        title: 'Semana 1 · Recargar',
        focus: 'Cuidar también de ti',
        description: 'Pausas breves para atravesar el día y un gesto de cuidado hacia ti en los momentos difíciles.',
        practiceIds: ['mano-en-el-pecho', 'espacio-tres-minutos', 'pausa-autocompasion'],
        articleIds: ['cuidar-sin-agotarse'],
      },
      {
        title: 'Semana 2 · Compasión con estabilidad',
        focus: 'Acompañar sin cargar con todo',
        description: 'Cultivarás la compasión con ecuanimidad y prepararás las conversaciones para pedir relevos y poner límites.',
        practiceIds: ['amor-altruista', 'ecuanimidad', 'dear-man'],
        articleIds: ['asertividad-y-limites'],
        journalType: 'conversacion',
      },
    ],
  },
  {
    id: 'habilidades-dbt',
    title: 'Habilidades DBT',
    subtitle: 'Cuatro semanas, un módulo de la terapia dialéctico-conductual por semana',
    description:
      'Para quien siente las emociones con mucha intensidad o reacciona de formas que luego lamenta. Recorre los cuatro módulos de habilidades de la DBT: conciencia plena, tolerancia al malestar, regulación emocional y relaciones. No sustituye un tratamiento DBT completo.',
    basis: 'Manual de habilidades DBT (Linehan, 2015); entrenamiento en habilidades como tratamiento independiente (Valentine et al., 2015).',
    rhythm: '10 minutos al día, 5 días por semana. Ensaya en calma para tener las habilidades listas en una crisis.',
    weeks: [
      {
        title: 'Semana 1 · Conciencia plena',
        focus: 'Encontrar la mente sabia',
        description: 'La base de los demás módulos. Aprenderás a notar la emoción y los hechos a la vez, y a hacer una pausa antes de reaccionar.',
        practiceIds: ['mente-sabia', 'pausa-stop'],
        articleIds: ['habilidades-dbt'],
        journalType: 'tarjeta-diaria',
      },
      {
        title: 'Semana 2 · Tolerancia al malestar',
        focus: 'Atravesar una crisis sin empeorarla',
        description: 'Prepararás tu kit de crisis: herramientas para bajar la activación, calmarte, frenar un impulso y aceptar lo que no puedes cambiar.',
        practiceIds: ['tipp', 'cinco-sentidos', 'pros-y-contras', 'aceptacion-radical'],
        articleIds: ['kit-de-crisis'],
      },
      {
        title: 'Semana 3 · Regulación emocional',
        focus: 'Entender y cambiar las emociones que no ayudan',
        description: 'Revisarás si tus emociones encajan con los hechos, practicarás la acción opuesta y cuidarás el cuerpo para estar menos vulnerable.',
        practiceIds: ['comprobar-hechos', 'accion-opuesta', 'please'],
        articleIds: ['antidotos-y-regulacion'],
        journalType: 'analisis-cadena',
      },
      {
        title: 'Semana 4 · Efectividad interpersonal',
        focus: 'Pedir, poner límites y cuidar el vínculo',
        description: 'Prepararás conversaciones difíciles equilibrando tres objetivos: lo que pides, la relación y tu respeto propio.',
        practiceIds: ['dear-man', 'give-fast'],
        articleIds: ['asertividad-y-limites'],
        journalType: 'conversacion',
      },
    ],
  },
];

export const PROGRAM_BY_ID: Record<string, Program> = Object.fromEntries(PROGRAMS.map((p) => [p.id, p]));

/** Progreso por semana a partir de los ids de práctica completados. */
export function programProgress(program: Program, completedPracticeIds: Set<string>) {
  const weeks = program.weeks.map((w) => {
    const done = w.practiceIds.filter((id) => completedPracticeIds.has(id)).length;
    return { done, total: w.practiceIds.length, complete: done === w.practiceIds.length };
  });
  const done = weeks.reduce((s, w) => s + w.done, 0);
  const total = weeks.reduce((s, w) => s + w.total, 0);
  const currentWeek = Math.max(0, weeks.findIndex((w) => !w.complete));
  return { weeks, done, total, ratio: total ? done / total : 0, currentWeek: weeks.every((w) => w.complete) ? weeks.length - 1 : currentWeek };
}
