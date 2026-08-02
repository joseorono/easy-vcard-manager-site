import Image from "next/image";
import { Heart } from "lucide-react";

import { GithubIcon } from "@/components/github-icon";
import {
  APP_URL,
  AUTHOR_NAME,
  AUTHOR_URL,
  FOOTER_PRODUCT_LINKS,
  REPO_URL,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/constants/site";

const resourceLinks = [
  { label: "Open the editor", href: APP_URL, external: true },
  { label: "Source on GitHub", href: REPO_URL, external: true },
  { label: "Report an issue", href: `${REPO_URL}/issues`, external: true },
  { label: "MIT license", href: `${REPO_URL}/blob/main/LICENSE`, external: true },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Image
                src="/vcf.svg"
                alt=""
                width={32}
                height={32}
                className="size-8 rounded-md"
              />
              <span className="font-semibold tracking-tight">{SITE_NAME}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {SITE_TAGLINE}
            </p>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="size-4" />
              joseorono/easy-vcard-manager
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-16">
            <div>
              <h2 className="text-sm font-semibold">Product</h2>
              <ul className="mt-3 space-y-2.5">
                {FOOTER_PRODUCT_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold">Resources</h2>
              <ul className="mt-3 space-y-2.5">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="inline-flex items-center gap-1.5">
            Made with
            <Heart className="size-3.5 text-primary" aria-label="love" />
            by{" "}
            <a
              href={AUTHOR_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              {AUTHOR_NAME}
            </a>
          </p>
          <p>Free and open source under the MIT license.</p>
        </div>
      </div>
    </footer>
  );
}
