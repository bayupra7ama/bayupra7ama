import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: {
    default: "Bayu Pratama — Software Engineer",
    template: "%s — Bayu Pratama",
  },
  description:
    "Portfolio of Bayu Pratama Agus Kurniawan — Software Engineer building mobile, backend, web, and applied AI products.",
  keywords: [
    "Bayu Pratama",
    "Software Engineer",
    "Laravel Developer",
    "Kotlin Developer",
    "Flutter Developer",
    "Android Developer",
    "Indonesia",
  ],
  authors: [{ name: "Bayu Pratama Agus Kurniawan" }],
  openGraph: {
    title: "Bayu Pratama — Software Engineer",
    description: "Mobile, backend, web, and applied AI products built around real-world workflows.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
