import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Necesidades: límites y diagnóstico». Suma prácticas a dos necesidades que tenían pocas:
 *
 * Poner límites (ya tenía DEAR MAN, GIVE y FAST, necesidades que pido y pros y contras):
 *  - el «no» amable, con disco rayado y banco de niebla (Smith; entrenamiento asertivo);
 *  - límites con la familia de origen (diferenciación del self, Bowen);
 *  - límites en el celular y las redes: disponibilidad y tiempos de respuesta (Sonnentag; Ley 27.555).
 *
 * Entender un diagnóstico (ya tenía preparar la devolución, preguntas para el equipo, no dejar
 * que el diagnóstico defina y hablarlo en familia):
 *  - registro de síntomas para la próxima consulta (automonitoreo);
 *  - pedir una segunda opinión sin culpa (Ley 26.529; decisión compartida);
 *  - divulgación selectiva: qué contar, a quién y cuánto, y cómo responder al estigma (Corrigan).
 *
 * Reglas de seguridad: ningún límite se pone a costa de la seguridad (si hay violencia, primero
 * un plan y la Línea 144 o el 911); no se dan indicaciones de medicación ni se diagnostica; el
 * registro no es un autodiagnóstico y no reemplaza pedir ayuda ya ante una urgencia; mientras se
 * busca otra opinión, no se deja ni se cambia un tratamiento por cuenta propia.
 */

// ------------------------------------------------------------------ referencias
const SMITH_1975: Reference = { citation: 'Smith, M. J. (1975). When I say no, I feel guilty. Dial Press.' };
const SPEED_2018: Reference = {
  citation: 'Speed, B. C., Goldstein, B. L., & Goldfried, M. R. (2018). Assertiveness training: A forgotten evidence-based treatment. Clinical Psychology: Science and Practice, 25(1), e12216.',
  doi: '10.1111/cpsp.12216',
};
const BOWEN_1978: Reference = { citation: 'Bowen, M. (1978). Family therapy in clinical practice. Jason Aronson.' };
const SKOWRON_1998: Reference = {
  citation: 'Skowron, E. A., & Friedlander, M. L. (1998). The Differentiation of Self Inventory: Development and initial validation. Journal of Counseling Psychology, 45(3), 235–246.',
  doi: '10.1037/0022-0167.45.3.235',
};
const SONNENTAG_2012: Reference = {
  citation: 'Sonnentag, S. (2012). Psychological detachment from work during leisure time: The benefits of mentally disengaging from work. Current Directions in Psychological Science, 21(2), 114–118.',
};
const DERKS_2014: Reference = {
  citation: 'Derks, D., & Bakker, A. B. (2014). Smartphone use, work–home interference, and burnout: A diary study on the role of recovery. Applied Psychology, 63(3), 411–440.',
};
const LEY_27555: Reference = {
  citation: 'Ley N.º 27.555 de Régimen Legal del Contrato de Teletrabajo (2020). Boletín Oficial de la República Argentina.',
  note: 'Reconoce el derecho a la desconexión digital fuera de la jornada laboral.',
};
const KOROTITSCH_1999: Reference = {
  citation: 'Korotitsch, W. J., & Nelson-Gray, R. O. (1999). An overview of self-monitoring research in assessment and treatment. Psychological Assessment, 11(4), 415–425.',
};
const ELWYN_2012: Reference = {
  citation:
    'Elwyn, G., Frosch, D., Thomson, R., Joseph-Williams, N., Lloyd, A., Kinnersley, P., Cording, E., Tomson, D., Dodd, C., Rollnick, S., Edwards, A., & Barry, M. (2012). Shared decision making: A model for clinical practice. Journal of General Internal Medicine, 27(10), 1361–1367.',
};
const PAYNE_2014: Reference = {
  citation:
    'Payne, V. L., Singh, H., Meyer, A. N. D., Levy, L., Harrison, D., & Graber, M. L. (2014). Patient-initiated second opinions: Systematic review of characteristics and impact on diagnosis, treatment, and satisfaction. Mayo Clinic Proceedings, 89(5), 687–696.',
};
const LEY_26529: Reference = {
  citation: 'Ley N.º 26.529 de Derechos del Paciente en su Relación con los Profesionales e Instituciones de la Salud (2009). Boletín Oficial de la República Argentina.',
  note: 'Incluye el derecho a recibir la información sanitaria por escrito para pedir una segunda opinión, y a acceder a la historia clínica.',
};
const LEY_26657: Reference = {
  citation: 'Ley N.º 26.657 de Salud Mental (2010). Boletín Oficial de la República Argentina.',
  note: 'Derechos de las personas usuarias de servicios de salud mental.',
};
const CORRIGAN_2002: Reference = {
  citation: 'Corrigan, P. W., & Watson, A. C. (2002). Understanding the impact of stigma on people with mental illness. World Psychiatry, 1(1), 16–20.',
};
const CORRIGAN_RAO_2012: Reference = {
  citation: 'Corrigan, P. W., & Rao, D. (2012). On the self-stigma of mental illness: Stages, disclosure, and strategies for change. Canadian Journal of Psychiatry, 57(8), 464–469.',
};
const CHAUDOIR_2010: Reference = {
  citation:
    'Chaudoir, S. R., & Fisher, J. D. (2010). The disclosure processes model: Understanding disclosure decision making and postdisclosure outcomes among people living with a concealable stigmatized identity. Psychological Bulletin, 136(2), 236–256.',
};

// ------------------------------------------------------------------ avisos
/** Límites y seguridad: si decir que no puede traer violencia, primero la seguridad. */
const SEGURIDAD =
  'Si poner un límite puede traerte golpes, amenazas, encierros o castigos, no lo hagas sin un plan de seguridad. Primero pide ayuda: Línea 144 (violencia de género), 911 si hay peligro ahora, o el botón Ayuda de la app.';

/** Diagnóstico: no es un test, no hay indicaciones de medicación y hay señales de urgencia. */
const DX =
  'Esto no sirve para diagnosticarte ni para decidir un tratamiento. El diagnóstico y las indicaciones los da un profesional. Si aparecen ideas de morir o de hacerte daño, si pierdes el contacto con la realidad o hay euforia con conductas de riesgo, no esperes a la consulta: llama al 135 (CABA y GBA; resto del país 0800-345-1435), al 0800-999-0091 o al 911.';

export const NECESIDADES_LIMITES_PACK: ContentPack = {
  id: 'necesidades-limites-diagnostico',

  // ================================================================== prácticas
  practices: [
    // ---------------------------------------------------------------- límites
    {
      id: 'limites-en-el-celular',
      title: 'Límites en el celular: no estar siempre disponible',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Elegir en qué horarios respondes mensajes, avisarlo con una frase corta y ajustar el celular para sostenerlo.',
      mechanism: 'Estar siempre disponible impide desconectarse y suma cansancio. Un horario claro, avisado y apoyado en los ajustes del celular baja la presión de responder ya.',
      evidenceLevel: 'preliminar',
      evidence: [SONNENTAG_2012, DERKS_2014, LEY_27555],
      howItWorks: [
        'Con el celular, muchas personas sienten que tienen que contestar en el momento: al jefe, al grupo de la familia, a una amistad que ve el «visto». Esa espera constante no deja descansar.',
        'Sabine Sonnentag estudió la recuperación fuera del trabajo. Lo que más ayuda es la desconexión psicológica: dejar de pensar en las tareas, no sólo dejar de hacerlas (Sonnentag, 2012). Usar el celular del trabajo de noche se asoció con más choque entre trabajo y casa, sobre todo en quienes desconectaban poco (Derks y Bakker, 2014).',
        'En la Argentina, la Ley 27.555 de teletrabajo reconoce el derecho a desconectarse fuera de la jornada. Pero el límite también vale para la familia y las amistades: tu tiempo no está siempre a disposición.',
      ],
      tips: [
        'Avisar una vez evita tener que explicarte cada vez.',
        'Deja una vía para lo urgente, como una llamada. Así el límite no se vive como abandono.',
        'Tardar en responder no es faltar el respeto. Es cuidar tu atención.',
      ],
      obstacles: [
        { q: 'Si no contesto rápido, se enojan.', a: 'Puede pasar al principio. Sostén el horario unos días y responde con calma cuando te toque. La mayoría de la gente se acomoda cuando el límite es claro y predecible.' },
      ],
      cautions:
        'Si alguien te exige tus claves, tu ubicación o respuestas inmediatas, y se enoja o te amenaza si no lo haces, eso puede ser control y violencia. Puedes llamar a la Línea 144, o al 911 si hay peligro. Si tu trabajo no respeta tu horario, puedes consultar en tu sindicato o en el Ministerio de Trabajo.',
      steps: [
        { title: 'Llegar', instruction: 'Mira tu celular sin abrirlo. Respira despacio dos veces.', durationSec: 20, kind: 'breath' },
        { title: 'Lo que pesa', instruction: '¿Qué mensajes te dan presión? El grupo del trabajo, la familia, alguien que espera respuesta rápida. Anota dos.', durationSec: 50, kind: 'reflection' },
        { title: 'Tus horarios', instruction: 'Elige cuándo vas a responder y cuándo no. Por ejemplo, nada de trabajo después de las ocho.', durationSec: 45, kind: 'reflection' },
        { title: 'El aviso', instruction: 'Escribe un aviso corto. Por ejemplo: «Leo los mensajes por la tarde. Si es urgente, llámame».', durationSec: 50, kind: 'reflection' },
        { title: 'Los ajustes', instruction: 'Silencia un grupo o pon el modo no molestar en esos horarios. Deja pasar las llamadas de quienes te importan.', durationSec: 50, kind: 'instruction' },
        { title: 'Sin culpa', instruction: 'Dite en voz baja: «Tardar en responder no es faltar el respeto. Mi tiempo también cuenta».', durationSec: 25, kind: 'breath' },
      ],
    },
    {
      id: 'el-no-amable',
      title: 'El «no» amable: disco rayado y banco de niebla',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Decir que no en una frase corta y amable, repetirla con calma si insisten y responder a las críticas sin pelear ni ceder.',
      mechanism: 'Una negativa breve, sin justificarse de más, deja menos lugar a la discusión. Repetirla y dar la razón en lo que tenga de cierto la crítica baja la tensión sin cambiar la decisión.',
      evidenceLevel: 'preliminar',
      evidence: [SMITH_1975, SPEED_2018],
      howItWorks: [
        'Muchas personas dicen que no con muchas disculpas y explicaciones. Cada explicación es algo más para discutir. Un «no» amable es corto: agradece, dice que no y, si quieres, ofrece otra cosa.',
        'Manuel Smith describió dos técnicas para sostenerlo (Smith, 1975). El disco rayado es repetir la misma frase con calma, sin sumar argumentos. El banco de niebla es dar la razón en lo que tenga de cierto una crítica, sin cambiar lo que decidiste: «Puede ser que te parezca egoísta. Y no voy a ir».',
        'El entrenamiento asertivo tiene buena evidencia para la ansiedad social, la depresión y los conflictos con otros (Speed y colaboradores, 2018). Esta práctica suma estas dos técnicas a DEAR MAN, que te ayuda a armar el pedido completo.',
      ],
      tips: [
        'Una razón breve alcanza. No hace falta que la otra persona esté de acuerdo.',
        'El banco de niebla no es burla. Dilo con tono tranquilo, sin ironía.',
        'Si te cuesta en el momento, gana tiempo: «Déjame pensarlo y te contesto mañana».',
      ],
      obstacles: [
        { q: 'Siento culpa después de decir que no.', a: 'Es muy común, sobre todo si aprendiste que tu valor está en ayudar. La culpa no siempre indica que hiciste algo mal. A veces sólo indica que hiciste algo nuevo.' },
      ],
      cautions: SEGURIDAD,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Piensa en un pedido al que quieres decir que no.', durationSec: 30, kind: 'breath' },
        { title: 'Tu no', instruction: 'Escribe un no corto y amable. Por ejemplo: «Gracias por pensar en mí, pero esta vez no puedo».', durationSec: 50, kind: 'reflection' },
        { title: 'Menos excusas', instruction: 'Lee tu frase. Borra las disculpas de más y las explicaciones largas. Una razón breve alcanza.', durationSec: 40, kind: 'reflection' },
        { title: 'Disco rayado', instruction: 'Imagina que te insisten. Repite tu frase igual, con voz tranquila: «Te entiendo, y no puedo». No sumes argumentos.', durationSec: 50, kind: 'instruction' },
        { title: 'Banco de niebla', instruction: 'Imagina una crítica: «Siempre te haces rogar». Dale la razón en lo que tenga de cierto: «Puede ser que lo veas así». Y mantén tu no.', durationSec: 60, kind: 'instruction' },
        { title: 'Ensayo', instruction: 'Di las dos frases en voz alta, con los hombros sueltos. Repítelas hasta que suenen tuyas.', durationSec: 50, kind: 'instruction' },
        { title: 'La culpa', instruction: 'Si aparece culpa, nómbrala: «Siento culpa y aun así cuido lo que necesito». Pon una mano en el pecho.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'limites-con-la-familia-de-origen',
      title: 'Límites con la familia de origen',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Elegir un tema que se repite con tus padres o hermanos, decir tu límite en primera persona y decidir qué harás tú si no se respeta.',
      mechanism: 'Un límite que depende de lo que tú haces, y no de que el otro cambie, se puede sostener. Mantener el afecto mientras se pone el límite ayuda a no caer en el corte ni en la sumisión.',
      evidenceLevel: 'preliminar',
      evidence: [BOWEN_1978, SKOWRON_1998],
      howItWorks: [
        'Con la familia en la que creciste es fácil volver a viejos papeles: el que obedece, la que media, el que se enoja. Por eso un comentario sobre tu pareja, tu crianza o tu plata puede dolerte más que si lo dice otra persona.',
        'Murray Bowen llamó diferenciación a poder seguir en contacto con la familia sin perder tu propia posición (Bowen, 1978). En el otro extremo están ceder siempre o cortar el vínculo. Hay escalas para medir la diferenciación, y se asocia con menos ansiedad (Skowron y Friedlander, 1998).',
        'Un límite no es una orden al otro: es lo que harás tú. «No voy a hablar de mi peso en la mesa. Si sigue el tema, me voy a levantar». Esta práctica suma a «Estar en contacto sin perderme», que prepara un encuentro difícil.',
      ],
      tips: [
        'Empieza por un tema chico y concreto, no por toda la historia familiar.',
        'Habla de hoy, no de lo que pasó hace veinte años. Eso, si quieres, se trabaja en terapia.',
        'Es normal que al principio prueben si el límite va en serio. Sostenerlo con calma es parte del cambio.',
      ],
      obstacles: [
        { q: 'Me dicen «después de todo lo que hicimos por ti».', a: 'Puedes reconocerlo sin ceder: «Es verdad, y te lo agradezco. Igual no voy a hablar de este tema». Agradecer y poner un límite pueden ir juntos.' },
      ],
      cautions: SEGURIDAD + ' Si en tu familia hubo abusos, conviene trabajar estos límites con un profesional.',
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Piensa en tu familia de origen sin juzgar lo que aparezca.', durationSec: 30, kind: 'breath' },
        { title: 'El tema', instruction: '¿Qué te deja mal una y otra vez? Comentarios sobre tu pareja, tu crianza o tu plata, o visitas sin aviso. Elige uno.', durationSec: 50, kind: 'reflection' },
        { title: 'Tu límite', instruction: 'Escribe lo que necesitas en una frase con «yo». Por ejemplo: «Yo no voy a hablar de mi pareja en la mesa».', durationSec: 50, kind: 'reflection' },
        { title: 'Lo que harás', instruction: 'Escribe qué harás tú si se repite. Por ejemplo, cambiar de tema, irte antes o cortar la llamada con calma.', durationSec: 50, kind: 'reflection' },
        { title: 'Con cariño', instruction: 'Suma una frase de afecto, si es verdad para ti: «Te quiero y quiero seguir viniendo. Por eso te pido esto».', durationSec: 40, kind: 'reflection' },
        { title: 'La reacción', instruction: 'Anota cómo pueden reaccionar: enojo, quejas, culpa. Prepara una respuesta corta y amable para ese momento.', durationSec: 50, kind: 'reflection' },
        { title: 'Sostenerlo', instruction: 'Elige a quién contarle cómo te fue. Un límite nuevo suele ponerse a prueba varias veces.', durationSec: 30, kind: 'instruction' },
      ],
    },

    // ---------------------------------------------------------------- diagnóstico
    {
      id: 'registro-para-la-proxima-consulta',
      title: 'Un registro para la próxima consulta',
      family: 'attentional',
      skills: ['attention'],
      summary: 'Anotar unos minutos por día qué notaste, cuánto te afectó y qué ayudó, y llevar un resumen corto a tu profesional.',
      mechanism: 'La memoria resume y olvida, sobre todo bajo estrés. Unos datos simples, anotados cerca del momento, dan al profesional una imagen más fiel de cómo estuviste.',
      evidenceLevel: 'preliminar',
      evidence: [KOROTITSCH_1999, ELWYN_2012],
      howItWorks: [
        'En la consulta es común decir «estuve más o menos» y olvidar lo importante. Un registro corto ayuda a contar qué pasó, cuándo, cuánto y qué cambió en tu vida.',
        'El automonitoreo, es decir, anotar lo que te pasa cerca del momento, se usa desde hace décadas en psicología para evaluar y para acompañar tratamientos (Korotitsch y Nelson-Gray, 1999). Llevar datos propios también te ayuda a participar de las decisiones con tu equipo (Elwyn y colaboradores, 2012).',
        'El registro no sirve para diagnosticarte. Es información para compartir. Si tomas medicación, puedes anotar lo que notes, pero cualquier cambio se decide con tu médico.',
      ],
      tips: [
        'Hazlo siempre a la misma hora, por ejemplo antes de dormir. Dos minutos alcanzan.',
        'Anota ejemplos concretos: «no pude ir al trabajo el martes» dice más que «estuve mal».',
        'Incluye también lo que mejoró. Al equipo le sirve tanto como lo que empeoró.',
      ],
      obstacles: [
        { q: 'Anotar me hace pensar más en lo que me pasa.', a: 'Puede pasar. Anota una sola vez por día y cierra el cuaderno. Si te angustia mucho o te lleva a revisarte todo el tiempo, déjalo y coméntalo en la consulta.' },
      ],
      cautions: DX,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en cómo fue tu día, sin juzgarlo.', durationSec: 20, kind: 'breath' },
        { title: 'Lo que noté', instruction: 'Anota en pocas palabras lo que te pasó hoy. Por ejemplo, el ánimo, el miedo, el sueño o la energía.', durationSec: 40, kind: 'reflection' },
        { title: 'Cuánto', instruction: 'Del cero al diez, ¿cuánto te molestó? Anota también cuánto duró.', durationSec: 25, kind: 'reflection' },
        { title: 'Cuándo', instruction: '¿Dónde estabas y qué pasaba antes? Con los días puede aparecer un patrón.', durationSec: 30, kind: 'reflection' },
        { title: 'Qué cambió', instruction: '¿Te impidió hacer algo? Trabajar, dormir, comer o ver a alguien. Anota un ejemplo concreto.', durationSec: 30, kind: 'reflection' },
        { title: 'Lo que ayudó', instruction: '¿Algo te ayudó, aunque sea un poco? Anótalo también.', durationSec: 20, kind: 'reflection' },
        { title: 'Para la consulta', instruction: 'Una vez por semana, resume lo más importante en tres líneas. Marca lo que quieras preguntar.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'segunda-opinion-sin-culpa',
      title: 'Pedir una segunda opinión sin culpa',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Aclarar por qué quieres otra opinión, pedir tu historia clínica, avisar si quieres y llevar las mismas preguntas a las dos consultas.',
      mechanism: 'Ver la segunda opinión como un derecho, y no como una traición, baja la culpa. Preparar la consulta con las mismas preguntas permite comparar y decidir con más calma.',
      evidenceLevel: 'preliminar',
      evidence: [LEY_26529, PAYNE_2014, ELWYN_2012],
      howItWorks: [
        'Muchas personas no piden otra opinión por miedo a ofender o a parecer desconfiadas. Pero en salud es una práctica común, y en la Argentina es un derecho. La Ley 26.529 reconoce el derecho a recibir tu información de salud por escrito para consultar a otro profesional, y a tener tu historia clínica.',
        'Una revisión de estudios encontró que las segundas opiniones pedidas por pacientes a veces confirman el diagnóstico y otras veces lo cambian o cambian el tratamiento (Payne y colaboradores, 2014). En los dos casos, suelen dar más tranquilidad para decidir.',
        'Un buen profesional entiende que quieras otra mirada. Decidir juntos incluye que tengas la información que necesitas (Elwyn y colaboradores, 2012).',
      ],
      tips: [
        'Busca a alguien que no trabaje en el mismo equipo, para que la mirada sea más independiente.',
        'Lleva los estudios, los informes y tu registro de síntomas, si lo tienes.',
        'Si las dos opiniones no coinciden, pregunta a cada profesional qué ve y por qué.',
      ],
      obstacles: [
        { q: 'Siento que traiciono a quien me atiende.', a: 'Pedir otra opinión no es acusar a nadie. Es cuidar tu salud. Puedes decirlo así: «Confío en lo que me dijiste y quiero decidir con más calma».' },
      ],
      cautions: DX + ' Mientras buscas otra opinión, no dejes ni cambies el tratamiento por tu cuenta. Si algo te preocupa, háblalo con quien te atiende.',
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Piensa en la decisión de salud que tienes delante.', durationSec: 30, kind: 'breath' },
        { title: 'Por qué', instruction: '¿Por qué quieres otra opinión? Dudas sobre el diagnóstico, un tratamiento que no ayuda o sientes que no te escuchan. Anota tu motivo.', durationSec: 50, kind: 'reflection' },
        { title: 'Lo que frena', instruction: '¿Qué te frena? Miedo a ofender o a que piensen que desconfías. Recuerda: pedir otra opinión es un derecho.', durationSec: 45, kind: 'reflection' },
        { title: 'Los papeles', instruction: 'Anota lo que vas a pedir: una copia de tu historia clínica, los informes y los estudios.', durationSec: 35, kind: 'instruction' },
        { title: 'Cómo decirlo', instruction: 'Si quieres, avisa. Por ejemplo: «Quiero escuchar otra opinión para decidir con más calma». No hace falta pedir permiso.', durationSec: 45, kind: 'reflection' },
        { title: 'Las preguntas', instruction: 'Escribe dos o tres preguntas. Lleva las mismas a las dos consultas, así puedes comparar.', durationSec: 45, kind: 'reflection' },
        { title: 'Mientras tanto', instruction: 'Sigue con tu tratamiento mientras esperas. Escribe a quién llamar si te sientes peor.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'contar-lo-justo',
      title: 'Contar lo justo: qué, a quién y cuánto',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Decidir qué contar de tu diagnóstico en el trabajo, a amistades y a conocidos, y preparar una respuesta corta para los comentarios que estigmatizan.',
      mechanism: 'Elegir en cada lugar entre no contar, contar algo o contar todo da control sobre la información. Tener una respuesta lista frente al estigma baja la vergüenza y evita quedarte sin palabras.',
      evidenceLevel: 'preliminar',
      evidence: [CORRIGAN_RAO_2012, CHAUDOIR_2010, CORRIGAN_2002, LEY_26657],
      howItWorks: [
        'Contar o no contar no es todo o nada. Puedes contar mucho a pocas personas, algo a otras y nada a la mayoría. A esto se lo llama divulgación selectiva. Patrick Corrigan propone pensarla como una decisión propia, que tiene ventajas y riesgos según el lugar (Corrigan y Rao, 2012).',
        'Stephenie Chaudoir y Jeffrey Fisher estudiaron qué pasa al contar algo que puede traer estigma. Influyen para qué lo cuentas, a quién y cómo reacciona la otra persona (Chaudoir y Fisher, 2010). Por eso conviene empezar por alguien de confianza.',
        'Muchas veces alcanza con contar la necesidad, sin el nombre del diagnóstico: «Tengo un tema de salud y los martes salgo antes». En la Argentina, la Ley 26.657 protege del trato discriminatorio por un diagnóstico de salud mental.',
      ],
      tips: [
        'Tu diagnóstico es información tuya. No le debes explicaciones a nadie.',
        'Contar en el trabajo puede tener efectos en tus derechos. Si dudas, consulta antes con alguien de confianza o con tu sindicato.',
        'Frente a un comentario que duele, no tienes que educar a nadie. Una frase corta alcanza.',
      ],
      obstacles: [
        { q: 'Si no lo cuento, siento que miento.', a: 'Guardar algo privado no es mentir. Es elegir. Puedes decir «Prefiero no hablar de eso» y cuidar tu intimidad.' },
      ],
      cautions: DX + ' Si en el trabajo te discriminan por tu salud, puedes consultar en el sindicato o en un organismo de derechos.',
      steps: [
        { title: 'Llegar', instruction: 'Pon una mano en el pecho y respira despacio. Recuerda que aquí decides tú.', durationSec: 30, kind: 'breath' },
        { title: 'Los círculos', instruction: 'Dibuja tres círculos. En el centro, quienes te cuidan. En el medio, amistades y compañeros. Afuera, conocidos.', durationSec: 50, kind: 'reflection' },
        { title: 'Para qué', instruction: 'Elige una persona o un lugar, como el trabajo. ¿Para qué contarías? ¿Qué ganarías y qué arriesgarías?', durationSec: 50, kind: 'reflection' },
        { title: 'Cuánto', instruction: 'Elige un nivel: no contar, contar algo o contar todo. Contar algo puede ser: «Tengo un tema de salud y necesito un día libre».', durationSec: 50, kind: 'reflection' },
        { title: 'El comentario', instruction: 'Piensa en un comentario que duele, como «eso es falta de voluntad». Escribe una respuesta corta y tranquila.', durationSec: 50, kind: 'reflection' },
        { title: 'Tu derecho', instruction: 'Escribe una frase para cuando no quieras contar. Por ejemplo: «Prefiero no hablar de eso».', durationSec: 30, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Lo que decidas hoy puede cambiar más adelante.', durationSec: 20, kind: 'breath' },
      ],
    },
  ],

  meta: {
    'limites-en-el-celular': { level: 'iniciacion', approaches: ['tcc'], module: 'relaciones' },
    'el-no-amable': { level: 'intermedio', approaches: ['tcc', 'dbt'], module: 'relaciones', prerequisites: ['dear-man'] },
    'limites-con-la-familia-de-origen': { level: 'intermedio', approaches: ['sistemica', 'tcc'], module: 'relaciones', prerequisites: ['el-no-amable'] },
    'registro-para-la-proxima-consulta': { level: 'iniciacion', approaches: ['tcc'], module: 'salud' },
    'segunda-opinion-sin-culpa': { level: 'intermedio', approaches: ['motivacional', 'tcc'], module: 'salud', prerequisites: ['preguntas-para-mi-equipo'] },
    'contar-lo-justo': { level: 'intermedio', approaches: ['interpersonal', 'cft'], module: 'salud', prerequisites: ['mi-diagnostico-no-me-define'] },
  },

  articles: [],
  programs: [],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-limites-en-el-celular',
      title: 'No tienes que contestar ya',
      subtitle: 'Horarios, avisos y descanso del celular.',
      slides: [
        { heading: 'Siempre a mano', text: 'El celular hace que todos esperen respuesta rápida. El jefe, la familia, el grupo de amigos.' },
        { heading: 'No descansas', text: 'Si siempre estás disponible, la cabeza no se apaga. Para descansar hace falta dejar de pensar en las tareas.' },
        { heading: 'Un horario', text: 'Elige cuándo respondes y cuándo no. Avísalo una vez, con una frase corta.' },
        { heading: 'Lo urgente', text: 'Deja una vía para lo urgente, como una llamada. Así el límite no se vive como abandono.' },
        { heading: 'Si es control', text: 'Si alguien te exige claves, ubicación o respuestas ya, y se enoja, eso puede ser violencia. Llama a la Línea 144.' },
      ],
      related: { practices: ['limites-en-el-celular'] },
      references: [SONNENTAG_2012, DERKS_2014],
    },
    {
      id: 'pildora-el-no-amable',
      title: 'Un no corto y amable',
      subtitle: 'Disco rayado y banco de niebla.',
      slides: [
        { heading: 'Menos excusas', text: 'Cada explicación es algo más para discutir. Un no amable es corto: gracias, no puedo.' },
        { heading: 'Disco rayado', text: 'Si te insisten, repite la misma frase con calma. No sumes razones nuevas.' },
        { heading: 'Banco de niebla', text: 'Si te critican, da la razón en lo que sea cierto. «Puede ser que lo veas así.» Y mantén tu no.' },
        { heading: 'Ganar tiempo', text: 'Si te cuesta en el momento, di: «Déjame pensarlo y te contesto mañana».' },
        { heading: 'La culpa', text: 'Sentir culpa no siempre quiere decir que hiciste algo mal. A veces sólo hiciste algo nuevo.' },
      ],
      related: { practices: ['el-no-amable'] },
      references: [SMITH_1975, SPEED_2018],
    },
    {
      id: 'pildora-limites-familia-de-origen',
      title: 'Límites con tus padres',
      subtitle: 'Seguir en contacto sin volver a viejos papeles.',
      slides: [
        { heading: 'Viejos papeles', text: 'Con la familia en la que creciste es fácil volver a ser el que obedece o la que media.' },
        { heading: 'Ni ceder ni cortar', text: 'Se puede seguir en contacto y tener tu propia postura. Eso se llama diferenciación.' },
        { heading: 'Lo que haces tú', text: 'Un límite no es una orden. Es lo que harás tú: «Si sigue el tema, me voy a levantar».' },
        { heading: 'Con cariño', text: 'Puedes poner un límite y querer a tu familia. Las dos cosas van juntas.' },
        { heading: 'Lo van a probar', text: 'Al principio es normal que prueben si el límite va en serio. Sostenlo con calma.' },
      ],
      related: { practices: ['limites-con-la-familia-de-origen'] },
      references: [BOWEN_1978, SKOWRON_1998],
    },
    {
      id: 'pildora-registro-para-la-consulta',
      title: 'Lo que la memoria olvida',
      subtitle: 'Un registro corto para la próxima consulta.',
      slides: [
        { heading: '«Más o menos»', text: 'En la consulta es fácil decir «estuve más o menos» y olvidar lo importante.' },
        { heading: 'Dos minutos', text: 'Anota cada día qué notaste, cuánto te molestó y qué te impidió hacer.' },
        { heading: 'Lo bueno también', text: 'Anota lo que ayudó o mejoró. Le sirve al equipo tanto como lo que empeoró.' },
        { heading: 'No es un test', text: 'El registro no sirve para diagnosticarte. Es información para compartir con tu profesional.' },
        { heading: 'Si es urgente', text: 'Si piensas en morir o en hacerte daño, no esperes a la consulta. Llama al 135 o al 911.' },
      ],
      related: { practices: ['registro-para-la-proxima-consulta'] },
      references: [KOROTITSCH_1999, ELWYN_2012],
    },
    {
      id: 'pildora-segunda-opinion',
      title: 'Otra opinión es un derecho',
      subtitle: 'Pedir una segunda mirada sin culpa.',
      slides: [
        { heading: 'No es traición', text: 'Pedir otra opinión no es acusar a nadie. Es cuidar tu salud y decidir con calma.' },
        { heading: 'Es tu derecho', text: 'En la Argentina, la ley te da derecho a pedir tu información por escrito y tu historia clínica.' },
        { heading: 'Las mismas preguntas', text: 'Lleva las mismas preguntas a las dos consultas. Así puedes comparar.' },
        { heading: 'Si no coinciden', text: 'Pregunta a cada profesional qué ve y por qué. Entender las razones ayuda a decidir.' },
        { heading: 'Mientras tanto', text: 'No dejes ni cambies tu tratamiento por tu cuenta mientras esperas. Habla antes con quien te atiende.' },
      ],
      related: { practices: ['segunda-opinion-sin-culpa'] },
      references: [LEY_26529, PAYNE_2014],
    },
    {
      id: 'pildora-contar-lo-justo',
      title: 'Contar lo justo',
      subtitle: 'Qué contar de tu diagnóstico, a quién y cuánto.',
      slides: [
        { heading: 'No es todo o nada', text: 'Puedes contar mucho a pocas personas, algo a otras y nada a la mayoría.' },
        { heading: 'Para qué', text: 'Antes de contar, piensa para qué lo harías. Y qué ganarías o arriesgarías.' },
        { heading: 'Sólo la necesidad', text: 'A veces alcanza con decir lo que necesitas: «Tengo un tema de salud y los martes salgo antes».' },
        { heading: 'Un comentario que duele', text: 'No tienes que educar a nadie. Una frase corta alcanza: «Es un tema de salud, y lo estoy cuidando».' },
        { heading: 'Es tuyo', text: 'Tu diagnóstico es información tuya. Puedes decir: «Prefiero no hablar de eso».' },
      ],
      related: { practices: ['contar-lo-justo'] },
      references: [CORRIGAN_RAO_2012, CHAUDOIR_2010],
    },
  ],
};
