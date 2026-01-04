import styles from "../work/work.module.css";
import { WorkCard } from "../work";
import { projects } from "@/constants";

export default function WorksPage() {
  return (
    <div className="section">
      <header className={styles.header}>
        <div className="container">
          <span className="mono-label">
            Project_Inventory // {projects.length} Units
          </span>
          <h2 className="title">
            Selected <span className="highlight">Works</span>
          </h2>
        </div>
      </header>

      <section className={styles.gridSection}>
        {projects.map((project, index) => (
          <WorkCard project={project} key={index} />
        ))}
      </section>
    </div>
  );
}
