import { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.css";

import CyberBackground from "../../../../components/ui/CyberBackground/CyberBackground";

function LoadingScreen({ onComplete }) {
  const [percent, setPercent] = useState(85);

  // transición automática al modal
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // fake progress
  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((p) =>
        p < 99
          ? p + (Math.random() > 0.7 ? 1 : 0)
          : p
      );
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      {/* Background compartido con WelcomeModal */}
      <CyberBackground />

      {/* Glow inferior */}
      <div className={styles.bokehLeft} />
      <div className={styles.bokehRight} />

      {/* Contenido principal */}
      <div className={styles.center}>
        <div className={styles.orbitRing} />

        <h1 className={styles.title}>
          TP
        </h1>

        <div className={styles.progressWrapper}>
          <div className={styles.loadingText}>
            <span>COMPILING_FULLSTACK_PROFILE...</span>

            <span>{percent}%</span>

            <span className={styles.cursor}>
              _
            </span>
          </div>

          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{
                width: `${percent}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Footer contextual */}
      <footer className={styles.footer}>
        <span>
          ENGINE: PHP • LARAVEL • REACT
        </span>

        <span>
          STATUS: AVAILABLE_FOR_WORK
        </span>
      </footer>
    </div>
  );
}

export default LoadingScreen;