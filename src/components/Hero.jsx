import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="grid grid-cols-6">
      <div>
        <div>
          <h1>I'm Ahmed Abdelhalem Mohamed</h1>
          <h3>Frontend Developer (React)</h3>
          <p>I build responsive and modern web applications.</p>
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/ahmedabdelhalemmohamed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-abdelhalem-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
