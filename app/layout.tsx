import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Outfit } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});


const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});


export const metadata: Metadata = {
  title: {
    default: "Dulce Tutoring",
    template: "%s | Dulce Tutoring",
  },
  description:
    "Personalized tutoring focused on helping students grow with confidence.",
};


export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">

      <body className={`${inter.variable} ${outfit.variable}`}>

        <Navbar />

        <main>
          {children}
        </main>

        <Footer />

      </body>

    </html>
  );
}