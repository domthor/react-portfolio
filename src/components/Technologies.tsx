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
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Technologies = () => {
  return (
    <section id="technologies" className="pt-30">
      <div className="border-b border-neutral-800 pb-24">
        <h1 className="mb-10 text-center text-4xl lg:text-6xl">Technologies</h1>
        <h1 className="mt-15 text-center text-3xl lg:text-4xl">
          <span className="bg-gradient-to-r from-cyan-400 via-red-600 to-purple-700 bg-clip-text tracking-tight text-transparent">
            Frontend Frameworks
          </span>
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4 my-4">
          <div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="react"
            data-tooltip-content="React"
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>
          <div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="angular"
            data-tooltip-content="Angular"
          >
            <FaAngular className="text-7xl text-red-600" />
          </div>
          <div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="flask"
            data-tooltip-content="Flask"
          >
            <SiFlask className="text-7xl" />
          </div>
          <div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="blazor"
            data-tooltip-content="Blazor"
          >
            <SiBlazor className="text-7xl text-purple-700" />
          </div>
          <div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="tailwindCSS"
            data-tooltip-content="Tailwind CSS"
          >
            <RiTailwindCssFill className="text-7xl text-blue-400" />
          </div>
          <div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="bootstrap"
            data-tooltip-content="Bootstrap"
          >
            <SiBootstrap className="text-7xl text-purple-700" />
          </div>
        </div>
        <h1 className="mt-15 text-center text-3xl lg:text-4xl">
          <span className="bg-gradient-to-r from-blue-700 via-yellow-300 to-blue-500 bg-clip-text tracking-tight text-transparent">
            Programming Languages
          </span>
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4 my-4">
          <div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="c++"
            data-tooltip-content="C++"
          >
            <SiCplusplus className="text-7xl text-blue-700" />
          </div>
          <div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="c#"
            data-tooltip-content="C#"
          >
            <TbBrandCSharp className="text-7xl text-purple-700" />
          </div>
          <div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="python"
            data-tooltip-content="Python"
          >
            <FaPython className="text-7xl text-yellow-300" />
          </div>
          <div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="typescript"
            data-tooltip-content="TypeScript"
          >
            <SiTypescript className="text-7xl text-blue-600" />
          </div>
        </div>
        <h1 className="mt-15 text-center text-3xl lg:text-4xl">
          <span className="bg-gradient-to-r from-neutral-100 via-orange-500 to-green-500 bg-clip-text tracking-tight text-transparent">
            Database & API Integration
          </span>
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4 my-4">
          <div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="sql"
            data-tooltip-content="SQL"
          >
            <DiMsqlServer className="text-7xl" />
          </div>
          <div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="cypress"
            data-tooltip-content="Cypress"
          >
            <SiCypress className="text-7xl text-green-600" />
          </div>
          <div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="postman"
            data-tooltip-content="Postman"
          >
            <SiPostman className="text-7xl text-orange-500" />
          </div>
          <div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="swagger"
            data-tooltip-content="Swagger"
          >
            <SiSwagger className="text-7xl text-green-500" />
          </div>
        </div>
        <h1 className="mt-15 text-center text-3xl lg:text-4xl">
          <span className="bg-gradient-to-r from-orange-500 via-neutral-100 to-blue-600 bg-clip-text tracking-tight text-transparent">
            Version Control & DevOps
          </span>
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4 my-4">
          <div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="git"
            data-tooltip-content="Git"
          >
            <SiGit className="text-7xl text-orange-500" />
          </div>
          <div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="github"
            data-tooltip-content="GitHub"
          >
            <SiGithub className="text-7xl text-neutral-300" />
          </div>
          <div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="azureDevops"
            data-tooltip-content="Azure DevOps"
          >
            <VscAzureDevops className="text-7xl text-blue-600" />
          </div>
        </div>
      </div>

      <Tooltip id="react" place="bottom" />
      <Tooltip id="angular" place="bottom" />
      <Tooltip id="flask" place="bottom" />
      <Tooltip id="blazor" place="bottom" />
      <Tooltip id="tailwindCSS" place="bottom" />
      <Tooltip id="bootstrap" place="bottom" />
      <Tooltip id="c++" place="bottom" />
      <Tooltip id="c#" place="bottom" />
      <Tooltip id="python" place="bottom" />
      <Tooltip id="typescript" place="bottom" />
      <Tooltip id="sql" place="bottom" />
      <Tooltip id="cypress" place="bottom" />
      <Tooltip id="postman" place="bottom" />
      <Tooltip id="swagger" place="bottom" />
      <Tooltip id="git" place="bottom" />
      <Tooltip id="github" place="bottom" />
      <Tooltip id="azureDevops" place="bottom" />
    </section>
  );
};

export default Technologies;
