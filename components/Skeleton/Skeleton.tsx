import styles from "./Skeleton.module.css";

type Props = { shape?: "line" | "block" | "pill" | "round"; className?: string };

/** Hueco de carga. Parpadea suave salvo con movimiento reducido. */
export function Skeleton({ shape = "line", className }: Props) {
  return <span className={[styles.skeleton, styles[shape], className].filter(Boolean).join(" ")} aria-hidden="true" />;
}
