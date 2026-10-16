import Link from 'next/link';
import { ARTICLES, type ArticleCategory } from '@/domain/library';
import { Stagger, StaggerItem } from '@/components/motion/Reveal';
import { isPublished } from '@/domain/governance';
import { GLOSSARY } from '@/domain/glossary';
import { EMOTION_FAMILIES } from '@/domain/emotions';
import { PILLS } from '@/domain/pills';

const VISIBLE = ARTICLES.filter((a) => isPublished('articulo', a.id));
const VISIBLE_PILLS = PILLS.filter((p) => isPublished('pildora', p.id));

const CATEGORY_ORDER: ArticleCategory[] = [
  'Fundamentos',
  'Neurociencia contemplativa',
  'Psicología positiva',
  'Terapias contextuales',
  'Humanismo y existencialismo',
  'Hábitos y cuerpo',
  'Relaciones',
  'Terapias breves e integrativas',
  'Autoconocimiento y patrones',
  'Etapas de la vida',
  'Salud y trabajo',
  'Uso responsable',
];

export default function LibraryPage() {
  const totalMin = VISIBLE.reduce((s, a) => s + a.readingMin, 0);
  return (
    <Stagger step={0.05}>
      <StaggerItem as="header" className="max-w-2xl">
        <h1 className="font-serif text-4xl text-stone-800 sm:text-5xl">Biblioteca</h1>
        <p className="mt-3 leading-relaxed text-stone-600">
          Los fundamentos de cada práctica, en lenguaje claro y con sus referencias. Incluye lo que la ciencia respalda,
          lo que todavía no sabemos y algunos mitos que conviene abandonar.
        </p>
        <p className="mt-4 text-sm text-stone-500">
          {VISIBLE.length} artículos · {totalMin} minutos de lectura
        </p>
      </StaggerItem>

      {VISIBLE_PILLS.length > 0 && (
        <StaggerItem className="mt-8">
          <Link
            href="/biblioteca/pildoras"
            className="group flex items-center justify-between gap-6 rounded-2xl border border-sage-200 bg-sage-50 px-6 py-4 transition-[border-color,box-shadow] hover:border-sage-300 hover:shadow-soft"
          >
            <span>
              <span className="block font-serif text-lg text-stone-800">Píldoras</span>
              <span className="block text-sm text-stone-600">{VISIBLE_PILLS.length} ideas clave en tarjetas, para leer en un minuto</span>
            </span>
            <span className="text-stone-500 transition-transform group-hover:translate-x-0.5" aria-hidden>
              →
            </span>
          </Link>
        </StaggerItem>
      )}

      <StaggerItem className={VISIBLE_PILLS.length > 0 ? 'mt-3' : 'mt-8'}>
        <Link
          href="/biblioteca/glosario"
          className="group flex items-center justify-between gap-6 rounded-2xl border border-stone-200 bg-white px-6 py-4 transition-[border-color,box-shadow] hover:border-sage-300 hover:shadow-soft"
        >
          <span>
            <span className="block font-serif text-lg text-stone-800">Glosario</span>
            <span className="block text-sm text-stone-600">{GLOSSARY.length} términos explicados en lenguaje claro</span>
          </span>
          <span className="text-stone-500 transition-transform group-hover:translate-x-0.5" aria-hidden>
            →
          </span>
        </Link>
      </StaggerItem>

      <StaggerItem className="mt-3">
        <Link
          href="/biblioteca/trampas-del-pensamiento"
          className="group flex items-center justify-between gap-6 rounded-2xl border border-stone-200 bg-white px-6 py-4 transition-[border-color,box-shadow] hover:border-sage-300 hover:shadow-soft"
        >
          <span>
            <span className="block font-serif text-lg text-stone-800">Trampas del pensamiento</span>
            <span className="block text-sm text-stone-600">12 distorsiones habituales, con ejemplos y cómo desmontarlas</span>
          </span>
          <span className="text-stone-500 transition-transform group-hover:translate-x-0.5" aria-hidden>
            →
          </span>
        </Link>
      </StaggerItem>

      <StaggerItem className="mt-3">
        <Link
          href="/biblioteca/rueda-de-emociones"
          className="group flex items-center justify-between gap-6 rounded-2xl border border-stone-200 bg-white px-6 py-4 transition-[border-color,box-shadow] hover:border-sage-300 hover:shadow-soft"
        >
          <span>
            <span className="block font-serif text-lg text-stone-800">Rueda de emociones</span>
            <span className="block text-sm text-stone-600">{EMOTION_FAMILIES.length} familias de emociones, con sus matices y qué hacer con cada una</span>
          </span>
          <span className="text-stone-500 transition-transform group-hover:translate-x-0.5" aria-hidden>
            →
          </span>
        </Link>
      </StaggerItem>

      {CATEGORY_ORDER.map((category, ci) => {
        const items = VISIBLE.filter((a) => a.category === category);
        if (!items.length) return null;
        return (
          <StaggerItem as="section" key={category} className="mt-14">
            <h2 className="text-xs uppercase tracking-[0.2em] text-stone-600">{category}</h2>
            <Stagger as="ul" step={0.06} delay={0.1 + ci * 0.06} className="mt-5 grid gap-4 md:grid-cols-2">
              {items.map((a) => (
                <StaggerItem as="li" key={a.id}>
                  <Link
                    href={`/biblioteca/${a.id}`}
                    className="group flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:border-sage-300 hover:shadow-lift"
                  >
                    <span className="font-serif text-xl text-stone-800">{a.title}</span>
                    <span className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">{a.subtitle}</span>
                    <span className="mt-5 flex items-center justify-between text-xs text-stone-500">
                      <span>{a.readingMin} min de lectura</span>
                      <span className="text-sage-700 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                        Leer →
                      </span>
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
