import Link from "next/link";
import Image from "next/image";

import navLogo from "./navlogo.svg";
import NavLinks from "./NavLinks";

export const Navbar = () => {
  return (
    <nav className="backdrop-blur-md backdrop-brightness-50 fixed top-0 inset-x-0 border-b border-neutral-800/70 w-full grid lg:grid-cols-[10vw_1fr_10vw] lg:px-52">
      <div className="items-center justify-center hidden lg:flex">
        <Image src={navLogo} alt="Logo with letters DG. Initials for Debopam Gupta" height={64} width={64} priority />
      </div>
      <NavLinks />
      <Link
        href={"/message"}
        className="items-center justify-center hidden underline lg:flex underline-offset-2 text-green-200/40 hover:text-green-300"
      >
        Message
      </Link>
    </nav>
  );
};
