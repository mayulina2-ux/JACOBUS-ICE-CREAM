import type { ReactNode } from "react";
import styles from "./ThemedHero.module.css";

type Props = {
  /** `var(--family-x)` que tiñe toda la cabecera */
  color: string;
  /** Texto gigante de marca de agua (p. ej. el nombre de la familia) */
  watermark?: string;
  /** Ilustración a la derecha */
  art?: ReactNode;
  children: ReactNode;
};

/** Cabecera tematizada: toda ella se tiñe con el pastel de la entidad. */
export function ThemedHero({ color, watermark, art, children }: Props) {
  return (
    <section className={`${styles.hero} on-color`} style={{ ["--family-color" as string]: color }}>
      {watermark && (
        <p className={styles.watermark} aria-hidden="true">
          {watermark}
        </p>
      )}
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>{children}</div>
        {art && <div className={styles.art}>{art}</div>}
      </div>
    </section>
  );
}
