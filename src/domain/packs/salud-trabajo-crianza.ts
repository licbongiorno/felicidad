import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Salud, trabajo y crianza»:
 *  1. Burnout (Maslach y Leiter): agotamiento, cinismo y baja eficacia; seis áreas de ajuste
 *     laboral; límites, desconexión psicológica (Sonnentag) y rediseño del puesto (job crafting).
 *  2. Dolor crónico desde la ACT: aceptación, defusión, valores y ritmo de actividad (pacing).
 *  3. Neurodiversidad en adultos (TDAH y autismo): psicoeducación con enfoque de afirmación,
 *     sin diagnosticar y sugiriendo evaluación profesional.
 *  4. Crianza ampliada: pantallas, hermanos, hablar de la muerte y chicos neurodivergentes.
 *
 * Ninguna práctica reemplaza la atención médica ni psicológica. Las de dolor llevan
 * precauciones porque el dolor nuevo o que cambia siempre debe evaluarlo un médico.
 */

// ------------------------------------------------------------ referencias
const MASLACH_2016: Reference = {
  citation: 'Maslach, C., & Leiter, M. P. (2016). Understanding the burnout experience: Recent research and its implications for psychiatry. World Psychiatry, 15(2), 103–111.',
  doi: '10.1002/wps.20311',
};
const MASLACH_2001: Reference = {
  citation: 'Maslach, C., Schaufeli, W. B., & Leiter, M. P. (2001). Job burnout. Annual Review of Psychology, 52, 397–422.',
  doi: '10.1146/annurev.psych.52.1.397',
};
const LEITER_2004: Reference = {
  citation:
    'Leiter, M. P., & Maslach, C. (2004). Areas of worklife: A structured approach to organizational predictors of job burnout. En P. L. Perrewé & D. C. Ganster (Eds.), Research in occupational stress and well-being (Vol. 3, pp. 91–134). Elsevier.',
};
const OMS_2019: Reference = {
  citation: 'Organización Mundial de la Salud. (2019). Burn-out an «occupational phenomenon»: International Classification of Diseases. OMS.',
  note: 'La CIE-11 lo define como un fenómeno laboral, no como una enfermedad.',
};
const PANAGIOTI_2017: Reference = {
  citation:
    'Panagioti, M., Panagopoulou, E., Bower, P., et al. (2017). Controlled interventions to reduce burnout in physicians: A systematic review and meta-analysis. JAMA Internal Medicine, 177(2), 195–205.',
  doi: '10.1001/jamainternmed.2016.7674',
};
const SONNENTAG_2007: Reference = {
  citation:
    'Sonnentag, S., & Fritz, C. (2007). The Recovery Experience Questionnaire: Development and validation of a measure for assessing recuperation and unwinding from work. Journal of Occupational Health Psychology, 12(3), 204–221.',
  doi: '10.1037/1076-8998.12.3.204',
};
const SONNENTAG_2012: Reference = {
  citation:
    'Sonnentag, S. (2012). Psychological detachment from work during leisure time: The benefits of mentally disengaging from work. Current Directions in Psychological Science, 21(2), 114–118.',
  doi: '10.1177/0963721411434979',
};
const WRZESNIEWSKI_2001: Reference = {
  citation: 'Wrzesniewski, A., & Dutton, J. E. (2001). Crafting a job: Revisioning employees as active crafters of their work. Academy of Management Review, 26(2), 179–201.',
  doi: '10.5465/amr.2001.4378011',
};
const TIMS_2012: Reference = {
  citation: 'Tims, M., Bakker, A. B., & Derks, D. (2012). Development and validation of the job crafting scale. Journal of Vocational Behavior, 80(1), 173–186.',
  doi: '10.1016/j.jvb.2011.05.009',
};
const HUGHES_2017: Reference = {
  citation:
    'Hughes, L. S., Clark, J., Colclough, J. A., Dale, E., & McMillan, D. (2017). Acceptance and commitment therapy (ACT) for chronic pain: A systematic review and meta-analyses. The Clinical Journal of Pain, 33(6), 552–568.',
  doi: '10.1097/AJP.0000000000000425',
};
const MCCRACKEN_2014: Reference = {
  citation:
    'McCracken, L. M., & Vowles, K. E. (2014). Acceptance and commitment therapy and mindfulness for chronic pain: Model, process, and progress. American Psychologist, 69(2), 178–187.',
  doi: '10.1037/a0035623',
};
const MCCRACKEN_2004: Reference = {
  citation: 'McCracken, L. M., Vowles, K. E., & Eccleston, C. (2004). Acceptance of chronic pain: Component analysis and a revised assessment method. Pain, 107(1–2), 159–166.',
  doi: '10.1016/j.pain.2003.10.012',
};
const VEEHOF_2016: Reference = {
  citation:
    'Veehof, M. M., Trompetter, H. R., Bohlmeijer, E. T., & Schreurs, K. M. G. (2016). Acceptance- and mindfulness-based interventions for the treatment of chronic pain: A meta-analytic review. Cognitive Behaviour Therapy, 45(1), 5–31.',
  doi: '10.1080/16506073.2015.1098724',
};
const VLAEYEN_2000: Reference = {
  citation: 'Vlaeyen, J. W. S., & Linton, S. J. (2000). Fear-avoidance and its consequences in chronic musculoskeletal pain: A state of the art. Pain, 85(3), 317–332.',
};
const NIELSON_2013: Reference = {
  citation:
    'Nielson, W. R., Jensen, M. P., Karsdorp, P. A., & Vlaeyen, J. W. S. (2013). Activity pacing in chronic pain: Concepts, evidence, and future directions. The Clinical Journal of Pain, 29(5), 461–468.',
};
const ANDREWS_2012: Reference = {
  citation:
    'Andrews, N. E., Strong, J., & Meredith, P. J. (2012). Activity pacing, avoidance, endurance, and associations with patient functioning in chronic pain: A systematic review and meta-analysis. Archives of Physical Medicine and Rehabilitation, 93(11), 2109–2121.',
  doi: '10.1016/j.apmr.2012.05.029',
};
const MOSELEY_2015: Reference = {
  citation: 'Moseley, G. L., & Butler, D. S. (2015). Fifteen years of explaining pain: The past, present, and future. The Journal of Pain, 16(9), 807–813.',
  doi: '10.1016/j.jpain.2015.05.005',
};
const BARKLEY_2012: Reference = { citation: 'Barkley, R. A. (2012). Executive functions: What they are, how they work, and why they evolved. Guilford Press.' };
const SAFREN_2010: Reference = {
  citation:
    'Safren, S. A., Sprich, S., Mimiaga, M. J., et al. (2010). Cognitive behavioral therapy vs relaxation with educational support for medication-treated adults with ADHD and persistent symptoms: A randomized controlled trial. JAMA, 304(8), 875–880.',
  doi: '10.1001/jama.2010.1192',
};
const KNOUSE_2017: Reference = {
  citation: 'Knouse, L. E., Teller, J., & Brooks, M. A. (2017). Meta-analysis of cognitive–behavioral treatments for adult ADHD. Journal of Consulting and Clinical Psychology, 85(7), 737–750.',
  doi: '10.1037/ccp0000216',
};
const FARAONE_2021: Reference = {
  citation:
    'Faraone, S. V., Banaschewski, T., Coghill, D., et al. (2021). The World Federation of ADHD International Consensus Statement: 208 evidence-based conclusions about the disorder. Neuroscience & Biobehavioral Reviews, 128, 789–818.',
  doi: '10.1016/j.neubiorev.2021.01.022',
};
const PELLICANO_2022: Reference = {
  citation:
    'Pellicano, E., & den Houting, J. (2022). Annual Research Review: Shifting from «normal science» to neurodiversity in autism science. Journal of Child Psychology and Psychiatry, 63(4), 381–396.',
  doi: '10.1111/jcpp.13534',
};
const DUNN_1997: Reference = {
  citation:
    'Dunn, W. (1997). The impact of sensory processing abilities on the daily lives of young children and their families: A conceptual model. Infants & Young Children, 9(4), 23–35.',
};
const RAYMAKER_2020: Reference = {
  citation:
    'Raymaker, D. M., Teo, A. R., Steckler, N. A., et al. (2020). «Having all of your internal resources exhausted beyond measure and being left with no clean-up crew»: Defining autistic burnout. Autism in Adulthood, 2(2), 132–143.',
  doi: '10.1089/aut.2019.0079',
};
const HULL_2017: Reference = {
  citation:
    'Hull, L., Petrides, K. V., Allison, C., et al. (2017). «Putting on my best normal»: Social camouflaging in adults with autism spectrum conditions. Journal of Autism and Developmental Disorders, 47(8), 2519–2534.',
  doi: '10.1007/s10803-017-3166-5',
};

// Crianza
const AAP_2016: Reference = {
  citation: 'American Academy of Pediatrics, Council on Communications and Media. (2016). Media and young minds. Pediatrics, 138(5), e20162591.',
  doi: '10.1542/peds.2016-2591',
};
const OMS_2019_NINOS: Reference = {
  citation: 'Organización Mundial de la Salud. (2019). Guidelines on physical activity, sedentary behaviour and sleep for children under 5 years of age. OMS.',
};
const ORBEN_2019: Reference = {
  citation: 'Orben, A., & Przybylski, A. K. (2019). The association between adolescent well-being and digital technology use. Nature Human Behaviour, 3(2), 173–182.',
  doi: '10.1038/s41562-018-0506-1',
};
const KRAMER_2010: Reference = {
  citation:
    'Kramer, L. (2010). The essential ingredients of successful sibling relationships: An emerging framework for advancing theory and practice. Child Development Perspectives, 4(2), 80–86.',
  doi: '10.1111/j.1750-8606.2010.00122.x',
};
const FABER_1987: Reference = { citation: 'Faber, A., & Mazlish, E. (1987). Siblings without rivalry: How to help your children live together so you can live too. Norton.' };
const SPEECE_1984: Reference = {
  citation: 'Speece, M. W., & Brent, S. B. (1984). Children’s understanding of death: A review of three components of a death concept. Child Development, 55(5), 1671–1686.',
};
const DYREGROV_2008: Reference = { citation: 'Dyregrov, A. (2008). Grief in children: A handbook for adults (2.ª ed.). Jessica Kingsley.' };
const CHRONIS_2006: Reference = {
  citation:
    'Chronis, A. M., Jones, H. A., & Raggi, V. L. (2006). Evidence-based psychosocial treatments for children and adolescents with attention-deficit/hyperactivity disorder. Clinical Psychology Review, 26(4), 486–502.',
  doi: '10.1016/j.cpr.2006.01.002',
};

export const SALUD_TRABAJO_CRIANZA_PACK: ContentPack = {
  id: 'salud-trabajo-crianza',

  // ================================================================== prácticas
  practices: [
    // ------------------------------------------------------------ burnout
    {
      id: 'mapa-seis-areas',
      title: 'Mapa del desgaste: las seis áreas',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Revisar las seis áreas del trabajo que más pesan en el burnout y elegir un solo punto donde empezar.',
      mechanism: 'Ver de dónde viene el desgaste lo saca del terreno de la culpa personal y muestra qué se puede cambiar, pedir o soltar.',
      evidenceLevel: 'moderada',
      evidence: [MASLACH_2016, LEITER_2004, MASLACH_2001],
      howItWorks: [
        'Christina Maslach y Michael Leiter estudiaron el burnout durante décadas. Lo describen con tres caras: agotamiento, distancia o cinismo hacia el trabajo y sensación de que lo que haces no sirve.',
        'Encontraron que el burnout crece cuando hay un mal ajuste entre la persona y su trabajo en seis áreas: carga, control, reconocimiento, compañerismo, justicia y valores (Leiter y Maslach, 2004). No es una falla de carácter: es una señal de que algo en ese ajuste no funciona.',
        'Mirar las seis áreas por separado ayuda a ver dónde está el mayor desajuste. Algunas cosas dependen de ti, otras se pueden pedir y otras no cambian. Saber cuál es cuál ahorra energía.',
      ],
      tips: [
        'Hazlo en un momento tranquilo, no justo después de un mal día.',
        'Puntúa sin pensar mucho. La primera respuesta suele ser la más honesta.',
        'Elige una sola área para trabajar. Querer arreglar todo a la vez agota más.',
        'Si varias áreas están muy mal, conversa con un profesional de salud o con tu médico.',
      ],
      obstacles: [
        { q: 'Todo me parece mal.', a: 'Pasa mucho cuando el agotamiento es alto. Busca la que está un poco peor que las otras, o la que más te pesa hoy.' },
        { q: 'Nada de esto depende de mí.', a: 'A veces es así. Aun entonces se puede pedir algo, poner un límite pequeño o cuidar más la recuperación fuera del trabajo.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Siéntate y respira despacio tres veces. Piensa en tu trabajo de las últimas semanas, sin juzgar.', durationSec: 40, kind: 'breath' },
        { title: 'Carga', instruction: '¿Cuánto trabajo tienes para el tiempo y la energía que hay? Ponle un número del cero al diez.', durationSec: 40, kind: 'reflection' },
        { title: 'Control', instruction: '¿Puedes decidir cómo y cuándo haces tus tareas? Ponle un número del cero al diez.', durationSec: 40, kind: 'reflection' },
        { title: 'Reconocimiento', instruction: '¿Sientes que tu esfuerzo se ve y se valora? Ponle un número del cero al diez.', durationSec: 40, kind: 'reflection' },
        { title: 'Compañerismo', instruction: '¿Tienes gente con quien contar en el trabajo? Ponle un número del cero al diez.', durationSec: 40, kind: 'reflection' },
        { title: 'Justicia', instruction: '¿Sientes que las reglas y las decisiones son justas? Ponle un número del cero al diez.', durationSec: 40, kind: 'reflection' },
        { title: 'Valores', instruction: '¿Lo que haces va con lo que te importa? Ponle un número del cero al diez.', durationSec: 40, kind: 'reflection' },
        { title: 'Elegir una', instruction: 'Mira las seis notas. Elige el área que más te pesa y que tiene algo de margen para moverse.', durationSec: 50, kind: 'reflection' },
        { title: 'Un paso', instruction: 'Piensa un paso pequeño para esa área. Puede ser pedir algo, decir que no o cuidar tu descanso.', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira y dite: «Esto es una señal, no un fracaso». Anota el paso en un lugar visible.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'cierre-de-jornada',
      title: 'Cierre de jornada: soltar el trabajo',
      family: 'attentional',
      skills: ['attention', 'resilience'],
      summary: 'Un ritual breve al terminar de trabajar para cerrar pendientes en papel y pasar a la vida de afuera.',
      mechanism: 'Dejar los pendientes escritos y marcar un final claro facilita la desconexión psicológica, que es clave para recuperarse.',
      evidenceLevel: 'moderada',
      evidence: [SONNENTAG_2007, SONNENTAG_2012],
      howItWorks: [
        'Sabine Sonnentag estudió cómo se recupera la gente del trabajo. Encontró que no basta con salir de la oficina: hace falta dejar de pensar en el trabajo. A eso lo llamó «desconexión psicológica».',
        'Quienes desconectan mejor en su tiempo libre tienen menos agotamiento y más energía al día siguiente (Sonnentag, 2012). Las tareas sin terminar tienden a volver a la mente. Anotarlas con un plan ayuda a que la mente las suelte.',
        'Un ritual fijo funciona como una puerta. Con la repetición, el cuerpo aprende que después de ese gesto empieza otra parte del día.',
      ],
      tips: [
        'Hazlo siempre a la misma hora y en el mismo lugar, aunque trabajes desde casa.',
        'Usa un gesto físico de cierre: apagar la pantalla, guardar la notebook, cambiarte de ropa.',
        'Si un pensamiento de trabajo vuelve a la noche, recuerda que ya está anotado.',
        'Suma algo que te absorba después: caminar, cocinar, jugar o charlar.',
      ],
      obstacles: [
        { q: 'Mi trabajo no tiene un final claro.', a: 'Por eso el ritual ayuda: el final lo pones tú. Elige una hora y respétala casi siempre.' },
        { q: 'Me siguen llegando mensajes.', a: 'Silencia las notificaciones del trabajo después del cierre. Si no puedes, acuerda una franja corta para mirarlas.' },
      ],
      steps: [
        { title: 'Parar', instruction: 'Deja lo que estás haciendo. Respira hondo dos veces y apoya los pies en el piso.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que hiciste', instruction: 'Anota tres cosas que hiciste hoy, por pequeñas que sean.', durationSec: 60, kind: 'instruction' },
        { title: 'Lo que queda', instruction: 'Anota lo que quedó pendiente. Al lado de cada cosa, escribe cuándo la vas a retomar.', durationSec: 75, kind: 'instruction' },
        { title: 'Primera tarea', instruction: 'Marca la primera tarea de mañana. Así no tienes que pensarla esta noche.', durationSec: 30, kind: 'instruction' },
        { title: 'Cerrar la puerta', instruction: 'Haz tu gesto de cierre. Apaga, guarda o cambia de lugar. Dite: «Por hoy, terminé».', durationSec: 30, kind: 'instruction' },
        { title: 'Pasar al cuerpo', instruction: 'Estira los brazos y mira a tu alrededor. Nombra algo que vas a disfrutar esta tarde.', durationSec: 40, kind: 'breath' },
      ],
    },
    {
      id: 'redisenar-mi-trabajo',
      title: 'Rediseñar mi trabajo (job crafting)',
      family: 'constructive',
      skills: ['resilience'],
      summary: 'Ajustar un poco tus tareas, tus vínculos y la forma de mirar tu trabajo para que se parezca más a lo que te importa.',
      mechanism: 'Pequeños cambios que eliges tú aumentan la sensación de control y de sentido, dos protectores frente al burnout.',
      evidenceLevel: 'moderada',
      evidence: [WRZESNIEWSKI_2001, TIMS_2012, MASLACH_2016],
      howItWorks: [
        'Amy Wrzesniewski y Jane Dutton observaron que muchas personas, sin cambiar de puesto, moldean su trabajo. Cambian qué tareas hacen y cómo, con quién se relacionan y qué sentido le dan. Lo llamaron «job crafting», rediseño del puesto.',
        'Hay tres caminos. Las tareas: sumar, quitar o hacer distinto algo. Los vínculos: buscar a personas que te nutren y cuidar el trato. La mirada: recordar para qué sirve lo que haces. Los estudios lo asocian con más compromiso y menos agotamiento (Tims y colaboradores, 2012).',
        'No es pedirte más esfuerzo. Es usar el margen que tengas para que el trabajo te gaste menos y te dé un poco más.',
      ],
      tips: [
        'Empieza por un cambio que puedas hacer sin pedir permiso.',
        'Si necesitas pedir algo, prepáralo con la práctica DEAR MAN.',
        'Revisa en dos semanas si el cambio ayudó. Si no, prueba otro.',
      ],
      obstacles: [
        { q: 'Mi trabajo no me deja ningún margen.', a: 'Prueba con la mirada o con los vínculos, que suelen depender más de ti. Si de verdad no hay margen, eso también es información valiosa.' },
        { q: 'Esto suena a aguantar más.', a: 'No lo es. Si el problema es la carga o la injusticia, el paso es poner límites o pedir cambios, no adaptarte a todo.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio y piensa en un día típico de trabajo, de principio a fin.', durationSec: 40, kind: 'breath' },
        { title: 'Lo que te gasta', instruction: '¿Qué tarea te deja más vacío o vacía? Nómbrala sin juzgarte.', durationSec: 50, kind: 'reflection' },
        { title: 'Lo que te da', instruction: '¿Qué parte del trabajo te da algo de energía o de orgullo? Nómbrala.', durationSec: 50, kind: 'reflection' },
        { title: 'Tareas', instruction: '¿Puedes hacer un poco más de lo que te da, o hacer distinto lo que te gasta? Piensa un cambio.', durationSec: 60, kind: 'reflection' },
        { title: 'Vínculos', instruction: '¿Con quién te hace bien trabajar? Piensa cómo pasar un rato más con esa persona.', durationSec: 50, kind: 'reflection' },
        { title: 'Mirada', instruction: 'Pregúntate: ¿a quién ayuda lo que hago? Busca una respuesta concreta, aunque sea pequeña.', durationSec: 50, kind: 'reflection' },
        { title: 'Elegir', instruction: 'Elige un solo cambio de los tres caminos. Decide cuándo lo vas a probar esta semana.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira y nota que algo de tu trabajo también lo diseñas tú.', durationSec: 25, kind: 'breath' },
      ],
    },

    // ------------------------------------------------------------ dolor crónico (ACT)
    {
      id: 'hacer-lugar-al-dolor',
      title: 'Hacer lugar al dolor',
      family: 'deconstructive',
      skills: ['attention', 'resilience'],
      summary: 'Observar el dolor con curiosidad, separar la sensación de los pensamientos sobre ella y dejar de pelear un rato.',
      mechanism: 'La lucha contra el dolor suma tensión y sufrimiento. Observar y nombrar los pensamientos reduce esa capa extra, aunque la sensación siga.',
      evidenceLevel: 'moderada',
      evidence: [MCCRACKEN_2014, HUGHES_2017, VEEHOF_2016],
      cautions:
        'Esta práctica no reemplaza la atención médica. Si el dolor es nuevo, cambió de forma, es muy intenso o viene con fiebre, pérdida de fuerza u otros síntomas, consulta a tu médico antes. Si al observarlo el malestar sube mucho, abre los ojos y vuelve a algo neutro.',
      howItWorks: [
        'En el dolor crónico hay dos capas. Una es la sensación. La otra es la lucha: tensar el cuerpo, pensar «esto no se va a terminar nunca», enojarse con el dolor. Esa segunda capa suma sufrimiento.',
        'La terapia de aceptación y compromiso (ACT) propone hacer lugar a la sensación en vez de pelear. También enseña a ver los pensamientos sobre el dolor como pensamientos, no como hechos. A eso se le llama defusión.',
        'Los metaanálisis muestran que la ACT mejora el funcionamiento diario, la ansiedad y el ánimo de las personas con dolor crónico. No siempre baja la intensidad del dolor (Hughes y colaboradores, 2017). La meta es que el dolor ocupe menos lugar en tu vida.',
      ],
      tips: [
        'Empieza con un dolor leve o moderado, no en tu peor día.',
        'Aceptar no es rendirse ni dejar el tratamiento. Es dejar de gastar energía en una pelea que no se gana.',
        'Si te ayuda, ponle a la sensación una forma o un color.',
      ],
      obstacles: [
        { q: 'Si acepto el dolor, siento que pierdo.', a: 'Aceptar no es querer el dolor. Es dejar de que la lucha decida tu día. Puedes seguir buscando alivio con tu médico al mismo tiempo.' },
        { q: 'Al prestarle atención, duele más.', a: 'A veces pasa al principio. Prueba con menos tiempo o alterna con un lugar del cuerpo que esté cómodo, como las manos o los pies.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Busca una postura lo más cómoda posible. Respira despacio y nota el apoyo del cuerpo.', durationSec: 45, kind: 'breath' },
        { title: 'Un lugar cómodo', instruction: 'Busca una parte del cuerpo que esté bien, como las manos. Quédate ahí un momento.', durationSec: 40, kind: 'instruction' },
        { title: 'Mirar el dolor', instruction: 'Ahora lleva la atención al dolor con curiosidad. ¿Dónde está? ¿Qué tamaño tiene? ¿Es fijo o se mueve?', durationSec: 60, kind: 'reflection' },
        { title: 'Notar la lucha', instruction: 'Nota si el cuerpo se tensa alrededor del dolor. Si puedes, afloja un poco esa zona al exhalar.', durationSec: 60, kind: 'breath' },
        { title: 'Ver los pensamientos', instruction: 'Escucha qué dice tu mente sobre el dolor. Nombra cada idea así: «Estoy teniendo el pensamiento de que…».', durationSec: 60, kind: 'reflection' },
        { title: 'Hacer lugar', instruction: 'Imagina que le haces lugar a la sensación, como abrir una ventana. No tienes que quererla, solo dejarla estar.', durationSec: 60, kind: 'silence' },
        { title: 'Volver a lo cómodo', instruction: 'Lleva otra vez la atención a las manos o a los pies. Nota que el dolor es una parte, no todo tu cuerpo.', durationSec: 40, kind: 'instruction' },
        { title: 'Cerrar', instruction: 'Respira y pregúntate: ¿qué quiero hacer ahora, con el dolor a mi lado?', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'ritmo-de-actividad',
      title: 'Ritmo de actividad (pacing)',
      family: 'constructive',
      skills: ['resilience'],
      summary: 'Planificar las actividades en tramos cortos y parejos para salir del ciclo de hacer de más y después quedar fuera de juego.',
      mechanism: 'Medir la actividad por tiempo y no por cómo te sientes rompe el ciclo de exceso y caída, y permite subir de a poco.',
      evidenceLevel: 'preliminar',
      evidence: [NIELSON_2013, ANDREWS_2012, VLAEYEN_2000],
      cautions:
        'No reemplaza las indicaciones de tu médico ni de tu kinesiólogo o fisioterapeuta. Acuerda con ellos qué actividades son seguras y cuánto aumentar. Si el dolor empeora de forma clara o aparecen síntomas nuevos, consulta.',
      howItWorks: [
        'Muchas personas con dolor caen en un ciclo. Un día bueno hacen todo lo que pueden. Al día siguiente el dolor sube y pasan días casi sin moverse. Con el tiempo, la vida se achica.',
        'El ritmo de actividad, o pacing, propone otro camino. Haces cada actividad por un tiempo fijo, con pausas, tanto en días buenos como en días malos. Después subes muy de a poco. La evidencia es mixta y depende de cómo se aplique (Andrews y colaboradores, 2012). Funciona mejor como parte de un plan con tu equipo de salud.',
        'La clave es parar antes de llegar al límite, no cuando ya duele mucho. Así el cuerpo y la mente aprenden que moverse puede ser seguro.',
      ],
      tips: [
        'Usa una alarma para las pausas. Es fácil pasarse cuando algo sale bien.',
        'Empieza con un tiempo que puedas hacer incluso en un día malo.',
        'Sube de a poco, por ejemplo un diez por ciento por semana, si tu equipo de salud está de acuerdo.',
        'Alterna tareas que cansan distinto: estar de pie, sentarse, moverse.',
      ],
      obstacles: [
        { q: 'En los días buenos me cuesta parar.', a: 'Es lo más difícil. Recuerda que parar a tiempo hoy es lo que te permite hacer algo mañana.' },
        { q: 'En los días malos no puedo hacer nada.', a: 'Baja el tiempo, pero intenta no llevarlo a cero. Un tramo muy corto mantiene el hábito.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio y piensa en una actividad que el dolor te hace dejar o hacer de golpe.', durationSec: 45, kind: 'breath' },
        { title: 'Tu ciclo', instruction: 'Recuerda la última vez. ¿Hiciste de más en un día bueno y después pagaste el precio? Nótalo sin culparte.', durationSec: 60, kind: 'reflection' },
        { title: 'Tu tiempo base', instruction: '¿Cuántos minutos puedes hacer esa actividad sin que el dolor suba mucho, incluso en un día malo? Ese es tu punto de partida.', durationSec: 60, kind: 'reflection' },
        { title: 'Restar un poco', instruction: 'Toma ese tiempo y réstale un poco. Así empiezas por debajo del límite, no en el borde.', durationSec: 40, kind: 'reflection' },
        { title: 'Planear pausas', instruction: 'Decide cuánto dura cada pausa y qué harás en ella: estirarte, sentarte o respirar.', durationSec: 50, kind: 'reflection' },
        { title: 'Plan de la semana', instruction: 'Elige tres días y una hora para hacer esa actividad con tu tiempo base. Anótalo.', durationSec: 50, kind: 'instruction' },
        { title: 'Cerrar', instruction: 'Respira y dite: «Paro a tiempo para poder seguir». Pon una alarma para la primera vez.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'valores-pese-al-dolor',
      title: 'Lo que importa, con dolor y todo',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Recuperar una actividad valiosa que el dolor fue quitando, en una versión posible para hoy.',
      mechanism: 'Elegir acciones por valores, y no por la ausencia de dolor, devuelve sentido y amplía una vida que la evitación había achicado.',
      evidenceLevel: 'moderada',
      evidence: [MCCRACKEN_2014, MCCRACKEN_2004, VLAEYEN_2000],
      cautions:
        'No reemplaza la atención médica. Elige actividades que tu equipo de salud considere seguras. Si notar lo que el dolor te quitó trae mucha tristeza o desesperanza, habla con un profesional.',
      howItWorks: [
        'Cuando el dolor dura mucho, es natural esperar a estar mejor para volver a vivir. Pero esa espera puede durar años. El miedo al dolor lleva a evitar, y evitar debilita el cuerpo y quita cosas que daban alegría (Vlaeyen y Linton, 2000).',
        'La ACT propone preguntarte qué te importa y buscar una forma de acercarte a eso hoy, con el dolor presente. Puede que no sea igual que antes. Una versión más pequeña también cuenta.',
        'Las personas que actúan según sus valores, aun con dolor, tienen mejor ánimo y funcionan mejor en su vida diaria (McCracken y Vowles, 2014).',
      ],
      tips: [
        'Piensa en el valor, no solo en la actividad. Si ya no puedes jugar al fútbol, el valor puede ser compartir con amigos.',
        'Haz la versión más pequeña que todavía tenga sentido.',
        'Combínala con el ritmo de actividad para no pasarte.',
      ],
      obstacles: [
        { q: 'Me da mucha tristeza pensar en lo que perdí.', a: 'Es una tristeza que tiene sentido. Date un momento para sentirla. Después, busca una sola cosa que todavía puedas acercar.' },
        { q: 'Tengo miedo de que me duela más.', a: 'Es un miedo comprensible. Empieza con algo muy pequeño y seguro, y observa qué pasa de verdad.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio y nota el cuerpo tal como está hoy, con lo que duele y con lo que no.', durationSec: 40, kind: 'breath' },
        { title: 'Lo que dejaste', instruction: 'Piensa en algo que te gustaba hacer y que el dolor fue quitando.', durationSec: 50, kind: 'reflection' },
        { title: 'El valor de fondo', instruction: '¿Qué te daba esa actividad? ¿Compañía, juego, cuidar a otros, crear? Ponle una palabra.', durationSec: 60, kind: 'reflection' },
        { title: 'Una versión posible', instruction: 'Piensa en una forma más pequeña de acercarte a ese valor hoy, con el dolor presente.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que dirá la mente', instruction: 'Tu mente quizá diga «no vale la pena» o «te va a doler». Agradécele y nota que es un pensamiento.', durationSec: 45, kind: 'reflection' },
        { title: 'Comprometerte', instruction: 'Elige cuándo y dónde lo vas a hacer esta semana. Hazlo concreto y pequeño.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon una mano donde te haga bien y dite: «Mi vida es más grande que mi dolor».', durationSec: 30, kind: 'breath' },
      ],
    },

    // ------------------------------------------------------------ neurodiversidad
    {
      id: 'andamios-ejecutivos',
      title: 'Andamios para empezar una tarea',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Sacar la tarea de la cabeza, dividirla en pasos mínimos y sumar apoyo externo, como un cuerpo doble, para arrancar.',
      mechanism: 'Cuando las funciones ejecutivas cuestan, poner la ayuda afuera (en papel, en el tiempo o en otra persona) reduce la carga y facilita empezar.',
      evidenceLevel: 'moderada',
      evidence: [KNOUSE_2017, SAFREN_2010, BARKLEY_2012],
      howItWorks: [
        'Las funciones ejecutivas son las habilidades que usamos para planificar, empezar, recordar lo que sigue y sostener la atención. En el TDAH suelen costar más. No es falta de voluntad ni de inteligencia.',
        'Russell Barkley propone poner la ayuda «en el punto de acción»: listas, alarmas y señales a la vista, justo donde se hace la tarea. La terapia cognitivo-conductual para adultos con TDAH usa estas estrategias y muestra buenos resultados (Safren y colaboradores, 2010; Knouse y colaboradores, 2017).',
        'El «cuerpo doble» es trabajar al lado de otra persona, en persona o por video, mientras cada uno hace lo suyo. Nació en la comunidad TDAH y muchas personas lo encuentran útil, aunque todavía no hay estudios formales.',
        'Esta práctica no diagnostica nada. Sirve para cualquiera a quien le cueste arrancar. Si sospechas que tienes TDAH, una evaluación profesional puede darte respuestas y opciones de tratamiento.',
      ],
      tips: [
        'El primer paso tiene que ser ridículamente pequeño: abrir el archivo, sacar los papeles.',
        'Usa un temporizador visible. El tiempo se ve mejor que se siente.',
        'Pide a alguien que te acompañe por video mientras trabajas. No hace falta hablar.',
        'Sé amable contigo si no sale. Prueba otro andamio, no más fuerza de voluntad.',
      ],
      obstacles: [
        { q: 'Hago la lista y después no la miro.', a: 'Ponla donde no puedas evitarla: pegada en la pantalla o como fondo del celular. La ayuda tiene que estar a la vista.' },
        { q: 'Me da vergüenza pedir un cuerpo doble.', a: 'Mucha gente lo usa sin nombrarlo: estudiar en una biblioteca, trabajar en un café. Puedes empezar por ahí.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira dos veces y piensa en una tarea que vienes postergando.', durationSec: 30, kind: 'breath' },
        { title: 'Sacarla de la cabeza', instruction: 'Escribe la tarea en un papel o en el celular. Ya no tienes que recordarla, está afuera.', durationSec: 40, kind: 'instruction' },
        { title: 'Dividir', instruction: 'Divide la tarea en pasos muy pequeños. Cada uno debería llevar menos de diez minutos.', durationSec: 75, kind: 'instruction' },
        { title: 'El primer paso', instruction: 'Marca el primer paso y hazlo aún más chico. Por ejemplo: «Abrir el documento».', durationSec: 30, kind: 'instruction' },
        { title: 'Elegir apoyo', instruction: 'Elige un apoyo: un temporizador, música, o una persona que te acompañe un rato como cuerpo doble.', durationSec: 45, kind: 'reflection' },
        { title: 'Arrancar', instruction: 'Pon el temporizador en diez minutos y haz solo el primer paso. Puedes parar cuando suene.', durationSec: 40, kind: 'instruction' },
        { title: 'Cerrar', instruction: 'Respira y nota que empezar ya es un logro. Tu cerebro funciona distinto, y eso se puede acompañar.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'mapa-sensorial',
      title: 'Mi mapa sensorial y de energía',
      family: 'attentional',
      skills: ['attention', 'compassion'],
      summary: 'Conocer qué estímulos te cargan o te calman y cuánta energía social tienes, para cuidarte y pedir lo que necesitas.',
      mechanism: 'Conocer tu perfil sensorial y tu energía social permite prevenir la sobrecarga y pedir ajustes concretos, en lugar de forzarte a aguantar.',
      evidenceLevel: 'preliminar',
      evidence: [DUNN_1997, RAYMAKER_2020, HULL_2017, PELLICANO_2022],
      howItWorks: [
        'Cada persona procesa los estímulos de forma distinta. Algunas sienten los ruidos, las luces o las texturas con mucha intensidad. Otras necesitan más estímulo para registrarlo. Winnie Dunn describió estos perfiles sensoriales (Dunn, 1997).',
        'Muchas personas autistas, y también otras, viven con más sensibilidad sensorial. Además, sostener interacciones sociales o «camuflarse» para encajar consume mucha energía (Hull y colaboradores, 2017). Cuando eso se acumula, puede llegar un agotamiento profundo (Raymaker y colaboradores, 2020).',
        'El enfoque de la neurodiversidad ve estas diferencias como formas distintas de funcionar, no como errores. Conocer tu mapa te ayuda a planificar descansos y a pedir ajustes, lo que también se llama autodefensa. Esta práctica no es un diagnóstico. Si te reconoces en esto, una evaluación profesional puede orientarte.',
      ],
      tips: [
        'Piensa en la última semana: ¿qué momentos te dejaron sin batería?',
        'Arma un pequeño kit: auriculares, anteojos de sol, algo para tocar.',
        'Planifica tiempo a solas después de eventos sociales largos.',
        'Una frase de autodefensa puede ser simple: «Necesito bajar la luz para concentrarme».',
      ],
      obstacles: [
        { q: 'Siempre me dijeron que exagero.', a: 'Tu experiencia es real, aunque otros no la vivan igual. Tomarla en serio es el primer paso para cuidarte.' },
        { q: 'No me animo a pedir ajustes.', a: 'Empieza por uno pequeño, con alguien de confianza. Puedes preparar la frase antes y decirla tal cual.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio y nota cómo está tu cuerpo ahora. ¿Tenso, cansado, tranquilo?', durationSec: 40, kind: 'breath' },
        { title: 'Lo que carga', instruction: 'Piensa en sonidos, luces, olores o texturas que te molestan o te agotan. Nombra dos o tres.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que calma', instruction: 'Ahora piensa en estímulos que te calman: un sonido, una manta, el silencio, moverte. Nombra dos o tres.', durationSec: 60, kind: 'reflection' },
        { title: 'Tu batería social', instruction: 'Imagina una batería. ¿Qué situaciones sociales la gastan rápido? ¿Cuáles la recargan?', durationSec: 60, kind: 'reflection' },
        { title: 'Señales de aviso', instruction: '¿Cómo notas que la batería está baja? Puede ser irritación, cansancio o ganas de aislarte.', durationSec: 50, kind: 'reflection' },
        { title: 'Un ajuste', instruction: 'Elige un ajuste para esta semana. Puede ser un descanso, un objeto de tu kit o un pedido a alguien.', durationSec: 50, kind: 'reflection' },
        { title: 'Tu frase', instruction: 'Arma una frase corta para pedirlo. Por ejemplo: «Me ayuda tener un rato en silencio».', durationSec: 40, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira y dite: «Mi forma de sentir es válida. Puedo cuidarla».', durationSec: 30, kind: 'breath' },
      ],
    },
  ],

  meta: {
    'mapa-seis-areas': { level: 'iniciacion', approaches: ['tcc', 'motivacional'], module: 'trabajo' },
    'cierre-de-jornada': { level: 'iniciacion', approaches: ['tcc', 'mindfulness'], module: 'trabajo' },
    'redisenar-mi-trabajo': { level: 'intermedio', prerequisites: ['brujula-valores'], approaches: ['positiva', 'act'], module: 'trabajo' },
    'hacer-lugar-al-dolor': { level: 'intermedio', prerequisites: ['escaneo-corporal'], approaches: ['act', 'mindfulness'], module: 'salud' },
    'ritmo-de-actividad': { level: 'intermedio', approaches: ['tcc', 'act'], module: 'salud' },
    'valores-pese-al-dolor': { level: 'intermedio', prerequisites: ['brujula-valores'], approaches: ['act'], module: 'salud' },
    'andamios-ejecutivos': { level: 'iniciacion', approaches: ['tcc'], module: 'neurodiversidad' },
    'mapa-sensorial': { level: 'iniciacion', approaches: ['mindfulness', 'tcc'], module: 'neurodiversidad' },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'burnout-seis-areas',
      title: 'Burnout: cuando el trabajo te vacía',
      subtitle: 'Qué es el desgaste laboral según Maslach, de dónde viene y qué ayuda a salir.',
      category: 'Salud y trabajo',
      readingMin: 7,
      keyPoints: [
        'El burnout tiene tres caras: agotamiento, distancia o cinismo hacia el trabajo y sensación de baja eficacia.',
        'La OMS lo reconoce como un fenómeno laboral, no como una enfermedad ni como una falla personal.',
        'Crece cuando hay desajuste en seis áreas: carga, control, reconocimiento, compañerismo, justicia y valores.',
        'Ayudan los límites, la desconexión psicológica fuera del trabajo y los cambios en la organización, no solo el autocuidado.',
      ],
      sections: [
        {
          heading: 'Tres caras del desgaste',
          paragraphs: [
            'Christina Maslach empezó a estudiar el burnout en los años setenta, con personas que trabajaban cuidando a otras. Hoy se sabe que puede aparecer en cualquier trabajo. Lo describe con tres dimensiones (Maslach y colaboradores, 2001).',
            'La primera es el agotamiento: sentirse sin energía, física y emocionalmente. La segunda es el cinismo: tomar distancia, volverse frío o desconfiado con el trabajo o con las personas. La tercera es la baja eficacia: sentir que lo que haces no sirve o que ya no te sale bien.',
            'La Organización Mundial de la Salud lo incluyó en la CIE-11 como un fenómeno ligado al trabajo, no como una enfermedad (OMS, 2019). Puede parecerse a la depresión, y a veces se dan juntas. Por eso vale la pena consultar si el malestar se extiende a toda la vida.',
          ],
        },
        {
          heading: 'Las seis áreas del ajuste laboral',
          paragraphs: [
            'Maslach y Leiter propusieron que el burnout no está solo en la persona ni solo en el trabajo, sino en el ajuste entre ambos. Identificaron seis áreas donde ese ajuste puede fallar (Leiter y Maslach, 2004).',
            'Carga: demasiado trabajo para el tiempo y los recursos. Control: poca voz sobre cómo hacer las cosas. Reconocimiento: esfuerzo que nadie ve ni valora. Compañerismo: falta de apoyo o conflictos. Justicia: reglas o decisiones arbitrarias. Valores: hacer cosas que chocan con lo que te importa.',
            'Mirar las seis áreas ayuda a dejar de culparte. También muestra qué se puede cambiar, qué se puede pedir y qué quizás no cambie.',
          ],
        },
        {
          heading: 'Recuperarse: límites y desconexión',
          paragraphs: [
            'Sabine Sonnentag estudió cómo se recupera la gente fuera del horario laboral. Encontró que lo que más ayuda es la desconexión psicológica: dejar de pensar en el trabajo, no solo dejar de hacerlo (Sonnentag, 2012). También ayudan la relajación, aprender cosas nuevas y sentir control sobre el tiempo libre (Sonnentag y Fritz, 2007).',
            'Los límites protegen esa recuperación: horarios claros, decir que no a tareas que no entran, no responder mensajes fuera de hora cuando es posible. Poner límites es una habilidad que se aprende y se practica.',
          ],
        },
        {
          heading: 'Rediseñar el trabajo',
          paragraphs: [
            'El rediseño del puesto, o «job crafting», propone usar el margen que tengas para ajustar tus tareas, tus vínculos y la forma de mirar tu trabajo (Wrzesniewski y Dutton, 2001). Los estudios lo relacionan con más compromiso y menos agotamiento (Tims y colaboradores, 2012).',
            'Ninguna técnica individual compensa un trabajo con carga imposible o trato injusto. Un metaanálisis con médicos encontró que las intervenciones en la organización funcionan mejor que las centradas solo en la persona (Panagioti y colaboradores, 2017). A veces el paso más sano es pedir cambios, apoyarse en otros o buscar otro trabajo.',
          ],
        },
      ],
      caveat: {
        title: 'Cuándo consultar',
        body: 'Si el agotamiento no mejora con el descanso, si duermes mal hace semanas, si ya no disfrutas de nada fuera del trabajo o si aparecen ideas de no querer vivir, consulta con tu médico o con un profesional de salud mental. El burnout se trata, y pedir ayuda no es debilidad.',
      },
      diagram: {
        title: 'El ciclo del desgaste',
        nodes: ['Demanda alta y pocos recursos', 'Esfuerzo extra sin pausa', 'Agotamiento', 'Distancia y cinismo', 'Sensación de no servir'],
        caption: 'Cada vuelta deja menos energía para la siguiente. Los límites y la recuperación cortan el ciclo.',
      },
      related: { practices: ['mapa-seis-areas', 'cierre-de-jornada', 'redisenar-mi-trabajo', 'dear-man'], articles: ['estres-y-agotamiento', 'asertividad-y-limites', 'cuidar-sin-agotarse'] },
      references: [MASLACH_2001, MASLACH_2016, LEITER_2004, OMS_2019, SONNENTAG_2007, SONNENTAG_2012, WRZESNIEWSKI_2001, TIMS_2012, PANAGIOTI_2017],
    },
    {
      id: 'dolor-cronico-act',
      title: 'Dolor crónico: aceptar, elegir y dosificar',
      subtitle: 'Cuatro herramientas de la terapia de aceptación y compromiso para que el dolor ocupe menos lugar en tu vida.',
      category: 'Salud y trabajo',
      readingMin: 7,
      keyPoints: [
        'Esta información acompaña, pero no reemplaza, la atención médica del dolor.',
        'El dolor crónico es real, aunque no siempre haya una lesión visible: el sistema nervioso también lo amplifica.',
        'La ACT mejora el funcionamiento y el ánimo, aunque no siempre baja la intensidad del dolor.',
        'Cuatro herramientas: hacer lugar a la sensación, ver los pensamientos como pensamientos, elegir por valores y dosificar la actividad.',
      ],
      sections: [
        {
          heading: 'Un dolor que se queda',
          paragraphs: [
            'Se habla de dolor crónico cuando dura más de tres meses. A veces empieza con una lesión que ya sanó, pero el dolor sigue. Hoy se sabe que el sistema nervioso puede volverse más sensible y amplificar las señales. El dolor es real aunque no se vea en una imagen (Moseley y Butler, 2015).',
            'Por eso el tratamiento suele combinar varias cosas: atención médica, movimiento guiado y trabajo psicológico. Lo psicológico no significa que el dolor «esté en tu cabeza». Significa que la forma de relacionarte con él cambia cuánto te limita.',
          ],
        },
        {
          heading: 'Aceptar y defusionar',
          paragraphs: [
            'Ante el dolor, lo natural es luchar: tensar el cuerpo, evitar, buscar alivio a toda costa. A corto plazo tiene sentido. A largo plazo, la lucha suma sufrimiento y achica la vida. El modelo de miedo y evitación describe ese círculo (Vlaeyen y Linton, 2000).',
            'La aceptación del dolor es dejar de pelear con la sensación para poder vivir con ella. No es resignarse ni dejar de buscar tratamiento. Las personas que aceptan más su dolor funcionan mejor y sufren menos depresión (McCracken y colaboradores, 2004).',
            'La defusión ayuda con los pensamientos que acompañan al dolor, como «esto nunca va a mejorar» o «no sirvo para nada». Se trata de verlos como lo que son, pensamientos, y no como verdades. Así pierden parte de su fuerza.',
          ],
        },
        {
          heading: 'Valores y ritmo',
          paragraphs: [
            'Esperar a que el dolor se vaya para vivir puede llevar años. La ACT propone preguntarse qué importa y acercarse a eso hoy, quizás en una versión más pequeña. Actuar según los valores, con dolor presente, se asocia con mejor ánimo y más actividad (McCracken y Vowles, 2014).',
            'El ritmo de actividad, o pacing, ayuda a salir del ciclo de hacer de más en los días buenos y caer en los malos. Se trabaja por tiempo, con pausas planificadas y aumentos graduales. La evidencia es mixta: depende de cómo se use. Funciona mejor cuando apunta a hacer más cosas valiosas, no solo a evitar el dolor (Nielson y colaboradores, 2013; Andrews y colaboradores, 2012).',
          ],
        },
        {
          heading: 'Lo que dice la evidencia',
          paragraphs: [
            'Varios metaanálisis encontraron que la ACT y las intervenciones de mindfulness mejoran el funcionamiento físico, la ansiedad y la depresión en el dolor crónico. Los efectos son de pequeños a moderados y similares a los de la terapia cognitivo-conductual (Hughes y colaboradores, 2017; Veehof y colaboradores, 2016).',
          ],
        },
      ],
      caveat: {
        title: 'Primero, tu médico',
        body: 'Consulta siempre ante un dolor nuevo, un cambio en el dolor habitual o síntomas como fiebre, pérdida de peso sin razón, debilidad o adormecimiento. Estas prácticas son un complemento del tratamiento, no un reemplazo. Si el dolor te quita las ganas de vivir, pide ayuda profesional cuanto antes.',
      },
      related: { practices: ['hacer-lugar-al-dolor', 'ritmo-de-actividad', 'valores-pese-al-dolor', 'hacer-espacio'], articles: ['dolor-cronico', 'flexibilidad-psicologica'] },
      references: [HUGHES_2017, VEEHOF_2016, MCCRACKEN_2014, MCCRACKEN_2004, VLAEYEN_2000, NIELSON_2013, ANDREWS_2012, MOSELEY_2015],
    },
    {
      id: 'neurodiversidad-adultos',
      title: 'Neurodiversidad en la adultez: TDAH y autismo',
      subtitle: 'Cerebros que funcionan distinto: estrategias prácticas, sin etiquetas apresuradas y con respeto por cada forma de ser.',
      category: 'Salud y trabajo',
      readingMin: 8,
      keyPoints: [
        'La neurodiversidad es la idea de que los cerebros humanos varían, y que esas diferencias no son en sí mismas fallas.',
        'En el TDAH adulto ayudan las estrategias que ponen la memoria y la organización afuera: listas, alarmas, pasos pequeños y cuerpo doble.',
        'En el autismo es útil conocer el perfil sensorial, cuidar la energía social y aprender a pedir ajustes.',
        'Esta información no sirve para diagnosticar. Si te reconoces, consulta para una evaluación profesional.',
      ],
      sections: [
        {
          heading: 'Qué es la neurodiversidad',
          paragraphs: [
            'El término surgió a fines de los años noventa en la comunidad autista. Propone que hay muchas formas de funcionar del cerebro, como hay muchas formas de cuerpos. Desde esta mirada, el TDAH y el autismo son formas distintas de procesar el mundo, con fortalezas y dificultades (Pellicano y den Houting, 2022).',
            'Esto no niega que haya sufrimiento ni necesidad de apoyo. Muchas dificultades vienen del choque entre una persona y un entorno que no está pensado para ella. Por eso la ayuda incluye estrategias personales y también cambios en el entorno.',
          ],
        },
        {
          heading: 'TDAH adulto: poner la ayuda afuera',
          paragraphs: [
            'El TDAH no desaparece siempre en la adultez. Puede notarse en la dificultad para empezar tareas, en olvidos, en la gestión del tiempo o en la impulsividad. Hay mucha evidencia sobre su existencia y su tratamiento (Faraone y colaboradores, 2021).',
            'Russell Barkley describe el TDAH como una dificultad en las funciones ejecutivas: planificar, recordar lo que sigue, frenar un impulso. Su consejo central es poner la ayuda en el punto de acción. Listas visibles, alarmas, relojes a la vista y pasos pequeños (Barkley, 2012).',
            'La terapia cognitivo-conductual para adultos con TDAH enseña estas estrategias y mejora los síntomas (Safren y colaboradores, 2010; Knouse y colaboradores, 2017). El «cuerpo doble», trabajar acompañado, es muy usado en la comunidad, aunque todavía no se ha estudiado formalmente.',
          ],
        },
        {
          heading: 'Autismo: sentidos, energía y autodefensa',
          paragraphs: [
            'Muchas personas autistas sienten los estímulos con más intensidad: ruidos, luces, texturas, multitudes. Otras buscan estímulos para regularse. Conocer el propio perfil sensorial ayuda a prevenir la sobrecarga (Dunn, 1997).',
            'Sostener interacciones sociales o esconder rasgos para encajar, el llamado camuflaje, consume mucha energía (Hull y colaboradores, 2017). Cuando eso se acumula sin descanso, puede aparecer un burnout autista: agotamiento profundo y pérdida de habilidades por un tiempo (Raymaker y colaboradores, 2020).',
            'La autodefensa es conocer lo que necesitas y pedirlo: un lugar tranquilo, instrucciones por escrito, avisos antes de un cambio. Es un derecho, no un favor.',
          ],
        },
        {
          heading: 'Si te reconoces',
          paragraphs: [
            'Muchas personas descubren en la adultez que podrían ser neurodivergentes, sobre todo mujeres, a quienes se les diagnostica menos en la infancia. Leer sobre el tema puede traer alivio y también preguntas.',
            'Una evaluación con profesionales con experiencia en adultos puede confirmar o descartar un diagnóstico y abrir opciones de apoyo. Las estrategias de esta app sirven tengas o no un diagnóstico.',
          ],
        },
      ],
      caveat: {
        title: 'Sin autodiagnóstico',
        body: 'Muchas experiencias del TDAH y del autismo se parecen a las de la ansiedad, la depresión, el trauma o la falta de sueño. Solo una evaluación profesional puede distinguirlas. Esta app no diagnostica: ofrece estrategias útiles para cualquier persona.',
      },
      related: { practices: ['andamios-ejecutivos', 'mapa-sensorial', 'habito-minimo', 'cinco-minutos'], articles: ['burnout-seis-areas'] },
      references: [PELLICANO_2022, FARAONE_2021, BARKLEY_2012, SAFREN_2010, KNOUSE_2017, DUNN_1997, HULL_2017, RAYMAKER_2020],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'salir-del-burnout',
      title: 'Salir del burnout',
      subtitle: 'Cuatro semanas para entender el desgaste, recuperarte y cambiar lo que se pueda',
      description:
        'Un recorrido para cuando el trabajo te dejó sin energía. Primero entiendes de dónde viene el desgaste. Después recuperas el descanso, practicas límites y ajustas tu trabajo para que se parezca más a lo que te importa. No reemplaza una consulta si el agotamiento es grave.',
      basis: 'Maslach y Leiter (2016), World Psychiatry; Sonnentag (2012); Wrzesniewski y Dutton (2001).',
      rhythm: '10 a 15 minutos al día, 5 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Entender',
          focus: 'De dónde viene el desgaste',
          description: 'Mirarás las seis áreas del trabajo y verás dónde está el mayor desajuste. La meta es dejar de culparte y saber por dónde empezar.',
          practiceIds: ['mapa-seis-areas', 'respiracion-resonante'],
          articleIds: ['burnout-seis-areas', 'estres-y-agotamiento'],
        },
        {
          title: 'Semana 2 · Recuperar',
          focus: 'Cerrar el día y descansar de verdad',
          description: 'Practicarás un ritual de cierre para desconectar del trabajo y cuidarás lo básico: sueño, comida y movimiento.',
          practiceIds: ['cierre-de-jornada', 'please'],
          articleIds: [],
          journalType: 'activacion',
        },
        {
          title: 'Semana 3 · Poner límites',
          focus: 'Pedir y decir que no',
          description: 'Prepararás una conversación para pedir un cambio o decir que no, y practicarás tratarte con amabilidad cuando cueste.',
          practiceIds: ['dear-man', 'pausa-autocompasion'],
          articleIds: ['asertividad-y-limites'],
          journalType: 'conversacion',
        },
        {
          title: 'Semana 4 · Rediseñar',
          focus: 'Volver a lo que importa',
          description: 'Usarás tu margen para ajustar tareas, vínculos y sentido del trabajo. También revisarás qué valores quieres cuidar dentro y fuera de él.',
          practiceIds: ['redisenar-mi-trabajo', 'brujula-valores'],
          articleIds: ['sentido-y-valores'],
          journalType: 'valores',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'que-es-el-burnout',
      title: '¿Es burnout o solo cansancio?',
      subtitle: 'Tres señales y seis lugares donde mirar.',
      slides: [
        { heading: 'Más que cansancio', text: 'El cansancio se va con un buen descanso. El burnout no. Es un desgaste que se acumula con el trabajo, semana tras semana.' },
        { heading: 'Tres señales', text: 'Te sientes sin energía. Tomas distancia del trabajo y de la gente. Sientes que lo que haces ya no sirve. Así lo describe Christina Maslach.' },
        { heading: 'No es tu culpa', text: 'El burnout nace del choque entre tú y tu trabajo. No es una falla de carácter. La OMS lo llama un problema del trabajo, no una enfermedad.' },
        { heading: 'Seis lugares', text: 'Mira la carga, el control, el reconocimiento, el apoyo, la justicia y los valores. Donde hay más choque, hay más desgaste.' },
        { heading: 'Qué hacer', text: 'Elige un solo lugar para empezar. Pide algo, pon un límite o cuida tu descanso. Si el malestar ya toca toda tu vida, consulta a un profesional.' },
      ],
      related: { practices: ['mapa-seis-areas'], articles: ['burnout-seis-areas'] },
      references: [MASLACH_2016, OMS_2019],
    },
    {
      id: 'desconectar-de-verdad',
      title: 'Desconectar de verdad',
      subtitle: 'Salir del trabajo no basta: hay que soltarlo.',
      slides: [
        { heading: 'El cuerpo se va', text: 'Cierras la compu y te vas. Pero la mente sigue en el trabajo. Piensas en el mail, en la reunión, en lo que falta.' },
        { heading: 'La mente se queda', text: 'Sabine Sonnentag estudió esto. Vio que descansa mejor quien deja de pensar en el trabajo. Lo llamó desconexión.' },
        { heading: 'Anotar lo que falta', text: 'Lo que queda sin hacer vuelve a la mente. Anótalo con fecha. Así la mente sabe que no se va a perder y lo suelta.' },
        { heading: 'Una puerta', text: 'Haz un gesto fijo al terminar. Apaga la pantalla, guarda todo o cambia de ropa. Con el tiempo, el cuerpo aprende que ahí termina el día.' },
        { heading: 'Algo que te atrape', text: 'Después, haz algo que te guste y te absorba. Cocinar, caminar, jugar o charlar. Eso también es parte del descanso.' },
      ],
      related: { practices: ['cierre-de-jornada'], articles: ['burnout-seis-areas'] },
      references: [SONNENTAG_2012, SONNENTAG_2007],
    },
    {
      id: 'dolor-y-aceptacion',
      title: 'Aceptar el dolor no es rendirse',
      subtitle: 'Una forma distinta de convivir con un dolor que no se va.',
      slides: [
        { heading: 'Dos capas', text: 'Con el dolor que dura, hay dos capas. Una es lo que sientes en el cuerpo. La otra es la pelea contra eso. La pelea también duele.' },
        { heading: 'La pelea', text: 'Tensas el cuerpo. Piensas que nunca va a pasar. Dejas cosas por miedo. Es normal, pero con el tiempo la vida se achica.' },
        { heading: 'Hacer lugar', text: 'Aceptar es dejar de pelear con la sensación. No es quererla. Tampoco es dejar tu tratamiento. Es que el dolor no decida todo tu día.' },
        { heading: 'Lo que importa', text: 'Busca algo que te importe y hazlo en una versión pequeña. Con pausas y sin pasarte. Tu vida es más grande que tu dolor.' },
        { heading: 'Con tu médico', text: 'Esto ayuda a vivir mejor, pero no reemplaza al médico. Si el dolor cambia o aparece algo nuevo, consulta siempre.' },
      ],
      related: { practices: ['hacer-lugar-al-dolor', 'valores-pese-al-dolor'], articles: ['dolor-cronico-act'] },
      references: [MCCRACKEN_2014, HUGHES_2017],
    },
    {
      id: 'cerebros-distintos',
      title: 'Cerebros distintos, apoyos distintos',
      subtitle: 'Ideas simples sobre TDAH y autismo en adultos.',
      slides: [
        { heading: 'No hay un solo cerebro', text: 'Cada cerebro funciona a su modo. Algunos se distraen más. Otros sienten los ruidos más fuerte. La diferencia no es un error.' },
        { heading: 'Si te cuesta empezar', text: 'Saca la tarea de la cabeza y escríbela. Divídela en pasos muy chicos. Pon una alarma. La ayuda funciona mejor si está a la vista.' },
        { heading: 'Cuerpo doble', text: 'A muchas personas les sirve trabajar al lado de alguien. Cada uno hace lo suyo. Puede ser en persona o por video.' },
        { heading: 'Si te cansa la gente', text: 'Piensa en tu energía como una batería. Algunas cosas la gastan y otras la cargan. Deja tiempo a solas para recargar.' },
        { heading: 'Pedir lo que necesitas', text: 'Puedes pedir menos luz, menos ruido o las tareas por escrito. Pedir ajustes es cuidarte, no molestar.' },
        { heading: 'Sin etiquetas rápidas', text: 'Leer esto no da un diagnóstico. Si te reconoces, consulta con un profesional. Las ideas sirven igual, tengas o no un diagnóstico.' },
      ],
      related: { practices: ['andamios-ejecutivos', 'mapa-sensorial'], articles: ['neurodiversidad-adultos'] },
      references: [PELLICANO_2022, BARKLEY_2012],
    },
  ],

  // ================================================================== guías para familias
  kidGuides: [
    {
      id: 'pantallas-en-familia',
      title: 'Pantallas en familia',
      subtitle: 'Menos peleas y más acuerdos: qué dice la evidencia y cómo armar un plan.',
      readingMin: 5,
      keyPoints: [
        'Importa tanto qué se mira y con quién como cuánto tiempo.',
        'En menores de dos años, lo mejor es casi nada de pantalla, salvo videollamadas.',
        'Un plan familiar con horarios y lugares sin pantallas evita peleas diarias.',
        'Lo que tú haces con el celular enseña más que lo que dices.',
      ],
      sections: [
        {
          heading: 'Qué dice la evidencia',
          paragraphs: [
            'Para los más chicos, la recomendación es clara. Antes de los dos años, casi nada de pantalla, salvo las videollamadas con la familia. De dos a cinco años, no más de una hora al día, y mejor si la miran con un adulto (AAP, 2016; OMS, 2019).',
            'En chicos más grandes y en adolescentes, la relación entre pantallas y malestar es pequeña. Importa más qué hacen, cuánto quitan al sueño y al juego, y cómo se sienten (Orben y Przybylski, 2019).',
          ],
        },
        {
          heading: 'Armar un plan juntos',
          paragraphs: [
            'Siéntense en familia y armen reglas simples. Por ejemplo, sin pantallas en la mesa ni en el cuarto a la noche. Una hora antes de dormir, todo se apaga.',
            'Si los chicos participan, cumplen mejor. Escribe el plan y pégalo en la heladera. Revísenlo cada tanto.',
          ],
        },
        {
          heading: 'Cuando hay que apagar',
          paragraphs: [
            'Avisa unos minutos antes: «En cinco minutos apagamos». Es difícil cortar algo que gusta. Nombra lo que siente: «Te cuesta dejarlo, lo sé».',
            'Ten listo algo para hacer después. Un juego, un paseo, leer juntos. Pasar de la pantalla a la nada cuesta mucho más.',
          ],
        },
        {
          heading: 'Tu ejemplo',
          paragraphs: [
            'Los chicos aprenden mirando. Si tú dejas el celular durante la cena, ellos también aprenden a hacerlo. No hace falta ser perfecto. Basta con intentarlo y contarlo en voz alta.',
          ],
        },
      ],
      phrases: ['«En cinco minutos apagamos. ¿Quieres terminar ese nivel?»', '«Sé que te cuesta dejarlo. Ahora vamos a jugar juntos»', '«Yo también guardo el celular. Es la hora de la cena»'],
      caveat: {
        title: 'Cuándo consultar',
        body: 'Si las pantallas quitan horas de sueño de forma seguida, si hay mucho enojo al apagar o si notas aislamiento o tristeza, consulta con el pediatra o con un profesional de salud mental.',
      },
      activities: ['juego-en-el-piso', 'leer-juntos', 'paseo-de-sentidos', 'redes-y-yo', 'dormir-mejor'],
      references: [AAP_2016, OMS_2019_NINOS, ORBEN_2019],
    },
    {
      id: 'entre-hermanos',
      title: 'Entre hermanos',
      subtitle: 'Peleas, celos y cómo ayudarlos a llevarse mejor sin hacer de juez todo el tiempo.',
      readingMin: 5,
      keyPoints: [
        'Las peleas entre hermanos son normales y pueden enseñar a resolver conflictos.',
        'Compararlos alimenta los celos. Mirar a cada uno por lo que es los calma.',
        'Más que decidir quién tiene razón, ayúdalos a encontrar una salida.',
        'Si hay golpes o humillación, frena primero y cuida a quien se lastimó.',
      ],
      sections: [
        {
          heading: 'Por qué pelean',
          paragraphs: [
            'Los hermanos comparten casa, juguetes y, sobre todo, a ti. Es normal que compitan. Las peleas son una forma de aprender a convivir.',
            'Lo que más ayuda es enseñarles a hablar de lo que sienten y a buscar soluciones juntos. Los hermanos que aprenden esto se llevan mejor con el tiempo (Kramer, 2010).',
          ],
        },
        {
          heading: 'No comparar',
          paragraphs: [
            'Frases como «mira qué bien come tu hermana» parecen inocentes. Pero hacen sentir al otro que vale menos. Mejor habla de cada uno por separado.',
            'Tampoco hace falta dar lo mismo a todos. Cada hijo necesita algo distinto. Lo justo es darle a cada uno lo que necesita (Faber y Mazlish, 1987).',
          ],
        },
        {
          heading: 'Cuando hay una pelea',
          paragraphs: [
            'Si es una pelea chica, espera un poco. Muchas veces la resuelven solos. Si sube de tono, acércate y describe lo que ves: «Veo a dos chicos que quieren el mismo autito».',
            'Escucha a cada uno sin juzgar. Después pregunta: «¿Qué podemos hacer?». Deja que ellos propongan. Así aprenden a negociar.',
            'Si hay golpes, para la pelea primero. Cuida a quien se lastimó. Luego, con calma, habla con quien pegó sobre cómo reparar.',
          ],
        },
        {
          heading: 'Tiempo a solas con cada uno',
          paragraphs: [
            'Un rato corto a solas con cada hijo baja mucho los celos. Diez minutos de juego donde ese hijo elige qué hacer ya cuentan. Cada uno siente que tiene su lugar.',
          ],
        },
      ],
      phrases: ['«Veo a dos chicos enojados que quieren lo mismo»', '«Los escucho a los dos. Primero tú, después tú»', '«¿Qué idea tienen para que los dos queden bien?»', '«Pegar no está permitido. Vamos a ver cómo arreglarlo»'],
      activities: ['esperar-mi-turno', 'pedir-perdon-y-reparar', 'semaforo', 'cuento-siento-pido', 'superpoder-amable'],
      references: [KRAMER_2010, FABER_1987],
    },
    {
      id: 'hablar-de-la-muerte',
      title: 'Hablar de la muerte con chicos',
      subtitle: 'Palabras claras y presencia cálida cuando muere alguien querido o aparece la pregunta.',
      readingMin: 6,
      keyPoints: [
        'Los chicos entienden la muerte de a poco, según su edad.',
        'Usa palabras claras como «murió». Evita «se durmió» o «se fue de viaje».',
        'Está bien que te vean triste. Les enseña que la tristeza se puede compartir.',
        'Los chicos viven el duelo a ratos: pueden llorar y al rato jugar.',
      ],
      sections: [
        {
          heading: 'Cómo entienden la muerte',
          paragraphs: [
            'Los chicos tardan en entender tres ideas. Que la muerte es para siempre. Que el cuerpo deja de funcionar. Y que todos los seres vivos mueren. Muchos lo entienden entre los cinco y los siete años (Speece y Brent, 1984).',
            'Antes de eso, pueden preguntar lo mismo muchas veces. «¿Cuándo vuelve el abuelo?». No es que no escuchen. Es su forma de entender. Responde con paciencia cada vez.',
          ],
        },
        {
          heading: 'Palabras claras',
          paragraphs: [
            'Di la verdad con palabras simples: «El abuelo murió. Su cuerpo dejó de funcionar y ya no siente dolor». Frases como «se durmió» pueden dar miedo a dormir. «Se fue» puede hacer pensar que va a volver.',
            'Si no sabes algo, puedes decirlo: «No lo sé. ¿Tú qué piensas?». Si tu familia tiene creencias religiosas, puedes compartirlas. Pero también di lo concreto: que no va a volver.',
          ],
        },
        {
          heading: 'Acompañar el duelo',
          paragraphs: [
            'Los chicos viven el duelo a ratos. Pueden llorar y al rato pedir jugar. No es falta de cariño. Es su forma de cuidarse (Dyregrov, 2008).',
            'Mantén las rutinas lo más posible. Dan seguridad. Invítalo a participar en algo: hacer un dibujo, elegir una foto, ir a la despedida si quiere.',
            'Está bien que te vea triste. Puedes decir: «Estoy triste porque lo extraño. Llorar me ayuda». Así aprende que la tristeza se puede compartir.',
          ],
        },
      ],
      phrases: ['«El abuelo murió. Su cuerpo dejó de funcionar y no va a volver»', '«Puedes preguntarme todas las veces que quieras»', '«Yo también estoy triste. Podemos extrañarlo juntos»', '«No fue tu culpa. Nada de lo que pensaste o hiciste causó esto»'],
      caveat: {
        title: 'Cuándo pedir ayuda',
        body: 'Consulta con un profesional si pasan meses y tu hijo o hija no puede volver a sus rutinas, si tiene mucho miedo de que tú mueras, si deja de comer o dormir, o si habla de querer morirse para estar con quien murió. Ante un riesgo inmediato, llama al 911.',
      },
      activities: ['como-me-siento', 'colores-de-mis-emociones', 'emociones-en-el-cuerpo', 'mano-en-el-corazon', 'pedir-ayuda'],
      references: [SPEECE_1984, DYREGROV_2008],
    },
    {
      id: 'neurodivergentes-en-casa',
      title: 'Chicos neurodivergentes en casa',
      subtitle: 'Rutinas, sentidos y paciencia para chicos con TDAH, autismo u otras formas de funcionar.',
      readingMin: 6,
      keyPoints: [
        'Tu hijo o hija no se porta mal a propósito: su cerebro funciona distinto.',
        'Las rutinas claras y visibles bajan el estrés de toda la familia.',
        'Conocer qué le molesta a sus sentidos ayuda a prevenir desbordes.',
        'Mira sus fortalezas tanto como sus dificultades.',
      ],
      sections: [
        {
          heading: 'Otra forma de funcionar',
          paragraphs: [
            'Algunos chicos se distraen más, se mueven más o les cuesta frenar. Otros sienten los ruidos y las texturas muy fuerte, o necesitan que todo sea igual. No lo hacen para molestar. Su cerebro procesa el mundo de otra manera (Pellicano y den Houting, 2022).',
            'La idea no es cambiar quién es. Es ayudarle a moverse en un mundo que no siempre está pensado para él o ella.',
          ],
        },
        {
          heading: 'Rutinas que se ven',
          paragraphs: [
            'Muchos chicos se calman cuando saben qué viene. Arma una rutina con dibujos o fotos. Por ejemplo: levantarse, vestirse, desayunar, mochila.',
            'Avisa los cambios con tiempo: «Después de la merienda vamos al médico». Usa un reloj o una alarma para que vea cuánto falta.',
            'Da una instrucción por vez, con pocas palabras. Mírale a los ojos o tócale el hombro antes de hablar, si le resulta cómodo. Elogia en el momento lo que salió bien (Chronis y colaboradores, 2006).',
          ],
        },
        {
          heading: 'Cuidar los sentidos',
          paragraphs: [
            'Fíjate qué le molesta: etiquetas de la ropa, ruido, luces fuertes, olores. Y qué le calma: moverse, apretar algo, un rincón tranquilo.',
            'Arma con tu hijo o hija un rincón de calma con lo que le sirve. No es un castigo. Es un lugar para recargar cuando todo es demasiado.',
          ],
        },
        {
          heading: 'Cuidarte tú',
          paragraphs: [
            'Criar a un chico neurodivergente puede ser muy cansador. Busca apoyo en otras familias, en la escuela y en profesionales. Cuidarte no es egoísmo. Es lo que te permite seguir acompañando.',
          ],
        },
      ],
      phrases: ['«Primero los zapatos, después salimos»', '«En diez minutos cambiamos. Mira el reloj»', '«¿Es mucho ruido? Vamos a tu rincón un ratito»', '«Me encanta cómo sabes tanto de dinosaurios»'],
      caveat: {
        title: 'Diagnóstico y apoyo',
        body: 'Esta guía no sirve para diagnosticar. Si notas que a tu hijo o hija le cuesta mucho más que a otros chicos de su edad, consulta con el pediatra. Una evaluación con un equipo especializado puede abrir la puerta a apoyos en casa y en la escuela.',
      },
      activities: ['anticipar-cambios', 'detective-de-sentidos', 'tortuga', 'respiracion-del-oso', 'elegir-entre-dos', 'mi-cuerpo-en-alerta'],
      references: [PELLICANO_2022, CHRONIS_2006],
    },
  ],

  // ================================================================== glosario
  glossary: [
    {
      id: 'burnout',
      term: 'Burnout (desgaste laboral)',
      definition: 'Desgaste causado por un estrés laboral crónico que no se manejó bien. Tiene tres caras: agotamiento, distancia o cinismo hacia el trabajo y sensación de baja eficacia.',
      articleId: 'burnout-seis-areas',
      practiceId: 'mapa-seis-areas',
    },
    {
      id: 'desconexion-psicologica',
      term: 'Desconexión psicológica',
      definition: 'Dejar de pensar en el trabajo durante el tiempo libre, no solo dejar de hacerlo. Es uno de los factores que más ayudan a recuperarse del estrés laboral.',
      articleId: 'burnout-seis-areas',
      practiceId: 'cierre-de-jornada',
    },
    {
      id: 'rediseno-del-puesto',
      term: 'Rediseño del puesto (job crafting)',
      definition: 'Cambios que una persona hace por iniciativa propia en sus tareas, sus vínculos o la forma de mirar su trabajo, para que se ajuste mejor a sus fortalezas y valores.',
      articleId: 'burnout-seis-areas',
      practiceId: 'redisenar-mi-trabajo',
    },
    {
      id: 'dosificar-actividad',
      term: 'Ritmo de actividad (pacing)',
      definition: 'Estrategia para el dolor o la fatiga crónicos: hacer cada actividad por un tiempo fijo, con pausas y aumentos graduales, en vez de hacer de más en los días buenos.',
      articleId: 'dolor-cronico-act',
      practiceId: 'ritmo-de-actividad',
    },
    {
      id: 'funciones-ejecutivas',
      term: 'Funciones ejecutivas',
      definition: 'Habilidades mentales para planificar, empezar tareas, recordar lo que sigue, frenar impulsos y cambiar de plan. En el TDAH suelen costar más.',
      articleId: 'neurodiversidad-adultos',
      practiceId: 'andamios-ejecutivos',
    },
    {
      id: 'cuerpo-doble',
      term: 'Cuerpo doble',
      definition: 'Estrategia de la comunidad TDAH: trabajar al lado de otra persona, en persona o por video, para que sea más fácil empezar y sostener una tarea.',
      articleId: 'neurodiversidad-adultos',
      practiceId: 'andamios-ejecutivos',
    },
    {
      id: 'paradigma-neurodiversidad',
      term: 'Neurodiversidad',
      definition: 'Idea de que los cerebros humanos varían de forma natural. Ve el autismo, el TDAH y otras condiciones como formas distintas de funcionar, con fortalezas y necesidades de apoyo.',
      articleId: 'neurodiversidad-adultos',
      practiceId: 'mapa-sensorial',
    },
  ],
};
