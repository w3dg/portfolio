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

export const StepsAccordion = () => {
  const [steps, setSteps] = useState<Steps[]>(StepsInfo);
  const [currentOpenId, setCurrentOpenId] = useState(0);

  // if the current open item is clicked, close it
  // if other is clicked, expand that
  // set all others to non-expanded

  const handleClick = (id: number): void => {
    setSteps(
      // cant click in a row, ccurent open id keeps being set
      steps.map((s) => {
        if (s.id === id) {
          if (s.id === currentOpenId) return { ...s, expanded: false };
          else return { ...s, expanded: true };
        } else {
          return { ...s, expanded: false };
        }
      })
    );
    setCurrentOpenId(id);
  };

  return (
    <IconContext.Provider value={{ className: "text-neutral-500" }}>
      <div className="w-10/12 mx-auto lg:w-full h-auto pb-6">
        {steps.map((step) => {
          return (
            <div key={step.id}>
              <button
                className={
                  "w-full flex items-center justify-between hover:cursor-pointer px-2 py-4 text-left" +
                  (step.id !== 1 ? " border-t border-neutral-700/70" : "")
                }
                onClick={() => handleClick(step.id)}
              >
                <p>{step.heading}</p>
                <IconContext.Provider value={{ className: step.expanded ? "text-green-300" : "" }}>
                  {step.expanded ? <IoChevronUp></IoChevronUp> : <IoChevronDown></IoChevronDown>}
                </IconContext.Provider>
              </button>
              {!step.expanded ? <></> : <p className="text-neutral-400 px-2 pt-3 pb-6">{step.description}</p>}
            </div>
          );
        })}
      </div>
    </IconContext.Provider>
  );
};
