"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import testimonials from "@/constants/testimonials";
import styles from "./testimonials.module.css";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % testimonials.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const testimonial = testimonials[activeIndex];

  return (
    <section className="section" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className={styles.header}>
          <span className="mono-label">
            External_Review_Log // {testimonials.length} Entries
          </span>
          <h2 id="testimonials-heading" className="title">
            Client <span className="highlight">Signals</span>
          </h2>
        </div>

        <div className={styles.carousel} aria-live="polite">
          <span className={styles.index}>
            0{activeIndex + 1} / 0{testimonials.length}
          </span>
          <blockquote className={styles.review}>
            “{testimonial.review}”
          </blockquote>
          <div className={styles.identity}>
            <Image
              src={testimonial.profile_image || "/images/image.webp"}
              alt={testimonial.name}
              width={64}
              height={64}
              className={styles.avatar}
            />
            <div>
              <cite className={styles.name}>{testimonial.name}</cite>
              <p className={styles.meta}>
                {testimonial.position} // {testimonial.organization}
              </p>
            </div>
          </div>
          <div className={styles.controls}>
            <button
              type="button"
              className={styles.arrow}
              aria-label="Previous testimonial"
              onClick={() =>
                setActiveIndex(
                  (activeIndex - 1 + testimonials.length) % testimonials.length,
                )
              }
            >
              ←
            </button>
            <div className={styles.dots}>
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-pressed={index === activeIndex}
                  className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ""}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            <button
              type="button"
              className={styles.arrow}
              aria-label="Next testimonial"
              onClick={() =>
                setActiveIndex((activeIndex + 1) % testimonials.length)
              }
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
