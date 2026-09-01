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
      <head>
        {/* Weights are trimmed to what globals.css actually uses. The two
            Japanese families are the expensive part — a CJK weight is
            hundreds of KB — so each ships only the cuts it needs:
            Noto Serif JP is used at 500 alone, Shippori at 500 and 700. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@500&family=Shippori+Mincho:wght@500;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Nunito+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
        />
      </head>
      <body className="kh-tone-paper">{children}</body>
    </html>
  );
}
