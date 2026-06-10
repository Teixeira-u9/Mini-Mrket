"use client";

import { useCart } from "@/lib/store/cart";
import { formatMoney } from "@/lib/utils";
import { DELIVERY } from "@/lib/config";
import { ButtonLink } from "@/components/ui/Button";
import { QuantityStepper } from "./QuantityStepper";
import { X, ShoppingBag, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

export function CartDrawer() {
  const { items, isOpen, close, setQty, remove, clear } = useCart();
  const subtotal = useCart((s) => s.subtotal());

  // Solo renderiza tras montar para evitar mismatch de hidratación.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Cierra con la tecla Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  if (!mounted) return null;

  const fee = subtotal >= DELIVERY.freeOver || subtotal === 0 ? 0 : DELIVERY.defaultFee;
  const total = subtotal + fee;
  const missingForFree = Math.max(DELIVERY.freeOver - subtotal, 0);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={close}
        className={`fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-paper shadow-pop transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <header className="flex items-center justify-between border-b border-clay px-5 py-4">
          <h2 className="flex items-center gap-2 font-display text-xl font-600">
            <ShoppingBag className="h-5 w-5 text-leaf" /> Tu carrito
          </h2>
          <button
            onClick={close}
            aria-label="Cerrar carrito"
            className="grid h-9 w-9 place-items-center rounded-full hover:bg-clay/60"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <span className="text-5xl">🛒</span>
            <p className="mt-4 font-display text-lg">Tu carrito está vacío</p>
            <p className="mt-1 text-sm text-ink/55">Agrega productos frescos y de despensa.</p>
            <ButtonLink href="/tienda" onClick={close} className="mt-6">
              Explorar catálogo
            </ButtonLink>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-3 rounded-xl2 border border-clay p-3">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl2 bg-clay/40 text-2xl">
                    {product.image}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium leading-tight">{product.name}</p>
                        <p className="text-xs text-ink/50">{product.unit}</p>
                      </div>
                      <button
                        onClick={() => remove(product.id)}
                        aria-label="Eliminar"
                        className="text-ink/40 hover:text-tomato"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <QuantityStepper
                        value={quantity}
                        max={product.stock}
                        onChange={(q) => setQty(product.id, q)}
                      />
                      <span className="font-display font-600 text-leaf-dark">
                        {formatMoney(product.price * quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={clear}
                className="mx-auto block text-xs text-ink/45 underline-offset-2 hover:text-tomato hover:underline"
              >
                Vaciar carrito
              </button>
            </div>

            <footer className="border-t border-clay px-5 py-4">
              {missingForFree > 0 && (
                <p className="mb-3 rounded-xl2 bg-sun/15 px-3 py-2 text-xs text-ink/70">
                  Te faltan <strong>{formatMoney(missingForFree)}</strong> para envío gratis 🚚
                </p>
              )}
              <Row label="Subtotal" value={formatMoney(subtotal)} />
              <Row label="Envío" value={fee === 0 ? "Gratis" : formatMoney(fee)} />
              <Row label="Total" value={formatMoney(total)} strong />
              <ButtonLink href="/tienda/checkout" onClick={close} size="lg" className="mt-4 w-full">
                Continuar al pago
              </ButtonLink>
            </footer>
          </>
        )}
      </aside>
    </>
  );
}

function Row({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className={`flex justify-between py-1 ${strong ? "text-base font-600" : "text-sm text-ink/65"}`}>
      <span>{label}</span>
      <span className={strong ? "font-display text-leaf-dark" : ""}>{value}</span>
    </div>
  );
}
