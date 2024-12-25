import React from "react";
import {
  FaRegUser,
  FaHome,
} from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoDocumentText } from "react-icons/io5";

const Header = () => {
  return (
    <div
      className="sticky top-0 z-50 flex justify-around items-center bg-[#1a202c7a]
    px-10 py-4 w-full text-white backdrop-blur-sm lg:py-10"
    >
      <h1 className="text-2xl font-extrabold text-blue-500">
        PCE.
      </h1>
      <ul className=" nav flex gap-6 text-xl ">
        <li>
          <FaHome />
          Home
        </li>
        <li>
          <FaRegUser />
          About
        </li>
        <li>
          <AiOutlineFundProjectionScreen />
          Projects
        </li>
        <li>
          <IoDocumentText />
          Resume
        </li>
      </ul>
    </div>
  );
};

export default Header;
