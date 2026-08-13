import { ArrowRight } from "lucide-react";
import type { AnchorHTMLAttributes } from "react";

import { GithubIcon } from "@/components/github-icon";
import { REPO_URL } from "@/constants/site";
import { cn } from "@/lib/utils";

type GithubButtonProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "children" | "href"
> & {
  label?: string;
};

export function GithubButton({
  label = "View on GitHub",
  className,
  ...props
}: GithubButtonProps) {
  return (
    <a
      href={REPO_URL}
      target="_blank"
      rel="noreferrer noopener"
      {...props}
      className={cn(
        "github-secondary cta-secondary h-11 w-full rounded-lg px-6 text-base sm:w-auto",
        className
      )}
    >
      <GithubIcon className="size-4" />
      <span className="github-secondary-label" data-label={label}>
        {label}
      </span>
      <ArrowRight className="size-4" />
    </a>
  );
}
