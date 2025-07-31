"use client";
//Next.
import { useEffect, useState } from "react";
//Components.
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
//Utils(Interfaces).
import { Laptop, Moon, Sun } from "lucide-react";

//Theme Switcher
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    setTheme(newTheme);
  };

  return (
    <Button variant="secondary" onClick={toggleTheme}>
      {theme === "dark" ? "Light" : "Dark"}
    </Button>
  );
} 