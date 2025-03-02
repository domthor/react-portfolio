import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/T.png";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

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
      <div className="border-b border-neutral-900 pb-16 lg:mb-35">
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
              <a
                href="https://www.google.com/maps/@51.9952263,-9.6438638,3a,75y,5.59h,75.88t/data=!3m7!1e1!3m5!1s50-_06RUelcxC2eCHRzAvg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D14.117470504734484%26panoid%3D50-_06RUelcxC2eCHRzAvg%26yaw%3D5.586543401603567!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  src={profilePic}
                  alt="Dominick Thornton"
                  className="rounded-3xl"
                  data-tooltip-id="gap-of-dunloe"
                  data-tooltip-content="Gap of Dunloe, County Kerry, Ireland"
                />
              </a>
            </div>
          </div>
        </div>
        <Tooltip id="gap-of-dunloe" place="bottom" />
      </div>
    </section>
  );
};

export default Hero;
