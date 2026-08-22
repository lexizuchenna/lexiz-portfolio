import styles from "../work/work.module.css";
import { WorkCard } from "../work";
import projects from "@/data/projects.json";
import Link from "next/link";

export default function WorksPage({ preview = false }: { preview?: boolean }) {
  const visibleProjects = preview
    ? projects.filter((project) => project.featured).slice(0, 4)
    : projects;

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
        {visibleProjects.map((project, index) => (
          <WorkCard project={project} key={`${project.slug}-${index}`} index={index} />
        ))}
      </section>

      {preview && (
        <div className={styles.viewMoreRow}>
          <Link href="/work" className={styles.viewMore}>
            VIEW_ALL_WORKS <span>→</span>
          </Link>
        </div>
      )}
    </div>
  );
}
