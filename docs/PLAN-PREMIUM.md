# Plan para una app premium (celular, computadora y Android)

Revisión del estado actual y de lo que falta para publicar en Google Play y cobrar una suscripción.

## 1. Lo que ya tiene

| Área | Contenido |
|---|---|
| Adultos | 52+ prácticas guiadas, 20+ programas, 33+ artículos, 27+ plantillas de diario, 22 antídotos, 6 evaluaciones (WHO-5, GAD-7, PHQ-9, DERS-16, ISI, PSS-10), Laboratorio (8 simulaciones, 24 frases), cartas filosóficas |
| Enfoques | DBT, TCC, ACT, compasión, mindfulness, psicología positiva, contemplativo, esquemas, Jung; ahora también logoterapia, humanismo y Gestalt |
| Hábito diario | «Tu día» (3 pasos), pregunta del día (64), primer uso guiado, hitos, jardín, desafío semanal, plan semanal, recordatorio por calendario |
| Familia | 5 franjas de 0 a 17 años, 79 actividades, 20 caminos, 9 guías, cuentos por edad y tema, modo chico con código, panel del adulto, alertas |
| Clínica | Gobernanza de contenido (borrador, pendiente, revisado), panel de revisión, informe para el terapeuta, plan de seguridad, cribado de riesgo |
| Técnica | PWA instalable y con funcionamiento sin conexión, Firebase (Auth y Firestore) con reglas probadas, App Check, accesibilidad WCAG 2.1 AA probada, modo oscuro, CSP, pruebas automáticas en cada cambio |

Es una base muy por encima de la media de las apps de bienestar. Lo que falta es **producto comercial**, no contenido.

## 2. Lo que falta, por prioridad

### A. Imprescindible para cobrar

1. **Cobros y planes.**
   - **En Android (Google Play):** para vender suscripciones digitales dentro de una app de Play hay que usar **Google Play Billing**. Google se queda con el 15 % de las suscripciones.
   - **En la web:** se puede cobrar con **Mercado Pago** (Argentina) o **Stripe** (internacional).
   - **Servidor:** en los dos casos hace falta un pequeño servidor (Firebase Cloud Functions, plan Blaze) que reciba la confirmación del pago y marque la cuenta como premium. Las reglas de Firestore impiden que el usuario se lo marque solo.
2. **Qué es gratis y qué es premium.** Propuesta:
   - **Gratis:** «Tu día», 10 prácticas básicas, 2 programas, antídotos y plan de seguridad. La ayuda en crisis siempre es gratis, por ética.
   - **Premium:** todos los programas, el Laboratorio, el informe para el terapeuta, todos los cuentos, la Familia con más de un perfil, las evaluaciones con historial y los audios.
   - **Prueba:** 7 a 14 días gratis.
   - **Precio orientativo:** de USD 4 a 6 por mes o de USD 30 a 40 por año; plan familiar de USD 50 a 60 por año.
3. **App para Android.** Hay dos caminos:
   - **TWA (Trusted Web Activity) con Bubblewrap:** empaqueta la app web actual. Es la opción más rápida, con el mismo código. Requiere `assetlinks.json` en el dominio.
   - **Capacitor:** da más acceso nativo (notificaciones locales, Play Billing con un plugin).
   - **Recomendación:** empezar con TWA y pasar a Capacitor si hace falta cobrar dentro de la app con Play Billing.
4. **Dominio propio** (por ejemplo, habilidadespsicologicas.app) en lugar de vercel.app. Es necesario para Play, para la confianza del usuario y para los correos.
5. **Legal:**
   - Política de privacidad revisada por un abogado (ya hay borrador en `/privacidad`) y términos y condiciones con la cláusula de que la app no reemplaza la terapia.
   - Registro de la base de datos ante la AAIP (Ley 25.326).
   - El formulario de «Seguridad de los datos» y la declaración de app de salud en Play Console.
   - Para menores, el consentimiento del adulto (ya está).
6. **Revisión clínica** del contenido en estado «pendiente» y «borrador». Es lo que más valor premium agrega: «contenido revisado por profesionales».

### B. Lo que hace que la gente pague y se quede

7. **Audios con voz humana** para las prácticas y los cuentos, en lugar de la voz del navegador. Es el diferencial número uno de las apps premium (Calm, Headspace). Se pueden grabar en estudio o generar con una voz sintética de alta calidad, con licencia comercial.
8. **Ilustraciones profesionales** para los cuentos y la sección de chicos. Los dibujos actuales son simples y sirven para la primera versión.
9. **Notificaciones push reales**, opcionales: un recordatorio diario, la pregunta del día y el resumen semanal. Se hacen con Firebase Cloud Messaging; en Android funcionan con TWA o Capacitor.
10. **Resumen semanal por correo**, opcional, con lo practicado y una sugerencia.
11. **Vínculo con el terapeuta.** Ya existe la idea de autorizar a un profesional. Un plan «Profesional» de pago, donde el psicólogo ve a sus pacientes, es la vía B2B, la más rentable.
12. **Más formatos de contenido:** videos cortos, meditaciones para dormir largas y series temáticas de audio.
13. **Personalización con datos:** que las sugerencias aprendan qué le sirve a cada persona (ya hay reglas transparentes; se pueden ampliar).

### C. Operación

14. **Medición anónima y con consentimiento:** activación, retención a 1, 7 y 30 días, conversión a premium y qué contenido se abandona. Sin esto no se puede mejorar la conversión.
15. **Registro de errores en producción.** Por ejemplo, Sentry, sin datos personales.
16. **Copias de seguridad automáticas de Firestore** y monitoreo de costos de Firebase.
17. **Soporte:** un correo de contacto y preguntas frecuentes dentro de la app.
18. **Ficha de Play Store:** capturas, video corto, descripción con buen posicionamiento y política de contenido para salud mental.

## 3. Orden sugerido

| Etapa | Qué | Resultado |
|---|---|---|
| 1 | Dominio, legal, revisión clínica de lo pendiente | Lista para usuarios reales |
| 2 | Planes gratis y premium, y cobro web con Mercado Pago o Stripe (Cloud Functions) | Primeros ingresos en la web |
| 3 | TWA en Google Play con Play Billing | App en Android |
| 4 | Audios, ilustraciones y notificaciones push | Sensación premium y retención |
| 5 | Plan profesional para terapeutas | Ingresos B2B |

## 4. Qué puede hacer el equipo técnico (Claude) y qué necesita del dueño

- **Se puede programar sin cuentas externas:**
  - La lógica de planes y la pantalla de precios.
  - El bloqueo del contenido premium.
  - Las funciones del servidor para cobros, listas para desplegar.
  - La configuración de TWA y los íconos.
  - Las notificaciones.
  - Más contenido.
- **Necesita al dueño:**
  - Comprar el dominio.
  - Crear la cuenta de desarrollador de Google Play (USD 25, pago único).
  - Crear las cuentas de Mercado Pago o Stripe.
  - Pasar Firebase al plan Blaze.
  - La revisión legal y la revisión clínica.
