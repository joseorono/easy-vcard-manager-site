import Image from "next/image";
import { ArrowRight, MonitorDown, Smartphone, WifiOff } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { APP_URL } from "@/constants/site";
import { cn } from "@/lib/utils";

const platforms = [
  {
    icon: Smartphone,
    title: "Install as a mobile app",
    description:
      "Add it to your home screen from the browser. On small screens the form takes the full width, while the live preview and the contact list slide in when you need them.",
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
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
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

            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 h-11 w-full px-6 text-base sm:w-auto"
              )}
            >
              Launch the app
              <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="flex items-end justify-center gap-4 sm:gap-6">
            <div className="w-1/2 max-w-70 overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
              <Image
                src="/screenshots/editor-mobile-form.png"
                alt="The contact form on a phone, with import and download actions pinned to the bottom"
                width={373}
                height={797}
                sizes="(min-width: 1024px) 280px, 45vw"
                className="h-auto w-full"
              />
            </div>
            <div className="w-1/2 max-w-70 overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
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
      </div>
    </section>
  );
}
