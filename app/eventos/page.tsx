import type { Metadata } from "next";
import { SectionNav } from "@/components/SectionNav/SectionNav";
import { EventsBrowser } from "./EventsBrowser";

export const metadata: Metadata = { title: "Eventos: catas, talleres y punk" };

export default function EventosPage() {
  return (
    <>
      <SectionNav section="Eventos" items={[{ label: "Agenda", href: "/eventos" }]} />
      <div className="container page">
        <header className="prose">
          <p className="t-label t-accent">Agenda</p>
          <h1 className="t-display">Catas, talleres y punk en la terraza.</h1>
          <p>Elige día. Si hay plazas, ven. Si no, apúntate en la barra para la siguiente.</p>
        </header>
        <EventsBrowser />
      </div>
    </>
  );
}
