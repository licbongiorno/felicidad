import type { Practice, Reference } from './types';

/**
 * Autoconocimiento y patrones: prácticas de exploración inspiradas en la terapia de
 * esquemas y en la psicología analítica de Jung. Se ofrecen como reflexión personal,
 * nunca como diagnóstico. La evidencia de su uso autoguiado es escasa: se declara así.
 */

const YOUNG_2003: Reference = { citation: 'Young, J. E., Klosko, J. S., & Weishaar, M. E. (2003). Schema therapy: A practitioner’s guide. Guilford Press.' };
const BAMELIS_2014: Reference = {
  citation:
    'Bamelis, L. L. M., Evers, S. M. A. A., Spinhoven, P., & Arntz, A. (2014). Results of a multicenter randomized controlled trial of the clinical effectiveness of schema therapy for personality disorders. American Journal of Psychiatry, 171(3), 305–322.',
  doi: '10.1176/appi.ajp.2013.12040518',
  note: 'Evidencia de la terapia de esquemas completa con terapeuta, no de este ejercicio autoguiado.',
};

export const SELF_PRACTICES: Practice[] = [
  {
    id: 'adulto-sano',
    title: 'El adulto sano: mirar un patrón con amabilidad',
    family: 'deconstructive',
    skills: ['compassion', 'resilience'],
    summary: 'Reconocer la parte de ti que reacciona en un patrón que se repite y responderle desde tu parte más serena.',
    mechanism:
      'Nombrar la parte que reacciona y lo que necesita crea distancia del patrón. Responder desde una voz serena y firme ensaya otra forma de cuidarte.',
    evidenceLevel: 'preliminar',
    evidence: [YOUNG_2003, BAMELIS_2014],
    howItWorks: [
      'La terapia de esquemas, desarrollada por Jeffrey Young, propone que muchas reacciones que se repiten vienen de necesidades emocionales que no se cubrieron en la infancia. En ciertos momentos se activa una parte de nosotros, un «modo»: una parte asustada, una enojada, una muy exigente o una que se desconecta.',
      'El modo «adulto sano» es la parte que puede ver esas reacciones con comprensión, cuidar lo que necesitan y poner límites cuando hace falta. Este ejercicio es una exploración personal inspirada en ese modelo, no un diagnóstico ni un sustituto de la terapia.',
    ],
    tips: [
      'Elige un patrón de intensidad media, no el más doloroso.',
      'Ponerle un nombre amable a la parte que reacciona ayuda a no confundirte con ella.',
      'Si te sirve, llévalo a tu terapeuta: es material valioso para la sesión.',
    ],
    obstacles: [{ q: 'No encuentro ninguna voz serena en mí.', a: 'Es frecuente al principio. Imagina qué le dirías a un amigo en tu lugar, o qué te diría alguien que te quiere. Esa voz también es tuya.' }],
    cautions:
      'Si la práctica trae recuerdos traumáticos o emociones muy intensas, detente. Esta exploración se hace mejor acompañada por tu terapeuta.',
    steps: [
      { title: 'Llegar', instruction: 'Siéntate cómodo/a y respira despacio. Nota el apoyo del cuerpo.', durationSec: 45, kind: 'breath' },
      { title: 'El patrón', instruction: 'Piensa en una reacción tuya que se repite y te hace daño. Elige una de intensidad media.', durationSec: 60, kind: 'reflection' },
      { title: 'La parte que reacciona', instruction: '¿Qué parte de ti aparece? Quizá una parte asustada, enojada o muy exigente. Ponle un nombre amable.', durationSec: 75, kind: 'reflection' },
      { title: 'Lo que necesita', instruction: '¿Qué necesita esa parte? Quizá seguridad, que la escuchen, un límite o descanso.', durationSec: 75, kind: 'reflection' },
      { title: 'El adulto sano', instruction: 'Imagina tu parte más serena y sabia. ¿Qué le diría a la parte que reacciona? Escúchalo con calma.', durationSec: 90, kind: 'reflection' },
      { title: 'Un paso', instruction: '¿Qué haría hoy ese adulto sano por ti? Elige algo pequeño.', durationSec: 45, kind: 'reflection' },
    ],
  },
  {
    id: 'persona-y-sombra',
    title: 'Lo que muestro y lo que guardo',
    family: 'deconstructive',
    skills: ['attention', 'compassion'],
    summary: 'Explorar la imagen que muestras a los demás y las partes tuyas que sueles esconder, para integrarlas con amabilidad.',
    mechanism:
      'Reconocer lo que no mostramos reduce la energía que gastamos en ocultarlo y permite darle un lugar sano en la vida.',
    evidenceLevel: 'contemplativa',
    evidence: [
      { citation: 'Jung, C. G. (1964). Man and his symbols. Doubleday.', note: 'Fundamento teórico de la psicología analítica; sin estudios empíricos sobre este ejercicio.' },
    ],
    howItWorks: [
      'Carl Jung llamó «persona» a la imagen que mostramos para adaptarnos a los demás, y «sombra» a las partes propias que no aceptamos y dejamos fuera de esa imagen. A menudo la sombra aparece de forma indirecta: en lo que nos irrita mucho de otras personas.',
      'Es un marco para reflexionar, no una teoría con evidencia experimental. El objetivo no es descubrir algo oculto ni diagnosticarte, sino mirarte con más amplitud y menos juicio.',
    ],
    tips: [
      'No hay respuestas correctas: anota lo que aparezca.',
      'Elige rasgos leves. Lo muy doloroso es mejor explorarlo en terapia.',
      'Una parte guardada no es mala: muchas veces es una necesidad que no tuvo lugar.',
    ],
    obstacles: [{ q: '¿Y si lo que descubro no me gusta?', a: 'Es humano tener partes que no nos gustan. Reconocerlas no te define: te da más opciones para elegir cómo actuar.' }],
    steps: [
      { title: 'Llegar', instruction: 'Respira despacio unos momentos. Deja que la atención se asiente.', durationSec: 40, kind: 'breath' },
      { title: 'Lo que muestro', instruction: '¿Cómo te muestras ante los demás? Piensa en tres palabras que otros usarían para describirte.', durationSec: 60, kind: 'reflection' },
      { title: 'Lo que guardo', instruction: '¿Qué parte tuya muestras poco? Quizá el enojo, una necesidad, la ambición o la fragilidad. Elige algo leve.', durationSec: 75, kind: 'reflection' },
      { title: 'Lo que me irrita', instruction: '¿Qué rasgo de otras personas te molesta mucho? A veces habla de algo propio que nos cuesta aceptar.', durationSec: 75, kind: 'reflection' },
      { title: 'Darle un lugar', instruction: 'Si esa parte guardada tuviera un lugar sano en tu vida, ¿cómo se vería?', durationSec: 75, kind: 'reflection' },
      { title: 'Volver', instruction: 'Respira y vuelve al presente. Nota cómo estás ahora, sin juzgarlo.', durationSec: 30, kind: 'breath' },
    ],
  },
];
