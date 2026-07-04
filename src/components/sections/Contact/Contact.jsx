import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Contact.css";
import { sendContact } from "../../../services/api";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const formVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [feedback, setFeedback] = useState("");
  const [focused, setFocused] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (e) => setFocused((prev) => ({ ...prev, [e.target.name]: true }));
  const handleBlur = (e) => setFocused((prev) => ({ ...prev, [e.target.name]: false }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await sendContact(form);
      if (response.success) {
        setStatus("success");
        setFeedback("Mensaje enviado correctamente.");
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        throw new Error(response.message || "Error al enviar el mensaje.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setFeedback("Ocurrió un error al enviar el formulario.");
    }
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
              Construyamos <br /> algo sólido
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
              whileHover={{ y: -2, transition: { duration: 0.25 } }}
            >
              <div className="glow glow1" />
              <div className="glow glow2" />

              <AnimatePresence mode="wait">
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`feedback-msg ${status}`}
                    style={{ marginBottom: "1rem", padding: "0.5rem", borderRadius: "4px", textAlign: "center" }}
                  >
                    {feedback}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="row">
                <div className="field">
                  <label style={{ color: focused.name ? "#ddb8ff" : "" }}>Nombre completo</label>
                  <input type="text" name="name" placeholder="Juan Pérez" value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required />
                </div>
                <div className="field">
                  <label style={{ color: focused.email ? "#ddb8ff" : "" }}>Email profesional</label>
                  <input type="email" name="email" placeholder="empresa@correo.com" value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required />
                </div>
              </div>

              <div className="row">
                <div className="field">
                  <label style={{ color: focused.company ? "#ddb8ff" : "" }}>Empresa (opcional)</label>
                  <input type="text" name="company" placeholder="Empresa S.A." value={form.company} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
                </div>
              </div>

              <div className="field">
                <div className="label-row">
                  <label style={{ color: focused.message ? "#ddb8ff" : "" }}>Mensaje</label>
                  <span>Soporta texto libre</span>
                </div>
                <textarea name="message" placeholder="// Contame sobre el proyecto o posición..." rows="5" value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required />
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ y: status === "loading" ? 0 : -2 }}
                whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span>{status === "loading" ? "Enviando..." : "Enviar mensaje"}</span>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </main>
    </div>
  );
}