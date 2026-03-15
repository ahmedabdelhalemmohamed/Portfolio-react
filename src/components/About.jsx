import React from "react";

const About = () => {
  return (
    <div className="text-center" id="about">
      <h1 className="font-bold text-xl">About Me</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="card hover:animate-pulse hover:animate-pulse">
          <h1 className="font-bold text-indigo-300" >Who am I?</h1>
          <p className="text-sm">
            I am a Frontend Developer specializing in React. I enjoy building
            responsive and user-friendly web applications, focusing on clean and
            efficient code.
          </p>
        </div>

        <div className="card hover:animate-pulse">
          <h1 className="font-bold text-indigo-300">What am I studying?</h1>
          <p className="text-sm">
            I am continuously improving my skills in web development and plan to
            become a Full Stack Developer in the near future.
          </p>
        </div>

        <div className="card hover:animate-pulse">
          <h1 className="font-bold text-indigo-300">What am I learning?</h1>
          <p className="text-sm">
            I am deepening my knowledge of React and exploring new technologies
            to enhance my development workflow.
          </p>
        </div>

        <div className="card hover:animate-pulse">
          <h1 className="font-bold text-indigo-300">My Experience</h1>
          <p className="text-sm">
            Over the past year, I have built multiple responsive websites and
            gained hands-on experience in frontend development projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
