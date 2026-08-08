import { ArrowRight } from "lucide-react";

import { GithubIcon } from "@/components/github-icon";
import { buttonVariants } from "@/components/ui/button";
import { APP_URL, REPO_URL } from "@/constants/site";
import { cn } from "@/lib/utils";

export function CtaSection() {
  return (
    <section
      id="get-started"
      className="relative isolate overflow-hidden border-t border-primary/20 bg-primary/8 text-foreground dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-50"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 z-0 h-56 w-56 cta-grid"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-0 h-56 w-56 rotate-180 cta-grid"
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Open a .vcf, edit it, export it
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty dark:text-zinc-300">
            For one contact or hundreds. No account, no upload, no cost — just open
            the editor.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 w-full bg-primary px-6 text-base text-primary-foreground hover:bg-primary/90 sm:w-auto"
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
                buttonVariants({ variant: "ghost", size: "lg" }),
                "h-11 w-full border border-primary/30 px-6 text-base text-foreground hover:bg-primary/10 hover:text-foreground dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900 dark:hover:text-zinc-50 sm:w-auto"
              )}
            >
              <GithubIcon className="size-4" />
              Star it on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
