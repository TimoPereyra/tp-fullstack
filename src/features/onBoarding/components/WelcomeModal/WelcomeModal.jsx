import { useEffect, useRef, useState } from "react";
import styles from "./WelcomeModal.module.css";

import CyberBackground from "../../../../components/ui/CyberBackground/CyberBackground";

function WelcomeModal({ onClose }) {
  const cardRef = useRef(null);
  const rafRef = useRef(null);

  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    if (closing) return;

    setClosing(true);

    setTimeout(() => {
      onClose();
    }, 800);
  };

  useEffect(() => {
    const card = cardRef.current;
    if (!card || closing) return;

    const sensitivity = 20;

    const handleMove = (e) => {
      cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const x = (window.innerWidth / 2 - e.clientX) / sensitivity;
        const y = (window.innerHeight / 2 - e.clientY) / sensitivity;

        card.style.transform =
          `rotateY(${-x}deg) rotateX(${y}deg)`;
      });
    };

    document.addEventListener("mousemove", handleMove);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [closing]);

  return (
    <div
      className={`${styles.overlay} ${
        closing ? styles.overlayClosing : ""
      }`}
    >
      <CyberBackground />

      <main className={styles.wrapper}>
        <div ref={cardRef} className={styles.card}>
          {/* HEADER */}
          <div className={styles.topLeft}>
            <div className={styles.dot} />
            <span>AVAILABLE_FOR_WORK</span>
          </div>

          <div className={styles.topRight}>
            <span>LATAM_REMOTE_READY</span>
          </div>

          {/* CONTENT */}
          <div className={styles.content}>
            <h1 className={styles.title}>
              TIMOTEO // <span className={styles.accent}>PEREYRA</span>
            </h1>

            <div className={styles.line} />

            <p className={styles.subtitle}>
              Building reliable software for business and healthcare
              through scalable architectures and practical engineering.
            </p>
          </div>

          {/* TERMINAL */}
          <div className={styles.terminal}>
            <div className={styles.termLine}>
              <span className={styles.arrow}>&gt;</span>
              <span className={styles.cursor}>
                Initializing_Developer_Profile
              </span>
            </div>

            <div className={styles.termLineMuted}>
              <span className={styles.arrow}>&gt;</span>
              <span>Backend_Specialization ........ Laravel</span>
            </div>

            <div className={styles.termLineMuted}>
              <span className={styles.arrow}>&gt;</span>
              <span>Enterprise_Experience ......... Oracle</span>
            </div>

            <div className={styles.termLineMuted}>
              <span className={styles.arrow}>&gt;</span>
              <span>Frontend_Runtime .............. React</span>
            </div>

            <div className={styles.termLineMuted}>
              <span className={styles.arrow}>&gt;</span>
              <span>Status ........................ Available</span>
            </div>
          </div>

          {/* CTA */}
          <button
            className={styles.button}
            onClick={handleClose}
            disabled={closing}
          >
            Enter_Portfolio
          </button>

          {/* FOOTER */}
          <div className={styles.footer}>
            <div className={styles.iconBlock}>
              <span>LARAVEL_ENGINE</span>
              <small>Backend Systems</small>
            </div>

            <div className={styles.iconBlock}>
              <span>REACT_INTERFACE</span>
              <small>Modern Frontends</small>
            </div>

            <div className={styles.iconBlock}>
              <span>ORACLE_CORE</span>
              <small>Enterprise Solutions</small>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WelcomeModal;