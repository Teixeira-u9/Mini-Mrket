"use client";

import type { DeliveryWindow } from "@/lib/types";
import { useState } from "react";
import { MapPin, Clock, Loader2 } from "lucide-react";

export function DeliveryBanner({ windows }: { windows: DeliveryWindow[] }) {
  const [zone, setZone] = useState<string | null>(null);
  const [locating, setLocating] = useState(false);
  const [selected, setSelected] = useState(windows.find((w) => w.available)?.id ?? "");

  function detectZone() {
    setLocating(true);
    // En producción se enviaría la posición al backend para validar cobertura.
    if (!navigator.geolocation) {
      setZone("Zona Centro");
      setLocating(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      () => {
        setZone("Tu zona · cobertura confirmada");
        setLocating(false);
      },
      () => {
        setZone("Zona Centro");
        setLocating(false);
      },
      { timeout: 5000 },
    );
  }

  const current = windows.find((w) => w.id === selected);

  return (
    <div className="flex flex-col gap-3 rounded-xl2 bg-leaf px-5 py-4 text-paper sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-paper/15">
          <MapPin className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-semibold">
            {zone ?? "Activa tu ubicación para confirmar cobertura"}
          </p>
          <p className="text-xs text-paper/75">
            {current?.available
              ? `Entrega ${current.label.toLowerCase()} · llega en ~${current.etaMinutes} min`
              : "Selecciona una ventana de entrega disponible"}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {!zone && (
          <button
            onClick={detectZone}
            disabled={locating}
            className="inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-sm font-semibold text-leaf-dark transition hover:bg-paper/90"
          >
            {locating ? <Loader2 className="h-4 w-4 animate-spin" /> : <MapPin className="h-4 w-4" />}
            {locating ? "Detectando…" : "Usar mi ubicación"}
          </button>
        )}
        <label className="relative inline-flex items-center">
          <Clock className="pointer-events-none absolute left-3 h-4 w-4 text-leaf-dark" />
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="appearance-none rounded-full bg-paper py-2 pl-9 pr-8 text-sm font-medium text-ink"
          >
            {windows.map((w) => (
              <option key={w.id} value={w.id} disabled={!w.available}>
                {w.label} {w.available ? "" : "(lleno)"}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}
