import Image from "next/image";
import { Braces, Download, Image as ImageIcon, QrCode } from "lucide-react";

import { SUPPORTED_FIELDS, VCARD_VERSIONS } from "@/constants/site";

const exportTargets = [
  {
    icon: Download,
    label: ".vcf file",
    hint: "vCard 2.1, 3.0 or 4.0",
    illustration: "/svg/10.svg",
  },
  {
    icon: QrCode,
    label: "QR code",
    hint: "PNG or SVG",
    illustration: "/svg/4.svg",
  },
  {
    icon: ImageIcon,
    label: "Contact card image",
    hint: "For sharing and signatures",
    illustration: "/svg/12.svg",
  },
  {
    icon: Braces,
    label: "Raw VCF",
    hint: "Copy the exact text",
    illustration: "/svg/VCF%20Code%20Icon.svg",
  },
];

const RECOMMENDED_VERSION = "3.0";

const fieldRows = [
  SUPPORTED_FIELDS.slice(0, Math.ceil(SUPPORTED_FIELDS.length / 2)),
  SUPPORTED_FIELDS.slice(Math.ceil(SUPPORTED_FIELDS.length / 2)),
];

function FieldMarqueeRow({
  fields,
  reverse,
}: {
  fields: readonly string[];
  reverse?: boolean;
}) {
  return (
    <div className="marquee-viewport">
      <div className="marquee-track" data-direction={reverse ? "reverse" : undefined}>
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 ? true : undefined}
            className="flex shrink-0 gap-2.5 pr-2.5"
          >
            {fields.map((field) => (
              <li
                key={field}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm whitespace-nowrap text-muted-foreground"
              >
                {field}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function FormatsSection() {
  return (
    <section
      id="formats"
      className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="reveal max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Keep the details. Choose the destination.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          Export the contact in the format that fits the next device, address
          book or person.
        </p>
      </div>

      <div className="reveal mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        <ul className="divide-y divide-border lg:col-span-7">
          {exportTargets.map((target) => (
            <li
              key={target.label}
              className="group relative flex items-center gap-4 overflow-hidden py-5 first:pt-0"
            >
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary shadow-sm shadow-primary/10">
                <target.icon className="size-5" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold">{target.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {target.hint}
                </p>
              </div>
              <Image
                src={target.illustration}
                alt=""
                width={96}
                height={96}
                aria-hidden="true"
                className="pointer-events-none size-16 shrink-0 opacity-15 transition-transform duration-300 group-hover:scale-105"
              />
            </li>
          ))}
        </ul>

        <div className="lg:col-span-5">
          <h3 className="text-base font-semibold">Pick a vCard version</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            The same contact can be exported more than once, so you are never
            locked to one target.
          </p>
          <dl className="mt-5 divide-y divide-border rounded-xl border border-border bg-card">
            {VCARD_VERSIONS.map((entry) => (
              <div key={entry.version} className="flex gap-4 p-5">
                <dt className="w-12 shrink-0 font-mono text-xl font-semibold text-primary">
                  {entry.version}
                </dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">
                  {entry.version === RECOMMENDED_VERSION ? (
                    <span className="mr-2 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      Recommended
                    </span>
                  ) : null}
                  {entry.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="reveal max-w-xl text-base font-semibold">
          The editor reads and writes every one of these fields
        </h3>
        <div className="mt-6 space-y-3">
          <FieldMarqueeRow fields={fieldRows[0]} />
          <FieldMarqueeRow fields={fieldRows[1]} reverse />
        </div>
      </div>
    </section>
  );
}
