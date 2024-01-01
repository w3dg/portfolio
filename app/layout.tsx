import type { Metadata } from "next";

import { inter, montserrat } from "./fonts/fonts";

import "./globals.css";
import { Navbar } from "./components/Navbar";

export const metadata: Metadata = {
  title: "Portfolio For Debopam Gupta",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-black text-neutral-200 overflow-x-hidden ${inter.className} antialiased`}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
