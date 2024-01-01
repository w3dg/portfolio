"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center gap-8 justify-center py-10">
      <h2 className="text-center text-lg">Something went wrong while submitting the form.</h2>
      <p className="text-neutral-400 text-base">Please check the information entered and try again.</p>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={() => reset()}
      >
        Try again
      </button>
      <Link href={"/"} className="text-base text-cyan-200 underline hover:text-cyan-400">
        Go to homepage
      </Link>
    </main>
  );
}
