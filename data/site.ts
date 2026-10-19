export const site = {
  name: "Jacobus Ice Cream",
  address: "C/ Jardines, 12 · 03600 Elda (Alicante)",
  phone: "965 00 00 00",
  email: "hola@jacobus.example",
};

export const mainNav = [
  { label: "Sabores", href: "/sabores" },
  { label: "Carta", href: "/carta" },
  { label: "Ranking", href: "/ranking" },
  { label: "Eventos", href: "/eventos" },
  { label: "Tienda", href: "/tienda" },
  { label: "Nosotros", href: "/nosotros" },
];

/** Subnavegación de la sección SABORES (carta, ranking y familias). */
export const saboresNav = [
  { label: "Todos", href: "/sabores" },
  { label: "Carta", href: "/carta" },
  { label: "Ranking", href: "/ranking" },
  { label: "Fresa", href: "/familias/fresa" },
  { label: "Pistacho", href: "/familias/pistacho" },
  { label: "Violeta", href: "/familias/violeta" },
  { label: "Vainilla", href: "/familias/vainilla" },
];

/** Menú de cuadrícula: todo lo que hay en la web, a un clic. */
export const gridMenu = [
  { label: "Vitrina de hoy", text: "Lo que hay ahora mismo", href: "/#vitrina" },
  { label: "Familias", text: "Fresa, pistacho, violeta, vainilla", href: "/sabores" },
  { label: "Carta completa", text: "Precios, kcal y alérgenos", href: "/carta" },
  { label: "Ranking", text: "Los más votados del mes", href: "/ranking" },
  { label: "Eventos", text: "Catas, talleres y punk", href: "/eventos" },
  { label: "Tienda", text: "Tarrinas para llevar", href: "/tienda" },
  { label: "Nosotros", text: "Quiénes somos y dónde", href: "/nosotros" },
  { label: "Sistema", text: "Tokens y componentes", href: "/sistema" },
];

export const socials = [
  { label: "Instagram", handle: "@jacobus.elda", href: "https://instagram.com/" },
  { label: "TikTok", handle: "@jacobus.elda", href: "https://tiktok.com/" },
  { label: "YouTube", handle: "Jacobus TV", href: "https://youtube.com/" },
  { label: "Spotify", handle: "Playlist terraza", href: "https://spotify.com/" },
];

/** Horario por día de la semana (0 = lunes). */
export const hours: { day: string; open: string | null }[] = [
  { day: "Lunes", open: null },
  { day: "Martes", open: "16:00 – 23:00" },
  { day: "Miércoles", open: "16:00 – 23:00" },
  { day: "Jueves", open: "16:00 – 00:00" },
  { day: "Viernes", open: "16:00 – 01:00" },
  { day: "Sábado", open: "12:00 – 01:00" },
  { day: "Domingo", open: "12:00 – 23:00" },
];

export const footerColumns = [
  {
    title: "La heladería",
    links: [
      { label: "Nosotros", href: "/nosotros" },
      { label: "El obrador", href: "/nosotros#obrador" },
      { label: "Trabaja aquí", href: "/nosotros#trabajo" },
    ],
  },
  {
    title: "Carta",
    links: [
      { label: "Todos los sabores", href: "/sabores" },
      { label: "Carta y alérgenos", href: "/carta" },
      { label: "Ranking del mes", href: "/ranking" },
    ],
  },
  {
    title: "Eventos",
    links: [
      { label: "Agenda", href: "/eventos" },
      { label: "Talleres", href: "/eventos?tipo=taller" },
      { label: "Conciertos", href: "/eventos?tipo=concierto" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "Cómo llegar", href: "/nosotros#mapa" },
      { label: "Pedidos para llevar", href: "/tienda" },
      { label: "Escríbenos", href: "mailto:hola@jacobus.example" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Aviso legal", href: "/nosotros#legal" },
      { label: "Privacidad", href: "/nosotros#legal" },
      { label: "Cookies", href: "/nosotros#legal" },
    ],
  },
];
