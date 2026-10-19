import Image from "next/image";
import { getPhoto } from "@/data/photos";
import { Scoop } from "../Scoop/Scoop";
import styles from "./FlavorPhoto.module.css";

type Props = {
  /** Slug del sabor */
  slug: string;
  /**
   * card: rectángulo 4:3 dentro de tarjetas.
   * round: círculo con forma de bola, para héroes.
   * mini: círculo pequeño (listas, chips).
   * cover: rellena el contenedor padre (que debe estar posicionado).
   */
  shape?: "card" | "round" | "mini" | "cover";
  /** Pista de ancho para que next/image sirva el tamaño justo */
  sizes?: string;
  priority?: boolean;
  /** Si es decorativa (el texto de al lado ya dice qué es), alt vacío */
  decorative?: boolean;
  className?: string;
};

/** Foto del sabor. Si un sabor aún no tiene foto, cae a la bola ilustrada. */
export function FlavorPhoto({ slug, shape = "card", sizes, priority, decorative, className }: Props) {
  const photo = getPhoto(slug);
  const cls = [styles.frame, styles[shape], className].filter(Boolean).join(" ");

  if (!photo) {
    return (
      <span className={`${cls} ${styles.fallback}`}>
        <Scoop size={shape === "mini" ? "mini" : "card"} />
      </span>
    );
  }

  const defaultSizes =
    shape === "mini" ? "48px" : shape === "round" ? "(min-width: 768px) 340px, 50vw" : "(min-width: 768px) 280px, 70vw";

  return (
    <span className={cls}>
      <Image
        src={photo.src}
        alt={decorative ? "" : photo.alt}
        fill
        sizes={sizes ?? defaultSizes}
        priority={priority}
        className={styles.img}
      />
    </span>
  );
}
