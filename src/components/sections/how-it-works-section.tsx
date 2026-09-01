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

        <ol className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="group relative min-h-44 overflow-hidden rounded-2xl border border-border bg-card/90 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-1 -bottom-5 z-0 text-[8rem] leading-none font-black tracking-[-0.08em] text-primary/15 select-none transition-colors group-hover:text-primary/20"
              >
                {index + 1}
              </span>
              <div className="relative z-10 max-w-[82%]">
                <p className="text-[10px] font-semibold tracking-[0.18em] text-primary uppercase">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-base font-semibold">{step.title}</h3>
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
