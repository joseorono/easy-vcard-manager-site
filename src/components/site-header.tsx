"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import { GithubIcon } from "@/components/github-icon";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { APP_URL, NAV_LINKS, REPO_URL, SITE_NAME } from "@/constants/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md supports-backdrop-filter:bg-background/70">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <Image
            src="/vcf.svg"
            alt=""
            width={32}
            height={32}
            className="size-8 shrink-0 rounded-md"
          />
          <span className="text-[0.95rem] font-semibold tracking-tight whitespace-nowrap">
            {SITE_NAME}
          </span>
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${SITE_NAME} on GitHub`}
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon-lg" }),
              "hidden text-muted-foreground hover:text-foreground sm:inline-flex"
            )}
          >
            <GithubIcon className="size-5" />
          </a>
          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(buttonVariants({ size: "lg" }), "px-4")}
          >
            <span className="sm:hidden">Open app</span>
            <span className="hidden sm:inline">Open the editor</span>
          </a>
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
            className={cn(
              buttonVariants({ variant: "outline", size: "icon-lg" }),
              "md:hidden"
            )}
          >
            {isMenuOpen ? (
              <X className="size-4" />
            ) : (
              <Menu className="size-4" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border/70 bg-background md:hidden"
        >
          <ul className="mx-auto flex w-full max-w-6xl flex-col px-4 py-2 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-md px-2 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <ThemeToggle variant="menu-item" />
            </li>
            <li>
              <a
                href={REPO_URL}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 rounded-md px-2 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <GithubIcon className="size-4" />
                View on GitHub
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
