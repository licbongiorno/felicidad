import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Convivir con dolor crónico» (lumbalgia, fibromialgia, migraña y otros):
 *  - educación en neurociencia del dolor (Moseley y Butler): el dolor es una alarma que
 *    protege, es real aunque no haya daño y su volumen depende de muchas señales;
 *  - catastrofización del dolor (Sullivan): rumiación, magnificación e indefensión;
 *  - el ciclo «auge y caída» y un plan para los días de brote (pacing, Nielson y colaboradores);
 *  - sueño y dolor, que se alimentan entre sí (Finan, Goodin y Smith);
 *  - hablar del dolor con el médico y con la familia.
 *
 * No repite lo que ya está en «salud-trabajo-crianza» (aceptación con «hacer-lugar-al-dolor»,
 * pacing básico con «ritmo-de-actividad», valores con «valores-pese-al-dolor»): lo enlaza.
 *
 * Reglas de seguridad del paquete: no hay indicaciones de fármacos ni de ejercicios concretos;
 * todo lo que sea medicación o movimiento se acuerda con el equipo de salud. Ante un dolor
 * nuevo, que cambia o con señales de alarma, cada práctica remite a consultar al médico.
 */

// ------------------------------------------------------------ referencias
const MOSELEY_2015: Reference = {
  citation: 'Moseley, G. L., & Butler, D. S. (2015). Fifteen years of explaining pain: The past, present, and future. The Journal of Pain, 16(9), 807–813.',
  doi: '10.1016/j.jpain.2015.05.005',
};
const BUTLER_2013: Reference = { citation: 'Butler, D. S., & Moseley, G. L. (2013). Explain pain (2.ª ed.). Noigroup Publications.' };
const LOUW_2011: Reference = {
  citation:
    'Louw, A., Diener, I., Butler, D. S., & Puentedura, E. J. (2011). The effect of neuroscience education on pain, disability, anxiety, and stress in chronic musculoskeletal pain. Archives of Physical Medicine and Rehabilitation, 92(12), 2041–2056.',
  doi: '10.1016/j.apmr.2011.07.198',
};
const RAJA_2020: Reference = {
  citation:
    'Raja, S. N., Carr, D. B., Cohen, M., Finnerup, N. B., Flor, H., Gibson, S., Keefe, F. J., Mogil, J. S., Ringkamp, M., Sluka, K. A., Song, X.-J., Stevens, B., Sullivan, M. D., Tutelman, P. R., Ushida, T., & Vader, K. (2020). The revised International Association for the Study of Pain definition of pain: Concepts, challenges, and compromises. Pain, 161(9), 1976–1982.',
  doi: '10.1097/j.pain.0000000000001939',
};
const TREEDE_2019: Reference = {
  citation:
    'Treede, R.-D., Rief, W., Barke, A., Aziz, Q., Bennett, M. I., Benoliel, R., Cohen, M., Evers, S., Finnerup, N. B., First, M. B., y colaboradores (2019). Chronic pain as a symptom or a disease: The IASP Classification of Chronic Pain for the International Classification of Diseases (ICD-11). Pain, 160(1), 19–27.',
  doi: '10.1097/j.pain.0000000000001384',
};
const SULLIVAN_1995: Reference = {
  citation: 'Sullivan, M. J. L., Bishop, S. R., & Pivik, J. (1995). The Pain Catastrophizing Scale: Development and validation. Psychological Assessment, 7(4), 524–532.',
  doi: '10.1037/1040-3590.7.4.524',
};
const SULLIVAN_2001: Reference = {
  citation:
    'Sullivan, M. J. L., Thorn, B., Haythornthwaite, J. A., Keefe, F., Martin, M., Bradley, L. A., & Lefebvre, J. C. (2001). Theoretical perspectives on the relation between catastrophizing and pain. The Clinical Journal of Pain, 17(1), 52–64.',
};
const QUARTANA_2009: Reference = {
  citation: 'Quartana, P. J., Campbell, C. M., & Edwards, R. R. (2009). Pain catastrophizing: A critical review. Expert Review of Neurotherapeutics, 9(5), 745–758.',
  doi: '10.1586/ern.09.34',
};
const VLAEYEN_2000: Reference = {
  citation: 'Vlaeyen, J. W. S., & Linton, S. J. (2000). Fear-avoidance and its consequences in chronic musculoskeletal pain: A state of the art. Pain, 85(3), 317–332.',
};
const NIELSON_2013: Reference = {
  citation:
    'Nielson, W. R., Jensen, M. P., Karsdorp, P. A., & Vlaeyen, J. W. S. (2013). Activity pacing in chronic pain: Concepts, evidence, and future directions. The Clinical Journal of Pain, 29(5), 461–468.',
};
const NICHOLAS_2011: Reference = { citation: 'Nicholas, M., Molloy, A., Tonkin, L., & Beeston, L. (2011). Manage your pain (3.ª ed.). ABC Books.' };
const MCCRACKEN_2014: Reference = {
  citation:
    'McCracken, L. M., & Vowles, K. E. (2014). Acceptance and commitment therapy and mindfulness for chronic pain: Model, process, and progress. American Psychologist, 69(2), 178–187.',
  doi: '10.1037/a0035623',
};
const FINAN_2013: Reference = {
  citation: 'Finan, P. H., Goodin, B. R., & Smith, M. T. (2013). The association of sleep and pain: An update and a path forward. The Journal of Pain, 14(12), 1539–1552.',
  doi: '10.1016/j.jpain.2013.08.007',
};
const SMITH_2004: Reference = {
  citation:
    'Smith, M. T., & Haythornthwaite, J. A. (2004). How do sleep disturbance and chronic pain inter-relate? Insights from the longitudinal and cognitive-behavioral clinical trials literature. Sleep Medicine Reviews, 8(2), 119–132.',
  doi: '10.1016/S1087-0792(03)00044-3',
};
const FORDYCE_1976: Reference = { citation: 'Fordyce, W. E. (1976). Behavioral methods for chronic pain and illness. Mosby.' };
const CANO_2010: Reference = {
  citation: 'Cano, A., & Williams, A. C. de C. (2010). Social interaction in pain: Reinforcing pain behaviors or building intimacy? Pain, 149(1), 9–11.',
  doi: '10.1016/j.pain.2009.10.010',
};

/** Aviso común: cuándo el dolor necesita una consulta médica antes que una práctica. */
const ALARMA =
  'Esta práctica no reemplaza la atención médica ni cambia tu tratamiento. Consulta antes si el dolor es nuevo, cambió de forma o es mucho más fuerte que tu dolor habitual. Ve a una guardia o llama al 911 si aparece fiebre, debilidad u hormigueo nuevo en brazos o piernas, pérdida de control de la orina, dolor tras un golpe o un dolor de cabeza súbito y muy fuerte.';

export const DOLOR_CRONICO_PACK: ContentPack = {
  id: 'dolor-cronico',

  // ================================================================== prácticas
  practices: [
    {
      id: 'el-volumen-del-dolor',
      title: 'Lo que sube y baja el volumen del dolor',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Entender el dolor como una alarma que protege y anotar qué cosas de tu vida suben o bajan su volumen.',
      mechanism: 'Saber que el dolor depende de cómo el sistema nervioso evalúa el peligro baja el miedo y abre formas nuevas de influir en él.',
      evidenceLevel: 'moderada',
      evidence: [MOSELEY_2015, BUTLER_2013, LOUW_2011, RAJA_2020],
      howItWorks: [
        'Lorimer Moseley y David Butler explican el dolor como una alarma. El cerebro evalúa todo lo que sabe del cuerpo y del entorno. Si concluye que hay peligro, produce dolor para protegerte. Ese dolor es real, aunque no haya daño en los tejidos (Moseley y Butler, 2015).',
        'En el dolor crónico, la alarma se vuelve más sensible. Suena antes y más fuerte. No es que estés inventando nada: el sistema nervioso aprendió a protegerte de más.',
        'Muchas cosas suben o bajan el volumen: el sueño, el estrés, el miedo, la compañía, lo que haces y lo que piensas sobre el dolor. Butler y Moseley las llaman señales de peligro y de seguridad. Conocer las tuyas es el primer paso para mover el volumen.',
        'Entender el dolor así se asocia con menos miedo y mejor funcionamiento, sobre todo cuando se combina con otros tratamientos (Louw y colaboradores, 2011).',
      ],
      tips: [
        'No hay respuestas correctas. Cada persona tiene su propia lista.',
        'Incluye cosas chicas: una charla, el frío, un lugar, una frase de alguien.',
        'Guarda la lista. La vas a usar en otras prácticas de este tema.',
      ],
      obstacles: [
        { q: '¿Me están diciendo que el dolor está en mi cabeza?', a: 'No. Todo dolor lo produce el sistema nervioso, también el de una quemadura. Que el cerebro participe no lo hace menos real.' },
        { q: 'No encuentro nada que lo baje.', a: 'Pasa mucho al principio. Piensa en momentos en que el dolor ocupó menos lugar, aunque sea un rato. ¿Qué estabas haciendo?' },
      ],
      cautions: ALARMA,
      steps: [
        { title: 'Llegar', instruction: 'Siéntate como te resulte más cómodo hoy. Respira despacio unas veces.', durationSec: 30, kind: 'breath' },
        { title: 'Una alarma', instruction: 'Piensa en el dolor como la alarma de una casa. Protege, pero a veces suena con poco. Hoy vamos a mirar qué la enciende.', durationSec: 40, kind: 'instruction' },
        { title: 'Lo que lo sube', instruction: 'Anota tres cosas que suelen subir tu dolor. Pueden ser del cuerpo, del ánimo, de un lugar o de una persona.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que lo baja', instruction: 'Ahora anota tres cosas que lo bajan o hacen que ocupe menos lugar. Una charla, el calor, una música, reírte.', durationSec: 60, kind: 'reflection' },
        { title: 'Una para hoy', instruction: 'Elige una cosa de la segunda lista que puedas sumar hoy. Que sea chica y posible.', durationSec: 30, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira y dite: «Mi dolor es real. Y hay cosas que lo mueven».', durationSec: 20, kind: 'breath' },
      ],
    },
    {
      id: 'lupa-sobre-el-dolor',
      title: 'Cuando la mente pone una lupa sobre el dolor',
      family: 'deconstructive',
      skills: ['attention', 'resilience'],
      summary: 'Reconocer los pensamientos catastróficos sobre el dolor, ver de qué tipo son y buscar una mirada más justa y útil.',
      mechanism: 'La catastrofización amplifica el dolor y el malestar. Notarla y responderle baja la alarma sin negar lo que duele.',
      evidenceLevel: 'moderada',
      evidence: [SULLIVAN_1995, SULLIVAN_2001, QUARTANA_2009],
      howItWorks: [
        'Michael Sullivan estudió la catastrofización del dolor. Tiene tres formas. Rumiar: no poder dejar de pensar en el dolor. Magnificar: temer que sea algo grave. Sentirse indefenso: creer que nada se puede hacer (Sullivan y colaboradores, 1995).',
        'Estos pensamientos son muy comunes y se entienden. Pero se asocian con más dolor, más discapacidad y más angustia (Quartana y colaboradores, 2009). La mente suena como una segunda alarma encima de la primera.',
        'La práctica no busca pensar en positivo. Busca notar el pensamiento, nombrar su tipo y preguntarte qué dirías a alguien que quieres. Si un pensamiento habla de un síntoma nuevo, eso no se discute: se consulta.',
        'Si ya hiciste la práctica de aceptación «Hacer lugar al dolor», puedes combinarlas. Una ayuda a dejar de pelear con la sensación. Esta ayuda con lo que la mente le agrega.',
      ],
      tips: [
        'Escribe el pensamiento tal como suena, con sus palabras.',
        'Busca frases verdaderas, no frases lindas. «Hoy duele mucho y ya pasé días así» sirve más que «todo va a estar bien».',
        'Usa la práctica cuando el dolor está moderado. En el pico, primero cuida el cuerpo.',
      ],
      obstacles: [
        { q: 'No es catastrofizar: el dolor es horrible de verdad.', a: 'Tienes razón en que duele mucho. La práctica no lo niega. Mira sólo lo que la mente agrega: «esto nunca va a cambiar», «no puedo con nada».' },
        { q: '¿Y si el pensamiento tiene razón y es algo grave?', a: 'Si el dolor es nuevo o distinto, no lo resuelvas pensando: consulta a tu médico. Si ya está evaluado, la práctica te ayuda con la preocupación que queda.' },
      ],
      cautions:
        ALARMA +
        ' Si los pensamientos van hacia no querer vivir con este dolor, no tienes que pasarlo sin compañía: pide ayuda hoy. Llama al 135 (CABA y GBA) o al 0800-345-1435, o usa el botón Ayuda de la app.',
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en un momento reciente en que el dolor te preocupó mucho.', durationSec: 40, kind: 'breath' },
        { title: 'El pensamiento', instruction: 'Escribe lo que pensaste en ese momento, con las mismas palabras que usó tu mente.', durationSec: 60, kind: 'reflection' },
        { title: 'Su tipo', instruction: '¿Es rumiar, agrandar o sentirte sin salida? Ponle un nombre. A veces son las tres.', durationSec: 45, kind: 'reflection' },
        { title: 'La lupa', instruction: 'Nota cómo cambió el dolor con ese pensamiento. ¿Se tensó el cuerpo? ¿Subió la alarma?', durationSec: 45, kind: 'reflection' },
        { title: 'Una voz amiga', instruction: 'Si alguien que quieres pensara eso, ¿qué le dirías? Escribe una frase verdadera y amable.', durationSec: 60, kind: 'reflection' },
        { title: 'Algo que sí puedes', instruction: 'Anota una cosa pequeña que sí está en tus manos hoy. Puede ser descansar, llamar a alguien o usar tu lista de lo que baja el dolor.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira y dite: «Es un pensamiento sobre el dolor. No es el dolor».', durationSec: 25, kind: 'breath' },
      ],
    },
    {
      id: 'plan-para-el-brote',
      title: 'Plan para los días de brote',
      family: 'constructive',
      skills: ['resilience'],
      summary: 'Armar en un día tranquilo un plan escrito para los días en que el dolor sube, sin caer en hacer de más ni en parar del todo.',
      mechanism: 'Decidir con anticipación qué hacer en un brote evita el ciclo «auge y caída» y baja la sensación de no tener control.',
      evidenceLevel: 'preliminar',
      evidence: [NIELSON_2013, NICHOLAS_2011, VLAEYEN_2000],
      howItWorks: [
        'Muchas personas con dolor viven en un ciclo de «auge y caída». En un día bueno hacen todo lo pendiente. Después viene un brote y pasan días casi sin moverse. Cuando mejoran, intentan recuperar el tiempo perdido, y el ciclo vuelve.',
        'La práctica «Ritmo de actividad» enseña a repartir la actividad por tiempo y con pausas. Este plan es su compañero: qué hacer cuando, aun así, llega un brote. Los brotes son parte del dolor crónico. No significan que fallaste.',
        'Los programas de manejo del dolor, como el de Michael Nicholas y su equipo, recomiendan tener un plan escrito hecho en calma. En el brote es difícil pensar. Con el plan, sólo hay que seguirlo (Nicholas y colaboradores, 2011).',
      ],
      tips: [
        'Escribe el plan en un día tranquilo, no en pleno brote.',
        'Lo que tenga que ver con medicación o movimiento, pon sólo lo que ya acordaste con tu médico o tu kinesiólogo.',
        'Pega el plan en un lugar visible o guárdalo en el celular.',
        'Compártelo con alguien de confianza para que sepa cómo ayudarte.',
      ],
      obstacles: [
        { q: 'En el brote no tengo ganas de nada, ni de leer un plan.', a: 'Por eso conviene que sea corto. Tres o cuatro líneas alcanzan. Lo primero puede ser sólo «respirar y leer esto».' },
        { q: 'Cuando se me pasa, quiero hacer todo de golpe.', a: 'Es la parte del ciclo más difícil de cortar. Pon en el plan cómo vas a volver: de a poco, con tu tiempo base de siempre.' },
      ],
      cautions: ALARMA + ' Si no sabes si es un brote de tu dolor habitual o algo distinto, consulta.',
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Hoy vas a preparar algo para un día difícil, desde un día más tranquilo.', durationSec: 30, kind: 'breath' },
        { title: 'Tu ciclo', instruction: 'Piensa en el último brote. ¿Qué pasó los días antes? ¿Hiciste de más en un día bueno?', durationSec: 60, kind: 'reflection' },
        { title: 'Primeras señales', instruction: 'Anota cómo notas que se viene un brote. Puede ser cansancio, tensión, mal sueño o irritación.', durationSec: 50, kind: 'reflection' },
        { title: 'Lo que ayuda', instruction: 'Anota tres cosas que te ayudan en un brote. Usa tu lista de lo que baja el volumen y lo que acordaste con tu médico.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que suelto', instruction: 'Escribe qué tareas puedes dejar o pedir a otros esos días, sin culpa.', durationSec: 45, kind: 'reflection' },
        { title: 'Cómo vuelvo', instruction: 'Escribe cómo vas a volver cuando pase: de a poco, con tu tiempo base, sin recuperar todo junto.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Lee el plan entero una vez. Dite: «Un brote es parte del camino. Tengo un plan».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'dormir-con-dolor',
      title: 'Dormir con dolor',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Revisar cómo se afectan tu sueño y tu dolor y preparar qué hacer cuando el dolor te despierta o no te deja dormir.',
      mechanism: 'Dormir mal sube la sensibilidad al dolor y el dolor corta el sueño. Cuidar la noche ayuda a cortar ese círculo.',
      evidenceLevel: 'moderada',
      evidence: [FINAN_2013, SMITH_2004],
      howItWorks: [
        'El sueño y el dolor se alimentan entre sí. El dolor hace más difícil dormir. Y dormir mal hace que al día siguiente el dolor se sienta más fuerte. Los estudios sugieren que el sueño influye en el dolor tanto o más que al revés (Finan y colaboradores, 2013).',
        'La terapia cognitivo-conductual del insomnio también ayuda a personas con dolor crónico. Mejora el sueño y, a veces, el ánimo y el funcionamiento (Smith y Haythornthwaite, 2004).',
        'De noche, la mente tiende a agrandar el dolor y las preocupaciones. Tener un plan simple para esos momentos baja la alarma. En la app hay prácticas de sueño que puedes sumar, como «Rutina para bajar antes de dormir».',
      ],
      tips: [
        'Prepara antes de acostarte lo que te da comodidad: almohadas, una manta, agua.',
        'Si el dolor te despierta, cambia de posición y respira lento antes de mirar la hora.',
        'Si pasan muchos minutos y sigues sin dormir, levántate a un lugar tranquilo con luz baja. Vuelve cuando tengas sueño.',
        'Cuenta a tu médico cómo duermes. El sueño es parte del tratamiento del dolor.',
      ],
      obstacles: [
        { q: 'Si me levanto, me duele más.', a: 'Entonces quédate, pero cambia de actividad: escucha algo tranquilo o haz una respiración lenta. La idea es no quedarte peleando con el sueño.' },
        { q: 'Duermo de día porque de noche no puedo.', a: 'Es muy común. Una siesta corta y temprana molesta menos. Si duermes muchas horas de día, coméntalo con tu médico.' },
      ],
      cautions:
        ALARMA +
        ' Si roncas fuerte, dejas de respirar de noche o tienes mucho sueño de día, consulta: puede haber un trastorno del sueño que se trata. No cambies tu medicación por tu cuenta.',
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio y piensa en tus últimas noches.', durationSec: 30, kind: 'breath' },
        { title: 'El círculo', instruction: 'Recuerda una mala noche. ¿Cómo estuvo el dolor al día siguiente? Nota la relación sin culparte.', durationSec: 50, kind: 'reflection' },
        { title: 'Antes de dormir', instruction: 'Elige una cosa que te ayude a llegar más tranquilo a la cama. Una luz baja, una ducha tibia o dejar el celular lejos.', durationSec: 50, kind: 'reflection' },
        { title: 'Si te despierta', instruction: 'Decide qué harás si el dolor te despierta. Por ejemplo: cambiar de posición y respirar lento diez veces.', durationSec: 50, kind: 'reflection' },
        { title: 'Si no vuelve el sueño', instruction: 'Decide qué harás si no te duermes. Un lugar tranquilo, algo aburrido para leer o una música suave.', durationSec: 45, kind: 'reflection' },
        { title: 'La frase de la noche', instruction: 'Escribe una frase para la madrugada. Por ejemplo: «De noche todo parece peor. Mañana lo miro con más luz».', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Exhala lento tres veces. Deja la frase cerca de la cama.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'preparar-la-consulta-del-dolor',
      title: 'Preparar la consulta por el dolor',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Ordenar en una hoja cómo es tu dolor, qué te impide hacer y qué quieres preguntar, para aprovechar mejor la consulta médica.',
      mechanism: 'Llegar con la información ordenada y con preguntas claras mejora la comunicación con el equipo de salud y ayuda a que tu relato se escuche mejor.',
      evidenceLevel: 'preliminar',
      evidence: [NICHOLAS_2011, TREEDE_2019],
      howItWorks: [
        'Las consultas suelen ser cortas. Con dolor, nervios o cansancio, es fácil olvidar lo importante. Llevar una hoja con lo esencial ayuda a que el médico entienda tu situación y a que tú salgas con respuestas.',
        'El dolor crónico hoy tiene nombre propio en la clasificación internacional de enfermedades. Puede ser un problema en sí mismo, no sólo un síntoma (Treede y colaboradores, 2019). Merece atención aunque los estudios salgan normales.',
        'Además de cuánto duele, importa qué te impide hacer. Contar eso ayuda a armar metas juntos: dormir mejor, volver a una tarea, sostener el trabajo. Las decisiones sobre fármacos o ejercicios son de tu equipo de salud, contigo.',
      ],
      tips: [
        'Usa ejemplos concretos: «no puedo levantar a mi nieto», «dejé de ir a la feria».',
        'Lleva la lista de lo que tomas y de lo que ya probaste.',
        'Ordena las preguntas de más a menos importante. Si falta tiempo, haces las primeras.',
        'Si puedes, ve con alguien de confianza que tome nota.',
      ],
      obstacles: [
        { q: 'Siento que el médico no me cree.', a: 'Es una experiencia dolorosa y frecuente. Describe con calma qué sientes y qué te impide hacer. Si sientes que no te escuchan, tienes derecho a pedir otra opinión.' },
        { q: 'Me da vergüenza llevar una hoja.', a: 'Muchos profesionales lo agradecen. Puedes decir: «Lo anoté para no olvidarme nada».' },
      ],
      cautions: ALARMA,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Ten a mano papel o el celular para anotar.', durationSec: 25, kind: 'breath' },
        { title: 'Cómo es', instruction: 'Anota dónde duele, desde cuándo y cómo es. ¿Quema, aprieta, pincha, late? ¿Es fijo o va y viene?', durationSec: 60, kind: 'reflection' },
        { title: 'Qué cambió', instruction: 'Anota si algo cambió desde la última consulta. Un dolor nuevo, un síntoma distinto o un cambio de intensidad va primero.', durationSec: 50, kind: 'reflection' },
        { title: 'Qué te impide', instruction: 'Escribe dos cosas que el dolor te impide hacer hoy y que te gustaría recuperar.', durationSec: 50, kind: 'reflection' },
        { title: 'Qué probaste', instruction: 'Anota lo que ya probaste y cómo te fue. También cómo estás durmiendo y cómo está tu ánimo.', durationSec: 50, kind: 'reflection' },
        { title: 'Tus preguntas', instruction: 'Escribe tus tres preguntas más importantes. Ordénalas de más a menos urgente.', durationSec: 50, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Lee la hoja una vez. Dite: «Tengo derecho a que me escuchen».', durationSec: 25, kind: 'breath' },
      ],
    },
    {
      id: 'contar-mi-dolor-en-casa',
      title: 'Contar mi dolor en casa',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Preparar una charla con tu familia para explicar un dolor que no se ve y pedir el tipo de ayuda que de verdad te sirve.',
      mechanism: 'Cuando la familia entiende el dolor y sabe cómo acompañar, baja la tensión en casa y el dolor ocupa menos lugar en el vínculo.',
      evidenceLevel: 'preliminar',
      evidence: [CANO_2010, FORDYCE_1976],
      howItWorks: [
        'El dolor crónico muchas veces no se ve. Desde afuera, un día puedes estar bien y al siguiente no. Eso confunde a la familia. Algunos se preocupan de más y te hacen todo. Otros sienten que exageras.',
        'Wilbert Fordyce mostró que lo que hace el entorno ante el dolor también influye en él (Fordyce, 1976). Que te hagan todo, con cariño, puede achicar tu vida sin querer. Que no te crean aumenta el aislamiento.',
        'Annmarie Cano y Amanda Williams proponen otro camino: que hablar del dolor sea una ocasión de cercanía, no sólo de quejas o de cuidados (Cano y Williams, 2010). Ayuda contar qué sientes y pedir algo concreto.',
      ],
      tips: [
        'Elige un momento tranquilo, no en pleno brote ni en medio de una discusión.',
        'Explica la idea de la alarma sensible: «Mi dolor es real, aunque no se vea».',
        'Pide cosas concretas. «Avísame antes de hacer planes» sirve más que «tenme paciencia».',
        'Cuenta también qué quieres seguir haciendo tú.',
      ],
      obstacles: [
        { q: 'Mi familia no quiere hablar del tema.', a: 'Prueba con algo corto y una sola pedida. A veces la familia evita el tema porque no sabe qué hacer, no porque no le importe.' },
        { q: 'No quiero ser una carga.', a: 'Es un temor muy humano. Pedir ayuda clara suele aliviar a quienes te quieren, porque ya no tienen que adivinar.' },
      ],
      cautions:
        'Esta práctica no reemplaza la atención médica. Si en casa hay gritos, amenazas o te sientes con miedo, busca ayuda: Línea 144 o el botón Ayuda de la app. Si la convivencia con el dolor está muy desgastada, una consulta de familia o de pareja puede ayudar.',
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio y piensa en la persona de tu casa con quien quieres hablar.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que no ven', instruction: 'Anota algo de tu dolor que esa persona no ve. Por ejemplo, el cansancio o lo que te cuesta cada mañana.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que ayuda', instruction: '¿Qué hace esa persona que te ayuda de verdad? Anótalo para poder agradecerlo.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que no ayuda', instruction: '¿Qué hace que, sin querer, te quita cosas o te hace sentir peor? Escríbelo sin culpar.', durationSec: 50, kind: 'reflection' },
        { title: 'Un pedido', instruction: 'Escribe un pedido concreto. Por ejemplo: «En los días de brote, pregúntame qué necesito antes de hacerlo por mí».', durationSec: 60, kind: 'reflection' },
        { title: 'Tus palabras', instruction: 'Arma la charla en tres frases: lo que sientes, lo que te ayuda y lo que pides.', durationSec: 50, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira y dite: «Mi dolor es real. Puedo pedir lo que necesito».', durationSec: 25, kind: 'breath' },
      ],
    },
  ],

  meta: {
    'el-volumen-del-dolor': { level: 'iniciacion', approaches: ['tcc'], module: 'salud' },
    'lupa-sobre-el-dolor': { level: 'intermedio', prerequisites: ['el-volumen-del-dolor'], approaches: ['tcc', 'act'], module: 'salud' },
    'plan-para-el-brote': { level: 'intermedio', prerequisites: ['ritmo-de-actividad'], approaches: ['tcc'], module: 'salud' },
    'dormir-con-dolor': { level: 'intermedio', prerequisites: ['rutina-bajada-dormir'], approaches: ['tcc', 'relajacion'], module: 'salud' },
    'preparar-la-consulta-del-dolor': { level: 'iniciacion', approaches: ['tcc'], module: 'salud' },
    'contar-mi-dolor-en-casa': { level: 'intermedio', approaches: ['interpersonal', 'sistemica'], module: 'salud' },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'entender-el-dolor-cronico',
      title: 'Entender el dolor crónico',
      subtitle: 'Qué dice la neurociencia del dolor, por qué la mente le pone una lupa, cómo se mezcla con el sueño y cómo salir del ciclo de auge y caída.',
      category: 'Salud y trabajo',
      readingMin: 8,
      keyPoints: [
        'El dolor es una alarma que produce el sistema nervioso para protegerte. Es real aunque no haya daño.',
        'En el dolor crónico la alarma se vuelve más sensible: suena antes y más fuerte.',
        'La catastrofización, el mal sueño y el ciclo de auge y caída suben el volumen del dolor.',
        'Entender el dolor no lo cura, pero baja el miedo y abre caminos para vivir mejor.',
        'Ante un dolor nuevo, distinto o con señales de alarma, siempre primero el médico.',
      ],
      sections: [
        {
          heading: 'El dolor es una alarma',
          paragraphs: [
            'La Asociación Internacional para el Estudio del Dolor lo define como una experiencia desagradable, del cuerpo y de la emoción, ligada a un daño real o posible. Aclara además que el dolor siempre es personal y que hay que respetar el relato de quien lo siente (Raja y colaboradores, 2020).',
            'Lorimer Moseley y David Butler lo explican con una imagen: el dolor es una alarma. El cerebro reúne lo que sabe del cuerpo, del entorno y de experiencias pasadas. Si concluye que hay peligro, produce dolor para que te protejas (Moseley y Butler, 2015).',
            'En un dolor agudo, como un esguince, la alarma es útil. En el dolor crónico, que dura más de tres meses, el sistema nervioso se vuelve más sensible. La alarma suena con poco, aunque los tejidos ya hayan sanado o los estudios salgan normales. Pasa en la lumbalgia, la fibromialgia, la migraña y muchos otros dolores.',
            'Esto no quiere decir que el dolor esté «en tu cabeza». Todo dolor lo produce el sistema nervioso. Quiere decir que hay muchas puertas para influir en él: el sueño, el estrés, el miedo, la actividad, los vínculos y lo que piensas sobre el dolor.',
          ],
        },
        {
          heading: 'La lupa de la mente',
          paragraphs: [
            'Michael Sullivan describió la catastrofización del dolor. Incluye rumiar, es decir, no poder dejar de pensar en el dolor. También magnificar, o temer que sea algo grave. Y sentirse sin salida, creer que nada se puede hacer (Sullivan y colaboradores, 1995).',
            'Es una reacción humana ante algo que asusta. Pero suma una segunda alarma y se asocia con más dolor y más limitación (Quartana y colaboradores, 2009). También alimenta el miedo a moverse y la evitación, que con el tiempo achican la vida (Vlaeyen y Linton, 2000).',
            'Se puede trabajar. La terapia cognitivo-conductual ayuda a notar esos pensamientos y responderles. La terapia de aceptación y compromiso ayuda a verlos como pensamientos y a elegir qué hacer según lo que importa (McCracken y Vowles, 2014).',
          ],
        },
        {
          heading: 'Sueño y dolor',
          paragraphs: [
            'El dolor corta el sueño, y dormir mal sube la sensibilidad al dolor al día siguiente. Los estudios sugieren que el sueño pesa en el dolor tanto o más que al revés (Finan y colaboradores, 2013). Por eso cuidar la noche es parte del tratamiento.',
            'Las técnicas de la terapia cognitivo-conductual del insomnio también sirven a personas con dolor (Smith y Haythornthwaite, 2004). Si roncas fuerte, dejas de respirar de noche o tienes mucho sueño de día, coméntalo con tu médico.',
          ],
        },
        {
          heading: 'Salir del auge y la caída',
          paragraphs: [
            'En los días buenos es tentador hacer todo lo pendiente. Después llega un brote y se pasan días casi sin moverse. Al mejorar, se intenta recuperar el tiempo perdido, y el ciclo se repite. Con los meses, el cuerpo tolera menos y la vida se achica.',
            'Dosificar la actividad, o pacing, propone hacer las cosas por tiempo y con pausas, en días buenos y malos, y subir muy de a poco (Nielson y colaboradores, 2013). Tener además un plan escrito para los brotes ayuda a no entrar en pánico ni pasarse cuando pasan. Qué actividad y cuánto, se acuerda con tu equipo de salud.',
          ],
        },
      ],
      caveat: {
        title: 'Primero, tu médico',
        body: 'Esta información no reemplaza la consulta ni indica fármacos ni ejercicios. Consulta ante un dolor nuevo, un cambio en tu dolor habitual o síntomas como fiebre, pérdida de peso sin razón, debilidad u hormigueo nuevo, pérdida de control de la orina o un dolor de cabeza súbito y muy fuerte. La educación en neurociencia del dolor tiene buena evidencia cuando se suma a otros tratamientos, y menos cuando se usa sola.',
      },
      diagram: {
        title: 'El ciclo de auge y caída',
        nodes: ['Día bueno', 'Hacer de más para recuperar lo perdido', 'Brote de dolor', 'Reposo largo', 'El cuerpo tolera menos y crece el miedo'],
        caption: 'Dosificar la actividad, tener un plan para los brotes y cuidar el sueño ayudan a cortar el ciclo.',
      },
      related: {
        practices: ['el-volumen-del-dolor', 'lupa-sobre-el-dolor', 'plan-para-el-brote', 'dormir-con-dolor', 'ritmo-de-actividad', 'hacer-lugar-al-dolor', 'valores-pese-al-dolor'],
        articles: ['dolor-cronico-act', 'dolor-cronico', 'hablar-del-dolor'],
      },
      references: [RAJA_2020, MOSELEY_2015, BUTLER_2013, LOUW_2011, TREEDE_2019, SULLIVAN_1995, QUARTANA_2009, VLAEYEN_2000, MCCRACKEN_2014, FINAN_2013, SMITH_2004, NIELSON_2013],
    },
    {
      id: 'hablar-del-dolor',
      title: 'Hablar del dolor con el médico y con la familia',
      subtitle: 'Cómo contar un dolor que no se ve, aprovechar la consulta y pedir la ayuda que de verdad sirve.',
      category: 'Salud y trabajo',
      readingMin: 6,
      keyPoints: [
        'El dolor crónico es real y merece atención aunque los estudios salgan normales.',
        'En la consulta, cuenta qué te impide hacer, no sólo cuánto duele.',
        'En casa, tanto que te hagan todo como que no te crean pueden achicar tu vida.',
        'Pedidos concretos ayudan más que pedir paciencia en general.',
      ],
      sections: [
        {
          heading: 'Un dolor que no se ve',
          paragraphs: [
            'Muchas personas con dolor crónico sienten que no les creen. Los estudios pueden salir normales y, desde afuera, se las ve bien. Eso duele casi tanto como el dolor.',
            'Hoy el dolor crónico tiene lugar propio en la clasificación internacional de enfermedades. A veces es un síntoma de otra enfermedad. Otras veces es un problema en sí mismo, como en la fibromialgia o en muchas lumbalgias (Treede y colaboradores, 2019).',
          ],
        },
        {
          heading: 'En la consulta',
          paragraphs: [
            'Llevar una hoja ayuda. Anota cómo es el dolor, qué cambió, qué te impide hacer, qué probaste, cómo duermes y cómo está tu ánimo. Escribe tus tres preguntas más importantes.',
            'Si algo cambió, dilo primero. Un dolor nuevo o distinto necesita evaluación. Las decisiones sobre fármacos y ejercicios las toma tu equipo de salud contigo. Si sientes que no te escuchan, puedes pedir otra opinión.',
          ],
        },
        {
          heading: 'En casa',
          paragraphs: [
            'Wilbert Fordyce mostró que lo que hace el entorno ante el dolor también influye en él (Fordyce, 1976). Si la familia hace todo por ti, con cariño, puedes perder actividades que te importan. Si siente que exageras, crece la soledad.',
            'Annmarie Cano y Amanda Williams proponen que hablar del dolor sea una ocasión de cercanía (Cano y Williams, 2010). Ayuda contar lo que sientes, agradecer lo que sirve y hacer pedidos concretos. Por ejemplo: «En los días malos, pregúntame qué necesito antes de hacerlo por mí».',
          ],
        },
      ],
      caveat: {
        title: 'Cuándo pedir más ayuda',
        body: 'Si el dolor te quita las ganas de vivir, pide ayuda hoy: 135 (CABA y GBA), 0800-345-1435 o el botón Ayuda de la app. Si la convivencia está muy desgastada o hay violencia, busca acompañamiento: la Línea 144 atiende situaciones de violencia de género. Un equipo de dolor o un psicólogo con experiencia en dolor crónico pueden ayudarte a ti y a tu familia.',
      },
      related: {
        practices: ['preparar-la-consulta-del-dolor', 'contar-mi-dolor-en-casa', 'el-volumen-del-dolor', 'contarlo-a-otros', 'dear-man'],
        articles: ['entender-el-dolor-cronico', 'dolor-cronico-act'],
      },
      references: [TREEDE_2019, RAJA_2020, NICHOLAS_2011, FORDYCE_1976, CANO_2010],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'convivir-con-el-dolor',
      title: 'Convivir con el dolor',
      subtitle: 'Cuatro semanas para entender tu dolor y que ocupe menos lugar',
      description:
        'Un recorrido para personas con dolor crónico, como lumbalgia, fibromialgia o migraña. Entenderás cómo funciona la alarma del dolor, trabajarás los pensamientos que la suben, cuidarás el sueño, armarás un plan para los brotes y prepararás charlas con tu médico y tu familia. No reemplaza el tratamiento ni indica fármacos ni ejercicios.',
      basis: 'Moseley y Butler (2015); Sullivan y colaboradores (1995); Finan, Goodin y Smith (2013); Nielson y colaboradores (2013); McCracken y Vowles (2014).',
      rhythm: '10 minutos, 4 o 5 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Entender',
          focus: 'El dolor como alarma',
          description: 'Leerás cómo funciona el dolor crónico y harás tu lista de lo que sube y baja su volumen.',
          practiceIds: ['el-volumen-del-dolor', 'respiracion-resonante'],
          articleIds: ['entender-el-dolor-cronico'],
        },
        {
          title: 'Semana 2 · La mente y el dolor',
          focus: 'Catastrofización y aceptación',
          description: 'Practicarás notar los pensamientos que agrandan el dolor y hacer lugar a la sensación sin pelear con ella.',
          practiceIds: ['lupa-sobre-el-dolor', 'hacer-lugar-al-dolor'],
          articleIds: ['dolor-cronico-act'],
          journalType: 'reestructuracion',
        },
        {
          title: 'Semana 3 · Ritmo y descanso',
          focus: 'Salir del auge y la caída',
          description: 'Repartirás la actividad por tiempo, armarás tu plan para los brotes y cuidarás el sueño.',
          practiceIds: ['ritmo-de-actividad', 'plan-para-el-brote', 'dormir-con-dolor'],
          articleIds: [],
          journalType: 'diario-sueno',
        },
        {
          title: 'Semana 4 · Vivir y contar',
          focus: 'Valores, consulta y familia',
          description: 'Volverás a algo que te importa en una versión posible y prepararás charlas con tu médico y con tu familia.',
          practiceIds: ['valores-pese-al-dolor', 'preparar-la-consulta-del-dolor', 'contar-mi-dolor-en-casa'],
          articleIds: ['hablar-del-dolor'],
          journalType: 'conversacion',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-el-dolor-es-una-alarma',
      title: 'El dolor es una alarma',
      subtitle: 'Por qué duele aunque no haya daño.',
      slides: [
        { heading: 'Una alarma', text: 'El dolor es una alarma del cuerpo. La enciende el cerebro cuando cree que hay peligro. Sirve para protegerte.' },
        { heading: 'Muy sensible', text: 'Cuando el dolor dura meses, la alarma se vuelve sensible. Suena antes y más fuerte. A veces suena aunque no haya daño.' },
        { heading: 'Es real', text: 'Eso no quiere decir que lo inventes. Todo dolor lo hace el sistema nervioso. El tuyo también es real.' },
        { heading: 'El volumen', text: 'El sueño, el estrés, el miedo y la compañía suben o bajan el volumen. Conocer lo que lo baja te da un poco de control.' },
        { heading: 'Con tu médico', text: 'Si el dolor es nuevo, cambia o viene con fiebre o debilidad, consulta. Primero se descarta lo que hay que tratar.' },
      ],
      related: { practices: ['el-volumen-del-dolor'], articles: ['entender-el-dolor-cronico'] },
      references: [MOSELEY_2015, BUTLER_2013],
    },
    {
      id: 'pildora-auge-y-caida',
      title: 'Hacer todo hoy, pagarlo mañana',
      subtitle: 'El ciclo de auge y caída y cómo salir.',
      slides: [
        { heading: 'Un día bueno', text: 'Te sientes mejor y haces todo lo que quedó pendiente. Limpias, sales, trabajas de más.' },
        { heading: 'La caída', text: 'Al otro día el dolor sube. Pasas días casi sin moverte. Después quieres recuperar el tiempo, y todo empieza otra vez.' },
        { heading: 'Por tiempo', text: 'Dosificar es hacer las cosas por tiempo, con pausas, en días buenos y malos. Parar antes del límite, no cuando ya duele mucho.' },
        { heading: 'Un plan', text: 'Los brotes llegan igual. No es tu culpa. Arma en un día tranquilo un plan corto para esos días.' },
        { heading: 'Con tu equipo', text: 'Qué hacer y cuánto subir, acuérdalo con tu médico o tu kinesiólogo. Si aparece algo nuevo, consulta.' },
      ],
      related: { practices: ['ritmo-de-actividad', 'plan-para-el-brote'], articles: ['entender-el-dolor-cronico'] },
      references: [NIELSON_2013, NICHOLAS_2011],
    },
    {
      id: 'pildora-lupa-del-dolor',
      title: 'La lupa sobre el dolor',
      subtitle: 'Cuando los pensamientos agrandan lo que duele.',
      slides: [
        { heading: 'Tres formas', text: 'No poder dejar de pensar en el dolor. Temer que sea algo grave. Sentir que nada se puede hacer. Así se ve la catastrofización.' },
        { heading: 'Es humano', text: 'Ante algo que asusta, la mente busca el peligro. Es normal. Pero suma una segunda alarma encima del dolor.' },
        { heading: 'Notar', text: 'Escribe el pensamiento con sus palabras. Ponle un nombre. Dite: «Es un pensamiento sobre el dolor. No es el dolor».' },
        { heading: 'Una voz amiga', text: '¿Qué le dirías a alguien que quieres? Busca una frase verdadera, no una frase linda. Y una cosa chica que sí puedas hacer.' },
        { heading: 'Si es nuevo', text: 'Si el miedo viene por un dolor nuevo o distinto, no lo pienses más: consulta a tu médico.' },
      ],
      related: { practices: ['lupa-sobre-el-dolor', 'hacer-lugar-al-dolor'], articles: ['entender-el-dolor-cronico'] },
      references: [SULLIVAN_1995, QUARTANA_2009],
    },
    {
      id: 'pildora-dolor-y-sueno',
      title: 'Dormir mal, doler más',
      subtitle: 'Un círculo que se puede cortar.',
      slides: [
        { heading: 'Un círculo', text: 'El dolor no te deja dormir. Y dormir mal hace que mañana duela más. Uno alimenta al otro.' },
        { heading: 'El sueño pesa', text: 'Los estudios muestran que el sueño pesa mucho en el dolor. Por eso cuidar la noche también es cuidar el dolor.' },
        { heading: 'Antes de dormir', text: 'Prepara lo que te da comodidad. Baja la luz. Deja el celular lejos de la cama.' },
        { heading: 'De madrugada', text: 'Si el dolor te despierta, cambia de posición y respira lento. Recuerda que de noche todo parece peor.' },
        { heading: 'Cuéntalo', text: 'Habla con tu médico de cómo duermes. No cambies tu medicación por tu cuenta.' },
      ],
      related: { practices: ['dormir-con-dolor', 'rutina-bajada-dormir'], articles: ['entender-el-dolor-cronico'] },
      references: [FINAN_2013, SMITH_2004],
    },
  ],

  // ================================================================== glosario
  glossary: [
    {
      id: 'educacion-en-neurociencia-del-dolor',
      term: 'Educación en neurociencia del dolor',
      definition: 'Explicar cómo el sistema nervioso produce el dolor para proteger. Ayuda a bajar el miedo y a entender que el dolor es real aunque no haya daño.',
      articleId: 'entender-el-dolor-cronico',
      practiceId: 'el-volumen-del-dolor',
    },
    {
      id: 'sensibilizacion-central',
      term: 'Sensibilización central',
      definition: 'Cambio por el que el sistema nervioso se vuelve más sensible y amplifica las señales. Hace que el dolor aparezca antes y más fuerte.',
      articleId: 'entender-el-dolor-cronico',
    },
    {
      id: 'catastrofizacion-del-dolor',
      term: 'Catastrofización del dolor',
      definition: 'Rumiar sobre el dolor, temer lo peor y sentir que nada se puede hacer. Se asocia con más dolor y limitación, y se puede trabajar.',
      articleId: 'entender-el-dolor-cronico',
      practiceId: 'lupa-sobre-el-dolor',
    },
    {
      id: 'ciclo-auge-y-caida',
      term: 'Ciclo de auge y caída',
      definition: 'Hacer de más en los días buenos y quedar días casi sin moverse por el dolor. Con el tiempo el cuerpo tolera menos.',
      articleId: 'entender-el-dolor-cronico',
      practiceId: 'plan-para-el-brote',
    },
    {
      id: 'brote-de-dolor',
      term: 'Brote de dolor',
      definition: 'Período en que un dolor crónico ya conocido sube por encima de lo habitual. Un plan escrito ayuda a atravesarlo. Si el dolor es distinto, se consulta.',
      practiceId: 'plan-para-el-brote',
    },
  ],
};
