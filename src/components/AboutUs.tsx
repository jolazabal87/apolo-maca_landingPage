import { valueCards } from '../data/content';

export function AboutUs() {
  return (
    <section id="nosotros" className="border-t border-ink/10 bg-cream-dark/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-clay-dark">
              El origen de MFO2.0
            </p>
            <h2 className="font-serif text-5xl font-medium leading-[0.98] tracking-[-0.05em] sm:text-6xl">
              De la experiencia <br />
              <em className="text-clay font-serif">al propósito.</em>
            </h2>
            <p className="mt-7 text-base leading-8 text-ink-soft sm:text-lg">
              MFO2.0 nace del encuentro de 3 socios que compartieron más de 20 años de trayectoria en la vida
              corporativa y el liderazgo en PYMES. Tras décadas representando y construyendo marcas de valor,
              decidimos unir fuerzas para cumplir un sueño compartido.
            </p>
            <p className="mt-4 text-base leading-8 text-ink-soft">
              Queríamos crear algo propio, con significado real. Un proyecto enfocado en desarrollar productos de{' '}
              <strong>triple impacto</strong> que promuevan la salud, el equilibrio y el bienestar integral de las
              personas.
            </p>
            <a
            href="https://www.grupomfo.com.ar"
            className="flex items-center gap-2 text-sm font-semibold text-ink underline decoration-ink/25 underline-offset-8 transition-colors hover:text-clay"
            >
              Conocenos +
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {valueCards.map((card) => (
              <div
                key={card.title}
                className={`rounded-3xl border border-ink/10 bg-cream p-7 shadow-sm transition-all hover:shadow-md ${card.span ? 'sm:col-span-2' : ''}`}
              >
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-clay/10 text-clay-dark">
                  <card.icon size={22} />
                </div>
                <h3 className="font-serif text-xl font-medium text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
