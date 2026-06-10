"use client";

import { SiteHeader } from "@/components/marketing/SiteHeader";
import { Section } from "@/components/ui/Section";
import { Button, ButtonLink } from "@/components/ui/Button";
import { useCart } from "@/lib/store/cart";
import { platformConfig, DELIVERY } from "@/lib/config";
import { formatMoney } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Check, MapPin, CreditCard, PartyPopper } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CheckoutPage() {
  const { items, clear } = useCart();
  const subtotal = useCart((s) => s.subtotal());

  const [mounted, setMounted] = useState(false);
  const [payment, setPayment] = useState(platformConfig.paymentMethods[0]?.id ?? "");
  const [address, setAddress] = useState("");
  const [placing, setPlacing] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const fee = subtotal >= DELIVERY.freeOver || subtotal === 0 ? 0 : DELIVERY.defaultFee;
  const total = subtotal + fee;

  async function placeOrder() {
    setPlacing(true);
    // TODO: cuando exista backend → POST /orders con guestId, items, pago y dirección.
    await new Promise((r) => setTimeout(r, 1100));
    setPlacing(false);
    setDone(true);
    clear();
  }

  if (done) {
    return (
      <>
        <SiteHeader />
        <Section className="grid place-items-center py-28 text-center">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-leaf text-paper">
            <PartyPopper className="h-8 w-8" />
          </span>
          <h1 className="mt-6 font-display text-4xl font-600">¡Pedido confirmado!</h1>
          <p className="mt-3 max-w-md text-ink/65">
            Estamos empacando tu mercado. Llega en aproximadamente 45 minutos. Te avisaremos
            cuando el repartidor salga.
          </p>
          <ButtonLink href="/tienda" className="mt-8">
            Seguir comprando
          </ButtonLink>
        </Section>
      </>
    );
  }

  if (items.length === 0) {
    return (
      <>
        <SiteHeader />
        <Section className="grid place-items-center py-28 text-center">
          <span className="text-5xl">🛒</span>
          <h1 className="mt-5 font-display text-3xl font-600">Tu carrito está vacío</h1>
          <ButtonLink href="/tienda" className="mt-6">
            Ir al catálogo
          </ButtonLink>
        </Section>
      </>
    );
  }

  return (
    <>
      <SiteHeader />
      <main className="pb-16">
        <Section className="pt-8">
          <h1 className="font-display text-3xl font-600 tracking-tight sm:text-4xl">Finalizar pedido</h1>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            {/* Columna izquierda: dirección + pago */}
            <div className="space-y-8">
              <div>
                <h2 className="flex items-center gap-2 font-display text-xl font-600">
                  <MapPin className="h-5 w-5 text-leaf" /> Dirección de entrega
                </h2>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Ej: Calle 53 #12-40, apto 302, Bogotá"
                  className="mt-3 w-full rounded-xl2 border border-clay bg-paper px-4 py-3 text-sm outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/15"
                />
              </div>

              <div>
                <h2 className="flex items-center gap-2 font-display text-xl font-600">
                  <CreditCard className="h-5 w-5 text-leaf" /> Método de pago
                </h2>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {platformConfig.paymentMethods.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setPayment(m.id)}
                      className={cn(
                        "flex items-center justify-between rounded-xl2 border px-4 py-3 text-left transition",
                        payment === m.id
                          ? "border-leaf bg-leaf/5"
                          : "border-clay hover:border-leaf/40",
                      )}
                    >
                      <span>
                        <span className="block text-sm font-medium">{m.name}</span>
                        <span className="block text-xs text-ink/55">{m.description}</span>
                      </span>
                      {payment === m.id && (
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-leaf text-paper">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Columna derecha: resumen */}
            <aside className="card h-fit p-6">
              <h2 className="font-display text-lg font-600">Resumen</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {items.map(({ product, quantity }) => (
                  <li key={product.id} className="flex justify-between gap-2">
                    <span className="text-ink/70">
                      {quantity}× {product.name}
                    </span>
                    <span className="tabular-nums">{formatMoney(product.price * quantity)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 space-y-1 border-t border-clay pt-4 text-sm">
                <div className="flex justify-between text-ink/65">
                  <span>Subtotal</span>
                  <span>{formatMoney(subtotal)}</span>
                </div>
                <div className="flex justify-between text-ink/65">
                  <span>Envío</span>
                  <span>{fee === 0 ? "Gratis" : formatMoney(fee)}</span>
                </div>
                <div className="flex justify-between pt-1 text-base font-600">
                  <span>Total</span>
                  <span className="font-display text-leaf-dark">{formatMoney(total)}</span>
                </div>
              </div>

              <Button
                onClick={placeOrder}
                disabled={placing || !address.trim()}
                size="lg"
                className="mt-5 w-full"
              >
                {placing ? "Procesando…" : "Confirmar pedido"}
              </Button>
              {!address.trim() && (
                <p className="mt-2 text-center text-xs text-ink/50">Ingresa tu dirección para continuar</p>
              )}
            </aside>
          </div>
        </Section>
      </main>
    </>
  );
}
