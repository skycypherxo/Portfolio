import type { Metadata } from "next";
import localFont from "next/font/local";
import { Anton, Bebas_Neue } from "next/font/google";
import "./globals.css";
import CustomCursor from "./CustomCursor";

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

const anton = Anton({
weight: "400",
subsets: ["latin"],
variable: "--font-display",
});

const bebasNeue = Bebas_Neue({
weight: "400",
subsets: ["latin"],
variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
title: "Vaishnavi Poti — Portfolio",
description: "Ultra-minimal black-and-white portfolio for Vaishnavi Poti.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${anton.variable}
          ${bebasNeue.variable}
          bg-black
          text-white
          antialiased
        `}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
