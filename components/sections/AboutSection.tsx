import { montserrat, tomorrow } from "@/app/fonts";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto mt-4 max-w-6xl px-6 md:px-8">
      <div className="relative overflow-visible rounded-none bg-brand-blue px-6 py-10 text-white md:px-10 md:py-14">
        <div className="max-w-xl space-y-4">
          <h2
            className={`${montserrat.className} text-(--text-heading-section) font-extrabold uppercase tracking-[0.24em]`}
          >
            About Vara.
          </h2>
          <p
            className={`${tomorrow.className} text-(--text-body-base) leading-relaxed text-white/90 md:text-(--text-body-large)`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum quam
            nec lorem blandit tristique. Nam sagittis lectus porta luctus finibus.
            Etiam fringilla quis dolor at auctor.
          </p>
          <p
            className={`${tomorrow.className} text-(--text-body-base) leading-relaxed text-white/80 md:text-(--text-body-large)`}
          >
            Duis ornare suscipit imperdiet. Phasellus eleifend lorem vel tellus quis
            pharetra. Nullam id sodales erat, at pellentesque odio. In luctus, neque eu
            convallis commodo, nisl ante tempus erat, at semper turpis lorem nisi.
          </p>
        </div>

        <div className="mt-6 h-24 w-28 bg-brand-dark text-xs font-medium uppercase tracking-[0.24em] text-white/90 md:pointer-events-none md:absolute md:right-12 md:top-10 md:mt-0 md:h-36 md:w-36">
          <div className="flex h-full w-full items-end justify-center pb-4 md:pb-5">
            <span>just be</span>
          </div>
        </div>

        <div className="mt-6 h-24 w-32 bg-brand-lime text-xs font-medium uppercase tracking-[0.24em] text-brand-dark md:pointer-events-none md:absolute md:-bottom-12 md:right-12 md:mt-0 md:h-36 md:w-44">
          <div className="flex h-full w-full items-start justify-center pt-5 md:pt-6">
            <span>to become</span>
          </div>
        </div>
      </div>
    </section>
  );
}

