"use client";

import { useEffect, useState } from "react";
import { IconMoon, IconSun } from "../Icons/Icons";

export const THEME_KEY = "jacobus-theme";

type Theme = "light" | "dark";

function currentTheme(): Theme {
  const attr = document.documentElement.dataset.theme;
  if (attr === "light" || attr === "dark") return attr;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/** Botón claro/oscuro. Guarda la elección; si no hay, manda el sistema. */
export function ThemeToggle({ className, withLabel }: { className?: string; withLabel?: boolean }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => setTheme(currentTheme()), []);

  const toggle = () => {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* sin almacenamiento: el tema dura lo que la pestaña */
    }
    setTheme(next);
  };

  const label = theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro";
  return (
    <button type="button" className={className} onClick={toggle} aria-label={withLabel ? undefined : label}>
      {theme === "dark" ? <IconSun /> : <IconMoon />}
      {withLabel && <span>{label}</span>}
    </button>
  );
}

/** Script que se ejecuta antes de pintar para que no parpadee el tema. */
export const themeScript = `(function(){try{var t=localStorage.getItem("${THEME_KEY}");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t}}catch(e){}})();`;
