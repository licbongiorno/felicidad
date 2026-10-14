'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { DBT_MODULE_LABEL, GARDEN_MILESTONES, MASTERY_HINT, MASTERY_LABEL, SPECIES, skillHref, STAGES_PER_PLANT, type DbtModule } from '@/domain/growth';
import { fadeUp, stagger } from '@/lib/motion';
import { useGrowth } from '@/hooks/useGrowth';
import { CountUp } from '@/components/motion/Reveal';
import { Garden } from './Garden';
import { SkillMedal } from './SkillIcons';
import { WeeklyChallenge } from './WeeklyChallenge';

const MODULES: DbtModule[] = ['conciencia', 'malestar', 'regulacion', 'interpersonal'];

const SPECIES_SWATCH = { attentional: 'bg-garden-leaf-deep', constructive: 'bg-garden-petal-a', deconstructive: 'bg-garden-trunk' } as const;

export function GrowthPage() {
  const { ready, garden, month, skills, counts } = useGrowth();
  const discovered = skills.filter((s) => s.level > 0).length;

  return (
    <m.div variants={stagger(0.07)} initial="hidden" animate="show" className="mx-auto max-w-5xl">
      <m.header variants={fadeUp}>
        <h1 className="font-serif text-4xl text-stone-800 sm:text-5xl">Tu jardín</h1>
        <p className="mt-3 max-w-2xl leading-relaxed text-stone-600">
          Cada práctica completa hace crecer algo. Nada se marchita: si un día no practicas, tu jardín te espera igual que lo dejaste.
        </p>
      </m.header>

      {/* Jardín ------------------------------------------------------------------- */}
      <m.section variants={fadeUp} className="mt-8 overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-lift">
        <div className="aspect-[4/3] w-full sm:aspect-[2/1]">{ready && <Garden garden={garden} />}</div>
        <div className="grid gap-6 border-t border-stone-100 p-6 sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Este mes</p>
            <p className="mt-2 font-serif text-4xl text-stone-800">
              <CountUp value={month.days} /> <span className="text-xl text-stone-500">{month.days === 1 ? 'día' : 'días'}</span>
            </p>
            <p className="mt-1 text-sm text-stone-600">con práctica o diario en {month.monthLabel}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Cultivado</p>
            <p className="mt-2 font-serif text-4xl text-stone-800">
              <CountUp value={garden.total} /> <span className="text-xl text-stone-500">{garden.total === 1 ? 'práctica' : 'prácticas'}</span>
            </p>
            <p className="mt-1 text-sm text-stone-600">{counts.journalTotal} entradas del diario, una luciérnaga cada una</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Próximo en aparecer</p>
            {garden.next ? (
              <>
                <p className="mt-2 font-serif text-2xl text-stone-800">{garden.next.title}</p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-stone-100" aria-hidden>
                  <m.div
                    className="h-full rounded-full bg-sage-500"
                    style={{ originX: 0 }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: garden.total / garden.next.at }}
                    transition={{ duration: 1, delay: 0.4 }}
                  />
                </div>
                <p className="mt-2 text-sm text-stone-600">
                  {garden.next.at - garden.total} {garden.next.at - garden.total === 1 ? 'práctica más' : 'prácticas más'}
                </p>
              </>
            ) : (
              <p className="mt-2 font-serif text-2xl text-stone-800">Tu jardín está maduro</p>
            )}
          </div>
        </div>
      </m.section>

      {/* Especies ----------------------------------------------------------------- */}
      <m.section variants={fadeUp} className="mt-6 grid gap-4 sm:grid-cols-3" aria-label="Qué crece en tu jardín">
        {(Object.keys(SPECIES) as (keyof typeof SPECIES)[]).map((f) => {
          const units = counts.families[f];
          const sp = SPECIES[f];
          return (
            <div key={f} className="rounded-2xl border border-stone-200/80 bg-white p-5 shadow-soft">
              <p className="flex items-center gap-2 text-sm font-medium text-stone-800">
                <span className={`h-2.5 w-2.5 rounded-full ${SPECIES_SWATCH[f]}`} aria-hidden />
                {sp.plural.charAt(0).toUpperCase() + sp.plural.slice(1)} · {sp.skill}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {units === 0
                  ? `Las prácticas de ${sp.skill} plantan ${sp.plural}.`
                  : `${units} ${units === 1 ? 'práctica' : 'prácticas'}. Cada ${f === 'constructive' ? 'flor' : sp.name} llega a su plenitud en ${STAGES_PER_PLANT}.`}
              </p>
            </div>
          );
        })}
      </m.section>

      <m.div variants={fadeUp} className="mt-6">
        <WeeklyChallenge />
      </m.div>

      {/* Colección DBT -------------------------------------------------------------- */}
      <m.section variants={fadeUp} className="mt-14" aria-labelledby="coleccion">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="coleccion" className="font-serif text-3xl text-stone-800">
              Habilidades DBT
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-600">
              Una habilidad se aprende en cuatro pasos: descubrirla, practicarla, aplicarla en tu vida e integrarla. El anillo muestra
              el paso en el que está cada una. Para aplicarla, cuéntalo en «Revisar» después de usarla fuera de la pantalla.
            </p>
          </div>
          <p className="text-sm text-stone-500">
            <span className="font-serif text-2xl tabular-nums text-stone-700">{discovered}</span> de {skills.length} descubiertas
          </p>
        </div>

        <div className="mt-8 space-y-10">
          {MODULES.map((mod) => (
            <div key={mod}>
              <h3 className="text-xs uppercase tracking-[0.2em] text-stone-500">{DBT_MODULE_LABEL[mod]}</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {skills
                  .filter((s) => s.skill.module === mod)
                  .map(({ skill, level, uses, applied, useful }) => (
                    <li key={skill.id}>
                      <Link
                        href={skillHref(skill)}
                        className="group flex items-center gap-4 rounded-2xl border border-stone-200/80 bg-white p-4 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-sage-300 hover:shadow-lift"
                      >
                        <SkillMedal skillId={skill.id} level={level} />
                        <span className="min-w-0">
                          <span className="block font-serif text-lg text-stone-800">{skill.title}</span>
                          <span className={`block text-xs uppercase tracking-[0.14em] ${level ? 'text-sage-700' : 'text-stone-500'}`}>{MASTERY_LABEL[level]}</span>
                          <span className="mt-1 block text-xs text-stone-500">
                            {level > 0 && `${uses} ${uses === 1 ? 'práctica' : 'prácticas'}${applied ? ` · ${applied} en tu vida${useful ? ` (${useful} útil${useful === 1 ? '' : 'es'})` : ''}` : ''} · `}
                            {MASTERY_HINT[level]}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </m.section>

      {/* Hitos ---------------------------------------------------------------------- */}
      <m.section variants={fadeUp} className="mt-14" aria-labelledby="hitos">
        <h2 id="hitos" className="font-serif text-3xl text-stone-800">
          Lo que fue apareciendo
        </h2>
        <ol className="mt-6 grid gap-3 sm:grid-cols-2">
          {GARDEN_MILESTONES.map((ms) => {
            const done = garden.total >= ms.at;
            const isNext = garden.next?.at === ms.at;
            if (!done && !isNext) return null;
            return (
              <li key={ms.at} className={`rounded-2xl border p-5 ${done ? 'border-stone-200/80 bg-white shadow-soft' : 'border-dashed border-stone-300 bg-stone-50/60'}`}>
                <p className="text-xs uppercase tracking-[0.14em] text-stone-500">{done ? `A las ${ms.at} ${ms.at === 1 ? 'práctica' : 'prácticas'}` : 'Próximamente'}</p>
                <p className="mt-1 font-serif text-xl text-stone-800">{ms.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">{done ? ms.body : `Aparecerá con ${ms.at - garden.total} prácticas más.`}</p>
              </li>
            );
          })}
        </ol>
      </m.section>

      <m.aside variants={fadeUp} className="mt-14 rounded-2xl bg-stone-100/70 p-6 text-sm leading-relaxed text-stone-600">
        <p className="font-medium text-stone-800">Cómo funciona tu jardín</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Crece con la práctica, no con cómo te sientes: los días difíciles también cuentan.</li>
          <li>Nunca se marchita ni retrocede. No hay rachas que se rompan ni nada que perder.</li>
          <li>No hay puntos ni comparación con otras personas: es sólo tuyo.</li>
          <li>Si un día no tienes ganas, descansar también es cuidarte.</li>
        </ul>
      </m.aside>
    </m.div>
  );
}
