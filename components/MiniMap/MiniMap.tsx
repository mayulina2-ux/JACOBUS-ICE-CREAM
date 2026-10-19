import styles from "./MiniMap.module.css";

/** Mini-mapa esquemático de la tienda (placeholder en SVG, sin servicios externos). */
export function MiniMap({ address }: { address: string }) {
  return (
    <figure className={styles.map}>
      <svg viewBox="0 0 300 180" className={styles.svg} role="img" aria-label={`Mapa: Jacobus está en ${address}`}>
        <rect className={styles.ground} width="300" height="180" />
        <rect className={styles.park} x="190" y="20" width="90" height="60" rx="4" />
        <path className={styles.street} d="M0 110 H300 M120 0 V180 M0 40 L300 160" />
        <text className={styles.streetName} x="8" y="104">C/ JARDINES</text>
        <text className={styles.streetName} x="200" y="54">PARQUE</text>
        <g className={styles.pin} transform="translate(150 110)">
          <path d="M0 0 C-14 -16 -16 -24 -16 -30 A16 16 0 0 1 16 -30 C16 -24 14 -16 0 0 Z" />
          <circle cx="0" cy="-30" r="6" className={styles.pinDot} />
        </g>
      </svg>
      <figcaption className={styles.caption}>{address}</figcaption>
    </figure>
  );
}
