import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Migración y desarraigo en adultos»: para quienes llegan a la Argentina y para
 * argentinos y argentinas que se van a vivir a otro país.
 *
 * Complementa (no repite) lo que ya está en «Vida cotidiana»: el artículo
 * `migracion-y-desarraigo`, la práctica `mapa-de-dos-orillas`, la píldora del duelo
 * migratorio y los términos `duelo-migratorio` y `aculturacion`. Aquí se suma:
 *  - un ancla breve con algo de casa (lengua, música, olor);
 *  - una red nueva desde los lazos débiles (Sandstrom y Dunn);
 *  - mantener la lengua y los rituales propios (Berry; Schwartz y colaboradores);
 *  - la culpa por la familia que quedó lejos y el cuidado a la distancia (Baldassar);
 *  - el cansancio de los trámites (carga administrativa, Herd y Moynihan);
 *  - la discriminación por origen y cómo cuidarse (Pascoe y Smart Richman; Schmitt;
 *    Branscombe), con riesgo 2.
 *
 * Seguridad: no hay asesoramiento legal migratorio. Se remite a los organismos oficiales
 * (Dirección Nacional de Migraciones, consulados) sin dar teléfonos ni plazos. Ante
 * discriminación con violencia o peligro: 911 y el botón Ayuda. El duelo migratorio se
 * describe como concepto; la cita de Achotegui está en el artículo ya existente.
 * Para chicos y chicas está la guía de familias `mudanza-o-migracion`.
 */

const BERRY_1997: Reference = {
  citation: 'Berry, J. W. (1997). Immigration, acculturation, and adaptation. Applied Psychology, 46(1), 5–34.',
  doi: '10.1111/j.1464-0597.1997.tb01087.x',
};
const NGUYEN_2013: Reference = {
  citation: 'Nguyen, A.-M. D., & Benet-Martínez, V. (2013). Biculturalism and adjustment: A meta-analysis. Journal of Cross-Cultural Psychology, 44(1), 122–159.',
};
const SCHWARTZ_2010: Reference = {
  citation: 'Schwartz, S. J., Unger, J. B., Zamboanga, B. L., & Szapocznik, J. (2010). Rethinking the concept of acculturation: Implications for theory and research. American Psychologist, 65(4), 237–251.',
  doi: '10.1037/a0019330',
};
const SANDSTROM_2014: Reference = {
  citation: 'Sandstrom, G. M., & Dunn, E. W. (2014). Social interactions and well-being: The surprising power of weak ties. Personality and Social Psychology Bulletin, 40(7), 910–922.',
  doi: '10.1177/0146167214529799',
};
const BALDASSAR_2007: Reference = {
  citation: 'Baldassar, L., Baldock, C. V., & Wilding, R. (2007). Families caring across borders: Migration, ageing and transnational caregiving. Palgrave Macmillan.',
};
const HERD_2018: Reference = { citation: 'Herd, P., & Moynihan, D. P. (2018). Administrative burden: Policymaking by other means. Russell Sage Foundation.' };
const GOLLWITZER_1999: Reference = {
  citation: 'Gollwitzer, P. M. (1999). Implementation intentions: Strong effects of simple plans. American Psychologist, 54(7), 493–503.',
  doi: '10.1037/0003-066X.54.7.493',
};
const NEFF_2003: Reference = {
  citation: 'Neff, K. D. (2003). Self-compassion: An alternative conceptualization of a healthy attitude toward oneself. Self and Identity, 2(2), 85–101.',
  doi: '10.1080/15298860309032',
};
const GILBERT_2009: Reference = { citation: 'Gilbert, P. (2009). The compassionate mind. Constable.' };
const PASCOE_2009: Reference = {
  citation: 'Pascoe, E. A., & Smart Richman, L. (2009). Perceived discrimination and health: A meta-analytic review. Psychological Bulletin, 135(4), 531–554.',
  doi: '10.1037/a0016059',
};
const SCHMITT_2014: Reference = {
  citation: 'Schmitt, M. T., Branscombe, N. R., Postmes, T., & Garcia, A. (2014). The consequences of perceived discrimination for psychological well-being: A meta-analytic review. Psychological Bulletin, 140(4), 921–948.',
  doi: '10.1037/a0035754',
};
const BRANSCOMBE_1999: Reference = {
  citation: 'Branscombe, N. R., Schmitt, M. T., & Harvey, R. D. (1999). Perceiving pervasive discrimination among African Americans: Implications for group identification and well-being. Journal of Personality and Social Psychology, 77(1), 135–149.',
  doi: '10.1037/0022-3514.77.1.135',
};
const BHUGRA_2004: Reference = {
  citation: 'Bhugra, D. (2004). Migration and mental health. Acta Psychiatrica Scandinavica, 109(4), 243–258.',
  doi: '10.1046/j.0001-690X.2003.00246.x',
};
const LEY_25871: Reference = {
  citation: 'Ley 25.871 de Migraciones. (2004). Boletín Oficial de la República Argentina.',
  note: 'Los artículos 7 y 8 garantizan el acceso a la educación y a la salud de las personas extranjeras, cualquiera sea su situación migratoria.',
};
const LEY_23592: Reference = { citation: 'Ley 23.592 de Actos Discriminatorios. (1988). Boletín Oficial de la República Argentina.' };

/** Aviso común: no es asesoramiento legal y a quién consultar. */
const TRAMITES =
  'Esto no es asesoramiento legal. Para tu situación migratoria, consulta la información oficial de la Dirección Nacional de Migraciones si vives en la Argentina, o el consulado que corresponda si vives afuera. Desconfía de quien cobra por atajos o promete resultados.';

/** Aviso común: ánimo bajo que no cede. */
const CONSULTA =
  'Si la tristeza, el insomnio o la angustia duran semanas y te cuesta funcionar, consulta a un profesional. En la Argentina, los hospitales y centros de salud públicos atienden a personas migrantes, tengan o no documentos. Si piensas en hacerte daño, llama a la Línea Nacional de Salud Mental (0800-999-0091) o usa el botón Ayuda.';

export const MIGRACION_PACK: ContentPack = {
  id: 'migracion-desarraigo',

  // ================================================================== prácticas
  practices: [
    {
      id: 'un-pedazo-de-casa',
      title: 'Un pedazo de casa',
      family: 'attentional',
      skills: ['attention', 'compassion'],
      summary: 'Dos minutos con algo que te trae tu lugar: una canción, un olor, una palabra en tu lengua o un objeto. Para los días en que extrañas mucho.',
      mechanism: 'Poner la atención en algo concreto y querido, con los sentidos, calma el cuerpo y deja sentir la nostalgia sin quedar atrapado en ella.',
      evidenceLevel: 'preliminar',
      evidence: [NGUYEN_2013, NEFF_2003],
      howItWorks: [
        'Quien migra pierde muchas cosas a la vez: personas, lengua, calles, comidas, olores. A ese proceso se lo suele llamar duelo migratorio. Tiene una particularidad: lo perdido sigue existiendo en otro lugar, así que la nostalgia va y viene.',
        'Esta práctica no busca sacarte la nostalgia. Busca darle un lugar breve y amable. Usar los sentidos con algo concreto, como el olor de una yerba o una canción, ayuda a que el recuerdo acompañe en lugar de arrastrar.',
        'Sentir que la cultura de origen sigue siendo parte de ti, junto con la nueva, se asocia con una mejor adaptación (Nguyen y Benet-Martínez, 2013). Este pedazo de casa es una forma chica de cuidar esa parte.',
      ],
      tips: [
        'Ten a mano tu «pedazo de casa»: una lista de canciones, una foto, una especia o un objeto.',
        'Sirve también a quien se fue de la Argentina: el mate, un tango, una voz conocida.',
        'Si el recuerdo te desborda, deja el objeto y vuelve a sentir los pies en el piso.',
      ],
      obstacles: [
        { q: 'Me pongo peor al recordar.', a: 'Puede pasar. Acorta la práctica y quédate más tiempo con los sentidos que con el recuerdo. Si siempre te deja peor, prueba la práctica de las plantas de los pies.' },
        { q: 'No traje nada de allá.', a: 'Una canción, una receta o una palabra que te decían de chico o de chica también sirven.' },
      ],
      micro: true,
      steps: [
        { title: 'Elegir', instruction: 'Elige algo que te trae tu lugar. Una canción, un olor, una foto o una palabra en tu lengua.', durationSec: 25, kind: 'instruction' },
        { title: 'Los sentidos', instruction: 'Míralo, huélelo o escúchalo despacio. Nota un detalle que antes no notabas.', durationSec: 40, kind: 'instruction' },
        { title: 'Tu lengua', instruction: 'Di en voz baja una palabra o una frase de casa. Fíjate cómo suena en tu boca.', durationSec: 30, kind: 'instruction' },
        { title: 'Lo que sientes', instruction: 'Nota qué aparece. Puede ser calma, ternura o tristeza. Dite: «Extraño porque quiero».', durationSec: 40, kind: 'breath' },
        { title: 'Volver', instruction: 'Respira despacio. Siente los pies en el piso de acá. Las dos cosas son tuyas.', durationSec: 25, kind: 'breath' },
      ],
    },
    {
      id: 'red-nueva-de-a-poco',
      title: 'Una red nueva, de a poco',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Mirar con quién te cruzas en tu nueva ciudad y dar un paso chico por semana: saludar por el nombre, preguntar algo, sumarte a un grupo.',
      mechanism: 'Los vínculos nuevos empiezan por lazos débiles. Los contactos breves del día a día se asocian con más bienestar y más sensación de pertenencia.',
      evidenceLevel: 'moderada',
      evidence: [SANDSTROM_2014, BHUGRA_2004],
      howItWorks: [
        'Al llegar a un país, o al irse de la Argentina, la red de siempre queda lejos. Armar amistades lleva tiempo, y los primeros años suelen ser los más solitarios. Por eso conviene empezar por algo más chico.',
        'Gillian Sandstrom y Elizabeth Dunn estudiaron los lazos débiles: el vecino, la persona del almacén, alguien del gimnasio. Los días con más charlas breves de este tipo, la gente se sintió mejor y más parte de su lugar (Sandstrom y Dunn, 2014).',
        'Muchas amistades nacen de esos lazos. Pero aunque no se vuelvan amistad, ya cuidan. El apoyo social es uno de los factores que más protege la salud mental de quien migra (Bhugra, 2004).',
      ],
      tips: [
        'Vuelve a los mismos lugares: la misma panadería, la misma plaza. La repetición crea confianza.',
        'Busca grupos por algo que te gusta, no sólo por origen. También sirven los de tu colectividad.',
        'Ayudar a alguien que recién llega también arma red, y te recuerda todo lo que ya aprendiste.',
        'Si en tu lengua te cuesta menos, empieza por ahí. Si te cuesta el idioma local, un curso también es un lugar para conocer gente.',
      ],
      obstacles: [
        { q: 'Me da vergüenza mi acento.', a: 'Es muy común. El acento cuenta de dónde vienes, no cuánto vales. Muchas charlas empiezan justo por ahí.' },
        { q: 'Lo intenté y nadie respondió.', a: 'Armar red lleva meses. Un intento que no prende no dice nada de ti. Prueba otro lugar u otra persona.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en una semana común en tu ciudad de ahora.', durationSec: 30, kind: 'breath' },
        { title: 'Con quién te cruzas', instruction: 'Anota a quiénes ves seguido. Vecinos, gente del trabajo, del almacén, de la escuela de los chicos o del colectivo.', durationSec: 75, kind: 'reflection' },
        { title: 'Lazos que ya hay', instruction: 'Marca a una o dos personas con las que ya cruzaste palabras. Ese lazo chico ya existe.', durationSec: 45, kind: 'reflection' },
        { title: 'Un paso chico', instruction: 'Elige un gesto para esta semana. Saludar por el nombre, preguntar algo o agradecer. Anota cuándo y dónde.', durationSec: 60, kind: 'reflection' },
        { title: 'Un lugar para volver', instruction: 'Piensa en un grupo al que podrías ir varias veces. Un deporte, un taller, un coro o una iglesia. Busca uno.', durationSec: 60, kind: 'reflection' },
        { title: 'Con paciencia', instruction: 'Pon una mano en el pecho. Dite: «Las raíces nuevas crecen despacio. Voy paso a paso».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'mi-lengua-y-mis-rituales',
      title: 'Mi lengua y mis rituales',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Elegir qué partes de tu cultura quieres mantener vivas, como la lengua, las fiestas o las comidas, y darles un lugar fijo en la semana.',
      mechanism: 'Mantener la cultura de origen mientras te abres a la nueva es el camino de aculturación que más se asocia con bienestar. Darle un lugar concreto lo vuelve posible.',
      evidenceLevel: 'moderada',
      evidence: [BERRY_1997, SCHWARTZ_2010, NGUYEN_2013],
      howItWorks: [
        'John Berry describe la integración como mantener la propia cultura y abrirse a la nueva. Suele traer más bienestar que dejar la propia o cerrarse a la nueva (Berry, 1997). La práctica «Mapa de dos orillas» trabaja esta idea en general.',
        'Aquí se baja a lo concreto. La cultura no es una sola cosa. Son prácticas, como la lengua, las comidas y las fiestas, valores y una forma de sentirse parte (Schwartz y colaboradores, 2010). Puedes elegir qué mantener y qué sumar.',
        'Sin un lugar fijo, la lengua y los rituales se van perdiendo por cansancio, no por decisión. Un plan chico los protege.',
      ],
      tips: [
        'Una llamada semanal en tu lengua, un programa de radio de allá o leer un libro cuentan.',
        'Las fechas importantes de allá pueden festejarse acá, con gente de acá.',
        'No hace falta mantenerlo todo. Elige lo que te importa a ti, no lo que se espera.',
        'Si tienes hijos o hijas, en la sección Familia está la guía «Mudanzas y migración».',
      ],
      obstacles: [
        { q: 'Siento que pierdo mi lengua.', a: 'Es común con los años. Leer, escuchar y hablar un rato por semana ayuda a sostenerla.' },
        { q: 'Mi familia de allá dice que ya no soy de ahí.', a: 'Duele. Cambiar no es traicionar. Puedes ser de allá a tu manera, con lo que fuiste sumando.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en un día de fiesta en tu lugar de origen.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que te hace ser', instruction: 'Anota cosas de tu cultura que sientes tuyas. Palabras, comidas, música, fiestas, formas de saludar o de reír.', durationSec: 75, kind: 'reflection' },
        { title: 'Lo que se apaga', instruction: 'Marca las que estás dejando de hacer sin quererlo. ¿Cuál te gustaría recuperar?', durationSec: 50, kind: 'reflection' },
        { title: 'Un lugar fijo', instruction: 'Elige una y dale un momento en la semana. Por ejemplo, cocinar el domingo o hablar en tu lengua con alguien.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo nuevo', instruction: 'Ahora anota una costumbre de acá que te gusta o que te gustaría probar.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira. Dite: «Elijo lo que llevo y lo que sumo». Guarda tu plan.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'un-tramite-por-vez',
      title: 'Un trámite por vez',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Ordenar los trámites pendientes, elegir uno, partirlo en el próximo paso concreto y cuidarte después, para que el papelerío no te gane.',
      mechanism: 'Los trámites cansan por lo que hay que aprender, por lo que hay que hacer y por el estrés que generan. Partirlos y planificar cuándo hacerlos reduce la postergación.',
      evidenceLevel: 'preliminar',
      evidence: [HERD_2018, GOLLWITZER_1999],
      cautions: TRAMITES,
      howItWorks: [
        'Pamela Herd y Donald Moynihan llaman carga administrativa a lo que pesan los trámites. Tiene tres partes: aprender cómo funciona, cumplir con papeles y turnos, y el costo emocional de la espera y la incertidumbre (Herd y Moynihan, 2018).',
        'Para quien migra, esa carga se suma a todo lo demás: otra lengua, otras reglas, documentos de dos países. Es esperable sentirse agotado. No es falta de capacidad.',
        'Dos cosas ayudan. Partir el trámite en el próximo paso físico, y decidir de antemano cuándo y dónde lo harás. Los planes del tipo «si es tal día, entonces hago esto» aumentan las chances de hacerlo (Gollwitzer, 1999).',
      ],
      tips: [
        'Busca la información en la página oficial del organismo. Si una página no es oficial, desconfía.',
        'Arma una carpeta, en papel o en el celular, con copias de todos tus documentos.',
        'Anota cada turno, número de trámite y nombre de quien te atendió.',
        'Si un trámite se traba, pregunta en el organismo oficial o en un servicio jurídico gratuito. No pagues por atajos.',
      ],
      obstacles: [
        { q: 'Me paraliza pensar en todo lo que falta.', a: 'Por eso se elige uno solo. Lo demás puede esperar en la lista. Hoy sólo importa el próximo paso.' },
        { q: 'Me trataron mal en la ventanilla.', a: 'Te puede afectar mucho. Respira, anota qué pasó y vuelve otro día si puedes. Si fue discriminación, tienes derecho a reclamar.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Dite: «Hoy no resuelvo todo. Hoy doy un paso».', durationSec: 30, kind: 'breath' },
        { title: 'La lista', instruction: 'Anota todos los trámites que tienes pendientes, aquí o en tu país. Sácalos de la cabeza y ponlos en papel.', durationSec: 75, kind: 'reflection' },
        { title: 'Elegir uno', instruction: 'Marca el más urgente o el que tiene una fecha límite. Sólo uno.', durationSec: 40, kind: 'reflection' },
        { title: 'El próximo paso', instruction: '¿Cuál es la próxima acción concreta? Buscar la página oficial, pedir un turno o juntar un papel. Escríbela.', durationSec: 60, kind: 'reflection' },
        { title: 'Cuándo y dónde', instruction: 'Escribe: «El día tal, a tal hora, en tal lugar, hago este paso». Ponlo en tu agenda.', durationSec: 45, kind: 'reflection' },
        { title: 'Después', instruction: 'Elige algo amable para después del trámite. Un café, una caminata o una llamada a alguien querido.', durationSec: 40, kind: 'reflection' },
      ],
    },
    {
      id: 'culpa-por-los-que-quedaron',
      title: 'La culpa por los que quedaron lejos',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Para quien siente culpa por no estar cerca de su familia: separar lo que puedes hacer desde acá de lo que no, y hablarte con más amabilidad.',
      mechanism: 'La culpa por la distancia suele mezclar cuidado real con exigencias imposibles. Ver cómo ya cuidas a distancia y tratarte con compasión baja la autocrítica sin apagar el cariño.',
      evidenceLevel: 'preliminar',
      evidence: [BALDASSAR_2007, GILBERT_2009, NEFF_2003],
      cautions: CONSULTA,
      howItWorks: [
        'Loretta Baldassar y su equipo estudiaron familias repartidas entre países. Encontraron que el cuidado sigue circulando a la distancia: llamadas, consejos, plata, organizar ayuda, visitas. Muchas personas cuidan más de lo que creen (Baldassar y colaboradores, 2007).',
        'La culpa aparece sobre todo cuando alguien de allá enferma, envejece o atraviesa algo difícil. Una parte de esa culpa es cariño: te importa. Otra parte es una exigencia imposible, como estar en dos lugares a la vez.',
        'La terapia centrada en la compasión propone mirar esa voz que acusa y responderle con la firmeza y la calidez de alguien que te quiere (Gilbert, 2009). No se trata de dejar de cuidar, sino de cuidar sin castigarte.',
      ],
      tips: [
        'Habla con tu familia sobre qué necesitan de verdad. A veces piden menos de lo que imaginas.',
        'Un horario fijo de llamadas ayuda a ambos lados más que muchas llamadas sueltas.',
        'Si hay alguien de allá que cuida en el día a día, agradécele y pregúntale cómo apoyarle.',
        'Una decisión difícil, como viajar o no, se piensa mejor en calma y con datos.',
      ],
      obstacles: [
        { q: 'Si me perdono, es como si no me importara.', a: 'Al revés. La culpa que castiga agota y aleja. La amabilidad te deja más energía para cuidar.' },
        { q: 'Alguien de mi familia me lo reprocha.', a: 'Duele mucho. Puedes escuchar su dolor sin cargar con toda la responsabilidad. Si se repite, un profesional puede ayudar a pensar esa conversación.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Pon una mano en el pecho. Respira despacio y nota el calor de la mano.', durationSec: 40, kind: 'breath' },
        { title: 'La voz que acusa', instruction: 'Escribe la frase de culpa tal como suena. Por ejemplo: «Los dejé solos».', durationSec: 45, kind: 'reflection' },
        { title: 'El cariño debajo', instruction: '¿Qué te importa detrás de esa culpa? Anota a quién quieres cuidar y por qué.', durationSec: 50, kind: 'reflection' },
        { title: 'Lo que ya haces', instruction: 'Anota cómo cuidas desde acá. Llamadas, mensajes, plata, consejos, organizar ayuda o visitas.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo posible', instruction: 'Separa en dos columnas. Lo que puedes hacer desde donde estás y lo que no depende de ti.', durationSec: 60, kind: 'reflection' },
        { title: 'Otra voz', instruction: 'Imagina a alguien que te quiere y conoce tu historia. Escribe lo que te diría sobre esta culpa.', durationSec: 60, kind: 'reflection' },
        { title: 'Un gesto', instruction: 'Elige un gesto de cuidado posible para esta semana. Pequeño y realista.', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'despues-de-un-trato-xenofobo',
      title: 'Después de un trato por tu origen',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Para después de un comentario, una burla o un mal trato por tu origen, tu acento, tu color de piel o tus documentos: ponerte a salvo, nombrarlo y no quedarte con la herida a solas.',
      mechanism: 'Nombrar la discriminación como algo injusto y externo, registrar lo que pasó y apoyarse en la propia comunidad protege contra el daño que deja.',
      evidenceLevel: 'preliminar',
      evidence: [PASCOE_2009, SCHMITT_2014, BRANSCOMBE_1999, LEY_23592],
      cautions:
        'Si estás en peligro o hubo una agresión física, aléjate y llama al 911. Si es violencia de género, la Línea 144 orienta. Esta práctica es para después, en un lugar seguro. Si el recuerdo te desborda, usa una práctica de anclaje. ' + CONSULTA,
      howItWorks: [
        'Dos revisiones de muchos estudios mostraron que vivir discriminación se asocia con peor salud mental y física. No es sólo el hecho: también el estrés de estar en guardia (Pascoe y Smart Richman, 2009; Schmitt y colaboradores, 2014).',
        'Un hallazgo protege. Las personas que se sienten parte de su grupo, y lo viven con orgullo, sufren menos el golpe. Buscar a la propia comunidad es una respuesta sana a la discriminación (Branscombe y colaboradores, 1999).',
        'La Ley 23.592 prohíbe los actos discriminatorios en la Argentina, entre otros por nacionalidad, raza o religión. Registrar lo que pasó te deja la opción de reclamar o denunciar si quieres. Hacerlo o no es tu decisión.',
      ],
      tips: [
        'En el momento, tu seguridad va primero. No tienes que responder a cada agresión.',
        'Si pasó en línea, guarda capturas y usa las herramientas de denuncia de la plataforma.',
        'Si hubo testigos que te ayudaron, pídeles su contacto.',
        'Si un estereotipo se te metió adentro, nómbralo como lo que es: un prejuicio, no un dato sobre ti.',
      ],
      obstacles: [
        { q: 'Pienso que exageré.', a: 'Dudar es muy común después de un trato así. Si te dolió y fue por tu origen, tiene sentido que te afecte.' },
        { q: 'Me pasa todo el tiempo y ya no sé qué hacer.', a: 'Cuando se repite, el desgaste es grande. Busca a tu comunidad y a un profesional. También puedes consultar con un organismo de derechos humanos de tu ciudad.' },
      ],
      steps: [
        { title: 'A salvo', instruction: 'Fíjate si ahora estás a salvo. Si no lo estás, deja esto y llama al 911.', durationSec: 20, kind: 'instruction' },
        { title: 'Los pies', instruction: 'Siente las plantas de los pies en el piso. Exhala largo, tres veces.', durationSec: 40, kind: 'breath' },
        { title: 'Nombrar', instruction: 'Dilo con claridad: «Esto fue un trato injusto por mi origen». No es un defecto tuyo.', durationSec: 40, kind: 'reflection' },
        { title: 'Lo que sientes', instruction: 'Nota qué sientes. Enojo, miedo, vergüenza o cansancio. Todo tiene sentido después de algo así.', durationSec: 45, kind: 'reflection' },
        { title: 'Registrar', instruction: 'Si quieres, anota la fecha, el lugar, qué pasó y si hubo testigos. Así guardas la opción de reclamar.', durationSec: 60, kind: 'reflection' },
        { title: 'Tu gente', instruction: 'Piensa en alguien de tu comunidad o de tu red que te entienda. ¿Puedes escribirle hoy?', durationSec: 45, kind: 'reflection' },
        { title: 'Cuidarte', instruction: 'Pon una mano en el pecho. Dite: «Lo que pasó no está bien. Mi origen es parte de mí y lo cuido».', durationSec: 40, kind: 'breath' },
      ],
    },
  ],

  meta: {
    'un-pedazo-de-casa': { level: 'iniciacion', approaches: ['mindfulness', 'cft'], module: 'etapas' },
    'red-nueva-de-a-poco': { level: 'iniciacion', approaches: ['interpersonal', 'positiva'], module: 'relaciones' },
    'mi-lengua-y-mis-rituales': { level: 'iniciacion', approaches: ['act', 'humanista'], module: 'valores' },
    'un-tramite-por-vez': { level: 'intermedio', approaches: ['tcc', 'soluciones'], module: 'problemas', prerequisites: ['resolucion-problemas'] },
    'culpa-por-los-que-quedaron': { level: 'intermedio', approaches: ['cft', 'act'], module: 'autocompasion', prerequisites: ['pausa-autocompasion'] },
    'despues-de-un-trato-xenofobo': {
      level: 'intermedio',
      approaches: ['cft', 'tcc'],
      module: 'afrontamiento',
      prerequisites: ['pausa-autocompasion'],
      risk: { level: 2, alternative: 'plantas-de-los-pies' },
    },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'vivir-entre-dos-paises',
      title: 'Vivir entre dos países: red, lengua, culpa, trámites y discriminación',
      subtitle: 'Para quienes llegan a la Argentina y para quienes se van: lo que pesa en el día a día después de migrar y qué ayuda.',
      category: 'Etapas de la vida',
      readingMin: 9,
      keyPoints: [
        'Migrar trae un duelo que va y viene. Le suman peso la culpa, los trámites y, a veces, la discriminación.',
        'La red nueva empieza por lazos chicos: el vecino, el almacén, un grupo al que se vuelve.',
        'Mantener la lengua y los rituales propios, abriéndose a lo nuevo, se asocia con más bienestar.',
        'La culpa por la familia lejos mezcla cariño con exigencias imposibles. Ya cuidas más de lo que crees.',
        'Ante discriminación con peligro, el 911. Para trámites, sólo fuentes oficiales.',
      ],
      sections: [
        {
          heading: 'Dos direcciones, un mismo proceso',
          paragraphs: [
            'Este texto es para quienes llegaron a vivir a la Argentina desde otro país, y para argentinos y argentinas que se fueron a vivir afuera. Las situaciones son distintas, pero mucho de lo que se siente es parecido.',
            'Al migrar se pierden muchas cosas a la vez, y lo perdido sigue existiendo en otro lugar. Por eso se habla de duelo migratorio. El artículo «Migrar: el duelo, los vínculos y una identidad de dos orillas» lo explica en detalle. Aquí nos ocupamos de lo que pesa en el día a día.',
          ],
        },
        {
          heading: 'Armar una red nueva',
          paragraphs: [
            'Las amistades profundas tardan años. Mientras tanto, los lazos débiles cuentan. En un estudio, los días con más charlas breves con conocidos, la gente se sintió mejor y más parte de su lugar (Sandstrom y Dunn, 2014).',
            'Ayuda volver a los mismos lugares, sumarse a un grupo por un interés y aceptar que lleva tiempo. El apoyo social es uno de los factores que más protegen a quien migra (Bhugra, 2004).',
          ],
        },
        {
          heading: 'La lengua y los rituales',
          paragraphs: [
            'Mantener la propia cultura y abrirse a la nueva, lo que John Berry llama integración, suele traer más bienestar (Berry, 1997). La cultura no es una sola cosa: es la lengua, las comidas, las fiestas, los valores y la forma de sentirse parte (Schwartz y colaboradores, 2010).',
            'Sin un lugar fijo en la semana, esas prácticas se pierden por cansancio. Una llamada en tu lengua, una comida del domingo o una fecha festejada con gente nueva las mantienen vivas. Si tienes hijos o hijas, en la sección Familia está la guía «Mudanzas y migración».',
          ],
        },
        {
          heading: 'La culpa por la familia que quedó lejos',
          paragraphs: [
            'La culpa suele crecer cuando alguien de allá enferma o envejece. Loretta Baldassar y su equipo mostraron que el cuidado sigue a la distancia: llamadas, consejos, plata, organizar ayuda y visitas (Baldassar y colaboradores, 2007).',
            'Ayuda separar lo que puedes hacer desde donde estás de lo que no depende de ti. Y hablar con tu familia sobre lo que de verdad necesitan. La culpa que castiga agota. La amabilidad deja más energía para cuidar.',
          ],
        },
        {
          heading: 'El cansancio de los trámites',
          paragraphs: [
            'Radicaciones, documentos, legalizaciones, turnos: los trámites pesan. Pamela Herd y Donald Moynihan describen tres costos. Aprender cómo funciona, cumplir con lo que piden y el desgaste emocional de esperar sin saber (Herd y Moynihan, 2018).',
            'Ayuda elegir un trámite por vez, partirlo en el próximo paso y decidir cuándo hacerlo (Gollwitzer, 1999). Busca la información sólo en fuentes oficiales: la Dirección Nacional de Migraciones si vives en la Argentina, o el consulado que corresponda si vives afuera. Desconfía de quien cobra por atajos.',
            'En la Argentina, la Ley 25.871 garantiza el acceso a la salud y a la educación de las personas extranjeras, cualquiera sea su situación migratoria. No necesitas tener los papeles al día para atenderte en un hospital público.',
          ],
        },
        {
          heading: 'La discriminación y cómo cuidarse',
          paragraphs: [
            'Un comentario por el acento, una burla por el color de piel, un mal trato en una ventanilla. La discriminación se asocia con peor salud mental y física, también por el estrés de estar siempre en guardia (Pascoe y Smart Richman, 2009; Schmitt y colaboradores, 2014).',
            'En el momento, tu seguridad va primero. Si hay peligro o una agresión, aléjate y llama al 911. Después, ayuda nombrar lo que pasó como injusto, registrar fecha, lugar y testigos, y buscar a tu gente. Sentirse parte de la propia comunidad protege (Branscombe y colaboradores, 1999).',
            'La Ley 23.592 prohíbe los actos discriminatorios en la Argentina. Si quieres reclamar o denunciar, puedes hacerlo ante la policía, la fiscalía o un organismo de derechos humanos de tu ciudad. Si vives afuera, el consulado argentino puede orientarte sobre a dónde acudir.',
          ],
        },
      ],
      caveat: {
        title: 'Qué no es este texto',
        body: 'No es asesoramiento legal migratorio. Cada situación es distinta y las normas cambian: consulta siempre en el organismo oficial. Si la tristeza o la angustia duran semanas, consulta a un profesional. Si piensas en hacerte daño, llama a la Línea Nacional de Salud Mental (0800-999-0091). Ante un peligro, el 911. En la app, el botón Ayuda reúne estos recursos.',
      },
      diagram: {
        title: 'Cómo se acumula el cansancio de migrar',
        nodes: ['Un trámite trabado o un mal trato', 'Cansancio y sensación de no poder', 'Postergar y aislarse', 'Menos red y más urgencias', 'Más peso en el día a día'],
        caption: 'Un paso por vez, la red de lazos chicos y no quedarse a solas con lo que duele cortan el ciclo.',
      },
      related: {
        practices: ['un-pedazo-de-casa', 'red-nueva-de-a-poco', 'mi-lengua-y-mis-rituales', 'un-tramite-por-vez', 'culpa-por-los-que-quedaron', 'despues-de-un-trato-xenofobo', 'mapa-de-dos-orillas'],
        articles: ['migracion-y-desarraigo', 'vinculos-y-soledad', 'autocompasion'],
      },
      references: [BERRY_1997, SCHWARTZ_2010, NGUYEN_2013, SANDSTROM_2014, BHUGRA_2004, BALDASSAR_2007, HERD_2018, GOLLWITZER_1999, PASCOE_2009, SCHMITT_2014, BRANSCOMBE_1999, LEY_25871, LEY_23592],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'echar-raices-sin-perder-las-propias',
      title: 'Echar raíces sin perder las propias',
      subtitle: 'Cuatro semanas para quien migró: lo que llevas, la red nueva y las cargas del día a día',
      description:
        'Darás un lugar a la nostalgia, elegirás qué partes de tu cultura mantener, armarás red de a poco y aprenderás a manejar los trámites y la culpa por la distancia sin castigarte. Sirve para quienes llegaron a la Argentina y para quienes se fueron. No es asesoramiento legal.',
      basis: 'Berry (1997); Sandstrom y Dunn (2014); Baldassar, Baldock y Wilding (2007); Herd y Moynihan (2018).',
      rhythm: '10 minutos, 4 o 5 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Lo que extrañas',
          focus: 'Dar un lugar a la nostalgia',
          description: 'Leerás sobre el duelo migratorio y practicarás volver a un pedazo de casa en los días difíciles.',
          practiceIds: ['un-pedazo-de-casa', 'mapa-de-dos-orillas'],
          articleIds: ['migracion-y-desarraigo'],
          journalType: 'saboreo',
        },
        {
          title: 'Semana 2 · Lo que llevas',
          focus: 'Lengua, rituales y lo nuevo',
          description: 'Elegirás qué partes de tu cultura mantener vivas y les darás un lugar fijo en la semana.',
          practiceIds: ['mi-lengua-y-mis-rituales'],
          articleIds: ['vivir-entre-dos-paises'],
          journalType: 'valores',
        },
        {
          title: 'Semana 3 · Red nueva',
          focus: 'Lazos chicos que crecen',
          description: 'Mirarás con quién te cruzas y darás un paso chico por día para armar red.',
          practiceIds: ['red-nueva-de-a-poco'],
          articleIds: [],
          journalType: 'intencion',
        },
        {
          title: 'Semana 4 · Las cargas',
          focus: 'Trámites y culpa a la distancia',
          description: 'Ordenarás un trámite pendiente y responderás a la culpa por la familia lejos con más amabilidad.',
          practiceIds: ['un-tramite-por-vez', 'culpa-por-los-que-quedaron'],
          articleIds: [],
          journalType: 'carta-compasiva',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-lazos-debiles',
      title: 'El vecino también es red',
      subtitle: 'Por qué los lazos chicos importan cuando llegas a un lugar nuevo.',
      slides: [
        { heading: 'Lejos de los tuyos', text: 'Al migrar, tu gente queda lejos. Las amistades nuevas tardan. Los primeros años suelen ser los más solos.' },
        { heading: 'Lazos chicos', text: 'El vecino, la del almacén, alguien del gimnasio. Son lazos débiles. Y cuentan más de lo que parece.' },
        { heading: 'Lo que vieron', text: 'Los días con más charlas breves con conocidos, la gente se sintió mejor y más parte de su lugar.' },
        { heading: 'Volver al mismo lugar', text: 'Ve a la misma panadería y a la misma plaza. Saluda por el nombre. La repetición crea confianza.' },
        { heading: 'Un grupo', text: 'Súmate a algo que te guste y a lo que puedas volver. Un deporte, un coro, un taller. Dale tiempo.' },
      ],
      related: { practices: ['red-nueva-de-a-poco'], articles: ['vivir-entre-dos-paises'] },
      references: [SANDSTROM_2014, BHUGRA_2004],
    },
    {
      id: 'pildora-culpa-a-la-distancia',
      title: 'Cuidar desde lejos también es cuidar',
      subtitle: 'La culpa por la familia que quedó en otro país.',
      slides: [
        { heading: 'La culpa', text: '«No estoy cuando me necesitan». Es una de las culpas más comunes de quien migra.' },
        { heading: 'Debajo hay cariño', text: 'Te duele porque te importa. Esa parte de la culpa habla de amor, no de falta.' },
        { heading: 'Ya cuidas', text: 'Llamadas, consejos, plata, organizar ayuda, visitas. Los estudios muestran que el cuidado sigue a la distancia.' },
        { heading: 'Lo posible', text: 'Separa lo que puedes hacer desde donde estás de lo que no depende de ti. No puedes estar en dos lugares.' },
        { heading: 'Otra voz', text: 'Háblate como lo haría alguien que te quiere. La culpa que castiga agota. La amabilidad te deja energía para cuidar.' },
      ],
      related: { practices: ['culpa-por-los-que-quedaron', 'pausa-autocompasion'], articles: ['vivir-entre-dos-paises'] },
      references: [BALDASSAR_2007, GILBERT_2009],
    },
    {
      id: 'pildora-cansancio-de-tramites',
      title: 'Cuando el papelerío te gana',
      subtitle: 'Por qué cansan tanto los trámites y cómo dar un paso por vez.',
      slides: [
        { heading: 'No es falta de capacidad', text: 'Los trámites cansan a cualquiera. Para quien migra, suman otra lengua, otras reglas y papeles de dos países.' },
        { heading: 'Tres pesos', text: 'Aprender cómo funciona, cumplir con lo que piden y aguantar la espera. Así lo describen Herd y Moynihan.' },
        { heading: 'Uno por vez', text: 'Haz la lista completa y elige un solo trámite. Escribe el próximo paso concreto. Sólo ese.' },
        { heading: 'Cuándo y dónde', text: 'Decide el día, la hora y el lugar. Los planes con fecha se cumplen más que las buenas intenciones.' },
        { heading: 'Sólo lo oficial', text: 'Busca la información en el organismo oficial o en el consulado. Desconfía de quien cobra por atajos.' },
      ],
      related: { practices: ['un-tramite-por-vez'], articles: ['vivir-entre-dos-paises'] },
      references: [HERD_2018, GOLLWITZER_1999],
    },
    {
      id: 'pildora-discriminacion-por-origen',
      title: 'Tu origen no es el problema',
      subtitle: 'Discriminación por origen: qué hace y cómo cuidarte.',
      slides: [
        { heading: 'Duele de verdad', text: 'Una burla por tu acento o un mal trato por tus papeles no son «nada». La discriminación afecta la salud.' },
        { heading: 'Primero, a salvo', text: 'Si hay peligro o una agresión, aléjate y llama al 911. No tienes que responder a cada ataque.' },
        { heading: 'Nombrarlo', text: 'Dite: «Esto fue injusto». Es un prejuicio de otra persona, no un defecto tuyo.' },
        { heading: 'Registrar', text: 'Si quieres, anota la fecha, el lugar y los testigos. Si pasó en línea, guarda capturas. Así puedes reclamar.' },
        { heading: 'Tu gente', text: 'Sentirte parte de tu comunidad protege. Busca a alguien que te entienda y cuéntale.' },
        { heading: 'Ayuda', text: 'Si el malestar dura semanas, consulta a un profesional. En la app, el botón Ayuda reúne los recursos.' },
      ],
      related: { practices: ['despues-de-un-trato-xenofobo'], articles: ['vivir-entre-dos-paises'] },
      references: [PASCOE_2009, SCHMITT_2014, BRANSCOMBE_1999],
    },
  ],

  // ================================================================== glosario
  glossary: [
    {
      id: 'lazos-debiles',
      term: 'Lazos débiles',
      definition: 'Vínculos con conocidos, como un vecino o alguien del almacén. Las charlas breves con ellos se asocian con más bienestar y sensación de pertenencia.',
      practiceId: 'red-nueva-de-a-poco',
    },
    {
      id: 'identidad-bicultural',
      term: 'Identidad bicultural',
      definition: 'Sentirse parte de dos culturas a la vez, la de origen y la nueva. Vivirlas como compatibles se asocia con una mejor adaptación.',
      articleId: 'vivir-entre-dos-paises',
      practiceId: 'mi-lengua-y-mis-rituales',
      seeAlso: { href: '/familia/guia/mudanza-o-migracion', label: 'Guía para familias: Mudanzas y migración' },
    },
    {
      id: 'cuidado-transnacional',
      term: 'Cuidado transnacional',
      definition: 'Cuidado que circula entre familiares que viven en países distintos: llamadas, consejos, plata, organizar ayuda y visitas.',
      articleId: 'vivir-entre-dos-paises',
      practiceId: 'culpa-por-los-que-quedaron',
    },
    {
      id: 'carga-administrativa',
      term: 'Carga administrativa',
      definition: 'Lo que pesan los trámites: aprender cómo funcionan, cumplir con lo que piden y el desgaste emocional de esperar sin saber.',
      articleId: 'vivir-entre-dos-paises',
      practiceId: 'un-tramite-por-vez',
    },
    {
      id: 'xenofobia',
      term: 'Xenofobia',
      definition: 'Rechazo, miedo u hostilidad hacia personas por ser de otro país o de otro origen. En la Argentina, los actos discriminatorios están prohibidos por la Ley 23.592.',
      articleId: 'vivir-entre-dos-paises',
      practiceId: 'despues-de-un-trato-xenofobo',
    },
  ],
};
