import { motion } from "framer-motion";
import { StepsAccordion } from "./StepsAccordion";

export const Process = () => {
  return (
    <motion.section
      className="grid gap-8 px-8 my-8 py-8 lg:flex-1 lg:grid-cols-2 lg:px-52 lg:mt-24 lg:mb-32"
      id="process"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.35 }}
      >
        <h2 className="text-center font-bold text-2xl lg:text-left">From Design to Code</h2>
        <div className="grid gap-2 my-4 text-center text-sm max-w-[65ch] mx-auto leading-relaxed lg:text-base lg:ml-0 lg:text-left lg:max-w-[55ch]">
          <p>
            From sculpting <span className="text-green-300">sleek</span> front-end interfaces to building{" "}
            <span className="text-green-300">robust</span> backend engines, I wield every tool in the{" "}
            <span className="text-green-300">full-stack</span> arsenal.
          </p>
          <p>
            I delve into the infrastructure, weaving a seamless tapestry of code, servers, and databases. I relish the
            challenge of optimizing every layer for performance and reliability.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.65 }}
      >
        <StepsAccordion />
      </motion.div>
    </motion.section>
  );
};
