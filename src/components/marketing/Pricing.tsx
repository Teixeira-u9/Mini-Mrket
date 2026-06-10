import { Section } from "@/components/ui/Section";
import { plans } from "@/lib/data/marketing";
import { ButtonLink } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <Section className="py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="kicker">Planes</span>
        <h2 className="mt-4 font-display text-4xl font-600 tracking-tight sm:text-5xl">
          Compra gratis. Mejora si quieres.
        </h2>
        <p className="mt-4 text-lg text-ink/70">
          Sin letras pequeñas. Empieza sin costo y súmate a Vecino+ cuando pidas seguido.
        </p>
      </div>

      <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={cn(
              "relative flex flex-col rounded-xl2 border p-7",
              plan.highlighted
                ? "border-leaf bg-leaf-dark text-paper shadow-pop lg:-translate-y-3"
                : "card",
            )}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-7 rounded-full bg-sun px-3 py-1 text-xs font-bold text-ink">
                Más popular
              </span>
            )}
            <p className="font-display text-2xl font-600">{plan.name}</p>
            <p className={cn("text-sm", plan.highlighted ? "text-paper/70" : "text-ink/55")}>
              {plan.tagline}
            </p>
            <p className="mt-5 font-display text-4xl font-600">{plan.price}</p>

            <ul className="mt-6 flex-1 space-y-3 text-sm">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-2.5">
                  <Check
                    className={cn(
                      "mt-0.5 h-4 w-4 shrink-0",
                      plan.highlighted ? "text-sun" : "text-leaf",
                    )}
                  />
                  <span className={plan.highlighted ? "text-paper/90" : "text-ink/75"}>{f}</span>
                </li>
              ))}
            </ul>

            <ButtonLink
              href="/tienda"
              className="mt-7 w-full"
              variant={plan.highlighted ? "secondary" : "outline"}
            >
              {plan.cta}
            </ButtonLink>
          </div>
        ))}
      </div>
    </Section>
  );
}
