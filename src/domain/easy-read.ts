import { EASY_READ_A } from './easy-read-a';
import { EASY_READ_B } from './easy-read-b';
import { EASY_READ_C } from './easy-read-c';
import { EASY_READ_D } from './easy-read-d';
import { EASY_READ_E } from './easy-read-e';
import { EASY_READ_F } from './easy-read-f';
import { EASY_READ_G } from './easy-read-g';
import { EASY_READ_H } from './easy-read-h';

/**
 * Lectura fácil: una versión breve y sencilla de los artículos más usados, para leer en un
 * mal día, con poca concentración o con menos práctica lectora. Frases cortas, palabras
 * comunes y una idea por párrafo. No reemplaza al artículo: lo resume, sin agregar datos
 * ni referencias nuevas (las del artículo siguen valiendo).
 */
export interface EasyRead {
  /** Id del artículo que resume. */
  articleId: string;
  paragraphs: string[];
}

export const EASY_READS: EasyRead[] = [...EASY_READ_A, ...EASY_READ_B, ...EASY_READ_C, ...EASY_READ_D, ...EASY_READ_E, ...EASY_READ_F, ...EASY_READ_G, ...EASY_READ_H];

export const EASY_READ_BY_ARTICLE: Record<string, EasyRead> = Object.fromEntries(EASY_READS.map((e) => [e.articleId, e]));
