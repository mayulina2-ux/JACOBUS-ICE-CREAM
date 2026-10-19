import type { ReactNode } from "react";
import styles from "./Tag.module.css";

export type TagTone = "neutral" | "pink" | "lime" | "cyan" | "family" | "danger" | "ink" | "off";

type Props = {
  children: ReactNode;
  tone?: TagTone;
  /** pill = chapa redonda; block = etiqueta de lado duro */
  shape?: "pill" | "block";
  className?: string;
};

/** Etiqueta / chapa en `label` mono. */
export function Tag({ children, tone = "neutral", shape = "pill", className }: Props) {
  return (
    <span className={[styles.tag, styles[tone], styles[shape], className].filter(Boolean).join(" ")}>
      {children}
    </span>
  );
}

export const Chapa = Tag;
