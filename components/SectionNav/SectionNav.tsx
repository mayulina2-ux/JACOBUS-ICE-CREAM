"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SectionNav.module.css";

type Item = { label: string; href: string };

type Props = { section: string; items: Item[] };

/** Subnavegación de sección: nombre en label y pestañas con subrayado neón. */
export function SectionNav({ section, items }: Props) {
  const pathname = usePathname();
  return (
    <nav className={styles.bar} aria-label={`Sección ${section}`}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.section}>{section}</p>
        <ul className={styles.list}>
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link href={item.href} className={styles.link} aria-current={active ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
