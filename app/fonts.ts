import { Montserrat, Tomorrow } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["900"], // Heaviest weight for headings and CTA's
  display: "swap",
});

export const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["400"], // Regular for body text
  display: "swap",
});

