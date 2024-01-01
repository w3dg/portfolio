import Project from "../interfaces/Project";
import { ProjectCard } from "./ProjectCard";

const projectList: Project[] = [
  {
    projectName: "Job Listings",
    description: " A sample job listing site with filter tags",
    imageUrl: "/projects/job-listings.png",
    link: "https://job-listings-with-filtering-phi.vercel.app/",
    src: "https://github.com/w3dg/frontend-mentor-io/tree/main/job-listings-with-filtering",
    tags: ["ReactJS", "Typescript", "TailwindCSS"],
  },
  {
    projectName: "GitHub Profile Search",
    description: " Searches Github by username and shows top information.",
    imageUrl: "/projects/profile-search.png",
    link: "https://github-profile-search.vercel.app/",
    src: "https://github.com/w3dg/github-profile-search",
    tags: ["API", "ReactJS", "CSS"],
  },
  {
    projectName: "Github Status",
    description: " A simple Github status page made with serverless functions.",
    imageUrl:
      "https://images.unsplash.com/photo-1590595906931-81f04f0ccebb?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://ghstatus.vercel.app/",
    src: "https://github.com/w3dg/github-status",
    tags: ["API", "HTML", "CSS", "JS"],
  },
  {
    projectName: "Link Cleaner CLI",
    description: " A CLI tool to clean up your links of the various tracking parameters.",
    imageUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F7654%2F1*KDZTfB2dvoNUgqc3AVqDAQ.jpeg&f=1&nofb=1&ipt=e4ff9d4bbfd8b9505fe76dccff206f84237f96fec3a8819a0cf800b1d0d63841&ipo=images",
    link: "https://www.npmjs.com/package/linkcl",
    src: "https://github.com/w3dg/linkcl",
    tags: ["NodeJS", "CLI"],
  },
  {
    projectName: "HTTP Status Lookup",
    description: " A CLI tool to quickly look up what a http status code means.",
    imageUrl:
      "https://images.pexels.com/photos/2882570/pexels-photo-2882570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://github.com/w3dg/http-status-code-lookup",
    src: "https://github.com/w3dg/http-status-code-lookup",
    tags: ["CLI", "NodeJS"],
  },
];

export const Works = () => {
  return (
    <section className="text-center lg:text-left px-4 my-12 lg:px-52 lg:mt-12 lg:pb-20" id="works">
      <h2 className="font-bold text-xl lg:text-3xl tracking-tighter mb-6 lg:mb-10">My Works</h2>
      <div className="grid gap-12 grid-cols-1 px-12 lg:px-0 lg:grid-cols-2 xl:grid-cols-3 relative after:absolute after:bottom-0 after:right-0 after:-z-10 after:rounded-full after:h-[500px] after:w-[500px] lg:after:h-[700px] lg:after:w-[700px] after:bg-cyan-200/20 after:blur-3xl lg:after:bg-cyan-200/10 after:translate-y-80 after:translate-x-60 lg:after:translate-y-80 lg:after:translate-x-50">
        {projectList.map((project) => {
          return <ProjectCard key={project.projectName} project={project} />;
        })}
      </div>
    </section>
  );
};
