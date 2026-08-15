import { STEPS } from "@/constants/site";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="border-y border-border bg-muted/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="reveal max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Three steps, no sign-up in the way
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Open the app and you are already working. There is nothing to
            configure and nothing to wait for.
          </p>
        </div>

        <ol className="reveal mt-12 max-w-3xl md:pl-[8%]">
          {STEPS.map((step, index) => (
            <li key={step.title} className="relative flex gap-5 pb-10 last:pb-0 sm:gap-6">
              {index < STEPS.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute top-12 bottom-0 left-[1.375rem] w-px -translate-x-1/2 bg-border"
                />
              ) : null}
              <span className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-card font-mono text-sm font-semibold text-primary">
                {index + 1}
              </span>
              <div className="pt-1.5">
                <h3 className="text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
