import type { ContentPack } from './types';
import type { Reference } from '../types';

/**
 * Paquete «Necesidades: acoso y medicación». Suma prácticas a tres necesidades flojas,
 * sin repetir lo que ya cubren sus paquetes de origen:
 *  - acoso escolar (para madres, padres y adultos que acompañan): plan en familia ante el
 *    ciberacoso (guardar, bloquear, denunciar en la plataforma, privacidad) y volver a
 *    confiar y a tener amistades después del acoso (Hodges y colaboradores);
 *  - acoso laboral: recuperarse en el momento después de una reunión hostil (etiquetado
 *    afectivo y exhalación larga) y preparar una denuncia formal (recursos humanos,
 *    sindicato, Oficina de Asesoramiento sobre Violencia Laboral, abogado laboralista);
 *  - medicación: acordar con la familia o la pareja qué apoyo ayuda y cuál no, y tomar
 *    distancia del estigma interno («tomar medicación es de débiles») (Corrigan).
 *
 * Reglas de seguridad: nunca se indica enfrentar a quien acosa; no se da asesoramiento
 * legal (siempre abogado laboralista o sindicato); no se dan teléfonos que la app no use;
 * nunca se indican dosis ni se sugiere dejar o cambiar un remedio: eso se decide con el
 * médico. Ante amenazas, extorsión o imágenes íntimas de chicos, 911 y Línea 102.
 */

// ------------------------------------------------------------------ referencias
const KOWALSKI_2014: Reference = {
  citation:
    'Kowalski, R. M., Giumetti, G. W., Schroeder, A. N., & Lattanner, M. R. (2014). Bullying in the digital age: A critical review and meta-analysis of cyberbullying research among youth. Psychological Bulletin, 140(4), 1073–1137.',
  doi: '10.1037/a0035618',
};
const HINDUJA_2010: Reference = {
  citation: 'Hinduja, S., & Patchin, J. W. (2010). Bullying, cyberbullying, and suicide. Archives of Suicide Research, 14(3), 206–221.',
};
const HODGES_1999: Reference = {
  citation:
    'Hodges, E. V. E., Boivin, M., Vitaro, F., & Bukowski, W. M. (1999). The power of friendship: Protection against an escalating cycle of peer victimization. Developmental Psychology, 35(1), 94–101.',
};
const ARSENEAULT_2010: Reference = {
  citation:
    'Arseneault, L., Bowes, L., & Shakoor, S. (2010). Bullying victimization in youths and mental health problems: «Much ado about nothing»? Psychological Medicine, 40(5), 717–729.',
  doi: '10.1017/S0033291709991383',
};
const GROSS_1998: Reference = {
  citation: 'Gross, J. J. (1998). The emerging field of emotion regulation: An integrative review. Review of General Psychology, 2(3), 271–299.',
};
const LIEBERMAN_2007: Reference = {
  citation:
    'Lieberman, M. D., Eisenberger, N. I., Crockett, M. J., Tom, S. M., Pfeifer, J. H., & Way, B. M. (2007). Putting feelings into words: Affect labeling disrupts amygdala activity in response to affective stimuli. Psychological Science, 18(5), 421–428.',
};
const NIELSEN_2012: Reference = {
  citation: 'Nielsen, M. B., & Einarsen, S. (2012). Outcomes of exposure to workplace bullying: A meta-analytic review. Work & Stress, 26(4), 309–332.',
};
const OIT_2019: Reference = {
  citation: 'Organización Internacional del Trabajo (2019). Convenio sobre la violencia y el acoso, 2019 (núm. 190). OIT.',
  note: 'En la Argentina fue ratificado por la Ley 27.580 de 2020. Para saber cómo se aplica a tu caso, consulta a un abogado laboralista o al sindicato.',
};
const LEYMANN_1996: Reference = {
  citation: 'Leymann, H. (1996). The content and development of mobbing at work. European Journal of Work and Organizational Psychology, 5(2), 165–184.',
};
const HORNE_2013: Reference = {
  citation:
    'Horne, R., Chapman, S. C. E., Parham, R., Freemantle, N., Forbes, A., & Cooper, V. (2013). Understanding patients’ adherence-related beliefs about medicines prescribed for long-term conditions: A meta-analytic review of the Necessity-Concerns Framework. PLoS ONE, 8(12), e80633.',
};
const CORRIGAN_RAO_2012: Reference = {
  citation: 'Corrigan, P. W., & Rao, D. (2012). On the self-stigma of mental illness: Stages, disclosure, and strategies for change. Canadian Journal of Psychiatry, 57(8), 464–469.',
};
const CORRIGAN_2009: Reference = {
  citation:
    'Corrigan, P. W., Larson, J. E., & Rüsch, N. (2009). Self-stigma and the «why try» effect: Impact on life goals and evidence-based practices. World Psychiatry, 8(2), 75–81.',
};

// ------------------------------------------------------------------ avisos
const URGENTE_ESCOLAR =
  'Si tu hijo o hija habla de morir, se lastima, recibe amenazas o le piden fotos íntimas, no esperes. Llama al 911 si hay peligro. Puedes llamar a la Línea 102, al 135 o al 0800-999-0091. También está el botón Ayuda de la app.';

const AVISO_LABORAL =
  'Esta práctica no es asesoramiento legal. Para decidir qué hacer, consulta a un abogado laboralista o al sindicato. Si hay acoso sexual o por motivos de género, llama a la Línea 144. Si tienes ideas de hacerte daño, llama al 135 o al 0800-999-0091. Si hay peligro, al 911.';

const MED =
  'Esta práctica no indica, cambia ni suspende ningún remedio. Las decisiones sobre tu medicación las tomas con tu médico. No dejes ni cambies la dosis por tu cuenta. Si aparecen ideas de hacerte daño, una reacción fuerte o te sientes muy mal, consulta de inmediato, llama al 135 o al 0800-999-0091, o al 911 si es una urgencia.';

export const NECESIDADES_ACOSO_PACK: ContentPack = {
  id: 'necesidades-acoso-medicacion',

  // ================================================================== prácticas
  practices: [
    // -------------------------------------------------------------- acoso escolar
    {
      id: 'ciberacoso-plan-en-familia',
      title: 'Ciberacoso: un plan en familia',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Sentarte con tu hijo o hija frente al celular para guardar pruebas, bloquear, denunciar en la plataforma y ajustar la privacidad, sin castigos.',
      mechanism: 'Hacer los pasos juntos le devuelve a tu hijo o hija algo de control. Y le muestra que contar trae ayuda, no castigo.',
      evidenceLevel: 'preliminar',
      evidence: [KOWALSKI_2014, HINDUJA_2010],
      cautions: URGENTE_ESCOLAR,
      howItWorks: [
        'El ciberacoso llega por el celular, las redes o los juegos en línea. Puede seguir de noche y en casa. Se asocia a más tristeza, ansiedad y problemas para dormir (Kowalski y colaboradores, 2014).',
        'Muchos chicos no cuentan el ciberacoso porque temen que les saquen el celular. Por eso esta práctica se hace en equipo y sin castigo. Tu hijo o hija te muestra, y tú acompañas.',
        'El orden importa: primero guardar, después bloquear y denunciar en la plataforma. Si hay amenazas, extorsión o imágenes íntimas, ya no es sólo un tema de la escuela. Es un delito y se llama al 911 (Hinduja y Patchin, 2010).',
      ],
      tips: [
        'Pide permiso antes de mirar su celular. Pregunta: «¿Me muestras?».',
        'Si hay fotos íntimas, no las reenvíes ni las copies. Anota el usuario y el enlace, y llama al 911.',
        'Casi todas las redes y juegos tienen una opción para denunciar una cuenta o un mensaje. Búsquenla juntos.',
        'Si quien acosa es de la escuela, lleva las capturas a la reunión con la escuela.',
      ],
      obstacles: [
        { q: 'Quiero sacarle el celular para protegerle.', a: 'Se entiende el impulso. Pero si contar trae castigo, la próxima vez no te cuenta. Es mejor ajustar la privacidad y acordar horarios juntos.' },
        { q: 'No sé usar esa red.', a: 'No hace falta. Pide a tu hijo o hija que te enseñe. Ese rato juntos también ayuda.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio dos veces. Vas a ayudar, no a retar. Dile: «Gracias por mostrarme. Lo vamos a ver juntos».', durationSec: 30, kind: 'breath' },
        { title: 'Guardar', instruction: 'Saquen capturas de los mensajes. Que se vea la fecha, el nombre de la cuenta y el texto. Guárdenlas en una carpeta aparte.', durationSec: 60, kind: 'instruction' },
        { title: 'No responder', instruction: 'Acuerden no contestar ni reenviar nada. Responder suele dar más fuerza a quien acosa.', durationSec: 30, kind: 'instruction' },
        { title: 'Bloquear y denunciar', instruction: 'Busquen en la red o el juego la opción de denunciar. Denuncien la cuenta o el mensaje. Después, bloqueen.', durationSec: 60, kind: 'instruction' },
        { title: 'Privacidad', instruction: 'Revisen quién puede escribirle, ver sus fotos o etiquetarle. Elijan juntos la opción más cerrada que le sirva.', durationSec: 60, kind: 'instruction' },
        { title: 'La noche', instruction: 'Acuerden un plan para la noche. Por ejemplo, silenciar el celular o cargarlo fuera del cuarto.', durationSec: 40, kind: 'reflection' },
        { title: 'A quién avisar', instruction: 'Decidan juntos a quién avisar. La escuela, si son compañeros. El 911, si hay amenazas o fotos íntimas.', durationSec: 40, kind: 'reflection' },
      ],
    },
    {
      id: 'volver-a-confiar-despues-del-acoso',
      title: 'Volver a confiar después del acoso',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Ayudar a tu hijo o hija a recuperar la confianza y a tener amistades nuevas, con pasos chicos y a su ritmo.',
      mechanism: 'Una sola amistad buena protege contra el acoso. Buscar lugares nuevos y pasos chicos ayuda a que vuelva a sentirse a salvo con otros.',
      evidenceLevel: 'preliminar',
      evidence: [HODGES_1999, ARSENEAULT_2010],
      cautions: URGENTE_ESCOLAR,
      howItWorks: [
        'Cuando el acoso termina, muchas veces queda el miedo. Tu hijo o hija puede desconfiar de sus pares, aislarse o creer que nadie le va a querer. Esas huellas pueden durar (Arseneault y colaboradores, 2010).',
        'Un estudio siguió a chicos durante un año. Quienes tenían una amistad buena sufrían menos acoso con el tiempo, y el acoso les afectaba menos (Hodges y colaboradores, 1999). No hace falta un grupo grande. Una o dos personas seguras ya cuentan.',
        'Tu tarea no es elegir sus amistades. Es abrir lugares y oportunidades, respetar su ritmo y notar cada avance, aunque sea chico.',
      ],
      tips: [
        'Busca espacios fuera de la escuela: un club, un taller, un deporte o un grupo de la parroquia o del barrio.',
        'Las actividades con una tarea en común son más fáciles que una charla cara a cara.',
        'Cuéntale que tú también tuviste días difíciles con amistades. Sin comparar.',
        'Si la tristeza o el aislamiento siguen por semanas, consulta con un psicólogo infantojuvenil.',
      ],
      obstacles: [
        { q: 'No quiere ir a ningún lado.', a: 'Es comprensible después de lo que vivió. Empiecen por algo en casa, como invitar a un primo o a un vecino. No lo fuerces. Deja la puerta abierta.' },
        { q: 'Tengo miedo de que le vuelva a pasar.', a: 'Es un miedo lógico. Mantén el contacto con la escuela y las conversaciones en casa. Cuantas más personas seguras tenga, más protegido está.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en tu hijo o hija hoy, no en lo que pasó. ¿Cómo lo ves?', durationSec: 30, kind: 'breath' },
        { title: 'Sus fortalezas', instruction: 'Anota tres cosas que le gustan o le salen bien. Dibujar, un juego, un deporte, hacer reír.', durationSec: 60, kind: 'reflection' },
        { title: 'Personas seguras', instruction: 'Anota quién le trata bien. Un compañero amable, un primo, una vecina o alguien del club.', durationSec: 50, kind: 'reflection' },
        { title: 'Lugares nuevos', instruction: 'Piensa en un lugar fuera de la escuela donde pueda hacer algo que le gusta con otros chicos y chicas.', durationSec: 50, kind: 'reflection' },
        { title: 'Un paso chico', instruction: 'Elige un paso para esta semana. Por ejemplo, invitar a una persona a casa o probar una clase. Pregúntale qué le parece.', durationSec: 50, kind: 'reflection' },
        { title: 'A su ritmo', instruction: 'Escribe una frase para no presionar. Por ejemplo: «Si no tienes ganas hoy, está bien. Lo intentamos otro día».', durationSec: 40, kind: 'reflection' },
        { title: 'Notar avances', instruction: 'Piensa cómo vas a notar lo bueno. Una sonrisa al volver, un nombre nuevo, un mensaje. Díselo en voz alta.', durationSec: 40, kind: 'reflection' },
      ],
    },

    // -------------------------------------------------------------- acoso laboral
    {
      id: 'despues-de-una-reunion-hostil',
      title: 'Después de una reunión hostil',
      family: 'attentional',
      skills: ['attention', 'resilience'],
      micro: true,
      summary: 'Tres minutos para bajar la activación justo después de un mal momento en el trabajo, antes de responder o volver a la tarea.',
      mechanism: 'Nombrar lo que sientes y soltar el aire despacio ayuda a que el cuerpo salga de la alarma. Así puedes elegir el próximo paso con más calma.',
      evidenceLevel: 'preliminar',
      evidence: [GROSS_1998, LIEBERMAN_2007, NIELSEN_2012],
      cautions: AVISO_LABORAL,
      howItWorks: [
        'Después de un grito, una humillación o una reunión tensa, el cuerpo queda en alarma. El corazón late rápido y la mente repite la escena. Es una reacción normal frente a algo que daña (Nielsen y Einarsen, 2012).',
        'Poner en palabras lo que sientes baja la intensidad de la emoción (Lieberman y colaboradores, 2007). Soltar el aire más lento de lo que entra ayuda a que el cuerpo se calme.',
        'Regular la emoción no es aguantar ni hacer de cuenta que no pasó nada (Gross, 1998). Es darte unos minutos para no responder en caliente. Lo que pasó lo anotas después en tu registro.',
      ],
      tips: [
        'Si puedes, sal unos minutos: al baño, a la vereda o a tomar agua.',
        'No respondas mensajes ni correos en los primeros minutos.',
        'Anota una sola línea para tu registro. El resto lo escribes en casa.',
        'Si estas reuniones se repiten, cuéntalo a alguien de confianza.',
      ],
      obstacles: [
        { q: 'No puedo salir de la oficina.', a: 'Puedes hacerla en tu silla, con los ojos abiertos. Nadie tiene que notarlo.' },
        { q: 'Me quedo con bronca todo el día.', a: 'Es comprensible. La práctica no borra la bronca, la baja un poco. Al llegar a casa, prueba hacer algo con el cuerpo, como caminar.' },
      ],
      steps: [
        { title: 'Salir', instruction: 'Si puedes, aléjate unos minutos. Si no, quédate en tu silla. No respondas nada todavía.', durationSec: 20, kind: 'instruction' },
        { title: 'Los pies', instruction: 'Apoya bien los pies en el piso. Siente el peso del cuerpo en la silla o en las piernas.', durationSec: 20, kind: 'instruction' },
        { title: 'Soltar el aire', instruction: 'Toma aire en cuatro tiempos. Suéltalo en seis, despacio, como si soplaras una vela sin apagarla. Repite varias veces.', durationSec: 50, kind: 'breath' },
        { title: 'Nombrar', instruction: 'Dite en voz baja qué sientes. Por ejemplo: «Esto es enojo» o «Esto es vergüenza». No hace falta más.', durationSec: 25, kind: 'reflection' },
        { title: 'Aflojar', instruction: 'Suelta la mandíbula, los hombros y las manos. Mueve un poco el cuello.', durationSec: 25, kind: 'breath' },
        { title: 'Una línea', instruction: 'Anota en tu celular personal una línea: la hora y qué pasó. El resto lo escribes después.', durationSec: 25, kind: 'instruction' },
      ],
    },
    {
      id: 'preparar-una-denuncia-formal',
      title: 'Preparar una denuncia formal',
      family: 'constructive',
      skills: ['resilience', 'attention'],
      summary: 'Ordenar qué buscas, por qué vía presentarlo y qué llevar, para hacer una denuncia formal con asesoramiento y sin hacerlo en soledad.',
      mechanism: 'Llegar con un objetivo claro, un resumen de los hechos y tus preguntas escritas baja la confusión y te ayuda a aprovechar el asesoramiento.',
      evidenceLevel: 'preliminar',
      evidence: [OIT_2019, LEYMANN_1996],
      cautions: AVISO_LABORAL,
      howItWorks: [
        'Hay varias vías para hacer una denuncia. Dentro del trabajo, recursos humanos, un protocolo de la empresa o el delegado gremial. Fuera, el sindicato, la Oficina de Asesoramiento sobre Violencia Laboral del Ministerio de Trabajo de la Nación o un abogado laboralista.',
        'Cada vía tiene ventajas, plazos y riesgos distintos. Esta práctica no te dice cuál elegir. Te ayuda a llegar con tus ideas en orden para que un profesional del derecho laboral o el sindicato te oriente.',
        'En la Argentina rige el Convenio 190 de la OIT sobre violencia y acoso en el trabajo (Organización Internacional del Trabajo, 2019). Los nombres y los canales de los organismos pueden cambiar. Busca los datos actuales en sus sitios oficiales.',
      ],
      tips: [
        'Antes de presentar nada por escrito, consulta con un abogado laboralista o con el sindicato.',
        'Arma un resumen de una página, en orden de fechas. Lleva el registro completo aparte.',
        'Si presentas algo, pide una constancia con fecha y guarda una copia fuera del trabajo.',
        'Ve con alguien de confianza, si se puede.',
      ],
      obstacles: [
        { q: 'Tengo miedo de perder el trabajo.', a: 'Es un miedo muy común y razonable. Pregúntalo tal cual en el asesoramiento. Ellos pueden explicarte qué protecciones tienes y qué riesgos hay en tu caso.' },
        { q: 'No sé si tengo suficientes pruebas.', a: 'No lo decidas en soledad. Lleva lo que tengas. Un abogado laboralista o el sindicato te dirán qué sirve y qué falta.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Ten a mano tu registro de hechos. Hoy sólo vas a preparar, no a presentar.', durationSec: 30, kind: 'breath' },
        { title: 'Qué buscas', instruction: 'Anota qué quieres lograr. Que pare el trato, cambiar de sector, que haya una sanción o que se repare el daño.', durationSec: 60, kind: 'reflection' },
        { title: 'Por dónde', instruction: 'Anota las vías que tienes. Recursos humanos, el delegado gremial, el sindicato, la Oficina de Asesoramiento sobre Violencia Laboral o un abogado laboralista.', durationSec: 60, kind: 'reflection' },
        { title: 'Un resumen', instruction: 'Escribe en una página los hechos más importantes, en orden de fechas. Usa frases cortas y sin adjetivos.', durationSec: 75, kind: 'reflection' },
        { title: 'Tus preguntas', instruction: 'Escribe tres preguntas para el asesoramiento. Por ejemplo: ¿qué plazos hay? ¿Es confidencial? ¿Qué hago si hay represalias?', durationSec: 60, kind: 'reflection' },
        { title: 'Constancia', instruction: 'Anota que vas a pedir una constancia con fecha de todo lo que presentes. Guarda la copia fuera del trabajo.', durationSec: 30, kind: 'instruction' },
        { title: 'Compañía', instruction: 'Elige a alguien que te acompañe o te espere después. Respira despacio y cierra por hoy.', durationSec: 30, kind: 'breath' },
      ],
    },

    // -------------------------------------------------------------- medicación
    {
      id: 'hablar-de-mi-medicacion-en-casa',
      title: 'Hablar de mi medicación en casa',
      family: 'constructive',
      skills: ['compassion', 'resilience'],
      summary: 'Acordar con tu familia o tu pareja qué apoyo con la medicación te ayuda, cuál no, y cómo responder cuando opinan que la dejes o que tomes más.',
      mechanism: 'Cuando la familia sabe qué ayuda y qué no, baja el control y suben el apoyo y la confianza. Y la decisión sigue siendo tuya con tu médico.',
      evidenceLevel: 'preliminar',
      evidence: [HORNE_2013, CORRIGAN_RAO_2012],
      cautions: MED,
      howItWorks: [
        'Lo que pensamos sobre un remedio influye en cómo lo tomamos. Pesan dos cosas: cuánto creemos que lo necesitamos y cuánto nos preocupa (Horne y colaboradores, 2013). Las personas cercanas también tienen sus ideas, y a veces opinan fuerte.',
        'Algunas familias controlan de más: cuentan pastillas o preguntan todo el tiempo. Otras dicen que no hace falta o que «eso te cambia». Las dos cosas pueden hacer sentir mal y generar dudas.',
        'Contar o no, y cuánto, es tu decisión (Corrigan y Rao, 2012). Esta práctica te ayuda a pedir el apoyo que te sirve. No es para decidir sobre el remedio. Eso lo haces con tu médico.',
      ],
      tips: [
        'Elige un momento tranquilo, no en medio de una discusión.',
        'Pide cosas concretas. «Pregúntame cómo dormí» se entiende mejor que «apóyame».',
        'Si alguien tiene dudas sobre tu remedio, invítale a una consulta, si tú quieres.',
        'Acuerden qué hacer si notan que estás muy mal. Eso cuida a todos.',
      ],
      obstacles: [
        { q: 'Mi pareja dice que lo deje, que no me hace falta.', a: 'Puedes escuchar su opinión y aun así decidir con tu médico. Dile: «Entiendo tu duda. Lo voy a hablar con mi médico antes de cambiar nada».' },
        { q: 'Mi familia me controla todo el tiempo.', a: 'Suele venir del miedo. Agradece la preocupación y propón otra forma de ayudar. Por ejemplo, que pregunten una vez por semana cómo estás.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Respira despacio. Piensa en la persona con quien quieres hablar de tu medicación.', durationSec: 30, kind: 'breath' },
        { title: 'Qué contar', instruction: 'Escribe qué quieres que sepa. Puede ser poco. Por ejemplo: «Tomo un remedio que me indicó mi médico y me está ayudando».', durationSec: 50, kind: 'reflection' },
        { title: 'Lo que ayuda', instruction: 'Anota una o dos cosas que te sirven. Por ejemplo, que te pregunte cómo dormiste o que te acompañe a una consulta.', durationSec: 50, kind: 'reflection' },
        { title: 'Lo que no ayuda', instruction: 'Anota lo que te hace sentir mal. Por ejemplo, que cuente tus pastillas o que opine delante de otros.', durationSec: 45, kind: 'reflection' },
        { title: 'Si opina', instruction: 'Escribe una frase para cuando te digan que lo dejes o lo cambies. Por ejemplo: «Eso lo decido con mi médico».', durationSec: 45, kind: 'reflection' },
        { title: 'Si me ven mal', instruction: 'Anota qué quieres que hagan si te ven muy mal. Por ejemplo, llamar a tu médico, al 135 o al 0800-999-0091.', durationSec: 45, kind: 'reflection' },
        { title: 'Cerrar', instruction: 'Respira despacio. Elige cuándo vas a hablar y qué harás después para cuidarte.', durationSec: 30, kind: 'breath' },
      ],
    },
    {
      id: 'estigma-interno-y-medicacion',
      title: '«Tomar medicación es de débiles»',
      family: 'constructive',
      skills: ['compassion', 'attention'],
      summary: 'Tomar distancia de las frases que te dices sobre la medicación, ver qué te hacen hacer y elegir un paso que cuide tu salud.',
      mechanism: 'Mirar el pensamiento como un pensamiento, y no como una verdad, le quita fuerza. Así es más fácil actuar según lo que te importa.',
      evidenceLevel: 'preliminar',
      evidence: [CORRIGAN_RAO_2012, CORRIGAN_2009],
      cautions: MED,
      howItWorks: [
        'A veces los prejuicios sobre la salud mental se vuelven frases propias: «soy débil», «debería poder sola o solo», «esto me hace menos». Patrick Corrigan llama a esto estigma interno o autoestigma (Corrigan y Rao, 2012).',
        'El autoestigma no sólo duele. También puede hacer que la persona deje de intentar cosas que le importan. Corrigan lo llamó el efecto «¿para qué intentarlo?» (Corrigan y colaboradores, 2009). Con la medicación, puede llevar a esconderla, a saltear tomas o a no consultar.',
        'Esta práctica usa una idea de la terapia de aceptación y compromiso: notar el pensamiento sin pelear con él. No busca que tomes ni que dejes nada. Busca que la vergüenza no decida por ti.',
      ],
      tips: [
        'Piensa en otros remedios de uso común, como los de la presión o el asma. ¿Dirías que esas personas son débiles?',
        'La frase puede volver. Cada vez que vuelve, puedes notarla otra vez.',
        'Si tienes dudas reales sobre el remedio, anótalas para la consulta.',
      ],
      obstacles: [
        { q: 'Pero de verdad siento que es de débiles.', a: 'Está bien sentirlo. No hace falta convencerte de lo contrario. Sólo nota que es un pensamiento, y elige igual un paso que te cuide.' },
      ],
      steps: [
        { title: 'Llegar', instruction: 'Pon una mano en el pecho. Respira despacio dos veces.', durationSec: 25, kind: 'breath' },
        { title: 'La frase', instruction: 'Escribe la frase dura que te dices sobre tomar medicación. Por ejemplo: «Tomar remedios es de débiles».', durationSec: 40, kind: 'reflection' },
        { title: 'Tomar distancia', instruction: 'Léela así: «Estoy teniendo el pensamiento de que…». Nota si cambia algo al decirla de esa forma.', durationSec: 35, kind: 'reflection' },
        { title: 'De dónde viene', instruction: '¿Dónde aprendiste esa idea? ¿En tu familia, en la tele, en tu barrio? Anótalo sin juzgarte.', durationSec: 40, kind: 'reflection' },
        { title: 'Lo que te hace hacer', instruction: '¿Qué haces por esa frase? ¿Esconder el remedio, saltear tomas, no consultar? Anota una cosa.', durationSec: 40, kind: 'reflection' },
        { title: 'Otra voz', instruction: '¿Qué le dirías a una amistad que toma un remedio para cuidarse? Escríbelo y léelo para ti.', durationSec: 40, kind: 'reflection' },
        { title: 'Un paso', instruction: 'Elige un paso chico que cuide tu salud esta semana. Por ejemplo, llevar tus dudas a la consulta.', durationSec: 30, kind: 'reflection' },
      ],
    },
  ],

  meta: {
    'ciberacoso-plan-en-familia': { level: 'iniciacion', approaches: ['soluciones', 'sistemica'], module: 'etapas' },
    'volver-a-confiar-despues-del-acoso': {
      level: 'intermedio',
      approaches: ['mentalizacion', 'interpersonal'],
      module: 'etapas',
      prerequisites: ['preparar-la-charla-con-mi-hijo'],
    },
    'despues-de-una-reunion-hostil': { level: 'iniciacion', approaches: ['dbt', 'relajacion'], module: 'trabajo' },
    'preparar-una-denuncia-formal': {
      level: 'intermedio',
      approaches: ['soluciones', 'tcc'],
      module: 'trabajo',
      prerequisites: ['registro-de-hechos-en-el-trabajo', 'mapa-de-apoyos-en-el-trabajo'],
    },
    'hablar-de-mi-medicacion-en-casa': {
      level: 'intermedio',
      approaches: ['interpersonal', 'motivacional'],
      module: 'salud',
      prerequisites: ['preparar-la-consulta-medica'],
    },
    'estigma-interno-y-medicacion': { level: 'iniciacion', approaches: ['act', 'cft'], module: 'salud' },
  },

  articles: [],
  programs: [],

  // ================================================================== píldoras
  pills: [
    {
      id: 'pildora-ciberacoso-en-familia',
      title: 'Ciberacoso: en equipo y sin castigo',
      subtitle: 'Qué hacer juntos frente al celular.',
      slides: [
        { heading: 'Gracias por contarme', text: 'Si tu hijo o hija te muestra un mensaje feo, agradece. Contar cuesta mucho.' },
        { heading: 'Sin castigo', text: 'No le saques el celular por contarte. Si contar trae castigo, la próxima vez no te cuenta.' },
        { heading: 'Juntos', text: 'Siéntense juntos. Guarden capturas, denuncien la cuenta en la red y después bloqueen.' },
        { heading: 'Privacidad', text: 'Revisen quién puede escribirle o ver sus fotos. Elijan juntos la opción más cerrada.' },
        { heading: 'La noche', text: 'Acuerden un plan para la noche. Por ejemplo, silenciar el celular o dejarlo fuera del cuarto.' },
        { heading: 'Si es grave', text: 'Si hay amenazas, extorsión o fotos íntimas, es un delito. No reenvíes nada y llama al 911 o a la Línea 102.' },
      ],
      related: { practices: ['ciberacoso-plan-en-familia'], articles: ['acoso-escolar-y-ciberacoso'] },
      references: [KOWALSKI_2014, HINDUJA_2010],
    },
    {
      id: 'pildora-volver-a-confiar',
      title: 'Una amistad buena protege',
      subtitle: 'Cómo ayudar a que vuelva a confiar después del acoso.',
      slides: [
        { heading: 'Quedan huellas', text: 'Cuando el acoso termina, puede quedar el miedo. Es normal que le cueste confiar otra vez.' },
        { heading: 'Una alcanza', text: 'Tener una amistad buena protege. No hace falta un grupo grande. Una o dos personas seguras ya cuentan.' },
        { heading: 'Lugares nuevos', text: 'Un club, un taller o un deporte fuera de la escuela. Ahí puede empezar de cero.' },
        { heading: 'A su ritmo', text: 'No lo fuerces. Propón pasos chicos y deja que diga que no.' },
        { heading: 'Nota lo bueno', text: 'Un nombre nuevo, una sonrisa al volver, un mensaje. Díselo en voz alta.' },
        { heading: 'Si no mejora', text: 'Si la tristeza o el aislamiento siguen por semanas, consulta con un psicólogo infantojuvenil.' },
      ],
      related: { practices: ['volver-a-confiar-despues-del-acoso'], articles: ['acoso-escolar-y-ciberacoso'] },
      references: [HODGES_1999, ARSENEAULT_2010],
    },
    {
      id: 'pildora-despues-de-una-reunion-hostil',
      title: 'Después del mal momento',
      subtitle: 'Tres minutos antes de responder.',
      slides: [
        { heading: 'El cuerpo en alarma', text: 'Después de un grito o una humillación, el corazón late rápido. Es una reacción normal.' },
        { heading: 'No respondas aún', text: 'Espera unos minutos antes de contestar un mensaje o un correo. En caliente es fácil decir algo que después pesa.' },
        { heading: 'Suelta el aire', text: 'Toma aire en cuatro tiempos y suéltalo en seis. Repite varias veces.' },
        { heading: 'Ponle nombre', text: 'Dite en voz baja: «Esto es enojo» o «Esto es vergüenza». Nombrar lo que sientes baja su fuerza.' },
        { heading: 'Una línea', text: 'Anota la hora y qué pasó en tu celular personal. El resto lo escribes en casa.' },
      ],
      related: { practices: ['despues-de-una-reunion-hostil'], articles: ['acoso-laboral-y-mobbing'] },
      references: [LIEBERMAN_2007, GROSS_1998],
    },
    {
      id: 'pildora-denuncia-formal',
      title: 'Antes de denunciar',
      subtitle: 'Qué ordenar y a quién preguntar.',
      slides: [
        { heading: 'Qué buscas', text: '¿Quieres que pare el trato, cambiar de sector o que haya una sanción? Tenerlo claro ayuda.' },
        { heading: 'Varias vías', text: 'Recursos humanos, el delegado gremial, el sindicato o la Oficina de Asesoramiento sobre Violencia Laboral del Ministerio de Trabajo.' },
        { heading: 'Pide consejo', text: 'Antes de presentar algo, consulta con un abogado laboralista o con el sindicato. Ellos conocen los plazos.' },
        { heading: 'Un resumen', text: 'Arma una página con los hechos en orden de fechas. Lleva tu registro completo aparte.' },
        { heading: 'Constancia', text: 'Si presentas algo, pide una constancia con fecha. Guarda una copia fuera del trabajo.' },
        { heading: 'No en soledad', text: 'Ve con alguien de confianza. Si hay acoso por motivos de género, puedes llamar a la Línea 144.' },
      ],
      related: { practices: ['preparar-una-denuncia-formal'], articles: ['acoso-laboral-y-mobbing'] },
      references: [OIT_2019],
    },
    {
      id: 'pildora-hablar-de-la-medicacion',
      title: 'La medicación y tu familia',
      subtitle: 'Pedir el apoyo que te sirve.',
      slides: [
        { heading: 'Cada quien opina', text: 'Tu familia o tu pareja pueden tener ideas fuertes sobre tu remedio. A veces ayudan y a veces no.' },
        { heading: 'Tú decides qué contar', text: 'Puedes contar mucho o poco. Es tu decisión.' },
        { heading: 'Pide algo concreto', text: '«Pregúntame cómo dormí» se entiende mejor que «apóyame».' },
        { heading: 'Lo que no ayuda', text: 'Contar tus pastillas u opinar delante de otros suele hacer sentir mal. Puedes decirlo con calma.' },
        { heading: 'Si te dicen que lo dejes', text: 'Puedes responder: «Lo decido con mi médico». Nunca dejes ni cambies un remedio por tu cuenta.' },
        { heading: 'Un plan', text: 'Acuerden qué hacer si te ven muy mal. Por ejemplo, llamar a tu médico o al 135.' },
      ],
      related: { practices: ['hablar-de-mi-medicacion-en-casa'], articles: ['medicacion-psiquiatrica'] },
      references: [HORNE_2013, CORRIGAN_RAO_2012],
    },
    {
      id: 'pildora-medicacion-no-es-debilidad',
      title: 'No es de débiles',
      subtitle: 'Cuando la vergüenza habla más fuerte.',
      slides: [
        { heading: 'Frases aprendidas', text: '«Es de débiles», «debería poder con esto». Son ideas que se aprenden, no verdades.' },
        { heading: 'Autoestigma', text: 'Cuando hacemos propios esos prejuicios, se llama autoestigma. Es muy común.' },
        { heading: 'Lo que provoca', text: 'Puede llevar a esconder el remedio, saltear tomas o no consultar. Y eso puede afectar tu salud.' },
        { heading: 'Toma distancia', text: 'Prueba decir: «Estoy teniendo el pensamiento de que soy débil». Así pierde un poco de fuerza.' },
        { heading: 'Como con otros remedios', text: 'Nadie dice que es débil quien toma un remedio para la presión. Cuidarte es un acto de fuerza.' },
        { heading: 'Con tu médico', text: 'Si tienes dudas reales sobre tu remedio, llévalas a la consulta. Lo deciden juntos.' },
      ],
      related: { practices: ['estigma-interno-y-medicacion'], articles: ['medicacion-psiquiatrica'] },
      references: [CORRIGAN_RAO_2012, CORRIGAN_2009],
    },
  ],
};
