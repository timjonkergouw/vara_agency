"use client";

import { useEffect, useState } from "react";
import { montserrat, tomorrow } from "@/app/fonts";

const steps = [
  {
    id: "01",
    label: "Discovery",
    description:
      "We uncover your brand’s challenges, audience, and ambitions through focused research, interviews, and workshops to build a sharp strategic foundation.",
  },
  {
    id: "02",
    label: "Design",
    description:
      "We translate insights into a strong visual and verbal identity, crafting systems, assets, and touchpoints that feel bold, minimal, and unmistakably VARA.",
  },
  {
    id: "03",
    label: "Launch",
    description:
      "We roll out your brand across channels, fine-tuning details, guiding implementation, and supporting your team so the launch lands with confidence.",
  },
];

const stepImages = [
  "/process search.png",
  "/process design.png",
  "/process launch.png",
];

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-advance the process bar every 5s when there is no interaction
  useEffect(() => {
    if (isHovering) return;

    const timeout = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [activeIndex, isHovering]);

  const progressPercent =
    steps.length > 1 ? (activeIndex / (steps.length - 1)) * 100 : 0;

  return (
    <section
      id="process"
      className="relative mt-24 bg-brand-blue pt-16 pb-[150px] text-white md:mt-28"
    >
      {/* VARA black logo right, half off-screen (less on mobile) */}
      <img
        src="/vara logo black.png"
        alt="VARA black logo"
        className="pointer-events-none select-none absolute bottom-0 right-0 h-32 w-auto translate-x-[120px] transform object-contain md:bottom-0 md:h-44 md:translate-x-[160px]"
      />

      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 md:px-8">
        <header className="flex justify-end">
          <h2
            className={`${montserrat.className} inline-block text-4xl md:text-5xl font-black uppercase tracking-[-0.05em]`}
          >
            Process.
          </h2>
        </header>

        <div className="relative mt-4">
          {/* horizontale lijn met gradient naar blauw aan de uiteindes + gevulde voortgang */}
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-[2px] md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent transition-[width] duration-700 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="relative flex flex-col items-stretch gap-10 md:flex-row md:items-start md:justify-between md:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="group relative flex flex-1 flex-col items-center text-center"
                onMouseEnter={() => {
                  setActiveIndex(index);
                  setIsHovering(true);
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                }}
              >
                {/* tooltip */}
                <div
                  className={`pointer-events-none absolute -top-32 left-1/2 z-20 w-64 -translate-x-1/2 rounded-sm px-4 py-3 text-left text-[11px] leading-relaxed opacity-0 shadow-[0_8px_0_rgba(0,0,0,0.15)] transition-opacity duration-200 group-hover:opacity-100 ${
                    index === 0
                      ? "bg-[#92B5FB] text-brand-dark"
                      : index === 1
                      ? "bg-brand-dark text-white"
                      : "bg-white text-brand-dark"
                  }`}
                >
                  <p className={tomorrow.className}>{step.description}</p>
                </div>

                {/* icoon blok met image */}
                <div
                  className={`flex h-16 w-16 items-center justify-center border border-white/80 ${
                    index === 0
                      ? "bg-[#92B5FB]"
                      : index === 1
                      ? "bg-brand-dark"
                      : "bg-white"
                  }`}
                >
                  <img
                    src={stepImages[index]}
                    alt={`${step.label} icon`}
                    className="h-10 w-10 object-contain"
                  />
                </div>

                {/* cirkel op de tijdlijn */}
                <div className="mt-6 flex items-center justify-center">
                  <div
                    className={`h-5 w-5 rounded-full border-2 border-white transition-colors duration-200 ${
                      index <= activeIndex
                        ? "bg-white"
                        : "bg-brand-blue group-hover:bg-white"
                    }`}
                  />
                </div>

                {/* label onderaan */}
                <div className="mt-4">
                  <div
                    className={`${tomorrow.className} inline-flex items-center gap-2 rounded-sm px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] ${
                      index === 0
                        ? "bg-[#92B5FB] text-brand-dark"
                        : index === 1
                        ? "bg-brand-dark text-white"
                        : "bg-white text-brand-dark"
                    }`}
                  >
                    <span className="opacity-70">{step.id}.</span>
                    <span>{step.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <button
            className={`${montserrat.className} rounded-sm bg-brand-lime px-7 py-3 text-[11px] font-extrabold uppercase tracking-[0.24em] text-brand-dark shadow-[0_8px_0_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_0_rgba(0,0,0,0.25)]`}
          >
            See how it works+
          </button>
        </div>
      </div>
    </section>
  );
}

