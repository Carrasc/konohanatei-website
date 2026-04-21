"use client";

import { Button } from "./Primitives";

export function CtaBand({ onReserve }: { onReserve: () => void }) {
  return (
    <section className="kh-cta-band">
      <img
        src="/assets/sakura.svg"
        alt=""
        className="kh-cta-band__sakura kh-cta-band__sakura--a"
      />
      <img
        src="/assets/sakura.svg"
        alt=""
        className="kh-cta-band__sakura kh-cta-band__sakura--b"
      />
      <div className="kh-cta-band__inner">
        <div className="kh-cta-band__jp">どうぞお越しください</div>
        <div className="kh-cta-band__latin">Te esperamos en Pedregal.</div>
        <p className="kh-cta-band__desc">
          Reserva una mesa o llámanos. La cocina cierra a las 7:30 p.m. — llega
          con calma.
        </p>
        <div className="kh-cta-band__cta">
          <Button variant="accent" size="lg" onClick={onReserve}>
            Reservar una mesa
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => {
              window.location.href = "tel:5556035404";
            }}
          >
            Llamar · 5603 5404
          </Button>
        </div>
      </div>
    </section>
  );
}
