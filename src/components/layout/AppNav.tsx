'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { m } from 'motion/react';
import { useState } from 'react';
import { useAuth } from '@/providers/AuthProvider';
import { useUiStore } from '@/store/useUiStore';
import { calm, gentleSpring } from '@/lib/motion';
import { haptic } from '@/lib/haptics';
import { Sheet } from '@/components/ui/Sheet';
import { isPublished } from '@/domain/governance';
import {
  IconAntidote,
  IconBook,
  IconCards,
  IconGear,
  IconGym,
  IconJournal,
  IconLeave,
  IconMore,
  IconPanel,
  IconJournal as IconReport,
  IconPath,
  IconPulse,
  IconSprout,
  LogoMark,
} from '@/components/ui/icons';

const PRIMARY = [
  { href: '/dashboard', label: 'Panel', Icon: IconPanel },
  { href: '/gimnasio', label: 'Gimnasio', Icon: IconGym },
  { href: '/antidotos', label: 'Antídotos', Icon: IconAntidote },
  { href: '/diario', label: 'Diario', Icon: IconJournal },
];

const SECONDARY = [
  { href: '/crecimiento', label: 'Tu jardín', Icon: IconSprout, description: 'Lo que cultivaste y tus habilidades DBT' },
  { href: '/programas', label: 'Programas', Icon: IconPath, description: 'Recorridos guiados de varias semanas' },
  { href: '/evaluaciones', label: 'Evaluaciones', Icon: IconPulse, description: 'Cuestionarios validados para seguir tu evolución' },
  { href: '/biblioteca', label: 'Biblioteca', Icon: IconBook, description: 'Fundamentos científicos en lenguaje claro' },
  { href: '/cartas', label: 'Cartas', Icon: IconCards, description: 'Perspectivas para romper la rumiación' },
  { href: '/informe', label: 'Informe', Icon: IconReport, description: 'Resumen imprimible para tu terapeuta' },
  { href: '/ajustes', label: 'Ajustes', Icon: IconGear, description: 'Voz guía, recordatorios y tus datos' },
  ...(isPublished('herramienta', 'plan-seguridad')
    ? [{ href: '/plan-de-seguridad', label: 'Plan de seguridad', Icon: IconAntidote, description: 'Tu plan para los momentos de crisis' }]
    : []),
];

// Ajustes no va en la barra de escritorio: tiene su propio icono.
const ALL = [PRIMARY[0], SECONDARY[0], ...PRIMARY.slice(1), SECONDARY[1], SECONDARY[2], SECONDARY[3]];

/**
 * Escritorio (lg+): barra superior con todas las secciones y un indicador que se desliza.
 * Móvil y tableta: barra inferior con cuatro secciones + "Más" (hoja deslizable).
 * Ambas se retiran en modo inmersivo.
 */
export function AppNav() {
  const pathname = usePathname();
  const { signOut } = useAuth();
  const immersive = useUiStore((s) => s.immersive);
  const setSearchOpen = useUiStore((s) => s.setSearchOpen);
  const [moreOpen, setMoreOpen] = useState(false);
  const isActive = (href: string) => pathname.startsWith(href);
  const moreActive = SECONDARY.some((l) => isActive(l.href));

  return (
    <>
      <m.header
        animate={{ y: immersive ? -16 : 0, opacity: immersive ? 0 : 1 }}
        transition={calm}
        className={`sticky top-0 z-30 border-b print:hidden border-stone-200/60 bg-stone-50/80 backdrop-blur-md ${immersive ? 'pointer-events-none' : ''}`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <Link href="/dashboard" className="group flex items-center gap-2.5 font-serif text-lg text-stone-800">
            <LogoMark className="h-6 w-6 transition-transform duration-700 ease-out group-hover:rotate-90 group-hover:scale-110" />
            Eudaimonía
          </Link>

          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Buscar (Ctrl+K)"
            className="ml-auto mr-1 flex items-center gap-2 rounded-full px-3 py-1.5 text-sm text-stone-500 ring-1 ring-stone-200 transition-colors hover:bg-white hover:text-stone-800 xl:mr-3"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <circle cx="11" cy="11" r="6.5" />
              <path d="M16 16l4 4" strokeLinecap="round" />
            </svg>
            <span className="hidden sm:inline">Buscar</span>
            <kbd className="hidden rounded border border-stone-300 px-1 text-[10px] text-stone-500 lg:inline">⌘K</kbd>
          </button>

          <nav className="hidden items-center gap-0.5 text-sm xl:flex">
            {ALL.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={`relative rounded-full px-3.5 py-1.5 transition-colors duration-200 ${
                    active ? 'text-stone-900' : 'text-stone-600 hover:text-stone-800'
                  }`}
                >
                  {active && (
                    <m.span layoutId="nav-pill" transition={gentleSpring} className="absolute inset-0 rounded-full bg-white shadow-soft ring-1 ring-stone-200/80" />
                  )}
                  <span className="relative">{label}</span>
                </Link>
              );
            })}
            <Link
              href="/ajustes"
              aria-label="Ajustes"
              aria-current={isActive('/ajustes') ? 'page' : undefined}
              className={`ml-2 rounded-full p-2 transition-colors hover:bg-stone-100 ${isActive('/ajustes') ? 'text-stone-900' : 'text-stone-500 hover:text-stone-800'}`}
            >
              <IconGear className="h-5 w-5" />
            </Link>
            <button type="button" onClick={signOut} aria-label="Salir" className="rounded-full p-2 text-stone-500 transition-colors hover:bg-stone-100 hover:text-stone-800">
              <IconLeave className="h-5 w-5" />
            </button>
          </nav>

          <button
            type="button"
            onClick={signOut}
            aria-label="Salir"
            className="rounded-full p-2 text-stone-500 transition-colors hover:bg-stone-100 hover:text-stone-700 xl:hidden"
          >
            <IconLeave className="h-5 w-5" />
          </button>
        </div>
      </m.header>

      <m.nav
        aria-label="Secciones"
        initial={false}
        animate={{ y: immersive ? '110%' : '0%' }}
        transition={calm}
        className="pb-safe fixed inset-x-0 bottom-0 z-30 print:hidden border-t border-stone-200/70 bg-stone-50/90 backdrop-blur-md xl:hidden"
      >
        <ul className="mx-auto grid max-w-lg grid-cols-5">
          {PRIMARY.map(({ href, label, Icon }) => (
            <li key={href}>
              <TabLink href={href} label={label} active={isActive(href)}>
                <Icon className="h-[22px] w-[22px]" />
              </TabLink>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() => {
                haptic('tick');
                setMoreOpen(true);
              }}
              className={`relative flex w-full flex-col items-center gap-1 pb-1 pt-3 text-[11px] transition-colors active:scale-95 ${
                moreActive ? 'text-sage-700' : 'text-stone-500'
              }`}
            >
              {moreActive && (
                <m.span layoutId="tab-indicator" transition={gentleSpring} className="absolute top-0 h-0.5 w-8 rounded-full bg-sage-600" />
              )}
              <IconMore className="h-[22px] w-[22px]" />
              Más
            </button>
          </li>
        </ul>
      </m.nav>

      <Sheet open={moreOpen} onClose={() => setMoreOpen(false)} title="Más">
        <ul className="space-y-2 pb-4">
          {SECONDARY.map(({ href, label, Icon, description }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setMoreOpen(false)}
                className={`flex items-center gap-4 rounded-2xl border p-4 transition-colors ${
                  isActive(href) ? 'border-sage-300 bg-white' : 'border-stone-200 bg-white/60 hover:bg-white'
                }`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-50 text-sage-700">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-medium text-stone-800">{label}</span>
                  <span className="block text-sm text-stone-600">{description}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Sheet>
    </>
  );
}

function TabLink({ href, label, active, children }: { href: string; label: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={() => haptic('tick')}
      aria-current={active ? 'page' : undefined}
      className={`relative flex flex-col items-center gap-1 pb-1 pt-3 text-[11px] transition-colors active:scale-95 ${
        active ? 'text-sage-700' : 'text-stone-500'
      }`}
    >
      {active && <m.span layoutId="tab-indicator" transition={gentleSpring} className="absolute top-0 h-0.5 w-8 rounded-full bg-sage-600" />}
      {children}
      {label}
    </Link>
  );
}
