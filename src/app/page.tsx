import { SiteHeader } from "@/components/marketing/SiteHeader";
import { Footer } from "@/components/marketing/Footer";
import { Hero } from "@/components/marketing/Hero";
import { Features } from "@/components/marketing/Features";
import { Testimonials } from "@/components/marketing/Testimonials";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <Testimonials />

        {/* CTA final */}
        <Section className="py-20">
          <div className="relative overflow-hidden rounded-xl2 bg-tomato px-6 py-16 text-center text-paper sm:px-12">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-sun/30 blur-2xl" />
            <h2 className="relative font-display text-4xl font-600 tracking-tight sm:text-5xl">
              ¿Se te acabó algo? Pídelo ya.
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-paper/85">
              Sin registro, sin filas, sin cargar bolsas. Tu mercado llega en menos de 60 minutos.
            </p>
            <div className="relative mt-8">
              <ButtonLink href="/tienda" size="lg" variant="secondary" className="bg-paper text-tomato">
                Abrir la tienda
              </ButtonLink>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
