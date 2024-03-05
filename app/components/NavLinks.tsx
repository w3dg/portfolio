"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathName = usePathname();
  return (
    <ul className="flex items-center justify-center w-full h-16 gap-4 px-4 lg:gap-6">
      <li
        className={
          "transition-colors duration-150 px-2 py-1 rounded-md hover:bg-teal-300/60 text-neutral-300 " +
          (pathName === "/" && "bg-teal-300/20 transition-colors duration-300")
        }
      >
        <Link href={"/"}>Home</Link>
      </li>
      <li
        className={
          "transition-colors duration-150 px-2 py-1 rounded-md hover:bg-teal-300/60 text-neutral-300 " +
          (pathName === "/projects" && "bg-teal-300/20 transition-colors duration-300")
        }
      >
        <Link href={"/projects"}>Projects</Link>
      </li>
      <li
        className={
          "transition-colors duration-150 px-2 py-1 rounded-md hover:bg-teal-300/60 text-neutral-300 " +
          (pathName === "/message" && "bg-teal-300/20 transition-colors duration-300")
        }
      >
        <Link href={"/message"}>Get in touch</Link>
      </li>
    </ul>
  );
}
