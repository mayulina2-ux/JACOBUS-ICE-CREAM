"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gridMenu, mainNav } from "@/data/site";
import { Button } from "../Button/Button";
import { IconGrid, IconMenu, IconPin } from "../Icons/Icons";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.css";

function isActive(pathname: string, href: string) {
  if (href === "/sabores") return pathname.startsWith("/sabores") || pathname.startsWith("/familias");
  return pathname === href || pathname.startsWith(href + "/");
}

/** Header fijo en tinta: marca, navegación, Mapa, cuadrícula y un único CTA. */
export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [gridOpen, setGridOpen] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const gridButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMenuOpen(false);
    setGridOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!gridOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!gridRef.current?.contains(e.target as Node)) setGridOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setGridOpen(false);
        gridButtonRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [gridOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <button
          ref={menuButtonRef}
          type="button"
          className={`${styles.iconButton} ${styles.burger}`}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(true)}
        >
          <IconMenu />
        </button>

        <Link href="/" className={styles.logo} aria-label="Jacobus Ice Cream, ir a la portada">
          JACOBUS
        </Link>

        <nav className={styles.nav} aria-label="Principal">
          <ul className={styles.navList}>
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={styles.navLink}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link href="/nosotros#mapa" className={`${styles.iconButton} ${styles.desktopOnly}`}>
            <IconPin />
            <span className={styles.iconLabel}>Mapa</span>
          </Link>

          <div className={`${styles.gridWrap} ${styles.desktopOnly}`} ref={gridRef}>
            <button
              ref={gridButtonRef}
              type="button"
              className={styles.iconButton}
              aria-expanded={gridOpen}
              aria-controls="grid-menu"
              aria-label="Todas las secciones"
              onClick={() => setGridOpen((o) => !o)}
            >
              <IconGrid />
            </button>
            <div id="grid-menu" className={styles.gridPanel} hidden={!gridOpen}>
              <p className={styles.gridTitle}>Todo Jacobus</p>
              <ul className={styles.gridList}>
                {gridMenu.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={styles.gridLink}>
                      <span className={styles.gridLabel}>{item.label}</span>
                      <span className={styles.gridText}>{item.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ThemeToggle className={`${styles.iconButton} ${styles.desktopOnly}`} />

          <Button href="/tienda" size="sm" className={styles.cta}>
            PIDE YA
          </Button>
        </div>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={() => {
          setMenuOpen(false);
          menuButtonRef.current?.focus();
        }}
        pathname={pathname}
      />
    </header>
  );
}
