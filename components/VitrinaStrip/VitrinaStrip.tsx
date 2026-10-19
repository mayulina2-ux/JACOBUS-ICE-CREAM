"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Flavor, VitrinaStatus } from "@/data/types";
import { familyColor } from "@/data/families";
import { formatPrice } from "@/data/flavors";
import { IconArrowLeft, IconArrowRight } from "../Icons/Icons";
import { Skeleton } from "../Skeleton/Skeleton";
import { Tag, type TagTone } from "../Tag/Tag";
import styles from "./VitrinaStrip.module.css";

const STATUS: Record<VitrinaStatus, { label: string; tone: TagTone } | null> = {
  "queda-poco": { label: "Queda poco", tone: "lime" },
  agotado: { label: "Agotado", tone: "off" },
  "recien-hecho": { label: "Recién hecho", tone: "cyan" },
  normal: null,
};

/** Simula la llamada a la vitrina de hoy (no hay backend). */
async function fetchVitrina(): Promise<Flavor[]> {
  const { flavors } = await import("@/data/flavors");
  await new Promise((r) => setTimeout(r, 700));
  return flavors.filter((f) => f.vitrina !== null);
}

/** «Vitrina en directo»: carrusel de mini-tarjetas con lo que hay hoy. */
export function VitrinaStrip() {
  const [items, setItems] = useState<Flavor[] | null>(null);
  const trackRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    let alive = true;
    fetchVitrina().then((data) => alive && setItems(data));
    return () => {
      alive = false;
    };
  }, []);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section id="vitrina" className={styles.strip} aria-labelledby="vitrina-title" aria-busy={items === null}>
      <div className={styles.inner}>
        <h2 id="vitrina-title" className={styles.title}>
          <span className={styles.live} aria-hidden="true" />
          Vitrina en directo
        </h2>
        <button type="button" className={styles.arrow} onClick={() => scroll(-1)} aria-label="Ver sabores anteriores">
          <IconArrowLeft />
        </button>
        <ul ref={trackRef} className={styles.track} tabIndex={0} aria-label="Sabores en la vitrina de hoy">
          {items === null
            ? Array.from({ length: 8 }, (_, i) => (
                <li key={i} className={styles.card}>
                  <Skeleton shape="round" />
                  <span className={styles.skeletonText}>
                    <Skeleton />
                    <Skeleton shape="pill" />
                  </span>
                </li>
              ))
            : items.map((f) => {
                const status = f.vitrina ? STATUS[f.vitrina] : null;
                const soldOut = f.vitrina === "agotado";
                return (
                  <li key={f.slug} className={styles.card}>
                    <span
                      className={styles.chip}
                      style={{ ["--family-color" as string]: familyColor(f.family) }}
                      aria-hidden="true"
                    />
                    <span className={styles.body}>
                      <Link href={`/sabores/${f.slug}`} className={`${styles.name} ${soldOut ? styles.soldOut : ""}`}>
                        {f.name}
                      </Link>
                      <span className={styles.row}>
                        <span className={styles.price}>{formatPrice(f.prices.pequena)}</span>
                        {status && <Tag tone={status.tone}>{status.label}</Tag>}
                      </span>
                    </span>
                  </li>
                );
              })}
        </ul>
        <button type="button" className={styles.arrow} onClick={() => scroll(1)} aria-label="Ver más sabores">
          <IconArrowRight />
        </button>
      </div>
    </section>
  );
}
