import type { Category, Product } from "../types";

export const categories: Category[] = [
  { id: "frescos", name: "Frescos", emoji: "🥬" },
  { id: "despensa", name: "Despensa", emoji: "🍚" },
  { id: "panaderia", name: "Panadería", emoji: "🥖" },
  { id: "bebidas", name: "Bebidas", emoji: "🧃" },
  { id: "limpieza", name: "Limpieza", emoji: "🧽" },
  { id: "cuidado", name: "Cuidado personal", emoji: "🧴" },
];

export const products: Product[] = [
  // Frescos
  { id: "p-leche", name: "Leche entera", category: "frescos", price: 4200, unit: "1 L", image: "🥛", frequent: true, stock: 40 },
  { id: "p-huevos", name: "Huevos AA", category: "frescos", price: 12500, compareAtPrice: 14000, unit: "x12", image: "🥚", frequent: true, stock: 30 },
  { id: "p-tomate", name: "Tomate chonto", category: "frescos", price: 3800, unit: "500 g", image: "🍅", stock: 25 },
  { id: "p-banano", name: "Banano", category: "frescos", price: 2900, unit: "kg", image: "🍌", frequent: true, stock: 50 },
  { id: "p-aguacate", name: "Aguacate Hass", category: "frescos", price: 5200, unit: "und", image: "🥑", stock: 20 },
  { id: "p-queso", name: "Queso campesino", category: "frescos", price: 9800, unit: "500 g", image: "🧀", stock: 15 },

  // Despensa
  { id: "p-arroz", name: "Arroz blanco", category: "despensa", price: 6900, unit: "1 kg", image: "🍚", frequent: true, stock: 60 },
  { id: "p-aceite", name: "Aceite girasol", category: "despensa", price: 11900, compareAtPrice: 13500, unit: "1 L", image: "🫒", stock: 35 },
  { id: "p-pasta", name: "Pasta espagueti", category: "despensa", price: 3400, unit: "250 g", image: "🍝", stock: 45 },
  { id: "p-atun", name: "Atún en lata", category: "despensa", price: 5600, unit: "170 g", image: "🐟", stock: 40 },

  // Panadería
  { id: "p-pan", name: "Pan tajado", category: "panaderia", price: 5800, unit: "500 g", image: "🍞", frequent: true, stock: 25 },
  { id: "p-croissant", name: "Croissant", category: "panaderia", price: 2500, unit: "und", image: "🥐", stock: 18 },
  { id: "p-arepa", name: "Arepa de maíz", category: "panaderia", price: 4200, unit: "x5", image: "🫓", frequent: true, stock: 30 },

  // Bebidas
  { id: "p-agua", name: "Agua sin gas", category: "bebidas", price: 2200, unit: "600 ml", image: "💧", stock: 80 },
  { id: "p-jugo", name: "Jugo de naranja", category: "bebidas", price: 6700, unit: "1 L", image: "🧃", stock: 28 },
  { id: "p-cafe", name: "Café molido", category: "bebidas", price: 14900, compareAtPrice: 16900, unit: "500 g", image: "☕", frequent: true, stock: 22 },

  // Limpieza
  { id: "p-jabon", name: "Jabón en polvo", category: "limpieza", price: 13900, unit: "1 kg", image: "🧼", stock: 30 },
  { id: "p-papel", name: "Papel higiénico", category: "limpieza", price: 18900, compareAtPrice: 21000, unit: "x12", image: "🧻", frequent: true, stock: 26 },
  { id: "p-lavaloza", name: "Lavaloza", category: "limpieza", price: 7200, unit: "500 ml", image: "🧽", stock: 33 },

  // Cuidado personal
  { id: "p-shampoo", name: "Shampoo", category: "cuidado", price: 15900, unit: "400 ml", image: "🧴", stock: 19 },
  { id: "p-crema", name: "Crema dental", category: "cuidado", price: 6400, unit: "75 ml", image: "🪥", frequent: true, stock: 24 },
];
