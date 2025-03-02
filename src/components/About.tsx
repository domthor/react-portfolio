import aboutImg from "../assets/Nature.png";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <section id="about" className="pt-30">
      <div className="border-b border-neutral-900 pb-4">
        <h1 className="mb-10 text-center text-4xl lg:text-6xl">About Me</h1>
        <div className="flex flex-wrap align-top">
          <div className="w-full lg:w-1/2">
            <div className="flex items-center justify-center">
              <img src={aboutImg} alt="About Me" className="rounded-3xl m-9" />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
              <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                {ABOUT_TEXT}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
