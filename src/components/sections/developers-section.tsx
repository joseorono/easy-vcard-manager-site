import { ArrowRight, FileText, Scale, Terminal } from "lucide-react";

import { GithubIcon } from "@/components/github-icon";
import { REPO_URL } from "@/constants/site";

const VCF_SAMPLE = `BEGIN:VCARD
VERSION:4.0
N:Arriaga;Marisol;Beatriz;Dra;
FN:Dra Marisol Beatriz Arriaga
NICKNAME:Mari
ORG:Exologic;Engineering
TITLE:Systems Architect
TEL;TYPE=cell:+525541829037
EMAIL;TYPE=work:marisol.arriaga@example.com
TZ:America/Mexico_City
X-TELEGRAM:@marisolarriaga
END:VCARD`;

const VCF_LINES = VCF_SAMPLE.split("\n");

export function DevelopersSection() {
  return (
    <section id="developers" className="border-y border-border bg-muted/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="reveal grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
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

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary shadow-sm shadow-primary/10">
                  <Terminal className="size-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold">Inspect the output</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    The raw VCF view makes the result easy to inspect, copy and
                    use in technical workflows.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary shadow-sm shadow-primary/10">
                  <Scale className="size-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold">
                    MIT licensed, fully auditable
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Every important behavior is visible in the source, making it
                    easy to audit how your contacts are handled and verify that
                    privacy stays local.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="github-secondary mt-8 h-11 w-full px-6 text-base sm:w-auto"
            >
              <GithubIcon className="size-4" />
              <span
                className="github-secondary-label"
                data-label="View on GitHub"
              >
                View on GitHub
              </span>
              <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-[var(--code-surface)] shadow-xl">
            <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
              <span className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <FileText aria-hidden="true" className="size-3.5" />
                contact.vcf
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                vCard 4.0
              </span>
            </div>
            <pre className="overflow-x-auto p-4 sm:p-6">
              <code className="font-mono text-xs leading-relaxed text-[var(--code-foreground)] sm:text-sm">
                {VCF_LINES.map((line) => {
                  const separator = line.indexOf(":");
                  const property =
                    separator === -1 ? line : line.slice(0, separator);
                  const value = separator === -1 ? "" : line.slice(separator);

                  return (
                    <span key={line} className="block">
                      <span className="text-[var(--code-key)]">{property}</span>
                      {value}
                    </span>
                  );
                })}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
