/**
 * Tipologías para autoexploración (Laboratorio): eneagrama, preferencias junguianas y un
 * cuestionario abierto sobre la sombra.
 *
 * Decisiones clínicas:
 *  - Ni el eneagrama ni el MBTI tienen validez empírica sólida. Se ofrecen como herramientas
 *    para pensarse, nunca como diagnóstico ni como etiqueta («eres tipo X»).
 *  - Todos los ítems son originales. No copian ni parafrasean el RHETI (Riso-Hudson), el
 *    Wagner Enneagram Personality Style Scales ni el cuestionario MBTI, que tienen derechos
 *    de autor. Por eso tampoco se usa la marca MBTI como nombre del test.
 *  - Los resultados se guardan sólo en el dispositivo (localStorage), nunca en Firestore.
 *
 * Fuentes: Riso y Hudson (1999) para nombres, miedos y deseos básicos y líneas; Naranjo (1994)
 * para pasiones, fijaciones y defensas; Jung (1921/1971) y Myers y Myers (1980) para las
 * preferencias; Keirsey y Bates (1978) para los temperamentos.
 */

// ================================================================== eneagrama

export type EnneagramType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export const ENNEAGRAM_TYPE_IDS: EnneagramType[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export interface EnneagramItem {
  id: number;
  type: EnneagramType;
  text: string;
}

/** Escala Likert de 1 a 5 para los ítems del eneagrama. */
export const ENNEAGRAM_SCALE: { value: number; label: string }[] = [
  { value: 1, label: 'Nada que ver conmigo' },
  { value: 2, label: 'Poco parecido a mí' },
  { value: 3, label: 'Algo parecido a mí' },
  { value: 4, label: 'Bastante parecido a mí' },
  { value: 5, label: 'Muy parecido a mí' },
];

/** Afirmaciones originales, cinco por tipo, en primera persona y sobre conductas cotidianas. */
const ITEMS_BY_TYPE: Record<EnneagramType, string[]> = {
  1: [
    'Noto enseguida los errores, aunque sean pequeños.',
    'Me cuesta descansar si dejé algo mal hecho o a medio hacer.',
    'Tengo una voz interna que me corrige casi todo el día.',
    'Me molesta mucho cuando la gente no cumple lo que corresponde.',
    'Me enojo por dentro cuando las cosas no se hacen bien, aunque trato de no mostrarlo.',
  ],
  2: [
    'Me doy cuenta rápido de lo que otras personas necesitan.',
    'Me cuesta decir que no cuando alguien me pide ayuda.',
    'Me duele cuando ayudo mucho y nadie lo nota.',
    'Me resulta más fácil dar que pedir.',
    'Me gusta sentir que soy importante en la vida de los demás.',
  ],
  3: [
    'Me pongo metas y me esfuerzo mucho por alcanzarlas.',
    'Cuido cómo me ven los demás, sobre todo en el trabajo o el estudio.',
    'Siento que valgo más cuando logro cosas.',
    'Me adapto con facilidad a lo que se espera de mí en cada lugar.',
    'Cuando algo sale mal, paso rápido a la próxima tarea para no pensar en eso.',
  ],
  4: [
    'Siento que hay algo en mí que los demás no terminan de entender.',
    'Mis emociones son intensas y les doy mucha importancia.',
    'A veces miro lo que otros tienen y siento que a mí me falta algo.',
    'Me importa expresar quién soy de una forma propia y auténtica.',
    'La nostalgia no me resulta extraña; a veces hasta me inspira.',
  ],
  5: [
    'Necesito entender bien algo antes de actuar.',
    'Cuido mucho mi tiempo y mi energía, y me agota que me pidan demasiado.',
    'En un grupo nuevo, prefiero observar antes que participar.',
    'Necesito ratos a solas para recargarme y ordenar mis ideas.',
    'Me resulta más cómodo pensar lo que siento que mostrarlo.',
  ],
  6: [
    'Suelo imaginar qué podría salir mal para tener un plan.',
    'Me cuesta confiar en alguien hasta que demuestra que es de fiar.',
    'Dudo mucho antes de tomar una decisión importante.',
    'Me tranquiliza saber con quién puedo contar.',
    'Pido opinión o pregunto varias veces antes de hacer algo nuevo.',
  ],
  7: [
    'Siempre tengo varios planes o ideas dando vueltas.',
    'Me aburro rápido de la rutina.',
    'Cuando algo me pone mal, busco enseguida algo que me levante el ánimo.',
    'Me cuesta elegir una sola opción porque siento que me pierdo las otras.',
    'Veo el lado bueno de las cosas, incluso cuando otros se preocupan.',
  ],
  8: [
    'Digo lo que pienso de forma directa, aunque incomode.',
    'No me gusta que otros me controlen ni que decidan por mí.',
    'Si veo una injusticia, intervengo.',
    'Me cuesta mostrar fragilidad, incluso con gente cercana.',
    'Tomo el mando con facilidad cuando nadie lo hace.',
  ],
  9: [
    'Hago lo posible para evitar peleas y discusiones.',
    'Me cuesta saber qué quiero cuando otros ya opinaron.',
    'Postergo lo importante y me distraigo con cosas menores.',
    'La gente me dice que transmito calma y que es fácil estar conmigo.',
    'Prefiero acompañar lo que decide el grupo antes que imponer lo mío.',
  ],
};

/** 45 ítems intercalados (1, 2… 9, 1, 2…) para que los de un mismo tipo no queden juntos. */
export const ENNEAGRAM_ITEMS: EnneagramItem[] = [0, 1, 2, 3, 4].flatMap((round) =>
  ENNEAGRAM_TYPE_IDS.map((type) => ({ id: round * 9 + type, type, text: ITEMS_BY_TYPE[type][round] })),
);

export type EnneagramCenter = 'instintivo' | 'emocional' | 'mental';

export const ENNEAGRAM_CENTERS: Record<EnneagramCenter, { title: string; types: EnneagramType[]; theme: string }> = {
  instintivo: { title: 'Tríada instintiva o del cuerpo', types: [8, 9, 1], theme: 'Gira en torno al enojo, la autonomía y el control.' },
  emocional: { title: 'Tríada emocional o del corazón', types: [2, 3, 4], theme: 'Gira en torno a la imagen, la vergüenza y la necesidad de valer.' },
  mental: { title: 'Tríada mental o de la cabeza', types: [5, 6, 7], theme: 'Gira en torno al miedo, la seguridad y la búsqueda de orientación.' },
};

export interface EnneagramLine {
  to: EnneagramType;
  /** Qué suele cambiar en esa dirección. */
  text: string;
}

export interface EnneagramProfile {
  type: EnneagramType;
  /** Nombre habitual de Riso y Hudson. */
  name: string;
  center: EnneagramCenter;
  summary: string;
  /** Riso y Hudson (1999). */
  basicFear: string;
  basicDesire: string;
  /** Fijación del ego (Ichazo y Naranjo). */
  fixation: string;
  /** Pasión (Ichazo y Naranjo). */
  passion: string;
  /** Mecanismo de defensa según Naranjo (1994). */
  defense: string;
  /** Líneas de Riso y Hudson. */
  integration: EnneagramLine;
  disintegration: EnneagramLine;
  /** Sugerencia práctica que enlaza con una práctica del Gimnasio. */
  growth: { text: string; practiceId: string };
}

export const ENNEAGRAM_TYPES: EnneagramProfile[] = [
  {
    type: 1,
    name: 'El reformador',
    center: 'instintivo',
    summary: 'Busca hacer las cosas bien y mejorar su entorno. Tiene principios firmes y una voz interna exigente.',
    basicFear: 'Ser malo, corrupto o tener algo defectuoso.',
    basicDesire: 'Ser bueno, íntegro y vivir con equilibrio.',
    fixation: 'Resentimiento',
    passion: 'Ira',
    defense: 'Formación reactiva: mostrar lo contrario de lo que se siente, como amabilidad cuando hay enojo.',
    integration: { to: 7, text: 'Aparece más espontaneidad, humor y permiso para disfrutar sin que todo esté perfecto.' },
    disintegration: { to: 4, text: 'Aparecen la tristeza, la queja y la sensación de que nadie entiende el esfuerzo.' },
    growth: { text: 'Prueba hacer algo a propósito «suficientemente bien» y nota que el mundo sigue en pie.', practiceId: 'empezar-imperfecto' },
  },
  {
    type: 2,
    name: 'El ayudador',
    center: 'emocional',
    summary: 'Se orienta hacia los demás con calidez y generosidad. Puede olvidarse de sus propias necesidades.',
    basicFear: 'No ser querido ni merecer amor.',
    basicDesire: 'Sentirse querido.',
    fixation: 'Adulación',
    passion: 'Orgullo',
    defense: 'Represión: dejar fuera de la conciencia las propias necesidades y el enojo.',
    integration: { to: 4, text: 'Aparece el contacto con las propias emociones y necesidades, sin tener que ganarse el cariño.' },
    disintegration: { to: 8, text: 'Aparecen los reclamos, el tono controlador y el «después de todo lo que hice».' },
    growth: { text: 'Antes de ofrecer ayuda, pregúntate qué necesitas tú hoy y a quién podrías pedírselo.', practiceId: 'necesidades-que-pido' },
  },
  {
    type: 3,
    name: 'El triunfador',
    center: 'emocional',
    summary: 'Tiene energía, foco y ganas de lograr. Puede confundir lo que hace con lo que es.',
    basicFear: 'No tener valor propio, más allá de lo que logra.',
    basicDesire: 'Sentirse valioso y digno de aprecio.',
    fixation: 'Vanidad',
    passion: 'Vanidad o engaño',
    // Atribución menos firme: algunas fuentes posteriores asignan otra defensa al eneatipo 3.
    defense: 'Identificación: fundirse con el rol o la imagen que se espera de uno.',
    integration: { to: 6, text: 'Aparecen la cooperación y la lealtad: importa más el equipo que la propia imagen.' },
    disintegration: { to: 9, text: 'Aparecen el desgano, la desconexión y la sensación de andar en piloto automático.' },
    growth: { text: 'Elige una actividad que te importe por sí misma, no por lo que muestra de ti.', practiceId: 'brujula-valores' },
  },
  {
    type: 4,
    name: 'El individualista',
    center: 'emocional',
    summary: 'Busca autenticidad y tiene sensibilidad y creatividad. Puede quedarse en lo que falta.',
    basicFear: 'No tener identidad ni un sentido propio.',
    basicDesire: 'Encontrar su identidad y su lugar.',
    fixation: 'Melancolía',
    passion: 'Envidia',
    defense: 'Introyección: tomar para sí la culpa o la crítica que viene de afuera.',
    integration: { to: 1, text: 'Aparecen la disciplina y la constancia: la emoción se vuelve obra y acción.' },
    disintegration: { to: 2, text: 'Aparece la necesidad de ser necesitado y cierta dependencia de los demás.' },
    growth: { text: 'Nota lo que sí tienes hoy, con detalle, sin compararlo con lo que tienen otros.', practiceId: 'gratitud-contemplativa' },
  },
  {
    type: 5,
    name: 'El investigador',
    center: 'mental',
    summary: 'Tiene curiosidad, observa y piensa con profundidad. Puede retirarse a su mente y alejarse del cuerpo y de los otros.',
    basicFear: 'Ser inútil, incapaz o quedar sin recursos.',
    basicDesire: 'Ser capaz y competente.',
    fixation: 'Mezquindad o avaricia',
    passion: 'Avaricia',
    defense: 'Aislamiento: separar la emoción de la idea para pensar sin sentir.',
    integration: { to: 8, text: 'Aparece la confianza para actuar y ocupar espacio con el cuerpo, no sólo con las ideas.' },
    disintegration: { to: 7, text: 'Aparecen la dispersión y el salto de una idea a otra sin terminar ninguna.' },
    growth: { text: 'Dedica unos minutos a sentir el cuerpo en lugar de pensarlo.', practiceId: 'escaneo-corporal' },
  },
  {
    type: 6,
    name: 'El leal',
    center: 'mental',
    summary: 'Tiene compromiso y responsabilidad, y anticipa riesgos. Puede vivir con dudas y preocupación.',
    basicFear: 'Quedarse sin apoyo ni guía.',
    basicDesire: 'Tener seguridad y apoyo.',
    fixation: 'Cobardía o duda',
    passion: 'Miedo',
    defense: 'Proyección: ver afuera la amenaza o la intención que se siente adentro.',
    integration: { to: 9, text: 'Aparecen la calma y la confianza interior: no todo depende de prever lo peor.' },
    disintegration: { to: 3, text: 'Aparecen la competencia y la preocupación por la imagen para sentirse a salvo.' },
    growth: { text: 'Cuando aparezca el «¿y si…?», revisa qué datos tienes de verdad.', practiceId: 'comprobar-hechos' },
  },
  {
    type: 7,
    name: 'El entusiasta',
    center: 'mental',
    summary: 'Tiene alegría, versatilidad y muchas ideas. Puede escapar del malestar buscando lo siguiente.',
    basicFear: 'Sufrir carencias o quedar atrapado en el dolor.',
    basicDesire: 'Sentir satisfacción y tener sus necesidades cubiertas.',
    fixation: 'Planificación',
    passion: 'Gula',
    defense: 'Racionalización: encontrar buenas razones para no quedarse con lo difícil.',
    integration: { to: 5, text: 'Aparecen la profundidad y el foco: quedarse con una cosa y disfrutarla del todo.' },
    disintegration: { to: 1, text: 'Aparecen la crítica, la impaciencia y la rigidez con los demás.' },
    growth: { text: 'Elige una experiencia agradable y quédate con ella más tiempo del habitual.', practiceId: 'saboreo' },
  },
  {
    type: 8,
    name: 'El desafiador',
    center: 'instintivo',
    summary: 'Tiene fuerza, franqueza y ganas de proteger. Puede mostrar sólo la dureza y esconder la ternura.',
    basicFear: 'Ser dañado o controlado por otros.',
    basicDesire: 'Protegerse y dirigir su propia vida.',
    fixation: 'Venganza',
    passion: 'Lujuria, entendida como exceso o intensidad',
    defense: 'Negación: no registrar la propia fragilidad ni el límite.',
    integration: { to: 2, text: 'Aparecen la ternura y el cuidado abierto: la fuerza se pone al servicio de otros.' },
    disintegration: { to: 5, text: 'Aparecen el retiro, la desconfianza y el aislamiento.' },
    growth: { text: 'Cuando aparezca el enojo, busca qué otra emoción hay debajo y ponle nombre.', practiceId: 'mas-alla-del-enojo' },
  },
  {
    type: 9,
    name: 'El pacificador',
    center: 'instintivo',
    summary: 'Tiene calma, sabe escuchar y busca armonía. Puede perder de vista lo que quiere.',
    basicFear: 'La pérdida y la separación.',
    basicDesire: 'Tener paz interior y estabilidad.',
    fixation: 'Indolencia',
    passion: 'Pereza',
    // «Narcotización» es un término propio de Naranjo, no un mecanismo clásico del psicoanálisis.
    defense: 'Narcotización: adormecerse con rutinas y distracciones para no sentir el conflicto.',
    integration: { to: 3, text: 'Aparecen la energía y la iniciativa para ir hacia lo propio.' },
    disintegration: { to: 6, text: 'Aparecen la ansiedad, las dudas y la preocupación.' },
    growth: { text: 'Elige un paso pequeño hacia algo que quieres tú, y hazlo hoy.', practiceId: 'accion-comprometida' },
  },
];

export const ENNEAGRAM_BY_TYPE: Record<EnneagramType, EnneagramProfile> = Object.fromEntries(ENNEAGRAM_TYPES.map((t) => [t.type, t])) as Record<
  EnneagramType,
  EnneagramProfile
>;

export interface EnneagramScore {
  /** Puntaje medio (1 a 5) por tipo; 0 si no respondiste ningún ítem de ese tipo. */
  means: Record<EnneagramType, number>;
  /** Tipos de mayor a menor puntaje; en empate, por número. */
  order: EnneagramType[];
  /** Ítems respondidos con un valor válido. */
  answered: number;
}

const isLikert = (v: unknown): v is number => typeof v === 'number' && Number.isInteger(v) && v >= 1 && v <= 5;

/** Puntaje medio por tipo. Ignora ítems sin responder o con valores fuera de 1 a 5. */
export function scoreEnneagram(answers: Record<number, number>): EnneagramScore {
  const sum = {} as Record<EnneagramType, number>;
  const n = {} as Record<EnneagramType, number>;
  for (const t of ENNEAGRAM_TYPE_IDS) {
    sum[t] = 0;
    n[t] = 0;
  }
  let answered = 0;
  for (const item of ENNEAGRAM_ITEMS) {
    const v = answers[item.id];
    if (!isLikert(v)) continue;
    sum[item.type] += v;
    n[item.type] += 1;
    answered += 1;
  }
  const means = {} as Record<EnneagramType, number>;
  for (const t of ENNEAGRAM_TYPE_IDS) means[t] = n[t] ? sum[t] / n[t] : 0;
  const order = [...ENNEAGRAM_TYPE_IDS].sort((a, b) => means[b] - means[a] || a - b);
  return { means, order, answered };
}

// ================================================================== preferencias junguianas

export type Dichotomy = 'EI' | 'SN' | 'TF' | 'JP';
export type Pole = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
export const DICHOTOMY_IDS: Dichotomy[] = ['EI', 'SN', 'TF', 'JP'];

export interface JungianItem {
  id: number;
  dichotomy: Dichotomy;
  /** Polo de la izquierda (valor 1). */
  a: { pole: Pole; text: string };
  /** Polo de la derecha (valor 5). */
  b: { pole: Pole; text: string };
}

/** Escala bipolar: 1 y 2 acercan a la opción A, 3 es el medio, 4 y 5 acercan a la B. */
export const JUNGIAN_SCALE: { value: number; label: string }[] = [
  { value: 1, label: 'Mucho más A' },
  { value: 2, label: 'Algo más A' },
  { value: 3, label: 'Las dos por igual' },
  { value: 4, label: 'Algo más B' },
  { value: 5, label: 'Mucho más B' },
];

/** Ítems originales. El polo de la izquierda se alterna para no sesgar hacia un lado. */
export const JUNGIAN_ITEMS: JungianItem[] = [
  { id: 1, dichotomy: 'EI', a: { pole: 'E', text: 'Después de una semana intensa, recargo energía saliendo con gente.' }, b: { pole: 'I', text: 'Después de una semana intensa, recargo energía con tiempo a solas.' } },
  { id: 2, dichotomy: 'SN', a: { pole: 'S', text: 'Confío más en lo que puedo ver, tocar y comprobar.' }, b: { pole: 'N', text: 'Confío más en las corazonadas y en lo que podría pasar.' } },
  { id: 3, dichotomy: 'TF', a: { pole: 'T', text: 'Para decidir, pongo primero los argumentos y las consecuencias lógicas.' }, b: { pole: 'F', text: 'Para decidir, pongo primero cómo afecta a las personas y lo que valoro.' } },
  { id: 4, dichotomy: 'JP', a: { pole: 'J', text: 'Me gusta tener los planes cerrados con tiempo.' }, b: { pole: 'P', text: 'Me gusta dejar las cosas abiertas y decidir sobre la marcha.' } },
  { id: 5, dichotomy: 'EI', a: { pole: 'I', text: 'En una reunión, primero pienso y después hablo.' }, b: { pole: 'E', text: 'En una reunión, pienso mientras hablo.' } },
  { id: 6, dichotomy: 'SN', a: { pole: 'N', text: 'Con instrucciones nuevas, busco la idea general y me salto pasos.' }, b: { pole: 'S', text: 'Con instrucciones nuevas, sigo los pasos uno por uno.' } },
  { id: 7, dichotomy: 'TF', a: { pole: 'F', text: 'Si alguien me cuenta un problema, primero escucho y acompaño.' }, b: { pole: 'T', text: 'Si alguien me cuenta un problema, primero busco cómo resolverlo.' } },
  { id: 8, dichotomy: 'JP', a: { pole: 'P', text: 'Trabajo mejor con la fecha límite cerca y espacio para improvisar.' }, b: { pole: 'J', text: 'Trabajo mejor cuando termino con tiempo y sin apuro.' } },
  { id: 9, dichotomy: 'EI', a: { pole: 'E', text: 'En una fiesta, me entusiasma conocer gente nueva.' }, b: { pole: 'I', text: 'En una fiesta, prefiero charlar a fondo con una o dos personas.' } },
  { id: 10, dichotomy: 'SN', a: { pole: 'S', text: 'Me interesan los datos concretos y los detalles prácticos.' }, b: { pole: 'N', text: 'Me interesan los patrones, los significados y lo que podría ser.' } },
  { id: 11, dichotomy: 'TF', a: { pole: 'T', text: 'Prefiero decir una verdad clara, aunque suene dura.' }, b: { pole: 'F', text: 'Prefiero cuidar el vínculo, aunque tenga que suavizar lo que digo.' } },
  { id: 12, dichotomy: 'JP', a: { pole: 'J', text: 'Me alivia tachar tareas de una lista en orden.' }, b: { pole: 'P', text: 'Uso la lista como guía, pero cambio el orden según el día.' } },
  { id: 13, dichotomy: 'EI', a: { pole: 'I', text: 'Mi atención va sobre todo hacia mis ideas y mi mundo interno.' }, b: { pole: 'E', text: 'Mi atención va sobre todo hacia afuera: la gente y la acción.' } },
  { id: 14, dichotomy: 'SN', a: { pole: 'N', text: 'Me gusta imaginar cómo podrían ser las cosas dentro de unos años.' }, b: { pole: 'S', text: 'Me gusta ocuparme de lo que hay que hacer hoy.' } },
  { id: 15, dichotomy: 'TF', a: { pole: 'F', text: 'Me convence más una historia que me conmueve.' }, b: { pole: 'T', text: 'Me convence más un argumento bien armado.' } },
  { id: 16, dichotomy: 'JP', a: { pole: 'P', text: 'Un cambio de planes de último momento me resulta estimulante.' }, b: { pole: 'J', text: 'Un cambio de planes de último momento me incomoda.' } },
];

export interface DichotomyInfo {
  id: Dichotomy;
  title: string;
  question: string;
  poles: [{ pole: Pole; name: string; description: string }, { pole: Pole; name: string; description: string }];
  /** Origen de la dicotomía. */
  origin: string;
}

export const JUNGIAN_DICHOTOMIES: DichotomyInfo[] = [
  {
    id: 'EI',
    title: 'Extraversión e introversión',
    question: '¿Hacia dónde va tu energía?',
    poles: [
      { pole: 'E', name: 'Extraversión', description: 'La energía va hacia afuera: la gente, la acción y lo que pasa alrededor. Pensar en voz alta ayuda.' },
      { pole: 'I', name: 'Introversión', description: 'La energía va hacia adentro: las ideas, los recuerdos y el mundo propio. Pensar antes de hablar ayuda.' },
    ],
    origin: 'Es la distinción más conocida de Jung (1921). La extraversión es también uno de los cinco grandes rasgos, el mejor estudiado de todos.',
  },
  {
    id: 'SN',
    title: 'Sensación e intuición',
    question: '¿Cómo tomas la información?',
    poles: [
      { pole: 'S', name: 'Sensación', description: 'Prefiere lo concreto, lo que se ve y se comprueba. Presta atención a los detalles y a la experiencia.' },
      { pole: 'N', name: 'Intuición', description: 'Prefiere los patrones, las posibilidades y el sentido de conjunto. Mira hacia lo que podría ser.' },
    ],
    origin: 'Jung (1921) las llamó funciones de percepción: dos formas de enterarse de lo que pasa.',
  },
  {
    id: 'TF',
    title: 'Pensamiento y sentimiento',
    question: '¿Cómo decides?',
    poles: [
      { pole: 'T', name: 'Pensamiento', description: 'Decide con criterios lógicos e impersonales. Busca coherencia y causas.' },
      { pole: 'F', name: 'Sentimiento', description: 'Decide según valores y según cómo afecta a las personas. Busca armonía. No significa ser más emotivo.' },
    ],
    origin: 'Jung (1921) las llamó funciones de juicio: dos formas de evaluar lo que se percibe.',
  },
  {
    id: 'JP',
    title: 'Juicio y percepción',
    question: '¿Cómo te organizas con el mundo de afuera?',
    poles: [
      { pole: 'J', name: 'Juicio', description: 'Prefiere el orden, los planes y cerrar temas. Le alivia decidir.' },
      { pole: 'P', name: 'Percepción', description: 'Prefiere la flexibilidad y dejar opciones abiertas. Le alivia tener margen.' },
    ],
    origin:
      'Esta escala la agregaron Katharine Briggs e Isabel Briggs Myers. No está en Jung (1921) como dicotomía propia: Jung distinguía funciones de juicio y de percepción, pero no las usó como una cuarta escala.',
  },
];

export const DICHOTOMY_BY_ID: Record<Dichotomy, DichotomyInfo> = Object.fromEntries(JUNGIAN_DICHOTOMIES.map((d) => [d.id, d])) as Record<
  Dichotomy,
  DichotomyInfo
>;

export type PreferenceStrength = 'equilibrio' | 'leve' | 'moderada' | 'clara';

export interface DichotomyResult {
  dichotomy: Dichotomy;
  /** Polo preferido, o null si las respuestas quedaron en equilibrio. */
  pole: Pole | null;
  strength: PreferenceStrength;
  /** De 0 (equilibrio) a 1 (todas las respuestas en un extremo). */
  ratio: number;
  answered: number;
}

/** Primer polo de cada dicotomía (se usa como sentido positivo del puntaje). */
const FIRST_POLE: Record<Dichotomy, Pole> = { EI: 'E', SN: 'S', TF: 'T', JP: 'J' };
const SECOND_POLE: Record<Dichotomy, Pole> = { EI: 'I', SN: 'N', TF: 'F', JP: 'P' };

export function strengthOf(ratio: number): PreferenceStrength {
  if (ratio === 0) return 'equilibrio';
  if (ratio < 0.35) return 'leve';
  if (ratio < 0.7) return 'moderada';
  return 'clara';
}

/**
 * Por dicotomía: hacia qué polo se inclinan las respuestas y con qué fuerza.
 * Cada respuesta vale de −2 a +2 según cuánto se acerca a un polo; la fuerza es la suma
 * dividida por el máximo posible con los ítems respondidos.
 */
export function scoreJungian(answers: Record<number, number>): Record<Dichotomy, DichotomyResult> {
  const out = {} as Record<Dichotomy, DichotomyResult>;
  for (const d of DICHOTOMY_IDS) {
    let net = 0;
    let answered = 0;
    for (const item of JUNGIAN_ITEMS.filter((x) => x.dichotomy === d)) {
      const v = answers[item.id];
      if (!isLikert(v)) continue;
      answered += 1;
      // Positivo = hacia el polo B del ítem.
      const towardB = v - 3;
      net += item.b.pole === FIRST_POLE[d] ? towardB : -towardB;
    }
    const ratio = answered ? Math.abs(net) / (2 * answered) : 0;
    out[d] = {
      dichotomy: d,
      pole: net > 0 ? FIRST_POLE[d] : net < 0 ? SECOND_POLE[d] : null,
      strength: strengthOf(ratio),
      ratio,
      answered,
    };
  }
  return out;
}

export interface Temperament {
  id: 'NT' | 'NF' | 'SJ' | 'SP';
  name: string;
  summary: string;
  communication: string;
  helps: string;
}

/**
 * Temperamentos de Keirsey y Bates (1978), no de Jung. En el libro de 1978 se nombraban con
 * figuras griegas (Prometeo, Apolo, Epimeteo y Dionisio); los nombres que se usan aquí son
 * los que Keirsey adoptó en obras posteriores.
 */
export const TEMPERAMENTS: Temperament[] = [
  {
    id: 'NT',
    name: 'Racional (NT)',
    summary: 'Le interesan las ideas, los sistemas y entender cómo funcionan las cosas.',
    communication: 'Suele comunicarse de forma breve y precisa. Pregunta «¿por qué?» y discute para entender, no para pelear.',
    helps: 'Le ayudan las razones claras, la autonomía y que se valore su competencia. También recordar que no todo se resuelve pensando.',
  },
  {
    id: 'NF',
    name: 'Idealista (NF)',
    summary: 'Le interesan el sentido, el crecimiento y los vínculos auténticos.',
    communication: 'Suele comunicarse con metáforas y con atención a lo que el otro siente. Le importa ser comprendido.',
    helps: 'Le ayudan el reconocimiento sincero y los proyectos con sentido. También bajar las expectativas ideales sobre sí y los demás.',
  },
  {
    id: 'SJ',
    name: 'Guardián (SJ)',
    summary: 'Le interesan la responsabilidad, la pertenencia y que las cosas funcionen.',
    communication: 'Suele comunicarse de forma concreta, con datos y ejemplos. Valora la puntualidad y lo acordado.',
    helps: 'Le ayudan la previsión, las reglas claras y el agradecimiento por su esfuerzo. También permitirse descansar sin culpa.',
  },
  {
    id: 'SP',
    name: 'Artesano (SP)',
    summary: 'Le interesan la acción, la libertad y la experiencia directa.',
    communication: 'Suele comunicarse de forma directa y práctica, con humor. Prefiere mostrar antes que explicar.',
    helps: 'Le ayudan la variedad, el margen para improvisar y los resultados visibles. También sostener lo que lleva tiempo.',
  },
];

// ================================================================== sombra

export interface ShadowQuestion {
  id: string;
  question: string;
  /** Para qué sirve la pregunta. */
  purpose: string;
}

/** Preguntas abiertas para notar proyecciones. No tienen puntaje y no se guardan. */
export const SHADOW_QUESTIONS: ShadowQuestion[] = [
  {
    id: 'irritacion',
    question: '¿Qué rasgo de otras personas me irrita de manera desproporcionada?',
    purpose: 'La desproporción es una pista. A veces lo que más molesta afuera es algo que no aceptamos adentro.',
  },
  {
    id: 'elogio',
    question: '¿Qué elogio me incomoda o me cuesta creer?',
    purpose: 'La sombra también guarda cualidades valiosas. Lo que no podemos recibir suele ser algo propio sin lugar.',
  },
  {
    id: 'admiracion',
    question: '¿A quién admiro tanto que me siento menos a su lado?',
    purpose: 'La admiración intensa puede mostrar una capacidad tuya que todavía no desarrollaste.',
  },
  {
    id: 'lo-que-nunca',
    question: '¿Qué frase nunca querría que dijeran de mí?',
    purpose: 'Muestra la imagen que más rechazas. Ahí suele estar lo que quedó fuera de tu persona.',
  },
  {
    id: 'infancia',
    question: '¿Qué emociones o conductas no tenían lugar en mi casa durante mi infancia?',
    purpose: 'Lo que no se permitía de chicos suele guardarse. Nombrarlo ayuda a entender de dónde viene el rechazo.',
  },
  {
    id: 'critica',
    question: '¿Qué critico en otros que, si miro con honestidad, a veces también hago?',
    purpose: 'Es la forma más directa de notar una proyección. No busca culpa, sino reconocer.',
  },
  {
    id: 'sorpresa',
    question: '¿En qué situaciones reacciono de una forma que después me sorprende?',
    purpose: 'Las reacciones que no reconocemos como propias suelen venir de partes que quedaron en la sombra.',
  },
  {
    id: 'permiso',
    question: '¿Qué se permite otra persona que yo no me permito?',
    purpose: 'La envidia y el fastidio pueden señalar un deseo postergado: descanso, placer, enojo o ambición.',
  },
  {
    id: 'escondo',
    question: '¿Qué parte mía escondo en el trabajo o con mi familia?',
    purpose: 'Ayuda a ver la distancia entre la imagen que muestras y lo que también eres.',
  },
  {
    id: 'pedido',
    question: 'Si mi enojo o mi envidia pudieran hablar, ¿qué pedirían?',
    purpose: 'Integrar la sombra no es actuarla. Es escuchar la necesidad que hay detrás y buscarle una forma sana.',
  },
];

/** Prácticas y programa del paquete de Jung con los que sigue el cuestionario de la sombra. */
export const SHADOW_LINKS = {
  practiceIds: ['lo-que-me-irrita-del-otro', 'persona-y-sombra'],
  programId: 'encuentro-con-la-sombra',
};

/** Todas las prácticas que enlazan las tipologías (para el test de enlaces). */
export const TYPOLOGY_PRACTICE_IDS: string[] = [...ENNEAGRAM_TYPES.map((t) => t.growth.practiceId), ...SHADOW_LINKS.practiceIds, 'mis-funciones-psicologicas'];
