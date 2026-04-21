"use client";

import { useEffect, useState } from "react";
import { Button } from "./Primitives";

export function ReservationModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) setSent(false);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="kh-modal" onClick={onClose} role="dialog" aria-modal="true">
      <div className="kh-modal__panel" onClick={(e) => e.stopPropagation()}>
        <button
          className="kh-modal__close"
          aria-label="Cerrar"
          onClick={onClose}
        >
          ×
        </button>
        {!sent ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="kh-modal__head">
              <img src="/assets/hanko.svg" alt="" />
              <div>
                <div className="jp">ご予約</div>
                <h3>Reservar una mesa</h3>
                <p>Le llamaremos para confirmar en las próximas horas.</p>
              </div>
            </div>
            <div className="kh-modal__grid">
              <label className="kh-field">
                <span>Nombre</span>
                <input required defaultValue="Mariko S." />
              </label>
              <label className="kh-field">
                <span>Teléfono</span>
                <input required type="tel" placeholder="55 ____ ____" />
              </label>
              <label className="kh-field">
                <span>Personas</span>
                <select defaultValue="2 personas">
                  <option>1 persona</option>
                  <option>2 personas</option>
                  <option>3 personas</option>
                  <option>4 personas</option>
                  <option>5 personas</option>
                  <option>6+ personas</option>
                </select>
              </label>
              <label className="kh-field">
                <span>Fecha y hora</span>
                <input placeholder="mié · 23 abr · 7:00 p.m." />
              </label>
              <label className="kh-field kh-field--wide">
                <span>Notas</span>
                <input placeholder="Alergias, cumpleaños, niños, silla alta…" />
              </label>
            </div>
            <div className="kh-modal__foot">
              <Button type="button" variant="subtle" onClick={onClose}>
                Cancelar
              </Button>
              <Button type="submit" variant="primary">
                Enviar solicitud
              </Button>
            </div>
          </form>
        ) : (
          <div className="kh-modal__thanks">
            <img src="/assets/hanko.svg" alt="" />
            <h3>ありがとうございます</h3>
            <p>
              Recibimos tu solicitud. Te llamaremos en las próximas horas para
              confirmar la mesa.
            </p>
            <Button variant="primary" onClick={onClose}>
              Cerrar
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
