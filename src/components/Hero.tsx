import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-14 sm:pt-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:px-10 lg:pb-28 lg:pt-24"
    >
      <div className="relative z-10 animate-fade-up">
        <p className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-clay-dark">
          <span className="h-px w-8 bg-clay" /> Raíz de los Andes
        </p>
        <h1 className="max-w-2xl font-serif text-[clamp(3.7rem,8vw,7.7rem)] font-medium leading-[0.89] tracking-[-0.065em] text-ink">
          Vuelve a tu <em className="font-serif text-clay">centro.</em>
        </h1>
        <p className="mt-8 max-w-md text-base leading-7 text-ink-soft sm:text-lg">
          Maca peruana gelatinizada. Una raíz milenaria para acompañar tu energía, enfoque y bienestar todos los días.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-5">
          <a
            href="#contacto"
            className="group flex items-center gap-3 rounded-full bg-clay px-6 py-4 text-sm font-bold text-white shadow-[0_12px_28px_rgba(168,94,42,0.2)] transition-all hover:-translate-y-1 hover:bg-clay-dark"
          >
            Escríbenos <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#historia"
            className="flex items-center gap-2 text-sm font-semibold text-ink underline decoration-ink/25 underline-offset-8 transition-colors hover:text-clay"
          >
            Conoce nuestra raíz
          </a>
        </div>
        <div className="mt-12 flex items-center gap-5 border-t border-ink/15 pt-5 text-xs text-ink-soft">
          <div className="flex -space-x-2">
            <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-cream bg-[#d9af84] text-[10px] font-bold">LM</span>
            <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-cream bg-moss text-[10px] font-bold text-white">AR</span>
            <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-cream bg-clay text-[10px] font-bold text-white">VS</span>
          </div>
          <span>
            <strong className="text-ink">+2,000 personas</strong>
            <br />
            ya eligieron su energía natural
          </span>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[610px] lg:justify-self-end">
        <div className="absolute -right-12 -top-14 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-12 -left-8 h-64 w-64 rounded-full bg-clay/20 blur-3xl" />
        <div className="relative aspect-[0.96] overflow-hidden rounded-[2.5rem] bg-[#d8c69f] p-6 shadow-2xl shadow-ink/10">
          <img
            src="./pintura.png"
            alt="Empaque de maca peruana Apollo"
            loading="eager"
            className="h-full w-full object-contain object-center transition-transform duration-700 hover:scale-[1.03]"
          />
          <div className="absolute bottom-5 left-5 rounded-full border border-ink/15 bg-cream/75 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-ink backdrop-blur-sm">
            SUPERFOODS
          </div>
        </div>
        <div className="animate-float-slow absolute -bottom-6 -right-3 rounded-2xl bg-ink px-5 py-4 text-cream shadow-xl sm:-right-8 sm:px-6 sm:py-5">
          <span className="block font-serif text-3xl leading-none">100%</span>
          <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-cream/65">Natural</span>
        </div>
      </div>
    </section>
  );
}
