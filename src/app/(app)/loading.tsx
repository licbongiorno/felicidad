/** Estado de carga entre secciones: esqueleto con la forma general de una página. */
export default function Loading() {
  return (
    <div aria-busy="true" aria-label="Cargando" className="space-y-6">
      <div className="skeleton h-10 w-56" />
      <div className="skeleton h-4 w-full max-w-xl" />
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="skeleton h-40" />
        <div className="skeleton h-40" />
      </div>
    </div>
  );
}
