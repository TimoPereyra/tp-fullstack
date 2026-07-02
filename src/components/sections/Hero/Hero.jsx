import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import profileImg from "./images/timopereyra.png";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const button = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function Hero() {
  return (
    <motion.section
      className={styles.hero}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* BACKGROUND GLOW */}
      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />

      <div className={styles.grid}>
        {/* LEFT CONTENT */}
        <motion.div className={styles.left} variants={item}>
          <span className={styles.badge}>
            Técnico Universitario en Programación · Laravel · React
          </span>

          <h1 className={styles.title}>Timo Pereyra</h1>

          <h2 className={styles.subtitle}>
            Fullstack Developer · Sistemas en Producción
          </h2>

          <p className={styles.description}>
            Desarrollo sistemas web con Laravel y React enfocados en producción,
            arquitectura backend, APIs, manejo de datos complejos y
            automatización.
            <br />
            <br />
            También realizo <strong>integraciones entre sistemas</strong>,{" "}
            <strong>migraciones de plataformas y bases de datos</strong> y{" "}
            <strong>soporte técnico / mantenimiento evolutivo</strong>.
          </p>

          <motion.div className={styles.buttons} variants={item}>
            <motion.button
              className={styles.primary}
              variants={button}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Ver proyectos
            </motion.button>

            <motion.button
              className={styles.secondary}
              variants={button}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Contacto
            </motion.button>
          </motion.div>

          {/* METRICS */}
          <div className={styles.metrics}>
            <div>
              <span>+3</span>
              <p>Años construyendo software</p>
            </div>

            <div>
              <span>Backend</span>
              <p>Sistemas y APIs escalables</p>
            </div>

            <div>
              <span>Integraciones</span>
              <p>APIs, ERP y servicios externos</p>
            </div>

            <div>
              <span>Frontend</span>
              <p>Interfaces modernas en React</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div className={styles.right} variants={item}>
          <div className={styles.imageWrapper}>
            <div className={styles.frameGlow} />
            <img src={profileImg} alt="Timo Pereyra" className={styles.image} />

            {/* Floating badge */}
            <div className={styles.floatingBadge}>
              <div className={styles.dot} />
              <div>
                <p>Disponible</p>
                <span>Laravel / React / PHP</span>
              </div>
            </div>
          </div>

          {/* Side tech pills */}
          <div className={styles.sideIcons}>
            <span>API</span>
            <span>DB</span>
            <span>SYS</span>
            <span>FRONT</span>
            <span>BACK</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
