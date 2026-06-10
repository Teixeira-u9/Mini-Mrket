import { SiteHeader } from "@/components/marketing/SiteHeader";
import { Footer } from "@/components/marketing/Footer";
import { ContactForm } from "@/components/marketing/ContactForm";

export const metadata = { title: "Contacto — Mercadito" };

export default function ContactoPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-6">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
