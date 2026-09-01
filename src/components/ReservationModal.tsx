"use client";

import { useCallback, useEffect, useState } from "react";
import { Button, Icon } from "./Primitives";

/** Same number the header, footer and Visit section dial. */
const PHONE_HREF = "tel:5556035404";
const PHONE_DISPLAY = "55 5603 5404";

export function ReservationModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) setCopied(false);
  }, [open]);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const copyPhone = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(PHONE_DISPLAY);
      setCopied(true);
      return;
    } catch {
      // Clipboard API is unavailable outside secure contexts — fall back.
    }
    const ta = document.createElement("textarea");
    ta.value = PHONE_DISPLAY;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      setCopied(true);
    } catch {
      // Nothing else to try; the number stays visible and selectable.
    }
    document.body.removeChild(ta);
  }, []);

  if (!open) return null;

  return (
    <div
      className="kh-modal"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="kh-resv-title"
    >
      <div className="kh-modal__panel" onClick={(e) => e.stopPropagation()}>
        <button
          className="kh-modal__close"
          aria-label="Cerrar"
          onClick={onClose}
        >
          ×
        </button>

        <div className="kh-modal__head">
          <img src="/assets/hanko.svg" alt="" />
          <div>
            <div className="jp">ご予約</div>
            <h3 id="kh-resv-title">Reservar una mesa</h3>
            <p>Llámanos para reservar — te contestamos en el restaurante.</p>
          </div>
        </div>

        <div className="kh-resv__phone-card">
          <span className="kh-resv__label">Teléfono · お電話</span>
          <a className="kh-resv__number" href={PHONE_HREF}>
            {PHONE_DISPLAY}
          </a>
          <button
            type="button"
            className={`kh-resv__copy${copied ? " kh-resv__copy--done" : ""}`}
            onClick={copyPhone}
          >
            <Icon name={copied ? "check" : "copy"} size={14} />
            {copied ? "Copiado" : "Copiar"}
          </button>
        </div>

        <div className="kh-resv__note">
          <p>
            Solo tomamos reservas para mesas de <strong>más de 5 personas</strong>.
            Para grupos así, por favor llámanos con un día de anticipación.
          </p>
          <p>
            Para mesas más chicas no hace falta reservar — pasa cuando gustes y
            con gusto te acomodamos.
          </p>
        </div>

        <div className="kh-resv__foot">
          <span className="kh-resv__hours">
            Mar–Dom · 1:00 – 9:00 p.m.
            <small>Última orden 7:30 p.m. · Lunes cerrado</small>
          </span>
          <Button
            variant="primary"
            onClick={() => {
              window.location.href = PHONE_HREF;
            }}
          >
            Llamar ahora
          </Button>
        </div>
      </div>
    </div>
  );
}
