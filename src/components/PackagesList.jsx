
import React from "react";
import packages from "../data/packages";
import styles from "./PackagesList.module.css";

export default function PackagesList({ category }) {
  const filtered = category
    ? packages.filter((p) => p.category === category)
    : packages;

  return (
    <section className={styles.pkgSection}>
      <div className={styles.pkgGrid}>
        {filtered.map((p) => (
          <article key={p.id} className={styles.pkgCard}>
            <img className={styles.pkgImg} src={p.img} alt={p.title} />
            <div className={styles.pkgBody}>
              <h3 className={styles.pkgTitle}>{p.title}</h3>
              <div className={styles.pkgMeta}>
                <span className={styles.pkgPrice}>{p.price}</span>
                <span className={styles.pkgDuration}>{p.duration}</span>
              </div>
              <ul className={styles.pkgList}>
                {p.includes.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <div className={styles.pkgActions}>
                <a className={styles.btn} href="/contact">
                  Book Now
                </a>
                <button
                  className={`${styles.btn} ${styles.btnOutline}`}
                  onClick={() => alert(`Details for ${p.title}`)}
                >
                  Details
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
