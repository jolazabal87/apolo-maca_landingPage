import { useState } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { sierraImages } from '../data/content';

export function WhatIsMaca() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sierraImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sierraImages.length) % sierraImages.length);

  return (
    <section id="maca" className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-10">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-clay-dark">Origen Andino</p>
          <h2 className="font-serif text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-6xl">
            ¿Qué es la <br />
            <em className="text-clay">maca peruana?</em>
          </h2>
          <p className="mt-7 text-base leading-8 text-ink-soft sm:text-lg">
            La maca es un cultivo andino que crece a más de 3,500 m.s.n.m. en la Sierra Central del Perú,
            principalmente en Junín y Cerro de Pasco. Es considerada un superfood consumido mundialmente por sus
            propiedades nutricionales y su historia que data de épocas pre-incas.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <div className="flex items-center gap-3 text-sm font-semibold text-ink">
              <Check size={18} className="text-clay" /> Cultivo de altura (+3,500 m.s.n.m.)
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold text-ink">
              <Check size={18} className="text-clay" /> Superfood consumido a nivel mundial
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold text-ink">
              <Check size={18} className="text-clay" /> Historia milenaria desde épocas pre-incas
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2.5rem] bg-moss/20 shadow-2xl">
          <div className="relative aspect-[1.1] w-full">
            <img
              src={sierraImages[currentSlide].url}
              alt={sierraImages[currentSlide].title}
              loading="lazy"
              className="h-full w-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-cream">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">
                {sierraImages[currentSlide].subtitle}
              </p>
              <p className="mt-1 font-serif text-2xl font-medium">{sierraImages[currentSlide].title}</p>
            </div>
          </div>

          <button
            onClick={prevSlide}
            aria-label="Imagen anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-cream/80 p-2 text-ink backdrop-blur-sm transition-all hover:bg-cream hover:scale-110"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Siguiente imagen"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-cream/80 p-2 text-ink backdrop-blur-sm transition-all hover:bg-cream hover:scale-110"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-4 right-6 flex gap-2">
            {sierraImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${currentSlide === idx ? 'w-6 bg-gold' : 'w-2 bg-cream/50'}`}
                aria-label={`Ir a imagen ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
