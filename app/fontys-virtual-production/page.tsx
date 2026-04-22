"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { robotoCondensed, robotoMedium } from "@/app/fonts";

type AccordionItem = {
  title: string;
  content: string;
};

const quickLinks = [
  { label: "About this minor", id: "about-this-minor" },
  { label: "Programme", id: "programme" },
  { label: "Entry requirements", id: "entry-requirements" },
  { label: "How to apply", id: "how-to-apply" },
  { label: "Practical info", id: "practical-info" },
  { label: "Contact", id: "contact", alwaysBlue: true },
];

const headerMenuItems = [
  "Programmes",
  "Events",
  "Study at Fontys",
  "Research",
  "About Fontys",
] as const;

const headerDropdownTopics: Record<(typeof headerMenuItems)[number], string[]> = {
  Programmes: [
    "Bachelors and masters",
    "Associate degrees",
    "Minors and exchange",
    "Fields of interest",
  ],
  Events: ["Open days", "Meet-up sessions", "Student experiences", "Campus tours"],
  "Study at Fontys": [
    "How to apply",
    "Tuition and finance",
    "International support",
    "Housing information",
  ],
  Research: [
    "Research groups",
    "Innovation labs",
    "Sustainable media",
    "Industry partnerships",
  ],
  "About Fontys": [
    "Our campuses",
    "Student ambassadors",
    "Rules and regulations",
    "Vacancies (in Dutch)",
  ],
};

const programmeItems: AccordionItem[] = [
  {
    title: "Courses",
    content:
      "You work with tools such as Unreal Engine, camera tracking systems and LED workflows to build strong technical and creative fundamentals.",
  },
  {
    title: "Challenges",
    content:
      "In short assignments you solve realistic production problems and learn how to make sustainable and efficient creative choices under pressure.",
  },
  {
    title: "Projects",
    content:
      "Together with multidisciplinary teammates, you develop productions from concept to delivery and present tangible outcomes for real audiences.",
  },
  {
    title: "After the minor",
    content:
      "You are prepared for roles in virtual production, content creation, film, marketing, immersive media and related innovative production fields.",
  },
];

const practicalItems: AccordionItem[] = [
  {
    title: "Language",
    content: "The minor is offered in English.",
  },
  {
    title: "Intakes",
    content:
      "The programme starts in September and February. Availability can differ per academic year and capacity.",
  },
  {
    title: "Minor regulations",
    content:
      "The Fontys examination and minor regulations apply. Always check the latest requirements before final enrollment.",
  },
];

function Accordion({
  items,
  headingColorClass,
}: {
  items: AccordionItem[];
  headingColorClass: string;
}) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  return (
    <div className="border-t border-[#B2B2B2]">
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div key={item.title} className="group border-b border-[#B2B2B2]">
            <button
              type="button"
              onClick={() =>
                setOpenIndexes((current) =>
                  current.includes(index)
                    ? current.filter((itemIndex) => itemIndex !== index)
                    : [...current, index],
                )
              }
              className="flex w-full items-center justify-between py-5 text-left transition-all duration-300 hover:bg-[#faf7fa]"
            >
              <span
                className={`${robotoCondensed.className} font-bold transition-all duration-300 ${isOpen ? "text-3xl" : "text-2xl"} ${headingColorClass}`}
              >
                {item.title}
              </span>
              <span
                className={`text-4xl leading-none text-[#E6007D] transition-transform duration-300 md:text-5xl ${isOpen ? "rotate-180" : ""}`}
              >
                {isOpen ? "-" : "+"}
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-400 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <p
                className={`${robotoMedium.className} min-h-0 pb-4 text-lg text-[#565656] md:text-xl`}
              >
                {item.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function FlipImageCard({
  src,
  alt,
  backText,
  heightClassName,
}: {
  src: string;
  alt: string;
  backText: string;
  heightClassName: string;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsFlipped((current) => !current)}
      className={`agenda-flip-card group w-full cursor-pointer rounded-xl text-left ${heightClassName}`}
      aria-label={`Flip image card for ${alt}`}
    >
      <div className={`agenda-flip-card-inner ${isFlipped ? "is-flipped" : ""}`}>
        <div className="agenda-flip-card-front">
          <Image
            src={src}
            alt={alt}
            width={560}
            height={380}
            className="h-full w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-[1.01]"
          />
        </div>
        <div className="agenda-flip-card-back">
          <p className={`${robotoCondensed.className} text-2xl font-bold text-white md:text-3xl`}>
            {backText}
          </p>
        </div>
      </div>
    </button>
  );
}

export default function FontysVirtualProductionPage() {
  const [activeQuickLink, setActiveQuickLink] = useState("about-this-minor");
  const [openHeaderMenu, setOpenHeaderMenu] = useState<
    (typeof headerMenuItems)[number] | null
  >(null);

  useEffect(() => {
    const sectionIds = quickLinks.map((link) => link.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const getCurrentSectionId = () => {
      const targetY = window.innerHeight * 0.35;
      let bestId = sectionIds[0];
      let bestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - targetY);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestId = section.id;
        }
      });

      return bestId;
    };

    const updateActiveSection = () => {
      const currentId = getCurrentSectionId();
      setActiveQuickLink((prev) => (prev === currentId ? prev : currentId));
    };

    updateActiveSection();

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <main className="bg-white text-[18px] md:text-[20px]">
      <header className="reveal reveal-1 relative bg-[#663366] px-4 py-3 text-white md:px-8 md:py-4">
        <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center gap-3">
          <Image
            src="/minorpage/fontys%20logo%20wit.png"
            alt="Fontys logo"
            width={190}
            height={56}
            className="-ml-1 h-14 w-auto transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_14px_rgba(255,255,255,0.75)] md:-ml-2 md:h-16"
          />
          <nav className="flex flex-wrap items-center gap-4 md:gap-5">
            {headerMenuItems.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setOpenHeaderMenu((current) => (current === item ? null : item))
                }
                className={`${robotoMedium.className} flex items-center gap-2 text-lg text-white transition-transform duration-200 hover:scale-105 active:scale-95`}
              >
                {item}
                <Image
                  src="/minorpage/dropdown.png"
                  alt=""
                  aria-hidden="true"
                  width={20}
                  height={20}
                  className={`h-5 w-5 transition-transform duration-200 ${openHeaderMenu === item ? "rotate-180" : ""}`}
                />
              </button>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <input
              aria-label="Search"
              placeholder="Search"
              className={`${robotoMedium.className} w-40 rounded border border-white/30 bg-white/10 px-3 py-2 text-base text-white placeholder:text-white/70 md:w-52`}
            />
            <button
              type="button"
              className={`${robotoMedium.className} rounded border border-white/40 px-3 py-2 text-base transition-colors duration-200 hover:bg-white/10`}
            >
              EN
            </button>
          </div>
        </div>
        {openHeaderMenu ? (
          <div className="absolute inset-x-0 top-full z-40 px-4 pt-2 md:px-8">
            <div className="mx-auto w-full max-w-[1200px] rounded-2xl bg-[#5f2b5f] p-6 shadow-2xl">
            <div className="grid gap-6 md:grid-cols-[1.2fr_1fr_1.2fr]">
              <div>
                <h3 className={`${robotoCondensed.className} text-3xl font-bold text-white`}>
                  {openHeaderMenu}
                </h3>
                <ul className={`${robotoMedium.className} mt-4 space-y-3 text-lg text-white/95`}>
                  {headerDropdownTopics[openHeaderMenu].map((topic) => (
                    <li
                      key={topic}
                      className="border-b border-white/20 pb-2 transition-opacity duration-200 hover:opacity-80"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/minorpage/robot%20pp.png"
                  alt="Dropdown placeholder visual"
                  width={280}
                  height={280}
                  className="h-auto w-full max-w-[280px] rounded-2xl object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h4
                    className={`${robotoCondensed.className} text-2xl font-bold text-white`}
                  >
                    Placeholder content
                  </h4>
                  <p className={`${robotoMedium.className} mt-3 text-base text-white/90`}>
                    Dit is tijdelijke dropdown content. Zodra jij de definitieve
                    onderwerpen en visuals aanlevert, vervang ik dit 1-op-1 met
                    de juiste informatie.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenHeaderMenu(null)}
                  className={`${robotoMedium.className} mt-4 w-fit rounded-lg bg-white/15 px-4 py-2 text-base text-white transition-colors duration-200 hover:bg-white/25`}
                >
                  Close panel
                </button>
              </div>
            </div>
          </div>
          </div>
        ) : null}
      </header>

      <section className="reveal reveal-2 relative min-h-[300px] w-full">
        <Image
          src="/minorpage/hero%20minorvp.png"
          alt="Virtual Production hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-b from-transparent to-white md:h-36" />
        <div className="relative mx-auto flex h-full min-h-[300px] w-full max-w-[1200px] flex-col justify-end px-4 pb-8 md:px-8">
          <h1
            className={`${robotoCondensed.className} text-6xl font-bold text-white [text-shadow:0_6px_20px_rgba(0,0,0,0.95)] transition-transform duration-500 md:text-7xl md:hover:translate-x-1`}
          >
            Virtual Production
          </h1>
          <p className={`${robotoMedium.className} mt-2 text-lg text-white [text-shadow:0_3px_14px_rgba(0,0,0,0.9)] md:text-2xl`}>
            Starts September and February | English | 30 ECTS | 5 months
          </p>
          <p
            className={`${robotoMedium.className} mt-3 flex items-center gap-2 text-lg text-white [text-shadow:0_3px_14px_rgba(0,0,0,0.9)] md:text-2xl`}
          >
            <Image
              src="/minorpage/location.png"
              alt="Location icon"
              width={20}
              height={20}
              className="h-5 w-5 md:h-6 md:w-6"
            />
            Eindhoven
          </p>
        </div>
      </section>

      <section className="reveal reveal-3 sticky top-0 z-30 bg-white/95 px-4 py-4 shadow-sm backdrop-blur md:px-8">
        <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-start gap-1.5 md:gap-2">
          {quickLinks.map((item) => {
            const isActive = activeQuickLink === item.id;
            const className = isActive
              ? "bg-[#663366] text-white"
              : item.alwaysBlue
                ? "bg-[#0075DF] text-white"
                : "bg-white text-[#565656] shadow-[0_4px_12px_rgba(0,0,0,0.14)]";
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveQuickLink(item.id)}
                className={`${robotoMedium.className} rounded-xl px-4 py-3 text-sm transition-all duration-200 hover:-translate-y-0.5 md:text-base ${className}`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </section>

      <section className="reveal reveal-4 mx-auto grid w-full max-w-[1200px] gap-8 px-4 py-10 md:grid-cols-2 md:px-8">
        <div>
          <h2
            className={`${robotoCondensed.className} text-3xl font-bold text-[#0075DF] md:text-4xl`}
          >
            Ready to create content that shapes the future?
          </h2>
          <p className={`${robotoMedium.className} mt-4 text-xl leading-relaxed text-[#878787]`}>
            Team up in a cutting-edge Virtual Production studio, harness
            game-changing tech, and craft immersive stories with real impact.
            This is your chance to take content creation to the next level -
            are you in?
          </p>
        </div>
        <video
          src="/minorpage/Robot%20Attack.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
          className="h-full min-h-[220px] w-full rounded-xl object-cover transition-transform duration-300 hover:scale-[1.01]"
        />
      </section>

      <section
        id="about-this-minor"
        className="reveal reveal-5 scroll-mt-44 mx-auto grid w-full max-w-[1200px] gap-8 px-4 py-4 md:scroll-mt-48 md:grid-cols-2 md:px-8"
      >
        <FlipImageCard
          src="/minorpage/camera%20pp.png"
          alt="Camera setup"
          backText="This is the camera setup we use in the Pixel Playground."
          heightClassName="h-[260px] md:h-[380px]"
        />
        <div>
          <h2 className={`${robotoCondensed.className} text-4xl font-bold text-[#000000]`}>
            About this minor
          </h2>
          <p className={`${robotoMedium.className} mt-3 text-lg leading-relaxed text-[#565656] md:text-xl`}>
            This minor offers you the opportunity to explore virtual production
            technologies in a well equipped production studio. Here you will
            work with real-time rendering, LED volumes, and camera tracking.
            While collaborating in a multidisciplinary team (for example,
            alongside IT professionals, actors, camera operators, filmmakers,
            and all other essential production staff), developing skills for
            future-oriented and sustainable productions in film, marketing, and
            visualization. In doing so, you will delve into the world of
            immersive, efficient and sustainable content creation techniques.
          </p>
          <h3
            className={`${robotoCondensed.className} mt-6 text-3xl font-bold text-[#000000]`}
          >
            Why the minor Virtual Production?
          </h3>
          <ul className={`${robotoMedium.className} mt-3 space-y-2 text-lg text-[#565656] md:text-xl`}>
            <li className="flex items-start gap-2">
              <Image
                src="/minorpage/blauw%20vinkje.png"
                alt="Check icon"
                width={16}
                height={16}
                className="mt-0.5 h-6 w-6"
              />
              <span>State-of-the-art Virtual Production studio with a 10m x 3.5m LED wall.</span>
            </li>
            <li className="flex items-start gap-2">
              <Image
                src="/minorpage/blauw%20vinkje.png"
                alt="Check icon"
                width={16}
                height={16}
                className="mt-0.5 h-6 w-6"
              />
              <span>Build immersive worlds and bring your creative vision to life in 3D.</span>
            </li>
            <li className="flex items-start gap-2">
              <Image
                src="/minorpage/blauw%20vinkje.png"
                alt="Check icon"
                width={16}
                height={16}
                className="mt-0.5 h-6 w-6"
              />
              <span>Open-minded, collaborative, and creatively driven work environment.</span>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <Image
                  src="/minorpage/blauw%20vinkje.png"
                  alt="Check icon"
                  width={16}
                  height={16}
                  className="mt-0.5 h-6 w-6"
                />
                <span>
                  Prepare for a booming industry with growing demand for hands on production
                  experience.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <div className="mx-auto mt-8 w-full max-w-[1200px] border-t border-[#B2B2B2]" />

      <section className="reveal reveal-6 mx-auto w-full max-w-[1200px] px-4 py-8 md:px-8">
        <h2 className={`${robotoCondensed.className} text-4xl font-bold text-[#000000]`}>
          More about this minor
        </h2>
        <p className={`${robotoMedium.className} mt-3 text-lg text-[#565656] md:text-xl`}>
          Gain hands-on experience with cutting-edge tools like Unreal Engine
          and LED volumes. Master real-time workflows, immersive storytelling,
          and collaboration across disciplines, preparing for careers in film,
          gaming, marketing and beyond.
        </p>
        <ul className={`${robotoMedium.className} mt-4 space-y-2 text-lg text-[#565656] md:text-xl`}>
          <li className="before:mr-2 before:text-[28px] before:leading-none before:text-[#A582A5] before:content-['•']">
            Develop your own creative and professional identity through
            self-expression, reflection, and expert feedback.
          </li>
          <li className="before:mr-2 before:text-[28px] before:leading-none before:text-[#A582A5] before:content-['•']">
            Master real-world production workflows by building hands-on
            experience in a high-tech studio environment.
          </li>
          <li className="before:mr-2 before:text-[28px] before:leading-none before:text-[#A582A5] before:content-['•']">
            Collaborate across disciplines with creatives, technologists, and
            storytellers to bring innovative ideas to life.
          </li>
          <li className="before:mr-2 before:text-[28px] before:leading-none before:text-[#A582A5] before:content-['•']">
            Focus on what drives you - from storytelling and ethics to
            technical execution, research, and future-ready solutions.
          </li>
        </ul>
      </section>

      <section
        id="programme"
        className="reveal reveal-7 scroll-mt-44 mx-auto w-full max-w-[1200px] px-4 py-4 md:scroll-mt-48 md:px-8"
      >
        <h2 className={`${robotoCondensed.className} text-4xl font-bold text-[#000000]`}>
          Programme
        </h2>
        <Accordion items={programmeItems} headingColorClass="text-[#663366]" />
      </section>

      <section
        id="entry-requirements"
        className="reveal reveal-8 scroll-mt-44 mx-auto grid w-full max-w-[1200px] gap-8 px-4 py-8 md:scroll-mt-48 md:grid-cols-2 md:px-8"
      >
        <div>
          <h2 className={`${robotoCondensed.className} text-4xl font-bold text-[#000000]`}>
            Entry requirements
          </h2>
          <p className={`${robotoMedium.className} mt-3 text-lg text-[#565656] md:text-xl`}>
            To be admitted to this minor you need to have completed your
            propedeuse. In addition you need to demonstrate the following
            interests and/or skills:
          </p>
          <ul className={`${robotoMedium.className} mt-3 space-y-2 text-lg text-[#565656] md:text-xl`}>
            <li className="flex items-start gap-2">
              <Image
                src="/minorpage/blauw%20vinkje.png"
                alt="Check icon"
                width={16}
                height={16}
                className="mt-0.5 h-6 w-6"
              />
              <span>
                Basic knowledge of 3D-software and video editing tools (e.g.
                non-linear editing tools).
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Image
                src="/minorpage/blauw%20vinkje.png"
                alt="Check icon"
                width={16}
                height={16}
                className="mt-0.5 h-6 w-6"
              />
              <span>
                Affinity with technologies that create a bridge between
                physical and digital production environments.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Image
                src="/minorpage/blauw%20vinkje.png"
                alt="Check icon"
                width={16}
                height={16}
                className="mt-0.5 h-6 w-6"
              />
              <span>Basic knowledge of programming is recommended but not required.</span>
            </li>
            <li className="flex items-start gap-2">
              <Image
                src="/minorpage/blauw%20vinkje.png"
                alt="Check icon"
                width={16}
                height={16}
                className="mt-0.5 h-6 w-6"
              />
              <span>
                Prepare for a booming industry with growing demand for hands on
                production experience.
              </span>
            </li>
          </ul>
          <p className={`${robotoMedium.className} mt-4 whitespace-pre-line text-lg text-[#565656] md:text-xl`}>
            {`These entry requirements are tested (after submitting the application) by means of cover letter and CV sent to the minor coordinator.

If you have attended the main semester "Media Creation" as part of the Fontys ICT bachelor, you are not eligible to apply for this minor.`}
          </p>
        </div>
        <FlipImageCard
          src="/minorpage/setup%20pixel%20playground.png"
          alt="Virtual production setup"
          backText="This is the setup we use in the Pixel Playground, with a very powerful computer to run all scenes."
          heightClassName="h-[260px] md:h-[380px]"
        />
      </section>

      <div className="mx-auto w-full max-w-[1200px] border-t border-[#B2B2B2]" />

      <section
        id="how-to-apply"
        className="reveal reveal-9 scroll-mt-44 mx-auto grid w-full max-w-[1200px] gap-8 px-4 py-8 md:scroll-mt-48 md:grid-cols-2 md:px-8"
      >
        <div>
          <h2 className={`${robotoCondensed.className} text-4xl font-bold text-[#000000]`}>
            How to apply for this minor
          </h2>
          <p className={`${robotoMedium.className} mt-3 text-lg text-[#565656] md:text-xl`}>
            Sign up for a minor starting in <strong>September</strong> from{" "}
            <strong>February 1</strong> until <strong>July 1</strong> at the
            latest.
          </p>
          <p className={`${robotoMedium.className} mt-3 text-lg text-[#565656] md:text-xl`}>
            Sign up for a minor starting in <strong>February</strong> from{" "}
            <strong>July 1</strong> until <strong>December 15</strong> at the
            latest.
          </p>
        </div>
        <div className="space-y-2">
          {["Apply as a Fontys student", "Apply as a non-Fontys student"].map((label) => (
            <button
              key={label}
              type="button"
              className={`${robotoMedium.className} group flex w-full items-center justify-between border-b border-[#B2B2B2] px-2 py-5 text-left text-lg text-[#565656] transition-colors duration-200 hover:bg-[#f8f8f8] md:text-xl`}
            >
              {label}
              <Image
                src="/minorpage/arrowright.png"
                alt=""
                aria-hidden="true"
                width={22}
                height={22}
                className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
          ))}
        </div>
      </section>

      <section className="reveal reveal-10 mx-auto grid w-full max-w-[1200px] gap-8 px-4 py-4 md:grid-cols-2 md:px-8">
        <div>
          <h3 className={`${robotoCondensed.className} text-3xl font-bold text-[#000000]`}>
            Please note
          </h3>
          <ul className={`${robotoMedium.className} mt-3 space-y-2 text-lg text-[#565656] md:text-xl`}>
            <li className="before:mr-2 before:text-[28px] before:leading-none before:text-[#E6007D] before:content-['•']">
              Not every minor starts in February and in September. You can find
              the start dates at the top of the minor&apos;s page.
            </li>
            <li className="before:mr-2 before:text-[28px] before:leading-none before:text-[#E6007D] before:content-['•']">
              To take part in the minor, you must have obtained your
              propaedeutic diploma or have permission from the examination board
              of your programme.
            </li>
          </ul>
        </div>
        <div>
          <h3 className={`${robotoCondensed.className} text-3xl font-bold text-[#000000]`}>
            For this minor in particular
          </h3>
          <p className={`${robotoMedium.className} mt-3 text-lg text-[#565656] md:text-xl`}>
            You have to be registered (and have sent in a resume and motivation
            - see below) for the minor before <strong>16th November</strong>{" "}
            (for the spring semester) and <strong>1st May</strong> (for the
            autumn semester).
          </p>
          <p className={`${robotoMedium.className} mt-3 text-lg text-[#565656] md:text-xl`}>
            Intake is concluded until <strong>30th November</strong> /{" "}
            <strong>15th May</strong> to give you time to look for alternatives
            if not chosen.
          </p>
        </div>
      </section>

      <section className="reveal reveal-11 mx-auto grid w-full max-w-[1200px] gap-8 px-4 py-8 md:grid-cols-2 md:px-8">
        <div>
          <h2 className={`${robotoCondensed.className} text-4xl font-bold text-[#000000]`}>
            Agenda
          </h2>
          <p className={`${robotoMedium.className} mt-3 whitespace-pre-line text-lg text-[#565656] md:text-xl`}>
            {`Register here for one of our activities. This way you can be sure whether this is the minor for you! We hope to see you soon!
There are currently no activities planned. Would you still like to visit or do you have a question? Please contact us.`}
          </p>
        </div>
        <FlipImageCard
          src="/minorpage/pixelplayground.png"
          alt="Pixel playground"
          backText="This is the Pixel Playground with the giant LED wall."
          heightClassName="h-[260px] md:h-[320px]"
        />
      </section>

      <section
        id="practical-info"
        className="reveal reveal-12 scroll-mt-44 mx-auto w-full max-w-[1200px] px-4 py-4 md:scroll-mt-48 md:px-8"
      >
        <h2 className={`${robotoCondensed.className} text-4xl font-bold text-[#000000]`}>
          Practical information
        </h2>
        <Accordion items={practicalItems} headingColorClass="text-[#663366]" />
      </section>

      <section
        id="contact"
        className="reveal reveal-13 scroll-mt-44 mt-8 w-full bg-[#0075DF] px-4 py-10 text-white md:scroll-mt-48 md:px-8"
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <h2 className={`${robotoCondensed.className} text-4xl font-bold text-white`}>
            Contact
          </h2>
          <div className={`${robotoMedium.className} mt-5 space-y-1 text-base md:text-lg`}>
            <p>Eindhoven</p>
            <p>Campus Rachelsmolen Building R10</p>
            <p>Rachelsmolen 1</p>
            <p>5612 MA Eindhoven</p>
            <div className="h-4" />
            <p>Jan Salge</p>
            <p className="flex items-center gap-2">
              <Image
                src="/minorpage/telefoon.png"
                alt="Phone icon"
                width={16}
                height={16}
                className="h-4 w-4"
              />
              +31 6 39834070
            </p>
            <p className="flex items-center gap-2">
              <Image
                src="/minorpage/mail.png"
                alt="Mail icon"
                width={16}
                height={16}
                className="h-4 w-4"
              />
              ict-videolab@fontys.nl
            </p>
          </div>
        </div>
      </section>

      <section className="reveal reveal-14 bg-[#f2f2f2] px-4 py-8 md:px-8">
        <div className="mx-auto grid w-full max-w-[1200px] gap-8 rounded-2xl bg-linear-to-tr from-[#E6007D] to-[#663366] p-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <h3 className={`${robotoCondensed.className} text-3xl font-bold text-white`}>
              Do you have a question
            </h3>
            <p className={`${robotoMedium.className} mt-2 text-sm text-white md:text-base`}>
              We are happy to help. We can be reached Monday to Friday between
              08:30 and 17:00 GMT+1.
            </p>
            <div className="mt-4 space-y-2">
              <button
                type="button"
                className={`${robotoMedium.className} mr-auto flex w-[86%] items-center gap-2 rounded bg-[#B2B2B2] px-3 py-3 text-left text-base text-white transition-transform duration-200 hover:translate-x-1 md:w-[82%]`}
              >
                <Image
                  src="/minorpage/telefoon.png"
                  alt="Phone icon"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
                Call: 31+ 8850 80000
              </button>
              <button
                type="button"
                className={`${robotoMedium.className} mr-auto flex w-[86%] items-center gap-2 rounded bg-[#B2B2B2] px-3 py-3 text-left text-base text-white transition-transform duration-200 hover:translate-x-1 md:w-[82%]`}
              >
                <Image
                  src="/minorpage/whatsapp.png"
                  alt="WhatsApp icon"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
                WhatsApp
              </button>
              <button
                type="button"
                className={`${robotoMedium.className} mr-auto flex w-[86%] items-center gap-2 rounded bg-[#B2B2B2] px-3 py-3 text-left text-base text-white transition-transform duration-200 hover:translate-x-1 md:w-[82%]`}
              >
                <Image
                  src="/minorpage/mail.png"
                  alt="Mail icon"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
                Send an e-mail
              </button>
              <button
                type="button"
                className={`${robotoMedium.className} mr-auto w-[86%] rounded bg-[#B2B2B2] px-3 py-3 text-left text-base text-white transition-transform duration-200 hover:translate-x-1 md:w-[82%]`}
              >
                ? Ask a question
              </button>
            </div>
          </div>

          <div>
            <h4 className={`${robotoCondensed.className} text-2xl font-bold text-white`}>
              Quick links
            </h4>
            <ul className={`${robotoMedium.className} mt-3 space-y-2 text-base text-white md:text-lg`}>
              {[
                "Home",
                "Bachelor and master programmes",
                "Minors",
                "Meet us events",
                "Exchange programmes",
                "Field of interest",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between border-b border-white/30 pb-2 transition-transform duration-200 hover:translate-x-1"
                >
                  <span>{item}</span>
                  <Image
                    src="/minorpage/arrow%20right.png"
                    alt=""
                    aria-hidden="true"
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`${robotoCondensed.className} text-2xl font-bold text-white`}>
              About Fontys
            </h4>
            <ul className={`${robotoMedium.className} mt-3 space-y-2 text-base text-white md:text-lg`}>
              {[
                "Our campuses",
                "Student ambassadors",
                "Fresh at Fontys",
                "Fontys help",
                "Vacancies (in Dutch)",
                "Rules and regulations",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between border-b border-white/30 pb-2 transition-transform duration-200 hover:translate-x-1"
                >
                  <span>{item}</span>
                  <Image
                    src={
                      item === "Vacancies (in Dutch)"
                        ? "/minorpage/link.png"
                        : "/minorpage/arrow%20right.png"
                    }
                    alt=""
                    aria-hidden="true"
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeUpSmooth {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .reveal {
          animation: fadeUpSmooth 0.7s ease both;
          will-change: transform, opacity;
        }
        .reveal-1 {
          animation-delay: 0.03s;
        }
        .reveal-2 {
          animation-delay: 0.06s;
        }
        .reveal-3 {
          animation-delay: 0.09s;
        }
        .reveal-4 {
          animation-delay: 0.12s;
        }
        .reveal-5 {
          animation-delay: 0.15s;
        }
        .reveal-6 {
          animation-delay: 0.18s;
        }
        .reveal-7 {
          animation-delay: 0.21s;
        }
        .reveal-8 {
          animation-delay: 0.24s;
        }
        .reveal-9 {
          animation-delay: 0.27s;
        }
        .reveal-10 {
          animation-delay: 0.3s;
        }
        .reveal-11 {
          animation-delay: 0.33s;
        }
        .reveal-12 {
          animation-delay: 0.36s;
        }
        .reveal-13 {
          animation-delay: 0.39s;
        }
        .reveal-14 {
          animation-delay: 0.42s;
        }
        .agenda-flip-card {
          perspective: 1200px;
        }
        .agenda-flip-card-inner {
          position: relative;
          height: 100%;
          width: 100%;
          transform-style: preserve-3d;
          transition: transform 0.7s ease;
        }
        .agenda-flip-card-inner.is-flipped {
          transform: rotateY(180deg);
        }
        .agenda-flip-card-front,
        .agenda-flip-card-back {
          position: absolute;
          inset: 0;
          border-radius: 0.75rem;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          overflow: hidden;
        }
        .agenda-flip-card-back {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
          background: linear-gradient(145deg, #663366 0%, #e6007d 100%);
          transform: rotateY(180deg);
        }
      `}</style>
    </main>
  );
}
