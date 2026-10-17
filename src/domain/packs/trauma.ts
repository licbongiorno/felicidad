import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Trauma y estrés postraumático»: SÓLO psicoeducación y estabilización.
 *  - qué es una experiencia traumática y qué reacciones son esperables después (Bonanno);
 *  - estrés postraumático: reexperimentar, evitar, alerta y cambios en el ánimo; cuándo consultar;
 *  - ventana de tolerancia (Siegel), hiperactivación e hipoactivación (Ogden, Minton y Pain);
 *  - anclaje y estabilización: orientarse en el presente, contención, lugar seguro breve con salida;
 *  - sueño y pesadillas: qué hacer al despertar; el ensayo en imaginación existe y se hace con
 *    un profesional (Krakow);
 *  - cómo acompañar a alguien que vivió un trauma (Hobfoll y colaboradores);
 *  - tratamientos con evidencia (TCC focalizada en el trauma, procesamiento cognitivo, exposición
 *    prolongada, EMDR), descritos pero nunca aplicados.
 *
 * Reglas de seguridad del paquete: ninguna práctica pide recordar, contar ni escribir el hecho
 * traumático. No hay exposición a recuerdos ni movimientos oculares. Todas las prácticas tienen
 * salida («puedes parar cuando quieras») y remiten a consulta. El programa no usa la escritura
 * expresiva, porque invitaría a escribir sobre el hecho.
 */

// ------------------------------------------------------------ referencias
const HERMAN_1992: Reference = { citation: 'Herman, J. L. (1992). Trauma and recovery. Basic Books.' };
const SIEGEL_1999: Reference = { citation: 'Siegel, D. J. (1999). The developing mind: Toward a neurobiology of interpersonal experience. Guilford Press.' };
const OGDEN_2006: Reference = { citation: 'Ogden, P., Minton, K., & Pain, C. (2006). Trauma and the body: A sensorimotor approach to psychotherapy. W. W. Norton.' };
const NICE_2018: Reference = { citation: 'National Institute for Health and Care Excellence. (2018). Post-traumatic stress disorder (NICE guideline NG116). NICE.' };
const APA_2013: Reference = { citation: 'American Psychiatric Association. (2013). Diagnostic and statistical manual of mental disorders (5.ª ed.). American Psychiatric Publishing.' };
const BONANNO_2004: Reference = {
  citation:
    'Bonanno, G. A. (2004). Loss, trauma, and human resilience: Have we underestimated the human capacity to thrive after extremely aversive events? American Psychologist, 59(1), 20–28.',
  doi: '10.1037/0003-066X.59.1.20',
};
const HOBFOLL_2007: Reference = {
  citation:
    'Hobfoll, S. E., Watson, P., Bell, C. C., Bryant, R. A., Brymer, M. J., Friedman, M. J., Friedman, M., Gersons, B. P. R., de Jong, J. T. V. M., Layne, C. M., Maguen, S., Neria, Y., Norwood, A. E., Pynoos, R. S., Reissman, D., Ruzek, J. I., Shalev, A. Y., Solomon, Z., Steinberg, A. M., & Ursano, R. J. (2007). Five essential elements of immediate and mid-term mass trauma intervention: Empirical evidence. Psychiatry: Interpersonal and Biological Processes, 70(4), 283–315.',
  doi: '10.1521/psyc.2007.70.4.283',
};
const KRAKOW_2001: Reference = {
  citation:
    'Krakow, B., Hollifield, M., Johnston, L., Koss, M., Schrader, R., Warner, T. D., Tandberg, D., Lauriello, J., McBride, L., Cutchen, L., Cheng, D., Emmons, S., Germain, A., Melendrez, D., Sandoval, D., & Prince, H. (2001). Imagery rehearsal therapy for chronic nightmares in sexual assault survivors with posttraumatic stress disorder: A randomized controlled trial. JAMA, 286(5), 537–545.',
  doi: '10.1001/jama.286.5.537',
};
const BISSON_2013: Reference = {
  citation:
    'Bisson, J. I., Roberts, N. P., Andrew, M., Cooper, R., & Lewis, C. (2013). Psychological therapies for chronic post-traumatic stress disorder (PTSD) in adults. Cochrane Database of Systematic Reviews, (12), CD003388.',
};
const EHLERS_2000: Reference = {
  citation: 'Ehlers, A., & Clark, D. M. (2000). A cognitive model of posttraumatic stress disorder. Behaviour Research and Therapy, 38(4), 319–345.',
  doi: '10.1016/S0005-7967(99)00123-0',
};
const RESICK_1992: Reference = {
  citation: 'Resick, P. A., & Schnicke, M. K. (1992). Cognitive processing therapy for sexual assault victims. Journal of Consulting and Clinical Psychology, 60(5), 748–756.',
  doi: '10.1037/0022-006X.60.5.748',
};
const FOA_2007: Reference = {
  citation: 'Foa, E. B., Hembree, E. A., & Rothbaum, B. O. (2007). Prolonged exposure therapy for PTSD: Emotional processing of traumatic experiences. Therapist guide. Oxford University Press.',
};
const SHAPIRO_2018: Reference = {
  citation: 'Shapiro, F. (2018). Eye movement desensitization and reprocessing (EMDR) therapy: Basic principles, protocols, and procedures (3.ª ed.). Guilford Press.',
};

/** Aviso común: no se trabaja el recuerdo, hay salida y se consulta si hace falta. */
const SEGURIDAD =
  'Esta práctica no te pide recordar ni contar lo que pasó. Si aparece un recuerdo, abre los ojos, mira a tu alrededor y nota los pies en el piso. Si el malestar no baja, si te desconectas mucho o si piensas en hacerte daño, pide ayuda: Línea Nacional de Salud Mental 0800-999-0091, 135 o el botón Ayuda de la app. Ante un peligro, llama al 911.';

export const TRAUMA_PACK: ContentPack = {
  id: 'trauma',

  // ================================================================== prácticas
  practices: [
    {
      id: 'orientarme-en-el-presente',
      title: 'Volver al aquí y ahora',
      family: 'attentional',
      skills: ['attention', 'resilience'],
      summary: 'Una herramienta breve de anclaje: mirar a tu alrededor, nombrar dónde estás y qué día es, y sentir el apoyo del cuerpo.',
      mechanism:
        'Cuando un recuerdo o una alarma te llevan al pasado, orientarte con los sentidos le muestra al cuerpo que ahora estás en otro lugar y en otro momento.',
      evidenceLevel: 'preliminar',
      evidence: [OGDEN_2006, HERMAN_1992],
      micro: true,
      howItWorks: [
        'Después de una experiencia traumática, el cuerpo puede reaccionar como si el peligro siguiera ocurriendo. Un ruido, un olor o una imagen bastan para encender la alarma.',
        'Orientarse es usar los sentidos para ubicarse en el presente: dónde estás, qué día es, qué ves y qué tocas. Judith Herman describió la seguridad y la estabilización como el primer paso de la recuperación, antes de cualquier otro trabajo (Herman, 1992).',
        'Es una herramienta para el momento. No borra lo que pasó, pero puede bajar la intensidad lo suficiente para que elijas qué hacer después.',
      ],
      tips: [
        'Hazla con los ojos abiertos. Mirar el lugar es parte de la práctica.',
        'Di las cosas en voz alta si puedes: la voz también te ancla.',
        'Lleva un objeto chico en el bolsillo, como una piedra o una llave, para tocarlo.',
      ],
      obstacles: [
        { q: 'No me sirve, la alarma sigue.', a: 'A veces hace falta repetirla dos o tres veces. Si igual no baja, levántate, camina y toma agua fría. Si sigue, pide ayuda.' },
      ],
      cautions: SEGURIDAD,
      steps: [
        { title: 'Pies', instruction: 'Apoya los pies en el piso. Empuja un poco hacia abajo y siente el suelo.', durationSec: 20, kind: 'instruction' },
        { title: 'Mirar', instruction: 'Mira a tu alrededor. Nombra cinco cosas que ves, despacio.', durationSec: 35, kind: 'instruction' },
        { title: 'Dónde y cuándo', instruction: 'Dite dónde estás. Dite qué día es y qué hora es, más o menos.', durationSec: 25, kind: 'instruction' },
        { title: 'Tocar', instruction: 'Toca algo cerca: la silla, la ropa, una mesa. Nota si es frío, suave o duro.', durationSec: 25, kind: 'instruction' },
        { title: 'Oír', instruction: 'Escucha tres sonidos de ahora. Un auto, una voz, el viento.', durationSec: 25, kind: 'instruction' },
        { title: 'Ahora', instruction: 'Dite: «Esto es un recuerdo. Ahora estoy aquí». Respira despacio dos veces.', durationSec: 25, kind: 'breath' },
      ],
    },
    {
      id: 'mi-ventana-de-tolerancia',
      title: 'Mi ventana de tolerancia',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Armar tu propio mapa: cómo notas que te aceleras de más o que te apagas, y qué te ayuda a volver.',
      mechanism:
        'Conocer tus señales de hiperactivación e hipoactivación te permite usar una herramienta antes de desbordarte. Lo que se nota temprano se regula mejor.',
      evidenceLevel: 'preliminar',
      evidence: [SIEGEL_1999, OGDEN_2006],
      howItWorks: [
        'Daniel Siegel llamó «ventana de tolerancia» a la zona en la que puedes sentir emociones fuertes y seguir pensando con claridad (Siegel, 1999). Dentro de la ventana, el malestar se puede atravesar.',
        'Por arriba está la hiperactivación: corazón rápido, enojo, pánico, no poder quedarse quieto. Por abajo está la hipoactivación: sentirse apagado, lejos, entumecido o en blanco. Pat Ogden y su equipo describen cómo el trauma puede achicar esa ventana (Ogden y colaboradores, 2006).',
        'La ventana no es fija. Dormir, comer, moverse y estar con gente de confianza la agrandan. El estrés y el cansancio la achican.',
      ],
      tips: [
        'Piensa en señales del cuerpo, no sólo en emociones.',
        'Para arriba sirven cosas que calman: respirar lento, agua fría, caminar.',
        'Para abajo sirven cosas que activan: moverse, mirar colores, oler algo fuerte, hablar con alguien.',
      ],
      obstacles: [
        { q: 'Paso de un extremo al otro muy rápido.', a: 'Es común después de un trauma. Anota igual las señales tempranas. Con la práctica se notan antes. Un profesional puede ayudarte a ampliar la ventana.' },
      ],
      cautions: SEGURIDAD,
      steps: [
        { title: 'Llegar', instruction: 'Siéntate con los pies en el piso. Mira el lugar donde estás.', durationSec: 30, kind: 'instruction' },
        { title: 'Dentro', instruction: '¿Cómo te sientes cuando estás bien, dentro de la ventana? Anota dos o tres señales.', durationSec: 60, kind: 'reflection' },
        { title: 'Arriba', instruction: '¿Qué notas cuando te aceleras de más? Piensa en el corazón, la respiración, los puños. Anótalo.', durationSec: 60, kind: 'reflection' },
        { title: 'Abajo', instruction: '¿Qué notas cuando te apagas? Quizás te sientes lejos, pesado o en blanco. Anótalo.', durationSec: 60, kind: 'reflection' },
        { title: 'Para bajar', instruction: 'Anota dos cosas que te calman cuando estás arriba. Por ejemplo, respirar lento o agua fría.', durationSec: 45, kind: 'reflection' },
        { title: 'Para subir', instruction: 'Anota dos cosas que te activan cuando estás abajo. Por ejemplo, caminar o hablar con alguien.', durationSec: 45, kind: 'reflection' },
        { title: 'Guardar', instruction: 'Guarda este mapa en el celular. Respira despacio y mira otra vez a tu alrededor.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'contenedor-imaginario',
      title: 'Guardar por ahora',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Imaginar un lugar donde dejar guardado, por un rato, lo que te inquieta, para poder seguir con tu día. Sin abrirlo ni mirar adentro.',
      mechanism:
        'La contención no borra ni resuelve nada. Te da permiso para dejar algo de lado por un tiempo, hasta un momento más seguro o hasta tu próxima consulta.',
      evidenceLevel: 'preliminar',
      evidence: [HERMAN_1992, OGDEN_2006],
      howItWorks: [
        'Muchas terapias del trauma usan ejercicios de contención en la etapa de estabilización. La idea es poder elegir cuándo ocuparte de algo difícil, en lugar de que te ocupe todo el día.',
        'No hace falta mirar ni nombrar lo que guardas. Basta con decir «esto» o «lo que me inquieta». El contenido queda cerrado.',
        'Es un recurso para el día a día, no un tratamiento. Si lo que guardas vuelve con mucha fuerza, es una señal para consultar.',
      ],
      tips: [
        'Elige un recipiente que te dé confianza: una caja con candado, una caja fuerte, un frasco.',
        'Si imaginar te cuesta, dibújalo o usa una caja real.',
        'Puedes decirte cuándo lo vas a volver a mirar, por ejemplo con tu terapeuta.',
      ],
      obstacles: [
        { q: 'Se me vuelve a abrir.', a: 'Es esperable. Vuelve a cerrarlo con calma, sin pelear. Si pasa mucho, haz una práctica de anclaje y consulta.' },
      ],
      cautions: SEGURIDAD + ' Si imaginar te pone peor, deja esta práctica y usa una con los ojos abiertos, como «Volver al aquí y ahora».',
      steps: [
        { title: 'Llegar', instruction: 'Siéntate con los pies en el piso. Puedes dejar los ojos abiertos.', durationSec: 30, kind: 'instruction' },
        { title: 'El recipiente', instruction: 'Imagina un recipiente fuerte que se pueda cerrar bien. Una caja, un baúl, una caja fuerte.', durationSec: 40, kind: 'instruction' },
        { title: 'Cómo es', instruction: 'Fíjate en su color, su tamaño y su cierre. Hazlo tan fuerte como necesites.', durationSec: 40, kind: 'instruction' },
        { title: 'Guardar', instruction: 'Pon adentro lo que te inquieta, sin mirarlo. Basta con pensar «esto va aquí».', durationSec: 45, kind: 'instruction' },
        { title: 'Cerrar', instruction: 'Cierra la tapa. Ponle llave si quieres. Nota cómo queda cerrado.', durationSec: 30, kind: 'instruction' },
        { title: 'Dónde queda', instruction: 'Elige dónde dejarlo, lejos de ti. Recuerda que puedes abrirlo más tarde, con ayuda.', durationSec: 30, kind: 'instruction' },
        { title: 'Volver', instruction: 'Mira a tu alrededor. Nombra tres cosas que ves y mueve las manos.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'lugar-seguro-breve',
      title: 'Un lugar tranquilo, con la puerta abierta',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Imaginar unos minutos un lugar tranquilo, real o inventado, sabiendo siempre cómo salir. Breve, con los ojos abiertos si prefieres.',
      mechanism:
        'Evocar un lugar tranquilo con los sentidos puede bajar la activación. Saber que hay una salida mantiene la sensación de control.',
      evidenceLevel: 'preliminar',
      evidence: [OGDEN_2006, HERMAN_1992],
      howItWorks: [
        'El «lugar seguro» es un ejercicio de imaginación muy usado en la etapa de estabilización. Se busca un lugar donde el cuerpo se sienta tranquilo y se lo recorre con los sentidos.',
        'Para algunas personas la palabra «seguro» no encaja, sobre todo si nunca se sintieron a salvo. Por eso aquí se habla de un lugar «tranquilo» o «un poco mejor». Puede ser inventado.',
        'Es breve a propósito. Y tiene una salida clara: abrir los ojos, mirar el lugar real y mover el cuerpo. Si en la imagen aparece algo que no te gusta, sales.',
      ],
      tips: [
        'Puede ser un lugar de la naturaleza, un rincón de tu casa o algo de una película.',
        'Si no aparece ningún lugar, imagina sólo un color o una manta.',
        'Evita lugares ligados a personas o momentos difíciles.',
      ],
      obstacles: [
        { q: 'Se me mezcló algo feo en la imagen.', a: 'Sal enseguida: abre los ojos, nombra lo que ves y toca algo. No es un fracaso. Prueba otro día con otro lugar, o quédate con las prácticas de ojos abiertos.' },
      ],
      cautions:
        SEGURIDAD + ' Si cerrar los ojos o imaginar te angustia, no hagas esta práctica sin acompañamiento. Usa «Cinco sentidos» o «Volver al aquí y ahora».',
      steps: [
        { title: 'La salida', instruction: 'Antes de empezar, recuerda tu salida. Abrir los ojos, mirar el lugar y mover las manos.', durationSec: 25, kind: 'instruction' },
        { title: 'Llegar', instruction: 'Busca una posición cómoda. Cierra los ojos o mira un punto fijo en el piso.', durationSec: 20, kind: 'breath' },
        { title: 'El lugar', instruction: 'Trae un lugar tranquilo, real o inventado. No tiene que ser perfecto, sólo un poco mejor.', durationSec: 35, kind: 'instruction' },
        { title: 'Ver y oír', instruction: '¿Qué colores hay? ¿Qué sonidos? Quédate con lo que te calma.', durationSec: 40, kind: 'instruction' },
        { title: 'Sentir', instruction: '¿Hace frío o calor? ¿Qué tocan tus manos? Nota cómo responde el cuerpo.', durationSec: 40, kind: 'instruction' },
        { title: 'Una palabra', instruction: 'Elige una palabra para este lugar. Te sirve para volver a él otro día.', durationSec: 25, kind: 'reflection' },
        { title: 'Salir', instruction: 'Abre los ojos. Mira el lugar real, nombra tres cosas y mueve los pies.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'despues-de-una-pesadilla',
      title: 'Al despertar de una pesadilla',
      family: 'attentional',
      skills: ['resilience', 'attention'],
      summary: 'Qué hacer en los primeros minutos después de una pesadilla: luz, orientación, el cuerpo y una frase para volver al presente. Sin repasar el sueño.',
      mechanism:
        'Al despertar de una pesadilla el cuerpo sigue en alarma. Orientarte en el cuarto y en la hora le ayuda a notar que fue un sueño y que ahora estás aquí.',
      evidenceLevel: 'preliminar',
      evidence: [OGDEN_2006, KRAKOW_2001],
      micro: true,
      howItWorks: [
        'Las pesadillas son muy frecuentes después de un trauma. Al despertar, el corazón late rápido y cuesta saber dónde estás.',
        'Esta herramienta no trabaja el contenido del sueño. Sólo ayuda a salir de la alarma y a volver a la cama, o a levantarte un rato si no puedes dormir.',
        'Si las pesadillas se repiten, existe un tratamiento llamado ensayo en imaginación. Un ensayo controlado mostró que reduce las pesadillas en personas con estrés postraumático (Krakow y colaboradores, 2001). Se hace con un profesional, no a solas.',
      ],
      tips: [
        'Deja una luz chica cerca de la cama, fácil de prender.',
        'Ten un vaso de agua en la mesa de luz.',
        'Si no te dormiste en un rato, levántate y haz algo tranquilo con poca luz.',
        'Cuida el resto del sueño: horarios parecidos, poca cafeína de tarde y menos pantallas de noche.',
      ],
      obstacles: [
        { q: '¿No debería entender qué significa el sueño?', a: 'Ahora no. En plena noche lo que ayuda es calmar el cuerpo. Si las pesadillas siguen, consulta: hay tratamientos que las reducen.' },
      ],
      cautions: SEGURIDAD,
      steps: [
        { title: 'Luz', instruction: 'Prende una luz. Siéntate en la cama y apoya los pies en el piso.', durationSec: 20, kind: 'instruction' },
        { title: 'Dónde estás', instruction: 'Mira el cuarto. Nombra tres cosas tuyas que ves.', durationSec: 30, kind: 'instruction' },
        { title: 'Qué hora es', instruction: 'Mira la hora. Dite qué día es hoy y en qué año estás.', durationSec: 20, kind: 'instruction' },
        { title: 'Fue un sueño', instruction: 'Dite: «Fue una pesadilla. Ya pasó. Ahora estoy aquí, en mi cuarto».', durationSec: 20, kind: 'instruction' },
        { title: 'Agua', instruction: 'Toma unos tragos de agua fresca. Nota el frío en la boca.', durationSec: 25, kind: 'instruction' },
        { title: 'Respirar', instruction: 'Respira lento. Que la exhalación dure un poco más que la inhalación.', durationSec: 45, kind: 'breath' },
      ],
    },
    {
      id: 'acompanar-tras-un-trauma',
      title: 'Acompañar a alguien que vivió algo muy duro',
      family: 'constructive',
      skills: ['compassion'],
      summary: 'Prepararte para acompañar a un familiar o amigo después de un hecho traumático: dar calma, ayuda concreta y compañía, sin pedir detalles.',
      mechanism:
        'Después de un trauma ayudan cinco cosas: sentirse a salvo, calmarse, sentirse capaz, estar conectado con otros y tener esperanza. Quien acompaña puede aportar a todas.',
      evidenceLevel: 'moderada',
      evidence: [HOBFOLL_2007, BONANNO_2004],
      howItWorks: [
        'Stevan Hobfoll y un grupo de especialistas revisaron la evidencia sobre qué ayuda después de desastres y hechos traumáticos. Propusieron cinco elementos: seguridad, calma, sentido de eficacia propia y de la comunidad, conexión y esperanza (Hobfoll y colaboradores, 2007).',
        'No hace falta que la persona cuente lo que pasó. Presionar para que hable puede hacer daño. Ayuda más estar, escuchar si quiere hablar y ofrecer cosas concretas: comida, compañía, ayuda con trámites o con los chicos.',
        'Muchas personas se recuperan con el tiempo y el apoyo de su entorno (Bonanno, 2004). Si después de un mes sigue muy mal, o si hay riesgo, ayúdala a consultar.',
      ],
      tips: [
        'Pregunta qué necesita, en lugar de suponer.',
        'Si cuenta algo, escucha sin juzgar y sin comparar con otras historias.',
        'Evita frases como «ya pasó» o «tienes que superarlo».',
        'Cuídate tú también. Acompañar cansa.',
      ],
      obstacles: [
        { q: 'No sé qué decir.', a: 'No hace falta decir algo perfecto. «Estoy aquí», «cuenta conmigo» o «¿qué te vendría bien hoy?» alcanzan.' },
      ],
      cautions:
        'Si la persona habla de quitarse la vida, no la dejes sola y llama al 135 o al 911. Si el trauma es violencia de género, la Línea 144 orienta. Si es un chico o adolescente, la Línea 102.',
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en la persona que quieres acompañar.', durationSec: 30, kind: 'breath' },
        { title: 'Seguridad', instruction: '¿Está a salvo ahora? ¿Tiene dónde dormir y qué comer? Anota qué podría faltar.', durationSec: 60, kind: 'reflection' },
        { title: 'Calma', instruction: '¿Qué la calma? Quizás tu compañía, un mate, una caminata o un rato en silencio.', durationSec: 45, kind: 'reflection' },
        { title: 'Poder hacer', instruction: '¿Qué puede decidir o hacer por sí misma? Anota cómo ayudarla sin hacer todo por ella.', durationSec: 45, kind: 'reflection' },
        { title: 'Conexión', instruction: '¿Quién más puede estar cerca? Familia, amigos, un grupo. Anota uno o dos nombres.', durationSec: 45, kind: 'reflection' },
        { title: 'Esperanza', instruction: 'Piensa una frase simple para darle. Por ejemplo: «Esto es muy duro. Estoy contigo».', durationSec: 40, kind: 'reflection' },
        { title: 'Tu cuidado', instruction: 'Anota una cosa que harás esta semana para cuidarte tú.', durationSec: 30, kind: 'reflection' },
      ],
    },
  ],

  meta: {
    'orientarme-en-el-presente': { level: 'iniciacion', approaches: ['mindfulness', 'dbt'], module: 'afrontamiento' },
    'mi-ventana-de-tolerancia': { level: 'iniciacion', approaches: ['mindfulness', 'tcc'], module: 'emociones' },
    'contenedor-imaginario': {
      level: 'intermedio',
      approaches: ['relajacion'],
      module: 'afrontamiento',
      prerequisites: ['orientarme-en-el-presente'],
      risk: { level: 2, alternative: 'plantas-de-los-pies' },
    },
    'lugar-seguro-breve': {
      level: 'intermedio',
      approaches: ['relajacion'],
      module: 'afrontamiento',
      prerequisites: ['orientarme-en-el-presente'],
      risk: { level: 2, alternative: 'cinco-sentidos' },
    },
    'despues-de-una-pesadilla': { level: 'iniciacion', approaches: ['mindfulness', 'tcc'], module: 'sueno' },
    'acompanar-tras-un-trauma': { level: 'iniciacion', approaches: ['humanista', 'interpersonal'], module: 'relaciones' },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'trauma-y-estres-postraumatico',
      title: 'Trauma y estrés postraumático: entender y estabilizar',
      subtitle: 'Qué reacciones son esperables después de algo muy duro, cuándo consultar, cómo calmar el cuerpo y qué tratamientos tienen evidencia.',
      category: 'Fundamentos',
      readingMin: 10,
      keyPoints: [
        'Después de un hecho traumático es esperable sentir miedo, alerta, tristeza o confusión por un tiempo.',
        'Muchas personas se recuperan con el tiempo y con apoyo.',
        'Si los síntomas duran más de un mes o te impiden vivir, consulta: el estrés postraumático tiene tratamiento.',
        'La ventana de tolerancia ayuda a reconocer cuándo te aceleras de más o te apagas.',
        'Aquí sólo hay estabilización. Trabajar los recuerdos se hace con un profesional.',
      ],
      sections: [
        {
          heading: 'Qué es una experiencia traumática',
          paragraphs: [
            'Una experiencia traumática es vivir, ver o enterarse de algo que pone en peligro la vida o la integridad, propia o de alguien cercano. Por ejemplo, un accidente, una agresión, un abuso, un desastre o una muerte violenta (American Psychiatric Association, 2013).',
            'Judith Herman explica que el trauma rompe la sensación de seguridad y de control, y también la confianza en los demás (Herman, 1992). Por eso la recuperación empieza por volver a sentirse a salvo.',
          ],
        },
        {
          heading: 'Reacciones normales después',
          paragraphs: [
            'En los días y semanas siguientes es común tener recuerdos que aparecen solos, dormir mal, sobresaltarse, estar irritable o sentirse lejos de todo. Son reacciones esperables ante algo anormal, no una señal de debilidad.',
            'George Bonanno mostró que la resiliencia es más común de lo que se creía. Muchas personas atraviesan hechos muy duros y, con el tiempo, vuelven a funcionar bien (Bonanno, 2004). El apoyo de otros, dormir, comer y retomar rutinas ayudan.',
          ],
        },
        {
          heading: 'Estrés postraumático y cuándo consultar',
          paragraphs: [
            'A veces las reacciones no bajan. El trastorno por estrés postraumático tiene cuatro grupos de síntomas. Reexperimentar: recuerdos intrusivos, pesadillas o sentir que pasa otra vez. Evitar: lugares, personas o pensamientos que lo recuerdan. Alerta: sobresaltos, mal sueño, irritabilidad. Cambios en el ánimo y las creencias: culpa, vergüenza, sentirse distinto o desconectado.',
            'Consulta si los síntomas duran más de un mes, si te impiden trabajar, estudiar o estar con otros, si usas alcohol u otras sustancias para aguantar, o si piensas en hacerte daño. En una urgencia llama al 911 o al 135. La Línea Nacional de Salud Mental es el 0800-999-0091.',
          ],
        },
        {
          heading: 'La ventana de tolerancia',
          paragraphs: [
            'Daniel Siegel llamó «ventana de tolerancia» a la zona en la que podemos sentir emociones intensas y seguir pensando (Siegel, 1999). Fuera de la ventana, por arriba, está la hiperactivación: pánico, enojo, el corazón a mil. Por abajo, la hipoactivación: sentirse apagado, entumecido o desconectado.',
            'Después de un trauma la ventana suele achicarse, y se pasa rápido de un extremo al otro (Ogden y colaboradores, 2006). Conocer tus señales tempranas te permite usar una herramienta a tiempo.',
          ],
        },
        {
          heading: 'Anclaje y estabilización',
          paragraphs: [
            'Estabilizar es aprender a volver a la ventana. Orientarte en el presente con los sentidos, apoyar los pies, mirar el lugar y decirte dónde estás ayuda cuando un recuerdo te arrastra. La contención te permite dejar algo «guardado» por un rato. Un lugar tranquilo imaginado, breve y con salida, puede calmar.',
            'El sueño también importa. Horarios parecidos, poca cafeína y una luz a mano para después de una pesadilla son un buen comienzo. Si las pesadillas se repiten, el ensayo en imaginación tiene evidencia (Krakow y colaboradores, 2001), pero se hace con un profesional.',
          ],
        },
        {
          heading: 'Tratamientos con evidencia',
          paragraphs: [
            'El estrés postraumático tiene tratamientos psicológicos eficaces (Bisson y colaboradores, 2013; NICE, 2018). La terapia cognitivo-conductual focalizada en el trauma ayuda a revisar el recuerdo y lo que significó (Ehlers y Clark, 2000). La terapia de procesamiento cognitivo trabaja creencias como la culpa (Resick y Schnicke, 1992). La exposición prolongada ayuda a acercarse de a poco a recuerdos y lugares evitados (Foa y colaboradores, 2007).',
            'El EMDR combina el recuerdo con movimientos de los ojos u otros estímulos alternados (Shapiro, 2018). Todos estos tratamientos se hacen con un profesional formado, en un encuadre seguro. No se deben intentar a solas ni con una aplicación.',
          ],
        },
        {
          heading: 'Si acompañas a alguien',
          paragraphs: [
            'Después de un hecho traumático ayudan cinco cosas: sentirse a salvo, calmarse, sentirse capaz, estar conectado y tener esperanza (Hobfoll y colaboradores, 2007). Puedes aportar presencia, ayuda concreta y paciencia.',
            'No presiones para que cuente lo que pasó. Escucha si quiere hablar, sin juzgar. Si después de un mes sigue muy mal, ayúdala a consultar.',
          ],
        },
      ],
      caveat: {
        title: 'Lo que esta sección no hace',
        body: 'Aquí no se pide recordar, contar ni escribir lo que pasó. No hay exposición a recuerdos ni EMDR: esas técnicas son eficaces, pero se hacen con un profesional. Si vives una situación de violencia, primero importa tu seguridad: Línea 144 o 911. Si piensas en hacerte daño, llama al 135 o usa el botón Ayuda de la app.',
      },
      diagram: {
        title: 'Cómo se mantiene el estrés postraumático',
        nodes: ['Algo recuerda el hecho', 'Alarma en el cuerpo', 'Evitar o desconectarse', 'Alivio breve', 'El recuerdo sigue sin procesar'],
        caption: 'La estabilización baja la alarma. El tratamiento con un profesional ayuda a procesar el recuerdo y cortar el ciclo.',
      },
      related: {
        practices: ['orientarme-en-el-presente', 'mi-ventana-de-tolerancia', 'contenedor-imaginario', 'lugar-seguro-breve', 'despues-de-una-pesadilla', 'acompanar-tras-un-trauma'],
        articles: ['kit-de-crisis', 'sueno-y-bienestar'],
      },
      references: [APA_2013, HERMAN_1992, BONANNO_2004, SIEGEL_1999, OGDEN_2006, HOBFOLL_2007, KRAKOW_2001, BISSON_2013, NICE_2018, EHLERS_2000, RESICK_1992, FOA_2007, SHAPIRO_2018],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'estabilizarme-tras-un-trauma',
      title: 'Volver a sentirme a salvo',
      subtitle: 'Cuatro semanas de estabilización después de algo muy duro',
      description:
        'Aprenderás a notar cuándo te sales de tu ventana de tolerancia y a volver con herramientas de anclaje, contención y descanso. No vas a trabajar el recuerdo: eso se hace con un profesional. Si los síntomas duran más de un mes o te impiden vivir, consulta.',
      basis: 'Herman (1992); Siegel (1999); Ogden, Minton y Pain (2006); Hobfoll y colaboradores (2007).',
      rhythm: '5 a 10 minutos, 4 o 5 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Entender',
          focus: 'Reacciones esperables y anclaje',
          description: 'Leerás qué reacciones son normales después de un trauma y practicarás volver al aquí y ahora.',
          practiceIds: ['orientarme-en-el-presente', 'plantas-de-los-pies'],
          articleIds: ['trauma-y-estres-postraumatico'],
          journalType: 'tres-cosas',
        },
        {
          title: 'Semana 2 · Mi ventana',
          focus: 'Señales de hiperactivación e hipoactivación',
          description: 'Armarás tu mapa de señales y elegirás qué hacer cuando te aceleras o te apagas.',
          practiceIds: ['mi-ventana-de-tolerancia', 'respiracion-resonante'],
          articleIds: [],
          journalType: 'carta-compasiva',
        },
        {
          title: 'Semana 3 · Contener y descansar',
          focus: 'Contención, un lugar tranquilo y el sueño',
          description: 'Probarás guardar lo que inquieta por un rato y cuidarás el sueño y las noches difíciles.',
          practiceIds: ['contenedor-imaginario', 'lugar-seguro-breve', 'despues-de-una-pesadilla'],
          articleIds: [],
          journalType: 'diario-sueno',
        },
        {
          title: 'Semana 4 · Con otros',
          focus: 'Conexión y apoyo',
          description: 'Pensarás a quién puedes pedir apoyo y cómo acompañar a otros. Revisarás si hace falta consultar.',
          practiceIds: ['acompanar-tras-un-trauma', 'pausa-autocompasion'],
          articleIds: [],
          journalType: 'conversacion',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-despues-de-un-trauma',
      title: 'Después de algo muy duro',
      subtitle: 'Qué reacciones son esperables y cuándo consultar.',
      slides: [
        { heading: 'Es esperable', text: 'Después de algo muy duro es normal tener miedo, dormir mal o sobresaltarte. Es el cuerpo que sigue en alerta.' },
        { heading: 'No es debilidad', text: 'Son reacciones comunes ante algo que no es común. Le pasa a mucha gente.' },
        { heading: 'Muchos se recuperan', text: 'Con tiempo, apoyo y rutinas, muchas personas vuelven a sentirse bien. Dormir, comer y estar con otros ayuda.' },
        { heading: 'Cuándo consultar', text: 'Si después de un mes sigues muy mal, si evitas mucho o si no puedes trabajar ni descansar, consulta. Tiene tratamiento.' },
        { heading: 'Si hay riesgo', text: 'Si piensas en hacerte daño, llama al 135 o al 911. También puedes usar el botón Ayuda.' },
      ],
      related: { practices: ['orientarme-en-el-presente'], articles: ['trauma-y-estres-postraumatico'] },
      references: [BONANNO_2004, APA_2013],
    },
    {
      id: 'pildora-ventana-de-tolerancia',
      title: 'Tu ventana de tolerancia',
      subtitle: 'Ni a mil ni sin energía: la zona donde puedes pensar.',
      slides: [
        { heading: 'La ventana', text: 'Es la zona donde puedes sentir mucho y seguir pensando. Dentro de ella, el malestar se puede atravesar.' },
        { heading: 'Por arriba', text: 'Corazón rápido, enojo, pánico. Es la hiperactivación. Ayuda bajar: respirar lento, agua fría, caminar.' },
        { heading: 'Por abajo', text: 'Sentirte lejos, en blanco o apagado. Es la hipoactivación. Ayuda subir: moverte, mirar colores, hablar con alguien.' },
        { heading: 'Se puede agrandar', text: 'Dormir, comer y estar con gente de confianza agrandan la ventana. El estrés la achica.' },
        { heading: 'Tus señales', text: 'Anota cómo te das cuenta de que te sales. Lo que notas temprano se calma mejor.' },
      ],
      related: { practices: ['mi-ventana-de-tolerancia'], articles: ['trauma-y-estres-postraumatico'] },
      references: [SIEGEL_1999, OGDEN_2006],
    },
    {
      id: 'pildora-anclaje',
      title: 'Volver al aquí y ahora',
      subtitle: 'Anclaje cuando un recuerdo te arrastra.',
      slides: [
        { heading: 'El cuerpo se confunde', text: 'Un ruido o un olor pueden encender la alarma. El cuerpo reacciona como si el peligro siguiera.' },
        { heading: 'Pies y ojos', text: 'Apoya los pies en el piso. Mira a tu alrededor y nombra cinco cosas que ves.' },
        { heading: 'Dónde y cuándo', text: 'Dite dónde estás y qué día es. Toca algo cerca y nota cómo es.' },
        { heading: 'Una frase', text: 'Dite: «Esto es un recuerdo. Ahora estoy aquí». Respira lento dos veces.' },
        { heading: 'Si no baja', text: 'Repite, camina o toma agua fría. Si sigue muy fuerte, pide ayuda.' },
      ],
      related: { practices: ['orientarme-en-el-presente', 'despues-de-una-pesadilla'], articles: ['trauma-y-estres-postraumatico'] },
      references: [HERMAN_1992, OGDEN_2006],
    },
    {
      id: 'pildora-tratamientos-trauma',
      title: 'El trauma tiene tratamiento',
      subtitle: 'Qué terapias tienen evidencia y por qué se hacen con un profesional.',
      slides: [
        { heading: 'Hay tratamiento', text: 'El estrés postraumático mejora con terapias psicológicas. Las guías clínicas las recomiendan.' },
        { heading: 'TCC del trauma', text: 'La terapia cognitivo-conductual focalizada en el trauma ayuda a revisar el recuerdo y lo que significó para ti.' },
        { heading: 'Otras opciones', text: 'El procesamiento cognitivo trabaja la culpa. La exposición prolongada ayuda a dejar de evitar. El EMDR también tiene evidencia.' },
        { heading: 'Con un profesional', text: 'Todas trabajan el recuerdo. Por eso se hacen con alguien formado, en un lugar seguro, y no a solas.' },
        { heading: 'Mientras tanto', text: 'Puedes aprender a calmar el cuerpo y a volver al presente. Es un buen primer paso.' },
      ],
      related: { practices: ['orientarme-en-el-presente', 'mi-ventana-de-tolerancia'], articles: ['trauma-y-estres-postraumatico'] },
      references: [NICE_2018, BISSON_2013],
    },
  ],

  // ================================================================== glosario
  glossary: [
    {
      id: 'estres-postraumatico',
      term: 'Estrés postraumático',
      definition: 'Trastorno que puede aparecer después de un hecho traumático. Incluye revivir lo que pasó, evitar lo que lo recuerda, estar en alerta y cambios en el ánimo. Tiene tratamiento.',
      articleId: 'trauma-y-estres-postraumatico',
    },
    {
      id: 'ventana-de-tolerancia',
      term: 'Ventana de tolerancia',
      definition: 'La zona en la que puedes sentir emociones fuertes y seguir pensando con claridad. La describió Daniel Siegel.',
      practiceId: 'mi-ventana-de-tolerancia',
    },
    {
      id: 'hiperactivacion',
      term: 'Hiperactivación',
      definition: 'Estar por encima de la ventana de tolerancia: corazón rápido, pánico, enojo o no poder quedarse quieto.',
      practiceId: 'mi-ventana-de-tolerancia',
    },
    {
      id: 'hipoactivacion',
      term: 'Hipoactivación',
      definition: 'Estar por debajo de la ventana de tolerancia: sentirse apagado, lejos, entumecido o en blanco.',
      practiceId: 'mi-ventana-de-tolerancia',
    },
    {
      id: 'anclaje',
      term: 'Anclaje',
      definition: 'Usar los sentidos y el cuerpo para volver al presente cuando un recuerdo o una emoción te arrastran. Por ejemplo, sentir los pies y nombrar lo que ves.',
      practiceId: 'orientarme-en-el-presente',
    },
    {
      id: 'estabilizacion',
      term: 'Estabilización',
      definition: 'Primera etapa del trabajo con el trauma: recuperar seguridad, calma y rutinas antes de trabajar los recuerdos con un profesional.',
      articleId: 'trauma-y-estres-postraumatico',
    },
  ],
};
