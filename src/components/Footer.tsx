export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink/10 bg-cream px-6 py-20 text-ink">
      <img
        src="https://images.pexels.com/photos/33569049/pexels-photo-33569049.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="Sierra central del Perú - Donde todo comienza"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-75 grayscale blur-[1.5px] contrast-125"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-cream/90 via-cream/50 to-cream/30" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left lg:px-10">
        <div>
          <a href="#inicio" className="font-serif text-3xl font-bold tracking-[-0.06em] text-ink drop-shadow-sm">
            apollo<span className="text-clay">.</span>maca
          </a>
          <p className="mt-1 text-xs font-bold text-ink drop-shadow-sm">
            Una raíz, un propósito. Una raíz, todos los días.
          </p>
        </div>
        <p className="text-xs font-bold text-ink drop-shadow-sm">©2026 Apollo.</p>
        <a
          href="#contacto"
          className="text-xs font-bold uppercase tracking-[0.15em] text-clay-dark drop-shadow-sm transition-colors hover:text-clay"
        >
          Contáctanos
        </a>
      </div>
    </footer>
  );
}
