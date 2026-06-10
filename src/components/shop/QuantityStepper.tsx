"use client";

import { Minus, Plus } from "lucide-react";

export function QuantityStepper({
  value,
  onChange,
  max = 99,
}: {
  value: number;
  onChange: (next: number) => void;
  max?: number;
}) {
  return (
    <div className="inline-flex items-center rounded-full border border-clay bg-paper">
      <button
        onClick={() => onChange(value - 1)}
        aria-label="Quitar uno"
        className="grid h-8 w-8 place-items-center rounded-full text-ink/70 transition-colors hover:text-tomato"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="w-7 text-center text-sm font-semibold tabular-nums">{value}</span>
      <button
        onClick={() => onChange(Math.min(value + 1, max))}
        aria-label="Agregar uno"
        disabled={value >= max}
        className="grid h-8 w-8 place-items-center rounded-full text-ink/70 transition-colors hover:text-leaf disabled:opacity-40"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
