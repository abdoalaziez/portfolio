import { useState } from "react";
import Logo from "../assets/Logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white z-20 fixed left-0 right-0 shadow-md">
      <nav className="bg-gray-300 flex items-center justify-between h-[60px] px-4 md:px-8">
        <img src={Logo} alt="Logo" className="h-8 w-auto" />
        <button
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
          } absolute top-[60px] left-0 w-full bg-gray-300 md:static md:flex md:items-center md:space-x-6 md:w-auto`}
        >
          <li className="border-b md:border-none font-bold">
          <a
       href="#home"
      className="block px-4 py-2 md:px-6   text-white rounded-lg hover:bg-slate-600 hover:text-white focus:outline-none focus:ring-8 focus:ring-blue-500 active:bg-blue-800 transition duration-300 ease-in-out"
       >
       Home
      </a>
          </li>
          <li className="border-b md:border-none font-bold">
            <a
              href="#skills"
              className="block px-4 py-2 md:px-6   text-white rounded-lg hover:bg-slate-600 hover:text-white focus:outline-none focus:ring-8 focus:ring-blue-500 active:bg-blue-800 transition duration-300 ease-in-out"
            >
              Skills
            </a>
          </li>
          <li className="border-b md:border-none font-bold">
            <a
              href="#about"
              className="block px-4 py-2 md:px-6  text-white rounded-lg hover:bg-slate-600 hover:text-white focus:outline-none focus:ring-8 focus:ring-blue-500 active:bg-blue-800 transition duration-300 ease-in-out"
            >
              About Me
            </a>
          </li>
          <li className="border-b md:border-none font-bold">
            <a
              href="#contact-me"
              className="block px-4 py-2 md:px-6   text-white rounded-lg  hover:bg-slate-600 hover:text-white focus:outline-none focus:ring-8 focus:ring-blue-500 active:bg-blue-800 transition duration-300 ease-in-out"
            >
              Contact Me
            </a>
          </li>
          <li className="border-b md:border-none font-bold">
            <a
              href="#services"
              className="block px-4 py-2 md:px-6   text-white rounded-lg hover:bg-slate-600 hover:text-white focus:outline-none focus:ring-8 focus:ring-blue-500 active:bg-blue-800 transition duration-300 ease-in-out"
            >
              Services
            </a>
          </li>
          <li className="border-b font-bold md:border-none ">
            <a
              href="#MyProject"
              className="block px-4 py-2 md:px-6  text-white rounded-lg hover:bg-slate-600 hover:text-white focus:outline-none focus:ring-8 transition duration-300 "
            >
              MyProject
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;





