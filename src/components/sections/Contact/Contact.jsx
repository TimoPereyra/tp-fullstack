import { useEffect } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const formVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.985
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.15
    }
  }
};

export default function Contact() {
  useEffect(() => {
    const inputs = document.querySelectorAll(
      ".contact-page input, .contact-page textarea"
    );

    const handleFocus = (e) => {
      const label = e.target.parentElement?.querySelector("label");
      if (label) label.style.color = "#ddb8ff";
    };

    const handleBlur = (e) => {
      const label = e.target.parentElement?.querySelector("label");
      if (label) label.style.color = "";
    };

    inputs.forEach((el) => {
      el.addEventListener("focus", handleFocus);
      el.addEventListener("blur", handleBlur);
    });

    return () => {
      inputs.forEach((el) => {
        el.removeEventListener("focus", handleFocus);
        el.removeEventListener("blur", handleBlur);
      });
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form[0].value;
    const email = form[1].value;
    const company = form[2].value;
    const message = form[3].value;

    const subject = `Contacto portfolio - ${name}`;

    const body = `
Nombre: ${name}
Email: ${email}
Empresa: ${company}

Mensaje:
${message}
`;

    const mailto = `mailto:timopereyra@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <div className="contact-page">
      <main className="container">
        <div className="grid">

          <motion.div
            className="left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div className="badge" variants={itemVariants}>
              Desarrollador Full Stack · PHP · Laravel · JavaScript
            </motion.div>

            <motion.h1 variants={itemVariants}>
              Construyamos <br />
              algo sólido
            </motion.h1>

            <motion.p variants={itemVariants}>
              Desarrollador Full Stack con más de 3 años de experiencia
              construyendo sistemas web en producción para sectores de gestión
              empresarial y salud digital. Especializado en PHP/Laravel y
              JavaScript, con foco en performance, escalabilidad y arquitectura.
            </motion.p>

            <motion.div className="info" variants={itemVariants}>
              <div>
                <span>Email</span>
                <p>timopereyra@gmail.com</p>
              </div>

              <div>
                <span>Ubicación</span>
                <p>Buenos Aires, Argentina</p>
              </div>

              <div>
                <span>Stack principal</span>
                <p>PHP · Laravel · JavaScript · MySQL</p>
              </div>
            </motion.div>

            <motion.div className="quote" variants={itemVariants}>
              “Enfocado en backend escalable, optimización de performance y
              entrega end-to-end de funcionalidades en producción.”
            </motion.div>
          </motion.div>

          <motion.div
            className="right"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.form
              className="glass"
              onSubmit={handleSubmit}
              whileHover={{
                y: -2,
                transition: {
                  duration: 0.25
                }
              }}
            >
              <div className="glow glow1" />
              <div className="glow glow2" />

              <div className="row">
                <div className="field">
                  <label>Nombre completo</label>
                  <input placeholder="Juan Pérez" />
                </div>

                <div className="field">
                  <label>Email profesional</label>
                  <input placeholder="empresa@correo.com" />
                </div>
              </div>

              <div className="row">
                <div className="field">
                  <label>Empresa (opcional)</label>
                  <input placeholder="Empresa S.A." />
                </div>
              </div>

              <div className="field">
                <div className="label-row">
                  <label>Mensaje</label>
                  <span>Soporta texto libre</span>
                </div>

                <textarea
                  placeholder="// Contame sobre el proyecto o posición..."
                  rows="5"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{
                  y: -2
                }}
                whileTap={{
                  scale: 0.98
                }}
                transition={{
                  duration: 0.2
                }}
              >
                <span>Enviar mensaje</span>
              </motion.button>
            </motion.form>
          </motion.div>

        </div>
      </main>
    </div>
  );
}