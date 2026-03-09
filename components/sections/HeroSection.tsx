export function HeroSection() {
  return (
    <section className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pt-28 pb-16 md:px-8 md:pt-40">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#e2e4ea_0,transparent_55%),radial-gradient(circle_at_bottom,#e2e4ea_0,transparent_55%)] opacity-70" />

      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-brand-dark/70">
            To be.
          </p>
          <h1 className="font-heading text-(--text-heading-xl) font-extrabold leading-[0.9] uppercase tracking-[0.24em] text-brand-dark">
            TO BE.
          </h1>
          <p className="font-body max-w-md text-(--text-body-base) leading-relaxed text-brand-dark/80 md:text-(--text-body-large)">
            We translate human connection into digital impact.
          </p>
        </div>

        <div className="mt-4 md:mt-0">
          <button className="font-heading rounded-sm bg-brand-lime px-7 py-3 text-[11px] font-extrabold uppercase tracking-[0.24em] text-brand-dark shadow-[0_8px_0_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_0_rgba(0,0,0,0.16)]">
            Discover more+
          </button>
        </div>
      </div>
    </section>
  );
}

