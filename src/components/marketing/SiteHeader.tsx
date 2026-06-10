"use client";

import Link from "next/link";
import { ShoppingBag, Sprout } from "lucide-react";
import { useCart } from "@/lib/store/cart";
import { ButtonLink } from "@/components/ui/Button";
import { useEffect, useState } from "react";

const links = [
  { href: "/#caracteristicas", label: "Características" },
  { href: "/#testimonios", label: "Testimonios" },
  { href: "/precios", label: "Precios" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  const count = useCart((s) => s.count());
  const open = useCart((s) => s.open);

  // Evita desajuste de hidratación con el contador persistido.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-40 border-b border-clay/70 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-600 text-leaf-dark">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-leaf text-paper">
            <Sprout className="h-5 w-5" />
          </span>
          Mercadito
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-leaf-dark"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="/tienda" size="sm" variant="primary" className="hidden sm:inline-flex">
            Ir a la tienda
          </ButtonLink>
          <button
            onClick={open}
            aria-label="Abrir carrito"
            className="relative grid h-10 w-10 place-items-center rounded-full border border-clay bg-paper transition-colors hover:border-leaf"
          >
            <ShoppingBag className="h-5 w-5 text-ink" />
            {mounted && count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-tomato px-1 text-[11px] font-bold text-paper">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
