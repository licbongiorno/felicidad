'use client';

import Link from 'next/link';
import { AnimatePresence, m } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { isComplete, MAX_TEXT, MAX_TEXTAREA, type JournalField, type JournalTemplate } from '@/domain/journal';
import type { JournalValue } from '@/domain/types';
import { useProgressStore } from '@/store/useProgressStore';
import { collapse, fadeUp, stagger } from '@/lib/motion';
import { haptic } from '@/lib/haptics';
import { playChime } from '@/lib/chime';
import { formatClock } from '@/hooks/useGuidedTimer';
import { Button } from '@/components/ui/Button';
import { IntensityScale } from '@/components/ui/IntensityScale';
import { EvidencePanel } from '@/components/ui/EvidencePanel';
import { journalRisk } from '@/domain/catalog';

interface Props {
  template: JournalTemplate;
  onSaved: () => void;
  onCancel: () => void;
  /** Valores iniciales para campos de texto (p. ej. un experimento propuesto desde un patrón). */
  initialValues?: Record<string, string>;
}

export function JournalEditor({ template, onSaved, onCancel, initialValues }: Props) {
  const logJournal = useProgressStore((s) => s.logJournal);
  const draftKey = `eudaimonia-draft-${template.type}`;
  const [values, setValues] = useState<Record<string, JournalValue | undefined>>({});
  const [restored, setRestored] = useState(false);
  const [confirmLeave, setConfirmLeave] = useState(false);
  const complete = isComplete(template, values);
  const dirty = Object.values(values).some((v) => (typeof v === 'string' ? v.trim() !== '' : v !== undefined));

  // Borrador en sessionStorage: sobrevive a una recarga, pero se borra al cerrar la pestaña
  // (texto sensible: no debe quedar indefinidamente en el dispositivo).
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(draftKey);
      if (raw) {
        setValues(JSON.parse(raw));
        setRestored(true);
        return;
      }
    } catch {
      /* sin almacenamiento de sesión */
    }
    if (initialValues) {
      const textIds = new Set(template.fields.filter((f) => f.kind === 'text').map((f) => f.id));
      setValues(Object.fromEntries(Object.entries(initialValues).filter(([k, v]) => textIds.has(k) && v.trim()).map(([k, v]) => [k, v.slice(0, MAX_TEXT)])));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draftKey]);

  useEffect(() => {
    const t = window.setTimeout(() => {
      try {
        if (dirty) sessionStorage.setItem(draftKey, JSON.stringify(values));
        else sessionStorage.removeItem(draftKey);
      } catch {
        /* sin almacenamiento de sesión */
      }
    }, 400);
    return () => window.clearTimeout(t);
  }, [values, dirty, draftKey]);

  // Aviso del navegador al cerrar o recargar con cambios sin guardar.
  useEffect(() => {
    if (!dirty) return;
    const onBeforeUnload = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener('beforeunload', onBeforeUnload);
    return () => window.removeEventListener('beforeunload', onBeforeUnload);
  }, [dirty]);

  function clearDraft() {
    try {
      sessionStorage.removeItem(draftKey);
    } catch {
      /* sin almacenamiento de sesión */
    }
  }

  function leave() {
    if (dirty && !confirmLeave) return setConfirmLeave(true);
    clearDraft();
    onCancel();
  }

  function set(id: string, v: JournalValue) {
    setConfirmLeave(false);
    setValues((prev) => ({ ...prev, [id]: v }));
  }

  function save() {
    if (!complete) return;
    const clean: Record<string, JournalValue> = {};
    for (const f of template.fields) {
      const v = values[f.id];
      if (typeof v === 'number') clean[f.id] = v;
      else if (typeof v === 'string' && v.trim()) clean[f.id] = v.trim();
    }
    logJournal({ type: template.type, values: clean });
    clearDraft();
    haptic('success');
    onSaved();
  }

  return (
    <m.article variants={stagger(0.05)} initial="hidden" animate="show" className="mx-auto max-w-2xl">
      <m.button
        variants={fadeUp}
        type="button"
        onClick={leave}
        className="group inline-flex items-center gap-1.5 text-sm text-stone-500 transition-colors hover:text-stone-700"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">←</span> Diario
      </m.button>

      <AnimatePresence initial={false}>
        {confirmLeave && (
          <m.div variants={collapse} initial="hidden" animate="show" exit="exit" className="overflow-hidden">
            <div role="alertdialog" aria-label="Cambios sin guardar" className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm">
              <span className="text-stone-700">Tienes texto sin guardar. ¿Descartarlo?</span>
              <span className="flex gap-2">
                <Button variant="ghost" className="px-3 py-1.5" onClick={() => setConfirmLeave(false)}>
                  Seguir escribiendo
                </Button>
                <Button variant="secondary" className="px-3 py-1.5" onClick={leave}>
                  Descartar
                </Button>
              </span>
            </div>
          </m.div>
        )}
        {restored && !confirmLeave && (
          <m.p key="restored" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-4 text-sm text-sage-700">
            Recuperamos el borrador que tenías empezado.
          </m.p>
        )}
      </AnimatePresence>

      <m.header variants={fadeUp} className="mt-6">
        <h1 className="font-serif text-4xl text-stone-800">{template.title}</h1>
        <p className="mt-3 leading-relaxed text-stone-600">{template.rationale}</p>
        <p className="mt-3 text-sm text-stone-500">
          <span className="text-stone-600">Cuándo:</span> {template.when}
        </p>
        {template.helpLink && (
          <Link href={template.helpLink.href} className="mt-3 inline-block text-sm text-sage-700 underline decoration-sage-300 underline-offset-2 hover:decoration-sage-700">
            {template.helpLink.label} →
          </Link>
        )}
      </m.header>

      {template.caution && (
        <m.p
          variants={fadeUp}
          className={`mt-6 rounded-xl px-4 py-3 text-sm leading-relaxed text-stone-600 ${journalRisk(template.type) === 2 ? 'border border-stone-300 bg-white' : 'bg-stone-100'}`}
        >
          <span className="font-medium">{journalRisk(template.type) === 2 ? 'Con precauciones. ' : 'Antes de empezar. '}</span>
          {template.caution}
          {journalRisk(template.type) === 2 && ' Puedes parar cuando quieras: escribir sólo una parte también vale.'}
        </m.p>
      )}

      {template.suggestedMinutes && (
        <m.div variants={fadeUp}>
          <WritingTimer minutes={template.suggestedMinutes} />
        </m.div>
      )}

      <m.div variants={fadeUp} className="mt-8 space-y-7 rounded-2xl border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
        {template.fields.map((f) => (
          <Field key={f.id} field={f} value={values[f.id]} onChange={(v) => set(f.id, v)} />
        ))}
      </m.div>

      <m.div variants={fadeUp} className="mt-8 flex items-center justify-between gap-4">
        <p className="text-xs text-stone-500">Privado. Sólo tú (y, si lo autorizas, tu terapeuta) puedes leerlo.</p>
        <Button disabled={!complete} onClick={save}>
          Guardar entrada
        </Button>
      </m.div>

      {template.evidence.length > 0 && (
        <m.div variants={fadeUp} className="mt-12">
          <EvidencePanel level={template.evidenceLevel} references={template.evidence} />
        </m.div>
      )}
    </m.article>
  );
}

function Field({ field, value, onChange }: { field: JournalField; value: JournalValue | undefined; onChange: (v: JournalValue) => void }) {
  const label = (
    <span className="mb-2 flex items-baseline justify-between gap-4 text-sm text-stone-700">
      <span>{field.label}</span>
      {field.optional && <span className="text-xs text-stone-500">opcional</span>}
    </span>
  );

  if (field.kind === 'scale') {
    return (
      <IntensityScale
        label={field.label}
        value={typeof value === 'number' ? value : null}
        onChange={onChange}
        lowAnchor={field.anchors?.[0] ?? '0'}
        highAnchor={field.anchors?.[1] ?? '10'}
      />
    );
  }

  const text = typeof value === 'string' ? value : '';
  const inputClass =
    'w-full rounded-xl border border-stone-200 bg-stone-50/60 px-4 py-3 text-[15px] leading-relaxed text-stone-800 transition-[border-color,background-color,box-shadow] duration-200 placeholder:text-stone-500 focus:border-sage-400 focus:bg-white focus:shadow-soft focus:outline-none';

  if (field.kind === 'textarea') {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    return (
      <label className="block">
        {label}
        {field.hint && <span className="mb-3 block text-xs leading-relaxed text-stone-500">{field.hint}</span>}
        <AutoTextarea value={text} onChange={onChange} placeholder={field.placeholder} className={`${inputClass} font-serif text-[17px]`} />
        <span className="mt-1.5 block text-right text-[11px] tabular-nums text-stone-500">{words} palabras</span>
      </label>
    );
  }

  return (
    <label className="block">
      {label}
      {field.hint && <span className="mb-3 block text-xs leading-relaxed text-stone-500">{field.hint}</span>}
      <input type="text" maxLength={MAX_TEXT} value={text} onChange={(e) => onChange(e.target.value)} placeholder={field.placeholder} className={inputClass} />
    </label>
  );
}

/** Área de texto que crece con el contenido: escribir sin barras de scroll internas. */
function AutoTextarea({ value, onChange, placeholder, className }: { value: string; onChange: (v: string) => void; placeholder?: string; className: string }) {
  const ref = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.max(160, el.scrollHeight)}px`;
  }, [value]);
  return (
    <textarea
      ref={ref}
      value={value}
      maxLength={MAX_TEXTAREA}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={6}
      className={`${className} resize-none`}
    />
  );
}

/** Temporizador de escritura: discreto, sin presión. Una campana suave al llegar al tiempo sugerido. */
function WritingTimer({ minutes }: { minutes: number }) {
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const target = minutes * 60;
  const chimed = useRef(false);

  useEffect(() => {
    if (!running) return;
    const start = Date.now() - elapsed * 1000;
    const id = window.setInterval(() => {
      const s = Math.floor((Date.now() - start) / 1000);
      setElapsed(s);
      if (s >= target && !chimed.current) {
        chimed.current = true;
        playChime(2);
      }
    }, 500);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running, target]);

  const progress = Math.min(1, elapsed / target);

  return (
    <div className="mt-6 flex items-center gap-4 rounded-2xl border border-stone-200 bg-white/70 px-5 py-4">
      <div className="relative h-11 w-11 shrink-0">
        <svg viewBox="0 0 44 44" className="-rotate-90" aria-hidden>
          <circle cx="22" cy="22" r="19" fill="none" strokeWidth="2" className="stroke-stone-200" />
          <m.circle
            cx="22"
            cy="22"
            r="19"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            className="stroke-sage-500"
            strokeDasharray={2 * Math.PI * 19}
            animate={{ strokeDashoffset: 2 * Math.PI * 19 * (1 - progress) }}
            transition={{ duration: 0.5, ease: 'linear' }}
          />
        </svg>
      </div>
      <div className="flex-1">
        <p className="text-sm text-stone-700">
          <span className="tabular-nums">{formatClock(elapsed)}</span>
          <span className="text-stone-500"> / {minutes} min sugeridos</span>
        </p>
        <AnimatePresence mode="wait" initial={false}>
          <m.p key={elapsed >= target ? 'done' : 'go'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-xs text-stone-500">
            {elapsed >= target ? 'Tiempo cumplido. Puedes terminar la idea con calma.' : 'Escribe sin detenerte hasta que suene la campana.'}
          </m.p>
        </AnimatePresence>
      </div>
      <Button variant="secondary" onClick={() => setRunning((r) => !r)} className="px-4 py-2">
        {running ? 'Pausar' : elapsed ? 'Seguir' : 'Iniciar'}
      </Button>
    </div>
  );
}
