import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./About.css";

function About() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const timeline = [
        {
            title: "Arquitectura Backend",
            subtitle: "Diseño de sistemas mantenibles",
            description:
                "Construcción de APIs, reglas de negocio y estructuras pensadas para escalar y evolucionar con el tiempo.",
            color: "teal",
            icon: "🏗️"
        },
        {
            title: "Integraciones",
            subtitle: "Conexión entre plataformas",
            description:
                "Experiencia integrando APIs, ERPs, servicios externos y automatizando flujos de información entre sistemas.",
            color: "purple",
            icon: "🔄"
        },
        {
            title: "Frontend Moderno",
            subtitle: "Experiencias ágiles y mantenibles",
            description:
                "Interfaces desarrolladas priorizando rendimiento, reutilización y una experiencia de usuario fluida.",
            color: "teal",
            icon: "⚡"
        },
        {
            title: "Producción",
            subtitle: "Evolución continua",
            description:
                "Participación en despliegues, mantenimiento evolutivo, migraciones y mejora continua de aplicaciones activas.",
            color: "purple",
            icon: "🚀"
        }
    ];

    const nextSlide = () => {
        if (currentSlide < timeline.length - 2) {
            setCurrentSlide((s) => s + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide((s) => s - 1);
        }
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)" }
    };

    const slideVariant = {
        enter: (dir) => ({
            x: dir > 0 ? 40 : -40,
            opacity: 0,
            scale: 0.98
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (dir) => ({
            x: dir > 0 ? -40 : 40,
            opacity: 0,
            scale: 0.98
        })
    };

    return (
        <section className="about">

            <div className="about__content">

                {/* HERO */}
                <motion.div
                    className="about__hero"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <motion.h2 variants={fadeUp}>
                        Más allá del <span className="teal">código</span>,
                        me enfoco en crear{" "}
                        <span className="purple">soluciones sostenibles</span>.
                    </motion.h2>

                    <motion.p variants={fadeUp}>
                        Mi enfoque está en desarrollar software que pueda
                        mantenerse, evolucionar y escalar con el tiempo.
                        Trabajo pensando tanto en la velocidad de desarrollo
                        como en la estabilidad operativa y la mantenibilidad
                        del proyecto a largo plazo.
                    </motion.p>

                    <motion.p variants={fadeUp}>
                        Además del desarrollo FullStack, participo en
                        integraciones entre plataformas, migraciones de datos,
                        automatización de procesos y mantenimiento evolutivo
                        de sistemas existentes en producción.
                    </motion.p>
                </motion.div>

                {/* TIMELINE */}
                <motion.div
                    className="timeline-card"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="timeline-top">
                        <div className="timeline-title">
                            <span></span>
                            Cómo aporto a un proyecto
                        </div>

                        <div className="timeline-controls">
                            <button onClick={prevSlide} disabled={currentSlide === 0}>
                                ←
                            </button>

                            <button
                                onClick={nextSlide}
                                disabled={currentSlide >= timeline.length - 2}
                            >
                                →
                            </button>
                        </div>
                    </div>

                    <div className="timeline-slider">
                        <AnimatePresence mode="wait" custom={currentSlide}>
                            {timeline
                                .slice(currentSlide, currentSlide + 2)
                                .map((item) => (
                                    <motion.div
                                        key={item.title}
                                        className={`timeline-slide ${item.color}`}
                                        custom={currentSlide}
                                        variants={slideVariant}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.35 }}
                                    >
                                        <div className="timeline-slide-icon">
                                            {item.icon}
                                        </div>

                                        <h3>{item.title}</h3>
                                        <small>{item.subtitle}</small>
                                        <p>{item.description}</p>
                                    </motion.div>
                                ))}
                        </AnimatePresence>
                    </div>

                    <div className="timeline-pagination">
                        {timeline.map((_, index) => (
                            <span
                                key={index}
                                className={
                                    index === currentSlide ||
                                    index === currentSlide + 1
                                        ? "active"
                                        : ""
                                }
                            />
                        ))}
                    </div>

                    <div className="glow glow-teal"></div>
                    <div className="glow glow-purple"></div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;