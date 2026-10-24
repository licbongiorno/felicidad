import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Desempleo»: perder el trabajo y buscar trabajo.
 *  - el golpe a la identidad y la rutina: funciones latentes del empleo (Jahoda, 1982);
 *  - duelo por el trabajo perdido;
 *  - estructura del día y activación conductual (enlaza 'activacion-conductual');
 *  - separar lo controlable (la búsqueda) de lo que no (el mercado);
 *  - rechazo en entrevistas sin tomarlo personal; autocompasión y vergüenza;
 *  - plata y familia: enlaza con el paquete de estrés económico ('plata-controlable',
 *    'hablar-de-plata', artículo 'estres-economico');
 *  - red de contactos; ideas del programa JOBS (Vinokur y colaboradores, 2000);
 *  - cuándo consultar: depresión, consumo, ideas de morir (135, 0800-999-0091, 911).
 *
 * Reglas del paquete: no hay consejos legales ni laborales específicos (indemnizaciones,
 * trámites, currículum); para eso se sugiere asesoramiento especializado. El desempleo
 * se trata como una situación, no como un rasgo de la persona.
 */

// ------------------------------------------------------------ referencias
const JAHODA_1982: Reference = {
  citation: 'Jahoda, M. (1982). Employment and unemployment: A social-psychological analysis. Cambridge University Press.',
};
const PAUL_MOSER_2009: Reference = {
  citation: 'Paul, K. I., & Moser, K. (2009). Unemployment impairs mental health: Meta-analyses. Journal of Vocational Behavior, 74(3), 264–282.',
};
const MCKEE_RYAN_2005: Reference = {
  citation: 'McKee-Ryan, F., Song, Z., Wanberg, C. R., & Kinicki, A. J. (2005). Psychological and physical well-being during unemployment: A meta-analytic study. Journal of Applied Psychology, 90(1), 53–76.',
};
const WANBERG_2012: Reference = {
  citation: 'Wanberg, C. R. (2012). The individual experience of unemployment. Annual Review of Psychology, 63, 369–396.',
};
const VINOKUR_2000: Reference = {
  citation: 'Vinokur, A. D., Schul, Y., Vuori, J., & Price, R. H. (2000). Two years after a job loss: Long-term impact of the JOBS program on reemployment and mental health. Journal of Occupational Health Psychology, 5(1), 32–47.',
};

/** Aviso común: cuándo consultar. */
const CONSULTAR =
  'Si el desánimo no se va, si dejas de hacer casi todo, si bebes o consumes más para aguantar, o si piensas en morir, consulta con un profesional. Si tienes ideas de hacerte daño, llama al 135 (CABA y GBA; resto del país 0800-345-1435) o al 0800-999-0091, o usa el botón Ayuda. Si hay peligro inmediato, llama al 911. Para dudas legales o de indemnización, busca asesoramiento especializado.';

export const DESEMPLEO_PACK: ContentPack = {
  id: 'desempleo',

  // ================================================================== prácticas
  practices: [
    {
      id: 'lo-que-el-trabajo-me-daba',
      title: 'Lo que el trabajo me daba',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Ver qué te daba el trabajo además del sueldo, como horarios, gente, metas y un lugar, y buscar otras fuentes para eso mientras tanto.',
      mechanism: 'El empleo cubre necesidades que no se ven hasta que faltan. Nombrarlas y buscarles reemplazo parcial protege el ánimo durante la búsqueda.',
      evidenceLevel: 'preliminar',
      evidence: [JAHODA_1982, PAUL_MOSER_2009],
      howItWorks: [
        'Marie Jahoda propuso que el trabajo no sólo da plata. También da otras cosas que llamó funciones latentes: una estructura del tiempo, contacto con gente fuera de la familia, metas compartidas, un lugar en la sociedad y actividad regular (Jahoda, 1982).',
        'Cuando se pierde el trabajo, se pierden también esas cosas. Por eso el golpe no es sólo económico. Un metaanálisis grande encontró que el desempleo empeora la salud mental, y que volver a trabajar suele mejorarla (Paul y Moser, 2009).',
        'No se puede reemplazar todo. Pero sí se pueden buscar algunas fuentes mientras tanto: un horario, un grupo, una tarea con sentido.',
      ],
      tips: [
        'Un voluntariado, un curso o un club pueden dar horario y gente.',
        'Ayudar a alguien también da la sensación de ser útil.',
        'No hace falta cubrir todo. Elige una sola cosa para empezar.',
      ],
      obstacles: [{ q: 'No tengo plata para actividades.', a: 'Muchas opciones son gratis: caminar con alguien a una hora fija, una biblioteca, un grupo del barrio o un voluntariado. Lo importante es el horario y la compañía.' }],
      cautions: CONSULTAR,
      steps: [
        { title: 'Llegar', instruction: 'Siéntate con comodidad. Respira despacio tres veces.', durationSec: 30, kind: 'breath' },
        { title: 'Horario', instruction: '¿El trabajo te daba un horario? Anota qué parte de eso extrañas.', durationSec: 40, kind: 'reflection' },
        { title: 'Gente', instruction: '¿Con qué personas hablabas en el trabajo? Anota qué te daba ese contacto.', durationSec: 40, kind: 'reflection' },
        { title: 'Metas y lugar', instruction: '¿Qué metas compartías? ¿Qué decía el trabajo de quién eres? Escribe una frase.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que más falta', instruction: 'De todo eso, marca lo que más extrañas hoy.', durationSec: 30, kind: 'reflection' },
        { title: 'Una fuente nueva', instruction: 'Piensa una forma de tener un poco de eso esta semana. Algo chico y posible. Anótalo.', durationSec: 50, kind: 'reflection' },
      ],
    },
    {
      id: 'despedir-un-trabajo',
      title: 'Despedir un trabajo',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Darle lugar al duelo por el trabajo perdido: lo que extrañas, lo que no, y lo que te llevas.',
      mechanism: 'Perder un trabajo es una pérdida real. Nombrar lo que se fue y lo que queda ayuda a cerrar una etapa y a mirar hacia adelante con menos peso.',
      evidenceLevel: 'preliminar',
      evidence: [WANBERG_2012, MCKEE_RYAN_2005],
      howItWorks: [
        'Perder un trabajo puede doler como otras pérdidas. Puede haber tristeza, enojo, miedo o vergüenza. Cuanto más importante era el trabajo para tu identidad, más fuerte suele ser el golpe (McKee-Ryan y colaboradores, 2005).',
        'Cada experiencia de desempleo es distinta. Depende de cómo fue la salida, de la plata, del apoyo y de lo que significa el trabajo para cada persona (Wanberg, 2012).',
        'Escribir lo que extrañas y lo que te llevas ayuda a ordenar. No borra el enojo ni la tristeza, pero les da un lugar.',
      ],
      tips: [
        'Si la salida fue injusta, el enojo tiene sentido. Escríbelo aquí, no en redes.',
        'Lo que aprendiste en ese trabajo sigue siendo tuyo.',
        'Para dudas legales sobre el despido, busca asesoramiento especializado.',
      ],
      obstacles: [{ q: 'Me echaron y siento que es mi culpa.', a: 'Muchos despidos dependen de cosas que no controlas, como la economía o decisiones de la empresa. Si hubo errores, puedes aprender de ellos sin definirte por eso.' }],
      cautions: CONSULTAR,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en el trabajo que ya no tienes.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que extraño', instruction: 'Escribe lo que extrañas. Personas, tareas, el lugar, la rutina.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que no', instruction: 'Escribe también lo que no extrañas. Puede que haya algo.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que siento', instruction: 'Nombra lo que sientes hoy. Tristeza, enojo, miedo, vergüenza, alivio. Todo puede estar.', durationSec: 40, kind: 'reflection' },
        { title: 'Lo que me llevo', instruction: 'Anota tres cosas que aprendiste o lograste ahí. Siguen siendo tuyas.', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho. Dite: «Esto fue una pérdida. Sigo adelante a mi ritmo».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'un-dia-con-forma',
      title: 'Un día con forma',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Armar una estructura simple para el día, con horario fijo, búsqueda acotada y actividades que te hagan bien.',
      mechanism: 'Sin horario, el día se desarma y el ánimo baja. Planear actividades de logro, placer y contacto, antes de tener ganas, rompe el círculo del desánimo.',
      evidenceLevel: 'moderada',
      evidence: [JAHODA_1982, MCKEE_RYAN_2005],
      howItWorks: [
        'Jahoda señaló que una de las cosas que más se pierden con el trabajo es la estructura del tiempo (Jahoda, 1982). Los días sin forma se hacen largos y cansan.',
        'La activación conductual propone no esperar a tener ganas. Primero se hace algo chico y después, muchas veces, mejora el ánimo. En el desempleo, ayuda armar el día con un poco de búsqueda, algo de logro, algo de placer y algo de contacto.',
        'Los recursos como el apoyo social y una rutina se asocian con mejor bienestar durante el desempleo (McKee-Ryan y colaboradores, 2005).',
      ],
      tips: [
        'Levántate a una hora fija, aunque no tengas que ir a ningún lado.',
        'Pon un horario a la búsqueda, y también un final. Buscar todo el día agota.',
        'Incluye algo que te guste y algo con otras personas.',
      ],
      obstacles: [{ q: 'No tengo ganas de nada.', a: 'Es esperable. Empieza por lo más chico: levantarte a horario y salir diez minutos. Si el desánimo no se va en unas semanas, consulta con un profesional.' }],
      cautions: CONSULTAR,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Ten a mano papel o el celular.', durationSec: 30, kind: 'breath' },
        { title: 'Un inicio', instruction: 'Elige una hora fija para levantarte. Anótala.', durationSec: 30, kind: 'reflection' },
        { title: 'Búsqueda', instruction: 'Elige un bloque para buscar trabajo. Por ejemplo, de diez a doce. Con inicio y final.', durationSec: 40, kind: 'reflection' },
        { title: 'Logro', instruction: 'Anota una tarea chica que te dé sensación de logro. Arreglar algo, ordenar, aprender.', durationSec: 40, kind: 'reflection' },
        { title: 'Placer y gente', instruction: 'Anota algo que te guste y una persona con quien hablar mañana.', durationSec: 40, kind: 'reflection' },
        { title: 'Cuerpo', instruction: 'Agrega un rato de movimiento. Caminar quince minutos alcanza.', durationSec: 30, kind: 'reflection' },
        { title: 'Revisar', instruction: 'Mira tu día. ¿Es posible? Si es mucho, saca algo. Mejor poco y real.', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'buscar-en-lo-que-depende-de-mi',
      title: 'Buscar en lo que depende de mí',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Separar lo que controlas en la búsqueda, como cuánto y cómo buscas, de lo que no, como el mercado o las respuestas.',
      mechanism: 'Poner la energía en lo que depende de ti y soltar lo que no baja la preocupación y sostiene la búsqueda en el tiempo.',
      evidenceLevel: 'moderada',
      evidence: [WANBERG_2012, VINOKUR_2000],
      howItWorks: [
        'Buscar trabajo tiene partes que controlas y partes que no. No controlas cuántos puestos hay ni si te llaman. Sí controlas cuánto buscas, cómo preparas una entrevista y a quién le avisas (Wanberg, 2012).',
        'El programa JOBS enseñaba a buscar trabajo y a anticipar obstáculos, en grupo y con apoyo. Dos años después, quienes participaron tenían mejores resultados de empleo y menos síntomas de depresión, sobre todo quienes estaban en más riesgo (Vinokur y colaboradores, 2000).',
        'Esta práctica no te dice cómo buscar en tu rubro. Te ayuda a ordenar la energía.',
      ],
      tips: [
        'Mide tu búsqueda por lo que haces, no por las respuestas que recibes.',
        'Anticipa un obstáculo y piensa qué harías.',
        'Para la plata, puedes usar también la práctica sobre lo que controlas de tu plata.',
      ],
      obstacles: [{ q: 'Busco y busco y no pasa nada.', a: 'Es muy frustrante. El resultado no depende sólo de ti. Revisa si hay algo que puedes cambiar en cómo buscas, y date crédito por seguir intentando.' }],
      cautions: CONSULTAR,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Suelta el aire más largo de lo que entra.', durationSec: 30, kind: 'breath' },
        { title: 'Vaciar', instruction: 'Escribe todo lo que te preocupa de la búsqueda, sin orden.', durationSec: 60, kind: 'instruction' },
        { title: 'Separar', instruction: 'Marca lo que depende de ti. Por ejemplo, cuántas búsquedas haces o a quién avisas.', durationSec: 50, kind: 'reflection' },
        { title: 'Lo que no', instruction: 'Mira lo que no depende de ti. Dite: «Esto no lo controlo. Lo dejo pasar por hoy».', durationSec: 40, kind: 'breath' },
        { title: 'Una meta de acción', instruction: 'Elige una meta para esta semana que dependa de ti. Por ejemplo, dos postulaciones y un mensaje.', durationSec: 50, kind: 'reflection' },
        { title: 'Un obstáculo', instruction: 'Anota qué podría frenarte y qué harías si pasa.', durationSec: 40, kind: 'reflection' },
      ],
    },
    {
      id: 'despues-de-un-no',
      title: 'Después de un «no»',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Atravesar un rechazo en una búsqueda o una entrevista sin tomarlo como un juicio sobre quién eres, y con amabilidad hacia ti.',
      mechanism: 'Leer un rechazo como prueba de que no vales aumenta la vergüenza y frena la búsqueda. Buscar otras explicaciones y hablarte con amabilidad ayuda a seguir.',
      evidenceLevel: 'preliminar',
      evidence: [MCKEE_RYAN_2005, WANBERG_2012],
      howItWorks: [
        'En una búsqueda, los «no» son muchos más que los «sí». Es parte del proceso. Pero cada rechazo puede sentirse como un juicio sobre ti.',
        'Un «no» depende de muchas cosas: cuántas personas se postularon, qué buscaba la empresa, el momento. La mayoría no tiene que ver con tu valor como persona.',
        'Cómo te explicas el desempleo y cuánto te culpas se asocia con el bienestar durante la búsqueda (McKee-Ryan y colaboradores, 2005). Tratarte con amabilidad no es conformarse. Es lo que te permite seguir.',
      ],
      tips: [
        'Separa el hecho («no me eligieron») de la conclusión («no sirvo»).',
        'Si puedes, anota algo que harías distinto la próxima vez. Sólo una cosa.',
        'Después de un «no», haz algo que te haga bien antes de volver a buscar.',
      ],
      obstacles: [{ q: 'Me da vergüenza contar que sigo sin trabajo.', a: 'La vergüenza es muy común en el desempleo. Pero perder el trabajo es una situación, no un defecto. Muchas personas pasan por esto. Contarlo a alguien de confianza suele aliviar.' }],
      cautions: CONSULTAR,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Pon una mano en el pecho.', durationSec: 30, kind: 'breath' },
        { title: 'El hecho', instruction: 'Escribe lo que pasó en una frase. Por ejemplo: «No me eligieron para el puesto».', durationSec: 40, kind: 'reflection' },
        { title: 'Lo que me digo', instruction: 'Escribe lo que te dice tu mente sobre eso. Por ejemplo: «Nunca voy a conseguir nada».', durationSec: 40, kind: 'reflection' },
        { title: 'Otras razones', instruction: 'Anota tres razones posibles que no dependen de tu valor. Muchas personas, otro perfil, el momento.', durationSec: 60, kind: 'reflection' },
        { title: 'Una lección', instruction: 'Si hay algo que harías distinto, anota una sola cosa. Si no la hay, está bien.', durationSec: 40, kind: 'reflection' },
        { title: 'Amabilidad', instruction: 'Dite: «Esto es difícil. Muchas personas pasan por esto. Me trato bien».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'mi-red-sin-verguenza',
      title: 'Mi red, sin vergüenza',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Hacer un mapa de personas que pueden acompañarte o darte un dato, y escribir un mensaje simple para avisar que buscas trabajo.',
      mechanism: 'La vergüenza lleva a aislarse justo cuando más ayuda la red. Avisar a otros con un mensaje preparado vuelve más fácil pedir apoyo y abre oportunidades.',
      evidenceLevel: 'moderada',
      evidence: [VINOKUR_2000, MCKEE_RYAN_2005],
      howItWorks: [
        'El apoyo de otras personas se asocia con mejor bienestar durante el desempleo (McKee-Ryan y colaboradores, 2005). Además, muchas oportunidades llegan por conocidos.',
        'Pero la vergüenza hace que muchas personas no cuenten que están buscando. El programa JOBS trabajaba en grupo justamente para dar apoyo y práctica (Vinokur y colaboradores, 2000).',
        'Esta práctica tiene dos partes: quiénes pueden acompañarte y quiénes pueden darte un dato. A veces son las mismas personas.',
      ],
      tips: [
        'Un mensaje corto y claro funciona mejor que uno largo.',
        'Piensa también en gente de trabajos anteriores, del barrio y en amistades de amistades.',
        'Pedir ayuda no es molestar. Muchas personas se alegran de poder darla.',
      ],
      obstacles: [{ q: 'No quiero dar lástima.', a: 'Avisar que buscas trabajo es algo común. Un mensaje simple, sin explicar de más, se lee como lo que es: alguien que se mueve.' }],
      cautions: CONSULTAR,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Ten a mano papel o el celular.', durationSec: 30, kind: 'breath' },
        { title: 'Quién me acompaña', instruction: 'Escribe los nombres de dos o tres personas con quienes puedes hablar de cómo estás.', durationSec: 50, kind: 'reflection' },
        { title: 'Quién sabe algo', instruction: 'Escribe nombres de personas que podrían darte un dato. Gente de trabajos anteriores, del barrio, conocidos.', durationSec: 60, kind: 'reflection' },
        { title: 'Un mensaje', instruction: 'Escribe un mensaje corto. Por ejemplo: «Estoy buscando trabajo en tal área. Si sabes de algo, avísame».', durationSec: 60, kind: 'reflection' },
        { title: 'La vergüenza', instruction: 'Si aparece vergüenza, nómbrala. Dite: «Buscar trabajo no es un defecto».', durationSec: 30, kind: 'breath' },
        { title: 'Un envío', instruction: 'Elige a una persona y decide cuándo le escribirás. Hoy o mañana.', durationSec: 30, kind: 'reflection' },
      ],
    },
  ],

  meta: {
    'lo-que-el-trabajo-me-daba': { level: 'iniciacion', approaches: ['positiva', 'act'], module: 'trabajo' },
    'despedir-un-trabajo': { level: 'iniciacion', approaches: ['escritura', 'narrativa'], module: 'trabajo' },
    'un-dia-con-forma': { level: 'iniciacion', approaches: ['tcc'], module: 'trabajo', prerequisites: ['activacion-conductual'] },
    'buscar-en-lo-que-depende-de-mi': { level: 'iniciacion', approaches: ['tcc', 'act'], module: 'trabajo' },
    'despues-de-un-no': { level: 'intermedio', approaches: ['cft', 'tcc'], module: 'trabajo', prerequisites: ['pausa-autocompasion'] },
    'mi-red-sin-verguenza': { level: 'iniciacion', approaches: ['interpersonal', 'soluciones'], module: 'trabajo' },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'perder-el-trabajo',
      title: 'Perder el trabajo y buscar otro',
      subtitle: 'Por qué duele más que la plata, y cómo cuidarte mientras buscas.',
      category: 'Salud y trabajo',
      readingMin: 9,
      keyPoints: [
        'El trabajo da más que un sueldo: horario, gente, metas, un lugar y actividad.',
        'El desempleo afecta la salud mental, y volver a trabajar suele mejorarla.',
        'Una estructura del día, con búsqueda acotada y actividades que te hagan bien, protege el ánimo.',
        'Pon la energía en lo que depende de ti. Un «no» casi nunca habla de tu valor.',
        'Ante desánimo que no se va, más consumo o ideas de morir: 135, 0800-999-0091 o 911.',
      ],
      sections: [
        {
          heading: 'Más que un sueldo',
          paragraphs: [
            'Marie Jahoda estudió el desempleo durante décadas. Propuso que el trabajo da plata, pero también otras cosas que no se ven hasta que faltan: una estructura del tiempo, contacto con gente fuera de la familia, metas compartidas, un lugar en la sociedad y actividad regular (Jahoda, 1982).',
            'Por eso perder el trabajo golpea la identidad y la rutina, no sólo el bolsillo. Un metaanálisis de muchos estudios encontró que el desempleo empeora la salud mental, y que conseguir trabajo de nuevo suele mejorarla (Paul y Moser, 2009).',
          ],
        },
        {
          heading: 'También es un duelo',
          paragraphs: [
            'Puede haber tristeza, enojo, miedo, vergüenza o alivio. Cuanto más central era el trabajo para tu identidad, más fuerte suele ser el golpe (McKee-Ryan y colaboradores, 2005). Cada experiencia es distinta: depende de cómo fue la salida, de la plata, del apoyo y de la historia de cada persona (Wanberg, 2012).',
            'Darle un lugar a lo que perdiste ayuda a mirar hacia adelante. Lo que aprendiste y lograste sigue siendo tuyo.',
          ],
        },
        {
          heading: 'Darle forma al día',
          paragraphs: [
            'Sin horario, los días se desarman y el ánimo baja. Ayuda levantarse a una hora fija, poner un bloque para la búsqueda con inicio y final, y sumar algo de logro, algo de placer, algo de movimiento y algo de contacto.',
            'Es la idea de la activación conductual: no esperar a tener ganas. Primero se hace algo chico, y muchas veces el ánimo acompaña después.',
          ],
        },
        {
          heading: 'Lo que depende de ti',
          paragraphs: [
            'No controlas el mercado ni las respuestas. Sí controlas cuánto y cómo buscas, cómo te preparas y a quién avisas. Medir la búsqueda por lo que haces, y no sólo por los resultados, ayuda a sostenerla.',
            'El programa JOBS enseñaba a buscar trabajo y a anticipar obstáculos, en grupo y con apoyo. Dos años después, quienes participaron tenían mejores resultados de empleo y menos síntomas de depresión, sobre todo quienes estaban en más riesgo (Vinokur y colaboradores, 2000).',
          ],
        },
        {
          heading: 'Rechazo y vergüenza',
          paragraphs: [
            'En una búsqueda, los «no» son muchos. Un rechazo depende de muchas cosas que no tienen que ver con tu valor. Separar el hecho («no me eligieron») de la conclusión («no sirvo») ayuda a seguir.',
            'La vergüenza lleva a aislarse justo cuando más ayuda la red. Perder el trabajo es una situación, no un defecto. Contarlo a personas de confianza y avisar que buscas suele abrir apoyo y oportunidades.',
          ],
        },
        {
          heading: 'Plata y familia',
          paragraphs: [
            'La falta de plata suma mucha presión. Ayuda separar lo que puedes hacer con tu plata de lo que no, y hablar de plata en familia con calma. En la sección sobre estrés económico hay ideas para eso.',
            'Los chicos notan los cambios. Puedes explicarles con palabras simples que estás buscando trabajo y que los adultos se ocupan. Para dudas legales o de indemnización, busca asesoramiento especializado.',
          ],
        },
        {
          heading: 'Cuándo pedir ayuda',
          paragraphs: [
            'Consulta con un profesional si el desánimo no se va en unas semanas, si dejas de hacer casi todo, si duermes muy mal o si bebes o consumes más para aguantar. La Línea 141 de SEDRONAR orienta sobre consumos.',
            'Si piensas en morir, pide ayuda hoy. Llama al 135 (CABA y GBA; resto del país 0800-345-1435) o al 0800-999-0091. Si hay peligro inmediato, llama al 911.',
          ],
        },
      ],
      caveat: {
        title: 'Lo que esta sección no hace',
        body: 'Aquí no hay consejos legales ni laborales específicos, como indemnizaciones, trámites o cómo armar un currículum. Los estudios muestran relaciones entre desempleo y salud mental, pero cada situación es distinta. Las ideas prácticas acompañan la búsqueda; no garantizan conseguir trabajo.',
      },
      diagram: {
        title: 'El círculo del desempleo',
        nodes: ['Perder el trabajo', 'Días sin forma', 'Desánimo y vergüenza', 'Aislarse y buscar menos', 'Menos oportunidades'],
        caption: 'Un día con forma, metas que dependen de ti y avisar a tu red ayudan a cortar el círculo.',
      },
      related: {
        practices: ['lo-que-el-trabajo-me-daba', 'despedir-un-trabajo', 'un-dia-con-forma', 'buscar-en-lo-que-depende-de-mi', 'despues-de-un-no', 'mi-red-sin-verguenza', 'activacion-conductual', 'plata-controlable', 'hablar-de-plata'],
        articles: ['estres-economico', 'activacion-conductual'],
      },
      references: [JAHODA_1982, PAUL_MOSER_2009, MCKEE_RYAN_2005, WANBERG_2012, VINOKUR_2000],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'entre-trabajos',
      title: 'Entre trabajos',
      subtitle: 'Cuatro semanas para cuidarte mientras buscas trabajo',
      description:
        'Para quien perdió el trabajo o lleva un tiempo buscando. Le darás un lugar a la pérdida, armarás días con forma, pondrás la energía en lo que depende de ti y sostendrás la búsqueda con tu red y con amabilidad. No es asesoramiento legal ni laboral, ni reemplaza la ayuda profesional.',
      basis: 'Jahoda (1982); Paul y Moser (2009); McKee-Ryan y colaboradores (2005); Vinokur y colaboradores (2000).',
      rhythm: 'Unos minutos, 3 o 4 días por semana. Puedes repetir cualquier semana.',
      weeks: [
        {
          title: 'Semana 1 · Lo que perdí',
          focus: 'Nombrar la pérdida',
          description: 'Despedirás el trabajo y verás qué te daba además del sueldo.',
          practiceIds: ['despedir-un-trabajo', 'lo-que-el-trabajo-me-daba'],
          articleIds: ['perder-el-trabajo'],
          journalType: 'escritura-expresiva',
        },
        {
          title: 'Semana 2 · Un día con forma',
          focus: 'Rutina y activación',
          description: 'Armarás un horario simple con búsqueda acotada y actividades que te hagan bien.',
          practiceIds: ['un-dia-con-forma', 'activacion-conductual'],
          articleIds: [],
          journalType: 'activacion',
        },
        {
          title: 'Semana 3 · Lo que depende de mí',
          focus: 'Búsqueda y plata',
          description: 'Separarás lo que controlas de lo que no, en la búsqueda y en la plata.',
          practiceIds: ['buscar-en-lo-que-depende-de-mi', 'plata-controlable'],
          articleIds: ['estres-economico'],
          journalType: 'resolucion-problemas',
        },
        {
          title: 'Semana 4 · Seguir sin perderme',
          focus: 'Rechazo, vergüenza y red',
          description: 'Atravesarás los «no» con amabilidad y avisarás a tu red que buscas.',
          practiceIds: ['despues-de-un-no', 'mi-red-sin-verguenza'],
          articleIds: [],
          journalType: 'carta-compasiva',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-lo-que-da-un-trabajo',
      title: 'Más que un sueldo',
      subtitle: 'Lo que el trabajo da y no se ve.',
      slides: [
        { heading: 'No sólo plata', text: 'El trabajo da plata. Pero también da otras cosas que no se ven.' },
        { heading: 'Lo invisible', text: 'Un horario, gente, metas, un lugar y algo que hacer cada día.' },
        { heading: 'Cuando falta', text: 'Al perder el trabajo, se pierde todo eso junto. Por eso el golpe es grande.' },
        { heading: 'Buscar otras fuentes', text: 'Un curso, un club, un voluntariado o una caminata a hora fija. Algo de eso vuelve.' },
        { heading: 'De a poco', text: 'No hace falta cubrir todo. Elige una sola cosa para esta semana.' },
      ],
      related: { practices: ['lo-que-el-trabajo-me-daba'], articles: ['perder-el-trabajo'] },
      references: [JAHODA_1982, PAUL_MOSER_2009],
    },
    {
      id: 'pildora-un-no-no-eres-tu',
      title: 'Un «no» no eres tú',
      subtitle: 'El rechazo en la búsqueda de trabajo.',
      slides: [
        { heading: 'Parte del camino', text: 'Al buscar trabajo, los «no» son muchos más que los «sí». Es parte del proceso.' },
        { heading: 'Muchas razones', text: 'Muchas personas, otro perfil, el momento. Casi nunca es por tu valor.' },
        { heading: 'Hecho y conclusión', text: '«No me eligieron» es un hecho. «No sirvo» es una conclusión. No son lo mismo.' },
        { heading: 'Una lección', text: 'Si hay algo que harías distinto, anota una cosa. Si no la hay, está bien.' },
        { heading: 'Amabilidad', text: 'Después de un «no», haz algo que te haga bien. Tratarte bien te ayuda a seguir.' },
      ],
      related: { practices: ['despues-de-un-no'], articles: ['perder-el-trabajo'] },
      references: [MCKEE_RYAN_2005, WANBERG_2012],
    },
    {
      id: 'pildora-un-dia-con-forma',
      title: 'Un día con forma',
      subtitle: 'La rutina también cuida el ánimo.',
      slides: [
        { heading: 'Días sin forma', text: 'Sin horario, el día se hace largo y el ánimo baja. Pasa muy seguido.' },
        { heading: 'Una hora fija', text: 'Levántate a la misma hora, aunque no tengas que ir a ningún lado.' },
        { heading: 'Búsqueda con final', text: 'Pon un horario para buscar. Con inicio y con final. Buscar todo el día agota.' },
        { heading: 'Lo demás', text: 'Suma algo que te guste, algo de movimiento y alguien con quien hablar.' },
        { heading: 'Sin esperar ganas', text: 'Primero haz algo chico. Muchas veces el ánimo llega después.' },
      ],
      related: { practices: ['un-dia-con-forma', 'activacion-conductual'], articles: ['perder-el-trabajo'] },
      references: [JAHODA_1982, MCKEE_RYAN_2005],
    },
    {
      id: 'pildora-desempleo-y-verguenza',
      title: 'Sin trabajo, sin vergüenza',
      subtitle: 'Perder el trabajo es una situación, no un defecto.',
      slides: [
        { heading: 'La vergüenza', text: 'Muchas personas sienten vergüenza al quedarse sin trabajo. Es muy común.' },
        { heading: 'Una situación', text: 'Perder el trabajo es algo que te pasa. No dice quién eres.' },
        { heading: 'No aislarse', text: 'La vergüenza lleva a esconderse. Pero la red es lo que más ayuda ahora.' },
        { heading: 'Un mensaje', text: '«Estoy buscando trabajo. Si sabes de algo, avísame». Con eso alcanza.' },
        { heading: 'Pedir ayuda', text: 'Si el desánimo no se va o piensas en morir, consulta. Llama al 135 o al 0800-999-0091.' },
      ],
      related: { practices: ['mi-red-sin-verguenza', 'despues-de-un-no'], articles: ['perder-el-trabajo', 'estres-economico'] },
      references: [MCKEE_RYAN_2005, VINOKUR_2000],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'funciones-latentes-del-empleo', term: 'Funciones latentes del empleo', definition: 'Lo que el trabajo da además del sueldo, según Marie Jahoda: estructura del tiempo, contacto social, metas compartidas, un lugar en la sociedad y actividad regular.', articleId: 'perder-el-trabajo', practiceId: 'lo-que-el-trabajo-me-daba' },
    { id: 'duelo-por-el-empleo', term: 'Duelo por el empleo', definition: 'Las reacciones ante la pérdida de un trabajo: tristeza, enojo, miedo o vergüenza. Es una pérdida real y merece un lugar.', articleId: 'perder-el-trabajo', practiceId: 'despedir-un-trabajo' },
    { id: 'programa-jobs', term: 'Programa JOBS', definition: 'Programa grupal para personas desempleadas que enseña a buscar trabajo y a anticipar obstáculos, con apoyo. Mostró beneficios en empleo y salud mental.', articleId: 'perder-el-trabajo', practiceId: 'buscar-en-lo-que-depende-de-mi' },
  ],
};
