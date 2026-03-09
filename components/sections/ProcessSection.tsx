const steps = [
  { id: "01", label: "Discovery" },
  { id: "02", label: "Design" },
  { id: "03", label: "Launch" },
];

export function ProcessSection() {
  return (
    <section id="process" className="mt-24 bg-brand-blue py-16 text-white md:mt-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <header className="mb-10">
          <h2 className="font-heading text-(--text-heading-section) font-extrabold uppercase tracking-[0.24em]">
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
                <div className="font-heading flex items-center justify-center rounded-full border border-white/50 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.24em]">
                  <span className="mr-2 text-[11px] text-white/80">{step.id}</span>
                  <span>{step.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

