# 🛒 Mercadito — Mini Market de Barrio

Plataforma de mercado de barrio con **sitio de marketing** y **tienda funcional** en un solo
código base (Next.js 14 + TypeScript + Tailwind CSS). Entrega en menos de 60 minutos,
carrito sin registro y pagos localizados por país.

## ✨ Qué incluye

**Sitio de marketing**
- Inicio (hero), características, testimonios, precios (con FAQ) y formulario de contacto.

**Tienda (web app)**
- Catálogo por categorías con búsqueda y filtros rápidos (incluye filtro "Frecuentes").
- Banner de entrega con geolocalización y ventanas de tiempo.
- Carrito persistente sin registro (sobrevive recargas y cierres del navegador).
- Promociones y descuentos visibles en el catálogo.
- Checkout con métodos de pago según país (CO: Nequi, PSE, tarjeta, contraentrega).

## 🚀 Cómo ejecutar

```bash
npm install
npm run dev
# abre http://localhost:3000  (tienda en /tienda)
```

Build de producción:

```bash
npm run build && npm start
```

## 🧱 Arquitectura (clave: "backend conectable después")

```
src/
├── app/                      Rutas (App Router)
│   ├── page.tsx              Landing de marketing
│   ├── precios/  contacto/   Páginas de marketing
│   └── tienda/               Tienda + checkout
├── components/
│   ├── marketing/            Hero, Features, Testimonials, Pricing, ContactForm…
│   ├── shop/                 ProductCard, CartDrawer, CatalogBrowser, DeliveryBanner…
│   └── ui/                   Button, Badge, Section
└── lib/
    ├── types.ts              Tipos de dominio (única fuente de verdad)
    ├── config.ts             País → moneda y métodos de pago
    ├── services/             ← Capa que aísla el origen de datos
    │   └── catalog.service.ts  Interface + MockCatalogService + HttpCatalogService
    ├── store/cart.ts         Carrito (Zustand + persistencia local)
    └── data/                 Datos de ejemplo
```

**La UI nunca toca los datos directamente.** Depende de `CatalogService` (una interfaz).
Hoy corre `MockCatalogService`. Cuando exista el backend real, basta con definir
`NEXT_PUBLIC_API_BASE_URL` en `.env` y el factory `getCatalogService()` usará
`HttpCatalogService` — **sin tocar un solo componente.**

## 🔌 Conectar el backend real (siguiente fase)

1. Implementa una API con estos endpoints: `GET /categories`, `GET /products`,
   `GET /delivery-windows`, `POST /orders`, `GET|PUT /carts/:guestId`.
2. Define `NEXT_PUBLIC_API_BASE_URL` en `.env`.
3. Completa el mapeo de respuestas en `HttpCatalogService` si tu API difiere del tipo.

El carrito ya genera un `guestId` estable (en `cart.ts`): es la llave para sincronizar
el mismo carrito entre web y app guardándolo por `guestId` del lado servidor.

## 📱 Fase 3 — Arquitectura de la app móvil

El plan recomendado reutiliza al máximo lo ya construido:

- **Opción rápida (PWA):** envolver esta web como app instalable (manifest + service
  worker). Las notificaciones push de reposición se implementan con Web Push.
- **Opción nativa (Expo / React Native):** app aparte que **consume la misma API** y
  reutiliza `types.ts` y la lógica de servicios. Pantallas: Catálogo, Producto, Carrito,
  Checkout, Pedidos, Perfil. Las push nativas usan Expo Notifications.

En ambos casos el backend es el punto de sincronización del carrito (vía `guestId`) y el
emisor de los recordatorios de reposición basados en el historial de compra.
