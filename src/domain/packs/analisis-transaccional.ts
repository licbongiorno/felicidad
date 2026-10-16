import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Análisis transaccional» (Eric Berne y continuadores):
 *  - estados del yo: Padre (crítico y nutricio), Adulto y Niño (libre y adaptado);
 *  - transacciones complementarias, cruzadas y ocultas;
 *  - juegos psicológicos y triángulo dramático de Karpman, con el triángulo del ganador (Choy);
 *  - caricias y economía de caricias (Steiner); impulsores (Kahler) y guion de vida;
 *  - posiciones existenciales («yo estoy bien, tú estás bien»).
 *
 * La investigación sobre el análisis transaccional es escasa y mayormente observacional: se
 * declara en cada ficha y se ofrece como lenguaje para entender interacciones.
 */

const BERNE_1961: Reference = { citation: 'Berne, E. (1961). Transactional analysis in psychotherapy. Grove Press.' };
const BERNE_1964: Reference = { citation: 'Berne, E. (1964). Games people play: The psychology of human relationships. Grove Press.', note: 'Edición en castellano: «Juegos en que participamos».' };
const STEWART_2012: Reference = { citation: 'Stewart, I., & Joines, V. (2012). TA today: A new introduction to transactional analysis (2.ª ed.). Lifespace.' };
const KARPMAN_1968: Reference = { citation: 'Karpman, S. (1968). Fairy tales and script drama analysis. Transactional Analysis Bulletin, 7(26), 39–43.' };
const CHOY_1990: Reference = {
  citation: 'Choy, A. (1990). The winner’s triangle. Transactional Analysis Journal, 20(1), 40–46.',
  doi: '10.1177/036215379002000105',
};
const STEINER_1971: Reference = {
  citation: 'Steiner, C. (1971). The stroke economy. Transactional Analysis Journal, 1(3), 9–15.',
  doi: '10.1177/036215377100100305',
};
const KAHLER_1975: Reference = {
  citation: 'Kahler, T. (1975). Drivers: The key to the process of scripts. Transactional Analysis Journal, 5(3), 280–284.',
  doi: '10.1177/036215377500500318',
};
const HARRIS_1967: Reference = { citation: 'Harris, T. A. (1967). I’m OK—You’re OK. Harper & Row.' };
const OHLSSON_2010: Reference = {
  citation: 'Ohlsson, T. (2010). Scientific evidence base for transactional analysis in the year 2010. International Journal of Transactional Analysis Research, 1(1), 4–29.',
  note: 'Revisión publicada en una revista del propio campo: pocos ensayos controlados y muchos estudios pequeños.',
};

const MARCO = 'Es un lenguaje para entender interacciones, con poca investigación controlada. No lo uses para etiquetar a nadie.';

export const ANALISIS_TRANSACCIONAL_PACK: ContentPack = {
  id: 'analisis-transaccional',

  // ================================================================== prácticas
  practices: [
    {
      id: 'mis-estados-del-yo',
      title: 'Padre, Adulto y Niño en mí',
      family: 'deconstructive',
      skills: ['attention'],
      summary: 'Reconocer desde qué estado del yo hablas en distintos momentos: el Padre que manda o cuida, el Adulto que piensa o el Niño que siente.',
      mechanism: 'Ver qué estado está al mando permite elegir si conviene seguir ahí o pasar al Adulto, que mira los hechos de hoy.',
      evidenceLevel: 'contemplativa',
      evidence: [BERNE_1961, STEWART_2012],
      howItWorks: [
        'Eric Berne propuso que todos tenemos tres estados del yo. El Padre repite lo que aprendimos de los adultos de nuestra infancia: puede criticar y mandar, o cuidar y proteger. El Adulto mira la situación de hoy y piensa. El Niño siente como sentíamos de chicos: puede ser libre y espontáneo, o adaptado y obediente.',
        'Ningún estado es malo. El Niño libre trae alegría y creatividad; el Padre nutricio, cuidado. El problema aparece cuando un estado toma el mando en un momento en que no sirve.',
        MARCO,
      ],
      tips: [
        'Una pista del Padre crítico: «siempre», «nunca», «deberías».',
        'Una pista del Niño adaptado: obedecer o rebelarse por reflejo.',
        'Una pista del Adulto: preguntas, datos, tono calmo.',
      ],
      obstacles: [{ q: 'Siento que casi nunca estoy en el Adulto.', a: 'Le pasa a mucha gente en momentos de tensión. El Adulto se fortalece con práctica, empezando por notar cuándo no está.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio y piensa en tu día de ayer.', durationSec: 30, kind: 'breath' },
        { title: 'El Padre', instruction: '¿Cuándo hablaste como un padre? Para criticar, mandar, cuidar o aconsejar. Anota un ejemplo.', durationSec: 60, kind: 'reflection' },
        { title: 'El Niño', instruction: '¿Cuándo reaccionaste como un chico? Con alegría, con berrinche, obedeciendo o rebelándote.', durationSec: 60, kind: 'reflection' },
        { title: 'El Adulto', instruction: '¿Cuándo miraste la situación con calma y pensaste qué hacer? Anota un ejemplo.', durationSec: 60, kind: 'reflection' },
        { title: 'El que más manda', instruction: '¿Qué estado aparece más en tus momentos difíciles? ¿Con quién?', durationSec: 45, kind: 'reflection' },
        { title: 'Pasar al Adulto', instruction: 'Elige una pregunta para volver al Adulto: «¿Qué está pasando de verdad? ¿Qué quiero lograr?».', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'conversacion-que-se-trabo',
      title: 'La conversación que se trabó',
      family: 'deconstructive',
      skills: ['attention', 'resilience'],
      summary: 'Analizar una conversación que terminó mal: desde qué estado hablaste, desde cuál respondió el otro y dónde se cruzaron.',
      mechanism: 'Las conversaciones se traban cuando la respuesta llega desde un estado distinto del esperado. Verlo permite responder desde el Adulto y destrabar.',
      evidenceLevel: 'contemplativa',
      evidence: [BERNE_1964, STEWART_2012],
      howItWorks: [
        'Berne llamó transacción a cada intercambio. Si pregunto desde el Adulto «¿sabes dónde están las llaves?» y me responden desde el Adulto «en la mesa», la conversación fluye. Es una transacción complementaria.',
        'Si me responden desde el Padre crítico, «siempre perdés todo», la transacción se cruza. La conversación se corta o se vuelve pelea. Hay también transacciones ocultas: lo que se dice dice una cosa, pero el tono transmite otra.',
        'Para destrabar, una opción es volver al Adulto e invitar al otro a hacer lo mismo: «Te pregunto nada más dónde están. ¿Las viste?». ' + MARCO,
      ],
      tips: [
        'Escribe las frases tal cual fueron, con el tono.',
        'No busques culpables: busca dónde se cruzó.',
        'Fíjate también en lo no dicho: miradas, suspiros, silencios.',
      ],
      obstacles: [{ q: 'El otro siempre responde mal.', a: 'Puede pasar. Lo que sí depende de ti es desde dónde respondes después. A veces eso cambia la siguiente vuelta.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en una conversación reciente que terminó mal.', durationSec: 30, kind: 'breath' },
        { title: 'Las frases', instruction: 'Escribe las tres o cuatro frases clave, tal cual se dijeron.', durationSec: 75, kind: 'reflection' },
        { title: 'Tus estados', instruction: 'Al lado de cada frase tuya, anota desde dónde hablaste: Padre, Adulto o Niño.', durationSec: 60, kind: 'reflection' },
        { title: 'Los suyos', instruction: 'Haz lo mismo con las frases del otro. ¿Desde dónde respondió?', durationSec: 60, kind: 'reflection' },
        { title: 'El cruce', instruction: '¿En qué momento se cruzó? ¿Qué esperabas que respondiera y qué respondió?', durationSec: 60, kind: 'reflection' },
        { title: 'Otra respuesta', instruction: 'Escribe cómo podrías responder desde el Adulto en ese punto. Una frase simple y calma.', durationSec: 60, kind: 'reflection' },
      ],
    },
    {
      id: 'salir-del-triangulo-dramatico',
      title: 'Salir del triángulo: perseguidor, salvador y víctima',
      family: 'deconstructive',
      skills: ['resilience', 'compassion'],
      summary: 'Reconocer si estás en el triángulo dramático de Karpman y pasar al triángulo del ganador: asertivo, cuidadoso y vulnerable.',
      mechanism: 'Ver el rol que tomas en un conflicto que se repite permite cambiarlo por una versión sana que no alimenta el juego.',
      evidenceLevel: 'contemplativa',
      evidence: [KARPMAN_1968, CHOY_1990, BERNE_1964],
      howItWorks: [
        'Stephen Karpman describió un triángulo de roles que se repite en muchos conflictos. El perseguidor critica y culpa. El salvador ayuda sin que se lo pidan y luego se siente usado. La víctima se siente impotente y espera que otro resuelva.',
        'Lo curioso es que las personas cambian de rol en la misma pelea. El salvador cansado se vuelve perseguidor; la víctima se defiende atacando. Berne llamó juegos a estos intercambios repetidos que terminan siempre igual.',
        'Acey Choy propuso una salida: el triángulo del ganador. El perseguidor pasa a ser asertivo: pide sin atacar. El salvador pasa a ser cuidadoso: ayuda cuando se lo piden y respeta la capacidad del otro. La víctima pasa a ser vulnerable: reconoce lo que siente y pide ayuda directamente.',
      ],
      tips: [
        'Piensa en un conflicto que se repite, con el mismo final.',
        'Busca el rol en el que empiezas y el rol en el que terminas.',
        'Salir del triángulo suele empezar por no morder el anzuelo una vez.',
      ],
      obstacles: [{ q: 'Pero de verdad soy la víctima.', a: 'Puede que haya un daño real. Si hay violencia, no es un juego: busca ayuda y protección. El triángulo describe roles que se repiten, no niega lo que pasa.' }],
      cautions: 'Si en el vínculo hay violencia, control o miedo, no lo trabajes como un juego de roles: tu seguridad es primero. Busca ayuda; en Argentina, la Línea 144 orienta las 24 horas.',
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en un conflicto que se repite con alguien cercano.', durationSec: 30, kind: 'breath' },
        { title: 'Cómo empieza', instruction: '¿Cómo empieza casi siempre? ¿Quién dice o hace qué?', durationSec: 60, kind: 'reflection' },
        { title: 'Tu rol', instruction: '¿Desde qué rol entras? ¿Perseguidor, salvador o víctima?', durationSec: 45, kind: 'reflection' },
        { title: 'El giro', instruction: '¿Cambias de rol en el camino? ¿En cuál terminas?', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que ganas y pierdes', instruction: '¿Qué te da ese rol a corto plazo? ¿Qué te cuesta?', durationSec: 60, kind: 'reflection' },
        { title: 'La versión sana', instruction: 'Elige tu versión del triángulo del ganador: pedir sin atacar, ayudar sólo si te lo piden, o decir lo que sientes.', durationSec: 60, kind: 'reflection' },
        { title: 'Una frase', instruction: 'Escribe la frase que dirías la próxima vez, desde ese lugar.', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'dar-y-pedir-caricias',
      title: 'Dar y pedir reconocimiento',
      family: 'constructive',
      skills: ['compassion'],
      summary: 'Revisar cómo das, recibes y pides reconocimiento, y probar esta semana a dar más y a pedir lo que necesitas.',
      mechanism: 'El reconocimiento es una necesidad básica. Darlo con generosidad y pedirlo de forma directa nutre los vínculos.',
      evidenceLevel: 'contemplativa',
      evidence: [STEINER_1971, STEWART_2012],
      howItWorks: [
        'En el análisis transaccional, una caricia es cualquier forma de reconocimiento: un saludo, un elogio, una mirada, incluso una crítica. Berne pensaba que necesitamos caricias para vivir, y que si no hay positivas, se buscan negativas.',
        'Claude Steiner describió la «economía de caricias»: reglas aprendidas que las vuelven escasas. No des caricias, no las pidas, no las aceptes, no las rechaces aunque no las quieras, no te las des a ti mismo. Romper esas reglas, de a poco, enriquece la vida.',
        MARCO,
      ],
      tips: [
        'Una caricia concreta vale más que una general: «me ayudó mucho cómo ordenaste esto».',
        'Si te elogian, prueba decir sólo «gracias».',
        'Pedir reconocimiento no te hace débil. Es una forma de cuidar el vínculo.',
      ],
      obstacles: [{ q: 'Me cuesta creer los elogios.', a: 'Muchas personas aprendieron a desconfiar de ellos. Prueba aceptar uno sin discutirlo y fíjate qué pasa.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio y piensa en la última semana.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que diste', instruction: '¿A quién le diste reconocimiento? ¿Cómo? ¿Fue concreto?', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que recibiste', instruction: '¿Quién te reconoció algo? ¿Lo aceptaste o lo esquivaste?', durationSec: 60, kind: 'reflection' },
        { title: 'Tus reglas', instruction: '¿Cuál te cuesta más: dar, pedir, aceptar, rechazar lo que no quieres o dártelo a ti?', durationSec: 60, kind: 'reflection' },
        { title: 'Esta semana', instruction: 'Elige a dos personas para darles un reconocimiento concreto. Escribe qué les dirás.', durationSec: 60, kind: 'reflection' },
        { title: 'Para ti', instruction: 'Escribe un reconocimiento para ti mismo, por algo concreto de esta semana.', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'mis-impulsores',
      title: 'Sé perfecto, complace, apúrate',
      family: 'deconstructive',
      skills: ['resilience', 'compassion'],
      summary: 'Reconocer tus impulsores, los mandatos que te empujan sin parar, y escribir un permiso que los equilibre.',
      mechanism: 'Los impulsores alivian la sensación de no estar bien, pero nunca alcanzan. Un permiso explícito afloja la exigencia.',
      evidenceLevel: 'contemplativa',
      evidence: [KAHLER_1975, STEWART_2012],
      howItWorks: [
        'Taibi Kahler describió cinco impulsores: sé perfecto, complace a los demás, apúrate, sé fuerte y esfuérzate más. Son mensajes que aprendimos de chicos para ser aceptados: «estoy bien si…».',
        'El problema es la condición. Si estoy bien sólo cuando soy perfecto, nunca descanso. Para cada impulsor hay un permiso que lo equilibra: «puedo equivocarme», «puedo complacerme a mí», «puedo tomarme mi tiempo», «puedo mostrar lo que siento», «puedo terminar».',
        'Los impulsores se parecen a los esquemas de autoexigencia y autosacrificio de la terapia de esquemas. ' + MARCO,
      ],
      tips: [
        'Mira qué haces cuando estás estresado: ahí se ven los impulsores.',
        'Casi todos tenemos uno o dos fuertes.',
        'Lee el permiso en voz alta cuando notes el empuje.',
      ],
      obstacles: [{ q: 'Si me lo permito, voy a hacer todo mal.', a: 'Es el miedo del impulsor. El permiso no elimina el esfuerzo: le saca la condición de que tu valor dependa de él.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en un momento de estrés reciente.', durationSec: 30, kind: 'breath' },
        { title: 'Los cinco', instruction: 'Lee: sé perfecto, complace, apúrate, sé fuerte, esfuérzate más. ¿Cuál reconoces más en ti?', durationSec: 60, kind: 'reflection' },
        { title: 'De dónde viene', instruction: '¿Quién te lo enseñó, con palabras o con el ejemplo? Una frase, sin entrar en detalles dolorosos.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que te da', instruction: '¿Qué te dio ese impulsor? ¿Qué te cuesta hoy?', durationSec: 60, kind: 'reflection' },
        { title: 'Tu permiso', instruction: 'Escribe tu permiso: «Puedo equivocarme», «puedo tomarme mi tiempo», «puedo pedir ayuda».', durationSec: 60, kind: 'reflection' },
        { title: 'Leerlo', instruction: 'Lee tu permiso en voz baja, despacio, tres veces.', durationSec: 40, kind: 'breath' },
      ],
    },
  ],

  meta: {
    'mis-estados-del-yo': { level: 'iniciacion', approaches: ['analisis-transaccional'], module: 'autoconocimiento' },
    'conversacion-que-se-trabo': { level: 'intermedio', approaches: ['analisis-transaccional'], module: 'relaciones', prerequisites: ['mis-estados-del-yo'] },
    'salir-del-triangulo-dramatico': { level: 'intermedio', approaches: ['analisis-transaccional'], module: 'relaciones', prerequisites: ['mis-estados-del-yo'] },
    'dar-y-pedir-caricias': { level: 'iniciacion', approaches: ['analisis-transaccional', 'positiva'], module: 'relaciones' },
    'mis-impulsores': { level: 'intermedio', approaches: ['analisis-transaccional'], module: 'autocompasion' },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'analisis-transaccional',
      title: 'Análisis transaccional: Padre, Adulto y Niño',
      subtitle: 'Las ideas de Eric Berne para entender por qué algunas conversaciones fluyen y otras se traban, y cómo salir de los juegos que se repiten.',
      category: 'Relaciones',
      readingMin: 9,
      keyPoints: [
        'Tenemos tres estados del yo: Padre, Adulto y Niño.',
        'Las conversaciones se traban cuando la respuesta llega desde un estado inesperado.',
        'Los juegos psicológicos son intercambios que se repiten y terminan siempre igual.',
        'El triángulo dramático tiene salida: pedir sin atacar, ayudar sin rescatar y mostrarse vulnerable.',
        'Es un lenguaje útil con poca investigación controlada.',
      ],
      sections: [
        {
          heading: 'Eric Berne y los estados del yo',
          paragraphs: [
            'Eric Berne fue un psiquiatra canadiense que trabajó en Estados Unidos. En los años cincuenta propuso el análisis transaccional: una forma sencilla de describir lo que pasa entre las personas. Su libro «Juegos en que participamos» fue un éxito enorme.',
            'Berne describió tres estados del yo. El Padre contiene lo que aprendimos de los adultos: normas, críticas y cuidados. El Adulto procesa la realidad de hoy, como un ordenador sereno. El Niño guarda cómo sentíamos y reaccionábamos de chicos: la espontaneidad y también la obediencia o la rebeldía.',
          ],
        },
        {
          heading: 'Transacciones',
          paragraphs: [
            'Cada intercambio es una transacción. Cuando la respuesta llega desde el estado esperado, la conversación fluye: Adulto con Adulto, o un Niño que pide ayuda y un Padre que cuida. Cuando la respuesta llega desde otro lugar, se cruza: alguien pregunta algo práctico y recibe un reto.',
            'Hay además transacciones ocultas, con doble mensaje. Las palabras dicen una cosa y el tono otra. «¿Ya terminaste?» puede ser una pregunta o un reproche. Muchas peleas se juegan en ese nivel oculto.',
          ],
        },
        {
          heading: 'Juegos y triángulo dramático',
          paragraphs: [
            'Berne llamó juegos a secuencias de transacciones que se repiten, con un final conocido y una sensación desagradable. «Sí, pero…» es un ejemplo: alguien pide consejos y los rechaza uno por uno, hasta que todos quedan frustrados.',
            'Stephen Karpman resumió los juegos en un triángulo de roles: perseguidor, salvador y víctima. Las personas rotan entre ellos. Acey Choy propuso salir con el triángulo del ganador: ser asertivo en lugar de perseguidor, cuidadoso en lugar de salvador y vulnerable en lugar de víctima.',
          ],
        },
        {
          heading: 'Caricias, impulsores y guion',
          paragraphs: [
            'Una caricia es una unidad de reconocimiento. Claude Steiner mostró cómo ciertas reglas aprendidas, como no pedir ni aceptar reconocimiento, empobrecen los vínculos. Taibi Kahler describió cinco impulsores: sé perfecto, complace, apúrate, sé fuerte y esfuérzate. Son condiciones para sentirse bien que nunca se cumplen del todo.',
            'Berne también habló de un guion de vida: una historia que cada persona escribe de chica sobre cómo será su vida, y que tiende a repetir. Y de cuatro posiciones existenciales. La más sana es «yo estoy bien, tú estás bien», que Thomas Harris hizo famosa en 1967.',
          ],
        },
      ],
      caveat: {
        title: 'Qué dice la evidencia',
        body: 'El análisis transaccional se usa en psicoterapia, educación y organizaciones, pero tiene pocos ensayos controlados. Las revisiones disponibles muestran estudios pequeños y mayormente observacionales (Ohlsson, 2010). Úsalo como lenguaje para pensar tus vínculos, no como diagnóstico. Si en un vínculo hay violencia, no es un «juego»: es un riesgo, y lo primero es tu seguridad.',
      },
      diagram: {
        title: 'Cómo gira el triángulo dramático',
        nodes: ['Alguien se queja (víctima)', 'Otro ayuda sin que se lo pidan (salvador)', 'La ayuda no sirve y crece el fastidio', 'El salvador reprocha (perseguidor)', 'La víctima se siente atacada y vuelve a quejarse'],
        caption: 'Para salir: pedir directamente, ayudar sólo cuando lo piden y decir lo que se siente sin culpar.',
      },
      related: { practices: ['mis-estados-del-yo', 'conversacion-que-se-trabo', 'salir-del-triangulo-dramatico', 'dar-y-pedir-caricias', 'mis-impulsores'], articles: ['modos-de-esquema'] },
      references: [BERNE_1961, BERNE_1964, STEWART_2012, KARPMAN_1968, CHOY_1990, STEINER_1971, KAHLER_1975, HARRIS_1967, OHLSSON_2010],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'conversaciones-sin-juegos',
      title: 'Conversaciones sin juegos',
      subtitle: 'Tres semanas con el análisis transaccional para destrabar vínculos',
      description:
        'Reconocerás desde dónde hablas, por qué algunas conversaciones se traban y cómo salir de los roles que se repiten. Es un lenguaje útil, con poca investigación controlada: tómalo como una herramienta para mirar, no como verdad.',
      basis: 'Berne (1961, 1964); Stewart y Joines (2012); Karpman (1968); Choy (1990).',
      rhythm: '10 minutos, 3 o 4 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Mis estados',
          focus: 'Padre, Adulto y Niño',
          description: 'Leerás sobre el análisis transaccional y reconocerás tus estados del yo en la vida diaria.',
          practiceIds: ['mis-estados-del-yo', 'dar-y-pedir-caricias'],
          articleIds: ['analisis-transaccional'],
          journalType: 'mis-roles',
        },
        {
          title: 'Semana 2 · Las conversaciones',
          focus: 'Dónde se cruzan',
          description: 'Analizarás una conversación que se trabó y ensayarás una respuesta desde el Adulto.',
          practiceIds: ['conversacion-que-se-trabo'],
          articleIds: [],
          journalType: 'conversacion',
        },
        {
          title: 'Semana 3 · Los juegos',
          focus: 'Salir del triángulo',
          description: 'Reconocerás tu rol en un conflicto que se repite y tus impulsores, y probarás otra forma.',
          practiceIds: ['salir-del-triangulo-dramatico', 'mis-impulsores'],
          articleIds: [],
          journalType: 'patron-repetido',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-padre-adulto-nino',
      title: 'Padre, Adulto y Niño',
      subtitle: 'Los tres estados del yo de Eric Berne.',
      slides: [
        { heading: 'Tres voces', text: 'Eric Berne pensaba que todos tenemos tres estados: el Padre, el Adulto y el Niño.' },
        { heading: 'El Padre', text: 'Repite lo que aprendimos de los adultos. Puede criticar y mandar, o cuidar y proteger.' },
        { heading: 'El Niño', text: 'Siente como sentíamos de chicos. Puede ser libre y alegre, o obediente y rebelde.' },
        { heading: 'El Adulto', text: 'Mira la situación de hoy y piensa. Hace preguntas y busca datos.' },
        { heading: 'Elegir', text: 'Ninguno es malo. La clave es notar cuál está al mando y si sirve en ese momento.' },
      ],
      related: { practices: ['mis-estados-del-yo'], articles: ['analisis-transaccional'] },
      references: [BERNE_1961],
    },
    {
      id: 'pildora-transaccion-cruzada',
      title: 'Por qué se traba una charla',
      subtitle: 'Las transacciones cruzadas.',
      slides: [
        { heading: 'Una pregunta simple', text: '«¿Sabes dónde están las llaves?» Es una pregunta práctica, de Adulto a Adulto.' },
        { heading: 'Si fluye', text: '«En la mesa.» La respuesta llega desde el mismo lugar. La charla sigue.' },
        { heading: 'Si se cruza', text: '«Siempre pierdes todo.» Responde un Padre que reta. La charla se corta o se vuelve pelea.' },
        { heading: 'El doble mensaje', text: 'A veces las palabras dicen una cosa y el tono otra. «¿Ya terminaste?» puede ser un reproche.' },
        { heading: 'Destrabar', text: 'Vuelve al Adulto e invita al otro a volver: «Te pregunto nada más. ¿Las viste?».' },
      ],
      related: { practices: ['conversacion-que-se-trabo'], articles: ['analisis-transaccional'] },
      references: [BERNE_1964, STEWART_2012],
    },
    {
      id: 'pildora-triangulo-dramatico',
      title: 'Perseguidor, salvador y víctima',
      subtitle: 'El triángulo dramático y cómo salir de él.',
      slides: [
        { heading: 'Tres roles', text: 'En muchos conflictos aparecen tres roles. El que culpa, el que rescata y el que se siente impotente.' },
        { heading: 'Giran', text: 'Los roles cambian en la misma pelea. El que rescata se cansa y termina reprochando.' },
        { heading: 'Pedir sin atacar', text: 'En vez de perseguir, sé asertivo. Di lo que necesitas, sin culpar.' },
        { heading: 'Ayudar sin rescatar', text: 'En vez de salvar, cuida. Ayuda cuando te lo piden y confía en que el otro puede.' },
        { heading: 'Mostrarte', text: 'En vez de quedarte en víctima, muéstrate vulnerable. Di lo que sientes y pide ayuda directamente.' },
      ],
      related: { practices: ['salir-del-triangulo-dramatico'], articles: ['analisis-transaccional'] },
      references: [KARPMAN_1968, CHOY_1990],
    },
    {
      id: 'pildora-impulsores',
      title: 'Estoy bien si…',
      subtitle: 'Los cinco impulsores y sus permisos.',
      slides: [
        { heading: 'Cinco empujes', text: 'Sé perfecto. Complace. Apúrate. Sé fuerte. Esfuérzate más. Son los impulsores de Taibi Kahler.' },
        { heading: 'Una condición', text: 'Cada uno dice: estoy bien si cumplo esto. Pero nunca alcanza del todo.' },
        { heading: 'De dónde vienen', text: 'Los aprendimos de chicos, para sentirnos aceptados. En su momento tuvieron sentido.' },
        { heading: 'Un permiso', text: 'Para cada uno hay un permiso. Puedo equivocarme. Puedo tomarme mi tiempo. Puedo pedir ayuda.' },
        { heading: 'Sin condición', text: 'El permiso no te quita el esfuerzo. Te saca la idea de que tu valor depende de él.' },
      ],
      related: { practices: ['mis-impulsores'], articles: ['analisis-transaccional'] },
      references: [KAHLER_1975],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'estados-del-yo', term: 'Estados del yo', definition: 'En el análisis transaccional, el Padre, el Adulto y el Niño: tres formas de pensar, sentir y actuar que todos tenemos.', practiceId: 'mis-estados-del-yo', articleId: 'analisis-transaccional' },
    { id: 'transaccion-cruzada', term: 'Transacción cruzada', definition: 'Intercambio en el que la respuesta llega desde un estado del yo distinto del esperado. La conversación se corta o se vuelve pelea.', practiceId: 'conversacion-que-se-trabo' },
    { id: 'juego-psicologico', term: 'Juego psicológico', definition: 'Para Eric Berne, una secuencia de intercambios que se repite, con un final conocido y una sensación desagradable para todos.', articleId: 'analisis-transaccional' },
    { id: 'triangulo-dramatico', term: 'Triángulo dramático', definition: 'Los roles de perseguidor, salvador y víctima que describió Stephen Karpman, entre los que las personas rotan en un conflicto.', practiceId: 'salir-del-triangulo-dramatico' },
    { id: 'caricia', term: 'Caricia', definition: 'En el análisis transaccional, cualquier forma de reconocimiento: un saludo, un elogio, una mirada. Es una necesidad básica.', practiceId: 'dar-y-pedir-caricias' },
    { id: 'impulsor', term: 'Impulsor', definition: 'Para Taibi Kahler, un mandato que empuja a cumplir una condición para sentirse bien: sé perfecto, complace, apúrate, sé fuerte o esfuérzate.', practiceId: 'mis-impulsores' },
    { id: 'guion-de-vida', term: 'Guion de vida', definition: 'Para Eric Berne, la historia que cada persona escribe de chica sobre cómo será su vida, y que tiende a repetir sin darse cuenta.', articleId: 'analisis-transaccional' },
  ],
};
