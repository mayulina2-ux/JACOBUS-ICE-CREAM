"use client";

import { Children, useCallback, useEffect, useId, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { IconArrowLeft, IconArrowRight } from "../Icons/Icons";
import styles from "./Carousel.module.css";

type Props = {
  title: string;
  /** Enlace «Ver todo» a la derecha del título */
  more?: { label: string; href: string };
  /** Ancho de cada diapositiva: flavor | media | vitrina | auto */
  itemSize?: "flavor" | "media" | "family";
  children: ReactNode;
};

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Carrusel horizontal con scroll-snap y flechas circulares. */
export function Carousel({ title, more, itemSize = "flavor", children }: Props) {
  const id = useId();
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const items = Children.toArray(children);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  };

  return (
    <section className={styles.carousel} aria-roledescription="carrusel" aria-labelledby={`${id}-title`}>
      <header className={styles.header}>
        <h2 className={styles.title} id={`${id}-title`}>
          {title}
        </h2>
        <div className={styles.controls}>
          {more && (
            <Link href={more.href} className={styles.more}>
              {more.label}
            </Link>
          )}
          <button
            type="button"
            className={styles.arrow}
            onClick={() => scrollBy(-1)}
            disabled={!canPrev}
            aria-controls={`${id}-track`}
            aria-label={`Anteriores de ${title}`}
          >
            <IconArrowLeft />
          </button>
          <button
            type="button"
            className={styles.arrow}
            onClick={() => scrollBy(1)}
            disabled={!canNext}
            aria-controls={`${id}-track`}
            aria-label={`Siguientes de ${title}`}
          >
            <IconArrowRight />
          </button>
        </div>
      </header>
      {/* El carril es enfocable: con el foco, las flechas del teclado lo desplazan */}
      <div
        ref={trackRef}
        id={`${id}-track`}
        className={`${styles.track} ${styles[itemSize]}`}
        tabIndex={0}
        role="group"
        aria-label={`${title}: desliza o usa las flechas`}
      >
        {items.map((child, i) => (
          <div
            key={i}
            className={styles.slide}
            role="group"
            aria-roledescription="diapositiva"
            aria-label={`${i + 1} de ${items.length}`}
          >
            {child}
          </div>
        ))}
      </div>
    </section>
  );
}
