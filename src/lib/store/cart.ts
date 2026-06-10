"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, Product } from "../types";

/** Genera un id de invitado estable: es la "llave" del carrito sin registro.
 *  El backend luego usará este mismo id para sincronizar el carrito entre
 *  web y app (guardándolo por sessionId del lado servidor). */
function createGuestId() {
  return "guest_" + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

interface CartState {
  guestId: string;
  items: CartItem[];
  isOpen: boolean;
  // acciones
  add: (product: Product, qty?: number) => void;
  remove: (productId: string) => void;
  setQty: (productId: string, qty: number) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
  toggle: () => void;
  // selectores derivados
  count: () => number;
  subtotal: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      guestId: createGuestId(),
      items: [],
      isOpen: false,

      add: (product, qty = 1) =>
        set((state) => {
          const existing = state.items.find((i) => i.product.id === product.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.product.id === product.id
                  ? { ...i, quantity: Math.min(i.quantity + qty, product.stock) }
                  : i,
              ),
            };
          }
          return { items: [...state.items, { product, quantity: qty }] };
        }),

      remove: (productId) =>
        set((state) => ({ items: state.items.filter((i) => i.product.id !== productId) })),

      setQty: (productId, qty) =>
        set((state) => ({
          items:
            qty <= 0
              ? state.items.filter((i) => i.product.id !== productId)
              : state.items.map((i) =>
                  i.product.id === productId
                    ? { ...i, quantity: Math.min(qty, i.product.stock) }
                    : i,
                ),
        })),

      clear: () => set({ items: [] }),
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggle: () => set((s) => ({ isOpen: !s.isOpen })),

      count: () => get().items.reduce((n, i) => n + i.quantity, 0),
      subtotal: () => get().items.reduce((s, i) => s + i.product.price * i.quantity, 0),
    }),
    {
      name: "minimarket-cart", // clave en localStorage
      // No persistimos isOpen (estado de UI efímero).
      partialize: (s) => ({ guestId: s.guestId, items: s.items }),
    },
  ),
);
