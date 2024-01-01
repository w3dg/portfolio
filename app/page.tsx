"use client";

import Link from "next/link";
import { Introduction } from "./components/Introduction";
import { Process } from "./components/Process";
import { Works } from "./components/Works";
import { AllLinks } from "./components/AllLinks";
import EndNote from "./components/EndNote";

export default function Home() {
  return (
    <>
      <main className="pb-32">
        <Introduction></Introduction>
        <Process></Process>
        <Works></Works>
        <EndNote></EndNote>
      </main>
      <footer className="flex flex-col justify-between items-center gap-8 px-16 border-t border-neutral-600/70 text-center pt-10 pb-16 lg:flex-row lg:px-52 lg:py-18 text-neutral-500">
        <p>&copy; {new Date().getFullYear()} All rights reserved</p>
        <AllLinks footer></AllLinks>
        <p className="mb-4 lg:mb-0 lg:ml-8">
          Made with{" "}
          <Link href={"https://nextjs.org"} target="_blank" className="text-stone-400 underline hover:text-stone-200">
            NextJS
          </Link>{" "}
          and <span>💟</span>
        </p>
      </footer>
    </>
  );
}
