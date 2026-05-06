import {
  Montserrat,
  Roboto,
  Roboto_Condensed,
  Tomorrow,
} from "next/font/google";

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

export const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const robotoMedium = Roboto({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

