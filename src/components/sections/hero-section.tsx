import Image from "next/image";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

import { GithubIcon } from "@/components/github-icon";
import { buttonVariants } from "@/components/ui/button";
import { APP_URL, HERO_HIGHLIGHTS, REPO_URL } from "@/constants/site";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-160 hero-grid"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-128 hero-glow"
      />
      <div className="mx-auto w-full max-w-6xl px-4 pt-16 pb-12 sm:px-6 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
            <ShieldCheck className="size-3.5 text-primary" />
            Free, open source, and 100% local
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            A real editor for the{" "}
            <span className="text-primary">.vcf files</span> your phone exports
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Easy vCard Manager is an offline-first contact library. Import, edit,
            search and export vCard files right in your browser — no account, no
            upload, no server to send your contacts to.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 w-full px-6 text-base sm:w-auto"
              )}
            >
              Open the editor
              <ArrowRight className="size-4" />
            </a>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer noopener"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 w-full px-6 text-base sm:w-auto"
              )}
            >
              <GithubIcon className="size-4" />
              View on GitHub
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {HERO_HIGHLIGHTS.map((highlight) => (
              <li key={highlight} className="inline-flex items-center gap-1.5">
                <Check className="size-4 text-primary" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-14 max-w-5xl">
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-primary/10">
            <Image
              src="/screenshots/editor-desktop.png"
              alt="The Easy vCard Manager editor: a structured contact form beside a live business-card preview"
              width={1024}
              height={544}
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
