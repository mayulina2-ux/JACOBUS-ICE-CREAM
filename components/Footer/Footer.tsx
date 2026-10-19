import Link from "next/link";
import { footerColumns, site, socials } from "@/data/site";
import { CheckerStripe } from "../CheckerStripe/CheckerStripe";
import styles from "./Footer.module.css";

/** Footer en tinta con 5 columnas, redes y franja de damero encima. */
export function Footer() {
  return (
    <>
      <CheckerStripe />
      <footer className={styles.footer}>
        <div className={`container ${styles.inner}`}>
          <div className={styles.brand}>
            <p className={styles.logo}>JACOBUS</p>
            <p className={styles.claim}>Hecho hoy en Elda.</p>
            <address className={styles.address}>
              {site.address}
              <br />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            </address>
          </div>
          <div className={styles.columns}>
            {footerColumns.map((col) => (
              <nav key={col.title} aria-label={col.title} className={styles.column}>
                <h2 className={styles.heading}>{col.title}</h2>
                <ul className={styles.links}>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className={styles.link}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className={`container ${styles.bottom}`}>
          <ul className={styles.socials} aria-label="Redes sociales">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className={styles.social} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className={styles.legal}>© {new Date().getFullYear()} Jacobus Ice Cream · Elda (Alicante)</p>
        </div>
      </footer>
    </>
  );
}
