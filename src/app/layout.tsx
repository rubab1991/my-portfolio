import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rubab Bukhari | Frontend Developer & Next.js Specialist",
  description:
    "Portfolio of Rubab Bukhari — frontend developer specializing in Next.js, TypeScript, and modern web technologies. View my projects, skills, and get in touch.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark text-white font-[family-name:var(--font-geist-sans)]`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
