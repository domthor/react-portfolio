import { RiReactjsLine } from "react-icons/ri";
import { FaAngular } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiBlazor } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiSwagger } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { SiGit } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiBootstrap } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="mt-20 mb-10 text-center text-4xl lg:text-6xl">
        Technologies
      </h1>
      <h1 className="mt-15 text-center text-3xl lg:text-4xl">
        <span className="bg-gradient-to-r from-cyan-400 via-red-600 to-purple-700 bg-clip-text tracking-tight text-transparent">
          Frontend Frameworks
        </span>
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-4 my-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaAngular className="text-7xl text-red-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiFlask className="text-7xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiBlazor className="text-7xl text-purple-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl text-blue-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiBootstrap className="text-7xl text-purple-700" />
        </div>
      </div>
      <h1 className="mt-15 text-center text-3xl lg:text-4xl">
        <span className="bg-gradient-to-r from-blue-700 via-yellow-300 to-blue-500 bg-clip-text tracking-tight text-transparent">
          Programming Languages
        </span>
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-4 my-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCplusplus className="text-7xl text-blue-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandCSharp className="text-7xl text-purple-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPython className="text-7xl text-yellow-300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTypescript className="text-7xl text-blue-600" />
        </div>
      </div>
      <h1 className="mt-15 text-center text-3xl lg:text-4xl">
        <span className="bg-gradient-to-r from-neutral-100 via-orange-500 to-green-500 bg-clip-text tracking-tight text-transparent">
          Database & API Integration
        </span>
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-4 my-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiMsqlServer className="text-7xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCypress className="text-7xl text-green-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostman className="text-7xl text-orange-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSwagger className="text-7xl text-green-500" />
        </div>
      </div>
      <h1 className="mt-15 text-center text-3xl lg:text-4xl">
        <span className="bg-gradient-to-r from-orange-500 via-neutral-100 to-blue-600 bg-clip-text tracking-tight text-transparent">
            Version Control & DevOps
        </span>
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-4 my-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiGit className="text-7xl text-orange-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiGithub className="text-7xl text-neutral-300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <VscAzureDevops className="text-7xl text-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
