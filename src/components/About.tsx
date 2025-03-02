import aboutImg from "../assets/Nature.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="pt-30">
      <div className="border-b border-neutral-900 pb-4">
        <motion.h1
          className="mb-10 text-center text-4xl lg:text-6xl"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>
        <div className="flex flex-wrap align-top">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center">
              <img src={aboutImg} alt="About Me" className="rounded-3xl m-9" />
            </div>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center lg:justify-start">
              <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                {ABOUT_TEXT}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
