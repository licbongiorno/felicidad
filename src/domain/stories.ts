import type { AgeBand, KidFeelingId, MascotMood } from './kids';
import type { Reference } from './types';
import { isPublished } from './governance';
import { STORIES_CLASSIC } from './stories-classic';
import { STORIES_ORIGINAL } from './stories-original';

/**
 * Cuentos para trabajar emociones y reflexiones de vida, por edad y por tema.
 *
 * - Hay cuentos originales y adaptaciones libres de clásicos en dominio público (Esopo,
 *   Andersen, los hermanos Grimm, Oscar Wilde, Tolstói). La adaptación se declara siempre.
 * - Los temas difíciles (muerte, duelo, separación) usan palabras claras: «murió», nunca
 *   «se durmió» o «se fue de viaje», porque esos eufemismos confunden y asustan a los chicos.
 * - Cada cuento trae preguntas para conversar después y una guía breve para el adulto.
 */

export type StoryTheme =
  | 'duelo'
  | 'muerte'
  | 'separacion'
  | 'esperanza'
  | 'valentia'
  | 'miedo'
  | 'enojo'
  | 'amistad'
  | 'diferencia'
  | 'paciencia'
  | 'gratitud'
  | 'sentido'
  | 'cambios';

export const STORY_THEMES: { id: StoryTheme; label: string; description: string }[] = [
  { id: 'duelo', label: 'Duelo', description: 'Extrañar a alguien y aprender a seguir con su recuerdo.' },
  { id: 'muerte', label: 'La muerte', description: 'Entender qué es morir, con palabras claras y calma.' },
  { id: 'separacion', label: 'Separación', description: 'Cuando la familia cambia o alguien se va lejos.' },
  { id: 'esperanza', label: 'Esperanza', description: 'Lo que sigue creciendo aunque el día esté gris.' },
  { id: 'valentia', label: 'Valentía', description: 'Hacer lo que importa aunque dé miedo.' },
  { id: 'miedo', label: 'Miedos', description: 'Mirar el miedo de frente, de a poquito.' },
  { id: 'enojo', label: 'Enojo', description: 'Sentir enojo sin lastimar a nadie.' },
  { id: 'amistad', label: 'Amistad', description: 'Cuidar a otros y dejarse cuidar.' },
  { id: 'diferencia', label: 'Ser distinto', description: 'Lo que nos hace únicos y el respeto por los demás.' },
  { id: 'paciencia', label: 'Paciencia', description: 'Las cosas buenas a veces llevan su tiempo.' },
  { id: 'gratitud', label: 'Gratitud', description: 'Darse cuenta de lo que ya tenemos.' },
  { id: 'sentido', label: 'Sentido', description: 'Para qué hacemos lo que hacemos.' },
  { id: 'cambios', label: 'Cambios', description: 'Mudanzas, hermanos nuevos y otros comienzos.' },
];

/** Escenarios de las ilustraciones (dibujos simples en SVG, ver components/kids/StoryScene). */
export type StoryScene = 'bosque' | 'mar' | 'casa' | 'noche' | 'ciudad' | 'jardin' | 'cielo' | 'invierno' | 'campo' | 'montana' | 'escuela' | 'lluvia';

export interface StoryPage {
  text: string;
  scene: StoryScene;
  /** Cómo acompaña Brote esta página. */
  mood?: MascotMood;
}

export type StorySource =
  | { kind: 'original' }
  | {
      kind: 'clasico';
      /** Título del original. */
      original: string;
      author: string;
      /** Año de la primera publicación (todas anteriores a 1930: dominio público). */
      year: number;
      /** Qué se cambió y por qué. */
      adaptation: string;
    };

export interface Story {
  id: string;
  title: string;
  /** Una línea para la tarjeta. */
  tagline: string;
  bands: AgeBand[];
  themes: StoryTheme[];
  source: StorySource;
  /** Minutos de lectura aproximados. */
  minutes: number;
  pages: StoryPage[];
  /** Para conversar al terminar (2 a 4 preguntas abiertas). */
  questions: string[];
  /** Guía breve para el adulto: cómo leerlo y qué cuidar. */
  forAdult: string;
  /** Temas sensibles: el adulto debería leerlo antes. */
  sensitive?: boolean;
  /** Emociones que el cuento ayuda a nombrar. */
  feelings: KidFeelingId[];
  /** Actividad de la sección para chicos que continúa el cuento. */
  activity?: string;
  references?: Reference[];
}

export const STORIES: Story[] = [...STORIES_ORIGINAL, ...STORIES_CLASSIC];

export const STORY_BY_ID = Object.fromEntries(STORIES.map((s) => [s.id, s])) as Record<string, Story>;

/** Prefijo del registro de lectura en kidActivities (activityId). */
export const STORY_LOG_PREFIX = 'cuento:';
export const storyLogId = (id: string) => `${STORY_LOG_PREFIX}${id}`;
export const storyOfLog = (activityId: string): Story | null =>
  activityId.startsWith(STORY_LOG_PREFIX) ? (STORY_BY_ID[activityId.slice(STORY_LOG_PREFIX.length)] ?? null) : null;

/** Año legible: los años antes de Cristo (Esopo) se muestran como siglo. */
export function sourceYear(year: number): string {
  if (year >= 0) return String(year);
  const century = Math.ceil(-year / 100);
  const roman = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'][century] ?? String(century);
  return `siglo ${roman} a. C.`;
}

export function storiesFor(band: AgeBand, theme?: StoryTheme | null): Story[] {
  return STORIES.filter((s) => s.bands.includes(band) && (!theme || s.themes.includes(theme)) && isPublished('cuento', s.id));
}

export function themesFor(band: AgeBand): typeof STORY_THEMES {
  const used = new Set(storiesFor(band).flatMap((s) => s.themes));
  return STORY_THEMES.filter((t) => used.has(t.id));
}
