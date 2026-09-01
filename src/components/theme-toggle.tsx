"use client";

import { Moon, Sun } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { THEME_STORAGE_KEY } from "@/constants/site";
import { cn } from "@/lib/utils";

export function ThemeToggle({
  className,
  variant = "icon",
}: {
  className?: string;
  variant?: "icon" | "menu-item";
}) {
  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    const nextTheme = isDark ? "dark" : "light";

    document.documentElement.style.colorScheme = nextTheme;

    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Storage can be unavailable (private mode, blocked cookies) — ignore.
    }
  }

  if (variant === "menu-item") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={cn(
          "flex w-full items-center gap-2 rounded-md px-2 py-3 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
          className
        )}
      >
        <Sun className="hidden size-4 dark:block" />
        <Moon className="size-4 dark:hidden" />
        <span className="hidden dark:inline">Light theme</span>
        <span className="dark:hidden">Dark theme</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark theme"
      className={cn(
        buttonVariants({ variant: "ghost", size: "icon-lg" }),
        "text-muted-foreground hover:text-foreground",
        className
      )}
    >
      <Sun className="hidden size-4 dark:block" />
      <Moon className="size-4 dark:hidden" />
    </button>
  );
}
