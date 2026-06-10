"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Check, Send } from "lucide-react";

type Status = "idle" | "sending" | "sent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // TODO: cuando exista el backend, hacer POST a /api/contact.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
  }

  return (
    <Section className="py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <span className="kicker">Hablemos</span>
          <h2 className="mt-4 font-display text-4xl font-600 tracking-tight sm:text-5xl">
            ¿Tienes una tienda o una duda?
          </h2>
          <p className="mt-4 max-w-md text-lg text-ink/70">
            Escríbenos y te respondemos el mismo día. Atendemos clientes, tiendas aliadas
            y repartidores que quieran sumarse.
          </p>
          <div className="mt-8 space-y-3 text-sm text-ink/70">
            <p>📍 Cobertura inicial: Bogotá y alrededores</p>
            <p>✉️ hola@mercadito.co</p>
            <p>💬 WhatsApp: +57 300 000 0000</p>
          </div>
        </div>

        <div className="card p-7">
          {status === "sent" ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-leaf text-paper">
                <Check className="h-7 w-7" />
              </span>
              <p className="mt-5 font-display text-2xl font-600">¡Mensaje enviado!</p>
              <p className="mt-2 text-sm text-ink/65">
                Gracias {form.name || "vecino"}, te contactamos muy pronto.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Field label="Nombre">
                <input
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Tu nombre"
                  className="input"
                />
              </Field>
              <Field label="Correo">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="tucorreo@ejemplo.com"
                  className="input"
                />
              </Field>
              <Field label="Mensaje">
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Cuéntanos en qué te ayudamos…"
                  className="input resize-none"
                />
              </Field>
              <Button type="submit" disabled={status === "sending"} className="w-full">
                {status === "sending" ? "Enviando…" : "Enviar mensaje"}
                <Send className="h-4 w-4" />
              </Button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.9rem;
          border: 1px solid #E9E0D1;
          background: #FBF7F0;
          padding: 0.7rem 0.9rem;
          font-size: 0.9rem;
          outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .input:focus { border-color: #3F7A3A; box-shadow: 0 0 0 3px rgba(63,122,58,.15); }
      `}</style>
    </Section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink/80">{label}</span>
      {children}
    </label>
  );
}
