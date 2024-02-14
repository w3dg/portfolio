import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { IconType } from "react-icons";
import { LuBrush, LuCode2, LuGlobe, LuTestTube2 } from "react-icons/lu";

interface Steps {
  heading: string;
  description: string;
  expanded: boolean;
  id: number;
  icon: IconType;
}

const StepsInfo: Steps[] = [
  {
    heading: "Brainstorm & Design",
    description:
      "Ideate and define solution. Sketch interface layout and user flow. Design data interactions and architecture.",
    expanded: false,
    id: 1,
    icon: LuBrush,
  },
  {
    heading: "Development",
    description:
      "React components, Tailwind styles, TypeScript checks. Node.js API logic, GraphQL data orchestration. Store and interact with data efficiently.",
    expanded: false,
    id: 2,
    icon: LuCode2,
  },
  {
    heading: "Test & Polish",
    description: "Pixel Perfect and UI responsiveness, Unit tests for peace of mind.",
    expanded: false,
    id: 3,
    icon: LuTestTube2,
  },
  {
    heading: "Deployment",
    description: "Leverage Serverless and Servers, CDNs and Load balancers to manage deployment at any scale.",
    expanded: false,
    id: 4,
    icon: LuGlobe,
  },
];

export function ProcessAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {StepsInfo.map(({ id, heading, description, icon: HeadingIcon }) => {
        return (
          <AccordionItem value={`item-${id}`} key={`item-${id}`} className="border-neutral-800">
            <AccordionTrigger className="text-base">
              <div className="flex gap-4 justify-start items-center">
                <HeadingIcon></HeadingIcon>
                <p>{heading}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-neutral-400">{description}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
