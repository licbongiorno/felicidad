import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Prevención de recaídas»: un plan personal para cuidar lo logrado tras una
 * depresión, un período de ansiedad o un consumo problemático.
 *  - lapsus no es recaída, y el efecto de violación de la abstinencia (Marlatt y Gordon; Witkiewitz y Marlatt);
 *  - señales tempranas personales («firma de recaída»);
 *  - situaciones de alto riesgo y decisiones aparentemente sin importancia;
 *  - plan escalonado verde, amarillo y rojo, que se puede copiar en «Mi caja de herramientas»
 *    del Laboratorio (/laboratorio/caja) y que en la zona roja remite al Plan de seguridad;
 *  - mantener lo que funcionó; MBCT para la depresión recurrente (Segal, Williams y Teasdale; Kuyken y colaboradores);
 *  - revisión mensual y cuándo volver a consultar (Bockting y colaboradores).
 *
 * Reglas de seguridad del paquete: nunca se sugiere suspender ni cambiar la medicación sin el
 * médico. La zona roja siempre lleva a pedir ayuda: 135, 0800-999-0091, 911 y, para consumos,
 * la Línea 141 de SEDRONAR. No reemplaza el tratamiento ni el programa MBCT con instructor.
 */

const MARLATT_1985: Reference = {
  citation: 'Marlatt, G. A., & Gordon, J. R. (Eds.) (1985). Relapse prevention: Maintenance strategies in the treatment of addictive behaviors. Guilford Press.',
};
const WITKIEWITZ_2004: Reference = {
  citation: 'Witkiewitz, K., & Marlatt, G. A. (2004). Relapse prevention for alcohol and drug problems: That was Zen, this is Tao. American Psychologist, 59(4), 224–235.',
};
const SEGAL_2013: Reference = {
  citation: 'Segal, Z. V., Williams, J. M. G., & Teasdale, J. D. (2013). Mindfulness-based cognitive therapy for depression (2nd ed.). Guilford Press.',
};
const KUYKEN_2016: Reference = {
  citation:
    'Kuyken, W., Warren, F. C., Taylor, R. S., Whalley, B., Crane, C., Bondolfi, G., et al. (2016). Efficacy of mindfulness-based cognitive therapy in prevention of depressive relapse: An individual patient data meta-analysis from randomized trials. JAMA Psychiatry, 73(6), 565–574.',
};
const BOCKTING_2015: Reference = {
  citation:
    'Bockting, C. L., Hollon, S. D., Jarrett, R. B., Kuyken, W., & Dobson, K. (2015). A lifetime approach to major depressive disorder: The contributions of psychological interventions in preventing relapse and recurrence. Clinical Psychology Review, 41, 16–26.',
};

/** Aviso común: medicación y zona roja. */
const AVISO =
  'Este plan no reemplaza tu tratamiento. No suspendas ni cambies la medicación sin hablar con tu médico. Si tienes ideas de hacerte daño, llama al 135 o al 0800-999-0091. Si hay peligro, al 911. Por consumos, llama a la Línea 141, gratuita y las 24 horas.';

export const PREVENCION_RECAIDAS_PACK: ContentPack = {
  id: 'prevencion-recaidas',

  // ================================================================== prácticas
  practices: [
    {
      id: 'mi-firma-de-recaida',
      title: 'Mis señales tempranas',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Descubrir tu «firma de recaída»: las señales chicas que suelen aparecer antes de que vuelva el malestar.',
      mechanism: 'Las recaídas suelen empezar de a poco. Conocer tus señales propias permite actuar antes, cuando todavía es más fácil.',
      evidenceLevel: 'moderada',
      evidence: [SEGAL_2013, BOCKTING_2015],
      howItWorks: [
        'La depresión, la ansiedad y los consumos tienden a volver. Muchas personas tienen más de un episodio. Por eso los tratamientos que previenen recaídas enseñan a reconocer las primeras señales (Bockting y colaboradores, 2015).',
        'Cada persona tiene su propia «firma». Puede ser dormir peor, dejar de ver gente, pensar más en negativo o tener ganas de consumir. Una señal sola no es una recaída. Es un aviso para cuidarte un poco más.',
        'Ayuda pensar en la última vez que te sentiste mal. ¿Qué cambió primero, semanas antes? A veces quienes te conocen lo notan antes que tú.',
      ],
      tips: [
        'Busca señales chicas y concretas: «dejo de contestar mensajes», no «me pongo mal».',
        'Pregunta a alguien de confianza qué nota en ti cuando empiezas a estar peor.',
        'Separa señales del cuerpo, del pensamiento y de lo que haces.',
        'Guarda la lista donde la veas, por ejemplo en tu celular.',
      ],
      obstacles: [
        { q: 'No recuerdo cómo empezó la última vez.', a: 'Es común. Empieza por lo que sí recuerdas, aunque sea poco. Puedes completar la lista con ayuda de alguien cercano o de tu terapeuta.' },
        { q: 'Pensar en eso me angustia.', a: 'No hace falta entrar en detalles. Mira desde lejos, como quien lee un mapa. Si la angustia sube, frena y vuelve a respirar.' },
      ],
      cautions: AVISO,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Hoy estás en un buen momento para mirar esto con calma.', durationSec: 40, kind: 'breath' },
        { title: 'Mirar hacia atrás', instruction: 'Piensa en la última vez que te sentiste mal. Sin detalles. Sólo pregúntate qué cambió primero.', durationSec: 60, kind: 'reflection' },
        { title: 'El cuerpo', instruction: 'Anota señales del cuerpo. Por ejemplo, dormir mal, comer distinto o sentir cansancio.', durationSec: 45, kind: 'reflection' },
        { title: 'La mente', instruction: 'Anota señales de la mente. Por ejemplo, pensar más en negativo, preocuparte más o tener ganas de consumir.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que haces', instruction: 'Anota cambios en lo que haces. Por ejemplo, ver menos gente, dejar el deporte o no contestar mensajes.', durationSec: 45, kind: 'reflection' },
        { title: 'Tus tres señales', instruction: 'Elige las tres señales más tempranas y claras. Esa es tu firma. Guárdala donde la veas.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Conocer tus señales es una forma de cuidarte.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'mapa-de-situaciones-de-riesgo',
      title: 'Mis situaciones de riesgo',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Anticipar los momentos, lugares y personas que te ponen en riesgo, y preparar qué hacer en cada uno.',
      mechanism: 'Tener una respuesta pensada de antemano para una situación difícil aumenta la confianza en poder manejarla.',
      evidenceLevel: 'moderada',
      evidence: [MARLATT_1985, WITKIEWITZ_2004],
      howItWorks: [
        'Alan Marlatt y Judith Gordon llamaron «situaciones de alto riesgo» a los momentos en que es más fácil volver atrás. Pueden ser emociones fuertes, conflictos, presión social o ciertos lugares (Marlatt y Gordon, 1985).',
        'Lo que más protege es tener una forma de afrontarlas. Cuando respondes bien, crece tu confianza. Cuando no hay respuesta, el riesgo sube (Witkiewitz y Marlatt, 2004).',
        'También describieron las «decisiones aparentemente sin importancia». Son pequeñas elecciones que te acercan al riesgo sin darte cuenta, como pasar por el bar «sólo a saludar» o dejar de lado la rutina.',
      ],
      tips: [
        'Piensa en emociones, personas, lugares, horarios y fechas.',
        'Para cada situación, ten un plan A y un plan B.',
        'Practica en tu cabeza cómo vas a responder.',
        'Revisa tu mapa cuando cambie algo grande en tu vida.',
      ],
      obstacles: [
        { q: 'No puedo evitar algunas situaciones.', a: 'Muchas no se pueden evitar. Por eso se prepara cómo atravesarlas: con quién ir, cuánto tiempo quedarte y cómo salir si hace falta.' },
      ],
      cautions: AVISO,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Vas a mirar tu semana como quien mira un mapa.', durationSec: 30, kind: 'breath' },
        { title: 'Momentos difíciles', instruction: 'Anota tres situaciones en las que te cuesta más cuidarte. Una emoción, un lugar, una persona o un horario.', durationSec: 75, kind: 'reflection' },
        { title: 'Pequeñas decisiones', instruction: 'Piensa en elecciones chicas que te acercan a esas situaciones. Por ejemplo, saltear comidas o acostarte muy tarde.', durationSec: 60, kind: 'reflection' },
        { title: 'Plan A', instruction: 'Para cada situación, escribe qué harás para cuidarte. Algo concreto y posible.', durationSec: 75, kind: 'reflection' },
        { title: 'Plan B', instruction: 'Escribe qué harás si el plan A no alcanza. Por ejemplo, irte, llamar a alguien o hacer una práctica breve.', durationSec: 60, kind: 'reflection' },
        { title: 'Ensayar', instruction: 'Imagina una de esas situaciones. Mírate usando tu plan con calma. Nota cómo se siente.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Tener un plan no quita el riesgo, pero te da más recursos.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'plan-verde-amarillo-rojo',
      title: 'Mi plan en tres colores',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Armar un plan escalonado: qué te mantiene bien en verde, qué haces si aparecen señales en amarillo y a quién llamas en rojo.',
      mechanism: 'Decidir en calma qué hacer en cada zona evita tener que pensarlo cuando cuesta pensar.',
      evidenceLevel: 'moderada',
      evidence: [BOCKTING_2015, WITKIEWITZ_2004],
      howItWorks: [
        'En verde estás bien. Aquí va lo que te mantiene: sueño, movimiento, vínculos, terapia o medicación. En amarillo aparecen tus señales tempranas. Aquí van pasos para cuidarte más. En rojo el malestar es fuerte o hay riesgo. Aquí va a quién pedir ayuda.',
        'Los tratamientos que previenen recaídas suelen terminar con un plan así (Bockting y colaboradores, 2015). Se arma cuando estás bien, para usarlo cuando no lo estás.',
        'Puedes copiarlo en «Mi caja de herramientas», en el Laboratorio de la app. Para la zona roja, también está el Plan de seguridad.',
      ],
      tips: [
        'En amarillo, elige pasos fáciles. En ese momento la energía es poca.',
        'En rojo, anota nombres y números de teléfono, no ideas generales.',
        'Comparte el plan con alguien de confianza.',
        'Si tomas medicación, en amarillo el paso es consultar a tu médico, no cambiar la dosis.',
      ],
      obstacles: [
        { q: 'Me cuesta admitir que estoy en amarillo.', a: 'Es muy común. Por eso ayuda acordar con alguien cercano que te avise si ve tus señales. Estar en amarillo no es fracasar: es el momento de usar el plan.' },
      ],
      cautions: AVISO,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Arma este plan ahora, que estás en calma.', durationSec: 30, kind: 'breath' },
        { title: 'Verde', instruction: 'Anota tres cosas que te mantienen bien. Por ejemplo, dormir a horario, caminar, ver a tu gente o ir a terapia.', durationSec: 60, kind: 'reflection' },
        { title: 'Amarillo: señales', instruction: 'Copia tus tres señales tempranas. Si no las tienes, haz antes la práctica «Mis señales tempranas».', durationSec: 45, kind: 'reflection' },
        { title: 'Amarillo: pasos', instruction: 'Anota tres pasos fáciles para esos días. Por ejemplo, hablar con alguien, volver a la rutina o pedir un turno.', durationSec: 60, kind: 'reflection' },
        { title: 'Rojo', instruction: 'Anota a quién llamas si el malestar es fuerte. Tu terapeuta, tu médico, una persona cercana, el 135 o el 0800-999-0091.', durationSec: 60, kind: 'reflection' },
        { title: 'Si hay consumo', instruction: 'Si tu plan es por un consumo, suma la Línea 141. Es gratuita y atiende las 24 horas.', durationSec: 30, kind: 'instruction' },
        { title: 'Guardar', instruction: 'Guarda el plan en «Mi caja de herramientas» del Laboratorio. Compártelo con alguien de confianza.', durationSec: 40, kind: 'instruction' },
      ],
    },
    {
      id: 'despues-de-un-lapsus',
      title: 'Después de un tropiezo',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Qué hacer cuando das un paso atrás, para que un tropiezo no se convierta en una recaída.',
      mechanism: 'Ver el tropiezo como algo que se puede aprender, y no como un fracaso total, protege la motivación y la confianza.',
      evidenceLevel: 'moderada',
      evidence: [MARLATT_1985, WITKIEWITZ_2004],
      howItWorks: [
        'Marlatt distinguió el lapsus de la recaída. Un lapsus es un tropiezo puntual: un día malo, un consumo, una semana sin rutina. La recaída es volver al patrón anterior y quedarse (Marlatt y Gordon, 1985).',
        'Lo que pasa después del tropiezo pesa mucho. Si piensas «ya arruiné todo, no tengo voluntad», es más fácil seguir cayendo. Marlatt lo llamó efecto de violación de la abstinencia. Culparte con dureza suele empeorar las cosas.',
        'Tratarte con amabilidad no es justificarte. Es mirar qué pasó, aprender algo y volver a tu plan cuanto antes (Witkiewitz y Marlatt, 2004).',
      ],
      tips: [
        'Un tropiezo no borra lo que lograste. Los días buenos siguen contando.',
        'Mira la situación, no tu carácter: «¿Qué pasó antes?» y no «¿Qué me pasa a mí?».',
        'Vuelve hoy a un paso chico de tu plan verde.',
        'Cuéntaselo a alguien de tu tratamiento o de confianza.',
      ],
      obstacles: [
        { q: 'Siento que no tiene sentido seguir intentando.', a: 'Esa sensación es parte del efecto del tropiezo, no la verdad. Si se vuelve fuerte o aparecen ideas de hacerte daño, pide ayuda hoy: 135 o 0800-999-0091.' },
        { q: 'Ya tuve varios tropiezos.', a: 'Muchas personas los tienen antes de lograr cambios estables. Puede ser momento de revisar el plan con tu terapeuta o tu médico. Pedir más ayuda es parte del camino.' },
      ],
      cautions: AVISO,
      steps: [
        { title: 'Parar', instruction: 'Para un momento. Siente los pies en el piso. Respira despacio tres veces.', durationSec: 40, kind: 'breath' },
        { title: 'Nombrar', instruction: 'Dite: «Tuve un tropiezo. No es una recaída. Puedo volver a mi plan».', durationSec: 30, kind: 'reflection' },
        { title: 'Amabilidad', instruction: 'Pon una mano en el pecho. Dite lo que le dirías a una amistad que tropezó. Usa palabras cálidas.', durationSec: 45, kind: 'breath' },
        { title: 'Qué pasó antes', instruction: 'Anota qué pasó antes del tropiezo. Dónde estabas, qué sentías y qué decisión chica te acercó.', durationSec: 75, kind: 'reflection' },
        { title: 'Lo que aprendes', instruction: 'Anota una cosa que harías distinto la próxima vez. Súmala a tu plan.', durationSec: 45, kind: 'reflection' },
        { title: 'Volver', instruction: 'Elige un paso de tu plan verde para hoy. Algo chico y posible.', durationSec: 40, kind: 'reflection' },
        { title: 'Contar', instruction: 'Piensa a quién se lo vas a contar. Tu terapeuta, tu médico o alguien de confianza.', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'revision-mensual-del-plan',
      title: 'Revisión mensual de mi plan',
      family: 'attentional',
      skills: ['attention', 'resilience'],
      summary: 'Una vez por mes, mirar cómo estás, qué te sigue funcionando y si hace falta volver a consultar.',
      mechanism: 'Revisar con regularidad evita que lo que funcionaba se deje de a poco sin notarlo.',
      evidenceLevel: 'moderada',
      evidence: [BOCKTING_2015, SEGAL_2013],
      howItWorks: [
        'Cuando estamos bien, es fácil soltar lo que nos ayudó: la rutina, la práctica, las charlas o la terapia. Muchas recaídas empiezan así, de a poco (Bockting y colaboradores, 2015).',
        'Una revisión breve cada mes te ayuda a sostener lo que funcionó y a ajustar el plan. También es el momento de preguntarte si conviene volver a consultar.',
        'Si tuviste depresión varias veces, el programa de terapia cognitiva basada en mindfulness puede ayudar. Se hace en grupo, con instructor, durante ocho semanas (Segal y colaboradores, 2013).',
      ],
      tips: [
        'Pon un recordatorio fijo en el celular, el mismo día cada mes.',
        'Hazla también cuando estés bien. Ahí es cuando más sirve.',
        'Si tomas medicación, sigue las indicaciones aunque te sientas bien.',
        'Lleva lo que anotes a tu próxima consulta.',
      ],
      obstacles: [
        { q: 'Estoy bien, no me hace falta.', a: 'Es la mejor noticia. Justamente por eso conviene revisar: sirve para sostener lo que te tiene bien. Son sólo unos minutos.' },
      ],
      cautions: AVISO,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Nota cómo estás hoy, sin juzgar.', durationSec: 40, kind: 'breath' },
        { title: 'En qué color', instruction: 'Piensa en el último mes. ¿Estuviste más en verde, en amarillo o en rojo? Anótalo.', durationSec: 45, kind: 'reflection' },
        { title: 'Tus señales', instruction: 'Lee tus señales tempranas. ¿Apareció alguna? ¿Cuándo y cuánto duró?', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que funcionó', instruction: 'Anota qué te ayudó este mes. ¿Lo sigues haciendo o lo fuiste dejando?', durationSec: 60, kind: 'reflection' },
        { title: 'Ajustar', instruction: 'Elige un cambio para el plan del mes que viene. Sumar algo, quitar algo o retomar algo.', durationSec: 45, kind: 'reflection' },
        { title: '¿Consultar?', instruction: 'Si estuviste en amarillo más de dos semanas o llegaste a rojo, pide un turno con tu terapeuta o tu médico.', durationSec: 40, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Agradece el cuidado que te diste hoy.', durationSec: 30, kind: 'breath' },
      ],
    },
  ],

  meta: {
    'mi-firma-de-recaida': { level: 'iniciacion', approaches: ['tcc', 'mindfulness'], module: 'afrontamiento' },
    'mapa-de-situaciones-de-riesgo': { level: 'iniciacion', approaches: ['tcc', 'motivacional'], module: 'afrontamiento' },
    'plan-verde-amarillo-rojo': { level: 'iniciacion', approaches: ['tcc', 'dbt'], module: 'afrontamiento' },
    'despues-de-un-lapsus': { level: 'intermedio', approaches: ['tcc', 'cft'], module: 'afrontamiento', prerequisites: ['pausa-autocompasion'] },
    'revision-mensual-del-plan': { level: 'iniciacion', approaches: ['tcc', 'mindfulness'], module: 'habitos' },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'prevenir-recaidas',
      title: 'Prevenir recaídas',
      subtitle: 'Cómo cuidar lo logrado después de una depresión, un período de ansiedad o un consumo.',
      category: 'Salud y trabajo',
      readingMin: 9,
      keyPoints: [
        'La depresión, la ansiedad y los consumos tienden a volver. Prepararse cuando estás bien ayuda.',
        'Un lapsus es un tropiezo puntual. No es lo mismo que una recaída.',
        'Cada persona tiene sus señales tempranas. Conocerlas permite actuar antes.',
        'Un plan en tres colores dice qué hacer en verde, en amarillo y en rojo.',
        'No suspendas la medicación sin tu médico, aunque te sientas bien.',
      ],
      sections: [
        {
          heading: 'Por qué prepararse',
          paragraphs: [
            'Muchas personas que tuvieron una depresión vuelven a tener otra. Algo parecido pasa con la ansiedad y los consumos. Por eso hoy se mira la depresión a lo largo de la vida, no sólo un episodio (Bockting y colaboradores, 2015).',
            'La buena noticia es que hay terapias psicológicas que bajan el riesgo de que vuelva. Funcionan mejor cuando se arma un plan mientras la persona está bien.',
          ],
        },
        {
          heading: 'Lapsus no es recaída',
          paragraphs: [
            'Alan Marlatt y Judith Gordon distinguieron el lapsus de la recaída. El lapsus es un tropiezo puntual. La recaída es volver al patrón anterior y quedarse ahí (Marlatt y Gordon, 1985).',
            'Lo que pasa después del tropiezo importa mucho. Si piensas «ya arruiné todo», es más fácil seguir cayendo. Marlatt lo llamó efecto de violación de la abstinencia. Mirar el tropiezo con amabilidad y aprender de él protege.',
          ],
        },
        {
          heading: 'Señales y situaciones de riesgo',
          paragraphs: [
            'Cada persona tiene su «firma de recaída»: señales chicas que aparecen antes. Dormir peor, aislarse, pensar más en negativo o tener ganas de consumir. Conocerlas permite actuar a tiempo.',
            'También hay situaciones de alto riesgo, como emociones fuertes, conflictos o ciertos lugares. Witkiewitz y Marlatt mostraron que la recaída es un proceso. Lo que más protege es tener una forma de afrontar esas situaciones y confiar en poder usarla (Witkiewitz y Marlatt, 2004).',
          ],
        },
        {
          heading: 'Un plan en tres colores',
          paragraphs: [
            'En verde, anota lo que te mantiene bien. En amarillo, tus señales tempranas y pasos fáciles para cuidarte más. En rojo, a quién llamar si el malestar es fuerte o hay riesgo.',
            'Puedes guardarlo en «Mi caja de herramientas», en el Laboratorio de la app. Para la zona roja, también está el Plan de seguridad. Compartir el plan con alguien de confianza ayuda a que alguien más pueda avisarte.',
          ],
        },
        {
          heading: 'Mindfulness para la depresión recurrente',
          paragraphs: [
            'La terapia cognitiva basada en mindfulness, o MBCT, se creó para personas que tuvieron varias depresiones. Enseña a notar los primeros cambios del ánimo y a no quedar en sus garras (Segal y colaboradores, 2013).',
            'Un análisis que reunió los datos de varios ensayos encontró que quienes hicieron MBCT tuvieron menos riesgo de recaer que quienes no la hicieron (Kuyken y colaboradores, 2016). Se hace en grupo, con instructor, durante ocho semanas. Las prácticas breves de la app pueden acompañar, pero no reemplazan el programa.',
          ],
        },
        {
          heading: 'Mantener lo que funcionó',
          paragraphs: [
            'Cuando estamos bien, es fácil dejar lo que ayudó. Revisar el plan una vez por mes ayuda a sostenerlo. Si tomas medicación, no la suspendas ni cambies la dosis sin tu médico: dejarla de golpe puede traer síntomas y aumentar el riesgo de recaer.',
            'Vuelve a consultar si estás en amarillo más de dos semanas, si llegas a rojo o si tienes varios tropiezos seguidos. Pedir ayuda a tiempo no es retroceder.',
          ],
        },
      ],
      caveat: {
        title: 'Cuándo pedir ayuda ya',
        body: 'Si tienes ideas de hacerte daño, llama al 135 o al 0800-999-0091. Si hay peligro, al 911. Por consumos, puedes llamar a la Línea 141 de SEDRONAR, gratuita y las 24 horas. Este plan no reemplaza tu tratamiento. No suspendas la medicación sin hablar con tu médico.',
      },
      diagram: {
        title: 'Cómo un tropiezo se vuelve recaída',
        nodes: ['Situación de alto riesgo', 'Sin respuesta para afrontarla', 'Tropiezo', '«Ya arruiné todo»', 'Menos cuidado y más riesgo'],
        caption: 'Un plan para la situación y un trato amable después del tropiezo cortan el círculo.',
      },
      related: {
        practices: ['mi-firma-de-recaida', 'mapa-de-situaciones-de-riesgo', 'plan-verde-amarillo-rojo', 'despues-de-un-lapsus', 'revision-mensual-del-plan', 'espacio-tres-minutos', 'surfear-impulso', 'antes-de-cambiar-la-medicacion'],
        articles: ['medicacion-psiquiatrica'],
      },
      references: [MARLATT_1985, WITKIEWITZ_2004, SEGAL_2013, KUYKEN_2016, BOCKTING_2015],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'mi-plan-de-prevencion-de-recaidas',
      title: 'Mi plan de prevención de recaídas',
      subtitle: 'Cuatro semanas para cuidar lo logrado',
      description:
        'Conocerás tus señales tempranas y tus situaciones de riesgo. Armarás un plan en tres colores y aprenderás qué hacer después de un tropiezo. Terminarás con una revisión mensual. No reemplaza tu tratamiento: no suspendas la medicación sin tu médico.',
      basis: 'Marlatt y Gordon (1985); Witkiewitz y Marlatt (2004); Segal, Williams y Teasdale (2013); Bockting y colaboradores (2015).',
      rhythm: '10 minutos, 3 o 4 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Señales',
          focus: 'Tu firma de recaída',
          description: 'Leerás por qué conviene prepararse. Descubrirás tus señales tempranas y practicarás notar el ánimo con una pausa breve.',
          practiceIds: ['mi-firma-de-recaida', 'espacio-tres-minutos'],
          articleIds: ['prevenir-recaidas'],
          journalType: 'intencion',
        },
        {
          title: 'Semana 2 · Riesgos',
          focus: 'Situaciones y decisiones chicas',
          description: 'Harás el mapa de tus situaciones de riesgo y prepararás un plan A y un plan B para cada una.',
          practiceIds: ['mapa-de-situaciones-de-riesgo', 'espacio-tres-minutos'],
          articleIds: [],
          journalType: 'resolucion-problemas',
        },
        {
          title: 'Semana 3 · El plan',
          focus: 'Verde, amarillo y rojo',
          description: 'Armarás tu plan en tres colores y lo guardarás en «Mi caja de herramientas» del Laboratorio.',
          practiceIds: ['plan-verde-amarillo-rojo'],
          articleIds: [],
        },
        {
          title: 'Semana 4 · Sostener',
          focus: 'Tropiezos y revisión',
          description: 'Aprenderás a responder a un tropiezo con amabilidad y harás tu primera revisión mensual.',
          practiceIds: ['despues-de-un-lapsus', 'revision-mensual-del-plan', 'pausa-autocompasion'],
          articleIds: [],
          journalType: 'analisis-cadena',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-lapsus-o-recaida',
      title: 'Un tropiezo no es una caída',
      subtitle: 'Lapsus y recaída no son lo mismo.',
      slides: [
        { heading: 'Un tropiezo', text: 'Un lapsus es un paso atrás puntual. Un mal día, un consumo o una semana sin rutina.' },
        { heading: 'Una recaída', text: 'La recaída es volver al patrón de antes y quedarse ahí. No pasa de golpe.' },
        { heading: 'La trampa', text: 'Después del tropiezo, la mente dice: «Ya arruiné todo». Esa idea empuja a seguir cayendo.' },
        { heading: 'Mejor así', text: 'Trátate con amabilidad. Mira qué pasó antes. Aprende algo y vuelve a tu plan hoy.' },
        { heading: 'Lo logrado cuenta', text: 'Un tropiezo no borra lo que hiciste. Los días buenos siguen ahí.' },
        { heading: 'Si duele mucho', text: 'Si aparecen ideas de hacerte daño, llama al 135 o al 0800-999-0091. Por consumos, a la Línea 141.' },
      ],
      related: { practices: ['despues-de-un-lapsus'], articles: ['prevenir-recaidas'] },
      references: [MARLATT_1985, WITKIEWITZ_2004],
    },
    {
      id: 'pildora-senales-tempranas',
      title: 'Tus señales tempranas',
      subtitle: 'El malestar suele avisar antes de volver.',
      slides: [
        { heading: 'De a poco', text: 'El malestar no suele volver de golpe. Antes aparecen señales chicas.' },
        { heading: 'Tu firma', text: 'Cada persona tiene las suyas. Dormir peor, ver menos gente o pensar más en negativo.' },
        { heading: 'Míralo hacia atrás', text: 'Piensa en la última vez que estuviste mal. ¿Qué cambió primero?' },
        { heading: 'Pregunta', text: 'A veces otros lo notan antes. Pregunta a alguien de confianza qué ve en ti.' },
        { heading: 'Tres señales', text: 'Elige tus tres señales más claras. Guárdalas donde las veas.' },
      ],
      related: { practices: ['mi-firma-de-recaida'], articles: ['prevenir-recaidas'] },
      references: [SEGAL_2013, BOCKTING_2015],
    },
    {
      id: 'pildora-plan-en-tres-colores',
      title: 'Un plan en tres colores',
      subtitle: 'Decide en calma qué hacer en cada zona.',
      slides: [
        { heading: 'Verde', text: 'Estás bien. Anota lo que te mantiene así: dormir, moverte, ver a tu gente o ir a terapia.' },
        { heading: 'Amarillo', text: 'Aparecen tus señales. Anota pasos fáciles: hablar con alguien, volver a la rutina o pedir un turno.' },
        { heading: 'Rojo', text: 'El malestar es fuerte o hay riesgo. Anota a quién llamar, con nombre y número.' },
        { heading: 'Números', text: 'El 135 o el 0800-999-0091 si piensas en hacerte daño. La Línea 141 por consumos. El 911 si hay peligro.' },
        { heading: 'Guárdalo', text: 'Puedes guardar tu plan en «Mi caja de herramientas», en el Laboratorio de la app.' },
      ],
      related: { practices: ['plan-verde-amarillo-rojo'], articles: ['prevenir-recaidas'] },
      references: [BOCKTING_2015, WITKIEWITZ_2004],
    },
    {
      id: 'pildora-sostener-lo-que-funciono',
      title: 'No sueltes lo que funcionó',
      subtitle: 'Estar bien también se cuida.',
      slides: [
        { heading: 'La trampa de estar bien', text: 'Cuando estamos bien, es fácil dejar lo que ayudó. Muchas recaídas empiezan así.' },
        { heading: 'La medicación', text: 'No la dejes ni cambies la dosis sin tu médico. Aunque te sientas bien.' },
        { heading: 'Mindfulness', text: 'Si tuviste varias depresiones, un programa de mindfulness en grupo puede bajar el riesgo de que vuelva.' },
        { heading: 'Una vez por mes', text: 'Revisa tu plan. ¿Qué te sigue ayudando? ¿Qué fuiste dejando?' },
        { heading: 'Volver a consultar', text: 'Si estás en amarillo más de dos semanas, pide un turno. Pedir ayuda a tiempo no es retroceder.' },
      ],
      related: { practices: ['revision-mensual-del-plan', 'antes-de-cambiar-la-medicacion'], articles: ['prevenir-recaidas'] },
      references: [KUYKEN_2016, SEGAL_2013, BOCKTING_2015],
    },
  ],

  // ================================================================== glosario
  glossary: [
    {
      id: 'lapsus',
      term: 'Lapsus',
      definition: 'Un tropiezo puntual después de un tiempo bien, como un día malo o un consumo. No es lo mismo que una recaída, que es volver al patrón anterior y quedarse.',
      practiceId: 'despues-de-un-lapsus',
    },
    {
      id: 'efecto-violacion-abstinencia',
      term: 'Efecto de violación de la abstinencia',
      definition: 'La reacción de culpa y derrota después de un tropiezo: «ya arruiné todo». Hace más fácil seguir cayendo. Tratarse con amabilidad lo contrarresta.',
      practiceId: 'despues-de-un-lapsus',
    },
    {
      id: 'firma-de-recaida',
      term: 'Firma de recaída',
      definition: 'Las señales tempranas propias que suelen aparecer antes de que vuelva el malestar. Cada persona tiene las suyas.',
      practiceId: 'mi-firma-de-recaida',
    },
    {
      id: 'situacion-de-alto-riesgo',
      term: 'Situación de alto riesgo',
      definition: 'Momento, lugar, emoción o persona que hace más fácil volver atrás. Tener una respuesta preparada protege.',
      practiceId: 'mapa-de-situaciones-de-riesgo',
    },
    {
      id: 'mbct',
      term: 'Terapia cognitiva basada en mindfulness (MBCT)',
      definition: 'Programa en grupo de ocho semanas para personas que tuvieron varias depresiones. Enseña a notar los primeros cambios del ánimo para prevenir recaídas.',
      articleId: 'prevenir-recaidas',
    },
    {
      id: 'plan-en-tres-colores',
      term: 'Plan en tres colores',
      definition: 'Plan escalonado que dice qué hacer en verde, cuando estás bien; en amarillo, cuando aparecen señales; y en rojo, cuando hay que pedir ayuda.',
      practiceId: 'plan-verde-amarillo-rojo',
      seeAlso: { href: '/laboratorio/caja', label: 'Mi caja de herramientas' },
    },
  ],
};
