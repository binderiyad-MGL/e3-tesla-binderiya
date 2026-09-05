import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import { CalProvider } from "@/components/CalProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tesla Model 3",
  description:
    "Model 3 — 0.99% APR Available. Жолоодож үзэх цагаа онлайнаар захиална уу.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="mn" className={`${inter.variable} ${raleway.variable}`}>
      <body className="bg-ink font-sans text-white antialiased">
        {children}
        <CalProvider />
      </body>
    </html>
  );
}
