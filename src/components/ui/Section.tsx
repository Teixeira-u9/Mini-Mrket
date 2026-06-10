import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

/** Contenedor de sección con ancho máximo y espaciado consistente. */
export function Section({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}
      {...props}
    />
  );
}
