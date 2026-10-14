import type { AfflictiveEmotionId, Reference } from './types';

/**
 * Rueda de emociones: familias de emociones básicas con sus matices, de menor a mayor
 * intensidad. Ponerle un nombre preciso a lo que se siente (granularidad emocional)
 * ayuda a regularlo. Cada familia incluye lo que la DBT trabaja en «comprobar los hechos»
 * y «acción opuesta»: cuándo la emoción se ajusta a los hechos y qué hacer si no.
 */

export interface EmotionFamily {
  id: string;
  name: string;
  /** Matices, de menor a mayor intensidad. */
  shades: string[];
  /** Cómo suele sentirse en el cuerpo. */
  body: string;
  /** El impulso de acción que trae. */
  urge: string;
  /** Hechos que la justifican (DBT: comprobar los hechos). */
  fits: string;
  /** Acción opuesta si no se ajusta a los hechos o seguirla no ayuda. */
  opposite: string;
  /** Antídoto relacionado en la app. */
  antidoteId?: AfflictiveEmotionId;
}

export const EMOTION_FAMILIES: EmotionFamily[] = [
  {
    id: 'alegria',
    name: 'Alegría',
    shades: ['calma', 'satisfacción', 'contento/a', 'entusiasmo', 'euforia'],
    body: 'Sensación de ligereza, sonrisa, energía, ganas de moverte.',
    urge: 'Seguir haciendo lo que la provoca, compartirla, acercarte a otros.',
    fits: 'Algo te gusta, te sale bien o va en la dirección de lo que quieres.',
    opposite: 'Rara vez hace falta cambiarla. Si te lleva a arriesgarte de más, baja el ritmo y comprueba los hechos.',
  },
  {
    id: 'amor',
    name: 'Amor',
    shades: ['simpatía', 'cariño', 'ternura', 'afecto', 'pasión'],
    body: 'Calidez en el pecho, deseo de cercanía, mirada suave.',
    urge: 'Acercarte, cuidar, tocar, pasar tiempo con la persona.',
    fits: 'La persona, el animal o la cosa mejora tu vida o la de quienes quieres.',
    opposite: 'Si la relación te hace daño, aléjate poco a poco y deja de buscar el contacto, aunque cueste.',
  },
  {
    id: 'tristeza',
    name: 'Tristeza',
    shades: ['desánimo', 'decepción', 'pena', 'tristeza', 'desesperanza'],
    body: 'Pesadez, cansancio, nudo en la garganta, ganas de llorar.',
    urge: 'Retirarte, quedarte quieto/a, aislarte.',
    fits: 'Perdiste algo o a alguien importante, o algo que querías no salió.',
    opposite: 'Actívate: haz algo pequeño que te dé placer o logro, y busca a alguien con quien estar.',
    antidoteId: 'tristeza',
  },
  {
    id: 'miedo',
    name: 'Miedo',
    shades: ['inquietud', 'nervios', 'preocupación', 'ansiedad', 'pánico'],
    body: 'Corazón rápido, tensión, respiración corta, estómago revuelto.',
    urge: 'Huir, evitar, quedarte paralizado/a.',
    fits: 'Hay una amenaza real para tu vida, tu salud o tu bienestar.',
    opposite: 'Acércate, poco a poco, a lo que temes sin peligro real. Hazlo una y otra vez.',
    antidoteId: 'ansiedad',
  },
  {
    id: 'ira',
    name: 'Ira',
    shades: ['molestia', 'irritación', 'frustración', 'enfado', 'furia'],
    body: 'Calor, mandíbula y puños apretados, energía en los brazos.',
    urge: 'Atacar, gritar, defenderte, romper algo.',
    fits: 'Algo bloquea un objetivo importante, o tú o alguien que quieres sufre un daño o una injusticia.',
    opposite: 'Aléjate con amabilidad, respira y, si puedes, intenta entender a la otra persona. Habla con voz suave.',
    antidoteId: 'ira',
  },
  {
    id: 'verguenza',
    name: 'Vergüenza',
    shades: ['incomodidad', 'timidez', 'bochorno', 'humillación', 'vergüenza intensa'],
    body: 'Calor en la cara, mirada baja, ganas de hacerte pequeño/a.',
    urge: 'Esconderte, callar, desaparecer.',
    fits: 'Si algo de ti se supiera, te rechazarían personas que te importan.',
    opposite: 'Si no hay riesgo real de rechazo, muéstrate: levanta la cabeza, mira a los ojos y no te escondas.',
    antidoteId: 'autocritica',
  },
  {
    id: 'culpa',
    name: 'Culpa',
    shades: ['remordimiento leve', 'arrepentimiento', 'culpa', 'remordimiento', 'culpa intensa'],
    body: 'Peso en el pecho, inquietud, pensamientos que vuelven a lo que pasó.',
    urge: 'Pedir perdón, castigarte, reparar.',
    fits: 'Hiciste algo que va en contra de tus valores.',
    opposite: 'Si encaja, repara y aprende. Si no encaja, deja de disculparte y haz lo que te hace sentir culpa, una y otra vez.',
    antidoteId: 'culpa',
  },
  {
    id: 'envidia',
    name: 'Envidia',
    shades: ['deseo', 'comparación', 'envidia', 'resentimiento', 'rencor'],
    body: 'Tensión, malestar al ver a la otra persona, pensamientos de comparación.',
    urge: 'Criticar, quitar valor a lo del otro, compararte sin parar.',
    fits: 'Otra persona tiene algo que tú quieres y no tienes.',
    opposite: 'Deja de compararte, cuenta lo que sí tienes y alégrate de forma sincera por el otro.',
    antidoteId: 'envidia',
  },
  {
    id: 'celos',
    name: 'Celos',
    shades: ['inseguridad', 'sospecha', 'desconfianza', 'celos', 'celos intensos'],
    body: 'Agitación, nudo en el estómago, alerta constante.',
    urge: 'Controlar, vigilar, preguntar sin parar, acusar.',
    fits: 'Una relación importante corre un riesgo real de perderse por otra persona.',
    opposite: 'Suelta el control: deja de vigilar y de preguntar, y comparte lo que sientes sin acusar.',
  },
  {
    id: 'asco',
    name: 'Asco',
    shades: ['desagrado', 'rechazo', 'aversión', 'repugnancia', 'asco intenso'],
    body: 'Náuseas, gesto de rechazo en la cara, ganas de apartarte.',
    urge: 'Alejarte, apartar la cosa o a la persona, limpiarte.',
    fits: 'Algo puede contaminarte o enfermarte, o alguien actúa de una forma que te parece muy dañina.',
    opposite: 'Acércate a lo que no es peligroso. Si es una persona, intenta entenderla y trátala con respeto.',
  },
];

export const EMOTION_REFERENCES: Reference[] = [
  { citation: 'Linehan, M. M. (2015). DBT skills training manual (2nd ed.). Guilford Press.' },
  {
    citation:
      'Kashdan, T. B., Barrett, L. F., & McKnight, P. E. (2015). Unpacking emotion differentiation: Transforming unpleasant experience by perceiving distinctions in negativity. Current Directions in Psychological Science, 24(1), 10–16.',
    doi: '10.1177/0963721414550708',
  },
  {
    citation:
      'Lieberman, M. D., Eisenberger, N. I., Crockett, M. J., et al. (2007). Putting feelings into words: Affect labeling disrupts amygdala activity in response to affective stimuli. Psychological Science, 18(5), 421–428.',
    doi: '10.1111/j.1467-9280.2007.01916.x',
  },
];
