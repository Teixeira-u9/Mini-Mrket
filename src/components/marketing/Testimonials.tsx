import { Section } from "@/components/ui/Section";
import { testimonials } from "@/lib/data/marketing";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <Section id="testimonios" className="scroll-mt-20 py-20">
      <div className="rounded-xl2 bg-leaf-dark px-6 py-16 text-paper sm:px-12">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-paper/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            El barrio habla
          </span>
          <h2 className="mt-4 font-display text-4xl font-600 tracking-tight sm:text-5xl">
            Vecinos que ya no cargan mercado
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl2 bg-paper p-6 text-ink shadow-pop"
            >
              <div className="flex gap-0.5 text-sun">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 font-display text-lg italic leading-snug">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-clay pt-4">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-leaf/10 text-xl">
                  {t.avatar}
                </span>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-ink/55">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}
