import Image from "next/image";
import {
  ArrowRight,
  Download,
  MonitorDown,
  Smartphone,
  WifiOff,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
  APP_URL,
  PWA_INSTALL_URL,
  WINDOWS_INSTALLER_URL,
} from "@/constants/site";
import { cn } from "@/lib/utils";

const platforms = [
  {
    icon: Smartphone,
    title: "Install as a mobile app",
    description:
      "Add it to your home screen from the browser. The interface adapts to your screen, whether you are using a phone, tablet or desktop.",
  },
  {
    icon: MonitorDown,
    title: "Install on your desktop",
    description:
      "The same app installs as a PWA on desktop, and a Windows desktop build is available if you prefer a standalone window.",
  },
  {
    icon: WifiOff,
    title: "Keep working without a network",
    description:
      "A service worker caches the app, so an offline reload still opens your library. Nothing breaks on a plane or an air-gapped machine.",
  },
];

export function InstallSection() {
  return (
    <section id="install" className="border-y border-border bg-muted/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-medium tracking-wide text-primary uppercase">
              Install anywhere
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Runs in the browser. Installs like an app.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              One codebase, three ways to use it — web app, installable PWA, and a
              desktop build. All of them fully offline.
            </p>

            <ul className="mt-8 space-y-6">
              {platforms.map((platform) => (
                <li key={platform.title} className="flex items-start gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary shadow-sm shadow-primary/10">
                    <platform.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{platform.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {platform.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

          </div>

          <div className="relative flex items-end justify-center gap-4 overflow-hidden sm:gap-6">
            <Image
              src="/svg/6.svg"
              alt=""
              width={220}
              height={220}
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -bottom-8 z-0 size-44 opacity-10 sm:size-52"
            />
            <div className="relative z-10 min-w-0 max-w-70 flex-1 overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
              <Image
                src="/screenshots/editor-mobile-form.png"
                alt="The contact form on a phone, with import and download actions pinned to the bottom"
                width={373}
                height={797}
                sizes="(min-width: 1024px) 280px, 45vw"
                className="h-auto w-full"
              />
            </div>
            <div className="relative z-10 min-w-0 max-w-70 flex-1 overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
              <Image
                src="/screenshots/editor-mobile-preview.png"
                alt="The live preview panel on a phone, showing the visual card, code and QR tabs"
                width={373}
                height={797}
                sizes="(min-width: 1024px) 280px, 45vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>

        <div
          id="download"
          className="mt-12 scroll-mt-24 border-t border-border pt-8"
        >
          <p className="text-center text-sm font-semibold tracking-wide text-foreground">
            Choose how to use it
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className={cn(
                buttonVariants({ size: "lg" }),
                "cta-primary h-auto min-h-12 justify-between px-4 text-left text-sm"
              )}
            >
              <span>Open in Browser</span>
              <ArrowRight className="size-4 shrink-0" />
            </a>
            <a
              href={PWA_INSTALL_URL}
              target="_blank"
              rel="noreferrer noopener"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-auto min-h-12 justify-between px-4 text-left text-sm"
              )}
            >
              <span>Install the PWA</span>
              <MonitorDown className="size-4 shrink-0" />
            </a>
            <a
              href={WINDOWS_INSTALLER_URL}
              target="_blank"
              rel="noreferrer noopener"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-auto min-h-12 justify-between px-4 text-left text-sm"
              )}
            >
              <span>Download for Windows</span>
              <Download className="size-4 shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
