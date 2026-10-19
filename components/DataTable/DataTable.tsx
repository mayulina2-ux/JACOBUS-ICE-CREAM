"use client";

import { useEffect, useId, useMemo, useState, type ReactNode } from "react";
import styles from "./DataTable.module.css";

export type Column<T> = {
  key: string;
  header: string;
  render: (row: T) => ReactNode;
  /** Si se da, la columna es ordenable por este valor */
  sortValue?: (row: T) => string | number;
  numeric?: boolean;
};

type Sort = { key: string; dir: "asc" | "desc" } | null;

type Props<T> = {
  rows: T[];
  columns: Column<T>[];
  caption: string;
  /** Oculta el caption visualmente (sigue para lectores de pantalla) */
  hideCaption?: boolean;
  rowKey: (row: T) => string;
  pageSize?: number;
  initialSort?: Sort;
  /** Línea de corte discontinua tras la fila N (solo con el orden inicial) */
  cutAfter?: number;
  cutLabel?: string;
  empty?: ReactNode;
};

/** Tabla densa, ordenable y paginada. Primera columna fija en móvil. */
export function DataTable<T>({
  rows,
  columns,
  caption,
  hideCaption,
  rowKey,
  pageSize,
  initialSort = null,
  cutAfter,
  cutLabel,
  empty,
}: Props<T>) {
  const id = useId();
  const [sort, setSort] = useState<Sort>(initialSort);
  const [page, setPage] = useState(0);

  useEffect(() => setPage(0), [rows, sort]);

  const sorted = useMemo(() => {
    if (!sort) return rows;
    const col = columns.find((c) => c.key === sort.key);
    if (!col?.sortValue) return rows;
    const get = col.sortValue;
    return [...rows].sort((a, b) => {
      const va = get(a);
      const vb = get(b);
      const cmp = typeof va === "number" && typeof vb === "number" ? va - vb : String(va).localeCompare(String(vb), "es");
      return sort.dir === "asc" ? cmp : -cmp;
    });
  }, [rows, columns, sort]);

  const pages = pageSize ? Math.max(1, Math.ceil(sorted.length / pageSize)) : 1;
  const visible = pageSize ? sorted.slice(page * pageSize, page * pageSize + pageSize) : sorted;
  const offset = pageSize ? page * pageSize : 0;
  const showCut =
    cutAfter !== undefined && sort?.key === initialSort?.key && sort?.dir === initialSort?.dir;

  const toggle = (key: string) => {
    setSort((s) => {
      if (!s || s.key !== key) return { key, dir: "desc" };
      return { key, dir: s.dir === "desc" ? "asc" : "desc" };
    });
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.scroller} role="region" aria-labelledby={`${id}-caption`} tabIndex={0}>
        <table className={styles.table}>
          <caption id={`${id}-caption`} className={hideCaption ? "visually-hidden" : styles.caption}>
            {caption}
          </caption>
          <thead>
            <tr>
              {columns.map((col) => {
                const active = sort?.key === col.key;
                const ariaSort = active ? (sort!.dir === "asc" ? "ascending" : "descending") : undefined;
                return (
                  <th
                    key={col.key}
                    scope="col"
                    aria-sort={col.sortValue ? (ariaSort ?? "none") : undefined}
                    className={[styles.th, col.numeric ? styles.num : "", active ? styles.active : ""].join(" ")}
                  >
                    {col.sortValue ? (
                      <button type="button" className={styles.sortButton} onClick={() => toggle(col.key)}>
                        {col.header}
                        <span className={styles.sortIcon} aria-hidden="true">
                          {active ? (sort!.dir === "asc" ? "▲" : "▼") : "↕"}
                        </span>
                      </button>
                    ) : (
                      col.header
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {visible.length === 0 && (
              <tr>
                <td colSpan={columns.length} className={styles.empty}>
                  {empty ?? "No hay nada con esos filtros."}
                </td>
              </tr>
            )}
            {visible.flatMap((row, i) => {
              const absolute = offset + i;
              const cells = (
                <tr key={rowKey(row)} className={absolute % 2 === 0 ? styles.even : styles.odd}>
                  {columns.map((col, ci) => {
                    const cls = [styles.td, col.numeric ? styles.num : "", sort?.key === col.key ? styles.activeCell : ""].join(" ");
                    return ci === 0 ? (
                      <th key={col.key} scope="row" className={cls}>
                        {col.render(row)}
                      </th>
                    ) : (
                      <td key={col.key} className={cls}>
                        {col.render(row)}
                      </td>
                    );
                  })}
                </tr>
              );
              if (showCut && absolute + 1 === cutAfter) {
                return [
                  cells,
                  <tr key={`${rowKey(row)}-cut`} className={styles.cutRow}>
                    <td colSpan={columns.length} className={styles.cut}>
                      <span className={styles.cutLabel}>{cutLabel}</span>
                    </td>
                  </tr>,
                ];
              }
              return [cells];
            })}
          </tbody>
        </table>
      </div>
      {pageSize && pages > 1 && (
        <nav className={styles.pager} aria-label={`Páginas de ${caption}`}>
          <button type="button" className={styles.pageButton} onClick={() => setPage((p) => p - 1)} disabled={page === 0}>
            Anterior
          </button>
          <p className={styles.pageInfo} aria-live="polite">
            Página {page + 1} de {pages} · {sorted.length} filas
          </p>
          <button
            type="button"
            className={styles.pageButton}
            onClick={() => setPage((p) => p + 1)}
            disabled={page >= pages - 1}
          >
            Siguiente
          </button>
        </nav>
      )}
    </div>
  );
}
