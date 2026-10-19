import type { Metadata } from "next";
import { SectionNav } from "@/components/SectionNav/SectionNav";
import { saboresNav } from "@/data/site";
import { CartaExplorer } from "./CartaExplorer";

export const metadata: Metadata = { title: "Carta, precios y alérgenos" };

export default function CartaPage() {
  return (
    <>
      <SectionNav section="Sabores" items={saboresNav} />
      <div className="container page">
        <header className="prose">
          <p className="t-label t-accent">La carta</p>
          <h1 className="t-display">Todo lo que hay. Con precios.</h1>
          <p>
            Tres tamaños, dieciséis sabores y los alérgenos bien a la vista. Ordena por lo que te importe: precio,
            calorías o lo que vota el barrio.
          </p>
        </header>
        <CartaExplorer />
      </div>
    </>
  );
}
