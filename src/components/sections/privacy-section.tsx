import { Lock } from "lucide-react";

import { PRIVACY_POINTS } from "@/constants/site";

export function PrivacySection() {
  return (
    <section id="privacy" className="border-y border-border bg-primary/8">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          <div className="lg:max-w-sm">
            <p className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-primary uppercase">
              <Lock className="size-3.5" />
              Privacy by architecture
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              Your contacts never leave your device
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              This is not a promise we ask you to trust. There is simply no
              backend to send anything to.
            </p>
          </div>
          <dl className="grid flex-1 gap-8 sm:grid-cols-3">
            {PRIVACY_POINTS.map((point) => (
              <div key={point.title}>
                <dt className="text-sm font-semibold">{point.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {point.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
