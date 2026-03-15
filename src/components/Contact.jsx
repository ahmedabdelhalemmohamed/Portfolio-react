import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaUser } from "react-icons/fa";

const Contact = () => {
  const [comments, setComments] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && comments) {
      setMessage((prev) => [...prev, { name: name, comments: comments }]);
    }
    setName("");
    setComments("");
  };

  return (
    <div className="mt-10 ">
      <div className="text-center space-y-2">
        <h2 className="font-bold text-xl">Contact Me</h2>

        <p>
          Feel free to reach out if you have a project idea or job opportunity.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/ahmedabdelhalemmohamed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition rounded-full"
          >
            <FaGithub className="rounded-full" />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-abdelhalem-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-600 transition rounded-full"
          >
            <FaLinkedin className="rounded-full" />
          </a>

          <a
            href="https://wa.me/201234567890"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-green-500 text-2xl rounded-full"
          >
            <FaWhatsapp className="rounded-full" />
          </a>
        </div>
      </div>
      <form className="flex flex-col  gap-4 m-5" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row mt-5 space-y-5 justify-around items-center">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="sm:w-1/3 w-full border-2 border-indigo-400 p-2 outline-none"
          />
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Your Message"
            className="sm:w-1/3 w-full border-2 border-indigo-400 p-2 outline-none "
          ></textarea>
        </div>
        <button className="block link-ski w-50 mx-auto hover:bg-indigo-400">
          Send Message
        </button>
      </form>
      <div className="text-center mt-5 link-ski w-50 mx-auto hover:bg-indigo-400">
        <a href="mailto:ahmedabdelhalemmohamed2026@gmail.com">
          Send To My Email
        </a>
      </div>
      {message.map((comment, index) => {
        return (
          <div key={index}>
            <div>
              <FaUser className="text-3xl text-indigo-500" />
            </div>
            <div>
              <h1>{comment.name}</h1>
              <p>{comment.comments}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Contact;
