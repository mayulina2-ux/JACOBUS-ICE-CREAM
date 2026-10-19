import type { Metadata } from "next";
import Link from "next/link";
import { FlavorCard } from "@/components/FlavorCard/FlavorCard";
import { SectionNav } from "@/components/SectionNav/SectionNav";
import { families } from "@/data/families";
import { flavorsByFamily } from "@/data/flavors";
import { saboresNav } from "@/data/site";
import styles from "./sabores.module.css";

export const metadata: Metadata = { title: "Todos los sabores" };

export default function SaboresPage() {
  return (
    <>
      <SectionNav section="Sabores" items={saboresNav} />
      <div className="container page">
        <header className="prose">
          <p className="t-label t-accent">Sabores</p>
          <h1 className="t-display">Cuatro familias. Dieciséis sabores.</h1>
          <p>Cada familia tiene su color. Si te gusta uno, prueba sus hermanos.</p>
        </header>
        {families.map((family) => (
          <section key={family.slug} className={styles.familyBlock} aria-labelledby={`fam-${family.slug}`}>
            <div className={styles.familyHead}>
              <h2 id={`fam-${family.slug}`} className="t-heading">
                {family.name}
              </h2>
              <Link href={`/familias/${family.slug}`}>Ver la familia</Link>
            </div>
            <ul className={styles.grid}>
              {flavorsByFamily(family.slug).map((f) => (
                <li key={f.slug}>
                  <FlavorCard flavor={f} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
