import { useState } from 'react';
import { Check, Send, AlertCircle, Loader2 } from 'lucide-react';

const CONTACT_EMAIL = 'hola.apolo@grupomfo.com.ar';

// ⚠️ REEMPLAZA "x123abcd" CON TU FORM ID DE FORMSPREE (creado en https://formspree.io)
const FORMSPREE_FORM_ID = 'xbglebjq';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Nuevo mensaje de contacto: ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const errorData = await response.json();
        console.error('Error al enviar el formulario:', errorData);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (err) {
      console.error('Error de red/petición:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contacto" className="bg-ink px-6 py-20 text-cream sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:px-10">
        <div>
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-gold">
            Ponte en contacto
          </p>
          <h2 className="max-w-xl font-serif text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-7xl">
            Estamos aquí para <em className="text-gold">escucharte.</em>
          </h2>
          <p className="mt-7 max-w-md text-base leading-7 text-cream/65">
            ¿Tienes dudas sobre el producto, alianzas o pedidos especiales? Envíanos un mensaje y te responderemos a la brevedad.
          </p>
          <p className="mt-5 text-sm text-cream/50">
            También puedes escribirnos directamente a{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-gold underline underline-offset-4"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>

        <div className="rounded-[1.75rem] bg-cream p-6 text-ink shadow-2xl sm:p-8">
          <h3 className="font-serif text-2xl font-medium">Envíanos un mensaje</h3>
          <p className="mb-6 mt-1 text-sm text-ink-soft">
            Completa el formulario y nos pondremos en contacto.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                required
                disabled={status === 'submitting'}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Tu nombre completo"
                className="w-full rounded-xl border border-ink/15 bg-transparent px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-clay disabled:opacity-50"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                required
                disabled={status === 'submitting'}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="tu@email.com"
                className="w-full rounded-xl border border-ink/15 bg-transparent px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-clay disabled:opacity-50"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                required
                rows={4}
                disabled={status === 'submitting'}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="¿En qué te podemos ayudar?"
                className="w-full resize-none rounded-xl border border-ink/15 bg-transparent px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-clay disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="mt-2 flex w-full items-center justify-center gap-3 rounded-full bg-clay px-5 py-4 text-sm font-bold text-white transition-all hover:bg-clay-dark disabled:opacity-50"
            >
              {status === 'submitting' && (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Enviando...
                </>
              )}
              {status === 'success' && (
                <>
                  <Check size={18} /> ¡Mensaje enviado con éxito!
                </>
              )}
              {status === 'error' && (
                <>
                  <AlertCircle size={18} /> Error al enviar. Inténtalo de nuevo.
                </>
              )}
              {status === 'idle' && (
                <>
                  <Send size={18} /> Enviar mensaje
                </>
              )}
            </button>
          </form>

          <p className="mt-4 text-center text-[11px] text-ink-soft">
            Respondemos habitualmente en menos de 24 horas.
          </p>
        </div>
      </div>
    </section>
  );
}