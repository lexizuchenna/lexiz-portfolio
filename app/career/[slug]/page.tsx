import Error from "@/components/error/error";
import styles from "./career-detail.module.css";
import { careers } from "@/constants";
import { Metadata } from "next";

const getCareerData = (slug: string): Career | null => {
  const career = careers.find((car) => car.slug === slug);

  if (!career) return null;

  return career;
};

export default async function CareerDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const data = getCareerData((await params).slug);

  if (!data) return <Error actionText="retutn_to_home" />;

  return (
    <div className={styles.container}>
      {/* System Status Header */}
      <header className={styles.statusHeader}>
        <div className={styles.statusInner}>
          <div className={styles.statusItem}>
            <span className="mono-label">ID_REF</span>
            <span className={styles.val}>{data.id}</span>
          </div>
          <div className={styles.statusItem}>
            <span className="mono-label">STATUS</span>
            <span className={styles.activePulse}>OPERATIONAL</span>
          </div>
          <div className={styles.statusItem}>
            <span className="mono-label">TIMELINE</span>
            <span className={styles.val}>{data.period}</span>
          </div>
        </div>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <h1 className={styles.roleTitle}>{data.role}</h1>
          <p className={styles.companyName}>
            {data.company} // {data.location}
          </p>
        </section>

        <div className={styles.detailsGrid}>
          {/* Column 1: Mission Brief */}
          <div className={styles.brief}>
            <h2 className={styles.sectionLabel}>[ 01 // MISSION_OVERVIEW ]</h2>
            <p className={styles.text}>{data.overview}</p>

            <h2 className={styles.sectionLabel}>
              [ 02 // CORE_CONTRIBUTIONS ]
            </h2>
            <ul className={styles.achievementList}>
              {data.keyAchievements.map((item, i) => (
                <li key={i} className={styles.achievementItem}>
                  <span className={styles.bullet}>{`>>`}</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Tech Specs */}
          <aside className={styles.specs}>
            <div className={styles.specBox}>
              <h2 className={styles.sectionLabel}>[ 03 // TECH_STACK ]</h2>
              <div className={styles.stackGrid}>
                {data.techStack.map((tech) => (
                  <span key={tech} className={styles.stackTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.specBox}>
              <h2 className={styles.sectionLabel}>
                [ 04 // ARCHITECTURE_LOG ]
              </h2>
              {/* <p className={styles.smallText}>{data.architectureDeepDive}</p> */}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
