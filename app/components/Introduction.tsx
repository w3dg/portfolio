"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { AllLinks } from "./AllLinks";
import selfImage from "../../public/self.jpeg";

export const Introduction = () => {
  return (
    <main className="flex flex-col h-[calc(100vh-4rem)] gap-0 mt-16 pt-8 lg:pt-0">
      <section
        className="grid gap-8 px-4 grid-rows-2 lg:grid-rows-[20vh_1fr_1fr_20vh] lg:grid-cols-2 lg:px-52 lg:mt-18"
        id="home"
      >
        {" "}
        <article className="grid gap-6 text-center lg:row-start-2 lg:row-span-2 lg:col-start-1 lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="pt-4 text-base text-green-100/40 lg:text-lg lg:pt-0"
          >
            Hi! Nice to meet you, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col text-6xl font-bold leading-tight tracking-tighter text-neutral-50 lg:text-7xl"
          >
            <span>Debopam</span>
            <span>Gupta</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.7 }}
            className="max-w-[45ch] mx-auto text-neutral-300 lg:text-lg lg:ml-0"
          >
            Crafting seamless interfaces, <span className="text-green-200">forging digital frontiers.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.9 }}
            className="text-neutral-200 text-center mb-4 max-w-[50ch] text-sm mx-auto lg:text-left lg:text-base lg:mb-0 lg:ml-0 lg:pb-8"
          >
            Whether you're dreaming of a groundbreaking app, a data-driven platform, or simply a website that hums like
            a well-oiled machine, <br />
            <span className="font-bold text-green-100">let's create digital harmony together</span>.
          </motion.p>
        </article>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="lg:row-start-2 lg:row-span-2 lg:col-start-2 grid place-items-center w-full max-w-md mx-auto border-cyan-50/10 border-2 h-[30vh] p-4 rounded-2xl lg:h-auto lg:max-w-none lg:w-full relative after:absolute after:bottom-0 after:right-0 after:h-48 after:w-48 after:blur-3xl after:bg-gradient-to-br after:from-cyan-200/30 after:to-green-200/20 after:-z-10 motion-safe:after:animate-playAround"
        >
          <div className="w-24 h-24 overflow-hidden rounded-full lg:h-36 lg:w-36 outline outline-offset-2 outline-green-200">
            {/* <img src="self.jpeg" alt="Picture of Debopam Gupta standing in a field" /> */}
            <Image src={selfImage} alt="Picture of Debopam Gupta standing in a field" placeholder="blur" />
          </div>
          <p className="text-green-50/80 lg:text-lg">Full Stack Developer</p>
          <AllLinks />
        </motion.div>
      </section>
      <div className="hidden lg:flex-grow"></div>
    </main>
  );
};
