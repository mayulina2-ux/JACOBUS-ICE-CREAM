import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button/Button";
import { Carousel } from "@/components/Carousel/Carousel";
import { FlavorCard } from "@/components/FlavorCard/FlavorCard";
import { FlavorPhoto } from "@/components/FlavorPhoto/FlavorPhoto";
import { SectionNav } from "@/components/SectionNav/SectionNav";
import { StatGrid } from "@/components/StatGrid/StatGrid";
import { Tabs } from "@/components/Tabs/Tabs";
import { Tag } from "@/components/Tag/Tag";
import { ThemedHero } from "@/components/ThemedHero/ThemedHero";
import { familyColor, getFamily } from "@/data/families";
import { flavors, formatPrice, getFlavor, ranking } from "@/data/flavors";
import { getPhoto } from "@/data/photos";
import { saboresNav } from "@/data/site";
import styles from "../sabores.module.css";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return flavors.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const flavor = getFlavor((await params).slug);
  return { title: flavor?.name ?? "Sabor", description: flavor?.tagline };
}

export default async function FlavorPage({ params }: Params) {
  const flavor = getFlavor((await params).slug);
  if (!flavor) notFound();
  const family = getFamily(flavor.family)!;
  const photo = getPhoto(flavor.slug);
  const color = familyColor(flavor.family);
  const rank = ranking(flavor.kind).find((f) => f.slug === flavor.slug)!.rank;
  const related = [
    ...flavors.filter((f) => f.family === flavor.family && f.slug !== flavor.slug),
    ...flavors.filter((f) => f.family !== flavor.family && f.kind === flavor.kind).slice(0, 3),
  ];
  const sizes = [
    { label: "Pequeña · 1 bola", price: flavor.prices.pequena },
    { label: "Mediana · 2 bolas", price: flavor.prices.mediana },
    { label: "Grande · 3 bolas", price: flavor.prices.grande },
  ];

  return (
    <>
      <SectionNav section="Sabores" items={saboresNav} />
      <ThemedHero
        color={color}
        watermark={family.short}
        art={
          <figure className={styles.photo}>
            <FlavorPhoto slug={flavor.slug} shape="round" priority />
            {photo && (
              <figcaption className={styles.credit}>
                Foto:{" "}
                <a href={photo.source} target="_blank" rel="noreferrer">
                  {photo.author} / Unsplash
                </a>
              </figcaption>
            )}
          </figure>
        }
      >
        <p className={styles.breadcrumb}>
          <Link href={`/familias/${family.slug}`}>{family.name}</Link>
          <span aria-hidden="true"> / </span>
          <span>{flavor.kind === "sorbete" ? "Sorbete" : "Cremoso"}</span>
        </p>
        <h1 className="t-display-xl">
          <span className={styles.line}>{flavor.nameLines[0]}</span>
          <span className={styles.line}>{flavor.nameLines[1]}</span>
          <span className="visually-hidden"> ({flavor.name})</span>
        </h1>
        <ul className={styles.tags} aria-label="Etiquetas">
          {flavor.isNew && (
            <li>
              <Tag tone="lime">Nuevo</Tag>
            </li>
          )}
          {flavor.glutenFree && (
            <li>
              <Tag tone="neutral">Sin gluten</Tag>
            </li>
          )}
          {flavor.vegan && (
            <li>
              <Tag tone="neutral">Vegano</Tag>
            </li>
          )}
          {flavor.sugarFree && (
            <li>
              <Tag tone="neutral">Sin azúcar</Tag>
            </li>
          )}
          <li>
            <Tag tone="neutral">
              Puesto {rank} en {flavor.kind === "sorbete" ? "sorbetes" : "cremosos"}
            </Tag>
          </li>
        </ul>
        <p className={styles.tagline}>{flavor.tagline}</p>
        <div className={styles.actions}>
          <Button href="/tienda">Pide ya</Button>
          <Button href="/ranking" variant="secondary">
            Ver ranking
          </Button>
        </div>
      </ThemedHero>

      <div className="container page">
        <StatGrid
          label={`Datos de ${flavor.name}`}
          stats={[
            { label: "Precio desde", value: formatPrice(flavor.prices.pequena), numeric: true },
            { label: "Kcal / 100 g", value: flavor.kcal, numeric: true },
            {
              label: "Alérgenos",
              value: flavor.allergens.length ? flavor.allergens.join(", ") : "Ninguno",
              tone: flavor.allergens.length ? "danger" : "default",
            },
            { label: "Origen", value: flavor.origin },
            { label: "En carta desde", value: flavor.since },
            { label: "Votos del mes", value: flavor.votes, numeric: true },
          ]}
        />

        <Tabs
          label={`Información de ${flavor.name}`}
          tabs={[
            {
              id: "ficha",
              label: "Ficha",
              content: (
                <div className={styles.ficha}>
                  <p className="prose">{flavor.description}</p>
                  <table className={styles.sizes}>
                    <caption className="t-label">Precios por tamaño</caption>
                    <tbody>
                      {sizes.map((s) => (
                        <tr key={s.label}>
                          <th scope="row">{s.label}</th>
                          <td className="t-price">{formatPrice(s.price)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ),
            },
            {
              id: "ingredientes",
              label: "Ingredientes",
              content: (
                <div className={styles.ingredients}>
                  <ol className={styles.ingredientList}>
                    {flavor.ingredients.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ol>
                  <p className="t-small t-muted">Ordenados de más a menos cantidad. Origen: {flavor.origin}.</p>
                  {flavor.allergens.length > 0 && (
                    <p className={styles.allergens}>
                      <strong>Contiene:</strong> {flavor.allergens.join(", ")}.
                    </p>
                  )}
                </div>
              ),
            },
            {
              id: "maridajes",
              label: "Maridajes",
              content: (
                <ul className={styles.pairings}>
                  {flavor.pairings.map((p) => {
                    const match = flavors.find((f) => f.name === p.name);
                    return (
                      <li key={p.name} className={styles.pairing}>
                        <h3 className="t-heading">
                          {match ? <Link href={`/sabores/${match.slug}`}>{p.name}</Link> : p.name}
                        </h3>
                        <p>{p.why}</p>
                      </li>
                    );
                  })}
                </ul>
              ),
            },
          ]}
        />

        <Carousel title="Si te gusta este, prueba…" more={{ label: "Toda la carta", href: "/carta" }}>
          {related.map((f) => (
            <FlavorCard key={f.slug} flavor={f} />
          ))}
        </Carousel>
      </div>
    </>
  );
}
