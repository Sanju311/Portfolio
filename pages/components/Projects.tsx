import React from "react";
import config from "../index.json";
import Image from "next/image";

const Projects = () => {
  const projects = config.projects;
  return (
    <div
      id={projects.title}
      className="px-8 md:px-16 pb-16 bg-zinc-200 w-full"
    >
      <h1 className="pt-12 uppercase font-bold text-center text-black text-bold text-4xl">{projects.title}</h1>
      <div className="projects__menu max-w-7xl mx-auto w-full">
        <ul className="flex flex-col items-center">
          {projects.projects.map((item) => (
            <li key={item.title} className="flex flex-col lg:flex-row mt-12">
              <div className="lg:w-1/3 text-black">
                <h2 className="text-2xl">
                  {item.title}
                </h2>
                <p className="mt-6 text-lg">
                  {item.description}
                </p>
                {item.url ? (
                  <div className="flex mt-4 gap-x-4">
                    
                    
                    <a href={item.url} target="_blank" rel="noreferrer" className=" rounded-lg py-2 px-4 w-fit text-center font-bold bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-red-500/50 transition-all duration-300 ease-in-out hover:scale-105">
                      See Project
                    </a>
               
                    <a href={item.github} target="_blank" rel="noreferrer" className=" rounded-lg py-2 px-4 w-fit text-center font-bold bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-red-500/50 transition-all duration-300 ease-in-out hover:scale-105">
                        Source Code
                    </a>
    
                  </div>
                ) : (
                  <div className="flex mt-4 gap-x-4">
                    <a href={item.github} target="_blank" rel="noreferrer" className="rounded-lg py-2 px-4 w-fit text-center font-bold bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-red-500/50 transition-all duration-300 ease-in-out hover:scale-105">
                        Source Code
                    </a>
                  </div>

          
                )}
              </div>
              <div className="lg:ml-12">
                <div className="relative w-[700px] h-[350px]">
                  <Image
                    src={item.image}
                    alt="project image"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;