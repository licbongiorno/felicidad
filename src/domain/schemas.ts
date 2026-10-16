/**
 * Mapa de la terapia de esquemas para el explorador del Laboratorio: los 18 esquemas
 * desadaptativos tempranos en cinco dominios (Young, Klosko y Weishaar, 2003) y los modos
 * (Arntz y Jacob, 2012). No es un cuestionario ni da puntaje: cada persona marca lo que le
 * resuena, sólo en su dispositivo, y se la orienta a prácticas y al diario.
 */

export type SchemaDomainId = 'desconexion' | 'autonomia' | 'limites' | 'otros' | 'hipervigilancia';

export interface SchemaDomain {
  id: SchemaDomainId;
  title: string;
  /** Qué necesidad básica quedó poco cubierta. */
  need: string;
  description: string;
}

export interface EarlySchema {
  id: string;
  domain: SchemaDomainId;
  name: string;
  /** La creencia, en primera persona, entre comillas españolas. */
  belief: string;
  description: string;
  /** Cómo se ve en la vida cotidiana. */
  looksLike: string[];
  /** Lo que diría el adulto sano. */
  healthyAdult: string;
}

export const SCHEMA_DOMAINS: SchemaDomain[] = [
  {
    id: 'desconexion',
    title: 'Desconexión y rechazo',
    need: 'Vínculos seguros: sentirse querido, protegido y aceptado.',
    description: 'Esquemas que vienen de vínculos fríos, inestables, críticos o dañinos. Esperar que los demás no estén, no cuiden o lastimen.',
  },
  {
    id: 'autonomia',
    title: 'Autonomía y capacidad',
    need: 'Autonomía: sentirse capaz de arreglárselas y de ser uno mismo.',
    description: 'Esquemas que vienen de la sobreprotección o de mensajes de incapacidad. Sentir que solo no se puede o que algo malo va a pasar.',
  },
  {
    id: 'limites',
    title: 'Límites',
    need: 'Límites realistas: aprender el autocontrol y el respeto por los demás.',
    description: 'Esquemas que vienen de límites que faltaron o de un trato de privilegio. Sentir que las reglas no rigen para uno o no poder frenarse.',
  },
  {
    id: 'otros',
    title: 'Los demás primero',
    need: 'Libertad para expresar lo que uno siente y necesita.',
    description: 'Esquemas que vienen de un amor que había que ganarse. Poner las necesidades de otros antes que las propias, casi siempre.',
  },
  {
    id: 'hipervigilancia',
    title: 'Hipervigilancia e inhibición',
    need: 'Espontaneidad y juego.',
    description: 'Esquemas que vienen de ambientes exigentes, duros o donde mostrar emociones estaba mal. Controlarse, exigirse y esperar lo peor.',
  },
];

export const SCHEMAS: EarlySchema[] = [
  // ------------------------------------------------------------ desconexión
  {
    id: 'abandono',
    domain: 'desconexion',
    name: 'Abandono',
    belief: '«Las personas que quiero me van a dejar.»',
    description: 'La sensación de que los vínculos no duran: los demás se irán, morirán o elegirán a otro.',
    looksLike: ['Mucha angustia si alguien tarda en responder.', 'Celos o necesidad de confirmar que el otro sigue ahí.', 'Elegir parejas poco disponibles.'],
    healthyAdult: 'Mi miedo es viejo y entendible. Hoy puedo mirar los hechos de este vínculo y tolerar la espera.',
  },
  {
    id: 'desconfianza',
    domain: 'desconexion',
    name: 'Desconfianza y abuso',
    belief: '«Si me descuido, me van a lastimar o a usar.»',
    description: 'Esperar que los demás engañen, humillen o se aprovechen. Estar siempre en guardia.',
    looksLike: ['Buscar segundas intenciones en gestos amables.', 'Costarle mucho contar algo íntimo.', 'Quedar en vínculos donde sí hay maltrato, porque parece normal.'],
    healthyAdult: 'Tuve buenas razones para cuidarme. Hoy puedo confiar de a poco, en quien lo demuestra.',
  },
  {
    id: 'privacion-emocional',
    domain: 'desconexion',
    name: 'Privación emocional',
    belief: '«Nadie me va a entender ni a cuidar como necesito.»',
    description: 'La sensación de que faltan cariño, comprensión o guía, aunque a veces no se sepa nombrar qué falta.',
    looksLike: ['Sentirse solo aunque haya gente cerca.', 'No pedir nada, para no decepcionarse.', 'Un vacío difícil de explicar.'],
    healthyAdult: 'Mis necesidades son válidas. Puedo pedir con claridad y dejar que algunas personas me cuiden.',
  },
  {
    id: 'imperfeccion',
    domain: 'desconexion',
    name: 'Imperfección y vergüenza',
    belief: '«Si me conocen de verdad, no me van a querer.»',
    description: 'Sentirse fallado, malo o indigno de amor en lo profundo. Mucha vergüenza.',
    looksLike: ['Ocultar partes de uno.', 'Sufrir mucho ante una crítica.', 'Compararse y sentirse siempre menos.'],
    healthyAdult: 'Tengo defectos, como todos. No me hacen indigno de cariño.',
  },
  {
    id: 'aislamiento',
    domain: 'desconexion',
    name: 'Aislamiento social',
    belief: '«No encajo en ningún lado.»',
    description: 'Sentirse distinto de los demás y fuera de cualquier grupo.',
    looksLike: ['Evitar reuniones o quedarse en un rincón.', 'Sentirse extranjero en todas partes.', 'Creer que nadie comparte lo que uno vive.'],
    healthyAdult: 'Ser distinto no me deja afuera. Puedo buscar personas con quienes comparto algo.',
  },
  // ------------------------------------------------------------ autonomía
  {
    id: 'dependencia',
    domain: 'autonomia',
    name: 'Dependencia e incompetencia',
    belief: '«Solo no puedo con la vida diaria.»',
    description: 'Sentirse incapaz de resolver las cosas cotidianas sin la ayuda de otros.',
    looksLike: ['Pedir opinión para decisiones pequeñas.', 'Mucha ansiedad ante tareas nuevas.', 'Dejar que otro decida casi siempre.'],
    healthyAdult: 'Puedo aprender y equivocarme. Cada cosa que resuelvo me muestra que soy capaz.',
  },
  {
    id: 'vulnerabilidad',
    domain: 'autonomia',
    name: 'Vulnerabilidad al daño',
    belief: '«En cualquier momento puede pasar una catástrofe.»',
    description: 'Miedo exagerado a enfermedades, accidentes, delitos o ruina, y sentirse sin recursos para enfrentarlos.',
    looksLike: ['Revisar síntomas o noticias sin parar.', 'Evitar viajar o salir.', 'Precauciones que ocupan mucho tiempo.'],
    healthyAdult: 'Los riesgos existen y puedo cuidarme de forma razonable. No todo depende de estar alerta.',
  },
  {
    id: 'apego-confuso',
    domain: 'autonomia',
    name: 'Fusión y yo poco desarrollado',
    belief: '«No sé quién soy sin mi familia o mi pareja.»',
    description: 'Estar tan unido emocionalmente a alguien que cuesta tener opiniones, gustos o una vida propia.',
    looksLike: ['Sentir culpa al tomar decisiones propias.', 'Saber mucho de lo que el otro siente y poco de lo propio.', 'Sentirse vacío lejos de esa persona.'],
    healthyAdult: 'Puedo querer mucho a alguien y, al mismo tiempo, tener mi propia vida.',
  },
  {
    id: 'fracaso',
    domain: 'autonomia',
    name: 'Fracaso',
    belief: '«Voy a fracasar; soy menos capaz que los demás.»',
    description: 'La sensación de no estar a la altura en el estudio, el trabajo o los logros.',
    looksLike: ['No postularse o abandonar antes de intentar.', 'Minimizar los propios logros.', 'Compararse con quienes más logran.'],
    healthyAdult: 'Tengo capacidades y también límites. Puedo intentar y aprender de lo que no sale.',
  },
  // ------------------------------------------------------------ límites
  {
    id: 'grandiosidad',
    domain: 'limites',
    name: 'Grandiosidad y derecho',
    belief: '«Merezco más que los demás; las reglas no son para mí.»',
    description: 'Sentirse especial o con derechos que otros no tienen. A veces esconde un esquema de imperfección.',
    looksLike: ['Enojarse si no se obtiene lo que se quiere.', 'Costarle ponerse en el lugar del otro.', 'Competir o controlar en los vínculos.'],
    healthyAdult: 'Valgo, y los demás también. Puedo pedir lo mío respetando lo de otros.',
  },
  {
    id: 'autocontrol-insuficiente',
    domain: 'limites',
    name: 'Autocontrol insuficiente',
    belief: '«No tolero la incomodidad ni puedo frenarme.»',
    description: 'Dificultad para sostener esfuerzos, tolerar la frustración o controlar impulsos y emociones.',
    looksLike: ['Dejar tareas a mitad de camino.', 'Explotar o actuar sin pensar.', 'Buscar alivio rápido aunque después cueste.'],
    healthyAdult: 'La incomodidad pasa. Puedo dar un paso chico aunque no tenga ganas.',
  },
  // ------------------------------------------------------------ los demás primero
  {
    id: 'subyugacion',
    domain: 'otros',
    name: 'Sometimiento',
    belief: '«Si digo lo que quiero, se van a enojar o me van a dejar.»',
    description: 'Ceder el control a los demás para evitar el conflicto o el rechazo, y guardar la rabia.',
    looksLike: ['Decir que sí cuando se quiere decir que no.', 'No saber qué se quiere.', 'Resentimiento acumulado que a veces explota.'],
    healthyAdult: 'Mis deseos cuentan. Puedo decirlos con respeto y tolerar que al otro no le guste.',
  },
  {
    id: 'autosacrificio',
    domain: 'otros',
    name: 'Autosacrificio',
    belief: '«Mi deber es ocuparme de los demás antes que de mí.»',
    description: 'Atender siempre las necesidades ajenas, por empatía o culpa, a costa de las propias.',
    looksLike: ['Ser quien cuida a todos y no recibe.', 'Culpa al descansar o pedir ayuda.', 'Cansancio y dolores sin causa clara.'],
    healthyAdult: 'Cuidarme también es cuidar a los demás. Puedo dar sin vaciarme.',
  },
  {
    id: 'aprobacion',
    domain: 'otros',
    name: 'Búsqueda de aprobación',
    belief: '«Valgo si los demás me aprueban.»',
    description: 'Poner demasiado peso en la mirada de los demás: el reconocimiento, el estatus o la imagen.',
    looksLike: ['Cambiar de opinión según con quién se está.', 'Mucho tiempo pendiente de la imagen.', 'Decisiones guiadas por lo que van a pensar.'],
    healthyAdult: 'Puedo disfrutar del reconocimiento sin depender de él. Mi valor no se vota.',
  },
  // ------------------------------------------------------------ hipervigilancia
  {
    id: 'negatividad',
    domain: 'hipervigilancia',
    name: 'Negatividad y pesimismo',
    belief: '«Seguro algo va a salir mal.»',
    description: 'Fijarse sobre todo en lo negativo y esperar que las cosas empeoren.',
    looksLike: ['Preocuparse mucho y disfrutar poco.', 'Descartar lo bueno como suerte.', 'Prepararse siempre para lo peor.'],
    healthyAdult: 'Lo malo puede pasar, y lo bueno también. Puedo mirar las dos columnas.',
  },
  {
    id: 'inhibicion-emocional',
    domain: 'hipervigilancia',
    name: 'Inhibición emocional',
    belief: '«Mostrar lo que siento está mal o es peligroso.»',
    description: 'Contener emociones, sobre todo el enojo, la alegría o la vulnerabilidad, para no perder el control o la aprobación.',
    looksLike: ['Parecer frío o muy racional.', 'Costar decir «te quiero» o «me dolió».', 'Tensión en el cuerpo.'],
    healthyAdult: 'Mis emociones tienen sentido. Puedo mostrarlas de a poco, con quien es seguro.',
  },
  {
    id: 'autoexigencia',
    domain: 'hipervigilancia',
    name: 'Estándares inflexibles',
    belief: '«Tengo que hacerlo perfecto; nunca alcanza.»',
    description: 'Exigencias muy altas para uno, y a veces para otros, que dejan poco lugar al descanso y al disfrute.',
    looksLike: ['Perfeccionismo y listas interminables.', 'Culpa al descansar.', 'Criticarse con dureza por errores pequeños.'],
    healthyAdult: 'Lo suficientemente bien es bueno. Descansar es parte del trabajo.',
  },
  {
    id: 'castigo',
    domain: 'hipervigilancia',
    name: 'Castigo',
    belief: '«Los errores merecen castigo, también los míos.»',
    description: 'Creer que quien se equivoca debe pagar, y costar perdonar a otros o a uno mismo.',
    looksLike: ['Mucha dureza ante los errores.', 'Rencor que dura.', 'Castigarse o privarse de cosas.'],
    healthyAdult: 'Equivocarse es humano. Puedo reparar y aprender sin castigarme.',
  },
];

export type ModeGroup = 'nino' | 'critico' | 'afrontamiento' | 'sano';

export const MODE_GROUP_LABEL: Record<ModeGroup, { title: string; help: string }> = {
  nino: { title: 'Las partes niñas', help: 'Necesitan cuidado y que alguien escuche lo que sienten.' },
  critico: { title: 'Las voces críticas', help: 'Necesitan un límite firme.' },
  afrontamiento: { title: 'Las formas de protegerte', help: 'Necesitan reconocimiento y otras formas de cuidarte.' },
  sano: { title: 'Las partes sanas', help: 'Se fortalecen con práctica.' },
};

export interface SchemaMode {
  id: string;
  group: ModeGroup;
  name: string;
  description: string;
  signs: string[];
  /** Qué ayuda cuando aparece. */
  helps: string;
  practiceId?: string;
}

export const MODES: SchemaMode[] = [
  {
    id: 'nino-vulnerable',
    group: 'nino',
    name: 'Niño vulnerable',
    description: 'Siente miedo, tristeza, soledad o vergüenza. Aparece cuando algo despierta un viejo dolor.',
    signs: ['Ganas de llorar o de esconderse.', 'Sentirse chico frente a otros.', 'Pensar «nadie me quiere» o «no puedo».'],
    helps: 'Calma, cuidado y la presencia del adulto sano: «Estoy aquí. Ahora te cuido yo».',
    practiceId: 'cuidar-a-la-parte-vulnerable',
  },
  {
    id: 'nino-enojado',
    group: 'nino',
    name: 'Niño enojado',
    description: 'Siente rabia porque una necesidad no se atiende. A veces protesta de forma que aleja a los demás.',
    signs: ['Ganas de gritar o portazos.', 'Sentir que es injusto.', 'Rabia que sube rápido.'],
    helps: 'Validar el enojo y buscar qué necesidad defiende. Expresarla sin dañar.',
    practiceId: 'reconocer-el-modo',
  },
  {
    id: 'nino-impulsivo',
    group: 'nino',
    name: 'Niño impulsivo',
    description: 'Quiere lo que quiere ya. Le cuesta esperar o tolerar la frustración.',
    signs: ['Actuar sin pensar.', 'Abandonar cuando algo aburre.', 'Gastos, comidas o compras de golpe.'],
    helps: 'Límites amables y un paso de espera: «Lo quieres ya; probemos esperar diez minutos».',
    practiceId: 'surfear-impulso',
  },
  {
    id: 'critico-punitivo',
    group: 'critico',
    name: 'Crítico punitivo',
    description: 'Castiga y humilla. Suele sonar como alguien de la historia de la persona.',
    signs: ['«Eres un desastre.»', 'Ganas de castigarse.', 'Desprecio hacia uno mismo.'],
    helps: 'Un límite firme del adulto sano: «Así no». No se discute con él, se lo frena.',
    practiceId: 'dialogo-con-el-critico',
  },
  {
    id: 'critico-exigente',
    group: 'critico',
    name: 'Crítico exigente',
    description: 'Exige sin descanso: más, mejor, ya. Nunca alcanza.',
    signs: ['«Podrías haberlo hecho mejor.»', 'Culpa al descansar.', 'Listas que no terminan.'],
    helps: 'Bajar la vara a algo realista y darle lugar al descanso y al juego.',
    practiceId: 'dialogo-con-el-critico',
  },
  {
    id: 'rendicion',
    group: 'afrontamiento',
    name: 'Rendición complaciente',
    description: 'Cede y complace para evitar el conflicto o el rechazo, aunque eso confirme el esquema.',
    signs: ['Decir que sí sin querer.', 'Aguantar malos tratos.', 'Pedir perdón de más.'],
    helps: 'Reconocer el miedo de fondo y ensayar pedir algo pequeño.',
    practiceId: 'tres-formas-de-afrontar',
  },
  {
    id: 'protector-desapegado',
    group: 'afrontamiento',
    name: 'Protector desapegado',
    description: 'Desconecta las emociones para no sufrir. Todo da igual, nada duele. A veces se calma con pantallas, comida o trabajo.',
    signs: ['Sentirse vacío o anestesiado.', 'Distraerse sin parar.', 'Alejarse de la gente.'],
    helps: 'Agradecerle que protegió y acercarse de a poco a lo que se siente, con calma.',
    practiceId: 'tres-formas-de-afrontar',
  },
  {
    id: 'sobrecompensador',
    group: 'afrontamiento',
    name: 'Sobrecompensador',
    description: 'Contraataca: controla, se muestra superior o agresivo para no sentirse vulnerable.',
    signs: ['Necesitar ganar siempre.', 'Controlar todo.', 'Burlarse o atacar primero.'],
    helps: 'Ver la parte vulnerable que está detrás y buscar formas de protegerla sin atacar.',
    practiceId: 'tres-formas-de-afrontar',
  },
  {
    id: 'adulto-sano',
    group: 'sano',
    name: 'Adulto sano',
    description: 'Ve todo con calma. Cuida a las partes niñas, frena al crítico y elige lo que sirve a largo plazo.',
    signs: ['Poder pensar y sentir a la vez.', 'Firmeza amable.', 'Elegir en lugar de reaccionar.'],
    helps: 'Práctica diaria: la tarjeta del esquema, el diario y los diálogos.',
    practiceId: 'adulto-sano',
  },
  {
    id: 'nino-feliz',
    group: 'sano',
    name: 'Niño feliz',
    description: 'Juega, disfruta, se ríe y se siente conectado. Aparece cuando las necesidades están cubiertas.',
    signs: ['Perder la noción del tiempo jugando.', 'Curiosidad.', 'Sentirse liviano.'],
    helps: 'Hacerle lugar en la semana, sin que tenga que ser productivo.',
    practiceId: 'dar-lugar-al-nino-feliz',
  },
];

export const SCHEMA_BY_ID = Object.fromEntries(SCHEMAS.map((s) => [s.id, s])) as Record<string, EarlySchema>;
