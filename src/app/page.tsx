import { isPublished } from '@/domain/governance';
import Link from 'next/link';
import { SAFETY_DISCLAIMER } from '@/config/safety';
import { buttonStyles } from '@/components/ui/Button';
import { Stagger, StaggerItem } from '@/components/motion/Reveal';
import { LogoMark } from '@/components/ui/icons';
import { PRACTICES } from '@/domain/practices';
import { ANTIDOTES } from '@/domain/antidotes';
import { ARTICLES } from '@/domain/library';
import { PROGRAMS } from '@/domain/programs';
import { JOURNAL_TEMPLATES } from '@/domain/journal';

const PILLARS = [
  {
    title: 'Entrenamiento contemplativo',
    body: 'Prácticas atencionales, constructivas y deconstructivas, organizadas según la neurociencia de la meditación.',
  },
  {
    title: 'Psicología positiva',
    body: 'Intervenciones de gratitud, saboreo y bienestar con su evidencia y sus límites declarados.',
  },
  {
    title: 'Flexibilidad psicológica',
    body: 'Defusión cognitiva y clarificación de valores desde la Terapia de Aceptación y Compromiso.',
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Halos ambientales: deriva muy lenta, desactivada con "reducir movimiento" */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-40 h-[34rem] w-[34rem] animate-drift rounded-full bg-sage-100/60 blur-3xl" />
        <div className="absolute -bottom-48 -left-40 h-[30rem] w-[30rem] animate-drift-slow rounded-full bg-stone-200/40 blur-3xl" />
      </div>

      <Stagger as="div" step={0.09} delay={0.1} className="relative mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-24">
        <StaggerItem>
          <LogoMark className="h-9 w-9" />
        </StaggerItem>
        <StaggerItem>
          <p className="mt-8 text-xs uppercase tracking-[0.3em] text-stone-600">Entrenamiento</p>
          <h1 className="mt-3 font-serif text-5xl tracking-tight text-stone-800 sm:text-7xl">Habilidades Psicológicas</h1>
        </StaggerItem>
        <StaggerItem>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
            Una herramienta para entrenar la mente con la misma seriedad con que se entrena el cuerpo: práctica
            regular, medición honesta y fundamentos explícitos.
          </p>
        </StaggerItem>

        <Stagger as="ul" step={0.08} delay={0.35} className="mt-14 grid gap-8 border-t border-stone-200/80 pt-10 sm:grid-cols-3">
          {PILLARS.map((p, i) => (
            <StaggerItem as="li" key={p.title}>
              <span aria-hidden className="font-serif text-sm tabular-nums text-stone-600">0{i + 1}</span>
              <h2 className="mt-2 font-serif text-lg text-stone-800">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{p.body}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <StaggerItem>
          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-5">
            {[
              [PRACTICES.filter((p) => isPublished('practica', p.id)).length, 'técnicas guiadas'],
              [ANTIDOTES.length, 'antídotos emocionales'],
              [JOURNAL_TEMPLATES.filter((t) => !t.hidden && isPublished('diario', t.type)).length, 'registros de diario'],
              [ARTICLES.filter((a) => isPublished('articulo', a.id)).length, 'artículos de fondo'],
              [PROGRAMS.length, 'programas'],
            ].map(([n, label]) => (
              <div key={label as string}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-serif text-3xl tabular-nums text-stone-800">{n}</dd>
                <dd className="mt-1 text-xs text-stone-600">{label}</dd>
              </div>
            ))}
          </dl>
        </StaggerItem>

        <StaggerItem className="mt-14">
          <Link href="/login" className={buttonStyles('primary', 'group px-7 py-3')}>
            Entrar
            <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>
              →
            </span>
          </Link>
        </StaggerItem>

        <StaggerItem>
          <p className="mt-20 max-w-xl text-xs leading-relaxed text-stone-600">{SAFETY_DISCLAIMER}</p>
          <p className="mt-3 text-xs">
            <Link href="/privacidad" className="text-sage-700 underline decoration-sage-300 underline-offset-2">
              Privacidad
            </Link>
          </p>
        </StaggerItem>
      </Stagger>
    </div>
  );
}
