import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return "dark";
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const t = getInitialTheme();
    setTheme(t);
    document.documentElement.classList.toggle("dark", t === "dark");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      window.localStorage.setItem("theme", next);
    } catch {}
  };

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={`relative inline-flex h-10 w-[68px] items-center rounded-full glass-strong px-1 ring-1 ring-border transition hover:ring-primary/60 ${className}`}
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className={`absolute top-1 size-8 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center ${
          isDark ? "left-1" : "left-[34px]"
        }`}
      >
        {isDark ? <Moon size={15} /> : <Sun size={15} />}
      </motion.span>
      <span className="ml-1 size-8 flex items-center justify-center opacity-40">
        <Moon size={14} />
      </span>
      <span className="size-8 flex items-center justify-center opacity-40">
        <Sun size={14} />
      </span>
    </button>
  );
}
