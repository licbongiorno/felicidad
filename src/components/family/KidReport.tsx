'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { m } from 'motion/react';
import { useMemo, useState } from 'react';
import { hasKidMode, isTeen, AGE_BANDS, FEELING_BY_ID, INTENSITY_LABEL, KID_ACTIVITY_BY_ID, kidAlert, stickersOf, weeklySummary, activitiesFor, gardenStage } from '@/domain/kids';
import { storyOfLog } from '@/domain/stories';
import { useKids } from '@/hooks/useKids';
import { enterKidMode, hasPin } from '@/lib/kids/kidMode';
import { fadeUp, stagger } from '@/lib/motion';
import { Sheet } from '@/components/ui/Sheet';
import { Button, buttonStyles } from '@/components/ui/Button';
import { AvatarIcon, FeelingFace } from '@/components/kids/KidArt';
import { CreatePin } from '@/components/kids/PinPad';
import { KidProfileForm } from './KidProfileForm';
import { TogetherActivities } from './TogetherActivities';

const fmt = new Intl.DateTimeFormat('es-AR', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });

/** Panel del adulto para un perfil: la semana, sus emociones, sus cosas buenas y avisos. */
export function KidReport({ kidId }: { kidId: string }) {
  const router = useRouter();
  const { kids, activities, status, updateKid, deleteKid } = useKids();
  const kid = kids.find((k) => k.id === kidId);
  const logs = useMemo(() => activities.filter((a) => a.kidId === kidId), [activities, kidId]);
  const week = useMemo(() => weeklySummary(logs), [logs]);
  const alert = useMemo(() => kidAlert(logs), [logs]);
  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [pin, setPin] = useState(false);

  if (!kid) {
    return (
      <section className="mx-auto max-w-xl py-16 text-center">
        {status === 'ready' ? (
          <>
            <h1 className="font-serif text-3xl text-stone-800">No encontramos este perfil</h1>
            <Link href="/familia" className={buttonStyles('secondary', 'mt-6')}>
              Volver a Familia
            </Link>
          </>
        ) : (
          <div className="skeleton mx-auto h-24 max-w-md" />
        )}
      </section>
    );
  }

  const stickers = stickersOf(logs).size;
  const total = activitiesFor(kid.band).length;
  const maxFeeling = Math.max(1, ...week.feelings.map((f) => f.n));
  const missions = logs.filter((l) => l.note && /^(Elegida|Hecha): /.test(l.note)).slice(0, 5);
  const enter = () => {
    if (!hasPin()) return setPin(true);
    enterKidMode(kid.id);
    router.push('/chicos');
  };

  return (
    <m.div variants={stagger(0.06)} initial="hidden" animate="show" className="mx-auto max-w-4xl">
      <m.div variants={fadeUp}>
        <Link href="/familia" className="text-sm text-stone-600 hover:text-stone-800">
          ← Familia
        </Link>
      </m.div>
      <m.header variants={fadeUp} className="mt-4 flex flex-wrap items-center gap-4">
        <span className="kid-theme">
          <AvatarIcon avatar={kid.avatar} size={64} />
        </span>
        <div className="min-w-0 flex-1">
          <h1 className="font-serif text-4xl text-stone-800">{kid.name}</h1>
          <p className="text-stone-600">
            {AGE_BANDS.find((b) => b.id === kid.band)?.label} · {stickers} de {total} stickers · jardín: {gardenStage(logs.length).label.toLowerCase()}
          </p>
        </div>
        <div className="flex w-full flex-wrap gap-2 sm:w-auto">
          {hasKidMode(kid.band) && <Button onClick={enter}>Entrar al modo chico</Button>}
          <Button variant="secondary" onClick={() => setEditing(true)}>
            Editar
          </Button>
        </div>
      </m.header>

      {alert && (
        <m.section variants={fadeUp} className="mt-8 rounded-2xl border border-stone-300 bg-white p-6 shadow-soft" aria-labelledby="aviso">
          <h2 id="aviso" className="font-serif text-2xl text-stone-800">
            Un aviso para acompañar
          </h2>
          <p className="mt-2 leading-relaxed text-stone-700">
            En los últimos 7 días, {kid.name} marcó {alert.feeling.label.toLowerCase()} «muchísimo» en {alert.days} días distintos. No es un diagnóstico: es una
            señal para buscar un momento tranquilo y preguntarle cómo está, sin apuro.
          </p>
          <p className="mt-2 leading-relaxed text-stone-700">
            Si sigue así más de dos semanas, si notas cambios en el sueño, la comida o la escuela, o si habla de hacerse daño, consulta con su pediatra o
            con un profesional de salud mental infantil.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link href="/familia/guia/entrenador-emocional" className="font-medium text-sage-700 underline decoration-sage-300 underline-offset-2">
              Cómo acompañar una emoción fuerte
            </Link>
            <Link href="/familia/guia/cuando-consultar" className="text-sage-700 underline decoration-sage-300 underline-offset-2">
              Cuándo consultar
            </Link>
          </div>
        </m.section>
      )}

      <m.section variants={fadeUp} className="mt-10" aria-labelledby="semana">
        <h2 id="semana" className="mb-4 text-xs uppercase tracking-[0.2em] text-stone-500">
          Últimos 7 días
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
            <p className="font-serif text-4xl tabular-nums text-stone-800">{week.activities}</p>
            <p className="text-sm text-stone-600">
              {week.activities === 1 ? 'actividad' : 'actividades'} en {week.days} {week.days === 1 ? 'día' : 'días'}
            </p>
            {week.skills.length > 0 && (
              <ul className="mt-4 space-y-1 text-sm text-stone-700">
                {week.skills.map((s) => (
                  <li key={s.skill.id} className="flex justify-between gap-3">
                    <span>{s.skill.label}</span>
                    <span className="tabular-nums text-stone-500">{s.n}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
            <h3 className="text-sm font-medium text-stone-800">Emociones que marcó</h3>
            {week.feelings.length === 0 ? (
              <p className="mt-2 text-sm text-stone-600">Todavía no marcó emociones esta semana.</p>
            ) : (
              <ul className="kid-theme mt-3 space-y-2">
                {week.feelings.map((f) => (
                  <li key={f.feeling.id} className="flex items-center gap-3">
                    <FeelingFace feeling={f.feeling.id} size={28} />
                    <span className="w-28 shrink-0 text-sm text-stone-700">{f.feeling.label}</span>
                    <span className="h-2.5 flex-1 overflow-hidden rounded-full bg-stone-100">
                      <span className="block h-full rounded-full bg-sage-600" style={{ width: `${(f.n / maxFeeling) * 100}%` }} />
                    </span>
                    <span className="w-6 text-right text-sm tabular-nums text-stone-500">{f.n}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </m.section>

      {!hasKidMode(kid.band) && <TogetherActivities kid={kid} logs={logs} />}

      {isTeen(kid.band) && (
        <m.p variants={fadeUp} className="mt-8 rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 text-sm leading-relaxed text-stone-700">
          Por su privacidad, a los adolescentes no les mostramos a ti lo que escriben (sus cosas buenas y misiones). Ves sus actividades, las emociones
          que marca y los avisos de seguridad. Se lo contamos también a {kid.name} en la app.
        </m.p>
      )}

      {!isTeen(kid.band) && (week.gratitude.length > 0 || missions.length > 0) && (
        <m.section variants={fadeUp} className="mt-10 grid gap-4 sm:grid-cols-2">
          {week.gratitude.length > 0 && (
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
              <h2 className="text-sm font-medium text-stone-800">Sus cosas buenas de la semana</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-stone-700">
                {week.gratitude.map((g, i) => (
                  <li key={i}>«{g}»</li>
                ))}
              </ul>
            </div>
          )}
          {missions.length > 0 && (
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
              <h2 className="text-sm font-medium text-stone-800">Misiones</h2>
              <ul className="mt-3 space-y-2 text-sm text-stone-700">
                {missions.map((l) => (
                  <li key={l.id}>{l.note}</li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-stone-500">Acompáñale a cumplir las elegidas y celebra el esfuerzo.</p>
            </div>
          )}
        </m.section>
      )}

      <m.section variants={fadeUp} className="mt-10" aria-labelledby="historial">
        <h2 id="historial" className="mb-4 text-xs uppercase tracking-[0.2em] text-stone-500">
          Lo último que hizo
        </h2>
        {logs.length === 0 ? (
          <p className="text-sm text-stone-600">Aún no hay actividades. Entren juntos al modo chico para empezar.</p>
        ) : (
          <ul className="kid-theme divide-y divide-stone-100 rounded-2xl border border-stone-200 bg-white shadow-soft">
            {logs.slice(0, 20).map((l) => (
              <li key={l.id} className="flex items-center gap-3 px-5 py-3">
                {l.feeling ? <FeelingFace feeling={l.feeling} size={28} /> : <span className="h-7 w-7" />}
                <span className="min-w-0 flex-1">
                  <span className="block text-sm text-stone-800">{KID_ACTIVITY_BY_ID[l.activityId]?.title ?? (storyOfLog(l.activityId) ? `Cuento: ${storyOfLog(l.activityId)!.title}` : l.activityId)}</span>
                  {l.feeling && (
                    <span className="block text-xs text-stone-500">
                      {FEELING_BY_ID[l.feeling].label}
                      {l.intensity ? ` · ${INTENSITY_LABEL[l.intensity].toLowerCase()}` : ''}
                    </span>
                  )}
                </span>
                <time className="shrink-0 text-xs text-stone-500" dateTime={l.createdAt.toISOString()}>
                  {fmt.format(l.createdAt)}
                </time>
              </li>
            ))}
          </ul>
        )}
      </m.section>

      <m.section variants={fadeUp} className="mt-12 border-t border-stone-200 pt-6">
        <Button variant="ghost" onClick={() => setDeleting(true)}>
          Borrar el perfil…
        </Button>
      </m.section>

      <Sheet open={editing} onClose={() => setEditing(false)} title="Editar perfil">
        <KidProfileForm
          initial={kid}
          submitLabel="Guardar"
          onSubmit={(patch) => {
            updateKid(kid.id, patch);
            setEditing(false);
          }}
        />
      </Sheet>

      <Sheet open={deleting} onClose={() => setDeleting(false)} title="Borrar el perfil">
        <div className="pb-4">
          <p className="text-sm leading-relaxed text-stone-600">
            Se borran el perfil de {kid.name} y todas sus actividades, emociones y cosas buenas. No se puede deshacer.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              onClick={async () => {
                await deleteKid(kid.id);
                router.replace('/familia');
              }}
            >
              Borrar todo
            </Button>
            <Button variant="secondary" onClick={() => setDeleting(false)}>
              Cancelar
            </Button>
          </div>
        </div>
      </Sheet>

      <Sheet open={pin} onClose={() => setPin(false)} title="Código del adulto">
        <div className="pb-6">
          {pin && (
            <CreatePin
              onDone={() => {
                setPin(false);
                enterKidMode(kid.id);
                router.push('/chicos');
              }}
            />
          )}
        </div>
      </Sheet>
    </m.div>
  );
}
