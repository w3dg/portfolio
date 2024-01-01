"use client";

import { IoLogoGithub, IoOpenOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import Project from "../interfaces/Project";
import Link from "next/link";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col justify-between text-left border-cyan-50/20 border-2 rounded-md bg-gradient-to-br from-transparent to-cyan-200/10 p-4 md:p-6 lg:p-8 hover:from-transparent hover:to-cyan-300/20 hover:scale-105 transition-all duration-500"
    >
      <div>
        <h3 className="text-base mb-2 font-bold">{project.projectName}</h3>
        <p className="text-neutral-400">{project.description}</p>
      </div>
      <div className="flex gap-2 pt-4 pb-2 text-sm uppercase tracking-wide text-neutral-200">
        <Link
          href={project.link}
          className="flex items-center gap-2 transition-colors duration-300 p-2 rounded-md hover:bg-cyan-100/60 hover:text-neutral-950 text-neutral-400"
          target="_blank"
          rel="_blank"
        >
          <span>View</span>
          <IoOpenOutline></IoOpenOutline>
        </Link>
        <Link
          href={project.src}
          className="flex items-center gap-2 transition-colors duration-300 p-2 rounded-md hover:bg-cyan-100/60 hover:text-neutral-950 text-neutral-400"
          target="_blank"
          rel="_blank"
        >
          <span>Source</span>
          <IoLogoGithub></IoLogoGithub>
        </Link>
      </div>
    </motion.article>
  );
};
