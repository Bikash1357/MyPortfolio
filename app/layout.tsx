import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/resume";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: "Software Developer with two apps live on Google Play. Mobile apps, REST APIs and data.",
  keywords: ["Bikash Kumar Thakur", "Software Developer", "ExpenseCatch", "Wingmail", "Portfolio"],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: "Software Developer with two apps live on Google Play.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0c0d",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-ink font-sans text-black">{children}</body>
    </html>
  );
}
