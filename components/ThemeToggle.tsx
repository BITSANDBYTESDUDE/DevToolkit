"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({
  dark,
  onToggle,
}: {
  dark?: boolean;
  onToggle?: () => void;
}) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="btn-ghost h-9 w-9 p-0" aria-label="Toggle theme">
        <Sun className="h-4 w-4 text-zinc-400" />
      </button>
    );
  }

  const isDark = dark !== undefined ? dark : resolvedTheme === "dark";

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setTheme(isDark ? "light" : "dark");
    }
  };

  return (
    <button
      className="btn-ghost h-9 w-9 p-0 transition-transform active:scale-95"
      onClick={handleToggle}
      aria-label={`Switch to ${isDark ? "Light" : "Dark"} mode`}
      title={`Switch to ${isDark ? "Light" : "Dark"} mode`}
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-amber-400 transition-all hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 text-indigo-600 transition-all hover:-rotate-12" />
      )}
    </button>
  );
}
