import { motion } from "framer-motion";

import CyberBackground from "../../components/ui/CyberBackground/CyberBackground";
import Navbar from "../../components/layout/Navbar/Navbar";
import Hero from "../../components/sections/Hero/Hero";
import About from "../../components/sections/About/About";
import Experience from "../../components/sections/Experience/Experience";
import Contact from "../../components/sections/Contact/Contact";
import Footer from "../../components/layout/Footer/Footer";
const pageVariants = {
  hidden: {
    opacity: 0,
    y: 10,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <CyberBackground />
      </div>

      <Navbar />
      {/* UI */}
      <motion.div
        className="relative z-10"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >

        <section
          id="home"
          className="min-h-screen flex items-center"
        >
          <Hero />
        </section>

        <section
          id="about"
          className="min-h-screen"
        >
          <About />
        </section>
        
        <section
          id="experience"
          className="min-h-screen"
        >
          <Experience />
        </section>

        <section
          id="contact"
          className="min-h-screen"
        >
          <Contact />
        </section>
        <Footer />
      </motion.div>
    </div>
  );
}

export default Home;
