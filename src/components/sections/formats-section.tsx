import { Braces, Download, Image as ImageIcon, QrCode } from "lucide-react";

import { SUPPORTED_FIELDS, VCARD_VERSIONS } from "@/constants/site";

const exportTargets = [
  { icon: Download, label: ".vcf file", hint: "vCard 2.1, 3.0 or 4.0" },
  { icon: QrCode, label: "QR code", hint: "PNG or SVG, scannability checked" },
  { icon: ImageIcon, label: "Contact card image", hint: "For slides and signatures" },
  { icon: Braces, label: "Raw VCF", hint: "Copy straight to the clipboard" },
];

export function FormatsSection() {
  return (
    <section id="formats" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-medium tracking-wide text-primary uppercase">
          Format depth
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          We don&apos;t quietly drop your data
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          Most tools keep the name and the phone number and throw away the rest.
          Easy vCard Manager reads and writes the parts of the spec other editors
          ignore — and lets you choose the version you emit.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {VCARD_VERSIONS.map((item) => (
          <div key={item.version} className="rounded-xl border border-border bg-card p-6">
            <p className="font-mono text-sm text-muted-foreground">vCard</p>
            <p className="mt-1 text-3xl font-semibold tracking-tight text-primary">
              {item.version}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-5">
        <div className="rounded-xl border border-border bg-card p-6 lg:col-span-3">
          <h3 className="text-base font-semibold">Fields we keep</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Beyond names, phones, emails and addresses:
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {SUPPORTED_FIELDS.map((field) => (
              <li
                key={field}
                className="rounded-full border border-border bg-muted/60 px-2.5 py-1 text-xs text-muted-foreground"
              >
                {field}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 lg:col-span-2">
          <h3 className="text-base font-semibold">Ways out</h3>
          <ul className="mt-4 space-y-4">
            {exportTargets.map((target) => (
              <li key={target.label} className="flex items-start gap-3">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <target.icon className="size-4" />
                </span>
                <span>
                  <span className="block text-sm font-medium">{target.label}</span>
                  <span className="block text-sm text-muted-foreground">
                    {target.hint}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
