import type { Practice, Reference } from './types';

/** La evidencia de las habilidades DBT es la de la terapia completa, de la que cada habilidad forma parte. */
const STOREBO_2020: Reference = {
  citation: 'Storebø, O. J., Stoffers-Winterling, J. M., Völlm, B. A., et al. (2020). Psychological therapies for people with borderline personality disorder. Cochrane Database of Systematic Reviews, CD012955.',
  doi: '10.1002/14651858.CD012955.pub2',
  note: 'La evidencia es de la terapia dialéctica conductual completa, de la que esta habilidad forma parte.',
};

/**
 * Habilidades de la terapia dialéctico-conductual (DBT) para pacientes, por módulo:
 * - Conciencia plena: mente sabia.
 * - Tolerancia al malestar: calmarse con los cinco sentidos, pros y contras, aceptación radical.
 * - Regulación emocional: comprobar los hechos, PLEASE (cuidar el cuerpo).
 * - Efectividad interpersonal: GIVE y FAST.
 * TIPP, acción opuesta y DEAR MAN están en practices-skills.ts.
 */

const LINEHAN_2015: Reference = { citation: 'Linehan, M. M. (2015). DBT skills training manual (2nd ed.). Guilford Press.' };
const VALENTINE_2015: Reference = {
  citation:
    'Valentine, S. E., Bankoff, S. M., Poulin, R. M., Reidler, E. B., & Pantalone, D. W. (2015). The use of dialectical behavior therapy skills training as stand-alone treatment: A systematic review of the treatment outcome literature. Journal of Clinical Psychology, 71(1), 1–20.',
  doi: '10.1002/jclp.22114',
  note: 'El entrenamiento en habilidades DBT por sí solo muestra resultados prometedores, con estudios todavía heterogéneos.',
};
const NEACSIU_2010: Reference = {
  citation:
    'Neacsiu, A. D., Rizvi, S. L., & Linehan, M. M. (2010). Dialectical behavior therapy skills use as a mediator and outcome of treatment for borderline personality disorder. Behaviour Research and Therapy, 48(9), 832–839.',
  doi: '10.1016/j.brat.2010.05.017',
  note: 'El uso de las habilidades explica parte de la mejoría en la DBT.',
};

export const DBT_PRACTICES: Practice[] = [
  {
    id: 'mente-sabia',
    title: 'Mente sabia',
    family: 'attentional',
    skills: ['attention', 'resilience'],
    summary: 'Encontrar el punto de equilibrio entre la mente emocional y la mente racional antes de decidir.',
    mechanism:
      'Observar la emoción y los hechos a la vez, sin dejarse llevar por ninguno, amplía el margen entre el impulso y la acción.',
    evidenceLevel: 'moderada',
    evidence: [STOREBO_2020, LINEHAN_2015, NEACSIU_2010],
    howItWorks: [
      'La terapia dialéctico-conductual describe tres estados de la mente. La mente emocional decide según lo que se siente en el momento. La mente racional decide sólo con datos y lógica, sin tener en cuenta lo que se siente. La mente sabia es la unión de las dos: reconoce la emoción, mira los hechos y elige lo que te ayuda a largo plazo.',
      'No es un estado especial ni hace falta sentir calma para acceder a ella. Muchas personas la describen como una sensación de saber, tranquila y clara, que aparece cuando se deja de reaccionar. Se entrena con la respiración y con una pregunta sencilla: «¿qué es lo sabio ahora?».',
    ],
    tips: [
      'Úsala antes de una decisión, aunque sea pequeña.',
      'Si no aparece una respuesta clara, también es información: quizá conviene esperar.',
      'La mente sabia no siempre elige lo más cómodo, sino lo que te acerca a tus valores.',
    ],
    obstacles: [{ q: 'No noto ninguna «sabiduría».', a: 'Es normal al principio. Basta con notar la diferencia entre lo que sientes y lo que sabes. Con la práctica, la pregunta se vuelve más fácil de responder.' }],
    steps: [
      { title: 'Llegar', instruction: 'Siéntate cómodo/a. Deja que la respiración siga su ritmo y nota el apoyo del cuerpo.', durationSec: 45, kind: 'breath' },
      { title: 'Mente emocional', instruction: 'Piensa en algo que te preocupa. ¿Qué sientes? ¿Qué te empuja a hacer la emoción?', durationSec: 60, kind: 'reflection' },
      { title: 'Mente racional', instruction: '¿Cuáles son los hechos, sin opiniones? ¿Qué dice la lógica?', durationSec: 60, kind: 'reflection' },
      { title: 'Hacia el centro', instruction: 'Al inhalar, di por dentro «sabia». Al exhalar, «mente». Lleva la atención al centro del cuerpo, bajo las costillas.', durationSec: 75, kind: 'breath' },
      { title: 'Preguntar', instruction: 'Pregúntate: «¿qué es lo sabio ahora?». No busques la respuesta. Deja que llegue, o que no llegue.', durationSec: 60, kind: 'silence' },
      { title: 'Elegir', instruction: '¿Qué paso, por pequeño que sea, te dice la mente sabia? Tómalo como una intención, no como una orden.', durationSec: 45, kind: 'reflection' },
    ],
  },
  {
    id: 'cinco-sentidos',
    title: 'Calmarse con los cinco sentidos',
    family: 'attentional',
    skills: ['resilience', 'compassion'],
    micro: true,
    summary: 'Tratarte con cuidado en un mal momento a través de la vista, el oído, el olfato, el gusto y el tacto.',
    mechanism:
      'Las sensaciones agradables y suaves dan al sistema nervioso señales de seguridad y llevan la atención fuera del pensamiento que alimenta el malestar.',
    evidenceLevel: 'moderada',
    evidence: [STOREBO_2020, LINEHAN_2015, VALENTINE_2015],
    howItWorks: [
      'Calmarse con los sentidos es una habilidad de tolerancia al malestar de la terapia dialéctico-conductual. Consiste en ofrecerte algo amable por cada sentido: mirar algo bonito, escuchar una música tranquila, oler algo que te guste, tomar una bebida caliente despacio o tocar una manta suave.',
      'No elimina el problema, pero ayuda a atravesar el momento sin empeorarlo. También enseña algo importante a quien suele ser duro/a consigo: que puede cuidarse cuando lo pasa mal.',
    ],
    tips: [
      'Prepara una «caja de calma» con objetos para cada sentido.',
      'Elige cosas que puedas tener a mano en casa y fuera.',
      'Si la intensidad es muy alta, empieza por TIPP y después usa los sentidos.',
    ],
    obstacles: [{ q: 'Siento que no me lo merezco.', a: 'Esa idea es frecuente cuando hay autocrítica. Prueba igual: cuidarte no es un premio, es lo que harías por alguien que quieres.' }],
    steps: [
      { title: 'Vista', instruction: 'Busca algo agradable de mirar: una planta, el cielo, una foto querida. Míralo despacio.', durationSec: 30 },
      { title: 'Oído', instruction: 'Escucha un sonido tranquilo: música suave, la lluvia, tu propia respiración.', durationSec: 30 },
      { title: 'Olfato', instruction: 'Huele algo que te guste: café, una crema, una fruta. Respira el olor sin prisa.', durationSec: 25 },
      { title: 'Gusto', instruction: 'Toma un sorbo de algo caliente o un bocado pequeño. Nota el sabor entero.', durationSec: 30 },
      { title: 'Tacto', instruction: 'Toca algo suave o cálido: una manta, tus manos juntas, el agua tibia. Quédate con esa sensación.', durationSec: 35 },
    ],
  },
  {
    id: 'pros-y-contras',
    title: 'Pros y contras ante un impulso',
    family: 'constructive',
    skills: ['resilience'],
    summary: 'Antes de actuar por un impulso fuerte, comparar con calma qué pasa si lo sigues y qué pasa si lo resistes.',
    mechanism:
      'El impulso sólo muestra el alivio inmediato. Pensar en las consecuencias a corto y largo plazo trae al presente lo que la emoción esconde.',
    evidenceLevel: 'moderada',
    evidence: [STOREBO_2020, LINEHAN_2015, VALENTINE_2015],
    howItWorks: [
      'En la terapia dialéctico-conductual, los pros y contras se usan ante impulsos que pueden hacer daño: gritar, mandar un mensaje del que te arrepientas, beber, darte un atracón o hacerte daño. La emoción fuerte estrecha la mirada y sólo deja ver el alivio de ahora.',
      'La tabla tiene cuatro casillas: lo bueno y lo malo de seguir el impulso, y lo bueno y lo malo de resistirlo. Lo más útil es prepararla en calma, con un impulso que se repite, y volver a leerla cuando aparezca.',
    ],
    tips: [
      'Escribe la tabla en papel o en el móvil y tenla a mano.',
      'Piensa en las consecuencias de mañana y del mes que viene, no sólo de ahora.',
      'Si el impulso es hacerte daño, usa tu plan de seguridad y pide ayuda.',
    ],
    obstacles: [{ q: 'En el momento no puedo pensar.', a: 'Por eso conviene prepararla antes. En el momento, basta con leerla. Si la intensidad es muy alta, empieza por TIPP.' }],
    steps: [
      { title: 'El impulso', instruction: 'Piensa en un impulso que te cuesta frenar. ¿Qué te empuja a hacer?', durationSec: 45, kind: 'reflection' },
      { title: 'Seguirlo: a favor', instruction: '¿Qué ganas si lo sigues? Sé sincero/a: suele ser alivio rápido.', durationSec: 50, kind: 'reflection' },
      { title: 'Seguirlo: en contra', instruction: '¿Qué pierdes si lo sigues? Piensa en mañana, en tus relaciones y en cómo te sentirás contigo.', durationSec: 60, kind: 'reflection' },
      { title: 'Resistir: a favor', instruction: '¿Qué ganas si no lo sigues? ¿Qué cuidas, qué respetas de ti?', durationSec: 60, kind: 'reflection' },
      { title: 'Resistir: en contra', instruction: '¿Qué te cuesta resistir? Quizá malestar durante un rato. Nota que el malestar pasa.', durationSec: 50, kind: 'reflection' },
      { title: 'Decidir', instruction: 'Mira las cuatro casillas. ¿Qué eliges? Recuerda lo más importante en una frase.', durationSec: 45, kind: 'reflection' },
    ],
  },
  {
    id: 'aceptacion-radical',
    title: 'Aceptación radical',
    family: 'deconstructive',
    skills: ['resilience', 'compassion'],
    summary: 'Dejar de pelear con lo que ya pasó o no se puede cambiar, para que el dolor no se convierta en sufrimiento.',
    mechanism:
      'Rechazar la realidad («esto no debería haber pasado») añade amargura y bloquea la acción. Aceptarla con mente y cuerpo libera energía para responder.',
    evidenceLevel: 'moderada',
    evidence: [STOREBO_2020, LINEHAN_2015, VALENTINE_2015],
    howItWorks: [
      'La aceptación radical es una habilidad de tolerancia al malestar de la terapia dialéctico-conductual. «Radical» significa completa: aceptar con la mente, con el cuerpo y con el corazón que algo es como es. Marsha Linehan lo resume así: el dolor es inevitable; el sufrimiento es dolor más no aceptación.',
      'Aceptar no es aprobar, ni rendirse, ni dejar de luchar por un cambio. Es reconocer los hechos tal como son ahora, para poder decidir qué hacer con ellos. Suele hacer falta volver a aceptar muchas veces: la mente vuelve a rechazar, y se vuelve a girar hacia la aceptación.',
    ],
    tips: [
      'Empieza con cosas pequeñas: un atasco, la lluvia, un error ya cometido.',
      'Una postura abierta ayuda: manos sobre los muslos, palmas hacia arriba, cara relajada.',
      'Es normal sentir tristeza al aceptar. Es parte del proceso.',
    ],
    obstacles: [{ q: 'Si lo acepto, es como decir que está bien.', a: 'No. Puedes aceptar que algo pasó y seguir pensando que fue injusto. Aceptar es dejar de pelear con el pasado, no darle la razón.' }],
    cautions:
      'Aceptar la realidad no significa aceptar una situación de maltrato o peligro: en ese caso, lo sabio es protegerte y pedir ayuda. Con duelos o traumas recientes, practícala con tu terapeuta.',
    steps: [
      { title: 'Postura abierta', instruction: 'Apoya las manos sobre los muslos, con las palmas hacia arriba. Relaja la frente, la mandíbula y los hombros.', durationSec: 45, kind: 'breath' },
      { title: 'Lo que rechazas', instruction: 'Piensa en algo que te cuesta aceptar. Empieza por algo de intensidad media.', durationSec: 45, kind: 'reflection' },
      { title: 'Los hechos', instruction: 'Descríbelo sólo con hechos: qué pasó, cuándo, cómo es ahora. Sin «debería».', durationSec: 60, kind: 'reflection' },
      { title: 'Las causas', instruction: 'Recuerda que todo tiene causas. Esto pasó porque se dieron ciertas condiciones, aunque no te gusten.', durationSec: 50, kind: 'reflection' },
      { title: 'Aceptar con el cuerpo', instruction: 'Al exhalar, di por dentro: «Es lo que es». Nota dónde el cuerpo se resiste y deja que se ablande un poco.', durationSec: 90, kind: 'breath' },
      { title: 'Lo que sí puedes', instruction: 'Desde aquí, ¿qué puedes hacer? A veces es actuar; a veces, sólo cuidarte.', durationSec: 50, kind: 'reflection' },
    ],
  },
  {
    id: 'comprobar-hechos',
    title: 'Comprobar los hechos',
    family: 'deconstructive',
    skills: ['resilience', 'attention'],
    summary: 'Revisar si una emoción y su intensidad se ajustan a lo que de verdad está pasando.',
    mechanism:
      'Las emociones responden a cómo interpretamos lo que pasa. Separar los hechos de las interpretaciones cambia la emoción cuando esta nace de una suposición.',
    evidenceLevel: 'moderada',
    evidence: [
      STOREBO_2020,
      LINEHAN_2015,
      {
        citation: 'Gross, J. J. (1998). The emerging field of emotion regulation: An integrative review. Review of General Psychology, 2(3), 271–299.',
        doi: '10.1037/1089-2680.2.3.271',
        note: 'Marco de la reevaluación cognitiva como estrategia de regulación.',
      },
    ],
    howItWorks: [
      'Comprobar los hechos es una habilidad de regulación emocional de la terapia dialéctico-conductual. Parte de una idea sencilla: muchas veces no reaccionamos a lo que pasa, sino a lo que creemos que pasa. Un mensaje sin respuesta se convierte en «está enfadado/a conmigo».',
      'Cada emoción tiene hechos que la justifican: el miedo, un peligro real; la ira, un daño o un obstáculo; la culpa, haber actuado contra tus valores. Si la emoción se ajusta a los hechos, conviene resolver el problema. Si no se ajusta, la acción opuesta ayuda a que baje.',
    ],
    tips: [
      'Pregúntate: «¿una cámara de vídeo vería lo mismo que yo?».',
      'Busca otras explicaciones posibles, al menos dos.',
      'Revisa también la intensidad: una emoción puede ser justa pero exagerada.',
    ],
    obstacles: [{ q: 'Mi emoción sí está justificada.', a: 'Puede ser. Esta habilidad no busca quitarte la razón. Si los hechos la justifican, el siguiente paso es resolver el problema, no cambiar la emoción.' }],
    steps: [
      { title: 'La emoción', instruction: '¿Qué emoción sientes y con qué intensidad, del 0 al 10?', durationSec: 40, kind: 'reflection' },
      { title: 'El hecho', instruction: '¿Qué pasó exactamente? Descríbelo como lo vería una cámara, sin opiniones.', durationSec: 60, kind: 'reflection' },
      { title: 'Tu lectura', instruction: '¿Qué te dijiste sobre lo que pasó? ¿Qué supones que significa?', durationSec: 60, kind: 'reflection' },
      { title: 'Otras lecturas', instruction: '¿Qué otras explicaciones podría haber? Piensa al menos dos.', durationSec: 60, kind: 'reflection' },
      { title: 'El peligro', instruction: '¿Qué temes que pase? ¿Qué probabilidad real tiene? Si pasara, ¿cómo lo afrontarías?', durationSec: 60, kind: 'reflection' },
      { title: 'Ajuste', instruction: '¿La emoción y su intensidad encajan con los hechos? Si encajan, resuelve. Si no, prueba la acción opuesta.', durationSec: 45, kind: 'reflection' },
    ],
  },
  {
    id: 'please',
    title: 'PLEASE: cuidar el cuerpo para cuidar las emociones',
    family: 'constructive',
    skills: ['resilience'],
    summary: 'Revisar el sueño, la comida, el movimiento, la salud y las sustancias, que hacen más o menos vulnerable a las emociones fuertes.',
    mechanism:
      'Un cuerpo cansado, con hambre o enfermo reacciona más y se recupera peor. Cuidar lo básico reduce la vulnerabilidad emocional de fondo.',
    evidenceLevel: 'moderada',
    evidence: [
      STOREBO_2020,
      LINEHAN_2015,
      {
        citation:
          'Schuch, F. B., Vancampfort, D., Richards, J., et al. (2016). Exercise as a treatment for depression: A meta-analysis adjusting for publication bias. Journal of Psychiatric Research, 77, 42–51.',
        doi: '10.1016/j.jpsychires.2016.02.023',
        note: 'Evidencia sobre uno de los componentes (el ejercicio), no sobre el conjunto PLEASE.',
      },
    ],
    howItWorks: [
      'En la terapia dialéctico-conductual, PLEASE agrupa los cuidados que hacen menos vulnerable a las emociones intensas. Sus siglas, en inglés, recuerdan: tratar las enfermedades físicas, comer de forma equilibrada, evitar el alcohol y las drogas que alteran el ánimo, dormir lo suficiente y hacer ejercicio.',
      'Parece obvio, pero es lo primero que se descuida en una mala racha. Y cuando falla, todo cuesta más: una misma discusión duele más tras una noche sin dormir. La práctica consiste en revisar cada área sin juzgarte y elegir un solo cambio pequeño.',
    ],
    tips: [
      'Elige un solo cambio por semana.',
      'Si duermes mal, la plantilla «Diario del sueño» puede ayudarte.',
      'Si tomas medicación, sigue las indicaciones de tu médico antes de cambiar nada.',
    ],
    obstacles: [{ q: 'Ya sé todo esto, pero no lo hago.', a: 'Es lo más habitual. No se trata de hacerlo perfecto, sino de un paso pequeño y concreto: acostarte quince minutos antes, o caminar diez minutos.' }],
    cautions:
      'Si tienes un trastorno de la conducta alimentaria, no uses esta práctica para controlar la comida: habla con tu equipo de tratamiento.',
    steps: [
      { title: 'Salud física', instruction: '¿Hay algún dolor o enfermedad que estés dejando pasar? ¿Necesitas ir al médico o tomar tu medicación?', durationSec: 45, kind: 'reflection' },
      { title: 'Comida', instruction: '¿Comes a horas regulares, sin saltarte comidas ni comer de más? Nota sin juzgar.', durationSec: 45, kind: 'reflection' },
      { title: 'Sustancias', instruction: '¿El alcohol, el tabaco u otras sustancias están cambiando tu ánimo o tu sueño?', durationSec: 40, kind: 'reflection' },
      { title: 'Sueño', instruction: '¿Duermes lo que necesitas? ¿Te acuestas y te levantas a una hora parecida?', durationSec: 45, kind: 'reflection' },
      { title: 'Movimiento', instruction: '¿Te mueves cada día, aunque sea un paseo corto?', durationSec: 40, kind: 'reflection' },
      { title: 'Un cambio', instruction: 'Elige una sola área y un paso pequeño para esta semana. Decide cuándo y dónde lo harás.', durationSec: 50, kind: 'reflection' },
    ],
  },
  {
    id: 'give-fast',
    title: 'GIVE y FAST: cuidar la relación y tu respeto propio',
    family: 'constructive',
    skills: ['compassion', 'resilience'],
    summary: 'Preparar una conversación para que sea amable con la otra persona y justa contigo.',
    mechanism:
      'Validar al otro baja su actitud defensiva; mantener tus valores protege la autoestima. Las dos cosas hacen más probable un acuerdo que no dañe la relación.',
    evidenceLevel: 'moderada',
    evidence: [
      STOREBO_2020,
      LINEHAN_2015,
      {
        citation:
          'Shenk, C. E., & Fruzzetti, A. E. (2011). The impact of validating and invalidating responses on emotional reactivity. Journal of Social and Clinical Psychology, 30(2), 163–183.',
        doi: '10.1521/jscp.2011.30.2.163',
        note: 'Estudio experimental: las respuestas validantes reducen la reactividad emocional.',
      },
    ],
    howItWorks: [
      'DEAR MAN ayuda a conseguir lo que pides. GIVE y FAST completan la efectividad interpersonal de la terapia dialéctico-conductual. GIVE cuida la relación: ser amable, mostrar interés, validar lo que siente la otra persona y mantener un tono tranquilo. FAST cuida tu respeto propio: ser justo/a contigo y con el otro, no disculparte de más, mantener tus valores y ser sincero/a.',
      'Validar no es dar la razón. Es mostrar que entiendes por qué la otra persona siente lo que siente: «Entiendo que estés cansado/a, ha sido una semana dura». En un estudio experimental, las respuestas validantes redujeron la activación emocional frente a las que invalidaban.',
    ],
    tips: [
      'Antes de hablar, decide qué importa más esta vez: la petición, la relación o tu respeto propio.',
      'Una frase de validación al principio cambia el tono de toda la conversación.',
      'Disculparte por lo que sí hiciste está bien. Disculparte por existir o por pedir, no.',
    ],
    obstacles: [{ q: 'Si valido al otro, siento que pierdo.', a: 'Validar lo que siente no te obliga a ceder en lo que pides. Puedes decir «entiendo que te moleste» y mantener tu límite.' }],
    steps: [
      { title: 'La conversación', instruction: 'Piensa en una conversación próxima. ¿Con quién es y qué quieres conseguir?', durationSec: 45, kind: 'reflection' },
      { title: 'Amable', instruction: 'Imagina cómo empezar sin ataques ni amenazas. ¿Qué tono de voz y qué gesto usarías?', durationSec: 50, kind: 'reflection' },
      { title: 'Interés', instruction: '¿Qué le preguntarías para entender su punto de vista? Prepárate para escuchar sin interrumpir.', durationSec: 50, kind: 'reflection' },
      { title: 'Validar', instruction: 'Escribe una frase que muestre que entiendes lo que siente: «Entiendo que…».', durationSec: 60, kind: 'reflection' },
      { title: 'Tus valores', instruction: '¿Qué no estás dispuesto/a a dejar de lado? Recuerda: no hace falta pedir perdón por pedir.', durationSec: 60, kind: 'reflection' },
      { title: 'Ensayo', instruction: 'Imagina la conversación con postura tranquila y voz amable. Nota cómo te sientes al ser justo/a con los dos.', durationSec: 60 },
    ],
  },
];
