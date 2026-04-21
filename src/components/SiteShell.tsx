"use client";

import { useCallback, useState } from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Signature } from "./Signature";
import { About } from "./About";
import { DelDia } from "./DelDia";
import { MenuBrowser } from "./MenuBrowser";
import { Visit } from "./Visit";
import { CtaBand } from "./CtaBand";
import { Footer } from "./Footer";
import { ReservationModal } from "./ReservationModal";

export function SiteShell() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  const scrollToMenu = useCallback(() => {
    if (typeof document === "undefined") return;
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <Header onReserve={openModal} />
      <Hero onReserve={openModal} onViewMenu={scrollToMenu} />
      <Signature />
      <About />
      <DelDia />
      <MenuBrowser />
      <Visit />
      <CtaBand onReserve={openModal} />
      <Footer />
      <ReservationModal open={modalOpen} onClose={closeModal} />
    </>
  );
}
