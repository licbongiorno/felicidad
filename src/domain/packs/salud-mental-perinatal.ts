import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Salud mental perinatal: embarazo y posparto». Profundiza lo que ya abre
 * «etapas-vinculos» (artículo «embarazo-y-posparto», práctica «cuidarte-mientras-cuidas» y
 * píldora «pildora-tristeza-posparto»), sin repetirlo:
 *  - ansiedad y preocupaciones en el embarazo (horario de preocupación, Borkovec);
 *  - tristeza posparto («baby blues») frente a depresión perinatal (Howard y colaboradores; NICE);
 *  - pensamientos intrusivos de daño al bebé: frecuentes y no peligrosos en el TOC perinatal
 *    (Abramowitz y colaboradores; Fairbrother y Woody), cómo diferenciarlos de una intención o de
 *    una psicosis posparto (Bergink y colaboradores), y cuándo consultar;
 *  - sueño fragmentado: turnos para proteger un bloque de sueño (no se usa restricción de sueño);
 *  - pedir y aceptar ayuda concreta;
 *  - quien no gesta: padres y otras madres también pueden deprimirse (Paulson y Bazemore);
 *  - la «madre perfecta» frente a la madre suficientemente buena (Winnicott);
 *  - parto difícil y estrés postraumático tras el parto (Ayers y colaboradores).
 *
 * Enlaza, sin duplicar, con «toc-intrusivos», «trauma», «perfeccionismo», «duelo-perinatal»,
 * «necesidades-separacion-perinatal» y la guía para familias «primeros-anos» (0 a 3 años).
 *
 * Reglas de seguridad del paquete: no se nombran medicamentos ni dosis; se dice que hay
 * tratamientos psicológicos y tratamientos compatibles con el embarazo y la lactancia, que se
 * conversan con el equipo de salud, y que no se deja ni se cambia una medicación por cuenta
 * propia. No se diagnostica: la escala de Edimburgo sólo se menciona. Señales urgentes (guardia o
 * 911 ya): ideas de hacerse daño o de dañar al bebé con intención, confusión, alucinaciones, o
 * varios días sin dormir sin sentir sueño. Los intrusivos de daño se nombran sin describirlos. No
 * se empuja a la exposición: la evitación se lleva a consulta. Prácticas breves, que se pueden
 * hacer con el bebé en brazos.
 */

const HOWARD_2014: Reference = {
  citation:
    'Howard, L. M., Molyneaux, E., Dennis, C.-L., Rochat, T., Stein, A., & Milgrom, J. (2014). Non-psychotic mental disorders in the perinatal period. The Lancet, 384(9956), 1775–1788.',
};
const NICE_2014: Reference = {
  citation:
    'National Institute for Health and Care Excellence. (2014). Antenatal and postnatal mental health: Clinical management and service guidance (Clinical guideline CG192, con actualizaciones posteriores). NICE.',
};
const COX_1987: Reference = {
  citation:
    'Cox, J. L., Holden, J. M., & Sagovsky, R. (1987). Detection of postnatal depression: Development of the 10-item Edinburgh Postnatal Depression Scale. British Journal of Psychiatry, 150, 782–786.',
};
const ABRAMOWITZ_2003: Reference = {
  citation:
    'Abramowitz, J. S., Schwartz, S. A., Moore, K. M., & Luenzmann, K. R. (2003). Obsessive-compulsive symptoms in pregnancy and the puerperium: A review of the literature. Journal of Anxiety Disorders, 17(4), 461–478.',
};
const FAIRBROTHER_2008: Reference = {
  citation: 'Fairbrother, N., & Woody, S. R. (2008). New mothers’ thoughts of harm related to the newborn. Archives of Women’s Mental Health, 11(3), 221–229.',
};
const BERGINK_2016: Reference = {
  citation:
    'Bergink, V., Rasgon, N., & Wisner, K. L. (2016). Postpartum psychosis: Madness, mania, and melancholia in motherhood. American Journal of Psychiatry, 173(12), 1179–1188.',
};
const PAULSON_2010: Reference = {
  citation:
    'Paulson, J. F., & Bazemore, S. D. (2010). Prenatal and postpartum depression in fathers and its association with maternal depression: A meta-analysis. JAMA, 303(19), 1961–1969.',
};
const OHARA_2013: Reference = {
  citation: "O'Hara, M. W., & McCabe, J. E. (2013). Postpartum depression: Current status and future directions. Annual Review of Clinical Psychology, 9, 379–407.",
};
const AYERS_2016: Reference = {
  citation:
    'Ayers, S., Bond, R., Bertullies, S., & Wijma, K. (2016). The aetiology of post-traumatic stress following childbirth: A meta-analysis and theoretical framework. Psychological Medicine, 46(6), 1121–1134.',
};
const WINNICOTT_1971: Reference = { citation: 'Winnicott, D. W. (1971). Playing and reality. Tavistock.' };
const BORKOVEC_1983: Reference = {
  citation: 'Borkovec, T. D., Wilkinson, L., Folensbee, R., & Lerman, C. (1983). Stimulus control applications to the treatment of worry. Behaviour Research and Therapy, 21(3), 247–251.',
};
const ZACCARO_2018: Reference = {
  citation:
    'Zaccaro, A., Piarulli, A., Laurino, M., Garbella, E., Menicucci, D., Neri, B., & Gemignani, A. (2018). How breath-control can change your life: A systematic review on psycho-physiological correlates of slow breathing. Frontiers in Human Neuroscience, 12, 353.',
};

/** Señales urgentes del período perinatal y a quién llamar. */
const URGENTE =
  'Ve a una guardia o llama al 911 ya si tienes ideas de hacerte daño o de dañar al bebé con intención, si sientes mucha confusión, si ves u oyes cosas que otros no, o si pasas varios días sin dormir y sin sentir sueño. Pueden ser señales de una psicosis posparto: es poco frecuente, es una urgencia y tiene tratamiento. Si piensas en quitarte la vida, llama al 135 (CABA y GBA) o al 0800-345-1435, o a la Línea de Salud Mental 0800-999-0091. También tienes el botón Ayuda.';

/** Cuándo consultar sin urgencia, y la aclaración sobre tratamientos. */
const CONSULTAR =
  'Si la tristeza, la angustia o la preocupación duran más de dos semanas, o no te dejan dormir, comer o cuidar, consulta a tu obstetra, a tu médico o a un profesional de salud mental. Hay tratamientos psicológicos eficaces y también tratamientos compatibles con el embarazo y la lactancia, que se conversan con el equipo de salud. No dejes ni cambies una medicación por tu cuenta.';

export const SALUD_MENTAL_PERINATAL_PACK: ContentPack = {
  id: 'salud-mental-perinatal',

  // ================================================================== prácticas
  practices: [
    {
      id: 'respiro-con-el-bebe-en-brazos',
      title: 'Un respiro con el bebé en brazos',
      family: 'attentional',
      skills: ['attention', 'resilience'],
      summary: 'Dos minutos para bajar un cambio sin soltar al bebé: apoyar el cuerpo, soltar el aire despacio y nombrar cómo estás.',
      mechanism: 'Exhalar más lento que al inhalar ayuda a bajar la activación del cuerpo. Nombrar lo que sientes, sin juzgarlo, da un poco de distancia.',
      evidenceLevel: 'preliminar',
      evidence: [ZACCARO_2018, NICE_2014],
      micro: true,
      howItWorks: [
        'La respiración lenta, con la exhalación más larga que la inhalación, se asocia a menos activación y más calma (Zaccaro y colaboradores, 2018). No hace falta contar exacto ni cerrar los ojos.',
        'Con un bebé en brazos casi nunca hay media hora libre. Por eso esta práctica dura dos minutos y se hace donde estés: dando el pecho o la mamadera, acunando o en el colectivo.',
        'No busca que te sientas bien. Busca que te des cuenta de cómo estás, y que eso no te tome por sorpresa.',
      ],
      tips: [
        'Úsala cuando el llanto del bebé te acelera. Tu calma también lo ayuda a calmarse.',
        'Si el bebé duerme sobre ti, siente su peso y su respiración como ancla.',
        'Si te mareas al respirar lento, vuelve a respirar normal.',
      ],
      obstacles: [
        { q: 'No tengo ni dos minutos.', a: 'Haz sólo tres exhalaciones largas. También cuenta.' },
        { q: 'Cuando paro, me largo a llorar.', a: 'Puede pasar. Llorar no es fallar. Si el llanto o la tristeza duran más de dos semanas, cuéntaselo a tu médico.' },
      ],
      cautions: URGENTE,
      steps: [
        { title: 'Apoyarte', instruction: 'Busca un apoyo para la espalda o los brazos. Si tienes al bebé, sostenlo como estés cómoda o cómodo.', durationSec: 20, kind: 'instruction' },
        { title: 'Soltar el aire', instruction: 'Toma aire por la nariz. Suéltalo despacio por la boca, como si soplaras una vela sin apagarla.', durationSec: 40, kind: 'breath' },
        { title: 'Más lento', instruction: 'Sigue así. Que el aire salga un poco más lento de lo que entra.', durationSec: 40, kind: 'breath' },
        { title: 'Nombrar', instruction: 'Dite en voz baja cómo estás. Por ejemplo: «Estoy sin energía», «Estoy con miedo» o «Estoy bien».', durationSec: 30, kind: 'reflection' },
        { title: 'Una frase amable', instruction: 'Agrega una frase amable para ti: «Esto es difícil, y estoy haciendo lo que puedo».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'preocupaciones-del-embarazo',
      title: 'Las preocupaciones del embarazo',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Anotar lo que te preocupa del embarazo, separar lo que puedes hacer de lo que no, llevar tus preguntas al control y dejar el resto para un horario fijo.',
      mechanism: 'Escribir y ordenar la preocupación la vuelve más manejable. Pasar las preguntas al equipo de salud y posponer el resto para un horario corta el «¿y si…?» sin fin.',
      evidenceLevel: 'preliminar',
      evidence: [BORKOVEC_1983, HOWARD_2014],
      howItWorks: [
        'Preocuparse en el embarazo es muy común. Hay mucho nuevo, mucho que no se controla y mucha información, no siempre buena. La ansiedad en el embarazo es tan frecuente como la depresión, y también tiene tratamiento (Howard y colaboradores, 2014).',
        'Thomas Borkovec propuso dar a la preocupación un horario fijo y posponerla el resto del día (Borkovec y colaboradores, 1983). Aquí se suma un paso: separar lo que se puede consultar o hacer de lo que no depende de ti.',
        'Buscar en internet cada síntoma suele dar más miedo, no menos. Ayuda más anotar la pregunta y llevarla al control.',
      ],
      tips: [
        'Ten una lista en el celular con preguntas para el próximo control.',
        'Pon un horario corto para preocuparte, de unos quince minutos, lejos de la hora de dormir.',
        'Si una preocupación vuelve, dite: «Está en la lista. La miro a las seis».',
      ],
      obstacles: [
        { q: '¿Y si de verdad pasa algo?', a: 'Si tienes un síntoma de alarma, como sangrado, dolor fuerte o que el bebé se mueva mucho menos, no lo dejes para el horario: llama a tu equipo o ve a la guardia.' },
        { q: 'No puedo frenar los pensamientos.', a: 'No hace falta frenarlos. Sólo anotarlos y volver a lo que hacías. Si te ocupan casi todo el día o tienes ataques de pánico, consulta.' },
      ],
      cautions: CONSULTAR + ' Ante un síntoma físico de alarma, llama a tu equipo de salud o ve a la guardia, sin esperar.',
      steps: [
        { title: 'Llegar', instruction: 'Siéntate cómoda o cómodo. Suelta el aire despacio tres veces.', durationSec: 30, kind: 'breath' },
        { title: 'Vaciar', instruction: 'Anota todo lo que te preocupa del embarazo o del parto. Sin ordenar, como salga.', durationSec: 90, kind: 'reflection' },
        { title: 'Preguntas', instruction: 'Marca lo que puedes preguntar en el control. Pásalo a una lista para llevar.', durationSec: 60, kind: 'reflection' },
        { title: 'Un paso', instruction: 'Marca lo que depende de ti. Elige un paso chico para esta semana, como anotar un turno.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que no depende de ti', instruction: 'Mira lo que queda. Dite: «Esto no lo controlo. Lo dejo para mi horario».', durationSec: 45, kind: 'breath' },
        { title: 'Tu horario', instruction: 'Elige un horario corto para preocuparte mañana. Anótalo. Hasta entonces, vuelve a tu día.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'turnos-de-descanso',
      title: 'Turnos para descansar',
      family: 'constructive',
      skills: ['resilience'],
      summary: 'Armar con tu pareja o tu red un plan de turnos para que cada persona adulta tenga al menos un bloque de sueño seguido.',
      mechanism: 'El sueño cortado de los primeros meses afecta el ánimo. Proteger un bloque de sueño, aunque sea de pocas horas, cuida la salud mental de quien cuida.',
      evidenceLevel: 'preliminar',
      evidence: [NICE_2014, BERGINK_2016],
      howItWorks: [
        'Con un bebé chico el sueño se corta muchas veces por noche. Es parte de esta etapa y no se puede evitar del todo. Pero sí se puede repartir, para que nadie pase semanas sin dormir un rato seguido.',
        'La idea es simple. Se arma un turno: una persona atiende al bebé un tramo de la noche y la otra duerme, con tapones o en otra habitación si hace falta. Si das el pecho, se puede acordar que la otra persona haga todo lo demás.',
        'Aquí no se usan las técnicas para el insomnio que acortan el tiempo en la cama. No son para esta etapa. La meta es dormir más, no menos.',
        'Hay una diferencia importante. Estar cansada o cansado y dormirse apenas se puede es esperable. No dormir varios días, aunque el bebé duerma y sin sentir sueño, es una señal de alarma.',
      ],
      tips: [
        'Si no tienes pareja, piensa en alguien que pueda quedarse una o dos noches por semana.',
        'Durante el día, acuéstate cuando el bebé duerma, aunque sea para descansar sin dormir.',
        'Baja otras exigencias: la casa puede esperar.',
      ],
      obstacles: [
        { q: 'Sólo yo puedo calmar al bebé.', a: 'Al principio puede parecer así. Los bebés también aprenden a calmarse con otras personas, con práctica. Dale tiempo a quien te releva.' },
        { q: 'Aunque tenga el turno, no me duermo.', a: 'Puede pasar los primeros días. Descansar acostada o acostado también ayuda. Si no duermes aunque tengas el tiempo y pasan varios días, consulta enseguida.' },
      ],
      cautions: URGENTE,
      steps: [
        { title: 'Mirar la semana', instruction: 'Piensa en las últimas noches. ¿Cuántas horas seguidas durmió cada persona adulta de la casa?', durationSec: 45, kind: 'reflection' },
        { title: 'El bloque', instruction: 'Elige un bloque de sueño para proteger. Por ejemplo, de diez de la noche a dos de la mañana.', durationSec: 45, kind: 'reflection' },
        { title: 'Quién releva', instruction: 'Anota quién atiende al bebé en ese bloque. Puede ser tu pareja, un familiar o una amiga.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que hace falta', instruction: 'Piensa qué necesita quien releva: leche guardada, pañales a mano, saber cuándo despertarte.', durationSec: 45, kind: 'reflection' },
        { title: 'De día', instruction: 'Elige un momento del día para acostarte un rato. No hace falta dormir: alcanza con descansar.', durationSec: 30, kind: 'reflection' },
        { title: 'La señal', instruction: 'Anota esta señal: si no duermes varios días aunque puedas, y no tienes sueño, es urgente consultar.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'lista-de-ayudas-concretas',
      title: 'Pedir y aceptar ayuda concreta',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Hacer una lista de tareas que otros pueden hacer, asignar cada una a una persona y practicar aceptar la ayuda sin dar explicaciones.',
      mechanism: 'El poco apoyo es uno de los factores de riesgo más claros para la depresión perinatal. Los pedidos concretos son más fáciles de cumplir que el «avísame si necesitas algo».',
      evidenceLevel: 'preliminar',
      evidence: [HOWARD_2014, OHARA_2013, WINNICOTT_1971],
      howItWorks: [
        'Tener poco apoyo, estar en conflicto con la pareja o vivir mucho estrés aumenta el riesgo de depresión en el embarazo y el posparto (Howard y colaboradores, 2014; O’Hara y McCabe, 2013). Una red que ayuda de verdad protege.',
        'Mucha gente dice «avísame si necesitas algo». Pero cuesta avisar. Una lista de tareas concretas hace más fácil pedir y más fácil ayudar.',
        'A veces lo difícil no es pedir sino aceptar. Aparece la idea de que una buena madre o un buen padre debería poder con todo. Donald Winnicott hablaba de la madre «suficientemente buena»: no la perfecta, sino la que está y se equivoca (Winnicott, 1971).',
      ],
      tips: [
        'Pide cosas chicas y claras: «¿Me traes pan y fruta el martes?».',
        'Deja la lista a la vista para cuando alguien pregunte qué puede hacer.',
        'Aceptar ayuda no te obliga a devolverla ahora.',
      ],
      obstacles: [
        { q: 'No quiero molestar.', a: 'A mucha gente le gusta ayudar y no sabe cómo. Un pedido claro le hace un favor.' },
        { q: 'Lo hacen distinto a como yo lo haría.', a: 'Si el bebé está seguro, distinto está bien. Elige qué cosas importan de verdad y suelta el resto.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Suelta el aire despacio tres veces. Si tienes al bebé en brazos, está bien.', durationSec: 30, kind: 'breath' },
        { title: 'Las tareas', instruction: 'Anota tareas que otra persona podría hacer. Comida, compras, ropa, trámites, cuidar al bebé un rato.', durationSec: 75, kind: 'reflection' },
        { title: 'Las personas', instruction: 'Anota personas o lugares que pueden ayudar. Familia, amigos, vecinos, el grupo de crianza, el centro de salud.', durationSec: 60, kind: 'reflection' },
        { title: 'Unir', instruction: 'Une cada tarea con una persona. Piensa en qué hace bien cada una.', durationSec: 45, kind: 'reflection' },
        { title: 'El pedido', instruction: 'Escribe un pedido concreto, con día y hora. Por ejemplo: «¿Puedes cuidar al bebé el sábado de tres a cinco?».', durationSec: 45, kind: 'reflection' },
        { title: 'Aceptar', instruction: 'Ensaya una respuesta para cuando te ofrezcan ayuda: «Sí, gracias. Me viene muy bien».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'ese-pensamiento-no-es-un-deseo',
      title: 'Ese pensamiento no es un deseo',
      family: 'deconstructive',
      skills: ['attention', 'compassion'],
      summary: 'Cuando aparece un pensamiento horrible de daño al bebé: notarlo, nombrarlo como intrusivo, ver el miedo que trae y diferenciarlo de una intención o de una señal de alarma.',
      mechanism: 'Los intrusivos de daño son muy frecuentes después del parto. Lo que los vuelve un problema es leerlos como un peligro. Nombrarlos, sin pelear con ellos, baja el miedo y la culpa.',
      evidenceLevel: 'preliminar',
      evidence: [FAIRBROTHER_2008, ABRAMOWITZ_2003],
      howItWorks: [
        'Después del parto, muchísimas madres y padres tienen pensamientos o imágenes de que el bebé sufre un daño, a veces por su propia mano. En un estudio, la gran mayoría de las madres primerizas tenía pensamientos no deseados de daño accidental y casi la mitad, de daño intencional (Fairbrother y Woody, 2008).',
        'Estos pensamientos causan horror justamente porque van en contra de lo que la persona quiere. Por eso suelen traer evitación: no bañar al bebé, no quedarse a solas, esconder los cuchillos. Es un patrón conocido del TOC perinatal (Abramowitz y colaboradores, 2003).',
        'Un intrusivo de TOC trae miedo y rechazo, y la persona sabe que es un pensamiento. En una psicosis posparto, en cambio, puede haber confusión, ideas raras que se viven como reales y no hay ese rechazo. Eso es otra cosa y es urgente (Bergink y colaboradores, 2016).',
        'Esta práctica no es un tratamiento. Si los pensamientos te ocupan mucho tiempo o evitas cosas con el bebé, consulta: el TOC perinatal tiene tratamientos eficaces.',
      ],
      tips: [
        'No hace falta contar el contenido del pensamiento para hacer esta práctica.',
        'Nombrarlo es suficiente: «Es un pensamiento intrusivo».',
        'Contárselo a un profesional es seguro. Saben que es frecuente y no por eso te van a separar de tu bebé.',
      ],
      obstacles: [
        { q: '¿Y si lo pienso porque en el fondo lo quiero?', a: 'Si te asusta y te da rechazo, es una señal de que va contra tus valores. El miedo muestra cuánto te importa el bebé.' },
        { q: 'Necesito que alguien me diga que no voy a hacerlo.', a: 'Pedir que te tranquilicen alivia un rato y después el pensamiento vuelve. Puedes leer sobre esto en la sección de pensamientos intrusivos y llevarlo a consulta.' },
      ],
      cautions:
        'Esta práctica es para pensamientos que te dan miedo y rechazo. Si sientes ganas de hacer daño, si el pensamiento no te parece raro o si hay confusión, no es para esta práctica. ' +
        URGENTE,
      steps: [
        { title: 'Llegar', instruction: 'Suelta el aire despacio tres veces. Siente los pies en el piso.', durationSec: 30, kind: 'breath' },
        { title: 'Notar', instruction: 'Recuerda que apareció un pensamiento que te asustó. No hace falta repetirlo ni contarlo.', durationSec: 30, kind: 'reflection' },
        { title: 'Nombrarlo', instruction: 'Dite en voz baja: «Es un pensamiento intrusivo. Es frecuente después del parto».', durationSec: 30, kind: 'breath' },
        { title: 'El miedo', instruction: 'Nota qué sientes ante él. Si es miedo, culpa o rechazo, eso dice mucho de cuánto te importa el bebé.', durationSec: 45, kind: 'reflection' },
        { title: 'Diferenciar', instruction: 'Pregúntate: «¿Esto me da miedo, o tengo ganas de hacerlo?». Si son ganas, o hay confusión, pide ayuda urgente.', durationSec: 45, kind: 'reflection' },
        { title: 'Sin pelear', instruction: 'Deja que el pensamiento esté, como una nube que pasa. No hace falta empujarlo ni comprobar nada.', durationSec: 45, kind: 'breath' },
        { title: 'Lo que evitas', instruction: 'Si dejaste de hacer algo con el bebé por miedo, anótalo. Llévalo a tu próxima consulta.', durationSec: 30, kind: 'reflection' },
        { title: 'Volver', instruction: 'Vuelve a lo que estabas haciendo. Hazlo con cuidado, como lo harías igual sin el pensamiento.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'como-estas-tu-que-no-gestaste',
      title: '¿Y cómo estás tú, que no gestaste?',
      family: 'constructive',
      skills: ['attention', 'compassion'],
      summary: 'Para la pareja que no llevó el embarazo, sea padre u otra madre: revisar tus propias señales de malestar y armar una charla breve con tu pareja sobre cómo están las dos personas.',
      mechanism: 'La depresión también aparece en quien no gestó, y a veces no se nota como tristeza. Mirar las señales a tiempo y hablarlo en pareja protege a toda la familia.',
      evidenceLevel: 'preliminar',
      evidence: [PAULSON_2010, NICE_2014],
      howItWorks: [
        'En un metaanálisis, alrededor de uno de cada diez padres tuvo depresión en el embarazo de su pareja o en el primer año del bebé. Era más frecuente cuando la madre también estaba deprimida (Paulson y Bazemore, 2010).',
        'Esto le puede pasar a cualquier persona que cría sin haber gestado: padres, otras madres, madres y padres por adopción. Muchas veces el entorno pregunta sólo por quien parió, y la otra persona aprende a hacer de «fuerte».',
        'En quien no gestó, el malestar a veces se nota como irritabilidad, aislamiento, más trabajo, más alcohol o pantallas. Darse cuenta no es quejarse: es cuidar.',
      ],
      tips: [
        'Hagan la charla en un momento tranquilo, no a la madrugada.',
        'Hablen de cómo está cada persona, no sólo del bebé.',
        'Si los dos están mal a la vez, busquen ayuda afuera. No tiene que resolverlo una sola persona.',
      ],
      obstacles: [
        { q: 'Mi pareja está peor, lo mío puede esperar.', a: 'Cuidarte es parte de cuidarla. Si te apagas, la familia pierde un sostén.' },
        { q: 'No sé hablar de esto.', a: 'Alcanza con una frase: «Últimamente no estoy bien. ¿Podemos hablar diez minutos?».' },
      ],
      cautions: CONSULTAR + ' Si piensas en quitarte la vida o en hacer daño, llama al 911, al 135 o al 0800-345-1435, o usa el botón Ayuda.',
      steps: [
        { title: 'Llegar', instruction: 'Suelta el aire despacio tres veces. Este rato es para ti.', durationSec: 30, kind: 'breath' },
        { title: 'Tus señales', instruction: 'Revisa estas semanas. ¿Más enojo, menos ganas, más trabajo, más alcohol o pantallas, ganas de estar lejos?', durationSec: 60, kind: 'reflection' },
        { title: 'Tu cuerpo', instruction: '¿Cómo duermes, comes y te mueves? Anota lo que cambió desde que llegó el bebé.', durationSec: 45, kind: 'reflection' },
        { title: 'Nombrarlo', instruction: 'Escribe una frase sobre cómo estás de verdad. Por ejemplo: «Estoy sin energía y me siento afuera».', durationSec: 45, kind: 'reflection' },
        { title: 'La charla', instruction: 'Prepara una charla de diez minutos. Cada persona cuenta cómo está, sin interrumpir ni resolver.', durationSec: 60, kind: 'reflection' },
        { title: 'Un pedido', instruction: 'Piensa un pedido para ti. Un rato libre, ver a un amigo, dormir una noche entera.', durationSec: 45, kind: 'reflection' },
        { title: 'Las señales', instruction: 'Si esto dura más de dos semanas, anota que vas a consultar. Pedir ayuda también es criar.', durationSec: 30, kind: 'instruction' },
      ],
    },
  ],

  meta: {
    'respiro-con-el-bebe-en-brazos': { level: 'iniciacion', approaches: ['relajacion', 'mindfulness'], module: 'etapas' },
    'preocupaciones-del-embarazo': { level: 'iniciacion', approaches: ['tcc'], module: 'etapas' },
    'turnos-de-descanso': { level: 'iniciacion', approaches: ['tcc', 'interpersonal'], module: 'sueno' },
    'lista-de-ayudas-concretas': { level: 'iniciacion', approaches: ['interpersonal', 'cft'], module: 'etapas' },
    'ese-pensamiento-no-es-un-deseo': {
      level: 'intermedio',
      approaches: ['tcc', 'act'],
      module: 'pensamientos',
      prerequisites: ['respiro-con-el-bebe-en-brazos'],
    },
    'como-estas-tu-que-no-gestaste': { level: 'iniciacion', approaches: ['interpersonal', 'sistemica'], module: 'etapas' },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'salud-mental-perinatal',
      title: 'Salud mental perinatal: más allá de la tristeza',
      subtitle: 'Ansiedad, intrusivos, sueño, la pareja, la presión de ser perfecta y el parto difícil. Qué es esperable, qué ayuda y cuándo consultar.',
      category: 'Etapas de la vida',
      readingMin: 9,
      keyPoints: [
        'La tristeza de los primeros días suele pasar sola. Si dura más de dos semanas, consulta.',
        'La ansiedad y el TOC en el embarazo y el posparto son tan frecuentes como la depresión.',
        'Los pensamientos de daño al bebé que dan miedo son comunes y no son peligrosos.',
        'Padres y otras madres también pueden tener depresión posparto.',
        'Hay tratamientos compatibles con el embarazo y la lactancia: se conversan con el equipo de salud.',
        'Confusión, alucinaciones, ideas de dañar con intención o días sin dormir sin sueño: guardia o 911 ya.',
      ],
      sections: [
        {
          heading: 'Lo esperable y lo que pide consulta',
          paragraphs: [
            'En los primeros días después del parto, muchas personas lloran fácil y cambian de humor. Es la llamada tristeza posparto o «baby blues». Suele pasar sola en unas dos semanas. Puedes leer más en la sección sobre embarazo y posparto.',
            'Si la tristeza, el vacío, la culpa o el no poder disfrutar duran más, puede ser una depresión perinatal. Puede empezar en el embarazo o en el primer año. Es frecuente y tiene tratamiento (Howard y colaboradores, 2014).',
            'En los controles a veces se usa un cuestionario breve, la escala de Edimburgo (Cox y colaboradores, 1987). Sirve para detectar, no para diagnosticar. Si te lo ofrecen, responde con sinceridad.',
          ],
        },
        {
          heading: 'Ansiedad en el embarazo',
          paragraphs: [
            'La ansiedad en el embarazo y el posparto es tan frecuente como la depresión, y se habla mucho menos de ella (Howard y colaboradores, 2014). Puede ser preocupación constante, ataques de pánico o miedo intenso al parto.',
            'Ayuda llevar las preguntas al control en lugar de buscarlas en internet. También ayuda darle a la preocupación un horario fijo. Si la ansiedad no te deja dormir, comer o disfrutar, consulta.',
          ],
        },
        {
          heading: 'Pensamientos que asustan',
          paragraphs: [
            'Muchas madres y padres tienen pensamientos o imágenes de que el bebé sufre un daño. A veces son de un accidente, y a veces de un daño hecho con las propias manos. Son muy frecuentes y suelen asustar mucho (Fairbrother y Woody, 2008).',
            'Cuando dan miedo y rechazo, no son un deseo ni un peligro. En el TOC perinatal, estos pensamientos vuelven seguido y llevan a evitar cosas con el bebé (Abramowitz y colaboradores, 2003). Tiene tratamiento. La sección sobre pensamientos intrusivos en el posparto lo explica en detalle.',
          ],
        },
        {
          heading: 'El sueño cortado',
          paragraphs: [
            'Dormir poco y cortado es parte de los primeros meses. Afecta el ánimo, la paciencia y la memoria. No se arregla con fuerza de voluntad, sino repartiendo la noche.',
            'Ayuda armar turnos para que cada persona adulta tenga un bloque de sueño seguido. Las técnicas para el insomnio que acortan el tiempo en la cama no son para esta etapa.',
            'Hay una señal que no hay que dejar pasar: no dormir varios días seguidos, aunque se pueda, y sin sentir sueño. Puede ser el inicio de una psicosis posparto (Bergink y colaboradores, 2016).',
          ],
        },
        {
          heading: 'Pedir ayuda y la madre perfecta',
          paragraphs: [
            'Tener poco apoyo es uno de los factores de riesgo más claros de la depresión perinatal (O’Hara y McCabe, 2013). Los pedidos concretos, con día y hora, funcionan mejor que esperar a que otros adivinen.',
            'Muchas personas cargan con la imagen de una madre perfecta: siempre feliz, que puede con todo y no necesita a nadie. Esa imagen no existe y hace daño. Winnicott hablaba de la madre suficientemente buena: la que está, se equivoca y repara (Winnicott, 1971).',
          ],
        },
        {
          heading: 'Quien no gesta también cuenta',
          paragraphs: [
            'Alrededor de uno de cada diez padres tiene depresión en el embarazo o el primer año del bebé (Paulson y Bazemore, 2010). Le puede pasar también a otras madres y a quienes crían por adopción.',
            'En quien no gestó, a veces se nota como enojo, aislamiento o mucho trabajo. Preguntar por las dos personas, y no sólo por quien parió, ayuda a verlo a tiempo.',
          ],
        },
        {
          heading: 'Un parto difícil',
          paragraphs: [
            'Algunos partos son muy distintos de lo esperado: urgencias, mucho dolor, miedo a morir o a perder al bebé, o sentir que no te escucharon. Algunas personas quedan con estrés postraumático (Ayers y colaboradores, 2016).',
            'Las señales son recuerdos que vuelven sin querer, pesadillas, evitar todo lo que lo recuerda y estar siempre en alerta. Si duran más de un mes, consulta. No hace falta revivir el parto por tu cuenta para sanar: eso se trabaja con un profesional.',
            'Si el embarazo o el bebé se perdió, hay una sección propia sobre duelo perinatal.',
          ],
        },
        {
          heading: 'Tratamientos y señales urgentes',
          paragraphs: [
            'La guía británica NICE recomienda preguntar por la salud mental en el embarazo y el posparto, y ofrecer tratamiento psicológico (NICE, 2014). También hay tratamientos con medicación compatibles con el embarazo y la lactancia. Se conversan con el equipo de salud. No dejes ni cambies una medicación por tu cuenta.',
            'Ve a una guardia o llama al 911 ya si hay ideas de hacerte daño o de dañar al bebé con intención, confusión, ver u oír cosas que otros no, o varios días sin dormir sin sentir sueño. Si piensas en quitarte la vida, llama al 135 o al 0800-345-1435, o a la Línea de Salud Mental 0800-999-0091.',
          ],
        },
      ],
      caveat: {
        title: 'Lo que esta sección no hace',
        body: 'Estas prácticas acompañan, pero no reemplazan los controles ni un tratamiento. No vas a encontrar nombres de medicamentos ni dosis: eso se decide con tu equipo de salud, que conoce tu embarazo o tu lactancia. Las prácticas son autoguiadas y breves; su evidencia directa en esta etapa es preliminar.',
      },
      related: {
        practices: [
          'respiro-con-el-bebe-en-brazos',
          'preocupaciones-del-embarazo',
          'turnos-de-descanso',
          'lista-de-ayudas-concretas',
          'ese-pensamiento-no-es-un-deseo',
          'como-estas-tu-que-no-gestaste',
          'cuidarte-mientras-cuidas',
          'orientarme-en-el-presente',
        ],
        articles: ['embarazo-y-posparto', 'intrusivos-en-el-posparto', 'trauma-y-estres-postraumatico', 'perfeccionismo-clinico', 'perdida-perinatal-e-infertilidad'],
      },
      references: [HOWARD_2014, NICE_2014, COX_1987, OHARA_2013, FAIRBROTHER_2008, ABRAMOWITZ_2003, BERGINK_2016, PAULSON_2010, AYERS_2016, WINNICOTT_1971],
    },
    {
      id: 'intrusivos-en-el-posparto',
      title: 'Pensamientos de daño al bebé: por qué aparecen y qué significan',
      subtitle: 'Los intrusivos del posparto, el TOC perinatal, cómo diferenciarlos de una señal de alarma y cuándo consultar.',
      category: 'Etapas de la vida',
      readingMin: 7,
      keyPoints: [
        'Los pensamientos no deseados de daño al bebé son muy frecuentes después del parto.',
        'Si te dan miedo y rechazo, no indican deseo ni peligro.',
        'Evitar, comprobar y pedir que te tranquilicen alivian un rato y los mantienen.',
        'El TOC perinatal tiene tratamiento. Contarlo a un profesional es seguro.',
        'Ganas de dañar, confusión o ideas raras que se viven como reales son otra cosa: guardia o 911 ya.',
      ],
      sections: [
        {
          heading: 'Un pensamiento que horroriza',
          paragraphs: [
            'De pronto aparece una imagen: el bebé se cae, se ahoga, o tú le haces daño. Llega sin aviso y deja horror y culpa. Muchas personas no lo cuentan nunca, por vergüenza o por miedo a que les saquen al bebé.',
            'Estos pensamientos son muy comunes. En un estudio con madres primerizas, casi todas tenían pensamientos no deseados de daño accidental. Casi la mitad tenía pensamientos de dañar al bebé a propósito, que no querían tener (Fairbrother y Woody, 2008).',
          ],
        },
        {
          heading: 'Por qué aparecen',
          paragraphs: [
            'Con un bebé recién nacido, la mente está en alerta para protegerlo. Esa alerta también produce imágenes de peligro. Cuanto más te importa algo, más ruido hacen los pensamientos que lo amenazan.',
            'El problema empieza cuando el pensamiento se lee como una señal: «si lo pienso, debo ser un peligro» o «si lo pienso, puede pasar». Entonces llegan la evitación y las comprobaciones.',
          ],
        },
        {
          heading: 'El TOC perinatal',
          paragraphs: [
            'En algunas personas, estos pensamientos se vuelven muy frecuentes y ocupan mucho tiempo. Aparecen conductas para calmarse: no bañar al bebé, no quedarse a solas con él, esconder objetos, revisar una y otra vez, pedir que te digan que no lo harías (Abramowitz y colaboradores, 2003).',
            'Estas conductas alivian un rato, pero enseñan a la mente que el peligro era real. Por eso el pensamiento vuelve con más fuerza. El tratamiento trabaja justamente eso, de a poco y con un profesional.',
            'No hay evidencia de que estos pensamientos, cuando asustan y se rechazan, lleven a dañar al bebé. El miedo de quien los tiene es, justamente, hacer daño.',
          ],
        },
        {
          heading: 'Cómo diferenciarlo de una alarma',
          paragraphs: [
            'Un intrusivo de TOC da miedo y rechazo. La persona sabe que es un pensamiento suyo y que va contra lo que quiere. Suele intentar alejarse de él.',
            'En una psicosis posparto es distinto. Puede haber confusión, ver u oír cosas que otros no, ideas raras que se viven como reales, mucha agitación y no dormir sin sentir sueño. A veces las ideas de daño no generan rechazo. Es poco frecuente, suele empezar en las primeras semanas y es una urgencia (Bergink y colaboradores, 2016).',
            'Si tienes ganas de hacerte daño o de dañar al bebé, o alguien de tu familia nota confusión o ideas raras, ve a una guardia o llama al 911 ya.',
          ],
        },
        {
          heading: 'Qué ayuda',
          paragraphs: [
            'Nombrar el pensamiento como intrusivo, sin pelear con él, baja el miedo. No hace falta comprobar ni buscar que te tranquilicen.',
            'Si los pensamientos te ocupan más de una hora por día, si evitas cuidar al bebé o si te angustian mucho, consulta. Hay tratamientos psicológicos eficaces y también tratamientos compatibles con el embarazo y la lactancia, que se conversan con el equipo de salud (NICE, 2014).',
          ],
        },
      ],
      caveat: {
        title: 'Un aviso',
        body: 'Esta sección no reemplaza una evaluación. La exposición con prevención de respuesta, que es el tratamiento del TOC, se hace con un profesional y no está automatizada en la app. Si tienes dudas sobre si un pensamiento es intrusivo o una señal de alarma, consulta el mismo día.',
      },
      diagram: {
        title: 'Cómo se mantiene un intrusivo de daño',
        nodes: ['Aparece un pensamiento de daño', 'Lectura: «si lo pienso, soy un peligro»', 'Miedo y culpa', 'Evitar, comprobar o pedir que te tranquilicen', 'Alivio breve', 'El pensamiento vuelve con más fuerza'],
        caption: 'Nombrar el pensamiento como intrusivo y no responder con evitación corta el ciclo. Con TOC, se trabaja con un profesional.',
      },
      related: {
        practices: ['ese-pensamiento-no-es-un-deseo', 'respiro-con-el-bebe-en-brazos', 'notar-y-nombrar-el-intrusivo', 'pedir-menos-tranquilizacion'],
        articles: ['pensamientos-intrusivos-y-toc', 'salud-mental-perinatal', 'embarazo-y-posparto'],
      },
      references: [FAIRBROTHER_2008, ABRAMOWITZ_2003, BERGINK_2016, NICE_2014, HOWARD_2014],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'primer-ano-con-mas-sosten',
      title: 'Un comienzo con más sostén',
      subtitle: 'Cuatro semanas para cuidar tu salud mental en el embarazo o el primer año del bebé',
      description:
        'Prácticas breves, que se pueden hacer con el bebé en brazos. Aprenderás a bajar un cambio en dos minutos, a repartir la noche, a pedir ayuda concreta, a ordenar las preocupaciones y a entender los pensamientos que asustan. La última semana incluye a quien no gestó. Si notas señales urgentes, no esperes al programa: pide ayuda ya.',
      basis: 'Howard y colaboradores (2014); NICE (2014); Fairbrother y Woody (2008); Paulson y Bazemore (2010).',
      rhythm: '5 a 10 minutos, 3 o 4 días por semana. Si un día no puedes, está bien.',
      weeks: [
        {
          title: 'Semana 1 · Llegar',
          focus: 'Lo esperable y un respiro',
          description: 'Leerás qué es esperable y qué pide consulta, y practicarás pausas cortas que entran en un día con bebé.',
          practiceIds: ['respiro-con-el-bebe-en-brazos', 'cuidarte-mientras-cuidas'],
          articleIds: ['salud-mental-perinatal', 'embarazo-y-posparto'],
          journalType: 'tres-cosas',
        },
        {
          title: 'Semana 2 · Dormir y pedir',
          focus: 'Repartir la noche y armar la red',
          description: 'Armarás turnos para proteger un bloque de sueño y una lista de ayudas concretas para pedir.',
          practiceIds: ['turnos-de-descanso', 'lista-de-ayudas-concretas'],
          articleIds: [],
          journalType: 'necesidades',
        },
        {
          title: 'Semana 3 · Los pensamientos',
          focus: 'Preocupaciones e intrusivos',
          description: 'Ordenarás las preocupaciones y aprenderás a nombrar los pensamientos que asustan sin pelear con ellos.',
          practiceIds: ['preocupaciones-del-embarazo', 'ese-pensamiento-no-es-un-deseo'],
          articleIds: ['intrusivos-en-el-posparto'],
          journalType: 'defusion',
        },
        {
          title: 'Semana 4 · Suficientemente bien',
          focus: 'La pareja y la exigencia',
          description: 'Revisarás cómo está quien no gestó, harán una charla breve en pareja y practicarás hablarte con más amabilidad.',
          practiceIds: ['como-estas-tu-que-no-gestaste', 'pausa-autocompasion'],
          articleIds: [],
          journalType: 'carta-compasiva',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-intrusivos-posparto',
      title: 'Un pensamiento horrible no es un peligro',
      subtitle: 'Los pensamientos de daño al bebé después del parto.',
      slides: [
        { heading: 'Muy común', text: 'Muchas madres y padres tienen pensamientos de que el bebé sufre un daño. A veces, por su propia mano. Asustan mucho.' },
        { heading: 'No es un deseo', text: 'Si el pensamiento te da miedo y rechazo, va contra lo que quieres. No dice que vayas a hacerlo.' },
        { heading: 'La trampa', text: 'Evitar al bebé, revisar o pedir que te tranquilicen alivia un rato. Pero el pensamiento vuelve más fuerte.' },
        { heading: 'Qué ayuda', text: 'Nómbralo: «Es un pensamiento intrusivo». Déjalo pasar, sin pelear. Y vuelve a lo que hacías.' },
        { heading: 'Contarlo es seguro', text: 'Si te ocupa mucho tiempo o evitas cosas con el bebé, consulta. El TOC perinatal tiene tratamiento.' },
        { heading: 'Otra cosa', text: 'Si tienes ganas de hacer daño, o hay confusión o ideas raras, es urgente. Ve a la guardia o llama al 911.' },
      ],
      related: { practices: ['ese-pensamiento-no-es-un-deseo'], articles: ['intrusivos-en-el-posparto'] },
      references: [FAIRBROTHER_2008, ABRAMOWITZ_2003],
    },
    {
      id: 'pildora-senales-urgentes-posparto',
      title: 'Cuándo ir a la guardia ya',
      subtitle: 'Las señales del posparto que no pueden esperar.',
      slides: [
        { heading: 'Poco frecuente', text: 'La psicosis posparto es rara. Pero es una urgencia. Suele empezar en las primeras semanas después del parto.' },
        { heading: 'Las señales', text: 'Confusión. Ver u oír cosas que otros no. Ideas raras que se viven como reales. Mucha agitación.' },
        { heading: 'El sueño', text: 'No dormir varios días, aunque el bebé duerma y sin sentir sueño, también es una señal de alarma.' },
        { heading: 'Ideas de daño', text: 'Si tienes ganas de hacerte daño o de dañar al bebé, no esperes. Esto no es un intrusivo que asusta.' },
        { heading: 'Qué hacer', text: 'Ve a una guardia o llama al 911 ya. Si alguien de la familia nota estas señales, puede llamar por ti.' },
        { heading: 'Tiene tratamiento', text: 'Con ayuda a tiempo, la mayoría de las personas se recupera. También tienes el 0800-999-0091 y el botón Ayuda.' },
      ],
      related: { practices: ['turnos-de-descanso'], articles: ['intrusivos-en-el-posparto', 'salud-mental-perinatal'] },
      references: [BERGINK_2016, NICE_2014],
    },
    {
      id: 'pildora-depresion-de-quien-no-gesta',
      title: 'Quien no gestó también puede deprimirse',
      subtitle: 'Padres y otras madres en el embarazo y el posparto.',
      slides: [
        { heading: 'También pasa', text: 'Alrededor de uno de cada diez padres tiene depresión en el embarazo o el primer año del bebé.' },
        { heading: 'No sólo padres', text: 'Le puede pasar a otras madres y a quienes crían por adopción. A cualquier persona que cría.' },
        { heading: 'Cómo se nota', text: 'A veces no parece tristeza. Se ve como enojo, aislamiento, mucho trabajo, alcohol o pantallas.' },
        { heading: 'Hacer de fuerte', text: 'El entorno pregunta por quien parió. La otra persona aprende a callar. Pero callar no cuida a nadie.' },
        { heading: 'Qué ayuda', text: 'Hablar diez minutos en pareja sobre cómo está cada persona. Y consultar si dura más de dos semanas.' },
      ],
      related: { practices: ['como-estas-tu-que-no-gestaste'], articles: ['salud-mental-perinatal'] },
      references: [PAULSON_2010],
    },
    {
      id: 'pildora-parto-dificil',
      title: 'Cuando el parto fue difícil',
      subtitle: 'El estrés después de un parto que asustó.',
      slides: [
        { heading: 'No fue lo esperado', text: 'Algunos partos traen urgencias, mucho dolor o miedo a perder la vida o al bebé. Eso puede dejar marca.' },
        { heading: 'Las señales', text: 'Recuerdos que vuelven sin querer, pesadillas, evitar lo que lo recuerda o estar siempre en alerta.' },
        { heading: 'No es debilidad', text: 'Le pasa a una parte de las personas después del parto. Y también a quien estuvo al lado.' },
        { heading: 'Qué ayuda ahora', text: 'Cuando un recuerdo te invade, mira a tu alrededor y nombra cinco cosas que ves. Vuelve al presente.' },
        { heading: 'Cuándo consultar', text: 'Si dura más de un mes o no te deja vivir, consulta. Tiene tratamiento, y no hace falta revivirlo a solas.' },
      ],
      related: { practices: ['orientarme-en-el-presente', 'respiro-con-el-bebe-en-brazos'], articles: ['salud-mental-perinatal', 'trauma-y-estres-postraumatico'] },
      references: [AYERS_2016],
    },
  ],

  // ================================================================== glosario
  glossary: [
    {
      id: 'tristeza-posparto',
      term: 'Tristeza posparto («baby blues»)',
      definition: 'Llanto fácil, cambios de humor y sensibilidad en los primeros días después del parto. Es muy común y suele pasar sola en unas dos semanas.',
      articleId: 'salud-mental-perinatal',
    },
    {
      id: 'depresion-perinatal',
      term: 'Depresión perinatal',
      definition: 'Depresión que empieza en el embarazo o en el primer año del bebé. Dura más de dos semanas, es frecuente y tiene tratamiento. También puede afectar a quien no gestó.',
      articleId: 'salud-mental-perinatal',
    },
    {
      id: 'toc-perinatal',
      term: 'TOC perinatal',
      definition: 'Trastorno obsesivo compulsivo que aparece o empeora en el embarazo o el posparto. Suele traer pensamientos de daño al bebé que asustan y llevan a evitar. No es peligroso y tiene tratamiento.',
      articleId: 'intrusivos-en-el-posparto',
    },
    {
      id: 'psicosis-posparto',
      term: 'Psicosis posparto',
      definition: 'Cuadro poco frecuente y urgente de las primeras semanas tras el parto. Trae confusión, ideas raras que se viven como reales o no dormir sin sueño. Requiere ir a una guardia ya.',
      articleId: 'intrusivos-en-el-posparto',
    },
    {
      id: 'escala-de-edimburgo',
      term: 'Escala de Edimburgo',
      definition: 'Cuestionario breve de diez preguntas que se usa en los controles para detectar una posible depresión en el embarazo o el posparto. No diagnostica: orienta a consultar.',
      articleId: 'salud-mental-perinatal',
    },
  ],
};
