import { isTeen, kidAlert, weeklySummary, type KidActivityLog, type KidProfile } from './kids';
import { KID_GUIDE_BY_ID, type KidGuide } from './kids-guides';

/**
 * Sugerencia semanal para el adulto: una acción concreta y la guía que la explica,
 * elegida con reglas simples a partir de lo que el chico registró en los últimos 7 días.
 */
export interface FamilyTip {
  text: string;
  guide: KidGuide;
}

export function familyTip(kid: KidProfile, logs: KidActivityLog[], now = new Date()): FamilyTip {
  const tip = (guideId: string, text: string): FamilyTip => ({ text, guide: KID_GUIDE_BY_ID[guideId] });
  if (kidAlert(logs, now)) return tip('cuando-consultar', 'Esta semana marcó una emoción difícil con mucha fuerza varias veces. Habla con calma y, si sigue, consulta.');
  if (kid.band === '0-3') return tip('primeros-anos', 'Elige una actividad para hacer juntos y repítela varios días: a esta edad, la repetición es aprendizaje.');

  const week = weeklySummary(logs, now);
  const name = kid.name;
  if (week.activities === 0)
    return isTeen(kid.band)
      ? tip('adolescencia', `Sin presión: pregúntale a ${name} qué le sirve cuando tiene un mal día, y escucha sin corregir.`)
      : tip('tiempo-especial', `Esta semana, regálale a ${name} cinco minutos de juego a su manera, sin pantallas ni correcciones.`);

  const top = week.feelings[0]?.feeling.id;
  if (top === 'miedo' || top === 'preocupacion') return tip('acompanar-la-ansiedad', `${name} marcó ${top === 'miedo' ? 'miedo' : 'preocupación'} esta semana. Nombra la emoción con calma y acompaña a dar un paso chico, sin evitarlo todo.`);
  if (top === 'enojo')
    return kid.band === '4-6' || kid.band === '7-9'
      ? tip('berrinches', `${name} marcó enojo esta semana. Primero calma, después palabras: ayúdale a respirar antes de hablar de lo que pasó.`)
      : tip('validar', `${name} marcó enojo esta semana. Antes de dar consejos, prueba decir: «Entiendo que te enoje».`);
  if (top === 'tristeza') return tip('validar', `${name} marcó tristeza esta semana. Acompaña sin apurar: «Estoy aquí, cuéntame si quieres».`);
  if (isTeen(kid.band)) return tip('adolescencia', `Reconoce el esfuerzo de ${name} por cuidarse: hizo ${week.activities} ${week.activities === 1 ? 'actividad' : 'actividades'} esta semana.`);
  return tip('entrenador-emocional', `Pregúntale a ${name} qué actividad le gustó más y hagan una juntos.`);
}
