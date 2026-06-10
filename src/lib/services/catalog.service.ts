import type { Category, Product, DeliveryWindow } from "../types";
import { categories as mockCategories, products as mockProducts } from "../data/products";
import { deliveryWindows as mockWindows } from "../data/marketing";

/**
 * Contrato único del catálogo. La UI SIEMPRE depende de esta interfaz,
 * nunca de los datos directamente. Así, conectar el backend real consiste
 * solo en crear otra implementación de CatalogService — sin tocar componentes.
 */
export interface CatalogService {
  getCategories(): Promise<Category[]>;
  getProducts(params?: { category?: string; query?: string }): Promise<Product[]>;
  getDeliveryWindows(): Promise<DeliveryWindow[]>;
}

/** Implementación con datos de ejemplo (la activa hoy). */
class MockCatalogService implements CatalogService {
  async getCategories() {
    return mockCategories;
  }

  async getProducts(params?: { category?: string; query?: string }) {
    const q = params?.query?.trim().toLowerCase();
    return mockProducts.filter((p) => {
      const matchCat = !params?.category || p.category === params.category;
      const matchQuery = !q || p.name.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }

  async getDeliveryWindows() {
    return mockWindows;
  }
}

/**
 * Implementación HTTP — esqueleto listo. Cuando definas NEXT_PUBLIC_API_BASE_URL
 * se usará esta en lugar del mock. Solo hay que completar el mapeo de respuestas.
 */
class HttpCatalogService implements CatalogService {
  constructor(private readonly baseUrl: string) {}

  private async get<T>(path: string): Promise<T> {
    const res = await fetch(`${this.baseUrl}${path}`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error(`API ${path} → ${res.status}`);
    return res.json() as Promise<T>;
  }

  getCategories() {
    return this.get<Category[]>("/categories");
  }

  getProducts(params?: { category?: string; query?: string }) {
    const qs = new URLSearchParams();
    if (params?.category) qs.set("category", params.category);
    if (params?.query) qs.set("q", params.query);
    const suffix = qs.toString() ? `?${qs}` : "";
    return this.get<Product[]>(`/products${suffix}`);
  }

  getDeliveryWindows() {
    return this.get<DeliveryWindow[]>("/delivery-windows");
  }
}

let instance: CatalogService | null = null;

/** Punto de acceso único. Decide mock vs HTTP según la configuración. */
export function getCatalogService(): CatalogService {
  if (!instance) {
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    instance = apiUrl ? new HttpCatalogService(apiUrl) : new MockCatalogService();
  }
  return instance;
}
