import { EASY_READ_A } from './easy-read-a';
import { EASY_READ_B } from './easy-read-b';

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

export const EASY_READS: EasyRead[] = [...EASY_READ_A, ...EASY_READ_B];

export const EASY_READ_BY_ARTICLE: Record<string, EasyRead> = Object.fromEntries(EASY_READS.map((e) => [e.articleId, e]));
