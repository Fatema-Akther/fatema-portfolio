
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fatemaakther.vercel.app"),

  title: "Fatema Akther | Full-Stack Developer",

  description:
    "Explore the portfolio of Fatema Akther, a Full-Stack Developer specializing in Next.js, React, TypeScript, NestJS, and PostgreSQL. Discover real-world web applications, projects, and technical skills.",

  keywords: [
    "Fatema Akther",
    "Fatema Akther Portfolio",
    "Full-Stack Developer",
    "Full-Stack Developer Bangladesh",
    "Next.js Developer",
    "React Developer",
    "NestJS Developer",
    "TypeScript Developer",
    "PostgreSQL",
    "Web Developer Portfolio",
  ],

  authors: [{ name: "Fatema Akther" }],
  creator: "Fatema Akther",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Fatema Akther | Full-Stack Developer",
    description:
      "Explore my full-stack web development projects, technical expertise, and modern web applications.",
    url: "/",
    siteName: "Fatema Akther Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fatema Akther | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in Next.js, React, NestJS, TypeScript, and PostgreSQL.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
