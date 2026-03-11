import { montserrat, tomorrow } from "@/app/fonts";

export function AboutSection() {
  return (
    <section id="about" className="relative mt-4 px-0">
      <div className="pointer-events-none absolute top-0 bottom-0 left-0 right-1/4 bg-brand-blue" />

      <div className="relative mx-auto max-w-6xl px-6 py-12 text-white md:px-8 md:py-16 md:pb-52">
        <img
          src="/vara logo lime.png"
          alt="VARA lime logo"
          className="pointer-events-none select-none absolute bottom-0 left-0 h-32 w-auto -translate-x-[240px] transform object-contain md:bottom-0 md:h-44"
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
            Vara is a cultural agency built on diversity, perspective, and purpose. We help
            brands move beyond aesthetics by turning human connection into a powerful digital
            presence. By combining minimalism with bold ideas and strategy with creativity, we
            create brands that stand out with confidence. We understand trends and reshape them
            into opportunities. For brands that want clarity, momentum, and real impact, Vara is
            where they become sharper, stronger, and unforgettable.
          </p>
        </div>

        <div className="mt-6 h-32 w-40 bg-brand-dark text-sm md:text-base font-medium uppercase tracking-[0em] text-white/90 md:pointer-events-none md:absolute md:right-40 md:top-6 md:mt-0 md:h-44 md:w-52 transform -translate-x-[80px] translate-y-[20px] scale-[1.4] origin-bottom-right">
          <div className="flex h-full w-full items-end justify-center pb-4 md:pb-5 transform translate-x-[55px] scale-[1]">
            <span>just be</span>
          </div>
        </div>

        <div className="mt-10 h-32 w-48 bg-brand-lime text-sm md:text-base font-medium uppercase tracking-[0.24em] text-brand-dark md:pointer-events-none md:absolute md:bottom-10 md:right-32 md:mt-0 md:h-44 md:w-64 transform -translate-x-[30px] scale-[1.4] origin-bottom-right">
          <div className="flex h-full w-full items-start justify-center pt-5 md:pt-6 transform translate-x-[15px] scale-[0.7]">
            <span>to become</span>
          </div>
        </div>
      </div>
    </section>
  );
}

