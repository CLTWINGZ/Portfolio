"use client";

import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") || "system";
    setTheme(stored);
    applyTheme(stored);
  }, []);

  const applyTheme = (value: string) => {
    const root = document.documentElement;
    const shouldDark =
      value === "dark" ||
      (value === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    root.classList.toggle("dark", shouldDark);
  };

  const onToggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  };

  if (!mounted) return null;

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={onToggle}
      className="rounded-full border border-border px-3 py-2 text-sm font-medium"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
};
