import Link from "next/link";
import { Carousel } from "@/components/Carousel/Carousel";
import { FlavorCard } from "@/components/FlavorCard/FlavorCard";
import { HeroStories } from "@/components/HeroStories/HeroStories";
import { FamilyCard, MediaCard } from "@/components/MediaCard/MediaCard";
import { MiniMap } from "@/components/MiniMap/MiniMap";
import { PromoBanner } from "@/components/PromoBanner/PromoBanner";
import { SidebarModule } from "@/components/SidebarModule/SidebarModule";
import { Tag } from "@/components/Tag/Tag";
import { TodayHours } from "@/components/TodayHours/TodayHours";
import { media, news, stories } from "@/data/content";
import { families } from "@/data/families";
import { flavors, topVoted } from "@/data/flavors";
import { site, socials } from "@/data/site";
import styles from "./home.module.css";

export default function HomePage() {
  const weekly = flavors.filter((f) => f.weekly);
  const top = topVoted(8);

  return (
    <div className={`container ${styles.home}`}>
      <div className={styles.main}>
        <HeroStories stories={stories} />

        <Carousel title="Sabores de la semana" more={{ label: "Ver todos", href: "/sabores" }}>
          {weekly.map((f) => (
            <FlavorCard key={f.slug} flavor={f} />
          ))}
        </Carousel>

        <PromoBanner
          kicker="Todos los martes · 17:00 a 20:00"
          title="2x1 los martes"
          text="Dos bolas por una. Trae a alguien o cómete las dos. No vamos a mirar."
          cta={{ label: "Ver la carta", href: "/carta" }}
        />

        <Carousel title="Lo más votado" more={{ label: "Ranking completo", href: "/ranking" }}>
          {top.map((f, i) => (
            <FlavorCard key={f.slug} flavor={f} rank={i + 1} />
          ))}
        </Carousel>

        <Carousel title="Recetas y vídeos" itemSize="media">
          {media.map((m) => (
            <MediaCard key={m.id} item={m} />
          ))}
        </Carousel>

        <Carousel title="Familias de sabor" itemSize="family">
          {families.map((f) => (
            <FamilyCard key={f.slug} family={f} />
          ))}
        </Carousel>
      </div>

      <aside className={styles.sidebar} aria-label="Lo último y la tienda">
        <SidebarModule title="Lo último" id="lo-ultimo">
          <ol className={styles.news}>
            {news.map((n) => (
              <li key={n.id} className={styles.newsItem}>
                <span className={styles.newsMeta}>
                  <Tag tone="neutral" shape="block">
                    {n.label}
                  </Tag>
                  <span className="t-small t-muted">{n.date}</span>
                </span>
                <Link href={n.href} className={styles.newsLink}>
                  {n.title}
                </Link>
              </li>
            ))}
          </ol>
        </SidebarModule>

        <SidebarModule title="Síguenos" id="siguenos">
          <ul className={styles.socials}>
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className={styles.social} target="_blank" rel="noreferrer">
                  <span className={styles.socialName}>{s.label}</span>
                  <span className="t-small t-muted">{s.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </SidebarModule>

        <SidebarModule title="Horario de hoy" id="horario-hoy" action={<Link href="/nosotros#horario">Semana</Link>}>
          <TodayHours />
        </SidebarModule>

        <SidebarModule title="La tienda" id="tienda-mapa" action={<Link href="/nosotros#mapa">Cómo llegar</Link>}>
          <MiniMap address={site.address} />
        </SidebarModule>
      </aside>
    </div>
  );
}
