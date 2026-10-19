"use client";

import Link from "next/link";
import { DataTable, type Column } from "@/components/DataTable/DataTable";
import { familyColor, getFamily } from "@/data/families";
import type { RankedFlavor } from "@/data/flavors";
import styles from "./ranking.module.css";

function Trend({ f }: { f: RankedFlavor }) {
  if (f.trend === "same") {
    return (
      <span className={styles.trend}>
        <span aria-hidden="true">=</span>
        <span className="visually-hidden">Igual que el mes pasado</span>
      </span>
    );
  }
  const up = f.trend === "up";
  const n = Math.abs(f.delta);
  return (
    <span className={`${styles.trend} ${up ? styles.up : styles.down}`}>
      <span aria-hidden="true">
        {up ? "▲" : "▼"} {n}
      </span>
      <span className="visually-hidden">
        {up ? "Sube" : "Baja"} {n} {n === 1 ? "puesto" : "puestos"}
      </span>
    </span>
  );
}

const columns: Column<RankedFlavor>[] = [
  { key: "rank", header: "Pos.", numeric: true, render: (f) => <span className={styles.pos}>{f.rank}</span> },
  {
    key: "name",
    header: "Sabor",
    render: (f) => (
      <span className={styles.flavor}>
        <span className={styles.swatch} style={{ ["--family-color" as string]: familyColor(f.family) }} aria-hidden="true" />
        <Link href={`/sabores/${f.slug}`} className={styles.link}>
          {f.name}
        </Link>
      </span>
    ),
  },
  { key: "family", header: "Familia", render: (f) => getFamily(f.family)?.short },
  { key: "trend", header: "Tendencia", render: (f) => <Trend f={f} /> },
  { key: "last", header: "Mes pasado", numeric: true, render: (f) => f.lastRank },
  { key: "votes", header: "Votos", numeric: true, render: (f) => f.votes },
];

export function RankingTable({ title, rows, cut }: { title: string; rows: RankedFlavor[]; cut: number }) {
  return (
    <DataTable
      caption={title}
      rows={rows}
      columns={columns}
      rowKey={(f) => f.slug}
      cutAfter={cut}
      cutLabel="▲ Entran en la vitrina del mes que viene"
    />
  );
}
