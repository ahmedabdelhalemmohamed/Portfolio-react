import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 p-10 sm:grid-cols-2 justify-items-center text-center">
      <div className="flex flex-col justify-center items-center space-y-5 order-2 sm:order-1">
        <div className="space-y-2">
          <h1 className="text-xl font-bold">I'm Ahmed Abdelhalem Mohamed</h1>
          <h3 className="text-xs">Frontend Developer (React)</h3>
          <p className="text-xs">I build responsive and modern web applications.</p>
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/ahmedabdelhalemmohamed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition rounded-full"
          >
            <FaGithub className="rounded-full"/>
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-abdelhalem-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-600 transition rounded-full"
          >
            <FaLinkedin className="rounded-full"/>
          </a>
        </div>
      </div>
      <div className="order-1 sm:order-2">
        <img src="/person.png" height={200} width={200} className="sm:rounded-full sm:ml-auto rounded-4xl "/>
      </div>
    </div>
  );
};

export default Hero;
