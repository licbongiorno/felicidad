import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Cuidadores»: para familiares y cuidadores de alguien con depresión, consumos
 * problemáticos o un trastorno mental grave (incluida la demencia).
 *  - carga del cuidador y señales de agotamiento (Pinquart y Sörensen);
 *  - comunicar sin pelear con alguien que consume: enfoque CRAFT (Smith y Meyers; Roozen y colaboradores);
 *  - escuchar sin convencer cuando la persona no reconoce el problema: LEAP (Amador);
 *  - límites y autocuidado;
 *  - plan de crisis familiar (135, 0800-999-0091, 911; Ley 26.657 sólo como información);
 *  - culpa y duelo ambiguo (Boss); grupos de apoyo e intervención familiar (Pharoah y colaboradores).
 *
 * Reglas de seguridad del paquete: el cuidador no reemplaza al equipo de salud; no se dan
 * indicaciones de medicación ni de manejo clínico; ante riesgo suicida o violencia se remite
 * a 135, 0800-999-0091 y 911. La internación se explica sólo como información: la decide
 * un equipo de salud según la Ley 26.657, no la familia.
 */

const SMITH_MEYERS_2004: Reference = { citation: 'Smith, J. E., & Meyers, R. J. (2004). Motivating substance abusers to enter treatment: Working with family members. Guilford Press.' };
const ROOZEN_2010: Reference = {
  citation: 'Roozen, H. G., de Waart, R., & van der Kroft, P. (2010). Community reinforcement and family training: An effective option to engage treatment-resistant substance-abusing individuals in treatment. Addiction, 105(10), 1729–1738.',
};
const AMADOR_2000: Reference = { citation: 'Amador, X. (2000). I am not sick, I don’t need help! Vida Press.' };
const PINQUART_2003: Reference = {
  citation: 'Pinquart, M., & Sörensen, S. (2003). Differences between caregivers and noncaregivers in psychological health and physical health: A meta-analysis. Psychology and Aging, 18(2), 250–267.',
  doi: '10.1037/0882-7974.18.2.250',
};
const BOSS_1999: Reference = { citation: 'Boss, P. (1999). Ambiguous loss: Learning to live with unresolved grief. Harvard University Press.' };
const PHAROAH_2010: Reference = {
  citation: 'Pharoah, F., Mari, J., Rathbone, J., & Wong, W. (2010). Family intervention for schizophrenia. Cochrane Database of Systematic Reviews, CD000088.',
};
const LEY_26657: Reference = {
  citation: 'Ley 26.657 (2010). Ley Nacional de Salud Mental. Boletín Oficial de la República Argentina.',
  note: 'La internación es un recurso terapéutico excepcional; la involuntaria sólo procede ante riesgo cierto e inminente y la decide un equipo de salud.',
};

/** Aviso común: riesgo suicida o violencia. */
const CRISIS =
  'Si la persona habla de matarse, se despide o tiene un plan, no la dejes sola y pide ayuda ya. Llama al 135 o al 0800-999-0091. Si hay peligro inmediato, llama al 911. Tu seguridad también importa: si hay violencia, sal del lugar y llama al 911.';

export const CUIDADORES_PACK: ContentPack = {
  id: 'cuidadores',

  // ================================================================== prácticas
  practices: [
    {
      id: 'termometro-del-cuidador',
      title: 'El termómetro de quien cuida',
      family: 'attentional',
      skills: ['attention', 'compassion'],
      summary: 'Revisar con honestidad cómo estás: sueño, cuerpo, ánimo, enojo y aislamiento, y elegir un cuidado para esta semana.',
      mechanism: 'Quien cuida suele notar tarde su propio desgaste. Mirarlo a tiempo permite pedir ayuda antes de llegar al agotamiento.',
      evidenceLevel: 'moderada',
      evidence: [PINQUART_2003],
      howItWorks: [
        'Cuidar a alguien con una enfermedad mental o una demencia es exigente. Un metaanálisis encontró que quienes cuidan tienen más estrés y síntomas de depresión que quienes no cuidan, y algo peor salud física (Pinquart y Sörensen, 2003). La diferencia fue mayor en quienes cuidan a personas con demencia.',
        'El agotamiento llega de a poco. Primero duermes peor, después te irritas más, dejas de ver gente y todo te cuesta. Revisarlo cada tanto ayuda a frenar antes.',
      ],
      tips: [
        'Hazlo una vez por semana, siempre el mismo día.',
        'Si varias respuestas te preocupan, habla con tu médico o con alguien de confianza.',
        'Un cuidado chico y concreto vale más que un plan grande que no cumples.',
      ],
      obstacles: [{ q: 'No tengo tiempo para mí.', a: 'Lo sé. Empieza por diez minutos. Cuidarte no es egoísmo: es lo que te permite seguir cuidando.' }],
      cautions: 'Si sientes que ya no puedes más, si tienes ideas de hacerte daño o de dañar a la persona que cuidas, pide ayuda hoy. Llama al 135 o al 0800-999-0091. Si hay peligro, al 911.',
      steps: [
        { title: 'Llegar', instruction: 'Siéntate. Respira despacio tres veces. Este rato es para ti.', durationSec: 30, kind: 'breath' },
        { title: 'Sueño y cuerpo', instruction: '¿Cómo duermes? ¿Tienes dolores, cansancio o te enfermas más? Anótalo en pocas palabras.', durationSec: 50, kind: 'reflection' },
        { title: 'Ánimo', instruction: '¿Cómo está tu ánimo esta semana? Del cero al diez, ¿cuánto te pesa todo?', durationSec: 40, kind: 'reflection' },
        { title: 'Enojo y culpa', instruction: '¿Te enojas más rápido? ¿Sientes culpa seguido? Anota lo que notes, sin juzgarte.', durationSec: 45, kind: 'reflection' },
        { title: 'Tu gente', instruction: '¿Cuándo fue la última vez que viste a alguien sólo para ti? ¿Qué dejaste de hacer?', durationSec: 45, kind: 'reflection' },
        { title: 'Un cuidado', instruction: 'Elige un cuidado chico para esta semana. Por ejemplo, una caminata, una siesta o una llamada a una amiga.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho. Dite: «Esto es difícil. Yo también merezco cuidado».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'hablar-sin-pelear-con-quien-consume',
      title: 'Hablar sin pelear con quien consume',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Preparar una charla con un familiar que consume, con las ideas del enfoque CRAFT: elegir el momento, hablar en positivo y reforzar lo sobrio.',
      mechanism: 'Pelear y suplicar suele aumentar la distancia. Reforzar los momentos sin consumo y pedir en positivo, en un buen momento, aumenta la chance de que acepte ayuda.',
      evidenceLevel: 'robusta',
      evidence: [SMITH_MEYERS_2004, ROOZEN_2010],
      howItWorks: [
        'CRAFT es un programa para familias de personas con consumos que no quieren tratarse. Fue desarrollado por Jane Ellen Smith y Robert Meyers. Enseña a la familia a cambiar cómo se relaciona, en lugar de pelear o esperar a que la persona «toque fondo» (Smith y Meyers, 2004).',
        'Una revisión encontró que CRAFT logra que más personas empiecen un tratamiento que otros enfoques para familias. También mejora el bienestar de los familiares, aunque la persona no acepte (Roozen y colaboradores, 2010).',
        'Algunas ideas clave: hablar cuando no está bajo efectos, decir lo que sientes en primera persona, pedir algo concreto y disfrutar con la persona los momentos sin consumo. Esta práctica toma esas ideas; el programa completo se hace con un profesional.',
      ],
      tips: [
        'No hables cuando está bajo efectos. Espera otro momento.',
        'Empieza por algo positivo y verdadero: «Me encanta cuando cenamos juntos».',
        'Usa «yo siento» en lugar de «tú siempre».',
        'Ten a mano un dato concreto de dónde pedir ayuda, como la Línea 141 de SEDRONAR.',
      ],
      obstacles: [
        { q: 'Ya lo intenté y no funcionó.', a: 'Es común. CRAFT no es una charla, es una forma de estar que se repite. Y cuidarte a ti sirve igual, aunque la persona no cambie.' },
        { q: 'Se enoja y me grita.', a: 'Corta la charla con calma: «Lo hablamos en otro momento». Si hay violencia, prioriza tu seguridad y llama al 911.' },
      ],
      cautions: CRISIS,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Piensa en la persona y en lo que quieres para ella.', durationSec: 30, kind: 'breath' },
        { title: 'El momento', instruction: '¿Cuándo suele estar sin consumir y más tranquila? Anota un momento posible para hablar.', durationSec: 45, kind: 'reflection' },
        { title: 'Algo positivo', instruction: 'Escribe algo verdadero que valoras de la persona o de un rato juntos. Así vas a empezar.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que sientes', instruction: 'Escribe una frase en primera persona. Por ejemplo: «Me preocupo cuando llegas tarde y no sé dónde estás».', durationSec: 60, kind: 'reflection' },
        { title: 'Un pedido', instruction: 'Escribe un pedido concreto y chico. Por ejemplo: «¿Me acompañas a una consulta, sólo a escuchar?».', durationSec: 60, kind: 'reflection' },
        { title: 'Lo sobrio', instruction: 'Piensa en algo que puedan hacer juntos cuando no consume. Anótalo para proponerlo.', durationSec: 45, kind: 'reflection' },
        { title: 'Si se enoja', instruction: 'Escribe la frase para cortar con calma: «Lo hablamos en otro momento». Respira despacio.', durationSec: 40, kind: 'breath' },
      ],
    },
    {
      id: 'escuchar-sin-convencer',
      title: 'Escuchar sin convencer',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Cuando la persona no cree estar enferma, dejar de discutir y buscar acuerdos, con los pasos del enfoque LEAP: escuchar, empatizar, acordar y trabajar juntos.',
      mechanism: 'Discutir sobre el diagnóstico suele cerrar la conversación. Escuchar y buscar puntos de acuerdo mantiene el vínculo y abre la puerta a la ayuda.',
      evidenceLevel: 'preliminar',
      evidence: [AMADOR_2000],
      howItWorks: [
        'Algunas personas con un trastorno mental grave no reconocen que están enfermas. A veces no es negación: la propia enfermedad afecta esa capacidad. Xavier Amador, psicólogo y hermano de una persona con esquizofrenia, propuso el enfoque LEAP (Amador, 2000).',
        'LEAP tiene cuatro pasos. Escuchar lo que la persona cree, sin discutir. Empatizar con lo que siente. Acordar en lo que se pueda. Trabajar juntos en metas que la persona también quiera, como dormir mejor o volver a trabajar.',
        'No es un tratamiento probado en grandes estudios, pero ordena la conversación. Lo importante es no pelear por la palabra «enfermedad» y cuidar el vínculo.',
      ],
      tips: [
        'Pregunta más y afirma menos: «¿Qué crees que te pasa?».',
        'Puedes empatizar con el sentimiento sin estar de acuerdo con la idea.',
        'Busca metas comunes: dormir, tener más calma, tener menos peleas en casa.',
        'Si te pregunta qué piensas, puedes decirlo con respeto y aclarar que puedes estar equivocado.',
      ],
      obstacles: [{ q: 'Si no le digo que está enfermo, siento que le miento.', a: 'No tienes que mentir. Puedes decir: «Veo las cosas distinto, y quizás me equivoco». Lo que se deja de lado es la pelea, no la verdad.' }],
      cautions: CRISIS,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Recuerda que hoy no buscas ganar una discusión.', durationSec: 30, kind: 'breath' },
        { title: 'Escuchar', instruction: 'Escribe lo que la persona cree que le pasa, con sus palabras. Sin corregirla.', durationSec: 60, kind: 'reflection' },
        { title: 'Empatizar', instruction: 'Piensa qué siente con eso: miedo, enojo, vergüenza. Escribe una frase. Por ejemplo: «Debe ser muy duro sentir que todos te controlan».', durationSec: 60, kind: 'reflection' },
        { title: 'Acordar', instruction: 'Busca algo en lo que estén de acuerdo. Por ejemplo, que duerme mal o que en casa hay muchas peleas.', durationSec: 60, kind: 'reflection' },
        { title: 'Juntos', instruction: 'Elige una meta que la persona también quiera. Escribe cómo podrías proponerle un paso hacia ella.', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Reconoce el esfuerzo que haces por acompañar.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'limites-al-cuidar',
      title: 'Límites para seguir cuidando',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Decidir qué puedes dar y qué no, poner un límite claro y pedir un relevo concreto.',
      mechanism: 'Los límites protegen a quien cuida y también al vínculo. Pedir relevos concretos reparte la carga y baja el agotamiento.',
      evidenceLevel: 'moderada',
      evidence: [PINQUART_2003, SMITH_MEYERS_2004],
      howItWorks: [
        'Quien cuida suele sentir que tiene que poder con todo. Pero la carga sostenida se asocia a más estrés y depresión (Pinquart y Sörensen, 2003). Los límites no son abandono: son lo que permite seguir.',
        'Un límite claro dice qué harás tú, no lo que tiene que hacer el otro. Por ejemplo: «No voy a darte plata para salir» o «Los domingos son mi día libre». En las familias con consumos, dejar de cubrir las consecuencias es parte del enfoque CRAFT (Smith y Meyers, 2004).',
      ],
      tips: [
        'Pide relevos concretos: un día, una tarea, una hora.',
        'Di el límite con calma y pocas palabras. No hace falta justificarlo mucho.',
        'Espera que la persona se queje. No significa que el límite esté mal.',
      ],
      obstacles: [{ q: 'Siento culpa cuando pongo un límite.', a: 'La culpa es esperable cuando cuidas a alguien que quieres. No es una señal de que hiciste mal. Puedes sentir culpa y mantener el límite.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Piensa en una semana común cuidando.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que das', instruction: 'Anota todo lo que haces por la persona. Tareas, horas, plata, llamadas.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que pesa', instruction: 'Marca lo que más te agota o lo que haces sin querer hacerlo.', durationSec: 45, kind: 'reflection' },
        { title: 'Un límite', instruction: 'Elige una sola cosa. Escribe el límite en primera persona. Por ejemplo: «Desde ahora no voy a mentir en tu trabajo por ti».', durationSec: 60, kind: 'reflection' },
        { title: 'Un relevo', instruction: 'Piensa en alguien que pueda ayudarte con algo concreto. Escribe qué le vas a pedir y cuándo.', durationSec: 60, kind: 'reflection' },
        { title: 'Con la culpa', instruction: 'Si aparece culpa, pon una mano en el pecho. Dite: «Cuidarme también es cuidar».', durationSec: 40, kind: 'breath' },
      ],
    },
    {
      id: 'duelo-ambiguo-y-cuidado',
      title: 'Está, pero no está',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Nombrar el duelo ambiguo de cuidar a alguien que cambió, y practicar pensar en «las dos cosas a la vez».',
      mechanism: 'Ponerle nombre a una pérdida que no tiene cierre baja la culpa y la confusión. Pensar «las dos cosas a la vez» ayuda a convivir con la ambigüedad.',
      evidenceLevel: 'preliminar',
      evidence: [BOSS_1999],
      howItWorks: [
        'Pauline Boss llamó duelo ambiguo a una pérdida sin cierre claro. Una forma es cuando alguien está presente en el cuerpo, pero ausente en la mente o en el vínculo, como pasa con la demencia, una depresión grave o una adicción (Boss, 1999).',
        'Este duelo confunde. No hay despedida ni ritual. Muchas personas sienten culpa por extrañar a alguien que sigue vivo. Boss propone pensar «las dos cosas a la vez»: «Mi mamá está y no está». «Lo quiero y estoy agotada».',
      ],
      tips: [
        'Nombrarlo ayuda: «Esto que siento tiene nombre: es duelo ambiguo».',
        'Puedes extrañar a la persona de antes y querer a la de ahora.',
        'Hablarlo con otros cuidadores alivia. No estás solo ni sola en esto.',
      ],
      obstacles: [{ q: 'Me siento mal por pensar en ella como si ya no estuviera.', a: 'Es una reacción muy común ante esta pérdida. No significa que quieras menos a la persona. Significa que extrañas algo real.' }],
      cautions: 'Si la tristeza no te deja funcionar, si dejas de comer o dormir o si piensas en morir, consulta con un profesional. Si tienes ideas de hacerte daño, llama al 135 o al 0800-999-0091.',
      steps: [
        { title: 'Llegar', instruction: 'Pon una mano en el pecho. Respira despacio y siente el calor de la mano.', durationSec: 40, kind: 'breath' },
        { title: 'Lo que cambió', instruction: 'Escribe qué cambió en la persona o en el vínculo. Lo que extrañas de antes.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que sigue', instruction: 'Escribe lo que todavía está: un gesto, una risa, un rato juntos.', durationSec: 60, kind: 'reflection' },
        { title: 'Las dos cosas', instruction: 'Escribe una frase con «y»: «Está y no está». «La quiero y estoy cansada». Léela despacio.', durationSec: 60, kind: 'reflection' },
        { title: 'Nombrar', instruction: 'Dite: «Esto es un duelo. Tiene sentido que duela».', durationSec: 30, kind: 'breath' },
        { title: 'Compartir', instruction: 'Piensa con quién podrías hablar de esto. Un amigo, un grupo de familiares o un profesional.', durationSec: 40, kind: 'reflection' },
      ],
    },
    {
      id: 'plan-de-crisis-en-familia',
      title: 'Un plan de crisis en familia',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Armar, en un momento de calma, un plan con señales de alarma, teléfonos y pasos para una crisis de salud mental en casa.',
      mechanism: 'En una crisis cuesta pensar. Tener el plan escrito antes baja la confusión y ayuda a actuar rápido y seguro.',
      evidenceLevel: 'preliminar',
      evidence: [PHAROAH_2010, LEY_26657],
      howItWorks: [
        'Las intervenciones con familias en la esquizofrenia, que incluyen información y planes ante crisis, se asociaron a menos recaídas e internaciones (Pharoah y colaboradores, 2010). Esta práctica no es esa intervención, pero toma una idea útil: prepararse antes.',
        'El plan incluye señales de alarma, quién del equipo de salud atiende, a qué teléfono llamar y qué hacer con la seguridad. Si hay riesgo de suicidio, llama al 135 o al 0800-999-0091. Si hay peligro inmediato, al 911.',
        'En la Argentina, la Ley 26.657 de Salud Mental dice que la internación es un recurso excepcional. La internación sin consentimiento sólo procede si hay riesgo cierto e inminente, y la decide un equipo de salud, no la familia. Esto es información: ante una crisis, consulta a la guardia o al equipo tratante.',
      ],
      tips: [
        'Arma el plan en calma, y si se puede, junto con la persona.',
        'Pega los teléfonos en la heladera y guárdalos en el celular.',
        'Guarda en un lugar seguro los medicamentos, armas y objetos con filo.',
        'Revisen el plan cada pocos meses.',
      ],
      obstacles: [{ q: 'Me da miedo pensar en una crisis.', a: 'Es normal. Pensarlo en calma no la provoca. Al contrario, te da calma saber qué hacer si pasa.' }],
      cautions: CRISIS,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Haz esto en un momento de calma, no en medio de una crisis.', durationSec: 30, kind: 'breath' },
        { title: 'Señales', instruction: 'Anota las señales que suelen venir antes de una crisis. Por ejemplo, no duerme, deja la medicación o se aísla.', durationSec: 60, kind: 'reflection' },
        { title: 'El equipo', instruction: 'Escribe el nombre y el teléfono de quien atiende a la persona y de la guardia más cercana.', durationSec: 45, kind: 'instruction' },
        { title: 'Los teléfonos', instruction: 'Anota: 135 y 0800-999-0091 si hay riesgo de suicidio. 911 si hay peligro inmediato.', durationSec: 40, kind: 'instruction' },
        { title: 'La seguridad', instruction: 'Piensa qué guardar bajo llave: medicamentos, armas y objetos con filo. Anota dónde.', durationSec: 45, kind: 'reflection' },
        { title: 'Tu red', instruction: 'Escribe a quién puedes llamar para que venga o te acompañe.', durationSec: 40, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Guarda el plan donde lo encuentres rápido. Respira despacio: ya diste un paso.', durationSec: 30, kind: 'breath' },
      ],
    },
  ],

  meta: {
    'termometro-del-cuidador': { level: 'iniciacion', approaches: ['mindfulness', 'cft'], module: 'relaciones' },
    'hablar-sin-pelear-con-quien-consume': { level: 'intermedio', approaches: ['tcc', 'motivacional'], module: 'relaciones', prerequisites: ['dear-man'] },
    'escuchar-sin-convencer': { level: 'intermedio', approaches: ['motivacional', 'humanista'], module: 'relaciones' },
    'limites-al-cuidar': { level: 'iniciacion', approaches: ['tcc', 'cft'], module: 'relaciones' },
    'duelo-ambiguo-y-cuidado': { level: 'intermedio', approaches: ['sistemica', 'cft'], module: 'etapas', prerequisites: ['pausa-autocompasion'] },
    'plan-de-crisis-en-familia': { level: 'iniciacion', approaches: ['sistemica', 'tcc'], module: 'etapas' },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'acompanar-a-un-familiar',
      title: 'Acompañar a un familiar con depresión, consumos o un trastorno mental',
      subtitle: 'La carga de quien cuida, cómo hablar sin pelear, los límites, las crisis y el duelo ambiguo.',
      category: 'Relaciones',
      readingMin: 10,
      keyPoints: [
        'Cuidar a alguien con un trastorno mental o una demencia aumenta el estrés y la depresión de quien cuida.',
        'Con alguien que consume, pelear y suplicar suele empeorar. El enfoque CRAFT propone otra forma.',
        'Si la persona no reconoce el problema, escuchar y buscar acuerdos funciona mejor que discutir.',
        'Los límites y los relevos no son abandono: permiten seguir cuidando.',
        'Ante riesgo de suicidio: 135, 0800-999-0091 o 911.',
      ],
      sections: [
        {
          heading: 'La carga de quien cuida',
          paragraphs: [
            'Cuidar a un familiar con depresión, una adicción, un trastorno mental grave o una demencia es una tarea larga y exigente. Un metaanálisis encontró que quienes cuidan tienen más estrés y depresión que quienes no cuidan, y algo peor salud física. La diferencia fue mayor al cuidar a personas con demencia (Pinquart y Sörensen, 2003).',
            'Algunas señales de agotamiento son: dormir mal, enfermarte más, irritarte con facilidad, sentir culpa todo el tiempo, dejar de ver gente y no tener ganas de nada. Si las notas, es momento de pedir ayuda.',
          ],
        },
        {
          heading: 'Hablar sin pelear',
          paragraphs: [
            'Cuando un familiar consume, es común pelear, suplicar o esperar a que «toque fondo». El enfoque CRAFT propone otra cosa: hablar en buenos momentos, decir lo que sientes en primera persona, pedir algo concreto y disfrutar los ratos sin consumo (Smith y Meyers, 2004).',
            'Una revisión encontró que CRAFT logra que más personas empiecen un tratamiento que otros enfoques para familias, y que mejora el bienestar de los familiares (Roozen y colaboradores, 2010). En la Argentina, la Línea 141 de SEDRONAR orienta sobre consumos, también a familias.',
          ],
        },
        {
          heading: 'Cuando no reconoce el problema',
          paragraphs: [
            'Algunas personas con un trastorno mental grave no creen estar enfermas. A veces no es terquedad: la enfermedad afecta esa capacidad. Discutir el diagnóstico suele cerrar la conversación.',
            'Xavier Amador propone el enfoque LEAP: escuchar, empatizar, acordar y trabajar juntos en metas que la persona también quiera (Amador, 2000). Tiene menos estudios que CRAFT, pero ordena la charla y cuida el vínculo.',
          ],
        },
        {
          heading: 'Límites, culpa y duelo ambiguo',
          paragraphs: [
            'Un límite dice qué harás tú, no lo que tiene que hacer el otro. Pedir relevos concretos reparte la carga. La culpa suele aparecer, y no significa que hayas hecho algo mal.',
            'Pauline Boss llamó duelo ambiguo a perder a alguien que sigue presente, como pasa en la demencia o en una depresión grave (Boss, 1999). Ayuda nombrarlo y pensar «las dos cosas a la vez»: está y no está.',
          ],
        },
        {
          heading: 'Grupos de apoyo y ayuda profesional',
          paragraphs: [
            'Las intervenciones con familias en la esquizofrenia, con información y apoyo, se asociaron a menos recaídas e internaciones (Pharoah y colaboradores, 2010). Pregunta al equipo tratante si hay espacios para familias.',
            'Los grupos de familiares permiten compartir lo que es difícil de contar en otro lado. Escuchar a otros que pasan por lo mismo alivia la soledad y da ideas prácticas.',
          ],
        },
        {
          heading: 'En una crisis',
          paragraphs: [
            'Si la persona habla de matarse, se despide o tiene un plan, no la dejes sola. Llama al 135 o al 0800-999-0091. Si hay peligro inmediato o violencia, llama al 911.',
            'En la Argentina, la Ley 26.657 de Salud Mental dice que la internación es un recurso excepcional. La internación sin consentimiento sólo procede ante riesgo cierto e inminente y la decide un equipo de salud. Esto es información general: ante una crisis, consulta a la guardia o al equipo tratante.',
          ],
        },
      ],
      caveat: {
        title: 'Lo que esta sección no hace',
        body: 'Aquí no hay indicaciones de medicación ni de tratamiento. Las ideas de CRAFT y LEAP se presentan de forma simple: los programas completos se hacen con un profesional. CRAFT tiene buena evidencia; LEAP, menos. Si tú o la persona que cuidas están en riesgo, pide ayuda enseguida.',
      },
      diagram: {
        title: 'Cómo se gasta quien cuida',
        nodes: ['Más tareas y preocupación', 'Menos sueño y menos tiempo propio', 'Irritación, culpa y peleas', 'Aislamiento', 'Más agotamiento'],
        caption: 'Los límites, los relevos, el apoyo de otros y hablar sin pelear cortan el ciclo.',
      },
      related: {
        practices: ['termometro-del-cuidador', 'hablar-sin-pelear-con-quien-consume', 'escuchar-sin-convencer', 'limites-al-cuidar', 'duelo-ambiguo-y-cuidado', 'plan-de-crisis-en-familia'],
        articles: ['cuidar-sin-agotarse'],
      },
      references: [PINQUART_2003, SMITH_MEYERS_2004, ROOZEN_2010, AMADOR_2000, BOSS_1999, PHAROAH_2010, LEY_26657],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'acompanar-sin-perderte',
      title: 'Acompañar sin perderte',
      subtitle: 'Cuatro semanas para familiares de alguien con depresión, consumos o un trastorno mental',
      description:
        'Revisarás tu propio desgaste, armarás un plan de crisis, practicarás hablar sin pelear y pondrás límites que te cuiden. Al final, mirarás la culpa y el duelo ambiguo con amabilidad. No reemplaza la ayuda profesional, ni para ti ni para tu familiar.',
      basis: 'Pinquart y Sörensen (2003); Smith y Meyers (2004); Amador (2000); Boss (1999).',
      rhythm: '10 minutos, 3 o 4 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Tú también',
          focus: 'Desgaste y plan de crisis',
          description: 'Revisarás cómo estás y armarás, en calma, un plan para una crisis.',
          practiceIds: ['termometro-del-cuidador', 'plan-de-crisis-en-familia'],
          articleIds: ['acompanar-a-un-familiar'],
          journalType: 'plan-seguridad',
        },
        {
          title: 'Semana 2 · Hablar',
          focus: 'Sin pelear y sin convencer',
          description: 'Prepararás una charla con las ideas de CRAFT o de LEAP, según lo que te pase.',
          practiceIds: ['hablar-sin-pelear-con-quien-consume', 'escuchar-sin-convencer'],
          articleIds: [],
          journalType: 'conversacion',
        },
        {
          title: 'Semana 3 · Límites',
          focus: 'Lo que puedes dar',
          description: 'Pondrás un límite claro y pedirás un relevo concreto.',
          practiceIds: ['limites-al-cuidar', 'dear-man'],
          articleIds: ['cuidar-sin-agotarse'],
          journalType: 'conversacion',
        },
        {
          title: 'Semana 4 · El duelo',
          focus: 'Culpa y duelo ambiguo',
          description: 'Nombrarás lo que perdiste y lo que sigue, y te tratarás con amabilidad.',
          practiceIds: ['duelo-ambiguo-y-cuidado', 'pausa-autocompasion'],
          articleIds: [],
          journalType: 'carta-compasiva',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-carga-del-cuidador',
      title: 'Quien cuida también se cansa',
      subtitle: 'Señales de agotamiento y qué hacer.',
      slides: [
        { heading: 'Una carga real', text: 'Cuidar a alguien con una enfermedad mental o una demencia cansa mucho. Quien cuida tiene más estrés y tristeza.' },
        { heading: 'Llega de a poco', text: 'Duermes peor. Te enojas más rápido. Dejas de ver gente. Todo te cuesta más.' },
        { heading: 'No es egoísmo', text: 'Cuidarte es lo que te deja seguir cuidando. Diez minutos para ti ya cuentan.' },
        { heading: 'Pedir relevos', text: 'Pide ayuda concreta: un día, una tarea, una hora. Que otros carguen una parte.' },
        { heading: 'Si no puedes más', text: 'Si sientes que no das más o piensas en hacerte daño, llama al 135 o al 0800-999-0091.' },
      ],
      related: { practices: ['termometro-del-cuidador', 'limites-al-cuidar'], articles: ['acompanar-a-un-familiar'] },
      references: [PINQUART_2003],
    },
    {
      id: 'pildora-craft',
      title: 'Ni pelear ni esperar que toque fondo',
      subtitle: 'Ideas del enfoque CRAFT para familias de quien consume.',
      slides: [
        { heading: 'Otra forma', text: 'Pelear o suplicar suele alejar. Esperar a que toque fondo puede ser peligroso. Hay otro camino.' },
        { heading: 'El momento', text: 'Habla cuando no está bajo efectos. Elige un rato tranquilo.' },
        { heading: 'En primera persona', text: 'Di lo que sientes: «Me preocupo cuando no sé dónde estás». Evita el «tú siempre».' },
        { heading: 'Lo bueno', text: 'Disfruta con la persona los ratos sin consumo. Que lo sobrio valga la pena.' },
        { heading: 'Funciona', text: 'Con este enfoque, más personas aceptan empezar un tratamiento. Y la familia se siente mejor.' },
        { heading: 'Ayuda', text: 'La Línea 141 de SEDRONAR orienta a familias, gratis y a toda hora.' },
      ],
      related: { practices: ['hablar-sin-pelear-con-quien-consume'], articles: ['acompanar-a-un-familiar'] },
      references: [SMITH_MEYERS_2004, ROOZEN_2010],
    },
    {
      id: 'pildora-leap',
      title: '«No estoy enfermo»',
      subtitle: 'Qué hacer cuando la persona no reconoce el problema.',
      slides: [
        { heading: 'No siempre es terquedad', text: 'A veces la propia enfermedad hace difícil darse cuenta. Discutir suele cerrar la charla.' },
        { heading: 'Escuchar', text: 'Pregunta qué cree que le pasa. Escucha sin corregir.' },
        { heading: 'Empatizar', text: 'Puedes entender cómo se siente sin estar de acuerdo con la idea.' },
        { heading: 'Acordar', text: 'Busca algo en común: dormir mejor, pelear menos o volver a trabajar.' },
        { heading: 'Juntos', text: 'Propón un paso hacia esa meta. El vínculo es lo que abre la puerta a la ayuda.' },
      ],
      related: { practices: ['escuchar-sin-convencer'], articles: ['acompanar-a-un-familiar'] },
      references: [AMADOR_2000],
    },
    {
      id: 'pildora-duelo-ambiguo',
      title: 'Está, pero no está',
      subtitle: 'El duelo de cuidar a alguien que cambió.',
      slides: [
        { heading: 'Un duelo sin cierre', text: 'A veces la persona está, pero ya no es la de antes. Pasa con la demencia, la depresión o una adicción.' },
        { heading: 'Tiene nombre', text: 'Se llama duelo ambiguo. No hay despedida ni ritual, por eso confunde tanto.' },
        { heading: 'La culpa', text: 'Extrañar a alguien que sigue vivo puede dar culpa. Es muy común y no es falta de amor.' },
        { heading: 'Las dos cosas', text: 'Prueba pensar con «y»: «Está y no está». «Lo quiero y estoy cansada».' },
        { heading: 'Compartir', text: 'Hablarlo con otros familiares alivia. No tienes que cargarlo en silencio.' },
      ],
      related: { practices: ['duelo-ambiguo-y-cuidado'], articles: ['acompanar-a-un-familiar'] },
      references: [BOSS_1999],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'carga-del-cuidador', term: 'Carga del cuidador', definition: 'El desgaste físico, emocional y económico de cuidar a alguien por mucho tiempo. Se asocia a más estrés y depresión en quien cuida.', practiceId: 'termometro-del-cuidador' },
    { id: 'craft', term: 'CRAFT', definition: 'Programa para familias de personas con consumos que no quieren tratarse. Enseña a hablar sin pelear y a reforzar lo sobrio. Ayuda a que más personas empiecen un tratamiento.', practiceId: 'hablar-sin-pelear-con-quien-consume' },
    { id: 'leap', term: 'LEAP', definition: 'Forma de hablar con alguien que no reconoce su enfermedad: escuchar, empatizar, acordar y trabajar juntos. La propuso Xavier Amador.', practiceId: 'escuchar-sin-convencer' },
    { id: 'anosognosia', term: 'Anosognosia', definition: 'Dificultad, causada por la propia enfermedad, para darse cuenta de que uno está enfermo. Puede darse en la esquizofrenia, el trastorno bipolar o la demencia.', articleId: 'acompanar-a-un-familiar' },
    { id: 'duelo-ambiguo', term: 'Duelo ambiguo', definition: 'Pérdida sin cierre claro. Por ejemplo, cuando alguien sigue presente pero cambió mucho por una enfermedad. Lo describió Pauline Boss.', practiceId: 'duelo-ambiguo-y-cuidado' },
  ],
};
