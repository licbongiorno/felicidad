import type { Reference } from './types';

/**
 * Trampas del pensamiento (distorsiones cognitivas). Catálogo clásico de la terapia
 * cognitiva (Beck, 1979; Burns, 1980), con ejemplo y pregunta para desmontar cada una.
 * Se enlaza desde el registro de pensamientos del Diario.
 */

export interface ThinkingTrap {
  id: string;
  name: string;
  description: string;
  example: string;
  question: string;
  alternative: string;
}

export const THINKING_TRAPS: ThinkingTrap[] = [
  {
    id: 'catastrofizar',
    name: 'Catastrofizar',
    description: 'Dar por hecho que va a pasar lo peor, y que será insoportable.',
    example: '«Si me equivoco en la presentación, me despedirán y no encontraré otro trabajo.»',
    question: '¿Qué es lo más probable que pase, no lo peor? Y si pasara lo peor, ¿cómo lo afrontaría?',
    alternative: '«Puedo equivocarme en algo. Sería incómodo, pero no definiría mi trabajo.»',
  },
  {
    id: 'leer-la-mente',
    name: 'Leer la mente',
    description: 'Suponer que sabes lo que otra persona piensa, casi siempre algo negativo sobre ti.',
    example: '«No me contestó: seguro que está enfadada conmigo.»',
    question: '¿Qué pruebas tengo? ¿Qué otras explicaciones hay?',
    alternative: '«No lo sé. Puede estar ocupada. Si me importa, puedo preguntarle.»',
  },
  {
    id: 'adivinar-el-futuro',
    name: 'Adivinar el futuro',
    description: 'Predecir que algo saldrá mal y actuar como si ya hubiera ocurrido.',
    example: '«No voy a ir a la reunión: total, no voy a encajar.»',
    question: '¿Cuántas veces mis predicciones de este tipo se cumplieron de verdad?',
    alternative: '«No sé cómo irá. Puedo ir y comprobarlo.»',
  },
  {
    id: 'todo-o-nada',
    name: 'Todo o nada',
    description: 'Ver las cosas en blanco o negro, sin matices: perfecto o un desastre.',
    example: '«Si no saco un diez, he fracasado.»',
    question: '¿Hay puntos intermedios? ¿Dónde estaría esto en una escala del 0 al 100?',
    alternative: '«Un siete es un buen resultado, aunque no sea el que quería.»',
  },
  {
    id: 'sobregeneralizar',
    name: 'Sobregeneralizar',
    description: 'Sacar una conclusión general de un solo hecho. Aparecen palabras como «siempre», «nunca», «todo».',
    example: '«Me salió mal esta cita. Nunca voy a tener pareja.»',
    question: '¿Es verdad que siempre o nunca? ¿Hay excepciones?',
    alternative: '«Esta cita no fue bien. Eso no dice nada de todas las demás.»',
  },
  {
    id: 'filtro-mental',
    name: 'Filtro mental',
    description: 'Fijarse sólo en lo negativo y dejar fuera todo lo demás.',
    example: '«Me dijeron cinco cosas buenas y una crítica, y sólo pienso en la crítica.»',
    question: '¿Qué estoy dejando fuera? ¿Cómo sería el cuadro completo?',
    alternative: '«Recibí una crítica útil y cinco comentarios positivos.»',
  },
  {
    id: 'descalificar-lo-positivo',
    name: 'Descalificar lo positivo',
    description: 'Restar valor a lo que sale bien: «no cuenta», «fue suerte».',
    example: '«Me felicitaron, pero sólo por quedar bien.»',
    question: 'Si le pasara a un amigo, ¿también diría que no cuenta?',
    alternative: '«Hice algo bien y puedo reconocerlo.»',
  },
  {
    id: 'razonamiento-emocional',
    name: 'Razonamiento emocional',
    description: 'Tomar una emoción como prueba de un hecho: «lo siento, luego es verdad».',
    example: '«Me siento un fracaso, así que debo serlo.»',
    question: '¿Sentirlo lo convierte en un hecho? ¿Qué dicen los datos?',
    alternative: '«Me siento así ahora. Es una emoción, no una descripción de quién soy.»',
  },
  {
    id: 'deberia',
    name: 'Los «debería»',
    description: 'Reglas rígidas sobre cómo deberían ser las cosas, uno mismo o los demás.',
    example: '«Debería poder con todo sin pedir ayuda.»',
    question: '¿Quién dice que debería? ¿Qué pasa si lo cambio por «me gustaría»?',
    alternative: '«Me gustaría poder con más, y pedir ayuda también es válido.»',
  },
  {
    id: 'etiquetar',
    name: 'Etiquetar',
    description: 'Ponerse (o poner a otros) una etiqueta global a partir de una conducta.',
    example: '«Olvidé la cita: soy un desastre.»',
    question: '¿Una conducta define a toda una persona?',
    alternative: '«Olvidé una cita. Me pasa a veces, como a todo el mundo.»',
  },
  {
    id: 'personalizar',
    name: 'Personalizar',
    description: 'Sentirse responsable de cosas que dependen de muchos factores, o de otras personas.',
    example: '«Mi amigo está de mal humor: algo habré hecho.»',
    question: '¿Qué otras causas podría tener? ¿Qué parte depende de mí?',
    alternative: '«Su ánimo depende de muchas cosas. Si quiero, puedo preguntarle cómo está.»',
  },
  {
    id: 'magnificar',
    name: 'Magnificar y minimizar',
    description: 'Hacer más grandes tus errores y los logros de otros, y más pequeños tus logros.',
    example: '«Mi error fue gravísimo; lo que hice bien no tiene importancia.»',
    question: '¿Cómo lo vería alguien que no toma partido?',
    alternative: '«Fue un error real y tiene arreglo. También hice cosas que suman.»',
  },
];

export const THINKING_TRAPS_REFERENCES: Reference[] = [
  { citation: 'Beck, A. T., Rush, A. J., Shaw, B. F., & Emery, G. (1979). Cognitive therapy of depression. Guilford Press.' },
  { citation: 'Burns, D. D. (1980). Feeling good: The new mood therapy. William Morrow.' },
  {
    citation:
      'Hofmann, S. G., Asnaani, A., Vonk, I. J. J., Sawyer, A. T., & Fang, A. (2012). The efficacy of cognitive behavioral therapy: A review of meta-analyses. Cognitive Therapy and Research, 36(5), 427–440.',
    doi: '10.1007/s10608-012-9476-1',
  },
];
