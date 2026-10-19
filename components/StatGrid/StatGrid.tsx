import type { ReactNode } from "react";
import styles from "./StatGrid.module.css";

export type Stat = {
  label: string;
  value: ReactNode;
  /** Valor numérico (precio, kcal, votos) → se compone en mono */
  numeric?: boolean;
  tone?: "default" | "danger";
};

/** Franja de datos en cuadrícula con bordes de 2 px. */
export function StatGrid({ stats, label }: { stats: Stat[]; label: string }) {
  return (
    <dl className={styles.grid} aria-label={label}>
      {stats.map((s) => (
        <div key={s.label} className={styles.cell}>
          <dt className={styles.label}>{s.label}</dt>
          <dd
            className={[styles.value, s.numeric ? styles.numeric : "", s.tone === "danger" ? styles.danger : ""]
              .filter(Boolean)
              .join(" ")}
          >
            {s.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
