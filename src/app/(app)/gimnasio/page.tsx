import Link from 'next/link';
import { PRACTICES, totalDurationSec } from '@/domain/practices';
import { FAMILY_LABEL, SKILL_LABEL } from '@/domain/evidence';
import { EvidenceBadge } from '@/components/ui/EvidencePanel';
import { Stagger, StaggerItem } from '@/components/motion/Reveal';
import type { PracticeFamily } from '@/domain/types';
import { LEVEL_LABEL, levelOf } from '@/domain/levels';
import { isPublished } from '@/domain/governance';

const VISIBLE = PRACTICES.filter((p) => isPublished('practica', p.id));

const FAMILY_DESCRIPTION: Record<PracticeFamily, string> = {
  attentional: 'Regulan la atención y entrenan la capacidad de notar a dónde va la mente.',
  constructive: 'Cultivan deliberadamente cualidades: benevolencia, gratitud, sentido.',
  deconstructive: 'Aflojan la identificación con pensamientos y relatos sobre uno mismo.',
};

export default function GymPage() {
  const families = Object.keys(FAMILY_LABEL) as PracticeFamily[];
  return (
    <Stagger step={0.05}>
      <StaggerItem as="header">
        <h1 className="font-serif text-4xl text-stone-800 sm:text-5xl">Gimnasio mental</h1>
        <p className="mt-3 max-w-2xl leading-relaxed text-stone-600">
          Organizado según las tres familias de práctica de Dahl, Lutz y Davidson (2015). Alternar familias a lo
          largo de la semana entrena procesos complementarios.
        </p>
      </StaggerItem>

      <StaggerItem as="section" className="mt-10" aria-labelledby="rapidas">
        <h2 id="rapidas" className="text-xs uppercase tracking-[0.2em] text-stone-600">
          Herramientas rápidas · 1 a 3 minutos
        </h2>
        <p className="mt-1 text-sm text-stone-600">Para usar en el momento: entre tareas, antes de una conversación difícil, cuando la emoción sube.</p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {VISIBLE.filter((p) => p.micro).map((p) => (
            <li key={p.id}>
              <Link
                href={`/gimnasio/${p.id}`}
                className="group flex h-full flex-col rounded-2xl border border-sage-200 bg-sage-50 p-4 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-sage-300 hover:shadow-soft"
              >
                <span className="font-serif text-[17px] leading-snug text-stone-800">{p.title}</span>
                <span className="mt-auto pt-3 text-xs tabular-nums text-sage-800">{Math.max(1, Math.round(totalDurationSec(p.steps) / 60))} min</span>
              </Link>
            </li>
          ))}
        </ul>
      </StaggerItem>

      <StaggerItem className="mt-10">
        <Link
          href="/gimnasio/temporizador"
          className="group flex items-center justify-between gap-6 rounded-2xl border border-stone-200 bg-white px-6 py-5 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-sage-300 hover:shadow-lift"
        >
          <span>
            <span className="block font-serif text-lg text-stone-800">Temporizador libre</span>
            <span className="mt-1 block text-sm text-stone-600">Práctica sin guía, con campanas de intervalo. Para cuando ya sabes qué hacer.</span>
          </span>
          <span className="shrink-0 text-stone-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-sage-600" aria-hidden>
            →
          </span>
        </Link>
      </StaggerItem>

      {families.map((family, f) => (
        <StaggerItem as="section" key={family} className="mt-14">
          <div className="flex items-baseline gap-3">
            <span aria-hidden className="font-serif text-sm tabular-nums text-stone-500">0{f + 1}</span>
            <h2 className="text-xs uppercase tracking-[0.2em] text-stone-600">{FAMILY_LABEL[family]}</h2>
          </div>
          <p className="mt-1 text-sm text-stone-600">{FAMILY_DESCRIPTION[family]}</p>
          <Stagger as="ul" step={0.06} delay={0.1 + f * 0.08} className="mt-5 grid gap-4 sm:grid-cols-2">
            {VISIBLE.filter((p) => p.family === family && !p.micro).map((p) => (
              <StaggerItem as="li" key={p.id}>
                <Link
                  href={`/gimnasio/${p.id}`}
                  className="group flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-5 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:border-sage-300 hover:shadow-lift active:scale-[0.99]"
                >
                  <span className="flex items-start justify-between gap-4">
                    <span className="font-serif text-lg text-stone-800">{p.title}</span>
                    <span className="mt-1 shrink-0 text-stone-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-sage-600" aria-hidden>
                      →
                    </span>
                  </span>
                  <span className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">{p.summary}</span>
                  <span className="mt-5 flex items-center justify-between gap-3 border-t border-stone-100 pt-4 text-xs text-stone-500">
                    <span>
                      {Math.round(totalDurationSec(p.steps) / 60)} min · {p.skills.map((s) => SKILL_LABEL[s]).join(', ')}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="rounded-full px-2 py-0.5 ring-1 ring-stone-200">{LEVEL_LABEL[levelOf(p.id).level]}</span>
                      <EvidenceBadge level={p.evidenceLevel} />
                    </span>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
