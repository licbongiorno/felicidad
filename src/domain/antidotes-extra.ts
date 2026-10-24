import type { Antidote, Reference } from './types';

/** Segunda tanda de antídotos. Misma estructura: reconocer → observar → antídoto → integrar. */

const LABELING: Reference = {
  citation:
    'Lieberman, M. D., Eisenberger, N. I., Crockett, M. J., et al. (2007). Putting feelings into words: Affect labeling disrupts amygdala activity in response to affective stimuli. Psychological Science, 18(5), 421–428.',
  doi: '10.1111/j.1467-9280.2007.01916.x',
};
const ACCEPTANCE: Reference = {
  citation:
    'Ford, B. Q., Lam, P., John, O. P., & Mauss, I. B. (2018). The psychological health benefits of accepting negative emotions and thoughts: Laboratory, diary, and longitudinal evidence. Journal of Personality and Social Psychology, 115(6), 1075–1092.',
  doi: '10.1037/pspp0000157',
};

export const EXTRA_ANTIDOTES: Antidote[] = [
  {
    emotionId: 'tristeza',
    emotionLabel: 'Tristeza o pena',
    markers: 'Pesadez, ganas de llorar, nudo en la garganta, sensación de pérdida.',
    antidoteName: 'Permitir y acompañar',
    incompatibility:
      'La tristeza no es un error que haya que corregir: es la respuesta natural a una pérdida. Lo que la vuelve sufrimiento añadido es la lucha contra ella y la soledad. El antídoto no la elimina: la acompaña con amabilidad, como acompañarías a un amigo.',
    evidenceLevel: 'moderada',
    evidence: [ACCEPTANCE, LABELING],
    trainingPracticeId: 'pausa-autocompasion',
    science: [
      'Ford y colaboradores encontraron, en estudios de laboratorio, diarios y seguimiento longitudinal, que las personas que aceptan sus emociones negativas en lugar de juzgarlas tienen menos síntomas de depresión y ansiedad con el tiempo. Aceptar reduce la intensidad de la emoción, mientras que luchar contra ella la amplifica.',
      'La tristeza cumple funciones: señala lo que importa, invita a pedir apoyo y da tiempo para procesar una pérdida. Por eso aquí el objetivo no es «sentirse bien» sino sentir sin sufrir de más.',
    ],
    whenNot:
      'Pide ayuda a un profesional si estás triste casi todos los días durante más de dos semanas. También si duermes o comes muy distinto, si no ves salida o si piensas en la muerte. Puede ser una depresión, y tiene tratamiento.',
    steps: [
      { title: 'Nombrar', instruction: 'Reconoce: «esto es tristeza». Si puedes, nombra también qué la causa.', durationSec: 45 },
      { title: 'Dónde vive', instruction: 'Localiza la tristeza en el cuerpo: pecho, garganta, ojos. Respira hacia esa zona sin intentar cambiarla.', durationSec: 90, kind: 'breath' },
      { title: 'Permitir', instruction: 'Dite: «puedo sentir esto; está bien estar triste por algo que importa». Si llegan lágrimas, déjalas.', durationSec: 90 },
      { title: 'Acompañar', instruction: 'Una mano en el pecho. ¿Qué te diría alguien que te quiere y te ve así? Dítelo a ti.', durationSec: 90, kind: 'reflection' },
      { title: 'Un gesto', instruction: '¿Hay algo pequeño que te cuidaría ahora? Un té, una ducha, escribir a alguien. No para que pase, sino para acompañarte.', durationSec: 60, kind: 'reflection' },
    ],
  },
  {
    emotionId: 'culpa',
    emotionLabel: 'Culpa',
    markers: 'Remordimiento por algo hecho o no hecho, repasar la escena, sensación de deber algo.',
    antidoteName: 'Responsabilidad compasiva',
    incompatibility:
      'La culpa sana señala un daño y empuja a repararlo. Se vuelve dañina cuando se convierte en castigo sin fin. La responsabilidad compasiva separa la conducta (que se puede reparar) de la persona (que merece trato humano): reconoce el error y orienta hacia la reparación.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Breines, J. G., & Chen, S. (2012). Self-compassion increases self-improvement motivation. Personality and Social Psychology Bulletin, 38(9), 1133–1143.',
        doi: '10.1177/0146167212445599',
      },
      LABELING,
    ],
    trainingPracticeId: 'pausa-autocompasion',
    science: [
      'En los experimentos de Breines y Chen, las personas a las que se indujo autocompasión tras recordar un error estaban más motivadas para repararlo y para no repetirlo que las que recibieron un mensaje de autoestima o ningún mensaje.',
      'La investigación distingue culpa («hice algo malo») de vergüenza («soy una mala persona»). La culpa centrada en la conducta tiende a llevar a la reparación; la vergüenza, al ocultamiento y la evitación. El antídoto busca mantener la primera y disolver la segunda.',
    ],
    whenNot:
      'Si la culpa viene de un trauma, o es muy grande y no se va, conviene trabajarla con un profesional.',
    steps: [
      { title: 'Nombrar', instruction: 'Reconoce: «siento culpa por…». Describe el hecho en una frase, sin adjetivos sobre ti.', durationSec: 60, kind: 'reflection' },
      { title: 'Conducta, no persona', instruction: 'Reformula: no «soy una mala persona», sino «hice X, y eso tuvo tal efecto».', durationSec: 75, kind: 'reflection' },
      { title: 'Contexto', instruction: '¿Qué sabías, qué podías y qué sentías en ese momento? Comprender no es excusar.', durationSec: 75, kind: 'reflection' },
      { title: 'Reparar', instruction: '¿Hay algo que puedas hacer para reparar, aunque sea en parte? Una disculpa, un gesto, un cambio.', durationSec: 90, kind: 'reflection' },
      { title: 'Generar el antídoto', instruction: 'Dite, como a un amigo que se equivocó: «cometiste un error, eres una persona, y puedes hacerlo mejor».', durationSec: 60 },
    ],
  },
  {
    emotionId: 'soledad',
    emotionLabel: 'Soledad',
    markers: 'Sensación de desconexión, de no importarle a nadie, de estar aparte aunque haya gente cerca.',
    antidoteName: 'Reconexión',
    incompatibility:
      'La soledad crónica se sostiene en parte por una lectura amenazante de lo social («me van a rechazar») que lleva a retirarse, lo que confirma la soledad. El antídoto actúa en dos frentes: cuestionar esa lectura y dar un paso pequeño de contacto.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Masi, C. M., Chen, H.-Y., Hawkley, L. C., & Cacioppo, J. T. (2011). A meta-analysis of interventions to reduce loneliness. Personality and Social Psychology Review, 15(3), 219–266.',
        doi: '10.1177/1088868310377394',
      },
      {
        citation:
          'Holt-Lunstad, J., Smith, T. B., & Layton, J. B. (2010). Social relationships and mortality risk: A meta-analytic review. PLoS Medicine, 7(7), e1000316.',
        doi: '10.1371/journal.pmed.1000316',
      },
    ],
    trainingPracticeId: 'amor-altruista',
    science: [
      'John Cacioppo describió la soledad como una señal biológica, igual que el hambre: indica que falta algo necesario. Pero en la soledad crónica, el cerebro entra en modo de hipervigilancia social y lee rechazo donde no lo hay.',
      'El metaanálisis de Masi y colaboradores comparó cuatro tipos de intervención (mejorar habilidades sociales, aumentar el apoyo social, aumentar las oportunidades de contacto y corregir la cognición social desadaptativa). Las más eficaces fueron las que trabajaban la forma de interpretar lo social.',
    ],
    whenNot:
      'Si además de soledad sientes que no hay salida, o piensas que no quieres vivir, pide ayuda hoy. Puedes acudir a un profesional o a los teléfonos de ayuda.',
    steps: [
      { title: 'Nombrar', instruction: 'Reconoce: «siento soledad». No es un defecto: es una señal de que necesitas conexión, como el hambre indica que necesitas comer.', durationSec: 60 },
      { title: 'La lectura', instruction: '¿Qué te dice la mente sobre los demás ahora? («no les importo», «molestaría»). Anótalo como hipótesis, no como hecho.', durationSec: 90, kind: 'reflection' },
      { title: 'Otra evidencia', instruction: '¿Hay alguna prueba de lo contrario? Alguien que te escribió, que se alegró de verte, que te ayudó.', durationSec: 90, kind: 'reflection' },
      { title: 'Humanidad compartida', instruction: 'Ahora mismo, millones de personas sienten esta misma soledad. Deséales, y deséate, compañía y cercanía.', durationSec: 75 },
      { title: 'Un paso', instruction: 'Elige un contacto pequeño para hoy: un mensaje breve, un saludo, una pregunta a alguien. Pequeño basta.', durationSec: 60, kind: 'reflection' },
    ],
  },
  {
    emotionId: 'preocupacion',
    emotionLabel: 'Preocupación',
    markers: 'Pensamientos en cadena sobre el futuro («¿y si…?»), dificultad para dejar de pensar, tensión.',
    antidoteName: 'Tiempo de preocupación',
    incompatibility:
      'La preocupación se presenta como urgente y necesaria ahora. Posponerla a un momento fijo y separar lo que depende de ti de lo que no rompe esa urgencia: la preocupación deja de ocupar todo el día y lo controlable se convierte en un paso concreto.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Borkovec, T. D., Wilkinson, L., Folensbee, R., & Lerman, C. (1983). Stimulus control applications to the treatment of worry. Behaviour Research and Therapy, 21(3), 247–251.',
        doi: '10.1016/0005-7967(83)90206-1',
      },
      {
        citation:
          'McGowan, S. K., & Behar, E. (2013). A preliminary investigation of stimulus control training for worry: Effects on anxiety and insomnia. Behavior Modification, 37(1), 90–112.',
        doi: '10.1177/0145445512455661',
      },
    ],
    trainingPracticeId: 'pajaros-en-el-cielo',
    science: [
      'Thomas Borkovec, pionero en el estudio de la preocupación, propuso el «control de estímulos»: reservar un periodo fijo de unos 30 minutos al día para preocuparse y posponer hasta entonces cualquier preocupación que aparezca. Estudios posteriores encontraron reducciones de la preocupación, la ansiedad y el insomnio.',
      'Funciona por varias vías: rompe la asociación entre preocuparse y cualquier momento o lugar, demuestra que la preocupación se puede posponer (no es incontrolable) y, a la hora fijada, muchas preocupaciones ya han perdido fuerza.',
    ],
    whenNot:
      'Si te preocupas casi todo el día, desde hace meses, y no puedes parar, puede ser un trastorno de ansiedad. Tiene tratamientos que funcionan. Consulta con un profesional.',
    steps: [
      { title: 'Nombrar', instruction: 'Reconoce: «estoy preocupándome». Escribe la preocupación en una frase.', durationSec: 45, kind: 'reflection' },
      { title: '¿Depende de mí?', instruction: '¿Qué parte de esto puedes influir y qué parte no? Separa las dos.', durationSec: 90, kind: 'reflection' },
      { title: 'Lo controlable', instruction: 'Para la parte que depende de ti: ¿cuál es el próximo paso concreto y cuándo lo darás?', durationSec: 75, kind: 'reflection' },
      { title: 'Posponer', instruction: 'Para el resto: elige una hora de hoy (no antes de dormir) para pensar en ello 20 minutos. Hasta entonces, cuando vuelva, dite «ahora no; a las…».', durationSec: 60 },
      { title: 'Volver', instruction: 'Lleva la atención a lo que tienes delante: tres cosas que ves, dos que oyes, una que tocas.', durationSec: 60 },
    ],
  },
  {
    emotionId: 'duelo',
    emotionLabel: 'Duelo',
    markers: 'Añoranza, oleadas de tristeza, incredulidad, pensar una y otra vez en la persona o en lo perdido.',
    antidoteName: 'Honrar el vínculo',
    incompatibility:
      'El duelo no es un problema que resolver, sino el precio del amor. Lo que añade sufrimiento es que la mente quede atrapada en uno de dos extremos: no poder dejar de pensar en la pérdida, o no poder acercarse a ella. El antídoto acompaña la oscilación natural entre recordar y seguir viviendo.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation: 'Stroebe, M., & Schut, H. (1999). The dual process model of coping with bereavement: Rationale and description. Death Studies, 23(3), 197–224.',
        doi: '10.1080/074811899201046',
      },
      { citation: 'Shear, M. K. (2015). Complicated grief. New England Journal of Medicine, 372(2), 153–160.', doi: '10.1056/NEJMcp1315618' },
    ],
    trainingPracticeId: 'pausa-autocompasion',
    science: [
      'El modelo de proceso dual de Stroebe y Schut describe un duelo sano como una oscilación: momentos orientados a la pérdida (recordar, llorar, añorar) y momentos orientados a la reconstrucción (ocuparse de la vida, descansar del dolor). Ambos son necesarios; el problema aparece cuando uno ocupa todo.',
      'La mayoría de las personas atraviesa el duelo sin necesitar tratamiento. Una minoría desarrolla un duelo prolongado, con añoranza intensa que no cede e interfiere con la vida. Para ese caso existen tratamientos específicos eficaces (Shear, 2015).',
    ],
    whenNot:
      'Pide ayuda a un profesional si ha pasado un año o más y aún echas mucho de menos a esa persona cada día. También si no puedes seguir con tu vida, o si piensas en morir para estar con ella. El duelo largo tiene tratamiento.',
    steps: [
      { title: 'Nombrar', instruction: 'Reconoce: «esto es duelo; echo de menos a…». Permite que el nombre esté presente.', durationSec: 45 },
      { title: 'La ola', instruction: 'Si llega una ola de tristeza, déjala subir y bajar. Respira con ella. No tienes que detenerla.', durationSec: 90, kind: 'breath' },
      { title: 'El vínculo', instruction: 'Recuerda algo concreto que compartieron. ¿Qué te dio esa relación que sigue contigo?', durationSec: 120, kind: 'reflection' },
      { title: 'Cuidarte', instruction: 'Mano en el pecho. Dite lo que le dirías a alguien en tu situación.', durationSec: 60 },
      { title: 'Seguir', instruction: 'Elige una cosa pequeña para cuidar de tu vida hoy: comer, dormir, ver a alguien. Seguir viviendo también honra el vínculo.', durationSec: 60, kind: 'reflection' },
    ],
  },
  {
    emotionId: 'agobio',
    emotionLabel: 'Agobio o sobrecarga',
    markers: 'Sensación de que todo es urgente a la vez, mente acelerada, parálisis frente a la lista de pendientes.',
    antidoteName: 'Del todo a lo siguiente',
    incompatibility:
      'El agobio viene de sostener mentalmente todas las tareas a la vez. Sacarlas de la cabeza y elegir sólo la siguiente acción concreta reduce la carga mental: no se puede hacer todo, pero sí lo siguiente.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation:
          'Masicampo, E. J., & Baumeister, R. F. (2011). Consider it done! Plan making can eliminate the cognitive effects of unfulfilled goals. Journal of Personality and Social Psychology, 101(4), 667–683.',
        doi: '10.1037/a0024192',
      },
      {
        citation: 'Bell, A. C., & D’Zurilla, T. J. (2009). Problem-solving therapy for depression: A meta-analysis. Clinical Psychology Review, 29(4), 348–353.',
        doi: '10.1016/j.cpr.2009.02.003',
      },
    ],
    trainingPracticeId: 'resolucion-problemas',
    science: [
      'Las metas pendientes generan pensamientos intrusivos que ocupan la mente (efecto Zeigarnik). Masicampo y Baumeister mostraron que basta con hacer un plan concreto para una tarea pendiente para que deje de interferir, aunque todavía no se haya hecho.',
      'Elegir la acción siguiente, en lugar de mirar el problema entero, es el núcleo de la resolución de problemas, una intervención con evidencia metaanalítica.',
    ],
    whenNot:
      'Si el agobio dura meses y sientes agotamiento, distancia o falta de fuerzas, puede ser desgaste por el trabajo (burnout). Entonces no basta con organizarte mejor: hace falta cambiar las condiciones.',
    steps: [
      { title: 'Nombrar', instruction: 'Reconoce: «siento agobio». Tres respiraciones con exhalación larga.', durationSec: 45, kind: 'breath' },
      { title: 'Vaciar', instruction: 'Escribe todo lo que te pesa, en una lista, sin orden. Sácalo de la cabeza.', durationSec: 120, kind: 'reflection' },
      { title: 'Filtrar', instruction: '¿Qué puede esperar? ¿Qué puede hacer otra persona? ¿Qué se puede dejar? Tacha o aparta.', durationSec: 90, kind: 'reflection' },
      { title: 'Lo siguiente', instruction: 'Elige una sola tarea y su primer paso físico (abrir el documento, hacer la llamada). Sólo eso.', durationSec: 60, kind: 'reflection' },
      { title: 'Soltar el resto', instruction: 'Para lo demás, decide cuándo lo revisarás. Ya está planificado: no hace falta sostenerlo ahora.', durationSec: 45 },
    ],
  },
  {
    emotionId: 'bloqueo',
    emotionLabel: 'Bloqueo o procrastinación',
    markers: 'Postergar una tarea importante, malestar al pensar en ella, distraerse con cualquier otra cosa.',
    antidoteName: 'Empezar pequeño, sin castigo',
    incompatibility:
      'Procrastinar no es pereza: es evitar el malestar que la tarea provoca (aburrimiento, inseguridad, miedo a hacerlo mal). El castigo aumenta ese malestar y alimenta la evitación. El antídoto combina tratarse con amabilidad y reducir la tarea hasta que empezar sea fácil.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation: 'Sirois, F., & Pychyl, T. (2013). Procrastination and the priority of short-term mood regulation: Consequences for future self. Social and Personality Psychology Compass, 7(2), 115–127.',
        doi: '10.1111/spc3.12011',
      },
      {
        citation:
          'Wohl, M. J. A., Pychyl, T. A., & Bennett, S. H. (2010). I forgive myself, now I can study: How self-forgiveness for procrastinating can reduce future procrastination. Personality and Individual Differences, 48(7), 803–808.',
        doi: '10.1016/j.paid.2010.01.029',
      },
    ],
    trainingPracticeId: 'activacion-conductual',
    science: [
      'Sirois y Pychyl describen la procrastinación como un problema de regulación emocional: se pospone la tarea para aliviar el malestar inmediato, a costa del «yo futuro».',
      'En el estudio de Wohl y colaboradores, los estudiantes que se perdonaron por haber procrastinado antes de un primer examen procrastinaron menos antes del siguiente. La autocrítica, en cambio, mantiene el ciclo.',
    ],
    whenNot:
      'Si te bloqueas con casi todo y además te falta ánimo desde hace tiempo, consulta con un profesional. Puede haber una depresión o un problema de atención que se puede tratar.',
    steps: [
      { title: 'Nombrar', instruction: 'Reconoce: «estoy evitando esta tarea». ¿Qué malestar te provoca? Aburrimiento, inseguridad, miedo…', durationSec: 60, kind: 'reflection' },
      { title: 'Perdonarte', instruction: 'Dite: «llevo tiempo postergándolo, como le pasa a mucha gente. Puedo empezar ahora».', durationSec: 45 },
      { title: 'Reducir', instruction: 'Divide la tarea hasta encontrar un primer paso de menos de cinco minutos.', durationSec: 75, kind: 'reflection' },
      { title: 'Cinco minutos', instruction: 'Comprométete sólo a cinco minutos. Después puedes parar. Prepara el entorno: abre lo necesario, aparta el móvil.', durationSec: 60 },
      { title: 'Empezar', instruction: 'Al terminar este paso, empieza. El malestar suele bajar al comenzar, no antes.', durationSec: 30 },
    ],
  },
  {
    emotionId: 'panico',
    emotionLabel: 'Ataque de pánico',
    markers: 'Corazón acelerado, falta de aire, mareo, sensación de irrealidad o de que algo terrible va a pasar, de golpe.',
    antidoteName: 'Dejar pasar la falsa alarma',
    incompatibility:
      'El pánico se alimenta de leer las sensaciones como peligrosas («me va a dar un infarto», «voy a perder la cabeza»). Entenderlas como una falsa alarma y no huir de ellas corta el círculo: sin esa lectura catastrófica, las sensaciones suben y bajan solas.',
    evidenceLevel: 'moderada',
    evidence: [
      {
        citation: 'Clark, D. M. (1986). A cognitive approach to panic. Behaviour Research and Therapy, 24(4), 461–470.',
        doi: '10.1016/0005-7967(86)90011-2',
      },
      {
        citation:
          'Pompoli, A., Furukawa, T. A., Imai, H., Tajika, A., Efthimiou, O., & Salanti, G. (2016). Psychological therapies for panic disorder with or without agoraphobia in adults: A network meta-analysis. Cochrane Database of Systematic Reviews, 4, CD011004.',
        doi: '10.1002/14651858.CD011004.pub2',
      },
    ],
    trainingPracticeId: 'respiracion-resonante',
    science: [
      'David Clark propuso que un ataque de pánico surge cuando una sensación corporal normal (un latido fuerte, un leve mareo) se interpreta como señal de peligro inminente. Esa interpretación genera miedo, el miedo intensifica las sensaciones y el círculo se acelera en segundos.',
      'La terapia cognitivo-conductual, que enseña a reinterpretar las sensaciones y a dejar de evitarlas, es el tratamiento psicológico con más evidencia para el trastorno de pánico (Pompoli et al., 2016). Un ataque suele alcanzar su pico en unos diez minutos y después baja, aunque no hagas nada.',
    ],
    whenNot:
      'Si es la primera vez que te pasa, ve al médico. Ve a urgencias si tienes dolor en el pecho, falta de aire que no se va o te desmayas. Algunos problemas del corazón se parecen a un ataque de pánico.',
    steps: [
      { title: 'Nombrar', instruction: 'Dite: «esto es un ataque de pánico. Es muy desagradable, pero no es peligroso».', durationSec: 30 },
      { title: 'Falsa alarma', instruction: 'Tu alarma interna se ha disparado sin un peligro real. El corazón rápido, el mareo y la falta de aire son parte de esa alarma.', durationSec: 45 },
      { title: 'Respirar despacio', instruction: 'Exhala más largo de lo que inhalas. No respires hondo ni rápido. Sigue el círculo.', durationSec: 90, kind: 'breath' },
      { title: 'Dejar pasar la ola', instruction: 'No huyas ni luches contra las sensaciones. La ola sube, llega a su punto más alto y baja sola.', durationSec: 90 },
      { title: 'Quedarte', instruction: 'Si puedes, quédate donde estás. Así tu cuerpo aprende que no pasa nada malo.', durationSec: 45 },
    ],
  },
];
