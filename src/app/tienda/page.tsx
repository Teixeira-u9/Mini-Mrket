import { SiteHeader } from "@/components/marketing/SiteHeader";
import { Footer } from "@/components/marketing/Footer";
import { Section } from "@/components/ui/Section";
import { DeliveryBanner } from "@/components/shop/DeliveryBanner";
import { PromoBanner } from "@/components/shop/PromoBanner";
import { CatalogBrowser } from "@/components/shop/CatalogBrowser";
import { getCatalogService } from "@/lib/services/catalog.service";

export const metadata = { title: "Tienda — Mercadito" };

export default async function TiendaPage() {
  // Datos cargados desde la capa de servicios (mock hoy, HTTP cuando exista API).
  const catalog = getCatalogService();
  const [products, categories, windows] = await Promise.all([
    catalog.getProducts(),
    catalog.getCategories(),
    catalog.getDeliveryWindows(),
  ]);

  return (
    <>
      <SiteHeader />
      <main className="pb-10">
        <Section className="pt-8">
          <h1 className="font-display text-3xl font-600 tracking-tight sm:text-4xl">
            ¿Qué necesitas hoy?
          </h1>
          <p className="mt-1 text-ink/60">
            {products.length} productos · entrega en menos de 60 minutos
          </p>

          <div className="mt-6 space-y-3">
            <DeliveryBanner windows={windows} />
            <PromoBanner />
          </div>

          <div className="mt-8">
            <CatalogBrowser products={products} categories={categories} />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
