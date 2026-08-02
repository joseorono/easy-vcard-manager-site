import { Plus } from "lucide-react";

import { FAQS } from "@/constants/site";

export function FaqSection() {
  return (
    <section id="faq" className="mx-auto w-full max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-xs font-medium tracking-wide text-primary uppercase">
          FAQ
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Questions worth answering
        </h2>
      </div>

      <div className="mt-12 divide-y divide-border border-y border-border">
        {FAQS.map((faq) => (
          <details key={faq.question} className="group py-1">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              {faq.question}
              <Plus
                aria-hidden="true"
                className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-45"
              />
            </summary>
            <p className="pb-5 text-sm leading-relaxed text-muted-foreground">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
