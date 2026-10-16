'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { useEffect, useState } from 'react';
import { ZONES, type Zone } from '@/domain/lab';
import { PRACTICE_INDEX as PRACTICES } from '@/domain/practiceIndex';
import { isPublished } from '@/domain/governance';
import { useProgressStore } from '@/store/useProgressStore';
import { fadeUp, stagger } from '@/lib/motion';
import { haptic } from '@/lib/haptics';
import { Button } from '@/components/ui/Button';
import { EMPTY_TOOLBOX, toValues, useToolbox, type Toolbox as ToolboxData } from './useToolbox';
import { ZoneDot } from './Semaphore';

const DATE = new Intl.DateTimeFormat('es', { day: 'numeric', month: 'long', year: 'numeric' });

/** Prácticas que tiene sentido llevar en la caja: herramientas rápidas y prácticas breves de regulación. */
const CANDIDATES = PRACTICES.filter((p) => isPublished('practica', p.id) && (p.micro || ['comprobar-hechos', 'mente-sabia', 'pausa-autocompasion', 'respiracion-resonante', 'suspiro-ciclico', 'accion-opuesta', 'pros-y-contras'].includes(p.id)));

const textarea =
  'w-full rounded-xl border border-stone-200 bg-stone-50/60 px-4 py-3 text-[15px] leading-relaxed text-stone-800 placeholder:text-stone-500 focus:border-sage-400 focus:bg-white focus:outline-none';

/**
 * Mi caja de herramientas: qué hacer en cada zona del semáforo, preparado en calma.
 * Se guarda como entrada del diario (versiones sucesivas; la última es la vigente).
 */
export function Toolbox() {
  const { loaded, entry, toolbox } = useToolbox();
  const logJournal = useProgressStore((s) => s.logJournal);
  const [draft, setDraft] = useState<ToolboxData>(EMPTY_TOOLBOX);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (loaded) setDraft(toolbox);
  }, [loaded, toolbox]);

  const toggle = (zone: Zone, id: string) =>
    setDraft((d) => {
      const has = d.practices[zone].includes(id);
      return { ...d, practices: { ...d.practices, [zone]: has ? d.practices[zone].filter((x) => x !== id) : [...d.practices[zone], id] } };
    });

  function save() {
    logJournal({ type: 'caja-herramientas', values: toValues(draft) });
    haptic('success');
    setSaved(true);
  }

  return (
    <m.div variants={stagger(0.06)} initial="hidden" animate="show" className="mx-auto max-w-2xl">
      <m.header variants={fadeUp}>
        <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Laboratorio</p>
        <h1 className="mt-2 font-serif text-4xl text-stone-800">Mi caja de herramientas</h1>
        <p className="mt-4 leading-relaxed text-stone-600">
          En plena crisis cuesta pensar qué hacer. Prepáralo ahora, en calma: qué te avisa de que la emoción sube y qué te ayuda en cada
          zona del semáforo. Aparecerá en el semáforo emocional cuando lo necesites.
        </p>
        {entry && <p className="mt-2 text-sm text-stone-500">Última versión: {DATE.format(entry.createdAt)}</p>}
      </m.header>

      {ZONES.map((z) => (
        <m.section key={z.zone} variants={fadeUp} className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-soft" aria-labelledby={`z-${z.zone}`}>
          <h2 id={`z-${z.zone}`} className="flex items-center gap-3 font-serif text-2xl text-stone-800">
            <ZoneDot zone={z.zone} />
            {z.title}
          </h2>
          <p className="mt-1 text-sm text-stone-600">
            Intensidad {z.range[0]}–{z.range[1]}. {z.meaning}
          </p>

          {z.zone !== 'verde' && (
            <label className="mt-5 block">
              <span className="mb-1.5 block text-sm text-stone-700">Mis señales de que estoy en esta zona</span>
              <textarea
                rows={2}
                value={draft.signals[z.zone]}
                onChange={(e) => setDraft((d) => ({ ...d, signals: { ...d.signals, [z.zone]: e.target.value.slice(0, 2000) } }))}
                placeholder={z.zone === 'amarillo' ? 'Ej.: Aprieto la mandíbula, hablo más rápido' : 'Ej.: No puedo pensar, quiero romper algo'}
                className={textarea}
              />
            </label>
          )}

          <fieldset className="mt-5">
            <legend className="mb-2 text-sm text-stone-700">Prácticas que me sirven</legend>
            <div className="flex flex-wrap gap-2">
              {CANDIDATES.map((p) => {
                const on = draft.practices[z.zone].includes(p.id);
                return (
                  <button
                    key={p.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(z.zone, p.id)}
                    className={`rounded-full px-3 py-1.5 text-sm ring-1 ring-inset transition-colors ${on ? 'bg-sage-700 text-stone-50 ring-sage-700' : 'bg-white text-stone-700 ring-stone-200 hover:ring-stone-300'}`}
                  >
                    {p.title.split(':')[0]}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <label className="mt-5 block">
            <span className="mb-1.5 block text-sm text-stone-700">Otras cosas que me ayudan</span>
            <textarea
              rows={2}
              value={draft.own[z.zone]}
              onChange={(e) => setDraft((d) => ({ ...d, own: { ...d.own, [z.zone]: e.target.value.slice(0, 2000) } }))}
              placeholder="Ej.: Salir a caminar, darme una ducha, escuchar una canción"
              className={textarea}
            />
          </label>
        </m.section>
      ))}

      <m.section variants={fadeUp} className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
        <label className="block">
          <span className="mb-1.5 block text-sm text-stone-700">Personas a las que puedo recurrir (con teléfono)</span>
          <textarea rows={2} value={draft.personas} onChange={(e) => setDraft((d) => ({ ...d, personas: e.target.value.slice(0, 2000) }))} className={textarea} />
        </label>
        <label className="mt-5 block">
          <span className="mb-1.5 block text-sm text-stone-700">Frases que me ayudan</span>
          <textarea
            rows={2}
            value={draft.frases}
            onChange={(e) => setDraft((d) => ({ ...d, frases: e.target.value.slice(0, 2000) }))}
            placeholder="Ej.: Esto es intenso, pero va a pasar"
            className={textarea}
          />
        </label>
      </m.section>

      <m.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <Link href="/laboratorio/semaforo" className="text-sm text-sage-700 underline decoration-sage-300 underline-offset-2">
          Ver mi semáforo emocional
        </Link>
        <div className="flex items-center gap-4">
          {saved && (
            <p role="status" className="text-sm text-sage-700">
              Guardada.
            </p>
          )}
          <Button onClick={save}>Guardar mi caja</Button>
        </div>
      </m.div>
      <m.p variants={fadeUp} className="mt-6 text-xs leading-relaxed text-stone-500">
        Para una crisis con riesgo, tu plan de seguridad y el botón «Ayuda» son lo primero. La caja es para atravesar el malestar
        cotidiano. {draft.practices.rojo.length === 0 && 'En la zona roja suelen servir TIPP y los cinco sentidos.'}
      </m.p>
    </m.div>
  );
}
