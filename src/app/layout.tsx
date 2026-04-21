import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Konohanatei — Café & Restaurante Japonés",
  description:
    "Café y restaurante japonés en Jardines del Pedregal, CDMX. Cocina casera, servicio sin prisas, precios de todos los días. Desde 2004.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F4EADB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="kh-hero-editorial kh-tone-paper kh-accent-mid">
        {children}
      </body>
    </html>
  );
}
