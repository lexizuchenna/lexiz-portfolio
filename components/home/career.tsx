import Link from "next/link";
import styles from "./career.module.css";

import { careers } from "@/constants";

export default function Career() {
  return (
    <section className="section" aria-labelledby="career-heading">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.titleStack}>
            <h2 id="career-heading" className="title">
              CAREER<span className="highlight">_LOG</span>
            </h2>
            <div className={styles.subHeader}>
              <span className="mono-label">Archive // </span>
              <div className={styles.line}></div>021-2026
              <span className="mono-label">Records: {careers.length}</span>
            </div>
          </div>
        </div>

        <div className={styles.blueprintGrid}>
          {careers.map((item, index) => (
            <Link
              key={item.id}
              href={`/career/${item.slug}`}
              className={styles.module}
            >
              <div className={styles.moduleCorner}>
                <span className={styles.coord}>0{index + 1}</span>
                {item.isActive && (
                  <span className={styles.liveTag}>LIVE_ENV</span>
                )}
              </div>

              <div className={styles.body}>
                <span className={styles.period}>{item.period}</span>
                <h3 className={styles.roleTitle}>{item.role}</h3>
                <p className={styles.companyInfo}>
                  {item.company} // {item.industry}
                </p>

                <p className={styles.desc}>{item.description}</p>

                {/* <div className={styles.techTags}>
                  {item.techKeywords?.map(tag => (
                    <span key={tag} className={styles.tag}>#{tag}</span>
                  ))}
                </div> */}
              </div>

              <div className={styles.moduleFooter}>
                <div className={styles.scanCode}></div>
                <span className={styles.action}>ACCESS_DATA_STREAM</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
