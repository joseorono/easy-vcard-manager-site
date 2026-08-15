import { AUDIENCES } from "@/constants/site";

export function AudienceSection() {
  return (
    <section id="who-its-for" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="reveal max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          For migrations, backups and everyday contacts
        </h2>
      </div>

      <dl className="reveal mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
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
