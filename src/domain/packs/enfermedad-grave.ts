import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Enfermedad grave»: lo emocional de recibir un diagnóstico grave (por ejemplo, cáncer)
 * o de vivir con una enfermedad crónica.
 *  - el impacto del diagnóstico y las reacciones normales;
 *  - preparar la consulta y pedir información a tu ritmo;
 *  - la espera de estudios y controles («escanxiedad») y el miedo a la recaída (Simard y
 *    colaboradores);
 *  - aceptación y valores (ACT, Hayes, Strosahl y Wilson);
 *  - contarles a otros y a los chicos; cuerpo, identidad, cansancio, pareja y sexualidad;
 *  - cuidados paliativos explicados sin miedo (Temel y colaboradores);
 *  - cuando el tratamiento termina; ajuste a la enfermedad crónica (Moss-Morris).
 *
 * Se enlaza con el módulo «salud» (dolor y salud crónica: «ritmo-de-actividad»,
 * «valores-pese-al-dolor»), con el paquete de medicación («preparar-la-consulta-medica») y con
 * el de cuidadores («acompanar-a-un-familiar»).
 *
 * Cuidados del paquete: nunca hay indicaciones médicas; ante síntomas nuevos o que cambian, se
 * consulta al equipo tratante. Señales para consultar salud mental: depresión, ansiedad intensa,
 * ideas de morir (135 / 0800-999-0091 / 911).
 */

const HAYES_2012: Reference = {
  citation: 'Hayes, S. C., Strosahl, K. D., & Wilson, K. G. (2012). Acceptance and commitment therapy: The process and practice of mindful change (2.ª ed.). Guilford Press.',
};
const SIMARD_2013: Reference = {
  citation:
    'Simard, S., Thewes, B., Humphris, G., Dixon, M., Hayden, C., Mireskandari, S., & Ozakinci, G. (2013). Fear of cancer recurrence in adult cancer survivors: A systematic review of quantitative studies. Journal of Cancer Survivorship, 7(3), 300–322.',
};
const FALLER_2013: Reference = {
  citation:
    'Faller, H., Schuler, M., Richard, M., Heckl, U., Weis, J., & Küffner, R. (2013). Effects of psycho-oncologic interventions on emotional distress and quality of life in adult patients with cancer: Systematic review and meta-analysis. Journal of Clinical Oncology, 31(6), 782–793.',
  doi: '10.1200/JCO.2011.40.8922',
};
const TEMEL_2010: Reference = {
  citation:
    'Temel, J. S., Greer, J. A., Muzikansky, A., Gallagher, E. R., Admane, S., Jackson, V. A., Dahlin, C. M., Blinderman, C. D., Jacobsen, J., Pirl, W. F., Billings, J. A., & Lynch, T. J. (2010). Early palliative care for patients with metastatic non-small-cell lung cancer. New England Journal of Medicine, 363(8), 733–742.',
  doi: '10.1056/NEJMoa1000678',
};
const MOSS_MORRIS_2013: Reference = {
  citation: 'Moss-Morris, R. (2013). Adjusting to chronic illness: Time for a unified theory. British Journal of Health Psychology, 18(4), 681–686.',
};

/** Aviso común: no hay indicaciones médicas y señales para consultar salud mental. */
const CUIDADO =
  'Esto no reemplaza a tu equipo de salud ni da indicaciones médicas. Ante síntomas nuevos o que cambian, consulta a tu médico. Si sientes tristeza o desgano casi todo el día por más de dos semanas, o ansiedad que no te deja vivir, pide ayuda de salud mental. Si piensas en morir, llama al 135, al 0800-999-0091 o al 911, o usa el botón Ayuda.';

export const ENFERMEDAD_GRAVE_PACK: ContentPack = {
  id: 'enfermedad-grave',

  // ================================================================== prácticas
  practices: [
    {
      id: 'la-ola-del-diagnostico',
      title: 'La ola del diagnóstico',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Unos minutos para nombrar lo que sientes después de una noticia médica dura, sin exigirte entender ni resolver todo hoy.',
      mechanism: 'Nombrar las emociones y reconocerlas como normales baja la sensación de caos. Achicar el foco al día de hoy hace la situación más manejable.',
      evidenceLevel: 'preliminar',
      evidence: [MOSS_MORRIS_2013, HAYES_2012],
      howItWorks: [
        'Recibir un diagnóstico grave sacude. Es común sentir miedo, bronca, tristeza, confusión o nada en absoluto. También olvidar lo que dijo el médico o no poder dormir. Son reacciones normales a una noticia muy dura.',
        'Rona Moss-Morris describe el ajuste a una enfermedad como un proceso. Al principio hay un golpe y mucho malestar. Con el tiempo, la mayoría de las personas encuentra formas de seguir viviendo con lo que les importa (Moss-Morris, 2013).',
        'No hace falta apurar ese proceso. Lo que ayuda al principio es ir de a un día y no estar en soledad.',
      ],
      tips: [
        'No hace falta sentir «lo correcto». Todo lo que aparece puede estar.',
        'Escribir lo que sientes, aunque sea una palabra, ordena un poco.',
        'Pide a alguien de confianza que te acompañe a las próximas consultas.',
      ],
      obstacles: [{ q: 'No siento nada, como si no me pasara a mí.', a: 'Es muy común al principio. Es una forma de protegerse. Las emociones pueden llegar más tarde, y está bien.' }],
      cautions: CUIDADO,
      steps: [
        { title: 'Llegar', instruction: 'Siéntate con apoyo. Siente los pies en el piso y respira despacio.', durationSec: 40, kind: 'breath' },
        { title: 'Lo que sientes', instruction: 'Nombra lo que sientes hoy. Miedo, bronca, tristeza, confusión o nada. Todo puede estar.', durationSec: 60, kind: 'reflection' },
        { title: 'Es normal', instruction: 'Dite: «Es una reacción normal a una noticia muy dura». No hace falta sentir otra cosa.', durationSec: 45, kind: 'breath' },
        { title: 'En el cuerpo', instruction: '¿Dónde lo notas en el cuerpo? Respira despacio y deja que esté, sin querer cambiarlo.', durationSec: 45, kind: 'breath' },
        { title: 'Sólo hoy', instruction: 'No tienes que resolver todo hoy. ¿Qué es lo único que necesitas hacer hoy?', durationSec: 60, kind: 'reflection' },
        { title: 'Con quién', instruction: '¿Con quién puedes hablar de esto? Anota un nombre y cuándo le vas a escribir.', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'preguntar-a-mi-ritmo',
      title: 'Preguntar a mi ritmo',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Preparar la próxima consulta: qué quieres saber ahora, qué prefieres saber más adelante y qué es importante en tu vida.',
      mechanism: 'Llevar las preguntas escritas y decir cuánta información quieres ayuda a entender mejor y a decidir junto con el equipo.',
      evidenceLevel: 'preliminar',
      evidence: [MOSS_MORRIS_2013, FALLER_2013],
      howItWorks: [
        'En las consultas se dice mucho en poco tiempo, y con miedo cuesta retener. Llevar las preguntas escritas y alguien que tome notas ayuda a no olvidar lo importante.',
        'Cada persona quiere distinta cantidad de información. Hay quien quiere saber todo de entrada y quien prefiere ir de a poco. Las dos formas son válidas, y puedes decírselo a tu equipo.',
        'Contar qué te importa en tu vida, como trabajar, cuidar a los chicos o hacer un viaje, permite que las decisiones tengan en cuenta eso.',
      ],
      tips: [
        'Ordena las preguntas de la más importante a la menos importante.',
        'Pide que te repitan o te dibujen lo que no entiendas.',
        'Pregunta con quién puedes hablar si te surgen dudas entre consultas.',
      ],
      obstacles: [{ q: 'Me da vergüenza preguntar tanto.', a: 'Tus preguntas son parte del tratamiento. Entender te ayuda a decidir y a cuidarte. El equipo está para eso.' }],
      cautions: CUIDADO,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Ten a mano papel o el celular para anotar.', durationSec: 30, kind: 'breath' },
        { title: 'A tu ritmo', instruction: 'Piensa qué quieres saber ahora y qué prefieres saber más adelante. Es válido ir a tu ritmo.', durationSec: 60, kind: 'reflection' },
        { title: 'Tus preguntas', instruction: 'Escribe tus preguntas. Por ejemplo: qué tengo, qué opciones hay, qué esperar y con quién hablo si tengo dudas.', durationSec: 75, kind: 'reflection' },
        { title: 'Lo que importa', instruction: 'Anota lo que te importa en tu vida: trabajo, chicos, un viaje, un proyecto. Así el equipo puede tenerlo en cuenta.', durationSec: 60, kind: 'reflection' },
        { title: 'Compañía', instruction: '¿Quieres ir con alguien que tome notas? Piensa quién podría acompañarte.', durationSec: 45, kind: 'reflection' },
        { title: 'Pedir', instruction: 'Prepara una frase para pedir lo que necesitas. Por ejemplo: «Necesito que me lo expliquen de nuevo, más despacio».', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'esperar-un-resultado',
      title: 'Mientras espero un resultado',
      family: 'attentional',
      skills: ['attention', 'resilience'],
      summary: 'Atravesar los días de espera antes de un estudio o un control sin dejar que la mente viva sólo en el resultado.',
      mechanism: 'La espera dispara la anticipación. Volver al presente y elegir qué hacer mientras tanto baja la ansiedad sin negar el miedo.',
      evidenceLevel: 'preliminar',
      evidence: [HAYES_2012, SIMARD_2013],
      howItWorks: [
        'Muchas personas sienten mucha ansiedad antes de un estudio o un control. En inglés se le dice «scanxiety»; aquí la llamamos escanxiedad. Es una respuesta comprensible a una espera que importa mucho.',
        'La mente intenta resolver lo que todavía no se puede saber, y da vueltas sin parar. La terapia de aceptación y compromiso propone otra cosa: hacer lugar al miedo, volver al presente y elegir qué hacer con las horas de espera (Hayes y colaboradores, 2012).',
      ],
      tips: [
        'Planea algo amable para el día del estudio y el día del resultado.',
        'Limita las búsquedas en internet. Suelen dar más miedo que respuestas.',
        'Pregunta antes cuándo y cómo te van a dar el resultado.',
      ],
      obstacles: [{ q: 'No puedo dejar de pensar en el resultado.', a: 'No hace falta dejar de pensar. Nota el pensamiento, nómbralo «espera» y vuelve a lo que estás haciendo. Las veces que haga falta.' }],
      cautions: CUIDADO,
      steps: [
        { title: 'Notar', instruction: 'Nota cómo está tu mente en esta espera. ¿Corre hacia el resultado?', durationSec: 30, kind: 'breath' },
        { title: 'Nombrar', instruction: 'Ponle nombre: «Esto es la espera». Muchas personas sienten esto antes de un control.', durationSec: 30, kind: 'breath' },
        { title: 'Volver', instruction: 'Respira despacio. Siente los pies, el aire y los sonidos. Estás aquí, ahora.', durationSec: 60, kind: 'breath' },
        { title: 'Las horas', instruction: 'Planea algo para estas horas que te dé un poco de paz. Una caminata, una serie, una charla.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que no sé', instruction: 'Ahora no puedes saber el resultado. Dite: «Puedo esperar con miedo». Elige qué hacer mientras tanto.', durationSec: 45, kind: 'reflection' },
        { title: 'Compañía', instruction: 'Si te ayuda, arregla con alguien para no recibir el resultado sin compañía.', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'el-miedo-a-que-vuelva',
      title: 'El miedo a que vuelva',
      family: 'deconstructive',
      skills: ['attention', 'resilience'],
      summary: 'Conocer qué dispara el miedo a la recaída, separar las señales que tu equipo te pidió consultar del resto y darle al miedo un lugar acotado.',
      mechanism: 'Revisar el cuerpo, buscar en internet o evitar el tema alivian un rato y mantienen el miedo. Saber qué consultar y acotar la preocupación devuelve espacio a la vida.',
      evidenceLevel: 'moderada',
      evidence: [SIMARD_2013, FALLER_2013, HAYES_2012],
      howItWorks: [
        'Después de un cáncer, el miedo a que la enfermedad vuelva es muy frecuente. Una revisión de estudios mostró que, en muchas personas, se mantiene estable durante años si no se trabaja (Simard y colaboradores, 2013).',
        'Algo de miedo es comprensible y hasta útil. Se vuelve un problema cuando ocupa gran parte del día. Las intervenciones psicológicas en personas con cáncer bajan el malestar emocional y mejoran la calidad de vida (Faller y colaboradores, 2013).',
        'Esta práctica no decide si un síntoma es grave. Eso lo decide tu equipo. Lo que hace es ayudarte a no vivir revisando.',
      ],
      tips: [
        'Pide a tu equipo una lista de síntomas para consultar. Tenla a mano.',
        'Un rato fijo para el miedo ayuda a que no ocupe todo el día.',
        'Las fechas de control y los aniversarios suelen subir el miedo. Planea apoyo.',
      ],
      obstacles: [{ q: '¿Y si ignoro algo importante?', a: 'No se trata de ignorar. Lo que tu equipo te pidió consultar, lo consultas. Y ante algo nuevo o que cambia, también. Lo que reduces es revisar sin fin.' }],
      cautions: CUIDADO,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Pon una mano en el pecho si te ayuda.', durationSec: 30, kind: 'breath' },
        { title: 'Disparadores', instruction: '¿Cuándo aparece el miedo a que vuelva? Un dolor, una fecha, una noticia. Anota los disparadores.', durationSec: 60, kind: 'reflection' },
        { title: 'Qué haces', instruction: '¿Qué haces cuando aparece? Revisar el cuerpo, buscar en internet, evitar el tema. Anótalo.', durationSec: 60, kind: 'reflection' },
        { title: 'Qué consultar', instruction: 'Escribe los síntomas que tu equipo te pidió consultar. Si no los sabes, anota preguntarlos en el próximo turno.', durationSec: 60, kind: 'reflection' },
        { title: 'Un rato para el miedo', instruction: 'Elige un rato fijo del día para pensar en esto. Fuera de ese rato, anota la idea y vuelve a lo que hacías.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que importa', instruction: 'Elige una cosa valiosa para hacer hoy, aunque el miedo venga contigo.', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'valores-con-la-enfermedad',
      title: 'Lo que importa, con la enfermedad',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Reconocer lo que la enfermedad cambió y buscar formas nuevas de vivir lo que te importa con la energía que tienes hoy.',
      mechanism: 'La aceptación no es resignarse. Hacer lugar a la pérdida y volver a los valores con pasos posibles da sentido y mejora la calidad de vida.',
      evidenceLevel: 'moderada',
      evidence: [HAYES_2012, MOSS_MORRIS_2013],
      howItWorks: [
        'La enfermedad cambia el cuerpo, la rutina, el trabajo y a veces la forma de verse. Es lógico hacer el duelo por lo que se perdió. La terapia de aceptación y compromiso propone hacer lugar a ese dolor y, a la vez, volver a lo que importa (Hayes y colaboradores, 2012).',
        'Los valores no se pierden con la enfermedad. Cambia la forma de vivirlos. Cuidar puede ser una llamada en lugar de una visita. Aprender puede ser un audio en lugar de un curso.',
        'El cansancio es muy común. Dosificar la energía, con tramos cortos y pausas, ayuda a que los pasos sean posibles. Acuérdalo con tu equipo.',
      ],
      tips: [
        'Elige pasos que puedas hacer también en un día malo.',
        'Si hay mucho cansancio, mira la práctica «Ritmo de actividad».',
        'La pareja y la sexualidad también pueden cambiar. Vale consultarlo con tu equipo.',
      ],
      obstacles: [{ q: 'Ya no soy la persona de antes.', a: 'Es una pérdida real y duele. Algo de quien eras sigue: lo que te importa. Desde ahí puedes ir armando la persona que eres ahora.' }],
      cautions: CUIDADO,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio y siente el apoyo del cuerpo.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que cambió', instruction: '¿Qué cambió en tu vida con la enfermedad? Anota lo que perdiste o tuviste que dejar.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que importa', instruction: 'Debajo de eso, ¿qué te importa? Cuidar, aprender, disfrutar, estar con otros.', durationSec: 60, kind: 'reflection' },
        { title: 'Otra forma', instruction: 'Para un valor, busca una forma nueva de vivirlo con tu energía de hoy. Por ejemplo, una llamada en lugar de una visita.', durationSec: 75, kind: 'reflection' },
        { title: 'Un paso', instruction: 'Elige un paso chico para esta semana. Que sea posible en un día malo.', durationSec: 45, kind: 'reflection' },
        { title: 'Con amabilidad', instruction: 'Pon una mano en el pecho. Dite: «Hago lo que puedo con lo que tengo».', durationSec: 40, kind: 'breath' },
      ],
    },
    {
      id: 'contarlo-a-otros',
      title: 'Contarlo a otros y a los chicos',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Decidir a quién contarle, qué contar y qué ayuda pedir, y preparar palabras simples y verdaderas para los chicos.',
      mechanism: 'Elegir qué compartir y pedir ayuda concreta suma apoyo sin perder el control de tu historia. A los chicos les da seguridad una verdad simple.',
      evidenceLevel: 'preliminar',
      evidence: [MOSS_MORRIS_2013],
      howItWorks: [
        'No hay una forma correcta de contar una enfermedad. Tú decides a quién, cuándo y cuánto. Contar algo y pedir ayuda concreta suele aliviar la carga.',
        'Los chicos suelen darse cuenta de que algo pasa. Callar puede hacer que imaginen algo peor o que crean que es su culpa. Ayudan palabras simples y verdaderas, según la edad, y saber quién los va a cuidar.',
        'Si te cuesta, el equipo de salud, una psicóloga o un psicólogo, o el pediatra de los chicos pueden ayudarte a preparar la charla.',
      ],
      tips: [
        'Puedes pedir a alguien que cuente por ti a un grupo de personas.',
        'La ayuda concreta es más fácil de dar: llevarte a un turno, cocinar, buscar a los chicos.',
        'Con los chicos, varias charlas cortas funcionan mejor que una larga.',
      ],
      obstacles: [{ q: 'No quiero preocupar a nadie.', a: 'Es un deseo de cuidar. Pero cargar sin compañía cansa mucho. Puedes contar poco y pedir algo chico.' }],
      cautions: CUIDADO,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en las personas cercanas.', durationSec: 30, kind: 'breath' },
        { title: 'A quién', instruction: 'Anota a quién quieres contarle y a quién todavía no. Lo decides tú.', durationSec: 60, kind: 'reflection' },
        { title: 'Qué contar', instruction: 'Para cada persona, elige qué contar. Puede ser poco: «Estoy con un tratamiento y necesito apoyo».', durationSec: 60, kind: 'reflection' },
        { title: 'Qué pedir', instruction: 'Piensa qué ayuda concreta le pedirías. Llevarte a un turno, cocinar o sólo escuchar.', durationSec: 60, kind: 'reflection' },
        { title: 'Con los chicos', instruction: 'Si hay chicos, usa palabras simples y verdaderas, según su edad. Diles que no es su culpa y quién los va a cuidar.', durationSec: 75, kind: 'reflection' },
        { title: 'Sus preguntas', instruction: 'Prepárate para sus preguntas. Vale decir «no lo sé» y «te voy a contar cuando sepa más».', durationSec: 45, kind: 'reflection' },
      ],
    },
  ],

  meta: {
    'la-ola-del-diagnostico': { level: 'iniciacion', approaches: ['act', 'mindfulness'], module: 'salud' },
    'preguntar-a-mi-ritmo': { level: 'iniciacion', approaches: ['tcc'], module: 'salud' },
    'esperar-un-resultado': { level: 'iniciacion', approaches: ['mindfulness', 'act'], module: 'salud' },
    'el-miedo-a-que-vuelva': { level: 'intermedio', approaches: ['tcc', 'act'], module: 'salud', prerequisites: ['esperar-un-resultado'] },
    'valores-con-la-enfermedad': { level: 'intermedio', approaches: ['act'], module: 'salud', prerequisites: ['la-ola-del-diagnostico'] },
    'contarlo-a-otros': { level: 'iniciacion', approaches: ['sistemica'], module: 'salud' },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'enfermedad-grave',
      title: 'Vivir con una enfermedad grave',
      subtitle: 'Lo emocional de recibir un diagnóstico como el cáncer o de convivir con una enfermedad crónica: qué es esperable, qué ayuda y cuándo consultar.',
      category: 'Salud y trabajo',
      readingMin: 11,
      keyPoints: [
        'Miedo, bronca, tristeza o aturdimiento son reacciones normales a un diagnóstico grave.',
        'Puedes pedir la información a tu ritmo y llevar tus preguntas escritas.',
        'La espera de estudios y el miedo a la recaída son muy comunes y se pueden trabajar.',
        'Aceptar no es resignarse: es hacer lugar a lo que pasa y volver a lo que importa.',
        'La depresión, la ansiedad intensa o las ideas de morir son señales para pedir ayuda.',
      ],
      sections: [
        {
          heading: 'El golpe del diagnóstico',
          paragraphs: [
            'Una noticia médica grave sacude todo. Es común sentir miedo, bronca, tristeza, culpa o un aturdimiento raro, como si le pasara a otra persona. También cuesta dormir, concentrarse o recordar lo que dijo el médico.',
            'Son reacciones normales. Rona Moss-Morris describe el ajuste a una enfermedad como un proceso: hay un golpe inicial y, con el tiempo, la mayoría de las personas encuentra formas de seguir con lo que le importa (Moss-Morris, 2013). Ayuda ir de a un día y no atravesarlo en soledad.',
          ],
        },
        {
          heading: 'La información, a tu ritmo',
          paragraphs: [
            'Hay quien quiere saber todo de entrada y quien prefiere ir de a poco. Las dos formas son válidas, y puedes decírselo a tu equipo. Llevar las preguntas escritas y a alguien que tome notas ayuda mucho.',
            'Cuenta también qué te importa en tu vida: tu trabajo, tus hijos, un proyecto. Así las decisiones pueden tenerlo en cuenta. Las decisiones médicas se toman siempre con tu equipo.',
          ],
        },
        {
          heading: 'Vivir con incertidumbre',
          paragraphs: [
            'Los días antes de un estudio o un control suelen traer mucha ansiedad. A veces se la llama escanxiedad. Ayuda planear algo amable para esos días, limitar las búsquedas en internet y no recibir el resultado sin compañía.',
            'Después de un cáncer, el miedo a que vuelva es muy frecuente y puede durar años si no se trabaja (Simard y colaboradores, 2013). Ayuda saber qué síntomas consultar, darle al miedo un rato acotado y seguir haciendo cosas valiosas aunque el miedo esté.',
          ],
        },
        {
          heading: 'Aceptación y valores',
          paragraphs: [
            'La terapia de aceptación y compromiso propone hacer lugar a las emociones difíciles en lugar de pelear con ellas, y volver a lo que importa (Hayes y colaboradores, 2012). Aceptar no es rendirse ni dejar de tratarse. Es dejar de gastar energía en negar lo que pasa.',
            'Los valores siguen ahí, aunque cambie la forma de vivirlos. Cuidar, aprender o disfrutar pueden tomar formas nuevas, más chicas y posibles.',
          ],
        },
        {
          heading: 'El cuerpo, la identidad y el cansancio',
          paragraphs: [
            'La enfermedad y los tratamientos pueden cambiar el cuerpo, la imagen, el trabajo y los roles. Es lógico hacer un duelo por eso. Con el tiempo, muchas personas arman una idea de sí que incluye la enfermedad sin quedar reducida a ella.',
            'El cansancio es muy común. Dosificar la energía, con tramos cortos de actividad y pausas, ayuda a no caer en el ciclo de hacer de más y después no poder. Acuerda con tu equipo qué actividad es segura para ti.',
            'La pareja y la sexualidad también pueden cambiar. Es un tema de salud como cualquier otro: vale preguntarlo en la consulta.',
          ],
        },
        {
          heading: 'Contarlo a otros y a los chicos',
          paragraphs: [
            'Tú decides a quién contar, cuándo y cuánto. Pedir ayuda concreta, como un traslado o una comida, suele ser más fácil de dar y de recibir que un apoyo general.',
            'Los chicos se dan cuenta de que algo pasa. Les ayuda una verdad simple, según su edad. También saber que no es su culpa, que no se contagia si es el caso y quién los va a cuidar. El pediatra o una psicóloga pueden ayudarte a preparar la charla.',
          ],
        },
        {
          heading: 'Cuando el tratamiento termina',
          paragraphs: [
            'Muchas personas esperan sentirse aliviadas al terminar el tratamiento, y a veces aparece lo contrario. Se terminan las visitas frecuentes, baja el apoyo de otros y surge el miedo. Recién entonces llega a veces la emoción de todo lo vivido.',
            'Es esperable. Ayuda volver de a poco a la rutina, sin exigirte estar «como antes», y seguir pidiendo apoyo.',
          ],
        },
        {
          heading: 'La ayuda psicológica sirve',
          paragraphs: [
            'Un metaanálisis encontró que las intervenciones psicológicas en personas con cáncer, como la psicoterapia y la psicoeducación, reducen el malestar emocional y mejoran la calidad de vida (Faller y colaboradores, 2013). Muchos hospitales tienen servicios de psicooncología o de salud mental.',
            'Consulta con salud mental si sientes tristeza o desgano casi todo el día por más de dos semanas, ansiedad que no te deja vivir o ideas de morir. Si piensas en quitarte la vida, llama al 135 (resto del país, 0800-345-1435), al 0800-999-0091 o al 911, o usa el botón Ayuda de la app.',
          ],
        },
      ],
      caveat: {
        title: 'Lo que esta sección no hace',
        body: 'Aquí no hay indicaciones médicas sobre tratamientos, remedios, dietas ni actividad física. Esas decisiones se toman con tu equipo de salud. Ante síntomas nuevos o que cambian, consulta a tu médico. Las prácticas acompañan lo emocional y no reemplazan la atención en salud mental cuando hace falta.',
      },
      diagram: {
        title: 'El ciclo del miedo a la recaída',
        nodes: ['Disparador (un dolor, una fecha, un control)', 'Pensamiento «¿y si volvió?»', 'Miedo intenso', 'Revisar el cuerpo, buscar en internet o evitar', 'Alivio breve y más atención al cuerpo'],
        caption: 'Saber qué consultar, darle al miedo un rato acotado y volver a lo que importa cortan el ciclo.',
      },
      related: {
        practices: ['la-ola-del-diagnostico', 'preguntar-a-mi-ritmo', 'esperar-un-resultado', 'el-miedo-a-que-vuelva', 'valores-con-la-enfermedad', 'contarlo-a-otros', 'ritmo-de-actividad', 'valores-pese-al-dolor', 'preparar-la-consulta-medica'],
        articles: ['cuidados-paliativos', 'dolor-cronico', 'acompanar-a-un-familiar'],
      },
      references: [MOSS_MORRIS_2013, HAYES_2012, SIMARD_2013, FALLER_2013, TEMEL_2010],
    },
    {
      id: 'cuidados-paliativos',
      title: 'Cuidados paliativos, sin miedo',
      subtitle: 'Qué son, para quién son y por qué no significan «no hay nada más que hacer».',
      category: 'Salud y trabajo',
      readingMin: 6,
      keyPoints: [
        'Los cuidados paliativos buscan aliviar síntomas y sostener la calidad de vida.',
        'No son sólo para el final de la vida: pueden empezar junto con el tratamiento.',
        'Cuidan también lo emocional, lo social y lo espiritual, y a la familia.',
        'En un ensayo, empezarlos temprano mejoró la calidad de vida y el ánimo.',
      ],
      sections: [
        {
          heading: 'Qué son',
          paragraphs: [
            'Los cuidados paliativos son una atención especializada para personas con enfermedades graves. Su meta es aliviar el dolor y otros síntomas, como la falta de aire, las náuseas o el cansancio, y cuidar la calidad de vida.',
            'Los da un equipo que suele incluir médicos, enfermeras, psicólogos y trabajadores sociales. Atienden el cuerpo, las emociones, las preguntas sobre el sentido y las necesidades de la familia.',
          ],
        },
        {
          heading: 'No es «bajar los brazos»',
          paragraphs: [
            'Mucha gente cree que pedir cuidados paliativos es rendirse. No es así. Pueden darse al mismo tiempo que los tratamientos para la enfermedad, desde el diagnóstico.',
            'En un ensayo con personas con cáncer de pulmón avanzado, sumar cuidados paliativos desde el comienzo mejoró la calidad de vida y bajó los síntomas de depresión. Además, esas personas no vivieron menos: en ese estudio vivieron algo más (Temel y colaboradores, 2010).',
          ],
        },
        {
          heading: 'Cómo pedirlos',
          paragraphs: [
            'Puedes preguntarle a tu equipo si en tu hospital o tu obra social hay un servicio de cuidados paliativos y si podría ayudarte. No hace falta esperar a sentirse muy mal.',
            'También puede pedirlos un familiar que acompaña. Los equipos de paliativos suelen ayudar a hablar de lo que importa, a tomar decisiones difíciles y a cuidar a quien cuida.',
          ],
        },
      ],
      caveat: {
        title: 'Un matiz',
        body: 'El ensayo de Temel y colaboradores se hizo en un tipo de cáncer y en un hospital de Estados Unidos. Otros estudios apoyan la integración temprana, pero los resultados varían. Lo que sirve en tu caso lo decides con tu equipo. Esta sección no da indicaciones médicas.',
      },
      related: { practices: ['preguntar-a-mi-ritmo', 'valores-con-la-enfermedad', 'contarlo-a-otros'], articles: ['enfermedad-grave', 'acompanar-a-un-familiar'] },
      references: [TEMEL_2010, FALLER_2013],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'atravesar-una-enfermedad',
      title: 'Atravesar una enfermedad grave',
      subtitle: 'Cuatro semanas de apoyo emocional tras un diagnóstico o durante un tratamiento',
      description:
        'Nombrarás lo que sientes, prepararás tus consultas, aprenderás a atravesar las esperas y el miedo a la recaída, volverás a lo que te importa con tu energía de hoy y decidirás qué contar y a quién. No hay indicaciones médicas: eso lo decides con tu equipo.',
      basis: 'Moss-Morris (2013); Hayes, Strosahl y Wilson (2012); Simard y colaboradores (2013); Faller y colaboradores (2013).',
      rhythm: '10 minutos, 3 a 5 días por semana, según tu energía.',
      weeks: [
        {
          title: 'Semana 1 · El golpe',
          focus: 'Reacciones normales y preguntas',
          description: 'Leerás sobre lo emocional de una enfermedad grave, nombrarás lo que sientes y prepararás tu próxima consulta.',
          practiceIds: ['la-ola-del-diagnostico', 'preguntar-a-mi-ritmo'],
          articleIds: ['enfermedad-grave'],
          journalType: 'escritura-expresiva',
        },
        {
          title: 'Semana 2 · La espera',
          focus: 'Incertidumbre y miedo a la recaída',
          description: 'Practicarás volver al presente en las esperas y darle al miedo un lugar acotado.',
          practiceIds: ['esperar-un-resultado', 'el-miedo-a-que-vuelva'],
          articleIds: [],
          journalType: 'preocupacion',
        },
        {
          title: 'Semana 3 · Lo que importa',
          focus: 'Valores y energía',
          description: 'Buscarás formas nuevas de vivir tus valores y dosificarás la energía con tramos cortos y pausas.',
          practiceIds: ['valores-con-la-enfermedad', 'ritmo-de-actividad'],
          articleIds: [],
          journalType: 'valores',
        },
        {
          title: 'Semana 4 · Con otros',
          focus: 'Contar, pedir ayuda y conocer los paliativos',
          description: 'Decidirás qué contar y a quién, y leerás qué son los cuidados paliativos.',
          practiceIds: ['contarlo-a-otros'],
          articleIds: ['cuidados-paliativos'],
          journalType: 'conversacion',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-recibir-un-diagnostico',
      title: 'Después de una noticia dura',
      subtitle: 'Lo que es normal sentir tras un diagnóstico grave.',
      slides: [
        { heading: 'Todo se sacude', text: 'Un diagnóstico grave sacude todo. Miedo, bronca, tristeza o nada. Todo es normal.' },
        { heading: 'La cabeza', text: 'Es común no recordar lo que dijo el médico. O no poder dormir. El susto hace eso.' },
        { heading: 'De a un día', text: 'No tienes que resolver todo hoy. Pregúntate qué necesitas sólo para hoy.' },
        { heading: 'A tu ritmo', text: 'Puedes pedir la información de a poco. Lleva tus preguntas escritas y a alguien que tome notas.' },
        { heading: 'Cuándo pedir ayuda', text: 'Si la tristeza no se va en semanas, o piensas en morir, pide ayuda. Llama al 135 o al 0800-999-0091.' },
      ],
      related: { practices: ['la-ola-del-diagnostico', 'preguntar-a-mi-ritmo'], articles: ['enfermedad-grave'] },
      references: [MOSS_MORRIS_2013, FALLER_2013],
    },
    {
      id: 'pildora-escanxiedad',
      title: 'La espera del resultado',
      subtitle: 'Escanxiedad y miedo a la recaída.',
      slides: [
        { heading: 'Escanxiedad', text: 'Antes de un estudio o un control, la ansiedad sube. Tiene nombre: escanxiedad. Es muy común.' },
        { heading: 'La mente corre', text: 'La mente quiere saber lo que todavía no se puede saber. Y da vueltas.' },
        { heading: 'Volver', text: 'Nota los pies, el aire, los sonidos. Dite: «Esto es la espera». Y vuelve a lo que haces.' },
        { heading: 'Que vuelva', text: 'Después de un cáncer, el miedo a que vuelva es frecuente. Si no se trabaja, puede durar años.' },
        { heading: 'Qué ayuda', text: 'Saber qué síntomas consultar. Darle al miedo un rato fijo. Y hacer algo valioso cada día.' },
      ],
      related: { practices: ['esperar-un-resultado', 'el-miedo-a-que-vuelva'], articles: ['enfermedad-grave'] },
      references: [SIMARD_2013, HAYES_2012],
    },
    {
      id: 'pildora-cuidados-paliativos',
      title: 'Paliativos no es rendirse',
      subtitle: 'Qué son los cuidados paliativos.',
      slides: [
        { heading: 'Qué son', text: 'Son cuidados para aliviar síntomas, como el dolor o el cansancio. Y para vivir lo mejor posible.' },
        { heading: 'No sólo al final', text: 'Pueden empezar junto con el tratamiento, desde el diagnóstico. No son «bajar los brazos».' },
        { heading: 'Un equipo', text: 'Cuidan el cuerpo, las emociones y a la familia. Suelen trabajar juntos médicos, enfermeras y psicólogos.' },
        { heading: 'Lo que se vio', text: 'En un estudio, sumarlos temprano mejoró la calidad de vida y el ánimo. Y no acortó la vida.' },
        { heading: 'Pedirlos', text: 'Pregunta a tu equipo si hay un servicio de paliativos cerca. No hace falta esperar a estar muy mal.' },
      ],
      related: { practices: ['preguntar-a-mi-ritmo'], articles: ['cuidados-paliativos'] },
      references: [TEMEL_2010],
    },
    {
      id: 'pildora-cuando-termina-el-tratamiento',
      title: 'Cuando el tratamiento termina',
      subtitle: 'Por qué el final no siempre trae alivio.',
      slides: [
        { heading: 'Se esperaba alivio', text: 'Muchas personas esperan sentirse bien al terminar. A veces pasa lo contrario.' },
        { heading: 'Qué cambia', text: 'Hay menos visitas al médico. Los demás vuelven a su vida. Y aparece el miedo.' },
        { heading: 'Llega la emoción', text: 'A veces recién ahí llega todo lo vivido. Es esperable.' },
        { heading: 'De a poco', text: 'Vuelve a la rutina de a poco. No te exijas estar como antes.' },
        { heading: 'Seguir con apoyo', text: 'Sigue pidiendo ayuda. La ayuda psicológica baja el malestar y mejora la calidad de vida.' },
      ],
      related: { practices: ['valores-con-la-enfermedad', 'el-miedo-a-que-vuelva'], articles: ['enfermedad-grave'] },
      references: [FALLER_2013, MOSS_MORRIS_2013],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'escanxiedad', term: 'Escanxiedad', definition: 'Ansiedad antes de un estudio o un control médico, mientras se espera el resultado. Es muy común.', practiceId: 'esperar-un-resultado' },
    { id: 'miedo-a-la-recaida', term: 'Miedo a la recaída', definition: 'Miedo a que una enfermedad, como el cáncer, vuelva. Es frecuente y se puede trabajar.', practiceId: 'el-miedo-a-que-vuelva' },
    { id: 'cuidados-paliativos', term: 'Cuidados paliativos', definition: 'Atención para aliviar síntomas y cuidar la calidad de vida en una enfermedad grave. Pueden empezar junto con el tratamiento.', articleId: 'cuidados-paliativos' },
    { id: 'psicooncologia', term: 'Psicooncología', definition: 'Área de la psicología que acompaña a las personas con cáncer y a sus familias en lo emocional.', articleId: 'enfermedad-grave' },
    { id: 'ajuste-a-la-enfermedad', term: 'Ajuste a la enfermedad', definition: 'Proceso por el que una persona encuentra formas de seguir viviendo con lo que le importa tras un diagnóstico.', articleId: 'enfermedad-grave' },
  ],
};
