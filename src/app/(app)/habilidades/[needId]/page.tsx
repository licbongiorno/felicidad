import Link from 'next/link';
import { notFound } from 'next/navigation';
import { NEEDS, NEED_BY_ID } from '@/domain/needs';
import { PROGRAMS } from '@/domain/programs';
import { PILLS, type Pill } from '@/domain/pills';
import { isPublished } from '@/domain/governance';
import { Stagger, StaggerItem } from '@/components/motion/Reveal';
import { SkillCard } from '@/components/skills/SkillCard';

export function generateStaticParams() {
  return NEEDS.map((n) => ({ needId: n.id }));
}

export default async function NeedPage({ params }: { params: Promise<{ needId: string }> }) {
  const { needId } = await params;
  const need = NEED_BY_ID[needId];
  if (!need) notFound();
  const practices = need.practices.filter((id) => isPublished('practica', id));
  const programs = need.programs.map((id) => PROGRAMS.find((p) => p.id === id)).filter((p) => !!p);
  const pills = (need.pills ?? []).map((id) => PILLS.find((p) => p.id === id)).filter((p): p is Pill => !!p && isPublished('pildora', p.id));

  return (
    <Stagger step={0.05}>
      <StaggerItem>
        <Link href="/habilidades" className="group inline-flex items-center gap-1.5 text-sm text-stone-500 transition-colors hover:text-stone-700">
          <span className="transition-transform duration-300 group-hover:-translate-x-0.5">←</span> Mapa de habilidades
        </Link>
      </StaggerItem>
      <StaggerItem as="header" className="mt-8 max-w-2xl">
        <h1 className="font-serif text-4xl leading-tight text-stone-800 sm:text-5xl">{need.title}</h1>
        <p className="mt-3 leading-relaxed text-stone-600">{need.description}</p>
        <p className="mt-5 rounded-2xl bg-sage-50 px-5 py-4 text-[15px] leading-relaxed text-stone-700">
          <span className="font-medium text-stone-800">Qué vas a aprender. </span>
          {need.objective}
        </p>
      </StaggerItem>

      <StaggerItem as="section" className="mt-10" aria-labelledby="practicas">
        <h2 id="practicas" className="text-xs uppercase tracking-[0.2em] text-stone-600">
          Habilidades
        </h2>
        <p className="mt-2 text-sm text-stone-600">Ordenadas de la más sencilla a la que pide más práctica. Prueba una y fíjate si te sirve.</p>
        <ul className="mt-5 grid gap-4 md:grid-cols-2">
          {practices.map((id, i) => (
            <li key={id}>
              <SkillCard practiceId={id} first={i === 0} />
            </li>
          ))}
        </ul>
      </StaggerItem>

      {(programs.length > 0 || pills.length > 0) && (
        <StaggerItem as="section" className="mt-12" aria-labelledby="para-seguir">
          <h2 id="para-seguir" className="text-xs uppercase tracking-[0.2em] text-stone-600">
            Para seguir
          </h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {programs.map((p) => (
              <li key={p.id}>
                <Link href={`/programas/${p.id}`} className="flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-5 transition-colors hover:border-sage-300">
                  <span className="text-xs uppercase tracking-wider text-stone-500">Programa · {p.weeks.length} semanas</span>
                  <span className="mt-1 font-serif text-lg text-stone-800">{p.title}</span>
                  <span className="mt-1 text-sm text-stone-600">{p.subtitle}</span>
                </Link>
              </li>
            ))}
            {pills.map((p) => (
              <li key={p.id}>
                <Link href={`/biblioteca/pildoras/${p.id}`} className="flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-5 transition-colors hover:border-sage-300">
                  <span className="text-xs uppercase tracking-wider text-stone-500">Píldora · {p.slides.length} tarjetas</span>
                  <span className="mt-1 font-serif text-lg text-stone-800">{p.title}</span>
                  <span className="mt-1 text-sm text-stone-600">{p.subtitle}</span>
                </Link>
              </li>
            ))}
          </ul>
        </StaggerItem>
      )}
    </Stagger>
  );
}
