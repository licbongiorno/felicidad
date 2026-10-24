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
    context: 'Haces casi todas las tareas de la casa y ya no te queda energía. Quieres repartirlas de otra manera con la persona con la que convives.',
    goal: 'Acordar un reparto más justo sin que termine en pelea.',
    other: 'Tu pareja',
    skills: ['dear-man', 'give-fast'],
    steps: [
      {
        line: '«¿Qué pasa? Hoy no pareces tú.»',
        options: [
          { text: '«Nada, es el cansancio.»', style: 'pasivo', feedback: 'Callar evita la conversación, pero el problema sigue. La otra persona no puede ayudarte si no sabe qué pasa.' },
          {
            text: '«Quiero hablar de las tareas. Esta semana cociné y limpié todos los días, y ya no me queda energía.»',
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
    context: 'Tu amigo canceló a último momento las últimas tres veces que quedaron. Sentiste que te dejaba de lado.',
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
          { text: '«Perfecto. Y si un día no puedes, avísame con tiempo así me organizo.»', style: 'asertivo', feedback: 'Aceptas el plan y pides algo concreto para el futuro (FAST: hablar con sinceridad sobre lo que necesitas).' },
          { text: '«Si quieres… como prefieras.»', style: 'pasivo', feedback: 'Deja claro que también quieres verlo. Mostrar interés cuida la amistad.' },
          { text: '«A ver si esta vez vienes.»', style: 'agresivo', feedback: 'El sarcasmo desarma lo que acabas de lograr. Puedes pedir lo que necesitas sin ironía.' },
        ],
      },
    ],
    closing: 'Comprobaste los hechos en lugar de suponer, validaste a tu amigo y cuidaste lo que necesitas. Una conversación así suele acercar.',
  },
  {
    id: 'pareja-tareas',
    title: 'Repartir las tareas de la casa',
    context: 'Sientes que haces casi todas las tareas de la casa. Hoy, al llegar, ves los platos sin lavar otra vez.',
    goal: 'Pedir un reparto más justo sin que termine en pelea.',
    other: 'Tu pareja',
    skills: ['dear-man', 'give-fast'],
    steps: [
      {
        line: '«Hola. ¿Qué hay para comer?»',
        options: [
          { text: '«Nada. Como siempre, tengo que hacer todo yo.»', style: 'agresivo', feedback: 'El «siempre» y el reproche ponen al otro a la defensiva. Es probable que discutan sobre quién hace más, sin llegar a un acuerdo.' },
          { text: '«Ya preparo algo.»', style: 'pasivo', feedback: 'Evitas el conflicto hoy, pero el cansancio y el enojo se acumulan. Tu necesidad también cuenta.' },
          {
            text: '«Antes de cocinar, ¿podemos hablar cinco minutos? Hay algo de la casa que me está cansando.»',
            style: 'asertivo',
            feedback: 'Eliges el momento y anticipas el tema con calma. Así la otra persona puede escucharte mejor.',
          },
        ],
      },
      {
        line: '«Bueno, dale. ¿Qué pasa?»',
        options: [
          {
            text: '«Esta semana lavé los platos todos los días y también hice las compras. Siento que me sobrepasa. Me gustaría que repartamos las tareas.»',
            style: 'asertivo',
            feedback: 'Describes hechos concretos (D), expresas cómo te sientes (E) y pides con claridad (A). Sin etiquetas ni acusaciones.',
          },
          { text: '«Nada, olvídalo, no es importante.»', style: 'pasivo', feedback: 'Sí es importante para ti. Si lo callas, el problema sigue y la próxima vez quizás explotes.' },
          { text: '«Pasa que eres un egoísta y nunca colaboras.»', style: 'agresivo', feedback: 'Etiquetar a la persona («egoísta») suele cerrar la conversación. Habla de conductas, no de cómo es.' },
        ],
      },
      {
        line: '«No me había dado cuenta. Yo estoy con mucho trabajo, también.»',
        options: [
          {
            text: '«Te creo, los dos estamos con mucho. ¿Qué te parece si armamos una lista y cada uno elige tareas fijas?»',
            style: 'asertivo',
            feedback: 'Validas su cansancio (GIVE) y propones una solución concreta (N: negociar). Pasan de quién tiene razón a cómo resolverlo.',
          },
          { text: '«Siempre tienes una excusa.»', style: 'agresivo', feedback: 'Desestimar lo que siente lo aleja. Puedes reconocer su cansancio y sostener tu pedido a la vez.' },
          { text: '«Ah, bueno, entonces sigo yo.»', style: 'pasivo', feedback: 'Su cansancio no anula el tuyo. Puedes mostrar comprensión y seguir buscando un reparto justo.' },
        ],
      },
    ],
    closing: 'Hablaste de hechos y no de defectos, validaste el cansancio del otro y propusiste una solución concreta. Ahora queda revisar juntos cómo funciona en unas semanas.',
  },
  {
    id: 'devolver-producto',
    title: 'Reclamar en un negocio',
    context: 'Compraste unos auriculares que dejaron de funcionar a los diez días. Vas al negocio con el ticket.',
    goal: 'Conseguir el cambio o la devolución con firmeza y respeto.',
    other: 'El vendedor',
    skills: ['dear-man'],
    steps: [
      {
        line: '«Hola, ¿en qué te puedo ayudar?»',
        options: [
          {
            text: '«Hola. Compré estos auriculares hace diez días y dejaron de funcionar. Tengo el ticket. Quisiera cambiarlos.»',
            style: 'asertivo',
            feedback: 'Describes la situación con datos y pides con claridad lo que quieres. Es la forma más directa de resolverlo.',
          },
          { text: '«Perdón que moleste… creo que estos auriculares no andan, pero no sé, quizás fui yo.»', style: 'pasivo', feedback: 'Disculparte de más y dudar de ti debilita tu pedido. Tienes derecho a reclamar.' },
          { text: '«Me vendieron una porquería. Quiero mi plata ya.»', style: 'agresivo', feedback: 'Se entiende el enojo, pero atacar al vendedor no ayuda: él puede ser quien te resuelva el problema.' },
        ],
      },
      {
        line: '«Mmm, para cambios tenés que mandarlos al servicio técnico. Tarda un mes.»',
        options: [
          {
            text: '«Entiendo que es el procedimiento. Están dentro de la garantía y los necesito para trabajar. ¿Podemos hacer el cambio hoy?»',
            style: 'asertivo',
            feedback: 'Reconoces lo que dice y repites tu pedido con calma (disco rayado). Das un motivo sin justificarte de más.',
          },
          { text: '«Ah, bueno, si es así…»', style: 'pasivo', feedback: 'Aceptas la primera negativa. A veces basta con repetir el pedido con amabilidad para que aparezca otra opción.' },
          { text: '«¡Un mes! Esto es una estafa.»', style: 'agresivo', feedback: 'Subir el tono suele endurecer la postura del otro. Puedes ser firme sin gritar.' },
        ],
      },
      {
        line: '«Dejame consultar con el encargado.»',
        options: [
          { text: '«Gracias. Te espero.»', style: 'asertivo', feedback: 'Agradeces sin ceder en tu pedido. Esperar con calma también es parte de ser firme.' },
          { text: '«No, no hace falta, ya fue.»', style: 'pasivo', feedback: 'Abandonas justo cuando aparecía una salida. Quedarte un poco más podía resolverlo.' },
          { text: '«Más vale que me lo resuelvan.»', style: 'agresivo', feedback: 'La amenaza no suma. Ya pediste con claridad: ahora puedes esperar la respuesta.' },
        ],
      },
    ],
    closing: 'Pediste con datos, sostuviste tu pedido sin agredir y diste lugar a una solución. Reclamar así cuida tus derechos y el trato.',
  },
  {
    id: 'critica-en-el-trabajo',
    title: 'Recibir una crítica',
    context: 'En una reunión, un compañero dice delante de todos que tu parte del proyecto está atrasada.',
    goal: 'Responder sin defenderte de más ni atacar, y aclarar lo que pasa.',
    other: 'Tu compañero',
    skills: ['give-fast', 'comprobar-hechos'],
    steps: [
      {
        line: '«Bueno, lo que se está atrasando es la parte de vos. Así no llegamos.»',
        options: [
          { text: '«¿Mi parte? Si tú ni siquiera entregaste lo tuyo a tiempo.»', style: 'agresivo', feedback: 'Contraatacar convierte la reunión en una pelea. El tema de fondo, el atraso, queda sin resolver.' },
          { text: '«Sí, perdón, es mi culpa, soy un desastre.»', style: 'pasivo', feedback: 'Asumir toda la culpa y etiquetarte no es justo contigo. Puedes reconocer el atraso sin descalificarte.' },
          {
            text: '«Es cierto que tengo un retraso de dos días. Me gustaría explicar por qué y cómo lo voy a resolver.»',
            style: 'asertivo',
            feedback: 'Reconoces el hecho sin dramatizar y propones avanzar. Responder a la crítica con datos baja la tensión.',
          },
        ],
      },
      {
        line: '«Dale, contá.»',
        options: [
          {
            text: '«Estuve esperando los datos del área de ventas, que llegaron ayer. El jueves lo tengo listo.»',
            style: 'asertivo',
            feedback: 'Explicas con hechos, sin culpar, y das un compromiso concreto. Es lo que necesita el equipo para planificar.',
          },
          { text: '«Es que con todo lo que me pasa… no sé si llego.»', style: 'pasivo', feedback: 'La duda sin plan aumenta la preocupación de todos. Si necesitas ayuda, pídela con claridad.' },
          { text: '«Ventas siempre hace todo mal y yo pago los platos rotos.»', style: 'agresivo', feedback: 'Generalizar y culpar a otros genera más conflicto. Describe lo que pasó, sin juicios.' },
        ],
      },
      {
        line: '«Ok. Igual la próxima avisá antes.»',
        options: [
          { text: '«Tienes razón, la próxima aviso apenas vea un retraso. Y te pido que estas cosas me las digas antes en privado.»', style: 'asertivo', feedback: 'Aceptas lo justo de la crítica y también pides lo que necesitas (FAST: respetarte a ti también).' },
          { text: '«Sí, sí, perdón.»', style: 'pasivo', feedback: 'Reconocer está bien, pero también puedes pedir que la próxima vez te lo diga en privado.' },
          { text: '«Y tú la próxima no me expongas así.»', style: 'agresivo', feedback: 'El pedido es válido, pero dicho como reproche suena a amenaza. Puedes pedirlo con calma.' },
        ],
      },
    ],
    closing: 'Separaste el hecho del juicio, reconociste lo que era cierto y pediste lo que necesitabas. Recibir críticas así cuida tu lugar en el equipo y tu autoestima.',
  },
  {
    id: 'hijo-pantallas',
    title: 'Poner un límite con las pantallas',
    context: 'Son las diez de la noche y tu hijo adolescente sigue con el celular. Mañana tiene escuela temprano.',
    goal: 'Sostener el límite sin pelear y cuidando el vínculo.',
    other: 'Tu hijo',
    skills: ['dear-man', 'give-fast'],
    steps: [
      {
        line: '«¿Qué? Ya voy, ya voy…»',
        options: [
          { text: '«Siempre lo mismo contigo. Dame ese celular ya.»', style: 'agresivo', feedback: 'Es probable que reaccione con más resistencia. Puedes ser firme sin pelear.' },
          { text: '«Bueno, cinco minutitos más…»', style: 'pasivo', feedback: 'Si el límite cambia cada noche, cuesta más sostenerlo. La previsibilidad ayuda a los dos.' },
          {
            text: '«Son las diez, como acordamos. Te doy dos minutos para terminar y después el celular se queda en la cocina.»',
            style: 'asertivo',
            feedback: 'Recuerdas el acuerdo, das un aviso breve y dices con claridad qué va a pasar. Firme y previsible.',
          },
        ],
      },
      {
        line: '«¡Pero estoy hablando con mis amigos! No es justo.»',
        options: [
          {
            text: '«Entiendo que es importante hablar con ellos. Igual necesitas dormir. Mañana a la tarde puedes seguir.»',
            style: 'asertivo',
            feedback: 'Validas lo que le importa (GIVE) y sostienes el límite. Validar no es ceder: es mostrar que lo escuchas.',
          },
          { text: '«Me da igual lo que te parezca justo.»', style: 'agresivo', feedback: 'Desestimar lo que siente daña la confianza. Puedes mantener la regla y reconocer su enojo.' },
          { text: '«Bueno, está bien, pero un rato nada más.»', style: 'pasivo', feedback: 'Ceder ante la queja enseña que protestar funciona. Mejor sostener el acuerdo con calma.' },
        ],
      },
      {
        line: '«Ufff… bueno, tomá.»',
        options: [
          { text: '«Gracias. Sé que te costó. Que descanses.»', style: 'asertivo', feedback: 'Reconoces el esfuerzo sin sermones. Terminar con calidez cuida el vínculo para la próxima vez.' },
          { text: '«¿Ves que no era tan difícil?»', style: 'agresivo', feedback: 'El comentario irónico puede arruinar lo logrado. Agradecer funciona mejor.' },
          { text: '«Ok.»', style: 'pasivo', feedback: 'No está mal, pero un breve reconocimiento de su esfuerzo suma mucho a la relación.' },
        ],
      },
    ],
    closing: 'Sostuviste un acuerdo con calma, validaste su enojo y terminaste con calidez. Los límites previsibles y amables son los que mejor funcionan en la adolescencia.',
  },
  {
    id: 'culpa-familiar',
    title: 'Cuando la culpa te pide que vayas',
    context: 'Tu padre te pide que vayas a almorzar el domingo, como todas las semanas. Este domingo ya tienes otro plan que te importa.',
    goal: 'Decir que no a este domingo sin ceder por culpa y sin herir el vínculo.',
    other: 'Tu padre',
    skills: ['mis-derechos-asertivos', 'el-no-amable', 'un-acuerdo-que-me-respete'],
    steps: [
      {
        line: '«El domingo te espero a almorzar, como siempre.»',
        options: [
          { text: '«Gracias, papá. Este domingo no voy a poder ir, ya tengo otro plan.»', style: 'asertivo', feedback: 'Agradeces y dices que no en una frase corta, sin excusas de más. No necesitas su permiso para decidir.' },
          { text: '«Sí, sí, ahí estaré.»', style: 'pasivo', feedback: 'Evitas el mal momento, pero dejas tu plan de lado sin decirlo. Si se repite, el malestar se acumula.' },
          { text: '«¿Otra vez? ¿No puedo tener ni un domingo libre?»', style: 'agresivo', feedback: 'Tu necesidad es válida, pero el reproche hace que se defienda. Puedes decir que no sin atacar.' },
        ],
      },
      {
        line: '«Después de todo lo que hicimos por ti, no puedes venir ni un domingo.»',
        options: [
          { text: '«Es verdad que hicieron mucho por mí, y lo agradezco. Igual este domingo no voy.»', style: 'asertivo', feedback: 'Das la razón en lo que es cierto (banco de niebla) y sostienes tu decisión. Notas la culpa sin dejar que decida por ti.' },
          { text: '«Tienes razón, perdón. Cancelo lo otro y voy.»', style: 'pasivo', feedback: 'La culpa hizo su trabajo. Pregúntate si dañaste a alguien o si sólo ibas a elegir distinto.' },
          { text: '«Siempre me sacas eso en cara. Así no dan ganas de ir nunca.»', style: 'agresivo', feedback: 'Es entendible que la frase te enoje. Pero la amenaza agranda el conflicto. Puedes nombrar la culpa con calma.' },
        ],
      },
      {
        line: '«Bueno… tu madre se va a poner triste.»',
        options: [
          { text: '«Entiendo que la extrañe. ¿Y si voy el domingo que viene, o paso el miércoles a tomar unos mates?»', style: 'asertivo', feedback: 'Validas lo que siente y ofreces un compromiso viable. Cedes en lo práctico, no en tu derecho a decidir.' },
          { text: '«Ay, no quiero que esté mal. Bueno, voy.»', style: 'pasivo', feedback: 'Te haces cargo de la emoción de otra persona. Puedes cuidar el vínculo sin cambiar tu decisión.' },
          { text: '«Ese no es mi problema.»', style: 'agresivo', feedback: 'Es un límite, pero dicho así lastima. Puedes ser firme y amable a la vez.' },
        ],
      },
    ],
    closing: 'Notaste la culpa, reconociste lo cierto y sostuviste tu decisión ofreciendo otra opción. Decir que no a un domingo no es decir que no a tu familia.',
  },
  {
    id: 'critica-injusta',
    title: 'Una crítica que no es justa',
    context: 'Tu pareja te dice, molesta, que nunca haces nada en la casa. Esta semana cocinaste casi todos los días, pero es cierto que no sacaste la basura.',
    goal: 'Saber qué le molesta, reconocer lo que es cierto y no aceptar lo que no lo es.',
    other: 'Tu pareja',
    skills: ['preguntar-por-la-critica', 'admitir-un-error-sin-hundirme', 'un-acuerdo-que-me-respete'],
    steps: [
      {
        line: '«Nunca haces nada en esta casa.»',
        options: [
          { text: '«No entiendo bien. ¿Qué es lo que te molesta de lo que hago?»', style: 'asertivo', feedback: 'Preguntas con curiosidad en vez de defenderte (interrogación negativa). Así puede aparecer algo concreto.' },
          { text: '«Perdón, tienes razón, soy un desastre.»', style: 'pasivo', feedback: 'Aceptas una crítica que no es del todo cierta y te etiquetas. No es justo contigo.' },
          { text: '«¿Yo? ¡Si cociné toda la semana! Tú eres quien no hace nada.»', style: 'agresivo', feedback: 'Contraatacar vuelve la charla una pelea. Lo que molesta de verdad queda sin aclarar.' },
        ],
      },
      {
        line: '«Te pedí tres veces que sacaras la basura y sigue ahí.»',
        options: [
          { text: '«Es cierto, me olvidé de la basura. Fue un error. La saco ahora.»', style: 'asertivo', feedback: 'Reconoces el error real en pocas palabras, sin hundirte ni excusarte (aserción negativa).' },
          { text: '«Sí, perdón, perdón, no sé qué me pasa, no sirvo para nada.»', style: 'pasivo', feedback: 'Pedir perdón de más y castigarte no repara nada. Alcanza con reconocer el hecho.' },
          { text: '«Por una bolsa de basura armas este escándalo.»', style: 'agresivo', feedback: 'Minimizar su pedido lo invalida. Puedes reconocer lo cierto sin achicar lo que le pasa.' },
        ],
      },
      {
        line: '«Bueno, pero en general siento que hago todo yo.»',
        options: [
          { text: '«Esta semana cociné casi todos los días, así que decir que no hago nada no es justo. Pero hablemos de cómo nos repartimos las tareas. ¿Armamos una lista el sábado?»', style: 'asertivo', feedback: 'No aceptas lo que no es cierto y propones un acuerdo concreto (compromiso viable). Cuidas tu respeto propio y la relación.' },
          { text: '«Sí, tienes razón, desde ahora hago yo todo.»', style: 'pasivo', feedback: 'Prometes más de lo que es justo para calmar el momento. Un reparto claro dura más que una promesa por culpa.' },
          { text: '«Si tanto haces, hazlo tú entonces.»', style: 'agresivo', feedback: 'Suena a castigo y cierra la puerta al acuerdo. La necesidad de fondo, repartir mejor, es de los dos.' },
        ],
      },
    ],
    closing: 'Preguntaste antes de defenderte, admitiste lo cierto sin hundirte y no aceptaste lo que no lo era. Así una crítica se vuelve algo concreto para resolver.',
  },
  {
    id: 'pedir-un-aumento',
    title: 'Pedir un aumento',
    context: 'Hace dos años que estás en tu puesto. Sumaste tareas nuevas y tu sueldo quedó atrás. Pediste una reunión con tu jefe para hablarlo.',
    goal: 'Pedir el aumento con datos concretos y salir con un próximo paso claro.',
    other: 'Tu jefe',
    skills: ['dear-man', 'un-acuerdo-que-me-respete', 'mis-derechos-asertivos'],
    steps: [
      {
        line: '«Bueno, te escucho. ¿De qué querías hablar?»',
        options: [
          {
            text: '«Quiero hablar de mi sueldo. Desde el año pasado llevo también la atención a proveedores y armé el informe mensual. Me gustaría que revisemos mi salario.»',
            style: 'asertivo',
            feedback: 'Describes los hechos (D) y pides con claridad (A). Hablas de tu trabajo, no de cuánto lo necesitas. Así el pedido se apoya en datos.',
          },
          { text: '«Nada importante… bueno, quizás, si se puede, ver lo del sueldo. Pero si no, no pasa nada.»', style: 'pasivo', feedback: 'Achicas tu pedido antes de hacerlo. Así es fácil que te digan que no. Tu pedido es válido: puedes decirlo con calma.' },
          { text: '«Me están pagando muy poco y lo sabes. Hace rato que hago el trabajo de dos.»', style: 'agresivo', feedback: 'Tu malestar tiene motivos. Pero empezar con un reproche hace que tu jefe se defienda. Los datos convencen más que el enojo.' },
        ],
      },
      {
        line: '«Entiendo, pero este año el presupuesto está muy ajustado.»',
        options: [
          {
            text: '«Entiendo que el presupuesto está difícil. Igual mi trabajo cambió y quiero que eso se reconozca. ¿Qué margen hay ahora y qué podríamos ver más adelante?»',
            style: 'asertivo',
            feedback: 'Validas su límite y sostienes tu pedido (disco rayado). Abres la puerta a negociar (N) sin rendirte en el primer no.',
          },
          { text: '«Ah, claro, entiendo. Perdón por molestar.»', style: 'pasivo', feedback: 'Te retiras al primer obstáculo y pides perdón por algo que tienes derecho a pedir. Un «no por ahora» todavía se puede negociar.' },
          { text: '«Para otras cosas siempre hay plata. Si no me lo dan, me voy a buscar otra cosa.»', style: 'agresivo', feedback: 'Una amenaza en caliente cierra la charla. Si de verdad piensas buscar otro trabajo, es una decisión para tomar con calma.' },
        ],
      },
      {
        line: '«Ahora no puedo prometerte nada. Quizás en la revisión de marzo.»',
        options: [
          {
            text: '«Bien. Entonces dejemos fijada una reunión en marzo. Te voy a mandar por correo un resumen de mis tareas nuevas para que lo tengas.»',
            style: 'asertivo',
            feedback: 'Conviertes un «quizás» en un acuerdo con fecha (compromiso viable). Dejarlo por escrito ayuda a que no se olvide.',
          },
          { text: '«Sí, sí, cuando se pueda. Gracias igual.»', style: 'pasivo', feedback: 'Te vas sin nada concreto. Pedir una fecha no es exigir: es cuidar lo que acaban de hablar.' },
          { text: '«Siempre es más adelante. Ya sé cómo termina esto.»', style: 'agresivo', feedback: 'El escepticismo se entiende, pero así cierras la puerta que quedaba abierta. Un acuerdo con fecha te da más que un portazo.' },
        ],
      },
    ],
    closing: 'Pediste con datos, sostuviste tu pedido ante el primer no y saliste con una fecha. Aunque hoy no haya aumento, dejaste el tema sobre la mesa.',
  },
  {
    id: 'familiar-opina-de-mi-crianza',
    title: 'Un familiar que opina de tu crianza',
    context: 'Estás en un almuerzo familiar. Tu suegra vuelve a decir, delante de tu hijo, que lo dejas hacer lo que quiere y que así lo vas a malcriar.',
    goal: 'Poner un límite a los comentarios sobre tu crianza sin pelear delante de tu hijo.',
    other: 'Tu suegra',
    skills: ['limites-con-la-familia-de-origen', 'el-no-amable', 'give-fast'],
    steps: [
      {
        line: '«Ese chico hace lo que quiere. En mi época no se dejaba que un nene contestara así.»',
        options: [
          {
            text: '«Sé que lo quieres mucho. De cómo lo criamos prefiero que hablemos tú y yo, después y a solas.»',
            style: 'asertivo',
            feedback: 'Reconoces su cariño (GIVE) y corres la charla a otro momento. Así cuidas a tu hijo de una discusión delante de él.',
          },
          { text: '«Sí… tiene razón, a veces no sé qué hacer con él.»', style: 'pasivo', feedback: 'Le das la razón para evitar el mal momento. Pero tu hijo escucha, y tú quedas mal contigo. Puedes no discutir sin estar de acuerdo.' },
          { text: '«Mira quién habla de criar. Mejor no opines.»', style: 'agresivo', feedback: 'El enojo se entiende si el comentario se repite. Pero atacar delante de todos agranda el conflicto y tu hijo queda en el medio.' },
        ],
      },
      {
        line: '«Ay, no te pongas así. Sólo te digo lo que veo.»',
        options: [
          {
            text: '«Puede ser que lo veas así. Igual las decisiones de crianza las tomamos nosotros. Te pido que no lo comentes delante de él.»',
            style: 'asertivo',
            feedback: 'Aceptas que tiene su opinión (banco de niebla) y repites tu límite con calma. Pides algo concreto: no comentarlo delante del chico.',
          },
          { text: '«No, no me pongo de ninguna forma. Perdón.»', style: 'pasivo', feedback: 'Pides perdón por poner un límite. No hiciste nada malo. Cuidar tu lugar de madre o padre también cuida a tu hijo.' },
          { text: '«Lo que ves está mal. Siempre te metes en todo.»', style: 'agresivo', feedback: 'El «siempre» la hace defenderse. Habla de esta conducta, no de toda la persona. Así es más fácil que escuche.' },
        ],
      },
      {
        line: '«Bueno, bueno. Hagan como quieran, entonces.»',
        options: [
          {
            text: '«Gracias. Me importa que estés cerca de él. Y si algo te preocupa de verdad, me lo puedes decir a solas.»',
            style: 'asertivo',
            feedback: 'Agradeces y dejas una puerta abierta para hablar en otro lugar. El límite queda en pie y el vínculo también.',
          },
          { text: '«No, no, tampoco es así. Tú puedes decir lo que quieras.»', style: 'pasivo', feedback: 'Desarmas el límite que acabas de poner porque su tono te incomoda. Su molestia puede pasar. El límite sirve si lo sostienes.' },
          { text: '«Eso mismo. Como queramos, porque es nuestro hijo.»', style: 'agresivo', feedback: 'Tienes razón en el fondo, pero el tono suena a victoria. Es probable que la tensión siga en el próximo almuerzo.' },
        ],
      },
    ],
    closing: 'Pusiste un límite sin pelear delante de tu hijo, reconociste su cariño y propusiste otro lugar para hablar. Los límites con la familia se sostienen con calma y repetición.',
  },
  {
    id: 'terminar-con-respeto',
    title: 'Terminar una relación con respeto',
    context: 'Llevas un año de relación. Lo pensaste mucho y decidiste terminar. Quedaron en verse para hablar en un lugar tranquilo.',
    goal: 'Decir con claridad que terminas, sin culpar y sin dejar dudas que alarguen el dolor.',
    other: 'Tu pareja',
    skills: ['give-fast', 'el-no-amable', 'mi-plan-de-contacto'],
    steps: [
      {
        line: '«Te noto distinto desde hace días. ¿Qué pasa?»',
        options: [
          {
            text: '«Sí, quiero hablar de algo importante. Lo pensé mucho y decidí terminar la relación. Me cuesta decírtelo, pero es lo que siento.»',
            style: 'asertivo',
            feedback: 'Dices la decisión al principio y con claridad. Hablas de ti, no de sus defectos. Así la otra persona no tiene que adivinar.',
          },
          { text: '«Nada, nada. Cosas del trabajo. Ya se me va a pasar.»', style: 'pasivo', feedback: 'Postergar evita el mal momento de hoy. Pero la decisión sigue ahí y alargar la duda suele doler más a los dos.' },
          { text: '«Pasa que ya no te aguanto. Esto no da para más.»', style: 'agresivo', feedback: 'Puede haber cansancio y enojo. Pero decirlo como ataque lastima de más y vuelve la charla una pelea.' },
        ],
      },
      {
        line: '«¿Cómo que terminar? ¿Hice algo mal? Podemos arreglarlo.»',
        options: [
          {
            text: '«Entiendo que te duela y te tome por sorpresa. No se trata de una cosa que hiciste. Ya no siento lo mismo y no quiero seguir.»',
            style: 'asertivo',
            feedback: 'Validas su dolor (GIVE) y sostienes la decisión con suavidad. No das esperanzas que no tienes. Eso también es respeto.',
          },
          { text: '«Bueno… no sé. Quizás podemos intentar un tiempo más.»', style: 'pasivo', feedback: 'Es natural querer calmar su dolor. Pero si tu decisión está tomada, una falsa esperanza lo hace más largo para los dos.' },
          { text: '«Hiciste muchas cosas mal, y ya no tiene arreglo.»', style: 'agresivo', feedback: 'Una lista de culpas no cambia la decisión y lastima. Puedes ser honesta u honesto sin herir.' },
        ],
      },
      {
        line: '«¿Y ahora qué? ¿Podemos seguir siendo amigos?»',
        options: [
          {
            text: '«Ahora no lo sé. Creo que los dos necesitamos un tiempo sin vernos ni escribirnos. Más adelante podemos ver cómo nos sentimos.»',
            style: 'asertivo',
            feedback: 'Eres honesta u honesto con lo que puedes ofrecer. Proponer un tiempo sin contacto ayuda a los dos a hacer el duelo.',
          },
          { text: '«Sí, claro, lo que quieras. Escríbeme cuando quieras.»', style: 'pasivo', feedback: 'Prometes algo para aliviar el momento. Pero el contacto seguido suele hacer más difícil el duelo, para ti y para la otra persona.' },
          { text: '«No, ni hablar. No quiero saber más nada.»', style: 'agresivo', feedback: 'Puedes necesitar distancia, y es válido. Pero decirlo con desprecio deja una herida extra. Se puede ser firme con cuidado.' },
        ],
      },
    ],
    closing: 'Dijiste tu decisión con claridad, validaste el dolor del otro y cuidaste el después. Terminar con respeto no evita la tristeza, pero hace el duelo más claro para los dos. Si hay miedo o violencia en la relación, tu seguridad va primero: puedes llamar a la Línea 144 o al 911.',
  },
  {
    id: 'amigo-me-dolio',
    title: 'Decirle a un amigo que algo te dolió',
    context: 'En una reunión, tu amigo contó delante de todos algo personal que le habías dicho en confianza. Te dio vergüenza y no dijiste nada. Hoy se encuentran a tomar un café.',
    goal: 'Decirle qué te dolió y pedirle algo concreto, sin atacar la amistad.',
    other: 'Tu amigo',
    skills: ['cnv-observar-sin-evaluar', 'cnv-nombrar-lo-que-siento', 'cnv-pedido-concreto'],
    steps: [
      {
        line: '«¡Qué bueno verte! ¿Todo bien? Te noto con cara seria.»',
        options: [
          {
            text: '«Quiero contarte algo que me pasó. El sábado contaste delante de todos lo de mi trabajo. Eso te lo había dicho en confianza.»',
            style: 'asertivo',
            feedback: 'Describes lo que pasó como lo diría una cámara (observación). No lo acusas de traidor: cuentas el hecho.',
          },
          { text: '«No, todo bien. Cansancio nomás.»', style: 'pasivo', feedback: 'Cuidas el momento, pero lo que te dolió queda guardado. Con el tiempo, eso suele enfriar la amistad.' },
          { text: '«Pasa que me decepcionaste. No se puede confiar en ti.»', style: 'agresivo', feedback: 'Es una etiqueta sobre toda la persona. Es probable que se defienda y no escuche lo que pasó.' },
        ],
      },
      {
        line: '«¿Eso? Pero si era una pavada. Nadie le dio importancia.»',
        options: [
          {
            text: '«Para ti puede ser una pavada. Yo sentí mucha vergüenza. Necesito que lo que te cuento en privado quede entre nosotros.»',
            style: 'asertivo',
            feedback: 'Nombras lo que sentiste y lo que necesitas (sentimiento y necesidad). No discutes si era grave: hablas de tu experiencia.',
          },
          { text: '«Sí, tienes razón, exagero.»', style: 'pasivo', feedback: 'Achicas lo que sentiste para no incomodar. Lo que sientes no necesita permiso para ser válido.' },
          { text: '«Claro, como a ti nunca te importa nada de lo que me pasa.»', style: 'agresivo', feedback: 'El «nunca» lleva la charla a otro lado. Quedarte en este hecho concreto hace más fácil que te entienda.' },
        ],
      },
      {
        line: '«Uh, no me di cuenta de que te había caído así. Perdón.»',
        options: [
          {
            text: '«Gracias por escucharme. ¿Me prometes que lo que te cuento en privado no lo vas a contar a otros sin preguntarme?»',
            style: 'asertivo',
            feedback: 'Recibes la disculpa y haces un pedido concreto y posible (pedido). Así la amistad sale más clara.',
          },
          { text: '«No, no, perdón tú. No tendría que haber dicho nada.»', style: 'pasivo', feedback: 'Te disculpas por hablar de algo que te dolió. Decirlo fue un cuidado hacia la amistad, no un error.' },
          { text: '«Bueno, ya está. Igual no te voy a contar más nada.»', style: 'agresivo', feedback: 'Es un castigo que cierra la puerta justo cuando se abría. Un pedido claro protege más que la distancia.' },
        ],
      },
    ],
    closing: 'Contaste lo que pasó sin juzgar, nombraste lo que sentiste y pediste algo concreto. Decirle a alguien que te dolió algo es una forma de cuidar la amistad.',
  },
  {
    id: 'no-prestar-plata',
    title: 'Negarte a prestar plata',
    context: 'Un primo te pide plata prestada otra vez. La vez anterior tardó meses en devolverla, y este mes tienes los gastos justos.',
    goal: 'Decir que no al préstamo sin culpa y sin romper el vínculo.',
    other: 'Tu primo',
    skills: ['el-no-amable', 'mis-derechos-asertivos', 'give-fast'],
    steps: [
      {
        line: '«Che, ¿me podrías prestar algo de plata? Te la devuelvo a fin de mes, en serio.»',
        options: [
          {
            text: '«Entiendo que estés en un aprieto. Esta vez no te voy a prestar plata.»',
            style: 'asertivo',
            feedback: 'Reconoces su situación y dices que no en una frase corta. No necesitas justificar tu decisión con muchos detalles.',
          },
          { text: '«Ay… bueno, a ver cuánto necesitas.»', style: 'pasivo', feedback: 'Dices que sí antes de pensar si puedes. Si este mes no te alcanza, ese sí después te va a pesar.' },
          { text: '«¿Otra vez? Todavía me acuerdo de lo que tardaste la última vez.»', style: 'agresivo', feedback: 'Tu enojo tiene motivos. Pero el reproche lo hace defenderse. Puedes decir que no sin sacar cuentas viejas.' },
        ],
      },
      {
        line: '«Dale, es poco. Somos familia. Si fuera al revés, yo te ayudaría.»',
        options: [
          {
            text: '«Es verdad que somos familia, y te quiero. Igual mi respuesta es no.»',
            style: 'asertivo',
            feedback: 'Das la razón en lo que es cierto (banco de niebla) y repites tu no (disco rayado). La culpa aparece, pero no decide por ti.',
          },
          { text: '«Tienes razón, perdón. Bueno, te paso algo.»', style: 'pasivo', feedback: 'La culpa hizo su trabajo. Tienes derecho a decidir qué haces con tu plata sin dar explicaciones.' },
          { text: '«Si fuera al revés, yo ya te la habría devuelto.»', style: 'agresivo', feedback: 'Es una respuesta rápida, pero hiere. Mantener el no con calma cuida más el vínculo que ganar la discusión.' },
        ],
      },
      {
        line: '«Bueno… no sé qué voy a hacer, entonces.»',
        options: [
          {
            text: '«Plata no te puedo dar. Si quieres, te ayudo a pensar otras opciones o a armar un presupuesto.»',
            style: 'asertivo',
            feedback: 'Sostienes el límite y ofreces otra forma de ayudar, si quieres y puedes. Ofrecer algo no es obligatorio. Tu no ya era suficiente.',
          },
          { text: '«Uy, no quiero que te quedes así. Espera, te presto la mitad.»', style: 'pasivo', feedback: 'Te haces cargo de un problema que no es tuyo. Puedes sentir pena y igual mantener tu decisión.' },
          { text: '«No es mi problema, arréglatelas.»', style: 'agresivo', feedback: 'Es un límite, pero dicho con desprecio. Puedes ser firme y amable a la vez.' },
        ],
      },
    ],
    closing: 'Dijiste que no sin culpa, reconociste lo cierto y ofreciste otra ayuda sólo porque quisiste. Decir que no a un préstamo no es decir que no a la persona.',
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
  { text: 'Todos notaron mis nervios.', kind: 'interpretacion', why: 'No sabes qué notó cada persona. Solemos sobrestimar cuánto se nota.', trap: 'leer-la-mente' },
  { text: 'Mi amiga canceló la cena.', kind: 'hecho', why: 'Es lo que ocurrió, sin agregar explicaciones.' },
  { text: 'Mi amiga ya no quiere verme.', kind: 'interpretacion', why: 'Es una conclusión a partir de un solo hecho.', trap: 'sobregeneralizar' },
  { text: 'Anoche dormí cinco horas.', kind: 'hecho', why: 'Es un dato que se puede medir.' },
  { text: 'Mañana va a ser un día horrible.', kind: 'interpretacion', why: 'Es una predicción: el futuro todavía no pasó.', trap: 'adivinar-el-futuro' },
  { text: 'Me llegó un correo de mi jefa que dice «tenemos que hablar».', kind: 'hecho', why: 'Es lo que dice el mensaje, palabra por palabra.' },
  { text: 'Me van a despedir.', kind: 'interpretacion', why: 'Es una predicción a partir de un mensaje breve. Hay muchas razones para pedir una charla.', trap: 'catastrofizar' },
  { text: 'Saqué un 6 en el examen.', kind: 'hecho', why: 'Es un resultado concreto y comprobable.' },
  { text: 'Nunca voy a aprobar esta materia.', kind: 'interpretacion', why: 'Usa un «nunca» a partir de un solo resultado.', trap: 'sobregeneralizar' },
  { text: 'Mi pareja llegó media hora tarde.', kind: 'hecho', why: 'Es un dato de tiempo que se puede verificar.' },
  { text: 'Si me quisiera, habría llegado a tiempo.', kind: 'interpretacion', why: 'Une el amor con la puntualidad sin pruebas. Puede haber otras explicaciones.', trap: 'leer-la-mente' },
  { text: 'En la reunión, dos personas miraron el celular mientras hablaba.', kind: 'hecho', why: 'Describe una conducta observable.' },
  { text: 'Mi presentación fue aburridísima.', kind: 'interpretacion', why: 'Es un juicio global a partir de un detalle; quizás tenían otra cosa que atender.', trap: 'filtro-mental' },
  { text: 'Siento mucha ansiedad antes de viajar.', kind: 'hecho', why: 'Es una emoción que estás sintiendo: describirla es un hecho.' },
  { text: 'Siento ansiedad, así que algo malo va a pasar en el viaje.', kind: 'interpretacion', why: 'Toma la emoción como prueba de peligro. Sentir miedo no significa que haya un riesgo real.', trap: 'razonamiento-emocional' },
  { text: 'Me felicitaron por el trabajo que entregué.', kind: 'hecho', why: 'Es algo que te dijeron, concreto y verificable.' },
  { text: 'Lo dijeron por compromiso, no era tan bueno.', kind: 'interpretacion', why: 'Resta valor a lo positivo sin datos que lo apoyen.', trap: 'descalificar-lo-positivo' },
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
