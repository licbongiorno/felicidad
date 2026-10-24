import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Cannabis y otras sustancias», con enfoque de entrevista motivacional y de
 * reducción de daños, sin sermones:
 *  - para qué se usa el cannabis (dormir, calmar la ansiedad, aburrimiento, encajar);
 *  - balance de lo que da y lo que cuesta (Miller y Rollnick);
 *  - registro de una semana con disparadores (Marlatt y Gordon);
 *  - plan de pausa o de reducción, con lo que se puede sentir al dejar (Budney y colaboradores);
 *  - noches durante la pausa (se apoya en el paquete de sueño) y ansiedad sin consumir;
 *  - una mirada general a la cocaína, los estimulantes y las benzodiacepinas sin receta.
 *
 * No repite lo que ya existe: surfear el impulso ('surfear-impulso'), el sueño
 * ('rutina-bajada-dormir', programa 'dormir-mejor'), el alcohol ('alcohol-reducir-danos' y el
 * AUDIT-C en Evaluaciones), el juego ('apuestas') y la prevención de recaídas
 * ('prevencion-recaidas'). Enlaza a ellos.
 *
 * Seguridad: no hay dosis, productos, vías ni combinaciones. Las benzodiacepinas y el alcohol
 * no se dejan de golpe si hay uso diario prolongado: hay que consultar. Síntomas psicóticos,
 * paranoia intensa o ideas de no querer vivir llevan a consulta urgente, 911 o 135. La
 * Línea 141 de SEDRONAR orienta gratis, de forma anónima y las 24 horas.
 */

const MILLER_2013: Reference = { citation: 'Miller, W. R., & Rollnick, S. (2013). Motivational interviewing: Helping people change (3.ª ed.). Guilford Press.' };
const MARLATT_1985: Reference = {
  citation: 'Marlatt, G. A., & Gordon, J. R. (Eds.). (1985). Relapse prevention: Maintenance strategies in the treatment of addictive behaviors. Guilford Press.',
};
const BOWEN_2014: Reference = {
  citation:
    'Bowen, S., Witkiewitz, K., Clifasefi, S. L., et al. (2014). Relative efficacy of mindfulness-based relapse prevention, standard relapse prevention, and treatment as usual for substance use disorders: A randomized clinical trial. JAMA Psychiatry, 71(5), 547–556.',
};
const BOWEN_2009: Reference = {
  citation: 'Bowen, S., & Marlatt, G. A. (2009). Surfing the urge: Brief mindfulness-based intervention for college student smokers. Psychology of Addictive Behaviors, 23(4), 666–671.',
  doi: '10.1037/a0017127',
};
const VOLKOW_2014: Reference = {
  citation: 'Volkow, N. D., Baler, R. D., Compton, W. M., & Weiss, S. R. B. (2014). Adverse health effects of marijuana use. New England Journal of Medicine, 370(23), 2219–2227.',
  doi: '10.1056/NEJMra1402309',
};
const GATES_2016: Reference = {
  citation:
    'Gates, P. J., Sabioni, P., Copeland, J., Le Foll, B., & Gowing, L. (2016). Psychosocial interventions for cannabis use disorder. Cochrane Database of Systematic Reviews, (5), CD005336.',
};
const BUDNEY_2004: Reference = {
  citation: 'Budney, A. J., Hughes, J. R., Moore, B. A., & Vandrey, R. (2004). Review of the validity and significance of cannabis withdrawal syndrome. American Journal of Psychiatry, 161(11), 1967–1977.',
};
const LADER_2011: Reference = { citation: 'Lader, M. (2011). Benzodiazepines revisited—will we ever learn? Addiction, 106(12), 2086–2109.' };
const SEDRONAR: Reference = {
  citation: 'Secretaría de Políticas Integrales sobre Drogas de la Nación Argentina. (2024). Línea 141: atención y orientación sobre consumos. SEDRONAR.',
  note: 'Gratuita, anónima y las 24 horas en todo el país. También orienta a familias.',
};

/** Aviso común: no cortar de golpe benzodiacepinas ni alcohol, y cuándo pedir ayuda urgente. */
const SUSTANCIAS =
  'Si tomas benzodiacepinas (pastillas para los nervios o para dormir) o alcohol todos los días desde hace tiempo, no los dejes de golpe: puede ser peligroso. Consulta antes a un médico. Si aparecen voces, paranoia intensa, confusión o ideas de no querer vivir, pide ayuda urgente: 911 o 135 (CABA y GBA; resto del país 0800-345-1435). La Línea 141 de SEDRONAR orienta gratis, de forma anónima y las 24 horas.';

export const SUSTANCIAS_CANNABIS_PACK: ContentPack = {
  id: 'sustancias-cannabis',

  // ================================================================== prácticas
  practices: [
    {
      id: 'para-que-lo-uso',
      title: '¿Para qué uso el cannabis?',
      family: 'attentional',
      skills: ['attention'],
      summary: 'Unos minutos para mirar, sin juzgarte, para qué usas el cannabis u otra sustancia: dormir, calmar la ansiedad, aburrirte menos o estar con otros.',
      mechanism: 'Ponerle nombre a la función del consumo lo saca del piloto automático. Si sabes qué necesidad cubre, puedes buscar otras formas de cubrirla.',
      evidenceLevel: 'moderada',
      evidence: [MILLER_2013, MARLATT_1985],
      cautions: SUSTANCIAS,
      howItWorks: [
        'Casi nadie consume «porque sí». El cannabis suele cumplir una función: ayudar a dormir, bajar la ansiedad, cortar el día, aburrirse menos o compartir con amigos. Entender esa función no es justificar nada. Es el primer paso para elegir.',
        'La entrevista motivacional propone mirar con curiosidad, sin sermones. Las razones que encuentras tú pesan más que las que te imponen (Miller y Rollnick, 2013).',
        'Esta práctica no es un diagnóstico ni te pide cambiar nada hoy. Sólo te invita a mirar.',
      ],
      tips: [
        'Piensa en las últimas dos semanas, no en toda tu vida.',
        'Puede haber más de una función. Anota todas las que aparezcan.',
        'Si usas otra sustancia, haz el mismo ejercicio con ella.',
      ],
      obstacles: [
        { q: 'Lo uso para todo.', a: 'Pasa mucho. Elige el momento más frecuente, por ejemplo la noche. Empieza por ahí.' },
        { q: 'No me parece un problema.', a: 'Puede que no lo sea. Mirar para qué lo usas sirve igual: te da información para decidir con más libertad.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Siéntate cómodo o cómoda. Respira despacio dos veces.', durationSec: 20, kind: 'breath' },
        { title: 'La última vez', instruction: 'Recuerda la última vez que consumiste. ¿Dónde estabas? ¿Qué hora era? ¿Con quién?', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que sentías', instruction: '¿Cómo te sentías justo antes? Puede ser cansancio, nervios, aburrimiento, tristeza o ganas de pasarla bien.', durationSec: 45, kind: 'reflection' },
        { title: 'Para qué', instruction: '¿Qué esperabas que hiciera por ti? ¿Dormir, calmarte, olvidarte de algo, compartir? Anótalo con una palabra.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Mira la palabra que anotaste. Dite: «Esto es lo que necesito. Hay más de una forma de cuidarlo».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'registro-de-consumo',
      title: 'Registro de una semana: cuándo y por qué',
      family: 'attentional',
      skills: ['attention'],
      summary: 'Anotar durante siete días cuándo consumes, con quién, qué sentías antes y cómo quedaste, para encontrar tus disparadores.',
      mechanism: 'Registrar muestra el patrón: horarios, lugares, personas y emociones que disparan el consumo. Con el patrón a la vista, el plan se arma sobre datos y no sobre culpa.',
      evidenceLevel: 'moderada',
      evidence: [MARLATT_1985, GATES_2016],
      cautions: SUSTANCIAS,
      howItWorks: [
        'Alan Marlatt mostró que el consumo se dispara en situaciones bastante previsibles. Ciertas emociones, lugares, personas u horarios aumentan las ganas. Las llamó situaciones de alto riesgo (Marlatt y Gordon, 1985).',
        'Anotar durante una semana es una parte común de las terapias que mejor funcionan para el cannabis, como la terapia cognitivo-conductual (Gates y colaboradores, 2016).',
        'Esta semana no hace falta cambiar nada. Primero se mira. Muchas personas descubren que el consumo se concentra en pocos momentos del día.',
      ],
      tips: [
        'Anota lo antes posible después de consumir. La memoria se borra rápido.',
        'Usa tus palabras para el cuánto: «uno», «la mitad», «más que otras veces». No hace falta medir.',
        'Anota también los días en que tuviste ganas y no consumiste. Son datos valiosos.',
        'Guarda el registro en un lugar privado si te preocupa que alguien lo vea.',
      ],
      obstacles: [
        { q: 'Me olvido de anotar.', a: 'Pon una alarma a la noche. Anota lo que recuerdes del día, aunque sea poco.' },
        { q: 'Me da culpa ver lo que escribo.', a: 'Míralo como un dato, igual que un registro del sueño. La culpa no ayuda a cambiar. La información sí.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Ten a mano el celular o un papel.', durationSec: 20, kind: 'breath' },
        { title: 'Cuándo y dónde', instruction: 'Anota el día, la hora y el lugar de la última vez que consumiste.', durationSec: 45, kind: 'instruction' },
        { title: 'Con quién', instruction: '¿Estabas sola, solo o con otras personas? ¿Quiénes? Anótalo.', durationSec: 30, kind: 'reflection' },
        { title: 'Antes', instruction: '¿Qué pasó justo antes? ¿Qué sentías? Por ejemplo, una pelea, el fin del trabajo o no poder dormir.', durationSec: 45, kind: 'reflection' },
        { title: 'Después', instruction: '¿Cómo quedaste una hora después? ¿Y a la mañana siguiente? Anota una palabra para cada momento.', durationSec: 45, kind: 'reflection' },
        { title: 'La semana', instruction: 'Repite este registro cada vez que consumas, durante siete días. Al final, marca los disparadores que más se repiten.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'balance-del-cannabis',
      title: 'Balance del cannabis',
      family: 'constructive',
      skills: ['resilience'],
      summary: 'Mirar con honestidad lo que te da y lo que te cuesta el cannabis u otra sustancia, y qué te gustaría cambiar, sin sermones.',
      mechanism: 'Poner en palabras tus razones, a favor y en contra, aclara la ambivalencia. Las razones dichas por uno mismo mueven más que las impuestas.',
      evidenceLevel: 'moderada',
      evidence: [
        { citation: 'Miller, W. R., & Rose, G. S. (2015). Motivational interviewing and decisional balance: Contrasting responses to client ambivalence. Behavioural and Cognitive Psychotherapy, 43(2), 129–141.', note: 'En personas muy ambivalentes, el balance de pros y contras puede bajar el compromiso con el cambio.' },
        MILLER_2013,
        GATES_2016,
        VOLKOW_2014,
      ],
      cautions: SUSTANCIAS,
      howItWorks: [
        'Querer y no querer cambiar a la vez es normal. La entrevista motivacional no discute con esa ambivalencia: la ayuda a mirar. Lo que da el cannabis es real, y lo que cuesta también (Miller y Rollnick, 2013).',
        'El balance mira cuatro cosas. Lo bueno de seguir igual. Lo malo de seguir igual. Lo bueno de cambiar. Lo difícil de cambiar. Ver las cuatro juntas ayuda a decidir.',
        'Las terapias que combinan entrevista motivacional y terapia cognitivo-conductual ayudan a consumir menos (Gates y colaboradores, 2016). El cambio puede ser dejar, hacer una pausa o reducir. La meta es tuya.',
      ],
      tips: [
        'Si al anotar pros y contras sientes que te convences más de seguir igual, no fuerces la lista. Vuelve a lo que te importa y a lo que te gustaría distinto: eso suele ayudar más que sumar argumentos.',
        'Mira también lo que pasa con el sueño, la memoria, las ganas de hacer cosas y la plata.',
        'Si usas cannabis para dormir o para la ansiedad, anota qué pasa cuando no lo usas.',
        'No hace falta decidir nada hoy. Este ejercicio es para ver claro.',
      ],
      obstacles: [
        { q: 'Todo el mundo fuma, no es para tanto.', a: 'Puede ser que en tu grupo sea común. El balance no compara con otros: mira qué te pasa a ti.' },
        { q: 'Me cuesta encontrar algo malo.', a: 'Está bien. Pregúntate qué diría alguien que te quiere y no te juzga. O qué cambió desde que empezaste.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en cómo consumiste en el último mes. Si hiciste el registro, tenlo a mano.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que te da', instruction: '¿Qué te da el cannabis? Dormir, calmarte, reírte, compartir. Anota dos o tres cosas con honestidad.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que te cuesta', instruction: '¿Qué te cuesta? Plata, memoria, ganas, sueño sin él, peleas o ansiedad al día siguiente. Anota lo que aparezca.', durationSec: 75, kind: 'reflection' },
        { title: 'Si cambias', instruction: 'Imagina un mes con menos o sin cannabis. ¿Qué ganarías? ¿Qué sería lo más difícil?', durationSec: 75, kind: 'reflection' },
        { title: 'Cuánto importa', instruction: 'Del cero al diez, ¿cuánto te importa cambiar algo? ¿Por qué no un número más bajo?', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Lee lo que escribiste. Subraya la razón que más te mueve. Guárdala para tu plan.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'plan-de-pausa-o-reduccion',
      title: 'Mi plan de pausa o de reducción',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Elegir una meta propia, como una pausa de unas semanas o consumir menos días, prever los momentos difíciles y saber qué esperar al dejar.',
      mechanism: 'Una meta concreta, un plan para los disparadores y saber que el malestar de los primeros días pasa hacen más fácil sostener el cambio.',
      evidenceLevel: 'moderada',
      evidence: [BUDNEY_2004, MARLATT_1985, GATES_2016, MILLER_2013],
      cautions: SUSTANCIAS,
      howItWorks: [
        'Hay muchas metas posibles. Una pausa de dos a cuatro semanas, consumir sólo algunos días, no consumir antes de estudiar, trabajar o manejar. La reducción de daños parte de donde estás y valora cada paso.',
        'Al dejar el cannabis después de un uso diario, muchas personas sienten irritabilidad, ansiedad, inquietud, menos apetito, sueño difícil y sueños muy vívidos. Suele empezar entre el primer y el tercer día y baja en una o dos semanas (Budney y colaboradores, 2004). Es incómodo, pero pasa.',
        'Las situaciones de riesgo se pueden prever. Si tienes un plan listo para cada una, no dependes de la fuerza de voluntad en el momento (Marlatt y Gordon, 1985).',
        'Esto vale para el cannabis. Con las benzodiacepinas o el alcohol de uso diario es distinto: dejarlos de golpe puede ser peligroso y se hace con un médico.',
      ],
      tips: [
        'Una pausa con fecha de fin suele ser más fácil de empezar. Al terminar, decides con más información.',
        'Saca de tu casa lo que tengas, o pide a alguien que lo guarde, antes de empezar.',
        'Cuenta tu plan a una persona de confianza.',
        'Si no puedes sostener la meta varias veces, es información, no un fracaso. Consulta a un profesional o a la Línea 141.',
      ],
      obstacles: [
        { q: 'Sin fumar no duermo.', a: 'Las primeras noches suelen costar. Mira la práctica de las noches sin cannabis y el programa Dormir mejor. Con los días, el sueño se acomoda.' },
        { q: 'Mis amigos fuman siempre.', a: 'Ten una frase lista, como «estoy haciendo una pausa». Propón planes donde no se consuma, al menos estas semanas.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Recuerda la razón que subrayaste en tu balance.', durationSec: 30, kind: 'breath' },
        { title: 'Mi meta', instruction: 'Elige una meta concreta. Por ejemplo: «Tres semanas sin cannabis» o «No consumo antes de las diez de la noche ni los días de semana».', durationSec: 75, kind: 'reflection' },
        { title: 'Mis disparadores', instruction: 'Mira tu registro. Elige los dos momentos donde más te cuesta. Puede ser la noche, el fin de semana o después de una pelea.', durationSec: 60, kind: 'reflection' },
        { title: 'Si pasa esto', instruction: 'Para cada momento, escribe: «Si pasa esto, entonces hago aquello». Por ejemplo: «Si no me duermo, me levanto y leo».', durationSec: 75, kind: 'reflection' },
        { title: 'Los primeros días', instruction: 'Anota qué harás si aparecen irritabilidad, nervios o mal sueño. Recuerda que suelen bajar en una o dos semanas.', durationSec: 60, kind: 'reflection' },
        { title: 'Cuándo pedir ayuda', instruction: 'Anota tus señales para consultar. Por ejemplo, no poder sostener la meta o sentirte muy mal. Agenda la Línea 141.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Elige el día de inicio y una fecha para revisar el plan. Guárdalo donde lo veas.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'noches-sin-cannabis',
      title: 'Noches sin cannabis',
      family: 'constructive',
      skills: ['resilience'],
      summary: 'Un plan para las primeras noches de una pausa, cuando cuesta dormirse y los sueños se vuelven intensos, sin volver a fumar para dormir.',
      mechanism: 'Saber que el mal sueño de la pausa es esperable baja la alarma. Una rutina de bajada y levantarse si no llega el sueño evitan que la cama se asocie con la lucha.',
      evidenceLevel: 'preliminar',
      evidence: [BUDNEY_2004, VOLKOW_2014],
      cautions: SUSTANCIAS,
      howItWorks: [
        'Mucha gente usa cannabis para dormir. Al principio ayuda a dormirse. Con el uso diario aparece la tolerancia, y cada vez hace falta más para lo mismo.',
        'Al dejar, el sueño suele empeorar unos días: cuesta dormirse, te despiertas más y los sueños son muy vívidos (Budney y colaboradores, 2004). No significa que no puedas dormir sin cannabis. Es el cuerpo reacomodándose.',
        'Lo que más ayuda es lo mismo que en el insomnio: horarios fijos, una rutina de bajada y no quedarse en la cama dando vueltas. Si el insomnio sigue más de unas semanas, el programa Dormir mejor y una consulta pueden ayudarte.',
      ],
      tips: [
        'Avisa a quien duerme contigo que estas noches pueden ser movidas.',
        'Evita el café y el mate desde la tarde.',
        'Los sueños vívidos de la pausa son comunes y suelen bajar con los días.',
        'No reemplaces el cannabis por pastillas para dormir sin receta ni por alcohol.',
      ],
      obstacles: [
        { q: 'Llevo varias noches casi sin dormir.', a: 'Es agotador. Mantén el mismo horario para levantarte, aunque hayas dormido poco. Si dura más de dos semanas, consulta a un médico.' },
        { q: 'Tengo pesadillas muy fuertes.', a: 'Suelen ser parte de la pausa. Al despertar, siente los pies en el piso y respira lento. Si te asustan mucho o no bajan, consulta.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Hazla una hora antes de ir a la cama. Respira despacio, con el aire saliendo más largo de lo que entra.', durationSec: 40, kind: 'breath' },
        { title: 'Lo esperable', instruction: 'Dite: «Estas noches pueden costar. Es la pausa, no soy yo. Va a pasar».', durationSec: 30, kind: 'breath' },
        { title: 'Bajar luces', instruction: 'Baja las luces y deja el celular fuera del cuarto. Elige algo tranquilo: leer, música suave o una ducha tibia.', durationSec: 45, kind: 'instruction' },
        { title: 'Si no llega', instruction: 'Si en la cama pasan unos veinte minutos sin sueño, levántate. Haz algo tranquilo con poca luz y vuelve cuando tengas sueño.', durationSec: 45, kind: 'instruction' },
        { title: 'Si aparecen ganas', instruction: 'Si aparecen ganas de fumar para dormir, nota dónde las sientes. Respira con ellas, como una ola que sube y baja.', durationSec: 45, kind: 'breath' },
        { title: 'A la mañana', instruction: 'Levántate a la misma hora, aunque hayas dormido poco. Anota cómo fue la noche en el diario del sueño.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'ansiedad-sin-consumir',
      title: 'Cuando la ansiedad pide consumir',
      family: 'attentional',
      skills: ['attention', 'resilience'],
      summary: 'Un par de minutos para bajar la ansiedad con el cuerpo cuando aparecen ganas de consumir para calmarte, y elegir qué hacer después.',
      mechanism: 'Una exhalación larga y anclar la atención en el cuerpo bajan la activación. Ganar unos minutos separa la ansiedad del gesto automático de consumir.',
      evidenceLevel: 'preliminar',
      evidence: [BOWEN_2014, BOWEN_2009, VOLKOW_2014],
      cautions: SUSTANCIAS,
      micro: true,
      howItWorks: [
        'El cannabis puede calmar un rato. Pero si se usa siempre para la ansiedad, el cuerpo no aprende otras formas de bajarla. Y en algunas personas, sobre todo con mucho THC, la ansiedad o la paranoia empeoran (Volkow y colaboradores, 2014).',
        'Esta práctica junta dos cosas. Calmar el cuerpo con la respiración y los pies, y mirar las ganas sin seguirlas. La prevención de recaídas basada en mindfulness, que entrena justamente eso, redujo los días de consumo a largo plazo (Bowen y colaboradores, 2014).',
      ],
      tips: [
        'Practícala también en momentos tranquilos, para que te salga sola cuando la necesites.',
        'Si la ansiedad es muy fuerte o seguida, consulta. Hay tratamientos que funcionan.',
        'Para trabajar más las ganas, usa la práctica de surfear el impulso.',
      ],
      obstacles: [
        { q: 'No baja nada.', a: 'Repite la exhalación larga un minuto más. Cambia de lugar o llama a alguien. Si sientes que pierdes el control o tienes ideas de hacerte daño, llama al 135 o al 911.' },
      ],
      steps: [
        { title: 'Parar', instruction: 'Frena lo que estás haciendo. Dite: «Apareció la ansiedad. Y aparecieron las ganas».', durationSec: 20, kind: 'instruction' },
        { title: 'Exhalar largo', instruction: 'Toma aire por la nariz. Suéltalo despacio por la boca, más largo de lo que entró. Repite cuatro veces.', durationSec: 40, kind: 'breath' },
        { title: 'Los pies', instruction: 'Siente las plantas de los pies en el piso. Empuja suave hacia abajo. Nota que estás aquí.', durationSec: 30, kind: 'breath' },
        { title: 'La ola', instruction: '¿Dónde sientes las ganas? Míralas como una ola. Suben, llegan arriba y bajan. No tienes que hacer nada con ellas.', durationSec: 40, kind: 'breath' },
        { title: 'Elegir', instruction: 'Elige algo para los próximos diez minutos: caminar, tomar agua, escribirle a alguien o salir al balcón.', durationSec: 30, kind: 'reflection' },
      ],
    },
  ],

  meta: {
    'para-que-lo-uso': { level: 'iniciacion', approaches: ['motivacional'], module: 'salud' },
    'registro-de-consumo': { level: 'iniciacion', approaches: ['tcc', 'motivacional'], module: 'habitos', prerequisites: ['para-que-lo-uso'] },
    'balance-del-cannabis': { level: 'intermedio', approaches: ['motivacional'], module: 'salud', prerequisites: ['para-que-lo-uso'] },
    'plan-de-pausa-o-reduccion': { level: 'intermedio', approaches: ['motivacional', 'tcc'], module: 'salud', prerequisites: ['balance-del-cannabis', 'registro-de-consumo'] },
    'noches-sin-cannabis': { level: 'intermedio', approaches: ['tcc', 'relajacion'], module: 'sueno', prerequisites: ['rutina-bajada-dormir'] },
    'ansiedad-sin-consumir': { level: 'intermedio', approaches: ['mindfulness', 'relajacion'], module: 'afrontamiento', prerequisites: ['plantas-de-los-pies'] },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'cannabis-sin-sermones',
      title: 'Cannabis: lo que da, lo que cuesta y cómo cambiar a tu ritmo',
      subtitle: 'Dormir y calmar la ansiedad con cannabis, tolerancia, dependencia, lo que se siente al dejar y cuándo consultar.',
      category: 'Salud y trabajo',
      readingMin: 8,
      keyPoints: [
        'Mucha gente usa cannabis para dormir o calmar la ansiedad. Con el uso diario aparece la tolerancia.',
        'Una parte de quienes lo usan desarrolla dependencia. El riesgo sube si se empieza en la adolescencia o se usa a diario.',
        'Al dejar un uso diario pueden aparecer irritabilidad, ansiedad y mal sueño. Suelen bajar en una o dos semanas.',
        'Querer y no querer cambiar a la vez es normal. Pausar, reducir o dejar son metas válidas.',
        'Voces, paranoia intensa o ideas de no querer vivir son una urgencia: 911 o 135.',
      ],
      sections: [
        {
          heading: 'Para qué se usa',
          paragraphs: [
            'El cannabis suele cumplir una función. Muchas personas lo usan para dormir, para bajar la ansiedad, para cortar con el día o para compartir con amigos. Entender esa función ayuda a buscar otras formas de cubrirla.',
            'Al principio puede ayudar a dormirse o a relajarse. El problema aparece cuando se vuelve la única forma de lograrlo.',
          ],
        },
        {
          heading: 'Tolerancia y dependencia',
          paragraphs: [
            'Con el uso frecuente aparece la tolerancia: hace falta más para sentir lo mismo, y sin cannabis cuesta dormir o calmarse. Es una adaptación del cerebro.',
            'Alrededor de una de cada diez personas que prueban el cannabis desarrolla dependencia. El riesgo es mayor si se empieza en la adolescencia y mucho mayor con el uso diario (Volkow y colaboradores, 2014). La dependencia no se define sólo por cuánto se consume. Se nota en que cuesta parar, en que se consume aunque traiga problemas y en que se dejan otras cosas de lado.',
            'El uso intenso también se asocia con problemas de memoria y de atención, con menos ganas de hacer cosas y, en personas vulnerables, con síntomas psicóticos (Volkow y colaboradores, 2014). El riesgo de psicosis es mayor si se empieza joven, si el producto tiene mucho THC o si hay antecedentes en la familia.',
          ],
        },
        {
          heading: 'Lo que se siente al dejar',
          paragraphs: [
            'Después de un uso diario, al dejar pueden aparecer irritabilidad, nervios, inquietud, menos apetito, sueño difícil y sueños muy vívidos. Suele empezar entre el primer y el tercer día y bajar en una o dos semanas (Budney y colaboradores, 2004). El sueño a veces tarda un poco más.',
            'Este malestar es incómodo, pero no es peligroso. Saber que pasa ayuda a no volver a consumir sólo para que se vaya. Un plan para las noches y para los momentos de ansiedad hace mucha diferencia.',
          ],
        },
        {
          heading: 'Cambiar desde tus razones',
          paragraphs: [
            'La entrevista motivacional parte de la ambivalencia: puedes valorar lo que el cannabis te da y, a la vez, querer cambiar algo (Miller y Rollnick, 2013). Los sermones suelen generar más resistencia. Tus propias razones pesan más.',
            'La reducción de daños acepta metas distintas. Una pausa de unas semanas, consumir menos días, no consumir antes de manejar, estudiar o trabajar, o dejar del todo. Registrar el consumo y sus disparadores ayuda a armar un plan realista (Marlatt y Gordon, 1985).',
            'Las terapias psicológicas, sobre todo la terapia cognitivo-conductual combinada con entrevista motivacional, ayudan a consumir menos (Gates y colaboradores, 2016). Entrenar la atención plena para las ganas también ayuda a sostener el cambio (Bowen y colaboradores, 2014).',
          ],
        },
        {
          heading: 'Cuándo consultar',
          paragraphs: [
            'Conviene consultar si no logras reducir aunque quieras, si sólo puedes dormir o calmarte con cannabis, si el consumo trae problemas en el estudio, el trabajo o la familia, o si usas otras sustancias además.',
            'Pide ayuda urgente si aparecen voces, paranoia intensa, confusión o ideas de no querer vivir. Llama al 911 o al 135 (CABA y GBA; resto del país 0800-345-1435). La Línea 141 de SEDRONAR orienta gratis, de forma anónima y las 24 horas.',
          ],
        },
      ],
      caveat: {
        title: 'Primero, tu seguridad',
        body: 'Este artículo informa; no reemplaza una evaluación profesional ni da indicaciones de consumo. Si además tomas benzodiacepinas o alcohol todos los días, no los dejes de golpe: consulta antes a un médico. Si estás embarazada, tienes antecedentes de psicosis en la familia o tomas medicación, habla con tu equipo de salud.',
      },
      diagram: {
        title: 'Cómo se arma el círculo del cannabis para dormir',
        nodes: ['Ansiedad o insomnio', 'Consumo para calmar o dormir', 'Alivio rápido', 'Tolerancia: hace falta más', 'Sin cannabis cuesta más dormir y calmarse'],
        caption: 'Una pausa con un plan para las noches y para la ansiedad corta el círculo. Los primeros días cuestan y después el cuerpo se reacomoda.',
      },
      related: {
        practices: ['para-que-lo-uso', 'registro-de-consumo', 'balance-del-cannabis', 'plan-de-pausa-o-reduccion', 'noches-sin-cannabis', 'ansiedad-sin-consumir', 'surfear-impulso', 'mapa-de-situaciones-de-riesgo'],
        articles: ['otras-sustancias', 'entrevista-motivacional', 'prevenir-recaidas', 'insomnio-tcc', 'preocupacion-y-ansiedad'],
      },
      references: [VOLKOW_2014, BUDNEY_2004, GATES_2016, MILLER_2013, MARLATT_1985, BOWEN_2014, SEDRONAR],
    },
    {
      id: 'otras-sustancias',
      title: 'Cocaína, estimulantes y pastillas sin receta: una mirada general',
      subtitle: 'Qué riesgos tienen, por qué las benzodiacepinas no se dejan de golpe y dónde pedir ayuda, sin juzgar.',
      category: 'Salud y trabajo',
      readingMin: 6,
      keyPoints: [
        'La cocaína y otros estimulantes dan energía un rato y después dejan un bajón, insomnio y ansiedad.',
        'Las benzodiacepinas sin receta pueden dar tolerancia y dependencia. Con uso diario prolongado no se dejan de golpe.',
        'Mezclar sustancias, también con alcohol, aumenta mucho los riesgos.',
        'Dolor de pecho, convulsiones, confusión, paranoia intensa o ideas de no querer vivir son una urgencia: 911.',
        'La Línea 141 de SEDRONAR orienta gratis, de forma anónima y las 24 horas.',
      ],
      sections: [
        {
          heading: 'Cocaína y estimulantes',
          paragraphs: [
            'La cocaína y otros estimulantes aceleran el cuerpo y la mente. Dan energía, confianza y ganas de hablar por un rato. Después suele llegar un bajón, con cansancio, tristeza, irritabilidad e insomnio. Ese bajón empuja a consumir otra vez.',
            'También exigen mucho al corazón y pueden dar ansiedad fuerte, ataques de pánico o paranoia. Si aparecen dolor de pecho, falta de aire, convulsiones o confusión, es una emergencia: llama al 911.',
          ],
        },
        {
          heading: 'Benzodiacepinas sin receta',
          paragraphs: [
            'Las benzodiacepinas son pastillas para la ansiedad o para dormir, como las que muchas personas llaman «pastillas para los nervios». Actúan rápido, y por eso es fácil empezar a usarlas sin control médico, conseguirlas de otra persona o tomar más de lo indicado.',
            'Con el uso diario y prolongado aparecen tolerancia y dependencia. Dejarlas de golpe puede ser peligroso, incluso con convulsiones (Lader, 2011). Si las usas todos los días desde hace tiempo, no las cortes por tu cuenta: consulta a un médico para armar un plan. Lo mismo vale para el alcohol de uso diario.',
          ],
        },
        {
          heading: 'Mezclas y reducción de daños',
          paragraphs: [
            'Combinar sustancias, o mezclarlas con alcohol, aumenta mucho los riesgos. Los efectos pueden sumarse de formas difíciles de prever. Si consumes, no manejes y evita estar en un lugar donde nadie pueda ayudarte si te sientes mal.',
            'La reducción de daños no exige dejar todo para empezar a cuidarte. Las mismas herramientas de este tema sirven para cualquier sustancia: mirar para qué la usas, registrar los disparadores, hacer un balance y armar un plan (Miller y Rollnick, 2013).',
          ],
        },
        {
          heading: 'Dónde pedir ayuda',
          paragraphs: [
            'En Argentina, la Línea 141 de SEDRONAR es gratuita, anónima y atiende las 24 horas. También orienta a familias. Un profesional de salud mental o un médico pueden acompañarte, sin juzgarte.',
            'Si aparecen voces, paranoia intensa o ideas de no querer vivir, pide ayuda urgente: 911 o 135 (CABA y GBA; resto del país 0800-345-1435). Para el alcohol, puedes completar el AUDIT-C en Evaluaciones y leer el artículo sobre reducir daños.',
          ],
        },
      ],
      caveat: {
        title: 'Esto no es una guía de consumo',
        body: 'Este artículo da información general de salud. No indica dosis, combinaciones ni formas de uso. Si usas benzodiacepinas o alcohol todos los días, no los dejes de golpe: consulta antes a un médico. Ante una emergencia, llama al 911.',
      },
      related: {
        practices: ['para-que-lo-uso', 'registro-de-consumo', 'balance-del-cannabis', 'antes-de-cambiar-la-medicacion', 'surfear-impulso'],
        articles: ['cannabis-sin-sermones', 'alcohol-reducir-danos', 'medicacion-psiquiatrica', 'prevenir-recaidas'],
      },
      references: [LADER_2011, MILLER_2013, SEDRONAR],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'pausa-del-cannabis',
      title: 'Una pausa con el cannabis',
      subtitle: 'Cuatro semanas para mirar tu consumo, probar una pausa o reducir, y sostener lo que elijas',
      description:
        'Mirarás para qué usas el cannabis y registrarás tus disparadores. Harás un balance, elegirás una meta propia y prepararás las noches y los momentos de ansiedad. Al final, armarás un plan para sostener el cambio. No reemplaza un tratamiento. Si tomas benzodiacepinas o alcohol todos los días, no los dejes de golpe: consulta antes. Si aparecen voces, paranoia intensa o ideas de no querer vivir, llama al 911 o al 135.',
      basis: 'Miller y Rollnick (2013); Marlatt y Gordon (1985); Budney y colaboradores (2004); Gates y colaboradores (2016); Bowen y colaboradores (2014).',
      rhythm: '10 minutos, 4 o 5 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Mirar',
          focus: 'Para qué lo uso y cuándo',
          description: 'Leerás sobre el cannabis, mirarás qué función cumple para ti y harás un registro de siete días.',
          practiceIds: ['para-que-lo-uso', 'registro-de-consumo'],
          articleIds: ['cannabis-sin-sermones'],
          journalType: 'analisis-cadena',
        },
        {
          title: 'Semana 2 · Decidir',
          focus: 'Balance y meta propia',
          description: 'Harás el balance de lo que te da y te cuesta, y elegirás una pausa o una reducción como experimento.',
          practiceIds: ['balance-del-cannabis', 'plan-de-pausa-o-reduccion'],
          articleIds: [],
          journalType: 'valores',
        },
        {
          title: 'Semana 3 · Atravesar',
          focus: 'Noches, ansiedad y ganas',
          description: 'Usarás tu plan para las noches y para los momentos de ansiedad, y practicarás dejar pasar las ganas.',
          practiceIds: ['noches-sin-cannabis', 'ansiedad-sin-consumir', 'surfear-impulso'],
          articleIds: [],
          journalType: 'diario-sueno',
        },
        {
          title: 'Semana 4 · Sostener',
          focus: 'Situaciones de riesgo y tropiezos',
          description: 'Revisarás tus situaciones de riesgo, prepararás qué hacer si tienes un tropiezo y decidirás cómo sigues.',
          practiceIds: ['mapa-de-situaciones-de-riesgo', 'despues-de-un-lapsus'],
          articleIds: ['otras-sustancias'],
          journalType: 'experimento',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-cannabis-para-dormir',
      title: '¿Cannabis para dormir?',
      subtitle: 'Por qué ayuda al principio y qué pasa con el tiempo.',
      slides: [
        { heading: 'Al principio ayuda', text: 'Mucha gente usa cannabis para dormirse. Al principio puede ayudar a relajarse y a conciliar el sueño.' },
        { heading: 'Tolerancia', text: 'Con el uso diario, el cuerpo se acostumbra. Hace falta más para lo mismo. Y sin cannabis cuesta más dormir.' },
        { heading: 'Al dejar', text: 'Las primeras noches suelen ser malas. Cuesta dormirse y los sueños son muy vívidos. Es esperable y pasa con los días.' },
        { heading: 'Qué ayuda', text: 'Horarios fijos, luces bajas, el celular fuera del cuarto. Si no te duermes, levántate un rato y vuelve con sueño.' },
        { heading: 'Si sigue', text: 'Si el insomnio dura más de unas semanas, mira el programa Dormir mejor. Y consulta a un médico.' },
      ],
      related: { practices: ['noches-sin-cannabis', 'rutina-bajada-dormir'], articles: ['cannabis-sin-sermones', 'insomnio-tcc'] },
      references: [BUDNEY_2004, VOLKOW_2014],
    },
    {
      id: 'pildora-tolerancia-y-abstinencia',
      title: 'Lo que se siente al dejar',
      subtitle: 'Tolerancia, abstinencia y por qué los primeros días cuestan.',
      slides: [
        { heading: 'Tolerancia', text: 'Con el uso seguido, el cerebro se adapta. Hace falta más para sentir lo mismo. Eso se llama tolerancia.' },
        { heading: 'Al parar', text: 'Al dejar un uso diario pueden aparecer irritabilidad, nervios, poco hambre y mal sueño.' },
        { heading: 'Cuánto dura', text: 'Suele empezar en uno a tres días. Después baja, casi siempre en una o dos semanas. Es incómodo, pero pasa.' },
        { heading: 'Un plan', text: 'Prepara qué harás en las noches y en los momentos de ansiedad. Cuenta tu plan a alguien de confianza.' },
        { heading: 'Otras sustancias', text: 'Con las pastillas para los nervios o el alcohol de todos los días es distinto. No los dejes de golpe. Consulta antes a un médico.' },
      ],
      related: { practices: ['plan-de-pausa-o-reduccion', 'ansiedad-sin-consumir'], articles: ['cannabis-sin-sermones', 'otras-sustancias'] },
      references: [BUDNEY_2004, LADER_2011],
    },
    {
      id: 'pildora-pausa-de-cannabis',
      title: 'Una pausa como experimento',
      subtitle: 'Probar unas semanas sin cannabis para ver qué cambia.',
      slides: [
        { heading: 'Sin sermones', text: 'No hace falta decidir para siempre. Puedes probar una pausa de unas semanas y ver qué pasa.' },
        { heading: 'Mirar antes', text: 'Durante una semana, anota cuándo consumes y qué sentías antes. Así ves tus disparadores.' },
        { heading: 'Tu meta', text: 'Elige una meta clara, con fecha de inicio y de fin. Puede ser una pausa o consumir menos días.' },
        { heading: 'Si pasa esto', text: 'Para cada momento difícil, arma una frase: «Si pasa esto, entonces hago aquello». Tenla a mano.' },
        { heading: 'Al terminar', text: 'Mira cómo dormiste, cómo estuvo tu ánimo y tu plata. Con esos datos decides cómo seguir.' },
      ],
      related: { practices: ['registro-de-consumo', 'balance-del-cannabis', 'plan-de-pausa-o-reduccion'], articles: ['cannabis-sin-sermones'] },
      references: [MILLER_2013, MARLATT_1985],
    },
    {
      id: 'pildora-cuando-consultar-consumo',
      title: 'Cuándo pedir ayuda',
      subtitle: 'Señales de que conviene consultar por el consumo.',
      slides: [
        { heading: 'No es debilidad', text: 'Pedir ayuda por el consumo no es fracasar. Hay tratamientos que funcionan y profesionales que no juzgan.' },
        { heading: 'Consultar', text: 'Consulta si no logras reducir aunque quieras, o si sólo puedes dormir o calmarte cuando consumes.' },
        { heading: 'También', text: 'Consulta si el consumo trae problemas en tu casa, el estudio o el trabajo, o si mezclas sustancias.' },
        { heading: 'Urgente', text: 'Voces, paranoia muy fuerte, confusión o ideas de no querer vivir son una urgencia. Llama al 911 o al 135.' },
        { heading: 'Línea 141', text: 'La Línea 141 de SEDRONAR es gratis, anónima y atiende las 24 horas. También orienta a familias.' },
      ],
      related: { practices: ['para-que-lo-uso', 'balance-del-cannabis'], articles: ['cannabis-sin-sermones', 'otras-sustancias'] },
      references: [VOLKOW_2014, GATES_2016, SEDRONAR],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'tolerancia', term: 'Tolerancia', definition: 'Adaptación del cuerpo a una sustancia usada con frecuencia: hace falta más para sentir el mismo efecto.', articleId: 'cannabis-sin-sermones' },
    { id: 'abstinencia-de-cannabis', term: 'Abstinencia de cannabis', definition: 'Malestar que puede aparecer al dejar un uso diario: irritabilidad, nervios, poco apetito, mal sueño y sueños vívidos. Suele bajar en una o dos semanas.', practiceId: 'plan-de-pausa-o-reduccion' },
    { id: 'insomnio-de-rebote', term: 'Insomnio de rebote', definition: 'Sueño peor de lo habitual durante unos días al dejar algo que se usaba para dormir, como el cannabis o algunas pastillas.', practiceId: 'noches-sin-cannabis' },
    { id: 'disparador-de-consumo', term: 'Disparador de consumo', definition: 'Situación, emoción, lugar, persona u horario que despierta las ganas de consumir. Conocer los tuyos ayuda a armar un plan.', practiceId: 'registro-de-consumo' },
    { id: 'dependencia-de-sustancias', term: 'Dependencia de una sustancia', definition: 'Cuando cuesta parar, se consume aunque traiga problemas y se dejan otras cosas de lado. No se define sólo por la cantidad.', articleId: 'cannabis-sin-sermones', seeAlso: { href: '/evaluaciones', label: 'Evaluaciones (AUDIT-C para el alcohol)' } },
  ],
};
