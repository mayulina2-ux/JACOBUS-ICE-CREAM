import type { Metadata } from "next";
import { SectionNav } from "@/components/SectionNav/SectionNav";
import { VITRINA_CUT, ranking } from "@/data/flavors";
import { saboresNav } from "@/data/site";
import { RankingTable } from "./RankingTable";
import styles from "./ranking.module.css";

export const metadata: Metadata = { title: "Ranking del mes" };

export default function RankingPage() {
  return (
    <>
      <SectionNav section="Sabores" items={saboresNav} />
      <div className="container page">
        <header className="prose">
          <p className="t-label t-accent">Ranking del mes</p>
          <h1 className="t-display">Lo que vota el barrio.</h1>
          <p>
            Cada bola cuenta como un voto. Los {VITRINA_CUT.cremoso} cremosos y los {VITRINA_CUT.sorbete} sorbetes que
            queden por encima de la línea se quedan en la vitrina el mes que viene. Los demás, a la cola.
          </p>
          <p className={styles.legend}>
            <span>▲ sube</span>
            <span>▼ baja</span>
            <span>= igual que el mes pasado</span>
          </p>
        </header>
        <div className={styles.tables}>
          <RankingTable title="Cremosos" rows={ranking("cremoso")} cut={VITRINA_CUT.cremoso} />
          <RankingTable title="Sorbetes" rows={ranking("sorbete")} cut={VITRINA_CUT.sorbete} />
        </div>
      </div>
    </>
  );
}
