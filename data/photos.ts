/**
 * Fotos de los sabores. Todas son de Unsplash con la Licencia de Unsplash
 * (uso comercial gratuito, sin obligación de atribución; aun así las acreditamos).
 * Son fotos provisionales: cuando haya fotos propias, basta con sustituir el
 * archivo en /public/helados/<slug>.jpg y actualizar el crédito.
 */
export type Photo = {
  /** Ruta pública de la imagen */
  src: string;
  /** Texto alternativo en castellano */
  alt: string;
  author: string;
  /** Página de la foto en Unsplash */
  source: string;
  /** Unsplash ID original, para volver a descargarla */
  unsplashId: string;
};

const U = "https://unsplash.com/es/fotos/";

export const photos: Record<string, Photo> = {
  "fresa-de-huelva": {
    src: "/helados/fresa-de-huelva.jpg",
    alt: "Tres cucuruchos de helado de fresa en un plato con fresas frescas",
    author: "Svitlana",
    source: U + "kg7gcQtp4N8",
    unsplashId: "1633933358116-a27b902fad35",
  },
  "chicle-punk": {
    src: "/helados/chicle-punk.jpg",
    alt: "Cucurucho con helado rosa sobre un fondo rosa",
    author: "Orissa Humes",
    source: U + "_gN4PnJ3ygg",
    unsplashId: "1705103654884-cbd03d95761a",
  },
  frambuesa: {
    src: "/helados/frambuesa.jpg",
    alt: "Bola de sorbete rosa intenso en un cuenco blanco",
    author: "Shelley Johnson",
    source: U + "UR9HktuHHtk",
    unsplashId: "1783803522392-cc9503471c7d",
  },
  "yogur-y-fresa": {
    src: "/helados/yogur-y-fresa.jpg",
    alt: "Copa con bolas de helado rosado, hojas de menta y fresas",
    author: "Elena Oparina",
    source: U + "MN6bVE7X5mE",
    unsplashId: "1566746878854-d4f4fbd11941",
  },
  pistacho: {
    src: "/helados/pistacho.jpg",
    alt: "Helado de pistacho en un cuenco de cristal con trocitos de pistacho",
    author: "Jason Richard",
    source: U + "PnIHvHZsH4Q",
    unsplashId: "1603736029103-dafad0eb0906",
  },
  "menta-chocolate": {
    src: "/helados/menta-chocolate.jpg",
    alt: "Cucurucho con una bola verde de menta sobre una de chocolate",
    author: "Rosa Rafael",
    source: U + "Nag3E3yzygU",
    unsplashId: "1592864042311-a3babede6944",
  },
  "hierbabuena-lima": {
    src: "/helados/hierbabuena-lima.jpg",
    alt: "Bolas de sorbete verde claro en un cucurucho de gofre",
    author: "Crystal Stone",
    source: U + "n7nXEm8Enk0",
    unsplashId: "1782861162217-a69b974cacb6",
  },
  matcha: {
    src: "/helados/matcha.jpg",
    alt: "Mano sosteniendo un cucurucho de helado suave de té matcha",
    author: "alizy xiao",
    source: U + "wi5Jc88K2Uo",
    unsplashId: "1763968208727-8e8c6d6e13b0",
  },
  arandano: {
    src: "/helados/arandano.jpg",
    alt: "Cuenco de helado con vetas moradas y arándanos frescos",
    author: "Elena Leya",
    source: U + "DOxN-a4fqBQ",
    unsplashId: "1684135347630-82c37ed5c7b8",
  },
  violeta: {
    src: "/helados/violeta.jpg",
    alt: "Mano sosteniendo un helado suave de color lavanda en un jardín",
    author: "Sophia Novita Angkadjaja",
    source: U + "CtqE2mUmEks",
    unsplashId: "1791002890282-86821fd3e654",
  },
  "mora-y-yogur": {
    src: "/helados/mora-y-yogur.jpg",
    alt: "Vaso de helado morado con moras y arándanos por encima",
    author: "Nadine Primeau",
    source: U + "xLskrI8Dw68",
    unsplashId: "1627222295124-f8b3fc09e47f",
  },
  ube: {
    src: "/helados/ube.jpg",
    alt: "Cuchara con una bola de helado morado sobre fondo morado",
    author: "Alexander Grey",
    source: U + "qtYxt46As60",
    unsplashId: "1516559828984-fb3b99548b21",
  },
  vainilla: {
    src: "/helados/vainilla.jpg",
    alt: "Cuchara sacando una porción de helado de vainilla de la cubeta",
    author: "Leighann Blackwood",
    source: U + "cQ2kQqpEB8",
    unsplashId: "1628815870980-f416105d89b3",
  },
  "turron-de-jijona": {
    src: "/helados/turron-de-jijona.jpg",
    alt: "Bola de helado color turrón con trocitos de almendra junto a unos cucuruchos",
    author: "BINYOUSSIF mohammad ali",
    source: U + "CdP2h2Or8Pc",
    unsplashId: "1689076758310-92b693fe6b8b",
  },
  mango: {
    src: "/helados/mango.jpg",
    alt: "Bolas de sorbete de mango en un cuenco blanco",
    author: "Prchi Palwe",
    source: U + "c33yxLXmvCs",
    unsplashId: "1591677445540-08028eeb3021",
  },
  horchata: {
    src: "/helados/horchata.jpg",
    alt: "Taza blanca con helado cremoso color crema y una cucharilla",
    author: "Takuya Nagaoka",
    source: U + "jeWQHA0EGpQ",
    unsplashId: "1599900134790-6d22e389173a",
  },
};

export function getPhoto(slug: string): Photo | undefined {
  return photos[slug];
}
