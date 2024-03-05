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
      <main className="pb-10">
        <Introduction></Introduction>
        {/* <Process></Process>
        <Works></Works> */}
        {/* <EndNote></EndNote> */}
      </main>
    </>
  );
}
