"use client";
import React, { useState } from "react";
import styles from "./contact.module.css";

type FormStatus = "IDLE" | "TRANSMITTING" | "SUCCESS" | "ERROR";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("IDLE");
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [error, setError] = useState<null | string>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name) {
      setStatus("ERROR");
      setError("Name cannot be blank");
      setTimeout(() => {
        setStatus("IDLE");
        setError(null);
      }, 4000);
      return;
    }

    if (!formData.email) {
      setStatus("ERROR");
      setError("Email cannot be blank");
      setTimeout(() => {
        setStatus("IDLE");
        setError(null);
      }, 4000);
      return;
    }

    if (!formData.message) {
      setStatus("ERROR");
      setError("Please enter a good message");
      setTimeout(() => {
        setStatus("IDLE");
        setError(null);
      }, 4000);
      return;
    }

    setStatus("TRANSMITTING");

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();

        throw new Error(data.message);
      }

      const data = await res.json();

      if (data.status === 200) {
        setStatus("SUCCESS");
      }
    } catch (err: any) {
      setStatus("ERROR");
      setError(err.message || "An unexpected error just occured");
      setTimeout(() => {
        setStatus("IDLE");
        setError(null);
      }, 4000);
    }
  };

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div className="main-container">
      <div className={styles.wrapper}>
        <div className="container">
          <header className={styles.header}>
            <span className="mono-label">Communication // Interface</span>
            <h1 className="title">
              Initiate <span className="highlight">Contact</span>
            </h1>
          </header>

          <div className={styles.layout}>
            <aside className={styles.info}>
              <div className={styles.infoBlock}>
                <h2 className={styles.label}>[ DIRECT_UPLINK ]</h2>
                <p className={styles.val}>
                  <a href="mailto:contact@mail.lexiz.is-a.dev" target="_blank">
                    contact@mail.lexiz.is-a.dev
                  </a>
                </p>
              </div>

              <div className={styles.infoBlock}>
                <h2 className={styles.label}>[ WHATSAPP_UPLINK ]</h2>
                <p className={styles.val}>
                  <a href="https://wa.me/qr/RHRVWOPIHLD4E1" target="_blank">
                    Click to contact me on whatsapp
                  </a>
                </p>
              </div>
              <div className={styles.infoBlock}>
                <h2 className={styles.label}>[ PHONE_UPLINK ]</h2>
                <p className={styles.val}>
                  <a href="tel:+2347043696226" target="_blank">
                    +234 704 369 6226
                  </a>
                </p>
              </div>
            </aside>

            <div className={styles.formContainer}>
              {status === "SUCCESS" ? (
                <div className={styles.statusDisplay}>
                  <div className={styles.successIcon}>✓</div>
                  <h3 className={styles.statusTitle}>TRANSMISSION_COMPLETE</h3>
                  <p className={styles.statusMsg}>
                    Your data packet has been successfully routed to the main
                    server. Expect a response within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("IDLE")}
                    className={styles.resetBtn}
                  >
                    NEW_SESSION
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      required
                      className={styles.input}
                      disabled={status === "TRANSMITTING"}
                      placeholder="01_NAME"
                      name="name"
                      value={formData.name}
                      onChange={handleInput}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <input
                      type="email"
                      required
                      className={styles.input}
                      disabled={status === "TRANSMITTING"}
                      placeholder="02_EMAIL"
                      name="email"
                      value={formData.email}
                      onChange={handleInput}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <textarea
                      rows={5}
                      required
                      className={styles.textarea}
                      disabled={status === "TRANSMITTING"}
                      placeholder="03_MESSAGE_PAYLOAD"
                      name="message"
                      value={formData.message}
                      onChange={handleInput}
                    ></textarea>
                  </div>

                  {status === "ERROR" && (
                    <div className={styles.errorMessage}>
                      <span className={styles.errCode}>ERR_UPLINK:</span>{" "}
                      {error || "An unexpected error just occured"}
                    </div>
                  )}

                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={status === "TRANSMITTING"}
                  >
                    <span className={styles.btnText}>
                      {status === "TRANSMITTING"
                        ? "UPLOADING..."
                        : "EXECUTE_TRANSMISSION"}
                    </span>
                    <div className={styles.scanline}></div>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
