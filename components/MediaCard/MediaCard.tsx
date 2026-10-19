import Link from "next/link";
import type { Family, MediaItem } from "@/data/types";
import { familyColor } from "@/data/families";
import { flavorsByFamily, score, topVoted } from "@/data/flavors";
import { FlavorPhoto } from "../FlavorPhoto/FlavorPhoto";
import { IconPlay } from "../Icons/Icons";
import { Tag } from "../Tag/Tag";
import styles from "./MediaCard.module.css";

/** Tarjeta de receta o vídeo: foto del sabor con la duración en mono. */
export function MediaCard({ item }: { item: MediaItem }) {
  return (
    <article className={styles.card} style={{ ["--family-color" as string]: familyColor(item.family) }}>
      <div className={`${styles.thumb} on-color`}>
        <FlavorPhoto slug={item.flavor} shape="cover" decorative sizes="280px" />
        <span className={styles.kind}>
          <Tag tone="neutral" shape="block">
            {item.kind}
          </Tag>
        </span>
        {item.kind === "vídeo" && (
          <span className={styles.play} aria-hidden="true">
            <IconPlay />
          </span>
        )}
        <span className={styles.duration}>
          <span className="visually-hidden">Duración: </span>
          {item.duration}
        </span>
      </div>
      <h3 className={styles.title}>
        <Link href={item.href} className={styles.link}>
          {item.title}
        </Link>
      </h3>
    </article>
  );
}

/** Tarjeta de familia: el pastel entero, con la foto de su sabor estrella, nº de sabores y nota. */
export function FamilyCard({ family }: { family: Family }) {
  const list = flavorsByFamily(family.slug);
  // La foto de la familia es la de su sabor más votado
  const star = topVoted(list.length + 99).find((f) => f.family === family.slug)!;
  return (
    <article className={`${styles.card} ${styles.family} on-color`} style={{ ["--family-color" as string]: familyColor(family.slug) }}>
      <FlavorPhoto slug={star.slug} decorative />
      <h3 className={styles.familyName}>
        <Link href={`/familias/${family.slug}`} className={styles.link}>
          {family.name}
        </Link>
      </h3>
      <p className={styles.familyText}>{family.tagline}</p>
      <p className={styles.familyMeta}>
        <span>{list.length} sabores</span>
        <span>Nota {score(list)}</span>
      </p>
    </article>
  );
}
