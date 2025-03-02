import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/T.png";
import { motion } from "framer-motion";

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Hero = () => {
  return (
    <section id="home" className="pt-30">
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1
                className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                variants={container(0)}
                initial="hidden"
                animate="visible"
              >
                Dominick Thornton
              </motion.h1>
              <motion.span
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
              >
                Full Stack Developer
              </motion.span>
              <motion.p
                className="my-2 max-w-xl py-6 font-light tracking-tighter"
                variants={container(1)}
                initial="hidden"
                animate="visible"
              >
                {HERO_CONTENT}
              </motion.p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center">
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                src={profilePic}
                alt="Dominick Thornton"
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
