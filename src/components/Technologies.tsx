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
import { motion } from "framer-motion";


const iconVariants = (duration: number) => ({
  initial: { y: -10 },
  animate: { 
    y: [10, -10],
    transition: {
      duration: duration,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "linear"
    }
  }
});

const Technologies = () => {
  return (
    <section id="technologies" className="pt-30">
      <div className="border-b border-neutral-800 pb-24">
        <motion.h1
          className="mb-10 text-center text-4xl lg:text-6xl"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Technologies
        </motion.h1>
        <h1 className="mt-15 text-center text-3xl lg:text-4xl">
          <span className="bg-gradient-to-r from-cyan-400 via-red-600 to-purple-700 bg-clip-text tracking-tight text-transparent">
            Frontend Frameworks
          </span>
        </h1>
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 my-6"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="react"
            data-tooltip-content="React"
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="angular"
            data-tooltip-content="Angular"
            variants={iconVariants(5.5)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
          >
            <FaAngular className="text-7xl text-red-600" />
          </motion.div>
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="flask"
            data-tooltip-content="Flask"
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
          >
            <SiFlask className="text-7xl" />
          </motion.div>
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="blazor"
            data-tooltip-content="Blazor"
            variants={iconVariants(4.25)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
          >
            <SiBlazor className="text-7xl text-purple-700" />
          </motion.div>
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="tailwindCSS"
            data-tooltip-content="Tailwind CSS"
            variants={iconVariants(3.75)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
          >
            <RiTailwindCssFill className="text-7xl text-blue-400" />
          </motion.div>
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="bootstrap"
            data-tooltip-content="Bootstrap"
            variants={iconVariants(4.5)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
          >
            <SiBootstrap className="text-7xl text-purple-700" />
          </motion.div>
        </motion.div>
        <h1 className="mt-15 text-center text-3xl lg:text-4xl">
          <span className="bg-gradient-to-r from-blue-700 via-yellow-300 to-blue-500 bg-clip-text tracking-tight text-transparent">
            Programming Languages
          </span>
        </h1>
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 my-6"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="c++"
            data-tooltip-content="C++"
            variants={iconVariants(4.75)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
          >
            <SiCplusplus className="text-7xl text-blue-700" />
          </motion.div>
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="c#"
            data-tooltip-content="C#"
            variants={iconVariants(5.25)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
          >
            <TbBrandCSharp className="text-7xl text-purple-700" />
          </motion.div>
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="python"
            data-tooltip-content="Python"
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
          >
            <FaPython className="text-7xl text-yellow-300" />
          </motion.div>
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="typescript"
            data-tooltip-content="TypeScript"
            variants={iconVariants(5.75)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
          >
            <SiTypescript className="text-7xl text-blue-600" />
          </motion.div>
        </motion.div>
        <h1 className="mt-15 text-center text-3xl lg:text-4xl">
          <span className="bg-gradient-to-r from-neutral-100 via-orange-500 to-green-500 bg-clip-text tracking-tight text-transparent">
            Database & API Integration
          </span>
        </h1>
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 my-6"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="sql"
            data-tooltip-content="SQL"
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
          >
            <DiMsqlServer className="text-7xl" />
          </motion.div>
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="cypress"
            data-tooltip-content="Cypress"
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
          >
            <SiCypress className="text-7xl text-green-600" />
          </motion.div>
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="postman"
            data-tooltip-content="Postman"
            variants={iconVariants(5.5)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
          >
            <SiPostman className="text-7xl text-orange-500" />
          </motion.div>
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="swagger"
            data-tooltip-content="Swagger"
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
          >
            <SiSwagger className="text-7xl text-green-500" />
          </motion.div>
        </motion.div>
        <h1 className="mt-15 text-center text-3xl lg:text-4xl">
          <span className="bg-gradient-to-r from-orange-500 via-neutral-100 to-blue-600 bg-clip-text tracking-tight text-transparent">
            Version Control & DevOps
          </span>
        </h1>
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 my-6"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="git"
            data-tooltip-content="Git"
            variants={iconVariants(4.25)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
          >
            <SiGit className="text-7xl text-orange-500" />
          </motion.div>
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="github"
            data-tooltip-content="GitHub"
            variants={iconVariants(3.75)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
          >
            <SiGithub className="text-7xl text-neutral-300" />
          </motion.div>
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="azureDevops"
            data-tooltip-content="Azure DevOps"
            variants={iconVariants(4.5)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
          >
            <VscAzureDevops className="text-7xl text-blue-600" />
          </motion.div>
        </motion.div>
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
