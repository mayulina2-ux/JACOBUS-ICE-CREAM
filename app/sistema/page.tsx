import type { Metadata } from "next";
import { Button } from "@/components/Button/Button";
import { Carousel } from "@/components/Carousel/Carousel";
import { CheckerStripe } from "@/components/CheckerStripe/CheckerStripe";
import { FlavorCard } from "@/components/FlavorCard/FlavorCard";
import { PromoBanner } from "@/components/PromoBanner/PromoBanner";
import { FlavorPhoto } from "@/components/FlavorPhoto/FlavorPhoto";
import { SidebarModule } from "@/components/SidebarModule/SidebarModule";
import { Skeleton } from "@/components/Skeleton/Skeleton";
import { StatGrid } from "@/components/StatGrid/StatGrid";
import { Tabs } from "@/components/Tabs/Tabs";
import { Tag } from "@/components/Tag/Tag";
import { ThemedHero } from "@/components/ThemedHero/ThemedHero";
import { familyColor, families } from "@/data/families";
import { flavors } from "@/data/flavors";
import { SampleTable } from "./SampleTable";
import styles from "./sistema.module.css";

export const metadata: Metadata = { title: "Sistema de diseño", robots: { index: false } };

const colorTokens = [
  { token: "--surface", light: "#FFF6E0", dark: "#15111C", use: "Fondo de página" },
  { token: "--surface-raised", light: "#FFFFFF", dark: "#221B2C", use: "Tarjetas y paneles" },
  { token: "--ink", light: "#15111C", dark: "#FFF6E0", use: "Texto, bordes, sombra dura" },
  { token: "--ink-muted", light: "#5A4F66", dark: "#C9BED6", use: "Texto secundario" },
  { token: "--on-color", light: "#15111C", dark: "#15111C", use: "Texto sobre neón o pastel" },
  { token: "--chrome", light: "#15111C", dark: "#221B2C", use: "Header y footer (ampliación)" },
  { token: "--neon-pink", light: "#FF2E93", dark: "#FF2E93", use: "Insignia. Solo relleno" },
  { token: "--neon-lime", light: "#C8FF1A", dark: "#C8FF1A", use: "Ofertas, nuevo, destacados" },
  { token: "--neon-cyan", light: "#00E5FF", dark: "#00E5FF", use: "Sorbetes y frío" },
  { token: "--pastel-pink", light: "#FFC9DF", dark: "#FFC9DF", use: "Familia fresa / chicle" },
  { token: "--pastel-mint", light: "#BFF3DC", dark: "#BFF3DC", use: "Familia menta / pistacho" },
  { token: "--pastel-lavender", light: "#D9CCFF", dark: "#D9CCFF", use: "Familia violeta / arándano" },
  { token: "--pastel-vanilla", light: "#FFE9A8", dark: "#FFE9A8", use: "Familia vainilla / turrón / mango" },
  { token: "--accent-text", light: "#C4006B", dark: "#FF5CAB", use: "Rosa como texto o enlace" },
  { token: "--focus-ring", light: "#15111C", dark: "#C8FF1A", use: "Anillo de foco" },
  { token: "--danger", light: "#B3001F", dark: "#FF6B7F", use: "Errores y alérgenos" },
];

const typeStyles = [
  { cls: "t-display-xl", name: "display-xl", spec: "Dela Gothic One · 72/68 · −0.02em", sample: "Hecho hoy." },
  { cls: "t-display", name: "display", spec: "Dela Gothic One · 48/48 · −0.01em", sample: "La carta" },
  { cls: "t-heading", name: "heading", spec: "Dela Gothic One · 28/32", sample: "Pistacho de verdad" },
  { cls: "t-body", name: "body", spec: "Bricolage Grotesque 400 · 16/24", sample: "Tostamos el pistacho cada mañana en el obrador. Del que mancha." },
  { cls: "t-body-strong", name: "body-strong", spec: "Bricolage Grotesque 700 · 16/24", sample: "Los martes, dos bolas por una." },
  { cls: "t-small", name: "small", spec: "Bricolage Grotesque 400 · 14/20", sample: "Contiene leche y frutos secos." },
  { cls: "t-label", name: "label", spec: "Space Mono 700 · 12/16 · 0.08em", sample: "Recién hecho" },
  { cls: "t-price", name: "price", spec: "Space Mono 700 · 20/24", sample: "3,90 €" },
];

const spaces = ["--space-1", "--space-2", "--space-3", "--space-4", "--space-6", "--space-8", "--space-10", "--space-16"];
const radii = ["--radius-sm", "--radius-lg", "--radius-pill"];

function Block({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section className={styles.block} aria-labelledby={id}>
      <h2 id={id} className={`t-heading ${styles.blockTitle}`}>
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function SistemaPage() {
  return (
    <div className="container page">
      <header className={styles.intro}>
        <p className="t-label t-accent">Uso interno</p>
        <h1 className="t-display-xl">Sistema Jacobus</h1>
        <p className="prose">
          El neón grita, el pastel acaricia. Aquí están todos los tokens y componentes de la web. Cambia el tema
          con el botón de la luna del header para ver el modo oscuro.
        </p>
      </header>

      <Block id="color" title="Color">
        <ul className={styles.swatches}>
          {colorTokens.map((c) => (
            <li key={c.token} className={styles.swatch}>
              <span className={styles.chip} style={{ background: `var(${c.token})` }} />
              <code className={styles.token}>{c.token}</code>
              <span className="t-small t-muted">
                {c.light} / {c.dark}
              </span>
              <span className="t-small">{c.use}</span>
            </li>
          ))}
        </ul>
        <h3 className="t-label">Color por familia (--family-*)</h3>
        <ul className={styles.families}>
          {families.map((f) => (
            <li key={f.slug} className={`${styles.family} on-color`} style={{ background: familyColor(f.slug) }}>
              <FlavorPhoto slug={flavors.find((x) => x.family === f.slug)!.slug} shape="mini" decorative />
              <span className="t-body-strong">{f.name}</span>
              <code className={styles.tokenOnColor}>--family-{f.slug}</code>
            </li>
          ))}
        </ul>
      </Block>

      <Block id="tipo" title="Tipografía">
        <ul className={styles.typeList}>
          {typeStyles.map((t) => (
            <li key={t.name} className={styles.typeRow}>
              <div className={styles.typeMeta}>
                <code className={styles.token}>{t.name}</code>
                <span className="t-small t-muted">{t.spec}</span>
              </div>
              <p className={t.cls}>{t.sample}</p>
            </li>
          ))}
        </ul>
      </Block>

      <Block id="forma" title="Forma">
        <div className={styles.shapeGrid}>
          <div>
            <h3 className="t-label">Espaciado</h3>
            <ul className={styles.spaces}>
              {spaces.map((s) => (
                <li key={s} className={styles.spaceRow}>
                  <span className={styles.spaceBar} style={{ width: `var(${s})` }} />
                  <code className={styles.token}>{s}</code>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="t-label">Radios</h3>
            <ul className={styles.radii}>
              {radii.map((r) => (
                <li key={r} className={styles.radius} style={{ borderRadius: `var(${r})` }}>
                  <code className={styles.token}>{r}</code>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="t-label">Sombra dura y bordes</h3>
            <div className={styles.shadowDemo}>
              <code className={styles.token}>--shadow-hard</code>
            </div>
          </div>
        </div>
        <h3 className="t-label">Damero (--checker-step 16px)</h3>
        <CheckerStripe />
      </Block>

      <Block id="botones" title="Botones y estados">
        <p className="t-small t-muted">Pasa el ratón (sube y la sombra crece), pulsa (se hunde) y navega con Tab (anillo de foco).</p>
        <div className={styles.row}>
          <Button>Pide ya</Button>
          <Button variant="secondary">Ver la carta</Button>
          <Button variant="ghost">Saber más</Button>
          <Button disabled>Agotado</Button>
          <Button size="sm">Pequeño</Button>
        </div>
      </Block>

      <Block id="chapas" title="Etiquetas y chapas">
        <div className={styles.row}>
          <Tag tone="lime">Nuevo</Tag>
          <Tag tone="lime">Queda poco</Tag>
          <Tag tone="cyan">Recién hecho</Tag>
          <Tag tone="off">Agotado</Tag>
          <Tag tone="pink">2x1</Tag>
          <Tag tone="neutral" shape="block">
            Sin gluten
          </Tag>
          <Tag tone="danger" shape="block">
            Frutos secos
          </Tag>
          <Tag tone="ink" shape="block">
            Sorbete
          </Tag>
        </div>
      </Block>

      <Block id="tarjetas" title="FlavorCard y Carousel">
        <Carousel title="Sabores de la semana" more={{ label: "Ver todos", href: "/sabores" }}>
          {flavors.slice(0, 6).map((f, i) => (
            <FlavorCard key={f.slug} flavor={f} rank={i === 0 ? 1 : undefined} />
          ))}
        </Carousel>
      </Block>

      <Block id="pestanas" title="Tabs">
        <Tabs
          label="Ejemplo de pestañas"
          tabs={[
            { id: "a", label: "Ficha", content: <p>Usa las flechas izquierda y derecha para moverte.</p> },
            { id: "b", label: "Ingredientes", content: <p>Inicio y Fin saltan a la primera y la última.</p> },
            { id: "c", label: "Maridajes", content: <p>La pestaña activa lleva el subrayado neón de 3 px.</p> },
          ]}
        />
      </Block>

      <Block id="datos" title="StatGrid y DataTable">
        <StatGrid
          label="Datos de ejemplo"
          stats={[
            { label: "Precio", value: "2,80 €", numeric: true },
            { label: "Kcal / 100 g", value: "236", numeric: true },
            { label: "Alérgenos", value: "Leche, frutos secos", tone: "danger" },
            { label: "Origen", value: "Ciudad Real" },
            { label: "En carta desde", value: "Marzo 2018" },
            { label: "Votos", value: "481", numeric: true },
          ]}
        />
        <SampleTable />
      </Block>

      <Block id="modulos" title="SidebarModule, PromoBanner y Skeleton">
        <div className={styles.modules}>
          <SidebarModule title="Lo último" id="demo-side">
            <p className="t-small">Un módulo lateral con cabecera en tinta.</p>
          </SidebarModule>
          <div className={styles.skeletons} role="group" aria-label="Cargando (ejemplo)">
            <Skeleton shape="round" />
            <Skeleton />
            <Skeleton shape="pill" />
            <Skeleton shape="block" />
          </div>
        </div>
        <PromoBanner
          kicker="Todos los martes"
          title="2x1 los martes"
          text="De 17:00 a 20:00. Trae a alguien o cómete las dos."
          cta={{ label: "Ver la carta", href: "/carta" }}
        />
      </Block>

      <Block id="hero" title="ThemedHero">
        <div className={styles.heroFrame}>
          <ThemedHero color={familyColor("violeta")} watermark="Violeta" art={<FlavorPhoto slug="ube" shape="round" />}>
            <p className="t-label">Familia</p>
            <p className="t-display">Violeta y arándano</p>
          </ThemedHero>
        </div>
      </Block>
    </div>
  );
}
