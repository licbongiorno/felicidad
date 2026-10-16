import type { JournalType } from './types';
import { PACK_PROGRAMS } from './packs';

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

const BASE_PROGRAMS: Program[] = [
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
  {
    id: 'dormir-mejor',
    title: 'Dormir mejor',
    subtitle: 'Cuatro semanas basadas en la terapia cognitivo-conductual para el insomnio',
    description:
      'Para quien tarda en dormirse, se despierta de noche o se levanta cansado/a desde hace semanas. Aplica los principios de la TCC-I: registrar el sueño, recuperar la cama para dormir, revisar los pensamientos sobre el sueño y bajar la activación. Puedes medir tu avance con el cuestionario ISI.',
    basis: 'Terapia cognitivo-conductual para el insomnio (Trauer et al., 2015; Edinger et al., 2021).',
    rhythm: 'Diario de sueño cada mañana y una práctica de relajación de 10 minutos antes de dormir.',
    weeks: [
      {
        title: 'Semana 1 · Ver tu sueño real',
        focus: 'Registrar antes de cambiar',
        description: 'Llevarás el diario de sueño cada mañana y empezarás una rutina de relajación antes de acostarte. Todavía no cambies horarios: primero, mira el patrón.',
        practiceIds: ['relajacion-progresiva'],
        articleIds: ['insomnio-tcc'],
        journalType: 'diario-sueno',
      },
      {
        title: 'Semana 2 · La cama, para dormir',
        focus: 'Control de estímulos y horario fijo',
        description: 'Te levantarás a la misma hora todos los días, irás a la cama sólo con sueño y, si no te duermes, saldrás de la cama hasta tener sueño. Es la semana más exigente.',
        practiceIds: ['respiracion-resonante'],
        articleIds: ['sueno-y-bienestar'],
        journalType: 'diario-sueno',
      },
      {
        title: 'Semana 3 · Pensamientos sobre el sueño',
        focus: 'Dejar de pelear con el insomnio',
        description: 'Revisarás las ideas que te activan por la noche («si no duermo, mañana será un desastre») y dejarás las preocupaciones para un momento del día.',
        practiceIds: ['pajaros-en-el-cielo'],
        articleIds: ['preocupacion-y-ansiedad'],
        journalType: 'reestructuracion',
      },
      {
        title: 'Semana 4 · Consolidar',
        focus: 'Mantener lo que funciona',
        description: 'Mantendrás el horario y las rutinas que te ayudaron y aprenderás qué hacer si vuelve una mala noche: no compensar con más cama.',
        practiceIds: ['escaneo-corporal', 'atencion-sonidos'],
        articleIds: ['insomnio-tcc'],
        journalType: 'diario-sueno',
      },
    ],
  },
  {
    id: 'autoestima',
    title: 'Autoestima y autocrítica',
    subtitle: 'Cuatro semanas para cambiar cómo te ves y cómo te tratas',
    description:
      'Para quien se siente poco suficiente, se compara a menudo o se habla con dureza. Combina el modelo cognitivo de la autoestima baja con la autocompasión: notar al crítico, ver lo bueno con datos, poner a prueba tus reglas y tratarte con amabilidad.',
    basis: 'Modelo cognitivo de la autoestima baja (Fennell, 1997; Kolubinski et al., 2018) y autocompasión (Neff, 2003).',
    rhythm: '10 minutos al día, 5 días por semana.',
    weeks: [
      {
        title: 'Semana 1 · Notar al crítico',
        focus: 'Escuchar cómo te hablas',
        description: 'Aprenderás a reconocer los pensamientos autocríticos y las trampas del pensamiento que los sostienen.',
        practiceIds: ['pausa-autocompasion', 'pajaros-en-el-cielo'],
        articleIds: ['autoestima'],
        journalType: 'reestructuracion',
      },
      {
        title: 'Semana 2 · Ver lo bueno, con datos',
        focus: 'Corregir el filtro',
        description: 'Registrarás cada día cosas concretas que hiciste bien y cualidades que otros valoran en ti. No se trata de convencerte, sino de mirar el cuadro completo.',
        practiceIds: ['fortalezas', 'tres-cosas-buenas'],
        articleIds: ['autocompasion'],
        journalType: 'tres-cosas',
      },
      {
        title: 'Semana 3 · Poner a prueba tus reglas',
        focus: 'Experimentos pequeños',
        description: 'Probarás en la vida real reglas como «tengo que agradar siempre»: decir que no, mostrar un error o pedir ayuda, y ver qué pasa de verdad.',
        practiceIds: ['dear-man', 'give-fast'],
        articleIds: ['procrastinacion-y-perfeccionismo'],
        journalType: 'experimento',
      },
      {
        title: 'Semana 4 · Tratarte con amabilidad',
        focus: 'Un apoyo que no depende de ganar',
        description: 'Escribirás una carta compasiva y cultivarás una forma de tratarte que no dependa de compararte ni de tener éxito.',
        practiceIds: ['mano-en-el-pecho', 'amor-altruista'],
        articleIds: ['autoestima'],
        journalType: 'carta-compasiva',
      },
    ],
  },
  {
    id: 'duelo',
    title: 'Atravesar un duelo',
    subtitle: 'Cuatro semanas para acompañar la pérdida sin quedarte solo/a',
    description:
      'Para quien perdió a alguien o algo importante. No pretende acelerar el duelo ni ponerle fases: propone espacios para el dolor y para seguir viviendo, con amabilidad hacia ti. Si el duelo es muy reciente, ve a tu ritmo.',
    basis: 'Modelo de proceso dual del duelo (Stroebe y Schut, 1999); escritura expresiva y autocompasión.',
    rhythm: 'Unos minutos al día, a tu ritmo. Puedes repetir una semana todas las veces que necesites.',
    weeks: [
      {
        title: 'Semana 1 · Dejar espacio al dolor',
        focus: 'Sentir sin pelear',
        description: 'Practicarás gestos de cuidado para los momentos de mucha pena y entenderás por qué el duelo va y viene.',
        practiceIds: ['mano-en-el-pecho', 'pausa-autocompasion'],
        articleIds: ['duelo'],
      },
      {
        title: 'Semana 2 · Poner en palabras',
        focus: 'Escribir lo que no se dice',
        description: 'Escribirás sobre la pérdida: lo que sientes, lo que extrañas, lo que quedó pendiente. Escribir ayuda a ordenar lo que duele.',
        practiceIds: ['espacio-tres-minutos'],
        articleIds: ['duelo'],
        journalType: 'escritura-expresiva',
      },
      {
        title: 'Semana 3 · Cuidar el cuerpo y los vínculos',
        focus: 'No atravesarlo a solas',
        description: 'Revisarás el sueño, la comida y el movimiento, y buscarás momentos con personas que te acompañen.',
        practiceIds: ['please', 'caminar-atencion'],
        articleIds: ['vinculos-y-soledad'],
        journalType: 'activacion',
      },
      {
        title: 'Semana 4 · Lo que sigue importando',
        focus: 'Seguir con lo que te importa',
        description: 'Pensarás qué valores y qué personas siguen siendo importantes, y cómo llevar contigo lo que la pérdida te dejó.',
        practiceIds: ['brujula-valores', 'amor-altruista'],
        articleIds: ['sentido-y-valores'],
        journalType: 'valores',
      },
    ],
  },
  {
    id: 'ansiedad-social',
    title: 'Ansiedad social',
    subtitle: 'Cuatro semanas para dejar de esconderte del juicio de los demás',
    description:
      'Para quien teme quedar mal, ser juzgado/a o hacer el ridículo, y por eso evita hablar, participar o conocer gente. Sigue el modelo cognitivo-conductual: atención hacia fuera, menos conductas de seguridad y experimentos en situaciones reales.',
    basis: 'Modelo cognitivo de la ansiedad social (Clark y Wells, 1995); terapia cognitivo-conductual (Mayo-Wilson et al., 2014).',
    rhythm: '10 minutos al día y un experimento pequeño por semana.',
    weeks: [
      {
        title: 'Semana 1 · Entender el círculo',
        focus: 'Qué mantiene el miedo',
        description: 'Entenderás cómo fijarte en ti, las conductas de seguridad y la evitación mantienen la ansiedad, y practicarás bajar la activación.',
        practiceIds: ['respiracion-resonante', 'pausa-stop'],
        articleIds: ['ansiedad-social'],
      },
      {
        title: 'Semana 2 · La atención, hacia fuera',
        focus: 'Salir de tu cabeza',
        description: 'Entrenarás la atención para llevarla a lo que pasa fuera (la conversación, la otra persona) en lugar de vigilarte por dentro.',
        practiceIds: ['atencion-sonidos', 'caminar-atencion'],
        articleIds: ['ansiedad-social'],
        journalType: 'reestructuracion',
      },
      {
        title: 'Semana 3 · Experimentos',
        focus: 'Comprobar en lugar de suponer',
        description: 'Elegirás una situación social pequeña, dejarás una conducta de seguridad y comprobarás qué pasa de verdad.',
        practiceIds: ['comprobar-hechos'],
        articleIds: ['preocupacion-y-ansiedad'],
        journalType: 'experimento',
      },
      {
        title: 'Semana 4 · Hablar con seguridad',
        focus: 'Pedir, opinar y conectar',
        description: 'Prepararás conversaciones y practicarás expresarte con claridad y calidez.',
        practiceIds: ['dear-man', 'give-fast'],
        articleIds: ['asertividad-y-limites'],
        journalType: 'conversacion',
      },
    ],
  },
  {
    id: 'momentos-dificiles',
    title: 'Atravesar momentos difíciles',
    subtitle: 'Tres semanas para armar tus recursos ante el malestar',
    description:
      'Para desarrollar recursos de afrontamiento ante el malestar cotidiano: reconocer lo que sientes, hacer una pausa, tolerar sin empeorar y distinguir lo que puedes cambiar de lo que no. Al final, arma tu caja de herramientas en el Laboratorio. No sustituye una intervención clínica.',
    basis: 'Habilidades de tolerancia al malestar y regulación emocional de la DBT (Linehan, 2015).',
    rhythm: '10 minutos al día. Ensaya en calma para tener las herramientas listas cuando las necesites.',
    weeks: [
      {
        title: 'Semana 1 · Reconocer',
        focus: 'Lo que siento y lo que lo dispara',
        description: 'Aprenderás a ponerle nombre a la emoción, a notar las señales del cuerpo y a registrar qué la dispara.',
        practiceIds: ['mente-sabia', 'escaneo-corporal'],
        articleIds: ['granularidad-emocional'],
        journalType: 'tarjeta-diaria',
      },
      {
        title: 'Semana 2 · Pausar y tolerar',
        focus: 'Atravesar el momento sin empeorarlo',
        description: 'Practicarás la pausa antes de actuar y las herramientas para bajar la activación cuando la emoción está muy alta.',
        practiceIds: ['pausa-stop', 'tipp', 'cinco-sentidos'],
        articleIds: ['kit-de-crisis'],
      },
      {
        title: 'Semana 3 · Lo que puedo cambiar',
        focus: 'Aceptar, resolver y pedir apoyo',
        description: 'Distinguirás lo que puedes cambiar de lo que no, buscarás apoyos y prepararás tu caja de herramientas personal.',
        practiceIds: ['aceptacion-radical', 'resolucion-problemas'],
        articleIds: ['habilidades-dbt'],
        journalType: 'resolucion-problemas',
      },
    ],
  },
  {
    id: 'poner-limites',
    title: 'Aprender a poner límites',
    subtitle: 'Tres semanas para pedir, decir que no y cuidar el vínculo',
    description:
      'Para quien suele decir que sí cuando quiere decir que no, o explota cuando ya no aguanta. Identificarás tus necesidades, trabajarás el miedo a decepcionar y ensayarás conversaciones. Practica también con el simulador de conversaciones del Laboratorio.',
    basis: 'Entrenamiento asertivo (Speed et al., 2018) y efectividad interpersonal de la DBT (Linehan, 2015).',
    rhythm: '10 minutos al día y una conversación real por semana, si se puede.',
    weeks: [
      {
        title: 'Semana 1 · Lo que necesito',
        focus: 'Necesidades y valores',
        description: 'Aclararás qué necesitas y qué te importa: un límite protege algo valioso para ti.',
        practiceIds: ['brujula-valores'],
        articleIds: ['asertividad-y-limites'],
        journalType: 'necesidades',
      },
      {
        title: 'Semana 2 · El miedo a decepcionar',
        focus: 'Lo que temo que pase',
        description: 'Revisarás el miedo a que se enojen o a decepcionar, y aprenderás a distinguir una petición, un límite y una amenaza.',
        practiceIds: ['comprobar-hechos', 'pausa-autocompasion'],
        articleIds: ['autoestima'],
        journalType: 'experimento',
      },
      {
        title: 'Semana 3 · Ensayar y hablar',
        focus: 'Una respuesta asertiva',
        description: 'Prepararás y ensayarás una conversación real. Después, reflexionarás sobre el resultado y ajustarás la estrategia.',
        practiceIds: ['dear-man', 'give-fast'],
        articleIds: ['asertividad-y-limites'],
        journalType: 'conversacion',
      },
    ],
  },
  {
    id: 'conocerme',
    title: 'Conocerme mejor',
    subtitle: 'Cuatro semanas de exploración personal, sin etiquetas',
    description:
      'Un recorrido para explorar los roles que asumes, tus necesidades emocionales, los patrones que se repiten, tus fortalezas y tus valores. Es reflexión, no diagnóstico. Lo que descubras es buen material para llevar a tu terapia.',
    basis: 'Terapia de esquemas (Young et al., 2003), psicología analítica (Jung) como marco de reflexión, y valores (ACT).',
    rhythm: 'Una reflexión escrita y una práctica por semana, sin prisa.',
    weeks: [
      {
        title: 'Semana 1 · Mis roles',
        focus: 'El papel que suelo ocupar',
        description: 'Explorarás los roles que asumes en tus vínculos y la imagen que muestras a los demás.',
        practiceIds: ['persona-y-sombra'],
        articleIds: ['autoconocimiento'],
        journalType: 'mis-roles',
      },
      {
        title: 'Semana 2 · Mis necesidades',
        focus: 'Lo que necesito para estar bien',
        description: 'Revisarás cuánto están cubiertas tus necesidades emocionales básicas y elegirás una para cuidar.',
        practiceIds: ['pausa-autocompasion'],
        articleIds: ['autocompasion'],
        journalType: 'necesidades',
      },
      {
        title: 'Semana 3 · Patrones que se repiten',
        focus: 'Mirarlos con curiosidad',
        description: 'Mirarás un patrón que se repite y ensayarás responderle desde tu parte más serena.',
        practiceIds: ['adulto-sano'],
        articleIds: ['autoconocimiento'],
        journalType: 'patron-repetido',
      },
      {
        title: 'Semana 4 · Fortalezas y sentido',
        focus: 'Lo que soy y lo que me importa',
        description: 'Identificarás tus fortalezas y valores, y elegirás una acción coherente con lo que aprendiste.',
        practiceIds: ['fortalezas', 'brujula-valores'],
        articleIds: ['sentido-y-valores'],
        journalType: 'valores',
      },
    ],
  },
  {
    id: 'rutina',
    title: 'Una rutina que me haga bien',
    subtitle: 'Cuatro semanas para construir hábitos pequeños y sostenibles',
    description:
      'Para observar tu rutina sin juzgarla, detectar lo que te nutre y lo que te agota, y construir una rutina flexible con acciones pequeñas que puedas sostener.',
    basis: 'Activación conductual (Cuijpers et al., 2007), intenciones de implementación y psicología positiva.',
    rhythm: '5 a 10 minutos al día.',
    weeks: [
      {
        title: 'Semana 1 · Observar',
        focus: 'Mi rutina tal como es',
        description: 'Registrarás tus actividades y cómo te dejan, sin cambiar nada todavía.',
        practiceIds: ['espacio-tres-minutos'],
        articleIds: ['activacion-conductual'],
        journalType: 'activacion',
      },
      {
        title: 'Semana 2 · Una acción pequeña',
        focus: 'Lo que me nutre',
        description: 'Elegirás una actividad pequeña y alcanzable que te haga bien, y decidirás cuándo y dónde hacerla.',
        practiceIds: ['activacion-conductual', 'please'],
        articleIds: ['ejercicio-y-animo'],
        journalType: 'intencion',
      },
      {
        title: 'Semana 3 · Notar lo bueno',
        focus: 'Atención y gratitud',
        description: 'Sumarás momentos de atención plena y de gratitud a tu día.',
        practiceIds: ['tres-cosas-buenas', 'saboreo'],
        articleIds: ['perma-y-psicologia-positiva'],
        journalType: 'tres-cosas',
      },
      {
        title: 'Semana 4 · Sostener',
        focus: 'Barreras y ajustes',
        description: 'Revisarás qué se interpuso y diseñarás una rutina flexible, que aguante los días malos.',
        practiceIds: ['resolucion-problemas', 'brujula-valores'],
        articleIds: ['sueno-y-bienestar'],
        journalType: 'resolucion-problemas',
      },
    ],
  },
  {
    id: 'vivir-mis-valores',
    title: 'Vivir según mis valores',
    subtitle: 'Cuatro semanas para pasar de lo que me importa a lo que hago',
    description:
      'Para aclarar tus valores, notar cuándo te alejas de ellos y dar pasos concretos en esa dirección, aunque aparezcan dudas o miedo.',
    basis: 'Terapia de aceptación y compromiso (Hayes, Strosahl y Wilson, 2012) e intenciones de implementación (Gollwitzer y Sheeran, 2006).',
    rhythm: '10 minutos al día, 4 o 5 días por semana.',
    weeks: [
      {
        title: 'Semana 1 · Mi brújula',
        focus: 'Lo que me importa',
        description: 'Explorarás qué valores quieres que guíen tu vida en distintas áreas.',
        practiceIds: ['brujula-valores', 'espacio-tres-minutos'],
        articleIds: ['sentido-y-valores'],
        journalType: 'valores',
      },
      {
        title: 'Semana 2 · Puntos de elección',
        focus: 'Acercarme o alejarme',
        description: 'Aprenderás a notar los momentos en que lo que sientes te empuja lejos de lo que te importa.',
        practiceIds: ['punto-de-eleccion', 'pajaros-en-el-cielo'],
        articleIds: ['flexibilidad-psicologica'],
        journalType: 'defusion',
      },
      {
        title: 'Semana 3 · Acción comprometida',
        focus: 'Un paso por vez',
        description: 'Elegirás pasos pequeños y concretos hacia tus valores, con día y momento.',
        practiceIds: ['accion-comprometida', 'habito-minimo'],
        articleIds: ['activacion-conductual'],
        journalType: 'intencion',
      },
      {
        title: 'Semana 4 · Sostener el rumbo',
        focus: 'Revisar y ajustar',
        description: 'Revisarás qué funcionó y cómo seguir, imaginando tu mejor versión posible.',
        practiceIds: ['revision-semanal', 'mejor-yo-posible'],
        articleIds: ['perma-y-psicologia-positiva'],
        journalType: 'mejor-yo',
      },
    ],
  },
  {
    id: 'dejar-de-postergar',
    title: 'Dejar de postergar',
    subtitle: 'Tres semanas para empezar lo que vienes evitando',
    description:
      'Para entender por qué postergas, bajar el malestar de empezar y construir hábitos pequeños que se sostengan, sin exigirte perfección.',
    basis: 'Metaanálisis de la procrastinación (Steel, 2007), terapia de resolución de problemas y formación de hábitos (Lally et al., 2010).',
    rhythm: '5 a 10 minutos al día.',
    weeks: [
      {
        title: 'Semana 1 · Entender',
        focus: 'Por qué postergo',
        description: 'Verás qué malestar intentas evitar al postergar y probarás empezar solo cinco minutos.',
        practiceIds: ['cinco-minutos', 'surfear-impulso'],
        articleIds: ['procrastinacion-y-perfeccionismo'],
        journalType: 'experimento',
      },
      {
        title: 'Semana 2 · Decidir y empezar',
        focus: 'Del círculo mental al primer paso',
        description: 'Ordenarás las decisiones pendientes y elegirás el primer paso de cada una.',
        practiceIds: ['decidir-entre-opciones', 'resolucion-problemas'],
        articleIds: ['rumiacion'],
        journalType: 'resolucion-problemas',
      },
      {
        title: 'Semana 3 · Sostener',
        focus: 'Hábitos mínimos',
        description: 'Convertirás lo que te cuesta empezar en un hábito pequeño, atado a tu rutina, y lo revisarás cada semana.',
        practiceIds: ['habito-minimo', 'revision-semanal', 'pausa-autocompasion'],
        articleIds: ['activacion-conductual'],
        journalType: 'intencion',
      },
    ],
  },
  {
    id: 'vida-con-sentido',
    title: 'Una vida con sentido',
    subtitle: 'Cuatro semanas con Frankl, Rogers y la Gestalt',
    description:
      'Un recorrido por la logoterapia, la psicología humanista y la terapia Gestalt: preguntarte qué te pide la vida, escucharte sin juzgar, aceptar quién eres hoy y encontrar sentido en lo que haces, en lo que vives y en lo que ya viviste. Es reflexión, no un tratamiento.',
    basis: 'Logoterapia (Frankl, 1946), enfoque centrado en la persona (Rogers, 1957, 1961), terapia Gestalt (Perls et al., 1951) y metaanálisis de terapias existenciales (Vos et al., 2015).',
    rhythm: 'Una práctica al día, de 5 a 10 minutos, y una reflexión escrita por semana.',
    weeks: [
      {
        title: 'Semana 1 · Lo que la vida me pide',
        focus: 'Dar vuelta la pregunta',
        description:
          'Cambiarás la pregunta «¿qué espero de la vida?» por «¿qué me pide hoy?» y responderás con gestos concretos. Volverás a mirar tus valores desde ahí.',
        practiceIds: ['que-me-pide-la-vida', 'brujula-valores'],
        articleIds: ['logoterapia'],
        journalType: 'sentido',
      },
      {
        title: 'Semana 2 · Aquí y ahora',
        focus: 'Darme cuenta y escucharme',
        description:
          'Practicarás el darse cuenta de la Gestalt y la escucha del cuerpo del focusing. Cuando te observes demasiado, probarás volcarte hacia afuera.',
        practiceIds: ['darse-cuenta', 'escucharme-sin-juzgar', 'derreflexion'],
        articleIds: ['gestalt'],
      },
      {
        title: 'Semana 3 · Quién soy hoy',
        focus: 'Aceptarme para poder cambiar',
        description:
          'Mirarás la distancia entre tu yo real y tu yo ideal, darás voz a las partes que se pelean por dentro y nombrarás lo que hoy necesitas pedir.',
        practiceIds: ['yo-real-yo-ideal', 'polaridades', 'necesidades-que-pido'],
        articleIds: ['psicologia-humanista'],
        journalType: 'carta-compasiva',
      },
      {
        title: 'Semana 4 · Los tres caminos',
        focus: 'Crear, amar y la actitud',
        description:
          'Recorrerás los tres caminos del sentido, mirarás tu historia en capítulos y reconocerás lo vivido que nadie te puede quitar.',
        practiceIds: ['tres-caminos-sentido', 'linea-de-vida', 'lo-vivido-queda'],
        articleIds: ['sentido-y-valores'],
        journalType: 'sentido',
      },
    ],
  },
];

export const PROGRAMS: Program[] = [...BASE_PROGRAMS, ...PACK_PROGRAMS];

export const PROGRAM_BY_ID: Record<string, Program> = Object.fromEntries(PROGRAMS.map((p) => [p.id, p]));

export { programProgress } from './programProgress';
