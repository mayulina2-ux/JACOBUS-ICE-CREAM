import type { Metadata } from "next";
import { MiniMap } from "@/components/MiniMap/MiniMap";
import { SidebarModule } from "@/components/SidebarModule/SidebarModule";
import { TodayHours } from "@/components/TodayHours/TodayHours";
import { flavors } from "@/data/flavors";
import { getPhoto } from "@/data/photos";
import { site } from "@/data/site";
import styles from "../simple.module.css";

export const metadata: Metadata = { title: "Nosotros" };

export default function NosotrosPage() {
  return (
    <div className="container page">
      <header className="prose">
        <p className="t-label t-accent">Nosotros</p>
        <h1 className="t-display">Hecho hoy en Elda.</h1>
        <p>
          Jacobus es una heladería de barrio. Hacemos el helado cada mañana en el obrador de atrás, con poca cosa y
          buena: leche de Villena, pistacho que tostamos aquí y fruta de temporada. Por la tarde ponemos discos. Por la
          noche, a veces, tocan bandas.
        </p>
      </header>

      <div className={styles.columns}>
        <section className="prose" aria-labelledby="obrador">
          <h2 id="obrador" className="t-heading">
            El obrador
          </h2>
          <p>
            Sin bases industriales ni sobres. Si un día la fruta no está buena, ese sabor no sale. Por eso a veces ves
            «AGOTADO» en la vitrina: es buena señal.
          </p>
          <h2 id="trabajo" className="t-heading">
            Trabaja aquí
          </h2>
          <p>
            Buscamos gente para la barra en verano. Escríbenos a <a href={`mailto:${site.email}`}>{site.email}</a> y
            cuéntanos tu sabor favorito.
          </p>
          <h2 id="legal" className="t-heading">
            Legal
          </h2>
          <p className="t-small t-muted">
            Web de demostración con datos de ejemplo. No usamos cookies de seguimiento ni guardamos datos personales.
            Solo recordamos, en tu navegador, si prefieres el tema claro u oscuro.
          </p>
          <h3 className="t-label">Créditos de las fotos</h3>
          <p className="t-small t-muted">
            Las fotos de los helados son de Unsplash, con la Licencia de Unsplash (uso libre). Son provisionales hasta
            que tengamos las nuestras.
          </p>
          <ul className={`t-small ${styles.credits}`}>
            {flavors.map((f) => {
              const photo = getPhoto(f.slug);
              return photo ? (
                <li key={f.slug}>
                  {f.name}:{" "}
                  <a href={photo.source} target="_blank" rel="noreferrer">
                    {photo.author}
                  </a>
                </li>
              ) : null;
            })}
          </ul>
        </section>

        <div className={styles.side}>
          <SidebarModule title="Horario" id="horario">
            <TodayHours full />
          </SidebarModule>
          <SidebarModule title="Cómo llegar" id="mapa">
            <MiniMap address={site.address} />
            <p className="t-small">
              Teléfono: <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            </p>
          </SidebarModule>
        </div>
      </div>
    </div>
  );
}
