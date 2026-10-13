import type { Practice, Reference } from './types';

/**
 * Habilidades de la terapia dialéctico-conductual (DBT) y entrenamiento asertivo:
 * kit de crisis (TIPP), acción opuesta y DEAR MAN.
 */

const LINEHAN_2015: Reference = { citation: 'Linehan, M. M. (2015). DBT skills training manual (2nd ed.). Guilford Press.' };
const CRISTEA_2017: Reference = {
  citation:
    'Cristea, I. A., Gentili, C., Cotet, C. D., Palomba, D., Barbui, C., & Cuijpers, P. (2017). Efficacy of psychotherapies for borderline personality disorder: A systematic review and meta-analysis. JAMA Psychiatry, 74(4), 319–328.',
  doi: '10.1001/jamapsychiatry.2016.4287',
  note: 'Evidencia de la DBT como tratamiento completo, del que estas habilidades son componentes.',
};

export const SKILL_PRACTICES: Practice[] = [
  {
    id: 'tipp',
    title: 'TIPP: kit de crisis',
    family: 'attentional',
    skills: ['resilience'],
    micro: true,
    summary: 'Cuatro maniobras físicas para bajar rápido una emoción al máximo: temperatura, ejercicio intenso, respiración pausada y relajación.',
    mechanism:
      'Actúa sobre el cuerpo, no sobre el pensamiento: cuando la emoción está al máximo, la mente no puede razonar, pero el sistema nervioso sí responde al frío, al esfuerzo y a la exhalación lenta.',
    evidenceLevel: 'moderada',
    evidence: [LINEHAN_2015, CRISTEA_2017],
    howItWorks: [
      'En la terapia dialéctico-conductual, TIPP es la primera línea para las crisis emocionales: los momentos en que la intensidad es tan alta que cualquier técnica de reflexión fracasa. Sus siglas resumen cuatro vías: Temperatura (agua fría en la cara), Intenso ejercicio, respiración Pausada y relajación muscular Progresiva emparejada con la respiración.',
      'El agua fría en la cara, con la respiración contenida, activa el reflejo de inmersión, que desacelera el corazón. El ejercicio intenso descarga la activación acumulada. La exhalación lenta activa el freno del sistema nervioso. Ninguna resuelve el problema: compran unos minutos de calma para poder pensar y no actuar en caliente.',
    ],
    tips: [
      'Practícalo una vez en calma para saber cómo se siente.',
      'Basta con una de las cuatro vías si no puedes hacer todas.',
      'Después de TIPP, vuelve al antídoto de tu emoción: ahora sí podrás reflexionar.',
    ],
    obstacles: [{ q: 'No tengo agua fría a mano.', a: 'Usa la respiración pausada o el ejercicio intenso: subir escaleras rápido o hacer sentadillas durante un minuto.' }],
    cautions:
      'No uses el agua fría si tienes problemas cardíacos, tensión baja, un trastorno de la conducta alimentaria o tomas betabloqueantes. No hagas ejercicio intenso si tienes una condición médica que lo desaconseje. Ante la duda, consulta a tu médico.',
    steps: [
      { title: 'Temperatura', instruction: 'Moja la cara con agua muy fría, o apoya algo frío en los ojos y las mejillas, durante 30 segundos. Contén un poco la respiración.', durationSec: 40 },
      { title: 'Ejercicio intenso', instruction: 'Mueve el cuerpo con energía: sube escaleras, salta o haz sentadillas. Descarga la tensión.', durationSec: 60 },
      { title: 'Respiración pausada', instruction: 'Exhala más largo de lo que inhalas. Sigue el círculo.', durationSec: 50, kind: 'breath' },
      { title: 'Soltar', instruction: 'Al exhalar, suelta hombros, manos y mandíbula. Nota cómo bajó la intensidad.', durationSec: 30, kind: 'breath' },
    ],
  },
  {
    id: 'accion-opuesta',
    title: 'Acción opuesta',
    family: 'constructive',
    skills: ['resilience'],
    summary: 'Cuando una emoción no se ajusta a los hechos, hacer justo lo contrario de lo que te impulsa a hacer, con todo el cuerpo.',
    mechanism:
      'Cada emoción trae un impulso de acción (huir, atacar, esconderse). Actuar en sentido opuesto, cuando la emoción no está justificada, interrumpe el ciclo que la mantiene.',
    evidenceLevel: 'preliminar',
    evidence: [
      LINEHAN_2015,
      {
        citation:
          'Rizvi, S. L., & Linehan, M. M. (2005). The treatment of maladaptive shame in borderline personality disorder: A pilot study of "opposite action". Cognitive and Behavioral Practice, 12(4), 437–447.',
        doi: '10.1016/S1077-7229(05)80071-9',
      },
    ],
    howItWorks: [
      'Las emociones no son sólo sentimientos: vienen con un impulso. El miedo empuja a evitar; la vergüenza, a esconderse; la ira, a atacar; la tristeza, a retirarse. Cuando ese impulso se sigue, la emoción se refuerza.',
      'La acción opuesta, una habilidad de la terapia dialéctico-conductual, consiste en revisar primero si la emoción se ajusta a los hechos. Si no se ajusta, o si actuar según ella no te ayuda, se hace lo contrario: acercarse en lugar de evitar, mostrarse en lugar de esconderse, ser amable en lugar de atacar. Hay que hacerlo del todo: postura, voz y expresión incluidas.',
    ],
    tips: [
      'Primero comprueba los hechos: si el miedo es a un peligro real, no hay que acercarse.',
      'Empieza con situaciones de intensidad moderada.',
      'La emoción tarda en bajar: sostén la acción opuesta un rato.',
    ],
    obstacles: [{ q: '¿No es reprimir lo que siento?', a: 'No: la emoción se reconoce y se siente. Lo que cambia es la conducta, y con ella, poco a poco, la emoción.' }],
    steps: [
      { title: 'Nombrar', instruction: '¿Qué emoción hay? Ponle un nombre preciso.', durationSec: 40, kind: 'reflection' },
      { title: 'El impulso', instruction: '¿Qué te empuja a hacer? Huir, atacar, esconderte, quedarte en la cama…', durationSec: 50, kind: 'reflection' },
      { title: 'Los hechos', instruction: '¿Se ajusta la emoción a lo que pasa, en intensidad y duración? ¿Seguir el impulso te ayuda?', durationSec: 75, kind: 'reflection' },
      { title: 'Lo opuesto', instruction: 'Si no se ajusta, elige la acción contraria: acercarte, mostrarte, ser amable, activarte.', durationSec: 60, kind: 'reflection' },
      { title: 'Del todo', instruction: 'Imagina que la haces con todo el cuerpo: postura erguida, voz tranquila, mirada abierta.', durationSec: 60 },
    ],
  },
  {
    id: 'dear-man',
    title: 'DEAR MAN: pedir lo que necesitas',
    family: 'constructive',
    skills: ['resilience', 'compassion'],
    summary: 'Preparar y ensayar una petición o un «no» de forma clara, respetuosa y firme.',
    mechanism:
      'Entrenamiento asertivo: estructurar la petición reduce la ansiedad anticipatoria y aumenta la probabilidad de expresarse sin agresividad ni sumisión.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation: 'Speed, B. C., Goldstein, B. L., & Goldfried, M. R. (2018). Assertiveness training: A forgotten evidence-based treatment. Clinical Psychology: Science and Practice, 25(1), e12216.',
        doi: '10.1111/cpsp.12216',
      },
      LINEHAN_2015,
    ],
    howItWorks: [
      'Muchas personas oscilan entre callar (para evitar el conflicto) y explotar (cuando ya no aguantan). La asertividad es una tercera vía: expresar lo que necesitas con claridad y respeto, también hacia ti.',
      'DEAR MAN es la guía de la terapia dialéctico-conductual para pedir algo o decir que no: Describe los hechos, Expresa lo que sientes, pide de forma Asertiva, Refuerza (explica qué gana la otra persona), mantente atento/a al objetivo (Mindful), Aparenta seguridad y Negocia si hace falta. Speed y colaboradores revisaron décadas de evidencia del entrenamiento asertivo y lo consideran un tratamiento eficaz e infrautilizado.',
    ],
    tips: [
      'Escríbelo antes en el Diario (plantilla «Preparar una conversación»).',
      'Si la otra persona desvía el tema, repite tu petición con calma («disco rayado»).',
      'Decide de antemano qué estás dispuesto/a a negociar y qué no.',
    ],
    obstacles: [{ q: 'Me da miedo que se enfaden.', a: 'Es posible. Pedir con respeto no garantiza la respuesta, pero te protege de callar lo que importa. Empieza por peticiones pequeñas.' }],
    steps: [
      { title: 'Describe', instruction: 'Piensa la situación en hechos, sin juicios: «Esta semana me pediste tres veces quedarme hasta tarde».', durationSec: 60, kind: 'reflection' },
      { title: 'Expresa', instruction: 'Cómo te afecta, en primera persona: «Me siento agotado/a y no llego a casa».', durationSec: 50, kind: 'reflection' },
      { title: 'Pide', instruction: 'Lo que quieres, claro y breve: «Necesito salir a mi hora al menos tres días».', durationSec: 50, kind: 'reflection' },
      { title: 'Refuerza', instruction: '¿Qué gana la otra persona? «Así rendiré mejor en las horas que estoy».', durationSec: 50, kind: 'reflection' },
      { title: 'Ensaya', instruction: 'Dilo en voz alta o mentalmente, con postura erguida y voz tranquila. Si te desvían, vuelve a tu petición.', durationSec: 75 },
      { title: 'Negociar', instruction: '¿Qué estarías dispuesto/a a ceder, y qué no?', durationSec: 45, kind: 'reflection' },
    ],
  },
];
