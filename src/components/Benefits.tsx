import { benefits } from '../data/content';

export function Benefits() {
  return (
    <section id="beneficios" className="border-y border-ink/10 bg-cream-dark/50">
      <div className="mx-auto grid max-w-7xl gap-0 px-6 py-6 sm:grid-cols-3 lg:px-10 lg:py-0">
        {benefits.map(({ icon: Icon, title, text }, index) => (
          <div
            key={title}
            className={`flex gap-4 py-7 sm:px-6 lg:py-10 ${index !== 0 ? 'border-t border-ink/10 sm:border-l sm:border-t-0' : ''}`}
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-clay/10 text-clay-dark">
              <Icon size={20} strokeWidth={1.7} />
            </div>
            <div>
              <h2 className="font-serif text-xl font-medium">{title}</h2>
              <p className="mt-1 text-sm leading-6 text-ink-soft">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
