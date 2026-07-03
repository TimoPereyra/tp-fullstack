import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./Navbar.module.css";
import useActiveSection from "../../hooks/useActiveSection";

function Navbar() {
    const activeSection = useActiveSection();

    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        { id: "home", label: "Inicio" },
        { id: "about", label: "Sobre mí" },
        { id: "experience", label: "Experiencia" },
        { id: "contact", label: "Contacto" }
    ];

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .6, delay: .2 }}
        >
            <header className={styles.header}>
                <div className={styles.container}>

                    <div className={styles.logo}>
                        TP-FULLSTACK
                    </div>

                    {/* Desktop */}
                    <nav className={styles.nav}>
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={styles.navItem}
                            >
                                {activeSection === item.id && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className={styles.activePill}
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 32
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

                    <a
                    href="/cv/CV_Timoteo_Pereyra.pdf"
                    download
                    className={styles.cvButton}
                    >
                    Descargar CV
                    </a>
                    {/* Mobile Button */}
                    <button
                        className={styles.menuButton}
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? "✕" : "☰"}
                    </button>
                </div>

                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            className={styles.mobileMenu}
                            initial={{
                                opacity: 0,
                                y: -20
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            exit={{
                                opacity: 0,
                                y: -20
                            }}
                            transition={{
                                duration: .25
                            }}
                        >
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className={styles.mobileItem}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}

                        <a
                        href="/cv/CV_Timoteo_Pereyra.pdf"
                        download
                        className={styles.mobileCv}
                        >
                        Descargar CV
                        </a>
                        </motion.div>
                    )}
                </AnimatePresence>

            </header>
        </motion.nav>
    );
}

export default Navbar;