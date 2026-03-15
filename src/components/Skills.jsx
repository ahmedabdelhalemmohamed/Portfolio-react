import React from "react";

const Skills = () => {
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="font-bold text-xl">My Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(2,minmax(0,400px))] gap-4 justify-center">
          <div className="card hover:animate-pulse">
            <h1 className="font-bold text-indigo-300 text-xl">Fronted</h1>
            <ul className="flex flex-wrap gap-5 justify-center items-center mt-5">
              <li className="link-ski">Html</li>
              <li className="link-ski">Css</li>
              <li className="link-ski">JavaScript</li>
              <li className="link-ski">Bootstrap</li>
              <li className="link-ski">Tailwindcss</li>
              <li className="link-ski">React</li>
            </ul>
          </div>

          <div className="card hover:animate-pulse">
            <h1 className="font-bold text-indigo-300 text-xl">Tools</h1>
            <ul className="flex flex-wrap gap-5 justify-center items-center mt-5">
              <li className="link-ski">Git</li>
              <li className="link-ski">GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
