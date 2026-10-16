import { ShoppingBag } from 'lucide-react';
import { infoProducts } from '../data/content';

export function Products() {
  return (
    <section id="productos" className="bg-cream-dark/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-clay-dark">
            Línea de bienestar
          </p>
          <h2 className="font-serif text-5xl font-medium tracking-[-0.05em] sm:text-6xl">
            Nuestros Productos
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink-soft">
            Formatos pensados para adaptarse a tu estilo de vida y acompañar tus hábitos cotidianos.
          </p>
        </div>

        {infoProducts.length === 0 ? (
          <p className="text-center text-sm text-ink-soft">
            Pronto publicaremos nuestros productos aquí.
          </p>
        ) : (
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {infoProducts.map((product) => (
              <div
                key={product.id}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-cream p-8 shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                {product.tag && (
                  <span className="absolute right-6 top-6 rounded-full bg-clay/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-clay-dark">
                    {product.tag}
                  </span>
                )}

                <div className="my-6 flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl bg-[#f2e8d5]/60 p-6">
                  {product.url && (
                    <img
                      src={product.url}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>

                <h3 className="font-serif text-2xl font-medium text-ink">
                  {product.name}
                </h3>
                
                <p className="mt-2 flex-grow text-sm leading-6 text-ink-soft">
                  {product.description}
                </p>

                <a
                  href="#contacto"
                  className="mt-8 flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-cream transition-colors hover:bg-clay"
                >
                  <ShoppingBag size={16} /> Consultar
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}