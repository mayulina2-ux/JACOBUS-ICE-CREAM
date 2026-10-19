import type { Flavor, FamilySlug } from "./types";

const CLASICO = { pequena: 2.8, mediana: 3.9, grande: 5.2 };
const PREMIUM = { pequena: 3.2, mediana: 4.4, grande: 5.8 };
const SORBETE = { pequena: 2.6, mediana: 3.6, grande: 4.8 };

export const flavors: Flavor[] = [
  /* ---------- Fresa y chicle ---------- */
  {
    slug: "fresa-de-huelva",
    name: "Fresa de Huelva",
    nameLines: ["Fresa de", "Huelva"],
    family: "fresa",
    kind: "cremoso",
    tagline: "Fresa que sabe a fresa. Ya era hora.",
    description:
      "Fresas enteras machacadas a mano con nata fresca. Quedan trocitos, y es a propósito.",
    prices: CLASICO,
    kcal: 182,
    allergens: ["leche"],
    vegan: false,
    sugarFree: false,
    glutenFree: true,
    isNew: false,
    weekly: true,
    votes: 342,
    lastRank: 4,
    since: "Junio 2019",
    origin: "Fresas de Moguer (Huelva), nata de Villena",
    ingredients: ["Fresa (45 %)", "Leche entera", "Nata", "Azúcar de caña", "Zumo de limón"],
    pairings: [
      { name: "Vainilla en rama", why: "El dúo de toda la vida. Funciona." },
      { name: "Chocolate negro 70 %", why: "El amargo le baja los humos al dulce." },
    ],
    vitrina: "normal",
  },
  {
    slug: "chicle-punk",
    name: "Chicle Punk",
    nameLines: ["Chicle", "Punk"],
    family: "fresa",
    kind: "cremoso",
    tagline: "Rosa chillón. Sabe a recreo.",
    description:
      "El sabor a chicle de bola de los quioscos, pero sin colorantes raros. El rosa sale de la remolacha.",
    prices: CLASICO,
    kcal: 205,
    allergens: ["leche"],
    vegan: false,
    sugarFree: false,
    glutenFree: true,
    isNew: false,
    weekly: false,
    votes: 289,
    lastRank: 5,
    since: "Agosto 2020",
    origin: "Leche de cabra de la Vega Baja, remolacha de Elche",
    ingredients: ["Leche entera", "Nata", "Azúcar", "Aroma natural de tutti frutti", "Remolacha en polvo"],
    pairings: [
      { name: "Limón y hierbabuena", why: "Para resetear la boca entre bola y bola." },
      { name: "Fresa de Huelva", why: "Rosa sobre rosa. Sin miedo." },
    ],
    vitrina: "queda-poco",
  },
  {
    slug: "frambuesa",
    name: "Frambuesa",
    nameLines: ["Frambue-", "sa"],
    family: "fresa",
    kind: "sorbete",
    tagline: "Ácida. Te despierta.",
    description: "Sorbete de frambuesa con pepitas incluidas. Sin leche, sin nata, sin rodeos.",
    prices: SORBETE,
    kcal: 112,
    allergens: [],
    vegan: true,
    sugarFree: false,
    glutenFree: true,
    isNew: false,
    weekly: false,
    votes: 198,
    lastRank: 3,
    since: "Mayo 2021",
    origin: "Frambuesa de Asturias",
    ingredients: ["Frambuesa (60 %)", "Agua", "Azúcar de caña", "Zumo de limón"],
    pairings: [
      { name: "Vainilla en rama", why: "Ácido y cremoso, la pareja perfecta." },
      { name: "Chocolate negro 70 %", why: "Bombón de frambuesa, pero en tarrina." },
    ],
    vitrina: "recien-hecho",
  },
  {
    slug: "yogur-y-fresa",
    name: "Yogur y fresa",
    nameLines: ["Yogur y", "fresa"],
    family: "fresa",
    kind: "cremoso",
    tagline: "Desayuno, pero en bola.",
    description: "Yogur griego con vetas de mermelada de fresa casera. Fresquito y nada empalagoso.",
    prices: CLASICO,
    kcal: 168,
    allergens: ["leche"],
    vegan: false,
    sugarFree: false,
    glutenFree: true,
    isNew: false,
    weekly: false,
    votes: 156,
    lastRank: 9,
    since: "Abril 2022",
    origin: "Yogur de Petrer, fresas de Moguer",
    ingredients: ["Yogur griego", "Mermelada de fresa", "Nata", "Azúcar", "Miel de romero"],
    pairings: [
      { name: "Arándano", why: "Bol de frutos rojos en versión helada." },
      { name: "Mango", why: "Sabe a batido de verano." },
    ],
    vitrina: "normal",
  },

  /* ---------- Menta y pistacho ---------- */
  {
    slug: "pistacho",
    name: "Pistacho de verdad",
    nameLines: ["Pistacho", "de verdad"],
    family: "pistacho",
    kind: "cremoso",
    tagline: "Pistacho de verdad. Del que mancha.",
    description:
      "Pistacho tostado en el obrador cada mañana y molido en pasta. Es verde oliva, no verde fosforito. Así es como es.",
    prices: PREMIUM,
    kcal: 236,
    allergens: ["leche", "frutos secos"],
    vegan: false,
    sugarFree: false,
    glutenFree: true,
    isNew: false,
    weekly: true,
    votes: 481,
    lastRank: 1,
    since: "Marzo 2018",
    origin: "Pistacho de Ciudad Real, leche de Villena",
    ingredients: ["Pasta de pistacho (18 %)", "Leche entera", "Nata", "Azúcar", "Sal en escamas"],
    pairings: [
      { name: "Turrón de Jijona", why: "Frutos secos con frutos secos. Navidad en agosto." },
      { name: "Frambuesa", why: "Rojo y verde, como un semáforo bueno." },
    ],
    vitrina: "queda-poco",
  },
  {
    slug: "menta-chocolate",
    name: "Menta con chocolate",
    nameLines: ["Menta con", "chocolate"],
    family: "pistacho",
    kind: "cremoso",
    tagline: "O lo amas o lo odias. Aquí lo amamos.",
    description:
      "Menta fresca infusionada en la leche toda la noche y virutas de chocolate negro. Sabe a planta, no a pasta de dientes.",
    prices: CLASICO,
    kcal: 214,
    allergens: ["leche", "soja"],
    vegan: false,
    sugarFree: false,
    glutenFree: true,
    isNew: false,
    weekly: false,
    votes: 377,
    lastRank: 2,
    since: "Marzo 2018",
    origin: "Menta del huerto de Monóvar, cacao de Ecuador",
    ingredients: ["Leche entera", "Nata", "Menta fresca", "Chocolate negro 70 %", "Azúcar"],
    pairings: [
      { name: "Chocolate negro 70 %", why: "Doble chocolate, menta de bonus." },
      { name: "Vainilla en rama", why: "Para quien aún no se atreve solo." },
    ],
    vitrina: "agotado",
  },
  {
    slug: "hierbabuena-lima",
    name: "Hierbabuena y lima",
    nameLines: ["Hierbabuena", "y lima"],
    family: "pistacho",
    kind: "sorbete",
    tagline: "Un mojito sin resaca.",
    description:
      "Sorbete de lima con hierbabuena picada al momento. El que pides cuando a las cinco de la tarde hace 38 grados.",
    prices: SORBETE,
    kcal: 98,
    allergens: [],
    vegan: true,
    sugarFree: false,
    glutenFree: true,
    isNew: false,
    weekly: true,
    votes: 264,
    lastRank: 1,
    since: "Julio 2019",
    origin: "Limas de Callosa d'en Sarrià",
    ingredients: ["Agua", "Zumo de lima (25 %)", "Azúcar de caña", "Hierbabuena fresca", "Ralladura de lima"],
    pairings: [
      { name: "Mango", why: "Tropical total." },
      { name: "Chicle Punk", why: "Limpia el paladar después del rosa." },
    ],
    vitrina: "recien-hecho",
  },
  {
    slug: "matcha",
    name: "Té matcha",
    nameLines: ["Té", "matcha"],
    family: "pistacho",
    kind: "cremoso",
    tagline: "Amargo, verde y muy serio.",
    description: "Matcha ceremonial batido con leche entera. Poco azúcar para que mande el té.",
    prices: PREMIUM,
    kcal: 176,
    allergens: ["leche"],
    vegan: false,
    sugarFree: false,
    glutenFree: true,
    isNew: false,
    weekly: false,
    votes: 121,
    lastRank: 11,
    since: "Septiembre 2023",
    origin: "Matcha de Uji (Japón)",
    ingredients: ["Leche entera", "Nata", "Té matcha (3 %)", "Azúcar"],
    pairings: [
      { name: "Ube", why: "Verde y morado. Muy de Instagram, pero rico." },
      { name: "Vainilla en rama", why: "Suaviza el amargor." },
    ],
    vitrina: null,
  },

  /* ---------- Violeta y arándano ---------- */
  {
    slug: "arandano",
    name: "Arándano",
    nameLines: ["Arán-", "dano"],
    family: "violeta",
    kind: "sorbete",
    tagline: "Morado de verdad. Sin trampa.",
    description: "Sorbete de arándano azul con un punto de limón. Deja la lengua morada, avisado estás.",
    prices: SORBETE,
    kcal: 104,
    allergens: [],
    vegan: true,
    sugarFree: true,
    glutenFree: true,
    isNew: false,
    weekly: false,
    votes: 187,
    lastRank: 2,
    since: "Junio 2020",
    origin: "Arándanos de Huelva, endulzado con eritritol",
    ingredients: ["Arándano (55 %)", "Agua", "Eritritol", "Zumo de limón"],
    pairings: [
      { name: "Yogur y fresa", why: "Frutos rojos con yogur. Lo de siempre, pero frío." },
      { name: "Vainilla en rama", why: "Morado y blanco, como un cartel." },
    ],
    vitrina: "normal",
  },
  {
    slug: "violeta",
    name: "Caramelo de violeta",
    nameLines: ["Caramelo", "de violeta"],
    family: "violeta",
    kind: "cremoso",
    tagline: "El caramelo de tu abuela, en bola.",
    description: "Base de nata con caramelos de violeta machacados. Floral y dulce. Raro y adictivo.",
    prices: CLASICO,
    kcal: 198,
    allergens: ["leche"],
    vegan: false,
    sugarFree: false,
    glutenFree: true,
    isNew: false,
    weekly: true,
    votes: 233,
    lastRank: 8,
    since: "Octubre 2021",
    origin: "Caramelos de violeta de Madrid",
    ingredients: ["Leche entera", "Nata", "Caramelo de violeta (8 %)", "Azúcar"],
    pairings: [
      { name: "Chocolate negro 70 %", why: "Bombón de violeta. Muy de antes." },
      { name: "Frambuesa", why: "Floral y ácido, se dan la mano." },
    ],
    vitrina: "normal",
  },
  {
    slug: "mora-y-yogur",
    name: "Mora y yogur",
    nameLines: ["Mora y", "yogur"],
    family: "violeta",
    kind: "cremoso",
    tagline: "De zarza a tarrina.",
    description: "Yogur cremoso con moras silvestres en vetas. Sale menos dulce de lo que parece.",
    prices: CLASICO,
    kcal: 164,
    allergens: ["leche"],
    vegan: false,
    sugarFree: true,
    glutenFree: true,
    isNew: false,
    weekly: false,
    votes: 142,
    lastRank: 10,
    since: "Julio 2022",
    origin: "Moras de la Sierra de Salinas",
    ingredients: ["Yogur natural", "Moras (20 %)", "Nata", "Eritritol"],
    pairings: [
      { name: "Turrón de Jijona", why: "Lo cremoso con lo crujiente." },
      { name: "Mango", why: "Contraste de colores y de acidez." },
    ],
    vitrina: null,
  },
  {
    slug: "ube",
    name: "Ube",
    nameLines: ["Ube", "morado"],
    family: "violeta",
    kind: "cremoso",
    tagline: "Batata morada. Confía.",
    description:
      "El ñame morado de Filipinas con leche de coco. Sabe a vainilla con frutos secos y es morado sin pedir permiso.",
    prices: PREMIUM,
    kcal: 188,
    allergens: [],
    vegan: true,
    sugarFree: false,
    glutenFree: true,
    isNew: true,
    weekly: true,
    votes: 214,
    lastRank: 12,
    since: "Octubre 2026",
    origin: "Ube de Filipinas, coco de Sri Lanka",
    ingredients: ["Leche de coco", "Pasta de ube (22 %)", "Azúcar de caña", "Sal"],
    pairings: [
      { name: "Té matcha", why: "Verde y morado: la vitrina más guapa." },
      { name: "Mango", why: "Tropical y cremoso." },
    ],
    vitrina: "recien-hecho",
  },

  /* ---------- Vainilla, turrón y mango ---------- */
  {
    slug: "vainilla",
    name: "Vainilla en rama",
    nameLines: ["Vainilla", "en rama"],
    family: "vainilla",
    kind: "cremoso",
    tagline: "Con puntitos negros. Eso es la vainilla.",
    description:
      "Vainas de Madagascar abiertas a mano e infusionadas 24 horas. El sabor que pide todo el que dice «yo, lo normal».",
    prices: CLASICO,
    kcal: 207,
    allergens: ["leche", "huevo"],
    vegan: false,
    sugarFree: false,
    glutenFree: true,
    isNew: false,
    weekly: false,
    votes: 318,
    lastRank: 6,
    since: "Marzo 2018",
    origin: "Vainilla de Madagascar, huevos camperos de Novelda",
    ingredients: ["Leche entera", "Nata", "Yema de huevo", "Azúcar", "Vaina de vainilla"],
    pairings: [
      { name: "Frambuesa", why: "El clásico de las heladerías italianas." },
      { name: "Chicle Punk", why: "Para pedir algo rosa sin que te miren." },
    ],
    vitrina: "normal",
  },
  {
    slug: "turron-de-jijona",
    name: "Turrón de Jijona",
    nameLines: ["Turrón de", "Jijona"],
    family: "vainilla",
    kind: "cremoso",
    tagline: "De aquí al lado. Literal.",
    description:
      "Turrón blando de Jijona con almendra marcona tostada. A 40 minutos de la tienda, y se nota.",
    prices: PREMIUM,
    kcal: 248,
    allergens: ["leche", "frutos secos", "huevo"],
    vegan: false,
    sugarFree: false,
    glutenFree: true,
    isNew: false,
    weekly: true,
    votes: 402,
    lastRank: 3,
    since: "Marzo 2018",
    origin: "Turrón IGP de Jijona, almendra marcona de Alicante",
    ingredients: ["Leche entera", "Turrón de Jijona (22 %)", "Nata", "Almendra tostada", "Miel"],
    pairings: [
      { name: "Pistacho de verdad", why: "Los dos pesos pesados juntos." },
      { name: "Horchata de chufa", why: "Mediterráneo de pies a cabeza." },
    ],
    vitrina: "normal",
  },
  {
    slug: "mango",
    name: "Mango",
    nameLines: ["Man-", "go"],
    family: "vainilla",
    kind: "sorbete",
    tagline: "Mango maduro. Nada más.",
    description: "Sorbete de mango de Málaga, solo fruta, agua y un pelín de azúcar. Sabe a agosto.",
    prices: SORBETE,
    kcal: 118,
    allergens: [],
    vegan: true,
    sugarFree: false,
    glutenFree: true,
    isNew: false,
    weekly: false,
    votes: 176,
    lastRank: 4,
    since: "Junio 2019",
    origin: "Mango de la Axarquía (Málaga)",
    ingredients: ["Mango (65 %)", "Agua", "Azúcar de caña", "Zumo de lima"],
    pairings: [
      { name: "Hierbabuena y lima", why: "Cóctel tropical sin alcohol." },
      { name: "Ube", why: "Morado y amarillo. Muy punk." },
    ],
    vitrina: "agotado",
  },
  {
    slug: "horchata",
    name: "Horchata de chufa",
    nameLines: ["Horchata", "de chufa"],
    family: "vainilla",
    kind: "cremoso",
    tagline: "Sin leche. Con chufa de Alboraia.",
    description:
      "Horchata recién hecha y mantecada en la máquina. Vegana sin proponérselo, como debe ser.",
    prices: CLASICO,
    kcal: 172,
    allergens: [],
    vegan: true,
    sugarFree: false,
    glutenFree: true,
    isNew: true,
    weekly: false,
    votes: 251,
    lastRank: 7,
    since: "Septiembre 2026",
    origin: "Chufa DO de Valencia",
    ingredients: ["Chufa (30 %)", "Agua", "Azúcar de caña", "Canela en rama", "Piel de limón"],
    pairings: [
      { name: "Turrón de Jijona", why: "El combo de la terreta." },
      { name: "Mango", why: "Fresco y dulce, para el chiringuito." },
    ],
    vitrina: "queda-poco",
  },
];

export function getFlavor(slug: string): Flavor | undefined {
  return flavors.find((f) => f.slug === slug);
}

export function flavorsByFamily(family: FamilySlug): Flavor[] {
  return flavors.filter((f) => f.family === family);
}

export type RankedFlavor = Flavor & { rank: number; trend: "up" | "down" | "same"; delta: number };

/** Clasificación del mes por votos dentro de cada grupo. */
export function ranking(kind: Flavor["kind"]): RankedFlavor[] {
  return flavors
    .filter((f) => f.kind === kind)
    .sort((a, b) => b.votes - a.votes)
    .map((f, i) => {
      const rank = i + 1;
      const delta = f.lastRank - rank;
      return { ...f, rank, delta, trend: delta > 0 ? "up" : delta < 0 ? "down" : "same" };
    });
}

/** Cuántos de cada grupo entran en la vitrina del mes que viene. */
export const VITRINA_CUT = { cremoso: 6, sorbete: 2 } as const;

export function topVoted(n: number): Flavor[] {
  return [...flavors].sort((a, b) => b.votes - a.votes).slice(0, n);
}

export function averageVotes(list: Flavor[]): number {
  if (list.length === 0) return 0;
  return Math.round(list.reduce((s, f) => s + f.votes, 0) / list.length);
}

/** «Nota» media de 0 a 10 a partir de los votos, para la cabecera de familia. */
export function score(list: Flavor[]): string {
  const max = Math.max(...flavors.map((f) => f.votes));
  const avg = averageVotes(list);
  return ((avg / max) * 10).toFixed(1).replace(".", ",");
}

export function formatPrice(n: number): string {
  return n.toFixed(2).replace(".", ",") + " €";
}
