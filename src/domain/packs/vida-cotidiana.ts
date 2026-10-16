import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Vida cotidiana»:
 *  1. Celular y pantallas en adultos: uso intencional y uso automático, notificaciones,
 *     desplazamiento infinito, plan de uso con valores y surfear la urgencia de mirar.
 *  2. Alcohol con enfoque de reducción de daños y entrevista motivacional: balance,
 *     límites de menor riesgo, señales de alarma y cuándo consultar.
 *  3. Estrés económico: lo controlable y lo que no, resolución de problemas aplicada a la
 *     plata, hablar de dinero en familia, vergüenza y autocompasión.
 *  4. Diversidad sexual y de género con enfoque afirmativo: estrés de minorías (Meyer),
 *     autocuidado frente a la discriminación, salir del clóset a tu ritmo y red de apoyo.
 *  5. Migración y desarraigo: duelo migratorio (Achotegui), aculturación (Berry),
 *     vínculos a distancia, red nueva e identidad bicultural.
 *  6. Violencia de género: sólo información y derivación (Línea 144, 911). La única
 *     práctica es de estabilización y autocuidado; nunca de confrontación.
 *
 * Nada de esto reemplaza la atención profesional. Las prácticas de alcohol llevan avisos
 * porque dejar de golpe con dependencia física puede ser peligroso.
 */

// ------------------------------------------------------------ referencias: pantallas
const DUKE_2017: Reference = {
  citation: 'Duke, É., & Montag, C. (2017). Smartphone addiction, daily interruptions and self-reported productivity. Addictive Behaviors Reports, 6, 90–95.',
  doi: '10.1016/j.abrep.2017.07.002',
};
const KUSHLEV_2016: Reference = {
  citation: 'Kushlev, K., Proulx, J., & Dunn, E. W. (2016). «Silence your phones»: Smartphone notifications increase inattention and hyperactivity symptoms. Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems, 1011–1020.',
};
const FITZ_2019: Reference = {
  citation: 'Fitz, N., Kushlev, K., Jagannathan, R., Lewis, T., Paliwal, D., & Ariely, D. (2019). Batching smartphone notifications can improve well-being. Computers in Human Behavior, 101, 84–94.',
  doi: '10.1016/j.chb.2019.07.016',
};
const WOOD_2016: Reference = {
  citation: 'Wood, W., & Rünger, D. (2016). Psychology of habit. Annual Review of Psychology, 67, 289–314.',
  doi: '10.1146/annurev-psych-122414-033417',
};
const BOWEN_2009: Reference = {
  citation: 'Bowen, S., & Marlatt, G. A. (2009). Surfing the urge: Brief mindfulness-based intervention for college student smokers. Psychology of Addictive Behaviors, 23(4), 666–671.',
  doi: '10.1037/a0017127',
};
const GOLLWITZER_2006: Reference = {
  citation: 'Gollwitzer, P. M., & Sheeran, P. (2006). Implementation intentions and goal achievement: A meta-analysis of effects and processes. Advances in Experimental Social Psychology, 38, 69–119.',
  doi: '10.1016/S0065-2601(06)38002-1',
};
const ORBEN_2019_ADULTOS: Reference = {
  citation: 'Orben, A., & Przybylski, A. K. (2019). The association between adolescent well-being and digital technology use. Nature Human Behaviour, 3(2), 173–182.',
  doi: '10.1038/s41562-018-0506-1',
  note: 'Muestra que la relación promedio entre pantallas y malestar es pequeña; importa más el uso concreto.',
};

// ------------------------------------------------------------ referencias: alcohol
const MILLER_2013: Reference = { citation: 'Miller, W. R., & Rollnick, S. (2013). Motivational interviewing: Helping people change (3.ª ed.). Guilford Press.' };
const MARLATT_2002: Reference = {
  citation: 'Marlatt, G. A., & Witkiewitz, K. (2002). Harm reduction approaches to alcohol use: Health promotion, prevention, and treatment. Addictive Behaviors, 27(6), 867–886.',
  doi: '10.1016/S0306-4603(02)00294-0',
};
const BABOR_2001: Reference = {
  citation: 'Babor, T. F., Higgins-Biddle, J. C., Saunders, J. B., & Monteiro, M. G. (2001). AUDIT: The Alcohol Use Disorders Identification Test. Guidelines for use in primary care (2.ª ed.). Organización Mundial de la Salud.',
};
const CCSA_2023: Reference = {
  citation: 'Paradis, C., Butt, P., Shield, K., et al. (2023). Canada’s Guidance on Alcohol and Health: Final report. Canadian Centre on Substance Use and Addiction.',
  note: 'Hasta dos tragos estándar por semana: riesgo bajo; no más de dos en un mismo día.',
};
const OMS_2023_ALCOHOL: Reference = {
  citation: 'Anderson, B. O., Berdzuli, N., Ilbawi, A., et al. (2023). Health and cancer risks associated with low levels of alcohol consumption. The Lancet Public Health, 8(1), e6–e7.',
  doi: '10.1016/S2468-2667(22)00317-6',
  note: 'Declaración de la Oficina Regional de la OMS para Europa: no hay un nivel de consumo libre de riesgo.',
};
const KANER_2018: Reference = {
  citation: 'Kaner, E. F. S., Beyer, F. R., Muirhead, C., et al. (2018). Effectiveness of brief alcohol interventions in primary care populations. Cochrane Database of Systematic Reviews, 2(2), CD004148.',
  doi: '10.1002/14651858.CD004148.pub4',
};
const SEDRONAR: Reference = {
  citation: 'Secretaría de Políticas Integrales sobre Drogas de la Nación Argentina. (2024). Línea 141: atención y orientación sobre consumos. SEDRONAR.',
  note: 'Gratuita, anónima y las 24 horas en todo el país.',
};

// ------------------------------------------------------------ referencias: plata
const NEZU_2013: Reference = { citation: 'Nezu, A. M., Nezu, C. M., & D’Zurilla, T. J. (2013). Problem-solving therapy: A treatment manual. Springer.' };
const RICHARDSON_2013: Reference = {
  citation: 'Richardson, T., Elliott, P., & Roberts, R. (2013). The relationship between personal unsecured debt and mental and physical health: A systematic review and meta-analysis. Clinical Psychology Review, 33(8), 1148–1162.',
  doi: '10.1016/j.cpr.2013.08.009',
};
const MANI_2013: Reference = {
  citation: 'Mani, A., Mullainathan, S., Shafir, E., & Zhao, J. (2013). Poverty impedes cognitive function. Science, 341(6149), 976–980.',
  doi: '10.1126/science.1238041',
};
const BORKOVEC_1983: Reference = {
  citation: 'Borkovec, T. D., Wilkinson, L., Folensbee, R., & Lerman, C. (1983). Stimulus control applications to the treatment of worry. Behaviour Research and Therapy, 21(3), 247–251.',
  doi: '10.1016/0005-7967(83)90206-1',
};
const NEFF_2003: Reference = {
  citation: 'Neff, K. D. (2003). Self-compassion: An alternative conceptualization of a healthy attitude toward oneself. Self and Identity, 2(2), 85–101.',
  doi: '10.1080/15298860309032',
};
const DEW_2012: Reference = {
  citation: 'Dew, J., Britt, S., & Huston, S. (2012). Examining the relationship between financial issues and divorce. Family Relations, 61(4), 615–628.',
  doi: '10.1111/j.1741-3729.2012.00715.x',
};

// ------------------------------------------------------------ referencias: diversidad
const MEYER_2003: Reference = {
  citation: 'Meyer, I. H. (2003). Prejudice, social stress, and mental health in lesbian, gay, and bisexual populations: Conceptual issues and research evidence. Psychological Bulletin, 129(5), 674–697.',
  doi: '10.1037/0033-2909.129.5.674',
};
const HENDRICKS_2012: Reference = {
  citation: 'Hendricks, M. L., & Testa, R. J. (2012). A conceptual framework for clinical work with transgender and gender nonconforming clients: An adaptation of the Minority Stress Model. Professional Psychology: Research and Practice, 43(5), 460–467.',
  doi: '10.1037/a0029597',
};
const APA_2015_TRANS: Reference = {
  citation: 'American Psychological Association. (2015). Guidelines for psychological practice with transgender and gender nonconforming people. American Psychologist, 70(9), 832–864.',
  doi: '10.1037/a0039906',
};
const APA_2021_SOCE: Reference = {
  citation: 'American Psychological Association. (2021). APA resolution on sexual orientation change efforts. APA.',
  note: 'Rechaza las llamadas «terapias de conversión» por ineficaces y dañinas.',
};
const LEY_26657: Reference = {
  citation: 'Ley 26.657 de Salud Mental. (2010). Boletín Oficial de la República Argentina.',
  note: 'El artículo 3 prohíbe hacer un diagnóstico en salud mental sobre la base de la elección o la identidad sexual.',
};
const LEY_26743: Reference = { citation: 'Ley 26.743 de Identidad de Género. (2012). Boletín Oficial de la República Argentina.' };
const RYAN_2010: Reference = {
  citation: 'Ryan, C., Russell, S. T., Huebner, D., Diaz, R., & Sanchez, J. (2010). Family acceptance in adolescence and the health of LGBT young adults. Journal of Child and Adolescent Psychiatric Nursing, 23(4), 205–213.',
  doi: '10.1111/j.1744-6171.2010.00246.x',
};

// ------------------------------------------------------------ referencias: migración
const ACHOTEGUI_2009: Reference = {
  citation: 'Achotegui, J. (2009). Migración y salud mental. El síndrome del inmigrante con estrés crónico y múltiple (síndrome de Ulises). Zerbitzuan, 46, 163–171.',
};
const BERRY_1997: Reference = {
  citation: 'Berry, J. W. (1997). Immigration, acculturation, and adaptation. Applied Psychology, 46(1), 5–34.',
  doi: '10.1111/j.1464-0597.1997.tb01087.x',
};
const NGUYEN_2013: Reference = {
  citation: 'Nguyen, A.-M. D., & Benet-Martínez, V. (2013). Biculturalism and adjustment: A meta-analysis. Journal of Cross-Cultural Psychology, 44(1), 122–159.',
};
const BOSS_1999: Reference = { citation: 'Boss, P. (1999). Ambiguous loss: Learning to live with unresolved grief. Harvard University Press.' };

// ------------------------------------------------------------ referencias: violencia
const LEY_26485: Reference = {
  citation: 'Ley 26.485 de Protección Integral a las Mujeres. (2009). Boletín Oficial de la República Argentina.',
  note: 'Define los tipos de violencia: física, psicológica, sexual, económica y patrimonial, simbólica y política.',
};
const OMS_2013_VIOLENCIA: Reference = {
  citation: 'Organización Mundial de la Salud. (2013). Responding to intimate partner violence and sexual violence against women: WHO clinical and policy guidelines. OMS.',
};
const CAMPBELL_2002: Reference = {
  citation: 'Campbell, J. C. (2002). Health consequences of intimate partner violence. The Lancet, 359(9314), 1331–1336.',
  doi: '10.1016/S0140-6736(02)08336-8',
};
const LINEA_144: Reference = {
  citation: 'Gobierno de la República Argentina. (2024). Línea 144: atención a personas en situación de violencia por motivos de género. Argentina.gob.ar.',
  note: 'Gratuita, confidencial y las 24 horas, todos los días, en todo el país.',
};

// ------------------------------------------------------------ avisos
const ALCOHOL_CAUTION =
  'Si tomas todos los días y al dejar sientes temblores, sudor, ansiedad fuerte o insomnio, puede haber dependencia física. No dejes de golpe: la abstinencia puede ser grave. Consulta antes a un médico o llama a la Línea 141 de SEDRONAR. Si estás embarazada o tomas medicación, habla con tu médico: lo más seguro suele ser no tomar.';

const VIOLENCIA_CAUTION =
  'Esta práctica sirve para calmar el cuerpo, no para resolver la violencia. Si estás en peligro, llama al 911. Para orientación, llama a la Línea 144, gratis y las 24 horas. Si alguien revisa tu celular, ten cuidado con lo que anotas y borra el historial. No confrontes a quien te agrede: tu seguridad es primero.';

export const VIDA_COTIDIANA_PACK: ContentPack = {
  id: 'vida-cotidiana',

  // ================================================================== prácticas
  practices: [
    // ------------------------------------------------------------ pantallas
    {
      id: 'auditoria-de-pantallas',
      title: 'Auditoría del celular: una semana',
      family: 'attentional',
      skills: ['attention'],
      summary: 'Mirar durante una semana cuándo, para qué y cómo te deja el celular, sin cambiar nada todavía.',
      mechanism: 'Registrar el uso lo saca del piloto automático. Ver los disparadores y el efecto en el ánimo muestra qué conviene cambiar.',
      evidenceLevel: 'moderada',
      evidence: [WOOD_2016, DUKE_2017, ORBEN_2019_ADULTOS],
      howItWorks: [
        'Gran parte del uso del celular es un hábito. Wendy Wood muestra que los hábitos se disparan solos ante una señal: el aburrimiento, una fila, una notificación. No pasan por la decisión (Wood y Rünger, 2016).',
        'Por eso, lo primero es mirar. Anotar cuándo agarras el celular y cómo te sientes después te muestra el patrón. Muchas personas descubren que el problema no son las horas, sino ciertos momentos.',
        'Los estudios no muestran que toda pantalla haga mal. La relación promedio con el malestar es pequeña (Orben y Przybylski, 2019). Importa qué haces, cuándo y qué dejas de hacer.',
      ],
      tips: [
        'Usa el registro de tiempo de pantalla de tu celular como apoyo, pero suma tus notas: el número solo no dice cómo te sentiste.',
        'No cambies nada esta semana. Primero hay que ver.',
        'Anota tres o cuatro momentos por día. No hace falta registrar todo.',
        'Mira con curiosidad, no con culpa. El celular está diseñado para atraparte.',
      ],
      obstacles: [
        { q: 'Me da vergüenza ver cuánto lo uso.', a: 'Es muy común. Las aplicaciones están hechas para que sigas mirando. Ver el dato es el primer paso para elegir.' },
        { q: 'Me olvido de anotar.', a: 'Pon una alarma suave a la tarde y a la noche. Anota lo que recuerdes, aunque sea poco.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio dos veces. Toma el celular en la mano y míralo, sin desbloquearlo.', durationSec: 30, kind: 'breath' },
        { title: 'Ver el número', instruction: 'Abre el registro de tiempo de pantalla. Mira las tres aplicaciones que más usaste ayer. No juzgues, solo mira.', durationSec: 60, kind: 'instruction' },
        { title: 'El disparador', instruction: 'Piensa en la última vez que lo agarraste sin pensar. ¿Qué pasaba antes? ¿Aburrimiento, espera, una notificación, un mal momento?', durationSec: 60, kind: 'reflection' },
        { title: 'El efecto', instruction: 'Después de ese rato, ¿cómo te sentiste? ¿Mejor, igual o peor? Anótalo con una palabra.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que suma', instruction: 'Ahora piensa en un uso del celular que te hace bien. Una llamada, una receta, un mapa. Anótalo también.', durationSec: 45, kind: 'reflection' },
        { title: 'El plan de la semana', instruction: 'Durante siete días, anota tres momentos por día: hora, disparador y cómo quedaste. Al final, busca el patrón.', durationSec: 45, kind: 'instruction' },
        { title: 'Cerrar', instruction: 'Respira y dite: «Estoy mirando para poder elegir». Deja el celular boca abajo un momento.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'plan-celular-intencional',
      title: 'Plan de uso intencional del celular',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Decidir para qué quieres usar el celular, según lo que te importa, y armar el entorno para que lo automático cueste más.',
      mechanism: 'Unir el uso a tus valores, agrupar notificaciones y usar planes «si pasa esto, hago aquello» cambia la señal que dispara el hábito.',
      evidenceLevel: 'moderada',
      evidence: [FITZ_2019, KUSHLEV_2016, GOLLWITZER_2006, WOOD_2016],
      howItWorks: [
        'Las notificaciones interrumpen y dispersan la atención. En un estudio, quienes recibieron los avisos en tandas, tres veces por día, se sintieron más concentrados y con menos estrés (Fitz y colaboradores, 2019).',
        'Cambiar el entorno funciona mejor que la fuerza de voluntad. Si la aplicación que más te atrapa no está en la primera pantalla, la señal se debilita (Wood y Rünger, 2016).',
        'Los planes del tipo «si pasa X, hago Y» ayudan a cumplir lo que uno se propone. Se llaman intenciones de implementación y tienen buena evidencia (Gollwitzer y Sheeran, 2006).',
        'La meta no es usar el celular lo menos posible. Es que el uso vaya con lo que te importa: estar con tu gente, descansar, aprender o trabajar con foco.',
      ],
      tips: [
        'Empieza por un solo cambio en el entorno y uno en las notificaciones.',
        'Deja activadas las llamadas y los mensajes de las personas importantes.',
        'Elige un lugar fijo para el celular a la noche, fuera de la cama si puedes.',
        'Revisa el plan en una semana. Ajusta lo que no funcionó.',
      ],
      obstacles: [
        { q: 'Necesito el celular para trabajar.', a: 'Entonces separa usos. Agrupa los avisos del trabajo en horarios y deja fuera de la vista lo que te dispersa.' },
        { q: 'Al rato vuelvo a lo de siempre.', a: 'Es normal. Los hábitos tiran. Vuelve al plan sin castigarte y busca qué señal te ganó.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio y deja el celular a tu lado, sin mirarlo.', durationSec: 30, kind: 'breath' },
        { title: 'Para qué', instruction: 'Piensa en dos o tres cosas que te importan. ¿En qué te ayuda el celular con eso? ¿En qué te aleja?', durationSec: 75, kind: 'reflection' },
        { title: 'Notificaciones', instruction: 'Elige qué avisos dejas activos. Apaga los de redes y compras. Si puedes, agrupa el resto en dos o tres horarios.', durationSec: 75, kind: 'instruction' },
        { title: 'La primera pantalla', instruction: 'Deja en la primera pantalla sólo herramientas útiles. Mueve a una carpeta lejana la aplicación que más te atrapa.', durationSec: 60, kind: 'instruction' },
        { title: 'Zonas sin celular', instruction: 'Elige un momento sin celular. Por ejemplo, la cena o la primera media hora del día.', durationSec: 45, kind: 'reflection' },
        { title: 'Si pasa esto', instruction: 'Arma una frase: «Si estoy en una fila y quiero mirar, entonces respiro y miro alrededor». Escríbela.', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Lee tu plan en voz alta. Anota una fecha para revisarlo dentro de una semana.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'pausa-antes-de-desbloquear',
      title: 'Pausa antes de desbloquear',
      family: 'attentional',
      skills: ['attention'],
      summary: 'Un minuto para notar la urgencia de mirar el celular, dejarla pasar como una ola y elegir qué hacer.',
      mechanism: 'Observar la urgencia sin seguirla debilita el lazo entre la señal y el gesto automático. Es la técnica de surfear el impulso aplicada al celular.',
      evidenceLevel: 'preliminar',
      evidence: [BOWEN_2009, WOOD_2016],
      micro: true,
      howItWorks: [
        'Las ganas de mirar el celular suben, llegan a un pico y bajan, como una ola. Si no las sigues, pasan solas en poco tiempo.',
        'Sarah Bowen y Alan Marlatt enseñaron a «surfear el impulso» a personas que fumaban. Quienes lo practicaron fumaron menos en la semana siguiente (Bowen y Marlatt, 2009). La aplicación al celular es una adaptación, todavía con poca investigación propia.',
        'Cada vez que notas la urgencia y eliges, el gesto deja de ser tan automático. No hace falta ganar siempre. Cada pausa cuenta.',
      ],
      tips: [
        'Usa la pausa justo cuando la mano va hacia el celular.',
        'Pon un fondo de pantalla con una pregunta: «¿Para qué lo abro?».',
        'Si después de la pausa decides mirar, está bien. Lo importante es que fue una elección.',
      ],
      obstacles: [
        { q: 'La urgencia no baja.', a: 'A veces tarda más. Respira un poco más largo o cambia de lugar. Con la práctica, las olas se acortan.' },
        { q: 'Me olvido de hacer la pausa.', a: 'Es esperable. Pon una banda elástica alrededor del celular como recordatorio físico por unos días.' },
      ],
      steps: [
        { title: 'Notar', instruction: 'Cuando la mano vaya al celular, frena. Dite: «Aparecieron las ganas de mirar».', durationSec: 20, kind: 'instruction' },
        { title: 'Sentir la ola', instruction: '¿Dónde sientes la urgencia? Puede ser en la mano, el pecho o la panza. Obsérvala como una ola que sube.', durationSec: 40, kind: 'breath' },
        { title: 'Respirar con ella', instruction: 'Respira despacio tres veces. Mira cómo la ola llega arriba y empieza a bajar.', durationSec: 40, kind: 'breath' },
        { title: 'Preguntar', instruction: 'Pregúntate: «¿Para qué lo quiero abrir?». Si hay un motivo claro, hazlo. Si no, elige otra cosa por un minuto.', durationSec: 30, kind: 'reflection' },
      ],
    },

    // ------------------------------------------------------------ alcohol
    {
      id: 'balance-del-alcohol',
      title: 'Balance del alcohol',
      family: 'constructive',
      skills: ['resilience'],
      summary: 'Mirar con honestidad lo que te da y lo que te cuesta el alcohol, y qué te gustaría cambiar, sin sermones.',
      mechanism: 'Poner en palabras tus propias razones, a favor y en contra, aclara la ambivalencia. Las razones dichas por uno mismo empujan más el cambio que las impuestas.',
      evidenceLevel: 'moderada',
      evidence: [MILLER_2013, KANER_2018, MARLATT_2002],
      cautions: ALCOHOL_CAUTION,
      howItWorks: [
        'La entrevista motivacional parte de una idea simple: querer y no querer cambiar a la vez es normal. Presionar suele generar más resistencia. Escuchar las propias razones abre la puerta (Miller y Rollnick, 2013).',
        'El balance mira cuatro cosas. Lo bueno de seguir igual. Lo malo de seguir igual. Lo bueno de cambiar. Lo difícil de cambiar. Reconocer lo que el alcohol te da no es justificarlo: es entender por qué cuesta.',
        'Las intervenciones breves que usan esta lógica reducen el consumo en personas que toman de más (Kaner y colaboradores, 2018). El enfoque de reducción de daños acepta metas distintas: tomar menos, tomar menos seguido o dejar (Marlatt y Witkiewitz, 2002).',
      ],
      tips: [
        'Escribe con tus palabras, no con las que crees que deberías usar.',
        'Si te cuesta, imagina qué te diría alguien que te quiere y no te juzga.',
        'No hace falta decidir nada hoy. Este ejercicio es para ver claro.',
        'Si notas señales de dependencia, habla con un profesional antes de cambiar.',
      ],
      obstacles: [
        { q: 'No sé si tomo de más.', a: 'Compara con las guías de menor riesgo del artículo. También puedes completar con tu médico el cuestionario AUDIT de la OMS.' },
        { q: 'Me da culpa pensar en esto.', a: 'La culpa no ayuda a cambiar. Míralo como un dato sobre tu salud, igual que la presión o el sueño.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Siéntate tranquilo y respira despacio. Piensa en cómo tomaste alcohol en el último mes.', durationSec: 40, kind: 'breath' },
        { title: 'Lo que te da', instruction: '¿Qué te da el alcohol? Relajarte, animarte, encajar. Anota dos o tres cosas con honestidad.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que te cuesta', instruction: '¿Qué te cuesta? Puede ser plata, sueño, peleas, resacas o cosas que dijiste. Anota lo que aparezca.', durationSec: 75, kind: 'reflection' },
        { title: 'Si cambias', instruction: 'Imagina que tomas menos. ¿Qué ganarías? ¿Qué sería lo más difícil?', durationSec: 75, kind: 'reflection' },
        { title: 'Cuánto importa', instruction: 'Del cero al diez, ¿cuánto te importa cambiar algo? ¿Por qué no un número más bajo?', durationSec: 50, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Lee lo que escribiste. Subraya la razón que más te mueve. Guárdala para la práctica del límite.', durationSec: 40, kind: 'instruction' },
      ],
    },
    {
      id: 'mi-plan-de-menor-riesgo',
      title: 'Mi plan de menor riesgo con el alcohol',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Elegir una meta propia para tomar con menos riesgo, prever las situaciones difíciles y saber cuándo pedir ayuda.',
      mechanism: 'Una meta concreta, planes para los momentos de riesgo y un registro simple bajan el consumo y los daños, sin exigir abstinencia a quien no la eligió.',
      evidenceLevel: 'moderada',
      evidence: [MARLATT_2002, CCSA_2023, OMS_2023_ALCOHOL, KANER_2018, BABOR_2001],
      cautions: ALCOHOL_CAUTION,
      howItWorks: [
        'Ningún nivel de alcohol es libre de riesgo para la salud (OMS, 2023). Pero tomar menos siempre baja el riesgo. Las guías de Canadá ubican el riesgo bajo en hasta dos tragos estándar por semana, y nunca más de dos en un mismo día (Paradis y colaboradores, 2023).',
        'La reducción de daños pone el foco en lo que se puede mejorar hoy. Tomar menos, sumar días sin alcohol, no manejar, comer antes, alternar con agua. Cada cambio cuenta (Marlatt y Witkiewitz, 2002).',
        'Las situaciones de riesgo son predecibles: ciertas personas, lugares, emociones u horarios. Si las prevés, puedes tener un plan listo y no depender de la fuerza de voluntad en el momento.',
      ],
      tips: [
        'Un trago estándar tiene unos diez gramos de alcohol puro. Es una lata chica de cerveza, una copa chica de vino o una medida de bebida blanca.',
        'Elige al menos dos días por semana sin alcohol.',
        'Nunca tomes si vas a manejar. Tampoco si estás embarazada o tomas medicación que interactúa.',
        'Si no logras cumplir tu meta varias veces, eso es información, no un fracaso. Habla con un profesional.',
      ],
      obstacles: [
        { q: 'En las juntadas todos toman.', a: 'Ten una respuesta lista, como «hoy manejo» o «estoy tomando agua». Lleva tu propia bebida sin alcohol.' },
        { q: 'Me propuse tomar menos y no pude.', a: 'Revisa qué situación te ganó y ajusta el plan. Si pasa seguido, puede ser señal de dependencia: consulta a un profesional.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Recuerda la razón que subrayaste en el balance.', durationSec: 30, kind: 'breath' },
        { title: 'Mi meta', instruction: 'Elige una meta concreta para el próximo mes. Por ejemplo: «No más de dos tragos por ocasión y tres días sin alcohol».', durationSec: 75, kind: 'reflection' },
        { title: 'Momentos de riesgo', instruction: 'Piensa en dos situaciones donde suele costarte. ¿Con quién, dónde, a qué hora, con qué emoción?', durationSec: 75, kind: 'reflection' },
        { title: 'Mi plan', instruction: 'Para cada situación, arma una frase: «Si pasa esto, entonces hago aquello». Escríbela.', durationSec: 75, kind: 'reflection' },
        { title: 'Señales de alarma', instruction: 'Anota cuándo pedirás ayuda. Por ejemplo: si no puedo cumplir la meta, si tomo para dormir o si me tiemblan las manos.', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Guarda el plan en un lugar a mano. Anota también la Línea 141 de SEDRONAR, gratuita y las 24 horas.', durationSec: 30, kind: 'instruction' },
      ],
    },

    // ------------------------------------------------------------ plata
    {
      id: 'plata-controlable',
      title: 'Plata: lo que depende de ti y lo que no',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Separar las preocupaciones económicas en lo que puedes resolver, lo que puedes influir y lo que no, y dar un paso concreto.',
      mechanism: 'Separar lo controlable baja la sensación de caos. Convertir la preocupación productiva en un paso y soltar la improductiva libera atención.',
      evidenceLevel: 'moderada',
      evidence: [NEZU_2013, MANI_2013, BORKOVEC_1983, RICHARDSON_2013],
      howItWorks: [
        'Las deudas y la falta de plata se asocian con más ansiedad y depresión (Richardson y colaboradores, 2013). Además, la preocupación por la plata ocupa la mente y deja menos espacio para pensar con claridad (Mani y colaboradores, 2013). No es falta de capacidad: es una mente sobrecargada.',
        'La preocupación productiva lleva a un paso concreto: llamar al banco, comparar precios, pedir un plan de pagos. La improductiva da vueltas sobre lo que no depende de ti, como la inflación o el futuro lejano.',
        'La terapia de resolución de problemas enseña a definir el problema, buscar opciones y elegir un paso (Nezu y colaboradores, 2013). Lo que no se puede cambiar se puede dejar para un horario fijo de preocupación (Borkovec y colaboradores, 1983).',
      ],
      tips: [
        'Hazlo con papel. Ver las cosas escritas ordena la cabeza.',
        'Elige un paso que puedas hacer en menos de una hora.',
        'Si las deudas te superan, busca asesoramiento gratuito en una defensoría del consumidor o en tu municipio.',
        'Si la angustia no te deja dormir ni funcionar, consulta a un profesional.',
      ],
      obstacles: [
        { q: 'Nada depende de mí.', a: 'A veces casi nada. Aun así, suele haber algo chico: pedir información, ordenar los gastos o cuidar tu descanso.' },
        { q: 'Mirar los números me angustia.', a: 'Es muy común. Hazlo de a poco, con un tiempo fijo, y termina con algo que te calme.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio tres veces. Apoya los pies en el piso.', durationSec: 30, kind: 'breath' },
        { title: 'Vaciar', instruction: 'Escribe todas las preocupaciones de plata que tengas, sin orden. Deudas, gastos, sueldo, precios.', durationSec: 90, kind: 'instruction' },
        { title: 'Tres columnas', instruction: 'Arma tres columnas: depende de mí, puedo influir, no depende de mí. Pon cada preocupación en una.', durationSec: 90, kind: 'reflection' },
        { title: 'Un problema', instruction: 'Elige una preocupación de la primera o segunda columna. Escríbela como un problema concreto y chico.', durationSec: 60, kind: 'reflection' },
        { title: 'Opciones', instruction: 'Anota tres opciones posibles, aunque no sean perfectas. Elige la más realista.', durationSec: 75, kind: 'reflection' },
        { title: 'Un paso', instruction: 'Decide un paso para esta semana. ¿Qué vas a hacer, cuándo y dónde?', durationSec: 45, kind: 'reflection' },
        { title: 'Soltar el resto', instruction: 'Mira la tercera columna. Dite: «Esto no depende de mí hoy». Elige un horario fijo para volver a pensarlo.', durationSec: 45, kind: 'breath' },
      ],
    },
    {
      id: 'hablar-de-plata',
      title: 'Hablar de plata en pareja o en familia',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Preparar una conversación sobre dinero que no termine en pelea: empezar suave, hablar de lo que importa y acordar un paso.',
      mechanism: 'Empezar con calma, nombrar lo que la plata significa para cada uno y buscar un acuerdo pequeño baja la tensión y protege el vínculo.',
      evidenceLevel: 'preliminar',
      evidence: [DEW_2012, NEZU_2013, NEFF_2003],
      howItWorks: [
        'Las discusiones por plata son de las que más desgastan a las parejas y predicen más problemas que otros desacuerdos (Dew y colaboradores, 2012). Muchas veces no se pelea por el número, sino por lo que significa: seguridad, libertad, cuidado o justicia.',
        'Ayuda elegir un buen momento, empezar por lo que sientes y no por un reproche, y buscar un acuerdo chico. Lo mismo vale para hablar con hijos grandes o con padres mayores.',
        'Si sientes vergüenza por tu situación, tratarte con amabilidad antes de hablar te deja más tranquilo para escuchar (Neff, 2003).',
      ],
      tips: [
        'No hables de plata cuando están con hambre, cansados o con poco tiempo.',
        'Habla en primera persona: «Me preocupa…», «Necesito…».',
        'Busquen un acuerdo chico. Los grandes cambios se arman de a poco.',
        'Si hay control del dinero, amenazas o miedo, no es un problema de comunicación. Busca ayuda: puede ser violencia económica.',
      ],
      obstacles: [
        { q: 'Cada vez que hablamos terminamos peleando.', a: 'Propongan una pausa de veinte minutos si alguien se acelera. Vuelvan cuando estén más calmos.' },
        { q: 'La otra persona no quiere hablar.', a: 'Propón un tiempo corto y un tema chico. Si sigue sin querer, piensa qué puedes hacer tú por tu cuenta.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en la persona con quien quieres hablar de plata.', durationSec: 30, kind: 'breath' },
        { title: 'Lo que significa', instruction: '¿Qué significa la plata para ti? ¿Seguridad, libertad, cuidado? ¿Y qué crees que significa para la otra persona?', durationSec: 75, kind: 'reflection' },
        { title: 'Un tema', instruction: 'Elige un solo tema para la charla. Por ejemplo, los gastos del súper o una deuda.', durationSec: 45, kind: 'reflection' },
        { title: 'Empezar suave', instruction: 'Escribe tu primera frase. Empieza por lo que sientes y lo que necesitas, sin reproches. «Me preocupa… y me gustaría que…».', durationSec: 75, kind: 'reflection' },
        { title: 'Escuchar', instruction: 'Piensa una pregunta para entender su mirada. Por ejemplo: «¿Qué es lo que más te preocupa a ti?».', durationSec: 45, kind: 'reflection' },
        { title: 'Un acuerdo', instruction: 'Piensa un acuerdo chico que podrían probar por un mes. Anótalo para proponerlo.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho. Dite: «Hablar de esto es cuidarnos». Elige el día para la charla.', durationSec: 30, kind: 'breath' },
      ],
    },

    // ------------------------------------------------------------ diversidad
    {
      id: 'cuidarte-frente-a-la-discriminacion',
      title: 'Cuidarte después de una situación de discriminación',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Una práctica para después de un comentario, un trato o una agresión por tu orientación sexual o tu identidad de género: calmar, nombrar y buscar apoyo.',
      mechanism: 'Nombrar la discriminación como algo injusto y externo, tratarse con amabilidad y conectar con la red baja el estrés de minorías que se acumula.',
      evidenceLevel: 'preliminar',
      evidence: [MEYER_2003, HENDRICKS_2012, NEFF_2003, APA_2015_TRANS],
      cautions:
        'Si estás en peligro o sufriste una agresión física, primero busca un lugar seguro y llama al 911. Si piensas en hacerte daño, llama a la Línea Nacional de Salud Mental. Si el malestar dura semanas, busca un profesional con enfoque afirmativo.',
      howItWorks: [
        'Ilan Meyer describió el estrés de minorías. Las personas lesbianas, gays, bisexuales, trans y de otras identidades viven un estrés extra. Viene del rechazo, de la discriminación, del miedo a ser descubiertas y del prejuicio que se aprende de chico (Meyer, 2003).',
        'Ese estrés explica por qué hay más ansiedad y depresión en estos grupos. No es por ser quien eres: es por lo que el entorno hace con eso. Hendricks y Testa (2012) mostraron lo mismo en personas trans y no binarias.',
        'Lo que más protege es la red de apoyo, el orgullo y la conexión con la comunidad. Tratarte con amabilidad después de una mala experiencia ayuda a que el golpe no se vuelva una herida contra ti.',
      ],
      tips: [
        'Hazla lo antes posible después de lo que pasó, cuando ya estés en un lugar seguro.',
        'Ten a mano el nombre de dos personas que te aceptan tal como eres.',
        'No tienes que responder a cada agresión. Cuidarte también es retirarte.',
        'Si fue en el trabajo, en un servicio de salud o en un trámite, puedes hacer un reclamo o una denuncia ante quien corresponda.',
      ],
      obstacles: [
        { q: 'Pienso que exageré o que me lo busqué.', a: 'Es un efecto del prejuicio que se aprende. Lo que pasó no es tu culpa. Tu reacción tiene sentido.' },
        { q: 'No tengo con quién hablarlo.', a: 'Busca grupos u organizaciones de la diversidad en tu ciudad o en línea. Un profesional afirmativo también puede ser parte de tu red.' },
      ],
      steps: [
        { title: 'A salvo', instruction: 'Primero, asegúrate de estar en un lugar seguro. Siente los pies en el piso y respira despacio.', durationSec: 40, kind: 'breath' },
        { title: 'Nombrar', instruction: 'Ponle nombre a lo que pasó: «Esto fue discriminación». No es un problema tuyo. Es un trato injusto.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que sientes', instruction: 'Nota qué sientes. Puede ser enojo, miedo, vergüenza o tristeza. Todo tiene sentido.', durationSec: 50, kind: 'reflection' },
        { title: 'Amabilidad', instruction: 'Pon una mano en el pecho. Dite lo que le dirías a alguien querido: «Lo que te pasó no está bien. Vales tal como eres».', durationSec: 60, kind: 'breath' },
        { title: 'Tu red', instruction: 'Piensa en una persona, grupo o lugar donde te sientes aceptado o aceptada. ¿Puedes escribirle hoy?', durationSec: 50, kind: 'reflection' },
        { title: 'Algo que te cuide', instruction: 'Elige algo que te haga bien en las próximas horas. Comer rico, caminar, música o descansar.', durationSec: 40, kind: 'instruction' },
      ],
    },

    // ------------------------------------------------------------ migración
    {
      id: 'mapa-de-dos-orillas',
      title: 'Mapa de dos orillas',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Para quien migró: reconocer lo que extrañas, cuidar los vínculos de allá y armar red acá, sin tener que elegir una sola parte de ti.',
      mechanism: 'Nombrar las pérdidas del duelo migratorio y mantener las dos pertenencias favorece la integración, el camino de aculturación con mejor bienestar.',
      evidenceLevel: 'preliminar',
      evidence: [ACHOTEGUI_2009, BERRY_1997, NGUYEN_2013, BOSS_1999],
      howItWorks: [
        'Joseba Achotegui describe el duelo migratorio. Al migrar se pierden muchas cosas a la vez: la familia cerca, los amigos, la lengua, el paisaje, el estatus, la comida. Es un duelo múltiple y que vuelve, porque lo perdido sigue existiendo allá (Achotegui, 2009).',
        'John Berry estudió cómo se adapta la gente a una cultura nueva. La integración, que mantiene la cultura de origen y se abre a la nueva, se asocia con más bienestar que la asimilación o la separación (Berry, 1997).',
        'Las personas que sienten sus dos culturas como compatibles suelen adaptarse mejor (Nguyen y Benet-Martínez, 2013). No tienes que dejar de ser de allá para ser de acá.',
      ],
      tips: [
        'Acuerda horarios fijos para llamar a tu gente de allá. La previsibilidad cuida el vínculo.',
        'Busca un grupo de acá ligado a algo que te gusta: un deporte, un coro, un taller.',
        'Cocinar algo de tu tierra y compartirlo une las dos orillas.',
        'Si la tristeza no te deja funcionar, consulta a un profesional. Pedir ayuda no es fracasar en la migración.',
      ],
      obstacles: [
        { q: 'Me siento de ningún lado.', a: 'Es muy común en la migración. Muchas personas, con el tiempo, sienten que son de los dos lados. Dale tiempo.' },
        { q: 'Me da culpa estar bien acá.', a: 'Estar bien no traiciona a los tuyos. Puedes extrañar y disfrutar a la vez.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en el lugar de donde vienes. Deja que aparezca una imagen.', durationSec: 40, kind: 'breath' },
        { title: 'Lo que extrañas', instruction: 'Anota tres cosas que extrañas de allá. Personas, lugares, olores, costumbres o palabras.', durationSec: 75, kind: 'reflection' },
        { title: 'Reconocer', instruction: 'Pon una mano en el pecho. Dite: «Extrañar es parte de haber querido. Tiene sentido».', durationSec: 40, kind: 'breath' },
        { title: 'La orilla de allá', instruction: 'Elige un vínculo de allá que quieres cuidar. ¿Cómo y cuándo vas a estar en contacto esta semana?', durationSec: 60, kind: 'reflection' },
        { title: 'La orilla de acá', instruction: 'Piensa en una persona, grupo o lugar de acá donde podrías sumar un vínculo. Anota un paso chico.', durationSec: 60, kind: 'reflection' },
        { title: 'Lo que llevas', instruction: '¿Qué traes de tu cultura que quieres mantener? ¿Qué te gusta de la nueva? Anota una cosa de cada una.', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira. Dite: «Puedo ser de los dos lados». Guarda tu mapa para volver a él.', durationSec: 30, kind: 'breath' },
      ],
    },

    // ------------------------------------------------------------ violencia (sólo estabilización)
    {
      id: 'refugio-interno',
      title: 'Refugio interno: calmar el cuerpo y recordar tus recursos',
      family: 'attentional',
      skills: ['attention', 'compassion'],
      summary: 'Una práctica breve de estabilización para momentos de mucha tensión si vives una situación de violencia. No es para resolverla: es para cuidarte.',
      mechanism: 'Anclar la atención en el cuerpo y el entorno baja la activación. Recordar a quién llamar y que no es tu culpa devuelve un poco de control.',
      evidenceLevel: 'preliminar',
      evidence: [OMS_2013_VIOLENCIA, CAMPBELL_2002, LINEA_144],
      cautions: VIOLENCIA_CAUTION,
      howItWorks: [
        'Vivir violencia mantiene al cuerpo en alerta. Eso afecta el sueño, la concentración y la salud (Campbell, 2002). Las técnicas de anclaje no cambian la situación, pero ayudan a bajar la alarma un rato.',
        'La OMS recomienda que el primer apoyo sea escuchar sin juzgar, validar, cuidar la seguridad y conectar con ayuda (OMS, 2013). Esta práctica sigue esa idea: calmar, recordar que no es tu culpa y saber a quién llamar.',
        'No incluye ningún paso de confrontar a nadie. Salir de una situación de violencia es un proceso que conviene hacer con ayuda especializada, como la Línea 144.',
      ],
      tips: [
        'Hazla sólo en un lugar donde estés a salvo en ese momento.',
        'Si alguien revisa tu celular, usa esta práctica sin anotar nada.',
        'Memoriza dos números: 911 para emergencias y 144 para orientación.',
        'Piensa en una persona de confianza a quien podrías avisar si necesitas salir rápido.',
      ],
      obstacles: [
        { q: 'No puedo calmarme.', a: 'Está bien. Vuelve a los pies y a nombrar cosas que ves. Si sigues en peligro, llama al 911.' },
        { q: 'Siento que es mi culpa.', a: 'No lo es. Nadie merece ser maltratado. Quien ejerce la violencia es responsable de ella.' },
      ],
      steps: [
        { title: 'A salvo', instruction: 'Primero, fíjate si ahora estás a salvo. Si no lo estás, deja esto y llama al 911.', durationSec: 20, kind: 'instruction' },
        { title: 'Los pies', instruction: 'Siente las plantas de los pies en el piso. Empuja suave hacia abajo. Nota el apoyo.', durationSec: 40, kind: 'breath' },
        { title: 'Lo que ves', instruction: 'Nombra en voz baja cinco cosas que ves a tu alrededor. Tómate tu tiempo.', durationSec: 40, kind: 'instruction' },
        { title: 'Respirar', instruction: 'Exhala largo, como soplando una vela despacio. Hazlo cuatro veces.', durationSec: 40, kind: 'breath' },
        { title: 'No es tu culpa', instruction: 'Dite en silencio: «Esto no es mi culpa. Merezco estar a salvo».', durationSec: 30, kind: 'breath' },
        { title: 'Tus recursos', instruction: 'Recuerda: Línea 144, gratis y las 24 horas. 911 si hay peligro. Piensa en una persona de confianza.', durationSec: 30, kind: 'instruction' },
      ],
    },
  ],

  // ================================================================== fichas
  meta: {
    'auditoria-de-pantallas': { level: 'iniciacion', approaches: ['tcc', 'mindfulness'], module: 'habitos' },
    'plan-celular-intencional': { level: 'iniciacion', approaches: ['tcc', 'act'], module: 'habitos', prerequisites: ['auditoria-de-pantallas'] },
    'pausa-antes-de-desbloquear': { level: 'iniciacion', approaches: ['mindfulness', 'tcc'], module: 'habitos' },
    'balance-del-alcohol': { level: 'intermedio', approaches: ['motivacional'], module: 'salud' },
    'mi-plan-de-menor-riesgo': { level: 'intermedio', approaches: ['motivacional', 'tcc'], module: 'salud', prerequisites: ['balance-del-alcohol'] },
    'plata-controlable': { level: 'iniciacion', approaches: ['tcc', 'act'], module: 'problemas', prerequisites: ['resolucion-problemas'] },
    'hablar-de-plata': { level: 'iniciacion', approaches: ['gottman', 'interpersonal'], module: 'relaciones' },
    'cuidarte-frente-a-la-discriminacion': { level: 'intermedio', approaches: ['cft', 'humanista'], module: 'afrontamiento', prerequisites: ['pausa-autocompasion'] },
    'mapa-de-dos-orillas': { level: 'iniciacion', approaches: ['act', 'humanista'], module: 'etapas' },
    'refugio-interno': { level: 'intermedio', approaches: ['dbt', 'mindfulness'], module: 'afrontamiento', risk: { level: 2, alternative: 'plantas-de-los-pies' } },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'celular-a-proposito',
      title: 'El celular: de lo automático a lo elegido',
      subtitle: 'Por qué cuesta tanto soltarlo y cómo usarlo a favor de lo que te importa, sin demonizar la tecnología.',
      category: 'Hábitos y cuerpo',
      readingMin: 6,
      keyPoints: [
        'Gran parte del uso del celular es un hábito que se dispara solo ante una señal.',
        'Las notificaciones y el desplazamiento infinito están diseñados para captar tu atención.',
        'Agrupar los avisos y cambiar el entorno funciona mejor que la fuerza de voluntad.',
        'La meta no es usarlo menos a cualquier costo, sino usarlo a propósito.',
      ],
      sections: [
        {
          heading: 'Uso intencional y uso automático',
          paragraphs: [
            'Hay dos formas de usar el celular. En el uso intencional, sabes para qué lo abres: llamar a alguien, buscar una dirección, leer algo que elegiste. En el uso automático, la mano lo agarra sola y, un rato después, no sabes bien qué hiciste.',
            'Los hábitos se activan ante señales del entorno, sin pasar por una decisión (Wood y Rünger, 2016). El aburrimiento, una espera o un momento incómodo son señales muy comunes. El celular promete alivio rápido, y por eso se repite.',
          ],
        },
        {
          heading: 'Notificaciones y desplazamiento infinito',
          paragraphs: [
            'Cada aviso interrumpe lo que estás haciendo. Kushlev y colaboradores (2016) vieron que con las notificaciones activas la gente se distraía más y se sentía más inquieta. Cuando los avisos se agrupan tres veces por día, mejoran la concentración y el bienestar (Fitz y colaboradores, 2019).',
            'El desplazamiento infinito no tiene un final natural. Siempre hay algo más abajo. Sin un punto de corte, la mente no encuentra cuándo parar. Por eso conviene ponerlo tú: un tiempo fijo, una alarma o una pregunta.',
          ],
        },
        {
          heading: 'Un plan con tus valores',
          paragraphs: [
            'Empieza por mirar. Una semana de registro muestra cuándo lo usas, qué te dispara y cómo quedas. Después, decide para qué quieres el celular, según lo que te importa.',
            'Arma el entorno a tu favor. Saca de la primera pantalla lo que más te atrapa. Apaga los avisos de redes y compras. Elige zonas sin celular, como la cena o la cama. Prepara frases del tipo «si pasa esto, hago aquello» (Gollwitzer y Sheeran, 2006).',
          ],
        },
        {
          heading: 'Surfear la urgencia',
          paragraphs: [
            'Las ganas de mirar suben, llegan a un pico y bajan, como una ola. Si las observas sin seguirlas, pasan. Esta técnica se probó con el cigarrillo (Bowen y Marlatt, 2009) y se adapta bien a otros hábitos.',
            'No hace falta ganar siempre. Cada pausa antes de desbloquear es una práctica. Con el tiempo, el gesto se vuelve menos automático.',
          ],
        },
      ],
      caveat: {
        title: 'Sin pánico a las pantallas',
        body: 'La investigación muestra que la relación promedio entre pantallas y malestar es pequeña (Orben y Przybylski, 2019). La palabra «adicción» al celular se usa mucho, pero no es un diagnóstico reconocido. Si el uso te quita sueño, trabajo o vínculos y no logras cambiarlo, consulta a un profesional.',
      },
      diagram: {
        title: 'El ciclo del uso automático',
        nodes: ['Señal (aburrimiento, aviso, espera)', 'Urgencia de mirar', 'Desbloquear y desplazarse', 'Alivio breve', 'Más ganas la próxima vez'],
        caption: 'La pausa antes de desbloquear corta el ciclo entre la urgencia y el gesto.',
      },
      related: { practices: ['auditoria-de-pantallas', 'plan-celular-intencional', 'pausa-antes-de-desbloquear', 'surfear-impulso', 'brujula-valores'], articles: ['sentido-y-valores'] },
      references: [WOOD_2016, KUSHLEV_2016, FITZ_2019, GOLLWITZER_2006, BOWEN_2009, DUKE_2017, ORBEN_2019_ADULTOS],
    },
    {
      id: 'alcohol-reducir-danos',
      title: 'Alcohol: reducir daños sin sermones',
      subtitle: 'Qué dicen las guías de menor riesgo, cómo pensar el cambio desde tus razones y cuándo hace falta pedir ayuda.',
      category: 'Salud y trabajo',
      readingMin: 7,
      keyPoints: [
        'Ningún nivel de alcohol es libre de riesgo, pero tomar menos siempre baja el riesgo.',
        'La reducción de daños acepta metas distintas: tomar menos, menos seguido o dejar.',
        'Querer y no querer cambiar a la vez es normal. Tus propias razones pesan más que los sermones.',
        'Si hay dependencia física, no se deja de golpe: hay que consultar antes a un médico.',
        'En Argentina, la Línea 141 de SEDRONAR orienta gratis, de forma anónima y las 24 horas.',
      ],
      sections: [
        {
          heading: 'Qué es un trago y cuánto es menos riesgo',
          paragraphs: [
            'Un trago estándar tiene unos diez gramos de alcohol puro (Babor y colaboradores, 2001). Equivale más o menos a una lata chica de cerveza, una copa chica de vino o una medida de bebida blanca. Los tragos servidos en casa o en un bar suelen ser más grandes.',
            'La OMS aclaró que no hay un nivel de consumo libre de riesgo para la salud, sobre todo por el cáncer (Anderson y colaboradores, 2023). Las guías de Canadá ubican el riesgo bajo en hasta dos tragos estándar por semana. Recomiendan no pasar de dos tragos en un mismo día (Paradis y colaboradores, 2023).',
            'Algunas situaciones piden no tomar nada: el embarazo o la búsqueda de embarazo, manejar, usar máquinas, tomar medicación que interactúa y tener menos de dieciocho años.',
          ],
        },
        {
          heading: 'Reducción de daños',
          paragraphs: [
            'La reducción de daños parte de donde está cada persona. No exige dejar por completo para empezar. Busca bajar los daños con pasos posibles: menos tragos, días sin alcohol, comer antes, alternar con agua, no manejar (Marlatt y Witkiewitz, 2002).',
            'Para muchas personas, la abstinencia es la mejor meta. Para otras, tomar menos es un primer paso realista. Lo importante es que la meta sea tuya y que la revises con honestidad.',
          ],
        },
        {
          heading: 'Cambiar desde tus razones',
          paragraphs: [
            'La entrevista motivacional muestra que la ambivalencia es parte del cambio. Puedes saber que el alcohol te hace mal y, a la vez, valorar lo que te da (Miller y Rollnick, 2013).',
            'Un balance honesto mira lo bueno y lo malo de seguir igual y de cambiar. Las intervenciones breves con esta lógica reducen el consumo en quienes toman de más (Kaner y colaboradores, 2018).',
          ],
        },
        {
          heading: 'Señales de alarma y cuándo consultar',
          paragraphs: [
            'Conviene consultar si no logras tomar menos aunque quieras, si tomas para dormir o para calmar la ansiedad, si necesitas más para sentir el mismo efecto o si el alcohol trae problemas en tu casa, tu trabajo o tu salud.',
            'Si tomas todos los días y al dejar aparecen temblores, sudor, náuseas, ansiedad fuerte o insomnio, puede haber dependencia física. En ese caso no dejes de golpe. La abstinencia puede ser peligrosa y conviene hacerla con un médico.',
            'En Argentina, la Línea 141 de SEDRONAR es gratuita, anónima y atiende las 24 horas. Ante una urgencia, como una intoxicación o convulsiones, llama al 911.',
          ],
        },
      ],
      caveat: {
        title: 'Primero, tu seguridad',
        body: 'Si tienes dependencia física del alcohol, dejarlo de golpe puede causar convulsiones u otros cuadros graves. Consulta antes a un médico. Si estás embarazada o tomas medicación, habla con tu equipo de salud. Este artículo informa; no reemplaza una evaluación profesional.',
      },
      related: { practices: ['balance-del-alcohol', 'mi-plan-de-menor-riesgo', 'surfear-impulso', 'balance-del-cambio', 'regla-importancia-confianza'], articles: ['entrevista-motivacional'] },
      references: [OMS_2023_ALCOHOL, CCSA_2023, BABOR_2001, MARLATT_2002, MILLER_2013, KANER_2018, SEDRONAR],
    },
    {
      id: 'estres-economico',
      title: 'Estrés económico: cuando la plata no alcanza',
      subtitle: 'Cómo pensar con más claridad, hablar de dinero sin pelear y tratarte con menos dureza cuando las cuentas aprietan.',
      category: 'Salud y trabajo',
      readingMin: 7,
      keyPoints: [
        'La preocupación por la plata ocupa la mente y deja menos espacio para pensar. No es falta de capacidad.',
        'Separar lo que depende de ti de lo que no baja la sensación de caos.',
        'La preocupación productiva lleva a un paso; la improductiva sólo da vueltas.',
        'La vergüenza por la plata aísla. La autocompasión ayuda a pedir ayuda y a actuar.',
      ],
      sections: [
        {
          heading: 'La plata en la cabeza',
          paragraphs: [
            'Las deudas y la falta de dinero se asocian con más ansiedad, depresión y problemas de salud (Richardson y colaboradores, 2013). En un país con crisis repetidas, el estrés económico es parte de la vida de mucha gente.',
            'Mani y colaboradores (2013) mostraron que pensar en problemas de plata baja el rendimiento mental en el momento. La preocupación ocupa lugar. Por eso, a veces cuesta decidir bien justo cuando más se necesita.',
          ],
        },
        {
          heading: 'Lo controlable y lo que no',
          paragraphs: [
            'Ayuda separar las preocupaciones en tres grupos. Lo que depende de ti, como ordenar gastos o pedir un plan de pagos. Lo que puedes influir, como negociar un aumento. Y lo que no depende de ti, como la inflación.',
            'Con lo primero, conviene usar la resolución de problemas. Define el problema chico y concreto, busca opciones, elige una y decide cuándo hacerla (Nezu y colaboradores, 2013). Con lo último, un horario fijo de preocupación evita que ocupe todo el día (Borkovec y colaboradores, 1983).',
          ],
        },
        {
          heading: 'Hablar de dinero en casa',
          paragraphs: [
            'Las peleas por plata desgastan mucho a las parejas (Dew y colaboradores, 2012). Detrás del número suelen estar otras cosas: miedo, sensación de injusticia o necesidad de control.',
            'Elige un buen momento, habla en primera persona y busca un acuerdo chico. Si el dinero se usa para controlar, amenazar o dejar sin recursos a alguien, no es un problema de comunicación: puede ser violencia económica.',
          ],
        },
        {
          heading: 'Vergüenza y autocompasión',
          paragraphs: [
            'Muchas personas sienten vergüenza por no llegar a fin de mes. La vergüenza lleva a esconder, a no abrir las cuentas, a no pedir ayuda. Eso suele empeorar el problema.',
            'La autocompasión es tratarte como tratarías a alguien querido en la misma situación (Neff, 2003). No es conformarte. Es bajar la dureza para poder mirar los números y dar el próximo paso.',
          ],
        },
      ],
      caveat: {
        title: 'Cuándo pedir más ayuda',
        body: 'Si las deudas te superan, busca asesoramiento gratuito en una defensoría del consumidor o en tu municipio. Si la angustia no te deja dormir, comer o trabajar, o si aparecen pensamientos de hacerte daño, consulta a un profesional o llama a la Línea Nacional de Salud Mental.',
      },
      related: { practices: ['plata-controlable', 'hablar-de-plata', 'resolucion-problemas', 'aplazar-preocupacion', 'pausa-autocompasion'], articles: ['preocupacion-y-ansiedad', 'autocompasion'] },
      references: [RICHARDSON_2013, MANI_2013, NEZU_2013, BORKOVEC_1983, DEW_2012, NEFF_2003],
    },
    {
      id: 'diversidad-y-estres-de-minorias',
      title: 'Diversidad sexual y de género: cuidarte en un mundo que no siempre acepta',
      subtitle: 'El estrés de minorías, salir del clóset a tu ritmo y la red que protege, desde un enfoque afirmativo.',
      category: 'Relaciones',
      readingMin: 7,
      keyPoints: [
        'Ser lesbiana, gay, bisexual, trans o no binario no es un trastorno ni algo que se deba corregir.',
        'El estrés de minorías explica el malestar extra: viene del rechazo del entorno, no de la identidad.',
        'Salir del clóset es una decisión tuya, a tu ritmo y cuidando tu seguridad.',
        'Las llamadas «terapias de conversión» son ineficaces y dañinas, y están rechazadas por la ciencia.',
        'La red de apoyo y la conexión con la comunidad son los mejores protectores.',
      ],
      sections: [
        {
          heading: 'El estrés de minorías',
          paragraphs: [
            'Ilan Meyer (2003) propuso el modelo de estrés de minorías. Las personas de la diversidad sexual viven un estrés extra que se suma al de cualquier persona. Tiene partes externas, como la discriminación y la violencia. Y partes internas, como el miedo al rechazo, ocultar quién eres o el prejuicio aprendido contra uno mismo.',
            'Hendricks y Testa (2012) adaptaron el modelo a personas trans y no binarias. El mensaje es el mismo: el mayor riesgo de ansiedad o depresión no viene de la identidad, sino del trato que se recibe.',
          ],
        },
        {
          heading: 'Lo que dicen la ciencia y la ley',
          paragraphs: [
            'Las principales asociaciones de salud mental consideran que la diversidad sexual y de género es parte de la variación humana. La Asociación Americana de Psicología rechaza los intentos de cambiar la orientación sexual por ineficaces y dañinos (APA, 2021).',
            'En Argentina, la Ley de Salud Mental 26.657 prohíbe hacer un diagnóstico sobre la base de la elección o la identidad sexual. La Ley de Identidad de Género 26.743 reconoce el derecho de cada persona a ser tratada según su identidad. Cualquier propuesta de «curar» o «cambiar» quién eres va contra la evidencia y contra estos derechos.',
          ],
        },
        {
          heading: 'Salir del clóset a tu ritmo',
          paragraphs: [
            'No hay una forma correcta ni un plazo. Puedes contarlo a algunas personas y no a otras. Empieza por quien creas que va a responder con cariño.',
            'Piensa en tu seguridad, sobre todo si dependes de alguien para vivir o trabajar. Ten un plan si la respuesta es mala: un lugar adonde ir, alguien a quien llamar. La aceptación familiar protege mucho la salud (Ryan y colaboradores, 2010), pero si no llega, se puede construir otra familia elegida.',
          ],
        },
        {
          heading: 'Autocuidado y red',
          paragraphs: [
            'Después de una situación de discriminación, ayuda nombrarla como lo que es: un trato injusto. Tratarte con amabilidad, buscar a tu gente y hacer algo que te cuide evita que el golpe se vuelva contra ti.',
            'Los grupos, las organizaciones de la diversidad y los profesionales con enfoque afirmativo son parte de la red. Un buen profesional no intenta cambiar tu identidad: te acompaña a vivirla con más bienestar.',
          ],
        },
      ],
      caveat: {
        title: 'Un profesional afirmativo',
        body: 'Si buscas terapia, pregunta si el profesional trabaja con enfoque afirmativo de la diversidad. Si alguien te propone cambiar tu orientación o tu identidad, no es una práctica válida y puedes denunciarla. Si piensas en hacerte daño, llama a la Línea Nacional de Salud Mental o al 911.',
      },
      related: { practices: ['cuidarte-frente-a-la-discriminacion', 'pausa-autocompasion', 'brujula-valores'], articles: ['autocompasion', 'vinculos-y-soledad'] },
      references: [MEYER_2003, HENDRICKS_2012, APA_2015_TRANS, APA_2021_SOCE, LEY_26657, LEY_26743, RYAN_2010],
    },
    {
      id: 'migracion-y-desarraigo',
      title: 'Migrar: el duelo, los vínculos y una identidad de dos orillas',
      subtitle: 'Lo que se pierde al migrar, cómo se adapta la gente a una cultura nueva y cómo armar red sin dejar de ser de allá.',
      category: 'Etapas de la vida',
      readingMin: 7,
      keyPoints: [
        'Migrar implica un duelo múltiple: familia, amigos, lengua, paisaje, estatus y costumbres.',
        'Es un duelo que vuelve, porque lo perdido sigue existiendo en otro lugar.',
        'Integrar las dos culturas se asocia con más bienestar que renunciar a una.',
        'Cuidar los vínculos de allá y armar red acá son tareas que van juntas.',
      ],
      sections: [
        {
          heading: 'El duelo migratorio',
          paragraphs: [
            'Joseba Achotegui describe siete duelos de la migración: la familia y los amigos, la lengua, la cultura, la tierra, el estatus social, el grupo de pertenencia y los riesgos físicos. Cuando el estrés es muy alto y no hay apoyo, puede aparecer lo que llamó síndrome de Ulises (Achotegui, 2009).',
            'Este duelo es parcial y recurrente. Lo que se dejó sigue allá. Cada llamada, cada fiesta lejana o cada noticia puede reabrirlo. Pauline Boss llama pérdida ambigua a esta mezcla de presencia y ausencia (Boss, 1999).',
          ],
        },
        {
          heading: 'Cómo se adapta la gente',
          paragraphs: [
            'John Berry (1997) describe cuatro caminos de aculturación. La integración mantiene la cultura de origen y se abre a la nueva. La asimilación deja la de origen. La separación se cierra a la nueva. La marginación pierde contacto con ambas.',
            'La integración suele traer más bienestar. Las personas que sienten sus dos culturas como compatibles se adaptan mejor (Nguyen y Benet-Martínez, 2013). Pero también depende del lugar que te recibe: la discriminación y las trabas hacen todo más difícil.',
          ],
        },
        {
          heading: 'Vínculos a distancia',
          paragraphs: [
            'Las videollamadas ayudan mucho, sobre todo si tienen horarios previsibles. Compartir cosas chicas del día acerca más que sólo las grandes noticias.',
            'Es normal que los vínculos cambien. Algunos se fortalecen y otros se enfrían. No es un fracaso: es parte del proceso.',
          ],
        },
        {
          heading: 'Armar red y una identidad propia',
          paragraphs: [
            'La red nueva suele empezar por actividades compartidas: un deporte, un taller, la escuela de los chicos, un grupo de la colectividad. Lleva tiempo. Los primeros años suelen ser los más solitarios.',
            'Con el tiempo, muchas personas sienten que son de los dos lados. Pueden hablar dos formas de un idioma, cocinar dos cocinas y extrañar sin dejar de disfrutar. Esa identidad bicultural es una fortaleza.',
          ],
        },
      ],
      caveat: {
        title: 'Cuándo consultar',
        body: 'Si la tristeza, el insomnio o la ansiedad duran semanas y te impiden funcionar, consulta a un profesional. Los hospitales públicos y los centros de salud de Argentina atienden a personas migrantes, tengan o no documentos. Si estás en riesgo, llama al 911.',
      },
      related: { practices: ['mapa-de-dos-orillas', 'pausa-autocompasion', 'activacion-conductual'], articles: ['duelo', 'vinculos-y-soledad'] },
      references: [ACHOTEGUI_2009, BERRY_1997, NGUYEN_2013, BOSS_1999],
    },
    {
      id: 'violencia-de-genero-informacion',
      title: 'Violencia de género: reconocerla y pedir ayuda',
      subtitle: 'Los tipos de violencia que reconoce la ley argentina, señales de alerta, un plan de seguridad básico y adónde llamar.',
      category: 'Relaciones',
      readingMin: 6,
      keyPoints: [
        'La violencia de género no es sólo física: también es psicológica, sexual, económica, simbólica y política.',
        'Nunca es culpa de quien la sufre.',
        'La Línea 144 es gratuita, confidencial y atiende las 24 horas en todo el país.',
        'Si hay peligro inmediato, llama al 911.',
        'No confrontes a quien ejerce la violencia: busca ayuda especializada.',
      ],
      sections: [
        {
          heading: 'Qué es y qué tipos hay',
          paragraphs: [
            'La Ley 26.485 de Argentina define la violencia contra las mujeres y reconoce varios tipos. Física: golpes, empujones, cualquier daño al cuerpo. Psicológica: insultos, humillación, control, celos, aislamiento o amenazas. Sexual: cualquier acto sexual sin consentimiento, también en la pareja.',
            'Económica y patrimonial: controlar tu plata, quitarte recursos o romper tus cosas. Simbólica: mensajes y estereotipos que te ponen en un lugar inferior. Política: impedir tu participación. La violencia por motivos de género también afecta a personas LGBTI+, y la Línea 144 las atiende.',
          ],
        },
        {
          heading: 'Señales de alerta',
          paragraphs: [
            'Algunas señales: te revisa el celular, te dice qué ponerte o con quién verte, te aleja de tu familia y amistades, controla la plata, te humilla, te amenaza o te da miedo su reacción.',
            'La violencia suele crecer con el tiempo y alternar con momentos de calma o de arrepentimiento. Eso confunde. Si sientes miedo de la otra persona, es una señal importante.',
          ],
        },
        {
          heading: 'No es tu culpa',
          paragraphs: [
            'Quien ejerce la violencia es responsable de ella. Nada de lo que hagas o digas la justifica. Es común sentir culpa, vergüenza o confusión, y también querer a quien te lastima. Eso no te hace responsable.',
            'La violencia afecta la salud del cuerpo y de la mente: dolores, problemas de sueño, ansiedad, tristeza (Campbell, 2002). Pedir ayuda no es exagerar.',
          ],
        },
        {
          heading: 'Un plan de seguridad básico',
          paragraphs: [
            'Memoriza el 911 y el 144. Piensa en una o dos personas de confianza que puedan ayudarte, y acuerda con ellas una palabra clave para pedir ayuda.',
            'Si puedes, ten a mano documentos, llaves, algo de plata y medicación. Piensa en un lugar seguro adonde ir. Si alguien revisa tu celular, borra el historial y cuida lo que guardas.',
            'No enfrentes a quien te agrede ni le anuncies que te vas a ir. Ese momento puede ser de más riesgo. La Línea 144 puede ayudarte a armar un plan a tu medida.',
          ],
        },
      ],
      caveat: {
        title: 'Ayuda especializada',
        body: 'Este artículo informa y orienta, no reemplaza la ayuda especializada. Llama a la Línea 144, gratuita, confidencial y las 24 horas, o al 911 si hay peligro. Si conoces a alguien que vive violencia, escúchala sin juzgar y comparte estos números.',
      },
      related: { practices: ['refugio-interno', 'plantas-de-los-pies'], articles: ['kit-de-crisis'] },
      references: [LEY_26485, OMS_2013_VIOLENCIA, CAMPBELL_2002, LINEA_144],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'usar-el-celular-a-proposito',
      title: 'Usar el celular a propósito',
      subtitle: 'Tres semanas para pasar del uso automático al uso elegido',
      description:
        'Un recorrido para que el celular trabaje para ti y no al revés. Primero miras cómo lo usas. Después armas un plan con tus valores y practicas la pausa antes de desbloquear.',
      basis: 'Wood y Rünger (2016), Annual Review of Psychology; Fitz y colaboradores (2019); Bowen y Marlatt (2009).',
      rhythm: '5 a 10 minutos al día, 5 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Mirar',
          focus: 'Cuándo, para qué y cómo te deja',
          description: 'Registrarás tu uso durante una semana sin cambiar nada. La meta es encontrar tus disparadores.',
          practiceIds: ['auditoria-de-pantallas'],
          articleIds: ['celular-a-proposito'],
          journalType: 'experimento',
        },
        {
          title: 'Semana 2 · Elegir',
          focus: 'Un plan con lo que te importa',
          description: 'Revisarás tus valores y armarás un plan: notificaciones, primera pantalla, zonas sin celular y frases «si pasa esto, hago aquello».',
          practiceIds: ['brujula-valores', 'plan-celular-intencional'],
          articleIds: [],
          journalType: 'valores',
        },
        {
          title: 'Semana 3 · Surfear',
          focus: 'La pausa antes de desbloquear',
          description: 'Practicarás notar la urgencia de mirar y dejarla pasar. Al final de la semana, revisarás y ajustarás tu plan.',
          practiceIds: ['pausa-antes-de-desbloquear', 'surfear-impulso'],
          articleIds: [],
          journalType: 'intencion',
        },
      ],
    },
    {
      id: 'plata-y-calma',
      title: 'Plata y calma',
      subtitle: 'Tres semanas para ordenar la preocupación económica y hablar de dinero sin pelear',
      description:
        'Para cuando la plata no alcanza y la preocupación ocupa todo. Separarás lo que depende de ti de lo que no, darás pasos concretos, hablarás de dinero en casa y practicarás tratarte con menos dureza. No reemplaza un asesoramiento financiero ni una consulta si la angustia es grave.',
      basis: 'Nezu y colaboradores (2013); Mani y colaboradores (2013), Science; Neff (2003).',
      rhythm: '10 minutos al día, 4 o 5 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · Ordenar',
          focus: 'Lo que depende de ti y lo que no',
          description: 'Sacarás las preocupaciones de la cabeza, las separarás en tres columnas y elegirás un primer paso.',
          practiceIds: ['plata-controlable', 'resolucion-problemas'],
          articleIds: ['estres-economico'],
          journalType: 'resolucion-problemas',
        },
        {
          title: 'Semana 2 · Darle horario',
          focus: 'Preocupación productiva e improductiva',
          description: 'Darás un horario fijo a la preocupación que no lleva a nada y practicarás volver al presente el resto del día.',
          practiceIds: ['aplazar-preocupacion', 'respiracion-resonante'],
          articleIds: ['preocupacion-y-ansiedad'],
          journalType: 'preocupacion',
        },
        {
          title: 'Semana 3 · Hablar y cuidarte',
          focus: 'Dinero en casa y menos vergüenza',
          description: 'Prepararás una charla sobre plata con tu pareja o tu familia y practicarás la autocompasión frente a la vergüenza.',
          practiceIds: ['hablar-de-plata', 'pausa-autocompasion'],
          articleIds: ['autocompasion'],
          journalType: 'conversacion',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-celular-automatico',
      title: '¿Lo abres o se abre solo?',
      subtitle: 'El celular en piloto automático y cómo recuperar el control.',
      slides: [
        { heading: 'La mano va sola', text: 'Estás en una fila y, sin pensarlo, ya tienes el celular en la mano. No lo decidiste. Fue un hábito.' },
        { heading: 'Las señales', text: 'El aburrimiento, una espera o un aviso disparan el gesto. La mente busca un alivio rápido. Por eso se repite.' },
        { heading: 'Sin final', text: 'Las redes no tienen un final. Siempre hay algo más abajo. Si no pones tú el límite, nadie lo pone.' },
        { heading: 'Cambia el entorno', text: 'Apaga los avisos de redes. Saca de la primera pantalla lo que más te atrapa. Es más fácil que usar la fuerza de voluntad.' },
        { heading: 'Surfea la ola', text: 'Las ganas de mirar suben y bajan como una ola. Respira tres veces y pregúntate: «¿Para qué lo abro?».' },
      ],
      related: { practices: ['pausa-antes-de-desbloquear', 'plan-celular-intencional'], articles: ['celular-a-proposito'] },
      references: [WOOD_2016, FITZ_2019, BOWEN_2009],
    },
    {
      id: 'pildora-alcohol-sin-sermones',
      title: 'Alcohol: menos es mejor',
      subtitle: 'Reducir daños, a tu ritmo y con tus razones.',
      slides: [
        { heading: 'Sin sermones', text: 'Puedes saber que el alcohol te hace mal y aun así querer tomar. Es normal. Se llama ambivalencia.' },
        { heading: 'Ningún nivel es cero riesgo', text: 'La OMS dice que no hay una cantidad sin riesgo. Pero cada trago menos baja el riesgo. Todo cambio cuenta.' },
        { heading: 'Pasos posibles', text: 'Toma menos tragos. Suma días sin alcohol. Come antes y toma agua. Nunca manejes si tomaste.' },
        { heading: 'Con cuidado', text: 'Si tomas todos los días y al dejar te tiemblan las manos o no duermes, no dejes de golpe. Consulta antes a un médico.' },
        { heading: 'Ayuda en Argentina', text: 'La Línea 141 de SEDRONAR es gratis, anónima y atiende las 24 horas. Ante una urgencia, llama al 911.' },
      ],
      related: { practices: ['balance-del-alcohol', 'mi-plan-de-menor-riesgo'], articles: ['alcohol-reducir-danos'] },
      references: [OMS_2023_ALCOHOL, MARLATT_2002, MILLER_2013, SEDRONAR],
    },
    {
      id: 'pildora-plata-y-verguenza',
      title: 'Cuando la plata no alcanza',
      subtitle: 'Pensar más claro y tratarte con menos dureza.',
      slides: [
        { heading: 'La mente llena', text: 'Pensar en deudas ocupa mucho lugar en la cabeza. Por eso cuesta decidir. No es que no sirvas. Es que estás con mucha carga.' },
        { heading: 'Tres columnas', text: 'Separa lo que depende de ti, lo que puedes influir y lo que no. Así el caos se ordena un poco.' },
        { heading: 'Un paso chico', text: 'Elige un problema de la primera columna. Piensa tres opciones. Haz una esta semana.' },
        { heading: 'Un horario', text: 'Lo que no depende de ti puede esperar. Dale un rato fijo al día para pensarlo. Fuera de ese rato, vuelve a lo que estás haciendo.' },
        { heading: 'Sin vergüenza', text: 'La vergüenza te hace esconder las cuentas. Háblate como a alguien que quieres. Así es más fácil mirar y pedir ayuda.' },
      ],
      related: { practices: ['plata-controlable', 'hablar-de-plata'], articles: ['estres-economico'] },
      references: [MANI_2013, NEZU_2013, NEFF_2003],
    },
    {
      id: 'pildora-estres-de-minorias',
      title: 'No es quién eres: es cómo te tratan',
      subtitle: 'El estrés de minorías y lo que protege.',
      slides: [
        { heading: 'Un estrés extra', text: 'Las personas de la diversidad viven un estrés extra. Viene del rechazo, de las burlas y del miedo a mostrarse. Ilan Meyer lo llamó estrés de minorías.' },
        { heading: 'No es tu identidad', text: 'Tu orientación o tu identidad no son un problema. El malestar viene del trato que recibes. Eso no es tu culpa.' },
        { heading: 'La ley te cuida', text: 'En Argentina, la ley prohíbe diagnosticar a alguien por su orientación o su identidad. Las «terapias de conversión» hacen daño y no sirven.' },
        { heading: 'A tu ritmo', text: 'Salir del clóset es tu decisión. Puedes contarlo a quien quieras y cuando quieras. Cuida tu seguridad.' },
        { heading: 'Tu red', text: 'Lo que más protege es la gente que te acepta. Amigos, grupos, familia elegida. Búscala y cuídala.' },
      ],
      related: { practices: ['cuidarte-frente-a-la-discriminacion'], articles: ['diversidad-y-estres-de-minorias'] },
      references: [MEYER_2003, LEY_26657, APA_2021_SOCE],
    },
    {
      id: 'pildora-duelo-migratorio',
      title: 'Extrañar lo que sigue allá',
      subtitle: 'El duelo de migrar y cómo vivir entre dos orillas.',
      slides: [
        { heading: 'Muchas pérdidas', text: 'Al migrar dejas a tu gente, tu lengua, tus calles y tus comidas. Es mucho a la vez. Por eso duele.' },
        { heading: 'Un duelo que vuelve', text: 'Lo que dejaste sigue allá. Una llamada o una fiesta lejana pueden traer la tristeza de nuevo. Es normal.' },
        { heading: 'Las dos orillas', text: 'No tienes que elegir. Quien mantiene su cultura y se abre a la nueva suele estar mejor. Así lo vio John Berry.' },
        { heading: 'Cuidar lo de allá', text: 'Pon horarios fijos para llamar a tu gente. Cuenta cosas chicas del día. Eso acerca.' },
        { heading: 'Armar red acá', text: 'Súmate a algo que te guste: un deporte, un taller, un coro. Los vínculos nuevos llevan tiempo. Dale tiempo.' },
      ],
      related: { practices: ['mapa-de-dos-orillas'], articles: ['migracion-y-desarraigo'] },
      references: [ACHOTEGUI_2009, BERRY_1997],
    },
    {
      id: 'pildora-violencia-no-es-tu-culpa',
      title: 'La violencia nunca es tu culpa',
      subtitle: 'Reconocerla y saber adónde llamar.',
      slides: [
        { heading: 'No es sólo golpes', text: 'También es violencia insultar, humillar, controlar tu celular o tu plata, aislarte o forzarte. La ley argentina lo reconoce.' },
        { heading: 'Una señal clave', text: 'Si sientes miedo de la reacción de tu pareja o expareja, presta atención. Es una señal importante.' },
        { heading: 'No es tu culpa', text: 'Nada de lo que hagas justifica la violencia. Quien la ejerce es responsable. Sentir culpa o confusión es común.' },
        { heading: 'Cuidarte', text: 'No enfrentes a quien te agrede. Piensa en una persona de confianza y en un lugar seguro adonde ir.' },
        { heading: 'Adónde llamar', text: 'Línea 144: gratis, confidencial y las 24 horas en todo el país. Si hay peligro ahora, llama al 911.' },
      ],
      related: { practices: ['refugio-interno'], articles: ['violencia-de-genero-informacion'] },
      references: [LEY_26485, LINEA_144],
    },
  ],

  // ================================================================== glosario
  glossary: [
    {
      id: 'uso-intencional',
      term: 'Uso intencional (del celular)',
      definition: 'Usar el celular sabiendo para qué lo abres, en lugar de agarrarlo por hábito. Es lo contrario del uso automático, que se dispara solo ante una señal.',
      articleId: 'celular-a-proposito',
      practiceId: 'plan-celular-intencional',
    },
    {
      id: 'desplazamiento-infinito',
      term: 'Desplazamiento infinito',
      definition: 'Diseño de las redes y aplicaciones que carga contenido sin fin a medida que bajas. Al no tener un final natural, hace difícil parar.',
      articleId: 'celular-a-proposito',
      practiceId: 'pausa-antes-de-desbloquear',
    },
    {
      id: 'reduccion-de-danos',
      term: 'Reducción de daños',
      definition: 'Enfoque de salud que busca bajar los daños del consumo con pasos posibles, como tomar menos o no manejar, sin exigir dejar por completo para empezar.',
      articleId: 'alcohol-reducir-danos',
      practiceId: 'mi-plan-de-menor-riesgo',
    },
    {
      id: 'trago-estandar',
      term: 'Trago estándar',
      definition: 'Medida que usan las guías para contar el alcohol: unos diez gramos de alcohol puro. Es más o menos una lata chica de cerveza o una copa chica de vino.',
      articleId: 'alcohol-reducir-danos',
      practiceId: 'mi-plan-de-menor-riesgo',
    },
    {
      id: 'estres-de-minorias',
      term: 'Estrés de minorías',
      definition: 'Estrés extra que viven las personas de grupos discriminados, como la diversidad sexual y de género. Viene del rechazo, del prejuicio y de tener que ocultarse, no de la identidad.',
      articleId: 'diversidad-y-estres-de-minorias',
      practiceId: 'cuidarte-frente-a-la-discriminacion',
    },
    {
      id: 'duelo-migratorio',
      term: 'Duelo migratorio',
      definition: 'Proceso de pérdida que vive quien migra: familia, lengua, cultura, tierra y estatus. Es múltiple y vuelve, porque lo perdido sigue existiendo en otro lugar.',
      articleId: 'migracion-y-desarraigo',
      practiceId: 'mapa-de-dos-orillas',
    },
    {
      id: 'aculturacion',
      term: 'Aculturación',
      definition: 'Cambios que vive una persona al entrar en contacto con una cultura nueva. Según Berry, integrar la cultura de origen y la nueva suele traer más bienestar.',
      articleId: 'migracion-y-desarraigo',
      practiceId: 'mapa-de-dos-orillas',
    },
    {
      id: 'violencia-economica',
      term: 'Violencia económica',
      definition: 'Forma de violencia que reconoce la Ley 26.485: controlar el dinero de otra persona, quitarle recursos o romper sus cosas para dañarla o dominarla.',
      articleId: 'violencia-de-genero-informacion',
      practiceId: 'refugio-interno',
    },
  ],
};
