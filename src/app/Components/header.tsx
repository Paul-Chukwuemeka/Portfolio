"use client";
import React, {
  useState,
} from "react";
import {
  FaRegUser,
  FaHome,
} from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";

const Header = () => {
  // const navigate = useNavigate()
  const [menuState, setMenuState] =
    useState(false);
  return (
    <div
      className="fixed w-full bg-[#1a1a752f] top-0 z-50 flex flex-col justify-around items-center
      px-10 py-4 h-fit text-white backdrop-blur-lg 
      lg:py-4 header "
    >
      <nav
        className="flex justify-around items-center w-full
       max-md:justify-between"
      >
        <Link href={"/"}>
          <h1 className="text-2xl lg:text-4xl font-extrabold text-blue-500">
            PCE.
          </h1>
        </Link>
        <button
          className="text-3xl text-sky-500 focus:outline-none lg:hidden"
          onClick={() => {
            setMenuState((prev) => !prev);
          }}
        >
          <FaBars />
        </button>
        <ul className=" nav flex gap-6 text-xl max-md:hidden">
          <Link href={"/"}>
            <li>
              <FaHome />
              Home
            </li>
          </Link>
          <Link href={"/about"}>
            <li>
              <FaRegUser />
              About
            </li>
          </Link>
          <Link href={"/projects"}>
            <li>
              <AiOutlineFundProjectionScreen />
              Projects
            </li>
          </Link>
          <Link href={"/resume"}>
            <li>
              <IoDocumentText />
              Resume
            </li>
          </Link>
        </ul>
      </nav>
      {menuState && (
        <ul className=" lg:hidden flex nav-sm flex-col text-2xl gap-2">
          <Link href={"/"}>
            <li>
              <FaHome />
              Home
            </li>
          </Link>
          <Link href={"/about"}>
            <li>
              <FaRegUser />
              About
            </li>
          </Link>
          <Link href={"/projects"}>
            <li>
              <AiOutlineFundProjectionScreen />
              Projects
            </li>
          </Link>
          <Link href={"/resume"}>
            <li>
              <IoDocumentText />
              Resume
            </li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Header;
