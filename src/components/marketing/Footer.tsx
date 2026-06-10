import Link from "next/link";
import { Sprout } from "lucide-react";
import { platformConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-clay bg-leaf-dark text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display text-xl">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-paper text-leaf-dark">
              <Sprout className="h-5 w-5" />
            </span>
            Mercadito
          </div>
          <p className="mt-4 max-w-xs text-sm text-paper/70">
            Tu tienda de barrio, ahora a un toque. Frescos y despensa en menos de 60 minutos.
          </p>
        </div>

        <FooterCol
          title="Plataforma"
          items={[
            { label: "Tienda", href: "/tienda" },
            { label: "Características", href: "/#caracteristicas" },
            { label: "Precios", href: "/precios" },
          ]}
        />
        <FooterCol
          title="Compañía"
          items={[
            { label: "Contacto", href: "/contacto" },
            { label: "Trabaja con nosotros", href: "/contacto" },
            { label: "Para tiendas", href: "/precios" },
          ]}
        />
        <div>
          <h4 className="font-display text-lg">Pagos disponibles</h4>
          <ul className="mt-4 space-y-2 text-sm text-paper/70">
            {platformConfig.paymentMethods.map((m) => (
              <li key={m.id}>{m.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/15 py-5 text-center text-xs text-paper/60">
        © {new Date().getFullYear()} Mercadito · Hecho para el barrio.
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="font-display text-lg">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-paper/70">
        {items.map((i) => (
          <li key={i.label}>
            <Link href={i.href} className="transition-colors hover:text-paper">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
