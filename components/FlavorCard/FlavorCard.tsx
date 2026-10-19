import Link from "next/link";
import type { Flavor } from "@/data/types";
import { familyColor } from "@/data/families";
import { formatPrice } from "@/data/flavors";
import { FlavorPhoto } from "../FlavorPhoto/FlavorPhoto";
import { Tag } from "../Tag/Tag";
import styles from "./FlavorCard.module.css";

type Props = {
  flavor: Flavor;
  /** Posición en el ranking, si la tarjeta va en «Lo más votado» */
  rank?: number;
  headingLevel?: "h2" | "h3";
};

/** Tarjeta de sabor: lado blando (radius-lg), fondo pastel, borde y sombra dura. */
export function FlavorCard({ flavor, rank, headingLevel = "h3" }: Props) {
  const Heading = headingLevel;
  return (
    <article className={`${styles.card} on-color`} style={{ ["--family-color" as string]: familyColor(flavor.family) }}>
      <div className={styles.top}>
        {rank !== undefined ? (
          <span className={styles.rank} aria-label={`Puesto ${rank}`}>
            {rank}
          </span>
        ) : (
          <Tag tone="neutral" shape="block">
            {flavor.kind === "sorbete" ? "Sorbete" : "Cremoso"}
          </Tag>
        )}
        {flavor.isNew && <Tag tone="lime">Nuevo</Tag>}
      </div>
      <FlavorPhoto slug={flavor.slug} decorative />
      <Heading className={styles.name}>
        <Link href={`/sabores/${flavor.slug}`} className={styles.link}>
          {flavor.name}
        </Link>
      </Heading>
      <p className={styles.tagline}>{flavor.tagline}</p>
      <p className={styles.meta}>
        <span className={styles.price}>
          <span className="visually-hidden">Desde </span>
          {formatPrice(flavor.prices.pequena)}
        </span>
        <span className={styles.votes}>{flavor.votes} votos</span>
      </p>
    </article>
  );
}
