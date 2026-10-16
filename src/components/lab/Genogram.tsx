'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  BONDS,
  emptyGenogram,
  GEN_TAGS,
  genogramPatterns,
  isSingleSlot,
  MAX_NAME,
  MAX_NOTE,
  MAX_PEOPLE,
  parseGenogram,
  sameSlot,
  SHAPES,
  slotLabel,
  type Bond,
  type CoupleId,
  type Genogram as GenogramData,
  type GenPerson,
  type Shape,
  type Slot,
} from '@/domain/genogram';
import { downloadFile } from '@/lib/ics';
import { fadeUp, stagger } from '@/lib/motion';
import { Button, buttonStyles } from '@/components/ui/Button';
import { Sheet } from '@/components/ui/Sheet';
import { GenogramChart } from './GenogramChart';

/** El genograma se guarda sólo en este dispositivo: tiene datos sensibles de terceros. */
const KEY = 'genograma';

function useGenogram() {
  const [g, setG] = useState<GenogramData>(emptyGenogram);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setG(parseGenogram(JSON.parse(raw)));
    } catch {
      /* dato ilegible o sin almacenamiento: se empieza de cero */
    }
    setReady(true);
  }, []);
  const save = useCallback((fn: (prev: GenogramData) => GenogramData) => {
    setG((prev) => {
      const next = fn(prev);
      try {
        localStorage.setItem(KEY, JSON.stringify(next));
      } catch {
        /* sin almacenamiento: vive sólo en esta pestaña */
      }
      return next;
    });
  }, []);
  return { g, ready, save };
}

const input =
  'w-full rounded-xl border border-stone-200 bg-stone-50/60 px-4 py-2.5 text-[15px] text-stone-800 placeholder:text-stone-500 focus:border-sage-400 focus:bg-white focus:outline-none';
const link = 'text-sage-700 underline decoration-sage-300 underline-offset-2 hover:decoration-sage-700';

const newId = () => `p${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;

function PersonForm({ person, title, isMe, onSave, onDelete }: { person: GenPerson; title: string; isMe: boolean; onSave: (p: GenPerson) => void; onDelete?: () => void }) {
  const [d, setD] = useState(person);
  const set = <K extends keyof GenPerson>(k: K, v: GenPerson[K]) => setD((x) => ({ ...x, [k]: v }));
  const toggleTag = (id: string) => set('tags', d.tags.includes(id) ? d.tags.filter((t) => t !== id) : [...d.tags, id]);
  const yearOf = (v: string) => {
    const n = Number(v);
    return v && Number.isInteger(n) && n >= 1800 && n <= 2100 ? n : null;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave({ ...d, name: d.name.trim().slice(0, MAX_NAME), note: d.note?.trim().slice(0, MAX_NOTE) || undefined });
      }}
      className="space-y-5"
    >
      <p className="text-sm text-stone-500">{title}</p>
      <label className="block">
        <span className="text-sm font-medium text-stone-700">{isMe ? 'Cómo te nombras' : 'Apodo o iniciales'}</span>
        <input className={`${input} mt-1.5`} value={d.name} maxLength={MAX_NAME} onChange={(e) => set('name', e.target.value)} placeholder={isMe ? 'Yo' : 'Ej.: Abuela Rosa, M. P.'} autoFocus />
      </label>
      <fieldset>
        <legend className="text-sm font-medium text-stone-700">Símbolo</legend>
        <div className="mt-2 space-y-1.5">
          {SHAPES.map((s) => (
            <label key={s.id} className="flex items-center gap-2.5 text-[15px] text-stone-700">
              <input type="radio" name="shape" checked={d.shape === s.id} onChange={() => set('shape', s.id as Shape)} className="h-4 w-4 accent-sage-600" />
              {s.label}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="grid grid-cols-2 gap-3">
        <label className="block">
          <span className="text-sm font-medium text-stone-700">Año de nacimiento</span>
          <input className={`${input} mt-1.5`} inputMode="numeric" value={d.birthYear ?? ''} onChange={(e) => set('birthYear', yearOf(e.target.value))} placeholder="Opcional" />
        </label>
        {!isMe && (
          <div>
            <label className="flex items-center gap-2.5 pt-7 text-[15px] text-stone-700">
              <input type="checkbox" checked={!!d.deceased} onChange={(e) => set('deceased', e.target.checked)} className="h-4 w-4 accent-sage-600" />
              Falleció
            </label>
          </div>
        )}
      </div>
      {d.deceased && !isMe && (
        <label className="block">
          <span className="text-sm font-medium text-stone-700">Año en que falleció</span>
          <input className={`${input} mt-1.5`} inputMode="numeric" value={d.deathYear ?? ''} onChange={(e) => set('deathYear', yearOf(e.target.value))} placeholder="Opcional" />
        </label>
      )}
      <fieldset>
        <legend className="text-sm font-medium text-stone-700">Temas de su historia</legend>
        <p className="mt-0.5 text-sm text-stone-500">Marca sólo lo que sepas y quieras anotar.</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {GEN_TAGS.map((t) => {
            const on = d.tags.includes(t.id);
            return (
              <button
                key={t.id}
                type="button"
                aria-pressed={on}
                onClick={() => toggleTag(t.id)}
                className={`rounded-full border px-3 py-1 text-sm transition-colors ${on ? 'border-sage-500 bg-sage-600 text-white' : 'border-stone-300 text-stone-700 hover:border-sage-400'}`}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </fieldset>
      {!isMe && (
        <label className="block">
          <span className="text-sm font-medium text-stone-700">Tu vínculo con esta persona</span>
          <select className={`${input} mt-1.5`} value={d.bond ?? ''} onChange={(e) => set('bond', (e.target.value || null) as Bond | null)}>
            <option value="">Sin marcar</option>
            {BONDS.map((b) => (
              <option key={b.id} value={b.id}>
                {b.label}
              </option>
            ))}
          </select>
        </label>
      )}
      <label className="block">
        <span className="text-sm font-medium text-stone-700">Nota</span>
        <textarea className={`${input} mt-1.5 min-h-20`} value={d.note ?? ''} maxLength={MAX_NOTE} onChange={(e) => set('note', e.target.value)} placeholder="Opcional. Lo que quieras recordar." />
      </label>
      <div className="flex flex-wrap items-center gap-3 pt-1">
        <Button type="submit">Guardar</Button>
        {onDelete && (
          <Button type="button" variant="secondary" onClick={onDelete}>
            Quitar del genograma
          </Button>
        )}
      </div>
    </form>
  );
}

function PersonChip({ p, onClick }: { p: GenPerson; onClick: () => void }) {
  const symbol = p.shape === 'cuadrado' ? '□' : p.shape === 'circulo' ? '○' : '◇';
  return (
    <button type="button" onClick={onClick} className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-3.5 py-1.5 text-sm text-stone-800 hover:border-sage-400">
      <span aria-hidden className="text-stone-500">
        {symbol}
      </span>
      {p.name || 'Sin nombre'}
      {p.deceased && <span className="text-stone-500">†</span>}
      <span className="sr-only">: editar</span>
    </button>
  );
}

function AddButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-stone-400 px-3.5 py-1.5 text-sm text-stone-600 hover:border-sage-500 hover:text-stone-800">
      <span aria-hidden>＋</span> {label}
    </button>
  );
}

/**
 * Genograma de tres generaciones: se arma por lugares de la familia y se dibuja solo.
 * Muestra los temas que se repiten entre generaciones como preguntas, nunca como destino.
 */
export function Genogram() {
  const { g, ready, save } = useGenogram();
  const [editing, setEditing] = useState<{ person: GenPerson; isNew: boolean } | null>(null);
  const [showBonds, setShowBonds] = useState(true);
  const svgRef = useRef<SVGSVGElement>(null);
  const patterns = useMemo(() => genogramPatterns(g), [g]);
  const full = g.people.length >= MAX_PEOPLE;

  const at = (s: Slot) => g.people.find((p) => sameSlot(p.slot, s));
  const many = (kind: Slot['kind'], branch?: 1 | 2) => g.people.filter((p) => p.slot.kind === kind && (branch === undefined || ('branch' in p.slot && p.slot.branch === branch)));
  const open = (person: GenPerson) => setEditing({ person, isNew: false });
  const add = (slot: Slot) => !full && setEditing({ person: { id: newId(), slot, name: '', shape: 'rombo', tags: [] }, isNew: true });

  const upsert = (p: GenPerson) => {
    save((prev) => {
      const exists = prev.people.some((q) => q.id === p.id);
      if (!exists && isSingleSlot(p.slot) && prev.people.some((q) => sameSlot(q.slot, p.slot))) return prev;
      return { ...prev, people: exists ? prev.people.map((q) => (q.id === p.id ? p : q)) : [...prev.people, p].slice(0, MAX_PEOPLE) };
    });
    setEditing(null);
  };
  const remove = (id: string) => {
    save((prev) => ({ ...prev, people: prev.people.filter((q) => q.id !== id) }));
    setEditing(null);
  };
  const setSeparated = (id: CoupleId, v: boolean) => save((prev) => ({ ...prev, separated: { ...prev.separated, [id]: v || undefined } }));

  function slotButton(s: Slot, label: string) {
    const p = at(s);
    return p ? <PersonChip key={JSON.stringify(s)} p={p} onClick={() => open(p)} /> : <AddButton key={JSON.stringify(s)} label={label} onClick={() => add(s)} />;
  }
  function listButtons(kind: 'tio' | 'hermano' | 'hijo' | 'otro', label: string, branch?: 1 | 2) {
    return (
      <>
        {many(kind, branch).map((p) => (
          <PersonChip key={p.id} p={p} onClick={() => open(p)} />
        ))}
        {!full && <AddButton label={label} onClick={() => add(branch ? { kind: 'tio', branch } : ({ kind } as Slot))} />}
      </>
    );
  }
  const separatedBox = (id: CoupleId, label: string, show: boolean) =>
    show && (
      <label className="mt-3 flex items-center gap-2.5 text-sm text-stone-700">
        <input type="checkbox" checked={!!g.separated[id]} onChange={(e) => setSeparated(id, e.target.checked)} className="h-4 w-4 accent-sage-600" />
        {label}
      </label>
    );

  const name = (b: 1 | 2) => at({ kind: 'progenitor', branch: b })?.name.trim() || (b === 1 ? 'tu primer progenitor' : 'tu segundo progenitor');
  const me = at({ kind: 'yo' })!;

  function downloadSvg() {
    if (!svgRef.current) return;
    downloadFile('genograma.svg', new XMLSerializer().serializeToString(svgRef.current), 'image/svg+xml');
  }
  function clearAll() {
    if (window.confirm('¿Borrar todo el genograma de este dispositivo? No se puede deshacer.')) save(() => emptyGenogram());
  }

  const section = 'rounded-2xl border border-stone-200 bg-white p-5';

  return (
    <m.div variants={stagger(0.06)} initial="hidden" animate="show" className="mx-auto max-w-4xl">
      <m.header variants={fadeUp} className="max-w-2xl print:hidden">
        <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Laboratorio · enfoque sistémico</p>
        <h1 className="mt-2 font-serif text-4xl text-stone-800">Tu genograma</h1>
        <p className="mt-4 leading-relaxed text-stone-600">
          Un mapa de tu familia en tres generaciones. Suma a las personas por su lugar y el dibujo se arma solo. Después mira qué se repite:
          dificultades y también fortalezas.
        </p>
        <p className="mt-3 rounded-xl bg-stone-100 px-4 py-3 text-sm leading-relaxed text-stone-700">
          Se guarda sólo en este dispositivo y se borra al cerrar sesión. Son datos de otras personas: usa apodos o iniciales. Mirar la historia
          familiar puede remover cosas; ve a tu ritmo.{' '}
          <Link href="/biblioteca/familia-como-sistema" className={link}>
            Cómo leer un genograma
          </Link>
        </p>
      </m.header>

      {ready && (
        <>
          <m.div variants={fadeUp} className="mt-8 grid gap-4 md:grid-cols-2 print:hidden">
            <section className={section} aria-labelledby="g-padres">
              <h2 id="g-padres" className="font-serif text-xl text-stone-800">
                Tus padres o quienes te criaron
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {slotButton({ kind: 'progenitor', branch: 1 }, 'Primera persona')}
                {slotButton({ kind: 'progenitor', branch: 2 }, 'Segunda persona')}
              </div>
              {separatedBox('progenitores', 'Se separaron', !!(at({ kind: 'progenitor', branch: 1 }) && at({ kind: 'progenitor', branch: 2 })))}
            </section>

            <section className={section} aria-labelledby="g-yo">
              <h2 id="g-yo" className="font-serif text-xl text-stone-800">
                Tu generación
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                <PersonChip p={me} onClick={() => open(me)} />
                {slotButton({ kind: 'pareja' }, 'Pareja')}
                {listButtons('hermano', 'Hermano o hermana')}
              </div>
              {separatedBox('pareja', 'Están separados', !!at({ kind: 'pareja' }))}
            </section>

            {([1, 2] as const).map((b) => (
              <section key={b} className={section} aria-labelledby={`g-rama-${b}`}>
                <h2 id={`g-rama-${b}`} className="font-serif text-xl text-stone-800">
                  Familia de {name(b)}
                </h2>
                <p className="mt-3 text-sm text-stone-500">Sus padres</p>
                <div className="mt-1.5 flex flex-wrap gap-2">
                  {slotButton({ kind: 'abuelo', branch: b, index: 0 }, 'Padre o madre')}
                  {slotButton({ kind: 'abuelo', branch: b, index: 1 }, 'Padre o madre')}
                </div>
                {separatedBox(b === 1 ? 'abuelos-1' : 'abuelos-2', 'Se separaron', !!(at({ kind: 'abuelo', branch: b, index: 0 }) && at({ kind: 'abuelo', branch: b, index: 1 })))}
                <p className="mt-4 text-sm text-stone-500">Sus hermanos</p>
                <div className="mt-1.5 flex flex-wrap gap-2">{listButtons('tio', 'Hermano o hermana', b)}</div>
              </section>
            ))}

            <section className={section} aria-labelledby="g-hijos">
              <h2 id="g-hijos" className="font-serif text-xl text-stone-800">
                Tus hijos
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">{listButtons('hijo', 'Hijo o hija')}</div>
            </section>

            <section className={section} aria-labelledby="g-otros">
              <h2 id="g-otros" className="font-serif text-xl text-stone-800">
                Otras personas importantes
              </h2>
              <p className="mt-1 text-sm text-stone-500">Quien fue importante aunque no sea pariente: una madrina, un vecino, la pareja de tu madre.</p>
              <div className="mt-3 flex flex-wrap gap-2">{listButtons('otro', 'Persona')}</div>
            </section>
          </m.div>
          {full && <p className="mt-3 text-sm text-stone-600">Llegaste al máximo de {MAX_PEOPLE} personas.</p>}

          <m.section variants={fadeUp} className="mt-10" aria-labelledby="g-dibujo">
            <div className="flex flex-wrap items-end justify-between gap-3 print:hidden">
              <h2 id="g-dibujo" className="font-serif text-2xl text-stone-800">
                El dibujo
              </h2>
              <label className="flex items-center gap-2.5 text-sm text-stone-700">
                <input type="checkbox" checked={showBonds} onChange={(e) => setShowBonds(e.target.checked)} className="h-4 w-4 accent-sage-600" />
                Mostrar tus vínculos
              </label>
            </div>
            <div
              tabIndex={0}
              role="region"
              aria-label="Dibujo del genograma (se desplaza hacia los costados)"
              className="mt-4 overflow-x-auto rounded-2xl border border-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 print:overflow-visible print:border-0"
            >
              <GenogramChart ref={svgRef} genogram={g} showBonds={showBonds} />
            </div>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-stone-600" aria-label="Referencias">
              <li>□ varón · ○ mujer · ◇ otra identidad</li>
              <li>✕ dentro: falleció</li>
              <li>{'//'} sobre la línea: separación</li>
              {showBonds && <li>Vínculos: gruesa, cercana · punteada, distante · zigzag, conflicto · cortada, sin contacto</li>}
            </ul>
          </m.section>

          <m.section variants={fadeUp} className="mt-10" aria-labelledby="g-patrones">
            <h2 id="g-patrones" className="font-serif text-2xl text-stone-800">
              Lo que se repite
            </h2>
            {patterns.length === 0 ? (
              <p className="mt-3 max-w-2xl leading-relaxed text-stone-600">
                Cuando marques temas en personas de distintas generaciones, aquí aparecerá lo que se repite, con una pregunta para pensarlo.
              </p>
            ) : (
              <ul className="mt-4 space-y-3">
                {patterns.map((p) => (
                  <li key={p.tag.id} className={`rounded-2xl border bg-white p-5 ${p.tag.strength ? 'border-sage-300' : 'border-stone-200'}`}>
                    <p className="text-[15px] leading-relaxed text-stone-800">{p.text}</p>
                    <p className="mt-2 text-[15px] leading-relaxed text-stone-600">{p.question}</p>
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-500">
              Que algo se repita no significa que te toque: muchas personas cortan los patrones de su familia. Verlo es el primer paso para elegir.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 print:hidden">
              <Link href="/gimnasio/mi-genograma" className={buttonStyles('primary')}>
                Práctica guiada para leerlo
              </Link>
              <Link href="/gimnasio/mandatos-familiares" className={buttonStyles('secondary')}>
                Lo que se dice en mi familia
              </Link>
            </div>
          </m.section>

          <m.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3 border-t border-stone-200 pt-6 print:hidden">
            <Button onClick={() => window.print()}>Imprimir o guardar PDF</Button>
            <Button variant="secondary" onClick={downloadSvg}>
              Descargar dibujo (SVG)
            </Button>
            <Button variant="secondary" onClick={clearAll}>
              Borrar todo
            </Button>
          </m.div>
          <p className="mt-3 text-sm text-stone-500 print:hidden">Los archivos quedan en tu dispositivo. Compártelos sólo si quieres.</p>
        </>
      )}

      <Sheet open={!!editing} onClose={() => setEditing(null)} title={editing ? (editing.isNew ? 'Sumar persona' : editing.person.name || 'Editar persona') : ''}>
        {editing && (
          <PersonForm
            key={editing.person.id}
            person={editing.person}
            title={slotLabel(editing.person.slot, g)}
            isMe={editing.person.slot.kind === 'yo'}
            onSave={upsert}
            onDelete={editing.isNew || editing.person.slot.kind === 'yo' ? undefined : () => remove(editing.person.id)}
          />
        )}
      </Sheet>
    </m.div>
  );
}
