import React from "react";
import {
  // FaGithub,
  // FaGlobe,
  FaReact,
} from "react-icons/fa";
import Image from "next/image";

interface ProjectProps {
  project: {
    name: string;

    description: string;

    github: string;

    live?: string;

    technologies: string[];

    images: {
      src: string;

      alt: string;
    };
  };
}

const Project: React.FC<ProjectProps> = ({
  project,
}) => {
  return (
    <div className="shadow-custom-shadow flex flex-col items-center justify-center shadow-sky-400 p-4 rounded-lg hover:scale-[1.10] duration-500 hover:m-2 max-md:max-w-96 ">
      <Image
        alt="screenshot of Project"
        src={project.images.src}
        width={400}
        height={200}
        className="w-full h-[200px]"

      />

      <h2>{project.name}</h2>

      <p className="p-4 w-[300px] text-center max-sm:text-sm max-md:text-md max-lg:text-md ">
        {project.description}
      </p>

      <p className="my-2 text-center">
        Technologies Used:
      </p>
      <ul className="flex gap-3 items-center  flex-wrap justify-center">
        {project.technologies.map(
          (tech, index) => (
            <li
              key={index}
              className="bg-sky-500 p-2 rounded-lg flex gap-2 items-center"
            >
              {tech == "React.js" ? <FaReact /> : ""}
              {tech}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Project;
