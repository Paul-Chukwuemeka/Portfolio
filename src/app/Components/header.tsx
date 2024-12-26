"use client";
import React, {
  useState,
  useEffect,
} from "react";
import {
  FaRegUser,
  FaHome,
} from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoDocumentText } from "react-icons/io5";

const Header = () => {
  const [menuState, setMenuState] =
    useState(false);
  return (
    <div
      className="sticky bg-[#1a1a758f] top-0 z-50 flex flex-col justify-around items-center
      px-10 py-4 h-fit text-white backdrop-blur-sm lg:py-4 "
    >
      <nav
        className="flex justify-around items-center w-full
       max-md:justify-between"
      >
        <h1 className="text-2xl lg:text-4xl font-extrabold text-blue-500">
          PCE.
        </h1>
        <button className="text-3xl text-sky-500 lg:hidden">
          <FaBars />
        </button>
        <ul className=" nav flex gap-6 text-xl max-md:hidden ">
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
      </nav>
      {menuState && (
        <ul className=" nav flex-col text-xl">
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
      )}
    </div>
  );
};

export default Header;
