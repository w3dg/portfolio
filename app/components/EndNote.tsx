"use client";

import { IoSend } from "react-icons/io5";

import Link from "next/link";

const EndNote = () => {
  return (
    <section className="flex flex-col gap-7 justify-center items-center lg:flex-row lg:justify-start px-16 mt-6 lg:px-52">
      <h2 className="text-3xl font-bold md:text-left md:text-4xl lg:text-5xl">Let's Collaborate</h2>
      <Link
        href={"/message"}
        className="rounded text-neutral-200 py-3 px-6 font-bold flex items-center gap-4 border-2 border-neutral-800 group bg-gradient-to-r from-transparent to-transparent hover:from-transparent hover:to-green-400/20 hover:border-2 hover:border-green-200/30 hover:text-white transition-colors"
      >
        <span>Say hello!</span>
        <div className="group-hover:-rotate-45 duration-200">
          <IoSend></IoSend>
        </div>
      </Link>
    </section>
  );
};

export default EndNote;
