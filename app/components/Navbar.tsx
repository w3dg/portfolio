import Link from "next/link";
import Image from "next/image";

import navLogo from "./navLogo.svg";

export const Navbar = () => {
  return (
    <nav className="border-b border-neutral-800/70 w-full grid lg:grid-cols-[10vw_1fr_10vw] lg:px-52">
      <div className="hidden lg:flex items-center justify-center">
        <Image src={navLogo} alt="Logo with letters DG. Initials for Debopam Gupta" height={64} width={64} />
      </div>
      <ul className="flex gap-4 lg:gap-6 items-center justify-center w-full px-4 h-16">
        <li className="hover:underline hover:underline-offset-2 text-neutral-300 hover:text-green-300 transition-colors duration-150">
          <Link href={"/#home"}>Home</Link>
        </li>
        <li className="hover:underline hover:underline-offset-2 text-neutral-300 hover:text-green-300 transition-colors duration-150">
          <Link href={"/#process"}>Process</Link>
        </li>
        <li className="hover:underline hover:underline-offset-2 text-neutral-300 hover:text-green-300 transition-colors duration-150">
          <Link href={"/#works"}>Works</Link>
        </li>
        <li className="hover:underline hover:underline-offset-2 text-neutral-300 hover:text-green-300 transition-colors duration-150">
          <Link href={"/message"}>Get in touch</Link>
        </li>
      </ul>
      <Link
        href={"#"}
        className="hidden lg:flex items-center justify-center underline underline-offset-2 text-green-200/40 hover:text-green-300"
      >
        Share
      </Link>
    </nav>
  );
};
