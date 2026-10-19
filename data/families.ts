import type { Family, FamilySlug } from "./types";

export const families: Family[] = [
  {
    slug: "fresa",
    name: "Fresa y chicle",
    short: "Fresa",
    colorVar: "--family-fresa",
    tagline: "Rosa, dulce y sin pedir perdón.",
    description:
      "Fresas de temporada, frambuesa ácida y el chicle de toda la vida. La familia que pide el peque y luego se come el padre.",
  },
  {
    slug: "pistacho",
    name: "Menta y pistacho",
    short: "Pistacho",
    colorVar: "--family-pistacho",
    tagline: "Verde de verdad. Del que mancha.",
    description:
      "Pistacho tostado aquí, menta fresca y matcha. Nada de colorantes: si es verde, es porque lo es.",
  },
  {
    slug: "violeta",
    name: "Violeta y arándano",
    short: "Violeta",
    colorVar: "--family-violeta",
    tagline: "Raro. Morado. Te va a gustar.",
    description:
      "Arándanos, moras, caramelo de violeta y ube. La familia más rara de la vitrina y la que más fans tiene en la terraza.",
  },
  {
    slug: "vainilla",
    name: "Vainilla, turrón y mango",
    short: "Vainilla",
    colorVar: "--family-vainilla",
    tagline: "Lo de siempre, hecho como nunca.",
    description:
      "Vainilla en rama, turrón de Jijona, horchata y mango maduro. Los clásicos de la provincia con pocos ingredientes y mucho cariño.",
  },
];

export function getFamily(slug: FamilySlug | string): Family | undefined {
  return families.find((f) => f.slug === slug);
}

/** Devuelve `var(--family-x)` listo para inyectar como `--family-color`. */
export function familyColor(slug: FamilySlug): string {
  return `var(--family-${slug})`;
}
