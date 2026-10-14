'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { m } from 'motion/react';
import { useMemo, useState } from 'react';
import { AGE_BANDS, kidAlert, MAX_KIDS, weeklySummary, type KidProfile } from '@/domain/kids';
import { KID_GUIDES } from '@/domain/kids-guides';
import { KID_RESOURCES } from '@/config/safety';
import { useKids } from '@/hooks/useKids';
import { enterKidMode, hasPin } from '@/lib/kids/kidMode';
import { fadeUp, stagger } from '@/lib/motion';
import { Sheet } from '@/components/ui/Sheet';
import { Button, buttonStyles } from '@/components/ui/Button';
import { AvatarIcon } from '@/components/kids/KidArt';
import { Mascot } from '@/components/kids/Mascot';
import { AskPin, CreatePin } from '@/components/kids/PinPad';
import { KidProfileForm } from './KidProfileForm';

/**
 * Familia: perfiles de los chicos a cargo, entrada al modo chico, guías para acompañar y
 * recursos de ayuda. Todo lo que los chicos registran se ve aquí.
 */
export function FamilyHub() {
  const router = useRouter();
  const { kids, activities, status, error, addKid } = useKids();
  const [adding, setAdding] = useState(false);
  const [pinFor, setPinFor] = useState<KidProfile | null>(null);
  const [changePin, setChangePin] = useState<'ask' | 'create' | null>(null);

  const enter = (kid: KidProfile) => {
    if (!hasPin()) return setPinFor(kid);
    enterKidMode(kid.id);
    router.push('/chicos');
  };

  return (
    <m.div variants={stagger(0.06)} initial="hidden" animate="show" className="mx-auto max-w-4xl">
      <m.header variants={fadeUp} className="kid-theme flex flex-wrap items-center gap-5">
        <Mascot size={88} />
        <div className="min-w-0 flex-1">
          <h1 className="font-serif text-4xl text-stone-800">Familia</h1>
          <p className="mt-2 max-w-2xl leading-relaxed text-stone-600">
            Habilidades para chicos de 4 a 12 años, con actividades cortas, dibujos y voz. Se usan con tu supervisión: tú creas su perfil y ves lo que
            registran.
          </p>
        </div>
      </m.header>

      {error && (
        <p role="alert" className="mt-6 rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-700">
          {error}
        </p>
      )}

      <m.section variants={fadeUp} className="mt-10" aria-labelledby="perfiles">
        <h2 id="perfiles" className="mb-4 text-xs uppercase tracking-[0.2em] text-stone-500">
          Perfiles
        </h2>
        {status !== 'ready' && kids.length === 0 ? (
          <div className="skeleton h-28" />
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2">
            {kids.map((k) => (
              <KidCard key={k.id} kid={k} logs={activities.filter((a) => a.kidId === k.id)} onEnter={() => enter(k)} />
            ))}
            {kids.length < MAX_KIDS && (
              <li>
                <button
                  type="button"
                  onClick={() => setAdding(true)}
                  className="flex h-full min-h-36 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-stone-300 p-6 text-stone-600 transition-colors hover:border-sage-400 hover:text-stone-800"
                >
                  <span className="text-3xl leading-none" aria-hidden>
                    +
                  </span>
                  <span className="text-sm font-medium">{kids.length === 0 ? 'Crear el primer perfil' : 'Agregar otro perfil'}</span>
                </button>
              </li>
            )}
          </ul>
        )}
        {kids.length > 0 && (
          <p className="mt-4 text-sm text-stone-600">
            Para salir del modo chico se pide un código de 4 números.{' '}
            {hasPin() && (
              <button type="button" onClick={() => setChangePin('ask')} className="text-sage-700 underline decoration-sage-300 underline-offset-2">
                Cambiar el código
              </button>
            )}
          </p>
        )}
      </m.section>

      <m.section variants={fadeUp} className="mt-12" aria-labelledby="guias">
        <h2 id="guias" className="mb-4 text-xs uppercase tracking-[0.2em] text-stone-500">
          Guías para acompañar
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {KID_GUIDES.map((g) => (
            <li key={g.id}>
              <Link href={`/familia/guia/${g.id}`} className="block h-full rounded-2xl border border-stone-200 bg-white p-5 shadow-soft transition-shadow hover:shadow-lift">
                <span className="block font-serif text-xl text-stone-800">{g.title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-stone-600">{g.subtitle}</span>
                <span className="mt-2 block text-xs text-stone-500">{g.readingMin} min de lectura</span>
              </Link>
            </li>
          ))}
        </ul>
      </m.section>

      <m.section variants={fadeUp} className="mt-12 rounded-2xl border border-stone-200 bg-white p-6 shadow-soft" aria-labelledby="ayuda-chicos">
        <h2 id="ayuda-chicos" className="font-serif text-2xl text-stone-800">
          Si te preocupa cómo está
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">
          Si habla de hacerse daño, si alguien le hace daño o si ves un cambio fuerte que no mejora, busca ayuda profesional. Su pediatra es un buen
          primer paso.{' '}
          <Link href="/familia/guia/cuando-consultar" className="text-sage-700 underline decoration-sage-300 underline-offset-2">
            Cuándo consultar
          </Link>
        </p>
        <ul className="mt-3 divide-y divide-stone-100">
          {KID_RESOURCES.map((r) => (
            <li key={r.label} className="flex items-center justify-between gap-4 py-3">
              <span className="min-w-0">
                <span className="block text-sm font-medium text-stone-800">{r.label}</span>
                <span className="block text-xs text-stone-500">{r.label === 'Línea 102' ? 'Derechos de niñas, niños y adolescentes. Gratuita. Si en tu provincia no atiende, llama al 911.' : r.detail}</span>
              </span>
              <a href={r.href} aria-label={`Llamar a ${r.label}: ${r.contact}`} className="shrink-0 rounded-full bg-sage-700 px-3.5 py-1.5 text-sm font-medium tabular-nums text-stone-50 hover:bg-sage-800">
                {r.contact}
              </a>
            </li>
          ))}
        </ul>
      </m.section>

      <Sheet open={adding} onClose={() => setAdding(false)} title="Nuevo perfil">
        <KidProfileForm
          submitLabel="Crear perfil"
          onSubmit={async (kid) => {
            const id = await addKid(kid);
            if (id) setAdding(false);
          }}
        />
      </Sheet>

      <Sheet open={!!pinFor} onClose={() => setPinFor(null)} title="Código del adulto">
        <div className="pb-6">
          {pinFor && (
            <CreatePin
              onDone={() => {
                const kid = pinFor;
                setPinFor(null);
                enterKidMode(kid.id);
                router.push('/chicos');
              }}
            />
          )}
        </div>
      </Sheet>

      <Sheet open={!!changePin} onClose={() => setChangePin(null)} title="Cambiar el código">
        <div className="pb-6">
          {changePin === 'ask' && <AskPin onOk={() => setChangePin('create')} />}
          {changePin === 'create' && <CreatePin onDone={() => setChangePin(null)} />}
        </div>
      </Sheet>
    </m.div>
  );
}

function KidCard({ kid, logs, onEnter }: { kid: KidProfile; logs: ReturnType<typeof useKids>['activities']; onEnter: () => void }) {
  const week = useMemo(() => weeklySummary(logs), [logs]);
  const alert = useMemo(() => kidAlert(logs), [logs]);
  return (
    <li className="rounded-2xl border border-stone-200 bg-white p-5 shadow-soft">
      <div className="flex items-center gap-3">
        <span className="kid-theme">
          <AvatarIcon avatar={kid.avatar} size={52} />
        </span>
        <div className="min-w-0">
          <p className="truncate font-serif text-2xl text-stone-800">{kid.name}</p>
          <p className="text-sm text-stone-600">{AGE_BANDS.find((b) => b.id === kid.band)?.label}</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-stone-600">
        {week.activities === 0 ? 'Todavía no hizo actividades esta semana.' : `${week.activities} ${week.activities === 1 ? 'actividad' : 'actividades'} en los últimos 7 días.`}
      </p>
      {alert && (
        <p className="mt-2 rounded-xl bg-stone-100 px-3 py-2 text-sm text-stone-800">
          Marcó {alert.feeling.label.toLowerCase()} «muchísimo» en {alert.days} días de esta semana. Mira su panel.
        </p>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        <Button onClick={onEnter}>Entrar al modo chico</Button>
        <Link href={`/familia/chico/${kid.id}`} className={buttonStyles('secondary')}>
          Ver su panel
        </Link>
      </div>
    </li>
  );
}
