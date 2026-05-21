import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-[3px] bg-transparent pointer-events-none">
      <motion.div
        style={{ width: `${progress}%` }}
        className="h-full bg-gradient-to-r from-primary via-accent to-primary shadow-[0_0_18px_rgba(255,170,80,0.7)]"
      />
    </div>
  );
}

export function Typing({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const speed = del ? 50 : 110;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next.length === 0) {
          setDel(false);
          setI((v) => v + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return (
    <span className="text-gradient font-display font-semibold">
      {text}
      <span className="ml-0.5 inline-block w-[3px] h-[1em] -mb-1 bg-primary animate-pulse align-middle" />
    </span>
  );
}

export function FadeIn({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  big,
  title,
  subtitle,
  center = true,
}: {
  big: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <FadeIn className={`relative ${center ? "text-center" : ""} mb-16`}>
      <h2
        className={`pointer-events-none absolute inset-x-0 -top-6 select-none font-display text-[14vw] md:text-[8rem] font-black leading-none tracking-tight text-foreground/[0.04] ${
          center ? "" : "text-left"
        }`}
      >
        {big}
      </h2>
      <div className="relative">
        <p className="text-xs uppercase tracking-[0.4em] text-primary/80 mb-3">{big}</p>
        <h3 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
          {title}
        </h3>
        {subtitle && (
          <p className={`mt-4 text-muted-foreground max-w-2xl ${center ? "mx-auto" : ""}`}>
            {subtitle}
          </p>
        )}
      </div>
    </FadeIn>
  );
}

export function Counter({ to, label }: { to: number; label: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let start = 0;
    const dur = 1600;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(start + (to - start) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    const el = document.getElementById(`counter-${label}`);
    if (el) io.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [to, label]);
  return (
    <div id={`counter-${label}`} className="text-center">
      <div className="font-display text-5xl md:text-6xl font-bold text-gradient">
        {n}
        <span className="text-primary">+</span>
      </div>
      <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}
