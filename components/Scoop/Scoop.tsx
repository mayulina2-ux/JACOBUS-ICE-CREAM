import styles from "./Scoop.module.css";

type Props = {
  /** Color de la bola, normalmente `var(--family-x)` */
  color?: string;
  /** Texto alternativo. Si se omite, la bola es decorativa. */
  label?: string;
  size?: "mini" | "card" | "hero";
  className?: string;
};

/** Placeholder ilustrado: una bola de helado en cucurucho. */
export function Scoop({ color = "var(--family-color)", label, size = "card", className }: Props) {
  const a11y = label ? { role: "img", "aria-label": label } : { "aria-hidden": true };
  return (
    <svg
      viewBox="0 0 120 150"
      className={[styles.scoop, styles[size], className].filter(Boolean).join(" ")}
      style={{ ["--scoop-color" as string]: color }}
      {...a11y}
      focusable="false"
    >
      {/* Cucurucho */}
      <path className={styles.cone} d="M30 74 L90 74 L60 144 Z" />
      <path className={styles.line} d="M40 86 L76 112 M48 102 L70 118 M80 86 L44 112 M72 102 L52 118" />
      {/* Bola con goterones */}
      <path
        className={styles.ball}
        d="M24 66 C18 32 42 12 60 12 C80 12 104 30 96 66 Q92 78 83 72 Q78 86 69 76 Q61 88 53 76 Q45 86 38 74 Q29 80 24 66 Z"
      />
      {/* Brillo */}
      <path className={styles.shine} d="M40 34 Q46 24 56 22" />
    </svg>
  );
}
