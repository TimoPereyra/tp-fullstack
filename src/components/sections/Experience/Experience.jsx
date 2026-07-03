import { useEffect } from "react";
import "./Experience.css";

export default function Experience() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="experience">
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <section className="container">

        {/* HEADER */}
        <header className="header reveal">
          <span className="kicker">Trayectoria profesional</span>

          <h1>
            Experiencia <span>Profesional</span>
          </h1>

          <p>
            Desarrollador Full Stack especializado en PHP, Laravel y sistemas
            backend escalables para entornos productivos.
          </p>
        </header>

        <div className="timeline-line" />

        {/* ========================= UAKIKA ========================= */}
        <div className="item left">

          <div className="card reveal">
            <span className="date">NOV 2023 — MAR 2025</span>

            <h3>Analista Desarrollador</h3>

            <span className="company">Uakika</span>

            <ul>
              <li>Mantenimiento simultáneo de dos sistemas web en producción.</li>
              <li>Optimización de consultas SQL en módulos de alta carga.</li>
              <li>Desarrollo completo de funcionalidades desde el análisis hasta producción.</li>
              <li>Participación en decisiones técnicas y planificación de sprints.</li>
            </ul>

            <div className="tags">
              <span>Laravel</span>
              <span>CodeIgniter</span>
              <span>MySQL</span>
              <span>jQuery</span>
            </div>
          </div>

          <div className="media reveal">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2YVO2saWT6bToEDjMrgRDWaB3JAIYfLGDafutD_10qcTHiYuz-g2p1piuZ1YDYt_-9y2yIW8v2-Sb-CIvqunhCx7OlMYApR9z9daBNI8uAFuHNy2iQAyVOFAXpH7eNqgB5yhS5_7v9xruIqoDw0tAhFio47R-UJUxH_3uilUFwp5TT4_U6ZdPU39hYLuZmR5VW6beqdKeVRGnGUd4q0GnpXiBUN6VYW4AhTfUy0fz-FyfxsM3qNrI7i_HNcWVhvXXTdnYzPpd6Eft"
              alt="Proyecto empresarial desarrollado en Laravel"
            />
          </div>

        </div>

        {/* ========================= HEALTH ========================= */}
        <div className="item right">

          <div className="media reveal">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiw3gQapP0XKFQU4Ky3y0p2crZ8FNCIKHYVV591MF5MnwJKsP4JBzjPlzuOKq6jI5qcGeFv2GaEpuoQyQFbNTKaTGAgu2XwDWujwPN6wUuUnmY5fhmUsUxvVmSwfc8i1KnavrD91Wxn0ZrN8C0b9JLhQG0KzFxuPrI0B3FS4GSvomc54PHzFSFUOlXaSjD0d1gDyyDp-suIeq-y_kmu57DE265llGsdS64Pz0moNfYoMpZ33K1cjCuicll84fQBdEBJscjqVNhHzDj"
              alt="Modernización de sistemas clínicos"
            />
          </div>

          <div className="card reveal">
            <span className="date alt">ABR 2023 — NOV 2023</span>

            <h3>Analista Desarrollador</h3>

            <span className="company alt">
              Health Management Solutions
            </span>

            <ul>
              <li>Migración de sistemas Oracle Forms hacia Oracle APEX.</li>
              <li>Desarrollo en PL/SQL y automatización de procesos críticos.</li>
              <li>Integración y sincronización con sistemas clínicos externos.</li>
              <li>Resolución de incidencias y soporte en producción.</li>
            </ul>

            <div className="tags alt">
              <span>Oracle APEX</span>
              <span>PL/SQL</span>
              <span>Oracle Database</span>
              <span>Integraciones</span>
            </div>
          </div>

        </div>

        {/* ========================= TESINA ========================= */}
        <div className="item left">

          <div className="card reveal">
            <span className="date">JUN 2022 — NOV 2022</span>

            <h3>Desarrollador Full Stack</h3>

            <span className="company">Proyecto de Tesina</span>

            <ul>
              <li>Diseño e implementación de un sistema web de pedidos multicategoría.</li>
              <li>Desarrollo integral del frontend, backend y base de datos.</li>
              <li>Implementación de reglas de negocio y gestión dinámica de servicios.</li>
            </ul>

            <div className="tags">
              <span>PHP</span>
              <span>JavaScript</span>
              <span>MySQL</span>
              <span>HTML/CSS</span>
            </div>
          </div>

          <div className="media reveal">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj6vBumPA2u46oR-S2HDNQLCY1ERMdOHJ3e5xDV0O7GabzrK5be-H1VjhZPJHDdrvYooJRmv-4PZY9QG3kiTUEC0l1lynlN-UgZmj30IeJogDMOERWNIfJP1LvBpiIMeScgGpg5MBo2r5UUZEjIuQzTy6QQgdlFjoQ3PHdH5XZxRKafooLWjP1_wZdqkjvEe5s6ooAho8AK2TzlLaomjrAT-P54zqlwGdA4RszXgqb0SQ5PuH8zwLy1H7xVnW3G8WWkyX-DpviyYjV"
              alt="Sistema web desarrollado como proyecto final"
            />
          </div>

        </div>

      </section>
    </main>
  );
}