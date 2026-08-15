import { EyeOff, Lock, ServerOff } from "lucide-react";

import { PRIVACY_POINTS } from "@/constants/site";

const POINT_ICONS = [ServerOff, Lock, EyeOff];

export function PrivacySection() {
  return (
    <section id="privacy" className="border-b border-border bg-primary/8">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="reveal flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-20">
          <div className="lg:max-w-xs lg:shrink-0">
            <h2 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              Your contacts never leave your device
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              This is not a promise we ask you to trust. There is simply no
              backend to send anything to.
            </p>
          </div>
          <dl className="grid flex-1 gap-x-10 gap-y-8 sm:grid-cols-3">
            {PRIVACY_POINTS.map((point, index) => {
              const Icon = POINT_ICONS[index] ?? ServerOff;
              return (
                <div key={point.title}>
                  <dt className="flex flex-col items-start gap-3 text-sm font-semibold">
                    <Icon className="size-5 text-primary" />
                    <span>{point.title}</span>
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {point.description}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
