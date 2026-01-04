import React from "react";
import Link from "next/link";
import styles from "./error.module.css";

interface ErrorProps {
  title?: string;
  message?: string;
  actionText?: string;
  actionLink?: string;
  errorCode?: string;
}

const Error: React.FC<ErrorProps> = ({
  title = "SYSTEM_FAILURE: 404",
  message = "The requested resource has been moved, deleted, or never existed in this directory.",
  actionText = "RETURN_TO_DASHBOARD",
  actionLink = "/",
  errorCode = "0xERR_NOT_FOUND",
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.scanner}></div>

      <div className={styles.content}>
        <div className={styles.errorCode}>
          <span className={styles.dot}></span>
          <span className="mono-label">{errorCode}</span>
        </div>

        <h1 className={styles.title}>{title}</h1>

        <p className={styles.message}>{message}</p>

        <div className={styles.actionArea}>
          <Link href={actionLink} className={styles.cta}>
            <span className={styles.arrow}>[</span> {actionText}{" "}
            <span className={styles.arrow}>]</span>
          </Link>
        </div>

        <div className={styles.footer}>
          <div className={styles.barCode}></div>
          <p className="mono-label">
            SECURE_SERVER_LOG // {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
