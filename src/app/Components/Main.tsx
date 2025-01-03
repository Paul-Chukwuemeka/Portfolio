"use client";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import MyImage from "../assets/pngwing.com.png";
import Profile from "../assets/Profile.jpg";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";

const Main = () => {
  return (
    <main
      className="text-white w-full flex flex-col items-center relative max-lg:pt-32
     -top-20"
    >
      <section
        className="font-bold px-32 py-20 text-4xl sm:pt-44 flex justify-evenly flex-col 
  md:flex-row  lg:items-center lg:justify-around lg:gap-8
md:justify-around md:gap-1 gap-8 items-center bg-[#5e5edf21] w-full"
      >
        <div className="flex-col flex gap-5 md:p-14">
          <h1 className="flex gap-2">
            Hi There!
            <span className="wave -mt-2">👋🏾</span>
          </h1>
          <h1>
            I{"'"}m{" "}
            <span className="text-blue-500">
              Paul Chukwuemeka
            </span>
          </h1>
          <h2 className="text-2xl font-bold">
            I am a{" "}
            <span className="text-blue-500">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "Backend Developer",
                  "MERN Stack Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </span>
          </h2>
        </div>
        <Image
          src={MyImage}
          width={400}
          alt="profile"
          className="lg:w-1/2"
        />
      </section>
      <section className=" flex flex-col items-center p-8">
        <h2 className="text-4xl font-bold text-blue-500 mt-8 ">
          About Me
        </h2>
        <p className="text-xl lg:w-3/4 mt-4">
          I am a Frontend Developer with a passion
          for creating beautiful and functional
          user interfaces.
        </p>
        <p className="lg:w-3/4 mt-4 text-xl ">
          I am also experienced in building {""}
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
        <div className="text-blue-500 ">
          <Tilt
            className="Tilt"
            tiltReverse={true}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            reset={true}
            scale={1}
            transitionSpeed={3000}
          >
            <Image
              src={Profile}
              alt="profile"
              className="rounded-2xl my-8 overflow-hidden m-auto              
              w-[300px] h-[300px] shadow-md shadow-blue-300"
            />
          </Tilt>
          <h1 className="text-3xl font-bold text-center">
            Contact me on
          </h1>
          <span
            className="flex items-center justify-center gap-10 text-3xl 
          font-bold cursor-pointer mt-4 "
          >
            <a
              href="http://www.github.com/Paul-Chukwuemeka"
              className="block hover:shadow-xl hover:shadow-blue-500 bg-white p-2 rounded-full"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/paulchukwuemeka"
              className="block hover:shadow-xl hover:shadow-blue-500 bg-white p-2 rounded-full"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/PaulDProgrammer"
              className="block hover:shadow-xl hover:shadow-blue-500 bg-white p-2 rounded-full"
            >
              <FaTwitter />
            </a>
          </span>
        </div>
      </section>
    </main>
  );
};

export default Main;
