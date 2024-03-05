import Link from "next/link";
import Image from "next/image";

import navLogo from "./navlogo.svg";

export const Navbar = () => {
  return (
    <nav className="backdrop-blur-md backdrop-brightness-50 fixed top-0 inset-x-0 border-b border-neutral-800/70 w-full grid lg:grid-cols-[10vw_1fr_10vw] lg:px-52">
      <div className="items-center justify-center hidden lg:flex">
        <Image src={navLogo} alt="Logo with letters DG. Initials for Debopam Gupta" height={64} width={64} priority />
      </div>
      <ul className="flex items-center justify-center w-full h-16 gap-4 px-4 lg:gap-6">
        <li className="transition-colors duration-150 hover:underline hover:underline-offset-2 text-neutral-300 hover:text-green-300">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="transition-colors duration-150 hover:underline hover:underline-offset-2 text-neutral-300 hover:text-green-300">
          <Link href={"/projects"}>Projects</Link>
        </li>
        <li className="transition-colors duration-150 hover:underline hover:underline-offset-2 text-neutral-300 hover:text-green-300">
          <Link href={"/message"}>Get in touch</Link>
        </li>
      </ul>
      <Link
        href={"/message"}
        className="items-center justify-center hidden underline lg:flex underline-offset-2 text-green-200/40 hover:text-green-300"
      >
        Message
      </Link>
    </nav>
  );
};
