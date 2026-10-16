/**
 * Mapa de habilidades por necesidad: la entrada principal es «qué necesito», no la escuela
 * terapéutica. Cada necesidad tiene un objetivo de aprendizaje y reúne prácticas de distintos
 * enfoques (el enfoque y la evidencia de cada una se ven en su ficha).
 *
 * El orden de `practices` importa: primero las de iniciación y bajo riesgo, para que la
 * primera sugerencia sea siempre segura.
 */

export interface Need {
  id: string;
  /** Cómo lo diría una persona. */
  title: string;
  /** Una línea para la tarjeta. */
  description: string;
  /** Qué se aprende (objetivo de aprendizaje, no promesa de resultado). */
  objective: string;
  practices: string[];
  programs: string[];
  pills?: string[];
}

export const NEEDS: Need[] = [
  {
    id: 'emociones-intensas',
    title: 'Bajar una emoción muy intensa',
    description: 'Cuando la emoción te desborda y necesitas calmarte antes de actuar.',
    objective: 'Bajar la activación del cuerpo y ganar unos minutos antes de decidir qué hacer.',
    practices: ['pausa-stop', 'suspiro-ciclico', 'plantas-de-los-pies', 'cinco-sentidos', 'tipp', 'surfear-impulso'],
    programs: ['momentos-dificiles', 'regulacion-emocional'],
  },
  {
    id: 'entender-emociones',
    title: 'Entender lo que siento',
    description: 'Ponerle nombre a lo que sientes y escuchar lo que te pide.',
    objective: 'Reconocer y nombrar emociones, y distinguir la emoción de lo que hago con ella.',
    practices: ['emocion-primaria-secundaria', 'mente-sabia', 'escucharme-sin-juzgar', 'comprobar-hechos', 'accion-opuesta', 'transformar-emocion'],
    programs: ['regulacion-emocional', 'habilidades-dbt'],
    pills: ['capas-de-la-emocion'],
  },
  {
    id: 'pensamientos',
    title: 'Tomar distancia de mis pensamientos',
    description: 'Cuando un pensamiento se repite, te juzga o te asusta.',
    objective: 'Observar los pensamientos como sucesos mentales y elegir cuánto caso hacerles.',
    practices: ['aplazar-preocupacion', 'pajaros-en-el-cielo', 'anotacion-mental', 'mindfulness-desapegado', 'hacer-espacio', 'observador'],
    programs: ['ansiedad', 'mente-y-vinculos'],
  },
  {
    id: 'ansiedad-estres',
    title: 'Manejar la ansiedad y el estrés',
    description: 'Preocupaciones que no paran, tensión en el cuerpo, todo parece urgente.',
    objective: 'Reconocer el ciclo de la preocupación y bajar la tensión con prácticas breves.',
    practices: ['respiracion-resonante', 'aplazar-preocupacion', 'relajacion-progresiva', 'espacio-tres-minutos', 'escaneo-corporal', 'entrenamiento-atencional'],
    programs: ['ansiedad', 'estres'],
    pills: ['preocuparse-tiene-horario'],
  },
  {
    id: 'autocritica',
    title: 'Tratarme con más amabilidad',
    description: 'Cuando la voz interna es dura y te exige sin descanso.',
    objective: 'Reconocer la autocrítica y practicar una forma de hablarte que acompañe en vez de castigar.',
    practices: ['mano-en-el-pecho', 'pausa-autocompasion', 'ritmo-calmante', 'yo-compasivo', 'tonglen'],
    programs: ['autocompasion', 'compasion'],
  },
  {
    id: 'relaciones',
    title: 'Comunicarme mejor',
    description: 'Decir lo que necesito, escuchar y cuidar el vínculo.',
    objective: 'Pedir y responder con claridad y respeto, y entender lo que puede estar sintiendo la otra persona.',
    practices: ['give-fast', 'necesidades-que-pido', 'pausar-y-rebobinar', 'inventario-interpersonal', 'ofertas-de-conexion', 'amor-altruista'],
    programs: ['mente-y-vinculos', 'pareja-cuatro-semanas'],
    pills: ['curiosidad-por-las-mentes', 'cuatro-areas-interpersonales'],
  },
  {
    id: 'limites',
    title: 'Poner límites',
    description: 'Decir que no sin culpa y sostenerlo.',
    objective: 'Formular un pedido o una negativa clara y sostenerla sin atacar ni ceder por miedo.',
    practices: ['dear-man', 'necesidades-que-pido', 'give-fast', 'pros-y-contras'],
    programs: ['poner-limites'],
  },
  {
    id: 'problemas',
    title: 'Resolver un problema',
    description: 'Algo concreto que hay que decidir o destrabar.',
    objective: 'Definir el problema, generar opciones y probar un primer paso pequeño.',
    practices: ['cinco-minutos', 'resolucion-problemas', 'decidir-entre-opciones', 'pregunta-milagro', 'escala-un-punto-mas'],
    programs: ['del-problema-a-la-solucion'],
    pills: ['pildora-pregunta-milagro'],
  },
  {
    id: 'habitos',
    title: 'Sostener un hábito o un objetivo',
    description: 'Empezar algo y no abandonarlo a la semana.',
    objective: 'Convertir una intención en una acción pequeña, concreta y repetible.',
    practices: ['habito-minimo', 'meta-bien-formada', 'regla-importancia-confianza', 'balance-del-cambio', 'revision-semanal'],
    programs: ['rutina', 'dejar-de-postergar'],
    pills: ['pildora-ambivalencia'],
  },
  {
    id: 'desanimo',
    title: 'Recuperar las ganas',
    description: 'Cuando nada entusiasma y cuesta arrancar.',
    objective: 'Reactivar actividades con sentido empezando por la acción, antes de tener ganas.',
    practices: ['activacion-conductual', 'monitoreo-actividad-animo', 'jerarquia-actividades', 'de-trap-a-trac', 'saboreo', 'tres-cosas-buenas'],
    programs: ['desanimo', 'activacion-conductual-seis-semanas'],
    pills: ['pildora-trap-trac'],
  },
  {
    id: 'atencion-plena',
    title: 'Estar más presente',
    description: 'Entrenar la atención y salir del piloto automático.',
    objective: 'Sostener la atención en el presente y volver con amabilidad cuando se va.',
    practices: ['atencion-respiracion', 'escaneo-corporal', 'atencion-sonidos', 'caminar-atencion', 'conciencia-pura'],
    programs: ['fundamentos'],
  },
  {
    id: 'valores-sentido',
    title: 'Encontrar sentido y dirección',
    description: 'Saber qué te importa y actuar en esa dirección.',
    objective: 'Identificar tus valores y elegir acciones concretas que vayan hacia ellos.',
    practices: ['brujula-valores', 'punto-de-eleccion', 'accion-comprometida', 'que-me-pide-la-vida', 'tres-caminos-sentido', 'mejor-yo-posible'],
    programs: ['vivir-mis-valores', 'vida-con-sentido'],
  },
  {
    id: 'patrones',
    title: 'Comprender mis patrones',
    description: 'Lo que se repite en tus reacciones y vínculos.',
    objective: 'Reconocer patrones personales y formular hipótesis prudentes sobre ellos, sin diagnosticarte.',
    practices: ['darse-cuenta', 'linea-de-vida', 'externalizar-el-problema', 'adulto-sano', 'polaridades', 'persona-y-sombra'],
    programs: ['conocerme'],
    pills: ['pildora-externalizar'],
  },
  {
    id: 'incertidumbre',
    title: 'Tolerar lo que no puedo controlar',
    description: 'Incertidumbre, frustración y cosas que no salen como esperabas.',
    objective: 'Aceptar lo que no se puede cambiar ahora y orientar la energía a lo que sí depende de ti.',
    practices: ['espacio-tres-minutos', 'pros-y-contras', 'surfear-impulso', 'ecuanimidad', 'aceptacion-radical', 'hacer-espacio'],
    programs: ['momentos-dificiles'],
  },
  {
    id: 'perdidas-cambios',
    title: 'Atravesar una pérdida o un cambio',
    description: 'Duelos, separaciones, mudanzas y otras transiciones.',
    objective: 'Darle lugar al dolor y, a la vez, ir retomando la vida que sigue.',
    practices: ['ritual-de-recuerdo', 'oscilar-perdida-restauracion', 'carta-al-ser-querido', 'lo-vivido-queda', 'revision-de-vida'],
    programs: ['duelo', 'duelo-lazo-y-vida'],
    pills: ['pildora-proceso-dual'],
  },
  {
    id: 'autoestima',
    title: 'Confiar más en mí',
    description: 'Reconocer lo que haces bien y lo que puedes lograr.',
    objective: 'Notar tus fortalezas y logros reales, y sostener una mirada más justa sobre ti.',
    practices: ['fortalezas', 'tres-cosas-buenas', 'yo-real-yo-ideal', 'mejor-yo-posible', 'pausa-autocompasion'],
    programs: ['autoestima'],
  },
  {
    id: 'autocuidado',
    title: 'Cuidarme: descanso, cuerpo y energía',
    description: 'Sueño, movimiento, pausas y límites con el trabajo.',
    objective: 'Incorporar rutinas de descanso, movimiento y recuperación que puedas sostener.',
    practices: ['please', 'rutina-bajada-dormir', 'control-estimulos-noche', 'estiramiento-suave-cinco', 'cierre-de-jornada', 'pausa-activa-oficina'],
    programs: ['dormir-mejor', 'salir-del-burnout'],
    pills: ['pildora-cama-para-dormir', 'desconectar-de-verdad'],
  },
  {
    id: 'reparar-conflictos',
    title: 'Reparar después de un conflicto',
    description: 'Volver a acercarse después de una discusión.',
    objective: 'Calmarte, entender qué pasó de cada lado y dar un paso de reparación.',
    practices: ['pausa-stop', 'pausar-y-rebobinar', 'inicio-suave', 'reparar-tras-discusion', 'perdon-reach'],
    programs: ['pareja-cuatro-semanas'],
    pills: ['pildora-cuatro-jinetes'],
  },
];

export const NEED_BY_ID: Record<string, Need> = Object.fromEntries(NEEDS.map((n) => [n.id, n]));

/** Necesidades que trabaja cada práctica (para su ficha). */
export const NEEDS_OF_PRACTICE: Record<string, Need[]> = NEEDS.reduce<Record<string, Need[]>>((acc, n) => {
  for (const p of n.practices) (acc[p] ??= []).push(n);
  return acc;
}, {});
