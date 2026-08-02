import { Scale, Terminal } from "lucide-react";

import { GithubIcon } from "@/components/github-icon";
import { buttonVariants } from "@/components/ui/button";
import { REPO_URL } from "@/constants/site";
import { cn } from "@/lib/utils";

const VCF_SAMPLE = `BEGIN:VCARD
VERSION:4.0
N:Doe;Jhon;William;Dr;Jr.
FN:Dr Jhon William Doe Jr.
NICKNAME:Jhonny
ORG:Exologic;Engineering
TITLE:Systems Architect
TEL;TYPE=cell:+15551234567
EMAIL;TYPE=work:jhon@example.com
TZ:America/New_York
X-TELEGRAM:@jhonny
END:VCARD`;

export function DevelopersSection() {
  return (
    <section
      id="developers"
      className="border-y border-border bg-muted/40"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-medium tracking-wide text-primary uppercase">
              For technical users
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              See the actual output, not a black box
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              The Code tab shows the exact VCF the app will write, ready to copy.
              Switch the target version and watch the properties change.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Terminal className="size-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold">Drive it from an agent</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    The editor registers WebMCP tools, so agentic browsers can read
                    the current contact, fill fields, import vCard text, export the
                    .vcf, or clear the form.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Scale className="size-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold">MIT licensed, auditable</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    React, TypeScript and Vite, with IndexedDB for storage. Read the
                    code, fork it, or open a pull request.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer noopener"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "mt-8 h-11 w-full px-6 text-base sm:w-auto"
              )}
            >
              <GithubIcon className="size-4" />
              Read the source
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-950 shadow-xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span aria-hidden="true" className="size-2.5 rounded-full bg-white/20" />
              <span aria-hidden="true" className="size-2.5 rounded-full bg-white/20" />
              <span aria-hidden="true" className="size-2.5 rounded-full bg-white/20" />
              <span className="ml-2 font-mono text-xs text-zinc-400">
                contact.vcf
              </span>
            </div>
            <pre className="overflow-x-auto p-4 sm:p-6">
              <code className="font-mono text-xs leading-relaxed text-zinc-100 sm:text-sm">
                {VCF_SAMPLE}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
