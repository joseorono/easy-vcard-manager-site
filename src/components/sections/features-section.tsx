import Image from "next/image";
import {
  Boxes,
  Check,
  Download,
  Eye,
  FileText,
  Upload,
  WifiOff,
  type LucideIcon,
} from "lucide-react";

import { FEATURES } from "@/constants/site";
import { cn } from "@/lib/utils";

const FEATURE_ICONS: Record<string, LucideIcon> = {
  library: Boxes,
  editor: FileText,
  preview: Eye,
  import: Upload,
  export: Download,
  offline: WifiOff,
};

/*
 * Bento rhythm: 7/5, then 4/8, then 8/4. Six cells for six features, mirrored
 * across the middle row so the grid never reads as a row of identical cards.
 * The three wide cells carry an illustration so the grid is not text-on-card
 * all the way down.
 */
const FEATURE_LAYOUT: Record<
  string,
  { span: string; illustration?: string; tinted?: boolean }
> = {
  library: { span: "md:col-span-7", illustration: "/svg/2.svg", tinted: true },
  editor: { span: "md:col-span-5" },
  preview: { span: "md:col-span-4" },
  import: { span: "md:col-span-8", illustration: "/svg/8.svg" },
  export: { span: "md:col-span-8", illustration: "/svg/11.svg" },
  offline: { span: "md:col-span-4" },
};

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="reveal max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Everything the online converters never gave you
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          A library, a full editor over the vCard spec, and every export format
          you need, with no ads, no limits and no sign-up.
        </p>
      </div>

      <ul className="reveal mt-12 grid grid-cols-1 gap-4 md:grid-cols-12">
        {FEATURES.map((feature) => {
          const Icon = FEATURE_ICONS[feature.icon] ?? FileText;
          const layout = FEATURE_LAYOUT[feature.icon] ?? { span: "md:col-span-4" };

          return (
            <li
              key={feature.title}
              className={cn(
                "group relative isolate flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40",
                layout.tinted &&
                  "bg-linear-to-br from-primary/12 via-card to-card",
                layout.span
              )}
            >
              {layout.illustration ? (
                <Image
                  src={layout.illustration}
                  alt=""
                  width={200}
                  height={200}
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-4 -right-4 -z-10 size-40 opacity-10 transition-transform duration-500 group-hover:scale-105"
                />
              ) : null}

              <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary shadow-sm shadow-primary/10">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold">{feature.title}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
              <ul className="mt-5 space-y-2 border-t border-border pt-4">
                {feature.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
