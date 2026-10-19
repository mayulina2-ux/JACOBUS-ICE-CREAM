import type { ReactNode } from "react";
import styles from "./SidebarModule.module.css";

type Props = {
  title: string;
  id?: string;
  action?: ReactNode;
  children: ReactNode;
};

/** Módulo lateral: cabecera en label sobre tinta y cuerpo en surface-raised. */
export function SidebarModule({ title, id, action, children }: Props) {
  const headingId = id ? `${id}-title` : undefined;
  return (
    <section className={styles.module} aria-labelledby={headingId} id={id}>
      <header className={styles.header}>
        <h2 className={styles.title} id={headingId}>
          {title}
        </h2>
        {action}
      </header>
      <div className={styles.body}>{children}</div>
    </section>
  );
}
