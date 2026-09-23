import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bayu Pratama — Software Engineer",
    template: "%s — Bayu Pratama",
  },
  description:
    "Portfolio of Bayu Pratama Agus Kurniawan — Software Engineer building mobile, backend, web, and applied AI products with Kotlin, Flutter, Laravel, Firebase, and Python.",
  keywords: [
    "Bayu Pratama",
    "Software Engineer",
    "Laravel Developer",
    "Android Developer",
    "Flutter Developer",
    "Kotlin",
    "Indonesia",
  ],
  authors: [{ name: "Bayu Pratama Agus Kurniawan" }],
  openGraph: {
    title: "Bayu Pratama — Software Engineer",
    description: "Mobile, backend, web, and applied AI engineering portfolio.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bayu Pratama — Software Engineer",
    description: "Mobile, backend, web, and applied AI engineering portfolio.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
