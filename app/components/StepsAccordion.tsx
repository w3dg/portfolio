"use client";

import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

import { IconContext } from "react-icons";

interface Steps {
  heading: string;
  description: string;
  expanded: boolean;
  id: number;
}

const StepsInfo: Steps[] = [
  {
    heading: "Brainstorm and Wireframe",
    description:
      "Ideate and define solution. Sketch interface layout and user flow. Design data interactions and architecture.",
    expanded: false,
    id: 1,
  },
  {
    heading: "Development",
    description:
      "React components, Tailwind styles, TypeScript checks. Node.js API logic, GraphQL data orchestration. Store and interact with data efficiently.",
    expanded: false,
    id: 2,
  },
  {
    heading: "Test & Polish",
    description: "Pixel Perfect and UI responsiveness, Unit tests for peace of mind.",
    expanded: false,
    id: 3,
  },
  {
    heading: "Deployment",
    description: "Leverage Serverless and Servers, CDNs and Load balancers to manage deployment at any scale.",
    expanded: false,
    id: 4,
  },
];

// https://codesandbox.io/p/sandbox/framer-motion-accordion-qx958?file=%2Fsrc%2FExample.tsx%3A17%2C9 by mattgperry

const Accordion = ({
  i,
  heading,
  description,
  expanded,
  setExpanded,
}: {
  i: number;
  expanded: any;
  setExpanded: any;
  heading: string;
  description: string;
}) => {
  const isOpen = i === expanded;

  return (
    <div className="border-b border-neutral-50/10 py-2">
      <button
        className={"px-4 w-full py-2 cursor-pointer rounded-md " + (isOpen ? "bg-[#171717]" : "bg-transparent")}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-start gap-4 text-lg w-full">
            <p className="text-green-200/50">0{i}.</p>
            <p>{heading}</p>
          </div>
          <IconContext.Provider value={{ className: isOpen ? "text-green-300" : "" }}>
            {isOpen ? <IoChevronUp /> : <IoChevronDown />}
          </IconContext.Provider>
        </div>
      </button>
      {isOpen && (
        <p key="content" className="px-4 py-2 lg:px-16 text-neutral-400 text-sm lg:text-base">
          {description}
        </p>
      )}
    </div>
  );
};

export const StepsAccordion = () => {
  const [expanded, setExpanded] = useState<false | number>(0);

  return (
    <div className="w-10/12 mx-auto lg:w-full h-auto pb-6">
      {StepsInfo.map((step) => {
        return (
          <Accordion
            key={step.id}
            i={step.id}
            heading={step.heading}
            description={step.description}
            expanded={expanded}
            setExpanded={setExpanded}
          ></Accordion>
        );
      })}
    </div>
  );
};
