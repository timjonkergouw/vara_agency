import { montserrat, tomorrow } from "@/app/fonts";

export function AboutSection() {
  return (
    <section id="about" className="relative mt-4 px-0">
      {/* Blue background: full-bleed on the left, stops earlier on the right */}
      <div className="pointer-events-none absolute top-0 bottom-[-40px] left-0 right-1/4 bg-brand-blue" />

      <div className="relative mx-auto max-w-6xl overflow-hidden px-6 py-12 text-white md:px-8 md:py-16 md:pb-52">
        {/* VARA lime logo bottom-left, half emerging */}
        <img
          src="/VARA full lime.png"
          alt="VARA lime logo"
          className="pointer-events-none select-none absolute -bottom-16 left-0 h-40 w-auto object-contain md:-bottom-24 md:h-56"
        />

        <div className="relative z-10 max-w-xl space-y-4">
          <h2
            className={`${montserrat.className} inline-block text-4xl md:text-5xl font-black uppercase tracking-[-0.05em]`}
          >
            About Vara.
          </h2>
          <p
            className={`${tomorrow.className} text-(--text-body-base) leading-relaxed text-white/90 md:text-(--text-body-large)`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum quam nec
            lorem blandit tristique. Nam sagittis lectus porta luctus finibus. Etiam
            fringilla quis dolor at auctor.
          </p>
          <p
            className={`${tomorrow.className} text-(--text-body-base) leading-relaxed text-white/80 md:text-(--text-body-large)`}
          >
            Duis ornare suscipit imperdiet. Phasellus eleifend lorem vel tellus quis
            pharetra. Nullam id sodales erat, at pellentesque odio. In luctus, neque eu
            convallis commodo, nisl ante tempus erat, at semper turpis lorem nisi.
          </p>
        </div>

        <div className="mt-6 h-32 w-40 bg-brand-dark text-sm md:text-base font-medium uppercase tracking-[0.24em] text-white/90 md:pointer-events-none md:absolute md:right-40 md:top-6 md:mt-0 md:h-44 md:w-52">
          <div className="flex h-full w-full items-end justify-center pb-4 md:pb-5">
            <span>just be</span>
          </div>
        </div>

        <div className="mt-10 h-32 w-48 bg-brand-lime text-sm md:text-base font-medium uppercase tracking-[0.24em] text-brand-dark md:pointer-events-none md:absolute md:bottom-10 md:right-32 md:mt-0 md:h-44 md:w-64">
          <div className="flex h-full w-full items-start justify-center pt-5 md:pt-6">
            <span>to become</span>
          </div>
        </div>
      </div>
    </section>
  );
}

