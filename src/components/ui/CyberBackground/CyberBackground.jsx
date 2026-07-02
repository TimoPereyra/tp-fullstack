import { useEffect, useRef } from "react";

const codeSnippets = [
  "const app = express();",
  'import { motion } from "framer-motion";',
  "def compile_assets(path):",
  "return await db.query(sql);",
  "class Architect {",
  '<div className="grid">',
  "npm run build:production",
  'git commit -m "feat: core UI"',
  "while (stack.length > 0) {",
  "export default function Page() {",
  "filter: blur(150px);"
];

class Particle {
  constructor(width, height, ctx) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.width;
    this.y = Math.random() * this.height;
    this.text =
      codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    this.speed = 0.5 + Math.random() * 1.5;
    this.opacity = 0;
    this.maxOpacity = 0.1 + Math.random() * 0.4;
    this.fontSize = 10 + Math.random() * 4;
  }

  update() {
    const dx = (this.width / 2 - this.x) * 0.005 * this.speed;
    const dy = (this.height / 2 - this.y) * 0.005 * this.speed;

    this.x += dx;
    this.y += dy;

    const dist = Math.sqrt(
      Math.pow(this.width / 2 - this.x, 2) +
        Math.pow(this.height / 2 - this.y, 2)
    );

    if (dist < 100) {
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.reset();
    } else if (this.opacity < this.maxOpacity) {
      this.opacity += 0.005;
    }
  }

  draw(ctx) {
    ctx.font = `${this.fontSize}px monospace`;
    ctx.fillStyle = `rgba(200, 200, 220, ${this.opacity})`;
    ctx.fillText(this.text, this.x, this.y);
  }
}

export default function CyberBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = Array.from(
      { length: 25 },
      () => new Particle(width, height, ctx)
    );

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={canvasRef} style={styles.canvas} />;
}

const styles = {
  canvas: {
    position: "fixed",
    inset: 0,
    zIndex: 0,
    opacity: 0.35,
  },
};