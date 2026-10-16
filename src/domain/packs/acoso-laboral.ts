import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Acoso laboral y maltrato en el trabajo»:
 *  - qué es y qué no es: conflicto puntual frente a hostigamiento sistemático (Leymann; Einarsen y colaboradores);
 *  - efectos en la salud (Nielsen y Einarsen);
 *  - registrar hechos: fechas, testigos y mensajes;
 *  - poner un límite asertivo sólo cuando es seguro;
 *  - buscar apoyo: delegado gremial, recursos humanos, sindicato, abogado laboralista;
 *  - cuidarse fuera del trabajo;
 *  - acoso sexual en el trabajo (derivar; Línea 144 si es por motivos de género);
 *  - testigos que ayudan (se enlaza la práctica existente «testigo-que-ayuda»);
 *  - marco: Convenio 190 de la OIT, ratificado en la Argentina por la Ley 27.580 de 2020.
 *
 * Reglas de seguridad del paquete: no se da asesoramiento legal; siempre se remite a un
 * abogado laboralista o al sindicato. Nunca se indica enfrentar a quien acosa si no es
 * seguro. Ante acoso sexual o por motivos de género se nombra la Línea 144; ante ideas de
 * hacerse daño, 135 o 0800-999-0091; ante peligro, 911.
 */

const LEYMANN_1996: Reference = {
  citation: 'Leymann, H. (1996). The content and development of mobbing at work. European Journal of Work and Organizational Psychology, 5(2), 165–184.',
};
const EINARSEN_2009: Reference = {
  citation:
    'Einarsen, S., Hoel, H., & Notelaers, G. (2009). Measuring exposure to bullying and harassment at work: Validity, factor structure and psychometric properties of the Negative Acts Questionnaire-Revised. Work & Stress, 23(1), 24–44.',
};
const NIELSEN_2012: Reference = {
  citation: 'Nielsen, M. B., & Einarsen, S. (2012). Outcomes of exposure to workplace bullying: A meta-analytic review. Work & Stress, 26(4), 309–332.',
};
const OIT_2019: Reference = {
  citation: 'Organización Internacional del Trabajo (2019). Convenio sobre la violencia y el acoso, 2019 (núm. 190). OIT.',
  note: 'En la Argentina fue ratificado por la Ley 27.580 de 2020. Para saber cómo se aplica a tu caso, consulta a un abogado laboralista o al sindicato.',
};

/** Aviso común: no es asesoramiento legal y cuándo es urgente. */
const AVISO =
  'Esta práctica no es asesoramiento legal. Para decidir qué hacer, consulta a un abogado laboralista o al sindicato. Si hay acoso sexual o por motivos de género, llama a la Línea 144. Si tienes ideas de hacerte daño, llama al 135 o al 0800-999-0091. Si hay peligro, al 911.';

export const ACOSO_LABORAL_PACK: ContentPack = {
  id: 'acoso-laboral',

  // ================================================================== prácticas
  practices: [
    {
      id: 'conflicto-o-acoso-laboral',
      title: '¿Conflicto o acoso laboral?',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Mirar con calma lo que pasa en tu trabajo para distinguir un conflicto puntual de un hostigamiento que se repite.',
      mechanism: 'Poner nombre a lo que pasa, con hechos y no sólo con sensaciones, baja la confusión y ayuda a elegir el siguiente paso.',
      evidenceLevel: 'preliminar',
      evidence: [LEYMANN_1996, EINARSEN_2009],
      howItWorks: [
        'Heinz Leymann describió el acoso laboral, o mobbing, como un trato hostil que se dirige de forma sistemática a una persona y se repite durante mucho tiempo (Leymann, 1996). Una discusión aislada, un mal día o una crítica a tu trabajo no son lo mismo.',
        'Ståle Einarsen y su equipo midieron el acoso con una lista de conductas negativas. Unas apuntan a la tarea, como sacarte funciones o darte metas imposibles. Otras apuntan a la persona, como burlas, rumores o dejarte afuera. Y otras son intimidación (Einarsen y colaboradores, 2009).',
        'Lo que suele marcar la diferencia es la repetición, el tiempo y que te cueste defenderte. Esta práctica no da un diagnóstico. Te ayuda a ordenar lo que pasa para hablarlo con alguien de confianza.',
      ],
      tips: [
        'Anota conductas concretas, no adjetivos. «Me gritó delante de todos» sirve más que «es malo».',
        'Pregúntate si pasa con frecuencia y desde hace cuánto.',
        'Que dudes no quiere decir que exageres. El acoso suele generar mucha duda.',
        'Comparte lo que anotaste con alguien de confianza fuera del trabajo.',
      ],
      obstacles: [
        { q: 'No sé si estoy exagerando.', a: 'Es una duda muy común. Por eso ayuda mirar hechos, fechas y frecuencia. Si se repite y te hace daño, merece atención, tenga el nombre que tenga.' },
        { q: 'A veces la persona es amable conmigo.', a: 'Puede pasar. El acoso no siempre es constante en el tono. Fíjate en el patrón a lo largo de semanas, no en un solo día.' },
      ],
      cautions: AVISO,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Siente los pies en el piso. Vas a mirar tu trabajo desde afuera, por un rato.', durationSec: 40, kind: 'breath' },
        { title: 'Qué pasa', instruction: 'Anota dos o tres cosas que te pasan en el trabajo y te hacen mal. Usa hechos, no adjetivos.', durationSec: 75, kind: 'reflection' },
        { title: 'Cuántas veces', instruction: 'Al lado de cada una, anota si pasó una vez o si se repite. ¿Desde hace cuánto tiempo?', durationSec: 60, kind: 'reflection' },
        { title: 'Hacia qué apunta', instruction: 'Marca si apunta a tu tarea, a tu persona o si te intimida. Por ejemplo, te sacan tareas, se burlan o te gritan.', durationSec: 60, kind: 'reflection' },
        { title: 'Poder', instruction: 'Pregúntate si puedes defenderte o frenar esto. ¿O te cuesta mucho, por el cargo o por miedo?', durationSec: 45, kind: 'reflection' },
        { title: 'Con quién', instruction: 'Escribe el nombre de una persona de confianza para contarle lo que anotaste. Puede ser de tu familia, tus amistades o un profesional.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Recuerda que poner nombre a lo que pasa ya es un paso.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'registro-de-hechos-en-el-trabajo',
      title: 'Registrar los hechos',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Armar un registro ordenado de lo que pasa en el trabajo: fechas, lugares, testigos y mensajes.',
      mechanism: 'Un registro claro protege tu memoria del estrés y te da algo concreto para mostrar a quien pueda ayudarte.',
      evidenceLevel: 'preliminar',
      evidence: [LEYMANN_1996, OIT_2019],
      howItWorks: [
        'Cuando el acoso se repite, el estrés hace que los recuerdos se mezclen. Anotar cada hecho cerca del momento ayuda a no perder detalles y a ver el patrón (Leymann, 1996).',
        'Un registro ordenado también ayuda cuando hablas con el delegado gremial, el sindicato, recursos humanos o un abogado laboralista. Ellos te dirán qué sirve en tu caso. Esta práctica no reemplaza ese consejo.',
        'Guarda el registro en un lugar tuyo, fuera de los equipos y las cuentas del trabajo.',
      ],
      tips: [
        'Anota lo antes posible, el mismo día si puedes.',
        'Escribe qué se dijo con las palabras más parecidas que recuerdes, entre comillas.',
        'Guarda capturas de mensajes y correos con la fecha visible.',
        'Anota también cómo te afectó: dormir mal, faltar o ir al médico.',
      ],
      obstacles: [
        { q: 'Anotar me hace pensar todo el tiempo en eso.', a: 'Es comprensible. Pon un horario corto para anotar, por ejemplo diez minutos al llegar a casa. Después cierra el cuaderno y haz algo que te guste.' },
        { q: 'No hay testigos.', a: 'Anota igual. Un registro hecho en el momento, con fecha, tiene valor. Pregunta a un abogado laboralista o al sindicato qué más puede servir.' },
      ],
      cautions: AVISO,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Ten a mano un cuaderno o una nota en tu celular personal.', durationSec: 30, kind: 'breath' },
        { title: 'Cuándo y dónde', instruction: 'Anota la fecha, la hora aproximada y el lugar del hecho. Por ejemplo, la reunión del lunes en la oficina.', durationSec: 45, kind: 'instruction' },
        { title: 'Qué pasó', instruction: 'Describe qué pasó en frases cortas. Escribe lo que se dijo entre comillas, lo más parecido que recuerdes.', durationSec: 75, kind: 'reflection' },
        { title: 'Quiénes estaban', instruction: 'Anota quién lo hizo y quiénes lo vieron o lo oyeron.', durationSec: 40, kind: 'reflection' },
        { title: 'Pruebas', instruction: 'Guarda capturas, correos o mensajes. Que se vea la fecha. Guárdalos fuera de las cuentas del trabajo.', durationSec: 60, kind: 'instruction' },
        { title: 'Cómo te afectó', instruction: 'Anota cómo te sentiste y qué cambió después. Por ejemplo, no dormiste, faltaste o fuiste al médico.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Cierra el registro. Respira despacio y haz algo que te traiga al presente.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'limite-asertivo-en-el-trabajo',
      title: 'Poner un límite en el trabajo, si es seguro',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Preparar una frase breve y firme para frenar una conducta, sólo cuando hacerlo no te pone en riesgo.',
      mechanism: 'Una frase preparada en calma es más fácil de decir bajo presión. Ensayarla baja la activación y te deja más clara.',
      evidenceLevel: 'preliminar',
      evidence: [EINARSEN_2009, NIELSEN_2012],
      howItWorks: [
        'A veces una frase clara frena una conducta, sobre todo al principio o cuando es entre pares. Otras veces no alcanza, porque hay mucha diferencia de poder. Por eso el primer paso es preguntarte si es seguro.',
        'Si no es seguro, no hace falta enfrentar. Puedes registrar los hechos y buscar apoyo. Poner un límite no es una obligación ni una prueba de valentía.',
        'La frase sirve más si es corta, describe la conducta y dice qué necesitas. Se parece a la habilidad DEAR MAN de la terapia dialéctica.',
      ],
      tips: [
        'Habla de la conducta, no de la persona: «Cuando me gritas…» y no «Eres un…».',
        'Si puedes, hazlo con un testigo o por escrito.',
        'Después, anota lo que pasó en tu registro.',
        'Si hay amenazas, contacto físico o acoso sexual, no lo manejes sola ni solo. Busca apoyo enseguida.',
      ],
      obstacles: [
        { q: 'Me da miedo que empeore.', a: 'Es un miedo razonable. Si piensas que puede empeorar, no lo hagas todavía. Habla primero con el delegado gremial, el sindicato o un abogado laboralista.' },
        { q: 'Me quedo en blanco en el momento.', a: 'Le pasa a mucha gente. Por eso se ensaya. También puedes decir sólo «Ahora no. Lo hablamos después» y retirarte.' },
      ],
      cautions: AVISO,
      steps: [
        { title: '¿Es seguro?', instruction: 'Antes de todo, pregúntate si poner un límite te expone a un riesgo. Si la respuesta es sí, frena aquí y busca apoyo.', durationSec: 45, kind: 'reflection' },
        { title: 'La conducta', instruction: 'Elige una sola conducta que quieras frenar. Descríbela con hechos. Por ejemplo, gritarte delante del equipo.', durationSec: 45, kind: 'reflection' },
        { title: 'Tu frase', instruction: 'Escribe una frase corta. Por ejemplo: «Cuando me gritas delante de todos, no puedo trabajar. Te pido que me lo digas en privado y con calma».', durationSec: 75, kind: 'reflection' },
        { title: 'Si insiste', instruction: 'Escribe una frase para repetir si la otra persona discute. Por ejemplo: «Te entiendo, y te pido lo mismo».', durationSec: 45, kind: 'reflection' },
        { title: 'Ensayar', instruction: 'Di tu frase en voz alta dos o tres veces. Con voz tranquila y la espalda recta.', durationSec: 45, kind: 'instruction' },
        { title: 'Respirar', instruction: 'Toma aire en cuatro tiempos y suéltalo en seis. Nota que puedes estar firme y en calma.', durationSec: 40, kind: 'breath' },
        { title: 'Después', instruction: 'Piensa a quién le vas a contar cómo salió. Y recuerda anotarlo en tu registro.', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'mapa-de-apoyos-en-el-trabajo',
      title: 'Mi mapa de apoyos',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Hacer una lista de personas y lugares que pueden ayudarte, dentro y fuera del trabajo, y elegir a quién acudir primero.',
      mechanism: 'El acoso aísla. Saber con quién contar y dar un primer paso concreto devuelve algo de control.',
      evidenceLevel: 'preliminar',
      evidence: [NIELSEN_2012, OIT_2019],
      howItWorks: [
        'El acoso suele dejar a la persona sola, con dudas y vergüenza. El apoyo de otras personas protege la salud y ayuda a pensar con más claridad.',
        'Dentro del trabajo puede haber un delegado gremial, una comisión interna, recursos humanos o un área de bienestar. Fuera, están el sindicato, un abogado laboralista, tu médico o un psicólogo, y tus vínculos de confianza.',
        'En la Argentina rige el Convenio 190 de la OIT sobre violencia y acoso en el mundo del trabajo (Organización Internacional del Trabajo, 2019). Un abogado laboralista o el sindicato pueden explicarte qué significa en tu caso.',
      ],
      tips: [
        'Empieza por quien te dé más confianza, no por quien tenga más poder.',
        'Lleva tu registro de hechos a cada charla.',
        'Pregunta en cada lugar qué es confidencial y qué no.',
        'Si el acoso es sexual o por motivos de género, puedes llamar a la Línea 144.',
      ],
      obstacles: [
        { q: 'Recursos humanos responde a la empresa.', a: 'Es una duda válida. Por eso conviene tener también apoyos fuera, como el sindicato o un abogado laboralista. Ellos pueden ayudarte a decidir a quién acudir y cómo.' },
      ],
      cautions: AVISO,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Pon una mano en el pecho. No tienes que atravesar esto en soledad.', durationSec: 30, kind: 'breath' },
        { title: 'En el trabajo', instruction: 'Anota quién podría ayudarte dentro del trabajo. Un delegado gremial, recursos humanos o un compañero de confianza.', durationSec: 60, kind: 'reflection' },
        { title: 'Fuera del trabajo', instruction: 'Anota apoyos de afuera. El sindicato, un abogado laboralista, tu médico, un psicólogo o tus afectos.', durationSec: 60, kind: 'reflection' },
        { title: 'Para urgencias', instruction: 'Anota la Línea 144 si hay acoso sexual o por género. Y el 135 o el 0800-999-0091 si aparecen ideas de hacerte daño.', durationSec: 45, kind: 'instruction' },
        { title: 'El primer paso', instruction: 'Elige una sola persona o lugar para esta semana. Escribe qué día vas a contactarle.', durationSec: 45, kind: 'reflection' },
        { title: 'Qué llevar', instruction: 'Anota qué vas a llevar o contar. Por ejemplo, tu registro y dos preguntas concretas.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Pedir ayuda es una forma de cuidarte.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'mi-vida-fuera-del-trabajo',
      title: 'Cuidar mi vida fuera del trabajo',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Una pausa amable para recordar quién eres más allá del trabajo y elegir algo que te recargue esta semana.',
      mechanism: 'El acoso tiende a ocupar toda la vida. Proteger espacios propios y tratarse con amabilidad ayuda a sostenerse mientras se buscan salidas.',
      evidenceLevel: 'preliminar',
      evidence: [NIELSEN_2012],
      howItWorks: [
        'Sufrir acoso se asocia a más ansiedad, tristeza, síntomas de estrés y problemas de salud (Nielsen y Einarsen, 2012). Es una respuesta comprensible a algo que daña, no una debilidad.',
        'Cuando el trabajo duele, es fácil dejar de lado lo que te hace bien. Cuidar el descanso, el cuerpo y los vínculos no resuelve el acoso, pero te da fuerza para atravesarlo.',
        'Esta práctica se apoya en la autocompasión: tratarte como tratarías a una amistad en tu lugar.',
      ],
      tips: [
        'Al salir, haz un gesto de cierre: cambiarte de ropa, caminar o una ducha.',
        'Silencia las notificaciones del trabajo fuera del horario, si puedes.',
        'Ver a alguien que te quiere vale más que pensar una hora en el problema.',
        'Si te cuesta dormir, comer o levantarte, consulta con tu médico o un psicólogo.',
      ],
      obstacles: [
        { q: 'No puedo dejar de pensar en el trabajo.', a: 'Es muy común. Prueba con un horario para pensar en eso y anotarlo. Fuera de ese horario, cuando vuelva, nótalo y vuelve a lo que estás haciendo.' },
      ],
      cautions: AVISO,
      steps: [
        { title: 'Llegar', instruction: 'Siente los pies en el piso. Respira despacio. Ahora no estás en el trabajo.', durationSec: 40, kind: 'breath' },
        { title: 'Reconocer', instruction: 'Pon una mano en el pecho. Dite: «Esto que vivo es difícil. Tiene sentido que me afecte».', durationSec: 45, kind: 'breath' },
        { title: 'Quién eres', instruction: 'Escribe tres cosas que te definen fuera del trabajo. Lo que quieres, lo que te gusta, lo que sabes hacer.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que te recarga', instruction: 'Anota algo que te hace bien y dejaste de hacer. Un paseo, una música, una persona o un deporte.', durationSec: 45, kind: 'reflection' },
        { title: 'Un plan chico', instruction: 'Elige una de esas cosas para esta semana. Escribe el día y la hora.', durationSec: 45, kind: 'reflection' },
        { title: 'Una frase amable', instruction: 'Escribe lo que le dirías a una amistad que pasa por esto. Léelo para ti.', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio dos veces. Mueve las manos y los hombros.', durationSec: 30, kind: 'breath' },
      ],
    },
  ],

  meta: {
    'conflicto-o-acoso-laboral': { level: 'iniciacion', approaches: ['tcc', 'soluciones'], module: 'trabajo' },
    'registro-de-hechos-en-el-trabajo': { level: 'iniciacion', approaches: ['soluciones', 'tcc'], module: 'trabajo' },
    'limite-asertivo-en-el-trabajo': { level: 'intermedio', approaches: ['dbt', 'tcc'], module: 'trabajo', prerequisites: ['dear-man'] },
    'mapa-de-apoyos-en-el-trabajo': { level: 'iniciacion', approaches: ['soluciones', 'sistemica'], module: 'trabajo' },
    'mi-vida-fuera-del-trabajo': { level: 'iniciacion', approaches: ['cft', 'act'], module: 'trabajo' },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'acoso-laboral-y-mobbing',
      title: 'Acoso laboral y maltrato en el trabajo',
      subtitle: 'Qué es y qué no es, cómo afecta la salud, cómo registrar los hechos, a quién pedir apoyo y cómo cuidarte.',
      category: 'Salud y trabajo',
      readingMin: 9,
      keyPoints: [
        'El acoso laboral es un trato hostil que se repite en el tiempo y del que cuesta defenderse. Un conflicto puntual no es acoso.',
        'Se asocia a más ansiedad, tristeza, estrés y problemas de salud. No es una debilidad de quien lo sufre.',
        'Registrar los hechos con fechas, testigos y mensajes ayuda a ver el patrón y a pedir ayuda.',
        'Poner un límite puede servir, pero sólo cuando es seguro.',
        'No hace falta hacerlo en soledad: delegado gremial, sindicato, recursos humanos y abogado laboralista pueden orientarte.',
      ],
      sections: [
        {
          heading: 'Qué es y qué no es',
          paragraphs: [
            'Heinz Leymann estudió el acoso laboral en Suecia y lo llamó mobbing. Lo describió como un trato hostil, dirigido de forma sistemática a una persona, que se repite con frecuencia y durante mucho tiempo (Leymann, 1996). Con el tiempo, a quien lo sufre le cuesta cada vez más defenderse.',
            'Un conflicto puntual es otra cosa. Una discusión fuerte, un jefe exigente o una crítica a tu trabajo pueden doler, pero no son acoso si no se repiten ni buscan dañarte. Lo que marca la diferencia es la repetición, el tiempo y la diferencia de poder.',
          ],
        },
        {
          heading: 'Las formas del acoso',
          paragraphs: [
            'Ståle Einarsen y su equipo midieron el acoso con un cuestionario de conductas negativas. Encontraron tres grupos: conductas que apuntan a la tarea, conductas que apuntan a la persona e intimidación (Einarsen y colaboradores, 2009).',
            'Hacia la tarea: sacarte funciones, darte metas imposibles, esconder información o vigilarte de más. Hacia la persona: burlas, rumores, gritos, humillaciones o dejarte afuera. Intimidación: amenazas, gestos agresivos o invadir tu espacio.',
          ],
        },
        {
          heading: 'Cómo afecta la salud',
          paragraphs: [
            'Una revisión de muchos estudios encontró que el acoso laboral se asocia a más ansiedad, depresión, síntomas de estrés postraumático y problemas de salud física. También a menos satisfacción con el trabajo y más ganas de dejarlo (Nielsen y Einarsen, 2012).',
            'Los estudios que siguen a las personas en el tiempo sugieren que el acoso puede preceder a esos problemas. Por eso no es algo para aguantar en silencio. Si te cuesta dormir, comer o funcionar, consulta con tu médico o un psicólogo.',
          ],
        },
        {
          heading: 'Registrar y buscar apoyo',
          paragraphs: [
            'Anota cada hecho cerca del momento: fecha, lugar, qué se dijo, quiénes estaban y cómo te afectó. Guarda capturas y correos fuera de las cuentas del trabajo. Un registro claro protege tu memoria del estrés.',
            'Busca apoyo dentro y fuera del trabajo. Puede ser el delegado gremial, la comisión interna, recursos humanos, el sindicato o un abogado laboralista. En la Argentina rige el Convenio 190 de la OIT sobre violencia y acoso en el mundo del trabajo, ratificado por la Ley 27.580 de 2020 (Organización Internacional del Trabajo, 2019). Qué hacer en tu caso lo decide un profesional del derecho laboral.',
          ],
        },
        {
          heading: 'Poner límites y cuidarte',
          paragraphs: [
            'A veces una frase corta y firme frena una conducta, sobre todo al principio. Pero si hay mucha diferencia de poder o temes represalias, no hace falta enfrentar. Registrar y pedir apoyo también es actuar.',
            'Fuera del trabajo, protege el descanso, el cuerpo y tus vínculos. No resuelve el acoso, pero te da fuerza para atravesarlo. Tratarte con amabilidad ayuda a bajar la duda y la vergüenza que el acoso suele dejar.',
          ],
        },
        {
          heading: 'Acoso sexual y testigos',
          paragraphs: [
            'El acoso sexual en el trabajo incluye comentarios, insinuaciones, contacto o pedidos de tipo sexual que no quieres. No es un malentendido ni un halago. Busca apoyo enseguida. Si es por motivos de género, puedes llamar a la Línea 144. Si hay peligro, llama al 911.',
            'Quienes ven el acoso también pueden ayudar. No reírse, no sumarse, acercarse después a quien lo sufre y ofrecerse como testigo son pasos que cuentan. Nadie tiene que ponerse en riesgo para ayudar.',
          ],
        },
      ],
      caveat: {
        title: 'No es asesoramiento legal',
        body: 'Este artículo no reemplaza el consejo de un abogado laboralista ni del sindicato. Cada caso es distinto y hay plazos y pasos que conviene revisar con un profesional. Si hay acoso sexual o por motivos de género, llama a la Línea 144. Si tienes ideas de hacerte daño, llama al 135 o al 0800-999-0091. Si hay peligro, al 911.',
      },
      diagram: {
        title: 'Cómo se sostiene el acoso',
        nodes: ['Ataques que se repiten', 'Duda de ti y aislamiento', 'Más estrés y cansancio', 'Errores o ausencias', 'Se usan como excusa para más ataques'],
        caption: 'Registrar los hechos, buscar apoyo y cuidarte afuera ayuda a cortar el círculo.',
      },
      related: {
        practices: ['conflicto-o-acoso-laboral', 'registro-de-hechos-en-el-trabajo', 'limite-asertivo-en-el-trabajo', 'mapa-de-apoyos-en-el-trabajo', 'mi-vida-fuera-del-trabajo', 'testigo-que-ayuda', 'cierre-de-jornada'],
        articles: ['burnout-seis-areas', 'asertividad-y-limites'],
      },
      references: [LEYMANN_1996, EINARSEN_2009, NIELSEN_2012, OIT_2019],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'frente-al-acoso-laboral',
      title: 'Frente al acoso laboral',
      subtitle: 'Tres semanas para ordenar lo que pasa, buscar apoyo y cuidarte',
      description:
        'Aprenderás a distinguir un conflicto de un acoso, a registrar los hechos y a armar tu mapa de apoyos. También verás cómo poner un límite cuando es seguro y cómo cuidar tu vida fuera del trabajo. No es asesoramiento legal: consulta a un abogado laboralista o al sindicato.',
      basis: 'Leymann (1996); Einarsen, Hoel y Notelaers (2009); Nielsen y Einarsen (2012); OIT (2019).',
      rhythm: '10 minutos, 3 o 4 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Poner nombre',
          focus: 'Conflicto o acoso, y registrar',
          description: 'Leerás qué es el acoso laboral. Ordenarás lo que pasa y empezarás tu registro de hechos.',
          practiceIds: ['conflicto-o-acoso-laboral', 'registro-de-hechos-en-el-trabajo'],
          articleIds: ['acoso-laboral-y-mobbing'],
          journalType: 'resolucion-problemas',
        },
        {
          title: 'Semana 2 · Apoyo y límites',
          focus: 'A quién acudir y qué decir',
          description: 'Armarás tu mapa de apoyos y prepararás una frase firme para usar sólo si es seguro.',
          practiceIds: ['mapa-de-apoyos-en-el-trabajo', 'limite-asertivo-en-el-trabajo'],
          articleIds: [],
          journalType: 'conversacion',
        },
        {
          title: 'Semana 3 · Cuidarte',
          focus: 'Tu vida fuera del trabajo',
          description: 'Protegerás espacios propios y te darás un trato amable. También verás cómo pueden ayudar quienes miran.',
          practiceIds: ['mi-vida-fuera-del-trabajo', 'cierre-de-jornada', 'testigo-que-ayuda'],
          articleIds: [],
          journalType: 'carta-compasiva',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-conflicto-o-acoso',
      title: '¿Conflicto o acoso?',
      subtitle: 'Cómo darte cuenta de que no es sólo un mal día.',
      slides: [
        { heading: 'Un mal día', text: 'Una pelea, un grito o una crítica duelen. Pero si pasan una vez, suelen ser un conflicto.' },
        { heading: 'Algo que se repite', text: 'El acoso es un trato hostil que se repite. Dura meses y cada vez cuesta más defenderse.' },
        { heading: 'Muchas formas', text: 'Sacarte tareas, darte metas imposibles, burlas, rumores, gritos o dejarte afuera. Todo eso puede ser acoso.' },
        { heading: 'Deja huellas', text: 'El acoso se asocia a más ansiedad, tristeza y estrés. No es una debilidad tuya.' },
        { heading: 'Anota', text: 'Mira los hechos, no sólo lo que sientes. ¿Qué pasó? ¿Cuántas veces? ¿Desde cuándo?' },
        { heading: 'No en soledad', text: 'Cuéntalo a alguien de confianza. El sindicato o un abogado laboralista pueden orientarte.' },
      ],
      related: { practices: ['conflicto-o-acoso-laboral'], articles: ['acoso-laboral-y-mobbing'] },
      references: [LEYMANN_1996, EINARSEN_2009, NIELSEN_2012],
    },
    {
      id: 'pildora-registrar-hechos-trabajo',
      title: 'Anota todo, con fecha',
      subtitle: 'Un registro claro te cuida la memoria.',
      slides: [
        { heading: 'El estrés borra', text: 'Cuando algo se repite, los recuerdos se mezclan. Anotar ayuda a no perder detalles.' },
        { heading: 'Qué anotar', text: 'La fecha, el lugar, qué se dijo y quiénes estaban. Usa frases cortas y sin adjetivos.' },
        { heading: 'Guarda pruebas', text: 'Saca capturas de mensajes y correos. Que se vea la fecha. Guárdalas fuera del trabajo.' },
        { heading: 'Cómo te afectó', text: 'Anota también si dormiste mal, si faltaste o si fuiste al médico.' },
        { heading: 'Pide consejo', text: 'Lleva tu registro al sindicato o a un abogado laboralista. Ellos te dirán qué hacer en tu caso.' },
      ],
      related: { practices: ['registro-de-hechos-en-el-trabajo', 'mapa-de-apoyos-en-el-trabajo'], articles: ['acoso-laboral-y-mobbing'] },
      references: [LEYMANN_1996, OIT_2019],
    },
    {
      id: 'pildora-acoso-sexual-en-el-trabajo',
      title: 'Acoso sexual en el trabajo',
      subtitle: 'No es un halago ni un malentendido.',
      slides: [
        { heading: 'Qué es', text: 'Comentarios, chistes, roces o pedidos de tipo sexual que no quieres. En el trabajo, eso es acoso.' },
        { heading: 'No es tu culpa', text: 'No importa cómo te vestías ni si te reíste por nervios. La responsabilidad es de quien acosa.' },
        { heading: 'Busca apoyo', text: 'Cuéntalo a alguien de confianza. El delegado gremial, el sindicato o un abogado laboralista pueden ayudarte.' },
        { heading: 'Línea 144', text: 'Si es por motivos de género, puedes llamar a la Línea 144. Es gratuita y atiende todo el día.' },
        { heading: 'Si hay peligro', text: 'Si hay amenazas o violencia, llama al 911. No tienes que esperar.' },
      ],
      related: { practices: ['mapa-de-apoyos-en-el-trabajo'], articles: ['acoso-laboral-y-mobbing'] },
      references: [OIT_2019],
    },
  ],

  // ================================================================== glosario
  glossary: [
    {
      id: 'acoso-laboral-termino',
      term: 'Acoso laboral (mobbing)',
      definition: 'Trato hostil en el trabajo que se repite durante mucho tiempo y del que a la persona le cuesta defenderse. Un conflicto puntual no es acoso.',
      articleId: 'acoso-laboral-y-mobbing',
    },
    {
      id: 'convenio-190-oit',
      term: 'Convenio 190 de la OIT',
      definition: 'Acuerdo internacional de 2019 sobre la violencia y el acoso en el mundo del trabajo. La Argentina lo ratificó en 2020. Un abogado laboralista o el sindicato pueden explicarte cómo se aplica.',
      articleId: 'acoso-laboral-y-mobbing',
    },
    {
      id: 'registro-de-hechos',
      term: 'Registro de hechos',
      definition: 'Lista ordenada de lo que pasa, con fecha, lugar, testigos y pruebas. Ayuda a ver el patrón y a pedir ayuda.',
      practiceId: 'registro-de-hechos-en-el-trabajo',
    },
  ],
};
