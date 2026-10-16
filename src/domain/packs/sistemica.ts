import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Familia y sistema» (enfoque sistémico):
 *  - el genograma (McGoldrick): un mapa de tres generaciones para ver patrones que se
 *    repiten; la herramienta interactiva está en /laboratorio/genograma y guarda los datos
 *    sólo en el dispositivo, porque incluyen información de terceros;
 *  - diferenciación del self y triangulación (Bowen), mandatos familiares y lealtades
 *    invisibles (Boszormenyi-Nagy);
 *  - artículo, programa de tres semanas, píldoras y glosario.
 *
 * Se insiste en que repetir no es destino: los patrones se transmiten, pero también se
 * cortan. Mirar la historia familiar puede remover duelos o violencias: hay avisos.
 */

const MCGOLDRICK_2008: Reference = {
  citation: 'McGoldrick, M., Gerson, R., & Petry, S. (2008). Genograms: Assessment and intervention (3.ª ed.). W. W. Norton.',
  note: 'Edición en castellano de una versión anterior: «Genogramas en la evaluación familiar», Gedisa.',
};
const BOWEN_1978: Reference = { citation: 'Bowen, M. (1978). Family therapy in clinical practice. Jason Aronson.' };
const KERR_BOWEN_1988: Reference = { citation: 'Kerr, M. E., & Bowen, M. (1988). Family evaluation: An approach based on Bowen theory. W. W. Norton.' };
const NAGY_1973: Reference = { citation: 'Boszormenyi-Nagy, I., & Spark, G. M. (1973). Invisible loyalties: Reciprocity in intergenerational family therapy. Harper & Row.' };
const SKOWRON_1998: Reference = {
  citation: 'Skowron, E. A., & Friedlander, M. L. (1998). The Differentiation of Self Inventory: Development and initial validation. Journal of Counseling Psychology, 45(3), 235–246.',
  doi: '10.1037/0022-0167.45.3.235',
};
const CONGER_2009: Reference = {
  citation: 'Conger, R. D., Belsky, J., & Capaldi, D. M. (2009). The intergenerational transmission of parenting: Closing comments for the special section. Developmental Psychology, 45(5), 1276–1283.',
  doi: '10.1037/a0016911',
  note: 'La transmisión entre generaciones existe, pero es moderada y muchas familias la interrumpen.',
};
const WALSH_2016: Reference = { citation: 'Walsh, F. (2016). Strengthening family resilience (3.ª ed.). Guilford Press.' };

const HISTORIA =
  'Mirar la historia familiar puede traer duelos, secretos o recuerdos de violencia. Ve a tu ritmo y deja afuera lo que hoy no puedas mirar. Si aparece algo muy intenso, trabájalo con un terapeuta.';

export const SISTEMICA_PACK: ContentPack = {
  id: 'sistemica',

  // ================================================================== prácticas
  practices: [
    {
      id: 'mi-genograma',
      title: 'Dibujar mi genograma',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Armar el mapa de tu familia en tres generaciones y buscar qué se repite: formas de vincularse, pérdidas, fortalezas y temas de los que no se habla.',
      mechanism: 'Ver la familia entera en un dibujo muestra patrones que de cerca no se ven. Lo que se ve se puede pensar, y lo que se piensa se puede elegir.',
      evidenceLevel: 'preliminar',
      evidence: [MCGOLDRICK_2008, BOWEN_1978, CONGER_2009],
      howItWorks: [
        'El genograma es un dibujo de la familia con símbolos simples: cuadrados, círculos y líneas. Monica McGoldrick y sus colegas lo popularizaron como herramienta de la terapia familiar. Se usa para ver tres generaciones de un vistazo.',
        'Al mirarlo aparecen preguntas. ¿Hay separaciones en cada generación? ¿Quién cuida siempre a los demás? ¿Qué pérdidas no se hablaron? ¿Qué fortalezas se heredaron? Murray Bowen pensaba que muchos patrones se transmiten así, de una generación a otra.',
        'La transmisión existe, pero no es un destino. Los estudios muestran que es moderada y que muchas personas la interrumpen (Conger y colaboradores, 2009). Verla es el primer paso para elegir qué seguir y qué cambiar.',
      ],
      tips: [
        'Usa la herramienta del Laboratorio o una hoja grande.',
        'Usa apodos o iniciales: son datos de otras personas.',
        'No hace falta saber todo. Los huecos también dicen algo.',
        'Anota también las fortalezas, no sólo los problemas.',
        'Puedes preguntar a familiares, si te sientes cómodo.',
      ],
      obstacles: [
        { q: 'No sé casi nada de mis abuelos.', a: 'Es muy común. Anota lo que sabes y deja el resto en blanco. Lo que no se sabe a veces señala un tema del que no se habló.' },
        { q: 'Mi familia es complicada para dibujar.', a: 'Las familias reales lo son. Puedes sumar a quien fue importante aunque no sea pariente: una madrina, un vecino, una pareja de tu madre.' },
      ],
      cautions: HISTORIA,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Recuerda que puedes parar cuando quieras.', durationSec: 30, kind: 'breath' },
        { title: 'Tu lugar', instruction: 'Abre la herramienta del genograma o toma una hoja. Empieza por ti, en el centro.', durationSec: 45, kind: 'instruction' },
        { title: 'Tu generación', instruction: 'Suma a tus hermanos y a tu pareja, si tienes. Si tienes hijos, ponlos debajo.', durationSec: 90, kind: 'instruction' },
        { title: 'Tus padres', instruction: 'Suma a tus padres y a sus hermanos. También a quien te crió, aunque no sea tu padre o tu madre.', durationSec: 90, kind: 'instruction' },
        { title: 'Tus abuelos', instruction: 'Suma a tus cuatro abuelos. Pon lo que sepas: dónde nacieron, a qué se dedicaron, si viven.', durationSec: 90, kind: 'instruction' },
        { title: 'Temas', instruction: 'Marca temas en cada persona: migración, enfermedad, adicciones, separaciones, pérdidas tempranas o fortalezas.', durationSec: 90, kind: 'reflection' },
        { title: 'Lo que se repite', instruction: 'Mira el dibujo de lejos. ¿Qué aparece en más de una generación? Anota una o dos cosas.', durationSec: 75, kind: 'reflection' },
        { title: 'Lo que eliges', instruction: '¿Qué de esto quieres seguir? ¿Qué te gustaría que termine contigo?', durationSec: 60, kind: 'reflection' },
      ],
    },
    {
      id: 'mandatos-familiares',
      title: 'Lo que se dice en mi familia',
      family: 'deconstructive',
      skills: ['attention', 'resilience'],
      summary: 'Reconocer los mandatos familiares, las frases y reglas que se heredan, y decidir cuáles quieres conservar.',
      mechanism: 'Escribir los mandatos los vuelve visibles. Ya no son «la verdad», sino reglas de una familia que puedes revisar.',
      evidenceLevel: 'contemplativa',
      evidence: [BOWEN_1978, MCGOLDRICK_2008],
      howItWorks: [
        'Toda familia tiene reglas, aunque nadie las diga en voz alta. «Los hombres no lloran.» «Primero el deber.» «De eso no se habla.» «En esta familia nadie se separa.» Se aprenden de chico, casi sin darse cuenta.',
        'Muchos mandatos protegen y transmiten valores. Otros nacieron en otro tiempo, para otros problemas, y hoy pesan. Revisarlos no es traicionar a la familia: es decidir como adulto qué llevar contigo.',
      ],
      tips: [
        'Piensa en frases que escuchabas en la mesa o en las fiestas.',
        'Mira también lo que no se decía, pero todos sabían.',
        'Puedes conservar un mandato y cambiar su forma. Por ejemplo, «cuidar a la familia» sin olvidarte de ti.',
      ],
      obstacles: [{ q: 'Siento culpa al cuestionarlos.', a: 'Es esperable: los mandatos vienen con lealtad. Puedes agradecer lo que te dieron y, aun así, elegir otra forma.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Imagina la mesa familiar de tu infancia.', durationSec: 30, kind: 'breath' },
        { title: 'Las frases', instruction: 'Anota tres frases que se repetían en tu casa. Sobre el trabajo, el dinero, las emociones o el amor.', durationSec: 75, kind: 'reflection' },
        { title: 'Lo no dicho', instruction: '¿Había algo de lo que no se hablaba? ¿Una regla que todos cumplían sin nombrarla?', durationSec: 60, kind: 'reflection' },
        { title: 'De dónde viene', instruction: 'Elige un mandato. ¿De quién viene? ¿Qué problema intentaba resolver en su momento?', durationSec: 60, kind: 'reflection' },
        { title: 'Hoy', instruction: '¿Cómo te ayuda hoy ese mandato? ¿Cómo te limita?', durationSec: 60, kind: 'reflection' },
        { title: 'Tu versión', instruction: 'Reescribe el mandato con tus palabras, como quieres vivirlo hoy.', durationSec: 60, kind: 'reflection' },
      ],
    },
    {
      id: 'lealtades-invisibles',
      title: 'Lealtades invisibles',
      family: 'deconstructive',
      skills: ['compassion', 'resilience'],
      summary: 'Explorar si hay algo que haces o te prohíbes por lealtad a alguien de tu familia, aunque no lo hayas elegido.',
      mechanism: 'Nombrar una lealtad que actúa a escondidas permite honrarla de otra forma, sin repetir el sacrificio.',
      evidenceLevel: 'contemplativa',
      evidence: [NAGY_1973, WALSH_2016],
      howItWorks: [
        'Iván Boszormenyi-Nagy describió las «lealtades invisibles». Son compromisos con la familia que actúan sin que uno lo sepa. Alguien no se permite ser más feliz que su madre. Otra persona fracasa justo antes de superar a su padre.',
        'Para Nagy, las familias llevan una especie de cuenta de lo que se da y se recibe. Cuando algo quedó injusto o sin reconocer, las generaciones siguientes pueden intentar saldarlo.',
        'No se trata de cortar los lazos, sino de honrarlos de una forma que no te dañe. Puedes agradecer y recordar sin repetir.',
      ],
      tips: [
        'Busca dónde te frenas justo antes de lograr algo.',
        'Piensa en alguien de tu familia que sufrió mucho o no pudo cumplir un deseo.',
        'Un gesto simbólico ayuda: una carta que no envías, una foto, un brindis.',
      ],
      obstacles: [{ q: 'Me parece rebuscado.', a: 'Puede no aplicarse a ti. Tómalo como una pregunta posible, no como una explicación. Si no resuena, déjalo.' }],
      cautions: HISTORIA,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio y nota el apoyo del cuerpo.', durationSec: 30, kind: 'breath' },
        { title: 'Donde me freno', instruction: '¿En qué área de tu vida te frenas sin saber bien por qué? El amor, el trabajo, el dinero, el disfrute.', durationSec: 75, kind: 'reflection' },
        { title: 'Alguien de la familia', instruction: '¿Hay alguien de tu familia a quien le fue mal en esa misma área? ¿Qué le pasó?', durationSec: 75, kind: 'reflection' },
        { title: 'La pregunta', instruction: 'Pregúntate con suavidad: si me fuera bien en esto, ¿sentiría que dejo a alguien atrás?', durationSec: 60, kind: 'reflection' },
        { title: 'Honrar de otra forma', instruction: '¿Cómo podrías honrar a esa persona sin repetir su historia? Piensa un gesto o una frase.', durationSec: 75, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho. Dite: «Puedo quererte y vivir mi propia vida».', durationSec: 40, kind: 'breath' },
      ],
    },
    {
      id: 'en-calma-con-mi-familia',
      title: 'Estar en contacto sin perderme',
      family: 'attentional',
      skills: ['resilience', 'attention'],
      summary: 'Prepararte para un encuentro familiar difícil: quedarte en contacto con los demás sin dejarte arrastrar por la tensión ni cortar el vínculo.',
      mechanism: 'Bowen llamó diferenciación a poder pensar y sentir por uno mismo mientras se está en contacto con la familia. Se entrena notando la reactividad y eligiendo la respuesta.',
      evidenceLevel: 'preliminar',
      evidence: [KERR_BOWEN_1988, SKOWRON_1998],
      howItWorks: [
        'Murray Bowen observó dos formas de reaccionar a la tensión familiar. Una es fusionarse: sentir lo que siente el grupo, enojarse con el enojo de todos. La otra es cortar: alejarse para no sentir nada. Las dos alivian y las dos cuestan.',
        'La diferenciación es un camino intermedio. Es seguir en contacto, con calma, diciendo lo que piensas sin atacar y sin desaparecer. Los estudios muestran que una mayor diferenciación se asocia a menos ansiedad y mejores vínculos (Skowron y Friedlander, 1998).',
        'Otra idea de Bowen es la triangulación. Cuando dos personas están tensas, suelen meter a un tercero: un hijo, un abuelo, un amigo. Salir del triángulo es hablar con la persona y no de la persona.',
      ],
      tips: [
        'Elige un solo objetivo para el encuentro, pequeño y posible.',
        'Prepara una frase para salir de un triángulo: «Eso háblalo con él, yo prefiero no meterme».',
        'Puedes tomarte pausas: ir al baño, salir a respirar, ayudar en la cocina.',
      ],
      obstacles: [{ q: 'En cuanto llego, vuelvo a ser el de siempre.', a: 'Le pasa a casi todos. La familia despierta roles viejos. Nota cuándo pasa, sin castigarte, y vuelve a tu respiración.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Piensa en el próximo encuentro familiar que te preocupa.', durationSec: 40, kind: 'breath' },
        { title: 'Mi reacción típica', instruction: '¿Qué sueles hacer cuando hay tensión? ¿Te enganchas, te callas, te vas o haces de mediador?', durationSec: 60, kind: 'reflection' },
        { title: 'El triángulo', instruction: '¿Te suelen meter en conflictos de otros? ¿Quién y cómo?', durationSec: 60, kind: 'reflection' },
        { title: 'Una frase', instruction: 'Prepara una frase para decir lo que piensas con calma, sin atacar. Escríbela.', durationSec: 60, kind: 'reflection' },
        { title: 'Una pausa', instruction: 'Elige cómo vas a tomarte una pausa si sube la tensión. Por ejemplo, salir a respirar dos minutos.', durationSec: 45, kind: 'reflection' },
        { title: 'Ensayo', instruction: 'Imagina el momento difícil. Siente los pies en el piso, respira y di tu frase en voz baja.', durationSec: 60, kind: 'breath' },
      ],
    },
  ],

  meta: {
    'mi-genograma': { level: 'intermedio', approaches: ['sistemica'], module: 'autoconocimiento', prerequisites: ['linea-de-vida'] },
    'mandatos-familiares': { level: 'intermedio', approaches: ['sistemica', 'tcc'], module: 'autoconocimiento' },
    'lealtades-invisibles': { level: 'avanzado', approaches: ['sistemica'], module: 'autoconocimiento', prerequisites: ['mi-genograma'] },
    'en-calma-con-mi-familia': { level: 'intermedio', approaches: ['sistemica', 'mindfulness'], module: 'relaciones' },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'familia-como-sistema',
      title: 'La familia como sistema: genograma, mandatos y lealtades',
      subtitle: 'Por qué los patrones familiares se repiten, cómo verlos en un dibujo y qué hacer con lo que encuentras.',
      category: 'Autoconocimiento y patrones',
      readingMin: 8,
      keyPoints: [
        'El enfoque sistémico mira a la persona dentro de sus vínculos, no aislada.',
        'El genograma muestra tres generaciones y ayuda a ver patrones que se repiten.',
        'Bowen describió la diferenciación: estar en contacto sin perderse.',
        'Los mandatos y las lealtades familiares actúan muchas veces sin que lo sepamos.',
        'Repetir no es destino: muchas personas cortan patrones dañinos.',
      ],
      sections: [
        {
          heading: 'Mirar el sistema',
          paragraphs: [
            'La terapia sistémica nació a mediados del siglo veinte. Su idea central es que una persona no se entiende sola: forma parte de un sistema de vínculos. Lo que le pasa a uno afecta a todos, y al revés.',
            'Por eso, en lugar de preguntar sólo «qué le pasa a esta persona», pregunta «qué pasa en este sistema». A veces el síntoma de alguien tiene una función en la familia, como unir a los padres o desviar la atención de otro conflicto.',
          ],
        },
        {
          heading: 'El genograma',
          paragraphs: [
            'El genograma es un mapa de la familia. Los hombres se dibujan con cuadrados y las mujeres con círculos. Las parejas se unen con una línea horizontal y los hijos cuelgan debajo. Una cruz marca a quien murió.',
            'Monica McGoldrick y sus colegas mostraron cómo leerlo. Se buscan repeticiones: separaciones, enfermedades, adicciones, migraciones, profesiones o lugares en la familia que se repiten. También se miran fechas: muchas crisis coinciden con aniversarios de pérdidas. En el Laboratorio puedes armar el tuyo.',
          ],
        },
        {
          heading: 'Diferenciación y triángulos',
          paragraphs: [
            'Murray Bowen llamó diferenciación del self a la capacidad de pensar y sentir por uno mismo mientras se sigue en contacto con la familia. Con poca diferenciación, uno se fusiona con las emociones del grupo o corta el vínculo para no sentir.',
            'Bowen también describió los triángulos. Cuando dos personas están tensas, buscan a un tercero para bajar la tensión: un hijo que escucha las quejas de un padre sobre el otro. El triángulo alivia, pero el conflicto queda sin resolver.',
          ],
        },
        {
          heading: 'Mandatos y lealtades',
          paragraphs: [
            'Los mandatos familiares son reglas que se heredan: «primero el deber», «de eso no se habla». Iván Boszormenyi-Nagy habló de lealtades invisibles: compromisos con la familia que guían lo que hacemos sin que lo sepamos.',
            'Revisarlos no es traicionar. Es decidir como adulto qué conservar y qué cambiar. Se puede honrar a quienes vinieron antes sin repetir lo que les hizo daño.',
          ],
        },
        {
          heading: 'Repetir no es destino',
          paragraphs: [
            'Hay transmisión entre generaciones: en la forma de criar, de vincularse y de enfrentar problemas. Pero los estudios muestran que es moderada y que muchas familias la interrumpen (Conger y colaboradores, 2009).',
            'Froma Walsh estudió la resiliencia familiar: lo que ayuda a las familias a atravesar crisis. Aparecen la comunicación abierta, darle sentido a lo vivido y apoyarse mutuamente. En un genograma también hay que buscar eso: las fortalezas que se heredan.',
          ],
        },
      ],
      caveat: {
        title: 'Con cuidado',
        body: 'Un genograma incluye datos sensibles de otras personas. Usa apodos o iniciales y guárdalo en un lugar privado. La herramienta del Laboratorio lo guarda sólo en tu dispositivo. Ni el genograma ni estas ideas sirven para diagnosticar a nadie. Si al mirar tu historia aparecen recuerdos de violencia o abuso, busca acompañamiento profesional. Hay corrientes que prometen «sanar el linaje» con constelaciones o rituales: no tienen evidencia y pueden hacer daño.',
      },
      diagram: {
        title: 'Cómo se transmite un patrón',
        nodes: ['Algo duro pasa en una generación', 'La familia se adapta con una regla', 'La regla se enseña sin decirla', 'La generación siguiente la repite', 'Alguien la ve y puede elegir'],
        caption: 'El genograma ayuda a llegar al último paso: ver el patrón para decidir qué seguir.',
      },
      related: { practices: ['mi-genograma', 'mandatos-familiares', 'lealtades-invisibles', 'en-calma-con-mi-familia', 'linea-de-vida'], articles: ['terapia-de-esquemas'] },
      references: [MCGOLDRICK_2008, BOWEN_1978, KERR_BOWEN_1988, SKOWRON_1998, NAGY_1973, CONGER_2009, WALSH_2016],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'mi-familia-y-yo',
      title: 'Mi familia y yo',
      subtitle: 'Tres semanas para mirar tu historia familiar y elegir qué llevar contigo',
      description:
        'Armarás tu genograma, verás qué se repite, revisarás los mandatos que heredaste y practicarás estar en contacto con tu familia sin perderte. Puede remover cosas: ve a tu ritmo y, si tienes terapeuta, llévale lo que encuentres.',
      basis: 'McGoldrick, Gerson y Petry (2008); Bowen (1978); Boszormenyi-Nagy y Spark (1973).',
      rhythm: '15 minutos, 3 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · El mapa',
          focus: 'Tres generaciones en un dibujo',
          description: 'Leerás sobre la familia como sistema y armarás tu genograma en el Laboratorio.',
          practiceIds: ['linea-de-vida', 'mi-genograma'],
          articleIds: ['familia-como-sistema'],
          journalType: 'mis-roles',
        },
        {
          title: 'Semana 2 · Lo heredado',
          focus: 'Mandatos y lealtades',
          description: 'Escribirás los mandatos de tu familia y explorarás si hay lealtades que te frenan.',
          practiceIds: ['mandatos-familiares', 'lealtades-invisibles'],
          articleIds: [],
          journalType: 'patron-repetido',
        },
        {
          title: 'Semana 3 · Estar sin perderme',
          focus: 'Contacto con calma',
          description: 'Prepararás un encuentro familiar y practicarás salir de los triángulos.',
          practiceIds: ['en-calma-con-mi-familia', 'dear-man'],
          articleIds: [],
          journalType: 'conversacion',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-genograma',
      title: 'Tu familia en un dibujo',
      subtitle: 'Qué es un genograma y para qué sirve.',
      slides: [
        { heading: 'Un mapa', text: 'Un genograma es un dibujo de tu familia. Cuadrados para los hombres, círculos para las mujeres y líneas que los unen.' },
        { heading: 'Tres generaciones', text: 'Se dibujan tus abuelos, tus padres y tu generación. Así se ve la familia entera de un vistazo.' },
        { heading: 'Lo que se repite', text: 'Al mirarlo aparecen patrones. Separaciones, migraciones, enfermedades o el que siempre cuida a todos.' },
        { heading: 'También fortalezas', text: 'No todo es problema. También se heredan formas de salir adelante, de ayudarse y de reír.' },
        { heading: 'No es destino', text: 'Que algo se repita no significa que te toque. Verlo te ayuda a elegir qué seguir y qué cambiar.' },
      ],
      related: { practices: ['mi-genograma'], articles: ['familia-como-sistema'] },
      references: [MCGOLDRICK_2008, CONGER_2009],
    },
    {
      id: 'pildora-mandatos',
      title: '«En esta familia…»',
      subtitle: 'Las reglas que heredamos sin darnos cuenta.',
      slides: [
        { heading: 'Reglas sin decir', text: 'Toda familia tiene reglas. «Los hombres no lloran.» «De eso no se habla.» Nadie las escribe, pero todos las cumplen.' },
        { heading: 'Tuvieron sentido', text: 'Muchas reglas nacieron para resolver un problema de otra época. Protegieron a la familia en su momento.' },
        { heading: 'Hoy pesan', text: 'Algunas siguen ayudando. Otras hoy te limitan. Vale la pena mirarlas una por una.' },
        { heading: 'No es traición', text: 'Revisar un mandato no es traicionar a tu familia. Es decidir como adulto qué llevar contigo.' },
        { heading: 'Tu versión', text: 'Puedes conservar el valor y cambiar la forma. Por ejemplo, cuidar a la familia sin olvidarte de ti.' },
      ],
      related: { practices: ['mandatos-familiares', 'lealtades-invisibles'], articles: ['familia-como-sistema'] },
      references: [BOWEN_1978, NAGY_1973],
    },
    {
      id: 'pildora-diferenciacion',
      title: 'Cerca, pero sin perderte',
      subtitle: 'La diferenciación según Murray Bowen.',
      slides: [
        { heading: 'Dos extremos', text: 'Ante la tensión familiar, algunos se enganchan con todo. Otros se alejan para no sentir nada.' },
        { heading: 'Un camino del medio', text: 'Bowen llamó diferenciación a seguir en contacto sin perderte. Pensar por ti mientras estás con ellos.' },
        { heading: 'Los triángulos', text: 'Cuando dos están tensos, suelen meter a un tercero. Por ejemplo, un hijo que escucha las quejas de un padre sobre el otro.' },
        { heading: 'Salir del triángulo', text: 'Habla con la persona, no de la persona. Puedes decir: «Eso háblalo con él».' },
        { heading: 'Se practica', text: 'En la familia vuelven los roles viejos. Nota cuándo pasa, respira y elige tu respuesta.' },
      ],
      related: { practices: ['en-calma-con-mi-familia'], articles: ['familia-como-sistema'] },
      references: [KERR_BOWEN_1988, SKOWRON_1998],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'genograma', term: 'Genograma', definition: 'Dibujo de la familia en al menos tres generaciones, con símbolos simples, para ver patrones que se repiten y fortalezas que se heredan.', practiceId: 'mi-genograma', seeAlso: { href: '/laboratorio/genograma', label: 'Armar tu genograma' } },
    { id: 'diferenciacion-del-self', term: 'Diferenciación del self', definition: 'Para Murray Bowen, la capacidad de pensar y sentir por uno mismo mientras se sigue en contacto con la familia, sin fusionarse ni cortar el vínculo.', practiceId: 'en-calma-con-mi-familia' },
    { id: 'triangulacion', term: 'Triangulación', definition: 'Cuando dos personas en tensión meten a un tercero para aliviarla, por ejemplo un hijo. Alivia, pero deja el conflicto sin resolver.', articleId: 'familia-como-sistema' },
    { id: 'mandato-familiar', term: 'Mandato familiar', definition: 'Regla que se hereda en una familia, muchas veces sin decirse: «primero el deber», «de eso no se habla».', practiceId: 'mandatos-familiares' },
    { id: 'lealtad-invisible', term: 'Lealtad invisible', definition: 'Para Iván Boszormenyi-Nagy, un compromiso con la familia que guía lo que hacemos sin que lo sepamos, como no permitirse superar a un padre.', practiceId: 'lealtades-invisibles' },
  ],
};
