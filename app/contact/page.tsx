import { Metadata } from "next";
import { montserrat, tomorrow } from "@/app/fonts";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact us",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-28 pb-0 px-0 w-full">
      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full">
        {/* Title Section */}
        <div className="mb-16 md:mb-24 px-2 md:px-0">
          <div className="inline-block">
            <h1
              className={`${montserrat.className} inline-block text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] uppercase tracking-[-0.05em] text-brand-dark mb-2`}
            >
              CONTACT US.
            </h1>
            <div className="mt-2 h-2 w-full bg-brand-lime" />
          </div>
        </div>

        {/* Asymmetric Grid with Overlaps */}
        <div className="relative min-h-auto md:min-h-[700px] flex flex-col md:block pb-16 md:pb-0">
          {/* Background Blue Card with Brand Identity Image */}
          <div className="relative md:absolute right-0 top-0 w-full md:w-2/3 h-[400px] md:h-[600px] bg-brand-blue shadow-lg z-0 flex items-center justify-center md:justify-end overflow-hidden pr-0 md:pr-12 lg:pr-24">
            <img 
              src="/services1.png" 
              alt="Brand Identity" 
              className="h-[80%] max-h-[400px] w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Foreground Lime Form Box */}
          <div className="relative z-10 w-[92%] md:w-5/12 mx-auto md:mx-0 bg-brand-lime p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.15)] -mt-20 md:mt-24 md:-translate-y-0">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className={`${tomorrow.className} text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-dark`}>Name</label>
                <input type="text" id="name" className="w-full bg-white/90 px-4 py-3 text-brand-dark placeholder-brand-dark/40 border-none focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue shadow-sm transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className={`${tomorrow.className} text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-dark`}>E-mail</label>
                <input type="email" id="email" className="w-full bg-white/90 px-4 py-3 text-brand-dark placeholder-brand-dark/40 border-none focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue shadow-sm transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="number" className={`${tomorrow.className} text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-dark`}>Number</label>
                <input type="tel" id="number" className="w-full bg-white/90 px-4 py-3 text-brand-dark placeholder-brand-dark/40 border-none focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue shadow-sm transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className={`${tomorrow.className} text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-dark`}>Message</label>
                <textarea id="message" rows={4} className="w-full bg-white/90 px-4 py-3 text-brand-dark placeholder-brand-dark/40 border-none focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue shadow-sm transition-all resize-none"></textarea>
              </div>
              <button
                type="button"
                className={`${tomorrow.className} mt-4 rounded-sm bg-brand-dark px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-lime shadow-[0_4px_0_rgba(0,0,0,0.2)] md:shadow-[0_8px_0_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_0_rgba(0,0,0,0.25)] md:hover:shadow-[0_10px_0_rgba(0,0,0,0.25)] self-start`}
              >
                Send Message+
              </button>
            </form>
          </div>

          {/* Foreground White Info Box */}
          <div className="relative z-20 w-[92%] md:w-[35%] mx-auto md:mx-0 bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] mt-8 md:mt-0 md:absolute md:-bottom-16 md:right-8 lg:right-16 flex flex-col justify-center border-l-4 border-brand-blue">
            <h2 className={`${montserrat.className} text-3xl md:text-4xl font-black mb-6 uppercase tracking-[-0.02em] text-brand-dark`}>Vara Office.</h2>
            <div className={`${tomorrow.className} text-lg md:text-xl leading-relaxed text-brand-dark/80`}>
              <p className="mb-6">
                Rachelsmolen 1,<br />
                5612 MA Eindhoven
              </p>
              <p>
                +31 40 9821012<br />
                info@Vara.nl
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map portion (Edge to edge) */}
      <div className="mt-16 md:mt-32 w-full h-[400px] md:h-[500px] bg-gray-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159128.4577374683!2d5.199625832812494!3d51.45113970000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6d9bbf31bd8fb%3A0xbb209e5872fefac8!2sFontys%20Hogeschool%20ICT%20locatie%20Eindhoven!5e0!3m2!1snl!2snl!4v1773828415918!5m2!1snl!2snl" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full object-cover"
          ></iframe>
      </div>
    </main>
  );
}
