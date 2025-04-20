import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="pt-30">
      <div className="border-b border-neutral-900 pb-4">
        <motion.h1
          className="mb-10 text-center text-4xl lg:text-6xl"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Experience
        </motion.h1>
        <div className="">
          {EXPERIENCES.map(
            (
              experience: {
                year: string;
                role: string;
                company: string;
                descriptions: string[];
                technologies: string[];
              },
              index: number
            ) => (
              <div
                key={index}
                className="mb-8 flex flex-wrap lg:justify-center"
              >
                <motion.div
                  className="w-full lg:w-1/4"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <p className="mb-2 text-sm text-neutral-400">
                    {experience.year}
                  </p>
                </motion.div>
                <motion.div
                  className="w-full max-w-xl lg:w-3/4"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <div className="mb-2 font-semibold">
                    {experience.role} -{" "}
                    <span className="text-sm text-purple-100">
                      {experience.company}
                    </span>
                  </div>
                  <ul className="mb-4 text-neutral-400 list-disc pl-5">
                    {experience.descriptions.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500 hover:text-white hover:cursor-default"
                      >
                        <a href="#technologies">{tech}</a>
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
