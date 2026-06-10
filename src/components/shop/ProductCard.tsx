"use client";

import type { Product } from "@/lib/types";
import { formatMoney } from "@/lib/utils";
import { useCart } from "@/lib/store/cart";
import { Badge } from "@/components/ui/Badge";
import { QuantityStepper } from "./QuantityStepper";
import { Plus, BellRing } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const items = useCart((s) => s.items);
  const add = useCart((s) => s.add);
  const setQty = useCart((s) => s.setQty);

  const inCart = items.find((i) => i.product.id === product.id);
  const onSale = product.compareAtPrice && product.compareAtPrice > product.price;
  const discount = onSale
    ? Math.round(100 - (product.price / product.compareAtPrice!) * 100)
    : 0;

  return (
    <div className="card group flex flex-col p-4 transition-transform duration-200 hover:-translate-y-0.5">
      <div className="relative grid aspect-square place-items-center rounded-xl2 bg-clay/40 text-5xl">
        {product.image}
        <div className="absolute left-2 top-2 flex flex-col gap-1">
          {onSale && (
            <Badge className="bg-tomato text-paper">-{discount}%</Badge>
          )}
          {product.frequent && (
            <Badge className="bg-sun/90 text-ink">
              <BellRing className="h-3 w-3" /> Frecuente
            </Badge>
          )}
        </div>
      </div>

      <div className="mt-3 flex-1">
        <h3 className="font-medium leading-tight">{product.name}</h3>
        <p className="text-xs text-ink/50">{product.unit}</p>
      </div>

      <div className="mt-3 flex items-end justify-between gap-2">
        <div>
          <p className="font-display text-lg font-600 text-leaf-dark">
            {formatMoney(product.price)}
          </p>
          {onSale && (
            <p className="text-xs text-ink/40 line-through">
              {formatMoney(product.compareAtPrice!)}
            </p>
          )}
        </div>

        {inCart ? (
          <QuantityStepper
            value={inCart.quantity}
            max={product.stock}
            onChange={(q) => setQty(product.id, q)}
          />
        ) : (
          <button
            onClick={() => add(product)}
            aria-label={`Agregar ${product.name}`}
            className="grid h-9 w-9 place-items-center rounded-full bg-leaf text-paper transition-all hover:bg-leaf-dark active:scale-95"
          >
            <Plus className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}
