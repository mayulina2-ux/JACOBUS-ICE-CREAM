"use client";

import Link from "next/link";
import { DataTable, type Column } from "../DataTable/DataTable";
import { Tag } from "../Tag/Tag";
import { familyColor, getFamily } from "@/data/families";
import { formatPrice } from "@/data/flavors";
import type { Flavor } from "@/data/types";
import styles from "./FlavorTable.module.css";

const columns: Column<Flavor>[] = [
  {
    key: "name",
    header: "Sabor",
    sortValue: (f) => f.name,
    render: (f) => (
      <span className={styles.flavor}>
        <span className={styles.swatch} style={{ ["--family-color" as string]: familyColor(f.family) }} aria-hidden="true" />
        <Link href={`/sabores/${f.slug}`} className={styles.link}>
          {f.name}
        </Link>
      </span>
    ),
  },
  { key: "family", header: "Familia", sortValue: (f) => f.family, render: (f) => getFamily(f.family)?.short },
  {
    key: "kind",
    header: "Tipo",
    sortValue: (f) => f.kind,
    render: (f) => (f.kind === "sorbete" ? "Sorbete" : "Cremoso"),
  },
  { key: "p", header: "Pequeña", numeric: true, sortValue: (f) => f.prices.pequena, render: (f) => formatPrice(f.prices.pequena) },
  { key: "m", header: "Mediana", numeric: true, sortValue: (f) => f.prices.mediana, render: (f) => formatPrice(f.prices.mediana) },
  { key: "g", header: "Grande", numeric: true, sortValue: (f) => f.prices.grande, render: (f) => formatPrice(f.prices.grande) },
  { key: "kcal", header: "Kcal/100 g", numeric: true, sortValue: (f) => f.kcal, render: (f) => f.kcal },
  {
    key: "allergens",
    header: "Alérgenos",
    sortValue: (f) => f.allergens.length,
    render: (f) =>
      f.allergens.length === 0 ? (
        <span className="t-muted">Ninguno</span>
      ) : (
        <span className={styles.tags}>
          {f.allergens.map((a) => (
            <Tag key={a} tone="danger" shape="block">
              {a}
            </Tag>
          ))}
        </span>
      ),
  },
  {
    key: "diet",
    header: "Dieta",
    render: (f) => {
      const d = [f.vegan && "Vegano", f.sugarFree && "Sin azúcar"].filter(Boolean).join(" · ");
      return d || <span className="t-muted">—</span>;
    },
  },
  { key: "votes", header: "Votos", numeric: true, sortValue: (f) => f.votes, render: (f) => f.votes },
];

type Props = {
  rows: Flavor[];
  caption: string;
  hideCaption?: boolean;
  pageSize?: number;
  empty?: React.ReactNode;
};

/** Tabla de sabores: precio por tamaño, kcal, alérgenos y votos. */
export function FlavorTable({ rows, caption, hideCaption, pageSize, empty }: Props) {
  return (
    <DataTable
      rows={rows}
      columns={columns}
      caption={caption}
      hideCaption={hideCaption}
      rowKey={(f) => f.slug}
      pageSize={pageSize}
      initialSort={{ key: "votes", dir: "desc" }}
      empty={empty}
    />
  );
}
