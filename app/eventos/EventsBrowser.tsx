"use client";

import { useEffect, useMemo, useState } from "react";
import { Skeleton } from "@/components/Skeleton/Skeleton";
import { Tag } from "@/components/Tag/Tag";
import { eventKinds, events, weekdayNames, weekdayShort } from "@/data/events";
import type { EventKind } from "@/data/types";
import styles from "./eventos.module.css";

type Kind = EventKind | "todos";

function mondayOf(d: Date) {
  const m = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  m.setDate(m.getDate() - ((m.getDay() + 6) % 7));
  return m;
}

const fmtDay = new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "long" });

/** Selector de semana con días en tarjetas + listado de eventos del día. */
export function EventsBrowser() {
  // La fecha se calcula en el navegador: así «hoy» es el hoy de quien mira.
  const [today, setToday] = useState<{ monday: Date; weekday: number } | null>(null);
  const [week, setWeek] = useState<0 | 1>(0);
  const [day, setDay] = useState(0);
  const [kind, setKind] = useState<Kind>("todos");

  useEffect(() => {
    const now = new Date();
    const weekday = (now.getDay() + 6) % 7;
    setToday({ monday: mondayOf(now), weekday });
    setDay(weekday);
    const tipo = new URLSearchParams(window.location.search).get("tipo");
    if (tipo === "cata" || tipo === "taller" || tipo === "concierto") setKind(tipo);
  }, []);

  const weekEvents = useMemo(
    () => events.filter((e) => e.week === week && (kind === "todos" || e.kind === kind)),
    [week, kind],
  );

  if (!today) {
    return (
      <div className={styles.loading} aria-busy="true" aria-label="Cargando agenda">
        <Skeleton shape="pill" />
        <div className={styles.days}>
          {Array.from({ length: 7 }, (_, i) => (
            <Skeleton key={i} shape="block" />
          ))}
        </div>
      </div>
    );
  }

  const dateOf = (w: number, d: number) => {
    const date = new Date(today.monday);
    date.setDate(date.getDate() + w * 7 + d);
    return date;
  };

  const dayEvents = weekEvents.filter((e) => e.weekday === day).sort((a, b) => a.time.localeCompare(b.time));
  const isToday = week === 0 && day === today.weekday;
  const selectedDate = dateOf(week, day);

  return (
    <div className={styles.browser}>
      <div className={styles.toolbar}>
        <div className={styles.weekSwitch} role="group" aria-label="Semana">
          {([0, 1] as const).map((w) => (
            <button
              key={w}
              type="button"
              className={styles.weekButton}
              aria-pressed={week === w}
              onClick={() => {
                setWeek(w);
                setDay(w === 0 ? today.weekday : 0);
              }}
            >
              {w === 0 ? "Esta semana" : "La que viene"}
            </button>
          ))}
        </div>
        <div className={styles.kinds} role="group" aria-label="Tipo de evento">
          {[{ kind: "todos" as const, label: "Todo" }, ...eventKinds].map((k) => (
            <button
              key={k.kind}
              type="button"
              className={styles.kindButton}
              aria-pressed={kind === k.kind}
              onClick={() => setKind(k.kind)}
            >
              {k.label}
            </button>
          ))}
        </div>
      </div>

      <ol className={styles.days} aria-label="Días de la semana">
        {weekdayShort.map((short, i) => {
          const count = weekEvents.filter((e) => e.weekday === i).length;
          const date = dateOf(week, i);
          const past = week === 0 && i < today.weekday;
          return (
            <li key={short}>
              <button
                type="button"
                className={[styles.day, past ? styles.past : ""].join(" ")}
                aria-pressed={day === i}
                aria-label={`${weekdayNames[i]} ${fmtDay.format(date)}: ${count === 0 ? "sin eventos" : `${count} ${count === 1 ? "evento" : "eventos"}`}`}
                onClick={() => setDay(i)}
              >
                <span className={styles.dayShort}>{short}</span>
                <span className={styles.dayNum}>{date.getDate()}</span>
                <span className={styles.dayCount} aria-hidden="true">
                  {count === 0 ? "—" : `${count} ${count === 1 ? "plan" : "planes"}`}
                </span>
                {week === 0 && i === today.weekday && <span className={styles.todayMark}>Hoy</span>}
              </button>
            </li>
          );
        })}
      </ol>

      <section aria-labelledby="dia-titulo" aria-live="polite" className={styles.list}>
        <h2 id="dia-titulo" className="t-heading">
          {isToday ? "Hoy" : weekdayNames[day]}, {fmtDay.format(selectedDate)}
        </h2>
        {dayEvents.length === 0 ? (
          <div className={styles.empty}>
            <p className="t-display">{isToday ? "HOY NO HAY LÍO" : "ESE DÍA NO HAY LÍO"}</p>
            <p>Pero la vitrina está llena. Pásate igual.</p>
          </div>
        ) : (
          <ul className={styles.events}>
            {dayEvents.map((e) => (
              <li key={e.id} className={styles.event}>
                <p className={styles.time}>{e.time}</p>
                <div className={styles.eventBody}>
                  <div className={styles.eventTags}>
                    <Tag tone="ink" shape="block">
                      {eventKinds.find((k) => k.kind === e.kind)?.one}
                    </Tag>
                    <Tag tone="neutral" shape="block">
                      {e.place}
                    </Tag>
                  </div>
                  <h3 className={styles.eventTitle}>{e.title}</h3>
                  <p>{e.description}</p>
                </div>
                <div className={styles.eventMeta}>
                  <p className={styles.price}>{e.price}</p>
                  <p className={e.spots === "Completo" ? styles.full : "t-small t-muted"}>{e.spots}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
