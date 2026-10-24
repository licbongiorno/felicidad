import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Apuestas»: apuestas en línea y juego problemático.
 *  - balance de lo que el juego da y lo que cuesta (entrevista motivacional, Miller y Rollnick);
 *  - señales de alarma: perseguir pérdidas, mentir, pedir plata, apostar para escapar;
 *  - errores de pensamiento del juego (TCC: Ladouceur; Toneatto): ilusión de control,
 *    falacia del jugador, «casi gano»;
 *  - barreras al acceso (autoexclusión, bloqueos, delegar la plata; Gainsbury) y surfear la urgencia;
 *  - deudas y conversación con la familia;
 *  - guía para madres, padres y tutores sobre adolescentes y apuestas (módulo «etapas»).
 *
 * Seguridad: los problemas con el juego y las deudas se asocian con más riesgo de suicidio. Cada
 * práctica remite al 135, a la Línea 0800-999-0091 y al 911 si aparecen ideas de morir, y a la
 * Línea 141 de SEDRONAR para orientación. No se dan datos de prevalencia argentinos.
 */

const PETRY_2006: Reference = {
  citation:
    'Petry, N. M., Ammerman, Y., Bohl, J., Doersch, A., Gay, H., Kadden, R., Molina, C., & Steinberg, K. (2006). Cognitive-behavioral therapy for pathological gamblers. Journal of Consulting and Clinical Psychology, 74(3), 555–567.',
  doi: '10.1037/0022-006X.74.3.555',
};
const HODGINS_2011: Reference = {
  citation: 'Hodgins, D. C., Stea, J. N., & Grant, J. E. (2011). Gambling disorders. The Lancet, 378(9806), 1874–1884.',
  doi: '10.1016/S0140-6736(10)62185-X',
};
const LADOUCEUR_2001: Reference = {
  citation:
    'Ladouceur, R., Sylvain, C., Boutin, C., Lachance, S., Doucet, C., Leblond, J., & Jacques, C. (2001). Cognitive treatment of pathological gambling. Journal of Nervous and Mental Disease, 189(11), 774–780.',
};
const MILLER_2013: Reference = { citation: 'Miller, W. R., & Rollnick, S. (2013). Motivational interviewing: Helping people change (3.ª ed.). Guilford Press.' };
const TONEATTO_1997: Reference = {
  citation: 'Toneatto, T., Blitz-Miller, T., Calderwood, K., Dragonetti, R., & Tsanos, A. (1997). Cognitive distortions in heavy gambling. Journal of Gambling Studies, 13(3), 253–266.',
};
const GAINSBURY_2014: Reference = {
  citation: 'Gainsbury, S. M. (2014). Review of self-exclusion from gambling venues as an intervention for problem gambling. Journal of Gambling Studies, 30(2), 229–251.',
};
const CLARK_2009: Reference = {
  citation: 'Clark, L., Lawrence, A. J., Astley-Jones, F., & Gray, N. (2009). Gambling near-misses enhance motivation to gamble and recruit win-related brain circuitry. Neuron, 61(3), 481–490.',
};
const BOWEN_2009: Reference = {
  citation: 'Bowen, S., & Marlatt, G. A. (2009). Surfing the urge: Brief mindfulness-based intervention for college student smokers. Psychology of Addictive Behaviors, 23(4), 666–671.',
  doi: '10.1037/a0017127',
};
const SEDRONAR: Reference = {
  citation: 'Secretaría de Políticas Integrales sobre Drogas de la Nación Argentina. (2024). Línea 141: atención y orientación sobre consumos. SEDRONAR.',
  note: 'Gratuita, anónima y las 24 horas en todo el país. También orienta sobre el juego y las apuestas.',
};

/** Aviso común: riesgo suicida asociado al juego y las deudas, y a quién llamar. */
const JUEGO =
  'Los problemas con el juego y las deudas se asocian con más riesgo de suicidio. Si aparecen ideas de morir o de hacerte daño, llama al 135 (CABA y GBA; resto del país 0800-345-1435), a la Línea Nacional de Salud Mental 0800-999-0091 o al 911. Para orientación sobre el juego, la Línea 141 de SEDRONAR es gratuita y atiende las 24 horas.';

export const APUESTAS_PACK: ContentPack = {
  id: 'apuestas',

  // ================================================================== prácticas
  practices: [
    {
      id: 'balance-de-las-apuestas',
      title: 'Balance de las apuestas',
      family: 'constructive',
      skills: ['resilience'],
      summary: 'Mirar con honestidad lo que te dan y lo que te cuestan las apuestas, y qué te gustaría cambiar, sin sermones.',
      mechanism: 'Poner en palabras tus propias razones, a favor y en contra, aclara la ambivalencia. Las razones dichas por uno mismo empujan más el cambio que las impuestas.',
      evidenceLevel: 'moderada',
      evidence: [
        { citation: 'Miller, W. R., & Rose, G. S. (2015). Motivational interviewing and decisional balance: Contrasting responses to client ambivalence. Behavioural and Cognitive Psychotherapy, 43(2), 129–141.', note: 'En personas muy ambivalentes, el balance de pros y contras puede bajar el compromiso con el cambio.' },
        MILLER_2013,
        HODGINS_2011,
      ],
      cautions: JUEGO,
      howItWorks: [
        'La entrevista motivacional parte de una idea simple: querer y no querer cambiar a la vez es normal. Los sermones suelen generar más resistencia. Escuchar las propias razones abre la puerta (Miller y Rollnick, 2013).',
        'El balance mira cuatro cosas. Lo bueno de seguir igual. Lo malo de seguir igual. Lo bueno de cambiar. Lo difícil de cambiar. Reconocer lo que el juego te da, como emoción o distracción, no es justificarlo: es entender por qué cuesta.',
        'Las intervenciones breves de tipo motivacional tienen evidencia en los problemas con el juego, sobre todo como primer paso (Hodgins y colaboradores, 2011).',
      ],
      tips: [
        'Si al anotar pros y contras sientes que te convences más de seguir igual, no fuerces la lista. Vuelve a lo que te importa y a lo que te gustaría distinto: eso suele ayudar más que sumar argumentos.',
        'Escribe con tus palabras, no con las que crees que deberías usar.',
        'Cuenta la plata en números concretos. Ver la cifra ayuda a ver claro.',
        'No hace falta decidir nada hoy. Este ejercicio es para mirar.',
      ],
      obstacles: [
        { q: 'Me da vergüenza mirar cuánto perdí.', a: 'Es muy común. La vergüenza lleva a esconder, y esconder empeora el problema. Míralo como un dato, igual que una cuenta de luz.' },
        { q: 'A veces gano, así que no es tan grave.', a: 'Anota también lo que ganaste. Después compara con lo que perdiste en el mismo tiempo. El total suele decir otra cosa.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Siéntate con calma y respira despacio. Piensa en cómo apostaste en el último mes.', durationSec: 40, kind: 'breath' },
        { title: 'Lo que te da', instruction: '¿Qué te dan las apuestas? Emoción, distracción, la ilusión de ganar. Anota dos o tres cosas con honestidad.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que te cuesta', instruction: '¿Qué te cuestan? Plata, sueño, peleas, tiempo, secretos. Anota lo que aparezca, con números si puedes.', durationSec: 75, kind: 'reflection' },
        { title: 'Si cambias', instruction: 'Imagina que apuestas mucho menos o nada. ¿Qué ganarías? ¿Qué sería lo más difícil?', durationSec: 75, kind: 'reflection' },
        { title: 'Cuánto importa', instruction: 'Del cero al diez, ¿cuánto te importa cambiar algo? ¿Por qué no un número más bajo?', durationSec: 50, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Lee lo que escribiste. Subraya la razón que más te mueve. Guárdala a mano.', durationSec: 40, kind: 'instruction' },
      ],
    },
    {
      id: 'senales-de-alarma-del-juego',
      title: 'Señales de alarma del juego',
      family: 'attentional',
      skills: ['attention'],
      summary: 'Revisar con calma si aparecen las señales que indican que el juego se volvió un problema, y qué hacer con lo que encuentres.',
      mechanism: 'Nombrar conductas concretas, como perseguir pérdidas o mentir, saca el problema de la niebla. Ver el patrón es el primer paso para pedir ayuda a tiempo.',
      evidenceLevel: 'preliminar',
      evidence: [HODGINS_2011, SEDRONAR],
      cautions: JUEGO,
      howItWorks: [
        'El juego problemático no se define por cuánto se juega, sino por lo que pasa alrededor. Hay señales muy típicas: apostar para recuperar lo perdido, necesitar apostar más para sentir lo mismo, mentir, pedir plata y apostar para escapar de un mal momento (Hodgins y colaboradores, 2011).',
        'Las apuestas en línea están en el celular todo el día. No cierran nunca y se paga con un toque. Por eso el problema puede crecer rápido y sin que nadie lo note.',
        'Esta revisión no es un diagnóstico. Sirve para mirar. Si te reconoces en varias señales, conviene hablar con un profesional o llamar a la Línea 141.',
      ],
      tips: [
        'Responde pensando en los últimos tres meses.',
        'Si dudas en una pregunta, anótala igual. La duda también es información.',
        'Puedes hacer esta revisión cada mes para ver cómo vas.',
      ],
      obstacles: [{ q: 'Me reconozco en casi todas.', a: 'Gracias por mirar con honestidad. Es un buen momento para pedir ayuda. La Línea 141 de SEDRONAR orienta gratis y las 24 horas.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en los últimos tres meses, sin juzgarte.', durationSec: 30, kind: 'breath' },
        { title: 'Perseguir', instruction: '¿Volviste a apostar para recuperar lo que perdiste? Anota si pasó y cuántas veces.', durationSec: 45, kind: 'reflection' },
        { title: 'Más y más', instruction: '¿Necesitas apostar más plata, o más seguido, para sentir la misma emoción? Anota lo que notes.', durationSec: 45, kind: 'reflection' },
        { title: 'Secretos', instruction: '¿Mentiste sobre cuánto juegas o cuánto perdiste? ¿Escondes el celular o los gastos?', durationSec: 45, kind: 'reflection' },
        { title: 'Plata', instruction: '¿Pediste plata, usaste ahorros o tomaste deudas para apostar o para tapar pérdidas?', durationSec: 45, kind: 'reflection' },
        { title: 'Escapar', instruction: '¿Apuestas para no sentir tristeza, enojo, aburrimiento o angustia? Anota cuándo pasa.', durationSec: 45, kind: 'reflection' },
        { title: 'Qué hago', instruction: 'Mira cuántas señales anotaste. Si son varias, elige un paso: hablar con alguien de confianza o llamar al 141.', durationSec: 45, kind: 'reflection' },
      ],
    },
    {
      id: 'trampas-del-jugador',
      title: 'Las trampas del pensamiento del juego',
      family: 'deconstructive',
      skills: ['attention', 'resilience'],
      summary: 'Atrapar los pensamientos que empujan a seguir apostando, como «ya me toca» o «casi gano», y responderles con lo que sabes del azar.',
      mechanism: 'Las creencias falsas sobre el azar mantienen el juego. Detectarlas y contrastarlas con cómo funciona la suerte les quita fuerza.',
      evidenceLevel: 'moderada',
      evidence: [LADOUCEUR_2001, TONEATTO_1997, CLARK_2009, PETRY_2006],
      cautions: JUEGO,
      howItWorks: [
        'Las personas que juegan mucho suelen tener ideas erróneas sobre el azar (Toneatto y colaboradores, 1997). La ilusión de control es creer que tu método, tu cábala o tu conocimiento cambian un resultado que es azar. La falacia del jugador es creer que, después de perder varias veces, «ya te toca» ganar.',
        'El «casi gano» es otra trampa. Quedar cerca de ganar activa el cerebro de forma parecida a una victoria y aumenta las ganas de seguir, aunque sea una pérdida (Clark y colaboradores, 2009).',
        'La terapia cognitiva del juego trabaja justamente sobre estas ideas, y redujo los síntomas en ensayos controlados (Ladouceur y colaboradores, 2001). La terapia cognitivo-conductual completa también tiene buena evidencia (Petry y colaboradores, 2006).',
      ],
      tips: [
        'El dado, la ruleta y la máquina no tienen memoria. Cada jugada empieza de cero.',
        'En las apuestas deportivas saber del tema ayuda poco: la casa ya calculó las cuotas para ganar.',
        'Escribe tu respuesta en una frase corta para tenerla lista en el momento.',
      ],
      obstacles: [{ q: 'Yo sé mucho de fútbol, no es sólo azar.', a: 'Saber del tema da sensación de control. Pero las cuotas están armadas para que, con el tiempo, gane la casa. Revisa tus resultados reales de varios meses.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Recuerda la última vez que apostaste más de lo que querías.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que pensaste', instruction: '¿Qué te dijiste antes de apostar? Escribe la frase tal como sonó en tu cabeza.', durationSec: 60, kind: 'reflection' },
        { title: 'Ponerle nombre', instruction: 'Mira si es una trampa. ¿Creías controlar el azar? ¿Pensaste que ya te tocaba? ¿Te empujó un «casi gano»?', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que sabes', instruction: 'Recuerda: cada jugada es nueva y el azar no tiene memoria. Casi ganar es perder. ¿Qué dicen los hechos?', durationSec: 60, kind: 'reflection' },
        { title: 'Otra frase', instruction: 'Escribe una respuesta corta para la próxima vez. Por ejemplo: «No me toca nada. Es azar y la casa gana».', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Guarda esa frase en el celular, donde la veas antes de abrir una aplicación de apuestas.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'barreras-al-juego',
      title: 'Poner barreras entre tú y las apuestas',
      family: 'constructive',
      skills: ['resilience'],
      summary: 'Armar un plan de barreras: autoexclusión en las plataformas, bloqueos de pagos y de sitios, y dejar la plata en manos de alguien de confianza por un tiempo.',
      mechanism: 'Cuanto más difícil es apostar en el momento de la urgencia, más tiempo hay para que la ola pase. Las barreras no dependen de la fuerza de voluntad.',
      evidenceLevel: 'preliminar',
      evidence: [GAINSBURY_2014, PETRY_2006, SEDRONAR],
      cautions: JUEGO,
      howItWorks: [
        'Muchas plataformas de apuestas ofrecen la autoexclusión: pides que no te dejen jugar por un tiempo. Una revisión encontró que quienes se autoexcluyen suelen jugar menos y sentirse mejor, aunque algunas personas encuentran la forma de seguir (Gainsbury, 2014).',
        'Por eso conviene sumar varias barreras. Bloquear sitios y aplicaciones en el celular. Pedir al banco o la billetera virtual que limite o bloquee pagos a apuestas, si lo ofrece. Y, por un tiempo, que otra persona maneje la plata o las tarjetas.',
        'La terapia cognitivo-conductual del juego también incluye controlar el acceso a la plata y a los lugares de juego (Petry y colaboradores, 2006).',
      ],
      tips: [
        'Haz las barreras en un momento tranquilo, no cuando tienes ganas de apostar.',
        'Elige un plazo largo de autoexclusión. Los plazos cortos se vencen justo cuando bajas la guardia.',
        'Delegar la plata no es perder tu libertad. Es un acuerdo por un tiempo, que pueden revisar juntos.',
        'Borra los datos de tarjetas guardados en el celular.',
      ],
      obstacles: [
        { q: 'Si quiero, igual encuentro otro sitio.', a: 'Puede pasar. La idea no es que sea imposible, sino más lento. Ese tiempo extra suele alcanzar para que la urgencia baje.' },
        { q: 'No quiero que nadie se entere.', a: 'Empieza por las barreras que puedes hacer sin contar nada. Más adelante, hablar con alguien de confianza suele ser un alivio.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Ten a mano el celular y, si puedes, papel para anotar.', durationSec: 30, kind: 'breath' },
        { title: 'Por dónde apuestas', instruction: 'Anota todos los sitios y aplicaciones donde apuestas, y cómo pagas: tarjeta, billetera virtual o transferencia.', durationSec: 60, kind: 'reflection' },
        { title: 'Autoexclusión', instruction: 'Busca en cada plataforma la opción de autoexclusión o de pausa. Anota cuáles la tienen y elige un plazo largo.', durationSec: 75, kind: 'instruction' },
        { title: 'Bloquear', instruction: 'Borra las aplicaciones. Activa un bloqueo de sitios de apuestas en el celular. Borra las tarjetas guardadas.', durationSec: 75, kind: 'instruction' },
        { title: 'Pagos', instruction: 'Anota si tu banco o billetera permite limitar pagos a apuestas. Si no sabes, apunta preguntar.', durationSec: 45, kind: 'reflection' },
        { title: 'Delegar', instruction: 'Piensa en alguien de confianza que pueda manejar tu plata o tus tarjetas por un tiempo. Anota su nombre.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Elige una barrera para hacer hoy mismo. Anota también la Línea 141, gratuita y las 24 horas.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'surfear-ganas-de-apostar',
      title: 'Surfear las ganas de apostar',
      family: 'attentional',
      skills: ['attention', 'resilience'],
      summary: 'Un par de minutos para notar la urgencia de apostar, dejarla subir y bajar como una ola, y elegir qué hacer.',
      mechanism: 'Observar la urgencia sin seguirla la debilita. Cada vez que la ola pasa sin apostar, el lazo entre las ganas y el gesto se afloja.',
      evidenceLevel: 'preliminar',
      evidence: [BOWEN_2009, PETRY_2006],
      cautions: JUEGO,
      micro: true,
      howItWorks: [
        'Las ganas de apostar suben, llegan a un pico y bajan, como una ola. Si no las sigues, pasan solas en minutos.',
        'Sarah Bowen y Alan Marlatt enseñaron a «surfear el impulso» a personas que fumaban, y fumaron menos en la semana siguiente (Bowen y Marlatt, 2009). Su uso en el juego es una adaptación, con poca investigación propia. Funciona mejor junto con barreras al acceso.',
      ],
      tips: [
        'Ten esta práctica a mano para los momentos de riesgo: partidos, noche, días de cobro.',
        'Si la ola no baja, cambia de lugar o llama a alguien.',
        'No hace falta ganar siempre. Cada ola que pasa cuenta.',
      ],
      obstacles: [{ q: 'Las ganas son demasiado fuertes.', a: 'Aleja el celular, sal del cuarto y llama a alguien. Si las ganas vienen con ideas de hacerte daño, llama al 135 o al 911.' }],
      steps: [
        { title: 'Parar', instruction: 'Deja el celular boca abajo, lejos de la mano. Respira hondo una vez.', durationSec: 20, kind: 'instruction' },
        { title: 'Sentir la ola', instruction: '¿Dónde sientes las ganas? Puede ser en el pecho, la panza o las manos. Obsérvalas como una ola que sube.', durationSec: 40, kind: 'breath' },
        { title: 'Respirar', instruction: 'Respira despacio. Suelta el aire más largo de lo que lo tomas. Deja que la ola llegue a su punto alto.', durationSec: 40, kind: 'breath' },
        { title: 'Ver bajar', instruction: 'Nota cómo cambian las ganas. Suben, se quedan y bajan. No tienes que hacer nada con ellas.', durationSec: 40, kind: 'breath' },
        { title: 'Elegir', instruction: 'Lee la razón que guardaste en tu balance. Elige algo para los próximos diez minutos: caminar, comer, llamar a alguien.', durationSec: 30, kind: 'reflection' },
      ],
    },
    {
      id: 'hablar-de-deudas-en-familia',
      title: 'Hablar de las deudas con la familia',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Preparar una conversación honesta con tu familia sobre el juego y las deudas, con un pedido concreto y un plan para ordenar la plata.',
      mechanism: 'Esconder las deudas aumenta la presión y el riesgo de seguir apostando para tapar. Contar con un plan baja la vergüenza y suma apoyo real.',
      evidenceLevel: 'preliminar',
      evidence: [HODGINS_2011, MILLER_2013],
      cautions: JUEGO,
      howItWorks: [
        'Las deudas suelen empujar a apostar más para «recuperar». Es una de las trampas más peligrosas del juego. Contar lo que pasa corta ese ciclo y abre la puerta a un plan real.',
        'La vergüenza es muy común. Ayuda hablar en primera persona, contar los hechos sin minimizar y llevar un pedido concreto. La familia suele reaccionar con enojo al principio. Con el tiempo, el apoyo de la familia ayuda a sostener el cambio (Hodgins y colaboradores, 2011).',
        'No hace falta resolver todo en una charla. La meta es dejar de cargar el secreto y empezar un plan.',
      ],
      tips: [
        'Elige un momento tranquilo, sin apuro y sin alcohol.',
        'Lleva los números escritos. Es más fácil que contar de memoria.',
        'No pidas plata para cubrir deudas de juego en esa charla. Pide ayuda para armar un plan.',
        'Si las deudas te superan, busca asesoramiento gratuito en una defensoría del consumidor o en tu municipio.',
      ],
      obstacles: [
        { q: 'Tengo miedo de cómo van a reaccionar.', a: 'Es esperable que haya enojo o tristeza. Puedes empezar con una persona, la que te parezca más tranquila. También puedes hablar primero con un profesional.' },
        { q: 'En mi casa hay violencia si se enteran.', a: 'Tu seguridad va primero. No hagas esta charla si temes por ti. Busca primero ayuda profesional, la Línea 144 o el 911.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Pon una mano en el pecho y respira despacio. Recuerda que pedir ayuda es un paso valiente.', durationSec: 40, kind: 'breath' },
        { title: 'Los hechos', instruction: 'Anota cuánto debes, a quién y desde cuándo. Usa números, aunque duela verlos.', durationSec: 75, kind: 'reflection' },
        { title: 'A quién', instruction: 'Elige con quién hablar primero. Piensa en la persona más tranquila y que más te cuida.', durationSec: 40, kind: 'reflection' },
        { title: 'Cómo empezar', instruction: 'Escribe una primera frase. Por ejemplo: «Tengo un problema con el juego y deudas. Quiero cambiar y necesito ayuda».', durationSec: 60, kind: 'reflection' },
        { title: 'Qué pido', instruction: 'Anota un pedido concreto. Por ejemplo, que maneje mis tarjetas un tiempo o que me acompañe a consultar.', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Elige un día para la charla. Agenda también la Línea 141 por si necesitas orientación antes.', durationSec: 30, kind: 'instruction' },
      ],
    },
  ],

  meta: {
    'balance-de-las-apuestas': { level: 'iniciacion', approaches: ['motivacional'], module: 'habitos' },
    'senales-de-alarma-del-juego': { level: 'iniciacion', approaches: ['motivacional', 'tcc'], module: 'habitos' },
    'trampas-del-jugador': { level: 'intermedio', approaches: ['tcc'], module: 'habitos', prerequisites: ['balance-de-las-apuestas'] },
    'barreras-al-juego': { level: 'iniciacion', approaches: ['tcc'], module: 'habitos' },
    'surfear-ganas-de-apostar': { level: 'intermedio', approaches: ['mindfulness', 'tcc'], module: 'habitos', prerequisites: ['barreras-al-juego'] },
    'hablar-de-deudas-en-familia': { level: 'intermedio', approaches: ['motivacional', 'sistemica'], module: 'etapas', prerequisites: ['balance-de-las-apuestas'] },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'apuestas-en-linea',
      title: 'Apuestas en línea: cuándo el juego deja de ser juego',
      subtitle: 'Señales de alarma, las trampas del pensamiento del juego, cómo poner barreras y dónde pedir ayuda.',
      category: 'Salud y trabajo',
      readingMin: 8,
      keyPoints: [
        'El problema no es sólo cuánto se juega, sino lo que pasa alrededor: perseguir pérdidas, mentir, pedir plata, apostar para escapar.',
        'Las apuestas en línea están siempre abiertas y a un toque. Eso hace que el problema crezca rápido.',
        'La ilusión de control, la falacia del jugador y el «casi gano» empujan a seguir.',
        'Las barreras al acceso, como la autoexclusión y delegar la plata, no dependen de la fuerza de voluntad.',
        'Las deudas de juego aumentan el riesgo de suicidio. Si aparecen ideas de morir, llama al 135, al 0800-999-0091 o al 911.',
      ],
      sections: [
        {
          heading: 'Cuándo es un problema',
          paragraphs: [
            'Mucha gente apuesta de vez en cuando sin problemas. El juego se vuelve un problema cuando cuesta parar, cuando trae daños y cuando se sigue igual a pesar de ellos (Hodgins y colaboradores, 2011).',
            'Hay señales típicas. Volver a apostar para recuperar lo perdido, que se llama perseguir pérdidas. Necesitar apostar más para sentir lo mismo. Mentir sobre cuánto se juega. Pedir plata o endeudarse. Y apostar para escapar de la tristeza, la angustia o el aburrimiento.',
            'Las apuestas en línea suman un riesgo extra. Están en el celular, nunca cierran, se paga con un toque y llegan con publicidad y bonos. El problema puede crecer en poco tiempo y sin que nadie alrededor lo note.',
          ],
        },
        {
          heading: 'Lo que te da y lo que te cuesta',
          paragraphs: [
            'Querer y no querer cambiar a la vez es normal. El juego da emoción, distracción y la ilusión de que todo se arregla con una buena jugada. Reconocerlo no es justificarlo: ayuda a entender por qué cuesta (Miller y Rollnick, 2013).',
            'Un balance honesto mira lo bueno y lo malo de seguir igual y de cambiar. Las razones propias pesan más que los sermones.',
          ],
        },
        {
          heading: 'Las trampas del pensamiento',
          paragraphs: [
            'Quienes juegan mucho suelen tener ideas erróneas sobre el azar (Toneatto y colaboradores, 1997). La ilusión de control es creer que una cábala, un método o saber mucho de un deporte cambian un resultado que depende del azar.',
            'La falacia del jugador es creer que, después de varias pérdidas, «ya te toca». Pero cada jugada empieza de cero. El «casi gano» también engaña: quedar cerca activa el cerebro de forma parecida a ganar y aumenta las ganas de seguir (Clark y colaboradores, 2009).',
            'La terapia cognitiva trabaja sobre estas ideas y redujo los síntomas del juego en ensayos controlados (Ladouceur y colaboradores, 2001). La terapia cognitivo-conductual completa también tiene buena evidencia (Petry y colaboradores, 2006).',
          ],
        },
        {
          heading: 'Barreras y urgencias',
          paragraphs: [
            'Las barreras hacen más lento el camino entre las ganas y la apuesta. La autoexclusión en las plataformas, el bloqueo de sitios, borrar las tarjetas guardadas y dejar la plata a cargo de alguien de confianza por un tiempo son ejemplos. La autoexclusión ayuda a muchas personas, aunque no es infalible, por eso conviene sumar varias barreras (Gainsbury, 2014).',
            'Las ganas de apostar suben y bajan como una ola. Aprender a surfearlas, sin seguirlas, da tiempo para elegir.',
          ],
        },
        {
          heading: 'Deudas y familia',
          paragraphs: [
            'Las deudas empujan a apostar para recuperar, y eso suele agrandarlas. Contar lo que pasa a alguien de confianza corta el ciclo. Ayuda llevar los números escritos y un pedido concreto, como que otra persona maneje las tarjetas por un tiempo.',
            'Si las deudas te superan, busca asesoramiento gratuito en una defensoría del consumidor o en tu municipio. Si en tu casa hay violencia, tu seguridad va primero: la Línea 144 y el 911 pueden ayudarte.',
          ],
        },
        {
          heading: 'Dónde pedir ayuda',
          paragraphs: [
            'En Argentina, la Línea 141 de SEDRONAR es gratuita, anónima y atiende las 24 horas. También orienta sobre el juego. Un profesional de salud mental puede acompañarte con terapia cognitivo-conductual o entrevista motivacional.',
            'Los problemas con el juego y las deudas se asocian con más riesgo de suicidio (Hodgins y colaboradores, 2011). Si aparecen ideas de morir, llama al 135 en CABA y GBA, al 0800-345-1435 en el resto del país, a la Línea 0800-999-0091 o al 911.',
          ],
        },
      ],
      caveat: {
        title: 'Primero, tu seguridad',
        body: 'Este artículo informa; no reemplaza una evaluación profesional. Si sientes que no hay salida por las deudas o aparecen ideas de morir, no esperes: llama al 135, al 0800-999-0091 o al 911, o usa el botón Ayuda de la app. Si además consumes alcohol u otras sustancias, consulta: suelen ir juntos y conviene tratarlos a la vez.',
      },
      diagram: {
        title: 'Cómo se mantiene el juego problemático',
        nodes: ['Urgencia o malestar', 'Apuesta', 'Pérdida o «casi gano»', 'Pensamiento trampa («ya me toca», «la recupero»)', 'Más deudas, culpa y secretos'],
        caption: 'Las barreras al acceso, responder a las trampas del pensamiento y contar lo que pasa cortan el ciclo.',
      },
      related: {
        practices: ['balance-de-las-apuestas', 'senales-de-alarma-del-juego', 'trampas-del-jugador', 'barreras-al-juego', 'surfear-ganas-de-apostar', 'hablar-de-deudas-en-familia'],
        articles: ['entrevista-motivacional', 'estres-economico'],
      },
      references: [HODGINS_2011, PETRY_2006, LADOUCEUR_2001, TONEATTO_1997, CLARK_2009, GAINSBURY_2014, MILLER_2013, BOWEN_2009, SEDRONAR],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'recuperar-el-control-del-juego',
      title: 'Recuperar el control del juego',
      subtitle: 'Cuatro semanas para mirar el juego con honestidad, poner barreras y pedir apoyo',
      description:
        'Harás un balance de lo que el juego te da y te cuesta, revisarás las señales de alarma, pondrás barreras al acceso, aprenderás a responder a las trampas del pensamiento y prepararás una charla con tu familia. No reemplaza un tratamiento. Si aparecen ideas de morir, llama al 135, al 0800-999-0091 o al 911.',
      basis: 'Miller y Rollnick (2013); Ladouceur y colaboradores (2001); Petry y colaboradores (2006); Gainsbury (2014).',
      rhythm: '10 minutos, 4 o 5 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Mirar',
          focus: 'Balance y señales de alarma',
          description: 'Leerás sobre las apuestas en línea, harás el balance y revisarás las señales de alarma.',
          practiceIds: ['balance-de-las-apuestas', 'senales-de-alarma-del-juego'],
          articleIds: ['apuestas-en-linea'],
          journalType: 'valores',
        },
        {
          title: 'Semana 2 · Barreras',
          focus: 'Hacer más difícil apostar',
          description: 'Armarás tu plan de barreras y practicarás surfear las ganas de apostar.',
          practiceIds: ['barreras-al-juego', 'surfear-ganas-de-apostar'],
          articleIds: [],
          journalType: 'intencion',
        },
        {
          title: 'Semana 3 · Pensar distinto',
          focus: 'Las trampas del pensamiento del juego',
          description: 'Atraparás los pensamientos que empujan a seguir y les responderás con lo que sabes del azar.',
          practiceIds: ['trampas-del-jugador', 'surfear-ganas-de-apostar'],
          articleIds: [],
          journalType: 'reestructuracion',
        },
        {
          title: 'Semana 4 · Sin secretos',
          focus: 'Deudas, familia y apoyo',
          description: 'Prepararás una charla con tu familia sobre las deudas y un plan para ordenar la plata.',
          practiceIds: ['hablar-de-deudas-en-familia', 'pausa-autocompasion'],
          articleIds: [],
          journalType: 'conversacion',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-senales-del-juego',
      title: 'Cuando el juego deja de ser juego',
      subtitle: 'Cinco señales de alarma de las apuestas.',
      slides: [
        { heading: 'No es sólo cuánto', text: 'El juego es un problema cuando cuesta parar y trae daños. No importa sólo cuánto juegas, sino lo que pasa alrededor.' },
        { heading: 'Perseguir', text: 'Volver a apostar para recuperar lo que perdiste es una señal clara. Suele hacer el pozo más hondo.' },
        { heading: 'Secretos', text: 'Mentir sobre lo que juegas, esconder gastos o pedir plata son señales de alarma.' },
        { heading: 'Escapar', text: 'Apostar para no sentir tristeza, angustia o aburrimiento también es una señal. El alivio dura poco.' },
        { heading: 'Siempre abierto', text: 'Las apuestas en línea no cierran nunca y están en tu bolsillo. Por eso el problema crece rápido.' },
        { heading: 'Pedir ayuda', text: 'La Línea 141 de SEDRONAR es gratis y atiende las 24 horas. Si piensas en morir, llama al 135 o al 911.' },
      ],
      related: { practices: ['senales-de-alarma-del-juego', 'balance-de-las-apuestas'], articles: ['apuestas-en-linea'] },
      references: [HODGINS_2011, SEDRONAR],
    },
    {
      id: 'pildora-trampas-del-jugador',
      title: '«Ya me toca»',
      subtitle: 'Las trampas del pensamiento que te hacen seguir.',
      slides: [
        { heading: 'El azar no recuerda', text: 'La ruleta, la máquina y el dado no tienen memoria. Cada jugada empieza de cero.' },
        { heading: '«Ya me toca»', text: 'Después de perder mucho, parece que ya te toca ganar. Es la falacia del jugador. No te toca nada.' },
        { heading: 'Ilusión de control', text: 'Una cábala, un método o saber de fútbol dan sensación de control. Pero la casa ya hizo las cuentas para ganar.' },
        { heading: '«Casi gano»', text: 'Quedar cerca de ganar se siente casi como ganar. Y da ganas de seguir. Pero es una pérdida.' },
        { heading: 'Responder', text: 'Escribe una frase corta para esos momentos. Por ejemplo: «Es azar y la casa gana». Tenla a mano.' },
      ],
      related: { practices: ['trampas-del-jugador'], articles: ['apuestas-en-linea'] },
      references: [TONEATTO_1997, CLARK_2009, LADOUCEUR_2001],
    },
    {
      id: 'pildora-barreras-al-juego',
      title: 'Más difícil apostar',
      subtitle: 'Barreras que no dependen de la fuerza de voluntad.',
      slides: [
        { heading: 'No es voluntad', text: 'En el momento de las ganas, la voluntad falla. Las barreras te dan tiempo para que la ola pase.' },
        { heading: 'Autoexclusión', text: 'Muchas plataformas te dejan pedir que no te permitan jugar. Elige un plazo largo. Ayuda a mucha gente.' },
        { heading: 'Bloquear', text: 'Borra las aplicaciones. Bloquea los sitios de apuestas en el celular. Borra las tarjetas guardadas.' },
        { heading: 'Delegar la plata', text: 'Por un tiempo, alguien de confianza puede manejar tus tarjetas. Es un acuerdo, no un castigo.' },
        { heading: 'Surfear la ola', text: 'Las ganas suben y bajan. Deja el celular lejos, respira y espera. En unos minutos bajan.' },
      ],
      related: { practices: ['barreras-al-juego', 'surfear-ganas-de-apostar'], articles: ['apuestas-en-linea'] },
      references: [GAINSBURY_2014, BOWEN_2009],
    },
    {
      id: 'pildora-adolescentes-apuestas',
      title: 'Chicos y apuestas',
      subtitle: 'Qué mirar y cómo hablar con un adolescente.',
      slides: [
        { heading: 'Están cerca', text: 'Las apuestas en línea llegan a los chicos por el celular, las redes y la publicidad del deporte.' },
        { heading: 'Qué mirar', text: 'Pedidos de plata sin explicar, cosas que faltan, mucho secreto con el celular o cambios bruscos de ánimo con los partidos.' },
        { heading: 'Hablar sin retar', text: 'Pregunta con curiosidad: «¿Qué sabes de las apuestas? ¿Alguien de tu grupo apuesta?». Escucha más de lo que hablas.' },
        { heading: 'Explicar el azar', text: 'Cuéntale que la casa siempre gana con el tiempo. Y que la publicidad muestra a los que ganan, nunca a los que pierden.' },
        { heading: 'Pedir ayuda', text: 'Si ya apuesta, no estás sola ni solo. La Línea 141 orienta a familias. La Línea 102 atiende a chicos y adolescentes.' },
      ],
      related: { practices: ['senales-de-alarma-del-juego'], articles: ['apuestas-en-linea'] },
      references: [HODGINS_2011, MILLER_2013, SEDRONAR],
    },
  ],

  // ================================================================== guías para familias
  kidGuides: [
    {
      id: 'adolescentes-y-apuestas',
      title: 'Adolescentes y apuestas en línea',
      subtitle: 'Cómo hablar del tema, qué señales mirar y qué hacer si tu hijo o hija ya apuesta.',
      readingMin: 6,
      keyPoints: [
        'Las apuestas en línea están en el celular y en la publicidad del deporte. Conviene hablar antes de que aparezcan.',
        'Pedidos de plata sin explicar, secretos con el celular y cambios de ánimo con los partidos son señales para mirar.',
        'Preguntar con curiosidad abre más que retar o prohibir de golpe.',
        'Si ya apuesta, hay ayuda: la Línea 141 orienta a familias y la Línea 102 a chicos y adolescentes.',
      ],
      sections: [
        {
          heading: 'Por qué hablar del tema',
          paragraphs: [
            'Las apuestas en línea llegan a los adolescentes por el celular, las redes, los juegos y la publicidad en las transmisiones deportivas. Muchas veces se presentan como algo divertido o como una forma fácil de ganar plata.',
            'El cerebro adolescente todavía está aprendiendo a frenar impulsos. Por eso conviene hablar del tema temprano, antes de que aparezca un problema. Los problemas con el juego también pueden empezar en la adolescencia (Hodgins y colaboradores, 2011).',
          ],
        },
        {
          heading: 'Señales para mirar',
          paragraphs: [
            'Pedidos de plata que no se explican bien, cosas que faltan en casa o ventas de objetos propios. Mucho secreto con el celular o con las cuentas. Cambios bruscos de ánimo según el resultado de un partido. Menos interés en la escuela, el deporte o los amigos.',
            'Ninguna señal sola alcanza para concluir algo. Sirven para abrir una charla, no para acusar.',
          ],
        },
        {
          heading: 'Cómo conversar',
          paragraphs: [
            'Elige un momento tranquilo, por ejemplo mirando juntos un partido con publicidad de apuestas. Pregunta con curiosidad: qué sabe, qué ve en su grupo, qué piensa. Escuchar sin retar ayuda a que cuente más. Es la misma lógica de la entrevista motivacional (Miller y Rollnick, 2013).',
            'Explica cómo funciona: las casas de apuestas calculan todo para ganar con el tiempo. La publicidad muestra a quienes ganan, nunca a quienes pierden. El «casi gano» engaña al cerebro y da ganas de seguir.',
          ],
        },
        {
          heading: 'Si ya apuesta',
          paragraphs: [
            'Respira antes de reaccionar. El enojo es esperable, pero el reto fuerte suele llevar a esconder más. Di lo que te preocupa y lo que viste, y pregunta cómo empezó.',
            'Pongan juntos algunas barreras: no tener tarjetas ni datos de pago guardados, bloquear sitios de apuestas, revisar juntos los gastos por un tiempo. Las barreras funcionan mejor si las acuerdan, no sólo si las impones.',
            'Busca ayuda. La Línea 141 de SEDRONAR orienta a familias gratis y las 24 horas. La Línea 102 atiende a chicos y adolescentes. Si tu hijo o hija habla de morir o de hacerse daño, llama al 135, al 0800-999-0091 o al 911.',
          ],
        },
      ],
      phrases: [
        '«Vi mucha publicidad de apuestas en el partido. ¿En tu grupo alguien apuesta?»',
        '«No te voy a retar. Quiero entender cómo empezó»',
        '«La casa siempre gana con el tiempo. Por eso ponen tanta publicidad»',
        '«Esto lo resolvemos juntos. Vamos a pedir ayuda»',
      ],
      caveat: {
        title: 'Cuándo pedir ayuda enseguida',
        body: 'Si hay deudas, robos, amenazas de terceros, mucha angustia o tu hijo o hija habla de morir, no lo manejes sólo en casa. Llama a la Línea 141, a la Línea 102, al 135 o al 911, o consulta con un profesional de salud mental.',
      },
      activities: ['ola-de-emocion', 'stop', 'pedir-ayuda', 'mi-brujula'],
      references: [HODGINS_2011, MILLER_2013, CLARK_2009, SEDRONAR],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'juego-problematico', term: 'Juego problemático', definition: 'Apostar de una forma que cuesta controlar y que trae daños en la plata, la familia, el trabajo o la salud, aunque se quiera parar.', articleId: 'apuestas-en-linea' },
    { id: 'perseguir-perdidas', term: 'Perseguir pérdidas', definition: 'Volver a apostar para recuperar lo que se perdió. Es una señal típica del juego problemático y suele agrandar las deudas.', practiceId: 'senales-de-alarma-del-juego' },
    { id: 'ilusion-de-control', term: 'Ilusión de control', definition: 'Creer que una cábala, un método o un conocimiento pueden cambiar un resultado que depende del azar.', practiceId: 'trampas-del-jugador' },
    { id: 'falacia-del-jugador', term: 'Falacia del jugador', definition: 'Creer que, después de varias pérdidas, ya toca ganar. El azar no tiene memoria: cada jugada empieza de cero.', practiceId: 'trampas-del-jugador' },
    { id: 'casi-acierto', term: 'Casi acierto', definition: 'Quedar cerca de ganar sin ganar. Se siente casi como una victoria y aumenta las ganas de seguir, aunque sea una pérdida.', articleId: 'apuestas-en-linea' },
    { id: 'autoexclusion', term: 'Autoexclusión', definition: 'Pedir a una plataforma o sala de juego que no te deje apostar durante un tiempo. Ayuda más si se suma a otras barreras.', practiceId: 'barreras-al-juego' },
  ],
};
