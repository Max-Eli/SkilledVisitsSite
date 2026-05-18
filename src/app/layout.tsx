import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/providers/smooth-scroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Skilled Visits — Wellness Treatments, Delivered.",
    template: "%s · Skilled Visits",
  },
  description:
    "Licensed nurses providing concierge IV therapy, wellness shots, and professional blood draw services directly to your home, hotel, office, yacht, or inside our Mobile IV Lounge.",
  openGraph: {
    title: "Skilled Visits — Wellness Treatments, Delivered.",
    description:
      "Licensed nurses providing concierge IV therapy, wellness shots, and professional blood draw services directly to your home, hotel, office, yacht, or inside our Mobile IV Lounge.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <Nav />
        <main className="flex-1 pt-20 md:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
