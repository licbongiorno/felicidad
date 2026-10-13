import { Dashboard } from '@/components/dashboard/Dashboard';
import Link from 'next/link';
import { TodayLabel } from '@/components/dashboard/TodayLabel';

export default function DashboardPage() {
  return (
    <>
      <header className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <TodayLabel />
          <h1 className="mt-1 font-serif text-4xl text-stone-800 sm:text-5xl">Panel</h1>
        </div>
        <Link
          href="/informe"
          className="group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm text-stone-600 ring-1 ring-stone-200 transition-colors hover:bg-white hover:text-stone-900"
        >
          Informe para tu terapeuta
          <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>
            →
          </span>
        </Link>
      </header>
      <Dashboard />
    </>
  );
}
