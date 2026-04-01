import { montserrat, tomorrow } from "@/app/fonts";

export function Footer() {
  return (
    <footer
      id="contact"
      className="mt-24 md:mt-28 border-t border-bg-light-line/60 bg-bg-offwhite/90 pt-6 pb-10 text-xs text-brand-dark/80"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:justify-between md:px-8">
        <div className="space-y-3">
          <h3
            className={`${montserrat.className} text-sm font-extrabold uppercase tracking-[0.24em] text-brand-dark`}
          >
            Contact
          </h3>
          <p className={`${tomorrow.className} max-w-xs leading-relaxed`}>
            Redefinestreet 1, 5612 MA
            <br />
            Eindhoven
          </p>
          <p className={`${tomorrow.className} leading-relaxed`}>
            +31 (0) 6 123 1212
            <br />
            info@vara.nl
          </p>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-3">
          <div>
            <h3
              className={`${montserrat.className} text-sm font-extrabold uppercase tracking-[0.24em] text-brand-dark`}
            >
              About
            </h3>
            <ul className="mt-3 space-y-1">
              <li>About VARA</li>
              <li>Team</li>
            </ul>
          </div>
          <div>
            <h3
              className={`${montserrat.className} text-sm font-extrabold uppercase tracking-[0.24em] text-brand-dark`}
            >
              Services
            </h3>
            <ul className="mt-3 space-y-1">
              <li>Brand Identity</li>
              <li>Content &amp; Social</li>
              <li>Digital Experience</li>
            </ul>
          </div>
          <div>
            <h3
              className={`${montserrat.className} text-sm font-extrabold uppercase tracking-[0.24em] text-brand-dark`}
            >
              Process
            </h3>
            <ul className="mt-3 space-y-1">
              <li>Discovery</li>
              <li>Design</li>
              <li>Launch</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-4 flex max-w-6xl items-end justify-between px-6 md:px-8">
        <div className={`${tomorrow.className} space-y-2`}>
          <p className="text-[11px] uppercase tracking-[0.24em] text-brand-dark/60">
            Branding for the next generation of startups
          </p>
          <p className="text-[11px] uppercase tracking-[0.24em] text-brand-dark/60">
            Socials
          </p>
        </div>
        <img
          src="/varalogoblauw.png"
          alt="VARA logo"
          className="pointer-events-none select-none h-20 w-auto opacity-50 md:h-28"
        />
      </div>
    </footer>
  );
}

