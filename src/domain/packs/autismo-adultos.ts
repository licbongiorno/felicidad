import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Autismo en adultos», con enfoque neuroafirmativo:
 *  - qué es el autismo y cómo se ve en la adultez (Lai, Lombardo y Baron-Cohen, 2014);
 *  - el lenguaje que prefieren muchas personas autistas (Kenny y colaboradores, 2016);
 *  - diagnóstico en la adultez: alivio y duelo; el diagnóstico lo hace un profesional (NICE, 2012);
 *  - intereses intensos como recurso (Grove y colaboradores, 2018);
 *  - camuflaje o «masking» y su costo (Hull y colaboradores, 2017);
 *  - crisis («meltdown» y «shutdown»), energía, descanso y burnout autista (Raymaker y
 *    colaboradores, 2020);
 *  - pedir ajustes por escrito en el trabajo, el estudio y la pareja;
 *  - ansiedad, depresión e ideas de no querer vivir (Hollocks y colaboradores, 2019; Cassidy y
 *    colaboradores, 2014).
 *
 * Complementa sin repetir: 'mapa-sensorial' y el artículo 'neurodiversidad-adultos'
 * (salud-trabajo-crianza), 'pausa-de-descompresion' y el artículo
 * 'sensibilidad-ansiedad-o-neurodivergencia' (alta-sensibilidad), 'prepararte-para-un-diagnostico'
 * (diagnosticos) y el paquete de TDAH en adultos.
 *
 * Reglas de seguridad del paquete: el autismo es una forma de funcionar, no algo a «curar» ni a
 * «normalizar». No se proponen técnicas para leer señales sociales «como neurotípico» ni para
 * esconder rasgos. No hay tests ni autodiagnóstico: el diagnóstico lo hace un profesional, y se
 * respeta a quien se reconoce autista sin diagnóstico formal. Las ideas de no querer vivir son más
 * frecuentes en adultos autistas: cada texto clave remite al 135, al 0800-345-1435, al botón Ayuda
 * y al 911. No se mencionan medicamentos.
 */

const LAI_2014: Reference = {
  citation: 'Lai, M.-C., Lombardo, M. V., & Baron-Cohen, S. (2014). Autism. The Lancet, 383(9920), 896–910.',
  doi: '10.1016/S0140-6736(13)61539-1',
};
const KENNY_2016: Reference = {
  citation: 'Kenny, L., Hattersley, C., Molins, B., Buckley, C., Povey, C., & Pellicano, E. (2016). Which terms should be used to describe autism? Perspectives from the UK autism community. Autism, 20(4), 442–462.',
  doi: '10.1177/1362361315588200',
};
const NICE_2012: Reference = {
  citation: 'National Institute for Health and Care Excellence. (2012). Autism spectrum disorder in adults: Diagnosis and management (Clinical guideline CG142). NICE.',
  note: 'Guía clínica del Reino Unido sobre evaluación y apoyo a adultos autistas.',
};
const HULL_2017: Reference = {
  citation:
    'Hull, L., Petrides, K. V., Allison, C., Smith, P., Baron-Cohen, S., Lai, M.-C., & Mandy, W. (2017). «Putting on my best normal»: Social camouflaging in adults with autism spectrum conditions. Journal of Autism and Developmental Disorders, 47(8), 2519–2534.',
  doi: '10.1007/s10803-017-3166-5',
};
const RAYMAKER_2020: Reference = {
  citation:
    'Raymaker, D. M., Teo, A. R., Steckler, N. A., et al. (2020). «Having all of your internal resources exhausted beyond measure and being left with no clean-up crew»: Defining autistic burnout. Autism in Adulthood, 2(2), 132–143.',
  doi: '10.1089/aut.2019.0079',
};
const CASSIDY_2014: Reference = {
  citation:
    'Cassidy, S., Bradley, P., Robinson, J., Allison, C., McHugh, M., & Baron-Cohen, S. (2014). Suicidal ideation and suicide plans or attempts in adults with Asperger’s syndrome attending a specialist diagnostic clinic: A clinical cohort study. The Lancet Psychiatry, 1(2), 142–147.',
  doi: '10.1016/S2215-0366(14)70248-2',
};
const HOLLOCKS_2019: Reference = {
  citation:
    'Hollocks, M. J., Lerh, J. W., Magiati, I., Meiser-Stedman, R., & Brugha, T. S. (2019). Anxiety and depression in adults with autism spectrum disorder: A systematic review and meta-analysis. Psychological Medicine, 49(4), 559–572.',
};
const GROVE_2018: Reference = {
  citation: 'Grove, R., Hoekstra, R. A., Wierda, M., & Begeer, S. (2018). Special interests and subjective wellbeing in autistic adults. Autism Research, 11(5), 766–775.',
};
const PELLICANO_2022: Reference = {
  citation:
    'Pellicano, E., & den Houting, J. (2022). Annual Research Review: Shifting from «normal science» to neurodiversity in autism science. Journal of Child Psychology and Psychiatry, 63(4), 381–396.',
  doi: '10.1111/jcpp.13534',
};

/** Aviso común: ideas de no querer vivir, más frecuentes en adultos autistas. */
const AYUDA =
  'Si aparecen ideas de no querer vivir o de hacerte daño, no lo cargues a solas. Usa el botón Ayuda de la app o llama al 135 (CABA y GBA) o al 0800-345-1435 desde todo el país. Si hay riesgo inmediato, llama al 911.';

export const AUTISMO_ADULTOS_PACK: ContentPack = {
  id: 'autismo-adultos',

  // ================================================================== prácticas
  practices: [
    {
      id: 'mi-interes-como-recurso',
      title: 'Mi interés intenso como recurso',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Ver para qué te sirve tu interés intenso, como descanso, alegría o calma, y reservarle un tiempo fijo en la semana.',
      mechanism: 'Los intereses intensos se asocian a más bienestar en adultos autistas. Darles un lugar planificado los vuelve una fuente de energía y no algo que hay que esconder.',
      evidenceLevel: 'preliminar',
      evidence: [GROVE_2018, PELLICANO_2022],
      howItWorks: [
        'Muchas personas autistas tienen intereses muy intensos y duraderos: trenes, idiomas, un videojuego, plantas, historia, programación. Durante años, a muchas les dijeron que eran «obsesiones» y que debían dejarlas.',
        'Un estudio con adultos autistas encontró que tener un interés intenso se asociaba a más bienestar (Grove y colaboradores, 2018). Es un estudio de un solo momento, así que no prueba causa. Pero coincide con lo que cuentan muchas personas: el interés calma, alegra y repone energía.',
        'Esta práctica no busca cambiar tu interés ni volverlo «útil». Busca que tenga un lugar fijo y sin culpa en tu semana.',
      ],
      tips: [
        'Si tienes varios intereses, elige el que más te repone hoy.',
        'Pon una alarma suave para salir del interés si tienes algo después. Así no tienes que vigilar la hora.',
        'Compartir el interés es opcional. Disfrutarlo a solas también vale.',
      ],
      obstacles: [
        { q: 'Me dijeron que es una pérdida de tiempo.', a: 'Descansar y disfrutar no son pérdida de tiempo. Si el interés te repone, cumple una función importante.' },
        { q: 'Cuando entro, no puedo salir.', a: 'Es común. Planifica la salida antes: una alarma, un objeto que te avise o una tarea corta y fácil para después.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Siéntate cómodo. Respira despacio dos veces.', durationSec: 20, kind: 'breath' },
        { title: 'Tu interés', instruction: 'Escribe el nombre de un interés que te guste mucho. Puede ser cualquier tema.', durationSec: 30, kind: 'reflection' },
        { title: 'Cómo te deja', instruction: 'Piensa en la última vez que te dedicaste a él. ¿Cómo quedaste después? ¿Con más calma, alegría o energía? Anota una palabra.', durationSec: 45, kind: 'reflection' },
        { title: 'Para qué te sirve', instruction: 'Marca para qué te sirve: descansar, calmarte, alegrarte, ordenar la cabeza o conectar con otros.', durationSec: 40, kind: 'reflection' },
        { title: 'Un tiempo fijo', instruction: 'Elige un día y una hora de esta semana para tu interés. Escribe cuántos minutos. Ponlo en tu agenda.', durationSec: 45, kind: 'instruction' },
        { title: 'La salida', instruction: 'Decide cómo vas a salir del interés si tienes algo después. Por ejemplo, una alarma con un sonido que te guste.', durationSec: 30, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Dite: «Mi interés es parte de mí. Puedo darle un lugar».', durationSec: 20, kind: 'breath' },
      ],
    },
    {
      id: 'releer-mi-historia-autista',
      title: 'Releer mi historia con otra mirada',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Después de descubrir que eres autista, mirar momentos difíciles del pasado con otra explicación, y dejar lugar al alivio y al duelo.',
      mechanism: 'Entender el pasado desde el autismo y no desde la culpa reduce la autocrítica. Nombrar el alivio y el duelo ayuda a integrar la nueva identidad.',
      evidenceLevel: 'preliminar',
      evidence: [LAI_2014, NICE_2012, KENNY_2016],
      howItWorks: [
        'Muchas personas llegan al diagnóstico de autismo en la adultez. A veces después de que lo diagnostican a un hijo, o después de años de ansiedad, cansancio o sentirse fuera de lugar. Las mujeres y otras personas que se camuflan mucho suelen ser diagnosticadas más tarde (Lai y colaboradores, 2014).',
        'Es común sentir dos cosas a la vez. Alivio, porque por fin hay una explicación. Y duelo, por los años de no entenderse o de recibir críticas injustas. Las dos cosas son válidas.',
        'Esta práctica sirve tanto con diagnóstico formal como si te reconoces autista y estás en camino de una evaluación. No reemplaza la evaluación: el diagnóstico lo hace un profesional con experiencia en adultos (NICE, 2012).',
      ],
      tips: [
        'Elige un recuerdo moderado, no el más doloroso.',
        'Escribe con frases simples y literales. No hace falta que suene lindo.',
        'Si te ayuda, usa las palabras que prefieras para ti: «persona autista», «en el espectro» u otras.',
      ],
      obstacles: [
        { q: 'Me da bronca todo lo que nadie vio.', a: 'Es una parte del duelo. Puedes escribir esa bronca también. Sentirla no significa quedarte ahí.' },
        { q: 'No tengo diagnóstico formal. ¿Puedo hacer esto?', a: 'Sí. Te sirve para entenderte. Si quieres confirmar, una evaluación profesional puede darte más claridad y acceso a apoyos.' },
      ],
      cautions: 'Mirar el pasado puede remover recuerdos de burlas, acoso o soledad. Si un recuerdo te desborda, para y haz la pausa de autocompasión. Si el malestar dura semanas, consulta con un profesional que conozca el autismo en adultos. ' + AYUDA,
      steps: [
        { title: 'Llegar', instruction: 'Pon una mano en el pecho o en el brazo, si te resulta cómodo. Respira despacio tres veces.', durationSec: 30, kind: 'breath' },
        { title: 'Un recuerdo', instruction: 'Elige un momento del pasado en que te sentiste raro, criticado o fuera de lugar. Que no sea el más doloroso.', durationSec: 45, kind: 'reflection' },
        { title: 'La explicación vieja', instruction: 'Escribe cómo te lo explicabas antes. Por ejemplo: «Soy maleducado» o «Soy exagerado».', durationSec: 45, kind: 'reflection' },
        { title: 'La explicación nueva', instruction: 'Ahora escribe qué pasaba desde el autismo. Por ejemplo: «Había mucho ruido» o «Nadie me explicó la regla con claridad».', durationSec: 75, kind: 'reflection' },
        { title: 'El alivio', instruction: '¿Qué te alivia de esta nueva explicación? Escribe una frase.', durationSec: 45, kind: 'reflection' },
        { title: 'El duelo', instruction: '¿Qué te duele o te da bronca? Escribe una frase. Esta parte también tiene lugar.', durationSec: 45, kind: 'reflection' },
        { title: 'Una frase para ti', instruction: 'Escribe una frase amable para tu yo de ese momento. Algo que te hubiera servido escuchar.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Haz algo tranquilo que te guste durante unos minutos.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'plan-de-crisis-autista',
      title: 'Mi plan para la sobrecarga y la crisis',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Escribir en calma un plan en tres colores: señales tempranas de sobrecarga, qué hacer en una crisis o un apagón, y cómo recuperarte después.',
      mechanism: 'Las crisis autistas no son caprichos: son una respuesta a la sobrecarga. Un plan escrito de antemano te deja actuar sin tener que pensar en el peor momento.',
      evidenceLevel: 'preliminar',
      evidence: [RAYMAKER_2020, LAI_2014],
      howItWorks: [
        'Cuando la carga sensorial, social o emocional supera lo que el sistema nervioso puede procesar, pueden aparecer dos tipos de crisis. En el «meltdown» la energía sale hacia afuera: llanto, gritos, moverse mucho. En el «shutdown» o apagón, el cuerpo se cierra: cuesta hablar, moverse o decidir.',
        'Ninguna de las dos es una elección ni una falta de educación. Son reacciones del cuerpo a demasiado. Por eso, lo que más ayuda es bajar la carga a tiempo y tener un plan claro, escrito cuando estás bien.',
        'El plan usa tres colores. Verde: cómo estás cuando estás bien. Amarillo: las primeras señales de sobrecarga y qué haces. Rojo: qué hacer durante la crisis y qué pedir a otros. Al final se suma la recuperación, que muchas veces lleva horas o días.',
      ],
      tips: [
        'Guarda el plan en el celular y en papel. En rojo, buscar es difícil.',
        'Arma una tarjeta corta para mostrar si no puedes hablar. Por ejemplo: «Estoy bien, necesito silencio y no hablar por 20 minutos».',
        'Moverte, balancearte o apretar algo son formas válidas de regularte. No hace falta esconderlas.',
        'Comparte el plan con una o dos personas de confianza.',
      ],
      obstacles: [
        { q: 'No noto las señales hasta que es tarde.', a: 'Es muy común. Pregunta a alguien de confianza qué ve en ti antes de una crisis. Y anota después de cada crisis qué pasó antes.' },
        { q: 'Me da vergüenza tener crisis.', a: 'Una crisis no dice nada malo de ti. Dice que hubo demasiada carga. El plan sirve justamente para cuidarte sin culpa.' },
      ],
      cautions:
        'Si durante una crisis te golpeas, te lastimas o pones en riesgo tu seguridad, consulta con un profesional que conozca el autismo para armar el plan juntos. Una crisis no es una urgencia en sí, pero sí lo es si hay riesgo de daño. ' + AYUDA,
      steps: [
        { title: 'Llegar', instruction: 'Haz esto en un momento tranquilo. Ten papel o el celular a mano.', durationSec: 20, kind: 'instruction' },
        { title: 'Verde', instruction: 'Escribe cómo estás cuando estás bien. Por ejemplo: «Duermo bien, tengo ganas de mi interés, tolero ruidos normales».', durationSec: 50, kind: 'reflection' },
        { title: 'Amarillo: señales', instruction: 'Anota tus primeras señales de sobrecarga. Por ejemplo: me molesta la ropa, me cuesta hablar, me irrito con ruidos, aprieto los dientes.', durationSec: 60, kind: 'reflection' },
        { title: 'Amarillo: acciones', instruction: 'Anota tres acciones para el amarillo. Por ejemplo: ponerme auriculares, salir a un lugar tranquilo, cancelar el próximo plan.', durationSec: 60, kind: 'reflection' },
        { title: 'Rojo: lo que ayuda', instruction: 'Anota qué te ayuda en una crisis o un apagón. Por ejemplo: oscuridad, una manta pesada, no hablar, moverme.', durationSec: 60, kind: 'reflection' },
        { title: 'Rojo: lo que no ayuda', instruction: 'Anota qué empeora las cosas. Por ejemplo: que me toquen, que me hagan preguntas, que me digan que me calme.', durationSec: 45, kind: 'reflection' },
        { title: 'Tu tarjeta', instruction: 'Escribe una frase corta para mostrar a otros si no puedes hablar. Di qué necesitas y por cuánto tiempo.', durationSec: 45, kind: 'reflection' },
        { title: 'Después', instruction: 'Anota cómo te recuperas. Por ejemplo: dormir, comer algo simple, un día con menos planes, tiempo con tu interés.', durationSec: 50, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Guarda el plan en un lugar fácil de encontrar. Respira despacio dos veces.', durationSec: 20, kind: 'breath' },
      ],
    },
    {
      id: 'costo-del-camuflaje',
      title: 'Lo que me cuesta camuflarme',
      family: 'deconstructive',
      skills: ['attention', 'compassion'],
      summary: 'Registrar qué haces para encajar, cuánta energía te cuesta y elegir un lugar seguro donde soltar una de esas conductas.',
      mechanism: 'El camuflaje permite encajar, pero se asocia a agotamiento y malestar. Verlo con claridad y soltarlo donde es seguro devuelve energía.',
      evidenceLevel: 'preliminar',
      evidence: [HULL_2017, RAYMAKER_2020],
      howItWorks: [
        'Camuflarse o hacer «masking» es esconder o compensar rasgos autistas para encajar. Por ejemplo: forzar el contacto visual, ensayar charlas, copiar gestos, aguantar ruidos o frenar movimientos que te calman. Laura Hull y su equipo describieron que muchas personas lo hacen casi todo el tiempo y que les deja un gran cansancio (Hull y colaboradores, 2017).',
        'A veces el camuflaje protege: en una entrevista de trabajo o frente a personas que discriminan. No se trata de dejarlo en todas partes. Se trata de saber cuánto te cuesta y de elegir dónde puedes ser como eres.',
        'Esta práctica no te enseña a parecer neurotípico. Hace lo contrario: te ayuda a ver qué te gasta y a recuperar espacios sin máscara.',
      ],
      tips: [
        'Empieza por un lugar muy seguro: tu casa, a solas o con una persona de confianza.',
        'Suelta una sola conducta por vez. Por ejemplo, no forzar la mirada en una charla con alguien que te conoce.',
        'Después de un día de mucho camuflaje, planifica descanso. Es un gasto real.',
      ],
      obstacles: [
        { q: 'Ya no sé quién soy sin la máscara.', a: 'Le pasa a mucha gente que se camufló desde chica. Puedes descubrirlo de a poco, en lugares seguros, sin apuro.' },
        { q: 'Si dejo de camuflarme, me van a rechazar.', a: 'Ese miedo tiene sentido, sobre todo si te pasó antes. Por eso se elige un lugar seguro. Tu seguridad va primero.' },
      ],
      cautions:
        'Mirar todo lo que haces para encajar puede traer tristeza o cansancio. Ve despacio y elige lugares seguros. Si el agotamiento te impide trabajar o cuidarte, consulta con un profesional que conozca el autismo en adultos. ' + AYUDA,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en un día común de esta semana.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que haces', instruction: 'Anota lo que haces para encajar. Por ejemplo: forzar la mirada, ensayar frases, copiar gestos, frenar movimientos, aguantar ruidos.', durationSec: 75, kind: 'reflection' },
        { title: 'Dónde', instruction: 'Al lado de cada una, anota dónde la haces: trabajo, estudio, familia, amigos, pareja.', durationSec: 60, kind: 'reflection' },
        { title: 'El costo', instruction: 'Ponle a cada una un número del cero al diez según cuánta energía te gasta.', durationSec: 45, kind: 'reflection' },
        { title: 'Para qué', instruction: 'Marca las que te protegen de verdad, por ejemplo de un trato injusto. Esas pueden quedar por ahora.', durationSec: 45, kind: 'reflection' },
        { title: 'Un lugar seguro', instruction: 'Elige una conducta que gaste mucho y un lugar seguro. Escribe: «Esta semana, en este lugar, voy a dejar de hacer esto».', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Dite: «No tengo que ganarme el lugar escondiéndome». Respira despacio.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'presupuesto-de-energia',
      title: 'Mi presupuesto de energía semanal',
      family: 'attentional',
      skills: ['resilience', 'attention'],
      summary: 'Planificar la semana contando cuánta energía gasta cada actividad y reservar recuperación antes de llegar al agotamiento.',
      mechanism: 'El burnout autista aparece cuando las demandas superan la energía durante mucho tiempo, sin descanso suficiente. Planificar la carga y la recuperación lo previene.',
      evidenceLevel: 'preliminar',
      evidence: [RAYMAKER_2020, HULL_2017],
      howItWorks: [
        'Dora Raymaker y su equipo, en una investigación hecha junto con personas autistas, describieron el burnout autista. Es un agotamiento profundo y largo, con menos tolerancia a los estímulos y pérdida de habilidades que antes tenías. Aparece cuando las exigencias superan los recursos por mucho tiempo, sin descanso suficiente (Raymaker y colaboradores, 2020).',
        'No es lo mismo que el burnout laboral ni que la depresión, aunque pueden darse juntos. Lo que más ayudó a las personas del estudio fue bajar exigencias, tener tiempo a solas, dejar de camuflarse y recibir apoyo.',
        'Esta práctica usa un presupuesto simple. Cada actividad gasta o repone energía. Si sabes cuánto gastas, puedes poner recuperación antes de quedarte sin nada. Complementa el mapa sensorial: aquel te dice qué te carga; este te ayuda a planificar la semana.',
      ],
      tips: [
        'Cuenta también lo que parece chico: viajes, llamadas, ruido, compras, decisiones.',
        'Los cambios de planes gastan mucho. Cuéntalos aparte.',
        'Pon la recuperación en la agenda como una cita, no como «si sobra tiempo».',
        'Si pierdes habilidades que antes tenías, como hablar o cocinar, es una señal para bajar la carga ya.',
      ],
      obstacles: [
        { q: 'Mi semana ya viene llena y no puedo cambiarla.', a: 'Empieza por lo chico: un día con menos planes, delegar una tarea o decir que no a una invitación.' },
        { q: 'Descansar me hace sentir culpa.', a: 'La recuperación es parte del trabajo de vivir, no un premio. Sin ella, el cuerpo cobra la cuenta después.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Abre tu agenda de la semana que viene.', durationSec: 20, kind: 'breath' },
        { title: 'Tu energía', instruction: 'Imagina que tienes diez puntos de energía por día. Ese es tu presupuesto.', durationSec: 30, kind: 'instruction' },
        { title: 'Lo que gasta', instruction: 'Anota las actividades de la semana. Ponle a cada una cuántos puntos gasta: uno es poco, cinco es mucho.', durationSec: 75, kind: 'reflection' },
        { title: 'Lo que repone', instruction: 'Anota lo que te repone y cuántos puntos te devuelve. Por ejemplo: silencio, tu interés, dormir, caminar solo.', durationSec: 60, kind: 'reflection' },
        { title: 'Días rojos', instruction: 'Marca los días que gastan más de diez puntos. Son los días con más riesgo de sobrecarga.', durationSec: 40, kind: 'reflection' },
        { title: 'Ajustar', instruction: 'En cada día rojo, mueve, acorta o cancela una actividad. O suma una recuperación justo después.', durationSec: 60, kind: 'reflection' },
        { title: 'Señales de burnout', instruction: 'Anota dos señales de que te acercas al agotamiento. Por ejemplo: dormir y no descansar, o perder palabras.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon en la agenda al menos un bloque de recuperación. Respira despacio dos veces.', durationSec: 20, kind: 'breath' },
      ],
    },
    {
      id: 'mi-ficha-de-ajustes',
      title: 'Mi ficha de ajustes por escrito',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Escribir una ficha corta y literal sobre cómo te comunicas y trabajas mejor, con ajustes concretos para el trabajo, el estudio o la pareja.',
      mechanism: 'Decir lo que necesitas por escrito, con ejemplos concretos, evita malentendidos y no depende de leer señales sociales en el momento.',
      evidenceLevel: 'preliminar',
      evidence: [NICE_2012, PELLICANO_2022, HULL_2017],
      howItWorks: [
        'Muchas personas autistas se comunican mejor de forma directa y literal. Las indirectas, los planes vagos y los cambios sin aviso cansan mucho. Esto no es un error tuyo: es una diferencia de estilo, y la otra persona también puede ajustarse.',
        'Un ajuste es un cambio razonable en el entorno o en la forma de hacer las cosas. Por ejemplo: recibir las consignas por escrito, tener la agenda de una reunión antes, usar auriculares o avisar con tiempo los cambios. Las guías clínicas recomiendan adaptar el entorno y la comunicación a cada persona autista (NICE, 2012).',
        'Una ficha escrita sirve porque la preparas con calma y la entregas igual. No tienes que improvisar ni adivinar lo que el otro espera.',
      ],
      tips: [
        'Usa frases cortas: «Me ayuda…», «Me cuesta…», «Te pido…».',
        'Contar que eres autista es una decisión tuya. Puedes pedir ajustes sin decir el diagnóstico.',
        'En pareja, la ficha puede ser un acuerdo de los dos. Pregunta también qué necesita la otra persona.',
        'Pon una fecha para revisar si los ajustes funcionan.',
      ],
      obstacles: [
        { q: 'Tengo miedo de que me vean como un problema.', a: 'Es un miedo razonable. Empieza con un ajuste chico y con alguien de confianza. Y explica para qué sirve: trabajar o convivir mejor.' },
        { q: 'Me dijeron que no.', a: 'Pregunta qué parte sí es posible. Si es en el trabajo o el estudio, puedes pedir asesoramiento sobre tus derechos.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Elige un ámbito: trabajo, estudio o pareja.', durationSec: 20, kind: 'breath' },
        { title: 'Cómo me comunico', instruction: 'Escribe cómo te comunicas mejor. Por ejemplo: «Prefiero mensajes escritos» o «Me ayuda que me digan las cosas de forma directa».', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que me cuesta', instruction: 'Escribe dos cosas que te cuestan en ese ámbito. Por ejemplo: cambios sin aviso, reuniones sin agenda, ruido, llamadas.', durationSec: 60, kind: 'reflection' },
        { title: 'Los ajustes', instruction: 'Para cada una, escribe un ajuste concreto. Por ejemplo: «Avísame los cambios con un día de anticipación».', durationSec: 75, kind: 'reflection' },
        { title: 'Para qué sirve', instruction: 'Escribe una frase sobre para qué sirve cada ajuste. Por ejemplo: «Así hago mejor mi trabajo».', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que yo aporto', instruction: 'Anota una fortaleza tuya en ese ámbito. Por ejemplo: precisión, honestidad, memoria para detalles.', durationSec: 40, kind: 'reflection' },
        { title: 'Revisar', instruction: 'Pon una fecha para revisar los ajustes con esa persona. Puede ser en un mes.', durationSec: 30, kind: 'instruction' },
        { title: 'Cerrar', instruction: 'Lee la ficha completa una vez. Respira despacio y nota que pedir es un derecho.', durationSec: 30, kind: 'breath' },
      ],
    },
  ],

  meta: {
    'mi-interes-como-recurso': { level: 'iniciacion', approaches: ['positiva'], module: 'neurodiversidad' },
    'releer-mi-historia-autista': { level: 'intermedio', approaches: ['narrativa', 'cft'], module: 'neurodiversidad', prerequisites: ['pausa-autocompasion'] },
    'plan-de-crisis-autista': { level: 'intermedio', approaches: ['dbt', 'tcc'], module: 'neurodiversidad', prerequisites: ['pausa-de-descompresion'] },
    'costo-del-camuflaje': { level: 'intermedio', approaches: ['act', 'cft'], module: 'neurodiversidad', prerequisites: ['pausa-autocompasion'] },
    'presupuesto-de-energia': { level: 'intermedio', approaches: ['tcc', 'act'], module: 'neurodiversidad', prerequisites: ['mapa-sensorial'] },
    'mi-ficha-de-ajustes': { level: 'intermedio', approaches: ['dbt', 'tcc'], module: 'neurodiversidad', prerequisites: ['mapa-sensorial'] },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'autismo-en-adultos',
      title: 'Autismo en la adultez: otra forma de funcionar',
      subtitle: 'Qué es el autismo, qué cambia con un diagnóstico de adulto, en qué se diferencia de la alta sensibilidad y cuándo pedir ayuda.',
      category: 'Autoconocimiento y patrones',
      readingMin: 9,
      keyPoints: [
        'El autismo es una forma de funcionar del cerebro, presente desde la infancia. No es una enfermedad a curar.',
        'Muchas personas descubren que son autistas en la adultez. Suele traer alivio y también duelo.',
        'La sensibilidad sensorial, los intereses intensos y una comunicación más directa son frecuentes.',
        'La alta sensibilidad es un rasgo del temperamento; el autismo incluye además diferencias en la comunicación social y en los intereses.',
        'La ansiedad y las ideas de no querer vivir son más frecuentes en adultos autistas. Pedir ayuda es importante.',
      ],
      sections: [
        {
          heading: 'Qué es el autismo',
          paragraphs: [
            'El autismo es una forma distinta de procesar el mundo, presente desde la infancia aunque a veces se note más tarde. Incluye diferencias en la comunicación y la interacción social, intereses intensos, gusto por la previsibilidad y una forma particular de sentir los estímulos (Lai, Lombardo y Baron-Cohen, 2014).',
            'Cada persona autista es distinta. Algunas necesitan mucho apoyo en la vida diaria y otras poco, y eso puede cambiar según el momento y el entorno. Por eso se habla de espectro.',
            'El enfoque de la neurodiversidad, que surgió en la propia comunidad autista, propone ver el autismo como una variación humana, con fortalezas y necesidades de apoyo (Pellicano y den Houting, 2022). Desde esta mirada, la meta no es «normalizar» a nadie, sino que el entorno se ajuste y que la persona viva bien.',
          ],
        },
        {
          heading: 'Cómo nombrarlo',
          paragraphs: [
            'En una encuesta a la comunidad autista del Reino Unido, muchas personas adultas prefirieron decir «persona autista» o «autista». Otras prefieren «persona con autismo» o «en el espectro» (Kenny y colaboradores, 2016). No hay una sola forma correcta.',
            'Lo más respetuoso es usar las palabras que la persona elige para sí. En esta app usamos sobre todo «persona autista».',
          ],
        },
        {
          heading: 'Descubrirlo de adulto',
          paragraphs: [
            'Muchas personas llegan a la pregunta en la adultez. A veces después del diagnóstico de un hijo, de leer sobre el tema o de años de agotamiento sin explicación. Las mujeres y quienes se camuflan mucho suelen ser diagnosticadas más tarde (Lai y colaboradores, 2014).',
            'El diagnóstico puede traer alivio: por fin hay palabras y otras personas que viven algo parecido. También puede traer duelo, por los años de críticas o de no entenderse. Y preguntas sobre la identidad: quién soy sin todo lo que hice para encajar. Todo esto es esperable y lleva tiempo.',
            'El diagnóstico lo hace un profesional con experiencia en autismo en adultos, con entrevistas y, si es posible, información de la infancia (NICE, 2012). Esta app no diagnostica. Si te reconoces autista sin diagnóstico formal, tu experiencia igual merece respeto. Una evaluación puede darte más claridad y acceso a apoyos.',
          ],
        },
        {
          heading: 'No es lo mismo que la alta sensibilidad',
          paragraphs: [
            'La alta sensibilidad es un rasgo del temperamento: procesar los estímulos con más profundidad. Muchas personas autistas también tienen una sensibilidad sensorial marcada. Por eso se confunden.',
            'La diferencia es que el autismo incluye además diferencias en la comunicación social y en los intereses o rutinas, presentes desde la infancia. Una persona puede ser muy sensible sin ser autista, o ser las dos cosas. También puede haber autismo y TDAH a la vez. Sólo una evaluación profesional puede orientar.',
          ],
        },
        {
          heading: 'Sentidos, intereses y rutinas',
          paragraphs: [
            'Ruidos, luces, olores, texturas o multitudes pueden sentirse mucho más intensos. Otras veces se busca más estímulo, como moverse, balancearse o tocar algo. Estas conductas, a veces llamadas «stimming», son formas válidas de regularse.',
            'Los intereses intensos pueden ser una fuente de alegría, calma y energía (Grove y colaboradores, 2018). Las rutinas y la previsibilidad bajan la carga de tener que decidir y adaptarse todo el tiempo. No son caprichos: son formas de cuidar el sistema nervioso.',
          ],
        },
        {
          heading: 'Ansiedad, depresión y cuándo pedir ayuda',
          paragraphs: [
            'La ansiedad y la depresión son frecuentes en adultos autistas (Hollocks y colaboradores, 2019). Muchas veces tienen que ver con vivir en entornos que no se ajustan, con el camuflaje y con experiencias de rechazo. Tienen tratamiento, y conviene buscar un profesional que conozca el autismo y adapte la terapia.',
            'Las ideas de no querer vivir son más frecuentes en adultos autistas que en la población general (Cassidy y colaboradores, 2014). Si te pasa, no es exageración ni debilidad. Usa el botón Ayuda de la app o llama al 135 (CABA y GBA) o al 0800-345-1435 desde todo el país. Si hay riesgo inmediato, llama al 911.',
          ],
        },
      ],
      caveat: {
        title: 'Lo que esta sección no hace',
        body: 'No hay tests ni autodiagnóstico: el diagnóstico de autismo lo hace un profesional. Tampoco hay técnicas para parecer neurotípico ni para esconder rasgos. Desconfía de propuestas que prometen «curar» el autismo o «normalizar» la conducta a costa de tu bienestar. Las prácticas de este tema se basan en investigación todavía preliminar y en la experiencia de la comunidad autista. No se mencionan medicamentos: si tienes ansiedad, depresión o problemas de sueño, consulta.',
      },
      related: {
        practices: ['mi-interes-como-recurso', 'releer-mi-historia-autista', 'mapa-sensorial', 'presupuesto-de-energia', 'mi-ficha-de-ajustes', 'prepararte-para-un-diagnostico'],
        articles: ['camuflaje-crisis-y-burnout-autista', 'neurodiversidad-adultos', 'sensibilidad-ansiedad-o-neurodivergencia', 'alta-sensibilidad', 'tdah-en-adultos', 'diagnostico-sin-etiquetas'],
      },
      references: [LAI_2014, PELLICANO_2022, KENNY_2016, NICE_2012, GROVE_2018, HOLLOCKS_2019, CASSIDY_2014],
    },
    {
      id: 'camuflaje-crisis-y-burnout-autista',
      title: 'Camuflaje, crisis y burnout autista',
      subtitle: 'Por qué encajar cansa tanto, qué son el «meltdown» y el «shutdown», y cómo prevenir el agotamiento.',
      category: 'Autoconocimiento y patrones',
      readingMin: 8,
      keyPoints: [
        'Camuflarse es esconder o compensar rasgos autistas para encajar. Gasta mucha energía.',
        'Las crisis («meltdown») y los apagones («shutdown») son respuestas a la sobrecarga, no berrinches.',
        'El burnout autista es un agotamiento largo, con menos tolerancia y pérdida de habilidades.',
        'Lo que más ayuda es bajar exigencias, descansar, soltar el camuflaje donde es seguro y pedir ajustes.',
      ],
      sections: [
        {
          heading: 'El camuflaje y su costo',
          paragraphs: [
            'Muchas personas autistas aprenden desde chicas a esconder lo que las hace distintas. Fuerzan el contacto visual, ensayan charlas, copian gestos o aguantan ruidos sin decir nada. A esto se le llama camuflaje o «masking».',
            'En un estudio con adultos autistas, Laura Hull y su equipo encontraron que muchas personas se camuflan para evitar el rechazo o conseguir trabajo y amistades. También describieron el costo: cansancio extremo, ansiedad y la sensación de perder la propia identidad (Hull y colaboradores, 2017).',
            'A veces el camuflaje protege, y está bien usarlo donde hace falta. El problema es cuando no hay ningún lugar donde soltarlo. Recuperar espacios sin máscara devuelve energía.',
          ],
        },
        {
          heading: 'Crisis y apagones',
          paragraphs: [
            'Cuando la carga es demasiada, el sistema nervioso puede desbordarse. En el «meltdown» la energía sale hacia afuera: llanto, gritos o moverse mucho. En el «shutdown» o apagón, la persona se cierra: le cuesta hablar, moverse o decidir.',
            'Ninguna de las dos es una elección. Durante la crisis ayuda bajar estímulos, no hacer preguntas y dar tiempo. Después, la recuperación puede llevar horas o días. Un plan escrito de antemano permite actuar sin tener que pensar en el peor momento.',
          ],
        },
        {
          heading: 'Burnout autista',
          paragraphs: [
            'Dora Raymaker y su equipo trabajaron junto con personas autistas para definir el burnout autista. Lo describieron como un agotamiento profundo y largo, con menos tolerancia a los estímulos y pérdida de habilidades que antes se tenían, como hablar o organizarse (Raymaker y colaboradores, 2020).',
            'Aparece cuando las exigencias de la vida superan los recursos por mucho tiempo, sin descanso suficiente. El camuflaje y los entornos que no se ajustan suman mucho a esa carga. No es lo mismo que el burnout laboral ni que la depresión, aunque pueden darse juntos.',
            'Lo que más ayudó a las personas del estudio fue reducir exigencias, tener tiempo a solas, dejar de camuflarse donde era posible y contar con apoyo de otras personas autistas y del entorno.',
          ],
        },
        {
          heading: 'Pedir ajustes',
          paragraphs: [
            'Un ajuste es un cambio razonable en el entorno o en la forma de hacer algo. Por ejemplo: consignas por escrito, agendas previas, avisos de cambios, un lugar tranquilo o pausas. Las guías clínicas recomiendan adaptar la comunicación y el entorno a cada persona autista (NICE, 2012).',
            'Pedirlo por escrito, con frases cortas y ejemplos concretos, evita malentendidos. Contar el diagnóstico es una decisión personal. En la pareja, los ajustes funcionan mejor como acuerdos de ida y vuelta.',
          ],
        },
        {
          heading: 'Cuándo consultar',
          paragraphs: [
            'Consulta si el agotamiento dura semanas, si pierdes habilidades que tenías, si las crisis son muy seguidas o si te lastimas durante ellas. Busca un profesional que conozca el autismo en adultos y no proponga «normalizarte».',
            'Si aparecen ideas de no querer vivir, pide ayuda hoy. Usa el botón Ayuda de la app o llama al 135 (CABA y GBA) o al 0800-345-1435 desde todo el país. Si hay riesgo inmediato, llama al 911.',
          ],
        },
      ],
      caveat: {
        title: 'Lo que todavía se sabe poco',
        body: 'El burnout autista y el camuflaje se estudian hace pocos años, sobre todo con entrevistas y encuestas. Por eso la evidencia es preliminar. Lo que se presenta aquí combina esa investigación con lo que cuenta la propia comunidad autista. Las prácticas no reemplazan la atención profesional.',
      },
      diagram: {
        title: 'Cómo se llega al agotamiento',
        nodes: ['Demandas sensoriales y sociales', 'Camuflaje para encajar', 'Energía que no se repone', 'Sobrecarga, crisis o apagón', 'Más presión para «funcionar»'],
        caption: 'Bajar exigencias, planificar la recuperación, soltar el camuflaje donde es seguro y pedir ajustes cortan el ciclo.',
      },
      related: {
        practices: ['costo-del-camuflaje', 'plan-de-crisis-autista', 'presupuesto-de-energia', 'mi-ficha-de-ajustes', 'pausa-de-descompresion', 'mapa-sensorial'],
        articles: ['autismo-en-adultos', 'neurodiversidad-adultos', 'burnout-seis-areas'],
      },
      references: [HULL_2017, RAYMAKER_2020, NICE_2012, CASSIDY_2014],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'autista-a-mi-ritmo',
      title: 'Autista, a mi ritmo',
      subtitle: 'Cuatro semanas para entenderte, cuidar tu energía y pedir lo que necesitas',
      description:
        'Para personas autistas, con o sin diagnóstico formal, y para quienes se están haciendo la pregunta. Releerás tu historia, darás lugar a tus intereses, conocerás tu mapa sensorial, armarás un plan para la sobrecarga, mirarás el costo del camuflaje y prepararás tus ajustes por escrito. No busca cambiar cómo eres. Si aparecen ideas de no querer vivir, usa el botón Ayuda o llama al 135.',
      basis: 'Lai, Lombardo y Baron-Cohen (2014); Hull y colaboradores (2017); Raymaker y colaboradores (2020); NICE (2012).',
      rhythm: '10 a 15 minutos, 3 o 4 días por semana. Con días libres si estás con poca energía.',
      weeks: [
        {
          title: 'Semana 1 · Entenderme',
          focus: 'Diagnóstico, identidad e intereses',
          description: 'Leerás qué es el autismo en la adultez, releerás un momento de tu historia y darás un lugar fijo a tu interés.',
          practiceIds: ['mi-interes-como-recurso', 'releer-mi-historia-autista', 'pausa-autocompasion'],
          articleIds: ['autismo-en-adultos'],
          journalType: 'escritura-expresiva',
        },
        {
          title: 'Semana 2 · Sentidos y energía',
          focus: 'Prevenir la sobrecarga',
          description: 'Armarás tu mapa sensorial y tu presupuesto de energía para la semana, con recuperación incluida.',
          practiceIds: ['mapa-sensorial', 'presupuesto-de-energia'],
          articleIds: [],
          journalType: 'necesidades',
        },
        {
          title: 'Semana 3 · Crisis y camuflaje',
          focus: 'Un plan escrito y menos máscara',
          description: 'Escribirás tu plan para la sobrecarga y la crisis, y elegirás un lugar seguro donde soltar una conducta de camuflaje.',
          practiceIds: ['pausa-de-descompresion', 'plan-de-crisis-autista', 'costo-del-camuflaje'],
          articleIds: ['camuflaje-crisis-y-burnout-autista'],
          journalType: 'experimento',
        },
        {
          title: 'Semana 4 · Pedir lo que necesito',
          focus: 'Ajustes en el trabajo, el estudio y la pareja',
          description: 'Escribirás tu ficha de ajustes y practicarás un pedido claro y concreto.',
          practiceIds: ['mi-ficha-de-ajustes', 'dear-man'],
          articleIds: ['neurodiversidad-adultos'],
          journalType: 'conversacion',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-autismo-de-adulto',
      title: 'Descubrir que eres autista de adulto',
      subtitle: 'Alivio, duelo y qué hacer con la pregunta.',
      slides: [
        { heading: 'Una forma de funcionar', text: 'El autismo es una forma distinta de sentir y procesar el mundo. Está desde la infancia. No es algo a curar.' },
        { heading: 'Llegar tarde', text: 'Mucha gente lo descubre de adulta. Pasa más en mujeres y en quienes aprendieron a camuflarse.' },
        { heading: 'Alivio y duelo', text: 'Puede dar alivio, porque por fin hay una explicación. Y también tristeza o bronca por los años sin entenderte. Las dos cosas valen.' },
        { heading: 'Quién diagnostica', text: 'El diagnóstico lo hace un profesional con experiencia en adultos. Esta app no diagnostica. Tu experiencia igual merece respeto.' },
        { heading: 'Cómo nombrarte', text: 'Mucha gente prefiere decir «persona autista». Otras eligen otras palabras. Usa las que te queden bien.' },
      ],
      related: { practices: ['releer-mi-historia-autista', 'prepararte-para-un-diagnostico'], articles: ['autismo-en-adultos'] },
      references: [LAI_2014, NICE_2012, KENNY_2016],
    },
    {
      id: 'pildora-masking',
      title: 'Encajar cansa',
      subtitle: 'Qué es el camuflaje y cuánto cuesta.',
      slides: [
        { heading: 'Camuflarse', text: 'Es esconder rasgos para encajar. Forzar la mirada, ensayar charlas, copiar gestos o aguantar ruidos.' },
        { heading: 'El costo', text: 'Las personas que se camuflan mucho cuentan un gran cansancio. También ansiedad y no saber bien quiénes son.' },
        { heading: 'A veces protege', text: 'En algunos lugares el camuflaje te cuida. Está bien usarlo ahí. El problema es no tener ningún lugar sin máscara.' },
        { heading: 'Un lugar seguro', text: 'Elige un lugar seguro y suelta una sola conducta. Por ejemplo, no forzar la mirada con alguien de confianza.' },
        { heading: 'Recuperar', text: 'Después de un día de mucho camuflaje, planea descanso. Es un gasto real de energía.' },
      ],
      related: { practices: ['costo-del-camuflaje'], articles: ['camuflaje-crisis-y-burnout-autista'] },
      references: [HULL_2017],
    },
    {
      id: 'pildora-meltdown-y-shutdown',
      title: 'Crisis y apagón',
      subtitle: 'Qué son el «meltdown» y el «shutdown», y qué ayuda.',
      slides: [
        { heading: 'Demasiado', text: 'Cuando la carga es más de lo que el cuerpo puede procesar, puede llegar una crisis. No es un capricho.' },
        { heading: 'Hacia afuera', text: 'En el «meltdown» la energía sale: llanto, gritos o moverse mucho. Cuesta frenarlo una vez que empieza.' },
        { heading: 'Hacia adentro', text: 'En el «shutdown» o apagón, el cuerpo se cierra. Cuesta hablar, moverse o decidir.' },
        { heading: 'Lo que ayuda', text: 'Menos estímulos, silencio, nada de preguntas y tiempo. Una tarjeta escrita puede decir lo que necesitas.' },
        { heading: 'Un plan', text: 'Escribe tu plan cuando estás bien. Señales, qué ayuda, qué no y cómo recuperarte después.' },
        { heading: 'Si hay riesgo', text: 'Si te lastimas o aparecen ideas de no querer vivir, usa el botón Ayuda o llama al 135. Si hay riesgo inmediato, al 911.' },
      ],
      related: { practices: ['plan-de-crisis-autista', 'pausa-de-descompresion'], articles: ['camuflaje-crisis-y-burnout-autista'] },
      references: [RAYMAKER_2020, CASSIDY_2014],
    },
    {
      id: 'pildora-burnout-autista',
      title: 'Burnout autista',
      subtitle: 'Un agotamiento que no se va con un fin de semana.',
      slides: [
        { heading: 'Qué es', text: 'Es un cansancio profundo y largo. Toleras menos los estímulos y pierdes cosas que antes podías hacer.' },
        { heading: 'De dónde viene', text: 'Aparece cuando lo que te exigen supera tu energía por mucho tiempo. El camuflaje suma mucha carga.' },
        { heading: 'No es pereza', text: 'No es falta de ganas ni de voluntad. Es un cuerpo que se quedó sin reservas.' },
        { heading: 'Lo que ayuda', text: 'Bajar exigencias, tener tiempo a solas, soltar la máscara donde puedas y pedir apoyo.' },
        { heading: 'Prevenir', text: 'Cuenta cuánta energía gasta tu semana. Pon descanso en la agenda como una cita.' },
        { heading: 'Consultar', text: 'Si dura semanas o te sientes sin salida, consulta. Si aparecen ideas de no querer vivir, llama al 135 o usa el botón Ayuda.' },
      ],
      related: { practices: ['presupuesto-de-energia', 'costo-del-camuflaje'], articles: ['camuflaje-crisis-y-burnout-autista'] },
      references: [RAYMAKER_2020, CASSIDY_2014],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'camuflaje-autista', term: 'Camuflaje («masking»)', definition: 'Esconder o compensar rasgos autistas para encajar, como forzar la mirada o ensayar charlas. Puede proteger, pero gasta mucha energía.', articleId: 'camuflaje-crisis-y-burnout-autista', practiceId: 'costo-del-camuflaje' },
    { id: 'meltdown-autista', term: 'Crisis autista («meltdown»)', definition: 'Desborde hacia afuera cuando la carga es demasiada: llanto, gritos o moverse mucho. No es un berrinche ni una elección.', articleId: 'camuflaje-crisis-y-burnout-autista', practiceId: 'plan-de-crisis-autista' },
    { id: 'shutdown-autista', term: 'Apagón («shutdown»)', definition: 'Respuesta a la sobrecarga en la que la persona se cierra: le cuesta hablar, moverse o decidir. Necesita calma y tiempo.', articleId: 'camuflaje-crisis-y-burnout-autista', practiceId: 'plan-de-crisis-autista' },
    { id: 'burnout-autista', term: 'Burnout autista', definition: 'Agotamiento profundo y largo, con menos tolerancia a los estímulos y pérdida de habilidades. Aparece cuando las exigencias superan la energía por mucho tiempo.', articleId: 'camuflaje-crisis-y-burnout-autista', practiceId: 'presupuesto-de-energia' },
    { id: 'interes-intenso', term: 'Interés intenso', definition: 'Tema que una persona autista disfruta con mucha profundidad y durante mucho tiempo. Puede ser fuente de calma, alegría y energía.', articleId: 'autismo-en-adultos', practiceId: 'mi-interes-como-recurso' },
    { id: 'ajuste-razonable', term: 'Ajuste razonable', definition: 'Cambio en el entorno o en la forma de hacer algo para que una persona pueda trabajar, estudiar o convivir mejor. Por ejemplo, consignas por escrito.', articleId: 'camuflaje-crisis-y-burnout-autista', practiceId: 'mi-ficha-de-ajustes' },
  ],
};
