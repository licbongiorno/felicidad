import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Varones»: salud mental en varones, sin culpar y sin estereotipos.
 *  - mandatos de masculinidad («los hombres no lloran», autosuficiencia, control) y su costo
 *    (Wong y colaboradores; APA, 2018);
 *  - la depresión que se muestra como irritabilidad, consumo, trabajo excesivo o riesgo
 *    (Cochran y Rabinowitz; Seidler y colaboradores);
 *  - pedir ayuda como fortaleza (Addis y Mahalik); amistad masculina y soledad;
 *  - emociones más allá del enojo (granularidad emocional); paternidad presente;
 *  - violencia: responsabilidad y ayuda; riesgo suicida.
 *
 * Inclusivo de varones trans y de todas las orientaciones. No se culpa a nadie por los
 * mandatos que aprendió: se invita a revisarlos. Seguridad: ante ideas de morir, 135,
 * 0800-999-0091 o 911; quien ejerce violencia debe buscar ayuda especializada; quien está
 * en peligro, 911; quien la sufre, Línea 144. Enlaza con 'granularidad-emocional',
 * 'vinculos-y-soledad', 'mandatos-familiares', 'emocion-primaria-secundaria' y
 * 'violencia-de-genero-informacion'.
 */

const ADDIS_2003: Reference = {
  citation: 'Addis, M. E., & Mahalik, J. R. (2003). Men, masculinity, and the contexts of help seeking. American Psychologist, 58(1), 5–14.',
  doi: '10.1037/0003-066X.58.1.5',
};
const WONG_2017: Reference = {
  citation: 'Wong, Y. J., Ho, M.-H. R., Wang, S.-Y., & Miller, I. S. K. (2017). Meta-analyses of the relationship between conformity to masculine norms and mental health-related outcomes. Journal of Counseling Psychology, 64(1), 80–93.',
  doi: '10.1037/cou0000176',
};
const SEIDLER_2016: Reference = {
  citation: "Seidler, Z. E., Dawes, A. J., Rice, S. M., Oliffe, J. L., & Dhillon, H. M. (2016). The role of masculinity in men's help-seeking for depression: A systematic review. Clinical Psychology Review, 49, 106–118.",
  doi: '10.1016/j.cpr.2016.09.002',
};
const COCHRAN_2000: Reference = {
  citation: 'Cochran, S. V., & Rabinowitz, F. E. (2000). Men and depression: Clinical and empirical perspectives. Academic Press.',
};
const APA_2018: Reference = {
  citation: 'American Psychological Association. (2018). APA guidelines for psychological practice with boys and men. American Psychological Association.',
};

/** Aviso común para las prácticas que tocan malestar intenso. */
const CRISIS =
  'Esta práctica no reemplaza una consulta. Si piensas en morir o en hacerte daño, pide ayuda hoy: Centro de Asistencia al Suicida 135 (CABA y GBA; resto del país 0800-345-1435), Línea Nacional de Salud Mental 0800-999-0091 o el 911 en una urgencia. También puedes usar el botón Ayuda de la app. Si el alcohol u otras sustancias se volvieron una forma de aguantar, la Línea 141 de SEDRONAR es gratuita y atiende las 24 horas.';

export const VARONES_PACK: ContentPack = {
  id: 'varones',

  // ================================================================== prácticas
  practices: [
    {
      id: 'mandatos-que-me-pesan',
      title: 'Los mandatos que me pesan',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Revisar las frases que aprendiste sobre cómo debe ser un hombre, ver qué te dan y qué te cuestan, y elegir cuáles quieres seguir.',
      mechanism: 'Los mandatos se aprenden sin darse cuenta. Verlos con claridad permite quedarse con lo que sirve y soltar lo que hace daño.',
      evidenceLevel: 'moderada',
      evidence: [WONG_2017, APA_2018],
      howItWorks: [
        '«Los hombres no lloran.» «Arréglatelas solo.» «No muestres debilidad.» Muchos varones crecen con frases así. Nadie las elige: se aprenden en casa, en la escuela, en la cancha.',
        'Un análisis de muchos estudios encontró que seguir con rigidez estas normas se asocia con peor salud mental y con pedir menos ayuda. La autosuficiencia fue de las que más pesaron (Wong y colaboradores, 2017).',
        'No se trata de dejar de ser quien eres. Algunos valores, como proteger o ser responsable, pueden ser muy valiosos. Se trata de elegir, no de obedecer.',
      ],
      tips: [
        'Escribe las frases tal como las escuchaste.',
        'No juzgues a quien te las enseñó. Seguramente también las aprendió.',
        'Si eres un varón trans, o no te identificas con estos modelos, puedes revisar los mandatos que te llegan a ti.',
      ],
      obstacles: [{ q: 'Siento que esto es atacar a los hombres.', a: 'No lo es. Es mirar qué te hace bien y qué te hace daño, para que puedas elegir. Ser varón no es el problema.' }],
      steps: [
        { title: 'Llegar', instruction: 'Siéntate con comodidad. Respira despacio tres veces.', durationSec: 30, kind: 'breath' },
        { title: 'Las frases', instruction: 'Escribe tres frases que escuchaste sobre cómo debe ser un hombre. Por ejemplo: «Los hombres no lloran».', durationSec: 75, kind: 'reflection' },
        { title: 'Lo que dan', instruction: 'Elige una. ¿Qué te dio de bueno? Fuerza, responsabilidad, cuidado de otros. Anótalo.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que cuestan', instruction: '¿Qué te costó? Callar, aguantar solo, alejarte de alguien. Anótalo sin juzgarte.', durationSec: 60, kind: 'reflection' },
        { title: 'Tu versión', instruction: 'Reescribe la frase a tu manera. Por ejemplo: «Puedo ser fuerte y también pedir ayuda».', durationSec: 60, kind: 'reflection' },
        { title: 'Un paso', instruction: 'Elige una forma de vivir tu nueva frase esta semana. Algo chico y concreto.', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'mas-alla-del-enojo',
      title: 'Más allá del enojo',
      family: 'constructive',
      skills: ['attention', 'compassion'],
      summary: 'Cuando aparece el enojo o la irritación, buscar qué otra emoción hay debajo y ponerle un nombre preciso.',
      mechanism: 'Nombrar con precisión lo que sientes ayuda a regularlo. A veces el enojo tapa tristeza, miedo, vergüenza o cansancio.',
      evidenceLevel: 'moderada',
      evidence: [COCHRAN_2000, APA_2018],
      howItWorks: [
        'A muchos varones se les permitió sólo una emoción: el enojo. La tristeza, el miedo o la ternura se escondían. Con los años, el enojo puede volverse la puerta de salida de todo.',
        'Distinguir emociones parecidas se llama granularidad emocional. Las personas que lo logran suelen regular mejor lo que sienten. Puedes leer más en «Ponerle nombre a lo que sientes».',
        'Esta práctica no busca que no te enojes. El enojo es válido. Busca ver qué más hay.',
      ],
      tips: [
        'Hazla después del enojo, cuando ya bajó un poco.',
        'Usa palabras precisas: frustrado, herido, ignorado, asustado, agotado.',
        'Puedes sentir varias cosas a la vez.',
      ],
      obstacles: [{ q: 'No siento nada más que bronca.', a: 'Puede pasar al principio. Pregúntate qué necesitabas en ese momento. La necesidad suele mostrar la emoción escondida.' }],
      steps: [
        { title: 'Bajar', instruction: 'Respira despacio. Suelta el aire más largo de lo que entra. Hazlo cuatro veces.', durationSec: 45, kind: 'breath' },
        { title: 'La escena', instruction: 'Piensa en un momento reciente en que te enojaste. Escribe qué pasó, en dos líneas.', durationSec: 60, kind: 'reflection' },
        { title: 'En el cuerpo', instruction: '¿Dónde sentiste el enojo? Pecho, mandíbula, puños, estómago. Anótalo.', durationSec: 40, kind: 'reflection' },
        { title: 'Debajo', instruction: 'Pregúntate: ¿qué más había? ¿Tristeza, miedo, vergüenza, cansancio, sentirte de lado?', durationSec: 60, kind: 'reflection' },
        { title: 'La necesidad', instruction: '¿Qué necesitabas en ese momento? Respeto, ayuda, descanso, que te escucharan.', durationSec: 60, kind: 'reflection' },
        { title: 'Decirlo', instruction: 'Escribe una frase para decir lo que había debajo. Por ejemplo: «Me sentí de lado».', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'senales-de-que-no-estoy-bien',
      title: 'Señales de que no estoy bien',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Revisar señales de malestar que no parecen tristeza, como irritabilidad, más alcohol, trabajar sin parar o buscar riesgo, y decidir qué hacer.',
      mechanism: 'En muchos varones la depresión se muestra hacia afuera. Reconocer esas señales permite pedir ayuda antes.',
      evidenceLevel: 'moderada',
      evidence: [COCHRAN_2000, SEIDLER_2016],
      cautions: CRISIS,
      howItWorks: [
        'Sam Cochran y Fredric Rabinowitz describieron que en muchos varones la depresión no se ve como tristeza. Puede verse como mal humor, enojo, aislamiento, más consumo, trabajo excesivo o conductas de riesgo (Cochran y Rabinowitz, 2000).',
        'Una revisión encontró que los mandatos de masculinidad influyen en cómo se expresa la depresión y en que se pida menos ayuda (Seidler y colaboradores, 2016).',
        'Los varones mueren más por suicidio. Por eso estas señales importan: no son debilidad, son información.',
      ],
      tips: [
        'Sé honesto contigo. Nadie más va a leer esto.',
        'Si alguien cercano te marcó alguna de estas señales, tómalo en cuenta.',
        'Varias señales juntas durante dos semanas o más son motivo para consultar.',
      ],
      obstacles: [{ q: 'Es sólo estrés, ya se me va a pasar.', a: 'Puede ser. Pero si las señales siguen semanas, consultar no te quita nada. Mejor revisarlo a tiempo.' }],
      steps: [
        { title: 'Llegar', instruction: 'Siéntate en un lugar tranquilo. Respira despacio tres veces.', durationSec: 30, kind: 'breath' },
        { title: 'El humor', instruction: 'En las últimas semanas, ¿estás más irritable, con poca paciencia o con bronca por cosas chicas?', durationSec: 45, kind: 'reflection' },
        { title: 'Escapes', instruction: '¿Tomas más alcohol, apuestas, trabajas sin parar o pasas horas en pantallas para no pensar?', durationSec: 45, kind: 'reflection' },
        { title: 'Riesgos', instruction: '¿Manejas más rápido, te peleas más o haces cosas peligrosas? Anota lo que notes.', durationSec: 45, kind: 'reflection' },
        { title: 'El cuerpo', instruction: '¿Duermes mal, estás cansado siempre o perdiste las ganas de lo que antes te gustaba?', durationSec: 45, kind: 'reflection' },
        { title: 'Decidir', instruction: 'Si marcaste varias, elige con quién hablar esta semana. Un amigo, tu médico o un psicólogo.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo urgente', instruction: 'Si piensas en morir, no esperes. Llama al 135 o al 911 hoy.', durationSec: 20, kind: 'instruction' },
      ],
    },
    {
      id: 'pedir-ayuda-es-fuerza',
      title: 'Pedir ayuda es fuerza',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Preparar una conversación para pedir ayuda a alguien de confianza o a un profesional, con palabras que te queden cómodas.',
      mechanism: 'Pedir ayuda cuesta menos cuando el pedido es concreto y lo ves como algo que también harías por otro.',
      evidenceLevel: 'moderada',
      evidence: [ADDIS_2003, SEIDLER_2016],
      howItWorks: [
        'Michael Addis y James Mahalik mostraron que pedir ayuda depende del contexto. Cuesta más si el problema parece vergonzoso, si sientes que quedarás en deuda o si tu entorno lo ve mal. Cuesta menos si es algo común y se puede devolver (Addis y Mahalik, 2003).',
        'Por eso ayuda pensarlo así: muchos varones pasan por esto, y tú harías lo mismo por un amigo. Pedir ayuda es una forma de hacerte cargo.',
        'No tienes que contarlo todo. Alcanza con dar un primer paso.',
      ],
      tips: [
        'Elige a alguien que sepa escuchar, no al que siempre da consejos.',
        'Puedes empezar por mensaje si en persona cuesta.',
        'Para pedir un turno con un profesional, también vale prepararlo así.',
      ],
      obstacles: [{ q: 'No quiero ser una carga.', a: 'Piensa si tú lo verías así si un amigo te pidiera ayuda. A la mayoría de las personas les gusta poder ayudar.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en algo con lo que vienes cargando.', durationSec: 30, kind: 'breath' },
        { title: 'Al revés', instruction: 'Imagina que un amigo te cuenta lo mismo. ¿Qué pensarías de él? Escríbelo.', durationSec: 60, kind: 'reflection' },
        { title: 'A quién', instruction: 'Elige a una persona o un profesional. Escribe su nombre.', durationSec: 30, kind: 'reflection' },
        { title: 'Qué pedir', instruction: 'Escribe qué necesitas. Que te escuche, un consejo, compañía, un turno.', durationSec: 45, kind: 'reflection' },
        { title: 'Las palabras', instruction: 'Escribe la primera frase. Por ejemplo: «Ando mal hace un tiempo y quería hablarlo contigo».', durationSec: 60, kind: 'reflection' },
        { title: 'Cuándo', instruction: 'Elige cuándo vas a escribir o llamar. Ponle día y hora.', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'amistad-que-cuida',
      title: 'Una amistad que cuida',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Retomar el contacto con un amigo y sumar a lo de siempre, como el fútbol o el asado, un momento de charla de verdad.',
      mechanism: 'Las amistades protegen la salud. Una charla sincera, aunque sea breve, profundiza el vínculo y baja la soledad.',
      evidenceLevel: 'preliminar',
      evidence: [ADDIS_2003, APA_2018],
      howItWorks: [
        'Muchos varones tienen amigos para hacer cosas juntos, pero pocos con quienes hablar de lo que les pasa. Con los años, y con el trabajo y la familia, los encuentros se espacian.',
        'La soledad afecta la salud, y las amistades protegen. Puedes leer más en «Vínculos y soledad».',
        'No hace falta una gran charla. Muchos varones hablan mejor al lado del otro, caminando, manejando o haciendo algo con las manos.',
      ],
      tips: [
        'Propón algo concreto, con día y lugar.',
        'Haz una pregunta abierta y escucha sin apurarte a aconsejar.',
        'Si cuesta, cuenta tú algo primero. Abre la puerta.',
      ],
      obstacles: [{ q: 'Me da vergüenza escribirle después de tanto.', a: 'Lo más probable es que él también lo haya pensado. Un mensaje simple alcanza: «Me acordé de ti, ¿nos vemos?».' }],
      steps: [
        { title: 'Pensar', instruction: 'Piensa en un amigo que extrañas o que hace mucho no ves. Escribe su nombre.', durationSec: 40, kind: 'reflection' },
        { title: 'Lo que tienen', instruction: 'Anota qué compartían. Un deporte, un barrio, una época, una forma de reírse.', durationSec: 45, kind: 'reflection' },
        { title: 'El plan', instruction: 'Elige algo para hacer juntos. Caminar, comer, ver un partido, arreglar algo.', durationSec: 45, kind: 'reflection' },
        { title: 'La pregunta', instruction: 'Elige una pregunta abierta para ese día. Por ejemplo: «¿Y tú, cómo andas de verdad?».', durationSec: 45, kind: 'reflection' },
        { title: 'El mensaje', instruction: 'Escribe ahora el mensaje para invitarlo. Simple y corto.', durationSec: 45, kind: 'instruction' },
        { title: 'Enviar', instruction: 'Si puedes, envíalo hoy. Nota cómo te sientes al hacerlo.', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'padre-presente',
      title: 'Padre presente',
      family: 'constructive',
      skills: ['attention', 'compassion'],
      summary: 'Diez minutos al día de atención plena con tu hijo o hija, siguiendo su juego, y una forma de hablar de emociones en casa.',
      mechanism: 'La presencia cotidiana y atenta construye el vínculo. Mostrar emociones distintas al enojo enseña con el ejemplo.',
      evidenceLevel: 'preliminar',
      evidence: [APA_2018, COCHRAN_2000],
      howItWorks: [
        'Las guías de la Asociación Americana de Psicología animan a los padres a involucrarse de forma cercana en la crianza. Esto hace bien a los hijos y también a los padres (American Psychological Association, 2018).',
        'Estar presente no es estar todo el día. Es estar de verdad un rato: sin celular, mirando, siguiendo el juego. Puedes leer la guía «Tiempo especial» de la sección para familias.',
        'Cuando un padre dice «estoy triste» o «me asusté», enseña que todas las emociones tienen lugar.',
      ],
      tips: [
        'Deja el celular en otro ambiente durante esos minutos.',
        'Deja que tu hijo o hija elija el juego. Tú acompañas.',
        'Si hay más de un hijo, busca un rato con cada uno.',
      ],
      obstacles: [{ q: 'Llego muy cansado del trabajo.', a: 'Diez minutos alcanzan. Incluso cansado, estar atento ese rato vale más que una tarde entera con la cabeza en otra cosa.' }],
      steps: [
        { title: 'Antes', instruction: 'Antes de entrar a casa, respira hondo tres veces. Deja el trabajo afuera.', durationSec: 30, kind: 'breath' },
        { title: 'Elegir el rato', instruction: 'Elige diez minutos de hoy para estar con tu hijo o hija. Sin celular.', durationSec: 30, kind: 'reflection' },
        { title: 'Seguir', instruction: 'En ese rato, deja que elija qué hacer. Mira, acompaña y comenta lo que hace.', durationSec: 90, kind: 'instruction' },
        { title: 'Nombrar', instruction: 'Si muestra una emoción, ponle nombre. Por ejemplo: «Parece que te frustraste».', durationSec: 45, kind: 'instruction' },
        { title: 'Mostrar', instruction: 'Elige una emoción tuya de hoy para contarle, simple y sin cargarlo. Por ejemplo: «Hoy estuve cansado».', durationSec: 45, kind: 'reflection' },
        { title: 'Anotar', instruction: 'Al final del día, anota un momento lindo que compartieron.', durationSec: 30, kind: 'reflection' },
      ],
    },
  ],

  meta: {
    'mandatos-que-me-pesan': { level: 'iniciacion', approaches: ['narrativa', 'act'], module: 'etapas' },
    'mas-alla-del-enojo': { level: 'iniciacion', approaches: ['focalizada-emocion', 'dbt'], module: 'emociones', prerequisites: ['emocion-primaria-secundaria'] },
    'senales-de-que-no-estoy-bien': { level: 'iniciacion', approaches: ['tcc', 'motivacional'], module: 'emociones' },
    'pedir-ayuda-es-fuerza': { level: 'iniciacion', approaches: ['interpersonal', 'cft'], module: 'relaciones' },
    'amistad-que-cuida': { level: 'iniciacion', approaches: ['interpersonal', 'positiva'], module: 'relaciones' },
    'padre-presente': { level: 'iniciacion', approaches: ['mentalizacion', 'mindfulness'], module: 'etapas' },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'salud-mental-en-varones',
      title: 'Salud mental en varones',
      subtitle: 'Los mandatos de masculinidad y su costo, la depresión que no parece tristeza, pedir ayuda, la amistad, la paternidad y la violencia.',
      category: 'Etapas de la vida',
      readingMin: 10,
      keyPoints: [
        'Muchos varones aprendieron a no llorar, a arreglárselas solos y a tener todo bajo control.',
        'Seguir esos mandatos con rigidez se asocia con peor salud mental y con pedir menos ayuda.',
        'En varones, la depresión puede verse como irritabilidad, consumo, trabajo excesivo o riesgo.',
        'Pedir ayuda es una forma de hacerse cargo, no una debilidad.',
        'La violencia es responsabilidad de quien la ejerce, y se puede pedir ayuda para dejarla.',
        'Los varones mueren más por suicidio. Ante ideas de morir: 135, 0800-999-0091 o 911.',
      ],
      sections: [
        {
          heading: 'Mandatos que se aprenden',
          paragraphs: [
            '«Los hombres no lloran.» «Aguanta.» «No seas flojo.» Son frases que muchos varones escucharon desde chicos. Nadie las elige, y no hacen a nadie culpable.',
            'Las guías de la Asociación Americana de Psicología señalan que algunas ideas tradicionales sobre la masculinidad, como reprimir emociones o resolver todo con dureza, pueden dañar la salud. También reconocen que hay muchas formas de ser varón (American Psychological Association, 2018).',
            'Esto incluye a varones trans, a varones gays, bisexuales y heterosexuales, y a quienes viven la masculinidad de otras formas.',
          ],
        },
        {
          heading: 'El costo',
          paragraphs: [
            'Un análisis de muchos estudios encontró que seguir con rigidez las normas masculinas se asocia con peor salud mental y con pedir menos ayuda psicológica. Algunas normas, como la autosuficiencia, pesaron más que otras (Wong y colaboradores, 2017).',
            'No se trata de que ser varón haga mal. Se trata de reglas rígidas que dejan poco lugar para sentir, pedir y cuidarse.',
          ],
        },
        {
          heading: 'La depresión que no parece tristeza',
          paragraphs: [
            'Cochran y Rabinowitz describieron que en muchos varones la depresión se muestra hacia afuera: mal humor, enojo, aislamiento, más alcohol, trabajo sin parar o conductas de riesgo (Cochran y Rabinowitz, 2000).',
            'Una revisión encontró que los mandatos de masculinidad influyen en cómo se vive la depresión y en que se consulte menos (Seidler y colaboradores, 2016). Por eso conviene mirar estas señales y no sólo la tristeza.',
          ],
        },
        {
          heading: 'Pedir ayuda',
          paragraphs: [
            'Addis y Mahalik mostraron que pedir ayuda depende del contexto. Cuesta más si el problema parece vergonzoso o si uno siente que quedará en deuda. Cuesta menos si se ve como algo común (Addis y Mahalik, 2003).',
            'Pedir ayuda es hacerse cargo. Puede empezar con un amigo, con tu médico de cabecera o con un turno con un psicólogo.',
          ],
        },
        {
          heading: 'Amistad y soledad',
          paragraphs: [
            'Muchos varones tienen amigos para hacer cosas, pero pocos con quienes hablar. La soledad afecta la salud. Sumar una charla de verdad al fútbol, al asado o a una caminata cambia mucho.',
          ],
        },
        {
          heading: 'Emociones más allá del enojo',
          paragraphs: [
            'Cuando el enojo es la única emoción permitida, tapa otras: tristeza, miedo, vergüenza, cansancio. Aprender a nombrarlas con precisión ayuda a regularlas y a decir lo que se necesita.',
          ],
        },
        {
          heading: 'Paternidad presente',
          paragraphs: [
            'Estar presente con los hijos hace bien a los hijos y a los padres. No hace falta estar todo el día: unos minutos atentos, sin celular, construyen el vínculo. Mostrar emociones en casa enseña con el ejemplo.',
          ],
        },
        {
          heading: 'Violencia: responsabilidad y ayuda',
          paragraphs: [
            'Si alguna vez lastimaste, amenazaste o controlaste a tu pareja, a tus hijos o a otras personas, la responsabilidad es tuya, y también la posibilidad de cambiar. Buscar ayuda especializada es el primer paso. Puedes pedir orientación en tu centro de salud o en la Línea Nacional de Salud Mental 0800-999-0091.',
            'Si alguien está en peligro ahora, llama al 911. Si una persona sufre violencia de género, la Línea 144 la orienta las 24 horas. Puedes leer más en «Violencia de género: reconocerla y pedir ayuda».',
          ],
        },
        {
          heading: 'Riesgo suicida',
          paragraphs: [
            'Los varones mueren más por suicidio, en parte porque piden menos ayuda. Si piensas en morir, no estás solo y no tienes que esperar. Llama al 135 (CABA y GBA; resto del país 0800-345-1435), al 0800-999-0091 o al 911. También puedes usar el botón Ayuda de la app.',
          ],
        },
      ],
      diagram: {
        title: 'El círculo del aguante',
        nodes: ['Malestar', '«Tengo que poder solo»', 'Callar y aguantar', 'Irritabilidad, alcohol o trabajo sin parar', 'Más distancia de los demás', 'Más malestar'],
        caption: 'Nombrar lo que pasa y hablarlo con alguien de confianza corta el círculo.',
      },
      caveat: {
        title: 'Lo que este artículo no hace',
        body: 'No culpa a los varones ni dice cómo hay que ser. Habla de mandatos rígidos y de su costo, para que puedas elegir. No reemplaza una consulta. Si piensas en morir, llama al 135 o al 911. Si ejerces violencia, busca ayuda especializada. Si alguien está en peligro, llama al 911.',
      },
      related: {
        practices: ['mandatos-que-me-pesan', 'mas-alla-del-enojo', 'senales-de-que-no-estoy-bien', 'pedir-ayuda-es-fuerza', 'amistad-que-cuida', 'padre-presente', 'emocion-primaria-secundaria'],
        articles: ['depresion-que-no-parece-tristeza', 'granularidad-emocional', 'vinculos-y-soledad', 'mandatos-familiares', 'violencia-de-genero-informacion'],
      },
      references: [APA_2018, WONG_2017, COCHRAN_2000, SEIDLER_2016, ADDIS_2003],
    },
    {
      id: 'depresion-que-no-parece-tristeza',
      title: 'La depresión que no parece tristeza',
      subtitle: 'Por qué en muchos varones la depresión se ve como mal humor, consumo, trabajo excesivo o riesgo, y qué hacer.',
      category: 'Salud y trabajo',
      readingMin: 6,
      keyPoints: [
        'La depresión no siempre se ve como tristeza.',
        'En muchos varones aparece como irritabilidad, aislamiento, más alcohol, trabajo sin parar o riesgo.',
        'Estas señales son información, no debilidad.',
        'Varias señales durante dos semanas o más son motivo para consultar.',
      ],
      sections: [
        {
          heading: 'Otras caras de la depresión',
          paragraphs: [
            'Cochran y Rabinowitz describieron que la depresión en varones muchas veces se muestra hacia afuera. Aparece como mal humor, bronca, aislamiento, más consumo, trabajo excesivo o conductas de riesgo (Cochran y Rabinowitz, 2000).',
            'Estas formas pueden tapar la tristeza, incluso para quien la siente. Por eso a veces ni la persona ni su entorno se dan cuenta.',
          ],
        },
        {
          heading: 'Por qué pasa',
          paragraphs: [
            'Una revisión encontró que los mandatos de masculinidad influyen en cómo los varones viven y muestran la depresión, y en que consulten menos (Seidler y colaboradores, 2016). Si llorar no estaba permitido, el malestar busca otras salidas.',
          ],
        },
        {
          heading: 'Qué hacer',
          paragraphs: [
            'Revisa con honestidad tus señales de las últimas semanas. Habla con alguien de confianza. Pide un turno con tu médico o con un profesional de salud mental.',
            'Si el alcohol, las apuestas u otras sustancias se volvieron una forma de aguantar, la Línea 141 de SEDRONAR orienta gratis, las 24 horas.',
          ],
        },
      ],
      caveat: {
        title: 'Cuándo no esperar',
        body: 'Si piensas en morir o en hacerte daño, pide ayuda hoy: Centro de Asistencia al Suicida 135 (resto del país 0800-345-1435), Línea Nacional de Salud Mental 0800-999-0091 o el 911. Este artículo no sirve para diagnosticar. Un profesional puede evaluar qué te pasa.',
      },
      related: {
        practices: ['senales-de-que-no-estoy-bien', 'pedir-ayuda-es-fuerza', 'mas-alla-del-enojo'],
        articles: ['salud-mental-en-varones'],
      },
      references: [COCHRAN_2000, SEIDLER_2016],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'varones-cuidarse-tambien',
      title: 'Cuidarse también es de hombres',
      subtitle: 'Cuatro semanas para revisar mandatos, nombrar emociones y acercarte a los demás',
      description:
        'Revisarás los mandatos que aprendiste, buscarás lo que hay debajo del enojo, mirarás tus señales de malestar y prepararás un pedido de ayuda. También retomarás una amistad y practicarás una paternidad presente, si eres padre. No reemplaza una consulta.',
      basis: 'Wong y colaboradores (2017); Cochran y Rabinowitz (2000); Seidler y colaboradores (2016); Addis y Mahalik (2003); American Psychological Association (2018).',
      rhythm: '10 a 15 minutos, 3 o 4 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Mandatos',
          focus: 'Lo que aprendí sobre ser varón',
          description: 'Leerás sobre salud mental en varones y revisarás los mandatos que te pesan.',
          practiceIds: ['mandatos-que-me-pesan'],
          articleIds: ['salud-mental-en-varones'],
          journalType: 'patron-repetido',
        },
        {
          title: 'Semana 2 · Emociones',
          focus: 'Más allá del enojo',
          description: 'Buscarás qué hay debajo del enojo y le pondrás nombre.',
          practiceIds: ['emocion-primaria-secundaria', 'mas-alla-del-enojo'],
          articleIds: ['granularidad-emocional'],
          journalType: 'necesidades',
        },
        {
          title: 'Semana 3 · Señales y ayuda',
          focus: 'Pedir ayuda es hacerse cargo',
          description: 'Mirarás tus señales de malestar y prepararás una conversación para pedir ayuda.',
          practiceIds: ['senales-de-que-no-estoy-bien', 'pedir-ayuda-es-fuerza'],
          articleIds: ['depresion-que-no-parece-tristeza'],
          journalType: 'conversacion',
        },
        {
          title: 'Semana 4 · Vínculos',
          focus: 'Amistad y presencia',
          description: 'Retomarás una amistad y, si eres padre, practicarás diez minutos de presencia por día.',
          practiceIds: ['amistad-que-cuida', 'padre-presente'],
          articleIds: ['vinculos-y-soledad'],
          journalType: 'tres-cosas',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-los-hombres-no-lloran',
      title: '«Los hombres no lloran»',
      subtitle: 'Mandatos de masculinidad y su costo.',
      slides: [
        { heading: 'Frases que se aprenden', text: '«Los hombres no lloran.» «Aguanta.» Muchos varones crecieron con frases así. Nadie las elige.' },
        { heading: 'El costo', text: 'Seguir estos mandatos con rigidez se asocia con peor salud mental y con pedir menos ayuda.' },
        { heading: 'No es ser varón', text: 'El problema no es ser varón. Es una regla rígida que deja poco lugar para sentir y pedir.' },
        { heading: 'Lo que vale', text: 'Puedes quedarte con lo que te sirve, como proteger o ser responsable. Y soltar lo que te daña.' },
        { heading: 'Tu frase', text: 'Prueba reescribir un mandato a tu manera: «Puedo ser fuerte y también pedir ayuda».' },
      ],
      related: { practices: ['mandatos-que-me-pesan'], articles: ['salud-mental-en-varones'] },
      references: [WONG_2017, APA_2018],
    },
    {
      id: 'pildora-depresion-en-varones',
      title: 'Cuando la depresión no parece tristeza',
      subtitle: 'Señales que conviene mirar.',
      slides: [
        { heading: 'Otra cara', text: 'En muchos varones la depresión no se ve como tristeza. Se ve hacia afuera.' },
        { heading: 'Algunas señales', text: 'Mal humor, bronca por cosas chicas, más alcohol, trabajar sin parar, buscar riesgo, alejarse de todos.' },
        { heading: 'Es información', text: 'Estas señales no son debilidad. Te avisan que algo necesita atención.' },
        { heading: 'Cuándo consultar', text: 'Si notas varias durante dos semanas o más, habla con tu médico o con un psicólogo.' },
        { heading: 'Lo urgente', text: 'Si piensas en morir, no esperes. Llama al 135 o al 911. También está el botón Ayuda de la app.' },
      ],
      related: { practices: ['senales-de-que-no-estoy-bien'], articles: ['depresion-que-no-parece-tristeza'] },
      references: [COCHRAN_2000, SEIDLER_2016],
    },
    {
      id: 'pildora-pedir-ayuda-varones',
      title: 'Pedir ayuda es hacerse cargo',
      subtitle: 'Por qué cuesta y cómo hacerlo más fácil.',
      slides: [
        { heading: 'Por qué cuesta', text: 'Pedir ayuda cuesta más si el tema da vergüenza o si sientes que quedarás en deuda.' },
        { heading: 'Al revés', text: 'Piensa qué harías si un amigo te pidiera ayuda. Seguro no pensarías que es débil.' },
        { heading: 'Algo concreto', text: 'Decide qué necesitas: que te escuchen, un consejo o un turno. Un pedido claro es más fácil.' },
        { heading: 'Una primera frase', text: 'Por ejemplo: «Ando mal hace un tiempo y quería hablarlo». Puede ser por mensaje.' },
        { heading: 'Es fuerza', text: 'Pedir ayuda es hacerte cargo de ti y de los tuyos. Eso también es ser fuerte.' },
      ],
      related: { practices: ['pedir-ayuda-es-fuerza', 'amistad-que-cuida'], articles: ['salud-mental-en-varones'] },
      references: [ADDIS_2003],
    },
    {
      id: 'pildora-violencia-responsabilidad',
      title: 'Violencia: hacerse cargo y pedir ayuda',
      subtitle: 'Responsabilidad, no culpa sin salida.',
      slides: [
        { heading: 'Sin rodeos', text: 'Si lastimaste, amenazaste o controlaste a alguien, eso es violencia. Y es tu responsabilidad.' },
        { heading: 'Se puede cambiar', text: 'Hacerse cargo también abre la puerta a cambiar. Nadie lo logra a fuerza de voluntad sin ayuda.' },
        { heading: 'Buscar ayuda', text: 'Pide orientación en tu centro de salud o en la Línea Nacional de Salud Mental 0800-999-0091.' },
        { heading: 'Si hay peligro', text: 'Si alguien está en peligro ahora, llama al 911.' },
        { heading: 'Para quien la sufre', text: 'La Línea 144 orienta a quienes sufren violencia de género, las 24 horas y gratis.' },
      ],
      related: { practices: ['mas-alla-del-enojo'], articles: ['salud-mental-en-varones', 'violencia-de-genero-informacion'] },
      references: [APA_2018],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'mandatos-de-masculinidad', term: 'Mandatos de masculinidad', definition: 'Reglas aprendidas sobre cómo debe ser un varón, como no llorar, arreglárselas solo o tener el control. Seguidas con rigidez, se asocian con peor salud mental.', practiceId: 'mandatos-que-me-pesan' },
    { id: 'normas-masculinas', term: 'Conformidad con normas masculinas', definition: 'Grado en que una persona sigue las normas tradicionales de masculinidad. Algunas, como la autosuficiencia, se asocian con pedir menos ayuda.', articleId: 'salud-mental-en-varones' },
    { id: 'depresion-externalizante', term: 'Depresión que se muestra hacia afuera', definition: 'Forma en que la depresión aparece como irritabilidad, enojo, consumo, trabajo excesivo o riesgo, en lugar de tristeza. Es frecuente en varones.', articleId: 'depresion-que-no-parece-tristeza' },
    { id: 'restriccion-emocional', term: 'Restricción emocional', definition: 'Costumbre de no mostrar ni nombrar emociones, salvo quizás el enojo. Dificulta pedir ayuda y regular lo que se siente.', practiceId: 'mas-alla-del-enojo' },
  ],
};
