import { Button } from "@/components/Button/Button";
import styles from "./simple.module.css";

export default function NotFound() {
  return (
    <div className={`container ${styles.notFound}`}>
      <p className="t-label t-accent">Error 404</p>
      <h1 className="t-display-xl">Aquí no hay helado.</h1>
      <p>Esta página se ha derretido o nunca existió.</p>
      <Button href="/">Volver a la portada</Button>
    </div>
  );
}
