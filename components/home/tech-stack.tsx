"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./stacks.module.css";
import SVGIcons from "@/assets/icons";

const stacks: Array<Stacks> = [
  {
    name: "Node.js",
    Icon: SVGIcons.NodeJSIcon,
    proficiency: "90%",
    color: "#339933",
  },
  {
    name: "Next.js",
    Icon: SVGIcons.NextJSIcon,
    proficiency: "98%",
    color: "#FFFFFF",
  },
  {
    name: "TypeScript",
    Icon: SVGIcons.TypescriptIcon,
    proficiency: "85%",
    color: "#3178C6",
  },
  {
    name: "PostgreSQL",
    Icon: SVGIcons.PostgresIcon,
    proficiency: "88%",
    color: "#4169E1",
  },
  {
    name: "React",
    Icon: SVGIcons.ReactIcon,
    proficiency: "95%",
    color: "#61DAFB",
  },
  {
    name: "MongoDB",
    Icon: SVGIcons.MongoDBIcon,
    proficiency: "85%",
    color: "#47A248",
  },
  {
    name: "React Native",
    Icon: SVGIcons.ReactIcon,
    proficiency: "80%",
    color: "#61DAFB",
  },
  {
    name: "CSS",
    Icon: SVGIcons.CSSIcon,
    proficiency: "75%",
    color: "#1572B6",
  },
  {
    name: "Javascript",
    Icon: SVGIcons.JavascriptIcon,
    proficiency: "85%",
    color: "#F7DF1E",
  },
  {
    name: "Express",
    Icon: SVGIcons.ExpressIcon,
    proficiency: "80%",
    color: "#828282",
  },
  {
    name: "FastifyJS",
    Icon: SVGIcons.FastifyIcon,
    proficiency: "80%",
    color: "#ffffff",
  },
  {
    name: "Git",
    Icon: SVGIcons.GitIcon,
    proficiency: "70%",
    color: "#fa4900",
  },
  {
    name: "Prisma",
    Icon: SVGIcons.PrismaIcon,
    proficiency: "52%",
    color: "#0043f6",
  },
  {
    name: "Tansatack Query",
    Icon: SVGIcons.TanstackIcon,
    proficiency: "60%",
    color: "#F7DF1E",
  },
];

export default function TechStack() {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleTech = isExpanded ? stacks : stacks.slice(0, 4);

  return (
    <section className="section" aria-label="Technical Stack">
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="mono-label">Capabilities // Index</span>
            <h2 className="title">
              THE <span className="highlight">STACK</span>
            </h2>
          </div>
        </div>

        <div className={styles.grid}>
          {visibleTech.map((tech, index) => (
            <div key={index} className={styles.techCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <tech.Icon width={32} height={32} color={tech.color} />
                </div>
                <span className={styles.percentage}>{tech.proficiency}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.techName}>{tech.name}</h3>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: tech.proficiency }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.expandBtnContainer}>
          <button
            className={styles.toggleBtn}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "[ COLLAPSE_VIEW ]" : "[ EXPAND_ALL ]"}
          </button>
        </div>
      </div>
    </section>
  );
}
