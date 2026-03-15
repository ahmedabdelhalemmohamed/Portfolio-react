import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Doctor Booking",
      des: "A website for booking appointments with doctors",
      skills: ["Tailwindcss", "React"],
      sources: [
        "https://doctors-clicnic-nine.vercel.app/",
        "https://github.com/ahmedabdelhalemmohamed/DoctorsClicnic",
      ],
    },
    {
      name: "E-commerce",
      des: "A website for selling products",
      skills: ["Html", "Css", "JavaScript"],
      sources: [
        "https://ecommerce-kappa-nine-82.vercel.app/",
        "https://github.com/ahmedabdelhalemmohamed/Ecommerce",
      ],
    },
    {
      name: "personal Website",
      des: "A site to showcase my projects",
      skills: ["Html", "Css"],
      sources: [
        "https://my-portfolio-css-html-liart.vercel.app/",
        "https://github.com/ahmedabdelhalemmohamed/My-Portfolio-css-html",
      ],
    },
  ];

  return (
    <div className="text-center mt-10" id="projects">
      <h1 className="font-bold text-2xl">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center ">
        {projects.map((project) => {
           return (<div className="card text-center flex flex-col md:w-75">
            <h1 className="font-bold text-indigo-300 text-xl">
              {project.name}
            </h1>
            <p>{project.des}s</p>
            <div className="flex items-center justify-center flex-col">
              <h3 className="mt-5 mr-5">Created by using:</h3>
              <ul className="flex flex-wrap gap-5 justify-center items-center mt-5 ">
                {project.skills.map((skill) => {
                  return (<li className="link-ski hover:bg-indigo-400">{skill}</li>);
                })}
              </ul>
            </div>
            <div className="flex items-center space-x-5 justify-center flex-col">
              <p className="mt-5">Sources :</p>
              <ul className="flex mt-5 space-x-5">
                <li>
                  <a href={project.sources[0]} className="link-ski hover:bg-indigo-400">
                    Live Demo
                  </a>
                </li>
                <li>
                  <a href={project.sources[1]} className="link-ski hover:bg-indigo-400">
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>);
        })}
      </div>
    </div>
  );
};

export default Projects;
