/**
 * Protagonistas de cada cuento: quién aparece en las ilustraciones. Cada cuento tiene su
 * elenco (personas con peinado, ropa y piel propios, o animales y personajes de los
 * clásicos), así las historias no se ven iguales entre sí.
 */

export type Species =
  | 'pez'
  | 'perro'
  | 'oso'
  | 'leon'
  | 'raton'
  | 'tortuga'
  | 'liebre'
  | 'zorra'
  | 'pato'
  | 'cisne'
  | 'pajaro'
  | 'golondrina'
  | 'burro'
  | 'gato'
  | 'gallo'
  | 'soldadito'
  | 'abeto'
  | 'estatua'
  | 'gigante'
  | 'duende'
  | 'nube'
  | 'sol';

export type Age = 'bebe' | 'nino' | 'teen' | 'adulto' | 'mayor';
export type Hair = 'corto' | 'largo' | 'colitas' | 'rulos' | 'rodete' | 'pelado' | 'cola';
export type Skin = 'clara' | 'media' | 'morena' | 'oscura';
export type Paint = 'sky' | 'mint' | 'coral' | 'sun' | 'lavender' | 'orange' | 'pink' | 'leaf';

export type CastMember =
  | { kind: 'persona'; age: Age; hair: Hair; hairColor: string; skin: Skin; shirt: Paint; extra?: 'corona' | 'anteojos' | 'auriculares' | 'gorro' | 'barba' }
  | { kind: 'animal'; species: Species; color?: string };

const P = (age: Age, hair: Hair, hairColor: string, skin: Skin, shirt: Paint, extra?: Extract<CastMember, { kind: 'persona' }>['extra']): CastMember => ({
  kind: 'persona',
  age,
  hair,
  hairColor,
  skin,
  shirt,
  extra,
});
const A = (species: Species, color?: string): CastMember => ({ kind: 'animal', species, color });

const CASTANO = '#7a4b2a';
const NEGRO = '#2b2420';
const RUBIO = '#d9a441';
const COLORADO = '#b5532a';
const CANOSO = '#cfcac4';

export const STORY_CAST: Record<string, CastMember[]> = {
  // Originales
  'mama-vuelve': [P('bebe', 'rulos', CASTANO, 'media', 'sun'), P('adulto', 'cola', NEGRO, 'media', 'coral')],
  'hermanito-nuevo': [P('nino', 'corto', RUBIO, 'clara', 'sky'), P('bebe', 'pelado', RUBIO, 'clara', 'pink')],
  'luz-de-noche': [P('nino', 'rulos', NEGRO, 'oscura', 'lavender')],
  'osito-y-lluvia': [A('oso', '#b07a4a'), A('pato', '#f2c94c')],
  'pez-burbuja': [P('nino', 'colitas', CASTANO, 'clara', 'pink'), A('pez', '#f2994a')],
  'dos-casas': [P('nino', 'largo', NEGRO, 'morena', 'mint')],
  'semilla-del-abuelo': [P('nino', 'corto', CASTANO, 'media', 'leaf'), P('mayor', 'pelado', CANOSO, 'media', 'orange', 'anteojos')],
  'leon-que-temblaba': [A('leon', '#e0a24a')],
  'perra-canela': [P('nino', 'corto', NEGRO, 'morena', 'orange'), A('perro', '#c98a4b')],
  'amiga-se-muda': [P('nino', 'colitas', COLORADO, 'clara', 'coral'), P('nino', 'largo', NEGRO, 'oscura', 'sky')],
  'el-trampolin': [P('nino', 'rulos', CASTANO, 'morena', 'sky')],
  'cartas-para-la-abuela': [P('nino', 'largo', RUBIO, 'clara', 'lavender'), P('mayor', 'rodete', CANOSO, 'clara', 'pink', 'anteojos')],
  'el-volcan-de-bruno': [P('nino', 'corto', COLORADO, 'clara', 'coral')],
  'el-faro': [P('teen', 'cola', NEGRO, 'morena', 'sun')],
  'la-chica-nueva': [P('nino', 'largo', NEGRO, 'media', 'lavender', 'auriculares'), P('nino', 'corto', CASTANO, 'clara', 'mint')],
  'lo-que-dejo-pirata': [A('perro', '#3d3d3d'), P('nino', 'rulos', NEGRO, 'oscura', 'orange')],
  'la-silla-vacia': [P('teen', 'largo', CASTANO, 'media', 'mint')],
  'lo-vivido': [P('teen', 'corto', NEGRO, 'morena', 'sky', 'auriculares')],
  'despues-del-accidente': [P('teen', 'cola', RUBIO, 'clara', 'coral'), P('teen', 'corto', NEGRO, 'oscura', 'leaf')],
  'dos-llaves': [P('teen', 'largo', COLORADO, 'clara', 'lavender')],
  // Clásicos
  'la-liebre-y-la-tortuga': [A('liebre', '#c9b39a'), A('tortuga', '#6aa36f')],
  'el-leon-y-el-raton': [A('leon', '#e0a24a'), A('raton', '#9e9ea6')],
  'el-viento-y-el-sol': [A('nube'), A('sol')],
  'la-zorra-y-las-uvas': [A('zorra', '#e07a3a')],
  'el-zapatero-y-los-duendes': [P('mayor', 'pelado', CANOSO, 'clara', 'orange', 'barba'), A('duende', '#6aa36f')],
  'el-patito-feo': [A('pato', '#9a9488'), A('cisne', '#fdfcf8')],
  'el-traje-nuevo-del-emperador': [P('adulto', 'corto', CASTANO, 'clara', 'lavender', 'corona'), P('nino', 'colitas', NEGRO, 'morena', 'sun')],
  'los-musicos-de-bremen': [A('burro', '#a59a8e'), A('gallo', '#d9533a'), A('gato', '#5a5a64')],
  'el-pescador-y-su-mujer': [P('mayor', 'pelado', CANOSO, 'media', 'sky', 'gorro'), A('pez', '#f2c94c')],
  'el-gigante-egoista': [A('gigante', '#8a7bb8'), P('nino', 'rulos', RUBIO, 'clara', 'leaf')],
  'el-soldadito-de-plomo': [A('soldadito')],
  'el-principe-feliz': [A('estatua'), A('golondrina')],
  'el-ruisenor': [A('pajaro', '#9b7a5a')],
  'el-abeto': [A('abeto')],
  'las-tres-preguntas': [P('adulto', 'corto', NEGRO, 'morena', 'coral', 'corona'), P('mayor', 'pelado', CANOSO, 'morena', 'leaf', 'barba')],
};
