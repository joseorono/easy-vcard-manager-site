import { AUDIENCES } from "@/constants/site";

export function AudienceSection() {
  return (
    <section id="who-its-for" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-medium tracking-wide text-primary uppercase">
          Who it&apos;s for
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Built for whoever is stuck with a .vcf
        </h2>
      </div>

      <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {AUDIENCES.map((audience) => (
          <div key={audience.title} className="border-l-2 border-primary/30 pl-5">
            <dt className="text-base font-semibold">{audience.title}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {audience.description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
