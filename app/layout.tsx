import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Dela_Gothic_One, Space_Mono } from "next/font/google";
import { CheckerStripe } from "@/components/CheckerStripe/CheckerStripe";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { themeScript } from "@/components/Header/ThemeToggle";
import { VitrinaStrip } from "@/components/VitrinaStrip/VitrinaStrip";
import "./globals.css";

const dela = Dela_Gothic_One({ weight: "400", subsets: ["latin"], variable: "--font-dela", display: "swap" });
const bricolage = Bricolage_Grotesque({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-space-mono", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Jacobus Ice Cream · Helados hechos hoy en Elda", template: "%s · Jacobus Ice Cream" },
  description: "Heladería de barrio en Elda (Alicante). Pistacho de verdad, sorbetes recién hechos y punk en la terraza.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#15111c" },
    { media: "(prefers-color-scheme: dark)", color: "#221b2c" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${dela.variable} ${bricolage.variable} ${spaceMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <Header />
        <VitrinaStrip />
        <CheckerStripe size="thin" />
        <main id="contenido" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
