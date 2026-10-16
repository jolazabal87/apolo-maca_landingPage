import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/content';

export function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
      <div className="mb-12 text-center">
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-clay-dark">Todo claro</p>
        <h2 className="font-serif text-5xl font-medium tracking-[-0.05em] sm:text-6xl">
          Preguntas frecuentes
        </h2>
      </div>
      <div className="border-t border-ink/15">
        {faqs.map((faq, index) => (
          <div key={faq.question} className="border-b border-ink/15">
            <button
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              className="flex w-full items-center justify-between py-6 text-left font-serif text-xl font-medium"
            >
              <span>{faq.question}</span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-clay transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
              />
            </button>
            {openFaq === index && (
              <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-ink-soft">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
