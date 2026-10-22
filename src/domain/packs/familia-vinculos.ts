import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Familia: límites con amor, conflictos y quien cuida»:
 *  - límites firmes y cálidos: la crianza con autoridad de Diana Baumrind y las consecuencias lógicas;
 *  - comunicación no violenta con chicos y adolescentes (Rosenberg; Gottman, Katz y Hooven;
 *    Siegel y Bryson), sin repetir las guías «Berrinches y desbordes» ni «Validar»;
 *  - desescalar cuando la mesa se vuelve una discusión y la reunión familiar semanal;
 *  - el burnout parental y el modelo de equilibrio entre riesgos y recursos (Mikolajczak y Roskam).
 *
 * Lo que ya existe y aquí sólo se enlaza: las guías para familias (berrinches, validar,
 * entrenador-emocional, adolescencia, cuando-consultar), el paquete de cuidadores (carga del
 * cuidador y culpa), la CNV (cnv-autoempatia, cnv-escucha-empatica, cnv-pedido-concreto), la
 * asertividad (el-no-amable, dear-man) y Gottman (inicio-suave, reparar-tras-discusion).
 *
 * Seguridad: nada de castigo físico ni humillación (en la Argentina, el artículo 647 del Código
 * Civil y Comercial prohíbe el castigo corporal). Ante violencia en casa: Línea 144, Línea 102
 * o 911. Si quien cría tiene ideas de escapar o miedo de dañar a sus hijos: 135, 0800-999-0091,
 * 911 y el botón Ayuda. El burnout parental no es un diagnóstico que la app haga: se nombran
 * sus señales y se invita a consultar.
 */

const BAUMRIND_1966: Reference = {
  citation: 'Baumrind, D. (1966). Effects of authoritative parental control on child behavior. Child Development, 37(4), 887–907.',
};
const MIKOLAJCZAK_ROSKAM_2018: Reference = {
  citation:
    'Mikolajczak, M., & Roskam, I. (2018). A theoretical and clinical framework for parental burnout: The balance between risks and resources (BR²). Frontiers in Psychology, 9.',
};
const ROSKAM_2018: Reference = {
  citation:
    'Roskam, I., Brianda, M.-E., & Mikolajczak, M. (2018). A step forward in the conceptualization and measurement of parental burnout: The Parental Burnout Assessment (PBA). Frontiers in Psychology, 9.',
};
const GOTTMAN_1996: Reference = {
  citation:
    'Gottman, J. M., Katz, L. F., & Hooven, C. (1996). Parental meta-emotion philosophy and the emotional life of families: Theoretical models and preliminary data. Journal of Family Psychology, 10(3), 243–268.',
  doi: '10.1037/0893-3200.10.3.243',
};
const GOTTMAN_1997: Reference = { citation: 'Gottman, J. M., Katz, L. F., & Hooven, C. (1997). Meta-emotion: How families communicate emotionally. Lawrence Erlbaum Associates.' };
const SIEGEL_BRYSON_2011: Reference = {
  citation: 'Siegel, D. J., & Bryson, T. P. (2011). The whole-brain child: 12 revolutionary strategies to nurture your child’s developing mind. Delacorte Press.',
  note: 'Hay edición en castellano con el título «El cerebro del niño».',
};
const ROSENBERG_2003: Reference = {
  citation: 'Rosenberg, M. B. (2003). Nonviolent communication: A language of life (2.ª ed.). PuddleDancer Press.',
  note: 'Hay edición en castellano con el título «Comunicación no violenta: un lenguaje de vida».',
};
const NEFF_2003: Reference = {
  citation: 'Neff, K. D. (2003). Self-compassion: An alternative conceptualization of a healthy attitude toward oneself. Self and Identity, 2(2), 85–101.',
  doi: '10.1080/15298860309032',
};
const GOTTMAN_SILVER_1999: Reference = { citation: 'Gottman, J. M., & Silver, N. (1999). The seven principles for making marriage work. Crown.' };
const CCYC_647: Reference = {
  citation: 'Código Civil y Comercial de la Nación (2014). Ley 26.994, artículo 647. Boletín Oficial de la República Argentina.',
  note: 'Prohíbe el castigo corporal en cualquiera de sus formas y los malos tratos hacia niñas, niños y adolescentes.',
};

/** Aviso común: violencia en casa. */
const VIOLENCIA =
  'Si en tu casa hay golpes, amenazas o miedo, esto no alcanza: lo primero es la seguridad. Llama a la Línea 144 si hay violencia de género o a la Línea 102 si un chico está en riesgo. Si hay peligro ya, llama al 911.';

/** Aviso común: agotamiento extremo de quien cría. */
const AGOTAMIENTO =
  'Si sientes ganas de escapar de tu familia, de desaparecer o miedo de lastimar a tus hijos, no estás solo y no es un fracaso: es una señal para pedir ayuda hoy. Llama al 135 (resto del país 0800-345-1435) o al 0800-999-0091. Si hay peligro ya, llama al 911 o usa el botón Ayuda.';

export const FAMILIA_VINCULOS_PACK: ContentPack = {
  id: 'familia-vinculos',

  // ================================================================== prácticas
  practices: [
    {
      id: 'autoempatia-para-quien-cuida',
      title: 'Autoempatía para quien cuida',
      family: 'constructive',
      skills: ['compassion'],
      summary: 'Tres minutos para escucharte después de un mal momento con tus hijos: qué sientes, qué necesitas y un paso amable.',
      mechanism: 'Nombrar lo que sientes y lo que necesitas baja la culpa y te deja más calma para volver a criar. Es la autoempatía de la CNV, en versión corta.',
      evidenceLevel: 'preliminar',
      evidence: [ROSENBERG_2003, NEFF_2003],
      howItWorks: [
        'Después de gritar, de perder la paciencia o de un día eterno, muchas madres y padres se hablan con dureza: «Soy un desastre», «No sirvo para esto». Esa voz no ayuda a criar mejor. Sólo suma cansancio.',
        'Marshall Rosenberg propone escuchar esa voz con empatía. Debajo del juicio hay un sentimiento y una necesidad: descanso, ayuda, calma, sentir que haces bien tu tarea (Rosenberg, 2003). La idea se parece a la autocompasión que estudia Kristin Neff (Neff, 2003).',
        'Esta es una versión breve, para usar en el momento. Si quieres ir más hondo, la práctica «Autoempatía» del módulo de CNV tiene más pasos.',
      ],
      tips: [
        'Úsala en el baño, en la cocina o en el auto. Tres minutos alcanzan.',
        'No hace falta que la necesidad se cumpla ya. Nombrarla ya alivia.',
        'Si te equivocaste con tu hijo, después puedes reparar. Primero, cálmate tú.',
      ],
      obstacles: [
        { q: 'Si me trato bien, me voy a dar permiso para gritar.', a: 'Pasa lo contrario. La culpa fuerte agota, y el agotamiento lleva a más gritos. Entender qué necesitabas te muestra qué cambiar.' },
        { q: 'No tengo ni tres minutos.', a: 'Prueba con un minuto: una mano en el pecho, un sentimiento, una necesidad. Ya es un comienzo.' },
      ],
      cautions: AGOTAMIENTO,
      micro: true,
      steps: [
        { title: 'Parar', instruction: 'Pon una mano en el pecho. Respira lento tres veces.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que te dices', instruction: 'Nota la frase dura que te dices. Por ejemplo: «Soy una mala madre» o «No sirvo para esto».', durationSec: 30, kind: 'reflection' },
        { title: 'Lo que sientes', instruction: 'Debajo de esa frase, ¿qué sientes? Cansancio, tristeza, miedo, enojo. Nómbralo en voz baja.', durationSec: 35, kind: 'reflection' },
        { title: 'Lo que necesitas', instruction: '¿Qué necesitas ahora? Descanso, ayuda, silencio, que alguien te entienda. Elige una.', durationSec: 35, kind: 'reflection' },
        { title: 'Un paso amable', instruction: 'Piensa algo chico que cuide esa necesidad hoy. Un vaso de agua, pedir una mano, cinco minutos solo.', durationSec: 30, kind: 'reflection' },
        { title: 'Volver', instruction: 'Dite: «Esto es difícil y estoy haciendo lo que puedo». Respira y vuelve.', durationSec: 20, kind: 'breath' },
      ],
    },
    {
      id: 'el-no-con-amor-a-un-hijo',
      title: 'El «no» con amor a un hijo',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Preparar un «no» claro para tu hijo o hija: validar lo que siente, sostener el límite sin gritos y elegir una consecuencia lógica si hace falta.',
      mechanism: 'Un límite firme dicho con calidez da seguridad. Validar la emoción y mantener el «no» enseña que se puede sentir todo, pero no hacer todo.',
      evidenceLevel: 'preliminar',
      evidence: [BAUMRIND_1966, GOTTMAN_1997],
      howItWorks: [
        'Diana Baumrind describió tres estilos de crianza. El autoritario pone reglas sin explicar y espera obediencia. El permisivo da mucho afecto, pero pocos límites. El que ella llamó «con autoridad» une las dos cosas: reglas claras, explicadas, y mucho afecto (Baumrind, 1966).',
        'En la práctica, suena así: «Puedes enojarte, y la respuesta sigue siendo no». Primero nombras lo que siente. Después sostienes el límite con pocas palabras. Gottman y su equipo vieron que los chicos se regulan mejor cuando los adultos aceptan sus emociones y, a la vez, ponen límites a la conducta (Gottman y colaboradores, 1997).',
        'Si hace falta una consecuencia, que sea lógica: relacionada con lo que pasó, avisada antes y sin humillar. Si no juntó los juguetes, hoy no se usan. No sirve el castigo físico: daña el vínculo y, en la Argentina, la ley lo prohíbe.',
        'Esta práctica aplica a la crianza «El “no” amable», que ya practicaste con adultos.',
      ],
      tips: [
        'Con chicos chicos: pocas palabras, voz baja y cuerpo cerca. Ofrece elegir entre dos opciones que sí puedes aceptar.',
        'Con escolares: avisa las reglas y la consecuencia antes, no en medio del enojo.',
        'Con adolescentes: negocia lo que se pueda y explica lo que no. Escucha sus razones antes de decidir.',
        'Si estás muy enojado, posterga la consecuencia: «Ahora estoy enojado. Lo hablamos en un rato».',
      ],
      obstacles: [
        { q: 'Si no le grito, no me hace caso.', a: 'El grito funciona un rato y después hace falta gritar más fuerte. Un límite que se cumple siempre, dicho con calma, enseña más que uno que se grita y no se cumple.' },
        { q: 'Me siento culpable cuando llora por mi «no».', a: 'Que llore no quiere decir que lo dañaste. Está triste o enojado por algo que no pudo tener. Acompañarle mientras lo siente es parte de cuidar.' },
      ],
      cautions: VIOLENCIA + ' Si temes perder el control y lastimar a tu hijo, sal un momento del cuarto, pide ayuda a otro adulto y consulta con un profesional.',
      steps: [
        { title: 'Llegar', instruction: 'Respira lento tres veces. Piensa en un pedido de tu hijo o hija al que sueles decir que no.', durationSec: 30, kind: 'breath' },
        { title: 'Tu razón', instruction: '¿Por qué es que no? Escribe la razón en una frase corta, que tu hijo pueda entender.', durationSec: 45, kind: 'reflection' },
        { title: 'Validar', instruction: 'Escribe cómo nombrarías su emoción. Por ejemplo: «Tienes muchas ganas de seguir jugando. Te entiendo».', durationSec: 45, kind: 'reflection' },
        { title: 'Tu no', instruction: 'Escribe tu no en pocas palabras. Por ejemplo: «Puedes enojarte, y la respuesta sigue siendo no».', durationSec: 45, kind: 'reflection' },
        { title: 'Su edad', instruction: 'Ajusta la frase a su edad. Para un chico chico, menos palabras. Para un adolescente, deja lugar a sus razones.', durationSec: 45, kind: 'reflection' },
        { title: 'La consecuencia', instruction: 'Si hace falta, elige una consecuencia lógica. Que tenga que ver con lo que pasó, sea breve y no humille.', durationSec: 50, kind: 'reflection' },
        { title: 'Ensayo', instruction: 'Di tus frases en voz alta, con voz tranquila. Imagina que protesta y repite tu no sin sumar sermones.', durationSec: 45, kind: 'instruction' },
        { title: 'Después', instruction: 'Piensa cómo vas a reconectar cuando pase el enojo. Un abrazo, un juego, unas palabras.', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'reunion-familiar-20-minutos',
      title: 'Reunión familiar de 20 minutos',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Una charla semanal y corta con toda la familia: agradecer, hablar de un problema por turnos, acordar un plan y terminar con algo lindo.',
      mechanism: 'Hablar de los problemas en un momento fijo y en calma evita que estallen en la mesa. Los turnos y los acuerdos dan a cada uno la sensación de ser escuchado.',
      evidenceLevel: 'preliminar',
      evidence: [GOTTMAN_SILVER_1999, ROSENBERG_2003],
      howItWorks: [
        'Muchas peleas en casa empiezan en el peor momento: con hambre, apuro o cansancio. La reunión familiar lleva esos temas a un rato tranquilo de la semana, con reglas claras.',
        'La idea viene de la tradición de Alfred Adler y Rudolf Dreikurs, y la usan muchos programas de crianza. No hay estudios que la prueben sola, por eso la evidencia es preliminar. Sí se apoya en ideas con más respaldo: empezar suave, hablar de a uno y pedir cosas concretas (Gottman y Silver, 1999; Rosenberg, 2003).',
        'Funciona con chicos desde los 4 o 5 años. Con adolescentes, ayuda que ellos también propongan temas y, a veces, que dirijan la reunión.',
      ],
      tips: [
        'Hagan la reunión siempre el mismo día y a la misma hora. Que sea corta.',
        'Usen un objeto para hablar: quien lo tiene, habla. Los demás escuchan.',
        'Elijan un solo problema por semana. Los demás pueden esperar.',
        'Los adultos también reciben pedidos. Eso hace que los chicos confíen en la reunión.',
      ],
      obstacles: [
        { q: 'Mis hijos se ríen o no quieren participar.', a: 'Empiecen con lo lindo: agradecimientos y un plan divertido para el fin de semana. Si la reunión es corta y amable, con las semanas se suman.' },
        { q: 'Terminamos peleando igual.', a: 'Paren la reunión y retómenla otro día. Si siempre termina en gritos, puede servir la ayuda de un profesional en terapia familiar.' },
      ],
      cautions: VIOLENCIA + ' La reunión familiar no sirve para resolver violencia ni abuso: eso necesita ayuda externa.',
      steps: [
        { title: 'Preparar', instruction: 'Elige un día y una hora fija. Busca un objeto para hablar por turnos, como una pelota o una cuchara.', durationSec: 60, kind: 'instruction' },
        { title: 'Agradecer', instruction: 'Cada uno dice algo que le gustó de otro esta semana. Empieza tú, con algo concreto.', durationSec: 180, kind: 'instruction' },
        { title: 'Un tema', instruction: 'Elijan un solo problema. Descríbanlo como lo vería una cámara, sin culpar a nadie.', durationSec: 120, kind: 'instruction' },
        { title: 'Por turnos', instruction: 'Pasen el objeto. Quien lo tiene dice qué siente y qué necesita. Los demás escuchan sin interrumpir.', durationSec: 300, kind: 'instruction' },
        { title: 'Ideas', instruction: 'Todos proponen ideas, incluso las raras. Nadie las critica todavía. Anótenlas.', durationSec: 180, kind: 'instruction' },
        { title: 'El acuerdo', instruction: 'Elijan una idea para probar una semana. Digan quién hace qué y cuándo lo revisan.', durationSec: 180, kind: 'instruction' },
        { title: 'Cerrar', instruction: 'Terminen con algo lindo: un juego corto, una merienda o elegir juntos un plan.', durationSec: 180, kind: 'instruction' },
      ],
    },
  ],

  meta: {
    'autoempatia-para-quien-cuida': { level: 'iniciacion', approaches: ['humanista', 'cft'], module: 'etapas' },
    'el-no-con-amor-a-un-hijo': { level: 'intermedio', approaches: ['tcc', 'humanista'], module: 'etapas', prerequisites: ['el-no-amable'] },
    'reunion-familiar-20-minutos': { level: 'intermedio', approaches: ['sistemica', 'soluciones'], module: 'relaciones', prerequisites: ['inicio-suave'] },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'criar-sin-gritos-ni-culpa',
      title: 'Criar sin gritos ni culpa: límites, conflictos y cansancio',
      subtitle: 'Cómo poner límites firmes con cariño, qué hacer cuando la casa se vuelve una discusión y cómo reconocer el agotamiento de criar.',
      category: 'Etapas de la vida',
      readingMin: 9,
      keyPoints: [
        'Los límites firmes y el cariño no se oponen: juntos forman la crianza con autoridad.',
        'Se puede validar la emoción y sostener el «no» en la misma frase.',
        'Cuando una discusión se calienta, primero se baja la tensión y después se habla.',
        'El burnout parental aparece cuando las exigencias superan por mucho tiempo a los recursos.',
        'Nada de castigo físico. Si hay violencia, ideas de escapar o miedo de dañar, pide ayuda hoy.',
      ],
      sections: [
        {
          heading: 'Firmes y cálidos a la vez',
          paragraphs: [
            'Diana Baumrind estudió cómo crían las familias y describió tres estilos (Baumrind, 1966). El autoritario manda sin explicar y espera obediencia. El permisivo da afecto, pero casi no pone límites. El estilo «con autoridad» une las dos cosas: reglas claras, razones explicadas y mucho afecto.',
            'Sus estudios y muchos posteriores son de observación: muestran asociaciones, no causas. Aun así, la idea central se repite en la investigación sobre crianza. Los chicos están mejor cuando sienten cariño y, a la vez, saben qué se espera de ellos.',
          ],
        },
        {
          heading: 'Validar y sostener el límite',
          paragraphs: [
            'Poner un límite no exige que tu hijo esté de acuerdo ni que no se enoje. La frase clave es simple: «Puedes enojarte, y la respuesta sigue siendo no». Primero nombras lo que siente. Después sostienes el límite con pocas palabras.',
            'John Gottman y su equipo llamaron «entrenamiento emocional» a esta forma de acompañar: aceptar todas las emociones y poner límites a algunas conductas (Gottman y colaboradores, 1997). La guía «Ser entrenador emocional» lo explica paso a paso.',
            'Si hace falta una consecuencia, conviene que sea lógica: relacionada con lo que pasó, avisada antes, breve y respetuosa. El castigo físico, los gritos y la humillación dañan el vínculo. En la Argentina, el Código Civil y Comercial prohíbe el castigo corporal en cualquiera de sus formas (artículo 647).',
          ],
        },
        {
          heading: 'Cuando la mesa se vuelve una discusión',
          paragraphs: [
            'Con el cuerpo muy activado, nadie escucha bien. Daniel Siegel y Tina Payne Bryson explican que en esos momentos la parte del cerebro que piensa y frena queda en segundo plano (Siegel y Bryson, 2011). Por eso, cuando todo se calienta, lo primero es bajar la tensión, no ganar la discusión.',
            'Ayudan cuatro pasos: pedir una pausa, bajar la voz, hablar por turnos y volver cuando todos estén calmos. Gottman vio en parejas que una pausa de unos veinte minutos ayuda a que el cuerpo se calme antes de seguir hablando (Gottman y Silver, 1999). En familia vale lo mismo.',
            'Una reunión familiar semanal lleva los temas difíciles a un momento tranquilo. Allí se agradece, se habla de un problema por turnos y se prueba un acuerdo durante una semana.',
          ],
        },
        {
          heading: 'Cuando criar agota: el burnout parental',
          paragraphs: [
            'Moïra Mikolajczak e Isabelle Roskam describieron el burnout parental. Tiene cuatro señales: agotamiento en el rol de madre o padre, distancia emocional con los hijos, saturación o pérdida del placer de criar, y un fuerte contraste con quien eras antes como madre o padre (Roskam y colaboradores, 2018).',
            'Su modelo explica que aparece cuando los riesgos superan a los recursos por mucho tiempo (Mikolajczak y Roskam, 2018). Riesgos son, por ejemplo, el perfeccionismo, la falta de ayuda, un hijo con necesidades especiales o problemas de plata. Recursos son el apoyo de otro adulto, el tiempo para ti, la amabilidad contigo y pedir ayuda sin culpa.',
            'Por eso la salida no es «esforzarte más». Es bajar algún riesgo y sumar algún recurso, aunque sea chico. Si cuidas además a un familiar enfermo, mira también la sección para cuidadores.',
          ],
        },
        {
          heading: 'Cuándo consultar',
          paragraphs: [
            'Consulta si los gritos o las peleas son casi diarios y no logras cambiarlos, si sientes que ya no quieres a tus hijos como antes, o si el cansancio te impide hacer tu vida. Un psicólogo o una terapia familiar pueden ayudar.',
            'Pide ayuda hoy si piensas en escapar o desaparecer, si temes lastimar a tus hijos o si hay violencia en casa. Puedes llamar al 135 o al 0800-999-0091. Ante violencia, a la Línea 144 o a la Línea 102. Si hay peligro ya, al 911.',
          ],
        },
      ],
      caveat: {
        title: 'Lo que sabemos y lo que no',
        body: 'Los estudios sobre estilos de crianza son sobre todo de observación: muestran asociaciones, no prueban causas, y los resultados cambian algo según la cultura. El burnout parental es un concepto reciente y bien estudiado, pero no es un diagnóstico oficial: esta app no lo diagnostica. La reunión familiar y las consecuencias lógicas son prácticas muy usadas con poca evidencia propia. Nada de esto reemplaza la ayuda profesional, y ninguna técnica sirve si hay violencia: ahí lo primero es la seguridad.',
      },
      diagram: {
        title: 'Cómo se arma la escalada en casa',
        nodes: ['Cansancio y apuro', 'Un pedido o un «no»', 'Voz que sube de los dos lados', 'Grito, amenaza o castigo', 'Culpa y más cansancio'],
        caption: 'Una pausa, bajar la voz, validar y sostener el límite con calma cortan el ciclo. Cuidar tu cansancio también.',
      },
      related: {
        practices: ['autoempatia-para-quien-cuida', 'el-no-con-amor-a-un-hijo', 'reunion-familiar-20-minutos', 'el-no-amable', 'inicio-suave', 'reparar-tras-discusion', 'cnv-escucha-empatica', 'cnv-autoempatia'],
        articles: ['cnv-cuatro-componentes', 'burnout-seis-areas'],
      },
      references: [BAUMRIND_1966, GOTTMAN_1997, SIEGEL_BRYSON_2011, GOTTMAN_SILVER_1999, MIKOLAJCZAK_ROSKAM_2018, ROSKAM_2018, CCYC_647],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'familia-con-menos-peleas',
      title: 'Familia con menos peleas en 4 semanas',
      subtitle: 'Cuidarte, escuchar, poner límites con amor y hablar en calma',
      description:
        'Primero bajarás tu propio cansancio y tu culpa. Después practicarás escuchar a tus hijos sin juzgar, decir que no sin gritos ni castigos y llevar los temas difíciles a una reunión familiar semanal. Si en tu casa hay violencia, este programa no alcanza: pide ayuda a la Línea 144, a la Línea 102 o al 911.',
      basis: 'Baumrind (1966); Gottman, Katz y Hooven (1997); Mikolajczak y Roskam (2018); Rosenberg (2003).',
      rhythm: '10 minutos, 4 o 5 días por semana, y una reunión familiar de 20 minutos en la última semana.',
      weeks: [
        {
          title: 'Semana 1 · Cuidar a quien cuida',
          focus: 'Cansancio, culpa y autoempatía',
          description: 'Leerás el artículo y practicarás escucharte con amabilidad después de un mal momento con tus hijos.',
          practiceIds: ['autoempatia-para-quien-cuida', 'pausa-autocompasion'],
          articleIds: ['criar-sin-gritos-ni-culpa'],
          journalType: 'carta-compasiva',
        },
        {
          title: 'Semana 2 · Escuchar sin juzgar',
          focus: 'Nombrar la emoción y la necesidad',
          description: 'Practicarás nombrar lo que sientes y escuchar a tus hijos buscando qué sienten y qué necesitan.',
          practiceIds: ['cnv-nombrar-lo-que-siento', 'cnv-escucha-empatica'],
          articleIds: ['cnv-cuatro-componentes'],
          journalType: 'necesidades',
        },
        {
          title: 'Semana 3 · El «no» con amor',
          focus: 'Límites firmes y cálidos',
          description: 'Prepararás un «no» que valida la emoción y sostiene el límite, con una consecuencia lógica si hace falta.',
          practiceIds: ['el-no-amable', 'el-no-con-amor-a-un-hijo'],
          articleIds: [],
          journalType: 'experimento',
        },
        {
          title: 'Semana 4 · Hablar en calma',
          focus: 'Pausa, turnos y reunión familiar',
          description: 'Practicarás empezar suave, reparar después de una pelea y harán la primera reunión familiar.',
          practiceIds: ['inicio-suave', 'reunion-familiar-20-minutos', 'reparar-tras-discusion'],
          articleIds: [],
          journalType: 'conversacion',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-limites-con-amor',
      title: 'Firme y cálido a la vez',
      subtitle: 'Decir que no a un hijo sin gritos ni castigos.',
      slides: [
        { heading: 'Dos cosas juntas', text: 'Los chicos necesitan cariño y límites claros. No hay que elegir entre ser firme y ser cálido.' },
        { heading: 'Con autoridad', text: 'Diana Baumrind llamó así a la crianza con reglas claras, razones explicadas y mucho afecto.' },
        { heading: 'La frase clave', text: '«Puedes enojarte, y la respuesta sigue siendo no.» Nombras lo que siente y sostienes el límite.' },
        { heading: 'Consecuencia lógica', text: 'Si hace falta, que tenga que ver con lo que pasó, sea breve y no humille. Nada de castigo físico.' },
        { heading: 'Pruébalo', text: 'Elige un «no» que repites mucho. Escribe cómo nombrarías su emoción y tu límite en una frase corta.' },
      ],
      related: { practices: ['el-no-con-amor-a-un-hijo', 'el-no-amable'], articles: ['criar-sin-gritos-ni-culpa'] },
      references: [BAUMRIND_1966, GOTTMAN_1997],
    },
    {
      id: 'pildora-cnv-con-hijos',
      title: 'Escuchar el desborde',
      subtitle: 'CNV con chicos y adolescentes.',
      slides: [
        { heading: 'Primero calma', text: 'En pleno desborde nadie aprende. Primero acompaña con voz baja y pocas palabras.' },
        { heading: 'Ponle nombre', text: 'Nombrar la emoción ayuda a calmarla. «Estás furioso porque se rompió tu torre.»' },
        { heading: 'La necesidad', text: 'Detrás del enojo hay algo que necesita: jugar, que lo tengan en cuenta, descansar.' },
        { heading: 'Un pedido claro', text: 'Pide algo concreto y posible. «Necesito que bajes la voz para poder escucharte.»' },
        { heading: 'Pruébalo', text: 'La próxima vez que tu hijo explote, nombra primero lo que siente. Recién después habla del problema.' },
      ],
      related: { practices: ['cnv-escucha-empatica', 'cnv-pedido-concreto'], articles: ['criar-sin-gritos-ni-culpa'] },
      references: [ROSENBERG_2003, SIEGEL_BRYSON_2011],
    },
    {
      id: 'pildora-cuando-la-mesa-se-calienta',
      title: 'Cuando la mesa se calienta',
      subtitle: 'Desescalar una discusión en familia.',
      slides: [
        { heading: 'Cuerpo encendido', text: 'Cuando todos gritan, nadie escucha. El cuerpo está en alerta y cuesta pensar.' },
        { heading: 'Pausa', text: 'Pide una pausa en voz baja. «Paremos veinte minutos y volvemos a hablar.»' },
        { heading: 'Turnos', text: 'Al volver, hablen de a uno. Quien escucha no interrumpe ni se defiende.' },
        { heading: 'Una vez por semana', text: 'Una reunión familiar corta lleva los temas difíciles a un momento tranquilo.' },
        { heading: 'Si hay violencia', text: 'Si hay golpes o amenazas, llama a la Línea 144, a la 102 o al 911.' },
        { heading: 'Pruébalo', text: 'Acuerden hoy una palabra para pedir pausa. Úsenla la próxima vez que suba la voz.' },
      ],
      related: { practices: ['reunion-familiar-20-minutos', 'inicio-suave', 'reparar-tras-discusion'], articles: ['criar-sin-gritos-ni-culpa'] },
      references: [GOTTMAN_SILVER_1999, SIEGEL_BRYSON_2011],
    },
    {
      id: 'pildora-burnout-parental',
      title: 'Cansancio de criar',
      subtitle: 'Señales del burnout parental y qué hacer.',
      slides: [
        { heading: 'No es pereza', text: 'Criar puede agotar. Cuando dura mucho, se llama burnout parental.' },
        { heading: 'Cuatro señales', text: 'Agotamiento, distancia con tus hijos, saturación y sentir que no eres la madre o el padre de antes.' },
        { heading: 'La balanza', text: 'Aparece cuando las exigencias pesan más que los recursos por mucho tiempo.' },
        { heading: 'Qué hacer', text: 'Baja una exigencia y suma un recurso: pedir ayuda, dormir algo más, un rato para ti.' },
        { heading: 'Pide ayuda hoy', text: 'Si piensas en escapar o temes dañar a tus hijos, llama al 135, al 0800-999-0091 o al 911.' },
        { heading: 'Pruébalo', text: 'Escribe una exigencia que puedas soltar esta semana y un recurso que puedas pedir.' },
      ],
      related: { practices: ['autoempatia-para-quien-cuida', 'pausa-autocompasion'], articles: ['criar-sin-gritos-ni-culpa', 'burnout-seis-areas'] },
      references: [MIKOLAJCZAK_ROSKAM_2018, ROSKAM_2018],
    },
  ],

  // ================================================================== guías para familias
  kidGuides: [
    {
      id: 'limites-firmes-con-amor',
      title: 'Límites firmes con amor',
      subtitle: 'Cómo decir que no a tu hijo o hija sin castigos ni culpa, según su edad.',
      readingMin: 6,
      keyPoints: [
        'Los chicos necesitan cariño y límites. No hay que elegir entre los dos.',
        'Nombra lo que siente y sostén el «no»: «Puedes enojarte, y la respuesta sigue siendo no».',
        'Si hace falta una consecuencia, que sea lógica, breve y sin humillar.',
        'Nada de castigo físico: daña el vínculo y en la Argentina está prohibido.',
      ],
      sections: [
        {
          heading: 'Firme y cálido',
          paragraphs: [
            'Diana Baumrind vio tres formas de criar (Baumrind, 1966). Hay padres que mandan sin explicar. Hay otros que dan cariño, pero casi no ponen reglas. Y hay quienes hacen las dos cosas: ponen reglas claras, explican por qué y dan mucho afecto. A esta forma la llamó crianza con autoridad.',
            'Poner un límite no es dejar de querer. Es decirle a tu hijo: «Yo me ocupo. Estás a salvo».',
          ],
        },
        {
          heading: 'Validar y sostener',
          paragraphs: [
            'Tu hijo puede enojarse con tu «no». Es lógico. Primero nombra lo que siente: «Tienes ganas de seguir en la plaza». Después di el límite en pocas palabras: «Y ya nos vamos».',
            'No hace falta que esté de acuerdo. Tampoco hace falta que deje de llorar para que el límite valga. Si quieres repasar cómo validar, mira la guía «Validar».',
          ],
        },
        {
          heading: 'Consecuencias lógicas',
          paragraphs: [
            'Una consecuencia lógica tiene que ver con lo que pasó. Si tira la comida, la comida termina. Si no guarda la bici, mañana no la usa. Conviene avisarla antes, que sea corta y que no humille.',
            'El castigo físico no enseña: asusta y daña el vínculo. En la Argentina, el Código Civil y Comercial lo prohíbe (artículo 647). Los gritos y las amenazas tampoco ayudan. Si te pasó, puedes reparar: «Te grité. No estuvo bien. Lo siento».',
          ],
        },
        {
          heading: 'Según la edad',
          paragraphs: [
            'Hasta los 5 años: pocas palabras, voz baja y tu cuerpo cerca. Da dos opciones que sí aceptas: «¿Te pones el saco rojo o el azul?». Si se desborda, mira la guía «Berrinches y desbordes».',
            'De 6 a 12 años: acuerden las reglas antes, en calma. Escríbanlas si ayuda. Cuando no se cumplen, aplica la consecuencia sin sermón.',
            'Adolescentes: escucha sus razones antes de decidir. Negocia lo que se puede, como horarios o salidas. Lo que no se negocia, como su seguridad, explícalo con claridad. La guía «Adolescencia» tiene más ideas.',
          ],
        },
      ],
      phrases: [
        '«Puedes enojarte, y la respuesta sigue siendo no»',
        '«Entiendo que quieras más. Hoy ya no»',
        '«¿Lo guardas tú o te ayudo yo?»',
        '«Te grité. No estuvo bien. Lo siento»',
      ],
      caveat: {
        title: 'Si hay violencia',
        body: 'Si en tu casa hay golpes o amenazas, o si temes perder el control con tu hijo, pide ayuda. Llama a la Línea 102 si un chico está en riesgo, a la Línea 144 si hay violencia de género o al 911 si hay peligro ya.',
      },
      activities: ['elegir-entre-dos', 'esperar-mi-turno', 'pedir-y-decir-que-no', 'semaforo'],
      references: [BAUMRIND_1966, GOTTMAN_1997, CCYC_647],
    },
    {
      id: 'cnv-con-hijos',
      title: 'Comunicación no violenta con chicos y adolescentes',
      subtitle: 'Escuchar un desborde sin juzgar, nombrar la emoción, encontrar la necesidad y pedir algo concreto.',
      readingMin: 5,
      keyPoints: [
        'Detrás de un grito o un portazo hay una emoción y una necesidad.',
        'Nombrar la emoción ayuda a calmarla.',
        'Un pedido concreto funciona mejor que un sermón.',
        'Tus propias emociones y necesidades también cuentan.',
      ],
      sections: [
        {
          heading: 'Escuchar sin juzgar',
          paragraphs: [
            'Marshall Rosenberg propuso escuchar lo que el otro siente y necesita, en lugar de juzgar lo que hace (Rosenberg, 2003). Con un chico desbordado, eso cambia todo. «Eres un maleducado» cierra la charla. «Estás muy enojado» la abre.',
            'Esta guía no repite «Berrinches y desbordes» ni «Validar». Suma un paso más: buscar la necesidad que está debajo y pedir algo claro.',
          ],
        },
        {
          heading: 'Ponle nombre',
          paragraphs: [
            'Daniel Siegel y Tina Payne Bryson lo llaman «nómbralo para calmarlo» (Siegel y Bryson, 2011). Cuando un chico escucha el nombre de lo que siente, se calma un poco. Con los más chicos, usa palabras simples: enojo, miedo, tristeza. Con los adolescentes, pregunta: «¿Es bronca o es más bien tristeza?».',
            'Gottman y su equipo vieron que los padres que ayudan a nombrar las emociones tienen hijos que se regulan mejor (Gottman y colaboradores, 1996).',
          ],
        },
        {
          heading: 'La necesidad detrás',
          paragraphs: [
            'Un chico que pega a su hermano puede necesitar espacio. Una adolescente que da un portazo puede necesitar que la respeten. La conducta no siempre está bien. Pero la necesidad siempre tiene sentido.',
            'Prueba así: «¿Estás furioso porque necesitas que respeten tus cosas?». Si no aciertas, no pasa nada. Te va a corregir, y eso ya es hablar.',
          ],
        },
        {
          heading: 'Pedidos concretos',
          paragraphs: [
            'Un pedido claro dice qué hacer, ahora y en positivo. «Pórtate bien» es muy vago. «Habla más bajo, así te escucho» se entiende.',
            'También puedes decir lo tuyo: «Cuando hay gritos en la mesa, me canso. Necesito calma. ¿Podemos hablar de a uno?». Así tu hijo aprende el mismo idioma.',
          ],
        },
      ],
      phrases: [
        '«Estás muy enojado. Te escucho»',
        '«¿Estás furioso porque necesitas que respeten tus cosas?»',
        '«Habla más bajo, así te puedo escuchar»',
        '«Yo también estoy cansado. Necesito calma para seguir»',
      ],
      caveat: {
        title: 'Cuándo consultar',
        body: 'Si los desbordes son muy largos, muy violentos o casi diarios, o si tu hijo se lastima o lastima a otros, consulta. La guía «Cuándo consultar» te ayuda a decidir. Si hay peligro, llama al 911.',
      },
      activities: ['cuento-siento-pido', 'nombrar-lo-que-siente', 'como-me-siento', 'pedir-ayuda'],
      references: [ROSENBERG_2003, SIEGEL_BRYSON_2011, GOTTMAN_1996],
    },
    {
      id: 'cuando-la-mesa-se-vuelve-discusion',
      title: 'Cuando la mesa se vuelve una discusión',
      subtitle: 'Cómo bajar la tensión en familia: pausa, turnos, voz baja y una reunión por semana.',
      readingMin: 5,
      keyPoints: [
        'Cuando todos gritan, nadie escucha. Primero se calma, después se habla.',
        'Pedir una pausa no es huir: es volver mejor.',
        'Hablar por turnos y bajar la voz cambia el tono de la charla.',
        'Una reunión familiar semanal lleva los temas difíciles a un momento tranquilo.',
      ],
      sections: [
        {
          heading: 'Por qué se calienta',
          paragraphs: [
            'Muchas peleas empiezan con hambre, apuro o cansancio. Uno sube la voz, el otro también. En pocos segundos el cuerpo se pone en alerta y cuesta pensar (Siegel y Bryson, 2011).',
            'En ese punto, los argumentos no llegan. Lo que sirve es bajar la tensión.',
          ],
        },
        {
          heading: 'Pausa y voz baja',
          paragraphs: [
            'Acuerden una palabra para pedir pausa, como «tiempo» o «paro». Quien la dice, explica cuándo vuelve: «Paremos veinte minutos». Gottman vio en parejas que el cuerpo necesita unos veinte minutos para calmarse (Gottman y Silver, 1999).',
            'Durante la pausa, no se sigue la pelea por mensajes. Cada uno hace algo que lo calme. Si eres el adulto, baja tu voz primero. Los chicos suelen copiar el tono.',
          ],
        },
        {
          heading: 'Turnos y regreso',
          paragraphs: [
            'Al volver, hablen de a uno. Pueden usar un objeto: quien lo tiene, habla. Quien escucha repite lo que entendió antes de responder.',
            'Si alguien se pasó de la raya, también se repara. Pedir perdón delante de los hijos les enseña mucho.',
          ],
        },
        {
          heading: 'La reunión familiar',
          paragraphs: [
            'Una vez por semana, veinte minutos. Empiecen agradeciendo algo. Elijan un solo problema y hablen por turnos. Busquen ideas, elijan una para probar y terminen con algo lindo.',
            'Funciona desde los 4 o 5 años. Con adolescentes, ayuda que ellos también propongan temas.',
          ],
        },
      ],
      phrases: [
        '«Paremos veinte minutos y volvemos a hablar»',
        '«Ahora habla tu hermana. Después te toca a ti»',
        '«Me pasé con el grito. Perdón. ¿Lo hablamos de nuevo?»',
        '«Esto lo llevamos a la reunión del domingo»',
      ],
      caveat: {
        title: 'Si hay violencia',
        body: 'Estas ideas son para discusiones comunes. Si hay golpes, amenazas o miedo en casa, no alcanza con hablar mejor. Llama a la Línea 144 si hay violencia de género, a la Línea 102 si un chico está en riesgo o al 911 si hay peligro ya.',
      },
      activities: ['tortuga', 'calma-compartida', 'esperar-mi-turno', 'pedir-perdon-y-reparar'],
      references: [SIEGEL_BRYSON_2011, GOTTMAN_SILVER_1999],
    },
    {
      id: 'agotamiento-de-criar',
      title: 'Burnout parental: cuando criar agota',
      subtitle: 'Las señales del agotamiento de criar, por qué aparece y qué hacer.',
      readingMin: 6,
      keyPoints: [
        'El burnout parental es un agotamiento propio del rol de madre o padre.',
        'Tiene cuatro señales: agotamiento, distancia con los hijos, saturación y contraste con quien eras.',
        'Aparece cuando las exigencias pesan más que los recursos por mucho tiempo.',
        'Si piensas en escapar o temes dañar a tus hijos, pide ayuda hoy.',
      ],
      sections: [
        {
          heading: 'Qué es',
          paragraphs: [
            'Criar cansa. Pero a veces el cansancio se vuelve otra cosa. Moïra Mikolajczak e Isabelle Roskam lo llamaron burnout parental (Roskam y colaboradores, 2018). No es falta de amor. Es un agotamiento que se arma de a poco, cuando la carga dura mucho.',
          ],
        },
        {
          heading: 'Cuatro señales',
          paragraphs: [
            'Agotamiento: te levantas cansado y criar te deja sin energía. Distancia: haces lo justo y te cuesta conectar con tus hijos. Saturación: ya no disfrutas y sientes que no das más. Contraste: no te reconoces como la madre o el padre que eras.',
            'Una sola señal en una mala semana es común. Si varias duran semanas, conviene tomarlo en serio.',
          ],
        },
        {
          heading: 'La balanza',
          paragraphs: [
            'Mikolajczak y Roskam lo explican como una balanza (Mikolajczak y Roskam, 2018). De un lado están los riesgos: querer hacerlo todo perfecto, no tener ayuda, un hijo con más necesidades o problemas de plata. Del otro lado están los recursos: otro adulto que ayude, tiempo para ti, tratarte con amabilidad.',
            'Cuando los riesgos pesan más por mucho tiempo, aparece el burnout. Por eso la salida no es esforzarte más. Es quitar peso de un lado y sumar del otro.',
          ],
        },
        {
          heading: 'Qué hacer',
          paragraphs: [
            'Suelta una exigencia: una comida simple, una tarea que espera, una actividad menos. Suma un recurso: pide ayuda concreta, duerme algo más, busca un rato solo. Habla con alguien de confianza.',
            'Si además cuidas a un familiar enfermo, mira la sección para cuidadores. Si la tristeza llega a todo, no sólo a la crianza, consulta: puede ser una depresión.',
          ],
        },
      ],
      phrases: [
        '«Hoy no doy más. Necesito que te ocupes de la cena»',
        '«Estoy haciendo lo que puedo, y eso alcanza por hoy»',
        '«Necesito una hora para mí este sábado. ¿Me ayudas?»',
      ],
      caveat: {
        title: 'Pide ayuda hoy',
        body: 'Si piensas en escapar, en desaparecer o tienes miedo de lastimar a tus hijos, no estás solo y tiene salida. Llama al 135 (resto del país 0800-345-1435) o al 0800-999-0091. Si hay peligro ya, llama al 911 o usa el botón Ayuda de la app.',
      },
      activities: ['calma-compartida', 'juego-en-el-piso', 'respirar-tres-minutos', 'lo-mejor-del-dia'],
      references: [MIKOLAJCZAK_ROSKAM_2018, ROSKAM_2018],
    },
  ],

  // ================================================================== glosario
  glossary: [
    {
      id: 'crianza-con-autoridad',
      term: 'Crianza con autoridad',
      definition: 'Forma de criar que une reglas claras y explicadas con mucho afecto. La describió Diana Baumrind. No es mandar sin explicar ni dejar hacer todo.',
      articleId: 'criar-sin-gritos-ni-culpa',
      practiceId: 'el-no-con-amor-a-un-hijo',
    },
    {
      id: 'consecuencia-logica',
      term: 'Consecuencia lógica',
      definition: 'Lo que pasa después de una conducta y tiene que ver con ella. Se avisa antes, es breve y no humilla. Si no guarda la bici, mañana no la usa.',
      practiceId: 'el-no-con-amor-a-un-hijo',
    },
    {
      id: 'burnout-parental',
      term: 'Burnout parental',
      definition: 'Agotamiento propio del rol de madre o padre. Sus señales son cansancio, distancia con los hijos, saturación y no reconocerse como antes.',
      articleId: 'criar-sin-gritos-ni-culpa',
      practiceId: 'autoempatia-para-quien-cuida',
    },
    {
      id: 'reunion-familiar',
      term: 'Reunión familiar',
      definition: 'Charla breve y semanal de toda la familia. Se agradece, se habla de un problema por turnos y se acuerda algo para probar.',
      practiceId: 'reunion-familiar-20-minutos',
    },
  ],
};
