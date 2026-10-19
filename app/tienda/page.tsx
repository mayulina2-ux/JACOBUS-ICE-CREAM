import type { Metadata } from "next";
import { Button } from "@/components/Button/Button";
import { Tag } from "@/components/Tag/Tag";
import { formatPrice } from "@/data/flavors";
import { site } from "@/data/site";
import styles from "../simple.module.css";

export const metadata: Metadata = { title: "Tienda y pedidos" };

const products = [
  { name: "Tarrina de medio litro", text: "Hasta 2 sabores. Aguanta el viaje a casa.", price: 9.5, tag: null },
  { name: "Tarrina de litro", text: "Hasta 3 sabores. Para compartir (o no).", price: 17, tag: "Lo más pedido" },
  { name: "Pack terraza", text: "4 tarrinas pequeñas + 4 cucuruchos para montar en casa.", price: 14, tag: null },
  { name: "Tarta helada", text: "Por encargo, con 48 horas. Tú eliges los sabores.", price: 28, tag: "Por encargo" },
];

export default function TiendaPage() {
  return (
    <div className="container page">
      <header className="prose">
        <p className="t-label t-accent">Tienda</p>
        <h1 className="t-display">Pide ya. Recoge en 10 minutos.</h1>
        <p>
          Llama, pide y pásate. Todavía no hay pago online: lo preparamos al momento y pagas en la barra.
        </p>
      </header>

      <ul className={styles.products}>
        {products.map((p) => (
          <li key={p.name} className={styles.product}>
            {p.tag && <Tag tone="neutral" shape="block">{p.tag}</Tag>}
            <h2 className="t-heading">{p.name}</h2>
            <p>{p.text}</p>
            <p className="t-price">{formatPrice(p.price)}</p>
          </li>
        ))}
      </ul>

      <div className={styles.callout}>
        <p className="t-heading">¿Lo quieres ya?</p>
        <Button href={`tel:${site.phone.replace(/\s/g, "")}`}>
          Llama al {site.phone}
        </Button>
      </div>
    </div>
  );
}
