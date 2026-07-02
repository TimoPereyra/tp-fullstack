import { useEffect, useState } from "react";

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
     const sections = document.querySelectorAll("section[id]");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        console.log(
          section.id,
          "top:",
          Math.round(rect.top),
          "bottom:",
          Math.round(rect.bottom)
        );

        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          console.log("ACTIVE ->", section.id);
          setActiveSection(section.id);
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeSection;
}