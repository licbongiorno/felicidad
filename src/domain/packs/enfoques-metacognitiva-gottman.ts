import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Enfoques: terapia metacognitiva y método Gottman».
 * Amplía dos enfoques que tenían pocas prácticas:
 *  1. Terapia metacognitiva (Adrian Wells): revisar las creencias positivas sobre
 *     preocuparse, poner a prueba las negativas («me voy a enloquecer») con experimentos
 *     seguros, el reenfoque de la atención situacional (SAR) y dejar de vigilar amenazas.
 *  2. Método Gottman (pareja): la charla para bajar el estrés del día, el jinete propio y
 *     su antídoto (con la pausa ante la inundación), cultivar admiración y cariño, y los
 *     sueños que hay dentro de un conflicto que no se resuelve.
 *
 * No se repiten técnicas que ya existen: aplazar la preocupación, el mindfulness
 * desapegado, el entrenamiento atencional, la dieta de noticias, la atención hacia afuera
 * de la ansiedad social y el esperar antes de chequear la salud ya están en otros paquetes.
 * En pareja ya están los mapas de amor, las ofertas de conexión, el inicio suave, la
 * reparación, la plata y el menú de cercanía.
 *
 * Las prácticas son versiones breves y autoguiadas: declaran evidencia preliminar. Todas
 * las de pareja advierten que, si hay violencia, no se trata de comunicarse mejor.
 */

// ------------------------------------------------------------ referencias: metacognitiva
const WELLS_1995: Reference = {
  citation: 'Wells, A. (1995). Meta-cognition and worry: A cognitive model of generalized anxiety disorder. Behavioural and Cognitive Psychotherapy, 23(3), 301–320.',
  doi: '10.1017/S1352465800015897',
};
const WELLS_2009: Reference = { citation: 'Wells, A. (2009). Metacognitive therapy for anxiety and depression. Guilford Press.' };
const CARTWRIGHT_HATTON_1997: Reference = {
  citation:
    'Cartwright-Hatton, S., & Wells, A. (1997). Beliefs about worry and intrusions: The Meta-Cognitions Questionnaire and its correlates. Journal of Anxiety Disorders, 11(3), 279–296.',
  doi: '10.1016/S0887-6185(97)00011-X',
};
const WELLS_CARTWRIGHT_2004: Reference = {
  citation:
    'Wells, A., & Cartwright-Hatton, S. (2004). A short form of the metacognitions questionnaire: Properties of the MCQ-30. Behaviour Research and Therapy, 42(4), 385–396.',
  doi: '10.1016/S0005-7967(03)00147-5',
};
const WELLS_PAPAGEORGIOU_1998: Reference = {
  citation:
    'Wells, A., & Papageorgiou, C. (1998). Social phobia: Effects of external attention on anxiety, negative beliefs, and perspective taking. Behavior Therapy, 29(3), 357–370.',
  doi: '10.1016/S0005-7894(98)80037-3',
};
const NORMANN_2018: Reference = {
  citation: 'Normann, N., & Morina, N. (2018). The efficacy of metacognitive therapy: A systematic review and meta-analysis. Frontiers in Psychology, 9, 2211.',
  doi: '10.3389/fpsyg.2018.02211',
};
const SALKOVSKIS_1991: Reference = {
  citation:
    'Salkovskis, P. M. (1991). The importance of behaviour in the maintenance of anxiety and panic: A cognitive account. Behavioural Psychotherapy, 19(1), 6–19.',
  note: 'Describe cómo las conductas de seguridad, entre ellas vigilar señales de peligro, mantienen la ansiedad.',
};

// ------------------------------------------------------------ referencias: Gottman
const GOTTMAN_1999: Reference = { citation: 'Gottman, J. M., & Silver, N. (1999). The seven principles for making marriage work. Crown.' };
const GOTTMAN_CLINIC_1999: Reference = { citation: 'Gottman, J. M. (1999). The marriage clinic: A scientifically based marital therapy. Norton.' };
const GOTTMAN_1994: Reference = {
  citation: 'Gottman, J. M. (1994). What predicts divorce? The relationship between marital processes and marital outcomes. Lawrence Erlbaum.',
};
const GOTTMAN_LEVENSON_2000: Reference = {
  citation:
    'Gottman, J. M., & Levenson, R. W. (2000). The timing of divorce: Predicting when a couple will divorce over a 14-year period. Journal of Marriage and Family, 62(3), 737–745.',
  doi: '10.1111/j.1741-3737.2000.00737.x',
};
const BODENMANN_2005: Reference = {
  citation:
    'Bodenmann, G. (2005). Dyadic coping and its significance for marital functioning. En T. A. Revenson, K. Kayser y G. Bodenmann (Eds.), Couples coping with stress: Emerging perspectives on dyadic coping (pp. 33–49). American Psychological Association.',
};
const ALGOE_2010: Reference = {
  citation:
    'Algoe, S. B., Gable, S. L., & Maisel, N. C. (2010). It’s the little things: Everyday gratitude as a booster shot for romantic relationships. Personal Relationships, 17(2), 217–233.',
  doi: '10.1111/j.1475-6811.2010.01273.x',
};

// ------------------------------------------------------------ avisos
const PREOCUPACION_CAUTION =
  'Si la preocupación no te deja dormir, trabajar o estar con otros, consulta a un profesional. La terapia metacognitiva y la terapia cognitivo-conductual tienen buen respaldo. Puedes llamar a la Línea Nacional de Salud Mental, 0800-999-0091, o usar el botón Ayuda de la app.';

const EXPERIMENTO_CAUTION =
  'Si tienes ataques de pánico frecuentes, o a veces te cuesta distinguir lo que imaginas de lo que pasa de verdad, haz estos experimentos con un profesional. Si en algún momento te sientes en peligro, frena y usa el botón Ayuda de la app. Puedes llamar a la Línea Nacional de Salud Mental, 0800-999-0091.';

const PELIGRO_REAL_CAUTION =
  'Esta práctica es para alarmas que suenan sin peligro real. Si hay un riesgo de verdad, protégete primero y pide ayuda; ante una emergencia, llama al 911. Si la alerta viene de un trauma y te desborda, practica con un profesional.';

const VIOLENCIA =
  'Si en tu pareja hay violencia, miedo, amenazas o control, esto no es un problema de comunicación y no se arregla con terapia de pareja. Lo primero es tu seguridad. Llama a la Línea 144, gratuita y las 24 horas, o al 911 si estás en peligro. También puedes usar el botón Ayuda de la app.';

export const ENFOQUES_META_GOTTMAN_PACK: ContentPack = {
  id: 'enfoques-metacognitiva-gottman',

  // ================================================================== prácticas
  practices: [
    // ------------------------------------------------------------ terapia metacognitiva
    {
      id: 'preocuparme-me-sirve',
      title: '¿Preocuparme me sirve?',
      family: 'deconstructive',
      skills: ['attention', 'resilience'],
      summary: 'Revisar las ideas a favor de preocuparse, como «preocuparme me prepara», y comprobar si de verdad te ayudan.',
      mechanism: 'Si crees que preocuparte te protege, vas a seguir haciéndolo. Ver qué te da y qué te quita esa creencia afloja el bucle.',
      evidenceLevel: 'moderada',
      evidence: [WELLS_1995, CARTWRIGHT_HATTON_1997, WELLS_2009, NORMANN_2018],
      cautions: PREOCUPACION_CAUTION,
      howItWorks: [
        'Adrian Wells observó que muchas personas que se preocupan mucho tienen creencias a favor de la preocupación. Por ejemplo: «si me preocupo, estoy preparada» o «preocuparme muestra que me importa» (Wells, 1995).',
        'Estas creencias se miden con un cuestionario de metacogniciones y se asocian con preocuparse más (Cartwright-Hatton y Wells, 1997). Mientras sigan firmes, dejar de preocuparse parece peligroso.',
        'Esta práctica no discute si lo que temes puede pasar. Mira otra cosa: si darle vueltas te sirve de verdad. Muchas veces descubres que lo útil fue actuar, no preocuparte.',
      ],
      tips: [
        'Separa preocuparte de planificar. Planificar termina en un paso concreto. Preocuparte da vueltas sin terminar.',
        'Busca ejemplos reales de tu vida, no ideas en general.',
        'No hace falta llegar a cero creencia. Basta con que dudes un poco de ella.',
      ],
      obstacles: [
        { q: 'Pero a veces preocuparme sí me ayudó.', a: 'Mira con cuidado qué te ayudó. Quizá fue hacer una lista o llamar a alguien. Eso se puede hacer sin horas de vueltas.' },
        { q: 'Si dejo de preocuparme, voy a ser una persona descuidada.', a: 'Cuidar algo y preocuparse no son lo mismo. Puedes ocuparte del tema en un rato fijo y con un plan.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Siéntate con calma y ten a mano papel o el celular. Respira despacio dos veces.', durationSec: 30, kind: 'breath' },
        { title: 'La creencia', instruction: 'Completa la frase: «Preocuparme me sirve porque…». Anota lo primero que aparezca.', durationSec: 60, kind: 'reflection' },
        { title: 'Cuánto la crees', instruction: 'Ponle un número de cero a cien a esa idea. ¿Cuánto la crees hoy?', durationSec: 30, kind: 'reflection' },
        { title: 'Un ejemplo', instruction: 'Recuerda una vez que te preocupaste mucho por algo. ¿Qué pasó al final?', durationSec: 60, kind: 'reflection' },
        { title: 'Qué ayudó', instruction: 'Mira qué te ayudó de verdad en ese caso. ¿Fueron las vueltas o fue algo que hiciste?', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que costó', instruction: 'Anota qué te costó preocuparte. Sueño, ganas, tiempo con otros, calma.', durationSec: 60, kind: 'reflection' },
        { title: 'Otra forma', instruction: 'Escribe cómo podrías ocuparte del tema sin darle vueltas. Por ejemplo, un plan de diez minutos y luego soltar.', durationSec: 60, kind: 'reflection' },
        { title: 'Volver a medir', instruction: 'Vuelve a medir la creencia de cero a cien. Si bajó un poco, ya es un paso.', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'poner-a-prueba-el-descontrol',
      title: 'Poner a prueba «me voy a enloquecer»',
      family: 'deconstructive',
      skills: ['resilience', 'attention'],
      summary: 'Probar con experimentos seguros la idea de que la preocupación es incontrolable o peligrosa, por ejemplo intentar preocuparte más a propósito.',
      mechanism: 'Temer a la propia preocupación hace que la vigiles y la pelees, y eso la agranda. Un experimento muestra que no te desborda ni te daña.',
      evidenceLevel: 'moderada',
      evidence: [WELLS_1995, WELLS_2009, WELLS_CARTWRIGHT_2004, NORMANN_2018],
      cautions: EXPERIMENTO_CAUTION,
      howItWorks: [
        'Wells distingue dos tipos de preocupación. Una es sobre la vida: la plata, la salud, los chicos. La otra es preocuparse por preocuparse: «si sigo así me voy a enloquecer» o «no puedo parar» (Wells, 1995).',
        'Para Wells, estas creencias negativas son centrales en la ansiedad generalizada. En la terapia se ponen a prueba con experimentos. Uno de ellos es intentar perder el control de la preocupación a propósito, en un rato fijo (Wells, 2009).',
        'Lo que suele pasar sorprende. La preocupación no se dispara sin fin, y no pasa nada grave. Esa experiencia enseña más que cualquier argumento.',
      ],
      tips: [
        'Haz el experimento en tu rato de preocupación, no antes de dormir.',
        'Empieza con una preocupación de intensidad media, no con la peor.',
        'Anota tu predicción antes. Así puedes compararla con lo que pasó.',
      ],
      obstacles: [
        { q: 'Me da miedo intentarlo.', a: 'Es esperable. Prueba solo dos minutos y con una preocupación leve. Puedes frenar cuando quieras.' },
        { q: 'Me quedé nerviosa un rato después.', a: 'Puede pasar. Fíjate si los nervios bajaron solos con el tiempo. Eso también es un dato: no te desbordaron.' },
      ],
      steps: [
        { title: 'La creencia', instruction: 'Escribe tu temor sobre la preocupación. Por ejemplo: «Si me preocupo mucho, voy a perder el control».', durationSec: 45, kind: 'reflection' },
        { title: 'La predicción', instruction: 'Anota qué crees que va a pasar si te preocupas a propósito cinco minutos. Ponle un número de cero a cien.', durationSec: 45, kind: 'reflection' },
        { title: 'Elegir el tema', instruction: 'Elige una preocupación de intensidad media. No la peor. Ten un reloj a la vista.', durationSec: 30, kind: 'instruction' },
        { title: 'Más vueltas', instruction: 'Ahora intenta preocuparte más que nunca durante unos minutos. Trata de perder el control a propósito.', durationSec: 120, kind: 'instruction' },
        { title: 'Frenar', instruction: 'Para. Mira a tu alrededor y nombra tres cosas que ves. Nota cómo está tu cuerpo.', durationSec: 30, kind: 'instruction' },
        { title: 'Comparar', instruction: '¿Pasó lo que temías? ¿Perdiste el control? Compara con tu predicción.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que aprendí', instruction: 'Escribe una frase con lo que viste. Por ejemplo: «Me puse nerviosa, pero no me desbordé».', durationSec: 45, kind: 'reflection' },
        { title: 'Volver a medir', instruction: 'Vuelve a medir tu creencia de cero a cien. Repite el experimento otros días para ver si cambia.', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'reenfoque-de-la-atencion',
      title: 'Reenfocar la atención en el momento',
      family: 'attentional',
      skills: ['attention'],
      summary: 'Cuando algo te pone en alerta sin peligro real, buscar a propósito lo que te muestra que ahora estás a salvo.',
      mechanism: 'La alarma estrecha la atención hacia las amenazas. Mirar lo que dice lo contrario te da datos nuevos y le enseña a la mente que puede bajar la guardia.',
      evidenceLevel: 'preliminar',
      evidence: [WELLS_2009, WELLS_PAPAGEORGIOU_1998],
      micro: true,
      cautions: PELIGRO_REAL_CAUTION,
      howItWorks: [
        'Wells propone una técnica llamada reenfoque de la atención situacional. Se usa en el momento en que la ansiedad aparece. Consiste en mirar a propósito lo que tienes delante, en especial lo que muestra que no hay peligro (Wells, 2009).',
        'En un experimento con personas con ansiedad social, llevar la atención hacia afuera bajó la ansiedad y las creencias negativas (Wells y Papageorgiou, 1998). La idea se usa también en otros miedos.',
        'No es distraerte ni pensar en otra cosa. Es mirar la situación real con más detalle, para que la mente actualice su lectura.',
      ],
      tips: [
        'Sirve en el colectivo, en un lugar con mucha gente o en una calle que te asusta sin motivo.',
        'Busca señales concretas: la puerta abierta, gente tranquila, la luz del día.',
        'Si el pensamiento sigue ahí, déjalo estar y sigue mirando.',
      ],
      obstacles: [
        { q: 'No encuentro nada que diga que estoy a salvo.', a: 'Empieza por lo simple. Que sigues respirando, que el piso está firme, que la gente sigue con lo suyo.' },
      ],
      steps: [
        { title: 'Notar la alarma', instruction: 'Nota que se encendió la alerta. Dite: «Mi mente está buscando peligro».', durationSec: 20, kind: 'instruction' },
        { title: 'Mirar afuera', instruction: 'Levanta la vista. Nombra tres cosas que ves, con detalles.', durationSec: 30, kind: 'instruction' },
        { title: 'Señales de calma', instruction: 'Busca dos señales de que ahora estás a salvo. Gente tranquila, una salida cerca, la luz.', durationSec: 40, kind: 'instruction' },
        { title: 'Lo que oyes', instruction: 'Escucha los sonidos del lugar. ¿Alguno te dice que todo sigue su curso?', durationSec: 30, kind: 'instruction' },
        { title: 'Actualizar', instruction: 'Dite qué ves de verdad: «Estoy en el colectivo, la gente viaja tranquila».', durationSec: 25, kind: 'reflection' },
      ],
    },
    {
      id: 'soltar-la-vigilancia',
      title: 'Dejar de vigilar amenazas',
      family: 'attentional',
      skills: ['attention', 'resilience'],
      summary: 'Descubrir qué señales de peligro vigilas sin darte cuenta, como el cuerpo, las caras o el celular, y probar un día de vigilancia baja.',
      mechanism: 'Quien busca amenazas las encuentra, y eso confirma que hay que seguir alerta. Bajar la vigilancia corta ese círculo y deja ver que no hacía falta.',
      evidenceLevel: 'preliminar',
      evidence: [WELLS_2009, SALKOVSKIS_1991, NORMANN_2018],
      cautions: PREOCUPACION_CAUTION,
      howItWorks: [
        'Wells describe un patrón que mantiene la ansiedad. Incluye preocuparse, rumiar y vigilar amenazas. Vigilar parece prudente, pero deja la mente en alerta todo el día (Wells, 2009).',
        'Se vigila de muchas formas. Revisar el cuerpo en busca de síntomas, mirar las caras para ver si alguien se enojó, escuchar ruidos de noche o mirar el celular a cada rato.',
        'La vigilancia es una conducta de seguridad. Da un alivio corto, pero impide aprender que el peligro no llegaba (Salkovskis, 1991). Esta práctica la hace visible y propone un experimento.',
      ],
      tips: [
        'No intentes dejar todas las vigilancias juntas. Elige una.',
        'Si la vigilancia es sobre tu salud, mira también la práctica «Esperar antes de chequear».',
        'Compara los días con y sin vigilancia. Los datos ayudan más que las promesas.',
      ],
      obstacles: [
        { q: 'Si no vigilo, me va a pasar algo y no me voy a dar cuenta.', a: 'Esa es la creencia que se pone a prueba. Las señales importantes suelen notarse sin buscarlas. Mira qué pasa en tu experimento.' },
        { q: 'Lo hago sin darme cuenta.', a: 'Es lo más común. Por eso el primer paso es solo notar y contar. Darte cuenta ya cambia algo.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Siéntate con calma. Piensa en un tema que te preocupa seguido.', durationSec: 30, kind: 'breath' },
        { title: 'Qué vigilo', instruction: 'Anota qué miras para detectar peligro en ese tema. Tu cuerpo, las caras, los ruidos, el celular o las noticias.', durationSec: 75, kind: 'reflection' },
        { title: 'Cuánto', instruction: 'Calcula cuántas veces por día lo haces. No hace falta que sea exacto.', durationSec: 40, kind: 'reflection' },
        { title: 'Qué me da', instruction: 'Anota qué te da vigilar. ¿Calma? ¿Por cuánto tiempo? ¿Después vuelves a mirar?', durationSec: 60, kind: 'reflection' },
        { title: 'El experimento', instruction: 'Elige una vigilancia. Mañana, cada vez que notes las ganas de vigilar, nómbralas y vuelve a lo que hacías.', durationSec: 60, kind: 'instruction' },
        { title: 'Medir', instruction: 'Al final del día, anota tu ansiedad de cero a diez. Compárala con un día común.', durationSec: 40, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Dite: «Puedo prestar atención sin vivir en alerta».', durationSec: 25, kind: 'breath' },
      ],
    },

    // ------------------------------------------------------------ método Gottman
    {
      id: 'charla-del-estres-del-dia',
      title: 'La charla para bajar el estrés del día',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Un rato diario en pareja para contar el estrés de afuera, del trabajo o la familia, y sentir que el otro está de tu lado.',
      mechanism: 'El estrés de afuera, si no se habla, se cuela en la pareja. Escucharse sin dar consejos y ponerse del lado del otro lo baja y une.',
      evidenceLevel: 'preliminar',
      evidence: [GOTTMAN_1999, BODENMANN_2005],
      cautions: VIOLENCIA,
      howItWorks: [
        'Gottman propone una charla diaria de unos veinte minutos para hablar del estrés que no viene de la pareja. El jefe, un trámite, la familia, los chicos (Gottman y Silver, 1999). No es para hablar de problemas entre ustedes.',
        'La clave es escuchar sin resolver. Primero se entiende, después se ayuda, y solo si el otro lo pide. Ponerse de su lado vale más que tener razón.',
        'Guy Bodenmann estudió cómo las parejas enfrentan juntas el estrés. Encontró que hacerlo en equipo se asocia con parejas más satisfechas (Bodenmann, 2005).',
      ],
      tips: [
        'Elijan un horario fijo, por ejemplo después de cenar.',
        'Cada uno tiene su turno. Mientras uno habla, el otro escucha.',
        'Frases que ayudan: «Qué injusto», «Te entiendo», «Estoy de tu lado».',
        'Si el tema es sobre ustedes, déjenlo para otro momento.',
      ],
      obstacles: [
        { q: 'No puedo evitar dar consejos.', a: 'Pregunta antes: «¿Quieres que te escuche o que pensemos ideas?». Muchas veces la respuesta es escuchar.' },
        { q: 'No sé qué decir cuando me cuenta.', a: 'No hace falta decir mucho. Mirar, asentir y decir «qué día» ya acompaña.' },
      ],
      steps: [
        { title: 'Acordar', instruction: 'Elijan veinte minutos sin pantallas. Acuerden que hoy se habla solo del estrés de afuera.', durationSec: 40, kind: 'instruction' },
        { title: 'Primer turno', instruction: 'Una persona cuenta qué le pesó hoy. La otra escucha, mira y no interrumpe.', durationSec: 180, kind: 'instruction' },
        { title: 'Entender primero', instruction: 'Quien escucha hace preguntas para entender. Por ejemplo: «¿Qué fue lo peor?».', durationSec: 90, kind: 'instruction' },
        { title: 'Estar de su lado', instruction: 'Muestra que estás con tu pareja. Di algo como «Qué injusto» o «Te entiendo». Evita defender al otro.', durationSec: 60, kind: 'instruction' },
        { title: 'Ayuda si la pide', instruction: 'Pregunta: «¿Quieres ideas o solo que te escuche?». Respeta la respuesta.', durationSec: 45, kind: 'instruction' },
        { title: 'Cambiar de turno', instruction: 'Ahora habla la otra persona. Repitan los mismos pasos.', durationSec: 180, kind: 'instruction' },
        { title: 'Cerrar', instruction: 'Terminen con un gesto de cariño. Un abrazo, un mate o un «gracias por escucharme».', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'mi-jinete-y-su-antidoto',
      title: 'Mi jinete y su antídoto',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Revisar una discusión reciente para ver cuál de los cuatro jinetes usas tú, ensayar su antídoto y armar tu pausa para cuando te desbordas.',
      mechanism: 'Cada persona tiene un jinete que le sale más. Verlo en tu propia conducta, sin mirar al otro, te deja cambiar lo único que depende de ti.',
      evidenceLevel: 'preliminar',
      evidence: [GOTTMAN_1994, GOTTMAN_LEVENSON_2000, GOTTMAN_CLINIC_1999],
      cautions: VIOLENCIA,
      howItWorks: [
        'Gottman llamó cuatro jinetes a la crítica, el desprecio, la actitud defensiva y el muro, que es cerrarse y no responder. Su presencia en las discusiones predecía la ruptura años después (Gottman, 1994; Gottman y Levenson, 2000).',
        'Es fácil ver los jinetes del otro. Esta práctica mira solo los tuyos. El inicio suave ya trabaja la crítica. Aquí el foco son los otros antídotos: aprecio ante el desprecio, asumir tu parte ante la defensa y una pausa ante el muro.',
        'El muro suele aparecer cuando el cuerpo se desborda: el corazón late rápido y ya no puedes escuchar. Gottman lo llama inundación. Recomienda una pausa de al menos veinte minutos haciendo algo que calme, sin repasar la pelea (Gottman, 1999).',
      ],
      tips: [
        'Mira la discusión como si fuera una película. Sin culpas, solo para entender.',
        'Avisa antes de la pausa y di cuándo vuelves. Irte sin avisar se siente como un portazo.',
        'Durante la pausa, no ensayes lo que vas a decir. Camina, respira o escucha música.',
      ],
      obstacles: [
        { q: 'Yo no uso ningún jinete, es mi pareja.', a: 'Puede ser que tu pareja use más. Igual, mira si en algún momento te defendiste o te cerraste. Es lo único que puedes cambiar tú.' },
        { q: 'Si me voy a hacer una pausa, mi pareja se enoja más.', a: 'Acuérdenlo antes, en un momento tranquilo. Que los dos sepan que la pausa es para volver, no para escapar.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Haz esto en un momento tranquilo, no después de una pelea.', durationSec: 30, kind: 'breath' },
        { title: 'Una discusión', instruction: 'Recuerda una discusión reciente con tu pareja. Repasa qué dijiste tú y cómo lo dijiste.', durationSec: 60, kind: 'reflection' },
        { title: 'Mi jinete', instruction: '¿Usaste crítica, desprecio, defensa o muro? Marca el que más te salió. Míralo sin castigarte.', durationSec: 60, kind: 'reflection' },
        { title: 'Si fue desprecio', instruction: 'Si hubo burla, ironía u ojos en blanco, anota una cosa que valoras de tu pareja. Ese es el antídoto.', durationSec: 60, kind: 'reflection' },
        { title: 'Si fue defensa', instruction: 'Si te defendiste, busca una parte pequeña que sí fue tuya. Escribe: «Tienes razón en que yo…».', durationSec: 60, kind: 'reflection' },
        { title: 'Si fue muro', instruction: 'Si te cerraste, ¿sentías el corazón rápido o la cabeza llena? Eso es inundación. Necesitas una pausa.', durationSec: 45, kind: 'reflection' },
        { title: 'Mi pausa', instruction: 'Arma tu frase de pausa. Por ejemplo: «Me estoy desbordando, necesito veinte minutos y vuelvo». Elige qué harás para calmarte.', durationSec: 60, kind: 'reflection' },
        { title: 'Ensayar', instruction: 'Di en voz baja tu antídoto, como si la discusión pasara hoy. Nota cómo cambia el tono.', durationSec: 45, kind: 'instruction' },
      ],
    },
    {
      id: 'cultivar-admiracion',
      title: 'Cultivar admiración y cariño',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Buscar a propósito lo que valoras de tu pareja, con un ejemplo concreto, y decírselo esta semana.',
      mechanism: 'Con el tiempo la mente se fija más en lo que molesta. Buscar y decir lo que admiras equilibra la mirada y protege contra el desprecio.',
      evidenceLevel: 'preliminar',
      evidence: [GOTTMAN_1999, ALGOE_2010],
      cautions: VIOLENCIA,
      howItWorks: [
        'Para Gottman, la admiración y el cariño son una base de la pareja. Funcionan como antídoto del desprecio, el jinete que más daña (Gottman y Silver, 1999).',
        'Con los años es fácil dar por hecho lo bueno del otro. La mente nota más lo que falta que lo que hay. Por eso conviene buscar lo valioso a propósito.',
        'Sara Algoe y su equipo vieron que los gestos diarios de gratitud entre parejas se asociaban con sentirse más unidas y más satisfechas (Algoe y otros, 2010). Lo pequeño, dicho a tiempo, cuenta.',
      ],
      tips: [
        'Sé concreto. «Me encantó cómo calmaste a tu mamá» llega más que «eres una gran persona».',
        'Puedes decirlo en persona, en un mensaje o en una nota.',
        'Si están en una época mala, empieza por recordar cómo se conocieron.',
      ],
      obstacles: [
        { q: 'Hoy me cuesta encontrar algo bueno.', a: 'Puede pasar en épocas de mucho roce. Empieza por algo pequeño o por un recuerdo. Si nada aparece por mucho tiempo, es un buen motivo para consultar.' },
        { q: 'Me da vergüenza decirlo en voz alta.', a: 'Prueba por escrito. Un mensaje corto también vale.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio y piensa en tu pareja. No en el último problema, sino en la persona.', durationSec: 30, kind: 'breath' },
        { title: 'Un recuerdo', instruction: 'Recuerda un momento lindo juntos. Puede ser cuando se conocieron o un día que te hizo reír.', durationSec: 60, kind: 'reflection' },
        { title: 'Tres cualidades', instruction: 'Anota tres cosas que valoras de tu pareja. Por ejemplo, su humor, su paciencia o cómo cuida a otros.', durationSec: 75, kind: 'reflection' },
        { title: 'Un ejemplo', instruction: 'Para cada cualidad, escribe una vez en que la viste. Que sea algo concreto.', durationSec: 90, kind: 'reflection' },
        { title: 'Lo de esta semana', instruction: 'Piensa en algo que hizo esta semana y que te gustó, aunque sea chico.', durationSec: 45, kind: 'reflection' },
        { title: 'Decirlo', instruction: 'Elige una cosa y decide cuándo se la dirás. Hoy, mañana, en un mensaje o en persona.', durationSec: 40, kind: 'instruction' },
        { title: 'Cerrar', instruction: 'Nota cómo te sientes después de mirar lo bueno. Respira despacio una vez más.', durationSec: 25, kind: 'breath' },
      ],
    },
    {
      id: 'suenos-dentro-del-conflicto',
      title: 'Los sueños dentro del conflicto',
      family: 'deconstructive',
      skills: ['compassion', 'attention'],
      summary: 'Para un tema que vuelve una y otra vez: descubrir qué sueño, valor o historia hay detrás de la postura de cada uno.',
      mechanism: 'Un conflicto que no se mueve suele esconder un sueño importante. Entender ese sueño baja la tensión aunque el tema no se resuelva.',
      evidenceLevel: 'preliminar',
      evidence: [GOTTMAN_1999, GOTTMAN_CLINIC_1999],
      cautions: VIOLENCIA,
      howItWorks: [
        'Gottman encontró que la mayoría de los conflictos de pareja son perpetuos. Vienen de diferencias de carácter o de valores, y vuelven una y otra vez (Gottman y Silver, 1999). No es una falla: pasa en las parejas que funcionan bien.',
        'Cuando un tema queda trabado, suele haber un sueño detrás. Por ejemplo, ahorrar puede ser el sueño de sentirse a salvo. Viajar puede ser el sueño de la libertad. Si ese sueño no se escucha, ninguna postura cede.',
        'La meta no es que alguien gane ni resolver el tema. Es entender el sueño del otro y buscar un acuerdo para convivir con la diferencia, con más humor y menos dolor.',
      ],
      tips: [
        'Hagan esto en calma, nunca en medio de una pelea.',
        'Uno habla y el otro solo pregunta. Después cambian.',
        'Quien escucha no intenta convencer. Solo busca entender.',
        'Si el tema siempre termina en pelea fuerte, un profesional de pareja puede ayudar.',
      ],
      obstacles: [
        { q: 'Si entiendo su sueño, voy a tener que ceder.', a: 'Entender no es aceptar todo. Muchas veces, cuando cada uno se siente escuchado, aparece un acuerdo que respeta los dos sueños.' },
        { q: 'No sé cuál es mi sueño.', a: 'Pregúntate qué te importa de esa postura y de dónde viene. A veces está en la historia de tu familia.' },
      ],
      steps: [
        { title: 'Elegir el tema', instruction: 'Elijan un tema que vuelve siempre. Uno que no sea el más doloroso. Acuerden que hoy nadie tiene que ceder.', durationSec: 45, kind: 'instruction' },
        { title: 'Calmarse', instruction: 'Respiren despacio juntos. Si alguien se agita durante la charla, pidan una pausa.', durationSec: 30, kind: 'breath' },
        { title: 'Quien habla', instruction: 'Una persona cuenta su postura. Luego cuenta qué le importa de ella y por qué.', durationSec: 150, kind: 'instruction' },
        { title: 'Preguntas', instruction: 'Quien escucha pregunta con curiosidad. «¿Qué significa esto para ti?», «¿De dónde viene en tu historia?».', durationSec: 120, kind: 'instruction' },
        { title: 'El sueño', instruction: 'Pregunta también: «¿Qué sueño hay detrás?», «¿Qué temes si no se cumple?». No discutas la respuesta.', durationSec: 90, kind: 'instruction' },
        { title: 'Resumir', instruction: 'Quien escucha resume: «Entiendo que para ti esto es…». Quien habló dice si es así.', durationSec: 60, kind: 'instruction' },
        { title: 'Cambiar', instruction: 'Ahora cambian de lugar. Repitan los pasos con la otra persona.', durationSec: 240, kind: 'instruction' },
        { title: 'Un acuerdo chico', instruction: 'Busquen un acuerdo de prueba que respete algo de los dos sueños. Que sea pequeño y por un tiempo.', durationSec: 90, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Agradézcanse por la charla. Terminen con un gesto de cariño.', durationSec: 30, kind: 'instruction' },
      ],
    },
  ],

  meta: {
    'preocuparme-me-sirve': { level: 'intermedio', approaches: ['metacognitiva'], module: 'pensamientos', prerequisites: ['aplazar-preocupacion'] },
    'poner-a-prueba-el-descontrol': {
      level: 'intermedio',
      approaches: ['metacognitiva'],
      module: 'pensamientos',
      prerequisites: ['aplazar-preocupacion', 'preocuparme-me-sirve'],
    },
    'reenfoque-de-la-atencion': { level: 'iniciacion', approaches: ['metacognitiva'], module: 'pensamientos' },
    'soltar-la-vigilancia': {
      level: 'intermedio',
      approaches: ['metacognitiva', 'tcc'],
      module: 'pensamientos',
      prerequisites: ['reenfoque-de-la-atencion'],
    },
    'charla-del-estres-del-dia': { level: 'iniciacion', approaches: ['gottman'], module: 'pareja' },
    'cultivar-admiracion': { level: 'iniciacion', approaches: ['gottman', 'positiva'], module: 'pareja' },
    'mi-jinete-y-su-antidoto': { level: 'intermedio', approaches: ['gottman'], module: 'pareja', prerequisites: ['inicio-suave'] },
    'suenos-dentro-del-conflicto': {
      level: 'avanzado',
      approaches: ['gottman'],
      module: 'pareja',
      prerequisites: ['mapas-de-amor', 'reparar-tras-discusion'],
    },
  },

  articles: [],
  programs: [],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-preocuparme-me-sirve',
      title: '¿Preocuparte te protege?',
      subtitle: 'La idea de que preocuparse ayuda mantiene la preocupación.',
      slides: [
        { heading: 'Una idea escondida', text: 'Muchas personas creen que preocuparse sirve. Que las prepara, que las cuida o que muestra que les importa.' },
        { heading: 'Por qué pesa', text: 'Si crees que te protege, dejar de preocuparte da miedo. Por eso sigues dando vueltas, aunque te canse.' },
        { heading: 'Mira qué ayudó', text: 'Piensa en una vez que te preocupaste mucho. ¿Te ayudaron las vueltas? ¿O te ayudó algo que hiciste?' },
        { heading: 'Ocuparte', text: 'Ocuparte de un tema tiene un final: un plan, una llamada, un paso. Preocuparte no tiene final. Puedes elegir lo primero.' },
        { heading: 'Si no para', text: 'Si la preocupación no te deja dormir ni vivir, consulta. La terapia metacognitiva tiene buen respaldo.' },
      ],
      related: { practices: ['preocuparme-me-sirve'] },
      references: [WELLS_1995, WELLS_2009],
    },
    {
      id: 'pildora-miedo-a-preocuparme',
      title: 'Miedo a la propia preocupación',
      subtitle: 'Cuando temes que preocuparte te haga daño.',
      slides: [
        { heading: 'Dos miedos', text: 'Hay quien se preocupa por la vida. Y hay quien, además, se preocupa por preocuparse: «me voy a enloquecer».' },
        { heading: 'El círculo', text: 'Ese miedo hace que vigiles tu mente y la pelees. Cuanto más la peleas, más fuerte parece la preocupación.' },
        { heading: 'Un experimento', text: 'En la terapia de Wells se prueba a propósito. Por ejemplo, intentar preocuparte más durante unos minutos y ver qué pasa.' },
        { heading: 'Lo que se ve', text: 'Casi siempre la preocupación sube y luego baja sola. No pasa nada grave. Esa experiencia enseña más que mil razones.' },
        { heading: 'Con cuidado', text: 'Si tienes ataques de pánico frecuentes, haz estos experimentos con un profesional. Si algo te asusta, frena y pide ayuda.' },
      ],
      related: { practices: ['poner-a-prueba-el-descontrol'] },
      references: [WELLS_1995, WELLS_2009],
    },
    {
      id: 'pildora-atencion-hacia-la-calma',
      title: 'Mirar lo que dice «estás a salvo»',
      subtitle: 'La alarma solo mira el peligro. Tú puedes mirar el resto.',
      slides: [
        { heading: 'La alarma', text: 'Cuando algo te asusta, la atención se achica. Solo ve lo que podría salir mal.' },
        { heading: 'Lo que falta', text: 'Así se pierden datos. La gente tranquila, la salida cerca, la luz del día. Todo eso también está.' },
        { heading: 'Reenfocar', text: 'Wells propone mirar a propósito esas señales. No es distraerte. Es ver la escena completa.' },
        { heading: 'En el momento', text: 'Nota la alarma. Mira tres cosas. Busca dos señales de calma. Dite qué ves de verdad.' },
        { heading: 'Si hay peligro', text: 'Esto es para alarmas sin peligro real. Si hay un riesgo de verdad, protégete y pide ayuda. En una emergencia, llama al 911.' },
      ],
      related: { practices: ['reenfoque-de-la-atencion'] },
      references: [WELLS_2009, WELLS_PAPAGEORGIOU_1998],
    },
    {
      id: 'pildora-vigilar-amenazas',
      title: 'Vigilar cansa',
      subtitle: 'Buscar peligro todo el día mantiene la ansiedad.',
      slides: [
        { heading: 'Siempre en guardia', text: 'Mirar el cuerpo, las caras, el celular o los ruidos. Muchas personas vigilan sin darse cuenta.' },
        { heading: 'Por qué atrapa', text: 'Quien busca peligro lo encuentra. Un dolor, un gesto, un mensaje. Y eso parece decir que hay que seguir alerta.' },
        { heading: 'El costo', text: 'Vigilar da un alivio corto. Pero la mente nunca aprende que el peligro no llegaba.' },
        { heading: 'Un experimento', text: 'Elige una sola vigilancia. Un día, cuando aparezcan las ganas, nómbralas y vuelve a lo tuyo. Al final, mide tu ansiedad.' },
        { heading: 'Atento sin alerta', text: 'Las señales importantes suelen notarse sin buscarlas. Si la ansiedad no te deja vivir, consulta a un profesional.' },
      ],
      related: { practices: ['soltar-la-vigilancia'] },
      references: [WELLS_2009, SALKOVSKIS_1991],
    },
    {
      id: 'pildora-charla-del-estres',
      title: 'El estrés de afuera, en casa',
      subtitle: 'Veinte minutos para contarse el día y estar del mismo lado.',
      slides: [
        { heading: 'Lo que se cuela', text: 'El jefe, un trámite, la familia. El estrés de afuera, si no se habla, termina en peleas por cualquier cosa.' },
        { heading: 'Una charla diaria', text: 'Gottman propone veinte minutos para contarse el día. Solo el estrés de afuera, no los problemas entre ustedes.' },
        { heading: 'Escuchar primero', text: 'Quien escucha no da consejos. Pregunta, mira y entiende. Si el otro quiere ideas, las pedirá.' },
        { heading: 'De su lado', text: 'Frases como «qué injusto» o «te entiendo» valen mucho. No hace falta defender al otro de la historia.' },
        { heading: 'Si hay violencia', text: 'Esto vale si los dos se sienten seguros. Si hay miedo, golpes o control, llama a la Línea 144. Si estás en peligro, al 911.' },
      ],
      related: { practices: ['charla-del-estres-del-dia'] },
      references: [GOTTMAN_1999, BODENMANN_2005],
    },
    {
      id: 'pildora-inundacion',
      title: 'Cuando el cuerpo se desborda',
      subtitle: 'En medio de una pelea, a veces lo mejor es una pausa.',
      slides: [
        { heading: 'La inundación', text: 'En una pelea, a veces el corazón late rápido y la cabeza se llena. Gottman lo llama inundación.' },
        { heading: 'Qué pasa', text: 'Así no se puede escuchar. Aparecen el ataque, la defensa o el muro: cerrarse y no responder.' },
        { heading: 'La pausa', text: 'Avisa que necesitas parar y di cuándo vuelves. Por ejemplo: «Necesito veinte minutos y seguimos».' },
        { heading: 'Durante la pausa', text: 'Haz algo que calme. Caminar, respirar o escuchar música. No repases la pelea en tu cabeza.' },
        { heading: 'Volver', text: 'La pausa es para volver, no para escapar. Si hay miedo o violencia, no vuelvas a la charla: llama a la Línea 144 o al 911.' },
      ],
      related: { practices: ['mi-jinete-y-su-antidoto'] },
      references: [GOTTMAN_1999, GOTTMAN_1994],
    },
    {
      id: 'pildora-admiracion-y-carino',
      title: 'Mirar lo bueno del otro',
      subtitle: 'La admiración protege a la pareja del desprecio.',
      slides: [
        { heading: 'Lo que se pierde', text: 'Con los años, es fácil ver más lo que molesta que lo que nos gusta del otro.' },
        { heading: 'Una base', text: 'Para Gottman, la admiración y el cariño son una base de la pareja. Protegen del desprecio, que es lo que más daña.' },
        { heading: 'Buscar a propósito', text: 'Piensa tres cosas que valoras de tu pareja. Para cada una, busca un ejemplo real.' },
        { heading: 'Decirlo', text: 'Dilo de forma concreta. «Me encantó cómo calmaste a tu mamá» llega más que «eres una gran persona».' },
        { heading: 'Lo pequeño', text: 'Un gracias a tiempo también cuenta. Los gestos diarios de gratitud se asocian con parejas más unidas.' },
      ],
      related: { practices: ['cultivar-admiracion'] },
      references: [GOTTMAN_1999, ALGOE_2010],
    },
    {
      id: 'pildora-problemas-perpetuos',
      title: 'Peleas que siempre vuelven',
      subtitle: 'Muchos conflictos no se resuelven. Se aprende a convivir con ellos.',
      slides: [
        { heading: 'Es común', text: 'Gottman vio que la mayoría de los conflictos de pareja vuelven una y otra vez. Pasa también en parejas que están bien.' },
        { heading: 'Por qué vuelven', text: 'Vienen de diferencias de carácter o de valores. Uno quiere ahorrar y el otro viajar. Uno quiere orden y el otro no tanto.' },
        { heading: 'Un sueño detrás', text: 'Detrás de cada postura suele haber un sueño. Sentirse a salvo, ser libre, honrar a la familia.' },
        { heading: 'Preguntar', text: 'Pregunta: «¿Qué significa esto para ti?». Escucha sin convencer. Después cambien de lugar.' },
        { heading: 'La meta', text: 'No se trata de ganar. Se trata de entenderse y buscar un acuerdo de prueba. Si hay violencia, llama a la Línea 144 o al 911.' },
      ],
      related: { practices: ['suenos-dentro-del-conflicto'] },
      references: [GOTTMAN_1999, GOTTMAN_CLINIC_1999],
    },
  ],
};
