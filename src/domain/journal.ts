import type { EvidenceLevel, JournalType, JournalValue, Reference } from './types';

/**
 * Diario estructurado. Cada tipo de registro es una intervención escrita con respaldo
 * empírico: escribir supera a pensar porque obliga a organizar la experiencia en lenguaje.
 */

export type FieldKind = 'text' | 'textarea' | 'scale';

export interface JournalField {
  id: string;
  label: string;
  kind: FieldKind;
  placeholder?: string;
  hint?: string;
  optional?: boolean;
  /** Sólo para 'scale': anclas verbales. */
  anchors?: [string, string];
}

export interface JournalTemplate {
  type: JournalType;
  title: string;
  summary: string;
  /** Cuándo usarlo. */
  when: string;
  rationale: string;
  evidenceLevel: EvidenceLevel;
  evidence: Reference[];
  fields: JournalField[];
  /** Escritura con temporizador sugerido (minutos). */
  suggestedMinutes?: number;
  caution?: string;
  /** Oculto en "nueva entrada" (se crea desde otra sección). */
  hidden?: boolean;
  /** Campo usado como titular en la línea de tiempo. */
  headline: string;
  /** Recurso de apoyo enlazado desde el editor. */
  helpLink?: { href: string; label: string };
}

export const JOURNAL_TEMPLATES: JournalTemplate[] = [
  {
    type: 'tres-cosas',
    title: 'Tres cosas buenas',
    summary: 'Tres cosas que salieron bien hoy y por qué ocurrieron.',
    when: 'Al final del día, dos o tres veces por semana.',
    rationale:
      'Preguntarte por qué salió bien algo construye explicaciones que incluyen tu agencia y la ayuda de otros. Es la versión escrita de la práctica del Gimnasio.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Seligman, M. E. P., Steen, T. A., Park, N., & Peterson, C. (2005). Positive psychology progress: Empirical validation of interventions. American Psychologist, 60(5), 410–421.',
        doi: '10.1037/0003-066X.60.5.410',
      },
    ],
    headline: 'cosa1',
    fields: [
      { id: 'cosa1', label: 'Primera cosa buena', kind: 'text', placeholder: 'Qué ocurrió' },
      { id: 'porque1', label: '¿Por qué ocurrió?', kind: 'text', placeholder: 'Tu papel, el de otros, las circunstancias' },
      { id: 'cosa2', label: 'Segunda cosa buena', kind: 'text' },
      { id: 'porque2', label: '¿Por qué ocurrió?', kind: 'text' },
      { id: 'cosa3', label: 'Tercera cosa buena', kind: 'text' },
      { id: 'porque3', label: '¿Por qué ocurrió?', kind: 'text' },
    ],
  },
  {
    type: 'defusion',
    title: 'Registro de defusión',
    summary: 'Tomar distancia de un pensamiento que engancha y volver a lo que importa.',
    when: 'Cuando un pensamiento se repite, duele o te frena.',
    rationale:
      'A diferencia del registro de pensamientos clásico, que discute si el pensamiento es verdadero, la defusión cambia la relación con él. Medir su credibilidad antes y después hace visible el efecto.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Masuda, A., Hayes, S. C., Sackett, C. F., & Twohig, M. P. (2004). Cognitive defusion and self-relevant negative thoughts: Examining the impact of a ninety year old technique. Behaviour Research and Therapy, 42(4), 477–485.',
        doi: '10.1016/j.brat.2003.10.008',
      },
      {
        citation:
          'Hayes, S. C., Luoma, J. B., Bond, F. W., Masuda, A., & Lillis, J. (2006). Acceptance and commitment therapy: Model, processes and outcomes. Behaviour Research and Therapy, 44(1), 1–25.',
        doi: '10.1016/j.brat.2005.06.006',
      },
    ],
    headline: 'pensamiento',
    fields: [
      { id: 'situacion', label: 'Situación', kind: 'text', placeholder: 'Dónde, cuándo, con quién (hechos)' },
      { id: 'pensamiento', label: 'El pensamiento, literal', kind: 'text', placeholder: 'Ej.: «No voy a poder»' },
      { id: 'credibilidadPre', label: '¿Cuánto te lo crees ahora?', kind: 'scale', anchors: ['0 · nada', '10 · totalmente'] },
      {
        id: 'defusion',
        label: 'Reescríbelo con distancia',
        kind: 'text',
        placeholder: 'Estoy teniendo el pensamiento de que…',
        hint: 'Añade «Estoy teniendo el pensamiento de que…» o «Mi mente me dice que…».',
      },
      { id: 'credibilidadPost', label: '¿Y ahora?', kind: 'scale', anchors: ['0 · nada', '10 · totalmente'] },
      { id: 'accion', label: 'Si llevas el pensamiento contigo, ¿qué acción valiosa puedes hacer igual?', kind: 'text', optional: true },
    ],
  },
  {
    type: 'saboreo',
    title: 'Saboreo',
    summary: 'Volver a vivir un momento agradable con todos los sentidos.',
    when: 'Tras un buen momento, o cuando necesites recordar que existen.',
    rationale:
      'Describir lo positivo con detalle sensorial prolonga la emoción y contrarresta la tendencia a amortiguarla («no es para tanto»).',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Quoidbach, J., Berry, E. V., Hansenne, M., & Mikolajczak, M. (2010). Positive emotion regulation and well-being: Comparing the impact of eight savoring and dampening strategies. Personality and Individual Differences, 49(5), 368–373.',
        doi: '10.1016/j.paid.2010.03.048',
      },
    ],
    headline: 'momento',
    fields: [
      { id: 'momento', label: 'El momento', kind: 'text', placeholder: 'Qué pasó' },
      { id: 'sentidos', label: 'Lo que viste, oíste, oliste, sentiste', kind: 'textarea' },
      { id: 'emocion', label: 'La emoción, con su nombre más preciso', kind: 'text', placeholder: 'Calma, ternura, orgullo, asombro…' },
      { id: 'compartir', label: '¿Con quién podrías compartirlo?', kind: 'text', optional: true },
    ],
  },
  {
    type: 'valores',
    title: 'Acción con valores',
    summary: 'Elegir un paso pequeño en la dirección de lo que te importa.',
    when: 'Al empezar la semana, o cuando te sientas a la deriva.',
    rationale:
      'Los valores son direcciones, no metas. Escribir una acción concreta y anticipar el obstáculo interno aumenta la probabilidad de hacerla.',
    evidenceLevel: 'moderada',
    evidence: [
      { citation: 'Hayes, S. C., Strosahl, K. D., & Wilson, K. G. (2012). Acceptance and Commitment Therapy (2nd ed.). Guilford Press.' },
    ],
    headline: 'accion',
    fields: [
      { id: 'dominio', label: 'Área de vida', kind: 'text', placeholder: 'Vínculos, trabajo, salud, comunidad…' },
      { id: 'valor', label: 'La cualidad que quieres encarnar', kind: 'text', placeholder: 'Ej.: presente, valiente, generoso/a' },
      { id: 'accion', label: 'Acción concreta (próximas 24–72 h)', kind: 'text' },
      { id: 'obstaculo', label: 'Obstáculo interno probable', kind: 'text', placeholder: 'Pensamiento o emoción que podría frenarte' },
      { id: 'plan', label: 'Si aparece, entonces…', kind: 'text', optional: true },
    ],
  },
  {
    type: 'escritura-expresiva',
    title: 'Escritura expresiva',
    summary: 'Escribir sin filtro sobre una experiencia que te afecta profundamente.',
    when: '15–20 minutos, durante 3 o 4 días seguidos, sobre un mismo tema difícil.',
    rationale:
      'James Pennebaker mostró que escribir sobre pensamientos y emociones profundas en torno a experiencias difíciles mejora con el tiempo indicadores de salud física y psicológica. El efecto parece venir de construir una narrativa coherente.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Frattaroli, J. (2006). Experimental disclosure and its moderators: A meta-analysis. Psychological Bulletin, 132(6), 823–865.',
        doi: '10.1037/0033-2909.132.6.823',
      },
      { citation: 'Pennebaker, J. W., & Smyth, J. M. (2016). Opening up by writing it down (3rd ed.). Guilford Press.' },
    ],
    suggestedMinutes: 15,
    caution:
      'Es normal sentirse peor justo después de escribir; suele mejorar en los días siguientes. Si un tema te desborda, elige otro o trabájalo en terapia. No es recomendable inmediatamente después de un trauma reciente.',
    headline: 'tema',
    fields: [
      { id: 'tema', label: 'Tema', kind: 'text', placeholder: 'Una palabra o frase, sólo para ti' },
      {
        id: 'texto',
        label: 'Escribe sin detenerte',
        kind: 'textarea',
        hint: 'No cuides ortografía ni estilo. Explora tanto lo que pasó como lo que sentiste y pensaste, y cómo se conecta con tu vida.',
      },
      { id: 'malestarPost', label: '¿Cuánto malestar sientes ahora?', kind: 'scale', anchors: ['0 · ninguno', '10 · máximo'], optional: true },
    ],
  },
  {
    type: 'carta-gratitud',
    title: 'Carta de gratitud',
    summary: 'Agradecer por escrito, con detalle, a alguien que te ayudó y a quien nunca se lo dijiste del todo.',
    when: 'Una vez, con calma. Mejor si después la entregas o la lees en persona.',
    rationale:
      'La «visita de gratitud» produjo el mayor aumento inmediato de felicidad de las intervenciones estudiadas por Seligman, aunque el efecto se desvaneció en semanas. Escribir con detalle concreto (qué hizo, cómo te afectó) es lo que la hace poderosa.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Seligman, M. E. P., Steen, T. A., Park, N., & Peterson, C. (2005). Positive psychology progress: Empirical validation of interventions. American Psychologist, 60(5), 410–421.',
        doi: '10.1037/0003-066X.60.5.410',
      },
      {
        citation:
          'Kumar, A., & Epley, N. (2018). Undervaluing gratitude: Expressers misunderstand the consequences of showing appreciation. Psychological Science, 29(9), 1423–1435.',
        doi: '10.1177/0956797618772506',
        note: 'Quien escribe subestima sistemáticamente cuánto alegrará la carta a quien la recibe.',
      },
    ],
    headline: 'destinatario',
    fields: [
      { id: 'destinatario', label: 'Para', kind: 'text' },
      { id: 'carta', label: 'La carta', kind: 'textarea', hint: 'Qué hizo, cuándo, y cómo cambió tu vida. Concreto mejor que general.' },
      { id: 'entrega', label: '¿Cómo y cuándo podrías hacérsela llegar?', kind: 'text', optional: true },
    ],
  },
  {
    type: 'mejor-yo',
    title: 'Mi mejor yo posible',
    summary: 'Describir un futuro realista en el que todo ha ido tan bien como podía ir.',
    when: '20 minutos, idealmente durante varios días seguidos.',
    rationale:
      'Escribir sobre metas vitales de este modo produjo beneficios comparables a la escritura expresiva, sin su malestar inicial. Aumenta sobre todo el optimismo.',
    evidenceLevel: 'robusta',
    evidence: [
      {
        citation:
          'King, L. A. (2001). The health benefits of writing about life goals. Personality and Social Psychology Bulletin, 27(7), 798–807.',
        doi: '10.1177/0146167201277003',
      },
      {
        citation:
          'Carrillo, A., Rubio-Aparicio, M., Molinari, G., et al. (2019). Effects of the Best Possible Self intervention: A systematic review and meta-analysis. PLoS ONE, 14(9), e0222386.',
        doi: '10.1371/journal.pone.0222386',
      },
    ],
    suggestedMinutes: 20,
    headline: 'horizonte',
    fields: [
      { id: 'horizonte', label: 'Horizonte', kind: 'text', placeholder: 'Ej.: dentro de 5 años' },
      { id: 'texto', label: 'Ese futuro, en presente y con detalle', kind: 'textarea' },
      { id: 'paso', label: 'Un primer paso para esta semana', kind: 'text' },
    ],
  },
  {
    type: 'reestructuracion',
    title: 'Registro de pensamientos',
    summary: 'Examinar un pensamiento automático con evidencia y construir una alternativa más equilibrada.',
    when: 'Cuando una emoción intensa viene de una interpretación que podría no ser del todo exacta.',
    rationale:
      'Es la herramienta central de la terapia cognitivo-conductual (Beck). No se trata de «pensar en positivo», sino de tratar el pensamiento como una hipótesis: revisar los datos a favor y en contra y formular una lectura más ajustada. Medir la emoción antes y después hace visible el efecto.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Hofmann, S. G., Asnaani, A., Vonk, I. J. J., Sawyer, A. T., & Fang, A. (2012). The efficacy of cognitive behavioral therapy: A review of meta-analyses. Cognitive Therapy and Research, 36(5), 427–440.',
        doi: '10.1007/s10608-012-9476-1',
      },
      { citation: 'Beck, J. S. (2021). Cognitive behavior therapy: Basics and beyond (3rd ed.). Guilford Press.' },
    ],
    headline: 'pensamiento',
    helpLink: { href: '/biblioteca/trampas-del-pensamiento', label: 'Ver las 12 trampas del pensamiento' },
    fields: [
      { id: 'situacion', label: 'Situación', kind: 'text', placeholder: 'Qué pasó, dónde, con quién (hechos)' },
      { id: 'emocion', label: 'Emoción, con el nombre más preciso posible', kind: 'text', placeholder: 'Ej.: frustración, vergüenza, miedo' },
      { id: 'intensidadPre', label: 'Intensidad de la emoción', kind: 'scale', anchors: ['0 · nada', '10 · máxima'] },
      { id: 'pensamiento', label: 'Pensamiento automático', kind: 'text', placeholder: 'Lo que pasó por tu mente, literal' },
      { id: 'trampa', label: '¿Qué trampa del pensamiento reconoces?', kind: 'text', placeholder: 'Ej.: catastrofizar, leer la mente', optional: true },
      { id: 'aFavor', label: 'Datos que apoyan el pensamiento', kind: 'text', hint: 'Hechos, no sensaciones.' },
      { id: 'enContra', label: 'Datos que no encajan con el pensamiento', kind: 'text', hint: '¿Qué le dirías a un amigo que pensara esto?' },
      { id: 'alternativo', label: 'Pensamiento alternativo, más equilibrado', kind: 'text' },
      { id: 'intensidadPost', label: 'Intensidad de la emoción ahora', kind: 'scale', anchors: ['0 · nada', '10 · máxima'] },
    ],
  },
  {
    type: 'carta-compasiva',
    title: 'Carta compasiva',
    summary: 'Escribirte como lo haría un amigo sabio y amable que conoce tus dificultades.',
    when: 'Cuando la autocrítica es fuerte, tras un error o en un momento de vergüenza.',
    rationale:
      'Escribir desde una perspectiva compasiva activa el sistema de cuidado y crea distancia de la voz crítica. Shapira y Mongrain encontraron que una semana de cartas compasivas a uno mismo redujo síntomas depresivos durante tres meses y aumentó la felicidad durante seis.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Shapira, L. B., & Mongrain, M. (2010). The benefits of self-compassion and optimism exercises for individuals vulnerable to depression. The Journal of Positive Psychology, 5(5), 377–389.',
        doi: '10.1080/17439760.2010.516763',
      },
    ],
    suggestedMinutes: 15,
    caution: 'Al principio puede costar o incluso doler. Es normal: la voz crítica suele estar más practicada que la compasiva.',
    headline: 'dificultad',
    fields: [
      { id: 'dificultad', label: 'Lo que te duele o te criticas', kind: 'text', placeholder: 'En una frase' },
      {
        id: 'carta',
        label: 'La carta',
        kind: 'textarea',
        hint: 'Escribe como un amigo que te conoce y te quiere: reconoce el dolor, recuerda que equivocarse es humano y sugiere con amabilidad qué podría ayudarte.',
      },
      { id: 'frase', label: 'Una frase para recordar esta semana', kind: 'text', optional: true },
    ],
  },
  {
    type: 'activacion',
    title: 'Registro de actividades',
    summary: 'Anotar una actividad y cuánto placer y logro te dio, para descubrir qué te nutre.',
    when: 'Después de hacer algo planificado, sobre todo en épocas de desánimo.',
    rationale:
      'En la activación conductual, registrar placer y logro desmonta la predicción pesimista del desánimo («no me va a servir de nada») y revela qué actividades sostienen el ánimo. Es la parte de seguimiento de una de las intervenciones con mejor evidencia en depresión.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Cuijpers, P., van Straten, A., & Warmerdam, L. (2007). Behavioral activation treatments of depression: A meta-analysis. Clinical Psychology Review, 27(3), 318–326.',
        doi: '10.1016/j.cpr.2006.11.001',
      },
    ],
    headline: 'actividad',
    fields: [
      { id: 'actividad', label: 'Actividad', kind: 'text', placeholder: 'Qué hiciste' },
      { id: 'prediccion', label: 'Antes, ¿cuánto creías que te ayudaría?', kind: 'scale', anchors: ['0 · nada', '10 · mucho'], optional: true },
      { id: 'placer', label: 'Placer que te dio', kind: 'scale', anchors: ['0 · ninguno', '10 · muchísimo'] },
      { id: 'logro', label: 'Sensación de logro', kind: 'scale', anchors: ['0 · ninguna', '10 · muchísima'] },
      { id: 'nota', label: '¿Qué notaste?', kind: 'text', optional: true },
    ],
  },
  {
    type: 'preocupacion',
    title: 'Tiempo de preocupación',
    summary: 'Darle a la preocupación un lugar y un tiempo, y separar lo que depende de ti de lo que no.',
    when: 'En tu momento fijo del día para preocuparte (unos 20 minutos, no antes de dormir).',
    rationale:
      'El control de estímulos de Borkovec reduce la preocupación posponiéndola a un periodo fijo. Escribirla en ese momento la vuelve concreta: lo controlable se convierte en un paso y lo incontrolable se reconoce como tal.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Borkovec, T. D., Wilkinson, L., Folensbee, R., & Lerman, C. (1983). Stimulus control applications to the treatment of worry. Behaviour Research and Therapy, 21(3), 247–251.',
        doi: '10.1016/0005-7967(83)90206-1',
      },
    ],
    headline: 'preocupacion',
    fields: [
      { id: 'preocupacion', label: 'La preocupación', kind: 'text', placeholder: '¿Y si…?' },
      { id: 'probabilidad', label: '¿Qué tan probable es que ocurra lo peor?', kind: 'scale', anchors: ['0 · imposible', '10 · seguro'] },
      { id: 'controlable', label: 'Lo que depende de mí', kind: 'text' },
      { id: 'paso', label: 'Próximo paso concreto (y cuándo)', kind: 'text' },
      { id: 'soltar', label: 'Lo que no depende de mí y puedo soltar por ahora', kind: 'text', optional: true },
    ],
  },
  {
    type: 'perdon',
    title: 'Perdón por escrito',
    summary: 'Recorrer por escrito los pasos del modelo REACH para soltar un resentimiento.',
    when: 'Cuando una ofensa pasada sigue ocupando tu mente.',
    rationale:
      'Las intervenciones de perdón reducen la depresión y la ansiedad, con efectos proporcionales al tiempo dedicado. Escribir obliga a recorrer cada paso con calma en lugar de saltar directamente a «debería perdonar».',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Wade, N. G., Hoyt, W. T., Kidwell, J. E. M., & Worthington, E. L. (2014). Efficacy of psychotherapeutic interventions to promote forgiveness: A meta-analysis. Journal of Consulting and Clinical Psychology, 82(1), 154–170.',
        doi: '10.1037/a0035268',
      },
    ],
    caution: 'Perdonar no es reconciliarse ni dejar de protegerte. Si el daño continúa, prioriza tu seguridad.',
    headline: 'ofensa',
    fields: [
      { id: 'ofensa', label: 'La ofensa, contada por un narrador neutral', kind: 'text' },
      { id: 'empatia', label: '¿Qué pudo llevar a esa persona a actuar así?', kind: 'textarea', hint: 'Comprender no es justificar.' },
      { id: 'regalo', label: 'Una vez en que alguien me perdonó', kind: 'text', optional: true },
      { id: 'compromiso', label: 'Lo que decido hoy respecto a este agravio', kind: 'text' },
    ],
  },
  {
    type: 'intencion',
    title: 'Intención del día',
    summary: 'Elegir cómo quieres estar hoy y anclarlo a un momento concreto con un «si…, entonces…».',
    when: 'Por la mañana, en dos minutos.',
    rationale:
      'Las intenciones de implementación («si ocurre X, entonces haré Y») tienen un efecto medio-grande sobre el logro de metas en un metaanálisis de 94 estudios, porque trasladan la decisión del momento difícil a un momento de calma.',
    evidenceLevel: 'robusta',
    evidence: [
      {
        citation:
          'Gollwitzer, P. M., & Sheeran, P. (2006). Implementation intentions and goal achievement: A meta-analysis of effects and processes. Advances in Experimental Social Psychology, 38, 69–119.',
        doi: '10.1016/S0065-2601(06)38002-1',
      },
    ],
    headline: 'valor',
    fields: [
      { id: 'valor', label: '¿Cómo quiero estar hoy?', kind: 'text', placeholder: 'Ej.: paciente con mi hijo, presente en el trabajo' },
      { id: 'si', label: 'Si / cuando…', kind: 'text', placeholder: 'Ej.: cuando llegue a casa y note cansancio' },
      { id: 'entonces', label: '…entonces haré…', kind: 'text', placeholder: 'Ej.: tres respiraciones lentas antes de entrar' },
      { id: 'obstaculo', label: 'Obstáculo probable', kind: 'text', optional: true },
    ],
  },
  {
    type: 'resolucion-problemas',
    title: 'Resolución de problemas',
    summary: 'Pasar de un problema que abruma a un primer paso concreto, en cinco fases.',
    when: 'Cuando un problema te da vueltas y no sabes por dónde empezar.',
    rationale:
      'La terapia de resolución de problemas separa fases que la mente mezcla: definir, generar opciones, evaluar y elegir. Escribirlo evita saltar del problema al miedo sin pasar por la acción.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation: 'Bell, A. C., & D’Zurilla, T. J. (2009). Problem-solving therapy for depression: A meta-analysis. Clinical Psychology Review, 29(4), 348–353.',
        doi: '10.1016/j.cpr.2009.02.003',
      },
    ],
    headline: 'problema',
    fields: [
      { id: 'problema', label: 'El problema, en concreto', kind: 'text', placeholder: 'Qué pasa, cuándo, con quién' },
      { id: 'objetivo', label: 'Objetivo realista', kind: 'text', placeholder: 'Qué cambio quiero conseguir' },
      { id: 'opciones', label: 'Todas las opciones (sin juzgarlas)', kind: 'textarea', hint: 'Al menos cinco, incluidas las que parecen absurdas.' },
      { id: 'elegida', label: 'La opción elegida y por qué', kind: 'text' },
      { id: 'plan', label: 'Primer paso, día y hora', kind: 'text' },
      { id: 'revision', label: 'Revisión: ¿cómo fue?', kind: 'text', optional: true },
    ],
  },
  {
    type: 'diario-sueno',
    title: 'Diario de sueño',
    summary: 'Registrar cada mañana cómo dormiste, en el formato que usa la terapia del insomnio.',
    when: 'Cada mañana al levantarte, durante al menos dos semanas.',
    rationale:
      'El diario de sueño es la herramienta estándar de la terapia cognitivo-conductual para el insomnio: permite ver patrones reales (no la impresión general de «duermo fatal») y calcular la eficiencia del sueño. El formato sigue el consenso internacional.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation: 'Carney, C. E., Buysse, D. J., Ancoli-Israel, S., et al. (2012). The consensus sleep diary: Standardizing prospective sleep self-monitoring. Sleep, 35(2), 287–302.',
        doi: '10.5665/sleep.1642',
      },
      {
        citation:
          'Trauer, J. M., Qian, M. Y., Doyle, J. S., Rajaratnam, S. M. W., & Cunnington, D. (2015). Cognitive behavioral therapy for chronic insomnia: A systematic review and meta-analysis. Annals of Internal Medicine, 163(3), 191–204.',
        doi: '10.7326/M14-2841',
      },
    ],
    headline: 'calidadTexto',
    fields: [
      { id: 'acostarse', label: 'Hora a la que te acostaste', kind: 'text', placeholder: 'Ej.: 23:30' },
      { id: 'latencia', label: 'Minutos hasta dormirte (aproximado)', kind: 'text', placeholder: 'Ej.: 40' },
      { id: 'despertares', label: 'Despertares y tiempo despierto/a', kind: 'text', placeholder: 'Ej.: 2 veces, unos 30 min' },
      { id: 'levantarse', label: 'Hora a la que te levantaste', kind: 'text', placeholder: 'Ej.: 7:15' },
      { id: 'calidad', label: 'Calidad del sueño', kind: 'scale', anchors: ['0 · pésima', '10 · excelente'] },
      { id: 'calidadTexto', label: 'En una frase, ¿cómo dormiste?', kind: 'text' },
    ],
  },
  {
    type: 'experimento',
    title: 'Experimento conductual',
    summary: 'Poner a prueba una creencia con un pequeño experimento en la vida real.',
    when: 'Cuando una creencia («si digo que no, se enfadarán») te limita y quieres comprobarla.',
    rationale:
      'Los experimentos conductuales son una de las herramientas más potentes de la terapia cognitiva: en lugar de discutir una creencia, se diseña una prueba, se hace una predicción y se compara con lo que realmente ocurre. Se aprende de la experiencia, no sólo del razonamiento.',
    evidenceLevel: 'moderada',
    evidence: [
      { citation: 'Bennett-Levy, J., Butler, G., Fennell, M., et al. (2004). Oxford guide to behavioural experiments in cognitive therapy. Oxford University Press.' },
    ],
    headline: 'creencia',
    fields: [
      { id: 'creencia', label: 'La creencia que quiero poner a prueba', kind: 'text' },
      { id: 'credibilidadPre', label: '¿Cuánto me la creo?', kind: 'scale', anchors: ['0 · nada', '10 · totalmente'] },
      { id: 'experimento', label: 'Qué haré para comprobarla', kind: 'text' },
      { id: 'prediccion', label: 'Lo que predigo que pasará', kind: 'text' },
      { id: 'resultado', label: 'Lo que pasó de verdad', kind: 'text', optional: true },
      { id: 'aprendizaje', label: 'Lo que aprendí', kind: 'text', optional: true },
      { id: 'credibilidadPost', label: '¿Cuánto me la creo ahora?', kind: 'scale', anchors: ['0 · nada', '10 · totalmente'], optional: true },
    ],
  },
  {
    type: 'escalera-exposicion',
    title: 'Escalera de exposición',
    summary: 'Ordenar de menor a mayor las situaciones que evitas por miedo y empezar por el escalón más bajo.',
    when: 'Cuando el miedo te lleva a evitar situaciones importantes para ti.',
    rationale:
      'La exposición gradual es el componente con más evidencia en el tratamiento de los trastornos de ansiedad: acercarse a lo temido de forma progresiva y repetida permite aprender que es tolerable y que lo temido no ocurre (o es manejable).',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Carpenter, J. K., Andrews, L. A., Witcraft, S. M., et al. (2018). Cognitive behavioral therapy for anxiety and related disorders: A meta-analysis of randomized placebo-controlled trials. Depression and Anxiety, 35(6), 502–514.',
        doi: '10.1002/da.22728',
      },
    ],
    caution:
      'Empieza por escalones que te generen un malestar moderado (3–4 de 10), nunca extremo. Si la ansiedad es muy intensa, hay ataques de pánico frecuentes o historia de trauma, hazlo con un/a terapeuta.',
    headline: 'miedo',
    fields: [
      { id: 'miedo', label: 'Lo que temo y evito', kind: 'text' },
      { id: 'escalones', label: 'Situaciones de menor a mayor malestar (0–10)', kind: 'textarea', hint: 'Una por línea, con su malestar estimado. Ej.: «Llamar para pedir cita · 3».' },
      { id: 'escalon', label: 'El escalón que voy a practicar', kind: 'text' },
      { id: 'malestarPrevisto', label: 'Malestar que espero', kind: 'scale', anchors: ['0 · nada', '10 · máximo'] },
      { id: 'malestarReal', label: 'Malestar que sentí', kind: 'scale', anchors: ['0 · nada', '10 · máximo'], optional: true },
      { id: 'aprendizaje', label: 'Lo que aprendí', kind: 'text', optional: true },
    ],
  },
  {
    type: 'plan-seguridad',
    title: 'Plan de seguridad',
    summary: 'Tu plan personal para los momentos de crisis.',
    when: 'Desde la sección Plan de seguridad.',
    rationale: 'Modelo de Stanley y Brown. Se guarda como versiones sucesivas: la última es tu plan vigente.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Stanley, B., Brown, G. K., Brenner, L. A., et al. (2018). Comparison of the safety planning intervention with follow-up vs usual care of suicidal patients treated in the emergency department. JAMA Psychiatry, 75(9), 894–900.',
        doi: '10.1001/jamapsychiatry.2018.1776',
      },
    ],
    hidden: true,
    headline: 'senales',
    fields: [
      { id: 'senales', label: 'Mis señales de alerta', kind: 'textarea', optional: true },
      { id: 'estrategias', label: 'Lo que puedo hacer por mi cuenta para calmarme', kind: 'textarea', optional: true },
      { id: 'distraccion', label: 'Personas y lugares que me ayudan a distraerme', kind: 'textarea', optional: true },
      { id: 'ayuda', label: 'Personas a quienes puedo pedir ayuda (con teléfono)', kind: 'textarea', optional: true },
      { id: 'profesionales', label: 'Profesionales y servicios de urgencia', kind: 'textarea', optional: true },
      { id: 'entorno', label: 'Cómo hacer mi entorno más seguro', kind: 'textarea', optional: true },
      { id: 'razones', label: 'Mis razones para vivir', kind: 'textarea', optional: true },
    ],
  },
  {
    type: 'conversacion',
    title: 'Preparar una conversación difícil',
    summary: 'Ordenar por escrito una petición o un «no» antes de decirlo, con la estructura DEAR MAN.',
    when: 'Antes de pedir algo importante, poner un límite o plantear un desacuerdo.',
    rationale:
      'Preparar la conversación reduce la ansiedad anticipatoria y ayuda a expresarse con claridad, sin callar ni explotar. Es el núcleo del entrenamiento asertivo, una intervención con décadas de evidencia.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation: 'Speed, B. C., Goldstein, B. L., & Goldfried, M. R. (2018). Assertiveness training: A forgotten evidence-based treatment. Clinical Psychology: Science and Practice, 25(1), e12216.',
        doi: '10.1111/cpsp.12216',
      },
    ],
    headline: 'peticion',
    helpLink: { href: '/gimnasio/dear-man', label: 'Practicar DEAR MAN' },
    fields: [
      { id: 'con', label: 'Con quién', kind: 'text' },
      { id: 'hechos', label: 'Los hechos, sin juicios', kind: 'text', placeholder: 'Ej.: Esta semana me pediste tres veces quedarme hasta tarde' },
      { id: 'siento', label: 'Cómo me afecta (en primera persona)', kind: 'text', placeholder: 'Ej.: Me siento agotado/a' },
      { id: 'peticion', label: 'Lo que pido, claro y breve', kind: 'text' },
      { id: 'gana', label: 'Qué gana la otra persona', kind: 'text', optional: true },
      { id: 'negociable', label: 'Qué puedo ceder y qué no', kind: 'text', optional: true },
      { id: 'resultado', label: 'Después: ¿cómo fue?', kind: 'text', optional: true },
    ],
  },
  {
    type: 'reflexion-carta',
    title: 'Reflexión sobre una carta',
    summary: 'Tu respuesta a una de las cartas filosóficas.',
    when: 'Desde la sección Cartas.',
    rationale: 'Responder por escrito a una perspectiva ajena consolida el distanciamiento que la carta inicia.',
    evidenceLevel: 'preliminar',
    evidence: [],
    hidden: true,
    headline: 'autor',
    fields: [
      { id: 'autor', label: 'Carta', kind: 'text' },
      { id: 'texto', label: 'Reflexión', kind: 'textarea' },
    ],
  },
];

export const TEMPLATE_BY_TYPE = Object.fromEntries(JOURNAL_TEMPLATES.map((t) => [t.type, t])) as Record<
  JournalTemplate['type'],
  JournalTemplate
>;

/** Límites también impuestos en las reglas de Firestore. */
export const MAX_TEXT = 280;
export const MAX_TEXTAREA = 8000;

export function isComplete(template: JournalTemplate, values: Record<string, JournalValue | undefined>): boolean {
  return template.fields.every((f) => {
    if (f.optional) return true;
    const v = values[f.id];
    return f.kind === 'scale' ? typeof v === 'number' : typeof v === 'string' && v.trim().length > 0;
  });
}
