import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="pt-30">
      <div className="border-b border-neutral-900 pb-4">
        <motion.h1
          className="mb-10 text-center text-4xl lg:text-6xl"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h1>
        <div className="">
          {PROJECTS.map(
            (
              project: {
                title: string;
                image: string;
                description: string;
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
                  <img
                    src={project.image}
                    alt={project.title}
                    width={150}
                    height={150}
                    className="mb-6 rounded"
                  />
                </motion.div>
                <motion.div
                  className="w-full max-w-xl lg:w-3/4"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h6 className="mb-2 font-semibold">{project.title}</h6>
                  <p className="mb-4 text-neutral-400">{project.description}</p>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="mr-2 mt-4 rounded bg-neutral-950 px-2 py-1 text-sm font-medium text-purple-500 hover:text-white hover:cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
