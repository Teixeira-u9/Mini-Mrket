// Tipos de dominio. Únicos y compartidos por marketing, tienda y (futuro) backend.

export type CategoryId =
  | "frescos"
  | "despensa"
  | "limpieza"
  | "bebidas"
  | "panaderia"
  | "cuidado";

export interface Category {
  id: CategoryId;
  name: string;
  emoji: string;
}

export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  /** Precio en la unidad mínima de la moneda (ej. pesos COP, sin decimales). */
  price: number;
  /** Precio anterior, si está en promoción. */
  compareAtPrice?: number;
  unit: string; // "und", "kg", "500 g", "x6"...
  image: string; // emoji o URL — el backend luego entregará URLs reales
  /** Marcado como "compra frecuente" para recordatorios de reposición. */
  frequent?: boolean;
  stock: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface DeliveryWindow {
  id: string;
  label: string; // "Lo antes posible (≤ 60 min)"
  etaMinutes: number;
  available: boolean;
}

export interface PaymentMethod {
  id: string;
  name: string;
  description: string;
}

export interface PlatformConfig {
  country: "CO" | "MX" | "AR";
  currency: string; // ISO 4217
  locale: string;
  paymentMethods: PaymentMethod[];
}
