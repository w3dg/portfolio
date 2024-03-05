import Link from "next/link";
import { AllLinks } from "./AllLinks";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-8 px-16 pt-10 pb-16 text-center border-t border-neutral-600/70 lg:flex-row lg:px-52 lg:py-18 text-neutral-500">
      <p>&copy; {new Date().getFullYear()} All rights reserved</p>
      <AllLinks footer></AllLinks>
      <p className="mb-4 lg:mb-0 lg:ml-8">
        Made with{" "}
        <Link href={"https://nextjs.org"} target="_blank" className="underline text-stone-400 hover:text-stone-200">
          NextJS
        </Link>{" "}
        and <span>💟</span>
      </p>
    </footer>
  );
}
