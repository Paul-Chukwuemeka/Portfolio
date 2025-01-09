import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Project from "./components/Project";
import projectData from "./assets/data/projects.json";
const page = () => {
  const projects = projectData.projects;
  return (
    <div>
      <Header />
      <div className="h-fit min-h-[80vh] text-white">
        <main className="mt-24 h-fit flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">
            My Projects
          </h1>
          <p className="text-xl p-2">
            Here are some of my recent projects
          </p>

          <section className="grid lg:grid-cols-3 sm:px-36 lg:px-10  max-sm:grid-cols-1 md:p-10 md:grid-cols-2 gap-4 p-5 justify-center
          lg:w-[900px]">
            {projects.map((project, index) => (
              <Project
                key={index}
                project={project}
              />
            ))}
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default page;
