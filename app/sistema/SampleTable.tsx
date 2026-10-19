"use client";

import { DataTable, type Column } from "@/components/DataTable/DataTable";
import { flavors, formatPrice } from "@/data/flavors";
import type { Flavor } from "@/data/types";

const columns: Column<Flavor>[] = [
  { key: "name", header: "Sabor", render: (f) => f.name, sortValue: (f) => f.name },
  { key: "price", header: "Pequeña", numeric: true, render: (f) => formatPrice(f.prices.pequena), sortValue: (f) => f.prices.pequena },
  { key: "kcal", header: "Kcal", numeric: true, render: (f) => f.kcal, sortValue: (f) => f.kcal },
  { key: "votes", header: "Votos", numeric: true, render: (f) => f.votes, sortValue: (f) => f.votes },
];

export function SampleTable() {
  return (
    <DataTable
      caption="Tabla de ejemplo (ordenable y paginada)"
      rows={flavors}
      columns={columns}
      rowKey={(f) => f.slug}
      pageSize={5}
      initialSort={{ key: "votes", dir: "desc" }}
      cutAfter={3}
      cutLabel="Corte de ejemplo"
    />
  );
}
