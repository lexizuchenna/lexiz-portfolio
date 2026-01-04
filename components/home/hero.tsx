import Link from "next/link";
import styles from "./hero.module.css";

export default function hero() {
  return (
    <section className={styles.heroContainer} aria-label="Introduction">
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className="pulse"></span>
          <span className="mono-label">System Status: Operational</span>
        </div>

        <h1 className="title">
          ALEXANDER <span className="highlight">UKWUEZE</span>
        </h1>

        <p className={styles.description}>
          A Full Stack JavaScript Developer focused on building fast, reliable,
          and user-centric web and mobile solutions with{" "}
          <strong>React, Next.js, Node.js, and React Native</strong>.
        </p>

        <div className={styles.actions}>
          <Link href="/work" className="cta-button">
            VIEW REPOSITORY
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.64645 11.3536L11.3536 3.64645M11.3536 3.64645H5M11.3536 3.64645V10"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </Link>
          <Link href="/contact" className={styles.secondaryBtn}>
            INITIATE_CONTACT.EXE
          </Link>
        </div>
      </div>

      {/* Stats Panel - Inspired by your screenshot */}
      <div className={styles.statsPanel}>
        <div className={styles.statItem}>
          <span className={styles.statValue}>52+</span>
          <span className="mono-label">Clients_Served</span>
        </div>
        <div className={styles.statDivider}></div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>04+</span>
          <span className="mono-label">Years_Exp</span>
        </div>
        <div className={styles.statDivider}></div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>40+</span>
          <span className="mono-label">Web_Deployed</span>
        </div>
      </div>
    </section>
  );
}
