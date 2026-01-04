import styles from "./work.module.css";
import Image from "next/image";
import Link from "next/link";

export default function WorkCard({ project }: { project: Project }) {
  return (
    <div key={project.id} className={styles.projectRow}>
      <div className={styles.imageContainer}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={styles.projectImg}
        />
        <div className={styles.imageOverlay}></div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.meta}>
          <span className={styles.id}>{project.id}</span>
          <span className={styles.year}>{project.year}</span>
        </div>

        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.category}>{project.category}</p>
        <p className={styles.desc}>{project.description}</p>

        <div className={styles.actions}>
          <a
            href={project.link}
            target="_blank"
            className={styles.externalLink}
          >
            LIVE_SITE
          </a>
          <Link href={`/work/${project.slug}`} className={styles.readMore}>
            VIEW_REPORT <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
