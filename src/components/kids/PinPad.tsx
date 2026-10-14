'use client';

import { useEffect, useState } from 'react';
import { adultQuestion, checkPin, setPin } from '@/lib/kids/kidMode';

/**
 * Teclado numérico para el código del adulto. Estilo de la app de adultos: aparece en hojas
 * modales (fuera del tema infantil) y es para el adulto, no para el chico.
 */
export function PinPad({ label, onComplete, error }: { label: string; onComplete: (pin: string) => void; error?: string | null }) {
  const [pin, setPinValue] = useState('');

  useEffect(() => {
    if (pin.length === 4) {
      onComplete(pin);
      setPinValue('');
    }
  }, [pin, onComplete]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (/^\d$/.test(e.key)) setPinValue((p) => (p.length < 4 ? p + e.key : p));
      if (e.key === 'Backspace') setPinValue((p) => p.slice(0, -1));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const press = (d: string) => setPinValue((p) => (p.length < 4 ? p + d : p));

  return (
    <div className="mx-auto max-w-xs text-center">
      <p className="text-sm text-stone-600">{label}</p>
      <div className="mt-4 flex justify-center gap-3" aria-live="polite" aria-label={`${pin.length} de 4 números`}>
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={`h-3.5 w-3.5 rounded-full ${i < pin.length ? 'bg-sage-700' : 'bg-stone-200'}`} />
        ))}
      </div>
      {error && (
        <p role="alert" className="mt-3 text-sm text-stone-700">
          {error}
        </p>
      )}
      <div className="mt-5 grid grid-cols-3 gap-2.5">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((d) => (
          <button key={d} type="button" onClick={() => press(d)} className="h-14 rounded-2xl bg-stone-100 text-xl font-medium text-stone-800 transition-colors hover:bg-stone-200">
            {d}
          </button>
        ))}
        <span />
        <button type="button" onClick={() => press('0')} className="h-14 rounded-2xl bg-stone-100 text-xl font-medium text-stone-800 transition-colors hover:bg-stone-200">
          0
        </button>
        <button type="button" onClick={() => setPinValue((p) => p.slice(0, -1))} aria-label="Borrar" className="h-14 rounded-2xl text-stone-600 hover:bg-stone-100">
          ⌫
        </button>
      </div>
    </div>
  );
}

/** Crear (o cambiar) el código: dos veces el mismo. */
export function CreatePin({ onDone }: { onDone: () => void }) {
  const [first, setFirst] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  return (
    <PinPad
      label={first ? 'Escríbelo otra vez para confirmar.' : 'Elige un código de 4 números. Lo vas a necesitar para salir del modo chico.'}
      error={error}
      onComplete={(pin) => {
        if (!first) {
          setFirst(pin);
          setError(null);
          return;
        }
        if (pin !== first) {
          setFirst(null);
          setError('No coinciden. Empecemos de nuevo.');
          return;
        }
        void setPin(pin).then(onDone);
      }}
    />
  );
}

/** Pedir el código para salir del modo chico. Con «Lo olvidé», una pregunta para adultos. */
export function AskPin({ onOk }: { onOk: () => void }) {
  const [error, setError] = useState<string | null>(null);
  const [forgot, setForgot] = useState<{ a: number; b: number } | null>(null);
  const [answer, setAnswer] = useState('');
  const [resetting, setResetting] = useState(false);

  if (resetting) return <CreatePin onDone={onOk} />;

  if (forgot) {
    return (
      <form
        className="mx-auto max-w-xs text-center"
        onSubmit={(e) => {
          e.preventDefault();
          if (Number(answer) === forgot.a * forgot.b) setResetting(true);
          else {
            setError('No es correcto.');
            setForgot(adultQuestion());
            setAnswer('');
          }
        }}
      >
        <p className="text-sm text-stone-600">Para crear un código nuevo, responde esta pregunta para adultos.</p>
        <label className="mt-4 block text-lg font-medium text-stone-800" htmlFor="adult-answer">
          ¿Cuánto es {forgot.a} × {forgot.b}?
        </label>
        <input
          id="adult-answer"
          inputMode="numeric"
          autoComplete="off"
          value={answer}
          onChange={(e) => setAnswer(e.target.value.replace(/\D/g, '').slice(0, 3))}
          className="mt-3 w-28 rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-center text-lg text-stone-800 focus:border-sage-500 focus:outline-none"
        />
        {error && (
          <p role="alert" className="mt-3 text-sm text-stone-700">
            {error}
          </p>
        )}
        <button type="submit" className="mt-4 block w-full rounded-full bg-sage-700 px-5 py-2.5 text-sm font-medium text-stone-50 hover:bg-sage-800">
          Continuar
        </button>
      </form>
    );
  }

  return (
    <div>
      <PinPad
        label="Escribe el código del adulto."
        error={error}
        onComplete={(pin) => {
          void checkPin(pin).then((r) => {
            if (r.ok) return onOk();
            setError(r.lockedFor > 0 ? `Demasiados intentos. Espera ${Math.ceil(r.lockedFor / 1000)} segundos.` : 'Código incorrecto.');
          });
        }}
      />
      <button type="button" onClick={() => setForgot(adultQuestion())} className="mx-auto mt-5 block text-sm text-stone-600 underline decoration-stone-300 underline-offset-4">
        Lo olvidé
      </button>
    </div>
  );
}
