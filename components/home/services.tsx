import { services } from "@/constants";
import styles from "./services.module.css";

export default function Services() {
  return (
    <section className="section" aria-labelledby="services-title">
      <div className="container">
        <div className={styles.topBar}>
          <span className="mono-label">Capabilities //</span>
          <div className={styles.statusGroup}>
            <span className={styles.bit}>64-BIT</span>
            <span className={styles.bit}>ENCRYPTED</span>
          </div>
        </div>

        <h2 className="title" id="services-title">
          CORE <span className="highlight">SERVICES</span>
        </h2>

        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.code} className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <span className={styles.serviceCode}>{service.code}</span>
                <div className={styles.indicator}></div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>

                <ul className={styles.featureList}>
                  {service.features.map((feature) => (
                    <li key={feature} className={styles.featureItem}>
                      <span className={styles.plus}>+</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.engine}>ENGINE_v1.0.2</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
