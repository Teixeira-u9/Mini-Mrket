import type { DeliveryWindow } from "../types";

export const testimonials = [
  {
    name: "Marcela R.",
    role: "Vive en Chapinero",
    quote:
      "Pedí a las 8 p.m. cuando me di cuenta que no tenía leche para el desayuno. Llegó en 35 minutos. Ahora es mi tienda fija.",
    avatar: "👩🏽",
  },
  {
    name: "Don Jorge",
    role: "Pensionado",
    quote:
      "Me cuesta cargar mercado pesado. El arroz, el aceite y el papel me llegan a la puerta. Pago contraentrega y listo.",
    avatar: "👨🏼‍🦳",
  },
  {
    name: "Laura & Andrés",
    role: "Pareja con bebé",
    quote:
      "Los recordatorios de reposición son magia: nos avisa cuando se va a acabar la fórmula y los pañales. No más carreras.",
    avatar: "👩🏻‍🍼",
  },
];

export const plans = [
  {
    id: "barrio",
    name: "Barrio",
    price: "Gratis",
    tagline: "Para el día a día",
    highlighted: false,
    features: [
      "Catálogo completo y carrito sin registro",
      "Entrega estándar en ≤ 60 min",
      "Pago con tarjeta, Nequi, PSE o contraentrega",
      "Promociones de temporada",
    ],
    cta: "Empezar a comprar",
  },
  {
    id: "vecino",
    name: "Vecino+",
    price: "$12.900/mes",
    tagline: "Para quien pide seguido",
    highlighted: true,
    features: [
      "Todo lo del plan Barrio",
      "Envío gratis en pedidos sobre el mínimo",
      "Recordatorios inteligentes de reposición",
      "Ventanas de entrega prioritarias",
      "Descuentos exclusivos cada semana",
    ],
    cta: "Probar 14 días gratis",
  },
  {
    id: "negocio",
    name: "Negocio",
    price: "A medida",
    tagline: "Tiendas, oficinas y cafeterías",
    highlighted: false,
    features: [
      "Pedidos recurrentes programados",
      "Facturación y cuenta empresarial",
      "Catálogo y precios negociados",
      "Soporte dedicado por WhatsApp",
    ],
    cta: "Hablar con ventas",
  },
];

export const deliveryWindows: DeliveryWindow[] = [
  { id: "asap", label: "Lo antes posible", etaMinutes: 45, available: true },
  { id: "w1", label: "Hoy 6:00 – 7:00 p.m.", etaMinutes: 120, available: true },
  { id: "w2", label: "Hoy 7:00 – 8:00 p.m.", etaMinutes: 180, available: true },
  { id: "w3", label: "Hoy 8:00 – 9:00 p.m.", etaMinutes: 240, available: false },
];
