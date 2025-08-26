import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { PropsWithChildren } from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";
import ScrollToTop from "@/components/scroll-to-top";

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
  title: {
    default: "Haidee Sui PT - Physical Therapy & Wellness",
    template: "%s | Haidee Sui PT"
  },
  description: "Professional physical therapy services with Haidee Sui, DPT. Personalized treatment plans, injury rehabilitation, and wellness programs. Book your appointment today.",
  keywords: ["physical therapy", "PT", "rehabilitation", "injury recovery", "wellness", "Haidee Sui", "DPT", "physiotherapy"],
  authors: [{ name: "Haidee Sui", url: "https://haideesuipt.com" }],
  creator: "Haidee Sui",
  publisher: "Haidee Sui PT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://haideesuipt.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Haidee Sui PT - Professional Physical Therapy Services",
    description: "Expert physical therapy care with personalized treatment plans. Schedule your consultation with Dr. Haidee Sui today.",
    url: "https://haideesuipt.com",
    siteName: "Haidee Sui PT",
    images: [
      {
        url: "/assets/haidee-logo.png",
        width: 360,
        height: 120,
        alt: "Haidee Sui Physical Therapy Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haidee Sui PT - Professional Physical Therapy Services",
    description: "Expert physical therapy care with personalized treatment plans. Schedule your consultation today.",
    images: ["/assets/haidee-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code when you get it
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header/>
        <main className="flex-1"> {children} </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
