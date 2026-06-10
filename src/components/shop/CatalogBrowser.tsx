"use client";

import type { Category, Product } from "@/lib/types";
import { useMemo, useState } from "react";
import { ProductCard } from "./ProductCard";
import { Search, BellRing } from "lucide-react";
import { cn } from "@/lib/utils";

export function CatalogBrowser({
  products,
  categories,
}: {
  products: Product[];
  categories: Category[];
}) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string>("todos");
  const [onlyFrequent, setOnlyFrequent] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchCat = active === "todos" || p.category === active;
      const matchQuery = !q || p.name.toLowerCase().includes(q);
      const matchFreq = !onlyFrequent || p.frequent;
      return matchCat && matchQuery && matchFreq;
    });
  }, [products, query, active, onlyFrequent]);

  return (
    <div>
      {/* Búsqueda */}
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/40" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Busca leche, arroz, jabón…"
          className="w-full rounded-full border border-clay bg-paper py-3 pl-12 pr-4 text-sm outline-none transition focus:border-leaf focus:ring-2 focus:ring-leaf/15"
        />
      </div>

      {/* Chips de filtro */}
      <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto pb-1">
        <Chip active={active === "todos"} onClick={() => setActive("todos")}>
          🛒 Todos
        </Chip>
        {categories.map((c) => (
          <Chip key={c.id} active={active === c.id} onClick={() => setActive(c.id)}>
            {c.emoji} {c.name}
          </Chip>
        ))}
        <Chip
          active={onlyFrequent}
          onClick={() => setOnlyFrequent((v) => !v)}
          tone="sun"
        >
          <BellRing className="h-3.5 w-3.5" /> Frecuentes
        </Chip>
      </div>

      {/* Grilla */}
      {filtered.length === 0 ? (
        <p className="py-20 text-center text-ink/50">
          No encontramos “{query}”. Prueba con otra palabra.
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
  tone = "leaf",
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  tone?: "leaf" | "sun";
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-all",
        active
          ? tone === "sun"
            ? "border-sun bg-sun text-ink"
            : "border-leaf bg-leaf text-paper"
          : "border-clay bg-paper text-ink/70 hover:border-leaf/50",
      )}
    >
      {children}
    </button>
  );
}
