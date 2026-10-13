/**
 * Legibilidad en español: índice de Szigriszt-Pazos interpretado con la escala INFLESZ
 * (Barrio-Cantalejo et al., 2008), la referencia habitual para textos de salud.
 *
 *   P = 206,835 − 62,3 · (sílabas / palabras) − (palabras / frases)
 *
 *   < 40 muy difícil · 40–55 algo difícil · 55–65 normal · 65–80 bastante fácil · > 80 muy fácil
 *
 * El recuento de sílabas es una aproximación basada en núcleos vocálicos (diptongos y
 * hiatos con tilde), suficiente para comparar textos y detectar los más difíciles.
 */

const STRONG = 'aeoáéó';
const WEAK = 'iuü';
const ACCENTED_WEAK = 'íú';

export function countSyllables(word: string): number {
  const w = word.toLowerCase().replace(/[^a-záéíóúüñ]/g, '');
  if (!w) return 0;
  let count = 0;
  let prev: 'strong' | 'weak' | null = null;
  for (const ch of w) {
    const isStrong = STRONG.includes(ch) || ACCENTED_WEAK.includes(ch);
    const isWeak = WEAK.includes(ch);
    if (!isStrong && !isWeak) {
      prev = null;
      continue;
    }
    if (prev === null) count++;
    else if (isStrong && prev === 'strong') count++; // hiato: dos vocales fuertes
    // débil+fuerte, fuerte+débil o débil+débil: diptongo (misma sílaba)
    prev = isStrong ? 'strong' : 'weak';
  }
  // "que", "qui", "gue", "gui": la u no suena (ya cuenta como diptongo, sin efecto).
  return Math.max(1, count);
}

export function inflesz(text: string): number {
  const sentences = text.split(/[.!?…:;]+/).map((s) => s.trim()).filter((s) => /[a-záéíóúñ]/i.test(s));
  const words = text.match(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+/g) ?? [];
  if (words.length === 0 || sentences.length === 0) return 100;
  const syllables = words.reduce((s, w) => s + countSyllables(w), 0);
  return 206.835 - 62.3 * (syllables / words.length) - words.length / sentences.length;
}

export type InfleszBand = 'muy difícil' | 'algo difícil' | 'normal' | 'bastante fácil' | 'muy fácil';

export function infleszBand(score: number): InfleszBand {
  if (score < 40) return 'muy difícil';
  if (score < 55) return 'algo difícil';
  if (score < 65) return 'normal';
  if (score < 80) return 'bastante fácil';
  return 'muy fácil';
}

/** Número de palabras de la frase más larga (para la guía de estilo). */
export function longestSentenceWords(text: string): number {
  return Math.max(0, ...text.split(/[.!?…]+/).map((s) => (s.match(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9]+/g) ?? []).length));
}
