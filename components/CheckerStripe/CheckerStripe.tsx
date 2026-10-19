import styles from "./CheckerStripe.module.css";

type Props = { size?: "band" | "thin"; className?: string };

/** Cinta de damero en tinta, paso de 16 px. Siempre franja, nunca fondo. */
export function CheckerStripe({ size = "band", className }: Props) {
  return <div className={[styles.stripe, styles[size], className].filter(Boolean).join(" ")} aria-hidden="true" />;
}
