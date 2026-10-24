import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Metacognición y vínculos»: terapia metacognitiva (Adrian Wells), terapia
 * focalizada en la emoción (Leslie Greenberg), terapia interpersonal (Klerman y Weissman)
 * y mentalización (Peter Fonagy y Anthony Bateman).
 *
 * Son terapias con buen respaldo como tratamientos completos, guiados por profesionales.
 * Las prácticas de aquí son versiones breves y autoguiadas de algunas de sus técnicas: por
 * eso casi todas declaran evidencia preliminar. Se evitan las técnicas intensas (por
 * ejemplo, la silla vacía) y se ofrecen versiones suaves por escrito.
 */

// ------------------------------------------------------------ referencias
const WELLS_2009: Reference = { citation: 'Wells, A. (2009). Metacognitive therapy for anxiety and depression. Guilford Press.' };
const WELLS_MATTHEWS_1994: Reference = { citation: 'Wells, A., & Matthews, G. (1994). Attention and emotion: A clinical perspective. Lawrence Erlbaum.' };
const WELLS_2005: Reference = {
  citation: 'Wells, A. (2005). Detached mindfulness in cognitive therapy: A metacognitive analysis and ten techniques. Journal of Rational-Emotive & Cognitive-Behavior Therapy, 23(4), 337–355.',
};
const NORMANN_2018: Reference = {
  citation: 'Normann, N., & Morina, N. (2018). The efficacy of metacognitive therapy: A systematic review and meta-analysis. Frontiers in Psychology, 9, 2211.',
};
const KNOWLES_2016: Reference = {
  citation:
    'Knowles, M. M., Foden, P., El-Deredy, W., & Wells, A. (2016). A systematic review of efficacy of the attention training technique in clinical and nonclinical samples. Journal of Clinical Psychology, 72(10), 999–1025.',
};
const BORKOVEC_1983: Reference = {
  citation: 'Borkovec, T. D., Wilkinson, L., Folensbee, R., & Lerman, C. (1983). Stimulus control applications to the treatment of worry. Behaviour Research and Therapy, 21(3), 247–251.',
};
const MCGOWAN_2013: Reference = {
  citation: 'McGowan, S. K., & Behar, E. (2013). A preliminary investigation of stimulus control training for worry: Effects on anxiety and insomnia. Behavior Modification, 37(1), 90–112.',
};
const GREENBERG_2002: Reference = {
  citation: 'Greenberg, L. S. (2002). Emotion-focused therapy: Coaching clients to work through their feelings. American Psychological Association.',
};
const GREENBERG_2004: Reference = { citation: 'Greenberg, L. S. (2004). Emotion-focused therapy. Clinical Psychology & Psychotherapy, 11(1), 3–16.' };
const GREENBERG_PAIVIO_1997: Reference = { citation: 'Greenberg, L. S., & Paivio, S. C. (1997). Working with emotions in psychotherapy. Guilford Press.' };
const PASCUAL_LEONE_2007: Reference = {
  citation:
    'Pascual-Leone, A., & Greenberg, L. S. (2007). Emotional processing in experiential therapy: Why «the only way out is through». Journal of Consulting and Clinical Psychology, 75(6), 875–887.',
};
const LIEBERMAN_2007: Reference = {
  citation:
    'Lieberman, M. D., Eisenberger, N. I., Crockett, M. J., Tom, S. M., Pfeifer, J. H., & Way, B. M. (2007). Putting feelings into words: Affect labeling disrupts amygdala activity in response to affective stimuli. Psychological Science, 18(5), 421–428.',
};
const KLERMAN_1984: Reference = { citation: 'Klerman, G. L., Weissman, M. M., Rounsaville, B. J., & Chevron, E. S. (1984). Interpersonal psychotherapy of depression. Basic Books.' };
const WEISSMAN_2000: Reference = { citation: 'Weissman, M. M., Markowitz, J. C., & Klerman, G. L. (2000). Comprehensive guide to interpersonal psychotherapy. Basic Books.' };
const CUIJPERS_2016: Reference = {
  citation:
    'Cuijpers, P., Donker, T., Weissman, M. M., Ravitz, P., & Cristea, I. A. (2016). Interpersonal psychotherapy for mental health problems: A comprehensive meta-analysis. American Journal of Psychiatry, 173(7), 680–687.',
};
const BATEMAN_2016: Reference = { citation: 'Bateman, A., & Fonagy, P. (2016). Mentalization-based treatment for personality disorders: A practical guide. Oxford University Press.' };
const ALLEN_2008: Reference = { citation: 'Allen, J. G., Fonagy, P., & Bateman, A. W. (2008). Mentalizing in clinical practice. American Psychiatric Publishing.' };
const FONAGY_2002: Reference = { citation: 'Fonagy, P., Gergely, G., Jurist, E. L., & Target, M. (2002). Affect regulation, mentalization, and the development of the self. Other Press.' };
const BATEMAN_2009: Reference = {
  citation:
    'Bateman, A., & Fonagy, P. (2009). Randomized controlled trial of outpatient mentalization-based treatment versus structured clinical management for borderline personality disorder. American Journal of Psychiatry, 166(12), 1355–1364.',
};

export const METACOGNICION_VINCULOS_PACK: ContentPack = {
  id: 'metacognicion-vinculos',

  // ============================================================ prácticas
  practices: [
    // ------------------------------------------------------------ terapia metacognitiva
    {
      id: 'aplazar-preocupacion',
      title: 'Aplazar la preocupación',
      family: 'attentional',
      skills: ['attention', 'resilience'],
      summary: 'Notar que empieza la preocupación o la rumiación, dejarla para un momento fijo del día y volver a lo que estabas haciendo.',
      mechanism: 'Al aplazar la preocupación compruebas que puedes dejarla, y se debilita la creencia de que es incontrolable.',
      evidenceLevel: 'moderada',
      evidence: [WELLS_2009, BORKOVEC_1983, MCGOWAN_2013, NORMANN_2018],
      howItWorks: [
        'Adrian Wells, creador de la terapia metacognitiva, propone que el problema no es tener pensamientos negativos. Todos los tenemos. El problema es quedarse enganchado a ellos durante mucho tiempo, dándoles vueltas.',
        'Muchas personas creen que la preocupación no se puede parar. Otras creen que les sirve para estar preparadas. Aplazarla pone a prueba esas creencias. Si logras dejarla para más tarde, aprendes que tienes más control del que pensabas.',
        'No se trata de suprimir el pensamiento ni de discutir con él. Lo dejas estar, sin seguirlo. Es como ver pasar un tren sin subirte.',
      ],
      tips: [
        'Elige un horario fijo de unos 15 minutos, lejos de la hora de dormir.',
        'Si llega la hora y ya no te importa, puedes saltear el rato de preocupación.',
        'Una frase corta ayuda: «Esto lo veo a las seis».',
        'Distingue preocupación de problema real: si puedes hacer algo ahora, hazlo.',
      ],
      obstacles: [
        { q: 'El pensamiento vuelve una y otra vez.', a: 'Es normal al principio. Cada vez que vuelva, repite el aplazamiento con calma. No hace falta que se vaya: basta con no seguirlo.' },
        { q: 'Siento que si no me preocupo, algo malo va a pasar.', a: 'Esa es justamente una creencia que esta práctica pone a prueba. Observa qué pasa de verdad los días que aplazas.' },
      ],
      steps: [
        { title: 'Elegir un horario', instruction: 'Elige un momento fijo para tus preocupaciones, por ejemplo a las seis de la tarde, durante quince minutos.', durationSec: 45, kind: 'reflection' },
        { title: 'Notar el disparador', instruction: 'Recuerda una preocupación de hoy. Nota el primer pensamiento, el que la dispara. Suele ser un «¿y si…?».', durationSec: 45, kind: 'reflection' },
        { title: 'Ver el enganche', instruction: 'Observa cómo la mente quiere seguir ese pensamiento y darle vueltas. Solo nótalo, sin juzgarte.', durationSec: 40, kind: 'reflection' },
        { title: 'Aplazar', instruction: 'Dite con calma: «Esto lo veo más tarde». No discutas el pensamiento ni lo empujes. Solo déjalo para su horario.', durationSec: 45, kind: 'instruction' },
        { title: 'Volver', instruction: 'Lleva la atención a lo que tienes delante. Mira el lugar, nota tus manos, sigue con tu tarea.', durationSec: 45, kind: 'instruction' },
        { title: 'Si vuelve', instruction: 'Si el pensamiento vuelve, repite el aplazamiento. Cada vez que lo haces, practicas que puedes elegir.', durationSec: 40, kind: 'breath' },
        { title: 'Llevarlo al día', instruction: 'Hoy, cada vez que notes una preocupación, aplázala hasta tu horario. Cuando llegue, mira si todavía te importa.', durationSec: 40, kind: 'reflection' },
      ],
    },
    {
      id: 'mindfulness-desapegado',
      title: 'Mindfulness desapegado',
      family: 'deconstructive',
      skills: ['attention', 'resilience'],
      summary: 'Ver un pensamiento como un hecho de la mente que viene y va, sin hacer nada con él: ni seguirlo, ni pelear, ni analizarlo.',
      mechanism: 'Separarte del pensamiento y no responderle corta la cadena de preocupación o rumiación desde su inicio.',
      evidenceLevel: 'moderada',
      evidence: [WELLS_2005, WELLS_2009, NORMANN_2018],
      howItWorks: [
        'Wells llama «mindfulness desapegado» a dos cosas juntas. La primera es darte cuenta de que un pensamiento es solo un pensamiento. La segunda es no responderle: no seguirlo, no analizarlo y no intentar sacarlo de la mente.',
        'Se parece a la meditación, pero es más breve y no usa la respiración como ancla. Es una forma de mirar, que se aprende con ejemplos sencillos. Uno de los más conocidos es imaginar un tigre y ver qué hace solo, sin moverlo tú.',
        'Con la práctica, la persona descubre que el pensamiento se va por su cuenta si no se lo alimenta.',
      ],
      tips: [
        'Prueba primero con pensamientos neutros. Luego, con preocupaciones leves.',
        'La clave es no hacer nada: ni empujar, ni retener.',
        'Si te descubres analizando, eso también es un pensamiento. Déjalo pasar.',
      ],
      obstacles: [
        { q: 'No sé si lo estoy haciendo bien.', a: 'Esa duda también es un pensamiento. Puedes mirarla igual que los otros, sin responderle.' },
        { q: 'El pensamiento no se va.', a: 'No hace falta que se vaya. El objetivo es dejar de alimentarlo. Si sigue ahí, nota que puedes convivir con él un rato.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Siéntate con comodidad. Deja los ojos abiertos o cerrados, como prefieras.', durationSec: 30, kind: 'breath' },
        { title: 'El tigre', instruction: 'Imagina un tigre. No lo muevas tú. Solo observa qué hace la imagen por su cuenta. Quizá camina, quizá se desdibuja.', durationSec: 60, kind: 'silence' },
        { title: 'Las nubes', instruction: 'Ahora imagina que tus pensamientos son nubes. Pasan por el cielo. Tú no las empujas ni las retienes.', durationSec: 60, kind: 'silence' },
        { title: 'Un pensamiento real', instruction: 'Trae una preocupación leve. Nota el pensamiento tal cual, en palabras: «Estoy teniendo el pensamiento de que…».', durationSec: 60, kind: 'reflection' },
        { title: 'No responder', instruction: 'Ahora no hagas nada con él. No lo sigas, no lo analices, no lo saques. Deja que esté ahí, como una nube.', durationSec: 75, kind: 'silence' },
        { title: 'Notar qué pasa', instruction: '¿Qué hace el pensamiento cuando no lo alimentas? Quizá se queda, quizá cambia, quizá se aleja.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Vuelve al lugar donde estás. Recuerda que hoy puedes mirar así cualquier pensamiento que te enganche.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'entrenamiento-atencional',
      title: 'Entrenamiento atencional con sonidos',
      family: 'attentional',
      skills: ['attention'],
      summary: 'Versión en texto del entrenamiento atencional de Wells: elegir, cambiar y abrir la atención entre los sonidos del lugar donde estás.',
      mechanism: 'Mover la atención a voluntad la entrena para salir del foco interno en uno mismo y de la preocupación.',
      evidenceLevel: 'moderada',
      evidence: [WELLS_MATTHEWS_1994, WELLS_2009, KNOWLES_2016],
      howItWorks: [
        'Cuando estamos preocupados, la atención se queda pegada a nosotros mismos: a los pensamientos, al cuerpo, a lo que podría salir mal. Wells diseñó un entrenamiento para recuperar el control de la atención.',
        'La técnica original usa una grabación con varios sonidos. Aquí usas los sonidos reales que te rodean: una heladera, la calle, un reloj, pájaros. Si quieres, puedes poner una radio a bajo volumen como un sonido más.',
        'El ejercicio tiene tres partes: atención selectiva, cambio rápido y atención dividida. No es una relajación ni una forma de distraerte. Es un entrenamiento, como hacer pesas con la atención.',
      ],
      tips: [
        'Busca al menos tres sonidos distintos, cercanos y lejanos.',
        'Si aparecen pensamientos, déjalos estar y sigue con los sonidos. No hace falta echarlos.',
        'Practica cuando estés tranquilo, no en medio de una crisis.',
        'Al principio cuesta. El esfuerzo es parte del entrenamiento.',
      ],
      obstacles: [
        { q: 'Hay mucho silencio y no encuentro sonidos.', a: 'Abre una ventana, enciende un ventilador o pon música suave a bajo volumen. También cuentan tu respiración y el roce de la ropa.' },
        { q: 'Me relajo y me duermo.', a: 'Haz el ejercicio sentado y con los ojos abiertos, mirando un punto fijo. El objetivo es estar despierto y atento.' },
      ],
      steps: [
        { title: 'Prepararte', instruction: 'Siéntate con los ojos abiertos. Mira un punto fijo en la pared. Mantén la mirada ahí durante todo el ejercicio.', durationSec: 30, kind: 'instruction' },
        { title: 'Encontrar sonidos', instruction: 'Escucha y busca al menos tres sonidos. Ponles un nombre simple: la calle, el reloj, la heladera.', durationSec: 60, kind: 'instruction' },
        { title: 'Atención selectiva', instruction: 'Elige un sonido. Pon toda tu atención en él. Si otros sonidos o pensamientos aparecen, vuelve a ese sonido.', durationSec: 75, kind: 'instruction' },
        { title: 'Otro sonido', instruction: 'Ahora elige otro sonido, quizá uno más lejano. Quédate con él. Ignora el resto.', durationSec: 75, kind: 'instruction' },
        { title: 'Un tercer sonido', instruction: 'Pasa a un tercer sonido. Es posible que sea débil. Sigue atento a él, con esfuerzo.', durationSec: 60, kind: 'instruction' },
        { title: 'Cambio rápido', instruction: 'Ahora salta de un sonido a otro cada pocos segundos. Primero uno, luego otro, luego otro. Hazlo tú, a voluntad.', durationSec: 90, kind: 'instruction' },
        { title: 'Atención abierta', instruction: 'Por último, intenta oír todos los sonidos a la vez. Abre la atención lo más que puedas. Cuenta cuántos oyes juntos.', durationSec: 60, kind: 'instruction' },
        { title: 'Cerrar', instruction: 'Suelta el esfuerzo. Nota que puedes mover la atención aunque haya pensamientos. Esa es la habilidad que entrenaste.', durationSec: 30, kind: 'reflection' },
      ],
    },

    // ------------------------------------------------------------ terapia focalizada en la emoción
    {
      id: 'emocion-primaria-secundaria',
      title: 'Debajo de la emoción',
      family: 'deconstructive',
      skills: ['attention', 'compassion'],
      summary: 'Distinguir la emoción que aparece primero en la superficie de la emoción más honda que hay debajo, y de lo que esa emoción necesita.',
      mechanism: 'Nombrar la emoción primaria, y no solo la reacción de superficie, aclara qué necesitas y qué hacer con eso.',
      evidenceLevel: 'preliminar',
      evidence: [GREENBERG_2002, GREENBERG_2004, LIEBERMAN_2007],
      howItWorks: [
        'Leslie Greenberg, creador de la terapia focalizada en la emoción, distingue dos capas. La emoción primaria es la primera respuesta, la más directa, ante algo que pasa. La secundaria es una reacción a esa primera emoción o a un pensamiento.',
        'Un ejemplo: alguien no te llama. En la superficie sientes enojo. Debajo, quizá hay tristeza o miedo a no importar. El enojo es real, pero lo que más te dice qué necesitas es la tristeza.',
        'Poner en palabras lo que sientes ayuda a regularlo (Lieberman et al., 2007). Y llegar a la emoción de abajo suele traer alivio: por fin entiendes qué te pasa.',
      ],
      tips: [
        'Pregúntate: «¿Y debajo de esto, qué hay?».',
        'La emoción primaria suele sentirse más blanda y más vulnerable.',
        'No hay emociones equivocadas. Cada capa tiene algo que decirte.',
        'Usa la rueda de emociones de la app si te cuesta encontrar la palabra.',
      ],
      obstacles: [
        { q: 'Solo encuentro enojo.', a: 'A veces el enojo es la emoción primaria, por ejemplo ante una injusticia. Si es así, pregúntate qué límite necesita poner.' },
        { q: 'Me da miedo lo que pueda encontrar abajo.', a: 'Ve despacio y elige una situación leve. Si algo te desborda, para y usa una herramienta de calma.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Nota el apoyo del cuerpo.', durationSec: 30, kind: 'breath' },
        { title: 'Una situación', instruction: 'Recuerda una situación leve de estos días que te movió algo. Elige una que no sea muy dolorosa.', durationSec: 45, kind: 'reflection' },
        { title: 'La superficie', instruction: '¿Qué sentiste primero, lo que se vio por fuera? Puede ser enojo, fastidio o ganas de alejarte. Ponle un nombre.', durationSec: 60, kind: 'reflection' },
        { title: 'El cuerpo', instruction: '¿Dónde lo sientes en el cuerpo? Quizá en el pecho, en la garganta o en la panza. Quédate un momento ahí.', durationSec: 45, kind: 'silence' },
        { title: 'Debajo', instruction: 'Pregúntate con suavidad: «¿Y debajo de esto, qué hay?». Quizá tristeza, miedo, vergüenza o soledad.', durationSec: 75, kind: 'reflection' },
        { title: 'Lo que necesita', instruction: 'Si esa emoción de abajo pudiera pedir algo, ¿qué pediría? Quizá consuelo, cercanía, respeto o un límite.', durationSec: 60, kind: 'reflection' },
        { title: 'Un gesto', instruction: 'Piensa en un gesto pequeño para darte eso, o para pedirlo a alguien de confianza.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho y agradece a la emoción por avisarte. Respira y vuelve al día.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'transformar-emocion',
      title: 'Una emoción que cuida a otra',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Versión escrita y suave de una idea de Greenberg: responder a una emoción dolorosa con otra emoción que la cuida, como la compasión o el enojo sano.',
      mechanism: 'Una emoción adaptativa, como la compasión o el enojo que protege, transforma el dolor mejor que intentar razonarlo.',
      evidenceLevel: 'preliminar',
      evidence: [GREENBERG_2002, PASCUAL_LEONE_2007, GREENBERG_PAIVIO_1997],
      cautions:
        'Esta práctica toca emociones dolorosas. Elige una situación leve o moderada, no un trauma ni una pérdida reciente. Si aparece una angustia muy fuerte, para y busca ayuda profesional. Lo más hondo se trabaja mejor con un terapeuta.',
      howItWorks: [
        'Greenberg sostiene que una emoción no se cambia solo con razones. Se cambia con otra emoción. Esto se conoce como «transformar emoción con emoción».',
        'El camino suele ser así. Primero llegas a una emoción dolorosa de fondo, como la vergüenza o el sentirte solo. Luego notas la necesidad que no fue atendida. Al sentir que esa necesidad es legítima, aparece una emoción nueva: compasión por ti, o un enojo sano que dice «esto no estuvo bien».',
        'En terapia esto se trabaja a veces con sillas y diálogos en voz alta. Aquí usamos una versión más suave: una carta breve, escrita a tu propio ritmo (Pascual-Leone y Greenberg, 2007).',
      ],
      tips: [
        'Escribe a mano o en el diario de la app. Lo importante es poner en palabras.',
        'No hace falta escribir bien ni mucho. Bastan unas líneas.',
        'Si te cuesta sentir compasión por ti, imagina que hablas con alguien querido que pasó lo mismo.',
        'Guarda la carta. Puedes releerla otro día.',
      ],
      obstacles: [
        { q: 'No siento ninguna emoción nueva.', a: 'Está bien. A veces aparece más tarde, o al releer la carta. Basta con haber nombrado la necesidad.' },
        { q: 'Me enojo mucho conmigo.', a: 'Esa voz crítica es frecuente. Prueba a escribir desde una persona sabia y amable que te conoce bien.' },
      ],
      steps: [
        { title: 'Llegar seguro', instruction: 'Siéntate en un lugar tranquilo. Ten papel o el diario a mano. Respira despacio tres veces.', durationSec: 40, kind: 'breath' },
        { title: 'Elegir algo leve', instruction: 'Elige una situación que todavía te pesa, pero que no te desborda. Recuérdala por un momento.', durationSec: 45, kind: 'reflection' },
        { title: 'La emoción de fondo', instruction: 'Nota la emoción dolorosa que hay en el fondo. Quizá tristeza, vergüenza o soledad. Escribe su nombre.', durationSec: 60, kind: 'reflection' },
        { title: 'La necesidad', instruction: 'Escribe qué necesitabas en ese momento y no tuviste. Por ejemplo: «Necesitaba que me escucharan».', durationSec: 75, kind: 'reflection' },
        { title: 'Es legítima', instruction: 'Lee lo que escribiste. Nota que esa necesidad es humana y válida. Cualquier persona la tendría.', durationSec: 45, kind: 'silence' },
        { title: 'La emoción que cuida', instruction: 'Deja que aparezca otra emoción. Puede ser ternura por ti, o un enojo sano que dice: «Merecía otra cosa».', durationSec: 60, kind: 'silence' },
        { title: 'La carta', instruction: 'Desde esa emoción nueva, escríbete unas líneas. Háblale a la parte que sufrió, como le hablarías a alguien querido.', durationSec: 120, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira y vuelve al lugar. Nota los pies en el piso y lo que ves alrededor. Guarda la carta.', durationSec: 40, kind: 'breath' },
      ],
    },

    // ------------------------------------------------------------ terapia interpersonal
    {
      id: 'inventario-interpersonal',
      title: 'Inventario de mis vínculos',
      family: 'deconstructive',
      skills: ['attention', 'compassion'],
      summary: 'Repasar las personas importantes de tu vida y ver si tu ánimo se relaciona con una de cuatro áreas: un cambio de rol, un conflicto, un duelo o la soledad.',
      mechanism: 'Ver qué área de tus relaciones pesa más ayuda a elegir un foco concreto para mejorar el ánimo.',
      evidenceLevel: 'moderada',
      evidence: [KLERMAN_1984, WEISSMAN_2000, CUIJPERS_2016],
      howItWorks: [
        'La terapia interpersonal nació para tratar la depresión. Sus creadores, Gerald Klerman y Myrna Weissman, partieron de una idea simple: el ánimo y los vínculos se afectan entre sí.',
        'Al comienzo de la terapia se hace un «inventario interpersonal». Se repasan las personas importantes y lo que pasa con cada una. Luego se busca el área que más se relaciona con el malestar actual.',
        'Las áreas clásicas son cuatro: las transiciones de rol, como una mudanza o una jubilación; las disputas o conflictos con alguien; el duelo por una muerte; y el aislamiento o la soledad. Esta práctica es una versión breve y personal de ese repaso.',
      ],
      tips: [
        'Incluye personas cercanas y también lejanas, de ahora y de antes.',
        'No busques culpables. Busca qué está pasando.',
        'Si ves que un área pesa mucho, puede ser un buen tema para hablar con un profesional.',
      ],
      obstacles: [
        { q: 'Siento que todas las áreas me tocan.', a: 'Pasa mucho. Elige la que más se relaciona con cómo te sientes hoy. Las demás pueden esperar.' },
        { q: 'Tengo muy pocas personas para anotar.', a: 'Eso también es información valiosa. Puede que el área de la soledad sea tu foco, y eso tiene caminos.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Ten a mano papel o el diario para anotar.', durationSec: 30, kind: 'breath' },
        { title: 'Las personas', instruction: 'Anota los nombres de las personas más importantes de tu vida hoy. Familia, amigos, pareja, trabajo.', durationSec: 75, kind: 'reflection' },
        { title: 'Cómo es cada vínculo', instruction: 'Junto a cada nombre, anota en pocas palabras: qué te da, qué te cuesta y si cambió algo últimamente.', durationSec: 90, kind: 'reflection' },
        { title: 'Un cambio de rol', instruction: '¿Estás viviendo un cambio de rol? Por ejemplo una mudanza, un trabajo nuevo, una separación o ser madre o padre.', durationSec: 45, kind: 'reflection' },
        { title: 'Un conflicto', instruction: '¿Hay un desacuerdo con alguien que se repite o que no se habla? Anota con quién y sobre qué.', durationSec: 45, kind: 'reflection' },
        { title: 'Una pérdida o soledad', instruction: '¿Hay una pérdida que todavía duele? ¿O sientes que te faltan vínculos cercanos? Anótalo sin juzgarte.', durationSec: 45, kind: 'reflection' },
        { title: 'Elegir un foco', instruction: '¿Cuál de estas áreas se relaciona más con tu ánimo de estas semanas? Elige una sola.', durationSec: 45, kind: 'reflection' },
        { title: 'Un paso', instruction: 'Piensa un paso pequeño para esa área. Por ejemplo, llamar a alguien, hablar de un tema o pedir ayuda.', durationSec: 45, kind: 'reflection' },
      ],
    },

    // ------------------------------------------------------------ mentalización
    {
      id: 'pausar-y-rebobinar',
      title: 'Pausar y rebobinar',
      family: 'deconstructive',
      skills: ['attention', 'compassion'],
      summary: 'Volver a una discusión o malentendido como si fuera una película: pausar el momento en que algo cambió y preguntarte, con curiosidad, qué pasaba en tu mente y en la del otro.',
      mechanism: 'Mirar con curiosidad lo que sentían y pensaban las dos personas recupera la capacidad de entender mentes, que se pierde con la emoción intensa.',
      evidenceLevel: 'preliminar',
      evidence: [BATEMAN_2016, ALLEN_2008, FONAGY_2002],
      howItWorks: [
        'Mentalizar es entender lo que hacemos y lo que hacen otros a partir de estados mentales: deseos, emociones, creencias, intenciones. Lo hacemos todo el tiempo, sin darnos cuenta.',
        'Peter Fonagy y Anthony Bateman observaron que, con emociones fuertes, esa capacidad se apaga. Aparece el «modo no mentalizante»: creemos saber con certeza qué piensa el otro, o solo vemos lo que hizo y no por qué.',
        'En su tratamiento usan una técnica llamada «pausar y rebobinar». Se vuelve al momento justo antes de que la conversación se torciera. Desde ahí se pregunta con curiosidad: ¿qué sentía yo?, ¿qué pudo sentir el otro? No se busca tener razón, sino entender.',
      ],
      tips: [
        'Hazlo cuando ya estés más tranquilo, no en medio de la discusión.',
        'Usa palabras de duda: «quizá», «puede ser», «me pregunto si».',
        'Si sientes certeza total sobre lo que pensaba el otro, es una señal para frenar.',
        'Con alguien de confianza, pueden hacerlo juntos: «¿Rebobinamos un momento?».',
      ],
      obstacles: [
        { q: 'Estoy seguro de que lo hizo a propósito.', a: 'Puede ser. Pero la certeza total suele ser una señal del modo no mentalizante. Prueba a imaginar dos o tres explicaciones posibles.' },
        { q: 'Si entiendo al otro, siento que le doy la razón.', a: 'Entender no es justificar. Puedes comprender qué le pasaba y, a la vez, poner un límite claro.' },
      ],
      steps: [
        { title: 'Elegir una escena', instruction: 'Recuerda una discusión o malentendido reciente y leve. Elige uno que ya no te altere demasiado.', durationSec: 45, kind: 'reflection' },
        { title: 'Ver la película', instruction: 'Repasa la escena como si la vieras en una pantalla. Quién dijo qué, y cómo.', durationSec: 60, kind: 'reflection' },
        { title: 'Pausar', instruction: 'Busca el momento justo en que algo cambió: un tono, un gesto, una frase. Pon pausa ahí.', durationSec: 45, kind: 'reflection' },
        { title: 'Mi mente', instruction: 'En ese momento, ¿qué sentías? ¿Qué pensaste que quería decir el otro? Nómbralo con calma.', durationSec: 60, kind: 'reflection' },
        { title: 'La otra mente', instruction: 'Ahora, con curiosidad: ¿qué pudo sentir o pensar la otra persona? Imagina al menos dos posibilidades.', durationSec: 75, kind: 'reflection' },
        { title: 'Notar la certeza', instruction: '¿Estabas muy seguro de lo que el otro pensaba? Nota si eso te cerró a otras posibilidades.', durationSec: 45, kind: 'reflection' },
        { title: 'Rebobinar', instruction: 'Imagina volver a ese momento con más curiosidad. ¿Qué podrías preguntar o decir distinto? Por ejemplo: «¿Qué quisiste decir?».', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira. Nota que las mentes no se ven desde afuera. La curiosidad es la mejor forma de acercarse.', durationSec: 30, kind: 'breath' },
      ],
    },
  ],

  // ============================================================ fichas
  meta: {
    'aplazar-preocupacion': { level: 'iniciacion', approaches: ['metacognitiva'], module: 'pensamientos' },
    'mindfulness-desapegado': { level: 'intermedio', approaches: ['metacognitiva', 'mindfulness'], module: 'pensamientos', prerequisites: ['aplazar-preocupacion'] },
    'entrenamiento-atencional': { level: 'intermedio', approaches: ['metacognitiva'], module: 'pensamientos', prerequisites: ['atencion-sonidos'] },
    'emocion-primaria-secundaria': { level: 'iniciacion', approaches: ['focalizada-emocion'], module: 'emociones' },
    'transformar-emocion': {
      level: 'intermedio',
      approaches: ['focalizada-emocion', 'escritura'],
      module: 'emociones',
      prerequisites: ['emocion-primaria-secundaria', 'pausa-autocompasion'],
    },
    'inventario-interpersonal': { level: 'iniciacion', approaches: ['interpersonal'], module: 'relaciones' },
    'pausar-y-rebobinar': { level: 'intermedio', approaches: ['mentalizacion'], module: 'relaciones' },
  },

  // ============================================================ artículos
  articles: [
    {
      id: 'terapia-metacognitiva',
      title: 'Terapia metacognitiva: salir del bucle',
      subtitle: 'La propuesta de Adrian Wells: el problema no son los pensamientos negativos, sino quedarse enganchado a ellos.',
      category: 'Terapias breves e integrativas',
      readingMin: 6,
      keyPoints: [
        'Todos tenemos pensamientos negativos. Lo que mantiene el malestar es darles vueltas mucho tiempo.',
        'Wells llama «síndrome cognitivo-atencional» a ese patrón: preocupación, rumiación, vigilancia de amenazas y estrategias que salen mal.',
        'Lo sostienen creencias sobre el propio pensar, como «no puedo parar de preocuparme» o «preocuparme me prepara».',
        'Las técnicas centrales son aplazar la preocupación, el mindfulness desapegado y el entrenamiento atencional.',
      ],
      sections: [
        {
          heading: 'Pensar sobre el pensar',
          paragraphs: [
            'La metacognición es lo que sabemos y creemos sobre nuestra propia mente. Por ejemplo, creer que un pensamiento es peligroso, o que preocuparse sirve para algo. Adrian Wells, psicólogo británico, propuso que estas creencias son clave en la ansiedad y la depresión.',
            'La terapia metacognitiva no discute si un pensamiento es verdadero o falso, como hace la terapia cognitiva clásica. Trabaja sobre cómo te relacionas con él: cuánto tiempo le dedicas y qué haces cuando aparece.',
          ],
        },
        {
          heading: 'El síndrome cognitivo-atencional',
          paragraphs: [
            'Wells describió un patrón que aparece en muchos problemas emocionales. Lo llamó síndrome cognitivo-atencional. Tiene tres partes: pensar en bucle, ya sea preocupación sobre el futuro o rumiación sobre el pasado; vigilar amenazas todo el tiempo; y usar estrategias que empeoran las cosas, como suprimir pensamientos o buscar tranquilidad sin parar.',
            'Este patrón se mantiene por dos tipos de creencias. Unas son positivas: «preocuparme me ayuda a estar preparado». Otras son negativas: «no puedo controlar mi preocupación» o «me voy a volver loco». La terapia pone a prueba ambas.',
          ],
        },
        {
          heading: 'Tres técnicas',
          paragraphs: [
            'Aplazar la preocupación: cuando aparece, la dejas para un horario fijo y vuelves a lo que hacías. Así compruebas que puedes controlarla. El mindfulness desapegado: ves el pensamiento como un hecho de la mente y no le respondes. Ni lo sigues ni lo peleas.',
            'El entrenamiento atencional: un ejercicio con sonidos para aprender a mover la atención a voluntad. Ayuda a salir del foco interno en uno mismo. En la app tienes una versión en texto que usa los sonidos de tu entorno.',
          ],
        },
        {
          heading: 'Lo que dice la evidencia',
          paragraphs: [
            'Un metaanálisis encontró que la terapia metacognitiva es eficaz para la ansiedad y la depresión, con efectos grandes en estudios todavía pequeños (Normann y Morina, 2018). El entrenamiento atencional también mostró resultados prometedores en una revisión sistemática (Knowles et al., 2016).',
            'Las técnicas sueltas, usadas por tu cuenta, no reemplazan una terapia completa. Si la preocupación o la rumiación te ocupan gran parte del día, consulta a un profesional.',
          ],
        },
      ],
      diagram: {
        title: 'El bucle de la preocupación',
        nodes: ['Aparece un pensamiento', 'Le doy vueltas', 'Vigilo amenazas', 'Crece el malestar', 'Creo que no puedo parar'],
        caption: 'La terapia metacognitiva corta el bucle al principio: el pensamiento aparece, pero no lo sigues.',
      },
      related: {
        practices: ['aplazar-preocupacion', 'mindfulness-desapegado', 'entrenamiento-atencional', 'pajaros-en-el-cielo'],
        articles: ['rumiacion', 'preocupacion-y-ansiedad', 'flexibilidad-psicologica'],
      },
      references: [WELLS_2009, WELLS_MATTHEWS_1994, WELLS_2005, NORMANN_2018, KNOWLES_2016, BORKOVEC_1983],
    },
    {
      id: 'terapia-focalizada-emocion',
      title: 'Terapia focalizada en la emoción',
      subtitle: 'Leslie Greenberg propone escuchar a las emociones, distinguir sus capas y cambiar una emoción con otra.',
      category: 'Terapias breves e integrativas',
      readingMin: 6,
      keyPoints: [
        'Las emociones nos informan sobre lo que necesitamos. No son enemigas a controlar.',
        'Conviene distinguir la emoción primaria, la primera y más directa, de la secundaria, que es una reacción a otra emoción.',
        'Una emoción dolorosa se transforma mejor con otra emoción, como la compasión o el enojo sano, que solo con razones.',
        'Las técnicas más intensas se usan en terapia. Aquí proponemos versiones suaves por escrito.',
      ],
      sections: [
        {
          heading: 'Las emociones como guía',
          paragraphs: [
            'Leslie Greenberg es un psicólogo nacido en Sudáfrica que trabajó en Canadá. Creó la terapia focalizada en la emoción a partir de la tradición humanista y de la investigación sobre emociones.',
            'Su idea central es que las emociones tienen sentido. Nos dicen qué nos importa y qué necesitamos. El miedo pide protección, la tristeza pide consuelo, el enojo pide un límite. Cuando las evitamos, perdemos esa información.',
          ],
        },
        {
          heading: 'Primarias y secundarias',
          paragraphs: [
            'La emoción primaria es la primera respuesta ante algo que pasa. La secundaria aparece como reacción a la primera o a un pensamiento. Por ejemplo, alguien siente vergüenza al llorar, o se enoja para no sentir miedo.',
            'Greenberg también distingue entre emociones primarias adaptativas, que nos orientan bien, y desadaptativas. Estas últimas son viejas heridas que se activan de nuevo, como sentirse sin valor. No se trata de seguirlas, sino de llegar a ellas para poder cambiarlas.',
          ],
        },
        {
          heading: 'Cambiar una emoción con otra',
          paragraphs: [
            'Una frase clave de este enfoque es «transformar emoción con emoción». Primero se llega a la emoción dolorosa de fondo. Luego se nota la necesidad que no fue atendida. Al sentir que esa necesidad es legítima, aparece algo nuevo: compasión por uno mismo, o un enojo sano que protege.',
            'Un estudio de Pascual-Leone y Greenberg (2007) mostró que las personas que mejoraban pasaban por esas etapas, de la angustia general a la aceptación y el alivio. En terapia esto se trabaja a veces con sillas y diálogos intensos. En esta app usamos versiones escritas y más suaves.',
          ],
        },
        {
          heading: 'Lo que dice la evidencia',
          paragraphs: [
            'La terapia focalizada en la emoción tiene buenos resultados en depresión y en problemas de pareja, con ensayos controlados (Elliott et al., 2013). Las técnicas autoguiadas tienen menos estudios.',
            'Si al explorar una emoción aparece algo muy doloroso, como un trauma, conviene trabajarlo con un terapeuta y no a solas.',
          ],
        },
      ],
      caveat: {
        title: 'Sobre la silla vacía',
        body: 'La silla vacía es una técnica potente, pero puede remover mucho. Por eso aquí preferimos la carta o el diálogo escrito, que te dejan ir a tu ritmo y parar cuando quieras.',
      },
      related: {
        practices: ['emocion-primaria-secundaria', 'transformar-emocion', 'pausa-autocompasion', 'escucharme-sin-juzgar'],
        articles: ['granularidad-emocional', 'antidotos-y-regulacion', 'psicologia-humanista'],
      },
      references: [
        GREENBERG_2002,
        GREENBERG_2004,
        GREENBERG_PAIVIO_1997,
        PASCUAL_LEONE_2007,
        {
          citation:
            'Elliott, R., Greenberg, L. S., Watson, J., Timulak, L., & Freire, E. (2013). Research on humanistic-experiential psychotherapies. En M. J. Lambert (Ed.), Bergin and Garfield’s handbook of psychotherapy and behavior change (6.ª ed., pp. 495–538). Wiley.',
        },
        LIEBERMAN_2007,
      ],
    },
    {
      id: 'terapia-interpersonal',
      title: 'Terapia interpersonal: el ánimo y los vínculos',
      subtitle: 'Klerman y Weissman: cuatro áreas de la vida con otros que pueden afectar el ánimo, y cómo trabajarlas.',
      category: 'Terapias breves e integrativas',
      readingMin: 6,
      keyPoints: [
        'El ánimo y las relaciones se afectan entre sí: un problema en los vínculos puede bajar el ánimo, y el desánimo daña los vínculos.',
        'La terapia interpersonal trabaja sobre cuatro áreas: transiciones de rol, disputas, duelo y aislamiento.',
        'Empieza con un inventario de las personas importantes y elige un área como foco.',
        'Es una terapia breve, de unas 12 a 16 sesiones, con mucho respaldo en depresión.',
      ],
      sections: [
        {
          heading: 'Una terapia breve y concreta',
          paragraphs: [
            'La terapia interpersonal, o TIP, fue creada en los años setenta por Gerald Klerman, Myrna Weissman y su equipo. Nació para tratar la depresión. No busca causas en la infancia, sino en lo que pasa hoy con las personas que te rodean.',
            'Se basa en una idea sencilla: no vivimos solos. Cuando una relación importante cambia, se rompe o se tensa, el ánimo lo siente. Y cuando el ánimo baja, cuesta cuidar los vínculos.',
          ],
        },
        {
          heading: 'Las cuatro áreas',
          paragraphs: [
            'Transición de rol: un cambio que obliga a dejar un lugar conocido y adaptarse a uno nuevo. Por ejemplo, una mudanza, una jubilación, un divorcio o tener un hijo. Disputa: un conflicto con alguien importante, que se repite o queda sin hablar.',
            'Duelo: la muerte de alguien querido, cuando el dolor se queda trabado. Déficits o aislamiento: pocas relaciones cercanas o dificultad para sostenerlas. En la terapia se elige una o dos áreas como foco.',
          ],
        },
        {
          heading: 'Cómo se trabaja',
          paragraphs: [
            'Al principio se hace un inventario interpersonal: se repasan las personas importantes y lo que pasa con cada una. Luego se trabaja el área elegida. En una transición se hace el duelo por el rol viejo y se buscan apoyos para el nuevo. En una disputa se entiende qué espera cada uno y se ensayan nuevas formas de hablar.',
            'También se entrena la comunicación y se analizan conversaciones concretas. Muchas habilidades de esta app, como pedir algo de forma clara, se pueden usar en este trabajo.',
          ],
        },
        {
          heading: 'Lo que dice la evidencia',
          paragraphs: [
            'Un gran metaanálisis mostró que la TIP es eficaz para tratar y prevenir la depresión, y útil en otros problemas (Cuijpers et al., 2016). Está incluida en guías clínicas de varios países.',
            'El inventario de esta app es una ayuda para pensar, no una terapia. Si tu ánimo está bajo hace semanas, consulta a un profesional.',
          ],
        },
      ],
      related: {
        practices: ['inventario-interpersonal', 'dear-man', 'give-fast', 'pausar-y-rebobinar'],
        articles: ['vinculos-y-soledad', 'duelo', 'asertividad-y-limites'],
      },
      references: [KLERMAN_1984, WEISSMAN_2000, CUIJPERS_2016],
    },
    {
      id: 'mentalizar-en-la-vida-diaria',
      title: 'Mentalizar: entender mentes',
      subtitle: 'Fonagy y Bateman: la capacidad de ver lo que pasa por dentro de ti y de los otros, y por qué se apaga cuando más la necesitas.',
      category: 'Terapias breves e integrativas',
      readingMin: 6,
      keyPoints: [
        'Mentalizar es entender la conducta, propia y ajena, a partir de emociones, deseos e intenciones.',
        'Con emociones intensas esa capacidad se apaga y aparece el modo no mentalizante.',
        'Una señal del modo no mentalizante es la certeza total sobre lo que piensa el otro.',
        'La postura que ayuda es la curiosidad: «no sé, quiero entender».',
      ],
      sections: [
        {
          heading: 'Qué es mentalizar',
          paragraphs: [
            'Mentalizar es darse cuenta de que detrás de cada conducta hay una mente. Cuando alguien llega tarde, puedes pensar que no le importas. O puedes preguntarte qué le pasó. Lo segundo es mentalizar.',
            'Peter Fonagy y Anthony Bateman, psicoanalistas británicos, estudiaron esta capacidad. Vieron que se aprende en la infancia, cuando alguien cercano nos ayuda a entender lo que sentimos. Y que todos la perdemos a veces.',
          ],
        },
        {
          heading: 'Cuando se apaga',
          paragraphs: [
            'Con estrés o con emociones intensas, la mente se simplifica. Aparece el modo no mentalizante. A veces sentimos que lo que pensamos es la realidad: «sé que me odia». Otras veces solo miramos los hechos: «no me contestó, entonces no le importo».',
            'También puede pasar lo contrario: hablar y hablar de emociones sin conectar con ellas. En todos los casos se pierde la curiosidad por lo que de verdad pasa por dentro.',
          ],
        },
        {
          heading: 'La postura de curiosidad',
          paragraphs: [
            'Bateman y Fonagy proponen una actitud de «no saber». No suponer que ya sabemos qué piensa el otro, ni siquiera qué pensamos nosotros. Preguntar, dudar, mirar varias explicaciones.',
            'Una técnica útil es «pausar y rebobinar»: volver al momento justo en que una conversación se torció y explorar qué pasaba en cada mente. Sirve con otros y también a solas, al repasar una discusión.',
          ],
        },
        {
          heading: 'Lo que dice la evidencia',
          paragraphs: [
            'El tratamiento basado en la mentalización mostró buenos resultados en el trastorno límite de la personalidad, en ensayos controlados (Bateman y Fonagy, 2009). Hoy se usa también con familias, adolescentes y otros problemas.',
            'Las prácticas de esta app son ejercicios de la vida diaria, no un tratamiento. Si tus vínculos te generan mucho sufrimiento, busca ayuda profesional.',
          ],
        },
      ],
      related: {
        practices: ['pausar-y-rebobinar', 'inventario-interpersonal', 'comprobar-hechos', 'give-fast'],
        articles: ['terapia-interpersonal', 'vinculos-y-soledad', 'autoconocimiento'],
      },
      references: [BATEMAN_2016, ALLEN_2008, FONAGY_2002, BATEMAN_2009],
    },
  ],

  // ============================================================ programas
  programs: [
    {
      id: 'mente-y-vinculos',
      title: 'Mente y vínculos',
      subtitle: 'Cuatro semanas para salir del bucle y entenderte mejor con otros',
      description:
        'Un recorrido por cuatro terapias actuales. Aprenderás a soltar la preocupación, a escuchar lo que hay debajo de tus emociones, a mirar tus vínculos y a entender mejor lo que pasa en otras mentes.',
      basis: 'Wells (2009); Greenberg (2002); Weissman, Markowitz y Klerman (2000); Bateman y Fonagy (2016).',
      rhythm: '10–15 minutos al día, 5 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Salir del bucle',
          focus: 'Notar la preocupación y no seguirla',
          description: 'Aprenderás a aplazar la preocupación y la rumiación, y a mover la atención a voluntad.',
          practiceIds: ['aplazar-preocupacion', 'entrenamiento-atencional', 'mindfulness-desapegado'],
          articleIds: ['terapia-metacognitiva', 'rumiacion'],
          journalType: 'preocupacion',
        },
        {
          title: 'Semana 2 · Debajo de la emoción',
          focus: 'Escuchar lo que tus emociones necesitan',
          description: 'Distinguirás las capas de una emoción y probarás a cuidar una emoción dolorosa con otra más amable.',
          practiceIds: ['emocion-primaria-secundaria', 'pausa-autocompasion', 'transformar-emocion'],
          articleIds: ['terapia-focalizada-emocion'],
          journalType: 'carta-compasiva',
        },
        {
          title: 'Semana 3 · Mis vínculos',
          focus: 'Ver qué área de tus relaciones pesa más',
          description: 'Harás un inventario de tus vínculos, elegirás un foco y practicarás pedir lo que necesitas.',
          practiceIds: ['inventario-interpersonal', 'dear-man'],
          articleIds: ['terapia-interpersonal'],
          journalType: 'mis-roles',
        },
        {
          title: 'Semana 4 · Otras mentes',
          focus: 'Curiosidad en lugar de certeza',
          description: 'Repasarás malentendidos con curiosidad y practicarás conversaciones más cuidadosas.',
          practiceIds: ['pausar-y-rebobinar', 'give-fast'],
          articleIds: ['mentalizar-en-la-vida-diaria'],
          journalType: 'conversacion',
        },
      ],
    },
  ],

  // ============================================================ píldoras
  pills: [
    {
      id: 'preocuparse-tiene-horario',
      title: 'La preocupación puede esperar',
      subtitle: 'Darle un horario a la preocupación te devuelve el control.',
      slides: [
        { heading: 'No es el pensamiento', text: 'Todos tenemos pensamientos negativos. El problema es darles vueltas durante horas. Eso es lo que más cansa.' },
        { heading: 'Dos creencias', text: 'Muchos creen que no pueden parar de preocuparse. Otros creen que preocuparse los protege. Las dos ideas mantienen el bucle.' },
        { heading: 'Un horario', text: 'Elige quince minutos al día para tus preocupaciones. Cuando aparezca una antes, dile: «Esto lo veo más tarde».' },
        { heading: 'Volver', text: 'Después de aplazarla, vuelve a lo que hacías. No hace falta que el pensamiento se vaya. Solo no lo sigas.' },
        { heading: 'Lo que aprendes', text: 'Cada vez que la aplazas, ves que puedes elegir. A la hora fijada, muchas veces ya no te importa tanto.' },
      ],
      related: { practices: ['aplazar-preocupacion', 'mindfulness-desapegado'], articles: ['terapia-metacognitiva'] },
      references: [WELLS_2009, BORKOVEC_1983],
    },
    {
      id: 'capas-de-la-emocion',
      title: 'Lo que hay debajo',
      subtitle: 'Muchas veces la emoción que se ve no es la que más importa.',
      slides: [
        { heading: 'Dos capas', text: 'A veces sientes enojo, pero debajo hay tristeza. O sientes vergüenza por tener miedo. Las emociones vienen en capas.' },
        { heading: 'La primera', text: 'La emoción primaria es la primera respuesta a lo que pasa. Suele ser más blanda. Te dice qué necesitas.' },
        { heading: 'La de arriba', text: 'La secundaria es una reacción a la primera. Es real, pero a veces tapa lo que más importa.' },
        { heading: 'Una pregunta', text: 'Cuando algo te mueve, pregúntate: «¿Y debajo de esto, qué hay?». Dale tiempo a la respuesta.' },
        { heading: 'Lo que pide', text: 'La tristeza pide consuelo. El miedo pide cuidado. El enojo sano pide un límite. Escuchar eso te orienta.' },
      ],
      related: { practices: ['emocion-primaria-secundaria', 'transformar-emocion'], articles: ['terapia-focalizada-emocion'] },
      references: [GREENBERG_2002, LIEBERMAN_2007],
    },
    {
      id: 'cuatro-areas-interpersonales',
      title: 'Tu ánimo y tus vínculos',
      subtitle: 'Cuatro áreas de la vida con otros que pueden bajar el ánimo.',
      slides: [
        { heading: 'No vivimos solos', text: 'El ánimo y las relaciones van juntos. Si un vínculo se tensa, el ánimo lo siente. Y al revés.' },
        { heading: 'Un cambio de rol', text: 'Una mudanza, un trabajo nuevo, un hijo o una separación. Dejar un lugar conocido cuesta, aunque el cambio sea bueno.' },
        { heading: 'Un conflicto', text: 'Una pelea que se repite o un tema que no se habla. Pesa más de lo que parece.' },
        { heading: 'Pérdida y soledad', text: 'Un duelo que sigue trabado, o la falta de vínculos cercanos. Las dos cosas bajan el ánimo y tienen caminos.' },
        { heading: 'Elegir un foco', text: 'Mira cuál de las cuatro áreas pesa más hoy. Elige una y piensa un paso pequeño. Si el ánimo sigue bajo, consulta a un profesional.' },
      ],
      related: { practices: ['inventario-interpersonal', 'dear-man'], articles: ['terapia-interpersonal'] },
      references: [WEISSMAN_2000, CUIJPERS_2016],
    },
    {
      id: 'curiosidad-por-las-mentes',
      title: 'Nadie lee mentes',
      subtitle: 'La certeza sobre lo que piensa el otro suele ser una trampa.',
      slides: [
        { heading: 'Detrás de cada acto', text: 'Detrás de lo que alguien hace hay una mente: deseos, miedos, planes. No la vemos. Solo podemos imaginarla.' },
        { heading: 'Cuando se apaga', text: 'Con mucha emoción, dejamos de imaginar. Creemos saber qué piensa el otro: «Lo hizo para molestarme».' },
        { heading: 'Una señal', text: 'Si sientes certeza total sobre la mente del otro, frena. Es una señal de que tu emoción está al mando.' },
        { heading: 'Pausar', text: 'Vuelve al momento en que la charla se torció. Pregúntate qué sentías tú. Y qué pudo sentir el otro.' },
        { heading: 'Preguntar', text: 'La curiosidad acerca. Prueba con: «¿Qué quisiste decir?». Entender no es darle la razón.' },
      ],
      related: { practices: ['pausar-y-rebobinar'], articles: ['mentalizar-en-la-vida-diaria'] },
      references: [BATEMAN_2016, ALLEN_2008],
    },
  ],

  // ============================================================ glosario
  glossary: [
    {
      id: 'sindrome-cognitivo-atencional',
      term: 'Síndrome cognitivo-atencional',
      definition: 'Patrón descrito por Adrian Wells: pensar en bucle, vigilar amenazas y usar estrategias que empeoran el malestar. Se mantiene por creencias sobre el propio pensar.',
      articleId: 'terapia-metacognitiva',
      practiceId: 'aplazar-preocupacion',
    },
    {
      id: 'metacognicion',
      term: 'Metacognición',
      definition: 'Lo que sabemos y creemos sobre nuestra propia mente. Por ejemplo, creer que la preocupación no se puede controlar o que sirve para protegernos.',
      articleId: 'terapia-metacognitiva',
      practiceId: 'mindfulness-desapegado',
    },
    {
      id: 'emocion-primaria',
      term: 'Emoción primaria',
      definition: 'La primera respuesta emocional ante algo que pasa. Se distingue de la secundaria, que es una reacción a otra emoción o a un pensamiento.',
      articleId: 'terapia-focalizada-emocion',
      practiceId: 'emocion-primaria-secundaria',
    },
    {
      id: 'areas-interpersonales',
      term: 'Áreas interpersonales',
      definition: 'Las cuatro áreas que trabaja la terapia interpersonal: transiciones de rol, disputas, duelo y aislamiento. Se elige una como foco.',
      articleId: 'terapia-interpersonal',
      practiceId: 'inventario-interpersonal',
    },
    {
      id: 'mentalizar',
      term: 'Mentalizar',
      definition: 'Entender la conducta propia y ajena a partir de lo que pasa por dentro: emociones, deseos e intenciones. Con emociones intensas, esta capacidad se apaga.',
      articleId: 'mentalizar-en-la-vida-diaria',
      practiceId: 'pausar-y-rebobinar',
    },
    {
      id: 'modo-no-mentalizante',
      term: 'Modo no mentalizante',
      definition: 'Estado en que dejamos de imaginar la mente del otro. Aparece como certeza total sobre lo que piensa, o como mirar solo los hechos sin preguntarse por qué.',
      articleId: 'mentalizar-en-la-vida-diaria',
      practiceId: 'pausar-y-rebobinar',
    },
  ],
};
