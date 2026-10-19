import type { MediaItem, NewsItem, Story } from "./types";

export const stories: Story[] = [
  {
    id: "s1",
    tab: "Nuevo: Ube",
    kicker: "Sabor nuevo",
    title: "Morado. Raro. Riquísimo.",
    text: "Llega el ube: batata morada filipina con leche de coco. Vegano y sin gluten. Ven antes de que se acabe.",
    family: "violeta",
    flavor: "ube",
    primary: { label: "Pruébalo", href: "/sabores/ube" },
    secondary: { label: "Ver la familia", href: "/familias/violeta" },
  },
  {
    id: "s2",
    tab: "Pistacho de verdad",
    kicker: "El número 1",
    title: "Pistacho de verdad. Del que mancha.",
    text: "Lo tostamos cada mañana en el obrador. Lleva tres meses en lo más alto del ranking y no tiene pinta de bajar.",
    family: "pistacho",
    flavor: "pistacho",
    primary: { label: "Pide ya", href: "/tienda" },
    secondary: { label: "Ver ranking", href: "/ranking" },
  },
  {
    id: "s3",
    tab: "Martes 2x1",
    kicker: "Oferta",
    title: "Los martes, dos bolas por una.",
    text: "Todos los martes de 17:00 a 20:00. Trae a alguien o cómete las dos. No vamos a mirar.",
    family: "fresa",
    flavor: "fresa-de-huelva",
    primary: { label: "Ver la carta", href: "/carta" },
    secondary: { label: "Horarios", href: "/nosotros#horario" },
  },
  {
    id: "s4",
    tab: "Punk en la terraza",
    kicker: "Este jueves",
    title: "Los Cucuruchos tocan en casa.",
    text: "Punk de Petrer a tres acordes en la terraza. Entrada libre, la bola la pagas tú.",
    family: "vainilla",
    flavor: "turron-de-jijona",
    primary: { label: "Ver eventos", href: "/eventos" },
    secondary: { label: "Cómo llegar", href: "/nosotros#mapa" },
  },
  {
    id: "s5",
    tab: "Vota tu sabor",
    kicker: "Ranking del mes",
    title: "Tú decides qué entra en la vitrina.",
    text: "Los seis cremosos y los dos sorbetes más votados del mes se quedan en la vitrina el mes que viene.",
    family: "pistacho",
    flavor: "menta-chocolate",
    primary: { label: "Votar", href: "/ranking" },
    secondary: { label: "Todos los sabores", href: "/sabores" },
  },
];

export const news: NewsItem[] = [
  { id: "n1", label: "Nuevo", title: "Llega el ube: morado, vegano y sin gluten", date: "Hoy", href: "/sabores/ube" },
  { id: "n2", label: "Ranking", title: "El turrón adelanta a la menta y ya es segundo", date: "Ayer", href: "/ranking" },
  { id: "n3", label: "Eventos", title: "Los Cucuruchos tocan este jueves en la terraza", date: "Hace 2 días", href: "/eventos" },
  { id: "n4", label: "Carta", title: "La horchata se queda: vuelve en septiembre", date: "Hace 3 días", href: "/sabores/horchata" },
  { id: "n5", label: "Obrador", title: "Por qué nuestro pistacho no es verde fosforito", date: "Hace 5 días", href: "/sabores/pistacho" },
  { id: "n6", label: "Tienda", title: "Tarrinas de litro para llevar, también los domingos", date: "Hace 1 semana", href: "/tienda" },
];

export const media: MediaItem[] = [
  { id: "m1", kind: "vídeo", title: "Así tostamos el pistacho cada mañana", duration: "3:12", family: "pistacho", flavor: "pistacho", href: "/sabores/pistacho" },
  { id: "m2", kind: "receta", title: "Affogato de turrón en casa", duration: "10 min", family: "vainilla", flavor: "turron-de-jijona", href: "/sabores/turron-de-jijona" },
  { id: "m3", kind: "vídeo", title: "Ube: de Filipinas a Elda", duration: "4:45", family: "violeta", flavor: "ube", href: "/sabores/ube" },
  { id: "m4", kind: "receta", title: "Sándwich de helado con galleta de fresa", duration: "25 min", family: "fresa", flavor: "yogur-y-fresa", href: "/sabores/fresa-de-huelva" },
  { id: "m5", kind: "receta", title: "Granizado de hierbabuena y lima", duration: "15 min", family: "pistacho", flavor: "hierbabuena-lima", href: "/sabores/hierbabuena-lima" },
  { id: "m6", kind: "vídeo", title: "Concierto: Los Cucuruchos en directo", duration: "28:03", family: "fresa", flavor: "chicle-punk", href: "/eventos" },
];
