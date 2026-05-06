import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/providers/smooth-scroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  title: {
    default: "Skilled Visits — Concierge Wellness, Delivered.",
    template: "%s · Skilled Visits",
  },
  description:
    "Private in-home IV therapy, wellness shots, rapid testing and mobile phlebotomy from licensed clinicians. 24/7 across Florida and New York.",
  icons: { icon: "/brand/favicon.svg" },
  openGraph: {
    title: "Skilled Visits — Concierge Wellness, Delivered.",
    description:
      "Private in-home IV therapy, wellness shots, rapid testing and mobile phlebotomy. 24/7 across Florida and New York.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
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
