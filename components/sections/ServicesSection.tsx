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

const serviceImages = ["/services1.png", "/services2.png", "/vara logo black.png"];

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto mt-24 max-w-6xl px-6 md:mt-28 md:px-8">
      <header className="flex items-end justify-between gap-4">
        <h2
          className={`${montserrat.className} inline-block text-4xl md:text-5xl font-black uppercase tracking-[-0.05em] text-brand-dark`}
        >
          Services.
        </h2>
      </header>

      <div className="mt-8 grid items-stretch gap-6 md:mt-10 md:grid-cols-3">
        {services.map((service, index) => (
          <article
            key={service.title}
            className={`flex flex-col gap-4 rounded-sm border border-bg-light-line p-6 shadow-[0_10px_0_rgba(0,0,0,0.05)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_14px_0_rgba(0,0,0,0.12)] ${
              index === 0
                ? "bg-[#92B5FB]"
                : index === 1
                ? "bg-[#343130]"
                : "bg-[#D9F855]"
            }`}
          >
            {index === 0 && (
              <div className="flex h-full">
                <div className="flex flex-1 flex-col justify-end">
                  <h3
                    className={`${tomorrow.className} text-sm md:text-base font-extrabold uppercase tracking-[0.24em] text-brand-dark`}
                  >
                    {service.title}
                  </h3>
                </div>
                <div className="flex flex-[1.2] items-end justify-start">
                  <img
                    src={serviceImages[index]}
                    alt={service.title}
                    className="max-h-32 md:max-h-40 w-auto object-contain"
                  />
                </div>
              </div>
            )}

            {index === 1 && (
              <div className="flex h-full">
                <div className="flex flex-[1.2] items-center justify-start">
                  <img
                    src={serviceImages[index]}
                    alt={service.title}
                    className="max-h-32 md:max-h-40 w-auto object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col items-end justify-start gap-1 text-right">
                  <span
                    className={`${tomorrow.className} text-sm md:text-base font-extrabold uppercase tracking-[0.24em] text-white`}
                  >
                    Content &amp; Social
                  </span>
                  <span
                    className={`${tomorrow.className} text-sm md:text-base font-extrabold uppercase tracking-[0.24em] text-white`}
                  >
                    Presence
                  </span>
                </div>
              </div>
            )}

            {index === 2 && (
              <div className="flex h-full">
                <div className="flex flex-1 flex-col justify-end gap-1">
                  <span
                    className={`${tomorrow.className} text-sm md:text-base font-extrabold uppercase tracking-[0.24em] text-brand-dark`}
                  >
                    Digital
                  </span>
                  <span
                    className={`${tomorrow.className} text-sm md:text-base font-extrabold uppercase tracking-[0.24em] text-brand-dark`}
                  >
                    Experience
                  </span>
                </div>
                <div className="flex flex-[1.2] items-center justify-end">
                  <img
                    src={serviceImages[index]}
                    alt={service.title}
                    className="max-h-40 md:max-h-52 w-auto object-contain"
                  />
                </div>
              </div>
            )}
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

