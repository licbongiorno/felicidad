import { LogoMark } from '@/components/ui/icons';

/**
 * Pantalla de error de despliegue. Se muestra en lugar de toda la app cuando faltan las
 * variables de Firebase y el modo demo no está activado explícitamente.
 */
export function ConfigError() {
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col justify-center px-6">
      <LogoMark className="h-9 w-9" />
      <h1 className="mt-8 font-serif text-3xl text-stone-800">Configuración incompleta</h1>
      <p className="mt-4 leading-relaxed text-stone-600">
        La aplicación no encuentra la configuración de Firebase, así que no se ha iniciado para evitar que tus datos se
        guarden en un lugar inseguro.
      </p>
      <div className="mt-6 rounded-xl bg-stone-100 px-4 py-3 text-sm leading-relaxed text-stone-700">
        <p className="font-medium">Para el equipo técnico</p>
        <p className="mt-1">
          Define las variables <code className="text-xs">NEXT_PUBLIC_FIREBASE_*</code> (ver{' '}
          <code className="text-xs">.env.local.example</code>), o activa el modo de prueba con{' '}
          <code className="text-xs">NEXT_PUBLIC_DEMO_MODE=true</code>.
        </p>
      </div>
    </main>
  );
}
