import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-bg-light-line/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/VARA%20LOGO.png"
            alt="Vara logo"
            width={120}
            height={32}
            className="h-8 w-auto md:h-9"
            priority
          />
        </Link>
        <button
          type="button"
          aria-label="Open navigation"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-dark/15 bg-white/70 shadow-sm md:hidden"
        >
          <span className="flex flex-col gap-[3px]">
            <span className="h-[2px] w-4 bg-brand-dark" />
            <span className="h-[2px] w-4 bg-brand-dark" />
            <span className="h-[2px] w-4 bg-brand-dark" />
          </span>
        </button>
        <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.24em] text-brand-dark/80 md:flex">
          <Link href="#about" className="hover:text-brand-blue">
            About
          </Link>
          <Link href="#services" className="hover:text-brand-blue">
            Services
          </Link>
          <Link href="#process" className="hover:text-brand-blue">
            Process
          </Link>
          <Link href="#contact" className="hover:text-brand-blue">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

