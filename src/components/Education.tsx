import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="pt-30">
      <div className="border-b border-neutral-900 pb-4">
        <motion.h1
          className="mb-10 text-center text-4xl lg:text-6xl"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Education
        </motion.h1>
        <div className="lg:w-1/2 items-start flex flex-col mx-auto">
          {EDUCATION.map(
            (
              education: {
                location: string;
                year: string;
                degree: string;
                major: string;
                gpa: string;
                school: string;
                courses: string[];
              },
              index: number
            ) => (
              <div className="mb-8 flex flex-col space-y-4">
                <div
                  key={index}
                  className="w-full flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-center justify-between lg:justify-center"
                >
                  <motion.div
                    className="w-full flex flex-col space-y-1 items-start "
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <div className="text-md lg:text-lg">{education.school}</div>
                    <div className="text-sm lg:text-md">{education.degree}</div>
                    <div className="text-sm lg:text-md">{education.major}</div>
                  </motion.div>
                  <motion.div
                    className="w-full flex flex-col space-y-1 items-start lg:items-end text-neutral-400"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <div className="text-md lg:text-lg">
                      {education.location}
                    </div>
                    <div className="text-sm lg:text-md">{education.year}</div>
                    <div className="text-sm lg:text-md">
                      GPA: {education.gpa}
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  className="w-full text-neutral-400"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <div className="font-semibold">Relevant Courses: </div>
                  <div className="mb-4 text-neutral-400 flex flex-wrap pl-2">
                    {education.courses.map((course, index) => (
                      <div
                        key={index}
                        className="mr-2 mt-3 rounded bg-neutral-950 px-2 py-1 text-sm font-medium text-purple-500 hover:text-white hover:cursor-default"
                      >
                        {course}
                      </div>
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

export default Education;
