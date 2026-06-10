import { SiteHeader } from "@/components/marketing/SiteHeader";
import { Footer } from "@/components/marketing/Footer";
import { Pricing } from "@/components/marketing/Pricing";
import { Section } from "@/components/ui/Section";

export const metadata = { title: "Precios — Mercadito" };

const faqs = [
  {
    q: "¿Tengo que pagar para comprar?",
    a: "No. El plan Barrio es gratis para siempre. Solo pagas tus productos y, si aplica, el envío.",
  },
  {
    q: "¿Cuándo conviene Vecino+?",
    a: "Si pides varias veces por semana: el envío gratis y los descuentos suelen cubrir la suscripción.",
  },
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: "Sí, sin permanencia. Cancelas desde la app y mantienes el plan gratis.",
  },
];

export default function PreciosPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-6">
        <Pricing />
        <Section className="pb-10">
          <h2 className="font-display text-3xl font-600">Preguntas frecuentes</h2>
          <div className="mt-6 divide-y divide-clay">
            {faqs.map((f) => (
              <div key={f.q} className="py-5">
                <p className="font-medium">{f.q}</p>
                <p className="mt-1 text-sm text-ink/65">{f.a}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
