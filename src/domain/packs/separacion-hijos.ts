import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Separación e hijos»: separación y divorcio, con foco en el adulto y en los chicos.
 *  - duelo de la pareja y reconstrucción de la identidad (Sbarra y colaboradores; Emery);
 *  - cómo contarles a los chicos según la edad, juntos si se puede y sin culpas;
 *  - el conflicto entre los adultos, y no el divorcio en sí, como mayor riesgo para los chicos
 *    (Amato; Kelly y Emery; Hetherington y Kelly);
 *  - no usar a los chicos de mensajeros ni hablar mal del otro;
 *  - coparentalidad paralela cuando hay mucho conflicto;
 *  - mensajes escritos breves y neutros (método BIFF de Eddy);
 *  - nuevas parejas y familias ensambladas.
 *
 * Reglas de seguridad del paquete: si hay violencia, nada de esto reemplaza la protección.
 * No se propone coparentalidad cara a cara ni mediación con quien ejerce violencia; se remite
 * a la Línea 144, al 911 y, para chicos y adolescentes, a la Línea 102. Ante ideas de morir:
 * 135 o 0800-999-0091. No se dan consejos legales: el régimen de cuidado lo acuerda o lo
 * decide quien corresponda, con asesoramiento.
 */

const AMATO_2010: Reference = {
  citation: 'Amato, P. R. (2010). Research on divorce: Continuing trends and new developments. Journal of Marriage and Family, 72(3), 650–666.',
};
const EMERY_2012: Reference = {
  citation: 'Emery, R. E. (2012). Renegotiating family relationships: Divorce, child custody, and mediation (2.ª ed.). Guilford Press.',
};
const KELLY_EMERY_2003: Reference = {
  citation: 'Kelly, J. B., & Emery, R. E. (2003). Children’s adjustment following divorce: Risk and resilience perspectives. Family Relations, 52(4), 352–362.',
};
const HETHERINGTON_KELLY_2002: Reference = {
  citation: 'Hetherington, E. M., & Kelly, J. (2002). For better or for worse: Divorce reconsidered. W. W. Norton.',
};
const SBARRA_2015: Reference = {
  citation: 'Sbarra, D. A., Hasselmo, K., & Bourassa, K. J. (2015). Divorce and health: Beyond individual differences. Current Directions in Psychological Science, 24(2), 109–113.',
};
const EDDY_2011: Reference = {
  citation: 'Eddy, B. (2011). BIFF: Quick responses to high-conflict people, their personal attacks, hostile email and social media meltdowns. HCI Press.',
  note: 'Libro de divulgación de un mediador y abogado; no es un tratamiento estudiado en ensayos.',
};

/** Aviso común: violencia. */
const VIOLENCIA =
  'Si hay golpes, amenazas, control o miedo, esto no es un problema de comunicación. No te reúnas a solas ni cara a cara. Llama a la Línea 144, gratis y a toda hora. Si hay peligro inmediato, llama al 911.';

export const SEPARACION_HIJOS_PACK: ContentPack = {
  id: 'separacion-hijos',

  // ================================================================== prácticas
  practices: [
    {
      id: 'duelo-de-la-separacion',
      title: 'El duelo de la pareja',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Nombrar lo que se terminó, lo que extrañas y lo que no, y empezar a preguntarte quién eres ahora.',
      mechanism: 'Una separación es una pérdida, aunque la hayas elegido. Ponerle palabras al duelo y mirar tu identidad más allá de la pareja ayuda a ordenar el después.',
      evidenceLevel: 'preliminar',
      evidence: [SBARRA_2015, EMERY_2012],
      howItWorks: [
        'Separarse es uno de los cambios más estresantes de la vida adulta. La mayoría de las personas se recupera con el tiempo. Pero un grupo sufre más y por más tiempo, y eso también puede afectar la salud del cuerpo (Sbarra y colaboradores, 2015).',
        'Robert Emery describe que el duelo de una separación tiene idas y vueltas. Puedes sentir enojo, tristeza, alivio y amor, a veces el mismo día. Quien decidió irse suele haber hecho parte del duelo antes. Quien no lo eligió lo empieza de golpe (Emery, 2012).',
        'También se pierde una parte de la identidad: «nosotros», los planes, la familia como era. Preguntarte quién eres ahora es parte del duelo.',
      ],
      tips: [
        'No hace falta entenderlo todo hoy. Escribe lo que sale.',
        'Sentir alivio no te hace mala persona. Sentir amor no te obliga a volver.',
        'Busca gente que te escuche sin hablar mal de tu ex todo el tiempo.',
      ],
      obstacles: [
        { q: 'Yo decidí separarme. ¿Por qué me duele tanto?', a: 'Elegir no quita el duelo. Se pierde un proyecto, una rutina y una parte de quien eras. Tiene sentido que duela.' },
        { q: 'No paro de pensar en lo que hizo.', a: 'Es común al principio. Prueba darle un rato fijo al día para escribirlo, y fuera de ese rato vuelve a lo que estás haciendo.' },
      ],
      cautions: 'Si la tristeza no te deja funcionar, si dejas de comer o dormir o si piensas en morir, consulta con un profesional. Si tienes ideas de hacerte daño, llama al 135 o al 0800-999-0091.',
      steps: [
        { title: 'Llegar', instruction: 'Siéntate. Pon una mano en el pecho. Respira despacio tres veces.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que terminó', instruction: 'Escribe qué se terminó. La pareja, una casa, unos planes, una forma de ser familia.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que extrañas', instruction: 'Anota lo que extrañas. También vale extrañar cosas chicas, como un desayuno o una voz.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que no', instruction: 'Ahora anota lo que no extrañas. Si sientes alivio, también está bien escribirlo.', durationSec: 50, kind: 'reflection' },
        { title: 'Quién eres', instruction: 'Escribe tres cosas de ti que no dependen de la pareja. Un gusto, un valor, una persona querida.', durationSec: 60, kind: 'reflection' },
        { title: 'Un paso', instruction: 'Elige algo chico que te haga sentir tú esta semana. Anota cuándo lo harás.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Dite: «Esto es un duelo. Me voy a tratar con cuidado». Respira despacio.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'contarles-la-separacion',
      title: 'Contarles a los chicos',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Preparar la charla para contarles la separación a tus hijos e hijas: juntos si se puede, con palabras según la edad y sin culpas.',
      mechanism: 'Una charla preparada y tranquila baja la confusión de los chicos. Saber qué cambia y qué sigue igual les da seguridad.',
      evidenceLevel: 'preliminar',
      evidence: [EMERY_2012, KELLY_EMERY_2003],
      howItWorks: [
        'Los chicos se adaptan mejor cuando entienden qué pasa y qué va a cambiar en su vida diaria. Si se puede, conviene que los dos adultos les cuenten juntos, con un mensaje acordado y sin culpar al otro (Emery, 2012).',
        'Es común que los chicos piensen que la separación es su culpa o que pueden arreglarla. Por eso hay que decirles claro que no es su culpa y que es una decisión de los adultos.',
        'Las palabras cambian con la edad. A los más chicos les sirven frases simples y concretas: dónde van a dormir y quién los busca. Los más grandes quieren saber más y opinar; se los puede escuchar sin cargarlos con decisiones de adultos.',
      ],
      tips: [
        'Elijan un momento sin apuro, no antes de la escuela ni de dormir.',
        'Cuenten a todos los hermanos juntos y después hablen con cada uno.',
        'No hace falta contar los motivos de los adultos. Basta con decir que lo decidieron los grandes.',
        'Esperen preguntas en los días siguientes. Una charla no alcanza.',
      ],
      obstacles: [
        { q: 'No podemos estar juntos sin pelear.', a: 'Entonces cuenta tú, con un mensaje que no culpe al otro. Lo importante es que el chico no quede en medio.' },
        { q: '¿Y si me pregunta de quién fue la culpa?', a: 'Puedes decir: «Es una decisión de los grandes. No es culpa de nadie que tenga que pagar, y menos tuya».' },
      ],
      cautions: VIOLENCIA,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Piensa en tus hijos o hijas y en lo que necesitan oír.', durationSec: 30, kind: 'breath' },
        { title: 'Quién cuenta', instruction: '¿Pueden contarles juntos sin pelear? Si no, decide quién cuenta y con qué mensaje común.', durationSec: 45, kind: 'reflection' },
        { title: 'El mensaje', instruction: 'Escribe una frase simple. Por ejemplo: «Decidimos vivir en casas separadas. Los dos te queremos y eso no cambia».', durationSec: 60, kind: 'reflection' },
        { title: 'No es tu culpa', instruction: 'Escribe cómo lo dirás: «No es tu culpa. Es una decisión de los grandes. No tienes que arreglarlo».', durationSec: 45, kind: 'reflection' },
        { title: 'Según la edad', instruction: 'Anota qué cambia en su día. Dónde duerme, quién lo lleva a la escuela, cuándo ve a cada uno.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que sigue', instruction: 'Anota lo que sigue igual: su escuela, sus amigos, sus cosas, el amor de los dos.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Recuerda que puedes volver a hablar del tema muchas veces.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'chicos-fuera-del-conflicto',
      title: 'Los chicos fuera del medio',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Revisar con honestidad si los chicos quedan en medio del conflicto y elegir un cambio: sin mensajeros, sin hablar mal del otro y, si hace falta, con coparentalidad paralela.',
      mechanism: 'El conflicto entre los adultos pesa más en los chicos que la separación en sí. Sacarlos del medio baja ese peso.',
      evidenceLevel: 'moderada',
      evidence: [
        { citation: 'Wolchik, S. A., Sandler, I. N., Millsap, R. E., et al. (2002). Six-year follow-up of preventive interventions for children of divorce: A randomized controlled trial. JAMA, 288(15), 1874–1881.', note: 'Programa para madres y padres separados (New Beginnings), centrado en reducir la exposición de los chicos al conflicto.' },
        AMATO_2010,
        KELLY_EMERY_2003,
        HETHERINGTON_KELLY_2002,
      ],
      howItWorks: [
        'La investigación muestra que la mayoría de los chicos de padres separados se adapta bien con el tiempo. Uno de los mayores riesgos no es el divorcio en sí, sino el conflicto intenso y sostenido entre los adultos, sobre todo cuando los chicos quedan en medio (Kelly y Emery, 2003; Amato, 2010).',
        'Quedar en medio es, por ejemplo, llevar mensajes, escuchar críticas al otro, guardar secretos o sentir que hay que elegir. Esto genera culpa y lealtades divididas.',
        'Cuando hay mucho conflicto, no hace falta llevarse bien. Se puede criar en paralelo: cada adulto en su casa, con pocas reglas comunes, contacto mínimo y por escrito (Hetherington y Kelly, 2002; Emery, 2012).',
      ],
      tips: [
        'Si tienes que decirle algo al otro adulto, díselo tú, no a través del chico.',
        'Si te sale una crítica al otro delante de los chicos, puedes reparar: «Eso no estuvo bien. Es tu mamá y te quiere».',
        'Deja que quiera y extrañe al otro adulto sin que tenga que cuidarte a ti.',
        'Hagan los cambios de casa en lugares neutros, como la puerta de la escuela.',
      ],
      obstacles: [
        { q: 'El otro habla mal de mí. ¿Por qué tengo que callarme?', a: 'No es por el otro adulto: es por tu hijo o hija. No contestar con lo mismo lo protege. Si te preocupa algo grave, consúltalo con un profesional.' },
        { q: 'Mi hijo me cuenta cosas de la otra casa.', a: 'Puedes escuchar sin preguntar de más ni opinar. Si cuenta algo que te preocupa por su seguridad, pide orientación a la Línea 102.' },
      ],
      cautions: VIOLENCIA,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Hoy miras tu parte, no la del otro adulto.', durationSec: 30, kind: 'breath' },
        { title: 'Mensajes', instruction: '¿Alguna vez le pediste a tu hijo o hija que le lleve un mensaje al otro? Anota cuándo pasó.', durationSec: 45, kind: 'reflection' },
        { title: 'Críticas', instruction: '¿Se te escapan críticas al otro adulto delante de los chicos? Anota en qué momentos.', durationSec: 45, kind: 'reflection' },
        { title: 'Preguntas', instruction: '¿Le preguntas qué pasa en la otra casa para saber del otro? Escríbelo sin juzgarte.', durationSec: 45, kind: 'reflection' },
        { title: 'Un cambio', instruction: 'Elige un solo cambio. Por ejemplo: «Los temas de horarios los hablo yo, por escrito».', durationSec: 60, kind: 'reflection' },
        { title: 'Si hay mucho conflicto', instruction: 'Anota qué podrían manejar en paralelo. Cada casa con sus reglas, y por escrito sólo lo necesario.', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Proteger a tus hijos también es cuidar tu paz.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'mensaje-breve-y-neutro',
      title: 'Un mensaje breve y neutro',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Escribir un mensaje al otro adulto con el método BIFF: breve, informativo, amable y firme. Sin ironías ni reproches.',
      mechanism: 'Un mensaje corto y sin ataques da menos motivos para pelear. Así la charla se queda en lo práctico y los chicos quedan afuera.',
      evidenceLevel: 'preliminar',
      evidence: [EDDY_2011, EMERY_2012],
      howItWorks: [
        'Bill Eddy, mediador y abogado, propuso el método BIFF para responder a personas con mucho conflicto. Son las iniciales en inglés de breve, informativo, amable y firme (Eddy, 2011).',
        'Breve quiere decir pocas líneas. Informativo, sólo los datos necesarios. Amable, un tono cortés, sin ironía. Firme, una propuesta clara que cierra el tema.',
        'No es un tratamiento estudiado en ensayos. Pero se usa mucho en mediación familiar y sigue una idea clara: menos palabras, menos pelea (Emery, 2012).',
      ],
      tips: [
        'Escribe el borrador y espera un rato antes de mandarlo.',
        'Saca los adjetivos, los «siempre» y los «nunca».',
        'No contestes cada acusación. Responde sólo lo práctico.',
        'Si te escribe de noche, puedes contestar al día siguiente.',
      ],
      obstacles: [{ q: 'Me escribe cosas horribles y quiero defenderme.', a: 'Es muy humano. Escribe la respuesta larga en un papel, sin mandarla. Después manda sólo la parte práctica.' }],
      cautions: VIOLENCIA,
      steps: [
        { title: 'Llegar', instruction: 'Antes de responder, apoya los pies en el suelo. Respira despacio tres veces.', durationSec: 30, kind: 'breath' },
        { title: 'Lo práctico', instruction: '¿Qué tema práctico hay que resolver? Escríbelo en una línea. Por ejemplo: «El horario del sábado».', durationSec: 45, kind: 'reflection' },
        { title: 'Breve', instruction: 'Escribe la respuesta en tres o cuatro líneas, como mucho.', durationSec: 60, kind: 'instruction' },
        { title: 'Informativo', instruction: 'Deja sólo los datos: días, horas, lugares. Borra las opiniones y los reproches.', durationSec: 45, kind: 'instruction' },
        { title: 'Amable', instruction: 'Suma una frase cortés. Por ejemplo: «Gracias por avisar».', durationSec: 30, kind: 'instruction' },
        { title: 'Firme', instruction: 'Cierra con una propuesta clara. Por ejemplo: «Lo busco el sábado a las diez en la escuela».', durationSec: 40, kind: 'instruction' },
        { title: 'Revisar', instruction: 'Léelo como si fueras un juez tranquilo. Si suena a ataque, corrígelo. Después decide si mandarlo ahora o más tarde.', durationSec: 40, kind: 'reflection' },
      ],
    },
    {
      id: 'pausa-antes-de-responder',
      title: 'Pausa antes de responder',
      family: 'attentional',
      skills: ['attention'],
      summary: 'Una pausa de dos minutos cuando llega un mensaje que te enoja, para no contestar en caliente.',
      mechanism: 'El enojo empuja a contestar rápido. Una pausa corta deja que baje la activación y te da tiempo para elegir.',
      evidenceLevel: 'preliminar',
      evidence: [EDDY_2011],
      micro: true,
      howItWorks: [
        'Cuando un mensaje te enoja, el cuerpo se activa. Contestar en ese momento suele terminar en pelea. Esperar un poco ayuda a responder con más calma y a cuidar a los chicos del conflicto (Eddy, 2011).',
      ],
      tips: ['Deja el celular boca abajo mientras haces la pausa.', 'Si todavía estás muy enojado o enojada, espera más.'],
      obstacles: [{ q: 'Me pide una respuesta ya.', a: 'Salvo una urgencia real, casi nada se resuelve mejor en caliente. Puedes decir: «Lo veo y te contesto en un rato».' }],
      steps: [
        { title: 'Soltar', instruction: 'Deja el celular. Apoya los pies en el suelo.', durationSec: 20, kind: 'instruction' },
        { title: 'Respirar', instruction: 'Respira despacio. Suelta el aire más largo de lo que entra.', durationSec: 50, kind: 'breath' },
        { title: 'Nombrar', instruction: 'Nombra lo que sientes: «Esto es enojo». O miedo, o tristeza.', durationSec: 20, kind: 'reflection' },
        { title: 'Elegir', instruction: 'Pregúntate: ¿hay algo práctico que contestar? Si no, no contestes. Si sí, hazlo breve y más tarde.', durationSec: 30, kind: 'reflection' },
      ],
    },
  ],

  meta: {
    'duelo-de-la-separacion': { level: 'iniciacion', approaches: ['cft', 'escritura'], module: 'etapas', prerequisites: ['pausa-autocompasion'] },
    'contarles-la-separacion': { level: 'iniciacion', approaches: ['sistemica', 'tcc'], module: 'relaciones' },
    'chicos-fuera-del-conflicto': { level: 'intermedio', approaches: ['sistemica', 'tcc'], module: 'relaciones' },
    'mensaje-breve-y-neutro': { level: 'intermedio', approaches: ['tcc', 'dbt'], module: 'relaciones', prerequisites: ['dear-man'] },
    'pausa-antes-de-responder': { level: 'iniciacion', approaches: ['dbt', 'mindfulness'], module: 'relaciones' },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'separarse-con-hijos',
      title: 'Separarse cuando hay hijos',
      subtitle: 'El duelo de los adultos, cómo contarles a los chicos, el conflicto, la coparentalidad y las familias ensambladas.',
      category: 'Etapas de la vida',
      readingMin: 10,
      keyPoints: [
        'La mayoría de los chicos de padres separados se adapta bien con el tiempo.',
        'El conflicto intenso entre los adultos pesa más que la separación en sí.',
        'No uses a los chicos de mensajeros ni hables mal del otro delante de ellos.',
        'Con mucho conflicto, la coparentalidad paralela y los mensajes breves bajan la tensión.',
        'Si hay violencia, no hay coparentalidad cara a cara: Línea 144 o 911.',
      ],
      sections: [
        {
          heading: 'El duelo de los adultos',
          paragraphs: [
            'Una separación es una pérdida, aunque la hayas elegido. Se pierde la pareja, una rutina, unos planes y una parte de la identidad. Es común sentir enojo, tristeza, alivio y miedo, todo mezclado (Emery, 2012).',
            'La mayoría de las personas se recupera con el tiempo. Un grupo sufre más y por más tiempo, y eso puede afectar también la salud física (Sbarra y colaboradores, 2015). Pedir ayuda a tiempo es parte del cuidado.',
          ],
        },
        {
          heading: 'Lo que dice la investigación sobre los chicos',
          paragraphs: [
            'En promedio, los chicos de padres separados tienen algo más de dificultades que los de familias sin separación. Pero las diferencias son chicas y la mayoría se adapta bien con el tiempo (Amato, 2010; Hetherington y Kelly, 2002).',
            'Lo que más pesa es lo que pasa alrededor. El conflicto intenso entre los adultos, sobre todo si los chicos quedan en medio, es uno de los mayores riesgos. También influyen la calidad de la crianza en cada casa, los cambios de casa y escuela y la situación económica (Kelly y Emery, 2003).',
          ],
        },
        {
          heading: 'Cómo contarles',
          paragraphs: [
            'Si se puede, cuenten juntos, con un mensaje acordado y sin culpar al otro. Digan claro que es una decisión de los adultos y que no es culpa de los chicos. Cuenten qué cambia en su día y qué sigue igual.',
            'Ajusten las palabras a la edad. A los más chicos les sirven frases simples y concretas. Los más grandes quieren saber más y opinar: se los escucha, pero no se les pide que decidan como adultos. Una charla no alcanza: van a volver las preguntas.',
          ],
        },
        {
          heading: 'Sacar a los chicos del medio',
          paragraphs: [
            'No uses a tus hijos de mensajeros. No hables mal del otro adulto delante de ellos ni les preguntes de más sobre la otra casa. Déjalos querer y extrañar al otro sin culpa.',
            'Si la relación entre los adultos tiene mucho conflicto, no hace falta ser amigos. Se puede criar en paralelo: cada casa con sus reglas, pocas reglas comunes, cambios en lugares neutros y contacto mínimo por escrito (Hetherington y Kelly, 2002).',
          ],
        },
        {
          heading: 'Escribir sin pelear',
          paragraphs: [
            'Bill Eddy propuso el método BIFF para mensajes con alguien en mucho conflicto: breve, informativo, amable y firme (Eddy, 2011). Pocas líneas, sólo datos, un tono cortés y una propuesta clara.',
            'No hace falta responder cada acusación. Si un mensaje te enoja, haz una pausa y contesta más tarde sólo lo práctico.',
          ],
        },
        {
          heading: 'Nuevas parejas y familias ensambladas',
          paragraphs: [
            'Una nueva pareja es otro cambio grande para los chicos. Conviene ir despacio: esperar a que la relación sea estable y presentarla de a poco. Al principio, que la disciplina siga a cargo de cada adulto con sus propios hijos (Hetherington y Kelly, 2002).',
            'Las familias ensambladas necesitan tiempo para armarse. Es normal que haya celos, lealtades divididas y desconfianza al principio. Ayuda que cada chico tenga ratos a solas con su mamá o su papá, y que nadie le pida querer a la nueva pareja.',
          ],
        },
        {
          heading: 'Si hay violencia',
          paragraphs: [
            'Si hay golpes, amenazas, control del dinero o del celular, o miedo, esto no es un problema de comunicación. No se recomienda la coparentalidad cara a cara ni la mediación a solas. Llama a la Línea 144, gratis y a toda hora. Si hay peligro inmediato, llama al 911.',
            'Si te preocupa la seguridad de un chico o una chica, la Línea 102 orienta sobre niñez y adolescencia. Si tú o tus hijos tienen ideas de morir, llama al 135 o al 0800-999-0091.',
          ],
        },
      ],
      caveat: {
        title: 'Lo que esta sección no hace',
        body: 'Aquí no hay consejos legales sobre cuidado personal, cuota alimentaria ni régimen de comunicación: consúltalos con un profesional del derecho. El método BIFF viene de la práctica de mediación, no de ensayos. Si hay violencia, lo primero es la seguridad.',
      },
      diagram: {
        title: 'Cómo el conflicto llega a los chicos',
        nodes: ['Conflicto entre los adultos', 'Mensajes, críticas y secretos', 'Los chicos en medio', 'Culpa y lealtades divididas', 'Más malestar'],
        caption: 'Sacar a los chicos del medio, criar en paralelo y escribir breve cortan el ciclo.',
      },
      related: {
        practices: ['duelo-de-la-separacion', 'contarles-la-separacion', 'chicos-fuera-del-conflicto', 'mensaje-breve-y-neutro', 'pausa-antes-de-responder', 'dear-man'],
        articles: ['duelo-profundo'],
      },
      references: [AMATO_2010, EMERY_2012, KELLY_EMERY_2003, HETHERINGTON_KELLY_2002, SBARRA_2015, EDDY_2011],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'separarse-cuidando',
      title: 'Separarse cuidando',
      subtitle: 'Cuatro semanas para atravesar una separación cuando hay hijos',
      description:
        'Mirarás tu propio duelo, prepararás la charla con los chicos, revisarás si quedan en medio del conflicto y practicarás mensajes breves y neutros. No reemplaza la ayuda profesional ni el asesoramiento legal. Si hay violencia, lo primero es tu seguridad: Línea 144 o 911.',
      basis: 'Amato (2010); Kelly y Emery (2003); Emery (2012); Hetherington y Kelly (2002); Eddy (2011).',
      rhythm: '10 minutos, 3 o 4 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Tu duelo',
          focus: 'Lo que terminó y quién eres',
          description: 'Nombrarás lo que perdiste y lo que sigue siendo tuyo.',
          practiceIds: ['duelo-de-la-separacion', 'pausa-autocompasion'],
          articleIds: ['separarse-con-hijos'],
          journalType: 'escritura-expresiva',
        },
        {
          title: 'Semana 2 · Los chicos',
          focus: 'Contarles sin culpas',
          description: 'Prepararás la charla con tus hijos e hijas, según su edad.',
          practiceIds: ['contarles-la-separacion'],
          articleIds: [],
          journalType: 'conversacion',
        },
        {
          title: 'Semana 3 · Fuera del medio',
          focus: 'Menos conflicto para los chicos',
          description: 'Revisarás si los chicos quedan en medio y elegirás un cambio concreto.',
          practiceIds: ['chicos-fuera-del-conflicto', 'pausa-antes-de-responder'],
          articleIds: [],
          journalType: 'intencion',
        },
        {
          title: 'Semana 4 · Escribir sin pelear',
          focus: 'Mensajes breves y neutros',
          description: 'Practicarás mensajes breves, informativos, amables y firmes.',
          practiceIds: ['mensaje-breve-y-neutro', 'dear-man'],
          articleIds: [],
          journalType: 'conversacion',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-no-es-el-divorcio',
      title: 'No es el divorcio, es el conflicto',
      subtitle: 'Lo que más pesa en los chicos cuando los adultos se separan.',
      slides: [
        { heading: 'La buena noticia', text: 'La mayoría de los chicos de padres separados se adapta bien con el tiempo.' },
        { heading: 'Lo que pesa', text: 'Lo que más les pesa es el conflicto fuerte entre los adultos. Sobre todo si quedan en medio.' },
        { heading: 'Quedar en medio', text: 'Es llevar mensajes, oír críticas al otro o sentir que hay que elegir. Eso da culpa.' },
        { heading: 'Qué hacer', text: 'Habla tú con el otro adulto. No critiques al otro delante de ellos. Déjalos querer a los dos.' },
        { heading: 'Si hay violencia', text: 'Si hay golpes, amenazas o miedo, pide ayuda. Llama a la Línea 144 o al 911.' },
      ],
      related: { practices: ['chicos-fuera-del-conflicto'], articles: ['separarse-con-hijos'] },
      references: [AMATO_2010, KELLY_EMERY_2003],
    },
    {
      id: 'pildora-contarles-la-separacion',
      title: 'Cómo contarles a los chicos',
      subtitle: 'Juntos si se puede, sin culpas y según la edad.',
      slides: [
        { heading: 'Juntos', text: 'Si se puede, cuenten los dos juntos. Con un mismo mensaje y sin culpar al otro.' },
        { heading: 'No es su culpa', text: 'Díganlo claro: «No es tu culpa. Lo decidimos los grandes. No tienes que arreglarlo».' },
        { heading: 'Lo concreto', text: 'Cuenten qué cambia en su día. Dónde duerme, quién lo busca, cuándo ve a cada uno.' },
        { heading: 'Según la edad', text: 'A los chicos chicos, frases simples. A los grandes, más charla. Pero las decisiones son de los adultos.' },
        { heading: 'Volver a hablar', text: 'Una charla no alcanza. Las preguntas vuelven, y está bien.' },
      ],
      related: { practices: ['contarles-la-separacion'], articles: ['separarse-con-hijos'] },
      references: [EMERY_2012],
    },
    {
      id: 'pildora-mensaje-biff',
      title: 'Breve, claro, amable y firme',
      subtitle: 'Cómo escribirle al otro adulto sin pelear.',
      slides: [
        { heading: 'Menos es más', text: 'Con mucho conflicto, cada palabra de más puede ser una pelea. Escribe poco.' },
        { heading: 'Breve', text: 'Tres o cuatro líneas, como mucho.' },
        { heading: 'Sólo datos', text: 'Días, horas y lugares. Sin opiniones, sin ironías, sin «siempre» ni «nunca».' },
        { heading: 'Amable y firme', text: 'Una frase cortés y una propuesta clara: «Gracias por avisar. Lo busco el sábado a las diez».' },
        { heading: 'Esperar', text: 'Si un mensaje te enoja, espera antes de contestar. Casi nada se arregla en caliente.' },
      ],
      related: { practices: ['mensaje-breve-y-neutro', 'pausa-antes-de-responder'], articles: ['separarse-con-hijos'] },
      references: [EDDY_2011],
    },
    {
      id: 'pildora-familias-ensambladas',
      title: 'Familias que se ensamblan',
      subtitle: 'Nuevas parejas y nuevos hermanos, sin apuro.',
      slides: [
        { heading: 'Otro cambio', text: 'Una nueva pareja es otro cambio grande para los chicos. Conviene ir despacio.' },
        { heading: 'De a poco', text: 'Presenta a tu pareja cuando la relación sea estable. Primero en ratos cortos.' },
        { heading: 'Los límites', text: 'Al principio, cada adulto pone los límites a sus propios hijos.' },
        { heading: 'Lo esperable', text: 'Los celos y la desconfianza son comunes al principio. Armar una familia lleva tiempo.' },
        { heading: 'Ratos a solas', text: 'Sigue teniendo ratos a solas con cada hijo o hija. Nadie tiene que querer a la nueva pareja por obligación.' },
      ],
      related: { articles: ['separarse-con-hijos'] },
      references: [HETHERINGTON_KELLY_2002],
    },
  ],

  // ================================================================== guías para familias
  kidGuides: [
    {
      id: 'cuando-la-familia-se-separa',
      title: 'Cuando la familia se separa',
      subtitle: 'Cómo acompañar a tus hijos e hijas en una separación, según la edad.',
      readingMin: 6,
      keyPoints: [
        'Cuéntales juntos si se puede, con un mensaje simple y sin culpar al otro.',
        'Diles claro que no es su culpa y que no tienen que arreglarlo.',
        'Cuéntales qué cambia en su día y qué sigue igual.',
        'No los uses de mensajeros ni hables mal del otro delante de ellos.',
        'Deja que extrañen y quieran al otro adulto sin culpa.',
      ],
      sections: [
        {
          heading: 'Lo que suelen sentir',
          paragraphs: [
            'Es común que sientan tristeza, enojo, miedo o confusión. Algunos chicos piensan que es su culpa o que pueden hacer que los adultos vuelvan. Otros parecen no reaccionar al principio, y el malestar aparece después.',
            'La mayoría se adapta bien con el tiempo, sobre todo si los adultos no los ponen en medio del conflicto (Kelly y Emery, 2003).',
          ],
        },
        {
          heading: 'Según la edad',
          paragraphs: [
            'Los más chicos necesitan rutinas y frases simples: quién los busca, dónde duermen, cuándo ven a cada uno. Despedidas cortas y claras les dan seguridad.',
            'En la escuela primaria pueden preguntar mucho, o nada. Ayuda anticiparles los cambios y darles un lugar para contar lo que sienten. Los adolescentes quieren ser escuchados y opinar. Escúchalos sin cargarlos con decisiones ni con tus problemas de adulto (Emery, 2012).',
          ],
        },
        {
          heading: 'Lo que no ayuda',
          paragraphs: [
            'Pedirles que lleven mensajes, preguntarles de más por la otra casa, hablar mal del otro adulto o pedirles que elijan. Todo eso los pone en medio y les da culpa (Amato, 2010).',
            'Tampoco ayuda que te cuiden a ti. Pueden ver que estás triste, pero no tienen que consolarte. Para eso busca a otros adultos.',
          ],
        },
        {
          heading: 'Nuevas parejas',
          paragraphs: [
            'Si llega una nueva pareja, ve despacio. Preséntala cuando la relación sea estable y no le pidas a tu hijo o hija que la quiera. Al principio, que los límites los ponga cada adulto con sus propios hijos (Hetherington y Kelly, 2002).',
          ],
        },
      ],
      phrases: [
        '«No es tu culpa. Es una decisión de los grandes»',
        '«Los dos te queremos, y eso no cambia»',
        '«Está bien extrañar la otra casa cuando estás aquí»',
        '«Puedes preguntarme lo que quieras, las veces que quieras»',
      ],
      caveat: {
        title: 'Cuándo pedir ayuda',
        body: 'Si tu hijo o hija pasa semanas con mucha tristeza o enojo casi todo el tiempo, no quiere ir a la escuela, se lastima o habla de morir, consulta con un profesional. Ante ideas de morir, llama al 135 o al 0800-999-0091. Si hay violencia en la familia, llama a la Línea 144, a la Línea 102 o al 911.',
      },
      activities: ['como-me-siento', 'colores-de-mis-emociones', 'anticipar-cambios', 'despedidas-cortas', 'cuento-siento-pido', 'cajita-preocupaciones'],
      references: [KELLY_EMERY_2003, EMERY_2012, AMATO_2010, HETHERINGTON_KELLY_2002],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'conflicto-parental', term: 'Conflicto parental', definition: 'Peleas intensas y frecuentes entre los adultos que crían, juntos o separados. Es uno de los mayores riesgos para los chicos cuando ellos quedan en medio.', practiceId: 'chicos-fuera-del-conflicto' },
    { id: 'coparentalidad-paralela', term: 'Coparentalidad paralela', definition: 'Forma de criar tras una separación con mucho conflicto. Cada adulto se ocupa en su casa, con pocas reglas comunes y contacto mínimo por escrito.', articleId: 'separarse-con-hijos', practiceId: 'chicos-fuera-del-conflicto' },
    { id: 'metodo-biff', term: 'Método BIFF', definition: 'Forma de escribir mensajes en un conflicto: breve, informativo, amable y firme. La propuso el mediador Bill Eddy.', practiceId: 'mensaje-breve-y-neutro' },
    { id: 'familia-ensamblada', term: 'Familia ensamblada', definition: 'Familia que se arma cuando un adulto con hijos forma una nueva pareja. Puede sumar hijos de cada uno y de los dos.', articleId: 'separarse-con-hijos' },
  ],
};
