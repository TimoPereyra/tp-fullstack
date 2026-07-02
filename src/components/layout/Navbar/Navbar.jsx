import styles from "./Navbar.module.css";
import { motion } from "framer-motion";
import useActiveSection from "../../hooks/useActiveSection";
function Navbar() {
  const activeSection = useActiveSection();
  const navItems = [
    { id: "home", label: "Inicio" },
    { id: "about", label: "Sobre mí" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Proyectos" },
    { id: "contact", label: "Contacto" },
  ];
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>TP-FULLSTACK</div>

          <nav className={styles.nav}>
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className={styles.navItem}>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="active-pill"
                    className={styles.activePill}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 32,
                    }}
                  />
                )}

                <span
                  className={
                    activeSection === item.id
                      ? styles.activeText
                      : styles.inactiveText
                  }
                >
                  {item.label}
                </span>
              </a>
            ))}
          </nav>
          <button className={styles.cvButton}>Descargar CV</button>
        </div>
      </header>
    </motion.nav>
  );
}

export default Navbar;
