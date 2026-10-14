'use client';

import { useState } from 'react';
import { AGE_BANDS, KID_AVATARS, KID_NAME_MAX, type AgeBand, type KidAvatar, type KidProfile } from '@/domain/kids';
import type { NewKid } from '@/lib/kids/types';
import { Button } from '@/components/ui/Button';
import { AvatarIcon } from '@/components/kids/KidArt';

/**
 * Alta o edición de un perfil de chico: apodo, franja de edad y avatar. Al crear, pide el
 * consentimiento del adulto responsable (queda registrado con su versión en Firestore).
 * No se piden apellido, fecha de nacimiento ni correo: lo mínimo necesario.
 */
export function KidProfileForm({ initial, onSubmit, submitLabel }: { initial?: KidProfile; onSubmit: (kid: NewKid) => void | Promise<void>; submitLabel: string }) {
  const [name, setName] = useState(initial?.name ?? '');
  const [band, setBand] = useState<AgeBand>(initial?.band ?? '7-9');
  const [avatar, setAvatar] = useState<KidAvatar>(initial?.avatar ?? 'sol');
  const [consent, setConsent] = useState(!!initial);
  const [busy, setBusy] = useState(false);
  const valid = name.trim().length > 0 && consent;

  return (
    <form
      className="space-y-5 pb-4"
      onSubmit={async (e) => {
        e.preventDefault();
        if (!valid) return;
        setBusy(true);
        await onSubmit({ name: name.trim(), band, avatar });
        setBusy(false);
      }}
    >
      <label className="block">
        <span className="text-sm font-medium text-stone-800">Nombre o apodo</span>
        <span className="block text-xs text-stone-500">Sin apellido. Es lo que verá en pantalla.</span>
        <input
          value={name}
          maxLength={KID_NAME_MAX}
          onChange={(e) => setName(e.target.value)}
          autoComplete="off"
          className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-stone-800 focus:border-sage-500 focus:outline-none"
        />
      </label>

      <fieldset>
        <legend className="text-sm font-medium text-stone-800">Edad</legend>
        <div className="mt-2 grid gap-2">
          {AGE_BANDS.map((b) => (
            <label key={b.id} className={`flex cursor-pointer gap-3 rounded-xl border p-3 ${band === b.id ? 'border-sage-500 bg-sage-50' : 'border-stone-200 bg-white'}`}>
              <input type="radio" name="band" value={b.id} checked={band === b.id} onChange={() => setBand(b.id)} className="mt-1 accent-sage-700" />
              <span>
                <span className="block text-sm font-medium text-stone-800">{b.label}</span>
                <span className="block text-xs text-stone-600">{b.description}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-sm font-medium text-stone-800">Avatar</legend>
        <div className="kid-theme mt-2 flex flex-wrap gap-2">
          {KID_AVATARS.map((a) => (
            <label key={a.id} className={`cursor-pointer rounded-full p-1 ring-2 ${avatar === a.id ? 'ring-sage-600' : 'ring-transparent'}`}>
              <input type="radio" name="avatar" value={a.id} checked={avatar === a.id} onChange={() => setAvatar(a.id)} className="sr-only" aria-label={a.label} />
              <AvatarIcon avatar={a.id} size={44} />
            </label>
          ))}
        </div>
      </fieldset>

      {!initial && (
        <label className="flex gap-3 rounded-xl border border-stone-200 bg-stone-50 p-4">
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 h-4 w-4 shrink-0 accent-sage-700" />
          <span className="text-sm leading-relaxed text-stone-700">
            Soy la madre, el padre o el tutor legal y autorizo que la app guarde las actividades y emociones que registre en este perfil. Puedo verlas,
            exportarlas y borrarlas cuando quiera. Entiendo que esta sección acompaña, pero no reemplaza la atención profesional.
          </span>
        </label>
      )}

      <Button type="submit" disabled={!valid || busy} className="w-full">
        {submitLabel}
      </Button>
    </form>
  );
}
