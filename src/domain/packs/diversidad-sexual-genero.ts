import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Diversidad sexual y de género», con enfoque afirmativo:
 *  - la diversidad no es un trastorno; lo que daña es el estigma (estrés de minorías, Meyer;
 *    Hendricks y Testa en personas trans y no binarias). La base del modelo ya está en el
 *    artículo «diversidad-y-estres-de-minorias» y en la práctica «cuidarte-frente-a-la-discriminacion»
 *    (paquete Vida cotidiana): aquí se enlazan y se profundiza en lo que falta;
 *  - para la persona: lo que valora de sí, la vergüenza aprendida frente a la autocompasión
 *    (Neff; Gilbert), decidir si, cuándo y a quién contarlo, por etapas y con seguridad
 *    (Legate y colaboradores), y la red de apoyo o familia elegida;
 *  - para la familia: la primera respuesta cuando un hijo, hija o hije lo cuenta, el propio
 *    proceso de madres y padres, qué ayuda y qué daña (Ryan y colaboradores, 2009 y 2010),
 *    y una guía para familias de adolescentes.
 *
 * Reglas de seguridad del paquete: nunca se presenta como opción cambiar la orientación o la
 * identidad (las «terapias de conversión» están rechazadas por las asociaciones profesionales);
 * no se diagnostica (Ley 26.657, art. 3); salir del clóset es una decisión de cada persona y se
 * cuida la seguridad, sobre todo si hay dependencia económica o riesgo de violencia; ante
 * violencia familiar o expulsión del hogar: Línea 102, 144 y 911; ante ideas de no querer vivir:
 * 135 (0800-345-1435) y el botón Ayuda.
 */

// ------------------------------------------------------------------ referencias
const MEYER_2003: Reference = {
  citation: 'Meyer, I. H. (2003). Prejudice, social stress, and mental health in lesbian, gay, and bisexual populations: Conceptual issues and research evidence. Psychological Bulletin, 129(5), 674–697.',
  doi: '10.1037/0033-2909.129.5.674',
};
const HENDRICKS_2012: Reference = {
  citation: 'Hendricks, M. L., & Testa, R. J. (2012). A conceptual framework for clinical work with transgender and gender nonconforming clients: An adaptation of the Minority Stress Model. Professional Psychology: Research and Practice, 43(5), 460–467.',
  doi: '10.1037/a0029597',
};
const RYAN_2009: Reference = {
  citation: 'Ryan, C., Huebner, D., Diaz, R. M., & Sanchez, J. (2009). Family rejection as a predictor of negative health outcomes in White and Latino lesbian, gay, and bisexual young adults. Pediatrics, 123(1), 346–352.',
  doi: '10.1542/peds.2007-3524',
};
const RYAN_2010: Reference = {
  citation: 'Ryan, C., Russell, S. T., Huebner, D., Diaz, R., & Sanchez, J. (2010). Family acceptance in adolescence and the health of LGBT young adults. Journal of Child and Adolescent Psychiatric Nursing, 23(4), 205–213.',
  doi: '10.1111/j.1744-6171.2010.00246.x',
};
const APA_2015_TRANS: Reference = {
  citation: 'American Psychological Association. (2015). Guidelines for psychological practice with transgender and gender nonconforming people. American Psychologist, 70(9), 832–864.',
  doi: '10.1037/a0039906',
};
const APA_2021_SM: Reference = {
  citation: 'American Psychological Association. (2021). Guidelines for psychological practice with sexual minority persons. APA.',
};
const APA_2021_SOCE: Reference = {
  citation: 'American Psychological Association. (2021). APA resolution on sexual orientation change efforts. APA.',
  note: 'Rechaza las llamadas «terapias de conversión» por ineficaces y dañinas.',
};
const LEGATE_2012: Reference = {
  citation: 'Legate, N., Ryan, R. M., & Weinstein, N. (2012). Is coming out always a «good thing»? Exploring the relations of autonomy support, outness, and wellness for lesbian, gay, and bisexual individuals. Social Psychological and Personality Science, 3(2), 145–152.',
};
const PACHANKIS_2015: Reference = {
  citation:
    'Pachankis, J. E., Hatzenbuehler, M. L., Rendina, H. J., Safren, S. A., & Parsons, J. T. (2015). LGB-affirmative cognitive-behavioral therapy for young adult gay and bisexual men: A randomized controlled trial of a transdiagnostic minority stress approach. Journal of Consulting and Clinical Psychology, 83(5), 875–889.',
};
const NEFF_2003: Reference = {
  citation: 'Neff, K. D. (2003). Self-compassion: An alternative conceptualization of a healthy attitude toward oneself. Self and Identity, 2(2), 85–101.',
  doi: '10.1080/15298860309032',
};
const GILBERT_2009: Reference = {
  citation: 'Gilbert, P. (2009). Introducing compassion-focused therapy. Advances in Psychiatric Treatment, 15(3), 199–208.',
  doi: '10.1192/apt.bp.107.005264',
};
const LEY_26657: Reference = {
  citation: 'Ley 26.657 de Salud Mental. (2010). Boletín Oficial de la República Argentina.',
  note: 'El artículo 3 prohíbe hacer un diagnóstico en salud mental sobre la base de la elección o la identidad sexual.',
};
const LEY_26743: Reference = {
  citation: 'Ley 26.743 de Identidad de Género. (2012). Boletín Oficial de la República Argentina.',
  note: 'Reconoce el derecho de cada persona a su identidad de género y a ser tratada según ella.',
};

/** Aviso común de seguridad para la persona. */
const SEGURIDAD =
  'Si en tu casa hay violencia o te echaron, busca un lugar seguro. Si tienes menos de 18 años, llama a la Línea 102. Ante violencia de género, a la Línea 144. Si estás en peligro, al 911. Si aparecen ideas de no querer vivir, llama al 135 (desde el resto del país, 0800-345-1435) o usa el botón Ayuda.';

/** Aviso común de seguridad para la familia. */
const SEGURIDAD_FAMILIA =
  'Si tu hijo, hija o hije habla de no querer vivir, se lastima o deja de comer o de salir, consulta pronto. Llama al 135 (desde el resto del país, 0800-345-1435) o usa el botón Ayuda. Si en la casa hay violencia, la Línea 102 orienta sobre niñez y adolescencia, y ante un peligro, el 911.';

export const DIVERSIDAD_SEXUAL_GENERO_PACK: ContentPack = {
  id: 'diversidad-sexual-genero',

  // ================================================================== prácticas
  practices: [
    {
      id: 'lo-que-valoro-de-ser-quien-soy',
      title: 'Lo que valoro de ser quien soy',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Dos minutos para notar algo que valoras de tu orientación, tu identidad o tu camino, y de la gente que te acompaña.',
      mechanism: 'El estigma empuja la atención hacia lo que duele. Mirar a propósito lo que valoras de ti y de tu comunidad suma un contrapeso que protege.',
      evidenceLevel: 'preliminar',
      evidence: [MEYER_2003, APA_2021_SM],
      micro: true,
      howItWorks: [
        'Ilan Meyer describió el estrés de minorías: un estrés extra que viene del rechazo y del prejuicio, no de la identidad (Meyer, 2003). En su modelo, la conexión con la comunidad y una mirada positiva sobre uno mismo protegen.',
        'Esta práctica es corta a propósito. No te pide sentir orgullo si hoy no lo sientes. Sólo te invita a notar algo que valoras, aunque sea pequeño.',
      ],
      tips: [
        'Vale cualquier cosa: tu sensibilidad, tu humor, tu valentía o una amistad.',
        'Si hoy cuesta, piensa qué le valorarías a otra persona en tu lugar.',
        'Repítela en días difíciles. Es un recordatorio, no un examen.',
      ],
      obstacles: [{ q: 'No encuentro nada que valorar.', a: 'Pasa mucho cuando hubo rechazo. Empieza por algo mínimo: «sigo aquí» ya es algo. Si la tristeza no se va, busca un profesional con enfoque afirmativo.' }],
      steps: [
        { title: 'Llegar', instruction: 'Busca una postura cómoda. Respira despacio dos o tres veces.', durationSec: 25, kind: 'breath' },
        { title: 'Algo de ti', instruction: 'Piensa en algo que valoras de ser quien eres. Una forma de amar, de mirar o de vivir.', durationSec: 40, kind: 'reflection' },
        { title: 'Tu camino', instruction: 'Recuerda algo difícil que atravesaste por ser quien eres. ¿Qué fuerza te mostró?', durationSec: 40, kind: 'reflection' },
        { title: 'Tu gente', instruction: 'Piensa en una persona o un grupo que te acepta tal como eres. Nota cómo se siente.', durationSec: 35, kind: 'reflection' },
        { title: 'Una frase', instruction: 'Dite en voz baja: «Ser quien soy no es un problema».', durationSec: 20, kind: 'breath' },
      ],
    },
    {
      id: 'la-voz-de-la-verguenza-aprendida',
      title: 'La voz de la vergüenza aprendida',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Reconocer los mensajes de rechazo que aprendiste sobre la diversidad, ver de dónde vienen y responderles con una voz amable.',
      mechanism: 'La vergüenza internalizada es el prejuicio del entorno vuelto hacia uno mismo. Verla como algo aprendido y responderle con autocompasión baja su peso.',
      evidenceLevel: 'preliminar',
      evidence: [MEYER_2003, HENDRICKS_2012, NEFF_2003, GILBERT_2009, PACHANKIS_2015],
      cautions: SEGURIDAD,
      howItWorks: [
        'Muchas personas lesbianas, gays, bisexuales, trans y no binarias crecieron escuchando chistes, insultos o silencios sobre la diversidad. Esos mensajes se aprenden de chico y a veces se vuelven una voz interna. Meyer (2003) la llama homofobia internalizada; en personas trans se habla de transfobia internalizada (Hendricks y Testa, 2012).',
        'Esa voz no dice la verdad sobre ti. Repite lo que escuchaste. Un ensayo con terapia cognitivo-conductual afirmativa trabajó estos mensajes y bajó la depresión y la ansiedad en varones gays y bisexuales jóvenes (Pachankis y colaboradores, 2015).',
        'La autocompasión ayuda a no sumar maltrato al dolor (Neff, 2003). Paul Gilbert muestra que una voz amable calma el sistema de amenaza que activa la vergüenza (Gilbert, 2009).',
      ],
      tips: [
        'Escribe la frase tal como suena, aunque sea dura. Verla en papel ya toma distancia.',
        'Pregúntate de quién la escuchaste primero.',
        'Si te cuesta la voz amable, imagina a una persona querida que te dice lo mismo.',
      ],
      obstacles: [
        { q: 'Una parte de mí cree que esa voz tiene razón.', a: 'Es esperable: la escuchaste muchos años. No tienes que dejar de creerla hoy. Sólo nota que es aprendida y respóndele con un poco de cuidado.' },
        { q: 'Me trae recuerdos muy dolorosos.', a: 'Para y vuelve a la respiración o a la práctica «Mano en el pecho». Si los recuerdos te desbordan seguido, conviene trabajarlos con un profesional afirmativo.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Pon una mano en el pecho. Respira despacio y siente el calor de la mano.', durationSec: 40, kind: 'breath' },
        { title: 'La frase', instruction: 'Escribe una frase de rechazo que a veces te dices sobre tu orientación o tu identidad. Tal como suena.', durationSec: 60, kind: 'reflection' },
        { title: 'De dónde viene', instruction: '¿Dónde la escuchaste primero? En la familia, en la escuela, en la tele o en la religión. Anótalo.', durationSec: 60, kind: 'reflection' },
        { title: 'Aprendida', instruction: 'Dite: «Esta voz es aprendida. Es el prejuicio de otros, no la verdad sobre mí».', durationSec: 40, kind: 'breath' },
        { title: 'No te pasa sólo a ti', instruction: 'Recuerda que muchas personas de la diversidad cargan con frases parecidas. No estás en esto sin compañía.', durationSec: 40, kind: 'breath' },
        { title: 'La voz amable', instruction: 'Imagina a alguien querido que dice esa frase de sí. Escribe lo que le dirías, con cariño.', durationSec: 75, kind: 'reflection' },
        { title: 'Para ti', instruction: 'Lee esa respuesta como si fuera para ti. Despacio, con la mano en el pecho.', durationSec: 40, kind: 'breath' },
      ],
    },
    {
      id: 'mapa-para-contarlo',
      title: 'Mapa para contarlo a mi ritmo',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Decidir si quieres contar tu orientación o tu identidad, a quién, cuándo y cómo, con un plan por etapas que cuide tu seguridad.',
      mechanism: 'Contarlo hace bien sobre todo donde hay apoyo. Elegir a quién y cuándo, y tener un plan si la respuesta es mala, protege tu bienestar y tu seguridad.',
      evidenceLevel: 'preliminar',
      evidence: [LEGATE_2012, RYAN_2010, APA_2021_SM, APA_2015_TRANS],
      cautions: SEGURIDAD,
      howItWorks: [
        'Salir del clóset no es un solo momento. Es una serie de decisiones: a quién contarlo, cuándo y cómo. Y es tu decisión. Nadie tiene derecho a apurarte ni a contarlo por ti.',
        'Un estudio encontró que contarlo se asociaba a más bienestar en los ámbitos donde la persona se sentía apoyada, y no en los ámbitos que la controlaban (Legate y colaboradores, 2012). Por eso conviene empezar por quien te da apoyo.',
        'La seguridad va primero. Si dependes de alguien para vivir o estudiar, o si en tu casa hubo violencia, tal vez convenga esperar, o tener antes un lugar adonde ir.',
      ],
      tips: [
        'Empieza por la persona que crees que va a responder con más cariño.',
        'Elige un momento tranquilo y un lugar donde puedas irte si lo necesitas.',
        'Puedes ensayar lo que vas a decir con alguien que ya lo sabe.',
        'Pide reserva si no quieres que lo cuente a otros.',
      ],
      obstacles: [
        { q: 'Siento que debo contarlo ya, a todos.', a: 'No hay plazo. Contarlo a algunas personas y no a otras es una forma válida de vivirlo. Tú decides el ritmo.' },
        { q: 'Tengo miedo de que me echen de casa.', a: 'Es un miedo serio. Antes de contarlo, arma un plan: con quién quedarte y a quién llamar. Si tienes menos de 18 años, la Línea 102 puede orientarte.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Siente los pies en el piso y respira despacio. Recuerda que esto es sólo un mapa. No tienes que hacer nada hoy.', durationSec: 30, kind: 'breath' },
        { title: 'Si quiero', instruction: '¿Quieres contarlo? ¿Para qué? Anota qué te gustaría que cambie al contarlo.', durationSec: 60, kind: 'reflection' },
        { title: 'Las personas', instruction: 'Escribe nombres de personas importantes. Al lado, marca si crees que te apoyarían, si no sabes o si podrían reaccionar mal.', durationSec: 75, kind: 'reflection' },
        { title: 'La seguridad', instruction: '¿Dependes de alguna de ellas para vivir, estudiar o trabajar? ¿Hubo violencia? Márcalas. Con ellas conviene esperar o preparar más.', durationSec: 60, kind: 'reflection' },
        { title: 'La primera etapa', instruction: 'Elige una persona de apoyo para empezar. Piensa cuándo, dónde y con qué palabras.', durationSec: 60, kind: 'reflection' },
        { title: 'Plan B', instruction: 'Si la respuesta no es buena, ¿adónde vas y a quién llamas? Anota un lugar y dos nombres.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho. Dite: «Lo cuento cuando yo quiera, a quien yo elija».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'mi-red-afirmativa',
      title: 'Mi red afirmativa',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Dibujar quiénes te aceptan tal como eres, sumar espacios de la comunidad y dar un paso para cuidar tu familia elegida.',
      mechanism: 'El apoyo social y la conexión con la comunidad son de los protectores más fuertes frente al estrés de minorías. Una red se cuida con pasos chicos y regulares.',
      evidenceLevel: 'preliminar',
      evidence: [MEYER_2003, HENDRICKS_2012, RYAN_2010],
      howItWorks: [
        'En el modelo de Meyer (2003), el apoyo y la conexión con otras personas de la diversidad amortiguan el estrés. Hendricks y Testa (2012) describen lo mismo en personas trans y no binarias.',
        'La red no tiene que ser la familia de origen. Muchas personas arman una familia elegida: amistades, parejas, grupos y referentes que las aceptan. Esa red también cuida la salud.',
      ],
      tips: [
        'Cuenta a quienes te aceptan aunque no sepan todo de ti.',
        'Busca organizaciones o grupos de la diversidad en tu ciudad o en línea.',
        'Un mensaje corto también cuida un vínculo.',
      ],
      obstacles: [{ q: 'Casi no tengo a nadie.', a: 'Pasa más de lo que parece, sobre todo después de un rechazo. Empieza por un espacio: un grupo, un taller o una organización. Un profesional afirmativo también puede ser parte de tu red.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Ten a mano papel o el celular.', durationSec: 25, kind: 'breath' },
        { title: 'El centro', instruction: 'Dibuja un círculo con tu nombre. Alrededor, escribe a las personas con las que puedes ser quien eres.', durationSec: 75, kind: 'reflection' },
        { title: 'Más lejos', instruction: 'En un segundo círculo, anota a quienes te tratan bien, aunque no sepan todo de ti.', durationSec: 60, kind: 'reflection' },
        { title: 'Espacios', instruction: 'Anota lugares donde te sientes en casa: un grupo, un club, un bar, una comunidad en línea.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que falta', instruction: '¿Qué te gustaría tener más? Alguien con quien hablar, salir o pedir ayuda.', durationSec: 45, kind: 'reflection' },
        { title: 'Un paso', instruction: 'Elige un paso para esta semana. Escribirle a alguien, ir a un encuentro o buscar un grupo.', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'cuando-te-lo-cuentan',
      title: 'Cuando alguien que quieres te lo cuenta',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Para familias y personas cercanas: cómo responder en el momento en que un hijo, hija o hije, o alguien querido, te cuenta que es LGBTIQ+.',
      mechanism: 'La primera respuesta se recuerda. Agradecer la confianza, escuchar y decir que el cariño sigue protege el vínculo, aunque tengas dudas.',
      evidenceLevel: 'moderada',
      evidence: [RYAN_2009, RYAN_2010, APA_2015_TRANS],
      howItWorks: [
        'Caitlin Ryan y su equipo estudiaron a jóvenes LGB y sus familias. Quienes vivieron mucho rechazo familiar en la adolescencia tuvieron bastante más depresión, consumo de drogas e intentos de suicidio que quienes vivieron poco (Ryan y colaboradores, 2009).',
        'La aceptación familiar se asoció con más autoestima, más apoyo y mejor salud (Ryan y colaboradores, 2010). No hace falta entender todo para aceptar. Basta con mostrar que el vínculo sigue.',
        'Si te lo cuentan, es porque confían en ti. Ese momento no es para dar opiniones. Es para escuchar.',
      ],
      tips: [
        'Una frase simple sirve: «Gracias por contármelo. Te quiero igual».',
        'Pregunta antes de contarlo a otros. Esa decisión es de quien te lo contó.',
        'Usa el nombre y los pronombres que te pida.',
        'Si te sale mal, puedes volver a hablar y reparar.',
      ],
      obstacles: [
        { q: 'Me tomó por sorpresa y reaccioné mal.', a: 'Se puede reparar. Vuelve a hablar, reconoce lo que dijiste y di lo que sientes de verdad: que el cariño sigue.' },
        { q: 'Tengo dudas o creencias que chocan con esto.', a: 'Puedes tenerlas y trabajarlas en otro espacio. Delante de tu hijo, hija o hije, lo que protege es el cariño y el respeto.' },
      ],
      steps: [
        { title: 'Pausa', instruction: 'Antes de responder, respira despacio una vez. Nota lo que sientes, sin actuar todavía.', durationSec: 30, kind: 'breath' },
        { title: 'Agradecer', instruction: 'Piensa cómo agradecer la confianza. Por ejemplo: «Gracias por contármelo. Sé que no fue fácil».', durationSec: 45, kind: 'reflection' },
        { title: 'El cariño', instruction: 'Elige una frase que diga que el vínculo sigue. Por ejemplo: «Te quiero igual que antes».', durationSec: 45, kind: 'reflection' },
        { title: 'Escuchar', instruction: 'Piensa dos preguntas abiertas. «¿Cómo te sientes?» o «¿Qué necesitas de mí?». Después, escucha sin interrumpir.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que no', instruction: 'Anota lo que vas a evitar decir. «Es una etapa», «¿estás seguro?» o «no le cuentes a nadie».', durationSec: 45, kind: 'reflection' },
        { title: 'La reserva', instruction: 'Piensa cómo preguntar a quién más lo puedes contar, y a quién no.', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'mi-proceso-como-familia',
      title: 'Mi propio proceso como madre o padre',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Darle lugar a lo que sientes tú, como madre, padre o tutor, después de que tu hijo, hija o hije te contó que es LGBTIQ+, sin cargarle ese peso.',
      mechanism: 'Las familias también hacen un proceso. Nombrar el miedo o el duelo por lo esperado, distinguirlo de lo que necesita quien te lo contó y elegir conductas de aceptación protege a todos.',
      evidenceLevel: 'preliminar',
      evidence: [RYAN_2009, RYAN_2010, NEFF_2003],
      cautions: SEGURIDAD_FAMILIA,
      howItWorks: [
        'Muchas madres y padres sienten cosas fuertes: miedo por la discriminación, culpa, confusión o tristeza por el futuro que imaginaban. Es esperable. Sentirlo no te hace mala madre ni mal padre.',
        'Lo importante es dónde lo pones. Tu hijo, hija o hije no tiene que sostener tu proceso. Busca a otros adultos, grupos de familias o un profesional afirmativo.',
        'Ryan y colaboradores (2009) mostraron que el rechazo familiar se asocia a más riesgo, y que la aceptación protege (Ryan y colaboradores, 2010). Puedes empezar por conductas de aceptación aunque todavía tengas dudas.',
      ],
      tips: [
        'Separa dos preguntas: «¿qué siento yo?» y «¿qué necesita mi hijo, hija o hije?».',
        'El miedo a la discriminación es real. La respuesta es cuidar, no pedir que se esconda.',
        'Habla con otras familias que ya pasaron por esto.',
        'Trátate con amabilidad. Aprender lleva tiempo.',
      ],
      obstacles: [
        { q: 'Siento que es mi culpa.', a: 'La orientación y la identidad no son culpa de nadie. No hay nada que corregir. Lo que sí depende de ti es acompañar.' },
        { q: 'Alguien me propuso una terapia para que cambie.', a: 'Las «terapias de conversión» no funcionan y hacen daño. Las rechazan las asociaciones profesionales. En Argentina, la ley prohíbe diagnosticar por la orientación o la identidad.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Pon una mano en el pecho y respira despacio. Este espacio es para ti.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que siento', instruction: 'Anota lo que sientes desde que te lo contó. Miedo, tristeza, confusión, culpa o alivio. Todo vale.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que esperaba', instruction: '¿Qué futuro imaginabas? Escríbelo. Puedes despedir esa imagen sin despedir a tu hijo, hija o hije.', durationSec: 60, kind: 'reflection' },
        { title: 'Separar', instruction: 'Ahora piensa en lo que tu hijo, hija o hije necesita de ti. ¿En qué se parece y en qué no a lo que tú sientes?', durationSec: 60, kind: 'reflection' },
        { title: 'Amabilidad', instruction: 'Dite: «Estoy aprendiendo. Puedo sentir esto y, a la vez, acompañar con cariño».', durationSec: 40, kind: 'breath' },
        { title: 'Dónde lo llevo', instruction: 'Elige con quién vas a hablar de lo tuyo. Otro adulto, un grupo de familias o un profesional.', durationSec: 45, kind: 'reflection' },
        { title: 'Un gesto', instruction: 'Elige un gesto de aceptación para esta semana. Usar su nombre, preguntarle cómo está o salir en su defensa ante un comentario.', durationSec: 45, kind: 'reflection' },
      ],
    },
  ],

  meta: {
    'lo-que-valoro-de-ser-quien-soy': { level: 'iniciacion', approaches: ['positiva', 'cft'], module: 'autocompasion' },
    'la-voz-de-la-verguenza-aprendida': { level: 'intermedio', approaches: ['cft', 'tcc'], module: 'autocompasion', prerequisites: ['lo-que-valoro-de-ser-quien-soy', 'pausa-autocompasion'] },
    'mapa-para-contarlo': { level: 'intermedio', approaches: ['tcc', 'act'], module: 'relaciones', prerequisites: ['lo-que-valoro-de-ser-quien-soy'] },
    'mi-red-afirmativa': { level: 'iniciacion', approaches: ['interpersonal'], module: 'relaciones' },
    'cuando-te-lo-cuentan': { level: 'iniciacion', approaches: ['sistemica', 'cft'], module: 'relaciones' },
    'mi-proceso-como-familia': { level: 'intermedio', approaches: ['cft', 'sistemica'], module: 'relaciones', prerequisites: ['cuando-te-lo-cuentan'] },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'vivir-la-diversidad-sin-verguenza',
      title: 'Ser quien eres: vergüenza aprendida, contarlo a tu ritmo y red',
      subtitle: 'Para personas lesbianas, gays, bisexuales, trans, no binarias y de otras identidades: qué daña, qué protege y cuándo pedir ayuda.',
      category: 'Relaciones',
      readingMin: 8,
      keyPoints: [
        'La diversidad sexual y de género no es un trastorno. Lo que daña es el estigma.',
        'La vergüenza internalizada es el prejuicio de otros vuelto hacia ti. Se aprende y se puede desaprender.',
        'Contarlo es tu decisión: a quién, cuándo y cómo. La seguridad va primero.',
        'Tu red y tu comunidad son de los mejores protectores.',
        'Las «terapias de conversión» no funcionan y hacen daño.',
      ],
      sections: [
        {
          heading: 'No es quién eres: es el estigma',
          paragraphs: [
            'Las asociaciones de psicología consideran la diversidad sexual y de género parte de la variación humana (APA, 2015; APA, 2021). El modelo de estrés de minorías explica el malestar extra: viene del rechazo, la discriminación y el miedo a mostrarse (Meyer, 2003). En personas trans y no binarias pasa lo mismo (Hendricks y Testa, 2012).',
            'En la app tienes un artículo sobre ese modelo y una práctica para después de una situación de discriminación. Aquí vamos a lo que pasa por dentro y a las decisiones que tomas.',
          ],
        },
        {
          heading: 'La vergüenza aprendida',
          paragraphs: [
            'Muchas personas crecieron escuchando chistes, insultos o silencios sobre la diversidad. Esos mensajes se aprenden antes de saber quién eres. Después aparecen como una voz interna: «no está bien», «no lo muestres», «vales menos».',
            'Meyer (2003) la incluye entre los estresores internos. No es una falla tuya. Es el prejuicio del entorno vuelto hacia ti. Reconocerla como aprendida y responderle con autocompasión baja su peso (Neff, 2003).',
            'Hay terapias afirmativas que trabajan estos mensajes. Un ensayo con terapia cognitivo-conductual afirmativa bajó la depresión y la ansiedad en varones gays y bisexuales jóvenes (Pachankis y colaboradores, 2015).',
          ],
        },
        {
          heading: 'Contarlo a tu ritmo',
          paragraphs: [
            'Salir del clóset no es un momento único. Es una serie de decisiones que se toman una y otra vez. Puedes contarlo en algunos lugares y no en otros, y eso también es válido.',
            'Contarlo se asocia a más bienestar donde hay apoyo, y no donde hay control (Legate y colaboradores, 2012). Por eso conviene empezar por quien te va a responder con cariño, y armar un plan si dependes de alguien que podría reaccionar mal.',
            'Nadie tiene derecho a contarlo por ti. Si te lo hicieron, tu enojo tiene sentido.',
          ],
        },
        {
          heading: 'Tu red y tu familia elegida',
          paragraphs: [
            'El apoyo de otras personas y la conexión con la comunidad amortiguan el estrés de minorías (Meyer, 2003). La red puede ser tu familia de origen, o una familia elegida: amistades, parejas, grupos y referentes.',
            'Cuidar la red no pide grandes gestos. Un mensaje, un encuentro o un grupo nuevo ya suman.',
          ],
        },
        {
          heading: 'Lo que dice la ley en Argentina',
          paragraphs: [
            'La Ley de Salud Mental 26.657, en su artículo 3, prohíbe hacer un diagnóstico sobre la base de la elección o la identidad sexual. La Ley de Identidad de Género 26.743 reconoce tu derecho a tu identidad y a que te traten según ella.',
            'Cualquier propuesta de «curar» o «cambiar» tu orientación o tu identidad va contra la evidencia y contra estos derechos (APA, 2021).',
          ],
        },
        {
          heading: 'Cuándo pedir ayuda',
          paragraphs: [
            'Busca un profesional con enfoque afirmativo si la tristeza, la ansiedad o la vergüenza no te dejan vivir. Un buen profesional no intenta cambiarte: te acompaña a vivir con más bienestar.',
            'Si en tu casa hay violencia o te echaron, busca un lugar seguro. Si tienes menos de 18 años, la Línea 102 orienta. Ante violencia de género, la Línea 144, y ante un peligro, el 911. Si piensas en no querer vivir, llama al 135 o al 0800-345-1435, o usa el botón Ayuda.',
          ],
        },
      ],
      caveat: {
        title: 'Lo que la evidencia dice y lo que no',
        body: 'El modelo de estrés de minorías tiene mucho apoyo. Las prácticas de esta sección se basan en él y en la autocompasión, pero no se probaron una por una en ensayos. Si alguien te propone cambiar tu orientación o tu identidad, no es una práctica válida: las asociaciones profesionales la rechazan por ineficaz y dañina.',
      },
      diagram: {
        title: 'Cómo el estigma se vuelve vergüenza',
        nodes: ['Mensajes de rechazo del entorno', 'Voz interna de vergüenza', 'Ocultarse y aislarse', 'Menos apoyo y más estrés', 'Más peso de los mensajes de rechazo'],
        caption: 'Responder a la voz con autocompasión, contarlo donde hay apoyo y cuidar la red cortan el ciclo.',
      },
      related: {
        practices: ['lo-que-valoro-de-ser-quien-soy', 'la-voz-de-la-verguenza-aprendida', 'mapa-para-contarlo', 'mi-red-afirmativa', 'cuidarte-frente-a-la-discriminacion', 'pausa-autocompasion'],
        articles: ['diversidad-y-estres-de-minorias', 'familias-que-acompanan-la-diversidad', 'autocompasion'],
      },
      references: [MEYER_2003, HENDRICKS_2012, APA_2015_TRANS, APA_2021_SM, APA_2021_SOCE, NEFF_2003, PACHANKIS_2015, LEGATE_2012, LEY_26657, LEY_26743],
    },
    {
      id: 'familias-que-acompanan-la-diversidad',
      title: 'Cuando tu hijo, hija o hije te cuenta que es LGBTIQ+',
      subtitle: 'Qué ayuda, qué daña y cómo atravesar tu propio proceso sin dejar de acompañar.',
      category: 'Relaciones',
      readingMin: 8,
      keyPoints: [
        'Que te lo cuente es una muestra de confianza.',
        'El rechazo familiar se asocia a mucho más riesgo para la salud. La aceptación protege.',
        'No hace falta entender todo para acompañar. Las conductas de aceptación ya cuidan.',
        'Tu proceso es válido, pero llévalo a otros adultos, no a tu hijo, hija o hije.',
        'Las «terapias de conversión» hacen daño y no son una opción.',
      ],
      sections: [
        {
          heading: 'Lo que dice la investigación',
          paragraphs: [
            'Caitlin Ryan y su equipo estudiaron a jóvenes lesbianas, gays y bisexuales y a sus familias. Quienes vivieron mucho rechazo familiar en la adolescencia tuvieron bastante más depresión, consumo de drogas e intentos de suicidio que quienes vivieron poco o nada (Ryan y colaboradores, 2009).',
            'La aceptación familiar en la adolescencia se asoció con más autoestima, más apoyo social y mejor salud en la juventud (Ryan y colaboradores, 2010). La familia no es la única influencia, pero pesa mucho.',
          ],
        },
        {
          heading: 'Qué ayuda',
          paragraphs: [
            'Agradecer la confianza y decir que el cariño sigue. Escuchar más de lo que hablas. Usar el nombre y los pronombres que te pida. Preguntar antes de contarlo a otros.',
            'También ayuda salir en su defensa ante comentarios de otros, recibir en casa a sus amistades o su pareja, e informarte por tu cuenta. Para las personas trans y no binarias, respetar su identidad en lo cotidiano es parte central del cuidado (APA, 2015).',
          ],
        },
        {
          heading: 'Qué daña',
          paragraphs: [
            'Los insultos, las burlas y la violencia. Pero también cosas que a veces se hacen con buena intención: decir que es una etapa, prohibir hablar del tema, pedirle que lo oculte, culparle por la discriminación que sufre o alejarle de sus amistades.',
            'Llevarlo a una «terapia de conversión» hace daño. Las asociaciones profesionales la rechazan por ineficaz y dañina (APA, 2021). En Argentina, la Ley de Salud Mental 26.657 prohíbe diagnosticar por la orientación o la identidad.',
          ],
        },
        {
          heading: 'Tu propio proceso',
          paragraphs: [
            'Puedes sentir miedo, culpa, confusión o tristeza por el futuro que imaginabas. Es parte de un proceso que muchas familias atraviesan. No hay nada que corregir en tu hijo, hija o hije, ni nada de qué culparte.',
            'Ponle nombre a lo que sientes y búscale un lugar: otros adultos, grupos de familias o un profesional afirmativo. Mientras tanto, puedes elegir conductas de aceptación aunque todavía tengas dudas.',
          ],
        },
        {
          heading: 'Cuándo pedir ayuda',
          paragraphs: [
            'Consulta pronto si tu hijo, hija o hije habla de no querer vivir, se lastima, deja de comer, deja de ir a la escuela o se aísla. Llama al 135 o al 0800-345-1435, o usa el botón Ayuda.',
            'Si hay violencia en la casa o alguien amenaza con echarle de casa, la Línea 102 orienta sobre niñez y adolescencia. Ante un peligro, llama al 911.',
          ],
        },
      ],
      caveat: {
        title: 'Sobre los estudios',
        body: 'Los estudios de Ryan muestran asociaciones fuertes entre rechazo, aceptación y salud, pero son de observación: no prueban cada causa por separado. Aun así, todas las guías profesionales coinciden en que la aceptación familiar protege y que intentar cambiar la orientación o la identidad hace daño.',
      },
      related: {
        practices: ['cuando-te-lo-cuentan', 'mi-proceso-como-familia', 'pausa-autocompasion', 'mano-en-el-pecho'],
        articles: ['vivir-la-diversidad-sin-verguenza', 'diversidad-y-estres-de-minorias'],
      },
      references: [RYAN_2009, RYAN_2010, APA_2015_TRANS, APA_2021_SM, APA_2021_SOCE, LEY_26657, LEY_26743],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'ser-quien-soy',
      title: 'Ser quien soy',
      subtitle: 'Cuatro semanas para tratarte con orgullo, contarlo a tu ritmo y cuidar tu red',
      description:
        'Para personas lesbianas, gays, bisexuales, trans, no binarias y de otras identidades. Notarás lo que valoras de ti, responderás a la vergüenza aprendida con amabilidad, armarás un mapa para contarlo con seguridad y cuidarás tu red. No busca cambiar quién eres: busca que vivas con más bienestar.',
      basis: 'Meyer (2003); Hendricks y Testa (2012); Neff (2003); Legate, Ryan y Weinstein (2012).',
      rhythm: '10 minutos, 4 o 5 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Lo que valoro',
          focus: 'Una mirada afirmativa sobre ti',
          description: 'Leerás cómo el estigma se vuelve vergüenza y practicarás notar lo que valoras de ser quien eres.',
          practiceIds: ['lo-que-valoro-de-ser-quien-soy', 'pausa-autocompasion'],
          articleIds: ['vivir-la-diversidad-sin-verguenza', 'diversidad-y-estres-de-minorias'],
          journalType: 'tres-cosas',
        },
        {
          title: 'Semana 2 · La vergüenza aprendida',
          focus: 'Autocompasión frente a los mensajes de rechazo',
          description: 'Reconocerás los mensajes que aprendiste y les responderás con una voz amable.',
          practiceIds: ['la-voz-de-la-verguenza-aprendida', 'mano-en-el-pecho'],
          articleIds: [],
          journalType: 'carta-compasiva',
        },
        {
          title: 'Semana 3 · A mi ritmo',
          focus: 'Contarlo con seguridad y cuidarte ante la discriminación',
          description: 'Armarás un mapa para decidir si, cuándo y a quién contarlo, y una forma de cuidarte después de un mal trato.',
          practiceIds: ['mapa-para-contarlo', 'cuidarte-frente-a-la-discriminacion'],
          articleIds: [],
          journalType: 'resolucion-problemas',
        },
        {
          title: 'Semana 4 · Mi red',
          focus: 'Familia elegida y comunidad',
          description: 'Dibujarás tu red, sumarás espacios donde te sientes en casa y conectarás con lo que te importa.',
          practiceIds: ['mi-red-afirmativa', 'brujula-valores'],
          articleIds: [],
          journalType: 'valores',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-verguenza-aprendida',
      title: 'Esa voz no es tuya',
      subtitle: 'La vergüenza aprendida y cómo responderle.',
      slides: [
        { heading: 'Mensajes de chico', text: 'Muchas personas crecieron con chistes o silencios sobre la diversidad. Esos mensajes se aprenden antes de saber quién eres.' },
        { heading: 'Una voz interna', text: 'Con los años, se vuelven una voz que dice «no está bien» o «escóndete». Es la vergüenza aprendida.' },
        { heading: 'No es la verdad', text: 'Esa voz repite el prejuicio de otros. No dice nada cierto sobre ti.' },
        { heading: 'Una voz amable', text: 'Respóndele como le hablarías a alguien que quieres. No sumes maltrato al dolor.' },
        { heading: 'Con ayuda', text: 'Si la vergüenza no te deja vivir, busca un profesional con enfoque afirmativo. Un buen profesional no intenta cambiarte.' },
      ],
      related: { practices: ['la-voz-de-la-verguenza-aprendida', 'lo-que-valoro-de-ser-quien-soy'], articles: ['vivir-la-diversidad-sin-verguenza'] },
      references: [MEYER_2003, NEFF_2003],
    },
    {
      id: 'pildora-contarlo-por-etapas',
      title: 'Contarlo cuando tú quieras',
      subtitle: 'Salir del clóset por etapas y con seguridad.',
      slides: [
        { heading: 'Tu decisión', text: 'Salir del clóset es tu decisión. Nadie puede apurarte ni contarlo por ti.' },
        { heading: 'Por etapas', text: 'No es un solo momento. Puedes contarlo a algunas personas y no a otras. Eso también vale.' },
        { heading: 'Donde hay apoyo', text: 'Contarlo hace bien sobre todo donde te apoyan. Empieza por quien crees que te va a responder con cariño.' },
        { heading: 'La seguridad primero', text: 'Si dependes de alguien que podría reaccionar mal, espera o arma un plan. Ten un lugar adonde ir y alguien a quien llamar.' },
        { heading: 'Si hay violencia', text: 'Si te echan o hay violencia, busca un lugar seguro. Si tienes menos de 18 años, llama a la Línea 102. Ante un peligro, al 911.' },
      ],
      related: { practices: ['mapa-para-contarlo', 'mi-red-afirmativa'], articles: ['vivir-la-diversidad-sin-verguenza'] },
      references: [LEGATE_2012, RYAN_2010],
    },
    {
      id: 'pildora-cuando-te-lo-cuentan',
      title: 'Cuando te lo cuentan',
      subtitle: 'La primera respuesta de la familia.',
      slides: [
        { heading: 'Es confianza', text: 'Si tu hijo, hija o hije te cuenta que es LGBTIQ+, es porque confía en ti. Ese momento es para escuchar.' },
        { heading: 'Lo que sirve', text: 'Una frase simple alcanza: «Gracias por contármelo. Te quiero igual».' },
        { heading: 'Lo que no', text: 'Evita decir «es una etapa» o «no le cuentes a nadie». Aunque sea sin querer, se vive como rechazo.' },
        { heading: 'Su decisión', text: 'Pregunta a quién más se lo puedes contar. Usa el nombre y los pronombres que te pida.' },
        { heading: 'Se puede reparar', text: 'Si reaccionaste mal, vuelve a hablar. Reconoce lo que dijiste y di que el cariño sigue.' },
      ],
      related: { practices: ['cuando-te-lo-cuentan'], articles: ['familias-que-acompanan-la-diversidad'] },
      references: [RYAN_2009, RYAN_2010],
    },
    {
      id: 'pildora-familia-que-acepta',
      title: 'La familia que acepta protege',
      subtitle: 'Rechazo, aceptación y salud.',
      slides: [
        { heading: 'El rechazo pesa', text: 'Los jóvenes con mucho rechazo familiar tienen mucha más depresión e intentos de suicidio. Lo mostró un estudio de Caitlin Ryan.' },
        { heading: 'La aceptación cuida', text: 'La aceptación de la familia se asocia con más autoestima y mejor salud. No hace falta entender todo para aceptar.' },
        { heading: 'Gestos que cuidan', text: 'Usar su nombre, salir en su defensa ante burlas y recibir a sus amistades en casa. Son gestos chicos que protegen.' },
        { heading: 'No hay que cambiar nada', text: 'Las «terapias de conversión» no funcionan y hacen daño. En Argentina, la ley prohíbe diagnosticar por la orientación o la identidad.' },
        { heading: 'Tu proceso', text: 'Es normal tener miedo o dudas. Háblalo con otros adultos o un profesional, no con tu hijo, hija o hije.' },
      ],
      related: { practices: ['mi-proceso-como-familia', 'cuando-te-lo-cuentan'], articles: ['familias-que-acompanan-la-diversidad'] },
      references: [RYAN_2009, RYAN_2010, LEY_26657],
    },
  ],

  // ================================================================== guías para familias
  kidGuides: [
    {
      id: 'acompanar-adolescente-lgbtiq',
      title: 'Acompañar a un adolescente LGBTIQ+',
      subtitle: 'Qué hacer cuando tu hijo, hija o hije adolescente te cuenta su orientación o su identidad.',
      readingMin: 6,
      keyPoints: [
        'La aceptación de la familia es uno de los mayores protectores de la salud de adolescentes LGBTIQ+.',
        'No hace falta entender todo. Hace falta mostrar que el vínculo sigue.',
        'La decisión de contarlo a otros es de tu hijo, hija o hije.',
        'Intentar cambiar su orientación o su identidad hace daño.',
      ],
      sections: [
        {
          heading: 'Por qué tu respuesta importa',
          paragraphs: [
            'En la adolescencia, el rechazo de la familia se asocia a mucho más riesgo de depresión, consumo y conductas suicidas en la juventud. La aceptación se asocia a más autoestima y mejor salud (Ryan y colaboradores, 2009 y 2010).',
            'Tu respuesta no tiene que ser perfecta. Tiene que dejar claro que el cariño sigue y que en casa puede ser quien es.',
          ],
        },
        {
          heading: 'En el día a día',
          paragraphs: [
            'Usa el nombre y los pronombres que te pida, también delante de otros. Pregúntale cómo le va en la escuela y con sus amistades. Si sufre burlas o acoso, créele y habla con la escuela.',
            'Recibe en casa a sus amistades y, si tiene, a su pareja, con las mismas reglas que tendrías con cualquier adolescente. Interésate por lo que le gusta.',
          ],
        },
        {
          heading: 'Señales para consultar',
          paragraphs: [
            'Consulta pronto si notas que se aísla, deja la escuela, no duerme o no come, se lastima o habla de no querer vivir. Llama al 135 o al 0800-345-1435, o usa el botón Ayuda. La Línea 102 orienta sobre niñez y adolescencia.',
            'Si buscas un profesional, pregunta si trabaja con enfoque afirmativo. Un buen profesional acompaña a tu hijo, hija o hije y a la familia, sin intentar cambiar quién es.',
          ],
        },
      ],
      phrases: [
        '«Gracias por contármelo. Te quiero igual que antes»',
        '«No tengo todas las respuestas, pero estoy aquí»',
        '«¿A quién más quieres que se lo cuente, y a quién no?»',
        '«Si alguien te molesta por esto, quiero saberlo»',
      ],
      caveat: {
        title: 'Si hay violencia',
        body: 'Si en la casa hay violencia, o alguien amenaza con echar al adolescente, la Línea 102 orienta sobre niñez y adolescencia. Ante violencia de género, la Línea 144. Ante un peligro, el 911.',
      },
      activities: ['voz-amable', 'amigos-que-suman', 'pedir-ayuda', 'mi-brujula'],
      references: [RYAN_2009, RYAN_2010, APA_2015_TRANS],
    },
  ],

  // ================================================================== glosario
  glossary: [
    {
      id: 'verguenza-internalizada',
      term: 'Vergüenza internalizada',
      definition: 'El prejuicio del entorno vuelto hacia uno mismo. En la diversidad sexual y de género se habla de homofobia o transfobia internalizada. Se aprende y se puede desaprender.',
      articleId: 'vivir-la-diversidad-sin-verguenza',
      practiceId: 'la-voz-de-la-verguenza-aprendida',
    },
    {
      id: 'salir-del-closet',
      term: 'Salir del clóset',
      definition: 'Contar a otras personas la propia orientación sexual o identidad de género. Es una decisión propia, que se toma por etapas y cuidando la seguridad.',
      articleId: 'vivir-la-diversidad-sin-verguenza',
      practiceId: 'mapa-para-contarlo',
    },
    {
      id: 'familia-elegida',
      term: 'Familia elegida',
      definition: 'Red de amistades, parejas, grupos y referentes que aceptan a una persona tal como es. Puede sumarse a la familia de origen o reemplazar su apoyo.',
      practiceId: 'mi-red-afirmativa',
    },
    {
      id: 'enfoque-afirmativo',
      term: 'Enfoque afirmativo',
      definition: 'Forma de trabajar en salud mental que considera la diversidad sexual y de género como parte de la variación humana. No intenta cambiar la orientación ni la identidad.',
      articleId: 'vivir-la-diversidad-sin-verguenza',
    },
    {
      id: 'terapias-de-conversion',
      term: 'Terapias de conversión',
      definition: 'Intentos de cambiar la orientación sexual o la identidad de género. No funcionan, hacen daño y las rechazan las asociaciones profesionales.',
      articleId: 'familias-que-acompanan-la-diversidad',
    },
    {
      id: 'identidad-de-genero',
      term: 'Identidad de género',
      definition: 'La vivencia interna del propio género, que puede coincidir o no con el asignado al nacer. En Argentina, la Ley 26.743 reconoce el derecho a ella.',
      articleId: 'familias-que-acompanan-la-diversidad',
    },
  ],
};
