import { Tag } from "lucide-react";

export function PromoBanner() {
  return (
    <div className="flex items-center gap-3 rounded-xl2 border border-dashed border-tomato/40 bg-tomato/5 px-5 py-3 text-sm">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-tomato text-paper">
        <Tag className="h-4 w-4" />
      </span>
      <p className="text-ink/80">
        <strong className="text-tomato">Promo de la semana:</strong> hasta 15% en café, aceite y
        papel higiénico. Aplicado automáticamente en el catálogo.
      </p>
    </div>
  );
}
