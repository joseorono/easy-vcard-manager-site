import { Braces, Download, Image as ImageIcon, QrCode } from "lucide-react";

const exportTargets = [
  { icon: Download, label: ".vcf file", hint: "vCard 2.1, 3.0 or 4.0" },
  { icon: QrCode, label: "QR code", hint: "PNG or SVG" },
  { icon: ImageIcon, label: "Contact card image", hint: "For sharing and signatures" },
  { icon: Braces, label: "Raw VCF", hint: "Copy the exact text" },
];

export function FormatsSection() {
  return (
    <section id="formats" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-wide text-primary uppercase">Ways out</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Keep the details. Choose the destination.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Export the contact in the format that fits the next device, address book or person.
          </p>
        </div>
        <div className="flex shrink-0 gap-2 rounded-lg border border-border bg-muted/50 px-3 py-2 text-xs text-muted-foreground">
          <span className="font-mono text-foreground">vCard</span> 2.1 · 3.0 · 4.0
        </div>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {exportTargets.map((target) => (
          <li key={target.label} className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40">
            <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <target.icon className="size-4" />
            </span>
            <h3 className="mt-4 text-sm font-semibold">{target.label}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{target.hint}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
