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

const FEATURE_ICONS: Record<string, LucideIcon> = {
  library: Boxes,
  editor: FileText,
  preview: Eye,
  import: Upload,
  export: Download,
  offline: WifiOff,
};

export function FeaturesSection() {
  return (
    <section id="features" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-medium tracking-wide text-primary uppercase">
          Features
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Everything the online converters never gave you
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          A library, a full editor over the vCard spec, and every export format
          you need — with no ads, no limits and no sign-up.
        </p>
      </div>
      <ul className="mt-8 flex flex-wrap gap-2 text-xs font-medium text-muted-foreground">
        {["100% local", "No account", "vCard 2.1 / 3.0 / 4.0", "QR + image export"].map((badge) => (
          <li key={badge} className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5">{badge}</li>
        ))}
      </ul>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => {
          const Icon = FEATURE_ICONS[feature.icon] ?? FileText;

          return (
            <li
              key={feature.title}
              className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary shadow-sm shadow-primary/10">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
              <ul className="mt-4 space-y-2 border-t border-border pt-4">
                {feature.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-muted-foreground">
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
