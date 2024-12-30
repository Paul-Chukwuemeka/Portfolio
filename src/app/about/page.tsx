import React from "react";
import Image from "next/image";
import Cartoon from "../assets/about-cartoon.png";
import Header from "../Components/header";
import Footer from "../Components/footer";
import ParticlesComponent from "../Components/particle";
import {
  FaHandPointRight,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

import { RiNextjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

const page = () => {
  return (
    <div>
      <ParticlesComponent />
      <Header />
      <main className="h-full text-white pt-24 px-20 ">
        <div
          className=" max-md:flex-col
        max-md:justify-center max-md:items-center lg:flex gap-4 
        justify-around items-center"
        >
          <div
            className="flex flex-col gap-4 items-center text-xl 
          text-center font-normal"
          >
            <h1 className="text-3xl font-extrabold">
              Who am{" "}
              <span className="text-sky-500 font-bold">
                {" "}
                I
              </span>{" "}
              ?
            </h1>
            <p>
              Hi Everyone, I am{" "}
              <span className="text-sky-500 font-bold">
                Paul Chukwuemeka
              </span>{" "}
              from{" "}
              <span className="text-sky-500 font-bold">
                Lagos, Nigeria.
              </span>
            </p>
            <p>
              I am currently pursuing a degree in
              computer science at the{" "}
              <span className="text-sky-500 font-bold">
                University of The People.
              </span>
            </p>
            <p className="text-center text-xl lg:w-3/4 mt-4">
              I am a Web Developer with a passion
              for creating beautiful and
              functional user interfaces.
            </p>
            <p className="lg:w-3/4 mt-4 text-xl ">
              I am also experienced in building{" "}
              {""}
              <span className="text-blue-500 font-bold">
                responsive web applications
              </span>{" "}
              using modern web technologies.
            </p>
            <p className="lg:w-3/4 mt-4 text-xl ">
              Whenever possible, I also apply my
              passion for developing products with{" "}
              <span className="text-blue-500 font-bold">
                Node.js
              </span>{" "}
              and Modern{" "}
              <span className="text-blue-500 font-bold text-xl ">
                JavaScript
              </span>{" "}
              Libraries and Frameworks like{" "}
              <span className="text-blue-500 font-bold">
                React
              </span>{" "}
              and{" "}
              <span className="text-blue-500 font-bold">
                Next.js
              </span>
              .
            </p>
            <p>
              Apart from coding, some other
              activities that I love to do!
            </p>

            <ul className="gap-4 self-start text-left ">
              <li className="flex gap-2 items-center">
                <FaHandPointRight /> Playing Games
              </li>
              <li className="flex gap-2 items-center">
                <FaHandPointRight /> Listening to
                Music
              </li>

              <li className="flex gap-2 items-center">
                <FaHandPointRight /> Reading Books
              </li>
            </ul>
          </div>
          <Image
            src={Cartoon}
            width={400}
            alt=""
            className=" m-auto"
          />
        </div>

        <section className="text-center mt-12 flex flex-col gap-2 items-center">
          <h1 className="text-3xl font-extrabold">
            My Professional{" "}
            <span className="text-sky-500 font-bold">
              Skillset
            </span>{" "}
          </h1>
          <div
            className="lg:px-40 px-20 py-10 text-5xl flex flex-wrap 
          grid-col justify-center gap-6 w-full"
          >
            <div className="skills hover:backdrop-blur">
              <FaJsSquare />
              <p>JavaScript</p>
            </div>
            <div className="skills hover:backdrop-blur">
              <SiTypescript />
              <p>TypeScript</p>
            </div>
            <div className="skills hover:backdrop-blur">
              <FaReact />
              <p>React</p>
            </div>
            <div className="skills hover:backdrop-blur">
              <FaNodeJs />
              <p>Node.js</p>
            </div>
            <div className="skills hover:backdrop-blur">
              <IoLogoFirebase />
              <p>Firebase</p>
            </div>
            <div className="skills hover:backdrop-blur">
              <FaGitAlt />
              <p>Git</p>
            </div>
            <div className="skills hover:backdrop-blur">
              <DiMongodb />
              <p>MongoDB</p>
            </div>
            <div className="skills hover:backdrop-blur">
              <RiNextjsLine />
              <p>Next.js</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default page;
