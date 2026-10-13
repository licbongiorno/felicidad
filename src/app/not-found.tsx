import Link from 'next/link';
import { LogoMark } from '@/components/ui/icons';
import { buttonStyles } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col justify-center px-6">
      <LogoMark className="h-9 w-9" />
      <p className="mt-8 text-xs uppercase tracking-[0.25em] text-stone-500">Error 404</p>
      <h1 className="mt-2 font-serif text-4xl text-stone-800">Esta página no existe</h1>
      <p className="mt-4 leading-relaxed text-stone-600">
        Quizá el enlace cambió o se escribió mal. Como en la práctica: cuando notes que te perdiste, vuelve con amabilidad.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/dashboard" className={buttonStyles('primary')}>
          Ir al panel
        </Link>
        <Link href="/biblioteca" className={buttonStyles('ghost')}>
          Explorar la biblioteca
        </Link>
      </div>
    </main>
  );
}
