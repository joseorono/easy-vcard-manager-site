import { ArrowRight } from "lucide-react";

import { GithubIcon } from "@/components/github-icon";
import { buttonVariants } from "@/components/ui/button";
import { APP_URL, REPO_URL } from "@/constants/site";
import { cn } from "@/lib/utils";

export function CtaSection() {
  return (
    <section id="get-started" className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Open a .vcf, edit it, export it
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80 text-pretty">
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
                "h-11 w-full bg-background px-6 text-base text-foreground hover:bg-background/90 sm:w-auto"
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
                "h-11 w-full border border-primary-foreground/30 px-6 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"
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
