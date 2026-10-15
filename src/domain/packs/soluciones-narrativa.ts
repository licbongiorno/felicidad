import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Terapias breves e integrativas: terapia centrada en soluciones (Steve de Shazer, Insoo
 * Kim Berg), terapia narrativa (Michael White, David Epston) y entrevista motivacional
 * autoaplicada (William Miller, Stephen Rollnick).
 *
 * Las tres nacieron como conversaciones con un terapeuta. Aquí se ofrecen como preguntas
 * para hacerse a uno mismo. Esa versión autoguiada no se ha probado de forma aislada, por
 * eso las prácticas declaran evidencia preliminar aunque las terapias tengan más respaldo.
 */

// ------------------------------------------------------------ referencias
const DE_SHAZER_1985: Reference = { citation: 'de Shazer, S. (1985). Keys to solution in brief therapy. Norton.' };
const DE_SHAZER_1988: Reference = { citation: 'de Shazer, S. (1988). Clues: Investigating solutions in brief therapy. Norton.' };
const DE_SHAZER_1986: Reference = {
  citation:
    'de Shazer, S., Berg, I. K., Lipchik, E., Nunnally, E., Molnar, A., Gingerich, W., & Weiner-Davis, M. (1986). Brief therapy: Focused solution development. Family Process, 25(2), 207–221.',
  doi: '10.1111/j.1545-5300.1986.00207.x',
};
const DE_JONG_2013: Reference = { citation: 'De Jong, P., & Berg, I. K. (2013). Interviewing for solutions (4.ª ed.). Brooks/Cole.' };
const BERG_1992: Reference = { citation: 'Berg, I. K., & Miller, S. D. (1992). Working with the problem drinker: A solution-focused approach. Norton.' };
const KIM_2008: Reference = {
  citation: 'Kim, J. S. (2008). Examining the effectiveness of solution-focused brief therapy: A meta-analysis. Research on Social Work Practice, 18(2), 107–116.',
  doi: '10.1177/1049731507307807',
};
const GINGERICH_2013: Reference = {
  citation:
    'Gingerich, W. J., & Peterson, L. T. (2013). Effectiveness of solution-focused brief therapy: A systematic qualitative review of controlled outcome studies. Research on Social Work Practice, 23(3), 266–283.',
  doi: '10.1177/1049731512470859',
};
const LOCKE_2002: Reference = {
  citation: 'Locke, E. A., & Latham, G. P. (2002). Building a practically useful theory of goal setting and task motivation: A 35-year odyssey. American Psychologist, 57(9), 705–717.',
  doi: '10.1037/0003-066X.57.9.705',
};
const GOLLWITZER_1999: Reference = {
  citation: 'Gollwitzer, P. M. (1999). Implementation intentions: Strong effects of simple plans. American Psychologist, 54(7), 493–503.',
  doi: '10.1037/0003-066X.54.7.493',
};
const WHITE_1990: Reference = { citation: 'White, M., & Epston, D. (1990/1993). Medios narrativos para fines terapéuticos. Paidós.' };
const WHITE_2007: Reference = { citation: 'White, M. (2007). Maps of narrative practice. Norton.' };
const MORGAN_2000: Reference = { citation: 'Morgan, A. (2000). What is narrative therapy? An easy-to-read introduction. Dulwich Centre Publications.' };
const VROMANS_2011: Reference = {
  citation:
    'Vromans, L. P., & Schweitzer, R. D. (2011). Narrative therapy for adults with major depressive disorder: Improved symptom and interpersonal outcomes. Psychotherapy Research, 21(1), 4–15.',
  doi: '10.1080/10503301003591792',
};
const ADLER_2012: Reference = {
  citation:
    'Adler, J. M. (2012). Living into the story: Agency and coherence in a longitudinal study of narrative identity development and mental health over the course of psychotherapy. Journal of Personality and Social Psychology, 102(2), 367–389.',
  doi: '10.1037/a0025289',
};
const MILLER_2013: Reference = { citation: 'Miller, W. R., & Rollnick, S. (2013/2015). La entrevista motivacional: ayudar a las personas a cambiar (3.ª ed.). Paidós.' };
const LUNDAHL_2010: Reference = {
  citation:
    'Lundahl, B. W., Kunz, C., Brownell, C., Tollefson, D., & Burke, B. L. (2010). A meta-analysis of motivational interviewing: Twenty-five years of empirical studies. Research on Social Work Practice, 20(2), 137–160.',
  doi: '10.1177/1049731509347850',
};
const AMRHEIN_2003: Reference = {
  citation:
    'Amrhein, P. C., Miller, W. R., Yahne, C. E., Palmer, M., & Fulcher, L. (2003). Client commitment language during motivational interviewing predicts drug use outcomes. Journal of Consulting and Clinical Psychology, 71(5), 862–878.',
  doi: '10.1037/0022-006X.71.5.862',
};
const JANIS_1977: Reference = { citation: 'Janis, I. L., & Mann, L. (1977). Decision making: A psychological analysis of conflict, choice, and commitment. Free Press.' };
const ROLLNICK_1999: Reference = { citation: 'Rollnick, S., Mason, P., & Butler, C. (1999). Health behavior change: A guide for practitioners. Churchill Livingstone.' };
const PROCHASKA_1983: Reference = {
  citation: 'Prochaska, J. O., & DiClemente, C. C. (1983). Stages and processes of self-change of smoking: Toward an integrative model of change. Journal of Consulting and Clinical Psychology, 51(3), 390–395.',
  doi: '10.1037/0022-006X.51.3.390',
};

export const SOLUCIONES_NARRATIVA_PACK: ContentPack = {
  id: 'soluciones-narrativa',

  // ============================================================ prácticas
  practices: [
    // ------------------------------------------------------------ centrada en soluciones
    {
      id: 'pregunta-milagro',
      title: 'La pregunta milagro',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Imaginar el día después de que el problema se resolvió y buscar la primera señal pequeña de ese día.',
      mechanism: 'Describir con detalle cómo sería la vida sin el problema convierte un deseo vago en señales concretas que ya se pueden empezar a hacer.',
      evidenceLevel: 'preliminar',
      evidence: [DE_SHAZER_1988, DE_JONG_2013, KIM_2008],
      howItWorks: [
        'Steve de Shazer e Insoo Kim Berg crearon la terapia breve centrada en soluciones en Milwaukee, en los años ochenta. Notaron algo simple: hablar mucho del problema no siempre ayuda a salir de él. A veces sirve más describir cómo sería la vida cuando el problema ya no esté.',
        'La pregunta milagro pide imaginar que, mientras duermes, ocurre un milagro y el problema se resuelve. Como no lo sabes, al despertar tienes que descubrirlo por pequeñas señales. Esas señales son la clave: suelen ser cosas que ya puedes hacer, al menos un poco.',
        'La terapia centrada en soluciones tiene apoyo moderado en metaanálisis, con efectos pequeños a medianos (Kim, 2008). La versión autoguiada que te proponemos aquí no se ha estudiado por separado.',
      ],
      tips: [
        'Busca señales que se vean desde afuera: qué harías, qué dirías, qué notaría otra persona.',
        'Describe lo que habría, no lo que faltaría. «Me levanto con ganas» sirve más que «no estoy triste».',
        'No busques una solución mágica. Busca la señal más pequeña del día del milagro.',
      ],
      obstacles: [
        { q: 'Me parece una pregunta infantil.', a: 'Es normal sentirlo al principio. Tómala como un juego de imaginación con un fin práctico: encontrar detalles que puedes empezar a probar.' },
        { q: 'Mi problema no se puede resolver.', a: 'Algunas cosas no cambian, como una pérdida. Entonces pregúntate: ¿cómo sería un día en que lo llevo un poco mejor? Eso sí suele tener señales.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Siéntate con comodidad y respira despacio tres veces. Piensa en el problema que hoy te preocupa.', durationSec: 40, kind: 'breath' },
        { title: 'El milagro', instruction: 'Imagina que esta noche, mientras duermes, ocurre un milagro. El problema se resuelve. Pero no lo sabes, porque dormías.', durationSec: 45, kind: 'instruction' },
        { title: 'Al despertar', instruction: 'Mañana te despiertas. ¿Cuál es la primera cosa pequeña que te haría pensar que algo cambió?', durationSec: 60, kind: 'reflection' },
        { title: 'Qué haces distinto', instruction: '¿Qué haces ese día que hoy no haces? Piensa en gestos, palabras y horarios concretos.', durationSec: 60, kind: 'reflection' },
        { title: 'Qué notan los demás', instruction: '¿Quién se daría cuenta primero del cambio? ¿Qué vería en ti? ¿Qué haría distinto esa persona?', durationSec: 60, kind: 'reflection' },
        { title: 'Ya pasa un poco', instruction: '¿Alguna parte de ese día ya ocurre, aunque sea poco? Recuerda la última vez que pasó.', durationSec: 60, kind: 'reflection' },
        { title: 'Una señal para mañana', instruction: 'Elige una sola señal pequeña y decide hacerla mañana. Por ejemplo: «Desayuno sentado y sin el teléfono».', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira y anota la señal que elegiste. Mañana a la noche mira qué pasó.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'buscar-excepciones',
      title: 'Buscar las excepciones',
      family: 'deconstructive',
      skills: ['resilience', 'attention'],
      summary: 'Encontrar los momentos en que el problema fue más leve o no apareció, y ver qué hiciste distinto.',
      mechanism: 'Las excepciones muestran que el problema no está siempre igual. Lo que funcionó en esos momentos es una solución que ya existe.',
      evidenceLevel: 'preliminar',
      evidence: [DE_SHAZER_1985, DE_SHAZER_1986, DE_JONG_2013],
      howItWorks: [
        'Cuando un problema pesa, parece que está siempre. De Shazer propuso mirar los momentos en que no estuvo o fue más leve. A esos momentos los llamó «excepciones».',
        'Las excepciones guardan pistas: dónde estabas, con quién, qué hiciste antes. La idea central es sencilla: si algo funciona, haz más de eso. Si no funciona, prueba algo diferente (de Shazer, 1985).',
        'Esta mirada también ayuda a desarmar la idea de «siempre me pasa». Ver las excepciones no niega el problema, pero muestra que tiene grietas.',
      ],
      tips: [
        'Una excepción puede ser pequeña: diez minutos mejores ya cuentan.',
        'Pregunta «¿cómo lo hiciste?», no solo «¿qué pasó?». Así ves tu parte en la excepción.',
        'Anota las excepciones durante una semana. Suelen aparecer más de las que crees.',
      ],
      obstacles: [
        { q: 'No encuentro ninguna excepción.', a: 'Busca momentos en que fue un poco menos fuerte, no ausente. O piensa en cómo hiciste para que no fuera peor.' },
        { q: 'La excepción fue suerte, no fue mérito mío.', a: 'Puede haber suerte. Igual pregúntate qué hiciste tú en ese momento. A veces es algo pequeño que pasa sin que lo notes.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en un problema que se repite en tu vida.', durationSec: 30, kind: 'breath' },
        { title: 'Una vez distinta', instruction: 'Recuerda una vez reciente en que ese problema no apareció o fue más leve. Tómate tu tiempo.', durationSec: 60, kind: 'reflection' },
        { title: 'Dónde y con quién', instruction: '¿Dónde estabas? ¿Con quién? ¿Qué día y a qué hora era?', durationSec: 45, kind: 'reflection' },
        { title: 'Qué hiciste', instruction: '¿Qué hiciste distinto esa vez? Piensa también en lo que hiciste antes y en lo que dejaste de hacer.', durationSec: 60, kind: 'reflection' },
        { title: 'Cómo lo hiciste', instruction: 'Pregúntate: «¿Cómo lo logré?». Nota qué parte de esa excepción dependió de ti.', durationSec: 45, kind: 'reflection' },
        { title: 'Hacer más de eso', instruction: 'Elige una cosa de esa excepción que puedas repetir esta semana. Hazla pequeña y concreta.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira y anota la excepción y lo que vas a repetir.', durationSec: 25, kind: 'breath' },
      ],
    },
    {
      id: 'escala-un-punto-mas',
      title: 'Escala: un punto más',
      family: 'attentional',
      skills: ['resilience'],
      summary: 'Ubicarte del 0 al 10 y buscar qué te trajo hasta ahí y qué sería un punto más.',
      mechanism: 'La escala convierte un «estoy mal» en un número con historia. Mirar lo que ya tienes y un paso chico hacia arriba da dirección sin abrumar.',
      evidenceLevel: 'preliminar',
      evidence: [DE_SHAZER_1988, DE_JONG_2013],
      micro: true,
      howItWorks: [
        'Las preguntas de escala son una herramienta típica de la terapia centrada en soluciones. Piden ubicarse del 0 al 10, donde 10 es el día del milagro y 0 lo peor.',
        'Lo importante no es el número. Es preguntar por qué estás en ese número y no en uno menor. Esa pregunta saca a la luz lo que ya te ayuda. Luego basta pensar en un solo punto más, no en llegar a 10.',
      ],
      tips: [
        'Si estás en 0 o en 1, pregúntate cómo haces para seguir adelante. Eso también es un recurso.',
        'Un punto más es un paso pequeño, no un gran cambio.',
        'Repite la escala cada pocos días y anota el número. Verás si hay avance.',
      ],
      obstacles: [{ q: 'Me puse un número bajo y me sentí peor.', a: 'Un número bajo es solo una foto de hoy. Quédate con la segunda pregunta: ¿qué impide que sea todavía más bajo? Ahí hay fuerza.' }],
      steps: [
        { title: 'Tu número', instruction: 'Piensa en un tema de tu vida. Del 0 al 10, donde 10 es como quieres que esté, ¿dónde estás hoy?', durationSec: 30, kind: 'reflection' },
        { title: 'Por qué no menos', instruction: '¿Por qué ese número y no uno más bajo? ¿Qué ya está ayudando?', durationSec: 40, kind: 'reflection' },
        { title: 'Un punto más', instruction: 'Imagina que subes un solo punto. ¿Qué sería distinto? ¿Qué notarías?', durationSec: 40, kind: 'reflection' },
        { title: 'El paso', instruction: 'Elige una acción pequeña que te acerque a ese punto más. Decide cuándo hacerla.', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'meta-bien-formada',
      title: 'Una meta bien formada',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Pasar de «quiero estar mejor» a una meta tuya, concreta, en positivo y con un primer paso.',
      mechanism: 'Las metas claras y cercanas orientan la atención y el esfuerzo. Atar el primer paso a un momento concreto facilita empezar.',
      evidenceLevel: 'moderada',
      evidence: [DE_JONG_2013, BERG_1992, LOCKE_2002, GOLLWITZER_1999],
      howItWorks: [
        'Insoo Kim Berg describió cómo es una meta que ayuda: es importante para ti, es pequeña, se dice en concreto, habla de lo que va a haber y no de lo que va a faltar, y tiene un comienzo claro (Berg y Miller, 1992).',
        'La investigación sobre metas apoya la idea: las metas específicas guían mejor la conducta que las vagas (Locke y Latham, 2002). Y decidir de antemano cuándo y dónde dar el primer paso aumenta la probabilidad de hacerlo (Gollwitzer, 1999).',
      ],
      tips: [
        'Si la meta depende de otra persona, cámbiala por lo que tú puedes hacer.',
        'Piensa en el comienzo, no en el final. ¿Cuál es la primera señal de que vas en camino?',
        'Una buena meta suele dar un poco de ganas al leerla. Si da agobio, achícala.',
      ],
      obstacles: [
        { q: 'Mi meta es que el otro cambie.', a: 'Es muy humano desearlo. Pregúntate qué harías tú distinto si el otro cambiara. Esa parte sí está en tus manos.' },
        { q: 'Escribo metas y después no las cumplo.', a: 'Prueba con una meta más pequeña y con un momento fijo: «Si es lunes después de cenar, entonces camino diez minutos».' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio y piensa en algo que quieres que cambie en tu vida.', durationSec: 30, kind: 'breath' },
        { title: 'Decirlo en positivo', instruction: 'Escribe lo que quieres en lugar del problema. Di lo que va a haber, no lo que va a faltar.', durationSec: 60, kind: 'reflection' },
        { title: 'Que sea tuya', instruction: 'Revisa si la meta depende de ti. Si depende de otra persona, cámbiala por lo que tú puedes hacer.', durationSec: 45, kind: 'reflection' },
        { title: 'Hacerla concreta', instruction: '¿Cómo se vería desde afuera? Escribe qué harías, dónde y con quién.', durationSec: 60, kind: 'reflection' },
        { title: 'Hacerla pequeña', instruction: 'Achica la meta hasta que sientas que es posible esta semana.', durationSec: 45, kind: 'reflection' },
        { title: 'El primer paso', instruction: 'Escribe tu primer paso así: «Si es tal día y tal hora, entonces hago esto».', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Lee la meta en voz baja. Nota si te da un poco de ganas. Si te agobia, achícala más.', durationSec: 30, kind: 'breath' },
      ],
    },

    // ------------------------------------------------------------ narrativa
    {
      id: 'externalizar-el-problema',
      title: 'Externalizar el problema',
      family: 'deconstructive',
      skills: ['resilience', 'compassion'],
      summary: 'Darle un nombre al problema y mirarlo como algo que te afecta, no como algo que eres.',
      mechanism: 'Separar a la persona del problema baja la culpa y la vergüenza, y deja ver cómo actúa el problema y cuándo le haces frente.',
      evidenceLevel: 'preliminar',
      evidence: [WHITE_1990, WHITE_2007, MORGAN_2000, VROMANS_2011],
      cautions:
        'Esta práctica no busca restar importancia al malestar. Si el problema incluye ideas de hacerte daño, violencia o consumo que no puedes controlar, no lo trabajes a solas: busca ayuda profesional. Si estás en peligro, usa los recursos de crisis de la app.',
      howItWorks: [
        'Michael White y David Epston crearon la terapia narrativa en Australia y Nueva Zelanda. Una de sus ideas más conocidas es esta: «la persona no es el problema; el problema es el problema» (paráfrasis de White y Epston, 1990).',
        'Cuando decimos «soy ansioso» o «soy un desastre», el problema se mete en la identidad. Externalizar es hablar de él como de algo aparte, con su propio nombre: «la Preocupación», «el Gris», «la Voz que exige». Así se puede observar qué hace, qué te pide y cuándo pierde fuerza.',
        'Un estudio pequeño con adultos con depresión encontró mejoras tras la terapia narrativa (Vromans y Schweitzer, 2011). La evidencia todavía es escasa: tómala como una forma útil de mirar, no como un tratamiento.',
      ],
      tips: [
        'Elige un nombre que te resulte tuyo, con algo de humor si te sirve.',
        'No hace falta pelear con el problema. A veces basta con conocerlo mejor.',
        'Usa el nombre en tu diario durante una semana: «hoy la Preocupación apareció en el trabajo».',
      ],
      obstacles: [
        { q: 'Siento que así me lavo las manos.', a: 'Externalizar no quita responsabilidad. Te deja ver tu relación con el problema y elegir qué hacer. Muchas personas sienten más poder de acción, no menos.' },
        { q: 'No sé qué nombre ponerle.', a: 'Usa lo primero que aparezca. Puede ser una palabra, un color o una imagen. El nombre puede cambiar después.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio y piensa en un problema que te acompaña hace tiempo. Elige uno de intensidad media.', durationSec: 40, kind: 'breath' },
        { title: 'Ponerle nombre', instruction: 'Si ese problema tuviera un nombre propio, ¿cuál sería? Escríbelo con mayúscula, como un personaje.', durationSec: 60, kind: 'reflection' },
        { title: 'Cómo actúa', instruction: '¿Cuándo suele aparecer? ¿Qué te dice? ¿Qué te pide que hagas o que evites?', durationSec: 75, kind: 'reflection' },
        { title: 'Sus efectos', instruction: '¿Qué te quita este problema? Piensa en tu ánimo, tus vínculos, tu trabajo y tus planes.', durationSec: 60, kind: 'reflection' },
        { title: 'Cuando pierde', instruction: 'Recuerda una vez en que no le hiciste caso o tuvo menos fuerza. ¿Qué hiciste tú?', durationSec: 75, kind: 'reflection' },
        { title: 'Tu postura', instruction: '¿Estás de acuerdo con lo que el problema hace en tu vida? ¿Por qué sí o por qué no?', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira y dite: «Esto me pasa, pero no soy esto». Vuelve a tu día.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'historia-alternativa',
      title: 'Otra historia de ti',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Unir momentos que no encajan con la historia del problema y escribir una historia alternativa, con un testigo que la reconozca.',
      mechanism: 'Las historias que nos contamos ordenan lo que recordamos. Juntar los «momentos brillantes» y darles un testigo fortalece una identidad preferida.',
      evidenceLevel: 'preliminar',
      evidence: [WHITE_1990, WHITE_2007, ADLER_2012],
      cautions:
        'Esta práctica mira la propia historia. Si al hacerlo aparecen recuerdos dolorosos o muy intensos, detente y vuelve al presente. Esos recuerdos se trabajan mejor con un profesional.',
      howItWorks: [
        'En la terapia narrativa, la historia dominante es la que el problema cuenta de ti: «siempre fallo», «nunca soy suficiente». Esa historia deja afuera muchos hechos que no encajan. White los llamó «acontecimientos extraordinarios» o momentos brillantes.',
        'La re-autoría consiste en juntar esos momentos y preguntar qué dicen de ti: qué valoras, qué te importa, qué sabes hacer. Así nace una historia alternativa. Para que se sostenga, White invitaba a «testigos externos»: personas que escuchan y dicen qué les resonó.',
        'Un estudio que siguió a personas durante su terapia encontró que, cuando sus relatos ganaban sentido de agencia, su bienestar mejoraba después (Adler, 2012).',
      ],
      tips: [
        'Busca hechos, no cualidades en abstracto. «Ese día pedí ayuda» vale más que «soy fuerte».',
        'Elige como testigo a alguien que te quiera bien y sepa escuchar.',
        'Ponle un título a la historia alternativa. Te ayuda a recordarla.',
      ],
      obstacles: [
        { q: 'Siento que me miento a mí mismo.', a: 'No se trata de inventar. Solo se usan hechos reales que la historia del problema dejaba afuera.' },
        { q: 'No tengo a quién contárselo.', a: 'Puedes imaginar a una persona que te respeta, viva o no, y escribir qué te diría. También puedes llevarlo a tu terapeuta.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio y nota tu cuerpo en la silla. Estás aquí, a salvo, en el presente.', durationSec: 40, kind: 'breath' },
        { title: 'La historia del problema', instruction: 'Escribe en una frase lo que el problema dice de ti. Por ejemplo: «Nunca termino nada».', durationSec: 45, kind: 'reflection' },
        { title: 'Momentos brillantes', instruction: 'Busca tres momentos reales que no encajan con esa frase. Pueden ser pequeños o antiguos.', durationSec: 90, kind: 'reflection' },
        { title: 'Qué dicen de ti', instruction: 'Mira esos tres momentos juntos. ¿Qué dicen de lo que valoras y de lo que sabes hacer?', durationSec: 75, kind: 'reflection' },
        { title: 'Un título', instruction: 'Escribe la historia alternativa en dos o tres frases. Ponle un título que te guste.', durationSec: 75, kind: 'reflection' },
        { title: 'Un testigo', instruction: 'Piensa en alguien que te conoce y te respeta. ¿Qué diría al escuchar esta historia? ¿Qué le resonaría?', durationSec: 60, kind: 'reflection' },
        { title: 'Un paso en la historia', instruction: '¿Qué podrías hacer esta semana que pertenezca a esta nueva historia? Elige algo pequeño.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira y lee el título en voz baja. Vuelve al presente.', durationSec: 30, kind: 'breath' },
      ],
    },

    // ------------------------------------------------------------ entrevista motivacional
    {
      id: 'balance-del-cambio',
      title: 'Balance del cambio',
      family: 'deconstructive',
      skills: ['resilience', 'attention'],
      summary: 'Mirar con honestidad las dos caras de la ambivalencia: lo bueno de seguir igual y lo bueno de cambiar.',
      mechanism: 'Reconocer lo que el hábito te da baja la defensa. Escuchar tus propias razones para cambiar, con tus palabras, fortalece la decisión.',
      evidenceLevel: 'preliminar',
      evidence: [MILLER_2013, JANIS_1977, AMRHEIN_2003, LUNDAHL_2010],
      howItWorks: [
        'La entrevista motivacional, de William Miller y Stephen Rollnick, parte de una idea: querer y no querer cambiar al mismo tiempo es normal. A eso se lo llama ambivalencia. No es falta de voluntad, es una etapa del cambio.',
        'Cuando alguien nos empuja a cambiar, solemos defender el lado contrario. Por eso aquí empiezas por lo bueno de seguir igual. Después miras lo que no te gusta de seguir así y lo que ganarías al cambiar. Las razones que salen de tu boca pesan más que las que te dan otros (Amrhein et al., 2003).',
        'La entrevista motivacional tiene buen respaldo cuando la guía un profesional (Lundahl et al., 2010). Usarla a solas es una adaptación sin estudios propios.',
      ],
      tips: [
        'Mira con honestidad lo bueno de no cambiar. Si no lo nombras, sigue actuando en silencio.',
        'Escribe las razones con tus palabras, como se las dirías a un amigo.',
        'No tienes que decidir hoy. Basta con ver mejor las dos caras.',
      ],
      obstacles: [
        { q: 'Me salen más razones para no cambiar.', a: 'Está bien que salgan. No se trata de contar cuántas hay, sino de cuánto pesa cada una para ti.' },
        { q: 'Ya sé todo esto y no cambio.', a: 'Saber no siempre alcanza. Prueba a leer en voz alta tu razón más fuerte para cambiar. Oírla en tu voz suele moverte más que pensarla.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en un hábito o una situación que a veces quieres cambiar y a veces no.', durationSec: 35, kind: 'breath' },
        { title: 'Lo bueno de seguir igual', instruction: '¿Qué te da seguir como estás? Escribe dos o tres cosas, sin juzgarlas.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que no te gusta', instruction: '¿Qué te cuesta o te preocupa de seguir así? Piensa en ti y en la gente que te importa.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo bueno de cambiar', instruction: 'Si cambiaras, ¿qué ganarías? Imagina tu vida dentro de un año con ese cambio.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que importa', instruction: '¿Con qué valor tuyo tiene que ver este cambio? Escríbelo en una palabra.', durationSec: 45, kind: 'reflection' },
        { title: 'Tu razón más fuerte', instruction: 'Elige tu razón más fuerte para cambiar. Léela en voz alta, despacio.', durationSec: 40, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira. No hace falta decidir ahora. Solo nota hacia dónde se inclina hoy la balanza.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'regla-importancia-confianza',
      title: 'Regla de importancia y confianza',
      family: 'attentional',
      skills: ['resilience'],
      summary: 'Puntuar del 0 al 10 cuánto te importa un cambio y cuánta confianza tienes en lograrlo, y buscar qué te subiría un punto.',
      mechanism: 'Separar la importancia de la confianza muestra qué falta: más razones o más recursos. La pregunta «¿por qué no menos?» hace oír tus propias razones.',
      evidenceLevel: 'preliminar',
      evidence: [ROLLNICK_1999, MILLER_2013],
      micro: true,
      howItWorks: [
        'Stephen Rollnick y sus colegas propusieron dos reglas del 0 al 10. Una mide cuánto te importa un cambio. La otra, cuánta confianza tienes en poder hacerlo.',
        'Si la importancia es baja, conviene explorar las razones. Si la confianza es baja, conviene buscar apoyos y pasos más chicos. La pregunta clave es: «¿Por qué un 4 y no un 2?». La respuesta suele ser una razón tuya para cambiar.',
      ],
      tips: [
        'No preguntes «¿por qué no un 10?». Esa pregunta invita a justificar el no.',
        'Si los dos números son bajos, quizá no es el momento. También es una buena información.',
      ],
      obstacles: [{ q: 'Me importa mucho, pero no confío en lograrlo.', a: 'Es muy común. Piensa en cambios difíciles que ya hiciste antes y en qué te ayudó. Luego busca un paso más pequeño.' }],
      steps: [
        { title: 'Importancia', instruction: 'Piensa en un cambio. Del 0 al 10, ¿cuánto te importa hacerlo ahora?', durationSec: 25, kind: 'reflection' },
        { title: 'Por qué no menos', instruction: '¿Por qué ese número y no uno más bajo? Escucha tus razones.', durationSec: 40, kind: 'reflection' },
        { title: 'Confianza', instruction: 'Del 0 al 10, ¿cuánta confianza tienes en lograrlo si decides hacerlo?', durationSec: 25, kind: 'reflection' },
        { title: 'Qué te ayudó antes', instruction: '¿Qué te da esa confianza? Piensa en algo difícil que ya lograste.', durationSec: 40, kind: 'reflection' },
        { title: 'Un punto más', instruction: '¿Qué te subiría un punto la confianza? Puede ser una ayuda, un dato o un paso más chico.', durationSec: 40, kind: 'reflection' },
      ],
    },
  ],

  // ============================================================ fichas
  meta: {
    'pregunta-milagro': { level: 'iniciacion', approaches: ['soluciones'], module: 'problemas' },
    'buscar-excepciones': { level: 'iniciacion', approaches: ['soluciones'], module: 'pensamientos' },
    'escala-un-punto-mas': { level: 'iniciacion', approaches: ['soluciones'], module: 'problemas' },
    'meta-bien-formada': { level: 'iniciacion', approaches: ['soluciones', 'tcc'], module: 'habitos', prerequisites: ['pregunta-milagro'] },
    'externalizar-el-problema': { level: 'intermedio', approaches: ['narrativa'], module: 'autoconocimiento' },
    'historia-alternativa': { level: 'intermedio', approaches: ['narrativa', 'escritura'], module: 'valores', prerequisites: ['externalizar-el-problema'] },
    'balance-del-cambio': { level: 'iniciacion', approaches: ['motivacional'], module: 'habitos' },
    'regla-importancia-confianza': { level: 'iniciacion', approaches: ['motivacional'], module: 'habitos' },
  },

  // ============================================================ artículos
  articles: [
    {
      id: 'terapia-centrada-en-soluciones',
      title: 'Terapia centrada en soluciones: mirar lo que ya funciona',
      subtitle: 'La propuesta de Steve de Shazer e Insoo Kim Berg: menos tiempo en el problema y más en lo que quieres que pase.',
      category: 'Terapias breves e integrativas',
      readingMin: 7,
      keyPoints: [
        'No hace falta entender a fondo un problema para empezar a salir de él.',
        'Las excepciones, los momentos en que el problema es más leve, guardan pistas de solución.',
        'La pregunta milagro y las escalas del 0 al 10 vuelven concreta la meta.',
        'Si algo funciona, haz más de eso; si no funciona, prueba algo diferente.',
        'Tiene apoyo moderado, con efectos pequeños a medianos y estudios de calidad variable.',
      ],
      sections: [
        {
          heading: 'De dónde viene',
          paragraphs: [
            'La terapia breve centrada en soluciones nació en el Brief Family Therapy Center de Milwaukee, en Estados Unidos, a fines de los años setenta y en los ochenta. Sus creadores fueron Steve de Shazer e Insoo Kim Berg, junto con un equipo de colegas.',
            'Observando muchas sesiones notaron algo curioso. Las personas mejoraban a veces sin que se entendiera del todo el origen de su problema. Lo que más ayudaba era hablar de lo que querían que pasara y de lo que ya hacían bien.',
          ],
        },
        {
          heading: 'Tres ideas centrales',
          paragraphs: [
            'Primera: si algo no está roto, no lo arregles. Segunda: si algo funciona, haz más de eso. Tercera: si algo no funciona, deja de hacerlo y prueba algo diferente. Son reglas simples, pero cambian el foco de la conversación.',
            'El enfoque supone que cada persona ya tiene recursos. El trabajo es encontrarlos y usarlos más. Por eso se pregunta mucho «¿cómo lo hiciste?», una pregunta que pone a la persona como protagonista de sus logros.',
          ],
        },
        {
          heading: 'Las herramientas',
          paragraphs: [
            'La pregunta milagro invita a imaginar el día después de que el problema se resolvió y a buscar sus primeras señales. Las preguntas por excepciones buscan los momentos en que el problema fue más leve. Las escalas del 0 al 10 ayudan a ver dónde estás y cuál sería un punto más.',
            'También se trabaja la meta. Una meta bien formada es importante para la persona, pequeña, concreta, dicha en positivo y con un primer paso claro. La investigación general sobre metas apoya esta idea (Locke y Latham, 2002).',
          ],
        },
        {
          heading: 'Lo que dice la evidencia',
          paragraphs: [
            'Un metaanálisis de 22 estudios encontró efectos pequeños pero positivos, sobre todo en problemas internalizantes como la tristeza o la ansiedad (Kim, 2008). Una revisión de estudios controlados halló que la mayoría mostraba algún beneficio, aunque con diseños de calidad muy diversa (Gingerich y Peterson, 2013).',
            'En resumen: es un enfoque útil y respetuoso, con evidencia moderada. No sustituye tratamientos con más respaldo para problemas graves. Las prácticas de esta app son adaptaciones para hacer a solas y no se han estudiado de forma aislada.',
          ],
        },
      ],
      caveat: {
        title: 'Mirar soluciones no es negar el problema',
        body: 'Este enfoque no pide pensar en positivo ni minimizar lo que duele. Si una pregunta milagro te suena lejana a lo que vives, está bien decirlo. Con un problema grave, lo primero es buscar ayuda profesional.',
      },
      diagram: {
        title: 'El ciclo centrado en soluciones',
        nodes: ['Describir lo que quieres', 'Buscar excepciones', 'Ubicarte en la escala', 'Dar un paso pequeño', 'Notar qué funcionó'],
        caption: 'Cada vuelta suma información: lo que funcionó se repite y lo que no, se cambia.',
      },
      related: {
        practices: ['pregunta-milagro', 'buscar-excepciones', 'escala-un-punto-mas', 'meta-bien-formada', 'resolucion-problemas'],
        articles: ['terapia-narrativa', 'entrevista-motivacional'],
      },
      references: [DE_SHAZER_1985, DE_SHAZER_1988, DE_SHAZER_1986, DE_JONG_2013, KIM_2008, GINGERICH_2013, LOCKE_2002],
    },
    {
      id: 'terapia-narrativa',
      title: 'Terapia narrativa: la persona no es el problema',
      subtitle: 'Michael White y David Epston propusieron separar a la persona de su problema y reescribir las historias que limitan.',
      category: 'Terapias breves e integrativas',
      readingMin: 7,
      keyPoints: [
        'Vivimos según las historias que contamos de nosotros mismos.',
        'Externalizar es hablar del problema como algo aparte, con su propio nombre.',
        'Los momentos que no encajan con la historia del problema abren una historia alternativa.',
        'Los testigos ayudan a que la nueva historia se sostenga.',
        'La evidencia es todavía escasa: estudios pequeños y prometedores.',
      ],
      sections: [
        {
          heading: 'Historias que nos cuentan',
          paragraphs: [
            'Michael White, trabajador social australiano, y David Epston, terapeuta de Nueva Zelanda, desarrollaron la terapia narrativa en los años ochenta. Su libro más conocido se publicó en 1990.',
            'Su punto de partida es que damos sentido a la vida contando historias. Algunas historias nos ayudan. Otras, sobre todo las que se forman alrededor de un problema, dejan afuera muchos hechos y nos achican. Esa es la «historia dominante».',
          ],
        },
        {
          heading: 'Externalizar',
          paragraphs: [
            'La idea más conocida de este enfoque se resume así: la persona no es el problema; el problema es el problema. En lugar de «soy depresivo», se habla de «la Depresión» como algo que llega, presiona y pide cosas.',
            'Esto no quita responsabilidad. Al contrario: al separar el problema de la identidad, baja la vergüenza y se puede ver qué hace el problema, cuándo gana y cuándo pierde. La persona pasa a ser quien decide qué relación quiere tener con él.',
          ],
        },
        {
          heading: 'Re-autoría y testigos',
          paragraphs: [
            'Siempre hay momentos que no encajan con la historia del problema. White los llamó acontecimientos extraordinarios. En la re-autoría, la persona junta esos momentos y se pregunta qué dicen de sus valores y saberes. Así se escribe una historia alternativa.',
            'Para que esa historia tenga raíces, White usaba testigos externos: personas que escuchan y cuentan qué les resonó y qué se llevan. También proponía el «re-membering»: recordar a quienes nos ayudaron a ser quienes somos.',
          ],
        },
        {
          heading: 'Lo que dice la evidencia',
          paragraphs: [
            'Los estudios son pocos y pequeños. Un ensayo abierto con adultos con depresión encontró mejoras en los síntomas y en las relaciones (Vromans y Schweitzer, 2011). La investigación sobre identidad narrativa aporta un apoyo indirecto: cuando los relatos ganan sentido de agencia, el bienestar suele mejorar (Adler, 2012).',
            'Por eso tomamos estas prácticas como formas útiles de mirar la propia historia, con evidencia preliminar. No reemplazan una terapia cuando el malestar es intenso.',
          ],
        },
      ],
      caveat: {
        title: 'Cuidado con los recuerdos difíciles',
        body: 'Mirar la propia historia puede traer recuerdos dolorosos. Si aparecen recuerdos traumáticos, no los trabajes a solas: vuelve al presente y busca acompañamiento profesional.',
      },
      related: {
        practices: ['externalizar-el-problema', 'historia-alternativa', 'linea-de-vida', 'observador'],
        articles: ['terapia-centrada-en-soluciones', 'autoconocimiento', 'sentido-y-valores'],
      },
      references: [WHITE_1990, WHITE_2007, MORGAN_2000, VROMANS_2011, ADLER_2012],
    },
    {
      id: 'entrevista-motivacional',
      title: 'Entrevista motivacional: cuando quieres y no quieres cambiar',
      subtitle: 'William Miller y Stephen Rollnick mostraron que la ambivalencia es normal y que las razones para cambiar pesan más cuando son tuyas.',
      category: 'Terapias breves e integrativas',
      readingMin: 6,
      keyPoints: [
        'Querer y no querer cambiar a la vez es normal: se llama ambivalencia.',
        'Presionar a alguien para que cambie suele aumentar su resistencia.',
        'Las razones que una persona dice con sus palabras predicen mejor el cambio.',
        'Las reglas del 0 al 10 separan cuánto importa un cambio y cuánta confianza hay.',
        'Tiene buen respaldo con un profesional; la versión a solas es una adaptación.',
      ],
      sections: [
        {
          heading: 'Un estilo de conversación',
          paragraphs: [
            'William Miller describió la entrevista motivacional en 1983, a partir de su trabajo con personas con problemas de alcohol. Luego la desarrolló junto con Stephen Rollnick. Hoy se usa en salud, adicciones, deporte y muchos otros campos.',
            'No es una técnica para convencer. Es una forma de conversar que ayuda a la persona a escuchar sus propias razones para cambiar. Se basa en la colaboración, la aceptación y el respeto por la autonomía.',
          ],
        },
        {
          heading: 'La ambivalencia',
          paragraphs: [
            'Casi todo cambio importante trae dos voces: una quiere cambiar y otra quiere seguir igual. Esto no es debilidad. Es la forma habitual en que las personas cambian, por etapas y con idas y vueltas (Prochaska y DiClemente, 1983).',
            'Cuando alguien solo nos da razones para cambiar, solemos defender el otro lado. Por eso la entrevista motivacional empieza reconociendo lo que el hábito da. El balance decisional, que mira ventajas y costos de cada opción, viene de los estudios sobre la toma de decisiones (Janis y Mann, 1977).',
          ],
        },
        {
          heading: 'Escuchar el propio lenguaje de cambio',
          paragraphs: [
            'Miller y Rollnick llaman «lenguaje de cambio» a frases como «quiero», «podría», «tengo razones» o «voy a». Un estudio mostró que la fuerza del compromiso que las personas expresaban al final de la sesión predecía mejor sus resultados (Amrhein et al., 2003).',
            'Las reglas de importancia y confianza son otra herramienta. Del 0 al 10, ¿cuánto te importa? ¿Cuánta confianza tienes? La pregunta «¿por qué no un número más bajo?» hace aparecer tus propias razones.',
          ],
        },
        {
          heading: 'Lo que dice la evidencia',
          paragraphs: [
            'Un metaanálisis de 119 estudios encontró efectos pequeños pero consistentes, sobre todo en consumo de alcohol y otras sustancias y en conductas de salud (Lundahl et al., 2010). Esos estudios evalúan la entrevista con un profesional.',
            'Las prácticas de esta app adaptan sus preguntas para hacerlas a solas. Es una adaptación razonable, pero sin estudios propios. Si el cambio tiene que ver con un consumo que no puedes controlar, busca ayuda profesional.',
          ],
        },
      ],
      diagram: {
        title: 'Del dilema al paso',
        nodes: ['Notar la ambivalencia', 'Mirar las dos caras', 'Escuchar tus razones', 'Medir importancia y confianza', 'Elegir un paso'],
        caption: 'Si el paso no sale, vuelve a mirar: quizá falta confianza, no ganas.',
      },
      related: {
        practices: ['balance-del-cambio', 'regla-importancia-confianza', 'pros-y-contras', 'habito-minimo', 'brujula-valores'],
        articles: ['terapia-centrada-en-soluciones', 'procrastinacion-y-perfeccionismo'],
      },
      references: [MILLER_2013, LUNDAHL_2010, AMRHEIN_2003, JANIS_1977, PROCHASKA_1983, ROLLNICK_1999],
    },
  ],

  // ============================================================ programas
  programs: [
    {
      id: 'del-problema-a-la-solucion',
      title: 'Del problema a la solución',
      subtitle: 'Cuatro semanas para pasar de lo que pesa a lo que quieres construir',
      description:
        'Un recorrido con herramientas de las terapias breves. Empiezas por imaginar lo que quieres y buscar lo que ya funciona. Luego separas el problema de tu identidad, escribes otra historia de ti y terminas con un plan de cambio que nace de tus propias razones.',
      basis: 'de Shazer (1988); White y Epston (1990); Miller y Rollnick (2013).',
      rhythm: '10–15 minutos al día, 4 o 5 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Lo que quieres',
          focus: 'Pregunta milagro y escalas',
          description: 'Describes cómo sería tu vida sin el problema y te ubicas del 0 al 10. Cada día buscas un punto más.',
          practiceIds: ['pregunta-milagro', 'escala-un-punto-mas'],
          articleIds: ['terapia-centrada-en-soluciones'],
          journalType: 'intencion',
        },
        {
          title: 'Semana 2 · Lo que ya funciona',
          focus: 'Excepciones y metas',
          description: 'Buscas los momentos en que el problema fue más leve y conviertes lo que aprendiste en una meta pequeña y concreta.',
          practiceIds: ['buscar-excepciones', 'meta-bien-formada'],
          articleIds: [],
          journalType: 'experimento',
        },
        {
          title: 'Semana 3 · Tú no eres el problema',
          focus: 'Externalizar y re-autoría',
          description: 'Le pones nombre al problema, miras cómo actúa y juntas los momentos que cuentan otra historia de ti.',
          practiceIds: ['externalizar-el-problema', 'historia-alternativa'],
          articleIds: ['terapia-narrativa'],
          journalType: 'patron-repetido',
        },
        {
          title: 'Semana 4 · Tus razones para cambiar',
          focus: 'Ambivalencia, importancia y confianza',
          description: 'Miras las dos caras del cambio, escuchas tus razones y eliges un paso que te suba un punto la confianza.',
          practiceIds: ['balance-del-cambio', 'regla-importancia-confianza'],
          articleIds: ['entrevista-motivacional'],
          journalType: 'valores',
        },
      ],
    },
  ],

  // ============================================================ píldoras
  pills: [
    {
      id: 'pildora-pregunta-milagro',
      title: 'La pregunta milagro',
      subtitle: '¿Cómo sabrías que el problema se fue?',
      slides: [
        { heading: 'Un milagro de noche', text: 'Imagina que esta noche pasa un milagro. El problema se va. Pero tú dormías y no lo sabes.' },
        { heading: 'Las señales', text: 'Mañana te despiertas. ¿Qué es lo primero que notas? ¿Qué haces distinto? Busca cosas chicas que se puedan ver.' },
        { heading: 'Ya pasa un poco', text: 'Muchas veces parte de ese día ya ocurre. Quizá poco, o solo a veces. Ahí hay una pista.' },
        { heading: 'De dónde viene', text: 'La creó la terapia centrada en soluciones. Sus autores fueron Steve de Shazer e Insoo Kim Berg (de Shazer, 1988).' },
        { heading: 'Pruébalo', text: 'Elige una señal pequeña del día del milagro. Hazla mañana y mira qué pasa.' },
      ],
      related: { practices: ['pregunta-milagro'], articles: ['terapia-centrada-en-soluciones'] },
      references: [DE_SHAZER_1988, DE_JONG_2013],
    },
    {
      id: 'pildora-excepciones',
      title: 'El problema tiene grietas',
      subtitle: 'Busca las veces en que no estuvo',
      slides: [
        { heading: 'No siempre', text: 'Un problema que pesa parece estar siempre. Pero casi nunca es así. Hay ratos en que es más leve.' },
        { heading: 'Las excepciones', text: 'A esos ratos se los llama excepciones. Guardan pistas: dónde estabas, con quién y qué hiciste.' },
        { heading: 'La regla', text: 'Si algo funciona, haz más de eso. Si no funciona, prueba algo distinto (de Shazer, 1985).' },
        { heading: 'Tu parte', text: 'Pregúntate: ¿cómo lo hice? Así ves lo que depende de ti. Diez minutos mejores ya cuentan.' },
        { heading: 'Pruébalo', text: 'Esta semana anota cada excepción. Al final, elige una cosa que puedas repetir.' },
      ],
      related: { practices: ['buscar-excepciones', 'escala-un-punto-mas'], articles: ['terapia-centrada-en-soluciones'] },
      references: [DE_SHAZER_1985, DE_JONG_2013],
    },
    {
      id: 'pildora-externalizar',
      title: 'Tú no eres el problema',
      subtitle: 'Ponerle nombre para verlo desde afuera',
      slides: [
        { heading: 'Soy así', text: '«Soy un desastre.» «Soy ansioso.» Cuando hablamos así, el problema se mete en quienes somos.' },
        { heading: 'Un nombre propio', text: 'La terapia narrativa propone darle un nombre al problema. Por ejemplo: la Preocupación o el Gris.' },
        { heading: 'Verlo actuar', text: 'Con un nombre, puedes ver qué hace. ¿Cuándo llega? ¿Qué te pide? ¿Cuándo pierde fuerza?' },
        { heading: 'No es lavarse las manos', text: 'Tú sigues decidiendo. Solo que ahora eliges qué lugar le das. Muchas personas sienten menos culpa y más fuerza.' },
        { heading: 'De dónde viene', text: 'La idea es de Michael White y David Epston (White y Epston, 1990).' },
        { heading: 'Con cuidado', text: 'Si el problema te pone en riesgo, no lo trabajes a solas. Pide ayuda a un profesional.' },
      ],
      related: { practices: ['externalizar-el-problema', 'historia-alternativa'], articles: ['terapia-narrativa'] },
      references: [WHITE_1990, MORGAN_2000],
    },
    {
      id: 'pildora-ambivalencia',
      title: 'Quiero y no quiero',
      subtitle: 'La ambivalencia es parte del cambio',
      slides: [
        { heading: 'Dos voces', text: 'Una parte de ti quiere cambiar. Otra quiere seguir igual. Eso es normal y tiene un nombre: ambivalencia.' },
        { heading: 'El empujón', text: 'Cuando alguien nos empuja a cambiar, solemos defender lo contrario. Nos pasa a todos.' },
        { heading: 'Tus razones', text: 'Las razones que dices con tu voz pesan más que las que te dan otros (Amrhein y otros, 2003).' },
        { heading: 'Del 0 al 10', text: '¿Cuánto te importa el cambio? ¿Por qué ese número y no uno más bajo? Tu respuesta es una razón tuya.' },
        { heading: 'Pruébalo', text: 'Escribe lo bueno de seguir igual y lo bueno de cambiar. Luego lee en voz alta tu razón más fuerte.' },
      ],
      related: { practices: ['balance-del-cambio', 'regla-importancia-confianza'], articles: ['entrevista-motivacional'] },
      references: [MILLER_2013, AMRHEIN_2003],
    },
  ],

  // ============================================================ glosario
  glossary: [
    {
      id: 'pregunta-milagro',
      term: 'Pregunta milagro',
      definition: 'Pregunta de la terapia centrada en soluciones: imaginar que el problema se resolvió durante la noche y describir las primeras señales al despertar. Vuelve concreta la meta.',
      articleId: 'terapia-centrada-en-soluciones',
      practiceId: 'pregunta-milagro',
    },
    {
      id: 'excepciones',
      term: 'Excepciones',
      definition: 'Momentos en que el problema no apareció o fue más leve. En la terapia centrada en soluciones se exploran para descubrir qué funcionó y repetirlo.',
      articleId: 'terapia-centrada-en-soluciones',
      practiceId: 'buscar-excepciones',
    },
    {
      id: 'externalizacion',
      term: 'Externalización',
      definition: 'Técnica de la terapia narrativa que consiste en hablar del problema como algo separado de la persona, con su propio nombre. Baja la culpa y deja ver cómo actúa el problema.',
      articleId: 'terapia-narrativa',
      practiceId: 'externalizar-el-problema',
    },
    {
      id: 're-autoria',
      term: 'Re-autoría',
      definition: 'Proceso de la terapia narrativa en el que se juntan momentos que no encajan con la historia del problema para escribir una historia alternativa y preferida de uno mismo.',
      articleId: 'terapia-narrativa',
      practiceId: 'historia-alternativa',
    },
    {
      id: 'ambivalencia',
      term: 'Ambivalencia',
      definition: 'Querer y no querer cambiar al mismo tiempo. En la entrevista motivacional se considera una parte normal del cambio, no falta de voluntad.',
      articleId: 'entrevista-motivacional',
      practiceId: 'balance-del-cambio',
    },
    {
      id: 'balance-decisional',
      term: 'Balance decisional',
      definition: 'Mirar las ventajas y los costos de seguir igual y de cambiar. Ayuda a ver con claridad la ambivalencia y a notar qué razones pesan más para ti.',
      articleId: 'entrevista-motivacional',
      practiceId: 'balance-del-cambio',
    },
  ],
};
