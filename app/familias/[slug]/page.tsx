import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FlavorCard } from "@/components/FlavorCard/FlavorCard";
import { FlavorTable } from "@/components/FlavorTable/FlavorTable";
import { FlavorPhoto } from "@/components/FlavorPhoto/FlavorPhoto";
import { SectionNav } from "@/components/SectionNav/SectionNav";
import { Tabs } from "@/components/Tabs/Tabs";
import { Tag } from "@/components/Tag/Tag";
import { ThemedHero } from "@/components/ThemedHero/ThemedHero";
import { familyColor, families, getFamily } from "@/data/families";
import { flavorsByFamily, score } from "@/data/flavors";
import { saboresNav } from "@/data/site";
import styles from "../familias.module.css";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return families.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const family = getFamily((await params).slug);
  return { title: family ? `Familia ${family.name}` : "Familia" };
}

export default async function FamilyPage({ params }: Params) {
  const family = getFamily((await params).slug);
  if (!family) notFound();
  const list = flavorsByFamily(family.slug);
  const color = familyColor(family.slug);
  const sorbetes = list.filter((f) => f.kind === "sorbete").length;
  // La cabecera lleva la foto del sabor más votado de la familia
  const star = [...list].sort((a, b) => b.votes - a.votes)[0];

  return (
    <>
      <SectionNav section="Sabores" items={saboresNav} />
      <ThemedHero
        color={color}
        watermark={family.short}
        art={<FlavorPhoto slug={star.slug} shape="round" priority />}
      >
        <p className="t-label">Familia de sabor</p>
        <h1 className="t-display">{family.name}</h1>
        <p className={styles.tagline}>{family.tagline}</p>
        <dl className={styles.facts}>
          <div className={styles.fact}>
            <dt className="t-label">Sabores</dt>
            <dd className={styles.factValue}>{list.length}</dd>
          </div>
          <div className={styles.fact}>
            <dt className="t-label">Nota media</dt>
            <dd className={styles.factValue}>{score(list)}</dd>
          </div>
          <div className={styles.fact}>
            <dt className="t-label">Sorbetes</dt>
            <dd className={styles.factValue}>{sorbetes}</dd>
          </div>
        </dl>
      </ThemedHero>

      <div className="container page">
        <Tabs
          label={`Secciones de la familia ${family.name}`}
          tabs={[
            {
              id: "tabla",
              label: "Sabores",
              content: <FlavorTable rows={list} caption={`Sabores de la familia ${family.name}`} hideCaption />,
            },
            {
              id: "tarjetas",
              label: "Vitrina",
              content: (
                <ul className={styles.grid}>
                  {list.map((f) => (
                    <li key={f.slug}>
                      <FlavorCard flavor={f} />
                    </li>
                  ))}
                </ul>
              ),
            },
            {
              id: "historia",
              label: "La familia",
              content: (
                <div className="prose">
                  <p>{family.description}</p>
                  <p className={styles.tags}>
                    {list.some((f) => f.vegan) && <Tag tone="neutral">Hay opción vegana</Tag>}
                    {list.some((f) => f.sugarFree) && <Tag tone="neutral">Hay opción sin azúcar</Tag>}
                    {list.every((f) => f.glutenFree) && <Tag tone="neutral">Todo sin gluten</Tag>}
                  </p>
                </div>
              ),
            },
          ]}
        />
      </div>
    </>
  );
}
