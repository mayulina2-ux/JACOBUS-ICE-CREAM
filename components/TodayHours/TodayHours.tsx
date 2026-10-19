"use client";

import { useEffect, useState } from "react";
import { hours } from "@/data/site";
import { Skeleton } from "../Skeleton/Skeleton";
import { Tag } from "../Tag/Tag";
import styles from "./TodayHours.module.css";

/** Horario de hoy. Se calcula en el navegador para usar el día real de quien mira. */
export function TodayHours({ full = false }: { full?: boolean }) {
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    // getDay(): 0 = domingo. Lo pasamos a 0 = lunes.
    setToday((new Date().getDay() + 6) % 7);
  }, []);

  if (today === null) {
    return (
      <div className={styles.loading} aria-busy="true">
        <Skeleton shape="pill" />
        <Skeleton />
      </div>
    );
  }

  const h = hours[today];
  return (
    <div className={styles.wrap}>
      <p className={styles.today}>
        <span className={styles.day}>Hoy, {h.day.toLowerCase()}</span>
        {h.open ? <span className={styles.time}>{h.open}</span> : <Tag tone="off">Cerrado</Tag>}
      </p>
      {!h.open && <p className="t-small">Los lunes descansamos. Mañana volvemos.</p>}
      {full && (
        <table className={styles.table}>
          <caption className="visually-hidden">Horario de la semana</caption>
          <tbody>
            {hours.map((d, i) => (
              <tr key={d.day} className={i === today ? styles.current : undefined} aria-current={i === today ? "date" : undefined}>
                <th scope="row">{d.day}</th>
                <td>{d.open ?? "Cerrado"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
