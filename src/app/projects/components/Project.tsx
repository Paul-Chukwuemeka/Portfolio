import React from "react";
// import Image from "next/image";

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
    <div className="shadow-custom-shadow shadow-sky-400 p-4 rounded-lg hover:scale-[1.10] duration-500 hover:m-2 max-md:max-w-96 ">
      {/* <Image
        alt="screenshot of Project"
        src={project.image}
      /> */}

      <h2>{project.name}</h2>

      <p className="p-4 max-sm:text-sm max-md:text-md max-lg:text-md " >{project.description}</p>
      <div className="flex gap-3 items-center justify-center my-2">
      <a href={project.github} className="bg-sky-500 p-2 rounded text">GitHub</a>
      <a href={project.github} className="bg-sky-500 p-2 rounded">Live</a>
      </div>
      <p className="my-2 text-center">Technologies Used:</p>
      <ul className="flex gap-3 items-center  flex-wrap justify-center">
        {project.technologies.map(
          (tech, index) => (
            <li key={index} className="bg-sky-500 p-2 rounded-lg">{tech}</li>
          )
        )}
      </ul>
    </div>
  );
};

export default Project;
