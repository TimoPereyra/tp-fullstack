import styles from "./Footer.module.css";

import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* IDENTIDAD */}
          <div className={styles.column}>
            <h2 className={styles.name}>
              Timoteo Pereyra
            </h2>

            <div className={styles.identityInfo}>
              <p className={styles.role}>
                Desarrollador Full Stack
              </p>

              <div className={styles.location}>
                <FaMapMarkerAlt />
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          {/* NAVEGACION */}
          <div className={styles.column}>
            <h3 className={styles.title}>
              Navegación
            </h3>

            <nav className={styles.navigation}>
              <a href="#home">Inicio</a>
              <a href="#about">Sobre mí</a>
              <a href="#experience">Experiencia</a>
              <a href="#contact">Contacto</a>
            </nav>
          </div>

          {/* CONTACTO */}
          <div className={styles.column}>
            <h3 className={styles.title}>
              Conectar
            </h3>

            <div className={styles.socials}>
              <a
                href="https://www.linkedin.com/in/timoteo-pereyra/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
                LinkedIn
              </a>

              <a
                href="https://github.com/TimoPereyra"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                GitHub
              </a>

            </div>
          </div>

          {/* STATUS */}
          <div className={styles.column}>
            <div className={styles.statusCard}>
              <div className={styles.statusHeader}>
                <span className={styles.pulse}></span>

                <span className={styles.statusText}>
                  Disponible
                </span>
              </div>

              <p className={styles.statusDescription}>
                Disponible para oportunidades remotas y
                modalidad híbrida.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.separator}></div>

        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <p className={styles.quote}>
              "Backend sólido, soluciones reales y foco en
              producción."
            </p>

            <p className={styles.copyright}>
              © 2026 Timoteo Pereyra. Built with precision
              and digital void mastery.
            </p>
          </div>

          <div className={styles.bottomRight}>

            <div className={styles.dots}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;