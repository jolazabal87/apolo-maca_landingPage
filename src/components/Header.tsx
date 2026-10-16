import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { href: '#maca', label: '¿Qué es la maca?' },
  { href: '#productos', label: 'Productos' },
  { href: '#historia', label: 'Historia' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#faq', label: 'Preguntas frecuentes' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20 border-b border-ink/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#inicio" className="font-serif text-3xl font-semibold tracking-[-0.06em] text-ink">
          apollo<span className="text-clay">.</span>maca
        </a>
        <nav className="hidden items-center gap-9 text-sm font-medium text-ink-soft md:flex">
          {navLinks.map((link) => (
            <a key={link.href} className="transition-colors hover:text-clay" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-cream transition-all hover:-translate-y-0.5 hover:bg-clay md:flex"
        >
          Contáctanos <ArrowRight size={15} />
        </a>
        <button
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="text-ink md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menuOpen && (
        <nav className="absolute left-0 right-0 top-full flex flex-col gap-5 border-t border-ink/10 bg-cream px-6 py-6 text-sm font-medium md:hidden">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setMenuOpen(false)} className="font-semibold text-clay">
            Contáctanos
          </a>
        </nav>
      )}
    </header>
  );
}
