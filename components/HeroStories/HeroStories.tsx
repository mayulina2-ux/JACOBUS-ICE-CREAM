"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import type { Story } from "@/data/types";
import { familyColor } from "@/data/families";
import { Button } from "../Button/Button";
import { IconPause, IconPlay } from "../Icons/Icons";
import { FlavorPhoto } from "../FlavorPhoto/FlavorPhoto";
import styles from "./HeroStories.module.css";

/**
 * Hero de portada con 5 pestañas y barra de progreso que rotan las novedades.
 * La rotación la marca la animación CSS de la barra: con movimiento reducido
 * no hay animación y, por tanto, tampoco rotación automática.
 */
export function HeroStories({ stories }: { stories: Story[] }) {
  const baseId = useId();
  const [active, setActive] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const paused = userPaused || hoverPaused;
  const story = stories[active];

  const go = (i: number, focus = false) => {
    const next = (i + stories.length) % stories.length;
    setActive(next);
    if (focus) tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent, i: number) => {
    const map: Record<string, number> = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: stories.length - 1 };
    if (!(e.key in map)) return;
    e.preventDefault();
    go(map[e.key], true);
  };

  return (
    <section
      className={`${styles.hero} on-color`}
      style={{ ["--family-color" as string]: familyColor(story.family) }}
      aria-roledescription="carrusel"
      aria-label="Novedades de Jacobus"
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      onFocus={() => setHoverPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setHoverPaused(false);
      }}
    >
      <div
        className={styles.stage}
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${active}`}
        aria-live={paused ? "polite" : "off"}
      >
        <div className={styles.copy}>
          <p className={styles.kicker}>{story.kicker}</p>
          <h1 className={styles.title}>{story.title}</h1>
          <p className={styles.text}>{story.text}</p>
          <div className={styles.actions}>
            <Button href={story.primary.href}>{story.primary.label}</Button>
            <Button href={story.secondary.href} variant="secondary">
              {story.secondary.label}
            </Button>
          </div>
        </div>
        <FlavorPhoto slug={story.flavor} shape="round" priority className={styles.scoop} />
      </div>

      <div className={styles.bar}>
        <div role="tablist" aria-label="Elige novedad" className={styles.tabs}>
          {stories.map((s, i) => {
            const selected = i === active;
            return (
              <button
                key={s.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`${baseId}-tab-${i}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                className={styles.tab}
                onClick={() => go(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
              >
                <span className={styles.track} aria-hidden="true">
                  <span
                    key={selected ? `on-${active}` : "off"}
                    className={[
                      styles.progress,
                      selected ? styles.running : "",
                      i < active ? styles.done : "",
                      paused ? styles.paused : "",
                    ].join(" ")}
                    onAnimationEnd={selected ? () => go(active + 1) : undefined}
                  />
                </span>
                <span className={styles.tabLabel}>{s.tab}</span>
              </button>
            );
          })}
        </div>
        <button
          type="button"
          className={styles.pause}
          onClick={() => setUserPaused((p) => !p)}
          aria-label={userPaused ? "Reanudar novedades" : "Pausar novedades"}
        >
          {userPaused ? <IconPlay /> : <IconPause />}
        </button>
      </div>
    </section>
  );
}
