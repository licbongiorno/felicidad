/**
 * Laboratorio de comunicación no violenta (Rosenberg, 2003): entrenamientos breves y un vocabulario.
 *
 * - Distinguir: juegos de dos opciones sobre lo que más cuesta (observación o evaluación,
 *   sentimiento o pseudosentimiento, pedido o exigencia, necesidad o estrategia, pedido de
 *   conexión o de acción). Los dos últimos se inspiran en el cuaderno de Van Stappen (2017).
 * - Reescribir: una frase en «lenguaje chacal» (la metáfora es de Rosenberg) para pasar a
 *   «lenguaje jirafa» con sus cuatro partes. Lo que la persona escribe no se guarda ni se envía.
 *
 * Los ejemplos son propios: no son citas del libro.
 */

export interface NvcSortItem {
  text: string;
  /** true si es la forma CNV (observación, sentimiento o pedido). */
  nvc: boolean;
  why: string;
}

export interface NvcSortSet {
  id: string;
  title: string;
  intro: string;
  /** Etiqueta del botón para la forma CNV y para la otra. */
  yes: string;
  no: string;
  items: NvcSortItem[];
}

export const NVC_SORT_SETS: NvcSortSet[] = [
  {
    id: 'observacion',
    title: '¿Observación o evaluación?',
    intro: 'Una observación describe lo que pasó, como lo registraría una cámara. Una evaluación le suma un juicio sobre la persona.',
    yes: 'Observación',
    no: 'Evaluación',
    items: [
      { text: 'Llegaste veinte minutos después de la hora que acordamos.', nvc: true, why: 'Dice qué pasó y cuánto tiempo, sin juzgar.' },
      { text: 'Eres un impuntual.', nvc: false, why: 'Es una etiqueta sobre la persona, no una conducta.' },
      { text: 'Siempre te olvidas de lo que te pido.', nvc: false, why: 'El «siempre» exagera y suena a reproche.' },
      { text: 'Esta semana te pedí dos veces que sacaras la basura y quedó en la cocina.', nvc: true, why: 'Cuenta cuántas veces y qué pasó, con datos concretos.' },
      { text: 'En la reunión hablaste mientras yo presentaba.', nvc: true, why: 'Describe una conducta que cualquiera pudo ver.' },
      { text: 'En la reunión fuiste un maleducado.', nvc: false, why: 'Juzga a la persona en vez de describir qué hizo.' },
      { text: 'No me contestaste el mensaje de ayer.', nvc: true, why: 'Es un hecho que se puede comprobar.' },
      { text: 'No te importa nada de lo que te digo.', nvc: false, why: 'Supone lo que la otra persona siente o piensa.' },
    ],
  },
  {
    id: 'sentimiento',
    title: '¿Sentimiento o pseudosentimiento?',
    intro:
      'Un sentimiento habla de lo que pasa dentro tuyo: tristeza, miedo, alivio. Un pseudosentimiento parece una emoción, pero en realidad dice lo que el otro te hizo.',
    yes: 'Sentimiento',
    no: 'Pseudosentimiento',
    items: [
      { text: 'Me siento triste.', nvc: true, why: 'Nombra una emoción propia.' },
      { text: 'Me siento ignorado.', nvc: false, why: 'Dice lo que crees que el otro hace. Detrás puede haber tristeza o soledad.' },
      { text: 'Me siento manipulada.', nvc: false, why: 'Acusa al otro de una intención. Detrás puede haber desconfianza o enojo.' },
      { text: 'Estoy preocupado.', nvc: true, why: 'Describe un estado propio, sin culpar a nadie.' },
      { text: 'Siento que no me respetas.', nvc: false, why: '«Siento que» suele introducir un juicio, no una emoción.' },
      { text: 'Me siento aliviada.', nvc: true, why: 'Es una emoción propia.' },
      { text: 'Me siento usado.', nvc: false, why: 'Habla de lo que el otro hizo. Detrás puede haber enojo o decepción.' },
      { text: 'Estoy cansada y frustrada.', nvc: true, why: 'Nombra estados propios.' },
    ],
  },
  {
    id: 'pedido',
    title: '¿Pedido o exigencia?',
    intro:
      'Un pedido es concreto, se puede cumplir y acepta un «no» como respuesta. Una exigencia no deja lugar al «no», o pide algo tan vago que nadie sabe cómo cumplirlo.',
    yes: 'Pedido',
    no: 'Exigencia',
    items: [
      { text: '¿Podrías avisarme por mensaje si vas a llegar más de diez minutos tarde?', nvc: true, why: 'Es concreto y deja lugar a responder.' },
      { text: 'Tienes que ser más responsable.', nvc: false, why: 'Es vago y suena a orden: no dice qué hacer.' },
      { text: 'Quiero que me respetes.', nvc: false, why: 'No dice qué conducta concreta ayudaría.' },
      { text: '¿Estarías dispuesta a apagar el celular durante la cena de hoy?', nvc: true, why: 'Dice qué, cuándo, y pregunta si la otra persona quiere.' },
      { text: 'O lavas los platos o no salimos.', nvc: false, why: 'Amenaza con un castigo si la respuesta es «no».' },
      { text: '¿Me contarías qué entendiste de lo que te dije?', nvc: true, why: 'Es concreto y ayuda a comprobar que se entendió.' },
      { text: 'Deja de hacerme sentir mal.', nvc: false, why: 'Pide dejar de hacer algo, sin decir qué hacer en cambio.' },
      { text: '¿Podemos hablar media hora el sábado sobre los gastos?', nvc: true, why: 'Propone algo concreto que se puede aceptar o cambiar.' },
    ],
  },
  {
    id: 'necesidad',
    title: '¿Necesidad o estrategia?',
    intro:
      'Una necesidad es algo que toda persona necesita, como descanso o compañía, y no depende de alguien en particular. Una estrategia es una forma concreta de cubrirla: «que vengas», «que te calles».',
    yes: 'Necesidad',
    no: 'Estrategia',
    items: [
      { text: 'Necesito compañía.', nvc: true, why: 'Es algo que cualquiera puede necesitar, y hay muchas formas de cubrirlo.' },
      { text: 'Necesito que vengas a verme.', nvc: false, why: 'Pide una acción de una persona. Detrás puede estar la necesidad de compañía o de cercanía.' },
      { text: 'Necesito tranquilidad.', nvc: true, why: 'No nombra a nadie ni una acción: es la necesidad misma.' },
      { text: 'Necesito que te calles cuando hablo.', nvc: false, why: 'Es una estrategia. Detrás puede haber necesidad de ser escuchado o de concentración.' },
      { text: 'Necesito más tiempo para hablar.', nvc: false, why: 'Es una forma de cubrir algo, como ser escuchada o comprender. Está cerca, pero es una estrategia.' },
      { text: 'Necesito sentirme tenida en cuenta.', nvc: true, why: 'Nombra algo universal: consideración.' },
      { text: 'Necesito que me pidas perdón.', nvc: false, why: 'Pide un acto concreto. Detrás puede estar la necesidad de reconocimiento o de reparar el vínculo.' },
      { text: 'Necesito descanso.', nvc: true, why: 'Es una necesidad del cuerpo que todos compartimos.' },
    ],
  },
  {
    id: 'conexion',
    title: '¿Pedido de conexión o de acción?',
    intro:
      'Rosenberg distingue dos tipos de pedido. Uno busca saber cómo le llegó al otro lo que dijiste. El otro pide que haga algo concreto. Casi siempre conviene empezar por el de conexión.',
    yes: 'Conexión',
    no: 'Acción',
    items: [
      { text: '¿Me cuentas qué entendiste de lo que te dije?', nvc: true, why: 'Busca saber cómo le llegó lo que dijiste.' },
      { text: '¿Podrías lavar los platos antes de las diez?', nvc: false, why: 'Pide algo concreto para hacer.' },
      { text: '¿Cómo te cae lo que te acabo de decir?', nvc: true, why: 'Invita a la otra persona a contar qué le pasa.' },
      { text: '¿Miramos juntos la agenda para elegir un día?', nvc: false, why: 'Propone una acción concreta.' },
      { text: '¿Qué es lo más importante para ti de todo esto?', nvc: true, why: 'Abre la charla a lo que necesita el otro.' },
      { text: '¿Me avisas por mensaje cuando llegues?', nvc: false, why: 'Pide una acción clara y posible.' },
    ],
  },
];

export interface NvcRewrite {
  id: string;
  /** Frase reactiva, en «lenguaje chacal». */
  reactive: string;
  context: string;
  /** Una versión posible en «lenguaje jirafa», separada en sus cuatro partes. */
  parts: { observation: string; feeling: string; need: string; request: string };
}

export const NVC_REWRITES: NvcRewrite[] = [
  {
    id: 'platos',
    reactive: '¡Nunca lavas nada, eres un egoísta!',
    context: 'Con quien convives. Hay platos del día anterior en la pileta.',
    parts: {
      observation: 'Cuando veo los platos de ayer todavía en la pileta,',
      feeling: 'me siento cansada y un poco sola',
      need: 'porque necesito que las tareas de la casa sean compartidas.',
      request: '¿Podrías lavarlos antes de la cena?',
    },
  },
  {
    id: 'celular',
    reactive: 'Siempre estás con ese celular, ni me escuchas.',
    context: 'Con tu pareja, mientras le cuentas algo de tu día.',
    parts: {
      observation: 'Mientras te contaba lo de mi trabajo, miraste el celular varias veces,',
      feeling: 'y me sentí triste',
      need: 'porque necesito sentir que me escuchas.',
      request: '¿Podrías dejar el celular un rato mientras terminamos de hablar?',
    },
  },
  {
    id: 'reunion',
    reactive: 'Otra vez me interrumpiste. Eres insoportable.',
    context: 'Con una compañera de trabajo, después de una reunión.',
    parts: {
      observation: 'En la reunión de hoy, empezaste a hablar dos veces antes de que yo terminara,',
      feeling: 'y me sentí frustrado',
      need: 'porque me importa poder explicar mi parte completa.',
      request: '¿Podrías esperar a que termine antes de responder en la próxima reunión?',
    },
  },
  {
    id: 'hijo-tarde',
    reactive: '¡Eres un irresponsable! ¡Me tenías muerta de miedo!',
    context: 'Con tu hijo adolescente, que volvió una hora después de lo acordado sin avisar.',
    parts: {
      observation: 'Llegaste a la una y habíamos quedado a las doce, y no me avisaste,',
      feeling: 'y estuve muy asustada',
      need: 'porque necesito saber que estás bien.',
      request: 'La próxima vez, ¿me mandarías un mensaje si te vas a demorar?',
    },
  },
  {
    id: 'amiga',
    reactive: 'Ya sé que no te importo, siempre cancelas a último momento.',
    context: 'Con una amiga que canceló una salida una hora antes.',
    parts: {
      observation: 'Cancelaste la salida una hora antes, y es la segunda vez este mes,',
      feeling: 'y me sentí desilusionada',
      need: 'porque valoro mucho el tiempo que pasamos juntas.',
      request: '¿Podríamos elegir ahora otro día que te quede cómodo?',
    },
  },
  {
    id: 'yo-mismo',
    reactive: 'Soy un desastre, no puedo hacer nada bien.',
    context: 'Contigo mismo, después de olvidarte de pagar una cuenta. La CNV también sirve para hablarte a ti.',
    parts: {
      observation: 'Me olvidé de pagar la cuenta de la luz antes del vencimiento,',
      feeling: 'y estoy frustrado y preocupado',
      need: 'porque necesito orden y tranquilidad con mis cuentas.',
      request: 'Voy a pagarla hoy y a poner un recordatorio para el mes que viene.',
    },
  },
];

export const NVC_PART_LABEL: Record<keyof NvcRewrite['parts'], string> = {
  observation: 'Observación',
  feeling: 'Sentimiento',
  need: 'Necesidad',
  request: 'Pedido',
};

/** Vocabulario para ponerle nombre a lo que pasa. Listas propias, orientativas. */
export const NVC_FEELINGS_MET = [
  'aliviado', 'agradecido', 'animado', 'calmo', 'cariñoso', 'confiado', 'contento', 'curioso', 'emocionado', 'entusiasmado',
  'esperanzado', 'inspirado', 'liviano', 'orgulloso', 'relajado', 'satisfecho', 'sereno', 'tierno', 'tranquilo', 'vital',
];

export const NVC_FEELINGS_UNMET = [
  'abrumado', 'agotado', 'angustiado', 'ansioso', 'asustado', 'avergonzado', 'cansado', 'confundido', 'decepcionado', 'desanimado',
  'frustrado', 'impaciente', 'incómodo', 'inquieto', 'irritado', 'nervioso', 'preocupado', 'solo', 'tenso', 'triste',
];

/** Palabras que suenan a sentimiento pero dicen lo que creemos que otro nos hizo. */
export const NVC_PSEUDO_FEELINGS = [
  'abandonado', 'acorralado', 'atacado', 'criticado', 'engañado', 'ignorado', 'incomprendido', 'manipulado', 'presionado', 'rechazado',
  'traicionado', 'usado',
];

export const NVC_NEEDS: { group: string; needs: string[] }[] = [
  { group: 'Cuerpo y descanso', needs: ['descanso', 'alimento', 'movimiento', 'salud', 'abrigo', 'contacto físico'] },
  { group: 'Seguridad', needs: ['protección', 'estabilidad', 'previsibilidad', 'confianza', 'orden'] },
  { group: 'Conexión', needs: ['compañía', 'cercanía', 'ser escuchado', 'comprensión', 'apoyo', 'reconocimiento', 'pertenencia', 'respeto'] },
  { group: 'Autonomía', needs: ['elegir', 'libertad', 'espacio propio', 'tiempo propio', 'decidir a mi ritmo'] },
  { group: 'Sentido', needs: ['aportar', 'aprender', 'crecer', 'claridad', 'coherencia', 'esperanza'] },
  { group: 'Juego y disfrute', needs: ['alegría', 'humor', 'diversión', 'belleza', 'placer'] },
  { group: 'Integridad', needs: ['autenticidad', 'honestidad', 'ser fiel a mis valores', 'respeto por mí'] },
];
