import type { JournalType } from './types';
import { PACK_META } from './packs';

/**
 * Catálogo clínico: enfoque terapéutico de origen y nivel de riesgo de cada contenido.
 *
 * Enfoque: indica de qué corriente viene una técnica y para qué sirve, sin presentar todo
 * el catálogo como un tratamiento validado (la evidencia de cada técnica está en su ficha).
 *
 * Nivel de riesgo (clasificación interna de la app, no una escala clínica validada):
 *   1 · Uso autónomo habitual: psicoeducación, gratitud, valores, hábitos, atención sencilla.
 *   2 · Uso con precauciones: puede aumentar la activación emocional (recuerdos dolorosos,
 *       vergüenza, conflictos vinculares, exposición, prácticas sin anclaje). Pide leer las
 *       precauciones antes de empezar y ofrece una alternativa más segura.
 *   3 · Atención clínica o emergencia: no se automatiza. La app sólo facilita el acceso a
 *       ayuda humana (botón «Ayuda» en todas las pantallas, plan de seguridad).
 */

export type Approach = 'dbt' | 'tcc' | 'act' | 'cft' | 'mindfulness' | 'positiva' | 'contemplativa' | 'relajacion' | 'escritura' | 'esquemas' | 'psicodinamica' | 'logoterapia' | 'humanista' | 'gestalt' | 'soluciones' | 'narrativa' | 'motivacional' | 'metacognitiva' | 'focalizada-emocion' | 'interpersonal' | 'mentalizacion' | 'gottman' | 'sistemica' | 'analisis-transaccional';

export const APPROACH_LABEL: Record<Approach, string> = {
  dbt: 'DBT',
  tcc: 'TCC',
  act: 'ACT',
  cft: 'Compasión (CFT)',
  mindfulness: 'Mindfulness',
  positiva: 'Psicología positiva',
  contemplativa: 'Contemplativa',
  relajacion: 'Relajación',
  escritura: 'Escritura terapéutica',
  esquemas: 'Terapia de esquemas',
  psicodinamica: 'Psicodinámica · Jung',
  logoterapia: 'Logoterapia · Frankl',
  humanista: 'Humanista · Rogers',
  gestalt: 'Gestalt',
  soluciones: 'Centrada en soluciones',
  narrativa: 'Terapia narrativa',
  motivacional: 'Entrevista motivacional',
  metacognitiva: 'Metacognitiva',
  'focalizada-emocion': 'Focalizada en la emoción',
  interpersonal: 'Interpersonal (TIP)',
  mentalizacion: 'Mentalización',
  gottman: 'Método Gottman',
  sistemica: 'Sistémica · familia',
  'analisis-transaccional': 'Análisis transaccional · Berne',
};

export const APPROACH_DESCRIPTION: Record<Approach, string> = {
  dbt: 'Terapia dialéctico-conductual: regulación emocional, tolerancia al malestar, conciencia plena y relaciones.',
  tcc: 'Terapia cognitivo-conductual: revisar pensamientos, experimentos, exposición y resolución de problemas.',
  act: 'Terapia de aceptación y compromiso: aceptación, defusión, valores y acción comprometida.',
  cft: 'Terapia centrada en la compasión: trabajar la autocrítica y cultivar una actitud compasiva.',
  mindfulness: 'Atención plena (incluye MBCT): entrenar la atención y ver los patrones de la mente.',
  positiva: 'Psicología positiva: fortalezas, gratitud, sentido y relaciones positivas.',
  contemplativa: 'Tradición contemplativa: prácticas de cultivo mental con evidencia sobre todo indirecta.',
  relajacion: 'Técnicas fisiológicas de relajación y respiración.',
  escritura: 'Escritura expresiva y estructurada para ordenar la experiencia.',
  esquemas: 'Terapia de esquemas: necesidades emocionales, patrones aprendidos y la parte de «adulto sano». Aquí, como exploración.',
  psicodinamica: 'Enfoques psicodinámicos y de Jung: reflexión sobre patrones, partes de uno mismo y significados. Nunca como diagnóstico.',
  logoterapia: 'Logoterapia de Viktor Frankl: descubrir el sentido en lo que haces, en lo que vives y en la actitud ante lo inevitable.',
  humanista: 'Psicología humanista (Rogers, Maslow, Gendlin): escucha sin juicio, aceptación, autenticidad y necesidades de crecimiento.',
  gestalt: 'Terapia Gestalt (Fritz y Laura Perls): darse cuenta del aquí y ahora, cerrar asuntos pendientes y dialogar entre partes.',
  soluciones: 'Terapia breve centrada en soluciones (de Shazer, Berg): buscar lo que ya funciona, las excepciones y el próximo pequeño paso.',
  narrativa: 'Terapia narrativa (White, Epston): separar a la persona del problema y reescribir la propia historia.',
  motivacional: 'Entrevista motivacional (Miller, Rollnick): explorar la ambivalencia y fortalecer las propias razones para cambiar.',
  metacognitiva: 'Terapia metacognitiva (Wells): cambiar la relación con la preocupación y la rumiación, no su contenido.',
  'focalizada-emocion': 'Terapia focalizada en la emoción (Greenberg): llegar a la emoción de fondo y a la necesidad que señala.',
  interpersonal: 'Terapia interpersonal: el ánimo en relación con duelos, cambios de rol y conflictos con otros.',
  mentalizacion: 'Mentalización (Fonagy, Bateman): entender los estados mentales propios y ajenos detrás de las conductas.',
  gottman: 'Método Gottman para parejas: amistad, manejo del conflicto y sentido compartido, según décadas de investigación.',
  sistemica: 'Enfoque sistémico (Bowen, McGoldrick, Boszormenyi-Nagy): la persona dentro de su familia; genograma, mandatos, lealtades y diferenciación.',
  'analisis-transaccional': 'Análisis transaccional (Eric Berne): estados del yo Padre, Adulto y Niño, transacciones, juegos psicológicos y caricias. Un lenguaje útil con poca investigación controlada.',
};

export const PRACTICE_APPROACHES: Record<string, Approach[]> = {
  'espacio-tres-minutos': ['mindfulness'],
  'pausa-stop': ['mindfulness', 'dbt'],
  'mano-en-el-pecho': ['cft'],
  'plantas-de-los-pies': ['mindfulness'],
  tipp: ['dbt'],
  'cinco-sentidos': ['dbt'],
  'atencion-respiracion': ['mindfulness'],
  'escaneo-corporal': ['mindfulness'],
  'respiracion-resonante': ['relajacion'],
  'suspiro-ciclico': ['relajacion'],
  'amor-altruista': ['contemplativa'],
  'pausa-autocompasion': ['cft'],
  tonglen: ['contemplativa'],
  saboreo: ['positiva'],
  'tres-cosas-buenas': ['positiva'],
  'mejor-yo-posible': ['positiva'],
  fortalezas: ['positiva'],
  'brujula-valores': ['act'],
  'pajaros-en-el-cielo': ['act', 'mindfulness'],
  'anotacion-mental': ['mindfulness'],
  'conciencia-pura': ['contemplativa'],
  'atencion-sonidos': ['mindfulness'],
  'caminar-atencion': ['mindfulness'],
  'relajacion-progresiva': ['relajacion'],
  'gratitud-contemplativa': ['positiva', 'contemplativa'],
  'regocijo-empatico': ['contemplativa'],
  ecuanimidad: ['contemplativa'],
  'perdon-reach': ['positiva'],
  'activacion-conductual': ['tcc'],
  observador: ['act'],
  'surfear-impulso': ['mindfulness'],
  'resolucion-problemas': ['tcc'],
  'hacer-espacio': ['act'],
  'accion-opuesta': ['dbt'],
  'dear-man': ['dbt', 'tcc'],
  'mente-sabia': ['dbt'],
  'pros-y-contras': ['dbt'],
  'aceptacion-radical': ['dbt'],
  'comprobar-hechos': ['dbt', 'tcc'],
  please: ['dbt'],
  'give-fast': ['dbt'],
  'adulto-sano': ['esquemas', 'cft'],
  'persona-y-sombra': ['psicodinamica'],
  'habito-minimo': ['tcc'],
  'revision-semanal': ['tcc', 'positiva'],
  'cinco-minutos': ['tcc'],
  'decidir-entre-opciones': ['tcc'],
  'accion-comprometida': ['act'],
  'punto-de-eleccion': ['act'],
  'ritmo-calmante': ['cft', 'relajacion'],
  'yo-compasivo': ['cft'],
  'linea-de-vida': ['psicodinamica', 'positiva'],
  'que-me-pide-la-vida': ['logoterapia'],
  'tres-caminos-sentido': ['logoterapia'],
  derreflexion: ['logoterapia'],
  'intencion-paradojica': ['logoterapia'],
  'lo-vivido-queda': ['logoterapia', 'positiva'],
  'escucharme-sin-juzgar': ['humanista'],
  'yo-real-yo-ideal': ['humanista'],
  'necesidades-que-pido': ['humanista'],
  'darse-cuenta': ['gestalt', 'mindfulness'],
  'silla-vacia': ['gestalt'],
  'asuntos-pendientes': ['gestalt', 'escritura'],
  polaridades: ['gestalt'],
  ...Object.fromEntries(Object.entries(PACK_META).map(([id, m]) => [id, m.approaches])),
};

export const JOURNAL_APPROACHES: Partial<Record<JournalType, Approach[]>> = {
  'tres-cosas': ['positiva'],
  defusion: ['act'],
  saboreo: ['positiva'],
  valores: ['act'],
  'escritura-expresiva': ['escritura'],
  'carta-gratitud': ['positiva'],
  'mejor-yo': ['positiva'],
  reestructuracion: ['tcc'],
  'carta-compasiva': ['cft'],
  activacion: ['tcc'],
  preocupacion: ['tcc'],
  perdon: ['positiva'],
  intencion: ['tcc'],
  'resolucion-problemas': ['tcc'],
  'diario-sueno': ['tcc'],
  experimento: ['tcc'],
  'escalera-exposicion': ['tcc'],
  conversacion: ['dbt', 'tcc'],
  'tarjeta-diaria': ['dbt'],
  'analisis-cadena': ['dbt'],
  'mis-roles': ['psicodinamica', 'escritura'],
  necesidades: ['esquemas'],
  'patron-repetido': ['esquemas', 'psicodinamica'],
  sentido: ['logoterapia'],
  'diario-esquemas': ['esquemas'],
  'tarjeta-esquema': ['esquemas'],
  'sueno-nocturno': ['psicodinamica'],
};

// ---------------------------------------------------------------- nivel de riesgo

export type RiskLevel = 1 | 2;

export const RISK_LABEL: Record<RiskLevel, string> = {
  1: 'Uso autónomo',
  2: 'Con precauciones',
};

/**
 * Contenidos de nivel 2 y su alternativa más segura (práctica anclada o de menor
 * activación) para quien prefiera no hacerlo ahora.
 */
export const PRACTICE_RISK: Record<string, { level: RiskLevel; alternative: string }> = {
  tonglen: { level: 2, alternative: 'amor-altruista' },
  'conciencia-pura': { level: 2, alternative: 'atencion-respiracion' },
  observador: { level: 2, alternative: 'pajaros-en-el-cielo' },
  'perdon-reach': { level: 2, alternative: 'pausa-autocompasion' },
  'aceptacion-radical': { level: 2, alternative: 'mente-sabia' },
  'hacer-espacio': { level: 2, alternative: 'escaneo-corporal' },
  'adulto-sano': { level: 2, alternative: 'pausa-autocompasion' },
  'intencion-paradojica': { level: 2, alternative: 'derreflexion' },
  'silla-vacia': { level: 2, alternative: 'pausa-autocompasion' },
  'asuntos-pendientes': { level: 2, alternative: 'pausa-autocompasion' },
  ...Object.fromEntries(Object.entries(PACK_META).flatMap(([id, m]) => (m.risk ? [[id, m.risk]] : []))),
};

export const JOURNAL_RISK: Partial<Record<JournalType, RiskLevel>> = {
  'escritura-expresiva': 2,
  'escalera-exposicion': 2,
  perdon: 2,
  'analisis-cadena': 2,
  'patron-repetido': 2,
  'diario-esquemas': 2,
};

export const practiceRisk = (id: string): RiskLevel => PRACTICE_RISK[id]?.level ?? 1;
export const journalRisk = (type: JournalType): RiskLevel => JOURNAL_RISK[type] ?? 1;
export const practiceApproaches = (id: string): Approach[] => PRACTICE_APPROACHES[id] ?? [];

// ---------------------------------------------------------------- módulos por necesidad

/**
 * Módulos transversales: organizan el catálogo por necesidad psicológica, no por teoría.
 * Cada práctica tiene un módulo principal; las plantillas del diario y los recursos de la
 * biblioteca se asocian al módulo donde más ayudan.
 */
export type ModuleId =
  | 'emociones'
  | 'pensamientos'
  | 'relaciones'
  | 'valores'
  | 'habitos'
  | 'autocompasion'
  | 'autoconocimiento'
  | 'cuerpo'
  | 'problemas'
  | 'bienestar'
  | 'afrontamiento'
  | 'pareja'
  | 'duelo'
  | 'sueno'
  | 'trabajo'
  | 'etapas'
  | 'salud'
  | 'neurodiversidad'
  | 'imagen-corporal';

export interface SkillModule {
  id: ModuleId;
  title: string;
  /** Para qué sirve, en una frase y en lenguaje cotidiano. */
  purpose: string;
  approaches: Approach[];
  practices: string[];
  journal: JournalType[];
  resources: { href: string; label: string }[];
}

export const MODULES: SkillModule[] = [
  {
    id: 'afrontamiento',
    title: 'Afrontamiento y momentos difíciles',
    purpose: 'Atravesar un momento de mucho malestar sin empeorarlo.',
    approaches: ['dbt', 'mindfulness'],
    practices: ['tipp', 'pausa-stop', 'cinco-sentidos', 'plantas-de-los-pies', 'pros-y-contras', 'aceptacion-radical'],
    journal: [],
    resources: [
      { href: '/laboratorio/semaforo', label: 'Semáforo emocional' },
      { href: '/laboratorio/caja', label: 'Mi caja de herramientas' },
      { href: '/biblioteca/kit-de-crisis', label: 'Kit de crisis emocional' },
    ],
  },
  {
    id: 'emociones',
    title: 'Regulación emocional',
    purpose: 'Reconocer, entender y regular las emociones sin exigir que desaparezcan.',
    approaches: ['dbt', 'tcc', 'mindfulness', 'humanista'],
    practices: ['mente-sabia', 'comprobar-hechos', 'accion-opuesta', 'please', 'surfear-impulso', 'escucharme-sin-juzgar'],
    journal: ['tarjeta-diaria', 'analisis-cadena', 'escritura-expresiva'],
    resources: [
      { href: '/biblioteca/rueda-de-emociones', label: 'Rueda de emociones' },
      { href: '/antidotos', label: 'Antídotos para cada emoción' },
    ],
  },
  {
    id: 'pensamientos',
    title: 'Pensamientos y atención',
    purpose: 'Ver los pensamientos como pensamientos y dejar de creerles todo.',
    approaches: ['tcc', 'act', 'mindfulness', 'logoterapia'],
    practices: ['pajaros-en-el-cielo', 'anotacion-mental', 'hacer-espacio', 'observador', 'derreflexion', 'intencion-paradojica'],
    journal: ['reestructuracion', 'defusion', 'preocupacion', 'experimento', 'escalera-exposicion'],
    resources: [
      { href: '/laboratorio/hecho-o-interpretacion', label: '¿Hecho o interpretación?' },
      { href: '/biblioteca/trampas-del-pensamiento', label: 'Trampas del pensamiento' },
    ],
  },
  {
    id: 'relaciones',
    title: 'Relaciones y comunicación',
    purpose: 'Pedir lo que necesitas, poner límites y cuidar los vínculos.',
    approaches: ['dbt', 'tcc', 'contemplativa', 'humanista', 'gestalt'],
    practices: ['dear-man', 'give-fast', 'amor-altruista', 'ecuanimidad', 'regocijo-empatico', 'perdon-reach', 'necesidades-que-pido', 'asuntos-pendientes', 'silla-vacia'],
    journal: ['conversacion', 'carta-gratitud', 'perdon'],
    resources: [
      { href: '/laboratorio/conversaciones', label: 'Simulador de conversaciones' },
      { href: '/biblioteca/asertividad-y-limites', label: 'Asertividad y límites' },
    ],
  },
  {
    id: 'autocompasion',
    title: 'Autocompasión y autocrítica',
    purpose: 'Tratarte con la amabilidad con que tratarías a alguien que quieres.',
    approaches: ['cft', 'contemplativa'],
    practices: ['ritmo-calmante', 'pausa-autocompasion', 'mano-en-el-pecho', 'yo-compasivo', 'tonglen'],
    journal: ['carta-compasiva'],
    resources: [{ href: '/biblioteca/autocompasion', label: 'Autocompasión' }],
  },
  {
    id: 'valores',
    title: 'Valores y sentido',
    purpose: 'Aclarar lo que te importa y dar pasos en esa dirección.',
    approaches: ['act', 'positiva', 'logoterapia'],
    practices: ['brujula-valores', 'accion-comprometida', 'punto-de-eleccion', 'mejor-yo-posible', 'que-me-pide-la-vida', 'tres-caminos-sentido'],
    journal: ['valores', 'mejor-yo', 'intencion', 'sentido'],
    resources: [
      { href: '/biblioteca/sentido-y-valores', label: 'Sentido y valores' },
      { href: '/biblioteca/logoterapia', label: 'Logoterapia: vivir con sentido' },
    ],
  },
  {
    id: 'habitos',
    title: 'Hábitos y activación',
    purpose: 'Salir del círculo del desánimo empezando por acciones pequeñas.',
    approaches: ['tcc'],
    practices: ['activacion-conductual', 'habito-minimo', 'revision-semanal'],
    journal: ['activacion', 'diario-sueno'],
    resources: [{ href: '/biblioteca/activacion-conductual', label: 'Activación conductual' }],
  },
  {
    id: 'problemas',
    title: 'Resolución de problemas',
    purpose: 'Pasar de darle vueltas a un problema a elegir el siguiente paso.',
    approaches: ['tcc'],
    practices: ['resolucion-problemas', 'decidir-entre-opciones', 'cinco-minutos'],
    journal: ['resolucion-problemas'],
    resources: [{ href: '/biblioteca/procrastinacion-y-perfeccionismo', label: 'Procrastinación y perfeccionismo' }],
  },
  {
    id: 'cuerpo',
    title: 'Atención plena y cuerpo',
    purpose: 'Entrenar la atención y bajar la activación del cuerpo.',
    approaches: ['mindfulness', 'relajacion', 'contemplativa'],
    practices: [
      'espacio-tres-minutos',
      'atencion-respiracion',
      'respiracion-resonante',
      'suspiro-ciclico',
      'escaneo-corporal',
      'relajacion-progresiva',
      'atencion-sonidos',
      'caminar-atencion',
      'conciencia-pura',
    ],
    journal: [],
    resources: [{ href: '/gimnasio/temporizador', label: 'Temporizador libre' }],
  },
  {
    id: 'bienestar',
    title: 'Bienestar y fortalezas',
    purpose: 'Notar lo que está bien y usar tus fortalezas.',
    approaches: ['positiva', 'contemplativa'],
    practices: ['tres-cosas-buenas', 'saboreo', 'gratitud-contemplativa', 'fortalezas', 'lo-vivido-queda'],
    journal: ['tres-cosas', 'saboreo'],
    resources: [{ href: '/biblioteca/perma-y-psicologia-positiva', label: 'Psicología positiva' }],
  },
  {
    id: 'autoconocimiento',
    title: 'Autoconocimiento y patrones',
    purpose: 'Explorar tus roles, necesidades y patrones. Es reflexión, no diagnóstico.',
    approaches: ['esquemas', 'psicodinamica', 'sistemica', 'humanista', 'gestalt'],
    practices: ['linea-de-vida', 'persona-y-sombra', 'adulto-sano', 'darse-cuenta', 'yo-real-yo-ideal', 'polaridades'],
    journal: ['mis-roles', 'necesidades', 'patron-repetido', 'diario-esquemas', 'tarjeta-esquema', 'sueno-nocturno'],
    resources: [
      { href: '/laboratorio/esquemas', label: 'Mapa de esquemas y modos' },
      { href: '/laboratorio/genograma', label: 'Tu genograma' },
      { href: '/biblioteca/terapia-de-esquemas', label: 'Terapia de esquemas' },
      { href: '/biblioteca/psicologia-de-jung', label: 'Las ideas de Jung' },
      { href: '/biblioteca/familia-como-sistema', label: 'La familia como sistema' },
      { href: '/biblioteca/autoconocimiento', label: 'Conocerte mejor' },
      { href: '/biblioteca/psicologia-humanista', label: 'Psicología humanista' },
      { href: '/biblioteca/gestalt', label: 'Gestalt: el darse cuenta' },
    ],
  },
  {
    id: 'pareja',
    title: 'Vida en pareja',
    purpose: 'Cuidar la amistad, manejar los conflictos y construir un proyecto compartido.',
    approaches: ['gottman', 'focalizada-emocion', 'mentalizacion'],
    practices: [],
    journal: [],
    resources: [],
  },
  {
    id: 'duelo',
    title: 'Duelo y pérdidas',
    purpose: 'Atravesar una pérdida a tu ritmo, entre el dolor y la vida que sigue.',
    approaches: ['interpersonal', 'narrativa', 'act', 'logoterapia'],
    practices: [],
    journal: [],
    resources: [{ href: '/biblioteca/duelo', label: 'El duelo' }],
  },
  {
    id: 'sueno',
    title: 'Dormir mejor',
    purpose: 'Recuperar el sueño con las técnicas de la TCC para el insomnio.',
    approaches: ['tcc', 'mindfulness', 'relajacion'],
    practices: [],
    journal: ['diario-sueno'],
    resources: [],
  },
  {
    id: 'trabajo',
    title: 'Trabajo y agotamiento',
    purpose: 'Prevenir y salir del agotamiento, con límites y recuperación.',
    approaches: ['tcc', 'act', 'motivacional'],
    practices: [],
    journal: [],
    resources: [],
  },
  {
    id: 'etapas',
    title: 'Etapas de la vida',
    purpose: 'Embarazo y posparto, crianza, jubilación y vejez: cambios que piden recursos nuevos.',
    approaches: ['interpersonal', 'cft', 'narrativa'],
    practices: [],
    journal: [],
    resources: [],
  },
  {
    id: 'salud',
    title: 'Dolor y salud crónica',
    purpose: 'Vivir con dolor o una enfermedad crónica sin que ocupe toda la vida.',
    approaches: ['act', 'mindfulness', 'tcc'],
    practices: [],
    journal: [],
    resources: [],
  },
  {
    id: 'neurodiversidad',
    title: 'Neurodiversidad',
    purpose: 'Estrategias para TDAH y autismo: organización, energía y regulación sensorial.',
    approaches: ['tcc', 'mindfulness'],
    practices: [],
    journal: [],
    resources: [],
  },
  {
    id: 'imagen-corporal',
    title: 'Imagen corporal',
    purpose: 'Una relación más amable con tu cuerpo: por lo que hace, no sólo por cómo se ve. Sin dietas ni metas de peso.',
    approaches: ['tcc', 'cft', 'positiva'],
    practices: [],
    journal: [],
    resources: [{ href: '/biblioteca/imagen-corporal', label: 'Imagen corporal' }],
  },
];

// Las prácticas de los paquetes de contenido se suman a su módulo.
for (const [id, m] of Object.entries(PACK_META)) {
  const mod = MODULES.find((x) => x.id === m.module);
  if (mod && !mod.practices.includes(id)) mod.practices.push(id);
}

export const MODULE_BY_ID = Object.fromEntries(MODULES.map((m) => [m.id, m])) as Record<ModuleId, SkillModule>;

/** Módulo principal de cada práctica. */
export const MODULE_OF_PRACTICE: Record<string, ModuleId> = Object.fromEntries(MODULES.flatMap((m) => m.practices.map((p) => [p, m.id])));
