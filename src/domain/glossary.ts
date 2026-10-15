import { PACK_GLOSSARY } from './packs';

/** Glosario: términos técnicos usados en la app, en lenguaje claro, con su sección de referencia. */

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  /** Dónde profundizar. */
  articleId?: string;
  practiceId?: string;
  /** Otro recurso de la app (p. ej. una página que no es artículo). */
  seeAlso?: { href: string; label: string };
}

const BASE_GLOSSARY: GlossaryTerm[] = [
  { id: 'aceptacion', term: 'Aceptación', definition: 'Permitir que pensamientos, emociones y sensaciones estén presentes sin luchar contra ellos. No es resignarse: es dejar de gastar energía en una pelea que no se gana.', articleId: 'flexibilidad-psicologica', practiceId: 'hacer-espacio' },
  { id: 'activacion-conductual', term: 'Activación conductual', definition: 'Tratamiento que rompe el círculo del desánimo empezando por la acción: programar actividades pequeñas de placer, logro y conexión antes de tener ganas.', articleId: 'activacion-conductual', practiceId: 'activacion-conductual' },
  { id: 'asertividad', term: 'Asertividad', definition: 'Expresar lo que necesitas o piensas con claridad y respeto, hacia el otro y hacia ti. Es la vía entre callar y explotar.', articleId: 'asertividad-y-limites', practiceId: 'dear-man' },
  { id: 'aceptacion-radical', term: 'Aceptación radical', definition: 'Aceptar por completo, con la mente y con el cuerpo, que algo es como es. No es aprobarlo ni rendirse: es dejar de pelear con lo que no se puede cambiar.', articleId: 'habilidades-dbt', practiceId: 'aceptacion-radical' },
  { id: 'antidoto', term: 'Antídoto', definition: 'En la psicología contemplativa, estado mental que se cultiva para contrarrestar una emoción aflictiva; por ejemplo, la benevolencia frente a la ira.', articleId: 'antidotos-y-regulacion' },
  { id: 'autocompasion', term: 'Autocompasión', definition: 'Tratarse en los momentos difíciles con la amabilidad con que se trataría a un buen amigo. Tiene tres componentes: atención plena, humanidad compartida y amabilidad.', articleId: 'autocompasion', practiceId: 'pausa-autocompasion' },
  { id: 'autodistanciamiento', term: 'Autodistanciamiento', definition: 'Observar la propia experiencia desde fuera, como un observador o hablándose en tercera persona. Reduce la intensidad emocional.', articleId: 'antidotos-y-regulacion' },
  { id: 'defusion', term: 'Defusión cognitiva', definition: 'Ver los pensamientos como lo que son (palabras e imágenes en la mente) y no como verdades u órdenes. Por ejemplo: «estoy teniendo el pensamiento de que…».', articleId: 'flexibilidad-psicologica', practiceId: 'pajaros-en-el-cielo' },
  { id: 'dbt', term: 'Terapia dialéctico-conductual (DBT)', definition: 'Tratamiento creado por Marsha Linehan que combina aceptación y cambio. Enseña habilidades de conciencia plena, tolerancia al malestar, regulación emocional y relaciones.', articleId: 'habilidades-dbt' },
  { id: 'distorsion-cognitiva', term: 'Distorsión cognitiva', definition: 'Forma habitual en que la mente distorsiona la realidad, como catastrofizar o leer la mente. También se llaman trampas del pensamiento.', seeAlso: { href: '/biblioteca/trampas-del-pensamiento', label: 'Ver las 12 trampas del pensamiento' } },
  { id: 'ecuanimidad', term: 'Ecuanimidad', definition: 'Estabilidad interior que permite sentir lo agradable y lo desagradable sin aferrarse ni rechazar. No es indiferencia.', practiceId: 'ecuanimidad' },
  { id: 'esquema', term: 'Esquema', definition: 'En la terapia de esquemas, un patrón profundo de creencias y emociones sobre uno mismo y los demás. Se forma cuando no se cubren necesidades emocionales básicas.', articleId: 'autoconocimiento', practiceId: 'adulto-sano' },
  { id: 'eudaimonia', term: 'Eudaimonía', definition: 'Bienestar entendido como vivir bien: con sentido, crecimiento y coherencia con los propios valores, más allá de sentirse bien en el momento.', articleId: 'eudaimonia-y-hedonia' },
  { id: 'evitacion-experiencial', term: 'Evitación experiencial', definition: 'Intentar no sentir o no pensar lo que resulta desagradable. Alivia a corto plazo, pero a largo plazo mantiene el malestar y estrecha la vida.', articleId: 'exposicion-gradual' },
  { id: 'exposicion', term: 'Exposición gradual', definition: 'Acercarse de forma progresiva y repetida a lo que se teme, para aprender que es tolerable. Es el componente con más evidencia en el tratamiento de la ansiedad.', articleId: 'exposicion-gradual' },
  { id: 'fatiga-empatia', term: 'Fatiga por empatía', definition: 'Agotamiento de quien resuena de forma sostenida con el dolor ajeno. La compasión, que añade el deseo de ayudar, protege de ella.', articleId: 'cuidar-sin-agotarse' },
  { id: 'flexibilidad-psicologica', term: 'Flexibilidad psicológica', definition: 'Capacidad de estar en contacto con el presente y actuar según los propios valores, incluso cuando aparece malestar.', articleId: 'flexibilidad-psicologica' },
  { id: 'granularidad', term: 'Granularidad emocional', definition: 'Capacidad de distinguir con precisión entre emociones parecidas (frustración, decepción, vergüenza). Facilita regularlas.', articleId: 'granularidad-emocional', seeAlso: { href: '/biblioteca/rueda-de-emociones', label: 'Rueda de emociones' } },
  { id: 'humanidad-compartida', term: 'Humanidad compartida', definition: 'Reconocer que el sufrimiento y los errores son parte de la experiencia humana, no una prueba de que algo anda mal en uno.', articleId: 'autocompasion' },
  { id: 'intencion-implementacion', term: 'Intención de implementación', definition: 'Plan con la forma «si ocurre X, entonces haré Y». Traslada la decisión a un momento de calma y aumenta la probabilidad de actuar.', articleId: 'sentido-y-valores' },
  { id: 'mente-sabia', term: 'Mente sabia', definition: 'En la DBT, el punto de equilibrio entre la mente emocional y la racional: reconoce lo que sientes, mira los hechos y elige lo que te ayuda a largo plazo.', articleId: 'habilidades-dbt', practiceId: 'mente-sabia' },
  { id: 'meta-conciencia', term: 'Meta-conciencia', definition: 'Saber qué está haciendo la mente mientras lo hace; por ejemplo, darse cuenta de que uno se ha distraído.', articleId: 'familias-de-practica', practiceId: 'atencion-respiracion' },
  { id: 'metta', term: 'Metta (amor altruista)', definition: 'Deseo genuino de que otros estén bien. En la meditación se cultiva y se extiende progresivamente desde alguien querido hasta todos los seres.', practiceId: 'amor-altruista' },
  { id: 'monitoreo-abierto', term: 'Monitoreo abierto', definition: 'Práctica en la que no se elige un objeto de atención, sino que se observa todo lo que aparece en la experiencia.', articleId: 'familias-de-practica', practiceId: 'atencion-sonidos' },
  { id: 'mudita', term: 'Mudita (regocijo empático)', definition: 'Alegría por el bienestar y los logros de otras personas. Es el estado opuesto a la envidia.', practiceId: 'regocijo-empatico' },
  { id: 'neuroplasticidad', term: 'Neuroplasticidad', definition: 'Capacidad del sistema nervioso de cambiar con la experiencia repetida. La base de la idea de que el bienestar puede entrenarse.', articleId: 'plasticidad-del-bienestar' },
  { id: 'perma', term: 'PERMA', definition: 'Modelo de bienestar de Seligman con cinco elementos: emociones positivas, compromiso, relaciones, sentido y logro.', articleId: 'perma-y-psicologia-positiva' },
  { id: 'rumiacion', term: 'Rumiación', definition: 'Pensamiento repetitivo, abstracto y centrado en el «por qué», que mantiene el malestar sin llevar a soluciones.', articleId: 'rumiacion' },
  { id: 'saboreo', term: 'Saboreo', definition: 'Prolongar e intensificar una experiencia positiva prestándole atención con detalle.', practiceId: 'saboreo' },
  { id: 'suds', term: 'Escala SUDS (0–10)', definition: 'Escala de unidades subjetivas de malestar: valorar del 0 al 10 cuánta intensidad tiene una emoción. Permite comparar antes y después.' },
  { id: 'tolerancia-malestar', term: 'Tolerancia al malestar', definition: 'Capacidad de atravesar un momento de emoción extrema sin hacer algo que lo empeore. Es un módulo de la terapia dialéctico-conductual.', articleId: 'kit-de-crisis', practiceId: 'tipp' },
  { id: 'validacion', term: 'Validación', definition: 'Mostrar que entiendes por qué alguien siente lo que siente, aunque no estés de acuerdo con lo que hace. También puede hacerse con uno mismo.', articleId: 'habilidades-dbt', practiceId: 'give-fast' },
  { id: 'valores', term: 'Valores', definition: 'Direcciones vitales elegidas (cómo quieres ser y actuar), que nunca se agotan. A diferencia de las metas, no se «tachan».', articleId: 'sentido-y-valores', practiceId: 'brujula-valores' },
  { id: 'yo-como-contexto', term: 'Yo como contexto', definition: 'La perspectiva estable desde la que se observan pensamientos y emociones, distinta de ellos.', practiceId: 'observador' },
  { id: 'logoterapia', term: 'Logoterapia', definition: 'Terapia creada por Viktor Frankl que pone en el centro la búsqueda de sentido. El sentido se descubre creando, viviendo o amando, y en la actitud ante lo inevitable.', articleId: 'logoterapia', practiceId: 'que-me-pide-la-vida' },
  { id: 'derreflexion', term: 'Derreflexión', definition: 'Técnica de la logoterapia para cuando uno está demasiado pendiente de sí mismo: llevar la atención hacia una tarea o una persona que importa.', articleId: 'logoterapia', practiceId: 'derreflexion' },
  { id: 'intencion-paradojica', term: 'Intención paradójica', definition: 'Técnica de Frankl que consiste en desear con humor aquello que se teme, para cortar el círculo del miedo anticipatorio. Se usa con miedos leves y concretos.', articleId: 'logoterapia', practiceId: 'intencion-paradojica' },
  { id: 'congruencia', term: 'Congruencia', definition: 'Para Carl Rogers, coincidencia entre lo que uno siente y es, y lo que muestra o cree que debería ser. También es una de las actitudes del terapeuta: ser auténtico.', articleId: 'psicologia-humanista', practiceId: 'yo-real-yo-ideal' },
  { id: 'aceptacion-incondicional', term: 'Aceptación incondicional', definition: 'Valorar a una persona sin condiciones, aunque no se aprueben todas sus conductas. Rogers la consideraba una condición clave para el cambio.', articleId: 'psicologia-humanista', practiceId: 'escucharme-sin-juzgar' },
  { id: 'sensacion-sentida', term: 'Sensación sentida', definition: 'Concepto de Eugene Gendlin: una sensación corporal difusa sobre una situación, todavía sin palabras. Escucharla con paciencia ayuda a entender lo que nos pasa.', articleId: 'psicologia-humanista', practiceId: 'escucharme-sin-juzgar' },
  { id: 'darse-cuenta', term: 'Darse cuenta', definition: 'En la terapia Gestalt, notar lo que pasa ahora afuera, en el cuerpo y en los pensamientos, sin explicarlo ni juzgarlo. Es el punto de partida del cambio.', articleId: 'gestalt', practiceId: 'darse-cuenta' },
  { id: 'asunto-pendiente', term: 'Asunto pendiente', definition: 'En la Gestalt, una experiencia que quedó incompleta, como algo no dicho o una despedida que no fue. Tiende a volver hasta que se cierra.', articleId: 'gestalt', practiceId: 'asuntos-pendientes' },
];

export const GLOSSARY: GlossaryTerm[] = [...BASE_GLOSSARY, ...PACK_GLOSSARY];
