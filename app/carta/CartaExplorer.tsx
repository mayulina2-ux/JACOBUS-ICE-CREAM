"use client";

import { useMemo, useState } from "react";
import { FlavorTable } from "@/components/FlavorTable/FlavorTable";
import { families } from "@/data/families";
import { flavors } from "@/data/flavors";
import type { Allergen, FamilySlug } from "@/data/types";
import styles from "./carta.module.css";

const ALLERGENS: Allergen[] = ["leche", "frutos secos", "huevo", "soja", "gluten"];

/** Filtros de la carta + tabla ordenable. */
export function CartaExplorer() {
  const [family, setFamily] = useState<FamilySlug | "todas">("todas");
  const [without, setWithout] = useState<Allergen[]>([]);
  const [vegan, setVegan] = useState(false);
  const [sugarFree, setSugarFree] = useState(false);

  const rows = useMemo(
    () =>
      flavors.filter(
        (f) =>
          (family === "todas" || f.family === family) &&
          without.every((a) => !f.allergens.includes(a)) &&
          (!vegan || f.vegan) &&
          (!sugarFree || f.sugarFree),
      ),
    [family, without, vegan, sugarFree],
  );

  const toggleAllergen = (a: Allergen) =>
    setWithout((list) => (list.includes(a) ? list.filter((x) => x !== a) : [...list, a]));

  const reset = () => {
    setFamily("todas");
    setWithout([]);
    setVegan(false);
    setSugarFree(false);
  };

  const filtered = family !== "todas" || without.length > 0 || vegan || sugarFree;

  return (
    <div className={styles.explorer}>
      <form className={styles.filters} aria-label="Filtrar la carta" onSubmit={(e) => e.preventDefault()}>
        <fieldset className={styles.group}>
          <legend className={styles.legend}>Familia</legend>
          <div className={styles.options}>
            {[{ slug: "todas" as const, short: "Todas" }, ...families].map((f) => (
              <label key={f.slug} className={styles.option}>
                <input
                  type="radio"
                  name="familia"
                  value={f.slug}
                  checked={family === f.slug}
                  onChange={() => setFamily(f.slug)}
                  className={styles.input}
                />
                <span className={styles.pill}>{f.short}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className={styles.group}>
          <legend className={styles.legend}>Sin alérgenos</legend>
          <div className={styles.options}>
            {ALLERGENS.map((a) => (
              <label key={a} className={styles.option}>
                <input
                  type="checkbox"
                  checked={without.includes(a)}
                  onChange={() => toggleAllergen(a)}
                  className={styles.input}
                />
                <span className={styles.pill}>Sin {a}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className={styles.group}>
          <legend className={styles.legend}>Dieta</legend>
          <div className={styles.options}>
            <label className={styles.option}>
              <input type="checkbox" checked={vegan} onChange={(e) => setVegan(e.target.checked)} className={styles.input} />
              <span className={styles.pill}>Vegano</span>
            </label>
            <label className={styles.option}>
              <input
                type="checkbox"
                checked={sugarFree}
                onChange={(e) => setSugarFree(e.target.checked)}
                className={styles.input}
              />
              <span className={styles.pill}>Sin azúcar</span>
            </label>
          </div>
        </fieldset>

        <div className={styles.summary}>
          <p aria-live="polite" className={styles.count}>
            {rows.length} de {flavors.length} sabores
          </p>
          {filtered && (
            <button type="button" className={styles.reset} onClick={reset}>
              Quitar filtros
            </button>
          )}
        </div>
      </form>

      <FlavorTable
        rows={rows}
        caption="Carta completa de sabores"
        hideCaption
        pageSize={10}
        empty="Con esos filtros no queda nada. Quita alguno y vuelve a mirar."
      />
    </div>
  );
}
