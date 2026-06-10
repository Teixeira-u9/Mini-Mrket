import type { PlatformConfig } from "./types";

// Configuración por país. Cambia los métodos de pago y la moneda según el mercado.
const CONFIGS: Record<string, PlatformConfig> = {
  CO: {
    country: "CO",
    currency: "COP",
    locale: "es-CO",
    paymentMethods: [
      { id: "card", name: "Tarjeta", description: "Crédito o débito" },
      { id: "nequi", name: "Nequi", description: "Pago desde tu celular" },
      { id: "pse", name: "PSE", description: "Débito desde tu banco" },
      { id: "cod", name: "Contraentrega", description: "Paga al recibir" },
    ],
  },
  MX: {
    country: "MX",
    currency: "MXN",
    locale: "es-MX",
    paymentMethods: [
      { id: "card", name: "Tarjeta", description: "Crédito o débito" },
      { id: "mercadopago", name: "Mercado Pago", description: "Saldo o tarjeta" },
      { id: "cod", name: "Contraentrega", description: "Paga al recibir" },
    ],
  },
  AR: {
    country: "AR",
    currency: "ARS",
    locale: "es-AR",
    paymentMethods: [
      { id: "card", name: "Tarjeta", description: "Crédito o débito" },
      { id: "mercadopago", name: "Mercado Pago", description: "Saldo o tarjeta" },
      { id: "cod", name: "Contraentrega", description: "Paga al recibir" },
    ],
  },
};

const country = (process.env.NEXT_PUBLIC_COUNTRY ?? "CO").toUpperCase();

export const platformConfig: PlatformConfig = CONFIGS[country] ?? CONFIGS.CO;

/** Costo de envío y mínimo de compra (centralizados para reusar en checkout). */
export const DELIVERY = {
  feeFree: 0,
  defaultFee: 4900,
  freeOver: 80000,
  maxEtaMinutes: 60,
};
