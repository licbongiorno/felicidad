import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Duelo por una mascota»:
 *  - por qué duele tanto: el vínculo de apego con un animal (Archer; Field y colaboradores);
 *  - el duelo no reconocido y el «era solo un perro» (Doka);
 *  - la decisión de la eutanasia y la culpa, con el sesgo retrospectivo (Fischhoff);
 *  - una despedida propia, distinta del ritual de recuerdo repetible que ya existe (Norton y Gino);
 *  - cuándo y si adoptar otra mascota (recomendación clínica, con poca investigación);
 *  - las personas mayores que viven solas con su mascota (rutina, soledad y contactos);
 *  - guía para familias: suele ser la primera muerte que vive un chico (Speece y Brent; Kaufman y Kaufman).
 *
 * No repite el duelo general (tareas de Worden, proceso dual, carta, ritual de recuerdo,
 * ola de duelo, pedir ayuda): remite a esas prácticas cuando conviene.
 * Seguridad: cada práctica con aviso remite a consulta si el duelo no afloja y nombra
 * el 135 y el botón Ayuda ante ideas de morir.
 */

const DOKA_1989: Reference = { citation: 'Doka, K. J. (Ed.) (1989). Disenfranchised grief: Recognizing hidden sorrow. Lexington Books.' };
const DOKA_2002: Reference = { citation: 'Doka, K. J. (Ed.) (2002). Disenfranchised grief: New directions, challenges, and strategies for practice. Research Press.' };
const ARCHER_1997: Reference = { citation: 'Archer, J. (1997). Why do people love their pets? Evolution and Human Behavior, 18(4), 237–259.' };
const FIELD_2009: Reference = { citation: 'Field, N. P., Orsini, L., Gavish, R., & Packman, W. (2009). Role of attachment in response to pet loss. Death Studies, 33(4), 334–355.' };
const PACKMAN_2011: Reference = { citation: 'Packman, W., Field, N. P., Carmack, B. J., & Ronen, R. (2011). Continuing bonds and psychosocial adjustment in pet loss. Journal of Loss and Trauma, 16(4), 341–357.' };
const WROBEL_2003: Reference = { citation: 'Wrobel, T. A., & Dye, A. L. (2003). Grieving pet death: Normative, gender, and attachment issues. Omega: Journal of Death and Dying, 47(4), 385–393.' };
const LAGONI_1994: Reference = { citation: 'Lagoni, L., Butler, C., & Hetts, S. (1994). The human-animal bond and grief. W. B. Saunders.' };
const ADAMS_2000: Reference = {
  citation: 'Adams, C. L., Bonnett, B. N., & Meek, A. H. (2000). Predictors of owner response to companion animal death in 177 clients from 14 practices in Ontario. Journal of the American Veterinary Medical Association, 217(9), 1303–1309.',
};
const FISCHHOFF_1975: Reference = {
  citation: 'Fischhoff, B. (1975). Hindsight ≠ foresight: The effect of outcome knowledge on judgment under uncertainty. Journal of Experimental Psychology: Human Perception and Performance, 1(3), 288–299.',
};
const NORTON_2014: Reference = {
  citation: 'Norton, M. I., & Gino, F. (2014). Rituals alleviate grieving for loved ones, lovers, and lotteries. Journal of Experimental Psychology: General, 143(1), 266–272.',
  doi: '10.1037/a0031772',
};
const KLASS_1996: Reference = { citation: 'Klass, D., Silverman, P. R., & Nickman, S. L. (Eds.) (1996). Continuing bonds: New understandings of grief. Taylor & Francis.' };
const STROEBE_1999: Reference = { citation: 'Stroebe, M., & Schut, H. (1999). The dual process model of coping with bereavement: Rationale and description. Death Studies, 23(3), 197–224.' };
const WORDEN_2018: Reference = { citation: 'Worden, J. W. (2018). Grief counseling and grief therapy: A handbook for the mental health practitioner (5.ª ed.). Springer.' };
const SHEAR_2015: Reference = { citation: 'Shear, M. K. (2015). Complicated grief. New England Journal of Medicine, 372(2), 153–160.', doi: '10.1056/NEJMcp1315618' };
const MCNICHOLAS_2005: Reference = {
  citation: 'McNicholas, J., Gilbey, A., Rennie, A., Ahmedzai, S., Dono, J.-A., & Ormerod, E. (2005). Pet ownership and human health: A brief review of evidence and issues. BMJ, 331(7527), 1252–1254.',
};
const HOLT_LUNSTAD_2010: Reference = {
  citation: 'Holt-Lunstad, J., Smith, T. B., & Layton, J. B. (2010). Social relationships and mortality risk: A meta-analytic review. PLoS Medicine, 7(7), e1000316.',
  doi: '10.1371/journal.pmed.1000316',
};
const SPEECE_1984: Reference = {
  citation: 'Speece, M. W., & Brent, S. B. (1984). Children’s understanding of death: A review of three components of a death concept. Child Development, 55(5), 1671–1686.',
};
const KAUFMAN_2006: Reference = { citation: 'Kaufman, K. R., & Kaufman, N. D. (2006). And then the dog died. Death Studies, 30(1), 61–76.' };
const DYREGROV_2008: Reference = { citation: 'Dyregrov, A. (2008). Grief in children: A handbook for adults (2.ª ed.). Jessica Kingsley.' };

/** Aviso común: cuándo consultar y a quién llamar. */
const CUIDADO =
  'Si después de muchos meses el dolor no afloja o te impide vivir, consulta a un profesional de salud mental. Si piensas en morir o en hacerte daño, llama al 135 (CABA y GBA) o al 0800-345-1435 desde el resto del país, o usa el botón Ayuda de la app. Ante una urgencia, llama al 911.';

export const DUELO_MASCOTA_PACK: ContentPack = {
  id: 'duelo-mascota',

  // ================================================================== prácticas
  practices: [
    {
      id: 'lo-que-era-para-mi',
      title: 'Lo que era para mí',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Poner en palabras qué lugar ocupaba tu mascota en tu vida, para entender por qué duele tanto y darte permiso de sentirlo.',
      mechanism: 'Nombrar los lugares que ocupaba el animal, como compañía, rutina o consuelo, muestra el tamaño real de la pérdida y baja la vergüenza por sentirla.',
      evidenceLevel: 'preliminar',
      evidence: [ARCHER_1997, FIELD_2009],
      howItWorks: [
        'Con una mascota se forma un vínculo de apego verdadero. El animal da compañía, cariño sin condiciones y una rutina diaria. Por eso su muerte puede doler tanto como otras pérdidas (Archer, 1997; Field y colaboradores, 2009).',
        'Muchas veces el entorno no lo ve así, y una parte tuya tampoco. Escribir lo que era para ti no achica ni agranda nada. Sólo pone delante lo que perdiste.',
      ],
      tips: [
        'Piensa en momentos concretos: quién te esperaba en la puerta, quién dormía a tus pies.',
        'No hace falta llorar ni no llorar. Sólo nota lo que aparece.',
        'Si quieres, ten cerca una foto o su collar.',
      ],
      obstacles: [{ q: 'Me da vergüenza sufrir tanto por un animal.', a: 'Es muy común sentir eso. El dolor muestra cuánto lo quisiste, no que exageres.' }],
      steps: [
        { title: 'Llegar', instruction: 'Siéntate cómodo. Respira despacio tres veces y nota el apoyo del cuerpo.', durationSec: 30, kind: 'breath' },
        { title: 'Su nombre', instruction: 'Escribe su nombre. Debajo, anota cuántos años vivió contigo.', durationSec: 30, kind: 'reflection' },
        { title: 'Su lugar en el día', instruction: '¿Qué momentos del día compartían? La mañana, los paseos, la comida, la noche. Anota tres.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que te daba', instruction: '¿Qué te daba que nadie más te daba igual? Compañía, risa, calma, un motivo para salir.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que extrañas', instruction: 'Escribe una cosa chica que extrañas mucho. Un ruido, un olor, una costumbre suya.', durationSec: 45, kind: 'reflection' },
        { title: 'Darte permiso', instruction: 'Pon una mano en el pecho. Dite: «Lo quise mucho. Tiene sentido que me duela».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'despedida-de-mi-mascota',
      title: 'Una despedida a su medida',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Pensar una despedida para tu mascota y decidir qué hacer con sus cosas, a tu ritmo y con quien quieras.',
      mechanism: 'Una despedida da un principio y un final al dolor. Los rituales, aunque sean inventados, bajan la pena después de una pérdida.',
      evidenceLevel: 'preliminar',
      evidence: [NORTON_2014, LAGONI_1994, KLASS_1996],
      howItWorks: [
        'La muerte de una mascota casi nunca tiene un velorio ni un lugar para reunirse. Eso deja el dolor sin forma. En una serie de experimentos, hacer un ritual después de una pérdida bajó la pena, incluso con rituales creados en el momento (Norton y Gino, 2014).',
        'Esta práctica es para la despedida, que pasa una vez. Si después quieres un gesto para fechas especiales, sigue con «Un ritual de recuerdo».',
        'Las cosas del animal también piden una decisión. No hay apuro. Algunas personas guardan todo un tiempo, otras donan la comida o la cucha, y muchas guardan un objeto para siempre.',
      ],
      tips: [
        'Algunas ideas: plantar algo, escribirle unas palabras, hacer su último paseo de memoria, armar una caja con su collar y fotos.',
        'Invita a quienes también lo querían, si quieres. Los chicos pueden dibujar o elegir un objeto.',
        'Donar lo que sobró a un refugio le da a la despedida un sentido de cuidado.',
      ],
      obstacles: [
        { q: 'No tengo sus restos.', a: 'No hacen falta. La despedida puede hacerse con una foto, una vela o un lugar donde le gustaba estar.' },
        { q: 'No me animo a tocar sus cosas.', a: 'Puedes esperar. Elige hoy sólo una cosa para guardar, y deja el resto para más adelante.' },
      ],
      cautions: CUIDADO,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Trae a la mente a tu mascota en un momento lindo.', durationSec: 40, kind: 'breath' },
        { title: 'Qué la representa', instruction: 'Piensa qué la representa: un juguete, un lugar, una planta, una canción. Anota una o dos cosas.', durationSec: 60, kind: 'reflection' },
        { title: 'El gesto', instruction: 'Elige un gesto simple con eso. Por ejemplo, plantar una flor donde le gustaba echarse.', durationSec: 60, kind: 'reflection' },
        { title: 'Con quién', instruction: '¿Quieres hacerlo a solas o con otras personas que lo querían? Anota sus nombres.', durationSec: 45, kind: 'reflection' },
        { title: 'Unas palabras', instruction: 'Escribe dos o tres frases para decirle en la despedida. Un gracias, un perdón o un chau.', durationSec: 75, kind: 'reflection' },
        { title: 'Sus cosas', instruction: 'Elige una cosa suya para guardar. Del resto, decide sólo esto: guardar un tiempo, donar o esperar.', durationSec: 60, kind: 'reflection' },
        { title: 'Ponerle fecha', instruction: 'Elige un día para la despedida. Respira hondo y suelta el aire despacio.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'cuando-dicen-era-solo-un-perro',
      title: 'Cuando te dicen «era solo un perro»',
      family: 'constructive',
      skills: ['resilience', 'compassion'],
      summary: 'Prepararte para los comentarios que achican tu pérdida, elegir qué responder y buscar a quienes sí entienden.',
      mechanism: 'Cuando el entorno no reconoce un duelo, la persona se calla y queda más sola. Tener respuestas listas y saber con quién hablar devuelve un lugar para el dolor.',
      evidenceLevel: 'preliminar',
      evidence: [DOKA_1989, DOKA_2002, WROBEL_2003],
      howItWorks: [
        'Kenneth Doka llamó duelo no reconocido al que el entorno no ve o no valida. El de una mascota es uno de los más comunes. No hay licencia en el trabajo, ni velorio, y a veces llegan frases como «era solo un perro» o «compra otro» (Doka, 1989).',
        'Esas frases suelen venir de gente que no sabe qué decir, no de mala intención. Igual duelen. Callarse para no parecer exagerado hace que el dolor se viva a escondidas (Doka, 2002).',
        'No tienes que convencer a nadie. Alcanza con cuidar lo que sientes y encontrar a dos o tres personas que lo entiendan.',
      ],
      tips: [
        'Una respuesta corta sirve: «Para mí era familia».',
        'Piensa en quienes conocieron a tu mascota o tienen una. Suelen entender mejor.',
        'En el trabajo, puedes decir sólo: «Estoy de duelo, se murió mi perra».',
      ],
      obstacles: [{ q: 'La que más lo achica es mi propia familia.', a: 'Duele más cuando viene de cerca. Puedes decirles qué necesitas, o buscar apoyo en otro lado sin pelear por eso.' }],
      cautions: CUIDADO,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Siente los pies en el piso.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que escuchaste', instruction: 'Anota una frase que te dolió. Por ejemplo: «era solo un gato» o «ya fue, compra otro».', durationSec: 45, kind: 'reflection' },
        { title: 'Cómo te dejó', instruction: 'Nota qué sentiste al oírla. ¿Enojo, vergüenza, ganas de callarte?', durationSec: 45, kind: 'reflection' },
        { title: 'Tu respuesta', instruction: 'Escribe una respuesta corta y tranquila. Por ejemplo: «Para mí era familia. Lo extraño mucho».', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que necesitas', instruction: 'Escribe lo que te ayudaría escuchar. Puede ser «lo siento mucho» o «cuéntame cómo era».', durationSec: 45, kind: 'reflection' },
        { title: 'Quién entiende', instruction: 'Anota dos personas que quieren a los animales o lo conocieron. Elige a una para escribirle esta semana.', durationSec: 45, kind: 'reflection' },
        { title: 'Para ti', instruction: 'Pon una mano en el pecho. Dite: «Mi dolor es real, aunque otros no lo vean».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'la-decision-que-tome',
      title: 'La decisión que tomé',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Revisar con amabilidad la decisión de la eutanasia, o lo que pasó al final, mirando lo que sabías entonces y no lo que sabes hoy.',
      mechanism: 'Después de una pérdida, la mente juzga las decisiones con lo que sabe hoy. Separar lo que sabías antes de lo que sabes ahora y responder con compasión afloja la culpa.',
      evidenceLevel: 'preliminar',
      evidence: [FISCHHOFF_1975, LAGONI_1994, ADAMS_2000],
      howItWorks: [
        'Decidir la eutanasia de un animal querido es de las decisiones más difíciles. Después es común que aparezca la culpa: «fue muy pronto», «fue muy tarde», «no me di cuenta antes». Los equipos que acompañan este duelo la describen como muy frecuente (Lagoni y colaboradores, 1994).',
        'Hay un error de la mente que alimenta esa culpa. Cuando ya sabemos cómo terminó algo, creemos que era fácil de prever. Baruch Fischhoff lo llamó sesgo retrospectivo (Fischhoff, 1975). Entonces no sabías lo que sabes ahora.',
        'La eutanasia suele decidirse para evitar más dolor al animal. Es una forma de cuidado, aunque no se sienta así. Si te quedaron preguntas médicas, hablarlas con el veterinario puede traer alivio.',
      ],
      tips: [
        'Si la muerte fue por un accidente o un descuido, esta práctica también sirve. Mira qué sabías y qué podías hacer en ese momento.',
        'La culpa a veces es amor que no sabe a dónde ir. No hace falta que desaparezca para que pese menos.',
        'Escribe tus preguntas para el veterinario y pide un turno para hablarlas.',
      ],
      obstacles: [{ q: 'Siento que lo maté.', a: 'Es una frase muy común en este duelo, y muy dura. Decidiste para que dejara de sufrir. Si la culpa no te deja en paz, hablarlo con un profesional ayuda mucho.' }],
      cautions: CUIDADO,
      steps: [
        { title: 'Llegar', instruction: 'Pon una mano en el pecho. Respira despacio y siente el calor de la mano.', durationSec: 40, kind: 'breath' },
        { title: 'La culpa', instruction: 'Escribe la frase de culpa que más se repite. Tal como suena en tu cabeza.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que sabías', instruction: 'Escribe lo que sabías en ese momento. Qué te dijo el veterinario, cómo estaba, qué veías.', durationSec: 75, kind: 'reflection' },
        { title: 'Lo que sabes hoy', instruction: 'Ahora escribe lo que sabes hoy y no sabías entonces. Mira si la culpa juzga con eso.', durationSec: 60, kind: 'reflection' },
        { title: 'Por qué decidiste', instruction: '¿Qué querías para tu mascota cuando decidiste? Escribe esa intención en una frase.', durationSec: 45, kind: 'reflection' },
        { title: 'Una voz amable', instruction: 'Imagina a un amigo que pasó por lo mismo. Escribe lo que le dirías con cariño.', durationSec: 60, kind: 'reflection' },
        { title: 'Para ti', instruction: 'Lee esa respuesta despacio, como si fuera para ti. Respira y deja la mano en el pecho.', durationSec: 40, kind: 'breath' },
      ],
    },
    {
      id: 'la-casa-sin-mi-mascota',
      title: 'La casa sin mi compañero',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Reacomodar el día cuando vivías con tu mascota y ahora la casa está vacía, sobre todo si vives sola o solo o eres una persona mayor.',
      mechanism: 'Una mascota ordena el día y saca a la calle. Reponer de a poco esas rutinas y contactos evita que el duelo se vuelva aislamiento.',
      evidenceLevel: 'preliminar',
      evidence: [MCNICHOLAS_2005, HOLT_LUNSTAD_2010, STROEBE_1999],
      howItWorks: [
        'Para muchas personas mayores que viven solas, la mascota es la compañía principal. Da un motivo para levantarse, salir a caminar y charlar con vecinos (McNicholas y colaboradores, 2005). Cuando muere, se pierde también todo eso.',
        'Estar con otras personas protege la salud, y la falta de contacto la daña (Holt-Lunstad y colaboradores, 2010). Por eso conviene cuidar la rutina y los vínculos en estos meses.',
        'No se trata de dejar de extrañar. Como propone el modelo de proceso dual, hay tiempo para el dolor y tiempo para la vida diaria (Stroebe y Schut, 1999).',
      ],
      tips: [
        'Si alguien de tu familia o del barrio vivía sin otra compañía que su mascota, esta práctica sirve para acompañar a esa persona.',
        'Mantén la hora del paseo, aunque sea para caminar a la plaza o a comprar el pan.',
        'Muchos refugios buscan voluntarios o familias de tránsito. Es una forma de estar con animales sin un compromiso para siempre.',
      ],
      obstacles: [{ q: 'No tengo ganas de salir.', a: 'Es esperable al principio. Empieza por cinco minutos en la vereda. Si pasan semanas sin ganas de nada, consulta a tu médico.' }],
      cautions: CUIDADO,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en un día común con tu mascota.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que ordenaba', instruction: 'Anota qué horarios marcaba: despertarte, comer, salir, dormir. ¿Cuáles quedaron vacíos?', durationSec: 60, kind: 'reflection' },
        { title: 'Las personas', instruction: '¿A quién veías gracias a tu mascota? Vecinos, otros paseadores, el veterinario. Anota sus nombres.', durationSec: 60, kind: 'reflection' },
        { title: 'Un paseo propio', instruction: 'Elige una salida corta a la hora de siempre. Por ejemplo, ir a la plaza o a comprar el pan.', durationSec: 45, kind: 'reflection' },
        { title: 'Un contacto', instruction: 'Elige a una persona de tu lista. Escribe cuándo la llamarás o pasarás a saludar.', durationSec: 45, kind: 'reflection' },
        { title: 'Un momento para extrañar', instruction: 'Elige un rato del día para recordarla, con una foto o en su lugar. Después, vuelve a tu día.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira hondo. Dite: «La extraño, y también cuido mi día».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'otra-mascota-cuando',
      title: '¿Otra mascota? Cuándo y si quiero',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Pensar con calma si quieres adoptar otra mascota, cuándo, y qué necesita cada persona de la casa, sin usarla para tapar el dolor.',
      mechanism: 'Elegir desde los propios valores, y no desde la urgencia de no sentir, ayuda a que el nuevo vínculo no cargue con el anterior.',
      evidenceLevel: 'preliminar',
      evidence: [LAGONI_1994, PACKMAN_2011, WORDEN_2018],
      howItWorks: [
        'Hay poca investigación sobre cuándo conviene adoptar otra mascota. No existe un plazo correcto. Algunas personas lo hacen a las semanas y les va bien, otras esperan años o deciden no hacerlo.',
        'Los equipos que acompañan este duelo sugieren algunas preguntas. ¿Puedo querer a un animal nuevo por lo que es, y no como copia del anterior? ¿Lo quiero yo, o es para que no duela? (Lagoni y colaboradores, 1994).',
        'Adoptar otro no es olvidar ni traicionar. Muchas personas siguen unidas a su mascota anterior mientras quieren a la nueva (Packman y colaboradores, 2011).',
      ],
      tips: [
        'Cada persona de la casa puede tener su tiempo. Escucha también a los chicos.',
        'Si hay chicos, no reemplaces al animal enseguida para que no noten la muerte. Necesitan saber y despedirse.',
        'Las personas mayores pueden pensar en un animal adulto, o acordar con alguien quién lo cuidaría si hiciera falta.',
      ],
      obstacles: [{ q: 'Siento que lo traiciono.', a: 'Es un sentimiento común. El lugar de tu mascota no se ocupa. Un animal nuevo tendrá su propio lugar.' }],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Hoy no tienes que decidir nada.', durationSec: 30, kind: 'breath' },
        { title: 'Para qué', instruction: 'Completa la frase: «Quiero otra mascota para…». Escribe lo primero que aparezca.', durationSec: 45, kind: 'reflection' },
        { title: 'Mirar la razón', instruction: 'Lee lo que escribiste. ¿Es para dar y recibir cariño, o para no sentir el vacío? Puede ser un poco de los dos.', durationSec: 45, kind: 'reflection' },
        { title: 'Por sí misma', instruction: 'Imagina a un animal distinto, con otro carácter. ¿Podrías quererlo por lo que es?', durationSec: 45, kind: 'reflection' },
        { title: 'La casa', instruction: 'Anota qué siente cada persona de tu casa sobre esto. Si no lo sabes, anota a quién preguntar.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo práctico', instruction: 'Piensa en tu tiempo, tu salud, tu plata y tu vivienda hoy. ¿Qué tipo de animal encaja?', durationSec: 45, kind: 'reflection' },
        { title: 'Una fecha para volver', instruction: 'Anota una fecha para volver a preguntarte esto. Puede ser en un mes o en seis.', durationSec: 30, kind: 'reflection' },
      ],
    },
  ],

  meta: {
    'lo-que-era-para-mi': { level: 'iniciacion', approaches: ['escritura', 'cft'], module: 'duelo' },
    'despedida-de-mi-mascota': { level: 'iniciacion', approaches: ['narrativa', 'escritura'], module: 'duelo' },
    'cuando-dicen-era-solo-un-perro': { level: 'intermedio', approaches: ['interpersonal', 'cft'], module: 'duelo', prerequisites: ['lo-que-era-para-mi'] },
    'la-decision-que-tome': { level: 'intermedio', approaches: ['cft', 'tcc'], module: 'duelo', prerequisites: ['lo-que-era-para-mi', 'pausa-autocompasion'] },
    'la-casa-sin-mi-mascota': { level: 'intermedio', approaches: ['tcc', 'interpersonal'], module: 'duelo', prerequisites: ['lo-que-era-para-mi'] },
    'otra-mascota-cuando': { level: 'intermedio', approaches: ['act'], module: 'duelo', prerequisites: ['lo-que-era-para-mi'] },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'duelo-por-una-mascota',
      title: 'Cuando muere una mascota',
      subtitle: 'Por qué duele tanto, la culpa después de la eutanasia, las despedidas, una nueva mascota y las personas que viven solas con su animal.',
      category: 'Etapas de la vida',
      readingMin: 9,
      keyPoints: [
        'El vínculo con una mascota es un vínculo de apego. Su muerte puede doler tanto como otras pérdidas.',
        'Es un duelo que el entorno muchas veces no reconoce. Eso no lo hace menos real.',
        'La culpa después de la eutanasia es muy común. La mente juzga con lo que sabe hoy, no con lo que sabías entonces.',
        'Una despedida propia ayuda a darle forma al dolor.',
        'No hay un plazo correcto para adoptar otra mascota. Conviene que no sea para tapar el dolor.',
        'Las personas mayores que vivían solas con su animal merecen atención especial.',
      ],
      sections: [
        {
          heading: 'Por qué duele tanto',
          paragraphs: [
            'Una mascota está todos los días. Te espera, te sigue por la casa, te pide comida a la misma hora. Da cariño sin juzgar. John Archer explicó que con los animales se forma un vínculo parecido al que tenemos con las personas cercanas (Archer, 1997).',
            'Por eso su muerte puede doler mucho. Un estudio encontró que el dolor era mayor en quienes tenían un apego más fuerte con su animal (Field y colaboradores, 2009). También duele perder la rutina: los paseos, los horarios, la compañía en la casa.',
          ],
        },
        {
          heading: '«Era solo un perro»: un duelo no reconocido',
          paragraphs: [
            'Kenneth Doka llamó duelo no reconocido al que la sociedad no valida (Doka, 1989). La muerte de una mascota es un ejemplo claro. No hay licencia en el trabajo ni velorio, y muchas veces se escuchan frases como «compra otro».',
            'Cuando el entorno no reconoce el dolor, muchas personas se callan y lo viven a escondidas. Ayuda tener una frase corta para responder, como «para mí era familia», y buscar a quienes entienden: personas que conocieron al animal o que tienen el suyo.',
          ],
        },
        {
          heading: 'La eutanasia y la culpa',
          paragraphs: [
            'Muchas mascotas mueren por eutanasia. Es una decisión tomada para evitar más sufrimiento, pero suele dejar preguntas: si fue muy pronto, si fue muy tarde, si se podía hacer algo más. Los equipos que acompañan este duelo describen la culpa como muy frecuente (Lagoni y colaboradores, 1994).',
            'Esa culpa se alimenta de un error común de la mente. Cuando ya sabemos cómo terminó algo, creemos que era fácil de prever. Se llama sesgo retrospectivo (Fischhoff, 1975). Ayuda separar lo que sabías entonces de lo que sabes hoy, y hablar con el veterinario si quedaron dudas.',
            'Si la culpa es muy fuerte o no te deja en paz, conviene hablarla con un profesional. No tienes que cargarla a solas.',
          ],
        },
        {
          heading: 'Despedirse',
          paragraphs: [
            'Los rituales dan forma al dolor. En una serie de experimentos, hacer un ritual después de una pérdida bajó la pena, aunque el ritual fuera inventado (Norton y Gino, 2014). Puede ser plantar algo, escribirle unas palabras o armar una caja con su collar y fotos.',
            'Muchas personas siguen sintiéndose unidas a su mascota: le hablan, guardan un objeto, la recuerdan en ciertos lugares. Esto se llama vínculo continuo y es parte normal del duelo (Klass y colaboradores, 1996; Packman y colaboradores, 2011).',
          ],
        },
        {
          heading: '¿Otra mascota?',
          paragraphs: [
            'No hay un plazo correcto, y hay poca investigación sobre esto. Lo que sigue son recomendaciones de quienes acompañan este duelo. Conviene adoptar cuando puedas querer a un animal nuevo por lo que es, y no como reemplazo del anterior.',
            'Si en la casa hay chicos, no conviene reemplazar al animal a escondidas para que no noten la muerte. Necesitan saber la verdad y despedirse. Cada persona de la familia puede tener su propio tiempo.',
          ],
        },
        {
          heading: 'Las personas mayores que viven solas',
          paragraphs: [
            'Para muchas personas mayores, la mascota es la compañía principal. Da un motivo para levantarse, salir y charlar con vecinos (McNicholas y colaboradores, 2005). Cuando muere, puede quedar mucho silencio en la casa.',
            'El aislamiento daña la salud (Holt-Lunstad y colaboradores, 2010). Por eso ayuda mantener la hora del paseo, cuidar los contactos y, si se puede, acompañar a la persona en estos meses. Si conoces a alguien así, una visita o un llamado valen mucho.',
          ],
        },
        {
          heading: 'Cuándo consultar',
          paragraphs: [
            'El dolor suele aflojar de a poco, con días mejores y peores. Consulta si después de muchos meses la pena sigue igual de intensa, no puedes hacer tu vida o te sientes sin sentido. El duelo prolongado tiene tratamiento (Shear, 2015).',
            'Si piensas en morir o en hacerte daño, llama al 135 (CABA y GBA) o al 0800-345-1435 desde el resto del país, o usa el botón Ayuda de la app. Ante una urgencia, llama al 911.',
          ],
        },
      ],
      caveat: {
        title: 'Lo que se sabe y lo que no',
        body: 'La mayoría de los estudios sobre el duelo por una mascota son encuestas con dueños de perros y gatos, en su mayoría de países de habla inglesa. Muestran que el dolor es real y frecuente, pero hay poca investigación sobre qué ayuda más. Las prácticas de esta sección se basan en lo que funciona en otros duelos y en la experiencia clínica.',
      },
      diagram: {
        title: 'Cómo se mantiene la culpa',
        nodes: ['Recuerdo de la decisión', 'Pregunta «¿y si…?»', 'Juzgar con lo que sé hoy', 'Culpa', 'No hablarlo con nadie'],
        caption: 'Separar lo que sabías entonces, recordar por qué decidiste y hablarlo con alguien cortan el ciclo.',
      },
      related: {
        practices: ['lo-que-era-para-mi', 'despedida-de-mi-mascota', 'cuando-dicen-era-solo-un-perro', 'la-decision-que-tome', 'la-casa-sin-mi-mascota', 'otra-mascota-cuando', 'ritual-de-recuerdo', 'carta-al-ser-querido'],
        articles: [],
      },
      references: [ARCHER_1997, FIELD_2009, DOKA_1989, DOKA_2002, LAGONI_1994, FISCHHOFF_1975, NORTON_2014, KLASS_1996, PACKMAN_2011, MCNICHOLAS_2005, HOLT_LUNSTAD_2010, SHEAR_2015],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'despues-de-mi-mascota',
      title: 'Después de mi mascota',
      subtitle: 'Tres semanas para darle lugar a esta pérdida y reacomodar la vida',
      description:
        'Pondrás en palabras lo que era para ti, harás una despedida, revisarás la culpa con amabilidad y reacomodarás tu día. Al final pensarás, sin apuro, si quieres otra mascota. Si piensas en morir, llama al 135 o usa el botón Ayuda.',
      basis: 'Doka (1989); Archer (1997); Norton y Gino (2014); Stroebe y Schut (1999).',
      rhythm: '10 minutos, 3 o 4 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Lo que perdí',
          focus: 'Reconocer la pérdida y despedirse',
          description: 'Leerás por qué duele tanto, escribirás lo que era para ti y prepararás una despedida.',
          practiceIds: ['lo-que-era-para-mi', 'despedida-de-mi-mascota'],
          articleIds: ['duelo-por-una-mascota'],
          journalType: 'escritura-expresiva',
        },
        {
          title: 'Semana 2 · Culpa y comentarios',
          focus: 'La decisión y lo que dicen otros',
          description: 'Revisarás la culpa con lo que sabías entonces y prepararás respuestas para los comentarios que duelen.',
          practiceIds: ['la-decision-que-tome', 'cuando-dicen-era-solo-un-perro', 'pausa-autocompasion'],
          articleIds: [],
          journalType: 'carta-compasiva',
        },
        {
          title: 'Semana 3 · La vida que sigue',
          focus: 'Rutina, recuerdo y lo que viene',
          description: 'Reacomodarás tu día, crearás un gesto para recordarla y pensarás con calma si quieres otra mascota.',
          practiceIds: ['la-casa-sin-mi-mascota', 'ritual-de-recuerdo', 'otra-mascota-cuando'],
          articleIds: [],
          journalType: 'valores',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-mas-que-una-mascota',
      title: 'No era solo un perro',
      subtitle: 'Por qué duele tanto y por qué nadie lo ve.',
      slides: [
        { heading: 'Un vínculo real', text: 'Con una mascota se forma un vínculo de apego. Te espera, te acompaña y te da cariño todos los días.' },
        { heading: 'Duele de verdad', text: 'Por eso su muerte puede doler mucho. No exageras. Duele porque la quisiste.' },
        { heading: 'Un duelo que no se ve', text: 'Muchas veces no hay licencia ni velorio. Y llegan frases como «compra otro». Es un duelo que el entorno no reconoce.' },
        { heading: 'Una frase corta', text: 'No tienes que convencer a nadie. Puedes decir: «Para mí era familia».' },
        { heading: 'Busca a quien entiende', text: 'Habla con quien conoció a tu mascota o tiene la suya. Suelen entender mejor.' },
        { heading: 'Si no afloja', text: 'Si pasan meses y no puedes hacer tu vida, consulta. Si piensas en morir, llama al 135 o usa el botón Ayuda.' },
      ],
      related: { practices: ['lo-que-era-para-mi', 'cuando-dicen-era-solo-un-perro'], articles: ['duelo-por-una-mascota'] },
      references: [ARCHER_1997, DOKA_1989, FIELD_2009],
    },
    {
      id: 'pildora-eutanasia-y-culpa',
      title: '¿Fue muy pronto? ¿Fue muy tarde?',
      subtitle: 'La culpa después de la eutanasia.',
      slides: [
        { heading: 'Una decisión dura', text: 'Decidir la eutanasia de tu mascota es muy difícil. Después, casi siempre aparecen preguntas.' },
        { heading: 'La culpa', text: '«Fue muy pronto», «fue muy tarde», «no me di cuenta». La culpa es muy común en este duelo.' },
        { heading: 'Una trampa de la mente', text: 'Cuando sabes cómo terminó algo, crees que era fácil de prever. Pero entonces no lo sabías.' },
        { heading: 'Por qué decidiste', text: 'Decidiste para que no sufriera más. Es una forma de cuidado, aunque hoy no se sienta así.' },
        { heading: 'Pregunta', text: 'Si te quedaron dudas, pide hablar con el veterinario. Saber más suele traer alivio.' },
        { heading: 'No a solas', text: 'Si la culpa no te deja en paz, habla con un profesional. No tienes que cargarla a solas.' },
      ],
      related: { practices: ['la-decision-que-tome', 'pausa-autocompasion'], articles: ['duelo-por-una-mascota'] },
      references: [FISCHHOFF_1975, LAGONI_1994],
    },
    {
      id: 'pildora-chicos-y-mascota',
      title: 'Cuando se muere la mascota de casa',
      subtitle: 'Cómo contárselo a los chicos.',
      slides: [
        { heading: 'Su primera pérdida', text: 'Para muchos chicos, la muerte de la mascota es la primera muerte que viven de cerca. Lo que vean en casa les enseña cómo se atraviesa un duelo.' },
        { heading: 'Palabras claras', text: 'Di «se murió». Evita «se fue» o «se durmió». Pueden asustarse de dormir o esperar que vuelva.' },
        { heading: 'Qué es morir', text: 'Explica que su cuerpo dejó de funcionar. Ya no come, no respira ni siente dolor. Y no vuelve.' },
        { heading: 'No es su culpa', text: 'Algunos chicos creen que pasó por algo que hicieron o pensaron. Diles claro que no es su culpa.' },
        { heading: 'Que se despidan', text: 'Invítalos a la despedida, si quieren. Pueden dibujar, elegir una foto o decirle unas palabras.' },
        { heading: 'Llorar juntos', text: 'Puedes llorar delante de ellos. Les muestras que la tristeza se puede compartir.' },
      ],
      related: { practices: ['despedida-de-mi-mascota'], articles: ['duelo-por-una-mascota'] },
      references: [SPEECE_1984, KAUFMAN_2006, DYREGROV_2008],
    },
    {
      id: 'pildora-otra-mascota',
      title: '¿Otra mascota?',
      subtitle: 'Cuándo y si adoptar de nuevo.',
      slides: [
        { heading: 'No hay un plazo', text: 'Algunas personas adoptan a las semanas y otras esperan años. No hay una fecha correcta.' },
        { heading: 'Por lo que es', text: 'Una buena señal: poder querer a un animal nuevo por lo que es, y no como copia del anterior.' },
        { heading: 'No para tapar', text: 'Si es sólo para no sentir el vacío, quizás conviene esperar un poco más.' },
        { heading: 'No es traicionar', text: 'Adoptar otro no es olvidar. Puedes seguir sintiendo el lazo con tu mascota y querer a la nueva.' },
        { heading: 'La familia', text: 'Cada persona de la casa tiene su tiempo. Escucha también a los chicos.' },
        { heading: 'Otras formas', text: 'Si hoy no puedes adoptar, puedes ser voluntario en un refugio o dar tránsito a un animal.' },
      ],
      related: { practices: ['otra-mascota-cuando'], articles: ['duelo-por-una-mascota'] },
      references: [LAGONI_1994, PACKMAN_2011],
    },
  ],

  // ================================================================== guías para familias
  kidGuides: [
    {
      id: 'cuando-muere-la-mascota',
      title: 'Cuando muere la mascota de la familia',
      subtitle: 'Cómo contárselo a tus hijos e hijas y acompañar su primera pérdida, según la edad.',
      readingMin: 6,
      keyPoints: [
        'Para muchos chicos es la primera muerte que viven de cerca. Lo que pase en casa les enseña cómo se atraviesa un duelo.',
        'Usa palabras claras: «se murió». Evita «se fue», «se durmió» o «se perdió».',
        'Diles la verdad sobre la eutanasia, con palabras simples.',
        'Invítalos a despedirse, sin obligarlos.',
        'No reemplaces al animal a escondidas para que no noten la muerte.',
      ],
      sections: [
        {
          heading: 'Su primera pérdida',
          paragraphs: [
            'La muerte de la mascota suele ser la primera experiencia de muerte de un chico. Por eso es también una oportunidad para aprender que la tristeza se puede compartir y que se puede seguir queriendo a quien ya no está (Kaufman y Kaufman, 2006).',
            'Esconder la muerte o inventar que el animal se escapó suele salir mal. Los chicos se dan cuenta, se sienten engañados o se quedan esperando que vuelva.',
          ],
        },
        {
          heading: 'Qué entienden según la edad',
          paragraphs: [
            'Mark Speece y Sandor Brent describieron tres ideas que los chicos aprenden de a poco. La muerte no tiene vuelta atrás. El cuerpo deja de funcionar del todo. Y todos los seres vivos mueren alguna vez. La mayoría las entiende entre los cinco y los siete años (Speece y Brent, 1984).',
            'Los más chicos pueden preguntar muchas veces cuándo vuelve, o jugar a que se muere. Es su forma de entender. En la escuela primaria suelen querer detalles concretos. Los adolescentes pueden sufrir mucho y mostrarlo poco, sobre todo si la mascota los acompañó toda la infancia.',
          ],
        },
        {
          heading: 'Cómo contarlo',
          paragraphs: [
            'Busca un momento tranquilo y usa palabras claras: «Tengo una noticia triste. Toby se murió». Frases como «se durmió para siempre» pueden dar miedo a dormir. Decir «se fue» hace pensar que puede volver (Dyregrov, 2008).',
            'Si hubo eutanasia, puedes decir: «Estaba muy enfermo y sufría. El veterinario le dio un remedio para que muriera sin dolor». Si es posible, avísales antes y pregúntales si quieren despedirse mientras vive.',
            'Algunos chicos creen que la muerte pasó por algo que hicieron, dijeron o pensaron. Diles claro que no es su culpa.',
          ],
        },
        {
          heading: 'Despedirse y recordar',
          paragraphs: [
            'Invítalos a la despedida, si quieren. Pueden hacer un dibujo, elegir una foto, escribirle una carta o plantar algo. Si no quieren participar, está bien también.',
            'Puedes llorar delante de ellos. Les muestras que la tristeza es normal y que se puede hablar. Con el tiempo, ayuda recordar juntos historias lindas de la mascota.',
          ],
        },
        {
          heading: 'Una nueva mascota',
          paragraphs: [
            'No conviene adoptar otro animal enseguida para que la tristeza pase rápido. Los chicos necesitan tiempo para despedirse. Cuando llegue el momento, pueden participar de la decisión y saber que el nuevo no ocupa el lugar del anterior.',
          ],
        },
      ],
      phrases: [
        '«Se murió. Su cuerpo dejó de funcionar y no va a volver»',
        '«No fue tu culpa. Nada de lo que hiciste o pensaste hizo que se muriera»',
        '«Yo también estoy triste. Lo extraño mucho»',
        '«¿Quieres hacerle un dibujo para despedirnos?»',
        '«Puedes preguntarme todas las veces que quieras»',
      ],
      caveat: {
        title: 'Cuándo pedir ayuda',
        body: 'Es esperable que haya tristeza, preguntas repetidas o miedo a que mueran otros seres queridos. Consulta con su pediatra o un profesional si pasan semanas y no quiere ir a la escuela, no duerme, deja de jugar o se culpa mucho. Si habla de morir para estar con su mascota, consulta pronto y llama al 135 o a la Línea 102. También puedes usar el botón Ayuda de la app.',
      },
      activities: ['como-me-siento', 'colores-de-mis-emociones', 'dibujo-como-me-siento', 'mano-en-el-corazon', 'cajita-preocupaciones', 'pedir-ayuda'],
      references: [SPEECE_1984, KAUFMAN_2006, DYREGROV_2008],
    },
  ],

  // ================================================================== glosario
  glossary: [
    { id: 'vinculo-humano-animal', term: 'Vínculo humano-animal', definition: 'La relación de cariño y apego entre una persona y un animal. Por eso la muerte de una mascota puede doler tanto como otras pérdidas.', articleId: 'duelo-por-una-mascota', practiceId: 'lo-que-era-para-mi' },
    { id: 'eutanasia-veterinaria', term: 'Eutanasia de una mascota', definition: 'Muerte sin dolor que indica un veterinario para evitar el sufrimiento de un animal. Suele dejar dudas y culpa en quien la decide.', articleId: 'duelo-por-una-mascota', practiceId: 'la-decision-que-tome' },
    { id: 'sesgo-retrospectivo', term: 'Sesgo retrospectivo', definition: 'Creer, cuando ya sabemos cómo terminó algo, que era fácil de prever. Alimenta la culpa después de una pérdida.', practiceId: 'la-decision-que-tome' },
    { id: 'irreversibilidad-de-la-muerte', term: 'Irreversibilidad de la muerte', definition: 'La idea de que quien muere no vuelve. Los chicos la aprenden de a poco, y por eso preguntan muchas veces cuándo vuelve.', articleId: 'duelo-por-una-mascota' },
  ],
};
