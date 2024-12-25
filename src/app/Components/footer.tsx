import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="text-white  px-10 py-2 bg-[#1a202c7a] 
      max-lg:text-md max-lg:flex-col max-lg:gap-1 xl:text-[1.2rem]
      w-full flex justify-around items-center gap-4 text-center"
    >
      <p>
        <span className="max-sm:hidden max-md:hidden">
          Designed and{" "}
        </span>{" "}
        Developed By{" "}
        <span className="font-bold text-blue-600">
          Paul Chukwuemeka
        </span>
      </p>
      <p>
        Copyright © 2024{" "}
        <span className="text-blue-600">
          PCE.
        </span>
      </p>
      <ul className="flex gap-4 text-2xl max-sm:text-xl text-blue-600">
        <li>
          <a href="https://www.linkedin.com/in/paulchukwuemeka">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/Paul-Chukwuemeka">
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
