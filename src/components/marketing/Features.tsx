import { Section } from "@/components/ui/Section";
import { Search, Timer, ShoppingCart, CreditCard, BellRing, Tag } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Catálogo inteligente",
    body: "Productos organizados por categorías con búsqueda y filtros rápidos. Encuentra lo que necesitas en segundos.",
  },
  {
    icon: Timer,
    title: "Entrega en ≤ 60 min",
    body: "Zona geolocalizada con ventanas de tiempo en tiempo real. Sabes exactamente cuándo llega tu pedido.",
  },
  {
    icon: ShoppingCart,
    title: "Carrito sin registro",
    body: "Tu carrito se sincroniza entre web y app sin crear cuenta. Empieza en el celular, termina en el computador.",
  },
  {
    icon: CreditCard,
    title: "Múltiples pagos",
    body: "Tarjeta, contraentrega, PSE, Nequi o Mercado Pago según tu país. Paga como te quede más cómodo.",
  },
  {
    icon: BellRing,
    title: "Recordatorios de reposición",
    body: "Te avisamos cuando se va a acabar la leche, el pan o los huevos. Nunca más te quedas sin lo básico.",
  },
  {
    icon: Tag,
    title: "Promos y descuentos",
    body: "Ofertas semanales y precios especiales en tus productos frecuentes. Ahorra en lo que ya compras.",
  },
];

export function Features() {
  return (
    <Section id="caracteristicas" className="scroll-mt-20 py-20">
      <div className="max-w-2xl">
        <span className="kicker">Todo lo que necesitas</span>
        <h2 className="mt-4 font-display text-4xl font-600 tracking-tight sm:text-5xl">
          Hecho para que mercar sea fácil
        </h2>
        <p className="mt-4 text-lg text-ink/70">
          Cada función está pensada para resolver el día a día de tu hogar, sin complicaciones.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="card group p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl2 bg-leaf/10 text-leaf-dark transition-colors group-hover:bg-leaf group-hover:text-paper">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-xl font-600">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
