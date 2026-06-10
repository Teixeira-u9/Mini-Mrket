import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Clock, MapPin, Star } from "lucide-react";

export function Hero() {
  return (
    <Section className="relative pt-14 pb-10 sm:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Columna de texto */}
        <div className="animate-fade-up">
          <span className="kicker">
            <span className="h-1.5 w-1.5 rounded-full bg-tomato" /> Entrega en ≤ 60 min
          </span>
          <h1 className="mt-5 font-display text-5xl font-600 leading-[1.05] tracking-tight sm:text-6xl">
            El mercado del barrio,
            <span className="italic text-leaf"> a un toque</span> de tu puerta.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            Frescos, despensa, panadería y limpieza. Compra sin registrarte, paga como
            quieras y recibe en menos de una hora. Como la tienda de la esquina, pero
            en tu bolsillo.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="/tienda" size="lg">
              Empezar a comprar
            </ButtonLink>
            <ButtonLink href="/#caracteristicas" size="lg" variant="outline">
              Ver cómo funciona
            </ButtonLink>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-ink/60">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-leaf" /> 45 min promedio
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-leaf" /> Cobertura por zonas
            </span>
            <span className="inline-flex items-center gap-2">
              <Star className="h-4 w-4 text-sun" fill="currentColor" /> 4.9 · +2.300 pedidos
            </span>
          </div>
        </div>

        {/* Columna visual: tarjeta flotante tipo "pedido en curso" */}
        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-full bg-sun/40 blur-2xl lg:block" />
          <div className="absolute -bottom-8 -right-4 hidden h-32 w-32 rounded-full bg-leaf/20 blur-2xl lg:block" />

          <div className="card relative overflow-hidden p-6">
            <div className="flex items-center justify-between">
              <p className="font-display text-lg font-600">Tu pedido va en camino</p>
              <span className="rounded-full bg-leaf/10 px-3 py-1 text-xs font-semibold text-leaf-dark">
                ETA 38 min
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {[
                { e: "🥛", n: "Leche entera", q: "1 L · x2" },
                { e: "🍞", n: "Pan tajado", q: "500 g" },
                { e: "🥚", n: "Huevos AA", q: "x12" },
                { e: "🍅", n: "Tomate chonto", q: "500 g" },
              ].map((it) => (
                <div
                  key={it.n}
                  className="flex items-center gap-3 rounded-xl2 border border-clay bg-paper/60 px-4 py-3"
                >
                  <span className="text-2xl">{it.e}</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{it.n}</p>
                    <p className="text-xs text-ink/50">{it.q}</p>
                  </div>
                  <span className="text-leaf">✓</span>
                </div>
              ))}
            </div>

            <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-clay">
              <div className="h-full w-2/3 rounded-full bg-leaf" />
            </div>
            <p className="mt-2 text-xs text-ink/50">Empacando en la tienda · Repartidor asignado</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
