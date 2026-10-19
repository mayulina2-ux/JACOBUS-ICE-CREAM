"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { mainNav, socials } from "@/data/site";
import { CheckerStripe } from "../CheckerStripe/CheckerStripe";
import { ThemeToggle } from "../Header/ThemeToggle";
import { IconClose, IconPin } from "../Icons/Icons";
import styles from "./MobileMenu.module.css";

type Props = { open: boolean; onClose: () => void; pathname: string };

/** Menú a pantalla completa para móvil. Atrapa el foco y se cierra con Escape. */
export function MobileMenu({ open, onClose, pathname }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel?.querySelector<HTMLElement>("a, button")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panel) return;
      const focusables = Array.from(panel.querySelectorAll<HTMLElement>("a, button"));
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      ref={panelRef}
      className={styles.menu}
      role="dialog"
      aria-modal="true"
      aria-label="Menú"
      hidden={!open}
    >
      <div className={styles.top}>
        <span className={styles.logo}>JACOBUS</span>
        <button type="button" className={styles.close} onClick={onClose} aria-label="Cerrar menú">
          <IconClose />
        </button>
      </div>
      <CheckerStripe size="thin" className={styles.stripe} />
      <nav aria-label="Principal (móvil)">
        <ul className={styles.list}>
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={styles.link}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={onClose}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.extras}>
        <Link href="/nosotros#mapa" className={styles.extra} onClick={onClose}>
          <IconPin /> Mapa y horario
        </Link>
        <ThemeToggle className={styles.extra} withLabel />
      </div>
      <ul className={styles.socials} aria-label="Redes sociales">
        {socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} className={styles.social} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
