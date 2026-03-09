import { montserrat, tomorrow } from "@/app/fonts";
const services = [
  {
    title: "Brand Identity",
  },
  {
    title: "Content & Social Presence",
  },
  {
    title: "Digital Experience",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto mt-24 max-w-6xl px-6 md:mt-28 md:px-8">
      <header className="flex items-end justify-between gap-4">
        <h2
          className={`${montserrat.className} text-(--text-heading-section) font-extrabold uppercase tracking-[0.24em] text-brand-dark`}
        >
          Services.
        </h2>
      </header>

      <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="flex flex-col gap-4 border border-bg-light-line bg-white/90 p-5 shadow-[0_10px_0_rgba(0,0,0,0.05)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_14px_0_rgba(0,0,0,0.12)]"
          >
            <div className="flex flex-1 items-center justify-center border border-dashed border-brand-dark/30 bg-bg-offwhite">
              <div className="h-20 w-24 border border-brand-dark/25" />
            </div>
            <h3
              className={`${montserrat.className} text-xs font-extrabold uppercase tracking-[0.24em] text-brand-dark`}
            >
              {service.title}
            </h3>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <button
          className={`${montserrat.className} rounded-sm bg-brand-lime px-7 py-3 text-[11px] font-extrabold uppercase tracking-[0.24em] text-brand-dark shadow-[0_8px_0_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_0_rgba(0,0,0,0.16)]`}
        >
          Learn more+
        </button>
      </div>
    </section>
  );
}

