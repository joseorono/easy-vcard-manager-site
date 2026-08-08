import { STEPS } from "@/constants/site";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="border-y border-border bg-muted/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-wide text-primary uppercase">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Three steps, no sign-up in the way
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Open the app and you are already working. There is nothing to
            configure and nothing to wait for.
          </p>
        </div>

        <ol className="relative mt-12 grid gap-8 md:grid-cols-3 md:gap-6 md:before:absolute md:before:left-[16.66%] md:before:right-[16.66%] md:before:top-5 md:before:h-px md:before:bg-primary/25">
          {STEPS.map((step, index) => (
            <li key={step.title} className="relative z-10 flex gap-4 md:block md:text-center">
              <span
                aria-hidden="true"
                className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary text-sm font-semibold text-primary-foreground shadow-sm"
              >
                {index + 1}
              </span>
              <div className="rounded-xl border border-border bg-card p-5 md:mt-5">
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
