import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className=" p-4 shadow-md sticky top-0 z-[100] bg-slate-500">
      <div className="flex justify-between items-center ">
        <h1 className="text-xl font-bold">
          <a href="">Ahmed</a>
        </h1>

        <ul className="gap-6 hidden sm:flex">
          <li className="link">
            <a href="#home">Home</a>
          </li>
          <li className="link">
            <a href="#about">About</a>
          </li>
          <li className="link">
            <a href="#skills">Skills</a>
          </li>
          <li className="link">
            <a href="#projects">Projects</a>
          </li>
          <li className="link">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <a
          href="/Ahmed Abdelhalem Mohamed.pdf"
          download="Ahmed Abdelhalem cv.pdf"
          className="bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-2 rounded-full hidden sm:block"
        >
          Download CV
        </a>

        {/* Mobile Menu Button */}

        <button onClick={() => setMenu(!menu)} className="block sm:hidden">
          {menu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}

      {menu && (
        <div className="absolute bg-slate-500 left-0 w-full p-4 animate-menu">
          <ul className="space-y-2">
            <li className="link-mob">
              <a href="#home">Home</a>
            </li>
            <li className="link-mob">
              <a href="#about">About</a>
            </li>
            <li className="link-mob">
              <a href="#skills">Skills</a>
            </li>
            <li className="link-mob">
              <a href="#projects">Projects</a>
            </li>
            <li className="link-mob">
              <a href="#contact">Contact</a>
            </li>
            <li>
                <a
          href="/Ahmed Abdelhalem Mohamed.pdf"
          download="Ahmed-Abdelhalem-cv.pdf"
          className="bg-indigo-500 text-white px-4 py-2 rounded-full -ml-2"
        >
          Download CV
        </a>
            </li>
          </ul>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
