"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

import { FAQS } from "@/constants/site";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question} className="py-1">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left text-base font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {faq.question}
                <Plus
                  aria-hidden="true"
                  className={cn(
                    "size-4 shrink-0 text-muted-foreground transition-transform duration-300",
                    isOpen && "rotate-45",
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid min-h-0 transition-[grid-template-rows,opacity] duration-300 ease-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
