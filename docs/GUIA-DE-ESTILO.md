# Guía de estilo del contenido

Normas para escribir o editar contenido terapéutico en Protocolo Eudaimonía. Las marcadas con ✓ se verifican
automáticamente en `src/domain/quality.test.ts` y `src/domain/content.test.ts`: si no se cumplen, los tests fallan.

## Voz y tono
- Segunda persona, cercana y respetuosa. Se usa **tú**; la elección entre tú y vos está pendiente de decisión.
- Calma, sin urgencia ni dramatismo, sin promesas ("vas a sentirte mejor").
- Validar antes de proponer: "es normal", "le pasa a mucha gente".
- Sin gamificación: nada de "¡bien hecho!", puntos ni logros.

## Legibilidad
- ✓ Instrucciones de los pasos: con legibilidad INFLESZ "normal" como mínimo (≥ 55), de 45 palabras como máximo y con
  frases de 30 palabras como máximo.
- ✓ Avisos de seguridad («Cuándo no usarlo»): INFLESZ ≥ 55 y frases de 26 palabras como máximo. Son los textos que se
  leen en un mal momento.
- Una idea por frase. Verbos en imperativo amable en los pasos: "Nota", "Respira", "Elige".
- Preferir palabras comunes: "pedir ayuda" mejor que "solicitar asistencia".

## Formato
- ✓ Las instrucciones terminan en punto (o en «», ?, !).
- ✓ Comillas españolas « » en todo el contenido.
- ✓ Lenguaje inclusivo con la forma «o/a» (p. ej. "cansado/a"). No se usan @, x ni «/os».
- ✓ Sin dobles espacios.

## Evidencia
- ✓ Toda referencia incluye el año entre paréntesis y, si existe, su DOI.
- ✓ Todas las referencias con DOI se verifican contra Crossref (`npm run verify:refs`) al menos una vez al año.
- El nivel de evidencia se asigna con los criterios de `src/domain/evidence.ts`, explicados en *Biblioteca › Cómo
  evaluamos la evidencia*. El nivel se refiere a la técnica **tal como se ofrece en la app** (breve, autoguiada).
- Ante la duda, declarar el nivel inferior.

## Citas
- ✓ Prohibidas las citas apócrifas conocidas (lista en `quality.test.ts`).
- Toda cita lleva su fuente localizable (obra, libro, parágrafo). Si la formulación no es literal: `paráfrasis`; si
  resume una idea: `concepto`.

## Seguridad
- ✓ Cada antídoto incluye «Cuándo no usarlo», con remisión a ayuda profesional o a la seguridad.
- Las prácticas con riesgo de desestabilizar (sin anclaje, trauma) llevan `cautions` y nivel intermedio o avanzado.
- El contenido que exige una decisión clínica entra como **borrador** (`src/domain/governance.ts`) y no se muestra a
  usuarios reales hasta su aprobación.
