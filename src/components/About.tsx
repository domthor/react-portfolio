import aboutImg from "../assets/Nature.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

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
              <a
                href="https://www.google.com/maps/@37.9003444,-122.5787633,3a,90y,132.37h,105.15t/data=!3m8!1e1!3m6!1sAF1QipPtE7Qw6MHmmL1m4Z6I1J1C3-joEx9LNQLQgX7H!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipPtE7Qw6MHmmL1m4Z6I1J1C3-joEx9LNQLQgX7H%3Dw900-h600-k-no-pi-15.14732867970693-ya104.36936236403156-ro0-fo100!7i8704!8i4352?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={aboutImg}
                  alt="About Me"
                  className="rounded-3xl m-9"
                  data-tooltip-id="muir-woods"
                  data-tooltip-content="Muir Woods, Mill Valley, California"
                />
              </a>
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
        <Tooltip id="muir-woods" place="bottom" />
      </div>
    </section>
  );
};

export default About;
