import { recordDayKey, toDateKey } from './metrics';
import type { JournalEntry, JournalType, Reference, SessionRecord } from './types';

/**
 * Desafíos de 7, 21 y 30 días: una tarea corta por día.
 * El día cuenta como hecho si se registró la práctica o la entrada del diario que pide la tarea,
 * o si la persona lo marca a mano («Lo hice»). Saltarse un día no reinicia nada: se muestra lo
 * hecho, nunca lo perdido.
 */

export interface ChallengeTask {
  title: string;
  text: string;
  practiceId?: string;
  journalType?: JournalType;
}

export interface Challenge {
  id: string;
  title: string;
  subtitle: string;
  days: 7 | 21 | 30;
  why: string;
  /** Tareas que se recorren en orden; si hay menos que días, se repiten. */
  tasks: ChallengeTask[];
  references: Reference[];
}

const breath = (title: string, text: string, practiceId: string): ChallengeTask => ({ title, text, practiceId });

export const CHALLENGES: Challenge[] = [
  {
    id: 'siete-dias-de-calma',
    title: 'Siete días de calma',
    subtitle: 'Una pausa breve por día para bajar el ritmo',
    days: 7,
    why: 'Las pausas cortas y repetidas entrenan al cuerpo a volver a la calma. Siete días alcanzan para notar qué te sirve más.',
    tasks: [
      breath('Suspiro cíclico', 'Dos inhalaciones por la nariz y una exhalación larga, durante unos minutos.', 'suspiro-ciclico'),
      breath('Pausa STOP', 'Para, respira, observa y sigue.', 'pausa-stop'),
      breath('Cinco sentidos', 'Nombra lo que ves, oyes, tocas, hueles y saboreas.', 'cinco-sentidos'),
      breath('Plantas de los pies', 'Lleva la atención a los pies apoyados en el suelo.', 'plantas-de-los-pies'),
      breath('Espacio de tres minutos', 'Mira qué pasa, junta la atención y ábrela al cuerpo.', 'espacio-tres-minutos'),
      breath('Mano en el pecho', 'Un gesto de calma y cuidado hacia ti.', 'mano-en-el-pecho'),
      breath('Respiración a tu ritmo', 'Repite la pausa que más te gustó esta semana.', 'respiracion-resonante'),
    ],
    references: [{ citation: 'Balban, M. Y., et al. (2023). Brief structured respiration practices enhance mood and reduce physiological arousal. Cell Reports Medicine, 4(1), 100895.', doi: '10.1016/j.xcrm.2022.100895' }],
  },
  {
    id: 'semana-de-gratitud',
    title: 'Una semana de gratitud',
    subtitle: 'Tres cosas buenas cada noche',
    days: 7,
    why: 'Anotar cada noche tres cosas que salieron bien entrena la atención a lo bueno. El efecto se nota más si lo haces varios días seguidos.',
    tasks: [{ title: 'Tres cosas buenas', text: 'Antes de dormir, anota tres cosas que salieron bien hoy y por qué pasaron.', journalType: 'tres-cosas' }],
    references: [{ citation: 'Seligman, M. E. P., Steen, T. A., Park, N., y Peterson, C. (2005). Positive psychology progress. American Psychologist, 60(5), 410-421.', doi: '10.1037/0003-066X.60.5.410' }],
  },
  {
    id: 'veintiun-dias-de-atencion',
    title: '21 días de atención plena',
    subtitle: 'De la respiración al cuerpo y a la vida diaria',
    days: 21,
    why: 'Tres semanas de práctica breve y diaria son un buen comienzo para un hábito. Cada semana suma un paso: la respiración, el cuerpo y la vida diaria.',
    tasks: [
      breath('Atención a la respiración', 'Diez minutos con la respiración. Cuando te distraigas, vuelve con amabilidad.', 'atencion-respiracion'),
      breath('Atención a la respiración', 'Otra vez la respiración. Nota cómo cambia de un día a otro.', 'atencion-respiracion'),
      breath('Anotación mental', 'Nombra en voz baja lo que aparece: «pensar», «oír», «sentir».', 'anotacion-mental'),
      breath('Atención a los sonidos', 'Deja que los sonidos lleguen sin buscarlos.', 'atencion-sonidos'),
      breath('Pájaros en el cielo', 'Mira los pensamientos pasar, como pájaros.', 'pajaros-en-el-cielo'),
      breath('Atención a la respiración', 'Vuelve a lo básico: respirar y volver.', 'atencion-respiracion'),
      breath('Cinco minutos', 'Una práctica corta para un día con poco tiempo.', 'cinco-minutos'),
      breath('Escaneo corporal', 'Recorre el cuerpo de los pies a la cabeza.', 'escaneo-corporal'),
      breath('Escaneo corporal', 'Otra vez el cuerpo. Nota dónde hay tensión y dónde no.', 'escaneo-corporal'),
      breath('Relajación progresiva', 'Tensa y suelta, grupo por grupo.', 'relajacion-progresiva'),
      breath('Caminar con atención', 'Camina despacio y siente cada paso.', 'caminar-atencion'),
      breath('Escaneo corporal', 'El cuerpo como ancla para el presente.', 'escaneo-corporal'),
      breath('Hacer espacio', 'Deja lugar a una sensación difícil sin pelear con ella.', 'hacer-espacio'),
      breath('Caminar con atención', 'Prueba en un lugar distinto al de siempre.', 'caminar-atencion'),
      breath('Saboreo', 'Detente en algo agradable de tu día y alárgalo.', 'saboreo'),
      breath('Pausa STOP', 'Úsala en un momento real de prisa o enojo.', 'pausa-stop'),
      breath('El observador', 'Mira lo que piensas y sientes desde un poco más atrás.', 'observador'),
      breath('Espacio de tres minutos', 'Hazlo dos veces hoy, en momentos distintos.', 'espacio-tres-minutos'),
      breath('Surfear el impulso', 'Cuando aparezca un impulso, obsérvalo subir y bajar.', 'surfear-impulso'),
      breath('Conciencia abierta', 'Deja que todo aparezca y se vaya.', 'conciencia-pura'),
      breath('Tu práctica favorita', 'Elige la que más te sirvió y planea cuándo la seguirás haciendo.', 'atencion-respiracion'),
    ],
    references: [{ citation: 'Kabat-Zinn, J. (1990). Full catastrophe living. Delacorte.' }, { citation: 'Lally, P., van Jaarsveld, C. H. M., Potts, H. W. W., y Wardle, J. (2010). How are habits formed. European Journal of Social Psychology, 40(6), 998-1009.', doi: '10.1002/ejsp.674' }],
  },
  {
    id: 'treinta-dias-de-trato-amable',
    title: '30 días de trato amable',
    subtitle: 'Hablarte como le hablarías a alguien que quieres',
    days: 30,
    why: 'La autocrítica se aprende y también se puede desaprender. Un mes de pequeñas prácticas de autocompasión ayuda a que la voz amable salga sola.',
    tasks: [
      breath('Pausa de autocompasión', 'Nombra el momento difícil, recuerda que a otros también les pasa y date un gesto amable.', 'pausa-autocompasion'),
      breath('Mano en el pecho', 'Un minuto de calma con la mano en el pecho.', 'mano-en-el-pecho'),
      { title: 'Carta compasiva', text: 'Escríbete unas líneas como lo haría un buen amigo.', journalType: 'carta-compasiva' },
      breath('Amor altruista', 'Desea el bien a alguien querido y luego a ti.', 'amor-altruista'),
      breath('El yo compasivo', 'Imagina la versión más sabia y amable de ti.', 'yo-compasivo'),
      breath('Ritmo calmante', 'Respira lento para activar el sistema de calma.', 'ritmo-calmante'),
      { title: 'Tres cosas buenas', text: 'Anota tres cosas que hiciste bien hoy, aunque sean pequeñas.', journalType: 'tres-cosas' },
      breath('Escucharme sin juzgar', 'Escucha lo que te pasa sin corregirte.', 'escucharme-sin-juzgar'),
      breath('Fortalezas', 'Mira qué fortaleza tuya apareció hoy.', 'fortalezas'),
      breath('Pausa de autocompasión', 'Úsala en un momento real en que te trates mal.', 'pausa-autocompasion'),
    ],
    references: [{ citation: 'Neff, K. D., y Germer, C. K. (2013). A pilot study and randomized controlled trial of the mindful self-compassion program. Journal of Clinical Psychology, 69(1), 28-44.', doi: '10.1002/jclp.21923' }],
  },
  {
    id: 'siete-noches-de-mejor-sueno',
    title: 'Siete noches para dormir mejor',
    subtitle: 'Una rutina de bajada y un hábito nuevo por noche',
    days: 7,
    why: 'El sueño mejora con hábitos que se repiten, no con una noche perfecta. En una semana puedes probar las piezas de la terapia cognitivo-conductual para el insomnio y quedarte con las que te sirven.',
    tasks: [
      breath('Rutina de bajada', 'Elige tres cosas tranquilas para la última hora antes de dormir y hazlas en el mismo orden.', 'rutina-bajada-dormir'),
      breath('La cama, para dormir', 'Si no te duermes en un rato, levántate y vuelve cuando tengas sueño.', 'control-estimulos-noche'),
      breath('Lo que piensas del sueño', 'Revisa una idea sobre el sueño que te pone más nervioso o nerviosa a la noche.', 'creencias-sobre-el-sueno'),
      breath('Respirar despacio', 'Antes de acostarte, respira lento unos minutos, con la exhalación más larga.', 'respiracion-resonante'),
      breath('Tu ventana de sueño', 'Mira a qué hora te levantas y fija una hora parecida para todos los días.', 'ventana-de-sueno'),
      breath('Plan para una mala noche', 'Arma qué harás si una noche cuesta: así no la peleas a oscuras.', 'plan-noches-dificiles'),
      breath('Tu rutina, otra vez', 'Repite la rutina de bajada. Nota qué cambió en estos siete días.', 'rutina-bajada-dormir'),
    ],
    references: [{ citation: 'Edinger, J. D., y Carney, C. E. (2008). Overcoming insomnia: A cognitive-behavioral therapy approach. Oxford University Press.' }],
  },
  {
    id: 'semana-de-preocuparse-menos',
    title: 'Una semana para preocuparte menos',
    subtitle: 'Darle a la preocupación su lugar y su hora',
    days: 7,
    why: 'Preocuparse no siempre ayuda a resolver. Postergar la preocupación a un horario fijo y separar lo que se puede hacer de lo que no baja el tiempo que te ocupa.',
    tasks: [
      breath('Aplazar la preocupación', 'Elige un horario de quince minutos para preocuparte. Fuera de ese horario, anota y posterga.', 'aplazar-preocupacion'),
      breath('¿Moviliza o paraliza?', 'Toma una preocupación y mira si te lleva a hacer algo o solo da vueltas.', 'preocupacion-que-moviliza'),
      breath('Espacio de tres minutos', 'Cuando aparezca la preocupación, haz una pausa y vuelve al presente.', 'espacio-tres-minutos'),
      breath('Resolver un problema', 'Si la preocupación tiene solución, escribe opciones y elige un primer paso.', 'resolucion-problemas'),
      breath('Aplazar otra vez', 'Vuelve a usar tu horario de preocupación. ¿Fue más fácil postergar?', 'aplazar-preocupacion'),
      breath('Los cinco sentidos', 'En un momento de mucha vuelta, nombra lo que ves, oyes, tocas, hueles y saboreas.', 'cinco-sentidos'),
      breath('Pasos de diez minutos', 'Divide lo que te preocupa en pasos tan chicos que puedas empezar hoy.', 'pasos-de-diez-minutos'),
    ],
    references: [{ citation: 'Borkovec, T. D., Wilkinson, L., Folensbee, R., y Lerman, C. (1983). Stimulus control applications to the treatment of worry. Behaviour Research and Therapy, 21(3), 247-251.' }],
  },
  {
    id: 'semana-de-limites',
    title: 'Una semana de límites',
    subtitle: 'Pedir y decir que no, de a poco',
    days: 7,
    why: 'Poner límites es una habilidad: se aprende practicando en situaciones chicas antes de las grandes. Cada día suma una herramienta.',
    tasks: [
      breath('Lo que necesito', 'Antes de pedir algo, aclara qué necesitas y por qué te importa.', 'necesidades-que-pido'),
      breath('DEAR MAN', 'Prepara un pedido concreto con los pasos de DEAR MAN.', 'dear-man'),
      breath('El «no» amable', 'Practica un «no» corto, sin muchas explicaciones.', 'el-no-amable'),
      breath('Cuidar el vínculo', 'Pide o di que no cuidando también la relación.', 'give-fast'),
      breath('Límites en el celular', 'Decide en qué horarios respondes y avísalo con un mensaje corto.', 'limites-en-el-celular'),
      breath('Pros y contras', 'Si dudas en poner un límite, mira qué ganas y qué pierdes con cada opción.', 'pros-y-contras'),
      breath('Un límite real', 'Elige un límite pequeño y ponlo hoy. Después anota cómo te fue.', 'el-no-amable'),
    ],
    references: [{ citation: 'Linehan, M. M. (2015). DBT skills training manual (2.ª ed.). Guilford Press.' }],
  },
  {
    id: 'semana-con-menos-pantalla',
    title: 'Una semana con menos pantalla',
    subtitle: 'Usar el celular a propósito',
    days: 7,
    why: 'No se trata de dejar el celular, sino de usarlo cuando lo eliges. Limitar las redes unos días puede bajar la soledad y el desánimo en algunas personas.',
    tasks: [
      breath('Auditoría del celular', 'Mira cuánto tiempo pasas en cada aplicación, sin juzgarte.', 'auditoria-de-pantallas'),
      breath('Plan de uso', 'Elige para qué quieres usar el celular y en qué momentos.', 'plan-celular-intencional'),
      breath('Lo que miro', 'Nota cómo te dejan las cuentas que sigues y deja de seguir una.', 'mi-feed-y-mi-cuerpo'),
      breath('Horarios para responder', 'Avisa en qué horarios respondes mensajes.', 'limites-en-el-celular'),
      breath('Una pausa sin pantalla', 'Haz una pausa breve sin el celular cerca.', 'espacio-tres-minutos'),
      breath('Caminar sin celular', 'Sal a caminar unos minutos y deja el teléfono en casa o en el bolsillo.', 'caminar-atencion'),
      breath('Revisar el plan', 'Vuelve a mirar tu uso de la semana. ¿Qué quieres mantener?', 'auditoria-de-pantallas'),
    ],
    references: [{ citation: 'Hunt, M. G., Marx, R., Lipson, C., y Young, J. (2018). No more FOMO: Limiting social media decreases loneliness and depression. Journal of Social and Clinical Psychology, 37(10), 751-768.', doi: '10.1521/jscp.2018.37.10.751' }],
  },
  {
    id: 'semana-en-movimiento',
    title: 'Una semana en movimiento',
    subtitle: 'Mover el cuerpo un poco cada día',
    days: 7,
    why: 'Moverse con regularidad, aunque sea poco, ayuda al ánimo y al sueño. La idea es sumar minutos, no entrenar fuerte.',
    tasks: [
      breath('Estirarte cinco minutos', 'Haz un estiramiento suave, sin forzar.', 'estiramiento-suave-cinco'),
      breath('Caminar con atención', 'Camina unos minutos sintiendo cada paso.', 'caminar-atencion'),
      breath('Pausa activa', 'Levántate de la silla y mueve el cuerpo un par de minutos.', 'pausa-activa-oficina'),
      breath('Respirar en movimiento', 'Combina la respiración con movimientos lentos.', 'respiracion-diafragmatica-movimiento'),
      breath('Caminata a tu ritmo', 'Camina un poco más que el primer día, a tu ritmo.', 'caminata-consciente-ritmo'),
      breath('Cuidar el cuerpo', 'Revisa sueño, comida y movimiento: elige una cosa para cuidar hoy.', 'please'),
      breath('Tu movimiento favorito', 'Repite el que más te gustó y decide cuándo lo vas a hacer la semana que viene.', 'caminar-atencion'),
    ],
    references: [{ citation: 'Organización Mundial de la Salud (2020). WHO guidelines on physical activity and sedentary behaviour. OMS.' }],
  },
  {
    id: 'semana-de-conexion',
    title: 'Una semana de conexión',
    subtitle: 'Un gesto por día hacia otra persona',
    days: 7,
    why: 'Los vínculos cuidan la salud tanto como otros hábitos. No hacen falta grandes planes: un mensaje, una escucha o un pedido de ayuda ya cuentan.',
    tasks: [
      breath('Mis vínculos', 'Dibuja quiénes están cerca de ti y a quién extrañas.', 'inventario-interpersonal'),
      breath('Ofertas de conexión', 'Nota los pequeños gestos de los demás hacia ti y responde a uno.', 'ofertas-de-conexion'),
      breath('Escuchar sin convencer', 'En una charla de hoy, escucha sin dar consejos.', 'escuchar-sin-convencer'),
      breath('Dar reconocimiento', 'Dile a alguien algo que valoras de esa persona.', 'dar-y-pedir-caricias'),
      breath('Una amistad que cuida', 'Escríbele a una amistad que hace tiempo no ves.', 'amistad-que-cuida'),
      breath('Pedir ayuda', 'Pide una ayuda pequeña a alguien de confianza.', 'pedir-ayuda-es-fuerza'),
      breath('Un plan juntos', 'Propón un encuentro corto con alguien para la semana que viene.', 'ofertas-de-conexion'),
    ],
    references: [{ citation: 'Holt-Lunstad, J., Smith, T. B., y Layton, J. B. (2010). Social relationships and mortality risk: A meta-analytic review. PLoS Medicine, 7(7), e1000316.', doi: '10.1371/journal.pmed.1000316' }],
  },
  {
    id: 'semana-para-tu-autoestima',
    title: 'Una semana para tu autoestima',
    subtitle: 'Ver lo bueno con los mismos ojos que lo malo',
    days: 7,
    why: 'La baja autoestima filtra lo bueno y agranda lo malo. Registrar datos positivos y revisar las reglas duras ayuda a ver un cuadro más justo.',
    tasks: [
      breath('Tus fortalezas', 'Elige una fortaleza tuya y úsala hoy a propósito.', 'fortalezas'),
      breath('Aceptar un elogio', 'Si alguien te elogia, responde «gracias» sin descontarlo.', 'aceptar-un-elogio'),
      breath('Datos positivos', 'Anota una cosa que hiciste bien hoy, aunque sea chica.', 'registro-de-datos-positivos'),
      breath('Tres cosas buenas', 'Antes de dormir, anota tres cosas que salieron bien y por qué.', 'tres-cosas-buenas'),
      breath('Tu regla «valgo si…»', 'Busca una regla dura sobre ti y escribe una versión más justa.', 'mi-regla-valgo-si'),
      breath('Pausa de autocompasión', 'En un momento difícil, háblate como a alguien que quieres.', 'pausa-autocompasion'),
      breath('Datos de la semana', 'Lee tus datos positivos de estos días. ¿Qué dicen de ti?', 'registro-de-datos-positivos'),
    ],
    references: [{ citation: 'Fennell, M. J. V. (1999). Overcoming low self-esteem. Robinson.' }],
  },
  {
    id: 'veintiun-dias-con-tus-valores',
    title: '21 días con tus valores',
    subtitle: 'Un paso por día hacia lo que te importa',
    days: 21,
    why: 'Los valores no se cumplen: se viven en acciones chicas. Tres semanas alcanzan para pasar de saber qué te importa a hacerlo un poco cada día.',
    tasks: [
      breath('Brújula de valores', 'Elige tres áreas de tu vida y escribe qué te importa en cada una.', 'brujula-valores'),
      breath('Los caminos del sentido', 'Piensa qué das, qué recibes y cómo enfrentas lo que no puedes cambiar.', 'tres-caminos-sentido'),
      breath('Acción comprometida', 'Elige una acción chica que vaya hacia uno de tus valores y hazla hoy.', 'accion-comprometida'),
      breath('Actividades que nutren', 'Planifica una actividad que te haga bien esta semana.', 'activacion-conductual'),
      breath('Un ritual con sentido', 'Crea un pequeño ritual diario ligado a lo que te importa.', 'mi-ritual-con-sentido'),
      breath('Saborear', 'Detente en algo bueno de tu día y alárgalo un poco.', 'saboreo'),
      breath('Acción comprometida', 'Otra acción chica hacia otro de tus valores.', 'accion-comprometida'),
      breath('Revisar la brújula', 'Vuelve a tu brújula. ¿Qué área quedó más lejos esta semana?', 'brujula-valores'),
    ],
    references: [{ citation: 'Hayes, S. C., Strosahl, K. D., y Wilson, K. G. (2012). Acceptance and commitment therapy: The process and practice of mindful change (2.ª ed.). Guilford Press.' }],
  },
  {
    id: 'semana-de-apego-seguro',
    title: 'Una semana hacia un vínculo más seguro',
    subtitle: 'Conocer tu alarma de apego y pedir cercanía sin reclamo',
    days: 7,
    why: 'En pareja, el miedo a perder al otro o a quedar sin espacio se enciende rápido. Reconocer esa alarma y frenar antes de actuar ayuda a salir del baile que se repite. El apego no es destino: se puede ganar seguridad.',
    tasks: [
      breath('Tu alarma de apego', 'Recuerda una escena chica en que te sentiste lejos de tu pareja y mira qué se encendió.', 'mi-alarma-de-apego'),
      breath('Una pausa antes de actuar', 'Cuando aparezcan las ganas de reclamar o de alejarte, para y respira antes de hacer algo.', 'pausa-de-apego'),
      breath('El baile de los dos', 'Dibuja el círculo que se repite: qué haces tú, qué hace tu pareja y cómo sigue.', 'el-baile-de-los-dos'),
      breath('Lo que quizás le pasa', 'Piensa qué podría sentir tu pareja en ese baile. Usa «quizás» en lugar de «seguro».', 'su-alarma-quizas'),
      breath('Pedir cercanía', 'Prepara un pedido de cercanía que hable de lo que necesitas, sin reproche.', 'pedir-cercania-sin-reclamo'),
      breath('Reparar', 'Después de un roce, da un paso para reparar desde lo que sentías por debajo.', 'reparar-desde-el-apego'),
      breath('La pausa, otra vez', 'Vuelve a usar la pausa en un momento real. Nota qué cambió en esta semana.', 'pausa-de-apego'),
    ],
    references: [
      { citation: 'Mikulincer, M., y Shaver, P. R. (2016). Attachment in adulthood: Structure, dynamics, and change (2.ª ed.). Guilford Press.' },
      { citation: 'Johnson, S. M. (2008). Hold me tight: Seven conversations for a lifetime of love. Little, Brown.' },
    ],
  },
  {
    id: 'siete-dias-despues-de-la-ruptura',
    title: 'Siete días después de la ruptura',
    subtitle: 'Cuidar las ganas de escribirle y volver a lo tuyo',
    days: 7,
    why: 'Después de una ruptura, el duelo va y viene entre el dolor por lo perdido y la vida que sigue. Una semana con tareas chicas ayuda a sostener los días, bajar la urgencia de escribir y empezar a ordenar la historia.',
    tasks: [
      breath('Las ganas de escribirle', 'Cuando lleguen las ganas de escribirle, míralas subir y bajar antes de decidir.', 'ganas-de-escribirle'),
      breath('Tu plan de contacto', 'Decide qué contacto necesitas tener, cuál no y cómo vas a responder.', 'mi-plan-de-contacto'),
      breath('Tus días', 'Arma un día con horarios simples: comer, moverte, dormir y ver a alguien.', 'mis-dias-tras-la-ruptura'),
      breath('Un gesto amable', 'En un momento de mucha tristeza, háblate como le hablarías a alguien que quieres.', 'pausa-autocompasion'),
      breath('La historia de la ruptura', 'Escribe unos minutos qué pasó, cómo lo viviste y qué entiendes hoy.', 'la-historia-de-la-ruptura'),
      breath('Volver a lo tuyo', 'Elige algo tuyo o a alguien de los tuyos y dale un rato hoy.', 'quien-soy-sin-la-pareja'),
      breath('Aprender sin culparte', 'Mira qué te llevas de la relación, sin cargarte toda la culpa.', 'aprender-de-la-relacion'),
    ],
    references: [
      { citation: 'Stroebe, M., y Schut, H. (1999). The dual process model of coping with bereavement: Rationale and description. Death Studies, 23(3), 197-224.' },
      { citation: 'Pennebaker, J. W. (1997). Writing about emotional experiences as a therapeutic process. Psychological Science, 8(3), 162-166.' },
    ],
  },
  {
    id: 'veintiun-dias-de-cnv',
    title: '21 días de comunicación no violenta',
    subtitle: 'Observar, sentir, necesitar y pedir, un paso por día',
    days: 21,
    why: 'La comunicación no violenta propone separar lo que pasó de lo que piensas, nombrar lo que sientes y necesitas, y pedir algo concreto. Es una habilidad: tres semanas de práctica breve ayudan a que salga en charlas reales.',
    tasks: [
      breath('Observar sin evaluar', 'Describe una situación de hoy como la grabaría una cámara, sin juicios.', 'cnv-observar-sin-evaluar'),
      breath('Nombrar lo que sientes', 'Busca la palabra justa para lo que sientes, más allá de «bien» o «mal».', 'cnv-nombrar-lo-que-siento'),
      breath('La necesidad detrás', 'Detrás de una emoción de hoy, busca qué necesitabas.', 'cnv-necesidad-detras'),
      breath('Un pedido concreto', 'Arma un pedido claro, posible y en positivo.', 'cnv-pedido-concreto'),
      breath('Escuchar con empatía', 'En una charla, intenta escuchar qué siente y necesita la otra persona.', 'cnv-escucha-empatica'),
      breath('Autoempatía', 'Después de un mal momento, escúchate a ti con la misma empatía.', 'cnv-autoempatia'),
      breath('Tus desconexiones', 'Nota cuándo juzgas, comparas o exiges, sin castigarte por eso.', 'cnv-mis-desconexiones'),
      breath('Observar otra vez', 'Vuelve a describir una escena difícil sólo con hechos.', 'cnv-observar-sin-evaluar'),
      breath('Transformar el enojo', 'Cuando aparezca el enojo, busca la necesidad que hay debajo.', 'cnv-transformar-el-enojo'),
      breath('Un «no» que cuida', 'Di que no a algo y cuenta qué necesidad tuya cuidas con ese no.', 'cnv-un-no-que-cuida'),
      breath('Agradecer', 'Agradece algo concreto a alguien: qué hizo y qué necesidad tuya cuidó.', 'cnv-agradecer-y-recibir'),
      breath('Sentir y necesitar', 'Practica otra vez nombrar lo que sientes y lo que necesitas.', 'cnv-necesidad-detras'),
      breath('Un pedido real', 'Haz hoy un pedido concreto a alguien. Después anota cómo te fue.', 'cnv-pedido-concreto'),
      breath('Escuchar sin arreglar', 'Escucha a alguien sin dar consejos. Sólo intenta entender.', 'cnv-escucha-empatica'),
      breath('Autoempatía, otra vez', 'Elige un momento de la semana en que te costó y escúchate.', 'cnv-autoempatia'),
      breath('El enojo, de nuevo', 'Mira un enojo reciente con calma y busca qué necesitabas.', 'cnv-transformar-el-enojo'),
      breath('Recibir un agradecimiento', 'Si alguien te agradece algo, recíbelo sin achicarlo.', 'cnv-agradecer-y-recibir'),
      breath('Un «no» más', 'Practica otro «no» que cuide lo tuyo y la relación.', 'cnv-un-no-que-cuida'),
      breath('Una charla completa', 'En una charla difícil, usa los cuatro pasos: hechos, sentir, necesitar y pedir.', 'cnv-pedido-concreto'),
      breath('Escuchar lo de abajo', 'Escucha qué necesidad hay detrás de una queja que te hagan.', 'cnv-escucha-empatica'),
      breath('Tu paso favorito', 'Elige el paso que más te sirvió y decide cuándo lo vas a seguir usando.', 'cnv-autoempatia'),
    ],
    references: [{ citation: 'Rosenberg, M. B. (2003). Nonviolent communication: A language of life (2.ª ed.). PuddleDancer Press.' }],
  },
  {
    id: 'semana-asertiva',
    title: 'Una semana más asertiva',
    subtitle: 'Decir lo tuyo sin culpa y sin atacar',
    days: 7,
    why: 'La culpa muchas veces nos hace ceder en cosas que sí podemos decidir. Las técnicas asertivas se aprenden: cada día practicas una en una situación chica, antes de usarla en las grandes.',
    tasks: [
      breath('Tus derechos asertivos', 'Lee tus derechos asertivos y elige uno que te cueste ejercer.', 'mis-derechos-asertivos'),
      breath('El «no» amable', 'Practica un «no» corto, sin muchas explicaciones.', 'el-no-amable'),
      breath('Preguntar por la crítica', 'Ante una crítica, pregunta qué es lo que molesta antes de defenderte.', 'preguntar-por-la-critica'),
      breath('Admitir un error', 'Reconoce un error en pocas palabras, sin hundirte ni excusarte.', 'admitir-un-error-sin-hundirme'),
      breath('Un acuerdo que te respete', 'Busca una salida que cuide lo tuyo y lo de la otra persona.', 'un-acuerdo-que-me-respete'),
      breath('Abrir una conversación', 'Cuenta algo de ti y toma un dato que te den para seguir la charla.', 'abrir-una-conversacion'),
      breath('Un pedido completo', 'Prepara un pedido real con los pasos de DEAR MAN y hazlo.', 'dear-man'),
    ],
    references: [
      { citation: 'Smith, M. J. (1975). When I say no, I feel guilty. Dial Press.' },
      { citation: 'Speed, B. C., Goldstein, B. L., y Goldfried, M. R. (2018). Assertiveness training: A forgotten evidence-based treatment. Clinical Psychology: Science and Practice, 25(1), e12216.' },
    ],
  },
  {
    id: 'semana-para-mirar-mi-consumo',
    title: 'Una semana para mirar tu consumo de cannabis',
    subtitle: 'Entender para qué lo usas, sin sermones',
    days: 7,
    why: 'Mirar con curiosidad cuándo y para qué consumes ayuda a decidir si quieres cambiar algo, a tu ritmo. Esta semana es para observar y pensar, no para exigirte. Si consumes todos los días y piensas en dejar, puede costar dormir o aparecer irritabilidad: consulta con tu equipo de salud o llama a la Línea 141 de SEDRONAR, gratuita y las 24 horas.',
    tasks: [
      breath('¿Para qué lo uso?', 'Escribe para qué usas el cannabis: dormir, calmarte, divertirte o no aburrirte.', 'para-que-lo-uso'),
      breath('Registro de la semana', 'Empieza a anotar cuándo consumes, con quién y cómo te sentías antes.', 'registro-de-consumo'),
      breath('El balance', 'Mira qué te da el cannabis y qué te cuesta, sin juzgarte.', 'balance-del-cannabis'),
      breath('Cuando la ansiedad pide', 'Si la ansiedad te pide consumir, prueba otra forma de bajarla primero.', 'ansiedad-sin-consumir'),
      breath('Surfear el impulso', 'Cuando aparezcan las ganas, obsérvalas subir y bajar como una ola.', 'surfear-impulso'),
      breath('Las noches', 'Si lo usas para dormir, arma un plan para una noche distinta.', 'noches-sin-cannabis'),
      breath('Tu plan, si lo quieres', 'Lee tu registro. Si quieres cambiar algo, arma un plan chico de pausa o de reducción.', 'plan-de-pausa-o-reduccion'),
    ],
    references: [
      { citation: 'Miller, W. R., y Rollnick, S. (2013). Motivational interviewing: Helping people change (3.ª ed.). Guilford Press.' },
      { citation: 'Bowen, S., y Marlatt, G. A. (2009). Surfing the urge: Brief mindfulness-based intervention for college student smokers. Psychology of Addictive Behaviors, 23(4), 666-671.' },
    ],
  },
  {
    id: 'semana-en-familia-con-menos-gritos',
    title: 'Una semana en familia con menos gritos',
    subtitle: 'Límites firmes, escucha y reparación en casa',
    days: 7,
    why: 'Criar cansa, y en casa los roces son normales. Lo que ayuda es poner límites firmes con calidez, escuchar el desborde de los chicos y reparar después de una pelea. Una semana alcanza para probar cada pieza.',
    tasks: [
      breath('Escucharte primero', 'Después de un mal momento con tus hijos, escúchate tres minutos sin juzgarte.', 'autoempatia-para-quien-cuida'),
      breath('El «no» con amor', 'Practica un «no» firme y cálido a la vez, sin gritos ni sermones.', 'el-no-con-amor-a-un-hijo'),
      breath('Escuchar el desborde', 'Cuando un chico se desborde, intenta nombrar qué siente antes de corregir.', 'cnv-escucha-empatica'),
      breath('Empezar suave', 'Si tienes que plantear un tema difícil en casa, empieza con calma y sin culpar.', 'inicio-suave'),
      breath('Reunión familiar', 'Propón una reunión corta para hablar de un tema de la casa.', 'reunion-familiar-20-minutos'),
      breath('Reparar', 'Después de una pelea, da un paso para reparar el vínculo.', 'reparar-tras-discusion'),
      breath('Un gesto para ti', 'Termina la semana con un gesto amable hacia ti.', 'pausa-autocompasion'),
    ],
    references: [
      { citation: 'Baumrind, D. (1966). Effects of authoritative parental control on child behavior. Child Development, 37(4), 887-907.' },
      { citation: 'Gottman, J. M., Katz, L. F., y Hooven, C. (1997). Meta-emotion: How families communicate emotionally. Lawrence Erlbaum Associates.' },
    ],
  },
  {
    id: 'semana-suficientemente-bien',
    title: 'Una semana suficientemente bien',
    subtitle: 'Bajar la exigencia sin dejar de hacer las cosas',
    days: 7,
    why: 'El perfeccionismo promete calidad pero suele traer más revisiones, postergación y cansancio. Probar hacer las cosas suficientemente bien, como un experimento, muestra qué pasa de verdad cuando aflojas un poco.',
    tasks: [
      breath('Tus trampas', 'Mira qué trampas del perfeccionismo aparecen más en tu semana.', 'trampas-del-perfeccionismo'),
      breath('Empezar imperfecto', 'Empieza una tarea que vienes postergando, aunque salga a medias.', 'empezar-imperfecto'),
      breath('Un experimento', 'Elige una tarea y hazla suficientemente bien. Anota qué esperabas y qué pasó.', 'experimento-suficientemente-bien'),
      breath('Revisar menos', 'Revisa algo una vez menos de lo que sueles hacerlo.', 'menos-chequeos-y-repeticiones'),
      breath('Ante el error', 'Si te equivocas, date un minuto amable antes de corregir.', 'autocompasion-ante-el-error'),
      breath('El pie de tu autoestima', 'Mira de qué depende tu valor además de tus logros.', 'mi-pie-de-la-autoestima'),
      breath('Otro experimento', 'Repite el experimento con una tarea distinta y compara.', 'experimento-suficientemente-bien'),
    ],
    references: [
      { citation: 'Egan, S. J., Wade, T. D., y Shafran, R. (2011). Perfectionism as a transdiagnostic process: A clinical review. Clinical Psychology Review, 31(2), 203-212.' },
      { citation: 'Neff, K. D. (2003). Self-compassion: An alternative conceptualization of a healthy attitude toward oneself. Self and Identity, 2(2), 85-101.' },
    ],
  },
  {
    id: 'semana-sensible-y-en-calma',
    title: 'Una semana sensible y en calma',
    subtitle: 'Cuidar tu energía cuando todo llega fuerte',
    days: 7,
    why: 'Si eres una persona muy sensible, los ruidos, la gente y las emociones pueden llenarte rápido. Conocer tu día en estímulos y darte pausas de descanso ayuda a disfrutar lo que tu sensibilidad aporta sin desbordarte.',
    tasks: [
      breath('Tu día en estímulos', 'Mira qué momentos de tu día te llenan y cuáles te descansan.', 'mi-dia-en-estimulos'),
      breath('Una pausa de descompresión', 'Después de un rato intenso, tómate unos minutos en un lugar tranquilo.', 'pausa-de-descompresion'),
      breath('Un límite a los estímulos', 'Elige un límite chico: menos ruido, una salida más corta o un rato a solas.', 'limites-a-la-estimulacion'),
      breath('Lo que aporta', 'Anota qué te da tu sensibilidad y qué te cuesta.', 'mi-sensibilidad-como-recurso'),
      breath('Cuando te sientes demasiado', 'Si piensas que eres demasiado, háblate con más amabilidad.', 'cuando-siento-que-soy-demasiado'),
      breath('Otra pausa', 'Planea hoy una pausa de descompresión antes de llegar al límite.', 'pausa-de-descompresion'),
      breath('Tu plan', 'Elige qué límite y qué pausa quieres mantener la semana que viene.', 'limites-a-la-estimulacion'),
    ],
    references: [
      { citation: 'Aron, E. N. (1996). The highly sensitive person: How to thrive when the world overwhelms you. Broadway Books.' },
      { citation: 'Aron, E. N., y Aron, A. (1997). Sensory-processing sensitivity and its relation to introversion and emotionality. Journal of Personality and Social Psychology, 73(2), 345-368.' },
    ],
  },
  {
    id: 'semana-despues-de-una-infidelidad',
    title: 'Una semana después de una infidelidad',
    subtitle: 'Atravesar los primeros días sin decidir en caliente',
    days: 7,
    why: 'Descubrir una infidelidad, o que la descubran, sacude todo. Los primeros días no son para decidir el futuro, sino para cuidarte, bajar la urgencia y prepararte para hablar. Si en la relación hay miedo, control o violencia, tu seguridad va primero: puedes llamar a la Línea 144 o al 911.',
    tasks: [
      breath('Cuando recién te enteras', 'Para, respira y nombra el golpe. Hoy alcanza con cuidar lo básico.', 'cuando-recien-te-enteras'),
      breath('No decidir en caliente', 'Separa lo que no puede esperar de las decisiones grandes y ponles una fecha.', 'no-decidir-en-caliente'),
      breath('Un gesto amable', 'En un momento de mucho dolor, háblate como a alguien que quieres.', 'pausa-autocompasion'),
      breath('Qué preguntar', 'Antes de hablar, mira qué preguntas te ayudan a entender y cuáles podrían dañarte más.', 'preguntas-que-ayudan'),
      breath('Hacerte cargo', 'Si fuiste tú quien tuvo la relación, mira el daño sin excusas y sin hundirte.', 'hacerme-cargo'),
      breath('Confianza de a poco', 'Si los dos eligen seguir, piensen un acuerdo chico de transparencia, con fecha.', 'confianza-de-a-poco'),
      breath('¿Celos o control?', 'Mira qué haces con los celos y si alguno de los dos está controlando al otro.', 'celos-o-control'),
    ],
    references: [
      { citation: 'Snyder, D. K., Baucom, D. H., y Gordon, K. C. (2007). Getting past the affair: A program to help you cope, heal, and move on, together or apart. Guilford Press.' },
      { citation: 'Gottman, J. M., y Silver, N. (2012). What makes love last? How to build trust and avoid betrayal. Simon & Schuster.' },
    ],
  },
  {
    id: 'semana-de-climaterio-con-calma',
    title: 'Una semana para el climaterio',
    subtitle: 'Sofocos, noches y niebla mental, con más calma',
    days: 7,
    why: 'Los sofocos, el mal dormir y los olvidos del climaterio son comunes y tienen tratamiento. Lo que piensas de ellos cambia cuánto te molestan. Esta semana prueba herramientas de la terapia cognitivo-conductual. Para hablar de tratamientos, consulta con tu médica o médico.',
    tasks: [
      breath('Pausa ante el sofoco', 'Cuando empiece un sofoco, afloja el cuerpo, respira lento y deja que pase.', 'pausa-ante-el-sofoco'),
      breath('Lo que te dices', 'Anota qué piensas cuando llega el calor y busca una frase más justa.', 'lo-que-me-digo-del-sofoco'),
      breath('Noches de calor', 'Arma un plan para las noches con sudores: el cuarto, qué hacer al despertar y cómo volver a dormir.', 'noches-de-calor-y-desvelo'),
      breath('Apoyos para la memoria', 'Elige dos apoyos para los olvidos, como una lista o una alarma.', 'niebla-mental-con-apoyos'),
      breath('Esta etapa, con amabilidad', 'En un día de irritabilidad o ánimo bajo, date un gesto amable.', 'esta-etapa-con-amabilidad'),
      breath('Hablarlo', 'Prepara cómo contar lo que te pasa a tu pareja, en el trabajo o en la consulta.', 'hablarlo-sin-verguenza'),
      breath('Respirar despacio', 'Antes de dormir, respira lento unos minutos, con la exhalación más larga.', 'respiracion-resonante'),
    ],
    references: [
      { citation: 'Hunter, M. S., y Smith, M. (2014). Managing hot flushes and night sweats: A cognitive behavioural self-help guide to the menopause. Routledge.' },
      { citation: 'National Institute for Health and Care Excellence (2015). Menopause: Diagnosis and management (NICE guideline NG23). NICE.' },
    ],
  },
];

export const CHALLENGE_BY_ID: Record<string, Challenge> = Object.fromEntries(CHALLENGES.map((c) => [c.id, c]));

export const taskFor = (c: Challenge, day: number): ChallengeTask => c.tasks[(day - 1) % c.tasks.length];

/** Estado guardado en el dispositivo: día de inicio y días marcados a mano. */
export interface ChallengeState {
  start: string; // YYYY-MM-DD
  manual: string[]; // claves YYYY-MM-DD
}

const parseKey = (key: string): Date => {
  const [y, m, d] = key.split('-').map(Number);
  return new Date(y, m - 1, d);
};

export const addDays = (key: string, n: number): string => {
  const d = parseKey(key);
  d.setDate(d.getDate() + n);
  return toDateKey(d);
};

/** Día del desafío (1 = el de inicio) para una fecha. */
export function challengeDay(start: string, today = new Date()): number {
  return Math.round((parseKey(toDateKey(today)).getTime() - parseKey(start).getTime()) / 86_400_000) + 1;
}

/** Si la tarea de un día ya se hizo (por registro o a mano). */
export function taskDone(task: ChallengeTask, dayKey: string, state: ChallengeState, sessions: SessionRecord[], journal: JournalEntry[]): boolean {
  if (state.manual.includes(dayKey)) return true;
  if (task.practiceId && sessions.some((s) => s.completed && s.practiceId === task.practiceId && recordDayKey(s.startedAt, s.tz) === dayKey)) return true;
  if (task.journalType && journal.some((j) => j.type === task.journalType && recordDayKey(j.createdAt, j.tz) === dayKey)) return true;
  return false;
}

export interface ChallengeProgress {
  /** Día actual (puede pasar del total cuando terminó). */
  day: number;
  /** Hecho o no, por cada día ya transcurrido (hasta hoy, sin pasar del total). */
  done: boolean[];
  completed: number;
  finished: boolean;
}

export function challengeProgress(c: Challenge, state: ChallengeState, sessions: SessionRecord[], journal: JournalEntry[], today = new Date()): ChallengeProgress {
  const day = challengeDay(state.start, today);
  const elapsed = Math.max(0, Math.min(c.days, day));
  const done = Array.from({ length: elapsed }, (_, i) => taskDone(taskFor(c, i + 1), addDays(state.start, i), state, sessions, journal));
  return { day, done, completed: done.filter(Boolean).length, finished: day > c.days };
}
