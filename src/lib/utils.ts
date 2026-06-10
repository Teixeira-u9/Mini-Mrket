import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { platformConfig } from "./config";

/** Une clases de Tailwind resolviendo conflictos. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Formatea un precio según la moneda y el locale del país configurado. */
export function formatMoney(amount: number): string {
  return new Intl.NumberFormat(platformConfig.locale, {
    style: "currency",
    currency: platformConfig.currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
