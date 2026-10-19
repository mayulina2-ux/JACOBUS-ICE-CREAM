import { Button } from "../Button/Button";
import { CheckerStripe } from "../CheckerStripe/CheckerStripe";
import styles from "./PromoBanner.module.css";

type Props = {
  kicker: string;
  title: string;
  text: string;
  cta: { label: string; href: string };
};

/** Bloque promocional propio: neón-lime con borde y franja de damero. */
export function PromoBanner({ kicker, title, text, cta }: Props) {
  return (
    <aside className={`${styles.banner} on-color`} aria-label={`Promoción: ${title}`}>
      <CheckerStripe size="thin" className={styles.stripe} />
      <div className={styles.content}>
        <p className={styles.kicker}>{kicker}</p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.cta}>
        <Button href={cta.href} variant="secondary">
          {cta.label}
        </Button>
      </div>
    </aside>
  );
}
