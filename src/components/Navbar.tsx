import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black py-6 px-8 shadow-lg z-50 flex items-center justify-between">
      {/* Logo on the left with link to Home */}
      <div className="flex items-center">
        <a
          href="#home"
          className="text-5xl font-bold text-neutral-300 hover:text-white transition duration-200"
        >
          DT
        </a>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-6 text-neutral-300 text-lg">
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
            href="#projects"
            className="hover:text-white transition duration-200"
          >
            Projects
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
      <div className="flex items-center gap-4 text-2xl text-neutral-300">
        <a
          href="https://www.linkedin.com/in/dominick-thornton-62b51a223/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-blue-500 transition duration-200 cursor-pointer" />
        </a>
        <a
          href="https://github.com/domthor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-gray-400 transition duration-200 cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/dominickthornton/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-pink-500 transition duration-200 cursor-pointer" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar