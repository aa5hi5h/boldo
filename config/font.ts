import { DM_Mono, Montserrat, Space_Grotesk } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-dm-mono",
});

export const gotham_font = Montserrat({
    subsets: ["latin"],
    weight: ["700", "800", "900"],
    display: "swap",
    variable: "--font-gb",
  });