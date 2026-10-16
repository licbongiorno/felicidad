'use client';

import { m } from 'motion/react';
import { useEffect, useState, type ReactNode } from 'react';
import { deleteUser } from 'firebase/auth';
import { clearPersonalLocalData } from '@/lib/localData';
import { useAuth } from '@/providers/AuthProvider';
import { useUiStore } from '@/store/useUiStore';
import { loadRepo, useProgressStore } from '@/store/useProgressStore';
import { getFirebaseAuth } from '@/lib/firebase/client';
import { CONSENT_VERSION } from '@/lib/consent';
import { DEMO_MODE } from '@/lib/demo';
import { buildReminderIcs, downloadFile, type Weekday } from '@/lib/ics';
import { voiceSupported, speak } from '@/lib/voice';
import { fadeUp, gentleSpring, stagger } from '@/lib/motion';
import { applyThemePref, readThemePref, type ThemePref } from '@/lib/theme';
import { applyMotionPref, applyTextSize, readMotionPref, readTextSize, type MotionPref, type TextSize } from '@/lib/a11y';
import { currentTimeZone, toDateKey } from '@/domain/metrics';
import { SAFETY_DISCLAIMER } from '@/config/safety';
import { Button } from '@/components/ui/Button';
import { Sheet } from '@/components/ui/Sheet';
import Link from 'next/link';
import { canReview } from '@/components/review/ReviewPanel';

const DAYS: { id: Weekday; label: string }[] = [
  { id: 'MO', label: 'L' },
  { id: 'TU', label: 'M' },
  { id: 'WE', label: 'X' },
  { id: 'TH', label: 'J' },
  { id: 'FR', label: 'V' },
  { id: 'SA', label: 'S' },
  { id: 'SU', label: 'D' },
];

const CUES = ['termine de desayunar', 'llegue a casa', 'apague la computadora', 'me siente en la cama por la noche'];

export function Settings() {
  const { user, profile, signOut } = useAuth();
  const { voice, chime, setPref, hydrate } = useUiStore();
  const [canSpeak, setCanSpeak] = useState(false);

  useEffect(() => {
    hydrate();
    setCanSpeak(voiceSupported());
  }, [hydrate]);

  return (
    <m.div variants={stagger(0.07)} initial="hidden" animate="show" className="mx-auto max-w-2xl">
      <m.header variants={fadeUp}>
        <h1 className="font-serif text-4xl text-stone-800 sm:text-5xl">Ajustes</h1>
        <p className="mt-3 text-stone-600">{user?.email ?? (DEMO_MODE ? 'Cuenta de demostración' : '')}</p>
      </m.header>

      <Section title="Apariencia">
        <ThemeChoice />
      </Section>

      <Section title="Accesibilidad">
        <AccessibilityChoices />
      </Section>

      <Section title="Práctica">
        <Toggle
          label="Voz guía"
          description={canSpeak ? 'Lee en voz alta cada paso para que puedas practicar con los ojos cerrados.' : 'Tu navegador no admite síntesis de voz.'}
          checked={voice && canSpeak}
          disabled={!canSpeak}
          onChange={(v) => {
            setPref('voice', v);
            if (v) speak('Voz guía activada.');
          }}
        />
        <Toggle label="Campana" description="Un sonido suave marca el cambio de paso y el final." checked={chime} onChange={(v) => setPref('chime', v)} />
      </Section>

      <Section title="Recordatorio">
        <Reminder />
      </Section>

      <Section title="Tus datos">
        <DataRights uid={user?.uid ?? 'demo'} onDeleted={signOut} />
      </Section>

      {canReview(user?.email) && (
        <Section title="Revisión clínica">
          <p className="text-sm leading-relaxed text-stone-600">
            Tienes acceso al panel para revisar y aprobar el contenido de la app.{' '}
            <Link href="/revision" className="text-sage-700 underline decoration-sage-300 underline-offset-2">
              Abrir el panel de revisión
            </Link>
          </p>
        </Section>
      )}

      <Section title="Consentimiento">
        <p className="text-sm leading-relaxed text-stone-600">
          Versión aceptada: <span className="tabular-nums text-stone-800">{profile?.consentVersion ?? '—'}</span>
          {profile?.consentVersion === CONSENT_VERSION && <span className="text-sage-700"> · vigente</span>}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-stone-500">{SAFETY_DISCLAIMER}</p>
        <p className="mt-3 text-sm">
          <Link href="/privacidad" className="text-sage-700 underline decoration-sage-300 underline-offset-2">
            Política de privacidad
          </Link>
        </p>
      </Section>
    </m.div>
  );
}

const THEMES: { id: ThemePref; label: string }[] = [
  { id: 'system', label: 'Sistema' },
  { id: 'light', label: 'Claro' },
  { id: 'dark', label: 'Oscuro' },
];

function ThemeChoice() {
  const [pref, setPref] = useState<ThemePref>('system');
  useEffect(() => setPref(readThemePref()), []);
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <p className="text-[15px] text-stone-800">Tema</p>
        <p className="mt-0.5 text-sm text-stone-500">«Sistema» sigue la configuración de tu dispositivo. El modo oscuro ayuda a practicar de noche.</p>
      </div>
      <div role="radiogroup" aria-label="Tema" className="inline-flex rounded-full bg-stone-100 p-1">
        {THEMES.map((t) => {
          const active = pref === t.id;
          return (
            <button
              key={t.id}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => {
                setPref(t.id);
                applyThemePref(t.id);
              }}
              className={`relative rounded-full px-4 py-1.5 text-sm ${active ? 'text-stone-900' : 'text-stone-600 hover:text-stone-800'}`}
            >
              {active && <m.span layoutId="theme-pill" transition={gentleSpring} className="absolute inset-0 rounded-full bg-white shadow-soft" />}
              <span className="relative">{t.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Segmented<T extends string>({ label, description, options, value, onChange, id }: {
  label: string;
  description: string;
  options: { id: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  id: string;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <p className="text-[15px] text-stone-800">{label}</p>
        <p className="mt-0.5 text-sm text-stone-500">{description}</p>
      </div>
      <div role="radiogroup" aria-label={label} className="inline-flex rounded-full bg-stone-100 p-1">
        {options.map((o) => {
          const active = value === o.id;
          return (
            <button
              key={o.id}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(o.id)}
              className={`relative rounded-full px-4 py-1.5 text-sm ${active ? 'text-stone-900' : 'text-stone-600 hover:text-stone-800'}`}
            >
              {active && <m.span layoutId={`${id}-pill`} transition={gentleSpring} className="absolute inset-0 rounded-full bg-white shadow-soft" />}
              <span className="relative">{o.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function AccessibilityChoices() {
  const [text, setText] = useState<TextSize>('normal');
  const [motion, setMotion] = useState<MotionPref>('system');
  useEffect(() => {
    setText(readTextSize());
    setMotion(readMotionPref());
  }, []);
  return (
    <>
      <Segmented
        id="text"
        label="Tamaño de letra"
        description="Agranda todo el texto de la app en este dispositivo."
        options={[
          { id: 'normal', label: 'Normal' },
          { id: 'grande', label: 'Grande' },
          { id: 'muy-grande', label: 'Muy grande' },
        ]}
        value={text}
        onChange={(v) => {
          setText(v);
          applyTextSize(v);
        }}
      />
      <Segmented
        id="motion"
        label="Movimiento"
        description="«Reducido» quita las animaciones, aunque tu dispositivo no lo pida."
        options={[
          { id: 'system', label: 'Según el sistema' },
          { id: 'reduce', label: 'Reducido' },
        ]}
        value={motion}
        onChange={(v) => {
          setMotion(v);
          applyMotionPref(v);
        }}
      />
    </>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <m.section variants={fadeUp} className="mt-10">
      <h2 className="mb-4 text-xs uppercase tracking-[0.2em] text-stone-500">{title}</h2>
      <div className="space-y-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">{children}</div>
    </m.section>
  );
}

function Toggle({
  label,
  description,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-6">
      <div>
        <p className="text-[15px] text-stone-800">{label}</p>
        <p className="mt-0.5 text-sm text-stone-500">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`relative mt-1 h-6 w-11 shrink-0 rounded-full transition-colors duration-300 disabled:opacity-40 ${checked ? 'bg-sage-600' : 'bg-stone-300'}`}
      >
        <m.span
          className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm"
          animate={{ x: checked ? 20 : 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 32 }}
        />
      </button>
    </div>
  );
}

function Reminder() {
  const [time, setTime] = useState('08:00');
  const [days, setDays] = useState<Weekday[]>(['MO', 'TU', 'WE', 'TH', 'FR']);
  const [cue, setCue] = useState(CUES[0]);
  const [done, setDone] = useState(false);

  function download() {
    const ics = buildReminderIcs({ time, days, cue, url: `${window.location.origin}/gimnasio` });
    downloadFile('recordatorio-eudaimonia.ics', ics, 'text/calendar');
    setDone(true);
  }

  return (
    <div>
      <p className="text-sm leading-relaxed text-stone-600">
        Anclar la práctica a algo que ya haces es la forma más eficaz de sostener un hábito. Crea un evento recurrente en tu
        calendario:
      </p>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-stone-700">
          Hora
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="mt-2 block w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-stone-800 focus:border-sage-400 focus:outline-none"
          />
        </label>
        <label className="block text-sm text-stone-700">
          Cuando…
          <select
            value={cue}
            onChange={(e) => setCue(e.target.value)}
            className="mt-2 block w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-stone-800 focus:border-sage-400 focus:outline-none"
          >
            {CUES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="mt-5 flex gap-1.5" role="group" aria-label="Días">
        {DAYS.map((d) => {
          const on = days.includes(d.id);
          return (
            <button
              key={d.id}
              type="button"
              aria-pressed={on}
              onClick={() => setDays((prev) => (on ? prev.filter((x) => x !== d.id) : [...prev, d.id]))}
              className={`h-10 w-10 rounded-full text-sm transition-colors ${on ? 'bg-sage-700 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
            >
              {d.label}
            </button>
          );
        })}
      </div>
      <p className="mt-5 rounded-xl bg-sage-50 px-4 py-3 font-serif text-[15px] text-sage-800">
        «Cuando {cue}, practico 10 minutos.»
      </p>
      <div className="mt-5 flex items-center gap-4">
        <Button variant="secondary" disabled={days.length === 0} onClick={download}>
          Añadir a mi calendario
        </Button>
        {done && <span className="text-sm text-sage-700">Abre el archivo descargado para importarlo.</span>}
      </div>
    </div>
  );
}

/** Firebase pide reautenticar pasados 5 minutos del inicio de sesión; se deja margen. */
const RECENT_LOGIN_MS = 4 * 60_000;

function DataRights({ uid, onDeleted }: { uid: string; onDeleted: () => Promise<void> }) {
  const [exporting, setExporting] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmText, setConfirmText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function exportData() {
    setExporting(true);
    setError(null);
    try {
      const data = await (await loadRepo()).exportUserData(uid);
      // Sobre con metadatos para que el archivo sea interpretable fuera de la app.
      const envelope = { app: 'Habilidades Psicológicas', formatVersion: 1, timezone: currentTimeZone(), ...(data as object) };
      // Fecha LOCAL en el nombre: con toISOString() una exportación a las 23:00 llevaba la fecha del día siguiente.
      downloadFile(`eudaimonia-datos-${toDateKey(new Date())}.json`, JSON.stringify(envelope, null, 2), 'application/json');
    } catch {
      setError('No se pudo completar la exportación. Revisa tu conexión.');
    } finally {
      setExporting(false);
    }
  }

  async function deleteAccount() {
    setDeleting(true);
    setError(null);
    try {
      // Firebase exige un inicio de sesión reciente para eliminar el acceso. Se comprueba antes
      // de borrar nada: así no quedan datos borrados con una cuenta que sigue existiendo.
      if (!DEMO_MODE) {
        const current = getFirebaseAuth().currentUser;
        const last = Date.parse(current?.metadata.lastSignInTime ?? '');
        if (!current || !Number.isFinite(last) || Date.now() - last > RECENT_LOGIN_MS) {
          setError('Por seguridad, vuelve a iniciar sesión y repite este paso. No se borró nada.');
          setDeleting(false);
          return;
        }
      }
      await (await loadRepo()).deleteUserData(uid);
      useProgressStore.getState().disconnect();
      clearPersonalLocalData();
      if (!DEMO_MODE) {
        const current = getFirebaseAuth().currentUser;
        if (current) await deleteUser(current);
      }
      await onDeleted();
    } catch (e) {
      const code = (e as { code?: string })?.code;
      setError(
        code === 'auth/requires-recent-login'
          ? 'Tus datos se borraron, pero el acceso sigue activo. Vuelve a iniciar sesión y repite este paso para eliminarlo.'
          : 'No se pudo completar el borrado. Inténtalo de nuevo.',
      );
      setDeleting(false);
    }
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-[15px] text-stone-800">Descargar mis datos</p>
          <p className="mt-0.5 text-sm text-stone-500">Todo lo que has registrado, en un archivo JSON portable.</p>
        </div>
        <Button variant="secondary" disabled={exporting} onClick={exportData}>
          {exporting ? 'Preparando…' : 'Descargar'}
        </Button>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-stone-100 pt-4">
        <div>
          <p className="text-[15px] text-stone-800">Eliminar mi cuenta</p>
          <p className="mt-0.5 text-sm text-stone-500">Borra de forma permanente todos tus registros y tu acceso.</p>
        </div>
        <Button variant="ghost" onClick={() => setConfirmOpen(true)} className="text-stone-700 ring-1 ring-stone-300">
          Eliminar…
        </Button>
      </div>
      {error && (
        <p role="alert" className="text-sm text-stone-700">
          {error}
        </p>
      )}

      <Sheet open={confirmOpen} onClose={() => setConfirmOpen(false)} title="Eliminar la cuenta">
        <p className="text-[15px] leading-relaxed text-stone-700">
          Se borrarán para siempre tus prácticas, registros de ánimo, antídotos, diario y evaluaciones. Esta acción no se puede
          deshacer. Si quieres conservar una copia, descarga tus datos antes.
        </p>
        <label className="mt-5 block text-sm text-stone-700">
          Escribe <span className="font-medium">ELIMINAR</span> para confirmar
          <input
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            className="mt-2 block w-full rounded-xl border border-stone-200 bg-white px-3 py-2.5 focus:border-stone-500 focus:outline-none"
          />
        </label>
        <div className="mt-6 flex justify-end gap-3 pb-4 sm:pb-0">
          <Button variant="ghost" onClick={() => setConfirmOpen(false)}>
            Cancelar
          </Button>
          <Button disabled={confirmText !== 'ELIMINAR' || deleting} onClick={deleteAccount} className="bg-stone-800 hover:bg-stone-900">
            {deleting ? 'Eliminando…' : 'Eliminar definitivamente'}
          </Button>
        </div>
      </Sheet>
    </>
  );
}
