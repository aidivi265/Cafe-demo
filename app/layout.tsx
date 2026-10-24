import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { businessName } from "@/lib/site-data";

const bodyFont = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const displayFont = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: {
    default: `${businessName} | Budh Vihar, Delhi`,
    template: `%s | ${businessName}`
  },
  description:
    "Visit Richie Rich Gaming & Cafe in Budh Vihar, Delhi for PlayStation gaming, 8-ball pool, and a rooftop cafe.",
  openGraph: {
    title: `${businessName} | Budh Vihar, Delhi`,
    description:
      "PlayStation gaming, 8-ball pool, and a rooftop cafe in Budh Vihar, Delhi.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
