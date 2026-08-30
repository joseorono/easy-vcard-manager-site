import { ArrowRight } from "lucide-react";

import { GithubButton } from "@/components/github-button";
import { buttonVariants } from "@/components/ui/button";
import { APP_URL } from "@/constants/site";
import { cn } from "@/lib/utils";

export function CtaSection() {
  return (
    <section
      id="get-started"
      className="relative isolate overflow-hidden border-t border-border bg-primary/8 text-foreground"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 z-0 h-56 w-56 cta-grid"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 z-1 h-72 w-72 cta-glow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-0 h-56 w-56 rotate-180 cta-grid"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-1 h-72 w-72 rotate-180 cta-glow"
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Open a .vcf, edit it, export it
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            For one contact or hundreds. No account, no upload, no cost. Just
            open the editor.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className={cn(
                buttonVariants({ size: "lg" }),
                "cta-primary h-11 w-full px-6 text-base sm:w-auto"
              )}
            >
              Open in Browser
              <ArrowRight className="size-4" />
            </a>
            <GithubButton label="Star it on GitHub" />
          </div>
        </div>
      </div>
    </section>
  );
}
