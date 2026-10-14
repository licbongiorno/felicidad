'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { useLatestJournal } from '@/hooks/useLatestJournal';
import { TEMPLATE_BY_TYPE } from '@/domain/journal';
import { isPublished, reviewOf, REVIEW_LABEL } from '@/domain/governance';
import { useProgressStore } from '@/store/useProgressStore';
import { fadeUp, stagger } from '@/lib/motion';
import { haptic } from '@/lib/haptics';
import { CrisisResources } from '@/components/safety/CrisisResources';
import { Button, buttonStyles } from '@/components/ui/Button';
import { DrawnCheck } from '@/components/motion/Reveal';

const DATE = new Intl.DateTimeFormat('es', { day: 'numeric', month: 'long', year: 'numeric' });

/** Orientación breve para cada paso del modelo de Stanley y Brown. */
const GUIDANCE: Record<string, string> = {
  senales: 'Pensamientos, emociones, situaciones o conductas que anuncian que se acerca una crisis.',
  estrategias: 'Cosas que puedes hacer por tu cuenta para distraerte o calmarte: caminar, una ducha, música, una práctica de respiración.',
  distraccion: 'Personas o lugares (un café, la casa de alguien, un parque) que te ayudan a no estar a solas con el malestar.',
  ayuda: 'Personas de confianza a quienes puedes decirles que lo estás pasando mal. Anota su teléfono.',
  profesionales: 'Tu terapeuta, tu médico, servicios de urgencias y líneas de ayuda, con sus teléfonos.',
  entorno: 'Cómo alejar o limitar el acceso a medios con los que podrías hacerte daño, por ejemplo pidiendo a alguien que los guarde.',
  razones: 'Lo que te importa y te sostiene: personas, proyectos, valores, cosas que quieres vivir.',
};

/**
 * Plan de seguridad personal (Stanley y Brown, 2012/2018). Contenido sensible: estado
 * "borrador" hasta que el equipo clínico lo apruebe en governance.ts. Se guarda como
 * versiones sucesivas en el diario (append-only); la última es el plan vigente.
 */
export function SafetyPlan() {
  const template = TEMPLATE_BY_TYPE['plan-seguridad'];
  const review = reviewOf('herramienta', 'plan-seguridad');
  const status = useProgressStore((s) => s.status);
  const logJournal = useProgressStore((s) => s.logJournal);
  // La versión vigente aunque tenga más de 90 días (la ventana del store no la alcanzaría).
  const { loaded: latestLoaded, latest } = useLatestJournal('plan-seguridad');

  const [values, setValues] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState(false);
  const loaded = useRef(false);

  // Prellenar con la última versión cuando llegan los datos.
  useEffect(() => {
    if (loaded.current || status !== 'ready' || !latestLoaded) return;
    loaded.current = true;
    if (latest) setValues(Object.fromEntries(Object.entries(latest.values).map(([k, v]) => [k, String(v)])));
  }, [latest, latestLoaded, status]);

  if (!isPublished('herramienta', 'plan-seguridad')) {
    return (
      <section className="mx-auto max-w-xl py-16 text-center">
        <h1 className="font-serif text-3xl text-stone-800">Sección no disponible</h1>
        <p className="mt-3 text-stone-600">Esta herramienta está en revisión clínica.</p>
      </section>
    );
  }

  const hasContent = Object.values(values).some((v) => v.trim());

  function save() {
    const clean = Object.fromEntries(Object.entries(values).filter(([, v]) => v.trim()).map(([k, v]) => [k, v.trim()]));
    logJournal({ type: 'plan-seguridad', values: clean });
    haptic('success');
    setSaved(true);
  }

  return (
    <m.div variants={stagger(0.06)} initial="hidden" animate="show" className="mx-auto max-w-2xl">
      <m.header variants={fadeUp} className="print:hidden">
        {review.status === 'borrador' && (
          <p className="mb-4 inline-block rounded-full bg-stone-800 px-3 py-1 text-xs text-stone-50">{REVIEW_LABEL.borrador}</p>
        )}
        <h1 className="font-serif text-4xl text-stone-800 sm:text-5xl">Mi plan de seguridad</h1>
        <p className="mt-3 leading-relaxed text-stone-600">
          Un plan escrito en calma para los momentos difíciles. Lo ideal es hacerlo con tu terapeuta. Cuando lo necesites,
          recórrelo paso a paso: si un paso no basta, pasa al siguiente.
        </p>
        {latest && <p className="mt-2 text-sm text-stone-500">Última versión guardada: {DATE.format(latest.createdAt)}</p>}
      </m.header>

      <m.section variants={fadeUp} aria-label="Ayuda inmediata" className="mt-8 rounded-2xl border border-stone-300 bg-white p-5">
        <p className="text-sm font-medium text-stone-800">Si estás en peligro inmediato</p>
        <CrisisResources className="mt-2" />
      </m.section>

      <m.ol variants={fadeUp} className="mt-8 space-y-6">
        {template.fields.map((f, i) => (
          <li key={f.id} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-soft print:break-inside-avoid print:shadow-none">
            <label className="block">
              <span className="flex items-baseline gap-3">
                <span className="font-serif text-lg tabular-nums text-sage-700">{i + 1}</span>
                <span className="font-serif text-lg text-stone-800">{f.label}</span>
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-stone-600">{GUIDANCE[f.id]}</span>
              <textarea
                value={values[f.id] ?? ''}
                onChange={(e) => {
                  setSaved(false);
                  setValues((v) => ({ ...v, [f.id]: e.target.value }));
                }}
                rows={3}
                maxLength={8000}
                className="mt-3 w-full resize-y rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-[15px] leading-relaxed text-stone-800 focus:border-sage-400 focus:bg-white focus:outline-none print:border-0 print:bg-white print:p-0"
              />
            </label>
          </li>
        ))}
      </m.ol>

      <m.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <p className="text-xs text-stone-500">Cada vez que guardas se crea una versión nueva; la última es tu plan vigente.</p>
        <div className="flex items-center gap-3">
          {saved && (
            <span className="flex items-center gap-2 text-sm text-sage-700">
              <DrawnCheck className="h-5 w-5" /> Guardado
            </span>
          )}
          <Button variant="secondary" onClick={() => window.print()} disabled={!hasContent}>
            Imprimir
          </Button>
          <Button onClick={save} disabled={!hasContent}>
            Guardar plan
          </Button>
        </div>
      </m.div>

      <m.p variants={fadeUp} className="mt-10 text-xs leading-relaxed text-stone-500 print:hidden">
        Basado en la intervención de planificación de seguridad de Stanley y Brown.{' '}
        <Link href="/biblioteca/practica-segura" className={buttonStyles('ghost', 'px-2 py-1 text-xs')}>
          Práctica segura y cuándo pedir ayuda
        </Link>
      </m.p>
    </m.div>
  );
}
