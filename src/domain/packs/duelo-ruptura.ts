import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Duelo por una ruptura de pareja»: noviazgos y parejas sin hijos en común, a
 * cualquier edad adulta, tanto si te dejaron como si dejaste. Lo que es propio de separarse
 * con hijos está en separacion-hijos.ts y necesidades-separacion-perinatal.ts, y se enlaza.
 *  - las ganas de escribirle o mirar sus redes como una ola (Bowen y Marlatt);
 *  - un plan de contacto elegido, no impuesto (control de estímulos, TCC y DBT);
 *  - el «por qué» que no se apaga: escritura expresiva breve con cierre (Pennebaker) y
 *    reflexión en lugar de rumiación (Larson y Sbarra);
 *  - volver a ti y a tu red (Slotter y colaboradores; Lewandowski y Bizzoco);
 *  - los días, las noches y las fechas difíciles, con atención al alcohol;
 *  - aprender de la relación sin culparte;
 *  - marco general: ir y volver entre el dolor y la vida (Stroebe y Schut).
 *
 * Seguridad: se nombra la violencia y el control (Línea 144, 911) y se aclara que no es
 * responsabilidad de quien la sufre; ideas de no querer vivir (135 / 0800-345-1435, botón
 * Ayuda); consumo de alcohol para «aguantar» (Línea 141).
 */

const SBARRA_EMERY_2005: Reference = {
  citation:
    'Sbarra, D. A., & Emery, R. E. (2005). The emotional sequelae of nonmarital relationship dissolution: Analysis of change and intraindividual variability over time. Personal Relationships, 12(2), 213–232.',
};
const SLOTTER_2010: Reference = {
  citation:
    'Slotter, E. B., Gardner, W. L., & Finkel, E. J. (2010). Who am I without you? The influence of romantic breakup on the self-concept. Personality and Social Psychology Bulletin, 36(2), 147–160.',
};
const LEWANDOWSKI_2007: Reference = {
  citation:
    'Lewandowski, G. W., Jr., & Bizzoco, N. M. (2007). Addition through subtraction: Growth following the dissolution of a low quality relationship. The Journal of Positive Psychology, 2(1), 40–54.',
};
const LARSON_SBARRA_2015: Reference = {
  citation:
    'Larson, G. M., & Sbarra, D. A. (2015). Participating in research on romantic breakups promotes emotional recovery via changes in self-concept clarity. Social Psychological and Personality Science, 6(4), 399–406.',
};
const PENNEBAKER_1997: Reference = {
  citation: 'Pennebaker, J. W. (1997). Writing about emotional experiences as a therapeutic process. Psychological Science, 8(3), 162–166.',
  doi: '10.1111/j.1467-9280.1997.tb00403.x',
};
const STROEBE_1999: Reference = {
  citation: 'Stroebe, M., & Schut, H. (1999). The dual process model of coping with bereavement: Rationale and description. Death Studies, 23(3), 197–224.',
};
const BOWEN_2009: Reference = {
  citation:
    'Bowen, S., & Marlatt, A. (2009). Surfing the urge: Brief mindfulness-based intervention for college student smokers. Psychology of Addictive Behaviors, 23(4), 666–671.',
  doi: '10.1037/a0017127',
};
const LINEHAN_2015: Reference = { citation: 'Linehan, M. M. (2015). DBT skills training manual (2nd ed.). Guilford Press.' };

/** Aviso común: violencia o control en la relación. */
const VIOLENCIA =
  'Si en la relación hubo golpes, amenazas, insultos constantes o control de tu celular, tu plata o tus salidas, eso es violencia y no es tu culpa. Puedes llamar a la Línea 144, gratis y las 24 horas. Si corres peligro ahora, llama al 911.';
/** Aviso común: ideas de no querer vivir. */
const NO_QUERER_VIVIR =
  'Si aparecen ideas de no querer vivir, no esperes: llama al Centro de Asistencia al Suicida, 135 en CABA y GBA o 0800-345-1435 en el resto del país, o usa el botón Ayuda.';
/** Aviso común: alcohol u otras sustancias para aguantar. */
const ALCOHOL =
  'Si tomas alcohol u otras sustancias para aguantar o para dormir, y cada vez más, consulta. La Línea 141 de SEDRONAR es gratuita y atiende las 24 horas.';

export const DUELO_RUPTURA_PACK: ContentPack = {
  id: 'duelo-ruptura',

  // ================================================================== prácticas
  practices: [
    {
      id: 'ganas-de-escribirle',
      title: 'Las ganas de escribirle',
      family: 'attentional',
      skills: ['attention', 'resilience'],
      summary: 'Una pausa de tres minutos para cuando tienes ganas de escribirle a tu ex o de mirar sus redes: nombrar, medir, esperar y después decidir.',
      mechanism: 'Las ganas suben, llegan a un punto y bajan si no se las alimenta. Esperar unos minutos y mirarlas con atención te deja decidir en lugar de actuar en automático.',
      evidenceLevel: 'preliminar',
      evidence: [BOWEN_2009, LINEHAN_2015],
      howItWorks: [
        'Después de una ruptura es muy común sentir ganas fuertes de escribirle a la otra persona, de llamarla o de revisar sus redes. No es debilidad: durante mucho tiempo esa persona fue tu lugar para calmarte.',
        'Alan Marlatt propuso mirar un impulso como una ola: sube, llega a un punto y baja, muchas veces en pocos minutos. En un estudio con fumadores, aprender a «surfear» las ganas ayudó a no obedecerlas (Bowen y Marlatt, 2009).',
        'Esta práctica no te prohíbe escribir. Te da unos minutos para que la decisión la tomes tú, y no la ola.',
      ],
      tips: [
        'Úsala en el momento, con el celular en la mano. Es corta a propósito.',
        'Si después de esperar igual quieres escribir, escribe el mensaje en una nota y no lo mandes hasta mañana.',
        'Mirar sus redes cuenta igual que escribirle. También trae una ola.',
        'Las noches y los fines de semana suelen ser más difíciles. Tenla a mano para esos momentos.',
      ],
      obstacles: [
        { q: 'Esperé y le escribí igual.', a: 'Pasa. No es un fracaso. Fíjate qué sentiste después, y la próxima vez prueba esperar un poco más.' },
        { q: '¿Y si es una urgencia práctica?', a: 'Si hay algo práctico que resolver, puedes escribir. Hazlo breve, con datos, y en un horario que elijas.' },
      ],
      micro: true,
      steps: [
        { title: 'Soltar', instruction: 'Deja el celular boca abajo, lejos de la mano. Apoya los pies en el suelo.', durationSec: 20, kind: 'instruction' },
        { title: 'Nombrar', instruction: 'Nombra lo que pasa: «Tengo ganas de escribirle» o «Tengo ganas de ver sus redes».', durationSec: 20, kind: 'reflection' },
        { title: 'Medir', instruction: 'Del cero al diez, ¿cuánta fuerza tienen las ganas ahora? Anota el número.', durationSec: 15, kind: 'reflection' },
        { title: 'Respirar', instruction: 'Respira despacio. Suelta el aire más largo de lo que entra. Nota dónde sientes las ganas en el cuerpo.', durationSec: 50, kind: 'breath' },
        { title: 'Lo que buscas', instruction: '¿Qué buscas en realidad? Una respuesta, compañía, calmar la angustia, saber de su vida. Nómbralo.', durationSec: 30, kind: 'reflection' },
        { title: 'Esperar', instruction: 'Elige esperar diez minutos. Pon una alarma. Mientras, haz otra cosa con las manos.', durationSec: 20, kind: 'instruction' },
        { title: 'Medir otra vez', instruction: 'Cuando suene la alarma, mide otra vez las ganas. ¿Subieron, bajaron o siguen igual? Después decides.', durationSec: 20, kind: 'reflection' },
      ],
    },
    {
      id: 'mi-plan-de-contacto',
      title: 'Mi plan de contacto',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Decidir por unas semanas cuánto contacto quieres con tu ex, qué haces con sus redes y qué respondes si te escribe. Puede ser contacto cero, sólo lo práctico o un trato amable y poco frecuente.',
      mechanism: 'Cada mensaje, foto o noticia de la otra persona reactiva el dolor y las ganas. Reducir esos disparadores, con un plan que eliges tú, le da al duelo espacio para avanzar.',
      evidenceLevel: 'preliminar',
      evidence: [LINEHAN_2015, SBARRA_EMERY_2005],
      howItWorks: [
        'Ver sus historias, releer chats viejos o esperar un mensaje mantiene la herida abierta. La terapia cognitivo-conductual llama a esto control de estímulos: cambiar el entorno para que el impulso aparezca menos.',
        'El «contacto cero» es una opción, no una regla. Algunas personas lo necesitan. Otras comparten trabajo, amistades o una mascota y prefieren un contacto mínimo y práctico. Lo importante es que lo elijas tú y que sepas por qué.',
        'No hay estudios que digan cuántos días de distancia hacen falta. Sí sabemos que las emociones después de una ruptura suben y bajan de un día a otro, y que en general se van calmando con las semanas (Sbarra y Emery, 2005).',
      ],
      tips: [
        'Pon una fecha para revisar el plan, por ejemplo en un mes.',
        'Silenciar o archivar no es lo mismo que bloquear. Elige lo que te sirva.',
        'Si comparten un grupo de amistades, avisa a una persona de confianza que necesitas no recibir noticias por un tiempo.',
        'Guarda las fotos y los chats en una carpeta aparte en lugar de borrarlos, si todavía no quieres decidir.',
      ],
      obstacles: [
        { q: 'Siento que si no le hablo, la pierdo para siempre.', a: 'Es un miedo muy comprensible. La distancia no decide el futuro: te da tiempo para saber qué quieres tú, con más calma.' },
        { q: 'Yo la dejé y me da culpa no responder.', a: 'Puedes ser amable y breve a la vez. Una respuesta corta y clara suele cuidar más que muchas charlas que reabren todo.' },
      ],
      cautions: `${VIOLENCIA} En ese caso, la distancia es parte de tu seguridad y puedes pedir ayuda para resolver lo práctico. ${NO_QUERER_VIVIR}`,
      steps: [
        { title: 'Llegar', instruction: 'Siéntate. Respira despacio tres veces. Hoy decides qué contacto quieres tú, no lo que hará la otra persona.', durationSec: 30, kind: 'breath' },
        { title: 'Lo práctico', instruction: '¿Quedó algo práctico entre ustedes? Cosas en su casa, una mascota, una deuda, un alquiler. Anótalo.', durationSec: 60, kind: 'reflection' },
        { title: 'Tu opción', instruction: 'Elige una opción para las próximas semanas. Contacto cero, contacto sólo para lo práctico, o un trato amable y poco frecuente.', durationSec: 60, kind: 'reflection' },
        { title: 'Para qué', instruction: 'Escribe por qué elegiste esa opción. Piensa en cómo quieres estar dentro de un mes.', durationSec: 45, kind: 'reflection' },
        { title: 'Las redes', instruction: 'Decide qué haces con sus redes. Puedes silenciar, archivar los chats o dejar de seguir por un tiempo. No tiene que ser para siempre.', durationSec: 60, kind: 'instruction' },
        { title: 'Si te escribe', instruction: 'Escribe una respuesta corta por si te escribe. Por ejemplo: «Gracias por escribir. Ahora necesito distancia».', durationSec: 45, kind: 'reflection' },
        { title: 'Un apoyo', instruction: 'Anota a quién le contarás tu plan. Y a quién le escribirás cuando tengas ganas de escribirle a tu ex.', durationSec: 40, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Dite: «Elijo esto para cuidarme. Puedo revisarlo más adelante».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'la-historia-de-la-ruptura',
      title: 'Escribir la historia de la ruptura',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Escribir quince minutos sobre la ruptura y lo que sientes, con un cierre que te devuelve al presente. Para cuando el «por qué» no deja de dar vueltas.',
      mechanism: 'Poner en palabras lo que pasó y lo que sientes ayuda a ordenar la experiencia. Mirarla con algo de distancia, en lugar de repetir la misma pregunta, se asocia a una mejor recuperación.',
      evidenceLevel: 'moderada',
      evidence: [PENNEBAKER_1997, LARSON_SBARRA_2015],
      howItWorks: [
        'James Pennebaker pidió a muchas personas que escribieran unos quince minutos, varios días seguidos, sobre una experiencia difícil y lo que sentían. En varios estudios, quienes lo hicieron mostraron después mejoras en el ánimo y en la salud (Pennebaker, 1997).',
        'Hay una diferencia entre rumiar y reflexionar. Rumiar es repetir «¿por qué?» sin llegar a nada. Reflexionar es contar la historia, mirarla y notar qué entiendes hoy. En un estudio, volver a pensar la ruptura de forma ordenada ayudó a las personas a tener más claro quiénes eran (Larson y Sbarra, 2015).',
        'Al principio puede que te sientas peor un rato. Suele pasar en unas horas. Por eso la práctica termina con un cierre.',
      ],
      tips: [
        'Prueba tres o cuatro días seguidos, a la misma hora.',
        'No lo escribas para mandarlo. Es sólo para ti.',
        'Si notas que escribes lo mismo una y otra vez, para y pasa al paso «Otra mirada».',
        'Evita hacerlo justo antes de dormir.',
      ],
      obstacles: [
        { q: 'Necesito saber por qué terminó.', a: 'Tiene sentido. A veces la respuesta llega con el tiempo, y a veces no del todo. Puedes seguir adelante aunque haya preguntas abiertas.' },
        { q: 'Escribir me angustia mucho.', a: 'Escribe menos tiempo, cinco minutos. Si la angustia te dura días, deja la escritura y habla con un profesional.' },
      ],
      cautions: `Si escribir te deja mucho peor durante días, o te trae recuerdos de violencia o de algo traumático, para y busca a un profesional. ${NO_QUERER_VIVIR}`,
      steps: [
        { title: 'Preparar', instruction: 'Busca un lugar tranquilo, un papel o una nota en el celular. Nadie más va a leer esto.', durationSec: 30, kind: 'instruction' },
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Pon una alarma de quince minutos.', durationSec: 30, kind: 'breath' },
        { title: 'Escribir', instruction: 'Escribe sobre la ruptura y lo que sientes. Qué pasó, qué te duele, qué te enoja, qué extrañas. No cuides la letra ni la forma.', durationSec: 600, kind: 'reflection' },
        { title: 'Lo que no sabes', instruction: 'Elige una pregunta que no tiene respuesta. Escríbela y agrega: «Puede que nunca lo sepa del todo».', durationSec: 60, kind: 'reflection' },
        { title: 'Otra mirada', instruction: 'Relee lo que escribiste. ¿Hay algo que hoy ves distinto que el primer día? Anótalo en una línea.', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Guarda el papel o cierra la nota. Haz algo del presente: lávate la cara, sal al balcón o toma algo caliente.', durationSec: 60, kind: 'instruction' },
        { title: 'Respirar', instruction: 'Respira despacio. Es normal que la emoción siga un rato. Suele bajar en unas horas.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'quien-soy-sin-la-pareja',
      title: 'Volver a lo mío y a los míos',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Recordar lo que dejaste de hacer y a quién dejaste de ver durante la relación, y elegir una cosa y una persona para retomar esta semana.',
      mechanism: 'En la pareja, parte de quien eres se mezcla con el otro. Retomar gustos, actividades y vínculos propios ayuda a recuperar la claridad sobre quién eres, que suele bajar después de una ruptura.',
      evidenceLevel: 'preliminar',
      evidence: [SLOTTER_2010, LEWANDOWSKI_2007],
      howItWorks: [
        'En una relación compartes amistades, gustos, horarios y planes. Por eso, cuando termina, puede sentirse que se fue también una parte de ti. En unos estudios, después de una ruptura las personas tenían menos claro quiénes eran, y eso se asociaba a más tristeza (Slotter y colaboradores, 2010).',
        'También puede pasar lo contrario. Cuando la relación ya no te dejaba crecer, terminarla puede abrir espacio para volver a cosas propias. En un estudio, muchas personas contaron cambios positivos después de una ruptura así (Lewandowski y Bizzoco, 2007).',
        'No hace falta reinventarte. Alcanza con volver a una cosa tuya y a una persona querida.',
      ],
      tips: [
        'Empieza por lo más fácil: una persona que seguro se alegra de saber de ti.',
        'No tienes que contar toda la historia de la ruptura. Puedes sólo proponer un café.',
        'Vale retomar algo viejo o probar algo nuevo.',
      ],
      obstacles: [
        { q: 'Me da vergüenza volver después de tanto tiempo.', a: 'Es muy común. Puedes decirlo simple: «Me alejé un tiempo y te extrañé». Muchas personas se alegran de que alguien vuelva.' },
        { q: 'Todas mis amistades eran también de mi ex.', a: 'Puedes elegir a quién ver por un tiempo. Y puedes sumar gente nueva de a poco, en una clase, un grupo o el trabajo.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Siéntate con comodidad. Respira despacio tres veces.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que dejé', instruction: 'Anota cosas que hacías antes de la relación y dejaste. Un deporte, una música, un lugar, una forma de pasar el domingo.', durationSec: 60, kind: 'reflection' },
        { title: 'A quién dejé de ver', instruction: 'Anota personas que viste menos durante la relación. Amistades, familia, gente del trabajo o del barrio.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que me llevo', instruction: 'Anota algo que descubriste en la relación y quieres conservar. Un gusto, una comida, un lugar.', durationSec: 45, kind: 'reflection' },
        { title: 'Un mensaje', instruction: 'Elige a una persona de tu lista. Escríbele hoy algo corto. Por ejemplo: «Hace mucho que no hablamos. ¿Tomamos un café?».', durationSec: 60, kind: 'instruction' },
        { title: 'Una actividad', instruction: 'Elige una cosa de tu lista y ponle día y hora esta semana.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Dite: «Sigo siendo yo, con pareja o sin pareja».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'mis-dias-tras-la-ruptura',
      title: 'Mis días después de la ruptura',
      family: 'constructive',
      skills: ['resilience'],
      summary: 'Ordenar los momentos que más pesan: las noches, los fines de semana y las fechas difíciles. Incluye el sueño y una mirada honesta al alcohol.',
      mechanism: 'Durante el duelo, los días pierden forma. Unos pocos anclas fijas, un cierre del día y planes para las fechas difíciles dan sostén mientras el dolor va y viene.',
      evidenceLevel: 'preliminar',
      evidence: [STROEBE_1999, SBARRA_EMERY_2005],
      howItWorks: [
        'Margaret Stroebe y Henk Schut describieron el duelo como un ir y venir. A ratos miras la pérdida y la sientes. A ratos te ocupas de la vida diaria. Las dos cosas son necesarias. Su modelo nació para el duelo por una muerte, pero sirve para pensar otras pérdidas.',
        'Tener algo fijo cada día, como una hora para levantarte o una caminata, ayuda a que no todo dependa de cómo amaneces. Las fechas difíciles, como su cumpleaños o un aniversario, pesan menos si las piensas antes.',
        'Muchas personas toman más alcohol para aguantar o para dormir. Alivia un rato, pero empeora el sueño y el ánimo del día siguiente.',
      ],
      tips: [
        'Mantén la misma hora para levantarte, también el fin de semana.',
        'Deja el celular fuera de la cama. Así es más difícil mirar sus redes de noche.',
        'Para una fecha difícil, planea con quién estarás y qué harás, aunque sea algo chico.',
        'Si estás triste casi todo el día durante semanas, consulta.',
      ],
      obstacles: [{ q: 'No tengo ganas de hacer nada.', a: 'Es esperable. Elige algo muy chico y hazlo igual, sin esperar las ganas. Muchas veces las ganas llegan después.' }],
      cautions: `${ALCOHOL} Si no duermes durante varias semanas, consulta a un médico. ${NO_QUERER_VIVIR}`,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Piensa en una semana común desde la ruptura.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que pesa', instruction: 'Anota los momentos que más pesan. La noche, el domingo, la hora en que solían hablar.', durationSec: 60, kind: 'reflection' },
        { title: 'Un ancla', instruction: 'Elige una hora fija para levantarte, también el fin de semana. Anótala.', durationSec: 45, kind: 'reflection' },
        { title: 'La noche', instruction: 'Arma un cierre del día. Por ejemplo, dejar el celular fuera de la cama, darte una ducha y leer un rato.', durationSec: 60, kind: 'reflection' },
        { title: 'Las fechas', instruction: 'Anota las fechas difíciles que vienen. Su cumpleaños, el aniversario, unas vacaciones. Para cada una, piensa con quién estarás.', durationSec: 60, kind: 'reflection' },
        { title: 'El alcohol', instruction: '¿Estás tomando más para aguantar o para dormir? Anota cuánto, sin juzgarte. Es una señal para cuidarte.', durationSec: 45, kind: 'reflection' },
        { title: 'Un plan', instruction: 'Pon en tu agenda algo para el momento que más pesa. Una caminata, una llamada o una clase.', durationSec: 40, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Dite: «Los días difíciles también pasan».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'aprender-de-la-relacion',
      title: 'Aprender de la relación sin culparme',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Mirar la relación con curiosidad: lo bueno, lo que no funcionaba, tu parte y la que no dependía de ti. Para llevarte un aprendizaje, no una condena.',
      mechanism: 'Revisar la relación de forma ordenada y amable ayuda a armar una historia más clara de lo que pasó. Hablarte con compasión evita que el aprendizaje se vuelva culpa.',
      evidenceLevel: 'preliminar',
      evidence: [LARSON_SBARRA_2015, LEWANDOWSKI_2007],
      howItWorks: [
        'Después de una ruptura, la mente suele ir a dos extremos: «todo fue mi culpa» o «todo fue culpa del otro». Casi nunca es así. Mirar las dos partes, con hechos y sin insultos, da una historia más justa.',
        'En un estudio, quienes reflexionaron varias veces sobre su ruptura de forma guiada tuvieron más claro quiénes eran y se recuperaron mejor (Larson y Sbarra, 2015).',
        'Aprender no es castigarte. Es poder decir: «Hice lo que pude con lo que sabía, y ahora sé algo más».',
      ],
      tips: [
        'Escribe como se lo contarías a una amistad que te quiere.',
        'Si sólo aparece culpa, pregúntate qué le dirías a otra persona en tu lugar.',
        'Hazla cuando haya pasado un poco de tiempo, no el primer día.',
      ],
      obstacles: [
        { q: 'Yo terminé y siento que hice daño.', a: 'Terminar una relación puede doler a los dos, y no te convierte en mala persona. Puedes reconocer el daño y también tratarte con cuidado.' },
        { q: 'Ya tiene otra pareja y siento que perdí.', a: 'Duele mucho, y no dice nada de tu valor. Cada persona hace su duelo a su ritmo. Mirar sus redes suele hacerlo peor.' },
      ],
      cautions: `Si en la relación hubo violencia, esta práctica no es para buscar tu parte. La violencia es responsabilidad de quien la ejerce. ${VIOLENCIA}`,
      steps: [
        { title: 'Llegar', instruction: 'Pon una mano en el pecho. Respira despacio. Hoy miras la relación con curiosidad, no para juzgarte.', durationSec: 30, kind: 'breath' },
        { title: 'Lo bueno', instruction: 'Anota dos cosas que fueron buenas en la relación. Pueden convivir con el dolor.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que no funcionaba', instruction: 'Anota dos cosas que no funcionaban. Escribe hechos, no culpas. Por ejemplo: «Casi no hablábamos de lo importante».', durationSec: 60, kind: 'reflection' },
        { title: 'Tu parte', instruction: '¿Qué parte te toca a ti? Escríbela como se la contarías a una amistad querida, sin insultos.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que no dependía de ti', instruction: '¿Qué no dependía de ti? Las decisiones de la otra persona, su historia, las circunstancias. Anótalo.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que llevo', instruction: 'Escribe algo que quieres cuidar en tu próxima relación, o en tus vínculos en general.', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Dite: «Hice lo que pude con lo que sabía. Ahora sé algo más».', durationSec: 30, kind: 'breath' },
      ],
    },
  ],

  meta: {
    'ganas-de-escribirle': { level: 'iniciacion', approaches: ['mindfulness', 'dbt'], module: 'duelo' },
    'mi-plan-de-contacto': { level: 'intermedio', approaches: ['tcc', 'dbt'], module: 'duelo', prerequisites: ['ganas-de-escribirle'] },
    'la-historia-de-la-ruptura': { level: 'intermedio', approaches: ['escritura', 'narrativa'], module: 'duelo', prerequisites: ['ganas-de-escribirle'] },
    'quien-soy-sin-la-pareja': { level: 'iniciacion', approaches: ['act', 'tcc'], module: 'duelo' },
    'mis-dias-tras-la-ruptura': { level: 'iniciacion', approaches: ['tcc'], module: 'duelo' },
    'aprender-de-la-relacion': { level: 'intermedio', approaches: ['cft', 'narrativa'], module: 'pareja', prerequisites: ['la-historia-de-la-ruptura'] },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'duelo-por-una-ruptura',
      title: 'Cuando una relación termina',
      subtitle: 'El duelo por una ruptura de pareja, te hayan dejado o hayas dejado: las ganas de escribirle, el «por qué», volver a ti y cuándo pedir ayuda.',
      category: 'Relaciones',
      readingMin: 9,
      keyPoints: [
        'Una ruptura es un duelo, aunque no haya muerte ni hijos en común. Duele perder a la persona, los planes y una parte de la vida diaria.',
        'Las emociones suben y bajan de un día a otro, y en general se van calmando con las semanas.',
        'Las ganas de escribirle o mirar sus redes son una ola: suben y bajan si no se las alimenta.',
        'Reflexionar sobre la ruptura de forma ordenada ayuda más que repetir el «por qué».',
        'Volver a tus gustos y a tu gente ayuda a recuperar la claridad sobre quién eres.',
        'Si hubo violencia, si aparecen ideas de no querer vivir o si tomas para aguantar, pide ayuda.',
      ],
      sections: [
        {
          heading: 'Por qué duele tanto',
          paragraphs: [
            'Cuando una relación termina no se pierde sólo a una persona. Se pierden planes, costumbres, una casa compartida a veces, amistades en común y una forma de imaginar el futuro. Por eso es un duelo, aunque a veces el entorno no lo trate así.',
            'Duele si te dejaron y también si dejaste. Quien deja puede sentir culpa, alivio y tristeza a la vez. Quien es dejado puede sentir rechazo, enojo y mucha confusión. Todo eso es esperable.',
            'En un estudio que siguió día a día a jóvenes después de una ruptura, la tristeza y el enojo subían y bajaban mucho de un día a otro, y en general se fueron calmando con las semanas (Sbarra y Emery, 2005). Un mal día no quiere decir que vuelves a empezar.',
          ],
        },
        {
          heading: 'Las ganas de escribirle',
          paragraphs: [
            'Durante la relación, esa persona era tu lugar para calmarte. Por eso, cuando estás mal, lo primero que aparecen son ganas de escribirle o de mirar sus redes. Mirar alivia un momento, pero suele traer más preguntas y más ganas.',
            'Un impulso funciona como una ola: sube, llega a un punto y baja, muchas veces en pocos minutos (Bowen y Marlatt, 2009). Esperar diez minutos, nombrar lo que buscas y después decidir ya cambia mucho.',
            'Algunas personas eligen el contacto cero por un tiempo. Otras necesitan un contacto mínimo y práctico, por un trabajo, una mascota o una deuda. No hay una regla: ayuda que el plan lo elijas tú, que sepas para qué y que tenga una fecha para revisarlo.',
          ],
        },
        {
          heading: 'El «por qué» que no se apaga',
          paragraphs: [
            'Es muy común pasar horas preguntándose por qué terminó, qué hubiera pasado si, o qué piensa la otra persona. Eso es rumiar: dar vueltas sin llegar a nada. Suele dejar más triste.',
            'Reflexionar es distinto. Es contar la historia de lo que pasó, mirarla y notar qué entiendes hoy. En un estudio, volver a pensar la ruptura de forma ordenada ayudó a las personas a tener más claro quiénes eran, y eso se asoció a una mejor recuperación (Larson y Sbarra, 2015).',
            'Escribir unos quince minutos sobre lo que pasó y lo que sientes, varios días seguidos, es una forma simple de hacerlo (Pennebaker, 1997). Conviene terminar con algo que te devuelva al presente.',
          ],
        },
        {
          heading: 'Volver a ti',
          paragraphs: [
            'En la pareja, parte de quien eres se mezcla con el otro. Después de una ruptura, muchas personas sienten que no saben bien quiénes son. En unos estudios, esa confusión se asoció a más tristeza (Slotter y colaboradores, 2010).',
            'Ayuda volver a lo tuyo: un gusto, un deporte, una música, una amistad que viste menos. Cuando la relación ya no te dejaba crecer, la ruptura también puede abrir espacio para cosas nuevas (Lewandowski y Bizzoco, 2007). Eso no quita el dolor, pero lo acompaña.',
          ],
        },
        {
          heading: 'Ir y venir',
          paragraphs: [
            'Margaret Stroebe y Henk Schut describieron el duelo como un ir y venir entre mirar la pérdida y ocuparse de la vida. Su modelo nació para el duelo por una muerte, pero ayuda a pensar otras pérdidas (Stroebe y Schut, 1999).',
            'Hay ratos para llorar, escribir o recordar. Y hay ratos para trabajar, ver gente, dormir y armar tu semana. No tienes que elegir uno. Los dos son parte de atravesarlo.',
          ],
        },
        {
          heading: 'Cuando ya tiene otra pareja',
          paragraphs: [
            'Enterarte de que tu ex está con otra persona puede doler como una segunda ruptura. Es común compararte, sentir que perdiste o que te reemplazaron. Pero cada persona hace su duelo a su ritmo, y su nueva relación no dice nada de tu valor.',
            'En esos días ayuda cuidar lo que miras. Silenciar sus redes y las de su nueva pareja te ahorra muchas olas. Si te encuentras buscando fotos o datos, usa la pausa de las ganas de escribirle.',
          ],
        },
        {
          heading: 'Cuándo pedir ayuda',
          paragraphs: [
            'Si en la relación hubo golpes, amenazas, insultos constantes o control de tu celular, tu plata o tus salidas, eso es violencia y no es tu culpa. Puedes llamar a la Línea 144. Si corres peligro, llama al 911.',
            'Si aparecen ideas de no querer vivir, no esperes. Llama al Centro de Asistencia al Suicida, 135 en CABA y GBA o 0800-345-1435 en el resto del país, o usa el botón Ayuda. Si tomas alcohol u otras sustancias para aguantar, la Línea 141 de SEDRONAR te puede orientar.',
            'También vale consultar si pasaron meses y casi no puedes trabajar, dormir o ver gente. Si se separan y tienen hijos en común, mira también la sección sobre separarse cuando hay hijos.',
          ],
        },
      ],
      caveat: {
        title: 'Lo que sabemos y lo que no',
        body: 'Gran parte de la investigación sobre rupturas se hizo con estudiantes universitarios de Estados Unidos, en relaciones de noviazgo. Sirve de orientación, pero cada historia es distinta. No hay una cantidad de días de «contacto cero» probada ni etapas fijas que haya que cumplir. Esta sección no reemplaza una consulta, y no está pensada para trabajar recuerdos de violencia o trauma: eso conviene hacerlo con un profesional.',
      },
      diagram: {
        title: 'Cómo se mantiene la herida abierta',
        nodes: ['Un recuerdo, una canción o una notificación', 'Ganas de escribirle o de mirar sus redes', 'Mirar o escribir', 'Alivio breve', 'Más preguntas y más ganas'],
        caption: 'Esperar a que la ola baje, elegir un plan de contacto y volver a lo tuyo ayudan a cortar el ciclo.',
      },
      related: {
        practices: ['ganas-de-escribirle', 'mi-plan-de-contacto', 'la-historia-de-la-ruptura', 'quien-soy-sin-la-pareja', 'mis-dias-tras-la-ruptura', 'aprender-de-la-relacion', 'surfear-impulso', 'pausa-autocompasion', 'duelo-de-la-separacion'],
        articles: ['separarse-con-hijos', 'rumiacion', 'duelo'],
      },
      references: [SBARRA_EMERY_2005, SLOTTER_2010, LEWANDOWSKI_2007, LARSON_SBARRA_2015, PENNEBAKER_1997, STROEBE_1999, BOWEN_2009, LINEHAN_2015],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'despues-de-la-ruptura',
      title: 'Después de la ruptura',
      subtitle: 'Cuatro semanas para atravesar el final de una relación de pareja',
      description:
        'Aprenderás a esperar a que bajen las ganas de escribirle, elegirás un plan de contacto, escribirás la historia de la ruptura, volverás a tus gustos y a tu gente, y mirarás la relación sin culparte. Sirve si te dejaron o si dejaste. Si hubo violencia o aparecen ideas de no querer vivir, pide ayuda antes de empezar.',
      basis: 'Sbarra y Emery (2005); Slotter, Gardner y Finkel (2010); Larson y Sbarra (2015); Pennebaker (1997); Stroebe y Schut (1999).',
      rhythm: '10 a 15 minutos, 4 o 5 días por semana. La pausa de las ganas, cada vez que haga falta.',
      weeks: [
        {
          title: 'Semana 1 · La ola',
          focus: 'Las ganas de escribirle y el contacto',
          description: 'Leerás por qué duele tanto, practicarás esperar a que baje la ola y armarás tu plan de contacto.',
          practiceIds: ['ganas-de-escribirle', 'mi-plan-de-contacto'],
          articleIds: ['duelo-por-una-ruptura'],
          journalType: 'experimento',
        },
        {
          title: 'Semana 2 · La historia',
          focus: 'Del «por qué» a la reflexión',
          description: 'Escribirás sobre la ruptura tres o cuatro días seguidos, con un cierre que te devuelve al presente.',
          practiceIds: ['la-historia-de-la-ruptura', 'pausa-autocompasion'],
          articleIds: [],
          journalType: 'escritura-expresiva',
        },
        {
          title: 'Semana 3 · Volver a ti',
          focus: 'Tus días, tus gustos y tu gente',
          description: 'Ordenarás las noches, los fines de semana y las fechas difíciles, y retomarás una actividad y una persona.',
          practiceIds: ['mis-dias-tras-la-ruptura', 'quien-soy-sin-la-pareja'],
          articleIds: [],
          journalType: 'activacion',
        },
        {
          title: 'Semana 4 · Lo que aprendí',
          focus: 'Aprender sin culparte',
          description: 'Mirarás la relación con curiosidad y amabilidad, y elegirás qué quieres cuidar en tus próximos vínculos.',
          practiceIds: ['aprender-de-la-relacion'],
          articleIds: [],
          journalType: 'carta-compasiva',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-ganas-de-escribirle',
      title: 'Las ganas de escribirle',
      subtitle: 'Qué hacer con el impulso de escribirle o mirar sus redes.',
      slides: [
        { heading: 'Es normal', text: 'Después de una ruptura, es muy común tener ganas de escribirle o de mirar sus redes. Esa persona era tu lugar para calmarte.' },
        { heading: 'Una ola', text: 'Las ganas suben, llegan a un punto y bajan. Muchas veces pasa en pocos minutos, si no las alimentas.' },
        { heading: 'Mirar alivia poco', text: 'Ver sus fotos o releer chats alivia un rato. Después suelen venir más preguntas y más ganas.' },
        { heading: 'Diez minutos', text: 'Deja el celular. Nombra lo que buscas. Espera diez minutos. Después decides, con más calma.' },
        { heading: 'Tu plan', text: 'El contacto cero es una opción, no una regla. Elige el contacto que te cuide y ponle una fecha para revisarlo.' },
      ],
      related: { practices: ['ganas-de-escribirle', 'mi-plan-de-contacto'], articles: ['duelo-por-una-ruptura'] },
      references: [BOWEN_2009, LINEHAN_2015],
    },
    {
      id: 'pildora-el-por-que-de-la-ruptura',
      title: '¿Por qué terminó?',
      subtitle: 'Rumiar no es lo mismo que reflexionar.',
      slides: [
        { heading: 'La pregunta', text: 'Es común pasar horas pensando por qué terminó. O qué hubiera pasado si hacías otra cosa.' },
        { heading: 'Rumiar', text: 'Rumiar es dar vueltas a la misma pregunta sin llegar a nada. Suele dejarte más triste.' },
        { heading: 'Reflexionar', text: 'Reflexionar es contar la historia, mirarla y notar qué entiendes hoy. Eso ayuda a saber mejor quién eres.' },
        { heading: 'Escribir', text: 'Escribe quince minutos sobre lo que pasó y lo que sientes. Hazlo tres o cuatro días. Termina con algo del presente.' },
        { heading: 'Sin todas las respuestas', text: 'Puede que algunas preguntas no tengan respuesta. Puedes seguir adelante igual.' },
      ],
      related: { practices: ['la-historia-de-la-ruptura', 'aprender-de-la-relacion'], articles: ['duelo-por-una-ruptura', 'rumiacion'] },
      references: [LARSON_SBARRA_2015, PENNEBAKER_1997],
    },
    {
      id: 'pildora-quien-soy-sin-ti',
      title: '¿Quién soy sin ti?',
      subtitle: 'Volver a lo tuyo después de una ruptura.',
      slides: [
        { heading: 'Una parte se mezcla', text: 'En la pareja compartes amigos, gustos y planes. Parte de quien eres se mezcla con la otra persona.' },
        { heading: 'La confusión', text: 'Después de una ruptura, muchas personas no saben bien quiénes son. Esa confusión se asocia a más tristeza.' },
        { heading: 'Lo que dejaste', text: 'Piensa qué dejaste de hacer y a quién dejaste de ver. Un deporte, una música, una amiga, un primo.' },
        { heading: 'Un paso', text: 'Elige una cosa y una persona. Escríbele hoy. Ponle día y hora a esa actividad.' },
        { heading: 'También crecer', text: 'Si la relación ya no te dejaba crecer, terminarla puede abrir espacio. El dolor y lo nuevo pueden convivir.' },
      ],
      related: { practices: ['quien-soy-sin-la-pareja', 'mis-dias-tras-la-ruptura'], articles: ['duelo-por-una-ruptura'] },
      references: [SLOTTER_2010, LEWANDOWSKI_2007],
    },
    {
      id: 'pildora-ya-tiene-otra-pareja',
      title: 'Ya está con otra persona',
      subtitle: 'Cuando tu ex tiene pareja nueva.',
      slides: [
        { heading: 'Otra vez duele', text: 'Enterarte de que tu ex está con alguien puede doler como una segunda ruptura. Es muy común.' },
        { heading: 'No dice nada de ti', text: 'Cada persona hace su duelo a su ritmo. Su nueva relación no mide tu valor.' },
        { heading: 'Comparar', text: 'Es fácil compararte con la nueva pareja. Si lo notas, dite: «Estoy comparando». Y cierra la aplicación.' },
        { heading: 'Cuida lo que miras', text: 'Silencia sus redes y las de su pareja por un tiempo. Te ahorras muchas olas.' },
        { heading: 'Pide ayuda', text: 'Si aparecen ideas de no querer vivir, llama al 135 o al 0800-345-1435, o usa el botón Ayuda.' },
      ],
      related: { practices: ['ganas-de-escribirle', 'mi-plan-de-contacto', 'pausa-autocompasion'], articles: ['duelo-por-una-ruptura'] },
      references: [SBARRA_EMERY_2005, STROEBE_1999],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'contacto-cero', term: 'Contacto cero', definition: 'Decidir no escribir, no llamar ni mirar las redes de tu ex durante un tiempo. Es una opción para cuidarte, no una regla.', practiceId: 'mi-plan-de-contacto' },
    { id: 'impulso-de-contacto', term: 'Impulso de contacto', definition: 'Las ganas fuertes de escribirle a tu ex o de mirar sus redes. Suben y bajan como una ola si no las alimentas.', practiceId: 'ganas-de-escribirle' },
    { id: 'claridad-del-autoconcepto', term: 'Claridad del autoconcepto', definition: 'Qué tan claro tienes quién eres. Suele bajar después de una ruptura y se recupera al volver a lo propio.', articleId: 'duelo-por-una-ruptura' },
    { id: 'crecimiento-tras-la-ruptura', term: 'Crecimiento tras la ruptura', definition: 'Cambios positivos que algunas personas notan después de terminar una relación, como volver a sus gustos o conocerse mejor.', practiceId: 'quien-soy-sin-la-pareja' },
  ],
};
