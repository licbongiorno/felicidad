import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «TDAH en adultos»: estrategias prácticas, sin autodiagnóstico.
 *  - qué es: atención, impulsividad y regulación emocional (Faraone y colaboradores; Barkley;
 *    Shaw y colaboradores);
 *  - diagnóstico tardío: alivio y duelo;
 *  - estrategias de la TCC para TDAH adulto (Safren y colaboradores): agenda única, dividir
 *    tareas, temporizadores, externalizar, entorno con menos distracciones, rutina de arranque;
 *  - «cuerpo doble»: estrategia popular, con poca evidencia;
 *  - sensibilidad al rechazo: fenómeno descrito en la clínica, sin evidencia sólida como categoría;
 *  - autocompasión frente a años de crítica; pareja y TDAH.
 *
 * Complementa 'andamios-ejecutivos' y 'neurodiversidad-adultos' (salud-trabajo-crianza), sin
 * repetirlos. La medicación sólo se menciona: existe y se decide con el médico.
 */

const SAFREN_2010: Reference = {
  citation:
    'Safren, S. A., Sprich, S., Mimiaga, M. J., Surman, C., Knouse, L., Groves, M., & Otto, M. W. (2010). Cognitive behavioral therapy vs relaxation with educational support for medication-treated adults with ADHD and persistent symptoms: A randomized controlled trial. JAMA, 304(8), 875–880.',
  doi: '10.1001/jama.2010.1192',
};
const SAFREN_2017: Reference = {
  citation: 'Safren, S. A., Sprich, S. E., Perlman, C. A., & Otto, M. W. (2017). Mastering your adult ADHD: A cognitive-behavioral treatment program (2.ª ed.). Oxford University Press.',
};
const FARAONE_2021: Reference = {
  citation:
    'Faraone, S. V., Banaschewski, T., Coghill, D., Zheng, Y., Biederman, J., Bellgrove, M. A., et al. (2021). The World Federation of ADHD International Consensus Statement: 208 evidence-based conclusions about the disorder. Neuroscience & Biobehavioral Reviews, 128, 789–818.',
  doi: '10.1016/j.neubiorev.2021.01.022',
};
const BARKLEY_2015: Reference = {
  citation: 'Barkley, R. A. (Ed.). (2015). Attention-deficit hyperactivity disorder: A handbook for diagnosis and treatment (4.ª ed.). Guilford Press.',
};
const SHAW_2014: Reference = {
  citation: 'Shaw, P., Stringaris, A., Nigg, J., & Leibenluft, E. (2014). Emotion dysregulation in attention deficit hyperactivity disorder. American Journal of Psychiatry, 171(3), 276–293.',
  doi: '10.1176/appi.ajp.2013.13070966',
};

/** Aviso común: no diagnostica; la medicación se decide con el médico; señales de urgencia. */
const TDAH =
  'Esta práctica no diagnostica TDAH ni reemplaza una evaluación profesional. Sirve tengas o no un diagnóstico. Si tomas medicación, cualquier cambio se decide con tu médico. Si te sientes muy mal o aparecen ideas de hacerte daño, llama al 135 o al 0800-999-0091, o al 911 si es una urgencia.';

export const TDAH_ADULTOS_PACK: ContentPack = {
  id: 'tdah-adultos',

  // ================================================================== prácticas
  practices: [
    {
      id: 'agenda-unica',
      title: 'Una sola agenda para todo',
      family: 'constructive',
      skills: ['attention'],
      summary: 'Juntar en un único lugar las citas, las tareas y los pendientes, y revisarlo cada día a la misma hora.',
      mechanism: 'Cuando la memoria de trabajo cuesta, un sistema único y visible reemplaza el esfuerzo de recordar. Revisarlo a diario lo vuelve un hábito.',
      evidenceLevel: 'moderada',
      evidence: [SAFREN_2010, SAFREN_2017],
      cautions: TDAH,
      howItWorks: [
        'Muchas personas con TDAH tienen anotaciones en todos lados: papelitos, mensajes a sí mismas, tres aplicaciones. El problema no es anotar, sino que nada está en un solo lugar.',
        'El programa de terapia cognitivo-conductual de Safren y colaboradores empieza por aquí: una agenda única y una lista de tareas, revisadas todos los días. En un ensayo, esa terapia mejoró los síntomas más que la relajación con educación (Safren y colaboradores, 2010).',
        'La agenda no tiene que ser perfecta. Tiene que ser una sola, estar a mano y mirarse cada día.',
      ],
      tips: [
        'Elige la que vas a llevar siempre encima: suele ser el celular.',
        'Pon una alarma diaria para revisarla, siempre a la misma hora.',
        'Si algo no entra en la agenda, no existe. Pásalo apenas puedas.',
      ],
      obstacles: [
        { q: 'Ya probé agendas y siempre las abandono.', a: 'Es muy común. Empieza con una revisión de dos minutos por día, no con un sistema completo. Si un día no la miras, sólo retoma al siguiente.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira dos veces. Ten a mano el celular o tu cuaderno.', durationSec: 20, kind: 'breath' },
        { title: 'Elegir', instruction: 'Elige una sola agenda. La que vas a tener siempre contigo.', durationSec: 30, kind: 'reflection' },
        { title: 'Juntar', instruction: 'Busca tus papelitos, notas y mensajes con pendientes. Pásalos todos a la agenda.', durationSec: 90, kind: 'instruction' },
        { title: 'Citas', instruction: 'Anota las citas de esta semana, con hora y lugar. Agrega un aviso antes de cada una.', durationSec: 60, kind: 'instruction' },
        { title: 'La lista', instruction: 'Haz una lista de tareas. Marca con una A las dos o tres más importantes para hoy.', durationSec: 60, kind: 'instruction' },
        { title: 'La revisión', instruction: 'Elige una hora fija para revisar la agenda cada día. Pon una alarma ahora.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'vaciar-la-cabeza',
      title: 'Vaciar la cabeza',
      family: 'constructive',
      skills: ['attention'],
      summary: 'Dos minutos para sacar de la cabeza todo lo que da vueltas y ponerlo en papel, para que deje de ocupar lugar.',
      mechanism: 'Escribir los pendientes saca carga de la memoria de trabajo. Lo que está afuera ya no hay que sostenerlo con la atención.',
      evidenceLevel: 'preliminar',
      evidence: [BARKLEY_2015, SAFREN_2017],
      micro: true,
      howItWorks: [
        'Barkley propone poner la información afuera, en el lugar donde se usa, porque sostenerla en la mente cuesta más con TDAH (Barkley, 2015).',
        'Cuando muchas ideas dan vueltas, cuesta empezar cualquier cosa. Escribirlas todas, sin ordenar, suele traer alivio. Después se pasan a la agenda.',
      ],
      tips: [
        'No ordenes mientras escribes. Primero todo afuera.',
        'Úsalo antes de empezar a trabajar o antes de dormir.',
      ],
      obstacles: [{ q: 'Me aparecen más cosas después.', a: 'Es normal. Anótalas en el mismo lugar cuando lleguen. La lista está para eso.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio una vez. Toma papel o el celular.', durationSec: 15, kind: 'breath' },
        { title: 'Todo afuera', instruction: 'Escribe todo lo que te da vueltas. Tareas, ideas, preocupaciones. Sin orden.', durationSec: 75, kind: 'instruction' },
        { title: 'Lo de hoy', instruction: 'Marca una sola cosa para hacer hoy.', durationSec: 20, kind: 'instruction' },
        { title: 'Guardar', instruction: 'Pasa el resto a tu agenda o déjalo para tu revisión diaria.', durationSec: 30, kind: 'instruction' },
        { title: 'Cerrar', instruction: 'Respira. Ya no tienes que recordarlo todo: está escrito.', durationSec: 15, kind: 'breath' },
      ],
    },
    {
      id: 'rutina-de-arranque',
      title: 'Una rutina para empezar',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Preparar un lugar con menos distracciones y una secuencia corta y siempre igual para arrancar una tarea con temporizador.',
      mechanism: 'Una rutina repetida le quita a la tarea el esfuerzo de decidir cómo empezar. Menos distracciones y bloques cortos de tiempo hacen más fácil sostener la atención.',
      evidenceLevel: 'moderada',
      evidence: [SAFREN_2010, SAFREN_2017, BARKLEY_2015],
      cautions: TDAH,
      howItWorks: [
        'Con TDAH, el problema muchas veces no es hacer la tarea, sino empezarla. La terapia de Safren y colaboradores trabaja el entorno y el tiempo: sacar distracciones, dividir en bloques y usar alarmas (Safren y colaboradores, 2017).',
        'Una rutina de arranque es siempre la misma: preparar el lugar, elegir el primer paso, poner el temporizador. Con la repetición, el cuerpo aprende que eso significa empezar.',
        'Si te cuesta dividir la tarea en pasos, la práctica «Andamios para empezar una tarea» te ayuda con eso.',
      ],
      tips: [
        'Deja el celular en otra habitación o en modo no molestar.',
        'Usa bloques cortos al principio, de diez a veinte minutos, con pausas.',
        'Algunas personas trabajan mejor con alguien al lado, el llamado cuerpo doble. Es muy popular, aunque casi no se ha estudiado.',
      ],
      obstacles: [
        { q: 'Termino el bloque y no vuelvo.', a: 'Antes de la pausa, deja anotado el próximo paso y pon una alarma para volver. Así retomar es más fácil.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira dos veces. Piensa en la tarea que quieres empezar.', durationSec: 20, kind: 'breath' },
        { title: 'El lugar', instruction: 'Saca de la vista lo que te distrae. Silencia el celular y cierra las pestañas que no necesitas.', durationSec: 60, kind: 'instruction' },
        { title: 'Lo que necesito', instruction: 'Deja a mano todo lo que vas a usar. Agua, papeles, el archivo abierto.', durationSec: 45, kind: 'instruction' },
        { title: 'El primer paso', instruction: 'Escribe el primer paso, bien chico. Por ejemplo: «Leer el primer párrafo».', durationSec: 30, kind: 'reflection' },
        { title: 'El tiempo', instruction: 'Pon un temporizador de quince minutos donde lo veas. Al sonar, puedes parar.', durationSec: 20, kind: 'instruction' },
        { title: 'Arrancar', instruction: 'Empieza por el primer paso. Si te distraes, vuelve sin retarte.', durationSec: 60, kind: 'instruction' },
        { title: 'Cerrar', instruction: 'Anota cómo te fue con esta rutina. Repetirla la vuelve más fácil.', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'cuando-el-rechazo-duele',
      title: 'Cuando una crítica duele de más',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Una pausa para cuando una crítica, un silencio o un «no» desatan una emoción enorme: frenar, nombrar, mirar los hechos y responder con calma.',
      mechanism: 'Ganar unos segundos entre la emoción y la reacción permite revisar los hechos y elegir qué hacer, en lugar de actuar desde el primer impulso.',
      evidenceLevel: 'preliminar',
      evidence: [SHAW_2014, FARAONE_2021],
      cautions: TDAH,
      howItWorks: [
        'Muchos adultos con TDAH tienen emociones que suben rápido y tardan en bajar. La desregulación emocional se describe con frecuencia en el TDAH (Shaw y colaboradores, 2014).',
        'En la clínica también se habla de «sensibilidad al rechazo»: un dolor muy intenso ante una crítica o una señal de rechazo, real o imaginada. Es un fenómeno que muchas personas reconocen, pero todavía no tiene evidencia sólida como categoría propia.',
        'Esta práctica usa ideas de la terapia dialéctico-conductual: frenar, nombrar la emoción y revisar los hechos. No niega lo que sientes. Te ayuda a no actuar sólo desde el pico.',
      ],
      tips: [
        'Si puedes, no respondas mensajes en el momento más intenso. Espera unos minutos.',
        'Nombrar la emoción en voz baja, como «esto es vergüenza», suele bajar un poco su fuerza.',
        'Si estas reacciones te desbordan seguido, vale la pena hablarlo en terapia.',
      ],
      obstacles: [
        { q: 'Cuando me doy cuenta, ya reaccioné.', a: 'Es muy común al principio. Haz la práctica después, en calma, para entender qué pasó. Con el tiempo, la pausa llega antes.' },
      ],
      steps: [
        { title: 'Frenar', instruction: 'Para un momento. Suelta el celular. Respira despacio tres veces.', durationSec: 30, kind: 'breath' },
        { title: 'Nombrar', instruction: 'Nombra lo que sientes. ¿Vergüenza, enojo, tristeza, miedo? Dilo en voz baja.', durationSec: 30, kind: 'reflection' },
        { title: 'En el cuerpo', instruction: '¿Dónde lo sientes en el cuerpo? Apoya una mano allí y respira hacia esa zona.', durationSec: 40, kind: 'breath' },
        { title: 'Los hechos', instruction: '¿Qué pasó, sin interpretar? Escribe sólo lo que una cámara habría visto.', durationSec: 50, kind: 'reflection' },
        { title: 'Otras lecturas', instruction: '¿Qué otras explicaciones podría haber? Anota al menos una que no sea un rechazo.', durationSec: 50, kind: 'reflection' },
        { title: 'Responder', instruction: 'Elige qué hacer ahora. Esperar, preguntar con calma o cuidarte un rato. No tienes que decidir todo hoy.', durationSec: 40, kind: 'reflection' },
      ],
    },
    {
      id: 'compasion-tras-anos-de-critica',
      title: 'Hablarte distinto después de años de crítica',
      family: 'constructive',
      skills: ['compassion'],
      summary: 'Escuchar la voz crítica que se armó con años de «eres un desastre» y empezar a hablarte con la amabilidad que le darías a alguien querido.',
      mechanism: 'Reconocer de dónde viene la autocrítica y responderle con calidez baja la vergüenza, que suele frenar más que ayudar.',
      evidenceLevel: 'preliminar',
      evidence: [FARAONE_2021, SAFREN_2017],
      cautions: TDAH,
      howItWorks: [
        'Muchos adultos con TDAH crecieron escuchando que eran vagos, distraídos o desordenados. Con los años, esas frases se vuelven una voz propia que critica cada olvido.',
        'Esa voz no ayuda a hacer más. Suele traer vergüenza, y la vergüenza lleva a evitar. Tratarte con amabilidad no es conformarte: es darte una base más firme para intentarlo otra vez.',
        'Las dificultades del TDAH tienen bases en cómo funciona el cerebro, no en la falta de esfuerzo (Faraone y colaboradores, 2021). Saberlo puede ayudar a mirarte con otros ojos.',
      ],
      tips: [
        'Piensa qué le dirías a una amiga o un amigo con la misma dificultad.',
        'Separa la conducta de la persona: «me olvidé» no es lo mismo que «soy un desastre».',
        'Si la autocrítica es muy dura o trae ideas de hacerte daño, busca ayuda profesional.',
      ],
      obstacles: [
        { q: 'Si no me critico, no voy a hacer nada.', a: 'Es una creencia común. Prueba una semana hablarte con amabilidad y mira qué pasa. Muchas personas notan que empiezan más cosas, no menos.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Pon una mano en el pecho y respira despacio. Date un momento.', durationSec: 30, kind: 'breath' },
        { title: 'La voz', instruction: 'Recuerda un olvido o un error reciente. ¿Qué te dijiste? Escribe la frase tal como sonó.', durationSec: 60, kind: 'reflection' },
        { title: 'De dónde viene', instruction: '¿A quién escuchaste decir algo parecido? ¿En la escuela, en casa, en el trabajo? Anótalo.', durationSec: 50, kind: 'reflection' },
        { title: 'Lo que pasó', instruction: 'Describe el hecho sin insultos. Por ejemplo: «Olvidé la reunión porque no puse alarma».', durationSec: 45, kind: 'reflection' },
        { title: 'Otra voz', instruction: '¿Qué le dirías a alguien que quieres en tu lugar? Escríbetelo a ti, con esas mismas palabras.', durationSec: 60, kind: 'reflection' },
        { title: 'Un paso', instruction: 'Elige un pequeño cambio para la próxima vez. Uno solo, amable y posible.', durationSec: 40, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio y lee en voz baja lo que escribiste en «otra voz».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'tdah-en-pareja',
      title: 'TDAH en la pareja: hablar sin culpas',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Preparar una charla con tu pareja sobre cómo el TDAH afecta la convivencia, para pasar de los reproches a acuerdos concretos.',
      mechanism: 'Ver el TDAH como un problema que la pareja enfrenta junta, y no como una falla de una persona, baja la crítica y abre espacio para acuerdos prácticos.',
      evidenceLevel: 'preliminar',
      evidence: [BARKLEY_2015, SAFREN_2017],
      cautions: TDAH,
      howItWorks: [
        'En muchas parejas aparece un patrón: una persona olvida o posterga, la otra recuerda y reclama. Con el tiempo, una se siente controlada y la otra, sola con todo.',
        'Ayuda poner el problema afuera: «nos cuesta organizarnos con el TDAH» en lugar de «eres un desastre». Así se pueden buscar soluciones juntos, como una agenda compartida o un reparto claro de tareas.',
        'Si hay violencia, miedo o maltrato, esto no es un problema de organización. En ese caso, busca ayuda profesional o llama a la Línea 144.',
      ],
      tips: [
        'Elijan un momento tranquilo, no justo después de una pelea.',
        'Hablen de a un tema por vez. Por ejemplo, las cuentas o las tareas de la casa.',
        'Reconocer el esfuerzo de la otra persona suele abrir más que explicar el TDAH.',
      ],
      obstacles: [
        { q: 'Mi pareja dice que el TDAH es una excusa.', a: 'Puede que esté cansada. Puedes decir: «No es excusa, es una explicación. Y quiero buscar formas de hacerlo mejor contigo». Leer juntos sobre el tema puede ayudar.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Piensa en tu pareja con cariño.', durationSec: 30, kind: 'breath' },
        { title: 'El patrón', instruction: '¿Qué situación se repite entre ustedes? Descríbela sin culpas, como si la contaras desde afuera.', durationSec: 60, kind: 'reflection' },
        { title: 'Su lado', instruction: '¿Cómo puede sentirse tu pareja en esa situación? Anota una o dos ideas.', durationSec: 50, kind: 'reflection' },
        { title: 'Tu lado', instruction: '¿Cómo te sientes tú? Anota también lo que te cuesta y lo que ya intentaste.', durationSec: 50, kind: 'reflection' },
        { title: 'Un acuerdo', instruction: 'Piensa un acuerdo concreto. Por ejemplo, una agenda compartida o un aviso antes de cada pago.', durationSec: 50, kind: 'reflection' },
        { title: 'Cómo decirlo', instruction: 'Escribe cómo vas a empezar la charla. Por ejemplo: «Quiero que esto nos pese menos a los dos».', durationSec: 40, kind: 'reflection' },
      ],
    },
  ],

  meta: {
    'agenda-unica': { level: 'iniciacion', approaches: ['tcc'], module: 'neurodiversidad' },
    'vaciar-la-cabeza': { level: 'iniciacion', approaches: ['tcc'], module: 'neurodiversidad' },
    'rutina-de-arranque': { level: 'iniciacion', approaches: ['tcc'], module: 'neurodiversidad' },
    'cuando-el-rechazo-duele': { level: 'intermedio', approaches: ['dbt', 'cft'], module: 'neurodiversidad', prerequisites: ['plantas-de-los-pies'] },
    'compasion-tras-anos-de-critica': { level: 'intermedio', approaches: ['cft'], module: 'neurodiversidad', prerequisites: ['pausa-autocompasion'] },
    'tdah-en-pareja': { level: 'intermedio', approaches: ['tcc', 'sistemica'], module: 'neurodiversidad', prerequisites: ['agenda-unica'] },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'tdah-en-adultos',
      title: 'TDAH en adultos: qué es y qué significa un diagnóstico tardío',
      subtitle: 'Atención, impulsividad y emociones; el alivio y el duelo de saberlo de grande, y qué tratamientos hay.',
      category: 'Salud y trabajo',
      readingMin: 8,
      keyPoints: [
        'El TDAH es una condición del neurodesarrollo que muchas veces sigue en la adultez.',
        'No es sólo distracción: también incluye impulsividad, inquietud y, a menudo, emociones difíciles de regular.',
        'Recibir el diagnóstico de adulto puede traer alivio y también duelo por los años sin entenderse.',
        'Hay tratamientos con evidencia: estrategias de terapia cognitivo-conductual y medicación, que se decide con el médico.',
        'Esta información no sirve para diagnosticar. Sólo una evaluación profesional puede hacerlo.',
      ],
      sections: [
        {
          heading: 'Qué es el TDAH',
          paragraphs: [
            'El trastorno por déficit de atención e hiperactividad es una condición del neurodesarrollo. Empieza en la infancia y, en muchas personas, sigue en la adultez. Hay mucha evidencia sobre su existencia, sus causas y su tratamiento (Faraone y colaboradores, 2021).',
            'En adultos, la hiperactividad suele verse menos y la inquietud se vuelve más interna. Cuesta sostener la atención en lo que no interesa, organizar el tiempo, empezar tareas y terminar lo empezado. La impulsividad puede notarse al hablar, al gastar o al decidir rápido (Barkley, 2015).',
            'Muchas personas con TDAH también tienen emociones que suben rápido y tardan en bajar. La desregulación emocional se describe con frecuencia en el TDAH, aunque no es parte de los criterios de diagnóstico (Shaw y colaboradores, 2014).',
          ],
        },
        {
          heading: 'Qué no es',
          paragraphs: [
            'No es flojera, ni falta de inteligencia, ni mala educación. Tampoco es algo que «tenemos todos un poco» porque a veces nos distraemos. En el TDAH las dificultades son persistentes y afectan varias áreas de la vida.',
            'Distraerse con el celular o dormir mal también baja la atención. La ansiedad, la depresión y el trauma pueden parecerse al TDAH. Por eso hace falta una evaluación cuidadosa.',
          ],
        },
        {
          heading: 'El diagnóstico tardío: alivio y duelo',
          paragraphs: [
            'Muchas personas, sobre todo mujeres, reciben el diagnóstico de adultas. Es frecuente sentir alivio: por fin hay una explicación que no es «ser un desastre».',
            'También puede aparecer un duelo. Tristeza o enojo por los años de críticas, por las oportunidades perdidas, por no haber recibido ayuda antes. Esas emociones son esperables y merecen espacio, tanto como el alivio.',
            'El diagnóstico no cambia el pasado, pero puede cambiar cómo lo miras. Muchas personas empiezan a tratarse con más paciencia.',
          ],
        },
        {
          heading: 'Tratamiento',
          paragraphs: [
            'La terapia cognitivo-conductual para el TDAH adulto enseña estrategias concretas: una agenda única, dividir tareas, usar temporizadores y preparar el entorno. En adultos que ya tomaban medicación y seguían con síntomas, esta terapia ayudó más que la relajación con educación (Safren y colaboradores, 2010).',
            'También existe medicación para el TDAH, con buena evidencia. Si es una opción para ti, se decide con un médico, que evalúa tu situación y hace el seguimiento. Esta app no nombra remedios ni da indicaciones.',
          ],
        },
      ],
      caveat: {
        title: 'Sin autodiagnóstico',
        body: 'Los videos y los tests de internet no alcanzan para saber si tienes TDAH. Si te reconoces en lo que lees, consulta con profesionales con experiencia en adultos. Las estrategias de esta app sirven tengas o no un diagnóstico. Si te sientes muy mal, usa el botón Ayuda o llama al 0800-999-0091.',
      },
      related: {
        practices: ['agenda-unica', 'compasion-tras-anos-de-critica', 'andamios-ejecutivos'],
        articles: ['estrategias-tcc-tdah', 'neurodiversidad-adultos', 'medicacion-psiquiatrica'],
      },
      references: [FARAONE_2021, BARKLEY_2015, SHAW_2014, SAFREN_2010],
    },
    {
      id: 'estrategias-tcc-tdah',
      title: 'Estrategias para la vida diaria con TDAH',
      subtitle: 'Agenda única, tareas en pasos, temporizadores, menos distracciones, emociones intensas y pareja.',
      category: 'Salud y trabajo',
      readingMin: 8,
      keyPoints: [
        'La idea central es poner la ayuda afuera: en una agenda, en una alarma, en el entorno.',
        'Una agenda única revisada cada día es la base del programa de Safren y colaboradores.',
        'Dividir tareas, usar temporizadores y una rutina de arranque ayudan a empezar.',
        'El «cuerpo doble» es muy popular, aunque casi no se ha estudiado.',
        'La sensibilidad al rechazo se describe en la clínica, pero todavía no tiene evidencia sólida como categoría.',
      ],
      diagram: {
        title: 'El círculo de la postergación',
        nodes: ['Una tarea pesa', 'Postergar alivia un rato', 'La urgencia crece', 'Se hace a último momento o no se hace', 'Autocrítica y vergüenza'],
        caption: 'La vergüenza hace que la próxima tarea pese más. Las estrategias externas y la autocompasión ayudan a cortar el círculo.',
      },
      sections: [
        {
          heading: 'Poner la ayuda afuera',
          paragraphs: [
            'Barkley describe el TDAH como una dificultad para usar la información en el momento justo. Su consejo es poner la ayuda en el punto de acción: listas a la vista, alarmas, relojes visibles (Barkley, 2015).',
            'El programa de terapia cognitivo-conductual de Safren y colaboradores (2017) se apoya en esa idea. Empieza por una agenda única y una lista de tareas con prioridades, revisadas todos los días a la misma hora.',
          ],
        },
        {
          heading: 'Empezar y sostener',
          paragraphs: [
            'Las tareas grandes paralizan. Dividirlas en pasos chicos, de pocos minutos, hace que el primero sea posible. El primer paso tiene que ser tan chico que dé casi vergüenza.',
            'El temporizador ayuda porque el tiempo se ve mejor que se siente. Bloques cortos con pausas, y una alarma para volver, sostienen la atención. Preparar el lugar antes de empezar, con el celular lejos y lo necesario a mano, baja las distracciones.',
            'El «cuerpo doble» es trabajar al lado de otra persona, en persona o por video. Es una estrategia muy popular en la comunidad TDAH. Muchas personas dicen que les sirve, pero casi no hay estudios sobre ella.',
          ],
        },
        {
          heading: 'Emociones intensas y sensibilidad al rechazo',
          paragraphs: [
            'Muchos adultos con TDAH sienten las emociones con mucha fuerza y les cuesta volver a la calma (Shaw y colaboradores, 2014). Una crítica chica puede sentirse como un golpe enorme.',
            'Se habla de «sensibilidad al rechazo» para nombrar ese dolor intenso ante una crítica o un rechazo, real o imaginado. Es un fenómeno descrito en la clínica que muchas personas reconocen. Todavía no tiene evidencia sólida como categoría propia, y no es un diagnóstico.',
            'Ayudan las habilidades de regulación emocional: frenar, nombrar la emoción, revisar los hechos y elegir la respuesta. Y la autocompasión, frente a años de críticas.',
          ],
        },
        {
          heading: 'TDAH y pareja',
          paragraphs: [
            'En la pareja suele aparecer un patrón: una persona olvida y la otra recuerda y reclama. Con el tiempo, una se siente controlada y la otra, sola con todo.',
            'Ayuda poner el problema afuera, como algo que enfrentan juntos, y armar acuerdos concretos: una agenda compartida, un reparto claro de tareas, avisos automáticos. Si hay violencia o miedo, no es un problema de organización: llama a la Línea 144 o busca ayuda profesional.',
          ],
        },
      ],
      caveat: {
        title: 'Lo que se sabe y lo que no',
        body: 'La terapia cognitivo-conductual para TDAH adulto tiene buena evidencia. El cuerpo doble y la sensibilidad al rechazo son ideas muy difundidas, pero con poca investigación. La medicación existe y se decide siempre con un médico. Estas estrategias no reemplazan una evaluación profesional.',
      },
      related: {
        practices: ['agenda-unica', 'rutina-de-arranque', 'vaciar-la-cabeza', 'cuando-el-rechazo-duele', 'tdah-en-pareja', 'andamios-ejecutivos'],
        articles: ['tdah-en-adultos', 'neurodiversidad-adultos'],
      },
      references: [SAFREN_2017, SAFREN_2010, BARKLEY_2015, SHAW_2014, FARAONE_2021],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'tdah-adulto-paso-a-paso',
      title: 'TDAH adulto, paso a paso',
      subtitle: 'Cuatro semanas de estrategias prácticas y una mirada más amable hacia ti',
      description:
        'Armarás una agenda única, aprenderás a vaciar la cabeza y a arrancar tareas, practicarás qué hacer cuando una crítica duele de más y empezarás a hablarte con más amabilidad. Al final, prepararás una charla con tu pareja si la tienes. Este programa no diagnostica ni reemplaza la atención profesional. La medicación, si corresponde, se decide con tu médico.',
      basis: 'Safren y colaboradores (2010, 2017); Barkley (2015); Faraone y colaboradores (2021); Shaw y colaboradores (2014).',
      rhythm: '5 a 10 minutos, 4 o 5 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Entender y ordenar',
          focus: 'Qué es el TDAH y una agenda única',
          description: 'Leerás qué es el TDAH en adultos y armarás una sola agenda que revisarás cada día.',
          practiceIds: ['agenda-unica', 'vaciar-la-cabeza'],
          articleIds: ['tdah-en-adultos'],
          journalType: 'intencion',
        },
        {
          title: 'Semana 2 · Empezar',
          focus: 'Pasos chicos, temporizador y menos distracciones',
          description: 'Practicarás una rutina para arrancar tareas y dividirlas en pasos posibles.',
          practiceIds: ['rutina-de-arranque', 'andamios-ejecutivos'],
          articleIds: ['estrategias-tcc-tdah'],
          journalType: 'tarjeta-diaria',
        },
        {
          title: 'Semana 3 · Emociones',
          focus: 'Críticas que duelen y años de autocrítica',
          description: 'Aprenderás a frenar cuando una crítica duele de más y a responderle a tu voz crítica con amabilidad.',
          practiceIds: ['cuando-el-rechazo-duele', 'compasion-tras-anos-de-critica'],
          articleIds: [],
          journalType: 'carta-compasiva',
        },
        {
          title: 'Semana 4 · Con otros',
          focus: 'Pareja y acuerdos',
          description: 'Prepararás una charla sin culpas sobre cómo el TDAH afecta la convivencia y buscarás un acuerdo concreto.',
          practiceIds: ['tdah-en-pareja', 'agenda-unica'],
          articleIds: ['neurodiversidad-adultos'],
          journalType: 'conversacion',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-tdah-no-es-flojera',
      title: 'TDAH no es flojera',
      subtitle: 'Qué es el TDAH en adultos, en cinco tarjetas.',
      slides: [
        { heading: 'No es pereza', text: 'El TDAH tiene que ver con cómo funciona el cerebro. No es falta de ganas ni de inteligencia.' },
        { heading: 'Más que atención', text: 'Cuesta empezar, organizar el tiempo y frenar impulsos. Las emociones también pueden ser muy intensas.' },
        { heading: 'En adultos', text: 'Muchas veces sigue en la adultez. La inquietud se vuelve más interna.' },
        { heading: 'Se parece a otras cosas', text: 'La ansiedad, la depresión o dormir mal pueden parecerse. Por eso hace falta una evaluación.' },
        { heading: 'Hay ayuda', text: 'Hay terapia con buena evidencia y también medicación, que se decide con el médico.' },
      ],
      related: { practices: ['agenda-unica'], articles: ['tdah-en-adultos'] },
      references: [FARAONE_2021, BARKLEY_2015],
    },
    {
      id: 'pildora-diagnostico-tardio-tdah',
      title: 'Saberlo de grande',
      subtitle: 'Alivio y duelo de un diagnóstico tardío de TDAH.',
      slides: [
        { heading: 'Alivio', text: 'Muchas personas sienten alivio. Por fin hay una explicación que no es «ser un desastre».' },
        { heading: 'Duelo', text: 'También puede haber tristeza o enojo. Por los años de críticas y por la ayuda que no llegó.' },
        { heading: 'Las dos cosas', text: 'Alivio y duelo pueden estar juntos. Las dos emociones merecen espacio.' },
        { heading: 'Otra mirada', text: 'El pasado no cambia. Pero puedes mirarlo con más paciencia y menos culpa.' },
        { heading: 'Si te pesa', text: 'Si la tristeza no se va o te sientes muy mal, habla con un profesional. O llama al 0800-999-0091.' },
      ],
      related: { practices: ['compasion-tras-anos-de-critica'], articles: ['tdah-en-adultos'] },
      references: [FARAONE_2021],
    },
    {
      id: 'pildora-agenda-unica',
      title: 'Una sola agenda',
      subtitle: 'La base de la terapia para el TDAH adulto.',
      slides: [
        { heading: 'Papelitos por todos lados', text: 'Notas en el celular, en la heladera, en mensajes. Así es fácil perder lo importante.' },
        { heading: 'Una sola', text: 'Junta todo en una agenda. La que llevas siempre encima, como el celular.' },
        { heading: 'Cada día', text: 'Revísala todos los días a la misma hora. Pon una alarma para eso.' },
        { heading: 'Lo importante', text: 'Marca dos o tres tareas para hoy. No todo es urgente.' },
        { heading: 'Sin perfección', text: 'Si un día no la miras, retoma al siguiente. No hace falta empezar de cero.' },
      ],
      related: { practices: ['agenda-unica', 'vaciar-la-cabeza'], articles: ['estrategias-tcc-tdah'] },
      references: [SAFREN_2017, SAFREN_2010],
    },
    {
      id: 'pildora-sensibilidad-al-rechazo',
      title: 'Cuando una crítica duele de más',
      subtitle: 'Emociones intensas y TDAH, con lo que se sabe y lo que no.',
      slides: [
        { heading: 'Emociones fuertes', text: 'Muchos adultos con TDAH sienten las emociones con mucha fuerza. Les cuesta volver a la calma.' },
        { heading: 'Un dolor enorme', text: 'A veces una crítica chica se siente como un golpe enorme. Se habla de sensibilidad al rechazo.' },
        { heading: 'Lo que se sabe', text: 'Es algo que mucha gente reconoce. Pero todavía no hay estudios sólidos que la muestren como algo aparte.' },
        { heading: 'Lo que ayuda', text: 'Frenar, nombrar lo que sientes y mirar los hechos. Después, elegir qué hacer.' },
        { heading: 'Con amabilidad', text: 'Tratarte bien después de una reacción fuerte ayuda más que castigarte.' },
      ],
      related: { practices: ['cuando-el-rechazo-duele', 'compasion-tras-anos-de-critica'], articles: ['estrategias-tcc-tdah'] },
      references: [SHAW_2014],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'tdah-adulto', term: 'TDAH', definition: 'Trastorno por déficit de atención e hiperactividad. Afecta la atención, la organización y el control de impulsos, y muchas veces sigue en la adultez.', articleId: 'tdah-en-adultos' },
    { id: 'disregulacion-emocional', term: 'Desregulación emocional', definition: 'Dificultad para manejar emociones que suben rápido y tardan en bajar. Es frecuente en el TDAH.', articleId: 'estrategias-tcc-tdah', practiceId: 'cuando-el-rechazo-duele' },
    { id: 'sensibilidad-al-rechazo', term: 'Sensibilidad al rechazo', definition: 'Dolor muy intenso ante una crítica o un rechazo, real o imaginado. Se describe en la clínica del TDAH, pero no es un diagnóstico ni tiene aún evidencia sólida.', articleId: 'estrategias-tcc-tdah', practiceId: 'cuando-el-rechazo-duele' },
    { id: 'diagnostico-tardio-tdah', term: 'Diagnóstico tardío', definition: 'Recibir el diagnóstico de TDAH en la adultez. Puede traer alivio y también duelo por los años sin entenderse.', articleId: 'tdah-en-adultos' },
    { id: 'agenda-unica-tdah', term: 'Agenda única', definition: 'Un solo lugar para citas y tareas, revisado cada día. Es la base de la terapia cognitivo-conductual para el TDAH adulto.', articleId: 'estrategias-tcc-tdah', practiceId: 'agenda-unica' },
  ],
};
