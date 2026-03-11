import { montserrat, tomorrow } from "@/app/fonts";
const steps = [
  { id: "01", label: "Discovery" },
  { id: "02", label: "Design" },
  { id: "03", label: "Launch" },
];

export function ProcessSection() {
  return (
    <section id="process" className="relative mt-24 py-16 text-white md:mt-28">
      <div className="pointer-events-none absolute top-0 bottom-0 left-1/4 right-0 bg-brand-blue" />

      <div className="relative ml-auto w-3/4 px-6 md:px-8">
        <div className="w-full">
          <header className="mb-10">
            <h2
              className={`${montserrat.className} inline-block text-4xl md:text-5xl font-black uppercase tracking-[-0.05em] text-white`}
            >
              Process.
            </h2>
          </header>

          <div className="rounded-none bg-brand-blue/80 px-4 py-8 shadow-[0_12px_0_rgba(0,0,0,0.15)] md:px-8">
            <div className="flex flex-col items-stretch gap-6 md:flex-row md:items-center md:justify-between">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="flex flex-1 flex-col items-center gap-2 text-center transition-transform duration-200 hover:-translate-y-1 md:items-start md:text-left"
                >
                  <div
                    className={`${montserrat.className} flex items-center justify-center rounded-full border border-white/50 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.24em]`}
                  >
                    <span className="mr-2 text-[11px] text-white/80">{step.id}</span>
                    <span>{step.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

