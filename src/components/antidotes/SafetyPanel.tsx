import { CRISIS_RESOURCES } from '@/config/safety';
import Link from 'next/link';
import { Button, buttonStyles } from '@/components/ui/Button';
import { isPublished } from '@/domain/governance';

export function SafetyPanel({ onBack }: { onBack: () => void }) {
  return (
    <section role="alert" className="mx-auto max-w-lg rounded-2xl border border-stone-300 bg-white p-8">
      <h2 className="font-serif text-2xl text-stone-800">Gracias por decirlo</h2>
      <p className="mt-4 leading-relaxed text-stone-600">
        Lo que sientes ahora merece la atención de una persona, no de un ejercicio. Este no es el
        momento para un antídoto: es el momento de pedir ayuda.
      </p>
      <ul className="mt-6 space-y-3">
        {CRISIS_RESOURCES.map((r) => (
          <li key={r.label} className="flex items-baseline justify-between gap-4 border-b border-stone-100 pb-3">
            <span className="text-sm text-stone-600">{r.label}</span>
            {r.href ? (
              <a href={r.href} className="font-medium text-sage-700 underline decoration-sage-300 underline-offset-2 hover:decoration-sage-700">
                {r.contact}
              </a>
            ) : (
              <span className="text-right font-medium text-stone-700">{r.contact}</span>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm leading-relaxed text-stone-600">
        Si estás en peligro inmediato, llama a emergencias o acude al servicio de urgencias más cercano.
        Si puedes, quédate cerca de alguien de confianza.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        {isPublished('herramienta', 'plan-seguridad') && (
          <Link href="/plan-de-seguridad" className={buttonStyles('primary')}>
            Abrir mi plan de seguridad
          </Link>
        )}
        <Button variant="secondary" onClick={onBack}>
          Volver al inicio
        </Button>
      </div>
    </section>
  );
}
