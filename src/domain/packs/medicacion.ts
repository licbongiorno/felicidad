import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Medicación»: información básica sobre medicación psiquiátrica para acompañar la
 * consulta. NUNCA indica, cambia ni suspende un remedio.
 *  - tipos generales en lenguaje simple (antidepresivos, ansiolíticos y benzodiacepinas,
 *    estabilizadores del ánimo, antipsicóticos), sin nombres comerciales ni dosis;
 *  - mitos frecuentes y tiempos de acción (Cipriani y colaboradores);
 *  - efectos adversos, no suspender de golpe (Davies y Read; Horowitz y Taylor; Lader);
 *  - medicación y terapia juntas (Cuijpers y colaboradores);
 *  - preparar la consulta, registro de efectos, adherencia y ambivalencia (Miller y Rollnick);
 *  - alcohol y embarazo: siempre consultar.
 *
 * Regla del paquete: cada práctica y cada artículo aclaran que la decisión es con el médico.
 */

const CIPRIANI_2018: Reference = {
  citation:
    'Cipriani, A., Furukawa, T. A., Salanti, G., Chaimani, A., Atkinson, L. Z., Ogawa, Y., et al. (2018). Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: A systematic review and network meta-analysis. The Lancet, 391(10128), 1357–1366.',
  doi: '10.1016/S0140-6736(17)32802-7',
};
const CUIJPERS_2014: Reference = {
  citation:
    'Cuijpers, P., Sijbrandij, M., Koole, S. L., Andersson, G., Beekman, A. T., & Reynolds, C. F. (2014). Adding psychotherapy to antidepressant medication in depression and anxiety disorders: A meta-analysis. World Psychiatry, 13(1), 56–67.',
  doi: '10.1002/wps.20089',
};
const DAVIES_2019: Reference = {
  citation: 'Davies, J., & Read, J. (2019). A systematic review into the incidence, severity and duration of antidepressant withdrawal effects: Are guidelines evidence-based? Addictive Behaviors, 97, 111–121.',
};
const HOROWITZ_2019: Reference = {
  citation: 'Horowitz, M. A., & Taylor, D. (2019). Tapering of SSRI treatment to mitigate withdrawal symptoms. The Lancet Psychiatry, 6(6), 538–546.',
  doi: '10.1016/S2215-0366(19)30032-X',
};
const LADER_2011: Reference = { citation: 'Lader, M. (2011). Benzodiazepines revisited—will we ever learn? Addiction, 106(12), 2086–2109.' };
const MILLER_2013: Reference = { citation: 'Miller, W. R., & Rollnick, S. (2013). Motivational interviewing: Helping people change (3.ª ed.). Guilford Press.' };

/** Aviso común: la app no indica ni cambia medicación; señales de urgencia. */
const MED =
  'Esta práctica no indica, cambia ni suspende ningún remedio. Las decisiones sobre tu medicación las tomas con tu médico. No dejes ni cambies la dosis por tu cuenta. Si aparecen ideas de hacerte daño, una reacción fuerte o te sientes muy mal, consulta de inmediato, llama al 135 o al 0800-999-0091, o al 911 si es una urgencia.';

export const MEDICACION_PACK: ContentPack = {
  id: 'medicacion',

  // ================================================================== prácticas
  practices: [
    {
      id: 'preparar-la-consulta-medica',
      title: 'Preparar la consulta con tu médico',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Llegar a la consulta con tus preguntas escritas, lo que notaste desde la última vez y lo que te preocupa, para decidir junto con tu médico.',
      mechanism: 'Las consultas son cortas y es fácil olvidarse. Llevar todo escrito ayuda a contar lo importante y a entender mejor el tratamiento.',
      evidenceLevel: 'preliminar',
      evidence: [MILLER_2013, CUIJPERS_2014],
      cautions: MED,
      howItWorks: [
        'Muchas personas salen de la consulta con dudas que no llegaron a preguntar. Con nervios o poco tiempo, cuesta recordar todo. Una lista escrita ayuda a no olvidar lo importante.',
        'Esta práctica no decide nada sobre tu medicación. Te ayuda a llevar la información que tu médico necesita para decidir contigo: cómo te sientes, qué efectos notaste, qué te preocupa y qué otras cosas tomas.',
        'Si además haces terapia, cuéntaselo. Medicación y terapia juntas suelen ayudar más que cada una sola en la depresión y la ansiedad (Cuijpers y colaboradores, 2014).',
      ],
      tips: [
        'Lleva la lista en el celular o en papel. Puedes leerla en voz alta.',
        'Anota todo lo que tomas: otros remedios, vitaminas, hierbas, alcohol u otras sustancias.',
        'Si no entiendes algo, pide que te lo expliquen de otra forma. Es tu derecho.',
        'Puedes ir con alguien de confianza que te ayude a recordar.',
      ],
      obstacles: [{ q: 'Me da vergüenza preguntar tanto.', a: 'Tus preguntas son parte del tratamiento. Un buen médico prefiere que preguntes a que dejes el remedio por una duda.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en cómo estuviste desde la última consulta.', durationSec: 30, kind: 'breath' },
        { title: 'Cómo estoy', instruction: 'Anota en dos o tres frases cómo te sientes. ¿Qué mejoró? ¿Qué sigue igual o peor?', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que noté', instruction: 'Anota los efectos que notaste: sueño, apetito, mareos, cambios en el cuerpo o en el deseo sexual. Todo cuenta.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que tomo', instruction: 'Haz la lista de todo lo que tomas. Remedios, vitaminas, hierbas, alcohol u otras sustancias.', durationSec: 45, kind: 'reflection' },
        { title: 'Mis preguntas', instruction: 'Escribe tres preguntas. Por ejemplo: ¿cuánto tarda en hacer efecto? ¿Qué hago si me olvido una toma? ¿Cómo se deja, si algún día lo dejo?', durationSec: 75, kind: 'reflection' },
        { title: 'Lo que me preocupa', instruction: 'Anota una duda o un miedo que te cueste decir. Llévalo igual a la consulta.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Guarda la lista donde la tengas a mano el día de la consulta. Recuerda: decides junto con tu médico.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'registro-efectos-y-beneficios',
      title: 'Registro de efectos y beneficios',
      family: 'attentional',
      skills: ['attention'],
      summary: 'Anotar unos minutos por día cómo te sientes, cómo duermes y qué efectos notas, para llevar datos concretos a tu médico.',
      mechanism: 'La memoria tiende a recordar el último día. Un registro breve muestra los cambios reales con el tiempo y ayuda a decidir mejor en la consulta.',
      evidenceLevel: 'preliminar',
      evidence: [CIPRIANI_2018, MILLER_2013],
      cautions: MED,
      howItWorks: [
        'Los antidepresivos suelen tardar varias semanas en mostrar su efecto completo. Los efectos adversos, en cambio, a veces aparecen antes y muchos bajan con los días. Sin registro, es fácil pensar que «no sirve» antes de tiempo.',
        'Los antidepresivos funcionan mejor que el placebo en la depresión de adultos, aunque cada persona responde distinto (Cipriani y colaboradores, 2018). Por eso tu médico necesita saber cómo te va a ti.',
        'El registro no sirve para ajustar la dosis por tu cuenta. Sirve para llevar datos claros a la consulta.',
      ],
      tips: [
        'Hazlo siempre a la misma hora, por ejemplo antes de dormir.',
        'Usa números del cero al diez. Son rápidos y fáciles de comparar.',
        'Si notas algo fuerte o raro, no esperes a la consulta: llama a tu médico.',
      ],
      obstacles: [{ q: 'Me olvido de anotar.', a: 'Pon una alarma en el celular o asócialo a algo que ya haces, como lavarte los dientes. Un registro con días salteados igual sirve.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio y piensa en cómo fue tu día.', durationSec: 20, kind: 'breath' },
        { title: 'Ánimo', instruction: 'Del cero al diez, ¿cómo estuvo tu ánimo hoy? Anota el número.', durationSec: 20, kind: 'reflection' },
        { title: 'Sueño', instruction: '¿Cómo dormiste anoche? Anota cuántas horas y si te despertaste mucho.', durationSec: 25, kind: 'reflection' },
        { title: 'Efectos', instruction: '¿Notaste algún efecto? Náuseas, mareos, sueño de día, inquietud, cambios en el apetito. Anota cuáles y cuánto molestan.', durationSec: 40, kind: 'reflection' },
        { title: 'Lo bueno', instruction: '¿Notaste alguna mejora, aunque sea chica? Anótala también.', durationSec: 25, kind: 'reflection' },
        { title: 'Para consultar', instruction: 'Si algo te preocupa, márcalo para la consulta. Si es fuerte o te asusta, llama hoy a tu médico.', durationSec: 25, kind: 'instruction' },
      ],
    },
    {
      id: 'ambivalencia-con-la-medicacion',
      title: 'Lo que pienso de tomar medicación',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Mirar con honestidad tus dudas sobre la medicación, lo que te preocupa y lo que te importa, para llevarlo a la consulta.',
      mechanism: 'Querer y no querer tomar un remedio a la vez es normal. Poner las dos partes en palabras ayuda a decidir con tu médico en lugar de dejar en silencio.',
      evidenceLevel: 'preliminar',
      evidence: [MILLER_2013],
      cautions: MED,
      howItWorks: [
        'Mucha gente tiene sentimientos mezclados con la medicación. Puede ayudar y, a la vez, dar miedo a los efectos, a «depender» o a lo que piensen otros. La entrevista motivacional llama a esto ambivalencia y la ve como parte normal de cualquier cambio (Miller y Rollnick, 2013).',
        'Cuando las dudas no se dicen, muchas personas dejan el remedio a escondidas. Eso puede traer síntomas de retirada o una recaída. Hablar las dudas permite buscar juntos otra opción si hace falta.',
        'Esta práctica no busca convencerte de tomar ni de dejar. Busca que llegues a la consulta con claridad.',
      ],
      tips: [
        'No hay respuestas correctas. Escribe lo que de verdad piensas.',
        'Separa lo que sabes de lo que escuchaste decir. Puedes preguntar a tu médico por cada cosa.',
        'Si tu duda es dejar el remedio, la práctica «Antes de cambiar o dejar un remedio» te ayuda a prepararlo.',
      ],
      obstacles: [{ q: 'Siento que tomar remedios es de débiles.', a: 'Es un mito muy común. Tomar medicación cuando hace falta es cuidar tu salud, como con la presión o el asma. No dice nada de tu fuerza.' }],
      steps: [
        { title: 'Llegar', instruction: 'Pon una mano en el pecho y respira despacio. Aquí no tienes que decidir nada.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que me ayuda', instruction: '¿Qué te da o qué esperas de la medicación? Anota dos o tres cosas.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que me preocupa', instruction: '¿Qué te preocupa? Efectos, depender, lo que piensen otros, sentirte distinto. Anota lo que aparezca.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que escuché', instruction: 'Marca cuáles de esas ideas sabes de tu médico y cuáles escuchaste por ahí. Las segundas son buenas preguntas.', durationSec: 50, kind: 'reflection' },
        { title: 'Lo que me importa', instruction: '¿Qué te importa en tu vida que tu salud te ayuda a sostener? Familia, trabajo, proyectos.', durationSec: 50, kind: 'reflection' },
        { title: 'Para la consulta', instruction: 'Elige una duda para hablar con tu médico. Escríbela tal como la dirías.', durationSec: 40, kind: 'reflection' },
      ],
    },
    {
      id: 'plan-para-no-olvidar-dosis',
      title: 'Un plan para no olvidar las tomas',
      family: 'constructive',
      skills: ['attention'],
      summary: 'Armar recordatorios simples para tomar la medicación como la indicó tu médico, y saber qué preguntar si te olvidas una toma.',
      mechanism: 'Asociar la toma a un hábito que ya tienes y usar recordatorios baja los olvidos sin depender de la memoria.',
      evidenceLevel: 'preliminar',
      evidence: [MILLER_2013, HOROWITZ_2019],
      cautions: MED,
      howItWorks: [
        'Olvidar tomas es muy común, sobre todo con tratamientos largos. Algunas personas notan malestar cuando se saltean varias tomas de ciertos antidepresivos, porque el cuerpo nota la baja (Horowitz y Taylor, 2019).',
        'Ayuda unir la toma a algo que ya haces todos los días, como el desayuno o lavarte los dientes. Un pastillero semanal y una alarma completan el plan.',
        'Qué hacer si olvidas una toma depende de cada remedio. Pregúntalo a tu médico o en la farmacia. No dupliques por tu cuenta.',
      ],
      tips: [
        'Guarda los remedios en un lugar seguro, lejos de los chicos, pero que veas cada día.',
        'Revisa con tiempo cuándo se termina la caja y cuándo necesitas receta nueva.',
        'Si viajas, lleva los remedios en el bolso de mano.',
      ],
      obstacles: [{ q: 'A veces no me olvido: elijo no tomarla.', a: 'Es valioso que lo notes. Puede ser una duda sobre el remedio. Llévala a la consulta, o prueba la práctica sobre lo que piensas de tomar medicación.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Ten a mano la indicación de tu médico.', durationSec: 20, kind: 'breath' },
        { title: 'Cuándo', instruction: 'Anota a qué hora o en qué momento del día te indicaron cada toma.', durationSec: 40, kind: 'reflection' },
        { title: 'Un ancla', instruction: 'Elige un hábito que ya haces a esa hora, como desayunar o lavarte los dientes. La toma va junto a ese hábito.', durationSec: 40, kind: 'reflection' },
        { title: 'Recordatorio', instruction: 'Pon una alarma en el celular. Si te sirve, arma un pastillero de la semana.', durationSec: 40, kind: 'instruction' },
        { title: 'Si me olvido', instruction: 'Anota una pregunta para tu médico o la farmacia: ¿qué hago si olvido una toma? No dupliques por tu cuenta.', durationSec: 40, kind: 'reflection' },
        { title: 'La receta', instruction: 'Anota cuándo se termina tu caja y cuándo pedir la próxima receta.', durationSec: 20, kind: 'instruction' },
      ],
    },
    {
      id: 'antes-de-cambiar-la-medicacion',
      title: 'Antes de cambiar o dejar un remedio',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Cuando tienes ganas de dejar o cambiar la medicación, ordenar tus razones y preparar la charla con tu médico, en lugar de cortar de golpe.',
      mechanism: 'Dejar de golpe algunos remedios puede traer síntomas de retirada o una recaída. Llevar las razones a la consulta permite un plan seguro y gradual, si corresponde.',
      evidenceLevel: 'moderada',
      evidence: [DAVIES_2019, HOROWITZ_2019, LADER_2011],
      cautions: MED,
      howItWorks: [
        'Dejar de golpe algunos antidepresivos puede causar el síndrome de discontinuación: mareos, irritabilidad, sensaciones raras, insomnio o malestar parecido a una gripe. Una revisión encontró que estos efectos son frecuentes y a veces duran más de lo que se creía (Davies y Read, 2019).',
        'Cuando se decide dejar un remedio, suele hacerse bajando de a poco, con un plan del médico (Horowitz y Taylor, 2019). Con las benzodiacepinas el cuidado es aún mayor. Usadas por tiempo largo pueden generar dependencia, y cortarlas de golpe puede ser peligroso (Lader, 2011).',
        'Querer dejar un remedio es una decisión válida. Esta práctica te ayuda a hacerla con tu médico, de forma segura.',
      ],
      tips: [
        'Sentirte mejor no siempre quiere decir que ya no lo necesitas. A veces es justo el efecto del remedio.',
        'Si los efectos adversos te molestan mucho, dilo. Puede haber otras opciones.',
        'Si ya dejaste y te sientes mal, no te culpes. Llama a tu médico y cuéntale.',
      ],
      obstacles: [{ q: 'Mi médico no me escucha.', a: 'Lleva tus razones escritas y pide un tiempo para hablarlo. Si sigues sintiendo que no te escucha, puedes pedir una segunda opinión, sin dejar el remedio por tu cuenta mientras tanto.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Recuerda que no tienes que decidir nada hoy.', durationSec: 30, kind: 'breath' },
        { title: 'Por qué', instruction: '¿Por qué quieres dejar o cambiar el remedio? Efectos, sentirte mejor, miedo, costo. Anota tus razones.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que cambió', instruction: '¿Cómo estabas antes de empezar y cómo estás ahora? Anota la diferencia, con ejemplos.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que temo', instruction: '¿Qué te preocupa de dejarlo? ¿Y de seguir? Anota las dos partes.', durationSec: 50, kind: 'reflection' },
        { title: 'Mis preguntas', instruction: 'Escribe tus preguntas. ¿Es buen momento? ¿Cómo se baja de forma segura? ¿Qué señales debo vigilar?', durationSec: 60, kind: 'reflection' },
        { title: 'Pedir turno', instruction: 'Anota cuándo vas a pedir la consulta. Hasta entonces, sigue como te indicaron.', durationSec: 30, kind: 'instruction' },
      ],
    },
  ],

  meta: {
    'preparar-la-consulta-medica': { level: 'iniciacion', approaches: ['motivacional'], module: 'salud' },
    'registro-efectos-y-beneficios': { level: 'iniciacion', approaches: ['tcc'], module: 'salud' },
    'ambivalencia-con-la-medicacion': { level: 'intermedio', approaches: ['motivacional'], module: 'salud', prerequisites: ['preparar-la-consulta-medica'] },
    'plan-para-no-olvidar-dosis': { level: 'iniciacion', approaches: ['tcc'], module: 'salud' },
    'antes-de-cambiar-la-medicacion': { level: 'intermedio', approaches: ['motivacional'], module: 'salud', prerequisites: ['preparar-la-consulta-medica'] },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'medicacion-psiquiatrica',
      title: 'Medicación psiquiátrica: lo básico para entender tu tratamiento',
      subtitle: 'Qué tipos hay, cuánto tardan, mitos frecuentes y por qué medicación y terapia pueden ir juntas.',
      category: 'Salud y trabajo',
      readingMin: 8,
      keyPoints: [
        'Este artículo informa. No indica, cambia ni suspende ningún remedio: eso se decide con tu médico.',
        'Hay grandes grupos: antidepresivos, ansiolíticos, estabilizadores del ánimo y antipsicóticos.',
        'Los antidepresivos suelen tardar varias semanas en mostrar su efecto completo.',
        'La medicación no cambia quién eres, no siempre es para siempre y no es de débiles.',
        'En depresión y ansiedad, sumar terapia a la medicación suele ayudar más que la medicación sola.',
      ],
      sections: [
        {
          heading: 'Los grandes grupos',
          paragraphs: [
            'Los antidepresivos se usan en la depresión y también en varios trastornos de ansiedad. En adultos con depresión funcionan mejor que el placebo, aunque cada persona responde distinto (Cipriani y colaboradores, 2018).',
            'Los ansiolíticos bajan la ansiedad. Entre ellos están las benzodiacepinas, que actúan rápido. Suelen usarse por poco tiempo, porque con el uso prolongado pueden generar tolerancia y dependencia (Lader, 2011).',
            'Los estabilizadores del ánimo se usan, sobre todo, en el trastorno bipolar, para evitar subidas y bajadas fuertes. Los antipsicóticos se usan en cuadros como la psicosis y, a veces, en el trastorno bipolar o junto a otros tratamientos.',
            'Dentro de cada grupo hay muchos remedios distintos. Tu médico elige según tu situación, tu historia y otros remedios que tomes.',
          ],
        },
        {
          heading: 'Cuánto tardan',
          paragraphs: [
            'Los antidepresivos no actúan como un calmante. Suelen pasar algunas semanas hasta notar el efecto completo. Al principio pueden aparecer efectos adversos, como náuseas o cambios en el sueño, que muchas veces bajan con los días.',
            'Por eso es común sentir que «no sirve» al comienzo. Antes de decidir algo, conviene hablarlo con tu médico. Un registro de cómo te sientes ayuda mucho en esa charla.',
          ],
        },
        {
          heading: 'Tres mitos frecuentes',
          paragraphs: [
            '«Te cambia la personalidad.» La medicación busca bajar síntomas, como la tristeza intensa o la ansiedad, no cambiar quién eres. Si sientes que perdiste energía o que no te reconoces, dilo: puede ajustarse.',
            '«Es para siempre.» Depende del cuadro y de cada persona. Muchos tratamientos tienen un tiempo pensado y se revisan. Otros conviene mantenerlos más. Lo decide tu médico contigo.',
            '«Es de débiles.» Tomar medicación cuando hace falta es cuidar tu salud, igual que con la presión o la diabetes. No dice nada de tu fuerza ni de tu valor.',
          ],
        },
        {
          heading: 'Medicación y terapia',
          paragraphs: [
            'No hay que elegir una u otra. En depresión y ansiedad, sumar psicoterapia a la medicación suele dar mejores resultados que la medicación sola (Cuijpers y colaboradores, 2014). La terapia también enseña herramientas que siguen sirviendo después.',
            'Cuéntale a tu médico si haces terapia, y a tu terapeuta qué medicación tomas. Que hablen entre sí, si te parece bien, suele ayudar.',
          ],
        },
      ],
      caveat: {
        title: 'La decisión es con tu médico',
        body: 'Aquí no hay nombres de remedios ni dosis a propósito. Ninguna información general reemplaza la evaluación de tu médico, que conoce tu historia. Si al empezar o cambiar un antidepresivo aparecen ideas de hacerte daño, sobre todo en personas jóvenes, consulta de inmediato o llama al 135, al 0800-999-0091 o al 911.',
      },
      related: {
        practices: ['preparar-la-consulta-medica', 'registro-efectos-y-beneficios', 'ambivalencia-con-la-medicacion'],
        articles: ['medicacion-sin-sorpresas'],
      },
      references: [CIPRIANI_2018, CUIJPERS_2014, LADER_2011],
    },
    {
      id: 'medicacion-sin-sorpresas',
      title: 'Efectos, suspensión, alcohol y embarazo: lo que conviene saber',
      subtitle: 'Qué consultar, por qué no se deja de golpe y cómo sostener el tratamiento cuando aparecen dudas.',
      category: 'Salud y trabajo',
      readingMin: 7,
      keyPoints: [
        'Todos los remedios pueden tener efectos adversos. Muchos bajan con los días; otros hay que consultarlos.',
        'No dejes un remedio de golpe: algunos antidepresivos dan síntomas de retirada y las benzodiacepinas pueden dar dependencia.',
        'El alcohol puede sumar efectos con varios remedios. Pregunta siempre.',
        'Si estás embarazada o buscas un embarazo, consulta antes de cambiar nada.',
        'Tener dudas sobre la medicación es normal. Lo importante es hablarlas.',
      ],
      sections: [
        {
          heading: 'Efectos adversos: qué consultar',
          paragraphs: [
            'Los efectos adversos más comunes suelen ser leves: náuseas, dolor de cabeza, sueño o insomnio, cambios en el apetito o en el deseo sexual. Muchos bajan en las primeras semanas. Anótalos y cuéntalos en la consulta.',
            'Hay señales para consultar enseguida: ideas de hacerte daño, mucha inquietud, fiebre con rigidez o confusión, una erupción en la piel que se extiende o cualquier cambio fuerte que te asuste. Si es grave, llama al 911.',
          ],
        },
        {
          heading: 'Por qué no se deja de golpe',
          paragraphs: [
            'Dejar de golpe algunos antidepresivos puede causar el síndrome de discontinuación. Puede haber mareos, irritabilidad, sensaciones raras en el cuerpo, insomnio o malestar. Estos efectos son frecuentes y a veces duran semanas (Davies y Read, 2019).',
            'Cuando se decide dejar un remedio, suele hacerse de a poco, con un plan del médico (Horowitz y Taylor, 2019). Con las benzodiacepinas el cuidado es mayor: con uso largo pueden dar dependencia, y cortarlas de golpe puede ser peligroso (Lader, 2011).',
          ],
        },
        {
          heading: 'Alcohol y medicación',
          paragraphs: [
            'El alcohol puede sumar sueño y mareos con varios remedios psiquiátricos. Con las benzodiacepinas la mezcla es especialmente riesgosa. También puede empeorar la depresión y la ansiedad.',
            'Pregunta a tu médico qué pasa con el alcohol en tu caso. Si te cuesta tomar menos, cuéntalo: es parte de tu salud, no un motivo de vergüenza.',
          ],
        },
        {
          heading: 'Embarazo y lactancia',
          paragraphs: [
            'Si estás embarazada, buscas un embarazo o das el pecho, habla con tu médico lo antes posible. No dejes ni cambies la medicación por tu cuenta. Dejar de golpe también tiene riesgos, para ti y para el embarazo.',
            'Con tu médico pueden mirar juntos los riesgos y beneficios de cada opción. Muchas veces hay alternativas.',
          ],
        },
        {
          heading: 'Cuando aparecen las dudas',
          paragraphs: [
            'Querer y no querer tomar un remedio a la vez es muy común. La entrevista motivacional ve esta ambivalencia como parte normal del cambio (Miller y Rollnick, 2013). Callarla suele terminar en dejar el remedio a escondidas.',
            'Ayuda escribir lo que te da la medicación y lo que te preocupa, separar lo que sabes de lo que escuchaste, y llevarlo a la consulta. También ayudan recordatorios simples para no olvidar las tomas.',
          ],
        },
      ],
      caveat: {
        title: 'Esto no es una indicación',
        body: 'La información es general y no sirve para decidir sola o solo sobre un remedio. Cualquier cambio, inicio o suspensión se decide con tu médico. Si aparecen ideas de hacerte daño, llama al 135 (CABA y GBA; resto del país 0800-345-1435), al 0800-999-0091 o al 911.',
      },
      related: {
        practices: ['antes-de-cambiar-la-medicacion', 'plan-para-no-olvidar-dosis', 'ambivalencia-con-la-medicacion', 'registro-efectos-y-beneficios'],
        articles: ['medicacion-psiquiatrica', 'alcohol-reducir-danos'],
      },
      references: [DAVIES_2019, HOROWITZ_2019, LADER_2011, MILLER_2013],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'acompanar-mi-tratamiento',
      title: 'Acompañar mi tratamiento',
      subtitle: 'Tres semanas para entender tu medicación y hablar mejor con tu médico',
      description:
        'Aprenderás lo básico sobre la medicación psiquiátrica, prepararás tus consultas, llevarás un registro de efectos y beneficios, armarás un plan para no olvidar las tomas y mirarás tus dudas con honestidad. Este programa no indica, cambia ni suspende ningún remedio: eso se decide siempre con tu médico.',
      basis: 'Cipriani y colaboradores (2018); Cuijpers y colaboradores (2014); Horowitz y Taylor (2019); Miller y Rollnick (2013).',
      rhythm: '5 a 10 minutos, 4 o 5 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Entender',
          focus: 'Lo básico y la consulta',
          description: 'Leerás qué tipos de medicación hay y cuánto tardan, y prepararás tu próxima consulta.',
          practiceIds: ['preparar-la-consulta-medica', 'registro-efectos-y-beneficios'],
          articleIds: ['medicacion-psiquiatrica'],
          journalType: 'intencion',
        },
        {
          title: 'Semana 2 · Sostener',
          focus: 'Registro y recordatorios',
          description: 'Seguirás con el registro diario y armarás un plan para no olvidar las tomas.',
          practiceIds: ['registro-efectos-y-beneficios', 'plan-para-no-olvidar-dosis'],
          articleIds: ['medicacion-sin-sorpresas'],
          journalType: 'tarjeta-diaria',
        },
        {
          title: 'Semana 3 · Mis dudas',
          focus: 'Ambivalencia y decisiones con tu médico',
          description: 'Mirarás lo que piensas de la medicación y, si quieres cambiar algo, prepararás la charla con tu médico.',
          practiceIds: ['ambivalencia-con-la-medicacion', 'antes-de-cambiar-la-medicacion'],
          articleIds: [],
          journalType: 'conversacion',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-mitos-medicacion',
      title: 'Tres mitos sobre la medicación',
      subtitle: 'Personalidad, para siempre y debilidad.',
      slides: [
        { heading: '«Te cambia»', text: 'La medicación busca bajar síntomas, no cambiar quién eres. Si sientes que perdiste tu energía o tus ganas, dilo a tu médico.' },
        { heading: '«Es para siempre»', text: 'Depende de cada caso. Muchos tratamientos tienen un tiempo y se revisan. Lo decide tu médico contigo.' },
        { heading: '«Es de débiles»', text: 'Tomar un remedio cuando hace falta es cuidar tu salud. Como con la presión. No habla de tu fuerza.' },
        { heading: 'Con terapia', text: 'No hay que elegir. Medicación y terapia juntas suelen ayudar más que la medicación sola.' },
        { heading: 'Tus dudas', text: 'Si tienes dudas, llévalas a la consulta. No dejes el remedio por tu cuenta.' },
      ],
      related: { practices: ['ambivalencia-con-la-medicacion'], articles: ['medicacion-psiquiatrica'] },
      references: [CUIJPERS_2014, MILLER_2013],
    },
    {
      id: 'pildora-antidepresivos-tiempo',
      title: 'Dale tiempo',
      subtitle: 'Por qué los antidepresivos tardan en hacer efecto.',
      slides: [
        { heading: 'No es un calmante', text: 'Los antidepresivos no actúan en el momento. Suelen tardar unas semanas en dar su efecto completo.' },
        { heading: 'Primero, efectos', text: 'Al principio puede haber náuseas o cambios en el sueño. Muchas veces bajan con los días.' },
        { heading: 'Cada persona es distinta', text: 'Funcionan mejor que el placebo, pero no a todos les va igual. Por eso tu médico necesita saber cómo te va.' },
        { heading: 'Anota', text: 'Un registro corto de ánimo, sueño y efectos te ayuda a contar lo que pasa en la consulta.' },
        { heading: 'Si te asusta', text: 'Si aparecen ideas de hacerte daño, consulta ya. Llama al 135 o al 911.' },
      ],
      related: { practices: ['registro-efectos-y-beneficios'], articles: ['medicacion-psiquiatrica'] },
      references: [CIPRIANI_2018],
    },
    {
      id: 'pildora-no-suspender-de-golpe',
      title: 'No lo dejes de golpe',
      subtitle: 'Retirada, dependencia y cómo hablarlo con tu médico.',
      slides: [
        { heading: 'El cuerpo se acostumbra', text: 'Con algunos remedios, el cuerpo se acostumbra. Si los dejas de golpe, lo nota.' },
        { heading: 'Síntomas de retirada', text: 'Dejar de golpe un antidepresivo puede dar mareos, insomnio, enojo o malestar. A veces duran semanas.' },
        { heading: 'Benzodiacepinas', text: 'Con uso largo pueden dar dependencia. Cortarlas de golpe puede ser peligroso.' },
        { heading: 'De a poco', text: 'Si se decide dejar un remedio, suele hacerse de a poco. Con un plan de tu médico.' },
        { heading: 'Habla primero', text: 'Querer dejarlo es válido. Lleva tus razones a la consulta. Hasta entonces, sigue como te indicaron.' },
      ],
      related: { practices: ['antes-de-cambiar-la-medicacion'], articles: ['medicacion-sin-sorpresas'] },
      references: [DAVIES_2019, HOROWITZ_2019, LADER_2011],
    },
    {
      id: 'pildora-preparar-consulta',
      title: 'Tu consulta, mejor preparada',
      subtitle: 'Qué llevar escrito al médico.',
      slides: [
        { heading: 'Se olvida', text: 'Con nervios y poco tiempo, cuesta recordar todo. Por eso ayuda llevar una lista.' },
        { heading: 'Cómo estás', text: 'Anota qué mejoró, qué sigue igual y qué efectos notaste. Todo cuenta.' },
        { heading: 'Lo que tomas', text: 'Lleva la lista de todo lo que tomas: otros remedios, vitaminas, hierbas y alcohol.' },
        { heading: 'Tus preguntas', text: '¿Cuánto tarda? ¿Qué hago si me olvido una toma? ¿Puedo tomar alcohol? Escríbelas antes.' },
        { heading: 'Decidir juntos', text: 'Tu médico decide contigo. Si no entiendes algo, pide que te lo explique otra vez.' },
      ],
      related: { practices: ['preparar-la-consulta-medica', 'plan-para-no-olvidar-dosis'], articles: ['medicacion-sin-sorpresas'] },
      references: [MILLER_2013],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'psicofarmaco', term: 'Psicofármaco', definition: 'Remedio que actúa sobre el cerebro para aliviar síntomas como la tristeza intensa, la ansiedad o la psicosis. Lo indica y lo ajusta un médico.', articleId: 'medicacion-psiquiatrica' },
    { id: 'benzodiacepina', term: 'Benzodiacepina', definition: 'Tipo de ansiolítico que actúa rápido. Con uso largo puede dar tolerancia y dependencia, por eso no se deja de golpe.', articleId: 'medicacion-psiquiatrica' },
    { id: 'sindrome-de-discontinuacion', term: 'Síndrome de discontinuación', definition: 'Malestar que puede aparecer al dejar de golpe algunos remedios, como mareos, insomnio o irritabilidad. Se previene bajando de a poco con el médico.', practiceId: 'antes-de-cambiar-la-medicacion' },
    { id: 'efecto-adverso', term: 'Efecto adverso', definition: 'Efecto no buscado de un remedio, como náuseas o cambios en el sueño. Muchos bajan con los días; conviene contarlos en la consulta.', practiceId: 'registro-efectos-y-beneficios' },
    { id: 'adherencia', term: 'Adherencia', definition: 'Tomar el tratamiento como se acordó con el médico. Mejora con recordatorios y hablando de las dudas.', practiceId: 'plan-para-no-olvidar-dosis' },
  ],
};
