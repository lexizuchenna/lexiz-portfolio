import Image from "next/image";
import { Metadata } from "next";

import Error from "@/components/error/error";
import styles from "./work-detail.module.css";
import { projects } from "@/constants";
import { generateProjectImage } from "@/utils/generate-image";

const getProjectData = (slug: string) => {
  const project = projects.find((pr) => pr.slug === slug);

  if (!project) return null;

  return project;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;

  const title =
    projects.find((pr) => pr.slug === slug)?.title ?? "404_NOT_FOUND";

  return {
    title: title,
    description: `Technical deep dive into ${title}. Explore the architecture, stack, and deployment process used by Alexander Ukwueze.`,
    openGraph: {
      title: `${title} | Case Study`,
      description: `Exploring the development of ${title}.`,
      images: [`/work/${slug}/og-cover.jpg`],
    },
  };
}

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const data = getProjectData((await params).slug);

  if (!data) return <Error actionLink="/work" actionText="retutn_to_works" />;

  return (
    <article className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <span className="mono-label">Project_Report // {data.id}</span>
          <h1 className={styles.title}>{data.title}</h1>
        </div>
      </header>

      <div className={styles.mainGrid}>
        <aside className={styles.sidebar}>
          <div className={styles.metaBlock}>
            <span className={styles.metaLabel}>Client</span>
            <span className={styles.metaValue}>{data.client}</span>
          </div>
          <div className={styles.metaBlock}>
            <span className={styles.metaLabel}>Stack_Inventory</span>
            <div className={styles.tagGrid}>
              {data.stack.map((s) => (
                <span key={s} className={styles.tag}>
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.metaBlock}>
            <span className={styles.metaLabel}>Deployment_Cycle</span>
            <span className={styles.metaValue}>{data.timeline}</span>
          </div>
          {data.repo && (
            <div className={styles.metaBlock}>
              <span className={styles.metaLabel}>View on Github</span>
              <a
                href={data.repo}
                style={{
                  textDecorationColor: "var(--accent)",
                }}
              >
                <span
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  {data.repo}
                </span>
              </a>
            </div>
          )}
        </aside>

        {/* Narrative Content */}
        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>01 / EXECUTIVE_SUMMARY</h2>
            <p className={styles.bodyText}>{data.summary}</p>
          </section>

          <div className={styles.largeImage}>
            {/* {data.image ? ( */}
            <Image
              src={data.image ?? generateProjectImage(data)}
              alt="Interface Screenshot"
              width={1200}
              height={700}
              className={styles.img}
            />
          </div>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>02 / TECHNICAL_DEEP_DIVE</h2>
            <p className={styles.bodyText}>{data.deepDive}</p>
          </section>
        </div>
      </div>
    </article>
  );
}
