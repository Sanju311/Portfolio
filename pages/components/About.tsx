import React from "react";
import config from "../index.json";
import Image from "next/image";

const About = () => {
  const about = config.about;
  return (
    <div id="About" className="px-8 md:px-32 pb-32 content-center bg-zinc-300">
      <h1 className="pt-12 uppercase font-bold text-center text-black text-bold text-4xl">{about.title}</h1>
      <div className="mt-16 flex flex-col md:flex-row align-center items-center max-w-6xl mx-auto">
        <div className="w-1/2 flex justify-center content-center">
          <Image 
            src={'/headshot.jpg'} 
            alt="about" 
            className="shadow-lg" 
            width={300} 
            height={300}
            />
        </div>
        <div className="pt-8 md:py-0 md:w-1/2 text-black md:ml-4 text-center md:text-left text-lg p-12">
          <div className="about__primary">
            <span>{about.primary}</span>
          </div>
          <div className="mt-6">
            <span>{about.secondary}</span>
          </div>


          <div className="flex mt-4 gap-x-4">
            <a href={'/new_grad_resume.pdf'} 
              className=" mx-auto md:mx-0 rounded-lg py-2 px-4 w-fit text-center font-bold bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-red-500/50 transition-all duration-300 ease-in-out hover:scale-105" 
              target="_blank">
                View Resume
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;