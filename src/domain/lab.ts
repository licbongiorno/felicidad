/**
 * Laboratorio: ejercicios interactivos para ensayar habilidades sin riesgo.
 *
 * - Simulador de conversaciones: guiones escritos y revisables (sin IA). Cada respuesta
 *   es asertiva, pasiva o agresiva, y recibe una explicación. Para ensayar DEAR MAN,
 *   GIVE y FAST antes de una conversación real.
 * - ¿Hecho o interpretación?: entrena «comprobar los hechos» (DBT) y la detección de
 *   trampas del pensamiento (TCC).
 * - Semáforo emocional y Mi caja de herramientas: qué hacer según la intensidad.
 */

export type ReplyStyle = 'asertivo' | 'pasivo' | 'agresivo';

export const STYLE_LABEL: Record<ReplyStyle, string> = {
  asertivo: 'Asertiva',
  pasivo: 'Pasiva',
  agresivo: 'Agresiva',
};

export interface SimOption {
  text: string;
  style: ReplyStyle;
  feedback: string;
}

export interface SimStep {
  /** Lo que dice la otra persona. */
  line: string;
  options: SimOption[];
}

export interface Simulation {
  id: string;
  title: string;
  /** Con quién y en qué situación. */
  context: string;
  goal: string;
  other: string;
  skills: string[];
  steps: SimStep[];
  closing: string;
}

export const SIMULATIONS: Simulation[] = [
  {
    id: 'decir-no-trabajo',
    title: 'Decir que no a más trabajo',
    context: 'Es viernes a las seis de la tarde. Ya te quedaste tarde dos veces esta semana y hoy tienes un compromiso.',
    goal: 'Salir a tu hora sin dañar la relación con tu jefa.',
    other: 'Tu jefa',
    skills: ['dear-man'],
    steps: [
      {
        line: '«¿Te puedes quedar un rato más? Hay que terminar el informe para el lunes.»',
        options: [
          { text: '«Bueno… sí, no hay problema.»', style: 'pasivo', feedback: 'Evitas el conflicto ahora, pero te alejas de lo que necesitas. Si se repite, el malestar se acumula.' },
          { text: '«Siempre lo mismo. ¿Nadie más trabaja aquí?»', style: 'agresivo', feedback: 'Expresas el enojo, pero como reproche. Es probable que la conversación se vuelva una discusión y no se resuelva nada.' },
          {
            text: '«Esta semana ya me quedé dos días. Hoy tengo un compromiso a las siete y necesito irme a mi hora.»',
            style: 'asertivo',
            feedback: 'Describes los hechos (D) y pides con claridad (A). Sin disculparte de más ni atacar.',
          },
        ],
      },
      {
        line: '«Entiendo, pero de verdad es urgente. No tengo a nadie más.»',
        options: [
          {
            text: '«Entiendo que es urgente. Hoy no puedo. El lunes llego una hora antes y lo dejo terminado.»',
            style: 'asertivo',
            feedback: 'Validas su preocupación (GIVE), mantienes el límite (disco rayado) y negocias una alternativa (N).',
          },
          { text: '«Está bien, me quedo. Pero es la última vez.»', style: 'pasivo', feedback: 'Cedes y prometes un límite futuro que cuesta más sostener. Prueba mantener el de hoy.' },
          { text: '«Ese no es mi problema.»', style: 'agresivo', feedback: 'Es un límite, pero dicho así daña la relación. Puedes sostenerlo y ser amable a la vez.' },
        ],
      },
      {
        line: '«Bueno… ¿seguro que el lunes temprano llegas con todo?»',
        options: [
          { text: '«Sí. A las nueve está en tu correo.»', style: 'asertivo', feedback: 'Confirmas el acuerdo con seguridad (A: aparentar confianza). Cumplirlo refuerza la confianza mutua.' },
          { text: '«Creo que sí… perdón, de verdad, perdón.»', style: 'pasivo', feedback: 'Disculparte de más resta fuerza a tu acuerdo (FAST: sin disculpas innecesarias).' },
          { text: '«Si no confías en mí, dímelo directamente.»', style: 'agresivo', feedback: 'Lees una crítica donde hay una pregunta. Comprueba los hechos antes de responder.' },
        ],
      },
    ],
    closing: 'Pediste lo que necesitabas, validaste a la otra persona y negociaste una alternativa. Así suena DEAR MAN en la vida real.',
  },
  {
    id: 'pedir-ayuda-casa',
    title: 'Pedir ayuda en casa',
    context: 'Haces casi todas las tareas de la casa y estás agotado/a. Quieres repartirlas de otra manera con la persona con la que convives.',
    goal: 'Acordar un reparto más justo sin que termine en pelea.',
    other: 'Tu pareja',
    skills: ['dear-man', 'give-fast'],
    steps: [
      {
        line: '«¿Qué pasa? Te noto raro/a hoy.»',
        options: [
          { text: '«Nada, estoy cansado/a.»', style: 'pasivo', feedback: 'Callar evita la conversación, pero el problema sigue. La otra persona no puede ayudarte si no sabe qué pasa.' },
          {
            text: '«Quiero hablar de las tareas. Esta semana cociné y limpié todos los días, y estoy agotado/a.»',
            style: 'asertivo',
            feedback: 'Describes hechos concretos (D) y expresas cómo te afecta en primera persona (E).',
          },
          { text: '«¿En serio no te das cuenta? Hago todo yo.»', style: 'agresivo', feedback: '«Todo» y «nunca» suenan a acusación y provocan defensa. Los hechos concretos se escuchan mejor.' },
        ],
      },
      {
        line: '«Pero yo trabajo más horas que tú.»',
        options: [
          {
            text: '«Es verdad, tus horarios son largos. Igual necesito que nos repartamos distinto. ¿Te parece si te ocupas de las cenas de lunes a miércoles?»',
            style: 'asertivo',
            feedback: 'Validas su punto (GIVE) sin abandonar tu pedido, y propones algo concreto (A y N).',
          },
          { text: '«Sí, tienes razón, no importa.»', style: 'pasivo', feedback: 'Su punto puede ser cierto y tu necesidad también. No hace falta elegir uno de los dos.' },
          { text: '«Siempre tienes una excusa.»', style: 'agresivo', feedback: 'Etiquetar la respuesta del otro cierra la conversación. Prueba validar y repetir tu pedido.' },
        ],
      },
      {
        line: '«Bueno… las cenas puedo. Pero los lunes llego muy tarde.»',
        options: [
          { text: '«Entonces martes, miércoles y jueves. ¿Lo probamos dos semanas y vemos cómo va?»', style: 'asertivo', feedback: 'Negocias (N) y propones revisar el acuerdo. Un plan flexible es más fácil de sostener.' },
          { text: '«Ah, entonces mejor lo sigo haciendo yo.»', style: 'pasivo', feedback: 'Ante la primera dificultad, abandonas el pedido. Busca una variante en lugar de renunciar.' },
          { text: '«Ves, nunca puedes nada.»', style: 'agresivo', feedback: 'Ya había un «sí» parcial. Reconocerlo y ajustar el plan da mejor resultado que el reproche.' },
        ],
      },
    ],
    closing: 'Conseguiste un acuerdo concreto y cuidaste la relación. Revisar el plan en dos semanas lo hace sostenible.',
  },
  {
    id: 'limite-familiar',
    title: 'Poner un límite a un familiar',
    context: 'Tu madre viene a tu casa sin avisar varias veces por semana. La quieres, pero necesitas tu espacio.',
    goal: 'Pedirle que avise antes de venir, cuidando el vínculo y tu respeto propio.',
    other: 'Tu madre',
    skills: ['give-fast', 'dear-man'],
    steps: [
      {
        line: '«¡Hola! Pasaba por acá y te traje unas cosas.»',
        options: [
          {
            text: '«Gracias, mamá. Quiero hablar de algo: me gustaría que me avises antes de venir, así puedo organizarme y disfrutar más cuando estás.»',
            style: 'asertivo',
            feedback: 'Empiezas con amabilidad (G), pides algo concreto (A) y explicas qué gana la relación (R).',
          },
          { text: '«Ah… qué sorpresa. Pasa.»', style: 'pasivo', feedback: 'Es comprensible no querer incomodarla. Pero si no lo dices, la situación se repite y el malestar crece.' },
          { text: '«Otra vez sin avisar. Así no se puede.»', style: 'agresivo', feedback: 'Tu necesidad es válida, pero el tono la hiere y es probable que se defienda en lugar de escuchar.' },
        ],
      },
      {
        line: '«¿Avisarte? Soy tu madre, no una visita.»',
        options: [
          {
            text: '«Sé que lo haces por cariño, y me encanta verte. Igual necesito que me escribas antes. Un mensaje alcanza.»',
            style: 'asertivo',
            feedback: 'Validas su intención (GIVE) y sostienes el límite con calma (FAST: mantener tus valores).',
          },
          { text: '«Bueno, tienes razón, olvídalo.»', style: 'pasivo', feedback: 'Su reacción duele, pero no significa que tu pedido esté mal. Puedes sostenerlo con cariño.' },
          { text: '«Justamente por eso: no me dejas vivir.»', style: 'agresivo', feedback: 'Es una generalización que la va a lastimar. Habla de la conducta, no de la persona.' },
        ],
      },
      {
        line: '«Está bien… pero no me lo tomes a mal si a veces me olvido.»',
        options: [
          { text: '«Gracias por entender. Si te olvidas, te lo recuerdo con cariño.»', style: 'asertivo', feedback: 'Agradeces y anticipas cómo sostener el acuerdo sin pelear. Así el límite cuida también el vínculo.' },
          { text: '«No, no, está bien, no pasa nada si te olvidas.»', style: 'pasivo', feedback: 'Desarmas el acuerdo que acabas de lograr. Puedes ser flexible sin renunciar a él.' },
          { text: '«Más te vale no olvidarte.»', style: 'agresivo', feedback: 'Suena a amenaza. Un recordatorio amable funciona mejor que una advertencia.' },
        ],
      },
    ],
    closing: 'Pusiste un límite y cuidaste el vínculo a la vez. Un límite dice lo que necesitas, no lo que la otra persona vale.',
  },
  {
    id: 'amigo-cancela',
    title: 'Hablar con un amigo que cancela',
    context: 'Tu amigo canceló a último momento las últimas tres veces que quedaron. Te sentiste dejado/a de lado.',
    goal: 'Decirle cómo te afecta y saber qué le pasa, sin cortar la amistad.',
    other: 'Tu amigo',
    skills: ['give-fast', 'comprobar-hechos'],
    steps: [
      {
        line: '«Oye, perdón, hoy tampoco voy a poder ir.»',
        options: [
          { text: '«Ok, no pasa nada.»', style: 'pasivo', feedback: 'Sí pasa algo: te afecta. Callarlo puede alejarte de tu amigo sin que él sepa por qué.' },
          { text: '«Ya está, ya entendí que no te importo.»', style: 'agresivo', feedback: 'Es una interpretación (leer la mente). Antes de concluir, comprueba los hechos.' },
          {
            text: '«Es la tercera vez que se cancela y me quedo con ganas de verte. ¿Está todo bien?»',
            style: 'asertivo',
            feedback: 'Describes un hecho (D), expresas lo que sientes (E) y muestras interés por él (GIVE).',
          },
        ],
      },
      {
        line: '«Uf, la verdad es que estoy pasando un mal momento en el trabajo y no tengo energía para nada.»',
        options: [
          {
            text: '«No sabía, lo siento. Gracias por contármelo. ¿Prefieres algo más tranquilo, como un café cerca de tu casa?»',
            style: 'asertivo',
            feedback: 'Escuchas y validas (GIVE), y adaptas el plan sin renunciar al vínculo.',
          },
          { text: '«Bueno, todos tenemos problemas.»', style: 'agresivo', feedback: 'Minimizar lo que siente invalida su experiencia. Validar no te quita la razón.' },
          { text: '«Ah, perdón, no quería molestarte.»', style: 'pasivo', feedback: 'No molestaste: preguntaste por algo que te importa. No hace falta disculparte por eso.' },
        ],
      },
      {
        line: '«Un café sí puedo. ¿El sábado a la mañana?»',
        options: [
          { text: '«Perfecto. Y si un día no puedes, avísame con tiempo así me organizo.»', style: 'asertivo', feedback: 'Aceptas el plan y pides algo concreto para el futuro (FAST: ser sincero/a sobre lo que necesitas).' },
          { text: '«Si quieres… como prefieras.»', style: 'pasivo', feedback: 'Deja claro que también quieres verlo. Mostrar interés cuida la amistad.' },
          { text: '«A ver si esta vez vienes.»', style: 'agresivo', feedback: 'El sarcasmo desarma lo que acabas de lograr. Puedes pedir lo que necesitas sin ironía.' },
        ],
      },
    ],
    closing: 'Comprobaste los hechos en lugar de suponer, validaste a tu amigo y cuidaste lo que necesitas. Una conversación así suele acercar.',
  },
];

// ---------------------------------------------------------------- ¿hecho o interpretación?

export interface FactItem {
  text: string;
  kind: 'hecho' | 'interpretacion';
  why: string;
  /** Trampa del pensamiento relacionada (id de thinkingTraps), si es una interpretación. */
  trap?: string;
}

export const FACT_ITEMS: FactItem[] = [
  { text: 'Mi jefe no me saludó esta mañana.', kind: 'hecho', why: 'Lo podría registrar una cámara: pasó o no pasó.' },
  { text: 'Mi jefe está enojado conmigo.', kind: 'interpretacion', why: 'Es una suposición sobre lo que siente otra persona.', trap: 'leer-la-mente' },
  { text: 'Me equivoqué en dos cifras del informe.', kind: 'hecho', why: 'Es concreto y comprobable.' },
  { text: 'Soy un desastre en mi trabajo.', kind: 'interpretacion', why: 'Es una etiqueta global que sale de un error puntual.', trap: 'etiquetar' },
  { text: 'No respondió mi mensaje en tres horas.', kind: 'hecho', why: 'Describe lo que pasó, con un dato preciso.' },
  { text: 'No le importo.', kind: 'interpretacion', why: 'Hay muchas razones posibles para no responder.', trap: 'leer-la-mente' },
  { text: 'Me temblaban las manos durante la presentación.', kind: 'hecho', why: 'Es una sensación del cuerpo que puedes observar.' },
  { text: 'Todos notaron que estaba nervioso/a.', kind: 'interpretacion', why: 'No sabes qué notó cada persona. Solemos sobrestimar cuánto se nota.', trap: 'leer-la-mente' },
  { text: 'Mi amiga canceló la cena.', kind: 'hecho', why: 'Es lo que ocurrió, sin agregar explicaciones.' },
  { text: 'Mi amiga ya no quiere verme.', kind: 'interpretacion', why: 'Es una conclusión a partir de un solo hecho.', trap: 'sobregeneralizar' },
  { text: 'Anoche dormí cinco horas.', kind: 'hecho', why: 'Es un dato que se puede medir.' },
  { text: 'Mañana va a ser un día horrible.', kind: 'interpretacion', why: 'Es una predicción: el futuro todavía no pasó.', trap: 'adivinar-el-futuro' },
];

// ---------------------------------------------------------------- semáforo emocional

export type Zone = 'verde' | 'amarillo' | 'rojo';

export interface ZoneInfo {
  zone: Zone;
  title: string;
  range: [number, number];
  meaning: string;
  /** Prácticas sugeridas para esta intensidad. */
  practices: string[];
}

export const ZONES: ZoneInfo[] = [
  {
    zone: 'verde',
    title: 'Verde · puedo pensar',
    range: [0, 4],
    meaning: 'La emoción está presente, pero puedes reflexionar. Es buen momento para entender qué pasa y practicar.',
    practices: ['comprobar-hechos', 'mente-sabia', 'pausa-autocompasion'],
  },
  {
    zone: 'amarillo',
    title: 'Amarillo · me cuesta',
    range: [5, 7],
    meaning: 'La emoción sube y empuja a actuar. Primero haz una pausa y baja un poco la activación.',
    practices: ['pausa-stop', 'respiracion-resonante', 'plantas-de-los-pies'],
  },
  {
    zone: 'rojo',
    title: 'Rojo · no puedo pensar',
    range: [8, 10],
    meaning: 'La emoción está al máximo. No es momento de reflexionar: primero el cuerpo. Si hay riesgo, pide ayuda.',
    practices: ['tipp', 'cinco-sentidos'],
  },
];

export const zoneOf = (intensity: number): ZoneInfo => ZONES.find((z) => intensity >= z.range[0] && intensity <= z.range[1]) ?? ZONES[0];
