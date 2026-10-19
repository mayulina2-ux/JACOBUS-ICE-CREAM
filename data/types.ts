export type FamilySlug = "fresa" | "pistacho" | "violeta" | "vainilla";

export type Family = {
  slug: FamilySlug;
  name: string;
  short: string;
  /** Nombre del token CSS con el pastel de la familia */
  colorVar: string;
  tagline: string;
  description: string;
};

export type Allergen = "leche" | "frutos secos" | "gluten" | "huevo" | "soja" | "sésamo";

export type VitrinaStatus = "queda-poco" | "agotado" | "recien-hecho" | "normal";

export type Flavor = {
  slug: string;
  name: string;
  /** El nombre partido en 2 líneas para el hero */
  nameLines: [string, string];
  family: FamilySlug;
  kind: "cremoso" | "sorbete";
  tagline: string;
  description: string;
  prices: { pequena: number; mediana: number; grande: number };
  kcal: number;
  allergens: Allergen[];
  vegan: boolean;
  sugarFree: boolean;
  glutenFree: boolean;
  isNew: boolean;
  weekly: boolean;
  votes: number;
  /** Posición del mes pasado dentro de su grupo (cremosos / sorbetes) */
  lastRank: number;
  since: string;
  origin: string;
  ingredients: string[];
  pairings: { name: string; why: string }[];
  /** null = no está hoy en la vitrina */
  vitrina: VitrinaStatus | null;
};

export type EventKind = "cata" | "taller" | "concierto";

export type JacobusEvent = {
  id: string;
  /** 0 = esta semana, 1 = la que viene */
  week: 0 | 1;
  /** 0 = lunes … 6 = domingo */
  weekday: number;
  time: string;
  kind: EventKind;
  title: string;
  description: string;
  price: string;
  spots: string;
  place: string;
};

export type NewsItem = {
  id: string;
  label: string;
  title: string;
  date: string;
  href: string;
};

export type Story = {
  id: string;
  tab: string;
  kicker: string;
  title: string;
  text: string;
  family: FamilySlug;
  /** Sabor cuya foto ilustra la historia */
  flavor: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

export type MediaItem = {
  id: string;
  kind: "receta" | "vídeo";
  title: string;
  duration: string;
  family: FamilySlug;
  /** Sabor cuya foto sirve de miniatura */
  flavor: string;
  href: string;
};
