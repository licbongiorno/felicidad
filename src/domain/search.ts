import { ANTIDOTES } from './antidotes';
import { CARDS, DECKS } from './cards';
import { FREE_TIMER_TITLE } from './freeTimer';
import { JOURNAL_TEMPLATES } from './journal';
import { ARTICLES } from './library';
import { PRACTICES } from './practices';
import { PROGRAMS } from './programs';
import { FAMILY_LABEL } from './evidence';
import { GLOSSARY } from './glossary';
import { THINKING_TRAPS } from './thinkingTraps';
import { EMOTION_FAMILIES } from './emotions';
import { MODULES } from './catalog';
import { SIMULATIONS } from './lab';
import { isPublished } from './governance';
import { PILLS } from './pills';
import { CHALLENGES } from './challenges';
import { STORIES } from './stories';
import { KID_GUIDES } from './kids-guides';
import { NEEDS } from './needs';

/**
 * Buscador global (⌘K). Índice en memoria sobre todo el contenido, sin dependencias:
 * insensible a mayúsculas y tildes, todas las palabras deben aparecer (AND) y el
 * título pesa más que el cuerpo.
 */

export type ResultKind = 'Sección' | 'Práctica' | 'Antídoto' | 'Diario' | 'Programa' | 'Desafío' | 'Artículo' | 'Píldora' | 'Cuento' | 'Guía' | 'Glosario' | 'Carta';

export interface SearchDoc {
  id: string;
  kind: ResultKind;
  title: string;
  subtitle: string;
  href: string;
  /** Texto normalizado del título y del cuerpo. */
  titleN: string;
  bodyN: string;
}

export const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const doc = (d: Omit<SearchDoc, 'titleN' | 'bodyN'>, body: string[]): SearchDoc => ({
  ...d,
  titleN: normalize(d.title),
  bodyN: normalize([d.subtitle, ...body].join(' ')),
});

const SECTIONS: [string, string, string, string[]][] = [
  ['/dashboard', 'Panel', 'Racha, ánimo, sugerencias y qué te funciona', ['inicio', 'progreso', 'estadisticas']],
  ['/gimnasio', 'Habilidades', 'Catálogo de prácticas guiadas por necesidad', ['gimnasio', 'meditacion', 'meditar', 'ejercicios', 'modulos']],
  ['/gimnasio/temporizador', FREE_TIMER_TITLE, 'Práctica sin guía con campanas de intervalo', ['meditacion', 'silencio', 'campana', 'timer']],
  ['/antidotos', 'Antídotos', 'Trabajar ahora una emoción difícil', ['emocion', 'crisis', 'malestar']],
  ['/diario', 'Diario', 'Registros escritos estructurados', ['escribir', 'journal', 'notas']],
  ['/diario/tarjeta-semanal', 'Tarjeta diaria DBT · semana', 'Tus tarjetas de la semana en una planilla para llevar a terapia', ['diary card', 'dbt', 'planilla', 'semana', 'imprimir']],
  ['/evaluaciones', 'Evaluaciones WHO-5', 'Mide tu bienestar cada dos semanas', ['cuestionario', 'test', 'bienestar']],
  ['/informe', 'Informe para tu terapeuta', 'Resumen imprimible o en PDF', ['pdf', 'imprimir', 'psicologo', 'sesion']],
  ['/programas', 'Programas', 'Recorridos guiados de varias semanas', ['curso', 'plan']],
  ['/desafios', 'Desafíos', 'Una tarea corta por día durante 7, 21 o 30 días', ['reto', 'habito', 'rutina', 'dias']],
  ['/biblioteca/pildoras', 'Píldoras', 'Ideas clave en tarjetas, para leer en un minuto', ['tarjetas', 'resumen', 'breve']],
  ['/familia', 'Familia', 'Habilidades para chicos de 0 a 17 años, con tu supervisión', ['hijos', 'chicos', 'ninos', 'crianza', 'adolescentes']],
  ['/biblioteca', 'Biblioteca', 'Fundamentos científicos', ['articulos', 'ciencia', 'evidencia']],
  ['/cartas', 'Cartas filosóficas', 'Perspectivas para romper la rumiación', ['frases', 'citas', 'estoicismo']],
  ['/ajustes', 'Ajustes', 'Voz guía, recordatorios, exportar o borrar datos', ['configuracion', 'cuenta', 'privacidad', 'recordatorio']],
];

export function buildIndex(): SearchDoc[] {
  return [
    ...SECTIONS.map(([href, title, subtitle, extra]) => doc({ id: `s:${href}`, kind: 'Sección', title, subtitle, href }, extra)),
    ...PRACTICES.filter((p) => isPublished('practica', p.id)).map((p) =>
      doc(
        { id: `p:${p.id}`, kind: 'Práctica', title: p.title, subtitle: `${FAMILY_LABEL[p.family]} · ${p.summary}`, href: `/gimnasio/${p.id}` },
        [p.mechanism, ...p.tips],
      ),
    ),
    ...ANTIDOTES.map((a) =>
      doc(
        { id: `a:${a.emotionId}`, kind: 'Antídoto', title: a.emotionLabel, subtitle: `${a.antidoteName} · ${a.markers}`, href: `/antidotos?emocion=${a.emotionId}` },
        [a.incompatibility],
      ),
    ),
    ...JOURNAL_TEMPLATES.filter((t) => !t.hidden && isPublished('diario', t.type)).map((t) =>
      doc({ id: `j:${t.type}`, kind: 'Diario', title: t.title, subtitle: t.summary, href: `/diario?nuevo=${t.type}` }, [t.when]),
    ),
    ...PROGRAMS.map((p) =>
      doc({ id: `g:${p.id}`, kind: 'Programa', title: p.title, subtitle: p.subtitle, href: `/programas/${p.id}` }, [p.description, ...p.weeks.map((w) => w.title)]),
    ),
    doc({ id: 's:/habilidades', kind: 'Sección', title: 'Mapa de habilidades', subtitle: 'Elige lo que necesitas y encuentra las habilidades que lo trabajan', href: '/habilidades' }, ['necesidad', 'que necesito', 'por donde empiezo', 'ayuda']),
    ...NEEDS.map((n) => doc({ id: `n:${n.id}`, kind: 'Sección', title: n.title, subtitle: n.description, href: `/habilidades/${n.id}` }, [n.objective])),
    ...CHALLENGES.map((c) =>
      doc({ id: `r:${c.id}`, kind: 'Desafío', title: c.title, subtitle: `${c.days} días · ${c.subtitle}`, href: '/desafios' }, [c.why, ...c.tasks.map((t) => t.title)]),
    ),
    ...PILLS.filter((p) => isPublished('pildora', p.id)).map((p) =>
      doc({ id: `i:${p.id}`, kind: 'Píldora', title: p.title, subtitle: p.subtitle, href: `/biblioteca/pildoras/${p.id}` }, p.slides.map((x) => x.heading)),
    ),
    ...STORIES.map((st) =>
      doc({ id: `k:${st.id}`, kind: 'Cuento', title: st.title, subtitle: `${st.tagline} · para leer en familia`, href: `/familia/cuentos/${st.id}` }, st.themes),
    ),
    ...KID_GUIDES.filter((g) => isPublished('guia-familia', g.id)).map((g) =>
      doc({ id: `f:${g.id}`, kind: 'Guía', title: g.title, subtitle: `Guía para familias · ${g.subtitle}`, href: `/familia/guia/${g.id}` }, g.keyPoints),
    ),
    ...ARTICLES.filter((a) => isPublished('articulo', a.id)).map((a) =>
      doc({ id: `b:${a.id}`, kind: 'Artículo', title: a.title, subtitle: a.subtitle, href: `/biblioteca/${a.id}` }, [a.category, ...a.keyPoints]),
    ),
    ...GLOSSARY.map((g) =>
      doc({ id: `t:${g.id}`, kind: 'Glosario', title: g.term, subtitle: g.definition, href: `/biblioteca/glosario#${g.id}` }, []),
    ),
    doc({ id: 's:/biblioteca/trampas-del-pensamiento', kind: 'Sección', title: 'Trampas del pensamiento', subtitle: 'Distorsiones cognitivas y cómo desmontarlas', href: '/biblioteca/trampas-del-pensamiento' }, ['distorsiones', 'pensamientos', 'tcc']),
    ...THINKING_TRAPS.map((t) =>
      doc({ id: `d:${t.id}`, kind: 'Glosario', title: t.name, subtitle: t.description, href: `/biblioteca/trampas-del-pensamiento#${t.id}` }, [t.example]),
    ),
    doc({ id: 's:/biblioteca/rueda-de-emociones', kind: 'Sección', title: 'Rueda de emociones', subtitle: 'Ponerle nombre a lo que sientes y qué hacer con ello', href: '/biblioteca/rueda-de-emociones' }, ['emociones', 'sentimientos', 'dbt', 'granularidad']),
    doc({ id: 's:/laboratorio', kind: 'Sección', title: 'Laboratorio', subtitle: 'Simulaciones y ejercicios interactivos', href: '/laboratorio' }, ['juegos', 'simulador', 'ensayar']),
    ...SIMULATIONS.map((s) =>
      doc({ id: `sim:${s.id}`, kind: 'Sección', title: s.title, subtitle: `Simulador de conversación · ${s.goal}`, href: `/laboratorio/conversaciones/${s.id}` }, ['conversacion', 'limites', 'asertividad']),
    ),
    doc({ id: 's:/laboratorio/semaforo', kind: 'Sección', title: 'Semáforo emocional', subtitle: 'Qué hacer según la intensidad de la emoción', href: '/laboratorio/semaforo' }, ['crisis', 'intensidad']),
    doc({ id: 's:/laboratorio/caja', kind: 'Sección', title: 'Mi caja de herramientas', subtitle: 'Lo que te ayuda en cada zona del semáforo', href: '/laboratorio/caja' }, ['kit', 'crisis']),
    doc({ id: 's:/laboratorio/hecho-o-interpretacion', kind: 'Sección', title: '¿Hecho o interpretación?', subtitle: 'Juego para comprobar los hechos', href: '/laboratorio/hecho-o-interpretacion' }, ['juego', 'pensamientos']),
    doc({ id: 's:/laboratorio/esquemas', kind: 'Sección', title: 'Mapa de esquemas y modos', subtitle: 'Los 18 esquemas de Young y los modos', href: '/laboratorio/esquemas' }, ['terapia de esquemas', 'young', 'modos', 'adulto sano', 'nino interior', 'critico']),
    doc({ id: 's:/laboratorio/genograma', kind: 'Sección', title: 'Tu genograma', subtitle: 'Tu familia en tres generaciones', href: '/laboratorio/genograma' }, ['familia', 'arbol genealogico', 'sistemica', 'patrones familiares', 'abuelos']),
    ...MODULES.filter((m) => m.practices.length > 0).map((m) =>
      doc({ id: `m:${m.id}`, kind: 'Sección', title: m.title, subtitle: m.purpose, href: `/gimnasio#${m.id}` }, ['modulo', 'habilidades']),
    ),
    ...EMOTION_FAMILIES.map((e) =>
      doc({ id: `e:${e.id}`, kind: 'Glosario', title: e.name, subtitle: e.shades.join(', '), href: `/biblioteca/rueda-de-emociones#${e.id}` }, [e.urge]),
    ),
    ...(isPublished('herramienta', 'plan-seguridad')
      ? [doc({ id: 's:/plan-de-seguridad', kind: 'Sección', title: 'Plan de seguridad', subtitle: 'Tu plan personal para los momentos de crisis', href: '/plan-de-seguridad' }, ['crisis', 'suicidio', 'emergencia', 'ayuda'])]
      : []),
    ...CARDS.map((c) =>
      doc({ id: `c:${c.id}`, kind: 'Carta', title: c.author, subtitle: c.text, href: `/cartas?carta=${c.id}` }, [DECKS[c.deck].title, c.source]),
    ),
  ];
}

/** Atajos que se muestran con la búsqueda vacía. */
export const QUICK_ACTIONS = ['s:/antidotos', 's:/gimnasio/temporizador', 'j:tres-cosas', 's:/evaluaciones', 's:/informe'];

const KIND_BOOST: Record<ResultKind, number> = {
  Sección: 3,
  Antídoto: 2,
  Práctica: 2,
  Diario: 1,
  Programa: 1,
  Desafío: 1,
  Artículo: 0,
  Píldora: 0,
  Cuento: 0,
  Guía: 0,
  Glosario: 0,
  Carta: 0,
};

export function search(index: SearchDoc[], query: string, limit = 12): SearchDoc[] {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];
  const scored: { d: SearchDoc; score: number }[] = [];
  for (const d of index) {
    let score = 0;
    let all = true;
    for (const t of terms) {
      if (d.titleN.startsWith(t)) score += 12;
      else if (new RegExp(`\\b${t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`).test(d.titleN)) score += 8;
      else if (d.titleN.includes(t)) score += 5;
      else if (d.bodyN.includes(t)) score += 1;
      else {
        all = false;
        break;
      }
    }
    if (all) scored.push({ d, score: score + KIND_BOOST[d.kind] });
  }
  return scored
    .sort((a, b) => b.score - a.score || a.d.title.localeCompare(b.d.title))
    .slice(0, limit)
    .map((s) => s.d);
}
