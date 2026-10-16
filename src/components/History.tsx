import { useState, useEffect } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { historiaImages } from '../data/content';

export function History() {
  const [historiaSlide, setHistoriaSlide] = useState(0);

  // Precargar las imágenes al montar el componente para que el cambio sea instantáneo
  useEffect(() => {
    historiaImages.forEach((image) => {
      const img = new Image();
      img.src = image.url;
    });
  }, []);

  const handlePrev = () => {
    setHistoriaSlide((prev) => (prev - 1 + historiaImages.length) % historiaImages.length);
  };

  const handleNext = () => {
    setHistoriaSlide((prev) => (prev + 1) % historiaImages.length);
  };

  return (
    <section
      id="historia"
      className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:py-32 lg:grid-cols-2 lg:gap-24 lg:px-10"
    >
      <div className="relative aspect-[1.05] w-full overflow-hidden rounded-[2rem] bg-moss shadow-2xl">
        <div className="relative h-full w-full">
          <img
            src={historiaImages[historiaSlide].url}
            alt={historiaImages[historiaSlide].title}
            loading="eager"
            className="h-full w-full object-cover transition-opacity duration-300"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-moss-dark/85 via-transparent to-transparent" />
          <div className="pointer-events-none absolute bottom-6 left-6 right-20 text-cream">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cream/70">
              {historiaImages[historiaSlide].subtitle}
            </p>
            <p className="mt-1 font-serif text-3xl font-medium">
              {historiaImages[historiaSlide].title}
            </p>
          </div>
        </div>

        <button
          onClick={handlePrev}
          aria-label="Imagen anterior"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-cream/80 p-2 text-ink backdrop-blur-sm transition-all hover:bg-cream hover:scale-110 active:scale-95"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={handleNext}
          aria-label="Siguiente imagen"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-cream/80 p-2 text-ink backdrop-blur-sm transition-all hover:bg-cream hover:scale-110 active:scale-95"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-4 right-6 z-10 flex gap-2">
          {historiaImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setHistoriaSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                historiaSlide === idx ? 'w-6 bg-gold' : 'w-2 bg-cream/50 hover:bg-cream/80'
              }`}
              aria-label={`Ir a imagen ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-clay-dark">
          Saber ancestral & Comunidad
        </p>
        <h2 className="max-w-xl font-serif text-5xl font-medium leading-[0.98] tracking-[-0.05em] sm:text-6xl">
          Manos que cultivan.
          <br />
          <em className="font-serif text-clay">Tradición que fortalece.</em>
        </h2>
        <p className="mt-7 max-w-lg text-base leading-8 text-ink-soft">
          En las alturas de los Andes, la cosecha de maca no es solo un proceso agrícola; es un ritual heredado
          de generación en generación. Respetamos los tiempos de la tierra y honramos el conocimiento milenario
          que vive en la Sierra Central del Perú.
        </p>
        <p className="mt-5 max-w-lg text-base leading-8 text-ink-soft">
          Este camino está liderado por las mujeres agricultoras de las comunidades andinas. Su cuidado
          minucioso, sabiduría y esfuerzo diario son el corazón de Apollo, garantizando un superfood puro mientras
          impulsamos el desarrollo y bienestar de sus familias.
        </p>
        <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-ink">
          <Check size={18} className="text-clay" /> Cosecha manual y respetuosa con la tierra
        </div>
        <div className="mt-3 flex items-center gap-3 text-sm font-semibold text-ink">
          <Check size={18} className="text-clay" /> Impacto social y comercio justo en comunidades
        </div>
        <div className="mt-3 flex items-center gap-3 text-sm font-semibold text-ink">
          <Check size={18} className="text-clay" /> Liderazgo e historia femenina en el origen andino
        </div>
      </div>
    </section>
  );
}