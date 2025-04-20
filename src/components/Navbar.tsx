import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black py-6 px-8 shadow-lg z-50 flex items-center justify-between">
      {/* Logo on the left with link to Home */}
      <div className="pl-8 flex items-center">
        <a
          href="#home"
          className="text-5xl font-bold text-neutral-300 hover:text-white transition duration-200"
        >
          DT
        </a>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-8 text-neutral-300 text-lg">
        <li>
          <a href="#about" className="hover:text-white transition duration-200">
            About
          </a>
        </li>
        <li>
          <a
            href="#technologies"
            className="hover:text-white transition duration-200"
          >
            Technologies
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="hover:text-white transition duration-200"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="hover:text-white transition duration-200"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#education"
            className="hover:text-white transition duration-200"
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-white transition duration-200"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Social Media Icons on the Right */}
      <div className="pr-8 flex items-center gap-8 text-2xl text-neutral-300">
        <a
          href="https://www.linkedin.com/in/dominick-thornton-62b51a223/"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip-id="linkedin"
          data-tooltip-content="LinkedIn"
        >
          <FaLinkedin className="hover:text-blue-500 transition duration-200 cursor-pointer" />
        </a>
        <a
          href="https://github.com/domthor"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip-id="githubNav"
          data-tooltip-content="GitHub"
        >
          <FaGithub className="hover:text-gray-400 transition duration-200 cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/dominickthornton/"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip-id="instagram"
          data-tooltip-content="Instagram"
        >
          <FaInstagram className="hover:text-pink-500 transition duration-200 cursor-pointer" />
        </a>
      </div>

      {/* Tooltips for Social Media Icons */}
      <Tooltip id="linkedin" />
      <Tooltip id="githubNav" />
      <Tooltip id="instagram" />
    </nav>
  );
};

export default Navbar;
