import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Pantallas y redes en adultos». Completa lo que ya hay en la app
 * (auditoria-de-pantallas, plan-celular-intencional y pausa-antes-de-desbloquear en vida-cotidiana;
 * mi-dieta-de-noticias en ecoansiedad; mi-feed-y-mi-cuerpo en imagen-corporal;
 * limites-en-el-celular en necesidades-limites-diagnostico) con temas nuevos:
 *  - el anzuelo del feed: refuerzo intermitente (Ferster y Skinner);
 *  - la comparación social en redes, más allá del cuerpo (Festinger; Vogel; Verduyn);
 *  - el celular en la cama y el sueño (Exelmans y Van den Bulck; Chang);
 *  - el «phubbing» en la pareja y la familia (Roberts y David; Przybylski y Weinstein; Dwyer);
 *  - tolerar el aburrimiento sin pantalla (Eastwood; Wilson);
 *  - un ayuno digital breve y realista (Allcott; Hunt; Radtke).
 *
 * Postura del paquete: la evidencia sobre redes y bienestar en adultos es mixta y los efectos
 * promedio son pequeños (Orben y Przybylski, 2019; Valkenburg y colaboradores, 2022). No se
 * habla de «adicción» como diagnóstico (Panova y Carbonell, 2018). No se demoniza la tecnología:
 * la meta es notar el efecto propio y elegir. Si el uso quita sueño, trabajo o vínculos y no
 * se logra cambiar, se sugiere consultar.
 */

// ------------------------------------------------------------ referencias
const ORBEN_2019: Reference = {
  citation: 'Orben, A., & Przybylski, A. K. (2019). The association between adolescent well-being and digital technology use. Nature Human Behaviour, 3(2), 173–182.',
  doi: '10.1038/s41562-018-0506-1',
  note: 'Datos de adolescentes. La asociación promedio entre uso de tecnología y bienestar fue muy pequeña.',
};
const VALKENBURG_2022: Reference = {
  citation: 'Valkenburg, P. M., van Driel, I. I., & Beyens, I. (2022). The associations of active and passive social media use with well-being: A critical scoping review. New Media & Society, 24(2), 530–549.',
  note: 'Revisión crítica: la idea de que el uso pasivo siempre hace mal y el activo siempre hace bien no se sostiene de forma general; los efectos varían de persona a persona.',
};
const PANOVA_2018: Reference = {
  citation: 'Panova, T., & Carbonell, X. (2018). Is smartphone addiction really an addiction? Journal of Behavioral Addictions, 7(2), 252–259.',
  doi: '10.1556/2006.7.2018.49',
};
const FERSTER_1957: Reference = { citation: 'Ferster, C. B., & Skinner, B. F. (1957). Schedules of reinforcement. Appleton-Century-Crofts.' };
const FESTINGER_1954: Reference = {
  citation: 'Festinger, L. (1954). A theory of social comparison processes. Human Relations, 7(2), 117–140.',
  doi: '10.1177/001872675400700202',
};
const VOGEL_2014: Reference = {
  citation: 'Vogel, E. A., Rose, J. P., Roberts, L. R., & Eckles, K. (2014). Social comparison, social media, and self-esteem. Psychology of Popular Media Culture, 3(4), 206–222.',
  doi: '10.1037/ppm0000047',
};
const VERDUYN_2015: Reference = {
  citation:
    'Verduyn, P., Lee, D. S., Park, J., Shablack, H., Orvell, A., Bayer, J., Ybarra, O., Jonides, J., & Kross, E. (2015). Passive Facebook usage undermines affective well-being: Experimental and longitudinal evidence. Journal of Experimental Psychology: General, 144(2), 480–488.',
  doi: '10.1037/xge0000057',
};
const EXELMANS_2016: Reference = {
  citation: 'Exelmans, L., & Van den Bulck, J. (2016). Bedtime mobile phone use and sleep in adults. Social Science & Medicine, 148, 93–101.',
  doi: '10.1016/j.socscimed.2015.11.037',
};
const CHANG_2015: Reference = {
  citation:
    'Chang, A.-M., Aeschbach, D., Duffy, J. F., & Czeisler, C. A. (2015). Evening use of light-emitting eReaders negatively affects sleep, circadian timing, and next-morning alertness. Proceedings of the National Academy of Sciences, 112(4), 1232–1237.',
  doi: '10.1073/pnas.1418490112',
};
const ROBERTS_2016: Reference = {
  citation: 'Roberts, J. A., & David, M. E. (2016). My life has become a major distraction from my cell phone: Partner phubbing and relationship satisfaction among romantic partners. Computers in Human Behavior, 54, 134–141.',
  doi: '10.1016/j.chb.2015.07.058',
};
const PRZYBYLSKI_2013: Reference = {
  citation:
    'Przybylski, A. K., & Weinstein, N. (2013). Can you connect with me now? How the presence of mobile communication technology influences face-to-face conversation quality. Journal of Social and Personal Relationships, 30(3), 237–246.',
  doi: '10.1177/0265407512453827',
};
const DWYER_2018: Reference = {
  citation: 'Dwyer, R. J., Kushlev, K., & Dunn, E. W. (2018). Smartphone use undermines enjoyment of face-to-face social interactions. Journal of Experimental Social Psychology, 78, 233–239.',
  doi: '10.1016/j.jesp.2017.10.007',
};
const EASTWOOD_2012: Reference = {
  citation: 'Eastwood, J. D., Frischen, A., Fenske, M. J., & Smilek, D. (2012). The unengaged mind: Defining boredom in terms of attention. Perspectives on Psychological Science, 7(5), 482–495.',
  doi: '10.1177/1745691612456044',
};
const WILSON_2014: Reference = {
  citation: 'Wilson, T. D., Reinhard, D. A., Westgate, E. C., Gilbert, D. T., Ellerbeck, N., Hahn, C., Brown, C. L., & Shaked, A. (2014). Just think: The challenges of the disengaged mind. Science, 345(6192), 75–77.',
  doi: '10.1126/science.1250830',
};
const ALLCOTT_2020: Reference = {
  citation: 'Allcott, H., Braghieri, L., Eichmeyer, S., & Gentzkow, M. (2020). The welfare effects of social media. American Economic Review, 110(3), 629–676.',
  doi: '10.1257/aer.20190658',
  note: 'Adultos que desactivaron Facebook cuatro semanas: mejoras pequeñas del bienestar y más tiempo para otras actividades.',
};
const HUNT_2018: Reference = {
  citation: 'Hunt, M. G., Marx, R., Lipson, C., & Young, J. (2018). No more FOMO: Limiting social media decreases loneliness and depression. Journal of Social and Clinical Psychology, 37(10), 751–768.',
  doi: '10.1521/jscp.2018.37.10.751',
  note: 'Estudiantes universitarios; muestra chica.',
};
const RADTKE_2022: Reference = {
  citation: 'Radtke, T., Apel, T., Schenkel, K., Keller, J., & von Lindern, E. (2022). Digital detox: An effective solution in the smartphone era? A systematic literature review. Mobile Media & Communication, 10(2), 190–215.',
  doi: '10.1177/20501579211028647',
  note: 'Resultados mixtos: algunos estudios encuentran beneficios y otros no.',
};

/** Aviso común: cuándo consultar, sin hablar de «adicción» como diagnóstico. */
const CONSULTAR =
  'Si el uso del celular o de las redes te quita sueño, trabajo o vínculos y no logras cambiarlo, consulta a un profesional de salud mental. Si en las redes apuestas plata, puedes llamar gratis a la Línea 141 de SEDRONAR.';

export const PANTALLAS_ADULTOS_PACK: ContentPack = {
  id: 'pantallas-adultos',

  // ================================================================== prácticas
  practices: [
    {
      id: 'el-anzuelo-del-feed',
      title: 'Ver el anzuelo del feed',
      family: 'attentional',
      skills: ['attention'],
      summary: 'Un par de minutos mirando tu red favorita con atención, para notar el «a ver si ahora» que te hace seguir bajando.',
      mechanism: 'Las recompensas que llegan a veces, sin aviso, mantienen una conducta más que las que llegan siempre. Ver ese mecanismo en acción le quita parte de su fuerza.',
      evidenceLevel: 'preliminar',
      evidence: [FERSTER_1957, ORBEN_2019],
      micro: true,
      howItWorks: [
        'Charles Ferster y B. F. Skinner estudiaron los programas de refuerzo. Cuando un premio llega a veces, y no se sabe cuándo, la conducta se repite mucho y cuesta más dejarla (Ferster y Skinner, 1957). Se llama refuerzo intermitente.',
        'El feed funciona parecido. La mayoría de las publicaciones no te importan. Pero cada tanto aparece algo gracioso, un mensaje o un «me gusta». Como no sabes cuándo, sigues bajando. La aplicación de esta idea a las redes es razonable, pero tiene poca investigación directa.',
        'No es falta de voluntad. Es un diseño que funciona con cualquier cerebro. Verlo te da un poco más de margen para elegir cuándo parar.',
      ],
      tips: [
        'Hazlo con la red que más te atrapa, no con la que menos usas.',
        'Cuenta en voz baja: «nada, nada, nada, algo». Ver la proporción ayuda.',
        'Elige antes el punto de corte: una hora, un número de publicaciones o una alarma.',
      ],
      obstacles: [
        { q: 'Me engancho y me olvido de mirar.', a: 'Es justo lo que hace el anzuelo. Pon una alarma de dos minutos antes de abrir la aplicación.' },
        { q: 'A mí las redes me hacen bien.', a: 'Puede ser. La idea no es dejarlas, sino ver cómo funciona el enganche, para usarlas cuando eliges.' },
      ],
      steps: [
        { title: 'Preparar', instruction: 'Pon una alarma de dos minutos. Abre la red que más te atrapa.', durationSec: 20, kind: 'instruction' },
        { title: 'Contar', instruction: 'Baja despacio. Por cada publicación, nota si te importa o no. Dite «nada» o «algo».', durationSec: 60, kind: 'instruction' },
        { title: 'El «a ver si ahora»', instruction: 'Fíjate en las ganas de bajar una más. ¿Dónde las sientes? Es el anzuelo funcionando.', durationSec: 30, kind: 'reflection' },
        { title: 'Cortar', instruction: 'Cuando suene la alarma, cierra la aplicación. Respira una vez y nota cómo quedas.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'lo-que-no-sale-en-la-foto',
      title: 'Lo que no sale en la foto',
      family: 'constructive',
      skills: ['attention', 'compassion'],
      summary: 'Notar cuando te comparas en redes con la vida, el trabajo o los logros de otros, y poner la comparación en contexto.',
      mechanism: 'Las redes muestran la vidriera de los demás y uno la compara con su propio detrás de escena. Nombrar la comparación y completar lo que falta baja el golpe en el ánimo.',
      evidenceLevel: 'preliminar',
      evidence: [FESTINGER_1954, VOGEL_2014, VERDUYN_2015, VALKENBURG_2022],
      howItWorks: [
        'Leon Festinger propuso que las personas se evalúan comparándose con otras (Festinger, 1954). Es algo humano y a veces útil. En las redes, la comparación es constante y casi siempre hacia arriba: viajes, logros, familias felices.',
        'En un estudio, quienes miraban perfiles más «exitosos» terminaban con la autoestima más baja (Vogel y colaboradores, 2014). Otro trabajo vio que mirar Facebook sin participar empeoraba el ánimo, en parte por la envidia (Verduyn y colaboradores, 2015).',
        'Una revisión más reciente pide cautela: no a todas las personas les pasa lo mismo (Valkenburg y colaboradores, 2022). Por eso la práctica no te dice qué sentir. Te ayuda a ver qué te pasa a ti.',
      ],
      tips: [
        'Una frase útil: «Estoy comparando mi detrás de escena con su vidriera».',
        'La envidia también informa. A veces señala algo que quieres para tu vida.',
        'Si una cuenta te deja mal casi siempre, puedes silenciarla sin dejar de seguirla.',
      ],
      obstacles: [
        { q: 'Es que a esa persona le va mejor de verdad.', a: 'Puede ser. Aun así, ves una parte elegida. Pregúntate qué te dice esa comparación sobre lo que te importa a ti.' },
        { q: 'Me siento mal por sentir envidia.', a: 'La envidia es una emoción común. No te hace mala persona. Nótala con amabilidad y mira qué te señala.' },
      ],
      cautions: CONSULTAR,
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio dos veces. Piensa en una publicación reciente que te dejó mal.', durationSec: 30, kind: 'breath' },
        { title: 'Nombrar', instruction: 'Dite: «Estoy comparando». ¿Con qué te comparaste? ¿Trabajo, pareja, plata, viajes, aspecto?', durationSec: 45, kind: 'reflection' },
        { title: 'La vidriera', instruction: 'Piensa qué eligió mostrar esa persona. ¿Qué cosas de su día seguramente no salieron en la foto?', durationSec: 60, kind: 'reflection' },
        { title: 'Tu detrás de escena', instruction: 'Ahora mira lo tuyo. ¿Estabas comparando su mejor momento con tu día común? Anótalo.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que señala', instruction: 'Pregúntate: ¿esta comparación me dice algo que quiero para mí? Si es así, escribe un paso chico.', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Pon una mano en el pecho. Dite: «Mi vida no es una vidriera. Es mía».', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'el-celular-duerme-afuera',
      title: 'El celular duerme afuera',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Armar un plan simple para que el celular pase la noche fuera de la cama: dónde carga, qué lo reemplaza y cuál es el último vistazo.',
      mechanism: 'Usar el celular en la cama se asocia a dormir peor. Sacarlo del alcance quita la tentación de mirar y devuelve a la cama su función de lugar para dormir.',
      evidenceLevel: 'moderada',
      evidence: [EXELMANS_2016, CHANG_2015],
      howItWorks: [
        'En un estudio con adultos, quienes usaban el celular ya acostados dormían peor y se sentían más cansados (Exelmans y Van den Bulck, 2016). Es un estudio de asociación: no prueba que el celular sea la única causa.',
        'La luz de las pantallas por la noche puede retrasar el reloj interno. En un experimento, leer en una tableta antes de dormir retrasó el sueño y dejó a las personas menos despiertas a la mañana siguiente (Chang y colaboradores, 2015).',
        'Pero quizá pesa más lo que haces que la luz. Un mensaje de trabajo o un video más te mantienen alerta. Por eso ayuda que el celular no esté al alcance de la mano.',
      ],
      tips: [
        'Si lo usas como despertador, un reloj despertador barato resuelve el problema.',
        'Deja a mano algo para el rato antes de dormir: un libro en papel o música baja.',
        'Si necesitas estar disponible por una emergencia familiar, deja sólo las llamadas de esas personas.',
      ],
      obstacles: [
        { q: 'Sin el celular no me duermo.', a: 'Los primeros días puede costar. Prueba la rutina de bajada para dormir. Si el insomnio sigue semanas, consulta.' },
        { q: 'Vivo en un ambiente chico.', a: 'No hace falta otra habitación. Basta con que quede lejos de la cama, donde tengas que levantarte para agarrarlo.' },
      ],
      steps: [
        { title: 'Mirar la noche', instruction: 'Piensa en tus últimas noches. ¿Qué haces con el celular en la cama? ¿Cuánto tiempo, más o menos?', durationSec: 45, kind: 'reflection' },
        { title: 'El lugar', instruction: 'Elige dónde cargará el celular de noche. Lejos de la cama, donde tengas que levantarte para agarrarlo.', durationSec: 45, kind: 'reflection' },
        { title: 'Lo que reemplaza', instruction: '¿Para qué lo usas de noche? Despertador, música, linterna. Elige otra forma para cada uso.', durationSec: 60, kind: 'reflection' },
        { title: 'El último vistazo', instruction: 'Elige una hora para el último vistazo. Después, el celular va a su lugar y no vuelve.', durationSec: 45, kind: 'reflection' },
        { title: 'La mañana', instruction: 'Decide también la mañana. ¿Puedes esperar a desayunar para mirarlo?', durationSec: 45, kind: 'reflection' },
        { title: 'Probar', instruction: 'Pruébalo siete noches. Anota cada mañana cómo dormiste, con una palabra.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'mesa-sin-celulares',
      title: 'Estar con quien está: menos «phubbing»',
      family: 'constructive',
      skills: ['attention', 'compassion'],
      summary: 'Notar cuándo el celular se mete en tus charlas con tu pareja o tu familia y acordar momentos sin pantallas, sin reproches.',
      mechanism: 'Mirar el celular mientras alguien te habla le dice que es menos importante. Acordar momentos sin celular protege la atención mutua, que sostiene el vínculo.',
      evidenceLevel: 'preliminar',
      evidence: [ROBERTS_2016, PRZYBYLSKI_2013, DWYER_2018],
      howItWorks: [
        '«Phubbing» viene de «phone» y «snubbing»: desairar a alguien por mirar el celular. En parejas, sentirse ignorado por el celular del otro se asoció a más conflictos y menos satisfacción (Roberts y David, 2016).',
        'En un experimento, el solo hecho de tener un celular sobre la mesa hizo que una charla se sintiera menos cercana (Przybylski y Weinstein, 2013). Otro estudio vio que usar el celular durante una cena con amigos hacía disfrutar menos del encuentro (Dwyer y colaboradores, 2018).',
        'Son estudios con muestras chicas y algunos resultados no se repitieron igual. Igual, la idea es sencilla de probar: guardar el celular cuando estás con alguien y ver qué cambia.',
      ],
      tips: [
        'Empieza por un solo momento: la cena, el desayuno o la charla al llegar a casa.',
        'Habla en primera persona: «Me gusta cuando charlamos sin celular».',
        'Si esperas algo urgente, avísalo antes: «Tengo el celular a mano porque espero una llamada».',
        'Empieza por ti. Dar el ejemplo convence más que pedir.',
      ],
      obstacles: [
        { q: 'El que vive con el celular es el otro.', a: 'Puede ser. Empieza por tu parte y pide sin acusar. «Cuando miras el celular mientras hablo, me siento sola» suena mejor que «siempre estás con eso».' },
        { q: 'Mis hijos adolescentes no lo sueltan.', a: 'Acuerden juntos un momento chico y que valga también para los adultos. Si sólo vale para ellos, cuesta más.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en los momentos que compartes con tu pareja o tu familia.', durationSec: 30, kind: 'breath' },
        { title: 'Del otro lado', instruction: 'Recuerda una vez que alguien miró el celular mientras le hablabas. ¿Cómo te sentiste?', durationSec: 45, kind: 'reflection' },
        { title: 'De tu lado', instruction: 'Ahora al revés. ¿Cuándo miras tú el celular mientras otro te habla? Anota dos momentos.', durationSec: 45, kind: 'reflection' },
        { title: 'Un momento', instruction: 'Elige un momento del día para estar sin celulares. Por ejemplo, la cena o los primeros minutos al llegar.', durationSec: 45, kind: 'reflection' },
        { title: 'La propuesta', instruction: 'Escribe cómo lo vas a proponer, sin reproche. Por ejemplo: «¿Probamos cenar sin celulares esta semana?».', durationSec: 60, kind: 'reflection' },
        { title: 'Dónde van', instruction: 'Elige un lugar para dejar los celulares en ese momento. Una canasta o un estante, lejos de la mesa.', durationSec: 30, kind: 'instruction' },
      ],
    },
    {
      id: 'aburrirme-sin-pantalla',
      title: 'Cinco minutos de aburrimiento',
      family: 'attentional',
      skills: ['attention', 'resilience'],
      summary: 'Quedarte cinco minutos sin pantalla y sin hacer nada, notando las ganas de agarrar el celular y lo que hace la mente cuando no tiene estímulos.',
      mechanism: 'El celular quita el aburrimiento en segundos, y así uno nunca aprende a tolerarlo. Quedarse con él un rato, con curiosidad, muestra que se puede atravesar.',
      evidenceLevel: 'preliminar',
      evidence: [EASTWOOD_2012, WILSON_2014],
      howItWorks: [
        'John Eastwood y su equipo describen el aburrimiento como una señal de atención: queremos estar ocupados en algo que nos importe y no lo logramos (Eastwood y colaboradores, 2012). Es incómodo, pero no es peligroso.',
        'En una serie de experimentos, a muchas personas les costó mucho quedarse a solas con sus pensamientos entre seis y quince minutos (Wilson y colaboradores, 2014). No estamos acostumbrados.',
        'El celular resuelve el aburrimiento al instante. Por eso es la señal que más dispara el gesto de agarrarlo. Practicar quedarse un rato sin pantalla da margen para elegir. Que el aburrimiento ayude a la creatividad es una idea con poca evidencia firme.',
      ],
      tips: [
        'Empieza en un lugar tranquilo. Más adelante, prueba en una fila o en el colectivo.',
        'Si la mente se va a pensamientos, déjala. No es una meditación con reglas.',
        'Pon el celular en otro ambiente y usa un reloj, o una alarma con la pantalla boca abajo.',
      ],
      obstacles: [
        { q: 'Me da mucha ansiedad.', a: 'Empieza con dos minutos. Si aparecen pensamientos que angustian mucho, frena y haz una práctica de anclaje, como plantas de los pies.' },
        { q: 'Es una pérdida de tiempo.', a: 'Son cinco minutos para entrenar algo que te sirve todo el día: no correr al celular ante cada incomodidad.' },
      ],
      steps: [
        { title: 'Preparar', instruction: 'Deja el celular en otro ambiente. Pon una alarma de cinco minutos con un reloj o con el celular boca abajo.', durationSec: 20, kind: 'instruction' },
        { title: 'Sentarte', instruction: 'Siéntate sin hacer nada. No leas ni ordenes. Sólo quédate ahí.', durationSec: 60, kind: 'instruction' },
        { title: 'Las ganas', instruction: 'Nota si aparecen ganas de agarrar el celular o de hacer algo. Dite: «Aparecieron las ganas». Y sigue quieto.', durationSec: 60, kind: 'reflection' },
        { title: 'Cómo se siente', instruction: '¿Cómo es el aburrimiento en el cuerpo? Inquietud, pesadez, picazón. Míralo con curiosidad.', durationSec: 60, kind: 'breath' },
        { title: 'La mente suelta', instruction: 'Deja que la mente vaya a donde quiera. Fíjate a dónde va cuando no tiene nada que mirar.', durationSec: 60, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Cuando suene la alarma, respira una vez. Anota en una frase cómo fue y si las ganas bajaron.', durationSec: 40, kind: 'reflection' },
      ],
    },
    {
      id: 'ayuno-digital-breve',
      title: 'Un ayuno de redes breve y realista',
      family: 'constructive',
      skills: ['attention', 'resilience'],
      summary: 'Planear unas horas o un día sin redes sociales, sin dejar de usar lo que necesitas, y ver con datos propios cómo te deja.',
      mechanism: 'Tomar distancia de las redes por un tiempo corto y planeado permite comparar cómo te sientes con y sin ellas. Es un experimento personal, no una cura.',
      evidenceLevel: 'preliminar',
      evidence: [ALLCOTT_2020, HUNT_2018, RADTKE_2022],
      howItWorks: [
        'En un experimento grande con adultos, desactivar Facebook cuatro semanas mejoró un poco el bienestar y dejó más tiempo para otras cosas (Allcott y colaboradores, 2020). Con estudiantes, limitar las redes a media hora por día durante tres semanas bajó la soledad (Hunt y colaboradores, 2018).',
        'Una revisión de estudios de «desintoxicación digital» encontró resultados mixtos. Algunos ven beneficios, otros no ven cambios (Radtke y colaboradores, 2022). Por eso conviene probar y mirar qué te pasa a ti.',
        'Un ayuno breve es más realista que uno largo. No apagas el celular entero. Sólo dejas las redes un rato, con un plan para ese tiempo libre.',
      ],
      tips: [
        'Empieza con unas horas, por ejemplo un domingo a la tarde.',
        'Mantén llamadas, mapas, mensajes de la familia y lo que necesites para trabajar.',
        'Cierra la sesión de la red en el celular. Ese pequeño esfuerzo extra ayuda.',
        'Planea qué harás en ese tiempo. Un hueco vacío se llena rápido con el celular.',
      ],
      obstacles: [
        { q: 'Volví a entrar sin darme cuenta.', a: 'Es esperable. El gesto es automático. Ciérrala y sigue. No arruina el experimento.' },
        { q: 'Me sentí peor, con miedo a perderme algo.', a: 'Es un dato útil. Anota qué extrañaste. Quizá alguna red te suma de verdad y puedes usarla en horarios.' },
      ],
      cautions: CONSULTAR,
      steps: [
        { title: 'Elegir el tiempo', instruction: 'Elige cuándo será tu ayuno: unas horas o un día. Que sea un momento realista para ti.', durationSec: 45, kind: 'reflection' },
        { title: 'Qué sí y qué no', instruction: 'Anota qué redes dejas y qué usos mantienes. Por ejemplo, llamadas, mapas y mensajes de la familia.', durationSec: 60, kind: 'reflection' },
        { title: 'Antes de empezar', instruction: 'Del cero al diez, ¿cómo está tu ánimo hoy? ¿Y tu calma? Anota los dos números.', durationSec: 30, kind: 'reflection' },
        { title: 'Llenar el tiempo', instruction: 'Elige dos cosas para hacer en ese rato. Una salida, una charla, cocinar, leer o un hobby.', durationSec: 45, kind: 'reflection' },
        { title: 'Avisar', instruction: 'Si alguien espera tus respuestas, avísale. Una frase basta: «Hoy a la tarde no miro redes».', durationSec: 30, kind: 'instruction' },
        { title: 'Después', instruction: 'Al terminar, vuelve a anotar ánimo y calma. ¿Qué extrañaste? ¿Qué no extrañaste? Decide qué quieres repetir.', durationSec: 60, kind: 'reflection' },
      ],
    },
  ],

  meta: {
    'el-anzuelo-del-feed': { level: 'iniciacion', approaches: ['mindfulness', 'tcc'], module: 'habitos' },
    'lo-que-no-sale-en-la-foto': { level: 'intermedio', approaches: ['tcc', 'cft'], module: 'pensamientos', prerequisites: ['el-anzuelo-del-feed'] },
    'el-celular-duerme-afuera': { level: 'iniciacion', approaches: ['tcc'], module: 'sueno' },
    'mesa-sin-celulares': { level: 'iniciacion', approaches: ['gottman', 'sistemica'], module: 'relaciones' },
    'aburrirme-sin-pantalla': { level: 'intermedio', approaches: ['mindfulness'], module: 'habitos', prerequisites: ['el-anzuelo-del-feed'] },
    'ayuno-digital-breve': { level: 'intermedio', approaches: ['tcc'], module: 'habitos', prerequisites: ['auditoria-de-pantallas'] },
  },

  // ================================================================== artículos
  articles: [
    {
      id: 'redes-y-bienestar-adultos',
      title: 'Redes sociales y bienestar: lo que se sabe y lo que no',
      subtitle: 'El anzuelo del feed, la comparación, el sueño y los vínculos, con una mirada honesta sobre una evidencia todavía mixta.',
      category: 'Hábitos y cuerpo',
      readingMin: 8,
      keyPoints: [
        'En promedio, la relación entre redes y bienestar es pequeña. Importa más cómo, cuándo y para qué las usas.',
        'Las recompensas que llegan a veces, sin aviso, hacen que cueste dejar de bajar.',
        'La comparación hacia arriba puede bajar el ánimo, aunque no a todas las personas les pasa igual.',
        'El celular en la cama y en la mesa puede quitar sueño y cercanía.',
        'Llamarlo «adicción» no ayuda: no es un diagnóstico reconocido. Si te quita mucho, consulta.',
      ],
      sections: [
        {
          heading: 'Una evidencia mixta',
          paragraphs: [
            'Se escucha mucho que las redes arruinan la salud mental. La investigación es más matizada. Un análisis grande con datos de adolescentes encontró una relación promedio muy pequeña entre el uso de tecnología y el bienestar (Orben y Przybylski, 2019).',
            'En adultos, los experimentos de dejar las redes por unas semanas muestran mejoras pequeñas del ánimo (Allcott y colaboradores, 2020). Una revisión de estudios de «desintoxicación digital» encontró resultados mixtos (Radtke y colaboradores, 2022). El promedio esconde diferencias: a algunas personas ciertos usos les hacen mal y a otras no (Valkenburg y colaboradores, 2022).',
            'Por eso, en lugar de una regla para todos, conviene mirar tu propio caso. ¿Qué usos te suman? ¿Cuáles te dejan peor?',
          ],
        },
        {
          heading: 'El anzuelo del feed',
          paragraphs: [
            'Cuando un premio llega a veces y no sabes cuándo, la conducta se repite mucho. Se llama refuerzo intermitente y se estudia desde hace décadas (Ferster y Skinner, 1957).',
            'El feed se parece a eso. Muchas publicaciones no te importan, pero cada tanto aparece algo que sí. Esa sorpresa hace que bajes una más. No es falta de voluntad: el diseño funciona con cualquier cerebro. Ponerte un punto de corte antes de abrir la aplicación ayuda.',
          ],
        },
        {
          heading: 'La vidriera de los demás',
          paragraphs: [
            'Las personas se evalúan comparándose (Festinger, 1954). En las redes casi siempre vemos lo mejor de los demás. Mirar perfiles más «exitosos» se asoció a peor autoestima (Vogel y colaboradores, 2014). Mirar sin participar también puede bajar el ánimo, en parte por la envidia (Verduyn y colaboradores, 2015).',
            'Ayuda nombrar la comparación y recordar que comparas tu detrás de escena con su vidriera. La envidia, además, puede señalar algo que quieres para ti.',
          ],
        },
        {
          heading: 'La cama y la mesa',
          paragraphs: [
            'Usar el celular ya acostado se asoció a dormir peor en adultos (Exelmans y Van den Bulck, 2016). La luz de la pantalla puede retrasar el sueño (Chang y colaboradores, 2015), pero el contenido que te activa quizá pesa más. Que el celular duerma lejos de la cama es un cambio simple.',
            'El «phubbing» es desairar a alguien por mirar el celular. En parejas, se asoció a más conflictos y menos satisfacción (Roberts y David, 2016). Hasta un celular sobre la mesa puede hacer que una charla se sienta menos cercana (Przybylski y Weinstein, 2013). Acordar momentos sin pantallas protege la atención mutua.',
          ],
        },
        {
          heading: 'Aburrirse un poco',
          paragraphs: [
            'El aburrimiento es la señal que más dispara el gesto de agarrar el celular. Es incómodo: queremos estar ocupados en algo que importe y no lo logramos (Eastwood y colaboradores, 2012). A muchas personas les cuesta quedarse unos minutos a solas con sus pensamientos (Wilson y colaboradores, 2014).',
            'Practicar unos minutos de aburrimiento sin pantalla, y probar un ayuno breve de redes, son formas de recuperar margen. No son una cura. Son experimentos para conocerte.',
          ],
        },
        {
          heading: 'Cuándo consultar',
          paragraphs: [
            'La palabra «adicción» al celular se usa mucho, pero no es un diagnóstico reconocido y los especialistas discuten si corresponde (Panova y Carbonell, 2018). Ponerle esa etiqueta puede dar más culpa que ayuda.',
            'Lo importante es el efecto en tu vida. Si el uso te quita sueño, trabajo o vínculos y no logras cambiarlo, consulta a un profesional. A veces el celular tapa otra cosa, como ansiedad, tristeza o soledad. Si en las redes apuestas plata, puedes llamar gratis a la Línea 141 de SEDRONAR.',
          ],
        },
      ],
      caveat: {
        title: 'Sin pánico y sin ingenuidad',
        body: 'Los efectos promedio de las redes sobre el bienestar son pequeños y muchos estudios son de asociación, no de causa. Varios trabajos citados usan muestras chicas o de estudiantes, y algunos resultados no se repitieron igual. Este paquete no te pide dejar las redes: te invita a mirar cómo te dejan y a elegir.',
      },
      diagram: {
        title: 'El anzuelo del feed',
        nodes: ['Señal (aburrimiento, espera, aviso)', 'Abrir la red', 'Muchas publicaciones sin interés', 'Cada tanto, una sorpresa', 'Ganas de bajar una más'],
        caption: 'Un punto de corte elegido antes de abrir la aplicación rompe el ciclo.',
      },
      related: {
        practices: ['el-anzuelo-del-feed', 'lo-que-no-sale-en-la-foto', 'el-celular-duerme-afuera', 'mesa-sin-celulares', 'aburrirme-sin-pantalla', 'ayuno-digital-breve', 'auditoria-de-pantallas', 'plan-celular-intencional', 'mi-feed-y-mi-cuerpo', 'mi-dieta-de-noticias', 'limites-en-el-celular'],
        articles: ['celular-a-proposito', 'imagen-corporal'],
      },
      references: [ORBEN_2019, ALLCOTT_2020, RADTKE_2022, VALKENBURG_2022, FERSTER_1957, FESTINGER_1954, VOGEL_2014, VERDUYN_2015, EXELMANS_2016, CHANG_2015, ROBERTS_2016, PRZYBYLSKI_2013, EASTWOOD_2012, WILSON_2014, PANOVA_2018],
    },
  ],

  // ================================================================== programas
  programs: [
    {
      id: 'redes-con-menos-anzuelo',
      title: 'Redes con menos anzuelo',
      subtitle: 'Cuatro semanas para usar las redes y el celular a tu manera',
      description:
        'No se trata de dejar las redes. Verás cómo te enganchan, cómo te comparas, qué pasa con tu sueño y con tus vínculos, y probarás un ayuno breve. Si el uso te quita mucho y no logras cambiarlo, consulta a un profesional.',
      basis: 'Ferster y Skinner (1957); Verduyn y colaboradores (2015); Exelmans y Van den Bulck (2016); Roberts y David (2016); Allcott y colaboradores (2020).',
      rhythm: '5 a 10 minutos, 4 o 5 días por semana.',
      weeks: [
        {
          title: 'Semana 1 · El anzuelo',
          focus: 'Ver cómo te engancha el feed',
          description: 'Leerás qué se sabe sobre redes y bienestar, registrarás tu uso y practicarás ver el anzuelo del feed.',
          practiceIds: ['auditoria-de-pantallas', 'el-anzuelo-del-feed'],
          articleIds: ['redes-y-bienestar-adultos'],
          journalType: 'experimento',
        },
        {
          title: 'Semana 2 · La vidriera',
          focus: 'Comparación social en redes',
          description: 'Notarás cuándo te comparas y pondrás la comparación en contexto. Si te afecta con el cuerpo, ordenarás también lo que miras.',
          practiceIds: ['lo-que-no-sale-en-la-foto', 'mi-feed-y-mi-cuerpo'],
          articleIds: [],
          journalType: 'reestructuracion',
        },
        {
          title: 'Semana 3 · La cama y la mesa',
          focus: 'Sueño y vínculos',
          description: 'El celular pasará la noche lejos de la cama y acordarás un momento sin pantallas con tu gente.',
          practiceIds: ['el-celular-duerme-afuera', 'rutina-bajada-dormir', 'mesa-sin-celulares'],
          articleIds: [],
          journalType: 'diario-sueno',
        },
        {
          title: 'Semana 4 · Sin pantalla',
          focus: 'Aburrimiento y ayuno breve',
          description: 'Practicarás unos minutos de aburrimiento, harás un ayuno breve de redes y ajustarás tu plan de uso.',
          practiceIds: ['aburrirme-sin-pantalla', 'ayuno-digital-breve', 'plan-celular-intencional'],
          articleIds: [],
          journalType: 'intencion',
        },
      ],
    },
  ],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-el-anzuelo',
      title: 'A ver si ahora',
      subtitle: 'Por qué cuesta tanto dejar de bajar.',
      slides: [
        { heading: 'Nada, nada, algo', text: 'En el feed, casi todo te da igual. Pero cada tanto aparece algo que te gusta. Nunca sabes cuándo.' },
        { heading: 'Premio a veces', text: 'Cuando un premio llega a veces y sin aviso, la conducta se repite más. Se llama refuerzo intermitente.' },
        { heading: 'No es voluntad', text: 'El diseño funciona con cualquier cerebro. No es que seas débil. Es que el anzuelo está bien hecho.' },
        { heading: 'Pon tú el final', text: 'Antes de abrir la red, elige cuándo cortar. Una alarma, una hora o un número de publicaciones.' },
        { heading: 'Mira cómo quedas', text: 'Al cerrar, nota cómo te sientes. Mejor, igual o peor. Ese dato te ayuda a elegir la próxima vez.' },
      ],
      related: { practices: ['el-anzuelo-del-feed', 'pausa-antes-de-desbloquear'], articles: ['redes-y-bienestar-adultos'] },
      references: [FERSTER_1957],
    },
    {
      id: 'pildora-vidriera',
      title: 'Su vidriera, tu detrás de escena',
      subtitle: 'La comparación en redes y qué hacer con ella.',
      slides: [
        { heading: 'Compararse es humano', text: 'Todos nos medimos con otros. En las redes pasa todo el tiempo, y casi siempre hacia arriba.' },
        { heading: 'Lo que se muestra', text: 'Viajes, logros, familias sonrientes. Es lo que cada uno elige mostrar. El resto no sale en la foto.' },
        { heading: 'Puede doler', text: 'En algunos estudios, mirar sin participar bajó el ánimo, en parte por la envidia. A otras personas no les pasa.' },
        { heading: 'Nómbralo', text: 'Dite: «Estoy comparando mi detrás de escena con su vidriera». Nombrarlo baja el golpe.' },
        { heading: 'Lo que señala', text: 'La envidia también informa. ¿Qué quieres para tu vida? Quizá haya un paso chico para dar.' },
      ],
      related: { practices: ['lo-que-no-sale-en-la-foto', 'mi-feed-y-mi-cuerpo'], articles: ['redes-y-bienestar-adultos'] },
      references: [FESTINGER_1954, VERDUYN_2015, VALKENBURG_2022],
    },
    {
      id: 'pildora-celular-en-la-cama',
      title: 'El celular no duerme contigo',
      subtitle: 'Pantallas, cama y sueño.',
      slides: [
        { heading: 'Un video más', text: 'Te acuestas, miras un rato y de pronto pasó una hora. Le pasa a mucha gente.' },
        { heading: 'Lo que se ve', text: 'Usar el celular ya acostado se asocia a dormir peor y a estar más cansado al otro día.' },
        { heading: 'Luz y contenido', text: 'La luz de la pantalla puede retrasar el sueño. Pero un mensaje de trabajo o un video te activan todavía más.' },
        { heading: 'Lejos de la mano', text: 'Deja el celular cargando lejos de la cama. Un despertador común resuelve la alarma.' },
        { heading: 'Si no duermes', text: 'Si el insomnio sigue varias semanas, consulta. Tiene tratamiento.' },
      ],
      related: { practices: ['el-celular-duerme-afuera', 'rutina-bajada-dormir'], articles: ['redes-y-bienestar-adultos'] },
      references: [EXELMANS_2016, CHANG_2015],
    },
    {
      id: 'pildora-phubbing',
      title: '¿Me escuchas o miras el celular?',
      subtitle: 'El «phubbing» en la pareja y la familia.',
      slides: [
        { heading: 'Una palabra nueva', text: '«Phubbing» es desairar a alguien por mirar el celular. Le pasa a casi todo el mundo, de los dos lados.' },
        { heading: 'Lo que transmite', text: 'Mirar la pantalla mientras alguien te habla le dice, sin querer, que importa menos.' },
        { heading: 'En la pareja', text: 'Sentirse ignorado por el celular del otro se asoció a más peleas y menos satisfacción.' },
        { heading: 'Un momento sin', text: 'Elijan un momento sin celulares, como la cena. Déjenlos en una canasta, lejos de la mesa.' },
        { heading: 'Sin reproche', text: 'Propónlo desde ti: «Me gusta cuando charlamos sin celular». Y empieza tú.' },
      ],
      related: { practices: ['mesa-sin-celulares', 'ofertas-de-conexion'], articles: ['redes-y-bienestar-adultos'] },
      references: [ROBERTS_2016, PRZYBYLSKI_2013],
    },
  ],

  // ================================================================== glosario
  glossary: [
    {
      id: 'refuerzo-intermitente',
      term: 'Refuerzo intermitente',
      definition: 'Cuando una conducta recibe un premio sólo a veces y sin aviso. Se repite mucho y cuesta dejarla. Ayuda a entender por qué cuesta dejar de bajar en el feed.',
      articleId: 'redes-y-bienestar-adultos',
      practiceId: 'el-anzuelo-del-feed',
    },
    {
      id: 'phubbing',
      term: 'Phubbing',
      definition: 'Desairar a alguien por mirar el celular mientras está contigo. Viene del inglés «phone» y «snubbing». En parejas se asocia a menos satisfacción.',
      articleId: 'redes-y-bienestar-adultos',
      practiceId: 'mesa-sin-celulares',
    },
    {
      id: 'uso-pasivo-de-redes',
      term: 'Uso pasivo de redes',
      definition: 'Mirar publicaciones de otros sin participar. Algunos estudios lo asocian a peor ánimo por la comparación, pero los efectos varían mucho de persona a persona.',
      articleId: 'redes-y-bienestar-adultos',
      practiceId: 'lo-que-no-sale-en-la-foto',
    },
    {
      id: 'aburrimiento',
      term: 'Aburrimiento',
      definition: 'Malestar de querer estar ocupado en algo que importe y no lograrlo. Es incómodo pero no peligroso. Es una de las señales que más disparan el uso del celular.',
      articleId: 'redes-y-bienestar-adultos',
      practiceId: 'aburrirme-sin-pantalla',
    },
    {
      id: 'ayuno-digital',
      term: 'Ayuno digital',
      definition: 'Dejar las redes o ciertas aplicaciones por un tiempo corto y planeado. Los estudios muestran resultados mixtos. Sirve como experimento personal, no como cura.',
      articleId: 'redes-y-bienestar-adultos',
      practiceId: 'ayuno-digital-breve',
    },
  ],
};
