import type { Metadata } from "next";
import "./globals.css";
import { CartDrawer } from "@/components/shop/CartDrawer";

export const metadata: Metadata = {
  title: "Mercadito — Tu mini market de barrio en 60 minutos",
  description:
    "Frescos, despensa y limpieza a tu puerta en menos de 60 minutos. Carrito sin registro, pago con Nequi, PSE, tarjeta o contraentrega.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Fraunces (display) + Hanken Grotesk (cuerpo). Las variables CSS se
            definen en globals.css y Tailwind las consume vía font-display/font-sans. */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..700&family=Hanken+Grotesk:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <CartDrawer />
      </body>
    </html>
  );
}
