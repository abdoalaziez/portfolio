import { useState } from "react";
import Typewriter from "typewriter-effect";
import { MdHomeFilled, MdMedicalServices, MdContactPhone } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { FaRProject, FaRegUser } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white z-20 fixed left-0 right-0 shadow-md">
      <nav className="bg-gray-300 flex items-center justify-between h-[60px] px-4 md:px-8">
        <h1 className="text-3xl font-bold">
          <Typewriter
            options={{
              strings: ["U A Z"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <button
          aria-label="Toggle navigation menu"
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-[60px] left-0 w-full bg-gray-300 md:static md:flex md:items-center md:space-x-6 md:w-auto transition-all duration-300 ease-in-out`}
        >
          {[
            { icon: MdHomeFilled, label: "Home", href: "#home" },
            { icon: FaRegUser, label: "About Me", href: "#about" },
            { icon: GiSkills, label: "Skills", href: "#skills" },
            { icon: MdMedicalServices, label: "Services", href: "#services" },
            { icon: FaRProject, label: "My Projects", href: "#MyProject" },
            { icon: MdContactPhone, label: "Contact Me", href: "#contact-me" },
          ].map(({ icon: Icon, label, href }) => (
            <li key={label} className="border-b md:border-none font-bold flex items-center">
              <Icon className="text-2xl text-gray-700 mr-2" />
              <a
                href={href}
                className="block px-4 py-2 md:px-6 text-gray-700 rounded-lg hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-500 active:bg-blue-800 transition duration-300 ease-in-out"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
